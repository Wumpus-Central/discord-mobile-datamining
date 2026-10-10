// === Module 16795: HomeDrawerTTIFirstContentfulPaint ===

// Module 16795 (HomeDrawerTTIFirstContentfulPaint)
import c from "c" /* 576 */;
import TTIAnalyticsUtils from "TTIAnalyticsUtils" /* 7196 */;
import TTIFirstContentfulPaint from "TTIFirstContentfulPaint" /* 11492 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/guilds/HomeDrawerTTIFirstContentfulPaint.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function HomeDrawerTTIFirstContentfulPaint() {
  const cResult = c.c(3);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function o() {
      TTIAnalyticsUtils.trackAppUIViewed();
    };
    const items = [];
    cResult[0] = fn;
    cResult[1] = items;
    tmp4 = fn;
    tmp5 = items;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const layoutEffect = noop.useLayoutEffect(tmp4, tmp5);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp9 = jsx(TTIFirstContentfulPaint.TTIFirstContentfulPaint, { label: "home_drawer", checkFocusedScreen: "guilds" });
    cResult[2] = tmp9;
    let tmp7 = tmp9;
  } else {
    tmp7 = cResult[2];
  }
  return tmp7;
}) : (function HomeDrawerTTIFirstContentfulPaint() {
  const layoutEffect = noop.useLayoutEffect(() => {
    TTIAnalyticsUtils.trackAppUIViewed();
  }, []);
  return jsx(TTIFirstContentfulPaint.TTIFirstContentfulPaint, { label: "home_drawer", checkFocusedScreen: "guilds" });
});