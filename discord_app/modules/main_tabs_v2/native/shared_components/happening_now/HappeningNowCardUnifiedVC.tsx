// === Module 16072: HappeningNowCardUnifiedVC ===

// Module 16072 (HappeningNowCardUnifiedVC)
import findActivityWithMostParticipantsDefault from "findActivityWithMostParticipants" /* 16063 */;
import HappeningNowCardActivityDefault from "HappeningNowCardActivity" /* 16073 */;
import HappeningNowCardEmbeddedActivityDefault from "HappeningNowCardEmbeddedActivity" /* 16085 */;
import HappeningNowCardVoiceDefault from "HappeningNowCardVoice" /* 16086 */;
import noop from "module_19" /* 19 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 1956 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 4582 */;
import RelationshipStore from "RelationshipStore" /* 4209 */;

const require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowCardUnifiedVC.tsx");

export default function HappeningNowCardUnifiedVC(arg0) {
  ({ guildId, index, voiceState, fullwidth, panelVariant } = arg0);
  ({ userId, cardKey } = arg0);
  if (panelVariant === undefined) {
    panelVariant = false;
  }
  const channelId = voiceState.channelId;
  let obj = channelId(563);
  const items = [EmbeddedActivitiesStore, ApplicationStreamingStore, RelationshipStore];
  const items1 = [channelId];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    if (null == channelId) {
      return {};
    } else {
      const allApplicationStreamsForChannel = ApplicationStreamingStore.getAllApplicationStreamsForChannel(channelId);
      if (allApplicationStreamsForChannel.length > 0) {
        const found = allApplicationStreamsForChannel.find((ownerId) => friend.isFriend(ownerId.ownerId));
        if (null != found) {
          let obj = { stream: found };
          return obj;
        }
      }
      const embeddedActivitiesForChannel = EmbeddedActivitiesStore.getEmbeddedActivitiesForChannel(channelId);
      const tmp7 = findActivityWithMostParticipantsDefault(embeddedActivitiesForChannel);
      if (null != tmp7) {
        obj = { activity: tmp7 };
      } else if (tmp9) {
        const obj1 = { stream: allApplicationStreamsForChannel[0] };
        obj = obj1;
      } else {
        obj = {};
      }
      return obj;
    }
  }, items1);
  ({ stream, activity } = stateFromStoresObject);
  if (null != stream) {
    obj = { index, userId: stream.ownerId, guildId, stream, fullwidth, panelVariant };
    let tmp5 = jsx(HappeningNowCardActivityDefault, { index, userId: stream.ownerId, guildId, stream, fullwidth, panelVariant });
  } else if (null != activity) {
    obj = { index, voiceState, fullwidth, guildId, activity, userId, cardKey, panelVariant };
    tmp5 = jsx(HappeningNowCardEmbeddedActivityDefault, { index, voiceState, fullwidth, guildId, activity, userId, cardKey, panelVariant });
  } else {
    let obj1 = { index, voiceState, fullwidth, guildId, panelVariant };
    tmp5 = jsx(HappeningNowCardVoiceDefault, { index, voiceState, fullwidth, guildId, panelVariant });
  }
  return tmp5;
};
export const useCallActivityData = function useCallActivityData(channel_id) {
  _require = channel_id;
  const items = [EmbeddedActivitiesStore, ApplicationStreamingStore, RelationshipStore];
  const items1 = [channel_id];
  return require("useStateFromStores").useStateFromStoresObject(items, () => {
    if (null == channelId) {
      return {};
    } else {
      const allApplicationStreamsForChannel = ApplicationStreamingStore.getAllApplicationStreamsForChannel(channelId);
      if (allApplicationStreamsForChannel.length > 0) {
        const found = allApplicationStreamsForChannel.find((ownerId) => friend.isFriend(ownerId.ownerId));
        if (null != found) {
          let obj = { stream: found };
          return obj;
        }
      }
      const embeddedActivitiesForChannel = EmbeddedActivitiesStore.getEmbeddedActivitiesForChannel(channelId);
      const tmp7 = findActivityWithMostParticipantsDefault(embeddedActivitiesForChannel);
      if (null != tmp7) {
        obj = { activity: tmp7 };
      } else if (tmp9) {
        const obj1 = { stream: allApplicationStreamsForChannel[0] };
        obj = obj1;
      } else {
        obj = {};
      }
      return obj;
    }
  }, items1);
};