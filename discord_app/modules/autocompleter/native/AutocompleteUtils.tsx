// === Module 10361: AutocompleteFormDivider ===

// Module 10361 (AutocompleteFormDivider)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 709 */;
import nameFromUserDefault from "nameFromUser" /* 4322 */;
import computeChannelName from "computeChannelName" /* 4674 */;
import TIMESTAMP_FORMATS from "TIMESTAMP_FORMATS" /* 4975 */;
import DividerDefault from "Divider" /* 8378 */;
import { isGuildSelectableChannelType as closure_3 } from "createChannelRecord" /* 1390 */;
import closure_4 from "comparator" /* 1981 */;
import closure_5 from "markAllUserIdListsStale" /* 4130 */;
import closure_6 from "mergeGuildAvatar" /* 1921 */;
import ME from "ME" /* 673 */;
import AUTOCOMPLETE_ROW_HEIGHT from "AUTOCOMPLETE_ROW_HEIGHT" /* 10362 */;
import regExp from "regExp" /* 4953 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

require = arg1;
function AutocompleteFormDivider() {
  const tmp = callback2();
  return jsx(DividerDefault, { style: callback2().itemDivider });
}
noopAll;
({ AutoCompleteResultTypes: error, WHITESPACE_RE: closure_8 } = ME);
({ AUTOCOMPLETE_EMOJI_ROW_HEIGHT: c9, AUTOCOMPLETE_ROW_HEIGHT: c10 } = AUTOCOMPLETE_ROW_HEIGHT);
({ CHANNEL_SENTINEL: unpackModuleId, EMOJI_SENTINEL: closure_12, GAME_MENTION_SENTINEL: map1, MENTION_SENTINEL: closure_14 } = regExp);
const hairlineWidth = require("get ActivityIndicator").StyleSheet.hairlineWidth;
createCacheKey = { itemDivider: null };
createCacheKey = { marginLeft: 16, backgroundColor: ThemesDefault.colors.BORDER_SUBTLE };
createCacheKey[0] = createCacheKey;
let closure_17 = createCacheKey.createStyles(createCacheKey);
const re19 = /[\r\n]/;
let result = require("set").fileFinishedImporting("modules/autocompleter/native/AutocompleteUtils.tsx");

export const getItemLayout = function getItemLayout(arg0, index) {
  let type;
  if (arg0 != null) {
    if (arg0[index] != null) {
      type = tmp2.type;
    }
  }
  const tmp3 = type === constants.EMOJI ? closure_9 : closure_10;
  const result = index * tmp3;
  return { length: tmp3, offset: result + Math.max(0, (index - 1) * hairlineWidth), index };
};
export const getAutocompleteResultText = function getAutocompleteResultText(type, channel, channel2) {
  if (null != channel2) {
    if (!channel2.has(type.type)) {
      return "";
    }
  }
  type = type.type;
  if (constants.USER === type) {
    const user = type.user;
    if (obj6.hasSameRoleAsUsername(channel, user)) {
      const _HermesInternal9 = HermesInternal;
      let combined = "" + tmp36 + user.tag;
    } else {
      const _HermesInternal8 = HermesInternal;
      combined = "" + tmp36 + nameFromUserDefault.getUserTag(user);
      const tmp34Result = nameFromUserDefault;
    }
    return combined;
  } else if (tmp.GLOBAL === type) {
    return type.text;
  } else if (tmp.ROLE === type) {
    const _HermesInternal7 = HermesInternal;
    return "" + closure_14 + type.name;
  } else if (tmp.CHANNEL === type) {
    channel = type.channel;
    if (channel.isThread()) {
      const obj4 = computeChannelName;
      const _HermesInternal6 = HermesInternal;
      return "#\"" + obj4.escapeChannelName(computeChannelName.computeChannelName(type.channel, closure_6, closure_5)) + "\"";
    } else {
      channel2 = type.channel;
      const guildId = channel2.getGuildId();
      if (null != guildId) {
        if (callback(type.channel.type)) {
          const tmp18 = textChannelNameDisambiguations.getTextChannelNameDisambiguations(guildId)[type.channel.id];
          let name;
          if (tmp18 != null) {
            name = tmp18.name;
          }
          if (name == null) {
            name = computeChannelName.computeChannelName(type.channel, closure_6, closure_5);
            const obj3 = computeChannelName;
          }
          const _HermesInternal5 = HermesInternal;
          return "" + closure_11 + name;
        }
      }
      const _HermesInternal4 = HermesInternal;
      return "" + closure_11 + computeChannelName.computeChannelName(type.channel, closure_6, closure_5);
    }
  } else if (tmp.GAME_MENTION === type) {
    const _HermesInternal3 = HermesInternal;
    return "" + closure_13 + type.game.name;
  } else if (tmp.TIMESTAMP_MENTION === type) {
    return TIMESTAMP_FORMATS.unparseTimestamp(type.mention.timestamp, type.mention.format);
  } else if (tmp.EMOJI === type) {
    const _HermesInternal2 = HermesInternal;
    return "" + closure_12 + type.name + ":";
  } else {
    if (tmp.EMOJI_PREMIUM_UPSELL !== type) {
      if (tmp.SLASH !== type) {
        if (tmp.CHOICE === type) {
          const _HermesInternal = HermesInternal;
          return "" + type.choice.displayName;
        } else {
          return "";
        }
      }
    }
    return "";
  }
};
export const getMentionTextWithUser = function getMentionTextWithUser(messageChannel, user) {
  if (obj.hasSameRoleAsUsername(messageChannel, user)) {
    const _HermesInternal2 = HermesInternal;
    let combined = "" + tmp3 + user.tag;
  } else {
    const _HermesInternal = HermesInternal;
    combined = "" + tmp3 + nameFromUserDefault.getUserTag(user);
    const tmpResult = nameFromUserDefault;
  }
  return combined;
};
export const getItemSeparator = function getItemSeparator() {
  return <AutocompleteFormDivider />;
};
export const getPrefix = function getPrefix(substr1) {
  return substr1[0];
};
export const getQuery = function getQuery(arr) {
  return arr.slice(1).toLowerCase();
};
export const isWhitespaceSeparatingBoundary = function isWhitespaceSeparatingBoundary(arr, index) {
  let isMatch = 0 === index;
  if (!isMatch) {
    isMatch = regex.test(arr[index - 1]);
  }
  return isMatch;
};
export const isUnbrokenRun = function isUnbrokenRun(arr, sum, arg2) {
  return !regex.test(arr.slice(sum, arg2));
};
export const isSingleLineRun = function isSingleLineRun(arr, sum, arg2) {
  return !regex2.test(arr.slice(sum, arg2));
};
export const findWordStart = function findWordStart(arg0, arg1) {
  let tmp = arg1;
  if (arg1 > 0) {
    let tmp4 = arg1;
    tmp = arg1;
    if (!regex.test(arg0[arg1 - 1])) {
      const diff = tmp4 - 1;
      tmp = diff;
      while (diff > 0) {
        let tmp6 = regex;
        tmp4 = diff;
        tmp = diff;
        if (regex.test(arg0[diff - 1])) {
          break;
        }
      }
    }
  }
  return tmp;
};
export const isSpaceJustTypedAtCaret = function isSpaceJustTypedAtCaret(text, selectionEnd, arg2, arg3) {
  let sum = arg3;
  if (arg3 === selectionEnd + 1) {
    if (arg2.length === text.length + 1) {
      if (" " === arg2[sum - 1]) {
        let num = 0;
        if (0 < selectionEnd) {
          while (arg2[num] === text[num]) {
            num = num + 1;
          }
          return false;
        }
        if (sum < arg2.length) {
          while (arg2[sum] === text[sum - 1]) {
            sum = sum + 1;
          }
          return false;
        }
        return true;
      }
    }
  }
  return false;
};
export const findAutoInsertOnSpaceToken = function findAutoInsertOnSpaceToken(str, arg1, closure_18) {
  if (arg1 >= closure_18.length + 2) {
    if (" " === str[arg1 - 1]) {
      const diff = arg1 - 1;
      let tmp3 = diff;
      if (0 < diff) {
        let tmp2 = diff;
        tmp3 = diff;
        if (!regex.test(str[diff - 1])) {
          const diff1 = tmp2 - 1;
          tmp3 = diff1;
          while (0 < diff1) {
            let tmp5 = regex;
            tmp2 = diff1;
            tmp3 = diff1;
            if (regex.test(str[diff1 - 1])) {
              break;
            }
          }
        }
      }
      if (str.startsWith(closure_18, tmp3)) {
        if (str.lastIndexOf(closure_18, diff - closure_18.length) !== tmp3) {
          return null;
        } else {
          const obj = { tokenStart: null, trigger: null };
          obj[0] = tmp3;
          obj[1] = str.slice(tmp3 + closure_18.length, diff);
          return obj;
        }
      } else {
        return null;
      }
    }
  }
  return null;
};