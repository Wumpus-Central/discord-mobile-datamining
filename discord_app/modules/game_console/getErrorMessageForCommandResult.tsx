// discord_app/modules/game_console/getErrorMessageForCommandResult.tsx
import util from "../../intl/index.native.tsx";
import HelpdeskUtilsDefault from "../../utils/HelpdeskUtils.tsx";
import GameConsoleConstants from "GameConsoleConstants.tsx";
import size from "../../../_runtime/metro/00002__.js";

const constants = GameConsoleConstants.GameConsoleCommandResultErrorCodes;
const result = size.fileFinishedImporting("modules/game_console/getErrorMessageForCommandResult.tsx");

export default function getErrorMessageForCommandResult(device, result, code) {
  if ("failed" === result) {
    code = code.code;
    ({ platform, name } = device);
    if (constants.CONSOLE_DEVICE_COMMUNICATION_RESTRICTED === code) {
      let obj = { title: null, body: null };
      const intl7 = util.intl;
      obj.title = intl7.string(util.t["GSZ+HI"]);
      const intl8 = util.intl;
      obj = { deviceType: platform };
      obj.body = intl8.formatToPlainString(util.t["cYX/3E"], obj);
      let obj7 = obj;
    } else if (constants.CONSOLE_DEVICE_INVALID_POWER_MODE === code) {
      const obj1 = { title: null, body: null };
      const intl5 = util.intl;
      const obj2 = { deviceType: platform };
      obj1.title = intl5.formatToPlainString(util.t.akd6Sx, obj2);
      const intl6 = util.intl;
      const obj3 = { deviceName: name };
      obj1.body = intl6.formatToPlainString(util.t.RyOvpJ, obj3);
      obj7 = obj1;
    } else {
      if (constants.CONSOLE_DEVICE_UNVAILABLE_FROM_OTHER_USERS === code) {
        const obj4 = { title: null, body: null };
        const intl3 = util.intl;
        const obj5 = { deviceType: platform };
        obj4.title = intl3.formatToPlainString(util.t.M6Vzat, obj5);
        const intl4 = util.intl;
        const obj6 = { deviceName: name };
        obj4.body = intl4.formatToPlainString(util.t.InKtnC, obj6);
        obj7 = obj4;
      } else if (constants.CONSOLE_DEVICE_ACCOUNT_LINK_ERROR !== code) {
        obj7 = { title: null, body: null };
        const intl12 = util.intl;
        obj7.title = intl12.string(util.t.QL1y93);
        const intl13 = util.intl;
        const obj8 = { deviceName: name };
        obj7.body = intl13.formatToPlainString(util.t["6ZyNH/"], obj8);
      }
      obj = { title: null, body: null, isAccountLinkError: true };
      const intl = util.intl;
      obj.title = intl.string(util.t.QL1y93);
      const intl2 = util.intl;
      const obj9 = { deviceType: platform };
      obj.body = intl2.formatToPlainString(util.t.D18eZu, obj9);
      obj7 = obj;
    }
  } else {
    let tmp = null;
    if ("n/a" === result) {
      let tmp19 = null;
      if (code.code === constants.CONSOLE_DEVICE_PASSCODE_UNLOCK_REQUIRED) {
        const obj10 = { title: null, body: null };
        const intl10 = util.intl;
        const obj11 = { deviceType: tmp16 };
        obj10.title = intl10.formatToPlainString(util.t.KchfhO, obj11);
        const intl11 = util.intl;
        let obj12 = { deviceName: tmp17 };
        obj10.body = intl11.formatToPlainString(util.t["21ndz7"], obj12);
        tmp19 = obj10;
      }
      tmp = tmp19;
    }
    if (null != tmp) {
      const intl9 = util.intl;
      const obj13 = { supportURL: null, errorCode: null };
      obj12 = HelpdeskUtilsDefault;
      obj13.supportURL = obj12.getSubmitRequestURL();
      obj13.errorCode = code.code;
      tmp.errorCodeMessage = intl9.format(util.t["1Bi9Cf"], obj13);
    }
    return tmp;
  }
}
