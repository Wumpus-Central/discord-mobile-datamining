// discord_common/js/packages/protos/discord_protos/discord_experimentation/v1/lifecycle_plan.tsx
import _mod1306 from "../../../../../../../_runtime/metro/01306__.js";
import now from "../../../google/protobuf/timestamp.tsx";
import internalJsonWrite from "../../../google/protobuf/duration.tsx";
import closure_2 from "../../../../../../../_runtime/metro/00032__slicedToArray.js";
import {
  MessageType,
  MessageType as MessageType2,
  MessageType as MessageType3,
  MessageType as MessageType4,
} from "../../../../../../../_runtime/metro/01306__.js";

require = arg1;
let obj = {
  UNSPECIFIED: 0,
  [0]: "UNSPECIFIED",
  DRAFT: 1,
  [1]: "DRAFT",
  ACTIVE: 2,
  [2]: "ACTIVE",
  PAUSED_MANUAL: 3,
  [3]: "PAUSED_MANUAL",
  PAUSED_HEALTH_CHECK: 4,
  [4]: "PAUSED_HEALTH_CHECK",
  COMPLETED: 5,
  [5]: "COMPLETED",
  CANCELED: 6,
  [6]: "CANCELED",
};
obj = {
  UNSPECIFIED: 0,
  [0]: "UNSPECIFIED",
  PENDING: 1,
  [1]: "PENDING",
  IN_PROGRESS: 2,
  [2]: "IN_PROGRESS",
  AWAITING_MANUAL_APPROVAL: 3,
  [3]: "AWAITING_MANUAL_APPROVAL",
  COMPLETED: 4,
  [4]: "COMPLETED",
};
class LifecyclePlan$Type extends MessageType {
  constructor() {
    obj = {
      no: 1,
      name: "measurement_plan",
      kind: "message",
      T() {
        return closure_5;
      },
    };
    items = [,];
    items[0] = obj;
    items[1] = {
      no: 2,
      name: "rollout_plan",
      kind: "message",
      T() {
        return closure_6;
      },
    };
    tmp = new tmp("discord_protos.discord_experimentation.v1.LifecyclePlan", items, new.target);
    // ThrowIfThisInitialized (0x7c)
    return tmp;
  }
}
const prototype = LifecyclePlan$Type.prototype;
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
prototype["internalBinaryRead"] = function internalBinaryRead(pos, arg1, readUnknownField) {
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
        let tmp26 = closure_5;
        let tmp27 = closure_5;
        let tmp28 = pos;
        let tmp29 = readUnknownField;
        obj.measurementPlan = closure_5.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.measurementPlan);
      } else if (2 === tmp5) {
        let tmp22 = measurementPlanType;
        let tmp23 = measurementPlanType;
        let tmp24 = pos;
        let tmp25 = readUnknownField;
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
prototype["internalBinaryWrite"] = function internalBinaryWrite(measurementPlan, tag, writeUnknownFields) {
  if (measurementPlan.measurementPlan) {
    const tagResult = tag.tag(1, _mod1306.WireType.LengthDelimited);
    const joined = closure_5
      .internalBinaryWrite(
        measurementPlan.measurementPlan,
        tag.tag(1, _mod1306.WireType.LengthDelimited).fork(),
        writeUnknownFields,
      )
      .join();
    const internalBinaryWriteResult = closure_5.internalBinaryWrite(
      measurementPlan.measurementPlan,
      tag.tag(1, _mod1306.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    );
  }
  if (measurementPlan.rolloutPlan) {
    const tagResult1 = tag.tag(2, _mod1306.WireType.LengthDelimited);
    const joined1 = measurementPlanType
      .internalBinaryWrite(
        measurementPlan.rolloutPlan,
        tag.tag(2, _mod1306.WireType.LengthDelimited).fork(),
        writeUnknownFields,
      )
      .join();
    const internalBinaryWriteResult1 = measurementPlanType.internalBinaryWrite(
      measurementPlan.rolloutPlan,
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
    onWrite(this.typeName, measurementPlan, tag);
  }
  return tag;
};
obj = {
  no: 1,
  name: "measurement_plan",
  kind: "message",
  T() {
    return closure_5;
  },
};
let items = [
  obj,
  {
    no: 2,
    name: "rollout_plan",
    kind: "message",
    T() {
      return closure_6;
    },
  },
];
let tmp8 = new "CANCELED"(
  "discord_protos.discord_experimentation.v1.LifecyclePlan",
  items,
  tmp6,
  tmp5,
  "create",
  tmp4,
  "internalBinaryRead",
  "internalBinaryWrite",
  tmp3,
  tmp2,
);
// ThrowIfThisInitialized (0x7c)
class MeasurementPlan$Type extends MessageType2 {
  constructor() {
    obj = {
      no: 1,
      name: "status",
      kind: "enum",
      T() {
        const items = ["discord_protos.discord_experimentation.v1.PlanStatus", closure_3, "PLAN_STATUS_"];
        return items;
      },
    };
    items = [,];
    items[0] = obj;
    items[1] = {
      no: 2,
      name: "ramp_steps",
      kind: "message",
      repeat: 1,
      T() {
        return closure_7;
      },
    };
    tmp = new tmp("discord_protos.discord_experimentation.v1.MeasurementPlan", items, new.target);
    // ThrowIfThisInitialized (0x7c)
    return tmp;
  }
}
const prototype2 = MeasurementPlan$Type.prototype;
prototype2["create"] = function create(arr) {
  obj = { status: 0, rampSteps: [] };
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
        obj.status = pos.int32();
      } else if (2 === tmp5) {
        let rampSteps = obj.rampSteps;
        let tmp22 = closure_7;
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
prototype2["internalBinaryWrite"] = function internalBinaryWrite(status, tag, writeUnknownFields) {
  let length;
  if (0 !== status.status) {
    tag.tag(1, _mod1306.WireType.Varint).int32(status.status);
    const tagResult = tag.tag(1, _mod1306.WireType.Varint);
  }
  let num2 = 0;
  if (0 < status.rampSteps.length) {
    do {
      let tmp4 = closure_7;
      let tmp5 = require;
      let tmp6 = dependencyMap;
      let tagResult1 = tag.tag(2, _mod1306.WireType.LengthDelimited);
      let internalBinaryWriteResult = closure_7.internalBinaryWrite(
        status.rampSteps[num2],
        tagResult1.fork(),
        writeUnknownFields,
      );
      let joined = internalBinaryWriteResult.join();
      num2 = num2 + 1;
      length = status.rampSteps.length;
    } while (num2 < length);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = _mod1306.UnknownFieldHandler.onWrite;
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
      const items = ["discord_protos.discord_experimentation.v1.PlanStatus", closure_3, "PLAN_STATUS_"];
      return items;
    },
  },
];
const obj2 = {
  no: 2,
  name: "ramp_steps",
  kind: "message",
  repeat: 1,
  T() {
    return closure_7;
  },
};
items1[1] = obj2;
tmp3 = new tmp3(
  "discord_protos.discord_experimentation.v1.MeasurementPlan",
  items1,
  tmp6,
  tmp5,
  "create",
  MeasurementPlan$Type,
  "internalBinaryRead",
  "internalBinaryWrite",
  tmp3,
  undefined,
  tmp,
  arg1,
  dependencyMap,
  obj,
  obj,
  new.target,
  tmp8,
  items1,
  new.target,
  exports,
  obj2,
);
// ThrowIfThisInitialized (0x7c)
let closure_5 = tmp3;
class RolloutPlan$Type extends MessageType3 {
  constructor() {
    obj = {
      no: 1,
      name: "status",
      kind: "enum",
      T() {
        const items = ["discord_protos.discord_experimentation.v1.PlanStatus", closure_3, "PLAN_STATUS_"];
        return items;
      },
    };
    items = [,];
    items[0] = obj;
    items[1] = {
      no: 2,
      name: "ramp_steps",
      kind: "message",
      repeat: 1,
      T() {
        return closure_7;
      },
    };
    tmp = new tmp("discord_protos.discord_experimentation.v1.RolloutPlan", items, new.target);
    // ThrowIfThisInitialized (0x7c)
    return tmp;
  }
}
const prototype3 = RolloutPlan$Type.prototype;
prototype3["create"] = function create(arr) {
  obj = { status: 0, rampSteps: [] };
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
        obj.status = pos.int32();
      } else if (2 === tmp5) {
        let rampSteps = obj.rampSteps;
        let tmp22 = closure_7;
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
prototype3["internalBinaryWrite"] = function internalBinaryWrite(status, tag, writeUnknownFields) {
  let length;
  if (0 !== status.status) {
    tag.tag(1, _mod1306.WireType.Varint).int32(status.status);
    const tagResult = tag.tag(1, _mod1306.WireType.Varint);
  }
  let num2 = 0;
  if (0 < status.rampSteps.length) {
    do {
      let tmp4 = closure_7;
      let tmp5 = require;
      let tmp6 = dependencyMap;
      let tagResult1 = tag.tag(2, _mod1306.WireType.LengthDelimited);
      let internalBinaryWriteResult = closure_7.internalBinaryWrite(
        status.rampSteps[num2],
        tagResult1.fork(),
        writeUnknownFields,
      );
      let joined = internalBinaryWriteResult.join();
      num2 = num2 + 1;
      length = status.rampSteps.length;
    } while (num2 < length);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = _mod1306.UnknownFieldHandler.onWrite;
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
      const items = ["discord_protos.discord_experimentation.v1.PlanStatus", closure_3, "PLAN_STATUS_"];
      return items;
    },
  },
];
const obj4 = {
  no: 2,
  name: "ramp_steps",
  kind: "message",
  repeat: 1,
  T() {
    return closure_7;
  },
};
items2[1] = obj4;
const measurementPlanType = new MeasurementPlan$Type(
  "discord_protos.discord_experimentation.v1.RolloutPlan",
  items2,
  tmp6,
  RolloutPlan$Type,
  "create",
  MeasurementPlan$Type,
  "internalBinaryRead",
  "internalBinaryWrite",
  items2,
  undefined,
  tmp,
  arg1,
  dependencyMap,
  obj,
  obj,
  new.target,
  tmp8,
  tmp3,
  new.target,
  exports,
  obj4,
  undefined,
  4,
);
// ThrowIfThisInitialized (0x7c)
class RampStep$Type extends MessageType4 {
  constructor() {
    items = [, , , ,];
    items[0] = { no: 1, name: "target_basis_points", kind: "scalar", T: 5 };
    items[1] = {
      no: 2,
      name: "hold_duration",
      kind: "message",
      T() {
        return callback(7650).Duration;
      },
    };
    items[2] = { no: 3, name: "require_manual_approval", kind: "scalar", T: 8 };
    obj = { no: 4, name: "started_at", kind: "message", T: null };
    class T {
      constructor() {
        return require("now").Timestamp;
      }
    }
    obj[3] = T;
    items[3] = obj;
    items[4] = {
      no: 5,
      name: "status",
      kind: "enum",
      T() {
        const items = ["discord_protos.discord_experimentation.v1.StepStatus", closure_4, "STEP_STATUS_"];
        return items;
      },
    };
    tmp = new tmp("discord_protos.discord_experimentation.v1.RampStep", items, T);
    // ThrowIfThisInitialized (0x7c)
    return tmp;
  }
}
const prototype4 = RampStep$Type.prototype;
prototype4["create"] = function create(arr) {
  obj = { targetBasisPoints: 0, requireManualApproval: false, status: 0 };
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
        obj.targetBasisPoints = pos.int32();
      } else if (2 === tmp5) {
        let tmp27 = require;
        let tmp28 = dependencyMap;
        let Duration = internalJsonWrite.Duration;
        let tmp29 = Duration;
        let tmp30 = pos;
        let tmp31 = readUnknownField;
        obj.holdDuration = Duration.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.holdDuration);
      } else if (3 === tmp5) {
        obj.requireManualApproval = pos.bool();
      } else if (4 === tmp5) {
        let tmp22 = require;
        let tmp23 = dependencyMap;
        let Timestamp = now.Timestamp;
        let tmp24 = Timestamp;
        let tmp25 = pos;
        let tmp26 = readUnknownField;
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
prototype4["internalBinaryWrite"] = function internalBinaryWrite(targetBasisPoints, tag, writeUnknownFields) {
  if (0 !== targetBasisPoints.targetBasisPoints) {
    tag.tag(1, _mod1306.WireType.Varint).int32(targetBasisPoints.targetBasisPoints);
    const tagResult = tag.tag(1, _mod1306.WireType.Varint);
  }
  if (targetBasisPoints.holdDuration) {
    const Duration = internalJsonWrite.Duration;
    const tagResult1 = tag.tag(2, _mod1306.WireType.LengthDelimited);
    const joined = Duration.internalBinaryWrite(
      targetBasisPoints.holdDuration,
      tag.tag(2, _mod1306.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    ).join();
    const internalBinaryWriteResult = Duration.internalBinaryWrite(
      targetBasisPoints.holdDuration,
      tag.tag(2, _mod1306.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    );
  }
  if (false !== targetBasisPoints.requireManualApproval) {
    tag.tag(3, _mod1306.WireType.Varint).bool(targetBasisPoints.requireManualApproval);
    const tagResult2 = tag.tag(3, _mod1306.WireType.Varint);
  }
  if (targetBasisPoints.startedAt) {
    const Timestamp = now.Timestamp;
    const tagResult3 = tag.tag(4, _mod1306.WireType.LengthDelimited);
    const joined1 = Timestamp.internalBinaryWrite(
      targetBasisPoints.startedAt,
      tag.tag(4, _mod1306.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    ).join();
    const internalBinaryWriteResult1 = Timestamp.internalBinaryWrite(
      targetBasisPoints.startedAt,
      tag.tag(4, _mod1306.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    );
  }
  if (0 !== targetBasisPoints.status) {
    tag.tag(5, _mod1306.WireType.Varint).int32(targetBasisPoints.status);
    const tagResult4 = tag.tag(5, _mod1306.WireType.Varint);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = _mod1306.UnknownFieldHandler.onWrite;
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
      return callback(7650).Duration;
    },
  },
  { no: 3, name: "require_manual_approval", kind: "scalar", T: 8 },
  {
    no: 4,
    name: "started_at",
    kind: "message",
    T() {
      return callback(1335).Timestamp;
    },
  },
];
const obj5 = {
  no: 5,
  name: "status",
  kind: "enum",
  T() {
    const items = ["discord_protos.discord_experimentation.v1.StepStatus", closure_4, "STEP_STATUS_"];
    return items;
  },
};
items3[4] = obj5;
let tmp11 = new "internalBinaryRead"(
  "discord_protos.discord_experimentation.v1.RampStep",
  items3,
  tmp6,
  RolloutPlan$Type,
  "create",
  RampStep$Type,
  "internalBinaryRead",
  items3,
  new.target,
  undefined,
  tmp,
  arg1,
  dependencyMap,
  obj,
  obj,
  new.target,
  tmp8,
  tmp3,
  measurementPlanType,
  exports,
  obj5,
);
// ThrowIfThisInitialized (0x7c)
let closure_7 = tmp11;
let result = require("set").fileFinishedImporting(
  "../discord_common/js/packages/protos/discord_protos/discord_experimentation/v1/lifecycle_plan.tsx",
);

export const PlanStatus = obj;
export const StepStatus = obj;
export const LifecyclePlan = tmp8;
export const MeasurementPlan = tmp3;
export const RolloutPlan = measurementPlanType;
export const RampStep = tmp11;
