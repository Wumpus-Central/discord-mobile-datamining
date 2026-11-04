// === Module 13659: CheckpointActionCreators ===

// Module 13659 (CheckpointActionCreators)
import DispatcherDefault from "Dispatcher" /* 572 */;
import HTTPUtils from "HTTPUtils" /* 1282 */;
import ChannelActionCreatorsDefault from "ChannelActionCreators" /* 7625 */;
import Tracking from "Tracking" /* 13655 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import ChannelStore from "ChannelStore" /* 4990 */;
import CheckpointStore from "CheckpointStore" /* 13657 */;

require = fn;
let closure_8 = async function _fetchCheckpointData(arg0) {
  if (c5 === 2) {
    c5 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c5 = 2;
      if (0 === c4) {
        if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          const obj5 = { value, done: true };
          return obj5;
        } else {
          closure_2 = tmp3;
          closure_1 = tmp7;
          closure_129_0 = closure_0;
          let body;
          CheckpointStore.initializeIfNeeded();
          if (CheckpointStore.isFetching) {
            c5 = 3;
            const obj8 = { value: constants.FETCHING, done: true };
            return obj8;
          } else {
            DispatcherDefault.dispatch({ type: "CHECKPOINT_FETCH_START" });
            c3 = 1;
            const HTTP = HTTPUtils.HTTP;
            const obj10 = { url: constants2.CHECKPOINT, rejectWithError: true };
            c4 = 2;
            c5 = 1;
            const obj12 = { value: HTTP.get(obj10), done: false };
            return obj12;
          }
        }
      } else if (1 === tmp7) {
        c3 = 0;
        closure_130_1(closure_130_2[4]).dispatch({ type: "CHECKPOINT_FETCH_FAILED" });
        c5 = 3;
        const obj13 = { value: closure_130_6.ERROR, done: true };
        return obj13;
      } else if (arg0 === 1) {
        c5 = 3;
        throw value;
      } else if (arg0 === 2) {
        c3 = 0;
        c5 = 3;
        const obj14 = { value, done: true };
        return obj14;
      } else {
        body = value.body;
        if (null != closure_129_0) {
          const obj15 = { type: "CHECKPOINT_FETCH_SUCCESS", stats: null, globalStats: null, character: null };
          const obj4 = closure_130_1(closure_130_2[4]);
          obj15.stats = closure_130_0(closure_130_2[7]).getMockCheckpointStats(closure_129_0);
          const obj6 = closure_130_0(closure_130_2[7]);
          obj15.globalStats = closure_130_0(closure_130_2[8]).globalStatsFromServer(body.global_stats);
          obj4.dispatch(obj15);
          const SUCCESS2 = closure_130_6.SUCCESS;
          const obj7 = closure_130_0(closure_130_2[8]);
        } else {
          let statsFromServerResult = null;
          if (null != body.stats) {
            statsFromServerResult = closure_130_0(closure_130_2[8]).statsFromServer(body.stats);
            const obj = closure_130_0(closure_130_2[8]);
          }
          const obj16 = { type: "CHECKPOINT_FETCH_SUCCESS", stats: statsFromServerResult, globalStats: null, character: null };
          const obj17 = closure_130_1(closure_130_2[4]);
          obj16.globalStats = closure_130_0(closure_130_2[8]).globalStatsFromServer(body.global_stats);
          obj16.character = body.character;
          obj17.dispatch(obj16);
          const SUCCESS = closure_130_6.SUCCESS;
          const obj3 = closure_130_0(closure_130_2[8]);
        }
        c3 = 0;
        c5 = 3;
      }
    } catch (tmp46) {
      if (tmp4 === c3) {
        c5 = tmp2;
        throw tmp46;
      } else {
        c4 = tmp;
      }
    }
  }
};
let closure_9 = async function _completeCheckpoint() {
  c4 = 0;
  c5 = 0;
  c3 = 0;
  return (async (arg0) => {
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            closure_2 = tmp3;
            closure_1 = tmp7;
            closure_129_0 = body;
            DispatcherDefault.dispatch({ type: "CHECKPOINT_COMPLETE_START" });
            c3 = 1;
            const HTTP = HTTPUtils.HTTP;
            const request = { url: constants.CHECKPOINT_COMPLETE, body, rejectWithError: true };
            c4 = 2;
            c5 = 1;
            const obj6 = { value: HTTP.post(request), done: false };
            return obj6;
          }
        } else if (1 === tmp7) {
          c3 = 0;
          closure_130_1(closure_130_2[4]).dispatch({ type: "CHECKPOINT_COMPLETE_FAILED" });
          c5 = 3;
          return { value: false, done: true };
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 0;
          c5 = 3;
          const obj7 = { value, done: true };
          return obj7;
        } else {
          const obj8 = { type: "CHECKPOINT_COMPLETE_SUCCESS", character: closure_129_0 };
          closure_130_1(closure_130_2[4]).dispatch(obj8);
          const obj = closure_130_1(closure_130_2[4]);
          const result = closure_130_0(closure_130_2[5]).trackCheckpoint2026Completed();
          c3 = 0;
          c5 = 3;
          return { value: true, done: true };
        }
      } catch (tmp21) {
        if (tmp4 === c3) {
          c5 = tmp2;
          throw tmp21;
        } else {
          c4 = tmp;
        }
      }
    }
  })();
};
let closure_10 = async function _resetCheckpoint() {
  if (c3 === 2) {
    c3 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c3 = 2;
      if (0 === c1) {
        if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else {
          closure_0 = tmp3;
          DispatcherDefault.dispatch({ type: "CHECKPOINT_RESET_START" });
          c2 = 1;
          const HTTP = HTTPUtils.HTTP;
          const obj5 = { url: constants.CHECKPOINT_RESET, rejectWithError: true };
          c1 = 2;
          c3 = 1;
          const obj6 = { value: HTTP.del(obj5), done: false };
          return obj6;
        }
      } else if (1 === tmp7) {
        c2 = 0;
        closure_128_1(closure_128_2[4]).dispatch({ type: "CHECKPOINT_RESET_FAILED" });
        c3 = 3;
        return { value: false, done: true };
      } else if (arg0 === 1) {
        c3 = 3;
        throw value;
      } else if (arg0 === 2) {
        c2 = 0;
        c3 = 3;
        const obj8 = { value, done: true };
        return obj8;
      } else {
        closure_128_1(closure_128_2[4]).dispatch({ type: "CHECKPOINT_RESET_SUCCESS" });
        c2 = 0;
        c3 = 3;
        return { value: true, done: true };
      }
    } catch (tmp16) {
      if (tmp4 === c2) {
        c3 = tmp2;
        throw tmp16;
      } else {
        c1 = tmp;
      }
    }
  }
};
let closure_11 = async function _sendSidekickMessage() {
  closure_2 = tmp2;
  closure_130_0 = closure_0;
  closure_130_1 = closure_1;
  await ChannelActionCreatorsDefault.getOrEnsurePrivateChannel(closure_1);
  closure_130_2 = value;
  const channel = closure_131_4.getChannel(closure_130_2);
  if (null == channel) {
    const _Error = Error;
    const error = new Error("Failed to open private channel");
    throw error;
  }
  closure_130_4 = closure_131_1(closure_131_2[10]).parse(channel, closure_130_0);
  await closure_131_1(closure_131_2[11]).sendMessage(channel.id, closure_130_4, false, { location: "checkpoint-sidekick" });
  closure_130_5 = value;
  const result = closure_131_0(closure_131_2[5]).trackCheckpoint2026SidekickMessageSent(closure_130_1);
  return closure_130_5;
};
let closure_12 = async function _sendCheckpointCard(arg0) {
  if (c10 === 2) {
    c10 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp3 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    while (true) {
      c10 = 2;
      let tmp4 = c9;
      if (0 === c9) {
        if (arg0 === 1) {
          c10 = 3;
          throw value;
        } else if (arg0 === 2) {
          c10 = 3;
          let obj3 = { value, done: true };
          return obj3;
        } else {
          closure_6 = tmp;
          closure_5 = tmp4;
          closure_133_0 = checkpointCardType;
          closure_133_1 = dependencyMap;
          closure_133_2 = undefined;
          closure_133_3 = undefined;
          closure_133_4 = undefined;
          let _Promise2 = Promise;
          c9 = 1;
          c10 = 1;
          let obj4 = { value: Promise.all(_require.map(require("formatResults").getOrResolveChannelIdFromDestinationId)), done: false };
          return obj4;
        }
      } else if (1 === tmp4) {
        if (arg0 === 1) {
          c10 = 3;
          throw value;
        } else if (arg0 === 2) {
          c10 = 3;
          let obj5 = { value, done: true };
          return obj5;
        } else {
          closure_133_2 = value.filter(closure_134_0(closure_134_2[13]).isNotNullish);
          let _Promise = Promise;
          c9 = 2;
          c10 = 1;
          let obj6 = {
            value: Promise.allSettled(closure_133_2.map((item) => {
                      channel = channel.getChannel(item);
                      if (null != channel) {
                        const obj = checkpointCardType(7776);
                        const id = channel.id;
                        const obj3 = { location: "checkpoint", checkpointCardType };
                        return obj.sendMessage(id, checkpointCardType(7964).parse(channel, closure_1_0), false, obj3);
                      }
                    })),
            done: false
          };
          return obj6;
        }
      } else if (2 === tmp4) {
        if (arg0 === 1) {
          c10 = 3;
          throw value;
        } else if (arg0 === 2) {
          c10 = 3;
          let obj = { value, done: true };
          return obj;
        } else {
          closure_133_3 = value;
          let channel = closure_133_3;
          asyncGeneratorStep = closure_133_3[Symbol.iterator]();
          while (asyncGeneratorStep !== undefined) {
            c8 = 1;
            closure_133_4 = tmp13;
            if ("rejected" === closure_133_4.status) {
              throw closure_133_4.reason;
            } else {
              c8 = 0;
              continue;
            }
          }
          c10 = 3;
          return { value: "HermesInternal", done: null };
        }
      } else {
        c8 = 0;
        asyncGeneratorStep.return();
        throw Endpoints;
      }
    }
  }
};
const CheckpointFetchStates = fn(13657).CheckpointFetchStates;
const Endpoints = fn(1072).Endpoints;
const size = fn(2);
let result = size.fileFinishedImporting("modules/checkpoint/CheckpointActionCreators.tsx");

export function toggleMute() {
  DispatcherDefault.dispatch({ type: "CHECKPOINT_TOGGLE_MUTE" });
  const result = Tracking.trackCheckpoint2026MuteToggled(CheckpointStore.isMuted);
}
export function selectCharacterTrait(trait, optionId) {
  return DispatcherDefault.dispatch({ type: "CHECKPOINT_SELECT_CHARACTER_TRAIT", trait, optionId });
}
export function saveCheckpointProgress(characterStage) {
  return DispatcherDefault.dispatch({ type: "CHECKPOINT_SAVE_PROGRESS", stage: characterStage });
}
export function fetchCheckpointData() {
  const self = this;
  const apply = closure_8.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
export function completeCheckpoint() {
  const self = this;
  const apply = closure_9.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
export function resetCheckpoint() {
  const self = this;
  const apply = closure_10.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
export function sendSidekickMessage() {
  const self = this;
  const apply = closure_11.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
export function sendCheckpointCard() {
  const self = this;
  const apply = closure_12.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}