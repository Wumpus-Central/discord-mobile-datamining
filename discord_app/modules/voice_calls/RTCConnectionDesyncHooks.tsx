// discord_app/modules/voice_calls/RTCConnectionDesyncHooks.tsx
import closure_2 from "../../../_runtime/metro/00032__slicedToArray.js";
import closure_3 from "../../../_runtime/00019_noop.js";
import closure_4 from "../calls/ChannelRTCStore.tsx";
import closure_5 from "../../records/VoiceStateRecord.tsx";
import closure_6 from "../../stores/AuthenticationStore.tsx";
import closure_7 from "../../stores/ChannelStore.tsx";
import closure_8 from "../../stores/GuildMemberStore.tsx";
import closure_9 from "../../stores/RTCConnectionDesyncStore.tsx";
import closure_10 from "../../stores/RTCConnectionStore.tsx";
import closure_11 from "../../stores/UserStore.tsx";
import closure_12 from "../../stores/VoiceStateStore.tsx";
import { initialize } from "../../../discord_common/js/packages/flux/index.tsx";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/voice_calls/RTCConnectionDesyncHooks.tsx");

export const useEnsureSyncedChannelVoiceStates = function useEnsureSyncedChannelVoiceStates(id, voiceStates) {
  const _require = id;
  dependencyMap = voiceStates;
  let items = [closure_9, closure_10];
  const stateFromStores = _initialize.useStateFromStores(items, () => {
    let desyncedVoiceStates = null;
    if (closure_0 === closure_1_10.getChannelId()) {
      desyncedVoiceStates = closure_1_9.getDesyncedVoiceStates();
    }
    return desyncedVoiceStates;
  });
  let obj = _initialize;
  const items1 = [stateFromStoresArray];
  const React = _initialize.useStateFromStoresArray(items1, () => {
    if (null == closure_0) {
      let items = [];
    } else {
      items = [];
      HermesBuiltin.arraySpread(stateFromStoresArray.getGuildRingingUsers(tmp), 0);
    }
    return items;
  });
  const obj2 = _initialize;
  const items2 = [closure_11];
  stateFromStoresArray = _initialize.useStateFromStoresArray(items2, () => {
    const mapped = closure_3.map((arg0) => user.getUser(arg0));
    return mapped.filter(id(voiceStates[13]).isNotNullish);
  });
  const obj3 = _initialize;
  const items3 = [closure_7];
  const stateFromStores1 = _initialize.useStateFromStores(items3, () => closure_1_7.getBasicChannel(closure_0));
  const items4 = [stateFromStoresArray, ];
  let guild_id;
  if (stateFromStores1 != null) {
    guild_id = stateFromStores1.guild_id;
  }
  items4[1] = guild_id;
  const memo = React.useMemo(() => stateFromStoresArray.map((id) => {
    const obj = { voiceState: new closure_1_5(id.id), user: id, member: null, nick: null, comparator: null, _isPlaceholder: false };
    let guild_id;
    if (closure_5 != null) {
      guild_id = tmp2.guild_id;
    }
    let member = null;
    if (null != guild_id) {
      let guild_id1;
      if (tmp2 != null) {
        guild_id1 = tmp2.guild_id;
      }
      member = closure_1_8.getMember(guild_id1, id.id);
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
  const items = [closure_9, closure_10];
  return _initialize.useStateFromStores(items, () => {
    let desyncedParticipants = null;
    if (closure_0 === closure_1_10.getChannelId()) {
      desyncedParticipants = closure_1_9.getDesyncedParticipants();
    }
    return desyncedParticipants;
  });
};
export const useEnsureSyncedChannelParticipants = function useEnsureSyncedChannelParticipants(arg0, arg1) {
  let _require = arg1;
  _require = arg0;
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
      if (0 !== arr.length) {
        items = [];
        HermesBuiltin.arraySpread(tmp, 0);
        const item = arr.forEach((arg0) => {
          items.splice(items(closure_1_1[11]).sortedIndexBy(items, arg0, (arg0) => callback(table[14]).sortKey(arg0)), 0, arg0);
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
  const stateFromStores = _initialize.useStateFromStores(items, () => stateFromStores2.getId() === closure_1);
  const obj = _initialize;
  const items1 = [closure_10];
  const stateFromStores1 = _initialize.useStateFromStores(items1, () => channelId.getChannelId());
  React = React.useRef(null);
  const obj2 = _initialize;
  [tmp4, closure_4] = stateFromStores1(React.useState(false), 2);
  const tmp3 = stateFromStores1(React.useState(false), 2);
  [tmp6, closure_5] = stateFromStores1(React.useState(false), 2);
  const tmp5 = stateFromStores1(React.useState(false), 2);
  const items2 = [closure_10, closure_12];
  stateFromStores2 = _initialize.useStateFromStores(items2, () => {
    let isUserConnectedResult = null != closure_1;
    if (isUserConnectedResult) {
      isUserConnectedResult = null != closure_0;
    }
    if (isUserConnectedResult) {
      isUserConnectedResult = closure_1_10.getChannelId() === closure_0;
    }
    if (isUserConnectedResult) {
      isUserConnectedResult = null != closure_1_12.isInChannel(closure_0, tmp);
    }
    if (isUserConnectedResult) {
      isUserConnectedResult = closure_1_10.isUserConnected(tmp);
    }
    return isUserConnectedResult;
  });
  const obj3 = _initialize;
  const items3 = [closure_10, closure_12];
  const stateFromStores3 = _initialize.useStateFromStores(items3, () => {
    let tmp2 = null != closure_1;
    if (tmp2) {
      tmp2 = null != closure_0;
    }
    if (tmp2) {
      tmp2 = closure_1_10.getChannelId() === closure_0;
    }
    if (tmp2) {
      tmp2 = null != closure_1_12.isInChannel(closure_0, tmp);
    }
    if (tmp2) {
      tmp2 = !closure_1_10.isUserConnected(tmp);
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