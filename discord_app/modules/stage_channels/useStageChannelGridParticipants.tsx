// discord_app/modules/stage_channels/useStageChannelGridParticipants.tsx
import closure_2 from "../../../_runtime/metro/00032__slicedToArray.js";
import closure_3 from "../../../_runtime/00019_noop.js";
import closure_4 from "../calls/ChannelRTCStore.tsx";
import closure_5 from "StageChannelParticipantStore.tsx";
import { initialize } from "../../../discord_common/js/packages/flux/index.tsx";
import { throttleStateFn } from "../../hooks/useThrottle.tsx";

const require = arg1;
let closure_6 = {
  SELECTED: 0,
  [0]: "SELECTED",
  SPEAKER: 1,
  [1]: "SPEAKER",
  AUDIENCE: 2,
  [2]: "AUDIENCE",
  MEDIA: 3,
  [3]: "MEDIA",
};
const result = require("set").fileFinishedImporting("modules/stage_channels/useStageChannelGridParticipants.tsx");

export const useStageChannelParticipantsList = function useStageChannelParticipantsList(arg0, arg1, arg2) {
  const _require = arg0;
  dependencyMap = arg1;
  closure_2 = arg2;
  const items = [closure_5];
  const items1 = [arg0];
  const stateFromStores = require("../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(
    items,
    () => {
      const items = [closure_0, closure_1_5.getParticipantsVersion(closure_0)];
      return items;
    },
    items1,
    require("../../utils/SecondaryIndexMapUtils.tsx").isVersionEqual,
  );
  const obj = initialize;
  const items2 = [stateFromStores1];
  const items3 = [arg0];
  stateFromStores1 = require("../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(
    items2,
    () => stateFromStores1.getSelectedParticipantId(closure_0),
    items3,
  );
  const items4 = [stateFromStores, arg1, stateFromStores1, arg2, arg0];
  return stateFromStores.useMemo(() => {
    const items = [];
    const items1 = [];
    let num = -1;
    c2 = -1;
    const items2 = [];
    if (c2) {
      let mutableParticipants = closure_1_5.getMutableParticipants(
        items,
        id(memo[6]).StageChannelParticipantNamedIndex.SPEAKER,
      );
      const iter = mutableParticipants[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp10 = nextResult;
        let tmp11 = id;
        let tmp12 = memo;
        if (nextResult.type !== id(memo[6]).StageChannelParticipantTypes.STREAM) {
          let tmp20 = iter;
          iter.return();
          break;
        } else {
          let tmp13 = nextResult;
          let tmp14 = stateFromStores1;
          let tmp15 = stateFromStores1;
          if (tmp10.id !== stateFromStores1) {
            let tmp16 = nextResult;
            let arr = items2.push(tmp10);
          }
          let tmp18 = num;
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
      participant = closure_1_5.getParticipant(items, tmp21);
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
      const chunkResult = items(items1[7]).chunk(items2, 1);
      items1.push(chunkResult);
      items.push(chunkResult.length);
    }
    pushSection(items4, 1, false);
    const items5 = [
      id(memo[6]).StageChannelParticipantNamedIndex.SPEAKER,
      id(memo[6]).StageChannelParticipantNamedIndex.AUDIENCE,
    ];
    const item = items5.forEach((SPEAKER) => {
      const mutableParticipants = closure_2_5.getMutableParticipants(closure_1_3[0], SPEAKER);
      let found = mutableParticipants;
      if (SPEAKER === items(items1[6]).StageChannelParticipantNamedIndex.SPEAKER) {
        found = mutableParticipants.filter((id) => {
          let tmp = id.id !== closure_1_4;
          if (tmp) {
            tmp = arg1 > closure_2;
          }
          return tmp;
        });
      }
      const chunkResult = items(items1[7]).chunk(found, items1[SPEAKER]);
      items1.push(chunkResult);
      items.push(chunkResult.length);
    });
    pushSection(items2, 1, false);
    const items6 = [items, items1];
    return items6;
  }, items4);
};
export const useThrottleDurationForChannel = function useThrottleDurationForChannel(id) {
  stageParticipantsCount = stageParticipantsCount(5383).useStageParticipantsCount(
    id,
    stageParticipantsCount(5377).StageChannelParticipantNamedIndex.AUDIENCE,
  );
  const tmp2 = callback(React.useState(false), 2);
  dependencyMap = tmp2[1];
  const items = [stageParticipantsCount];
  const effect = React.useEffect(() => {
    if (stageParticipantsCount > 100) {
      callback(true);
    } else if (tmp < 75) {
      callback(false);
    }
  }, items);
  let num = 0;
  if (tmp2[0]) {
    num = 5000;
  }
  return num;
};
export const useStageChannelParticipantsListThrottled = function useStageChannelParticipantsListThrottled(
  id,
  memo,
  throttleDurationForChannel,
  arg3,
) {
  let flag = arg3;
  if (arg3 === undefined) {
    flag = false;
  }
  const _require = id;
  dependencyMap = memo;
  let items = [closure_5];
  let items1 = [id];
  const stateFromStores = require("../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(
    items,
    () => {
      const items = [closure_0, closure_1_5.getParticipantsVersion(closure_0)];
      return items;
    },
    items1,
    require("../../utils/SecondaryIndexMapUtils.tsx").isVersionEqual,
  );
  const obj = initialize;
  let items2 = [stateFromStores1];
  let items3 = [id];
  stateFromStores1 = require("../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(
    items2,
    () => stateFromStores1.getSelectedParticipantId(closure_0),
    items3,
  );
  let items4 = [stateFromStores, memo, stateFromStores1, flag, id];
  memo = stateFromStores.useMemo(() => {
    const items = [];
    const items1 = [];
    let num = -1;
    c2 = -1;
    const items2 = [];
    if (c2) {
      let mutableParticipants = closure_1_5.getMutableParticipants(
        items,
        id(memo[6]).StageChannelParticipantNamedIndex.SPEAKER,
      );
      const iter = mutableParticipants[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp10 = nextResult;
        let tmp11 = id;
        let tmp12 = memo;
        if (nextResult.type !== id(memo[6]).StageChannelParticipantTypes.STREAM) {
          let tmp20 = iter;
          iter.return();
          break;
        } else {
          let tmp13 = nextResult;
          let tmp14 = stateFromStores1;
          let tmp15 = stateFromStores1;
          if (tmp10.id !== stateFromStores1) {
            let tmp16 = nextResult;
            let arr = items2.push(tmp10);
          }
          let tmp18 = num;
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
      participant = closure_1_5.getParticipant(items, tmp21);
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
      const chunkResult = items(items1[7]).chunk(items2, 1);
      items1.push(chunkResult);
      items.push(chunkResult.length);
    }
    pushSection(items4, 1, false);
    const items5 = [
      id(memo[6]).StageChannelParticipantNamedIndex.SPEAKER,
      id(memo[6]).StageChannelParticipantNamedIndex.AUDIENCE,
    ];
    const item = items5.forEach((SPEAKER) => {
      const mutableParticipants = closure_2_5.getMutableParticipants(closure_1_3[0], SPEAKER);
      let found = mutableParticipants;
      if (SPEAKER === items(items1[6]).StageChannelParticipantNamedIndex.SPEAKER) {
        found = mutableParticipants.filter((id) => {
          let tmp = id.id !== closure_1_4;
          if (tmp) {
            tmp = arg1 > closure_2;
          }
          return tmp;
        });
      }
      const chunkResult = items(items1[7]).chunk(found, items1[SPEAKER]);
      items1.push(chunkResult);
      items.push(chunkResult.length);
    });
    pushSection(items2, 1, false);
    const items6 = [items, items1];
    return items6;
  }, items4);
  const obj2 = initialize;
  [tmp5, tmp6] = flag(memo, 2);
  const tmp4 = flag(memo, 2);
  let items5 = [memo[_require(undefined, 5377).StageChannelParticipantNamedIndex.AUDIENCE]];
  const obj3 = throttleStateFn;
  [tmp8, tmp9] = flag(
    require("../../hooks/useThrottle.tsx").useThrottledState(memo, throttleDurationForChannel, items5),
    2,
  );
  if (flag) {
    let SELECTED = tmp10.MEDIA;
    let tmp11 = tmp10;
  } else {
    SELECTED = tmp10.SELECTED;
    tmp11 = tmp10;
  }
  let items6 = [tmp5[SELECTED], tmp5[tmp11.SPEAKER], tmp8[tmp11.AUDIENCE]];
  const items7 = [items6];
  const items8 = [tmp6[flag ? tmp11.MEDIA : tmp11.SELECTED], tmp6[tmp11.SPEAKER], tmp9[tmp11.AUDIENCE]];
  items7[1] = items8;
  return items7;
};
