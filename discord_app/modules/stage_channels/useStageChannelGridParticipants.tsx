// discord_app/modules/stage_channels/useStageChannelGridParticipants.tsx
import _mod12 from "../../../_runtime/metro/00012__.js";
import c from "../../../_runtime/00576_c.js";
import StageChannelParticipants from "StageChannelParticipants.tsx";
import StageChannelParticipantStoreHooks from "StageChannelParticipantStoreHooks.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__.js";
import noop from "../../../_runtime/metro/00019__.js";
import ChannelRTCStore from "../calls/ChannelRTCStore.tsx";
import StageChannelParticipantStore from "StageChannelParticipantStore.tsx";

const require = globalThis.__r;

require = fn;
const constants = {
  SELECTED: 0,
  [0]: "SELECTED",
  SPEAKER: 1,
  [1]: "SPEAKER",
  AUDIENCE: 2,
  [2]: "AUDIENCE",
  MEDIA: 3,
  [3]: "MEDIA",
};
fn(558);
const ReactCompilerGating = fn(558);
let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useThrottleDurationForChannel(arg0) {
      const cResult = c.c(3);
      const stageParticipantsCount = StageChannelParticipantStoreHooks.useStageParticipantsCount(
        arg0,
        StageChannelParticipants.StageChannelParticipantNamedIndex.AUDIENCE,
      );
      [tmp4, dependencyMap] = noop.useState(false);
      if (cResult[0] !== stageParticipantsCount) {
        const fn = function s() {
          if (stageParticipantsCount > 100) {
            dependencyMap(true);
          } else if (tmp < 75) {
            dependencyMap(false);
          }
        };
        const items = [stageParticipantsCount];
        cResult[0] = stageParticipantsCount;
        cResult[1] = fn;
        cResult[2] = items;
        let tmp6 = items;
        let tmp5 = fn;
      } else {
        tmp5 = cResult[1];
        tmp6 = cResult[2];
      }
      const effect = noop.useEffect(tmp5, tmp6);
      let num3 = 0;
      if (tmp4) {
        num3 = 5000;
      }
      return num3;
    }
  : function useThrottleDurationForChannel(arg0) {
      const stageParticipantsCount = StageChannelParticipantStoreHooks.useStageParticipantsCount(
        arg0,
        StageChannelParticipants.StageChannelParticipantNamedIndex.AUDIENCE,
      );
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
function useStageChannelParticipantsList(arg0, arg1, arg2) {
  _require = arg0;
  dependencyMap = arg1;
  closure_2 = arg2;
  const items = [StageChannelParticipantStore];
  const items1 = [arg0];
  const stateFromStores = require("initialize").useStateFromStores(
    items,
    () => {
      const items = [closure_0, StageChannelParticipantStore.getParticipantsVersion(closure_0)];
      return items;
    },
    items1,
    require("SecondaryIndexMapUtils").isVersionEqual,
  );
  const obj = require("initialize");
  const items2 = [stateFromStores1];
  const items3 = [arg0];
  stateFromStores1 = require("initialize").useStateFromStores(
    items2,
    () => ChannelRTCStore.getSelectedParticipantId(closure_0),
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
      let mutableParticipants = StageChannelParticipantStore.getMutableParticipants(
        items,
        closure_0(5955).StageChannelParticipantNamedIndex.SPEAKER,
      );
      const iter = mutableParticipants[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp10 = nextResult;
        if (nextResult.type !== closure_0(5955).StageChannelParticipantTypes.STREAM) {
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
    const items5 = [
      closure_0(5955).StageChannelParticipantNamedIndex.SPEAKER,
      closure_0(5955).StageChannelParticipantNamedIndex.AUDIENCE,
    ];
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
      const tmpResult = _mod12;
    });
    pushSection(items2, 1, false);
    const items6 = [items, items1];
    return items6;
  }, items4);
}
const size = fn(2);
const result = size.fileFinishedImporting("modules/stage_channels/useStageChannelGridParticipants.tsx");

