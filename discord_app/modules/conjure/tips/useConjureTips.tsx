// === Module 12249: useConjureTips ===

// Module 12249 (useConjureTips)
import conjureTipImpressions from "conjureTipImpressions" /* 12251 */;
import conjureTipDismissals from "conjureTipDismissals" /* 12257 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
let items = [fn(12250).CONJURE_TIP_LIVE_BEHIND_IDLE_MS, fn(12252).CONJURE_TIP_IDEAS_IDLE_MS];
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/tips/useConjureTips.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useConjureTips(arg0, arg1, arg2, arg3, arg4) {
  _require = arg1;
  const cResult = require("c").c(17);
  const tmp4 = require("useConjureTipContext")(arg1, arg2, arg3, arg4, items);
  importDefault = tmp4;
  let obj = require("c");
  const tmp = _require;
  const tmp2 = arr;
  const conjureTipDismissalsVersion = require("conjureTipDismissals").useConjureTipDismissalsVersion();
  if (cResult[0] !== arg1) {
    let fn = function c(forEach) {
      return conjureTipDismissals.isConjureTipDismissed(forEach, closure_0);
    };
    cResult[0] = arg1;
    cResult[1] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] === tmp4) {
    if (cResult[3] === tmp6) {
      if (cResult[4] === arg0) {
        let tmp7 = cResult[5];
      }
      ({ callout, hint } = tmp7);
      if (cResult[6] === callout) {
        if (cResult[7] === hint) {
          arr = cResult[8];
        }
        if (cResult[9] === tmp4) {
          if (cResult[10] === arg1) {
            if (cResult[11] === arr) {
              let tmp10 = cResult[12];
            }
            const effect = noop.useEffect(tmp10);
            class E {
              constructor() {
                timestamp = Date.now();
                tmp2 = closure_2;
                iter = closure_2[Symbol.iterator]();
                while (iter !== undefined) {
                  tip = iter.next().tip;
                  tmp4 = closure_1;
                  tmp3 = tip;
                  if (0 !== closure_1.messagesSinceShown(tip.id)) {
                    tmp5 = closure_0;
                    tmp6 = closure_2;
                    obj = closure_0(closure_2[8]);
                    tmp7 = closure_0;
                    tmp8 = tip;
                    result = obj.recordConjureTipImpression(closure_0, tmp3.id, timestamp);
                  }
                  continue;
                }
                return;
              }
            }
            const mapped = arr.map((tip) => {
              const obj = {};
              const merged = Object.assign(tip);
              const obj2 = { context, dismiss: null };
              let fn;
              if (null != tip.tip.dismissal) {
                fn = () => conjureTipDismissals.dismissConjureTip(tip.tip, tip);
              }
              obj2.dismiss = fn;
              obj.options = obj2;
              return obj;
            });
            cResult[13] = tmp4;
            cResult[14] = arg1;
            cResult[15] = arr;
            cResult[16] = mapped;
          }
        }
        class E {
          constructor() {
            timestamp = Date.now();
            tmp2 = closure_2;
            iter = closure_2[Symbol.iterator]();
            while (iter !== undefined) {
              tip = iter.next().tip;
              tmp4 = closure_1;
              tmp3 = tip;
              if (0 !== closure_1.messagesSinceShown(tip.id)) {
                tmp5 = closure_0;
                tmp6 = closure_2;
                obj = closure_0(closure_2[8]);
                tmp7 = closure_0;
                tmp8 = tip;
                result = obj.recordConjureTipImpression(closure_0, tmp3.id, timestamp);
              }
              continue;
            }
            return;
          }
        }
        cResult[9] = tmp4;
        cResult[10] = arg1;
        cResult[11] = arr;
        cResult[12] = E;
        tmp10 = E;
      }
      items = [callout, hint];
      const found = items.filter((item) => null != item);
      cResult[6] = callout;
      cResult[7] = hint;
      cResult[8] = found;
      arr = found;
    }
  }
  let obj2 = require("conjureTipDismissals");
  const conjureTips = tmp(tmp2[7]).selectConjureTips(arg0, tmp4, tmp6);
  cResult[2] = tmp4;
  cResult[3] = tmp6;
  cResult[4] = arg0;
  cResult[5] = conjureTips;
  tmp7 = conjureTips;
  const tmpResult = tmp(tmp2[7]);
}) : (function useConjureTips(arg0, arg1, arg2, arg3, arg4) {
  _require = arg1;
  const tmp = require("useConjureTipContext")(arg1, arg2, arg3, arg4, items);
  importDefault = tmp;
  const conjureTipDismissalsVersion = require("conjureTipDismissals").useConjureTipDismissalsVersion();
  let obj = require("conjureTipDismissals");
  const conjureTips = require("conjureTipSelection").selectConjureTips(arg0, tmp, (forEach) => conjureTipDismissals.isConjureTipDismissed(forEach, closure_0));
  items = [, ];
  ({ callout: arr[0], hint: arr[1] } = conjureTips);
  found = items.filter((item) => null != item);
  const effect = noop.useEffect(() => {
    const timestamp = Date.now();
    const iter = found[Symbol.iterator]();
    while (iter !== undefined) {
      let tip = iter.next().tip;
      let tmp3 = tip;
      if (0 !== context.messagesSinceShown(tip.id)) {
        let obj = conjureTipImpressions;
        let result = obj.recordConjureTipImpression(closure_0, tmp3.id, timestamp);
      }
      continue;
    }
  });
  return found.map((tip) => {
    const obj = {};
    const merged = Object.assign(tip);
    const obj2 = { context, dismiss: null };
    let fn;
    if (null != tip.tip.dismissal) {
      fn = () => conjureTipDismissals.dismissConjureTip(tip.tip, tip);
    }
    obj2.dismiss = fn;
    obj.options = obj2;
    return obj;
  });
});