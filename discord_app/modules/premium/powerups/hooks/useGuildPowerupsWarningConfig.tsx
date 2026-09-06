// === Module 12561: useGuildPowerupsWarningConfig ===

// Module 12561 (useGuildPowerupsWarningConfig)
import closure_3 from "noop" /* 19 */;
import closure_4 from "handleModifyingAppliedBoostStart" /* 12562 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/premium/powerups/hooks/useGuildPowerupsWarningConfig.tsx");

export default function useGuildPowerupsWarningConfig(arg0, arg1) {
  const _require = arg0;
  importDefault = arg1;
  const items = [closure_4];
  const items1 = [arg0];
  stateFromStores = _require(stateFromStores[3]).useStateFromStores(items, () => closure_1_4.getAppliedGuildBoostsForGuild(closure_0), items1);
  const items2 = [stateFromStores];
  const diff = importDefault(stateFromStores[2])(arg0).spent - React.useMemo(() => {
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
  React = diff;
  const items3 = [diff, arg1];
  return React.useMemo(() => {
    if (closure_3 <= 0) {
      let obj = { shouldShow: false, title: "", description: "", requiredBoostCount: 0 };
    } else {
      obj = { shouldShow: true, title: null, description: null, requiredBoostCount: null };
      const intl = callback(stateFromStores[4]).intl;
      obj[1] = intl.string(lib(stateFromStores[5]).n5hQhc);
      const intl2 = callback(stateFromStores[4]).intl;
      obj = { boostCount: null, perksString: null };
      obj[0] = tmp;
      obj[1] = lib.join(", ");
      obj[2] = intl2.formatToPlainString(lib(stateFromStores[5]).iAaAiG, obj);
      obj[3] = tmp;
    }
    return obj;
  }, items3);
};