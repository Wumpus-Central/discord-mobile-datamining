// === Module 15519: CheckpointActionCreators ===

// Module 15519 (CheckpointActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import Constants from "Constants" /* 1085 */;
import HTTPUtils from "HTTPUtils" /* 1282 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

let c1, c4;

let obj = function _fetchCheckpointData() {
  obj = _asyncToGenerator(async () => {
    let closure_1;
    let closure_2;
    let flag;
    let closure_0 = arg0;
    if (1 === c4) {
      if (arg0 === 1) {
        let c5 = 3;
        throw value;
      } else if (arg0 === 2) {
        c5 = 3;
        const obj5 = { value, done: true };
        return obj5;
      } else {
        const obj11 = closure_130_1(closure_130_2[2]);
        obj11.dispatch({ type: "CHECKPOINT_FETCH_START" });
        if (flag) {
          const obj6 = { type: "CHECKPOINT_FETCH_SUCCESS", stats: closure_130_0(closure_130_2[3]).MOCK_CHECKPOINT_STATS, character: null };
          const dispatch = closure_130_1(closure_130_2[2]).dispatch;
          const tmp23 = closure_130_1(closure_130_2[2]);
          dispatch(obj6);
        } else {
          let c3 = 1;
          const HTTP = closure_130_0(closure_130_2[4]).HTTP;
          const obj7 = { url: closure_130_4.CHECKPOINT, rejectWithError: true };
          c4 = 3;
          c5 = 1;
          const obj8 = { value: HTTP.get(obj7), done: false };
          return obj8;
        }
      }
    } else if (2 === c4) {
      c3 = 0;
      const obj4 = closure_130_1(closure_130_2[2]);
      obj4.dispatch({ type: "CHECKPOINT_FETCH_FAILED" });
    } else if (arg0 === 1) {
      c5 = 3;
      throw value;
    } else if (arg0 === 2) {
      c3 = 0;
      c5 = 3;
      const obj9 = { value, done: true };
      return obj9;
    } else {
      const body = value.body;
      let statsFromServerResult = null;
      const dispatch2 = closure_130_1(closure_130_2[2]).dispatch;
      const tmp37 = closure_130_1(closure_130_2[2]);
      if (null != body.stats) {
        obj = closure_130_0(closure_130_2[5]);
        statsFromServerResult = obj.statsFromServer(body.stats);
      }
      const obj10 = { type: "CHECKPOINT_FETCH_SUCCESS", stats: statsFromServerResult, character: body.character };
      dispatch2(obj10);
      c3 = 0;
    }
    await "IconComponent";
    flag = closure_0;
    if (closure_0 === undefined) {
      flag = false;
    }
    return "Set";
  });
  return obj(...arguments);
};
obj = function _completeCheckpoint() {
  obj = _asyncToGenerator(async (arg0) => {
    let closure_0;
    if (c5 === 2) {
      c5 = 3;
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
      let c3;
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
            let closure_2 = tmp;
            let closure_1 = tmp4;
            const obj8 = DispatcherDefault;
            obj8.dispatch({ type: "CHECKPOINT_COMPLETE_START" });
            c3 = 1;
            const HTTP = HTTPUtils.HTTP;
            const request = { url: constants.CHECKPOINT_COMPLETE, body: character, rejectWithError: true };
            c4 = 2;
            c5 = 1;
            const obj5 = { value: HTTP.post(request), done: false };
            return obj5;
          }
        } else if (1 === c4) {
          c3 = 0;
          const obj4 = closure_130_1(closure_130_2[2]);
          obj4.dispatch({ type: "CHECKPOINT_COMPLETE_FAILED" });
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
          const obj7 = { type: "CHECKPOINT_COMPLETE_SUCCESS", character };
          obj = closure_130_1(closure_130_2[2]);
          obj.dispatch(obj7);
          c3 = 0;
          c5 = 3;
          return { value: true, done: true };
        }
      } catch (tmp15) {
        if (0 === c3) {
          c5 = 3;
          throw tmp15;
        } else {
          c4 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
obj = function _resetCheckpoint() {
  obj = _asyncToGenerator(async () => {
    if (c3 === 2) {
      c3 = 3;
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
      let c2;
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
            let closure_0 = tmp;
            const obj7 = DispatcherDefault;
            obj7.dispatch({ type: "CHECKPOINT_RESET_START" });
            c2 = 1;
            const HTTP = HTTPUtils.HTTP;
            const obj5 = { url: constants.CHECKPOINT_RESET, rejectWithError: true };
            c1 = 2;
            c3 = 1;
            const obj6 = { value: HTTP.del(obj5), done: false };
            return obj6;
          }
        } else if (1 === tmp4) {
          c2 = 0;
          const obj3 = closure_128_1(closure_128_2[2]);
          obj3.dispatch({ type: "CHECKPOINT_RESET_FAILED" });
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
          obj = closure_128_1(closure_128_2[2]);
          obj.dispatch({ type: "CHECKPOINT_RESET_SUCCESS" });
          c2 = 0;
          c3 = 3;
          return { value: true, done: true };
        }
      } catch (tmp13) {
        if (0 === c2) {
          c3 = 3;
          throw tmp13;
        } else {
          c1 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
const Endpoints = Constants.Endpoints;
const result = size.fileFinishedImporting("modules/checkpoint/CheckpointActionCreators.tsx");

export const toggleMute = function toggleMute() {
  obj = DispatcherDefault;
  return obj.dispatch({ type: "CHECKPOINT_TOGGLE_MUTE" });
};
export const fetchCheckpointData = function fetchCheckpointData() {
  return obj(...arguments);
};
export const completeCheckpoint = function completeCheckpoint() {
  return obj(...arguments);
};
export const resetCheckpoint = function resetCheckpoint() {
  return obj(...arguments);
};