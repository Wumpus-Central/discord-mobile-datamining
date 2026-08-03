// === Module 9737: AutocompleteFormDivider ===

// Module 9737 (AutocompleteFormDivider)
import "noop";
import { isGuildSelectableChannelType as closure_3 } from "createChannelRecord";
import comparator from "comparator";
import upsertRelationship from "upsertRelationship";
import mergeGuildAvatar from "mergeGuildAvatar";
import ME from "ME";
import AUTOCOMPLETE_ROW_HEIGHT from "AUTOCOMPLETE_ROW_HEIGHT";
import regExp from "regExp";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

let c10;
let c9;
let closure_12;
let closure_14;
let error;
let map1;
let metroImportAll;
let unpackModuleId;
const require = arg1;
function AutocompleteFormDivider() {
  const tmp = createCacheKey();
  return jsx(importDefault(7318), { style: createCacheKey().itemDivider });
}
({ AutoCompleteResultTypes: error, WHITESPACE_RE: metroImportAll } = ME);
({ AUTOCOMPLETE_EMOJI_ROW_HEIGHT: c9, AUTOCOMPLETE_ROW_HEIGHT: c10 } = AUTOCOMPLETE_ROW_HEIGHT);
({ CHANNEL_SENTINEL: unpackModuleId, EMOJI_SENTINEL: closure_12, GAME_MENTION_SENTINEL: map1, MENTION_SENTINEL: closure_14 } = regExp);
const hairlineWidth = require("get ActivityIndicator").StyleSheet.hairlineWidth;
createCacheKey = { itemDivider: null };
createCacheKey = { marginLeft: 16, backgroundColor: require("Themes").colors.BORDER_SUBTLE };
createCacheKey[0] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
let result = require("createChannelRecord").fileFinishedImporting("modules/autocompleter/native/AutocompleteUtils.tsx");

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
      let combined = "" + tmp34 + user.tag;
    } else {
      const _HermesInternal8 = HermesInternal;
      combined = "" + tmp34 + importDefault(4094).getUserTag(user);
      const tmp32Result = importDefault(4094);
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
      const obj3 = require(4446) /* computeChannelName */;
      const _HermesInternal6 = HermesInternal;
      return "#\"" + obj3.escapeChannelName(require(4446) /* computeChannelName */.computeChannelName(type.channel, mergeGuildAvatar, upsertRelationship)) + "\"";
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
            name = require(4446) /* computeChannelName */.computeChannelName(type.channel, mergeGuildAvatar, upsertRelationship);
            const obj2 = require(4446) /* computeChannelName */;
          }
          const _HermesInternal5 = HermesInternal;
          return "" + closure_11 + name;
        }
      }
      const _HermesInternal4 = HermesInternal;
      return "" + closure_11 + require(4446) /* computeChannelName */.computeChannelName(type.channel, mergeGuildAvatar, upsertRelationship);
    }
  } else if (tmp.GAME_MENTION === type) {
    const _HermesInternal3 = HermesInternal;
    return "" + closure_13 + type.game.name;
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
    combined = "" + tmp3 + importDefault(4094).getUserTag(user);
    const tmpResult = importDefault(4094);
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
    isMatch = regex.test(c22[index - 1]);
  }
  return isMatch;
};
export const isUnbrokenRun = function isUnbrokenRun(arr, arg1, arg2) {
  return !regex.test(arr.slice(arg1, arg2));
};