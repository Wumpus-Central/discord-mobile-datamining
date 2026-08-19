// === Module 11049: ChatBlockedAlert ===

// Module 11049 (ChatBlockedAlert)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import Button from "Button" /* 1297 */;
import Text from "Text" /* 4734 */;
import componentDidMountDefault from "componentDidMount" /* 4763 */;
import registerAssetDefault from "registerAsset" /* 11050 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import { View } from "get ActivityIndicator" /* 17 */;
import fetchFingerprint from "fetchFingerprint" /* 1218 */;
import trackCommunicationDisabled from "trackCommunicationDisabled" /* 1990 */;
import createGuildRecordFromRust from "createGuildRecordFromRust" /* 1910 */;
import { QUARANTINE_USER_ALERT_KEY } from "AutomodEventType" /* 11042 */;
import ME from "ME" /* 676 */;
import { GuildMemberFlags } from "GuildMemberFlags" /* 4009 */;
import jsxProd from "jsxProd" /* 21 */;
import "createCacheKey";

require = fn;
function ChatBlockedAlert(arg0) {
  ({ title, description, buttonCta, onConfirm } = arg0);
  const tmp = callback2(arg0, closure_3);
  const tmp2 = callback5();
  let obj = {};
  const merged = Object.assign(tmp);
  obj.style = tmp2.wrapper;
  const intl = getSystemLocale.intl;
  obj.cancelText = intl.string(getSystemLocale.t["ETE/oC"]);
  let onClose;
  if (tmp != null) {
    onClose = tmp.onClose;
  }
  obj.onCancel = onClose;
  obj.confirmText = buttonCta;
  obj.onConfirm = onConfirm;
  obj = { source: registerAssetDefault, size: Button.Icon.Sizes.CUSTOM, style: tmp2.mainIcon };
  const items = [callback(Button.Icon, obj), callback(Text.Text, { style: tmp2.title, accessibilityRole: "header", variant: "heading-md/medium", color: "mobile-text-heading-primary", children: title }), callback(Text.Text, { style: tmp2.description, variant: "text-sm/medium", color: "text-default", children: description })];
  obj[1] = items;
  obj.children = callback4(View, obj);
  return callback(componentDidMountDefault, obj);
}
function PerServerProfileAlert(arg0) {
  ({ guildId, guildName, automodReason } = arg0);
  if (automodReason === GuildMemberFlags.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME) {
    const intl2 = getSystemLocale.intl;
    let stringResult = intl2.string(getSystemLocale.t.SpDXI7);
    let tmp2 = require;
  } else {
    tmp2 = require;
    const intl = getSystemLocale.intl;
    stringResult = intl.string(getSystemLocale.t.TBeZmG);
  }
  const tmp = callback2(arg0, closure_4);
  const tmp2Result = tmp2(11051);
  [require, tmp8] = callback(tmp2(11051).useOpenFixQuarantinedProfileModal({ guildId }), 2);
  if (!tmp8) {
    const intl3 = tmp2(1236).intl;
    stringResult = intl3.string(tmp2(1236).t.FFj5Dt);
  }
  const intl4 = tmp2(1236).intl;
  const string = intl4.string;
  const t = tmp2(1236).t;
  if (tmp8) {
    let stringResult1 = string(t["/PGQf0"]);
  } else {
    stringResult1 = string(t.WikgZ1);
  }
  const obj = {};
  const merged = Object.assign(tmp);
  const intl5 = tmp2(1236).intl;
  obj.title = intl5.format(tmp2(1236).t.kcYdTq, { guildName });
  obj.description = stringResult;
  obj.buttonCta = stringResult1;
  obj.onConfirm = function onConfirm() {
    callback();
  };
  return callback3(ChatBlockedAlert, obj);
}
function ServerTagAlert(guildName) {
  let obj = {};
  const merged = Object.assign(callback2(guildName, closure_5));
  const intl = getSystemLocale.intl;
  obj.title = intl.format(getSystemLocale.t.c8TwbL, { guildName: guildName.guildName });
  const intl2 = getSystemLocale.intl;
  obj.description = intl2.string(getSystemLocale.t.EJJLHp);
  const intl3 = getSystemLocale.intl;
  obj.buttonCta = intl3.string(getSystemLocale.t.Viksoo);
  obj.onConfirm = function onConfirm() {
    callback(table[19]);
    const obj = { screen: constants.PROFILE_CUSTOMIZATION };
    obj.openUserSettings(obj);
  };
  return callback3(ChatBlockedAlert, obj);
}
let closure_3 = ["title", "description", "buttonCta", "onConfirm"];
let closure_4 = ["guildId", "guildName", "automodReason"];
let closure_5 = ["guildName"];
noopAll;
({ AnalyticEvents: map1, UserSettingsSections: closure_14 } = ME);
({ jsx: closure_16, jsxs: closure_17 } = jsxProd);
const createCacheKey = { width: 48, height: 48, tintColor: ThemesDefault.colors.TEXT_FEEDBACK_CRITICAL, marginBottom: 16 };
createCacheKey[2] = createCacheKey;
createCacheKey[3] = { marginBottom: 16, textAlign: "center" };
createCacheKey[4] = { textAlign: "center" };
let closure_18 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/guild_automod/native/AutomodUserProfileQuarantineAlert.tsx");

export default function AutomodUserProfileQuarantineAlert(guildId) {
  guildId = guildId.guildId;
  let obj = guildId(647);
  const items = [closure_9];
  const stateFromStores = obj.useStateFromStores(items, () => id.getId());
  obj1 = guildId(647);
  const items1 = [closure_11];
  const items2 = [guildId];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => closure_1_11.getGuild(guildId), items2);
  let str;
  if (stateFromStores1 != null) {
    str = stateFromStores1.name;
  }
  if (str == null) {
    str = "";
  }
  const items3 = [closure_10];
  const items4 = [guildId, stateFromStores];
  const stateFromStores2 = guildId(647).useStateFromStores(items3, () => {
    if (null == guildId) {
      return null;
    } else {
      const automodQuarantinedGuildMemberFlags = guildId(dependencyMap[21]).getAutomodQuarantinedGuildMemberFlags(closure_1_10.getMember(tmp, stateFromStores));
      const obj = guildId(dependencyMap[21]);
      return guildId(dependencyMap[21]).getAutomodReason(automodQuarantinedGuildMemberFlags);
    }
  }, items4);
  stateFromStores(4761)(() => {
    stateFromStores(dependencyMap[23]);
    const obj = { type: QUARANTINE_USER_ALERT_KEY, guild_id: guildId, other_user_id: stateFromStores };
    obj.track(closure_1_13.OPEN_MODAL, obj);
  });
  if (stateFromStores2 !== GuildMemberFlags.AUTOMOD_QUARANTINED_BIO) {
    if (stateFromStores2 !== GuildMemberFlags.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME) {
      if (stateFromStores2 === GuildMemberFlags.AUTOMOD_QUARANTINED_SERVER_TAG) {
        obj = { guildName: null };
        obj[0] = str;
        const merged = Object.assign(guildId);
        let tmp13 = callback3(ServerTagAlert, obj);
      } else {
        obj = { automodReason: null, guildName: null };
        obj[0] = stateFromStores2;
        obj[1] = str;
        const merged1 = Object.assign(guildId);
        tmp13 = callback3(PerServerProfileAlert, obj);
      }
    }
    return tmp13;
  }
  obj1 = { automodReason: stateFromStores2, guildName: str };
  const merged2 = Object.assign(guildId);
  tmp13 = callback3(PerServerProfileAlert, obj1);
  const tmpResult = guildId(647);
};