// === Module 15049: CheckpointTestingOptions ===

// Module 15049 (CheckpointTestingOptions)
import _modDef3497 from "module_3497" /* 3497 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

let closure_2 = fn(15047).getCheckpointMitigationMock;
const items = [
  {
    id: "open",
    label: _modDef3497.yLZjcu,
    action() {
      const tmp = c2();
      const merged = Object.assign(tmp);
      const merged1 = Object.assign(UNAVAILABLE);
      return UNAVAILABLE(12625).openCheckpoint("qa_menu", {});
    }
  },
,
,
,
,
,

];
const obj2 = { id: "reset-all", label: _modDef3497.WM19oT, action: null };
let closure_4 = asyncGeneratorStep(async () => {
  if (c2 === 2) {
    c2 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp3 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj3 = { value, done: true };
      return obj3;
    } else {
      return { value: "HermesInternal", done: "+95" };
    }
  } else {
    try {
      c2 = 2;
      if (0 === c1) {
        if (arg0 === 1) {
          c2 = 3;
          throw value;
        } else if (arg0 === 2) {
          c2 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else {
          closure_0 = tmp4;
          c1 = 1;
          c2 = 1;
          const obj5 = { value: UNAVAILABLE(12628).resetCheckpoint(), done: false };
          return obj5;
        }
      } else if (arg0 === 1) {
        c2 = 3;
        throw value;
      } else if (arg0 === 2) {
        c2 = 3;
        const obj = { value, done: true };
        return obj;
      } else {
        const showCheckpointTestingToast = closure_128_0(closure_128_1[5]).showCheckpointTestingToast;
        const intl = closure_128_0(closure_128_1[6]).intl;
        let string = intl.string;
        let t = closure_128_0(closure_128_1[6]).t;
        if (value) {
          string = string(t.i4jeWR);
          t = showCheckpointTestingToast(string, "success");
        } else {
          const result = showCheckpointTestingToast(string(t.fEptJP), "failure");
        }
        c2 = 3;
        const tmp16 = closure_128_0(closure_128_1[5]);
      }
    } catch (tmp8) {
      c2 = tmp;
      throw tmp8;
    }
  }
});
obj2.action = function action() {
  const self = this;
  const apply = closure_4.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
items[1] = obj2;
let obj = {
  id: "open",
  label: _modDef3497.yLZjcu,
  action() {
    const tmp = c2();
    const merged = Object.assign(tmp);
    const merged1 = Object.assign(UNAVAILABLE);
    return UNAVAILABLE(12625).openCheckpoint("qa_menu", {});
  }
};
items[2] = {
  id: "reset-progress",
  label: _modDef3497.HYMZmZ,
  action() {
    const result = UNAVAILABLE(12628).resetCheckpointProgress();
    const obj = UNAVAILABLE(12628);
    const intl = UNAVAILABLE(1112).intl;
    const result1 = UNAVAILABLE(15050).showCheckpointTestingToast(intl.string(UNAVAILABLE(1112).t.i4jeWR), "success");
  }
};
let obj4 = { id: "reset-character", label: _modDef3497.Q9JHSs, action: null };
let closure_3 = asyncGeneratorStep(async () => {
  if (c2 === 2) {
    c2 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp3 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj3 = { value, done: true };
      return obj3;
    } else {
      return { value: "HermesInternal", done: "+95" };
    }
  } else {
    try {
      c2 = 2;
      if (0 === c1) {
        if (arg0 === 1) {
          c2 = 3;
          throw value;
        } else if (arg0 === 2) {
          c2 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else {
          closure_0 = tmp4;
          c1 = 1;
          c2 = 1;
          const obj5 = { value: UNAVAILABLE(12628).resetCheckpointCharacter(), done: false };
          return obj5;
        }
      } else if (arg0 === 1) {
        c2 = 3;
        throw value;
      } else if (arg0 === 2) {
        c2 = 3;
        const obj = { value, done: true };
        return obj;
      } else {
        const showCheckpointTestingToast = closure_128_0(closure_128_1[5]).showCheckpointTestingToast;
        const intl = closure_128_0(closure_128_1[6]).intl;
        let string = intl.string;
        let t = closure_128_0(closure_128_1[6]).t;
        if (value) {
          string = string(t.i4jeWR);
          t = showCheckpointTestingToast(string, "success");
        } else {
          const result = showCheckpointTestingToast(string(t.fEptJP), "failure");
        }
        c2 = 3;
        const tmp16 = closure_128_0(closure_128_1[5]);
      }
    } catch (tmp8) {
      c2 = tmp;
      throw tmp8;
    }
  }
});
obj4.action = function action() {
  const self = this;
  const apply = closure_3.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
items[3] = obj4;
fn(15048).CheckpointMocks.FAKE_DATA;
items[4] = {
  id: "open-fake-data",
  label: _modDef3497.kPBZ5M,
  action() {
    const tmp = c2();
    const merged = Object.assign(tmp);
    const merged1 = Object.assign(UNAVAILABLE);
    return UNAVAILABLE(12625).openCheckpoint("qa_menu", {});
  }
};
fn(15048).CheckpointMocks.GLOBAL_STATS;
items[5] = {
  id: "open-global-stats",
  label: _modDef3497.UwiUbM,
  action() {
    const tmp = c2();
    const merged = Object.assign(tmp);
    const merged1 = Object.assign(UNAVAILABLE);
    return UNAVAILABLE(12625).openCheckpoint("qa_menu", {});
  }
};
fn(15048).CheckpointMocks.ZERO_STATS;
items[6] = {
  id: "open-zero-stats",
  label: _modDef3497.BYW9oX,
  action() {
    const tmp = c2();
    const merged = Object.assign(tmp);
    const merged1 = Object.assign(UNAVAILABLE);
    return UNAVAILABLE(12625).openCheckpoint("qa_menu", {});
  }
};
const items1 = [...items];
const UNAVAILABLE = fn(15048).CheckpointMocks.UNAVAILABLE;
let obj3 = {
  id: "reset-progress",
  label: _modDef3497.HYMZmZ,
  action() {
    const result = UNAVAILABLE(12628).resetCheckpointProgress();
    const obj = UNAVAILABLE(12628);
    const intl = UNAVAILABLE(1112).intl;
    const result1 = UNAVAILABLE(15050).showCheckpointTestingToast(intl.string(UNAVAILABLE(1112).t.i4jeWR), "success");
  }
};
const items2 = [
  {
    id: "open-unavailable",
    label: _modDef3497["58TARv"],
    action() {
      const tmp = c2();
      const merged = Object.assign(tmp);
      const merged1 = Object.assign(UNAVAILABLE);
      return UNAVAILABLE(12625).openCheckpoint("qa_menu", {});
    }
  }
];
HermesBuiltin.arraySpread(items2, tmp3);
let closure_6 = ["reset-all", "reset-progress", "reset-character"];
const size = fn(2);
let result = size.fileFinishedImporting("modules/checkpoint/testing/CheckpointTestingOptions.tsx");

export const CHECKPOINT_TESTING_OPTIONS = items1;
export function getCheckpointTestingOptions(mode) {
  if ("off" === mode) {
    return [];
  } else if ("reset_only" === mode) {
    return items1.filter((id) => closure_1_6.includes(id.id));
  } else if ("all" === mode) {
    return items1;
  }
}