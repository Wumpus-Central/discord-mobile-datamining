// === Module 11933: InviteErrorBase ===

// Module 11933 (InviteErrorBase)
import "set";
import get_ActivityIndicator from "GuildIconSizes";
import ME from "ME";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c10;
let c3;
let c4;
let c5;
let c9;
let closure_6;
let error;
let metroImportAll;
const require = arg1;
function InviteErrorBase(invite) {
  let inviteError;
  let require;
  ({ onPressClose: require, inviteError } = invite);
  const tmp = createCacheKey();
  let obj = require(4101) /* AccessibilityAnnouncer */;
  const tmp4 = importDefault;
  const tmp4Result = importDefault(obj.isThemeDark(importDefault(4191)()) ? 11934 : 11935);
  let code;
  if (inviteError != null) {
    code = inviteError.code;
  }
  const descriptiveInviteError = require(11936) /* getDescriptiveInviteError */.getDescriptiveInviteError(code);
  if (invite.invite.state === constants3.BANNED) {
    const intl2 = tmp2(1236).intl;
    let stringResult = intl2.string(tmp2(1236).t["GzD/aa"]);
  } else {
    stringResult = undefined;
    if (descriptiveInviteError != null) {
      stringResult = descriptiveInviteError.description;
    }
    if (stringResult == null) {
      const intl = tmp2(1236).intl;
      stringResult = intl.string(tmp2(1236).t.FWkU6P);
    }
  }
  obj = { style: tmp.expiredImage, source: tmp4Result };
  const items = [callback(closure_3, obj), , , ];
  obj = { style: tmp.expiredTitle, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
  let title;
  if (descriptiveInviteError != null) {
    title = descriptiveInviteError.title;
  }
  if (title == null) {
    const intl3 = tmp2(1236).intl;
    title = intl3.string(tmp2(1236).t.u9zxnX);
  }
  const obj1 = { children: null };
  obj[3] = title;
  function handlePressClose() {
    callback();
  }
  items[1] = callback(require(4251) /* Text */.Text, obj);
  items[2] = callback(require(4251) /* Text */.Text, { style: tmp.expiredBody, variant: "text-sm/medium", color: "text-default", children: stringResult });
  const obj3 = { variant: "primary", size: "lg", text: null, onPress: null };
  const intl4 = tmp2(1236).intl;
  obj3[2] = intl4.string(require(1236) /* getSystemLocale */.t.wcqOoF);
  obj3[3] = handlePressClose;
  items[3] = callback(require(4666) /* Button */.Button, obj3);
  obj1[0] = items;
  return closure_10(closure_9, obj1);
}
function InviteDisabledError(onPressClose) {
  onPressClose = onPressClose.onPressClose;
  const tmp = createCacheKey();
  const guild = onPressClose.invite.guild;
  if (null == guild) {
    return null;
  } else {
    function handlePressClose() {
      onPressClose();
    }
    let obj = importDefault(1416);
    obj = { id: null, icon: null, size: 64, canAnimate: false };
    ({ id: obj2[0], icon: obj2[1] } = guild);
    obj = { children: null };
    const obj1 = { style: null, children: null };
    obj1[0] = tmp.disabledView;
    const guildIconURL = obj.getGuildIconURL(obj);
    const obj2 = { style: null, source: null };
    obj2[0] = tmp.disabledPauseIcon;
    obj2[1] = importDefault(11937);
    const items = [callback(onPressClose(1297).Icon, obj2), ];
    const obj3 = { style: null, icon: null, size: null };
    obj3[0] = tmp.guildIcon;
    obj3[1] = guildIconURL;
    obj3[2] = onPressClose(5632).GuildIconSizes.XLARGE;
    items[1] = callback(importDefault(5632), obj3);
    obj1[1] = items;
    const items1 = [callback2(closure_4, obj1), , , ];
    const obj4 = { style: null, variant: "heading-xl/semibold", color: "text-feedback-critical", children: null };
    obj4[0] = tmp.disabledTitle;
    const intl = onPressClose(1236).intl;
    obj4[3] = intl.string(onPressClose(1236).t.jlLX2Z);
    items1[1] = callback(onPressClose(4251).Text, obj4);
    const obj5 = { style: null, variant: "text-md/normal", color: "text-default", children: null };
    obj5[0] = tmp.disabledBody;
    const intl2 = onPressClose(1236).intl;
    const obj6 = { articleLink: null };
    const tmp10 = importDefault(5632);
    obj6[0] = importDefault(1945).getArticleURL(constants2.INVITE_DISABLED);
    obj5[3] = intl2.format(onPressClose(1236).t.RXSeLl, obj6);
    items1[2] = callback(onPressClose(4251).Text, obj5);
    const obj7 = { variant: "primary", size: "lg", text: null, onPress: null };
    const intl3 = onPressClose(1236).intl;
    obj7[2] = intl3.string(onPressClose(1236).t["yD/zkn"]);
    obj7[3] = handlePressClose;
    items1[3] = callback(onPressClose(4666).Button, obj7);
    obj[0] = items1;
    return callback2(closure_9, obj);
  }
}
({ Image: c3, View: c4 } = get_ActivityIndicator);
({ AbortCodes: c5, HelpdeskArticles: closure_6, InviteStates: error } = ME);
({ jsx: metroImportAll, Fragment: c9, jsxs: c10 } = jsxProd);
createCacheKey = { expiredImage: { marginTop: 32, marginBottom: 32 }, expiredTitle: { marginBottom: 8, backgroundColor: "transparent", textAlign: "center" }, expiredBody: { backgroundColor: "transparent", marginBottom: 24 }, disabledView: { justifyContent: "center", alignItems: "center" }, disabledPauseIcon: null, guildIcon: null, disabledTitle: null, disabledBody: null };
createCacheKey = { position: "absolute", alignSelf: "center", tintColor: require("Themes").colors.WHITE, width: 42, height: 42 };
createCacheKey[4] = createCacheKey;
createCacheKey[5] = { borderRadius: require("Themes").radii.lg, opacity: 0.2, zIndex: -999 };
createCacheKey[6] = { marginTop: 16, marginBottom: 8, textAlign: "center" };
createCacheKey[7] = { textAlign: "center", marginBottom: 16 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj1 = { borderRadius: require("Themes").radii.lg, opacity: 0.2, zIndex: -999 };
const result = require("ME").fileFinishedImporting("modules/accept_invite/native/InviteError.tsx");

export default function InviteError(inviteError) {
  inviteError = inviteError.inviteError;
  if (null == inviteError) {
    let obj = {};
    const merged = Object.assign(inviteError);
    let tmp7 = callback(InviteErrorBase, obj);
  } else if (inviteError.code === constants.INVITES_DISABLED) {
    obj = {};
    const merged1 = Object.assign(inviteError);
    tmp7 = callback(InviteDisabledError, obj);
  } else {
    obj = {};
    const merged2 = Object.assign(inviteError);
    tmp7 = callback(InviteErrorBase, obj);
  }
  return tmp7;
};