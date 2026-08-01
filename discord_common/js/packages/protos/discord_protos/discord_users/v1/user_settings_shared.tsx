// === Module 1335: create ===

// Module 1335 (create)
import _slicedToArray from "_slicedToArray";
import { MessageType } from "module_1307";

const require = arg1;
class Versions$Type extends MessageType {
  constructor() {
    items = [, , ];
    items[0] = { no: 1, name: "client_version", kind: "scalar", T: 13 };
    items[1] = { no: 2, name: "server_version", kind: "scalar", T: 13 };
    items[2] = { no: 3, name: "data_version", kind: "scalar", T: 13 };
    tmp = new tmp("discord_protos.discord_users.v1.Versions", items, new.target);
    // ThrowIfThisInitialized (0x7c)
    return tmp;
  }
}
let prototype = Versions$Type.prototype;
prototype["create"] = function create(arr) {
  let obj = { clientVersion: 0, serverVersion: 0, dataVersion: 0 };
  const _Object = Object;
  obj = { enumerable: false, value: this };
  _Object.defineProperty(obj, require(1307).MESSAGE_TYPE, obj);
  if (undefined !== arr) {
    const result = require(1307).reflectionMergePartial(this, obj, arr);
    const tmpResult = require(1307);
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
        obj.clientVersion = pos.uint32();
      } else if (2 === tmp5) {
        obj.serverVersion = pos.uint32();
      } else if (3 === tmp5) {
        obj.dataVersion = pos.uint32();
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
              onRead = require(1307).UnknownFieldHandler.onRead;
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
prototype["internalBinaryWrite"] = function internalBinaryWrite(clientVersion, tag, writeUnknownFields) {
  if (0 !== clientVersion.clientVersion) {
    tag.tag(1, require(1307).WireType.Varint).uint32(clientVersion.clientVersion);
    const tagResult = tag.tag(1, require(1307).WireType.Varint);
  }
  if (0 !== clientVersion.serverVersion) {
    tag.tag(2, require(1307).WireType.Varint).uint32(clientVersion.serverVersion);
    const tagResult1 = tag.tag(2, require(1307).WireType.Varint);
  }
  if (0 !== clientVersion.dataVersion) {
    tag.tag(3, require(1307).WireType.Varint).uint32(clientVersion.dataVersion);
    const tagResult2 = tag.tag(3, require(1307).WireType.Varint);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = require(1307).UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, clientVersion, tag);
  }
  return tag;
};
let items = [{ no: 1, name: "client_version", kind: "scalar", T: 13 }, { no: 2, name: "server_version", kind: "scalar", T: 13 }, { no: 3, name: "data_version", kind: "scalar", T: 13 }];
prototype = new prototype("discord_protos.discord_users.v1.Versions", items, tmp, Versions$Type, prototype, items, arg1);
// ThrowIfThisInitialized (0x7c)
let result = require("set").fileFinishedImporting("../discord_common/js/packages/protos/discord_protos/discord_users/v1/user_settings_shared.tsx");

export const Versions = prototype;