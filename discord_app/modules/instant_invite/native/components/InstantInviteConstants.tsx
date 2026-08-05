import { asyncRequireImpl } from "../../../../../_runtime/01959_asyncRequireImpl.js";
import { getSystemLocale } from "../../../../intl/index.native.tsx";
import { ACTION_SHEET_HEIGHT_HALF } from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import { getInviteURL } from "../../getInviteURL.tsx";
import { showInstantInviteActionSheet } from "../InstantInviteUtils.tsx";
// discord_app/modules/instant_invite/native/components/InstantInviteConstants.tsx
import { Linking } from "set";
import SHARE_APPS_KEY from "SHARE_APPS_KEY";
import ME from "ME";
import isMetaQuest from "isMetaQuest";
import set from "set";
import set from "set";
import sendSMS from "sendSMS";
import set from "set";
import set from "set";
import sendSMS from "sendSMS";
import showInstantInviteActionSheet from "showInstantInviteActionSheet";
import showInstantInviteActionSheet from "showInstantInviteActionSheet";
import showInstantInviteActionSheet from "showInstantInviteActionSheet";
import showInstantInviteActionSheet from "showInstantInviteActionSheet";
import showInstantInviteActionSheet from "showInstantInviteActionSheet";
import showInstantInviteActionSheet from "showInstantInviteActionSheet";
import set from "ME";

