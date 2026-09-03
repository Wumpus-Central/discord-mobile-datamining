// discord_common/js/packages/protos/discord_protos/discord_experimentation/v1/rules.tsx
import _mod1306 from "../../../../../../../_runtime/metro/01306__.js";
import defineProperty2 from "../../../google/protobuf/wrappers.tsx";
import closure_2 from "../../../../../../../_runtime/metro/00032__slicedToArray.js";
import {
  MessageType,
  MessageType as MessageType2,
  MessageType as MessageType3,
  MessageType as MessageType4,
  MessageType as MessageType5,
  MessageType as MessageType6,
  MessageType as MessageType7,
  MessageType as MessageType8,
  MessageType as MessageType9,
  MessageType as MessageType10,
  MessageType as MessageType11,
  MessageType as MessageType12,
  MessageType as MessageType13,
  MessageType as MessageType14,
  MessageType as MessageType15,
  MessageType as MessageType16,
  MessageType as MessageType17,
  MessageType as MessageType18,
  MessageType as MessageType19,
  MessageType as MessageType20,
  MessageType as MessageType21,
  MessageType as MessageType22,
  MessageType as MessageType23,
  MessageType as MessageType24,
  MessageType as MessageType25,
  MessageType as MessageType26,
  MessageType as MessageType27,
  MessageType as MessageType28,
  MessageType as MessageType29,
  MessageType as MessageType30,
  MessageType as MessageType31,
  MessageType as MessageType32,
  MessageType as MessageType33,
  MessageType as MessageType34,
  MessageType as MessageType35,
  MessageType as MessageType36,
  MessageType as MessageType37,
  MessageType as MessageType38,
  MessageType as MessageType39,
  MessageType as MessageType40,
  MessageType as MessageType41,
  MessageType as MessageType42,
  MessageType as MessageType43,
  MessageType as MessageType44,
} from "../../../../../../../_runtime/metro/01306__.js";

