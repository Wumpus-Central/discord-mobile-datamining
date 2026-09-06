// discord_common/js/packages/protos/discord_protos/discord_notifications/v1/notification_settings.tsx
import _mod1188 from "../../../../../../../_runtime/metro/01188__.js";
import user_settings_shared from "../../discord_users/v1/user_settings_shared.tsx";
import wrappers from "../../../google/protobuf/wrappers.tsx";
import mute from "../../common/v1/mute.tsx";
import _slicedToArray from "../../../../../../../_runtime/metro/00032__.js";

require = fn;
const MessageType = fn(1188).MessageType;
class UserNotificationSettings$Type extends MessageType {
  constructor() {
    items = [, , , , ,];
    items[0] = { no: 1, name: "user_id", kind: "scalar", T: 6 };
    items[1] = {
      no: 2,
      name: "email_settings",
      kind: "message",
      T() {
        return closure_1_3;
      },
    };
    items[2] = {
      no: 6,
      name: "flags",
      kind: "message",
      T() {
        return require("wrappers").UInt64Value;
      },
    };
    obj = { no: 4, name: "guilds", kind: "map", K: 6, V: null };
    obj = { kind: "message", T: null };
    class T {
      constructor() {
        return closure_1_7;
      }
    }
    obj.T = T;
    obj.V = obj;
    items[3] = obj;
    items[4] = { no: 5, name: "version", kind: "scalar", T: 13 };
    items[5] = {
      no: 7,
      name: "data",
      kind: "message",
      T() {
        return items1;
      },
    };
    tmp = new tmp("discord_protos.discord_notifications.v1.UserNotificationSettings", items, T);
    return tmp;
  }
}
const prototype = UserNotificationSettings$Type.prototype;
prototype["create"] = function create(arr) {
  let obj = { userId: "0", guilds: {}, version: 0 };
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
        obj.data = items1.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.data);
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
prototype["binaryReadMap4"] = function binaryReadMap4(guilds, pos, readUnknownField) {
  const sum = pos.pos + pos.uint32();
  let obj;
  let str;
  if (pos.pos < sum) {
    while (true) {
      let tmp6 = _slicedToArray(pos.tag(), 2);
      [tmp7, r10020] = tmp6;
      str = tmp3;
      if (1 === tmp7) {
        let str3 = pos.fixed64();
        str = str3.toString();
        let internalBinaryReadResult = tmp2;
      } else if (2 !== tmp7) {
        break;
      } else {
        internalBinaryReadResult = declarativeNotifSettingType.internalBinaryRead(pos, pos.uint32(), readUnknownField);
      }
      tmp2 = internalBinaryReadResult;
      tmp3 = str;
      obj = internalBinaryReadResult;
    }
    const _globalThis = globalThis;
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
};
prototype["internalBinaryWrite"] = function internalBinaryWrite(userId, tag, writeUnknownFields) {
  if ("0" !== userId.userId) {
    tag.tag(1, _mod1188.WireType.Bit64).fixed64(userId.userId);
    const tagResult = tag.tag(1, _mod1188.WireType.Bit64);
  }
  if (userId.emailSettings) {
    const tagResult1 = tag.tag(2, _mod1188.WireType.LengthDelimited);
    const joined = closure_3
      .internalBinaryWrite(
        userId.emailSettings,
        tag.tag(2, _mod1188.WireType.LengthDelimited).fork(),
        writeUnknownFields,
      )
      .join();
    const internalBinaryWriteResult = closure_3.internalBinaryWrite(
      userId.emailSettings,
      tag.tag(2, _mod1188.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    );
  }
  if (userId.flags) {
    const UInt64Value = wrappers.UInt64Value;
    const tagResult2 = tag.tag(6, _mod1188.WireType.LengthDelimited);
    const joined1 = UInt64Value.internalBinaryWrite(
      userId.flags,
      tag.tag(6, _mod1188.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    ).join();
    const internalBinaryWriteResult1 = UInt64Value.internalBinaryWrite(
      userId.flags,
      tag.tag(6, _mod1188.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    );
  }
  const keys = Object.keys(userId.guilds);
  const iter = keys[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tagResult3 = tag.tag(4, _mod1188.WireType.LengthDelimited);
    let forkResult = tagResult3.fork();
    let tagResult4 = forkResult.tag(1, _mod1188.WireType.Bit64);
    let fixed64Result1 = tagResult4.fixed64(nextResult);
    let tagResult5 = tag.tag(2, _mod1188.WireType.LengthDelimited);
    let forkResult1 = tagResult5.fork();
    let internalBinaryWriteResult2 = declarativeNotifSettingType.internalBinaryWrite(
      userId.guilds[nextResult],
      tag,
      writeUnknownFields,
    );
    let joined2 = tag.join();
    let joined3 = joined2.join();
    continue;
  }
  if (0 !== userId.version) {
    tag.tag(5, _mod1188.WireType.Varint).uint32(userId.version);
    const tagResult6 = tag.tag(5, _mod1188.WireType.Varint);
  }
  if (userId.data) {
    const tagResult7 = tag.tag(7, _mod1188.WireType.LengthDelimited);
    const joined4 = items1
      .internalBinaryWrite(userId.data, tag.tag(7, _mod1188.WireType.LengthDelimited).fork(), writeUnknownFields)
      .join();
    const internalBinaryWriteResult3 = items1.internalBinaryWrite(
      userId.data,
      tag.tag(7, _mod1188.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    );
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = _mod1188.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, userId, tag);
  }
  return tag;
};
let items = [
  { no: 1, name: "user_id", kind: "scalar", T: 6 },
  {
    no: 2,
    name: "email_settings",
    kind: "message",
    T() {
      return closure_1_3;
    },
  },
  {
    no: 6,
    name: "flags",
    kind: "message",
    T() {
      return require("wrappers").UInt64Value;
    },
  },
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
obj = { no: 7, name: "data", kind: "message", T: null };
class T {
  constructor() {
    return closure_1_4;
  }
}
obj.T = T;
items[5] = obj;
let tmp6 = new "binaryReadMap4"("discord_protos.discord_notifications.v1.UserNotificationSettings", items, tmp4, tmp3);
const MessageType2 = fn(1188).MessageType;
class EmailNotificationSettings$Type extends MessageType2 {
  constructor() {
    items = [];
    items[0] = { no: 1, name: "categories", kind: "map", K: 9, V: { kind: "scalar", T: 8 } };
    tmp = new tmp("discord_protos.discord_notifications.v1.EmailNotificationSettings", items, new.target);
    return tmp;
  }
}
const prototype2 = EmailNotificationSettings$Type.prototype;
prototype2["create"] = function create(arr) {
  let obj = { categories: {} };
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
prototype2["binaryReadMap1"] = function binaryReadMap1(arg0, pos) {
  const sum = pos.pos + pos.uint32();
  let flag;
  let str;
  if (pos.pos < sum) {
    while (true) {
      let tmp5 = _slicedToArray(pos.tag(), 2);
      [tmp6, r10019] = tmp5;
      let stringResult = tmp3;
      if (1 === tmp6) {
        stringResult = pos.string();
        let boolResult = tmp2;
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
};
prototype2["internalBinaryWrite"] = function internalBinaryWrite(categories, tag, writeUnknownFields) {
  const keys = Object.keys(categories.categories);
  const iter = keys[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tagResult = tag.tag(1, _mod1188.WireType.LengthDelimited);
    let forkResult = tagResult.fork();
    let tagResult1 = forkResult.tag(1, _mod1188.WireType.LengthDelimited);
    let stringResult = tagResult1.string(nextResult);
    let tagResult2 = stringResult.tag(2, _mod1188.WireType.Varint);
    let boolResult = tagResult2.bool(categories.categories[nextResult]);
    let joined = boolResult.join();
    continue;
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = _mod1188.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, categories, tag);
  }
  return tag;
};
let items1 = [{ no: 1, name: "categories", kind: "map", K: 9, V: { kind: "scalar", T: 8 } }];
const t = new T(
  "discord_protos.discord_notifications.v1.EmailNotificationSettings",
  items1,
  tmp4,
  tmp3,
  "create",
  tmp2,
);
let closure_3 = t;
const MessageType3 = fn(1188).MessageType;
class UserNotificationSettingsData$Type extends MessageType3 {
  constructor() {
    items = [,];
    items[0] = { no: 1, name: "muted_games", kind: "map", K: 6, V: { kind: "scalar", T: 8 } };
    items[1] = {
      no: 2,
      name: "declarative_settings",
      kind: "message",
      T() {
        return items11;
      },
    };
    tmp = new tmp("discord_protos.discord_notifications.v1.UserNotificationSettingsData", items, new.target);
    return tmp;
  }
}
const prototype3 = UserNotificationSettingsData$Type.prototype;
prototype3["create"] = function create(arr) {
  let obj = { mutedGames: {} };
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
        let binaryReadMap1Result = self.binaryReadMap1(obj.mutedGames, pos, readUnknownField);
      } else if (2 === tmp5) {
        obj.declarativeSettings = items11.internalBinaryRead(
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
prototype3["binaryReadMap1"] = function binaryReadMap1(arg0, pos) {
  const sum = pos.pos + pos.uint32();
  let flag;
  let str;
  if (pos.pos < sum) {
    while (true) {
      let tmp5 = _slicedToArray(pos.tag(), 2);
      [tmp6, r10019] = tmp5;
      str = tmp3;
      if (1 === tmp6) {
        let str3 = pos.fixed64();
        str = str3.toString();
        let boolResult = tmp2;
      } else if (2 !== tmp6) {
        break;
      } else {
        boolResult = pos.bool();
      }
      tmp2 = boolResult;
      tmp3 = str;
      flag = boolResult;
    }
    const _globalThis = globalThis;
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
};
prototype3["internalBinaryWrite"] = function internalBinaryWrite(mutedGames, tag, writeUnknownFields) {
  const keys = Object.keys(mutedGames.mutedGames);
  const iter = keys[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tagResult = tag.tag(1, _mod1188.WireType.LengthDelimited);
    let forkResult = tagResult.fork();
    let tagResult1 = forkResult.tag(1, _mod1188.WireType.Bit64);
    let fixed64Result = tagResult1.fixed64(nextResult);
    let tagResult2 = fixed64Result.tag(2, _mod1188.WireType.Varint);
    let boolResult = tagResult2.bool(mutedGames.mutedGames[nextResult]);
    let joined = boolResult.join();
    continue;
  }
  if (mutedGames.declarativeSettings) {
    const tagResult3 = tag.tag(2, _mod1188.WireType.LengthDelimited);
    const joined1 = items11
      .internalBinaryWrite(
        mutedGames.declarativeSettings,
        tag.tag(2, _mod1188.WireType.LengthDelimited).fork(),
        writeUnknownFields,
      )
      .join();
    const internalBinaryWriteResult = items11.internalBinaryWrite(
      mutedGames.declarativeSettings,
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
    onWrite(this.typeName, mutedGames, tag);
  }
  return tag;
};
const items2 = [
  { no: 1, name: "muted_games", kind: "map", K: 6, V: { kind: "scalar", T: 8 } },
  {
    no: 2,
    name: "declarative_settings",
    kind: "message",
    T() {
      return items11;
    },
  },
];
items1 = new items1(
  "discord_protos.discord_notifications.v1.UserNotificationSettingsData",
  items2,
  tmp4,
  tmp3,
  "create",
);
const MessageType4 = fn(1188).MessageType;
class DeclarativeSettings$Type extends MessageType4 {
  constructor() {
    obj = {
      no: 1,
      name: "versions",
      kind: "message",
      T() {
        return require("user_settings_shared").Versions;
      },
    };
    items = [,];
    items[0] = obj;
    obj = { no: 2, name: "values", kind: "map", K: 13, V: null };
    obj1 = { kind: "message", T: null };
    class T {
      constructor() {
        return closure_1_6;
      }
    }
    obj1.T = T;
    obj.V = obj1;
    items[1] = obj;
    tmp = new tmp("discord_protos.discord_notifications.v1.DeclarativeSettings", items, T);
    return tmp;
  }
}
const prototype4 = DeclarativeSettings$Type.prototype;
prototype4["create"] = function create(arr) {
  let obj = { values: {} };
  const _Object = Object;
  obj = { enumerable: false, value: this };
  _Object.defineProperty(obj, _mod1188.MESSAGE_TYPE, obj);
  if (undefined !== arr) {
    const result = _mod1188.reflectionMergePartial(this, obj, arr);
    const tmpResult = _mod1188;
  }
  return obj;
};
prototype4["internalBinaryRead"] = function internalBinaryRead(pos, arg1, readUnknownField, arg3) {
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
prototype4["binaryReadMap2"] = function binaryReadMap2(arg0, pos, arg2) {
  const sum = pos.pos + pos.uint32();
  let obj;
  let num;
  if (pos.pos < sum) {
    while (true) {
      let tmp6 = _slicedToArray(pos.tag(), 2);
      [tmp7, r10020] = tmp6;
      let uint32Result = tmp3;
      if (1 === tmp7) {
        uint32Result = pos.uint32();
        let internalBinaryReadResult = tmp2;
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
};
prototype4["internalBinaryWrite"] = function internalBinaryWrite(versions, tag, writeUnknownFields) {
  if (versions.versions) {
    const Versions = user_settings_shared.Versions;
    const tagResult = tag.tag(1, _mod1188.WireType.LengthDelimited);
    const joined = Versions.internalBinaryWrite(
      versions.versions,
      tag.tag(1, _mod1188.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    ).join();
    const internalBinaryWriteResult = Versions.internalBinaryWrite(
      versions.versions,
      tag.tag(1, _mod1188.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    );
  }
  const keys = Object.keys(versions.values);
  const iter = keys[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tagResult1 = tag.tag(2, _mod1188.WireType.LengthDelimited);
    let forkResult = tagResult1.fork();
    let tagResult2 = forkResult.tag(1, _mod1188.WireType.Varint);
    let _parseInt = parseInt;
    let uint32Result = tagResult2.uint32(parseInt(nextResult));
    let tagResult3 = tag.tag(2, _mod1188.WireType.LengthDelimited);
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
      onWrite = _mod1188.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, versions, tag);
  }
  return tag;
};
obj = {
  no: 1,
  name: "versions",
  kind: "message",
  T() {
    return require("user_settings_shared").Versions;
  },
};
const items3 = [obj];
const obj1 = { no: 2, name: "values", kind: "map", K: 13, V: null };
const obj2 = { kind: "message", T: null };
class T {
  constructor() {
    return closure_1_6;
  }
}
obj2.T = T;
obj1.V = obj2;
items3[1] = obj1;
const items11 = new items1(
  "discord_protos.discord_notifications.v1.DeclarativeSettings",
  items3,
  tmp4,
  tmp3,
  "create",
  T,
  "internalBinaryRead",
  "internalBinaryWrite",
  DeclarativeSettings$Type,
  undefined,
  tmp,
  fn,
  dependencyMap,
);
const MessageType5 = fn(1188).MessageType;
class DeclarativeNotifSetting$Type extends MessageType5 {
  constructor() {
    items = [,];
    items[0] = { no: 1, name: "toggle", kind: "scalar", T: 8 };
    items[1] = { no: 2, name: "radio", kind: "scalar", T: 13 };
    tmp = new tmp("discord_protos.discord_notifications.v1.DeclarativeNotifSetting", items, new.target);
    return tmp;
  }
}
const prototype5 = DeclarativeNotifSetting$Type.prototype;
prototype5["create"] = function create(arr) {
  let obj = { toggle: false, radio: 0 };
  const _Object = Object;
  obj = { enumerable: false, value: this };
  _Object.defineProperty(obj, _mod1188.MESSAGE_TYPE, obj);
  if (undefined !== arr) {
    const result = _mod1188.reflectionMergePartial(this, obj, arr);
    const tmpResult = _mod1188;
  }
  return obj;
};
prototype5["internalBinaryRead"] = function internalBinaryRead(pos, arg1, readUnknownField, arg3) {
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
prototype5["internalBinaryWrite"] = function internalBinaryWrite(toggle, tag, writeUnknownFields) {
  if (false !== toggle.toggle) {
    tag.tag(1, _mod1188.WireType.Varint).bool(toggle.toggle);
    const tagResult = tag.tag(1, _mod1188.WireType.Varint);
  }
  if (0 !== toggle.radio) {
    tag.tag(2, _mod1188.WireType.Varint).uint32(toggle.radio);
    const tagResult1 = tag.tag(2, _mod1188.WireType.Varint);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = _mod1188.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, toggle, tag);
  }
  return tag;
};
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
  fn,
  dependencyMap,
  new.target,
  tmp6,
  t,
);
const MessageType6 = fn(1188).MessageType;
class GuildNotificationSettings$Type extends MessageType6 {
  constructor() {
    items = [, , , , , , , , ,];
    items[0] = { no: 1, name: "suppress_everyone", kind: "scalar", T: 8 };
    items[1] = { no: 2, name: "message_notifications", kind: "scalar", T: 13 };
    items[2] = { no: 3, name: "mobile_push", kind: "scalar", T: 8 };
    obj = { no: 4, name: "mute", kind: "message", T: null };
    class T {
      constructor() {
        return closure_1_0(closure_1_1[4]).MuteNotificationSettings;
      }
    }
    obj.T = T;
    items[3] = obj;
    items[4] = {
      no: 5,
      name: "channel_overrides",
      kind: "message",
      repeat: 1,
      T() {
        return closure_1_8;
      },
    };
    items[5] = { no: 6, name: "suppress_roles", kind: "scalar", T: 8 };
    items[6] = { no: 7, name: "version", kind: "scalar", T: 13 };
    items[7] = { no: 8, name: "hide_muted_channels", kind: "scalar", T: 8 };
    items[8] = { no: 9, name: "mute_scheduled_events", kind: "scalar", T: 8 };
    items[9] = { no: 10, name: "notify_highlights", kind: "scalar", T: 13 };
    tmp = new tmp("discord_protos.discord_notifications.v1.GuildNotificationSettings", items, T);
    return tmp;
  }
}
const prototype6 = GuildNotificationSettings$Type.prototype;
prototype6["create"] = function create(arr) {
  let obj = {
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
  obj = { enumerable: false, value: this };
  _Object.defineProperty(obj, _mod1188.MESSAGE_TYPE, obj);
  if (undefined !== arr) {
    const result = _mod1188.reflectionMergePartial(this, obj, arr);
    const tmpResult = _mod1188;
  }
  return obj;
};
prototype6["internalBinaryRead"] = function internalBinaryRead(pos, arg1, arg2, arg3) {
  const self = this;
  let obj = arg3;
  if (arg3 == null) {
    obj = self.create();
  }
  if (pos.pos < pos.pos + arg1) {
    [r10019, r10020] = _slicedToArray(pos.tag(), 2);
    const tmp3 = _slicedToArray(pos.tag(), 2);
  }
  return obj;
};
prototype6["internalBinaryWrite"] = function internalBinaryWrite(suppressEveryone, tag, writeUnknownFields) {
  let length;
  if (false !== suppressEveryone.suppressEveryone) {
    tag.tag(1, _mod1188.WireType.Varint).bool(suppressEveryone.suppressEveryone);
    const tagResult = tag.tag(1, _mod1188.WireType.Varint);
  }
  if (0 !== suppressEveryone.messageNotifications) {
    tag.tag(2, _mod1188.WireType.Varint).uint32(suppressEveryone.messageNotifications);
    const tagResult1 = tag.tag(2, _mod1188.WireType.Varint);
  }
  if (false !== suppressEveryone.mobilePush) {
    tag.tag(3, _mod1188.WireType.Varint).bool(suppressEveryone.mobilePush);
    const tagResult2 = tag.tag(3, _mod1188.WireType.Varint);
  }
  if (suppressEveryone.mute) {
    const MuteNotificationSettings = mute.MuteNotificationSettings;
    const tagResult3 = tag.tag(4, _mod1188.WireType.LengthDelimited);
    const joined = MuteNotificationSettings.internalBinaryWrite(
      suppressEveryone.mute,
      tag.tag(4, _mod1188.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    ).join();
    const internalBinaryWriteResult = MuteNotificationSettings.internalBinaryWrite(
      suppressEveryone.mute,
      tag.tag(4, _mod1188.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    );
  }
  let num5 = 0;
  if (0 < suppressEveryone.channelOverrides.length) {
    do {
      let tagResult4 = tag.tag(5, _mod1188.WireType.LengthDelimited);
      let internalBinaryWriteResult1 = closure_8.internalBinaryWrite(
        suppressEveryone.channelOverrides[num5],
        tagResult4.fork(),
        writeUnknownFields,
      );
      let joined1 = internalBinaryWriteResult1.join();
      num5 = num5 + 1;
      length = suppressEveryone.channelOverrides.length;
    } while (num5 < length);
  }
  if (false !== suppressEveryone.suppressRoles) {
    tag.tag(6, _mod1188.WireType.Varint).bool(suppressEveryone.suppressRoles);
    const tagResult5 = tag.tag(6, _mod1188.WireType.Varint);
  }
  if (0 !== suppressEveryone.version) {
    tag.tag(7, _mod1188.WireType.Varint).uint32(suppressEveryone.version);
    const tagResult6 = tag.tag(7, _mod1188.WireType.Varint);
  }
  if (false !== suppressEveryone.hideMutedChannels) {
    tag.tag(8, _mod1188.WireType.Varint).bool(suppressEveryone.hideMutedChannels);
    const tagResult7 = tag.tag(8, _mod1188.WireType.Varint);
  }
  if (false !== suppressEveryone.muteScheduledEvents) {
    tag.tag(9, _mod1188.WireType.Varint).bool(suppressEveryone.muteScheduledEvents);
    const tagResult8 = tag.tag(9, _mod1188.WireType.Varint);
  }
  if (0 !== suppressEveryone.notifyHighlights) {
    tag.tag(10, _mod1188.WireType.Varint).uint32(suppressEveryone.notifyHighlights);
    const tagResult9 = tag.tag(10, _mod1188.WireType.Varint);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = _mod1188.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, suppressEveryone, tag);
  }
  return tag;
};
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
  {
    no: 5,
    name: "channel_overrides",
    kind: "message",
    repeat: 1,
    T() {
      return closure_1_8;
    },
  },
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
  fn,
  dependencyMap,
  new.target,
  tmp6,
  t,
  items1,
  items11,
);
const MessageType7 = fn(1188).MessageType;
class ChannelNotificationSettings$Type extends MessageType7 {
  constructor() {
    items = [, , ,];
    items[0] = { no: 1, name: "channel_id", kind: "scalar", T: 6 };
    items[1] = { no: 7, name: "message_notifications", kind: "scalar", T: 13 };
    items[2] = {
      no: 3,
      name: "mute",
      kind: "message",
      T() {
        return require("mute").MuteNotificationSettings;
      },
    };
    items[3] = { no: 4, name: "collapsed", kind: "scalar", T: 8 };
    tmp = new tmp("discord_protos.discord_notifications.v1.ChannelNotificationSettings", items, new.target);
    return tmp;
  }
}
const prototype7 = ChannelNotificationSettings$Type.prototype;
prototype7["create"] = function create(arr) {
  let obj = { channelId: "0", messageNotifications: 0, collapsed: false };
  const _Object = Object;
  obj = { enumerable: false, value: this };
  _Object.defineProperty(obj, _mod1188.MESSAGE_TYPE, obj);
  if (undefined !== arr) {
    const result = _mod1188.reflectionMergePartial(this, obj, arr);
    const tmpResult = _mod1188;
  }
  return obj;
};
prototype7["internalBinaryRead"] = function internalBinaryRead(pos, arg1, readUnknownField, arg3) {
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
        let MuteNotificationSettings = mute.MuteNotificationSettings;
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
prototype7["internalBinaryWrite"] = function internalBinaryWrite(channelId, tag, writeUnknownFields) {
  if ("0" !== channelId.channelId) {
    tag.tag(1, _mod1188.WireType.Bit64).fixed64(channelId.channelId);
    const tagResult = tag.tag(1, _mod1188.WireType.Bit64);
  }
  if (0 !== channelId.messageNotifications) {
    tag.tag(7, _mod1188.WireType.Varint).uint32(channelId.messageNotifications);
    const tagResult1 = tag.tag(7, _mod1188.WireType.Varint);
  }
  if (channelId.mute) {
    const MuteNotificationSettings = mute.MuteNotificationSettings;
    const tagResult2 = tag.tag(3, _mod1188.WireType.LengthDelimited);
    const joined = MuteNotificationSettings.internalBinaryWrite(
      channelId.mute,
      tag.tag(3, _mod1188.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    ).join();
    const internalBinaryWriteResult = MuteNotificationSettings.internalBinaryWrite(
      channelId.mute,
      tag.tag(3, _mod1188.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    );
  }
  if (false !== channelId.collapsed) {
    tag.tag(4, _mod1188.WireType.Varint).bool(channelId.collapsed);
    const tagResult3 = tag.tag(4, _mod1188.WireType.Varint);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = _mod1188.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, channelId, tag);
  }
  return tag;
};
const items6 = [
  { no: 1, name: "channel_id", kind: "scalar", T: 6 },
  { no: 7, name: "message_notifications", kind: "scalar", T: 13 },
  {
    no: 3,
    name: "mute",
    kind: "message",
    T() {
      return require("mute").MuteNotificationSettings;
    },
  },
  { no: 4, name: "collapsed", kind: "scalar", T: 8 },
];
let tmp12 = new "internalBinaryRead"(
  "discord_protos.discord_notifications.v1.ChannelNotificationSettings",
  items6,
  tmp4,
  GuildNotificationSettings$Type,
  "create",
  ChannelNotificationSettings$Type,
  "internalBinaryRead",
  items6,
  new.target,
  undefined,
  tmp,
  fn,
  dependencyMap,
  new.target,
  tmp6,
  t,
);
let closure_8 = tmp12;
const size = fn(2);
let result = size.fileFinishedImporting(
  "../discord_common/js/packages/protos/discord_protos/discord_notifications/v1/notification_settings.tsx",
);

export const UserNotificationSettings = tmp6;
export const EmailNotificationSettings = t;
export const UserNotificationSettingsData = items1;
export const DeclarativeSettings = items11;
export const DeclarativeNotifSetting = declarativeSettingsType;
export const GuildNotificationSettings = declarativeNotifSettingType;
export const ChannelNotificationSettings = tmp12;
