// discord_app/modules/guild_action_sheet/native/openGuildActionSheet.tsx
import set from "../../../../_runtime/00002_set.js";
import expandEventPropertiesDefault from "../../../utils/AnalyticsUtils.tsx";
import getFavoritesAwareGuildName from "../../favorites/FavoritesUtils.tsx";
import ME from "../../../Constants.tsx";

({ AnalyticEvents: c3, GuildFeatures: c4 } = ME);
const result = set.fileFinishedImporting("modules/guild_action_sheet/native/openGuildActionSheet.tsx");

export default function openGuildActionSheet(id) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = true;
  }
  let obj = getFavoritesAwareGuildName;
  if (!obj.isFavoritesGuildId(id.id)) {
    obj1 = expandEventPropertiesDefault;
    obj = { type: "Guild Profile", guild_id: null };
    obj[1] = id.id;
    obj1.track(constants.OPEN_POPOUT, obj);
    let tmpResult = tmp(9092);
    if (tmpResult.shouldNSFWGateGuild(id.id)) {
      let tmp3Result = tmp3(4415);
      obj = { guild: null };
      obj[0] = id;
      tmp3Result.openLazy(tmp(2009)(13614, tmp2.paths), "NsfwGateGuildSettingsActionSheet", obj);
    } else {
      const features = id.features;
      const hasItem = features.has(constants2.HUB);
      tmp3Result = tmp3(4415);
      const openLazy = tmp3Result.openLazy;
      tmpResult = tmp(2009);
      if (hasItem) {
        const _HermesInternal2 = HermesInternal;
        obj1 = { guild: null, expanded: null };
        obj1[0] = id;
        obj1[1] = flag;
        openLazy(tmpResult(13672, tmp2.paths), "GuildActionSheet:" + id.id, obj1);
        const tmpResult1Result = tmpResult(13672, tmp2.paths);
      } else {
        const _HermesInternal = HermesInternal;
        const obj2 = { guild: null, expanded: null };
        obj2[0] = id;
        obj2[1] = flag;
        openLazy(tmpResult(13678, tmp2.paths), "GuildActionSheet:" + id.id, obj2);
        const tmpResult1Result1 = tmpResult(13678, tmp2.paths);
      }
    }
  }
};