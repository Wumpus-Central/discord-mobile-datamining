// === Module 9888: components/InstantInviteConstants ===

// Module 9888 (components/InstantInviteConstants)
import _mod17 from "module_17" /* 17 */;
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import _modDef4518 from "module_4518" /* 4518 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4541 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 4919 */;
import MessageActionCreatorsDefault from "MessageActionCreators" /* 7470 */;
import getInviteURLDefault from "getInviteURL" /* 7773 */;
import _modDef9086 from "module_9086" /* 9086 */;
import icons_ShareDefault from "icons/Share" /* 9889 */;
import _modDef9892 from "module_9892" /* 9892 */;
import _modDef9893 from "module_9893" /* 9893 */;
import _modDef9894 from "module_9894" /* 9894 */;
import _modDef9912 from "module_9912" /* 9912 */;
import _modDef9913 from "module_9913" /* 9913 */;
import _modDef9914 from "module_9914" /* 9914 */;
import _modDef9915 from "module_9915" /* 9915 */;
import _modDef9916 from "module_9916" /* 9916 */;
import _modDef9917 from "module_9917" /* 9917 */;
import _modDef9918 from "module_9918" /* 9918 */;
import _modDef9919 from "module_9919" /* 9919 */;
import _modDef9920 from "module_9920" /* 9920 */;
import _modDef9921 from "module_9921" /* 9921 */;
import InstantInviteConstants from "InstantInviteConstants" /* 9857 */;
import Constants from "Constants" /* 1074 */;
import MetaQuestUtils from "MetaQuestUtils" /* 1608 */;
import PlatformUtils from "PlatformUtils" /* 1115 */;
import DCDSendUtils from "DCDSendUtils" /* 4707 */;
import InstantInviteUtils from "instant_invite/InstantInviteUtils" /* 9852 */;
import size from "module_2" /* 2 */;

