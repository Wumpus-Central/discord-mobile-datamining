// === Module 1391: UserRecord ===

// Module 1391 (UserRecord)
import BigFlagUtilsAll from "BigFlagUtils" /* 1097 */;
import FlagUtils from "FlagUtils" /* 1390 */;
import AvatarUtils from "AvatarUtils" /* 1402 */;
import AvatarDecorationUtils from "AvatarDecorationUtils" /* 1972 */;
import PremiumTypeUtils from "PremiumTypeUtils" /* 1976 */;
import Record from "Record" /* 1392 */;
import Constants from "Constants" /* 1085 */;
import PremiumConstants from "PremiumConstants" /* 1379 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const AvatarUtilsDefault = AvatarUtils;
let _require, importDefault;

let c10;
let c9;
let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
({ LOCAL_BOT_ID: closure_4, NON_USER_BOT_DISCRIMINATOR: hasOwnProperty, PREMIUM_TYPE_NONE: metroRequire, UserFlags: metroImportDefault } = Constants);
({ SKU_ID_PURCHASED_FLAGS: metroImportAll, PremiumTypes: c9, PurchasedFlags: c10 } = PremiumConstants);
class UserRecord extends Record {
  constructor(user) {
    let closure_0;
    let displayNameStyles;
    let perks2;
    let tmp3;
    let username;
    const tmp6 = new UserRecord(tmp5, tmp4, tmp3, tmp2, new.target, tmp, user, this, undefined);
    _require = tmp6;
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
    let premiumType = user.premium_type;
    if (premiumType == null) {
      premiumType = user.premiumType;
    }
    ({ id: tmp6.id, username } = user);
    if (username == null) {
      username = "";
    }
    tmp6.username = username;
    let discriminator = user.discriminator;
    if (discriminator == null) {
      discriminator = closure_5;
    }
    tmp6.discriminator = discriminator;
    let avatar = user.avatar;
    if (avatar == null) {
      avatar = null;
    }
    tmp6.avatar = avatar;
    let avatarDecorationData = user.avatar_decoration_data;
    if (avatarDecorationData == null) {
      avatarDecorationData = user.avatarDecorationData;
    }
    tmp6.avatarDecoration = avatarDecorationData;
    let email = user.email;
    if (email == null) {
      email = null;
    }
    tmp6.email = email;
    let flag = user.verified;
    if (flag == null) {
      flag = false;
    }
    tmp6.verified = flag;
    let flag2 = user.bot;
    if (flag2 == null) {
      flag2 = false;
    }
    tmp6.bot = flag2;
    let flag3 = user.system;
    if (flag3 == null) {
      flag3 = false;
    }
    tmp6.system = flag3;
    let flag4 = user.mfa_enabled;
    if (flag4 == null) {
      flag4 = user.mfaEnabled;
    }
    if (flag4 == null) {
      flag4 = false;
    }
    tmp6.mfaEnabled = flag4;
    let flag5 = user.mobile;
    if (flag5 == null) {
      flag5 = false;
    }
    tmp6.mobile = flag5;
    let flag6 = user.desktop;
    if (flag6 == null) {
      flag6 = false;
    }
    tmp6.desktop = flag6;
    let tmp9 = null;
    if (premiumType !== closure_6) {
      tmp9 = premiumType;
    }
    tmp6.premiumType = tmp9;
    let num = user.flags;
    if (num == null) {
      num = 0;
    }
    tmp6.flags = num;
    let num2 = user.public_flags;
    if (num2 == null) {
      num2 = user.publicFlags;
    }
    if (num2 == null) {
      num2 = 0;
    }
    tmp6.publicFlags = num2;
    let num3 = user.purchased_flags;
    if (num3 == null) {
      num3 = user.purchasedFlags;
    }
    if (num3 == null) {
      num3 = 0;
    }
    tmp6.purchasedFlags = num3;
    let num4 = user.premium_usage_flags;
    if (num4 == null) {
      num4 = user.premiumUsageFlags;
    }
    if (num4 == null) {
      num4 = 0;
    }
    tmp6.premiumUsageFlags = num4;
    let phone = user.phone;
    if (phone == null) {
      phone = null;
    }
    tmp6.phone = phone;
    let nsfwAllowed = user.nsfw_allowed;
    if (nsfwAllowed == null) {
      nsfwAllowed = user.nsfwAllowed;
    }
    tmp6.nsfwAllowed = nsfwAllowed;
    let ageVerificationStatus = user.age_verification_status;
    if (ageVerificationStatus == null) {
      ageVerificationStatus = user.ageVerificationStatus;
    }
    tmp6.ageVerificationStatus = ageVerificationStatus;
    let guildMemberAvatars = user.guildMemberAvatars;
    if (guildMemberAvatars == null) {
      guildMemberAvatars = {};
    }
    tmp6.guildMemberAvatars = guildMemberAvatars;
    let flag7 = user.has_bounced_email;
    if (flag7 == null) {
      flag7 = user.hasBouncedEmail;
    }
    if (flag7 == null) {
      flag7 = false;
    }
    tmp6.hasBouncedEmail = flag7;
    let prop = user.personal_connection_id;
    if (prop == null) {
      prop = user.personalConnectionId;
    }
    if (prop == null) {
      prop = null;
    }
    tmp6.personalConnectionId = prop;
    let globalName = user.global_name;
    if (globalName == null) {
      globalName = user.globalName;
    }
    tmp6.globalName = globalName;
    tmp6.banner = user.banner;
    let primary_guild = user.primary_guild;
    const ensureUserPrimaryGuild = require("PrimaryGuildUtils").ensureUserPrimaryGuild;
    require("PrimaryGuildUtils");
    if (primary_guild == null) {
      primary_guild = user.primaryGuild;
    }
    if (primary_guild == null) {
      primary_guild = null;
    }
    tmp6.primaryGuild = ensureUserPrimaryGuild(primary_guild);
    ({ collectibles: tmp6.collectibles, displayNameStyles } = user);
    if (displayNameStyles == null) {
      const tmp12Result = require("DisplayNameStylesUtils");
      displayNameStyles = tmp12Result.parseServerDisplayNameStyles(user.display_name_styles);
    }
    tmp6.displayNameStyles = displayNameStyles;
    let vadColors = user.vadColors;
    if (vadColors == null) {
      vadColors = user.vad_colors;
    }
    if (vadColors == null) {
      vadColors = null;
    }
    tmp6.vadColors = vadColors;
    let typingIndicatorStyle = user.typingIndicatorStyle;
    if (typingIndicatorStyle == null) {
      const tmp12Result6 = require("CustomTypingIndicatorTypes");
      typingIndicatorStyle = tmp12Result6.parseServerTypingIndicatorStyle(user.typing_indicator_style);
    }
    tmp6.typingIndicatorStyle = typingIndicatorStyle;
    let premiumState = user.premiumState;
    if (premiumState == null) {
      const tmp12Result7 = require("PremiumStateUtils");
      premiumState = tmp12Result7.parseServerPremiumState(user.premium_state);
    }
    tmp6.premiumState = premiumState;
    const perks = user.perks;
    let activePerksBitmask;
    if (perks != null) {
      activePerksBitmask = perks.activePerksBitmask;
    }
    if (null != activePerksBitmask) {
      perks2 = user.perks;
    } else {
      const tmp12Result8 = require("PerksStateUtils");
      perks2 = tmp12Result8.parseServerPerks(user.perks);
    }
    tmp6.perks = perks2;
    let restrictedSchedule = user.restricted_schedule;
    const ensureRestrictedScheduleRecord = require("FamilyCenterModels").ensureRestrictedScheduleRecord;
    require("FamilyCenterModels");
    if (restrictedSchedule == null) {
      restrictedSchedule = user.restrictedSchedule;
    }
    tmp6.restrictedSchedule = ensureRestrictedScheduleRecord(restrictedSchedule);
    let appTransactionIds = user.appTransactionIds;
    if (appTransactionIds == null) {
      appTransactionIds = user.app_transaction_ids;
    }
    if (appTransactionIds == null) {
      appTransactionIds = null;
    }
    tmp6.appTransactionIds = appTransactionIds;
    let storeCountry = user.store_country;
    const parseStoreCountry = require("StoreCountryUtils").parseStoreCountry;
    require("StoreCountryUtils");
    if (storeCountry == null) {
      storeCountry = user.storeCountry;
    }
    tmp6.storeCountry = parseStoreCountry(storeCountry);
    let obj = {
      hasFlag: {
        writable: false,
        configurable: false,
        enumerable: false,
        value(arg0) {
          if (arg0 <= 1073741824) {
            return ((closure_0.flags | closure_0.publicFlags) & arg0) === arg0;
          } else {
            const deserializer = BigFlagUtilsAll;
            const deserializeResult = deserializer.deserialize(closure_0.flags);
            const deserializer2 = BigFlagUtilsAll;
            const deserializeResult1 = deserializer2.deserialize(closure_0.publicFlags);
            const deserializer3 = BigFlagUtilsAll;
            const deserializeResult2 = deserializer3.deserialize(arg0);
            const has = BigFlagUtilsAll.has;
            BigFlagUtilsAll;
            const obj = BigFlagUtilsAll;
            return has(obj.combine(deserializeResult, deserializeResult1), deserializeResult2);
          }
        }
      },
      isStaff: {
        writable: false,
        configurable: false,
        enumerable: false,
        value() {
          return closure_0.hasFlag(metroImportDefault.STAFF);
        }
      },
      isStaffPersonal: {
        writable: false,
        configurable: false,
        enumerable: false,
        value() {
          let tmp3 = !closure_0.hasFlag(metroImportDefault.STAFF);
          closure_0.hasFlag(metroImportDefault.STAFF);
          if (tmp3) {
            tmp3 = null != closure_0.personalConnectionId;
          }
          return tmp3;
        }
      },
      hasAnyStaffLevel: {
        writable: false,
        configurable: false,
        enumerable: false,
        value() {
          const hasFlagResult = closure_0.hasFlag(metroImportDefault.STAFF) || closure_0.hasFlag(metroImportDefault.COLLABORATOR) || closure_0.hasFlag(metroImportDefault.RESTRICTED_COLLABORATOR);
          return hasFlagResult;
        }
      }
    };
    Object.defineProperties(tmp6, obj);
    const globalName1 = tmp6.globalName;
    let length;
    if (globalName1 != null) {
      length = globalName1.length;
    }
    if (0 === length) {
      tmp6.globalName = null;
    }
    return tmp6;
  }
  hasVerifiedEmailOrPhone() {
    return true === this.verified || null != this.phone;
  }
  getAvatarURL(guildId, size) {
    let SUPPORTS_WEBP;
    if (SUPPORTS_WEBP === undefined) {
      SUPPORTS_WEBP = AvatarUtils.SUPPORTS_WEBP;
    }
    const self = this;
    let tmp3;
    if (null != guildId) {
      tmp3 = self.guildMemberAvatars[guildId];
    }
    if (null != tmp3) {
      let guildMemberAvatarURLSimple;
      if (null != guildId) {
        const obj3 = { guildId, avatar: tmp3, userId: self.id, canAnimate: flag, size, canWebP: SUPPORTS_WEBP };
        const obj2 = AvatarUtilsDefault;
        guildMemberAvatarURLSimple = obj2.getGuildMemberAvatarURLSimple(obj3);
      }
      return guildMemberAvatarURLSimple;
    }
    const obj = AvatarUtilsDefault;
    guildMemberAvatarURLSimple = obj.getUserAvatarURL(self, flag, size, null, SUPPORTS_WEBP);
  }
  addGuildAvatarHash(guildId, avatar) {
    const self = this;
    if (this.guildMemberAvatars[guildId] === avatar) {
      return self;
    } else {
      const obj = {};
      const merged = Object.assign(self.guildMemberAvatars);
      obj[guildId] = avatar;
      const obj2 = { guildMemberAvatars: obj };
      return self.merge(obj2);
    }
  }
  removeGuildAvatarHash(guildId) {
    const self = this;
    if (undefined === this.guildMemberAvatars[guildId]) {
      return self;
    } else {
      const obj = {};
      const merged = Object.assign(self.guildMemberAvatars);
      obj[guildId] = undefined;
      const obj2 = { guildMemberAvatars: obj };
      return self.merge(obj2);
    }
  }
  getAvatarSource(guildId) {
    const self = this;
    importDefault = guildId;
    let flag = hasItem;
    if (hasItem === undefined) {
      flag = false;
    }
    let avatar;
    if (null != guildId) {
      const tmp = this.guildMemberAvatars[guildId];
      avatar = tmp;
      if (null != tmp) {
        let obj2 = require("AvatarUtils");
        return obj2.getAnimatableSourceWithFallback(flag, (canAnimate) => {
          const makeSource = AvatarUtilsDefault.makeSource;
          AvatarUtilsDefault;
          const obj = AvatarUtilsDefault;
          const obj2 = { guildId, avatar, userId: self.id, canAnimate, size };
          return makeSource(obj.getGuildMemberAvatarURLSimple(obj2));
        });
      }
    }
    let obj = require("AvatarUtils");
    return obj.getAnimatableSourceWithFallback(flag, (flag) => {
      const obj = AvatarUtilsDefault;
      return obj.getUserAvatarSource(self, flag, size);
    });
  }
  isClaimed() {
    return null != this.email || null != this.phone;
  }
  isPhoneVerified() {
    return null != this.phone;
  }
  toString() {
    let str = "???";
    if ("" !== this.username) {
      str = this.username;
    }
    return str;
  }
  hasPurchasedFlag(PREMIUM_TIER_0) {
    const obj = FlagUtils;
    return obj.hasFlag(this.purchasedFlags, PREMIUM_TIER_0);
  }
  hasPremiumUsageFlag(FIND_BY_EMAIL) {
    const obj = FlagUtils;
    return obj.hasFlag(this.premiumUsageFlags, FIND_BY_EMAIL);
  }
  hasHadSKU(arg0) {
    let hasPurchasedFlagResult = null != tmp;
    if (hasPurchasedFlagResult) {
      const self = this;
      hasPurchasedFlagResult = this.hasPurchasedFlag(tmp);
    }
    return hasPurchasedFlagResult;
  }
  hasHadPremium(arg0) {
    let tmp = arg0;
    if (arg0 === undefined) {
      tmp = null;
    }
    const hasPurchasedFlagResult = this.hasPurchasedFlag(authStore.PREMIUM_TIER_0);
    const hasPurchasedFlagResult1 = this.hasPurchasedFlag(authStore.PREMIUM_TIER_1);
    const hasPurchasedFlagResult2 = this.hasPurchasedFlag(authStore.PREMIUM_TIER_2);
    if (React4.TIER_0 === tmp) {
      return hasPurchasedFlagResult;
    } else if (React4.TIER_1 === tmp) {
      return hasPurchasedFlagResult1;
    } else if (React4.TIER_2 === tmp) {
      return hasPurchasedFlagResult2;
    } else {
      return hasPurchasedFlagResult || hasPurchasedFlagResult1 || hasPurchasedFlagResult2;
    }
  }
  hadPremiumSubscription() {
    let tmp = arg0;
    if (arg0 === undefined) {
      tmp = null;
    }
    const self = this;
    const obj = PremiumTypeUtils;
    const isPremiumResult = obj.isPremium(this);
    const tmp3 = !isPremiumResult && self.hasHadPremium(tmp);
    return tmp3;
  }
  hasFreePremium() {
    const self = this;
    const isStaffResult = this.isStaff() || self.hasFlag(metroImportDefault.PARTNER) || self.isStaffPersonal();
    return isStaffResult;
  }
  isOnReverseTrial() {
    const obj = PremiumTypeUtils;
    let isPremiumResult = obj.isPremium(this);
    if (isPremiumResult) {
      const premiumState = this.premiumState;
      let premiumSource;
      if (premiumState != null) {
        premiumSource = premiumState.premiumSource;
      }
      isPremiumResult = premiumSource === require("user").PremiumSource.REVERSE_TRIAL;
    }
    return isPremiumResult;
  }
  isPremiumWithPremiumGroup() {
    const obj = PremiumTypeUtils;
    let isPremiumResult = obj.isPremium(this, React4.TIER_2);
    if (isPremiumResult) {
      const premiumState = this.premiumState;
      let premiumSource;
      if (premiumState != null) {
        premiumSource = premiumState.premiumSource;
      }
      isPremiumResult = premiumSource === require("user").PremiumSource.SUBSCRIPTION_GROUP;
    }
    return isPremiumResult;
  }
  hasPaidTier2Subscription() {
    const obj = PremiumTypeUtils;
    let isPremiumResult = obj.isPremium(this, React4.TIER_2);
    if (isPremiumResult) {
      const premiumState = this.premiumState;
      let prop;
      if (premiumState != null) {
        prop = premiumState.premiumSubscriptionType;
      }
      isPremiumResult = prop === require("user").PremiumSubscriptionType.TIER_2;
    }
    return isPremiumResult;
  }
  isPremiumWithFractionalPremiumOnly() {
    const self = this;
    const obj = PremiumTypeUtils;
    let isPremiumResult = obj.isPremium(this, React4.TIER_2);
    if (isPremiumResult) {
      const premiumState = self.premiumState;
      let prop;
      if (premiumState != null) {
        prop = premiumState.premiumSubscriptionType;
      }
      let tmp6 = prop === require("user").PremiumSubscriptionType.NONE_UNSPECIFIED;
      if (!tmp6) {
        const premiumState2 = self.premiumState;
        let prop1;
        if (premiumState2 != null) {
          prop1 = premiumState2.premiumSubscriptionType;
        }
        tmp6 = prop1 === require("user").PremiumSubscriptionType.BOOST_ONLY;
      }
      isPremiumResult = tmp6;
    }
    if (isPremiumResult) {
      const premiumState3 = self.premiumState;
      let premiumSource;
      if (premiumState3 != null) {
        premiumSource = premiumState3.premiumSource;
      }
      isPremiumResult = premiumSource === require("user").PremiumSource.FRACTIONAL_NITRO;
    }
    return isPremiumResult;
  }
  isFractionalPremiumWithNoStandardSub() {
    const self = this;
    const obj = PremiumTypeUtils;
    let isPremiumResult = obj.isPremium(this, React4.TIER_2);
    if (isPremiumResult) {
      const premiumState = self.premiumState;
      let premiumSource;
      if (premiumState != null) {
        premiumSource = premiumState.premiumSource;
      }
      isPremiumResult = premiumSource === require("user").PremiumSource.FRACTIONAL_NITRO;
    }
    if (isPremiumResult) {
      isPremiumResult = self.premiumState.premiumSubscriptionType !== require("user").PremiumSubscriptionType.TIER_2;
    }
    return isPremiumResult;
  }
  isFractionalPremium() {
    const obj = PremiumTypeUtils;
    let isPremiumResult = obj.isPremium(this, React4.TIER_2);
    if (isPremiumResult) {
      const premiumState = this.premiumState;
      let premiumSource;
      if (premiumState != null) {
        premiumSource = premiumState.premiumSource;
      }
      isPremiumResult = premiumSource === require("user").PremiumSource.FRACTIONAL_NITRO;
    }
    return isPremiumResult;
  }
  hasUrgentMessages() {
    return this.hasFlag(metroImportDefault.HAS_UNREAD_URGENT_MESSAGES);
  }
  isNonUserBot() {
    const self = this;
    let isSystemUserResult = this.isSystemUser();
    if (!isSystemUserResult) {
      const bot = self.bot && self.discriminator === hasOwnProperty;
      isSystemUserResult = bot;
    }
    return isSystemUserResult;
  }
  isLocalBot() {
    const bot = this.bot && this.id === React3;
    return bot;
  }
  isVerifiedBot() {
    const self = this;
    const hasFlagResult = this.isSystemUser() || self.isLocalBot() || self.hasFlag(metroImportDefault.VERIFIED_BOT);
    return hasFlagResult;
  }
  isSystemUser() {
    return true === this.system;
  }
  hasAvatarForGuild(id) {
    let tmp = null != id;
    if (tmp) {
      const self = this;
      tmp = null != this.guildMemberAvatars[id];
    }
    return tmp;
  }
  hasUniqueUsername() {
    return "0" === this.discriminator;
  }
  isPremiumGroupMember() {
    const result = this.isPremiumWithPremiumGroup() && this.premiumGroupRole === require("user").PremiumSubscriptionGroupRole.MEMBER;
    return result;
  }
  isPremiumGroupPrimary() {
    const result = this.isPremiumWithPremiumGroup() && this.premiumGroupRole === require("user").PremiumSubscriptionGroupRole.PRIMARY;
    return result;
  }
}
const prototype = UserRecord.prototype;
Object.defineProperty(prototype, "createdAt", {
  get: function createdAt() {
    const obj = require("SnowflakeUtils");
    const date = new Date(obj.extractTimestamp(this.id));
    return date;
  },
  set: undefined
});
Object.defineProperty(prototype, "tag", {
  get: function tag() {
    const username = this.username;
    const combined = "" + this.discriminator;
    return "" + username + "#" + combined.padStart(4, "0");
  },
  set: undefined
});
Object.defineProperty(prototype, "isProvisional", {
  get: function isProvisional() {
    return this.hasFlag(metroImportDefault.PROVISIONAL_ACCOUNT);
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
    const obj = AvatarDecorationUtils;
    this.avatarDecorationData = obj.parseAvatarDecorationData(avatar_decoration_data);
  }
});
Object.defineProperty(prototype, "nameplate", {
  get: function nameplate() {
    const collectibles = this.collectibles;
    let nameplate;
    const getNameplateData = require("utils").getNameplateData;
    require("utils");
    if (collectibles != null) {
      nameplate = collectibles.nameplate;
    }
    return getNameplateData(nameplate);
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
      prop = require("user").PremiumSubscriptionGroupRole.UNSPECIFIED;
    }
    return prop;
  },
  set: undefined
});
const userRecord = new UserRecord({ id: "0" });
let result = size.fileFinishedImporting("records/UserRecord.tsx");

export default UserRecord;
export const PLACEHOLDER_USER_RECORD = userRecord;