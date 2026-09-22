// === Module 1381: safety_state ===

// Module 1381 (safety_state)
import _mod1187 from "module_1187" /* 1187 */;
import timestamp from "timestamp" /* 1216 */;
import wrappers from "wrappers" /* 1217 */;
import _slicedToArray from "module_32" /* 32 */;

require = fn;
const SafetyStateReason = { REASON_UNSPECIFIED: 0, [0]: "REASON_UNSPECIFIED", DISABLED_SUSPICIOUS_ACTIVITY: 1, [1]: "DISABLED_SUSPICIOUS_ACTIVITY", SMITE_REMOVE_EMAIL_VERIFICATION: 2, [2]: "SMITE_REMOVE_EMAIL_VERIFICATION", USER_REQUIRED_VERIFICATION_INTERVENTIONS_CLIENT: 3, [3]: "USER_REQUIRED_VERIFICATION_INTERVENTIONS_CLIENT", ACTIVE_ASSIGNMENT_COMPLETED: 4, [4]: "ACTIVE_ASSIGNMENT_COMPLETED", ACTIVE_ASSIGNMENT_CREATED: 5, [5]: "ACTIVE_ASSIGNMENT_CREATED", DEFERRED_ASSIGNMENT_CREATED: 6, [6]: "DEFERRED_ASSIGNMENT_CREATED", DEFERRED_ASSIGNMENT_UPGRADED_TO_ACTIVE: 7, [7]: "DEFERRED_ASSIGNMENT_UPGRADED_TO_ACTIVE", DEFERRED_ASSIGNMENT_CANCELLED: 8, [8]: "DEFERRED_ASSIGNMENT_CANCELLED", ASSIGNMENT_STATE_REPAIRED: 9, [9]: "ASSIGNMENT_STATE_REPAIRED", MANUAL_PERMANENT_BAN: 10, [10]: "MANUAL_PERMANENT_BAN", SAFETY_SYSTEM_UNBAN: 11, [11]: "SAFETY_SYSTEM_UNBAN", GENERIC_AUTOMATED_SAFETY_ACTION: 12, [12]: "GENERIC_AUTOMATED_SAFETY_ACTION", GENERIC_MANUAL_SAFETY_ACTION: 13, [13]: "GENERIC_MANUAL_SAFETY_ACTION", BANNED_USER_BACKFILL: 14, [14]: "BANNED_USER_BACKFILL" };
let obj2 = { ANNOTATION_UNSPECIFIED: 0, [0]: "ANNOTATION_UNSPECIFIED", SPAMMER: 1, [1]: "SPAMMER", SELF_DELETED: 2, [2]: "SELF_DELETED", SELF_DISABLED: 3, [3]: "SELF_DISABLED", UNDERAGE_DELETED: 4, [4]: "UNDERAGE_DELETED", SAFETY_POLICY_VIOLATION: 5, [5]: "SAFETY_POLICY_VIOLATION", INACTIVITY_DELETED: 6, [6]: "INACTIVITY_DELETED", GENERIC_DELETED: 7, [7]: "GENERIC_DELETED" };
const MessageType = fn(1187).MessageType;
class NormalState$Type extends MessageType {
  constructor() {
    tmp1 = new tmp("discord_protos.safety_common.v1.NormalState", [], new.target);
    return tmp1;
  }
}
const prototype = NormalState$Type.prototype;
prototype["create"] = function create(arr) {
  obj = {};
  const _Object = Object;
  _Object.defineProperty(obj, _mod1187.MESSAGE_TYPE, { enumerable: false, value: this });
  if (undefined !== arr) {
    const result = _mod1187.reflectionMergePartial(this, obj, arr);
    const tmpResult = _mod1187;
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
      onWrite = _mod1187.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, arg0, arg1);
  }
  return arg1;
};
const object = new Object("discord_protos.safety_common.v1.NormalState", [], tmp7, tmp6, "create", "internalBinaryRead", tmp5, "internalBinaryWrite", tmp4, tmp3, fn, dependencyMap, SafetyStateReason, obj2, tmp2);
const MessageType2 = fn(1187).MessageType;
class RestrictedState$Type extends MessageType2 {
  constructor() {
    obj = {
      no: 1,
      name: "restricted_until",
      kind: "message",
      T() {
            return require("timestamp").Timestamp;
          }
    };
    items = [];
    items[0] = obj;
    tmp1 = new tmp("discord_protos.safety_common.v1.RestrictedState", items, new.target);
    return tmp1;
  }
}
const prototype2 = RestrictedState$Type.prototype;
prototype2["create"] = function create(arr) {
  obj = {};
  const _Object = Object;
  _Object.defineProperty(obj, _mod1187.MESSAGE_TYPE, { enumerable: false, value: this });
  if (undefined !== arr) {
    const result = _mod1187.reflectionMergePartial(this, obj, arr);
    const tmpResult = _mod1187;
  }
  return obj;
};
prototype2["internalBinaryRead"] = function internalBinaryRead(pos, arg1, readUnknownField, arg3) {
  const self = this;
  obj = arg3;
  if (arg3 == null) {
    obj = self.create();
  }
  const sum = pos.pos + arg1;
  if (pos.pos < sum) {
    do {
      let tmp4 = _slicedToArray(pos.tag(), 2);
      [tmp5, tmp6] = tmp4;
      if (1 === tmp5) {
        let Timestamp = timestamp.Timestamp;
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
prototype2["internalBinaryWrite"] = function internalBinaryWrite(restrictedUntil, tag, writeUnknownFields) {
  if (restrictedUntil.restrictedUntil) {
    const Timestamp = timestamp.Timestamp;
    const tagResult = tag.tag(1, _mod1187.WireType.LengthDelimited);
    const joined = Timestamp.internalBinaryWrite(restrictedUntil.restrictedUntil, tag.tag(1, _mod1187.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult = Timestamp.internalBinaryWrite(restrictedUntil.restrictedUntil, tag.tag(1, _mod1187.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = _mod1187.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, restrictedUntil, tag);
  }
  return tag;
};
let items = [
  {
    no: 1,
    name: "restricted_until",
    kind: "message",
    T() {
      return require("timestamp").Timestamp;
    }
  }
];
const object3 = new Object("discord_protos.safety_common.v1.RestrictedState", items, tmp7, tmp6, "create", "internalBinaryRead", tmp5, "internalBinaryWrite", tmp4, undefined, fn, dependencyMap, SafetyStateReason, obj2, object);
const MessageType3 = fn(1187).MessageType;
class DeferredActionState$Type extends MessageType3 {
  constructor() {
    obj = {
      no: 1,
      name: "action_deferred_until",
      kind: "message",
      T() {
            return require("timestamp").Timestamp;
          }
    };
    items = [];
    items[0] = obj;
    tmp1 = new tmp("discord_protos.safety_common.v1.DeferredActionState", items, new.target);
    return tmp1;
  }
}
const prototype3 = DeferredActionState$Type.prototype;
prototype3["create"] = function create(arr) {
  obj = {};
  const _Object = Object;
  _Object.defineProperty(obj, _mod1187.MESSAGE_TYPE, { enumerable: false, value: this });
  if (undefined !== arr) {
    const result = _mod1187.reflectionMergePartial(this, obj, arr);
    const tmpResult = _mod1187;
  }
  return obj;
};
prototype3["internalBinaryRead"] = function internalBinaryRead(pos, arg1, readUnknownField, arg3) {
  const self = this;
  obj = arg3;
  if (arg3 == null) {
    obj = self.create();
  }
  const sum = pos.pos + arg1;
  if (pos.pos < sum) {
    do {
      let tmp4 = _slicedToArray(pos.tag(), 2);
      [tmp5, tmp6] = tmp4;
      if (1 === tmp5) {
        let Timestamp = timestamp.Timestamp;
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
prototype3["internalBinaryWrite"] = function internalBinaryWrite(actionDeferredUntil, tag, writeUnknownFields) {
  if (actionDeferredUntil.actionDeferredUntil) {
    const Timestamp = timestamp.Timestamp;
    const tagResult = tag.tag(1, _mod1187.WireType.LengthDelimited);
    const joined = Timestamp.internalBinaryWrite(actionDeferredUntil.actionDeferredUntil, tag.tag(1, _mod1187.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult = Timestamp.internalBinaryWrite(actionDeferredUntil.actionDeferredUntil, tag.tag(1, _mod1187.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = _mod1187.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, actionDeferredUntil, tag);
  }
  return tag;
};
let obj4 = {
  no: 1,
  name: "action_deferred_until",
  kind: "message",
  T() {
    return require("timestamp").Timestamp;
  }
};
const items1 = [obj4];
const object4 = new Object("discord_protos.safety_common.v1.DeferredActionState", items1, tmp7, tmp6, "create", "internalBinaryRead", tmp5, "internalBinaryWrite", DeferredActionState$Type, undefined, fn, dependencyMap, SafetyStateReason, obj2, object, object3, Object, items1, new.target, tmp, exports, obj4);
const MessageType4 = fn(1187).MessageType;
class TempBannedState$Type extends MessageType4 {
  constructor() {
    obj = {
      no: 1,
      name: "banned_until",
      kind: "message",
      T() {
            return require("timestamp").Timestamp;
          }
    };
    items = [, , ];
    items[0] = obj;
    obj1 = { no: 2, name: "classification_types", kind: "enum", repeat: 1, T: null };
    class T {
      constructor() {
        items = ["discord_protos.safety_common.v1.ClassificationType"];
        items[1] = closure_1_0(closure_1_1[3]).ClassificationType;
        return items;
      }
    }
    obj1.T = T;
    items[1] = obj1;
    items[2] = {
      no: 3,
      name: "banned_at",
      kind: "message",
      T() {
            return require("timestamp").Timestamp;
          }
    };
    tmp1 = new tmp("discord_protos.safety_common.v1.TempBannedState", items, T);
    return tmp1;
  }
}
const prototype4 = TempBannedState$Type.prototype;
prototype4["create"] = function create(arr) {
  obj = { classificationTypes: [] };
  const _Object = Object;
  _Object.defineProperty(obj, _mod1187.MESSAGE_TYPE, { enumerable: false, value: this });
  if (undefined !== arr) {
    const result = _mod1187.reflectionMergePartial(this, obj, arr);
    const tmpResult = _mod1187;
  }
  return obj;
};
prototype4["internalBinaryRead"] = function internalBinaryRead(pos, arg1, readUnknownField, arg3) {
  const self = this;
  obj = arg3;
  if (arg3 == null) {
    obj = self.create();
  }
  const sum = pos.pos + arg1;
  if (pos.pos < sum) {
    do {
      let tmp4 = _slicedToArray(pos.tag(), 2);
      [tmp5, tmp6] = tmp4;
      if (1 === tmp5) {
        let Timestamp2 = timestamp.Timestamp;
        obj.bannedUntil = Timestamp2.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.bannedUntil);
      } else if (2 === tmp5) {
        if (tmp6 === _mod1187.WireType.LengthDelimited) {
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
          let arr2 = classificationTypes1.push(pos.int32());
        }
      } else if (3 === tmp5) {
        let Timestamp = timestamp.Timestamp;
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
prototype4["internalBinaryWrite"] = function internalBinaryWrite(bannedUntil, tag, writeUnknownFields) {
  let length;
  if (bannedUntil.bannedUntil) {
    const Timestamp = timestamp.Timestamp;
    const tagResult = tag.tag(1, _mod1187.WireType.LengthDelimited);
    const joined = Timestamp.internalBinaryWrite(bannedUntil.bannedUntil, tag.tag(1, _mod1187.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult = Timestamp.internalBinaryWrite(bannedUntil.bannedUntil, tag.tag(1, _mod1187.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (bannedUntil.classificationTypes.length) {
    tag.tag(2, _mod1187.WireType.LengthDelimited).fork();
    let num3 = 0;
    if (0 < bannedUntil.classificationTypes.length) {
      do {
        let int32Result = tag.int32(bannedUntil.classificationTypes[num3]);
        num3 = num3 + 1;
        length = bannedUntil.classificationTypes.length;
      } while (num3 < length);
    }
    const joined1 = tag.join();
    const tagResult1 = tag.tag(2, _mod1187.WireType.LengthDelimited);
  }
  if (bannedUntil.bannedAt) {
    const Timestamp2 = timestamp.Timestamp;
    const tagResult2 = tag.tag(3, _mod1187.WireType.LengthDelimited);
    const joined2 = Timestamp2.internalBinaryWrite(bannedUntil.bannedAt, tag.tag(3, _mod1187.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult1 = Timestamp2.internalBinaryWrite(bannedUntil.bannedAt, tag.tag(3, _mod1187.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = _mod1187.UnknownFieldHandler.onWrite;
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
      return require("timestamp").Timestamp;
    }
  },
  {
    no: 2,
    name: "classification_types",
    kind: "enum",
    repeat: 1,
    T() {
      const items = ["discord_protos.safety_common.v1.ClassificationType", require("classification_type").ClassificationType];
      return items;
    }
  },

];
const obj6 = {
  no: 3,
  name: "banned_at",
  kind: "message",
  T() {
    return require("timestamp").Timestamp;
  }
};
items2[2] = obj6;
const deferredActionStateType = new DeferredActionState$Type("discord_protos.safety_common.v1.TempBannedState", items2, tmp7, tmp6, "create", "internalBinaryRead", TempBannedState$Type, "internalBinaryWrite", DeferredActionState$Type, undefined, fn, dependencyMap, SafetyStateReason, obj2, object, object3, object4, items2, new.target, tmp, exports, obj6, undefined, 7);
const MessageType5 = fn(1187).MessageType;
class BannedState$Type extends MessageType5 {
  constructor() {
    obj = {
      no: 1,
      name: "classification_types",
      kind: "enum",
      repeat: 1,
      T() {
            const items = ["discord_protos.safety_common.v1.ClassificationType", require("classification_type").ClassificationType];
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
            return require("timestamp").Timestamp;
          }
    };
    tmp1 = new tmp("discord_protos.safety_common.v1.BannedState", items, new.target);
    return tmp1;
  }
}
const prototype5 = BannedState$Type.prototype;
prototype5["create"] = function create(arr) {
  obj = { classificationTypes: [] };
  const _Object = Object;
  _Object.defineProperty(obj, _mod1187.MESSAGE_TYPE, { enumerable: false, value: this });
  if (undefined !== arr) {
    const result = _mod1187.reflectionMergePartial(this, obj, arr);
    const tmpResult = _mod1187;
  }
  return obj;
};
prototype5["internalBinaryRead"] = function internalBinaryRead(pos, arg1, readUnknownField, arg3) {
  const self = this;
  obj = arg3;
  if (arg3 == null) {
    obj = self.create();
  }
  const sum = pos.pos + arg1;
  if (pos.pos < sum) {
    do {
      let tmp4 = _slicedToArray(pos.tag(), 2);
      [tmp5, tmp6] = tmp4;
      if (1 === tmp5) {
        if (tmp6 === _mod1187.WireType.LengthDelimited) {
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
          let arr2 = classificationTypes1.push(pos.int32());
        }
      } else if (2 === tmp5) {
        let Timestamp = timestamp.Timestamp;
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
prototype5["internalBinaryWrite"] = function internalBinaryWrite(classificationTypes, tag, writeUnknownFields) {
  let length;
  if (classificationTypes.classificationTypes.length) {
    tag.tag(1, _mod1187.WireType.LengthDelimited).fork();
    let num2 = 0;
    if (0 < classificationTypes.classificationTypes.length) {
      do {
        let int32Result = tag.int32(classificationTypes.classificationTypes[num2]);
        num2 = num2 + 1;
        length = classificationTypes.classificationTypes.length;
      } while (num2 < length);
    }
    const joined = tag.join();
    const tagResult = tag.tag(1, _mod1187.WireType.LengthDelimited);
  }
  if (classificationTypes.bannedAt) {
    const Timestamp = timestamp.Timestamp;
    const tagResult1 = tag.tag(2, _mod1187.WireType.LengthDelimited);
    const joined1 = Timestamp.internalBinaryWrite(classificationTypes.bannedAt, tag.tag(2, _mod1187.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult = Timestamp.internalBinaryWrite(classificationTypes.bannedAt, tag.tag(2, _mod1187.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = _mod1187.UnknownFieldHandler.onWrite;
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
      const items = ["discord_protos.safety_common.v1.ClassificationType", require("classification_type").ClassificationType];
      return items;
    }
  },

];
const obj8 = {
  no: 2,
  name: "banned_at",
  kind: "message",
  T() {
    return require("timestamp").Timestamp;
  }
};
items3[1] = obj8;
const tempBannedStateType = new TempBannedState$Type("discord_protos.safety_common.v1.BannedState", items3, tmp7, BannedState$Type, "create", "internalBinaryRead", TempBannedState$Type, "internalBinaryWrite", items3, undefined, fn, dependencyMap, SafetyStateReason, obj2, object, object3, object4, deferredActionStateType, new.target, tmp, exports, obj8, undefined, 7, 6, 5, 4);
const MessageType6 = fn(1187).MessageType;
class SafetyState$Type extends MessageType6 {
  constructor() {
    obj = {
      no: 101,
      name: "normal",
      kind: "message",
      oneof: "state",
      T() {
            return object;
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
            return object3;
          }
    };
    items[2] = {
      no: 103,
      name: "deferred_action",
      kind: "message",
      oneof: "state",
      T() {
            return object4;
          }
    };
    items[3] = {
      no: 104,
      name: "temp_banned",
      kind: "message",
      oneof: "state",
      T() {
            return deferredActionStateType;
          }
    };
    items[4] = {
      no: 105,
      name: "banned",
      kind: "message",
      oneof: "state",
      T() {
            return tempBannedStateType;
          }
    };
    items[5] = {
      no: 1,
      name: "reason",
      kind: "enum",
      T() {
            const items = ["discord_protos.safety_common.v1.SafetyStateReason", obj];
            return items;
          }
    };
    obj1 = { no: 2, name: "annotations", kind: "enum", repeat: 1, T: null };
    class T {
      constructor() {
        items = ["discord_protos.safety_common.v1.SafetyAnnotations"];
        items[1] = closure_1_4;
        return items;
      }
    }
    obj1.T = T;
    items[6] = obj1;
    items[7] = {
      no: 3,
      name: "last_mutation_id",
      kind: "message",
      T() {
            return require("wrappers").UInt64Value;
          }
    };
    tmp1 = new tmp("discord_protos.safety_common.v1.SafetyState", items, T);
    return tmp1;
  }
}
const prototype6 = SafetyState$Type.prototype;
prototype6["create"] = function create(arr) {
  obj = { state: { oneofKind: "max" }, reason: 0, annotations: [] };
  const _Object = Object;
  _Object.defineProperty(obj, _mod1187.MESSAGE_TYPE, { enumerable: false, value: this });
  if (undefined !== arr) {
    const result = _mod1187.reflectionMergePartial(this, obj, arr);
    const tmpResult = _mod1187;
  }
  return obj;
};
prototype6["internalBinaryRead"] = function internalBinaryRead(pos, arg1, readUnknownField, arg3) {
  const self = this;
  obj2 = arg3;
  if (arg3 == null) {
    obj2 = self.create();
  }
  const sum = pos.pos + arg1;
  if (pos.pos < sum) {
    do {
      let tmp4 = _slicedToArray(pos.tag(), 2);
      [tmp5, tmp6] = tmp4;
      if (101 === tmp5) {
        let obj3 = { oneofKind: "normal", normal: null };
        obj3.normal = object.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj2.state.normal);
        obj2.state = obj3;
      } else if (102 === tmp5) {
        let obj4 = { oneofKind: "restricted", restricted: null };
        obj4.restricted = object3.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj2.state.restricted);
        obj2.state = obj4;
      } else if (103 === tmp5) {
        let obj5 = { oneofKind: "deferredAction", deferredAction: null };
        obj5.deferredAction = object4.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj2.state.deferredAction);
        obj2.state = obj5;
      } else if (104 === tmp5) {
        let obj10 = { oneofKind: "tempBanned", tempBanned: null };
        obj10.tempBanned = deferredActionStateType.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj2.state.tempBanned);
        obj2.state = obj10;
      } else if (105 === tmp5) {
        let state = { oneofKind: "banned", banned: null };
        state.banned = tempBannedStateType.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj2.state.banned);
        obj2.state = state;
      } else if (1 === tmp5) {
        obj2.reason = pos.int32();
      } else if (2 === tmp5) {
        if (tmp6 === _mod1187.WireType.LengthDelimited) {
          let sum1 = pos.int32() + pos.pos;
          if (pos.pos < sum1) {
            do {
              let annotations = obj2.annotations;
              let arr = annotations.push(pos.int32());
              pos = pos.pos;
            } while (pos < sum1);
          }
        } else {
          let annotations1 = obj2.annotations;
          let arr2 = annotations1.push(pos.int32());
        }
      } else if (3 === tmp5) {
        let UInt64Value = wrappers.UInt64Value;
        obj2.lastMutationId = UInt64Value.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj2.lastMutationId);
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
            let onReadResult = onRead(self.typeName, obj2, tmp5, tmp6, skipResult);
          }
        }
      }
    } while (pos.pos < sum);
  }
  return obj2;
};
prototype6["internalBinaryWrite"] = function internalBinaryWrite(state, tag, writeUnknownFields) {
  let length;
  if ("normal" === state.state.oneofKind) {
    const tagResult = tag.tag(101, _mod1187.WireType.LengthDelimited);
    const joined = object.internalBinaryWrite(state.state.normal, tag.tag(101, _mod1187.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult = object.internalBinaryWrite(state.state.normal, tag.tag(101, _mod1187.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if ("restricted" === state.state.oneofKind) {
    const tagResult1 = tag.tag(102, _mod1187.WireType.LengthDelimited);
    const joined1 = object3.internalBinaryWrite(state.state.restricted, tag.tag(102, _mod1187.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult1 = object3.internalBinaryWrite(state.state.restricted, tag.tag(102, _mod1187.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if ("deferredAction" === state.state.oneofKind) {
    const tagResult2 = tag.tag(103, _mod1187.WireType.LengthDelimited);
    const joined2 = object4.internalBinaryWrite(state.state.deferredAction, tag.tag(103, _mod1187.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult2 = object4.internalBinaryWrite(state.state.deferredAction, tag.tag(103, _mod1187.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if ("tempBanned" === state.state.oneofKind) {
    const tagResult3 = tag.tag(104, _mod1187.WireType.LengthDelimited);
    const joined3 = deferredActionStateType.internalBinaryWrite(state.state.tempBanned, tag.tag(104, _mod1187.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult3 = deferredActionStateType.internalBinaryWrite(state.state.tempBanned, tag.tag(104, _mod1187.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if ("banned" === state.state.oneofKind) {
    const tagResult4 = tag.tag(105, _mod1187.WireType.LengthDelimited);
    const joined4 = tempBannedStateType.internalBinaryWrite(state.state.banned, tag.tag(105, _mod1187.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult4 = tempBannedStateType.internalBinaryWrite(state.state.banned, tag.tag(105, _mod1187.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (0 !== state.reason) {
    tag.tag(1, _mod1187.WireType.Varint).int32(state.reason);
    const tagResult5 = tag.tag(1, _mod1187.WireType.Varint);
  }
  if (state.annotations.length) {
    tag.tag(2, _mod1187.WireType.LengthDelimited).fork();
    let num9 = 0;
    if (0 < state.annotations.length) {
      do {
        let int32Result1 = tag.int32(state.annotations[num9]);
        num9 = num9 + 1;
        length = state.annotations.length;
      } while (num9 < length);
    }
    const joined5 = tag.join();
    const tagResult6 = tag.tag(2, _mod1187.WireType.LengthDelimited);
  }
  if (state.lastMutationId) {
    const UInt64Value = wrappers.UInt64Value;
    const tagResult7 = tag.tag(3, _mod1187.WireType.LengthDelimited);
    const joined6 = UInt64Value.internalBinaryWrite(state.lastMutationId, tag.tag(3, _mod1187.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult5 = UInt64Value.internalBinaryWrite(state.lastMutationId, tag.tag(3, _mod1187.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = _mod1187.UnknownFieldHandler.onWrite;
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
      return object;
    }
  },
  {
    no: 102,
    name: "restricted",
    kind: "message",
    oneof: "state",
    T() {
      return object3;
    }
  },
  {
    no: 103,
    name: "deferred_action",
    kind: "message",
    oneof: "state",
    T() {
      return object4;
    }
  },
  {
    no: 104,
    name: "temp_banned",
    kind: "message",
    oneof: "state",
    T() {
      return deferredActionStateType;
    }
  },
  {
    no: 105,
    name: "banned",
    kind: "message",
    oneof: "state",
    T() {
      return tempBannedStateType;
    }
  },
  {
    no: 1,
    name: "reason",
    kind: "enum",
    T() {
      const items = ["discord_protos.safety_common.v1.SafetyStateReason", obj];
      return items;
    }
  },
,

];
let obj10 = { no: 2, name: "annotations", kind: "enum", repeat: 1, T: null };
class T {
  constructor() {
    items = ["discord_protos.safety_common.v1.SafetyAnnotations"];
    items[1] = closure_1_4;
    return items;
  }
}
obj10.T = T;
items4[6] = obj10;
const obj11 = {
  no: 3,
  name: "last_mutation_id",
  kind: "message",
  T() {
    return require("wrappers").UInt64Value;
  }
};
items4[7] = obj11;
const size = fn(2);
let result = size.fileFinishedImporting("../discord_common/js/packages/protos/discord_protos/safety_common/v1/safety_state.tsx");

export { SafetyStateReason };
export const SafetyAnnotations = obj2;
export const NormalState = object;
export const RestrictedState = object3;
export const DeferredActionState = object4;
export const TempBannedState = deferredActionStateType;
export const BannedState = tempBannedStateType;
export const SafetyState = new "internalBinaryWrite"("discord_protos.safety_common.v1.SafetyState", items4, tmp7, BannedState$Type, "create", T, SafetyState$Type, "internalBinaryWrite", items4, undefined, fn, dependencyMap, SafetyStateReason, obj2, object, object3, object4, deferredActionStateType, tempBannedStateType, new.target, exports, obj11, undefined, 7);