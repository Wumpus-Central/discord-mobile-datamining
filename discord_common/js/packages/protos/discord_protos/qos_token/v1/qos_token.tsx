// === Module 14195: qos_token ===

// Module 14195 (qos_token)
import _mod1188 from "module_1188" /* 1188 */;
import _slicedToArray from "module_32" /* 32 */;

require = fn;
const MessageType = fn(1188).MessageType;
class QosToken$Type extends MessageType {
  constructor() {
    obj = {
      no: 1,
      name: "client_provided",
      kind: "message",
      T() {
            return closure_1_3;
          }
    };
    items = [, ];
    items[0] = obj;
    items[1] = {
      no: 2,
      name: "derived",
      kind: "message",
      T() {
            return clientProvidedQosDataType;
          }
    };
    tmp = new tmp("discord_protos.qos_token.v1.QosToken", items, new.target);
    return tmp;
  }
}
const prototype = QosToken$Type.prototype;
prototype["create"] = function create(arr) {
  let obj = {};
  const _Object = Object;
  obj = { enumerable: false, value: this };
  _Object.defineProperty(obj, _mod1188.MESSAGE_TYPE, obj);
  if (undefined !== arr) {
    const result = _mod1188.reflectionMergePartial(this, obj, arr);
    const tmpResult = _mod1188;
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
        obj.clientProvided = closure_3.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.clientProvided);
      } else if (2 === tmp5) {
        obj.derived = clientProvidedQosDataType.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.derived);
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
              onRead = _mod1188.UnknownFieldHandler.onRead;
            }
            let onReadResult = onRead(self.typeName, obj, tmp5, tmp6, skipResult);
          }
        }
      }
    } while (pos.pos < sum);
  }
  return obj;
};
prototype["internalBinaryWrite"] = function internalBinaryWrite(clientProvided, tag, writeUnknownFields) {
  if (clientProvided.clientProvided) {
    const tagResult = tag.tag(1, _mod1188.WireType.LengthDelimited);
    const joined = closure_3.internalBinaryWrite(clientProvided.clientProvided, tag.tag(1, _mod1188.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult = closure_3.internalBinaryWrite(clientProvided.clientProvided, tag.tag(1, _mod1188.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (clientProvided.derived) {
    const tagResult1 = tag.tag(2, _mod1188.WireType.LengthDelimited);
    const joined1 = clientProvidedQosDataType.internalBinaryWrite(clientProvided.derived, tag.tag(2, _mod1188.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult1 = clientProvidedQosDataType.internalBinaryWrite(clientProvided.derived, tag.tag(2, _mod1188.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = _mod1188.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, clientProvided, tag);
  }
  return tag;
};
let items = [
  {
    no: 1,
    name: "client_provided",
    kind: "message",
    T() {
      return closure_1_3;
    }
  },
  {
    no: 2,
    name: "derived",
    kind: "message",
    T() {
      return clientProvidedQosDataType;
    }
  }
];
defineProperty = new defineProperty("discord_protos.qos_token.v1.QosToken", items, tmp3, tmp2, "create");
const MessageType2 = fn(1188).MessageType;
class ClientProvidedQosData$Type extends MessageType2 {
  constructor() {
    items = [];
    items[0] = { no: 1, name: "is_active", kind: "scalar", T: 8 };
    tmp = new tmp("discord_protos.qos_token.v1.ClientProvidedQosData", items, new.target);
    return tmp;
  }
}
const prototype2 = ClientProvidedQosData$Type.prototype;
prototype2["create"] = function create(arr) {
  let obj = { isActive: false };
  const _Object = Object;
  obj = { enumerable: false, value: this };
  _Object.defineProperty(obj, _mod1188.MESSAGE_TYPE, obj);
  if (undefined !== arr) {
    const result = _mod1188.reflectionMergePartial(this, obj, arr);
    const tmpResult = _mod1188;
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
        obj.isActive = pos.bool();
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
              onRead = _mod1188.UnknownFieldHandler.onRead;
            }
            let onReadResult = onRead(self.typeName, obj, tmp5, tmp6, skipResult);
          }
        }
      }
    } while (pos.pos < sum);
  }
  return obj;
};
prototype2["internalBinaryWrite"] = function internalBinaryWrite(isActive, tag, writeUnknownFields) {
  if (false !== isActive.isActive) {
    tag.tag(1, _mod1188.WireType.Varint).bool(isActive.isActive);
    const tagResult = tag.tag(1, _mod1188.WireType.Varint);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = _mod1188.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, isActive, tag);
  }
  return tag;
};
const items1 = [{ no: 1, name: "is_active", kind: "scalar", T: 8 }];
tmp = new tmp("discord_protos.qos_token.v1.ClientProvidedQosData", items1, tmp3, tmp2, "create", "internalBinaryRead", ClientProvidedQosData$Type, "internalBinaryWrite", tmp, undefined, fn, dependencyMap);
let closure_3 = tmp;
const MessageType3 = fn(1188).MessageType;
class DerivedQosData$Type extends MessageType3 {
  constructor() {
    items = [];
    items[0] = { no: 1, name: "claims", kind: "scalar", T: 12 };
    tmp = new tmp("discord_protos.qos_token.v1.DerivedQosData", items, new.target);
    return tmp;
  }
}
const prototype3 = DerivedQosData$Type.prototype;
prototype3["create"] = function create(arr) {
  let obj = { claims: null };
  const uint8Array = new Uint8Array(0);
  obj.claims = uint8Array;
  const _Object = Object;
  obj = { enumerable: false, value: this };
  _Object.defineProperty(obj, _mod1188.MESSAGE_TYPE, obj);
  if (undefined !== arr) {
    const result = _mod1188.reflectionMergePartial(this, obj, arr);
    const tmp2Result = _mod1188;
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
        obj.claims = pos.bytes();
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
              onRead = _mod1188.UnknownFieldHandler.onRead;
            }
            let onReadResult = onRead(self.typeName, obj, tmp5, tmp6, skipResult);
          }
        }
      }
    } while (pos.pos < sum);
  }
  return obj;
};
prototype3["internalBinaryWrite"] = function internalBinaryWrite(claims, tag, writeUnknownFields) {
  if (claims.claims.length) {
    tag.tag(1, _mod1188.WireType.LengthDelimited).bytes(claims.claims);
    const tagResult = tag.tag(1, _mod1188.WireType.LengthDelimited);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = _mod1188.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, claims, tag);
  }
  return tag;
};
const items2 = [{ no: 1, name: "claims", kind: "scalar", T: 12 }];
const clientProvidedQosDataType = new ClientProvidedQosData$Type("discord_protos.qos_token.v1.DerivedQosData", items2, tmp3, DerivedQosData$Type, "create", "internalBinaryRead", ClientProvidedQosData$Type, "internalBinaryWrite", items2, undefined, fn, dependencyMap, new.target, defineProperty, tmp);
const MessageType4 = fn(1188).MessageType;
class Claims$Type extends MessageType4 {
  constructor() {
    items = [, , ];
    items[0] = { no: 1, name: "user_id", kind: "scalar", T: 6 };
    items[1] = { no: 2, name: "issued_at", kind: "scalar", T: 6 };
    items[2] = { no: 3, name: "is_staff", kind: "scalar", T: 8 };
    tmp = new tmp("discord_protos.qos_token.v1.Claims", items, new.target);
    return tmp;
  }
}
const prototype4 = Claims$Type.prototype;
prototype4["create"] = function create(arr) {
  let obj = { userId: "0", issuedAt: "0", isStaff: false };
  const _Object = Object;
  obj = { enumerable: false, value: this };
  _Object.defineProperty(obj, _mod1188.MESSAGE_TYPE, obj);
  if (undefined !== arr) {
    const result = _mod1188.reflectionMergePartial(this, obj, arr);
    const tmpResult = _mod1188;
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
        let str5 = pos.fixed64();
        obj.userId = str5.toString();
      } else if (2 === tmp5) {
        let str4 = pos.fixed64();
        obj.issuedAt = str4.toString();
      } else if (3 === tmp5) {
        obj.isStaff = pos.bool();
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
              onRead = _mod1188.UnknownFieldHandler.onRead;
            }
            let onReadResult = onRead(self.typeName, obj, tmp5, tmp6, skipResult);
          }
        }
      }
    } while (pos.pos < sum);
  }
  return obj;
};
prototype4["internalBinaryWrite"] = function internalBinaryWrite(userId, tag, writeUnknownFields) {
  if ("0" !== userId.userId) {
    tag.tag(1, _mod1188.WireType.Bit64).fixed64(userId.userId);
    const tagResult = tag.tag(1, _mod1188.WireType.Bit64);
  }
  if ("0" !== userId.issuedAt) {
    tag.tag(2, _mod1188.WireType.Bit64).fixed64(userId.issuedAt);
    const tagResult1 = tag.tag(2, _mod1188.WireType.Bit64);
  }
  if (false !== userId.isStaff) {
    tag.tag(3, _mod1188.WireType.Varint).bool(userId.isStaff);
    const tagResult2 = tag.tag(3, _mod1188.WireType.Varint);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = _mod1188.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, userId, tag);
  }
  return tag;
};
const items3 = [{ no: 1, name: "user_id", kind: "scalar", T: 6 }, { no: 2, name: "issued_at", kind: "scalar", T: 6 }, { no: 3, name: "is_staff", kind: "scalar", T: 8 }];
const size = fn(2);
let result = size.fileFinishedImporting("../discord_common/js/packages/protos/discord_protos/qos_token/v1/qos_token.tsx");

export const QosToken = defineProperty;
export const ClientProvidedQosData = tmp;
export const DerivedQosData = clientProvidedQosDataType;
export const Claims = new "internalBinaryWrite"("discord_protos.qos_token.v1.Claims", items3, tmp3, DerivedQosData$Type, "create", "internalBinaryRead", Claims$Type, "internalBinaryWrite", items3, undefined, fn, dependencyMap);