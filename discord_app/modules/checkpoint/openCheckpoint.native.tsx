// === Module 13669: openCheckpoint ===

// Module 13669 (openCheckpoint)
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

const require = fn;
let closure_5 = async function _openCheckpoint(arg0) {
  if (c6 === 2) {
    c6 = 3;
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
      c6 = 2;
      if (0 === c5) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          const obj4 = { value, done: true };
          return obj4;
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
          const obj5 = { value, done: true };
          return obj5;
        } else {
          c5 = 2;
          c6 = 1;
          const obj6 = { value: closure_132_0(closure_132_2[2]).fetchCheckpointData(closure_131_2), done: false };
          return obj6;
        }
      } else if (arg0 === 1) {
        c6 = 3;
        throw value;
      } else if (arg0 === 2) {
        c6 = 3;
        const obj7 = { value, done: true };
        return obj7;
      } else {
        closure_131_3 = value;
        if (closure_131_3 !== closure_132_4.ERROR) {
          if (closure_131_3 !== closure_132_4.FETCHING) {
            closure_132_1(closure_132_2[5]).initialize(closure_131_1);
            const obj8 = closure_132_1(closure_132_2[5]);
            const result = closure_132_0(closure_132_2[6]).trackCheckpoint2026Started(closure_131_0);
            const obj9 = closure_132_0(closure_132_2[6]);
            const obj11 = { didPlayerShareDataWithDiscord: closure_131_1 };
            closure_132_1(closure_132_2[7]).pushLazy(closure_132_0(closure_132_2[9])(closure_132_2[8], closure_132_2.paths), obj11, "CHECKPOINT_MODAL");
            const obj10 = closure_132_1(closure_132_2[7]);
          }
        } else {
          const intl = closure_132_0(closure_132_2[4]).intl;
          closure_132_0(closure_132_2[3]).presentError(intl.string(closure_132_0(closure_132_2[4]).t.fEptJP));
          const obj = closure_132_0(closure_132_2[3]);
        }
        c6 = 3;
      }
    } catch (tmp25) {
      c6 = tmp;
      throw tmp25;
    }
  }
};
const CheckpointFetchStates = fn(13668).CheckpointFetchStates;
const size = fn(2);
let result = size.fileFinishedImporting("modules/checkpoint/openCheckpoint.native.tsx");

export function openCheckpoint() {
  const self = this;
  const apply = closure_5.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}