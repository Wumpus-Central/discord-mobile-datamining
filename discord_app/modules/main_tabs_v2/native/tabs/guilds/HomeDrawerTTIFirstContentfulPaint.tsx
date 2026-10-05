// discord_app/modules/main_tabs_v2/native/tabs/guilds/HomeDrawerTTIFirstContentfulPaint.tsx
import Fragment from "../../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../../_runtime/00576_react.js";
import TTIAnalyticsUtils from "../../../../tti_analytics/native/TTIAnalyticsUtils.tsx";
import TTIFirstContentfulPaint from "../../../../tti_analytics/native/TTIFirstContentfulPaint.tsx";
import react from "../../../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

const jsx = Fragment.jsx;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let tmp4;
      let tmp5;
      let tmp7;
      let obj = react2;
      const cResult = obj.c(3);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function c() {
          const obj = TTIAnalyticsUtils;
          obj.trackAppUIViewed();
        };
        const items = [];
        cResult[0] = fn;
        cResult[1] = items;
        tmp4 = fn;
        tmp5 = items;
      } else {
        [tmp4, tmp5] = cResult;
      }
      const layoutEffect = react.useLayoutEffect(tmp4, tmp5);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp9 = jsx(TTIFirstContentfulPaint.TTIFirstContentfulPaint, {
          label: "home_drawer",
          checkFocusedScreen: "guilds",
        });
        cResult[2] = tmp9;
        tmp7 = tmp9;
      } else {
        tmp7 = cResult[2];
      }
      return tmp7;
    }
  : () => {
      const layoutEffect = react.useLayoutEffect(() => {
        const obj = TTIAnalyticsUtils;
        obj.trackAppUIViewed();
      }, []);
      return jsx(TTIFirstContentfulPaint.TTIFirstContentfulPaint, {
        label: "home_drawer",
        checkFocusedScreen: "guilds",
      });
    };
const result = size.fileFinishedImporting(
  "modules/main_tabs_v2/native/tabs/guilds/HomeDrawerTTIFirstContentfulPaint.tsx",
);

export default tmp2;
