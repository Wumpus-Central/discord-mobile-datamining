// === Module 1228: wrappers ===

// Module 1228 (wrappers)
import _mod1198 from "module_1198" /* 1198 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import size from "module_2" /* 2 */;

let tmp;
let tmp2;
const MessageType = _mod1198.MessageType;
class DoubleValue$Type extends MessageType {
  constructor() {
    const items = [{ no: 1, name: "value", kind: "scalar", T: 1 }];
    const tmp2 = new tmp("google.protobuf.DoubleValue", items, new.target);
    return tmp2;
  }
  internalJsonWrite(value) {
    const refJsonWriter = this.refJsonWriter;
    return refJsonWriter.scalar(2, value.value, "value", false, true);
  }
  internalJsonRead(arg0, arg1, arg2) {
    const self = this;
    const tmp = arg2 || self.create();
    const refJsonReader = self.refJsonReader;
    tmp.value = refJsonReader.scalar(arg0, 1, undefined, "value");
    return tmp;
  }
  create(arr) {
    const obj = { value: 0 };
    const _Object = Object;
    const obj2 = { enumerable: false, value: this };
    _Object.defineProperty(obj, _mod1198.MESSAGE_TYPE, obj2);
    if (undefined !== arr) {
      const tmpResult = _mod1198;
      const result = tmpResult.reflectionMergePartial(this, obj, arr);
    }
    return obj;
  }
  internalBinaryRead(pos, arg1, readUnknownField, arg3) {
    let tmp5;
    let tmp6;
    const self = this;
    let obj = arg3;
    if (arg3 == null) {
      obj = self.create();
    }
    const sum = pos.pos + arg1;
    if (pos.pos < sum) {
      do {
        let tmp4 = _slicedToArray(pos.tag(), 2);
        [tmp5, tmp6] = tmp4;
        if (1 === tmp5) {
          obj.value = pos.double();
        } else {
          let onRead = readUnknownField.readUnknownField;
          if ("throw" === onRead) {
            let tmp15 = globalThis;
            let _globalThis = globalThis;
            let _HermesInternal = HermesInternal;
            let str = ") for ";
            let str2 = " (wire type ";
            let str3 = "Unknown field ";
            let self2 = this;
            let self3 = this;
            let error = new Error("Unknown field " + tmp5 + " (wire type " + tmp6 + ") for " + self.typeName);
            throw error;
          } else {
            let skipResult = pos.skip(tmp6);
            if (false !== onRead) {
              if (true === onRead) {
                onRead = _mod1198.UnknownFieldHandler.onRead;
              }
              let onReadResult = onRead(self.typeName, obj, tmp5, tmp6, skipResult);
            }
          }
        }
      } while (pos.pos < sum);
    }
    return obj;
  }
  internalBinaryWrite(value, tag, writeUnknownFields) {
    if (0 !== value.value) {
      const tagResult = tag.tag(1, _mod1198.WireType.Bit64);
      tagResult.double(value.value);
    }
    let onWrite = writeUnknownFields.writeUnknownFields;
    if (false !== onWrite) {
      if (1 == onWrite) {
        onWrite = _mod1198.UnknownFieldHandler.onWrite;
      }
      const self = this;
      onWrite(this.typeName, value, tag);
    }
    return tag;
  }
}
const prototype = DoubleValue$Type.prototype;
let items = [{ no: 1, name: "value", kind: "scalar", T: 1 }];
const defineProperty1 = new defineProperty("google.protobuf.DoubleValue", items, tmp2, "internalJsonWrite", "internalJsonRead");
const MessageType2 = _mod1198.MessageType;
class FloatValue$Type extends MessageType2 {
  constructor() {
    const items = [{ no: 1, name: "value", kind: "scalar", T: 2 }];
    const tmp2 = new tmp("google.protobuf.FloatValue", items, new.target);
    return tmp2;
  }
  internalJsonWrite(value) {
    const refJsonWriter = this.refJsonWriter;
    return refJsonWriter.scalar(1, value.value, "value", false, true);
  }
  internalJsonRead(arg0, arg1, arg2) {
    const self = this;
    const tmp = arg2 || self.create();
    const refJsonReader = self.refJsonReader;
    tmp.value = refJsonReader.scalar(arg0, 1, undefined, "value");
    return tmp;
  }
  create(arr) {
    const obj = { value: 0 };
    const _Object = Object;
    const obj2 = { enumerable: false, value: this };
    _Object.defineProperty(obj, _mod1198.MESSAGE_TYPE, obj2);
    if (undefined !== arr) {
      const tmpResult = _mod1198;
      const result = tmpResult.reflectionMergePartial(this, obj, arr);
    }
    return obj;
  }
  internalBinaryRead(pos, arg1, readUnknownField, arg3) {
    let tmp5;
    let tmp6;
    const self = this;
    let obj = arg3;
    if (arg3 == null) {
      obj = self.create();
    }
    const sum = pos.pos + arg1;
    if (pos.pos < sum) {
      do {
        let tmp4 = _slicedToArray(pos.tag(), 2);
        [tmp5, tmp6] = tmp4;
        if (1 === tmp5) {
          obj.value = pos.float();
        } else {
          let onRead = readUnknownField.readUnknownField;
          if ("throw" === onRead) {
            let tmp15 = globalThis;
            let _globalThis = globalThis;
            let _HermesInternal = HermesInternal;
            let str = ") for ";
            let str2 = " (wire type ";
            let str3 = "Unknown field ";
            let self2 = this;
            let self3 = this;
            let error = new Error("Unknown field " + tmp5 + " (wire type " + tmp6 + ") for " + self.typeName);
            throw error;
          } else {
            let skipResult = pos.skip(tmp6);
            if (false !== onRead) {
              if (true === onRead) {
                onRead = _mod1198.UnknownFieldHandler.onRead;
              }
              let onReadResult = onRead(self.typeName, obj, tmp5, tmp6, skipResult);
            }
          }
        }
      } while (pos.pos < sum);
    }
    return obj;
  }
  internalBinaryWrite(value, tag, writeUnknownFields) {
    if (0 !== value.value) {
      const tagResult = tag.tag(1, _mod1198.WireType.Bit32);
      tagResult.float(value.value);
    }
    let onWrite = writeUnknownFields.writeUnknownFields;
    if (false !== onWrite) {
      if (1 == onWrite) {
        onWrite = _mod1198.UnknownFieldHandler.onWrite;
      }
      const self = this;
      onWrite(this.typeName, value, tag);
    }
    return tag;
  }
}
const prototype2 = FloatValue$Type.prototype;
const items1 = [{ no: 1, name: "value", kind: "scalar", T: 2 }];
const defineProperty2 = new defineProperty("google.protobuf.FloatValue", items1, tmp2, "internalJsonWrite", "internalJsonRead");
const MessageType3 = _mod1198.MessageType;
class Int64Value$Type extends MessageType3 {
  constructor() {
    const items = [{ no: 1, name: "value", kind: "scalar", T: 3 }];
    const tmp2 = new tmp("google.protobuf.Int64Value", items, new.target);
    return tmp2;
  }
  internalJsonWrite(value) {
    const refJsonWriter = this.refJsonWriter;
    return refJsonWriter.scalar(_mod1198.ScalarType.INT64, value.value, "value", false, true);
  }
  internalJsonRead(arg0, arg1, arg2) {
    const self = this;
    const tmp = arg2 || self.create();
    const refJsonReader = self.refJsonReader;
    const scalar = refJsonReader.scalar;
    tmp.value = scalar(arg0, _mod1198.ScalarType.INT64, _mod1198.LongType.STRING, "value");
    return tmp;
  }
  create(arr) {
    const obj = { value: "0" };
    const _Object = Object;
    const obj2 = { enumerable: false, value: this };
    _Object.defineProperty(obj, _mod1198.MESSAGE_TYPE, obj2);
    if (undefined !== arr) {
      const tmpResult = _mod1198;
      const result = tmpResult.reflectionMergePartial(this, obj, arr);
    }
    return obj;
  }
  internalBinaryRead(pos, arg1, readUnknownField, arg3) {
    let tmp5;
    let tmp6;
    const self = this;
    let obj = arg3;
    if (arg3 == null) {
      obj = self.create();
    }
    const sum = pos.pos + arg1;
    if (pos.pos < sum) {
      do {
        let tmp4 = _slicedToArray(pos.tag(), 2);
        [tmp5, tmp6] = tmp4;
        if (1 === tmp5) {
          let str4 = pos.int64();
          obj.value = str4.toString();
        } else {
          let onRead = readUnknownField.readUnknownField;
          if ("throw" === onRead) {
            let tmp15 = globalThis;
            let _globalThis = globalThis;
            let _HermesInternal = HermesInternal;
            let str = ") for ";
            let str2 = " (wire type ";
            let str3 = "Unknown field ";
            let self2 = this;
            let self3 = this;
            let error = new Error("Unknown field " + tmp5 + " (wire type " + tmp6 + ") for " + self.typeName);
            throw error;
          } else {
            let skipResult = pos.skip(tmp6);
            if (false !== onRead) {
              if (true === onRead) {
                onRead = _mod1198.UnknownFieldHandler.onRead;
              }
              let onReadResult = onRead(self.typeName, obj, tmp5, tmp6, skipResult);
            }
          }
        }
      } while (pos.pos < sum);
    }
    return obj;
  }
  internalBinaryWrite(value, tag, writeUnknownFields) {
    if ("0" !== value.value) {
      const tagResult = tag.tag(1, _mod1198.WireType.Varint);
      tagResult.int64(value.value);
    }
    let onWrite = writeUnknownFields.writeUnknownFields;
    if (false !== onWrite) {
      if (1 == onWrite) {
        onWrite = _mod1198.UnknownFieldHandler.onWrite;
      }
      const self = this;
      onWrite(this.typeName, value, tag);
    }
    return tag;
  }
}
const prototype3 = Int64Value$Type.prototype;
const items2 = [{ no: 1, name: "value", kind: "scalar", T: 3 }];
const defineProperty3 = new defineProperty("google.protobuf.Int64Value", items2, tmp2, "internalJsonWrite", "internalJsonRead");
const MessageType4 = _mod1198.MessageType;
class UInt64Value$Type extends MessageType4 {
  constructor() {
    const items = [{ no: 1, name: "value", kind: "scalar", T: 4 }];
    const tmp2 = new tmp("google.protobuf.UInt64Value", items, new.target);
    return tmp2;
  }
  internalJsonWrite(value) {
    const refJsonWriter = this.refJsonWriter;
    return refJsonWriter.scalar(_mod1198.ScalarType.UINT64, value.value, "value", false, true);
  }
  internalJsonRead(arg0, arg1, arg2) {
    const self = this;
    const tmp = arg2 || self.create();
    const refJsonReader = self.refJsonReader;
    const scalar = refJsonReader.scalar;
    tmp.value = scalar(arg0, _mod1198.ScalarType.UINT64, _mod1198.LongType.STRING, "value");
    return tmp;
  }
  create(arr) {
    const obj = { value: "0" };
    const _Object = Object;
    const obj2 = { enumerable: false, value: this };
    _Object.defineProperty(obj, _mod1198.MESSAGE_TYPE, obj2);
    if (undefined !== arr) {
      const tmpResult = _mod1198;
      const result = tmpResult.reflectionMergePartial(this, obj, arr);
    }
    return obj;
  }
  internalBinaryRead(pos, arg1, readUnknownField, arg3) {
    let tmp5;
    let tmp6;
    const self = this;
    let obj = arg3;
    if (arg3 == null) {
      obj = self.create();
    }
    const sum = pos.pos + arg1;
    if (pos.pos < sum) {
      do {
        let tmp4 = _slicedToArray(pos.tag(), 2);
        [tmp5, tmp6] = tmp4;
        if (1 === tmp5) {
          let str4 = pos.uint64();
          obj.value = str4.toString();
        } else {
          let onRead = readUnknownField.readUnknownField;
          if ("throw" === onRead) {
            let tmp15 = globalThis;
            let _globalThis = globalThis;
            let _HermesInternal = HermesInternal;
            let str = ") for ";
            let str2 = " (wire type ";
            let str3 = "Unknown field ";
            let self2 = this;
            let self3 = this;
            let error = new Error("Unknown field " + tmp5 + " (wire type " + tmp6 + ") for " + self.typeName);
            throw error;
          } else {
            let skipResult = pos.skip(tmp6);
            if (false !== onRead) {
              if (true === onRead) {
                onRead = _mod1198.UnknownFieldHandler.onRead;
              }
              let onReadResult = onRead(self.typeName, obj, tmp5, tmp6, skipResult);
            }
          }
        }
      } while (pos.pos < sum);
    }
    return obj;
  }
  internalBinaryWrite(value, tag, writeUnknownFields) {
    if ("0" !== value.value) {
      const tagResult = tag.tag(1, _mod1198.WireType.Varint);
      tagResult.uint64(value.value);
    }
    let onWrite = writeUnknownFields.writeUnknownFields;
    if (false !== onWrite) {
      if (1 == onWrite) {
        onWrite = _mod1198.UnknownFieldHandler.onWrite;
      }
      const self = this;
      onWrite(this.typeName, value, tag);
    }
    return tag;
  }
}
const prototype4 = UInt64Value$Type.prototype;
const items3 = [{ no: 1, name: "value", kind: "scalar", T: 4 }];
const defineProperty4 = new defineProperty("google.protobuf.UInt64Value", items3, tmp2, "internalJsonWrite", "internalJsonRead");
const MessageType5 = _mod1198.MessageType;
class Int32Value$Type extends MessageType5 {
  constructor() {
    const items = [{ no: 1, name: "value", kind: "scalar", T: 5 }];
    const tmp2 = new tmp("google.protobuf.Int32Value", items, new.target);
    return tmp2;
  }
  internalJsonWrite(value) {
    const refJsonWriter = this.refJsonWriter;
    return refJsonWriter.scalar(5, value.value, "value", false, true);
  }
  internalJsonRead(arg0, arg1, arg2) {
    const self = this;
    const tmp = arg2 || self.create();
    const refJsonReader = self.refJsonReader;
    tmp.value = refJsonReader.scalar(arg0, 5, undefined, "value");
    return tmp;
  }
  create(arr) {
    const obj = { value: 0 };
    const _Object = Object;
    const obj2 = { enumerable: false, value: this };
    _Object.defineProperty(obj, _mod1198.MESSAGE_TYPE, obj2);
    if (undefined !== arr) {
      const tmpResult = _mod1198;
      const result = tmpResult.reflectionMergePartial(this, obj, arr);
    }
    return obj;
  }
  internalBinaryRead(pos, arg1, readUnknownField, arg3) {
    let tmp5;
    let tmp6;
    const self = this;
    let obj = arg3;
    if (arg3 == null) {
      obj = self.create();
    }
    const sum = pos.pos + arg1;
    if (pos.pos < sum) {
      do {
        let tmp4 = _slicedToArray(pos.tag(), 2);
        [tmp5, tmp6] = tmp4;
        if (1 === tmp5) {
          obj.value = pos.int32();
        } else {
          let onRead = readUnknownField.readUnknownField;
          if ("throw" === onRead) {
            let tmp15 = globalThis;
            let _globalThis = globalThis;
            let _HermesInternal = HermesInternal;
            let str = ") for ";
            let str2 = " (wire type ";
            let str3 = "Unknown field ";
            let self2 = this;
            let self3 = this;
            let error = new Error("Unknown field " + tmp5 + " (wire type " + tmp6 + ") for " + self.typeName);
            throw error;
          } else {
            let skipResult = pos.skip(tmp6);
            if (false !== onRead) {
              if (true === onRead) {
                onRead = _mod1198.UnknownFieldHandler.onRead;
              }
              let onReadResult = onRead(self.typeName, obj, tmp5, tmp6, skipResult);
            }
          }
        }
      } while (pos.pos < sum);
    }
    return obj;
  }
  internalBinaryWrite(value, tag, writeUnknownFields) {
    if (0 !== value.value) {
      const tagResult = tag.tag(1, _mod1198.WireType.Varint);
      tagResult.int32(value.value);
    }
    let onWrite = writeUnknownFields.writeUnknownFields;
    if (false !== onWrite) {
      if (1 == onWrite) {
        onWrite = _mod1198.UnknownFieldHandler.onWrite;
      }
      const self = this;
      onWrite(this.typeName, value, tag);
    }
    return tag;
  }
}
const prototype5 = Int32Value$Type.prototype;
const items4 = [{ no: 1, name: "value", kind: "scalar", T: 5 }];
const defineProperty5 = new defineProperty("google.protobuf.Int32Value", items4, tmp2, "internalJsonWrite", "internalJsonRead");
const MessageType6 = _mod1198.MessageType;
class UInt32Value$Type extends MessageType6 {
  constructor() {
    const items = [{ no: 1, name: "value", kind: "scalar", T: 13 }];
    const tmp2 = new tmp("google.protobuf.UInt32Value", items, new.target);
    return tmp2;
  }
  internalJsonWrite(value) {
    const refJsonWriter = this.refJsonWriter;
    return refJsonWriter.scalar(13, value.value, "value", false, true);
  }
  internalJsonRead(arg0, arg1, arg2) {
    const self = this;
    const tmp = arg2 || self.create();
    const refJsonReader = self.refJsonReader;
    tmp.value = refJsonReader.scalar(arg0, 13, undefined, "value");
    return tmp;
  }
  create(arr) {
    const obj = { value: 0 };
    const _Object = Object;
    const obj2 = { enumerable: false, value: this };
    _Object.defineProperty(obj, _mod1198.MESSAGE_TYPE, obj2);
    if (undefined !== arr) {
      const tmpResult = _mod1198;
      const result = tmpResult.reflectionMergePartial(this, obj, arr);
    }
    return obj;
  }
  internalBinaryRead(pos, arg1, readUnknownField, arg3) {
    let tmp5;
    let tmp6;
    const self = this;
    let obj = arg3;
    if (arg3 == null) {
      obj = self.create();
    }
    const sum = pos.pos + arg1;
    if (pos.pos < sum) {
      do {
        let tmp4 = _slicedToArray(pos.tag(), 2);
        [tmp5, tmp6] = tmp4;
        if (1 === tmp5) {
          obj.value = pos.uint32();
        } else {
          let onRead = readUnknownField.readUnknownField;
          if ("throw" === onRead) {
            let tmp15 = globalThis;
            let _globalThis = globalThis;
            let _HermesInternal = HermesInternal;
            let str = ") for ";
            let str2 = " (wire type ";
            let str3 = "Unknown field ";
            let self2 = this;
            let self3 = this;
            let error = new Error("Unknown field " + tmp5 + " (wire type " + tmp6 + ") for " + self.typeName);
            throw error;
          } else {
            let skipResult = pos.skip(tmp6);
            if (false !== onRead) {
              if (true === onRead) {
                onRead = _mod1198.UnknownFieldHandler.onRead;
              }
              let onReadResult = onRead(self.typeName, obj, tmp5, tmp6, skipResult);
            }
          }
        }
      } while (pos.pos < sum);
    }
    return obj;
  }
  internalBinaryWrite(value, tag, writeUnknownFields) {
    if (0 !== value.value) {
      const tagResult = tag.tag(1, _mod1198.WireType.Varint);
      tagResult.uint32(value.value);
    }
    let onWrite = writeUnknownFields.writeUnknownFields;
    if (false !== onWrite) {
      if (1 == onWrite) {
        onWrite = _mod1198.UnknownFieldHandler.onWrite;
      }
      const self = this;
      onWrite(this.typeName, value, tag);
    }
    return tag;
  }
}
const prototype6 = UInt32Value$Type.prototype;
const items5 = [{ no: 1, name: "value", kind: "scalar", T: 13 }];
const defineProperty6 = new defineProperty("google.protobuf.UInt32Value", items5, tmp2, "internalJsonWrite", "internalJsonRead");
const MessageType7 = _mod1198.MessageType;
class BoolValue$Type extends MessageType7 {
  constructor() {
    const items = [{ no: 1, name: "value", kind: "scalar", T: 8 }];
    const tmp2 = new tmp("google.protobuf.BoolValue", items, new.target);
    return tmp2;
  }
  internalJsonWrite(value) {
    return value.value;
  }
  internalJsonRead(arg0, arg1, arg2) {
    const self = this;
    const tmp = arg2 || self.create();
    const refJsonReader = self.refJsonReader;
    tmp.value = refJsonReader.scalar(arg0, 8, undefined, "value");
    return tmp;
  }
  create(arr) {
    const obj = { value: false };
    const _Object = Object;
    const obj2 = { enumerable: false, value: this };
    _Object.defineProperty(obj, _mod1198.MESSAGE_TYPE, obj2);
    if (undefined !== arr) {
      const tmpResult = _mod1198;
      const result = tmpResult.reflectionMergePartial(this, obj, arr);
    }
    return obj;
  }
  internalBinaryRead(pos, arg1, readUnknownField, arg3) {
    let tmp5;
    let tmp6;
    const self = this;
    let obj = arg3;
    if (arg3 == null) {
      obj = self.create();
    }
    const sum = pos.pos + arg1;
    if (pos.pos < sum) {
      do {
        let tmp4 = _slicedToArray(pos.tag(), 2);
        [tmp5, tmp6] = tmp4;
        if (1 === tmp5) {
          obj.value = pos.bool();
        } else {
          let onRead = readUnknownField.readUnknownField;
          if ("throw" === onRead) {
            let tmp15 = globalThis;
            let _globalThis = globalThis;
            let _HermesInternal = HermesInternal;
            let str = ") for ";
            let str2 = " (wire type ";
            let str3 = "Unknown field ";
            let self2 = this;
            let self3 = this;
            let error = new Error("Unknown field " + tmp5 + " (wire type " + tmp6 + ") for " + self.typeName);
            throw error;
          } else {
            let skipResult = pos.skip(tmp6);
            if (false !== onRead) {
              if (true === onRead) {
                onRead = _mod1198.UnknownFieldHandler.onRead;
              }
              let onReadResult = onRead(self.typeName, obj, tmp5, tmp6, skipResult);
            }
          }
        }
      } while (pos.pos < sum);
    }
    return obj;
  }
  internalBinaryWrite(value, tag, writeUnknownFields) {
    if (false !== value.value) {
      const tagResult = tag.tag(1, _mod1198.WireType.Varint);
      tagResult.bool(value.value);
    }
    let onWrite = writeUnknownFields.writeUnknownFields;
    if (false !== onWrite) {
      if (1 == onWrite) {
        onWrite = _mod1198.UnknownFieldHandler.onWrite;
      }
      const self = this;
      onWrite(this.typeName, value, tag);
    }
    return tag;
  }
}
const prototype7 = BoolValue$Type.prototype;
const items6 = [{ no: 1, name: "value", kind: "scalar", T: 8 }];
const defineProperty7 = new defineProperty("google.protobuf.BoolValue", items6, tmp2, "internalJsonWrite", "internalJsonRead");
const MessageType8 = _mod1198.MessageType;
class StringValue$Type extends MessageType8 {
  constructor() {
    const items = [{ no: 1, name: "value", kind: "scalar", T: 9 }];
    const tmp2 = new tmp("google.protobuf.StringValue", items, new.target);
    return tmp2;
  }
  internalJsonWrite(value) {
    return value.value;
  }
  internalJsonRead(arg0, arg1, arg2) {
    const self = this;
    const tmp = arg2 || self.create();
    const refJsonReader = self.refJsonReader;
    tmp.value = refJsonReader.scalar(arg0, 9, undefined, "value");
    return tmp;
  }
  create(arr) {
    const obj = { value: "" };
    const _Object = Object;
    const obj2 = { enumerable: false, value: this };
    _Object.defineProperty(obj, _mod1198.MESSAGE_TYPE, obj2);
    if (undefined !== arr) {
      const tmpResult = _mod1198;
      const result = tmpResult.reflectionMergePartial(this, obj, arr);
    }
    return obj;
  }
  internalBinaryRead(pos, arg1, readUnknownField, arg3) {
    let tmp5;
    let tmp6;
    const self = this;
    let obj = arg3;
    if (arg3 == null) {
      obj = self.create();
    }
    const sum = pos.pos + arg1;
    if (pos.pos < sum) {
      do {
        let tmp4 = _slicedToArray(pos.tag(), 2);
        [tmp5, tmp6] = tmp4;
        if (1 === tmp5) {
          obj.value = pos.string();
        } else {
          let onRead = readUnknownField.readUnknownField;
          if ("throw" === onRead) {
            let tmp15 = globalThis;
            let _globalThis = globalThis;
            let _HermesInternal = HermesInternal;
            let str = ") for ";
            let str2 = " (wire type ";
            let str3 = "Unknown field ";
            let self2 = this;
            let self3 = this;
            let error = new Error("Unknown field " + tmp5 + " (wire type " + tmp6 + ") for " + self.typeName);
            throw error;
          } else {
            let skipResult = pos.skip(tmp6);
            if (false !== onRead) {
              if (true === onRead) {
                onRead = _mod1198.UnknownFieldHandler.onRead;
              }
              let onReadResult = onRead(self.typeName, obj, tmp5, tmp6, skipResult);
            }
          }
        }
      } while (pos.pos < sum);
    }
    return obj;
  }
  internalBinaryWrite(value, tag, writeUnknownFields) {
    if ("" !== value.value) {
      const tagResult = tag.tag(1, _mod1198.WireType.LengthDelimited);
      tagResult.string(value.value);
    }
    let onWrite = writeUnknownFields.writeUnknownFields;
    if (false !== onWrite) {
      if (1 == onWrite) {
        onWrite = _mod1198.UnknownFieldHandler.onWrite;
      }
      const self = this;
      onWrite(this.typeName, value, tag);
    }
    return tag;
  }
}
const prototype8 = StringValue$Type.prototype;
const items7 = [{ no: 1, name: "value", kind: "scalar", T: 9 }];
const tmp3 = new tmp("google.protobuf.StringValue", items7, tmp2, "internalJsonWrite", "internalJsonRead", "create", "internalBinaryRead", StringValue$Type, "internalBinaryWrite", tmp, undefined, require, dependencyMap, this, defineProperty1, this, defineProperty2, this, defineProperty3, this, defineProperty4, this, defineProperty5, this);
const MessageType9 = _mod1198.MessageType;
class BytesValue$Type extends MessageType9 {
  constructor() {
    const items = [{ no: 1, name: "value", kind: "scalar", T: 12 }];
    const tmp2 = new tmp("google.protobuf.BytesValue", items, new.target);
    return tmp2;
  }
  internalJsonWrite(value) {
    const refJsonWriter = this.refJsonWriter;
    return refJsonWriter.scalar(12, value.value, "value", false, true);
  }
  internalJsonRead(arg0, arg1, arg2) {
    const self = this;
    const tmp = arg2 || self.create();
    const refJsonReader = self.refJsonReader;
    tmp.value = refJsonReader.scalar(arg0, 12, undefined, "value");
    return tmp;
  }
  create(arr) {
    let uint8Array;
    const obj = { value: uint8Array };
    uint8Array = new Uint8Array(0);
    const _Object = Object;
    const obj2 = { enumerable: false, value: this };
    _Object.defineProperty(obj, _mod1198.MESSAGE_TYPE, obj2);
    if (undefined !== arr) {
      const tmp2Result = _mod1198;
      const result = tmp2Result.reflectionMergePartial(this, obj, arr);
    }
    return obj;
  }
  internalBinaryRead(pos, arg1, readUnknownField, arg3) {
    let tmp5;
    let tmp6;
    const self = this;
    let obj = arg3;
    if (arg3 == null) {
      obj = self.create();
    }
    const sum = pos.pos + arg1;
    if (pos.pos < sum) {
      do {
        let tmp4 = _slicedToArray(pos.tag(), 2);
        [tmp5, tmp6] = tmp4;
        if (1 === tmp5) {
          obj.value = pos.bytes();
        } else {
          let onRead = readUnknownField.readUnknownField;
          if ("throw" === onRead) {
            let tmp15 = globalThis;
            let _globalThis = globalThis;
            let _HermesInternal = HermesInternal;
            let str = ") for ";
            let str2 = " (wire type ";
            let str3 = "Unknown field ";
            let self2 = this;
            let self3 = this;
            let error = new Error("Unknown field " + tmp5 + " (wire type " + tmp6 + ") for " + self.typeName);
            throw error;
          } else {
            let skipResult = pos.skip(tmp6);
            if (false !== onRead) {
              if (true === onRead) {
                onRead = _mod1198.UnknownFieldHandler.onRead;
              }
              let onReadResult = onRead(self.typeName, obj, tmp5, tmp6, skipResult);
            }
          }
        }
      } while (pos.pos < sum);
    }
    return obj;
  }
  internalBinaryWrite(value, tag, writeUnknownFields) {
    if (value.value.length) {
      const tagResult = tag.tag(1, _mod1198.WireType.LengthDelimited);
      tagResult.bytes(value.value);
    }
    let onWrite = writeUnknownFields.writeUnknownFields;
    if (false !== onWrite) {
      if (1 == onWrite) {
        onWrite = _mod1198.UnknownFieldHandler.onWrite;
      }
      const self = this;
      onWrite(this.typeName, value, tag);
    }
    return tag;
  }
}
const prototype9 = BytesValue$Type.prototype;
const items8 = [{ no: 1, name: "value", kind: "scalar", T: 12 }];
const tmp12 = new "internalBinaryWrite"("google.protobuf.BytesValue", items8, tmp2, "internalJsonWrite", "internalJsonRead", "create", "internalBinaryRead", BytesValue$Type, "internalBinaryWrite", items8, undefined, require, dependencyMap, this, defineProperty1, this, defineProperty2, this, defineProperty3, this, defineProperty4, this, defineProperty5, this);
let result = size.fileFinishedImporting("../discord_common/js/packages/protos/google/protobuf/wrappers.tsx");

export const DoubleValue = defineProperty1;
export const FloatValue = defineProperty2;
export const Int64Value = defineProperty3;
export const UInt64Value = defineProperty4;
export const Int32Value = defineProperty5;
export const UInt32Value = defineProperty6;
export const BoolValue = defineProperty7;
export const StringValue = tmp3;
export const BytesValue = tmp12;