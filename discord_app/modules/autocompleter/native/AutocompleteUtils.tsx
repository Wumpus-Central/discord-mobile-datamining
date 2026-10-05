// discord_app/modules/autocompleter/native/AutocompleteUtils.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import ChannelRecord from "../../../records/ChannelRecord.tsx";
import UserUtilsDefault from "../../../utils/UserUtils.tsx";
import useChannelName from "../../channel/useChannelName.tsx";
import AutocompleteUtilsDefault from "../../../utils/AutocompleteUtils.tsx";
import TimestampUtils from "../../markup/TimestampUtils.tsx";
import FormDividerDefault from "../../../design/void/Form/native/FormDivider.tsx";
import react from "../../../../_runtime/00019_react.js";
import GuildChannelStore from "../../../stores/GuildChannelStore.tsx";
import RelationshipStore from "../../../stores/RelationshipStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";
import Constants from "../../../Constants.tsx";
import ApplicationCommandsConstants from "../../application_commands/native/ApplicationCommandsConstants.tsx";
import ChannelAutocompleteConstants from "../../channel_autocomplete/ChannelAutocompleteConstants.tsx";
import createStyles from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let c10;
let c9;
let closure_12;
let closure_14;
let map1;
let metroImportAll;
let metroImportDefault;
let obj2;
let unpackModuleId;
const StyleSheet = react_native.StyleSheet;
let closure_3 = ChannelRecord.isGuildSelectableChannelType;
({ AutoCompleteResultTypes: metroImportDefault, WHITESPACE_RE: metroImportAll } = Constants);
({ AUTOCOMPLETE_EMOJI_ROW_HEIGHT: c9, AUTOCOMPLETE_ROW_HEIGHT: c10 } = ApplicationCommandsConstants);
({
  CHANNEL_SENTINEL: unpackModuleId,
  EMOJI_SENTINEL: closure_12,
  GAME_MENTION_SENTINEL: map1,
  MENTION_SENTINEL: closure_14,
} = ChannelAutocompleteConstants);
const jsx = Fragment.jsx;
const hairlineWidth = StyleSheet.hairlineWidth;
let obj = { itemDivider: obj2 };
obj2 = { marginLeft: 16, backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
let closure_17 = createStyles.createStyles(obj);
let closure_18 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let tmp4;
      const obj = react2;
      const cResult = obj.c(2);
      const tmp3 = closure_17();
      if (cResult[0] !== tmp3.itemDivider) {
        const tmp7 = jsx(FormDividerDefault, { style: tmp3.itemDivider });
        cResult[0] = tmp3.itemDivider;
        cResult[1] = tmp7;
        tmp4 = tmp7;
      } else {
        tmp4 = cResult[1];
      }
      return tmp4;
    }
  : () => jsx(FormDividerDefault, { style: closure_17().itemDivider });
const re19 = /[\r\n]/;
function getMentionTextWithUser(messageChannel, user) {
  let combined;
  const obj = AutocompleteUtilsDefault;
  if (obj.hasSameRoleAsUsername(messageChannel, user)) {
    const _HermesInternal2 = HermesInternal;
    combined = "" + authStore2 + user.tag;
  } else {
    const _HermesInternal = HermesInternal;
    const tmpResult = UserUtilsDefault;
    combined = "" + authStore2 + tmpResult.getUserTag(user);
  }
  return combined;
}
function findWordStart(arg0, arg1) {
  let tmp = arg1;
  if (arg1 > 0) {
    let tmp4 = arg1;
    tmp = arg1;
    if (!metroImportAll.test(arg0[arg1 - 1])) {
      const diff = tmp4 - 1;
      tmp = diff;
      while (diff > 0) {
        tmp4 = diff;
        tmp = diff;
        if (metroImportAll.test(arg0[diff - 1])) {
          break;
        }
      }
    }
  }
  return tmp;
}
let result = size.fileFinishedImporting("modules/autocompleter/native/AutocompleteUtils.tsx");

