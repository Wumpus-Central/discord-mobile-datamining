// === Module 9478: components/InstantInviteConstants ===

// Module 9478 (components/InstantInviteConstants)
import _mod17 from "module_17" /* 17 */;
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1981 */;
import _modDef4776 from "module_4776" /* 4776 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5370 */;
import MessageActionCreatorsDefault from "MessageActionCreators" /* 7042 */;
import getInviteURLDefault from "getInviteURL" /* 7343 */;
import _modDef9231 from "module_9231" /* 9231 */;
import icons_ShareDefault from "icons/Share" /* 9479 */;
import _modDef9482 from "module_9482" /* 9482 */;
import _modDef9483 from "module_9483" /* 9483 */;
import _modDef9484 from "module_9484" /* 9484 */;
import _modDef9502 from "module_9502" /* 9502 */;
import _modDef9503 from "module_9503" /* 9503 */;
import _modDef9504 from "module_9504" /* 9504 */;
import _modDef9505 from "module_9505" /* 9505 */;
import _modDef9506 from "module_9506" /* 9506 */;
import _modDef9507 from "module_9507" /* 9507 */;
import _modDef9508 from "module_9508" /* 9508 */;
import _modDef9509 from "module_9509" /* 9509 */;
import _modDef9510 from "module_9510" /* 9510 */;
import _modDef9511 from "module_9511" /* 9511 */;
import InstantInviteConstants from "InstantInviteConstants" /* 9447 */;
import Constants from "Constants" /* 1074 */;
import MetaQuestUtils from "MetaQuestUtils" /* 1610 */;
import PlatformUtils_mod from "PlatformUtils" /* 1364 */;
import DCDSendUtils_mod from "DCDSendUtils" /* 4969 */;
import InstantInviteUtils_mod from "instant_invite/InstantInviteUtils" /* 9442 */;
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
    IconComponent: _modDef9231,
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
  IconComponent: _modDef9231,
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
  icon: _modDef9482,
  isAvailable: Promise.resolve(true),
  IconComponent: _modDef4776,
  getLabel() {
    const intl = util.intl;
    return intl.string(util.t.WqhZss);
  },
  onPress(arg0) {
    ({ channel, code, location: _location } = arg0);
    return InstantInviteUtils.handleCopy(code, channel, _location);
  }
};
let obj4 = { type: obj.QR_CODE, icon: _modDef9483, isAvailable: null, IconComponent: null, getLabel: null, onPress: null };
obj4.isAvailable = Promise.resolve(!MetaQuestUtils.isMetaQuest());
obj4.IconComponent = _modDef9484;
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
  obj.openLazy(asyncRequireImpl(9485, dependencyMap.paths), combined, obj2, "stack");
};
items[2] = obj4;
let obj5 = { type: obj.MESSAGES, fullIcon: null, icon: null, isAvailable: null, getLabel: null, onPress: null };
let PlatformUtils = PlatformUtils_mod;
let importDefaultResult;
if (PlatformUtils.isIOS()) {
  importDefaultResult = _modDef9502;
}
obj5.fullIcon = importDefaultResult;
let PlatformUtils = PlatformUtils_mod;
let importDefaultResult1;
if (PlatformUtils.isAndroid()) {
  importDefaultResult1 = _modDef9503;
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
  channel(9442).trackOptionClicked(code, channel, constants.SMS, _location);
  let obj = channel(9442);
  const tmp = channel;
  if (obj2.isIOS()) {
    code(4800).hideActionSheet();
    let obj3 = code(4800);
  }
  obj2 = channel(1364);
  tmp(4969).sendSMS({ body: message }, (arg0, arg1, arg2) => {
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
  const tmpResult = tmp(4969);
};
items[3] = obj5;
const obj6 = { type: obj.MAIL, fullIcon: null, icon: null, isAvailable: null, getLabel: null, onPress: null };
let PlatformUtils = PlatformUtils_mod;
let importDefaultResult2;
if (PlatformUtils.isIOS()) {
  importDefaultResult2 = _modDef9504;
}
obj6.fullIcon = importDefaultResult2;
let PlatformUtils = PlatformUtils_mod;
let importDefaultResult3;
if (PlatformUtils.isAndroid()) {
  importDefaultResult3 = _modDef9505;
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
  channel(9442).trackOptionClicked(code, channel, constants.EMAIL, _location);
  let obj = channel(9442);
  const tmp = channel;
  if (obj2.isIOS()) {
    code(4800).hideActionSheet();
    let obj3 = code(4800);
  }
  obj2 = channel(1364);
  tmp(4969).sendMail({ subject: "", body: message }, (arg0, arg1, arg2) => {
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
  const tmpResult = tmp(4969);
};
items[4] = obj6;
const obj7 = { type: obj.FB_MESSENGER, fullIcon: _modDef9506, isAvailable: null, getLabel: null, onPress: null };
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
const obj8 = { type: obj.GMAIL, fullIcon: _modDef9507, isAvailable: null, getLabel: null, onPress: null };
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
const obj9 = { type: obj.TELEGRAM, fullIcon: _modDef9508, isAvailable: null, getLabel: null, onPress: null };
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
const obj10 = { type: obj.TWITTER, fullIcon: _modDef9509, isAvailable: null, getLabel: null, onPress: null };
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
const obj11 = { type: obj.WHATSAPP, fullIcon: _modDef9510, isAvailable: null, getLabel: null, onPress: null };
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
const obj12 = { type: obj.LINE, fullIcon: _modDef9511, isAvailable: null, getLabel: null, onPress: null };
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