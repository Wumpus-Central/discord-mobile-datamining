// discord_app/modules/guild_automod/native/AutomodUserProfileQuarantineAlert.tsx
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import native from "../../../design/void/native.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import AutomodPermissionUtils from "../AutomodPermissionUtils.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import common_AlertDefault from "../../../components_native/common/Alert.tsx";
import _modDef11495 from "../../../../_runtime/metro/11495__.js";
import AutomodQuarantineUtils from "../AutomodQuarantineUtils.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import _objectWithoutProperties from "../../../../_runtime/metro/00109__objectWithoutProperties.js";
import noop from "../../../../_runtime/metro/00019__.js";
import AuthenticationStore from "../../../stores/AuthenticationStore.tsx";
import GuildMemberStore from "../../../stores/GuildMemberStore.tsx";
import GuildStore from "../../../stores/GuildStore.tsx";

require = fn;
let closure_3 = ["title", "description", "buttonCta", "onConfirm"];
let closure_4 = ["title", "description", "buttonCta", "onConfirm"];
let closure_5 = ["guildId", "guildName", "automodReason"];
let closure_6 = ["guildId", "guildName", "automodReason"];
let closure_7 = ["guildName"];
let closure_8 = ["guildName"];
const View = fn(17).View;
const QUARANTINE_USER_ALERT_KEY = fn(11487).QUARANTINE_USER_ALERT_KEY;
const Constants = fn(1085);
({ AnalyticEvents: closure_16, UserSettingsSections: closure_17 } = Constants);
const GuildMemberFlags = fn(4501).GuildMemberFlags;
const jsxProd = fn(21);
({ jsx: closure_19, jsxs: closure_20 } = jsxProd);
const createStyles = fn(4896);
let obj2 = {
  wrapper: { padding: 16 },
  body: { flexDirection: "column", alignItems: "center" },
  mainIcon: null,
  title: null,
  description: null,
};
let size = { width: 48, height: 48, tintColor: nativeDefault.colors.TEXT_FEEDBACK_CRITICAL, marginBottom: 16 };
obj2.mainIcon = size;
obj2.title = { marginBottom: 16, textAlign: "center" };
obj2.description = { textAlign: "center" };
let closure_21 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_22 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = c.c(27);
      if (cResult[0] !== arg0) {
        ({ title, description, buttonCta, onConfirm } = arg0);
        const tmp11 = _objectWithoutProperties(arg0, closure_3);
        cResult[0] = arg0;
        cResult[1] = tmp11;
        cResult[2] = buttonCta;
        cResult[3] = description;
        cResult[4] = onConfirm;
        cResult[5] = title;
        let tmp8 = title;
        let tmp7 = onConfirm;
        let tmp6 = description;
        let tmp5 = buttonCta;
        let tmp4 = tmp11;
      } else {
        tmp4 = cResult[1];
        tmp5 = cResult[2];
        tmp6 = cResult[3];
        tmp7 = cResult[4];
        tmp8 = cResult[5];
      }
      const tmp12 = closure_21();
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = util.intl;
        const stringResult = intl.string(util.t["ETE/oC"]);
        cResult[6] = stringResult;
        let tmp13 = stringResult;
      } else {
        tmp13 = cResult[6];
      }
      if (tmp4 != null) {
        const onClose = tmp4.onClose;
      }
      if (cResult[7] !== tmp12.mainIcon) {
        const obj2 = { source: _modDef11495, size: native.Icon.Sizes.CUSTOM, style: tmp12.mainIcon };
        const tmp18 = closure_1_19(native.Icon, obj2);
        cResult[7] = tmp12.mainIcon;
        cResult[8] = tmp18;
        let tmp15 = tmp18;
      } else {
        tmp15 = cResult[8];
      }
      if (cResult[9] === tmp12.title) {
        if (cResult[10] === tmp8) {
          let tmp19 = cResult[11];
        }
        if (cResult[12] === tmp6) {
          if (cResult[13] === tmp12.description) {
            let tmp21 = cResult[14];
          }
          if (cResult[15] === tmp12.body) {
            if (cResult[16] === tmp15) {
              if (cResult[17] === tmp19) {
                if (cResult[18] === tmp21) {
                  let tmp24 = cResult[19];
                }
                if (cResult[20] === tmp4) {
                  if (cResult[21] === tmp5) {
                    if (cResult[22] === tmp7) {
                      if (cResult[23] === tmp12.wrapper) {
                        if (cResult[24] === onClose) {
                          if (cResult[25] === tmp24) {
                            let tmp28 = cResult[26];
                          }
                          return tmp28;
                        }
                      }
                    }
                  }
                }
                const obj3 = {};
                const merged = Object.assign(tmp4);
                obj3.style = tmp12.wrapper;
                obj3.cancelText = tmp13;
                obj3.onCancel = onClose;
                obj3.confirmText = tmp5;
                obj3.onConfirm = tmp7;
                obj3.children = tmp24;
                const tmp35 = closure_1_19(common_AlertDefault, obj3);
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
          const obj4 = { style: tmp12.body, children: null };
          const items = [tmp15, tmp19, tmp21];
          obj4.children = items;
          const tmp27 = closure_1_20(View, obj4);
          cResult[15] = tmp12.body;
          cResult[16] = tmp15;
          cResult[17] = tmp19;
          cResult[18] = tmp21;
          cResult[19] = tmp27;
          tmp24 = tmp27;
        }
        const obj5 = { style: tmp12.description, variant: "text-sm/medium", color: "text-default", children: tmp6 };
        const tmp23 = closure_1_19(Text_Text.Text, obj5);
        cResult[12] = tmp6;
        cResult[13] = tmp12.description;
        cResult[14] = tmp23;
        tmp21 = tmp23;
      }
      const tmp20 = closure_1_19(Text_Text.Text, {
        style: tmp12.title,
        accessibilityRole: "header",
        variant: "heading-md/medium",
        color: "mobile-text-heading-primary",
        children: tmp8,
      });
      cResult[9] = tmp12.title;
      cResult[10] = tmp8;
      cResult[11] = tmp20;
      tmp19 = tmp20;
      const obj6 = {
        style: tmp12.title,
        accessibilityRole: "header",
        variant: "heading-md/medium",
        color: "mobile-text-heading-primary",
        children: tmp8,
      };
    }
  : (arg0) => {
      ({ title, description, buttonCta, onConfirm } = arg0);
      const tmp = _objectWithoutProperties(arg0, closure_4);
      const tmp2 = closure_21();
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
      const items = [
        closure_1_19(native.Icon, { source: _modDef11495, size: native.Icon.Sizes.CUSTOM, style: tmp2.mainIcon }),
        closure_1_19(Text_Text.Text, {
          style: tmp2.title,
          accessibilityRole: "header",
          variant: "heading-md/medium",
          color: "mobile-text-heading-primary",
          children: title,
        }),
        closure_1_19(Text_Text.Text, {
          style: tmp2.description,
          variant: "text-sm/medium",
          color: "text-default",
          children: description,
        }),
      ];
      obj2.children = items;
      obj.children = closure_1_20(View, obj2);
      return closure_1_19(tmp6, obj);
    };
ReactCompilerGating = fn(558);
let closure_23 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = c.c(22);
      if (cResult[0] !== arg0) {
        ({ guildId, guildName, automodReason } = arg0);
        const tmp10 = _objectWithoutProperties(arg0, closure_5);
        cResult[0] = arg0;
        cResult[1] = tmp10;
        cResult[2] = automodReason;
        cResult[3] = guildId;
        cResult[4] = guildName;
        let tmp7 = guildName;
        let tmp6 = guildId;
        let tmp5 = automodReason;
        let tmp4 = tmp10;
      } else {
        tmp4 = cResult[1];
        tmp5 = cResult[2];
        tmp6 = cResult[3];
        tmp7 = cResult[4];
      }
      if (cResult[5] !== tmp5) {
        if (tmp5 === GuildMemberFlags.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME) {
          const intl2 = util.intl;
          let stringResult = intl2.string(util.t.SpDXI7);
        } else {
          const intl = util.intl;
          stringResult = intl.string(util.t.TBeZmG);
        }
        cResult[5] = tmp5;
        cResult[6] = stringResult;
      } else {
        if (cResult[7] !== tmp6) {
          const obj2 = { guildId: tmp6 };
          cResult[7] = tmp6;
          cResult[8] = obj2;
          let tmp15 = obj2;
        } else {
          tmp15 = cResult[8];
        }
        const tmp17 = _slicedToArray(AutomodQuarantineUtils.useOpenFixQuarantinedProfileModal(tmp15), 2);
        const first = tmp17[0];
        if (tmp17[1]) {
          if (cResult[10] !== tmp19) {
            const intl3 = util.intl;
            const string = intl3.string;
            let t = util.t;
            if (tmp19) {
              t = t["/PGQf0"];
              let stringResult1 = string(t);
            } else {
              stringResult1 = string(t.WikgZ1);
            }
            cResult[10] = tmp19;
            cResult[11] = stringResult1;
          } else {
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
              const formatResult = obj5.format(util.t.kcYdTq, obj3);
              cResult[14] = tmp7;
              cResult[15] = formatResult;
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
            const obj6 = {};
            const merged = Object.assign(tmp4);
            obj6.title = tmp28;
            obj6.description = tmp11;
            obj6.buttonCta = cResult[11];
            obj6.onConfirm = U;
            const tmp36 = closure_1_19(closure_22, obj6);
            cResult[16] = tmp4;
            cResult[17] = cResult[11];
            cResult[18] = tmp11;
            cResult[19] = U;
            cResult[20] = tmp28;
            cResult[21] = tmp36;
          }
        } else {
          class U {
            constructor() {
              tmp = closure_0();
              return;
            }
          }
          const _Symbol = Symbol;
          if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
            class U {
              constructor() {
                tmp = closure_0();
                return;
              }
            }
            const stringResult2 = obj4.string(util.t.FFj5Dt);
            cResult[9] = stringResult2;
          } else {
            class U {
              constructor() {
                tmp = closure_0();
                return;
              }
            }
          }
        }
        const tmpResult = AutomodQuarantineUtils;
      }
    }
  : (arg0) => {
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
      const tmp = _objectWithoutProperties(arg0, closure_6);
      const tmp2Result = tmp2(11496);
      [require, tmp8] = tmp2(11496).useOpenFixQuarantinedProfileModal({ guildId });
      if (!tmp8) {
        const intl3 = tmp2(1126).intl;
        stringResult = intl3.string(tmp2(1126).t.FFj5Dt);
      }
      const intl4 = tmp2(1126).intl;
      const string = intl4.string;
      const t = tmp2(1126).t;
      if (tmp8) {
        let stringResult1 = string(t["/PGQf0"]);
      } else {
        stringResult1 = string(t.WikgZ1);
      }
      const obj = {};
      const merged = Object.assign(tmp);
      const intl5 = tmp2(1126).intl;
      obj.title = intl5.format(tmp2(1126).t.kcYdTq, { guildName });
      obj.description = stringResult;
      obj.buttonCta = stringResult1;
      obj.onConfirm = function onConfirm() {
        _require();
      };
      return closure_1_19(closure_22, obj);
    };
