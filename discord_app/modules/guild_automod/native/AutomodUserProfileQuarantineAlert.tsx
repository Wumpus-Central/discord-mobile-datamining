// === Module 12004: AutomodUserProfileQuarantineAlert ===

// Module 12004 (AutomodUserProfileQuarantineAlert)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import native from "native" /* 1177 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import AutomodPermissionUtils from "AutomodPermissionUtils" /* 4284 */;
import Text_Text from "Text/Text" /* 4635 */;
import common_AlertDefault from "common/Alert" /* 5078 */;
import openUserSettings from "openUserSettings" /* 7489 */;
import _modDef12005 from "module_12005" /* 12005 */;
import _slicedToArray from "module_32" /* 32 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import GuildMemberStore from "GuildMemberStore" /* 2022 */;
import GuildStore from "GuildStore" /* 1980 */;

require = fn;
function ChatBlockedAlert(arg0) {
  ({ title, description, buttonCta, onConfirm } = arg0);
  const tmp = _objectWithoutProperties(arg0, closure_3);
  const tmp2 = closure_18();
  const obj = {};
  const merged = Object.assign(tmp);
  obj.style = tmp2.wrapper;
  const intl = util.intl;
  obj.cancelText = intl.string(util.t["ETE/oC"]);
  let onClose;
  if (tmp != null) {
    onClose = tmp.onClose;
  }
  obj.onCancel = onClose;
  obj.confirmText = buttonCta;
  obj.onConfirm = onConfirm;
  const obj2 = { style: tmp2.body, children: null };
  const tmp6 = common_AlertDefault;
  const items = [value2(native.Icon, { source: _modDef12005, size: native.Icon.Sizes.CUSTOM, style: tmp2.mainIcon }), value2(Text_Text.Text, { style: tmp2.title, accessibilityRole: "header", variant: "heading-md/medium", color: "mobile-text-heading-primary", children: title }), value2(Text_Text.Text, { style: tmp2.description, variant: "text-sm/medium", color: "text-default", children: description })];
  obj2.children = items;
  obj.children = closure_1_17(View, obj2);
  return value2(tmp6, obj);
}
function PerServerProfileAlert(arg0) {
  ({ guildId, guildName, automodReason } = arg0);
  if (automodReason === GuildMemberFlags.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME) {
    const intl2 = util.intl;
    let stringResult = intl2.string(util.t.SpDXI7);
    let tmp2 = require;
  } else {
    tmp2 = require;
    const intl = util.intl;
    stringResult = intl.string(util.t.TBeZmG);
  }
  const tmp = _objectWithoutProperties(arg0, closure_4);
  const tmp2Result = tmp2(12006);
  [require, tmp8] = tmp2(12006).useOpenFixQuarantinedProfileModal({ guildId });
  if (!tmp8) {
    const intl3 = tmp2(1115).intl;
    stringResult = intl3.string(tmp2(1115).t.FFj5Dt);
  }
  const intl4 = tmp2(1115).intl;
  const string = intl4.string;
  const t = tmp2(1115).t;
  if (tmp8) {
    let stringResult1 = string(t["/PGQf0"]);
  } else {
    stringResult1 = string(t.WikgZ1);
  }
  const obj = {};
  const merged = Object.assign(tmp);
  const intl5 = tmp2(1115).intl;
  obj.title = intl5.format(tmp2(1115).t.kcYdTq, { guildName });
  obj.description = stringResult;
  obj.buttonCta = stringResult1;
  obj.onConfirm = function onConfirm() {
    require();
  };
  return value2(ChatBlockedAlert, obj);
}
function ServerTagAlert(guildName) {
  const obj = {};
  const merged = Object.assign(_objectWithoutProperties(guildName, closure_5));
  const intl = util.intl;
  obj.title = intl.format(util.t.c8TwbL, { guildName: guildName.guildName });
  const intl2 = util.intl;
  obj.description = intl2.string(util.t.EJJLHp);
  const intl3 = util.intl;
  obj.buttonCta = intl3.string(util.t.Viksoo);
  obj.onConfirm = function onConfirm() {
    openUserSettings.openUserSettings({ screen: constants.PROFILE_CUSTOMIZATION });
  };
  return value2(ChatBlockedAlert, obj);
}
let closure_3 = ["title", "description", "buttonCta", "onConfirm"];
let closure_4 = ["guildId", "guildName", "automodReason"];
let closure_5 = ["guildName"];
const View = fn(17).View;
const QUARANTINE_USER_ALERT_KEY = fn(11997).QUARANTINE_USER_ALERT_KEY;
const Constants = fn(1074);
({ AnalyticEvents: map1, UserSettingsSections: closure_14 } = Constants);
const GuildMemberFlags = fn(4265).GuildMemberFlags;
const jsxProd = fn(21);
({ jsx: closure_16, jsxs: closure_17 } = jsxProd);
const createStyles = fn(4639);
let obj2 = { wrapper: { padding: 16 }, body: { flexDirection: "column", alignItems: "center" }, mainIcon: null, title: null, description: null };
let size = { width: 48, height: 48, tintColor: nativeDefault.colors.TEXT_FEEDBACK_CRITICAL, marginBottom: 16 };
obj2.mainIcon = size;
obj2.title = { marginBottom: 16, textAlign: "center" };
obj2.description = { textAlign: "center" };
let closure_18 = createStyles.createStyles(obj2);
size = fn(2);
const result = size.fileFinishedImporting("modules/guild_automod/native/AutomodUserProfileQuarantineAlert.tsx");

