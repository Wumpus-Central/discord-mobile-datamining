// discord_common/js/packages/protos/google/protobuf/wrappers.tsx
import _mod1188 from "../../../../../../_runtime/metro/01188__.js";
import closure_2 from "../../../../../../_runtime/metro/00032__slicedToArray.js";
import {
  MessageType,
  MessageType as MessageType2,
  MessageType as MessageType3,
  MessageType as MessageType4,
  MessageType as MessageType5,
  MessageType as MessageType6,
  MessageType as MessageType7,
  MessageType as MessageType8,
  MessageType as MessageType9,
} from "../../../../../../_runtime/metro/01188__.js";

require = arg1;
class DoubleValue$Type extends MessageType {
  constructor() {
    items = [];
    items[0] = { no: 1, name: "value", kind: "scalar", T: 1 };
    tmp = new tmp("google.protobuf.DoubleValue", items, new.target);
    // ThrowIfThisInitialized (0x7c)
    return tmp;
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
  let obj = { value: 0 };
  const _Object = Object;
  obj = { enumerable: false, value: this };
  _Object.defineProperty(obj, _mod1188.MESSAGE_TYPE, obj);
  if (undefined !== arr) {
    const result = _mod1188.reflectionMergePartial(this, obj, arr);
    const tmpResult = _mod1188;
  }
  return obj;
};
prototype["internalBinaryRead"] = function internalBinaryRead(pos, arg1, readUnknownField) {
  const self = this;
  let obj = arg3;
  if (arg3 == null) {
    obj = self.create();
  }
  const sum = pos.pos + arg1;
  if (pos.pos < sum) {
    do {
      let tmp3 = callback;
      let tmp4 = callback(pos.tag(), 2);
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
          let tmp16 = tmp5;
          let tmp17 = tmp6;
          let tmp18 = new.target;
          let tmp19 = new.target;
          error = new Error("Unknown field " + tmp5 + " (wire type " + tmp6 + ") for " + self.typeName);
          let tmp21 = error;
          throw error;
        } else {
          let skipResult = pos.skip(tmp6);
          if (false !== onRead) {
            if (true === onRead) {
              let tmp8 = require;
              let tmp9 = dependencyMap;
              onRead = _mod1188.UnknownFieldHandler.onRead;
            }
            let tmp10 = obj;
            let tmp11 = tmp5;
            let tmp12 = tmp6;
            let tmp13 = skipResult;
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
    tag.tag(1, _mod1188.WireType.Bit64).double(value.value);
    const tagResult = tag.tag(1, _mod1188.WireType.Bit64);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = _mod1188.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, value, tag);
  }
  return tag;
};
let items = [{ no: 1, name: "value", kind: "scalar", T: 1 }];
defineProperty = new defineProperty(
  "google.protobuf.DoubleValue",
  items,
  tmp2,
  "internalJsonWrite",
  "internalJsonRead",
);
// ThrowIfThisInitialized (0x7c)
class FloatValue$Type extends MessageType2 {
  constructor() {
    items = [];
    items[0] = { no: 1, name: "value", kind: "scalar", T: 2 };
    tmp = new tmp("google.protobuf.FloatValue", items, new.target);
    // ThrowIfThisInitialized (0x7c)
    return tmp;
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
  let obj = { value: 0 };
  const _Object = Object;
  obj = { enumerable: false, value: this };
  _Object.defineProperty(obj, _mod1188.MESSAGE_TYPE, obj);
  if (undefined !== arr) {
    const result = _mod1188.reflectionMergePartial(this, obj, arr);
    const tmpResult = _mod1188;
  }
  return obj;
};
prototype2["internalBinaryRead"] = function internalBinaryRead(pos, arg1, readUnknownField) {
  const self = this;
  let obj = arg3;
  if (arg3 == null) {
    obj = self.create();
  }
  const sum = pos.pos + arg1;
  if (pos.pos < sum) {
    do {
      let tmp3 = callback;
      let tmp4 = callback(pos.tag(), 2);
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
          let tmp16 = tmp5;
          let tmp17 = tmp6;
          let tmp18 = new.target;
          let tmp19 = new.target;
          error = new Error("Unknown field " + tmp5 + " (wire type " + tmp6 + ") for " + self.typeName);
          let tmp21 = error;
          throw error;
        } else {
          let skipResult = pos.skip(tmp6);
          if (false !== onRead) {
            if (true === onRead) {
              let tmp8 = require;
              let tmp9 = dependencyMap;
              onRead = _mod1188.UnknownFieldHandler.onRead;
            }
            let tmp10 = obj;
            let tmp11 = tmp5;
            let tmp12 = tmp6;
            let tmp13 = skipResult;
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
    tag.tag(1, _mod1188.WireType.Bit32).float(value.value);
    const tagResult = tag.tag(1, _mod1188.WireType.Bit32);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = _mod1188.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, value, tag);
  }
  return tag;
};
const items1 = [{ no: 1, name: "value", kind: "scalar", T: 2 }];
const defineProperty1 = new defineProperty(
  "google.protobuf.FloatValue",
  items1,
  tmp2,
  "internalJsonWrite",
  "internalJsonRead",
);
// ThrowIfThisInitialized (0x7c)
class Int64Value$Type extends MessageType3 {
  constructor() {
    items = [];
    items[0] = { no: 1, name: "value", kind: "scalar", T: 3 };
    tmp = new tmp("google.protobuf.Int64Value", items, new.target);
    // ThrowIfThisInitialized (0x7c)
    return tmp;
  }
}
const prototype3 = Int64Value$Type.prototype;
prototype3["internalJsonWrite"] = function internalJsonWrite(value) {
  const refJsonWriter = this.refJsonWriter;
  return refJsonWriter.scalar(_mod1188.ScalarType.INT64, value.value, "value", false, true);
};
prototype3["internalJsonRead"] = function internalJsonRead(arg0, arg1, arg2) {
  const self = this;
  let obj = arg2;
  if (!arg2) {
    obj = self.create();
  }
  const refJsonReader = self.refJsonReader;
  obj.value = refJsonReader.scalar(arg0, _mod1188.ScalarType.INT64, _mod1188.LongType.STRING, "value");
  return obj;
};
prototype3["create"] = function create(arr) {
  let obj = { value: "0" };
  const _Object = Object;
  obj = { enumerable: false, value: this };
  _Object.defineProperty(obj, _mod1188.MESSAGE_TYPE, obj);
  if (undefined !== arr) {
    const result = _mod1188.reflectionMergePartial(this, obj, arr);
    const tmpResult = _mod1188;
  }
  return obj;
};
prototype3["internalBinaryRead"] = function internalBinaryRead(pos, arg1, readUnknownField) {
  const self = this;
  let obj = arg3;
  if (arg3 == null) {
    obj = self.create();
  }
  const sum = pos.pos + arg1;
  if (pos.pos < sum) {
    do {
      let tmp3 = callback;
      let tmp4 = callback(pos.tag(), 2);
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
          let tmp16 = tmp5;
          let tmp17 = tmp6;
          let tmp18 = new.target;
          let tmp19 = new.target;
          error = new Error("Unknown field " + tmp5 + " (wire type " + tmp6 + ") for " + self.typeName);
          let tmp21 = error;
          throw error;
        } else {
          let skipResult = pos.skip(tmp6);
          if (false !== onRead) {
            if (true === onRead) {
              let tmp8 = require;
              let tmp9 = dependencyMap;
              onRead = _mod1188.UnknownFieldHandler.onRead;
            }
            let tmp10 = obj;
            let tmp11 = tmp5;
            let tmp12 = tmp6;
            let tmp13 = skipResult;
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
    tag.tag(1, _mod1188.WireType.Varint).int64(value.value);
    const tagResult = tag.tag(1, _mod1188.WireType.Varint);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = _mod1188.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, value, tag);
  }
  return tag;
};
const items2 = [{ no: 1, name: "value", kind: "scalar", T: 3 }];
const defineProperty2 = new defineProperty(
  "google.protobuf.Int64Value",
  items2,
  tmp2,
  "internalJsonWrite",
  "internalJsonRead",
);
// ThrowIfThisInitialized (0x7c)
class UInt64Value$Type extends MessageType4 {
  constructor() {
    items = [];
    items[0] = { no: 1, name: "value", kind: "scalar", T: 4 };
    tmp = new tmp("google.protobuf.UInt64Value", items, new.target);
    // ThrowIfThisInitialized (0x7c)
    return tmp;
  }
}
const prototype4 = UInt64Value$Type.prototype;
prototype4["internalJsonWrite"] = function internalJsonWrite(value) {
  const refJsonWriter = this.refJsonWriter;
  return refJsonWriter.scalar(_mod1188.ScalarType.UINT64, value.value, "value", false, true);
};
prototype4["internalJsonRead"] = function internalJsonRead(arg0, arg1, arg2) {
  const self = this;
  let obj = arg2;
  if (!arg2) {
    obj = self.create();
  }
  const refJsonReader = self.refJsonReader;
  obj.value = refJsonReader.scalar(arg0, _mod1188.ScalarType.UINT64, _mod1188.LongType.STRING, "value");
  return obj;
};
prototype4["create"] = function create(arr) {
  let obj = { value: "0" };
  const _Object = Object;
  obj = { enumerable: false, value: this };
  _Object.defineProperty(obj, _mod1188.MESSAGE_TYPE, obj);
  if (undefined !== arr) {
    const result = _mod1188.reflectionMergePartial(this, obj, arr);
    const tmpResult = _mod1188;
  }
  return obj;
};
prototype4["internalBinaryRead"] = function internalBinaryRead(pos, arg1, readUnknownField) {
  const self = this;
  let obj = arg3;
  if (arg3 == null) {
    obj = self.create();
  }
  const sum = pos.pos + arg1;
  if (pos.pos < sum) {
    do {
      let tmp3 = callback;
      let tmp4 = callback(pos.tag(), 2);
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
          let tmp16 = tmp5;
          let tmp17 = tmp6;
          let tmp18 = new.target;
          let tmp19 = new.target;
          error = new Error("Unknown field " + tmp5 + " (wire type " + tmp6 + ") for " + self.typeName);
          let tmp21 = error;
          throw error;
        } else {
          let skipResult = pos.skip(tmp6);
          if (false !== onRead) {
            if (true === onRead) {
              let tmp8 = require;
              let tmp9 = dependencyMap;
              onRead = _mod1188.UnknownFieldHandler.onRead;
            }
            let tmp10 = obj;
            let tmp11 = tmp5;
            let tmp12 = tmp6;
            let tmp13 = skipResult;
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
    tag.tag(1, _mod1188.WireType.Varint).uint64(value.value);
    const tagResult = tag.tag(1, _mod1188.WireType.Varint);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = _mod1188.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, value, tag);
  }
  return tag;
};
const items3 = [{ no: 1, name: "value", kind: "scalar", T: 4 }];
const defineProperty3 = new defineProperty(
  "google.protobuf.UInt64Value",
  items3,
  tmp2,
  "internalJsonWrite",
  "internalJsonRead",
);
// ThrowIfThisInitialized (0x7c)
class Int32Value$Type extends MessageType5 {
  constructor() {
    items = [];
    items[0] = { no: 1, name: "value", kind: "scalar", T: 5 };
    tmp = new tmp("google.protobuf.Int32Value", items, new.target);
    // ThrowIfThisInitialized (0x7c)
    return tmp;
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
  let obj = { value: 0 };
  const _Object = Object;
  obj = { enumerable: false, value: this };
  _Object.defineProperty(obj, _mod1188.MESSAGE_TYPE, obj);
  if (undefined !== arr) {
    const result = _mod1188.reflectionMergePartial(this, obj, arr);
    const tmpResult = _mod1188;
  }
  return obj;
};
prototype5["internalBinaryRead"] = function internalBinaryRead(pos, arg1, readUnknownField) {
  const self = this;
  let obj = arg3;
  if (arg3 == null) {
    obj = self.create();
  }
  const sum = pos.pos + arg1;
  if (pos.pos < sum) {
    do {
      let tmp3 = callback;
      let tmp4 = callback(pos.tag(), 2);
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
          let tmp16 = tmp5;
          let tmp17 = tmp6;
          let tmp18 = new.target;
          let tmp19 = new.target;
          error = new Error("Unknown field " + tmp5 + " (wire type " + tmp6 + ") for " + self.typeName);
          let tmp21 = error;
          throw error;
        } else {
          let skipResult = pos.skip(tmp6);
          if (false !== onRead) {
            if (true === onRead) {
              let tmp8 = require;
              let tmp9 = dependencyMap;
              onRead = _mod1188.UnknownFieldHandler.onRead;
            }
            let tmp10 = obj;
            let tmp11 = tmp5;
            let tmp12 = tmp6;
            let tmp13 = skipResult;
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
    tag.tag(1, _mod1188.WireType.Varint).int32(value.value);
    const tagResult = tag.tag(1, _mod1188.WireType.Varint);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = _mod1188.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, value, tag);
  }
  return tag;
};
const items4 = [{ no: 1, name: "value", kind: "scalar", T: 5 }];
const defineProperty4 = new defineProperty(
  "google.protobuf.Int32Value",
  items4,
  tmp2,
  "internalJsonWrite",
  "internalJsonRead",
);
// ThrowIfThisInitialized (0x7c)
class UInt32Value$Type extends MessageType6 {
  constructor() {
    items = [];
    items[0] = { no: 1, name: "value", kind: "scalar", T: 13 };
    tmp = new tmp("google.protobuf.UInt32Value", items, new.target);
    // ThrowIfThisInitialized (0x7c)
    return tmp;
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
  let obj = { value: 0 };
  const _Object = Object;
  obj = { enumerable: false, value: this };
  _Object.defineProperty(obj, _mod1188.MESSAGE_TYPE, obj);
  if (undefined !== arr) {
    const result = _mod1188.reflectionMergePartial(this, obj, arr);
    const tmpResult = _mod1188;
  }
  return obj;
};
prototype6["internalBinaryRead"] = function internalBinaryRead(pos, arg1, readUnknownField) {
  const self = this;
  let obj = arg3;
  if (arg3 == null) {
    obj = self.create();
  }
  const sum = pos.pos + arg1;
  if (pos.pos < sum) {
    do {
      let tmp3 = callback;
      let tmp4 = callback(pos.tag(), 2);
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
          let tmp16 = tmp5;
          let tmp17 = tmp6;
          let tmp18 = new.target;
          let tmp19 = new.target;
          error = new Error("Unknown field " + tmp5 + " (wire type " + tmp6 + ") for " + self.typeName);
          let tmp21 = error;
          throw error;
        } else {
          let skipResult = pos.skip(tmp6);
          if (false !== onRead) {
            if (true === onRead) {
              let tmp8 = require;
              let tmp9 = dependencyMap;
              onRead = _mod1188.UnknownFieldHandler.onRead;
            }
            let tmp10 = obj;
            let tmp11 = tmp5;
            let tmp12 = tmp6;
            let tmp13 = skipResult;
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
    tag.tag(1, _mod1188.WireType.Varint).uint32(value.value);
    const tagResult = tag.tag(1, _mod1188.WireType.Varint);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = _mod1188.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, value, tag);
  }
  return tag;
};
const items5 = [{ no: 1, name: "value", kind: "scalar", T: 13 }];
const defineProperty5 = new defineProperty(
  "google.protobuf.UInt32Value",
  items5,
  tmp2,
  "internalJsonWrite",
  "internalJsonRead",
);
// ThrowIfThisInitialized (0x7c)
class BoolValue$Type extends MessageType7 {
  constructor() {
    items = [];
    items[0] = { no: 1, name: "value", kind: "scalar", T: 8 };
    tmp = new tmp("google.protobuf.BoolValue", items, new.target);
    // ThrowIfThisInitialized (0x7c)
    return tmp;
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
  let obj = { value: false };
  const _Object = Object;
  obj = { enumerable: false, value: this };
  _Object.defineProperty(obj, _mod1188.MESSAGE_TYPE, obj);
  if (undefined !== arr) {
    const result = _mod1188.reflectionMergePartial(this, obj, arr);
    const tmpResult = _mod1188;
  }
  return obj;
};
prototype7["internalBinaryRead"] = function internalBinaryRead(pos, arg1, readUnknownField) {
  const self = this;
  let obj = arg3;
  if (arg3 == null) {
    obj = self.create();
  }
  const sum = pos.pos + arg1;
  if (pos.pos < sum) {
    do {
      let tmp3 = callback;
      let tmp4 = callback(pos.tag(), 2);
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
          let tmp16 = tmp5;
          let tmp17 = tmp6;
          let tmp18 = new.target;
          let tmp19 = new.target;
          error = new Error("Unknown field " + tmp5 + " (wire type " + tmp6 + ") for " + self.typeName);
          let tmp21 = error;
          throw error;
        } else {
          let skipResult = pos.skip(tmp6);
          if (false !== onRead) {
            if (true === onRead) {
              let tmp8 = require;
              let tmp9 = dependencyMap;
              onRead = _mod1188.UnknownFieldHandler.onRead;
            }
            let tmp10 = obj;
            let tmp11 = tmp5;
            let tmp12 = tmp6;
            let tmp13 = skipResult;
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
    tag.tag(1, _mod1188.WireType.Varint).bool(value.value);
    const tagResult = tag.tag(1, _mod1188.WireType.Varint);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = _mod1188.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, value, tag);
  }
  return tag;
};
const items6 = [{ no: 1, name: "value", kind: "scalar", T: 8 }];
const defineProperty6 = new defineProperty(
  "google.protobuf.BoolValue",
  items6,
  tmp2,
  "internalJsonWrite",
  "internalJsonRead",
);
// ThrowIfThisInitialized (0x7c)
class StringValue$Type extends MessageType8 {
  constructor() {
    items = [];
    items[0] = { no: 1, name: "value", kind: "scalar", T: 9 };
    tmp = new tmp("google.protobuf.StringValue", items, new.target);
    // ThrowIfThisInitialized (0x7c)
    return tmp;
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
  let obj = { value: "" };
  const _Object = Object;
  obj = { enumerable: false, value: this };
  _Object.defineProperty(obj, _mod1188.MESSAGE_TYPE, obj);
  if (undefined !== arr) {
    const result = _mod1188.reflectionMergePartial(this, obj, arr);
    const tmpResult = _mod1188;
  }
  return obj;
};
prototype8["internalBinaryRead"] = function internalBinaryRead(pos, arg1, readUnknownField) {
  const self = this;
  let obj = arg3;
  if (arg3 == null) {
    obj = self.create();
  }
  const sum = pos.pos + arg1;
  if (pos.pos < sum) {
    do {
      let tmp3 = callback;
      let tmp4 = callback(pos.tag(), 2);
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
          let tmp16 = tmp5;
          let tmp17 = tmp6;
          let tmp18 = new.target;
          let tmp19 = new.target;
          error = new Error("Unknown field " + tmp5 + " (wire type " + tmp6 + ") for " + self.typeName);
          let tmp21 = error;
          throw error;
        } else {
          let skipResult = pos.skip(tmp6);
          if (false !== onRead) {
            if (true === onRead) {
              let tmp8 = require;
              let tmp9 = dependencyMap;
              onRead = _mod1188.UnknownFieldHandler.onRead;
            }
            let tmp10 = obj;
            let tmp11 = tmp5;
            let tmp12 = tmp6;
            let tmp13 = skipResult;
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
    tag.tag(1, _mod1188.WireType.LengthDelimited).string(value.value);
    const tagResult = tag.tag(1, _mod1188.WireType.LengthDelimited);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = _mod1188.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, value, tag);
  }
  return tag;
};
const items7 = [{ no: 1, name: "value", kind: "scalar", T: 9 }];
tmp = new tmp(
  "google.protobuf.StringValue",
  items7,
  tmp2,
  "internalJsonWrite",
  "internalJsonRead",
  "create",
  "internalBinaryRead",
  StringValue$Type,
  "internalBinaryWrite",
  tmp,
  undefined,
  arg1,
  dependencyMap,
  new.target,
  defineProperty,
  new.target,
  defineProperty1,
  new.target,
  defineProperty2,
  new.target,
  defineProperty3,
  new.target,
  defineProperty4,
  new.target,
);
// ThrowIfThisInitialized (0x7c)
class BytesValue$Type extends MessageType9 {
  constructor() {
    items = [];
    items[0] = { no: 1, name: "value", kind: "scalar", T: 12 };
    tmp = new tmp("google.protobuf.BytesValue", items, new.target);
    // ThrowIfThisInitialized (0x7c)
    return tmp;
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
  let obj = { value: null };
  const uint8Array = new Uint8Array(0);
  obj[0] = uint8Array;
  const _Object = Object;
  obj = { enumerable: false, value: this };
  _Object.defineProperty(obj, _mod1188.MESSAGE_TYPE, obj);
  if (undefined !== arr) {
    const result = _mod1188.reflectionMergePartial(this, obj, arr);
    const tmp2Result = _mod1188;
  }
  return obj;
};
prototype9["internalBinaryRead"] = function internalBinaryRead(pos, arg1, readUnknownField) {
  const self = this;
  let obj = arg3;
  if (arg3 == null) {
    obj = self.create();
  }
  const sum = pos.pos + arg1;
  if (pos.pos < sum) {
    do {
      let tmp3 = callback;
      let tmp4 = callback(pos.tag(), 2);
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
          let tmp16 = tmp5;
          let tmp17 = tmp6;
          let tmp18 = new.target;
          let tmp19 = new.target;
          error = new Error("Unknown field " + tmp5 + " (wire type " + tmp6 + ") for " + self.typeName);
          let tmp21 = error;
          throw error;
        } else {
          let skipResult = pos.skip(tmp6);
          if (false !== onRead) {
            if (true === onRead) {
              let tmp8 = require;
              let tmp9 = dependencyMap;
              onRead = _mod1188.UnknownFieldHandler.onRead;
            }
            let tmp10 = obj;
            let tmp11 = tmp5;
            let tmp12 = tmp6;
            let tmp13 = skipResult;
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
    tag.tag(1, _mod1188.WireType.LengthDelimited).bytes(value.value);
    const tagResult = tag.tag(1, _mod1188.WireType.LengthDelimited);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = _mod1188.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, value, tag);
  }
  return tag;
};
const items8 = [{ no: 1, name: "value", kind: "scalar", T: 12 }];
// ThrowIfThisInitialized (0x7c)
let tmp12 = new "internalBinaryWrite"(
  "google.protobuf.BytesValue",
  items8,
  tmp2,
  "internalJsonWrite",
  "internalJsonRead",
  "create",
  "internalBinaryRead",
  BytesValue$Type,
  "internalBinaryWrite",
  items8,
  undefined,
  arg1,
  dependencyMap,
  new.target,
  defineProperty,
  new.target,
  defineProperty1,
  new.target,
  defineProperty2,
  new.target,
  defineProperty3,
  new.target,
  defineProperty4,
  new.target,
);
let result = require("set").fileFinishedImporting("../discord_common/js/packages/protos/google/protobuf/wrappers.tsx");

export const DoubleValue = defineProperty;
export const FloatValue = defineProperty1;
export const Int64Value = defineProperty2;
export const UInt64Value = defineProperty3;
export const Int32Value = defineProperty4;
export const UInt32Value = defineProperty5;
export const BoolValue = defineProperty6;
export const StringValue = tmp;
export const BytesValue = tmp12;
