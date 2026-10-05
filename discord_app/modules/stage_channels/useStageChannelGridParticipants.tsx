// === Module 9754: useStageChannelGridParticipants ===

// Module 9754 (useStageChannelGridParticipants)
import _mod12 from "module_12" /* 12 */;
import react2 from "react" /* 576 */;
import StageChannelParticipants from "StageChannelParticipants" /* 5582 */;
import StageChannelParticipantStoreHooks from "StageChannelParticipantStoreHooks" /* 5588 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ChannelRTCStore from "ChannelRTCStore" /* 4906 */;
import StageChannelParticipantStore from "StageChannelParticipantStore" /* 5575 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

const f101539 = () => {
  const items = [closure_0, StageChannelParticipantStore.getParticipantsVersion(closure_0)];
  return items;
};
const f101540 = () => ChannelRTCStore.getSelectedParticipantId(closure_0);
let _slicedToArray = _slicedToArray_mod;
const constants = { SELECTED: 0, [0]: "SELECTED", SPEAKER: 1, [1]: "SPEAKER", AUDIENCE: 2, [2]: "AUDIENCE", MEDIA: 3, [3]: "MEDIA" };
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_129_1;
  let tmp4;
  let tmp5;
  let tmp6;
  const obj = react2;
  const cResult = obj.c(3);
  const obj2 = StageChannelParticipantStoreHooks;
  const stageParticipantsCount = obj2.useStageParticipantsCount(arg0, StageChannelParticipants.StageChannelParticipantNamedIndex.AUDIENCE);
  [tmp4, closure_129_1] = _slicedToArray(react.useState(false), 2);
  const tmp3 = _slicedToArray(react.useState(false), 2);
  if (cResult[0] !== stageParticipantsCount) {
    const fn = function s() {
      if (stageParticipantsCount > 100) {
        closure_1_1(true);
      } else if (tmp < 75) {
        closure_1_1(false);
      }
    };
    const items = [stageParticipantsCount];
    cResult[0] = stageParticipantsCount;
    cResult[1] = fn;
    cResult[2] = items;
    tmp6 = items;
    tmp5 = fn;
  } else {
    tmp5 = cResult[1];
    tmp6 = cResult[2];
  }
  const effect = react.useEffect(tmp5, tmp6);
  let num3 = 0;
  if (tmp4) {
    num3 = 5000;
  }
  return num3;
}) : ((arg0) => {
  let closure_1;
  let first;
  const obj = StageChannelParticipantStoreHooks;
  const stageParticipantsCount = obj.useStageParticipantsCount(arg0, StageChannelParticipants.StageChannelParticipantNamedIndex.AUDIENCE);
  [first, closure_1] = react.useState(false);
  const items = [stageParticipantsCount];
  const effect = react.useEffect(() => {
    if (stageParticipantsCount > 100) {
      closure_1(true);
    } else if (tmp < 75) {
      closure_1(false);
    }
  }, items);
  let num = 0;
  if (first) {
    num = 5000;
  }
  return num;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1, arg2, arg3) => {
  let SELECTED;
  let closure_0;
  let closure_1;
  let closure_2;
  let stateFromStores1;
  let tmp10;
  let tmp11;
  let tmp13;
  let tmp15;
  let tmp16;
  let tmp18;
  const obj = require("react");
  const cResult = obj.c(13);
  _require = arg0;
  dependencyMap = arg1;
  _slicedToArray = tmp4;
  const items = [StageChannelParticipantStore];
  const items1 = [arg0];
  const tmpResult = require("get initialized");
  const stateFromStores = tmpResult.useStateFromStores(items, f101539, items1, tmp(5589).isVersionEqual);
  const items2 = [stateFromStores1];
  const items3 = [arg0];
  const tmpResult3 = require("get initialized");
  stateFromStores1 = tmpResult3.useStateFromStores(items2, f101540, items3);
  const items4 = [stateFromStores, arg1, stateFromStores1, undefined !== arg3 && arg3, arg0];
  const memo = stateFromStores.useMemo(() => {
    let items4;
    const items = [];
    const items1 = [];
    let num = -1;
    let c2 = -1;
    const items2 = [];
    let tmp = c2;
    if (tmp) {
      let mutableParticipants = StageChannelParticipantStore.getMutableParticipants(items, closure_0(items1[6]).StageChannelParticipantNamedIndex.SPEAKER);
      const iter = mutableParticipants[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp11 = nextResult;
        if (nextResult.type !== closure_0(items1[6]).StageChannelParticipantTypes.STREAM) {
          iter.return();
          break;
        } else {
          if (tmp11.id !== stateFromStores1) {
            let arr = items2.push(tmp11);
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
      participant = StageChannelParticipantStore.getParticipant(items, tmp22);
    }
    let speaker;
    if (participant != null) {
      speaker = participant.speaker;
    }
    if (speaker) {
      const items3 = [participant];
      items4 = items3;
    } else {
      items4 = [];
    }
    function pushSection(items2, arg1, arg2) {
      const obj = _mod12;
      const chunkResult = obj.chunk(items2, 1);
      items1.push(chunkResult);
      items.push(chunkResult.length);
    }
    pushSection(items4, 1, false);
    const items5 = [closure_0(items1[6]).StageChannelParticipantNamedIndex.SPEAKER, closure_0(items1[6]).StageChannelParticipantNamedIndex.AUDIENCE];
    const item = items5.forEach((item) => {
      const mutableParticipants = StageChannelParticipantStore.getMutableParticipants(stateFromStores[0], item);
      const tmp = items1[item];
      let found = mutableParticipants;
      if (item === StageChannelParticipants.StageChannelParticipantNamedIndex.SPEAKER) {
        found = mutableParticipants.filter((id, index) => id.id !== stateFromStores1 && index > closure_1_2);
      }
      const tmp2Result = _mod12;
      const chunkResult = tmp2Result.chunk(found, tmp);
      items1.push(chunkResult);
      items.push(chunkResult.length);
    });
    pushSection(items2, 1, false);
    const items6 = [items, items1];
    return items6;
  }, items4);
  [tmp10, tmp11] = memo;
  _slicedToArray(memo, 2);
  const tmp12 = arg1[require("StageChannelParticipants").StageChannelParticipantNamedIndex.AUDIENCE];
  if (cResult[0] !== tmp12) {
    const items5 = [tmp12];
    cResult[0] = tmp12;
    cResult[1] = items5;
    tmp13 = items5;
  } else {
    tmp13 = cResult[1];
  }
  const tmpResult4 = require("useThrottle");
  [tmp15, tmp16] = _slicedToArray(tmpResult4.useThrottledState(memo, arg2, tmp13), 2);
  _slicedToArray(tmpResult4.useThrottledState(memo, arg2, tmp13), 2);
  if (undefined !== arg3 && arg3) {
    SELECTED = constants.MEDIA;
    tmp18 = constants;
  } else {
    SELECTED = constants.SELECTED;
    tmp18 = constants;
  }
  if (cResult[2] === tmp10[SELECTED]) {
    if (cResult[3] === tmp10[tmp18.SPEAKER]) {
      let tmp22;
      if (cResult[4] === tmp15[tmp18.AUDIENCE]) {
        tmp22 = cResult[5];
      }
      const tmp23 = tmp11[undefined !== arg3 && arg3 ? tmp18.MEDIA : tmp18.SELECTED];
      if (cResult[6] === tmp23) {
        if (cResult[7] === tmp11[tmp18.SPEAKER]) {
          let tmp26;
          if (cResult[8] === tmp16[tmp18.AUDIENCE]) {
            tmp26 = cResult[9];
          }
          if (cResult[10] === tmp22) {
            let tmp27;
            if (cResult[11] === tmp26) {
              tmp27 = cResult[12];
            }
            return tmp27;
          }
          const items6 = [tmp22, tmp26];
          cResult[10] = tmp22;
          cResult[11] = tmp26;
          cResult[12] = items6;
          tmp27 = items6;
        }
      }
      const items7 = [tmp23, tmp11[tmp18.SPEAKER], tmp16[tmp18.AUDIENCE]];
      cResult[6] = tmp23;
      cResult[7] = tmp11[tmp18.SPEAKER];
      cResult[8] = tmp16[tmp18.AUDIENCE];
      cResult[9] = items7;
      tmp26 = items7;
    }
  }
  const items8 = [tmp10[SELECTED], tmp10[tmp18.SPEAKER], tmp15[tmp18.AUDIENCE]];
  cResult[2] = tmp10[SELECTED];
  cResult[3] = tmp10[tmp18.SPEAKER];
  cResult[4] = tmp15[tmp18.AUDIENCE];
  cResult[5] = items8;
  tmp22 = items8;
}) : ((arg0, arg1, arg2) => {
  let SELECTED;
  let closure_0;
  let closure_1;
  let stateFromStores1;
  let tmp10;
  let tmp12;
  let tmp5;
  let tmp6;
  let tmp9;
  let flag = arg3;
  if (arg3 === undefined) {
    flag = false;
  }
  _require = arg0;
  dependencyMap = arg1;
  let obj = require("get initialized");
  let items = [StageChannelParticipantStore];
  let items1 = [arg0];
  const stateFromStores = obj.useStateFromStores(items, f101539, items1, require("SecondaryIndexMapUtils").isVersionEqual);
  let items2 = [stateFromStores1];
  let items3 = [arg0];
  const obj2 = require("get initialized");
  stateFromStores1 = obj2.useStateFromStores(items2, f101540, items3);
  let items4 = [stateFromStores, arg1, stateFromStores1, flag, arg0];
  const memo = stateFromStores.useMemo(() => {
    let items4;
    const items = [];
    const items1 = [];
    let num = -1;
    let c2 = -1;
    const items2 = [];
    let tmp = c2;
    if (tmp) {
      let mutableParticipants = StageChannelParticipantStore.getMutableParticipants(items, closure_0(items1[6]).StageChannelParticipantNamedIndex.SPEAKER);
      const iter = mutableParticipants[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp11 = nextResult;
        if (nextResult.type !== closure_0(items1[6]).StageChannelParticipantTypes.STREAM) {
          iter.return();
          break;
        } else {
          if (tmp11.id !== stateFromStores1) {
            let arr = items2.push(tmp11);
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
      participant = StageChannelParticipantStore.getParticipant(items, tmp22);
    }
    let speaker;
    if (participant != null) {
      speaker = participant.speaker;
    }
    if (speaker) {
      const items3 = [participant];
      items4 = items3;
    } else {
      items4 = [];
    }
    function pushSection(items2, arg1, arg2) {
      const obj = _mod12;
      const chunkResult = obj.chunk(items2, 1);
      items1.push(chunkResult);
      items.push(chunkResult.length);
    }
    pushSection(items4, 1, false);
    const items5 = [closure_0(items1[6]).StageChannelParticipantNamedIndex.SPEAKER, closure_0(items1[6]).StageChannelParticipantNamedIndex.AUDIENCE];
    const item = items5.forEach((item) => {
      const mutableParticipants = StageChannelParticipantStore.getMutableParticipants(stateFromStores[0], item);
      const tmp = items1[item];
      let found = mutableParticipants;
      if (item === StageChannelParticipants.StageChannelParticipantNamedIndex.SPEAKER) {
        found = mutableParticipants.filter((id, index) => id.id !== stateFromStores1 && index > closure_1_2);
      }
      const tmp2Result = _mod12;
      const chunkResult = tmp2Result.chunk(found, tmp);
      items1.push(chunkResult);
      items.push(chunkResult.length);
    });
    pushSection(items2, 1, false);
    const items6 = [items, items1];
    return items6;
  }, items4);
  [tmp5, tmp6] = flag(memo, 2);
  flag(memo, 2);
  const useThrottledState = require("useThrottle").useThrottledState;
  const tmp7 = require("useThrottle");
  let items5 = [arg1[require("StageChannelParticipants").StageChannelParticipantNamedIndex.AUDIENCE]];
  [tmp9, tmp10] = flag(useThrottledState(memo, arg2, items5), 2);
  const tmp8 = flag(useThrottledState(memo, arg2, items5), 2);
  if (flag) {
    SELECTED = constants.MEDIA;
    tmp12 = constants;
  } else {
    SELECTED = constants.SELECTED;
    tmp12 = constants;
  }
  let items6 = [tmp5[SELECTED], tmp5[tmp12.SPEAKER], tmp9[tmp12.AUDIENCE]];
  const items7 = [items6, ];
  const items8 = [tmp6[flag ? tmp12.MEDIA : tmp12.SELECTED], tmp6[tmp12.SPEAKER], tmp10[tmp12.AUDIENCE]];
  items7[1] = items8;
  return items7;
});
function useStageChannelParticipantsList(arg0, arg1, arg2) {
  let closure_0;
  let closure_1;
  let stateFromStores1;
  _require = arg0;
  dependencyMap = arg1;
  let closure_2 = arg2;
  const items = [StageChannelParticipantStore];
  const items1 = [arg0];
  const obj = require("get initialized");
  const stateFromStores = obj.useStateFromStores(items, f101539, items1, require("SecondaryIndexMapUtils").isVersionEqual);
  const items2 = [stateFromStores1];
  const items3 = [arg0];
  const obj2 = require("get initialized");
  stateFromStores1 = obj2.useStateFromStores(items2, f101540, items3);
  const items4 = [stateFromStores, arg1, stateFromStores1, arg2, arg0];
  return stateFromStores.useMemo(() => {
    let items4;
    const items = [];
    const items1 = [];
    let num = -1;
    let c2 = -1;
    const items2 = [];
    let tmp = c2;
    if (tmp) {
      let mutableParticipants = StageChannelParticipantStore.getMutableParticipants(items, closure_0(items1[6]).StageChannelParticipantNamedIndex.SPEAKER);
      const iter = mutableParticipants[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp11 = nextResult;
        if (nextResult.type !== closure_0(items1[6]).StageChannelParticipantTypes.STREAM) {
          iter.return();
          break;
        } else {
          if (tmp11.id !== stateFromStores1) {
            let arr = items2.push(tmp11);
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
      participant = StageChannelParticipantStore.getParticipant(items, tmp22);
    }
    let speaker;
    if (participant != null) {
      speaker = participant.speaker;
    }
    if (speaker) {
      const items3 = [participant];
      items4 = items3;
    } else {
      items4 = [];
    }
    function pushSection(items2, arg1, arg2) {
      const obj = _mod12;
      const chunkResult = obj.chunk(items2, 1);
      items1.push(chunkResult);
      items.push(chunkResult.length);
    }
    pushSection(items4, 1, false);
    const items5 = [closure_0(items1[6]).StageChannelParticipantNamedIndex.SPEAKER, closure_0(items1[6]).StageChannelParticipantNamedIndex.AUDIENCE];
    const item = items5.forEach((item) => {
      const mutableParticipants = StageChannelParticipantStore.getMutableParticipants(stateFromStores[0], item);
      const tmp = items1[item];
      let found = mutableParticipants;
      if (item === StageChannelParticipants.StageChannelParticipantNamedIndex.SPEAKER) {
        found = mutableParticipants.filter((id, index) => id.id !== stateFromStores1 && index > closure_1_2);
      }
      const tmp2Result = _mod12;
      const chunkResult = tmp2Result.chunk(found, tmp);
      items1.push(chunkResult);
      items.push(chunkResult.length);
    });
    pushSection(items2, 1, false);
    const items6 = [items, items1];
    return items6;
  }, items4);
}
const result = size.fileFinishedImporting("modules/stage_channels/useStageChannelGridParticipants.tsx");

export { useStageChannelParticipantsList };
export const useThrottleDurationForChannel = tmp2;
export const useStageChannelParticipantsListThrottled = tmp3;