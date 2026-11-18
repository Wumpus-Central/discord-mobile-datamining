// === Module 12422: openCheckpoint ===

// Module 12422 (openCheckpoint)
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import AppStateStore from "AppStateStore" /* 2120 */;
import CheckpointStore from "CheckpointStore" /* 12417 */;

const require = fn;
let closure_10 = async function _openCheckpoint(arg0) {
  if (c5 === 2) {
    c5 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
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
          const obj7 = { value, done: true };
          return obj7;
        } else {
          closure_3 = tmp5;
          closure_2 = tmp2;
          closure_130_1 = undefined;
          closure_130_0 = closure_0;
          let obj9 = closure_1;
          if (closure_1 === undefined) {
            obj9 = {};
          }
          closure_130_1 = obj9;
          closure_130_2 = undefined;
          c4 = 1;
          c5 = 1;
          return { value: "Path", done: true };
        }
      } else if (1 === tmp5) {
        if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          const obj10 = { value, done: true };
          return obj10;
        } else {
          c4 = 2;
          c5 = 1;
          const obj11 = { value: closure_131_0(closure_131_2[5]).fetchCheckpointData(closure_130_1), done: false };
          return obj11;
        }
      } else if (arg0 === 1) {
        c5 = 3;
        throw value;
      } else if (arg0 === 2) {
        c5 = 3;
        const obj12 = { value, done: true };
        return obj12;
      } else {
        closure_130_2 = value;
        if (closure_130_2 === closure_131_6.ERROR) {
          const intl = closure_131_0(closure_131_2[7]).intl;
          closure_131_0(closure_131_2[6]).presentError(intl.string(closure_131_0(closure_131_2[7]).t.fEptJP));
          const obj6 = closure_131_0(closure_131_2[6]);
        } else if (closure_130_2 !== closure_131_6.FETCHING) {
          const obj13 = { isForeground: closure_131_4.getState() === closure_131_9.ACTIVE };
          closure_131_1(closure_131_2[8]).initialize(obj13);
          const obj = closure_131_1(closure_131_2[8]);
          const result = closure_131_0(closure_131_2[9]).trackCheckpoint2026Started(closure_130_0);
          if (closure_131_5.availability === closure_131_0(closure_131_2[10]).CheckpointAvailability.UNAVAILABLE) {
            closure_131_1(closure_131_2[11]).pushLazy(closure_131_0(closure_131_2[13])(closure_131_2[12], closure_131_2.paths), {}, closure_131_8);
            const obj5 = closure_131_1(closure_131_2[11]);
          } else {
            closure_131_1(closure_131_2[11]).pushLazy(closure_131_0(closure_131_2[13])(closure_131_2[14], closure_131_2.paths), {}, closure_131_7);
            const obj4 = closure_131_1(closure_131_2[11]);
          }
          const obj3 = closure_131_0(closure_131_2[9]);
        }
        c5 = 3;
      }
    } catch (tmp52) {
      c5 = tmp;
      throw tmp52;
    }
  }
};
const CheckpointFetchStates = fn(12417).CheckpointFetchStates;
const CheckpointModalConstants = fn(12423);
({ CHECKPOINT_MODAL_KEY: metroImportDefault, CHECKPOINT_UNAVAILABLE_MODAL_KEY: closure_8 } = CheckpointModalConstants);
const AppStates = fn(1072).AppStates;
const size = fn(2);
let result = size.fileFinishedImporting("modules/checkpoint/openCheckpoint.native.tsx");

export function openCheckpoint() {
  const self = this;
  const apply = closure_10.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}