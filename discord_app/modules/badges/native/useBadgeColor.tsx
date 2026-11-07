// discord_app/modules/badges/native/useBadgeColor.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import privDefault from "../../../../_runtime/01453_priv.js";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

const require = fn;
const NEUTRAL_35 = nativeDefault.unsafe_rawColors.NEUTRAL_35;
let closure_7 = new privDefault({ max: 50 });
const promiseDeduper = new fn(5258).PromiseDeduper();
const size = fn(2);
let result = size.fileFinishedImporting("modules/badges/native/useBadgeColor.tsx");

export const FALLBACK_BADGE_COLOR = NEUTRAL_35;
export function useBadgeColor(rasterUrl) {
  closure_0 = rasterUrl;
  const tmp = _slicedToArray(noop.useState(null), 2);
  closure_1 = tmp[1];
  items = [rasterUrl];
  const effect = noop.useEffect(() => {
    closure_1 = async function _load(arg0) {
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
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
              const obj3 = { value, done: true };
              return obj3;
            } else {
              closure_2 = tmp3;
              closure_1 = tmp7;
              closure_129_0 = uri;
              closure_129_1 = undefined;
              c3 = 1;
              c4 = 2;
              c5 = 1;
              const obj4 = {
                value: promiseDeduper.one(
                  uri,
                  asyncGeneratorStep(async () => {
                    closure_3 = tmp2;
                    const tmp14 = value(11623);
                    const pickBadgeColor = tmp14.pickBadgeColor;
                    await pickBadgeColor(2022).getDominantColors({ uri });
                    const tmp8 = pickBadgeColor(value);
                    value = tmp8;
                    if (tmp8 == null) {
                      value = closure_1_6;
                    }
                    return value;
                  }),
                ),
                done: false,
              };
              return obj4;
            }
          } else {
            if (1 === tmp7) {
              c3 = 0;
            } else if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              c5 = 3;
              const obj = { value, done: true };
              return obj;
            } else {
              closure_129_1 = value;
              const result = set.set(closure_129_0, closure_129_1);
              c3 = 0;
            }
            if (!closure_130_0) {
              closure_1(closure_129_0);
            }
            c5 = 3;
            return { value: "HermesInternal", done: "HermesInternal" };
          }
        } catch (tmp23) {
          if (tmp4 === c3) {
            c5 = tmp2;
            throw tmp23;
          } else {
            c4 = tmp;
          }
        }
      }
    };
    if (null != c0) {
      if (!set.has(tmp)) {
        c0 = false;
        (function load(c0) {
          const self = this;
          const apply = closure_1.apply;
          if (typeof apply === "unknown") {
            let applyArgumentsResult = HermesBuiltin.applyArguments(self);
          } else {
            applyArgumentsResult = apply(self, arguments);
          }
          return applyArgumentsResult;
        })(tmp);
        return () => {
          c0 = true;
        };
      }
    }
  }, items);
  if (null == rasterUrl) {
    value = NEUTRAL_35;
  } else {
    value = set.get(rasterUrl);
    if (value == null) {
      let tmp5;
      if (tmp[0] === rasterUrl) {
        tmp5 = NEUTRAL_35;
      }
      value = tmp5;
    }
  }
  return value;
}
