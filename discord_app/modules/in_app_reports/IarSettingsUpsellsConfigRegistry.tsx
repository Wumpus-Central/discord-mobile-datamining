// discord_app/modules/in_app_reports/IarSettingsUpsellsConfigRegistry.tsx
import react2 from "../../../_runtime/00576_react.js";
import GlobalUtils from "../../utils/GlobalUtils.tsx";
import MenuTypes from "MenuTypes.tsx";
import IarSettingsUpsellsConfigDmSpamFilterDefault from "IarSettingsUpsellsConfigDmSpamFilter.tsx";
import IarSettingsUpsellsConfigScFiltersSexualMediaDefault from "IarSettingsUpsellsConfigScFiltersSexualMedia.tsx";
import IarSettingsUpsellsConfigScFiltersGraphicMediaDefault from "IarSettingsUpsellsConfigScFiltersGraphicMedia.tsx";
import react from "../../../_runtime/00019_react.js";
import ReactCompilerGating_mod from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require;

const SettingsUpsellsConfigRegistry = {};
SettingsUpsellsConfigRegistry[MenuTypes.SettingsUpsells.SAFETY_DM_SPAM_FILTER] =
  IarSettingsUpsellsConfigDmSpamFilterDefault;
SettingsUpsellsConfigRegistry[MenuTypes.SettingsUpsells.SAFETY_SC_FILTERS_SEXUAL_MEDIA] =
  IarSettingsUpsellsConfigScFiltersSexualMediaDefault;
SettingsUpsellsConfigRegistry[MenuTypes.SettingsUpsells.SAFETY_SC_FILTERS_GRAPHIC_MEDIA] =
  IarSettingsUpsellsConfigScFiltersGraphicMediaDefault;
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const obj = react2;
      const cResult = obj.c(2);
      let tmp2 = null;
      if (null != arg0) {
        let tmp3;
        if (cResult[0] !== arg0) {
          let closure_0 = arg0;
          const items = [];
          const _Object = Object;
          const entries = Object.entries(obj);
          const item = entries.forEach((item) => {
            let tmp;
            let tmp2;
            [tmp, tmp2] = item;
            let hasItem = null == tmp2.eligibleReportSubtypes;
            if (!hasItem) {
              const eligibleReportSubtypes = tmp2.eligibleReportSubtypes;
              hasItem = eligibleReportSubtypes.includes(closure_0);
            }
            if (hasItem) {
              items.push(tmp);
            }
          });
          let tmp7 = null;
          if (0 !== items.length) {
            tmp7 = items;
          }
          cResult[0] = arg0;
          cResult[1] = tmp7;
          tmp3 = tmp7;
        } else {
          tmp3 = cResult[1];
        }
        tmp2 = tmp3;
      }
      return tmp2;
    }
  : (arg0) => {
      let closure_0 = arg0;
      let items = [arg0];
      return react.useMemo(() => {
        let tmp = null;
        if (null != closure_0) {
          const items = [];
          const tmp2 = globalThis;
          const _Object = Object;
          const entries = Object.entries(obj);
          const item = entries.forEach((item) => {
            let tmp;
            let tmp2;
            [tmp, tmp2] = item;
            let hasItem = null == tmp2.eligibleReportSubtypes;
            if (!hasItem) {
              const eligibleReportSubtypes = tmp2.eligibleReportSubtypes;
              hasItem = eligibleReportSubtypes.includes(closure_0);
            }
            if (hasItem) {
              items.push(tmp);
            }
          });
          let tmp5 = null;
          if (0 !== items.length) {
            tmp5 = items;
          }
          tmp = tmp5;
        }
        return tmp;
      }, items);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arr, arg1) => {
      let closure_0;
      let tmp5;
      _require = arg1;
      const obj = require("react");
      const cResult = obj.c(5);
      const tmp = _require;
      if (cResult[0] === arg1) {
        let tmp4;
        if (cResult[1] === arr) {
          tmp4 = cResult[2];
        }
        return tmp4;
      }
      if (cResult[3] !== arg1) {
        const fn = function n(arg0) {
          let eligibleChannelTypes;
          let predicate;
          ({ predicate, eligibleChannelTypes } = obj[arg0]);
          let tmp3 = null == predicate;
          if (!tmp3) {
            let predicateResult;
            if (predicate != null) {
              predicateResult = predicate();
            }
            tmp3 = true === predicateResult;
          }
          const tmp5 = null == closure_0 || null == eligibleChannelTypes || eligibleChannelTypes.includes(closure_0);
          if (tmp3) {
            tmp3 = tmp5;
          }
          let tmp6 = null;
          if (tmp3) {
            tmp6 = tmp2;
          }
          return tmp6;
        };
        cResult[3] = arg1;
        cResult[4] = fn;
        tmp5 = fn;
      } else {
        tmp5 = cResult[4];
      }
      const mapped = arr.map(tmp5);
      const found = mapped.filter(tmp(1375).isNotNullish);
      cResult[0] = arg1;
      cResult[1] = arr;
      cResult[2] = found;
      tmp4 = found;
    }
  : (arg0, arg1) => {
      let closure_0 = arg0;
      let closure_1 = arg1;
      const items = [arg0, arg1];
      return react.useMemo(() => {
        const mapped = closure_0.map((item) => {
          let eligibleChannelTypes;
          let predicate;
          ({ predicate, eligibleChannelTypes } = SettingsUpsellsConfigRegistry[item]);
          let tmp3 = null == predicate;
          if (!tmp3) {
            let predicateResult;
            if (predicate != null) {
              predicateResult = predicate();
            }
            tmp3 = true === predicateResult;
          }
          const tmp5 =
            null == closure_1_1 || null == eligibleChannelTypes || eligibleChannelTypes.includes(closure_1_1);
          if (tmp3) {
            tmp3 = tmp5;
          }
          let tmp6 = null;
          if (tmp3) {
            tmp6 = tmp2;
          }
          return tmp6;
        });
        return mapped.filter(GlobalUtils.isNotNullish);
      }, items);
    };
const result = size.fileFinishedImporting("modules/in_app_reports/IarSettingsUpsellsConfigRegistry.tsx");

export { SettingsUpsellsConfigRegistry };
export const useIarReportSettingsUpsells = tmp2;
export const useSettingsUpsellsConfigs = tmp3;