const Linking = _mod17.Linking;
const SHARE_APPS_KEY = InstantInviteConstants.SHARE_APPS_KEY;
const SHARE_URLS = InstantInviteConstants.SHARE_URLS;
({ InviteOptionsType: metroRequire, SendTypes: closure_7 } = Constants);
let obj = { SHARE: 0, [0]: "SHARE", COPY: 1, [1]: "COPY", QR_CODE: 2, [2]: "QR_CODE", MESSAGES: 3, [3]: "MESSAGES", MAIL: 4, [4]: "MAIL", FB_MESSENGER: 5, [5]: "FB_MESSENGER", GMAIL: 6, [6]: "GMAIL", TELEGRAM: 7, [7]: "TELEGRAM", TWITTER: 8, [8]: "TWITTER", WHATSAPP: 9, [9]: "WHATSAPP", LINE: 10, [10]: "LINE" };
obj = {
  type: obj.SHARE,
  icon: icons_ShareDefault,
  isAvailable: Promise.resolve(true),
  IconComponent: _modDef9086,
  backgroundColor: nativeDefault.unsafe_rawColors.BRAND_500,
  getLabel() {
    const intl = util.intl;
    return intl.string(util.t.wPadMa);
  },
  onPress(code) {
    ({ channel, message, location: _location } = code);
    return InstantInviteUtils.handleOpenShareSheet(code.code, channel, message, _location);
  }
};
const items = [obj, , , , , , , , , , ];
obj = {
  type: obj.COPY,
  icon: _modDef9892,
  isAvailable: Promise.resolve(true),
  IconComponent: _modDef4518,
  getLabel() {
    const intl = util.intl;
    return intl.string(util.t.WqhZss);
  },
  onPress(arg0) {
    ({ channel, code, location: _location } = arg0);
    return InstantInviteUtils.handleCopy(code, channel, _location);
  }
};
items[1] = obj;
let obj1 = { type: obj.QR_CODE, icon: _modDef9893, isAvailable: null, IconComponent: null, getLabel: null, onPress: null };
obj1.isAvailable = Promise.resolve(!MetaQuestUtils.isMetaQuest());
obj1.IconComponent = _modDef9894;
obj1.getLabel = function getLabel() {
  const intl = util.intl;
  return intl.string(util.t.rriLm1);
};
obj1.onPress = function onPress(code) {
  code = code.code;
  ({ channel, location: _location } = code);
  const obj = { link: null, location: null, channel: null };
  const combined = "InstantInviteQRCodeActionSheet-" + code;
  obj.link = getInviteURLDefault(code);
  obj.location = _location;
  obj.channel = channel;
  obj.openLazy(asyncRequireImpl(9895, dependencyMap.paths), combined, obj, "stack");
};
items[2] = obj1;
let obj2 = { type: obj.MESSAGES, fullIcon: null, icon: null, isAvailable: null, getLabel: null, onPress: null };
let importDefaultResult;
if (PlatformUtils.isIOS()) {
  importDefaultResult = _modDef9912;
}
obj2.fullIcon = importDefaultResult;
let importDefaultResult1;
if (PlatformUtils.isAndroid()) {
  importDefaultResult1 = _modDef9913;
}
obj2.icon = importDefaultResult1;
obj2.isAvailable = DCDSendUtils.canSendSMS();
obj2.getLabel = function getLabel() {
  const intl = util.intl;
  return intl.string(util.t.AQKfCj);
};
obj2.onPress = function onPress(channel) {
  channel = channel.channel;
  const code = channel.code;
  ({ message, location: _location } = channel);
  channel(9852).trackOptionClicked(code, channel, constants.SMS, _location);
  let obj = channel(9852);
  const tmp = channel;
  if (obj2.isIOS()) {
    code(4541).hideActionSheet();
    const obj3 = code(4541);
  }
  obj2 = channel(1115);
  tmp(4707).sendSMS({ body: message }, (arg0, arg1, arg2) => {
    if (arg0) {
      let obj = { inviteKey: code, channelId: null, messageId: null, location: "SMS Option", overrideProperties: null };
      let id;
      if (channel != null) {
        id = channel.id;
      }
      if (id == null) {
        id = null;
      }
      obj.channelId = id;
      obj = { send_type: constants2.SMS };
      obj.overrideProperties = obj;
      obj.trackInvite(obj);
    }
    if (arg2) {
      const obj1 = { body: null, isDismissable: true };
      const intl = util.intl;
      obj1.body = intl.string(util.t["1ieAR5"]);
      actions_AlertActionCreatorsDefault.show(obj1);
    }
  });
  const tmpResult = tmp(4707);
};
items[3] = obj2;
let obj3 = { type: obj.MAIL, fullIcon: null, icon: null, isAvailable: null, getLabel: null, onPress: null };
let importDefaultResult2;
if (PlatformUtils.isIOS()) {
  importDefaultResult2 = _modDef9914;
}
obj3.fullIcon = importDefaultResult2;
let importDefaultResult3;
if (PlatformUtils.isAndroid()) {
  importDefaultResult3 = _modDef9915;
}
obj3.icon = importDefaultResult3;
obj3.isAvailable = DCDSendUtils.canSendMail();
obj3.getLabel = function getLabel() {
  const intl = util.intl;
  return intl.string(util.t.QaAypP);
};
obj3.onPress = function onPress(channel) {
  channel = channel.channel;
  const code = channel.code;
  ({ message, location: _location } = channel);
  channel(9852).trackOptionClicked(code, channel, constants.EMAIL, _location);
  let obj = channel(9852);
  const tmp = channel;
  if (obj2.isIOS()) {
    code(4541).hideActionSheet();
    const obj3 = code(4541);
  }
  obj2 = channel(1115);
  tmp(4707).sendMail({ subject: "", body: message }, (arg0, arg1, arg2) => {
    if (arg0) {
      let obj = { inviteKey: code, channelId: null, messageId: null, location: "Email Option", overrideProperties: null };
      let id;
      if (channel != null) {
        id = channel.id;
      }
      if (id == null) {
        id = null;
      }
      obj.channelId = id;
      obj = { send_type: constants2.EMAIL };
      obj.overrideProperties = obj;
      obj.trackInvite(obj);
    }
    if (arg2) {
      const obj1 = { body: null, isDismissable: true };
      const intl = util.intl;
      obj1.body = intl.string(util.t["1ieAR5"]);
      actions_AlertActionCreatorsDefault.show(obj1);
    }
  });
  const tmpResult = tmp(4707);
};
items[4] = obj3;
let obj4 = { type: obj.FB_MESSENGER, fullIcon: _modDef9916, isAvailable: null, getLabel: null, onPress: null };
obj4.isAvailable = InstantInviteUtils.isAppInstalled(SHARE_APPS_KEY.MESSENGER);
obj4.getLabel = function getLabel() {
  const intl = util.intl;
  return intl.string(util.t.P0R3ZF);
};
obj4.onPress = function onPress(code) {
  code = code.code;
  ({ channel, location: _location } = code);
  const tmp = getInviteURLDefault(code);
  InstantInviteUtils.trackOptionClicked(code, channel, constants.MESSENGER, _location);
  Linking.openURL(SHARE_URLS[SHARE_APPS_KEY.MESSENGER](tmp));
};
items[5] = obj4;
const obj5 = { type: obj.GMAIL, fullIcon: _modDef9917, isAvailable: null, getLabel: null, onPress: null };
obj5.isAvailable = InstantInviteUtils.isAppInstalled(SHARE_APPS_KEY.GMAIL);
obj5.getLabel = function getLabel() {
  const intl = util.intl;
  return intl.string(util.t["14o9ZT"]);
};
obj5.onPress = function onPress(code) {
  ({ channel, message, location: _location } = code);
  InstantInviteUtils.trackOptionClicked(code.code, channel, constants.GMAIL, _location);
  Linking.openURL(SHARE_URLS[SHARE_APPS_KEY.GMAIL]("", message));
};
items[6] = obj5;
const obj6 = { type: obj.TELEGRAM, fullIcon: _modDef9918, isAvailable: null, getLabel: null, onPress: null };
obj6.isAvailable = InstantInviteUtils.isAppInstalled(SHARE_APPS_KEY.TELEGRAM);
obj6.getLabel = function getLabel() {
  const intl = util.intl;
  return intl.string(util.t["148qIV"]);
};
obj6.onPress = function onPress(code) {
  code = code.code;
  ({ channel, message, location: _location } = code);
  const tmp = getInviteURLDefault(code);
  InstantInviteUtils.trackOptionClicked(code, channel, constants.TELEGRAM, _location);
  Linking.openURL(SHARE_URLS[SHARE_APPS_KEY.TELEGRAM](message, tmp));
};
items[7] = obj6;
const obj7 = { type: obj.TWITTER, fullIcon: _modDef9919, isAvailable: null, getLabel: null, onPress: null };
obj7.isAvailable = InstantInviteUtils.isAppInstalled(SHARE_APPS_KEY.TWITTER);
obj7.getLabel = function getLabel() {
  const intl = util.intl;
  return intl.string(util.t.oAiltV);
};
obj7.onPress = function onPress(code) {
  ({ channel, message, location: _location } = code);
  InstantInviteUtils.trackOptionClicked(code.code, channel, constants.TWITTER, _location);
  Linking.openURL(SHARE_URLS[SHARE_APPS_KEY.TWITTER](message));
};
items[8] = obj7;
const obj8 = { type: obj.WHATSAPP, fullIcon: _modDef9920, isAvailable: null, getLabel: null, onPress: null };
obj8.isAvailable = InstantInviteUtils.isAppInstalled(SHARE_APPS_KEY.WHATSAPP);
obj8.getLabel = function getLabel() {
  const intl = util.intl;
  return intl.string(util.t.viazhS);
};
obj8.onPress = function onPress(code) {
  ({ channel, message, location: _location } = code);
  InstantInviteUtils.trackOptionClicked(code.code, channel, constants.WHATSAPP, _location);
  Linking.openURL(SHARE_URLS[SHARE_APPS_KEY.WHATSAPP](message));
};
items[9] = obj8;
const obj9 = { type: obj.LINE, fullIcon: _modDef9921, isAvailable: null, getLabel: null, onPress: null };
obj9.isAvailable = InstantInviteUtils.isAppInstalled(SHARE_APPS_KEY.LINE);
obj9.getLabel = function getLabel() {
  const intl = util.intl;
  return intl.string(util.t.kqgslH);
};
obj9.onPress = function onPress(code) {
  ({ channel, message, location: _location } = code);
  InstantInviteUtils.trackOptionClicked(code.code, channel, constants.LINE, _location);
  Linking.openURL(SHARE_URLS[SHARE_APPS_KEY.LINE](message));
};
items[10] = obj9;
const items1 = [, ];
[arr2[0], arr2[1]] = items;
const result = size.fileFinishedImporting("modules/instant_invite/native/components/InstantInviteConstants.tsx");

export const ShareItemType = obj;
export const SHARE_ITEMS = items;
export const SHARE_ITEMS_DEFAULT = items1;