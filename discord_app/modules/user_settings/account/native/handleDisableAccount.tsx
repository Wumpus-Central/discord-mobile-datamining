// discord_app/modules/user_settings/account/native/handleDisableAccount.tsx
import createGuildRecordFromRust from "createGuildRecordFromRust";
import mergeGuildAvatar from "mergeGuildAvatar";
import { set } from "../../../../actions/AlertActionCreators.tsx";
import { showUserSettingsInputAlert } from "showUserSettingsInputAlert.tsx";

const require = arg1;
const result = require("getSystemLocale").fileFinishedImporting("modules/user_settings/account/native/handleDisableAccount.tsx");

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
  const intl = currentUser(1236).intl;
  const string = intl.string;
  const t = currentUser(1236).t;
  if (someResult) {
    const intl4 = tmp4(1236).intl;
    const stringResult = string(t.vJiTOL);
    const stringResult1 = intl4.string(tmp4(1236).t.UyVVan);
    let obj = { title: null, body: null };
    obj[0] = stringResult;
    obj[1] = stringResult1;
    set.show(obj);
    const obj3 = set;
  } else {
    const formatted = string(t["CIGa+7"]).toUpperCase();
    obj = { onSubmit: null, title: null, placeholder: null, closeOnSuccess: true };
    if (flag) {
      obj[0] = function onSubmit(password) {
        return currentUser(8293).disableAccount(password, true);
      };
      const intl3 = tmp4(1236).intl;
      obj[1] = intl3.string(tmp4(1236).t["8lQ2rR"]).toUpperCase();
      obj[2] = formatted;
      let tmp8 = obj;
      const str3 = intl3.string(tmp4(1236).t["8lQ2rR"]);
    } else {
      obj[0] = function onSubmit(password) {
        return currentUser(8293).disableAccount(password, false);
      };
      const intl2 = tmp4(1236).intl;
      obj[1] = intl2.string(tmp4(1236).t.jf5GGb).toUpperCase();
      obj[2] = formatted;
      tmp8 = obj;
      const str2 = intl2.string(tmp4(1236).t.jf5GGb);
    }
    showUserSettingsInputAlert(tmp8);
    const str = string(t["CIGa+7"]);
  }
};