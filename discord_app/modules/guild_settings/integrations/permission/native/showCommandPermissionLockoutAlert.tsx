// discord_app/modules/guild_settings/integrations/permission/native/showCommandPermissionLockoutAlert.tsx
import Constants from "../../../../../Constants.tsx";
import util from "../../../../../intl/index.native.tsx";
import HelpdeskUtilsDefault from "../../../../../utils/HelpdeskUtils.tsx";
import LinkingDefault from "../../../../../lib/native/Linking.tsx";
import actions_AlertActionCreatorsDefault from "../../../../../actions/native/AlertActionCreators.tsx";
import CommandPermissionLockout from "../CommandPermissionLockout.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

const HelpdeskArticles = Constants.HelpdeskArticles;
const result = size.fileFinishedImporting(
  "modules/guild_settings/integrations/permission/native/showCommandPermissionLockoutAlert.tsx",
);

export default function showCommandPermissionLockoutAlert(arg0, name) {
  const obj2 = { title: null, body: null, cancelText: null, onCancel: null };
  const intl = util.intl;
  obj2.title = intl.string(util.t.vElC9b);
  let obj = actions_AlertActionCreatorsDefault;
  obj2.body = CommandPermissionLockout.getCommandPermissionLockoutMessage(arg0, name);
  const intl2 = util.intl;
  obj2.cancelText = intl2.string(util.t.psXQHP);
  obj2.onCancel = function onCancel() {
    const obj = LinkingDefault;
    obj.openURL(HelpdeskUtilsDefault.getArticleURL(constants.APPLICATION_COMMAND_PERMISSIONS_LOCKOUT));
  };
  obj.show(obj2);
}
