// === Module 19253: CheckpointTestingOptions ===

// Module 19253 (CheckpointTestingOptions)
import _modDef3250 from "module_3250" /* 3250 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

let obj = {
  id: "open",
  label: _modDef3250.yLZjcu,
  description: "Array",
  action() {
    return ZERO_DATA(13669).openCheckpoint("qa_menu", ZERO_DATA !== ZERO_DATA(13671).CheckpointMockStats.NO_PERSONAL_DATA, ZERO_DATA);
  }
};
const items = [obj, , , , ];
const obj2 = { id: "reset", label: _modDef3250["2DL3aX"], action: null };
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
          const obj5 = { value: ZERO_DATA(13670).resetCheckpoint(), done: false };
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
        const showCheckpointTestingToast = closure_128_0(closure_128_2[5]).showCheckpointTestingToast;
        const intl = closure_128_0(closure_128_2[6]).intl;
        let string = intl.string;
        let result = closure_128_1(closure_128_2[3]);
        if (value) {
          string = string(result.D5x6qE);
          result = showCheckpointTestingToast(string, "success");
        } else {
          const result1 = showCheckpointTestingToast(string(result.EkMBfH), "failure");
        }
        c2 = 3;
        const tmp17 = closure_128_0(closure_128_2[5]);
      }
    } catch (tmp9) {
      c2 = tmp;
      throw tmp9;
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
fn(13671).CheckpointMockStats.DEFAULT;
items[2] = {
  id: "open-fake-data",
  label: _modDef3250.kPBZ5M,
  description: _modDef3250.cf0nfD,
  action() {
    return ZERO_DATA(13669).openCheckpoint("qa_menu", ZERO_DATA !== ZERO_DATA(13671).CheckpointMockStats.NO_PERSONAL_DATA, ZERO_DATA);
  }
};
fn(13671).CheckpointMockStats.NO_PERSONAL_DATA;
items[3] = {
  id: "open-global-stats",
  label: _modDef3250.UwiUbM,
  description: _modDef3250["+5dICr"],
  action() {
    return ZERO_DATA(13669).openCheckpoint("qa_menu", ZERO_DATA !== ZERO_DATA(13671).CheckpointMockStats.NO_PERSONAL_DATA, ZERO_DATA);
  }
};
const ZERO_DATA = fn(13671).CheckpointMockStats.ZERO_DATA;
items[4] = {
  id: "open-zero-stats",
  label: _modDef3250.BYW9oX,
  description: _modDef3250.NffC17,
  action() {
    return ZERO_DATA(13669).openCheckpoint("qa_menu", ZERO_DATA !== ZERO_DATA(13671).CheckpointMockStats.NO_PERSONAL_DATA, ZERO_DATA);
  }
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/checkpoint/testing/CheckpointTestingOptions.tsx");

export const CHECKPOINT_TESTING_OPTIONS = items;