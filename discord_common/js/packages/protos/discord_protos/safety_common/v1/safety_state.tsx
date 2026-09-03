// === Module 1930: create ===

// Module 1930 (create)
import _mod1306 from "module_1306" /* 1306 */;
import now from "now" /* 1335 */;
import defineProperty from "defineProperty" /* 1336 */;
import closure_2 from "_slicedToArray" /* 32 */;
import { MessageType, MessageType as MessageType2, MessageType as MessageType3, MessageType as MessageType4, MessageType as MessageType5, MessageType as MessageType6 } from "module_1306" /* 1306 */;

require = arg1;
let obj = { REASON_UNSPECIFIED: 0, [0]: "REASON_UNSPECIFIED", DISABLED_SUSPICIOUS_ACTIVITY: 1, [1]: "DISABLED_SUSPICIOUS_ACTIVITY", SMITE_REMOVE_EMAIL_VERIFICATION: 2, [2]: "SMITE_REMOVE_EMAIL_VERIFICATION", USER_REQUIRED_VERIFICATION_INTERVENTIONS_CLIENT: 3, [3]: "USER_REQUIRED_VERIFICATION_INTERVENTIONS_CLIENT", ACTIVE_ASSIGNMENT_COMPLETED: 4, [4]: "ACTIVE_ASSIGNMENT_COMPLETED", ACTIVE_ASSIGNMENT_CREATED: 5, [5]: "ACTIVE_ASSIGNMENT_CREATED", DEFERRED_ASSIGNMENT_CREATED: 6, [6]: "DEFERRED_ASSIGNMENT_CREATED", DEFERRED_ASSIGNMENT_UPGRADED_TO_ACTIVE: 7, [7]: "DEFERRED_ASSIGNMENT_UPGRADED_TO_ACTIVE", DEFERRED_ASSIGNMENT_CANCELLED: 8, [8]: "DEFERRED_ASSIGNMENT_CANCELLED", ASSIGNMENT_STATE_REPAIRED: 9, [9]: "ASSIGNMENT_STATE_REPAIRED", MANUAL_PERMANENT_BAN: 10, [10]: "MANUAL_PERMANENT_BAN", SAFETY_SYSTEM_UNBAN: 11, [11]: "SAFETY_SYSTEM_UNBAN", GENERIC_AUTOMATED_SAFETY_ACTION: 12, [12]: "GENERIC_AUTOMATED_SAFETY_ACTION", GENERIC_MANUAL_SAFETY_ACTION: 13, [13]: "GENERIC_MANUAL_SAFETY_ACTION", BANNED_USER_BACKFILL: 14, [14]: "BANNED_USER_BACKFILL" };
obj = { ANNOTATION_UNSPECIFIED: 0, [0]: "ANNOTATION_UNSPECIFIED", SPAMMER: 1, [1]: "SPAMMER", SELF_DELETED: 2, [2]: "SELF_DELETED", SELF_DISABLED: 3, [3]: "SELF_DISABLED", UNDERAGE_DELETED: 4, [4]: "UNDERAGE_DELETED", SAFETY_POLICY_VIOLATION: 5, [5]: "SAFETY_POLICY_VIOLATION", INACTIVITY_DELETED: 6, [6]: "INACTIVITY_DELETED", GENERIC_DELETED: 7, [7]: "GENERIC_DELETED" };
class NormalState$Type extends MessageType {
  constructor() {
    tmp = new tmp("discord_protos.safety_common.v1.NormalState", [], new.target);
    // ThrowIfThisInitialized (0x7c)
    return tmp;
  }
}
const prototype = NormalState$Type.prototype;
prototype["create"] = function create(arr) {
  obj = {};
  const _Object = Object;
  obj = { enumerable: false, value: this };
  _Object.defineProperty(obj, _mod1306.MESSAGE_TYPE, obj);
  if (undefined !== arr) {
    const result = _mod1306.reflectionMergePartial(this, obj, arr);
    const tmpResult = _mod1306;
  }
  return obj;
};
prototype["internalBinaryRead"] = function internalBinaryRead(arg0, arg1, arg2, arg3) {
  obj = arg3;
  if (arg3 == null) {
    const self = this;
    obj = this.create();
  }
  return obj;
};
prototype["internalBinaryWrite"] = function internalBinaryWrite(arg0, arg1, writeUnknownFields) {
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = _mod1306.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, arg0, arg1);
  }
  return arg1;
};
let object = new Object("discord_protos.safety_common.v1.NormalState", [], tmp7, tmp6, "create", "internalBinaryRead", tmp5, "internalBinaryWrite", tmp4, tmp3, arg1, dependencyMap, obj, obj, tmp2);
// ThrowIfThisInitialized (0x7c)
class RestrictedState$Type extends MessageType2 {
  constructor() {
    obj = {
      no: 1,
      name: "restricted_until",
      kind: "message",
      T() {
            return callback(table[2]).Timestamp;
          }
    };
    items = [];
    items[0] = obj;
    tmp = new tmp("discord_protos.safety_common.v1.RestrictedState", items, new.target);
    // ThrowIfThisInitialized (0x7c)
    return tmp;
  }
}
const prototype2 = RestrictedState$Type.prototype;
prototype2["create"] = function create(arr) {
  obj = {};
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
  obj = arg3;
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
        let tmp22 = require;
        let tmp23 = dependencyMap;
        let Timestamp = now.Timestamp;
        let tmp24 = Timestamp;
        let tmp25 = pos;
        let tmp26 = readUnknownField;
        obj.restrictedUntil = Timestamp.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.restrictedUntil);
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
prototype2["internalBinaryWrite"] = function internalBinaryWrite(restrictedUntil, tag, writeUnknownFields) {
  if (restrictedUntil.restrictedUntil) {
    const Timestamp = now.Timestamp;
    const tagResult = tag.tag(1, _mod1306.WireType.LengthDelimited);
    const joined = Timestamp.internalBinaryWrite(restrictedUntil.restrictedUntil, tag.tag(1, _mod1306.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult = Timestamp.internalBinaryWrite(restrictedUntil.restrictedUntil, tag.tag(1, _mod1306.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = _mod1306.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, restrictedUntil, tag);
  }
  return tag;
};
obj = {
  no: 1,
  name: "restricted_until",
  kind: "message",
  T() {
    return callback(table[2]).Timestamp;
  }
};
let items = [obj];
object = new Object("discord_protos.safety_common.v1.RestrictedState", items, tmp7, tmp6, "create", "internalBinaryRead", tmp5, "internalBinaryWrite", tmp4, undefined, arg1, dependencyMap, obj, obj, object);
// ThrowIfThisInitialized (0x7c)
class DeferredActionState$Type extends MessageType3 {
  constructor() {
    obj = {
      no: 1,
      name: "action_deferred_until",
      kind: "message",
      T() {
            return callback(table[2]).Timestamp;
          }
    };
    items = [];
    items[0] = obj;
    tmp = new tmp("discord_protos.safety_common.v1.DeferredActionState", items, new.target);
    // ThrowIfThisInitialized (0x7c)
    return tmp;
  }
}
const prototype3 = DeferredActionState$Type.prototype;
prototype3["create"] = function create(arr) {
  obj = {};
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
  obj = arg3;
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
        let tmp22 = require;
        let tmp23 = dependencyMap;
        let Timestamp = now.Timestamp;
        let tmp24 = Timestamp;
        let tmp25 = pos;
        let tmp26 = readUnknownField;
        obj.actionDeferredUntil = Timestamp.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.actionDeferredUntil);
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
prototype3["internalBinaryWrite"] = function internalBinaryWrite(actionDeferredUntil, tag, writeUnknownFields) {
  if (actionDeferredUntil.actionDeferredUntil) {
    const Timestamp = now.Timestamp;
    const tagResult = tag.tag(1, _mod1306.WireType.LengthDelimited);
    const joined = Timestamp.internalBinaryWrite(actionDeferredUntil.actionDeferredUntil, tag.tag(1, _mod1306.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult = Timestamp.internalBinaryWrite(actionDeferredUntil.actionDeferredUntil, tag.tag(1, _mod1306.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = _mod1306.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, actionDeferredUntil, tag);
  }
  return tag;
};
let obj1 = {
  no: 1,
  name: "action_deferred_until",
  kind: "message",
  T() {
    return callback(table[2]).Timestamp;
  }
};
const items1 = [obj1];
const object1 = new Object("discord_protos.safety_common.v1.DeferredActionState", items1, tmp7, tmp6, "create", "internalBinaryRead", tmp5, "internalBinaryWrite", DeferredActionState$Type, undefined, arg1, dependencyMap, obj, obj, object, object, Object, items1, new.target, tmp, exports, obj1);
// ThrowIfThisInitialized (0x7c)
class TempBannedState$Type extends MessageType4 {
  constructor() {
    obj = {
      no: 1,
      name: "banned_until",
      kind: "message",
      T() {
            return callback(1335).Timestamp;
          }
    };
    items = [, , ];
    items[0] = obj;
    obj = { no: 2, name: "classification_types", kind: "enum", repeat: 1, T: null };
    class T {
      constructor() {
        items = ["discord_protos.safety_common.v1.ClassificationType"];
        items[1] = require("ClassificationType").ClassificationType;
        return items;
      }
    }
    obj[4] = T;
    items[1] = obj;
    items[2] = {
      no: 3,
      name: "banned_at",
      kind: "message",
      T() {
            return callback(1335).Timestamp;
          }
    };
    tmp = new tmp("discord_protos.safety_common.v1.TempBannedState", items, T);
    // ThrowIfThisInitialized (0x7c)
    return tmp;
  }
}
const prototype4 = TempBannedState$Type.prototype;
prototype4["create"] = function create(arr) {
  obj = { classificationTypes: [] };
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
  obj = arg3;
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
        let tmp32 = require;
        let tmp33 = dependencyMap;
        let Timestamp2 = now.Timestamp;
        let tmp34 = Timestamp2;
        let tmp35 = pos;
        let tmp36 = readUnknownField;
        obj.bannedUntil = Timestamp2.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.bannedUntil);
      } else if (2 === tmp5) {
        let tmp27 = require;
        let tmp28 = dependencyMap;
        if (tmp6 === _mod1306.WireType.LengthDelimited) {
          let sum1 = pos.int32() + pos.pos;
          if (pos.pos < sum1) {
            do {
              let classificationTypes = obj.classificationTypes;
              let arr = classificationTypes.push(pos.int32());
              pos = pos.pos;
            } while (pos < sum1);
          }
        } else {
          let classificationTypes1 = obj.classificationTypes;
          arr = classificationTypes1.push(pos.int32());
        }
      } else if (3 === tmp5) {
        let tmp22 = require;
        let tmp23 = dependencyMap;
        let Timestamp = now.Timestamp;
        let tmp24 = Timestamp;
        let tmp25 = pos;
        let tmp26 = readUnknownField;
        obj.bannedAt = Timestamp.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.bannedAt);
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
prototype4["internalBinaryWrite"] = function internalBinaryWrite(bannedUntil, tag, writeUnknownFields) {
  let length;
  if (bannedUntil.bannedUntil) {
    const Timestamp = now.Timestamp;
    const tagResult = tag.tag(1, _mod1306.WireType.LengthDelimited);
    const joined = Timestamp.internalBinaryWrite(bannedUntil.bannedUntil, tag.tag(1, _mod1306.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult = Timestamp.internalBinaryWrite(bannedUntil.bannedUntil, tag.tag(1, _mod1306.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (bannedUntil.classificationTypes.length) {
    tag.tag(2, _mod1306.WireType.LengthDelimited).fork();
    let num3 = 0;
    if (0 < bannedUntil.classificationTypes.length) {
      do {
        let int32Result = tag.int32(bannedUntil.classificationTypes[num3]);
        num3 = num3 + 1;
        length = bannedUntil.classificationTypes.length;
      } while (num3 < length);
    }
    const joined1 = tag.join();
    const tagResult1 = tag.tag(2, _mod1306.WireType.LengthDelimited);
  }
  if (bannedUntil.bannedAt) {
    const Timestamp2 = now.Timestamp;
    const tagResult2 = tag.tag(3, _mod1306.WireType.LengthDelimited);
    const joined2 = Timestamp2.internalBinaryWrite(bannedUntil.bannedAt, tag.tag(3, _mod1306.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult1 = Timestamp2.internalBinaryWrite(bannedUntil.bannedAt, tag.tag(3, _mod1306.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = _mod1306.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, bannedUntil, tag);
  }
  return tag;
};
const items2 = [
  {
    no: 1,
    name: "banned_until",
    kind: "message",
    T() {
      return callback(1335).Timestamp;
    }
  },
  {
    no: 2,
    name: "classification_types",
    kind: "enum",
    repeat: 1,
    T() {
      const items = ["discord_protos.safety_common.v1.ClassificationType", callback(1931).ClassificationType];
      return items;
    }
  },

];
let obj3 = {
  no: 3,
  name: "banned_at",
  kind: "message",
  T() {
    return callback(1335).Timestamp;
  }
};
items2[2] = obj3;
const deferredActionStateType = new DeferredActionState$Type("discord_protos.safety_common.v1.TempBannedState", items2, tmp7, tmp6, "create", "internalBinaryRead", TempBannedState$Type, "internalBinaryWrite", DeferredActionState$Type, undefined, arg1, dependencyMap, obj, obj, object, object, object1, items2, new.target, tmp, exports, obj3, undefined, 7);
// ThrowIfThisInitialized (0x7c)
class BannedState$Type extends MessageType5 {
  constructor() {
    obj = {
      no: 1,
      name: "classification_types",
      kind: "enum",
      repeat: 1,
      T() {
            const items = ["discord_protos.safety_common.v1.ClassificationType", callback(1931).ClassificationType];
            return items;
          }
    };
    items = [, ];
    items[0] = obj;
    items[1] = {
      no: 2,
      name: "banned_at",
      kind: "message",
      T() {
            return callback(1335).Timestamp;
          }
    };
    tmp = new tmp("discord_protos.safety_common.v1.BannedState", items, new.target);
    // ThrowIfThisInitialized (0x7c)
    return tmp;
  }
}
const prototype5 = BannedState$Type.prototype;
prototype5["create"] = function create(arr) {
  obj = { classificationTypes: [] };
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
  obj = arg3;
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
        let tmp27 = require;
        let tmp28 = dependencyMap;
        if (tmp6 === _mod1306.WireType.LengthDelimited) {
          let sum1 = pos.int32() + pos.pos;
          if (pos.pos < sum1) {
            do {
              let classificationTypes = obj.classificationTypes;
              let arr = classificationTypes.push(pos.int32());
              pos = pos.pos;
            } while (pos < sum1);
          }
        } else {
          let classificationTypes1 = obj.classificationTypes;
          arr = classificationTypes1.push(pos.int32());
        }
      } else if (2 === tmp5) {
        let tmp22 = require;
        let tmp23 = dependencyMap;
        let Timestamp = now.Timestamp;
        let tmp24 = Timestamp;
        let tmp25 = pos;
        let tmp26 = readUnknownField;
        obj.bannedAt = Timestamp.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.bannedAt);
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
prototype5["internalBinaryWrite"] = function internalBinaryWrite(classificationTypes, tag, writeUnknownFields) {
  let length;
  if (classificationTypes.classificationTypes.length) {
    tag.tag(1, _mod1306.WireType.LengthDelimited).fork();
    let num2 = 0;
    if (0 < classificationTypes.classificationTypes.length) {
      do {
        let int32Result = tag.int32(classificationTypes.classificationTypes[num2]);
        num2 = num2 + 1;
        length = classificationTypes.classificationTypes.length;
      } while (num2 < length);
    }
    const joined = tag.join();
    const tagResult = tag.tag(1, _mod1306.WireType.LengthDelimited);
  }
  if (classificationTypes.bannedAt) {
    const Timestamp = now.Timestamp;
    const tagResult1 = tag.tag(2, _mod1306.WireType.LengthDelimited);
    const joined1 = Timestamp.internalBinaryWrite(classificationTypes.bannedAt, tag.tag(2, _mod1306.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult = Timestamp.internalBinaryWrite(classificationTypes.bannedAt, tag.tag(2, _mod1306.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = _mod1306.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, classificationTypes, tag);
  }
  return tag;
};
const items3 = [
  {
    no: 1,
    name: "classification_types",
    kind: "enum",
    repeat: 1,
    T() {
      const items = ["discord_protos.safety_common.v1.ClassificationType", callback(1931).ClassificationType];
      return items;
    }
  },

];
const obj5 = {
  no: 2,
  name: "banned_at",
  kind: "message",
  T() {
    return callback(1335).Timestamp;
  }
};
items3[1] = obj5;
const tempBannedStateType = new TempBannedState$Type("discord_protos.safety_common.v1.BannedState", items3, tmp7, BannedState$Type, "create", "internalBinaryRead", TempBannedState$Type, "internalBinaryWrite", items3, undefined, arg1, dependencyMap, obj, obj, object, object, object1, deferredActionStateType, new.target, tmp, exports, obj5, undefined, 7, 6, 5, 4);
// ThrowIfThisInitialized (0x7c)
class SafetyState$Type extends MessageType6 {
  constructor() {
    obj = {
      no: 101,
      name: "normal",
      kind: "message",
      oneof: "state",
      T() {
            return closure_5;
          }
    };
    items = [, , , , , , , ];
    items[0] = obj;
    items[1] = {
      no: 102,
      name: "restricted",
      kind: "message",
      oneof: "state",
      T() {
            return closure_6;
          }
    };
    items[2] = {
      no: 103,
      name: "deferred_action",
      kind: "message",
      oneof: "state",
      T() {
            return closure_7;
          }
    };
    items[3] = {
      no: 104,
      name: "temp_banned",
      kind: "message",
      oneof: "state",
      T() {
            return closure_8;
          }
    };
    items[4] = {
      no: 105,
      name: "banned",
      kind: "message",
      oneof: "state",
      T() {
            return closure_9;
          }
    };
    items[5] = {
      no: 1,
      name: "reason",
      kind: "enum",
      T() {
            const items = ["discord_protos.safety_common.v1.SafetyStateReason", closure_3];
            return items;
          }
    };
    obj = { no: 2, name: "annotations", kind: "enum", repeat: 1, T: null };
    class T {
      constructor() {
        items = ["discord_protos.safety_common.v1.SafetyAnnotations"];
        items[1] = closure_4;
        return items;
      }
    }
    obj[4] = T;
    items[6] = obj;
    items[7] = {
      no: 3,
      name: "last_mutation_id",
      kind: "message",
      T() {
            return callback(table[4]).UInt64Value;
          }
    };
    tmp = new tmp("discord_protos.safety_common.v1.SafetyState", items, T);
    // ThrowIfThisInitialized (0x7c)
    return tmp;
  }
}
const prototype6 = SafetyState$Type.prototype;
prototype6["create"] = function create(arr) {
  obj = { state: { oneofKind: "Array" }, reason: 0, annotations: [] };
  const _Object = Object;
  obj = { enumerable: false, value: this };
  _Object.defineProperty(obj, _mod1306.MESSAGE_TYPE, obj);
  if (undefined !== arr) {
    const result = _mod1306.reflectionMergePartial(this, obj, arr);
    const tmpResult = _mod1306;
  }
  return obj;
};
prototype6["internalBinaryRead"] = function internalBinaryRead(pos, arg1, readUnknownField) {
  const self = this;
  obj = arg3;
  if (arg3 == null) {
    obj = self.create();
  }
  const sum = pos.pos + arg1;
  if (pos.pos < sum) {
    do {
      let tmp3 = callback;
      let tmp4 = callback(pos.tag(), 2);
      [tmp5, tmp6] = tmp4;
      if (101 === tmp5) {
        obj = { oneofKind: "normal", normal: null };
        let tmp48 = object;
        let tmp49 = object;
        let tmp50 = pos;
        let tmp51 = readUnknownField;
        obj[1] = object.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.state.normal);
        obj.state = obj;
      } else if (102 === tmp5) {
        obj1 = { oneofKind: "restricted", restricted: null };
        let tmp44 = object;
        let tmp45 = object;
        let tmp46 = pos;
        let tmp47 = readUnknownField;
        obj1[1] = object.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.state.restricted);
        obj.state = obj1;
      } else if (103 === tmp5) {
        let obj2 = { oneofKind: "deferredAction", deferredAction: null };
        let tmp40 = object1;
        let tmp41 = object1;
        let tmp42 = pos;
        let tmp43 = readUnknownField;
        obj2[1] = object1.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.state.deferredAction);
        obj.state = obj2;
      } else if (104 === tmp5) {
        let obj3 = { oneofKind: "tempBanned", tempBanned: null };
        let tmp36 = deferredActionStateType;
        let tmp37 = deferredActionStateType;
        let tmp38 = pos;
        let tmp39 = readUnknownField;
        obj3[1] = deferredActionStateType.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.state.tempBanned);
        obj.state = obj3;
      } else if (105 === tmp5) {
        obj = { oneofKind: "banned", banned: null };
        let tmp32 = tempBannedStateType;
        let tmp33 = tempBannedStateType;
        let tmp34 = pos;
        let tmp35 = readUnknownField;
        obj[1] = tempBannedStateType.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.state.banned);
        obj.state = obj;
      } else if (1 === tmp5) {
        obj.reason = pos.int32();
      } else if (2 === tmp5) {
        let tmp27 = require;
        let tmp28 = dependencyMap;
        if (tmp6 === _mod1306.WireType.LengthDelimited) {
          let sum1 = pos.int32() + pos.pos;
          if (pos.pos < sum1) {
            do {
              let annotations = obj.annotations;
              let arr = annotations.push(pos.int32());
              pos = pos.pos;
            } while (pos < sum1);
          }
        } else {
          let annotations1 = obj.annotations;
          arr = annotations1.push(pos.int32());
        }
      } else if (3 === tmp5) {
        let tmp22 = require;
        let tmp23 = dependencyMap;
        let UInt64Value = defineProperty.UInt64Value;
        let tmp24 = UInt64Value;
        let tmp25 = pos;
        let tmp26 = readUnknownField;
        obj.lastMutationId = UInt64Value.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.lastMutationId);
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
prototype6["internalBinaryWrite"] = function internalBinaryWrite(state, tag, writeUnknownFields) {
  let length;
  if ("normal" === state.state.oneofKind) {
    const tagResult = tag.tag(101, _mod1306.WireType.LengthDelimited);
    const joined = object.internalBinaryWrite(state.state.normal, tag.tag(101, _mod1306.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult = object.internalBinaryWrite(state.state.normal, tag.tag(101, _mod1306.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if ("restricted" === state.state.oneofKind) {
    const tagResult1 = tag.tag(102, _mod1306.WireType.LengthDelimited);
    const joined1 = object.internalBinaryWrite(state.state.restricted, tag.tag(102, _mod1306.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult1 = object.internalBinaryWrite(state.state.restricted, tag.tag(102, _mod1306.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if ("deferredAction" === state.state.oneofKind) {
    const tagResult2 = tag.tag(103, _mod1306.WireType.LengthDelimited);
    const joined2 = object1.internalBinaryWrite(state.state.deferredAction, tag.tag(103, _mod1306.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult2 = object1.internalBinaryWrite(state.state.deferredAction, tag.tag(103, _mod1306.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if ("tempBanned" === state.state.oneofKind) {
    const tagResult3 = tag.tag(104, _mod1306.WireType.LengthDelimited);
    const joined3 = deferredActionStateType.internalBinaryWrite(state.state.tempBanned, tag.tag(104, _mod1306.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult3 = deferredActionStateType.internalBinaryWrite(state.state.tempBanned, tag.tag(104, _mod1306.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if ("banned" === state.state.oneofKind) {
    const tagResult4 = tag.tag(105, _mod1306.WireType.LengthDelimited);
    const joined4 = tempBannedStateType.internalBinaryWrite(state.state.banned, tag.tag(105, _mod1306.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult4 = tempBannedStateType.internalBinaryWrite(state.state.banned, tag.tag(105, _mod1306.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (0 !== state.reason) {
    tag.tag(1, _mod1306.WireType.Varint).int32(state.reason);
    const tagResult5 = tag.tag(1, _mod1306.WireType.Varint);
  }
  if (state.annotations.length) {
    tag.tag(2, _mod1306.WireType.LengthDelimited).fork();
    let num9 = 0;
    if (0 < state.annotations.length) {
      do {
        let int32Result1 = tag.int32(state.annotations[num9]);
        num9 = num9 + 1;
        length = state.annotations.length;
      } while (num9 < length);
    }
    const joined5 = tag.join();
    const tagResult6 = tag.tag(2, _mod1306.WireType.LengthDelimited);
  }
  if (state.lastMutationId) {
    const UInt64Value = defineProperty.UInt64Value;
    const tagResult7 = tag.tag(3, _mod1306.WireType.LengthDelimited);
    const joined6 = UInt64Value.internalBinaryWrite(state.lastMutationId, tag.tag(3, _mod1306.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult5 = UInt64Value.internalBinaryWrite(state.lastMutationId, tag.tag(3, _mod1306.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = _mod1306.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, state, tag);
  }
  return tag;
};
const items4 = [
  {
    no: 101,
    name: "normal",
    kind: "message",
    oneof: "state",
    T() {
      return closure_5;
    }
  },
  {
    no: 102,
    name: "restricted",
    kind: "message",
    oneof: "state",
    T() {
      return closure_6;
    }
  },
  {
    no: 103,
    name: "deferred_action",
    kind: "message",
    oneof: "state",
    T() {
      return closure_7;
    }
  },
  {
    no: 104,
    name: "temp_banned",
    kind: "message",
    oneof: "state",
    T() {
      return closure_8;
    }
  },
  {
    no: 105,
    name: "banned",
    kind: "message",
    oneof: "state",
    T() {
      return closure_9;
    }
  },
  {
    no: 1,
    name: "reason",
    kind: "enum",
    T() {
      const items = ["discord_protos.safety_common.v1.SafetyStateReason", closure_3];
      return items;
    }
  },
,

];
const obj7 = { no: 2, name: "annotations", kind: "enum", repeat: 1, T: null };
class T {
  constructor() {
    items = ["discord_protos.safety_common.v1.SafetyAnnotations"];
    items[1] = closure_4;
    return items;
  }
}
obj7[4] = T;
items4[6] = obj7;
const obj8 = {
  no: 3,
  name: "last_mutation_id",
  kind: "message",
  T() {
    return callback(table[4]).UInt64Value;
  }
};
items4[7] = obj8;
// ThrowIfThisInitialized (0x7c)
let obj2 = {
  no: 1,
  name: "banned_until",
  kind: "message",
  T() {
    return callback(1335).Timestamp;
  }
};
const obj4 = {
  no: 1,
  name: "classification_types",
  kind: "enum",
  repeat: 1,
  T() {
    const items = ["discord_protos.safety_common.v1.ClassificationType", callback(1931).ClassificationType];
    return items;
  }
};
const obj6 = {
  no: 101,
  name: "normal",
  kind: "message",
  oneof: "state",
  T() {
    return closure_5;
  }
};
const tmp14 = new "internalBinaryWrite"("discord_protos.safety_common.v1.SafetyState", items4, tmp7, BannedState$Type, "create", T, SafetyState$Type, "internalBinaryWrite", items4, undefined, arg1, dependencyMap, obj, obj, object, object, object1, deferredActionStateType, tempBannedStateType, new.target, exports, obj8, undefined, 7);
let result = require("set").fileFinishedImporting("../discord_common/js/packages/protos/discord_protos/safety_common/v1/safety_state.tsx");

export const SafetyStateReason = obj;
export const SafetyAnnotations = obj;
export const NormalState = object;
export const RestrictedState = object;
export const DeferredActionState = object1;
export const TempBannedState = deferredActionStateType;
export const BannedState = tempBannedStateType;
export const SafetyState = tmp14;