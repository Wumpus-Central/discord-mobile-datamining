// === Module 11800: TrackSectionHeader ===

// Module 11800 (TrackSectionHeader)
import c from "c" /* 576 */;
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1272 */;
import useTrackImpressionDefault from "useTrackImpression" /* 8941 */;
import AppLauncherStore from "AppLauncherStore" /* 11791 */;

require = fn;
fn(558);
const ReactCompilerGating = fn(558);
let closure_4 = ReactCompilerGating.isReactCompilerEnabled() ? (function useTrackSectionHeader(section_name, num_items, num_visible_items, arg3) {
  const cResult = c.c(9);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const entrypointResult = AppLauncherStore.entrypoint();
    cResult[0] = entrypointResult;
    let first = entrypointResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === num_items) {
    if (cResult[2] === num_visible_items) {
      if (cResult[3] === section_name) {
        let tmp7 = cResult[4];
      }
      if (cResult[5] !== !arg3) {
        const obj2 = { disableTrack: tmp9 };
        cResult[5] = tmp9;
        cResult[6] = obj2;
        let tmp10 = obj2;
      } else {
        tmp10 = cResult[6];
      }
      if (cResult[7] !== arg3) {
        const items = [arg3];
        cResult[7] = arg3;
        cResult[8] = items;
        let tmp11 = items;
      } else {
        tmp11 = cResult[8];
      }
      useTrackImpressionDefault(tmp7, tmp10, tmp11);
    }
  }
  const obj3 = { type: discord_common_AnalyticsUtils.ImpressionTypes.VIEW, name: discord_common_AnalyticsUtils.ImpressionNames.APP_LAUNCHER_SECTION, properties: { section_name, num_items, num_visible_items, source: first } };
  cResult[1] = num_items;
  cResult[2] = num_visible_items;
  cResult[3] = section_name;
  cResult[4] = obj3;
  tmp7 = obj3;
}) : (function useTrackSectionHeader(section_name, num_items, num_visible_items, disableTrack) {
  const obj = { type: discord_common_AnalyticsUtils.ImpressionTypes.VIEW, name: discord_common_AnalyticsUtils.ImpressionNames.APP_LAUNCHER_SECTION, properties: null };
  const tmp = useTrackImpressionDefault;
  obj.properties = { section_name, num_items, num_visible_items, source: AppLauncherStore.entrypoint() };
  const items = [disableTrack];
  tmp(obj, { disableTrack: !disableTrack }, items);
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_launcher/native/screens/home/TrackSectionHeader.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function TrackSectionHeader(sectionName) {
  closure_4(sectionName.sectionName, sectionName.numItems, sectionName.numVisibleItems, sectionName.viewed);
  return sectionName.children;
}) : (function TrackSectionHeader(sectionName) {
  closure_4(sectionName.sectionName, sectionName.numItems, sectionName.numVisibleItems, sectionName.viewed);
  return sectionName.children;
});