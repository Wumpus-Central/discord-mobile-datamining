// discord_app/modules/user_settings/account/native/handleDisableAccount.tsx
import util from "../../../../intl/index.native.tsx";
import AlertActionCreatorsDefault from "../../../../actions/AlertActionCreators.tsx";
import showUserSettingsInputAlertDefault from "showUserSettingsInputAlert.tsx";
import GuildStore from "../../../../stores/GuildStore.tsx";
import UserStore from "../../../../stores/UserStore.tsx";

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
    const intl4 = tmp4(1114).intl;
    const stringResult = string(t.vJiTOL);
    const stringResult1 = intl4.string(tmp4(1114).t.UyVVan);
    let obj = { title: stringResult, body: stringResult1 };
    AlertActionCreatorsDefault.show(obj);
  } else {
    const formatted = string(t["CIGa+7"]).toUpperCase();
    obj = { onSubmit: null, title: null, placeholder: null, closeOnSuccess: true };
    if (flag) {
      obj.onSubmit = function onSubmit(password) {
        return currentUser(6984).disableAccount(password, true);
      };
      const intl3 = tmp4(1114).intl;
      obj.title = intl3.string(tmp4(1114).t["8lQ2rR"]).toUpperCase();
      obj.placeholder = formatted;
      let tmp8 = obj;
      const str3 = intl3.string(tmp4(1114).t["8lQ2rR"]);
    } else {
      obj.onSubmit = function onSubmit(password) {
        return currentUser(6984).disableAccount(password, false);
      };
      const intl2 = tmp4(1114).intl;
      obj.title = intl2.string(tmp4(1114).t.jf5GGb).toUpperCase();
      obj.placeholder = formatted;
      tmp8 = obj;
      const str2 = intl2.string(tmp4(1114).t.jf5GGb);
    }
    showUserSettingsInputAlertDefault(tmp8);
    const str = string(t["CIGa+7"]);
  }
}
