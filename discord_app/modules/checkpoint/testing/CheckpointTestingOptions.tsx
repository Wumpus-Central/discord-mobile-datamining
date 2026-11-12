// === Module 19464: CheckpointTestingOptions ===

// Module 19464 (CheckpointTestingOptions)
import _modDef3271 from "module_3271" /* 3271 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

const items = [
  {
    id: "open",
    label: _modDef3271.yLZjcu,
    action() {
      return ZERO_DATA(14148).openCheckpoint("qa_menu", ZERO_DATA !== ZERO_DATA(14151).CheckpointMockStats.NO_PERSONAL_DATA, ZERO_DATA);
    }
  },
,
,
,

];
const obj2 = { id: "reset", label: _modDef3271["2DL3aX"], action: null };
let closure_2 = asyncGeneratorStep(async () => {
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
          const obj5 = { value: ZERO_DATA(14150).resetCheckpoint(), done: false };
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
  const apply = closure_2.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
items[1] = obj2;
fn(14151).CheckpointMockStats.DEFAULT;
items[2] = {
  id: "open-fake-data",
  label: _modDef3271.kPBZ5M,
  action() {
    return ZERO_DATA(14148).openCheckpoint("qa_menu", ZERO_DATA !== ZERO_DATA(14151).CheckpointMockStats.NO_PERSONAL_DATA, ZERO_DATA);
  }
};
fn(14151).CheckpointMockStats.NO_PERSONAL_DATA;
items[3] = {
  id: "open-global-stats",
  label: _modDef3271.UwiUbM,
  action() {
    return ZERO_DATA(14148).openCheckpoint("qa_menu", ZERO_DATA !== ZERO_DATA(14151).CheckpointMockStats.NO_PERSONAL_DATA, ZERO_DATA);
  }
};
const ZERO_DATA = fn(14151).CheckpointMockStats.ZERO_DATA;
items[4] = {
  id: "open-zero-stats",
  label: _modDef3271.BYW9oX,
  action() {
    return ZERO_DATA(14148).openCheckpoint("qa_menu", ZERO_DATA !== ZERO_DATA(14151).CheckpointMockStats.NO_PERSONAL_DATA, ZERO_DATA);
  }
};
let closure_4 = ["reset"];
const size = fn(2);
let result = size.fileFinishedImporting("modules/checkpoint/testing/CheckpointTestingOptions.tsx");

export const CHECKPOINT_TESTING_OPTIONS = items;
export function getCheckpointTestingOptions(mode) {
  if ("off" === mode) {
    return [];
  } else if ("reset_only" === mode) {
    return items.filter((id) => closure_1_4.includes(id.id));
  } else if ("all" === mode) {
    return items;
  }
}