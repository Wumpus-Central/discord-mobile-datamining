// === Module 8700: components/InstantInviteConstants ===

// Module 8700 (components/InstantInviteConstants)
import _mod17 from "module_17" /* 17 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1999 */;
import _modDef5016 from "module_5016" /* 5016 */;
import _modDef5040 from "module_5040" /* 5040 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5054 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5298 */;
import MessageActionCreatorsDefault from "MessageActionCreators" /* 7167 */;
import getInviteURLDefault from "getInviteURL" /* 8669 */;
import icons_ShareDefault from "icons/Share" /* 8701 */;
import _modDef8704 from "module_8704" /* 8704 */;
import _modDef8705 from "module_8705" /* 8705 */;
import _modDef8706 from "module_8706" /* 8706 */;
import _modDef8707 from "module_8707" /* 8707 */;
import _modDef8725 from "module_8725" /* 8725 */;
import _modDef8726 from "module_8726" /* 8726 */;
import _modDef8727 from "module_8727" /* 8727 */;
import _modDef8728 from "module_8728" /* 8728 */;
import _modDef8729 from "module_8729" /* 8729 */;
import _modDef8730 from "module_8730" /* 8730 */;
import _modDef8731 from "module_8731" /* 8731 */;
import _modDef8732 from "module_8732" /* 8732 */;
import _modDef8733 from "module_8733" /* 8733 */;
import InstantInviteConstants from "InstantInviteConstants" /* 8664 */;
import Constants from "Constants" /* 1085 */;
import MetaQuestUtils from "MetaQuestUtils" /* 1627 */;
import PlatformUtils_mod from "PlatformUtils" /* 1381 */;
import DCDSendUtils_mod from "DCDSendUtils" /* 7433 */;
import InstantInviteUtils_mod from "instant_invite/InstantInviteUtils" /* 8658 */;
import size from "module_2" /* 2 */;

