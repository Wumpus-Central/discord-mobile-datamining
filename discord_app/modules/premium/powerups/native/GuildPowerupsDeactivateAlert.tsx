// === Module 12214: GuildPowerupsDeactivateAlert ===

// Module 12214 (GuildPowerupsDeactivateAlert)
import _mod17 from "module_17" /* 17 */;
import nativeDefault from "native" /* 587 */;
import _modDef2553 from "module_2553" /* 2553 */;
import Text_Text from "Text/Text" /* 4892 */;
import useGuildPowerupOnDeactivateDefault from "useGuildPowerupOnDeactivate" /* 12215 */;
import useDeactivateWarningTextDefault from "useDeactivateWarningText" /* 12216 */;
import jsxProd from "jsxProd" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;

const View = _mod17.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
let obj = { headerContainer: null, extraContentContainer: null, warningText: null };
let size = { width: 64, height: 64, alignItems: "center", justifyContent: "center", borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, alignSelf: "center" };
obj.headerContainer = size;
obj.extraContentContainer = { paddingHorizontal: nativeDefault.space.PX_12 };
obj.warningText = { textAlign: "center" };
let closure_6 = createStyles.createStyles(obj);
let obj2 = { paddingHorizontal: nativeDefault.space.PX_12 };
let size = size_mod;
const result = size.fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsDeactivateAlert.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = require("c").c(34);
  ({ guildId, powerup } = arg0);
  const tmp4 = closure_6();
  _require = tmp4;
  const tmp6 = onDeactivate(12215)(guildId, powerup);
  onDeactivate = tmp6.onDeactivate;
  const error = tmp6.error;
  const arr = onDeactivate(12216)(guildId, powerup);
  let obj = require("c");
  const logPowerupModalOpened = require("GuildPowerupAnalytics").useLogPowerupModalOpened(guildId, powerup, require("GuildPowerupAnalytics").ModalType.DEACTIVATE);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { color: tmp5(587).colors.INTERACTIVE_ICON_DEFAULT, size: "custom", style: { width: 40, height: 40 } };
    const tmp10 = closure_4(tmp(4806).CircleErrorIcon, obj3);
    cResult[0] = tmp10;
    let first = tmp10;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp4.headerContainer) {
    const obj4 = { style: tmp4.headerContainer, children: first };
    const tmp14 = closure_4(View, obj4);
    cResult[1] = tmp4.headerContainer;
    cResult[2] = tmp14;
  }
  if (cResult[3] !== powerup.title) {
    const intl = tmp(1126).intl;
    const obj5 = { perk: powerup.title };
    const formatToPlainStringResult = intl.formatToPlainString(tmp5(2553).iEBw1M, obj5);
    cResult[3] = powerup.title;
    cResult[4] = formatToPlainStringResult;
  }
  if (cResult[5] !== powerup.title) {
    const intl2 = tmp(1126).intl;
    const obj6 = { perk: powerup.title };
    const formatToPlainStringResult1 = intl2.formatToPlainString(tmp5(2553)["7o0K+2"], obj6);
    cResult[5] = powerup.title;
    cResult[6] = formatToPlainStringResult1;
  }
  if (cResult[7] === error) {
    if (cResult[8] === tmp4.warningText) {
      let tmp19 = cResult[9];
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
      const stringResult = obj8.string(tmp5(2553).PYPdl4);
      cResult[12] = stringResult;
      const tmp22 = stringResult;
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
      const obj7 = { variant: "destructive", onPress: C, text: tmp22 };
      const tmp25 = closure_4(tmp(5720).AlertActionButton, obj7, "deactivate");
      cResult[13] = C;
      cResult[14] = tmp25;
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
      const obj9 = { onPress: tmp27, variant: "secondary", text: null };
      const intl3 = tmp(1126).intl;
      obj9.text = intl3.string(tmp(1126).t["ETE/oC"]);
      const tmp29 = closure_4(tmp(5720).AlertActionButton, obj9, "cancel");
      cResult[16] = tmp29;
      const tmp28 = tmp29;
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
      }
      if (cResult[23] !== tmp4.warningText) {
        class D {
          constructor(arg0, arg1) {
            tmp = jsx;
            obj = { style: closure_0.warningText, variant: null, color: null, children: null };
            str = "text-sm/medium";
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
            return tmp(closure_0(closure_2[12]).Text, obj, arg1);
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
            return tmp(closure_0(closure_2[12]).Text, obj, arg1);
          }
        }
      }
      const mapped = arr.map(D);
      cResult[20] = tmp4.warningText;
      cResult[21] = arr;
      cResult[22] = mapped;
    }
    const obj10 = { children: null };
    const items = [tmp19, tmp24, tmp28];
    obj10.children = items;
    const tmp32 = closure_5(tmp(5720).AlertActions, obj10);
    cResult[17] = tmp19;
    cResult[18] = tmp24;
    cResult[19] = tmp32;
  }
  let tmp20 = null != error;
  if (tmp20) {
    class D {
      constructor(arg0, arg1) {
        tmp = jsx;
        obj = { style: closure_0.warningText, variant: null, color: null, children: null };
        str = "text-sm/medium";
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
        return tmp(closure_0(closure_2[12]).Text, obj, arg1);
      }
    }
    const obj11 = { style: tmp4.warningText, variant: "text-xs/semibold", color: "text-feedback-critical", children: error };
    tmp20 = closure_4(tmp(4892).Text, obj11);
  }
  cResult[7] = error;
  cResult[8] = tmp4.warningText;
  cResult[9] = tmp20;
  tmp19 = tmp20;
  const obj2 = require("GuildPowerupAnalytics");
}) : ((arg0) => {
  ({ guildId, powerup } = arg0);
  importDefault = undefined;
  const tmp = closure_6();
  _require = tmp;
  ({ onDeactivate: c1, error } = useGuildPowerupOnDeactivateDefault(guildId, powerup));
  const tmp4 = useGuildPowerupOnDeactivateDefault(guildId, powerup);
  const arr = useDeactivateWarningTextDefault(guildId, powerup);
  const logPowerupModalOpened = require("GuildPowerupAnalytics").useLogPowerupModalOpened(guildId, powerup, require("GuildPowerupAnalytics").ModalType.DEACTIVATE);
  const obj2 = { header: null, title: null, content: null, actions: null, extraContent: null };
  const obj3 = { style: tmp.headerContainer, children: null };
  let obj = require("GuildPowerupAnalytics");
  obj3.children = closure_4(require("CircleErrorIcon").CircleErrorIcon, { color: nativeDefault.colors.INTERACTIVE_ICON_DEFAULT, size: "custom", style: { width: 40, height: 40 } });
  obj2.header = closure_4(View, obj3);
  const intl = require("util").intl;
  obj2.title = intl.formatToPlainString(_modDef2553.iEBw1M, { perk: powerup.title });
  const intl2 = require("util").intl;
  obj2.content = intl2.formatToPlainString(_modDef2553["7o0K+2"], { perk: powerup.title });
  let tmp7Result = null != error;
  if (tmp7Result) {
    const obj7 = { style: tmp.warningText, variant: "text-xs/semibold", color: "text-feedback-critical", children: error };
    tmp7Result = closure_4(tmp5(4892).Text, obj7);
  }
  const obj8 = { children: null };
  const items = [tmp7Result, , ];
  const obj9 = {
    variant: "destructive",
    onPress(stopPropagation) {
      stopPropagation.stopPropagation();
      return _undefined();
    },
    text: null
  };
  const intl3 = tmp5(1126).intl;
  obj9.text = intl3.string(_modDef2553.PYPdl4);
  items[1] = closure_4(require("AlertModal").AlertActionButton, obj9, "deactivate");
  const obj10 = {
    onPress() {

    },
    variant: "secondary",
    text: null
  };
  const intl4 = tmp5(1126).intl;
  obj10.text = intl4.string(require("util").t["ETE/oC"]);
  items[2] = closure_4(require("AlertModal").AlertActionButton, obj10, "cancel");
  obj8.children = items;
  obj2.actions = closure_5(require("AlertModal").AlertActions, obj8);
  const obj4 = { color: nativeDefault.colors.INTERACTIVE_ICON_DEFAULT, size: "custom", style: { width: 40, height: 40 } };
  const obj5 = { perk: powerup.title };
  const obj6 = { perk: powerup.title };
  obj2.extraContent = closure_4(View, {
    style: tmp.extraContentContainer,
    children: arr.map((critical, index) => {
      const obj = { style: warningText.warningText, variant: null, color: null, children: null };
      let str = "text-sm/medium";
      if (critical.critical) {
        str = "text-sm/semibold";
      }
      obj.variant = str;
      let str2;
      if (critical.critical) {
        str2 = "text-feedback-critical";
      }
      obj.color = str2;
      obj.children = critical.text;
      return React4(Text_Text.Text, obj, index);
    })
  });
  return closure_4(require("AlertModal").AlertModal, obj2);
});