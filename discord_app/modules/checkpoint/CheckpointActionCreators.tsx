// === Module 15215: CheckpointActionCreators ===

// Module 15215 (CheckpointActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

const require = fn;
let closure_4 = async function _fetchCheckpointData() {
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
          return { value: "flex", done: true };
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
            closure_130_1(closure_130_2[1]).dispatch({ type: "CHECKPOINT_FETCH_START" });
            if (closure_129_0) {
              const obj7 = { type: "CHECKPOINT_FETCH_SUCCESS", stats: closure_130_0(closure_130_2[2]).MOCK_CHECKPOINT_STATS };
              closure_130_1(closure_130_2[1]).dispatch(obj7);
              const obj6 = closure_130_1(closure_130_2[1]);
            } else {
              c3 = 1;
              const HTTP = closure_130_0(closure_130_2[3]).HTTP;
              c4 = 3;
              c5 = 1;
              const obj8 = { value: HTTP.get({ url: "/checkpoint", rejectWithError: true }), done: false };
              return obj8;
            }
            const obj12 = closure_130_1(closure_130_2[1]);
          }
        } else {
          if (2 === tmp7) {
            c3 = 0;
            closure_130_1(closure_130_2[1]).dispatch({ type: "CHECKPOINT_FETCH_FAILED" });
            const obj4 = closure_130_1(closure_130_2[1]);
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 !== 2) {
            body = value.body;
            let statsFromServerResult = null;
            if (null != body.stats) {
              statsFromServerResult = closure_130_0(closure_130_2[4]).statsFromServer(body.stats);
              const obj = closure_130_0(closure_130_2[4]);
            }
            const obj9 = { type: "CHECKPOINT_FETCH_SUCCESS", stats: statsFromServerResult };
            closure_130_1(closure_130_2[1]).dispatch(obj9);
            c3 = 0;
            const obj11 = closure_130_1(closure_130_2[1]);
          }
          c3 = 0;
          c5 = 3;
          const obj10 = { value, done: true };
          return obj10;
        }
        c5 = 3;
      }
    } catch (tmp26) {
      if (tmp4 === c3) {
        c5 = tmp2;
        throw tmp26;
      } else {
        c4 = tmp;
      }
    }
  }
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/checkpoint/CheckpointActionCreators.tsx");

export const toggleMute = function toggleMute() {
  return DispatcherDefault.dispatch({ type: "CHECKPOINT_TOGGLE_MUTE" });
};
export const fetchCheckpointData = function fetchCheckpointData() {
  const self = this;
  const apply = closure_4.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};