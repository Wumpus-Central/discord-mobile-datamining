// === Module 10262: autocompleter/AutocompleteUtils ===

// Module 10262 (autocompleter/AutocompleteUtils)
import nativeDefault from "native" /* 576 */;
import UserUtilsDefault from "UserUtils" /* 4404 */;
import useChannelName from "useChannelName" /* 4713 */;
import TimestampUtils from "TimestampUtils" /* 5022 */;
import FormDividerDefault from "FormDivider" /* 8599 */;
import noop from "module_19" /* 19 */;
import GuildChannelStore from "GuildChannelStore" /* 2012 */;
import RelationshipStore from "RelationshipStore" /* 4209 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
function AutocompleteFormDivider() {
  const tmp = closure_17();
  return jsx(FormDividerDefault, { style: closure_17().itemDivider });
}
let closure_3 = fn(1961).isGuildSelectableChannelType;
const Constants = fn(1074);
({ AutoCompleteResultTypes: closure_7, WHITESPACE_RE: closure_8 } = Constants);
const ApplicationCommandsConstants = fn(10263);
({ AUTOCOMPLETE_EMOJI_ROW_HEIGHT: closure_9, AUTOCOMPLETE_ROW_HEIGHT: c10 } = ApplicationCommandsConstants);
const ChannelAutocompleteConstants = fn(5000);
({ CHANNEL_SENTINEL: closure_11, EMOJI_SENTINEL: closure_12, GAME_MENTION_SENTINEL: map1, MENTION_SENTINEL: closure_14 } = ChannelAutocompleteConstants);
const jsx = fn(21).jsx;
const hairlineWidth = fn(17).StyleSheet.hairlineWidth;
fn(4560);
let createStyles = { itemDivider: null };
createStyles = { marginLeft: 16, backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
createStyles.itemDivider = createStyles;
let closure_17 = createStyles.createStyles(createStyles);
const re19 = /[\r\n]/;
const size = fn(2);
let result = size.fileFinishedImporting("modules/autocompleter/native/AutocompleteUtils.tsx");

export const getItemLayout = function getItemLayout(arg0, index) {
  let type;
  if (arg0 != null) {
    if (arg0[index] != null) {
      type = tmp2.type;
    }
  }
  const tmp3 = type === constants.EMOJI ? React7 : closure_1_10;
  const obj = { length: tmp3, offset: null, index };
  const result = index * tmp3;
  obj.offset = result + Math.max(0, (index - 1) * hairlineWidth);
  return obj;
};
export const getAutocompleteResultText = function getAutocompleteResultText(type, channel, set) {
  if (null != set) {
    if (!set.has(type.type)) {
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
      combined = "" + tmp36 + UserUtilsDefault.getUserTag(user);
      const tmp34Result = UserUtilsDefault;
    }
    return combined;
  } else if (tmp.GLOBAL === type) {
    return type.text;
  } else if (tmp.ROLE === type) {
    const _HermesInternal7 = HermesInternal;
    return "" + closure_1_14 + type.name;
  } else if (tmp.CHANNEL === type) {
    channel = type.channel;
    if (channel.isThread()) {
      const obj4 = useChannelName;
      const _HermesInternal6 = HermesInternal;
      return "#\"" + obj4.escapeChannelName(useChannelName.computeChannelName(type.channel, UserStore, RelationshipStore)) + "\"";
    } else {
      const channel2 = type.channel;
      const guildId = channel2.getGuildId();
      if (null != guildId) {
        if (closure_3(type.channel.type)) {
          const tmp18 = GuildChannelStore.getTextChannelNameDisambiguations(guildId)[type.channel.id];
          let name;
          if (tmp18 != null) {
            name = tmp18.name;
          }
          if (name == null) {
            name = useChannelName.computeChannelName(type.channel, UserStore, RelationshipStore);
          }
          const _HermesInternal5 = HermesInternal;
          return "" + closure_1_11 + name;
        }
      }
      const _HermesInternal4 = HermesInternal;
      return "" + closure_1_11 + useChannelName.computeChannelName(type.channel, UserStore, RelationshipStore);
    }
  } else if (tmp.GAME_MENTION === type) {
    const _HermesInternal3 = HermesInternal;
    return "" + map1 + type.game.name;
  } else if (tmp.TIMESTAMP_MENTION === type) {
    return TimestampUtils.unparseTimestamp(type.mention.timestamp, type.mention.format);
  } else if (tmp.EMOJI === type) {
    const _HermesInternal2 = HermesInternal;
    return "" + closure_1_12 + type.name + ":";
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
    combined = "" + tmp3 + UserUtilsDefault.getUserTag(user);
    const tmpResult = UserUtilsDefault;
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
export const isWhitespaceSeparatingBoundary = function isWhitespaceSeparatingBoundary(seenText, lastIndexOfResult) {
  let isMatch = 0 === lastIndexOfResult;
  if (!isMatch) {
    isMatch = regex.test(seenText[lastIndexOfResult - 1]);
  }
  return isMatch;
};
export const isUnbrokenRun = function isUnbrokenRun(arr, sum, arg2) {
  return !regex.test(arr.slice(sum, arg2));
};
export const isSingleLineRun = function isSingleLineRun(arr, sum, arg2) {
  return !re19.test(arr.slice(sum, arg2));
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
export const isSpaceJustTypedAtCaret = function isSpaceJustTypedAtCaret(text, selectionEnd, c22, selectionEnd2) {
  let sum = selectionEnd2;
  if (selectionEnd2 === selectionEnd + 1) {
    if (c22.length === text.length + 1) {
      if (" " === c22[sum - 1]) {
        let num = 0;
        if (0 < selectionEnd) {
          while (c22[num] === text[num]) {
            num = num + 1;
          }
          return false;
        }
        if (sum < c22.length) {
          while (c22[sum] === text[sum - 1]) {
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
export const findAutoInsertOnSpaceToken = function findAutoInsertOnSpaceToken(c22, selectionEnd, arg2) {
  if (selectionEnd >= arg2.length + 2) {
    if (" " === c22[selectionEnd - 1]) {
      const diff = selectionEnd - 1;
      let tmp3 = diff;
      if (0 < diff) {
        let tmp2 = diff;
        tmp3 = diff;
        if (!regex.test(c22[diff - 1])) {
          const diff1 = tmp2 - 1;
          tmp3 = diff1;
          while (0 < diff1) {
            tmp2 = diff1;
            tmp3 = diff1;
            if (regex.test(c22[diff1 - 1])) {
              break;
            }
          }
        }
      }
      if (c22.startsWith(arg2, tmp3)) {
        if (c22.lastIndexOf(arg2, diff - arg2.length) !== tmp3) {
          return null;
        } else {
          const obj = { tokenStart: tmp3, trigger: c22.slice(tmp3 + arg2.length, diff) };
          return obj;
        }
      } else {
        return null;
      }
    }
  }
  return null;
};