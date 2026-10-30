// discord_app/modules/main_tabs_v2/native/tabs/guilds/HomeDrawerTTIFirstContentfulPaint.tsx
import TTIAnalyticsUtils from "../../../../tti_analytics/native/TTIAnalyticsUtils.tsx";
import TTIFirstContentfulPaint from "../../../../tti_analytics/native/TTIFirstContentfulPaint.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/main_tabs_v2/native/tabs/guilds/HomeDrawerTTIFirstContentfulPaint.tsx",
);

export default function HomeDrawerTTIFirstContentfulPaint() {
  const layoutEffect = noop.useLayoutEffect(() => {
    TTIAnalyticsUtils.trackAppUIViewed();
  }, []);
  return jsx(TTIFirstContentfulPaint.TTIFirstContentfulPaint, { label: "home_drawer", checkFocusedScreen: "guilds" });
}
