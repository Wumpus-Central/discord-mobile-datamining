// discord_app/modules/checkpoint/openCheckpoint.native.tsx
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import AppStateStore from "../../stores/native/AppStateStore.tsx";
import CheckpointStore from "CheckpointStore.tsx";

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
          let obj8 = closure_1;
          if (closure_1 === undefined) {
            obj8 = {};
          }
          closure_130_1 = obj8;
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
          const obj9 = { value, done: true };
          return obj9;
        } else {
          const obj10 = { uri: closure_131_1(closure_131_2[6]) };
          closure_131_1(closure_131_2[5]).preload(obj10);
          const obj13 = closure_131_1(closure_131_2[5]);
          c4 = 2;
          c5 = 1;
          const obj11 = { value: closure_131_0(closure_131_2[7]).fetchCheckpointData(closure_130_1), done: false };
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
          const intl = closure_131_0(closure_131_2[9]).intl;
          closure_131_0(closure_131_2[8]).presentError(intl.string(closure_131_0(closure_131_2[9]).t.fEptJP));
          const obj6 = closure_131_0(closure_131_2[8]);
        } else if (closure_130_2 !== closure_131_6.FETCHING) {
          const obj14 = { isForeground: closure_131_4.getState() === closure_131_9.ACTIVE };
          closure_131_1(closure_131_2[10]).initialize(obj14);
          const obj = closure_131_1(closure_131_2[10]);
          const result = closure_131_0(closure_131_2[11]).trackCheckpoint2026Started(closure_130_0);
          if (closure_131_5.availability === closure_131_0(closure_131_2[12]).CheckpointAvailability.UNAVAILABLE) {
            closure_131_1(closure_131_2[13]).pushLazy(
              closure_131_0(closure_131_2[15])(closure_131_2[14], closure_131_2.paths),
              {},
              closure_131_8,
            );
            const obj5 = closure_131_1(closure_131_2[13]);
          } else {
            closure_131_1(closure_131_2[13]).pushLazy(
              closure_131_0(closure_131_2[15])(closure_131_2[16], closure_131_2.paths),
              {},
              closure_131_7,
            );
            const obj4 = closure_131_1(closure_131_2[13]);
          }
          const obj3 = closure_131_0(closure_131_2[11]);
        }
        c5 = 3;
      }
    } catch (tmp47) {
      c5 = tmp;
      throw tmp47;
    }
  }
};
const CheckpointFetchStates = fn(12370).CheckpointFetchStates;
const CheckpointModalConstants = fn(12376);
({ CHECKPOINT_MODAL_KEY: metroImportDefault, CHECKPOINT_UNAVAILABLE_MODAL_KEY: closure_8 } = CheckpointModalConstants);
const AppStates = fn(1071).AppStates;
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
