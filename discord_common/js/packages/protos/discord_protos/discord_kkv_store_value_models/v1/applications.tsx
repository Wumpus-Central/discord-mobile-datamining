// === Module 9769: create ===

// Module 9769 (create)
import _mod1307 from "module_1307" /* 1307 */;
import now from "now" /* 1336 */;
import closure_2 from "_slicedToArray" /* 32 */;
import { MessageType, MessageType as MessageType2, MessageType as MessageType3 } from "module_1307" /* 1307 */;

require = arg1;
let obj = { UNSPECIFIED_DISCLOSURE: 0, [0]: "UNSPECIFIED_DISCLOSURE", IP_LOCATION: 1, [1]: "IP_LOCATION", DISPLAYS_ADVERTISEMENTS: 2, [2]: "DISPLAYS_ADVERTISEMENTS", PARTNER_SDK_DATA_SHARING_MESSAGE: 3, [3]: "PARTNER_SDK_DATA_SHARING_MESSAGE" };
class ApplicationUserRoleConnection$Type extends MessageType {
  constructor() {
    items = [, , , ];
    items[0] = { no: 1, name: "metadata", kind: "map", K: 9, V: { kind: "scalar", T: 9 } };
    items[1] = { no: 2, name: "platform_name", kind: "scalar", T: 9 };
    items[2] = { no: 3, name: "platform_username", kind: "scalar", T: 9 };
    items[3] = { no: 4, name: "version", kind: "scalar", T: 6 };
    tmp = new tmp("discord_protos.discord_kkv_store_value_models.v1.ApplicationUserRoleConnection", items, new.target);
    // ThrowIfThisInitialized (0x7c)
    return tmp;
  }
}
const prototype = ApplicationUserRoleConnection$Type.prototype;
prototype["create"] = function create(arr) {
  obj = { metadata: {}, platformName: "", platformUsername: "", version: "0" };
  const _Object = Object;
  obj = { enumerable: false, value: this };
  _Object.defineProperty(obj, _mod1307.MESSAGE_TYPE, obj);
  if (undefined !== arr) {
    const result = _mod1307.reflectionMergePartial(this, obj, arr);
    const tmpResult = _mod1307;
  }
  return obj;
};
prototype["internalBinaryRead"] = function internalBinaryRead(pos, arg1, readUnknownField) {
  const self = this;
  obj = arg3;
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
              onRead = _mod1307.UnknownFieldHandler.onRead;
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
prototype["binaryReadMap1"] = function binaryReadMap1(arg0, pos) {
  const sum = pos.pos + pos.uint32();
  let str;
  let str2;
  if (pos.pos < sum) {
    while (true) {
      let tmp4 = callback;
      let tmp5 = callback(pos.tag(), 2);
      [tmp6, r10019] = tmp5;
      let tmp7 = tmp2;
      let stringResult = tmp3;
      if (1 === tmp6) {
        stringResult = pos.string();
        let stringResult1 = tmp2;
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
    error = new Error("unknown map entry field for field discord_protos.discord_kkv_store_value_models.v1.ApplicationUserRoleConnection.metadata");
    throw error;
  }
  if (str2 == null) {
    str2 = "";
  }
  if (str == null) {
    str = "";
  }
  arg0[str2] = str;
};
prototype["internalBinaryWrite"] = function internalBinaryWrite(metadata, tag, writeUnknownFields) {
  const keys = Object.keys(metadata.metadata);
  const iter = keys[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp3 = require;
    let tmp4 = dependencyMap;
    let tagResult = tag.tag(1, _mod1307.WireType.LengthDelimited);
    let forkResult = tagResult.fork();
    let tagResult1 = forkResult.tag(1, _mod1307.WireType.LengthDelimited);
    let stringResult = tagResult1.string(nextResult);
    let tagResult2 = stringResult.tag(2, _mod1307.WireType.LengthDelimited);
    let stringResult1 = tagResult2.string(metadata.metadata[nextResult]);
    let joined = stringResult1.join();
    continue;
  }
  if ("" !== metadata.platformName) {
    tag.tag(2, _mod1307.WireType.LengthDelimited).string(metadata.platformName);
    const tagResult3 = tag.tag(2, _mod1307.WireType.LengthDelimited);
  }
  if ("" !== metadata.platformUsername) {
    tag.tag(3, _mod1307.WireType.LengthDelimited).string(metadata.platformUsername);
    const tagResult4 = tag.tag(3, _mod1307.WireType.LengthDelimited);
  }
  if ("0" !== metadata.version) {
    tag.tag(4, _mod1307.WireType.Bit64).fixed64(metadata.version);
    const tagResult5 = tag.tag(4, _mod1307.WireType.Bit64);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = _mod1307.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, metadata, tag);
  }
  return tag;
};
let items = [{ no: 1, name: "metadata", kind: "map", K: 9, V: { kind: "scalar", T: 9 } }, { no: 2, name: "platform_name", kind: "scalar", T: 9 }, { no: 3, name: "platform_username", kind: "scalar", T: 9 }, { no: 4, name: "version", kind: "scalar", T: 6 }];
const tmp6 = new "binaryReadMap1"("discord_protos.discord_kkv_store_value_models.v1.ApplicationUserRoleConnection", items, tmp4, tmp3, "create", "internalBinaryRead", tmp2, "internalBinaryWrite", tmp, ApplicationUserRoleConnection$Type);
// ThrowIfThisInitialized (0x7c)
class AcknowledgedApplicationDisclosure$Type extends MessageType2 {
  constructor() {
    obj = {
      no: 1,
      name: "disclosure_type",
      kind: "enum",
      T() {
            const items = ["discord_protos.discord_kkv_store_value_models.v1.ApplicationDisclosureType", closure_3];
            return items;
          }
    };
    items = [, ];
    items[0] = obj;
    items[1] = {
      no: 2,
      name: "acked_at",
      kind: "message",
      T() {
            return callback(table[2]).Timestamp;
          }
    };
    tmp = new tmp("discord_protos.discord_kkv_store_value_models.v1.AcknowledgedApplicationDisclosure", items, new.target);
    // ThrowIfThisInitialized (0x7c)
    return tmp;
  }
}
const prototype2 = AcknowledgedApplicationDisclosure$Type.prototype;
prototype2["create"] = function create(arr) {
  obj = { disclosureType: 0 };
  const _Object = Object;
  obj = { enumerable: false, value: this };
  _Object.defineProperty(obj, _mod1307.MESSAGE_TYPE, obj);
  if (undefined !== arr) {
    const result = _mod1307.reflectionMergePartial(this, obj, arr);
    const tmpResult = _mod1307;
  }
  return obj;
};
prototype2["internalBinaryRead"] = function internalBinaryRead(pos, arg1, readUnknownField) {
  const self = this;
  obj = arg3;
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
        obj.disclosureType = pos.int32();
      } else if (2 === tmp5) {
        let tmp22 = require;
        let tmp23 = dependencyMap;
        let Timestamp = now.Timestamp;
        let tmp24 = Timestamp;
        let tmp25 = pos;
        let tmp26 = readUnknownField;
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
              onRead = _mod1307.UnknownFieldHandler.onRead;
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
prototype2["internalBinaryWrite"] = function internalBinaryWrite(disclosureType, tag, writeUnknownFields) {
  if (0 !== disclosureType.disclosureType) {
    tag.tag(1, _mod1307.WireType.Varint).int32(disclosureType.disclosureType);
    const tagResult = tag.tag(1, _mod1307.WireType.Varint);
  }
  if (disclosureType.ackedAt) {
    const Timestamp = now.Timestamp;
    const tagResult1 = tag.tag(2, _mod1307.WireType.LengthDelimited);
    const joined = Timestamp.internalBinaryWrite(disclosureType.ackedAt, tag.tag(2, _mod1307.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult = Timestamp.internalBinaryWrite(disclosureType.ackedAt, tag.tag(2, _mod1307.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = _mod1307.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, disclosureType, tag);
  }
  return tag;
};
obj = {
  no: 1,
  name: "disclosure_type",
  kind: "enum",
  T() {
    const items = ["discord_protos.discord_kkv_store_value_models.v1.ApplicationDisclosureType", closure_3];
    return items;
  }
};
const items1 = [
  obj,
  {
    no: 2,
    name: "acked_at",
    kind: "message",
    T() {
      return callback(table[2]).Timestamp;
    }
  }
];
tmp2 = new tmp2("discord_protos.discord_kkv_store_value_models.v1.AcknowledgedApplicationDisclosure", items1, tmp4, AcknowledgedApplicationDisclosure$Type, "create", "internalBinaryRead", tmp2, "internalBinaryWrite", items1, undefined, arg1, dependencyMap, obj, new.target, tmp6, new.target);
// ThrowIfThisInitialized (0x7c)
let closure_4 = tmp2;
class AcknowledgedApplicationDisclosures$Type extends MessageType3 {
  constructor() {
    obj = {
      no: 1,
      name: "acked_disclosures",
      kind: "message",
      repeat: 1,
      T() {
            return closure_4;
          }
    };
    items = [];
    items[0] = obj;
    tmp = new tmp("discord_protos.discord_kkv_store_value_models.v1.AcknowledgedApplicationDisclosures", items, new.target);
    // ThrowIfThisInitialized (0x7c)
    return tmp;
  }
}
const prototype3 = AcknowledgedApplicationDisclosures$Type.prototype;
prototype3["create"] = function create(arr) {
  obj = { ackedDisclosures: [] };
  const _Object = Object;
  obj = { enumerable: false, value: this };
  _Object.defineProperty(obj, _mod1307.MESSAGE_TYPE, obj);
  if (undefined !== arr) {
    const result = _mod1307.reflectionMergePartial(this, obj, arr);
    const tmpResult = _mod1307;
  }
  return obj;
};
prototype3["internalBinaryRead"] = function internalBinaryRead(pos, arg1, readUnknownField) {
  const self = this;
  obj = arg3;
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
        let ackedDisclosures = obj.ackedDisclosures;
        let tmp22 = closure_4;
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
              onRead = _mod1307.UnknownFieldHandler.onRead;
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
prototype3["internalBinaryWrite"] = function internalBinaryWrite(ackedDisclosures, tag, writeUnknownFields) {
  let length;
  let num = 0;
  if (0 < ackedDisclosures.ackedDisclosures.length) {
    do {
      let tmp = closure_4;
      let tmp2 = require;
      let tmp3 = dependencyMap;
      let tagResult = tag.tag(1, _mod1307.WireType.LengthDelimited);
      let internalBinaryWriteResult = closure_4.internalBinaryWrite(ackedDisclosures.ackedDisclosures[num], tagResult.fork(), writeUnknownFields);
      let joined = internalBinaryWriteResult.join();
      num = num + 1;
      length = ackedDisclosures.ackedDisclosures.length;
    } while (num < length);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = _mod1307.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, ackedDisclosures, tag);
  }
  return tag;
};
obj = {
  no: 1,
  name: "acked_disclosures",
  kind: "message",
  repeat: 1,
  T() {
    return closure_4;
  }
};
const items2 = [obj];
// ThrowIfThisInitialized (0x7c)
let tmp8 = new "internalBinaryWrite"("discord_protos.discord_kkv_store_value_models.v1.AcknowledgedApplicationDisclosures", items2, tmp4, AcknowledgedApplicationDisclosure$Type, "create", "internalBinaryRead", AcknowledgedApplicationDisclosures$Type, "internalBinaryWrite", items2, undefined, arg1, dependencyMap, obj);
let result = require("set").fileFinishedImporting("../discord_common/js/packages/protos/discord_protos/discord_kkv_store_value_models/v1/applications.tsx");

export const ApplicationDisclosureType = obj;
export const ApplicationUserRoleConnection = tmp6;
export const AcknowledgedApplicationDisclosure = tmp2;
export const AcknowledgedApplicationDisclosures = tmp8;