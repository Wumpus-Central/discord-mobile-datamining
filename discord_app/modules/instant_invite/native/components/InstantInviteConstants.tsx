// === Module 9517: components/InstantInviteConstants ===

// Module 9517 (components/InstantInviteConstants)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import intl2 from "intl" /* 1126 */;
import asyncRequire from "asyncRequire" /* 1987 */;
import AssetRegistryDefault from "AssetRegistry" /* 4816 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 4840 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4854 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5708 */;
import MessageActionCreatorsDefault from "MessageActionCreators" /* 6965 */;
import getInviteURLDefault from "getInviteURL" /* 7255 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 9265 */;
import ShareDefault from "Share" /* 9518 */;
import AssetRegistryDefault4 from "AssetRegistry" /* 9521 */;
import AssetRegistryDefault5 from "AssetRegistry" /* 9522 */;
import AssetRegistryDefault6 from "AssetRegistry" /* 9523 */;
import AssetRegistryDefault7 from "AssetRegistry" /* 9541 */;
import AssetRegistryDefault8 from "AssetRegistry" /* 9542 */;
import AssetRegistryDefault9 from "AssetRegistry" /* 9543 */;
import AssetRegistryDefault10 from "AssetRegistry" /* 9544 */;
import AssetRegistryDefault11 from "AssetRegistry" /* 9545 */;
import AssetRegistryDefault12 from "AssetRegistry" /* 9546 */;
import AssetRegistryDefault13 from "AssetRegistry" /* 9547 */;
import AssetRegistryDefault14 from "AssetRegistry" /* 9548 */;
import AssetRegistryDefault15 from "AssetRegistry" /* 9549 */;
import InstantInviteConstants from "InstantInviteConstants" /* 9486 */;
import Constants from "Constants" /* 1085 */;
import MetaQuestUtils_mod from "MetaQuestUtils" /* 1615 */;
import PlatformUtils_mod from "PlatformUtils" /* 1369 */;
import DCDSendUtils_mod from "DCDSendUtils" /* 5023 */;
import InstantInviteUtils_mod from "instant_invite/InstantInviteUtils" /* 9481 */;
import size from "module_2" /* 2 */;

