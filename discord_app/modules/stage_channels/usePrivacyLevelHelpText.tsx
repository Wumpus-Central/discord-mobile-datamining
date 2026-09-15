// discord_app/modules/stage_channels/usePrivacyLevelHelpText.tsx
import BigFlagUtilsAll from "../../../discord_common/js/shared/utils/BigFlagUtils.tsx";
import HelpdeskUtilsDefault from "../../utils/HelpdeskUtils.tsx";
import PermissionUtilsAll from "../../utils/PermissionUtils.tsx";
import PermissionStore from "../../stores/PermissionStore.tsx";

const require = globalThis.__r;

const require = fn;
const HelpdeskArticles = fn(1074).HelpdeskArticles;
const constants = fn(1964).GuildScheduledEventPrivacyLevel;
const Permissions = fn(1085).Permissions;
const size = fn(2);
const result = size.fileFinishedImporting("modules/stage_channels/usePrivacyLevelHelpText.tsx");

export default function useStagePrivacyLevelSettings(channel, privacy_level, arg2) {
  _require = channel;
  const items = [PermissionStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () =>
    PermissionStore.can(Permissions.CREATE_INSTANT_INVITE, closure_0),
  );
  const obj = require("initialize");
  const obj2 = PermissionUtilsAll;
  const canEveryoneRoleResult = obj2.canEveryoneRole(
    BigFlagUtilsAll.combine(Permissions.VIEW_CHANNEL, Permissions.CONNECT),
    channel,
  );
  privacy_level = undefined;
  if (privacy_level != null) {
    privacy_level = privacy_level.privacy_level;
  }
  if (privacy_level === constants.PUBLIC) {
    const intl4 = tmp(1115).intl;
    let stringResult = intl4.string(tmp(1115).t.GFq5Rg);
  } else if (stateFromStores) {
    if (canEveryoneRoleResult) {
      let formatResult = null;
      if (arg2 === constants.PUBLIC) {
        const intl3 = tmp(1115).intl;
        const obj4 = { articleURL: HelpdeskUtilsDefault.getArticleURL(HelpdeskArticles.STAGE_CHANNEL_GUIDELINES) };
        formatResult = intl3.format(tmp(1115).t["ew/Jq4"], obj4);
      }
      let stringResult1 = formatResult;
    } else {
      const intl2 = tmp(1115).intl;
      stringResult1 = intl2.string(tmp(1115).t.E5T7a3);
    }
  } else {
    const intl = tmp(1115).intl;
    stringResult = intl.string(tmp(1115).t.BOjr7t);
  }
  const obj6 = { helpText: stringResult, guildOnlyDisabled: null, publicDisabled: null };
  let privacy_level1;
  if (privacy_level != null) {
    privacy_level1 = privacy_level.privacy_level;
  }
  obj6.guildOnlyDisabled = privacy_level1 === constants.PUBLIC;
  let tmp15 = !stateFromStores;
  if (stateFromStores) {
    tmp15 = !canEveryoneRoleResult;
  }
  obj6.publicDisabled = tmp15;
  return obj6;
}
