// discord_app/modules/checkpoint/openCheckpoint.native.tsx
import _objectWithoutProperties from "../../../_runtime/metro/00109__objectWithoutProperties.js";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import AppStateStore from "../../stores/native/AppStateStore.tsx";
import CheckpointStore from "CheckpointStore.tsx";

const require = fn;
let closure_12 = async function _openCheckpoint(arg0) {
  if (c5 === 2) {
    c5 = 3;
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
      c5 = 2;
      if (0 === c4) {
        if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          const obj5 = { value, done: true };
          return obj5;
        } else {
          closure_3 = tmp5;
          closure_2 = tmp2;
          closure_130_1 = undefined;
          closure_130_0 = closure_0;
          let obj7 = closure_1;
          if (closure_1 === undefined) {
            obj7 = {};
          }
          closure_130_1 = obj7;
          closure_130_2 = undefined;
          closure_130_3 = undefined;
          closure_130_4 = undefined;
          closure_130_5 = undefined;
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
          const obj8 = { value, done: true };
          return obj8;
        } else {
          closure_130_2 = closure_130_1.didPlayerShareDataWithDiscord;
          let tmp39 = undefined === closure_130_2;
          if (!tmp39) {
            tmp39 = closure_130_2;
          }
          closure_130_3 = tmp39;
          closure_130_4 = closure_131_4(closure_130_1, closure_131_3);
          c4 = 2;
          c5 = 1;
          const obj9 = { value: closure_131_0(closure_131_2[6]).fetchCheckpointData(closure_130_4), done: false };
          return obj9;
        }
      } else if (arg0 === 1) {
        c5 = 3;
        throw value;
      } else if (arg0 === 2) {
        c5 = 3;
        const obj10 = { value, done: true };
        return obj10;
      } else {
        closure_130_5 = value;
        if (closure_130_5 !== closure_131_8.ERROR) {
          if (closure_130_5 !== closure_131_8.FETCHING) {
            const obj11 = {
              didPlayerShareDataWithDiscord: closure_130_3,
              isForeground: closure_131_6.getState() === closure_131_11.ACTIVE,
            };
            closure_131_1(closure_131_2[9]).initialize(obj11);
            const obj12 = closure_131_1(closure_131_2[9]);
            const result = closure_131_0(closure_131_2[10]).trackCheckpoint2026Started(closure_130_0);
            if (closure_131_7.availability !== closure_131_0(closure_131_2[11]).CheckpointAvailability.UNAVAILABLE) {
              const obj13 = { didPlayerShareDataWithDiscord: closure_130_3 };
              closure_131_1(closure_131_2[12]).pushLazy(
                closure_131_0(closure_131_2[14])(closure_131_2[15], closure_131_2.paths),
                obj13,
                closure_131_9,
              );
              const obj3 = closure_131_1(closure_131_2[12]);
            } else {
              closure_131_1(closure_131_2[12]).pushLazy(
                closure_131_0(closure_131_2[14])(closure_131_2[13], closure_131_2.paths),
                {},
                closure_131_10,
              );
              const obj2 = closure_131_1(closure_131_2[12]);
            }
            const obj14 = closure_131_0(closure_131_2[10]);
          }
        } else {
          const intl = closure_131_0(closure_131_2[8]).intl;
          closure_131_0(closure_131_2[7]).presentError(intl.string(closure_131_0(closure_131_2[8]).t.fEptJP));
          const obj = closure_131_0(closure_131_2[7]);
        }
        c5 = 3;
      }
    } catch (tmp49) {
      c5 = tmp;
      throw tmp49;
    }
  }
};
let closure_3 = ["didPlayerShareDataWithDiscord"];
const CheckpointFetchStates = fn(14253).CheckpointFetchStates;
const CheckpointModalConstants = fn(14259);
({ CHECKPOINT_MODAL_KEY: closure_9, CHECKPOINT_UNAVAILABLE_MODAL_KEY: closure_10 } = CheckpointModalConstants);
const AppStates = fn(1072).AppStates;
const size = fn(2);
let result = size.fileFinishedImporting("modules/checkpoint/openCheckpoint.native.tsx");

export function openCheckpoint() {
  const self = this;
  const apply = closure_12.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
