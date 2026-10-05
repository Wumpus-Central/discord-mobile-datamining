// discord_app/modules/app_launcher/native/screens/home/TrackSectionHeader.tsx
import react from "../../../../../../_runtime/00576_react.js";
import discord_common_AnalyticsUtils from "../../../../../../discord_common/js/packages/analytics-utils/AnalyticsUtils.tsx";
import useTrackImpressionDefault from "../../../../app_analytics/useTrackImpression.tsx";
import AppLauncherStore from "../../../AppLauncherStore.tsx";
import ReactCompilerGating_mod from "../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

let children;

let ReactCompilerGating = ReactCompilerGating_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (children) => {
      children = children.children;
      closure_4(children.sectionName, children.numItems, children.numVisibleItems, children.viewed);
      return children;
    }
  : (children) => {
      children = children.children;
      closure_4(children.sectionName, children.numItems, children.numVisibleItems, children.viewed);
      return children;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (section_name, num_items, num_visible_items, arg3) => {
      let first;
      const obj = react;
      const cResult = obj.c(9);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const entrypointResult = AppLauncherStore.entrypoint();
        cResult[0] = entrypointResult;
        first = entrypointResult;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === num_items) {
        if (cResult[2] === num_visible_items) {
          let tmp7;
          let tmp10;
          let tmp11;
          if (cResult[3] === section_name) {
            tmp7 = cResult[4];
          }
          if (cResult[5] !== !arg3) {
            const obj2 = { disableTrack: !arg3 };
            cResult[5] = !arg3;
            cResult[6] = obj2;
            tmp10 = obj2;
          } else {
            tmp10 = cResult[6];
          }
          if (cResult[7] !== arg3) {
            const items = [arg3];
            cResult[7] = arg3;
            cResult[8] = items;
            tmp11 = items;
          } else {
            tmp11 = cResult[8];
          }
          useTrackImpressionDefault(tmp7, tmp10, tmp11);
        }
      }
      const obj3 = {
        type: discord_common_AnalyticsUtils.ImpressionTypes.VIEW,
        name: discord_common_AnalyticsUtils.ImpressionNames.APP_LAUNCHER_SECTION,
        properties: { section_name, num_items, num_visible_items, source: first },
      };
      cResult[1] = num_items;
      cResult[2] = num_visible_items;
      cResult[3] = section_name;
      cResult[4] = obj3;
      tmp7 = obj3;
    }
  : (section_name, num_items, num_visible_items, disableTrack) => {
      const obj = {
        type: discord_common_AnalyticsUtils.ImpressionTypes.VIEW,
        name: discord_common_AnalyticsUtils.ImpressionNames.APP_LAUNCHER_SECTION,
        properties: { section_name, num_items, num_visible_items, source: AppLauncherStore.entrypoint() },
      };
      const items = [];
      const obj3 = { disableTrack: !disableTrack };
      items[0] = disableTrack;
      const tmp = useTrackImpressionDefault;
      ({ section_name, num_items, num_visible_items, source: AppLauncherStore.entrypoint() });
      tmp(obj, obj3, items);
    };
const result = size.fileFinishedImporting("modules/app_launcher/native/screens/home/TrackSectionHeader.tsx");

export default tmp2;
