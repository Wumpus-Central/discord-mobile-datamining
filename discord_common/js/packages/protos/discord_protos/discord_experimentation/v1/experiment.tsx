// discord_common/js/packages/protos/discord_protos/discord_experimentation/v1/experiment.tsx
import _mod1198 from "../../../../../../../_runtime/metro/01198__.js";
import timestamp from "../../../google/protobuf/timestamp.tsx";
import wrappers from "../../../google/protobuf/wrappers.tsx";
import rules from "rules.tsx";
import duration from "../../../google/protobuf/duration.tsx";
import _slicedToArray from "../../../../../../../_runtime/metro/00032__.js";

require = fn;
const Experiment_NumberLineSettings_Mode = {
  EXCLUSIVE: 0,
  [0]: "EXCLUSIVE",
  SYNCED: 1,
  [1]: "SYNCED",
  PRE_ALLOCATED: 2,
  [2]: "PRE_ALLOCATED",
};
let obj2 = {
  UNSPECIFIED: 0,
  [0]: "UNSPECIFIED",
  USER: 1,
  [1]: "USER",
  INSTALLATION: 2,
  [2]: "INSTALLATION",
  GUILD: 3,
  [3]: "GUILD",
  CUSTOM: 4,
  [4]: "CUSTOM",
};
const obj3 = {
  SURFACE_UNSPECIFIED: 0,
  [0]: "SURFACE_UNSPECIFIED",
  API: 1,
  [1]: "API",
  APP: 2,
  [2]: "APP",
  DEVELOPER_PORTAL: 3,
  [3]: "DEVELOPER_PORTAL",
  ADMIN_PANEL: 4,
  [4]: "ADMIN_PANEL",
  ADS_BUDGET_AB: 5,
  [5]: "ADS_BUDGET_AB",
  AV_WORKER: 6,
  [6]: "AV_WORKER",
  SEO: 7,
  [7]: "SEO",
  MARKETING: 8,
  [8]: "MARKETING",
};
const obj4 = { ENABLED: 0, [0]: "ENABLED", DISABLED: 1, [1]: "DISABLED" };
const obj5 = {
  FULL: 0,
  [0]: "FULL",
  FORCE_CONTROL: 3,
  [3]: "FORCE_CONTROL",
  OVERRIDES_ONLY: 4,
  [4]: "OVERRIDES_ONLY",
  OFF: 5,
  [5]: "OFF",
};
const obj6 = { DEFAULT: 0, [0]: "DEFAULT", HOLDOUT: 1, [1]: "HOLDOUT", NUMBERLINE: 2, [2]: "NUMBERLINE" };
const obj7 = {
  CUSTOM_UNIT_PREFIX_UNSPECIFIED: 0,
  [0]: "CUSTOM_UNIT_PREFIX_UNSPECIFIED",
  SEO_URL_SLUG: 1,
  [1]: "SEO_URL_SLUG",
};
const obj8 = {
  EXPOSURE_POINT_ID_UNSPECIFIED: 0,
  [0]: "EXPOSURE_POINT_ID_UNSPECIFIED",
  SEO_INSTALLATION_PAGE_LOAD: 1,
  [1]: "SEO_INSTALLATION_PAGE_LOAD",
  MARKETING_INSTALLATION_PAGE_LOAD: 2,
  [2]: "MARKETING_INSTALLATION_PAGE_LOAD",
  INVITE_GUILD_RESOLVE: 3,
  [3]: "INVITE_GUILD_RESOLVE",
};
const obj9 = { DEFAULT: 0, [0]: "DEFAULT", OFF: 1, [1]: "OFF", OVERRIDES_ONLY: 2, [2]: "OVERRIDES_ONLY" };
const obj10 = {
  UNSPECIFIED: 0,
  [0]: "UNSPECIFIED",
  CONTROL: 1,
  [1]: "CONTROL",
  TREATMENT: 2,
  [2]: "TREATMENT",
  OVERRIDE: 3,
  [3]: "OVERRIDE",
};
const obj11 = {
  UNSPECIFIED: 0,
  [0]: "UNSPECIFIED",
  FULL: 1,
  [1]: "FULL",
  FORCE_CONTROL: 2,
  [2]: "FORCE_CONTROL",
  OFF: 3,
  [3]: "OFF",
};
const obj12 = { UNSPECIFIED: 0, [0]: "UNSPECIFIED", ENABLED: 1, [1]: "ENABLED", DISABLED: 2, [2]: "DISABLED" };
const obj13 = {
  UNSPECIFIED: 0,
  [0]: "UNSPECIFIED",
  ACTIVE: 1,
  [1]: "ACTIVE",
  UNUSED: 2,
  [2]: "UNUSED",
  BURNED: 3,
  [3]: "BURNED",
  PRESERVED: 4,
  [4]: "PRESERVED",
};
const obj14 = {
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
const obj15 = {
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
const obj16 = {
  UNSPECIFIED: 0,
  [0]: "UNSPECIFIED",
  DRAFT: 1,
  [1]: "DRAFT",
  MEASUREMENT: 2,
  [2]: "MEASUREMENT",
  ROLLING_OUT: 4,
  [4]: "ROLLING_OUT",
  ARCHIVED: 6,
  [6]: "ARCHIVED",
  AA_MODE: 7,
  [7]: "AA_MODE",
  PAUSED: 8,
  [8]: "PAUSED",
};
const MessageType = fn(1198).MessageType;
class Experiment$Type extends MessageType {
  constructor() {
    items = [, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ,];
    items[0] = { no: 1, name: "id", kind: "scalar", T: 6 };
    items[1] = { no: 2, name: "name", kind: "scalar", T: 9 };
    items[2] = {
      no: 3,
      name: "created_at",
      kind: "message",
      T() {
        return require("timestamp").Timestamp;
      },
    };
    items[3] = { no: 4, name: "creator_id", kind: "scalar", T: 6 };
    items[4] = { no: 5, name: "version", kind: "scalar", T: 5 };
    items[5] = {
      no: 6,
      name: "edited_at",
      kind: "message",
      T() {
        return require("timestamp").Timestamp;
      },
    };
    items[6] = { no: 7, name: "editor_id", kind: "scalar", T: 6 };
    items[7] = { no: 8, name: "title", kind: "scalar", T: 9 };
    items[8] = { no: 9, name: "description", kind: "scalar", T: 9 };
    items[9] = {
      no: 10,
      name: "hypothesis",
      kind: "message",
      T() {
        return require("wrappers").StringValue;
      },
    };
    items[10] = {
      no: 11,
      name: "tech_spec_link",
      kind: "message",
      T() {
        return require("wrappers").StringValue;
      },
    };
    items[11] = { no: 12, name: "revision", kind: "scalar", T: 5 };
    items[12] = { no: 13, name: "hash_key", kind: "scalar", T: 9 };
    items[13] = {
      no: 14,
      name: "unit_type",
      kind: "enum",
      T() {
        const items = ["discord_protos.discord_experimentation.v1.Experiment.UnitType", obj2];
        return items;
      },
    };
    items[14] = {
      no: 15,
      name: "variations",
      kind: "message",
      repeat: 1,
      T() {
        return closure_1_20;
      },
    };
    items[15] = {
      no: 16,
      name: "rules",
      kind: "message",
      repeat: 1,
      T() {
        return require("rules").Rule;
      },
    };
    items[16] = {
      no: 18,
      name: "phase",
      kind: "enum",
      T() {
        const items = ["discord_protos.discord_experimentation.v1.Phase", obj16];
        return items;
      },
    };
    items[17] = {
      no: 19,
      name: "surfaces",
      kind: "enum",
      repeat: 1,
      T() {
        const items = ["discord_protos.discord_experimentation.v1.Experiment.Surface", obj3];
        return items;
      },
    };
    items[18] = { no: 20, name: "owning_team_id", kind: "scalar", T: 9 };
    items[19] = { no: 21, name: "cached_notification_channel_id", kind: "scalar", T: 6 };
    items[20] = {
      no: 22,
      name: "exposure_tracking",
      kind: "enum",
      T() {
        const items = ["discord_protos.discord_experimentation.v1.Experiment.ExposureTracking", obj4];
        return items;
      },
    };
    items[21] = {
      no: 25,
      name: "assignment_mode",
      kind: "enum",
      T() {
        const items = ["discord_protos.discord_experimentation.v1.Experiment.AssignmentMode", obj5];
        return items;
      },
    };
    items[22] = { no: 23, name: "enable_edit_raw_json_ui", kind: "scalar", T: 8 };
    items[23] = {
      no: 46,
      name: "dynamic_config_size_limit_override",
      kind: "message",
      T() {
        return require("wrappers").Int32Value;
      },
    };
    items[24] = { no: 24, name: "winning_variation_id", kind: "scalar", T: 5 };
    items[25] = { no: 34, name: "extra_outcome_context", kind: "scalar", T: 9 };
    items[26] = {
      no: 26,
      name: "type",
      kind: "enum",
      T() {
        const items = ["discord_protos.discord_experimentation.v1.Experiment.Type", obj6];
        return items;
      },
    };
    items[27] = { no: 27, name: "is_template", kind: "scalar", T: 8 };
    items[28] = { no: 28, name: "field_numbers_to_copy", kind: "scalar", repeat: 1, T: 5 };
    items[29] = { no: 29, name: "engine_feature_flags", kind: "scalar", repeat: 2, T: 9 };
    items[30] = {
      no: 30,
      name: "debug_config",
      kind: "message",
      T() {
        return bucket_AllocationExposureModeType;
      },
    };
    items[31] = {
      no: 31,
      name: "expected_end_date",
      kind: "message",
      T() {
        return require("timestamp").Timestamp;
      },
    };
    items[32] = { no: 32, name: "is_automated_change", kind: "scalar", T: 8 };
    items[33] = { no: 44, name: "suppress_editor_mention", kind: "scalar", T: 8 };
    items[34] = {
      no: 33,
      name: "archive_at",
      kind: "message",
      T() {
        return require("timestamp").Timestamp;
      },
    };
    items[35] = {
      no: 35,
      name: "guild_experiment_version",
      kind: "message",
      T() {
        return require("wrappers").Int32Value;
      },
    };
    items[36] = {
      no: 36,
      name: "custom_unit_prefix",
      kind: "enum",
      T() {
        const items = ["discord_protos.discord_experimentation.v1.Experiment.CustomUnitPrefix", obj7];
        return items;
      },
    };
    items[37] = {
      no: 45,
      name: "exposure_points",
      kind: "enum",
      repeat: 1,
      T() {
        const items = ["discord_protos.discord_experimentation.v1.Experiment.ExposurePointId", obj8];
        return items;
      },
    };
    items[38] = { no: 47, name: "dynamic_config_model", kind: "scalar", T: 9 };
    items[39] = { no: 37, name: "growthbook_tags", kind: "scalar", repeat: 2, T: 9 };
    items[40] = { no: 38, name: "allocate_right_to_left", kind: "scalar", T: 8 };
    items[41] = { no: 39, name: "is_managed", kind: "scalar", T: 8 };
    items[42] = {
      no: 43,
      name: "number_line_settings",
      kind: "message",
      T() {
        return closure_1_19;
      },
    };
    obj = { no: 42, name: "eligibility_persistence", kind: "enum", T: null };
    class T {
      constructor() {
        items = ["discord_protos.discord_experimentation.v1.Experiment.EligibilityPersistence"];
        items[1] = closure_1_11;
        items[2] = "ELIGIBILITY_PERSISTENCE_";
        return items;
      }
    }
    obj.T = T;
    items[43] = obj;
    items[44] = {
      no: 48,
      name: "lifecycle_plan",
      kind: "message",
      T() {
        return bucket_AllocationExposureModeType1;
      },
    };
    tmp1 = new tmp("discord_protos.discord_experimentation.v1.Experiment", items, T);
    return tmp1;
  }
}
const prototype = Experiment$Type.prototype;
prototype["create"] = function create(arr) {
  const obj = {
    id: "0",
    name: "",
    creatorId: "0",
    version: 0,
    editorId: "0",
    title: "",
    description: "",
    revision: 0,
    hashKey: "",
    unitType: 0,
    variations: [],
    rules: [],
    phase: 0,
    surfaces: [],
    owningTeamId: "",
    cachedNotificationChannelId: "0",
    exposureTracking: 0,
    assignmentMode: 0,
    enableEditRawJsonUi: false,
    winningVariationId: 0,
    extraOutcomeContext: "",
    type: 0,
    isTemplate: false,
    fieldNumbersToCopy: [],
    engineFeatureFlags: [],
    isAutomatedChange: false,
    suppressEditorMention: false,
    customUnitPrefix: 0,
    exposurePoints: [],
    dynamicConfigModel: "",
    growthbookTags: [],
    allocateRightToLeft: false,
    isManaged: false,
    eligibilityPersistence: 0,
  };
  const _Object = Object;
  _Object.defineProperty(obj, _mod1198.MESSAGE_TYPE, { enumerable: false, value: this });
  if (undefined !== arr) {
    const result = _mod1198.reflectionMergePartial(this, obj, arr);
    const tmpResult = _mod1198;
  }
  return obj;
};
prototype["internalBinaryRead"] = function internalBinaryRead(pos, arg1, arg2, arg3) {
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
prototype["internalBinaryWrite"] = function internalBinaryWrite(id, tag, writeUnknownFields) {
  let length;
  let length2;
  let length3;
  let length4;
  let length5;
  let length6;
  let length7;
  if ("0" !== id.id) {
    tag.tag(1, _mod1198.WireType.Bit64).fixed64(id.id);
    const tagResult = tag.tag(1, _mod1198.WireType.Bit64);
  }
  if ("" !== id.name) {
    tag.tag(2, _mod1198.WireType.LengthDelimited).string(id.name);
    const tagResult1 = tag.tag(2, _mod1198.WireType.LengthDelimited);
  }
  if (id.createdAt) {
    const Timestamp = timestamp.Timestamp;
    const tagResult2 = tag.tag(3, _mod1198.WireType.LengthDelimited);
    const joined = Timestamp.internalBinaryWrite(
      id.createdAt,
      tag.tag(3, _mod1198.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    ).join();
    const internalBinaryWriteResult = Timestamp.internalBinaryWrite(
      id.createdAt,
      tag.tag(3, _mod1198.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    );
  }
  if ("0" !== id.creatorId) {
    tag.tag(4, _mod1198.WireType.Bit64).fixed64(id.creatorId);
    const tagResult3 = tag.tag(4, _mod1198.WireType.Bit64);
  }
  if (0 !== id.version) {
    tag.tag(5, _mod1198.WireType.Varint).int32(id.version);
    const tagResult4 = tag.tag(5, _mod1198.WireType.Varint);
  }
  if (id.editedAt) {
    const Timestamp2 = timestamp.Timestamp;
    const tagResult5 = tag.tag(6, _mod1198.WireType.LengthDelimited);
    const joined1 = Timestamp2.internalBinaryWrite(
      id.editedAt,
      tag.tag(6, _mod1198.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    ).join();
    const internalBinaryWriteResult1 = Timestamp2.internalBinaryWrite(
      id.editedAt,
      tag.tag(6, _mod1198.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    );
  }
  if ("0" !== id.editorId) {
    tag.tag(7, _mod1198.WireType.Bit64).fixed64(id.editorId);
    const tagResult6 = tag.tag(7, _mod1198.WireType.Bit64);
  }
  if ("" !== id.title) {
    tag.tag(8, _mod1198.WireType.LengthDelimited).string(id.title);
    const tagResult7 = tag.tag(8, _mod1198.WireType.LengthDelimited);
  }
  if ("" !== id.description) {
    tag.tag(9, _mod1198.WireType.LengthDelimited).string(id.description);
    const tagResult8 = tag.tag(9, _mod1198.WireType.LengthDelimited);
  }
  if (id.hypothesis) {
    const StringValue = wrappers.StringValue;
    const tagResult9 = tag.tag(10, _mod1198.WireType.LengthDelimited);
    const joined2 = StringValue.internalBinaryWrite(
      id.hypothesis,
      tag.tag(10, _mod1198.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    ).join();
    const internalBinaryWriteResult2 = StringValue.internalBinaryWrite(
      id.hypothesis,
      tag.tag(10, _mod1198.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    );
  }
  if (id.techSpecLink) {
    const StringValue2 = wrappers.StringValue;
    const tagResult10 = tag.tag(11, _mod1198.WireType.LengthDelimited);
    const joined3 = StringValue2.internalBinaryWrite(
      id.techSpecLink,
      tag.tag(11, _mod1198.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    ).join();
    const internalBinaryWriteResult3 = StringValue2.internalBinaryWrite(
      id.techSpecLink,
      tag.tag(11, _mod1198.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    );
  }
  if (0 !== id.revision) {
    tag.tag(12, _mod1198.WireType.Varint).int32(id.revision);
    const tagResult11 = tag.tag(12, _mod1198.WireType.Varint);
  }
  if ("" !== id.hashKey) {
    tag.tag(13, _mod1198.WireType.LengthDelimited).string(id.hashKey);
    const tagResult12 = tag.tag(13, _mod1198.WireType.LengthDelimited);
  }
  if (0 !== id.unitType) {
    tag.tag(14, _mod1198.WireType.Varint).int32(id.unitType);
    const tagResult13 = tag.tag(14, _mod1198.WireType.Varint);
  }
  let num15 = 0;
  if (0 < id.variations.length) {
    do {
      let tagResult14 = tag.tag(15, _mod1198.WireType.LengthDelimited);
      let internalBinaryWriteResult4 = closure_20.internalBinaryWrite(
        id.variations[num15],
        tagResult14.fork(),
        writeUnknownFields,
      );
      let joined4 = internalBinaryWriteResult4.join();
      num15 = num15 + 1;
      length = id.variations.length;
    } while (num15 < length);
  }
  let num16 = 0;
  if (0 < id.rules.length) {
    do {
      let Rule = rules.Rule;
      let tagResult15 = tag.tag(16, _mod1198.WireType.LengthDelimited);
      let internalBinaryWriteResult5 = Rule.internalBinaryWrite(
        id.rules[num16],
        tagResult15.fork(),
        writeUnknownFields,
      );
      let joined5 = internalBinaryWriteResult5.join();
      num16 = num16 + 1;
      length2 = id.rules.length;
    } while (num16 < length2);
  }
  if (0 !== id.phase) {
    tag.tag(18, _mod1198.WireType.Varint).int32(id.phase);
    const tagResult16 = tag.tag(18, _mod1198.WireType.Varint);
  }
  if (id.surfaces.length) {
    tag.tag(19, _mod1198.WireType.LengthDelimited).fork();
    let num19 = 0;
    if (0 < id.surfaces.length) {
      do {
        let int32Result4 = tag.int32(id.surfaces[num19]);
        num19 = num19 + 1;
        length3 = id.surfaces.length;
      } while (num19 < length3);
    }
    const joined6 = tag.join();
    const tagResult17 = tag.tag(19, _mod1198.WireType.LengthDelimited);
  }
  if ("" !== id.owningTeamId) {
    tag.tag(20, _mod1198.WireType.LengthDelimited).string(id.owningTeamId);
    const tagResult18 = tag.tag(20, _mod1198.WireType.LengthDelimited);
  }
  if ("0" !== id.cachedNotificationChannelId) {
    tag.tag(21, _mod1198.WireType.Bit64).fixed64(id.cachedNotificationChannelId);
    const tagResult19 = tag.tag(21, _mod1198.WireType.Bit64);
  }
  if (0 !== id.exposureTracking) {
    tag.tag(22, _mod1198.WireType.Varint).int32(id.exposureTracking);
    const tagResult20 = tag.tag(22, _mod1198.WireType.Varint);
  }
  if (0 !== id.assignmentMode) {
    tag.tag(25, _mod1198.WireType.Varint).int32(id.assignmentMode);
    const tagResult21 = tag.tag(25, _mod1198.WireType.Varint);
  }
  if (false !== id.enableEditRawJsonUi) {
    tag.tag(23, _mod1198.WireType.Varint).bool(id.enableEditRawJsonUi);
    const tagResult22 = tag.tag(23, _mod1198.WireType.Varint);
  }
  if (id.dynamicConfigSizeLimitOverride) {
    const Int32Value = wrappers.Int32Value;
    const tagResult23 = tag.tag(46, _mod1198.WireType.LengthDelimited);
    const joined7 = Int32Value.internalBinaryWrite(
      id.dynamicConfigSizeLimitOverride,
      tag.tag(46, _mod1198.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    ).join();
    const internalBinaryWriteResult6 = Int32Value.internalBinaryWrite(
      id.dynamicConfigSizeLimitOverride,
      tag.tag(46, _mod1198.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    );
  }
  if (0 !== id.winningVariationId) {
    tag.tag(24, _mod1198.WireType.Varint).int32(id.winningVariationId);
    const tagResult24 = tag.tag(24, _mod1198.WireType.Varint);
  }
  if ("" !== id.extraOutcomeContext) {
    tag.tag(34, _mod1198.WireType.LengthDelimited).string(id.extraOutcomeContext);
    const tagResult25 = tag.tag(34, _mod1198.WireType.LengthDelimited);
  }
  if (0 !== id.type) {
    tag.tag(26, _mod1198.WireType.Varint).int32(id.type);
    const tagResult26 = tag.tag(26, _mod1198.WireType.Varint);
  }
  if (false !== id.isTemplate) {
    tag.tag(27, _mod1198.WireType.Varint).bool(id.isTemplate);
    const tagResult27 = tag.tag(27, _mod1198.WireType.Varint);
  }
  if (id.fieldNumbersToCopy.length) {
    tag.tag(28, _mod1198.WireType.LengthDelimited).fork();
    let num31 = 0;
    if (0 < id.fieldNumbersToCopy.length) {
      do {
        let int32Result9 = tag.int32(id.fieldNumbersToCopy[num31]);
        num31 = num31 + 1;
        length4 = id.fieldNumbersToCopy.length;
      } while (num31 < length4);
    }
    const joined8 = tag.join();
    const tagResult28 = tag.tag(28, _mod1198.WireType.LengthDelimited);
  }
  let num32 = 0;
  if (0 < id.engineFeatureFlags.length) {
    do {
      let tagResult29 = tag.tag(29, _mod1198.WireType.LengthDelimited);
      let stringResult6 = tagResult29.string(id.engineFeatureFlags[num32]);
      num32 = num32 + 1;
      length5 = id.engineFeatureFlags.length;
    } while (num32 < length5);
  }
  if (id.debugConfig) {
    const tagResult30 = tag.tag(30, _mod1198.WireType.LengthDelimited);
    const joined9 = bucket_AllocationExposureModeType
      .internalBinaryWrite(id.debugConfig, tag.tag(30, _mod1198.WireType.LengthDelimited).fork(), writeUnknownFields)
      .join();
    const internalBinaryWriteResult7 = bucket_AllocationExposureModeType.internalBinaryWrite(
      id.debugConfig,
      tag.tag(30, _mod1198.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    );
  }
  if (id.expectedEndDate) {
    const Timestamp3 = timestamp.Timestamp;
    const tagResult31 = tag.tag(31, _mod1198.WireType.LengthDelimited);
    const joined10 = Timestamp3.internalBinaryWrite(
      id.expectedEndDate,
      tag.tag(31, _mod1198.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    ).join();
    const internalBinaryWriteResult8 = Timestamp3.internalBinaryWrite(
      id.expectedEndDate,
      tag.tag(31, _mod1198.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    );
  }
  if (false !== id.isAutomatedChange) {
    tag.tag(32, _mod1198.WireType.Varint).bool(id.isAutomatedChange);
    const tagResult32 = tag.tag(32, _mod1198.WireType.Varint);
  }
  if (false !== id.suppressEditorMention) {
    tag.tag(44, _mod1198.WireType.Varint).bool(id.suppressEditorMention);
    const tagResult33 = tag.tag(44, _mod1198.WireType.Varint);
  }
  if (id.archiveAt) {
    const Timestamp4 = timestamp.Timestamp;
    const tagResult34 = tag.tag(33, _mod1198.WireType.LengthDelimited);
    const joined11 = Timestamp4.internalBinaryWrite(
      id.archiveAt,
      tag.tag(33, _mod1198.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    ).join();
    const internalBinaryWriteResult9 = Timestamp4.internalBinaryWrite(
      id.archiveAt,
      tag.tag(33, _mod1198.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    );
  }
  if (id.guildExperimentVersion) {
    const Int32Value2 = wrappers.Int32Value;
    const tagResult35 = tag.tag(35, _mod1198.WireType.LengthDelimited);
    const joined12 = Int32Value2.internalBinaryWrite(
      id.guildExperimentVersion,
      tag.tag(35, _mod1198.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    ).join();
    const internalBinaryWriteResult10 = Int32Value2.internalBinaryWrite(
      id.guildExperimentVersion,
      tag.tag(35, _mod1198.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    );
  }
  if (0 !== id.customUnitPrefix) {
    tag.tag(36, _mod1198.WireType.Varint).int32(id.customUnitPrefix);
    const tagResult36 = tag.tag(36, _mod1198.WireType.Varint);
  }
  if (id.exposurePoints.length) {
    tag.tag(45, _mod1198.WireType.LengthDelimited).fork();
    let num41 = 0;
    if (0 < id.exposurePoints.length) {
      do {
        let int32Result11 = tag.int32(id.exposurePoints[num41]);
        num41 = num41 + 1;
        length6 = id.exposurePoints.length;
      } while (num41 < length6);
    }
    const joined13 = tag.join();
    const tagResult37 = tag.tag(45, _mod1198.WireType.LengthDelimited);
  }
  if ("" !== id.dynamicConfigModel) {
    tag.tag(47, _mod1198.WireType.LengthDelimited).string(id.dynamicConfigModel);
    const tagResult38 = tag.tag(47, _mod1198.WireType.LengthDelimited);
  }
  let num43 = 0;
  if (0 < id.growthbookTags.length) {
    do {
      let tagResult39 = tag.tag(37, _mod1198.WireType.LengthDelimited);
      let stringResult8 = tagResult39.string(id.growthbookTags[num43]);
      num43 = num43 + 1;
      length7 = id.growthbookTags.length;
    } while (num43 < length7);
  }
  if (false !== id.allocateRightToLeft) {
    tag.tag(38, _mod1198.WireType.Varint).bool(id.allocateRightToLeft);
    const tagResult40 = tag.tag(38, _mod1198.WireType.Varint);
  }
  if (false !== id.isManaged) {
    tag.tag(39, _mod1198.WireType.Varint).bool(id.isManaged);
    const tagResult41 = tag.tag(39, _mod1198.WireType.Varint);
  }
  if (id.numberLineSettings) {
    const tagResult42 = tag.tag(43, _mod1198.WireType.LengthDelimited);
    const joined14 = closure_19
      .internalBinaryWrite(
        id.numberLineSettings,
        tag.tag(43, _mod1198.WireType.LengthDelimited).fork(),
        writeUnknownFields,
      )
      .join();
    const internalBinaryWriteResult11 = closure_19.internalBinaryWrite(
      id.numberLineSettings,
      tag.tag(43, _mod1198.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    );
  }
  if (0 !== id.eligibilityPersistence) {
    tag.tag(42, _mod1198.WireType.Varint).int32(id.eligibilityPersistence);
    const tagResult43 = tag.tag(42, _mod1198.WireType.Varint);
  }
  if (id.lifecyclePlan) {
    const tagResult44 = tag.tag(48, _mod1198.WireType.LengthDelimited);
    const joined15 = bucket_AllocationExposureModeType1
      .internalBinaryWrite(id.lifecyclePlan, tag.tag(48, _mod1198.WireType.LengthDelimited).fork(), writeUnknownFields)
      .join();
    const internalBinaryWriteResult12 = bucket_AllocationExposureModeType1.internalBinaryWrite(
      id.lifecyclePlan,
      tag.tag(48, _mod1198.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    );
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = _mod1198.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, id, tag);
  }
  return tag;
};
const experimentType = new Experiment$Type();
const MessageType2 = fn(1198).MessageType;
class Experiment_NumberLineSettings$Type extends MessageType2 {
  constructor() {
    obj = {
      no: 1,
      name: "mode",
      kind: "enum",
      T() {
        const items = [
          "discord_protos.discord_experimentation.v1.Experiment.NumberLineSettings.Mode",
          Experiment_NumberLineSettings_Mode,
        ];
        return items;
      },
    };
    items = [, ,];
    items[0] = obj;
    items[1] = { no: 2, name: "linked_id", kind: "scalar", T: 6 };
    items[2] = { no: 3, name: "shared_control", kind: "scalar", T: 8 };
    tmp1 = new tmp("discord_protos.discord_experimentation.v1.Experiment.NumberLineSettings", items, new.target);
    return tmp1;
  }
}
const prototype2 = Experiment_NumberLineSettings$Type.prototype;
prototype2["create"] = function create(arr) {
  const obj = { mode: 0, linkedId: "0", sharedControl: false };
  const _Object = Object;
  _Object.defineProperty(obj, _mod1198.MESSAGE_TYPE, { enumerable: false, value: this });
  if (undefined !== arr) {
    const result = _mod1198.reflectionMergePartial(this, obj, arr);
    const tmpResult = _mod1198;
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
        obj.mode = pos.int32();
      } else if (2 === tmp5) {
        let str4 = pos.fixed64();
        obj.linkedId = str4.toString();
      } else if (3 === tmp5) {
        obj.sharedControl = pos.bool();
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
              onRead = _mod1198.UnknownFieldHandler.onRead;
            }
            let onReadResult = onRead(self.typeName, obj, tmp5, tmp6, skipResult);
          }
        }
      }
    } while (pos.pos < sum);
  }
  return obj;
};
prototype2["internalBinaryWrite"] = function internalBinaryWrite(mode, tag, writeUnknownFields) {
  if (0 !== mode.mode) {
    tag.tag(1, _mod1198.WireType.Varint).int32(mode.mode);
    const tagResult = tag.tag(1, _mod1198.WireType.Varint);
  }
  if ("0" !== mode.linkedId) {
    tag.tag(2, _mod1198.WireType.Bit64).fixed64(mode.linkedId);
    const tagResult1 = tag.tag(2, _mod1198.WireType.Bit64);
  }
  if (false !== mode.sharedControl) {
    tag.tag(3, _mod1198.WireType.Varint).bool(mode.sharedControl);
    const tagResult2 = tag.tag(3, _mod1198.WireType.Varint);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = _mod1198.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, mode, tag);
  }
  return tag;
};
let items = [
  {
    no: 1,
    name: "mode",
    kind: "enum",
    T() {
      const items = [
        "discord_protos.discord_experimentation.v1.Experiment.NumberLineSettings.Mode",
        Experiment_NumberLineSettings_Mode,
      ];
      return items;
    },
  },
  { no: 2, name: "linked_id", kind: "scalar", T: 6 },
  { no: 3, name: "shared_control", kind: "scalar", T: 8 },
];
const tmp9 = new "AWAITING_MANUAL_APPROVAL"(
  "discord_protos.discord_experimentation.v1.Experiment.NumberLineSettings",
  items,
  tmp6,
  tmp5,
  "create",
  tmp4,
  "internalBinaryRead",
  "internalBinaryWrite",
  tmp3,
  tmp2,
  tmp,
  fn,
  dependencyMap,
  Experiment_NumberLineSettings_Mode,
);
let closure_19 = tmp9;
const MessageType3 = fn(1198).MessageType;
class Variation$Type extends MessageType3 {
  constructor() {
    items = [, , , , , , ,];
    items[0] = { no: 1, name: "id", kind: "scalar", T: 5 };
    items[1] = { no: 2, name: "label", kind: "scalar", T: 9 };
    items[2] = { no: 3, name: "target_allocation", kind: "scalar", T: 5 };
    items[3] = {
      no: 4,
      name: "buckets",
      kind: "message",
      repeat: 1,
      T() {
        return closure_1_21;
      },
    };
    obj = { no: 5, name: "type", kind: "enum", T: null };
    class T {
      constructor() {
        items = ["discord_protos.discord_experimentation.v1.Variation.Type"];
        items[1] = closure_1_12;
        return items;
      }
    }
    obj.T = T;
    items[4] = obj;
    items[5] = {
      no: 6,
      name: "configuration",
      kind: "message",
      T() {
        return require("wrappers").StringValue;
      },
    };
    items[6] = { no: 7, name: "owning_experiment_id", kind: "scalar", T: 6 };
    items[7] = { no: 8, name: "owning_slot_id", kind: "scalar", T: 5 };
    tmp1 = new tmp("discord_protos.discord_experimentation.v1.Variation", items, T);
    return tmp1;
  }
}
const prototype3 = Variation$Type.prototype;
prototype3["create"] = function create(arr) {
  const obj = { id: 0, label: "", targetAllocation: 0, buckets: [], type: 0, owningExperimentId: "0", owningSlotId: 0 };
  const _Object = Object;
  _Object.defineProperty(obj, _mod1198.MESSAGE_TYPE, { enumerable: false, value: this });
  if (undefined !== arr) {
    const result = _mod1198.reflectionMergePartial(this, obj, arr);
    const tmpResult = _mod1198;
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
        obj.id = pos.int32();
      } else if (2 === tmp5) {
        obj.label = pos.string();
      } else if (3 === tmp5) {
        obj.targetAllocation = pos.int32();
      } else if (4 === tmp5) {
        let buckets = obj.buckets;
        let arr = buckets.push(closure_21.internalBinaryRead(pos, pos.uint32(), readUnknownField));
      } else if (5 === tmp5) {
        obj.type = pos.int32();
      } else if (6 === tmp5) {
        let StringValue = wrappers.StringValue;
        obj.configuration = StringValue.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.configuration);
      } else if (7 === tmp5) {
        let str4 = pos.fixed64();
        obj.owningExperimentId = str4.toString();
      } else if (8 === tmp5) {
        obj.owningSlotId = pos.int32();
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
              onRead = _mod1198.UnknownFieldHandler.onRead;
            }
            let onReadResult = onRead(self.typeName, obj, tmp5, tmp6, skipResult);
          }
        }
      }
    } while (pos.pos < sum);
  }
  return obj;
};
prototype3["internalBinaryWrite"] = function internalBinaryWrite(id, tag, writeUnknownFields) {
  let length;
  if (0 !== id.id) {
    tag.tag(1, _mod1198.WireType.Varint).int32(id.id);
    const tagResult = tag.tag(1, _mod1198.WireType.Varint);
  }
  if ("" !== id.label) {
    tag.tag(2, _mod1198.WireType.LengthDelimited).string(id.label);
    const tagResult1 = tag.tag(2, _mod1198.WireType.LengthDelimited);
  }
  if (0 !== id.targetAllocation) {
    tag.tag(3, _mod1198.WireType.Varint).int32(id.targetAllocation);
    const tagResult2 = tag.tag(3, _mod1198.WireType.Varint);
  }
  let num4 = 0;
  if (0 < id.buckets.length) {
    do {
      let tagResult3 = tag.tag(4, _mod1198.WireType.LengthDelimited);
      let internalBinaryWriteResult = closure_21.internalBinaryWrite(
        id.buckets[num4],
        tagResult3.fork(),
        writeUnknownFields,
      );
      let joined = internalBinaryWriteResult.join();
      num4 = num4 + 1;
      length = id.buckets.length;
    } while (num4 < length);
  }
  if (0 !== id.type) {
    tag.tag(5, _mod1198.WireType.Varint).int32(id.type);
    const tagResult4 = tag.tag(5, _mod1198.WireType.Varint);
  }
  if (id.configuration) {
    const StringValue = wrappers.StringValue;
    const tagResult5 = tag.tag(6, _mod1198.WireType.LengthDelimited);
    const joined1 = StringValue.internalBinaryWrite(
      id.configuration,
      tag.tag(6, _mod1198.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    ).join();
    const internalBinaryWriteResult1 = StringValue.internalBinaryWrite(
      id.configuration,
      tag.tag(6, _mod1198.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    );
  }
  if ("0" !== id.owningExperimentId) {
    tag.tag(7, _mod1198.WireType.Bit64).fixed64(id.owningExperimentId);
    const tagResult6 = tag.tag(7, _mod1198.WireType.Bit64);
  }
  if (0 !== id.owningSlotId) {
    tag.tag(8, _mod1198.WireType.Varint).int32(id.owningSlotId);
    const tagResult7 = tag.tag(8, _mod1198.WireType.Varint);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = _mod1198.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, id, tag);
  }
  return tag;
};
const items1 = [
  { no: 1, name: "id", kind: "scalar", T: 5 },
  { no: 2, name: "label", kind: "scalar", T: 9 },
  { no: 3, name: "target_allocation", kind: "scalar", T: 5 },
  {
    no: 4,
    name: "buckets",
    kind: "message",
    repeat: 1,
    T() {
      return closure_1_21;
    },
  },
  {
    no: 5,
    name: "type",
    kind: "enum",
    T() {
      const items = ["discord_protos.discord_experimentation.v1.Variation.Type", obj10];
      return items;
    },
  },
  {
    no: 6,
    name: "configuration",
    kind: "message",
    T() {
      return require("wrappers").StringValue;
    },
  },
  { no: 7, name: "owning_experiment_id", kind: "scalar", T: 6 },
  { no: 8, name: "owning_slot_id", kind: "scalar", T: 5 },
];
let tmp10 = new "AWAITING_MANUAL_APPROVAL"(
  "discord_protos.discord_experimentation.v1.Variation",
  items1,
  tmp6,
  tmp5,
  "create",
  tmp4,
  "internalBinaryRead",
  "internalBinaryWrite",
  tmp3,
  undefined,
  tmp,
  fn,
  dependencyMap,
  Experiment_NumberLineSettings_Mode,
);
let closure_20 = tmp10;
const MessageType4 = fn(1198).MessageType;
class Bucket$Type extends MessageType4 {
  constructor() {
    items = [, , , ,];
    items[0] = { no: 1, name: "start", kind: "scalar", T: 5 };
    items[1] = { no: 2, name: "stop", kind: "scalar", T: 5 };
    items[2] = {
      no: 3,
      name: "type",
      kind: "enum",
      T() {
        const items = ["discord_protos.discord_experimentation.v1.Bucket.Type", obj13];
        return items;
      },
    };
    obj = { no: 5, name: "assignment_mode", kind: "enum", T: null };
    class T {
      constructor() {
        items = ["discord_protos.discord_experimentation.v1.Bucket.AllocationAssignmentMode.Enum"];
        items[1] = closure_1_13;
        return items;
      }
    }
    obj.T = T;
    items[3] = obj;
    items[4] = {
      no: 6,
      name: "exposure_mode",
      kind: "enum",
      T() {
        const items = ["discord_protos.discord_experimentation.v1.Bucket.AllocationExposureMode.Enum", obj12];
        return items;
      },
    };
    tmp1 = new tmp("discord_protos.discord_experimentation.v1.Bucket", items, T);
    return tmp1;
  }
}
const prototype4 = Bucket$Type.prototype;
prototype4["create"] = function create(arr) {
  const obj = { start: 0, stop: 0, type: 0, assignmentMode: 0, exposureMode: 0 };
  const _Object = Object;
  _Object.defineProperty(obj, _mod1198.MESSAGE_TYPE, { enumerable: false, value: this });
  if (undefined !== arr) {
    const result = _mod1198.reflectionMergePartial(this, obj, arr);
    const tmpResult = _mod1198;
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
        obj.start = pos.int32();
      } else if (2 === tmp5) {
        obj.stop = pos.int32();
      } else if (3 === tmp5) {
        obj.type = pos.int32();
      } else if (5 === tmp5) {
        obj.assignmentMode = pos.int32();
      } else if (6 === tmp5) {
        obj.exposureMode = pos.int32();
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
              onRead = _mod1198.UnknownFieldHandler.onRead;
            }
            let onReadResult = onRead(self.typeName, obj, tmp5, tmp6, skipResult);
          }
        }
      }
    } while (pos.pos < sum);
  }
  return obj;
};
prototype4["internalBinaryWrite"] = function internalBinaryWrite(start, tag, writeUnknownFields) {
  if (0 !== start.start) {
    tag.tag(1, _mod1198.WireType.Varint).int32(start.start);
    const tagResult = tag.tag(1, _mod1198.WireType.Varint);
  }
  if (0 !== start.stop) {
    tag.tag(2, _mod1198.WireType.Varint).int32(start.stop);
    const tagResult1 = tag.tag(2, _mod1198.WireType.Varint);
  }
  if (0 !== start.type) {
    tag.tag(3, _mod1198.WireType.Varint).int32(start.type);
    const tagResult2 = tag.tag(3, _mod1198.WireType.Varint);
  }
  if (0 !== start.assignmentMode) {
    tag.tag(5, _mod1198.WireType.Varint).int32(start.assignmentMode);
    const tagResult3 = tag.tag(5, _mod1198.WireType.Varint);
  }
  if (0 !== start.exposureMode) {
    tag.tag(6, _mod1198.WireType.Varint).int32(start.exposureMode);
    const tagResult4 = tag.tag(6, _mod1198.WireType.Varint);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = _mod1198.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, start, tag);
  }
  return tag;
};
const items2 = [
  { no: 1, name: "start", kind: "scalar", T: 5 },
  { no: 2, name: "stop", kind: "scalar", T: 5 },
  {
    no: 3,
    name: "type",
    kind: "enum",
    T() {
      const items = ["discord_protos.discord_experimentation.v1.Bucket.Type", obj13];
      return items;
    },
  },
  {
    no: 5,
    name: "assignment_mode",
    kind: "enum",
    T() {
      const items = ["discord_protos.discord_experimentation.v1.Bucket.AllocationAssignmentMode.Enum", obj11];
      return items;
    },
  },
  {
    no: 6,
    name: "exposure_mode",
    kind: "enum",
    T() {
      const items = ["discord_protos.discord_experimentation.v1.Bucket.AllocationExposureMode.Enum", obj12];
      return items;
    },
  },
];
const tmp11 = new "AWAITING_MANUAL_APPROVAL"(
  "discord_protos.discord_experimentation.v1.Bucket",
  items2,
  tmp6,
  tmp5,
  "create",
  tmp4,
  "internalBinaryRead",
  "internalBinaryWrite",
  tmp3,
  undefined,
  tmp,
  fn,
  dependencyMap,
  Experiment_NumberLineSettings_Mode,
);
let closure_21 = tmp11;
const MessageType5 = fn(1198).MessageType;
class Bucket_AllocationAssignmentMode$Type extends MessageType5 {
  constructor() {
    tmp1 = new tmp("discord_protos.discord_experimentation.v1.Bucket.AllocationAssignmentMode", [], new.target);
    return tmp1;
  }
}
const prototype5 = Bucket_AllocationAssignmentMode$Type.prototype;
prototype5["create"] = function create(arr) {
  const obj = {};
  const _Object = Object;
  _Object.defineProperty(obj, _mod1198.MESSAGE_TYPE, { enumerable: false, value: this });
  if (undefined !== arr) {
    const result = _mod1198.reflectionMergePartial(this, obj, arr);
    const tmpResult = _mod1198;
  }
  return obj;
};
prototype5["internalBinaryRead"] = function internalBinaryRead(arg0, arg1, arg2, arg3) {
  let obj = arg3;
  if (arg3 == null) {
    const self = this;
    obj = this.create();
  }
  return obj;
};
prototype5["internalBinaryWrite"] = function internalBinaryWrite(arg0, arg1, writeUnknownFields) {
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = _mod1198.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, arg0, arg1);
  }
  return arg1;
};
const items21 = new items2(
  "discord_protos.discord_experimentation.v1.Bucket.AllocationAssignmentMode",
  [],
  tmp6,
  tmp5,
  "create",
  tmp4,
  "internalBinaryRead",
  "internalBinaryWrite",
  tmp3,
  undefined,
  tmp,
  fn,
  dependencyMap,
);
const MessageType6 = fn(1198).MessageType;
class Bucket_AllocationExposureMode$Type extends MessageType6 {
  constructor() {
    tmp1 = new tmp("discord_protos.discord_experimentation.v1.Bucket.AllocationExposureMode", [], new.target);
    return tmp1;
  }
}
const prototype6 = Bucket_AllocationExposureMode$Type.prototype;
prototype6["create"] = function create(arr) {
  const obj = {};
  const _Object = Object;
  _Object.defineProperty(obj, _mod1198.MESSAGE_TYPE, { enumerable: false, value: this });
  if (undefined !== arr) {
    const result = _mod1198.reflectionMergePartial(this, obj, arr);
    const tmpResult = _mod1198;
  }
  return obj;
};
prototype6["internalBinaryRead"] = function internalBinaryRead(arg0, arg1, arg2, arg3) {
  let obj = arg3;
  if (arg3 == null) {
    const self = this;
    obj = this.create();
  }
  return obj;
};
prototype6["internalBinaryWrite"] = function internalBinaryWrite(arg0, arg1, writeUnknownFields) {
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = _mod1198.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, arg0, arg1);
  }
  return arg1;
};
const items22 = new items2(
  "discord_protos.discord_experimentation.v1.Bucket.AllocationExposureMode",
  [],
  tmp6,
  tmp5,
  "create",
  tmp4,
  "internalBinaryRead",
  "internalBinaryWrite",
  tmp3,
  undefined,
  tmp,
  fn,
  dependencyMap,
);
const MessageType7 = fn(1198).MessageType;
class DebugConfig$Type extends MessageType7 {
  constructor() {
    items = [, , , , ,];
    items[0] = { no: 1, name: "enable_decision_logging", kind: "scalar", T: 8 };
    items[1] = { no: 2, name: "metrics_sample_rate", kind: "scalar", T: 1 };
    items[2] = { no: 3, name: "log_context_on_failure", kind: "scalar", T: 8 };
    items[3] = { no: 4, name: "log_raw_headers", kind: "scalar", T: 8 };
    items[4] = { no: 5, name: "tag_filter_metrics", kind: "scalar", T: 8 };
    items[5] = { no: 6, name: "decision_log_sample_rate", kind: "scalar", T: 1 };
    tmp1 = new tmp("discord_protos.discord_experimentation.v1.DebugConfig", items, new.target);
    return tmp1;
  }
}
const prototype7 = DebugConfig$Type.prototype;
prototype7["create"] = function create(arr) {
  const obj = {
    enableDecisionLogging: false,
    metricsSampleRate: 0,
    logContextOnFailure: false,
    logRawHeaders: false,
    tagFilterMetrics: false,
    decisionLogSampleRate: 0,
  };
  const _Object = Object;
  _Object.defineProperty(obj, _mod1198.MESSAGE_TYPE, { enumerable: false, value: this });
  if (undefined !== arr) {
    const result = _mod1198.reflectionMergePartial(this, obj, arr);
    const tmpResult = _mod1198;
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
        obj.enableDecisionLogging = pos.bool();
      } else if (2 === tmp5) {
        obj.metricsSampleRate = pos.double();
      } else if (3 === tmp5) {
        obj.logContextOnFailure = pos.bool();
      } else if (4 === tmp5) {
        obj.logRawHeaders = pos.bool();
      } else if (5 === tmp5) {
        obj.tagFilterMetrics = pos.bool();
      } else if (6 === tmp5) {
        obj.decisionLogSampleRate = pos.double();
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
              onRead = _mod1198.UnknownFieldHandler.onRead;
            }
            let onReadResult = onRead(self.typeName, obj, tmp5, tmp6, skipResult);
          }
        }
      }
    } while (pos.pos < sum);
  }
  return obj;
};
prototype7["internalBinaryWrite"] = function internalBinaryWrite(enableDecisionLogging, tag, writeUnknownFields) {
  if (false !== enableDecisionLogging.enableDecisionLogging) {
    tag.tag(1, _mod1198.WireType.Varint).bool(enableDecisionLogging.enableDecisionLogging);
    const tagResult = tag.tag(1, _mod1198.WireType.Varint);
  }
  if (0 !== enableDecisionLogging.metricsSampleRate) {
    tag.tag(2, _mod1198.WireType.Bit64).double(enableDecisionLogging.metricsSampleRate);
    const tagResult1 = tag.tag(2, _mod1198.WireType.Bit64);
  }
  if (false !== enableDecisionLogging.logContextOnFailure) {
    tag.tag(3, _mod1198.WireType.Varint).bool(enableDecisionLogging.logContextOnFailure);
    const tagResult2 = tag.tag(3, _mod1198.WireType.Varint);
  }
  if (false !== enableDecisionLogging.logRawHeaders) {
    tag.tag(4, _mod1198.WireType.Varint).bool(enableDecisionLogging.logRawHeaders);
    const tagResult3 = tag.tag(4, _mod1198.WireType.Varint);
  }
  if (false !== enableDecisionLogging.tagFilterMetrics) {
    tag.tag(5, _mod1198.WireType.Varint).bool(enableDecisionLogging.tagFilterMetrics);
    const tagResult4 = tag.tag(5, _mod1198.WireType.Varint);
  }
  if (0 !== enableDecisionLogging.decisionLogSampleRate) {
    tag.tag(6, _mod1198.WireType.Bit64).double(enableDecisionLogging.decisionLogSampleRate);
    const tagResult5 = tag.tag(6, _mod1198.WireType.Bit64);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = _mod1198.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, enableDecisionLogging, tag);
  }
  return tag;
};
const items3 = [
  { no: 1, name: "enable_decision_logging", kind: "scalar", T: 8 },
  { no: 2, name: "metrics_sample_rate", kind: "scalar", T: 1 },
  { no: 3, name: "log_context_on_failure", kind: "scalar", T: 8 },
  { no: 4, name: "log_raw_headers", kind: "scalar", T: 8 },
  { no: 5, name: "tag_filter_metrics", kind: "scalar", T: 8 },
  { no: 6, name: "decision_log_sample_rate", kind: "scalar", T: 1 },
];
const bucket_AllocationExposureModeType = new Bucket_AllocationExposureMode$Type(
  "discord_protos.discord_experimentation.v1.DebugConfig",
  items3,
  tmp6,
  tmp5,
  "create",
  tmp4,
  "internalBinaryRead",
  "internalBinaryWrite",
  tmp3,
  undefined,
  tmp,
  fn,
  dependencyMap,
  Experiment_NumberLineSettings_Mode,
);
const MessageType8 = fn(1198).MessageType;
class LifecyclePlan$Type extends MessageType8 {
  constructor() {
    obj = {
      no: 1,
      name: "measurement_plan",
      kind: "message",
      T() {
        return bucket_AllocationExposureModeType2;
      },
    };
    items = [,];
    items[0] = obj;
    items[1] = {
      no: 2,
      name: "rollout_plan",
      kind: "message",
      T() {
        return lifecyclePlan_MeasurementPlanType;
      },
    };
    tmp1 = new tmp("discord_protos.discord_experimentation.v1.LifecyclePlan", items, new.target);
    return tmp1;
  }
}
const prototype8 = LifecyclePlan$Type.prototype;
prototype8["create"] = function create(arr) {
  const obj = {};
  const _Object = Object;
  _Object.defineProperty(obj, _mod1198.MESSAGE_TYPE, { enumerable: false, value: this });
  if (undefined !== arr) {
    const result = _mod1198.reflectionMergePartial(this, obj, arr);
    const tmpResult = _mod1198;
  }
  return obj;
};
prototype8["internalBinaryRead"] = function internalBinaryRead(pos, arg1, readUnknownField, arg3) {
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
        obj.measurementPlan = bucket_AllocationExposureModeType2.internalBinaryRead(
          pos,
          pos.uint32(),
          readUnknownField,
          obj.measurementPlan,
        );
      } else if (2 === tmp5) {
        obj.rolloutPlan = lifecyclePlan_MeasurementPlanType.internalBinaryRead(
          pos,
          pos.uint32(),
          readUnknownField,
          obj.rolloutPlan,
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
              onRead = _mod1198.UnknownFieldHandler.onRead;
            }
            let onReadResult = onRead(self.typeName, obj, tmp5, tmp6, skipResult);
          }
        }
      }
    } while (pos.pos < sum);
  }
  return obj;
};
prototype8["internalBinaryWrite"] = function internalBinaryWrite(measurementPlan, tag, writeUnknownFields) {
  if (measurementPlan.measurementPlan) {
    const tagResult = tag.tag(1, _mod1198.WireType.LengthDelimited);
    const joined = bucket_AllocationExposureModeType2
      .internalBinaryWrite(
        measurementPlan.measurementPlan,
        tag.tag(1, _mod1198.WireType.LengthDelimited).fork(),
        writeUnknownFields,
      )
      .join();
    const internalBinaryWriteResult = bucket_AllocationExposureModeType2.internalBinaryWrite(
      measurementPlan.measurementPlan,
      tag.tag(1, _mod1198.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    );
  }
  if (measurementPlan.rolloutPlan) {
    const tagResult1 = tag.tag(2, _mod1198.WireType.LengthDelimited);
    const joined1 = lifecyclePlan_MeasurementPlanType
      .internalBinaryWrite(
        measurementPlan.rolloutPlan,
        tag.tag(2, _mod1198.WireType.LengthDelimited).fork(),
        writeUnknownFields,
      )
      .join();
    const internalBinaryWriteResult1 = lifecyclePlan_MeasurementPlanType.internalBinaryWrite(
      measurementPlan.rolloutPlan,
      tag.tag(2, _mod1198.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    );
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = _mod1198.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, measurementPlan, tag);
  }
  return tag;
};
const items4 = [
  {
    no: 1,
    name: "measurement_plan",
    kind: "message",
    T() {
      return bucket_AllocationExposureModeType2;
    },
  },
  {
    no: 2,
    name: "rollout_plan",
    kind: "message",
    T() {
      return lifecyclePlan_MeasurementPlanType;
    },
  },
];
const bucket_AllocationExposureModeType1 = new Bucket_AllocationExposureMode$Type(
  "discord_protos.discord_experimentation.v1.LifecyclePlan",
  items4,
  tmp6,
  tmp5,
  "create",
  tmp4,
  "internalBinaryRead",
  "internalBinaryWrite",
  tmp3,
  undefined,
  tmp,
  fn,
  dependencyMap,
  Experiment_NumberLineSettings_Mode,
);
const MessageType9 = fn(1198).MessageType;
class LifecyclePlan_MeasurementPlan$Type extends MessageType9 {
  constructor() {
    obj = {
      no: 1,
      name: "status",
      kind: "enum",
      T() {
        const items = ["discord_protos.discord_experimentation.v1.LifecyclePlan.PlanStatus", obj14, "PLAN_STATUS_"];
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
        return lifecyclePlan_RolloutPlanType;
      },
    };
    tmp1 = new tmp("discord_protos.discord_experimentation.v1.LifecyclePlan.MeasurementPlan", items, new.target);
    return tmp1;
  }
}
const prototype9 = LifecyclePlan_MeasurementPlan$Type.prototype;
prototype9["create"] = function create(arr) {
  const obj = { status: 0, rampSteps: [] };
  const _Object = Object;
  _Object.defineProperty(obj, _mod1198.MESSAGE_TYPE, { enumerable: false, value: this });
  if (undefined !== arr) {
    const result = _mod1198.reflectionMergePartial(this, obj, arr);
    const tmpResult = _mod1198;
  }
  return obj;
};
prototype9["internalBinaryRead"] = function internalBinaryRead(pos, arg1, readUnknownField, arg3) {
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
        obj.status = pos.int32();
      } else if (2 === tmp5) {
        let rampSteps = obj.rampSteps;
        let arr = rampSteps.push(lifecyclePlan_RolloutPlanType.internalBinaryRead(pos, pos.uint32(), readUnknownField));
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
              onRead = _mod1198.UnknownFieldHandler.onRead;
            }
            let onReadResult = onRead(self.typeName, obj, tmp5, tmp6, skipResult);
          }
        }
      }
    } while (pos.pos < sum);
  }
  return obj;
};
prototype9["internalBinaryWrite"] = function internalBinaryWrite(status, tag, writeUnknownFields) {
  let length;
  if (0 !== status.status) {
    tag.tag(1, _mod1198.WireType.Varint).int32(status.status);
    const tagResult = tag.tag(1, _mod1198.WireType.Varint);
  }
  let num2 = 0;
  if (0 < status.rampSteps.length) {
    do {
      let tagResult1 = tag.tag(2, _mod1198.WireType.LengthDelimited);
      let internalBinaryWriteResult = lifecyclePlan_RolloutPlanType.internalBinaryWrite(
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
      onWrite = _mod1198.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, status, tag);
  }
  return tag;
};
const items5 = [
  {
    no: 1,
    name: "status",
    kind: "enum",
    T() {
      const items = ["discord_protos.discord_experimentation.v1.LifecyclePlan.PlanStatus", obj14, "PLAN_STATUS_"];
      return items;
    },
  },
];
const obj20 = {
  no: 2,
  name: "ramp_steps",
  kind: "message",
  repeat: 1,
  T() {
    return lifecyclePlan_RolloutPlanType;
  },
};
items5[1] = obj20;
const bucket_AllocationExposureModeType2 = new Bucket_AllocationExposureMode$Type(
  "discord_protos.discord_experimentation.v1.LifecyclePlan.MeasurementPlan",
  items5,
  tmp6,
  tmp5,
  "create",
  tmp4,
  "internalBinaryRead",
  "internalBinaryWrite",
  LifecyclePlan_MeasurementPlan$Type,
  undefined,
  tmp,
  fn,
  dependencyMap,
  Experiment_NumberLineSettings_Mode,
  obj2,
  obj3,
  obj4,
  obj5,
  obj6,
  obj7,
  obj8,
  obj9,
  obj10,
  obj11,
  obj12,
  obj13,
  obj14,
  obj15,
  obj16,
  experimentType,
  tmp9,
  tmp10,
  tmp11,
  new.target,
  items21,
  new.target,
  items22,
  bucket_AllocationExposureModeType,
  bucket_AllocationExposureModeType1,
  Bucket_AllocationExposureMode$Type,
  items5,
  new.target,
  exports,
  obj20,
);
const MessageType10 = fn(1198).MessageType;
class LifecyclePlan_RolloutPlan$Type extends MessageType10 {
  constructor() {
    obj = {
      no: 1,
      name: "status",
      kind: "enum",
      T() {
        const items = ["discord_protos.discord_experimentation.v1.LifecyclePlan.PlanStatus", obj14, "PLAN_STATUS_"];
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
        return lifecyclePlan_RolloutPlanType;
      },
    };
    tmp1 = new tmp("discord_protos.discord_experimentation.v1.LifecyclePlan.RolloutPlan", items, new.target);
    return tmp1;
  }
}
const prototype10 = LifecyclePlan_RolloutPlan$Type.prototype;
prototype10["create"] = function create(arr) {
  const obj = { status: 0, rampSteps: [] };
  const _Object = Object;
  _Object.defineProperty(obj, _mod1198.MESSAGE_TYPE, { enumerable: false, value: this });
  if (undefined !== arr) {
    const result = _mod1198.reflectionMergePartial(this, obj, arr);
    const tmpResult = _mod1198;
  }
  return obj;
};
prototype10["internalBinaryRead"] = function internalBinaryRead(pos, arg1, readUnknownField, arg3) {
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
        obj.status = pos.int32();
      } else if (2 === tmp5) {
        let rampSteps = obj.rampSteps;
        let arr = rampSteps.push(lifecyclePlan_RolloutPlanType.internalBinaryRead(pos, pos.uint32(), readUnknownField));
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
              onRead = _mod1198.UnknownFieldHandler.onRead;
            }
            let onReadResult = onRead(self.typeName, obj, tmp5, tmp6, skipResult);
          }
        }
      }
    } while (pos.pos < sum);
  }
  return obj;
};
prototype10["internalBinaryWrite"] = function internalBinaryWrite(status, tag, writeUnknownFields) {
  let length;
  if (0 !== status.status) {
    tag.tag(1, _mod1198.WireType.Varint).int32(status.status);
    const tagResult = tag.tag(1, _mod1198.WireType.Varint);
  }
  let num2 = 0;
  if (0 < status.rampSteps.length) {
    do {
      let tagResult1 = tag.tag(2, _mod1198.WireType.LengthDelimited);
      let internalBinaryWriteResult = lifecyclePlan_RolloutPlanType.internalBinaryWrite(
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
      onWrite = _mod1198.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, status, tag);
  }
  return tag;
};
const items6 = [
  {
    no: 1,
    name: "status",
    kind: "enum",
    T() {
      const items = ["discord_protos.discord_experimentation.v1.LifecyclePlan.PlanStatus", obj14, "PLAN_STATUS_"];
      return items;
    },
  },
];
const obj22 = {
  no: 2,
  name: "ramp_steps",
  kind: "message",
  repeat: 1,
  T() {
    return lifecyclePlan_RolloutPlanType;
  },
};
items6[1] = obj22;
const lifecyclePlan_MeasurementPlanType = new LifecyclePlan_MeasurementPlan$Type(
  "discord_protos.discord_experimentation.v1.LifecyclePlan.RolloutPlan",
  items6,
  tmp6,
  tmp5,
  "create",
  LifecyclePlan_RolloutPlan$Type,
  "internalBinaryRead",
  "internalBinaryWrite",
  LifecyclePlan_MeasurementPlan$Type,
  undefined,
  tmp,
  fn,
  dependencyMap,
  Experiment_NumberLineSettings_Mode,
  obj2,
  obj3,
  obj4,
  obj5,
  obj6,
  obj7,
  obj8,
  obj9,
  obj10,
  obj11,
  obj12,
  obj13,
  obj14,
  obj15,
  obj16,
  experimentType,
  tmp9,
  tmp10,
  tmp11,
  new.target,
  items21,
  new.target,
  items22,
  bucket_AllocationExposureModeType,
  bucket_AllocationExposureModeType1,
  bucket_AllocationExposureModeType2,
  items6,
  new.target,
  exports,
  obj22,
  undefined,
  8,
  7,
);
const MessageType11 = fn(1198).MessageType;
class LifecyclePlan_RampStep$Type extends MessageType11 {
  constructor() {
    obj = {
      no: 1,
      name: "variation_buckets",
      kind: "message",
      repeat: 1,
      T() {
        return closure_1_27;
      },
    };
    items = [, , , ,];
    items[0] = obj;
    items[1] = {
      no: 2,
      name: "hold_duration",
      kind: "message",
      T() {
        return require("duration").Duration;
      },
    };
    items[2] = { no: 3, name: "require_manual_approval", kind: "scalar", T: 8 };
    obj1 = { no: 4, name: "started_at", kind: "message", T: null };
    class T {
      constructor() {
        return closure_1_0(closure_1_1[2]).Timestamp;
      }
    }
    obj1.T = T;
    items[3] = obj1;
    items[4] = {
      no: 5,
      name: "status",
      kind: "enum",
      T() {
        const items = ["discord_protos.discord_experimentation.v1.LifecyclePlan.StepStatus", obj15, "STEP_STATUS_"];
        return items;
      },
    };
    tmp1 = new tmp("discord_protos.discord_experimentation.v1.LifecyclePlan.RampStep", items, T);
    return tmp1;
  }
}
const prototype11 = LifecyclePlan_RampStep$Type.prototype;
prototype11["create"] = function create(arr) {
  const obj = { variationBuckets: [], requireManualApproval: false, status: 0 };
  const _Object = Object;
  _Object.defineProperty(obj, _mod1198.MESSAGE_TYPE, { enumerable: false, value: this });
  if (undefined !== arr) {
    const result = _mod1198.reflectionMergePartial(this, obj, arr);
    const tmpResult = _mod1198;
  }
  return obj;
};
prototype11["internalBinaryRead"] = function internalBinaryRead(pos, arg1, readUnknownField, arg3) {
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
        let variationBuckets = obj.variationBuckets;
        let arr = variationBuckets.push(closure_27.internalBinaryRead(pos, pos.uint32(), readUnknownField));
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
              onRead = _mod1198.UnknownFieldHandler.onRead;
            }
            let onReadResult = onRead(self.typeName, obj, tmp5, tmp6, skipResult);
          }
        }
      }
    } while (pos.pos < sum);
  }
  return obj;
};
prototype11["internalBinaryWrite"] = function internalBinaryWrite(variationBuckets, tag, writeUnknownFields) {
  let length;
  let num = 0;
  if (0 < variationBuckets.variationBuckets.length) {
    do {
      let tagResult = tag.tag(1, _mod1198.WireType.LengthDelimited);
      let internalBinaryWriteResult = closure_27.internalBinaryWrite(
        variationBuckets.variationBuckets[num],
        tagResult.fork(),
        writeUnknownFields,
      );
      let joined = internalBinaryWriteResult.join();
      num = num + 1;
      length = variationBuckets.variationBuckets.length;
    } while (num < length);
  }
  if (variationBuckets.holdDuration) {
    const Duration = duration.Duration;
    const tagResult1 = tag.tag(2, _mod1198.WireType.LengthDelimited);
    const joined1 = Duration.internalBinaryWrite(
      variationBuckets.holdDuration,
      tag.tag(2, _mod1198.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    ).join();
    const internalBinaryWriteResult1 = Duration.internalBinaryWrite(
      variationBuckets.holdDuration,
      tag.tag(2, _mod1198.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    );
  }
  if (false !== variationBuckets.requireManualApproval) {
    tag.tag(3, _mod1198.WireType.Varint).bool(variationBuckets.requireManualApproval);
    const tagResult2 = tag.tag(3, _mod1198.WireType.Varint);
  }
  if (variationBuckets.startedAt) {
    const Timestamp = timestamp.Timestamp;
    const tagResult3 = tag.tag(4, _mod1198.WireType.LengthDelimited);
    const joined2 = Timestamp.internalBinaryWrite(
      variationBuckets.startedAt,
      tag.tag(4, _mod1198.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    ).join();
    const internalBinaryWriteResult2 = Timestamp.internalBinaryWrite(
      variationBuckets.startedAt,
      tag.tag(4, _mod1198.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    );
  }
  if (0 !== variationBuckets.status) {
    tag.tag(5, _mod1198.WireType.Varint).int32(variationBuckets.status);
    const tagResult4 = tag.tag(5, _mod1198.WireType.Varint);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = _mod1198.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, variationBuckets, tag);
  }
  return tag;
};
const items7 = [
  {
    no: 1,
    name: "variation_buckets",
    kind: "message",
    repeat: 1,
    T() {
      return closure_1_27;
    },
  },
  {
    no: 2,
    name: "hold_duration",
    kind: "message",
    T() {
      return require("duration").Duration;
    },
  },
  { no: 3, name: "require_manual_approval", kind: "scalar", T: 8 },
  {
    no: 4,
    name: "started_at",
    kind: "message",
    T() {
      return require("timestamp").Timestamp;
    },
  },
];
const obj24 = {
  no: 5,
  name: "status",
  kind: "enum",
  T() {
    const items = ["discord_protos.discord_experimentation.v1.LifecyclePlan.StepStatus", obj15, "STEP_STATUS_"];
    return items;
  },
};
items7[4] = obj24;
const lifecyclePlan_RolloutPlanType = new LifecyclePlan_RolloutPlan$Type(
  "discord_protos.discord_experimentation.v1.LifecyclePlan.RampStep",
  items7,
  tmp6,
  LifecyclePlan_RampStep$Type,
  "create",
  LifecyclePlan_RolloutPlan$Type,
  "internalBinaryRead",
  "internalBinaryWrite",
  items7,
  undefined,
  tmp,
  fn,
  dependencyMap,
  Experiment_NumberLineSettings_Mode,
  obj2,
  obj3,
  obj4,
  obj5,
  obj6,
  obj7,
  obj8,
  obj9,
  obj10,
  obj11,
  obj12,
  obj13,
  obj14,
  obj15,
  obj16,
  experimentType,
  tmp9,
  tmp10,
  tmp11,
  new.target,
  items21,
  new.target,
  items22,
  bucket_AllocationExposureModeType,
  bucket_AllocationExposureModeType1,
  bucket_AllocationExposureModeType2,
  lifecyclePlan_MeasurementPlanType,
  new.target,
  exports,
  obj24,
  undefined,
  8,
  7,
  6,
  4,
);
const MessageType12 = fn(1198).MessageType;
class LifecyclePlan_VariationBuckets$Type extends MessageType12 {
  constructor() {
    items = [,];
    items[0] = { no: 1, name: "variation_id", kind: "scalar", T: 5 };
    items[1] = {
      no: 2,
      name: "buckets",
      kind: "message",
      repeat: 1,
      T() {
        return closure_1_21;
      },
    };
    tmp1 = new tmp("discord_protos.discord_experimentation.v1.LifecyclePlan.VariationBuckets", items, new.target);
    return tmp1;
  }
}
const prototype12 = LifecyclePlan_VariationBuckets$Type.prototype;
prototype12["create"] = function create(arr) {
  const obj = { variationId: 0, buckets: [] };
  const _Object = Object;
  _Object.defineProperty(obj, _mod1198.MESSAGE_TYPE, { enumerable: false, value: this });
  if (undefined !== arr) {
    const result = _mod1198.reflectionMergePartial(this, obj, arr);
    const tmpResult = _mod1198;
  }
  return obj;
};
prototype12["internalBinaryRead"] = function internalBinaryRead(pos, arg1, readUnknownField, arg3) {
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
        obj.variationId = pos.int32();
      } else if (2 === tmp5) {
        let buckets = obj.buckets;
        let arr = buckets.push(closure_21.internalBinaryRead(pos, pos.uint32(), readUnknownField));
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
              onRead = _mod1198.UnknownFieldHandler.onRead;
            }
            let onReadResult = onRead(self.typeName, obj, tmp5, tmp6, skipResult);
          }
        }
      }
    } while (pos.pos < sum);
  }
  return obj;
};
prototype12["internalBinaryWrite"] = function internalBinaryWrite(variationId, tag, writeUnknownFields) {
  let length;
  if (0 !== variationId.variationId) {
    tag.tag(1, _mod1198.WireType.Varint).int32(variationId.variationId);
    const tagResult = tag.tag(1, _mod1198.WireType.Varint);
  }
  let num2 = 0;
  if (0 < variationId.buckets.length) {
    do {
      let tagResult1 = tag.tag(2, _mod1198.WireType.LengthDelimited);
      let internalBinaryWriteResult = closure_21.internalBinaryWrite(
        variationId.buckets[num2],
        tagResult1.fork(),
        writeUnknownFields,
      );
      let joined = internalBinaryWriteResult.join();
      num2 = num2 + 1;
      length = variationId.buckets.length;
    } while (num2 < length);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = _mod1198.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, variationId, tag);
  }
  return tag;
};
const items8 = [{ no: 1, name: "variation_id", kind: "scalar", T: 5 }];
const obj25 = {
  no: 2,
  name: "buckets",
  kind: "message",
  repeat: 1,
  T() {
    return closure_1_21;
  },
};
items8[1] = obj25;
let tmp19 = new "internalBinaryRead"(
  "discord_protos.discord_experimentation.v1.LifecyclePlan.VariationBuckets",
  items8,
  tmp6,
  LifecyclePlan_RampStep$Type,
  "create",
  LifecyclePlan_VariationBuckets$Type,
  "internalBinaryRead",
  items8,
  new.target,
  undefined,
  tmp,
  fn,
  dependencyMap,
  Experiment_NumberLineSettings_Mode,
  obj2,
  obj3,
  obj4,
  obj5,
  obj6,
  obj7,
  obj8,
  obj9,
  obj10,
  obj11,
  obj12,
  obj13,
  obj14,
  obj15,
  obj16,
  experimentType,
  tmp9,
  tmp10,
  tmp11,
  new.target,
  items21,
  new.target,
  items22,
  bucket_AllocationExposureModeType,
  bucket_AllocationExposureModeType1,
  bucket_AllocationExposureModeType2,
  lifecyclePlan_MeasurementPlanType,
  lifecyclePlan_RolloutPlanType,
  exports,
  obj25,
  undefined,
  8,
  7,
);
let closure_27 = tmp19;
const size = fn(2);
let result = size.fileFinishedImporting(
  "../discord_common/js/packages/protos/discord_protos/discord_experimentation/v1/experiment.tsx",
);

