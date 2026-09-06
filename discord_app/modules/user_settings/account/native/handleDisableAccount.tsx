// === Module 14811: handleDisableAccount ===

// Module 14811 (handleDisableAccount)
import util from "util" /* 1114 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 4904 */;
import showUserSettingsInputAlertDefault from "showUserSettingsInputAlert" /* 14796 */;
import GuildStore from "GuildStore" /* 1979 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/account/native/handleDisableAccount.tsx");

export default function handleDisableAccount() {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = false;
  }
  const currentUser = UserStore.getCurrentUser();
  let someResult = null != currentUser;
  if (someResult) {
    const guildsArray = GuildStore.getGuildsArray();
    someResult = guildsArray.some((ownerId) => ownerId.ownerId === currentUser.id);
  }
  const intl = util.intl;
  const string = intl.string;
  const t = util.t;
  if (someResult) {
    const intl4 = util.intl;
    const stringResult = string(t.vJiTOL);
    const stringResult1 = intl4.string(util.t.UyVVan);
    let obj = { title: stringResult, body: stringResult1 };
    AlertActionCreatorsDefault.show(obj);
  } else {
    const formatted = string(t["CIGa+7"]).toUpperCase();
    obj = { onSubmit: null, title: null, placeholder: null, closeOnSuccess: true };
    if (flag) {
      obj.onSubmit = function onSubmit(password) {
        return currentUser(6984).disableAccount(password, true);
      };
      const intl3 = util.intl;
      obj.title = intl3.string(util.t["8lQ2rR"]).toUpperCase();
      obj.placeholder = formatted;
      let tmp8 = obj;
      const str3 = intl3.string(util.t["8lQ2rR"]);
    } else {
      obj.onSubmit = function onSubmit(password) {
        return currentUser(6984).disableAccount(password, false);
      };
      const intl2 = util.intl;
      obj.title = intl2.string(util.t.jf5GGb).toUpperCase();
      obj.placeholder = formatted;
      tmp8 = obj;
      const str2 = intl2.string(util.t.jf5GGb);
    }
    showUserSettingsInputAlertDefault(tmp8);
    const str = string(t["CIGa+7"]);
  }
};