// _runtime/metro/05126__.js
const module = arg2;
const dependencyMap = arg6;
let obj = { 1: 1, 2: 1, 3: 2, 4: 4, 5: 8, 7: 1, 9: 4, 10: 8, 13: 4 };
obj = { BYTE: 1, ASCII: 2, SHORT: 3, LONG: 4, RATIONAL: 5, UNDEFINED: 7, SLONG: 9, SRATIONAL: 10, IFD: 13 };
obj = {
  getAsciiValue(items) {
    return items.map((arg0) => String.fromCharCode(arg0));
  },
  getByteAt(getUint8, sum) {
    return getUint8.getUint8(sum);
  },
  getAsciiAt(getUint8, sum) {
    return getUint8.getUint8(sum);
  },
  getShortAt(dataView, sum, byteOrder) {
    return dataView.getUint16(sum, byteOrder === module(5114).LITTLE_ENDIAN);
  },
  getLongAt(dataView, sum, byteOrder) {
    return dataView.getUint32(sum, byteOrder === module(5114).LITTLE_ENDIAN);
  },
  getRationalAt(getUint32, sum) {
    const items = [getUint32.getUint32(sum, arg2 === module(5114).LITTLE_ENDIAN), ];
    sum = sum + 4;
    items[1] = getUint32.getUint32(sum, arg2 === module(5114).LITTLE_ENDIAN);
    return items;
  },
  getUndefinedAt(getUint8, sum) {
    return getUint8.getUint8(sum);
  },
  getSlongAt(getInt32, sum) {
    return getInt32.getInt32(sum, arg2 === module(5114).LITTLE_ENDIAN);
  },
  getSrationalAt(getInt32, sum) {
    const items = [getInt32.getInt32(sum, arg2 === module(5114).LITTLE_ENDIAN), ];
    sum = sum + 4;
    items[1] = getInt32.getInt32(sum, arg2 === module(5114).LITTLE_ENDIAN);
    return items;
  },
  getIfdPointerAt(getUint32, sum) {
    return getUint32.getUint32(sum, arg2 === module(5114).LITTLE_ENDIAN);
  },
  typeSizes: obj,
  tagTypes: obj,
  getTypeSize(LONG) {
    if (undefined === obj[LONG]) {
      const _Error = Error;
      error = new Error("No such type found.");
      throw error;
    } else {
      return obj[tmp[LONG]];
    }
  }
};
arg5.default = obj;