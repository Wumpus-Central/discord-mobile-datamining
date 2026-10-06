// discord_app/modules/premium/powerups/native/GuildPowerupsDeactivateAlert.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import _modDef2553 from "../GuildPowerups.messages.js";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import useGuildPowerupOnDeactivateDefault from "../hooks/useGuildPowerupOnDeactivate.tsx";
import useDeactivateWarningTextDefault from "../hooks/useDeactivateWarningText.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, importDefault, stopPropagationResult;

let closure_4;
let hasOwnProperty;
let obj2;
let size;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let createStyles = createStyles_mod;
let obj = { headerContainer: size, extraContentContainer: obj2, warningText: { textAlign: "center" } };
size = {
  width: 64,
  height: 64,
  alignItems: "center",
  justifyContent: "center",
  borderRadius: nativeDefault.radii.round,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
  alignSelf: "center",
};
createStyles = createStyles.createStyles;
obj2 = { paddingHorizontal: nativeDefault.space.PX_12 };
let closure_6 = createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let first;
      let guildId;
      let intl3;
      let items;
      let onDeactivate;
      let powerup;
      let tmp11;
      let tmp15;
      let tmp17;
      let warningText;
      let obj = require("react");
      const cResult = obj.c(34);
      ({ guildId, powerup } = arg0);
      const tmp4 = closure_6();
      _require = tmp4;
      const tmp6 = onDeactivate(12215)(guildId, powerup);
      onDeactivate = tmp6.onDeactivate;
      const error = tmp6.error;
      const arr = onDeactivate(12216)(guildId, powerup);
      const obj2 = require("GuildPowerupAnalytics");
      const logPowerupModalOpened = obj2.useLogPowerupModalOpened(
        guildId,
        powerup,
        require("GuildPowerupAnalytics").ModalType.DEACTIVATE,
      );
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj3 = {
          color: onDeactivate(587).colors.INTERACTIVE_ICON_DEFAULT,
          size: "custom",
          style: { width: 40, height: 40 },
        };
        const CircleErrorIcon = tmp(4806).CircleErrorIcon;
        const tmp10 = closure_4(CircleErrorIcon, obj3);
        cResult[0] = tmp10;
        first = tmp10;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== tmp4.headerContainer) {
        const obj4 = { style: tmp4.headerContainer, children: first };
        const tmp14 = closure_4(View, obj4);
        cResult[1] = tmp4.headerContainer;
        cResult[2] = tmp14;
        tmp11 = tmp14;
      } else {
        tmp11 = cResult[2];
      }
      if (cResult[3] !== powerup.title) {
        const intl = tmp(1126).intl;
        const obj5 = { perk: powerup.title };
        const formatToPlainStringResult = intl.formatToPlainString(onDeactivate(2553).iEBw1M, obj5);
        cResult[3] = powerup.title;
        cResult[4] = formatToPlainStringResult;
        tmp15 = formatToPlainStringResult;
      } else {
        tmp15 = cResult[4];
      }
      if (cResult[5] !== powerup.title) {
        const intl2 = tmp(1126).intl;
        const obj6 = { perk: powerup.title };
        const formatToPlainStringResult1 = intl2.formatToPlainString(onDeactivate(2553)["7o0K+2"], obj6);
        cResult[5] = powerup.title;
        cResult[6] = formatToPlainStringResult1;
        tmp17 = formatToPlainStringResult1;
      } else {
        tmp17 = cResult[6];
      }
      if (cResult[7] === error) {
        let tmp19;
        let tmp22;
        let tmp28;
        if (cResult[8] === tmp4.warningText) {
          tmp19 = cResult[9];
        }
        if (cResult[10] !== onDeactivate) {
          class C {
            constructor(arg0) {
              stopPropagationResult = arg0.stopPropagation();
              return onDeactivate();
            }
          }
          cResult[10] = onDeactivate;
          cResult[11] = C;
        } else {
          class C {
            constructor(arg0) {
              stopPropagationResult = arg0.stopPropagation();
              return onDeactivate();
            }
          }
        }
        const _Symbol = Symbol;
        if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
          class C {
            constructor(arg0) {
              stopPropagationResult = arg0.stopPropagation();
              return onDeactivate();
            }
          }
          const stringResult = obj8.string(onDeactivate(2553).PYPdl4);
          cResult[12] = stringResult;
          tmp22 = stringResult;
        } else {
          class C {
            constructor(arg0) {
              stopPropagationResult = arg0.stopPropagation();
              return onDeactivate();
            }
          }
        }
        if (cResult[13] !== C) {
          class C {
            constructor(arg0) {
              stopPropagationResult = arg0.stopPropagation();
              return onDeactivate();
            }
          }
          let str = "deactivate";
          const obj7 = { variant: "destructive", onPress: C, text: tmp22 };
          cResult[13] = C;
          cResult[14] = closure_4(require("AlertModal").AlertActionButton, obj7, "deactivate");
          const tmp25 = closure_4(require("AlertModal").AlertActionButton, obj7, "deactivate");
        } else {
          class C {
            constructor(arg0) {
              stopPropagationResult = arg0.stopPropagation();
              return onDeactivate();
            }
          }
        }
        const _Symbol2 = Symbol;
        if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
          class C {
            constructor(arg0) {
              stopPropagationResult = arg0.stopPropagation();
              return onDeactivate();
            }
          }
          cResult[15] = tmp27;
        } else {
          class C {
            constructor(arg0) {
              stopPropagationResult = arg0.stopPropagation();
              return onDeactivate();
            }
          }
        }
        const _Symbol3 = Symbol;
        if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
          class C {
            constructor(arg0) {
              stopPropagationResult = arg0.stopPropagation();
              return onDeactivate();
            }
          }
          const obj9 = { onPress: tmp27, variant: "secondary", text: intl3.string(require("intl").t["ETE/oC"]) };
          const AlertActionButton = tmp(5720).AlertActionButton;
          intl3 = tmp(1126).intl;
          let str2 = "cancel";
          const tmp29 = closure_4(AlertActionButton, obj9, "cancel");
          cResult[16] = tmp29;
          tmp28 = tmp29;
        } else {
          class C {
            constructor(arg0) {
              stopPropagationResult = arg0.stopPropagation();
              return onDeactivate();
            }
          }
        }
        if (cResult[17] === tmp19) {
          class C {
            constructor(arg0) {
              stopPropagationResult = arg0.stopPropagation();
              return onDeactivate();
            }
          }
          if (cResult[20] === tmp4.warningText) {
            class C {
              constructor(arg0) {
                stopPropagationResult = arg0.stopPropagation();
                return onDeactivate();
              }
            }
            if (cResult[25] === tmp4.extraContentContainer) {
              class C {
                constructor(arg0) {
                  stopPropagationResult = arg0.stopPropagation();
                  return onDeactivate();
                }
              }
              if (cResult[28] === tmp30) {
                class C {
                  constructor(arg0) {
                    stopPropagationResult = arg0.stopPropagation();
                    return onDeactivate();
                  }
                }
              }
              const obj10 = { header: tmp11, title: tmp15, content: tmp17, actions: tmp30, extraContent: tmp37 };
              cResult[28] = tmp30;
              cResult[29] = tmp37;
              cResult[30] = tmp11;
              cResult[31] = tmp15;
              cResult[32] = tmp17;
              cResult[33] = closure_4(require("AlertModal").AlertModal, obj10);
              const tmp43 = closure_4(require("AlertModal").AlertModal, obj10);
            }
            const obj11 = { style: tmp33, children: tmp34 };
            cResult[25] = tmp4.extraContentContainer;
            cResult[26] = tmp34;
            cResult[27] = closure_4(View, obj11);
            const tmp40 = closure_4(View, obj11);
          }
          if (cResult[23] !== tmp4.warningText) {
            class D {
              constructor(arg0, arg1) {
                tmp = jsx;
                obj = { style: closure_0.warningText, variant: null, color: null, children: null };
                str = "text-sm/medium";
                Text = closure_0(closure_2[12]).Text;
                if (arg0.critical) {
                  str = "text-sm/semibold";
                }
                obj.variant = str;
                str2 = undefined;
                if (arg0.critical) {
                  str2 = "text-feedback-critical";
                }
                obj.color = str2;
                obj.children = arg0.text;
                return tmp(Text, obj, arg1);
              }
            }
            cResult[23] = tmp4.warningText;
            cResult[24] = D;
          } else {
            class D {
              constructor(arg0, arg1) {
                tmp = jsx;
                obj = { style: closure_0.warningText, variant: null, color: null, children: null };
                str = "text-sm/medium";
                Text = closure_0(closure_2[12]).Text;
                if (arg0.critical) {
                  str = "text-sm/semibold";
                }
                obj.variant = str;
                str2 = undefined;
                if (arg0.critical) {
                  str2 = "text-feedback-critical";
                }
                obj.color = str2;
                obj.children = arg0.text;
                return tmp(Text, obj, arg1);
              }
            }
          }
          const mapped = arr.map(D);
          cResult[20] = tmp4.warningText;
          cResult[21] = arr;
          cResult[22] = mapped;
        }
        const obj12 = { children: items };
        items = [tmp19, tmp24, tmp28];
        cResult[17] = tmp19;
        cResult[18] = tmp24;
        cResult[19] = closure_5(require("AlertModal").AlertActions, obj12);
        const tmp32 = closure_5(require("AlertModal").AlertActions, obj12);
      }
      let tmp20 = null != error;
      if (tmp20) {
        class D {
          constructor(arg0, arg1) {
            tmp = jsx;
            obj = { style: closure_0.warningText, variant: null, color: null, children: null };
            str = "text-sm/medium";
            Text = closure_0(closure_2[12]).Text;
            if (arg0.critical) {
              str = "text-sm/semibold";
            }
            obj.variant = str;
            str2 = undefined;
            if (arg0.critical) {
              str2 = "text-feedback-critical";
            }
            obj.color = str2;
            obj.children = arg0.text;
            return tmp(Text, obj, arg1);
          }
        }
        const obj13 = {
          style: tmp4.warningText,
          variant: "text-xs/semibold",
          color: "text-feedback-critical",
          children: error,
        };
        tmp20 = closure_4(tmp(4892).Text, obj13);
      }
      cResult[7] = error;
      cResult[8] = tmp4.warningText;
      cResult[9] = tmp20;
      tmp19 = tmp20;
    }
  : (arg0) => {
      let AlertActions;
      let CircleErrorIcon;
      let _undefined;
      let c1;
      let error;
      let guildId;
      let intl;
      let intl2;
      let intl3;
      let intl4;
      let items;
      let obj11;
      let obj3;
      let obj4;
      let obj5;
      let obj6;
      let obj8;
      let powerup;
      let warningText;
      ({ guildId, powerup } = arg0);
      importDefault = undefined;
      const tmp = closure_6();
      _require = tmp;
      ({ onDeactivate: c1, error } = useGuildPowerupOnDeactivateDefault(guildId, powerup));
      useGuildPowerupOnDeactivateDefault(guildId, powerup);
      const arr = useDeactivateWarningTextDefault(guildId, powerup);
      let obj = require("GuildPowerupAnalytics");
      const logPowerupModalOpened = obj.useLogPowerupModalOpened(
        guildId,
        powerup,
        require("GuildPowerupAnalytics").ModalType.DEACTIVATE,
      );
      const obj2 = {
        header: closure_4(View, obj3),
        title: intl.formatToPlainString(_modDef2553.iEBw1M, obj5),
        content: intl2.formatToPlainString(_modDef2553["7o0K+2"], obj6),
        actions: closure_5(AlertActions, obj8),
        extraContent: closure_4(View, obj11),
      };
      obj3 = { style: tmp.headerContainer, children: closure_4(CircleErrorIcon, obj4) };
      const AlertModal = require("AlertModal").AlertModal;
      obj4 = { color: nativeDefault.colors.INTERACTIVE_ICON_DEFAULT, size: "custom", style: { width: 40, height: 40 } };
      CircleErrorIcon = require("CircleErrorIcon").CircleErrorIcon;
      intl = require("intl").intl;
      obj5 = { perk: powerup.title };
      intl2 = require("intl").intl;
      let tmp7Result = null != error;
      obj6 = { perk: powerup.title };
      AlertActions = require("AlertModal").AlertActions;
      if (tmp7Result) {
        const obj7 = {
          style: tmp.warningText,
          variant: "text-xs/semibold",
          color: "text-feedback-critical",
          children: error,
        };
        tmp7Result = closure_4(tmp5(4892).Text, obj7);
      }
      obj8 = { children: items };
      items = [tmp7Result, ,];
      const obj9 = {
        variant: "destructive",
        onPress(stopPropagation) {
          stopPropagation.stopPropagation();
          return _undefined();
        },
        text: intl3.string(_modDef2553.PYPdl4),
      };
      const AlertActionButton = tmp5(5720).AlertActionButton;
      intl3 = tmp5(1126).intl;
      items[1] = closure_4(AlertActionButton, obj9, "deactivate");
      const obj10 = {
        onPress() {},
        variant: "secondary",
        text: intl4.string(require("intl").t["ETE/oC"]),
      };
      const AlertActionButton2 = tmp5(5720).AlertActionButton;
      intl4 = tmp5(1126).intl;
      items[2] = closure_4(AlertActionButton2, obj10, "cancel");
      obj11 = {
        style: tmp.extraContentContainer,
        children: arr.map((critical, index) => {
          let str;
          let str2;
          const obj = { style: warningText.warningText, variant: str, color: str2, children: critical.text };
          str = "text-sm/medium";
          const Text = Text_Text.Text;
          if (critical.critical) {
            str = "text-sm/semibold";
          }
          str2 = undefined;
          if (critical.critical) {
            str2 = "text-feedback-critical";
          }
          return React3(Text, obj, index);
        }),
      };
      return closure_4(AlertModal, obj2);
    };
size = size_mod;
const result = size.fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsDeactivateAlert.tsx");

export default tmp4;
