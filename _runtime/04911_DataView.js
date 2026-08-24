// === Module 4911: DataView ===

// Module 4911 (DataView)
import _createClassDefault from "_createClass" /* 42 */;
import DataView from "_classCallCheck" /* 41 */;

class DataView {
  constructor(arg0) {
    self = this;
    tmp = DataView(this, DataView);
    tmp2 = typeof global !== "object";
    if (typeof global === "object") {
      tmp2 = undefined === global.length;
    }
    if (!tmp2) {
      tmp2 = undefined === global.readUInt8;
    }
    if (!tmp2) {
      tmp2 = undefined === global.readUInt16LE;
    }
    if (!tmp2) {
      tmp2 = undefined === global.readUInt16BE;
    }
    if (!tmp2) {
      tmp2 = undefined === global.readUInt32LE;
    }
    if (!tmp2) {
      tmp2 = undefined === global.readUInt32BE;
    }
    if (!tmp2) {
      tmp2 = undefined === global.readInt32LE;
    }
    if (!tmp2) {
      tmp2 = undefined === global.readInt32BE;
    }
    if (tmp2) {
      tmp3 = globalThis;
      _Error = Error;
      tmp4 = new.target;
      str = "DataView: Passed buffer type is unsupported.";
      tmp5 = new.target;
      error = new Error("DataView: Passed buffer type is unsupported.");
      tmp7 = error;
      throw error;
    } else {
      self.buffer = global;
      self.byteLength = self.buffer.length;
      return;
    }
  }
}
const items = [
  {
    key: "getUint8",
    value: function getUint8(sum) {
      const buffer = this.buffer;
      return buffer.readUInt8(sum);
    }
  },
  {
    key: "getUint16",
    value: function getUint16(sum, arg1) {
      const buffer = this.buffer;
      if (arg1) {
        let uInt16LE = buffer.readUInt16LE(sum);
      } else {
        uInt16LE = buffer.readUInt16BE(sum);
      }
      return uInt16LE;
    }
  },
  {
    key: "getUint32",
    value: function getUint32(sum, arg1) {
      const buffer = this.buffer;
      if (arg1) {
        let uInt32LE = buffer.readUInt32LE(sum);
      } else {
        uInt32LE = buffer.readUInt32BE(sum);
      }
      return uInt32LE;
    }
  },
  {
    key: "getInt32",
    value: function getInt32(sum, arg1) {
      const buffer = this.buffer;
      if (arg1) {
        let int32LE = buffer.readInt32LE(sum);
      } else {
        int32LE = buffer.readInt32BE(sum);
      }
      return int32LE;
    }
  }
];

export default _createClassDefault(DataView, items);