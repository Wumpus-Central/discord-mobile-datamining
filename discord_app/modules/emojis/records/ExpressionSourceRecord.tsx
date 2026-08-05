import { areSetsEqual } from "../../../../discord_common/js/shared/utils/SetUtils.tsx";
import { getAvatarURL } from "../../../utils/AvatarUtils.tsx";
import { fromGuildPropertiesWithAdditionalFields } from "../../../utils/GuildRecordUtils.tsx";
// discord_app/modules/emojis/records/ExpressionSourceRecord.tsx
import areSetsEqual from "areSetsEqual";
import "toJS";
import ME from "ME";

let c4;
let c5;
const require = arg1;
function getEmojiSourceData() {
  const self = this;
  const apply = _getEmojiSourceData.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _getEmojiSourceData() {
  const self = this;
  const tmp = callback((arg0) => {
    let closure_0 = arg0;
    let c4 = 0;
    let c5 = 0;
    let c3 = 0;
    return (function*(arg0, body) {
      let closure_2 = tmp3;
      let obj3 = null;
      let c3 = 1;
      const HTTP = callback(outer1_2[3]).HTTP;
      const obj1 = { url: null, oldFormErrors: true, timeout: 5000, rejectWithError: true };
      obj1[0] = c4.EMOJI_SOURCE_DATA(obj3);
      yield HTTP.get(obj1);
      if (1 === tmp7) {
        c3 = 0;
        let c5 = 3;
      } else if (arg0 === 1) {
        c5 = 3;
        throw body;
      } else if (arg0 !== 2) {
        body = body.body;
        let type;
        if (body != null) {
          type = body.type;
        }
        if (type === constants.GUILD) {
          const obj = { guild: null, type: null };
          obj[0] = closure_9.createFromServer(body.guild);
          obj[1] = body.type;
          obj3 = obj;
        } else {
          let type1;
          if (body != null) {
            type1 = body.type;
          }
          if (type1 === constants.APPLICATION) {
            obj3 = { application: null, type: null };
            obj3[0] = closure_10.createFromServer(body.application);
            obj3[1] = body.type;
          }
        }
        c3 = 0;
      }
      c3 = 0;
      return body;
    })();
  });
  const _getEmojiSourceData = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
({ Endpoints: c4, GuildFeatures: c5 } = ME);
let obj = { GUILD: "GUILD", APPLICATION: "APPLICATION" };
let ExpressionSourceGuildRecord;
class ExpressionSourceGuildRecord extends tmp2 {
  constructor(arg0) {
    tmp = new ExpressionSourceGuildRecord(new.target, new.target);
    // ThrowIfThisInitialized (0x7c)
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
  let obj = getAvatarURL;
  obj = { id: this.id, size, icon: this.icon, canAnimate: flag };
  return obj.getGuildIconURL(obj);
};
prototype["getIconSource"] = function getIconSource(arg0, flag) {
  const self = this;
  let closure_0 = arg0;
  if (flag === undefined) {
    flag = false;
  }
  return self(1416).getAnimatableSourceWithFallback(flag, (canAnimate) => {
    let obj = self(outer1_2[4]);
    obj = { id: self.id, size: closure_0, icon: self.icon, canAnimate };
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
  let closure_0 = arg0;
  return callback(function*() {
    let closure_1 = tmp5;
    let type = tmp2;
    type = yield outer1_7(outer1_0);
    let guild = null;
    if (null != type) {
      type = undefined;
      if (type != null) {
        type = type.type;
      }
      guild = null;
      if (type === outer1_6.GUILD) {
        guild = outer1_0.guild;
      }
    }
    return guild;
  })();
};
ExpressionSourceGuildRecord["_mapCommon"] = function _mapCommon(id) {
  const obj = { id: id.id, name: id.name, icon: id.icon, description: id.description, features: null };
  obj[4] = areSetsEqual /* areSetsEqual */.toSetInplace(id.features);
  return obj;
};
ExpressionSourceGuildRecord["createFromGuildRecord"] = function createFromGuildRecord(joinedEmojiSourceGuildRecord) {
  const obj = {};
  const _mapCommonResult = ExpressionSourceGuildRecord._mapCommon(joinedEmojiSourceGuildRecord);
  let str = obj;
  const merged = Object.assign(_mapCommonResult);
  const premiumTier = joinedEmojiSourceGuildRecord.premiumTier;
  obj.premiumTier = premiumTier;
  obj.premiumSubscriberCount = joinedEmojiSourceGuildRecord.premiumSubscriberCount;
  obj.presenceCount = null;
  obj.memberCount = null;
  obj.emojis = null;
  if (typeof ExpressionSourceGuildRecord !== "function") {
    str = "Trying to call a non-function";
    HermesBuiltin.throwTypeError();
  }
  const tmp3 = new ExpressionSourceGuildRecord(str, _mapCommonResult, premiumTier);
  // ThrowIfThisInitialized (0x7c)
  ({ id: tmp3.id, name: tmp3.name, icon: tmp3.icon, description: tmp3.description, features: tmp3.features, premiumTier: tmp3.premiumTier, premiumSubscriberCount: tmp3.premiumSubscriberCount, presenceCount: tmp3.presenceCount, memberCount: tmp3.memberCount, emojis: tmp3.emojis } = obj);
  return tmp3;
};
ExpressionSourceGuildRecord["createFromDiscoverableGuild"] = function createFromDiscoverableGuild(emojis) {
  let memberCount;
  const obj = {};
  const _mapCommonResult = ExpressionSourceGuildRecord._mapCommon(emojis);
  let str = obj;
  const merged = Object.assign(_mapCommonResult);
  obj.premiumTier = null;
  ({ premiumSubscriptionCount: obj.premiumSubscriberCount, presenceCount: obj.presenceCount, memberCount } = emojis);
  obj.memberCount = memberCount;
  obj.emojis = emojis.emojis;
  if (typeof ExpressionSourceGuildRecord !== "function") {
    str = "Trying to call a non-function";
    HermesBuiltin.throwTypeError();
  }
  const tmp3 = new ExpressionSourceGuildRecord(str, _mapCommonResult, memberCount);
  // ThrowIfThisInitialized (0x7c)
  ({ id: tmp3.id, name: tmp3.name, icon: tmp3.icon, description: tmp3.description, features: tmp3.features, premiumTier: tmp3.premiumTier, premiumSubscriberCount: tmp3.premiumSubscriberCount, presenceCount: tmp3.presenceCount, memberCount: tmp3.memberCount, emojis: tmp3.emojis } = obj);
  return tmp3;
};
ExpressionSourceGuildRecord["createFromServer"] = function createFromServer(id) {
  const obj = {};
  const _mapCommonResult = ExpressionSourceGuildRecord._mapCommon(id);
  let str = obj;
  const merged = Object.assign(_mapCommonResult);
  ({ premium_tier: obj.premiumTier, premium_subscription_count: obj.premiumSubscriberCount, approximate_presence_count: obj.presenceCount, approximate_member_count: obj.memberCount, emojis: obj.emojis } = id);
  if (typeof ExpressionSourceGuildRecord !== "function") {
    str = "Trying to call a non-function";
    HermesBuiltin.throwTypeError();
  }
  const tmp3 = new ExpressionSourceGuildRecord(str, _mapCommonResult);
  // ThrowIfThisInitialized (0x7c)
  ({ id: tmp3.id, name: tmp3.name, icon: tmp3.icon, description: tmp3.description, features: tmp3.features, premiumTier: tmp3.premiumTier, premiumSubscriberCount: tmp3.premiumSubscriberCount, presenceCount: tmp3.presenceCount, memberCount: tmp3.memberCount, emojis: tmp3.emojis } = obj);
  return tmp3;
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
    obj2 = fromGuildPropertiesWithAdditionalFields /* fromGuildPropertiesWithAdditionalFields */;
  }
};
let prototype2;
prototype2 = function ExpressionSourceApplicationRecord(arg0) {
  const tmp = new prototype2(new.target, new.target);
  // ThrowIfThisInitialized (0x7c)
  ({ id: tmp.id, name: tmp.name } = arg0);
  return tmp;
}.prototype;
class prototype2 extends tmp2 {
}
prototype2["createFromServer"] = function createFromServer(arg0) {
  let id;
  let name;
  ({ id, name } = arg0);
  if (typeof prototype2 !== "function") {
    HermesBuiltin.throwTypeError();
  }
  const tmp2 = new prototype2("Trying to call a non-function", prototype2, new.target);
  // ThrowIfThisInitialized (0x7c)
  tmp2.id = id;
  tmp2.name = name;
  return tmp2;
};
const result = require("ME").fileFinishedImporting("modules/emojis/records/ExpressionSourceRecord.tsx");

export const EmojiSourceDataTypes = obj;
export { getEmojiSourceData };
export { ExpressionSourceGuildRecord };
export const ExpressionSourceApplicationRecord = prototype2;