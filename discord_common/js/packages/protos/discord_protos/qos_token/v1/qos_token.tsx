// discord_common/js/packages/protos/discord_protos/qos_token/v1/qos_token.tsx
import _mod1187 from "../../../../../../../_runtime/metro/01187__.js";
import _slicedToArray from "../../../../../../../_runtime/metro/00032__.js";

require = fn;
const MessageType = fn(1187).MessageType;
class QosToken$Type extends MessageType {
  constructor() {
    obj = {
      no: 1,
      name: "client_provided",
      kind: "message",
      T() {
        return closure_1_3;
      },
    };
    items = [,];
    items[0] = obj;
    items[1] = {
      no: 2,
      name: "derived",
      kind: "message",
      T() {
        return clientProvidedQosDataType;
      },
    };
    tmp1 = new tmp("discord_protos.qos_token.v1.QosToken", items, new.target);
    return tmp1;
  }
}
const prototype = QosToken$Type.prototype;
prototype["create"] = function create(arr) {
  const obj = {};
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
prototype["internalBinaryWrite"] = function internalBinaryWrite(clientProvided, tag, writeUnknownFields) {
  if (clientProvided.clientProvided) {
    const tagResult = tag.tag(1, _mod1187.WireType.LengthDelimited);
    const joined = closure_3
      .internalBinaryWrite(
        clientProvided.clientProvided,
        tag.tag(1, _mod1187.WireType.LengthDelimited).fork(),
        writeUnknownFields,
      )
      .join();
    const internalBinaryWriteResult = closure_3.internalBinaryWrite(
      clientProvided.clientProvided,
      tag.tag(1, _mod1187.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    );
  }
  if (clientProvided.derived) {
    const tagResult1 = tag.tag(2, _mod1187.WireType.LengthDelimited);
    const joined1 = clientProvidedQosDataType
      .internalBinaryWrite(
        clientProvided.derived,
        tag.tag(2, _mod1187.WireType.LengthDelimited).fork(),
        writeUnknownFields,
      )
      .join();
    const internalBinaryWriteResult1 = clientProvidedQosDataType.internalBinaryWrite(
      clientProvided.derived,
      tag.tag(2, _mod1187.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    );
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = _mod1187.UnknownFieldHandler.onWrite;
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
    },
  },
  {
    no: 2,
    name: "derived",
    kind: "message",
    T() {
      return clientProvidedQosDataType;
    },
  },
];
const defineProperty1 = new defineProperty("discord_protos.qos_token.v1.QosToken", items, tmp3, tmp2, "create");
const MessageType2 = fn(1187).MessageType;
class ClientProvidedQosData$Type extends MessageType2 {
  constructor() {
    items = [];
    items[0] = { no: 1, name: "is_active", kind: "scalar", T: 8 };
    tmp1 = new tmp("discord_protos.qos_token.v1.ClientProvidedQosData", items, new.target);
    return tmp1;
  }
}
const prototype2 = ClientProvidedQosData$Type.prototype;
prototype2["create"] = function create(arr) {
  const obj = { isActive: false };
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
prototype2["internalBinaryWrite"] = function internalBinaryWrite(isActive, tag, writeUnknownFields) {
  if (false !== isActive.isActive) {
    tag.tag(1, _mod1187.WireType.Varint).bool(isActive.isActive);
    const tagResult = tag.tag(1, _mod1187.WireType.Varint);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = _mod1187.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, isActive, tag);
  }
  return tag;
};
const items1 = [{ no: 1, name: "is_active", kind: "scalar", T: 8 }];
let tmp4 = new tmp(
  "discord_protos.qos_token.v1.ClientProvidedQosData",
  items1,
  tmp3,
  tmp2,
  "create",
  "internalBinaryRead",
  ClientProvidedQosData$Type,
  "internalBinaryWrite",
  tmp,
  undefined,
  fn,
  dependencyMap,
);
let closure_3 = tmp4;
const MessageType3 = fn(1187).MessageType;
class DerivedQosData$Type extends MessageType3 {
  constructor() {
    items = [, ,];
    items[0] = { no: 1, name: "claims", kind: "scalar", T: 12 };
    items[1] = { no: 2, name: "signature", kind: "scalar", T: 12 };
    items[2] = { no: 3, name: "key_id", kind: "scalar", T: 13 };
    tmp1 = new tmp("discord_protos.qos_token.v1.DerivedQosData", items, new.target);
    return tmp1;
  }
}
const prototype3 = DerivedQosData$Type.prototype;
prototype3["create"] = function create(arr) {
  const obj = { claims: null, signature: null, keyId: 0 };
  const uint8Array = new Uint8Array(0);
  obj.claims = uint8Array;
  const uint8Array1 = new Uint8Array(0);
  obj.signature = uint8Array1;
  const _Object = Object;
  _Object.defineProperty(obj, _mod1187.MESSAGE_TYPE, { enumerable: false, value: this });
  if (undefined !== arr) {
    const result = _mod1187.reflectionMergePartial(this, obj, arr);
    const tmp3Result = _mod1187;
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
      } else if (2 === tmp5) {
        obj.signature = pos.bytes();
      } else if (3 === tmp5) {
        obj.keyId = pos.uint32();
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
prototype3["internalBinaryWrite"] = function internalBinaryWrite(claims, tag, writeUnknownFields) {
  if (claims.claims.length) {
    tag.tag(1, _mod1187.WireType.LengthDelimited).bytes(claims.claims);
    const tagResult = tag.tag(1, _mod1187.WireType.LengthDelimited);
  }
  if (claims.signature.length) {
    tag.tag(2, _mod1187.WireType.LengthDelimited).bytes(claims.signature);
    const tagResult1 = tag.tag(2, _mod1187.WireType.LengthDelimited);
  }
  if (0 !== claims.keyId) {
    tag.tag(3, _mod1187.WireType.Varint).uint32(claims.keyId);
    const tagResult2 = tag.tag(3, _mod1187.WireType.Varint);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = _mod1187.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, claims, tag);
  }
  return tag;
};
const items2 = [
  { no: 1, name: "claims", kind: "scalar", T: 12 },
  { no: 2, name: "signature", kind: "scalar", T: 12 },
  { no: 3, name: "key_id", kind: "scalar", T: 13 },
];
const clientProvidedQosDataType = new ClientProvidedQosData$Type(
  "discord_protos.qos_token.v1.DerivedQosData",
  items2,
  tmp3,
  DerivedQosData$Type,
  "create",
  "internalBinaryRead",
  ClientProvidedQosData$Type,
  "internalBinaryWrite",
  items2,
  undefined,
  fn,
  dependencyMap,
  new.target,
  defineProperty1,
  tmp4,
);
const MessageType4 = fn(1187).MessageType;
class Claims$Type extends MessageType4 {
  constructor() {
    items = [, , , ,];
    items[0] = { no: 1, name: "user_id", kind: "scalar", T: 6 };
    items[1] = { no: 2, name: "issued_at", kind: "scalar", T: 6 };
    items[2] = { no: 3, name: "is_staff", kind: "scalar", T: 8 };
    items[3] = { no: 4, name: "auth_token_hash", kind: "scalar", T: 12 };
    items[4] = { no: 5, name: "expires_at", kind: "scalar", T: 6 };
    tmp1 = new tmp("discord_protos.qos_token.v1.Claims", items, new.target);
    return tmp1;
  }
}
const prototype4 = Claims$Type.prototype;
prototype4["create"] = function create(arr) {
  const obj = { userId: "0", issuedAt: "0", isStaff: false, authTokenHash: null, expiresAt: "0" };
  const uint8Array = new Uint8Array(0);
  obj.authTokenHash = uint8Array;
  const _Object = Object;
  _Object.defineProperty(obj, _mod1187.MESSAGE_TYPE, { enumerable: false, value: this });
  if (undefined !== arr) {
    const result = _mod1187.reflectionMergePartial(this, obj, arr);
    const tmp2Result = _mod1187;
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
        let str6 = pos.fixed64();
        obj.userId = str6.toString();
      } else if (2 === tmp5) {
        let str5 = pos.fixed64();
        obj.issuedAt = str5.toString();
      } else if (3 === tmp5) {
        obj.isStaff = pos.bool();
      } else if (4 === tmp5) {
        obj.authTokenHash = pos.bytes();
      } else if (5 === tmp5) {
        let str4 = pos.fixed64();
        obj.expiresAt = str4.toString();
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
prototype4["internalBinaryWrite"] = function internalBinaryWrite(userId, tag, writeUnknownFields) {
  if ("0" !== userId.userId) {
    tag.tag(1, _mod1187.WireType.Bit64).fixed64(userId.userId);
    const tagResult = tag.tag(1, _mod1187.WireType.Bit64);
  }
  if ("0" !== userId.issuedAt) {
    tag.tag(2, _mod1187.WireType.Bit64).fixed64(userId.issuedAt);
    const tagResult1 = tag.tag(2, _mod1187.WireType.Bit64);
  }
  if (false !== userId.isStaff) {
    tag.tag(3, _mod1187.WireType.Varint).bool(userId.isStaff);
    const tagResult2 = tag.tag(3, _mod1187.WireType.Varint);
  }
  if (userId.authTokenHash.length) {
    tag.tag(4, _mod1187.WireType.LengthDelimited).bytes(userId.authTokenHash);
    const tagResult3 = tag.tag(4, _mod1187.WireType.LengthDelimited);
  }
  if ("0" !== userId.expiresAt) {
    tag.tag(5, _mod1187.WireType.Bit64).fixed64(userId.expiresAt);
    const tagResult4 = tag.tag(5, _mod1187.WireType.Bit64);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = _mod1187.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, userId, tag);
  }
  return tag;
};
const items3 = [
  { no: 1, name: "user_id", kind: "scalar", T: 6 },
  { no: 2, name: "issued_at", kind: "scalar", T: 6 },
  { no: 3, name: "is_staff", kind: "scalar", T: 8 },
  { no: 4, name: "auth_token_hash", kind: "scalar", T: 12 },
  { no: 5, name: "expires_at", kind: "scalar", T: 6 },
];
const size = fn(2);
let result = size.fileFinishedImporting(
  "../discord_common/js/packages/protos/discord_protos/qos_token/v1/qos_token.tsx",
);

export const QosToken = defineProperty1;
export const ClientProvidedQosData = tmp4;
export const DerivedQosData = clientProvidedQosDataType;
export const Claims = new "internalBinaryWrite"(
  "discord_protos.qos_token.v1.Claims",
  items3,
  tmp3,
  DerivedQosData$Type,
  "create",
  "internalBinaryRead",
  Claims$Type,
  "internalBinaryWrite",
  items3,
  undefined,
  fn,
  dependencyMap,
);
