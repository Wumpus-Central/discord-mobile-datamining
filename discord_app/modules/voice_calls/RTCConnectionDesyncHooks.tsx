// === Module 15204: useEnsureSyncedChannelVoiceStates ===

// Module 15204 (useEnsureSyncedChannelVoiceStates)
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import getParticipants from "getParticipants";
import isVoiceMuted from "isVoiceMuted";
import fetchFingerprint from "fetchFingerprint";
import ensureGuildLoaded from "ensureGuildLoaded";
import trackCommunicationDisabled from "trackCommunicationDisabled";
import retryFailedUsers from "retryFailedUsers";
import createRTCConnection from "createRTCConnection";
import mergeGuildAvatar from "mergeGuildAvatar";
import updateVoiceState from "updateVoiceState";

const require = arg1;
const result = require("getParticipants").fileFinishedImporting("modules/voice_calls/RTCConnectionDesyncHooks.tsx");

export const useEnsureSyncedChannelVoiceStates = function useEnsureSyncedChannelVoiceStates(id, voiceStates) {
  const _require = id;
  const dependencyMap = voiceStates;
  let items = [retryFailedUsers, createRTCConnection];
  const stateFromStores = _require(589).useStateFromStores(items, () => {
    let desyncedVoiceStates = null;
    if (closure_0 === outer1_10.getChannelId()) {
      desyncedVoiceStates = outer1_9.getDesyncedVoiceStates();
    }
    return desyncedVoiceStates;
  });
  let obj = _require(589);
  const items1 = [stateFromStoresArray];
  const React = _require(589).useStateFromStoresArray(items1, () => {
    if (null == closure_0) {
      let items = [];
    } else {
      items = [];
      HermesBuiltin.arraySpread(stateFromStoresArray.getGuildRingingUsers(tmp), 0);
    }
    return items;
  });
  const obj2 = _require(589);
  const items2 = [mergeGuildAvatar];
  stateFromStoresArray = _require(589).useStateFromStoresArray(items2, () => {
    const mapped = noop.map((arg0) => user.getUser(arg0));
    return mapped.filter(id(voiceStates[13]).isNotNullish);
  });
  const obj3 = _require(589);
  const items3 = [ensureGuildLoaded];
  const stateFromStores1 = _require(589).useStateFromStores(items3, () => outer1_7.getBasicChannel(closure_0));
  const items4 = [stateFromStoresArray, ];
  let guild_id;
  if (stateFromStores1 != null) {
    guild_id = stateFromStores1.guild_id;
  }
  items4[1] = guild_id;
  const memo = React.useMemo(() => stateFromStoresArray.map((id) => {
    const obj = { voiceState: null, user: null, member: null, nick: null, comparator: null, _isPlaceholder: false };
    obj[0] = new outer1_5(id.id);
    obj[1] = id;
    let guild_id;
    if (isVoiceMuted != null) {
      guild_id = tmp2.guild_id;
    }
    let member = null;
    if (null != guild_id) {
      let guild_id1;
      if (tmp2 != null) {
        guild_id1 = tmp2.guild_id;
      }
      member = outer1_8.getMember(guild_id1, id.id);
    }
    obj[2] = member;
    ({ globalName: obj[3], globalName: obj[4] } = id);
    return obj;
  }), items4);
  const items5 = [stateFromStores, voiceStates, memo];
  return React.useMemo(() => (function syncChannelVoiceStates(stateFromStores, closure_1, memo) {
    if (null == stateFromStores) {
      if (0 === memo.length) {
        return closure_1;
      }
    }
    const items = [];
    const set = new Set();
    const iter = closure_1[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let arr = items.push(nextResult);
      let addResult = set.add(nextResult.user.id);
      continue;
    }
    if (stateFromStores != null) {
      const item = stateFromStores.forEach((arg0) => {
        items.splice(items(set[11]).sortedIndexBy(items, arg0, (comparator) => comparator.comparator), 0, arg0);
      });
    }
    if (memo.length > 0) {
      const item1 = memo.forEach((user) => {
        if (!set.has(user.user.id)) {
          items.splice(items(set[11]).sortedIndexBy(items, user, (comparator) => comparator.comparator), 0, user);
          const obj = items(set[11]);
        }
      });
    }
    return items;
  })(stateFromStores, closure_1, memo), items5);
};
export const useDesyncedChannelParticipants = function useDesyncedChannelParticipants(arg0) {
  const _require = arg0;
  const items = [retryFailedUsers, createRTCConnection];
  return _require(589).useStateFromStores(items, () => {
    let desyncedParticipants = null;
    if (closure_0 === outer1_10.getChannelId()) {
      desyncedParticipants = outer1_9.getDesyncedParticipants();
    }
    return desyncedParticipants;
  });
};
export const useEnsureSyncedChannelParticipants = function useEnsureSyncedChannelParticipants(arg0, arg1) {
  let _require = arg1;
  _require = arg0;
  let items = [retryFailedUsers, createRTCConnection];
  stateFromStores = _require(stateFromStores[12]).useStateFromStores(items, () => {
    let desyncedParticipants = null;
    if (closure_0 === outer1_10.getChannelId()) {
      desyncedParticipants = outer1_9.getDesyncedParticipants();
    }
    return desyncedParticipants;
  });
  const items1 = [stateFromStores, arg1];
  return React.useMemo(() => {
    let tmp2 = items;
    if (null != stateFromStores) {
      tmp2 = tmp;
      if (0 !== arr.length) {
        items = [];
        HermesBuiltin.arraySpread(tmp, 0);
        const item = arr.forEach((arg0) => {
          items.splice(items(outer1_1[11]).sortedIndexBy(items, arg0, (arg0) => callback(table[14]).sortKey(arg0)), 0, arg0);
        });
        tmp2 = items;
      }
    }
    return tmp2;
  }, items1);
};
export const useIsRTCDisconnectedUIVisible = function useIsRTCDisconnectedUIVisible(arg0, id) {
  let getParticipants;
  let isVoiceMuted;
  let tmp4;
  let tmp6;
  const _require = arg0;
  const dependencyMap = id;
  const items = [stateFromStores2];
  const stateFromStores = _require(589).useStateFromStores(items, () => stateFromStores2.getId() === closure_1);
  const obj = _require(589);
  const items1 = [createRTCConnection];
  const stateFromStores1 = _require(589).useStateFromStores(items1, () => channelId.getChannelId());
  React = React.useRef(null);
  const obj2 = _require(589);
  [tmp4, getParticipants] = stateFromStores1(React.useState(false), 2);
  const tmp3 = stateFromStores1(React.useState(false), 2);
  [tmp6, isVoiceMuted] = stateFromStores1(React.useState(false), 2);
  const tmp5 = stateFromStores1(React.useState(false), 2);
  const items2 = [createRTCConnection, updateVoiceState];
  stateFromStores2 = _require(589).useStateFromStores(items2, () => {
    let isUserConnectedResult = null != closure_1;
    if (isUserConnectedResult) {
      isUserConnectedResult = null != closure_0;
    }
    if (isUserConnectedResult) {
      isUserConnectedResult = outer1_10.getChannelId() === closure_0;
    }
    if (isUserConnectedResult) {
      isUserConnectedResult = null != outer1_12.isInChannel(closure_0, tmp);
    }
    if (isUserConnectedResult) {
      isUserConnectedResult = outer1_10.isUserConnected(tmp);
    }
    return isUserConnectedResult;
  });
  const obj3 = _require(589);
  const items3 = [createRTCConnection, updateVoiceState];
  const stateFromStores3 = _require(589).useStateFromStores(items3, () => {
    let tmp2 = null != closure_1;
    if (tmp2) {
      tmp2 = null != closure_0;
    }
    if (tmp2) {
      tmp2 = outer1_10.getChannelId() === closure_0;
    }
    if (tmp2) {
      tmp2 = null != outer1_12.isInChannel(closure_0, tmp);
    }
    if (tmp2) {
      tmp2 = !outer1_10.isUserConnected(tmp);
    }
    return tmp2;
  });
  const items4 = [stateFromStores2];
  const effect = React.useEffect(() => {
    if (stateFromStores2) {
      callback2(true);
    }
  }, items4);
  const items5 = [arg0, stateFromStores1];
  const effect1 = React.useEffect(() => {
    if (stateFromStores1 !== closure_0) {
      callback2(false);
    }
  }, items5);
  const items6 = [stateFromStores3];
  const effect2 = React.useEffect(() => {
    if (stateFromStores3) {
      if (null == ref.current) {
        const _setTimeout = setTimeout;
        tmp.current = setTimeout(() => {
          noop.current = null;
          callback(true);
        }, 250);
      }
      return () => {
        clearTimeout(ref.current);
        ref.current = null;
      };
    }
    clearTimeout(ref.current);
    ref.current = null;
    callback(false);
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