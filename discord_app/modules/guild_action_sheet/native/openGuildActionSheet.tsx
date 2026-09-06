// === Module 13907: openGuildActionSheet ===

// Module 13907 (openGuildActionSheet)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import FavoritesUtils from "FavoritesUtils" /* 1982 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import age_gate_AgeGateUtils from "age_gate/AgeGateUtils" /* 10294 */;
import Constants from "Constants" /* 1074 */;
import size from "module_2" /* 2 */;

({ AnalyticEvents: c3, GuildFeatures: closure_4 } = Constants);
const result = size.fileFinishedImporting("modules/guild_action_sheet/native/openGuildActionSheet.tsx");

export default function openGuildActionSheet(id) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = true;
  }
  let obj = FavoritesUtils;
  if (!obj.isFavoritesGuildId(id.id)) {
    let obj1 = AnalyticsUtilsDefault;
    obj = { type: "Guild Profile", guild_id: id.id };
    obj1.track(constants.OPEN_POPOUT, obj);
    let tmpResult = age_gate_AgeGateUtils;
    if (tmpResult.shouldNSFWGateGuild(id.id)) {
      let tmp3Result = ActionSheetActionCreatorsDefault;
      obj = { guild: id };
      tmp3Result.openLazy(asyncRequireImpl(13908, dependencyMap.paths), "NsfwGateGuildSettingsActionSheet", obj);
    } else {
      const features = id.features;
      const hasItem = features.has(constants2.HUB);
      tmp3Result = ActionSheetActionCreatorsDefault;
      const openLazy = tmp3Result.openLazy;
      tmpResult = asyncRequireImpl;
      if (hasItem) {
        const _HermesInternal2 = HermesInternal;
        obj1 = { guild: id, expanded: flag };
        openLazy(tmpResult(13966, dependencyMap.paths), "GuildActionSheet:" + id.id, obj1);
        const tmpResult1Result = tmpResult(13966, dependencyMap.paths);
      } else {
        const _HermesInternal = HermesInternal;
        const obj2 = { guild: id, expanded: flag };
        openLazy(tmpResult(13972, dependencyMap.paths), "GuildActionSheet:" + id.id, obj2);
        const tmpResult1Result1 = tmpResult(13972, dependencyMap.paths);
      }
    }
  }
};