// discord_app/modules/checkpoint/CheckpointActionCreators.tsx
import DispatcherDefault from "../../Dispatcher.tsx";
import HTTPUtils from "../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import ChannelActionCreatorsDefault from "../../actions/ChannelActionCreators.tsx";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import ChannelStore from "../../stores/ChannelStore.tsx";
import CheckpointStore from "CheckpointStore.tsx";

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
      return { value: "IconComponent", done: null };
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
          DispatcherDefault.dispatch({ type: "CHECKPOINT_FETCH_START" });
          c3 = 1;
          const HTTP = HTTPUtils.HTTP;
          const obj8 = { url: constants.CHECKPOINT, rejectWithError: true };
          c4 = 2;
          c5 = 1;
          const obj10 = { value: HTTP.get(obj8), done: false };
          return obj10;
        }
      } else if (1 === tmp7) {
        c3 = 0;
        closure_130_1(closure_130_2[4]).dispatch({ type: "CHECKPOINT_FETCH_FAILED" });
        c5 = 3;
        return { value: false, done: true };
      } else if (arg0 === 1) {
        c5 = 3;
        throw value;
      } else if (arg0 === 2) {
        c3 = 0;
        c5 = 3;
        const obj11 = { value, done: true };
        return obj11;
      } else {
        body = value.body;
        if (null != closure_129_0) {
          const obj12 = { type: "CHECKPOINT_FETCH_SUCCESS", stats: null, globalStats: null, character: null };
          const obj4 = closure_130_1(closure_130_2[4]);
          obj12.stats = closure_130_0(closure_130_2[6]).getMockCheckpointStats(closure_129_0);
          const obj6 = closure_130_0(closure_130_2[6]);
          obj12.globalStats = closure_130_0(closure_130_2[7]).globalStatsFromServer(body.global_stats);
          obj4.dispatch(obj12);
          const obj7 = closure_130_0(closure_130_2[7]);
        } else {
          let statsFromServerResult = null;
          if (null != body.stats) {
            statsFromServerResult = closure_130_0(closure_130_2[7]).statsFromServer(body.stats);
            const obj = closure_130_0(closure_130_2[7]);
          }
          const obj15 = {
            type: "CHECKPOINT_FETCH_SUCCESS",
            stats: statsFromServerResult,
            globalStats: null,
            character: null,
          };
          const obj13 = closure_130_1(closure_130_2[4]);
          obj15.globalStats = closure_130_0(closure_130_2[7]).globalStatsFromServer(body.global_stats);
          obj15.character = body.character;
          obj13.dispatch(obj15);
          const obj3 = closure_130_0(closure_130_2[7]);
        }
        c3 = 0;
        c5 = 3;
      }
    } catch (tmp36) {
      if (tmp4 === c3) {
        c5 = tmp2;
        throw tmp36;
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
        return { value: "IconComponent", done: null };
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
            const obj3 = { value, done: true };
            return obj3;
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
            const obj5 = { value: HTTP.post(request), done: false };
            return obj5;
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
          const obj6 = { value, done: true };
          return obj6;
        } else {
          const obj7 = { type: "CHECKPOINT_COMPLETE_SUCCESS", character: closure_129_0 };
          closure_130_1(closure_130_2[4]).dispatch(obj7);
          c3 = 0;
          c5 = 3;
          return { value: true, done: true };
        }
      } catch (tmp18) {
        if (tmp4 === c3) {
          c5 = tmp2;
          throw tmp18;
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
      return { value: "IconComponent", done: null };
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
  closure_3 = tmp5;
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
  closure_131_1(closure_131_2[9]).track(closure_131_6.CHECKPOINT_SIDEKICK_MESSAGE_SENT, {
    other_user_id: closure_130_1,
  });
  closure_131_1(closure_131_2[9]);
  closure_130_4 = closure_131_1(closure_131_2[10]).parse(channel, closure_130_0);
  return closure_131_1(closure_131_2[11]).sendMessage(channel.id, closure_130_4, false, {
    location: "checkpoint-sidekick",
  });
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
      return { value: "IconComponent", done: null };
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
          let obj4 = {
            value: Promise.all(_require.map(require("formatResults").getOrResolveChannelIdFromDestinationId)),
            done: false,
          };
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
            value: Promise.allSettled(
              closure_133_2.map((item) => {
                channel = channel.getChannel(item);
                if (null != channel) {
                  const obj = checkpointCardType(7601);
                  const id = channel.id;
                  const obj3 = { location: "checkpoint", checkpointCardType };
                  return obj.sendMessage(id, checkpointCardType(7790).parse(channel, closure_1_0), false, obj3);
                }
              }),
            ),
            done: false,
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
          return { value: "IconComponent", done: null };
        }
      } else {
        c8 = 0;
        asyncGeneratorStep.return();
        throw React5;
      }
    }
  }
};
const Constants = fn(1084);
({ AnalyticEvents: metroRequire, Endpoints: closure_7 } = Constants);
const size = fn(2);
const result = size.fileFinishedImporting("modules/checkpoint/CheckpointActionCreators.tsx");

export const toggleMute = function toggleMute() {
  return DispatcherDefault.dispatch({ type: "CHECKPOINT_TOGGLE_MUTE" });
};
export const selectCharacterTrait = function selectCharacterTrait(trait, optionId) {
  return DispatcherDefault.dispatch({ type: "CHECKPOINT_SELECT_CHARACTER_TRAIT", trait, optionId });
};
export const resetEditedCharacter = function resetEditedCharacter() {
  return DispatcherDefault.dispatch({ type: "CHECKPOINT_RESET_EDITED_CHARACTER" });
};
export const fetchCheckpointData = function fetchCheckpointData() {
  const self = this;
  const apply = closure_8.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const completeCheckpoint = function completeCheckpoint() {
  const self = this;
  const apply = closure_9.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const resetCheckpoint = function resetCheckpoint() {
  const self = this;
  const apply = closure_10.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const sendSidekickMessage = function sendSidekickMessage() {
  const self = this;
  const apply = closure_11.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const sendCheckpointCard = function sendCheckpointCard() {
  const self = this;
  const apply = closure_12.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
