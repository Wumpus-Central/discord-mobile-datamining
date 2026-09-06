// discord_app/utils/EmojiUtils.tsx
import AvatarUtilsDefault from "AvatarUtils.tsx";
import ImageUtils from "ImageUtils.tsx";
import CreatorMonetizationRestrictionsUtils from "../modules/creator_monetization_review/CreatorMonetizationRestrictionsUtils.tsx";
import EmojiTypes from "../modules/emojis/EmojiTypes.tsx";
import PremiumUtilsDefault from "PremiumUtils.tsx";
import RoleSubscriptionEmojiUtils from "../modules/guild_role_subscriptions/RoleSubscriptionEmojiUtils.tsx";
import EmojiUtilsPlatformedDefault from "EmojiUtilsPlatformed.native.tsx";
import asyncGeneratorStep from "../../_runtime/00005_asyncGeneratorStep.js";
import PermissionStore from "../stores/PermissionStore.tsx";
import UserStore from "../stores/UserStore.tsx";

require = fn;
function getEmojiUnavailableReason(forceIncludeExternalGuilds) {
  ({ emoji, channel, guildId } = forceIncludeExternalGuilds);
  if (guildId === undefined) {
    guildId = undefined;
    if (channel != null) {
      guildId = channel.getGuildId();
    }
  }
  ({ intention, bypassPremiumEmojiEntitlement } = forceIncludeExternalGuilds);
  let tmp5 = emoji.type === EmojiTypes.EmojiTypes.GUILD;
  if (!tmp5) {
    tmp5 = null != emoji.guildId;
  }
  if (tmp5) {
    if (intention !== constants.GUILD_PROFILE) {
      if (intention !== constants.NO_CUSTOM_EMOJI) {
        let tmp10 = null != channel;
        if (tmp10) {
          tmp10 = managed(channel.type);
        }
        let tmp11 = null != channel;
        if (tmp11) {
          tmp11 = managedExternal(channel.type);
        }
        let tmp13 = null != emoji && null != guildId;
        if (tmp13) {
          const tmp14 = emoji.type === EmojiTypes.EmojiTypes.GUILD || null != emoji.guildId;
          let tmp15 = !tmp14;
          if (tmp14) {
            tmp15 = guildId === emoji.guildId;
          }
          tmp13 = tmp15;
        }
        if (intention === constants.COMMUNITY_CONTENT) {
          if (tmp13) {
            if (null != emoji.guildId) {
              let DISALLOW_EXTERNAL = null;
            }
            return DISALLOW_EXTERNAL;
          }
          DISALLOW_EXTERNAL = EmojiDisabledReasons.DISALLOW_EXTERNAL;
        } else {
          if (!closure_1_14(intention)) {
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
              if (!forceIncludeExternalGuilds.forceIncludeExternalGuilds) {
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
            if (!obj.canUseEmojisEverywhere(currentUser)) {
              if (!tmp13) {
                if (intention === constants.STATUS) {
                  return EmojiDisabledReasons.PREMIUM_LOCKED;
                } else if (!emoji.managed) {
                  return EmojiDisabledReasons.PREMIUM_LOCKED;
                }
              }
            }
            obj = PremiumUtilsDefault;
          }
          let tmp3Result = RoleSubscriptionEmojiUtils;
          if (tmp3Result.isUnusableRoleSubscriptionEmoji(emoji, guildId)) {
            tmp3Result = CreatorMonetizationRestrictionsUtils;
            tmp3Result.shouldHideGuildPurchaseEntryPoints(emoji.guildId)
              ? EmojiDisabledReasons.ROLE_SUBSCRIPTION_UNAVAILABLE
              : EmojiDisabledReasons.ROLE_SUBSCRIPTION_LOCKED;
          } else {
            let PREMIUM_LOCKED = null;
            if (emoji.animated) {
              PREMIUM_LOCKED = null;
              if (!bypassPremiumEmojiEntitlement) {
                PREMIUM_LOCKED = null;
                if (!obj3.canUseAnimatedEmojis(currentUser)) {
                  PREMIUM_LOCKED = null;
                  if (!tmp3Result1.isPurchasableRoleSubscriptionEmoji(emoji)) {
                    PREMIUM_LOCKED = EmojiDisabledReasons.PREMIUM_LOCKED;
                  }
                  tmp3Result1 = RoleSubscriptionEmojiUtils;
                }
                obj3 = PremiumUtilsDefault;
              }
            }
            return PREMIUM_LOCKED;
          }
        }
      }
    }
    return EmojiDisabledReasons.DISALLOW_CUSTOM;
  } else {
    return null;
  }
}
let closure_19 = async function _getEmojiColors() {
  await EmojiUtilsPlatformedDefault.getEmojiColors(closure_0);
  return value;
};
const ChannelRecord = fn(1961);
({ isGuildTextChannelType: closure_4, isGuildVocalChannelType: hasOwnProperty } = ChannelRecord);
const Permissions = fn(1074).Permissions;
const EmojiConstants = fn(1374);
({ EMOJI_MAX_FILESIZE: closure_9, EMOJI_MAX_LENGTH: c10, EMOJI_RE: closure_11, EmojiDisabledReasons } = EmojiConstants);
({ EmojiIntention: map1, isExternalEmojiAllowedForIntention: closure_14 } = EmojiConstants);
const items = [,];
({ PREMIUM_LOCKED: arr[0], ROLE_SUBSCRIPTION_LOCKED: arr[1] } = EmojiDisabledReasons);
const set = new Set(items);
const items1 = [
  ...set,
  EmojiDisabledReasons.GUILD_SUBSCRIPTION_UNAVAILABLE,
  EmojiDisabledReasons.ROLE_SUBSCRIPTION_UNAVAILABLE,
];
const set1 = new Set(items1);
const items2 = [, , ,];
({
  DISALLOW_CUSTOM: arr3[0],
  DISALLOW_EXTERNAL: arr3[1],
  GUILD_SUBSCRIPTION_UNAVAILABLE: arr3[2],
  ONLY_GUILD_EMOJIS_ALLOWED: arr3[3],
} = EmojiDisabledReasons);
const set2 = new Set(items2);
const size = fn(2);
const result = size.fileFinishedImporting("utils/EmojiUtils.tsx");

export default {
  sanitizeEmojiName(str) {
    let length;
    const replaced = str.replace(closure_1_11, "");
    const substr = replaced.slice(0, closure_1_10);
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
    let tmp = emoji.type === EmojiTypes.EmojiTypes.GUILD;
    if (!tmp) {
      tmp = null != emoji.guildId;
    }
    return tmp;
  },
  getEmojiUnavailableReasons(arg0) {
    ({ channel, guildId, intention, bypassPremiumEmojiEntitlement } = arg0);
    const emojisDisabled = new Set();
    const emojisUnfiltered = [];
    let emojisPremiumLockedCount = 0;
    let emojiNitroLocked = false;
    const iter = arg0.categoryEmojis[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp2 = nextResult;
      let obj = { emoji: nextResult, channel, guildId, intention, bypassPremiumEmojiEntitlement };
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
            if (!emojiNitroLocked) {
              tmp19 = tmp5 !== EmojiDisabledReasons.PREMIUM_LOCKED;
            }
            if (!tmp19) {
              emojiNitroLocked = true;
            }
            emojisPremiumLockedCount = emojisPremiumLockedCount + 1;
          }
        }
      } else {
        arr = emojisUnfiltered.push(tmp2);
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
    categoryEmojis = categoryEmojis.categoryEmojis;
    let flag = false;
    let num = 0;
    ({ channel, guildId, intention } = categoryEmojis);
    while (tmp !== undefined) {
      let obj = { emoji: tmp2, channel, intention, guildId };
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
    return this.isEmojiFiltered(forceIncludeExternalGuilds) || self.isEmojiPremiumLocked(forceIncludeExternalGuilds);
  },
  isEmojiDisabled(forceIncludeExternalGuilds) {
    return set1.has(getEmojiUnavailableReason(forceIncludeExternalGuilds));
  },
  isFileTooBig(size) {
    return size.size > 2097152;
  },
  isDataTooBig(arg0) {
    return ImageUtils.dataUriFileSize(arg0) > React7;
  },
};
export const countEmoji = function countEmoji(arr, arg1) {
  closure_0 = arg1;
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
  const self = this;
  const apply = closure_19.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const getEmojiUrl = function getEmojiUrl(arg0, arg1) {
  let num = arg1;
  if (arg1 === undefined) {
    num = 32;
  }
  ({ id, animated } = arg0);
  if (null != id) {
    let obj = { id, size: num, animated: null };
    if (animated == null) {
      animated = false;
    }
    obj.animated = animated;
    let emojiURL = AvatarUtilsDefault.getEmojiURL(obj);
  } else {
    obj = EmojiUtilsPlatformedDefault;
    emojiURL = obj.getURL(tmp);
  }
  return emojiURL;
};
export const getAllEmojiNamesString = function getAllEmojiNamesString(emojiByIdOrName) {
  if ("allNamesString" in emojiByIdOrName) {
    let allNamesString = emojiByIdOrName.allNamesString;
  } else {
    const _HermesInternal = HermesInternal;
    allNamesString = ":" + emojiByIdOrName.name + ":";
  }
  return allNamesString;
};
