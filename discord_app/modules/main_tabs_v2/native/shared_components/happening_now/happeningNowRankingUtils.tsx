// discord_app/modules/main_tabs_v2/native/shared_components/happening_now/happeningNowRankingUtils.tsx
import _mod12 from "../../../../../../_runtime/metro/00012__.js";
import GlobalUtils from "../../../../../utils/GlobalUtils.tsx";
import RelationshipStore from "../../../../../stores/RelationshipStore.tsx";
import VoiceStateStore from "../../../../../stores/VoiceStateStore.tsx";

const _modDef12 = _mod12;

require = fn;
const HappeningNowConstants = fn(15294);
({
  HAPPENING_NOW_CARD_WIDTH_NORMAL_WITH_MARGIN: hasOwnProperty,
  HAPPENING_NOW_CARD_WIDTH_SMALL_WITH_MARGIN: metroRequire,
  HAPPENING_NOW_CARD_WIDTH_XSMALL_WITH_MARGIN: closure_7,
} = HappeningNowConstants);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/main_tabs_v2/native/shared_components/happening_now/happeningNowRankingUtils.tsx",
);

export const cardSize = function cardSize(kind) {
  switch (kind.kind) {
    case "placeholder":
      return hasOwnProperty;
    case "voice":
      return hasOwnProperty;
    case "activity":
      return hasOwnProperty;
    case "guild-event":
      return hasOwnProperty;
    case "active-channel":
      return hasOwnProperty;
    case "live-guild-stage":
      return hasOwnProperty;
    case "embedded-activity":
      return hasOwnProperty;
    case "unified-vc":
      return hasOwnProperty;
    case "user":
      return React5;
    case "invite":
      return timestampProducer;
    case "create-channel":
      return timestampProducer;
    case "customize-guild":
      return timestampProducer;
    case "student-hub-add-channel":
      return timestampProducer;
    default:
      GlobalUtils.assertNever(kind);
  }
};
export const HappeningNowWeights = {
  Stage: 7,
  Voice: 6,
  Stream: 5,
  Game: 4,
  Listening: 3,
  CustomStatus: 3,
  User: 2,
  Base: 1,
};
export const HAPPENING_NOW_OFFLINE_PENALTY = -1000;
export const filterHappeningNowCards = function filterHappeningNowCards(arr) {
  return arr.filter((voiceState) => {
    let flag = false;
    if ("voiceState" in voiceState) {
      flag = false;
      if (null != voiceState.voiceState) {
        const channelId = voiceState.voiceState.channelId;
        flag = false;
        if (null != channelId) {
          const _Object = Object;
          const values = Object.values(VoiceStateStore.getVoiceStatesForChannel(channelId));
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
            const voiceStatesForChannel = VoiceStateStore.getVoiceStatesForChannel(channelId2);
            let someResult = null != voiceStatesForChannel;
            if (someResult) {
              const mapped = _modDef12(voiceStatesForChannel).map((userId) => userId.userId);
              const found = mapped.filter(GlobalUtils.isNotNullish);
              someResult = found.some((item) => blockedOrIgnored.isBlockedOrIgnored(item));
              const arr2 = _modDef12(voiceStatesForChannel);
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
        case "placeholder":
          let tmp = closure_1_5;
          let num = 1;
          if (tmp === closure_1_5) {
            num = 0;
          }
          return num;
        case "voice":
          tmp = closure_1_5;
          num = 1;
          if (tmp === closure_1_5) {
            num = 0;
          }
          return num;
        case "activity":
          tmp = closure_1_5;
          num = 1;
          if (tmp === closure_1_5) {
            num = 0;
          }
          return num;
        case "guild-event":
          tmp = closure_1_5;
          num = 1;
          if (tmp === closure_1_5) {
            num = 0;
          }
          return num;
        case "active-channel":
          tmp = closure_1_5;
          num = 1;
          if (tmp === closure_1_5) {
            num = 0;
          }
          return num;
        case "live-guild-stage":
          tmp = closure_1_5;
          num = 1;
          if (tmp === closure_1_5) {
            num = 0;
          }
          return num;
        case "embedded-activity":
          tmp = closure_1_5;
          num = 1;
          if (tmp === closure_1_5) {
            num = 0;
          }
          return num;
        case "unified-vc":
          tmp = closure_1_5;
          num = 1;
          if (tmp === closure_1_5) {
            num = 0;
          }
          return num;
        case "user":
          tmp = closure_1_7;
          break;
        case "invite":
          tmp = closure_1_6;
          break;
        case "create-channel":
          tmp = closure_1_6;
          break;
        case "customize-guild":
          tmp = closure_1_6;
          break;
        case "student-hub-add-channel":
          tmp = closure_1_6;
          break;
        default:
          GlobalUtils.assertNever(kind);
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
    },
  ];
  return _mod12.orderBy(result, items, ["asc", "asc"]);
};
