// === Module 5979: ExpressionSourceRecord ===

// Module 5979 (ExpressionSourceRecord)
import HTTPUtils from "HTTPUtils" /* 1282 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1402 */;
import GuildRecordUtils from "GuildRecordUtils" /* 2066 */;
import SetUtils from "SetUtils" /* 2069 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import Record from "Record" /* 1392 */;
import Constants from "Constants" /* 1085 */;
import size_mod from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
function getEmojiSourceData() {
  return obj(...arguments);
}
let obj = function _getEmojiSourceData() {
  obj = _asyncToGenerator(async (arg0) => {
    let closure_1;
    let closure_2;
    let closure_0 = arg0;
    let obj8 = null;
    const HTTP = HTTPUtils.HTTP;
    const obj4 = { url: React32.EMOJI_SOURCE_DATA(closure_0), oldFormErrors: true, timeout: 5000, rejectWithError: true };
    const get = HTTP.get;
    await get(obj4);
    if (1 === c4) {
      let c3 = 0;
    } else if (arg0 === 1) {
      let c5 = 3;
      throw value;
    } else if (arg0 === 2) {
      c3 = 0;
      c5 = 3;
      const obj6 = { value, done: true };
      return obj6;
    } else {
      const body = value.body;
      let type;
      if (body != null) {
        type = body.type;
      }
      if (type === closure_130_6.GUILD) {
        const obj7 = { guild: closure_130_9.createFromServer(body.guild), type: body.type };
        obj8 = obj7;
      } else {
        let type1;
        if (body != null) {
          type1 = body.type;
        }
        if (type1 === closure_130_6.APPLICATION) {
          obj = { application: closure_130_10.createFromServer(body.application), type: body.type };
          obj8 = obj;
        } else {
          let type2;
          if (body != null) {
            type2 = body.type;
          }
          if (type2 === closure_130_6.PACK) {
            obj8 = { type: body.type };
          }
        }
      }
      c3 = 0;
    }
    return obj8;
  });
  return obj(...arguments);
};
({ Endpoints: closure_4, GuildFeatures: hasOwnProperty } = Constants);
obj = { GUILD: "GUILD", APPLICATION: "APPLICATION", PACK: "PACK" };
class ExpressionSourceGuildRecord extends Record {
  constructor(arg0) {
    const tmp = new ExpressionSourceGuildRecord(new.target, this);
    ({ id: tmp.id, name: tmp.name, icon: tmp.icon, description: tmp.description, features: tmp.features, premiumTier: tmp.premiumTier, premiumSubscriberCount: tmp.premiumSubscriberCount, presenceCount: tmp.presenceCount, memberCount: tmp.memberCount, emojis: tmp.emojis } = arg0);
    return tmp;
  }
  getIconURL(size) {
    let flag = arg1;
    if (arg1 === undefined) {
      flag = false;
    }
    obj = AvatarUtilsDefault;
    const obj2 = { id: this.id, size, icon: this.icon, canAnimate: flag };
    return obj.getGuildIconURL(obj2);
  }
  getIconSource(size) {
    const self = this;
    let flag = hasItem;
    if (hasItem === undefined) {
      flag = false;
    }
    obj = self(1402);
    return obj.getAnimatableSourceWithFallback(flag, (canAnimate) => {
      obj = AvatarUtilsDefault;
      const obj2 = { id: self.id, size, icon: self.icon, canAnimate };
      return obj.getGuildIconSource(obj2);
    });
  }
  hasFeature(arg0) {
    const features = this.features;
    return features.has(arg0);
  }
  isDiscoverable() {
    return this.hasFeature(hasOwnProperty.DISCOVERABLE);
  }
  static getGuildFromEmojiId(arg0) {
    let closure_0 = arg0;
    return (async () => {
      let c2;
      let c3;
      let closure_1;
      let tmp;
      await closure_1_7(tmp);
      tmp = value;
      let guild = null;
      if (null != tmp) {
        let type;
        if (tmp != null) {
          type = tmp.type;
        }
        guild = null;
        if (type === constants.GUILD) {
          guild = tmp.guild;
        }
      }
      return guild;
    })();
  }
  static _mapCommon(id) {
    let obj2;
    obj = { id: id.id, name: id.name, icon: id.icon, description: id.description, features: obj2.toSetInplace(id.features) };
    obj2 = SetUtils;
    return obj;
  }
  static createFromGuildRecord(joinedEmojiSourceGuildRecord) {
    let premiumTier;
    obj = { premiumTier, premiumSubscriberCount: joinedEmojiSourceGuildRecord.premiumSubscriberCount, presenceCount: null, memberCount: null, emojis: null };
    const _mapCommonResult = ExpressionSourceGuildRecord._mapCommon(joinedEmojiSourceGuildRecord);
    const merged = Object.assign(_mapCommonResult);
    premiumTier = joinedEmojiSourceGuildRecord.premiumTier;
    if (typeof ExpressionSourceGuildRecord === "function") {
      const self = this;
      const self2 = this;
      const tmp4 = new ExpressionSourceGuildRecord(obj, _mapCommonResult, premiumTier);
      ({ id: tmp4.id, name: tmp4.name, icon: tmp4.icon, description: tmp4.description, features: tmp4.features, premiumTier: tmp4.premiumTier, premiumSubscriberCount: tmp4.premiumSubscriberCount, presenceCount: tmp4.presenceCount, memberCount: tmp4.memberCount, emojis: tmp4.emojis } = obj);
      return tmp4;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
  static createFromDiscoverableGuild(emojis) {
    let memberCount;
    obj = { premiumTier: null, memberCount, emojis: emojis.emojis };
    const _mapCommonResult = ExpressionSourceGuildRecord._mapCommon(emojis);
    const merged = Object.assign(_mapCommonResult);
    ({ premiumSubscriptionCount: obj.premiumSubscriberCount, presenceCount: obj.presenceCount, memberCount } = emojis);
    if (typeof ExpressionSourceGuildRecord === "function") {
      const self = this;
      const self2 = this;
      const tmp4 = new ExpressionSourceGuildRecord(obj, _mapCommonResult, memberCount);
      ({ id: tmp4.id, name: tmp4.name, icon: tmp4.icon, description: tmp4.description, features: tmp4.features, premiumTier: tmp4.premiumTier, premiumSubscriberCount: tmp4.premiumSubscriberCount, presenceCount: tmp4.presenceCount, memberCount: tmp4.memberCount, emojis: tmp4.emojis } = obj);
      return tmp4;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
  static createFromServer(id) {
    obj = {};
    const _mapCommonResult = ExpressionSourceGuildRecord._mapCommon(id);
    const merged = Object.assign(_mapCommonResult);
    ({ premium_tier: obj.premiumTier, premium_subscription_count: obj.premiumSubscriberCount, approximate_presence_count: obj.presenceCount, approximate_member_count: obj.memberCount, emojis: obj.emojis } = id);
    if (typeof ExpressionSourceGuildRecord === "function") {
      const self = this;
      const self2 = this;
      const tmp4 = new ExpressionSourceGuildRecord(obj, _mapCommonResult);
      ({ id: tmp4.id, name: tmp4.name, icon: tmp4.icon, description: tmp4.description, features: tmp4.features, premiumTier: tmp4.premiumTier, premiumSubscriberCount: tmp4.premiumSubscriberCount, presenceCount: tmp4.presenceCount, memberCount: tmp4.memberCount, emojis: tmp4.emojis } = obj);
      return tmp4;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
  static createFromGuildType(guild) {
    let tmp = guild;
    if (!(guild instanceof ExpressionSourceGuildRecord)) {
      let fromGuildRecord;
      const obj2 = GuildRecordUtils;
      if (obj2.isGuildRecord(guild)) {
        fromGuildRecord = ExpressionSourceGuildRecord.createFromGuildRecord(guild);
      } else {
        fromGuildRecord = ExpressionSourceGuildRecord.createFromDiscoverableGuild(guild);
      }
      tmp = fromGuildRecord;
    }
    return tmp;
  }
}
const prototype = ExpressionSourceGuildRecord.prototype;
class ExpressionSourceApplicationRecord extends Record {
  constructor(arg0) {
    const tmp = new ExpressionSourceApplicationRecord(new.target, this);
    ({ id: tmp.id, name: tmp.name } = arg0);
    return tmp;
  }
  static createFromServer(arg0) {
    if (typeof ExpressionSourceApplicationRecord === "function") {
      const self = this;
      const self2 = this;
      const tmp6 = new ExpressionSourceApplicationRecord(tmp, tmp2, this);
      tmp6.id = tmp3;
      tmp6.name = tmp4;
      return tmp6;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
}
let size = size_mod;
const result = size.fileFinishedImporting("modules/emojis/records/ExpressionSourceRecord.tsx");

export const EmojiSourceDataTypes = obj;
export { getEmojiSourceData };
export { ExpressionSourceGuildRecord };
export { ExpressionSourceApplicationRecord };