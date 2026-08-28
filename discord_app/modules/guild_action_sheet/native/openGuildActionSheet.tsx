// === Module 13579: openGuildActionSheet ===

// Module 13579 (openGuildActionSheet)
import set from "set" /* 2 */;
import expandEventPropertiesDefault from "expandEventProperties" /* 698 */;
import getFavoritesAwareGuildName from "getFavoritesAwareGuildName" /* 1913 */;
import ME from "ME" /* 676 */;

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
    let tmpResult = tmp(9069);
    if (tmpResult.shouldNSFWGateGuild(id.id)) {
      let tmp3Result = tmp3(4413);
      obj = { guild: null };
      obj[0] = id;
      tmp3Result.openLazy(tmp(2010)(13580, tmp2.paths), "NsfwGateGuildSettingsActionSheet", obj);
    } else {
      const features = id.features;
      const hasItem = features.has(constants2.HUB);
      tmp3Result = tmp3(4413);
      const openLazy = tmp3Result.openLazy;
      tmpResult = tmp(2010);
      if (hasItem) {
        const _HermesInternal2 = HermesInternal;
        obj1 = { guild: null, expanded: null };
        obj1[0] = id;
        obj1[1] = flag;
        openLazy(tmpResult(13638, tmp2.paths), "GuildActionSheet:" + id.id, obj1);
        const tmpResult1Result = tmpResult(13638, tmp2.paths);
      } else {
        const _HermesInternal = HermesInternal;
        const obj2 = { guild: null, expanded: null };
        obj2[0] = id;
        obj2[1] = flag;
        openLazy(tmpResult(13644, tmp2.paths), "GuildActionSheet:" + id.id, obj2);
        const tmpResult1Result1 = tmpResult(13644, tmp2.paths);
      }
    }
  }
};