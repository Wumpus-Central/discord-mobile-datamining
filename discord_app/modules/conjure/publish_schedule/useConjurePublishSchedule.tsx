// discord_app/modules/conjure/publish_schedule/useConjurePublishSchedule.tsx
import util from "../../../intl/index.native.tsx";
import _modDef3868 from "../intl/ConjureUntranslated.messages.js";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import ConjureConnectionStore from "../connection/ConjureConnectionStore.tsx";

const require = globalThis.__r;

require = fn;
const ensureConnection = fn(10850).ensureConnection;
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/publish_schedule/useConjurePublishSchedule.tsx");

export default function useConjurePublishSchedule(arg0, arg1) {
  _require = arg0;
  closure_1 = arg1;
  const items = [closure_6];
  const items1 = [arg0];
  stateFromStores = require("initialize").useStateFromStores(
    items,
    () => "open" === ConjureConnectionStore.getConnState(closure_0),
    items1,
  );
  const items2 = [arg0, arg1];
  const effect = loaded.useEffect(() => {
    if (closure_1) {
      ensureConnection(closure_0);
    }
  }, items2);
  const tmp3 = _slicedToArray(loaded.useState(null), 2);
  asyncGeneratorStep = tmp3[1];
  const tmp4 = _slicedToArray(loaded.useState(true), 2);
  _slicedToArray = tmp4[1];
  [loaded, closure_6] = loaded.useState(false);
  let obj = require("initialize");
  [tmp8, ensureConnection] = loaded.useState(false);
  const tmp7 = _slicedToArray(loaded.useState(false), 2);
  [tmp10, closure_8] = loaded.useState(null);
  const tmp11 = _slicedToArray(loaded.useState(null), 2);
  closure_9 = tmp11[1];
  const tmp9 = _slicedToArray(loaded.useState(null), 2);
  [tmp13, closure_10] = loaded.useState(0);
  closure_11 = loaded.useRef(false);
  loaded.useRef({ value: 0 });
  const items3 = [arg0, arg1, stateFromStores, tmp13];
  const effect1 = loaded.useEffect(() => {
    if (closure_1) {
      if (stateFromStores) {
        const sum = iter.value + 1;
        ref.current.value = sum;
        closure_1 = sum;
        const publishSchedule = closure_0(stateFromStores[5]).fetchPublishSchedule(iter);
        const obj = closure_0(stateFromStores[5]);
        publishSchedule
          .then((result) => {
            if (ref.current.value === sum) {
              closure_3(result);
              closure_6(true);
              closure_4(false);
            }
          })
          .catch(() => {
            if (ref.current.value === sum) {
              const intl = util.intl;
              closure_2_8(intl.string(_modDef3868.n25haz));
              closure_4(false);
            }
          });
        return () => {
          iter.value = iter.value + 1;
        };
      }
    }
  }, items3);
  const callback = loaded.useCallback(() => {
    closure_4(true);
    closure_1_8(null);
    closure_1_10((arg0) => arg0 + 1);
  }, []);
  const items4 = [arg1, loaded, arg0];
  const tmp12 = _slicedToArray(loaded.useState(0), 2);
  return {
    saved: tmp3[0],
    loading: tmp4[0],
    loaded,
    deleting: tmp8,
    error: tmp10,
    status: tmp11[0],
    retry: callback,
    remove: loaded.useCallback(
      asyncGeneratorStep(async () => {
        if (c5 === 2) {
          c5 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp8 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj3 = { value, done: true };
            return obj3;
          } else {
            return { value: "HermesInternal", done: "HermesInternal" };
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
                const obj4 = { value, done: true };
                return obj4;
              } else {
                closure_128_0 = undefined;
                closure_128_1 = undefined;
                if (tmp4) {
                  if (first) {
                    if (!ref.current) {
                      ref.current = true;
                      const sum = iter.value + 1;
                      ref2.current.value = sum;
                      closure_128_0 = sum;
                      ensureConnection(true);
                      React6(null);
                      closure_9(null);
                      c3 = 2;
                      c4 = 3;
                      c5 = 1;
                      const obj5 = { value: tmp6(tmp80[5]).deletePublishSchedule(tmp6), done: false };
                      return obj5;
                    }
                  }
                }
                c5 = 3;
              }
            } else if (1 !== tmp9) {
              if (2 === tmp9) {
                c3 = 1;
                closure_128_2 = tmp80;
                if (closure_129_12.current.value === closure_128_0) {
                  if (closure_128_2 instanceof tmp4(tmp80[8])) {
                    let message = closure_128_2.message;
                  } else {
                    const intl2 = tmp6(tmp80[6]).intl;
                    message = intl2.string(tmp4(tmp80[7]).i5Xp1l);
                  }
                  closure_129_8(message);
                }
              } else if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 0;
                closure_129_11.current = false;
                if (closure_129_12.current.value === closure_128_0) {
                  closure_129_7(false);
                }
                c5 = 3;
                const obj = { value, done: true };
                return obj;
              } else {
                closure_128_1 = value;
                if (closure_129_12.current.value !== closure_128_0) {
                  c3 = 0;
                  closure_129_11.current = false;
                  if (closure_129_12.current.value === closure_128_0) {
                    closure_129_7(false);
                  }
                  c5 = 3;
                  return { value: "HermesInternal", done: "HermesInternal" };
                } else {
                  closure_129_3(closure_128_1);
                  const intl = tmp6(tmp80[6]).intl;
                  closure_129_9(intl.string(tmp4(tmp80[7]).lwN30C));
                  c3 = 1;
                }
              }
              c3 = 0;
              closure_129_11.current = false;
              if (closure_129_12.current.value === closure_128_0) {
                closure_129_7(false);
              }
            }
            c3 = 0;
            closure_129_11.current = false;
            if (closure_129_12.current.value === closure_128_0) {
              closure_129_7(false);
            }
            throw tmp80;
          } catch (tmp80) {
            if (tmp5 === c3) {
              c5 = tmp3;
              throw tmp80;
            } else if (tmp2 === tmp82) {
              c4 = tmp2;
            } else {
              c4 = tmp;
            }
          }
        }
      }),
      items4,
    ),
  };
}
