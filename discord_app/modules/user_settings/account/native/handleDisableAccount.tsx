// discord_app/modules/user_settings/account/native/handleDisableAccount.tsx
import setDefault from "../../../../actions/AlertActionCreators.tsx";
import showUserSettingsInputAlertDefault from "showUserSettingsInputAlert.tsx";
import closure_3 from "../../../../stores/GuildStore.tsx";
import closure_4 from "../../../../stores/UserStore.tsx";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/user_settings/account/native/handleDisableAccount.tsx");

export default function handleDisableAccount() {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = false;
  }
  currentUser = currentUser.getCurrentUser();
  let someResult = null != currentUser;
  if (someResult) {
    guildsArray = guildsArray.getGuildsArray();
    someResult = guildsArray.some((ownerId) => ownerId.ownerId === currentUser.id);
  }
  const intl = currentUser(1114).intl;
  const string = intl.string;
  const t = currentUser(1114).t;
  if (someResult) {
    const intl4 = tmp4(1114).intl;
    const stringResult = string(t.vJiTOL);
    const stringResult1 = intl4.string(tmp4(1114).t.UyVVan);
    let obj = { title: null, body: null };
    obj[0] = stringResult;
    obj[1] = stringResult1;
    setDefault.show(obj);
    const obj3 = setDefault;
  } else {
    const formatted = string(t["CIGa+7"]).toUpperCase();
    obj = { onSubmit: null, title: null, placeholder: null, closeOnSuccess: true };
    if (flag) {
      obj[0] = function onSubmit(password) {
        return currentUser(6984).disableAccount(password, true);
      };
      const intl3 = tmp4(1114).intl;
      obj[1] = intl3.string(tmp4(1114).t["8lQ2rR"]).toUpperCase();
      obj[2] = formatted;
      let tmp8 = obj;
      const str3 = intl3.string(tmp4(1114).t["8lQ2rR"]);
    } else {
      obj[0] = function onSubmit(password) {
        return currentUser(6984).disableAccount(password, false);
      };
      const intl2 = tmp4(1114).intl;
      obj[1] = intl2.string(tmp4(1114).t.jf5GGb).toUpperCase();
      obj[2] = formatted;
      tmp8 = obj;
      const str2 = intl2.string(tmp4(1114).t.jf5GGb);
    }
    showUserSettingsInputAlertDefault(tmp8);
    const str = string(t["CIGa+7"]);
  }
}
