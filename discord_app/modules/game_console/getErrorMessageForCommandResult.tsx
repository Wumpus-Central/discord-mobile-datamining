// discord_app/modules/game_console/getErrorMessageForCommandResult.tsx
import intl14 from "../../intl/index.native.tsx";
import HelpdeskUtilsDefault from "../../utils/HelpdeskUtils.tsx";
import GameConsoleConstants from "GameConsoleConstants.tsx";
import size from "../../../_runtime/metro/00002__.js";

const constants = GameConsoleConstants.GameConsoleCommandResultErrorCodes;
const result = size.fileFinishedImporting("modules/game_console/getErrorMessageForCommandResult.tsx");

export default function getErrorMessageForCommandResult(device, result, code) {
  let intl;
  let intl10;
  let intl11;
  let intl12;
  let intl13;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let intl8;
  let name;
  let obj10;
  let obj12;
  let obj13;
  let obj15;
  let obj16;
  let obj3;
  let obj5;
  let obj6;
  let obj8;
  let obj9;
  let platform;
  let tmp;
  if ("failed" === result) {
    let obj11;
    code = code.code;
    ({ platform, name } = device);
    if (constants.CONSOLE_DEVICE_COMMUNICATION_RESTRICTED === code) {
      const obj2 = {
        title: intl7.string(intl14.t["GSZ+HI"]),
        body: intl8.formatToPlainString(intl14.t["cYX/3E"], obj3),
      };
      intl7 = intl14.intl;
      intl8 = intl14.intl;
      obj11 = obj2;
      obj3 = { deviceType: platform };
    } else if (constants.CONSOLE_DEVICE_INVALID_POWER_MODE === code) {
      const obj4 = {
        title: intl5.formatToPlainString(intl14.t.akd6Sx, obj5),
        body: intl6.formatToPlainString(intl14.t.RyOvpJ, obj6),
      };
      intl5 = intl14.intl;
      obj5 = { deviceType: platform };
      intl6 = intl14.intl;
      obj11 = obj4;
      obj6 = { deviceName: name };
    } else if (constants.CONSOLE_DEVICE_UNVAILABLE_FROM_OTHER_USERS === code) {
      const obj7 = {
        title: intl3.formatToPlainString(intl14.t.M6Vzat, obj8),
        body: intl4.formatToPlainString(intl14.t.InKtnC, obj9),
      };
      intl3 = intl14.intl;
      obj8 = { deviceType: platform };
      intl4 = intl14.intl;
      obj11 = obj7;
      obj9 = { deviceName: name };
    } else if (constants.CONSOLE_DEVICE_ACCOUNT_LINK_ERROR === code) {
      const obj = {
        title: intl.string(intl14.t.QL1y93),
        body: intl2.formatToPlainString(intl14.t.D18eZu, obj10),
        isAccountLinkError: true,
      };
      intl = intl14.intl;
      intl2 = intl14.intl;
      obj11 = obj;
      obj10 = { deviceType: platform };
    } else {
      obj11 = { title: intl12.string(intl14.t.QL1y93), body: intl13.formatToPlainString(intl14.t["6ZyNH/"], obj12) };
      intl12 = intl14.intl;
      intl13 = intl14.intl;
      obj12 = { deviceName: name };
    }
    tmp = obj11;
  } else {
    tmp = null;
    if ("n/a" === result) {
      let tmp18 = null;
      if (code.code === constants.CONSOLE_DEVICE_PASSCODE_UNLOCK_REQUIRED) {
        const obj14 = {
          title: intl10.formatToPlainString(intl14.t.KchfhO, obj15),
          body: intl11.formatToPlainString(intl14.t["21ndz7"], obj16),
        };
        intl10 = intl14.intl;
        obj15 = { deviceType: tmp15 };
        intl11 = intl14.intl;
        tmp18 = obj14;
        obj16 = { deviceName: tmp16 };
      }
      tmp = tmp18;
    }
  }
  if (null != tmp) {
    const intl9 = intl14.intl;
    const format = intl9.format;
    const obj17 = { supportURL: obj13.getSubmitRequestURL(), errorCode: code.code };
    const v1Bi9Cf = intl14.t["1Bi9Cf"];
    obj13 = HelpdeskUtilsDefault;
    tmp.errorCodeMessage = format(v1Bi9Cf, obj17);
  }
  return tmp;
}
