// Jalankan: npm test
import assert from "node:assert/strict";
import test from "node:test";
import {
  BOOKING_KOSONG,
  hariIni,
  validateBooking,
  type BookingInput,
} from "./booking-validation.ts";

const VALID: BookingInput = {
  nama: "Rani",
  whatsapp: "081234567890",
  tanggal: "2026-09-25",
  jam: "10:00",
  orang: "2",
  catatan: "",
};

const BATAS = "2026-09-25";

test("input lengkap lolos", () => {
  assert.deepEqual(validateBooking(VALID, BATAS), {});
});

test("catatan boleh kosong, sisanya wajib", () => {
  const errors = validateBooking({ ...BOOKING_KOSONG, orang: "" }, BATAS);
  assert.deepEqual(Object.keys(errors).sort(), [
    "jam",
    "nama",
    "orang",
    "tanggal",
    "whatsapp",
  ]);
});

test("whatsapp harus angka dan minimal 10 digit", () => {
  assert.ok(validateBooking({ ...VALID, whatsapp: "0812-3456" }, BATAS).whatsapp);
  assert.ok(validateBooking({ ...VALID, whatsapp: "081234" }, BATAS).whatsapp);
  assert.ok(!validateBooking({ ...VALID, whatsapp: "0812345678" }, BATAS).whatsapp);
});

test("tanggal kemarin ditolak, hari ini diterima", () => {
  assert.ok(validateBooking({ ...VALID, tanggal: "2026-09-24" }, BATAS).tanggal);
  assert.ok(!validateBooking({ ...VALID, tanggal: BATAS }, BATAS).tanggal);
});

test("jumlah orang di luar 1..8 ditolak", () => {
  for (const orang of ["0", "9", "2.5", "abc"]) {
    assert.ok(validateBooking({ ...VALID, orang }, BATAS).orang, `orang=${orang}`);
  }
  for (const orang of ["1", "8"]) {
    assert.ok(!validateBooking({ ...VALID, orang }, BATAS).orang, `orang=${orang}`);
  }
});

test("hariIni pakai tanggal lokal, bukan UTC", () => {
  // 23:30 lokal tanggal 25 — kalau dihitung lewat UTC bisa lompat ke 26.
  const malam = new Date(2026, 8, 25, 23, 30);
  assert.equal(hariIni(malam), "2026-09-25");
});
