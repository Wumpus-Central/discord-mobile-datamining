// discord_app/modules/guild_action_sheet/native/openGuildActionSheet.tsx
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import FavoritesUtils from "../../favorites/FavoritesUtils.tsx";
import Constants from "../../../Constants.tsx";
import size from "../../../../_runtime/metro/00002__.js";

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
    let tmpResult = tmp(10294);
    if (tmpResult.shouldNSFWGateGuild(id.id)) {
      let tmp3Result = tmp3(4527);
      obj = { guild: id };
      tmp3Result.openLazy(tmp(1896)(13908, tmp2.paths), "NsfwGateGuildSettingsActionSheet", obj);
    } else {
      const features = id.features;
      const hasItem = features.has(constants2.HUB);
      tmp3Result = tmp3(4527);
      const openLazy = tmp3Result.openLazy;
      tmpResult = tmp(1896);
      if (hasItem) {
        const _HermesInternal2 = HermesInternal;
        obj1 = { guild: id, expanded: flag };
        openLazy(tmpResult(13966, tmp2.paths), "GuildActionSheet:" + id.id, obj1);
        const tmpResult1Result = tmpResult(13966, tmp2.paths);
      } else {
        const _HermesInternal = HermesInternal;
        const obj2 = { guild: id, expanded: flag };
        openLazy(tmpResult(13972, tmp2.paths), "GuildActionSheet:" + id.id, obj2);
        const tmpResult1Result1 = tmpResult(13972, tmp2.paths);
      }
    }
  }
}
