// === Module 10071: useStageChannelGridParticipants ===

// Module 10071 (useStageChannelGridParticipants)
import _mod12 from "module_12" /* 12 */;
import StageChannelParticipants from "StageChannelParticipants" /* 5425 */;
import StageChannelParticipantStoreHooks from "StageChannelParticipantStoreHooks" /* 5431 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ChannelRTCStore from "ChannelRTCStore" /* 4576 */;
import StageChannelParticipantStore from "StageChannelParticipantStore" /* 5418 */;

require = fn;
let closure_6 = { SELECTED: 0, [0]: "SELECTED", SPEAKER: 1, [1]: "SPEAKER", AUDIENCE: 2, [2]: "AUDIENCE", MEDIA: 3, [3]: "MEDIA" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/stage_channels/useStageChannelGridParticipants.tsx");

export const useStageChannelParticipantsList = function useStageChannelParticipantsList(arg0, arg1, arg2) {
  _require = arg0;
  dependencyMap = arg1;
  closure_2 = arg2;
  const items = [StageChannelParticipantStore];
  const items1 = [arg0];
  const stateFromStores = require("initialize").useStateFromStores(items, () => {
    const items = [closure_0, StageChannelParticipantStore.getParticipantsVersion(closure_0)];
    return items;
  }, items1, require("SecondaryIndexMapUtils").isVersionEqual);
  const obj = require("initialize");
  const items2 = [stateFromStores1];
  const items3 = [arg0];
  stateFromStores1 = require("initialize").useStateFromStores(items2, () => ChannelRTCStore.getSelectedParticipantId(closure_0), items3);
  const items4 = [stateFromStores, arg1, stateFromStores1, arg2, arg0];
  return stateFromStores.useMemo(() => {
    const items = [];
    const items1 = [];
    let num = -1;
    c2 = -1;
    const items2 = [];
    if (c2) {
      let mutableParticipants = StageChannelParticipantStore.getMutableParticipants(items, id(memo[6]).StageChannelParticipantNamedIndex.SPEAKER);
      const iter = mutableParticipants[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp10 = nextResult;
        if (nextResult.type !== id(memo[6]).StageChannelParticipantTypes.STREAM) {
          iter.return();
          break;
        } else {
          if (tmp10.id !== stateFromStores1) {
            let arr = items2.push(tmp10);
          }
          let sum = num + 1;
          num = sum;
          c2 = sum;
          continue;
        }
        break;
      }
    }
    let participant = null;
    if (null != stateFromStores1) {
      participant = StageChannelParticipantStore.getParticipant(items, tmp21);
    }
    let speaker;
    if (participant != null) {
      speaker = participant.speaker;
    }
    if (speaker) {
      const items3 = [participant];
      let items4 = items3;
    } else {
      items4 = [];
    }
    function pushSection(items2, arg1, arg2) {
      const chunkResult = _mod12.chunk(items2, 1);
      items1.push(chunkResult);
      items.push(chunkResult.length);
    }
    pushSection(items4, 1, false);
    const items5 = [id(memo[6]).StageChannelParticipantNamedIndex.SPEAKER, id(memo[6]).StageChannelParticipantNamedIndex.AUDIENCE];
    const item = items5.forEach((item) => {
      const mutableParticipants = StageChannelParticipantStore.getMutableParticipants(stateFromStores[0], item);
      let found = mutableParticipants;
      if (item === StageChannelParticipants.StageChannelParticipantNamedIndex.SPEAKER) {
        found = mutableParticipants.filter((id, index) => {
          let tmp = id.id !== stateFromStores1;
          if (tmp) {
            tmp = index > closure_1_2;
          }
          return tmp;
        });
      }
      const chunkResult = _mod12.chunk(found, items1[item]);
      items1.push(chunkResult);
      items.push(chunkResult.length);
    });
    pushSection(items2, 1, false);
    const items6 = [items, items1];
    return items6;
  }, items4);
};
export const useThrottleDurationForChannel = function useThrottleDurationForChannel(id) {
  const stageParticipantsCount = StageChannelParticipantStoreHooks.useStageParticipantsCount(id, StageChannelParticipants.StageChannelParticipantNamedIndex.AUDIENCE);
  const tmp2 = _slicedToArray(noop.useState(false), 2);
  closure_1 = tmp2[1];
  const items = [stageParticipantsCount];
  const effect = noop.useEffect(() => {
    if (stageParticipantsCount > 100) {
      closure_1(true);
    } else if (tmp < 75) {
      closure_1(false);
    }
  }, items);
  let num = 0;
  if (tmp2[0]) {
    num = 5000;
  }
  return num;
};
export const useStageChannelParticipantsListThrottled = function useStageChannelParticipantsListThrottled(id, memo, throttleDurationForChannel, arg3) {
  let flag = arg3;
  if (arg3 === undefined) {
    flag = false;
  }
  _require = id;
  dependencyMap = memo;
  let items = [StageChannelParticipantStore];
  let items1 = [id];
  const stateFromStores = require("initialize").useStateFromStores(items, () => {
    const items = [closure_0, StageChannelParticipantStore.getParticipantsVersion(closure_0)];
    return items;
  }, items1, require("SecondaryIndexMapUtils").isVersionEqual);
  const obj = require("initialize");
  let items2 = [stateFromStores1];
  let items3 = [id];
  stateFromStores1 = require("initialize").useStateFromStores(items2, () => ChannelRTCStore.getSelectedParticipantId(closure_0), items3);
  let items4 = [stateFromStores, memo, stateFromStores1, flag, id];
  memo = stateFromStores.useMemo(() => {
    const items = [];
    const items1 = [];
    let num = -1;
    c2 = -1;
    const items2 = [];
    if (c2) {
      let mutableParticipants = StageChannelParticipantStore.getMutableParticipants(items, id(memo[6]).StageChannelParticipantNamedIndex.SPEAKER);
      const iter = mutableParticipants[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp10 = nextResult;
        if (nextResult.type !== id(memo[6]).StageChannelParticipantTypes.STREAM) {
          iter.return();
          break;
        } else {
          if (tmp10.id !== stateFromStores1) {
            let arr = items2.push(tmp10);
          }
          let sum = num + 1;
          num = sum;
          c2 = sum;
          continue;
        }
        break;
      }
    }
    let participant = null;
    if (null != stateFromStores1) {
      participant = StageChannelParticipantStore.getParticipant(items, tmp21);
    }
    let speaker;
    if (participant != null) {
      speaker = participant.speaker;
    }
    if (speaker) {
      const items3 = [participant];
      let items4 = items3;
    } else {
      items4 = [];
    }
    function pushSection(items2, arg1, arg2) {
      const chunkResult = _mod12.chunk(items2, 1);
      items1.push(chunkResult);
      items.push(chunkResult.length);
    }
    pushSection(items4, 1, false);
    const items5 = [id(memo[6]).StageChannelParticipantNamedIndex.SPEAKER, id(memo[6]).StageChannelParticipantNamedIndex.AUDIENCE];
    const item = items5.forEach((item) => {
      const mutableParticipants = StageChannelParticipantStore.getMutableParticipants(stateFromStores[0], item);
      let found = mutableParticipants;
      if (item === StageChannelParticipants.StageChannelParticipantNamedIndex.SPEAKER) {
        found = mutableParticipants.filter((id, index) => {
          let tmp = id.id !== stateFromStores1;
          if (tmp) {
            tmp = index > closure_1_2;
          }
          return tmp;
        });
      }
      const chunkResult = _mod12.chunk(found, items1[item]);
      items1.push(chunkResult);
      items.push(chunkResult.length);
    });
    pushSection(items2, 1, false);
    const items6 = [items, items1];
    return items6;
  }, items4);
  const obj2 = require("initialize");
  [tmp5, tmp6] = flag(memo, 2);
  const tmp4 = flag(memo, 2);
  let items5 = [memo[require("StageChannelParticipants").StageChannelParticipantNamedIndex.AUDIENCE]];
  const obj3 = require("useThrottle");
  [tmp8, tmp9] = flag(require("useThrottle").useThrottledState(memo, throttleDurationForChannel, items5), 2);
  if (flag) {
    let SELECTED = tmp10.MEDIA;
    let tmp11 = tmp10;
  } else {
    SELECTED = tmp10.SELECTED;
    tmp11 = tmp10;
  }
  let items6 = [tmp5[SELECTED], tmp5[tmp11.SPEAKER], tmp8[tmp11.AUDIENCE]];
  const items7 = [items6, ];
  const items8 = [tmp6[flag ? tmp11.MEDIA : tmp11.SELECTED], tmp6[tmp11.SPEAKER], tmp9[tmp11.AUDIENCE]];
  items7[1] = items8;
  return items7;
};