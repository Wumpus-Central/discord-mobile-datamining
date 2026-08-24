// === Module 12369: SHARE_APPS_KEY ===

// Module 12369 (SHARE_APPS_KEY)
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2007 */;
import registerAssetDefault from "registerAsset" /* 4319 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4342 */;
import getInviteURLDefault from "getInviteURL" /* 7506 */;
import registerAssetDefault2 from "registerAsset" /* 9957 */;
import _modDef10843 from "module_10843" /* 10843 */;
import registerAssetDefault3 from "registerAsset" /* 11917 */;
import registerAssetDefault4 from "registerAsset" /* 12048 */;
import registerAssetDefault5 from "registerAsset" /* 12370 */;
import registerAssetDefault6 from "registerAsset" /* 12371 */;
import registerAssetDefault7 from "registerAsset" /* 12389 */;
import registerAssetDefault8 from "registerAsset" /* 12390 */;
import registerAssetDefault9 from "registerAsset" /* 12391 */;
import registerAssetDefault10 from "registerAsset" /* 12392 */;
import registerAssetDefault11 from "registerAsset" /* 12393 */;
import registerAssetDefault12 from "registerAsset" /* 12394 */;
import registerAssetDefault13 from "registerAsset" /* 12395 */;
import registerAssetDefault14 from "registerAsset" /* 12396 */;
import registerAssetDefault15 from "registerAsset" /* 12397 */;
import SHARE_APPS_KEY from "SHARE_APPS_KEY" /* 8924 */;
import ME from "ME" /* 676 */;
import isMetaQuest from "isMetaQuest" /* 1625 */;
import set from "set" /* 500 */;
import sendSMS from "sendSMS" /* 4646 */;
import showInstantInviteActionSheet from "showInstantInviteActionSheet" /* 8918 */;

