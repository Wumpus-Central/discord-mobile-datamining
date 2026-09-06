// discord_common/js/packages/protos/discord_protos/discord_kkv_store_value_models/v1/applications.tsx
import _mod1188 from "../../../../../../../_runtime/metro/01188__.js";
import timestamp from "../../../google/protobuf/timestamp.tsx";
import _slicedToArray from "../../../../../../../_runtime/metro/00032__.js";

require = fn;
let ApplicationDisclosureType = {
  UNSPECIFIED_DISCLOSURE: 0,
  [0]: "UNSPECIFIED_DISCLOSURE",
  IP_LOCATION: 1,
  [1]: "IP_LOCATION",
  DISPLAYS_ADVERTISEMENTS: 2,
  [2]: "DISPLAYS_ADVERTISEMENTS",
  PARTNER_SDK_DATA_SHARING_MESSAGE: 3,
  [3]: "PARTNER_SDK_DATA_SHARING_MESSAGE",
};
const MessageType = fn(1188).MessageType;
class ApplicationUserRoleConnection$Type extends MessageType {
  constructor() {
    items = [, , ,];
    items[0] = { no: 1, name: "metadata", kind: "map", K: 9, V: { kind: "scalar", T: 9 } };
    items[1] = { no: 2, name: "platform_name", kind: "scalar", T: 9 };
    items[2] = { no: 3, name: "platform_username", kind: "scalar", T: 9 };
    items[3] = { no: 4, name: "version", kind: "scalar", T: 6 };
    tmp = new tmp("discord_protos.discord_kkv_store_value_models.v1.ApplicationUserRoleConnection", items, new.target);
    return tmp;
  }
}
const prototype = ApplicationUserRoleConnection$Type.prototype;
prototype["create"] = function create(arr) {
  let obj = { metadata: {}, platformName: "", platformUsername: "", version: "0" };
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
prototype["binaryReadMap1"] = function binaryReadMap1(arg0, pos) {
  const sum = pos.pos + pos.uint32();
  let str;
  let str2;
  if (pos.pos < sum) {
    while (true) {
      let tmp5 = _slicedToArray(pos.tag(), 2);
      [tmp6, r10019] = tmp5;
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
    const error = new Error(
      "unknown map entry field for field discord_protos.discord_kkv_store_value_models.v1.ApplicationUserRoleConnection.metadata",
    );
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
    let tagResult = tag.tag(1, _mod1188.WireType.LengthDelimited);
    let forkResult = tagResult.fork();
    let tagResult1 = forkResult.tag(1, _mod1188.WireType.LengthDelimited);
    let stringResult = tagResult1.string(nextResult);
    let tagResult2 = stringResult.tag(2, _mod1188.WireType.LengthDelimited);
    let stringResult1 = tagResult2.string(metadata.metadata[nextResult]);
    let joined = stringResult1.join();
    continue;
  }
  if ("" !== metadata.platformName) {
    tag.tag(2, _mod1188.WireType.LengthDelimited).string(metadata.platformName);
    const tagResult3 = tag.tag(2, _mod1188.WireType.LengthDelimited);
  }
  if ("" !== metadata.platformUsername) {
    tag.tag(3, _mod1188.WireType.LengthDelimited).string(metadata.platformUsername);
    const tagResult4 = tag.tag(3, _mod1188.WireType.LengthDelimited);
  }
  if ("0" !== metadata.version) {
    tag.tag(4, _mod1188.WireType.Bit64).fixed64(metadata.version);
    const tagResult5 = tag.tag(4, _mod1188.WireType.Bit64);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = _mod1188.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, metadata, tag);
  }
  return tag;
};
let items = [
  { no: 1, name: "metadata", kind: "map", K: 9, V: { kind: "scalar", T: 9 } },
  { no: 2, name: "platform_name", kind: "scalar", T: 9 },
  { no: 3, name: "platform_username", kind: "scalar", T: 9 },
  { no: 4, name: "version", kind: "scalar", T: 6 },
];
const tmp6 = new "binaryReadMap1"(
  "discord_protos.discord_kkv_store_value_models.v1.ApplicationUserRoleConnection",
  items,
  tmp4,
  tmp3,
  "create",
  "internalBinaryRead",
  tmp2,
  "internalBinaryWrite",
  tmp,
  ApplicationUserRoleConnection$Type,
);
const MessageType2 = fn(1188).MessageType;
class AcknowledgedApplicationDisclosure$Type extends MessageType2 {
  constructor() {
    obj = {
      no: 1,
      name: "disclosure_type",
      kind: "enum",
      T() {
        const items = [
          "discord_protos.discord_kkv_store_value_models.v1.ApplicationDisclosureType",
          ApplicationDisclosureType,
        ];
        return items;
      },
    };
    items = [,];
    items[0] = obj;
    items[1] = {
      no: 2,
      name: "acked_at",
      kind: "message",
      T() {
        return timestamp.Timestamp;
      },
    };
    tmp = new tmp(
      "discord_protos.discord_kkv_store_value_models.v1.AcknowledgedApplicationDisclosure",
      items,
      new.target,
    );
    return tmp;
  }
}
const prototype2 = AcknowledgedApplicationDisclosure$Type.prototype;
prototype2["create"] = function create(arr) {
  let obj = { disclosureType: 0 };
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
prototype2["internalBinaryWrite"] = function internalBinaryWrite(disclosureType, tag, writeUnknownFields) {
  if (0 !== disclosureType.disclosureType) {
    tag.tag(1, _mod1188.WireType.Varint).int32(disclosureType.disclosureType);
    const tagResult = tag.tag(1, _mod1188.WireType.Varint);
  }
  if (disclosureType.ackedAt) {
    const Timestamp = timestamp.Timestamp;
    const tagResult1 = tag.tag(2, _mod1188.WireType.LengthDelimited);
    const joined = Timestamp.internalBinaryWrite(
      disclosureType.ackedAt,
      tag.tag(2, _mod1188.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    ).join();
    const internalBinaryWriteResult = Timestamp.internalBinaryWrite(
      disclosureType.ackedAt,
      tag.tag(2, _mod1188.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    );
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = _mod1188.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, disclosureType, tag);
  }
  return tag;
};
ApplicationDisclosureType = {
  no: 1,
  name: "disclosure_type",
  kind: "enum",
  T() {
    const items = [
      "discord_protos.discord_kkv_store_value_models.v1.ApplicationDisclosureType",
      ApplicationDisclosureType,
    ];
    return items;
  },
};
const items1 = [
  ApplicationDisclosureType,
  {
    no: 2,
    name: "acked_at",
    kind: "message",
    T() {
      return timestamp.Timestamp;
    },
  },
];
tmp2 = new tmp2(
  "discord_protos.discord_kkv_store_value_models.v1.AcknowledgedApplicationDisclosure",
  items1,
  tmp4,
  AcknowledgedApplicationDisclosure$Type,
  "create",
  "internalBinaryRead",
  tmp2,
  "internalBinaryWrite",
  items1,
  undefined,
  fn,
  dependencyMap,
  ApplicationDisclosureType,
  new.target,
  tmp6,
  new.target,
);
let closure_4 = tmp2;
const MessageType3 = fn(1188).MessageType;
class AcknowledgedApplicationDisclosures$Type extends MessageType3 {
  constructor() {
    obj = {
      no: 1,
      name: "acked_disclosures",
      kind: "message",
      repeat: 1,
      T() {
        return closure_1_4;
      },
    };
    items = [];
    items[0] = obj;
    tmp = new tmp(
      "discord_protos.discord_kkv_store_value_models.v1.AcknowledgedApplicationDisclosures",
      items,
      new.target,
    );
    return tmp;
  }
}
const prototype3 = AcknowledgedApplicationDisclosures$Type.prototype;
prototype3["create"] = function create(arr) {
  let obj = { ackedDisclosures: [] };
  const _Object = Object;
  obj = { enumerable: false, value: this };
  _Object.defineProperty(obj, _mod1188.MESSAGE_TYPE, obj);
  if (undefined !== arr) {
    const result = _mod1188.reflectionMergePartial(this, obj, arr);
    const tmpResult = _mod1188;
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
prototype3["internalBinaryWrite"] = function internalBinaryWrite(ackedDisclosures, tag, writeUnknownFields) {
  let length;
  let num = 0;
  if (0 < ackedDisclosures.ackedDisclosures.length) {
    do {
      let tagResult = tag.tag(1, _mod1188.WireType.LengthDelimited);
      let internalBinaryWriteResult = closure_4.internalBinaryWrite(
        ackedDisclosures.ackedDisclosures[num],
        tagResult.fork(),
        writeUnknownFields,
      );
      let joined = internalBinaryWriteResult.join();
      num = num + 1;
      length = ackedDisclosures.ackedDisclosures.length;
    } while (num < length);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = _mod1188.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, ackedDisclosures, tag);
  }
  return tag;
};
ApplicationDisclosureType = {
  no: 1,
  name: "acked_disclosures",
  kind: "message",
  repeat: 1,
  T() {
    return closure_1_4;
  },
};
const items2 = [ApplicationDisclosureType];
const size = fn(2);
let result = size.fileFinishedImporting(
  "../discord_common/js/packages/protos/discord_protos/discord_kkv_store_value_models/v1/applications.tsx",
);

export { ApplicationDisclosureType };
export const ApplicationUserRoleConnection = tmp6;
export const AcknowledgedApplicationDisclosure = tmp2;
export const AcknowledgedApplicationDisclosures = new "internalBinaryWrite"(
  "discord_protos.discord_kkv_store_value_models.v1.AcknowledgedApplicationDisclosures",
  items2,
  tmp4,
  AcknowledgedApplicationDisclosure$Type,
  "create",
  "internalBinaryRead",
  AcknowledgedApplicationDisclosures$Type,
  "internalBinaryWrite",
  items2,
  undefined,
  fn,
  dependencyMap,
  ApplicationDisclosureType,
);
