// === Module 15931: getMemoizedParticipant ===

// Module 15931 (getMemoizedParticipant)
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import getParticipants from "getParticipants";
import fetchFingerprint from "fetchFingerprint";
import ensureGuildLoaded from "ensureGuildLoaded";
import createRTCConnection from "createRTCConnection";
import updateVoiceState from "updateVoiceState";
import getVoiceStatesForGuild from "getVoiceStatesForGuild";
import VoicePanelModes from "VoicePanelModes";
import { RTCConnectionStates } from "ME";

let closure_12;
let unpackModuleId;
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
let result = require("getParticipants").fileFinishedImporting("modules/voice_panel/native/hooks/useVoicePanelParticipants.tsx");

export default function useVoicePanelCards(arg0, arg1) {
  const _require = arg0;
  const importDefault = arg1;
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
  const effect = React.useEffect(() => () => getParticipants.clear(), items);
  let items1 = [createRTCConnection];
  stateFromStores = _require(id[11]).useStateFromStores(items1, () => state.getState() === constants.RTC_CONNECTED);
  const obj2 = _require(id[11]);
  desyncedChannelParticipants = _require(id[12]).useDesyncedChannelParticipants(arg0);
  let obj = { items: null, isConnected: null };
  const obj3 = _require(id[12]);
  const items2 = [first, getVoiceStatesForGuild];
  const items3 = [tmp2, desyncedChannelParticipants, arg0, arg1, first, flag, id, stateFromStores];
  obj[0] = _require(id[11]).useStateFromStoresArray(items2, () => {
    let tmp;
    if (noop) {
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
        let tmp22 = outer1_15;
        let obj = { type: null, id: null };
        let tmp23 = outer1_11;
        obj[0] = outer1_11.PARTICIPANT;
        obj[1] = tmp20.id;
        let tmp24 = first;
        let tmp25 = outer1_15(obj, first);
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
        obj[0] = outer1_11.CTA;
        obj[1] = outer1_12.CALLER_DISCONNECTED;
        items1.push(outer1_15(obj, first));
      }
      if (voiceParticipantsHidden) {
        voiceParticipantsHidden = 0 === items.length;
      }
      if (voiceParticipantsHidden) {
        obj = { type: null, id: null };
        obj[0] = outer1_11.CTA;
        obj[1] = outer1_12.NO_VIDEO_PARTICIPANTS;
        items1.push(outer1_15(obj, first));
      }
      if (items1.length <= 0) {
        items1 = outer1_14;
      }
      return items1;
    } else {
      const voiceStatesForChannelAlt = outer1_10.getVoiceStatesForChannelAlt(closure_0, closure_1);
      let mapped = voiceStatesForChannelAlt.map((id) => {
        const obj = { type: outer1_11.PARTICIPANT, id: id.user.id };
        const combined = "" + obj.type + "-" + obj.id;
        let value = getParticipants.get(combined);
        if (null == value) {
          const result = getParticipants.set(combined, obj);
          value = obj;
        }
        return value;
      });
      if (mapped.length <= 0) {
        mapped = outer1_14;
      }
      return mapped;
    }
  }, items3);
  obj[1] = tmp2;
  return obj;
};
export const useChunkedParticipants = function useChunkedParticipants(channelId, arg1) {
  const _require = channelId;
  const importDefault = arg1;
  id = id.getId();
  const layoutManager = managerSubscription.useContext(importDefault(id[13])).layoutManager;
  managerSubscription = _require(id[14]).useManagerSubscription(layoutManager);
  const first = layoutManager(managerSubscription.useState(() => new Map()), 1)[0];
  let items = [first];
  const effect = managerSubscription.useEffect(() => () => getParticipants.clear(), items);
  let obj = _require(id[14]);
  let items1 = [updateVoiceState, first];
  const items2 = [channelId, first, layoutManager, arg1, managerSubscription, id];
  return _require(id[11]).useStateFromStoresArray(items1, () => {
    if (managerSubscription < 0) {
      return outer1_14;
    } else {
      let items = [];
      if (outer1_9.isInChannel(closure_0, id)) {
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
          let tmp7 = outer1_15;
          let tmp8 = first;
          let arr = items.push(outer1_15(item10013, first));
          continue;
        }
        if (tmp12) {
          const obj = { type: null, id: null };
          obj[0] = outer1_11.CTA;
          obj[1] = outer1_12.NO_VIDEO_PARTICIPANTS;
          items.push(outer1_15(obj, first));
        }
        if (items.length <= 0) {
          items = outer1_14;
        }
        return items;
      } else {
        return items;
      }
    }
  }, items2);
};