export { useStageChannelParticipantsList };
export const useThrottleDurationForChannel = tmp2;
export const useStageChannelParticipantsListThrottled = ReactCompilerGating.isReactCompilerEnabled()
  ? function useStageChannelParticipantsListThrottled(arg0, arg1, arg2, arg3) {
      const cResult = require("c").c(13);
      _require = arg0;
      dependencyMap = arg1;
      _slicedToArray = tmp4;
      const obj = require("c");
      const items = [StageChannelParticipantStore];
      const items1 = [arg0];
      const stateFromStores = require("initialize").useStateFromStores(
        items,
        () => {
          const items = [closure_0, StageChannelParticipantStore.getParticipantsVersion(closure_0)];
          return items;
        },
        items1,
        tmp(5962).isVersionEqual,
      );
      const tmpResult = require("initialize");
      const items2 = [stateFromStores1];
      const items3 = [arg0];
      stateFromStores1 = require("initialize").useStateFromStores(
        items2,
        () => ChannelRTCStore.getSelectedParticipantId(closure_0),
        items3,
      );
      const items4 = [stateFromStores, arg1, stateFromStores1, undefined !== arg3 && arg3, arg0];
      const memo = stateFromStores.useMemo(() => {
        const items = [];
        const items1 = [];
        let num = -1;
        c2 = -1;
        const items2 = [];
        if (c2) {
          let mutableParticipants = StageChannelParticipantStore.getMutableParticipants(
            items,
            closure_0(5955).StageChannelParticipantNamedIndex.SPEAKER,
          );
          const iter = mutableParticipants[Symbol.iterator]();
          const nextResult = iter.next();
          while (iter !== undefined) {
            let tmp10 = nextResult;
            if (nextResult.type !== closure_0(5955).StageChannelParticipantTypes.STREAM) {
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
        const items5 = [
          closure_0(5955).StageChannelParticipantNamedIndex.SPEAKER,
          closure_0(5955).StageChannelParticipantNamedIndex.AUDIENCE,
        ];
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
          const tmpResult = _mod12;
        });
        pushSection(items2, 1, false);
        const items6 = [items, items1];
        return items6;
      }, items4);
      const tmp8 = _slicedToArray;
      const tmpResult3 = require("initialize");
      [tmp10, tmp11] = memo;
      const tmp12 = arg1[require("StageChannelParticipants").StageChannelParticipantNamedIndex.AUDIENCE];
      if (cResult[0] !== tmp12) {
        const items5 = [tmp12];
        cResult[0] = tmp12;
        cResult[1] = items5;
        let tmp13 = items5;
      } else {
        tmp13 = cResult[1];
      }
      const tmp9 = _slicedToArray(memo, 2);
      const tmpResult4 = require("useThrottle");
      [tmp15, tmp16] = tmp8(require("useThrottle").useThrottledState(memo, arg2, tmp13), 2);
      if (undefined !== arg3 && arg3) {
        let SELECTED = constants.MEDIA;
        let tmp18 = constants;
      } else {
        SELECTED = constants.SELECTED;
        tmp18 = constants;
      }
      if (cResult[2] === tmp10[SELECTED]) {
        if (cResult[3] === tmp20) {
          if (cResult[4] === tmp21) {
            let tmp22 = cResult[5];
          }
          const tmp23 = tmp11[tmp4 ? tmp18.MEDIA : tmp18.SELECTED];
          if (cResult[6] === tmp23) {
            if (cResult[7] === tmp24) {
              if (cResult[8] === tmp25) {
                let tmp26 = cResult[9];
              }
              if (cResult[10] === tmp22) {
                if (cResult[11] === tmp26) {
                  let tmp27 = cResult[12];
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
      const tmp8Result = tmp8(require("useThrottle").useThrottledState(memo, arg2, tmp13), 2);
    }
  : function useStageChannelParticipantsListThrottled(arg0, arg1, arg2) {
      let flag = arg3;
      if (arg3 === undefined) {
        flag = false;
      }
      _require = arg0;
      dependencyMap = arg1;
      let items = [StageChannelParticipantStore];
      let items1 = [arg0];
      const stateFromStores = require("initialize").useStateFromStores(
        items,
        () => {
          const items = [closure_0, StageChannelParticipantStore.getParticipantsVersion(closure_0)];
          return items;
        },
        items1,
        require("SecondaryIndexMapUtils").isVersionEqual,
      );
      const obj = require("initialize");
      let items2 = [stateFromStores1];
      let items3 = [arg0];
      stateFromStores1 = require("initialize").useStateFromStores(
        items2,
        () => ChannelRTCStore.getSelectedParticipantId(closure_0),
        items3,
      );
      let items4 = [stateFromStores, arg1, stateFromStores1, flag, arg0];
      const memo = stateFromStores.useMemo(() => {
        const items = [];
        const items1 = [];
        let num = -1;
        c2 = -1;
        const items2 = [];
        if (c2) {
          let mutableParticipants = StageChannelParticipantStore.getMutableParticipants(
            items,
            closure_0(5955).StageChannelParticipantNamedIndex.SPEAKER,
          );
          const iter = mutableParticipants[Symbol.iterator]();
          const nextResult = iter.next();
          while (iter !== undefined) {
            let tmp10 = nextResult;
            if (nextResult.type !== closure_0(5955).StageChannelParticipantTypes.STREAM) {
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
        const items5 = [
          closure_0(5955).StageChannelParticipantNamedIndex.SPEAKER,
          closure_0(5955).StageChannelParticipantNamedIndex.AUDIENCE,
        ];
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
          const tmpResult = _mod12;
        });
        pushSection(items2, 1, false);
        const items6 = [items, items1];
        return items6;
      }, items4);
      const obj2 = require("initialize");
      [tmp5, tmp6] = flag(memo, 2);
      const tmp4 = flag(memo, 2);
      let items5 = [arg1[require("StageChannelParticipants").StageChannelParticipantNamedIndex.AUDIENCE]];
      const obj3 = require("useThrottle");
      [tmp8, tmp9] = flag(require("useThrottle").useThrottledState(memo, arg2, items5), 2);
      if (flag) {
        let SELECTED = constants.MEDIA;
        let tmp11 = constants;
      } else {
        SELECTED = constants.SELECTED;
        tmp11 = constants;
      }
      let items6 = [tmp5[SELECTED], tmp5[tmp11.SPEAKER], tmp8[tmp11.AUDIENCE]];
      const items7 = [items6];
      const items8 = [tmp6[flag ? tmp11.MEDIA : tmp11.SELECTED], tmp6[tmp11.SPEAKER], tmp9[tmp11.AUDIENCE]];
      items7[1] = items8;
      return items7;
    };
