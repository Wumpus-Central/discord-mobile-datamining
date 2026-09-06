// === Module 11869: AutomodUserProfileQuarantineAlert ===

// Module 11869 (AutomodUserProfileQuarantineAlert)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import native from "native" /* 1178 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import AutomodPermissionUtils from "AutomodPermissionUtils" /* 4205 */;
import Text_Text from "Text/Text" /* 4556 */;
import common_AlertDefault from "common/Alert" /* 4994 */;
import openUserSettings from "openUserSettings" /* 7382 */;
import _modDef11870 from "module_11870" /* 11870 */;
import _slicedToArray from "module_32" /* 32 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import GuildMemberStore from "GuildMemberStore" /* 2021 */;
import GuildStore from "GuildStore" /* 1979 */;

require = fn;
function ChatBlockedAlert(arg0) {
  ({ title, description, buttonCta, onConfirm } = arg0);
  const tmp = _objectWithoutProperties(arg0, closure_3);
  const tmp2 = closure_18();
  let obj = {};
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
  obj = { style: tmp2.body, children: null };
  obj = { source: _modDef11870, size: native.Icon.Sizes.CUSTOM, style: tmp2.mainIcon };
  const items = [value2(native.Icon, obj), value2(Text_Text.Text, { style: tmp2.title, accessibilityRole: "header", variant: "heading-md/medium", color: "mobile-text-heading-primary", children: title }), value2(Text_Text.Text, { style: tmp2.description, variant: "text-sm/medium", color: "text-default", children: description })];
  obj.children = items;
  obj.children = closure_1_17(View, obj);
  return value2(common_AlertDefault, obj);
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
  const tmp2Result = tmp2(11871);
  [require, tmp8] = _slicedToArray(tmp2(11871).useOpenFixQuarantinedProfileModal({ guildId }), 2);
  if (!tmp8) {
    const intl3 = tmp2(1114).intl;
    stringResult = intl3.string(tmp2(1114).t.FFj5Dt);
  }
  const intl4 = tmp2(1114).intl;
  const string = intl4.string;
  const t = tmp2(1114).t;
  if (tmp8) {
    let stringResult1 = string(t["/PGQf0"]);
  } else {
    stringResult1 = string(t.WikgZ1);
  }
  const obj = {};
  const merged = Object.assign(tmp);
  const intl5 = tmp2(1114).intl;
  obj.title = intl5.format(tmp2(1114).t.kcYdTq, { guildName });
  obj.description = stringResult;
  obj.buttonCta = stringResult1;
  obj.onConfirm = function onConfirm() {
    require();
  };
  return value2(ChatBlockedAlert, obj);
}
function ServerTagAlert(guildName) {
  let obj = {};
  const merged = Object.assign(_objectWithoutProperties(guildName, closure_5));
  const intl = util.intl;
  obj.title = intl.format(util.t.c8TwbL, { guildName: guildName.guildName });
  const intl2 = util.intl;
  obj.description = intl2.string(util.t.EJJLHp);
  const intl3 = util.intl;
  obj.buttonCta = intl3.string(util.t.Viksoo);
  obj.onConfirm = function onConfirm() {
    const obj = { screen: constants.PROFILE_CUSTOMIZATION };
    obj.openUserSettings(obj);
  };
  return value2(ChatBlockedAlert, obj);
}
let closure_3 = ["title", "description", "buttonCta", "onConfirm"];
let closure_4 = ["guildId", "guildName", "automodReason"];
let closure_5 = ["guildName"];
const View = fn(17).View;
const QUARANTINE_USER_ALERT_KEY = fn(11862).QUARANTINE_USER_ALERT_KEY;
const Constants = fn(1074);
({ AnalyticEvents: map1, UserSettingsSections: closure_14 } = Constants);
const GuildMemberFlags = fn(4187).GuildMemberFlags;
const jsxProd = fn(21);
({ jsx: closure_16, jsxs: closure_17 } = jsxProd);
fn(4560);
const createStyles = { wrapper: { padding: 16 }, body: { flexDirection: "column", alignItems: "center" }, mainIcon: null, title: null, description: null };
let size = { width: 48, height: 48, tintColor: nativeDefault.colors.TEXT_FEEDBACK_CRITICAL, marginBottom: 16 };
createStyles.mainIcon = size;
createStyles.title = { marginBottom: 16, textAlign: "center" };
createStyles.description = { textAlign: "center" };
let closure_18 = createStyles.createStyles(createStyles);
size = fn(2);
const result = size.fileFinishedImporting("modules/guild_automod/native/AutomodUserProfileQuarantineAlert.tsx");

export default function AutomodUserProfileQuarantineAlert(guildId) {
  guildId = guildId.guildId;
  let obj = guildId(563);
  const items = [AuthenticationStore];
  const stateFromStores = obj.useStateFromStores(items, () => id.getId());
  let obj1 = guildId(563);
  const items1 = [GuildStore];
  const items2 = [guildId];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => GuildStore.getGuild(guildId), items2);
  let str;
  if (stateFromStores1 != null) {
    str = stateFromStores1.name;
  }
  if (str == null) {
    str = "";
  }
  const items3 = [GuildMemberStore];
  const items4 = [guildId, stateFromStores];
  const stateFromStores2 = guildId(563).useStateFromStores(items3, () => {
    if (null == guildId) {
      return null;
    } else {
      const automodQuarantinedGuildMemberFlags = AutomodPermissionUtils.getAutomodQuarantinedGuildMemberFlags(GuildMemberStore.getMember(tmp, stateFromStores));
      return AutomodPermissionUtils.getAutomodReason(automodQuarantinedGuildMemberFlags);
    }
  }, items4);
  stateFromStores(4992)(() => {
    const obj = { type: QUARANTINE_USER_ALERT_KEY, guild_id: guildId, other_user_id: stateFromStores };
    obj.track(constants.OPEN_MODAL, obj);
  });
  if (stateFromStores2 !== GuildMemberFlags.AUTOMOD_QUARANTINED_BIO) {
    if (stateFromStores2 !== GuildMemberFlags.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME) {
      if (stateFromStores2 === GuildMemberFlags.AUTOMOD_QUARANTINED_SERVER_TAG) {
        obj = { guildName: str };
        const merged = Object.assign(guildId);
        let tmp13 = closure_16(ServerTagAlert, obj);
      } else {
        obj = { automodReason: stateFromStores2, guildName: str };
        const merged1 = Object.assign(guildId);
        tmp13 = closure_16(PerServerProfileAlert, obj);
      }
    }
    return tmp13;
  }
  obj1 = { automodReason: stateFromStores2, guildName: str };
  const merged2 = Object.assign(guildId);
  tmp13 = closure_16(PerServerProfileAlert, obj1);
  const tmpResult = guildId(563);
};