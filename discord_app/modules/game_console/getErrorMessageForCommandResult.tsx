// discord_app/modules/game_console/getErrorMessageForCommandResult.tsx
import set from "../../../_runtime/00002_set.js";
import getSystemLocale from "../../intl/index.native.tsx";
import combinedDefault from "../../utils/HelpdeskUtils.tsx";
import XBOX_URL_BASE from "GameConsoleConstants.tsx";

let closure_3 = XBOX_URL_BASE.GameConsoleCommandResultErrorCodes;
const result = set.fileFinishedImporting("modules/game_console/getErrorMessageForCommandResult.tsx");

export default function getErrorMessageForCommandResult(arg0, arg1, code) {
  if ("failed" === arg1) {
    code = code.code;
    ({ platform, name } = arg0);
    if (constants.CONSOLE_DEVICE_COMMUNICATION_RESTRICTED === code) {
      let obj = { title: null, body: null };
      const intl7 = getSystemLocale.intl;
      obj[0] = intl7.string(getSystemLocale.t["GSZ+HI"]);
      const intl8 = getSystemLocale.intl;
      obj = { deviceType: null };
      obj[0] = platform;
      obj[1] = intl8.formatToPlainString(getSystemLocale.t["cYX/3E"], obj);
      let obj7 = obj;
    } else if (tmp2.CONSOLE_DEVICE_INVALID_POWER_MODE === code) {
      obj1 = { title: null, body: null };
      const intl5 = getSystemLocale.intl;
      const obj2 = { deviceType: null };
      obj2[0] = platform;
      obj1[0] = intl5.formatToPlainString(getSystemLocale.t.akd6Sx, obj2);
      const intl6 = getSystemLocale.intl;
      const obj3 = { deviceName: null };
      obj3[0] = name;
      obj1[1] = intl6.formatToPlainString(getSystemLocale.t.RyOvpJ, obj3);
      obj7 = obj1;
    } else {
      if (tmp2.CONSOLE_DEVICE_UNVAILABLE_FROM_OTHER_USERS === code) {
        const obj4 = { title: null, body: null };
        const intl3 = getSystemLocale.intl;
        const obj5 = { deviceType: null };
        obj5[0] = platform;
        obj4[0] = intl3.formatToPlainString(getSystemLocale.t.M6Vzat, obj5);
        const intl4 = getSystemLocale.intl;
        const obj6 = { deviceName: null };
        obj6[0] = name;
        obj4[1] = intl4.formatToPlainString(getSystemLocale.t.InKtnC, obj6);
        obj7 = obj4;
      } else if (tmp2.CONSOLE_DEVICE_ACCOUNT_LINK_ERROR !== code) {
        obj7 = { title: null, body: null };
        const intl12 = getSystemLocale.intl;
        obj7[0] = intl12.string(getSystemLocale.t.QL1y93);
        const intl13 = getSystemLocale.intl;
        const obj8 = { deviceName: null };
        obj8[0] = name;
        obj7[1] = intl13.formatToPlainString(getSystemLocale.t["6ZyNH/"], obj8);
      }
      obj = { title: null, body: null, isAccountLinkError: true };
      const intl = getSystemLocale.intl;
      obj[0] = intl.string(getSystemLocale.t.QL1y93);
      const intl2 = getSystemLocale.intl;
      const obj9 = { deviceType: null };
      obj9[0] = platform;
      obj[1] = intl2.formatToPlainString(getSystemLocale.t.D18eZu, obj9);
      obj7 = obj;
    }
  } else {
    let tmp = null;
    if ("n/a" === arg1) {
      let tmp19 = null;
      if (code.code === constants.CONSOLE_DEVICE_PASSCODE_UNLOCK_REQUIRED) {
        const obj10 = { title: null, body: null };
        const intl10 = getSystemLocale.intl;
        const obj11 = { deviceType: null };
        obj11[0] = tmp16;
        obj10[0] = intl10.formatToPlainString(getSystemLocale.t.KchfhO, obj11);
        const intl11 = getSystemLocale.intl;
        let obj12 = { deviceName: null };
        obj12[0] = tmp17;
        obj10[1] = intl11.formatToPlainString(getSystemLocale.t["21ndz7"], obj12);
        tmp19 = obj10;
      }
      tmp = tmp19;
    }
    if (null != tmp) {
      const intl9 = getSystemLocale.intl;
      const obj13 = { supportURL: null, errorCode: null };
      obj12 = combinedDefault;
      obj13[0] = obj12.getSubmitRequestURL();
      obj13[1] = code.code;
      tmp.errorCodeMessage = intl9.format(getSystemLocale.t["1Bi9Cf"], obj13);
    }
    return tmp;
  }
}
