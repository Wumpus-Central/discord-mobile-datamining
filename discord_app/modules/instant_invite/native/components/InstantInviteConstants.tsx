// === Module 9517: components/InstantInviteConstants ===

// Module 9517 (components/InstantInviteConstants)
import _mod17 from "module_17" /* 17 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1987 */;
import _modDef4816 from "module_4816" /* 4816 */;
import _modDef4840 from "module_4840" /* 4840 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4854 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5708 */;
import MessageActionCreatorsDefault from "MessageActionCreators" /* 6965 */;
import getInviteURLDefault from "getInviteURL" /* 7255 */;
import _modDef9265 from "module_9265" /* 9265 */;
import icons_ShareDefault from "icons/Share" /* 9518 */;
import _modDef9521 from "module_9521" /* 9521 */;
import _modDef9522 from "module_9522" /* 9522 */;
import _modDef9523 from "module_9523" /* 9523 */;
import _modDef9541 from "module_9541" /* 9541 */;
import _modDef9542 from "module_9542" /* 9542 */;
import _modDef9543 from "module_9543" /* 9543 */;
import _modDef9544 from "module_9544" /* 9544 */;
import _modDef9545 from "module_9545" /* 9545 */;
import _modDef9546 from "module_9546" /* 9546 */;
import _modDef9547 from "module_9547" /* 9547 */;
import _modDef9548 from "module_9548" /* 9548 */;
import _modDef9549 from "module_9549" /* 9549 */;
import InstantInviteConstants from "InstantInviteConstants" /* 9486 */;
import Constants from "Constants" /* 1085 */;
import MetaQuestUtils from "MetaQuestUtils" /* 1615 */;
import PlatformUtils_mod from "PlatformUtils" /* 1369 */;
import DCDSendUtils_mod from "DCDSendUtils" /* 5023 */;
import InstantInviteUtils_mod from "instant_invite/InstantInviteUtils" /* 9481 */;
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
    IconComponent: _modDef9265,
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
  IconComponent: _modDef9265,
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
  icon: _modDef9521,
  isAvailable: Promise.resolve(true),
  IconComponent: _modDef4840,
  getLabel() {
    const intl = util.intl;
    return intl.string(util.t.WqhZss);
  },
  onPress(arg0) {
    ({ channel, code, location: _location } = arg0);
    return InstantInviteUtils.handleCopy(code, channel, _location);
  }
};
let obj4 = { type: obj.QR_CODE, icon: _modDef9522, isAvailable: null, IconComponent: null, getLabel: null, onPress: null };
obj4.isAvailable = Promise.resolve(!MetaQuestUtils.isMetaQuest());
obj4.IconComponent = _modDef9523;
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
  obj.openLazy(asyncRequireImpl(9524, dependencyMap.paths), combined, obj2, "stack");
};
items[2] = obj4;
let obj5 = { type: obj.MESSAGES, fullIcon: null, icon: null, isAvailable: null, getLabel: null, onPress: null };
let PlatformUtils = PlatformUtils_mod;
let importDefaultResult;
if (PlatformUtils.isIOS()) {
  importDefaultResult = _modDef9541;
}
obj5.fullIcon = importDefaultResult;
let PlatformUtils = PlatformUtils_mod;
let importDefaultResult1;
if (PlatformUtils.isAndroid()) {
  importDefaultResult1 = _modDef9542;
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
  channel(9481).trackOptionClicked(code, channel, constants.SMS, _location);
  let obj = channel(9481);
  const tmp = channel;
  if (obj2.isIOS()) {
    code(4854).hideActionSheet();
    let obj3 = code(4854);
  }
  obj2 = channel(1369);
  tmp(5023).sendSMS({ body: message }, (arg0, arg1, arg2) => {
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
  const tmpResult = tmp(5023);
};
items[3] = obj5;
const obj6 = { type: obj.MAIL, fullIcon: null, icon: null, isAvailable: null, getLabel: null, onPress: null };
let PlatformUtils = PlatformUtils_mod;
let importDefaultResult2;
if (PlatformUtils.isIOS()) {
  importDefaultResult2 = _modDef9543;
}
obj6.fullIcon = importDefaultResult2;
let PlatformUtils = PlatformUtils_mod;
let importDefaultResult3;
if (PlatformUtils.isAndroid()) {
  importDefaultResult3 = _modDef4816;
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
  channel(9481).trackOptionClicked(code, channel, constants.EMAIL, _location);
  let obj = channel(9481);
  const tmp = channel;
  if (obj2.isIOS()) {
    code(4854).hideActionSheet();
    let obj3 = code(4854);
  }
  obj2 = channel(1369);
  tmp(5023).sendMail({ subject: "", body: message }, (arg0, arg1, arg2) => {
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
  const tmpResult = tmp(5023);
};
items[4] = obj6;
const obj7 = { type: obj.FB_MESSENGER, fullIcon: _modDef9544, isAvailable: null, getLabel: null, onPress: null };
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
const obj8 = { type: obj.GMAIL, fullIcon: _modDef9545, isAvailable: null, getLabel: null, onPress: null };
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
const obj9 = { type: obj.TELEGRAM, fullIcon: _modDef9546, isAvailable: null, getLabel: null, onPress: null };
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
const obj10 = { type: obj.TWITTER, fullIcon: _modDef9547, isAvailable: null, getLabel: null, onPress: null };
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
const obj11 = { type: obj.WHATSAPP, fullIcon: _modDef9548, isAvailable: null, getLabel: null, onPress: null };
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
const obj12 = { type: obj.LINE, fullIcon: _modDef9549, isAvailable: null, getLabel: null, onPress: null };
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