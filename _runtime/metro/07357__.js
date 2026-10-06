// === Module 7357: ? ===

// Module 7357
import _createClassDefault from "_createClass" /* 42 */;
import _classCallCheck from "_classCallCheck" /* 41 */;

class DataView {
  constructor(readUInt8) {
    const self = this;
    _classCallCheck(this, DataView);
    const tmp2 = typeof readUInt8 !== "object" || undefined === readUInt8.length || undefined === readUInt8.readUInt8 || undefined === readUInt8.readUInt16LE || undefined === readUInt8.readUInt16BE || undefined === readUInt8.readUInt32LE || undefined === readUInt8.readUInt32BE || undefined === readUInt8.readInt32LE || undefined === readUInt8.readInt32BE;
    if (tmp2) {
      const _Error = Error;
      const self2 = this;
      const self3 = this;
      const error = new Error("DataView: Passed buffer type is unsupported.");
      throw error;
    } else {
      self.buffer = readUInt8;
      self.byteLength = self.buffer.length;
    }
  }
}
const entry = {
  key: "getUint8",
  value: function getUint8(sum) {
    const buffer = this.buffer;
    return buffer.readUInt8(sum);
  }
};
const items = [
  entry,
  {
    key: "getUint16",
    value: function getUint16(c5, arg1) {
      let uInt16LE;
      const buffer = this.buffer;
      const tmp = arg1;
      if (tmp) {
        uInt16LE = buffer.readUInt16LE(c5);
      } else {
        uInt16LE = buffer.readUInt16BE(c5);
      }
      return uInt16LE;
    }
  },
  {
    key: "getUint32",
    value: function getUint32(sum, arg1) {
      let uInt32LE;
      const buffer = this.buffer;
      const tmp = arg1;
      if (tmp) {
        uInt32LE = buffer.readUInt32LE(sum);
      } else {
        uInt32LE = buffer.readUInt32BE(sum);
      }
      return uInt32LE;
    }
  },
  {
    key: "getInt32",
    value: function getInt32(sum, arg1) {
      let int32LE;
      const buffer = this.buffer;
      const tmp = arg1;
      if (tmp) {
        int32LE = buffer.readInt32LE(sum);
      } else {
        int32LE = buffer.readInt32BE(sum);
      }
      return int32LE;
    }
  }
];

export default _createClassDefault(DataView, items);