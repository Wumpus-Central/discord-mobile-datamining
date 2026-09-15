// === Module 1215: user_settings_shared ===

// Module 1215 (user_settings_shared)
import _mod1187 from "module_1187" /* 1187 */;
import _slicedToArray from "module_32" /* 32 */;

require = fn;
const MessageType = fn(1187).MessageType;
class Versions$Type extends MessageType {
  constructor() {
    items = [, , ];
    items[0] = { no: 1, name: "client_version", kind: "scalar", T: 13 };
    items[1] = { no: 2, name: "server_version", kind: "scalar", T: 13 };
    items[2] = { no: 3, name: "data_version", kind: "scalar", T: 13 };
    tmp1 = new tmp("discord_protos.discord_users.v1.Versions", items, new.target);
    return tmp1;
  }
}
const prototype = Versions$Type.prototype;
prototype["create"] = function create(arr) {
  const obj = { clientVersion: 0, serverVersion: 0, dataVersion: 0 };
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
prototype["internalBinaryWrite"] = function internalBinaryWrite(clientVersion, tag, writeUnknownFields) {
  if (0 !== clientVersion.clientVersion) {
    tag.tag(1, _mod1187.WireType.Varint).uint32(clientVersion.clientVersion);
    const tagResult = tag.tag(1, _mod1187.WireType.Varint);
  }
  if (0 !== clientVersion.serverVersion) {
    tag.tag(2, _mod1187.WireType.Varint).uint32(clientVersion.serverVersion);
    const tagResult1 = tag.tag(2, _mod1187.WireType.Varint);
  }
  if (0 !== clientVersion.dataVersion) {
    tag.tag(3, _mod1187.WireType.Varint).uint32(clientVersion.dataVersion);
    const tagResult2 = tag.tag(3, _mod1187.WireType.Varint);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = _mod1187.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, clientVersion, tag);
  }
  return tag;
};
let items = [{ no: 1, name: "client_version", kind: "scalar", T: 13 }, { no: 2, name: "server_version", kind: "scalar", T: 13 }, { no: 3, name: "data_version", kind: "scalar", T: 13 }];
const prototype1 = new prototype("discord_protos.discord_users.v1.Versions", items, tmp, Versions$Type, prototype, items, fn);
const size = fn(2);
let result = size.fileFinishedImporting("../discord_common/js/packages/protos/discord_protos/discord_users/v1/user_settings_shared.tsx");

export const Versions = prototype1;