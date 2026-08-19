// discord_app/modules/voice_calls/RTCConnectionDesyncHooks.tsx
import _slicedToArray from "../../../_runtime/metro/00032__slicedToArray.js";
import noop from "../../../_runtime/00019_noop.js";
import getParticipants from "../calls/ChannelRTCStore.tsx";
import isVoiceMuted from "../../records/VoiceStateRecord.tsx";
import fetchFingerprint from "../../stores/AuthenticationStore.tsx";
import ensureGuildLoaded from "../../stores/ChannelStore.tsx";
import trackCommunicationDisabled from "../../stores/GuildMemberStore.tsx";
import retryFailedUsers from "../../stores/RTCConnectionDesyncStore.tsx";
import createRTCConnection from "../../stores/RTCConnectionStore.tsx";
import mergeGuildAvatar from "../../stores/UserStore.tsx";
import updateVoiceState from "../../stores/VoiceStateStore.tsx";
import { initialize } from "../../../discord_common/js/packages/flux/index.tsx";

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/voice_calls/RTCConnectionDesyncHooks.tsx");

export const useEnsureSyncedChannelVoiceStates = function useEnsureSyncedChannelVoiceStates(id, voiceStates) {
  const _require = id;
  dependencyMap = voiceStates;
  let items = [closure_9, closure_10];
  const stateFromStores = require("../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items, () => {
    let desyncedVoiceStates = null;
    if (closure_0 === closure_1_10.getChannelId()) {
      desyncedVoiceStates = closure_1_9.getDesyncedVoiceStates();
    }
    return desyncedVoiceStates;
  });
  let obj = initialize;
  const items1 = [stateFromStoresArray];
  const React = require("../../../discord_common/js/packages/flux/index.tsx").useStateFromStoresArray(items1, () => {
    if (null == closure_0) {
      let items = [];
    } else {
      items = [];
      HermesBuiltin.arraySpread(stateFromStoresArray.getGuildRingingUsers(tmp), 0);
    }
    return items;
  });
  const obj2 = initialize;
  const items2 = [closure_11];
  stateFromStoresArray = require("../../../discord_common/js/packages/flux/index.tsx").useStateFromStoresArray(items2, () => {
    const mapped = closure_3.map((item, index) => user.getUser(item));
    return mapped.filter(id(voiceStates[13]).isNotNullish);
  });
  const obj3 = initialize;
  const items3 = [closure_7];
  const stateFromStores1 = require("../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items3, () => closure_1_7.getBasicChannel(closure_0));
  const items4 = [stateFromStoresArray, ];
  let guild_id;
  if (stateFromStores1 != null) {
    guild_id = stateFromStores1.guild_id;
  }
  items4[1] = guild_id;
  const memo = React.useMemo(() => stateFromStoresArray.map((item, index) => {
    const obj = { voiceState: new stateFromStores1(item.id), user: item, member: null, nick: null, comparator: null, _isPlaceholder: false };
    let guild_id;
    if (closure_5 != null) {
      guild_id = closure_5.guild_id;
    }
    let member = null;
    if (null != guild_id) {
      let guild_id1;
      if (closure_5 != null) {
        guild_id1 = closure_5.guild_id;
      }
      member = closure_1_8.getMember(guild_id1, item.id);
    }
    obj[2] = member;
    ({ globalName: obj[3], globalName: obj[4] } = item);
    return obj;
  }), items4);
  const items5 = [stateFromStores, voiceStates, memo];
  return React.useMemo(() => (function syncChannelVoiceStates(stateFromStores, closure_1, memo) {
    if (null == stateFromStores) {
      if (0 === memo.length) {
        return dependencyMap;
      }
    }
    const items = [];
    const set = new Set();
    const iter = dependencyMap[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let arr = items.push(nextResult);
      let addResult = set.add(nextResult.user.id);
      continue;
    }
    if (stateFromStores != null) {
      const item = stateFromStores.forEach((item, index) => {
        items.splice(items(set[11]).sortedIndexBy(items, item, (comparator) => comparator.comparator), 0, item);
      });
    }
    if (memo.length > 0) {
      const item1 = memo.forEach((item, index) => {
        if (!set.has(item.user.id)) {
          items.splice(items(set[11]).sortedIndexBy(items, item, (comparator) => comparator.comparator), 0, item);
          const obj = items(set[11]);
        }
      });
    }
    return items;
  })(stateFromStores, closure_1, memo), items5);
};
export const useDesyncedChannelParticipants = function useDesyncedChannelParticipants(arg0) {
  const _require = arg0;
  const items = [closure_9, closure_10];
  return require("../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items, () => {
    let desyncedParticipants = null;
    if (closure_0 === closure_1_10.getChannelId()) {
      desyncedParticipants = closure_1_9.getDesyncedParticipants();
    }
    return desyncedParticipants;
  });
};
export const useEnsureSyncedChannelParticipants = function useEnsureSyncedChannelParticipants(arg0, arg1) {
  const _require = arg0;
  let items = [closure_9, closure_10];
  stateFromStores = _require(stateFromStores[12]).useStateFromStores(items, () => {
    let desyncedParticipants = null;
    if (closure_0 === closure_1_10.getChannelId()) {
      desyncedParticipants = closure_1_9.getDesyncedParticipants();
    }
    return desyncedParticipants;
  });
  const items1 = [stateFromStores, arg1];
  return React.useMemo(() => {
    let tmp2 = items;
    if (null != stateFromStores) {
      tmp2 = tmp;
      if (0 !== stateFromStores.length) {
        items = [];
        HermesBuiltin.arraySpread(tmp, 0);
        const item = stateFromStores.forEach((item, index) => {
          items.splice(items(stateFromStores[11]).sortedIndexBy(items, item, (arg0) => callback(table[14]).sortKey(arg0)), 0, item);
        });
        tmp2 = items;
      }
    }
    return tmp2;
  }, items1);
};
export const useIsRTCDisconnectedUIVisible = function useIsRTCDisconnectedUIVisible(arg0, id) {
  const _require = arg0;
  dependencyMap = id;
  const items = [stateFromStores2];
  const stateFromStores = require("../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items, () => stateFromStores2.getId() === closure_1);
  const obj = initialize;
  const items1 = [closure_10];
  const stateFromStores1 = require("../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items1, () => channelId.getChannelId());
  React = React.useRef(null);
  const obj2 = initialize;
  [tmp4, closure_4] = stateFromStores1(React.useState(false), 2);
  const tmp3 = stateFromStores1(React.useState(false), 2);
  [tmp6, closure_5] = stateFromStores1(React.useState(false), 2);
  const tmp5 = stateFromStores1(React.useState(false), 2);
  const items2 = [closure_10, closure_12];
  stateFromStores2 = require("../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items2, () => {
    let isUserConnectedResult = null != closure_1;
    if (isUserConnectedResult) {
      isUserConnectedResult = null != closure_0;
    }
    if (isUserConnectedResult) {
      isUserConnectedResult = closure_1_10.getChannelId() === closure_0;
    }
    if (isUserConnectedResult) {
      isUserConnectedResult = null != closure_1_12.isInChannel(closure_0, closure_1);
    }
    if (isUserConnectedResult) {
      isUserConnectedResult = closure_1_10.isUserConnected(closure_1);
    }
    return isUserConnectedResult;
  });
  const obj3 = initialize;
  const items3 = [closure_10, closure_12];
  const stateFromStores3 = require("../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items3, () => {
    let tmp2 = null != closure_1;
    if (tmp2) {
      tmp2 = null != closure_0;
    }
    if (tmp2) {
      tmp2 = closure_1_10.getChannelId() === closure_0;
    }
    if (tmp2) {
      tmp2 = null != closure_1_12.isInChannel(closure_0, closure_1);
    }
    if (tmp2) {
      tmp2 = !closure_1_10.isUserConnected(closure_1);
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
          closure_3.current = null;
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