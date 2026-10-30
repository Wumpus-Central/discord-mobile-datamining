// === Module 15690: openGuildActionSheet ===

// Module 15690 (openGuildActionSheet)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1253 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1995 */;
import FavoritesUtils from "FavoritesUtils" /* 4883 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5253 */;
import age_gate_AgeGateUtils from "age_gate/AgeGateUtils" /* 9951 */;
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
      ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(15691, dependencyMap.paths), "NsfwGateGuildSettingsActionSheet", obj4);
      const tmp3Result = ActionSheetActionCreatorsDefault;
    } else {
      const features = id.features;
      const hasItem = features.has(constants2.HUB);
      const openLazy = ActionSheetActionCreatorsDefault.openLazy;
      const tmpResult2 = asyncRequireImpl;
      if (hasItem) {
        const _HermesInternal2 = HermesInternal;
        const obj5 = { guild: id, expanded: flag };
        openLazy(tmpResult2(15753, dependencyMap.paths), "GuildActionSheet:" + id.id, obj5);
        const tmpResult1Result = tmpResult2(15753, dependencyMap.paths);
      } else {
        const _HermesInternal = HermesInternal;
        const obj6 = { guild: id, expanded: flag };
        openLazy(tmpResult2(15759, dependencyMap.paths), "GuildActionSheet:" + id.id, obj6);
        const tmpResult1Result1 = tmpResult2(15759, dependencyMap.paths);
      }
      const tmp3Result2 = ActionSheetActionCreatorsDefault;
    }
    tmpResult = age_gate_AgeGateUtils;
  }
  obj = FavoritesUtils;
};