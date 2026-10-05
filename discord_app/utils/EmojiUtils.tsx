// === Module 4527: EmojiUtils ===

// Module 4527 (EmojiUtils)
import Constants from "Constants" /* 1085 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1402 */;
import ImageUtils from "ImageUtils" /* 1481 */;
import CreatorMonetizationRestrictionsUtils from "CreatorMonetizationRestrictionsUtils" /* 4501 */;
import EmojiTypes from "EmojiTypes" /* 4526 */;
import PremiumUtilsDefault from "PremiumUtils" /* 4528 */;
import RoleSubscriptionEmojiUtils from "RoleSubscriptionEmojiUtils" /* 5643 */;
import EmojiUtilsPlatformedDefault from "EmojiUtilsPlatformed" /* 7411 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import ChannelRecord from "ChannelRecord" /* 2055 */;
import PermissionStore from "PermissionStore" /* 4509 */;
import UserStore from "UserStore" /* 1377 */;
import EmojiConstants from "EmojiConstants" /* 1380 */;
import size from "module_2" /* 2 */;

let animated, c1, c2, closure_1, closure_2, closure_3, closure_5, closure_6, customExternal, dependencyMap, importDefault, managed, managedExternal;

let EmojiDisabledReasons;
let c10;
let c9;
let closure_14;
let closure_4;
let hasOwnProperty;
let map1;
let unpackModuleId;
function getEmojiUnavailableReason(forceIncludeExternalGuilds) {
  let bypassPremiumEmojiEntitlement;
  let channel;
  let emoji;
  let guildId;
  let intention;
  ({ emoji, channel, guildId } = forceIncludeExternalGuilds);
  if (guildId === undefined) {
    let guildId1;
    if (channel != null) {
      guildId1 = channel.getGuildId();
    }
    guildId = guildId1;
  }
  ({ intention, bypassPremiumEmojiEntitlement } = forceIncludeExternalGuilds);
  forceIncludeExternalGuilds = forceIncludeExternalGuilds.forceIncludeExternalGuilds;
  const tmp5 = emoji.type === EmojiTypes.EmojiTypes.GUILD || null != emoji.guildId;
  if (tmp5) {
    if (intention !== map1.GUILD_PROFILE) {
      if (intention !== map1.NO_CUSTOM_EMOJI) {
        const tmp10 = null != channel && managed(channel.type);
        null != channel && hasOwnProperty(channel.type);
        let tmp13 = null != emoji && null != guildId;
        if (tmp13) {
          const tmp14 = emoji.type === EmojiTypes.EmojiTypes.GUILD || null != emoji.guildId;
          let tmp15 = !tmp14;
          if (tmp14) {
            tmp15 = guildId === emoji.guildId;
          }
          tmp13 = tmp15;
        }
        if (intention === map1.COMMUNITY_CONTENT) {
          if (tmp13) {
            let DISALLOW_EXTERNAL;
            if (null != emoji.guildId) {
              DISALLOW_EXTERNAL = null;
            }
            return DISALLOW_EXTERNAL;
          }
          DISALLOW_EXTERNAL = EmojiDisabledReasons.DISALLOW_EXTERNAL;
        } else {
          let PREMIUM_LOCKED;
          if (!authStore2(intention)) {
            let tmp19 = null != emoji && null != guildId;
            if (tmp19) {
              const tmp20 = emoji.type === EmojiTypes.EmojiTypes.GUILD || null != emoji.guildId;
              let tmp21 = !tmp20;
              if (tmp20) {
                tmp21 = guildId === emoji.guildId;
              }
              tmp19 = tmp21;
            }
            if (!tmp19) {
              if (!forceIncludeExternalGuilds) {
                return EmojiDisabledReasons.DISALLOW_EXTERNAL;
              }
            }
          }
          if (tmp10) {
            if (!tmp13) {
              if (!tmp18) {
                return EmojiDisabledReasons.DISALLOW_EXTERNAL;
              }
            }
          }
          if (null != emoji.id) {
            if (!emoji.available) {
              return EmojiDisabledReasons.GUILD_SUBSCRIPTION_UNAVAILABLE;
            }
          }
          const currentUser = UserStore.getCurrentUser();
          if (!bypassPremiumEmojiEntitlement) {
            obj = PremiumUtilsDefault;
            if (!obj.canUseEmojisEverywhere(currentUser)) {
              if (!tmp13) {
                if (intention === map1.STATUS) {
                  return EmojiDisabledReasons.PREMIUM_LOCKED;
                } else if (!emoji.managed) {
                  return EmojiDisabledReasons.PREMIUM_LOCKED;
                }
              }
            }
          }
          const isUnusableRoleSubscriptionEmoji = RoleSubscriptionEmojiUtils.isUnusableRoleSubscriptionEmoji;
          RoleSubscriptionEmojiUtils;
          if (isUnusableRoleSubscriptionEmoji(emoji, guildId)) {
            const tmp3Result3 = CreatorMonetizationRestrictionsUtils;
            PREMIUM_LOCKED = tmp3Result3.shouldHideGuildPurchaseEntryPoints(emoji.guildId) ? EmojiDisabledReasons.ROLE_SUBSCRIPTION_UNAVAILABLE : EmojiDisabledReasons.ROLE_SUBSCRIPTION_LOCKED;
          } else {
            PREMIUM_LOCKED = null;
            if (emoji.animated) {
              PREMIUM_LOCKED = null;
              if (!bypassPremiumEmojiEntitlement) {
                PREMIUM_LOCKED = null;
                const obj2 = PremiumUtilsDefault;
                if (!obj2.canUseAnimatedEmojis(currentUser)) {
                  PREMIUM_LOCKED = null;
                  const tmp3Result4 = RoleSubscriptionEmojiUtils;
                  if (!tmp3Result4.isPurchasableRoleSubscriptionEmoji(emoji)) {
                    PREMIUM_LOCKED = EmojiDisabledReasons.PREMIUM_LOCKED;
                  }
                }
              }
            }
          }
          return PREMIUM_LOCKED;
        }
      }
    }
    return EmojiDisabledReasons.DISALLOW_CUSTOM;
  } else {
    return null;
  }
}
let obj = function _getEmojiColors() {
  obj = _asyncToGenerator(async (arg0) => {
    let obj3;
    let closure_0 = arg0;
    if (c1 === 2) {
      c1 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        c1 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            c1 = 3;
            throw value;
          } else if (arg0 === 2) {
            c1 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            c2 = 1;
            c1 = 1;
            const obj5 = { value: obj3.getEmojiColors(closure_0), done: false };
            obj3 = EmojiUtilsPlatformedDefault;
            return obj5;
          }
        } else if (arg0 === 1) {
          c1 = 3;
          throw value;
        } else if (arg0 === 2) {
          c1 = 3;
          const obj6 = { value, done: true };
          return obj6;
        } else {
          c1 = 3;
          obj = { value, done: true };
          return obj;
        }
      } catch (tmp7) {
        c1 = 3;
        throw tmp7;
      }
    }
  });
  return obj(...arguments);
};
({ isGuildTextChannelType: closure_4, isGuildVocalChannelType: hasOwnProperty } = ChannelRecord);
const Permissions = Constants.Permissions;
({ EMOJI_MAX_FILESIZE: c9, EMOJI_MAX_LENGTH: c10, EMOJI_RE: unpackModuleId, EmojiDisabledReasons } = EmojiConstants);
({ EmojiIntention: map1, isExternalEmojiAllowedForIntention: closure_14 } = EmojiConstants);
const items = [, ];
({ PREMIUM_LOCKED: arr[0], ROLE_SUBSCRIPTION_LOCKED: arr[1] } = EmojiDisabledReasons);
const set = new Set(items);
const items1 = [...set, EmojiDisabledReasons.GUILD_SUBSCRIPTION_UNAVAILABLE, EmojiDisabledReasons.ROLE_SUBSCRIPTION_UNAVAILABLE];
const set1 = new Set(items1);
const items2 = [, , , ];
({ DISALLOW_CUSTOM: arr3[0], DISALLOW_EXTERNAL: arr3[1], GUILD_SUBSCRIPTION_UNAVAILABLE: arr3[2], ONLY_GUILD_EMOJIS_ALLOWED: arr3[3] } = EmojiDisabledReasons);
const set2 = new Set(items2);
obj = {
  sanitizeEmojiName(str) {
    let length;
    const replaced = str.replace(unpackModuleId, "");
    const substr = replaced.slice(0, authStore);
    let tmp = substr;
    let tmp2 = substr;
    if (substr.length < 2) {
      do {
        let text = `${tmp}_`;
        tmp = text;
        tmp2 = text;
        length = `${tmp}_`.length;
      } while (length < 2);
    }
    return tmp2;
  },
  filterUnsupportedEmojis: EmojiUtilsPlatformedDefault.filterUnsupportedEmojis,
  getURL: EmojiUtilsPlatformedDefault.getURL,
  isInternalEmojiForGuildId(type, arg1) {
    let tmp = null != type && null != arg1;
    if (tmp) {
      const tmp4 = type.type === EmojiTypes.EmojiTypes.GUILD || null != type.guildId;
      let tmp5 = !tmp4;
      if (tmp4) {
        tmp5 = arg1 === type.guildId;
      }
      tmp = tmp5;
    }
    return tmp;
  },
  getEmojiUnavailableReason,
  isCustomEmoji(emoji) {
    const tmp = emoji.type === EmojiTypes.EmojiTypes.GUILD || null != emoji.guildId;
    return tmp;
  },
  getEmojiUnavailableReasons(categoryEmojis) {
    let bypassPremiumEmojiEntitlement;
    let channel;
    let guildId;
    let intention;
    categoryEmojis = categoryEmojis.categoryEmojis;
    ({ channel, guildId, intention, bypassPremiumEmojiEntitlement } = categoryEmojis);
    const emojisDisabled = new Set();
    const emojisUnfiltered = [];
    let emojisPremiumLockedCount = 0;
    let emojiNitroLocked = false;
    const iter = categoryEmojis[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp2 = nextResult;
      obj = { emoji: nextResult, channel, guildId, intention, bypassPremiumEmojiEntitlement };
      let tmp4 = getEmojiUnavailableReason(obj);
      let tmp5 = tmp4;
      if (null != tmp4) {
        if (!set2.has(tmp5)) {
          let arr = emojisUnfiltered.push(tmp2);
        }
        if (set1.has(tmp5)) {
          if (null != tmp2.id) {
            let addResult = emojisDisabled.add(tmp2.id);
          }
          if (set.has(tmp5)) {
            let tmp19 = emojiNitroLocked;
            if (!tmp19) {
              tmp19 = tmp5 !== EmojiDisabledReasons.PREMIUM_LOCKED;
            }
            if (!tmp19) {
              emojiNitroLocked = true;
            }
            emojisPremiumLockedCount = emojisPremiumLockedCount + 1;
          }
        }
      } else {
        let arr3 = emojisUnfiltered.push(tmp2);
      }
      continue;
    }
    return { emojisDisabled, emojisUnfiltered, emojisPremiumLockedCount, emojiNitroLocked };
  },
  isEmojiFiltered(forceIncludeExternalGuilds) {
    return set2.has(getEmojiUnavailableReason(forceIncludeExternalGuilds));
  },
  isEmojiPremiumLocked(forceIncludeExternalGuilds) {
    return set.has(getEmojiUnavailableReason(forceIncludeExternalGuilds));
  },
  isEmojiCategoryNitroLocked(categoryEmojis) {
    let channel;
    let guildId;
    let intention;
    categoryEmojis = categoryEmojis.categoryEmojis;
    let flag = false;
    let num = 0;
    ({ channel, guildId, intention } = categoryEmojis);
    const tmp = categoryEmojis[Symbol.iterator]();
    while (tmp !== undefined) {
      obj = { emoji: tmp2, channel, intention, guildId };
      let tmp4 = getEmojiUnavailableReason(obj);
      if (tmp4 === EmojiDisabledReasons.PREMIUM_LOCKED) {
        flag = true;
        num = num + 1;
      } else if (tmp5 === tmp6.GUILD_SUBSCRIPTION_UNAVAILABLE) {
        num = num + 1;
      }
      continue;
    }
    if (flag) {
      flag = num === categoryEmojis.length;
    }
    return flag;
  },
  isEmojiFilteredOrLocked(forceIncludeExternalGuilds) {
    const self = this;
    const tmp = this.isEmojiFiltered(forceIncludeExternalGuilds) || self.isEmojiPremiumLocked(forceIncludeExternalGuilds);
    return tmp;
  },
  isEmojiDisabled(forceIncludeExternalGuilds) {
    return set1.has(getEmojiUnavailableReason(forceIncludeExternalGuilds));
  },
  isFileTooBig(size) {
    return size.size > 2097152;
  },
  isDataTooBig(base64) {
    obj = ImageUtils;
    return obj.dataUriFileSize(base64) > React4;
  }
};
const result = size.fileFinishedImporting("utils/EmojiUtils.tsx");

