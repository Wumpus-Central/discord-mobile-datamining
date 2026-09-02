// discord_common/js/packages/protos/discord_protos/discord_notifications/v1/notification_settings.tsx
import _mod1306 from "../../../../../../../_runtime/metro/01306__.js";
import create2 from "../../discord_users/v1/user_settings_shared.tsx";
import defineProperty from "../../../google/protobuf/wrappers.tsx";
import create3 from "../../common/v1/mute.tsx";
import closure_2 from "../../../../../../../_runtime/metro/00032__slicedToArray.js";
import {
  MessageType,
  MessageType as MessageType2,
  MessageType as MessageType3,
  MessageType as MessageType4,
  MessageType as MessageType5,
  MessageType as MessageType6,
  MessageType as MessageType7,
} from "../../../../../../../_runtime/metro/01306__.js";

require = arg1;
class UserNotificationSettings$Type extends MessageType {
  constructor() {
    items = [, , , , ,];
    items[0] = { no: 1, name: "user_id", kind: "scalar", T: 6 };
    items[1] = {
      no: 2,
      name: "email_settings",
      kind: "message",
      T() {
        return closure_3;
      },
    };
    items[2] = {
      no: 6,
      name: "flags",
      kind: "message",
      T() {
        return callback(table[2]).UInt64Value;
      },
    };
    obj = { no: 4, name: "guilds", kind: "map", K: 6, V: null };
    obj = { kind: "message", T: null };
    class T {
      constructor() {
        return closure_7;
      }
    }
    obj[1] = T;
    obj[4] = obj;
    items[3] = obj;
    items[4] = { no: 5, name: "version", kind: "scalar", T: 13 };
    items[5] = {
      no: 7,
      name: "data",
      kind: "message",
      T() {
        return closure_4;
      },
    };
    tmp = new tmp("discord_protos.discord_notifications.v1.UserNotificationSettings", items, T);
    // ThrowIfThisInitialized (0x7c)
    return tmp;
  }
}
const prototype = UserNotificationSettings$Type.prototype;
prototype["create"] = function create(arr) {
  let obj = { userId: "0", guilds: {}, version: 0 };
  const _Object = Object;
  obj = { enumerable: false, value: this };
  _Object.defineProperty(obj, _mod1306.MESSAGE_TYPE, obj);
  if (undefined !== arr) {
    const result = _mod1306.reflectionMergePartial(this, obj, arr);
    const tmpResult = _mod1306;
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
      let tmp3 = callback;
      let tmp4 = callback(pos.tag(), 2);
      [tmp5, tmp6] = tmp4;
      if (1 === tmp5) {
        let str4 = pos.fixed64();
        obj.userId = str4.toString();
      } else if (2 === tmp5) {
        let tmp32 = closure_3;
        let tmp33 = closure_3;
        let tmp34 = pos;
        let tmp35 = readUnknownField;
        obj.emailSettings = closure_3.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.emailSettings);
      } else if (6 === tmp5) {
        let tmp27 = require;
        let tmp28 = dependencyMap;
        let UInt64Value = defineProperty.UInt64Value;
        let tmp29 = UInt64Value;
        let tmp30 = pos;
        let tmp31 = readUnknownField;
        obj.flags = UInt64Value.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.flags);
      } else if (4 === tmp5) {
        let binaryReadMap4Result = self.binaryReadMap4(obj.guilds, pos, readUnknownField);
      } else if (5 === tmp5) {
        obj.version = pos.uint32();
      } else if (7 === tmp5) {
        let tmp22 = items1;
        let tmp23 = items1;
        let tmp24 = pos;
        let tmp25 = readUnknownField;
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
              onRead = _mod1306.UnknownFieldHandler.onRead;
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
prototype["binaryReadMap4"] = function binaryReadMap4(guilds, pos, readUnknownField) {
  const sum = pos.pos + pos.uint32();
  let obj;
  let str;
  if (pos.pos < sum) {
    while (true) {
      let tmp5 = callback;
      let tmp6 = callback(pos.tag(), 2);
      [tmp7, r10020] = tmp6;
      let tmp8 = tmp2;
      str = tmp3;
      if (1 === tmp7) {
        let str3 = pos.fixed64();
        str = str3.toString();
        let internalBinaryReadResult = tmp2;
      } else if (2 !== tmp7) {
        break;
      } else {
        let tmp15 = declarativeNotifSettingType;
        internalBinaryReadResult = declarativeNotifSettingType.internalBinaryRead(pos, pos.uint32(), readUnknownField);
      }
      tmp2 = internalBinaryReadResult;
      tmp3 = str;
      obj = internalBinaryReadResult;
    }
    const _globalThis = globalThis;
    error = new Error(
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
    tag.tag(1, _mod1306.WireType.Bit64).fixed64(userId.userId);
    const tagResult = tag.tag(1, _mod1306.WireType.Bit64);
  }
  if (userId.emailSettings) {
    const tagResult1 = tag.tag(2, _mod1306.WireType.LengthDelimited);
    const joined = closure_3
      .internalBinaryWrite(
        userId.emailSettings,
        tag.tag(2, _mod1306.WireType.LengthDelimited).fork(),
        writeUnknownFields,
      )
      .join();
    const internalBinaryWriteResult = closure_3.internalBinaryWrite(
      userId.emailSettings,
      tag.tag(2, _mod1306.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    );
  }
  if (userId.flags) {
    const UInt64Value = defineProperty.UInt64Value;
    const tagResult2 = tag.tag(6, _mod1306.WireType.LengthDelimited);
    const joined1 = UInt64Value.internalBinaryWrite(
      userId.flags,
      tag.tag(6, _mod1306.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    ).join();
    const internalBinaryWriteResult1 = UInt64Value.internalBinaryWrite(
      userId.flags,
      tag.tag(6, _mod1306.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    );
  }
  const keys = Object.keys(userId.guilds);
  const iter = keys[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp13 = require;
    let tmp14 = dependencyMap;
    let tagResult3 = tag.tag(4, _mod1306.WireType.LengthDelimited);
    let forkResult = tagResult3.fork();
    let tagResult4 = forkResult.tag(1, _mod1306.WireType.Bit64);
    let fixed64Result1 = tagResult4.fixed64(nextResult);
    let tagResult5 = tag.tag(2, _mod1306.WireType.LengthDelimited);
    let forkResult1 = tagResult5.fork();
    let tmp17 = declarativeNotifSettingType;
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
    tag.tag(5, _mod1306.WireType.Varint).uint32(userId.version);
    const tagResult6 = tag.tag(5, _mod1306.WireType.Varint);
  }
  if (userId.data) {
    const tagResult7 = tag.tag(7, _mod1306.WireType.LengthDelimited);
    const joined4 = items1
      .internalBinaryWrite(userId.data, tag.tag(7, _mod1306.WireType.LengthDelimited).fork(), writeUnknownFields)
      .join();
    const internalBinaryWriteResult3 = items1.internalBinaryWrite(
      userId.data,
      tag.tag(7, _mod1306.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    );
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = _mod1306.UnknownFieldHandler.onWrite;
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
      return closure_3;
    },
  },
  {
    no: 6,
    name: "flags",
    kind: "message",
    T() {
      return callback(table[2]).UInt64Value;
    },
  },
  ,
  ,
];
let obj = {
  kind: "message",
  T() {
    return closure_7;
  },
};
items[3] = { no: 4, name: "guilds", kind: "map", K: 6, V: obj };
items[4] = { no: 5, name: "version", kind: "scalar", T: 13 };
obj = { no: 7, name: "data", kind: "message", T: null };
class T {
  constructor() {
    return closure_4;
  }
}
obj[3] = T;
items[5] = obj;
let tmp6 = new "binaryReadMap4"("discord_protos.discord_notifications.v1.UserNotificationSettings", items, tmp4, tmp3);
// ThrowIfThisInitialized (0x7c)
class EmailNotificationSettings$Type extends MessageType2 {
  constructor() {
    items = [];
    items[0] = { no: 1, name: "categories", kind: "map", K: 9, V: { kind: "scalar", T: 8 } };
    tmp = new tmp("discord_protos.discord_notifications.v1.EmailNotificationSettings", items, new.target);
    // ThrowIfThisInitialized (0x7c)
    return tmp;
  }
}
const prototype2 = EmailNotificationSettings$Type.prototype;
prototype2["create"] = function create(arr) {
  let obj = { categories: {} };
  const _Object = Object;
  obj = { enumerable: false, value: this };
  _Object.defineProperty(obj, _mod1306.MESSAGE_TYPE, obj);
  if (undefined !== arr) {
    const result = _mod1306.reflectionMergePartial(this, obj, arr);
    const tmpResult = _mod1306;
  }
  return obj;
};
prototype2["internalBinaryRead"] = function internalBinaryRead(pos, arg1, readUnknownField) {
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
              onRead = _mod1306.UnknownFieldHandler.onRead;
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
prototype2["binaryReadMap1"] = function binaryReadMap1(arg0, pos) {
  const sum = pos.pos + pos.uint32();
  let flag;
  let str;
  if (pos.pos < sum) {
    while (true) {
      let tmp4 = callback;
      let tmp5 = callback(pos.tag(), 2);
      [tmp6, r10019] = tmp5;
      let tmp7 = tmp2;
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
    error = new Error(
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
    let tmp3 = require;
    let tmp4 = dependencyMap;
    let tagResult = tag.tag(1, _mod1306.WireType.LengthDelimited);
    let forkResult = tagResult.fork();
    let tagResult1 = forkResult.tag(1, _mod1306.WireType.LengthDelimited);
    let stringResult = tagResult1.string(nextResult);
    let tagResult2 = stringResult.tag(2, _mod1306.WireType.Varint);
    let boolResult = tagResult2.bool(categories.categories[nextResult]);
    let joined = boolResult.join();
    continue;
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = _mod1306.UnknownFieldHandler.onWrite;
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
// ThrowIfThisInitialized (0x7c)
let closure_3 = t;
class UserNotificationSettingsData$Type extends MessageType3 {
  constructor() {
    items = [,];
    items[0] = { no: 1, name: "muted_games", kind: "map", K: 6, V: { kind: "scalar", T: 8 } };
    items[1] = {
      no: 2,
      name: "declarative_settings",
      kind: "message",
      T() {
        return closure_5;
      },
    };
    tmp = new tmp("discord_protos.discord_notifications.v1.UserNotificationSettingsData", items, new.target);
    // ThrowIfThisInitialized (0x7c)
    return tmp;
  }
}
const prototype3 = UserNotificationSettingsData$Type.prototype;
prototype3["create"] = function create(arr) {
  let obj = { mutedGames: {} };
  const _Object = Object;
  obj = { enumerable: false, value: this };
  _Object.defineProperty(obj, _mod1306.MESSAGE_TYPE, obj);
  if (undefined !== arr) {
    const result = _mod1306.reflectionMergePartial(this, obj, arr);
    const tmpResult = _mod1306;
  }
  return obj;
};
prototype3["internalBinaryRead"] = function internalBinaryRead(pos, arg1, readUnknownField) {
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
        let binaryReadMap1Result = self.binaryReadMap1(obj.mutedGames, pos, readUnknownField);
      } else if (2 === tmp5) {
        let tmp22 = items11;
        let tmp23 = items11;
        let tmp24 = pos;
        let tmp25 = readUnknownField;
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
              onRead = _mod1306.UnknownFieldHandler.onRead;
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
prototype3["binaryReadMap1"] = function binaryReadMap1(arg0, pos) {
  const sum = pos.pos + pos.uint32();
  let flag;
  let str;
  if (pos.pos < sum) {
    while (true) {
      let tmp4 = callback;
      let tmp5 = callback(pos.tag(), 2);
      [tmp6, r10019] = tmp5;
      let tmp7 = tmp2;
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
    error = new Error(
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
    let tmp3 = require;
    let tmp4 = dependencyMap;
    let tagResult = tag.tag(1, _mod1306.WireType.LengthDelimited);
    let forkResult = tagResult.fork();
    let tagResult1 = forkResult.tag(1, _mod1306.WireType.Bit64);
    let fixed64Result = tagResult1.fixed64(nextResult);
    let tagResult2 = fixed64Result.tag(2, _mod1306.WireType.Varint);
    let boolResult = tagResult2.bool(mutedGames.mutedGames[nextResult]);
    let joined = boolResult.join();
    continue;
  }
  if (mutedGames.declarativeSettings) {
    const tagResult3 = tag.tag(2, _mod1306.WireType.LengthDelimited);
    const joined1 = items11
      .internalBinaryWrite(
        mutedGames.declarativeSettings,
        tag.tag(2, _mod1306.WireType.LengthDelimited).fork(),
        writeUnknownFields,
      )
      .join();
    const internalBinaryWriteResult = items11.internalBinaryWrite(
      mutedGames.declarativeSettings,
      tag.tag(2, _mod1306.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    );
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = _mod1306.UnknownFieldHandler.onWrite;
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
      return closure_5;
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
// ThrowIfThisInitialized (0x7c)
class DeclarativeSettings$Type extends MessageType4 {
  constructor() {
    obj = {
      no: 1,
      name: "versions",
      kind: "message",
      T() {
        return callback(table[3]).Versions;
      },
    };
    items = [,];
    items[0] = obj;
    obj = { no: 2, name: "values", kind: "map", K: 13, V: null };
    obj1 = { kind: "message", T: null };
    class T {
      constructor() {
        return closure_6;
      }
    }
    obj1[1] = T;
    obj[4] = obj1;
    items[1] = obj;
    tmp = new tmp("discord_protos.discord_notifications.v1.DeclarativeSettings", items, T);
    // ThrowIfThisInitialized (0x7c)
    return tmp;
  }
}
const prototype4 = DeclarativeSettings$Type.prototype;
prototype4["create"] = function create(arr) {
  let obj = { values: {} };
  const _Object = Object;
  obj = { enumerable: false, value: this };
  _Object.defineProperty(obj, _mod1306.MESSAGE_TYPE, obj);
  if (undefined !== arr) {
    const result = _mod1306.reflectionMergePartial(this, obj, arr);
    const tmpResult = _mod1306;
  }
  return obj;
};
prototype4["internalBinaryRead"] = function internalBinaryRead(pos, arg1, readUnknownField) {
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
        let tmp23 = require;
        let tmp24 = dependencyMap;
        let Versions = create2.Versions;
        let tmp25 = Versions;
        let tmp26 = pos;
        let tmp27 = readUnknownField;
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
              onRead = _mod1306.UnknownFieldHandler.onRead;
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
prototype4["binaryReadMap2"] = function binaryReadMap2(arg0, pos) {
  const sum = pos.pos + pos.uint32();
  let obj;
  let num;
  if (pos.pos < sum) {
    while (true) {
      let tmp5 = callback;
      let tmp6 = callback(pos.tag(), 2);
      [tmp7, r10020] = tmp6;
      let tmp8 = tmp2;
      let uint32Result = tmp3;
      if (1 === tmp7) {
        uint32Result = pos.uint32();
        let internalBinaryReadResult = tmp2;
      } else if (2 !== tmp7) {
        break;
      } else {
        let tmp15 = declarativeSettingsType;
        internalBinaryReadResult = declarativeSettingsType.internalBinaryRead(pos, pos.uint32(), arg2);
      }
      tmp2 = internalBinaryReadResult;
      tmp3 = uint32Result;
      obj = internalBinaryReadResult;
      num = uint32Result;
    }
    const _globalThis = globalThis;
    error = new Error(
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
    const Versions = create2.Versions;
    const tagResult = tag.tag(1, _mod1306.WireType.LengthDelimited);
    const joined = Versions.internalBinaryWrite(
      versions.versions,
      tag.tag(1, _mod1306.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    ).join();
    const internalBinaryWriteResult = Versions.internalBinaryWrite(
      versions.versions,
      tag.tag(1, _mod1306.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    );
  }
  const keys = Object.keys(versions.values);
  const iter = keys[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp6 = require;
    let tmp7 = dependencyMap;
    let tagResult1 = tag.tag(2, _mod1306.WireType.LengthDelimited);
    let forkResult = tagResult1.fork();
    let tagResult2 = forkResult.tag(1, _mod1306.WireType.Varint);
    let _parseInt = parseInt;
    let uint32Result = tagResult2.uint32(parseInt(nextResult));
    let tagResult3 = tag.tag(2, _mod1306.WireType.LengthDelimited);
    let forkResult1 = tagResult3.fork();
    let tmp10 = declarativeSettingsType;
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
      onWrite = _mod1306.UnknownFieldHandler.onWrite;
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
    return callback(table[3]).Versions;
  },
};
const items3 = [obj];
const obj1 = { no: 2, name: "values", kind: "map", K: 13, V: null };
const obj2 = { kind: "message", T: null };
class T {
  constructor() {
    return closure_6;
  }
}
obj2[1] = T;
obj1[4] = obj2;
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
  arg1,
  dependencyMap,
);
// ThrowIfThisInitialized (0x7c)
class DeclarativeNotifSetting$Type extends MessageType5 {
  constructor() {
    items = [,];
    items[0] = { no: 1, name: "toggle", kind: "scalar", T: 8 };
    items[1] = { no: 2, name: "radio", kind: "scalar", T: 13 };
    tmp = new tmp("discord_protos.discord_notifications.v1.DeclarativeNotifSetting", items, new.target);
    // ThrowIfThisInitialized (0x7c)
    return tmp;
  }
}
const prototype5 = DeclarativeNotifSetting$Type.prototype;
prototype5["create"] = function create(arr) {
  let obj = { toggle: false, radio: 0 };
  const _Object = Object;
  obj = { enumerable: false, value: this };
  _Object.defineProperty(obj, _mod1306.MESSAGE_TYPE, obj);
  if (undefined !== arr) {
    const result = _mod1306.reflectionMergePartial(this, obj, arr);
    const tmpResult = _mod1306;
  }
  return obj;
};
prototype5["internalBinaryRead"] = function internalBinaryRead(pos, arg1, readUnknownField) {
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
              onRead = _mod1306.UnknownFieldHandler.onRead;
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
prototype5["internalBinaryWrite"] = function internalBinaryWrite(toggle, tag, writeUnknownFields) {
  if (false !== toggle.toggle) {
    tag.tag(1, _mod1306.WireType.Varint).bool(toggle.toggle);
    const tagResult = tag.tag(1, _mod1306.WireType.Varint);
  }
  if (0 !== toggle.radio) {
    tag.tag(2, _mod1306.WireType.Varint).uint32(toggle.radio);
    const tagResult1 = tag.tag(2, _mod1306.WireType.Varint);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = _mod1306.UnknownFieldHandler.onWrite;
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
  arg1,
  dependencyMap,
  new.target,
  tmp6,
  t,
);
// ThrowIfThisInitialized (0x7c)
class GuildNotificationSettings$Type extends MessageType6 {
  constructor() {
    items = [, , , , , , , , ,];
    items[0] = { no: 1, name: "suppress_everyone", kind: "scalar", T: 8 };
    items[1] = { no: 2, name: "message_notifications", kind: "scalar", T: 13 };
    items[2] = { no: 3, name: "mobile_push", kind: "scalar", T: 8 };
    obj = { no: 4, name: "mute", kind: "message", T: null };
    class T {
      constructor() {
        return require("create").MuteNotificationSettings;
      }
    }
    obj[3] = T;
    items[3] = obj;
    items[4] = {
      no: 5,
      name: "channel_overrides",
      kind: "message",
      repeat: 1,
      T() {
        return closure_8;
      },
    };
    items[5] = { no: 6, name: "suppress_roles", kind: "scalar", T: 8 };
    items[6] = { no: 7, name: "version", kind: "scalar", T: 13 };
    items[7] = { no: 8, name: "hide_muted_channels", kind: "scalar", T: 8 };
    items[8] = { no: 9, name: "mute_scheduled_events", kind: "scalar", T: 8 };
    items[9] = { no: 10, name: "notify_highlights", kind: "scalar", T: 13 };
    tmp = new tmp("discord_protos.discord_notifications.v1.GuildNotificationSettings", items, T);
    // ThrowIfThisInitialized (0x7c)
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
  _Object.defineProperty(obj, _mod1306.MESSAGE_TYPE, obj);
  if (undefined !== arr) {
    const result = _mod1306.reflectionMergePartial(this, obj, arr);
    const tmpResult = _mod1306;
  }
  return obj;
};
prototype6["internalBinaryRead"] = function internalBinaryRead(pos) {
  const self = this;
  let obj = arg3;
  if (arg3 == null) {
    obj = self.create();
  }
  const sum = pos.pos + arg1;
  if (pos.pos < sum) {
    obj.notifyHighlights = pos.uint32();
  }
  return obj;
};
prototype6["internalBinaryWrite"] = function internalBinaryWrite(suppressEveryone, tag, writeUnknownFields) {
  let length;
  if (false !== suppressEveryone.suppressEveryone) {
    tag.tag(1, _mod1306.WireType.Varint).bool(suppressEveryone.suppressEveryone);
    const tagResult = tag.tag(1, _mod1306.WireType.Varint);
  }
  if (0 !== suppressEveryone.messageNotifications) {
    tag.tag(2, _mod1306.WireType.Varint).uint32(suppressEveryone.messageNotifications);
    const tagResult1 = tag.tag(2, _mod1306.WireType.Varint);
  }
  if (false !== suppressEveryone.mobilePush) {
    tag.tag(3, _mod1306.WireType.Varint).bool(suppressEveryone.mobilePush);
    const tagResult2 = tag.tag(3, _mod1306.WireType.Varint);
  }
  if (suppressEveryone.mute) {
    const MuteNotificationSettings = create3.MuteNotificationSettings;
    const tagResult3 = tag.tag(4, _mod1306.WireType.LengthDelimited);
    const joined = MuteNotificationSettings.internalBinaryWrite(
      suppressEveryone.mute,
      tag.tag(4, _mod1306.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    ).join();
    const internalBinaryWriteResult = MuteNotificationSettings.internalBinaryWrite(
      suppressEveryone.mute,
      tag.tag(4, _mod1306.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    );
  }
  let num5 = 0;
  if (0 < suppressEveryone.channelOverrides.length) {
    do {
      let tmp13 = closure_8;
      let tmp14 = require;
      let tmp15 = dependencyMap;
      let tagResult4 = tag.tag(5, _mod1306.WireType.LengthDelimited);
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
    tag.tag(6, _mod1306.WireType.Varint).bool(suppressEveryone.suppressRoles);
    const tagResult5 = tag.tag(6, _mod1306.WireType.Varint);
  }
  if (0 !== suppressEveryone.version) {
    tag.tag(7, _mod1306.WireType.Varint).uint32(suppressEveryone.version);
    const tagResult6 = tag.tag(7, _mod1306.WireType.Varint);
  }
  if (false !== suppressEveryone.hideMutedChannels) {
    tag.tag(8, _mod1306.WireType.Varint).bool(suppressEveryone.hideMutedChannels);
    const tagResult7 = tag.tag(8, _mod1306.WireType.Varint);
  }
  if (false !== suppressEveryone.muteScheduledEvents) {
    tag.tag(9, _mod1306.WireType.Varint).bool(suppressEveryone.muteScheduledEvents);
    const tagResult8 = tag.tag(9, _mod1306.WireType.Varint);
  }
  if (0 !== suppressEveryone.notifyHighlights) {
    tag.tag(10, _mod1306.WireType.Varint).uint32(suppressEveryone.notifyHighlights);
    const tagResult9 = tag.tag(10, _mod1306.WireType.Varint);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = _mod1306.UnknownFieldHandler.onWrite;
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
      return callback(table[4]).MuteNotificationSettings;
    },
  },
  {
    no: 5,
    name: "channel_overrides",
    kind: "message",
    repeat: 1,
    T() {
      return closure_8;
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
  arg1,
  dependencyMap,
  new.target,
  tmp6,
  t,
  items1,
  items11,
);
// ThrowIfThisInitialized (0x7c)
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
        return callback(table[4]).MuteNotificationSettings;
      },
    };
    items[3] = { no: 4, name: "collapsed", kind: "scalar", T: 8 };
    tmp = new tmp("discord_protos.discord_notifications.v1.ChannelNotificationSettings", items, new.target);
    // ThrowIfThisInitialized (0x7c)
    return tmp;
  }
}
const prototype7 = ChannelNotificationSettings$Type.prototype;
prototype7["create"] = function create(arr) {
  let obj = { channelId: "0", messageNotifications: 0, collapsed: false };
  const _Object = Object;
  obj = { enumerable: false, value: this };
  _Object.defineProperty(obj, _mod1306.MESSAGE_TYPE, obj);
  if (undefined !== arr) {
    const result = _mod1306.reflectionMergePartial(this, obj, arr);
    const tmpResult = _mod1306;
  }
  return obj;
};
prototype7["internalBinaryRead"] = function internalBinaryRead(pos, arg1, readUnknownField) {
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
        obj.channelId = str4.toString();
      } else if (7 === tmp5) {
        obj.messageNotifications = pos.uint32();
      } else if (3 === tmp5) {
        let tmp22 = require;
        let tmp23 = dependencyMap;
        let MuteNotificationSettings = create3.MuteNotificationSettings;
        let tmp24 = MuteNotificationSettings;
        let tmp25 = pos;
        let tmp26 = readUnknownField;
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
              onRead = _mod1306.UnknownFieldHandler.onRead;
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
prototype7["internalBinaryWrite"] = function internalBinaryWrite(channelId, tag, writeUnknownFields) {
  if ("0" !== channelId.channelId) {
    tag.tag(1, _mod1306.WireType.Bit64).fixed64(channelId.channelId);
    const tagResult = tag.tag(1, _mod1306.WireType.Bit64);
  }
  if (0 !== channelId.messageNotifications) {
    tag.tag(7, _mod1306.WireType.Varint).uint32(channelId.messageNotifications);
    const tagResult1 = tag.tag(7, _mod1306.WireType.Varint);
  }
  if (channelId.mute) {
    const MuteNotificationSettings = create3.MuteNotificationSettings;
    const tagResult2 = tag.tag(3, _mod1306.WireType.LengthDelimited);
    const joined = MuteNotificationSettings.internalBinaryWrite(
      channelId.mute,
      tag.tag(3, _mod1306.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    ).join();
    const internalBinaryWriteResult = MuteNotificationSettings.internalBinaryWrite(
      channelId.mute,
      tag.tag(3, _mod1306.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    );
  }
  if (false !== channelId.collapsed) {
    tag.tag(4, _mod1306.WireType.Varint).bool(channelId.collapsed);
    const tagResult3 = tag.tag(4, _mod1306.WireType.Varint);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = _mod1306.UnknownFieldHandler.onWrite;
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
      return callback(table[4]).MuteNotificationSettings;
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
  arg1,
  dependencyMap,
  new.target,
  tmp6,
  t,
);
// ThrowIfThisInitialized (0x7c)
let closure_8 = tmp12;
let result = require("set").fileFinishedImporting(
  "../discord_common/js/packages/protos/discord_protos/discord_notifications/v1/notification_settings.tsx",
);

export const UserNotificationSettings = tmp6;
export const EmailNotificationSettings = t;
export const UserNotificationSettingsData = items1;
export const DeclarativeSettings = items11;
export const DeclarativeNotifSetting = declarativeSettingsType;
export const GuildNotificationSettings = declarativeNotifSettingType;
export const ChannelNotificationSettings = tmp12;
