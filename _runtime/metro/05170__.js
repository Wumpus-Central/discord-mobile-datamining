// === Module 5170: ? ===

// Module 5170
let c0 = 18761;
let c1 = 19789;
arg5.default = {
  BIG_ENDIAN: 19789,
  LITTLE_ENDIAN: 18761,
  getByteOrder(getUint16, sum) {
    if (getUint16.getUint16(sum) === c0) {
      return c0;
    } else if (getUint16.getUint16(sum) === c1) {
      return c1;
    } else {
      const _Error = Error;
      error = new Error("Illegal byte order value. Faulty image.");
      throw error;
    }
  }
};