export { Experiment_NumberLineSettings_Mode };
export const Experiment_UnitType = obj2;
export const Experiment_Surface = obj3;
export const Experiment_ExposureTracking = obj4;
export const Experiment_AssignmentMode = obj5;
export const Experiment_Type = obj6;
export const Experiment_CustomUnitPrefix = obj7;
export const Experiment_ExposurePointId = obj8;
export const Experiment_EligibilityPersistence = obj9;
export const Variation_Type = obj10;
export const Bucket_AllocationAssignmentMode_Enum = obj11;
export const Bucket_AllocationExposureMode_Enum = obj12;
export const Bucket_Type = obj13;
export const LifecyclePlan_PlanStatus = obj14;
export const LifecyclePlan_StepStatus = obj15;
export const Phase = obj16;
export const Experiment = experimentType;
export const Experiment_NumberLineSettings = tmp9;
export const Variation = tmp10;
export const Bucket = tmp11;
export const Bucket_AllocationAssignmentMode = items21;
export const Bucket_AllocationExposureMode = items22;
export const DebugConfig = bucket_AllocationExposureModeType;
export const LifecyclePlan = bucket_AllocationExposureModeType1;
export const LifecyclePlan_MeasurementPlan = bucket_AllocationExposureModeType2;
export const LifecyclePlan_RolloutPlan = lifecyclePlan_MeasurementPlanType;
export const LifecyclePlan_RampStep = lifecyclePlan_RolloutPlanType;
export const LifecyclePlan_VariationBuckets = tmp19;
