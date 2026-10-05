// === Module 9080: useIsActivitiesAvailableInShelf ===

// Module 9080 (useIsActivitiesAvailableInShelf)
import EmbeddedActivitiesActionCreators from "EmbeddedActivitiesActionCreators" /* 8993 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((guildId, arg1) => {
  let closure_2;
  _require = guildId;
  let obj = require("react");
  const cResult = obj.c(8);
  let obj2 = require("useIsActivitiesEnabledForCurrentPlatform");
  const isActivitiesEnabledForCurrentPlatform = obj2.useIsActivitiesEnabledForCurrentPlatform();
  const tmp3 = isActivitiesEnabledForCurrentPlatform(9081)(arg1);
  if (cResult[0] === guildId) {
    let tmp4;
    if (cResult[1] === tmp3) {
      tmp4 = cResult[2];
    }
    dependencyMap = tmp4;
    if (cResult[3] === guildId) {
      if (cResult[4] === isActivitiesEnabledForCurrentPlatform) {
        let tmp6;
        let tmp7;
        if (cResult[5] === tmp4) {
          tmp6 = cResult[6];
          tmp7 = cResult[7];
        }
        const effect = react.useEffect(tmp6, tmp7);
        if (tmp4) {
          tmp4 = isActivitiesEnabledForCurrentPlatform;
        }
        return tmp4;
      }
    }
    const fn = function o() {
      const tmp = closure_2 && isActivitiesEnabledForCurrentPlatform;
      if (tmp) {
        const obj2 = { guildId };
        const obj = EmbeddedActivitiesActionCreators;
        const shelf = obj.fetchShelf(obj2);
      }
    };
    const items = [guildId, isActivitiesEnabledForCurrentPlatform, tmp4];
    cResult[3] = guildId;
    cResult[4] = isActivitiesEnabledForCurrentPlatform;
    cResult[5] = tmp4;
    cResult[6] = fn;
    cResult[7] = items;
    tmp7 = items;
    tmp6 = fn;
  }
  cResult[0] = guildId;
  cResult[1] = tmp3;
  cResult[2] = null != guildId && "" !== guildId || tmp3;
  tmp4 = tmp5;
}) : ((guildId, arg1) => {
  let closure_2;
  _require = guildId;
  let obj = require("useIsActivitiesEnabledForCurrentPlatform");
  const isActivitiesEnabledForCurrentPlatform = obj.useIsActivitiesEnabledForCurrentPlatform();
  let tmp3 = null != guildId;
  const tmp2 = isActivitiesEnabledForCurrentPlatform(9081)(arg1);
  if (tmp3) {
    tmp3 = "" !== guildId;
  }
  if (!tmp3) {
    tmp3 = tmp2;
  }
  dependencyMap = tmp3;
  const items = [guildId, isActivitiesEnabledForCurrentPlatform, tmp3];
  const effect = react.useEffect(() => {
    const tmp = closure_2 && isActivitiesEnabledForCurrentPlatform;
    if (tmp) {
      const obj2 = { guildId };
      const obj = EmbeddedActivitiesActionCreators;
      const shelf = obj.fetchShelf(obj2);
    }
  }, items);
  if (tmp3) {
    tmp3 = isActivitiesEnabledForCurrentPlatform;
  }
  return tmp3;
});
const result = size.fileFinishedImporting("modules/activities/useIsActivitiesAvailableInShelf.tsx");

export default tmp2;