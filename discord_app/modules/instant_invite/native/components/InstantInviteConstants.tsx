// === Module 9986: components/InstantInviteConstants ===

// Module 9986 (components/InstantInviteConstants)
import _mod17 from "module_17" /* 17 */;
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import _modDef4580 from "module_4580" /* 4580 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4603 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 4981 */;
import MessageActionCreatorsDefault from "MessageActionCreators" /* 7559 */;
import getInviteURLDefault from "getInviteURL" /* 7861 */;
import _modDef9183 from "module_9183" /* 9183 */;
import icons_ShareDefault from "icons/Share" /* 9987 */;
import _modDef9990 from "module_9990" /* 9990 */;
import _modDef9991 from "module_9991" /* 9991 */;
import _modDef9992 from "module_9992" /* 9992 */;
import _modDef10010 from "module_10010" /* 10010 */;
import _modDef10011 from "module_10011" /* 10011 */;
import _modDef10012 from "module_10012" /* 10012 */;
import _modDef10013 from "module_10013" /* 10013 */;
import _modDef10014 from "module_10014" /* 10014 */;
import _modDef10015 from "module_10015" /* 10015 */;
import _modDef10016 from "module_10016" /* 10016 */;
import _modDef10017 from "module_10017" /* 10017 */;
import _modDef10018 from "module_10018" /* 10018 */;
import _modDef10019 from "module_10019" /* 10019 */;
import InstantInviteConstants from "InstantInviteConstants" /* 9955 */;
import Constants from "Constants" /* 1074 */;
import MetaQuestUtils from "MetaQuestUtils" /* 1608 */;
import PlatformUtils from "PlatformUtils" /* 1150 */;
import DCDSendUtils from "DCDSendUtils" /* 4769 */;
import InstantInviteUtils from "instant_invite/InstantInviteUtils" /* 9950 */;
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
  IconComponent: _modDef9183,
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
  icon: _modDef9990,
  isAvailable: Promise.resolve(true),
  IconComponent: _modDef4580,
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
let obj1 = { type: obj.QR_CODE, icon: _modDef9991, isAvailable: null, IconComponent: null, getLabel: null, onPress: null };
obj1.isAvailable = Promise.resolve(!MetaQuestUtils.isMetaQuest());
obj1.IconComponent = _modDef9992;
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
  obj.openLazy(asyncRequireImpl(9993, dependencyMap.paths), combined, obj, "stack");
};
items[2] = obj1;
let obj2 = { type: obj.MESSAGES, fullIcon: null, icon: null, isAvailable: null, getLabel: null, onPress: null };
let importDefaultResult;
if (PlatformUtils.isIOS()) {
  importDefaultResult = _modDef10010;
}
obj2.fullIcon = importDefaultResult;
let importDefaultResult1;
if (PlatformUtils.isAndroid()) {
  importDefaultResult1 = _modDef10011;
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
  channel(9950).trackOptionClicked(code, channel, constants.SMS, _location);
  let obj = channel(9950);
  const tmp = channel;
  if (obj2.isIOS()) {
    code(4603).hideActionSheet();
    const obj3 = code(4603);
  }
  obj2 = channel(1150);
  tmp(4769).sendSMS({ body: message }, (arg0, arg1, arg2) => {
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
  const tmpResult = tmp(4769);
};
items[3] = obj2;
let obj3 = { type: obj.MAIL, fullIcon: null, icon: null, isAvailable: null, getLabel: null, onPress: null };
let importDefaultResult2;
if (PlatformUtils.isIOS()) {
  importDefaultResult2 = _modDef10012;
}
obj3.fullIcon = importDefaultResult2;
let importDefaultResult3;
if (PlatformUtils.isAndroid()) {
  importDefaultResult3 = _modDef10013;
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
  channel(9950).trackOptionClicked(code, channel, constants.EMAIL, _location);
  let obj = channel(9950);
  const tmp = channel;
  if (obj2.isIOS()) {
    code(4603).hideActionSheet();
    const obj3 = code(4603);
  }
  obj2 = channel(1150);
  tmp(4769).sendMail({ subject: "", body: message }, (arg0, arg1, arg2) => {
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
  const tmpResult = tmp(4769);
};
items[4] = obj3;
let obj4 = { type: obj.FB_MESSENGER, fullIcon: _modDef10014, isAvailable: null, getLabel: null, onPress: null };
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
const obj5 = { type: obj.GMAIL, fullIcon: _modDef10015, isAvailable: null, getLabel: null, onPress: null };
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
const obj6 = { type: obj.TELEGRAM, fullIcon: _modDef10016, isAvailable: null, getLabel: null, onPress: null };
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
const obj7 = { type: obj.TWITTER, fullIcon: _modDef10017, isAvailable: null, getLabel: null, onPress: null };
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
const obj8 = { type: obj.WHATSAPP, fullIcon: _modDef10018, isAvailable: null, getLabel: null, onPress: null };
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
const obj9 = { type: obj.LINE, fullIcon: _modDef10019, isAvailable: null, getLabel: null, onPress: null };
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