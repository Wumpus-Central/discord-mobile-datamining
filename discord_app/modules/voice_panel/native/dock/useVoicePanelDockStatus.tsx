// === Module 19981: useVoicePanelDockStatus ===

// Module 19981 (useVoicePanelDockStatus)
import DispatcherDefault from "Dispatcher" /* 572 */;
import DurationsDefault from "Durations" /* 1089 */;
import VoicePanelStateContextDefault from "VoicePanelStateContext" /* 11984 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ChannelRTCStore from "ChannelRTCStore" /* 7016 */;
import SoundboardStore from "SoundboardStore" /* 6369 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import RTCConnectionStore from "RTCConnectionStore" /* 6071 */;
import SpeakingStore from "SpeakingStore" /* 6941 */;
import UserStore from "UserStore" /* 1388 */;
import VoiceStateStore from "VoiceStateStore" /* 5981 */;

const require = fn;
const VoicePanelDockStatusStore = fn(19202);
({ releaseDockStatus: closure_12, initDockStatus: map1, setDockActiveSpeakers: closure_14, setDockHasStreamers: closure_15, showVoiceMoment: closure_16 } = VoicePanelDockStatusStore);
const ParticipantTypes = fn(5983).ParticipantTypes;
let result = fn(6371).MAX_SOUND_LENGTH_SECONDS * DurationsDefault.Millis.SECOND;
let closure_18 = result + 3 * DurationsDefault.Millis.SECOND;
const size = fn(2);
let result1 = size.fileFinishedImporting("modules/voice_panel/native/dock/useVoicePanelDockStatus.tsx");

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
          state(channelId);
          batchedStoreListener(channelId);
        } else {
          application_id(channelId);
          batchedStoreListener(null);
        }
      }
    });
    batchedStoreListener.attach("useVoicePanelDockStatus.connection");
    const tmp3 = channelId.getChannelId() === closure_0;
    closure_0 = tmp3;
    if (tmp3 !== closure_0) {
      if (tmp3) {
        closure_1_13(tmp2);
        batchedStoreListener(tmp2);
      } else {
        closure_1_12(tmp2);
        batchedStoreListener(null);
      }
    }
    return () => {
      batchedStoreListener.detach();
      application_id(channelId);
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
              let tmp10 = closure_3_16(channelId, tmp5, "joined");
            }
            continue;
          }
          const iter = set[Symbol.iterator]();
          const nextResult1 = iter.next();
          while (iter !== undefined) {
            let tmp16 = nextResult1;
            if (!set.has(nextResult1)) {
              let tmp20 = closure_3_16(channelId, tmp16, "left");
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
              let tmp12 = closure_3_16(channelId, tmp7, "streaming");
            }
            continue;
          }
        }
        colors(channelId, set.size > 0);
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
    if (null != map) {
      const _Map = Map;
      map = new Map();
      const _Map2 = Map;
      closure_2 = [];
      function removePlayingSound(arg0) {
        map.delete(arg0);
        clearTimeout(map1.get(arg0));
        map1.delete(arg0);
      }
      function update() {
        const keys = found.keys();
        const iter = keys[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          let tmp3 = nextResult;
          let isUserPlayingSoundsResult = null != ChannelRTCStore.getParticipant(map, nextResult);
          if (isUserPlayingSoundsResult) {
            isUserPlayingSoundsResult = userPlayingSounds.isUserPlayingSounds(tmp3);
          }
          if (!isUserPlayingSoundsResult) {
            let tmp11 = removePlayingSound(tmp3);
          }
          continue;
        }
        speakers = speakers.getSpeakers();
        found = speakers.filter((item) => {
          let tmp = item !== map1;
          if (tmp) {
            tmp = null != handlePlayStart.getParticipant(found, item);
          }
          if (tmp) {
            tmp = null != user.getUser(item);
          }
          return tmp;
        });
        found1 = found1.filter((item) => {
          let hasItem = found.includes(item);
          if (!hasItem) {
            hasItem = map.has(item);
          }
          return hasItem;
        });
        items = [...found, ...found.keys()];
        for (const item10049 of items) {
          if (!found1.includes(item10049)) {
            let arr = found1.push(item10049);
          }
          continue;
        }
        map = new Map(found);
        closure_2_14(map, found1, map);
      }
      function handlePlayStart(userId) {
        userId = userId.userId;
        let tmp = userId !== map1;
        if (tmp) {
          tmp = null != ChannelRTCStore.getParticipant(map, userId);
        }
        if (tmp) {
          tmp = null != user.getUser(userId);
        }
        if (tmp) {
          const _String = String;
          const result = userId.set(userId, String(userId.soundId));
          let _clearTimeout = clearTimeout;
          clearTimeout(map1.get(userId));
          const _setTimeout = setTimeout;
          const result1 = map1.set(userId, setTimeout(() => {
            if (typeof removePlayingSound === "function") {
              map.delete(userId);
              const _clearTimeout = clearTimeout;
              clearTimeout(map1.get(userId));
              map1.delete(userId);
              update();
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          }, closure_2_18));
          update();
        }
      }
      items = [speakers, ChannelRTCStore, userPlayingSounds];
      const batchedStoreListener = new channelId(504).BatchedStoreListener(items, update);
      batchedStoreListener.attach("useVoicePanelDockStatus.speakers");
      const map1 = new Map();
      const subscription = _undefined(572).subscribe("GUILD_SOUNDBOARD_SOUND_PLAY_START", handlePlayStart);
      update();
      return () => {
        batchedStoreListener.detach();
        DispatcherDefault.unsubscribe("GUILD_SOUNDBOARD_SOUND_PLAY_START", handlePlayStart);
        const item = map1.forEach((item) => clearTimeout(item));
      };
    }
  }, items4);
};