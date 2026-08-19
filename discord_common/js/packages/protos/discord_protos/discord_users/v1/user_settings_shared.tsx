// discord_common/js/packages/protos/discord_protos/discord_users/v1/user_settings_shared.tsx
import _mod1307 from "../../../../../../../_runtime/metro/01307__.js";
import _slicedToArray from "../../../../../../../_runtime/metro/00032__slicedToArray.js";
import { MessageType } from "../../../../../../../_runtime/metro/01307__.js";

require = fn;
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
  const _Object = Object;
  const obj = { enumerable: false, value: this };
  _Object.defineProperty(obj, _mod1307.MESSAGE_TYPE, obj);
  if (undefined !== arr) {
    const result = _mod1307.reflectionMergePartial(this, obj, arr);
    const tmpResult = _mod1307;
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
          let _globalThis = globalThis;
          let _HermesInternal = HermesInternal;
          error = new Error("Unknown field " + tmp5 + " (wire type " + tmp6 + ") for " + self.typeName);
          throw error;
        } else {
          let skipResult = pos.skip(tmp6);
          if (false !== onRead) {
            if (true === onRead) {
              onRead = _mod1307.UnknownFieldHandler.onRead;
            }
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
    tag.tag(1, _mod1307.WireType.Varint).uint32(clientVersion.clientVersion);
    const tagResult = tag.tag(1, _mod1307.WireType.Varint);
  }
  if (0 !== clientVersion.serverVersion) {
    tag.tag(2, _mod1307.WireType.Varint).uint32(clientVersion.serverVersion);
    const tagResult1 = tag.tag(2, _mod1307.WireType.Varint);
  }
  if (0 !== clientVersion.dataVersion) {
    tag.tag(3, _mod1307.WireType.Varint).uint32(clientVersion.dataVersion);
    const tagResult2 = tag.tag(3, _mod1307.WireType.Varint);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = _mod1307.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, clientVersion, tag);
  }
  return tag;
};
let items = [{ no: 1, name: "client_version", kind: "scalar", T: 13 }, { no: 2, name: "server_version", kind: "scalar", T: 13 }, { no: 3, name: "data_version", kind: "scalar", T: 13 }];
prototype = new prototype("discord_protos.discord_users.v1.Versions", items, tmp, Versions$Type, prototype, items, fn);
// ThrowIfThisInitialized (0x7c)
let result = require("obj132").fileFinishedImporting("../discord_common/js/packages/protos/discord_protos/discord_users/v1/user_settings_shared.tsx");

export const Versions = prototype;