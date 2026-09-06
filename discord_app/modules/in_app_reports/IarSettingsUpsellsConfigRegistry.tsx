// === Module 8640: IarSettingsUpsellsConfigRegistry ===

// Module 8640 (IarSettingsUpsellsConfigRegistry)
import GlobalUtils from "GlobalUtils" /* 1369 */;
import IarSettingsUpsellsConfigDmSpamFilterDefault from "IarSettingsUpsellsConfigDmSpamFilter" /* 8641 */;
import IarSettingsUpsellsConfigScFiltersSexualMediaDefault from "IarSettingsUpsellsConfigScFiltersSexualMedia" /* 8642 */;
import IarSettingsUpsellsConfigScFiltersGraphicMediaDefault from "IarSettingsUpsellsConfigScFiltersGraphicMedia" /* 8643 */;
import noop from "module_19" /* 19 */;

require = fn;
const SettingsUpsellsConfigRegistry = {};
SettingsUpsellsConfigRegistry[fn(8630).SettingsUpsells.SAFETY_DM_SPAM_FILTER] = IarSettingsUpsellsConfigDmSpamFilterDefault;
SettingsUpsellsConfigRegistry[fn(8630).SettingsUpsells.SAFETY_SC_FILTERS_SEXUAL_MEDIA] = IarSettingsUpsellsConfigScFiltersSexualMediaDefault;
SettingsUpsellsConfigRegistry[fn(8630).SettingsUpsells.SAFETY_SC_FILTERS_GRAPHIC_MEDIA] = IarSettingsUpsellsConfigScFiltersGraphicMediaDefault;
const size = fn(2);
const result = size.fileFinishedImporting("modules/in_app_reports/IarSettingsUpsellsConfigRegistry.tsx");

export { SettingsUpsellsConfigRegistry };
export const useIarReportSettingsUpsells = function useIarReportSettingsUpsells(reportSubType) {
  closure_0 = reportSubType;
  let items = [reportSubType];
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
export const useSettingsUpsellsConfigs = function useSettingsUpsellsConfigs(settingsUpsells, type) {
  closure_1 = type;
  const items = [settingsUpsells, type];
  return noop.useMemo(() => {
    const mapped = settingsUpsells.map((item) => {
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