// discord_app/modules/guild_action_sheet/native/openGuildActionSheet.tsx
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import asyncRequireImpl from "../../../../_runtime/01897_asyncRequireImpl.js";
import FavoritesUtils from "../../favorites/FavoritesUtils.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import age_gate_AgeGateUtils from "../../age_gate/native/AgeGateUtils.tsx";
import Constants from "../../../Constants.tsx";
import size from "../../../../_runtime/metro/00002__.js";

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
      ActionSheetActionCreatorsDefault.openLazy(
        asyncRequireImpl(14022, dependencyMap.paths),
        "NsfwGateGuildSettingsActionSheet",
        obj4,
      );
      const tmp3Result = ActionSheetActionCreatorsDefault;
    } else {
      const features = id.features;
      const hasItem = features.has(constants2.HUB);
      const openLazy = ActionSheetActionCreatorsDefault.openLazy;
      const tmpResult2 = asyncRequireImpl;
      if (hasItem) {
        const _HermesInternal2 = HermesInternal;
        const obj5 = { guild: id, expanded: flag };
        openLazy(tmpResult2(14080, dependencyMap.paths), "GuildActionSheet:" + id.id, obj5);
        const tmpResult1Result = tmpResult2(14080, dependencyMap.paths);
      } else {
        const _HermesInternal = HermesInternal;
        const obj6 = { guild: id, expanded: flag };
        openLazy(tmpResult2(14086, dependencyMap.paths), "GuildActionSheet:" + id.id, obj6);
        const tmpResult1Result1 = tmpResult2(14086, dependencyMap.paths);
      }
      const tmp3Result2 = ActionSheetActionCreatorsDefault;
    }
    tmpResult = age_gate_AgeGateUtils;
  }
  obj = FavoritesUtils;
}