let closure_6;
let error;
SHARE_APPS_KEY = SHARE_APPS_KEY.SHARE_APPS_KEY;
const SHARE_URLS = SHARE_APPS_KEY.SHARE_URLS;
({ InviteOptionsType: closure_6, SendTypes: error } = ME);
let obj = { SHARE: 0, [0]: "SHARE", COPY: 1, [1]: "COPY", QR_CODE: 2, [2]: "QR_CODE", MESSAGES: 3, [3]: "MESSAGES", MAIL: 4, [4]: "MAIL", FB_MESSENGER: 5, [5]: "FB_MESSENGER", GMAIL: 6, [6]: "GMAIL", TELEGRAM: 7, [7]: "TELEGRAM", TWITTER: 8, [8]: "TWITTER", WHATSAPP: 9, [9]: "WHATSAPP", LINE: 10, [10]: "LINE" };
obj = {
  type: obj.SHARE,
  icon: require("module_9012"),
  isAvailable: Promise.resolve(true),
  IconComponent: require("registerAsset"),
  backgroundColor: require("Themes").unsafe_rawColors.BRAND_500,
  getLabel() {
    const intl = getSystemLocale /* getSystemLocale */.intl;
    return intl.string(getSystemLocale /* getSystemLocale */.t.wPadMa);
  },
  onPress(code) {
    let _location;
    let channel;
    let message;
    ({ channel, message, location: _location } = code);
    return showInstantInviteActionSheet /* showInstantInviteActionSheet */.handleOpenShareSheet(code.code, channel, message, _location);
  }
};
const items = [obj, , , , , , , , , , ];
obj = {
  type: obj.COPY,
  icon: require("registerAsset"),
  isAvailable: Promise.resolve(true),
  IconComponent: require("registerAsset"),
  getLabel() {
    const intl = getSystemLocale /* getSystemLocale */.intl;
    return intl.string(getSystemLocale /* getSystemLocale */.t.WqhZss);
  },
  onPress(arg0) {
    let _location;
    let channel;
    let code;
    ({ channel, code, location: _location } = arg0);
    return showInstantInviteActionSheet /* showInstantInviteActionSheet */.handleCopy(code, channel, _location);
  }
};
items[1] = obj;
let obj1 = { type: obj.QR_CODE, icon: require("registerAsset"), isAvailable: null, IconComponent: null, getLabel: null, onPress: null };
obj1[2] = Promise.resolve(!isMetaQuest.isMetaQuest());
obj1[3] = require("registerAsset");
obj1[4] = function getLabel() {
  const intl = getSystemLocale /* getSystemLocale */.intl;
  return intl.string(getSystemLocale /* getSystemLocale */.t.rriLm1);
};
obj1[5] = function onPress(code) {
  let _location;
  let channel;
  code = code.code;
  ({ channel, location: _location } = code);
  let obj = ACTION_SHEET_HEIGHT_HALF;
  obj = { link: null, location: null, channel: null };
  const combined = "InstantInviteQRCodeActionSheet-" + code;
  obj[0] = getInviteURL(code);
  obj[1] = _location;
  obj[2] = channel;
  obj.openLazy(asyncRequireImpl /* asyncRequireImpl */(9019, dependencyMap.paths), combined, obj, "stack");
};
items[2] = obj1;
let obj2 = { type: obj.MESSAGES, fullIcon: null, icon: null, isAvailable: null, getLabel: null, onPress: null };
let importDefaultResult;
if (set.isIOS()) {
  importDefaultResult = require("registerAsset");
}
obj2[1] = importDefaultResult;
let importDefaultResult1;
if (set.isAndroid()) {
  importDefaultResult1 = require("registerAsset");
}
obj2[2] = importDefaultResult1;
obj2[3] = sendSMS.canSendSMS();
obj2[4] = function getLabel() {
  const intl = getSystemLocale /* getSystemLocale */.intl;
  return intl.string(getSystemLocale /* getSystemLocale */.t.AQKfCj);
};
obj2[5] = function onPress(channel) {
  let _location;
  let message;
  channel = channel.channel;
  const code = channel.code;
  ({ message, location: _location } = channel);
  channel(8987).trackOptionClicked(code, channel, constants.SMS, _location);
  let obj = channel(8987);
  const tmp = channel;
  if (obj2.isIOS()) {
    code(4253).hideActionSheet();
    const obj3 = code(4253);
  }
  obj2 = channel(500);
  tmp(4458).sendSMS({ body: message }, (arg0, arg1, arg2) => {
    if (arg0) {
      let obj = code(outer1_2[21]);
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
      obj[0] = outer1_7.SMS;
      obj[4] = obj;
      obj.trackInvite(obj);
    }
    if (arg2) {
      const obj1 = { body: null, isDismissable: true };
      const intl = channel(outer1_2[6]).intl;
      obj1[0] = intl.string(channel(outer1_2[6]).t["1ieAR5"]);
      code(outer1_2[22]).show(obj1);
      const obj4 = code(outer1_2[22]);
    }
  });
};
items[3] = obj2;
let obj3 = { type: obj.MAIL, fullIcon: null, icon: null, isAvailable: null, getLabel: null, onPress: null };
let importDefaultResult2;
if (set.isIOS()) {
  importDefaultResult2 = require("registerAsset");
}
obj3[1] = importDefaultResult2;
let importDefaultResult3;
if (set.isAndroid()) {
  importDefaultResult3 = require("registerAsset");
}
obj3[2] = importDefaultResult3;
obj3[3] = sendSMS.canSendMail();
obj3[4] = function getLabel() {
  const intl = getSystemLocale /* getSystemLocale */.intl;
  return intl.string(getSystemLocale /* getSystemLocale */.t.QaAypP);
};
obj3[5] = function onPress(channel) {
  let _location;
  let message;
  channel = channel.channel;
  const code = channel.code;
  ({ message, location: _location } = channel);
  channel(8987).trackOptionClicked(code, channel, constants.EMAIL, _location);
  let obj = channel(8987);
  const tmp = channel;
  if (obj2.isIOS()) {
    code(4253).hideActionSheet();
    const obj3 = code(4253);
  }
  obj2 = channel(500);
  tmp(4458).sendMail({ subject: "", body: message }, (arg0, arg1, arg2) => {
    if (arg0) {
      let obj = code(outer1_2[21]);
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
      obj[0] = outer1_7.EMAIL;
      obj[4] = obj;
      obj.trackInvite(obj);
    }
    if (arg2) {
      const obj1 = { body: null, isDismissable: true };
      const intl = channel(outer1_2[6]).intl;
      obj1[0] = intl.string(channel(outer1_2[6]).t["1ieAR5"]);
      code(outer1_2[22]).show(obj1);
      const obj4 = code(outer1_2[22]);
    }
  });
};
items[4] = obj3;
let obj4 = { type: obj.FB_MESSENGER, fullIcon: require("registerAsset"), isAvailable: null, getLabel: null, onPress: null };
obj4[2] = showInstantInviteActionSheet.isAppInstalled(SHARE_APPS_KEY.MESSENGER);
obj4[3] = function getLabel() {
  const intl = getSystemLocale /* getSystemLocale */.intl;
  return intl.string(getSystemLocale /* getSystemLocale */.t.P0R3ZF);
};
obj4[4] = function onPress(code) {
  let _location;
  let channel;
  code = code.code;
  ({ channel, location: _location } = code);
  const tmp = getInviteURL(code);
  showInstantInviteActionSheet /* showInstantInviteActionSheet */.trackOptionClicked(code, channel, constants.MESSENGER, _location);
  Linking.openURL(SHARE_URLS[SHARE_APPS_KEY.MESSENGER](tmp));
};
items[5] = obj4;
const obj5 = { type: obj.GMAIL, fullIcon: require("registerAsset"), isAvailable: null, getLabel: null, onPress: null };
obj5[2] = showInstantInviteActionSheet.isAppInstalled(SHARE_APPS_KEY.GMAIL);
obj5[3] = function getLabel() {
  const intl = getSystemLocale /* getSystemLocale */.intl;
  return intl.string(getSystemLocale /* getSystemLocale */.t["14o9ZT"]);
};
obj5[4] = function onPress(code) {
  let _location;
  let channel;
  let message;
  ({ channel, message, location: _location } = code);
  showInstantInviteActionSheet /* showInstantInviteActionSheet */.trackOptionClicked(code.code, channel, constants.GMAIL, _location);
  Linking.openURL(SHARE_URLS[SHARE_APPS_KEY.GMAIL]("", message));
};
items[6] = obj5;
const obj6 = { type: obj.TELEGRAM, fullIcon: require("registerAsset"), isAvailable: null, getLabel: null, onPress: null };
obj6[2] = showInstantInviteActionSheet.isAppInstalled(SHARE_APPS_KEY.TELEGRAM);
obj6[3] = function getLabel() {
  const intl = getSystemLocale /* getSystemLocale */.intl;
  return intl.string(getSystemLocale /* getSystemLocale */.t["148qIV"]);
};
obj6[4] = function onPress(code) {
  let _location;
  let channel;
  let message;
  code = code.code;
  ({ channel, message, location: _location } = code);
  const tmp = getInviteURL(code);
  showInstantInviteActionSheet /* showInstantInviteActionSheet */.trackOptionClicked(code, channel, constants.TELEGRAM, _location);
  Linking.openURL(SHARE_URLS[SHARE_APPS_KEY.TELEGRAM](message, tmp));
};
items[7] = obj6;
const obj7 = { type: obj.TWITTER, fullIcon: require("registerAsset"), isAvailable: null, getLabel: null, onPress: null };
obj7[2] = showInstantInviteActionSheet.isAppInstalled(SHARE_APPS_KEY.TWITTER);
obj7[3] = function getLabel() {
  const intl = getSystemLocale /* getSystemLocale */.intl;
  return intl.string(getSystemLocale /* getSystemLocale */.t.oAiltV);
};
obj7[4] = function onPress(code) {
  let _location;
  let channel;
  let message;
  ({ channel, message, location: _location } = code);
  showInstantInviteActionSheet /* showInstantInviteActionSheet */.trackOptionClicked(code.code, channel, constants.TWITTER, _location);
  Linking.openURL(SHARE_URLS[SHARE_APPS_KEY.TWITTER](message));
};
items[8] = obj7;
const obj8 = { type: obj.WHATSAPP, fullIcon: require("registerAsset"), isAvailable: null, getLabel: null, onPress: null };
obj8[2] = showInstantInviteActionSheet.isAppInstalled(SHARE_APPS_KEY.WHATSAPP);
obj8[3] = function getLabel() {
  const intl = getSystemLocale /* getSystemLocale */.intl;
  return intl.string(getSystemLocale /* getSystemLocale */.t.viazhS);
};
obj8[4] = function onPress(code) {
  let _location;
  let channel;
  let message;
  ({ channel, message, location: _location } = code);
  showInstantInviteActionSheet /* showInstantInviteActionSheet */.trackOptionClicked(code.code, channel, constants.WHATSAPP, _location);
  Linking.openURL(SHARE_URLS[SHARE_APPS_KEY.WHATSAPP](message));
};
items[9] = obj8;
const obj9 = { type: obj.LINE, fullIcon: require("registerAsset"), isAvailable: null, getLabel: null, onPress: null };
obj9[2] = showInstantInviteActionSheet.isAppInstalled(SHARE_APPS_KEY.LINE);
obj9[3] = function getLabel() {
  const intl = getSystemLocale /* getSystemLocale */.intl;
  return intl.string(getSystemLocale /* getSystemLocale */.t.kqgslH);
};
obj9[4] = function onPress(code) {
  let _location;
  let channel;
  let message;
  ({ channel, message, location: _location } = code);
  showInstantInviteActionSheet /* showInstantInviteActionSheet */.trackOptionClicked(code.code, channel, constants.LINE, _location);
  Linking.openURL(SHARE_URLS[SHARE_APPS_KEY.LINE](message));
};
items[10] = obj9;
const items1 = [, ];
[arr2[0], arr2[1]] = items;
const result = set.fileFinishedImporting("modules/instant_invite/native/components/InstantInviteConstants.tsx");

export const ShareItemType = obj;
export const SHARE_ITEMS = items;
export const SHARE_ITEMS_DEFAULT = items1;