const Linking = get_ActivityIndicator.Linking;
SHARE_APPS_KEY = SHARE_APPS_KEY.SHARE_APPS_KEY;
const SHARE_URLS = SHARE_APPS_KEY.SHARE_URLS;
({ InviteOptionsType: closure_6, SendTypes: error } = ME);
let obj = { SHARE: 0, [0]: "SHARE", COPY: 1, [1]: "COPY", QR_CODE: 2, [2]: "QR_CODE", MESSAGES: 3, [3]: "MESSAGES", MAIL: 4, [4]: "MAIL", FB_MESSENGER: 5, [5]: "FB_MESSENGER", GMAIL: 6, [6]: "GMAIL", TELEGRAM: 7, [7]: "TELEGRAM", TWITTER: 8, [8]: "TWITTER", WHATSAPP: 9, [9]: "WHATSAPP", LINE: 10, [10]: "LINE" };
obj = {
  type: obj.SHARE,
  icon: _modDef10843,
  isAvailable: Promise.resolve(true),
  IconComponent: registerAssetDefault4,
  backgroundColor: ThemesDefault.unsafe_rawColors.BRAND_500,
  getLabel() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.wPadMa);
  },
  onPress(code) {
    ({ channel, message, location: _location } = code);
    return showInstantInviteActionSheet.handleOpenShareSheet(code.code, channel, message, _location);
  }
};
const items = [obj, , , , , , , , , , ];
obj = {
  type: obj.COPY,
  icon: registerAssetDefault2,
  isAvailable: Promise.resolve(true),
  IconComponent: registerAssetDefault,
  getLabel() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.WqhZss);
  },
  onPress(arg0) {
    ({ channel, code, location: _location } = arg0);
    return showInstantInviteActionSheet.handleCopy(code, channel, _location);
  }
};
items[1] = obj;
let obj1 = { type: obj.QR_CODE, icon: registerAssetDefault5, isAvailable: null, IconComponent: null, getLabel: null, onPress: null };
obj1[2] = Promise.resolve(!isMetaQuest.isMetaQuest());
obj1[3] = registerAssetDefault6;
obj1[4] = function getLabel() {
  const intl = getSystemLocale.intl;
  return intl.string(getSystemLocale.t.rriLm1);
};
obj1[5] = function onPress(code) {
  code = code.code;
  ({ channel, location: _location } = code);
  let obj = ACTION_SHEET_HEIGHT_HALFDefault;
  obj = { link: null, location: null, channel: null };
  const combined = "InstantInviteQRCodeActionSheet-" + code;
  obj[0] = getInviteURLDefault(code);
  obj[1] = _location;
  obj[2] = channel;
  obj.openLazy(asyncRequireImpl(12372, dependencyMap.paths), combined, obj, "stack");
};
items[2] = obj1;
let obj2 = { type: obj.MESSAGES, fullIcon: null, icon: null, isAvailable: null, getLabel: null, onPress: null };
let importDefaultResult;
if (set.isIOS()) {
  importDefaultResult = registerAssetDefault7;
}
obj2[1] = importDefaultResult;
let importDefaultResult1;
if (set.isAndroid()) {
  importDefaultResult1 = registerAssetDefault8;
}
obj2[2] = importDefaultResult1;
obj2[3] = sendSMS.canSendSMS();
obj2[4] = function getLabel() {
  const intl = getSystemLocale.intl;
  return intl.string(getSystemLocale.t.AQKfCj);
};
obj2[5] = function onPress(channel) {
  channel = channel.channel;
  const code = channel.code;
  ({ message, location: _location } = channel);
  channel(8918).trackOptionClicked(code, channel, constants.SMS, _location);
  let obj = channel(8918);
  const tmp = channel;
  if (obj2.isIOS()) {
    code(4342).hideActionSheet();
    const obj3 = code(4342);
  }
  obj2 = channel(500);
  tmp(4646).sendSMS({ body: message }, (arg0, arg1, arg2) => {
    if (arg0) {
      let obj = code(closure_1_2[21]);
      obj = { inviteKey: null, channelId: null, messageId: null, location: "SMS Option", overrideProperties: null };
      obj[0] = code;
      let id;
      if (channel != null) {
        id = channel.id;
      }
      if (id == null) {
        id = null;
      }
      obj[1] = id;
      obj = { send_type: null };
      obj[0] = closure_1_7.SMS;
      obj[4] = obj;
      obj.trackInvite(obj);
    }
    if (arg2) {
      obj1 = { body: null, isDismissable: true };
      const intl = channel(closure_1_2[6]).intl;
      obj1[0] = intl.string(channel(closure_1_2[6]).t["1ieAR5"]);
      code(closure_1_2[22]).show(obj1);
      const obj4 = code(closure_1_2[22]);
    }
  });
};
items[3] = obj2;
let obj3 = { type: obj.MAIL, fullIcon: null, icon: null, isAvailable: null, getLabel: null, onPress: null };
let importDefaultResult2;
if (set.isIOS()) {
  importDefaultResult2 = registerAssetDefault9;
}
obj3[1] = importDefaultResult2;
let importDefaultResult3;
if (set.isAndroid()) {
  importDefaultResult3 = registerAssetDefault3;
}
obj3[2] = importDefaultResult3;
obj3[3] = sendSMS.canSendMail();
obj3[4] = function getLabel() {
  const intl = getSystemLocale.intl;
  return intl.string(getSystemLocale.t.QaAypP);
};
obj3[5] = function onPress(channel) {
  channel = channel.channel;
  const code = channel.code;
  ({ message, location: _location } = channel);
  channel(8918).trackOptionClicked(code, channel, constants.EMAIL, _location);
  let obj = channel(8918);
  const tmp = channel;
  if (obj2.isIOS()) {
    code(4342).hideActionSheet();
    const obj3 = code(4342);
  }
  obj2 = channel(500);
  tmp(4646).sendMail({ subject: "", body: message }, (arg0, arg1, arg2) => {
    if (arg0) {
      let obj = code(closure_1_2[21]);
      obj = { inviteKey: null, channelId: null, messageId: null, location: "Email Option", overrideProperties: null };
      obj[0] = code;
      let id;
      if (channel != null) {
        id = channel.id;
      }
      if (id == null) {
        id = null;
      }
      obj[1] = id;
      obj = { send_type: null };
      obj[0] = closure_1_7.EMAIL;
      obj[4] = obj;
      obj.trackInvite(obj);
    }
    if (arg2) {
      obj1 = { body: null, isDismissable: true };
      const intl = channel(closure_1_2[6]).intl;
      obj1[0] = intl.string(channel(closure_1_2[6]).t["1ieAR5"]);
      code(closure_1_2[22]).show(obj1);
      const obj4 = code(closure_1_2[22]);
    }
  });
};
items[4] = obj3;
let obj4 = { type: obj.FB_MESSENGER, fullIcon: registerAssetDefault10, isAvailable: null, getLabel: null, onPress: null };
obj4[2] = showInstantInviteActionSheet.isAppInstalled(SHARE_APPS_KEY.MESSENGER);
obj4[3] = function getLabel() {
  const intl = getSystemLocale.intl;
  return intl.string(getSystemLocale.t.P0R3ZF);
};
obj4[4] = function onPress(code) {
  code = code.code;
  ({ channel, location: _location } = code);
  const tmp = getInviteURLDefault(code);
  showInstantInviteActionSheet.trackOptionClicked(code, channel, constants.MESSENGER, _location);
  Linking.openURL(SHARE_URLS[SHARE_APPS_KEY.MESSENGER](tmp));
};
items[5] = obj4;
const obj5 = { type: obj.GMAIL, fullIcon: registerAssetDefault11, isAvailable: null, getLabel: null, onPress: null };
obj5[2] = showInstantInviteActionSheet.isAppInstalled(SHARE_APPS_KEY.GMAIL);
obj5[3] = function getLabel() {
  const intl = getSystemLocale.intl;
  return intl.string(getSystemLocale.t["14o9ZT"]);
};
obj5[4] = function onPress(code) {
  ({ channel, message, location: _location } = code);
  showInstantInviteActionSheet.trackOptionClicked(code.code, channel, constants.GMAIL, _location);
  Linking.openURL(SHARE_URLS[SHARE_APPS_KEY.GMAIL]("", message));
};
items[6] = obj5;
const obj6 = { type: obj.TELEGRAM, fullIcon: registerAssetDefault12, isAvailable: null, getLabel: null, onPress: null };
obj6[2] = showInstantInviteActionSheet.isAppInstalled(SHARE_APPS_KEY.TELEGRAM);
obj6[3] = function getLabel() {
  const intl = getSystemLocale.intl;
  return intl.string(getSystemLocale.t["148qIV"]);
};
obj6[4] = function onPress(code) {
  code = code.code;
  ({ channel, message, location: _location } = code);
  const tmp = getInviteURLDefault(code);
  showInstantInviteActionSheet.trackOptionClicked(code, channel, constants.TELEGRAM, _location);
  Linking.openURL(SHARE_URLS[SHARE_APPS_KEY.TELEGRAM](message, tmp));
};
items[7] = obj6;
const obj7 = { type: obj.TWITTER, fullIcon: registerAssetDefault13, isAvailable: null, getLabel: null, onPress: null };
obj7[2] = showInstantInviteActionSheet.isAppInstalled(SHARE_APPS_KEY.TWITTER);
obj7[3] = function getLabel() {
  const intl = getSystemLocale.intl;
  return intl.string(getSystemLocale.t.oAiltV);
};
obj7[4] = function onPress(code) {
  ({ channel, message, location: _location } = code);
  showInstantInviteActionSheet.trackOptionClicked(code.code, channel, constants.TWITTER, _location);
  Linking.openURL(SHARE_URLS[SHARE_APPS_KEY.TWITTER](message));
};
items[8] = obj7;
const obj8 = { type: obj.WHATSAPP, fullIcon: registerAssetDefault14, isAvailable: null, getLabel: null, onPress: null };
obj8[2] = showInstantInviteActionSheet.isAppInstalled(SHARE_APPS_KEY.WHATSAPP);
obj8[3] = function getLabel() {
  const intl = getSystemLocale.intl;
  return intl.string(getSystemLocale.t.viazhS);
};
obj8[4] = function onPress(code) {
  ({ channel, message, location: _location } = code);
  showInstantInviteActionSheet.trackOptionClicked(code.code, channel, constants.WHATSAPP, _location);
  Linking.openURL(SHARE_URLS[SHARE_APPS_KEY.WHATSAPP](message));
};
items[9] = obj8;
const obj9 = { type: obj.LINE, fullIcon: registerAssetDefault15, isAvailable: null, getLabel: null, onPress: null };
obj9[2] = showInstantInviteActionSheet.isAppInstalled(SHARE_APPS_KEY.LINE);
obj9[3] = function getLabel() {
  const intl = getSystemLocale.intl;
  return intl.string(getSystemLocale.t.kqgslH);
};
obj9[4] = function onPress(code) {
  ({ channel, message, location: _location } = code);
  showInstantInviteActionSheet.trackOptionClicked(code.code, channel, constants.LINE, _location);
  Linking.openURL(SHARE_URLS[SHARE_APPS_KEY.LINE](message));
};
items[10] = obj9;
const items1 = [, ];
[arr2[0], arr2[1]] = items;
const result = set.fileFinishedImporting("modules/instant_invite/native/components/InstantInviteConstants.tsx");

export const ShareItemType = obj;
export const SHARE_ITEMS = items;
export const SHARE_ITEMS_DEFAULT = items1;