export default function AutomodUserProfileQuarantineAlert(guildId) {
  guildId = guildId.guildId;
  const items = [AuthenticationStore];
  const stateFromStores = guildId(563).useStateFromStores(items, () => id.getId());
  let obj = guildId(563);
  const tmp = guildId;
  const items1 = [GuildStore];
  const items2 = [guildId];
  const stateFromStores1 = guildId(563).useStateFromStores(items1, () => GuildStore.getGuild(guildId), items2);
  let str;
  if (stateFromStores1 != null) {
    str = stateFromStores1.name;
  }
  if (str == null) {
    str = "";
  }
  const obj2 = guildId(563);
  const items3 = [GuildMemberStore];
  const items4 = [guildId, stateFromStores];
  const stateFromStores2 = tmp(563).useStateFromStores(items3, () => {
    if (null == guildId) {
      return null;
    } else {
      const automodQuarantinedGuildMemberFlags = AutomodPermissionUtils.getAutomodQuarantinedGuildMemberFlags(GuildMemberStore.getMember(tmp, stateFromStores));
      return AutomodPermissionUtils.getAutomodReason(automodQuarantinedGuildMemberFlags);
    }
  }, items4);
  stateFromStores(5076)(() => {
    AnalyticsUtilsDefault.track(constants.OPEN_MODAL, { type: QUARANTINE_USER_ALERT_KEY, guild_id: guildId, other_user_id: stateFromStores });
  });
  if (stateFromStores2 !== GuildMemberFlags.AUTOMOD_QUARANTINED_BIO) {
    if (stateFromStores2 !== GuildMemberFlags.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME) {
      if (stateFromStores2 === GuildMemberFlags.AUTOMOD_QUARANTINED_SERVER_TAG) {
        const obj3 = { guildName: str };
        const merged = Object.assign(guildId);
        let tmp13 = closure_16(ServerTagAlert, obj3);
      } else {
        const obj4 = { automodReason: stateFromStores2, guildName: str };
        const merged1 = Object.assign(guildId);
        tmp13 = closure_16(PerServerProfileAlert, obj4);
      }
    }
    return tmp13;
  }
  const merged2 = Object.assign(guildId);
  tmp13 = closure_16(PerServerProfileAlert, { automodReason: stateFromStores2, guildName: str });
  const obj5 = { automodReason: stateFromStores2, guildName: str };
  const tmpResult = tmp(563);
};