let DCDSendUtils;
let InstantInviteUtils;
let MetaQuestUtils;
let importDefaultResult;
let importDefaultResult1;
let importDefaultResult2;
let importDefaultResult3;
let metroImportDefault;
let metroRequire;
let resolve;
const Linking = react_native.Linking;
const SHARE_APPS_KEY = InstantInviteConstants.SHARE_APPS_KEY;
const SHARE_URLS = InstantInviteConstants.SHARE_URLS;
({ InviteOptionsType: metroRequire, SendTypes: metroImportDefault } = Constants);
let obj = { SHARE: 0, [0]: "SHARE", COPY: 1, [1]: "COPY", QR_CODE: 2, [2]: "QR_CODE", MESSAGES: 3, [3]: "MESSAGES", MAIL: 4, [4]: "MAIL", FB_MESSENGER: 5, [5]: "FB_MESSENGER", GMAIL: 6, [6]: "GMAIL", TELEGRAM: 7, [7]: "TELEGRAM", TWITTER: 8, [8]: "TWITTER", WHATSAPP: 9, [9]: "WHATSAPP", LINE: 10, [10]: "LINE" };
let obj2 = {
  type: obj.SHARE,
  icon: ShareDefault,
  isAvailable: Promise.resolve(true),
  IconComponent: AssetRegistryDefault3,
  backgroundColor: nativeDefault.unsafe_rawColors.BRAND_500,
  getLabel() {
    const intl = intl2.intl;
    return intl.string(intl2.t.wPadMa);
  },
  onPress(code) {
    let _location;
    let channel;
    let message;
    code = code.code;
    ({ channel, message, location: _location } = code);
    const obj = InstantInviteUtils;
    return obj.handleOpenShareSheet(code, channel, message, _location);
  }
};
const items = [obj2, , , , , , , , , , ];
let obj3 = {
  type: obj.COPY,
  icon: AssetRegistryDefault4,
  isAvailable: Promise.resolve(true),
  IconComponent: AssetRegistryDefault2,
  getLabel() {
    const intl = intl2.intl;
    return intl.string(intl2.t.WqhZss);
  },
  onPress(arg0) {
    let _location;
    let channel;
    let code;
    ({ channel, code, location: _location } = arg0);
    const obj = InstantInviteUtils;
    return obj.handleCopy(code, channel, _location);
  }
};
items[1] = obj3;
const obj4 = {
  type: obj.QR_CODE,
  icon: AssetRegistryDefault5,
  isAvailable: resolve(!MetaQuestUtils.isMetaQuest()),
  IconComponent: AssetRegistryDefault6,
  getLabel() {
    const intl = intl2.intl;
    return intl.string(intl2.t.rriLm1);
  },
  onPress(code) {
    let _location;
    let channel;
    code = code.code;
    ({ channel, location: _location } = code);
    const openLazy = ActionSheetActionCreatorsDefault.openLazy;
    ActionSheetActionCreatorsDefault;
    const obj = { link: getInviteURLDefault(code), location: _location, channel };
    const tmp2 = asyncRequire(9524, dependencyMap.paths);
    const combined = "InstantInviteQRCodeActionSheet-" + code;
    openLazy(tmp2, combined, obj, "stack");
  }
};
resolve = Promise.resolve;
MetaQuestUtils = MetaQuestUtils_mod;
items[2] = obj4;
const obj5 = {
  type: obj.MESSAGES,
  fullIcon: importDefaultResult,
  icon: importDefaultResult1,
  isAvailable: DCDSendUtils.canSendSMS(),
  getLabel() {
    const intl = intl2.intl;
    return intl.string(intl2.t.AQKfCj);
  },
  onPress(channel) {
    let _location;
    let message;
    channel = channel.channel;
    const code = channel.code;
    ({ message, location: _location } = channel);
    let tmp = channel;
    let obj = channel(9481);
    obj.trackOptionClicked(code, channel, constants.SMS, _location);
    let obj2 = channel(1369);
    if (obj2.isIOS()) {
      let obj3 = code(4854);
      obj3.hideActionSheet();
    }
    const tmpResult = tmp(5023);
    tmpResult.sendSMS({ body: message }, (arg0, arg1, arg2) => {
      let id;
      let intl;
      let obj2;
      const tmp = arg0;
      if (tmp) {
        const obj = { inviteKey: code, channelId: id, messageId: null, location: "SMS Option", overrideProperties: obj2 };
        id = undefined;
        const trackInvite = MessageActionCreatorsDefault.trackInvite;
        MessageActionCreatorsDefault;
        if (channel != null) {
          id = channel.id;
        }
        if (id == null) {
          id = null;
        }
        obj2 = { send_type: metroImportDefault.SMS };
        trackInvite(obj);
      }
      const tmp10 = arg2;
      if (tmp10) {
        const obj3 = { body: intl.string(intl2.t["1ieAR5"]), isDismissable: true };
        const show = actions_AlertActionCreatorsDefault.show;
        actions_AlertActionCreatorsDefault;
        intl = intl2.intl;
        show(obj3);
      }
    });
  }
};
let PlatformUtils = PlatformUtils_mod;
importDefaultResult = undefined;
if (PlatformUtils.isIOS()) {
  importDefaultResult = AssetRegistryDefault7;
}
PlatformUtils = PlatformUtils_mod;
importDefaultResult1 = undefined;
if (PlatformUtils.isAndroid()) {
  importDefaultResult1 = AssetRegistryDefault8;
}
DCDSendUtils = DCDSendUtils_mod;
items[3] = obj5;
const obj6 = {
  type: obj.MAIL,
  fullIcon: importDefaultResult2,
  icon: importDefaultResult3,
  isAvailable: DCDSendUtils.canSendMail(),
  getLabel() {
    const intl = intl2.intl;
    return intl.string(intl2.t.QaAypP);
  },
  onPress(channel) {
    let _location;
    let message;
    channel = channel.channel;
    const code = channel.code;
    ({ message, location: _location } = channel);
    let tmp = channel;
    let obj = channel(9481);
    obj.trackOptionClicked(code, channel, constants.EMAIL, _location);
    let obj2 = channel(1369);
    if (obj2.isIOS()) {
      let obj3 = code(4854);
      obj3.hideActionSheet();
    }
    const tmpResult = tmp(5023);
    tmpResult.sendMail({ subject: "", body: message }, (arg0, arg1, arg2) => {
      let id;
      let intl;
      let obj2;
      const tmp = arg0;
      if (tmp) {
        const obj = { inviteKey: code, channelId: id, messageId: null, location: "Email Option", overrideProperties: obj2 };
        id = undefined;
        const trackInvite = MessageActionCreatorsDefault.trackInvite;
        MessageActionCreatorsDefault;
        if (channel != null) {
          id = channel.id;
        }
        if (id == null) {
          id = null;
        }
        obj2 = { send_type: metroImportDefault.EMAIL };
        trackInvite(obj);
      }
      const tmp10 = arg2;
      if (tmp10) {
        const obj3 = { body: intl.string(intl2.t["1ieAR5"]), isDismissable: true };
        const show = actions_AlertActionCreatorsDefault.show;
        actions_AlertActionCreatorsDefault;
        intl = intl2.intl;
        show(obj3);
      }
    });
  }
};
PlatformUtils = PlatformUtils_mod;
importDefaultResult2 = undefined;
if (PlatformUtils.isIOS()) {
  importDefaultResult2 = AssetRegistryDefault9;
}
PlatformUtils = PlatformUtils_mod;
importDefaultResult3 = undefined;
if (PlatformUtils.isAndroid()) {
  importDefaultResult3 = AssetRegistryDefault;
}
DCDSendUtils = DCDSendUtils_mod;
items[4] = obj6;
const obj7 = {
  type: obj.FB_MESSENGER,
  fullIcon: AssetRegistryDefault10,
  isAvailable: InstantInviteUtils.isAppInstalled(SHARE_APPS_KEY.MESSENGER),
  getLabel() {
    const intl = intl2.intl;
    return intl.string(intl2.t.P0R3ZF);
  },
  onPress(code) {
    let _location;
    let channel;
    code = code.code;
    ({ channel, location: _location } = code);
    const tmp = getInviteURLDefault(code);
    const obj = InstantInviteUtils;
    obj.trackOptionClicked(code, channel, metroRequire.MESSENGER, _location);
    Linking.openURL(SHARE_URLS[SHARE_APPS_KEY.MESSENGER](tmp));
  }
};
InstantInviteUtils = InstantInviteUtils_mod;
items[5] = obj7;
const obj8 = {
  type: obj.GMAIL,
  fullIcon: AssetRegistryDefault11,
  isAvailable: InstantInviteUtils.isAppInstalled(SHARE_APPS_KEY.GMAIL),
  getLabel() {
    const intl = intl2.intl;
    return intl.string(intl2.t["14o9ZT"]);
  },
  onPress(code) {
    let _location;
    let channel;
    let message;
    code = code.code;
    ({ channel, message, location: _location } = code);
    const obj = InstantInviteUtils;
    obj.trackOptionClicked(code, channel, metroRequire.GMAIL, _location);
    Linking.openURL(SHARE_URLS[SHARE_APPS_KEY.GMAIL]("", message));
  }
};
InstantInviteUtils = InstantInviteUtils_mod;
items[6] = obj8;
const obj9 = {
  type: obj.TELEGRAM,
  fullIcon: AssetRegistryDefault12,
  isAvailable: InstantInviteUtils.isAppInstalled(SHARE_APPS_KEY.TELEGRAM),
  getLabel() {
    const intl = intl2.intl;
    return intl.string(intl2.t["148qIV"]);
  },
  onPress(code) {
    let _location;
    let channel;
    let message;
    code = code.code;
    ({ channel, message, location: _location } = code);
    const tmp = getInviteURLDefault(code);
    const obj = InstantInviteUtils;
    obj.trackOptionClicked(code, channel, metroRequire.TELEGRAM, _location);
    Linking.openURL(SHARE_URLS[SHARE_APPS_KEY.TELEGRAM](message, tmp));
  }
};
InstantInviteUtils = InstantInviteUtils_mod;
items[7] = obj9;
const obj10 = {
  type: obj.TWITTER,
  fullIcon: AssetRegistryDefault13,
  isAvailable: InstantInviteUtils.isAppInstalled(SHARE_APPS_KEY.TWITTER),
  getLabel() {
    const intl = intl2.intl;
    return intl.string(intl2.t.oAiltV);
  },
  onPress(code) {
    let _location;
    let channel;
    let message;
    code = code.code;
    ({ channel, message, location: _location } = code);
    const obj = InstantInviteUtils;
    obj.trackOptionClicked(code, channel, metroRequire.TWITTER, _location);
    Linking.openURL(SHARE_URLS[SHARE_APPS_KEY.TWITTER](message));
  }
};
InstantInviteUtils = InstantInviteUtils_mod;
items[8] = obj10;
const obj11 = {
  type: obj.WHATSAPP,
  fullIcon: AssetRegistryDefault14,
  isAvailable: InstantInviteUtils.isAppInstalled(SHARE_APPS_KEY.WHATSAPP),
  getLabel() {
    const intl = intl2.intl;
    return intl.string(intl2.t.viazhS);
  },
  onPress(code) {
    let _location;
    let channel;
    let message;
    code = code.code;
    ({ channel, message, location: _location } = code);
    const obj = InstantInviteUtils;
    obj.trackOptionClicked(code, channel, metroRequire.WHATSAPP, _location);
    Linking.openURL(SHARE_URLS[SHARE_APPS_KEY.WHATSAPP](message));
  }
};
InstantInviteUtils = InstantInviteUtils_mod;
items[9] = obj11;
const obj12 = {
  type: obj.LINE,
  fullIcon: AssetRegistryDefault15,
  isAvailable: InstantInviteUtils.isAppInstalled(SHARE_APPS_KEY.LINE),
  getLabel() {
    const intl = intl2.intl;
    return intl.string(intl2.t.kqgslH);
  },
  onPress(code) {
    let _location;
    let channel;
    let message;
    code = code.code;
    ({ channel, message, location: _location } = code);
    const obj = InstantInviteUtils;
    obj.trackOptionClicked(code, channel, metroRequire.LINE, _location);
    Linking.openURL(SHARE_URLS[SHARE_APPS_KEY.LINE](message));
  }
};
InstantInviteUtils = InstantInviteUtils_mod;
items[10] = obj12;
const items1 = [, ];
[arr2[0], arr2[1]] = items;
const result = size.fileFinishedImporting("modules/instant_invite/native/components/InstantInviteConstants.tsx");

export const ShareItemType = obj;
export const SHARE_ITEMS = items;
export const SHARE_ITEMS_DEFAULT = items1;