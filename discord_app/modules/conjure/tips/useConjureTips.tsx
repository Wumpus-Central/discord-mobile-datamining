// discord_app/modules/conjure/tips/useConjureTips.tsx
import conjureTipImpressions from "conjureTipImpressions.tsx";
import conjureTipDismissals from "conjureTipDismissals.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
let items = [fn(12368).CONJURE_TIP_LIVE_BEHIND_IDLE_MS];
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/tips/useConjureTips.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function useConjureTips(arg0, arg1, arg2, arg3, arg4) {
      _require = arg1;
      const cResult = require("c").c(14);
      const tmp4 = require("useConjureTipContext")(arg1, arg2, arg3, arg4, items);
      importDefault = tmp4;
      let obj = require("c");
      const tmp = _require;
      const tmp2 = arr;
      const conjureTipDismissalsVersion = require("conjureTipDismissals").useConjureTipDismissalsVersion();
      if (cResult[0] === tmp4) {
        if (cResult[1] === arg0) {
          let tmp6 = cResult[2];
        }
        ({ callout, hint } = tmp6);
        if (cResult[3] === callout) {
          if (cResult[4] === hint) {
            arr = cResult[5];
          }
          if (cResult[6] === tmp4) {
            if (cResult[7] === arg1) {
              if (cResult[8] === arr) {
                let tmp9 = cResult[9];
              }
              const effect = noop.useEffect(tmp9);
              if (cResult[10] === tmp4) {
                if (cResult[11] === arg1) {
                  if (cResult[12] === arr) {
                    let tmp12 = cResult[13];
                  }
                  return tmp12;
                }
              }
              const mapped = arr.map((tip) => {
                const obj = {};
                const merged = Object.assign(tip);
                const obj2 = { context, dismiss: null };
                let fn;
                if (null != tip.tip.dismissal) {
                  fn = () =>
                    conjureTipDismissals.dismissConjureTip(tip.tip, tip, ideasIntroAnchorId.ideasIntroAnchorId);
                }
                obj2.dismiss = fn;
                obj.options = obj2;
                return obj;
              });
              cResult[10] = tmp4;
              cResult[11] = arg1;
              cResult[12] = arr;
              cResult[13] = mapped;
              tmp12 = mapped;
            }
          }
          let fn = function _() {
            const timestamp = Date.now();
            const iter = arr[Symbol.iterator]();
            while (iter !== undefined) {
              let tip = iter.next().tip;
              let tmp3 = tip;
              if (0 !== context.messagesSinceShown(tip.id)) {
                let obj = conjureTipImpressions;
                let result = obj.recordConjureTipImpression(closure_0, tmp3.id, timestamp);
              }
              continue;
            }
          };
          cResult[6] = tmp4;
          cResult[7] = arg1;
          cResult[8] = arr;
          cResult[9] = fn;
          tmp9 = fn;
        }
        items = [callout, hint];
        const found = items.filter((item) => null != item);
        cResult[3] = callout;
        cResult[4] = hint;
        cResult[5] = found;
        arr = found;
      }
      let obj2 = require("conjureTipDismissals");
      const conjureTips = tmp(tmp2[6]).selectConjureTips(arg0, tmp4, tmp4.isDismissed);
      cResult[0] = tmp4;
      cResult[1] = arg0;
      cResult[2] = conjureTips;
      tmp6 = conjureTips;
      const tmpResult = tmp(tmp2[6]);
    }
  : function useConjureTips(arg0, arg1, arg2, arg3, arg4) {
      _require = arg1;
      const tmp = require("useConjureTipContext")(arg1, arg2, arg3, arg4, items);
      importDefault = tmp;
      const conjureTipDismissalsVersion = require("conjureTipDismissals").useConjureTipDismissalsVersion();
      let obj = require("conjureTipDismissals");
      const conjureTips = require("conjureTipSelection").selectConjureTips(arg0, tmp, tmp.isDismissed);
      items = [,];
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
          fn = () => conjureTipDismissals.dismissConjureTip(tip.tip, tip, ideasIntroAnchorId.ideasIntroAnchorId);
        }
        obj2.dismiss = fn;
        obj.options = obj2;
        return obj;
      });
    };