export const getItemLayout = function getItemLayout(arg0, index) {
  let result;
  let type;
  if (arg0 != null) {
    if (arg0[index] != null) {
      type = tmp2.type;
    }
  }
  const tmp3 = type === metroImportDefault.EMOJI ? React4 : authStore;
  const obj = { length: tmp3, offset: result + Math.max(0, (index - 1) * hairlineWidth), index };
  result = index * tmp3;
  return obj;
};
export const getAutocompleteResultText = function getAutocompleteResultText(type, channel, set) {
  if (null != set) {
    if (!set.has(type.type)) {
      return "";
    }
  }
  type = type.type;
  if (metroImportDefault.USER === type) {
    let combined;
    const user = type.user;
    const obj5 = AutocompleteUtilsDefault;
    if (obj5.hasSameRoleAsUsername(channel, user)) {
      const _HermesInternal9 = HermesInternal;
      combined = "" + authStore2 + user.tag;
    } else {
      const _HermesInternal8 = HermesInternal;
      const tmp35Result = UserUtilsDefault;
      combined = "" + authStore2 + tmp35Result.getUserTag(user);
    }
    return combined;
  } else if (metroImportDefault.GLOBAL === type) {
    return type.text;
  } else if (metroImportDefault.ROLE === type) {
    const _HermesInternal7 = HermesInternal;
    return "" + authStore2 + type.name;
  } else if (metroImportDefault.CHANNEL === type) {
    channel = type.channel;
    if (channel.isThread()) {
      const escapeChannelName = useChannelName.escapeChannelName;
      useChannelName;
      const _HermesInternal6 = HermesInternal;
      const obj4 = useChannelName;
      return '#"' + escapeChannelName(obj4.computeChannelName(type.channel, UserStore, RelationshipStore)) + '"';
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
            const obj3 = useChannelName;
            name = obj3.computeChannelName(type.channel, UserStore, RelationshipStore);
          }
          const _HermesInternal5 = HermesInternal;
          return "" + unpackModuleId + name;
        }
      }
      const _HermesInternal4 = HermesInternal;
      const obj2 = useChannelName;
      return "" + unpackModuleId + obj2.computeChannelName(type.channel, UserStore, RelationshipStore);
    }
  } else if (metroImportDefault.GAME_MENTION === type) {
    const _HermesInternal3 = HermesInternal;
    return "" + map1 + type.game.name;
  } else if (metroImportDefault.TIMESTAMP_MENTION === type) {
    const obj = TimestampUtils;
    return obj.unparseTimestamp(type.mention.timestamp, type.mention.format);
  } else if (metroImportDefault.EMOJI === type) {
    const _HermesInternal2 = HermesInternal;
    return "" + closure_12 + type.name + ":";
  } else {
    if (metroImportDefault.EMOJI_PREMIUM_UPSELL !== type) {
      if (metroImportDefault.SLASH !== type) {
        if (metroImportDefault.CHOICE === type) {
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
export { getMentionTextWithUser };
export const getItemSeparator = function getItemSeparator() {
  return <closure_18 />;
};
export const getPrefix = function getPrefix(substr1) {
  return substr1[0];
};
export const getQuery = function getQuery(arr) {
  const str = arr.slice(1);
  return str.toLowerCase();
};
export const isWhitespaceSeparatingBoundary = function isWhitespaceSeparatingBoundary(text, lastIndexOfResult) {
  const isMatch = 0 === lastIndexOfResult || metroImportAll.test(text[lastIndexOfResult - 1]);
  return isMatch;
};
export const isUnbrokenRun = function isUnbrokenRun(arr, sum, selectionEnd) {
  return !metroImportAll.test(arr.slice(sum, selectionEnd));
};
export const isSingleLineRun = function isSingleLineRun(arr, sum, selectionEnd) {
  return !re19.test(arr.slice(sum, selectionEnd));
};
export { findWordStart };
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
export const findAutoInsertOnSpaceToken = function findAutoInsertOnSpaceToken(c22, selectionEnd, authStore4) {
  if (selectionEnd >= authStore4.length + 2) {
    if (" " === c22[selectionEnd - 1]) {
      const diff = selectionEnd - 1;
      let tmp3 = diff;
      if (0 < diff) {
        let tmp2 = diff;
        tmp3 = diff;
        if (!metroImportAll.test(c22[diff - 1])) {
          const diff1 = tmp2 - 1;
          tmp3 = diff1;
          while (0 < diff1) {
            tmp2 = diff1;
            tmp3 = diff1;
            if (metroImportAll.test(c22[diff1 - 1])) {
              break;
            }
          }
        }
      }
      if (c22.startsWith(authStore4, tmp3)) {
        if (c22.lastIndexOf(authStore4, diff - authStore4.length) !== tmp3) {
          return null;
        } else {
          const obj = { tokenStart: tmp3, trigger: c22.slice(tmp3 + authStore4.length, diff) };
          return obj;
        }
      } else {
        return null;
      }
    }
  }
  return null;
};
