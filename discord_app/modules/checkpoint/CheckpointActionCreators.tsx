// === Module 15519: CheckpointActionCreators ===

// Module 15519 (CheckpointActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import HTTPUtils from "HTTPUtils" /* 1282 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

require = fn;
let closure_5 = async function _fetchCheckpointData() {
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
          closure_129_0 = undefined;
          let flag = closure_0;
          if (closure_0 === undefined) {
            flag = false;
          }
          closure_129_0 = flag;
          let body;
          c4 = 1;
          c5 = 1;
          return { value: "Set", done: true };
        }
      } else {
        if (1 === tmp7) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            closure_130_1(closure_130_2[2]).dispatch({ type: "CHECKPOINT_FETCH_START" });
            if (closure_129_0) {
              const obj6 = { type: "CHECKPOINT_FETCH_SUCCESS", stats: closure_130_0(closure_130_2[3]).MOCK_CHECKPOINT_STATS, character: null };
              closure_130_1(closure_130_2[2]).dispatch(obj6);
              const obj7 = closure_130_1(closure_130_2[2]);
            } else {
              c3 = 1;
              const HTTP = closure_130_0(closure_130_2[4]).HTTP;
              const obj8 = { url: closure_130_4.CHECKPOINT, rejectWithError: true };
              c4 = 3;
              c5 = 1;
              const obj9 = { value: HTTP.get(obj8), done: false };
              return obj9;
            }
            const obj13 = closure_130_1(closure_130_2[2]);
          }
        } else {
          if (2 === tmp7) {
            c3 = 0;
            closure_130_1(closure_130_2[2]).dispatch({ type: "CHECKPOINT_FETCH_FAILED" });
            const obj4 = closure_130_1(closure_130_2[2]);
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 !== 2) {
            body = value.body;
            let statsFromServerResult = null;
            if (null != body.stats) {
              statsFromServerResult = closure_130_0(closure_130_2[5]).statsFromServer(body.stats);
              const obj = closure_130_0(closure_130_2[5]);
            }
            const obj10 = { type: "CHECKPOINT_FETCH_SUCCESS", stats: statsFromServerResult, character: body.character };
            closure_130_1(closure_130_2[2]).dispatch(obj10);
            c3 = 0;
            const obj12 = closure_130_1(closure_130_2[2]);
          }
          c3 = 0;
          c5 = 3;
          const obj11 = { value, done: true };
          return obj11;
        }
        c5 = 3;
      }
    } catch (tmp29) {
      if (tmp4 === c3) {
        c5 = tmp2;
        throw tmp29;
      } else {
        c4 = tmp;
      }
    }
  }
};
let closure_6 = async function _completeCheckpoint() {
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
          closure_130_1(closure_130_2[2]).dispatch({ type: "CHECKPOINT_COMPLETE_FAILED" });
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
          closure_130_1(closure_130_2[2]).dispatch(obj7);
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
let closure_7 = async function _resetCheckpoint() {
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
        closure_128_1(closure_128_2[2]).dispatch({ type: "CHECKPOINT_RESET_FAILED" });
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
        closure_128_1(closure_128_2[2]).dispatch({ type: "CHECKPOINT_RESET_SUCCESS" });
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
const Endpoints = fn(1085).Endpoints;
const size = fn(2);
const result = size.fileFinishedImporting("modules/checkpoint/CheckpointActionCreators.tsx");

export const toggleMute = function toggleMute() {
  return DispatcherDefault.dispatch({ type: "CHECKPOINT_TOGGLE_MUTE" });
};
export const fetchCheckpointData = function fetchCheckpointData() {
  const self = this;
  const apply = closure_5.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const completeCheckpoint = function completeCheckpoint() {
  const self = this;
  const apply = closure_6.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const resetCheckpoint = function resetCheckpoint() {
  const self = this;
  const apply = closure_7.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};