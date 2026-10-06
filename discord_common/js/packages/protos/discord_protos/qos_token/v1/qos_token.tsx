// === Module 13977: qos_token ===

// Module 13977 (qos_token)
import _mod1198 from "module_1198" /* 1198 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import size from "module_2" /* 2 */;

let internalBinaryWrite, internalBinaryWrite2;

let tmp2;
function T() {
  return closure_1_3;
}
const T2 = function T() {
  return clientProvidedQosDataType;
};
const MessageType = _mod1198.MessageType;
class QosToken$Type extends MessageType {
  constructor() {
    const items = [, ];
    const obj = { no: 1, name: "client_provided", kind: "message", T };
    items[0] = obj;
    items[1] = { no: 2, name: "derived", kind: "message", T: T2 };
    const tmp2 = new tmp("discord_protos.qos_token.v1.QosToken", items, new.target);
    return tmp2;
  }
  create(arr) {
    const obj = {};
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
  internalBinaryWrite(clientProvided, tag, writeUnknownFields) {
    if (clientProvided.clientProvided) {
      internalBinaryWrite = closure_3.internalBinaryWrite;
      clientProvided = clientProvided.clientProvided;
      const tagResult = tag.tag(1, _mod1198.WireType.LengthDelimited);
      const internalBinaryWriteResult = internalBinaryWrite(clientProvided, tagResult.fork(), writeUnknownFields);
      const joined = internalBinaryWriteResult.join();
    }
    if (clientProvided.derived) {
      internalBinaryWrite2 = clientProvidedQosDataType.internalBinaryWrite;
      const derived = clientProvided.derived;
      const tagResult1 = tag.tag(2, _mod1198.WireType.LengthDelimited);
      const internalBinaryWrite2Result = internalBinaryWrite2(derived, tagResult1.fork(), writeUnknownFields);
      const joined1 = internalBinaryWrite2Result.join();
    }
    let onWrite = writeUnknownFields.writeUnknownFields;
    if (false !== onWrite) {
      if (1 == onWrite) {
        onWrite = _mod1198.UnknownFieldHandler.onWrite;
      }
      const self = this;
      onWrite(this.typeName, clientProvided, tag);
    }
    return tag;
  }
}
const prototype = QosToken$Type.prototype;
let obj = { no: 1, name: "client_provided", kind: "message", T };
let items = [obj, { no: 2, name: "derived", kind: "message", T: T2 }];
const defineProperty1 = new defineProperty("discord_protos.qos_token.v1.QosToken", items, tmp3, tmp2, "create");
const MessageType2 = _mod1198.MessageType;
class ClientProvidedQosData$Type extends MessageType2 {
  constructor() {
    const items = [{ no: 1, name: "is_active", kind: "scalar", T: 8 }];
    const tmp2 = new tmp("discord_protos.qos_token.v1.ClientProvidedQosData", items, new.target);
    return tmp2;
  }
  create(arr) {
    const obj = { isActive: false };
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
  internalBinaryWrite(isActive, tag, writeUnknownFields) {
    if (false !== isActive.isActive) {
      const tagResult = tag.tag(1, _mod1198.WireType.Varint);
      tagResult.bool(isActive.isActive);
    }
    let onWrite = writeUnknownFields.writeUnknownFields;
    if (false !== onWrite) {
      if (1 == onWrite) {
        onWrite = _mod1198.UnknownFieldHandler.onWrite;
      }
      const self = this;
      onWrite(this.typeName, isActive, tag);
    }
    return tag;
  }
}
const prototype2 = ClientProvidedQosData$Type.prototype;
const items1 = [{ no: 1, name: "is_active", kind: "scalar", T: 8 }];
let tmp4 = new tmp("discord_protos.qos_token.v1.ClientProvidedQosData", items1, tmp3, tmp2, "create", "internalBinaryRead", ClientProvidedQosData$Type, "internalBinaryWrite", tmp, undefined, require, dependencyMap);
const _false = tmp4;
const MessageType3 = _mod1198.MessageType;
class DerivedQosData$Type extends MessageType3 {
  constructor() {
    const items = [{ no: 1, name: "claims", kind: "scalar", T: 12 }, { no: 2, name: "signature", kind: "scalar", T: 12 }, { no: 3, name: "key_id", kind: "scalar", T: 13 }];
    const tmp2 = new tmp("discord_protos.qos_token.v1.DerivedQosData", items, new.target);
    return tmp2;
  }
  create(arr) {
    let uint8Array;
    let uint8Array1;
    const obj = { claims: uint8Array, signature: uint8Array1, keyId: 0 };
    uint8Array = new Uint8Array(0);
    uint8Array1 = new Uint8Array(0);
    const _Object = Object;
    const obj2 = { enumerable: false, value: this };
    _Object.defineProperty(obj, _mod1198.MESSAGE_TYPE, obj2);
    if (undefined !== arr) {
      const tmp3Result = _mod1198;
      const result = tmp3Result.reflectionMergePartial(this, obj, arr);
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
  internalBinaryWrite(claims, tag, writeUnknownFields) {
    if (claims.claims.length) {
      const tagResult = tag.tag(1, _mod1198.WireType.LengthDelimited);
      tagResult.bytes(claims.claims);
    }
    if (claims.signature.length) {
      const tagResult1 = tag.tag(2, _mod1198.WireType.LengthDelimited);
      tagResult1.bytes(claims.signature);
    }
    if (0 !== claims.keyId) {
      const tagResult2 = tag.tag(3, _mod1198.WireType.Varint);
      tagResult2.uint32(claims.keyId);
    }
    let onWrite = writeUnknownFields.writeUnknownFields;
    if (false !== onWrite) {
      if (1 == onWrite) {
        onWrite = _mod1198.UnknownFieldHandler.onWrite;
      }
      const self = this;
      onWrite(this.typeName, claims, tag);
    }
    return tag;
  }
}
const prototype3 = DerivedQosData$Type.prototype;
const items2 = [{ no: 1, name: "claims", kind: "scalar", T: 12 }, { no: 2, name: "signature", kind: "scalar", T: 12 }, { no: 3, name: "key_id", kind: "scalar", T: 13 }];
const clientProvidedQosDataType = new ClientProvidedQosData$Type("discord_protos.qos_token.v1.DerivedQosData", items2, tmp3, DerivedQosData$Type, "create", "internalBinaryRead", ClientProvidedQosData$Type, "internalBinaryWrite", items2, undefined, require, dependencyMap, this, defineProperty1, tmp4);
const MessageType4 = _mod1198.MessageType;
class Claims$Type extends MessageType4 {
  constructor() {
    const items = [{ no: 1, name: "user_id", kind: "scalar", T: 6 }, { no: 2, name: "issued_at", kind: "scalar", T: 6 }, { no: 3, name: "is_staff", kind: "scalar", T: 8 }, { no: 4, name: "auth_token_hash", kind: "scalar", T: 12 }, { no: 5, name: "expires_at", kind: "scalar", T: 6 }];
    const tmp2 = new tmp("discord_protos.qos_token.v1.Claims", items, new.target);
    return tmp2;
  }
  create(arr) {
    let uint8Array;
    const obj = { userId: "0", issuedAt: "0", isStaff: false, authTokenHash: uint8Array, expiresAt: "0" };
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
  internalBinaryWrite(userId, tag, writeUnknownFields) {
    if ("0" !== userId.userId) {
      const tagResult = tag.tag(1, _mod1198.WireType.Bit64);
      tagResult.fixed64(userId.userId);
    }
    if ("0" !== userId.issuedAt) {
      const tagResult1 = tag.tag(2, _mod1198.WireType.Bit64);
      tagResult1.fixed64(userId.issuedAt);
    }
    if (false !== userId.isStaff) {
      const tagResult2 = tag.tag(3, _mod1198.WireType.Varint);
      tagResult2.bool(userId.isStaff);
    }
    if (userId.authTokenHash.length) {
      const tagResult3 = tag.tag(4, _mod1198.WireType.LengthDelimited);
      tagResult3.bytes(userId.authTokenHash);
    }
    if ("0" !== userId.expiresAt) {
      const tagResult4 = tag.tag(5, _mod1198.WireType.Bit64);
      tagResult4.fixed64(userId.expiresAt);
    }
    let onWrite = writeUnknownFields.writeUnknownFields;
    if (false !== onWrite) {
      if (1 == onWrite) {
        onWrite = _mod1198.UnknownFieldHandler.onWrite;
      }
      const self = this;
      onWrite(this.typeName, userId, tag);
    }
    return tag;
  }
}
const prototype4 = Claims$Type.prototype;
const items3 = [{ no: 1, name: "user_id", kind: "scalar", T: 6 }, { no: 2, name: "issued_at", kind: "scalar", T: 6 }, { no: 3, name: "is_staff", kind: "scalar", T: 8 }, { no: 4, name: "auth_token_hash", kind: "scalar", T: 12 }, { no: 5, name: "expires_at", kind: "scalar", T: 6 }];
const tmp8 = new "internalBinaryWrite"("discord_protos.qos_token.v1.Claims", items3, tmp3, DerivedQosData$Type, "create", "internalBinaryRead", Claims$Type, "internalBinaryWrite", items3, undefined, require, dependencyMap);
let result = size.fileFinishedImporting("../discord_common/js/packages/protos/discord_protos/qos_token/v1/qos_token.tsx");

export const QosToken = defineProperty1;
export const ClientProvidedQosData = tmp4;
export const DerivedQosData = clientProvidedQosDataType;
export const Claims = tmp8;