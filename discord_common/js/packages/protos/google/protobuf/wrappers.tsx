// === Module 1217: wrappers ===

// Module 1217 (wrappers)
import _mod1187 from "module_1187" /* 1187 */;
import _slicedToArray from "module_32" /* 32 */;

require = fn;
const MessageType = fn(1187).MessageType;
class DoubleValue$Type extends MessageType {
  constructor() {
    items = [];
    items[0] = { no: 1, name: "value", kind: "scalar", T: 1 };
    tmp1 = new tmp("google.protobuf.DoubleValue", items, new.target);
    return tmp1;
  }
}
const prototype = DoubleValue$Type.prototype;
prototype["internalJsonWrite"] = function internalJsonWrite(value) {
  const refJsonWriter = this.refJsonWriter;
  return refJsonWriter.scalar(2, value.value, "value", false, true);
};
prototype["internalJsonRead"] = function internalJsonRead(arg0, arg1, arg2) {
  const self = this;
  let obj = arg2;
  if (!arg2) {
    obj = self.create();
  }
  const refJsonReader = self.refJsonReader;
  obj.value = refJsonReader.scalar(arg0, 1, undefined, "value");
  return obj;
};
prototype["create"] = function create(arr) {
  const obj = { value: 0 };
  const _Object = Object;
  _Object.defineProperty(obj, _mod1187.MESSAGE_TYPE, { enumerable: false, value: this });
  if (undefined !== arr) {
    const result = _mod1187.reflectionMergePartial(this, obj, arr);
    const tmpResult = _mod1187;
  }
  return obj;
};
prototype["internalBinaryRead"] = function internalBinaryRead(pos, arg1, readUnknownField, arg3) {
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
          let tmp18 = new.target;
          let tmp19 = new.target;
          let error = new Error("Unknown field " + tmp5 + " (wire type " + tmp6 + ") for " + self.typeName);
          throw error;
        } else {
          let skipResult = pos.skip(tmp6);
          if (false !== onRead) {
            if (true === onRead) {
              onRead = _mod1187.UnknownFieldHandler.onRead;
            }
            let onReadResult = onRead(self.typeName, obj, tmp5, tmp6, skipResult);
          }
        }
      }
    } while (pos.pos < sum);
  }
  return obj;
};
prototype["internalBinaryWrite"] = function internalBinaryWrite(value, tag, writeUnknownFields) {
  if (0 !== value.value) {
    tag.tag(1, _mod1187.WireType.Bit64).double(value.value);
    const tagResult = tag.tag(1, _mod1187.WireType.Bit64);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = _mod1187.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, value, tag);
  }
  return tag;
};
let items = [{ no: 1, name: "value", kind: "scalar", T: 1 }];
const defineProperty1 = new defineProperty("google.protobuf.DoubleValue", items, tmp2, "internalJsonWrite", "internalJsonRead");
const MessageType2 = fn(1187).MessageType;
class FloatValue$Type extends MessageType2 {
  constructor() {
    items = [];
    items[0] = { no: 1, name: "value", kind: "scalar", T: 2 };
    tmp1 = new tmp("google.protobuf.FloatValue", items, new.target);
    return tmp1;
  }
}
const prototype2 = FloatValue$Type.prototype;
prototype2["internalJsonWrite"] = function internalJsonWrite(value) {
  const refJsonWriter = this.refJsonWriter;
  return refJsonWriter.scalar(1, value.value, "value", false, true);
};
prototype2["internalJsonRead"] = function internalJsonRead(arg0, arg1, arg2) {
  const self = this;
  let obj = arg2;
  if (!arg2) {
    obj = self.create();
  }
  const refJsonReader = self.refJsonReader;
  obj.value = refJsonReader.scalar(arg0, 1, undefined, "value");
  return obj;
};
prototype2["create"] = function create(arr) {
  const obj = { value: 0 };
  const _Object = Object;
  _Object.defineProperty(obj, _mod1187.MESSAGE_TYPE, { enumerable: false, value: this });
  if (undefined !== arr) {
    const result = _mod1187.reflectionMergePartial(this, obj, arr);
    const tmpResult = _mod1187;
  }
  return obj;
};
prototype2["internalBinaryRead"] = function internalBinaryRead(pos, arg1, readUnknownField, arg3) {
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
          let tmp18 = new.target;
          let tmp19 = new.target;
          let error = new Error("Unknown field " + tmp5 + " (wire type " + tmp6 + ") for " + self.typeName);
          throw error;
        } else {
          let skipResult = pos.skip(tmp6);
          if (false !== onRead) {
            if (true === onRead) {
              onRead = _mod1187.UnknownFieldHandler.onRead;
            }
            let onReadResult = onRead(self.typeName, obj, tmp5, tmp6, skipResult);
          }
        }
      }
    } while (pos.pos < sum);
  }
  return obj;
};
prototype2["internalBinaryWrite"] = function internalBinaryWrite(value, tag, writeUnknownFields) {
  if (0 !== value.value) {
    tag.tag(1, _mod1187.WireType.Bit32).float(value.value);
    const tagResult = tag.tag(1, _mod1187.WireType.Bit32);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = _mod1187.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, value, tag);
  }
  return tag;
};
const items1 = [{ no: 1, name: "value", kind: "scalar", T: 2 }];
const defineProperty2 = new defineProperty("google.protobuf.FloatValue", items1, tmp2, "internalJsonWrite", "internalJsonRead");
const MessageType3 = fn(1187).MessageType;
class Int64Value$Type extends MessageType3 {
  constructor() {
    items = [];
    items[0] = { no: 1, name: "value", kind: "scalar", T: 3 };
    tmp1 = new tmp("google.protobuf.Int64Value", items, new.target);
    return tmp1;
  }
}
const prototype3 = Int64Value$Type.prototype;
prototype3["internalJsonWrite"] = function internalJsonWrite(value) {
  const refJsonWriter = this.refJsonWriter;
  return refJsonWriter.scalar(_mod1187.ScalarType.INT64, value.value, "value", false, true);
};
prototype3["internalJsonRead"] = function internalJsonRead(arg0, arg1, arg2) {
  const self = this;
  let obj = arg2;
  if (!arg2) {
    obj = self.create();
  }
  const refJsonReader = self.refJsonReader;
  obj.value = refJsonReader.scalar(arg0, _mod1187.ScalarType.INT64, _mod1187.LongType.STRING, "value");
  return obj;
};
prototype3["create"] = function create(arr) {
  const obj = { value: "0" };
  const _Object = Object;
  _Object.defineProperty(obj, _mod1187.MESSAGE_TYPE, { enumerable: false, value: this });
  if (undefined !== arr) {
    const result = _mod1187.reflectionMergePartial(this, obj, arr);
    const tmpResult = _mod1187;
  }
  return obj;
};
prototype3["internalBinaryRead"] = function internalBinaryRead(pos, arg1, readUnknownField, arg3) {
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
          let tmp18 = new.target;
          let tmp19 = new.target;
          let error = new Error("Unknown field " + tmp5 + " (wire type " + tmp6 + ") for " + self.typeName);
          throw error;
        } else {
          let skipResult = pos.skip(tmp6);
          if (false !== onRead) {
            if (true === onRead) {
              onRead = _mod1187.UnknownFieldHandler.onRead;
            }
            let onReadResult = onRead(self.typeName, obj, tmp5, tmp6, skipResult);
          }
        }
      }
    } while (pos.pos < sum);
  }
  return obj;
};
prototype3["internalBinaryWrite"] = function internalBinaryWrite(value, tag, writeUnknownFields) {
  if ("0" !== value.value) {
    tag.tag(1, _mod1187.WireType.Varint).int64(value.value);
    const tagResult = tag.tag(1, _mod1187.WireType.Varint);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = _mod1187.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, value, tag);
  }
  return tag;
};
const items2 = [{ no: 1, name: "value", kind: "scalar", T: 3 }];
const defineProperty3 = new defineProperty("google.protobuf.Int64Value", items2, tmp2, "internalJsonWrite", "internalJsonRead");
const MessageType4 = fn(1187).MessageType;
class UInt64Value$Type extends MessageType4 {
  constructor() {
    items = [];
    items[0] = { no: 1, name: "value", kind: "scalar", T: 4 };
    tmp1 = new tmp("google.protobuf.UInt64Value", items, new.target);
    return tmp1;
  }
}
const prototype4 = UInt64Value$Type.prototype;
prototype4["internalJsonWrite"] = function internalJsonWrite(value) {
  const refJsonWriter = this.refJsonWriter;
  return refJsonWriter.scalar(_mod1187.ScalarType.UINT64, value.value, "value", false, true);
};
prototype4["internalJsonRead"] = function internalJsonRead(arg0, arg1, arg2) {
  const self = this;
  let obj = arg2;
  if (!arg2) {
    obj = self.create();
  }
  const refJsonReader = self.refJsonReader;
  obj.value = refJsonReader.scalar(arg0, _mod1187.ScalarType.UINT64, _mod1187.LongType.STRING, "value");
  return obj;
};
prototype4["create"] = function create(arr) {
  const obj = { value: "0" };
  const _Object = Object;
  _Object.defineProperty(obj, _mod1187.MESSAGE_TYPE, { enumerable: false, value: this });
  if (undefined !== arr) {
    const result = _mod1187.reflectionMergePartial(this, obj, arr);
    const tmpResult = _mod1187;
  }
  return obj;
};
prototype4["internalBinaryRead"] = function internalBinaryRead(pos, arg1, readUnknownField, arg3) {
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
          let tmp18 = new.target;
          let tmp19 = new.target;
          let error = new Error("Unknown field " + tmp5 + " (wire type " + tmp6 + ") for " + self.typeName);
          throw error;
        } else {
          let skipResult = pos.skip(tmp6);
          if (false !== onRead) {
            if (true === onRead) {
              onRead = _mod1187.UnknownFieldHandler.onRead;
            }
            let onReadResult = onRead(self.typeName, obj, tmp5, tmp6, skipResult);
          }
        }
      }
    } while (pos.pos < sum);
  }
  return obj;
};
prototype4["internalBinaryWrite"] = function internalBinaryWrite(value, tag, writeUnknownFields) {
  if ("0" !== value.value) {
    tag.tag(1, _mod1187.WireType.Varint).uint64(value.value);
    const tagResult = tag.tag(1, _mod1187.WireType.Varint);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = _mod1187.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, value, tag);
  }
  return tag;
};
const items3 = [{ no: 1, name: "value", kind: "scalar", T: 4 }];
const defineProperty4 = new defineProperty("google.protobuf.UInt64Value", items3, tmp2, "internalJsonWrite", "internalJsonRead");
const MessageType5 = fn(1187).MessageType;
class Int32Value$Type extends MessageType5 {
  constructor() {
    items = [];
    items[0] = { no: 1, name: "value", kind: "scalar", T: 5 };
    tmp1 = new tmp("google.protobuf.Int32Value", items, new.target);
    return tmp1;
  }
}
const prototype5 = Int32Value$Type.prototype;
prototype5["internalJsonWrite"] = function internalJsonWrite(value) {
  const refJsonWriter = this.refJsonWriter;
  return refJsonWriter.scalar(5, value.value, "value", false, true);
};
prototype5["internalJsonRead"] = function internalJsonRead(arg0, arg1, arg2) {
  const self = this;
  let obj = arg2;
  if (!arg2) {
    obj = self.create();
  }
  const refJsonReader = self.refJsonReader;
  obj.value = refJsonReader.scalar(arg0, 5, undefined, "value");
  return obj;
};
prototype5["create"] = function create(arr) {
  const obj = { value: 0 };
  const _Object = Object;
  _Object.defineProperty(obj, _mod1187.MESSAGE_TYPE, { enumerable: false, value: this });
  if (undefined !== arr) {
    const result = _mod1187.reflectionMergePartial(this, obj, arr);
    const tmpResult = _mod1187;
  }
  return obj;
};
prototype5["internalBinaryRead"] = function internalBinaryRead(pos, arg1, readUnknownField, arg3) {
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
          let tmp18 = new.target;
          let tmp19 = new.target;
          let error = new Error("Unknown field " + tmp5 + " (wire type " + tmp6 + ") for " + self.typeName);
          throw error;
        } else {
          let skipResult = pos.skip(tmp6);
          if (false !== onRead) {
            if (true === onRead) {
              onRead = _mod1187.UnknownFieldHandler.onRead;
            }
            let onReadResult = onRead(self.typeName, obj, tmp5, tmp6, skipResult);
          }
        }
      }
    } while (pos.pos < sum);
  }
  return obj;
};
prototype5["internalBinaryWrite"] = function internalBinaryWrite(value, tag, writeUnknownFields) {
  if (0 !== value.value) {
    tag.tag(1, _mod1187.WireType.Varint).int32(value.value);
    const tagResult = tag.tag(1, _mod1187.WireType.Varint);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = _mod1187.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, value, tag);
  }
  return tag;
};
const items4 = [{ no: 1, name: "value", kind: "scalar", T: 5 }];
const defineProperty5 = new defineProperty("google.protobuf.Int32Value", items4, tmp2, "internalJsonWrite", "internalJsonRead");
const MessageType6 = fn(1187).MessageType;
class UInt32Value$Type extends MessageType6 {
  constructor() {
    items = [];
    items[0] = { no: 1, name: "value", kind: "scalar", T: 13 };
    tmp1 = new tmp("google.protobuf.UInt32Value", items, new.target);
    return tmp1;
  }
}
const prototype6 = UInt32Value$Type.prototype;
prototype6["internalJsonWrite"] = function internalJsonWrite(value) {
  const refJsonWriter = this.refJsonWriter;
  return refJsonWriter.scalar(13, value.value, "value", false, true);
};
prototype6["internalJsonRead"] = function internalJsonRead(arg0, arg1, arg2) {
  const self = this;
  let obj = arg2;
  if (!arg2) {
    obj = self.create();
  }
  const refJsonReader = self.refJsonReader;
  obj.value = refJsonReader.scalar(arg0, 13, undefined, "value");
  return obj;
};
prototype6["create"] = function create(arr) {
  const obj = { value: 0 };
  const _Object = Object;
  _Object.defineProperty(obj, _mod1187.MESSAGE_TYPE, { enumerable: false, value: this });
  if (undefined !== arr) {
    const result = _mod1187.reflectionMergePartial(this, obj, arr);
    const tmpResult = _mod1187;
  }
  return obj;
};
prototype6["internalBinaryRead"] = function internalBinaryRead(pos, arg1, readUnknownField, arg3) {
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
          let tmp18 = new.target;
          let tmp19 = new.target;
          let error = new Error("Unknown field " + tmp5 + " (wire type " + tmp6 + ") for " + self.typeName);
          throw error;
        } else {
          let skipResult = pos.skip(tmp6);
          if (false !== onRead) {
            if (true === onRead) {
              onRead = _mod1187.UnknownFieldHandler.onRead;
            }
            let onReadResult = onRead(self.typeName, obj, tmp5, tmp6, skipResult);
          }
        }
      }
    } while (pos.pos < sum);
  }
  return obj;
};
prototype6["internalBinaryWrite"] = function internalBinaryWrite(value, tag, writeUnknownFields) {
  if (0 !== value.value) {
    tag.tag(1, _mod1187.WireType.Varint).uint32(value.value);
    const tagResult = tag.tag(1, _mod1187.WireType.Varint);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = _mod1187.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, value, tag);
  }
  return tag;
};
const items5 = [{ no: 1, name: "value", kind: "scalar", T: 13 }];
const defineProperty6 = new defineProperty("google.protobuf.UInt32Value", items5, tmp2, "internalJsonWrite", "internalJsonRead");
const MessageType7 = fn(1187).MessageType;
class BoolValue$Type extends MessageType7 {
  constructor() {
    items = [];
    items[0] = { no: 1, name: "value", kind: "scalar", T: 8 };
    tmp1 = new tmp("google.protobuf.BoolValue", items, new.target);
    return tmp1;
  }
}
const prototype7 = BoolValue$Type.prototype;
prototype7["internalJsonWrite"] = function internalJsonWrite(value) {
  return value.value;
};
prototype7["internalJsonRead"] = function internalJsonRead(arg0, arg1, arg2) {
  const self = this;
  let obj = arg2;
  if (!arg2) {
    obj = self.create();
  }
  const refJsonReader = self.refJsonReader;
  obj.value = refJsonReader.scalar(arg0, 8, undefined, "value");
  return obj;
};
prototype7["create"] = function create(arr) {
  const obj = { value: false };
  const _Object = Object;
  _Object.defineProperty(obj, _mod1187.MESSAGE_TYPE, { enumerable: false, value: this });
  if (undefined !== arr) {
    const result = _mod1187.reflectionMergePartial(this, obj, arr);
    const tmpResult = _mod1187;
  }
  return obj;
};
prototype7["internalBinaryRead"] = function internalBinaryRead(pos, arg1, readUnknownField, arg3) {
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
          let tmp18 = new.target;
          let tmp19 = new.target;
          let error = new Error("Unknown field " + tmp5 + " (wire type " + tmp6 + ") for " + self.typeName);
          throw error;
        } else {
          let skipResult = pos.skip(tmp6);
          if (false !== onRead) {
            if (true === onRead) {
              onRead = _mod1187.UnknownFieldHandler.onRead;
            }
            let onReadResult = onRead(self.typeName, obj, tmp5, tmp6, skipResult);
          }
        }
      }
    } while (pos.pos < sum);
  }
  return obj;
};
prototype7["internalBinaryWrite"] = function internalBinaryWrite(value, tag, writeUnknownFields) {
  if (false !== value.value) {
    tag.tag(1, _mod1187.WireType.Varint).bool(value.value);
    const tagResult = tag.tag(1, _mod1187.WireType.Varint);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = _mod1187.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, value, tag);
  }
  return tag;
};
const items6 = [{ no: 1, name: "value", kind: "scalar", T: 8 }];
const defineProperty7 = new defineProperty("google.protobuf.BoolValue", items6, tmp2, "internalJsonWrite", "internalJsonRead");
const MessageType8 = fn(1187).MessageType;
class StringValue$Type extends MessageType8 {
  constructor() {
    items = [];
    items[0] = { no: 1, name: "value", kind: "scalar", T: 9 };
    tmp1 = new tmp("google.protobuf.StringValue", items, new.target);
    return tmp1;
  }
}
const prototype8 = StringValue$Type.prototype;
prototype8["internalJsonWrite"] = function internalJsonWrite(value) {
  return value.value;
};
prototype8["internalJsonRead"] = function internalJsonRead(arg0, arg1, arg2) {
  const self = this;
  let obj = arg2;
  if (!arg2) {
    obj = self.create();
  }
  const refJsonReader = self.refJsonReader;
  obj.value = refJsonReader.scalar(arg0, 9, undefined, "value");
  return obj;
};
prototype8["create"] = function create(arr) {
  const obj = { value: "" };
  const _Object = Object;
  _Object.defineProperty(obj, _mod1187.MESSAGE_TYPE, { enumerable: false, value: this });
  if (undefined !== arr) {
    const result = _mod1187.reflectionMergePartial(this, obj, arr);
    const tmpResult = _mod1187;
  }
  return obj;
};
prototype8["internalBinaryRead"] = function internalBinaryRead(pos, arg1, readUnknownField, arg3) {
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
          let tmp18 = new.target;
          let tmp19 = new.target;
          let error = new Error("Unknown field " + tmp5 + " (wire type " + tmp6 + ") for " + self.typeName);
          throw error;
        } else {
          let skipResult = pos.skip(tmp6);
          if (false !== onRead) {
            if (true === onRead) {
              onRead = _mod1187.UnknownFieldHandler.onRead;
            }
            let onReadResult = onRead(self.typeName, obj, tmp5, tmp6, skipResult);
          }
        }
      }
    } while (pos.pos < sum);
  }
  return obj;
};
prototype8["internalBinaryWrite"] = function internalBinaryWrite(value, tag, writeUnknownFields) {
  if ("" !== value.value) {
    tag.tag(1, _mod1187.WireType.LengthDelimited).string(value.value);
    const tagResult = tag.tag(1, _mod1187.WireType.LengthDelimited);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = _mod1187.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, value, tag);
  }
  return tag;
};
const items7 = [{ no: 1, name: "value", kind: "scalar", T: 9 }];
const MessageType9 = fn(1187).MessageType;
class BytesValue$Type extends MessageType9 {
  constructor() {
    items = [];
    items[0] = { no: 1, name: "value", kind: "scalar", T: 12 };
    tmp1 = new tmp("google.protobuf.BytesValue", items, new.target);
    return tmp1;
  }
}
const prototype9 = BytesValue$Type.prototype;
prototype9["internalJsonWrite"] = function internalJsonWrite(value) {
  const refJsonWriter = this.refJsonWriter;
  return refJsonWriter.scalar(12, value.value, "value", false, true);
};
prototype9["internalJsonRead"] = function internalJsonRead(arg0, arg1, arg2) {
  const self = this;
  let obj = arg2;
  if (!arg2) {
    obj = self.create();
  }
  const refJsonReader = self.refJsonReader;
  obj.value = refJsonReader.scalar(arg0, 12, undefined, "value");
  return obj;
};
prototype9["create"] = function create(arr) {
  const obj = { value: null };
  const uint8Array = new Uint8Array(0);
  obj.value = uint8Array;
  const _Object = Object;
  _Object.defineProperty(obj, _mod1187.MESSAGE_TYPE, { enumerable: false, value: this });
  if (undefined !== arr) {
    const result = _mod1187.reflectionMergePartial(this, obj, arr);
    const tmp2Result = _mod1187;
  }
  return obj;
};
prototype9["internalBinaryRead"] = function internalBinaryRead(pos, arg1, readUnknownField, arg3) {
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
          let tmp18 = new.target;
          let tmp19 = new.target;
          let error = new Error("Unknown field " + tmp5 + " (wire type " + tmp6 + ") for " + self.typeName);
          throw error;
        } else {
          let skipResult = pos.skip(tmp6);
          if (false !== onRead) {
            if (true === onRead) {
              onRead = _mod1187.UnknownFieldHandler.onRead;
            }
            let onReadResult = onRead(self.typeName, obj, tmp5, tmp6, skipResult);
          }
        }
      }
    } while (pos.pos < sum);
  }
  return obj;
};
prototype9["internalBinaryWrite"] = function internalBinaryWrite(value, tag, writeUnknownFields) {
  if (value.value.length) {
    tag.tag(1, _mod1187.WireType.LengthDelimited).bytes(value.value);
    const tagResult = tag.tag(1, _mod1187.WireType.LengthDelimited);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = _mod1187.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, value, tag);
  }
  return tag;
};
const items8 = [{ no: 1, name: "value", kind: "scalar", T: 12 }];
const tmp3 = new tmp("google.protobuf.StringValue", items7, tmp2, "internalJsonWrite", "internalJsonRead", "create", "internalBinaryRead", StringValue$Type, "internalBinaryWrite", tmp, undefined, fn, dependencyMap, new.target, defineProperty1, new.target, defineProperty2, new.target, defineProperty3, new.target, defineProperty4, new.target, defineProperty5, new.target);
const size = fn(2);
let result = size.fileFinishedImporting("../discord_common/js/packages/protos/google/protobuf/wrappers.tsx");

export const DoubleValue = defineProperty1;
export const FloatValue = defineProperty2;
export const Int64Value = defineProperty3;
export const UInt64Value = defineProperty4;
export const Int32Value = defineProperty5;
export const UInt32Value = defineProperty6;
export const BoolValue = defineProperty7;
export const StringValue = tmp3;
export const BytesValue = new "internalBinaryWrite"("google.protobuf.BytesValue", items8, tmp2, "internalJsonWrite", "internalJsonRead", "create", "internalBinaryRead", BytesValue$Type, "internalBinaryWrite", items8, undefined, fn, dependencyMap, new.target, defineProperty1, new.target, defineProperty2, new.target, defineProperty3, new.target, defineProperty4, new.target, defineProperty5, new.target);