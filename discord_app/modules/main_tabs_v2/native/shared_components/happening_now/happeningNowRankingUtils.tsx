// discord_app/modules/main_tabs_v2/native/shared_components/happening_now/happeningNowRankingUtils.tsx
import upsertRelationship from "upsertRelationship";
import updateVoiceState from "updateVoiceState";
import HAPPENING_NOW_PANELS_CONTAINER_PADDING from "HAPPENING_NOW_PANELS_CONTAINER_PADDING";
import { apply } from "../../../../../../_runtime/00012_apply.js";

let c5;
let closure_6;
let error;
const require = arg1;
({ HAPPENING_NOW_CARD_WIDTH_NORMAL_WITH_MARGIN: c5, HAPPENING_NOW_CARD_WIDTH_SMALL_WITH_MARGIN: closure_6, HAPPENING_NOW_CARD_WIDTH_XSMALL_WITH_MARGIN: error } = HAPPENING_NOW_PANELS_CONTAINER_PADDING);
const result = require("HAPPENING_NOW_PANELS_CONTAINER_PADDING").fileFinishedImporting("modules/main_tabs_v2/native/shared_components/happening_now/happeningNowRankingUtils.tsx");

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
              const found = mapped.filter(callback(1351).isNotNullish);
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
    (arg0) => {
      while (true) {
        let tmp2 = closure_5;
        let num = 1;
        if (tmp !== closure_5) {
          break;
        } else {
          num = 0;
          break;
        }
        return num;
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