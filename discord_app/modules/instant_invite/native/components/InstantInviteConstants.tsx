// discord_app/modules/instant_invite/native/components/InstantInviteConstants.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import intl2 from "../../../../intl/index.native.tsx";
import asyncRequire from "../../../../../_runtime/01987_asyncRequire.js";
import AssetRegistryDefault from "../../../../../_runtime/04822_AssetRegistry.js";
import AssetRegistryDefault2 from "../../../../../_runtime/04846_AssetRegistry.js";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import actions_AlertActionCreatorsDefault from "../../../../actions/native/AlertActionCreators.tsx";
import MessageActionCreatorsDefault from "../../../../actions/MessageActionCreators.tsx";
import getInviteURLDefault from "../../getInviteURL.tsx";
import AssetRegistryDefault3 from "../../../../../_runtime/09300_AssetRegistry.js";
import ShareDefault from "../../../icons/native/Share.tsx";
import AssetRegistryDefault4 from "../../../../../_runtime/09534_AssetRegistry.js";
import AssetRegistryDefault5 from "../../../../../_runtime/09535_AssetRegistry.js";
import AssetRegistryDefault6 from "../../../../../_runtime/09536_AssetRegistry.js";
import AssetRegistryDefault7 from "../../../../../_runtime/09554_AssetRegistry.js";
import AssetRegistryDefault8 from "../../../../../_runtime/09555_AssetRegistry.js";
import AssetRegistryDefault9 from "../../../../../_runtime/09556_AssetRegistry.js";
import AssetRegistryDefault10 from "../../../../../_runtime/09557_AssetRegistry.js";
import AssetRegistryDefault11 from "../../../../../_runtime/09558_AssetRegistry.js";
import AssetRegistryDefault12 from "../../../../../_runtime/09559_AssetRegistry.js";
import AssetRegistryDefault13 from "../../../../../_runtime/09560_AssetRegistry.js";
import AssetRegistryDefault14 from "../../../../../_runtime/09561_AssetRegistry.js";
import AssetRegistryDefault15 from "../../../../../_runtime/09562_AssetRegistry.js";
import InstantInviteConstants from "../InstantInviteConstants.tsx";
import Constants from "../../../../Constants.tsx";
import MetaQuestUtils_mod from "../../../device/MetaQuestUtils.android.tsx";
import PlatformUtils_mod from "../../../../utils/PlatformUtils.tsx";
import DCDSendUtils_mod from "../DCDSendUtils.tsx";
import InstantInviteUtils_mod from "../InstantInviteUtils.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

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
let obj = {
  SHARE: 0,
  [0]: "SHARE",
  COPY: 1,
  [1]: "COPY",
  QR_CODE: 2,
  [2]: "QR_CODE",
  MESSAGES: 3,
  [3]: "MESSAGES",
  MAIL: 4,
  [4]: "MAIL",
  FB_MESSENGER: 5,
  [5]: "FB_MESSENGER",
  GMAIL: 6,
  [6]: "GMAIL",
  TELEGRAM: 7,
  [7]: "TELEGRAM",
  TWITTER: 8,
  [8]: "TWITTER",
  WHATSAPP: 9,
  [9]: "WHATSAPP",
  LINE: 10,
  [10]: "LINE",
};
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
  },
};
const items = [obj2, , , , , , , , , ,];
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
  },
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
    const tmp2 = asyncRequire(9537, dependencyMap.paths);
    const combined = "InstantInviteQRCodeActionSheet-" + code;
    openLazy(tmp2, combined, obj, "stack");
  },
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
    let obj = channel(9494);
    obj.trackOptionClicked(code, channel, constants.SMS, _location);
    let obj2 = channel(1369);
    if (obj2.isIOS()) {
      let obj3 = code(4860);
      obj3.hideActionSheet();
    }
    const tmpResult = tmp(5029);
    tmpResult.sendSMS({ body: message }, (arg0, arg1, arg2) => {
      let id;
      let intl;
      let obj2;
      const tmp = arg0;
      if (tmp) {
        const obj = {
          inviteKey: code,
          channelId: id,
          messageId: null,
          location: "SMS Option",
          overrideProperties: obj2,
        };
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
  },
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
    let obj = channel(9494);
    obj.trackOptionClicked(code, channel, constants.EMAIL, _location);
    let obj2 = channel(1369);
    if (obj2.isIOS()) {
      let obj3 = code(4860);
      obj3.hideActionSheet();
    }
    const tmpResult = tmp(5029);
    tmpResult.sendMail({ subject: "", body: message }, (arg0, arg1, arg2) => {
      let id;
      let intl;
      let obj2;
      const tmp = arg0;
      if (tmp) {
        const obj = {
          inviteKey: code,
          channelId: id,
          messageId: null,
          location: "Email Option",
          overrideProperties: obj2,
        };
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
  },
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
  },
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
  },
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
  },
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
  },
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
  },
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
  },
};
InstantInviteUtils = InstantInviteUtils_mod;
items[10] = obj12;
const items1 = [,];
[arr2[0], arr2[1]] = items;
const result = size.fileFinishedImporting("modules/instant_invite/native/components/InstantInviteConstants.tsx");

export const ShareItemType = obj;
export const SHARE_ITEMS = items;
export const SHARE_ITEMS_DEFAULT = items1;
