// === Module 20080: showCommandPermissionLockoutAlert ===

// Module 20080 (showCommandPermissionLockoutAlert)
import Constants from "Constants" /* 1071 */;
import util from "util" /* 1112 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2188 */;
import LinkingDefault from "Linking" /* 5722 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 6047 */;
import CommandPermissionLockout from "CommandPermissionLockout" /* 20079 */;
import size from "module_2" /* 2 */;

const HelpdeskArticles = Constants.HelpdeskArticles;
const result = size.fileFinishedImporting("modules/guild_settings/integrations/permission/native/showCommandPermissionLockoutAlert.tsx");

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
};