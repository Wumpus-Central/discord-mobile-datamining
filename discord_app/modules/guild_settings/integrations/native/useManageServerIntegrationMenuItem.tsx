// discord_app/modules/guild_settings/integrations/native/useManageServerIntegrationMenuItem.tsx
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import GuildSettingsActionCreatorsDefault from "../../GuildSettingsActionCreators.tsx";
import ApplicationCommandIndexStore from "../../../application_commands/ApplicationCommandIndexStore.tsx";
import GuildStore from "../../../../stores/GuildStore.tsx";
import PermissionStore from "../../../../stores/PermissionStore.tsx";
import Constants from "../../../../Constants.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;

const useGuildIndexState = ApplicationCommandIndexStore.useGuildIndexState;
({ GuildSettingsSections: closure_6, Permissions: metroImportDefault } = Constants);
let result = size.fileFinishedImporting(
  "modules/guild_settings/integrations/native/useManageServerIntegrationMenuItem.tsx",
);

export default function useManageServerIntegrationMenuItem(bot, arg1, guild_id) {
  _require = bot;
  closure_1 = guild_id;
  items = [GuildStore, PermissionStore];
  const items1 = [bot.bot, guild_id];
  const stateFromStores = require("initialize").useStateFromStores(
    items,
    () => {
      bot = bot.bot;
      if (bot) {
        bot = null != closure_1;
      }
      if (bot) {
        bot = PermissionStore.can(constants2.MANAGE_GUILD, GuildStore.getGuild(closure_1));
      }
      return bot;
    },
    items1,
  );
  let tmp5;
  if (stateFromStores) {
    if (null != guild_id) {
      tmp5 = guild_id;
    }
  }
  id = arg1;
  const result = useGuildIndexState(tmp5, true).result;
  if (arg1 == null) {
    let tmp7;
    if (result != null) {
      tmp7 = result.sectionIdsByBotId[bot.id];
    }
    id = tmp7;
  }
  if (id == null) {
    id = bot.id;
  }
  let sections;
  if (result != null) {
    sections = result.sections;
  }
  if (sections == null) {
    sections = {};
  }
  const values = Object.values(sections);
  let tmp10 = null;
  if (stateFromStores) {
    tmp10 = null;
    if (null != guild_id) {
      tmp10 = null;
      if (tmp9) {
        const obj2 = { label: null, action: null };
        const intl = tmp(tmp2[5]).intl;
        obj2.label = intl.string(tmp(tmp2[5]).t.IuSJT8);
        obj2.action = function action() {
          ActionSheetActionCreatorsDefault.hideActionSheet();
          GuildSettingsActionCreatorsDefault.open(closure_1, constants.INTEGRATION_APPLICATION, undefined, undefined, {
            applicationId: id,
          });
        };
        tmp10 = obj2;
      }
    }
  }
  return tmp10;
}
