// === Module 15997: HappeningNowCardUnifiedVC ===

// Module 15997 (HappeningNowCardUnifiedVC)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import findActivityWithMostParticipantsDefault from "findActivityWithMostParticipants" /* 15988 */;
import HappeningNowCardActivityDefault from "HappeningNowCardActivity" /* 15998 */;
import HappeningNowCardEmbeddedActivityDefault from "HappeningNowCardEmbeddedActivity" /* 16010 */;
import HappeningNowCardVoiceDefault from "HappeningNowCardVoice" /* 16011 */;
import react from "react" /* 19 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2050 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 4912 */;
import RelationshipStore from "RelationshipStore" /* 4519 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const jsx = Fragment.jsx;
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let activity;
  let cardKey;
  let fullwidth;
  let guildId;
  let index;
  let panelVariant;
  let stream;
  let tmp5;
  let userId;
  let voiceState;
  const obj = react2;
  const cResult = obj.c(21);
  ({ guildId, index, voiceState, fullwidth, userId, cardKey, panelVariant } = arg0);
  ({ stream, activity } = closure_7(voiceState.channelId));
  closure_7(voiceState.channelId);
  if (null != stream) {
    if (cResult[0] === fullwidth) {
      if (cResult[1] === guildId) {
        if (cResult[2] === index) {
          if (cResult[3] === (undefined !== panelVariant && panelVariant)) {
            let tmp13;
            if (cResult[4] === stream) {
              tmp13 = cResult[5];
            }
            tmp5 = tmp13;
          }
        }
      }
    }
    const tmp16 = jsx(HappeningNowCardActivityDefault, { index, userId: stream.ownerId, guildId, stream, fullwidth, panelVariant: undefined !== panelVariant && panelVariant });
    cResult[0] = fullwidth;
    cResult[1] = guildId;
    cResult[2] = index;
    cResult[3] = undefined !== panelVariant && panelVariant;
    cResult[4] = stream;
    cResult[5] = tmp16;
    tmp13 = tmp16;
  } else if (null != activity) {
    if (cResult[6] === activity) {
      if (cResult[7] === cardKey) {
        if (cResult[8] === fullwidth) {
          if (cResult[9] === guildId) {
            if (cResult[10] === index) {
              if (cResult[11] === (undefined !== panelVariant && panelVariant)) {
                if (cResult[12] === userId) {
                  let tmp9;
                  if (cResult[13] === voiceState) {
                    tmp9 = cResult[14];
                  }
                  tmp5 = tmp9;
                }
              }
            }
          }
        }
      }
    }
    const tmp12 = jsx(HappeningNowCardEmbeddedActivityDefault, { index, voiceState, fullwidth, guildId, activity, userId, cardKey, panelVariant: undefined !== panelVariant && panelVariant });
    cResult[6] = activity;
    cResult[7] = cardKey;
    cResult[8] = fullwidth;
    cResult[9] = guildId;
    cResult[10] = index;
    cResult[11] = undefined !== panelVariant && panelVariant;
    cResult[12] = userId;
    cResult[13] = voiceState;
    cResult[14] = tmp12;
    tmp9 = tmp12;
  } else {
    if (cResult[15] === fullwidth) {
      if (cResult[16] === guildId) {
        if (cResult[17] === index) {
          if (cResult[18] === (undefined !== panelVariant && panelVariant)) {
            if (cResult[19] === voiceState) {
              tmp5 = cResult[20];
            }
          }
        }
      }
    }
    const tmp8 = jsx(HappeningNowCardVoiceDefault, { index, voiceState, fullwidth, guildId, panelVariant: undefined !== panelVariant && panelVariant });
    cResult[15] = fullwidth;
    cResult[16] = guildId;
    cResult[17] = index;
    cResult[18] = undefined !== panelVariant && panelVariant;
    cResult[19] = voiceState;
    cResult[20] = tmp8;
    tmp5 = tmp8;
  }
  return tmp5;
}) : ((arg0) => {
  let activity;
  let cardKey;
  let fullwidth;
  let guildId;
  let index;
  let panelVariant;
  let stream;
  let tmp5;
  let userId;
  let voiceState;
  ({ guildId, index, voiceState, fullwidth, panelVariant } = arg0);
  ({ userId, cardKey } = arg0);
  if (panelVariant === undefined) {
    panelVariant = false;
  }
  ({ stream, activity } = closure_7(voiceState.channelId));
  closure_7(voiceState.channelId);
  if (null != stream) {
    tmp5 = jsx(HappeningNowCardActivityDefault, { index, userId: stream.ownerId, guildId, stream, fullwidth, panelVariant });
  } else if (null != activity) {
    tmp5 = jsx(HappeningNowCardEmbeddedActivityDefault, { index, voiceState, fullwidth, guildId, activity, userId, cardKey, panelVariant });
  } else {
    tmp5 = jsx(HappeningNowCardVoiceDefault, { index, voiceState, fullwidth, guildId, panelVariant });
  }
  return tmp5;
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let first;
  let tmp8;
  let tmp9;
  _require = arg0;
  let obj = require("react");
  const cResult = obj.c(4);
  const tmp = _require;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [EmbeddedActivitiesStore, ApplicationStreamingStore, RelationshipStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function o() {
      let friend;
      if (null == closure_0) {
        return {};
      } else {
        let obj;
        const allApplicationStreamsForChannel = ApplicationStreamingStore.getAllApplicationStreamsForChannel(closure_0);
        if (allApplicationStreamsForChannel.length > 0) {
          const found = allApplicationStreamsForChannel.find((ownerId) => friend.isFriend(ownerId.ownerId));
          if (null != found) {
            return { stream: found };
          }
        }
        const embeddedActivitiesForChannel = EmbeddedActivitiesStore.getEmbeddedActivitiesForChannel(closure_0);
        const tmp7 = findActivityWithMostParticipantsDefault(embeddedActivitiesForChannel);
        if (null != tmp7) {
          obj = { activity: tmp7 };
          const obj3 = { activity: tmp7 };
        } else if (allApplicationStreamsForChannel.length > 0) {
          obj = { stream: allApplicationStreamsForChannel[0] };
          const obj4 = { stream: allApplicationStreamsForChannel[0] };
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
    tmp9 = items1;
    tmp8 = fn;
  } else {
    tmp8 = cResult[2];
    tmp9 = cResult[3];
  }
  const tmpResult = tmp(573);
  return tmpResult.useStateFromStoresObject(first, tmp8, tmp9);
}) : ((arg0) => {
  let closure_0;
  _require = arg0;
  let obj = require("useStateFromStores");
  const items = [EmbeddedActivitiesStore, ApplicationStreamingStore, RelationshipStore];
  const items1 = [arg0];
  return obj.useStateFromStoresObject(items, () => {
    let friend;
    if (null == closure_0) {
      return {};
    } else {
      let obj;
      const allApplicationStreamsForChannel = ApplicationStreamingStore.getAllApplicationStreamsForChannel(closure_0);
      if (allApplicationStreamsForChannel.length > 0) {
        const found = allApplicationStreamsForChannel.find((ownerId) => friend.isFriend(ownerId.ownerId));
        if (null != found) {
          return { stream: found };
        }
      }
      const embeddedActivitiesForChannel = EmbeddedActivitiesStore.getEmbeddedActivitiesForChannel(closure_0);
      const tmp7 = findActivityWithMostParticipantsDefault(embeddedActivitiesForChannel);
      if (null != tmp7) {
        obj = { activity: tmp7 };
        const obj3 = { activity: tmp7 };
      } else if (allApplicationStreamsForChannel.length > 0) {
        obj = { stream: allApplicationStreamsForChannel[0] };
        const obj4 = { stream: allApplicationStreamsForChannel[0] };
      } else {
        obj = {};
      }
      return obj;
    }
  }, items1);
});
let closure_7 = tmp4;
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowCardUnifiedVC.tsx");

export default tmp3;
export const useCallActivityData = tmp4;