const Linking = _mod17.Linking;
const SHARE_APPS_KEY = InstantInviteConstants.SHARE_APPS_KEY;
const SHARE_URLS = InstantInviteConstants.SHARE_URLS;
({ InviteOptionsType: metroRequire, SendTypes: closure_7 } = Constants);
let obj = { SHARE: 0, [0]: "SHARE", COPY: 1, [1]: "COPY", QR_CODE: 2, [2]: "QR_CODE", MESSAGES: 3, [3]: "MESSAGES", MAIL: 4, [4]: "MAIL", FB_MESSENGER: 5, [5]: "FB_MESSENGER", GMAIL: 6, [6]: "GMAIL", TELEGRAM: 7, [7]: "TELEGRAM", TWITTER: 8, [8]: "TWITTER", WHATSAPP: 9, [9]: "WHATSAPP", LINE: 10, [10]: "LINE" };
const items = [
  {
    type: obj.SHARE,
    icon: icons_ShareDefault,
    isAvailable: Promise.resolve(true),
    IconComponent: _modDef8704,
    backgroundColor: nativeDefault.unsafe_rawColors.BRAND_500,
    getLabel() {
      const intl = util.intl;
      return intl.string(util.t.wPadMa);
    },
    onPress(code) {
      ({ channel, message, location: _location } = code);
      return InstantInviteUtils.handleOpenShareSheet(code.code, channel, message, _location);
    }
  },
,
,
,
,
,
,
,
,
,

];
let obj2 = {
  type: obj.SHARE,
  icon: icons_ShareDefault,
  isAvailable: Promise.resolve(true),
  IconComponent: _modDef8704,
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
items[1] = {
  type: obj.COPY,
  icon: _modDef8705,
  isAvailable: Promise.resolve(true),
  IconComponent: _modDef5040,
  getLabel() {
    const intl = util.intl;
    return intl.string(util.t.WqhZss);
  },
  onPress(arg0) {
    ({ channel, code, location: _location } = arg0);
    return InstantInviteUtils.handleCopy(code, channel, _location);
  }
};
let obj4 = { type: obj.QR_CODE, icon: _modDef8706, isAvailable: null, IconComponent: null, getLabel: null, onPress: null };
obj4.isAvailable = Promise.resolve(!MetaQuestUtils.isMetaQuest());
obj4.IconComponent = _modDef8707;
obj4.getLabel = function getLabel() {
  const intl = util.intl;
  return intl.string(util.t.rriLm1);
};
obj4.onPress = function onPress(code) {
  code = code.code;
  ({ channel, location: _location } = code);
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { link: null, location: null, channel: null };
  const combined = "InstantInviteQRCodeActionSheet-" + code;
  obj2.link = getInviteURLDefault(code);
  obj2.location = _location;
  obj2.channel = channel;
  obj.openLazy(asyncRequireImpl(8708, dependencyMap.paths), combined, obj2, "stack");
};
items[2] = obj4;
let obj5 = { type: obj.MESSAGES, fullIcon: null, icon: null, isAvailable: null, getLabel: null, onPress: null };
let PlatformUtils = PlatformUtils_mod;
let importDefaultResult;
if (PlatformUtils.isIOS()) {
  importDefaultResult = _modDef8725;
}
obj5.fullIcon = importDefaultResult;
let PlatformUtils = PlatformUtils_mod;
let importDefaultResult1;
if (PlatformUtils.isAndroid()) {
  importDefaultResult1 = _modDef8726;
}
obj5.icon = importDefaultResult1;
let DCDSendUtils = DCDSendUtils_mod;
obj5.isAvailable = DCDSendUtils.canSendSMS();
obj5.getLabel = function getLabel() {
  const intl = util.intl;
  return intl.string(util.t.AQKfCj);
};
obj5.onPress = function onPress(channel) {
  channel = channel.channel;
  const code = channel.code;
  ({ message, location: _location } = channel);
  channel(8658).trackOptionClicked(code, channel, constants.SMS, _location);
  let obj = channel(8658);
  const tmp = channel;
  if (obj2.isIOS()) {
    code(5054).hideActionSheet();
    let obj3 = code(5054);
  }
  obj2 = channel(1381);
  tmp(7433).sendSMS({ body: message }, (arg0, arg1, arg2) => {
    if (arg0) {
      const obj2 = { inviteKey: code, channelId: null, messageId: null, location: "SMS Option", overrideProperties: null };
      let id;
      if (channel != null) {
        id = channel.id;
      }
      if (id == null) {
        id = null;
      }
      obj2.channelId = id;
      const obj3 = { send_type: constants2.SMS };
      obj2.overrideProperties = obj3;
      MessageActionCreatorsDefault.trackInvite(obj2);
    }
    if (arg2) {
      const obj5 = { body: null, isDismissable: true };
      const intl = util.intl;
      obj5.body = intl.string(util.t["1ieAR5"]);
      actions_AlertActionCreatorsDefault.show(obj5);
    }
  });
  const tmpResult = tmp(7433);
};
items[3] = obj5;
const obj6 = { type: obj.MAIL, fullIcon: null, icon: null, isAvailable: null, getLabel: null, onPress: null };
let PlatformUtils = PlatformUtils_mod;
let importDefaultResult2;
if (PlatformUtils.isIOS()) {
  importDefaultResult2 = _modDef8727;
}
obj6.fullIcon = importDefaultResult2;
let PlatformUtils = PlatformUtils_mod;
let importDefaultResult3;
if (PlatformUtils.isAndroid()) {
  importDefaultResult3 = _modDef5016;
}
obj6.icon = importDefaultResult3;
let DCDSendUtils = DCDSendUtils_mod;
obj6.isAvailable = DCDSendUtils.canSendMail();
obj6.getLabel = function getLabel() {
  const intl = util.intl;
  return intl.string(util.t.QaAypP);
};
obj6.onPress = function onPress(channel) {
  channel = channel.channel;
  const code = channel.code;
  ({ message, location: _location } = channel);
  channel(8658).trackOptionClicked(code, channel, constants.EMAIL, _location);
  let obj = channel(8658);
  const tmp = channel;
  if (obj2.isIOS()) {
    code(5054).hideActionSheet();
    let obj3 = code(5054);
  }
  obj2 = channel(1381);
  tmp(7433).sendMail({ subject: "", body: message }, (arg0, arg1, arg2) => {
    if (arg0) {
      const obj2 = { inviteKey: code, channelId: null, messageId: null, location: "Email Option", overrideProperties: null };
      let id;
      if (channel != null) {
        id = channel.id;
      }
      if (id == null) {
        id = null;
      }
      obj2.channelId = id;
      const obj3 = { send_type: constants2.EMAIL };
      obj2.overrideProperties = obj3;
      MessageActionCreatorsDefault.trackInvite(obj2);
    }
    if (arg2) {
      const obj5 = { body: null, isDismissable: true };
      const intl = util.intl;
      obj5.body = intl.string(util.t["1ieAR5"]);
      actions_AlertActionCreatorsDefault.show(obj5);
    }
  });
  const tmpResult = tmp(7433);
};
items[4] = obj6;
const obj7 = { type: obj.FB_MESSENGER, fullIcon: _modDef8728, isAvailable: null, getLabel: null, onPress: null };
let InstantInviteUtils = InstantInviteUtils_mod;
obj7.isAvailable = InstantInviteUtils.isAppInstalled(SHARE_APPS_KEY.MESSENGER);
obj7.getLabel = function getLabel() {
  const intl = util.intl;
  return intl.string(util.t.P0R3ZF);
};
obj7.onPress = function onPress(code) {
  code = code.code;
  ({ channel, location: _location } = code);
  const tmp = getInviteURLDefault(code);
  InstantInviteUtils.trackOptionClicked(code, channel, constants.MESSENGER, _location);
  Linking.openURL(SHARE_URLS[SHARE_APPS_KEY.MESSENGER](tmp));
};
items[5] = obj7;
const obj8 = { type: obj.GMAIL, fullIcon: _modDef8729, isAvailable: null, getLabel: null, onPress: null };
let InstantInviteUtils = InstantInviteUtils_mod;
obj8.isAvailable = InstantInviteUtils.isAppInstalled(SHARE_APPS_KEY.GMAIL);
obj8.getLabel = function getLabel() {
  const intl = util.intl;
  return intl.string(util.t["14o9ZT"]);
};
obj8.onPress = function onPress(code) {
  ({ channel, message, location: _location } = code);
  InstantInviteUtils.trackOptionClicked(code.code, channel, constants.GMAIL, _location);
  Linking.openURL(SHARE_URLS[SHARE_APPS_KEY.GMAIL]("", message));
};
items[6] = obj8;
const obj9 = { type: obj.TELEGRAM, fullIcon: _modDef8730, isAvailable: null, getLabel: null, onPress: null };
let InstantInviteUtils = InstantInviteUtils_mod;
obj9.isAvailable = InstantInviteUtils.isAppInstalled(SHARE_APPS_KEY.TELEGRAM);
obj9.getLabel = function getLabel() {
  const intl = util.intl;
  return intl.string(util.t["148qIV"]);
};
obj9.onPress = function onPress(code) {
  code = code.code;
  ({ channel, message, location: _location } = code);
  const tmp = getInviteURLDefault(code);
  InstantInviteUtils.trackOptionClicked(code, channel, constants.TELEGRAM, _location);
  Linking.openURL(SHARE_URLS[SHARE_APPS_KEY.TELEGRAM](message, tmp));
};
items[7] = obj9;
const obj10 = { type: obj.TWITTER, fullIcon: _modDef8731, isAvailable: null, getLabel: null, onPress: null };
let InstantInviteUtils = InstantInviteUtils_mod;
obj10.isAvailable = InstantInviteUtils.isAppInstalled(SHARE_APPS_KEY.TWITTER);
obj10.getLabel = function getLabel() {
  const intl = util.intl;
  return intl.string(util.t.oAiltV);
};
obj10.onPress = function onPress(code) {
  ({ channel, message, location: _location } = code);
  InstantInviteUtils.trackOptionClicked(code.code, channel, constants.TWITTER, _location);
  Linking.openURL(SHARE_URLS[SHARE_APPS_KEY.TWITTER](message));
};
items[8] = obj10;
const obj11 = { type: obj.WHATSAPP, fullIcon: _modDef8732, isAvailable: null, getLabel: null, onPress: null };
let InstantInviteUtils = InstantInviteUtils_mod;
obj11.isAvailable = InstantInviteUtils.isAppInstalled(SHARE_APPS_KEY.WHATSAPP);
obj11.getLabel = function getLabel() {
  const intl = util.intl;
  return intl.string(util.t.viazhS);
};
obj11.onPress = function onPress(code) {
  ({ channel, message, location: _location } = code);
  InstantInviteUtils.trackOptionClicked(code.code, channel, constants.WHATSAPP, _location);
  Linking.openURL(SHARE_URLS[SHARE_APPS_KEY.WHATSAPP](message));
};
items[9] = obj11;
const obj12 = { type: obj.LINE, fullIcon: _modDef8733, isAvailable: null, getLabel: null, onPress: null };
let InstantInviteUtils = InstantInviteUtils_mod;
obj12.isAvailable = InstantInviteUtils.isAppInstalled(SHARE_APPS_KEY.LINE);
obj12.getLabel = function getLabel() {
  const intl = util.intl;
  return intl.string(util.t.kqgslH);
};
obj12.onPress = function onPress(code) {
  ({ channel, message, location: _location } = code);
  InstantInviteUtils.trackOptionClicked(code.code, channel, constants.LINE, _location);
  Linking.openURL(SHARE_URLS[SHARE_APPS_KEY.LINE](message));
};
items[10] = obj12;
const items1 = [, ];
[arr2[0], arr2[1]] = items;
const result = size.fileFinishedImporting("modules/instant_invite/native/components/InstantInviteConstants.tsx");

export const ShareItemType = obj;
export const SHARE_ITEMS = items;
export const SHARE_ITEMS_DEFAULT = items1;