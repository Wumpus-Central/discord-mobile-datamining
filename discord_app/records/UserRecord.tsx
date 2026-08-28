// discord_app/records/UserRecord.tsx
import hasFlag from "../../discord_common/js/shared/utils/FlagUtils.tsx";
import getAvatarURL from "../utils/AvatarUtils.tsx";
import getAvatarURLDefault from "../utils/AvatarUtils.tsx";
import parseAvatarDecorationData from "../modules/collectibles/avatar_decorations/AvatarDecorationUtils.tsx";
import toJSDefault from "../lib/Record.tsx";
import isPremiumAtLeast from "../utils/PremiumTypeUtils.tsx";
import ME from "../Constants.tsx";
import GuildFeatures from "../modules/premium/PremiumConstants.tsx";
import { create } from "../../discord_common/js/packages/protos/discord_protos/users/v1/user.tsx";
import { getNameplateData } from "../modules/collectibles/nameplates/utils.tsx";
import { DISCORD_EPOCH } from "../utils/SnowflakeUtils.tsx";

require = arg1;
toJSDefault;
({ LOCAL_BOT_ID: c4, NON_USER_BOT_DISCRIMINATOR: c5, PREMIUM_TYPE_NONE: closure_6, UserFlags: error } = ME);
({ SKU_ID_PURCHASED_FLAGS: closure_8, PremiumTypes: c9, PurchasedFlags: c10 } = GuildFeatures);
class UserRecord extends tmp2 {
  constructor(arg0) {
    closure_0 = undefined;
    tmp6 = new UserRecord(tmp5, tmp4, tmp3, tmp2, new.target, tmp, global, new.target, undefined);
    // ThrowIfThisInitialized (0x7c)
    closure_0 = tmp6;
    tmp6.hasFlag = function hasFlag() {
      return false;
    };
    tmp6.isStaff = function isStaff() {
      return false;
    };
    tmp6.isStaffPersonal = function isStaffPersonal() {
      return false;
    };
    tmp6.hasAnyStaffLevel = function hasAnyStaffLevel() {
      return false;
    };
    premiumType = global.premium_type;
    if (premiumType == null) {
      premiumType = global.premiumType;
    }
    ({ id: tmp6.id, username } = global);
    if (username == null) {
      username = "";
    }
    tmp6.username = username;
    discriminator = global.discriminator;
    if (discriminator == null) {
      discriminator = closure_5;
    }
    tmp6.discriminator = discriminator;
    avatar = global.avatar;
    if (avatar == null) {
      avatar = null;
    }
    tmp6.avatar = avatar;
    avatarDecorationData = global.avatar_decoration_data;
    if (avatarDecorationData == null) {
      avatarDecorationData = global.avatarDecorationData;
    }
    tmp6.avatarDecoration = avatarDecorationData;
    email = global.email;
    if (email == null) {
      email = null;
    }
    tmp6.email = email;
    flag = global.verified;
    if (flag == null) {
      flag = false;
    }
    tmp6.verified = flag;
    flag2 = global.bot;
    if (flag2 == null) {
      flag2 = false;
    }
    tmp6.bot = flag2;
    flag3 = global.system;
    if (flag3 == null) {
      flag3 = false;
    }
    tmp6.system = flag3;
    flag4 = global.mfa_enabled;
    if (flag4 == null) {
      flag4 = global.mfaEnabled;
    }
    if (flag4 == null) {
      flag4 = false;
    }
    tmp6.mfaEnabled = flag4;
    flag5 = global.mobile;
    if (flag5 == null) {
      flag5 = false;
    }
    tmp6.mobile = flag5;
    flag6 = global.desktop;
    if (flag6 == null) {
      flag6 = false;
    }
    tmp6.desktop = flag6;
    tmp9 = null;
    if (premiumType !== PREMIUM_TYPE_NONE) {
      tmp9 = premiumType;
    }
    tmp6.premiumType = tmp9;
    num = global.flags;
    if (num == null) {
      num = 0;
    }
    tmp6.flags = num;
    num2 = global.public_flags;
    if (num2 == null) {
      num2 = global.publicFlags;
    }
    if (num2 == null) {
      num2 = 0;
    }
    tmp6.publicFlags = num2;
    num3 = global.purchased_flags;
    if (num3 == null) {
      num3 = global.purchasedFlags;
    }
    if (num3 == null) {
      num3 = 0;
    }
    tmp6.purchasedFlags = num3;
    num4 = global.premium_usage_flags;
    if (num4 == null) {
      num4 = global.premiumUsageFlags;
    }
    if (num4 == null) {
      num4 = 0;
    }
    tmp6.premiumUsageFlags = num4;
    phone = global.phone;
    if (phone == null) {
      phone = null;
    }
    tmp6.phone = phone;
    nsfwAllowed = global.nsfw_allowed;
    if (nsfwAllowed == null) {
      nsfwAllowed = global.nsfwAllowed;
    }
    tmp6.nsfwAllowed = nsfwAllowed;
    ageVerificationStatus = global.age_verification_status;
    if (ageVerificationStatus == null) {
      ageVerificationStatus = global.ageVerificationStatus;
    }
    tmp6.ageVerificationStatus = ageVerificationStatus;
    guildMemberAvatars = global.guildMemberAvatars;
    if (guildMemberAvatars == null) {
      guildMemberAvatars = {};
    }
    tmp6.guildMemberAvatars = guildMemberAvatars;
    flag7 = global.has_bounced_email;
    if (flag7 == null) {
      flag7 = global.hasBouncedEmail;
    }
    if (flag7 == null) {
      flag7 = false;
    }
    tmp6.hasBouncedEmail = flag7;
    prop = global.personal_connection_id;
    if (prop == null) {
      prop = global.personalConnectionId;
    }
    if (prop == null) {
      prop = null;
    }
    tmp6.personalConnectionId = prop;
    globalName = global.global_name;
    if (globalName == null) {
      globalName = global.globalName;
    }
    tmp6.globalName = globalName;
    tmp6.banner = global.banner;
    tmp12 = closure_0;
    tmp13 = closure_3;
    obj2 = require("isUserPrimaryGuildEqual");
    primary_guild = global.primary_guild;
    if (primary_guild == null) {
      primary_guild = global.primaryGuild;
    }
    if (primary_guild == null) {
      primary_guild = null;
    }
    tmp6.primaryGuild = obj2.ensureUserPrimaryGuild(primary_guild);
    ({ collectibles: tmp6.collectibles, displayNameStyles } = global);
    if (displayNameStyles == null) {
      tmp12Result = require("set");
      displayNameStyles = tmp12Result.parseServerDisplayNameStyles(global.display_name_styles);
    }
    tmp6.displayNameStyles = displayNameStyles;
    typingIndicatorStyle = global.typingIndicatorStyle;
    if (typingIndicatorStyle == null) {
      tmp12Result1 = require("CUSTOM_TYPING_INDICATOR_EMOJI_COUNT");
      typingIndicatorStyle = tmp12Result1.parseServerTypingIndicatorStyle(global.typing_indicator_style);
    }
    tmp6.typingIndicatorStyle = typingIndicatorStyle;
    premiumState = global.premiumState;
    if (premiumState == null) {
      tmp12Result2 = require("parseServerPremiumState");
      premiumState = tmp12Result2.parseServerPremiumState(global.premium_state);
    }
    tmp6.premiumState = premiumState;
    perks = global.perks;
    activePerksBitmask = undefined;
    if (perks != null) {
      activePerksBitmask = perks.activePerksBitmask;
    }
    if (null != activePerksBitmask) {
      perks2 = global.perks;
    } else {
      tmp12Result3 = require("parseServerPerkConfigKind");
      perks2 = tmp12Result3.parseServerPerks(global.perks);
    }
    tmp6.perks = perks2;
    tmp12Result4 = require("frozen");
    restrictedSchedule = global.restricted_schedule;
    if (restrictedSchedule == null) {
      restrictedSchedule = global.restrictedSchedule;
    }
    tmp6.restrictedSchedule = tmp12Result4.ensureRestrictedScheduleRecord(restrictedSchedule);
    appTransactionIds = global.appTransactionIds;
    if (appTransactionIds == null) {
      appTransactionIds = global.app_transaction_ids;
    }
    if (appTransactionIds == null) {
      appTransactionIds = null;
    }
    tmp6.appTransactionIds = appTransactionIds;
    tmp12Result5 = require("parseStoreCountry");
    storeCountry = global.store_country;
    if (storeCountry == null) {
      storeCountry = global.storeCountry;
    }
    tmp6.storeCountry = tmp12Result5.parseStoreCountry(storeCountry);
    obj = {
      writable: false,
      configurable: false,
      enumerable: false,
      value(arg0) {
            if (arg0 <= 1073741824) {
              return ((tmp3.flags | tmp2.publicFlags) & arg0) === arg0;
            } else {
              let tmp7Result = tmp7(tmp3[10]);
              const tmp6Result = tmp6(tmp5.flags);
              tmp7Result = tmp7(tmp3[10]);
              const deserializeResult = tmp7Result.deserialize(tmp4.publicFlags);
              const deserializeResult1 = tmp7Result.deserialize(arg0);
              const tmp7Result1 = tmp7(tmp3[10]);
              return tmp7Result1.has(tmp7(tmp3[10]).combine(tmp6Result, deserializeResult), deserializeResult1);
            }
          }
    };
    obj1 = {
      writable: false,
      configurable: false,
      enumerable: false,
      value() {
            return obj.hasFlag(closure_1_7.STAFF);
          }
    };
    obj2 = {
      writable: false,
      configurable: false,
      enumerable: false,
      value() {
            const hasFlagResult = obj.hasFlag(closure_1_7.STAFF);
            let tmp3 = !hasFlagResult;
            if (!hasFlagResult) {
              tmp3 = null != tmp.personalConnectionId;
            }
            return tmp3;
          }
    };
    obj3 = {
      writable: false,
      configurable: false,
      enumerable: false,
      value() {
            let hasFlagResult = obj2.hasFlag(closure_1_7.STAFF);
            if (!hasFlagResult) {
              hasFlagResult = obj.hasFlag(tmp.COLLABORATOR);
            }
            if (!hasFlagResult) {
              hasFlagResult = obj.hasFlag(tmp.RESTRICTED_COLLABORATOR);
            }
            return hasFlagResult;
          }
    };
    definePropertiesResult = Object.defineProperties(tmp6, { hasFlag: obj, isStaff: obj1, isStaffPersonal: obj2, hasAnyStaffLevel: obj3 });
    globalName = tmp6.globalName;
    length = undefined;
    if (globalName != null) {
      length = globalName.length;
    }
    if (0 === length) {
      tmp6.globalName = null;
    }
    return tmp6;
  }
}
const prototype = UserRecord.prototype;
Object.defineProperty(prototype, "createdAt", {
  get: function createdAt() {
    const obj = DISCORD_EPOCH;
    return new Date(require("../utils/SnowflakeUtils.tsx").extractTimestamp(this.id));
  },
  set: undefined
});
prototype["hasVerifiedEmailOrPhone"] = function hasVerifiedEmailOrPhone() {
  let tmp = true === this.verified;
  if (!tmp) {
    tmp = null != this.phone;
  }
  return tmp;
};
prototype["getAvatarURL"] = function getAvatarURL(arg0, closure_2, flag, SUPPORTS_WEBP) {
  if (flag === undefined) {
    flag = false;
  }
  if (SUPPORTS_WEBP === undefined) {
    SUPPORTS_WEBP = getAvatarURL.SUPPORTS_WEBP;
  }
  const self = this;
  let tmp3;
  if (null != arg0) {
    tmp3 = self.guildMemberAvatars[arg0];
  }
  if (null != tmp3) {
    if (null != arg0) {
      let obj = { guildId: null, avatar: null, userId: null, canAnimate: null, size: null, canWebP: null };
      obj[0] = arg0;
      obj[1] = tmp3;
      obj[2] = self.id;
      obj[3] = flag;
      obj[4] = closure_2;
      obj[5] = SUPPORTS_WEBP;
      let guildMemberAvatarURLSimple = getAvatarURLDefault.getGuildMemberAvatarURLSimple(obj);
      const obj2 = getAvatarURLDefault;
    }
    return guildMemberAvatarURLSimple;
  }
  obj = getAvatarURLDefault;
  guildMemberAvatarURLSimple = obj.getUserAvatarURL(self, flag, closure_2, null, SUPPORTS_WEBP);
};
prototype["addGuildAvatarHash"] = function addGuildAvatarHash(guildId, avatar) {
  const self = this;
  if (this.guildMemberAvatars[guildId] === avatar) {
    return self;
  } else {
    let obj = {};
    const merged = Object.assign(self.guildMemberAvatars);
    obj[guildId] = avatar;
    obj = { guildMemberAvatars: null };
    obj[0] = obj;
    return self.merge(obj);
  }
};
prototype["removeGuildAvatarHash"] = function removeGuildAvatarHash(guildId) {
  const self = this;
  if (undefined === this.guildMemberAvatars[guildId]) {
    return self;
  } else {
    let obj = {};
    const merged = Object.assign(self.guildMemberAvatars);
    obj[guildId] = undefined;
    obj = { guildMemberAvatars: null };
    obj[0] = obj;
    return self.merge(obj);
  }
};
prototype["getAvatarSource"] = function getAvatarSource(arg0, flag) {
  const self = this;
  importDefault = arg0;
  if (flag === undefined) {
    flag = false;
  }
  closure_2 = arg2;
  closure_0 = undefined;
  if (null != arg0) {
    closure_0 = tmp;
    if (null != this.guildMemberAvatars[arg0]) {
      return importDefault(self[12]).getAnimatableSourceWithFallback(flag, (canAnimate) => {
        let obj = callback(self[12]);
        obj = { guildId: callback, avatar: closure_0, userId: self.id, canAnimate, size: closure_2 };
        return obj.makeSource(callback(self[12]).getGuildMemberAvatarURLSimple(obj));
      });
    }
  }
  return importDefault(self[12]).getAnimatableSourceWithFallback(flag, (flag) => callback(self[12]).getUserAvatarSource(self, flag, closure_2));
};
prototype["isClaimed"] = function isClaimed() {
  return null != this.email || null != this.phone;
};
prototype["isPhoneVerified"] = function isPhoneVerified() {
  return null != this.phone;
};
prototype["toString"] = function toString() {
  let str = "???";
  if ("" !== this.username) {
    str = this.username;
  }
  return str;
};
Object.defineProperty(prototype, "tag", {
  get: function tag() {
    const combined = "" + this.discriminator;
    return "" + this.username + "#" + combined.padStart(4, "0");
  },
  set: undefined
});
prototype["hasPurchasedFlag"] = function hasPurchasedFlag(PREMIUM_TIER_2) {
  return hasFlag.hasFlag(this.purchasedFlags, PREMIUM_TIER_2);
};
prototype["hasPremiumUsageFlag"] = function hasPremiumUsageFlag(arg0) {
  return hasFlag.hasFlag(this.premiumUsageFlags, arg0);
};
prototype["hasHadSKU"] = function hasHadSKU(arg0) {
  let hasPurchasedFlagResult = null != tmp;
  if (hasPurchasedFlagResult) {
    const self = this;
    hasPurchasedFlagResult = this.hasPurchasedFlag(tmp);
  }
  return hasPurchasedFlagResult;
};
prototype["hasHadPremium"] = function hasHadPremium(arg0) {
  let tmp = arg0;
  if (arg0 === undefined) {
    tmp = null;
  }
  const hasPurchasedFlagResult = this.hasPurchasedFlag(closure_10.PREMIUM_TIER_0);
  const hasPurchasedFlagResult1 = this.hasPurchasedFlag(closure_10.PREMIUM_TIER_1);
  const hasPurchasedFlagResult2 = this.hasPurchasedFlag(closure_10.PREMIUM_TIER_2);
  if (closure_9.TIER_0 === tmp) {
    return hasPurchasedFlagResult;
  } else if (tmp5.TIER_1 === tmp) {
    return hasPurchasedFlagResult1;
  } else if (tmp5.TIER_2 === tmp) {
    return hasPurchasedFlagResult2;
  } else {
    let tmp6 = hasPurchasedFlagResult;
    if (!hasPurchasedFlagResult) {
      tmp6 = hasPurchasedFlagResult1;
    }
    if (!tmp6) {
      tmp6 = hasPurchasedFlagResult2;
    }
    return tmp6;
  }
};
prototype["hadPremiumSubscription"] = function hadPremiumSubscription() {
  let tmp = arg0;
  if (arg0 === undefined) {
    tmp = null;
  }
  const self = this;
  const isPremiumResult = isPremiumAtLeast.isPremium(this);
  let hasHadPremiumResult = !isPremiumResult;
  if (!isPremiumResult) {
    hasHadPremiumResult = self.hasHadPremium(tmp);
  }
  return hasHadPremiumResult;
};
prototype["hasFreePremium"] = function hasFreePremium() {
  const self = this;
  let isStaffResult = this.isStaff();
  if (!isStaffResult) {
    isStaffResult = self.hasFlag(constants.PARTNER);
  }
  if (!isStaffResult) {
    isStaffResult = self.isStaffPersonal();
  }
  return isStaffResult;
};
prototype["isOnReverseTrial"] = function isOnReverseTrial() {
  let isPremiumResult = isPremiumAtLeast.isPremium(this);
  if (isPremiumResult) {
    const premiumState = this.premiumState;
    let premiumSource;
    if (premiumState != null) {
      premiumSource = premiumState.premiumSource;
    }
    isPremiumResult = premiumSource === create /* create */.PremiumSource.REVERSE_TRIAL;
  }
  return isPremiumResult;
};
prototype["isPremiumWithPremiumGroup"] = function isPremiumWithPremiumGroup() {
  let isPremiumResult = isPremiumAtLeast.isPremium(this, closure_9.TIER_2);
  if (isPremiumResult) {
    const premiumState = this.premiumState;
    let premiumSource;
    if (premiumState != null) {
      premiumSource = premiumState.premiumSource;
    }
    isPremiumResult = premiumSource === create /* create */.PremiumSource.SUBSCRIPTION_GROUP;
  }
  return isPremiumResult;
};
prototype["hasPaidTier2Subscription"] = function hasPaidTier2Subscription() {
  let isPremiumResult = isPremiumAtLeast.isPremium(this, closure_9.TIER_2);
  if (isPremiumResult) {
    const premiumState = this.premiumState;
    let prop;
    if (premiumState != null) {
      prop = premiumState.premiumSubscriptionType;
    }
    isPremiumResult = prop === create /* create */.PremiumSubscriptionType.TIER_2;
  }
  return isPremiumResult;
};
prototype["isPremiumWithFractionalPremiumOnly"] = function isPremiumWithFractionalPremiumOnly() {
  const self = this;
  let isPremiumResult = isPremiumAtLeast.isPremium(this, closure_9.TIER_2);
  if (isPremiumResult) {
    const premiumState = self.premiumState;
    let prop;
    if (premiumState != null) {
      prop = premiumState.premiumSubscriptionType;
    }
    let tmp6 = prop === tmp(1939).PremiumSubscriptionType.NONE_UNSPECIFIED;
    if (!tmp6) {
      const premiumState2 = self.premiumState;
      let prop1;
      if (premiumState2 != null) {
        prop1 = premiumState2.premiumSubscriptionType;
      }
      tmp6 = prop1 === tmp(1939).PremiumSubscriptionType.BOOST_ONLY;
    }
    isPremiumResult = tmp6;
  }
  if (isPremiumResult) {
    const premiumState3 = self.premiumState;
    let premiumSource;
    if (premiumState3 != null) {
      premiumSource = premiumState3.premiumSource;
    }
    isPremiumResult = premiumSource === tmp(1939).PremiumSource.FRACTIONAL_NITRO;
  }
  return isPremiumResult;
};
prototype["isFractionalPremiumWithNoStandardSub"] = function isFractionalPremiumWithNoStandardSub() {
  const self = this;
  let isPremiumResult = isPremiumAtLeast.isPremium(this, closure_9.TIER_2);
  if (isPremiumResult) {
    const premiumState = self.premiumState;
    let premiumSource;
    if (premiumState != null) {
      premiumSource = premiumState.premiumSource;
    }
    isPremiumResult = premiumSource === tmp(1939).PremiumSource.FRACTIONAL_NITRO;
  }
  if (isPremiumResult) {
    isPremiumResult = self.premiumState.premiumSubscriptionType !== tmp(1939).PremiumSubscriptionType.TIER_2;
  }
  return isPremiumResult;
};
prototype["isFractionalPremium"] = function isFractionalPremium() {
  let isPremiumResult = isPremiumAtLeast.isPremium(this, closure_9.TIER_2);
  if (isPremiumResult) {
    const premiumState = this.premiumState;
    let premiumSource;
    if (premiumState != null) {
      premiumSource = premiumState.premiumSource;
    }
    isPremiumResult = premiumSource === create /* create */.PremiumSource.FRACTIONAL_NITRO;
  }
  return isPremiumResult;
};
prototype["hasUrgentMessages"] = function hasUrgentMessages() {
  return this.hasFlag(constants.HAS_UNREAD_URGENT_MESSAGES);
};
prototype["isNonUserBot"] = function isNonUserBot() {
  const self = this;
  let isSystemUserResult = this.isSystemUser();
  if (!isSystemUserResult) {
    let bot = self.bot;
    if (bot) {
      bot = self.discriminator === closure_5;
    }
    isSystemUserResult = bot;
  }
  return isSystemUserResult;
};
prototype["isLocalBot"] = function isLocalBot() {
  let bot = this.bot;
  if (bot) {
    bot = this.id === closure_4;
  }
  return bot;
};
prototype["isVerifiedBot"] = function isVerifiedBot() {
  const self = this;
  let hasFlagResult = this.isSystemUser() || self.isLocalBot();
  if (!hasFlagResult) {
    hasFlagResult = self.hasFlag(constants.VERIFIED_BOT);
  }
  return hasFlagResult;
};
prototype["isSystemUser"] = function isSystemUser() {
  return true === this.system;
};
prototype["hasAvatarForGuild"] = function hasAvatarForGuild(id) {
  let tmp = null != id;
  if (tmp) {
    const self = this;
    tmp = null != this.guildMemberAvatars[id];
  }
  return tmp;
};
prototype["hasUniqueUsername"] = function hasUniqueUsername() {
  return "0" === this.discriminator;
};
prototype["isPremiumGroupMember"] = function isPremiumGroupMember() {
  let result = this.isPremiumWithPremiumGroup();
  if (result) {
    result = this.premiumGroupRole === create /* create */.PremiumSubscriptionGroupRole.MEMBER;
  }
  return result;
};
prototype["isPremiumGroupPrimary"] = function isPremiumGroupPrimary() {
  let result = this.isPremiumWithPremiumGroup();
  if (result) {
    result = this.premiumGroupRole === create /* create */.PremiumSubscriptionGroupRole.PRIMARY;
  }
  return result;
};
Object.defineProperty(prototype, "isProvisional", {
  get: function isProvisional() {
    return this.hasFlag(constants.PROVISIONAL_ACCOUNT);
  },
  set: undefined
});
Object.defineProperty(prototype, "avatarDecoration", {
  get: function avatarDecoration() {
    return this.avatarDecorationData;
  },
  set: undefined
});
Object.defineProperty(prototype, "avatarDecoration", {
  get: undefined,
  set: function avatarDecoration(avatar_decoration_data) {
    this.avatarDecorationData = parseAvatarDecorationData.parseAvatarDecorationData(avatar_decoration_data);
  }
});
Object.defineProperty(prototype, "nameplate", {
  get: function nameplate(arg0) {
    const collectibles = this.collectibles;
    let nameplate;
    if (collectibles != null) {
      nameplate = collectibles.nameplate;
    }
    return getNameplateData /* getNameplateData */.getNameplateData(nameplate);
  },
  set: undefined
});
Object.defineProperty(prototype, "premiumGroupRole", {
  get: function premiumGroupRole() {
    const premiumState = this.premiumState;
    let prop;
    if (premiumState != null) {
      prop = premiumState.premiumSubscriptionGroupRole;
    }
    if (prop == null) {
      prop = create /* create */.PremiumSubscriptionGroupRole.UNSPECIFIED;
    }
    return prop;
  },
  set: undefined
});
const userRecord = new UserRecord({ id: "0" });
let result = require("set").fileFinishedImporting("records/UserRecord.tsx");

export default UserRecord;
export const PLACEHOLDER_USER_RECORD = userRecord;