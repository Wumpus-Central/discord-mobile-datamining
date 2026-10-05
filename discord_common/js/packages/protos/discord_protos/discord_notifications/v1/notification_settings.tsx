// discord_common/js/packages/protos/discord_protos/discord_notifications/v1/notification_settings.tsx
import _mod1198 from "../../../../../../../_runtime/metro/01198__.js";
import user_settings_shared from "../../discord_users/v1/user_settings_shared.tsx";
import wrappers from "../../../google/protobuf/wrappers.tsx";
import mute2 from "../../common/v1/mute.tsx";
import _slicedToArray from "../../../../../../../_runtime/metro/00032__slicedToArray.js";
import size from "../../../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let internalBinaryWrite, internalBinaryWrite2, internalBinaryWrite3;

let tmp2;
let tmp3;
let tmp4;
const T2 = function T() {
  return closure_1_3;
};
const T3 = function T() {
  return require("wrappers").UInt64Value;
};
const T4 = function T() {
  return items12;
};
const T5 = function T() {
  return require("user_settings_shared").Versions;
};
const T6 = function T() {
  return internalBinaryWrite;
};
const T7 = function T() {
  return require("mute").MuteNotificationSettings;
};
const MessageType = _mod1198.MessageType;
class UserNotificationSettings$Type extends MessageType {
  constructor() {
    let obj2;
    const items = [
      { no: 1, name: "user_id", kind: "scalar", T: 6 },
      { no: 2, name: "email_settings", kind: "message", T: T2 },
      { no: 6, name: "flags", kind: "message", T: T3 },
      ,
      ,
    ];
    const obj = { no: 4, name: "guilds", kind: "map", K: 6, V: obj2 };
    obj2 = { kind: "message", T };
    class T {
      constructor() {
        return declarativeNotifSettingType;
      }
    }
    items[3] = obj;
    items[4] = { no: 5, name: "version", kind: "scalar", T: 13 };
    items[5] = {
      no: 7,
      name: "data",
      kind: "message",
      T() {
        return items11;
      },
    };
    const tmp2 = new tmp("discord_protos.discord_notifications.v1.UserNotificationSettings", items, T);
    return tmp2;
  }
  create(arr) {
    const obj = { userId: "0", guilds: {}, version: 0 };
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
          obj.userId = str4.toString();
        } else if (2 === tmp5) {
          obj.emailSettings = closure_3.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.emailSettings);
        } else if (6 === tmp5) {
          let UInt64Value = wrappers.UInt64Value;
          obj.flags = UInt64Value.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.flags);
        } else if (4 === tmp5) {
          let binaryReadMap4Result = self.binaryReadMap4(obj.guilds, pos, readUnknownField);
        } else if (5 === tmp5) {
          obj.version = pos.uint32();
        } else if (7 === tmp5) {
          obj.data = items11.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.data);
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
  binaryReadMap4(guilds, pos, readUnknownField) {
    let tmp2;
    let tmp3;
    let tmp7;
    const sum = pos.pos + pos.uint32();
    let obj;
    let str;
    if (pos.pos < sum) {
      while (true) {
        let internalBinaryReadResult;
        let tmp6 = _slicedToArray(pos.tag(), 2);
        [tmp7, r10020] = tmp6;
        let str1 = tmp3;
        if (1 === tmp7) {
          let str3 = pos.fixed64();
          str1 = str3.toString();
          internalBinaryReadResult = tmp2;
        } else if (2 !== tmp7) {
          break;
        } else {
          internalBinaryReadResult = declarativeNotifSettingType.internalBinaryRead(
            pos,
            pos.uint32(),
            readUnknownField,
          );
        }
        tmp2 = internalBinaryReadResult;
        tmp3 = str1;
        obj = internalBinaryReadResult;
        str = str1;
      }
      const _globalThis = globalThis;
      const self = this;
      const self2 = this;
      const error = new Error(
        "unknown map entry field for field discord_protos.discord_notifications.v1.UserNotificationSettings.guilds",
      );
      throw error;
    }
    if (str == null) {
      str = "0";
    }
    if (obj == null) {
      obj = declarativeNotifSettingType.create();
    }
    guilds[str] = obj;
  }
  internalBinaryWrite(userId, tag, writeUnknownFields) {
    if ("0" !== userId.userId) {
      const tagResult = tag.tag(1, _mod1198.WireType.Bit64);
      tagResult.fixed64(userId.userId);
    }
    if (userId.emailSettings) {
      internalBinaryWrite = closure_3.internalBinaryWrite;
      const emailSettings = userId.emailSettings;
      const tagResult1 = tag.tag(2, _mod1198.WireType.LengthDelimited);
      const internalBinaryWriteResult = internalBinaryWrite(emailSettings, tagResult1.fork(), writeUnknownFields);
      const joined = internalBinaryWriteResult.join();
    }
    if (userId.flags) {
      const UInt64Value = wrappers.UInt64Value;
      internalBinaryWrite2 = UInt64Value.internalBinaryWrite;
      const flags = userId.flags;
      const tagResult2 = tag.tag(6, _mod1198.WireType.LengthDelimited);
      const internalBinaryWrite2Result = internalBinaryWrite2(flags, tagResult2.fork(), writeUnknownFields);
      const joined1 = internalBinaryWrite2Result.join();
    }
    const keys = Object.keys(userId.guilds);
    const iter = keys[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tagResult3 = tag.tag(4, _mod1198.WireType.LengthDelimited);
      let forkResult = tagResult3.fork();
      let tagResult4 = forkResult.tag(1, _mod1198.WireType.Bit64);
      let fixed64Result1 = tagResult4.fixed64(nextResult);
      let tagResult5 = tag.tag(2, _mod1198.WireType.LengthDelimited);
      let forkResult1 = tagResult5.fork();
      let internalBinaryWriteResult1 = declarativeNotifSettingType.internalBinaryWrite(
        userId.guilds[nextResult],
        tag,
        writeUnknownFields,
      );
      let joined2 = tag.join();
      let joined3 = joined2.join();
      continue;
    }
    if (0 !== userId.version) {
      const tagResult6 = tag.tag(5, _mod1198.WireType.Varint);
      tagResult6.uint32(userId.version);
    }
    if (userId.data) {
      internalBinaryWrite3 = items11.internalBinaryWrite;
      const data = userId.data;
      const tagResult7 = tag.tag(7, _mod1198.WireType.LengthDelimited);
      const internalBinaryWrite3Result = internalBinaryWrite3(data, tagResult7.fork(), writeUnknownFields);
      const joined4 = internalBinaryWrite3Result.join();
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
const prototype = UserNotificationSettings$Type.prototype;
let items = [
  { no: 1, name: "user_id", kind: "scalar", T: 6 },
  { no: 2, name: "email_settings", kind: "message", T: T2 },
  { no: 6, name: "flags", kind: "message", T: T3 },
  ,
  ,
];
let obj = {
  no: 4,
  name: "guilds",
  kind: "map",
  K: 6,
  V: {
    kind: "message",
    T() {
      return declarativeNotifSettingType;
    },
  },
};
items[3] = obj;
items[4] = { no: 5, name: "version", kind: "scalar", T: 13 };
let obj2 = { no: 7, name: "data", kind: "message", T };
class T {
  constructor() {
    return items11;
  }
}
items[5] = obj2;
let tmp6 = new "binaryReadMap4"("discord_protos.discord_notifications.v1.UserNotificationSettings", items, tmp4, tmp3);
const MessageType2 = _mod1198.MessageType;
class EmailNotificationSettings$Type extends MessageType2 {
  constructor() {
    const items = [{ no: 1, name: "categories", kind: "map", K: 9, V: { kind: "scalar", T: 8 } }];
    const tmp2 = new tmp("discord_protos.discord_notifications.v1.EmailNotificationSettings", items, new.target);
    return tmp2;
  }
  create(arr) {
    const obj = { categories: {} };
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
          let binaryReadMap1Result = self.binaryReadMap1(obj.categories, pos, readUnknownField);
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
    let flag;
    let str;
    if (pos.pos < sum) {
      while (true) {
        let boolResult;
        let tmp5 = _slicedToArray(pos.tag(), 2);
        [tmp6, r10019] = tmp5;
        let stringResult = tmp3;
        if (1 === tmp6) {
          stringResult = pos.string();
          boolResult = tmp2;
        } else if (2 !== tmp6) {
          break;
        } else {
          boolResult = pos.bool();
        }
        tmp2 = boolResult;
        tmp3 = stringResult;
        flag = boolResult;
        str = stringResult;
      }
      const _globalThis = globalThis;
      const self = this;
      const self2 = this;
      const error = new Error(
        "unknown map entry field for field discord_protos.discord_notifications.v1.EmailNotificationSettings.categories",
      );
      throw error;
    }
    if (str == null) {
      str = "";
    }
    if (flag == null) {
      flag = false;
    }
    arg0[str] = flag;
  }
  internalBinaryWrite(categories, tag, writeUnknownFields) {
    const keys = Object.keys(categories.categories);
    const iter = keys[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tagResult = tag.tag(1, _mod1198.WireType.LengthDelimited);
      let forkResult = tagResult.fork();
      let tagResult1 = forkResult.tag(1, _mod1198.WireType.LengthDelimited);
      let stringResult = tagResult1.string(nextResult);
      let tagResult2 = stringResult.tag(2, _mod1198.WireType.Varint);
      let boolResult = tagResult2.bool(categories.categories[nextResult]);
      let joined = boolResult.join();
      continue;
    }
    let onWrite = writeUnknownFields.writeUnknownFields;
    if (false !== onWrite) {
      if (1 == onWrite) {
        onWrite = _mod1198.UnknownFieldHandler.onWrite;
      }
      const self = this;
      onWrite(this.typeName, categories, tag);
    }
    return tag;
  }
}
const prototype2 = EmailNotificationSettings$Type.prototype;
const items1 = [{ no: 1, name: "categories", kind: "map", K: 9, V: { kind: "scalar", T: 8 } }];
const t = new T(
  "discord_protos.discord_notifications.v1.EmailNotificationSettings",
  items1,
  tmp4,
  tmp3,
  "create",
  tmp2,
);
const _false = t;
const MessageType3 = _mod1198.MessageType;
class UserNotificationSettingsData$Type extends MessageType3 {
  constructor() {
    const items = [
      { no: 1, name: "muted_games", kind: "map", K: 6, V: { kind: "scalar", T: 8 } },
      { no: 2, name: "declarative_settings", kind: "message", T: T4 },
    ];
    const tmp2 = new tmp("discord_protos.discord_notifications.v1.UserNotificationSettingsData", items, new.target);
    return tmp2;
  }
  create(arr) {
    const obj = { mutedGames: {} };
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
          let binaryReadMap1Result = self.binaryReadMap1(obj.mutedGames, pos, readUnknownField);
        } else if (2 === tmp5) {
          obj.declarativeSettings = items12.internalBinaryRead(
            pos,
            pos.uint32(),
            readUnknownField,
            obj.declarativeSettings,
          );
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
    let flag;
    let str;
    if (pos.pos < sum) {
      while (true) {
        let boolResult;
        let tmp5 = _slicedToArray(pos.tag(), 2);
        [tmp6, r10019] = tmp5;
        let str1 = tmp3;
        if (1 === tmp6) {
          let str3 = pos.fixed64();
          str1 = str3.toString();
          boolResult = tmp2;
        } else if (2 !== tmp6) {
          break;
        } else {
          boolResult = pos.bool();
        }
        tmp2 = boolResult;
        tmp3 = str1;
        flag = boolResult;
        str = str1;
      }
      const _globalThis = globalThis;
      const self = this;
      const self2 = this;
      const error = new Error(
        "unknown map entry field for field discord_protos.discord_notifications.v1.UserNotificationSettingsData.muted_games",
      );
      throw error;
    }
    if (str == null) {
      str = "0";
    }
    if (flag == null) {
      flag = false;
    }
    arg0[str] = flag;
  }
  internalBinaryWrite(mutedGames, tag, writeUnknownFields) {
    const keys = Object.keys(mutedGames.mutedGames);
    const iter = keys[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tagResult = tag.tag(1, _mod1198.WireType.LengthDelimited);
      let forkResult = tagResult.fork();
      let tagResult1 = forkResult.tag(1, _mod1198.WireType.Bit64);
      let fixed64Result = tagResult1.fixed64(nextResult);
      let tagResult2 = fixed64Result.tag(2, _mod1198.WireType.Varint);
      let boolResult = tagResult2.bool(mutedGames.mutedGames[nextResult]);
      let joined = boolResult.join();
      continue;
    }
    if (mutedGames.declarativeSettings) {
      internalBinaryWrite = items12.internalBinaryWrite;
      const declarativeSettings = mutedGames.declarativeSettings;
      const tagResult3 = tag.tag(2, _mod1198.WireType.LengthDelimited);
      const internalBinaryWriteResult = internalBinaryWrite(declarativeSettings, tagResult3.fork(), writeUnknownFields);
      const joined1 = internalBinaryWriteResult.join();
    }
    let onWrite = writeUnknownFields.writeUnknownFields;
    if (false !== onWrite) {
      if (1 == onWrite) {
        onWrite = _mod1198.UnknownFieldHandler.onWrite;
      }
      const self = this;
      onWrite(this.typeName, mutedGames, tag);
    }
    return tag;
  }
}
const prototype3 = UserNotificationSettingsData$Type.prototype;
const items2 = [
  { no: 1, name: "muted_games", kind: "map", K: 6, V: { kind: "scalar", T: 8 } },
  { no: 2, name: "declarative_settings", kind: "message", T: T4 },
];
const items11 = new items1(
  "discord_protos.discord_notifications.v1.UserNotificationSettingsData",
  items2,
  tmp4,
  tmp3,
  "create",
);
const MessageType4 = _mod1198.MessageType;
class DeclarativeSettings$Type extends MessageType4 {
  constructor() {
    let obj3;
    const items = [,];
    const obj = { no: 1, name: "versions", kind: "message", T: T5 };
    items[0] = obj;
    const obj2 = { no: 2, name: "values", kind: "map", K: 13, V: obj3 };
    obj3 = { kind: "message", T };
    class T {
      constructor() {
        return closure_1_6;
      }
    }
    items[1] = obj2;
    const tmp2 = new tmp("discord_protos.discord_notifications.v1.DeclarativeSettings", items, T);
    return tmp2;
  }
  create(arr) {
    const obj = { values: {} };
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
          let Versions = user_settings_shared.Versions;
          obj.versions = Versions.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.versions);
        } else if (2 === tmp5) {
          let binaryReadMap2Result = self.binaryReadMap2(obj.values, pos, readUnknownField);
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
  binaryReadMap2(arg0, pos, arg2) {
    let tmp2;
    let tmp3;
    let tmp7;
    const sum = pos.pos + pos.uint32();
    let obj;
    let num;
    if (pos.pos < sum) {
      while (true) {
        let internalBinaryReadResult;
        let tmp6 = _slicedToArray(pos.tag(), 2);
        [tmp7, r10020] = tmp6;
        let uint32Result = tmp3;
        if (1 === tmp7) {
          uint32Result = pos.uint32();
          internalBinaryReadResult = tmp2;
        } else if (2 !== tmp7) {
          break;
        } else {
          internalBinaryReadResult = declarativeSettingsType.internalBinaryRead(pos, pos.uint32(), arg2);
        }
        tmp2 = internalBinaryReadResult;
        tmp3 = uint32Result;
        obj = internalBinaryReadResult;
        num = uint32Result;
      }
      const _globalThis = globalThis;
      const self = this;
      const self2 = this;
      const error = new Error(
        "unknown map entry field for field discord_protos.discord_notifications.v1.DeclarativeSettings.values",
      );
      throw error;
    }
    if (num == null) {
      num = 0;
    }
    if (obj == null) {
      obj = declarativeSettingsType.create();
    }
    arg0[num] = obj;
  }
  internalBinaryWrite(versions, tag, writeUnknownFields) {
    if (versions.versions) {
      const Versions = user_settings_shared.Versions;
      internalBinaryWrite = Versions.internalBinaryWrite;
      versions = versions.versions;
      const tagResult = tag.tag(1, _mod1198.WireType.LengthDelimited);
      const internalBinaryWriteResult = internalBinaryWrite(versions, tagResult.fork(), writeUnknownFields);
      const joined = internalBinaryWriteResult.join();
    }
    const keys = Object.keys(versions.values);
    const iter = keys[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tagResult1 = tag.tag(2, _mod1198.WireType.LengthDelimited);
      let forkResult = tagResult1.fork();
      let tagResult2 = forkResult.tag(1, _mod1198.WireType.Varint);
      let _parseInt = parseInt;
      let uint32Result = tagResult2.uint32(parseInt(nextResult));
      let tagResult3 = tag.tag(2, _mod1198.WireType.LengthDelimited);
      let forkResult1 = tagResult3.fork();
      let internalBinaryWriteResult1 = declarativeSettingsType.internalBinaryWrite(
        versions.values[nextResult],
        tag,
        writeUnknownFields,
      );
      let joined1 = tag.join();
      let joined2 = joined1.join();
      continue;
    }
    let onWrite = writeUnknownFields.writeUnknownFields;
    if (false !== onWrite) {
      if (1 == onWrite) {
        onWrite = _mod1198.UnknownFieldHandler.onWrite;
      }
      const self = this;
      onWrite(this.typeName, versions, tag);
    }
    return tag;
  }
}
const prototype4 = DeclarativeSettings$Type.prototype;
let obj3 = { no: 1, name: "versions", kind: "message", T: T5 };
const items3 = [obj3];
const obj4 = { no: 2, name: "values", kind: "map", K: 13, V: { kind: "message", T: tmp9 } };
items3[1] = obj4;
const items12 = new items1(
  "discord_protos.discord_notifications.v1.DeclarativeSettings",
  items3,
  tmp4,
  tmp3,
  "create",
  tmp9,
  "internalBinaryRead",
  "internalBinaryWrite",
  DeclarativeSettings$Type,
  undefined,
  tmp,
  require,
  dependencyMap,
);
const MessageType5 = _mod1198.MessageType;
class DeclarativeNotifSetting$Type extends MessageType5 {
  constructor() {
    const items = [
      { no: 1, name: "toggle", kind: "scalar", T: 8 },
      { no: 2, name: "radio", kind: "scalar", T: 13 },
    ];
    const tmp2 = new tmp("discord_protos.discord_notifications.v1.DeclarativeNotifSetting", items, new.target);
    return tmp2;
  }
  create(arr) {
    const obj = { toggle: false, radio: 0 };
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
          obj.toggle = pos.bool();
        } else if (2 === tmp5) {
          obj.radio = pos.uint32();
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
  internalBinaryWrite(toggle, tag, writeUnknownFields) {
    if (false !== toggle.toggle) {
      const tagResult = tag.tag(1, _mod1198.WireType.Varint);
      tagResult.bool(toggle.toggle);
    }
    if (0 !== toggle.radio) {
      const tagResult1 = tag.tag(2, _mod1198.WireType.Varint);
      tagResult1.uint32(toggle.radio);
    }
    let onWrite = writeUnknownFields.writeUnknownFields;
    if (false !== onWrite) {
      if (1 == onWrite) {
        onWrite = _mod1198.UnknownFieldHandler.onWrite;
      }
      const self = this;
      onWrite(this.typeName, toggle, tag);
    }
    return tag;
  }
}
const prototype5 = DeclarativeNotifSetting$Type.prototype;
const items4 = [
  { no: 1, name: "toggle", kind: "scalar", T: 8 },
  { no: 2, name: "radio", kind: "scalar", T: 13 },
];
const declarativeSettingsType = new DeclarativeSettings$Type(
  "discord_protos.discord_notifications.v1.DeclarativeNotifSetting",
  items4,
  tmp4,
  tmp3,
  "create",
  DeclarativeNotifSetting$Type,
  "internalBinaryRead",
  "internalBinaryWrite",
  DeclarativeSettings$Type,
  undefined,
  tmp,
  require,
  dependencyMap,
  this,
  tmp6,
  t,
);
const MessageType6 = _mod1198.MessageType;
class GuildNotificationSettings$Type extends MessageType6 {
  constructor() {
    const items = [
      { no: 1, name: "suppress_everyone", kind: "scalar", T: 8 },
      { no: 2, name: "message_notifications", kind: "scalar", T: 13 },
      { no: 3, name: "mobile_push", kind: "scalar", T: 8 },
      ,
      ,
      ,
      ,
      ,
      ,
    ];
    const obj = { no: 4, name: "mute", kind: "message", T };
    class T {
      constructor() {
        return closure_1_0(closure_1_1[4]).MuteNotificationSettings;
      }
    }
    items[3] = obj;
    items[4] = { no: 5, name: "channel_overrides", kind: "message", repeat: 1, T: T6 };
    items[5] = { no: 6, name: "suppress_roles", kind: "scalar", T: 8 };
    items[6] = { no: 7, name: "version", kind: "scalar", T: 13 };
    items[7] = { no: 8, name: "hide_muted_channels", kind: "scalar", T: 8 };
    items[8] = { no: 9, name: "mute_scheduled_events", kind: "scalar", T: 8 };
    items[9] = { no: 10, name: "notify_highlights", kind: "scalar", T: 13 };
    const tmp2 = new tmp("discord_protos.discord_notifications.v1.GuildNotificationSettings", items, T);
    return tmp2;
  }
  create(arr) {
    const obj = {
      suppressEveryone: false,
      messageNotifications: 0,
      mobilePush: false,
      channelOverrides: [],
      suppressRoles: false,
      version: 0,
      hideMutedChannels: false,
      muteScheduledEvents: false,
      notifyHighlights: 0,
    };
    const _Object = Object;
    const obj2 = { enumerable: false, value: this };
    _Object.defineProperty(obj, _mod1198.MESSAGE_TYPE, obj2);
    if (undefined !== arr) {
      const tmpResult = _mod1198;
      const result = tmpResult.reflectionMergePartial(this, obj, arr);
    }
    return obj;
  }
  internalBinaryRead(pos, arg1, arg2, arg3) {
    const self = this;
    let obj = arg3;
    if (arg3 == null) {
      obj = self.create();
    }
    if (pos.pos < pos.pos + arg1) {
      [r10019, r10020] = pos.tag();
      _slicedToArray(pos.tag(), 2);
    }
    return obj;
  }
  internalBinaryWrite(suppressEveryone, tag, writeUnknownFields) {
    let length;
    if (false !== suppressEveryone.suppressEveryone) {
      const tagResult = tag.tag(1, _mod1198.WireType.Varint);
      tagResult.bool(suppressEveryone.suppressEveryone);
    }
    if (0 !== suppressEveryone.messageNotifications) {
      const tagResult1 = tag.tag(2, _mod1198.WireType.Varint);
      tagResult1.uint32(suppressEveryone.messageNotifications);
    }
    if (false !== suppressEveryone.mobilePush) {
      const tagResult2 = tag.tag(3, _mod1198.WireType.Varint);
      tagResult2.bool(suppressEveryone.mobilePush);
    }
    if (suppressEveryone.mute) {
      const MuteNotificationSettings = mute2.MuteNotificationSettings;
      internalBinaryWrite = MuteNotificationSettings.internalBinaryWrite;
      const mute = suppressEveryone.mute;
      const tagResult3 = tag.tag(4, _mod1198.WireType.LengthDelimited);
      const internalBinaryWriteResult = internalBinaryWrite(mute, tagResult3.fork(), writeUnknownFields);
      const joined = internalBinaryWriteResult.join();
    }
    let num5 = 0;
    if (0 < suppressEveryone.channelOverrides.length) {
      do {
        internalBinaryWrite2 = internalBinaryWrite.internalBinaryWrite;
        let tmp14 = suppressEveryone.channelOverrides[num5];
        let tagResult4 = tag.tag(5, _mod1198.WireType.LengthDelimited);
        let internalBinaryWrite2Result = internalBinaryWrite2(tmp14, tagResult4.fork(), writeUnknownFields);
        let joined1 = internalBinaryWrite2Result.join();
        num5 = num5 + 1;
        length = suppressEveryone.channelOverrides.length;
      } while (num5 < length);
    }
    if (false !== suppressEveryone.suppressRoles) {
      const tagResult5 = tag.tag(6, _mod1198.WireType.Varint);
      tagResult5.bool(suppressEveryone.suppressRoles);
    }
    if (0 !== suppressEveryone.version) {
      const tagResult6 = tag.tag(7, _mod1198.WireType.Varint);
      tagResult6.uint32(suppressEveryone.version);
    }
    if (false !== suppressEveryone.hideMutedChannels) {
      const tagResult7 = tag.tag(8, _mod1198.WireType.Varint);
      tagResult7.bool(suppressEveryone.hideMutedChannels);
    }
    if (false !== suppressEveryone.muteScheduledEvents) {
      const tagResult8 = tag.tag(9, _mod1198.WireType.Varint);
      tagResult8.bool(suppressEveryone.muteScheduledEvents);
    }
    if (0 !== suppressEveryone.notifyHighlights) {
      const tagResult9 = tag.tag(10, _mod1198.WireType.Varint);
      tagResult9.uint32(suppressEveryone.notifyHighlights);
    }
    let onWrite = writeUnknownFields.writeUnknownFields;
    if (false !== onWrite) {
      if (1 == onWrite) {
        onWrite = _mod1198.UnknownFieldHandler.onWrite;
      }
      const self = this;
      onWrite(this.typeName, suppressEveryone, tag);
    }
    return tag;
  }
}
const prototype6 = GuildNotificationSettings$Type.prototype;
const items5 = [
  { no: 1, name: "suppress_everyone", kind: "scalar", T: 8 },
  { no: 2, name: "message_notifications", kind: "scalar", T: 13 },
  { no: 3, name: "mobile_push", kind: "scalar", T: 8 },
  {
    no: 4,
    name: "mute",
    kind: "message",
    T() {
      return require("mute").MuteNotificationSettings;
    },
  },
  { no: 5, name: "channel_overrides", kind: "message", repeat: 1, T: T6 },
  { no: 6, name: "suppress_roles", kind: "scalar", T: 8 },
  { no: 7, name: "version", kind: "scalar", T: 13 },
  { no: 8, name: "hide_muted_channels", kind: "scalar", T: 8 },
  { no: 9, name: "mute_scheduled_events", kind: "scalar", T: 8 },
  { no: 10, name: "notify_highlights", kind: "scalar", T: 13 },
];
const declarativeNotifSettingType = new DeclarativeNotifSetting$Type(
  "discord_protos.discord_notifications.v1.GuildNotificationSettings",
  items5,
  tmp4,
  GuildNotificationSettings$Type,
  "create",
  DeclarativeNotifSetting$Type,
  "internalBinaryRead",
  "internalBinaryWrite",
  items5,
  undefined,
  tmp,
  require,
  dependencyMap,
  this,
  tmp6,
  t,
  items11,
  items12,
);
const MessageType7 = _mod1198.MessageType;
class ChannelNotificationSettings$Type extends MessageType7 {
  constructor() {
    const items = [
      { no: 1, name: "channel_id", kind: "scalar", T: 6 },
      { no: 7, name: "message_notifications", kind: "scalar", T: 13 },
      { no: 3, name: "mute", kind: "message", T: T7 },
      { no: 4, name: "collapsed", kind: "scalar", T: 8 },
    ];
    const tmp2 = new tmp("discord_protos.discord_notifications.v1.ChannelNotificationSettings", items, new.target);
    return tmp2;
  }
  create(arr) {
    const obj = { channelId: "0", messageNotifications: 0, collapsed: false };
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
          obj.channelId = str4.toString();
        } else if (7 === tmp5) {
          obj.messageNotifications = pos.uint32();
        } else if (3 === tmp5) {
          let MuteNotificationSettings = mute2.MuteNotificationSettings;
          obj.mute = MuteNotificationSettings.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.mute);
        } else if (4 === tmp5) {
          obj.collapsed = pos.bool();
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
  internalBinaryWrite(channelId, tag, writeUnknownFields) {
    if ("0" !== channelId.channelId) {
      const tagResult = tag.tag(1, _mod1198.WireType.Bit64);
      tagResult.fixed64(channelId.channelId);
    }
    if (0 !== channelId.messageNotifications) {
      const tagResult1 = tag.tag(7, _mod1198.WireType.Varint);
      tagResult1.uint32(channelId.messageNotifications);
    }
    if (channelId.mute) {
      const MuteNotificationSettings = mute2.MuteNotificationSettings;
      internalBinaryWrite = MuteNotificationSettings.internalBinaryWrite;
      const mute = channelId.mute;
      const tagResult2 = tag.tag(3, _mod1198.WireType.LengthDelimited);
      const internalBinaryWriteResult = internalBinaryWrite(mute, tagResult2.fork(), writeUnknownFields);
      const joined = internalBinaryWriteResult.join();
    }
    if (false !== channelId.collapsed) {
      const tagResult3 = tag.tag(4, _mod1198.WireType.Varint);
      tagResult3.bool(channelId.collapsed);
    }
    let onWrite = writeUnknownFields.writeUnknownFields;
    if (false !== onWrite) {
      if (1 == onWrite) {
        onWrite = _mod1198.UnknownFieldHandler.onWrite;
      }
      const self = this;
      onWrite(this.typeName, channelId, tag);
    }
    return tag;
  }
}
const prototype7 = ChannelNotificationSettings$Type.prototype;
const items6 = [
  { no: 1, name: "channel_id", kind: "scalar", T: 6 },
  { no: 7, name: "message_notifications", kind: "scalar", T: 13 },
  { no: 3, name: "mute", kind: "message", T: T7 },
  { no: 4, name: "collapsed", kind: "scalar", T: 8 },
];
let tmp13 = new "internalBinaryRead"(
  "discord_protos.discord_notifications.v1.ChannelNotificationSettings",
  items6,
  tmp4,
  GuildNotificationSettings$Type,
  "create",
  ChannelNotificationSettings$Type,
  "internalBinaryRead",
  items6,
  this,
  undefined,
  tmp,
  require,
  dependencyMap,
  this,
  tmp6,
  t,
);
const metroImportAll = tmp13;
let result = size.fileFinishedImporting(
  "../discord_common/js/packages/protos/discord_protos/discord_notifications/v1/notification_settings.tsx",
);

export const UserNotificationSettings = tmp6;
export const EmailNotificationSettings = t;
export const UserNotificationSettingsData = items11;
export const DeclarativeSettings = items12;
export const DeclarativeNotifSetting = declarativeSettingsType;
export const GuildNotificationSettings = declarativeNotifSettingType;
export const ChannelNotificationSettings = tmp13;
