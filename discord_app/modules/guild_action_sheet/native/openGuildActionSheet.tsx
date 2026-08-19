// discord_app/modules/guild_action_sheet/native/openGuildActionSheet.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";
import expandEventPropertiesDefault from "../../../utils/AnalyticsUtils.tsx";
import getFavoritesAwareGuildName from "../../favorites/FavoritesUtils.tsx";
import asyncRequireImpl from "../../../../_runtime/02007_asyncRequireImpl.js";
import ACTION_SHEET_HEIGHT_HALFDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import GuildNSFWContentLevel from "../../age_gate/native/AgeGateUtils.tsx";
import ME from "../../../Constants.tsx";

({ AnalyticEvents: c3, GuildFeatures: c4 } = ME);
const result = obj132.fileFinishedImporting("modules/guild_action_sheet/native/openGuildActionSheet.tsx");

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
    let tmpResult = GuildNSFWContentLevel;
    if (tmpResult.shouldNSFWGateGuild(id.id)) {
      let tmp3Result = ACTION_SHEET_HEIGHT_HALFDefault;
      obj = { guild: null };
      obj[0] = id;
      tmp3Result.openLazy(asyncRequireImpl(13368, dependencyMap.paths), "NsfwGateGuildSettingsActionSheet", obj);
    } else {
      const features = id.features;
      const hasItem = features.has(constants2.HUB);
      tmp3Result = ACTION_SHEET_HEIGHT_HALFDefault;
      const openLazy = tmp3Result.openLazy;
      tmpResult = asyncRequireImpl;
      if (hasItem) {
        const _HermesInternal2 = HermesInternal;
        obj1 = { guild: null, expanded: null };
        obj1[0] = id;
        obj1[1] = flag;
        openLazy(tmpResult(13426, dependencyMap.paths), "GuildActionSheet:" + id.id, obj1);
        const tmpResult1Result = tmpResult(13426, dependencyMap.paths);
      } else {
        const _HermesInternal = HermesInternal;
        const obj2 = { guild: null, expanded: null };
        obj2[0] = id;
        obj2[1] = flag;
        openLazy(tmpResult(13432, dependencyMap.paths), "GuildActionSheet:" + id.id, obj2);
        const tmpResult1Result1 = tmpResult(13432, dependencyMap.paths);
      }
    }
  }
};