require = arg1;
let obj = {
  UNSPECIFIED: 0,
  [0]: "UNSPECIFIED",
  EXCLUDE: 1,
  [1]: "EXCLUDE",
  OVERRIDE: 2,
  [2]: "OVERRIDE",
  REQUIRE: 3,
  [3]: "REQUIRE",
  ASSIGNMENT: 4,
  [4]: "ASSIGNMENT",
};
obj = { REGULAR: 0, [0]: "REGULAR", HOLDOUT: 1, [1]: "HOLDOUT" };
obj = {
  UNSPECIFIED: 0,
  [0]: "UNSPECIFIED",
  USER: 1,
  [1]: "USER",
  CLIENT: 2,
  [2]: "CLIENT",
  GUILD: 3,
  [3]: "GUILD",
  UTILITY: 4,
  [4]: "UTILITY",
};
let obj1 = { UNSPECIFIED: 0, [0]: "UNSPECIFIED", STICKY: 1, [1]: "STICKY", LAZY: 2, [2]: "LAZY" };
class Rule$Type extends MessageType {
  constructor() {
    obj = {
      no: 1,
      name: "type",
      kind: "enum",
      T() {
        const items = ["discord_protos.discord_experimentation.v1.Rule.Type", closure_3];
        return items;
      },
    };
    items = [, , , , ,];
    items[0] = obj;
    items[1] = {
      no: 2,
      name: "filters",
      kind: "message",
      repeat: 1,
      T() {
        return closure_6;
      },
    };
    obj = { no: 3, name: "override", kind: "message", T: null };
    class T {
      constructor() {
        return closure_5;
      }
    }
    obj[3] = T;
    items[2] = obj;
    items[3] = { no: 4, name: "is_sunset_rule", kind: "scalar", T: 8 };
    items[4] = {
      no: 5,
      name: "subtype",
      kind: "enum",
      T() {
        const items = ["discord_protos.discord_experimentation.v1.Rule.Subtype", closure_4];
        return items;
      },
    };
    items[5] = { no: 6, name: "hash", kind: "scalar", T: 9 };
    tmp = new tmp("discord_protos.discord_experimentation.v1.Rule", items, T);
    // ThrowIfThisInitialized (0x7c)
    return tmp;
  }
}
const prototype = Rule$Type.prototype;
prototype["create"] = function create(arr) {
  obj = { type: 0, filters: [], isSunsetRule: false, subtype: 0, hash: "" };
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
        obj.type = pos.int32();
      } else if (2 === tmp5) {
        let filters = obj.filters;
        let tmp26 = filterType;
        let arr = filters.push(filterType.internalBinaryRead(pos, pos.uint32(), readUnknownField));
      } else if (3 === tmp5) {
        let tmp22 = ruleType;
        let tmp23 = ruleType;
        let tmp24 = pos;
        let tmp25 = readUnknownField;
        obj.override = ruleType.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.override);
      } else if (4 === tmp5) {
        obj.isSunsetRule = pos.bool();
      } else if (5 === tmp5) {
        obj.subtype = pos.int32();
      } else if (6 === tmp5) {
        obj.hash = pos.string();
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
prototype["internalBinaryWrite"] = function internalBinaryWrite(type, tag, writeUnknownFields) {
  let length;
  if (0 !== type.type) {
    tag.tag(1, _mod1306.WireType.Varint).int32(type.type);
    const tagResult = tag.tag(1, _mod1306.WireType.Varint);
  }
  let num2 = 0;
  if (0 < type.filters.length) {
    do {
      let tmp4 = filterType;
      let tmp5 = require;
      let tmp6 = dependencyMap;
      let tagResult1 = tag.tag(2, _mod1306.WireType.LengthDelimited);
      let internalBinaryWriteResult = filterType.internalBinaryWrite(
        type.filters[num2],
        tagResult1.fork(),
        writeUnknownFields,
      );
      let joined = internalBinaryWriteResult.join();
      num2 = num2 + 1;
      length = type.filters.length;
    } while (num2 < length);
  }
  if (type.override) {
    const tagResult2 = tag.tag(3, _mod1306.WireType.LengthDelimited);
    const joined1 = ruleType
      .internalBinaryWrite(type.override, tag.tag(3, _mod1306.WireType.LengthDelimited).fork(), writeUnknownFields)
      .join();
    const internalBinaryWriteResult1 = ruleType.internalBinaryWrite(
      type.override,
      tag.tag(3, _mod1306.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    );
  }
  if (false !== type.isSunsetRule) {
    tag.tag(4, _mod1306.WireType.Varint).bool(type.isSunsetRule);
    const tagResult3 = tag.tag(4, _mod1306.WireType.Varint);
  }
  if (0 !== type.subtype) {
    tag.tag(5, _mod1306.WireType.Varint).int32(type.subtype);
    const tagResult4 = tag.tag(5, _mod1306.WireType.Varint);
  }
  if ("" !== type.hash) {
    tag.tag(6, _mod1306.WireType.LengthDelimited).string(type.hash);
    const tagResult5 = tag.tag(6, _mod1306.WireType.LengthDelimited);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = _mod1306.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, type, tag);
  }
  return tag;
};
let items = [
  {
    no: 1,
    name: "type",
    kind: "enum",
    T() {
      const items = ["discord_protos.discord_experimentation.v1.Rule.Type", closure_3];
      return items;
    },
  },
  {
    no: 2,
    name: "filters",
    kind: "message",
    repeat: 1,
    T() {
      return closure_6;
    },
  },
  {
    no: 3,
    name: "override",
    kind: "message",
    T() {
      return closure_5;
    },
  },
  { no: 4, name: "is_sunset_rule", kind: "scalar", T: 8 },
  {
    no: 5,
    name: "subtype",
    kind: "enum",
    T() {
      const items = ["discord_protos.discord_experimentation.v1.Rule.Subtype", closure_4];
      return items;
    },
  },
  { no: 6, name: "hash", kind: "scalar", T: 9 },
];
defineProperty = new defineProperty(
  "discord_protos.discord_experimentation.v1.Rule",
  items,
  tmp6,
  tmp5,
  tmp4,
  tmp3,
  "create",
  "internalBinaryRead",
  "internalBinaryWrite",
);
// ThrowIfThisInitialized (0x7c)
class Override$Type extends MessageType2 {
  constructor() {
    items = [];
    items[0] = { no: 1, name: "variation_id", kind: "scalar", T: 5 };
    tmp = new tmp("discord_protos.discord_experimentation.v1.Override", items, new.target);
    // ThrowIfThisInitialized (0x7c)
    return tmp;
  }
}
const prototype2 = Override$Type.prototype;
prototype2["create"] = function create(arr) {
  obj = { variationId: 0 };
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
        obj.variationId = pos.int32();
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
prototype2["internalBinaryWrite"] = function internalBinaryWrite(variationId, tag, writeUnknownFields) {
  if (0 !== variationId.variationId) {
    tag.tag(1, _mod1306.WireType.Varint).int32(variationId.variationId);
    const tagResult = tag.tag(1, _mod1306.WireType.Varint);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = _mod1306.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, variationId, tag);
  }
  return tag;
};
const items1 = [{ no: 1, name: "variation_id", kind: "scalar", T: 5 }];
const ruleType = new Rule$Type(
  "discord_protos.discord_experimentation.v1.Override",
  items1,
  tmp6,
  tmp5,
  tmp4,
  tmp3,
  "create",
  "internalBinaryRead",
  "internalBinaryWrite",
  tmp2,
);
// ThrowIfThisInitialized (0x7c)
class Filter$Type extends MessageType3 {
  constructor() {
    obj = {
      no: 2,
      name: "client_version",
      kind: "message",
      oneof: "filter",
      T() {
        return closure_26;
      },
    };
    items = [, , , , , , , , , , , , , , , , , , , , , , , , , , , ,];
    items[0] = obj;
    items[1] = {
      no: 3,
      name: "client_os",
      kind: "message",
      oneof: "filter",
      T() {
        return closure_21;
      },
    };
    items[2] = {
      no: 4,
      name: "staff",
      kind: "message",
      oneof: "filter",
      T() {
        return closure_7;
      },
    };
    items[3] = {
      no: 5,
      name: "user_in_guild",
      kind: "message",
      oneof: "filter",
      T() {
        return closure_8;
      },
    };
    items[4] = {
      no: 6,
      name: "user_ids",
      kind: "message",
      oneof: "filter",
      T() {
        return closure_9;
      },
    };
    items[5] = {
      no: 7,
      name: "client_locale",
      kind: "message",
      oneof: "filter",
      T() {
        return closure_11;
      },
    };
    items[6] = {
      no: 8,
      name: "client_location",
      kind: "message",
      oneof: "filter",
      T() {
        return closure_13;
      },
    };
    items[7] = {
      no: 9,
      name: "client_ip",
      kind: "message",
      oneof: "filter",
      T() {
        return closure_19;
      },
    };
    items[8] = {
      no: 10,
      name: "user_locale",
      kind: "message",
      oneof: "filter",
      T() {
        return closure_10;
      },
    };
    items[9] = {
      no: 11,
      name: "bot",
      kind: "message",
      oneof: "filter",
      T() {
        return closure_32;
      },
    };
    items[10] = {
      no: 12,
      name: "user_age_range",
      kind: "message",
      oneof: "filter",
      T() {
        return closure_33;
      },
    };
    items[11] = {
      no: 13,
      name: "user_id_range",
      kind: "message",
      oneof: "filter",
      T() {
        return closure_35;
      },
    };
    items[12] = {
      no: 14,
      name: "user_has_flag",
      kind: "message",
      oneof: "filter",
      T() {
        return closure_36;
      },
    };
    items[13] = {
      no: 15,
      name: "unit_id_in_range_by_hash",
      kind: "message",
      oneof: "filter",
      T() {
        return closure_37;
      },
    };
    items[14] = {
      no: 16,
      name: "client_release_channel",
      kind: "message",
      oneof: "filter",
      T() {
        return closure_38;
      },
    };
    items[15] = {
      no: 17,
      name: "always",
      kind: "message",
      oneof: "filter",
      T() {
        return closure_39;
      },
    };
    items[16] = {
      no: 18,
      name: "client_system_locale",
      kind: "message",
      oneof: "filter",
      T() {
        return closure_12;
      },
    };
    items[17] = {
      no: 19,
      name: "unit_id_in_experiment",
      kind: "message",
      oneof: "filter",
      T() {
        return closure_40;
      },
    };
    items[18] = {
      no: 20,
      name: "user_premium_type",
      kind: "message",
      oneof: "filter",
      T() {
        return closure_41;
      },
    };
    items[19] = {
      no: 21,
      name: "unit_id_matches_filter_snapshot",
      kind: "message",
      oneof: "filter",
      T() {
        return closure_42;
      },
    };
    items[20] = {
      no: 22,
      name: "guild_ids",
      kind: "message",
      oneof: "filter",
      T() {
        return closure_43;
      },
    };
    items[21] = {
      no: 23,
      name: "guild_id_range",
      kind: "message",
      oneof: "filter",
      T() {
        return closure_45;
      },
    };
    items[22] = {
      no: 25,
      name: "guild_member_count_range",
      kind: "message",
      oneof: "filter",
      T() {
        return closure_44;
      },
    };
    items[23] = {
      no: 26,
      name: "guild_has_feature",
      kind: "message",
      oneof: "filter",
      T() {
        return closure_46;
      },
    };
    items[24] = {
      no: 27,
      name: "user_location",
      kind: "message",
      oneof: "filter",
      T() {
        return closure_17;
      },
    };
    items[25] = {
      no: 28,
      name: "user_ip",
      kind: "message",
      oneof: "filter",
      T() {
        return closure_20;
      },
    };
    obj = { no: 29, name: "installation_ids", kind: "message", oneof: "filter", T: null };
    class T {
      constructor() {
        return closure_47;
      }
    }
    obj[4] = T;
    items[26] = obj;
    items[27] = {
      no: 31,
      name: "user_store_country",
      kind: "message",
      oneof: "filter",
      T() {
        return closure_18;
      },
    };
    items[28] = { no: 30, name: "negate", kind: "scalar", T: 8 };
    tmp = new tmp("discord_protos.discord_experimentation.v1.Filter", items, T);
    // ThrowIfThisInitialized (0x7c)
    return tmp;
  }
}
const prototype3 = Filter$Type.prototype;
prototype3["create"] = function create(arr) {
  obj = { filter: { oneofKind: "Array" }, negate: false };
  const _Object = Object;
  obj = { enumerable: false, value: this };
  _Object.defineProperty(obj, _mod1306.MESSAGE_TYPE, obj);
  if (undefined !== arr) {
    const result = _mod1306.reflectionMergePartial(this, obj, arr);
    const tmpResult = _mod1306;
  }
  return obj;
};
prototype3["internalBinaryRead"] = function internalBinaryRead(pos) {
  const self = this;
  obj = arg3;
  if (arg3 == null) {
    obj = self.create();
  }
  const sum = pos.pos + arg1;
  if (pos.pos < sum) {
    obj.negate = pos.bool();
  }
  return obj;
};
prototype3["internalBinaryWrite"] = function internalBinaryWrite(negate, tag, writeUnknownFields) {
  if ("clientVersion" === negate.filter.oneofKind) {
    let joined24 = sDKVersionSpecifierType;
    const tagResult = tag.tag(2, _mod1306.WireType.LengthDelimited);
    const joined = sDKVersionSpecifierType
      .internalBinaryWrite(
        negate.filter.clientVersion,
        tag.tag(2, _mod1306.WireType.LengthDelimited).fork(),
        writeUnknownFields,
      )
      .join();
    const internalBinaryWriteResult = sDKVersionSpecifierType.internalBinaryWrite(
      negate.filter.clientVersion,
      tag.tag(2, _mod1306.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    );
  }
  if ("clientOs" === negate.filter.oneofKind) {
    const tagResult1 = tag.tag(3, _mod1306.WireType.LengthDelimited);
    const joined1 = clientLocation_LocationType4
      .internalBinaryWrite(
        negate.filter.clientOs,
        tag.tag(3, _mod1306.WireType.LengthDelimited).fork(),
        writeUnknownFields,
      )
      .join();
    const internalBinaryWriteResult1 = clientLocation_LocationType4.internalBinaryWrite(
      negate.filter.clientOs,
      tag.tag(3, _mod1306.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    );
  }
  if ("staff" === negate.filter.oneofKind) {
    const tagResult2 = tag.tag(4, _mod1306.WireType.LengthDelimited);
    const joined2 = overrideType
      .internalBinaryWrite(
        negate.filter.staff,
        tag.tag(4, _mod1306.WireType.LengthDelimited).fork(),
        writeUnknownFields,
      )
      .join();
    const internalBinaryWriteResult2 = overrideType.internalBinaryWrite(
      negate.filter.staff,
      tag.tag(4, _mod1306.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    );
  }
  if ("userInGuild" === negate.filter.oneofKind) {
    const tagResult3 = tag.tag(5, _mod1306.WireType.LengthDelimited);
    const joined3 = overrideType1
      .internalBinaryWrite(
        negate.filter.userInGuild,
        tag.tag(5, _mod1306.WireType.LengthDelimited).fork(),
        writeUnknownFields,
      )
      .join();
    const internalBinaryWriteResult3 = overrideType1.internalBinaryWrite(
      negate.filter.userInGuild,
      tag.tag(5, _mod1306.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    );
  }
  if ("userIds" === negate.filter.oneofKind) {
    const tagResult4 = tag.tag(6, _mod1306.WireType.LengthDelimited);
    const joined4 = overrideType2
      .internalBinaryWrite(
        negate.filter.userIds,
        tag.tag(6, _mod1306.WireType.LengthDelimited).fork(),
        writeUnknownFields,
      )
      .join();
    const internalBinaryWriteResult4 = overrideType2.internalBinaryWrite(
      negate.filter.userIds,
      tag.tag(6, _mod1306.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    );
  }
  if ("clientLocale" === negate.filter.oneofKind) {
    const tagResult5 = tag.tag(7, _mod1306.WireType.LengthDelimited);
    const joined5 = overrideType4
      .internalBinaryWrite(
        negate.filter.clientLocale,
        tag.tag(7, _mod1306.WireType.LengthDelimited).fork(),
        writeUnknownFields,
      )
      .join();
    const internalBinaryWriteResult5 = overrideType4.internalBinaryWrite(
      negate.filter.clientLocale,
      tag.tag(7, _mod1306.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    );
  }
  if ("clientLocation" === negate.filter.oneofKind) {
    const tagResult6 = tag.tag(8, _mod1306.WireType.LengthDelimited);
    const joined6 = overrideType6
      .internalBinaryWrite(
        negate.filter.clientLocation,
        tag.tag(8, _mod1306.WireType.LengthDelimited).fork(),
        writeUnknownFields,
      )
      .join();
    const internalBinaryWriteResult6 = overrideType6.internalBinaryWrite(
      negate.filter.clientLocation,
      tag.tag(8, _mod1306.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    );
  }
  if ("clientIp" === negate.filter.oneofKind) {
    const tagResult7 = tag.tag(9, _mod1306.WireType.LengthDelimited);
    const joined7 = clientLocation_LocationType2
      .internalBinaryWrite(
        negate.filter.clientIp,
        tag.tag(9, _mod1306.WireType.LengthDelimited).fork(),
        writeUnknownFields,
      )
      .join();
    const internalBinaryWriteResult7 = clientLocation_LocationType2.internalBinaryWrite(
      negate.filter.clientIp,
      tag.tag(9, _mod1306.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    );
  }
  if ("userLocale" === negate.filter.oneofKind) {
    const tagResult8 = tag.tag(10, _mod1306.WireType.LengthDelimited);
    const joined8 = overrideType3
      .internalBinaryWrite(
        negate.filter.userLocale,
        tag.tag(10, _mod1306.WireType.LengthDelimited).fork(),
        writeUnknownFields,
      )
      .join();
    const internalBinaryWriteResult8 = overrideType3.internalBinaryWrite(
      negate.filter.userLocale,
      tag.tag(10, _mod1306.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    );
  }
  if ("bot" === negate.filter.oneofKind) {
    const tagResult9 = tag.tag(11, _mod1306.WireType.LengthDelimited);
    const joined9 = clientRequiredChangesType
      .internalBinaryWrite(negate.filter.bot, tag.tag(11, _mod1306.WireType.LengthDelimited).fork(), writeUnknownFields)
      .join();
    const internalBinaryWriteResult9 = clientRequiredChangesType.internalBinaryWrite(
      negate.filter.bot,
      tag.tag(11, _mod1306.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    );
  }
  if ("userAgeRange" === negate.filter.oneofKind) {
    const tagResult10 = tag.tag(12, _mod1306.WireType.LengthDelimited);
    const joined10 = clientRequiredChangesType1
      .internalBinaryWrite(
        negate.filter.userAgeRange,
        tag.tag(12, _mod1306.WireType.LengthDelimited).fork(),
        writeUnknownFields,
      )
      .join();
    const internalBinaryWriteResult10 = clientRequiredChangesType1.internalBinaryWrite(
      negate.filter.userAgeRange,
      tag.tag(12, _mod1306.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    );
  }
  if ("userIdRange" === negate.filter.oneofKind) {
    const tagResult11 = tag.tag(13, _mod1306.WireType.LengthDelimited);
    const joined11 = fixed64ValueType
      .internalBinaryWrite(
        negate.filter.userIdRange,
        tag.tag(13, _mod1306.WireType.LengthDelimited).fork(),
        writeUnknownFields,
      )
      .join();
    const internalBinaryWriteResult11 = fixed64ValueType.internalBinaryWrite(
      negate.filter.userIdRange,
      tag.tag(13, _mod1306.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    );
  }
  if ("userHasFlag" === negate.filter.oneofKind) {
    const tagResult12 = tag.tag(14, _mod1306.WireType.LengthDelimited);
    const joined12 = fixed64ValueType1
      .internalBinaryWrite(
        negate.filter.userHasFlag,
        tag.tag(14, _mod1306.WireType.LengthDelimited).fork(),
        writeUnknownFields,
      )
      .join();
    const internalBinaryWriteResult12 = fixed64ValueType1.internalBinaryWrite(
      negate.filter.userHasFlag,
      tag.tag(14, _mod1306.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    );
  }
  if ("unitIdInRangeByHash" === negate.filter.oneofKind) {
    const tagResult13 = tag.tag(15, _mod1306.WireType.LengthDelimited);
    const joined13 = fixed64ValueType2
      .internalBinaryWrite(
        negate.filter.unitIdInRangeByHash,
        tag.tag(15, _mod1306.WireType.LengthDelimited).fork(),
        writeUnknownFields,
      )
      .join();
    const internalBinaryWriteResult13 = fixed64ValueType2.internalBinaryWrite(
      negate.filter.unitIdInRangeByHash,
      tag.tag(15, _mod1306.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    );
  }
  if ("clientReleaseChannel" === negate.filter.oneofKind) {
    const tagResult14 = tag.tag(16, _mod1306.WireType.LengthDelimited);
    const joined14 = fixed64ValueType3
      .internalBinaryWrite(
        negate.filter.clientReleaseChannel,
        tag.tag(16, _mod1306.WireType.LengthDelimited).fork(),
        writeUnknownFields,
      )
      .join();
    const internalBinaryWriteResult14 = fixed64ValueType3.internalBinaryWrite(
      negate.filter.clientReleaseChannel,
      tag.tag(16, _mod1306.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    );
  }
  if ("always" === negate.filter.oneofKind) {
    const tagResult15 = tag.tag(17, _mod1306.WireType.LengthDelimited);
    const joined15 = fixed64ValueType4
      .internalBinaryWrite(
        negate.filter.always,
        tag.tag(17, _mod1306.WireType.LengthDelimited).fork(),
        writeUnknownFields,
      )
      .join();
    const internalBinaryWriteResult15 = fixed64ValueType4.internalBinaryWrite(
      negate.filter.always,
      tag.tag(17, _mod1306.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    );
  }
  if ("clientSystemLocale" === negate.filter.oneofKind) {
    const tagResult16 = tag.tag(18, _mod1306.WireType.LengthDelimited);
    const joined16 = overrideType5
      .internalBinaryWrite(
        negate.filter.clientSystemLocale,
        tag.tag(18, _mod1306.WireType.LengthDelimited).fork(),
        writeUnknownFields,
      )
      .join();
    const internalBinaryWriteResult16 = overrideType5.internalBinaryWrite(
      negate.filter.clientSystemLocale,
      tag.tag(18, _mod1306.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    );
  }
  if ("unitIdInExperiment" === negate.filter.oneofKind) {
    const tagResult17 = tag.tag(19, _mod1306.WireType.LengthDelimited);
    const joined17 = fixed64ValueType5
      .internalBinaryWrite(
        negate.filter.unitIdInExperiment,
        tag.tag(19, _mod1306.WireType.LengthDelimited).fork(),
        writeUnknownFields,
      )
      .join();
    const internalBinaryWriteResult17 = fixed64ValueType5.internalBinaryWrite(
      negate.filter.unitIdInExperiment,
      tag.tag(19, _mod1306.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    );
  }
  if ("userPremiumType" === negate.filter.oneofKind) {
    const tagResult18 = tag.tag(20, _mod1306.WireType.LengthDelimited);
    const joined18 = fixed64ValueType6
      .internalBinaryWrite(
        negate.filter.userPremiumType,
        tag.tag(20, _mod1306.WireType.LengthDelimited).fork(),
        writeUnknownFields,
      )
      .join();
    const internalBinaryWriteResult18 = fixed64ValueType6.internalBinaryWrite(
      negate.filter.userPremiumType,
      tag.tag(20, _mod1306.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    );
  }
  if ("unitIdMatchesFilterSnapshot" === negate.filter.oneofKind) {
    const tagResult19 = tag.tag(21, _mod1306.WireType.LengthDelimited);
    const joined19 = fixed64ValueType7
      .internalBinaryWrite(
        negate.filter.unitIdMatchesFilterSnapshot,
        tag.tag(21, _mod1306.WireType.LengthDelimited).fork(),
        writeUnknownFields,
      )
      .join();
    const internalBinaryWriteResult19 = fixed64ValueType7.internalBinaryWrite(
      negate.filter.unitIdMatchesFilterSnapshot,
      tag.tag(21, _mod1306.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    );
  }
  if ("guildIds" === negate.filter.oneofKind) {
    const tagResult20 = tag.tag(22, _mod1306.WireType.LengthDelimited);
    const joined20 = fixed64ValueType8
      .internalBinaryWrite(
        negate.filter.guildIds,
        tag.tag(22, _mod1306.WireType.LengthDelimited).fork(),
        writeUnknownFields,
      )
      .join();
    const internalBinaryWriteResult20 = fixed64ValueType8.internalBinaryWrite(
      negate.filter.guildIds,
      tag.tag(22, _mod1306.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    );
  }
  if ("guildIdRange" === negate.filter.oneofKind) {
    const tagResult21 = tag.tag(23, _mod1306.WireType.LengthDelimited);
    const joined21 = guildMemberCountRangeType
      .internalBinaryWrite(
        negate.filter.guildIdRange,
        tag.tag(23, _mod1306.WireType.LengthDelimited).fork(),
        writeUnknownFields,
      )
      .join();
    const internalBinaryWriteResult21 = guildMemberCountRangeType.internalBinaryWrite(
      negate.filter.guildIdRange,
      tag.tag(23, _mod1306.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    );
  }
  if ("guildMemberCountRange" === negate.filter.oneofKind) {
    const tagResult22 = tag.tag(25, _mod1306.WireType.LengthDelimited);
    const joined22 = guildIdsType
      .internalBinaryWrite(
        negate.filter.guildMemberCountRange,
        tag.tag(25, _mod1306.WireType.LengthDelimited).fork(),
        writeUnknownFields,
      )
      .join();
    const internalBinaryWriteResult22 = guildIdsType.internalBinaryWrite(
      negate.filter.guildMemberCountRange,
      tag.tag(25, _mod1306.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    );
  }
  if ("guildHasFeature" === negate.filter.oneofKind) {
    const tagResult23 = tag.tag(26, _mod1306.WireType.LengthDelimited);
    const joined23 = guildIdRangeType
      .internalBinaryWrite(
        negate.filter.guildHasFeature,
        tag.tag(26, _mod1306.WireType.LengthDelimited).fork(),
        writeUnknownFields,
      )
      .join();
    const internalBinaryWriteResult23 = guildIdRangeType.internalBinaryWrite(
      negate.filter.guildHasFeature,
      tag.tag(26, _mod1306.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    );
  }
  if ("userLocation" === negate.filter.oneofKind) {
    const tagResult24 = tag.tag(27, _mod1306.WireType.LengthDelimited);
    joined24 = clientLocation_LocationType
      .internalBinaryWrite(
        negate.filter.userLocation,
        tag.tag(27, _mod1306.WireType.LengthDelimited).fork(),
        writeUnknownFields,
      )
      .join();
    const internalBinaryWriteResult24 = clientLocation_LocationType.internalBinaryWrite(
      negate.filter.userLocation,
      tag.tag(27, _mod1306.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    );
  }
  if ("userIp" === negate.filter.oneofKind) {
    joined24 = clientLocation_LocationType3;
    joined24 = require;
    joined24 = dependencyMap;
    const tagResult25 = tag.tag(28, _mod1306.WireType.LengthDelimited);
    joined24 = clientLocation_LocationType3
      .internalBinaryWrite(
        negate.filter.userIp,
        tag.tag(28, _mod1306.WireType.LengthDelimited).fork(),
        writeUnknownFields,
      )
      .join();
    const internalBinaryWriteResult25 = clientLocation_LocationType3.internalBinaryWrite(
      negate.filter.userIp,
      tag.tag(28, _mod1306.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    );
  }
  if ("installationIds" === negate.filter.oneofKind) {
    joined24 = closure_47;
    joined24 = require;
    joined24 = dependencyMap;
    const tagResult26 = tag.tag(29, _mod1306.WireType.LengthDelimited);
    joined24 = closure_47
      .internalBinaryWrite(
        negate.filter.installationIds,
        tag.tag(29, _mod1306.WireType.LengthDelimited).fork(),
        writeUnknownFields,
      )
      .join();
    const internalBinaryWriteResult26 = closure_47.internalBinaryWrite(
      negate.filter.installationIds,
      tag.tag(29, _mod1306.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    );
  }
  if ("userStoreCountry" === negate.filter.oneofKind) {
    joined24 = clientLocation_LocationType1;
    joined24 = require;
    joined24 = dependencyMap;
    const tagResult27 = tag.tag(31, _mod1306.WireType.LengthDelimited);
    joined24 = clientLocation_LocationType1
      .internalBinaryWrite(
        negate.filter.userStoreCountry,
        tag.tag(31, _mod1306.WireType.LengthDelimited).fork(),
        writeUnknownFields,
      )
      .join();
    const internalBinaryWriteResult27 = clientLocation_LocationType1.internalBinaryWrite(
      negate.filter.userStoreCountry,
      tag.tag(31, _mod1306.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    );
  }
  if (false !== negate.negate) {
    joined24 = require;
    joined24 = dependencyMap;
    joined24 = tag.tag(30, _mod1306.WireType.Varint).bool(negate.negate);
    const tagResult28 = tag.tag(30, _mod1306.WireType.Varint);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      joined24 = require;
      joined24 = dependencyMap;
      onWrite = _mod1306.UnknownFieldHandler.onWrite;
    }
    const self = this;
    joined24 = onWrite(this.typeName, negate, tag);
  }
  return tag;
};
const filterType = new Filter$Type();
class StaffUsers$Type extends MessageType4 {
  constructor() {
    items = [,];
    items[0] = { no: 1, name: "work_accounts", kind: "scalar", T: 8 };
    items[1] = { no: 2, name: "personal_accounts", kind: "scalar", T: 8 };
    tmp = new tmp(
      "discord_protos.discord_experimentation.v1.StaffUsers",
      items,
      { "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_USER" },
      new.target,
    );
    // ThrowIfThisInitialized (0x7c)
    return tmp;
  }
}
const prototype4 = StaffUsers$Type.prototype;
prototype4["create"] = function create(arr) {
  obj = { workAccounts: false, personalAccounts: false };
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
        obj.workAccounts = pos.bool();
      } else if (2 === tmp5) {
        obj.personalAccounts = pos.bool();
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
prototype4["internalBinaryWrite"] = function internalBinaryWrite(workAccounts, tag, writeUnknownFields) {
  if (false !== workAccounts.workAccounts) {
    tag.tag(1, _mod1306.WireType.Varint).bool(workAccounts.workAccounts);
    const tagResult = tag.tag(1, _mod1306.WireType.Varint);
  }
  if (false !== workAccounts.personalAccounts) {
    tag.tag(2, _mod1306.WireType.Varint).bool(workAccounts.personalAccounts);
    const tagResult1 = tag.tag(2, _mod1306.WireType.Varint);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = _mod1306.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, workAccounts, tag);
  }
  return tag;
};
const items2 = [
  { no: 1, name: "work_accounts", kind: "scalar", T: 8 },
  { no: 2, name: "personal_accounts", kind: "scalar", T: 8 },
];
const overrideType = new Override$Type(
  "discord_protos.discord_experimentation.v1.StaffUsers",
  items2,
  { "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_USER" },
  tmp5,
  tmp4,
  tmp3,
  "create",
  "internalBinaryRead",
  "internalBinaryWrite",
  tmp2,
  undefined,
);
// ThrowIfThisInitialized (0x7c)
class UserInGuild$Type extends MessageType5 {
  constructor() {
    items = [];
    items[0] = { no: 1, name: "guild_ids", kind: "scalar", repeat: 1, T: 6 };
    tmp = new tmp(
      "discord_protos.discord_experimentation.v1.UserInGuild",
      items,
      { "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_USER" },
      new.target,
    );
    // ThrowIfThisInitialized (0x7c)
    return tmp;
  }
}
const prototype5 = UserInGuild$Type.prototype;
prototype5["create"] = function create(arr) {
  obj = { guildIds: [] };
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
        let tmp22 = require;
        let tmp23 = dependencyMap;
        if (tmp6 === _mod1306.WireType.LengthDelimited) {
          let sum1 = pos.int32() + pos.pos;
          if (pos.pos < sum1) {
            do {
              let guildIds = obj.guildIds;
              let str5 = pos.fixed64();
              let arr = guildIds.push(str5.toString());
              pos = pos.pos;
            } while (pos < sum1);
          }
        } else {
          let guildIds1 = obj.guildIds;
          let str4 = pos.fixed64();
          arr = guildIds1.push(str4.toString());
        }
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
prototype5["internalBinaryWrite"] = function internalBinaryWrite(guildIds, tag, writeUnknownFields) {
  let length;
  if (guildIds.guildIds.length) {
    tag.tag(1, _mod1306.WireType.LengthDelimited).fork();
    let num2 = 0;
    if (0 < guildIds.guildIds.length) {
      do {
        let fixed64Result = tag.fixed64(guildIds.guildIds[num2]);
        num2 = num2 + 1;
        length = guildIds.guildIds.length;
      } while (num2 < length);
    }
    const joined = tag.join();
    const tagResult = tag.tag(1, _mod1306.WireType.LengthDelimited);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = _mod1306.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, guildIds, tag);
  }
  return tag;
};
const items3 = [{ no: 1, name: "guild_ids", kind: "scalar", repeat: 1, T: 6 }];
const overrideType1 = new Override$Type(
  "discord_protos.discord_experimentation.v1.UserInGuild",
  items3,
  { "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_USER" },
  tmp5,
  tmp4,
  tmp3,
  "create",
  "internalBinaryRead",
  "internalBinaryWrite",
  tmp2,
  undefined,
);
// ThrowIfThisInitialized (0x7c)
class UserIds$Type extends MessageType6 {
  constructor() {
    items = [];
    items[0] = { no: 1, name: "user_ids", kind: "scalar", repeat: 1, T: 6 };
    tmp = new tmp(
      "discord_protos.discord_experimentation.v1.UserIds",
      items,
      { "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_USER" },
      new.target,
    );
    // ThrowIfThisInitialized (0x7c)
    return tmp;
  }
}
const prototype6 = UserIds$Type.prototype;
prototype6["create"] = function create(arr) {
  obj = { userIds: [] };
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
      if (1 === tmp5) {
        let tmp22 = require;
        let tmp23 = dependencyMap;
        if (tmp6 === _mod1306.WireType.LengthDelimited) {
          let sum1 = pos.int32() + pos.pos;
          if (pos.pos < sum1) {
            do {
              let userIds = obj.userIds;
              let str5 = pos.fixed64();
              let arr = userIds.push(str5.toString());
              pos = pos.pos;
            } while (pos < sum1);
          }
        } else {
          let userIds1 = obj.userIds;
          let str4 = pos.fixed64();
          arr = userIds1.push(str4.toString());
        }
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
prototype6["internalBinaryWrite"] = function internalBinaryWrite(userIds, tag, writeUnknownFields) {
  let length;
  if (userIds.userIds.length) {
    tag.tag(1, _mod1306.WireType.LengthDelimited).fork();
    let num2 = 0;
    if (0 < userIds.userIds.length) {
      do {
        let fixed64Result = tag.fixed64(userIds.userIds[num2]);
        num2 = num2 + 1;
        length = userIds.userIds.length;
      } while (num2 < length);
    }
    const joined = tag.join();
    const tagResult = tag.tag(1, _mod1306.WireType.LengthDelimited);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = _mod1306.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, userIds, tag);
  }
  return tag;
};
const items4 = [{ no: 1, name: "user_ids", kind: "scalar", repeat: 1, T: 6 }];
const overrideType2 = new Override$Type(
  "discord_protos.discord_experimentation.v1.UserIds",
  items4,
  { "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_USER" },
  tmp5,
  tmp4,
  tmp3,
  "create",
  "internalBinaryRead",
  "internalBinaryWrite",
  tmp2,
  undefined,
);
// ThrowIfThisInitialized (0x7c)
class UserLocale$Type extends MessageType7 {
  constructor() {
    items = [];
    items[0] = { no: 1, name: "locales", kind: "scalar", repeat: 2, T: 9 };
    tmp = new tmp(
      "discord_protos.discord_experimentation.v1.UserLocale",
      items,
      { "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_USER" },
      new.target,
    );
    // ThrowIfThisInitialized (0x7c)
    return tmp;
  }
}
const prototype7 = UserLocale$Type.prototype;
prototype7["create"] = function create(arr) {
  obj = { locales: [] };
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
        let locales = obj.locales;
        let arr = locales.push(pos.string());
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
prototype7["internalBinaryWrite"] = function internalBinaryWrite(locales, tag, writeUnknownFields) {
  let length;
  let num = 0;
  if (0 < locales.locales.length) {
    do {
      let tmp = require;
      let tmp2 = dependencyMap;
      let tagResult = tag.tag(1, _mod1306.WireType.LengthDelimited);
      let stringResult = tagResult.string(locales.locales[num]);
      num = num + 1;
      length = locales.locales.length;
    } while (num < length);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = _mod1306.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, locales, tag);
  }
  return tag;
};
const items5 = [{ no: 1, name: "locales", kind: "scalar", repeat: 2, T: 9 }];
const overrideType3 = new Override$Type(
  "discord_protos.discord_experimentation.v1.UserLocale",
  items5,
  { "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_USER" },
  tmp5,
  tmp4,
  tmp3,
  "create",
  "internalBinaryRead",
  "internalBinaryWrite",
  tmp2,
  undefined,
);
// ThrowIfThisInitialized (0x7c)
class ClientLocale$Type extends MessageType8 {
  constructor() {
    items = [];
    items[0] = { no: 1, name: "locales", kind: "scalar", repeat: 2, T: 9 };
    tmp = new tmp(
      "discord_protos.discord_experimentation.v1.ClientLocale",
      items,
      { "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_CLIENT" },
      new.target,
    );
    // ThrowIfThisInitialized (0x7c)
    return tmp;
  }
}
const prototype8 = ClientLocale$Type.prototype;
prototype8["create"] = function create(arr) {
  obj = { locales: [] };
  const _Object = Object;
  obj = { enumerable: false, value: this };
  _Object.defineProperty(obj, _mod1306.MESSAGE_TYPE, obj);
  if (undefined !== arr) {
    const result = _mod1306.reflectionMergePartial(this, obj, arr);
    const tmpResult = _mod1306;
  }
  return obj;
};
prototype8["internalBinaryRead"] = function internalBinaryRead(pos, arg1, readUnknownField) {
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
        let locales = obj.locales;
        let arr = locales.push(pos.string());
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
prototype8["internalBinaryWrite"] = function internalBinaryWrite(locales, tag, writeUnknownFields) {
  let length;
  let num = 0;
  if (0 < locales.locales.length) {
    do {
      let tmp = require;
      let tmp2 = dependencyMap;
      let tagResult = tag.tag(1, _mod1306.WireType.LengthDelimited);
      let stringResult = tagResult.string(locales.locales[num]);
      num = num + 1;
      length = locales.locales.length;
    } while (num < length);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = _mod1306.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, locales, tag);
  }
  return tag;
};
const items6 = [{ no: 1, name: "locales", kind: "scalar", repeat: 2, T: 9 }];
const overrideType4 = new Override$Type(
  "discord_protos.discord_experimentation.v1.ClientLocale",
  items6,
  { "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_CLIENT" },
  tmp5,
  tmp4,
  tmp3,
  "create",
  "internalBinaryRead",
  "internalBinaryWrite",
  tmp2,
  undefined,
);
// ThrowIfThisInitialized (0x7c)
class ClientSystemLocale$Type extends MessageType9 {
  constructor() {
    items = [];
    items[0] = { no: 1, name: "locales", kind: "scalar", repeat: 2, T: 9 };
    tmp = new tmp(
      "discord_protos.discord_experimentation.v1.ClientSystemLocale",
      items,
      { "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_CLIENT" },
      new.target,
    );
    // ThrowIfThisInitialized (0x7c)
    return tmp;
  }
}
const prototype9 = ClientSystemLocale$Type.prototype;
prototype9["create"] = function create(arr) {
  obj = { locales: [] };
  const _Object = Object;
  obj = { enumerable: false, value: this };
  _Object.defineProperty(obj, _mod1306.MESSAGE_TYPE, obj);
  if (undefined !== arr) {
    const result = _mod1306.reflectionMergePartial(this, obj, arr);
    const tmpResult = _mod1306;
  }
  return obj;
};
prototype9["internalBinaryRead"] = function internalBinaryRead(pos, arg1, readUnknownField) {
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
        let locales = obj.locales;
        let arr = locales.push(pos.string());
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
prototype9["internalBinaryWrite"] = function internalBinaryWrite(locales, tag, writeUnknownFields) {
  let length;
  let num = 0;
  if (0 < locales.locales.length) {
    do {
      let tmp = require;
      let tmp2 = dependencyMap;
      let tagResult = tag.tag(1, _mod1306.WireType.LengthDelimited);
      let stringResult = tagResult.string(locales.locales[num]);
      num = num + 1;
      length = locales.locales.length;
    } while (num < length);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = _mod1306.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, locales, tag);
  }
  return tag;
};
const items7 = [{ no: 1, name: "locales", kind: "scalar", repeat: 2, T: 9 }];
const overrideType5 = new Override$Type(
  "discord_protos.discord_experimentation.v1.ClientSystemLocale",
  items7,
  { "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_CLIENT" },
  tmp5,
  tmp4,
  tmp3,
  "create",
  "internalBinaryRead",
  "internalBinaryWrite",
  tmp2,
  undefined,
);
// ThrowIfThisInitialized (0x7c)
class ClientLocation$Type extends MessageType10 {
  constructor() {
    obj = {
      no: 1,
      name: "locations",
      kind: "message",
      repeat: 1,
      T() {
        return closure_16;
      },
    };
    items = [];
    items[0] = obj;
    tmp = new tmp(
      "discord_protos.discord_experimentation.v1.ClientLocation",
      items,
      { "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_CLIENT" },
      new.target,
    );
    // ThrowIfThisInitialized (0x7c)
    return tmp;
  }
}
const prototype10 = ClientLocation$Type.prototype;
prototype10["create"] = function create(arr) {
  obj = { locations: [] };
  const _Object = Object;
  obj = { enumerable: false, value: this };
  _Object.defineProperty(obj, _mod1306.MESSAGE_TYPE, obj);
  if (undefined !== arr) {
    const result = _mod1306.reflectionMergePartial(this, obj, arr);
    const tmpResult = _mod1306;
  }
  return obj;
};
prototype10["internalBinaryRead"] = function internalBinaryRead(pos, arg1, readUnknownField) {
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
        let locations = obj.locations;
        let tmp22 = items82;
        let arr = locations.push(items82.internalBinaryRead(pos, pos.uint32(), readUnknownField));
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
prototype10["internalBinaryWrite"] = function internalBinaryWrite(locations, tag, writeUnknownFields) {
  let length;
  let num = 0;
  if (0 < locations.locations.length) {
    do {
      let tmp = items82;
      let tmp2 = require;
      let tmp3 = dependencyMap;
      let tagResult = tag.tag(1, _mod1306.WireType.LengthDelimited);
      let internalBinaryWriteResult = items82.internalBinaryWrite(
        locations.locations[num],
        tagResult.fork(),
        writeUnknownFields,
      );
      let joined = internalBinaryWriteResult.join();
      num = num + 1;
      length = locations.locations.length;
    } while (num < length);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = _mod1306.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, locations, tag);
  }
  return tag;
};
let items8 = [
  {
    no: 1,
    name: "locations",
    kind: "message",
    repeat: 1,
    T() {
      return closure_16;
    },
  },
];
const obj4 = { "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_CLIENT" };
const overrideType6 = new Override$Type(
  "discord_protos.discord_experimentation.v1.ClientLocation",
  items8,
  obj4,
  tmp5,
  tmp4,
  tmp3,
  "create",
  "internalBinaryRead",
  "internalBinaryWrite",
  tmp2,
  undefined,
);
// ThrowIfThisInitialized (0x7c)
class ClientLocation_Place$Type extends MessageType11 {
  constructor() {
    items = [, ,];
    items[0] = { no: 1, name: "city", kind: "scalar", T: 9 };
    items[1] = { no: 2, name: "subdivision", kind: "scalar", T: 9 };
    items[2] = { no: 3, name: "country", kind: "scalar", T: 9 };
    tmp = new tmp("discord_protos.discord_experimentation.v1.ClientLocation.Place", items, new.target);
    // ThrowIfThisInitialized (0x7c)
    return tmp;
  }
}
const prototype11 = ClientLocation_Place$Type.prototype;
prototype11["create"] = function create(arr) {
  obj = { city: "", subdivision: "", country: "" };
  const _Object = Object;
  obj = { enumerable: false, value: this };
  _Object.defineProperty(obj, _mod1306.MESSAGE_TYPE, obj);
  if (undefined !== arr) {
    const result = _mod1306.reflectionMergePartial(this, obj, arr);
    const tmpResult = _mod1306;
  }
  return obj;
};
prototype11["internalBinaryRead"] = function internalBinaryRead(pos, arg1, readUnknownField) {
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
        obj.city = pos.string();
      } else if (2 === tmp5) {
        obj.subdivision = pos.string();
      } else if (3 === tmp5) {
        obj.country = pos.string();
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
prototype11["internalBinaryWrite"] = function internalBinaryWrite(city, tag, writeUnknownFields) {
  if ("" !== city.city) {
    tag.tag(1, _mod1306.WireType.LengthDelimited).string(city.city);
    const tagResult = tag.tag(1, _mod1306.WireType.LengthDelimited);
  }
  if ("" !== city.subdivision) {
    tag.tag(2, _mod1306.WireType.LengthDelimited).string(city.subdivision);
    const tagResult1 = tag.tag(2, _mod1306.WireType.LengthDelimited);
  }
  if ("" !== city.country) {
    tag.tag(3, _mod1306.WireType.LengthDelimited).string(city.country);
    const tagResult2 = tag.tag(3, _mod1306.WireType.LengthDelimited);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = _mod1306.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, city, tag);
  }
  return tag;
};
const items9 = [
  { no: 1, name: "city", kind: "scalar", T: 9 },
  { no: 2, name: "subdivision", kind: "scalar", T: 9 },
  { no: 3, name: "country", kind: "scalar", T: 9 },
];
items8 = new items8(
  "discord_protos.discord_experimentation.v1.ClientLocation.Place",
  items9,
  obj4,
  tmp5,
  tmp4,
  tmp3,
  "create",
  "internalBinaryRead",
  "internalBinaryWrite",
  tmp2,
);
// ThrowIfThisInitialized (0x7c)
class ClientLocation_ISORegion$Type extends MessageType12 {
  constructor() {
    items = [,];
    items[0] = { no: 1, name: "iso_country", kind: "scalar", T: 9 };
    items[1] = { no: 2, name: "iso_subdivision", kind: "scalar", T: 9 };
    tmp = new tmp("discord_protos.discord_experimentation.v1.ClientLocation.ISORegion", items, new.target);
    // ThrowIfThisInitialized (0x7c)
    return tmp;
  }
}
const prototype12 = ClientLocation_ISORegion$Type.prototype;
prototype12["create"] = function create(arr) {
  obj = { isoCountry: "", isoSubdivision: "" };
  const _Object = Object;
  obj = { enumerable: false, value: this };
  _Object.defineProperty(obj, _mod1306.MESSAGE_TYPE, obj);
  if (undefined !== arr) {
    const result = _mod1306.reflectionMergePartial(this, obj, arr);
    const tmpResult = _mod1306;
  }
  return obj;
};
prototype12["internalBinaryRead"] = function internalBinaryRead(pos, arg1, readUnknownField) {
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
        obj.isoCountry = pos.string();
      } else if (2 === tmp5) {
        obj.isoSubdivision = pos.string();
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
prototype12["internalBinaryWrite"] = function internalBinaryWrite(isoCountry, tag, writeUnknownFields) {
  if ("" !== isoCountry.isoCountry) {
    tag.tag(1, _mod1306.WireType.LengthDelimited).string(isoCountry.isoCountry);
    const tagResult = tag.tag(1, _mod1306.WireType.LengthDelimited);
  }
  if ("" !== isoCountry.isoSubdivision) {
    tag.tag(2, _mod1306.WireType.LengthDelimited).string(isoCountry.isoSubdivision);
    const tagResult1 = tag.tag(2, _mod1306.WireType.LengthDelimited);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = _mod1306.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, isoCountry, tag);
  }
  return tag;
};
const items10 = [
  { no: 1, name: "iso_country", kind: "scalar", T: 9 },
  { no: 2, name: "iso_subdivision", kind: "scalar", T: 9 },
];
const items81 = new items8(
  "discord_protos.discord_experimentation.v1.ClientLocation.ISORegion",
  items10,
  obj4,
  tmp5,
  tmp4,
  tmp3,
  "create",
  "internalBinaryRead",
  "internalBinaryWrite",
  tmp2,
);
// ThrowIfThisInitialized (0x7c)
class ClientLocation_Location$Type extends MessageType13 {
  constructor() {
    obj = {
      no: 1,
      name: "iso_region",
      kind: "message",
      oneof: "location",
      T() {
        return closure_15;
      },
    };
    items = [, ,];
    items[0] = obj;
    items[1] = { no: 2, name: "is_eu", kind: "scalar", oneof: "location", T: 8 };
    items[2] = {
      no: 3,
      name: "place",
      kind: "message",
      oneof: "location",
      T() {
        return closure_14;
      },
    };
    tmp = new tmp("discord_protos.discord_experimentation.v1.ClientLocation.Location", items, new.target);
    // ThrowIfThisInitialized (0x7c)
    return tmp;
  }
}
const prototype13 = ClientLocation_Location$Type.prototype;
prototype13["create"] = function create(arr) {
  obj = { location: { oneofKind: "Array" } };
  const _Object = Object;
  obj = { enumerable: false, value: this };
  _Object.defineProperty(obj, _mod1306.MESSAGE_TYPE, obj);
  if (undefined !== arr) {
    const result = _mod1306.reflectionMergePartial(this, obj, arr);
    const tmpResult = _mod1306;
  }
  return obj;
};
prototype13["internalBinaryRead"] = function internalBinaryRead(pos, arg1, readUnknownField) {
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
        obj = { oneofKind: "isoRegion", isoRegion: null };
        let tmp26 = items81;
        let tmp27 = items81;
        let tmp28 = pos;
        let tmp29 = readUnknownField;
        obj[1] = items81.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.location.isoRegion);
        obj.location = obj;
      } else if (2 === tmp5) {
        obj1 = { oneofKind: "isEu", isEu: null };
        obj1[1] = pos.bool();
        obj.location = obj1;
      } else if (3 === tmp5) {
        obj = { oneofKind: "place", place: null };
        let tmp22 = items8;
        let tmp23 = items8;
        let tmp24 = pos;
        let tmp25 = readUnknownField;
        obj[1] = items8.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.location.place);
        obj.location = obj;
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
prototype13["internalBinaryWrite"] = function internalBinaryWrite(location, tag, writeUnknownFields) {
  if ("isoRegion" === location.location.oneofKind) {
    const tagResult = tag.tag(1, _mod1306.WireType.LengthDelimited);
    const joined = items81
      .internalBinaryWrite(
        location.location.isoRegion,
        tag.tag(1, _mod1306.WireType.LengthDelimited).fork(),
        writeUnknownFields,
      )
      .join();
    const internalBinaryWriteResult = items81.internalBinaryWrite(
      location.location.isoRegion,
      tag.tag(1, _mod1306.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    );
  }
  if ("isEu" === location.location.oneofKind) {
    tag.tag(2, _mod1306.WireType.Varint).bool(location.location.isEu);
    const tagResult1 = tag.tag(2, _mod1306.WireType.Varint);
  }
  if ("place" === location.location.oneofKind) {
    const tagResult2 = tag.tag(3, _mod1306.WireType.LengthDelimited);
    const joined1 = items8
      .internalBinaryWrite(
        location.location.place,
        tag.tag(3, _mod1306.WireType.LengthDelimited).fork(),
        writeUnknownFields,
      )
      .join();
    const internalBinaryWriteResult1 = items8.internalBinaryWrite(
      location.location.place,
      tag.tag(3, _mod1306.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    );
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = _mod1306.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, location, tag);
  }
  return tag;
};
const items11 = [
  {
    no: 1,
    name: "iso_region",
    kind: "message",
    oneof: "location",
    T() {
      return closure_15;
    },
  },
  { no: 2, name: "is_eu", kind: "scalar", oneof: "location", T: 8 },
  {
    no: 3,
    name: "place",
    kind: "message",
    oneof: "location",
    T() {
      return closure_14;
    },
  },
];
const items82 = new items8(
  "discord_protos.discord_experimentation.v1.ClientLocation.Location",
  items11,
  obj4,
  tmp5,
  tmp4,
  tmp3,
  "create",
  "internalBinaryRead",
  "internalBinaryWrite",
  tmp2,
);
// ThrowIfThisInitialized (0x7c)
class UserLocation$Type extends MessageType14 {
  constructor() {
    obj = {
      no: 1,
      name: "locations",
      kind: "message",
      repeat: 1,
      T() {
        return closure_16;
      },
    };
    items = [,];
    items[0] = obj;
    items[1] = { no: 2, name: "prefer_client_ip", kind: "scalar", T: 8 };
    tmp = new tmp(
      "discord_protos.discord_experimentation.v1.UserLocation",
      items,
      { "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_USER" },
      new.target,
    );
    // ThrowIfThisInitialized (0x7c)
    return tmp;
  }
}
const prototype14 = UserLocation$Type.prototype;
prototype14["create"] = function create(arr) {
  obj = { locations: [], preferClientIp: false };
  const _Object = Object;
  obj = { enumerable: false, value: this };
  _Object.defineProperty(obj, _mod1306.MESSAGE_TYPE, obj);
  if (undefined !== arr) {
    const result = _mod1306.reflectionMergePartial(this, obj, arr);
    const tmpResult = _mod1306;
  }
  return obj;
};
prototype14["internalBinaryRead"] = function internalBinaryRead(pos, arg1, readUnknownField) {
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
        let locations = obj.locations;
        let tmp22 = items82;
        let arr = locations.push(items82.internalBinaryRead(pos, pos.uint32(), readUnknownField));
      } else if (2 === tmp5) {
        obj.preferClientIp = pos.bool();
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
prototype14["internalBinaryWrite"] = function internalBinaryWrite(locations, tag, writeUnknownFields) {
  let length;
  let num = 0;
  if (0 < locations.locations.length) {
    do {
      let tmp = items82;
      let tmp2 = require;
      let tmp3 = dependencyMap;
      let tagResult = tag.tag(1, _mod1306.WireType.LengthDelimited);
      let internalBinaryWriteResult = items82.internalBinaryWrite(
        locations.locations[num],
        tagResult.fork(),
        writeUnknownFields,
      );
      let joined = internalBinaryWriteResult.join();
      num = num + 1;
      length = locations.locations.length;
    } while (num < length);
  }
  if (false !== locations.preferClientIp) {
    tag.tag(2, _mod1306.WireType.Varint).bool(locations.preferClientIp);
    const tagResult1 = tag.tag(2, _mod1306.WireType.Varint);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = _mod1306.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, locations, tag);
  }
  return tag;
};
const items12 = [
  {
    no: 1,
    name: "locations",
    kind: "message",
    repeat: 1,
    T() {
      return closure_16;
    },
  },
  { no: 2, name: "prefer_client_ip", kind: "scalar", T: 8 },
];
const clientLocation_LocationType = new ClientLocation_Location$Type(
  "discord_protos.discord_experimentation.v1.UserLocation",
  items12,
  { "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_USER" },
  tmp5,
  tmp4,
  tmp3,
  "create",
  "internalBinaryRead",
  "internalBinaryWrite",
  tmp2,
  undefined,
);
// ThrowIfThisInitialized (0x7c)
class UserStoreCountry$Type extends MessageType15 {
  constructor() {
    items = [];
    items[0] = { no: 1, name: "iso_countries", kind: "scalar", repeat: 2, T: 9 };
    tmp = new tmp(
      "discord_protos.discord_experimentation.v1.UserStoreCountry",
      items,
      { "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_USER" },
      new.target,
    );
    // ThrowIfThisInitialized (0x7c)
    return tmp;
  }
}
const prototype15 = UserStoreCountry$Type.prototype;
prototype15["create"] = function create(arr) {
  obj = { isoCountries: [] };
  const _Object = Object;
  obj = { enumerable: false, value: this };
  _Object.defineProperty(obj, _mod1306.MESSAGE_TYPE, obj);
  if (undefined !== arr) {
    const result = _mod1306.reflectionMergePartial(this, obj, arr);
    const tmpResult = _mod1306;
  }
  return obj;
};
prototype15["internalBinaryRead"] = function internalBinaryRead(pos, arg1, readUnknownField) {
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
        let isoCountries = obj.isoCountries;
        let arr = isoCountries.push(pos.string());
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
prototype15["internalBinaryWrite"] = function internalBinaryWrite(isoCountries, tag, writeUnknownFields) {
  let length;
  let num = 0;
  if (0 < isoCountries.isoCountries.length) {
    do {
      let tmp = require;
      let tmp2 = dependencyMap;
      let tagResult = tag.tag(1, _mod1306.WireType.LengthDelimited);
      let stringResult = tagResult.string(isoCountries.isoCountries[num]);
      num = num + 1;
      length = isoCountries.isoCountries.length;
    } while (num < length);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = _mod1306.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, isoCountries, tag);
  }
  return tag;
};
const items13 = [{ no: 1, name: "iso_countries", kind: "scalar", repeat: 2, T: 9 }];
const clientLocation_LocationType1 = new ClientLocation_Location$Type(
  "discord_protos.discord_experimentation.v1.UserStoreCountry",
  items13,
  { "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_USER" },
  tmp5,
  tmp4,
  tmp3,
  "create",
  "internalBinaryRead",
  "internalBinaryWrite",
  tmp2,
  undefined,
);
// ThrowIfThisInitialized (0x7c)
class ClientIP$Type extends MessageType16 {
  constructor() {
    items = [];
    items[0] = { no: 1, name: "blocks", kind: "scalar", repeat: 2, T: 9 };
    tmp = new tmp(
      "discord_protos.discord_experimentation.v1.ClientIP",
      items,
      { "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_CLIENT" },
      new.target,
    );
    // ThrowIfThisInitialized (0x7c)
    return tmp;
  }
}
const prototype16 = ClientIP$Type.prototype;
prototype16["create"] = function create(arr) {
  obj = { blocks: [] };
  const _Object = Object;
  obj = { enumerable: false, value: this };
  _Object.defineProperty(obj, _mod1306.MESSAGE_TYPE, obj);
  if (undefined !== arr) {
    const result = _mod1306.reflectionMergePartial(this, obj, arr);
    const tmpResult = _mod1306;
  }
  return obj;
};
prototype16["internalBinaryRead"] = function internalBinaryRead(pos, arg1, readUnknownField) {
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
        let blocks = obj.blocks;
        let arr = blocks.push(pos.string());
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
prototype16["internalBinaryWrite"] = function internalBinaryWrite(blocks, tag, writeUnknownFields) {
  let length;
  let num = 0;
  if (0 < blocks.blocks.length) {
    do {
      let tmp = require;
      let tmp2 = dependencyMap;
      let tagResult = tag.tag(1, _mod1306.WireType.LengthDelimited);
      let stringResult = tagResult.string(blocks.blocks[num]);
      num = num + 1;
      length = blocks.blocks.length;
    } while (num < length);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = _mod1306.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, blocks, tag);
  }
  return tag;
};
const items14 = [{ no: 1, name: "blocks", kind: "scalar", repeat: 2, T: 9 }];
const clientLocation_LocationType2 = new ClientLocation_Location$Type(
  "discord_protos.discord_experimentation.v1.ClientIP",
  items14,
  { "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_CLIENT" },
  tmp5,
  tmp4,
  tmp3,
  "create",
  "internalBinaryRead",
  "internalBinaryWrite",
  tmp2,
  undefined,
);
// ThrowIfThisInitialized (0x7c)
class UserIP$Type extends MessageType17 {
  constructor() {
    items = [,];
    items[0] = { no: 1, name: "blocks", kind: "scalar", repeat: 2, T: 9 };
    items[1] = { no: 2, name: "prefer_client_ip", kind: "scalar", T: 8 };
    tmp = new tmp(
      "discord_protos.discord_experimentation.v1.UserIP",
      items,
      { "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_USER" },
      new.target,
    );
    // ThrowIfThisInitialized (0x7c)
    return tmp;
  }
}
const prototype17 = UserIP$Type.prototype;
prototype17["create"] = function create(arr) {
  obj = { blocks: [], preferClientIp: false };
  const _Object = Object;
  obj = { enumerable: false, value: this };
  _Object.defineProperty(obj, _mod1306.MESSAGE_TYPE, obj);
  if (undefined !== arr) {
    const result = _mod1306.reflectionMergePartial(this, obj, arr);
    const tmpResult = _mod1306;
  }
  return obj;
};
prototype17["internalBinaryRead"] = function internalBinaryRead(pos, arg1, readUnknownField) {
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
        let blocks = obj.blocks;
        let arr = blocks.push(pos.string());
      } else if (2 === tmp5) {
        obj.preferClientIp = pos.bool();
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
prototype17["internalBinaryWrite"] = function internalBinaryWrite(blocks, tag, writeUnknownFields) {
  let length;
  let num = 0;
  if (0 < blocks.blocks.length) {
    do {
      let tmp = require;
      let tmp2 = dependencyMap;
      let tagResult = tag.tag(1, _mod1306.WireType.LengthDelimited);
      let stringResult = tagResult.string(blocks.blocks[num]);
      num = num + 1;
      length = blocks.blocks.length;
    } while (num < length);
  }
  if (false !== blocks.preferClientIp) {
    tag.tag(2, _mod1306.WireType.Varint).bool(blocks.preferClientIp);
    const tagResult1 = tag.tag(2, _mod1306.WireType.Varint);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = _mod1306.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, blocks, tag);
  }
  return tag;
};
const items15 = [
  { no: 1, name: "blocks", kind: "scalar", repeat: 2, T: 9 },
  { no: 2, name: "prefer_client_ip", kind: "scalar", T: 8 },
];
const clientLocation_LocationType3 = new ClientLocation_Location$Type(
  "discord_protos.discord_experimentation.v1.UserIP",
  items15,
  { "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_USER" },
  tmp5,
  tmp4,
  tmp3,
  "create",
  "internalBinaryRead",
  "internalBinaryWrite",
  tmp2,
  undefined,
);
// ThrowIfThisInitialized (0x7c)
class ClientOperatingSystem$Type extends MessageType18 {
  constructor() {
    obj = {
      no: 1,
      name: "ios_version",
      kind: "message",
      T() {
        return closure_22;
      },
    };
    items = [, , , , , ,];
    items[0] = obj;
    items[1] = {
      no: 2,
      name: "android_version",
      kind: "message",
      T() {
        return closure_22;
      },
    };
    items[2] = {
      no: 3,
      name: "macos_version",
      kind: "message",
      T() {
        return closure_22;
      },
    };
    items[3] = {
      no: 4,
      name: "windows_version",
      kind: "message",
      T() {
        return closure_22;
      },
    };
    items[4] = {
      no: 5,
      name: "playstation_version",
      kind: "message",
      T() {
        return closure_22;
      },
    };
    items[5] = {
      no: 6,
      name: "xbox_version",
      kind: "message",
      T() {
        return closure_22;
      },
    };
    items[6] = {
      no: 7,
      name: "linux_version",
      kind: "message",
      T() {
        return closure_22;
      },
    };
    tmp = new tmp(
      "discord_protos.discord_experimentation.v1.ClientOperatingSystem",
      items,
      { "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_CLIENT" },
      new.target,
    );
    // ThrowIfThisInitialized (0x7c)
    return tmp;
  }
}
const prototype18 = ClientOperatingSystem$Type.prototype;
prototype18["create"] = function create(arr) {
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
prototype18["internalBinaryRead"] = function internalBinaryRead(pos, arg1, readUnknownField) {
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
        let tmp46 = items16;
        let tmp47 = items16;
        let tmp48 = pos;
        let tmp49 = readUnknownField;
        obj.iosVersion = items16.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.iosVersion);
      } else if (2 === tmp5) {
        let tmp42 = items16;
        let tmp43 = items16;
        let tmp44 = pos;
        let tmp45 = readUnknownField;
        obj.androidVersion = items16.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.androidVersion);
      } else if (3 === tmp5) {
        let tmp38 = items16;
        let tmp39 = items16;
        let tmp40 = pos;
        let tmp41 = readUnknownField;
        obj.macosVersion = items16.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.macosVersion);
      } else if (4 === tmp5) {
        let tmp34 = items16;
        let tmp35 = items16;
        let tmp36 = pos;
        let tmp37 = readUnknownField;
        obj.windowsVersion = items16.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.windowsVersion);
      } else if (5 === tmp5) {
        let tmp30 = items16;
        let tmp31 = items16;
        let tmp32 = pos;
        let tmp33 = readUnknownField;
        obj.playstationVersion = items16.internalBinaryRead(
          pos,
          pos.uint32(),
          readUnknownField,
          obj.playstationVersion,
        );
      } else if (6 === tmp5) {
        let tmp26 = items16;
        let tmp27 = items16;
        let tmp28 = pos;
        let tmp29 = readUnknownField;
        obj.xboxVersion = items16.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.xboxVersion);
      } else if (7 === tmp5) {
        let tmp22 = items16;
        let tmp23 = items16;
        let tmp24 = pos;
        let tmp25 = readUnknownField;
        obj.linuxVersion = items16.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.linuxVersion);
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
prototype18["internalBinaryWrite"] = function internalBinaryWrite(iosVersion, tag, writeUnknownFields) {
  if (iosVersion.iosVersion) {
    const tagResult = tag.tag(1, _mod1306.WireType.LengthDelimited);
    const joined = items16
      .internalBinaryWrite(
        iosVersion.iosVersion,
        tag.tag(1, _mod1306.WireType.LengthDelimited).fork(),
        writeUnknownFields,
      )
      .join();
    const internalBinaryWriteResult = items16.internalBinaryWrite(
      iosVersion.iosVersion,
      tag.tag(1, _mod1306.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    );
  }
  if (iosVersion.androidVersion) {
    const tagResult1 = tag.tag(2, _mod1306.WireType.LengthDelimited);
    const joined1 = items16
      .internalBinaryWrite(
        iosVersion.androidVersion,
        tag.tag(2, _mod1306.WireType.LengthDelimited).fork(),
        writeUnknownFields,
      )
      .join();
    const internalBinaryWriteResult1 = items16.internalBinaryWrite(
      iosVersion.androidVersion,
      tag.tag(2, _mod1306.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    );
  }
  if (iosVersion.macosVersion) {
    const tagResult2 = tag.tag(3, _mod1306.WireType.LengthDelimited);
    const joined2 = items16
      .internalBinaryWrite(
        iosVersion.macosVersion,
        tag.tag(3, _mod1306.WireType.LengthDelimited).fork(),
        writeUnknownFields,
      )
      .join();
    const internalBinaryWriteResult2 = items16.internalBinaryWrite(
      iosVersion.macosVersion,
      tag.tag(3, _mod1306.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    );
  }
  if (iosVersion.windowsVersion) {
    const tagResult3 = tag.tag(4, _mod1306.WireType.LengthDelimited);
    const joined3 = items16
      .internalBinaryWrite(
        iosVersion.windowsVersion,
        tag.tag(4, _mod1306.WireType.LengthDelimited).fork(),
        writeUnknownFields,
      )
      .join();
    const internalBinaryWriteResult3 = items16.internalBinaryWrite(
      iosVersion.windowsVersion,
      tag.tag(4, _mod1306.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    );
  }
  if (iosVersion.playstationVersion) {
    const tagResult4 = tag.tag(5, _mod1306.WireType.LengthDelimited);
    const joined4 = items16
      .internalBinaryWrite(
        iosVersion.playstationVersion,
        tag.tag(5, _mod1306.WireType.LengthDelimited).fork(),
        writeUnknownFields,
      )
      .join();
    const internalBinaryWriteResult4 = items16.internalBinaryWrite(
      iosVersion.playstationVersion,
      tag.tag(5, _mod1306.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    );
  }
  if (iosVersion.xboxVersion) {
    const tagResult5 = tag.tag(6, _mod1306.WireType.LengthDelimited);
    const joined5 = items16
      .internalBinaryWrite(
        iosVersion.xboxVersion,
        tag.tag(6, _mod1306.WireType.LengthDelimited).fork(),
        writeUnknownFields,
      )
      .join();
    const internalBinaryWriteResult5 = items16.internalBinaryWrite(
      iosVersion.xboxVersion,
      tag.tag(6, _mod1306.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    );
  }
  if (iosVersion.linuxVersion) {
    const tagResult6 = tag.tag(7, _mod1306.WireType.LengthDelimited);
    const joined6 = items16
      .internalBinaryWrite(
        iosVersion.linuxVersion,
        tag.tag(7, _mod1306.WireType.LengthDelimited).fork(),
        writeUnknownFields,
      )
      .join();
    const internalBinaryWriteResult6 = items16.internalBinaryWrite(
      iosVersion.linuxVersion,
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
    onWrite(this.typeName, iosVersion, tag);
  }
  return tag;
};
let items16 = [
  {
    no: 1,
    name: "ios_version",
    kind: "message",
    T() {
      return closure_22;
    },
  },
  {
    no: 2,
    name: "android_version",
    kind: "message",
    T() {
      return closure_22;
    },
  },
  {
    no: 3,
    name: "macos_version",
    kind: "message",
    T() {
      return closure_22;
    },
  },
  {
    no: 4,
    name: "windows_version",
    kind: "message",
    T() {
      return closure_22;
    },
  },
  {
    no: 5,
    name: "playstation_version",
    kind: "message",
    T() {
      return closure_22;
    },
  },
  {
    no: 6,
    name: "xbox_version",
    kind: "message",
    T() {
      return closure_22;
    },
  },
  {
    no: 7,
    name: "linux_version",
    kind: "message",
    T() {
      return closure_22;
    },
  },
];
const obj8 = { "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_CLIENT" };
const clientLocation_LocationType4 = new ClientLocation_Location$Type(
  "discord_protos.discord_experimentation.v1.ClientOperatingSystem",
  items16,
  obj8,
  tmp5,
  tmp4,
  tmp3,
  "create",
  "internalBinaryRead",
  "internalBinaryWrite",
  tmp2,
  undefined,
);
// ThrowIfThisInitialized (0x7c)
class SDKVersion$Type extends MessageType19 {
  constructor() {
    obj = {
      no: 1,
      name: "ranges",
      kind: "message",
      repeat: 1,
      T() {
        return closure_23;
      },
    };
    items = [,];
    items[0] = obj;
    items[1] = { no: 2, name: "work_around_pyoto_bug", kind: "scalar", T: 8 };
    tmp = new tmp("discord_protos.discord_experimentation.v1.SDKVersion", items, new.target);
    // ThrowIfThisInitialized (0x7c)
    return tmp;
  }
}
const prototype19 = SDKVersion$Type.prototype;
prototype19["create"] = function create(arr) {
  obj = { ranges: [], workAroundPyotoBug: false };
  const _Object = Object;
  obj = { enumerable: false, value: this };
  _Object.defineProperty(obj, _mod1306.MESSAGE_TYPE, obj);
  if (undefined !== arr) {
    const result = _mod1306.reflectionMergePartial(this, obj, arr);
    const tmpResult = _mod1306;
  }
  return obj;
};
prototype19["internalBinaryRead"] = function internalBinaryRead(pos, arg1, readUnknownField) {
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
        let ranges = obj.ranges;
        let tmp22 = items161;
        let arr = ranges.push(items161.internalBinaryRead(pos, pos.uint32(), readUnknownField));
      } else if (2 === tmp5) {
        obj.workAroundPyotoBug = pos.bool();
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
prototype19["internalBinaryWrite"] = function internalBinaryWrite(ranges, tag, writeUnknownFields) {
  let length;
  let num = 0;
  if (0 < ranges.ranges.length) {
    do {
      let tmp = items161;
      let tmp2 = require;
      let tmp3 = dependencyMap;
      let tagResult = tag.tag(1, _mod1306.WireType.LengthDelimited);
      let internalBinaryWriteResult = items161.internalBinaryWrite(
        ranges.ranges[num],
        tagResult.fork(),
        writeUnknownFields,
      );
      let joined = internalBinaryWriteResult.join();
      num = num + 1;
      length = ranges.ranges.length;
    } while (num < length);
  }
  if (false !== ranges.workAroundPyotoBug) {
    tag.tag(2, _mod1306.WireType.Varint).bool(ranges.workAroundPyotoBug);
    const tagResult1 = tag.tag(2, _mod1306.WireType.Varint);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = _mod1306.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, ranges, tag);
  }
  return tag;
};
const items17 = [
  {
    no: 1,
    name: "ranges",
    kind: "message",
    repeat: 1,
    T() {
      return closure_23;
    },
  },
  { no: 2, name: "work_around_pyoto_bug", kind: "scalar", T: 8 },
];
items16 = new items16(
  "discord_protos.discord_experimentation.v1.SDKVersion",
  items17,
  obj8,
  tmp5,
  tmp4,
  tmp3,
  "create",
  "internalBinaryRead",
  "internalBinaryWrite",
  tmp2,
);
// ThrowIfThisInitialized (0x7c)
class SDKVersionRange$Type extends MessageType20 {
  constructor() {
    obj = {
      no: 1,
      name: "lower_bound",
      kind: "message",
      T() {
        return closure_24;
      },
    };
    items = [,];
    items[0] = obj;
    items[1] = {
      no: 2,
      name: "upper_bound",
      kind: "message",
      T() {
        return closure_24;
      },
    };
    tmp = new tmp("discord_protos.discord_experimentation.v1.SDKVersionRange", items, new.target);
    // ThrowIfThisInitialized (0x7c)
    return tmp;
  }
}
const prototype20 = SDKVersionRange$Type.prototype;
prototype20["create"] = function create(arr) {
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
prototype20["internalBinaryRead"] = function internalBinaryRead(pos, arg1, readUnknownField) {
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
        let tmp26 = items162;
        let tmp27 = items162;
        let tmp28 = pos;
        let tmp29 = readUnknownField;
        obj.lowerBound = items162.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.lowerBound);
      } else if (2 === tmp5) {
        let tmp22 = items162;
        let tmp23 = items162;
        let tmp24 = pos;
        let tmp25 = readUnknownField;
        obj.upperBound = items162.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.upperBound);
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
prototype20["internalBinaryWrite"] = function internalBinaryWrite(lowerBound, tag, writeUnknownFields) {
  if (lowerBound.lowerBound) {
    const tagResult = tag.tag(1, _mod1306.WireType.LengthDelimited);
    const joined = items162
      .internalBinaryWrite(
        lowerBound.lowerBound,
        tag.tag(1, _mod1306.WireType.LengthDelimited).fork(),
        writeUnknownFields,
      )
      .join();
    const internalBinaryWriteResult = items162.internalBinaryWrite(
      lowerBound.lowerBound,
      tag.tag(1, _mod1306.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    );
  }
  if (lowerBound.upperBound) {
    const tagResult1 = tag.tag(2, _mod1306.WireType.LengthDelimited);
    const joined1 = items162
      .internalBinaryWrite(
        lowerBound.upperBound,
        tag.tag(2, _mod1306.WireType.LengthDelimited).fork(),
        writeUnknownFields,
      )
      .join();
    const internalBinaryWriteResult1 = items162.internalBinaryWrite(
      lowerBound.upperBound,
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
    onWrite(this.typeName, lowerBound, tag);
  }
  return tag;
};
const items18 = [
  {
    no: 1,
    name: "lower_bound",
    kind: "message",
    T() {
      return closure_24;
    },
  },
  {
    no: 2,
    name: "upper_bound",
    kind: "message",
    T() {
      return closure_24;
    },
  },
];
const items161 = new items16(
  "discord_protos.discord_experimentation.v1.SDKVersionRange",
  items18,
  obj8,
  tmp5,
  tmp4,
  tmp3,
  "create",
  "internalBinaryRead",
  "internalBinaryWrite",
  tmp2,
);
// ThrowIfThisInitialized (0x7c)
class SDKVersionRangeBound$Type extends MessageType21 {
  constructor() {
    obj = {
      no: 1,
      name: "version",
      kind: "message",
      T() {
        return closure_25;
      },
    };
    items = [,];
    items[0] = obj;
    items[1] = { no: 2, name: "inclusive", kind: "scalar", T: 8 };
    tmp = new tmp("discord_protos.discord_experimentation.v1.SDKVersionRangeBound", items, new.target);
    // ThrowIfThisInitialized (0x7c)
    return tmp;
  }
}
const prototype21 = SDKVersionRangeBound$Type.prototype;
prototype21["create"] = function create(arr) {
  obj = { inclusive: false };
  const _Object = Object;
  obj = { enumerable: false, value: this };
  _Object.defineProperty(obj, _mod1306.MESSAGE_TYPE, obj);
  if (undefined !== arr) {
    const result = _mod1306.reflectionMergePartial(this, obj, arr);
    const tmpResult = _mod1306;
  }
  return obj;
};
prototype21["internalBinaryRead"] = function internalBinaryRead(pos, arg1, readUnknownField) {
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
        let tmp22 = items163;
        let tmp23 = items163;
        let tmp24 = pos;
        let tmp25 = readUnknownField;
        obj.version = items163.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.version);
      } else if (2 === tmp5) {
        obj.inclusive = pos.bool();
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
prototype21["internalBinaryWrite"] = function internalBinaryWrite(version, tag, writeUnknownFields) {
  if (version.version) {
    const tagResult = tag.tag(1, _mod1306.WireType.LengthDelimited);
    const joined = items163
      .internalBinaryWrite(version.version, tag.tag(1, _mod1306.WireType.LengthDelimited).fork(), writeUnknownFields)
      .join();
    const internalBinaryWriteResult = items163.internalBinaryWrite(
      version.version,
      tag.tag(1, _mod1306.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    );
  }
  if (false !== version.inclusive) {
    tag.tag(2, _mod1306.WireType.Varint).bool(version.inclusive);
    const tagResult1 = tag.tag(2, _mod1306.WireType.Varint);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = _mod1306.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, version, tag);
  }
  return tag;
};
const items19 = [
  {
    no: 1,
    name: "version",
    kind: "message",
    T() {
      return closure_25;
    },
  },
  { no: 2, name: "inclusive", kind: "scalar", T: 8 },
];
const items162 = new items16(
  "discord_protos.discord_experimentation.v1.SDKVersionRangeBound",
  items19,
  obj8,
  tmp5,
  tmp4,
  tmp3,
  "create",
  "internalBinaryRead",
  "internalBinaryWrite",
  tmp2,
);
// ThrowIfThisInitialized (0x7c)
class SDKVersionSpecifier$Type extends MessageType22 {
  constructor() {
    items = [];
    items[0] = { no: 1, name: "version", kind: "scalar", T: 5 };
    tmp = new tmp("discord_protos.discord_experimentation.v1.SDKVersionSpecifier", items, new.target);
    // ThrowIfThisInitialized (0x7c)
    return tmp;
  }
}
const prototype22 = SDKVersionSpecifier$Type.prototype;
prototype22["create"] = function create(arr) {
  obj = { version: 0 };
  const _Object = Object;
  obj = { enumerable: false, value: this };
  _Object.defineProperty(obj, _mod1306.MESSAGE_TYPE, obj);
  if (undefined !== arr) {
    const result = _mod1306.reflectionMergePartial(this, obj, arr);
    const tmpResult = _mod1306;
  }
  return obj;
};
prototype22["internalBinaryRead"] = function internalBinaryRead(pos, arg1, readUnknownField) {
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
        obj.version = pos.int32();
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
prototype22["internalBinaryWrite"] = function internalBinaryWrite(version, tag, writeUnknownFields) {
  if (0 !== version.version) {
    tag.tag(1, _mod1306.WireType.Varint).int32(version.version);
    const tagResult = tag.tag(1, _mod1306.WireType.Varint);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = _mod1306.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, version, tag);
  }
  return tag;
};
const items20 = [{ no: 1, name: "version", kind: "scalar", T: 5 }];
const items163 = new items16(
  "discord_protos.discord_experimentation.v1.SDKVersionSpecifier",
  items20,
  obj8,
  tmp5,
  tmp4,
  tmp3,
  "create",
  "internalBinaryRead",
  "internalBinaryWrite",
  tmp2,
);
// ThrowIfThisInitialized (0x7c)
class ClientPlatform$Type extends MessageType23 {
  constructor() {
    obj = {
      no: 1,
      name: "ios_version",
      kind: "message",
      T() {
        return closure_27;
      },
    };
    items = [, , , , ,];
    items[0] = obj;
    items[1] = {
      no: 2,
      name: "android_version",
      kind: "message",
      T() {
        return closure_27;
      },
    };
    items[2] = {
      no: 3,
      name: "web_version",
      kind: "message",
      T() {
        return closure_27;
      },
    };
    items[3] = {
      no: 4,
      name: "native_version",
      kind: "message",
      T() {
        return closure_27;
      },
    };
    items[4] = { no: 6, name: "allow_non_native_web", kind: "scalar", T: 8 };
    items[5] = {
      no: 5,
      name: "client_required_changes",
      kind: "message",
      T() {
        return closure_31;
      },
    };
    tmp = new tmp(
      "discord_protos.discord_experimentation.v1.ClientPlatform",
      items,
      { "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_CLIENT" },
      new.target,
    );
    // ThrowIfThisInitialized (0x7c)
    return tmp;
  }
}
const prototype23 = ClientPlatform$Type.prototype;
prototype23["create"] = function create(arr) {
  obj = { allowNonNativeWeb: false };
  const _Object = Object;
  obj = { enumerable: false, value: this };
  _Object.defineProperty(obj, _mod1306.MESSAGE_TYPE, obj);
  if (undefined !== arr) {
    const result = _mod1306.reflectionMergePartial(this, obj, arr);
    const tmpResult = _mod1306;
  }
  return obj;
};
prototype23["internalBinaryRead"] = function internalBinaryRead(pos, arg1, readUnknownField) {
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
        let tmp38 = items21;
        let tmp39 = items21;
        let tmp40 = pos;
        let tmp41 = readUnknownField;
        obj.iosVersion = items21.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.iosVersion);
      } else if (2 === tmp5) {
        let tmp34 = items21;
        let tmp35 = items21;
        let tmp36 = pos;
        let tmp37 = readUnknownField;
        obj.androidVersion = items21.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.androidVersion);
      } else if (3 === tmp5) {
        let tmp30 = items21;
        let tmp31 = items21;
        let tmp32 = pos;
        let tmp33 = readUnknownField;
        obj.webVersion = items21.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.webVersion);
      } else if (4 === tmp5) {
        let tmp26 = items21;
        let tmp27 = items21;
        let tmp28 = pos;
        let tmp29 = readUnknownField;
        obj.nativeVersion = items21.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.nativeVersion);
      } else if (6 === tmp5) {
        obj.allowNonNativeWeb = pos.bool();
      } else if (5 === tmp5) {
        let tmp22 = items214;
        let tmp23 = items214;
        let tmp24 = pos;
        let tmp25 = readUnknownField;
        obj.clientRequiredChanges = items214.internalBinaryRead(
          pos,
          pos.uint32(),
          readUnknownField,
          obj.clientRequiredChanges,
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
prototype23["internalBinaryWrite"] = function internalBinaryWrite(iosVersion, tag, writeUnknownFields) {
  if (iosVersion.iosVersion) {
    const tagResult = tag.tag(1, _mod1306.WireType.LengthDelimited);
    const joined = items21
      .internalBinaryWrite(
        iosVersion.iosVersion,
        tag.tag(1, _mod1306.WireType.LengthDelimited).fork(),
        writeUnknownFields,
      )
      .join();
    const internalBinaryWriteResult = items21.internalBinaryWrite(
      iosVersion.iosVersion,
      tag.tag(1, _mod1306.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    );
  }
  if (iosVersion.androidVersion) {
    const tagResult1 = tag.tag(2, _mod1306.WireType.LengthDelimited);
    const joined1 = items21
      .internalBinaryWrite(
        iosVersion.androidVersion,
        tag.tag(2, _mod1306.WireType.LengthDelimited).fork(),
        writeUnknownFields,
      )
      .join();
    const internalBinaryWriteResult1 = items21.internalBinaryWrite(
      iosVersion.androidVersion,
      tag.tag(2, _mod1306.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    );
  }
  if (iosVersion.webVersion) {
    const tagResult2 = tag.tag(3, _mod1306.WireType.LengthDelimited);
    const joined2 = items21
      .internalBinaryWrite(
        iosVersion.webVersion,
        tag.tag(3, _mod1306.WireType.LengthDelimited).fork(),
        writeUnknownFields,
      )
      .join();
    const internalBinaryWriteResult2 = items21.internalBinaryWrite(
      iosVersion.webVersion,
      tag.tag(3, _mod1306.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    );
  }
  if (iosVersion.nativeVersion) {
    const tagResult3 = tag.tag(4, _mod1306.WireType.LengthDelimited);
    const joined3 = items21
      .internalBinaryWrite(
        iosVersion.nativeVersion,
        tag.tag(4, _mod1306.WireType.LengthDelimited).fork(),
        writeUnknownFields,
      )
      .join();
    const internalBinaryWriteResult3 = items21.internalBinaryWrite(
      iosVersion.nativeVersion,
      tag.tag(4, _mod1306.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    );
  }
  if (false !== iosVersion.allowNonNativeWeb) {
    tag.tag(6, _mod1306.WireType.Varint).bool(iosVersion.allowNonNativeWeb);
    const tagResult4 = tag.tag(6, _mod1306.WireType.Varint);
  }
  if (iosVersion.clientRequiredChanges) {
    const tagResult5 = tag.tag(5, _mod1306.WireType.LengthDelimited);
    const joined4 = items214
      .internalBinaryWrite(
        iosVersion.clientRequiredChanges,
        tag.tag(5, _mod1306.WireType.LengthDelimited).fork(),
        writeUnknownFields,
      )
      .join();
    const internalBinaryWriteResult4 = items214.internalBinaryWrite(
      iosVersion.clientRequiredChanges,
      tag.tag(5, _mod1306.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    );
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = _mod1306.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, iosVersion, tag);
  }
  return tag;
};
let items21 = [
  {
    no: 1,
    name: "ios_version",
    kind: "message",
    T() {
      return closure_27;
    },
  },
  {
    no: 2,
    name: "android_version",
    kind: "message",
    T() {
      return closure_27;
    },
  },
  {
    no: 3,
    name: "web_version",
    kind: "message",
    T() {
      return closure_27;
    },
  },
  {
    no: 4,
    name: "native_version",
    kind: "message",
    T() {
      return closure_27;
    },
  },
  { no: 6, name: "allow_non_native_web", kind: "scalar", T: 8 },
  {
    no: 5,
    name: "client_required_changes",
    kind: "message",
    T() {
      return closure_31;
    },
  },
];
const obj13 = { "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_CLIENT" };
const sDKVersionSpecifierType = new SDKVersionSpecifier$Type(
  "discord_protos.discord_experimentation.v1.ClientPlatform",
  items21,
  obj13,
  tmp5,
  tmp4,
  tmp3,
  "create",
  "internalBinaryRead",
  "internalBinaryWrite",
  tmp2,
  undefined,
);
// ThrowIfThisInitialized (0x7c)
class PlatformVersion$Type extends MessageType24 {
  constructor() {
    obj = {
      no: 1,
      name: "ranges",
      kind: "message",
      repeat: 1,
      T() {
        return closure_28;
      },
    };
    items = [,];
    items[0] = obj;
    items[1] = { no: 2, name: "work_around_pyoto_bug", kind: "scalar", T: 8 };
    tmp = new tmp("discord_protos.discord_experimentation.v1.PlatformVersion", items, new.target);
    // ThrowIfThisInitialized (0x7c)
    return tmp;
  }
}
const prototype24 = PlatformVersion$Type.prototype;
prototype24["create"] = function create(arr) {
  obj = { ranges: [], workAroundPyotoBug: false };
  const _Object = Object;
  obj = { enumerable: false, value: this };
  _Object.defineProperty(obj, _mod1306.MESSAGE_TYPE, obj);
  if (undefined !== arr) {
    const result = _mod1306.reflectionMergePartial(this, obj, arr);
    const tmpResult = _mod1306;
  }
  return obj;
};
prototype24["internalBinaryRead"] = function internalBinaryRead(pos, arg1, readUnknownField) {
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
        let ranges = obj.ranges;
        let tmp22 = items211;
        let arr = ranges.push(items211.internalBinaryRead(pos, pos.uint32(), readUnknownField));
      } else if (2 === tmp5) {
        obj.workAroundPyotoBug = pos.bool();
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
prototype24["internalBinaryWrite"] = function internalBinaryWrite(ranges, tag, writeUnknownFields) {
  let length;
  let num = 0;
  if (0 < ranges.ranges.length) {
    do {
      let tmp = items211;
      let tmp2 = require;
      let tmp3 = dependencyMap;
      let tagResult = tag.tag(1, _mod1306.WireType.LengthDelimited);
      let internalBinaryWriteResult = items211.internalBinaryWrite(
        ranges.ranges[num],
        tagResult.fork(),
        writeUnknownFields,
      );
      let joined = internalBinaryWriteResult.join();
      num = num + 1;
      length = ranges.ranges.length;
    } while (num < length);
  }
  if (false !== ranges.workAroundPyotoBug) {
    tag.tag(2, _mod1306.WireType.Varint).bool(ranges.workAroundPyotoBug);
    const tagResult1 = tag.tag(2, _mod1306.WireType.Varint);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = _mod1306.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, ranges, tag);
  }
  return tag;
};
const items22 = [
  {
    no: 1,
    name: "ranges",
    kind: "message",
    repeat: 1,
    T() {
      return closure_28;
    },
  },
  { no: 2, name: "work_around_pyoto_bug", kind: "scalar", T: 8 },
];
items21 = new items21(
  "discord_protos.discord_experimentation.v1.PlatformVersion",
  items22,
  obj13,
  tmp5,
  tmp4,
  tmp3,
  "create",
  "internalBinaryRead",
  "internalBinaryWrite",
  tmp2,
);
// ThrowIfThisInitialized (0x7c)
class PlatformVersionRange$Type extends MessageType25 {
  constructor() {
    obj = {
      no: 1,
      name: "lower_bound",
      kind: "message",
      T() {
        return closure_29;
      },
    };
    items = [,];
    items[0] = obj;
    items[1] = {
      no: 2,
      name: "upper_bound",
      kind: "message",
      T() {
        return closure_29;
      },
    };
    tmp = new tmp("discord_protos.discord_experimentation.v1.PlatformVersionRange", items, new.target);
    // ThrowIfThisInitialized (0x7c)
    return tmp;
  }
}
const prototype25 = PlatformVersionRange$Type.prototype;
prototype25["create"] = function create(arr) {
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
prototype25["internalBinaryRead"] = function internalBinaryRead(pos, arg1, readUnknownField) {
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
        let tmp26 = items212;
        let tmp27 = items212;
        let tmp28 = pos;
        let tmp29 = readUnknownField;
        obj.lowerBound = items212.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.lowerBound);
      } else if (2 === tmp5) {
        let tmp22 = items212;
        let tmp23 = items212;
        let tmp24 = pos;
        let tmp25 = readUnknownField;
        obj.upperBound = items212.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.upperBound);
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
prototype25["internalBinaryWrite"] = function internalBinaryWrite(lowerBound, tag, writeUnknownFields) {
  if (lowerBound.lowerBound) {
    const tagResult = tag.tag(1, _mod1306.WireType.LengthDelimited);
    const joined = items212
      .internalBinaryWrite(
        lowerBound.lowerBound,
        tag.tag(1, _mod1306.WireType.LengthDelimited).fork(),
        writeUnknownFields,
      )
      .join();
    const internalBinaryWriteResult = items212.internalBinaryWrite(
      lowerBound.lowerBound,
      tag.tag(1, _mod1306.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    );
  }
  if (lowerBound.upperBound) {
    const tagResult1 = tag.tag(2, _mod1306.WireType.LengthDelimited);
    const joined1 = items212
      .internalBinaryWrite(
        lowerBound.upperBound,
        tag.tag(2, _mod1306.WireType.LengthDelimited).fork(),
        writeUnknownFields,
      )
      .join();
    const internalBinaryWriteResult1 = items212.internalBinaryWrite(
      lowerBound.upperBound,
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
    onWrite(this.typeName, lowerBound, tag);
  }
  return tag;
};
const items23 = [
  {
    no: 1,
    name: "lower_bound",
    kind: "message",
    T() {
      return closure_29;
    },
  },
  {
    no: 2,
    name: "upper_bound",
    kind: "message",
    T() {
      return closure_29;
    },
  },
];
const items211 = new items21(
  "discord_protos.discord_experimentation.v1.PlatformVersionRange",
  items23,
  obj13,
  tmp5,
  tmp4,
  tmp3,
  "create",
  "internalBinaryRead",
  "internalBinaryWrite",
  tmp2,
);
// ThrowIfThisInitialized (0x7c)
class PlatformVersionRangeBound$Type extends MessageType26 {
  constructor() {
    obj = {
      no: 1,
      name: "version",
      kind: "message",
      T() {
        return closure_30;
      },
    };
    items = [,];
    items[0] = obj;
    items[1] = { no: 2, name: "inclusive", kind: "scalar", T: 8 };
    tmp = new tmp("discord_protos.discord_experimentation.v1.PlatformVersionRangeBound", items, new.target);
    // ThrowIfThisInitialized (0x7c)
    return tmp;
  }
}
const prototype26 = PlatformVersionRangeBound$Type.prototype;
prototype26["create"] = function create(arr) {
  obj = { inclusive: false };
  const _Object = Object;
  obj = { enumerable: false, value: this };
  _Object.defineProperty(obj, _mod1306.MESSAGE_TYPE, obj);
  if (undefined !== arr) {
    const result = _mod1306.reflectionMergePartial(this, obj, arr);
    const tmpResult = _mod1306;
  }
  return obj;
};
prototype26["internalBinaryRead"] = function internalBinaryRead(pos, arg1, readUnknownField) {
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
        let tmp22 = items213;
        let tmp23 = items213;
        let tmp24 = pos;
        let tmp25 = readUnknownField;
        obj.version = items213.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.version);
      } else if (2 === tmp5) {
        obj.inclusive = pos.bool();
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
prototype26["internalBinaryWrite"] = function internalBinaryWrite(version, tag, writeUnknownFields) {
  if (version.version) {
    const tagResult = tag.tag(1, _mod1306.WireType.LengthDelimited);
    const joined = items213
      .internalBinaryWrite(version.version, tag.tag(1, _mod1306.WireType.LengthDelimited).fork(), writeUnknownFields)
      .join();
    const internalBinaryWriteResult = items213.internalBinaryWrite(
      version.version,
      tag.tag(1, _mod1306.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    );
  }
  if (false !== version.inclusive) {
    tag.tag(2, _mod1306.WireType.Varint).bool(version.inclusive);
    const tagResult1 = tag.tag(2, _mod1306.WireType.Varint);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = _mod1306.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, version, tag);
  }
  return tag;
};
const items24 = [
  {
    no: 1,
    name: "version",
    kind: "message",
    T() {
      return closure_30;
    },
  },
  { no: 2, name: "inclusive", kind: "scalar", T: 8 },
];
const items212 = new items21(
  "discord_protos.discord_experimentation.v1.PlatformVersionRangeBound",
  items24,
  obj13,
  tmp5,
  tmp4,
  tmp3,
  "create",
  "internalBinaryRead",
  "internalBinaryWrite",
  tmp2,
);
// ThrowIfThisInitialized (0x7c)
class PlatformVersionSpecifier$Type extends MessageType27 {
  constructor() {
    items = [, ,];
    items[0] = { no: 1, name: "major", kind: "scalar", T: 13 };
    obj = { no: 2, name: "minor", kind: "message", T: null };
    class T {
      constructor() {
        return require("defineProperty").UInt32Value;
      }
    }
    obj[3] = T;
    items[1] = obj;
    items[2] = {
      no: 3,
      name: "build",
      kind: "message",
      T() {
        return callback(1336).UInt64Value;
      },
    };
    tmp = new tmp("discord_protos.discord_experimentation.v1.PlatformVersionSpecifier", items, T);
    // ThrowIfThisInitialized (0x7c)
    return tmp;
  }
}
const prototype27 = PlatformVersionSpecifier$Type.prototype;
prototype27["create"] = function create(arr) {
  obj = { major: 0 };
  const _Object = Object;
  obj = { enumerable: false, value: this };
  _Object.defineProperty(obj, _mod1306.MESSAGE_TYPE, obj);
  if (undefined !== arr) {
    const result = _mod1306.reflectionMergePartial(this, obj, arr);
    const tmpResult = _mod1306;
  }
  return obj;
};
prototype27["internalBinaryRead"] = function internalBinaryRead(pos, arg1, readUnknownField) {
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
        obj.major = pos.uint32();
      } else if (2 === tmp5) {
        let tmp27 = require;
        let tmp28 = dependencyMap;
        let UInt32Value = defineProperty2.UInt32Value;
        let tmp29 = UInt32Value;
        let tmp30 = pos;
        let tmp31 = readUnknownField;
        obj.minor = UInt32Value.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.minor);
      } else if (3 === tmp5) {
        let tmp22 = require;
        let tmp23 = dependencyMap;
        let UInt64Value = defineProperty2.UInt64Value;
        let tmp24 = UInt64Value;
        let tmp25 = pos;
        let tmp26 = readUnknownField;
        obj.build = UInt64Value.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.build);
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
prototype27["internalBinaryWrite"] = function internalBinaryWrite(major, tag, writeUnknownFields) {
  if (0 !== major.major) {
    tag.tag(1, _mod1306.WireType.Varint).uint32(major.major);
    const tagResult = tag.tag(1, _mod1306.WireType.Varint);
  }
  if (major.minor) {
    const UInt32Value = defineProperty2.UInt32Value;
    const tagResult1 = tag.tag(2, _mod1306.WireType.LengthDelimited);
    const joined = UInt32Value.internalBinaryWrite(
      major.minor,
      tag.tag(2, _mod1306.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    ).join();
    const internalBinaryWriteResult = UInt32Value.internalBinaryWrite(
      major.minor,
      tag.tag(2, _mod1306.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    );
  }
  if (major.build) {
    const UInt64Value = defineProperty2.UInt64Value;
    const tagResult2 = tag.tag(3, _mod1306.WireType.LengthDelimited);
    const joined1 = UInt64Value.internalBinaryWrite(
      major.build,
      tag.tag(3, _mod1306.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    ).join();
    const internalBinaryWriteResult1 = UInt64Value.internalBinaryWrite(
      major.build,
      tag.tag(3, _mod1306.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    );
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = _mod1306.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, major, tag);
  }
  return tag;
};
const items25 = [
  { no: 1, name: "major", kind: "scalar", T: 13 },
  {
    no: 2,
    name: "minor",
    kind: "message",
    T() {
      return callback(1336).UInt32Value;
    },
  },
  {
    no: 3,
    name: "build",
    kind: "message",
    T() {
      return callback(1336).UInt64Value;
    },
  },
];
const items213 = new items21(
  "discord_protos.discord_experimentation.v1.PlatformVersionSpecifier",
  items25,
  obj13,
  tmp5,
  tmp4,
  tmp3,
  "create",
  "internalBinaryRead",
  "internalBinaryWrite",
  tmp2,
);
// ThrowIfThisInitialized (0x7c)
class ClientRequiredChanges$Type extends MessageType28 {
  constructor() {
    items = [,];
    items[0] = { no: 1, name: "commit_hashes", kind: "scalar", repeat: 2, T: 9 };
    items[1] = { no: 2, name: "pr_numbers", kind: "scalar", repeat: 1, T: 5 };
    tmp = new tmp("discord_protos.discord_experimentation.v1.ClientRequiredChanges", items, new.target);
    // ThrowIfThisInitialized (0x7c)
    return tmp;
  }
}
const prototype28 = ClientRequiredChanges$Type.prototype;
prototype28["create"] = function create(arr) {
  obj = { commitHashes: [], prNumbers: [] };
  const _Object = Object;
  obj = { enumerable: false, value: this };
  _Object.defineProperty(obj, _mod1306.MESSAGE_TYPE, obj);
  if (undefined !== arr) {
    const result = _mod1306.reflectionMergePartial(this, obj, arr);
    const tmpResult = _mod1306;
  }
  return obj;
};
prototype28["internalBinaryRead"] = function internalBinaryRead(pos, arg1, readUnknownField) {
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
        let commitHashes = obj.commitHashes;
        let arr = commitHashes.push(pos.string());
      } else if (2 === tmp5) {
        let tmp22 = require;
        let tmp23 = dependencyMap;
        if (tmp6 === _mod1306.WireType.LengthDelimited) {
          let sum1 = pos.int32() + pos.pos;
          if (pos.pos < sum1) {
            do {
              let prNumbers = obj.prNumbers;
              arr = prNumbers.push(pos.int32());
              pos = pos.pos;
            } while (pos < sum1);
          }
        } else {
          let prNumbers1 = obj.prNumbers;
          let arr1 = prNumbers1.push(pos.int32());
        }
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
prototype28["internalBinaryWrite"] = function internalBinaryWrite(commitHashes, tag, writeUnknownFields) {
  let length;
  let length2;
  let num = 0;
  if (0 < commitHashes.commitHashes.length) {
    do {
      let tmp = require;
      let tmp2 = dependencyMap;
      let tagResult = tag.tag(1, _mod1306.WireType.LengthDelimited);
      let stringResult = tagResult.string(commitHashes.commitHashes[num]);
      num = num + 1;
      length = commitHashes.commitHashes.length;
    } while (num < length);
  }
  if (commitHashes.prNumbers.length) {
    tag.tag(2, _mod1306.WireType.LengthDelimited).fork();
    let num3 = 0;
    if (0 < commitHashes.prNumbers.length) {
      do {
        let int32Result = tag.int32(commitHashes.prNumbers[num3]);
        num3 = num3 + 1;
        length2 = commitHashes.prNumbers.length;
      } while (num3 < length2);
    }
    const joined = tag.join();
    const tagResult1 = tag.tag(2, _mod1306.WireType.LengthDelimited);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = _mod1306.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, commitHashes, tag);
  }
  return tag;
};
const items26 = [
  { no: 1, name: "commit_hashes", kind: "scalar", repeat: 2, T: 9 },
  { no: 2, name: "pr_numbers", kind: "scalar", repeat: 1, T: 5 },
];
const items214 = new items21(
  "discord_protos.discord_experimentation.v1.ClientRequiredChanges",
  items26,
  obj13,
  tmp5,
  tmp4,
  tmp3,
  "create",
  "internalBinaryRead",
  "internalBinaryWrite",
  tmp2,
);
// ThrowIfThisInitialized (0x7c)
class UserIsBot$Type extends MessageType29 {
  constructor() {
    items = [];
    items[0] = { no: 1, name: "is_bot", kind: "scalar", T: 8 };
    tmp = new tmp(
      "discord_protos.discord_experimentation.v1.UserIsBot",
      items,
      { "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_USER" },
      new.target,
    );
    // ThrowIfThisInitialized (0x7c)
    return tmp;
  }
}
const prototype29 = UserIsBot$Type.prototype;
prototype29["create"] = function create(arr) {
  obj = { isBot: false };
  const _Object = Object;
  obj = { enumerable: false, value: this };
  _Object.defineProperty(obj, _mod1306.MESSAGE_TYPE, obj);
  if (undefined !== arr) {
    const result = _mod1306.reflectionMergePartial(this, obj, arr);
    const tmpResult = _mod1306;
  }
  return obj;
};
prototype29["internalBinaryRead"] = function internalBinaryRead(pos, arg1, readUnknownField) {
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
        obj.isBot = pos.bool();
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
prototype29["internalBinaryWrite"] = function internalBinaryWrite(isBot, tag, writeUnknownFields) {
  if (false !== isBot.isBot) {
    tag.tag(1, _mod1306.WireType.Varint).bool(isBot.isBot);
    const tagResult = tag.tag(1, _mod1306.WireType.Varint);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = _mod1306.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, isBot, tag);
  }
  return tag;
};
const items27 = [{ no: 1, name: "is_bot", kind: "scalar", T: 8 }];
const clientRequiredChangesType = new ClientRequiredChanges$Type(
  "discord_protos.discord_experimentation.v1.UserIsBot",
  items27,
  { "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_USER" },
  tmp5,
  tmp4,
  tmp3,
  "create",
  "internalBinaryRead",
  "internalBinaryWrite",
  tmp2,
  undefined,
);
// ThrowIfThisInitialized (0x7c)
class UserAgeRange$Type extends MessageType30 {
  constructor() {
    obj = {
      no: 1,
      name: "min_age_years",
      kind: "message",
      T() {
        return callback(1336).UInt32Value;
      },
    };
    items = [,];
    items[0] = obj;
    items[1] = {
      no: 2,
      name: "max_age_years",
      kind: "message",
      T() {
        return callback(1336).UInt32Value;
      },
    };
    tmp = new tmp(
      "discord_protos.discord_experimentation.v1.UserAgeRange",
      items,
      { "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_USER" },
      new.target,
    );
    // ThrowIfThisInitialized (0x7c)
    return tmp;
  }
}
const prototype30 = UserAgeRange$Type.prototype;
prototype30["create"] = function create(arr) {
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
prototype30["internalBinaryRead"] = function internalBinaryRead(pos, arg1, readUnknownField) {
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
        let UInt32Value2 = defineProperty2.UInt32Value;
        let tmp29 = UInt32Value2;
        let tmp30 = pos;
        let tmp31 = readUnknownField;
        obj.minAgeYears = UInt32Value2.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.minAgeYears);
      } else if (2 === tmp5) {
        let tmp22 = require;
        let tmp23 = dependencyMap;
        let UInt32Value = defineProperty2.UInt32Value;
        let tmp24 = UInt32Value;
        let tmp25 = pos;
        let tmp26 = readUnknownField;
        obj.maxAgeYears = UInt32Value.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.maxAgeYears);
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
prototype30["internalBinaryWrite"] = function internalBinaryWrite(minAgeYears, tag, writeUnknownFields) {
  if (minAgeYears.minAgeYears) {
    const UInt32Value = defineProperty2.UInt32Value;
    const tagResult = tag.tag(1, _mod1306.WireType.LengthDelimited);
    const joined = UInt32Value.internalBinaryWrite(
      minAgeYears.minAgeYears,
      tag.tag(1, _mod1306.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    ).join();
    const internalBinaryWriteResult = UInt32Value.internalBinaryWrite(
      minAgeYears.minAgeYears,
      tag.tag(1, _mod1306.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    );
  }
  if (minAgeYears.maxAgeYears) {
    const UInt32Value2 = defineProperty2.UInt32Value;
    const tagResult1 = tag.tag(2, _mod1306.WireType.LengthDelimited);
    const joined1 = UInt32Value2.internalBinaryWrite(
      minAgeYears.maxAgeYears,
      tag.tag(2, _mod1306.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    ).join();
    const internalBinaryWriteResult1 = UInt32Value2.internalBinaryWrite(
      minAgeYears.maxAgeYears,
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
    onWrite(this.typeName, minAgeYears, tag);
  }
  return tag;
};
let items28 = [
  {
    no: 1,
    name: "min_age_years",
    kind: "message",
    T() {
      return callback(1336).UInt32Value;
    },
  },
  {
    no: 2,
    name: "max_age_years",
    kind: "message",
    T() {
      return callback(1336).UInt32Value;
    },
  },
];
const obj18 = { "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_USER" };
const clientRequiredChangesType1 = new ClientRequiredChanges$Type(
  "discord_protos.discord_experimentation.v1.UserAgeRange",
  items28,
  obj18,
  tmp5,
  tmp4,
  tmp3,
  "create",
  "internalBinaryRead",
  "internalBinaryWrite",
  tmp2,
  undefined,
);
// ThrowIfThisInitialized (0x7c)
class Fixed64Value$Type extends MessageType31 {
  constructor() {
    items = [];
    items[0] = { no: 1, name: "value", kind: "scalar", T: 6 };
    tmp = new tmp("discord_protos.discord_experimentation.v1.Fixed64Value", items, new.target);
    // ThrowIfThisInitialized (0x7c)
    return tmp;
  }
}
const prototype31 = Fixed64Value$Type.prototype;
prototype31["create"] = function create(arr) {
  obj = { value: "0" };
  const _Object = Object;
  obj = { enumerable: false, value: this };
  _Object.defineProperty(obj, _mod1306.MESSAGE_TYPE, obj);
  if (undefined !== arr) {
    const result = _mod1306.reflectionMergePartial(this, obj, arr);
    const tmpResult = _mod1306;
  }
  return obj;
};
prototype31["internalBinaryRead"] = function internalBinaryRead(pos, arg1, readUnknownField) {
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
        let str4 = pos.fixed64();
        obj.value = str4.toString();
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
prototype31["internalBinaryWrite"] = function internalBinaryWrite(value, tag, writeUnknownFields) {
  if ("0" !== value.value) {
    tag.tag(1, _mod1306.WireType.Bit64).fixed64(value.value);
    const tagResult = tag.tag(1, _mod1306.WireType.Bit64);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = _mod1306.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, value, tag);
  }
  return tag;
};
const items29 = [{ no: 1, name: "value", kind: "scalar", T: 6 }];
items28 = new items28(
  "discord_protos.discord_experimentation.v1.Fixed64Value",
  items29,
  obj18,
  tmp5,
  tmp4,
  tmp3,
  "create",
  "internalBinaryRead",
  "internalBinaryWrite",
  tmp2,
);
// ThrowIfThisInitialized (0x7c)
class UserIDRange$Type extends MessageType32 {
  constructor() {
    obj = {
      no: 1,
      name: "min_id",
      kind: "message",
      T() {
        return closure_34;
      },
    };
    items = [,];
    items[0] = obj;
    items[1] = {
      no: 2,
      name: "max_id",
      kind: "message",
      T() {
        return closure_34;
      },
    };
    tmp = new tmp(
      "discord_protos.discord_experimentation.v1.UserIDRange",
      items,
      { "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_USER" },
      new.target,
    );
    // ThrowIfThisInitialized (0x7c)
    return tmp;
  }
}
const prototype32 = UserIDRange$Type.prototype;
prototype32["create"] = function create(arr) {
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
prototype32["internalBinaryRead"] = function internalBinaryRead(pos, arg1, readUnknownField) {
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
        let tmp26 = items28;
        let tmp27 = items28;
        let tmp28 = pos;
        let tmp29 = readUnknownField;
        obj.minId = items28.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.minId);
      } else if (2 === tmp5) {
        let tmp22 = items28;
        let tmp23 = items28;
        let tmp24 = pos;
        let tmp25 = readUnknownField;
        obj.maxId = items28.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.maxId);
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
prototype32["internalBinaryWrite"] = function internalBinaryWrite(minId, tag, writeUnknownFields) {
  if (minId.minId) {
    const tagResult = tag.tag(1, _mod1306.WireType.LengthDelimited);
    const joined = items28
      .internalBinaryWrite(minId.minId, tag.tag(1, _mod1306.WireType.LengthDelimited).fork(), writeUnknownFields)
      .join();
    const internalBinaryWriteResult = items28.internalBinaryWrite(
      minId.minId,
      tag.tag(1, _mod1306.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    );
  }
  if (minId.maxId) {
    const tagResult1 = tag.tag(2, _mod1306.WireType.LengthDelimited);
    const joined1 = items28
      .internalBinaryWrite(minId.maxId, tag.tag(2, _mod1306.WireType.LengthDelimited).fork(), writeUnknownFields)
      .join();
    const internalBinaryWriteResult1 = items28.internalBinaryWrite(
      minId.maxId,
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
    onWrite(this.typeName, minId, tag);
  }
  return tag;
};
const items30 = [
  {
    no: 1,
    name: "min_id",
    kind: "message",
    T() {
      return closure_34;
    },
  },
  {
    no: 2,
    name: "max_id",
    kind: "message",
    T() {
      return closure_34;
    },
  },
];
const fixed64ValueType = new Fixed64Value$Type(
  "discord_protos.discord_experimentation.v1.UserIDRange",
  items30,
  { "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_USER" },
  tmp5,
  tmp4,
  tmp3,
  "create",
  "internalBinaryRead",
  "internalBinaryWrite",
  tmp2,
  undefined,
);
// ThrowIfThisInitialized (0x7c)
class UserHasFlag$Type extends MessageType33 {
  constructor() {
    items = [];
    items[0] = { no: 1, name: "mask", kind: "scalar", T: 6 };
    tmp = new tmp(
      "discord_protos.discord_experimentation.v1.UserHasFlag",
      items,
      { "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_USER" },
      new.target,
    );
    // ThrowIfThisInitialized (0x7c)
    return tmp;
  }
}
const prototype33 = UserHasFlag$Type.prototype;
prototype33["create"] = function create(arr) {
  obj = { mask: "0" };
  const _Object = Object;
  obj = { enumerable: false, value: this };
  _Object.defineProperty(obj, _mod1306.MESSAGE_TYPE, obj);
  if (undefined !== arr) {
    const result = _mod1306.reflectionMergePartial(this, obj, arr);
    const tmpResult = _mod1306;
  }
  return obj;
};
prototype33["internalBinaryRead"] = function internalBinaryRead(pos, arg1, readUnknownField) {
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
        let str4 = pos.fixed64();
        obj.mask = str4.toString();
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
prototype33["internalBinaryWrite"] = function internalBinaryWrite(mask, tag, writeUnknownFields) {
  if ("0" !== mask.mask) {
    tag.tag(1, _mod1306.WireType.Bit64).fixed64(mask.mask);
    const tagResult = tag.tag(1, _mod1306.WireType.Bit64);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = _mod1306.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, mask, tag);
  }
  return tag;
};
const items31 = [{ no: 1, name: "mask", kind: "scalar", T: 6 }];
const fixed64ValueType1 = new Fixed64Value$Type(
  "discord_protos.discord_experimentation.v1.UserHasFlag",
  items31,
  { "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_USER" },
  tmp5,
  tmp4,
  tmp3,
  "create",
  "internalBinaryRead",
  "internalBinaryWrite",
  tmp2,
  undefined,
);
// ThrowIfThisInitialized (0x7c)
class UnitIdInRangeByHash$Type extends MessageType34 {
  constructor() {
    items = [, ,];
    items[0] = { no: 1, name: "hash_key", kind: "scalar", T: 9 };
    items[1] = { no: 2, name: "stop_ring_position", kind: "scalar", T: 13 };
    items[2] = { no: 3, name: "start_ring_position", kind: "scalar", T: 13 };
    tmp = new tmp(
      "discord_protos.discord_experimentation.v1.UnitIdInRangeByHash",
      items,
      { "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_UTILITY" },
      new.target,
    );
    // ThrowIfThisInitialized (0x7c)
    return tmp;
  }
}
const prototype34 = UnitIdInRangeByHash$Type.prototype;
prototype34["create"] = function create(arr) {
  obj = { hashKey: "", stopRingPosition: 0, startRingPosition: 0 };
  const _Object = Object;
  obj = { enumerable: false, value: this };
  _Object.defineProperty(obj, _mod1306.MESSAGE_TYPE, obj);
  if (undefined !== arr) {
    const result = _mod1306.reflectionMergePartial(this, obj, arr);
    const tmpResult = _mod1306;
  }
  return obj;
};
prototype34["internalBinaryRead"] = function internalBinaryRead(pos, arg1, readUnknownField) {
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
        obj.hashKey = pos.string();
      } else if (2 === tmp5) {
        obj.stopRingPosition = pos.uint32();
      } else if (3 === tmp5) {
        obj.startRingPosition = pos.uint32();
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
prototype34["internalBinaryWrite"] = function internalBinaryWrite(hashKey, tag, writeUnknownFields) {
  if ("" !== hashKey.hashKey) {
    tag.tag(1, _mod1306.WireType.LengthDelimited).string(hashKey.hashKey);
    const tagResult = tag.tag(1, _mod1306.WireType.LengthDelimited);
  }
  if (0 !== hashKey.stopRingPosition) {
    tag.tag(2, _mod1306.WireType.Varint).uint32(hashKey.stopRingPosition);
    const tagResult1 = tag.tag(2, _mod1306.WireType.Varint);
  }
  if (0 !== hashKey.startRingPosition) {
    tag.tag(3, _mod1306.WireType.Varint).uint32(hashKey.startRingPosition);
    const tagResult2 = tag.tag(3, _mod1306.WireType.Varint);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = _mod1306.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, hashKey, tag);
  }
  return tag;
};
const items32 = [
  { no: 1, name: "hash_key", kind: "scalar", T: 9 },
  { no: 2, name: "stop_ring_position", kind: "scalar", T: 13 },
  { no: 3, name: "start_ring_position", kind: "scalar", T: 13 },
];
const fixed64ValueType2 = new Fixed64Value$Type(
  "discord_protos.discord_experimentation.v1.UnitIdInRangeByHash",
  items32,
  { "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_UTILITY" },
  tmp5,
  tmp4,
  tmp3,
  "create",
  "internalBinaryRead",
  "internalBinaryWrite",
  tmp2,
  undefined,
);
// ThrowIfThisInitialized (0x7c)
class ClientReleaseChannel$Type extends MessageType35 {
  constructor() {
    items = [];
    items[0] = { no: 1, name: "release_channels", kind: "scalar", repeat: 2, T: 9 };
    tmp = new tmp(
      "discord_protos.discord_experimentation.v1.ClientReleaseChannel",
      items,
      { "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_CLIENT" },
      new.target,
    );
    // ThrowIfThisInitialized (0x7c)
    return tmp;
  }
}
const prototype35 = ClientReleaseChannel$Type.prototype;
prototype35["create"] = function create(arr) {
  obj = { releaseChannels: [] };
  const _Object = Object;
  obj = { enumerable: false, value: this };
  _Object.defineProperty(obj, _mod1306.MESSAGE_TYPE, obj);
  if (undefined !== arr) {
    const result = _mod1306.reflectionMergePartial(this, obj, arr);
    const tmpResult = _mod1306;
  }
  return obj;
};
prototype35["internalBinaryRead"] = function internalBinaryRead(pos, arg1, readUnknownField) {
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
        let releaseChannels = obj.releaseChannels;
        let arr = releaseChannels.push(pos.string());
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
prototype35["internalBinaryWrite"] = function internalBinaryWrite(releaseChannels, tag, writeUnknownFields) {
  let length;
  let num = 0;
  if (0 < releaseChannels.releaseChannels.length) {
    do {
      let tmp = require;
      let tmp2 = dependencyMap;
      let tagResult = tag.tag(1, _mod1306.WireType.LengthDelimited);
      let stringResult = tagResult.string(releaseChannels.releaseChannels[num]);
      num = num + 1;
      length = releaseChannels.releaseChannels.length;
    } while (num < length);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = _mod1306.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, releaseChannels, tag);
  }
  return tag;
};
const items33 = [{ no: 1, name: "release_channels", kind: "scalar", repeat: 2, T: 9 }];
const fixed64ValueType3 = new Fixed64Value$Type(
  "discord_protos.discord_experimentation.v1.ClientReleaseChannel",
  items33,
  { "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_CLIENT" },
  tmp5,
  tmp4,
  tmp3,
  "create",
  "internalBinaryRead",
  "internalBinaryWrite",
  tmp2,
  undefined,
);
// ThrowIfThisInitialized (0x7c)
class Always$Type extends MessageType36 {
  constructor() {
    items = [];
    items[0] = { no: 1, name: "value", kind: "scalar", T: 8 };
    tmp = new tmp(
      "discord_protos.discord_experimentation.v1.Always",
      items,
      { "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_UTILITY" },
      new.target,
    );
    // ThrowIfThisInitialized (0x7c)
    return tmp;
  }
}
const prototype36 = Always$Type.prototype;
prototype36["create"] = function create(arr) {
  obj = { value: false };
  const _Object = Object;
  obj = { enumerable: false, value: this };
  _Object.defineProperty(obj, _mod1306.MESSAGE_TYPE, obj);
  if (undefined !== arr) {
    const result = _mod1306.reflectionMergePartial(this, obj, arr);
    const tmpResult = _mod1306;
  }
  return obj;
};
prototype36["internalBinaryRead"] = function internalBinaryRead(pos, arg1, readUnknownField) {
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
        obj.value = pos.bool();
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
prototype36["internalBinaryWrite"] = function internalBinaryWrite(value, tag, writeUnknownFields) {
  if (false !== value.value) {
    tag.tag(1, _mod1306.WireType.Varint).bool(value.value);
    const tagResult = tag.tag(1, _mod1306.WireType.Varint);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = _mod1306.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, value, tag);
  }
  return tag;
};
const items34 = [{ no: 1, name: "value", kind: "scalar", T: 8 }];
const fixed64ValueType4 = new Fixed64Value$Type(
  "discord_protos.discord_experimentation.v1.Always",
  items34,
  { "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_UTILITY" },
  tmp5,
  tmp4,
  tmp3,
  "create",
  "internalBinaryRead",
  "internalBinaryWrite",
  tmp2,
  undefined,
);
// ThrowIfThisInitialized (0x7c)
class UnitIdInExperiment$Type extends MessageType37 {
  constructor() {
    items = [,];
    items[0] = { no: 1, name: "experiment_id", kind: "scalar", T: 6 };
    items[1] = { no: 2, name: "variation_ids", kind: "scalar", repeat: 1, T: 5 };
    tmp = new tmp(
      "discord_protos.discord_experimentation.v1.UnitIdInExperiment",
      items,
      {
        "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_UTILITY",
        "discord_protos.discord_experimentation.v1.filter_evaluation_mode": "FILTER_EVALUATION_MODE_LAZY",
      },
      new.target,
    );
    // ThrowIfThisInitialized (0x7c)
    return tmp;
  }
}
const prototype37 = UnitIdInExperiment$Type.prototype;
prototype37["create"] = function create(arr) {
  obj = { experimentId: "0", variationIds: [] };
  const _Object = Object;
  obj = { enumerable: false, value: this };
  _Object.defineProperty(obj, _mod1306.MESSAGE_TYPE, obj);
  if (undefined !== arr) {
    const result = _mod1306.reflectionMergePartial(this, obj, arr);
    const tmpResult = _mod1306;
  }
  return obj;
};
prototype37["internalBinaryRead"] = function internalBinaryRead(pos, arg1, readUnknownField) {
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
        let str4 = pos.fixed64();
        obj.experimentId = str4.toString();
      } else if (2 === tmp5) {
        let tmp22 = require;
        let tmp23 = dependencyMap;
        if (tmp6 === _mod1306.WireType.LengthDelimited) {
          let sum1 = pos.int32() + pos.pos;
          if (pos.pos < sum1) {
            do {
              let variationIds = obj.variationIds;
              let arr = variationIds.push(pos.int32());
              pos = pos.pos;
            } while (pos < sum1);
          }
        } else {
          let variationIds1 = obj.variationIds;
          arr = variationIds1.push(pos.int32());
        }
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
prototype37["internalBinaryWrite"] = function internalBinaryWrite(experimentId, tag, writeUnknownFields) {
  let length;
  if ("0" !== experimentId.experimentId) {
    tag.tag(1, _mod1306.WireType.Bit64).fixed64(experimentId.experimentId);
    const tagResult = tag.tag(1, _mod1306.WireType.Bit64);
  }
  if (experimentId.variationIds.length) {
    tag.tag(2, _mod1306.WireType.LengthDelimited).fork();
    let num3 = 0;
    if (0 < experimentId.variationIds.length) {
      do {
        let int32Result = tag.int32(experimentId.variationIds[num3]);
        num3 = num3 + 1;
        length = experimentId.variationIds.length;
      } while (num3 < length);
    }
    const joined = tag.join();
    const tagResult1 = tag.tag(2, _mod1306.WireType.LengthDelimited);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = _mod1306.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, experimentId, tag);
  }
  return tag;
};
const items35 = [
  { no: 1, name: "experiment_id", kind: "scalar", T: 6 },
  { no: 2, name: "variation_ids", kind: "scalar", repeat: 1, T: 5 },
];
const fixed64ValueType5 = new Fixed64Value$Type(
  "discord_protos.discord_experimentation.v1.UnitIdInExperiment",
  items35,
  {
    "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_UTILITY",
    "discord_protos.discord_experimentation.v1.filter_evaluation_mode": "FILTER_EVALUATION_MODE_LAZY",
  },
  tmp5,
  tmp4,
  tmp3,
  "create",
  "internalBinaryRead",
  "internalBinaryWrite",
  tmp2,
  undefined,
);
// ThrowIfThisInitialized (0x7c)
class UserPremiumType$Type extends MessageType38 {
  constructor() {
    items = [];
    items[0] = { no: 1, name: "premium_types", kind: "scalar", repeat: 1, T: 5 };
    tmp = new tmp(
      "discord_protos.discord_experimentation.v1.UserPremiumType",
      items,
      { "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_USER" },
      new.target,
    );
    // ThrowIfThisInitialized (0x7c)
    return tmp;
  }
}
const prototype38 = UserPremiumType$Type.prototype;
prototype38["create"] = function create(arr) {
  obj = { premiumTypes: [] };
  const _Object = Object;
  obj = { enumerable: false, value: this };
  _Object.defineProperty(obj, _mod1306.MESSAGE_TYPE, obj);
  if (undefined !== arr) {
    const result = _mod1306.reflectionMergePartial(this, obj, arr);
    const tmpResult = _mod1306;
  }
  return obj;
};
prototype38["internalBinaryRead"] = function internalBinaryRead(pos, arg1, readUnknownField) {
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
        if (tmp6 === _mod1306.WireType.LengthDelimited) {
          let sum1 = pos.int32() + pos.pos;
          if (pos.pos < sum1) {
            do {
              let premiumTypes = obj.premiumTypes;
              let arr = premiumTypes.push(pos.int32());
              pos = pos.pos;
            } while (pos < sum1);
          }
        } else {
          let premiumTypes1 = obj.premiumTypes;
          arr = premiumTypes1.push(pos.int32());
        }
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
prototype38["internalBinaryWrite"] = function internalBinaryWrite(premiumTypes, tag, writeUnknownFields) {
  let length;
  if (premiumTypes.premiumTypes.length) {
    tag.tag(1, _mod1306.WireType.LengthDelimited).fork();
    let num2 = 0;
    if (0 < premiumTypes.premiumTypes.length) {
      do {
        let int32Result = tag.int32(premiumTypes.premiumTypes[num2]);
        num2 = num2 + 1;
        length = premiumTypes.premiumTypes.length;
      } while (num2 < length);
    }
    const joined = tag.join();
    const tagResult = tag.tag(1, _mod1306.WireType.LengthDelimited);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = _mod1306.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, premiumTypes, tag);
  }
  return tag;
};
const items36 = [{ no: 1, name: "premium_types", kind: "scalar", repeat: 1, T: 5 }];
const fixed64ValueType6 = new Fixed64Value$Type(
  "discord_protos.discord_experimentation.v1.UserPremiumType",
  items36,
  { "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_USER" },
  tmp5,
  tmp4,
  tmp3,
  "create",
  "internalBinaryRead",
  "internalBinaryWrite",
  tmp2,
  undefined,
);
// ThrowIfThisInitialized (0x7c)
class UnitIdMatchesFilterSnapshot$Type extends MessageType39 {
  constructor() {
    items = [,];
    items[0] = { no: 1, name: "filter_snapshot_name", kind: "scalar", T: 9 };
    items[1] = { no: 2, name: "target_filter_values", kind: "scalar", repeat: 1, T: 6 };
    tmp = new tmp(
      "discord_protos.discord_experimentation.v1.UnitIdMatchesFilterSnapshot",
      items,
      { "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_UTILITY" },
      new.target,
    );
    // ThrowIfThisInitialized (0x7c)
    return tmp;
  }
}
const prototype39 = UnitIdMatchesFilterSnapshot$Type.prototype;
prototype39["create"] = function create(arr) {
  obj = { filterSnapshotName: "", targetFilterValues: [] };
  const _Object = Object;
  obj = { enumerable: false, value: this };
  _Object.defineProperty(obj, _mod1306.MESSAGE_TYPE, obj);
  if (undefined !== arr) {
    const result = _mod1306.reflectionMergePartial(this, obj, arr);
    const tmpResult = _mod1306;
  }
  return obj;
};
prototype39["internalBinaryRead"] = function internalBinaryRead(pos, arg1, readUnknownField) {
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
        obj.filterSnapshotName = pos.string();
      } else if (2 === tmp5) {
        let tmp22 = require;
        let tmp23 = dependencyMap;
        if (tmp6 === _mod1306.WireType.LengthDelimited) {
          let sum1 = pos.int32() + pos.pos;
          if (pos.pos < sum1) {
            do {
              let targetFilterValues = obj.targetFilterValues;
              let str5 = pos.fixed64();
              let arr = targetFilterValues.push(str5.toString());
              pos = pos.pos;
            } while (pos < sum1);
          }
        } else {
          let targetFilterValues1 = obj.targetFilterValues;
          let str4 = pos.fixed64();
          arr = targetFilterValues1.push(str4.toString());
        }
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
prototype39["internalBinaryWrite"] = function internalBinaryWrite(filterSnapshotName, tag, writeUnknownFields) {
  let length;
  if ("" !== filterSnapshotName.filterSnapshotName) {
    tag.tag(1, _mod1306.WireType.LengthDelimited).string(filterSnapshotName.filterSnapshotName);
    const tagResult = tag.tag(1, _mod1306.WireType.LengthDelimited);
  }
  if (filterSnapshotName.targetFilterValues.length) {
    tag.tag(2, _mod1306.WireType.LengthDelimited).fork();
    let num3 = 0;
    if (0 < filterSnapshotName.targetFilterValues.length) {
      do {
        let fixed64Result = tag.fixed64(filterSnapshotName.targetFilterValues[num3]);
        num3 = num3 + 1;
        length = filterSnapshotName.targetFilterValues.length;
      } while (num3 < length);
    }
    const joined = tag.join();
    const tagResult1 = tag.tag(2, _mod1306.WireType.LengthDelimited);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = _mod1306.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, filterSnapshotName, tag);
  }
  return tag;
};
const items37 = [
  { no: 1, name: "filter_snapshot_name", kind: "scalar", T: 9 },
  { no: 2, name: "target_filter_values", kind: "scalar", repeat: 1, T: 6 },
];
const fixed64ValueType7 = new Fixed64Value$Type(
  "discord_protos.discord_experimentation.v1.UnitIdMatchesFilterSnapshot",
  items37,
  { "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_UTILITY" },
  tmp5,
  tmp4,
  tmp3,
  "create",
  "internalBinaryRead",
  "internalBinaryWrite",
  tmp2,
  undefined,
);
// ThrowIfThisInitialized (0x7c)
class GuildIds$Type extends MessageType40 {
  constructor() {
    items = [];
    items[0] = { no: 1, name: "guild_ids", kind: "scalar", repeat: 1, T: 6 };
    tmp = new tmp(
      "discord_protos.discord_experimentation.v1.GuildIds",
      items,
      {
        "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_GUILD",
        "discord_protos.discord_experimentation.v1.filter_evaluation_mode": "FILTER_EVALUATION_MODE_LAZY",
      },
      new.target,
    );
    // ThrowIfThisInitialized (0x7c)
    return tmp;
  }
}
const prototype40 = GuildIds$Type.prototype;
prototype40["create"] = function create(arr) {
  obj = { guildIds: [] };
  const _Object = Object;
  obj = { enumerable: false, value: this };
  _Object.defineProperty(obj, _mod1306.MESSAGE_TYPE, obj);
  if (undefined !== arr) {
    const result = _mod1306.reflectionMergePartial(this, obj, arr);
    const tmpResult = _mod1306;
  }
  return obj;
};
prototype40["internalBinaryRead"] = function internalBinaryRead(pos, arg1, readUnknownField) {
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
        if (tmp6 === _mod1306.WireType.LengthDelimited) {
          let sum1 = pos.int32() + pos.pos;
          if (pos.pos < sum1) {
            do {
              let guildIds = obj.guildIds;
              let str5 = pos.fixed64();
              let arr = guildIds.push(str5.toString());
              pos = pos.pos;
            } while (pos < sum1);
          }
        } else {
          let guildIds1 = obj.guildIds;
          let str4 = pos.fixed64();
          arr = guildIds1.push(str4.toString());
        }
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
prototype40["internalBinaryWrite"] = function internalBinaryWrite(guildIds, tag, writeUnknownFields) {
  let length;
  if (guildIds.guildIds.length) {
    tag.tag(1, _mod1306.WireType.LengthDelimited).fork();
    let num2 = 0;
    if (0 < guildIds.guildIds.length) {
      do {
        let fixed64Result = tag.fixed64(guildIds.guildIds[num2]);
        num2 = num2 + 1;
        length = guildIds.guildIds.length;
      } while (num2 < length);
    }
    const joined = tag.join();
    const tagResult = tag.tag(1, _mod1306.WireType.LengthDelimited);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = _mod1306.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, guildIds, tag);
  }
  return tag;
};
const items38 = [{ no: 1, name: "guild_ids", kind: "scalar", repeat: 1, T: 6 }];
const fixed64ValueType8 = new Fixed64Value$Type(
  "discord_protos.discord_experimentation.v1.GuildIds",
  items38,
  {
    "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_GUILD",
    "discord_protos.discord_experimentation.v1.filter_evaluation_mode": "FILTER_EVALUATION_MODE_LAZY",
  },
  tmp5,
  tmp4,
  tmp3,
  "create",
  "internalBinaryRead",
  "internalBinaryWrite",
  GuildIds$Type,
  undefined,
  tmp,
  arg1,
  dependencyMap,
  obj,
  obj,
  obj,
  obj1,
  new.target,
  defineProperty,
  ruleType,
  filterType,
  overrideType,
  overrideType1,
  overrideType2,
  overrideType3,
  overrideType4,
  overrideType5,
  overrideType6,
  items8,
  items81,
  items82,
  clientLocation_LocationType,
  clientLocation_LocationType1,
  clientLocation_LocationType2,
  clientLocation_LocationType3,
  clientLocation_LocationType4,
  items16,
  items161,
  items162,
  items163,
  sDKVersionSpecifierType,
  items21,
  items211,
  items212,
  items213,
  items214,
  clientRequiredChangesType,
  clientRequiredChangesType1,
  items28,
  fixed64ValueType,
  fixed64ValueType1,
  fixed64ValueType2,
  fixed64ValueType3,
  fixed64ValueType4,
  fixed64ValueType5,
  fixed64ValueType6,
  fixed64ValueType7,
  Fixed64Value$Type,
);
// ThrowIfThisInitialized (0x7c)
class GuildMemberCountRange$Type extends MessageType41 {
  constructor() {
    obj = {
      no: 1,
      name: "min_count",
      kind: "message",
      T() {
        return callback(1336).UInt32Value;
      },
    };
    items = [,];
    items[0] = obj;
    items[1] = {
      no: 2,
      name: "max_count",
      kind: "message",
      T() {
        return callback(1336).UInt32Value;
      },
    };
    tmp = new tmp(
      "discord_protos.discord_experimentation.v1.GuildMemberCountRange",
      items,
      {
        "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_GUILD",
        "discord_protos.discord_experimentation.v1.filter_evaluation_mode": "FILTER_EVALUATION_MODE_STICKY",
      },
      new.target,
    );
    // ThrowIfThisInitialized (0x7c)
    return tmp;
  }
}
const prototype41 = GuildMemberCountRange$Type.prototype;
prototype41["create"] = function create(arr) {
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
prototype41["internalBinaryRead"] = function internalBinaryRead(pos, arg1, readUnknownField) {
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
        let UInt32Value2 = defineProperty2.UInt32Value;
        let tmp29 = UInt32Value2;
        let tmp30 = pos;
        let tmp31 = readUnknownField;
        obj.minCount = UInt32Value2.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.minCount);
      } else if (2 === tmp5) {
        let tmp22 = require;
        let tmp23 = dependencyMap;
        let UInt32Value = defineProperty2.UInt32Value;
        let tmp24 = UInt32Value;
        let tmp25 = pos;
        let tmp26 = readUnknownField;
        obj.maxCount = UInt32Value.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.maxCount);
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
prototype41["internalBinaryWrite"] = function internalBinaryWrite(minCount, tag, writeUnknownFields) {
  if (minCount.minCount) {
    const UInt32Value = defineProperty2.UInt32Value;
    const tagResult = tag.tag(1, _mod1306.WireType.LengthDelimited);
    const joined = UInt32Value.internalBinaryWrite(
      minCount.minCount,
      tag.tag(1, _mod1306.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    ).join();
    const internalBinaryWriteResult = UInt32Value.internalBinaryWrite(
      minCount.minCount,
      tag.tag(1, _mod1306.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    );
  }
  if (minCount.maxCount) {
    const UInt32Value2 = defineProperty2.UInt32Value;
    const tagResult1 = tag.tag(2, _mod1306.WireType.LengthDelimited);
    const joined1 = UInt32Value2.internalBinaryWrite(
      minCount.maxCount,
      tag.tag(2, _mod1306.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    ).join();
    const internalBinaryWriteResult1 = UInt32Value2.internalBinaryWrite(
      minCount.maxCount,
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
    onWrite(this.typeName, minCount, tag);
  }
  return tag;
};
const items39 = [
  {
    no: 1,
    name: "min_count",
    kind: "message",
    T() {
      return callback(1336).UInt32Value;
    },
  },
  {
    no: 2,
    name: "max_count",
    kind: "message",
    T() {
      return callback(1336).UInt32Value;
    },
  },
];
const guildIdsType = new GuildIds$Type(
  "discord_protos.discord_experimentation.v1.GuildMemberCountRange",
  items39,
  {
    "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_GUILD",
    "discord_protos.discord_experimentation.v1.filter_evaluation_mode": "FILTER_EVALUATION_MODE_STICKY",
  },
  tmp5,
  tmp4,
  GuildMemberCountRange$Type,
  "create",
  "internalBinaryRead",
  "internalBinaryWrite",
  GuildIds$Type,
  undefined,
  tmp,
  arg1,
  dependencyMap,
  obj,
  obj,
  obj,
  obj1,
  new.target,
  defineProperty,
  ruleType,
  filterType,
  overrideType,
  overrideType1,
  overrideType2,
  overrideType3,
  overrideType4,
  overrideType5,
  overrideType6,
  items8,
  items81,
  items82,
  clientLocation_LocationType,
  clientLocation_LocationType1,
  clientLocation_LocationType2,
  clientLocation_LocationType3,
  clientLocation_LocationType4,
  items16,
  items161,
  items162,
  items163,
  sDKVersionSpecifierType,
  items21,
  items211,
  items212,
  items213,
  items214,
  clientRequiredChangesType,
  clientRequiredChangesType1,
  items28,
  fixed64ValueType,
  fixed64ValueType1,
  fixed64ValueType2,
  fixed64ValueType3,
  fixed64ValueType4,
  fixed64ValueType5,
  fixed64ValueType6,
  fixed64ValueType7,
  fixed64ValueType8,
  items39,
  items29,
  new.target,
  exports,
);
// ThrowIfThisInitialized (0x7c)
class GuildIdRange$Type extends MessageType42 {
  constructor() {
    obj = {
      no: 1,
      name: "min_id",
      kind: "message",
      T() {
        return closure_34;
      },
    };
    items = [,];
    items[0] = obj;
    items[1] = {
      no: 2,
      name: "max_id",
      kind: "message",
      T() {
        return closure_34;
      },
    };
    tmp = new tmp(
      "discord_protos.discord_experimentation.v1.GuildIdRange",
      items,
      {
        "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_GUILD",
        "discord_protos.discord_experimentation.v1.filter_evaluation_mode": "FILTER_EVALUATION_MODE_LAZY",
      },
      new.target,
    );
    // ThrowIfThisInitialized (0x7c)
    return tmp;
  }
}
const prototype42 = GuildIdRange$Type.prototype;
prototype42["create"] = function create(arr) {
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
prototype42["internalBinaryRead"] = function internalBinaryRead(pos, arg1, readUnknownField) {
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
        let tmp26 = items28;
        let tmp27 = items28;
        let tmp28 = pos;
        let tmp29 = readUnknownField;
        obj.minId = items28.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.minId);
      } else if (2 === tmp5) {
        let tmp22 = items28;
        let tmp23 = items28;
        let tmp24 = pos;
        let tmp25 = readUnknownField;
        obj.maxId = items28.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.maxId);
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
prototype42["internalBinaryWrite"] = function internalBinaryWrite(minId, tag, writeUnknownFields) {
  if (minId.minId) {
    const tagResult = tag.tag(1, _mod1306.WireType.LengthDelimited);
    const joined = items28
      .internalBinaryWrite(minId.minId, tag.tag(1, _mod1306.WireType.LengthDelimited).fork(), writeUnknownFields)
      .join();
    const internalBinaryWriteResult = items28.internalBinaryWrite(
      minId.minId,
      tag.tag(1, _mod1306.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    );
  }
  if (minId.maxId) {
    const tagResult1 = tag.tag(2, _mod1306.WireType.LengthDelimited);
    const joined1 = items28
      .internalBinaryWrite(minId.maxId, tag.tag(2, _mod1306.WireType.LengthDelimited).fork(), writeUnknownFields)
      .join();
    const internalBinaryWriteResult1 = items28.internalBinaryWrite(
      minId.maxId,
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
    onWrite(this.typeName, minId, tag);
  }
  return tag;
};
const items40 = [
  {
    no: 1,
    name: "min_id",
    kind: "message",
    T() {
      return closure_34;
    },
  },
];
const obj22 = {
  no: 2,
  name: "max_id",
  kind: "message",
  T() {
    return closure_34;
  },
};
items40[1] = obj22;
const guildMemberCountRangeType = new GuildMemberCountRange$Type(
  "discord_protos.discord_experimentation.v1.GuildIdRange",
  items40,
  {
    "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_GUILD",
    "discord_protos.discord_experimentation.v1.filter_evaluation_mode": "FILTER_EVALUATION_MODE_LAZY",
  },
  tmp5,
  GuildIdRange$Type,
  GuildMemberCountRange$Type,
  "create",
  "internalBinaryRead",
  "internalBinaryWrite",
  items40,
  undefined,
  tmp,
  arg1,
  dependencyMap,
  obj,
  obj,
  obj,
  obj1,
  new.target,
  defineProperty,
  ruleType,
  filterType,
  overrideType,
  overrideType1,
  overrideType2,
  overrideType3,
  overrideType4,
  overrideType5,
  overrideType6,
  items8,
  items81,
  items82,
  clientLocation_LocationType,
  clientLocation_LocationType1,
  clientLocation_LocationType2,
  clientLocation_LocationType3,
  clientLocation_LocationType4,
  items16,
  items161,
  items162,
  items163,
  sDKVersionSpecifierType,
  items21,
  items211,
  items212,
  items213,
  items214,
  clientRequiredChangesType,
  clientRequiredChangesType1,
  items28,
  fixed64ValueType,
  fixed64ValueType1,
  fixed64ValueType2,
  fixed64ValueType3,
  fixed64ValueType4,
  fixed64ValueType5,
  fixed64ValueType6,
  fixed64ValueType7,
  fixed64ValueType8,
  guildIdsType,
  items29,
  new.target,
  exports,
  obj22,
);
// ThrowIfThisInitialized (0x7c)
class GuildHasFeature$Type extends MessageType43 {
  constructor() {
    items = [];
    items[0] = { no: 1, name: "features", kind: "scalar", repeat: 2, T: 9 };
    tmp = new tmp(
      "discord_protos.discord_experimentation.v1.GuildHasFeature",
      items,
      {
        "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_GUILD",
        "discord_protos.discord_experimentation.v1.filter_evaluation_mode": "FILTER_EVALUATION_MODE_STICKY",
      },
      new.target,
    );
    // ThrowIfThisInitialized (0x7c)
    return tmp;
  }
}
const prototype43 = GuildHasFeature$Type.prototype;
prototype43["create"] = function create(arr) {
  obj = { features: [] };
  const _Object = Object;
  obj = { enumerable: false, value: this };
  _Object.defineProperty(obj, _mod1306.MESSAGE_TYPE, obj);
  if (undefined !== arr) {
    const result = _mod1306.reflectionMergePartial(this, obj, arr);
    const tmpResult = _mod1306;
  }
  return obj;
};
prototype43["internalBinaryRead"] = function internalBinaryRead(pos, arg1, readUnknownField) {
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
        let features = obj.features;
        let arr = features.push(pos.string());
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
prototype43["internalBinaryWrite"] = function internalBinaryWrite(features, tag, writeUnknownFields) {
  let length;
  let num = 0;
  if (0 < features.features.length) {
    do {
      let tmp = require;
      let tmp2 = dependencyMap;
      let tagResult = tag.tag(1, _mod1306.WireType.LengthDelimited);
      let stringResult = tagResult.string(features.features[num]);
      num = num + 1;
      length = features.features.length;
    } while (num < length);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = _mod1306.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, features, tag);
  }
  return tag;
};
const items41 = [];
const obj23 = { no: 1, name: "features", kind: "scalar", repeat: 2, T: 9 };
items41[0] = obj23;
const guildIdRangeType = new GuildIdRange$Type(
  "discord_protos.discord_experimentation.v1.GuildHasFeature",
  items41,
  {
    "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_GUILD",
    "discord_protos.discord_experimentation.v1.filter_evaluation_mode": "FILTER_EVALUATION_MODE_STICKY",
  },
  GuildHasFeature$Type,
  GuildIdRange$Type,
  items41,
  "create",
  "internalBinaryRead",
  "internalBinaryWrite",
  items40,
  undefined,
  tmp,
  arg1,
  dependencyMap,
  obj,
  obj,
  obj,
  obj1,
  new.target,
  defineProperty,
  ruleType,
  filterType,
  overrideType,
  overrideType1,
  overrideType2,
  overrideType3,
  overrideType4,
  overrideType5,
  overrideType6,
  items8,
  items81,
  items82,
  clientLocation_LocationType,
  clientLocation_LocationType1,
  clientLocation_LocationType2,
  clientLocation_LocationType3,
  clientLocation_LocationType4,
  items16,
  items161,
  items162,
  items163,
  sDKVersionSpecifierType,
  items21,
  items211,
  items212,
  items213,
  items214,
  clientRequiredChangesType,
  clientRequiredChangesType1,
  items28,
  fixed64ValueType,
  fixed64ValueType1,
  fixed64ValueType2,
  fixed64ValueType3,
  fixed64ValueType4,
  fixed64ValueType5,
  fixed64ValueType6,
  fixed64ValueType7,
  fixed64ValueType8,
  guildIdsType,
  guildMemberCountRangeType,
  new.target,
  exports,
  obj23,
  undefined,
);
// ThrowIfThisInitialized (0x7c)
class InstallationIds$Type extends MessageType44 {
  constructor() {
    items = [];
    items[0] = { no: 1, name: "installation_ids", kind: "scalar", repeat: 1, T: 6 };
    tmp = new tmp(
      "discord_protos.discord_experimentation.v1.InstallationIds",
      items,
      { "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_CLIENT" },
      new.target,
    );
    // ThrowIfThisInitialized (0x7c)
    return tmp;
  }
}
const prototype44 = InstallationIds$Type.prototype;
prototype44["create"] = function create(arr) {
  obj = { installationIds: [] };
  const _Object = Object;
  obj = { enumerable: false, value: this };
  _Object.defineProperty(obj, _mod1306.MESSAGE_TYPE, obj);
  if (undefined !== arr) {
    const result = _mod1306.reflectionMergePartial(this, obj, arr);
    const tmpResult = _mod1306;
  }
  return obj;
};
prototype44["internalBinaryRead"] = function internalBinaryRead(pos, arg1, readUnknownField) {
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
        if (tmp6 === _mod1306.WireType.LengthDelimited) {
          let sum1 = pos.int32() + pos.pos;
          if (pos.pos < sum1) {
            do {
              let installationIds = obj.installationIds;
              let str5 = pos.fixed64();
              let arr = installationIds.push(str5.toString());
              pos = pos.pos;
            } while (pos < sum1);
          }
        } else {
          let installationIds1 = obj.installationIds;
          let str4 = pos.fixed64();
          arr = installationIds1.push(str4.toString());
        }
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
prototype44["internalBinaryWrite"] = function internalBinaryWrite(installationIds, tag, writeUnknownFields) {
  let length;
  if (installationIds.installationIds.length) {
    tag.tag(1, _mod1306.WireType.LengthDelimited).fork();
    let num2 = 0;
    if (0 < installationIds.installationIds.length) {
      do {
        let fixed64Result = tag.fixed64(installationIds.installationIds[num2]);
        num2 = num2 + 1;
        length = installationIds.installationIds.length;
      } while (num2 < length);
    }
    const joined = tag.join();
    const tagResult = tag.tag(1, _mod1306.WireType.LengthDelimited);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = _mod1306.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, installationIds, tag);
  }
  return tag;
};
const items42 = [{ no: 1, name: "installation_ids", kind: "scalar", repeat: 1, T: 6 }];
const tmp51 = new "create"(
  "discord_protos.discord_experimentation.v1.InstallationIds",
  items42,
  { "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_CLIENT" },
  GuildHasFeature$Type,
  GuildIdRange$Type,
  InstallationIds$Type,
  "create",
  items42,
  "internalBinaryWrite",
  new.target,
  undefined,
  tmp,
  arg1,
  dependencyMap,
  obj,
  obj,
  obj,
  obj1,
  new.target,
  defineProperty,
  ruleType,
  filterType,
  overrideType,
  overrideType1,
  overrideType2,
  overrideType3,
  overrideType4,
  overrideType5,
  overrideType6,
  items8,
  items81,
  items82,
  clientLocation_LocationType,
  clientLocation_LocationType1,
  clientLocation_LocationType2,
  clientLocation_LocationType3,
  clientLocation_LocationType4,
  items16,
  items161,
  items162,
  items163,
  sDKVersionSpecifierType,
  items21,
  items211,
  items212,
  items213,
  items214,
  clientRequiredChangesType,
  clientRequiredChangesType1,
  items28,
  fixed64ValueType,
  fixed64ValueType1,
  fixed64ValueType2,
  fixed64ValueType3,
  fixed64ValueType4,
  fixed64ValueType5,
  fixed64ValueType6,
  fixed64ValueType7,
  fixed64ValueType8,
  guildIdsType,
  guildMemberCountRangeType,
  guildIdRangeType,
  exports,
);
// ThrowIfThisInitialized (0x7c)
let closure_47 = tmp51;
let result = require("set").fileFinishedImporting(
  "../discord_common/js/packages/protos/discord_protos/discord_experimentation/v1/rules.tsx",
);

export const Rule_Type = obj;
export const Rule_Subtype = obj;
export const FilterCategory = obj;
export const FilterEvaluationMode = obj1;
export const Rule = defineProperty;
export const Override = ruleType;
export const Filter = filterType;
export const StaffUsers = overrideType;
export const UserInGuild = overrideType1;
export const UserIds = overrideType2;
export const UserLocale = overrideType3;
export const ClientLocale = overrideType4;
export const ClientSystemLocale = overrideType5;
export const ClientLocation = overrideType6;
export const ClientLocation_Place = items8;
export const ClientLocation_ISORegion = items81;
export const ClientLocation_Location = items82;
export const UserLocation = clientLocation_LocationType;
export const UserStoreCountry = clientLocation_LocationType1;
export const ClientIP = clientLocation_LocationType2;
export const UserIP = clientLocation_LocationType3;
export const ClientOperatingSystem = clientLocation_LocationType4;
export const SDKVersion = items16;
export const SDKVersionRange = items161;
export const SDKVersionRangeBound = items162;
export const SDKVersionSpecifier = items163;
export const ClientPlatform = sDKVersionSpecifierType;
export const PlatformVersion = items21;
export const PlatformVersionRange = items211;
export const PlatformVersionRangeBound = items212;
export const PlatformVersionSpecifier = items213;
export const ClientRequiredChanges = items214;
export const UserIsBot = clientRequiredChangesType;
export const UserAgeRange = clientRequiredChangesType1;
export const Fixed64Value = items28;
export const UserIDRange = fixed64ValueType;
export const UserHasFlag = fixed64ValueType1;
export const UnitIdInRangeByHash = fixed64ValueType2;
export const ClientReleaseChannel = fixed64ValueType3;
export const Always = fixed64ValueType4;
export const UnitIdInExperiment = fixed64ValueType5;
export const UserPremiumType = fixed64ValueType6;
export const UnitIdMatchesFilterSnapshot = fixed64ValueType7;
export const GuildIds = fixed64ValueType8;
export const GuildMemberCountRange = guildIdsType;
export const GuildIdRange = guildMemberCountRangeType;
export const GuildHasFeature = guildIdRangeType;
export const InstallationIds = tmp51;
