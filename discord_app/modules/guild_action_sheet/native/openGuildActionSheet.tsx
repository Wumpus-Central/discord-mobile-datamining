// === Module 16345: openGuildActionSheet ===

// Module 16345 (openGuildActionSheet)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1256 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2121 */;
import FavoritesUtils from "FavoritesUtils" /* 5180 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5552 */;
import age_gate_AgeGateUtils from "age_gate/AgeGateUtils" /* 11259 */;
import Constants from "Constants" /* 1072 */;
import size from "module_2" /* 2 */;

({ AnalyticEvents: c3, GuildFeatures: closure_4 } = Constants);
const result = size.fileFinishedImporting("modules/guild_action_sheet/native/openGuildActionSheet.tsx");

export default function openGuildActionSheet(id) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = true;
  }
  if (!obj.isFavoritesGuildId(id.id)) {
    const obj3 = { type: "Guild Profile", guild_id: id.id };
    AnalyticsUtilsDefault.track(constants.OPEN_POPOUT, obj3);
    if (tmpResult.shouldNSFWGateGuild(id.id)) {
      const obj4 = { guild: id };
      ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(16346, dependencyMap.paths), "NsfwGateGuildSettingsActionSheet", obj4);
      const tmp3Result = ActionSheetActionCreatorsDefault;
    } else {
      const features = id.features;
      const hasItem = features.has(constants2.HUB);
      const openLazy = ActionSheetActionCreatorsDefault.openLazy;
      const tmpResult2 = asyncRequireImpl;
      if (hasItem) {
        const _HermesInternal2 = HermesInternal;
        const obj5 = { guild: id, expanded: flag };
        openLazy(tmpResult2(16414, dependencyMap.paths), "GuildActionSheet:" + id.id, obj5);
        const tmpResult1Result = tmpResult2(16414, dependencyMap.paths);
      } else {
        const _HermesInternal = HermesInternal;
        const obj6 = { guild: id, expanded: flag };
        openLazy(tmpResult2(16420, dependencyMap.paths), "GuildActionSheet:" + id.id, obj6);
        const tmpResult1Result1 = tmpResult2(16420, dependencyMap.paths);
      }
      const tmp3Result2 = ActionSheetActionCreatorsDefault;
    }
    tmpResult = age_gate_AgeGateUtils;
  }
  obj = FavoritesUtils;
};