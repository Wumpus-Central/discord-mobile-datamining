// === Module 16415: HappeningNowCardUnifiedVC ===

// Module 16415 (HappeningNowCardUnifiedVC)
import c from "c" /* 576 */;
import findActivityWithMostParticipantsDefault from "findActivityWithMostParticipants" /* 16406 */;
import HappeningNowCardActivityDefault from "HappeningNowCardActivity" /* 16416 */;
import HappeningNowCardEmbeddedActivityDefault from "HappeningNowCardEmbeddedActivity" /* 16428 */;
import HappeningNowCardVoiceDefault from "HappeningNowCardVoice" /* 16429 */;
import noop from "module_19" /* 19 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2063 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 5894 */;
import RelationshipStore from "RelationshipStore" /* 4719 */;

require = fn;
const jsx = fn(21).jsx;
fn(558);
const ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function useCallActivityData(arg0) {
  _require = arg0;
  const cResult = require("c").c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [EmbeddedActivitiesStore, ApplicationStreamingStore, RelationshipStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function o() {
      if (null == closure_0) {
        return {};
      } else {
        const allApplicationStreamsForChannel = ApplicationStreamingStore.getAllApplicationStreamsForChannel(closure_0);
        if (allApplicationStreamsForChannel.length > 0) {
          const found = allApplicationStreamsForChannel.find((ownerId) => friend.isFriend(ownerId.ownerId));
          if (null != found) {
            const obj2 = { stream: found };
            return obj2;
          }
        }
        const embeddedActivitiesForChannel = EmbeddedActivitiesStore.getEmbeddedActivitiesForChannel(closure_0);
        const tmp7 = findActivityWithMostParticipantsDefault(embeddedActivitiesForChannel);
        if (null != tmp7) {
          const obj3 = { activity: tmp7 };
          let obj = obj3;
        } else if (tmp9) {
          const obj4 = { stream: allApplicationStreamsForChannel[0] };
          obj = obj4;
        } else {
          obj = {};
        }
        return obj;
      }
    };
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp9 = items1;
    let tmp8 = fn;
  } else {
    tmp8 = cResult[2];
    tmp9 = cResult[3];
  }
  let obj = require("c");
  return require("useStateFromStores").useStateFromStoresObject(first, tmp8, tmp9);
}) : (function useCallActivityData(arg0) {
  _require = arg0;
  const items = [EmbeddedActivitiesStore, ApplicationStreamingStore, RelationshipStore];
  const items1 = [arg0];
  return require("useStateFromStores").useStateFromStoresObject(items, () => {
    if (null == closure_0) {
      return {};
    } else {
      const allApplicationStreamsForChannel = ApplicationStreamingStore.getAllApplicationStreamsForChannel(closure_0);
      if (allApplicationStreamsForChannel.length > 0) {
        const found = allApplicationStreamsForChannel.find((ownerId) => friend.isFriend(ownerId.ownerId));
        if (null != found) {
          const obj2 = { stream: found };
          return obj2;
        }
      }
      const embeddedActivitiesForChannel = EmbeddedActivitiesStore.getEmbeddedActivitiesForChannel(closure_0);
      const tmp7 = findActivityWithMostParticipantsDefault(embeddedActivitiesForChannel);
      if (null != tmp7) {
        const obj3 = { activity: tmp7 };
        let obj = obj3;
      } else if (tmp9) {
        const obj4 = { stream: allApplicationStreamsForChannel[0] };
        obj = obj4;
      } else {
        obj = {};
      }
      return obj;
    }
  }, items1);
});
let closure_7 = tmp4;
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowCardUnifiedVC.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function HappeningNowCardUnifiedVC(arg0) {
  let tmp = dependencyMap;
  const cResult = c.c(21);
  ({ guildId, index, voiceState, fullwidth, userId, cardKey, panelVariant } = arg0);
  ({ stream, activity } = closure_7(voiceState.channelId));
  if (null != stream) {
    if (cResult[0] === fullwidth) {
      if (cResult[1] === guildId) {
        if (cResult[2] === index) {
          if (cResult[3] === tmp3) {
          }
        }
      }
    }
    const obj2 = { index, userId: stream.ownerId, guildId, stream, fullwidth, panelVariant: tmp3 };
    tmp = jsx(HappeningNowCardActivityDefault, { index, userId: stream.ownerId, guildId, stream, fullwidth, panelVariant: tmp3 });
    cResult[0] = fullwidth;
    cResult[1] = guildId;
    cResult[2] = index;
    cResult[3] = tmp3;
    cResult[4] = stream;
    cResult[5] = tmp;
  } else if (null != activity) {
    if (cResult[6] === activity) {
      if (cResult[7] === cardKey) {
        if (cResult[8] === fullwidth) {
          if (cResult[9] === guildId) {
            if (cResult[10] === index) {
              if (cResult[11] === tmp3) {
                if (cResult[12] === userId) {
                }
              }
            }
          }
        }
      }
    }
    const obj3 = { index, voiceState, fullwidth, guildId, activity, userId, cardKey, panelVariant: tmp3 };
    const tmp12 = jsx(HappeningNowCardEmbeddedActivityDefault, { index, voiceState, fullwidth, guildId, activity, userId, cardKey, panelVariant: tmp3 });
    cResult[6] = activity;
    cResult[7] = cardKey;
    cResult[8] = fullwidth;
    cResult[9] = guildId;
    cResult[10] = index;
    cResult[11] = tmp3;
    cResult[12] = userId;
    cResult[13] = voiceState;
    cResult[14] = tmp12;
  } else {
    if (cResult[15] === fullwidth) {
      if (cResult[16] === guildId) {
        if (cResult[17] === index) {
          if (cResult[18] === tmp3) {
            if (cResult[19] === voiceState) {
              let tmp5 = cResult[20];
            }
            return tmp5;
          }
        }
      }
    }
    const obj4 = { index, voiceState, fullwidth, guildId, panelVariant: tmp3 };
    const tmp8 = jsx(HappeningNowCardVoiceDefault, { index, voiceState, fullwidth, guildId, panelVariant: tmp3 });
    cResult[15] = fullwidth;
    cResult[16] = guildId;
    cResult[17] = index;
    cResult[18] = tmp3;
    cResult[19] = voiceState;
    cResult[20] = tmp8;
    tmp5 = tmp8;
  }
  const tmp4 = closure_7(voiceState.channelId);
}) : (function HappeningNowCardUnifiedVC(arg0) {
  ({ guildId, index, voiceState, fullwidth, panelVariant } = arg0);
  ({ userId, cardKey } = arg0);
  if (panelVariant === undefined) {
    panelVariant = false;
  }
  ({ stream, activity } = closure_7(voiceState.channelId));
  if (null != stream) {
    const obj2 = { index, userId: stream.ownerId, guildId, stream, fullwidth, panelVariant };
    let tmp5 = jsx(HappeningNowCardActivityDefault, { index, userId: stream.ownerId, guildId, stream, fullwidth, panelVariant });
  } else if (null != activity) {
    const obj3 = { index, voiceState, fullwidth, guildId, activity, userId, cardKey, panelVariant };
    tmp5 = jsx(HappeningNowCardEmbeddedActivityDefault, { index, voiceState, fullwidth, guildId, activity, userId, cardKey, panelVariant });
  } else {
    const obj = { index, voiceState, fullwidth, guildId, panelVariant };
    tmp5 = jsx(HappeningNowCardVoiceDefault, { index, voiceState, fullwidth, guildId, panelVariant });
  }
  return tmp5;
});
export const useCallActivityData = tmp4;