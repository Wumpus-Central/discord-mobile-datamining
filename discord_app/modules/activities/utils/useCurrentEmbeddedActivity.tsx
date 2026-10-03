// === Module 9132: useCurrentEmbeddedActivity ===

// Module 9132 (useCurrentEmbeddedActivity)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2050 */;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/activities/utils/useCurrentEmbeddedActivity.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [EmbeddedActivitiesStore];
    const fn = function u() {
      return currentEmbeddedActivity.getCurrentEmbeddedActivity();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  return initialize.useStateFromStores(tmp4, tmp5);
}) : (() => {
  const items = [EmbeddedActivitiesStore];
  return initialize.useStateFromStores(items, () => currentEmbeddedActivity.getCurrentEmbeddedActivity());
});