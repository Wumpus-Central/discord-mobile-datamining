// === Module 7538: rules ===

// Module 7538 (rules)
import _mod1198 from "module_1198" /* 1198 */;
import wrappers from "wrappers" /* 1228 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let internalBinaryWrite, internalBinaryWrite2, internalBinaryWrite3, internalBinaryWrite4, internalBinaryWrite5, internalBinaryWrite6, internalBinaryWrite7, internalBinaryWrite8, obj;

let tmp2;
let tmp4;
let tmp5;
const T2 = function T() {
  return filterType;
};
const T3 = function T() {
  return ruleType;
};
const T4 = function T() {
  return require("wrappers").StringValue;
};
function T() {
  return items83;
}
const T5 = function T() {
  return items82;
};
const T6 = function T() {
  return items81;
};
const T7 = function T() {
  return items83;
};
const T8 = function T() {
  return items161;
};
const T9 = function T() {
  return items161;
};
const T10 = function T() {
  return items161;
};
const T11 = function T() {
  return items161;
};
const T12 = function T() {
  return items161;
};
const T13 = function T() {
  return items161;
};
const T14 = function T() {
  return items161;
};
const T15 = function T() {
  return items162;
};
const T16 = function T() {
  return items163;
};
const T17 = function T() {
  return items163;
};
const T18 = function T() {
  return items164;
};
const T19 = function T() {
  return items211;
};
const T20 = function T() {
  return items211;
};
const T21 = function T() {
  return items211;
};
const T22 = function T() {
  return items211;
};
const T23 = function T() {
  return items215;
};
const T24 = function T() {
  return items212;
};
const T25 = function T() {
  return items213;
};
const T26 = function T() {
  return items213;
};
const T27 = function T() {
  return items214;
};
const T28 = function T() {
  return require("wrappers").UInt64Value;
};
const T29 = function T() {
  return require("wrappers").UInt32Value;
};
const T30 = function T() {
  return require("wrappers").UInt32Value;
};
const T31 = function T() {
  return items281;
};
const T32 = function T() {
  return items281;
};
const T33 = function T() {
  return require("wrappers").UInt32Value;
};
const T34 = function T() {
  return require("wrappers").UInt32Value;
};
const T35 = function T() {
  return items281;
};
const T36 = function T() {
  return items281;
};
const Rule_Type = { UNSPECIFIED: 0, [0]: "UNSPECIFIED", EXCLUDE: 1, [1]: "EXCLUDE", OVERRIDE: 2, [2]: "OVERRIDE", REQUIRE: 3, [3]: "REQUIRE", ASSIGNMENT: 4, [4]: "ASSIGNMENT" };
let obj2 = { REGULAR: 0, [0]: "REGULAR", HOLDOUT: 1, [1]: "HOLDOUT", ROLLOUT: 2, [2]: "ROLLOUT" };
let obj3 = { UNSPECIFIED: 0, [0]: "UNSPECIFIED", USER: 1, [1]: "USER", CLIENT: 2, [2]: "CLIENT", GUILD: 3, [3]: "GUILD", UTILITY: 4, [4]: "UTILITY" };
const obj4 = { UNSPECIFIED: 0, [0]: "UNSPECIFIED", STICKY: 1, [1]: "STICKY", LAZY: 2, [2]: "LAZY" };
const MessageType = _mod1198.MessageType;
class Rule$Type extends MessageType {
  constructor() {
    obj = {
      no: 1,
      name: "type",
      kind: "enum",
      T() {
        const items = ["discord_protos.discord_experimentation.v1.Rule.Type", obj];
        return items;
      }
    };
    let items = [obj, { no: 2, name: "filters", kind: "message", repeat: 1, T: T2 }, { no: 3, name: "override", kind: "message", T: T3 }, { no: 4, name: "is_sunset_rule", kind: "scalar", T: 8 }, , , ];
    obj2 = { no: 5, name: "subtype", kind: "enum", T };
    class T {
      constructor() {
        const items = ["discord_protos.discord_experimentation.v1.Rule.Subtype", obj2];
        return items;
      }
    }
    items[4] = obj2;
    items[5] = { no: 6, name: "hash", kind: "scalar", T: 9 };
    items[6] = { no: 7, name: "title", kind: "message", T: T4 };
    const tmp2 = new tmp("discord_protos.discord_experimentation.v1.Rule", items, T);
    return tmp2;
  }
  create(arr) {
    obj = { type: 0, filters: [], isSunsetRule: false, subtype: 0, hash: "" };
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
          obj.type = pos.int32();
        } else if (2 === tmp5) {
          let filters = obj.filters;
          let arr = filters.push(filterType.internalBinaryRead(pos, pos.uint32(), readUnknownField));
        } else if (3 === tmp5) {
          obj.override = ruleType.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.override);
        } else if (4 === tmp5) {
          obj.isSunsetRule = pos.bool();
        } else if (5 === tmp5) {
          obj.subtype = pos.int32();
        } else if (6 === tmp5) {
          obj.hash = pos.string();
        } else if (7 === tmp5) {
          let StringValue = wrappers.StringValue;
          obj.title = StringValue.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.title);
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
  internalBinaryWrite(type, tag, writeUnknownFields) {
    let length;
    if (0 !== type.type) {
      const tagResult = tag.tag(1, _mod1198.WireType.Varint);
      tagResult.int32(type.type);
    }
    let num2 = 0;
    if (0 < type.filters.length) {
      do {
        internalBinaryWrite = filterType.internalBinaryWrite;
        let tmp5 = type.filters[num2];
        let tagResult1 = tag.tag(2, _mod1198.WireType.LengthDelimited);
        let internalBinaryWriteResult = internalBinaryWrite(tmp5, tagResult1.fork(), writeUnknownFields);
        let joined = internalBinaryWriteResult.join();
        num2 = num2 + 1;
        length = type.filters.length;
      } while (num2 < length);
    }
    if (type.override) {
      internalBinaryWrite2 = ruleType.internalBinaryWrite;
      const override = type.override;
      const tagResult2 = tag.tag(3, _mod1198.WireType.LengthDelimited);
      const internalBinaryWrite2Result = internalBinaryWrite2(override, tagResult2.fork(), writeUnknownFields);
      const joined1 = internalBinaryWrite2Result.join();
    }
    if (false !== type.isSunsetRule) {
      const tagResult3 = tag.tag(4, _mod1198.WireType.Varint);
      tagResult3.bool(type.isSunsetRule);
    }
    if (0 !== type.subtype) {
      const tagResult4 = tag.tag(5, _mod1198.WireType.Varint);
      tagResult4.int32(type.subtype);
    }
    if ("" !== type.hash) {
      const tagResult5 = tag.tag(6, _mod1198.WireType.LengthDelimited);
      tagResult5.string(type.hash);
    }
    if (type.title) {
      const StringValue = wrappers.StringValue;
      internalBinaryWrite3 = StringValue.internalBinaryWrite;
      const title = type.title;
      const tagResult6 = tag.tag(7, _mod1198.WireType.LengthDelimited);
      const internalBinaryWrite3Result = internalBinaryWrite3(title, tagResult6.fork(), writeUnknownFields);
      const joined2 = internalBinaryWrite3Result.join();
    }
    let onWrite = writeUnknownFields.writeUnknownFields;
    if (false !== onWrite) {
      if (1 == onWrite) {
        onWrite = _mod1198.UnknownFieldHandler.onWrite;
      }
      const self = this;
      onWrite(this.typeName, type, tag);
    }
    return tag;
  }
}
const prototype = Rule$Type.prototype;
let items = [, , , , , , ];
const obj5 = {
  no: 1,
  name: "type",
  kind: "enum",
  T() {
    const items = ["discord_protos.discord_experimentation.v1.Rule.Type", obj];
    return items;
  }
};
items[0] = obj5;
items[1] = { no: 2, name: "filters", kind: "message", repeat: 1, T: T2 };
items[2] = { no: 3, name: "override", kind: "message", T: T3 };
items[3] = { no: 4, name: "is_sunset_rule", kind: "scalar", T: 8 };
items[4] = {
  no: 5,
  name: "subtype",
  kind: "enum",
  T() {
    const items = ["discord_protos.discord_experimentation.v1.Rule.Subtype", obj2];
    return items;
  }
};
items[5] = { no: 6, name: "hash", kind: "scalar", T: 9 };
items[6] = { no: 7, name: "title", kind: "message", T: T4 };
const defineProperty1 = new defineProperty("discord_protos.discord_experimentation.v1.Rule", items, tmp6, tmp5, tmp4, tmp3, "create", "internalBinaryRead", "internalBinaryWrite");
const MessageType2 = _mod1198.MessageType;
class Override$Type extends MessageType2 {
  constructor() {
    const items = [{ no: 1, name: "variation_id", kind: "scalar", T: 5 }];
    const tmp2 = new tmp("discord_protos.discord_experimentation.v1.Override", items, new.target);
    return tmp2;
  }
  create(arr) {
    obj = { variationId: 0 };
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
  internalBinaryWrite(variationId, tag, writeUnknownFields) {
    if (0 !== variationId.variationId) {
      const tagResult = tag.tag(1, _mod1198.WireType.Varint);
      tagResult.int32(variationId.variationId);
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
  }
}
const prototype2 = Override$Type.prototype;
const items1 = [{ no: 1, name: "variation_id", kind: "scalar", T: 5 }];
const ruleType = new Rule$Type("discord_protos.discord_experimentation.v1.Override", items1, tmp6, tmp5, tmp4, tmp3, "create", "internalBinaryRead", "internalBinaryWrite", tmp2);
const MessageType3 = _mod1198.MessageType;
class Filter$Type extends MessageType3 {
  constructor() {
    const items = [, , , , , , , , , , , , , , , , , , , , , , , , , , , , ];
    obj = {
      no: 2,
      name: "client_version",
      kind: "message",
      oneof: "filter",
      T() {
        return sDKVersionSpecifierType;
      }
    };
    items[0] = obj;
    items[1] = {
      no: 3,
      name: "client_os",
      kind: "message",
      oneof: "filter",
      T() {
        return clientLocation_LocationType4;
      }
    };
    items[2] = {
      no: 4,
      name: "staff",
      kind: "message",
      oneof: "filter",
      T() {
        return overrideType;
      }
    };
    items[3] = {
      no: 5,
      name: "user_in_guild",
      kind: "message",
      oneof: "filter",
      T() {
        return overrideType1;
      }
    };
    items[4] = {
      no: 6,
      name: "user_ids",
      kind: "message",
      oneof: "filter",
      T() {
        return overrideType2;
      }
    };
    items[5] = {
      no: 7,
      name: "client_locale",
      kind: "message",
      oneof: "filter",
      T() {
        return overrideType4;
      }
    };
    items[6] = {
      no: 8,
      name: "client_location",
      kind: "message",
      oneof: "filter",
      T() {
        return overrideType6;
      }
    };
    items[7] = {
      no: 9,
      name: "client_ip",
      kind: "message",
      oneof: "filter",
      T() {
        return clientLocation_LocationType2;
      }
    };
    items[8] = {
      no: 10,
      name: "user_locale",
      kind: "message",
      oneof: "filter",
      T() {
        return overrideType3;
      }
    };
    items[9] = {
      no: 11,
      name: "bot",
      kind: "message",
      oneof: "filter",
      T() {
        return clientRequiredChangesType;
      }
    };
    items[10] = {
      no: 12,
      name: "user_age_range",
      kind: "message",
      oneof: "filter",
      T() {
        return clientRequiredChangesType1;
      }
    };
    items[11] = {
      no: 13,
      name: "user_id_range",
      kind: "message",
      oneof: "filter",
      T() {
        return fixed64ValueType;
      }
    };
    items[12] = {
      no: 14,
      name: "user_has_flag",
      kind: "message",
      oneof: "filter",
      T() {
        return fixed64ValueType1;
      }
    };
    items[13] = {
      no: 15,
      name: "unit_id_in_range_by_hash",
      kind: "message",
      oneof: "filter",
      T() {
        return fixed64ValueType2;
      }
    };
    items[14] = {
      no: 16,
      name: "client_release_channel",
      kind: "message",
      oneof: "filter",
      T() {
        return fixed64ValueType3;
      }
    };
    items[15] = {
      no: 17,
      name: "always",
      kind: "message",
      oneof: "filter",
      T() {
        return fixed64ValueType4;
      }
    };
    items[16] = {
      no: 18,
      name: "client_system_locale",
      kind: "message",
      oneof: "filter",
      T() {
        return overrideType5;
      }
    };
    items[17] = {
      no: 19,
      name: "unit_id_in_experiment",
      kind: "message",
      oneof: "filter",
      T() {
        return fixed64ValueType5;
      }
    };
    items[18] = {
      no: 20,
      name: "user_premium_type",
      kind: "message",
      oneof: "filter",
      T() {
        return fixed64ValueType6;
      }
    };
    items[19] = {
      no: 21,
      name: "unit_id_matches_filter_snapshot",
      kind: "message",
      oneof: "filter",
      T() {
        return fixed64ValueType7;
      }
    };
    items[20] = {
      no: 22,
      name: "guild_ids",
      kind: "message",
      oneof: "filter",
      T() {
        return fixed64ValueType8;
      }
    };
    items[21] = {
      no: 23,
      name: "guild_id_range",
      kind: "message",
      oneof: "filter",
      T() {
        return guildMemberCountRangeType;
      }
    };
    items[22] = {
      no: 25,
      name: "guild_member_count_range",
      kind: "message",
      oneof: "filter",
      T() {
        return guildIdsType;
      }
    };
    items[23] = {
      no: 26,
      name: "guild_has_feature",
      kind: "message",
      oneof: "filter",
      T() {
        return guildIdRangeType;
      }
    };
    items[24] = {
      no: 27,
      name: "user_location",
      kind: "message",
      oneof: "filter",
      T() {
        return clientLocation_LocationType;
      }
    };
    items[25] = {
      no: 28,
      name: "user_ip",
      kind: "message",
      oneof: "filter",
      T() {
        return clientLocation_LocationType3;
      }
    };
    obj2 = { no: 29, name: "installation_ids", kind: "message", oneof: "filter", T };
    class T {
      constructor() {
        return internalBinaryWrite;
      }
    }
    items[26] = obj2;
    items[27] = {
      no: 31,
      name: "user_store_country",
      kind: "message",
      oneof: "filter",
      T() {
        return clientLocation_LocationType1;
      }
    };
    items[28] = { no: 30, name: "negate", kind: "scalar", T: 8 };
    const tmp2 = new tmp("discord_protos.discord_experimentation.v1.Filter", items, T);
    return tmp2;
  }
  create(arr) {
    obj = { filter: { oneofKind: "r" }, negate: false };
    const _Object = Object;
    obj2 = { enumerable: false, value: this };
    _Object.defineProperty(obj, _mod1198.MESSAGE_TYPE, obj2);
    if (undefined !== arr) {
      const tmpResult = _mod1198;
      const result = tmpResult.reflectionMergePartial(this, obj, arr);
    }
    return obj;
  }
  internalBinaryRead(pos, arg1, arg2, arg3) {
    const self = this;
    obj = arg3;
    if (arg3 == null) {
      obj = self.create();
    }
    if (pos.pos < pos.pos + arg1) {
      [r10019, r10020] = pos.tag();
      _slicedToArray(pos.tag(), 2);
    }
    return obj;
  }
  internalBinaryWrite(negate, tag, writeUnknownFields) {
    if ("clientVersion" === negate.filter.oneofKind) {
      internalBinaryWrite = sDKVersionSpecifierType.internalBinaryWrite;
      const clientVersion = negate.filter.clientVersion;
      const tagResult = tag.tag(2, _mod1198.WireType.LengthDelimited);
      const internalBinaryWriteResult = internalBinaryWrite(clientVersion, tagResult.fork(), writeUnknownFields);
      const joined = internalBinaryWriteResult.join();
    }
    if ("clientOs" === negate.filter.oneofKind) {
      internalBinaryWrite2 = clientLocation_LocationType4.internalBinaryWrite;
      const clientOs = negate.filter.clientOs;
      const tagResult1 = tag.tag(3, _mod1198.WireType.LengthDelimited);
      const internalBinaryWrite2Result = internalBinaryWrite2(clientOs, tagResult1.fork(), writeUnknownFields);
      const joined1 = internalBinaryWrite2Result.join();
    }
    if ("staff" === negate.filter.oneofKind) {
      internalBinaryWrite3 = overrideType.internalBinaryWrite;
      const staff = negate.filter.staff;
      const tagResult2 = tag.tag(4, _mod1198.WireType.LengthDelimited);
      const internalBinaryWrite3Result = internalBinaryWrite3(staff, tagResult2.fork(), writeUnknownFields);
      const joined2 = internalBinaryWrite3Result.join();
    }
    if ("userInGuild" === negate.filter.oneofKind) {
      internalBinaryWrite4 = overrideType1.internalBinaryWrite;
      const userInGuild = negate.filter.userInGuild;
      const tagResult3 = tag.tag(5, _mod1198.WireType.LengthDelimited);
      const internalBinaryWrite4Result = internalBinaryWrite4(userInGuild, tagResult3.fork(), writeUnknownFields);
      const joined3 = internalBinaryWrite4Result.join();
    }
    if ("userIds" === negate.filter.oneofKind) {
      internalBinaryWrite5 = overrideType2.internalBinaryWrite;
      const userIds = negate.filter.userIds;
      const tagResult4 = tag.tag(6, _mod1198.WireType.LengthDelimited);
      const internalBinaryWrite5Result = internalBinaryWrite5(userIds, tagResult4.fork(), writeUnknownFields);
      const joined4 = internalBinaryWrite5Result.join();
    }
    if ("clientLocale" === negate.filter.oneofKind) {
      internalBinaryWrite6 = overrideType4.internalBinaryWrite;
      const clientLocale = negate.filter.clientLocale;
      const tagResult5 = tag.tag(7, _mod1198.WireType.LengthDelimited);
      const internalBinaryWrite6Result = internalBinaryWrite6(clientLocale, tagResult5.fork(), writeUnknownFields);
      const joined5 = internalBinaryWrite6Result.join();
    }
    if ("clientLocation" === negate.filter.oneofKind) {
      internalBinaryWrite7 = overrideType6.internalBinaryWrite;
      const clientLocation = negate.filter.clientLocation;
      const tagResult6 = tag.tag(8, _mod1198.WireType.LengthDelimited);
      const internalBinaryWrite7Result = internalBinaryWrite7(clientLocation, tagResult6.fork(), writeUnknownFields);
      const joined6 = internalBinaryWrite7Result.join();
    }
    if ("clientIp" === negate.filter.oneofKind) {
      internalBinaryWrite8 = clientLocation_LocationType2.internalBinaryWrite;
      const clientIp = negate.filter.clientIp;
      const tagResult7 = tag.tag(9, _mod1198.WireType.LengthDelimited);
      const internalBinaryWrite8Result = internalBinaryWrite8(clientIp, tagResult7.fork(), writeUnknownFields);
      const joined7 = internalBinaryWrite8Result.join();
    }
    if ("userLocale" === negate.filter.oneofKind) {
      const internalBinaryWrite9 = overrideType3.internalBinaryWrite;
      const userLocale = negate.filter.userLocale;
      const tagResult8 = tag.tag(10, _mod1198.WireType.LengthDelimited);
      const internalBinaryWrite9Result = internalBinaryWrite9(userLocale, tagResult8.fork(), writeUnknownFields);
      const joined8 = internalBinaryWrite9Result.join();
    }
    if ("bot" === negate.filter.oneofKind) {
      const internalBinaryWrite10 = clientRequiredChangesType.internalBinaryWrite;
      const bot = negate.filter.bot;
      const tagResult9 = tag.tag(11, _mod1198.WireType.LengthDelimited);
      const result = internalBinaryWrite10(bot, tagResult9.fork(), writeUnknownFields);
      const joined9 = result.join();
    }
    if ("userAgeRange" === negate.filter.oneofKind) {
      const internalBinaryWrite11 = clientRequiredChangesType1.internalBinaryWrite;
      const userAgeRange = negate.filter.userAgeRange;
      const tagResult10 = tag.tag(12, _mod1198.WireType.LengthDelimited);
      const result1 = internalBinaryWrite11(userAgeRange, tagResult10.fork(), writeUnknownFields);
      const joined10 = result1.join();
    }
    if ("userIdRange" === negate.filter.oneofKind) {
      const internalBinaryWrite12 = fixed64ValueType.internalBinaryWrite;
      const userIdRange = negate.filter.userIdRange;
      const tagResult11 = tag.tag(13, _mod1198.WireType.LengthDelimited);
      const result2 = internalBinaryWrite12(userIdRange, tagResult11.fork(), writeUnknownFields);
      const joined11 = result2.join();
    }
    if ("userHasFlag" === negate.filter.oneofKind) {
      const internalBinaryWrite13 = fixed64ValueType1.internalBinaryWrite;
      const userHasFlag = negate.filter.userHasFlag;
      const tagResult12 = tag.tag(14, _mod1198.WireType.LengthDelimited);
      const result3 = internalBinaryWrite13(userHasFlag, tagResult12.fork(), writeUnknownFields);
      const joined12 = result3.join();
    }
    if ("unitIdInRangeByHash" === negate.filter.oneofKind) {
      const internalBinaryWrite14 = fixed64ValueType2.internalBinaryWrite;
      const unitIdInRangeByHash = negate.filter.unitIdInRangeByHash;
      const tagResult13 = tag.tag(15, _mod1198.WireType.LengthDelimited);
      const result4 = internalBinaryWrite14(unitIdInRangeByHash, tagResult13.fork(), writeUnknownFields);
      const joined13 = result4.join();
    }
    if ("clientReleaseChannel" === negate.filter.oneofKind) {
      const internalBinaryWrite15 = fixed64ValueType3.internalBinaryWrite;
      const clientReleaseChannel = negate.filter.clientReleaseChannel;
      const tagResult14 = tag.tag(16, _mod1198.WireType.LengthDelimited);
      const result5 = internalBinaryWrite15(clientReleaseChannel, tagResult14.fork(), writeUnknownFields);
      const joined14 = result5.join();
    }
    if ("always" === negate.filter.oneofKind) {
      const internalBinaryWrite16 = fixed64ValueType4.internalBinaryWrite;
      const always = negate.filter.always;
      const tagResult15 = tag.tag(17, _mod1198.WireType.LengthDelimited);
      const result6 = internalBinaryWrite16(always, tagResult15.fork(), writeUnknownFields);
      const joined15 = result6.join();
    }
    if ("clientSystemLocale" === negate.filter.oneofKind) {
      const internalBinaryWrite17 = overrideType5.internalBinaryWrite;
      const clientSystemLocale = negate.filter.clientSystemLocale;
      const tagResult16 = tag.tag(18, _mod1198.WireType.LengthDelimited);
      const result7 = internalBinaryWrite17(clientSystemLocale, tagResult16.fork(), writeUnknownFields);
      const joined16 = result7.join();
    }
    if ("unitIdInExperiment" === negate.filter.oneofKind) {
      const internalBinaryWrite18 = fixed64ValueType5.internalBinaryWrite;
      const unitIdInExperiment = negate.filter.unitIdInExperiment;
      const tagResult17 = tag.tag(19, _mod1198.WireType.LengthDelimited);
      const result8 = internalBinaryWrite18(unitIdInExperiment, tagResult17.fork(), writeUnknownFields);
      const joined17 = result8.join();
    }
    if ("userPremiumType" === negate.filter.oneofKind) {
      const internalBinaryWrite19 = fixed64ValueType6.internalBinaryWrite;
      const userPremiumType = negate.filter.userPremiumType;
      const tagResult18 = tag.tag(20, _mod1198.WireType.LengthDelimited);
      const result9 = internalBinaryWrite19(userPremiumType, tagResult18.fork(), writeUnknownFields);
      const joined18 = result9.join();
    }
    if ("unitIdMatchesFilterSnapshot" === negate.filter.oneofKind) {
      const internalBinaryWrite20 = fixed64ValueType7.internalBinaryWrite;
      const unitIdMatchesFilterSnapshot = negate.filter.unitIdMatchesFilterSnapshot;
      const tagResult19 = tag.tag(21, _mod1198.WireType.LengthDelimited);
      const result10 = internalBinaryWrite20(unitIdMatchesFilterSnapshot, tagResult19.fork(), writeUnknownFields);
      const joined19 = result10.join();
    }
    if ("guildIds" === negate.filter.oneofKind) {
      const internalBinaryWrite21 = fixed64ValueType8.internalBinaryWrite;
      const guildIds = negate.filter.guildIds;
      const tagResult20 = tag.tag(22, _mod1198.WireType.LengthDelimited);
      const result11 = internalBinaryWrite21(guildIds, tagResult20.fork(), writeUnknownFields);
      const joined20 = result11.join();
    }
    if ("guildIdRange" === negate.filter.oneofKind) {
      const internalBinaryWrite22 = guildMemberCountRangeType.internalBinaryWrite;
      const guildIdRange = negate.filter.guildIdRange;
      const tagResult21 = tag.tag(23, _mod1198.WireType.LengthDelimited);
      const result12 = internalBinaryWrite22(guildIdRange, tagResult21.fork(), writeUnknownFields);
      const joined21 = result12.join();
    }
    if ("guildMemberCountRange" === negate.filter.oneofKind) {
      const internalBinaryWrite23 = guildIdsType.internalBinaryWrite;
      const guildMemberCountRange = negate.filter.guildMemberCountRange;
      const tagResult22 = tag.tag(25, _mod1198.WireType.LengthDelimited);
      const result13 = internalBinaryWrite23(guildMemberCountRange, tagResult22.fork(), writeUnknownFields);
      const joined22 = result13.join();
    }
    if ("guildHasFeature" === negate.filter.oneofKind) {
      const internalBinaryWrite24 = guildIdRangeType.internalBinaryWrite;
      const guildHasFeature = negate.filter.guildHasFeature;
      const tagResult23 = tag.tag(26, _mod1198.WireType.LengthDelimited);
      const result14 = internalBinaryWrite24(guildHasFeature, tagResult23.fork(), writeUnknownFields);
      const joined23 = result14.join();
    }
    if ("userLocation" === negate.filter.oneofKind) {
      const internalBinaryWrite25 = clientLocation_LocationType.internalBinaryWrite;
      const userLocation = negate.filter.userLocation;
      const tagResult24 = tag.tag(27, _mod1198.WireType.LengthDelimited);
      const result15 = internalBinaryWrite25(userLocation, tagResult24.fork(), writeUnknownFields);
      const joined24 = result15.join();
    }
    if ("userIp" === negate.filter.oneofKind) {
      const internalBinaryWrite26 = clientLocation_LocationType3.internalBinaryWrite;
      const userIp = negate.filter.userIp;
      const tagResult25 = tag.tag(28, _mod1198.WireType.LengthDelimited);
      const result16 = internalBinaryWrite26(userIp, tagResult25.fork(), writeUnknownFields);
      const joined25 = result16.join();
    }
    if ("installationIds" === negate.filter.oneofKind) {
      const internalBinaryWrite27 = internalBinaryWrite.internalBinaryWrite;
      const installationIds = negate.filter.installationIds;
      const tagResult26 = tag.tag(29, _mod1198.WireType.LengthDelimited);
      const result17 = internalBinaryWrite27(installationIds, tagResult26.fork(), writeUnknownFields);
      const joined26 = result17.join();
    }
    if ("userStoreCountry" === negate.filter.oneofKind) {
      const internalBinaryWrite28 = clientLocation_LocationType1.internalBinaryWrite;
      const userStoreCountry = negate.filter.userStoreCountry;
      const tagResult27 = tag.tag(31, _mod1198.WireType.LengthDelimited);
      const result18 = internalBinaryWrite28(userStoreCountry, tagResult27.fork(), writeUnknownFields);
      const joined27 = result18.join();
    }
    if (false !== negate.negate) {
      const tagResult28 = tag.tag(30, _mod1198.WireType.Varint);
      tagResult28.bool(negate.negate);
    }
    let onWrite = writeUnknownFields.writeUnknownFields;
    if (false !== onWrite) {
      if (1 == onWrite) {
        onWrite = _mod1198.UnknownFieldHandler.onWrite;
      }
      const self = this;
      onWrite(this.typeName, negate, tag);
    }
    return tag;
  }
}
const prototype3 = Filter$Type.prototype;
const filterType = new Filter$Type();
const MessageType4 = _mod1198.MessageType;
class StaffUsers$Type extends MessageType4 {
  constructor() {
    const items = [{ no: 1, name: "work_accounts", kind: "scalar", T: 8 }, { no: 2, name: "personal_accounts", kind: "scalar", T: 8 }];
    const tmp2 = new tmp("discord_protos.discord_experimentation.v1.StaffUsers", items, { "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_USER" }, new.target);
    return tmp2;
  }
  create(arr) {
    obj = { workAccounts: false, personalAccounts: false };
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
  internalBinaryWrite(workAccounts, tag, writeUnknownFields) {
    if (false !== workAccounts.workAccounts) {
      const tagResult = tag.tag(1, _mod1198.WireType.Varint);
      tagResult.bool(workAccounts.workAccounts);
    }
    if (false !== workAccounts.personalAccounts) {
      const tagResult1 = tag.tag(2, _mod1198.WireType.Varint);
      tagResult1.bool(workAccounts.personalAccounts);
    }
    let onWrite = writeUnknownFields.writeUnknownFields;
    if (false !== onWrite) {
      if (1 == onWrite) {
        onWrite = _mod1198.UnknownFieldHandler.onWrite;
      }
      const self = this;
      onWrite(this.typeName, workAccounts, tag);
    }
    return tag;
  }
}
const prototype4 = StaffUsers$Type.prototype;
const items2 = [{ no: 1, name: "work_accounts", kind: "scalar", T: 8 }, { no: 2, name: "personal_accounts", kind: "scalar", T: 8 }];
const overrideType = new Override$Type("discord_protos.discord_experimentation.v1.StaffUsers", items2, { "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_USER" }, tmp5, tmp4, tmp3, "create", "internalBinaryRead", "internalBinaryWrite", tmp2, undefined);
const MessageType5 = _mod1198.MessageType;
class UserInGuild$Type extends MessageType5 {
  constructor() {
    const items = [{ no: 1, name: "guild_ids", kind: "scalar", repeat: 1, T: 6 }];
    const tmp2 = new tmp("discord_protos.discord_experimentation.v1.UserInGuild", items, { "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_USER" }, new.target);
    return tmp2;
  }
  create(arr) {
    obj = { guildIds: [] };
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
                let guildIds = obj.guildIds;
                let push2 = guildIds.push;
                let str5 = pos.fixed64();
                let push2Result = push2(str5.toString());
                pos = pos.pos;
              } while (pos < sum1);
            }
          } else {
            let guildIds1 = obj.guildIds;
            let push = guildIds1.push;
            let str4 = pos.fixed64();
            let arr = push(str4.toString());
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
  internalBinaryWrite(guildIds, tag, writeUnknownFields) {
    let length;
    if (guildIds.guildIds.length) {
      const tagResult = tag.tag(1, _mod1198.WireType.LengthDelimited);
      tagResult.fork();
      let num2 = 0;
      if (0 < guildIds.guildIds.length) {
        do {
          let fixed64Result = tag.fixed64(guildIds.guildIds[num2]);
          num2 = num2 + 1;
          length = guildIds.guildIds.length;
        } while (num2 < length);
      }
      const joined = tag.join();
    }
    let onWrite = writeUnknownFields.writeUnknownFields;
    if (false !== onWrite) {
      if (1 == onWrite) {
        onWrite = _mod1198.UnknownFieldHandler.onWrite;
      }
      const self = this;
      onWrite(this.typeName, guildIds, tag);
    }
    return tag;
  }
}
const prototype5 = UserInGuild$Type.prototype;
const items3 = [{ no: 1, name: "guild_ids", kind: "scalar", repeat: 1, T: 6 }];
const overrideType1 = new Override$Type("discord_protos.discord_experimentation.v1.UserInGuild", items3, { "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_USER" }, tmp5, tmp4, tmp3, "create", "internalBinaryRead", "internalBinaryWrite", tmp2, undefined);
const MessageType6 = _mod1198.MessageType;
class UserIds$Type extends MessageType6 {
  constructor() {
    const items = [{ no: 1, name: "user_ids", kind: "scalar", repeat: 1, T: 6 }];
    const tmp2 = new tmp("discord_protos.discord_experimentation.v1.UserIds", items, { "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_USER" }, new.target);
    return tmp2;
  }
  create(arr) {
    obj = { userIds: [] };
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
                let userIds = obj.userIds;
                let push2 = userIds.push;
                let str5 = pos.fixed64();
                let push2Result = push2(str5.toString());
                pos = pos.pos;
              } while (pos < sum1);
            }
          } else {
            let userIds1 = obj.userIds;
            let push = userIds1.push;
            let str4 = pos.fixed64();
            let arr = push(str4.toString());
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
  internalBinaryWrite(userIds, tag, writeUnknownFields) {
    let length;
    if (userIds.userIds.length) {
      const tagResult = tag.tag(1, _mod1198.WireType.LengthDelimited);
      tagResult.fork();
      let num2 = 0;
      if (0 < userIds.userIds.length) {
        do {
          let fixed64Result = tag.fixed64(userIds.userIds[num2]);
          num2 = num2 + 1;
          length = userIds.userIds.length;
        } while (num2 < length);
      }
      const joined = tag.join();
    }
    let onWrite = writeUnknownFields.writeUnknownFields;
    if (false !== onWrite) {
      if (1 == onWrite) {
        onWrite = _mod1198.UnknownFieldHandler.onWrite;
      }
      const self = this;
      onWrite(this.typeName, userIds, tag);
    }
    return tag;
  }
}
const prototype6 = UserIds$Type.prototype;
const items4 = [{ no: 1, name: "user_ids", kind: "scalar", repeat: 1, T: 6 }];
const overrideType2 = new Override$Type("discord_protos.discord_experimentation.v1.UserIds", items4, { "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_USER" }, tmp5, tmp4, tmp3, "create", "internalBinaryRead", "internalBinaryWrite", tmp2, undefined);
const MessageType7 = _mod1198.MessageType;
class UserLocale$Type extends MessageType7 {
  constructor() {
    const items = [{ no: 1, name: "locales", kind: "scalar", repeat: 2, T: 9 }];
    const tmp2 = new tmp("discord_protos.discord_experimentation.v1.UserLocale", items, { "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_USER" }, new.target);
    return tmp2;
  }
  create(arr) {
    obj = { locales: [] };
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
  internalBinaryWrite(locales, tag, writeUnknownFields) {
    let length;
    let num = 0;
    if (0 < locales.locales.length) {
      do {
        let tagResult = tag.tag(1, _mod1198.WireType.LengthDelimited);
        let stringResult = tagResult.string(locales.locales[num]);
        num = num + 1;
        length = locales.locales.length;
      } while (num < length);
    }
    let onWrite = writeUnknownFields.writeUnknownFields;
    if (false !== onWrite) {
      if (1 == onWrite) {
        onWrite = _mod1198.UnknownFieldHandler.onWrite;
      }
      const self = this;
      onWrite(this.typeName, locales, tag);
    }
    return tag;
  }
}
const prototype7 = UserLocale$Type.prototype;
const items5 = [{ no: 1, name: "locales", kind: "scalar", repeat: 2, T: 9 }];
const overrideType3 = new Override$Type("discord_protos.discord_experimentation.v1.UserLocale", items5, { "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_USER" }, tmp5, tmp4, tmp3, "create", "internalBinaryRead", "internalBinaryWrite", tmp2, undefined);
const MessageType8 = _mod1198.MessageType;
class ClientLocale$Type extends MessageType8 {
  constructor() {
    const items = [{ no: 1, name: "locales", kind: "scalar", repeat: 2, T: 9 }];
    const tmp2 = new tmp("discord_protos.discord_experimentation.v1.ClientLocale", items, { "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_CLIENT" }, new.target);
    return tmp2;
  }
  create(arr) {
    obj = { locales: [] };
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
  internalBinaryWrite(locales, tag, writeUnknownFields) {
    let length;
    let num = 0;
    if (0 < locales.locales.length) {
      do {
        let tagResult = tag.tag(1, _mod1198.WireType.LengthDelimited);
        let stringResult = tagResult.string(locales.locales[num]);
        num = num + 1;
        length = locales.locales.length;
      } while (num < length);
    }
    let onWrite = writeUnknownFields.writeUnknownFields;
    if (false !== onWrite) {
      if (1 == onWrite) {
        onWrite = _mod1198.UnknownFieldHandler.onWrite;
      }
      const self = this;
      onWrite(this.typeName, locales, tag);
    }
    return tag;
  }
}
const prototype8 = ClientLocale$Type.prototype;
const items6 = [{ no: 1, name: "locales", kind: "scalar", repeat: 2, T: 9 }];
const overrideType4 = new Override$Type("discord_protos.discord_experimentation.v1.ClientLocale", items6, { "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_CLIENT" }, tmp5, tmp4, tmp3, "create", "internalBinaryRead", "internalBinaryWrite", tmp2, undefined);
const MessageType9 = _mod1198.MessageType;
class ClientSystemLocale$Type extends MessageType9 {
  constructor() {
    const items = [{ no: 1, name: "locales", kind: "scalar", repeat: 2, T: 9 }];
    const tmp2 = new tmp("discord_protos.discord_experimentation.v1.ClientSystemLocale", items, { "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_CLIENT" }, new.target);
    return tmp2;
  }
  create(arr) {
    obj = { locales: [] };
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
  internalBinaryWrite(locales, tag, writeUnknownFields) {
    let length;
    let num = 0;
    if (0 < locales.locales.length) {
      do {
        let tagResult = tag.tag(1, _mod1198.WireType.LengthDelimited);
        let stringResult = tagResult.string(locales.locales[num]);
        num = num + 1;
        length = locales.locales.length;
      } while (num < length);
    }
    let onWrite = writeUnknownFields.writeUnknownFields;
    if (false !== onWrite) {
      if (1 == onWrite) {
        onWrite = _mod1198.UnknownFieldHandler.onWrite;
      }
      const self = this;
      onWrite(this.typeName, locales, tag);
    }
    return tag;
  }
}
const prototype9 = ClientSystemLocale$Type.prototype;
const items7 = [{ no: 1, name: "locales", kind: "scalar", repeat: 2, T: 9 }];
const overrideType5 = new Override$Type("discord_protos.discord_experimentation.v1.ClientSystemLocale", items7, { "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_CLIENT" }, tmp5, tmp4, tmp3, "create", "internalBinaryRead", "internalBinaryWrite", tmp2, undefined);
const MessageType10 = _mod1198.MessageType;
class ClientLocation$Type extends MessageType10 {
  constructor() {
    const items = [];
    obj = { no: 1, name: "locations", kind: "message", repeat: 1, T };
    items[0] = obj;
    const tmp2 = new tmp("discord_protos.discord_experimentation.v1.ClientLocation", items, { "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_CLIENT" }, new.target);
    return tmp2;
  }
  create(arr) {
    obj = { locations: [] };
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
          let locations = obj.locations;
          let arr = locations.push(items83.internalBinaryRead(pos, pos.uint32(), readUnknownField));
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
  internalBinaryWrite(locations, tag, writeUnknownFields) {
    let length;
    let num = 0;
    if (0 < locations.locations.length) {
      do {
        internalBinaryWrite = items83.internalBinaryWrite;
        let tmp2 = locations.locations[num];
        let tagResult = tag.tag(1, _mod1198.WireType.LengthDelimited);
        let internalBinaryWriteResult = internalBinaryWrite(tmp2, tagResult.fork(), writeUnknownFields);
        let joined = internalBinaryWriteResult.join();
        num = num + 1;
        length = locations.locations.length;
      } while (num < length);
    }
    let onWrite = writeUnknownFields.writeUnknownFields;
    if (false !== onWrite) {
      if (1 == onWrite) {
        onWrite = _mod1198.UnknownFieldHandler.onWrite;
      }
      const self = this;
      onWrite(this.typeName, locations, tag);
    }
    return tag;
  }
}
const prototype10 = ClientLocation$Type.prototype;
let obj6 = { no: 1, name: "locations", kind: "message", repeat: 1, T };
const items8 = [obj6];
const obj7 = { "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_CLIENT" };
const overrideType6 = new Override$Type("discord_protos.discord_experimentation.v1.ClientLocation", items8, obj7, tmp5, tmp4, tmp3, "create", "internalBinaryRead", "internalBinaryWrite", tmp2, undefined);
const MessageType11 = _mod1198.MessageType;
class ClientLocation_Place$Type extends MessageType11 {
  constructor() {
    const items = [{ no: 1, name: "city", kind: "scalar", T: 9 }, { no: 2, name: "subdivision", kind: "scalar", T: 9 }, { no: 3, name: "country", kind: "scalar", T: 9 }];
    const tmp2 = new tmp("discord_protos.discord_experimentation.v1.ClientLocation.Place", items, new.target);
    return tmp2;
  }
  create(arr) {
    obj = { city: "", subdivision: "", country: "" };
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
  internalBinaryWrite(city, tag, writeUnknownFields) {
    if ("" !== city.city) {
      const tagResult = tag.tag(1, _mod1198.WireType.LengthDelimited);
      tagResult.string(city.city);
    }
    if ("" !== city.subdivision) {
      const tagResult1 = tag.tag(2, _mod1198.WireType.LengthDelimited);
      tagResult1.string(city.subdivision);
    }
    if ("" !== city.country) {
      const tagResult2 = tag.tag(3, _mod1198.WireType.LengthDelimited);
      tagResult2.string(city.country);
    }
    let onWrite = writeUnknownFields.writeUnknownFields;
    if (false !== onWrite) {
      if (1 == onWrite) {
        onWrite = _mod1198.UnknownFieldHandler.onWrite;
      }
      const self = this;
      onWrite(this.typeName, city, tag);
    }
    return tag;
  }
}
const prototype11 = ClientLocation_Place$Type.prototype;
const items9 = [{ no: 1, name: "city", kind: "scalar", T: 9 }, { no: 2, name: "subdivision", kind: "scalar", T: 9 }, { no: 3, name: "country", kind: "scalar", T: 9 }];
const items81 = new items8("discord_protos.discord_experimentation.v1.ClientLocation.Place", items9, obj7, tmp5, tmp4, tmp3, "create", "internalBinaryRead", "internalBinaryWrite", tmp2);
const MessageType12 = _mod1198.MessageType;
class ClientLocation_ISORegion$Type extends MessageType12 {
  constructor() {
    const items = [{ no: 1, name: "iso_country", kind: "scalar", T: 9 }, { no: 2, name: "iso_subdivision", kind: "scalar", T: 9 }];
    const tmp2 = new tmp("discord_protos.discord_experimentation.v1.ClientLocation.ISORegion", items, new.target);
    return tmp2;
  }
  create(arr) {
    obj = { isoCountry: "", isoSubdivision: "" };
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
  internalBinaryWrite(isoCountry, tag, writeUnknownFields) {
    if ("" !== isoCountry.isoCountry) {
      const tagResult = tag.tag(1, _mod1198.WireType.LengthDelimited);
      tagResult.string(isoCountry.isoCountry);
    }
    if ("" !== isoCountry.isoSubdivision) {
      const tagResult1 = tag.tag(2, _mod1198.WireType.LengthDelimited);
      tagResult1.string(isoCountry.isoSubdivision);
    }
    let onWrite = writeUnknownFields.writeUnknownFields;
    if (false !== onWrite) {
      if (1 == onWrite) {
        onWrite = _mod1198.UnknownFieldHandler.onWrite;
      }
      const self = this;
      onWrite(this.typeName, isoCountry, tag);
    }
    return tag;
  }
}
const prototype12 = ClientLocation_ISORegion$Type.prototype;
const items10 = [{ no: 1, name: "iso_country", kind: "scalar", T: 9 }, { no: 2, name: "iso_subdivision", kind: "scalar", T: 9 }];
const items82 = new items8("discord_protos.discord_experimentation.v1.ClientLocation.ISORegion", items10, obj7, tmp5, tmp4, tmp3, "create", "internalBinaryRead", "internalBinaryWrite", tmp2);
const MessageType13 = _mod1198.MessageType;
class ClientLocation_Location$Type extends MessageType13 {
  constructor() {
    const items = [, , ];
    obj = { no: 1, name: "iso_region", kind: "message", oneof: "location", T: T5 };
    items[0] = obj;
    items[1] = { no: 2, name: "is_eu", kind: "scalar", oneof: "location", T: 8 };
    items[2] = { no: 3, name: "place", kind: "message", oneof: "location", T: T6 };
    const tmp2 = new tmp("discord_protos.discord_experimentation.v1.ClientLocation.Location", items, new.target);
    return tmp2;
  }
  create(arr) {
    obj = { location: { oneofKind: "r" } };
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
        if (1 === tmp5) {
          let obj3 = { oneofKind: "isoRegion", isoRegion: items82.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj2.location.isoRegion) };
          obj2.location = obj3;
        } else if (2 === tmp5) {
          let obj6 = { oneofKind: "isEu", isEu: pos.bool() };
          obj2.location = obj6;
        } else if (3 === tmp5) {
          let location = { oneofKind: "place", place: items81.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj2.location.place) };
          obj2.location = location;
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
  internalBinaryWrite(location, tag, writeUnknownFields) {
    if ("isoRegion" === location.location.oneofKind) {
      internalBinaryWrite = items82.internalBinaryWrite;
      const isoRegion = location.location.isoRegion;
      const tagResult = tag.tag(1, _mod1198.WireType.LengthDelimited);
      const internalBinaryWriteResult = internalBinaryWrite(isoRegion, tagResult.fork(), writeUnknownFields);
      const joined = internalBinaryWriteResult.join();
    }
    if ("isEu" === location.location.oneofKind) {
      const tagResult1 = tag.tag(2, _mod1198.WireType.Varint);
      tagResult1.bool(location.location.isEu);
    }
    if ("place" === location.location.oneofKind) {
      internalBinaryWrite2 = items81.internalBinaryWrite;
      const place = location.location.place;
      const tagResult2 = tag.tag(3, _mod1198.WireType.LengthDelimited);
      const internalBinaryWrite2Result = internalBinaryWrite2(place, tagResult2.fork(), writeUnknownFields);
      const joined1 = internalBinaryWrite2Result.join();
    }
    let onWrite = writeUnknownFields.writeUnknownFields;
    if (false !== onWrite) {
      if (1 == onWrite) {
        onWrite = _mod1198.UnknownFieldHandler.onWrite;
      }
      const self = this;
      onWrite(this.typeName, location, tag);
    }
    return tag;
  }
}
const prototype13 = ClientLocation_Location$Type.prototype;
const items11 = [, , ];
const obj8 = { no: 1, name: "iso_region", kind: "message", oneof: "location", T: T5 };
items11[0] = obj8;
items11[1] = { no: 2, name: "is_eu", kind: "scalar", oneof: "location", T: 8 };
items11[2] = { no: 3, name: "place", kind: "message", oneof: "location", T: T6 };
const items83 = new items8("discord_protos.discord_experimentation.v1.ClientLocation.Location", items11, obj7, tmp5, tmp4, tmp3, "create", "internalBinaryRead", "internalBinaryWrite", tmp2);
const MessageType14 = _mod1198.MessageType;
class UserLocation$Type extends MessageType14 {
  constructor() {
    const items = [, ];
    obj = { no: 1, name: "locations", kind: "message", repeat: 1, T: T7 };
    items[0] = obj;
    items[1] = { no: 2, name: "prefer_client_ip", kind: "scalar", T: 8 };
    const tmp2 = new tmp("discord_protos.discord_experimentation.v1.UserLocation", items, { "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_USER" }, new.target);
    return tmp2;
  }
  create(arr) {
    obj = { locations: [], preferClientIp: false };
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
          let locations = obj.locations;
          let arr = locations.push(items83.internalBinaryRead(pos, pos.uint32(), readUnknownField));
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
  internalBinaryWrite(locations, tag, writeUnknownFields) {
    let length;
    let num = 0;
    if (0 < locations.locations.length) {
      do {
        internalBinaryWrite = items83.internalBinaryWrite;
        let tmp2 = locations.locations[num];
        let tagResult = tag.tag(1, _mod1198.WireType.LengthDelimited);
        let internalBinaryWriteResult = internalBinaryWrite(tmp2, tagResult.fork(), writeUnknownFields);
        let joined = internalBinaryWriteResult.join();
        num = num + 1;
        length = locations.locations.length;
      } while (num < length);
    }
    if (false !== locations.preferClientIp) {
      const tagResult1 = tag.tag(2, _mod1198.WireType.Varint);
      tagResult1.bool(locations.preferClientIp);
    }
    let onWrite = writeUnknownFields.writeUnknownFields;
    if (false !== onWrite) {
      if (1 == onWrite) {
        onWrite = _mod1198.UnknownFieldHandler.onWrite;
      }
      const self = this;
      onWrite(this.typeName, locations, tag);
    }
    return tag;
  }
}
const prototype14 = UserLocation$Type.prototype;
const items12 = [, ];
const obj9 = { no: 1, name: "locations", kind: "message", repeat: 1, T: T7 };
items12[0] = obj9;
items12[1] = { no: 2, name: "prefer_client_ip", kind: "scalar", T: 8 };
const clientLocation_LocationType = new ClientLocation_Location$Type("discord_protos.discord_experimentation.v1.UserLocation", items12, { "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_USER" }, tmp5, tmp4, tmp3, "create", "internalBinaryRead", "internalBinaryWrite", tmp2, undefined);
const MessageType15 = _mod1198.MessageType;
class UserStoreCountry$Type extends MessageType15 {
  constructor() {
    const items = [{ no: 1, name: "iso_countries", kind: "scalar", repeat: 2, T: 9 }];
    const tmp2 = new tmp("discord_protos.discord_experimentation.v1.UserStoreCountry", items, { "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_USER" }, new.target);
    return tmp2;
  }
  create(arr) {
    obj = { isoCountries: [] };
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
  internalBinaryWrite(isoCountries, tag, writeUnknownFields) {
    let length;
    let num = 0;
    if (0 < isoCountries.isoCountries.length) {
      do {
        let tagResult = tag.tag(1, _mod1198.WireType.LengthDelimited);
        let stringResult = tagResult.string(isoCountries.isoCountries[num]);
        num = num + 1;
        length = isoCountries.isoCountries.length;
      } while (num < length);
    }
    let onWrite = writeUnknownFields.writeUnknownFields;
    if (false !== onWrite) {
      if (1 == onWrite) {
        onWrite = _mod1198.UnknownFieldHandler.onWrite;
      }
      const self = this;
      onWrite(this.typeName, isoCountries, tag);
    }
    return tag;
  }
}
const prototype15 = UserStoreCountry$Type.prototype;
const items13 = [{ no: 1, name: "iso_countries", kind: "scalar", repeat: 2, T: 9 }];
const clientLocation_LocationType1 = new ClientLocation_Location$Type("discord_protos.discord_experimentation.v1.UserStoreCountry", items13, { "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_USER" }, tmp5, tmp4, tmp3, "create", "internalBinaryRead", "internalBinaryWrite", tmp2, undefined);
const MessageType16 = _mod1198.MessageType;
class ClientIP$Type extends MessageType16 {
  constructor() {
    const items = [{ no: 1, name: "blocks", kind: "scalar", repeat: 2, T: 9 }];
    const tmp2 = new tmp("discord_protos.discord_experimentation.v1.ClientIP", items, { "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_CLIENT" }, new.target);
    return tmp2;
  }
  create(arr) {
    obj = { blocks: [] };
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
  internalBinaryWrite(blocks, tag, writeUnknownFields) {
    let length;
    let num = 0;
    if (0 < blocks.blocks.length) {
      do {
        let tagResult = tag.tag(1, _mod1198.WireType.LengthDelimited);
        let stringResult = tagResult.string(blocks.blocks[num]);
        num = num + 1;
        length = blocks.blocks.length;
      } while (num < length);
    }
    let onWrite = writeUnknownFields.writeUnknownFields;
    if (false !== onWrite) {
      if (1 == onWrite) {
        onWrite = _mod1198.UnknownFieldHandler.onWrite;
      }
      const self = this;
      onWrite(this.typeName, blocks, tag);
    }
    return tag;
  }
}
const prototype16 = ClientIP$Type.prototype;
const items14 = [{ no: 1, name: "blocks", kind: "scalar", repeat: 2, T: 9 }];
const clientLocation_LocationType2 = new ClientLocation_Location$Type("discord_protos.discord_experimentation.v1.ClientIP", items14, { "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_CLIENT" }, tmp5, tmp4, tmp3, "create", "internalBinaryRead", "internalBinaryWrite", tmp2, undefined);
const MessageType17 = _mod1198.MessageType;
class UserIP$Type extends MessageType17 {
  constructor() {
    const items = [{ no: 1, name: "blocks", kind: "scalar", repeat: 2, T: 9 }, { no: 2, name: "prefer_client_ip", kind: "scalar", T: 8 }];
    const tmp2 = new tmp("discord_protos.discord_experimentation.v1.UserIP", items, { "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_USER" }, new.target);
    return tmp2;
  }
  create(arr) {
    obj = { blocks: [], preferClientIp: false };
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
  internalBinaryWrite(blocks, tag, writeUnknownFields) {
    let length;
    let num = 0;
    if (0 < blocks.blocks.length) {
      do {
        let tagResult = tag.tag(1, _mod1198.WireType.LengthDelimited);
        let stringResult = tagResult.string(blocks.blocks[num]);
        num = num + 1;
        length = blocks.blocks.length;
      } while (num < length);
    }
    if (false !== blocks.preferClientIp) {
      const tagResult1 = tag.tag(2, _mod1198.WireType.Varint);
      tagResult1.bool(blocks.preferClientIp);
    }
    let onWrite = writeUnknownFields.writeUnknownFields;
    if (false !== onWrite) {
      if (1 == onWrite) {
        onWrite = _mod1198.UnknownFieldHandler.onWrite;
      }
      const self = this;
      onWrite(this.typeName, blocks, tag);
    }
    return tag;
  }
}
const prototype17 = UserIP$Type.prototype;
const items15 = [{ no: 1, name: "blocks", kind: "scalar", repeat: 2, T: 9 }, { no: 2, name: "prefer_client_ip", kind: "scalar", T: 8 }];
const clientLocation_LocationType3 = new ClientLocation_Location$Type("discord_protos.discord_experimentation.v1.UserIP", items15, { "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_USER" }, tmp5, tmp4, tmp3, "create", "internalBinaryRead", "internalBinaryWrite", tmp2, undefined);
const MessageType18 = _mod1198.MessageType;
class ClientOperatingSystem$Type extends MessageType18 {
  constructor() {
    const items = [, , , , , , ];
    obj = { no: 1, name: "ios_version", kind: "message", T: T8 };
    items[0] = obj;
    items[1] = { no: 2, name: "android_version", kind: "message", T: T9 };
    items[2] = { no: 3, name: "macos_version", kind: "message", T: T10 };
    items[3] = { no: 4, name: "windows_version", kind: "message", T: T11 };
    items[4] = { no: 5, name: "playstation_version", kind: "message", T: T12 };
    items[5] = { no: 6, name: "xbox_version", kind: "message", T: T13 };
    items[6] = { no: 7, name: "linux_version", kind: "message", T: T14 };
    const tmp2 = new tmp("discord_protos.discord_experimentation.v1.ClientOperatingSystem", items, { "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_CLIENT" }, new.target);
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
          obj.iosVersion = items161.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.iosVersion);
        } else if (2 === tmp5) {
          obj.androidVersion = items161.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.androidVersion);
        } else if (3 === tmp5) {
          obj.macosVersion = items161.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.macosVersion);
        } else if (4 === tmp5) {
          obj.windowsVersion = items161.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.windowsVersion);
        } else if (5 === tmp5) {
          obj.playstationVersion = items161.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.playstationVersion);
        } else if (6 === tmp5) {
          obj.xboxVersion = items161.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.xboxVersion);
        } else if (7 === tmp5) {
          obj.linuxVersion = items161.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.linuxVersion);
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
  internalBinaryWrite(iosVersion, tag, writeUnknownFields) {
    if (iosVersion.iosVersion) {
      internalBinaryWrite = items161.internalBinaryWrite;
      iosVersion = iosVersion.iosVersion;
      const tagResult = tag.tag(1, _mod1198.WireType.LengthDelimited);
      const internalBinaryWriteResult = internalBinaryWrite(iosVersion, tagResult.fork(), writeUnknownFields);
      const joined = internalBinaryWriteResult.join();
    }
    if (iosVersion.androidVersion) {
      internalBinaryWrite2 = items161.internalBinaryWrite;
      const androidVersion = iosVersion.androidVersion;
      const tagResult1 = tag.tag(2, _mod1198.WireType.LengthDelimited);
      const internalBinaryWrite2Result = internalBinaryWrite2(androidVersion, tagResult1.fork(), writeUnknownFields);
      const joined1 = internalBinaryWrite2Result.join();
    }
    if (iosVersion.macosVersion) {
      internalBinaryWrite3 = items161.internalBinaryWrite;
      const macosVersion = iosVersion.macosVersion;
      const tagResult2 = tag.tag(3, _mod1198.WireType.LengthDelimited);
      const internalBinaryWrite3Result = internalBinaryWrite3(macosVersion, tagResult2.fork(), writeUnknownFields);
      const joined2 = internalBinaryWrite3Result.join();
    }
    if (iosVersion.windowsVersion) {
      internalBinaryWrite4 = items161.internalBinaryWrite;
      const windowsVersion = iosVersion.windowsVersion;
      const tagResult3 = tag.tag(4, _mod1198.WireType.LengthDelimited);
      const internalBinaryWrite4Result = internalBinaryWrite4(windowsVersion, tagResult3.fork(), writeUnknownFields);
      const joined3 = internalBinaryWrite4Result.join();
    }
    if (iosVersion.playstationVersion) {
      internalBinaryWrite5 = items161.internalBinaryWrite;
      const playstationVersion = iosVersion.playstationVersion;
      const tagResult4 = tag.tag(5, _mod1198.WireType.LengthDelimited);
      const internalBinaryWrite5Result = internalBinaryWrite5(playstationVersion, tagResult4.fork(), writeUnknownFields);
      const joined4 = internalBinaryWrite5Result.join();
    }
    if (iosVersion.xboxVersion) {
      internalBinaryWrite6 = items161.internalBinaryWrite;
      const xboxVersion = iosVersion.xboxVersion;
      const tagResult5 = tag.tag(6, _mod1198.WireType.LengthDelimited);
      const internalBinaryWrite6Result = internalBinaryWrite6(xboxVersion, tagResult5.fork(), writeUnknownFields);
      const joined5 = internalBinaryWrite6Result.join();
    }
    if (iosVersion.linuxVersion) {
      internalBinaryWrite7 = items161.internalBinaryWrite;
      const linuxVersion = iosVersion.linuxVersion;
      const tagResult6 = tag.tag(7, _mod1198.WireType.LengthDelimited);
      const internalBinaryWrite7Result = internalBinaryWrite7(linuxVersion, tagResult6.fork(), writeUnknownFields);
      const joined6 = internalBinaryWrite7Result.join();
    }
    let onWrite = writeUnknownFields.writeUnknownFields;
    if (false !== onWrite) {
      if (1 == onWrite) {
        onWrite = _mod1198.UnknownFieldHandler.onWrite;
      }
      const self = this;
      onWrite(this.typeName, iosVersion, tag);
    }
    return tag;
  }
}
const prototype18 = ClientOperatingSystem$Type.prototype;
const items16 = [, , , , , , ];
const obj10 = { no: 1, name: "ios_version", kind: "message", T: T8 };
items16[0] = obj10;
items16[1] = { no: 2, name: "android_version", kind: "message", T: T9 };
items16[2] = { no: 3, name: "macos_version", kind: "message", T: T10 };
items16[3] = { no: 4, name: "windows_version", kind: "message", T: T11 };
items16[4] = { no: 5, name: "playstation_version", kind: "message", T: T12 };
items16[5] = { no: 6, name: "xbox_version", kind: "message", T: T13 };
items16[6] = { no: 7, name: "linux_version", kind: "message", T: T14 };
const obj11 = { "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_CLIENT" };
const clientLocation_LocationType4 = new ClientLocation_Location$Type("discord_protos.discord_experimentation.v1.ClientOperatingSystem", items16, obj11, tmp5, tmp4, tmp3, "create", "internalBinaryRead", "internalBinaryWrite", tmp2, undefined);
const MessageType19 = _mod1198.MessageType;
class SDKVersion$Type extends MessageType19 {
  constructor() {
    const items = [, ];
    obj = { no: 1, name: "ranges", kind: "message", repeat: 1, T: T15 };
    items[0] = obj;
    items[1] = { no: 2, name: "work_around_pyoto_bug", kind: "scalar", T: 8 };
    const tmp2 = new tmp("discord_protos.discord_experimentation.v1.SDKVersion", items, new.target);
    return tmp2;
  }
  create(arr) {
    obj = { ranges: [], workAroundPyotoBug: false };
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
          let ranges = obj.ranges;
          let arr = ranges.push(items162.internalBinaryRead(pos, pos.uint32(), readUnknownField));
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
  internalBinaryWrite(ranges, tag, writeUnknownFields) {
    let length;
    let num = 0;
    if (0 < ranges.ranges.length) {
      do {
        internalBinaryWrite = items162.internalBinaryWrite;
        let tmp2 = ranges.ranges[num];
        let tagResult = tag.tag(1, _mod1198.WireType.LengthDelimited);
        let internalBinaryWriteResult = internalBinaryWrite(tmp2, tagResult.fork(), writeUnknownFields);
        let joined = internalBinaryWriteResult.join();
        num = num + 1;
        length = ranges.ranges.length;
      } while (num < length);
    }
    if (false !== ranges.workAroundPyotoBug) {
      const tagResult1 = tag.tag(2, _mod1198.WireType.Varint);
      tagResult1.bool(ranges.workAroundPyotoBug);
    }
    let onWrite = writeUnknownFields.writeUnknownFields;
    if (false !== onWrite) {
      if (1 == onWrite) {
        onWrite = _mod1198.UnknownFieldHandler.onWrite;
      }
      const self = this;
      onWrite(this.typeName, ranges, tag);
    }
    return tag;
  }
}
const prototype19 = SDKVersion$Type.prototype;
const items17 = [, ];
const obj12 = { no: 1, name: "ranges", kind: "message", repeat: 1, T: T15 };
items17[0] = obj12;
items17[1] = { no: 2, name: "work_around_pyoto_bug", kind: "scalar", T: 8 };
const items161 = new items16("discord_protos.discord_experimentation.v1.SDKVersion", items17, obj11, tmp5, tmp4, tmp3, "create", "internalBinaryRead", "internalBinaryWrite", tmp2);
const MessageType20 = _mod1198.MessageType;
class SDKVersionRange$Type extends MessageType20 {
  constructor() {
    const items = [, ];
    obj = { no: 1, name: "lower_bound", kind: "message", T: T16 };
    items[0] = obj;
    items[1] = { no: 2, name: "upper_bound", kind: "message", T: T17 };
    const tmp2 = new tmp("discord_protos.discord_experimentation.v1.SDKVersionRange", items, new.target);
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
          obj.lowerBound = items163.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.lowerBound);
        } else if (2 === tmp5) {
          obj.upperBound = items163.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.upperBound);
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
  internalBinaryWrite(lowerBound, tag, writeUnknownFields) {
    if (lowerBound.lowerBound) {
      internalBinaryWrite = items163.internalBinaryWrite;
      lowerBound = lowerBound.lowerBound;
      const tagResult = tag.tag(1, _mod1198.WireType.LengthDelimited);
      const internalBinaryWriteResult = internalBinaryWrite(lowerBound, tagResult.fork(), writeUnknownFields);
      const joined = internalBinaryWriteResult.join();
    }
    if (lowerBound.upperBound) {
      internalBinaryWrite2 = items163.internalBinaryWrite;
      const upperBound = lowerBound.upperBound;
      const tagResult1 = tag.tag(2, _mod1198.WireType.LengthDelimited);
      const internalBinaryWrite2Result = internalBinaryWrite2(upperBound, tagResult1.fork(), writeUnknownFields);
      const joined1 = internalBinaryWrite2Result.join();
    }
    let onWrite = writeUnknownFields.writeUnknownFields;
    if (false !== onWrite) {
      if (1 == onWrite) {
        onWrite = _mod1198.UnknownFieldHandler.onWrite;
      }
      const self = this;
      onWrite(this.typeName, lowerBound, tag);
    }
    return tag;
  }
}
const prototype20 = SDKVersionRange$Type.prototype;
const items18 = [, ];
const obj13 = { no: 1, name: "lower_bound", kind: "message", T: T16 };
items18[0] = obj13;
items18[1] = { no: 2, name: "upper_bound", kind: "message", T: T17 };
const items162 = new items16("discord_protos.discord_experimentation.v1.SDKVersionRange", items18, obj11, tmp5, tmp4, tmp3, "create", "internalBinaryRead", "internalBinaryWrite", tmp2);
const MessageType21 = _mod1198.MessageType;
class SDKVersionRangeBound$Type extends MessageType21 {
  constructor() {
    const items = [, ];
    obj = { no: 1, name: "version", kind: "message", T: T18 };
    items[0] = obj;
    items[1] = { no: 2, name: "inclusive", kind: "scalar", T: 8 };
    const tmp2 = new tmp("discord_protos.discord_experimentation.v1.SDKVersionRangeBound", items, new.target);
    return tmp2;
  }
  create(arr) {
    obj = { inclusive: false };
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
          obj.version = items164.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.version);
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
  internalBinaryWrite(version, tag, writeUnknownFields) {
    if (version.version) {
      internalBinaryWrite = items164.internalBinaryWrite;
      version = version.version;
      const tagResult = tag.tag(1, _mod1198.WireType.LengthDelimited);
      const internalBinaryWriteResult = internalBinaryWrite(version, tagResult.fork(), writeUnknownFields);
      const joined = internalBinaryWriteResult.join();
    }
    if (false !== version.inclusive) {
      const tagResult1 = tag.tag(2, _mod1198.WireType.Varint);
      tagResult1.bool(version.inclusive);
    }
    let onWrite = writeUnknownFields.writeUnknownFields;
    if (false !== onWrite) {
      if (1 == onWrite) {
        onWrite = _mod1198.UnknownFieldHandler.onWrite;
      }
      const self = this;
      onWrite(this.typeName, version, tag);
    }
    return tag;
  }
}
const prototype21 = SDKVersionRangeBound$Type.prototype;
const items19 = [, ];
const obj14 = { no: 1, name: "version", kind: "message", T: T18 };
items19[0] = obj14;
items19[1] = { no: 2, name: "inclusive", kind: "scalar", T: 8 };
const items163 = new items16("discord_protos.discord_experimentation.v1.SDKVersionRangeBound", items19, obj11, tmp5, tmp4, tmp3, "create", "internalBinaryRead", "internalBinaryWrite", tmp2);
const MessageType22 = _mod1198.MessageType;
class SDKVersionSpecifier$Type extends MessageType22 {
  constructor() {
    const items = [{ no: 1, name: "version", kind: "scalar", T: 5 }];
    const tmp2 = new tmp("discord_protos.discord_experimentation.v1.SDKVersionSpecifier", items, new.target);
    return tmp2;
  }
  create(arr) {
    obj = { version: 0 };
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
  internalBinaryWrite(version, tag, writeUnknownFields) {
    if (0 !== version.version) {
      const tagResult = tag.tag(1, _mod1198.WireType.Varint);
      tagResult.int32(version.version);
    }
    let onWrite = writeUnknownFields.writeUnknownFields;
    if (false !== onWrite) {
      if (1 == onWrite) {
        onWrite = _mod1198.UnknownFieldHandler.onWrite;
      }
      const self = this;
      onWrite(this.typeName, version, tag);
    }
    return tag;
  }
}
const prototype22 = SDKVersionSpecifier$Type.prototype;
const items20 = [{ no: 1, name: "version", kind: "scalar", T: 5 }];
const items164 = new items16("discord_protos.discord_experimentation.v1.SDKVersionSpecifier", items20, obj11, tmp5, tmp4, tmp3, "create", "internalBinaryRead", "internalBinaryWrite", tmp2);
const MessageType23 = _mod1198.MessageType;
class ClientPlatform$Type extends MessageType23 {
  constructor() {
    const items = [, , , , , ];
    obj = { no: 1, name: "ios_version", kind: "message", T: T19 };
    items[0] = obj;
    items[1] = { no: 2, name: "android_version", kind: "message", T: T20 };
    items[2] = { no: 3, name: "web_version", kind: "message", T: T21 };
    items[3] = { no: 4, name: "native_version", kind: "message", T: T22 };
    items[4] = { no: 6, name: "allow_non_native_web", kind: "scalar", T: 8 };
    items[5] = { no: 5, name: "client_required_changes", kind: "message", T: T23 };
    const tmp2 = new tmp("discord_protos.discord_experimentation.v1.ClientPlatform", items, { "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_CLIENT" }, new.target);
    return tmp2;
  }
  create(arr) {
    obj = { allowNonNativeWeb: false };
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
          obj.iosVersion = items211.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.iosVersion);
        } else if (2 === tmp5) {
          obj.androidVersion = items211.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.androidVersion);
        } else if (3 === tmp5) {
          obj.webVersion = items211.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.webVersion);
        } else if (4 === tmp5) {
          obj.nativeVersion = items211.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.nativeVersion);
        } else if (6 === tmp5) {
          obj.allowNonNativeWeb = pos.bool();
        } else if (5 === tmp5) {
          obj.clientRequiredChanges = items215.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.clientRequiredChanges);
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
  internalBinaryWrite(iosVersion, tag, writeUnknownFields) {
    if (iosVersion.iosVersion) {
      internalBinaryWrite = items211.internalBinaryWrite;
      iosVersion = iosVersion.iosVersion;
      const tagResult = tag.tag(1, _mod1198.WireType.LengthDelimited);
      const internalBinaryWriteResult = internalBinaryWrite(iosVersion, tagResult.fork(), writeUnknownFields);
      const joined = internalBinaryWriteResult.join();
    }
    if (iosVersion.androidVersion) {
      internalBinaryWrite2 = items211.internalBinaryWrite;
      const androidVersion = iosVersion.androidVersion;
      const tagResult1 = tag.tag(2, _mod1198.WireType.LengthDelimited);
      const internalBinaryWrite2Result = internalBinaryWrite2(androidVersion, tagResult1.fork(), writeUnknownFields);
      const joined1 = internalBinaryWrite2Result.join();
    }
    if (iosVersion.webVersion) {
      internalBinaryWrite3 = items211.internalBinaryWrite;
      const webVersion = iosVersion.webVersion;
      const tagResult2 = tag.tag(3, _mod1198.WireType.LengthDelimited);
      const internalBinaryWrite3Result = internalBinaryWrite3(webVersion, tagResult2.fork(), writeUnknownFields);
      const joined2 = internalBinaryWrite3Result.join();
    }
    if (iosVersion.nativeVersion) {
      internalBinaryWrite4 = items211.internalBinaryWrite;
      const nativeVersion = iosVersion.nativeVersion;
      const tagResult3 = tag.tag(4, _mod1198.WireType.LengthDelimited);
      const internalBinaryWrite4Result = internalBinaryWrite4(nativeVersion, tagResult3.fork(), writeUnknownFields);
      const joined3 = internalBinaryWrite4Result.join();
    }
    if (false !== iosVersion.allowNonNativeWeb) {
      const tagResult4 = tag.tag(6, _mod1198.WireType.Varint);
      tagResult4.bool(iosVersion.allowNonNativeWeb);
    }
    if (iosVersion.clientRequiredChanges) {
      internalBinaryWrite5 = items215.internalBinaryWrite;
      const clientRequiredChanges = iosVersion.clientRequiredChanges;
      const tagResult5 = tag.tag(5, _mod1198.WireType.LengthDelimited);
      const internalBinaryWrite5Result = internalBinaryWrite5(clientRequiredChanges, tagResult5.fork(), writeUnknownFields);
      const joined4 = internalBinaryWrite5Result.join();
    }
    let onWrite = writeUnknownFields.writeUnknownFields;
    if (false !== onWrite) {
      if (1 == onWrite) {
        onWrite = _mod1198.UnknownFieldHandler.onWrite;
      }
      const self = this;
      onWrite(this.typeName, iosVersion, tag);
    }
    return tag;
  }
}
const prototype23 = ClientPlatform$Type.prototype;
const items21 = [, , , , , ];
const obj15 = { no: 1, name: "ios_version", kind: "message", T: T19 };
items21[0] = obj15;
items21[1] = { no: 2, name: "android_version", kind: "message", T: T20 };
items21[2] = { no: 3, name: "web_version", kind: "message", T: T21 };
items21[3] = { no: 4, name: "native_version", kind: "message", T: T22 };
items21[4] = { no: 6, name: "allow_non_native_web", kind: "scalar", T: 8 };
items21[5] = { no: 5, name: "client_required_changes", kind: "message", T: T23 };
const obj16 = { "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_CLIENT" };
const sDKVersionSpecifierType = new SDKVersionSpecifier$Type("discord_protos.discord_experimentation.v1.ClientPlatform", items21, obj16, tmp5, tmp4, tmp3, "create", "internalBinaryRead", "internalBinaryWrite", tmp2, undefined);
const MessageType24 = _mod1198.MessageType;
class PlatformVersion$Type extends MessageType24 {
  constructor() {
    const items = [, ];
    obj = { no: 1, name: "ranges", kind: "message", repeat: 1, T: T24 };
    items[0] = obj;
    items[1] = { no: 2, name: "work_around_pyoto_bug", kind: "scalar", T: 8 };
    const tmp2 = new tmp("discord_protos.discord_experimentation.v1.PlatformVersion", items, new.target);
    return tmp2;
  }
  create(arr) {
    obj = { ranges: [], workAroundPyotoBug: false };
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
          let ranges = obj.ranges;
          let arr = ranges.push(items212.internalBinaryRead(pos, pos.uint32(), readUnknownField));
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
  internalBinaryWrite(ranges, tag, writeUnknownFields) {
    let length;
    let num = 0;
    if (0 < ranges.ranges.length) {
      do {
        internalBinaryWrite = items212.internalBinaryWrite;
        let tmp2 = ranges.ranges[num];
        let tagResult = tag.tag(1, _mod1198.WireType.LengthDelimited);
        let internalBinaryWriteResult = internalBinaryWrite(tmp2, tagResult.fork(), writeUnknownFields);
        let joined = internalBinaryWriteResult.join();
        num = num + 1;
        length = ranges.ranges.length;
      } while (num < length);
    }
    if (false !== ranges.workAroundPyotoBug) {
      const tagResult1 = tag.tag(2, _mod1198.WireType.Varint);
      tagResult1.bool(ranges.workAroundPyotoBug);
    }
    let onWrite = writeUnknownFields.writeUnknownFields;
    if (false !== onWrite) {
      if (1 == onWrite) {
        onWrite = _mod1198.UnknownFieldHandler.onWrite;
      }
      const self = this;
      onWrite(this.typeName, ranges, tag);
    }
    return tag;
  }
}
const prototype24 = PlatformVersion$Type.prototype;
const items22 = [, ];
const obj17 = { no: 1, name: "ranges", kind: "message", repeat: 1, T: T24 };
items22[0] = obj17;
items22[1] = { no: 2, name: "work_around_pyoto_bug", kind: "scalar", T: 8 };
const items211 = new items21("discord_protos.discord_experimentation.v1.PlatformVersion", items22, obj16, tmp5, tmp4, tmp3, "create", "internalBinaryRead", "internalBinaryWrite", tmp2);
const MessageType25 = _mod1198.MessageType;
class PlatformVersionRange$Type extends MessageType25 {
  constructor() {
    const items = [, ];
    obj = { no: 1, name: "lower_bound", kind: "message", T: T25 };
    items[0] = obj;
    items[1] = { no: 2, name: "upper_bound", kind: "message", T: T26 };
    const tmp2 = new tmp("discord_protos.discord_experimentation.v1.PlatformVersionRange", items, new.target);
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
          obj.lowerBound = items213.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.lowerBound);
        } else if (2 === tmp5) {
          obj.upperBound = items213.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.upperBound);
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
  internalBinaryWrite(lowerBound, tag, writeUnknownFields) {
    if (lowerBound.lowerBound) {
      internalBinaryWrite = items213.internalBinaryWrite;
      lowerBound = lowerBound.lowerBound;
      const tagResult = tag.tag(1, _mod1198.WireType.LengthDelimited);
      const internalBinaryWriteResult = internalBinaryWrite(lowerBound, tagResult.fork(), writeUnknownFields);
      const joined = internalBinaryWriteResult.join();
    }
    if (lowerBound.upperBound) {
      internalBinaryWrite2 = items213.internalBinaryWrite;
      const upperBound = lowerBound.upperBound;
      const tagResult1 = tag.tag(2, _mod1198.WireType.LengthDelimited);
      const internalBinaryWrite2Result = internalBinaryWrite2(upperBound, tagResult1.fork(), writeUnknownFields);
      const joined1 = internalBinaryWrite2Result.join();
    }
    let onWrite = writeUnknownFields.writeUnknownFields;
    if (false !== onWrite) {
      if (1 == onWrite) {
        onWrite = _mod1198.UnknownFieldHandler.onWrite;
      }
      const self = this;
      onWrite(this.typeName, lowerBound, tag);
    }
    return tag;
  }
}
const prototype25 = PlatformVersionRange$Type.prototype;
const items23 = [, ];
const obj18 = { no: 1, name: "lower_bound", kind: "message", T: T25 };
items23[0] = obj18;
items23[1] = { no: 2, name: "upper_bound", kind: "message", T: T26 };
const items212 = new items21("discord_protos.discord_experimentation.v1.PlatformVersionRange", items23, obj16, tmp5, tmp4, tmp3, "create", "internalBinaryRead", "internalBinaryWrite", tmp2);
const MessageType26 = _mod1198.MessageType;
class PlatformVersionRangeBound$Type extends MessageType26 {
  constructor() {
    const items = [, ];
    obj = { no: 1, name: "version", kind: "message", T: T27 };
    items[0] = obj;
    items[1] = { no: 2, name: "inclusive", kind: "scalar", T: 8 };
    const tmp2 = new tmp("discord_protos.discord_experimentation.v1.PlatformVersionRangeBound", items, new.target);
    return tmp2;
  }
  create(arr) {
    obj = { inclusive: false };
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
          obj.version = items214.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.version);
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
  internalBinaryWrite(version, tag, writeUnknownFields) {
    if (version.version) {
      internalBinaryWrite = items214.internalBinaryWrite;
      version = version.version;
      const tagResult = tag.tag(1, _mod1198.WireType.LengthDelimited);
      const internalBinaryWriteResult = internalBinaryWrite(version, tagResult.fork(), writeUnknownFields);
      const joined = internalBinaryWriteResult.join();
    }
    if (false !== version.inclusive) {
      const tagResult1 = tag.tag(2, _mod1198.WireType.Varint);
      tagResult1.bool(version.inclusive);
    }
    let onWrite = writeUnknownFields.writeUnknownFields;
    if (false !== onWrite) {
      if (1 == onWrite) {
        onWrite = _mod1198.UnknownFieldHandler.onWrite;
      }
      const self = this;
      onWrite(this.typeName, version, tag);
    }
    return tag;
  }
}
const prototype26 = PlatformVersionRangeBound$Type.prototype;
const items24 = [, ];
const obj19 = { no: 1, name: "version", kind: "message", T: T27 };
items24[0] = obj19;
items24[1] = { no: 2, name: "inclusive", kind: "scalar", T: 8 };
const items213 = new items21("discord_protos.discord_experimentation.v1.PlatformVersionRangeBound", items24, obj16, tmp5, tmp4, tmp3, "create", "internalBinaryRead", "internalBinaryWrite", tmp2);
const MessageType27 = _mod1198.MessageType;
class PlatformVersionSpecifier$Type extends MessageType27 {
  constructor() {
    const items = [{ no: 1, name: "major", kind: "scalar", T: 13 }, , ];
    obj = { no: 2, name: "minor", kind: "message", T };
    class T {
      constructor() {
        return closure_1_0(closure_1_1[2]).UInt32Value;
      }
    }
    items[1] = obj;
    items[2] = { no: 3, name: "build", kind: "message", T: T28 };
    const tmp2 = new tmp("discord_protos.discord_experimentation.v1.PlatformVersionSpecifier", items, T);
    return tmp2;
  }
  create(arr) {
    obj = { major: 0 };
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
          obj.major = pos.uint32();
        } else if (2 === tmp5) {
          let UInt32Value = wrappers.UInt32Value;
          obj.minor = UInt32Value.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.minor);
        } else if (3 === tmp5) {
          let UInt64Value = wrappers.UInt64Value;
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
  internalBinaryWrite(major, tag, writeUnknownFields) {
    if (0 !== major.major) {
      const tagResult = tag.tag(1, _mod1198.WireType.Varint);
      tagResult.uint32(major.major);
    }
    if (major.minor) {
      const UInt32Value = wrappers.UInt32Value;
      internalBinaryWrite = UInt32Value.internalBinaryWrite;
      const minor = major.minor;
      const tagResult1 = tag.tag(2, _mod1198.WireType.LengthDelimited);
      const internalBinaryWriteResult = internalBinaryWrite(minor, tagResult1.fork(), writeUnknownFields);
      const joined = internalBinaryWriteResult.join();
    }
    if (major.build) {
      const UInt64Value = wrappers.UInt64Value;
      internalBinaryWrite2 = UInt64Value.internalBinaryWrite;
      const build = major.build;
      const tagResult2 = tag.tag(3, _mod1198.WireType.LengthDelimited);
      const internalBinaryWrite2Result = internalBinaryWrite2(build, tagResult2.fork(), writeUnknownFields);
      const joined1 = internalBinaryWrite2Result.join();
    }
    let onWrite = writeUnknownFields.writeUnknownFields;
    if (false !== onWrite) {
      if (1 == onWrite) {
        onWrite = _mod1198.UnknownFieldHandler.onWrite;
      }
      const self = this;
      onWrite(this.typeName, major, tag);
    }
    return tag;
  }
}
const prototype27 = PlatformVersionSpecifier$Type.prototype;
const items25 = [
  { no: 1, name: "major", kind: "scalar", T: 13 },
  {
    no: 2,
    name: "minor",
    kind: "message",
    T() {
      return require("wrappers").UInt32Value;
    }
  },
  { no: 3, name: "build", kind: "message", T: T28 }
];
const items214 = new items21("discord_protos.discord_experimentation.v1.PlatformVersionSpecifier", items25, obj16, tmp5, tmp4, tmp3, "create", "internalBinaryRead", "internalBinaryWrite", tmp2);
const MessageType28 = _mod1198.MessageType;
class ClientRequiredChanges$Type extends MessageType28 {
  constructor() {
    const items = [{ no: 1, name: "commit_hashes", kind: "scalar", repeat: 2, T: 9 }, { no: 2, name: "pr_numbers", kind: "scalar", repeat: 1, T: 5 }];
    const tmp2 = new tmp("discord_protos.discord_experimentation.v1.ClientRequiredChanges", items, new.target);
    return tmp2;
  }
  create(arr) {
    obj = { commitHashes: [], prNumbers: [] };
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
          let commitHashes = obj.commitHashes;
          let arr = commitHashes.push(pos.string());
        } else if (2 === tmp5) {
          if (tmp6 === _mod1198.WireType.LengthDelimited) {
            let sum1 = pos.int32() + pos.pos;
            if (pos.pos < sum1) {
              do {
                let prNumbers = obj.prNumbers;
                let arr2 = prNumbers.push(pos.int32());
                pos = pos.pos;
              } while (pos < sum1);
            }
          } else {
            let prNumbers1 = obj.prNumbers;
            let arr3 = prNumbers1.push(pos.int32());
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
  internalBinaryWrite(commitHashes, tag, writeUnknownFields) {
    let length;
    let length2;
    let num = 0;
    if (0 < commitHashes.commitHashes.length) {
      do {
        let tagResult = tag.tag(1, _mod1198.WireType.LengthDelimited);
        let stringResult = tagResult.string(commitHashes.commitHashes[num]);
        num = num + 1;
        length = commitHashes.commitHashes.length;
      } while (num < length);
    }
    if (commitHashes.prNumbers.length) {
      const tagResult1 = tag.tag(2, _mod1198.WireType.LengthDelimited);
      tagResult1.fork();
      let num3 = 0;
      if (0 < commitHashes.prNumbers.length) {
        do {
          let int32Result = tag.int32(commitHashes.prNumbers[num3]);
          num3 = num3 + 1;
          length2 = commitHashes.prNumbers.length;
        } while (num3 < length2);
      }
      const joined = tag.join();
    }
    let onWrite = writeUnknownFields.writeUnknownFields;
    if (false !== onWrite) {
      if (1 == onWrite) {
        onWrite = _mod1198.UnknownFieldHandler.onWrite;
      }
      const self = this;
      onWrite(this.typeName, commitHashes, tag);
    }
    return tag;
  }
}
const prototype28 = ClientRequiredChanges$Type.prototype;
const items26 = [{ no: 1, name: "commit_hashes", kind: "scalar", repeat: 2, T: 9 }, { no: 2, name: "pr_numbers", kind: "scalar", repeat: 1, T: 5 }];
const items215 = new items21("discord_protos.discord_experimentation.v1.ClientRequiredChanges", items26, obj16, tmp5, tmp4, tmp3, "create", "internalBinaryRead", "internalBinaryWrite", tmp2);
const MessageType29 = _mod1198.MessageType;
class UserIsBot$Type extends MessageType29 {
  constructor() {
    const items = [{ no: 1, name: "is_bot", kind: "scalar", T: 8 }];
    const tmp2 = new tmp("discord_protos.discord_experimentation.v1.UserIsBot", items, { "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_USER" }, new.target);
    return tmp2;
  }
  create(arr) {
    obj = { isBot: false };
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
  internalBinaryWrite(isBot, tag, writeUnknownFields) {
    if (false !== isBot.isBot) {
      const tagResult = tag.tag(1, _mod1198.WireType.Varint);
      tagResult.bool(isBot.isBot);
    }
    let onWrite = writeUnknownFields.writeUnknownFields;
    if (false !== onWrite) {
      if (1 == onWrite) {
        onWrite = _mod1198.UnknownFieldHandler.onWrite;
      }
      const self = this;
      onWrite(this.typeName, isBot, tag);
    }
    return tag;
  }
}
const prototype29 = UserIsBot$Type.prototype;
const items27 = [{ no: 1, name: "is_bot", kind: "scalar", T: 8 }];
const clientRequiredChangesType = new ClientRequiredChanges$Type("discord_protos.discord_experimentation.v1.UserIsBot", items27, { "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_USER" }, tmp5, tmp4, tmp3, "create", "internalBinaryRead", "internalBinaryWrite", tmp2, undefined);
const MessageType30 = _mod1198.MessageType;
class UserAgeRange$Type extends MessageType30 {
  constructor() {
    const items = [, ];
    obj = { no: 1, name: "min_age_years", kind: "message", T: T29 };
    items[0] = obj;
    items[1] = { no: 2, name: "max_age_years", kind: "message", T: T30 };
    const tmp2 = new tmp("discord_protos.discord_experimentation.v1.UserAgeRange", items, { "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_USER" }, new.target);
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
          let UInt32Value2 = wrappers.UInt32Value;
          obj.minAgeYears = UInt32Value2.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.minAgeYears);
        } else if (2 === tmp5) {
          let UInt32Value = wrappers.UInt32Value;
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
  internalBinaryWrite(minAgeYears, tag, writeUnknownFields) {
    if (minAgeYears.minAgeYears) {
      const UInt32Value = wrappers.UInt32Value;
      internalBinaryWrite = UInt32Value.internalBinaryWrite;
      minAgeYears = minAgeYears.minAgeYears;
      const tagResult = tag.tag(1, _mod1198.WireType.LengthDelimited);
      const internalBinaryWriteResult = internalBinaryWrite(minAgeYears, tagResult.fork(), writeUnknownFields);
      const joined = internalBinaryWriteResult.join();
    }
    if (minAgeYears.maxAgeYears) {
      const UInt32Value2 = wrappers.UInt32Value;
      internalBinaryWrite2 = UInt32Value2.internalBinaryWrite;
      const maxAgeYears = minAgeYears.maxAgeYears;
      const tagResult1 = tag.tag(2, _mod1198.WireType.LengthDelimited);
      const internalBinaryWrite2Result = internalBinaryWrite2(maxAgeYears, tagResult1.fork(), writeUnknownFields);
      const joined1 = internalBinaryWrite2Result.join();
    }
    let onWrite = writeUnknownFields.writeUnknownFields;
    if (false !== onWrite) {
      if (1 == onWrite) {
        onWrite = _mod1198.UnknownFieldHandler.onWrite;
      }
      const self = this;
      onWrite(this.typeName, minAgeYears, tag);
    }
    return tag;
  }
}
const prototype30 = UserAgeRange$Type.prototype;
const items28 = [, ];
const obj20 = { no: 1, name: "min_age_years", kind: "message", T: T29 };
items28[0] = obj20;
items28[1] = { no: 2, name: "max_age_years", kind: "message", T: T30 };
const obj21 = { "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_USER" };
const clientRequiredChangesType1 = new ClientRequiredChanges$Type("discord_protos.discord_experimentation.v1.UserAgeRange", items28, obj21, tmp5, tmp4, tmp3, "create", "internalBinaryRead", "internalBinaryWrite", tmp2, undefined);
const MessageType31 = _mod1198.MessageType;
class Fixed64Value$Type extends MessageType31 {
  constructor() {
    const items = [{ no: 1, name: "value", kind: "scalar", T: 6 }];
    const tmp2 = new tmp("discord_protos.discord_experimentation.v1.Fixed64Value", items, new.target);
    return tmp2;
  }
  create(arr) {
    obj = { value: "0" };
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
  internalBinaryWrite(value, tag, writeUnknownFields) {
    if ("0" !== value.value) {
      const tagResult = tag.tag(1, _mod1198.WireType.Bit64);
      tagResult.fixed64(value.value);
    }
    let onWrite = writeUnknownFields.writeUnknownFields;
    if (false !== onWrite) {
      if (1 == onWrite) {
        onWrite = _mod1198.UnknownFieldHandler.onWrite;
      }
      const self = this;
      onWrite(this.typeName, value, tag);
    }
    return tag;
  }
}
const prototype31 = Fixed64Value$Type.prototype;
const items29 = [{ no: 1, name: "value", kind: "scalar", T: 6 }];
const items281 = new items28("discord_protos.discord_experimentation.v1.Fixed64Value", items29, obj21, tmp5, tmp4, tmp3, "create", "internalBinaryRead", "internalBinaryWrite", tmp2);
const MessageType32 = _mod1198.MessageType;
class UserIDRange$Type extends MessageType32 {
  constructor() {
    const items = [, ];
    obj = { no: 1, name: "min_id", kind: "message", T: T31 };
    items[0] = obj;
    items[1] = { no: 2, name: "max_id", kind: "message", T: T32 };
    const tmp2 = new tmp("discord_protos.discord_experimentation.v1.UserIDRange", items, { "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_USER" }, new.target);
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
          obj.minId = items281.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.minId);
        } else if (2 === tmp5) {
          obj.maxId = items281.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.maxId);
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
  internalBinaryWrite(minId, tag, writeUnknownFields) {
    if (minId.minId) {
      internalBinaryWrite = items281.internalBinaryWrite;
      minId = minId.minId;
      const tagResult = tag.tag(1, _mod1198.WireType.LengthDelimited);
      const internalBinaryWriteResult = internalBinaryWrite(minId, tagResult.fork(), writeUnknownFields);
      const joined = internalBinaryWriteResult.join();
    }
    if (minId.maxId) {
      internalBinaryWrite2 = items281.internalBinaryWrite;
      const maxId = minId.maxId;
      const tagResult1 = tag.tag(2, _mod1198.WireType.LengthDelimited);
      const internalBinaryWrite2Result = internalBinaryWrite2(maxId, tagResult1.fork(), writeUnknownFields);
      const joined1 = internalBinaryWrite2Result.join();
    }
    let onWrite = writeUnknownFields.writeUnknownFields;
    if (false !== onWrite) {
      if (1 == onWrite) {
        onWrite = _mod1198.UnknownFieldHandler.onWrite;
      }
      const self = this;
      onWrite(this.typeName, minId, tag);
    }
    return tag;
  }
}
const prototype32 = UserIDRange$Type.prototype;
const items30 = [, ];
const obj22 = { no: 1, name: "min_id", kind: "message", T: T31 };
items30[0] = obj22;
items30[1] = { no: 2, name: "max_id", kind: "message", T: T32 };
const fixed64ValueType = new Fixed64Value$Type("discord_protos.discord_experimentation.v1.UserIDRange", items30, { "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_USER" }, tmp5, tmp4, tmp3, "create", "internalBinaryRead", "internalBinaryWrite", tmp2, undefined);
const MessageType33 = _mod1198.MessageType;
class UserHasFlag$Type extends MessageType33 {
  constructor() {
    const items = [{ no: 1, name: "mask", kind: "scalar", T: 6 }];
    const tmp2 = new tmp("discord_protos.discord_experimentation.v1.UserHasFlag", items, { "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_USER" }, new.target);
    return tmp2;
  }
  create(arr) {
    obj = { mask: "0" };
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
  internalBinaryWrite(mask, tag, writeUnknownFields) {
    if ("0" !== mask.mask) {
      const tagResult = tag.tag(1, _mod1198.WireType.Bit64);
      tagResult.fixed64(mask.mask);
    }
    let onWrite = writeUnknownFields.writeUnknownFields;
    if (false !== onWrite) {
      if (1 == onWrite) {
        onWrite = _mod1198.UnknownFieldHandler.onWrite;
      }
      const self = this;
      onWrite(this.typeName, mask, tag);
    }
    return tag;
  }
}
const prototype33 = UserHasFlag$Type.prototype;
const items31 = [{ no: 1, name: "mask", kind: "scalar", T: 6 }];
const fixed64ValueType1 = new Fixed64Value$Type("discord_protos.discord_experimentation.v1.UserHasFlag", items31, { "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_USER" }, tmp5, tmp4, tmp3, "create", "internalBinaryRead", "internalBinaryWrite", tmp2, undefined);
const MessageType34 = _mod1198.MessageType;
class UnitIdInRangeByHash$Type extends MessageType34 {
  constructor() {
    const items = [{ no: 1, name: "hash_key", kind: "scalar", T: 9 }, { no: 2, name: "stop_ring_position", kind: "scalar", T: 13 }, { no: 3, name: "start_ring_position", kind: "scalar", T: 13 }];
    const tmp2 = new tmp("discord_protos.discord_experimentation.v1.UnitIdInRangeByHash", items, { "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_UTILITY" }, new.target);
    return tmp2;
  }
  create(arr) {
    obj = { hashKey: "", stopRingPosition: 0, startRingPosition: 0 };
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
  internalBinaryWrite(hashKey, tag, writeUnknownFields) {
    if ("" !== hashKey.hashKey) {
      const tagResult = tag.tag(1, _mod1198.WireType.LengthDelimited);
      tagResult.string(hashKey.hashKey);
    }
    if (0 !== hashKey.stopRingPosition) {
      const tagResult1 = tag.tag(2, _mod1198.WireType.Varint);
      tagResult1.uint32(hashKey.stopRingPosition);
    }
    if (0 !== hashKey.startRingPosition) {
      const tagResult2 = tag.tag(3, _mod1198.WireType.Varint);
      tagResult2.uint32(hashKey.startRingPosition);
    }
    let onWrite = writeUnknownFields.writeUnknownFields;
    if (false !== onWrite) {
      if (1 == onWrite) {
        onWrite = _mod1198.UnknownFieldHandler.onWrite;
      }
      const self = this;
      onWrite(this.typeName, hashKey, tag);
    }
    return tag;
  }
}
const prototype34 = UnitIdInRangeByHash$Type.prototype;
const items32 = [{ no: 1, name: "hash_key", kind: "scalar", T: 9 }, { no: 2, name: "stop_ring_position", kind: "scalar", T: 13 }, { no: 3, name: "start_ring_position", kind: "scalar", T: 13 }];
const fixed64ValueType2 = new Fixed64Value$Type("discord_protos.discord_experimentation.v1.UnitIdInRangeByHash", items32, { "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_UTILITY" }, tmp5, tmp4, tmp3, "create", "internalBinaryRead", "internalBinaryWrite", tmp2, undefined);
const MessageType35 = _mod1198.MessageType;
class ClientReleaseChannel$Type extends MessageType35 {
  constructor() {
    const items = [{ no: 1, name: "release_channels", kind: "scalar", repeat: 2, T: 9 }];
    const tmp2 = new tmp("discord_protos.discord_experimentation.v1.ClientReleaseChannel", items, { "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_CLIENT" }, new.target);
    return tmp2;
  }
  create(arr) {
    obj = { releaseChannels: [] };
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
  internalBinaryWrite(releaseChannels, tag, writeUnknownFields) {
    let length;
    let num = 0;
    if (0 < releaseChannels.releaseChannels.length) {
      do {
        let tagResult = tag.tag(1, _mod1198.WireType.LengthDelimited);
        let stringResult = tagResult.string(releaseChannels.releaseChannels[num]);
        num = num + 1;
        length = releaseChannels.releaseChannels.length;
      } while (num < length);
    }
    let onWrite = writeUnknownFields.writeUnknownFields;
    if (false !== onWrite) {
      if (1 == onWrite) {
        onWrite = _mod1198.UnknownFieldHandler.onWrite;
      }
      const self = this;
      onWrite(this.typeName, releaseChannels, tag);
    }
    return tag;
  }
}
const prototype35 = ClientReleaseChannel$Type.prototype;
const items33 = [{ no: 1, name: "release_channels", kind: "scalar", repeat: 2, T: 9 }];
const fixed64ValueType3 = new Fixed64Value$Type("discord_protos.discord_experimentation.v1.ClientReleaseChannel", items33, { "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_CLIENT" }, tmp5, tmp4, tmp3, "create", "internalBinaryRead", "internalBinaryWrite", tmp2, undefined);
const MessageType36 = _mod1198.MessageType;
class Always$Type extends MessageType36 {
  constructor() {
    const items = [{ no: 1, name: "value", kind: "scalar", T: 8 }];
    const tmp2 = new tmp("discord_protos.discord_experimentation.v1.Always", items, { "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_UTILITY" }, new.target);
    return tmp2;
  }
  create(arr) {
    obj = { value: false };
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
  internalBinaryWrite(value, tag, writeUnknownFields) {
    if (false !== value.value) {
      const tagResult = tag.tag(1, _mod1198.WireType.Varint);
      tagResult.bool(value.value);
    }
    let onWrite = writeUnknownFields.writeUnknownFields;
    if (false !== onWrite) {
      if (1 == onWrite) {
        onWrite = _mod1198.UnknownFieldHandler.onWrite;
      }
      const self = this;
      onWrite(this.typeName, value, tag);
    }
    return tag;
  }
}
const prototype36 = Always$Type.prototype;
const items34 = [{ no: 1, name: "value", kind: "scalar", T: 8 }];
const fixed64ValueType4 = new Fixed64Value$Type("discord_protos.discord_experimentation.v1.Always", items34, { "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_UTILITY" }, tmp5, tmp4, tmp3, "create", "internalBinaryRead", "internalBinaryWrite", tmp2, undefined);
const MessageType37 = _mod1198.MessageType;
class UnitIdInExperiment$Type extends MessageType37 {
  constructor() {
    const items = [{ no: 1, name: "experiment_id", kind: "scalar", T: 6 }, { no: 2, name: "variation_ids", kind: "scalar", repeat: 1, T: 5 }];
    const tmp2 = new tmp("discord_protos.discord_experimentation.v1.UnitIdInExperiment", items, { "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_UTILITY", "discord_protos.discord_experimentation.v1.filter_evaluation_mode": "FILTER_EVALUATION_MODE_LAZY" }, new.target);
    return tmp2;
  }
  create(arr) {
    obj = { experimentId: "0", variationIds: [] };
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
          let str4 = pos.fixed64();
          obj.experimentId = str4.toString();
        } else if (2 === tmp5) {
          if (tmp6 === _mod1198.WireType.LengthDelimited) {
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
            let arr2 = variationIds1.push(pos.int32());
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
  internalBinaryWrite(experimentId, tag, writeUnknownFields) {
    let length;
    if ("0" !== experimentId.experimentId) {
      const tagResult = tag.tag(1, _mod1198.WireType.Bit64);
      tagResult.fixed64(experimentId.experimentId);
    }
    if (experimentId.variationIds.length) {
      const tagResult1 = tag.tag(2, _mod1198.WireType.LengthDelimited);
      tagResult1.fork();
      let num3 = 0;
      if (0 < experimentId.variationIds.length) {
        do {
          let int32Result = tag.int32(experimentId.variationIds[num3]);
          num3 = num3 + 1;
          length = experimentId.variationIds.length;
        } while (num3 < length);
      }
      const joined = tag.join();
    }
    let onWrite = writeUnknownFields.writeUnknownFields;
    if (false !== onWrite) {
      if (1 == onWrite) {
        onWrite = _mod1198.UnknownFieldHandler.onWrite;
      }
      const self = this;
      onWrite(this.typeName, experimentId, tag);
    }
    return tag;
  }
}
const prototype37 = UnitIdInExperiment$Type.prototype;
const items35 = [{ no: 1, name: "experiment_id", kind: "scalar", T: 6 }, { no: 2, name: "variation_ids", kind: "scalar", repeat: 1, T: 5 }];
const fixed64ValueType5 = new Fixed64Value$Type("discord_protos.discord_experimentation.v1.UnitIdInExperiment", items35, { "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_UTILITY", "discord_protos.discord_experimentation.v1.filter_evaluation_mode": "FILTER_EVALUATION_MODE_LAZY" }, tmp5, tmp4, tmp3, "create", "internalBinaryRead", "internalBinaryWrite", tmp2, undefined);
const MessageType38 = _mod1198.MessageType;
class UserPremiumType$Type extends MessageType38 {
  constructor() {
    const items = [{ no: 1, name: "premium_types", kind: "scalar", repeat: 1, T: 5 }];
    const tmp2 = new tmp("discord_protos.discord_experimentation.v1.UserPremiumType", items, { "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_USER" }, new.target);
    return tmp2;
  }
  create(arr) {
    obj = { premiumTypes: [] };
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
                let premiumTypes = obj.premiumTypes;
                let arr = premiumTypes.push(pos.int32());
                pos = pos.pos;
              } while (pos < sum1);
            }
          } else {
            let premiumTypes1 = obj.premiumTypes;
            let arr2 = premiumTypes1.push(pos.int32());
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
  internalBinaryWrite(premiumTypes, tag, writeUnknownFields) {
    let length;
    if (premiumTypes.premiumTypes.length) {
      const tagResult = tag.tag(1, _mod1198.WireType.LengthDelimited);
      tagResult.fork();
      let num2 = 0;
      if (0 < premiumTypes.premiumTypes.length) {
        do {
          let int32Result = tag.int32(premiumTypes.premiumTypes[num2]);
          num2 = num2 + 1;
          length = premiumTypes.premiumTypes.length;
        } while (num2 < length);
      }
      const joined = tag.join();
    }
    let onWrite = writeUnknownFields.writeUnknownFields;
    if (false !== onWrite) {
      if (1 == onWrite) {
        onWrite = _mod1198.UnknownFieldHandler.onWrite;
      }
      const self = this;
      onWrite(this.typeName, premiumTypes, tag);
    }
    return tag;
  }
}
const prototype38 = UserPremiumType$Type.prototype;
const items36 = [{ no: 1, name: "premium_types", kind: "scalar", repeat: 1, T: 5 }];
const fixed64ValueType6 = new Fixed64Value$Type("discord_protos.discord_experimentation.v1.UserPremiumType", items36, { "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_USER" }, tmp5, tmp4, tmp3, "create", "internalBinaryRead", "internalBinaryWrite", tmp2, undefined);
const MessageType39 = _mod1198.MessageType;
class UnitIdMatchesFilterSnapshot$Type extends MessageType39 {
  constructor() {
    const items = [{ no: 1, name: "filter_snapshot_name", kind: "scalar", T: 9 }, { no: 2, name: "target_filter_values", kind: "scalar", repeat: 1, T: 6 }];
    const tmp2 = new tmp("discord_protos.discord_experimentation.v1.UnitIdMatchesFilterSnapshot", items, { "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_UTILITY" }, new.target);
    return tmp2;
  }
  create(arr) {
    obj = { filterSnapshotName: "", targetFilterValues: [] };
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
          obj.filterSnapshotName = pos.string();
        } else if (2 === tmp5) {
          if (tmp6 === _mod1198.WireType.LengthDelimited) {
            let sum1 = pos.int32() + pos.pos;
            if (pos.pos < sum1) {
              do {
                let targetFilterValues = obj.targetFilterValues;
                let push2 = targetFilterValues.push;
                let str5 = pos.fixed64();
                let push2Result = push2(str5.toString());
                pos = pos.pos;
              } while (pos < sum1);
            }
          } else {
            let targetFilterValues1 = obj.targetFilterValues;
            let push = targetFilterValues1.push;
            let str4 = pos.fixed64();
            let arr = push(str4.toString());
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
  internalBinaryWrite(filterSnapshotName, tag, writeUnknownFields) {
    let length;
    if ("" !== filterSnapshotName.filterSnapshotName) {
      const tagResult = tag.tag(1, _mod1198.WireType.LengthDelimited);
      tagResult.string(filterSnapshotName.filterSnapshotName);
    }
    if (filterSnapshotName.targetFilterValues.length) {
      const tagResult1 = tag.tag(2, _mod1198.WireType.LengthDelimited);
      tagResult1.fork();
      let num3 = 0;
      if (0 < filterSnapshotName.targetFilterValues.length) {
        do {
          let fixed64Result = tag.fixed64(filterSnapshotName.targetFilterValues[num3]);
          num3 = num3 + 1;
          length = filterSnapshotName.targetFilterValues.length;
        } while (num3 < length);
      }
      const joined = tag.join();
    }
    let onWrite = writeUnknownFields.writeUnknownFields;
    if (false !== onWrite) {
      if (1 == onWrite) {
        onWrite = _mod1198.UnknownFieldHandler.onWrite;
      }
      const self = this;
      onWrite(this.typeName, filterSnapshotName, tag);
    }
    return tag;
  }
}
const prototype39 = UnitIdMatchesFilterSnapshot$Type.prototype;
const items37 = [{ no: 1, name: "filter_snapshot_name", kind: "scalar", T: 9 }, { no: 2, name: "target_filter_values", kind: "scalar", repeat: 1, T: 6 }];
const fixed64ValueType7 = new Fixed64Value$Type("discord_protos.discord_experimentation.v1.UnitIdMatchesFilterSnapshot", items37, { "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_UTILITY" }, tmp5, tmp4, tmp3, "create", "internalBinaryRead", "internalBinaryWrite", tmp2, undefined);
const MessageType40 = _mod1198.MessageType;
class GuildIds$Type extends MessageType40 {
  constructor() {
    const items = [{ no: 1, name: "guild_ids", kind: "scalar", repeat: 1, T: 6 }];
    const tmp2 = new tmp("discord_protos.discord_experimentation.v1.GuildIds", items, { "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_GUILD", "discord_protos.discord_experimentation.v1.filter_evaluation_mode": "FILTER_EVALUATION_MODE_LAZY" }, new.target);
    return tmp2;
  }
  create(arr) {
    obj = { guildIds: [] };
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
                let guildIds = obj.guildIds;
                let push2 = guildIds.push;
                let str5 = pos.fixed64();
                let push2Result = push2(str5.toString());
                pos = pos.pos;
              } while (pos < sum1);
            }
          } else {
            let guildIds1 = obj.guildIds;
            let push = guildIds1.push;
            let str4 = pos.fixed64();
            let arr = push(str4.toString());
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
  internalBinaryWrite(guildIds, tag, writeUnknownFields) {
    let length;
    if (guildIds.guildIds.length) {
      const tagResult = tag.tag(1, _mod1198.WireType.LengthDelimited);
      tagResult.fork();
      let num2 = 0;
      if (0 < guildIds.guildIds.length) {
        do {
          let fixed64Result = tag.fixed64(guildIds.guildIds[num2]);
          num2 = num2 + 1;
          length = guildIds.guildIds.length;
        } while (num2 < length);
      }
      const joined = tag.join();
    }
    let onWrite = writeUnknownFields.writeUnknownFields;
    if (false !== onWrite) {
      if (1 == onWrite) {
        onWrite = _mod1198.UnknownFieldHandler.onWrite;
      }
      const self = this;
      onWrite(this.typeName, guildIds, tag);
    }
    return tag;
  }
}
const prototype40 = GuildIds$Type.prototype;
const items38 = [{ no: 1, name: "guild_ids", kind: "scalar", repeat: 1, T: 6 }];
const fixed64ValueType8 = new Fixed64Value$Type("discord_protos.discord_experimentation.v1.GuildIds", items38, { "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_GUILD", "discord_protos.discord_experimentation.v1.filter_evaluation_mode": "FILTER_EVALUATION_MODE_LAZY" }, tmp5, tmp4, tmp3, "create", "internalBinaryRead", "internalBinaryWrite", GuildIds$Type, undefined, tmp, require, dependencyMap, Rule_Type, obj2, obj3, obj4, this, defineProperty1, ruleType, filterType, overrideType, overrideType1, overrideType2, overrideType3, overrideType4, overrideType5, overrideType6, items81, items82, items83, clientLocation_LocationType, clientLocation_LocationType1, clientLocation_LocationType2, clientLocation_LocationType3, clientLocation_LocationType4, items161, items162, items163, items164, sDKVersionSpecifierType, items211, items212, items213, items214, items215, clientRequiredChangesType, clientRequiredChangesType1, items281, fixed64ValueType, fixed64ValueType1, fixed64ValueType2, fixed64ValueType3, fixed64ValueType4, fixed64ValueType5, fixed64ValueType6, fixed64ValueType7, Fixed64Value$Type);
const MessageType41 = _mod1198.MessageType;
class GuildMemberCountRange$Type extends MessageType41 {
  constructor() {
    const items = [, ];
    obj = { no: 1, name: "min_count", kind: "message", T: T33 };
    items[0] = obj;
    items[1] = { no: 2, name: "max_count", kind: "message", T: T34 };
    const tmp2 = new tmp("discord_protos.discord_experimentation.v1.GuildMemberCountRange", items, { "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_GUILD", "discord_protos.discord_experimentation.v1.filter_evaluation_mode": "FILTER_EVALUATION_MODE_STICKY" }, new.target);
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
          let UInt32Value2 = wrappers.UInt32Value;
          obj.minCount = UInt32Value2.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.minCount);
        } else if (2 === tmp5) {
          let UInt32Value = wrappers.UInt32Value;
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
  internalBinaryWrite(minCount, tag, writeUnknownFields) {
    if (minCount.minCount) {
      const UInt32Value = wrappers.UInt32Value;
      internalBinaryWrite = UInt32Value.internalBinaryWrite;
      minCount = minCount.minCount;
      const tagResult = tag.tag(1, _mod1198.WireType.LengthDelimited);
      const internalBinaryWriteResult = internalBinaryWrite(minCount, tagResult.fork(), writeUnknownFields);
      const joined = internalBinaryWriteResult.join();
    }
    if (minCount.maxCount) {
      const UInt32Value2 = wrappers.UInt32Value;
      internalBinaryWrite2 = UInt32Value2.internalBinaryWrite;
      const maxCount = minCount.maxCount;
      const tagResult1 = tag.tag(2, _mod1198.WireType.LengthDelimited);
      const internalBinaryWrite2Result = internalBinaryWrite2(maxCount, tagResult1.fork(), writeUnknownFields);
      const joined1 = internalBinaryWrite2Result.join();
    }
    let onWrite = writeUnknownFields.writeUnknownFields;
    if (false !== onWrite) {
      if (1 == onWrite) {
        onWrite = _mod1198.UnknownFieldHandler.onWrite;
      }
      const self = this;
      onWrite(this.typeName, minCount, tag);
    }
    return tag;
  }
}
const prototype41 = GuildMemberCountRange$Type.prototype;
const items39 = [, ];
const obj23 = { no: 1, name: "min_count", kind: "message", T: T33 };
items39[0] = obj23;
items39[1] = { no: 2, name: "max_count", kind: "message", T: T34 };
const guildIdsType = new GuildIds$Type("discord_protos.discord_experimentation.v1.GuildMemberCountRange", items39, { "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_GUILD", "discord_protos.discord_experimentation.v1.filter_evaluation_mode": "FILTER_EVALUATION_MODE_STICKY" }, tmp5, tmp4, GuildMemberCountRange$Type, "create", "internalBinaryRead", "internalBinaryWrite", GuildIds$Type, undefined, tmp, require, dependencyMap, Rule_Type, obj2, obj3, obj4, this, defineProperty1, ruleType, filterType, overrideType, overrideType1, overrideType2, overrideType3, overrideType4, overrideType5, overrideType6, items81, items82, items83, clientLocation_LocationType, clientLocation_LocationType1, clientLocation_LocationType2, clientLocation_LocationType3, clientLocation_LocationType4, items161, items162, items163, items164, sDKVersionSpecifierType, items211, items212, items213, items214, items215, clientRequiredChangesType, clientRequiredChangesType1, items281, fixed64ValueType, fixed64ValueType1, fixed64ValueType2, fixed64ValueType3, fixed64ValueType4, fixed64ValueType5, fixed64ValueType6, fixed64ValueType7, fixed64ValueType8, items39, items29, this, exports);
const MessageType42 = _mod1198.MessageType;
class GuildIdRange$Type extends MessageType42 {
  constructor() {
    const items = [, ];
    obj = { no: 1, name: "min_id", kind: "message", T: T35 };
    items[0] = obj;
    items[1] = { no: 2, name: "max_id", kind: "message", T: T36 };
    const tmp2 = new tmp("discord_protos.discord_experimentation.v1.GuildIdRange", items, { "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_GUILD", "discord_protos.discord_experimentation.v1.filter_evaluation_mode": "FILTER_EVALUATION_MODE_LAZY" }, new.target);
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
          obj.minId = items281.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.minId);
        } else if (2 === tmp5) {
          obj.maxId = items281.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.maxId);
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
  internalBinaryWrite(minId, tag, writeUnknownFields) {
    if (minId.minId) {
      internalBinaryWrite = items281.internalBinaryWrite;
      minId = minId.minId;
      const tagResult = tag.tag(1, _mod1198.WireType.LengthDelimited);
      const internalBinaryWriteResult = internalBinaryWrite(minId, tagResult.fork(), writeUnknownFields);
      const joined = internalBinaryWriteResult.join();
    }
    if (minId.maxId) {
      internalBinaryWrite2 = items281.internalBinaryWrite;
      const maxId = minId.maxId;
      const tagResult1 = tag.tag(2, _mod1198.WireType.LengthDelimited);
      const internalBinaryWrite2Result = internalBinaryWrite2(maxId, tagResult1.fork(), writeUnknownFields);
      const joined1 = internalBinaryWrite2Result.join();
    }
    let onWrite = writeUnknownFields.writeUnknownFields;
    if (false !== onWrite) {
      if (1 == onWrite) {
        onWrite = _mod1198.UnknownFieldHandler.onWrite;
      }
      const self = this;
      onWrite(this.typeName, minId, tag);
    }
    return tag;
  }
}
const prototype42 = GuildIdRange$Type.prototype;
const items40 = [, ];
const obj24 = { no: 1, name: "min_id", kind: "message", T: T35 };
items40[0] = obj24;
const obj25 = { no: 2, name: "max_id", kind: "message", T: T36 };
items40[1] = obj25;
const guildMemberCountRangeType = new GuildMemberCountRange$Type("discord_protos.discord_experimentation.v1.GuildIdRange", items40, { "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_GUILD", "discord_protos.discord_experimentation.v1.filter_evaluation_mode": "FILTER_EVALUATION_MODE_LAZY" }, tmp5, GuildIdRange$Type, GuildMemberCountRange$Type, "create", "internalBinaryRead", "internalBinaryWrite", items40, undefined, tmp, require, dependencyMap, Rule_Type, obj2, obj3, obj4, this, defineProperty1, ruleType, filterType, overrideType, overrideType1, overrideType2, overrideType3, overrideType4, overrideType5, overrideType6, items81, items82, items83, clientLocation_LocationType, clientLocation_LocationType1, clientLocation_LocationType2, clientLocation_LocationType3, clientLocation_LocationType4, items161, items162, items163, items164, sDKVersionSpecifierType, items211, items212, items213, items214, items215, clientRequiredChangesType, clientRequiredChangesType1, items281, fixed64ValueType, fixed64ValueType1, fixed64ValueType2, fixed64ValueType3, fixed64ValueType4, fixed64ValueType5, fixed64ValueType6, fixed64ValueType7, fixed64ValueType8, guildIdsType, items29, this, exports, obj25);
const MessageType43 = _mod1198.MessageType;
class GuildHasFeature$Type extends MessageType43 {
  constructor() {
    const items = [{ no: 1, name: "features", kind: "scalar", repeat: 2, T: 9 }];
    const tmp2 = new tmp("discord_protos.discord_experimentation.v1.GuildHasFeature", items, { "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_GUILD", "discord_protos.discord_experimentation.v1.filter_evaluation_mode": "FILTER_EVALUATION_MODE_STICKY" }, new.target);
    return tmp2;
  }
  create(arr) {
    obj = { features: [] };
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
  internalBinaryWrite(features, tag, writeUnknownFields) {
    let length;
    let num = 0;
    if (0 < features.features.length) {
      do {
        let tagResult = tag.tag(1, _mod1198.WireType.LengthDelimited);
        let stringResult = tagResult.string(features.features[num]);
        num = num + 1;
        length = features.features.length;
      } while (num < length);
    }
    let onWrite = writeUnknownFields.writeUnknownFields;
    if (false !== onWrite) {
      if (1 == onWrite) {
        onWrite = _mod1198.UnknownFieldHandler.onWrite;
      }
      const self = this;
      onWrite(this.typeName, features, tag);
    }
    return tag;
  }
}
const prototype43 = GuildHasFeature$Type.prototype;
const items41 = [];
const obj26 = { no: 1, name: "features", kind: "scalar", repeat: 2, T: 9 };
items41[0] = obj26;
const guildIdRangeType = new GuildIdRange$Type("discord_protos.discord_experimentation.v1.GuildHasFeature", items41, { "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_GUILD", "discord_protos.discord_experimentation.v1.filter_evaluation_mode": "FILTER_EVALUATION_MODE_STICKY" }, GuildHasFeature$Type, GuildIdRange$Type, items41, "create", "internalBinaryRead", "internalBinaryWrite", items40, undefined, tmp, require, dependencyMap, Rule_Type, obj2, obj3, obj4, this, defineProperty1, ruleType, filterType, overrideType, overrideType1, overrideType2, overrideType3, overrideType4, overrideType5, overrideType6, items81, items82, items83, clientLocation_LocationType, clientLocation_LocationType1, clientLocation_LocationType2, clientLocation_LocationType3, clientLocation_LocationType4, items161, items162, items163, items164, sDKVersionSpecifierType, items211, items212, items213, items214, items215, clientRequiredChangesType, clientRequiredChangesType1, items281, fixed64ValueType, fixed64ValueType1, fixed64ValueType2, fixed64ValueType3, fixed64ValueType4, fixed64ValueType5, fixed64ValueType6, fixed64ValueType7, fixed64ValueType8, guildIdsType, guildMemberCountRangeType, this, exports, obj26, undefined);
const MessageType44 = _mod1198.MessageType;
class InstallationIds$Type extends MessageType44 {
  constructor() {
    const items = [{ no: 1, name: "installation_ids", kind: "scalar", repeat: 1, T: 6 }];
    const tmp2 = new tmp("discord_protos.discord_experimentation.v1.InstallationIds", items, { "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_CLIENT" }, new.target);
    return tmp2;
  }
  create(arr) {
    obj = { installationIds: [] };
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
                let installationIds = obj.installationIds;
                let push2 = installationIds.push;
                let str5 = pos.fixed64();
                let push2Result = push2(str5.toString());
                pos = pos.pos;
              } while (pos < sum1);
            }
          } else {
            let installationIds1 = obj.installationIds;
            let push = installationIds1.push;
            let str4 = pos.fixed64();
            let arr = push(str4.toString());
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
  internalBinaryWrite(installationIds, tag, writeUnknownFields) {
    let length;
    if (installationIds.installationIds.length) {
      const tagResult = tag.tag(1, _mod1198.WireType.LengthDelimited);
      tagResult.fork();
      let num2 = 0;
      if (0 < installationIds.installationIds.length) {
        do {
          let fixed64Result = tag.fixed64(installationIds.installationIds[num2]);
          num2 = num2 + 1;
          length = installationIds.installationIds.length;
        } while (num2 < length);
      }
      const joined = tag.join();
    }
    let onWrite = writeUnknownFields.writeUnknownFields;
    if (false !== onWrite) {
      if (1 == onWrite) {
        onWrite = _mod1198.UnknownFieldHandler.onWrite;
      }
      const self = this;
      onWrite(this.typeName, installationIds, tag);
    }
    return tag;
  }
}
const prototype44 = InstallationIds$Type.prototype;
const items42 = [{ no: 1, name: "installation_ids", kind: "scalar", repeat: 1, T: 6 }];
const tmp51 = new "create"("discord_protos.discord_experimentation.v1.InstallationIds", items42, { "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_CLIENT" }, GuildHasFeature$Type, GuildIdRange$Type, InstallationIds$Type, "create", items42, "internalBinaryWrite", this, undefined, tmp, require, dependencyMap, Rule_Type, obj2, obj3, obj4, this, defineProperty1, ruleType, filterType, overrideType, overrideType1, overrideType2, overrideType3, overrideType4, overrideType5, overrideType6, items81, items82, items83, clientLocation_LocationType, clientLocation_LocationType1, clientLocation_LocationType2, clientLocation_LocationType3, clientLocation_LocationType4, items161, items162, items163, items164, sDKVersionSpecifierType, items211, items212, items213, items214, items215, clientRequiredChangesType, clientRequiredChangesType1, items281, fixed64ValueType, fixed64ValueType1, fixed64ValueType2, fixed64ValueType3, fixed64ValueType4, fixed64ValueType5, fixed64ValueType6, fixed64ValueType7, fixed64ValueType8, guildIdsType, guildMemberCountRangeType, guildIdRangeType, exports);
const vanityURLCode = tmp51;
let result = size.fileFinishedImporting("../discord_common/js/packages/protos/discord_protos/discord_experimentation/v1/rules.tsx");

export { Rule_Type };
export const Rule_Subtype = obj2;
export const FilterCategory = obj3;
export const FilterEvaluationMode = obj4;
export const Rule = defineProperty1;
export const Override = ruleType;
export const Filter = filterType;
export const StaffUsers = overrideType;
export const UserInGuild = overrideType1;
export const UserIds = overrideType2;
export const UserLocale = overrideType3;
export const ClientLocale = overrideType4;
export const ClientSystemLocale = overrideType5;
export const ClientLocation = overrideType6;
export const ClientLocation_Place = items81;
export const ClientLocation_ISORegion = items82;
export const ClientLocation_Location = items83;
export const UserLocation = clientLocation_LocationType;
export const UserStoreCountry = clientLocation_LocationType1;
export const ClientIP = clientLocation_LocationType2;
export const UserIP = clientLocation_LocationType3;
export const ClientOperatingSystem = clientLocation_LocationType4;
export const SDKVersion = items161;
export const SDKVersionRange = items162;
export const SDKVersionRangeBound = items163;
export const SDKVersionSpecifier = items164;
export const ClientPlatform = sDKVersionSpecifierType;
export const PlatformVersion = items211;
export const PlatformVersionRange = items212;
export const PlatformVersionRangeBound = items213;
export const PlatformVersionSpecifier = items214;
export const ClientRequiredChanges = items215;
export const UserIsBot = clientRequiredChangesType;
export const UserAgeRange = clientRequiredChangesType1;
export const Fixed64Value = items281;
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