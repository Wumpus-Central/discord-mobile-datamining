// === Module 5585: ExpressionSourceRecord ===

// Module 5585 (ExpressionSourceRecord)
import HTTPUtils from "HTTPUtils" /* 1272 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1396 */;
import GuildRecordUtils from "GuildRecordUtils" /* 1971 */;
import SetUtils from "SetUtils" /* 1974 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import Record from "Record" /* 1386 */;

require = fn;
function getEmojiSourceData() {
  const self = this;
  const apply = closure_8.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_8 = async function _getEmojiSourceData(arg0, arg1) {
  closure_2 = tmp3;
  closure_129_0 = null;
  const HTTP = HTTPUtils.HTTP;
  await HTTP.get({ url: closure_2_4.EMOJI_SOURCE_DATA(closure_0), oldFormErrors: true, timeout: 5000, rejectWithError: true });
  if (1 === tmp7) {
    c3 = 0;
    c5 = 3;
  } else if (arg0 === 1) {
    c5 = 3;
    throw arg1;
  } else if (arg0 !== 2) {
    const body = arg1.body;
    let type;
    if (body != null) {
      type = body.type;
    }
    if (type === closure_130_6.GUILD) {
      closure_129_0 = { guild: closure_130_9.createFromServer(body.guild), type: body.type };
      { guild: closure_130_9.createFromServer(body.guild), type: body.type };
    } else {
      let type1;
      if (body != null) {
        type1 = body.type;
      }
      if (type1 === closure_130_6.APPLICATION) {
        closure_129_0 = { application: closure_130_10.createFromServer(body.application), type: body.type };
        { application: closure_130_10.createFromServer(body.application), type: body.type };
      }
    }
    c3 = 0;
  }
  return arg1;
};
const Constants = fn(1074);
({ Endpoints: closure_4, GuildFeatures: hasOwnProperty } = Constants);
const EmojiSourceDataTypes = { GUILD: "GUILD", APPLICATION: "APPLICATION" };
let ExpressionSourceGuildRecord;
class ExpressionSourceGuildRecord extends tmp2 {
  constructor(arg0) {
    tmp = new ExpressionSourceGuildRecord(new.target, new.target);
    ({ id: tmp.id, name: tmp.name, icon: tmp.icon, description: tmp.description, features: tmp.features, premiumTier: tmp.premiumTier, premiumSubscriberCount: tmp.premiumSubscriberCount, presenceCount: tmp.presenceCount, memberCount: tmp.memberCount, emojis: tmp.emojis } = global);
    return tmp;
  }
}
const prototype = ExpressionSourceGuildRecord.prototype;
prototype["getIconURL"] = function getIconURL(size) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  const obj = { id: this.id, size, icon: this.icon, canAnimate: flag };
  return obj.getGuildIconURL(obj);
};
prototype["getIconSource"] = function getIconSource(size, flag) {
  const self = this;
  if (flag === undefined) {
    flag = false;
  }
  return self(1396).getAnimatableSourceWithFallback(flag, (canAnimate) => {
    const obj = { id: self.id, size, icon: self.icon, canAnimate };
    return obj.getGuildIconSource(obj);
  });
};
prototype["hasFeature"] = function hasFeature(arg0) {
  const features = this.features;
  return features.has(arg0);
};
prototype["isDiscoverable"] = function isDiscoverable() {
  return this.hasFeature(constants.DISCOVERABLE);
};
ExpressionSourceGuildRecord["getGuildFromEmojiId"] = function getGuildFromEmojiId(arg0) {
  closure_0 = arg0;
  return (async () => {
    closure_1 = tmp5;
    closure_0 = tmp2;
    closure_128_0 = await closure_1_7(closure_0);
    let guild = null;
    if (null != closure_128_0) {
      let type;
      if (closure_128_0 != null) {
        type = closure_128_0.type;
      }
      guild = null;
      if (type === constants.GUILD) {
        guild = closure_128_0.guild;
      }
    }
    return guild;
  })();
};
ExpressionSourceGuildRecord["_mapCommon"] = function _mapCommon(id) {
  const obj = { id: id.id, name: id.name, icon: id.icon, description: id.description, features: SetUtils.toSetInplace(id.features) };
  return obj;
};
ExpressionSourceGuildRecord["createFromGuildRecord"] = function createFromGuildRecord(joinedEmojiSourceGuildRecord) {
  const obj = {};
  const _mapCommonResult = ExpressionSourceGuildRecord._mapCommon(joinedEmojiSourceGuildRecord);
  const merged = Object.assign(_mapCommonResult);
  const premiumTier = joinedEmojiSourceGuildRecord.premiumTier;
  obj.premiumTier = premiumTier;
  obj.premiumSubscriberCount = joinedEmojiSourceGuildRecord.premiumSubscriberCount;
  obj.presenceCount = null;
  obj.memberCount = null;
  obj.emojis = null;
  if (typeof ExpressionSourceGuildRecord === "function") {
    const tmp6 = new ExpressionSourceGuildRecord(obj, _mapCommonResult, premiumTier);
    ({ id: tmp6.id, name: tmp6.name, icon: tmp6.icon, description: tmp6.description, features: tmp6.features, premiumTier: tmp6.premiumTier, premiumSubscriberCount: tmp6.premiumSubscriberCount, presenceCount: tmp6.presenceCount, memberCount: tmp6.memberCount, emojis: tmp6.emojis } = obj);
    return tmp6;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};
ExpressionSourceGuildRecord["createFromDiscoverableGuild"] = function createFromDiscoverableGuild(emojis) {
  const obj = {};
  const _mapCommonResult = ExpressionSourceGuildRecord._mapCommon(emojis);
  const merged = Object.assign(_mapCommonResult);
  obj.premiumTier = null;
  ({ premiumSubscriptionCount: obj.premiumSubscriberCount, presenceCount: obj.presenceCount, memberCount } = emojis);
  obj.memberCount = memberCount;
  obj.emojis = emojis.emojis;
  if (typeof ExpressionSourceGuildRecord === "function") {
    const tmp6 = new ExpressionSourceGuildRecord(obj, _mapCommonResult, memberCount);
    ({ id: tmp6.id, name: tmp6.name, icon: tmp6.icon, description: tmp6.description, features: tmp6.features, premiumTier: tmp6.premiumTier, premiumSubscriberCount: tmp6.premiumSubscriberCount, presenceCount: tmp6.presenceCount, memberCount: tmp6.memberCount, emojis: tmp6.emojis } = obj);
    return tmp6;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};
ExpressionSourceGuildRecord["createFromServer"] = function createFromServer(id) {
  const obj = {};
  const _mapCommonResult = ExpressionSourceGuildRecord._mapCommon(id);
  const merged = Object.assign(_mapCommonResult);
  ({ premium_tier: obj.premiumTier, premium_subscription_count: obj.premiumSubscriberCount, approximate_presence_count: obj.presenceCount, approximate_member_count: obj.memberCount, emojis: obj.emojis } = id);
  if (typeof ExpressionSourceGuildRecord === "function") {
    const tmp6 = new ExpressionSourceGuildRecord(obj, _mapCommonResult);
    ({ id: tmp6.id, name: tmp6.name, icon: tmp6.icon, description: tmp6.description, features: tmp6.features, premiumTier: tmp6.premiumTier, premiumSubscriberCount: tmp6.premiumSubscriberCount, presenceCount: tmp6.presenceCount, memberCount: tmp6.memberCount, emojis: tmp6.emojis } = obj);
    return tmp6;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};
ExpressionSourceGuildRecord["createFromGuildType"] = function createFromGuildType(guild) {
  if (guild instanceof ExpressionSourceGuildRecord) {
    return guild;
  } else {
    if (obj2.isGuildRecord(guild)) {
      let fromGuildRecord = obj.createFromGuildRecord(guild);
    } else {
      fromGuildRecord = obj.createFromDiscoverableGuild(guild);
    }
    obj2 = GuildRecordUtils;
  }
};
const prototype2 = function ExpressionSourceApplicationRecord(arg0) {
  const tmp = new prototype2(new.target, new.target);
  ({ id: tmp.id, name: tmp.name } = arg0);
  return tmp;
}.prototype;
class prototype2 extends tmp2 {
}
prototype2["createFromServer"] = function createFromServer(arg0) {
  if (typeof prototype2 === "function") {
    const tmp8 = new prototype2(tmp, tmp2, new.target);
    tmp8.id = tmp3;
    tmp8.name = tmp4;
    return tmp8;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};
let size = fn(2);
const result = size.fileFinishedImporting("modules/emojis/records/ExpressionSourceRecord.tsx");

export { EmojiSourceDataTypes };
export { getEmojiSourceData };
export { ExpressionSourceGuildRecord };
export const ExpressionSourceApplicationRecord = prototype2;