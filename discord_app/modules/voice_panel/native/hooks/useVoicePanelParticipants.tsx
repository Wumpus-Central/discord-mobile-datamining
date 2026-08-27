// === Module 16577: getMemoizedParticipant ===

// Module 16577 (getMemoizedParticipant)
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import closure_5 from "getParticipants" /* 4461 */;
import closure_6 from "fetchFingerprint" /* 1218 */;
import closure_7 from "ensureGuildLoaded" /* 1391 */;
import closure_8 from "createRTCConnection" /* 4519 */;
import closure_9 from "updateVoiceState" /* 4464 */;
import closure_10 from "getVoiceStatesForGuild" /* 4520 */;
import VoicePanelModes from "VoicePanelModes" /* 11757 */;
import { RTCConnectionStates } from "ME" /* 676 */;

const require = arg1;
function getMemoizedParticipant(type, get) {
  const combined = "" + type.type + "-" + type.id;
  let value = get.get(combined);
  if (null == value) {
    const result = get.set(combined, type);
    value = type;
  }
  return value;
}
({ VoicePanelCardItemType: unpackModuleId, VoicePanelCTACard: closure_12 } = VoicePanelModes);
let closure_14 = [];
let result = require("set").fileFinishedImporting("modules/voice_panel/native/hooks/useVoicePanelParticipants.tsx");

export default function useVoicePanelCards(arg0, arg1) {
  const _require = arg0;
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
  const tmp2 = importDefault(id[10])(arg0);
  const React = tmp2;
  const first = flag(React.useState(() => new Map()), 1)[0];
  let items = [first];
  const effect = React.useEffect(() => () => closure_5.clear(), items);
  let items1 = [closure_8];
  stateFromStores = _require(id[11]).useStateFromStores(items1, () => state.getState() === constants.RTC_CONNECTED);
  const obj2 = _require(id[11]);
  desyncedChannelParticipants = _require(id[12]).useDesyncedChannelParticipants(arg0);
  let obj = { items: null, isConnected: null };
  const obj3 = _require(id[12]);
  const items2 = [first, closure_10];
  const items3 = [tmp2, desyncedChannelParticipants, arg0, arg1, first, flag, id, stateFromStores];
  obj[0] = _require(id[11]).useStateFromStoresArray(items2, () => {
    let tmp;
    if (closure_4) {
      let voiceParticipantsHidden = first.getVoiceParticipantsHidden(closure_0);
      const items = [];
      const filteredParticipants = first.getFilteredParticipants(closure_0);
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
        let tmp22 = closure_1_15;
        let obj = { type: null, id: null };
        let tmp23 = closure_1_11;
        obj[0] = closure_1_11.PARTICIPANT;
        obj[1] = tmp20.id;
        let tmp24 = first;
        let tmp25 = closure_1_15(obj, first);
        let tmp26 = flag;
        if (flag) {
          let tmp27 = tmp25;
          let tmp28 = id;
          if (tmp25.id === id) {
            tmp = tmp25;
            continue;
          }
        }
        let tmp29 = tmp25;
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
        obj = { type: null, id: null };
        obj[0] = closure_1_11.CTA;
        obj[1] = closure_1_12.CALLER_DISCONNECTED;
        items1.push(closure_1_15(obj, first));
      }
      if (voiceParticipantsHidden) {
        voiceParticipantsHidden = 0 === items.length;
      }
      if (voiceParticipantsHidden) {
        obj = { type: null, id: null };
        obj[0] = closure_1_11.CTA;
        obj[1] = closure_1_12.NO_VIDEO_PARTICIPANTS;
        items1.push(closure_1_15(obj, first));
      }
      if (items1.length <= 0) {
        items1 = closure_1_14;
      }
      return items1;
    } else {
      const voiceStatesForChannelAlt = closure_1_10.getVoiceStatesForChannelAlt(closure_0, closure_1);
      let mapped = voiceStatesForChannelAlt.map((id) => {
        const obj = { type: closure_1_11.PARTICIPANT, id: id.user.id };
        const combined = "" + obj.type + "-" + obj.id;
        let value = closure_5.get(combined);
        if (null == value) {
          const result = closure_5.set(combined, obj);
          value = obj;
        }
        return value;
      });
      if (mapped.length <= 0) {
        mapped = closure_1_14;
      }
      return mapped;
    }
  }, items3);
  obj[1] = tmp2;
  return obj;
};
export const useChunkedParticipants = function useChunkedParticipants(channelId, arg1) {
  const _require = channelId;
  importDefault = arg1;
  id = id.getId();
  const layoutManager = managerSubscription.useContext(importDefault(id[13])).layoutManager;
  managerSubscription = _require(id[14]).useManagerSubscription(layoutManager);
  const first = layoutManager(managerSubscription.useState(() => new Map()), 1)[0];
  let items = [first];
  const effect = managerSubscription.useEffect(() => () => closure_5.clear(), items);
  let obj = _require(id[14]);
  let items1 = [closure_9, first];
  const items2 = [channelId, first, layoutManager, arg1, managerSubscription, id];
  return _require(id[11]).useStateFromStoresArray(items1, () => {
    if (managerSubscription < 0) {
      return closure_1_14;
    } else {
      let items = [];
      if (closure_1_9.isInChannel(closure_0, id)) {
        const _Set = Set;
        const set = new Set((() => {
          let end;
          const items = [];
          let start = closure_1.start;
          if (start <= closure_1.end) {
            do {
              let tmp = chunk;
              let push = items.push;
              let _Array = Array;
              let items1 = [];
              let tmp2 = items1;
              let num = 0;
              let arraySpreadResult = HermesBuiltin.arraySpread(Array.from(chunk.getChunk(start)), 0);
              let tmp4 = push;
              let tmp5 = items1;
              let tmp6 = items;
              let applyResult = HermesBuiltin.apply(items1, items);
              start = start + 1;
              let tmp8 = closure_1;
              end = closure_1.end;
            } while (start <= end);
          }
          return items;
        })());
        for (const item10013 of set) {
          let tmp7 = closure_1_15;
          let tmp8 = first;
          let arr = items.push(closure_1_15(item10013, first));
          continue;
        }
        if (tmp12) {
          const obj = { type: null, id: null };
          obj[0] = closure_1_11.CTA;
          obj[1] = closure_1_12.NO_VIDEO_PARTICIPANTS;
          items.push(closure_1_15(obj, first));
        }
        if (items.length <= 0) {
          items = closure_1_14;
        }
        return items;
      } else {
        return items;
      }
    }
  }, items2);
};