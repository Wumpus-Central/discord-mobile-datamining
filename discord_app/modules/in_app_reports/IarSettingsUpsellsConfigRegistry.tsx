// discord_app/modules/in_app_reports/IarSettingsUpsellsConfigRegistry.tsx
import c from "../../../_runtime/00576_c.js";
import GlobalUtils from "../../utils/GlobalUtils.tsx";
import IarSettingsUpsellsConfigDmSpamFilterDefault from "IarSettingsUpsellsConfigDmSpamFilter.tsx";
import IarSettingsUpsellsConfigScFiltersSexualMediaDefault from "IarSettingsUpsellsConfigScFiltersSexualMedia.tsx";
import IarSettingsUpsellsConfigScFiltersGraphicMediaDefault from "IarSettingsUpsellsConfigScFiltersGraphicMedia.tsx";
import noop from "../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
const SettingsUpsellsConfigRegistry = {};
SettingsUpsellsConfigRegistry[fn(8313).SettingsUpsells.SAFETY_DM_SPAM_FILTER] =
  IarSettingsUpsellsConfigDmSpamFilterDefault;
SettingsUpsellsConfigRegistry[fn(8313).SettingsUpsells.SAFETY_SC_FILTERS_SEXUAL_MEDIA] =
  IarSettingsUpsellsConfigScFiltersSexualMediaDefault;
SettingsUpsellsConfigRegistry[fn(8313).SettingsUpsells.SAFETY_SC_FILTERS_GRAPHIC_MEDIA] =
  IarSettingsUpsellsConfigScFiltersGraphicMediaDefault;
fn(558);
const ReactCompilerGating = fn(558);
let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const obj = c;
      const cResult = obj.c(2);
      if (null == arg0) {
        return null;
      } else if (cResult[0] !== arg0) {
        closure_0 = arg0;
        const items = [];
        const _Object = Object;
        const entries = Object.entries(obj);
        const item = entries.forEach((item) => {
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
        let tmp6 = null;
        if (0 !== items.length) {
          tmp6 = items;
        }
        cResult[0] = arg0;
        cResult[1] = tmp6;
      }
    }
  : (arg0) => {
      closure_0 = arg0;
      let items = [arg0];
      return noop.useMemo(() => {
        let tmp = null;
        if (null != closure_0) {
          const items = [];
          const _Object = Object;
          const entries = Object.entries(obj);
          const item = entries.forEach((item) => {
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
const size = fn(2);
const result = size.fileFinishedImporting("modules/in_app_reports/IarSettingsUpsellsConfigRegistry.tsx");

export { SettingsUpsellsConfigRegistry };
export const useIarReportSettingsUpsells = tmp2;
export const useSettingsUpsellsConfigs = ReactCompilerGating.isReactCompilerEnabled()
  ? (arr, arg1) => {
      _require = arg1;
      let found = dependencyMap;
      const cResult = require("c").c(5);
      if (cResult[0] === arg1) {
        if (cResult[1] === arr) {
          return cResult[2];
        }
      }
      if (cResult[3] !== arg1) {
        const fn = function n(arg0) {
          ({ predicate, eligibleChannelTypes } = obj[arg0]);
          let tmp3 = null == predicate;
          if (!tmp3) {
            let predicateResult;
            if (predicate != null) {
              predicateResult = predicate();
            }
            tmp3 = true === predicateResult;
          }
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
        let tmp4 = fn;
      } else {
        tmp4 = cResult[4];
      }
      const mapped = arr.map(tmp4);
      found = mapped.filter(require("GlobalUtils").isNotNullish);
      cResult[0] = arg1;
      cResult[1] = arr;
      cResult[2] = found;
    }
  : (arg0, arg1) => {
      closure_0 = arg0;
      closure_1 = arg1;
      const items = [arg0, arg1];
      return noop.useMemo(() => {
        const mapped = closure_0.map((item) => {
          ({ predicate, eligibleChannelTypes } = SettingsUpsellsConfigRegistry[item]);
          let tmp3 = null == predicate;
          if (!tmp3) {
            let predicateResult;
            if (predicate != null) {
              predicateResult = predicate();
            }
            tmp3 = true === predicateResult;
          }
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
