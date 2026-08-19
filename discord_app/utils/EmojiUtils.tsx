// === Module 4038: getEmojiUnavailableReason ===

// Module 4038 (getEmojiUnavailableReason)
import getAvatarURLDefault from "getAvatarURL" /* 1435 */;
import fit from "fit" /* 1491 */;
import EmojiTypes from "EmojiTypes" /* 4037 */;
import getPremiumPlanItemDefault from "getPremiumPlanItem" /* 4039 */;
import getURLDefault from "getURL" /* 7530 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;
import createChannelRecord from "createChannelRecord" /* 1395 */;
import closure_6 from "getUncachedChannelPermissions" /* 4021 */;
import closure_7 from "mergeGuildAvatar" /* 1922 */;
import { Permissions } from "ME" /* 676 */;
import set from "set" /* 1925 */;

require = arg1;
function getEmojiUnavailableReason(intention) {
  ({ emoji, channel, guildId } = intention);
  if (guildId === undefined) {
    guildId = undefined;
    if (channel != null) {
      guildId = channel.getGuildId();
    }
  }
  intention = intention.intention;
  let tmp5 = emoji.type === EmojiTypes.EmojiTypes.GUILD;
  if (!tmp5) {
    tmp5 = null != emoji.guildId;
  }
  if (tmp5) {
    if (intention !== constants.GUILD_PROFILE) {
      if (intention !== tmp8.NO_CUSTOM_EMOJI) {
        let tmp10 = null != channel;
        if (tmp10) {
          tmp10 = callback2(channel.type);
        }
        let tmp11 = null != channel;
        if (tmp11) {
          tmp11 = callback3(channel.type);
        }
        let tmp13 = null != emoji && null != guildId;
        if (tmp13) {
          const tmp14 = emoji.type === tmp3(4037).EmojiTypes.GUILD || null != emoji.guildId;
          let tmp15 = !tmp14;
          if (tmp14) {
            tmp15 = guildId === emoji.guildId;
          }
          tmp13 = tmp15;
        }
        if (intention === tmp8.COMMUNITY_CONTENT) {
          if (tmp13) {
            if (null != emoji.guildId) {
              let DISALLOW_EXTERNAL = null;
            }
            return DISALLOW_EXTERNAL;
          }
          DISALLOW_EXTERNAL = EmojiDisabledReasons.DISALLOW_EXTERNAL;
        } else {
          if (!callback4(intention)) {
            let tmp19 = null != emoji && null != guildId;
            if (tmp19) {
              const tmp20 = emoji.type === tmp3(4037).EmojiTypes.GUILD || null != emoji.guildId;
              let tmp21 = !tmp20;
              if (tmp20) {
                tmp21 = guildId === emoji.guildId;
              }
              tmp19 = tmp21;
            }
            if (!tmp19) {
              if (!intention.forceIncludeExternalGuilds) {
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
          currentUser = currentUser.getCurrentUser();
          if (!obj.canUseEmojisEverywhere(currentUser)) {
            if (!tmp13) {
              if (intention === tmp8.STATUS) {
                return EmojiDisabledReasons.PREMIUM_LOCKED;
              } else if (!emoji.managed) {
                return EmojiDisabledReasons.PREMIUM_LOCKED;
              }
            }
          }
          let tmp3Result = tmp3(6732);
          if (tmp3Result.isUnusableRoleSubscriptionEmoji(emoji, guildId)) {
            tmp3Result = tmp3(4014);
            tmp3Result.shouldHideGuildPurchaseEntryPoints(emoji.guildId) ? EmojiDisabledReasons.ROLE_SUBSCRIPTION_UNAVAILABLE : EmojiDisabledReasons.ROLE_SUBSCRIPTION_LOCKED;
          } else {
            let PREMIUM_LOCKED = null;
            if (emoji.animated) {
              PREMIUM_LOCKED = null;
              if (!tmp27Result.canUseAnimatedEmojis(currentUser)) {
                PREMIUM_LOCKED = null;
                if (!tmp3Result1.isPurchasableRoleSubscriptionEmoji(emoji)) {
                  PREMIUM_LOCKED = EmojiDisabledReasons.PREMIUM_LOCKED;
                }
                tmp3Result1 = tmp3(6732);
              }
              tmp27Result = tmp27(4039);
            }
            return PREMIUM_LOCKED;
          }
          obj = getPremiumPlanItemDefault;
          tmp27 = importDefault;
        }
      }
    }
    return EmojiDisabledReasons.DISALLOW_CUSTOM;
  } else {
    return null;
  }
}
function _getEmojiColors() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c2 = 0;
    c1 = 0;
    return (function*(arg0) {
      const obj2 = v0(table[10]);
      yield obj2.getEmojiColors(closure_0);
      return arg1;
    })();
  });
  closure_19 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
({ isGuildTextChannelType: c4, isGuildVocalChannelType: c5 } = createChannelRecord);
({ EMOJI_MAX_FILESIZE: c9, EMOJI_MAX_LENGTH: c10, EMOJI_RE: unpackModuleId, EmojiDisabledReasons } = set);
({ EmojiIntention: map1, isExternalEmojiAllowedForIntention: closure_14 } = set);
const items = [, ];
({ PREMIUM_LOCKED: arr[0], ROLE_SUBSCRIPTION_LOCKED: arr[1] } = EmojiDisabledReasons);
set = new Set(items);
const items1 = [...set, EmojiDisabledReasons.GUILD_SUBSCRIPTION_UNAVAILABLE, EmojiDisabledReasons.ROLE_SUBSCRIPTION_UNAVAILABLE];
const set1 = new Set(items1);
const items2 = [, , , ];
({ DISALLOW_CUSTOM: arr3[0], DISALLOW_EXTERNAL: arr3[1], GUILD_SUBSCRIPTION_UNAVAILABLE: arr3[2], ONLY_GUILD_EMOJIS_ALLOWED: arr3[3] } = EmojiDisabledReasons);
const set2 = new Set(items2);
const result = set.fileFinishedImporting("utils/EmojiUtils.tsx");

export default {
  sanitizeEmojiName(str) {
    let length;
    const replaced = str.replace(closure_11, "");
    const substr = replaced.slice(0, closure_10);
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
  filterUnsupportedEmojis: getURLDefault.filterUnsupportedEmojis,
  getURL: getURLDefault.getURL,
  isInternalEmojiForGuildId(type) {
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
    ({ channel, guildId, intention } = arg0);
    const emojisDisabled = new Set();
    const emojisUnfiltered = [];
    let emojisPremiumLockedCount = 0;
    let emojiNitroLocked = false;
    const iter = arg0.categoryEmojis[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp2 = nextResult;
      let tmp3 = getEmojiUnavailableReason;
      let obj = { emoji: null, channel: null, guildId: null, intention: null };
      obj[0] = nextResult;
      obj[1] = channel;
      obj[2] = guildId;
      obj[3] = intention;
      let tmp4 = getEmojiUnavailableReason(obj);
      let tmp5 = tmp4;
      if (null != tmp4) {
        let tmp8 = set2;
        let tmp9 = tmp4;
        if (!set2.has(tmp5)) {
          let tmp10 = nextResult;
          let arr = emojisUnfiltered.push(tmp2);
        }
        let tmp12 = set1;
        let tmp13 = tmp4;
        if (set1.has(tmp5)) {
          let tmp14 = nextResult;
          if (null != tmp2.id) {
            let tmp15 = nextResult;
            let addResult = emojisDisabled.add(tmp2.id);
          }
          let tmp17 = set;
          let tmp18 = tmp4;
          if (set.has(tmp5)) {
            let tmp19 = emojiNitroLocked;
            if (!emojiNitroLocked) {
              let tmp20 = tmp4;
              let tmp21 = EmojiDisabledReasons;
              tmp19 = tmp5 !== EmojiDisabledReasons.PREMIUM_LOCKED;
            }
            if (!tmp19) {
              emojiNitroLocked = true;
            }
            let tmp22 = emojisPremiumLockedCount;
            emojisPremiumLockedCount = emojisPremiumLockedCount + 1;
          }
        }
      } else {
        let tmp6 = nextResult;
        arr = emojisUnfiltered.push(tmp2);
      }
      continue;
    }
    return { emojisDisabled, emojisUnfiltered, emojisPremiumLockedCount, emojiNitroLocked };
  },
  isEmojiFiltered(intention) {
    return set2.has(getEmojiUnavailableReason(intention));
  },
  isEmojiPremiumLocked(intention) {
    return set.has(getEmojiUnavailableReason(intention));
  },
  isEmojiCategoryNitroLocked(categoryEmojis) {
    categoryEmojis = categoryEmojis.categoryEmojis;
    let flag = false;
    let num = 0;
    ({ channel, guildId, intention } = categoryEmojis);
    while (tmp !== undefined) {
      let tmp3 = getEmojiUnavailableReason;
      let obj = { emoji: null, channel: null, intention: null, guildId: null };
      obj[0] = tmp2;
      obj[1] = channel;
      obj[2] = intention;
      obj[3] = guildId;
      let tmp4 = getEmojiUnavailableReason(obj);
      if (tmp4 === EmojiDisabledReasons.PREMIUM_LOCKED) {
        flag = true;
        let tmp9 = num;
        num = num + 1;
      } else {
        let tmp7 = tmp4;
        if (tmp5 === tmp6.GUILD_SUBSCRIPTION_UNAVAILABLE) {
          let tmp8 = num;
          num = num + 1;
        }
      }
      continue;
    }
    if (flag) {
      flag = num === categoryEmojis.length;
    }
    return flag;
  },
  isEmojiFilteredOrLocked(intention) {
    const self = this;
    return this.isEmojiFiltered(intention) || self.isEmojiPremiumLocked(intention);
  },
  isEmojiDisabled(intention) {
    return set1.has(getEmojiUnavailableReason(intention));
  },
  isFileTooBig(size) {
    return size.size > 2097152;
  },
  isDataTooBig(arg0) {
    return fit.dataUriFileSize(arg0) > closure_9;
  }
};
export const countEmoji = function countEmoji(arr) {
  closure_0 = arg1;
  c1 = 0;
  c2 = 0;
  c3 = 0;
  c4 = 0;
  c5 = 0;
  c6 = 0;
  const item = arr.forEach((id) => {
    if (null != id.id) {
      if (id.type === callback(table[6]).EmojiTypes.GUILD) {
        if (id.guildId === callback) {
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
  return { unicode: c1, custom: c2, customExternal: c3, managed: c4, managedExternal: c5, animated: c6 };
};
export const getEmojiColors = function getEmojiColors() {
  const self = this;
  const apply = _getEmojiColors.apply;
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
    let obj = { id: null, size: null, animated: null };
    obj[0] = id;
    obj[1] = num;
    if (animated == null) {
      animated = false;
    }
    obj[2] = animated;
    let emojiURL = getAvatarURLDefault.getEmojiURL(obj);
    const obj2 = getAvatarURLDefault;
  } else {
    obj = getURLDefault;
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