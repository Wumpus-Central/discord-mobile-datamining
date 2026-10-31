// discord_app/modules/conjure/tips/useConjureTips.tsx
import conjureTipImpressions from "conjureTipImpressions.tsx";
import conjureTipDismissals from "conjureTipDismissals.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
let items = [fn(12609).CONJURE_TIP_LIVE_BEHIND_IDLE_MS];
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/tips/useConjureTips.tsx");

export default function useConjureTips(arg0, arg1, arg2, arg3, arg4) {
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
}
