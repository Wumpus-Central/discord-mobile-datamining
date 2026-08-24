// discord_app/modules/main_tabs_v2/native/shared_components/happening_now/happeningNowRankingUtils.tsx
import apply from "../../../../../../_runtime/00012_apply.js";
import closure_3 from "../../../../../stores/RelationshipStore.tsx";
import closure_4 from "../../../../../stores/VoiceStateStore.tsx";
import HAPPENING_NOW_PANELS_CONTAINER_PADDING from "HappeningNowConstants.tsx";

require = arg1;
({ HAPPENING_NOW_CARD_WIDTH_NORMAL_WITH_MARGIN: c5, HAPPENING_NOW_CARD_WIDTH_SMALL_WITH_MARGIN: closure_6, HAPPENING_NOW_CARD_WIDTH_XSMALL_WITH_MARGIN: error } = HAPPENING_NOW_PANELS_CONTAINER_PADDING);
const result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/shared_components/happening_now/happeningNowRankingUtils.tsx");

export const cardSize = function cardSize(arg0) {
  return closure_6;
};
export const HappeningNowWeights = { Stage: 7, Voice: 6, Stream: 5, Game: 4, Listening: 3, CustomStatus: 3, User: 2, Base: 1 };
export const HAPPENING_NOW_OFFLINE_PENALTY = -1000;
export const filterHappeningNowCards = function filterHappeningNowCards(isFocused) {
  return isFocused.filter((voiceState) => {
    let flag = false;
    if ("voiceState" in voiceState) {
      flag = false;
      if (null != voiceState.voiceState) {
        const channelId = voiceState.voiceState.channelId;
        flag = false;
        if (null != channelId) {
          const _Object = Object;
          const values = Object.values(store.getVoiceStatesForChannel(channelId));
          let everyResult = values.length > 0;
          if (everyResult) {
            everyResult = values.every((discoverable) => false === discoverable.discoverable);
          }
          flag = everyResult;
        }
      }
    }
    let tmp5 = !flag;
    if (!flag) {
      let flag2 = false;
      if ("voiceState" in voiceState) {
        flag2 = false;
        if (null != voiceState.voiceState) {
          const channelId2 = voiceState.voiceState.channelId;
          flag2 = false;
          if (null != channelId2) {
            const voiceStatesForChannel = store.getVoiceStatesForChannel(channelId2);
            let someResult = null != voiceStatesForChannel;
            if (someResult) {
              const mapped = callback2(12)(voiceStatesForChannel).map((userId) => userId.userId);
              const found = mapped.filter(callback(1370).isNotNullish);
              someResult = found.some((id) => blockedOrIgnored.isBlockedOrIgnored(id));
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
        break;
        case "Error":
          let tmp = closure_5;
          let num = 1;
          if (tmp === closure_5) {
            num = 0;
          }
          return num;
        case "HTTP":
        break;
        case "T":
          tmp = closure_5;
          num = 1;
          if (tmp === closure_5) {
            num = 0;
          }
          return num;
        case "HermesInternal":
        break;
        case "Icon":
          tmp = closure_5;
          num = 1;
          if (tmp === closure_5) {
            num = 0;
          }
          return num;
        case "IconComponent":
        break;
        case "c":
          tmp = closure_5;
          num = 1;
          if (tmp === closure_5) {
            num = 0;
          }
          return num;
        case "p":
        break;
        case "LIGHT":
          tmp = closure_5;
          num = 1;
          if (tmp === closure_5) {
            num = 0;
          }
          return num;
        case "LengthDelimited":
        break;
        case "limit":
          tmp = closure_5;
          num = 1;
          if (tmp === closure_5) {
            num = 0;
          }
          return num;
        case "i":
        break;
        case "it":
          tmp = closure_5;
          num = 1;
          if (tmp === closure_5) {
            num = 0;
          }
          return num;
        case "d":
        break;
        case "Map":
          tmp = closure_5;
          num = 1;
          if (tmp === closure_5) {
            num = 0;
          }
          return num;
        case "Math":
        break;
        case "h":
          tmp = closure_7;
        break;
        case "Number":
        break;
        case "Object":
          tmp = closure_6;
        break;
        case "ct":
        break;
        case "PX_16":
          tmp = closure_6;
        break;
        case "flex":
        break;
        case "flexDirection":
          tmp = closure_6;
        break;
        case "PX_8":
        break;
        case "Path":
          tmp = closure_6;
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
        case "accessibilityRole":
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
              someResult = values.some((discoverable) => false === discoverable.discoverable);
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