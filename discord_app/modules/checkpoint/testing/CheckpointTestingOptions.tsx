// === Module 19657: CheckpointTestingOptions ===

// Module 19657 (CheckpointTestingOptions)
import _modDef3319 from "module_3319" /* 3319 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

let closure_2 = fn(19656).getCheckpointMitigationMock;
const items = [
  {
    id: "open",
    label: _modDef3319.yLZjcu,
    action() {
      const tmp = c2();
      const merged = Object.assign(tmp);
      const merged1 = Object.assign(UNAVAILABLE);
      return UNAVAILABLE(14258).openCheckpoint("qa_menu", {});
    }
  },
,
,
,

];
const obj2 = { id: "reset", label: _modDef3319["2DL3aX"], action: null };
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
      return { value: "HermesInternal", done: null };
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
          const obj5 = { value: UNAVAILABLE(14260).resetCheckpoint(), done: false };
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
  const apply = closure_3.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
items[1] = obj2;
fn(18321).CheckpointMocks.FAKE_DATA;
items[2] = {
  id: "open-fake-data",
  label: _modDef3319.kPBZ5M,
  action() {
    const tmp = c2();
    const merged = Object.assign(tmp);
    const merged1 = Object.assign(UNAVAILABLE);
    return UNAVAILABLE(14258).openCheckpoint("qa_menu", {});
  }
};
fn(18321).CheckpointMocks.GLOBAL_STATS;
items[3] = {
  id: "open-global-stats",
  label: _modDef3319.UwiUbM,
  action() {
    const tmp = c2();
    const merged = Object.assign(tmp);
    const merged1 = Object.assign(UNAVAILABLE);
    return UNAVAILABLE(14258).openCheckpoint("qa_menu", {});
  }
};
fn(18321).CheckpointMocks.ZERO_STATS;
items[4] = {
  id: "open-zero-stats",
  label: _modDef3319.BYW9oX,
  action() {
    const tmp = c2();
    const merged = Object.assign(tmp);
    const merged1 = Object.assign(UNAVAILABLE);
    return UNAVAILABLE(14258).openCheckpoint("qa_menu", {});
  }
};
const items1 = [...items];
const UNAVAILABLE = fn(18321).CheckpointMocks.UNAVAILABLE;
let obj = {
  id: "open",
  label: _modDef3319.yLZjcu,
  action() {
    const tmp = c2();
    const merged = Object.assign(tmp);
    const merged1 = Object.assign(UNAVAILABLE);
    return UNAVAILABLE(14258).openCheckpoint("qa_menu", {});
  }
};
const items2 = [
  {
    id: "open-unavailable",
    label: _modDef3319["58TARv"],
    action() {
      const tmp = c2();
      const merged = Object.assign(tmp);
      const merged1 = Object.assign(UNAVAILABLE);
      return UNAVAILABLE(14258).openCheckpoint("qa_menu", {});
    }
  }
];
HermesBuiltin.arraySpread(items2, tmp3);
let closure_5 = ["reset"];
const size = fn(2);
let result = size.fileFinishedImporting("modules/checkpoint/testing/CheckpointTestingOptions.tsx");

export const CHECKPOINT_TESTING_OPTIONS = items1;
export function getCheckpointTestingOptions(mode) {
  if ("off" === mode) {
    return [];
  } else if ("reset_only" === mode) {
    return items1.filter((id) => closure_1_5.includes(id.id));
  } else if ("all" === mode) {
    return items1;
  }
}