// discord_app/modules/premium/fractional/native/BoostingCountDownPill.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import asyncRequireImpl from "../../../../../_runtime/01999_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import get_ActivityIndicator from "../../../../../_runtime/metro/00017__.js";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

function handlePress() {
  const obj2 = { aboutText: null };
  const obj = ActionSheetActionCreatorsDefault;
  const intl = util.intl;
  obj2.aboutText = intl.string(util.t["07lzz7"]);
  obj.openLazy(asyncRequireImpl(13642, dependencyMap.paths), "NitroCreditEducationActionSheet", obj2);
}
({ TouchableOpacity: c3, View: closure_4 } = get_ActivityIndicator);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
let obj = {
  fractionalPremiumBanner: {
    backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
    flexDirection: "row",
    gap: 12,
    padding: 12,
    justifyContent: "center",
    borderColor: nativeDefault.colors.STATUS_WARNING,
    borderWidth: 1,
    borderRadius: nativeDefault.radii.lg,
    marginBottom: 12,
  },
  fpDurationPill: null,
  fpDurationText: null,
  fpUnavailable: null,
  fpUnavailableTextNoCountdown: null,
};
let obj2 = {
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  flexDirection: "row",
  gap: 12,
  padding: 12,
  justifyContent: "center",
  borderColor: nativeDefault.colors.STATUS_WARNING,
  borderWidth: 1,
  borderRadius: nativeDefault.radii.lg,
  marginBottom: 12,
};
obj.fpDurationPill = {
  flex: 1,
  paddingVertical: 12,
  paddingHorizontal: 27,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG,
  borderRadius: nativeDefault.radii.xxl,
  justifyContent: "center",
};
obj.fpDurationText = { textAlign: "center", color: "#FFEAA0" };
obj.fpUnavailable = { flex: 1, justifyContent: "center" };
obj.fpUnavailableTextNoCountdown = { textAlign: "center" };
let closure_7 = createStyles.createStyles(obj);
let obj3 = {
  flex: 1,
  paddingVertical: 12,
  paddingHorizontal: 27,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG,
  borderRadius: nativeDefault.radii.xxl,
  justifyContent: "center",
};
const result = size.fileFinishedImporting("modules/premium/fractional/native/BoostingCountDownPill.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function BoostingCountDownPill(arg0) {
      const cResult = c.c(21);
      ({ fpDurationText, isInReverseTrial, style } = arg0);
      const tmp4 = closure_7();
      if (cResult[0] === style) {
        if (cResult[1] === tmp4.fractionalPremiumBanner) {
          let tmp6 = cResult[2];
        }
        if (cResult[3] === fpDurationText) {
          if (cResult[4] === isInReverseTrial) {
            if (cResult[5] === tmp4.fpDurationPill) {
              if (cResult[6] === tmp4.fpDurationText) {
                let tmp7 = cResult[7];
              }
              let prop;
              if (isInReverseTrial) {
                prop = tmp4.fpUnavailableTextNoCountdown;
              }
              const _Symbol = Symbol;
              if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
                const intl = util.intl;
                const stringResult = intl.string(util.t["5nrJDO"]);
                cResult[8] = stringResult;
                let tmp13 = stringResult;
              } else {
                tmp13 = cResult[8];
              }
              if (cResult[9] !== prop) {
                const obj2 = {
                  variant: "text-md/normal",
                  color: "interactive-text-active",
                  style: prop,
                  children: tmp13,
                };
                const tmp17 = hasOwnProperty(Text_Text.Text, obj2);
                cResult[9] = prop;
                cResult[10] = tmp17;
                let tmp15 = tmp17;
              } else {
                tmp15 = cResult[10];
              }
              if (cResult[11] === tmp4.fpUnavailable) {
                if (cResult[12] === tmp15) {
                  let tmp18 = cResult[13];
                }
                if (cResult[14] === tmp6) {
                  if (cResult[15] === tmp7) {
                    if (cResult[16] === tmp18) {
                      let tmp22 = cResult[17];
                    }
                    if (cResult[18] === handlePress) {
                      if (cResult[19] === tmp22) {
                        let tmp26 = cResult[20];
                      }
                      return tmp26;
                    }
                    const obj3 = { activeOpacity: 0.7, onPress: handlePress, children: tmp22 };
                    const tmp29 = hasOwnProperty(React3, obj3);
                    cResult[18] = handlePress;
                    cResult[19] = tmp22;
                    cResult[20] = tmp29;
                    tmp26 = tmp29;
                  }
                }
                const obj4 = { style: tmp6, children: null };
                const items = [tmp7, tmp18];
                obj4.children = items;
                const tmp25 = timestampProducer(React4, obj4);
                cResult[14] = tmp6;
                cResult[15] = tmp7;
                cResult[16] = tmp18;
                cResult[17] = tmp25;
                tmp22 = tmp25;
              }
              const obj5 = { style: tmp4.fpUnavailable, children: tmp15 };
              const tmp21 = hasOwnProperty(React4, obj5);
              cResult[11] = tmp4.fpUnavailable;
              cResult[12] = tmp15;
              cResult[13] = tmp21;
              tmp18 = tmp21;
            }
          }
        }
        let tmp8 = !isInReverseTrial;
        if (!isInReverseTrial) {
          const obj6 = { style: tmp4.fpDurationPill, children: null };
          const obj7 = { variant: "text-sm/bold", style: tmp4.fpDurationText, children: fpDurationText.toUpperCase() };
          obj6.children = hasOwnProperty(Text_Text.Text, obj7);
          tmp8 = hasOwnProperty(React4, obj6);
        }
        cResult[3] = fpDurationText;
        cResult[4] = isInReverseTrial;
        cResult[5] = tmp4.fpDurationPill;
        cResult[6] = tmp4.fpDurationText;
        cResult[7] = tmp8;
        tmp7 = tmp8;
      }
      const items1 = [tmp4.fractionalPremiumBanner, style];
      cResult[0] = style;
      cResult[1] = tmp4.fractionalPremiumBanner;
      cResult[2] = items1;
      tmp6 = items1;
    }
  : function BoostingCountDownPill(style) {
      ({ fpDurationText, isInReverseTrial } = style);
      const tmp = closure_7();
      let tmp4;
      if (!isInReverseTrial) {
        tmp4 = handlePress;
      }
      const obj = { activeOpacity: 0.7, onPress: tmp4, children: null };
      const obj2 = { style: null, children: null };
      const items = [tmp.fractionalPremiumBanner, style.style];
      obj2.style = items;
      let tmp2Result = !isInReverseTrial;
      if (!isInReverseTrial) {
        const obj3 = { style: tmp.fpDurationPill, children: null };
        const obj4 = { variant: "text-sm/bold", style: tmp.fpDurationText, children: fpDurationText.toUpperCase() };
        obj3.children = hasOwnProperty(Text_Text.Text, obj4);
        tmp2Result = hasOwnProperty(React4, obj3);
      }
      const items1 = [tmp2Result];
      const obj5 = { style: tmp.fpUnavailable, children: null };
      let prop;
      if (isInReverseTrial) {
        prop = tmp.fpUnavailableTextNoCountdown;
      }
      const obj6 = { variant: "text-md/normal", color: "interactive-text-active", style: prop, children: null };
      const intl = util.intl;
      obj6.children = intl.string(util.t["5nrJDO"]);
      obj5.children = hasOwnProperty(Text_Text.Text, obj6);
      items1[1] = hasOwnProperty(React4, obj5);
      obj2.children = items1;
      obj.children = timestampProducer(React4, obj2);
      return hasOwnProperty(React3, obj);
    };
