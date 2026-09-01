// discord_app/modules/in_app_reports/IarSettingsUpsellsConfigRegistry.tsx
import itemsDefault from "IarSettingsUpsellsConfigDmSpamFilter.tsx";
import itemsDefault2 from "IarSettingsUpsellsConfigScFiltersSexualMedia.tsx";
import itemsDefault3 from "IarSettingsUpsellsConfigScFiltersGraphicMedia.tsx";
import closure_2 from "../../../_runtime/00019_noop.js";

const require = arg1;
const obj = {};
obj[require("ReportNames").SettingsUpsells.SAFETY_DM_SPAM_FILTER] = itemsDefault;
obj[require("ReportNames").SettingsUpsells.SAFETY_SC_FILTERS_SEXUAL_MEDIA] = itemsDefault2;
obj[require("ReportNames").SettingsUpsells.SAFETY_SC_FILTERS_GRAPHIC_MEDIA] = itemsDefault3;
const result = require("set").fileFinishedImporting("modules/in_app_reports/IarSettingsUpsellsConfigRegistry.tsx");

export const SettingsUpsellsConfigRegistry = obj;
export const useIarReportSettingsUpsells = function useIarReportSettingsUpsells(reportSubType) {
  closure_0 = reportSubType;
  let items = [reportSubType];
  return React.useMemo(() => {
    let tmp = null;
    if (null != closure_0) {
      const items = [];
      const _Object = Object;
      const entries = Object.entries(closure_1_3);
      const item = entries.forEach((arg0) => {
        [tmp, tmp2] = arg0;
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
export const useSettingsUpsellsConfigs = function useSettingsUpsellsConfigs(settingsUpsells, type) {
  closure_0 = settingsUpsells;
  closure_1 = type;
  const items = [settingsUpsells, type];
  return React.useMemo(() => {
    const mapped = settingsUpsells.map((arg0) => {
      ({ predicate, eligibleChannelTypes } = closure_1_3[arg0]);
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
    return mapped.filter(settingsUpsells(type[5]).isNotNullish);
  }, items);
};
