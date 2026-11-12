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
      const obj4 = { value, done: true };
      return obj4;
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
          const obj5 = { value, done: true };
          return obj5;
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
          const obj7 = { value, done: true };
          return obj7;
        } else {
          c5 = 2;
          c6 = 1;
          const obj8 = { value: closure_132_0(closure_132_2[3]).fetchCheckpointData(closure_131_2), done: false };
          return obj8;
        }
      } else if (arg0 === 1) {
        c6 = 3;
        throw value;
      } else if (arg0 === 2) {
        c6 = 3;
        const obj9 = { value, done: true };
        return obj9;
      } else {
        closure_131_3 = value;
        if (closure_131_3 !== closure_132_5.ERROR) {
          if (closure_131_3 !== closure_132_5.FETCHING) {
            closure_132_1(closure_132_2[6]).initialize(closure_131_1);
            const obj11 = closure_132_1(closure_132_2[6]);
            const result = closure_132_0(closure_132_2[7]).trackCheckpoint2026Started(closure_131_0);
            if (closure_132_4.availability !== closure_132_0(closure_132_2[8]).CheckpointAvailability.UNAVAILABLE) {
              const obj10 = { didPlayerShareDataWithDiscord: closure_131_1 };
              closure_132_1(closure_132_2[9]).pushLazy(
                closure_132_0(closure_132_2[11])(closure_132_2[12], closure_132_2.paths),
                obj10,
                closure_132_6,
              );
              const obj3 = closure_132_1(closure_132_2[9]);
            } else {
              closure_132_1(closure_132_2[9]).pushLazy(
                closure_132_0(closure_132_2[11])(closure_132_2[10], closure_132_2.paths),
                {},
                closure_132_7,
              );
              const obj2 = closure_132_1(closure_132_2[9]);
            }
            const obj12 = closure_132_0(closure_132_2[7]);
          }
        } else {
          const intl = closure_132_0(closure_132_2[5]).intl;
          closure_132_0(closure_132_2[4]).presentError(intl.string(closure_132_0(closure_132_2[5]).t.fEptJP));
          const obj = closure_132_0(closure_132_2[4]);
        }
        c6 = 3;
      }
    } catch (tmp45) {
      c6 = tmp;
      throw tmp45;
    }
  }
};
const CheckpointFetchStates = fn(14146).CheckpointFetchStates;
const CheckpointModalConstants = fn(14149);
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
