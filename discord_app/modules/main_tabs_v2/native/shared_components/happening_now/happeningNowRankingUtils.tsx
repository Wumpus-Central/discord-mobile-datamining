// === Module 15330: cardSize ===

// Module 15330 (cardSize)
import apply from "apply" /* 12 */;
import isDiscordFrontendDevelopment from "isDiscordFrontendDevelopment" /* 1370 */;
import markAllUserIdListsStale from "markAllUserIdListsStale" /* 4030 */;
import updateVoiceState from "updateVoiceState" /* 4542 */;
import HAPPENING_NOW_PANELS_CONTAINER_PADDING from "HAPPENING_NOW_PANELS_CONTAINER_PADDING" /* 14640 */;

require = fn;
({ HAPPENING_NOW_CARD_WIDTH_NORMAL_WITH_MARGIN: c5, HAPPENING_NOW_CARD_WIDTH_SMALL_WITH_MARGIN: closure_6, HAPPENING_NOW_CARD_WIDTH_XSMALL_WITH_MARGIN: error } = HAPPENING_NOW_PANELS_CONTAINER_PADDING);
const result = require("obj132").fileFinishedImporting("modules/main_tabs_v2/native/shared_components/happening_now/happeningNowRankingUtils.tsx");

export const cardSize = function cardSize(kind) {
  switch (kind.kind) {
    case "TypeError":
    break;
    case "Error":
    break;
    case "HTTP":
    break;
    case "T":
    break;
    case "HermesInternal":
    break;
    case "Icon":
    break;
    case "IconComponent":
    break;
    case "c":
    break;
    case "p":
    break;
    case "LIGHT":
    break;
    case "LengthDelimited":
    break;
    case "limit":
      return closure_5;
    case "i":
    break;
    case "it":
      return closure_5;
    case "d":
    break;
    case "Map":
      return closure_5;
    case "Math":
    break;
    case "h":
      return closure_5;
    case "Number":
    break;
    case "Object":
      return closure_5;
    case "ct":
    break;
    case "PX_16":
      return closure_5;
    case "flex":
    break;
    case "flexDirection":
      return closure_5;
    case "PX_8":
    break;
    case "Path":
      return closure_5;
    case "Promise":
    break;
    case "s":
      return closure_7;
    case "Reflect":
    break;
    case "Set":
      return closure_6;
    case "format":
    break;
    case "formatToPlainString":
      return closure_6;
    case "String":
    break;
    case "Symbol":
      return closure_6;
    case "Text":
    break;
    case "x":
      return closure_6;
    case "View":
    break;
    case "w":
    break;
    case "WireType":
    break;
    case "__closure":
    break;
    case "__d":
    break;
    case "__esModule":
    break;
    case "__initData":
    break;
    case "filter":
    break;
    case "__packager_asset":
    break;
    case "k":
    break;
    case "set":
    break;
    case "__workletHash":
    break;
    case "_desired":
    break;
    case "_distance":
    break;
    case "st":
    break;
    case "accessibilityLabel":
    break;
    case "accessibilityRole":
    break;
    case "accessible":
    break;
    case "padding":
    break;
    case "paddingHorizontal":
    break;
    case "add":
    break;
    case "alignItems":
    break;
    case "ao":
    break;
    case "applicationId":
    break;
    case "ti":
    break;
    case "apply":
    break;
    case "backgroundColor":
    break;
    case "round":
    break;
    case "bm":
    break;
    case "body":
    break;
    case "borderRadius":
    break;
    case "bottom":
    break;
    default:
      isDiscordFrontendDevelopment.assertNever(kind);
  }
};
export const HappeningNowWeights = { Stage: 7, Voice: 6, Stream: 5, Game: 4, Listening: 3, CustomStatus: 3, User: 2, Base: 1 };
export const HAPPENING_NOW_OFFLINE_PENALTY = -1000;
export const filterHappeningNowCards = function filterHappeningNowCards(isFocused) {
  return isFocused.filter((item, index) => {
    let flag = false;
    if ("voiceState" in item) {
      flag = false;
      if (null != item.voiceState) {
        const channelId = item.voiceState.channelId;
        flag = false;
        if (null != channelId) {
          const _Object = Object;
          const values = Object.values(store.getVoiceStatesForChannel(channelId));
          let everyResult = values.length > 0;
          if (everyResult) {
            everyResult = values.every((item, index) => false === item.discoverable);
          }
          flag = everyResult;
        }
      }
    }
    let tmp5 = !flag;
    if (!flag) {
      let flag2 = false;
      if ("voiceState" in item) {
        flag2 = false;
        if (null != item.voiceState) {
          const channelId2 = item.voiceState.channelId;
          flag2 = false;
          if (null != channelId2) {
            const voiceStatesForChannel = store.getVoiceStatesForChannel(channelId2);
            let someResult = null != voiceStatesForChannel;
            if (someResult) {
              const mapped = callback2(12)(voiceStatesForChannel).map((item, index) => item.userId);
              const found = mapped.filter(callback(1370).isNotNullish);
              someResult = found.some((item, index) => blockedOrIgnored.isBlockedOrIgnored(item));
              const arr2 = callback2(12)(voiceStatesForChannel);
            }
            flag2 = someResult;
          }
        }
      }
      tmp5 = !flag2;
    }
    return tmp5;
  });
};
export const sortHappeningNowCards = function sortHappeningNowCards(result) {
  const items = [
    (kind) => {
      switch (kind.kind) {
        case "TypeError":
          let tmp = closure_5;
          let num = 1;
          if (tmp === closure_5) {
            num = 0;
          }
          return num;
        case "Error":
        break;
        case "HTTP":
          tmp = closure_5;
          num = 1;
          if (tmp === closure_5) {
            num = 0;
          }
          return num;
        case "T":
        break;
        case "HermesInternal":
          tmp = closure_5;
          num = 1;
          if (tmp === closure_5) {
            num = 0;
          }
          return num;
        case "Icon":
        break;
        case "IconComponent":
          tmp = closure_5;
          num = 1;
          if (tmp === closure_5) {
            num = 0;
          }
          return num;
        case "c":
        break;
        case "p":
          tmp = closure_5;
          num = 1;
          if (tmp === closure_5) {
            num = 0;
          }
          return num;
        case "LIGHT":
        break;
        case "LengthDelimited":
          tmp = closure_5;
          num = 1;
          if (tmp === closure_5) {
            num = 0;
          }
          return num;
        case "limit":
        break;
        case "i":
          tmp = closure_5;
          num = 1;
          if (tmp === closure_5) {
            num = 0;
          }
          return num;
        case "it":
        break;
        case "d":
          tmp = closure_5;
          num = 1;
          if (tmp === closure_5) {
            num = 0;
          }
          return num;
        case "Map":
        break;
        case "Math":
          tmp = closure_7;
        break;
        case "h":
        break;
        case "Number":
          tmp = closure_6;
        break;
        case "Object":
        break;
        case "ct":
          tmp = closure_6;
        break;
        case "PX_16":
        break;
        case "flex":
          tmp = closure_6;
        break;
        case "flexDirection":
        break;
        case "PX_8":
          tmp = closure_6;
        break;
        case "Path":
        break;
        case "Promise":
        break;
        case "s":
        break;
        case "Reflect":
        break;
        case "Set":
        break;
        case "format":
        break;
        case "formatToPlainString":
        break;
        case "String":
        break;
        case "Symbol":
        break;
        case "Text":
        break;
        case "x":
        break;
        case "View":
        break;
        case "w":
        break;
        case "WireType":
        break;
        case "__closure":
        break;
        case "__d":
        break;
        case "__esModule":
        break;
        case "__initData":
        break;
        case "filter":
        break;
        case "__packager_asset":
        break;
        case "k":
        break;
        case "set":
        break;
        case "__workletHash":
        break;
        case "_desired":
        break;
        case "_distance":
        break;
        case "st":
        break;
        case "accessibilityLabel":
        break;
        case "accessibilityRole":
        break;
        case "accessible":
        break;
        case "padding":
        break;
        case "paddingHorizontal":
        break;
        case "add":
        break;
        case "alignItems":
        break;
        case "ao":
        break;
        case "applicationId":
        break;
        case "ti":
        break;
        case "apply":
        break;
        case "backgroundColor":
        break;
        case "round":
        break;
        case "bm":
        break;
        case "body":
        break;
        case "borderRadius":
        break;
        case "bottom":
        break;
        case "call":
        break;
        case "channel":
        break;
        case "channelId":
        break;
        case "channel_id":
        break;
        case "id":
        break;
        case "children":
        break;
        case "cix":
        break;
        case "ix":
        break;
        case "unicodeVersion":
        break;
        case "code":
        break;
        case "color":
        break;
        case "colors":
        break;
        case "concat":
        break;
        case "constructor":
        break;
        case "container":
        break;
        default:
          callback(table[3]).assertNever(kind);
          const obj = callback(table[3]);
      }
    },
    (voiceState) => {
      let flag = false;
      if ("voiceState" in voiceState) {
        flag = false;
        if (null != voiceState.voiceState) {
          voiceState = voiceState.voiceState;
          flag = true;
          if (false !== voiceState.discoverable) {
            const channelId = voiceState.channelId;
            let someResult = null != channelId;
            if (someResult) {
              const _Object = Object;
              const values = Object.values(voiceStatesForChannel.getVoiceStatesForChannel(channelId));
              someResult = values.some((item, index) => false === item.discoverable);
            }
            flag = someResult;
          }
        }
      }
      return flag;
    }
  ];
  return apply.orderBy(result, items, ["asc", "asc"]);
};