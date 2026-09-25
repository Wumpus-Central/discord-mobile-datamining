// === Module 15972: HomeDrawerTTIFirstContentfulPaint ===

// Module 15972 (HomeDrawerTTIFirstContentfulPaint)
import TTIAnalyticsUtils from "TTIAnalyticsUtils" /* 6890 */;
import TTIFirstContentfulPaint from "TTIFirstContentfulPaint" /* 11361 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/guilds/HomeDrawerTTIFirstContentfulPaint.tsx");

export default function HomeDrawerTTIFirstContentfulPaint() {
  const layoutEffect = noop.useLayoutEffect(() => {
    TTIAnalyticsUtils.trackAppUIViewed();
  }, []);
  return jsx(TTIFirstContentfulPaint.TTIFirstContentfulPaint, { label: "home_drawer", checkFocusedScreen: "guilds" });
};