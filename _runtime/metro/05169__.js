// === Module 5169: ? ===

// Module 5169
const module = arg2;
const dependencyMap = arg6;
arg5.default = {
  isTiffFile(byteLength) {
    let tmp = byteLength;
    if (tmp) {
      tmp = byteLength.byteLength >= 4;
    }
    if (tmp) {
      const uint16 = byteLength.getUint16(0);
      tmp = byteLength.getUint16(2, uint16 === module(5170).LITTLE_ENDIAN) === 42;
    }
    return tmp;
  },
  findTiffOffsets() {
    if (module(5168).USE_EXIF) {
      return { hasAppMarkers: true, tiffHeaderOffset: 0 };
    } else {
      return {};
    }
  }
};