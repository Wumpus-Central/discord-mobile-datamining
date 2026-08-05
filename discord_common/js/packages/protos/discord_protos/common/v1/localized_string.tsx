// discord_common/js/packages/protos/discord_protos/common/v1/localized_string.tsx
import _slicedToArray from "_slicedToArray";
import { MessageType } from "module_1307";
import { MessageType as MessageType2 } from "module_1307";
import { 01307__ } from "../../../../../../../_runtime/metro/01307__.js";

const require = arg1;
class LocalizedString$Type extends MessageType {
  constructor() {
    items = [, ];
    items[0] = { no: 1, name: "default", kind: "scalar", T: 9 };
    items[1] = { no: 2, name: "localizations", kind: "map", K: 9, V: { kind: "scalar", T: 9 } };
    tmp = new tmp("discord_protos.common.v1.LocalizedString", items, new.target);
    // ThrowIfThisInitialized (0x7c)
    return tmp;
  }
}
const prototype = LocalizedString$Type.prototype;
prototype["create"] = function create(arr) {
  let obj = { default: "", localizations: {} };
  const _Object = Object;
  obj = { enumerable: false, value: this };
  _Object.defineProperty(obj, 01307__.MESSAGE_TYPE, obj);
  if (undefined !== arr) {
    const result = 01307__.reflectionMergePartial(this, obj, arr);
    const tmpResult = 01307__;
  }
  return obj;
};
prototype["internalBinaryRead"] = function internalBinaryRead(pos, arg1, readUnknownField) {
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
      let tmp3 = callback;
      let tmp4 = callback(pos.tag(), 2);
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
          let tmp16 = tmp5;
          let tmp17 = tmp6;
          let tmp18 = new.target;
          let tmp19 = new.target;
          let error = new Error("Unknown field " + tmp5 + " (wire type " + tmp6 + ") for " + self.typeName);
          let tmp21 = error;
          throw error;
        } else {
          let skipResult = pos.skip(tmp6);
          if (false !== onRead) {
            if (true === onRead) {
              let tmp8 = require;
              let tmp9 = dependencyMap;
              onRead = 01307__.UnknownFieldHandler.onRead;
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
prototype["binaryReadMap2"] = function binaryReadMap2(arg0, pos) {
  let tmp6;
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
    const error = new Error("unknown map entry field for field discord_protos.common.v1.LocalizedString.localizations");
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
prototype["internalBinaryWrite"] = function internalBinaryWrite(localizations, tag, writeUnknownFields) {
  if ("" !== localizations.default) {
    tag.tag(1, 01307__.WireType.LengthDelimited).string(localizations.default);
    const tagResult = tag.tag(1, 01307__.WireType.LengthDelimited);
  }
  const keys = Object.keys(localizations.localizations);
  const iter = keys[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp6 = require;
    let tmp7 = dependencyMap;
    let tagResult1 = tag.tag(2, 01307__.WireType.LengthDelimited);
    let forkResult = tagResult1.fork();
    let tagResult2 = forkResult.tag(1, 01307__.WireType.LengthDelimited);
    let stringResult1 = tagResult2.string(nextResult);
    let tagResult3 = stringResult1.tag(2, 01307__.WireType.LengthDelimited);
    let stringResult2 = tagResult3.string(localizations.localizations[nextResult]);
    let joined = stringResult2.join();
    continue;
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = 01307__.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, localizations, tag);
  }
  return tag;
};
let items = [{ no: 1, name: "default", kind: "scalar", T: 9 }, { no: 2, name: "localizations", kind: "map", K: 9, V: { kind: "scalar", T: 9 } }];
const object = new Object("discord_protos.common.v1.LocalizedString", items, tmp2, "create", "internalBinaryRead", "binaryReadMap2", tmp, "internalBinaryWrite");
// ThrowIfThisInitialized (0x7c)
class LocalizedSnowflake$Type extends MessageType2 {
  constructor() {
    items = [, ];
    items[0] = { no: 1, name: "default", kind: "scalar", T: 6 };
    items[1] = { no: 2, name: "localizations", kind: "map", K: 9, V: { kind: "scalar", T: 6 } };
    tmp = new tmp("discord_protos.common.v1.LocalizedSnowflake", items, new.target);
    // ThrowIfThisInitialized (0x7c)
    return tmp;
  }
}
const prototype2 = LocalizedSnowflake$Type.prototype;
prototype2["create"] = function create(arr) {
  let obj = { default: "0", localizations: {} };
  const _Object = Object;
  obj = { enumerable: false, value: this };
  _Object.defineProperty(obj, 01307__.MESSAGE_TYPE, obj);
  if (undefined !== arr) {
    const result = 01307__.reflectionMergePartial(this, obj, arr);
    const tmpResult = 01307__;
  }
  return obj;
};
prototype2["internalBinaryRead"] = function internalBinaryRead(pos, arg1, readUnknownField) {
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
      let tmp3 = callback;
      let tmp4 = callback(pos.tag(), 2);
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
          let tmp16 = tmp5;
          let tmp17 = tmp6;
          let tmp18 = new.target;
          let tmp19 = new.target;
          let error = new Error("Unknown field " + tmp5 + " (wire type " + tmp6 + ") for " + self.typeName);
          let tmp21 = error;
          throw error;
        } else {
          let skipResult = pos.skip(tmp6);
          if (false !== onRead) {
            if (true === onRead) {
              let tmp8 = require;
              let tmp9 = dependencyMap;
              onRead = 01307__.UnknownFieldHandler.onRead;
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
prototype2["binaryReadMap2"] = function binaryReadMap2(arg0, pos) {
  let tmp6;
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
        str = tmp2;
      } else if (2 !== tmp6) {
        break;
      } else {
        let str4 = pos.fixed64();
        str = str4.toString();
      }
      tmp2 = str;
      tmp3 = stringResult;
      str2 = stringResult;
    }
    const _globalThis = globalThis;
    const error = new Error("unknown map entry field for field discord_protos.common.v1.LocalizedSnowflake.localizations");
    throw error;
  }
  if (str2 == null) {
    str2 = "";
  }
  if (str == null) {
    str = "0";
  }
  arg0[str2] = str;
};
prototype2["internalBinaryWrite"] = function internalBinaryWrite(localizations, tag, writeUnknownFields) {
  if ("0" !== localizations.default) {
    tag.tag(1, 01307__.WireType.Bit64).fixed64(localizations.default);
    const tagResult = tag.tag(1, 01307__.WireType.Bit64);
  }
  const keys = Object.keys(localizations.localizations);
  const iter = keys[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp6 = require;
    let tmp7 = dependencyMap;
    let tagResult1 = tag.tag(2, 01307__.WireType.LengthDelimited);
    let forkResult = tagResult1.fork();
    let tagResult2 = forkResult.tag(1, 01307__.WireType.LengthDelimited);
    let stringResult = tagResult2.string(nextResult);
    let tagResult3 = stringResult.tag(2, 01307__.WireType.Bit64);
    let fixed64Result1 = tagResult3.fixed64(localizations.localizations[nextResult]);
    let joined = fixed64Result1.join();
    continue;
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = 01307__.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, localizations, tag);
  }
  return tag;
};
const items1 = [{ no: 1, name: "default", kind: "scalar", T: 6 }, { no: 2, name: "localizations", kind: "map", K: 9, V: { kind: "scalar", T: 6 } }];
// ThrowIfThisInitialized (0x7c)
let tmp5 = new "internalBinaryWrite"("discord_protos.common.v1.LocalizedSnowflake", items1, tmp2, "create", "internalBinaryRead", "binaryReadMap2", LocalizedSnowflake$Type, "internalBinaryWrite", items1, undefined);
let result = require("set").fileFinishedImporting("../discord_common/js/packages/protos/discord_protos/common/v1/localized_string.tsx");

export const LocalizedString = object;
export const LocalizedSnowflake = tmp5;