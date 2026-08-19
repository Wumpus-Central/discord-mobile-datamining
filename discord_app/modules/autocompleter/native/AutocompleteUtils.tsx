// === Module 10176: AutocompleteFormDivider ===

// Module 10176 (AutocompleteFormDivider)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import nameFromUserDefault from "nameFromUser" /* 4219 */;
import computeChannelName from "computeChannelName" /* 4984 */;
import DividerDefault from "Divider" /* 7693 */;
import { isGuildSelectableChannelType as closure_3 } from "createChannelRecord" /* 1395 */;
import comparator from "comparator" /* 1980 */;
import markAllUserIdListsStale from "markAllUserIdListsStale" /* 4030 */;
import mergeGuildAvatar from "mergeGuildAvatar" /* 1922 */;
import ME from "ME" /* 676 */;
import AUTOCOMPLETE_ROW_HEIGHT from "AUTOCOMPLETE_ROW_HEIGHT" /* 10177 */;
import regExp from "regExp" /* 6810 */;
import { jsx } from "jsxProd" /* 21 */;
import "createCacheKey";

require = fn;
function AutocompleteFormDivider() {
  const tmp = callback2();
  return jsx(DividerDefault, { style: callback2().itemDivider });
}
noopAll;
({ AutoCompleteResultTypes: error, WHITESPACE_RE: closure_8 } = ME);
({ AUTOCOMPLETE_EMOJI_ROW_HEIGHT: c9, AUTOCOMPLETE_ROW_HEIGHT: c10 } = AUTOCOMPLETE_ROW_HEIGHT);
({ CHANNEL_SENTINEL: unpackModuleId, EMOJI_SENTINEL: closure_12, GAME_MENTION_SENTINEL: map1, MENTION_SENTINEL: closure_14 } = regExp);
const hairlineWidth = require("get ActivityIndicator").StyleSheet.hairlineWidth;
const createCacheKey = { marginLeft: 16, backgroundColor: ThemesDefault.colors.BORDER_SUBTLE };
createCacheKey[0] = createCacheKey;
let closure_17 = createCacheKey.createStyles(createCacheKey);
let result = require("obj132").fileFinishedImporting("modules/autocompleter/native/AutocompleteUtils.tsx");

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
    if (obj5.hasSameRoleAsUsername(channel, user)) {
      const _HermesInternal9 = HermesInternal;
      let combined = "" + closure_14 + user.tag;
    } else {
      const _HermesInternal8 = HermesInternal;
      combined = "" + closure_14 + nameFromUserDefault.getUserTag(user);
      const tmp32Result = nameFromUserDefault;
    }
    return combined;
  } else if (constants.GLOBAL === type) {
    return type.text;
  } else if (constants.ROLE === type) {
    const _HermesInternal7 = HermesInternal;
    return "" + closure_14 + type.name;
  } else if (constants.CHANNEL === type) {
    channel = type.channel;
    if (channel.isThread()) {
      const obj3 = computeChannelName;
      const _HermesInternal6 = HermesInternal;
      return "#\"" + obj3.escapeChannelName(computeChannelName.computeChannelName(type.channel, closure_6, closure_5)) + "\"";
    } else {
      channel2 = type.channel;
      const guildId = channel2.getGuildId();
      if (null != guildId) {
        if (callback(type.channel.type)) {
          const tmp16 = textChannelNameDisambiguations.getTextChannelNameDisambiguations(guildId)[type.channel.id];
          let name;
          if (tmp16 != null) {
            name = tmp16.name;
          }
          if (name == null) {
            name = computeChannelName.computeChannelName(type.channel, closure_6, closure_5);
          }
          const _HermesInternal5 = HermesInternal;
          return "" + closure_11 + name;
        }
      }
      const _HermesInternal4 = HermesInternal;
      return "" + closure_11 + computeChannelName.computeChannelName(type.channel, closure_6, closure_5);
    }
  } else if (constants.GAME_MENTION === type) {
    const _HermesInternal3 = HermesInternal;
    return "" + closure_13 + type.game.name;
  } else if (constants.EMOJI === type) {
    const _HermesInternal2 = HermesInternal;
    return "" + closure_12 + type.name + ":";
  } else {
    if (constants.EMOJI_PREMIUM_UPSELL !== type) {
      if (constants.SLASH !== type) {
        if (constants.CHOICE === type) {
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
    let combined = "" + closure_14 + user.tag;
  } else {
    const _HermesInternal = HermesInternal;
    combined = "" + closure_14 + nameFromUserDefault.getUserTag(user);
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
export const isWhitespaceSeparatingBoundary = function isWhitespaceSeparatingBoundary(c22, index) {
  let isMatch = 0 === index;
  if (!isMatch) {
    isMatch = regex.test(table[index - 1]);
  }
  return isMatch;
};
export const isUnbrokenRun = function isUnbrokenRun(arr, arg1, arg2) {
  return !regex.test(arr.slice(arg1, arg2));
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
export const isSpaceJustTypedAtCaret = function isSpaceJustTypedAtCaret(text, selectionEnd, arr, selectionEnd2) {
  let sum = selectionEnd2;
  if (selectionEnd2 === selectionEnd + 1) {
    if (arr.length === text.length + 1) {
      if (" " === arr[sum - 1]) {
        let num = 0;
        if (0 < selectionEnd) {
          while (arr[num] === text[num]) {
            num = num + 1;
          }
          return false;
        }
        if (sum < arr.length) {
          while (arr[sum] === text[sum - 1]) {
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
export const findAutoInsertOnSpaceToken = function findAutoInsertOnSpaceToken(arr, selectionEnd, closure_18) {
  if (selectionEnd >= AutocompleteFormDivider.length + 2) {
    if (" " === arr[selectionEnd - 1]) {
      const diff = selectionEnd - 1;
      let tmp3 = diff;
      if (0 < diff) {
        let tmp2 = diff;
        tmp3 = diff;
        if (!regex.test(arr[diff - 1])) {
          const diff1 = tmp2 - 1;
          tmp3 = diff1;
          while (0 < diff1) {
            tmp2 = diff1;
            tmp3 = diff1;
            if (regex.test(arr[diff1 - 1])) {
              break;
            }
          }
        }
      }
      if (arr.startsWith(AutocompleteFormDivider, tmp3)) {
        if (arr.lastIndexOf(AutocompleteFormDivider, diff - AutocompleteFormDivider.length) !== tmp3) {
          return null;
        } else {
          const obj = { tokenStart: null, trigger: null };
          obj[0] = tmp3;
          obj[1] = arr.slice(tmp3 + AutocompleteFormDivider.length, diff);
          return obj;
        }
      } else {
        return null;
      }
    }
  }
  return null;
};