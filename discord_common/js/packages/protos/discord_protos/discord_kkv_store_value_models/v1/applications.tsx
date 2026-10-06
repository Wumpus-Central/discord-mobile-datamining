// === Module 8755: applications ===

// Module 8755 (applications)
import _mod1198 from "module_1198" /* 1198 */;
import timestamp from "timestamp" /* 1227 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import size from "module_2" /* 2 */;

let internalBinaryWrite;

let tmp2;
let tmp3;
let tmp4;
function T() {
  const items = ["discord_protos.discord_kkv_store_value_models.v1.ApplicationDisclosureType", ApplicationDisclosureType];
  return items;
}
const T2 = function T() {
  return timestamp.Timestamp;
};
const T3 = function T() {
  return closure_1_4;
};
const ApplicationDisclosureType = { UNSPECIFIED_DISCLOSURE: 0, [0]: "UNSPECIFIED_DISCLOSURE", IP_LOCATION: 1, [1]: "IP_LOCATION", DISPLAYS_ADVERTISEMENTS: 2, [2]: "DISPLAYS_ADVERTISEMENTS", PARTNER_SDK_DATA_SHARING_MESSAGE: 3, [3]: "PARTNER_SDK_DATA_SHARING_MESSAGE" };
const MessageType = _mod1198.MessageType;
class ApplicationUserRoleConnection$Type extends MessageType {
  constructor() {
    const items = [{ no: 1, name: "metadata", kind: "map", K: 9, V: { kind: "scalar", T: 9 } }, { no: 2, name: "platform_name", kind: "scalar", T: 9 }, { no: 3, name: "platform_username", kind: "scalar", T: 9 }, { no: 4, name: "version", kind: "scalar", T: 6 }];
    const tmp2 = new tmp("discord_protos.discord_kkv_store_value_models.v1.ApplicationUserRoleConnection", items, new.target);
    return tmp2;
  }
  create(arr) {
    const obj = { metadata: {}, platformName: "", platformUsername: "", version: "0" };
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
          let binaryReadMap1Result = self.binaryReadMap1(obj.metadata, pos, readUnknownField);
        } else if (2 === tmp5) {
          obj.platformName = pos.string();
        } else if (3 === tmp5) {
          obj.platformUsername = pos.string();
        } else if (4 === tmp5) {
          let str4 = pos.fixed64();
          obj.version = str4.toString();
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
  binaryReadMap1(arg0, pos) {
    let tmp2;
    let tmp3;
    let tmp6;
    const sum = pos.pos + pos.uint32();
    let str;
    let str2;
    if (pos.pos < sum) {
      while (true) {
        let stringResult1;
        let tmp5 = _slicedToArray(pos.tag(), 2);
        [tmp6, r10019] = tmp5;
        let stringResult = tmp3;
        if (1 === tmp6) {
          stringResult = pos.string();
          stringResult1 = tmp2;
        } else if (2 !== tmp6) {
          break;
        } else {
          stringResult1 = pos.string();
        }
        tmp2 = stringResult1;
        tmp3 = stringResult;
        str = stringResult1;
        str2 = stringResult;
      }
      const _globalThis = globalThis;
      const self = this;
      const self2 = this;
      const error = new Error("unknown map entry field for field discord_protos.discord_kkv_store_value_models.v1.ApplicationUserRoleConnection.metadata");
      throw error;
    }
    if (str2 == null) {
      str2 = "";
    }
    if (str == null) {
      str = "";
    }
    arg0[str2] = str;
  }
  internalBinaryWrite(metadata, tag, writeUnknownFields) {
    const keys = Object.keys(metadata.metadata);
    const iter = keys[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tagResult = tag.tag(1, _mod1198.WireType.LengthDelimited);
      let forkResult = tagResult.fork();
      let tagResult1 = forkResult.tag(1, _mod1198.WireType.LengthDelimited);
      let stringResult = tagResult1.string(nextResult);
      let tagResult2 = stringResult.tag(2, _mod1198.WireType.LengthDelimited);
      let stringResult1 = tagResult2.string(metadata.metadata[nextResult]);
      let joined = stringResult1.join();
      continue;
    }
    if ("" !== metadata.platformName) {
      const tagResult3 = tag.tag(2, _mod1198.WireType.LengthDelimited);
      tagResult3.string(metadata.platformName);
    }
    if ("" !== metadata.platformUsername) {
      const tagResult4 = tag.tag(3, _mod1198.WireType.LengthDelimited);
      tagResult4.string(metadata.platformUsername);
    }
    if ("0" !== metadata.version) {
      const tagResult5 = tag.tag(4, _mod1198.WireType.Bit64);
      tagResult5.fixed64(metadata.version);
    }
    let onWrite = writeUnknownFields.writeUnknownFields;
    if (false !== onWrite) {
      if (1 == onWrite) {
        onWrite = _mod1198.UnknownFieldHandler.onWrite;
      }
      const self = this;
      onWrite(this.typeName, metadata, tag);
    }
    return tag;
  }
}
const prototype = ApplicationUserRoleConnection$Type.prototype;
let items = [{ no: 1, name: "metadata", kind: "map", K: 9, V: { kind: "scalar", T: 9 } }, { no: 2, name: "platform_name", kind: "scalar", T: 9 }, { no: 3, name: "platform_username", kind: "scalar", T: 9 }, { no: 4, name: "version", kind: "scalar", T: 6 }];
const tmp6 = new "binaryReadMap1"("discord_protos.discord_kkv_store_value_models.v1.ApplicationUserRoleConnection", items, tmp4, tmp3, "create", "internalBinaryRead", tmp2, "internalBinaryWrite", tmp, ApplicationUserRoleConnection$Type);
const MessageType2 = _mod1198.MessageType;
class AcknowledgedApplicationDisclosure$Type extends MessageType2 {
  constructor() {
    let items = [, ];
    const obj = { no: 1, name: "disclosure_type", kind: "enum", T };
    items[0] = obj;
    items[1] = { no: 2, name: "acked_at", kind: "message", T: T2 };
    const tmp2 = new tmp("discord_protos.discord_kkv_store_value_models.v1.AcknowledgedApplicationDisclosure", items, new.target);
    return tmp2;
  }
  create(arr) {
    const obj = { disclosureType: 0 };
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
          obj.disclosureType = pos.int32();
        } else if (2 === tmp5) {
          let Timestamp = timestamp.Timestamp;
          obj.ackedAt = Timestamp.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.ackedAt);
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
  internalBinaryWrite(disclosureType, tag, writeUnknownFields) {
    if (0 !== disclosureType.disclosureType) {
      const tagResult = tag.tag(1, _mod1198.WireType.Varint);
      tagResult.int32(disclosureType.disclosureType);
    }
    if (disclosureType.ackedAt) {
      const Timestamp = timestamp.Timestamp;
      internalBinaryWrite = Timestamp.internalBinaryWrite;
      const ackedAt = disclosureType.ackedAt;
      const tagResult1 = tag.tag(2, _mod1198.WireType.LengthDelimited);
      const internalBinaryWriteResult = internalBinaryWrite(ackedAt, tagResult1.fork(), writeUnknownFields);
      const joined = internalBinaryWriteResult.join();
    }
    let onWrite = writeUnknownFields.writeUnknownFields;
    if (false !== onWrite) {
      if (1 == onWrite) {
        onWrite = _mod1198.UnknownFieldHandler.onWrite;
      }
      const self = this;
      onWrite(this.typeName, disclosureType, tag);
    }
    return tag;
  }
}
const prototype2 = AcknowledgedApplicationDisclosure$Type.prototype;
let obj2 = { no: 1, name: "disclosure_type", kind: "enum", T };
const items1 = [obj2, { no: 2, name: "acked_at", kind: "message", T: T2 }];
let tmp22 = new tmp2("discord_protos.discord_kkv_store_value_models.v1.AcknowledgedApplicationDisclosure", items1, tmp4, AcknowledgedApplicationDisclosure$Type, "create", "internalBinaryRead", tmp2, "internalBinaryWrite", items1, undefined, require, dependencyMap, ApplicationDisclosureType, this, tmp6, this);
const React3 = tmp22;
const MessageType3 = _mod1198.MessageType;
class AcknowledgedApplicationDisclosures$Type extends MessageType3 {
  constructor() {
    const items = [];
    const obj = { no: 1, name: "acked_disclosures", kind: "message", repeat: 1, T: T3 };
    items[0] = obj;
    const tmp2 = new tmp("discord_protos.discord_kkv_store_value_models.v1.AcknowledgedApplicationDisclosures", items, new.target);
    return tmp2;
  }
  create(arr) {
    const obj = { ackedDisclosures: [] };
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
          let ackedDisclosures = obj.ackedDisclosures;
          let arr = ackedDisclosures.push(closure_4.internalBinaryRead(pos, pos.uint32(), readUnknownField));
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
  internalBinaryWrite(ackedDisclosures, tag, writeUnknownFields) {
    let length;
    let num = 0;
    if (0 < ackedDisclosures.ackedDisclosures.length) {
      do {
        internalBinaryWrite = closure_4.internalBinaryWrite;
        let tmp2 = ackedDisclosures.ackedDisclosures[num];
        let tagResult = tag.tag(1, _mod1198.WireType.LengthDelimited);
        let internalBinaryWriteResult = internalBinaryWrite(tmp2, tagResult.fork(), writeUnknownFields);
        let joined = internalBinaryWriteResult.join();
        num = num + 1;
        length = ackedDisclosures.ackedDisclosures.length;
      } while (num < length);
    }
    let onWrite = writeUnknownFields.writeUnknownFields;
    if (false !== onWrite) {
      if (1 == onWrite) {
        onWrite = _mod1198.UnknownFieldHandler.onWrite;
      }
      const self = this;
      onWrite(this.typeName, ackedDisclosures, tag);
    }
    return tag;
  }
}
const prototype3 = AcknowledgedApplicationDisclosures$Type.prototype;
const items2 = [];
const obj3 = { no: 1, name: "acked_disclosures", kind: "message", repeat: 1, T: T3 };
items2[0] = obj3;
const tmp8 = new "internalBinaryWrite"("discord_protos.discord_kkv_store_value_models.v1.AcknowledgedApplicationDisclosures", items2, tmp4, AcknowledgedApplicationDisclosure$Type, "create", "internalBinaryRead", AcknowledgedApplicationDisclosures$Type, "internalBinaryWrite", items2, undefined, require, dependencyMap, ApplicationDisclosureType);
let result = size.fileFinishedImporting("../discord_common/js/packages/protos/discord_protos/discord_kkv_store_value_models/v1/applications.tsx");

export { ApplicationDisclosureType };
export const ApplicationUserRoleConnection = tmp6;
export const AcknowledgedApplicationDisclosure = tmp22;
export const AcknowledgedApplicationDisclosures = tmp8;