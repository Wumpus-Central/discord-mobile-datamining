// discord_app/modules/checkpoint/openCheckpoint.native.tsx
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import CheckpointStore from "CheckpointStore.tsx";

const require = fn;
let closure_8 = async function _openCheckpoint(arg0) {
  if (c6 === 2) {
    c6 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj6 = { value, done: true };
      return obj6;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c6 = 2;
      if (0 === c5) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          const obj7 = { value, done: true };
          return obj7;
        } else {
          closure_4 = tmp5;
          closure_3 = tmp2;
          closure_131_1 = undefined;
          closure_131_2 = undefined;
          closure_131_0 = closure_0;
          let flag = closure_1;
          if (closure_1 === undefined) {
            flag = true;
          }
          closure_131_1 = flag;
          closure_131_2 = closure_2;
          closure_131_3 = undefined;
          c5 = 1;
          c6 = 1;
          return { value: "flexDirection", done: true };
        }
      } else if (1 === tmp5) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          const obj9 = { value, done: true };
          return obj9;
        } else {
          c5 = 2;
          c6 = 1;
          const obj10 = { value: closure_132_0(closure_132_2[3]).fetchCheckpointData(closure_131_2), done: false };
          return obj10;
        }
      } else if (arg0 === 1) {
        c6 = 3;
        throw value;
      } else if (arg0 === 2) {
        c6 = 3;
        const obj11 = { value, done: true };
        return obj11;
      } else {
        closure_131_3 = value;
        if (closure_131_3 !== closure_132_5.ERROR) {
          if (closure_131_3 !== closure_132_5.FETCHING) {
            if (closure_132_4.availability !== closure_132_0(closure_132_2[6]).CheckpointAvailability.UNAVAILABLE) {
              closure_132_1(closure_132_2[10]).initialize(closure_131_1);
              const obj3 = closure_132_1(closure_132_2[10]);
              const result = closure_132_0(closure_132_2[11]).trackCheckpoint2026Started(closure_131_0);
              const obj4 = closure_132_0(closure_132_2[11]);
              const obj12 = { didPlayerShareDataWithDiscord: closure_131_1 };
              closure_132_1(closure_132_2[7]).pushLazy(
                closure_132_0(closure_132_2[9])(closure_132_2[12], closure_132_2.paths),
                obj12,
                closure_132_6,
              );
              const obj5 = closure_132_1(closure_132_2[7]);
            } else {
              closure_132_1(closure_132_2[7]).pushLazy(
                closure_132_0(closure_132_2[9])(closure_132_2[8], closure_132_2.paths),
                {},
                closure_132_7,
              );
              const obj2 = closure_132_1(closure_132_2[7]);
            }
          }
        } else {
          const intl = closure_132_0(closure_132_2[5]).intl;
          closure_132_0(closure_132_2[4]).presentError(intl.string(closure_132_0(closure_132_2[5]).t.fEptJP));
          const obj = closure_132_0(closure_132_2[4]);
        }
        c6 = 3;
      }
    } catch (tmp53) {
      c6 = tmp;
      throw tmp53;
    }
  }
};
const CheckpointFetchStates = fn(14150).CheckpointFetchStates;
const CheckpointModalConstants = fn(14153);
({ CHECKPOINT_MODAL_KEY: closure_6, CHECKPOINT_UNAVAILABLE_MODAL_KEY: metroImportDefault } = CheckpointModalConstants);
const size = fn(2);
let result = size.fileFinishedImporting("modules/checkpoint/openCheckpoint.native.tsx");

export function openCheckpoint() {
  const self = this;
  const apply = closure_8.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
