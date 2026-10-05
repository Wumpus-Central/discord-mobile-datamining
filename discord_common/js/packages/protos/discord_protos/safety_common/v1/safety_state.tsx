// === Module 1386: safety_state ===

// Module 1386 (safety_state)
import _mod1198 from "module_1198" /* 1198 */;
import timestamp from "timestamp" /* 1227 */;
import wrappers from "wrappers" /* 1228 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let internalBinaryWrite, internalBinaryWrite2, internalBinaryWrite3, internalBinaryWrite4, internalBinaryWrite5, internalBinaryWrite6, obj;

let tmp2;
let tmp4;
const T2 = function T() {
  return require("timestamp").Timestamp;
};
const T3 = function T() {
  return require("timestamp").Timestamp;
};
const T4 = function T() {
  return require("timestamp").Timestamp;
};
const T5 = function T() {
  return require("timestamp").Timestamp;
};
const T6 = function T() {
  const items = ["discord_protos.safety_common.v1.ClassificationType", require("classification_type").ClassificationType];
  return items;
};
const T7 = function T() {
  return require("timestamp").Timestamp;
};
const T8 = function T() {
  return object;
};
const T9 = function T() {
  return object3;
};
const T10 = function T() {
  return object4;
};
const T11 = function T() {
  return deferredActionStateType;
};
const T12 = function T() {
  return tempBannedStateType;
};
const T13 = function T() {
  return require("wrappers").UInt64Value;
};
const SafetyStateReason = { REASON_UNSPECIFIED: 0, [0]: "REASON_UNSPECIFIED", DISABLED_SUSPICIOUS_ACTIVITY: 1, [1]: "DISABLED_SUSPICIOUS_ACTIVITY", SMITE_REMOVE_EMAIL_VERIFICATION: 2, [2]: "SMITE_REMOVE_EMAIL_VERIFICATION", USER_REQUIRED_VERIFICATION_INTERVENTIONS_CLIENT: 3, [3]: "USER_REQUIRED_VERIFICATION_INTERVENTIONS_CLIENT", ACTIVE_ASSIGNMENT_COMPLETED: 4, [4]: "ACTIVE_ASSIGNMENT_COMPLETED", ACTIVE_ASSIGNMENT_CREATED: 5, [5]: "ACTIVE_ASSIGNMENT_CREATED", DEFERRED_ASSIGNMENT_CREATED: 6, [6]: "DEFERRED_ASSIGNMENT_CREATED", DEFERRED_ASSIGNMENT_UPGRADED_TO_ACTIVE: 7, [7]: "DEFERRED_ASSIGNMENT_UPGRADED_TO_ACTIVE", DEFERRED_ASSIGNMENT_CANCELLED: 8, [8]: "DEFERRED_ASSIGNMENT_CANCELLED", ASSIGNMENT_STATE_REPAIRED: 9, [9]: "ASSIGNMENT_STATE_REPAIRED", MANUAL_PERMANENT_BAN: 10, [10]: "MANUAL_PERMANENT_BAN", SAFETY_SYSTEM_UNBAN: 11, [11]: "SAFETY_SYSTEM_UNBAN", GENERIC_AUTOMATED_SAFETY_ACTION: 12, [12]: "GENERIC_AUTOMATED_SAFETY_ACTION", GENERIC_MANUAL_SAFETY_ACTION: 13, [13]: "GENERIC_MANUAL_SAFETY_ACTION", BANNED_USER_BACKFILL: 14, [14]: "BANNED_USER_BACKFILL" };
let obj2 = { ANNOTATION_UNSPECIFIED: 0, [0]: "ANNOTATION_UNSPECIFIED", SPAMMER: 1, [1]: "SPAMMER", SELF_DELETED: 2, [2]: "SELF_DELETED", SELF_DISABLED: 3, [3]: "SELF_DISABLED", UNDERAGE_DELETED: 4, [4]: "UNDERAGE_DELETED", SAFETY_POLICY_VIOLATION: 5, [5]: "SAFETY_POLICY_VIOLATION", INACTIVITY_DELETED: 6, [6]: "INACTIVITY_DELETED", GENERIC_DELETED: 7, [7]: "GENERIC_DELETED" };
const MessageType = _mod1198.MessageType;
class NormalState$Type extends MessageType {
  constructor() {
    const tmp2 = new tmp("discord_protos.safety_common.v1.NormalState", [], new.target);
    return tmp2;
  }
  create(arr) {
    obj = {};
    const _Object = Object;
    obj2 = { enumerable: false, value: this };
    _Object.defineProperty(obj, _mod1198.MESSAGE_TYPE, obj2);
    if (undefined !== arr) {
      const tmpResult = _mod1198;
      const result = tmpResult.reflectionMergePartial(this, obj, arr);
    }
    return obj;
  }
  internalBinaryRead(arg0, arg1, arg2, arg3) {
    obj = arg3;
    if (arg3 == null) {
      const self = this;
      obj = this.create();
    }
    return obj;
  }
  internalBinaryWrite(arg0, arg1, writeUnknownFields) {
    let onWrite = writeUnknownFields.writeUnknownFields;
    if (false !== onWrite) {
      if (1 == onWrite) {
        onWrite = _mod1198.UnknownFieldHandler.onWrite;
      }
      const self = this;
      onWrite(this.typeName, arg0, arg1);
    }
    return arg1;
  }
}
const prototype = NormalState$Type.prototype;
const object = new Object("discord_protos.safety_common.v1.NormalState", [], tmp7, tmp6, "create", "internalBinaryRead", tmp5, "internalBinaryWrite", tmp4, tmp3, require, dependencyMap, SafetyStateReason, obj2, tmp2);
const MessageType2 = _mod1198.MessageType;
class RestrictedState$Type extends MessageType2 {
  constructor() {
    const items = [];
    obj = { no: 1, name: "restricted_until", kind: "message", T: T2 };
    items[0] = obj;
    const tmp2 = new tmp("discord_protos.safety_common.v1.RestrictedState", items, new.target);
    return tmp2;
  }
  create(arr) {
    obj = {};
    const _Object = Object;
    obj2 = { enumerable: false, value: this };
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
  internalBinaryWrite(restrictedUntil, tag, writeUnknownFields) {
    if (restrictedUntil.restrictedUntil) {
      const Timestamp = timestamp.Timestamp;
      internalBinaryWrite = Timestamp.internalBinaryWrite;
      restrictedUntil = restrictedUntil.restrictedUntil;
      const tagResult = tag.tag(1, _mod1198.WireType.LengthDelimited);
      const internalBinaryWriteResult = internalBinaryWrite(restrictedUntil, tagResult.fork(), writeUnknownFields);
      const joined = internalBinaryWriteResult.join();
    }
    let onWrite = writeUnknownFields.writeUnknownFields;
    if (false !== onWrite) {
      if (1 == onWrite) {
        onWrite = _mod1198.UnknownFieldHandler.onWrite;
      }
      const self = this;
      onWrite(this.typeName, restrictedUntil, tag);
    }
    return tag;
  }
}
const prototype2 = RestrictedState$Type.prototype;
let obj3 = { no: 1, name: "restricted_until", kind: "message", T: T2 };
let items = [obj3];
const object3 = new Object("discord_protos.safety_common.v1.RestrictedState", items, tmp7, tmp6, "create", "internalBinaryRead", tmp5, "internalBinaryWrite", tmp4, undefined, require, dependencyMap, SafetyStateReason, obj2, object);
const MessageType3 = _mod1198.MessageType;
class DeferredActionState$Type extends MessageType3 {
  constructor() {
    const items = [];
    obj = { no: 1, name: "action_deferred_until", kind: "message", T: T3 };
    items[0] = obj;
    const tmp2 = new tmp("discord_protos.safety_common.v1.DeferredActionState", items, new.target);
    return tmp2;
  }
  create(arr) {
    obj = {};
    const _Object = Object;
    obj2 = { enumerable: false, value: this };
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
  internalBinaryWrite(actionDeferredUntil, tag, writeUnknownFields) {
    if (actionDeferredUntil.actionDeferredUntil) {
      const Timestamp = timestamp.Timestamp;
      internalBinaryWrite = Timestamp.internalBinaryWrite;
      actionDeferredUntil = actionDeferredUntil.actionDeferredUntil;
      const tagResult = tag.tag(1, _mod1198.WireType.LengthDelimited);
      const internalBinaryWriteResult = internalBinaryWrite(actionDeferredUntil, tagResult.fork(), writeUnknownFields);
      const joined = internalBinaryWriteResult.join();
    }
    let onWrite = writeUnknownFields.writeUnknownFields;
    if (false !== onWrite) {
      if (1 == onWrite) {
        onWrite = _mod1198.UnknownFieldHandler.onWrite;
      }
      const self = this;
      onWrite(this.typeName, actionDeferredUntil, tag);
    }
    return tag;
  }
}
const prototype3 = DeferredActionState$Type.prototype;
let obj4 = { no: 1, name: "action_deferred_until", kind: "message", T: T3 };
const items1 = [obj4];
const object4 = new Object("discord_protos.safety_common.v1.DeferredActionState", items1, tmp7, tmp6, "create", "internalBinaryRead", tmp5, "internalBinaryWrite", DeferredActionState$Type, undefined, require, dependencyMap, SafetyStateReason, obj2, object, object3, Object, items1, this, tmp, exports, obj4);
const MessageType4 = _mod1198.MessageType;
class TempBannedState$Type extends MessageType4 {
  constructor() {
    let items = [, , ];
    obj = { no: 1, name: "banned_until", kind: "message", T: T4 };
    items[0] = obj;
    obj2 = { no: 2, name: "classification_types", kind: "enum", repeat: 1, T };
    class T {
      constructor() {
        items = ["discord_protos.safety_common.v1.ClassificationType"];
        items[1] = closure_1_0(closure_1_1[3]).ClassificationType;
        return items;
      }
    }
    items[1] = obj2;
    items[2] = { no: 3, name: "banned_at", kind: "message", T: T5 };
    const tmp2 = new tmp("discord_protos.safety_common.v1.TempBannedState", items, T);
    return tmp2;
  }
  create(arr) {
    obj = { classificationTypes: [] };
    const _Object = Object;
    obj2 = { enumerable: false, value: this };
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
          if (tmp6 === _mod1198.WireType.LengthDelimited) {
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
  internalBinaryWrite(bannedUntil, tag, writeUnknownFields) {
    let length;
    if (bannedUntil.bannedUntil) {
      const Timestamp = timestamp.Timestamp;
      internalBinaryWrite = Timestamp.internalBinaryWrite;
      bannedUntil = bannedUntil.bannedUntil;
      const tagResult = tag.tag(1, _mod1198.WireType.LengthDelimited);
      const internalBinaryWriteResult = internalBinaryWrite(bannedUntil, tagResult.fork(), writeUnknownFields);
      const joined = internalBinaryWriteResult.join();
    }
    if (bannedUntil.classificationTypes.length) {
      const tagResult1 = tag.tag(2, _mod1198.WireType.LengthDelimited);
      tagResult1.fork();
      let num3 = 0;
      if (0 < bannedUntil.classificationTypes.length) {
        do {
          let int32Result = tag.int32(bannedUntil.classificationTypes[num3]);
          num3 = num3 + 1;
          length = bannedUntil.classificationTypes.length;
        } while (num3 < length);
      }
      const joined1 = tag.join();
    }
    if (bannedUntil.bannedAt) {
      const Timestamp2 = timestamp.Timestamp;
      internalBinaryWrite2 = Timestamp2.internalBinaryWrite;
      const bannedAt = bannedUntil.bannedAt;
      const tagResult2 = tag.tag(3, _mod1198.WireType.LengthDelimited);
      const internalBinaryWrite2Result = internalBinaryWrite2(bannedAt, tagResult2.fork(), writeUnknownFields);
      const joined2 = internalBinaryWrite2Result.join();
    }
    let onWrite = writeUnknownFields.writeUnknownFields;
    if (false !== onWrite) {
      if (1 == onWrite) {
        onWrite = _mod1198.UnknownFieldHandler.onWrite;
      }
      const self = this;
      onWrite(this.typeName, bannedUntil, tag);
    }
    return tag;
  }
}
const prototype4 = TempBannedState$Type.prototype;
let obj5 = { no: 1, name: "banned_until", kind: "message", T: T4 };
const items2 = [
  obj5,
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
const obj6 = { no: 3, name: "banned_at", kind: "message", T: T5 };
items2[2] = obj6;
const deferredActionStateType = new DeferredActionState$Type("discord_protos.safety_common.v1.TempBannedState", items2, tmp7, tmp6, "create", "internalBinaryRead", TempBannedState$Type, "internalBinaryWrite", DeferredActionState$Type, undefined, require, dependencyMap, SafetyStateReason, obj2, object, object3, object4, items2, this, tmp, exports, obj6, undefined, 7);
const MessageType5 = _mod1198.MessageType;
class BannedState$Type extends MessageType5 {
  constructor() {
    let items = [, ];
    obj = { no: 1, name: "classification_types", kind: "enum", repeat: 1, T: T6 };
    items[0] = obj;
    items[1] = { no: 2, name: "banned_at", kind: "message", T: T7 };
    const tmp2 = new tmp("discord_protos.safety_common.v1.BannedState", items, new.target);
    return tmp2;
  }
  create(arr) {
    obj = { classificationTypes: [] };
    const _Object = Object;
    obj2 = { enumerable: false, value: this };
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
          if (tmp6 === _mod1198.WireType.LengthDelimited) {
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
  internalBinaryWrite(classificationTypes, tag, writeUnknownFields) {
    let length;
    if (classificationTypes.classificationTypes.length) {
      const tagResult = tag.tag(1, _mod1198.WireType.LengthDelimited);
      tagResult.fork();
      let num2 = 0;
      if (0 < classificationTypes.classificationTypes.length) {
        do {
          let int32Result = tag.int32(classificationTypes.classificationTypes[num2]);
          num2 = num2 + 1;
          length = classificationTypes.classificationTypes.length;
        } while (num2 < length);
      }
      const joined = tag.join();
    }
    if (classificationTypes.bannedAt) {
      const Timestamp = timestamp.Timestamp;
      internalBinaryWrite = Timestamp.internalBinaryWrite;
      const bannedAt = classificationTypes.bannedAt;
      const tagResult1 = tag.tag(2, _mod1198.WireType.LengthDelimited);
      const internalBinaryWriteResult = internalBinaryWrite(bannedAt, tagResult1.fork(), writeUnknownFields);
      const joined1 = internalBinaryWriteResult.join();
    }
    let onWrite = writeUnknownFields.writeUnknownFields;
    if (false !== onWrite) {
      if (1 == onWrite) {
        onWrite = _mod1198.UnknownFieldHandler.onWrite;
      }
      const self = this;
      onWrite(this.typeName, classificationTypes, tag);
    }
    return tag;
  }
}
const prototype5 = BannedState$Type.prototype;
const items3 = [, ];
const obj7 = { no: 1, name: "classification_types", kind: "enum", repeat: 1, T: T6 };
items3[0] = obj7;
const obj8 = { no: 2, name: "banned_at", kind: "message", T: T7 };
items3[1] = obj8;
const tempBannedStateType = new TempBannedState$Type("discord_protos.safety_common.v1.BannedState", items3, tmp7, BannedState$Type, "create", "internalBinaryRead", TempBannedState$Type, "internalBinaryWrite", items3, undefined, require, dependencyMap, SafetyStateReason, obj2, object, object3, object4, deferredActionStateType, this, tmp, exports, obj8, undefined, 7, 6, 5, 4);
const MessageType6 = _mod1198.MessageType;
class SafetyState$Type extends MessageType6 {
  constructor() {
    obj = { no: 101, name: "normal", kind: "message", oneof: "state", T: T8 };
    let items = [
      obj,
      { no: 102, name: "restricted", kind: "message", oneof: "state", T: T9 },
      { no: 103, name: "deferred_action", kind: "message", oneof: "state", T: T10 },
      { no: 104, name: "temp_banned", kind: "message", oneof: "state", T: T11 },
      { no: 105, name: "banned", kind: "message", oneof: "state", T: T12 },
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
    obj2 = { no: 2, name: "annotations", kind: "enum", repeat: 1, T };
    class T {
      constructor() {
        const items = ["discord_protos.safety_common.v1.SafetyAnnotations", obj2];
        return items;
      }
    }
    items[6] = obj2;
    items[7] = { no: 3, name: "last_mutation_id", kind: "message", T: T13 };
    const tmp2 = new tmp("discord_protos.safety_common.v1.SafetyState", items, T);
    return tmp2;
  }
  create(arr) {
    obj = { state: { oneofKind: "r" }, reason: 0, annotations: [] };
    const _Object = Object;
    obj2 = { enumerable: false, value: this };
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
          let obj3 = { oneofKind: "normal", normal: object.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj2.state.normal) };
          obj2.state = obj3;
        } else if (102 === tmp5) {
          let obj4 = { oneofKind: "restricted", restricted: object3.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj2.state.restricted) };
          obj2.state = obj4;
        } else if (103 === tmp5) {
          let obj5 = { oneofKind: "deferredAction", deferredAction: object4.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj2.state.deferredAction) };
          obj2.state = obj5;
        } else if (104 === tmp5) {
          let obj10 = { oneofKind: "tempBanned", tempBanned: deferredActionStateType.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj2.state.tempBanned) };
          obj2.state = obj10;
        } else if (105 === tmp5) {
          let state = { oneofKind: "banned", banned: tempBannedStateType.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj2.state.banned) };
          obj2.state = state;
        } else if (1 === tmp5) {
          obj2.reason = pos.int32();
        } else if (2 === tmp5) {
          if (tmp6 === _mod1198.WireType.LengthDelimited) {
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
              let onReadResult = onRead(self.typeName, obj2, tmp5, tmp6, skipResult);
            }
          }
        }
      } while (pos.pos < sum);
    }
    return obj2;
  }
  internalBinaryWrite(state, tag, writeUnknownFields) {
    let length;
    if ("normal" === state.state.oneofKind) {
      internalBinaryWrite = object.internalBinaryWrite;
      const normal = state.state.normal;
      const tagResult = tag.tag(101, _mod1198.WireType.LengthDelimited);
      const internalBinaryWriteResult = internalBinaryWrite(normal, tagResult.fork(), writeUnknownFields);
      const joined = internalBinaryWriteResult.join();
    }
    if ("restricted" === state.state.oneofKind) {
      internalBinaryWrite2 = object3.internalBinaryWrite;
      const restricted = state.state.restricted;
      const tagResult1 = tag.tag(102, _mod1198.WireType.LengthDelimited);
      const internalBinaryWrite2Result = internalBinaryWrite2(restricted, tagResult1.fork(), writeUnknownFields);
      const joined1 = internalBinaryWrite2Result.join();
    }
    if ("deferredAction" === state.state.oneofKind) {
      internalBinaryWrite3 = object4.internalBinaryWrite;
      const deferredAction = state.state.deferredAction;
      const tagResult2 = tag.tag(103, _mod1198.WireType.LengthDelimited);
      const internalBinaryWrite3Result = internalBinaryWrite3(deferredAction, tagResult2.fork(), writeUnknownFields);
      const joined2 = internalBinaryWrite3Result.join();
    }
    if ("tempBanned" === state.state.oneofKind) {
      internalBinaryWrite4 = deferredActionStateType.internalBinaryWrite;
      const tempBanned = state.state.tempBanned;
      const tagResult3 = tag.tag(104, _mod1198.WireType.LengthDelimited);
      const internalBinaryWrite4Result = internalBinaryWrite4(tempBanned, tagResult3.fork(), writeUnknownFields);
      const joined3 = internalBinaryWrite4Result.join();
    }
    if ("banned" === state.state.oneofKind) {
      internalBinaryWrite5 = tempBannedStateType.internalBinaryWrite;
      const banned = state.state.banned;
      const tagResult4 = tag.tag(105, _mod1198.WireType.LengthDelimited);
      const internalBinaryWrite5Result = internalBinaryWrite5(banned, tagResult4.fork(), writeUnknownFields);
      const joined4 = internalBinaryWrite5Result.join();
    }
    if (0 !== state.reason) {
      const tagResult5 = tag.tag(1, _mod1198.WireType.Varint);
      tagResult5.int32(state.reason);
    }
    if (state.annotations.length) {
      const tagResult6 = tag.tag(2, _mod1198.WireType.LengthDelimited);
      tagResult6.fork();
      let num9 = 0;
      if (0 < state.annotations.length) {
        do {
          let int32Result1 = tag.int32(state.annotations[num9]);
          num9 = num9 + 1;
          length = state.annotations.length;
        } while (num9 < length);
      }
      const joined5 = tag.join();
    }
    if (state.lastMutationId) {
      const UInt64Value = wrappers.UInt64Value;
      internalBinaryWrite6 = UInt64Value.internalBinaryWrite;
      const lastMutationId = state.lastMutationId;
      const tagResult7 = tag.tag(3, _mod1198.WireType.LengthDelimited);
      const internalBinaryWrite6Result = internalBinaryWrite6(lastMutationId, tagResult7.fork(), writeUnknownFields);
      const joined6 = internalBinaryWrite6Result.join();
    }
    let onWrite = writeUnknownFields.writeUnknownFields;
    if (false !== onWrite) {
      if (1 == onWrite) {
        onWrite = _mod1198.UnknownFieldHandler.onWrite;
      }
      const self = this;
      onWrite(this.typeName, state, tag);
    }
    return tag;
  }
}
const prototype6 = SafetyState$Type.prototype;
const items4 = [, , , , , , , ];
const obj9 = { no: 101, name: "normal", kind: "message", oneof: "state", T: T8 };
items4[0] = obj9;
items4[1] = { no: 102, name: "restricted", kind: "message", oneof: "state", T: T9 };
items4[2] = { no: 103, name: "deferred_action", kind: "message", oneof: "state", T: T10 };
items4[3] = { no: 104, name: "temp_banned", kind: "message", oneof: "state", T: T11 };
items4[4] = { no: 105, name: "banned", kind: "message", oneof: "state", T: T12 };
items4[5] = {
  no: 1,
  name: "reason",
  kind: "enum",
  T() {
    const items = ["discord_protos.safety_common.v1.SafetyStateReason", obj];
    return items;
  }
};
let obj10 = { no: 2, name: "annotations", kind: "enum", repeat: 1, T };
class T {
  constructor() {
    const items = ["discord_protos.safety_common.v1.SafetyAnnotations", obj2];
    return items;
  }
}
items4[6] = obj10;
const obj11 = { no: 3, name: "last_mutation_id", kind: "message", T: T13 };
items4[7] = obj11;
const tmp14 = new "internalBinaryWrite"("discord_protos.safety_common.v1.SafetyState", items4, tmp7, BannedState$Type, "create", T, SafetyState$Type, "internalBinaryWrite", items4, undefined, require, dependencyMap, SafetyStateReason, obj2, object, object3, object4, deferredActionStateType, tempBannedStateType, this, exports, obj11, undefined, 7);
let result = size.fileFinishedImporting("../discord_common/js/packages/protos/discord_protos/safety_common/v1/safety_state.tsx");

export { SafetyStateReason };
export const SafetyAnnotations = obj2;
export const NormalState = object;
export const RestrictedState = object3;
export const DeferredActionState = object4;
export const TempBannedState = deferredActionStateType;
export const BannedState = tempBannedStateType;
export const SafetyState = tmp14;