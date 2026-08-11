// discord_app/modules/guild_automod/native/AutomodUserProfileQuarantineAlert.tsx
import _slicedToArray from "_slicedToArray";
import _objectWithoutProperties from "_objectWithoutProperties";
import "openUserSettings";
import { View } from "Text";
import fetchFingerprint from "fetchFingerprint";
import trackCommunicationDisabled from "trackCommunicationDisabled";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import { QUARANTINE_USER_ALERT_KEY } from "AutomodEventType";
import ME from "ME";
import { GuildMemberFlags } from "GuildMemberFlags";
import jsxProd from "GuildMemberFlags";
import createCacheKey from "createCacheKey";
import { registerAsset } from "../../../../_runtime/11275_registerAsset.js";
import { componentDidMount } from "../../../components_native/common/Alert.tsx";
import { Text } from "../../../design/components/Text/native/Text.tsx";
import { Button } from "../../../design/void/native.tsx";
import { getSystemLocale } from "../../../intl/index.native.tsx";

let closure_14;
let closure_16;
let closure_17;
let map1;
const require = arg1;
function ChatBlockedAlert(arg0) {
  let buttonCta;
  let description;
  let onConfirm;
  let title;
  ({ title, description, buttonCta, onConfirm } = arg0);
  const tmp = callback2(arg0, closure_3);
  const tmp2 = createCacheKey();
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
  obj = { style: tmp2.body, children: null };
  obj = { source: null, size: null, style: null };
  obj[0] = registerAsset;
  obj[1] = Button.Icon.Sizes.CUSTOM;
  obj[2] = tmp2.mainIcon;
  const items = [closure_16(Button.Icon, obj), closure_16(Text.Text, { style: tmp2.title, accessibilityRole: "header", variant: "heading-md/medium", color: "mobile-text-heading-primary", children: title }), closure_16(Text.Text, { style: tmp2.description, variant: "text-sm/medium", color: "text-default", children: description })];
  obj[1] = items;
  obj.children = callback4(View, obj);
  return closure_16(componentDidMount, obj);
}
function PerServerProfileAlert(arg0) {
  let automodReason;
  let guildId;
  let guildName;
  let require;
  let tmp8;
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
  const tmp2Result = tmp2(11276);
  [require, tmp8] = callback(tmp2(11276).useOpenFixQuarantinedProfileModal({ guildId }), 2);
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
    let obj = callback(table[19]);
    obj = { screen: constants.PROFILE_CUSTOMIZATION };
    obj.openUserSettings(obj);
  };
  return callback3(ChatBlockedAlert, obj);
}
let closure_3 = ["title", "description", "buttonCta", "onConfirm"];
let closure_4 = ["guildId", "guildName", "automodReason"];
let closure_5 = ["guildName"];
({ AnalyticEvents: map1, UserSettingsSections: closure_14 } = ME);
({ jsx: closure_16, jsxs: closure_17 } = jsxProd);
createCacheKey = { wrapper: { padding: 16 }, body: { flexDirection: "column", alignItems: "center" }, mainIcon: null, title: null, description: null };
createCacheKey = { width: 48, height: 48, tintColor: require("Themes").colors.TEXT_FEEDBACK_CRITICAL, marginBottom: 16 };
createCacheKey[2] = createCacheKey;
createCacheKey[3] = { marginBottom: 16, textAlign: "center" };
createCacheKey[4] = { textAlign: "center" };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("noop").fileFinishedImporting("modules/guild_automod/native/AutomodUserProfileQuarantineAlert.tsx");

export default function AutomodUserProfileQuarantineAlert(guildId) {
  guildId = guildId.guildId;
  let obj = guildId(647);
  const items = [fetchFingerprint];
  const stateFromStores = obj.useStateFromStores(items, () => id.getId());
  let obj1 = guildId(647);
  const items1 = [createGuildRecordFromRust];
  const items2 = [guildId];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => outer1_11.getGuild(guildId), items2);
  let str;
  if (stateFromStores1 != null) {
    str = stateFromStores1.name;
  }
  if (str == null) {
    str = "";
  }
  const items3 = [trackCommunicationDisabled];
  const items4 = [guildId, stateFromStores];
  const stateFromStores2 = guildId(647).useStateFromStores(items3, () => {
    if (null == guildId) {
      return null;
    } else {
      const automodQuarantinedGuildMemberFlags = guildId(outer1_2[21]).getAutomodQuarantinedGuildMemberFlags(outer1_10.getMember(tmp, stateFromStores));
      const obj = guildId(outer1_2[21]);
      return guildId(outer1_2[21]).getAutomodReason(automodQuarantinedGuildMemberFlags);
    }
  }, items4);
  stateFromStores(4730)(() => {
    let obj = stateFromStores(outer1_2[23]);
    obj = { type: outer1_12, guild_id: guildId, other_user_id: stateFromStores };
    obj.track(outer1_13.OPEN_MODAL, obj);
  });
  if (stateFromStores2 !== GuildMemberFlags.AUTOMOD_QUARANTINED_BIO) {
    if (stateFromStores2 !== tmp7.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME) {
      if (stateFromStores2 === tmp7.AUTOMOD_QUARANTINED_SERVER_TAG) {
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
};