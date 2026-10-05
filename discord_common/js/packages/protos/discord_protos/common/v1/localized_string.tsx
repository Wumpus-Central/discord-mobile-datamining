// discord_common/js/packages/protos/discord_protos/common/v1/localized_string.tsx
import _mod1198 from "../../../../../../../_runtime/metro/01198__.js";
import _slicedToArray from "../../../../../../../_runtime/metro/00032__slicedToArray.js";
import size from "../../../../../../../_runtime/metro/00002__.js";

let tmp2;
const MessageType = _mod1198.MessageType;
class LocalizedString$Type extends MessageType {
  constructor() {
    const items = [
      { no: 1, name: "default", kind: "scalar", T: 9 },
      { no: 2, name: "localizations", kind: "map", K: 9, V: { kind: "scalar", T: 9 } },
    ];
    const tmp2 = new tmp("discord_protos.common.v1.LocalizedString", items, new.target);
    return tmp2;
  }
  create(arr) {
    const obj = { default: "", localizations: {} };
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
          obj.default = pos.string();
        } else if (2 === tmp5) {
          let binaryReadMap2Result = self.binaryReadMap2(obj.localizations, pos, readUnknownField);
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
  binaryReadMap2(arg0, pos) {
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
      const error = new Error(
        "unknown map entry field for field discord_protos.common.v1.LocalizedString.localizations",
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
  }
  internalBinaryWrite(localizations, tag, writeUnknownFields) {
    if ("" !== localizations.default) {
      const tagResult = tag.tag(1, _mod1198.WireType.LengthDelimited);
      tagResult.string(localizations.default);
    }
    const keys = Object.keys(localizations.localizations);
    const iter = keys[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tagResult1 = tag.tag(2, _mod1198.WireType.LengthDelimited);
      let forkResult = tagResult1.fork();
      let tagResult2 = forkResult.tag(1, _mod1198.WireType.LengthDelimited);
      let stringResult1 = tagResult2.string(nextResult);
      let tagResult3 = stringResult1.tag(2, _mod1198.WireType.LengthDelimited);
      let stringResult2 = tagResult3.string(localizations.localizations[nextResult]);
      let joined = stringResult2.join();
      continue;
    }
    let onWrite = writeUnknownFields.writeUnknownFields;
    if (false !== onWrite) {
      if (1 == onWrite) {
        onWrite = _mod1198.UnknownFieldHandler.onWrite;
      }
      const self = this;
      onWrite(this.typeName, localizations, tag);
    }
    return tag;
  }
}
const prototype = LocalizedString$Type.prototype;
let items = [
  { no: 1, name: "default", kind: "scalar", T: 9 },
  { no: 2, name: "localizations", kind: "map", K: 9, V: { kind: "scalar", T: 9 } },
];
const object = new Object(
  "discord_protos.common.v1.LocalizedString",
  items,
  tmp2,
  "create",
  "internalBinaryRead",
  "binaryReadMap2",
  tmp,
  "internalBinaryWrite",
);
const MessageType2 = _mod1198.MessageType;
class LocalizedSnowflake$Type extends MessageType2 {
  constructor() {
    const items = [
      { no: 1, name: "default", kind: "scalar", T: 6 },
      { no: 2, name: "localizations", kind: "map", K: 9, V: { kind: "scalar", T: 6 } },
    ];
    const tmp2 = new tmp("discord_protos.common.v1.LocalizedSnowflake", items, new.target);
    return tmp2;
  }
  create(arr) {
    const obj = { default: "0", localizations: {} };
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
          let str4 = pos.fixed64();
          obj.default = str4.toString();
        } else if (2 === tmp5) {
          let binaryReadMap2Result = self.binaryReadMap2(obj.localizations, pos, readUnknownField);
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
  binaryReadMap2(arg0, pos) {
    let tmp2;
    let tmp3;
    let tmp6;
    const sum = pos.pos + pos.uint32();
    let str;
    let str2;
    if (pos.pos < sum) {
      while (true) {
        let str1;
        let tmp5 = _slicedToArray(pos.tag(), 2);
        [tmp6, r10019] = tmp5;
        let stringResult = tmp3;
        if (1 === tmp6) {
          stringResult = pos.string();
          str1 = tmp2;
        } else if (2 !== tmp6) {
          break;
        } else {
          let str4 = pos.fixed64();
          str1 = str4.toString();
        }
        tmp2 = str1;
        tmp3 = stringResult;
        str = str1;
        str2 = stringResult;
      }
      const _globalThis = globalThis;
      const self = this;
      const self2 = this;
      const error = new Error(
        "unknown map entry field for field discord_protos.common.v1.LocalizedSnowflake.localizations",
      );
      throw error;
    }
    if (str2 == null) {
      str2 = "";
    }
    if (str == null) {
      str = "0";
    }
    arg0[str2] = str;
  }
  internalBinaryWrite(localizations, tag, writeUnknownFields) {
    if ("0" !== localizations.default) {
      const tagResult = tag.tag(1, _mod1198.WireType.Bit64);
      tagResult.fixed64(localizations.default);
    }
    const keys = Object.keys(localizations.localizations);
    const iter = keys[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tagResult1 = tag.tag(2, _mod1198.WireType.LengthDelimited);
      let forkResult = tagResult1.fork();
      let tagResult2 = forkResult.tag(1, _mod1198.WireType.LengthDelimited);
      let stringResult = tagResult2.string(nextResult);
      let tagResult3 = stringResult.tag(2, _mod1198.WireType.Bit64);
      let fixed64Result1 = tagResult3.fixed64(localizations.localizations[nextResult]);
      let joined = fixed64Result1.join();
      continue;
    }
    let onWrite = writeUnknownFields.writeUnknownFields;
    if (false !== onWrite) {
      if (1 == onWrite) {
        onWrite = _mod1198.UnknownFieldHandler.onWrite;
      }
      const self = this;
      onWrite(this.typeName, localizations, tag);
    }
    return tag;
  }
}
const prototype2 = LocalizedSnowflake$Type.prototype;
const items1 = [
  { no: 1, name: "default", kind: "scalar", T: 6 },
  { no: 2, name: "localizations", kind: "map", K: 9, V: { kind: "scalar", T: 6 } },
];
let tmp5 = new "internalBinaryWrite"(
  "discord_protos.common.v1.LocalizedSnowflake",
  items1,
  tmp2,
  "create",
  "internalBinaryRead",
  "binaryReadMap2",
  LocalizedSnowflake$Type,
  "internalBinaryWrite",
  items1,
  undefined,
);
let result = size.fileFinishedImporting(
  "../discord_common/js/packages/protos/discord_protos/common/v1/localized_string.tsx",
);

export const LocalizedString = object;
export const LocalizedSnowflake = tmp5;
