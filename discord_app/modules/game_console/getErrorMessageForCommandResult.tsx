// === Module 17786: ? ===

// Module 17786
import util from "util" /* 1115 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2108 */;
import GameConsoleConstants from "GameConsoleConstants" /* 9364 */;
import size from "module_2" /* 2 */;

const constants = GameConsoleConstants.GameConsoleCommandResultErrorCodes;
const result = size.fileFinishedImporting("modules/game_console/getErrorMessageForCommandResult.tsx");

export default function getErrorMessageForCommandResult(device, result, code) {
  if ("failed" === result) {
    code = code.code;
    ({ platform, name } = device);
    if (constants.CONSOLE_DEVICE_COMMUNICATION_RESTRICTED === code) {
      const obj2 = { title: null, body: null };
      const intl7 = util.intl;
      obj2.title = intl7.string(util.t["GSZ+HI"]);
      const intl8 = util.intl;
      const obj3 = { deviceType: platform };
      obj2.body = intl8.formatToPlainString(util.t["cYX/3E"], obj3);
      let obj10 = obj2;
    } else if (constants.CONSOLE_DEVICE_INVALID_POWER_MODE === code) {
      const obj4 = { title: null, body: null };
      const intl5 = util.intl;
      const obj5 = { deviceType: platform };
      obj4.title = intl5.formatToPlainString(util.t.akd6Sx, obj5);
      const intl6 = util.intl;
      const obj6 = { deviceName: name };
      obj4.body = intl6.formatToPlainString(util.t.RyOvpJ, obj6);
      obj10 = obj4;
    } else {
      if (constants.CONSOLE_DEVICE_UNVAILABLE_FROM_OTHER_USERS === code) {
        const obj7 = { title: null, body: null };
        const intl3 = util.intl;
        const obj8 = { deviceType: platform };
        obj7.title = intl3.formatToPlainString(util.t.M6Vzat, obj8);
        const intl4 = util.intl;
        const obj9 = { deviceName: name };
        obj7.body = intl4.formatToPlainString(util.t.InKtnC, obj9);
        obj10 = obj7;
      } else if (constants.CONSOLE_DEVICE_ACCOUNT_LINK_ERROR !== code) {
        obj10 = { title: null, body: null };
        const intl12 = util.intl;
        obj10.title = intl12.string(util.t.QL1y93);
        const intl13 = util.intl;
        const obj11 = { deviceName: name };
        obj10.body = intl13.formatToPlainString(util.t["6ZyNH/"], obj11);
      }
      const obj = { title: null, body: null, isAccountLinkError: true };
      const intl = util.intl;
      obj.title = intl.string(util.t.QL1y93);
      const intl2 = util.intl;
      const obj12 = { deviceType: platform };
      obj.body = intl2.formatToPlainString(util.t.D18eZu, obj12);
      obj10 = obj;
    }
  } else {
    let tmp = null;
    if ("n/a" === result) {
      let tmp19 = null;
      if (code.code === constants.CONSOLE_DEVICE_PASSCODE_UNLOCK_REQUIRED) {
        const obj14 = { title: null, body: null };
        const intl10 = util.intl;
        const obj15 = { deviceType: tmp16 };
        obj14.title = intl10.formatToPlainString(util.t.KchfhO, obj15);
        const intl11 = util.intl;
        const obj16 = { deviceName: tmp17 };
        obj14.body = intl11.formatToPlainString(util.t["21ndz7"], obj16);
        tmp19 = obj14;
      }
      tmp = tmp19;
    }
    if (null != tmp) {
      const intl9 = util.intl;
      const obj17 = { supportURL: HelpdeskUtilsDefault.getSubmitRequestURL(), errorCode: code.code };
      tmp.errorCodeMessage = intl9.format(util.t["1Bi9Cf"], obj17);
    }
    return tmp;
  }
};