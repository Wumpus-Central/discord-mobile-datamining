// === Module 16236: RTCConnectionDesyncHooks ===

// Module 16236 (RTCConnectionDesyncHooks)
import GlobalUtils from "GlobalUtils" /* 1369 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ChannelRTCStore from "ChannelRTCStore" /* 4576 */;
import VoiceStateRecord from "VoiceStateRecord" /* 4580 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import GuildMemberStore from "GuildMemberStore" /* 2021 */;
import RTCConnectionDesyncStore from "RTCConnectionDesyncStore" /* 13755 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4583 */;
import UserStore from "UserStore" /* 1371 */;
import VoiceStateStore from "VoiceStateStore" /* 4579 */;

require = fn;
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
  let obj = require("initialize");
  const items1 = [stateFromStoresArray];
  noop = require("initialize").useStateFromStoresArray(items1, () => {
    if (null == closure_0) {
      let items = [];
    } else {
      items = [];
      HermesBuiltin.arraySpread(ChannelRTCStore.getGuildRingingUsers(tmp), 0);
    }
    return items;
  });
  const obj2 = require("initialize");
  const items2 = [UserStore];
  stateFromStoresArray = require("initialize").useStateFromStoresArray(items2, () => {
    const mapped = closure_3.map((item) => user.getUser(item));
    return mapped.filter(GlobalUtils.isNotNullish);
  });
  const obj3 = require("initialize");
  const items3 = [ChannelStore];
  const stateFromStores1 = require("initialize").useStateFromStores(items3, () => ChannelStore.getBasicChannel(closure_0));
  const items4 = [stateFromStoresArray, ];
  let guild_id;
  if (stateFromStores1 != null) {
    guild_id = stateFromStores1.guild_id;
  }
  items4[1] = guild_id;
  const memo = noop.useMemo(() => stateFromStoresArray.map((id) => {
    const obj = { voiceState: new stateFromStores1(id.id), user: id, member: null, nick: null, comparator: null, _isPlaceholder: false };
    let guild_id;
    if (closure_1_5 != null) {
      guild_id = tmp2.guild_id;
    }
    member = null;
    if (null != guild_id) {
      let guild_id1;
      if (tmp2 != null) {
        guild_id1 = tmp2.guild_id;
      }
      member = member.getMember(guild_id1, id.id);
    }
    obj.member = member;
    ({ globalName: obj.nick, globalName: obj.comparator } = id);
    return obj;
  }), items4);
  const items5 = [stateFromStores, voiceStates, memo];
  return noop.useMemo(() => (function syncChannelVoiceStates(stateFromStores, arg1, memo) {
    if (null == stateFromStores) {
      if (0 === memo.length) {
        return arg1;
      }
    }
    const items = [];
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
        items.splice(id(12).sortedIndexBy(items, item, (comparator) => comparator.comparator), 0, item);
      });
    }
    if (memo.length > 0) {
      const item1 = memo.forEach((user) => {
        if (!set.has(user.user.id)) {
          items.splice(id(12).sortedIndexBy(items, user, (comparator) => comparator.comparator), 0, user);
          const obj = id(12);
        }
      });
    }
    return items;
  })(stateFromStores, dependencyMap, memo), items5);
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
      if (0 !== arr.length) {
        items = [];
        HermesBuiltin.arraySpread(tmp, 0);
        const item = arr.forEach((item) => {
          items.splice(items(stateFromStores[11]).sortedIndexBy(items, item, (arg0) => items(closure_1_1[14]).sortKey(arg0)), 0, item);
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
  const items = [stateFromStores2];
  const stateFromStores = require("initialize").useStateFromStores(items, () => AuthenticationStore.getId() === closure_1);
  const obj = require("initialize");
  const items1 = [RTCConnectionStore];
  const stateFromStores1 = require("initialize").useStateFromStores(items1, () => channelId.getChannelId());
  noop = noop.useRef(null);
  const obj2 = require("initialize");
  [tmp4, ChannelRTCStore] = stateFromStores1(noop.useState(false), 2);
  const tmp3 = stateFromStores1(noop.useState(false), 2);
  [tmp6, VoiceStateRecord] = stateFromStores1(noop.useState(false), 2);
  const tmp5 = stateFromStores1(noop.useState(false), 2);
  const items2 = [RTCConnectionStore, VoiceStateStore];
  stateFromStores2 = require("initialize").useStateFromStores(items2, () => {
    let isUserConnectedResult = null != closure_1;
    if (isUserConnectedResult) {
      isUserConnectedResult = null != closure_0;
    }
    if (isUserConnectedResult) {
      isUserConnectedResult = RTCConnectionStore.getChannelId() === closure_0;
    }
    if (isUserConnectedResult) {
      isUserConnectedResult = null != VoiceStateStore.isInChannel(closure_0, tmp);
    }
    if (isUserConnectedResult) {
      isUserConnectedResult = RTCConnectionStore.isUserConnected(tmp);
    }
    return isUserConnectedResult;
  });
  const obj3 = require("initialize");
  const items3 = [RTCConnectionStore, VoiceStateStore];
  const stateFromStores3 = require("initialize").useStateFromStores(items3, () => {
    let tmp2 = null != closure_1;
    if (tmp2) {
      tmp2 = null != closure_0;
    }
    if (tmp2) {
      tmp2 = RTCConnectionStore.getChannelId() === closure_0;
    }
    if (tmp2) {
      tmp2 = null != VoiceStateStore.isInChannel(closure_0, tmp);
    }
    if (tmp2) {
      tmp2 = !RTCConnectionStore.isUserConnected(tmp);
    }
    return tmp2;
  });
  const items4 = [stateFromStores2];
  const effect = noop.useEffect(() => {
    if (stateFromStores2) {
      VoiceStateRecord(true);
    }
  }, items4);
  const items5 = [arg0, stateFromStores1];
  const effect1 = noop.useEffect(() => {
    if (stateFromStores1 !== closure_0) {
      VoiceStateRecord(false);
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
    ChannelRTCStore(false);
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