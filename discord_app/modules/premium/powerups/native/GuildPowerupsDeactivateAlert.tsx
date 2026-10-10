// === Module 12276: GuildPowerupsDeactivateAlert ===

// Module 12276 (GuildPowerupsDeactivateAlert)
import _mod17 from "module_17" /* 17 */;
import nativeDefault from "native" /* 587 */;
import _modDef2600 from "module_2600" /* 2600 */;
import Text_Text from "Text/Text" /* 5088 */;
import useGuildPowerupOnDeactivateDefault from "useGuildPowerupOnDeactivate" /* 12277 */;
import useDeactivateWarningTextDefault from "useDeactivateWarningText" /* 12278 */;
import jsxProd from "jsxProd" /* 21 */;
import createStyles from "createStyles" /* 5092 */;
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

export default ReactCompilerGating.isReactCompilerEnabled() ? (function GuildPowerupsDeactivateAlert(arg0) {
  const cResult = require("c").c(34);
  ({ guildId, powerup } = arg0);
  const tmp4 = closure_6();
  _require = tmp4;
  const tmp6 = onDeactivate(12277)(guildId, powerup);
  onDeactivate = tmp6.onDeactivate;
  const error = tmp6.error;
  const arr = onDeactivate(12278)(guildId, powerup);
  let obj = require("c");
  const logPowerupModalOpened = require("GuildPowerupAnalytics").useLogPowerupModalOpened(guildId, powerup, require("GuildPowerupAnalytics").ModalType.DEACTIVATE);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { color: tmp5(587).colors.INTERACTIVE_ICON_DEFAULT, size: "custom", style: { width: 40, height: 40 } };
    const tmp10 = closure_4(tmp(6289).CircleErrorIcon, obj3);
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
    let tmp11 = tmp14;
  } else {
    tmp11 = cResult[2];
  }
  if (cResult[3] !== powerup.title) {
    const intl = tmp(1126).intl;
    const obj5 = { perk: powerup.title };
    const formatToPlainStringResult = intl.formatToPlainString(tmp5(2600).iEBw1M, obj5);
    cResult[3] = powerup.title;
    cResult[4] = formatToPlainStringResult;
    let tmp15 = formatToPlainStringResult;
  } else {
    tmp15 = cResult[4];
  }
  if (cResult[5] !== powerup.title) {
    const intl2 = tmp(1126).intl;
    const obj6 = { perk: powerup.title };
    const formatToPlainStringResult1 = intl2.formatToPlainString(tmp5(2600)["7o0K+2"], obj6);
    cResult[5] = powerup.title;
    cResult[6] = formatToPlainStringResult1;
    let tmp17 = formatToPlainStringResult1;
  } else {
    tmp17 = cResult[6];
  }
  if (cResult[7] === error) {
    if (cResult[8] === tmp4.warningText) {
      let tmp19 = cResult[9];
    }
    if (cResult[10] !== onDeactivate) {
      const fn = function p(stopPropagation) {
        stopPropagation.stopPropagation();
        return onDeactivate();
      };
      cResult[10] = onDeactivate;
      cResult[11] = fn;
      let tmp22 = fn;
    } else {
      tmp22 = cResult[11];
    }
    const _Symbol = Symbol;
    if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
      const intl3 = tmp(1126).intl;
      const stringResult = intl3.string(tmp5(2600).PYPdl4);
      cResult[12] = stringResult;
      let tmp23 = stringResult;
    } else {
      tmp23 = cResult[12];
    }
    if (cResult[13] !== tmp22) {
      const obj7 = { variant: "destructive", onPress: tmp22, text: tmp23 };
      const tmp27 = closure_4(tmp(5305).AlertActionButton, obj7, "deactivate");
      cResult[13] = tmp22;
      cResult[14] = tmp27;
      let tmp25 = tmp27;
    } else {
      tmp25 = cResult[14];
    }
    const _Symbol2 = Symbol;
    if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
      const fn2 = function v() {

      };
      cResult[15] = fn2;
      let tmp28 = fn2;
    } else {
      tmp28 = cResult[15];
    }
    const _Symbol3 = Symbol;
    if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
      const obj8 = { onPress: tmp28, variant: "secondary", text: null };
      const intl4 = tmp(1126).intl;
      obj8.text = intl4.string(tmp(1126).t["ETE/oC"]);
      const tmp31 = closure_4(tmp(5305).AlertActionButton, obj8, "cancel");
      cResult[16] = tmp31;
      let tmp29 = tmp31;
    } else {
      tmp29 = cResult[16];
    }
    if (cResult[17] === tmp19) {
      if (cResult[18] === tmp25) {
        let tmp32 = cResult[19];
      }
      if (cResult[20] === tmp4.warningText) {
        if (cResult[21] === arr) {
          if (cResult[25] === tmp4.extraContentContainer) {
            if (cResult[26] === tmp36) {
              let tmp40 = cResult[27];
            }
            if (cResult[28] === tmp32) {
              if (cResult[29] === tmp40) {
                if (cResult[30] === tmp11) {
                  if (cResult[31] === tmp15) {
                    if (cResult[32] === tmp17) {
                      let tmp44 = cResult[33];
                    }
                    return tmp44;
                  }
                }
              }
            }
            const obj9 = { header: tmp11, title: tmp15, content: tmp17, actions: tmp32, extraContent: tmp40 };
            const tmp46 = closure_4(tmp(5305).AlertModal, obj9);
            cResult[28] = tmp32;
            cResult[29] = tmp40;
            cResult[30] = tmp11;
            cResult[31] = tmp15;
            cResult[32] = tmp17;
            cResult[33] = tmp46;
            tmp44 = tmp46;
          }
          const obj10 = { style: tmp35, children: cResult[22] };
          const tmp43 = closure_4(View, obj10);
          cResult[25] = tmp4.extraContentContainer;
          cResult[26] = cResult[22];
          cResult[27] = tmp43;
          tmp40 = tmp43;
        }
      }
      if (cResult[23] !== tmp4.warningText) {
        const fn3 = function k(critical, arg1) {
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
          return React4(Text_Text.Text, obj, arg1);
        };
        cResult[23] = tmp4.warningText;
        cResult[24] = fn3;
        let tmp37 = fn3;
      } else {
        tmp37 = cResult[24];
      }
      const mapped = arr.map(tmp37);
      cResult[20] = tmp4.warningText;
      cResult[21] = arr;
      cResult[22] = mapped;
    }
    const obj11 = { children: null };
    const items = [tmp19, tmp25, tmp29];
    obj11.children = items;
    const tmp34 = closure_5(tmp(5305).AlertActions, obj11);
    cResult[17] = tmp19;
    cResult[18] = tmp25;
    cResult[19] = tmp34;
    tmp32 = tmp34;
  }
  let tmp20 = null != error;
  if (tmp20) {
    const obj12 = { style: tmp4.warningText, variant: "text-xs/semibold", color: "text-feedback-critical", children: error };
    tmp20 = closure_4(tmp(5088).Text, obj12);
  }
  cResult[7] = error;
  cResult[8] = tmp4.warningText;
  cResult[9] = tmp20;
  tmp19 = tmp20;
  const obj2 = require("GuildPowerupAnalytics");
}) : (function GuildPowerupsDeactivateAlert(arg0) {
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
  obj2.title = intl.formatToPlainString(_modDef2600.iEBw1M, { perk: powerup.title });
  const intl2 = require("util").intl;
  obj2.content = intl2.formatToPlainString(_modDef2600["7o0K+2"], { perk: powerup.title });
  let tmp7Result = null != error;
  if (tmp7Result) {
    const obj7 = { style: tmp.warningText, variant: "text-xs/semibold", color: "text-feedback-critical", children: error };
    tmp7Result = closure_4(tmp5(5088).Text, obj7);
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
  obj9.text = intl3.string(_modDef2600.PYPdl4);
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