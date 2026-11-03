// === Module 8488: IarSettingsUpsellsConfigRegistry ===

// Module 8488 (IarSettingsUpsellsConfigRegistry)
import GlobalUtils from "GlobalUtils" /* 1380 */;
import IarSettingsUpsellsConfigDmSpamFilterDefault from "IarSettingsUpsellsConfigDmSpamFilter" /* 8489 */;
import IarSettingsUpsellsConfigScFiltersSexualMediaDefault from "IarSettingsUpsellsConfigScFiltersSexualMedia" /* 8490 */;
import IarSettingsUpsellsConfigScFiltersGraphicMediaDefault from "IarSettingsUpsellsConfigScFiltersGraphicMedia" /* 8491 */;
import noop from "module_19" /* 19 */;

require = fn;
const SettingsUpsellsConfigRegistry = {};
SettingsUpsellsConfigRegistry[fn(8477).SettingsUpsells.SAFETY_DM_SPAM_FILTER] = IarSettingsUpsellsConfigDmSpamFilterDefault;
SettingsUpsellsConfigRegistry[fn(8477).SettingsUpsells.SAFETY_SC_FILTERS_SEXUAL_MEDIA] = IarSettingsUpsellsConfigScFiltersSexualMediaDefault;
SettingsUpsellsConfigRegistry[fn(8477).SettingsUpsells.SAFETY_SC_FILTERS_GRAPHIC_MEDIA] = IarSettingsUpsellsConfigScFiltersGraphicMediaDefault;
const size = fn(2);
const result = size.fileFinishedImporting("modules/in_app_reports/IarSettingsUpsellsConfigRegistry.tsx");

export { SettingsUpsellsConfigRegistry };
export function useIarReportSettingsUpsells(reportSubType) {
  closure_0 = reportSubType;
  items = [reportSubType];
  return noop.useMemo(() => {
    let tmp = null;
    if (null != closure_0) {
      items = [];
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
}
export function useSettingsUpsellsConfigs(settingsUpsells, type) {
  closure_1 = type;
  items = [settingsUpsells, type];
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
}