export default obj;
export const countEmoji = function countEmoji(arr, arg1) {
  let closure_0 = arg1;
  importDefault = 0;
  dependencyMap = 0;
  customExternal = 0;
  managed = 0;
  managedExternal = 0;
  animated = 0;
  const item = arr.forEach((id) => {
    if (null != id.id) {
      if (id.type === EmojiTypes.EmojiTypes.GUILD) {
        if (id.guildId === closure_0) {
          if (id.managed) {
            closure_4 = closure_4 + 1;
          } else {
            closure_2 = closure_2 + 1;
          }
        } else if (id.managed) {
          closure_5 = closure_5 + 1;
        } else {
          closure_3 = closure_3 + 1;
        }
      }
      if (id.animated) {
        closure_6 = closure_6 + 1;
      }
    } else {
      closure_1 = closure_1 + 1;
    }
  });
  return { unicode: importDefault, custom: dependencyMap, customExternal, managed, managedExternal, animated };
};
export const getEmojiColors = function getEmojiColors() {
  return obj(...arguments);
};
export const getEmojiUrl = function getEmojiUrl(arg0, arg1) {
  let emojiURL;
  let id;
  let num = arg1;
  if (arg1 === undefined) {
    num = 32;
  }
  ({ id, animated } = arg0);
  if (null != id) {
    const obj2 = { id, size: num, animated };
    const getEmojiURL = AvatarUtilsDefault.getEmojiURL;
    AvatarUtilsDefault;
    if (animated == null) {
      animated = false;
    }
    emojiURL = getEmojiURL(obj2);
  } else {
    obj = EmojiUtilsPlatformedDefault;
    emojiURL = obj.getURL(tmp);
  }
  return emojiURL;
};
export const getAllEmojiNamesString = function getAllEmojiNamesString(emojiByIdOrName) {
  let allNamesString;
  if ("allNamesString" in emojiByIdOrName) {
    allNamesString = emojiByIdOrName.allNamesString;
  } else {
    const _HermesInternal = HermesInternal;
    allNamesString = ":" + emojiByIdOrName.name + ":";
  }
  return allNamesString;
};