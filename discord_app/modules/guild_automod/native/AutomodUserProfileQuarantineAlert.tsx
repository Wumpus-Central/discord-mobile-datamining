// discord_app/modules/guild_automod/native/AutomodUserProfileQuarantineAlert.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import react2 from "../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import intl6 from "../../../intl/index.native.tsx";
import native from "../../../design/void/native.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import GuildMemberConstants from "../../guild_member/GuildMemberConstants.tsx";
import AutomodPermissionUtils from "../AutomodPermissionUtils.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import AlertDefault from "../../../components_native/common/Alert.tsx";
import Constants2 from "../Constants.tsx";
import AssetRegistryDefault from "../../../../_runtime/11482_AssetRegistry.js";
import AutomodQuarantineUtils from "../AutomodQuarantineUtils.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import _objectWithoutProperties from "../../../../_runtime/metro/00109__objectWithoutProperties.js";
import react from "../../../../_runtime/00019_react.js";
import AuthenticationStore from "../../../stores/AuthenticationStore.tsx";
import GuildMemberStore from "../../../stores/GuildMemberStore.tsx";
import GuildStore from "../../../stores/GuildStore.tsx";
import Constants from "../../../Constants.tsx";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;

let closure_16;
let closure_17;
let closure_19;
let closure_20;
let size;
let closure_3 = ["title", "description", "buttonCta", "onConfirm"];
let closure_4 = ["title", "description", "buttonCta", "onConfirm"];
let closure_5 = ["guildId", "guildName", "automodReason"];
let closure_6 = ["guildId", "guildName", "automodReason"];
let closure_7 = ["guildName"];
let closure_8 = ["guildName"];
const View = react_native.View;
const QUARANTINE_USER_ALERT_KEY = Constants2.QUARANTINE_USER_ALERT_KEY;
({ AnalyticEvents: closure_16, UserSettingsSections: closure_17 } = Constants);
const GuildMemberFlags = GuildMemberConstants.GuildMemberFlags;
({ jsx: closure_19, jsxs: closure_20 } = Fragment);
let obj = {
  wrapper: { padding: 16 },
  body: { flexDirection: "column", alignItems: "center" },
  mainIcon: size,
  title: { marginBottom: 16, textAlign: "center" },
  description: { textAlign: "center" },
};
size = { width: 48, height: 48, tintColor: nativeDefault.colors.TEXT_FEEDBACK_CRITICAL, marginBottom: 16 };
let closure_21 = createStyles.createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_22 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let buttonCta;
      let description;
      let items;
      let onClose;
      let onConfirm;
      let title;
      let tmp13;
      let tmp15;
      let tmp4;
      let tmp5;
      let tmp6;
      let tmp7;
      let tmp8;
      const obj = react2;
      const cResult = obj.c(27);
      if (cResult[0] !== arg0) {
        ({ title, description, buttonCta, onConfirm } = arg0);
        const tmp11 = _objectWithoutProperties(arg0, closure_3);
        cResult[0] = arg0;
        cResult[1] = tmp11;
        cResult[2] = buttonCta;
        cResult[3] = description;
        cResult[4] = onConfirm;
        cResult[5] = title;
        tmp8 = title;
        tmp7 = onConfirm;
        tmp6 = description;
        tmp5 = buttonCta;
        tmp4 = tmp11;
      } else {
        tmp4 = cResult[1];
        tmp5 = cResult[2];
        tmp6 = cResult[3];
        tmp7 = cResult[4];
        tmp8 = cResult[5];
      }
      const tmp12 = closure_21();
      const wrapper = tmp12.wrapper;
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = intl6.intl;
        const stringResult = intl.string(intl6.t["ETE/oC"]);
        cResult[6] = stringResult;
        tmp13 = stringResult;
      } else {
        tmp13 = cResult[6];
      }
      if (tmp4 != null) {
        onClose = tmp4.onClose;
      }
      if (cResult[7] !== tmp12.mainIcon) {
        const obj2 = { source: AssetRegistryDefault, size: native.Icon.Sizes.CUSTOM, style: tmp12.mainIcon };
        const Icon = native.Icon;
        const tmp18 = closure_19(Icon, obj2);
        cResult[7] = tmp12.mainIcon;
        cResult[8] = tmp18;
        tmp15 = tmp18;
      } else {
        tmp15 = cResult[8];
      }
      if (cResult[9] === tmp12.title) {
        let tmp19;
        if (cResult[10] === tmp8) {
          tmp19 = cResult[11];
        }
        if (cResult[12] === tmp6) {
          let tmp21;
          if (cResult[13] === tmp12.description) {
            tmp21 = cResult[14];
          }
          if (cResult[15] === tmp12.body) {
            if (cResult[16] === tmp15) {
              if (cResult[17] === tmp19) {
                let tmp24;
                if (cResult[18] === tmp21) {
                  tmp24 = cResult[19];
                }
                if (cResult[20] === tmp4) {
                  if (cResult[21] === tmp5) {
                    if (cResult[22] === tmp7) {
                      if (cResult[23] === tmp12.wrapper) {
                        if (cResult[24] === onClose) {
                          let tmp28;
                          if (cResult[25] === tmp24) {
                            tmp28 = cResult[26];
                          }
                          return tmp28;
                        }
                      }
                    }
                  }
                }
                const obj3 = {
                  style: wrapper,
                  cancelText: tmp13,
                  onCancel: onClose,
                  confirmText: tmp5,
                  onConfirm: tmp7,
                  children: tmp24,
                };
                const tmp31 = AlertDefault;
                const merged = Object.assign(tmp4);
                const tmp35 = closure_19(tmp31, obj3);
                cResult[20] = tmp4;
                cResult[21] = tmp5;
                cResult[22] = tmp7;
                cResult[23] = tmp12.wrapper;
                cResult[24] = onClose;
                cResult[25] = tmp24;
                cResult[26] = tmp35;
                tmp28 = tmp35;
              }
            }
          }
          const obj4 = { style: tmp12.body, children: items };
          items = [tmp15, tmp19, tmp21];
          const tmp27 = closure_20(View, obj4);
          cResult[15] = tmp12.body;
          cResult[16] = tmp15;
          cResult[17] = tmp19;
          cResult[18] = tmp21;
          cResult[19] = tmp27;
          tmp24 = tmp27;
        }
        const obj5 = { style: tmp12.description, variant: "text-sm/medium", color: "text-default", children: tmp6 };
        const tmp23 = closure_19(Text_Text.Text, obj5);
        cResult[12] = tmp6;
        cResult[13] = tmp12.description;
        cResult[14] = tmp23;
        tmp21 = tmp23;
      }
      const obj6 = {
        style: tmp12.title,
        accessibilityRole: "header",
        variant: "heading-md/medium",
        color: "mobile-text-heading-primary",
        children: tmp8,
      };
      const tmp20 = closure_19(Text_Text.Text, obj6);
      cResult[9] = tmp12.title;
      cResult[10] = tmp8;
      cResult[11] = tmp20;
      tmp19 = tmp20;
    }
  : (arg0) => {
      let buttonCta;
      let description;
      let intl;
      let items;
      let obj2;
      let onClose;
      let onConfirm;
      let title;
      ({ title, description, buttonCta, onConfirm } = arg0);
      const tmp = _objectWithoutProperties(arg0, closure_4);
      const tmp2 = closure_21();
      const obj = {
        style: tmp2.wrapper,
        cancelText: intl.string(intl6.t["ETE/oC"]),
        onCancel: onClose,
        confirmText: buttonCta,
        onConfirm,
        children: closure_20(View, obj2),
      };
      const tmp6 = AlertDefault;
      const merged = Object.assign(tmp);
      intl = intl6.intl;
      onClose = undefined;
      if (tmp != null) {
        onClose = tmp.onClose;
      }
      obj2 = { style: tmp2.body, children: items };
      const obj3 = { source: AssetRegistryDefault, size: native.Icon.Sizes.CUSTOM, style: tmp2.mainIcon };
      const Icon = native.Icon;
      items = [closure_19(Icon, obj3), ,];
      const obj4 = {
        style: tmp2.title,
        accessibilityRole: "header",
        variant: "heading-md/medium",
        color: "mobile-text-heading-primary",
        children: title,
      };
      items[1] = closure_19(Text_Text.Text, obj4);
      const obj5 = { style: tmp2.description, variant: "text-sm/medium", color: "text-default", children: description };
      items[2] = closure_19(Text_Text.Text, obj5);
      return closure_19(tmp6, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_23 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let automodReason;
      let guildId;
      let guildName;
      let tmp11;
      let tmp14;
      let tmp21;
      let tmp4;
      let tmp5;
      let tmp6;
      let tmp7;
      const obj = react2;
      const cResult = obj.c(22);
      if (cResult[0] !== arg0) {
        ({ guildId, guildName, automodReason } = arg0);
        const tmp10 = _objectWithoutProperties(arg0, closure_5);
        cResult[0] = arg0;
        cResult[1] = tmp10;
        cResult[2] = automodReason;
        cResult[3] = guildId;
        cResult[4] = guildName;
        tmp7 = guildName;
        tmp6 = guildId;
        tmp5 = automodReason;
        tmp4 = tmp10;
      } else {
        tmp4 = cResult[1];
        tmp5 = cResult[2];
        tmp6 = cResult[3];
        tmp7 = cResult[4];
      }
      if (cResult[5] !== tmp5) {
        let stringResult;
        if (tmp5 === GuildMemberFlags.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME) {
          const intl2 = intl6.intl;
          stringResult = intl2.string(intl6.t.SpDXI7);
        } else {
          const intl = intl6.intl;
          stringResult = intl.string(intl6.t.TBeZmG);
        }
        cResult[5] = tmp5;
        cResult[6] = stringResult;
        tmp11 = stringResult;
      } else {
        tmp11 = cResult[6];
      }
      if (cResult[7] !== tmp6) {
        const obj2 = { guildId: tmp6 };
        cResult[7] = tmp6;
        cResult[8] = obj2;
        tmp14 = obj2;
      } else {
        tmp14 = cResult[8];
      }
      const tmpResult = AutomodQuarantineUtils;
      const tmp15 = _slicedToArray(tmpResult.useOpenFixQuarantinedProfileModal(tmp14), 2);
      const first = tmp15[0];
      if (!tmp15[1]) {
        let tmp19;
        const _Symbol = Symbol;
        if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
          const intl3 = intl6.intl;
          const stringResult1 = intl3.string(intl6.t.FFj5Dt);
          cResult[9] = stringResult1;
          tmp19 = stringResult1;
        } else {
          tmp19 = cResult[9];
        }
        tmp11 = tmp19;
      }
      if (cResult[10] !== tmp15[1]) {
        let stringResult2;
        const intl4 = intl6.intl;
        const string = intl4.string;
        const t = intl6.t;
        if (tmp15[1]) {
          stringResult2 = string(t["/PGQf0"]);
        } else {
          stringResult2 = string(t.WikgZ1);
        }
        cResult[10] = tmp15[1];
        cResult[11] = stringResult2;
        tmp21 = stringResult2;
      } else {
        tmp21 = cResult[11];
      }
      if (cResult[12] !== first) {
        class U {
          constructor() {
            tmp = closure_0();
            return;
          }
        }
        cResult[12] = first;
        cResult[13] = U;
      } else {
        class U {
          constructor() {
            tmp = closure_0();
            return;
          }
        }
      }
      if (cResult[14] !== tmp7) {
        class U {
          constructor() {
            tmp = closure_0();
            return;
          }
        }
        const obj3 = { guildName: tmp7 };
        cResult[14] = tmp7;
        cResult[15] = obj4.format(intl6.t.kcYdTq, obj3);
        const formatResult = obj4.format(intl6.t.kcYdTq, obj3);
      } else {
        class U {
          constructor() {
            tmp = closure_0();
            return;
          }
        }
      }
      if (cResult[16] === tmp4) {
        class U {
          constructor() {
            tmp = closure_0();
            return;
          }
        }
      }
      const obj5 = { title: tmp24, description: tmp11, buttonCta: tmp21, onConfirm: U };
      const merged = Object.assign(tmp4);
      cResult[16] = tmp4;
      cResult[17] = tmp21;
      cResult[18] = tmp11;
      cResult[19] = U;
      cResult[20] = tmp24;
      cResult[21] = closure_19(closure_22, obj5);
      closure_19(closure_22, obj5);
    }
  : (arg0) => {
      let automodReason;
      let closure_129_0;
      let guildId;
      let guildName;
      let intl5;
      let stringResult;
      let stringResult1;
      let tmp2;
      let tmp8;
      ({ guildId, guildName, automodReason } = arg0);
      const tmp = _objectWithoutProperties(arg0, closure_6);
      if (automodReason === GuildMemberFlags.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME) {
        const intl2 = intl6.intl;
        stringResult = intl2.string(intl6.t.SpDXI7);
        tmp2 = require;
      } else {
        tmp2 = require;
        const intl = intl6.intl;
        stringResult = intl.string(intl6.t.TBeZmG);
      }
      const tmp2Result = tmp2(11483);
      [closure_129_0, tmp8] = tmp2Result.useOpenFixQuarantinedProfileModal({ guildId });
      _slicedToArray(tmp2Result.useOpenFixQuarantinedProfileModal({ guildId }), 2);
      if (!tmp8) {
        const intl3 = tmp2(1126).intl;
        stringResult = intl3.string(tmp2(1126).t.FFj5Dt);
      }
      const intl4 = tmp2(1126).intl;
      const string = intl4.string;
      const t = tmp2(1126).t;
      if (tmp8) {
        stringResult1 = string(t["/PGQf0"]);
      } else {
        stringResult1 = string(t.WikgZ1);
      }
      const obj = {
        title: intl5.format(tmp2(1126).t.kcYdTq, { guildName }),
        description: stringResult,
        buttonCta: stringResult1,
        onConfirm() {
          closure_1_0();
        },
      };
      const merged = Object.assign(tmp);
      intl5 = tmp2(1126).intl;
      return closure_19(closure_22, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_24 = ReactCompilerGating.isReactCompilerEnabled()
  ? (guildName) => {
      let tmp10;
      let tmp12;
      let tmp13;
      let tmp4;
      let tmp5;
      let tmp9;
      let obj = react2;
      const cResult = obj.c(11);
      if (cResult[0] !== guildName) {
        guildName = guildName.guildName;
        const tmp8 = _objectWithoutProperties(guildName, closure_7);
        cResult[0] = guildName;
        cResult[1] = tmp8;
        cResult[2] = guildName;
        tmp5 = guildName;
        tmp4 = tmp8;
      } else {
        tmp4 = cResult[1];
        tmp5 = cResult[2];
      }
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function l() {
          const obj = require("openUserSettings");
          const obj2 = { screen: constants.PROFILE_CUSTOMIZATION };
          obj.openUserSettings(obj2);
        };
        cResult[3] = fn;
        tmp9 = fn;
      } else {
        tmp9 = cResult[3];
      }
      if (cResult[4] !== tmp5) {
        const intl = intl6.intl;
        let obj2 = { guildName: tmp5 };
        const formatResult = intl.format(intl6.t.c8TwbL, obj2);
        cResult[4] = tmp5;
        cResult[5] = formatResult;
        tmp10 = formatResult;
      } else {
        tmp10 = cResult[5];
      }
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        const intl2 = intl6.intl;
        const stringResult = intl2.string(intl6.t.EJJLHp);
        const intl3 = intl6.intl;
        const stringResult1 = intl3.string(intl6.t.Viksoo);
        cResult[6] = stringResult;
        cResult[7] = stringResult1;
        tmp13 = stringResult1;
        tmp12 = stringResult;
      } else {
        tmp12 = cResult[6];
        tmp13 = cResult[7];
      }
      if (cResult[8] === tmp4) {
        let tmp16;
        if (cResult[9] === tmp10) {
          tmp16 = cResult[10];
        }
        return tmp16;
      }
      const obj3 = { title: tmp10, description: tmp12, buttonCta: tmp13, onConfirm: tmp9 };
      const merged = Object.assign(tmp4);
      const tmp18 = closure_19(closure_22, obj3);
      cResult[8] = tmp4;
      cResult[9] = tmp10;
      cResult[10] = tmp18;
      tmp16 = tmp18;
    }
  : (guildName) => {
      let intl;
      let intl2;
      let intl3;
      guildName = guildName.guildName;
      let obj = {
        title: intl.format(intl6.t.c8TwbL, { guildName }),
        description: intl2.string(intl6.t.EJJLHp),
        buttonCta: intl3.string(intl6.t.Viksoo),
        onConfirm() {
          const obj = require("openUserSettings");
          const obj2 = { screen: constants.PROFILE_CUSTOMIZATION };
          obj.openUserSettings(obj2);
        },
      };
      const merged = Object.assign(_objectWithoutProperties(guildName, closure_8));
      intl = intl6.intl;
      intl2 = intl6.intl;
      intl3 = intl6.intl;
      return closure_19(closure_22, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (guildId) => {
      let id;
      let tmp10;
      let tmp11;
      let tmp13;
      let tmp4;
      let tmp5;
      let tmp8;
      const tmp = guildId;
      let obj = guildId(576);
      const cResult = obj.c(25);
      guildId = guildId.guildId;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [AuthenticationStore];
        const fn = function o() {
          return id.getId();
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp4 = items;
        tmp5 = fn;
      } else {
        [tmp4, tmp5] = cResult;
      }
      const tmpResult = tmp(573);
      const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [GuildStore];
        cResult[2] = items1;
        tmp8 = items1;
      } else {
        tmp8 = cResult[2];
      }
      if (cResult[3] !== guildId) {
        const fn2 = function c() {
          return GuildStore.getGuild(guildId);
        };
        const items2 = [guildId];
        cResult[3] = guildId;
        cResult[4] = fn2;
        cResult[5] = items2;
        tmp11 = items2;
        tmp10 = fn2;
      } else {
        tmp10 = cResult[4];
        tmp11 = cResult[5];
      }
      const tmpResult3 = tmp(573);
      const stateFromStores1 = tmpResult3.useStateFromStores(tmp8, tmp10, tmp11);
      let str;
      if (stateFromStores1 != null) {
        str = stateFromStores1.name;
      }
      if (str == null) {
        str = "";
      }
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        const items3 = [GuildMemberStore];
        cResult[6] = items3;
        tmp13 = items3;
      } else {
        tmp13 = cResult[6];
      }
      if (cResult[7] === guildId) {
        let tmp15;
        let tmp16;
        if (cResult[8] === stateFromStores) {
          tmp15 = cResult[9];
          tmp16 = cResult[10];
        }
        const tmpResult4 = tmp(573);
        const stateFromStores2 = tmpResult4.useStateFromStores(tmp13, tmp15, tmp16);
        if (cResult[11] === guildId) {
          let tmp18;
          let tmp22;
          if (cResult[12] === stateFromStores) {
            tmp18 = cResult[13];
          }
          stateFromStores(5590)(tmp18);
          if (stateFromStores2 !== GuildMemberFlags.AUTOMOD_QUARANTINED_BIO) {
            if (stateFromStores2 !== GuildMemberFlags.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME) {
              if (stateFromStores2 === GuildMemberFlags.AUTOMOD_QUARANTINED_SERVER_TAG) {
                if (cResult[18] === str) {
                  let tmp29;
                  if (cResult[19] === guildId) {
                    tmp29 = cResult[20];
                  }
                  tmp22 = tmp29;
                }
                let obj2 = { guildName: str };
                const merged = Object.assign(guildId);
                const tmp35 = closure_19(closure_24, obj2);
                cResult[18] = str;
                cResult[19] = guildId;
                cResult[20] = tmp35;
                tmp29 = tmp35;
              } else {
                if (cResult[21] === stateFromStores2) {
                  if (cResult[22] === str) {
                    if (cResult[23] === guildId) {
                      tmp22 = cResult[24];
                    }
                  }
                }
                const obj3 = { automodReason: stateFromStores2, guildName: str };
                const merged1 = Object.assign(guildId);
                const tmp28 = closure_19(closure_23, obj3);
                cResult[21] = stateFromStores2;
                cResult[22] = str;
                cResult[23] = guildId;
                cResult[24] = tmp28;
                tmp22 = tmp28;
              }
            }
            return tmp22;
          }
          if (cResult[14] === stateFromStores2) {
            if (cResult[15] === str) {
              let tmp36;
              if (cResult[16] === guildId) {
                tmp36 = cResult[17];
              }
              tmp22 = tmp36;
            }
          }
          const obj4 = { automodReason: stateFromStores2, guildName: str };
          const merged2 = Object.assign(guildId);
          const tmp42 = closure_19(closure_23, obj4);
          cResult[14] = stateFromStores2;
          cResult[15] = str;
          cResult[16] = guildId;
          cResult[17] = tmp42;
          tmp36 = tmp42;
        }
        const fn3 = function y() {
          const obj = AnalyticsUtilsDefault;
          const obj2 = { type: QUARANTINE_USER_ALERT_KEY, guild_id: guildId, other_user_id: stateFromStores };
          obj.track(constants.OPEN_MODAL, obj2);
        };
        cResult[11] = guildId;
        cResult[12] = stateFromStores;
        cResult[13] = fn3;
        tmp18 = fn3;
      }
      class R {
        constructor() {
          if (null == guildId) {
            return null;
          } else {
            const obj = AutomodPermissionUtils;
            const automodQuarantinedGuildMemberFlags = obj.getAutomodQuarantinedGuildMemberFlags(
              GuildMemberStore.getMember(tmp, stateFromStores),
            );
            const obj2 = AutomodPermissionUtils;
            return obj2.getAutomodReason(automodQuarantinedGuildMemberFlags);
          }
        }
      }
      const items4 = [guildId, stateFromStores];
      cResult[7] = guildId;
      cResult[8] = stateFromStores;
      cResult[9] = R;
      cResult[10] = items4;
      tmp16 = items4;
      tmp15 = R;
    }
  : (guildId) => {
      let id;
      guildId = guildId.guildId;
      const tmp = guildId;
      let obj = guildId(573);
      const items = [AuthenticationStore];
      const stateFromStores = obj.useStateFromStores(items, () => id.getId());
      let obj2 = guildId(573);
      const items1 = [GuildStore];
      const items2 = [guildId];
      const stateFromStores1 = obj2.useStateFromStores(items1, () => GuildStore.getGuild(guildId), items2);
      let str;
      if (stateFromStores1 != null) {
        str = stateFromStores1.name;
      }
      if (str == null) {
        str = "";
      }
      const items3 = [GuildMemberStore];
      const items4 = [guildId, stateFromStores];
      const tmpResult = tmp(573);
      const stateFromStores2 = tmpResult.useStateFromStores(
        items3,
        () => {
          if (null == guildId) {
            return null;
          } else {
            const obj = AutomodPermissionUtils;
            const automodQuarantinedGuildMemberFlags = obj.getAutomodQuarantinedGuildMemberFlags(
              GuildMemberStore.getMember(tmp, stateFromStores),
            );
            const obj2 = AutomodPermissionUtils;
            return obj2.getAutomodReason(automodQuarantinedGuildMemberFlags);
          }
        },
        items4,
      );
      stateFromStores(5590)(() => {
        const obj = AnalyticsUtilsDefault;
        const obj2 = { type: QUARANTINE_USER_ALERT_KEY, guild_id: guildId, other_user_id: stateFromStores };
        obj.track(constants.OPEN_MODAL, obj2);
      });
      if (stateFromStores2 !== GuildMemberFlags.AUTOMOD_QUARANTINED_BIO) {
        let tmp13;
        if (stateFromStores2 !== GuildMemberFlags.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME) {
          if (stateFromStores2 === GuildMemberFlags.AUTOMOD_QUARANTINED_SERVER_TAG) {
            const obj3 = { guildName: str };
            const merged = Object.assign(guildId);
            tmp13 = closure_19(closure_24, obj3);
          } else {
            const obj4 = { automodReason: stateFromStores2, guildName: str };
            const merged1 = Object.assign(guildId);
            tmp13 = closure_19(closure_23, obj4);
          }
        }
        return tmp13;
      }
      const obj5 = { automodReason: stateFromStores2, guildName: str };
      const merged2 = Object.assign(guildId);
      tmp13 = closure_19(closure_23, obj5);
    };
size = size_mod;
const result = size.fileFinishedImporting("modules/guild_automod/native/AutomodUserProfileQuarantineAlert.tsx");

export default tmp5;
