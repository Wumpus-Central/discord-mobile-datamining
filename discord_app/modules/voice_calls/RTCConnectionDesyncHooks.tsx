// discord_app/modules/voice_calls/RTCConnectionDesyncHooks.tsx
import _slicedToArray from "../../../_runtime/metro/00032__.js";
import noop from "../../../_runtime/metro/00019__.js";
import AuthenticationStore from "../../stores/AuthenticationStore.tsx";
import RTCConnectionDesyncStore from "../../stores/RTCConnectionDesyncStore.tsx";
import RTCConnectionStore from "../../stores/RTCConnectionStore.tsx";
import VoiceStateStore from "../../stores/VoiceStateStore.tsx";

const require = globalThis.__r;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_calls/RTCConnectionDesyncHooks.tsx");

export const useEnsureSyncedChannelVoiceStates = function useEnsureSyncedChannelVoiceStates(id, voiceStates) {
  _require = id;
  dependencyMap = voiceStates;
  let items = [RTCConnectionDesyncStore, RTCConnectionStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => {
    let desyncedVoiceStates = null;
    if (closure_0 === RTCConnectionStore.getChannelId()) {
      desyncedVoiceStates = RTCConnectionDesyncStore.getDesyncedVoiceStates();
    }
    return desyncedVoiceStates;
  });
  const items1 = [stateFromStores, voiceStates];
  return noop.useMemo(
    () =>
      (function syncChannelVoiceStates(stateFromStores, arg1) {
        if (null != stateFromStores) {
          if (0 !== stateFromStores.length) {
            const items = [];
            const _Set = Set;
            const set = new Set();
            const iter = arg1[Symbol.iterator]();
            const nextResult = iter.next();
            while (iter !== undefined) {
              let arr = items.push(nextResult);
              let addResult = set.add(nextResult.user.id);
              continue;
            }
            if (stateFromStores != null) {
              const item = stateFromStores.forEach((item) => {
                items.splice(
                  id(voiceStates[6]).sortedIndexBy(items, item, (comparator) => comparator.comparator),
                  0,
                  item,
                );
              });
            }
            return items;
          }
        }
        return arg1;
      })(stateFromStores, closure_1),
    items1,
  );
};
export const useDesyncedChannelParticipants = function useDesyncedChannelParticipants(arg0) {
  _require = arg0;
  const items = [RTCConnectionDesyncStore, RTCConnectionStore];
  return require("initialize").useStateFromStores(items, () => {
    let desyncedParticipants = null;
    if (closure_0 === RTCConnectionStore.getChannelId()) {
      desyncedParticipants = RTCConnectionDesyncStore.getDesyncedParticipants();
    }
    return desyncedParticipants;
  });
};
export const useEnsureSyncedChannelParticipants = function useEnsureSyncedChannelParticipants(arg0, arg1) {
  _require = arg1;
  closure_129_0 = arg0;
  let items = [RTCConnectionDesyncStore, RTCConnectionStore];
  stateFromStores = require("initialize").useStateFromStores(items, () => {
    let desyncedParticipants = null;
    if (closure_0 === RTCConnectionStore.getChannelId()) {
      desyncedParticipants = RTCConnectionDesyncStore.getDesyncedParticipants();
    }
    return desyncedParticipants;
  });
  const items1 = [stateFromStores, arg1];
  return noop.useMemo(() => {
    let tmp2 = items;
    if (null != stateFromStores) {
      tmp2 = tmp;
      if (0 !== stateFromStores.length) {
        items = [];
        HermesBuiltin.arraySpread(tmp, 0);
        const item = stateFromStores.forEach((item) => {
          items.splice(
            items(stateFromStores[6]).sortedIndexBy(items, item, (arg0) => items(closure_1_1[8]).sortKey(arg0)),
            0,
            item,
          );
        });
        tmp2 = items;
      }
    }
    return tmp2;
  }, items1);
};
export const useIsRTCDisconnectedUIVisible = function useIsRTCDisconnectedUIVisible(arg0, id) {
  _require = arg0;
  dependencyMap = id;
  const items = [AuthenticationStore];
  const stateFromStores = require("initialize").useStateFromStores(
    items,
    () => AuthenticationStore.getId() === closure_1,
  );
  const obj = require("initialize");
  const items1 = [stateFromStores2];
  const stateFromStores1 = require("initialize").useStateFromStores(items1, () => stateFromStores2.getChannelId());
  noop = noop.useRef(null);
  const obj2 = require("initialize");
  [tmp4, AuthenticationStore] = stateFromStores1(noop.useState(false), 2);
  const tmp3 = stateFromStores1(noop.useState(false), 2);
  [tmp6, RTCConnectionDesyncStore] = stateFromStores1(noop.useState(false), 2);
  const tmp5 = stateFromStores1(noop.useState(false), 2);
  const items2 = [stateFromStores2, stateFromStores3];
  stateFromStores2 = require("initialize").useStateFromStores(items2, () => {
    let isUserConnectedResult = null != closure_1;
    if (isUserConnectedResult) {
      isUserConnectedResult = null != closure_0;
    }
    if (isUserConnectedResult) {
      isUserConnectedResult = RTCConnectionStore.getChannelId() === closure_0;
    }
    if (isUserConnectedResult) {
      isUserConnectedResult = null != VoiceStateStore.isInChannel(closure_0, closure_1);
    }
    if (isUserConnectedResult) {
      isUserConnectedResult = RTCConnectionStore.isUserConnected(closure_1);
    }
    return isUserConnectedResult;
  });
  const obj3 = require("initialize");
  const items3 = [stateFromStores2, stateFromStores3];
  stateFromStores3 = require("initialize").useStateFromStores(items3, () => {
    let tmp2 = null != closure_1;
    if (tmp2) {
      tmp2 = null != closure_0;
    }
    if (tmp2) {
      tmp2 = RTCConnectionStore.getChannelId() === closure_0;
    }
    if (tmp2) {
      tmp2 = null != VoiceStateStore.isInChannel(closure_0, closure_1);
    }
    if (tmp2) {
      tmp2 = !RTCConnectionStore.isUserConnected(closure_1);
    }
    return tmp2;
  });
  const items4 = [stateFromStores2];
  const effect = noop.useEffect(() => {
    if (stateFromStores2) {
      RTCConnectionDesyncStore(true);
    }
  }, items4);
  const items5 = [arg0, stateFromStores1];
  const effect1 = noop.useEffect(() => {
    if (stateFromStores1 !== closure_0) {
      RTCConnectionDesyncStore(false);
    }
  }, items5);
  const items6 = [stateFromStores3];
  const effect2 = noop.useEffect(() => {
    if (stateFromStores3) {
      if (null == ref.current) {
        const _setTimeout = setTimeout;
        tmp.current = setTimeout(() => {
          ref.current = null;
          closure_1_4(true);
        }, 250);
      }
      return () => {
        clearTimeout(ref.current);
        ref.current = null;
      };
    }
    clearTimeout(ref.current);
    ref.current = null;
    AuthenticationStore(false);
  }, items6);
  let tmp12 = !stateFromStores;
  if (!stateFromStores) {
    tmp12 = tmp6;
  }
  if (tmp12) {
    tmp12 = tmp4;
  }
  return tmp12;
};