ReactCompilerGating = fn(558);
let closure_24 = ReactCompilerGating.isReactCompilerEnabled()
  ? (guildName) => {
      const cResult = c.c(11);
      if (cResult[0] !== guildName) {
        guildName = guildName.guildName;
        const tmp8 = _objectWithoutProperties(guildName, closure_7);
        cResult[0] = guildName;
        cResult[1] = tmp8;
        cResult[2] = guildName;
        let tmp5 = guildName;
        let tmp4 = tmp8;
      } else {
        tmp4 = cResult[1];
        tmp5 = cResult[2];
      }
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function l() {
          require("openUserSettings").openUserSettings({ screen: constants.PROFILE_CUSTOMIZATION });
        };
        cResult[3] = fn;
        let tmp9 = fn;
      } else {
        tmp9 = cResult[3];
      }
      if (cResult[4] !== tmp5) {
        const intl = util.intl;
        const obj2 = { guildName: tmp5 };
        const formatResult = intl.format(util.t.c8TwbL, obj2);
        cResult[4] = tmp5;
        cResult[5] = formatResult;
        let tmp10 = formatResult;
      } else {
        tmp10 = cResult[5];
      }
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        const intl2 = util.intl;
        const stringResult = intl2.string(util.t.EJJLHp);
        const intl3 = util.intl;
        const stringResult1 = intl3.string(util.t.Viksoo);
        cResult[6] = stringResult;
        cResult[7] = stringResult1;
        let tmp13 = stringResult1;
        let tmp12 = stringResult;
      } else {
        tmp12 = cResult[6];
        tmp13 = cResult[7];
      }
      if (cResult[8] === tmp4) {
        if (cResult[9] === tmp10) {
          let tmp16 = cResult[10];
        }
        return tmp16;
      }
      const obj3 = {};
      const merged = Object.assign(tmp4);
      obj3.title = tmp10;
      obj3.description = tmp12;
      obj3.buttonCta = tmp13;
      obj3.onConfirm = tmp9;
      const tmp18 = closure_1_19(closure_22, obj3);
      cResult[8] = tmp4;
      cResult[9] = tmp10;
      cResult[10] = tmp18;
      tmp16 = tmp18;
    }
  : (guildName) => {
      const obj = {};
      const merged = Object.assign(_objectWithoutProperties(guildName, closure_8));
      const intl = util.intl;
      obj.title = intl.format(util.t.c8TwbL, { guildName: guildName.guildName });
      const intl2 = util.intl;
      obj.description = intl2.string(util.t.EJJLHp);
      const intl3 = util.intl;
      obj.buttonCta = intl3.string(util.t.Viksoo);
      obj.onConfirm = function onConfirm() {
        require("openUserSettings").openUserSettings({ screen: constants.PROFILE_CUSTOMIZATION });
      };
      return closure_1_19(closure_22, obj);
    };
