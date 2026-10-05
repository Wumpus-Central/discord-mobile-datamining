// discord_app/modules/app_launcher/native/hooks/useTrackAppLauncherItemImpressionOnFirstView.tsx
import discord_common_AnalyticsUtils from "../../../../../discord_common/js/packages/analytics-utils/AnalyticsUtils.tsx";
import useTrackImpression from "../../../app_analytics/useTrackImpression.tsx";
import react from "../../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let dependencyMap, set;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? function () {
      let entrypoint;
      let first;
      let ref;
      let tmp10;
      let tmp7;
      let tmp9;
      let obj = entrypoint(576);
      const cResult = obj.c(6);
      let obj2 = entrypoint(10994);
      const tmp = entrypoint;
      entrypoint = obj2.useAppLauncherContext().entrypoint;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const _Set = Set;
        const self = this;
        const self2 = this;
        set = new Set();
        cResult[0] = set;
        first = set;
      } else {
        first = cResult[0];
      }
      dependencyMap = react.useRef(first);
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function c() {
          const current = ref.current;
          current.clear();
        };
        cResult[1] = fn;
        tmp7 = fn;
      } else {
        tmp7 = cResult[1];
      }
      const tmpResult = tmp(1491);
      const focusEffect = tmpResult.useFocusEffect(tmp7);
      if (cResult[2] !== entrypoint) {
        const fn2 = function p(itemKey) {
          let applicationFlags;
          let applicationId;
          let commandId;
          let obj2;
          let sectionName;
          let sectionOverallPosition;
          let sectionPosition;
          itemKey = itemKey.itemKey;
          const current = ref.current;
          ({ sectionName, sectionPosition, sectionOverallPosition, applicationId, commandId, applicationFlags } =
            itemKey);
          if (!current.has(itemKey)) {
            const current2 = ref.current;
            current2.add(itemKey);
            const obj = {
              type: discord_common_AnalyticsUtils.ImpressionTypes.VIEW,
              name: discord_common_AnalyticsUtils.ImpressionNames.APP_LAUNCHER_ITEM,
              properties: obj2,
            };
            const trackImpression = useTrackImpression.trackImpression;
            useTrackImpression;
            obj2 = {
              source: entrypoint,
              section_name: sectionName,
              section_position: sectionPosition,
              section_overall_position: sectionOverallPosition,
              application_id: applicationId,
              command_id: commandId,
              application_flags: applicationFlags,
            };
            trackImpression(obj);
          }
        };
        cResult[2] = entrypoint;
        cResult[3] = fn2;
        tmp9 = fn2;
      } else {
        tmp9 = cResult[3];
      }
      if (cResult[4] !== tmp9) {
        const obj3 = { trackAppLauncherItemImpressionOnFirstView: tmp9 };
        cResult[4] = tmp9;
        cResult[5] = obj3;
        tmp10 = obj3;
      } else {
        tmp10 = cResult[5];
      }
      return tmp10;
    }
  : () => {
      let entrypoint;
      let items;
      let ref;
      let obj = entrypoint(10994);
      entrypoint = obj.useAppLauncherContext().entrypoint;
      const useRef = react.useRef;
      set = new Set();
      dependencyMap = useRef(set);
      let obj2 = entrypoint(1491);
      const focusEffect = obj2.useFocusEffect(
        react.useCallback(() => {
          const current = ref.current;
          current.clear();
        }, []),
      );
      const obj3 = {
        trackAppLauncherItemImpressionOnFirstView: react.useCallback((itemKey) => {
          let applicationFlags;
          let applicationId;
          let commandId;
          let obj2;
          let sectionName;
          let sectionOverallPosition;
          let sectionPosition;
          itemKey = itemKey.itemKey;
          const current = ref.current;
          ({ sectionName, sectionPosition, sectionOverallPosition, applicationId, commandId, applicationFlags } =
            itemKey);
          if (!current.has(itemKey)) {
            const current2 = ref.current;
            current2.add(itemKey);
            const obj = {
              type: discord_common_AnalyticsUtils.ImpressionTypes.VIEW,
              name: discord_common_AnalyticsUtils.ImpressionNames.APP_LAUNCHER_ITEM,
              properties: obj2,
            };
            const trackImpression = useTrackImpression.trackImpression;
            useTrackImpression;
            obj2 = {
              source: entrypoint,
              section_name: sectionName,
              section_position: sectionPosition,
              section_overall_position: sectionOverallPosition,
              application_id: applicationId,
              command_id: commandId,
              application_flags: applicationFlags,
            };
            trackImpression(obj);
          }
        }, items),
      };
      items = [entrypoint];
      return obj3;
    };
const result = size.fileFinishedImporting(
  "modules/app_launcher/native/hooks/useTrackAppLauncherItemImpressionOnFirstView.tsx",
);

export const useTrackAppLauncherItemImpressionOnFirstView = tmp2;
