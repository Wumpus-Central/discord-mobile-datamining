// === Module 19509: useVoicePanelDockStatus ===

// Module 19509 (useVoicePanelDockStatus)
import VoicePanelStateContextDefault from "VoicePanelStateContext" /* 11380 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ChannelRTCStore from "ChannelRTCStore" /* 6923 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5920 */;
import SpeakingStore from "SpeakingStore" /* 6836 */;
import UserStore from "UserStore" /* 1385 */;
import VoiceStateStore from "VoiceStateStore" /* 5833 */;

const require = fn;
const VoicePanelDockStatusStore = fn(19510);
({ releaseDockStatus: closure_11, initDockStatus: closure_12, setDockHasStreamers: map1, setDockSpeakingIds: closure_14, showVoiceMoment: closure_15 } = VoicePanelDockStatusStore);
const ParticipantTypes = fn(5835).ParticipantTypes;
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/dock/useVoicePanelDockStatus.tsx");

export default function useVoicePanelDockStatus() {
  items = [AuthenticationStore];
  const stateFromStores = channelId(504).useStateFromStores(items, () => id.getId());
  importDefault = undefined;
  channelId = noop.useContext(VoicePanelStateContextDefault).channelId;
  const obj = channelId(504);
  [tmp3, c1] = noop.useState(null);
  let items1 = [channelId];
  const effect = noop.useEffect(() => {
    closure_0 = false;
    items = [channelId];
    const batchedStoreListener = new channelId(504).BatchedStoreListener(items, function update() {
      const tmp2 = RTCConnectionStore.getChannelId() === channelId;
      closure_0 = tmp2;
      if (tmp2 !== closure_0) {
        if (tmp2) {
          application_id(channelId);
          batchedStoreListener(channelId);
        } else {
          closure_3_11(channelId);
          batchedStoreListener(null);
        }
      }
    });
    batchedStoreListener.attach("useVoicePanelDockStatus.connection");
    const tmp3 = channelId.getChannelId() === closure_0;
    closure_0 = tmp3;
    if (tmp3 !== closure_0) {
      if (tmp3) {
        closure_1_12(tmp2);
        batchedStoreListener(tmp2);
      } else {
        closure_1_11(tmp2);
        batchedStoreListener(null);
      }
    }
    return () => {
      batchedStoreListener.detach();
      closure_3_11(channelId);
    };
  }, items1);
  closure_129_0 = tmp3;
  closure_129_1 = stateFromStores;
  const items2 = [tmp3, stateFromStores];
  const effect1 = noop.useEffect(() => {
    if (null != set) {
      function update() {
        const values = Object.values(VoiceStateStore.getVoiceStatesForChannel(channelId));
        set = new Set(values.flatMap((userId) => {
          if (userId.userId !== batchedStoreListener) {
            items = [userId.userId];
            let items1 = items;
          } else {
            items1 = [];
          }
          return items1;
        }));
        if (null != set) {
          const iter2 = tmp[Symbol.iterator]();
          const nextResult = iter2.next();
          while (iter2 !== undefined) {
            let tmp5 = nextResult;
            if (!set.has(nextResult)) {
              let tmp10 = closure_3_15(channelId, tmp5, "joined");
            }
            continue;
          }
          const iter = set[Symbol.iterator]();
          const nextResult1 = iter.next();
          while (iter !== undefined) {
            let tmp16 = nextResult1;
            if (!set.has(nextResult1)) {
              let tmp20 = closure_3_15(channelId, tmp16, "left");
            }
            continue;
          }
        }
      }
      items = [VoiceStateStore];
      const batchedStoreListener = new channelId(504).BatchedStoreListener(items, update);
      batchedStoreListener.attach("useVoicePanelDockStatus.voiceState");
      update();
      return () => batchedStoreListener.detach();
    }
  }, items2);
  closure_130_0 = tmp3;
  closure_130_1 = stateFromStores;
  const items3 = [tmp3, stateFromStores];
  const effect2 = noop.useEffect(() => {
    if (null != set) {
      function update() {
        const streamParticipants = ChannelRTCStore.getStreamParticipants(channelId);
        set = new Set(streamParticipants.flatMap((type) => {
          if (type.type === constants.STREAM) {
            if (null != type.user) {
              if (type.user.id !== batchedStoreListener) {
                items = [type.user.id];
              }
              return [];
            }
          }
        }));
        if (null != set) {
          const iter = tmp2[Symbol.iterator]();
          const nextResult = iter.next();
          while (iter !== undefined) {
            let tmp7 = nextResult;
            if (!set.has(nextResult)) {
              let tmp12 = closure_3_15(channelId, tmp7, "streaming");
            }
            continue;
          }
        }
        state(channelId, set.size > 0);
      }
      items = [ChannelRTCStore];
      const batchedStoreListener = new channelId(504).BatchedStoreListener(items, update);
      batchedStoreListener.attach("useVoicePanelDockStatus.stream");
      update();
      return () => batchedStoreListener.detach();
    }
  }, items3);
  closure_131_0 = tmp3;
  closure_131_1 = stateFromStores;
  const items4 = [tmp3, stateFromStores];
  const effect3 = noop.useEffect(() => {
    if (null != batchedStoreListener) {
      items = [SpeakingStore, ChannelRTCStore];
      batchedStoreListener = new channelId(504).BatchedStoreListener(items, function update() {
        const speakers = SpeakingStore.getSpeakers();
        closure_2_14(batchedStoreListener, speakers.filter((item) => {
          let tmp = item !== closure_1_1;
          if (tmp) {
            tmp = null != participant.getParticipant(batchedStoreListener, item);
          }
          if (tmp) {
            tmp = null != user.getUser(item);
          }
          return tmp;
        }));
      });
      batchedStoreListener.attach("useVoicePanelDockStatus.speakers");
      let speakers = SpeakingStore.getSpeakers();
      closure_1_14(tmp, speakers.filter((item) => {
        let tmp = item !== closure_1_1;
        if (tmp) {
          tmp = null != participant.getParticipant(batchedStoreListener, item);
        }
        if (tmp) {
          tmp = null != user.getUser(item);
        }
        return tmp;
      }));
      return () => batchedStoreListener.detach();
    }
  }, items4);
};