ReactCompilerGating = fn(558);
size = fn(2);
const result = size.fileFinishedImporting("modules/guild_automod/native/AutomodUserProfileQuarantineAlert.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (guildId) => {
      const cResult = guildId(576).c(25);
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
      let obj = guildId(576);
      const stateFromStores = guildId(573).useStateFromStores(tmp4, tmp5);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [GuildStore];
        cResult[2] = items1;
        let tmp8 = items1;
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
        let tmp11 = items2;
        let tmp10 = fn2;
      } else {
        tmp10 = cResult[4];
        tmp11 = cResult[5];
      }
      const tmpResult = guildId(573);
      const stateFromStores1 = guildId(573).useStateFromStores(tmp8, tmp10, tmp11);
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
        let tmp13 = items3;
      } else {
        tmp13 = cResult[6];
      }
      if (cResult[7] === guildId) {
        if (cResult[8] === stateFromStores) {
          let tmp15 = cResult[9];
          let tmp16 = cResult[10];
        }
        const stateFromStores2 = tmp(573).useStateFromStores(tmp13, tmp15, tmp16);
        if (cResult[11] === guildId) {
          if (cResult[12] === stateFromStores) {
            let tmp18 = cResult[13];
          }
          stateFromStores(5597)(tmp18);
          if (stateFromStores2 !== GuildMemberFlags.AUTOMOD_QUARANTINED_BIO) {
            if (stateFromStores2 !== GuildMemberFlags.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME) {
              if (stateFromStores2 === GuildMemberFlags.AUTOMOD_QUARANTINED_SERVER_TAG) {
                if (cResult[18] === str) {
                }
                const obj2 = { guildName: str };
                const merged = Object.assign(guildId);
                const tmp35 = closure_19(closure_24, obj2);
                cResult[18] = str;
                cResult[19] = guildId;
                cResult[20] = tmp35;
              } else {
                if (cResult[21] === stateFromStores2) {
                  if (cResult[22] === str) {
                    if (cResult[23] === guildId) {
                      let tmp22 = cResult[24];
                    }
                    return tmp22;
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
          }
          if (cResult[14] === stateFromStores2) {
            if (cResult[15] === str) {
            }
          }
          const obj4 = { automodReason: stateFromStores2, guildName: str };
          const merged2 = Object.assign(guildId);
          const tmp43 = closure_19(closure_23, obj4);
          cResult[14] = stateFromStores2;
          cResult[15] = str;
          cResult[16] = guildId;
          cResult[17] = tmp43;
        }
        const fn3 = function y() {
          AnalyticsUtilsDefault.track(constants.OPEN_MODAL, {
            type: QUARANTINE_USER_ALERT_KEY,
            guild_id: guildId,
            other_user_id: stateFromStores,
          });
        };
        cResult[11] = guildId;
        cResult[12] = stateFromStores;
        cResult[13] = fn3;
        tmp18 = fn3;
        const tmpResult4 = tmp(573);
      }
      class R {
        constructor() {
          if (null == guildId) {
            return null;
          } else {
            tmp2 = closure_0;
            tmp3 = closure_2;
            obj = closure_0(closure_2[23]);
            tmp4 = closure_13;
            tmp5 = closure_1;
            automodQuarantinedGuildMemberFlags = obj.getAutomodQuarantinedGuildMemberFlags(
              closure_13.getMember(tmp, closure_1),
            );
            obj2 = closure_0(closure_2[23]);
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
      const tmpResult3 = guildId(573);
    }
  : (guildId) => {
      guildId = guildId.guildId;
      const items = [AuthenticationStore];
      const stateFromStores = guildId(573).useStateFromStores(items, () => id.getId());
      let obj = guildId(573);
      const tmp = guildId;
      const items1 = [GuildStore];
      const items2 = [guildId];
      const stateFromStores1 = guildId(573).useStateFromStores(items1, () => GuildStore.getGuild(guildId), items2);
      let str;
      if (stateFromStores1 != null) {
        str = stateFromStores1.name;
      }
      if (str == null) {
        str = "";
      }
      const obj2 = guildId(573);
      const items3 = [GuildMemberStore];
      const items4 = [guildId, stateFromStores];
      const stateFromStores2 = tmp(573).useStateFromStores(
        items3,
        () => {
          if (null == guildId) {
            return null;
          } else {
            const automodQuarantinedGuildMemberFlags = AutomodPermissionUtils.getAutomodQuarantinedGuildMemberFlags(
              GuildMemberStore.getMember(tmp, stateFromStores),
            );
            return AutomodPermissionUtils.getAutomodReason(automodQuarantinedGuildMemberFlags);
          }
        },
        items4,
      );
      stateFromStores(5597)(() => {
        AnalyticsUtilsDefault.track(constants.OPEN_MODAL, {
          type: QUARANTINE_USER_ALERT_KEY,
          guild_id: guildId,
          other_user_id: stateFromStores,
        });
      });
      if (stateFromStores2 !== GuildMemberFlags.AUTOMOD_QUARANTINED_BIO) {
        if (stateFromStores2 !== GuildMemberFlags.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME) {
          if (stateFromStores2 === GuildMemberFlags.AUTOMOD_QUARANTINED_SERVER_TAG) {
            const obj3 = { guildName: str };
            const merged = Object.assign(guildId);
            let tmp13 = closure_19(closure_24, obj3);
          } else {
            const obj4 = { automodReason: stateFromStores2, guildName: str };
            const merged1 = Object.assign(guildId);
            tmp13 = closure_19(closure_23, obj4);
          }
        }
        return tmp13;
      }
      const merged2 = Object.assign(guildId);
      tmp13 = closure_19(closure_23, { automodReason: stateFromStores2, guildName: str });
      const obj5 = { automodReason: stateFromStores2, guildName: str };
      const tmpResult = tmp(573);
    };
