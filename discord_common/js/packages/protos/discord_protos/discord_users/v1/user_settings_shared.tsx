// discord_common/js/packages/protos/discord_protos/discord_users/v1/user_settings_shared.tsx
import _mod1198 from "../../../../../../../_runtime/metro/01198__.js";
import _slicedToArray from "../../../../../../../_runtime/metro/00032__slicedToArray.js";
import size from "../../../../../../../_runtime/metro/00002__.js";

const MessageType = _mod1198.MessageType;
class Versions$Type extends MessageType {
  constructor() {
    const items = [
      { no: 1, name: "client_version", kind: "scalar", T: 13 },
      { no: 2, name: "server_version", kind: "scalar", T: 13 },
      { no: 3, name: "data_version", kind: "scalar", T: 13 },
    ];
    const tmp2 = new tmp("discord_protos.discord_users.v1.Versions", items, new.target);
    return tmp2;
  }
  create(arr) {
    const obj = { clientVersion: 0, serverVersion: 0, dataVersion: 0 };
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
  internalBinaryWrite(clientVersion, tag, writeUnknownFields) {
    if (0 !== clientVersion.clientVersion) {
      const tagResult = tag.tag(1, _mod1198.WireType.Varint);
      tagResult.uint32(clientVersion.clientVersion);
    }
    if (0 !== clientVersion.serverVersion) {
      const tagResult1 = tag.tag(2, _mod1198.WireType.Varint);
      tagResult1.uint32(clientVersion.serverVersion);
    }
    if (0 !== clientVersion.dataVersion) {
      const tagResult2 = tag.tag(3, _mod1198.WireType.Varint);
      tagResult2.uint32(clientVersion.dataVersion);
    }
    let onWrite = writeUnknownFields.writeUnknownFields;
    if (false !== onWrite) {
      if (1 == onWrite) {
        onWrite = _mod1198.UnknownFieldHandler.onWrite;
      }
      const self = this;
      onWrite(this.typeName, clientVersion, tag);
    }
    return tag;
  }
}
const prototype = Versions$Type.prototype;
let items = [
  { no: 1, name: "client_version", kind: "scalar", T: 13 },
  { no: 2, name: "server_version", kind: "scalar", T: 13 },
  { no: 3, name: "data_version", kind: "scalar", T: 13 },
];
const prototype1 = new prototype(
  "discord_protos.discord_users.v1.Versions",
  items,
  tmp,
  Versions$Type,
  prototype,
  items,
  require,
);
let result = size.fileFinishedImporting(
  "../discord_common/js/packages/protos/discord_protos/discord_users/v1/user_settings_shared.tsx",
);

export const Versions = prototype1;
