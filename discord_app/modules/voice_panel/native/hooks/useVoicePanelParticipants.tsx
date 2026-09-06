// === Module 17083: useVoicePanelParticipants ===

// Module 17083 (useVoicePanelParticipants)
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ChannelRTCStore from "ChannelRTCStore" /* 4576 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4583 */;
import VoiceStateStore from "VoiceStateStore" /* 4579 */;
import SortedVoiceStateStore from "SortedVoiceStateStore" /* 4584 */;

const require = fn;
function getMemoizedParticipant(item10013, get) {
  const combined = "" + item10013.type + "-" + item10013.id;
  value = get.get(combined);
  if (null == value) {
    const result = get.set(combined, item10013);
    value = item10013;
  }
  return value;
}
const VoicePanelConstants = fn(12273);
({ VoicePanelCardItemType: closure_11, VoicePanelCTACard: closure_12 } = VoicePanelConstants);
const RTCConnectionStates = fn(1074).RTCConnectionStates;
let closure_14 = [];
const size = fn(2);
let result = size.fileFinishedImporting("modules/voice_panel/native/hooks/useVoicePanelParticipants.tsx");

export default function useVoicePanelCards(arg0, arg1) {
  _require = arg0;
  importDefault = arg1;
  const id = stateFromStores.getId();
  const channel = desyncedChannelParticipants.getChannel(arg0);
  let flag;
  if (channel != null) {
    flag = channel.isDM();
  }
  if (flag == null) {
    flag = false;
  }
  const tmp2 = require("useIsConnectedToVoiceChannel")(arg0);
  noop = tmp2;
  const first = flag(noop.useState(() => new Map()), 1)[0];
  let items = [first];
  const effect = noop.useEffect(() => () => first.clear(), items);
  let items1 = [RTCConnectionStore];
  stateFromStores = require("initialize").useStateFromStores(items1, () => state.getState() === constants2.RTC_CONNECTED);
  const obj2 = require("initialize");
  desyncedChannelParticipants = require("RTCConnectionDesyncHooks").useDesyncedChannelParticipants(arg0);
  let obj = { items: null, isConnected: null };
  const obj3 = require("RTCConnectionDesyncHooks");
  const items2 = [first, SortedVoiceStateStore];
  const items3 = [tmp2, desyncedChannelParticipants, arg0, arg1, first, flag, id, stateFromStores];
  obj.items = require("initialize").useStateFromStoresArray(items2, () => {
    let tmp;
    if (closure_4) {
      let voiceParticipantsHidden = ChannelRTCStore.getVoiceParticipantsHidden(closure_0);
      const items = [];
      const filteredParticipants = ChannelRTCStore.getFilteredParticipants(closure_0);
      for (const item10024 of filteredParticipants) {
        let arr = items.push(item10024);
        continue;
      }
      if (!voiceParticipantsHidden) {
        if (null != desyncedChannelParticipants) {
          for (const item10034 of tmp12) {
            arr = items.push(item10034);
            continue;
          }
        }
      }
      let items1 = [];
      const tmp18 = items[Symbol.iterator]();
      while (tmp18 !== undefined) {
        let obj = { type: null, id: null };
        obj.type = constants.PARTICIPANT;
        obj.id = tmp20.id;
        let tmp25 = getMemoizedParticipant(obj, first);
        if (flag) {
          if (tmp25.id === id) {
            tmp = tmp25;
            continue;
          }
        }
        let arr1 = items1.push(tmp25);
      }
      if (null != tmp) {
        items1.push(tmp);
      }
      let tmp34 = flag;
      if (flag) {
        tmp34 = stateFromStores;
      }
      if (tmp34) {
        tmp34 = 1 === items1.length;
      }
      if (tmp34) {
        obj = { type: constants.CTA, id: constants2.CALLER_DISCONNECTED };
        items1.push(getMemoizedParticipant(obj, first));
      }
      if (voiceParticipantsHidden) {
        voiceParticipantsHidden = 0 === items.length;
      }
      if (voiceParticipantsHidden) {
        obj = { type: constants.CTA, id: constants2.NO_VIDEO_PARTICIPANTS };
        items1.push(getMemoizedParticipant(obj, first));
      }
      if (items1.length <= 0) {
        items1 = closure_14;
      }
      return items1;
    } else {
      const voiceStatesForChannelAlt = SortedVoiceStateStore.getVoiceStatesForChannelAlt(closure_0, closure_1);
      let mapped = voiceStatesForChannelAlt.map((id) => {
        const obj = { type: constants.PARTICIPANT, id: id.user.id };
        const combined = "" + obj.type + "-" + obj.id;
        value = first.get(combined);
        if (null == value) {
          const result = first.set(combined, obj);
          value = obj;
        }
        return value;
      });
      if (mapped.length <= 0) {
        mapped = closure_14;
      }
      return mapped;
    }
  }, items3);
  obj.isConnected = tmp2;
  return obj;
};
export const useChunkedParticipants = function useChunkedParticipants(channelId, arg1) {
  _require = channelId;
  importDefault = arg1;
  const id = AuthenticationStore.getId();
  const layoutManager = managerSubscription.useContext(require("VoicePanelStateContext")).layoutManager;
  managerSubscription = require("VoicePanelCardLayoutManager").useManagerSubscription(layoutManager);
  const first = layoutManager(managerSubscription.useState(() => new Map()), 1)[0];
  let items = [first];
  const effect = managerSubscription.useEffect(() => () => first.clear(), items);
  let obj = require("VoicePanelCardLayoutManager");
  let items1 = [VoiceStateStore, first];
  const items2 = [channelId, first, layoutManager, arg1, managerSubscription, id];
  return require("initialize").useStateFromStoresArray(items1, () => {
    if (managerSubscription < 0) {
      return closure_14;
    } else {
      let items = [];
      if (VoiceStateStore.isInChannel(closure_0, id)) {
        const _Set = Set;
        const set = new Set((() => {
          let end;
          const items = [];
          let start = closure_1_1.start;
          if (start <= closure_1_1.end) {
            do {
              let push = items.push;
              let _Array = Array;
              let items1 = [];
              let arraySpreadResult = HermesBuiltin.arraySpread(Array.from(chunk.getChunk(start)), 0);
              let applyResult = HermesBuiltin.apply(items1, items);
              start = start + 1;
              end = closure_1_1.end;
            } while (start <= end);
          }
          return items;
        })());
        for (const item10013 of set) {
          let arr = items.push(getMemoizedParticipant(item10013, first));
          continue;
        }
        if (tmp12) {
          const obj = { type: constants.CTA, id: constants2.NO_VIDEO_PARTICIPANTS };
          items.push(getMemoizedParticipant(obj, first));
        }
        if (items.length <= 0) {
          items = closure_14;
        }
        return items;
      } else {
        return items;
      }
    }
  }, items2);
};