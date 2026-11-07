// discord_app/modules/voice_panel/native/hooks/useVoicePanelParticipants.tsx
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import ChannelRTCStore from "../../../calls/ChannelRTCStore.tsx";
import StageChannelRoleStore from "../../../stage_channels/StageChannelRoleStore.tsx";
import AuthenticationStore from "../../../../stores/AuthenticationStore.tsx";
import ChannelStore from "../../../../stores/ChannelStore.tsx";
import RTCConnectionStore from "../../../../stores/RTCConnectionStore.tsx";
import VoiceStateStore from "../../../../stores/VoiceStateStore.tsx";
import SortedVoiceStateStore from "../../../../stores/views/SortedVoiceStateStore.tsx";

const require = globalThis.__r;

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
const VoicePanelConstants = fn(11363);
({ VoicePanelCardItemType: closure_12, VoicePanelCTACard: map1 } = VoicePanelConstants);
const RTCConnectionStates = fn(1072).RTCConnectionStates;
let closure_15 = [];
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
  const isStageUnifiedCall = require("StageChannelUnifiedCallExperiment").useIsStageUnifiedCall(
    channel,
    "useVoicePanelCards",
  );
  const tmp3 = require("useIsConnectedToVoiceChannel")(arg0);
  closure_5 = tmp3;
  const first = flag(
    isStageUnifiedCall.useState(() => new Map()),
    1,
  )[0];
  items = [first];
  const effect = isStageUnifiedCall.useEffect(() => () => first.clear(), items);
  let obj2 = require("StageChannelUnifiedCallExperiment");
  let items1 = [RTCConnectionStore];
  stateFromStores = require("initialize").useStateFromStores(
    items1,
    () => state.getState() === constants2.RTC_CONNECTED,
  );
  let obj3 = require("initialize");
  desyncedChannelParticipants = require("RTCConnectionDesyncHooks").useDesyncedChannelParticipants(arg0);
  let obj = { items: null, isConnected: null };
  let obj4 = require("RTCConnectionDesyncHooks");
  const items2 = [closure_5, SortedVoiceStateStore, first];
  const items3 = [tmp3, desyncedChannelParticipants, arg0, arg1, first, flag, isStageUnifiedCall, id, stateFromStores];
  obj.items = require("initialize").useStateFromStoresArray(
    items2,
    () => {
      let tmp;
      if (closure_5) {
        let voiceParticipantsHidden = ChannelRTCStore.getVoiceParticipantsHidden(closure_0);
        if (isStageUnifiedCall) {
          let stageSpeakerParticipants = ChannelRTCStore.getStageSpeakerParticipants(closure_0);
        } else {
          stageSpeakerParticipants = ChannelRTCStore.getFilteredParticipants(closure_0);
        }
        items = [];
        HermesBuiltin.arraySpread(stageSpeakerParticipants, 0);
        if (!voiceParticipantsHidden) {
          if (null != desyncedChannelParticipants) {
            for (const item10038 of tmp16) {
              let tmp21 = isStageUnifiedCall;
              if (isStageUnifiedCall) {
                tmp21 = !StageChannelRoleStore.isSpeaker(item10038.user.id, closure_0);
              }
              if (!tmp21) {
                let arr = items.push(item10038);
              }
              continue;
            }
          }
        }
        let items1 = [];
        for (const item10058 of items) {
          let obj2 = { type: constants.PARTICIPANT, id: item10058.id };
          let tmp33 = getMemoizedParticipant(obj2, first);
          if (flag) {
            if (tmp33.id === id) {
              tmp = tmp33;
              continue;
            }
          }
          let arr2 = items1.push(tmp33);
        }
        if (null != tmp) {
          items1.push(tmp);
        }
        let tmp42 = flag;
        if (flag) {
          tmp42 = stateFromStores;
        }
        if (tmp42) {
          tmp42 = 1 === items1.length;
        }
        if (tmp42) {
          const obj3 = { type: constants.CTA, id: constants2.CALLER_DISCONNECTED };
          items1.push(getMemoizedParticipant(obj3, first));
        }
        if (isStageUnifiedCall) {
          if (0 === items.length) {
            const obj4 = { type: constants.CTA, id: constants2.NO_STAGE_SPEAKERS };
            items1.push(getMemoizedParticipant(obj4, first));
          }
          if (items1.length <= 0) {
            items1 = closure_15;
          }
          return items1;
        }
        if (voiceParticipantsHidden) {
          voiceParticipantsHidden = 0 === items.length;
        }
        if (voiceParticipantsHidden) {
          const obj5 = { type: constants.CTA, id: constants2.NO_VIDEO_PARTICIPANTS };
          items1.push(getMemoizedParticipant(obj5, first));
        }
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
          mapped = closure_15;
        }
        return mapped;
      }
    },
    items3,
  );
  obj.isConnected = tmp3;
  return obj;
}
export function useChunkedParticipants(channelId, arg1) {
  _require = channelId;
  importDefault = arg1;
  const id = AuthenticationStore.getId();
  const layoutManager = managerSubscription.useContext(require("VoicePanelStateContext")).layoutManager;
  managerSubscription = require("VoicePanelCardLayoutManager").useManagerSubscription(layoutManager);
  const first = layoutManager(
    managerSubscription.useState(() => new Map()),
    1,
  )[0];
  items = [first];
  const effect = managerSubscription.useEffect(() => () => first.clear(), items);
  let obj = require("VoicePanelCardLayoutManager");
  let items1 = [VoiceStateStore, first];
  const items2 = [channelId, first, layoutManager, arg1, managerSubscription, id];
  return require("initialize").useStateFromStoresArray(
    items1,
    () => {
      if (managerSubscription < 0) {
        return closure_15;
      } else {
        items = [];
        if (VoiceStateStore.isInChannel(closure_0, id)) {
          const _Set = Set;
          const set = new Set(
            (() => {
              let end;
              items = [];
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
            })(),
          );
          for (const item10013 of set) {
            let arr = items.push(getMemoizedParticipant(item10013, first));
            continue;
          }
          if (tmp12) {
            const obj = { type: constants.CTA, id: constants2.NO_VIDEO_PARTICIPANTS };
            items.push(getMemoizedParticipant(obj, first));
          }
          if (items.length <= 0) {
            items = closure_15;
          }
          return items;
        } else {
          return items;
        }
      }
    },
    items2,
  );
}
