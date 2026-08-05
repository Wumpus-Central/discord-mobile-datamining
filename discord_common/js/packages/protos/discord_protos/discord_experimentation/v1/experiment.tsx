// discord_common/js/packages/protos/discord_protos/discord_experimentation/v1/experiment.tsx
import _slicedToArray from "_slicedToArray";
import { MessageType } from "module_1307";
import { MessageType as MessageType2 } from "module_1307";
import { MessageType as MessageType3 } from "module_1307";
import { MessageType as MessageType4 } from "module_1307";
import { MessageType as MessageType5 } from "module_1307";
import { 01307__ } from "../../../../../../../_runtime/metro/01307__.js";
import { now } from "../../../google/protobuf/timestamp.tsx";
import { defineProperty } from "../../../google/protobuf/wrappers.tsx";
import { defineProperty } from "rules.tsx";

const require = arg1;
let obj = { EXCLUSIVE: 0, [0]: "EXCLUSIVE", SYNCED: 1, [1]: "SYNCED", PRE_ALLOCATED: 2, [2]: "PRE_ALLOCATED" };
obj = { UNSPECIFIED: 0, [0]: "UNSPECIFIED", USER: 1, [1]: "USER", INSTALLATION: 2, [2]: "INSTALLATION", GUILD: 3, [3]: "GUILD", CUSTOM: 4, [4]: "CUSTOM" };
obj = { SURFACE_UNSPECIFIED: 0, [0]: "SURFACE_UNSPECIFIED", API: 1, [1]: "API", APP: 2, [2]: "APP", DEVELOPER_PORTAL: 3, [3]: "DEVELOPER_PORTAL", ADMIN_PANEL: 4, [4]: "ADMIN_PANEL", ADS_BUDGET_AB: 5, [5]: "ADS_BUDGET_AB", AV_WORKER: 6, [6]: "AV_WORKER", SEO: 7, [7]: "SEO", MARKETING: 8, [8]: "MARKETING" };
const obj1 = { ENABLED: 0, [0]: "ENABLED", DISABLED: 1, [1]: "DISABLED" };
const obj2 = { FULL: 0, [0]: "FULL", FORCE_CONTROL: 3, [3]: "FORCE_CONTROL", OVERRIDES_ONLY: 4, [4]: "OVERRIDES_ONLY", OFF: 5, [5]: "OFF" };
const obj3 = { DEFAULT: 0, [0]: "DEFAULT", HOLDOUT: 1, [1]: "HOLDOUT", NUMBERLINE: 2, [2]: "NUMBERLINE" };
const obj4 = { CUSTOM_UNIT_PREFIX_UNSPECIFIED: 0, [0]: "CUSTOM_UNIT_PREFIX_UNSPECIFIED", SEO_URL_SLUG: 1, [1]: "SEO_URL_SLUG" };
const obj5 = { EXPOSURE_POINT_ID_UNSPECIFIED: 0, [0]: "EXPOSURE_POINT_ID_UNSPECIFIED", SEO_INSTALLATION_PAGE_LOAD: 1, [1]: "SEO_INSTALLATION_PAGE_LOAD", MARKETING_INSTALLATION_PAGE_LOAD: 2, [2]: "MARKETING_INSTALLATION_PAGE_LOAD" };
const obj6 = { DEFAULT: 0, [0]: "DEFAULT", OFF: 1, [1]: "OFF", OVERRIDES_ONLY: 2, [2]: "OVERRIDES_ONLY" };
const obj7 = { UNSPECIFIED: 0, [0]: "UNSPECIFIED", CONTROL: 1, [1]: "CONTROL", TREATMENT: 2, [2]: "TREATMENT", OVERRIDE: 3, [3]: "OVERRIDE" };
const obj8 = { UNSPECIFIED: 0, [0]: "UNSPECIFIED", ACTIVE: 1, [1]: "ACTIVE", UNUSED: 2, [2]: "UNUSED", BURNED: 3, [3]: "BURNED", PRESERVED: 4, [4]: "PRESERVED" };
const obj9 = { UNSPECIFIED: 0, [0]: "UNSPECIFIED", DRAFT: 1, [1]: "DRAFT", MEASUREMENT: 2, [2]: "MEASUREMENT", ROLLING_OUT: 4, [4]: "ROLLING_OUT", ARCHIVED: 6, [6]: "ARCHIVED", AA_MODE: 7, [7]: "AA_MODE" };
class Experiment$Type extends MessageType {
  constructor() {
    items = [, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ];
    items[0] = { no: 1, name: "id", kind: "scalar", T: 6 };
    items[1] = { no: 2, name: "name", kind: "scalar", T: 9 };
    items[2] = {
      no: 3,
      name: "created_at",
      kind: "message",
      T() {
            return callback(1336).Timestamp;
          }
    };
    items[3] = { no: 4, name: "creator_id", kind: "scalar", T: 6 };
    items[4] = { no: 5, name: "version", kind: "scalar", T: 5 };
    items[5] = {
      no: 6,
      name: "edited_at",
      kind: "message",
      T() {
            return callback(1336).Timestamp;
          }
    };
    items[6] = { no: 7, name: "editor_id", kind: "scalar", T: 6 };
    items[7] = { no: 8, name: "title", kind: "scalar", T: 9 };
    items[8] = { no: 9, name: "description", kind: "scalar", T: 9 };
    items[9] = {
      no: 10,
      name: "hypothesis",
      kind: "message",
      T() {
            return callback(1337).StringValue;
          }
    };
    items[10] = {
      no: 11,
      name: "tech_spec_link",
      kind: "message",
      T() {
            return callback(1337).StringValue;
          }
    };
    items[11] = { no: 12, name: "revision", kind: "scalar", T: 5 };
    items[12] = { no: 13, name: "hash_key", kind: "scalar", T: 9 };
    items[13] = {
      no: 14,
      name: "unit_type",
      kind: "enum",
      T() {
            const items = ["discord_protos.discord_experimentation.v1.Experiment.UnitType", closure_4];
            return items;
          }
    };
    items[14] = {
      no: 15,
      name: "variations",
      kind: "message",
      repeat: 1,
      T() {
            return closure_16;
          }
    };
    items[15] = {
      no: 16,
      name: "rules",
      kind: "message",
      repeat: 1,
      T() {
            return callback(8017).Rule;
          }
    };
    items[16] = {
      no: 18,
      name: "phase",
      kind: "enum",
      T() {
            const items = ["discord_protos.discord_experimentation.v1.Phase", closure_14];
            return items;
          }
    };
    items[17] = {
      no: 19,
      name: "surfaces",
      kind: "enum",
      repeat: 1,
      T() {
            const items = ["discord_protos.discord_experimentation.v1.Experiment.Surface", closure_5];
            return items;
          }
    };
    items[18] = { no: 20, name: "owning_team_id", kind: "scalar", T: 9 };
    items[19] = { no: 21, name: "cached_notification_channel_id", kind: "scalar", T: 6 };
    items[20] = {
      no: 22,
      name: "exposure_tracking",
      kind: "enum",
      T() {
            const items = ["discord_protos.discord_experimentation.v1.Experiment.ExposureTracking", closure_6];
            return items;
          }
    };
    items[21] = {
      no: 25,
      name: "assignment_mode",
      kind: "enum",
      T() {
            const items = ["discord_protos.discord_experimentation.v1.Experiment.AssignmentMode", closure_7];
            return items;
          }
    };
    items[22] = { no: 23, name: "enable_edit_raw_json_ui", kind: "scalar", T: 8 };
    items[23] = {
      no: 46,
      name: "dynamic_config_size_limit_override",
      kind: "message",
      T() {
            return callback(1337).Int32Value;
          }
    };
    items[24] = { no: 24, name: "winning_variation_id", kind: "scalar", T: 5 };
    items[25] = { no: 34, name: "extra_outcome_context", kind: "scalar", T: 9 };
    items[26] = {
      no: 26,
      name: "type",
      kind: "enum",
      T() {
            const items = ["discord_protos.discord_experimentation.v1.Experiment.Type", closure_8];
            return items;
          }
    };
    items[27] = { no: 27, name: "is_template", kind: "scalar", T: 8 };
    items[28] = { no: 28, name: "field_numbers_to_copy", kind: "scalar", repeat: 1, T: 5 };
    items[29] = { no: 29, name: "engine_feature_flags", kind: "scalar", repeat: 2, T: 9 };
    items[30] = {
      no: 30,
      name: "debug_config",
      kind: "message",
      T() {
            return closure_18;
          }
    };
    items[31] = {
      no: 31,
      name: "expected_end_date",
      kind: "message",
      T() {
            return callback(1336).Timestamp;
          }
    };
    items[32] = { no: 32, name: "is_automated_change", kind: "scalar", T: 8 };
    items[33] = { no: 44, name: "suppress_editor_mention", kind: "scalar", T: 8 };
    items[34] = {
      no: 33,
      name: "archive_at",
      kind: "message",
      T() {
            return callback(1336).Timestamp;
          }
    };
    items[35] = {
      no: 35,
      name: "guild_experiment_version",
      kind: "message",
      T() {
            return callback(1337).Int32Value;
          }
    };
    items[36] = {
      no: 36,
      name: "custom_unit_prefix",
      kind: "enum",
      T() {
            const items = ["discord_protos.discord_experimentation.v1.Experiment.CustomUnitPrefix", closure_9];
            return items;
          }
    };
    items[37] = {
      no: 45,
      name: "exposure_points",
      kind: "enum",
      repeat: 1,
      T() {
            const items = ["discord_protos.discord_experimentation.v1.Experiment.ExposurePointId", closure_10];
            return items;
          }
    };
    items[38] = { no: 37, name: "growthbook_tags", kind: "scalar", repeat: 2, T: 9 };
    items[39] = { no: 38, name: "allocate_right_to_left", kind: "scalar", T: 8 };
    items[40] = { no: 39, name: "is_managed", kind: "scalar", T: 8 };
    obj = { no: 43, name: "number_line_settings", kind: "message", T: null };
    class T {
      constructor() {
        return closure_15;
      }
    }
    obj[3] = T;
    items[41] = obj;
    items[42] = {
      no: 42,
      name: "eligibility_persistence",
      kind: "enum",
      T() {
            const items = ["discord_protos.discord_experimentation.v1.Experiment.EligibilityPersistence", closure_11, "ELIGIBILITY_PERSISTENCE_"];
            return items;
          }
    };
    tmp = new tmp("discord_protos.discord_experimentation.v1.Experiment", items, T);
    // ThrowIfThisInitialized (0x7c)
    return tmp;
  }
}
const prototype = Experiment$Type.prototype;
prototype["create"] = function create(arr) {
  let obj = { id: "0", name: "", creatorId: "0", version: 0, editorId: "0", title: "", description: "", revision: 0, hashKey: "", unitType: 0, variations: [], rules: [], phase: 0, surfaces: [], owningTeamId: "", cachedNotificationChannelId: "0", exposureTracking: 0, assignmentMode: 0, enableEditRawJsonUi: false, winningVariationId: 0, extraOutcomeContext: "", type: 0, isTemplate: false, fieldNumbersToCopy: [], engineFeatureFlags: [], isAutomatedChange: false, suppressEditorMention: false, customUnitPrefix: 0, exposurePoints: [], growthbookTags: [], allocateRightToLeft: false, isManaged: false, eligibilityPersistence: 0 };
  const _Object = Object;
  obj = { enumerable: false, value: this };
  _Object.defineProperty(obj, 01307__.MESSAGE_TYPE, obj);
  if (undefined !== arr) {
    const result = 01307__.reflectionMergePartial(this, obj, arr);
    const tmpResult = 01307__;
  }
  return obj;
};
prototype["internalBinaryRead"] = function internalBinaryRead(pos) {
  const self = this;
  let obj = arg3;
  if (arg3 == null) {
    obj = self.create();
  }
  const sum = pos.pos + arg1;
  if (pos.pos < sum) {
    obj.eligibilityPersistence = pos.int32();
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
    let joined10 = require;
    tag.tag(1, 01307__.WireType.Bit64).fixed64(id.id);
    const tagResult = tag.tag(1, 01307__.WireType.Bit64);
  }
  if ("" !== id.name) {
    tag.tag(2, 01307__.WireType.LengthDelimited).string(id.name);
    const tagResult1 = tag.tag(2, 01307__.WireType.LengthDelimited);
  }
  if (id.createdAt) {
    const Timestamp = now /* now */.Timestamp;
    const tagResult2 = tag.tag(3, 01307__.WireType.LengthDelimited);
    const joined = Timestamp.internalBinaryWrite(id.createdAt, tag.tag(3, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult = Timestamp.internalBinaryWrite(id.createdAt, tag.tag(3, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if ("0" !== id.creatorId) {
    tag.tag(4, 01307__.WireType.Bit64).fixed64(id.creatorId);
    const tagResult3 = tag.tag(4, 01307__.WireType.Bit64);
  }
  if (0 !== id.version) {
    tag.tag(5, 01307__.WireType.Varint).int32(id.version);
    const tagResult4 = tag.tag(5, 01307__.WireType.Varint);
  }
  if (id.editedAt) {
    const Timestamp2 = now /* now */.Timestamp;
    const tagResult5 = tag.tag(6, 01307__.WireType.LengthDelimited);
    const joined1 = Timestamp2.internalBinaryWrite(id.editedAt, tag.tag(6, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult1 = Timestamp2.internalBinaryWrite(id.editedAt, tag.tag(6, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if ("0" !== id.editorId) {
    tag.tag(7, 01307__.WireType.Bit64).fixed64(id.editorId);
    const tagResult6 = tag.tag(7, 01307__.WireType.Bit64);
  }
  if ("" !== id.title) {
    tag.tag(8, 01307__.WireType.LengthDelimited).string(id.title);
    const tagResult7 = tag.tag(8, 01307__.WireType.LengthDelimited);
  }
  if ("" !== id.description) {
    tag.tag(9, 01307__.WireType.LengthDelimited).string(id.description);
    const tagResult8 = tag.tag(9, 01307__.WireType.LengthDelimited);
  }
  if (id.hypothesis) {
    const StringValue = defineProperty /* defineProperty */.StringValue;
    const tagResult9 = tag.tag(10, 01307__.WireType.LengthDelimited);
    const joined2 = StringValue.internalBinaryWrite(id.hypothesis, tag.tag(10, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult2 = StringValue.internalBinaryWrite(id.hypothesis, tag.tag(10, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (id.techSpecLink) {
    const StringValue2 = defineProperty /* defineProperty */.StringValue;
    const tagResult10 = tag.tag(11, 01307__.WireType.LengthDelimited);
    const joined3 = StringValue2.internalBinaryWrite(id.techSpecLink, tag.tag(11, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult3 = StringValue2.internalBinaryWrite(id.techSpecLink, tag.tag(11, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (0 !== id.revision) {
    tag.tag(12, 01307__.WireType.Varint).int32(id.revision);
    const tagResult11 = tag.tag(12, 01307__.WireType.Varint);
  }
  if ("" !== id.hashKey) {
    tag.tag(13, 01307__.WireType.LengthDelimited).string(id.hashKey);
    const tagResult12 = tag.tag(13, 01307__.WireType.LengthDelimited);
  }
  if (0 !== id.unitType) {
    tag.tag(14, 01307__.WireType.Varint).int32(id.unitType);
    const tagResult13 = tag.tag(14, 01307__.WireType.Varint);
  }
  let num15 = 0;
  if (0 < id.variations.length) {
    do {
      let tmp43 = tmp2;
      let tmp44 = require;
      let tmp45 = dependencyMap;
      let tagResult14 = tag.tag(15, 01307__.WireType.LengthDelimited);
      let internalBinaryWriteResult4 = tmp2.internalBinaryWrite(id.variations[num15], tagResult14.fork(), writeUnknownFields);
      let joined4 = internalBinaryWriteResult4.join();
      num15 = num15 + 1;
      length = id.variations.length;
    } while (num15 < length);
  }
  let num16 = 0;
  if (0 < id.rules.length) {
    do {
      let tmp47 = require;
      let tmp48 = dependencyMap;
      let Rule = defineProperty /* defineProperty */.Rule;
      let tagResult15 = tag.tag(16, 01307__.WireType.LengthDelimited);
      let internalBinaryWriteResult5 = Rule.internalBinaryWrite(id.rules[num16], tagResult15.fork(), writeUnknownFields);
      let joined5 = internalBinaryWriteResult5.join();
      num16 = num16 + 1;
      length2 = id.rules.length;
    } while (num16 < length2);
  }
  if (0 !== id.phase) {
    tag.tag(18, 01307__.WireType.Varint).int32(id.phase);
    const tagResult16 = tag.tag(18, 01307__.WireType.Varint);
  }
  if (id.surfaces.length) {
    tag.tag(19, 01307__.WireType.LengthDelimited).fork();
    let num19 = 0;
    if (0 < id.surfaces.length) {
      do {
        let int32Result4 = tag.int32(id.surfaces[num19]);
        num19 = num19 + 1;
        length3 = id.surfaces.length;
      } while (num19 < length3);
    }
    const joined6 = tag.join();
    const tagResult17 = tag.tag(19, 01307__.WireType.LengthDelimited);
  }
  if ("" !== id.owningTeamId) {
    tag.tag(20, 01307__.WireType.LengthDelimited).string(id.owningTeamId);
    const tagResult18 = tag.tag(20, 01307__.WireType.LengthDelimited);
  }
  if ("0" !== id.cachedNotificationChannelId) {
    tag.tag(21, 01307__.WireType.Bit64).fixed64(id.cachedNotificationChannelId);
    const tagResult19 = tag.tag(21, 01307__.WireType.Bit64);
  }
  if (0 !== id.exposureTracking) {
    tag.tag(22, 01307__.WireType.Varint).int32(id.exposureTracking);
    const tagResult20 = tag.tag(22, 01307__.WireType.Varint);
  }
  if (0 !== id.assignmentMode) {
    tag.tag(25, 01307__.WireType.Varint).int32(id.assignmentMode);
    const tagResult21 = tag.tag(25, 01307__.WireType.Varint);
  }
  if (false !== id.enableEditRawJsonUi) {
    tag.tag(23, 01307__.WireType.Varint).bool(id.enableEditRawJsonUi);
    const tagResult22 = tag.tag(23, 01307__.WireType.Varint);
  }
  if (id.dynamicConfigSizeLimitOverride) {
    const Int32Value = defineProperty /* defineProperty */.Int32Value;
    const tagResult23 = tag.tag(46, 01307__.WireType.LengthDelimited);
    const joined7 = Int32Value.internalBinaryWrite(id.dynamicConfigSizeLimitOverride, tag.tag(46, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult6 = Int32Value.internalBinaryWrite(id.dynamicConfigSizeLimitOverride, tag.tag(46, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (0 !== id.winningVariationId) {
    tag.tag(24, 01307__.WireType.Varint).int32(id.winningVariationId);
    const tagResult24 = tag.tag(24, 01307__.WireType.Varint);
  }
  if ("" !== id.extraOutcomeContext) {
    tag.tag(34, 01307__.WireType.LengthDelimited).string(id.extraOutcomeContext);
    const tagResult25 = tag.tag(34, 01307__.WireType.LengthDelimited);
  }
  if (0 !== id.type) {
    tag.tag(26, 01307__.WireType.Varint).int32(id.type);
    const tagResult26 = tag.tag(26, 01307__.WireType.Varint);
  }
  if (false !== id.isTemplate) {
    tag.tag(27, 01307__.WireType.Varint).bool(id.isTemplate);
    const tagResult27 = tag.tag(27, 01307__.WireType.Varint);
  }
  if (id.fieldNumbersToCopy.length) {
    tag.tag(28, 01307__.WireType.LengthDelimited).fork();
    let num31 = 0;
    if (0 < id.fieldNumbersToCopy.length) {
      do {
        let int32Result9 = tag.int32(id.fieldNumbersToCopy[num31]);
        num31 = num31 + 1;
        length4 = id.fieldNumbersToCopy.length;
      } while (num31 < length4);
    }
    const joined8 = tag.join();
    const tagResult28 = tag.tag(28, 01307__.WireType.LengthDelimited);
  }
  let num32 = 0;
  if (0 < id.engineFeatureFlags.length) {
    do {
      let tmp93 = require;
      let tmp94 = dependencyMap;
      let tagResult29 = tag.tag(29, 01307__.WireType.LengthDelimited);
      let stringResult6 = tagResult29.string(id.engineFeatureFlags[num32]);
      num32 = num32 + 1;
      length5 = id.engineFeatureFlags.length;
    } while (num32 < length5);
  }
  if (id.debugConfig) {
    const tagResult30 = tag.tag(30, 01307__.WireType.LengthDelimited);
    const joined9 = tmp11.internalBinaryWrite(id.debugConfig, tag.tag(30, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult7 = tmp11.internalBinaryWrite(id.debugConfig, tag.tag(30, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (id.expectedEndDate) {
    joined10 = require;
    joined10 = dependencyMap;
    const Timestamp3 = now /* now */.Timestamp;
    const tagResult31 = tag.tag(31, 01307__.WireType.LengthDelimited);
    joined10 = Timestamp3.internalBinaryWrite(id.expectedEndDate, tag.tag(31, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult8 = Timestamp3.internalBinaryWrite(id.expectedEndDate, tag.tag(31, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (false !== id.isAutomatedChange) {
    joined10 = require;
    joined10 = dependencyMap;
    joined10 = tag.tag(32, 01307__.WireType.Varint).bool(id.isAutomatedChange);
    const tagResult32 = tag.tag(32, 01307__.WireType.Varint);
  }
  if (false !== id.suppressEditorMention) {
    joined10 = require;
    joined10 = dependencyMap;
    joined10 = tag.tag(44, 01307__.WireType.Varint).bool(id.suppressEditorMention);
    const tagResult33 = tag.tag(44, 01307__.WireType.Varint);
  }
  if (id.archiveAt) {
    joined10 = require;
    joined10 = dependencyMap;
    const Timestamp4 = now /* now */.Timestamp;
    const tagResult34 = tag.tag(33, 01307__.WireType.LengthDelimited);
    joined10 = Timestamp4.internalBinaryWrite(id.archiveAt, tag.tag(33, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult9 = Timestamp4.internalBinaryWrite(id.archiveAt, tag.tag(33, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (id.guildExperimentVersion) {
    joined10 = require;
    joined10 = dependencyMap;
    const Int32Value2 = defineProperty /* defineProperty */.Int32Value;
    const tagResult35 = tag.tag(35, 01307__.WireType.LengthDelimited);
    joined10 = Int32Value2.internalBinaryWrite(id.guildExperimentVersion, tag.tag(35, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult10 = Int32Value2.internalBinaryWrite(id.guildExperimentVersion, tag.tag(35, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (0 !== id.customUnitPrefix) {
    joined10 = require;
    joined10 = dependencyMap;
    joined10 = tag.tag(36, 01307__.WireType.Varint).int32(id.customUnitPrefix);
    const tagResult36 = tag.tag(36, 01307__.WireType.Varint);
  }
  if (id.exposurePoints.length) {
    joined10 = require;
    joined10 = dependencyMap;
    joined10 = tag.tag(45, 01307__.WireType.LengthDelimited).fork();
    let num41 = 0;
    if (0 < id.exposurePoints.length) {
      do {
        joined10 = tag.int32(id.exposurePoints[num41]);
        num41 = num41 + 1;
        length6 = id.exposurePoints.length;
      } while (num41 < length6);
    }
    joined10 = tag.join();
    const tagResult37 = tag.tag(45, 01307__.WireType.LengthDelimited);
  }
  let num42 = 0;
  if (0 < id.growthbookTags.length) {
    do {
      joined10 = require;
      joined10 = dependencyMap;
      let tagResult38 = tag.tag(37, 01307__.WireType.LengthDelimited);
      joined10 = tagResult38.string(id.growthbookTags[num42]);
      num42 = num42 + 1;
      length7 = id.growthbookTags.length;
    } while (num42 < length7);
  }
  if (false !== id.allocateRightToLeft) {
    joined10 = require;
    joined10 = dependencyMap;
    joined10 = tag.tag(38, 01307__.WireType.Varint).bool(id.allocateRightToLeft);
    const tagResult39 = tag.tag(38, 01307__.WireType.Varint);
  }
  if (false !== id.isManaged) {
    joined10 = require;
    joined10 = dependencyMap;
    joined10 = tag.tag(39, 01307__.WireType.Varint).bool(id.isManaged);
    const tagResult40 = tag.tag(39, 01307__.WireType.Varint);
  }
  if (id.numberLineSettings) {
    joined10 = tmp8;
    joined10 = require;
    joined10 = dependencyMap;
    const tagResult41 = tag.tag(43, 01307__.WireType.LengthDelimited);
    joined10 = tmp8.internalBinaryWrite(id.numberLineSettings, tag.tag(43, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult11 = tmp8.internalBinaryWrite(id.numberLineSettings, tag.tag(43, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (0 !== id.eligibilityPersistence) {
    joined10 = require;
    joined10 = dependencyMap;
    joined10 = tag.tag(42, 01307__.WireType.Varint).int32(id.eligibilityPersistence);
    const tagResult42 = tag.tag(42, 01307__.WireType.Varint);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      joined10 = require;
      joined10 = dependencyMap;
      onWrite = 01307__.UnknownFieldHandler.onWrite;
    }
    const self = this;
    joined10 = onWrite(this.typeName, id, tag);
  }
  return tag;
};
const experimentType = new Experiment$Type();
class Experiment_NumberLineSettings$Type extends MessageType2 {
  constructor() {
    obj = {
      no: 1,
      name: "mode",
      kind: "enum",
      T() {
            const items = ["discord_protos.discord_experimentation.v1.Experiment.NumberLineSettings.Mode", closure_3];
            return items;
          }
    };
    items = [, , ];
    items[0] = obj;
    items[1] = { no: 2, name: "linked_id", kind: "scalar", T: 6 };
    items[2] = { no: 3, name: "shared_control", kind: "scalar", T: 8 };
    tmp = new tmp("discord_protos.discord_experimentation.v1.Experiment.NumberLineSettings", items, new.target);
    // ThrowIfThisInitialized (0x7c)
    return tmp;
  }
}
const prototype2 = Experiment_NumberLineSettings$Type.prototype;
prototype2["create"] = function create(arr) {
  let obj = { mode: 0, linkedId: "0", sharedControl: false };
  const _Object = Object;
  obj = { enumerable: false, value: this };
  _Object.defineProperty(obj, 01307__.MESSAGE_TYPE, obj);
  if (undefined !== arr) {
    const result = 01307__.reflectionMergePartial(this, obj, arr);
    const tmpResult = 01307__;
  }
  return obj;
};
prototype2["internalBinaryRead"] = function internalBinaryRead(pos, arg1, readUnknownField) {
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
      let tmp3 = callback;
      let tmp4 = callback(pos.tag(), 2);
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
          let tmp16 = tmp5;
          let tmp17 = tmp6;
          let tmp18 = new.target;
          let tmp19 = new.target;
          let error = new Error("Unknown field " + tmp5 + " (wire type " + tmp6 + ") for " + self.typeName);
          let tmp21 = error;
          throw error;
        } else {
          let skipResult = pos.skip(tmp6);
          if (false !== onRead) {
            if (true === onRead) {
              let tmp8 = require;
              let tmp9 = dependencyMap;
              onRead = 01307__.UnknownFieldHandler.onRead;
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
prototype2["internalBinaryWrite"] = function internalBinaryWrite(mode, tag, writeUnknownFields) {
  if (0 !== mode.mode) {
    tag.tag(1, 01307__.WireType.Varint).int32(mode.mode);
    const tagResult = tag.tag(1, 01307__.WireType.Varint);
  }
  if ("0" !== mode.linkedId) {
    tag.tag(2, 01307__.WireType.Bit64).fixed64(mode.linkedId);
    const tagResult1 = tag.tag(2, 01307__.WireType.Bit64);
  }
  if (false !== mode.sharedControl) {
    tag.tag(3, 01307__.WireType.Varint).bool(mode.sharedControl);
    const tagResult2 = tag.tag(3, 01307__.WireType.Varint);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = 01307__.UnknownFieldHandler.onWrite;
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
      const items = ["discord_protos.discord_experimentation.v1.Experiment.NumberLineSettings.Mode", closure_3];
      return items;
    }
  },
  { no: 2, name: "linked_id", kind: "scalar", T: 6 },
  { no: 3, name: "shared_control", kind: "scalar", T: 8 }
];
let tmp8 = new "DEFAULT"("discord_protos.discord_experimentation.v1.Experiment.NumberLineSettings", items, tmp5, tmp4, "create", tmp3, "internalBinaryRead", "internalBinaryWrite", tmp2, Experiment_NumberLineSettings$Type, tmp, arg1, dependencyMap, obj, obj, obj, obj1, obj2, obj3, obj4, obj5, obj6, obj7, obj8, obj9, experimentType, "DEFAULT", items, new.target, exports);
// ThrowIfThisInitialized (0x7c)
let closure_15 = tmp8;
class Variation$Type extends MessageType3 {
  constructor() {
    items = [, , , , , , ];
    items[0] = { no: 1, name: "id", kind: "scalar", T: 5 };
    items[1] = { no: 2, name: "label", kind: "scalar", T: 9 };
    items[2] = { no: 3, name: "target_allocation", kind: "scalar", T: 5 };
    items[3] = {
      no: 4,
      name: "buckets",
      kind: "message",
      repeat: 1,
      T() {
            return closure_17;
          }
    };
    obj = { no: 5, name: "type", kind: "enum", T: null };
    class T {
      constructor() {
        items = ["discord_protos.discord_experimentation.v1.Variation.Type"];
        items[1] = closure_12;
        return items;
      }
    }
    obj[3] = T;
    items[4] = obj;
    items[5] = {
      no: 6,
      name: "configuration",
      kind: "message",
      T() {
            return callback(table[3]).StringValue;
          }
    };
    items[6] = { no: 7, name: "owning_experiment_id", kind: "scalar", T: 6 };
    tmp = new tmp("discord_protos.discord_experimentation.v1.Variation", items, T);
    // ThrowIfThisInitialized (0x7c)
    return tmp;
  }
}
const prototype3 = Variation$Type.prototype;
prototype3["create"] = function create(arr) {
  let obj = { id: 0, label: "", targetAllocation: 0, buckets: [], type: 0, owningExperimentId: "0" };
  const _Object = Object;
  obj = { enumerable: false, value: this };
  _Object.defineProperty(obj, 01307__.MESSAGE_TYPE, obj);
  if (undefined !== arr) {
    const result = 01307__.reflectionMergePartial(this, obj, arr);
    const tmpResult = 01307__;
  }
  return obj;
};
prototype3["internalBinaryRead"] = function internalBinaryRead(pos, arg1, readUnknownField) {
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
      let tmp3 = callback;
      let tmp4 = callback(pos.tag(), 2);
      [tmp5, tmp6] = tmp4;
      if (1 === tmp5) {
        obj.id = pos.int32();
      } else if (2 === tmp5) {
        obj.label = pos.string();
      } else if (3 === tmp5) {
        obj.targetAllocation = pos.int32();
      } else if (4 === tmp5) {
        let buckets = obj.buckets;
        let tmp27 = variationType;
        let arr = buckets.push(variationType.internalBinaryRead(pos, pos.uint32(), readUnknownField));
      } else if (5 === tmp5) {
        obj.type = pos.int32();
      } else if (6 === tmp5) {
        let tmp22 = require;
        let tmp23 = dependencyMap;
        let StringValue = defineProperty /* defineProperty */.StringValue;
        let tmp24 = StringValue;
        let tmp25 = pos;
        let tmp26 = readUnknownField;
        obj.configuration = StringValue.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.configuration);
      } else if (7 === tmp5) {
        let str4 = pos.fixed64();
        obj.owningExperimentId = str4.toString();
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
          let error = new Error("Unknown field " + tmp5 + " (wire type " + tmp6 + ") for " + self.typeName);
          let tmp21 = error;
          throw error;
        } else {
          let skipResult = pos.skip(tmp6);
          if (false !== onRead) {
            if (true === onRead) {
              let tmp8 = require;
              let tmp9 = dependencyMap;
              onRead = 01307__.UnknownFieldHandler.onRead;
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
prototype3["internalBinaryWrite"] = function internalBinaryWrite(id, tag, writeUnknownFields) {
  let length;
  if (0 !== id.id) {
    tag.tag(1, 01307__.WireType.Varint).int32(id.id);
    const tagResult = tag.tag(1, 01307__.WireType.Varint);
  }
  if ("" !== id.label) {
    tag.tag(2, 01307__.WireType.LengthDelimited).string(id.label);
    const tagResult1 = tag.tag(2, 01307__.WireType.LengthDelimited);
  }
  if (0 !== id.targetAllocation) {
    tag.tag(3, 01307__.WireType.Varint).int32(id.targetAllocation);
    const tagResult2 = tag.tag(3, 01307__.WireType.Varint);
  }
  let num4 = 0;
  if (0 < id.buckets.length) {
    do {
      let tmp10 = variationType;
      let tmp11 = require;
      let tmp12 = dependencyMap;
      let tagResult3 = tag.tag(4, 01307__.WireType.LengthDelimited);
      let internalBinaryWriteResult = variationType.internalBinaryWrite(id.buckets[num4], tagResult3.fork(), writeUnknownFields);
      let joined = internalBinaryWriteResult.join();
      num4 = num4 + 1;
      length = id.buckets.length;
    } while (num4 < length);
  }
  if (0 !== id.type) {
    tag.tag(5, 01307__.WireType.Varint).int32(id.type);
    const tagResult4 = tag.tag(5, 01307__.WireType.Varint);
  }
  if (id.configuration) {
    const StringValue = defineProperty /* defineProperty */.StringValue;
    const tagResult5 = tag.tag(6, 01307__.WireType.LengthDelimited);
    const joined1 = StringValue.internalBinaryWrite(id.configuration, tag.tag(6, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult1 = StringValue.internalBinaryWrite(id.configuration, tag.tag(6, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if ("0" !== id.owningExperimentId) {
    tag.tag(7, 01307__.WireType.Bit64).fixed64(id.owningExperimentId);
    const tagResult6 = tag.tag(7, 01307__.WireType.Bit64);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = 01307__.UnknownFieldHandler.onWrite;
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
      return closure_17;
    }
  },
  {
    no: 5,
    name: "type",
    kind: "enum",
    T() {
      const items = ["discord_protos.discord_experimentation.v1.Variation.Type", obj7];
      return items;
    }
  },
  {
    no: 6,
    name: "configuration",
    kind: "message",
    T() {
      return callback(table[3]).StringValue;
    }
  },

];
const obj11 = { no: 7, name: "owning_experiment_id", kind: "scalar", T: 6 };
items1[6] = obj11;
tmp2 = new tmp2("discord_protos.discord_experimentation.v1.Variation", items1, tmp5, tmp4, "create", Variation$Type, "internalBinaryRead", "internalBinaryWrite", tmp2, undefined, tmp, arg1, dependencyMap, obj, obj, obj, obj1, obj2, obj3, obj4, obj5, obj6, obj7, obj8, obj9, experimentType, tmp8, items1, new.target, exports, obj11, undefined, 7, 6);
// ThrowIfThisInitialized (0x7c)
let closure_16 = tmp2;
class Bucket$Type extends MessageType4 {
  constructor() {
    items = [, , ];
    items[0] = { no: 1, name: "start", kind: "scalar", T: 5 };
    items[1] = { no: 2, name: "stop", kind: "scalar", T: 5 };
    items[2] = {
      no: 3,
      name: "type",
      kind: "enum",
      T() {
            const items = ["discord_protos.discord_experimentation.v1.Bucket.Type", closure_13];
            return items;
          }
    };
    tmp = new tmp("discord_protos.discord_experimentation.v1.Bucket", items, new.target);
    // ThrowIfThisInitialized (0x7c)
    return tmp;
  }
}
const prototype4 = Bucket$Type.prototype;
prototype4["create"] = function create(arr) {
  let obj = { start: 0, stop: 0, type: 0 };
  const _Object = Object;
  obj = { enumerable: false, value: this };
  _Object.defineProperty(obj, 01307__.MESSAGE_TYPE, obj);
  if (undefined !== arr) {
    const result = 01307__.reflectionMergePartial(this, obj, arr);
    const tmpResult = 01307__;
  }
  return obj;
};
prototype4["internalBinaryRead"] = function internalBinaryRead(pos, arg1, readUnknownField) {
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
      let tmp3 = callback;
      let tmp4 = callback(pos.tag(), 2);
      [tmp5, tmp6] = tmp4;
      if (1 === tmp5) {
        obj.start = pos.int32();
      } else if (2 === tmp5) {
        obj.stop = pos.int32();
      } else if (3 === tmp5) {
        obj.type = pos.int32();
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
          let error = new Error("Unknown field " + tmp5 + " (wire type " + tmp6 + ") for " + self.typeName);
          let tmp21 = error;
          throw error;
        } else {
          let skipResult = pos.skip(tmp6);
          if (false !== onRead) {
            if (true === onRead) {
              let tmp8 = require;
              let tmp9 = dependencyMap;
              onRead = 01307__.UnknownFieldHandler.onRead;
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
prototype4["internalBinaryWrite"] = function internalBinaryWrite(start, tag, writeUnknownFields) {
  if (0 !== start.start) {
    tag.tag(1, 01307__.WireType.Varint).int32(start.start);
    const tagResult = tag.tag(1, 01307__.WireType.Varint);
  }
  if (0 !== start.stop) {
    tag.tag(2, 01307__.WireType.Varint).int32(start.stop);
    const tagResult1 = tag.tag(2, 01307__.WireType.Varint);
  }
  if (0 !== start.type) {
    tag.tag(3, 01307__.WireType.Varint).int32(start.type);
    const tagResult2 = tag.tag(3, 01307__.WireType.Varint);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = 01307__.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, start, tag);
  }
  return tag;
};
const items2 = [{ no: 1, name: "start", kind: "scalar", T: 5 }, { no: 2, name: "stop", kind: "scalar", T: 5 }, ];
const obj12 = {
  no: 3,
  name: "type",
  kind: "enum",
  T() {
    const items = ["discord_protos.discord_experimentation.v1.Bucket.Type", closure_13];
    return items;
  }
};
items2[2] = obj12;
const variationType = new Variation$Type("discord_protos.discord_experimentation.v1.Bucket", items2, tmp5, Bucket$Type, "create", Variation$Type, "internalBinaryRead", "internalBinaryWrite", items2, undefined, tmp, arg1, dependencyMap, obj, obj, obj, obj1, obj2, obj3, obj4, obj5, obj6, obj7, obj8, obj9, experimentType, tmp8, tmp2, new.target, exports, obj12, undefined, 7, 6, 4, 2);
// ThrowIfThisInitialized (0x7c)
class DebugConfig$Type extends MessageType5 {
  constructor() {
    items = [, , , , , ];
    items[0] = { no: 1, name: "enable_decision_logging", kind: "scalar", T: 8 };
    items[1] = { no: 2, name: "metrics_sample_rate", kind: "scalar", T: 1 };
    items[2] = { no: 3, name: "log_context_on_failure", kind: "scalar", T: 8 };
    items[3] = { no: 4, name: "log_raw_headers", kind: "scalar", T: 8 };
    items[4] = { no: 5, name: "tag_filter_metrics", kind: "scalar", T: 8 };
    items[5] = { no: 6, name: "decision_log_sample_rate", kind: "scalar", T: 1 };
    tmp = new tmp("discord_protos.discord_experimentation.v1.DebugConfig", items, new.target);
    // ThrowIfThisInitialized (0x7c)
    return tmp;
  }
}
const prototype5 = DebugConfig$Type.prototype;
prototype5["create"] = function create(arr) {
  let obj = { enableDecisionLogging: false, metricsSampleRate: 0, logContextOnFailure: false, logRawHeaders: false, tagFilterMetrics: false, decisionLogSampleRate: 0 };
  const _Object = Object;
  obj = { enumerable: false, value: this };
  _Object.defineProperty(obj, 01307__.MESSAGE_TYPE, obj);
  if (undefined !== arr) {
    const result = 01307__.reflectionMergePartial(this, obj, arr);
    const tmpResult = 01307__;
  }
  return obj;
};
prototype5["internalBinaryRead"] = function internalBinaryRead(pos, arg1, readUnknownField) {
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
      let tmp3 = callback;
      let tmp4 = callback(pos.tag(), 2);
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
          let tmp16 = tmp5;
          let tmp17 = tmp6;
          let tmp18 = new.target;
          let tmp19 = new.target;
          let error = new Error("Unknown field " + tmp5 + " (wire type " + tmp6 + ") for " + self.typeName);
          let tmp21 = error;
          throw error;
        } else {
          let skipResult = pos.skip(tmp6);
          if (false !== onRead) {
            if (true === onRead) {
              let tmp8 = require;
              let tmp9 = dependencyMap;
              onRead = 01307__.UnknownFieldHandler.onRead;
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
prototype5["internalBinaryWrite"] = function internalBinaryWrite(enableDecisionLogging, tag, writeUnknownFields) {
  if (false !== enableDecisionLogging.enableDecisionLogging) {
    tag.tag(1, 01307__.WireType.Varint).bool(enableDecisionLogging.enableDecisionLogging);
    const tagResult = tag.tag(1, 01307__.WireType.Varint);
  }
  if (0 !== enableDecisionLogging.metricsSampleRate) {
    tag.tag(2, 01307__.WireType.Bit64).double(enableDecisionLogging.metricsSampleRate);
    const tagResult1 = tag.tag(2, 01307__.WireType.Bit64);
  }
  if (false !== enableDecisionLogging.logContextOnFailure) {
    tag.tag(3, 01307__.WireType.Varint).bool(enableDecisionLogging.logContextOnFailure);
    const tagResult2 = tag.tag(3, 01307__.WireType.Varint);
  }
  if (false !== enableDecisionLogging.logRawHeaders) {
    tag.tag(4, 01307__.WireType.Varint).bool(enableDecisionLogging.logRawHeaders);
    const tagResult3 = tag.tag(4, 01307__.WireType.Varint);
  }
  if (false !== enableDecisionLogging.tagFilterMetrics) {
    tag.tag(5, 01307__.WireType.Varint).bool(enableDecisionLogging.tagFilterMetrics);
    const tagResult4 = tag.tag(5, 01307__.WireType.Varint);
  }
  if (0 !== enableDecisionLogging.decisionLogSampleRate) {
    tag.tag(6, 01307__.WireType.Bit64).double(enableDecisionLogging.decisionLogSampleRate);
    const tagResult5 = tag.tag(6, 01307__.WireType.Bit64);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = 01307__.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, enableDecisionLogging, tag);
  }
  return tag;
};
const items3 = [{ no: 1, name: "enable_decision_logging", kind: "scalar", T: 8 }, { no: 2, name: "metrics_sample_rate", kind: "scalar", T: 1 }, { no: 3, name: "log_context_on_failure", kind: "scalar", T: 8 }, { no: 4, name: "log_raw_headers", kind: "scalar", T: 8 }, { no: 5, name: "tag_filter_metrics", kind: "scalar", T: 8 }, ];
const obj13 = { no: 6, name: "decision_log_sample_rate", kind: "scalar", T: 1 };
items3[5] = obj13;
let tmp11 = new "internalBinaryRead"("discord_protos.discord_experimentation.v1.DebugConfig", items3, tmp5, Bucket$Type, "create", DebugConfig$Type, "internalBinaryRead", items3, new.target, undefined, tmp, arg1, dependencyMap, obj, obj, obj, obj1, obj2, obj3, obj4, obj5, obj6, obj7, obj8, obj9, experimentType, tmp8, tmp2, variationType, exports, obj13, undefined, 7, 6);
// ThrowIfThisInitialized (0x7c)
let closure_18 = tmp11;
let result = require("now").fileFinishedImporting("../discord_common/js/packages/protos/discord_protos/discord_experimentation/v1/experiment.tsx");

export const Experiment_NumberLineSettings_Mode = obj;
export const Experiment_UnitType = obj;
export const Experiment_Surface = obj;
export const Experiment_ExposureTracking = obj1;
export const Experiment_AssignmentMode = obj2;
export const Experiment_Type = obj3;
export const Experiment_CustomUnitPrefix = obj4;
export const Experiment_ExposurePointId = obj5;
export const Experiment_EligibilityPersistence = obj6;
export const Variation_Type = obj7;
export const Bucket_Type = obj8;
export const Phase = obj9;
export const Experiment = experimentType;
export const Experiment_NumberLineSettings = tmp8;
export const Variation = tmp2;
export const Bucket = variationType;
export const DebugConfig = tmp11;