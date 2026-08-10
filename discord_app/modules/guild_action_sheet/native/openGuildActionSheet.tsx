// discord_app/modules/guild_action_sheet/native/openGuildActionSheet.tsx
import ME from "ME";
import { expandEventProperties } from "../../../utils/AnalyticsUtils.tsx";
import { getFavoritesAwareGuildName } from "../../favorites/FavoritesUtils.tsx";

let c3;
let c4;
({ AnalyticEvents: c3, GuildFeatures: c4 } = ME);
const result = require("expandEventProperties").fileFinishedImporting("modules/guild_action_sheet/native/openGuildActionSheet.tsx");

export default function openGuildActionSheet(id) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = true;
  }
  let obj = getFavoritesAwareGuildName;
  if (!obj.isFavoritesGuildId(id.id)) {
    let obj1 = expandEventProperties;
    obj = { type: "Guild Profile", guild_id: null };
    obj[1] = id.id;
    obj1.track(constants.OPEN_POPOUT, obj);
    let tmpResult = tmp(8679);
    if (tmpResult.shouldNSFWGateGuild(id.id)) {
      let tmp3Result = tmp3(4271);
      obj = { guild: null };
      obj[0] = id;
      tmp3Result.openLazy(tmp(1988)(13257, tmp2.paths), "NsfwGateGuildSettingsActionSheet", obj);
    } else {
      const features = id.features;
      const hasItem = features.has(constants2.HUB);
      tmp3Result = tmp3(4271);
      const openLazy = tmp3Result.openLazy;
      tmpResult = tmp(1988);
      if (hasItem) {
        const _HermesInternal2 = HermesInternal;
        obj1 = { guild: null, expanded: null };
        obj1[0] = id;
        obj1[1] = flag;
        openLazy(tmpResult(13315, tmp2.paths), "GuildActionSheet:" + id.id, obj1);
        const tmpResult1Result = tmpResult(13315, tmp2.paths);
      } else {
        const _HermesInternal = HermesInternal;
        const obj2 = { guild: null, expanded: null };
        obj2[0] = id;
        obj2[1] = flag;
        openLazy(tmpResult(13321, tmp2.paths), "GuildActionSheet:" + id.id, obj2);
        const tmpResult1Result1 = tmpResult(13321, tmp2.paths);
      }
    }
  }
};