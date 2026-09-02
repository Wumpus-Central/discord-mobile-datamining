// discord_app/modules/instant_invite/native/components/InstantInviteConstants.tsx
import get_ActivityIndicator from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../../intl/index.native.tsx";
import asyncRequireImpl from "../../../../../_runtime/02008_asyncRequireImpl.js";
import registerAssetDefault from "../../../../../_runtime/04422_registerAsset.js";
import ACTION_SHEET_HEIGHT_HALFDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import getInviteURLDefault from "../../getInviteURL.tsx";
import registerAssetDefault2 from "../../../../../_runtime/09767_registerAsset.js";
import _modDef9970 from "../../../icons/native/Share.tsx";
import registerAssetDefault3 from "../../../../../_runtime/09973_registerAsset.js";
import registerAssetDefault4 from "../../../../../_runtime/09974_registerAsset.js";
import registerAssetDefault5 from "../../../../../_runtime/09975_registerAsset.js";
import registerAssetDefault6 from "../../../../../_runtime/09993_registerAsset.js";
import registerAssetDefault7 from "../../../../../_runtime/09994_registerAsset.js";
import registerAssetDefault8 from "../../../../../_runtime/09995_registerAsset.js";
import registerAssetDefault9 from "../../../../../_runtime/09996_registerAsset.js";
import registerAssetDefault10 from "../../../../../_runtime/09997_registerAsset.js";
import registerAssetDefault11 from "../../../../../_runtime/09998_registerAsset.js";
import registerAssetDefault12 from "../../../../../_runtime/09999_registerAsset.js";
import registerAssetDefault13 from "../../../../../_runtime/10000_registerAsset.js";
import registerAssetDefault14 from "../../../../../_runtime/10001_registerAsset.js";
import registerAssetDefault15 from "../../../../../_runtime/10002_registerAsset.js";
import SHARE_APPS_KEY from "../InstantInviteConstants.tsx";
import ME from "../../../../Constants.tsx";
import isMetaQuest from "../../../device/MetaQuestUtils.android.tsx";
import set from "../../../../utils/PlatformUtils.tsx";
import sendSMS from "../DCDSendUtils.tsx";
import showInstantInviteActionSheet from "../InstantInviteUtils.tsx";

const Linking = get_ActivityIndicator.Linking;
SHARE_APPS_KEY = SHARE_APPS_KEY.SHARE_APPS_KEY;
const SHARE_URLS = SHARE_APPS_KEY.SHARE_URLS;
({ InviteOptionsType: closure_6, SendTypes: error } = ME);
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
obj = {
  type: obj.SHARE,
  icon: _modDef9970,
  isAvailable: Promise.resolve(true),
  IconComponent: registerAssetDefault2,
  backgroundColor: ThemesDefault.unsafe_rawColors.BRAND_500,
  getLabel() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.wPadMa);
  },
  onPress(code) {
    ({ channel, message, location: _location } = code);
    return showInstantInviteActionSheet.handleOpenShareSheet(code.code, channel, message, _location);
  },
};
const items = [obj, , , , , , , , , ,];
obj = {
  type: obj.COPY,
  icon: registerAssetDefault3,
  isAvailable: Promise.resolve(true),
  IconComponent: registerAssetDefault,
  getLabel() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.WqhZss);
  },
  onPress(arg0) {
    ({ channel, code, location: _location } = arg0);
    return showInstantInviteActionSheet.handleCopy(code, channel, _location);
  },
};
items[1] = obj;
let obj1 = {
  type: obj.QR_CODE,
  icon: registerAssetDefault4,
  isAvailable: null,
  IconComponent: null,
  getLabel: null,
  onPress: null,
};
obj1[2] = Promise.resolve(!isMetaQuest.isMetaQuest());
obj1[3] = registerAssetDefault5;
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
  obj.openLazy(asyncRequireImpl(9976, dependencyMap.paths), combined, obj, "stack");
};
items[2] = obj1;
let obj2 = { type: obj.MESSAGES, fullIcon: null, icon: null, isAvailable: null, getLabel: null, onPress: null };
let importDefaultResult;
if (set.isIOS()) {
  importDefaultResult = registerAssetDefault6;
}
obj2[1] = importDefaultResult;
let importDefaultResult1;
if (set.isAndroid()) {
  importDefaultResult1 = registerAssetDefault7;
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
  channel(9931).trackOptionClicked(code, channel, constants.SMS, _location);
  let obj = channel(9931);
  const tmp = channel;
  if (obj2.isIOS()) {
    code(4445).hideActionSheet();
    const obj3 = code(4445);
  }
  obj2 = channel(1234);
  tmp(4657).sendSMS({ body: message }, (arg0, arg1, arg2) => {
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
  importDefaultResult2 = registerAssetDefault8;
}
obj3[1] = importDefaultResult2;
let importDefaultResult3;
if (set.isAndroid()) {
  importDefaultResult3 = registerAssetDefault9;
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
  channel(9931).trackOptionClicked(code, channel, constants.EMAIL, _location);
  let obj = channel(9931);
  const tmp = channel;
  if (obj2.isIOS()) {
    code(4445).hideActionSheet();
    const obj3 = code(4445);
  }
  obj2 = channel(1234);
  tmp(4657).sendMail({ subject: "", body: message }, (arg0, arg1, arg2) => {
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
let obj4 = {
  type: obj.FB_MESSENGER,
  fullIcon: registerAssetDefault10,
  isAvailable: null,
  getLabel: null,
  onPress: null,
};
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
const items1 = [,];
[arr2[0], arr2[1]] = items;
const result = set.fileFinishedImporting("modules/instant_invite/native/components/InstantInviteConstants.tsx");

export const ShareItemType = obj;
export const SHARE_ITEMS = items;
export const SHARE_ITEMS_DEFAULT = items1;
