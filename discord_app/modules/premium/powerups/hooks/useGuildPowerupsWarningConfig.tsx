// === Module 12561: useGuildPowerupsWarningConfig ===

// Module 12561 (useGuildPowerupsWarningConfig)
import util from "util" /* 1114 */;
import _modDef2428 from "module_2428" /* 2428 */;
import noop from "module_19" /* 19 */;
import AppliedGuildBoostStore from "AppliedGuildBoostStore" /* 12562 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/powerups/hooks/useGuildPowerupsWarningConfig.tsx");

export default function useGuildPowerupsWarningConfig(arg0, arg1) {
  _require = arg0;
  importDefault = arg1;
  const items = [AppliedGuildBoostStore];
  const items1 = [arg0];
  stateFromStores = require("initialize").useStateFromStores(items, () => AppliedGuildBoostStore.getAppliedGuildBoostsForGuild(closure_0), items1);
  const items2 = [stateFromStores];
  const diff = require("useGuildPowerupsBoostCount")(arg0).spent - noop.useMemo(() => {
    let num;
    if (stateFromStores != null) {
      const filter = stateFromStores.filter;
      if (filter != null) {
        const found = filter((ended) => {
          ended = ended.ended;
          let tmp = !ended;
          if (!ended) {
            tmp = null == ended.endsAt;
          }
          return tmp;
        });
        if (found != null) {
          num = found.length;
        }
      }
    }
    if (num == null) {
      num = 0;
    }
    return num;
  }, items2);
  noop = diff;
  const items3 = [diff, arg1];
  return noop.useMemo(() => {
    if (diff <= 0) {
      let obj = { shouldShow: false, title: "", description: "", requiredBoostCount: 0 };
    } else {
      obj = { shouldShow: true, title: null, description: null, requiredBoostCount: null };
      const intl = util.intl;
      obj.title = intl.string(_modDef2428.n5hQhc);
      const intl2 = util.intl;
      obj = { boostCount: tmp, perksString: closure_1.join(", ") };
      obj.description = intl2.formatToPlainString(_modDef2428.iAaAiG, obj);
      obj.requiredBoostCount = tmp;
    }
    return obj;
  }, items3);
};