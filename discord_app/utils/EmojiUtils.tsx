// discord_app/utils/EmojiUtils.tsx
import AvatarUtilsDefault from "AvatarUtils.tsx";
import ImageUtils from "ImageUtils.tsx";
import PremiumUtilsDefault from "PremiumUtils.tsx";
import EmojiTypes from "../modules/emojis/EmojiTypes.tsx";
import EmojiUtilsPlatformedDefault from "EmojiUtilsPlatformed.native.tsx";
import asyncGeneratorStep from "../../_runtime/00005_asyncGeneratorStep.js";
import EmojiPackStore from "../modules/emojis/default_emojis/EmojiPackStore.tsx";
import PermissionStore from "../stores/PermissionStore.tsx";
import UserStore from "../stores/UserStore.tsx";

const PremiumTypeUtils = isPremiumResult(1988);
const CreatorMonetizationRestrictionsUtils = isPremiumResult(4896);
const RoleSubscriptionEmojiUtils = isPremiumResult(4926);
require = fn;
function getEmojiUnavailableReason(forceIncludeExternalGuilds) {
  ({ emoji, channel, guildId } = forceIncludeExternalGuilds);
  if (guildId === undefined) {
    let guildId1;
    if (channel != null) {
      guildId1 = channel.getGuildId();
    }
    guildId = guildId1;
  }
  ({ intention, bypassPremiumEmojiEntitlement } = forceIncludeExternalGuilds);
  let isPremiumResult = require;
  let PREMIUM_LOCKED = dependencyMap;
  if (emoji.type === EmojiTypes.EmojiTypes.PACK) {
    if (intention !== constants.GUILD_PROFILE) {
      if (intention !== constants.NO_CUSTOM_EMOJI) {
        if (value2(intention)) {
          if (EmojiPackStore.isPackEmojiUsable(emoji)) {
            isPremiumResult = PremiumTypeUtils.isPremium(UserStore.getCurrentUser(), PremiumTypes.TIER_2);
            PREMIUM_LOCKED = null;
            if (!isPremiumResult) {
              isPremiumResult = EmojiDisabledReasons;
              PREMIUM_LOCKED = EmojiDisabledReasons.PREMIUM_LOCKED;
            }
            let DISALLOW_CUSTOM2 = PREMIUM_LOCKED;
            const isPremiumResultResult = PremiumTypeUtils;
          } else {
            DISALLOW_CUSTOM2 = EmojiDisabledReasons.DISALLOW_CUSTOM;
          }
        } else {
          let DISALLOW_CUSTOM = EmojiDisabledReasons.DISALLOW_EXTERNAL;
        }
      }
      return DISALLOW_CUSTOM;
    }
    DISALLOW_CUSTOM = EmojiDisabledReasons.DISALLOW_CUSTOM;
  } else {
    const type3 = emoji.type;
    let flag = true;
    if (EmojiTypes.EmojiTypes.GUILD !== type3) {
      flag = true;
      if (EmojiTypes.EmojiTypes.PACK !== type3) {
        flag = null != emoji.guildId;
      }
    }
    if (flag) {
      if (intention !== constants.GUILD_PROFILE) {
        if (intention !== constants.NO_CUSTOM_EMOJI) {
          let tmp9 = null != channel;
          if (tmp9) {
            tmp9 = managedExternal(channel.type);
          }
          let tmp10 = null != channel;
          if (tmp10) {
            tmp10 = animated(channel.type);
          }
          let tmp12 = null != emoji && null != guildId;
          if (tmp12) {
            const type = emoji.type;
            let flag2 = true;
            if (EmojiTypes.EmojiTypes.GUILD !== type) {
              flag2 = true;
              if (EmojiTypes.EmojiTypes.PACK !== type) {
                flag2 = null != emoji.guildId;
              }
            }
            let tmp13 = !flag2;
            if (flag2) {
              tmp13 = guildId === emoji.guildId;
            }
            tmp12 = tmp13;
          }
          if (intention === constants.COMMUNITY_CONTENT) {
            if (tmp12) {
              if (null != emoji.guildId) {
                let DISALLOW_EXTERNAL = null;
              }
              return DISALLOW_EXTERNAL;
            }
            DISALLOW_EXTERNAL = EmojiDisabledReasons.DISALLOW_EXTERNAL;
          } else {
            if (!value2(intention)) {
              let tmp17 = null != emoji && null != guildId;
              if (tmp17) {
                const type2 = emoji.type;
                let flag3 = true;
                if (EmojiTypes.EmojiTypes.GUILD !== type2) {
                  flag3 = true;
                  if (EmojiTypes.EmojiTypes.PACK !== type2) {
                    flag3 = null != emoji.guildId;
                  }
                }
                let tmp18 = !flag3;
                if (flag3) {
                  tmp18 = guildId === emoji.guildId;
                }
                tmp17 = tmp18;
              }
              if (!tmp17) {
                if (!forceIncludeExternalGuilds.forceIncludeExternalGuilds) {
                  return EmojiDisabledReasons.DISALLOW_EXTERNAL;
                }
              }
            }
            if (tmp9) {
              if (!tmp12) {
                if (!tmp16) {
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
                if (!tmp12) {
                  if (intention === constants.STATUS) {
                    return EmojiDisabledReasons.PREMIUM_LOCKED;
                  } else if (!emoji.managed) {
                    return EmojiDisabledReasons.PREMIUM_LOCKED;
                  }
                }
              }
              obj = PremiumUtilsDefault;
            }
            if (isPremiumResultResult1.isUnusableRoleSubscriptionEmoji(emoji, guildId)) {
              CreatorMonetizationRestrictionsUtils.shouldHideGuildPurchaseEntryPoints(emoji.guildId)
                ? EmojiDisabledReasons.ROLE_SUBSCRIPTION_UNAVAILABLE
                : EmojiDisabledReasons.ROLE_SUBSCRIPTION_LOCKED;
              const isPremiumResultResult2 = CreatorMonetizationRestrictionsUtils;
            } else {
              let PREMIUM_LOCKED1 = null;
              if (emoji.animated) {
                PREMIUM_LOCKED1 = null;
                if (!bypassPremiumEmojiEntitlement) {
                  PREMIUM_LOCKED1 = null;
                  if (!obj3.canUseAnimatedEmojis(currentUser)) {
                    PREMIUM_LOCKED1 = null;
                    if (!isPremiumResultResult3.isPurchasableRoleSubscriptionEmoji(emoji)) {
                      PREMIUM_LOCKED1 = EmojiDisabledReasons.PREMIUM_LOCKED;
                    }
                    isPremiumResultResult3 = RoleSubscriptionEmojiUtils;
                  }
                  obj3 = PremiumUtilsDefault;
                }
              }
              return PREMIUM_LOCKED1;
            }
            isPremiumResultResult1 = RoleSubscriptionEmojiUtils;
          }
        }
      }
      return EmojiDisabledReasons.DISALLOW_CUSTOM;
    } else {
      return null;
    }
  }
}
let closure_21 = async function _getEmojiColors() {
  await EmojiUtilsPlatformedDefault.getEmojiColors(closure_0);
  return value;
};
const ChannelRecord = fn(4828);
({ isGuildTextChannelType: hasOwnProperty, isGuildVocalChannelType: metroRequire } = ChannelRecord);
const Permissions = fn(1084).Permissions;
const EmojiConstants = fn(1392);
({
  EMOJI_MAX_FILESIZE: c10,
  EMOJI_MAX_LENGTH: closure_11,
  EMOJI_RE: closure_12,
  EmojiDisabledReasons,
} = EmojiConstants);
({ EmojiIntention: closure_14, isExternalEmojiAllowedForIntention: closure_15 } = EmojiConstants);
const PremiumTypes = fn(1391).PremiumTypes;
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
    const replaced = str.replace(__initData, "");
    const substr = replaced.slice(0, closure_1_11);
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
      type = type.type;
      let flag = true;
      if (EmojiTypes.EmojiTypes.GUILD !== type) {
        flag = true;
        if (EmojiTypes.EmojiTypes.PACK !== type) {
          flag = null != type.guildId;
        }
      }
      let tmp4 = !flag;
      if (flag) {
        tmp4 = arg1 === type.guildId;
      }
      tmp = tmp4;
    }
    return tmp;
  },
  getEmojiUnavailableReason,
  isCustomEmoji(emoji) {
    const type = emoji.type;
    if (EmojiTypes.EmojiTypes.GUILD !== type) {
      if (EmojiTypes.EmojiTypes.PACK !== type) {
        return null != emoji.guildId;
      }
    }
    return true;
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
  isDataTooBig(base64) {
    return ImageUtils.dataUriFileSize(base64) > v65535;
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
      const type = id.type;
      if (EmojiTypes.EmojiTypes.GUILD === type) {
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
      } else if (EmojiTypes.EmojiTypes.PACK === type) {
        closure_3 = closure_3 + 1;
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
  const apply = closure_21.apply;
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
    const obj3 = { id, size: num, animated: null };
    if (animated == null) {
      animated = false;
    }
    obj3.animated = animated;
    let emojiURL = AvatarUtilsDefault.getEmojiURL(obj3);
  } else {
    emojiURL = EmojiUtilsPlatformedDefault.getURL(tmp);
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
