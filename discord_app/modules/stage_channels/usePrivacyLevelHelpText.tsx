// discord_app/modules/stage_channels/usePrivacyLevelHelpText.tsx
import fromStringAll from "../../../discord_common/js/shared/utils/BigFlagUtils.tsx";
import combinedDefault from "../../utils/HelpdeskUtils.tsx";
import applyOverwritesAll from "../../utils/PermissionUtils.tsx";
import closure_4 from "../../stores/PermissionStore.tsx";
import { HelpdeskArticles } from "../../Constants.tsx";
import { GuildScheduledEventPrivacyLevel as closure_6 } from "../guild_scheduled_events/GuildScheduledEventsConstants.tsx";
import { Permissions } from "../../../discord_common/js/shared/Constants.tsx";
import { initialize } from "../../../discord_common/js/packages/flux/index.tsx";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/stage_channels/usePrivacyLevelHelpText.tsx");

export default function useStagePrivacyLevelSettings(channel, privacy_level) {
  const _require = channel;
  let obj = initialize;
  const items = [closure_4];
  const stateFromStores = obj.useStateFromStores(items, () =>
    closure_1_4.can(closure_1_7.CREATE_INSTANT_INVITE, closure_0),
  );
  const obj2 = applyOverwritesAll;
  const canEveryoneRoleResult = obj2.canEveryoneRole(
    fromStringAll.combine(Permissions.VIEW_CHANNEL, Permissions.CONNECT),
    channel,
  );
  privacy_level = undefined;
  if (privacy_level != null) {
    privacy_level = privacy_level.privacy_level;
  }
  if (privacy_level === constants.PUBLIC) {
    const intl4 = tmp(1233).intl;
    let stringResult = intl4.string(tmp(1233).t.GFq5Rg);
  } else if (stateFromStores) {
    if (canEveryoneRoleResult) {
      let formatResult = null;
      if (arg2 === tmp6.PUBLIC) {
        const intl3 = tmp(1233).intl;
        obj = { articleURL: null };
        obj[0] = combinedDefault.getArticleURL(HelpdeskArticles.STAGE_CHANNEL_GUIDELINES);
        formatResult = intl3.format(tmp(1233).t["ew/Jq4"], obj);
        const obj5 = combinedDefault;
      }
      let stringResult1 = formatResult;
    } else {
      const intl2 = tmp(1233).intl;
      stringResult1 = intl2.string(tmp(1233).t.E5T7a3);
    }
  } else {
    const intl = tmp(1233).intl;
    stringResult = intl.string(tmp(1233).t.BOjr7t);
  }
  obj = { helpText: stringResult, guildOnlyDisabled: null, publicDisabled: null };
  let privacy_level1;
  if (privacy_level != null) {
    privacy_level1 = privacy_level.privacy_level;
  }
  obj[1] = privacy_level1 === constants.PUBLIC;
  let tmp15 = !stateFromStores;
  if (stateFromStores) {
    tmp15 = !canEveryoneRoleResult;
  }
  obj[2] = tmp15;
  return obj;
}
