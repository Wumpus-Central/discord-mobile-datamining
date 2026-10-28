// discord_common/js/packages/protos/discord_protos/discord_kkv_store_value_models/v1/orbs_arcade_game_state.tsx
import _mod1209 from "../../../../../../../_runtime/metro/01209__.js";
import timestamp from "../../../google/protobuf/timestamp.tsx";
import wrappers from "../../../google/protobuf/wrappers.tsx";
import _slicedToArray from "../../../../../../../_runtime/metro/00032__.js";

require = fn;
const OrbsArcadeChargeType = {
  UNSPECIFIED: 0,
  [0]: "UNSPECIFIED",
  FREE: 1,
  [1]: "FREE",
  VIRTUAL_CURRENCY: 2,
  [2]: "VIRTUAL_CURRENCY",
};
let obj2 = {
  UNSPECIFIED: 0,
  [0]: "UNSPECIFIED",
  PENDING: 1,
  [1]: "PENDING",
  ERRORED: 2,
  [2]: "ERRORED",
  CONFIRMED: 3,
  [3]: "CONFIRMED",
};
const MessageType = fn(1209).MessageType;
class OrbsArcadeRun$Type extends MessageType {
  constructor() {
    items = [, , , , ,];
    items[0] = { no: 1, name: "id", kind: "scalar", T: 6 };
    items[1] = {
      no: 2,
      name: "started_at",
      kind: "message",
      T() {
        return require("timestamp").Timestamp;
      },
    };
    items[2] = {
      no: 3,
      name: "ended_at",
      kind: "message",
      T() {
        return require("timestamp").Timestamp;
      },
    };
    items[3] = { no: 4, name: "score", kind: "scalar", T: 13 };
    obj = { no: 5, name: "charge_type", kind: "enum", T: null };
    class T {
      constructor() {
        items = ["discord_protos.discord_kkv_store_value_models.v1.OrbsArcadeChargeType"];
        items[1] = closure_1_3;
        items[2] = "ORBS_ARCADE_CHARGE_TYPE_";
        return items;
      }
    }
    obj.T = T;
    items[4] = obj;
    items[5] = {
      no: 6,
      name: "charge_status",
      kind: "enum",
      T() {
        const items = [
          "discord_protos.discord_kkv_store_value_models.v1.OrbsArcadeChargeStatus",
          obj2,
          "ORBS_ARCADE_CHARGE_STATUS_",
        ];
        return items;
      },
    };
    tmp1 = new tmp("discord_protos.discord_kkv_store_value_models.v1.OrbsArcadeRun", items, T);
    return tmp1;
  }
}
const prototype = OrbsArcadeRun$Type.prototype;
prototype["create"] = function create(partialSettings) {
  const obj = { id: "0", score: 0, chargeType: 0, chargeStatus: 0 };
  const _Object = Object;
  _Object.defineProperty(obj, _mod1209.MESSAGE_TYPE, { enumerable: false, value: this });
  if (undefined !== partialSettings) {
    const result = _mod1209.reflectionMergePartial(this, obj, partialSettings);
    const tmpResult = _mod1209;
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
        obj.id = str4.toString();
      } else if (2 === tmp5) {
        let Timestamp2 = timestamp.Timestamp;
        obj.startedAt = Timestamp2.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.startedAt);
      } else if (3 === tmp5) {
        let Timestamp = timestamp.Timestamp;
        obj.endedAt = Timestamp.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.endedAt);
      } else if (4 === tmp5) {
        obj.score = pos.uint32();
      } else if (5 === tmp5) {
        obj.chargeType = pos.int32();
      } else if (6 === tmp5) {
        obj.chargeStatus = pos.int32();
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
              onRead = _mod1209.UnknownFieldHandler.onRead;
            }
            let onReadResult = onRead(self.typeName, obj, tmp5, tmp6, skipResult);
          }
        }
      }
    } while (pos.pos < sum);
  }
  return obj;
};
prototype["internalBinaryWrite"] = function internalBinaryWrite(id, tag, writeUnknownFields) {
  if ("0" !== id.id) {
    tag.tag(1, _mod1209.WireType.Bit64).fixed64(id.id);
    const tagResult = tag.tag(1, _mod1209.WireType.Bit64);
  }
  if (id.startedAt) {
    const Timestamp = timestamp.Timestamp;
    const tagResult1 = tag.tag(2, _mod1209.WireType.LengthDelimited);
    const joined = Timestamp.internalBinaryWrite(
      id.startedAt,
      tag.tag(2, _mod1209.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    ).join();
    const internalBinaryWriteResult = Timestamp.internalBinaryWrite(
      id.startedAt,
      tag.tag(2, _mod1209.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    );
  }
  if (id.endedAt) {
    const Timestamp2 = timestamp.Timestamp;
    const tagResult2 = tag.tag(3, _mod1209.WireType.LengthDelimited);
    const joined1 = Timestamp2.internalBinaryWrite(
      id.endedAt,
      tag.tag(3, _mod1209.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    ).join();
    const internalBinaryWriteResult1 = Timestamp2.internalBinaryWrite(
      id.endedAt,
      tag.tag(3, _mod1209.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    );
  }
  if (0 !== id.score) {
    tag.tag(4, _mod1209.WireType.Varint).uint32(id.score);
    const tagResult3 = tag.tag(4, _mod1209.WireType.Varint);
  }
  if (0 !== id.chargeType) {
    tag.tag(5, _mod1209.WireType.Varint).int32(id.chargeType);
    const tagResult4 = tag.tag(5, _mod1209.WireType.Varint);
  }
  if (0 !== id.chargeStatus) {
    tag.tag(6, _mod1209.WireType.Varint).int32(id.chargeStatus);
    const tagResult5 = tag.tag(6, _mod1209.WireType.Varint);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = _mod1209.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, id, tag);
  }
  return tag;
};
let items = [
  { no: 1, name: "id", kind: "scalar", T: 6 },
  {
    no: 2,
    name: "started_at",
    kind: "message",
    T() {
      return require("timestamp").Timestamp;
    },
  },
  {
    no: 3,
    name: "ended_at",
    kind: "message",
    T() {
      return require("timestamp").Timestamp;
    },
  },
  { no: 4, name: "score", kind: "scalar", T: 13 },
  {
    no: 5,
    name: "charge_type",
    kind: "enum",
    T() {
      const items = [
        "discord_protos.discord_kkv_store_value_models.v1.OrbsArcadeChargeType",
        OrbsArcadeChargeType,
        "ORBS_ARCADE_CHARGE_TYPE_",
      ];
      return items;
    },
  },
  {
    no: 6,
    name: "charge_status",
    kind: "enum",
    T() {
      const items = [
        "discord_protos.discord_kkv_store_value_models.v1.OrbsArcadeChargeStatus",
        obj2,
        "ORBS_ARCADE_CHARGE_STATUS_",
      ];
      return items;
    },
  },
];
const object = new Object(
  "discord_protos.discord_kkv_store_value_models.v1.OrbsArcadeRun",
  items,
  tmp4,
  tmp3,
  "create",
  tmp2,
  tmp,
  "internalBinaryRead",
  "internalBinaryWrite",
  OrbsArcadeRun$Type,
  fn,
  dependencyMap,
);
const MessageType2 = fn(1209).MessageType;
class OrbsArcadeRewardGrant$Type extends MessageType2 {
  constructor() {
    items = [, , ,];
    items[0] = { no: 1, name: "id", kind: "scalar", T: 6 };
    items[1] = {
      no: 2,
      name: "pending_at",
      kind: "message",
      T() {
        return require("timestamp").Timestamp;
      },
    };
    obj = { no: 3, name: "claimed_at", kind: "message", T: null };
    class T {
      constructor() {
        return closure_1_0(closure_1_1[2]).Timestamp;
      }
    }
    obj.T = T;
    items[2] = obj;
    items[3] = {
      no: 4,
      name: "source_run_id",
      kind: "message",
      T() {
        return require("wrappers").Int64Value;
      },
    };
    tmp1 = new tmp("discord_protos.discord_kkv_store_value_models.v1.OrbsArcadeRewardGrant", items, T);
    return tmp1;
  }
}
const prototype2 = OrbsArcadeRewardGrant$Type.prototype;
prototype2["create"] = function create(partialSettings) {
  const obj = { id: "0" };
  const _Object = Object;
  _Object.defineProperty(obj, _mod1209.MESSAGE_TYPE, { enumerable: false, value: this });
  if (undefined !== partialSettings) {
    const result = _mod1209.reflectionMergePartial(this, obj, partialSettings);
    const tmpResult = _mod1209;
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
        let str4 = pos.fixed64();
        obj.id = str4.toString();
      } else if (2 === tmp5) {
        let Timestamp2 = timestamp.Timestamp;
        obj.pendingAt = Timestamp2.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.pendingAt);
      } else if (3 === tmp5) {
        let Timestamp = timestamp.Timestamp;
        obj.claimedAt = Timestamp.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.claimedAt);
      } else if (4 === tmp5) {
        let Int64Value = wrappers.Int64Value;
        obj.sourceRunId = Int64Value.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.sourceRunId);
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
              onRead = _mod1209.UnknownFieldHandler.onRead;
            }
            let onReadResult = onRead(self.typeName, obj, tmp5, tmp6, skipResult);
          }
        }
      }
    } while (pos.pos < sum);
  }
  return obj;
};
prototype2["internalBinaryWrite"] = function internalBinaryWrite(id, tag, writeUnknownFields) {
  if ("0" !== id.id) {
    tag.tag(1, _mod1209.WireType.Bit64).fixed64(id.id);
    const tagResult = tag.tag(1, _mod1209.WireType.Bit64);
  }
  if (id.pendingAt) {
    const Timestamp = timestamp.Timestamp;
    const tagResult1 = tag.tag(2, _mod1209.WireType.LengthDelimited);
    const joined = Timestamp.internalBinaryWrite(
      id.pendingAt,
      tag.tag(2, _mod1209.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    ).join();
    const internalBinaryWriteResult = Timestamp.internalBinaryWrite(
      id.pendingAt,
      tag.tag(2, _mod1209.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    );
  }
  if (id.claimedAt) {
    const Timestamp2 = timestamp.Timestamp;
    const tagResult2 = tag.tag(3, _mod1209.WireType.LengthDelimited);
    const joined1 = Timestamp2.internalBinaryWrite(
      id.claimedAt,
      tag.tag(3, _mod1209.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    ).join();
    const internalBinaryWriteResult1 = Timestamp2.internalBinaryWrite(
      id.claimedAt,
      tag.tag(3, _mod1209.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    );
  }
  if (id.sourceRunId) {
    const Int64Value = wrappers.Int64Value;
    const tagResult3 = tag.tag(4, _mod1209.WireType.LengthDelimited);
    const joined2 = Int64Value.internalBinaryWrite(
      id.sourceRunId,
      tag.tag(4, _mod1209.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    ).join();
    const internalBinaryWriteResult2 = Int64Value.internalBinaryWrite(
      id.sourceRunId,
      tag.tag(4, _mod1209.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    );
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = _mod1209.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, id, tag);
  }
  return tag;
};
const items1 = [
  { no: 1, name: "id", kind: "scalar", T: 6 },
  {
    no: 2,
    name: "pending_at",
    kind: "message",
    T() {
      return require("timestamp").Timestamp;
    },
  },
  {
    no: 3,
    name: "claimed_at",
    kind: "message",
    T() {
      return require("timestamp").Timestamp;
    },
  },
  {
    no: 4,
    name: "source_run_id",
    kind: "message",
    T() {
      return require("wrappers").Int64Value;
    },
  },
];
const tmp5 = new tmp(
  "discord_protos.discord_kkv_store_value_models.v1.OrbsArcadeRewardGrant",
  items1,
  tmp4,
  OrbsArcadeRewardGrant$Type,
  "create",
  tmp2,
  tmp,
  "internalBinaryRead",
  "internalBinaryWrite",
  undefined,
  fn,
  dependencyMap,
  OrbsArcadeChargeType,
  obj2,
  object,
  items1,
  new.target,
  exports,
);
let closure_6 = tmp5;
const MessageType3 = fn(1209).MessageType;
class OrbsArcadeGameState$Type extends MessageType3 {
  constructor() {
    items = [, , , , , , , , ,];
    items[0] = { no: 1, name: "user_id", kind: "scalar", T: 6 };
    items[1] = { no: 2, name: "game_id", kind: "scalar", T: 6 };
    items[2] = { no: 3, name: "game_version_id", kind: "scalar", T: 6 };
    items[3] = {
      no: 4,
      name: "enrolled_at",
      kind: "message",
      T() {
        return require("timestamp").Timestamp;
      },
    };
    items[4] = {
      no: 5,
      name: "expires_at",
      kind: "message",
      T() {
        return require("timestamp").Timestamp;
      },
    };
    items[5] = {
      no: 6,
      name: "current_run",
      kind: "message",
      T() {
        return object;
      },
    };
    obj = { no: 7, name: "reward_grants", kind: "map", K: 6, V: null };
    obj1 = { kind: "message", T: null };
    class T {
      constructor() {
        return closure_1_6;
      }
    }
    obj1.T = T;
    obj.V = obj1;
    items[6] = obj;
    items[7] = { no: 8, name: "num_free_plays_used", kind: "scalar", T: 13 };
    items[8] = { no: 9, name: "enrollment_high_score", kind: "scalar", T: 13 };
    items[9] = { no: 10, name: "all_time_high_score", kind: "scalar", T: 13 };
    tmp1 = new tmp("discord_protos.discord_kkv_store_value_models.v1.OrbsArcadeGameState", items, T);
    return tmp1;
  }
}
const prototype3 = OrbsArcadeGameState$Type.prototype;
prototype3["create"] = function create(partialSettings) {
  const obj = {
    userId: "0",
    gameId: "0",
    gameVersionId: "0",
    rewardGrants: {},
    numFreePlaysUsed: 0,
    enrollmentHighScore: 0,
    allTimeHighScore: 0,
  };
  const _Object = Object;
  _Object.defineProperty(obj, _mod1209.MESSAGE_TYPE, { enumerable: false, value: this });
  if (undefined !== partialSettings) {
    const result = _mod1209.reflectionMergePartial(this, obj, partialSettings);
    const tmpResult = _mod1209;
  }
  return obj;
};
prototype3["internalBinaryRead"] = function internalBinaryRead(pos, arg1, arg2, arg3) {
  const self = this;
  let obj = arg3;
  if (arg3 == null) {
    obj = self.create();
  }
  if (pos.pos < pos.pos + arg1) {
    [r10019, r10020] = pos.tag();
    const tmp3 = _slicedToArray(pos.tag(), 2);
  }
  return obj;
};
prototype3["binaryReadMap7"] = function binaryReadMap7(arg0, pos, arg2) {
  const sum = pos.pos + pos.uint32();
  let obj;
  let str;
  if (pos.pos < sum) {
    while (true) {
      let tmp6 = _slicedToArray(pos.tag(), 2);
      [tmp7, r10020] = tmp6;
      let str1 = tmp3;
      if (1 === tmp7) {
        let str3 = pos.fixed64();
        str1 = str3.toString();
        let internalBinaryReadResult = tmp2;
      } else if (2 !== tmp7) {
        break;
      } else {
        internalBinaryReadResult = closure_6.internalBinaryRead(pos, pos.uint32(), arg2);
      }
      tmp2 = internalBinaryReadResult;
      tmp3 = str1;
      obj = internalBinaryReadResult;
      str = str1;
    }
    const _globalThis = globalThis;
    const error = new Error(
      "unknown map entry field for field discord_protos.discord_kkv_store_value_models.v1.OrbsArcadeGameState.reward_grants",
    );
    throw error;
  }
  if (str == null) {
    str = "0";
  }
  if (obj == null) {
    obj = closure_6.create();
  }
  arg0[str] = obj;
};
prototype3["internalBinaryWrite"] = function internalBinaryWrite(userId, tag, writeUnknownFields) {
  if ("0" !== userId.userId) {
    tag.tag(1, _mod1209.WireType.Bit64).fixed64(userId.userId);
    const tagResult = tag.tag(1, _mod1209.WireType.Bit64);
  }
  if ("0" !== userId.gameId) {
    tag.tag(2, _mod1209.WireType.Bit64).fixed64(userId.gameId);
    const tagResult1 = tag.tag(2, _mod1209.WireType.Bit64);
  }
  if ("0" !== userId.gameVersionId) {
    tag.tag(3, _mod1209.WireType.Bit64).fixed64(userId.gameVersionId);
    const tagResult2 = tag.tag(3, _mod1209.WireType.Bit64);
  }
  if (userId.enrolledAt) {
    const Timestamp = timestamp.Timestamp;
    const tagResult3 = tag.tag(4, _mod1209.WireType.LengthDelimited);
    const joined = Timestamp.internalBinaryWrite(
      userId.enrolledAt,
      tag.tag(4, _mod1209.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    ).join();
    const internalBinaryWriteResult = Timestamp.internalBinaryWrite(
      userId.enrolledAt,
      tag.tag(4, _mod1209.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    );
  }
  if (userId.expiresAt) {
    const Timestamp2 = timestamp.Timestamp;
    const tagResult4 = tag.tag(5, _mod1209.WireType.LengthDelimited);
    const joined1 = Timestamp2.internalBinaryWrite(
      userId.expiresAt,
      tag.tag(5, _mod1209.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    ).join();
    const internalBinaryWriteResult1 = Timestamp2.internalBinaryWrite(
      userId.expiresAt,
      tag.tag(5, _mod1209.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    );
  }
  if (userId.currentRun) {
    const tagResult5 = tag.tag(6, _mod1209.WireType.LengthDelimited);
    const joined2 = object
      .internalBinaryWrite(userId.currentRun, tag.tag(6, _mod1209.WireType.LengthDelimited).fork(), writeUnknownFields)
      .join();
    const internalBinaryWriteResult2 = object.internalBinaryWrite(
      userId.currentRun,
      tag.tag(6, _mod1209.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    );
  }
  const keys = Object.keys(userId.rewardGrants);
  const iter = keys[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tagResult6 = tag.tag(7, _mod1209.WireType.LengthDelimited);
    let forkResult = tagResult6.fork();
    let tagResult7 = forkResult.tag(1, _mod1209.WireType.Bit64);
    let fixed64Result3 = tagResult7.fixed64(nextResult);
    let tagResult8 = tag.tag(2, _mod1209.WireType.LengthDelimited);
    let forkResult1 = tagResult8.fork();
    let internalBinaryWriteResult3 = closure_6.internalBinaryWrite(
      userId.rewardGrants[nextResult],
      tag,
      writeUnknownFields,
    );
    let joined3 = tag.join();
    let joined4 = joined3.join();
    continue;
  }
  if (0 !== userId.numFreePlaysUsed) {
    tag.tag(8, _mod1209.WireType.Varint).uint32(userId.numFreePlaysUsed);
    const tagResult9 = tag.tag(8, _mod1209.WireType.Varint);
  }
  if (0 !== userId.enrollmentHighScore) {
    tag.tag(9, _mod1209.WireType.Varint).uint32(userId.enrollmentHighScore);
    const tagResult10 = tag.tag(9, _mod1209.WireType.Varint);
  }
  if (0 !== userId.allTimeHighScore) {
    tag.tag(10, _mod1209.WireType.Varint).uint32(userId.allTimeHighScore);
    const tagResult11 = tag.tag(10, _mod1209.WireType.Varint);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = _mod1209.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, userId, tag);
  }
  return tag;
};
const items2 = [
  { no: 1, name: "user_id", kind: "scalar", T: 6 },
  { no: 2, name: "game_id", kind: "scalar", T: 6 },
  { no: 3, name: "game_version_id", kind: "scalar", T: 6 },
  {
    no: 4,
    name: "enrolled_at",
    kind: "message",
    T() {
      return require("timestamp").Timestamp;
    },
  },
  {
    no: 5,
    name: "expires_at",
    kind: "message",
    T() {
      return require("timestamp").Timestamp;
    },
  },
  {
    no: 6,
    name: "current_run",
    kind: "message",
    T() {
      return object;
    },
  },
  ,
  ,
  ,
];
const obj3 = { no: 7, name: "reward_grants", kind: "map", K: 6, V: null };
const obj4 = { kind: "message", T: null };
class T {
  constructor() {
    return closure_1_6;
  }
}
obj4.T = T;
obj3.V = obj4;
items2[6] = obj3;
items2[7] = { no: 8, name: "num_free_plays_used", kind: "scalar", T: 13 };
items2[8] = { no: 9, name: "enrollment_high_score", kind: "scalar", T: 13 };
items2[9] = { no: 10, name: "all_time_high_score", kind: "scalar", T: 13 };
const size = fn(2);
let result = size.fileFinishedImporting(
  "../discord_common/js/packages/protos/discord_protos/discord_kkv_store_value_models/v1/orbs_arcade_game_state.tsx",
);

export { OrbsArcadeChargeType };
export const OrbsArcadeChargeStatus = obj2;
export const OrbsArcadeRun = object;
export const OrbsArcadeRewardGrant = tmp5;
export const OrbsArcadeGameState = new "binaryReadMap7"(
  "discord_protos.discord_kkv_store_value_models.v1.OrbsArcadeGameState",
  items2,
  tmp4,
  OrbsArcadeRewardGrant$Type,
  "create",
  T,
  OrbsArcadeGameState$Type,
  "binaryReadMap7",
  items2,
  undefined,
  fn,
  dependencyMap,
  OrbsArcadeChargeType,
  obj2,
  object,
);
