// === Module 7895: lifecycle_plan ===

// Module 7895 (lifecycle_plan)
import _mod1188 from "module_1188" /* 1188 */;
import timestamp from "timestamp" /* 1217 */;
import duration from "duration" /* 7896 */;
import _slicedToArray from "module_32" /* 32 */;

require = fn;
let obj = { UNSPECIFIED: 0, [0]: "UNSPECIFIED", DRAFT: 1, [1]: "DRAFT", ACTIVE: 2, [2]: "ACTIVE", PAUSED_MANUAL: 3, [3]: "PAUSED_MANUAL", PAUSED_HEALTH_CHECK: 4, [4]: "PAUSED_HEALTH_CHECK", COMPLETED: 5, [5]: "COMPLETED", CANCELED: 6, [6]: "CANCELED" };
obj = { UNSPECIFIED: 0, [0]: "UNSPECIFIED", PENDING: 1, [1]: "PENDING", IN_PROGRESS: 2, [2]: "IN_PROGRESS", AWAITING_MANUAL_APPROVAL: 3, [3]: "AWAITING_MANUAL_APPROVAL", COMPLETED: 4, [4]: "COMPLETED" };
const MessageType = fn(1188).MessageType;
class LifecyclePlan$Type extends MessageType {
  constructor() {
    obj = {
      no: 1,
      name: "measurement_plan",
      kind: "message",
      T() {
            return closure_1_5;
          }
    };
    items = [, ];
    items[0] = obj;
    items[1] = {
      no: 2,
      name: "rollout_plan",
      kind: "message",
      T() {
            return measurementPlanType;
          }
    };
    tmp = new tmp("discord_protos.discord_experimentation.v1.LifecyclePlan", items, new.target);
    return tmp;
  }
}
const prototype = LifecyclePlan$Type.prototype;
prototype["create"] = function create(arr) {
  obj = {};
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
        obj.measurementPlan = closure_5.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.measurementPlan);
      } else if (2 === tmp5) {
        obj.rolloutPlan = measurementPlanType.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.rolloutPlan);
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
prototype["internalBinaryWrite"] = function internalBinaryWrite(measurementPlan, tag, writeUnknownFields) {
  if (measurementPlan.measurementPlan) {
    const tagResult = tag.tag(1, _mod1188.WireType.LengthDelimited);
    const joined = closure_5.internalBinaryWrite(measurementPlan.measurementPlan, tag.tag(1, _mod1188.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult = closure_5.internalBinaryWrite(measurementPlan.measurementPlan, tag.tag(1, _mod1188.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (measurementPlan.rolloutPlan) {
    const tagResult1 = tag.tag(2, _mod1188.WireType.LengthDelimited);
    const joined1 = measurementPlanType.internalBinaryWrite(measurementPlan.rolloutPlan, tag.tag(2, _mod1188.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult1 = measurementPlanType.internalBinaryWrite(measurementPlan.rolloutPlan, tag.tag(2, _mod1188.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = _mod1188.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, measurementPlan, tag);
  }
  return tag;
};
obj = {
  no: 1,
  name: "measurement_plan",
  kind: "message",
  T() {
    return closure_1_5;
  }
};
let items = [
  obj,
  {
    no: 2,
    name: "rollout_plan",
    kind: "message",
    T() {
      return measurementPlanType;
    }
  }
];
const tmp8 = new "CANCELED"("discord_protos.discord_experimentation.v1.LifecyclePlan", items, tmp6, tmp5, "create", tmp4, "internalBinaryRead", "internalBinaryWrite", tmp3, tmp2);
const MessageType2 = fn(1188).MessageType;
class MeasurementPlan$Type extends MessageType2 {
  constructor() {
    obj = {
      no: 1,
      name: "status",
      kind: "enum",
      T() {
            const items = ["discord_protos.discord_experimentation.v1.PlanStatus", obj, "PLAN_STATUS_"];
            return items;
          }
    };
    items = [, ];
    items[0] = obj;
    items[1] = {
      no: 2,
      name: "ramp_steps",
      kind: "message",
      repeat: 1,
      T() {
            return closure_1_7;
          }
    };
    tmp = new tmp("discord_protos.discord_experimentation.v1.MeasurementPlan", items, new.target);
    return tmp;
  }
}
const prototype2 = MeasurementPlan$Type.prototype;
prototype2["create"] = function create(arr) {
  obj = { status: 0, rampSteps: [] };
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
        obj.status = pos.int32();
      } else if (2 === tmp5) {
        let rampSteps = obj.rampSteps;
        let arr = rampSteps.push(closure_7.internalBinaryRead(pos, pos.uint32(), readUnknownField));
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
prototype2["internalBinaryWrite"] = function internalBinaryWrite(status, tag, writeUnknownFields) {
  let length;
  if (0 !== status.status) {
    tag.tag(1, _mod1188.WireType.Varint).int32(status.status);
    const tagResult = tag.tag(1, _mod1188.WireType.Varint);
  }
  let num2 = 0;
  if (0 < status.rampSteps.length) {
    do {
      let tagResult1 = tag.tag(2, _mod1188.WireType.LengthDelimited);
      let internalBinaryWriteResult = closure_7.internalBinaryWrite(status.rampSteps[num2], tagResult1.fork(), writeUnknownFields);
      let joined = internalBinaryWriteResult.join();
      num2 = num2 + 1;
      length = status.rampSteps.length;
    } while (num2 < length);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = _mod1188.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, status, tag);
  }
  return tag;
};
const items1 = [
  {
    no: 1,
    name: "status",
    kind: "enum",
    T() {
      const items = ["discord_protos.discord_experimentation.v1.PlanStatus", obj, "PLAN_STATUS_"];
      return items;
    }
  },

];
const obj2 = {
  no: 2,
  name: "ramp_steps",
  kind: "message",
  repeat: 1,
  T() {
    return closure_1_7;
  }
};
items1[1] = obj2;
tmp3 = new tmp3("discord_protos.discord_experimentation.v1.MeasurementPlan", items1, tmp6, tmp5, "create", MeasurementPlan$Type, "internalBinaryRead", "internalBinaryWrite", tmp3, undefined, tmp, fn, dependencyMap, obj, obj, new.target, tmp8, items1, new.target, exports, obj2);
let closure_5 = tmp3;
const MessageType3 = fn(1188).MessageType;
class RolloutPlan$Type extends MessageType3 {
  constructor() {
    obj = {
      no: 1,
      name: "status",
      kind: "enum",
      T() {
            const items = ["discord_protos.discord_experimentation.v1.PlanStatus", obj, "PLAN_STATUS_"];
            return items;
          }
    };
    items = [, ];
    items[0] = obj;
    items[1] = {
      no: 2,
      name: "ramp_steps",
      kind: "message",
      repeat: 1,
      T() {
            return closure_1_7;
          }
    };
    tmp = new tmp("discord_protos.discord_experimentation.v1.RolloutPlan", items, new.target);
    return tmp;
  }
}
const prototype3 = RolloutPlan$Type.prototype;
prototype3["create"] = function create(arr) {
  obj = { status: 0, rampSteps: [] };
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
        obj.status = pos.int32();
      } else if (2 === tmp5) {
        let rampSteps = obj.rampSteps;
        let arr = rampSteps.push(closure_7.internalBinaryRead(pos, pos.uint32(), readUnknownField));
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
prototype3["internalBinaryWrite"] = function internalBinaryWrite(status, tag, writeUnknownFields) {
  let length;
  if (0 !== status.status) {
    tag.tag(1, _mod1188.WireType.Varint).int32(status.status);
    const tagResult = tag.tag(1, _mod1188.WireType.Varint);
  }
  let num2 = 0;
  if (0 < status.rampSteps.length) {
    do {
      let tagResult1 = tag.tag(2, _mod1188.WireType.LengthDelimited);
      let internalBinaryWriteResult = closure_7.internalBinaryWrite(status.rampSteps[num2], tagResult1.fork(), writeUnknownFields);
      let joined = internalBinaryWriteResult.join();
      num2 = num2 + 1;
      length = status.rampSteps.length;
    } while (num2 < length);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = _mod1188.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, status, tag);
  }
  return tag;
};
const items2 = [
  {
    no: 1,
    name: "status",
    kind: "enum",
    T() {
      const items = ["discord_protos.discord_experimentation.v1.PlanStatus", obj, "PLAN_STATUS_"];
      return items;
    }
  },

];
const obj4 = {
  no: 2,
  name: "ramp_steps",
  kind: "message",
  repeat: 1,
  T() {
    return closure_1_7;
  }
};
items2[1] = obj4;
const measurementPlanType = new MeasurementPlan$Type("discord_protos.discord_experimentation.v1.RolloutPlan", items2, tmp6, RolloutPlan$Type, "create", MeasurementPlan$Type, "internalBinaryRead", "internalBinaryWrite", items2, undefined, tmp, fn, dependencyMap, obj, obj, new.target, tmp8, tmp3, new.target, exports, obj4, undefined, 4);
const MessageType4 = fn(1188).MessageType;
class RampStep$Type extends MessageType4 {
  constructor() {
    items = [, , , , ];
    items[0] = { no: 1, name: "target_basis_points", kind: "scalar", T: 5 };
    items[1] = {
      no: 2,
      name: "hold_duration",
      kind: "message",
      T() {
            return require("duration").Duration;
          }
    };
    items[2] = { no: 3, name: "require_manual_approval", kind: "scalar", T: 8 };
    obj = { no: 4, name: "started_at", kind: "message", T: null };
    class T {
      constructor() {
        return closure_1_0(closure_1_1[3]).Timestamp;
      }
    }
    obj.T = T;
    items[3] = obj;
    items[4] = {
      no: 5,
      name: "status",
      kind: "enum",
      T() {
            const items = ["discord_protos.discord_experimentation.v1.StepStatus", obj, "STEP_STATUS_"];
            return items;
          }
    };
    tmp = new tmp("discord_protos.discord_experimentation.v1.RampStep", items, T);
    return tmp;
  }
}
const prototype4 = RampStep$Type.prototype;
prototype4["create"] = function create(arr) {
  obj = { targetBasisPoints: 0, requireManualApproval: false, status: 0 };
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
        obj.targetBasisPoints = pos.int32();
      } else if (2 === tmp5) {
        let Duration = duration.Duration;
        obj.holdDuration = Duration.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.holdDuration);
      } else if (3 === tmp5) {
        obj.requireManualApproval = pos.bool();
      } else if (4 === tmp5) {
        let Timestamp = timestamp.Timestamp;
        obj.startedAt = Timestamp.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.startedAt);
      } else if (5 === tmp5) {
        obj.status = pos.int32();
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
prototype4["internalBinaryWrite"] = function internalBinaryWrite(targetBasisPoints, tag, writeUnknownFields) {
  if (0 !== targetBasisPoints.targetBasisPoints) {
    tag.tag(1, _mod1188.WireType.Varint).int32(targetBasisPoints.targetBasisPoints);
    const tagResult = tag.tag(1, _mod1188.WireType.Varint);
  }
  if (targetBasisPoints.holdDuration) {
    const Duration = duration.Duration;
    const tagResult1 = tag.tag(2, _mod1188.WireType.LengthDelimited);
    const joined = Duration.internalBinaryWrite(targetBasisPoints.holdDuration, tag.tag(2, _mod1188.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult = Duration.internalBinaryWrite(targetBasisPoints.holdDuration, tag.tag(2, _mod1188.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (false !== targetBasisPoints.requireManualApproval) {
    tag.tag(3, _mod1188.WireType.Varint).bool(targetBasisPoints.requireManualApproval);
    const tagResult2 = tag.tag(3, _mod1188.WireType.Varint);
  }
  if (targetBasisPoints.startedAt) {
    const Timestamp = timestamp.Timestamp;
    const tagResult3 = tag.tag(4, _mod1188.WireType.LengthDelimited);
    const joined1 = Timestamp.internalBinaryWrite(targetBasisPoints.startedAt, tag.tag(4, _mod1188.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult1 = Timestamp.internalBinaryWrite(targetBasisPoints.startedAt, tag.tag(4, _mod1188.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (0 !== targetBasisPoints.status) {
    tag.tag(5, _mod1188.WireType.Varint).int32(targetBasisPoints.status);
    const tagResult4 = tag.tag(5, _mod1188.WireType.Varint);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = _mod1188.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, targetBasisPoints, tag);
  }
  return tag;
};
const items3 = [
  { no: 1, name: "target_basis_points", kind: "scalar", T: 5 },
  {
    no: 2,
    name: "hold_duration",
    kind: "message",
    T() {
      return require("duration").Duration;
    }
  },
  { no: 3, name: "require_manual_approval", kind: "scalar", T: 8 },
  {
    no: 4,
    name: "started_at",
    kind: "message",
    T() {
      return require("timestamp").Timestamp;
    }
  },

];
const obj5 = {
  no: 5,
  name: "status",
  kind: "enum",
  T() {
    const items = ["discord_protos.discord_experimentation.v1.StepStatus", obj, "STEP_STATUS_"];
    return items;
  }
};
items3[4] = obj5;
const tmp11 = new "internalBinaryRead"("discord_protos.discord_experimentation.v1.RampStep", items3, tmp6, RolloutPlan$Type, "create", RampStep$Type, "internalBinaryRead", items3, new.target, undefined, tmp, fn, dependencyMap, obj, obj, new.target, tmp8, tmp3, measurementPlanType, exports, obj5);
let closure_7 = tmp11;
const size = fn(2);
let result = size.fileFinishedImporting("../discord_common/js/packages/protos/discord_protos/discord_experimentation/v1/lifecycle_plan.tsx");

export const PlanStatus = obj;
export const StepStatus = obj;
export const LifecyclePlan = tmp8;
export const MeasurementPlan = tmp3;
export const RolloutPlan = measurementPlanType;
export const RampStep = tmp11;