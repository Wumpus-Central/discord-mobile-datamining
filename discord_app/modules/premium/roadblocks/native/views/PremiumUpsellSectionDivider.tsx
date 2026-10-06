// discord_app/modules/premium/roadblocks/native/views/PremiumUpsellSectionDivider.tsx
import react2 from "../../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import ConstantsIOS from "../../../../../ConstantsIOS.tsx";
import LinearGradientDefault from "../../../../../../_runtime/05612_LinearGradient.js";
import LockIcon2 from "../../../../../design/components/Icon/native/redesign/generated/LockIcon.tsx";
import ColorConstants from "../../../../colors/native/ColorConstants.tsx";
import PremiumUpsellGradientBackground from "PremiumUpsellGradientBackground.tsx";
import react from "../../../../../../_runtime/00019_react.js";
import react_native from "../../../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../../../_runtime/metro/00002__.js";

let obj;

let c3;
let closure_4;
let metroImportDefault;
let metroRequire;
({ StyleSheet: c3, View: closure_4 } = react_native);
const Gradients = ColorConstants.Gradients;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let closure_8 = createStyles.createStyles((arg0) => {
  let container;
  let num2;
  let num4;
  let obj3;
  let rect;
  let num;
  if (arg0 === container.START) {
    num = 6;
  }
  container = { height: 28, flex: 1, justifyContent: "center", marginTop: num, marginBottom: num2 };
  num2 = undefined;
  if (arg0 === container.END) {
    num2 = 6;
  }
  const obj2 = {
    container,
    lockContainer: obj3,
    lockGradient: size,
    lock: { width: 16, height: 16, alignSelf: "center" },
    divider: { height: 1 },
    gradient: rect,
  };
  obj3 = { justifyContent: "center", alignItems: "center" };
  const merged = Object.assign(absoluteFillObject.absoluteFillObject);
  size = { width: 28, height: 28, justifyContent: "center", borderRadius: nativeDefault.radii.round };
  let num3;
  if (arg0 === container.START) {
    num3 = 0;
  }
  rect = { flex: 1, height: 14, left: 0, right: 0, position: "absolute", bottom: num3, top: num4 };
  num4 = undefined;
  if (arg0 === container.END) {
    num4 = 0;
  }
  return obj2;
});
const PremiumUpsellSectionDividerPosition = { START: 0, [0]: "START", END: 1, [1]: "END" };
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let LockIcon;
      let items;
      let obj5;
      let obj6;
      let position;
      let tmp23;
      let tmp5;
      let useTier0UpsellContent;
      obj = react2;
      const cResult = obj.c(19);
      ({ useTier0UpsellContent, position } = arg0);
      const tmp4 = closure_8(position);
      if (cResult[0] !== useTier0UpsellContent) {
        const obj2 = { useTier0UpsellContent };
        const tmp7 = metroRequire(PremiumUpsellGradientBackground.PremiumUpsellGradientBackground, obj2);
        cResult[0] = useTier0UpsellContent;
        cResult[1] = tmp7;
        tmp5 = tmp7;
      } else {
        tmp5 = cResult[1];
      }
      if (cResult[2] === tmp4.gradient) {
        let tmp8;
        let PREMIUM_TIER_2_TRI_COLOR;
        let tmp10;
        if (cResult[3] === tmp5) {
          tmp8 = cResult[4];
        }
        if (true === useTier0UpsellContent) {
          PREMIUM_TIER_2_TRI_COLOR = Gradients.PREMIUM_TIER_0;
          tmp10 = Gradients;
        } else {
          tmp10 = Gradients;
          PREMIUM_TIER_2_TRI_COLOR = Gradients.PREMIUM_TIER_2_TRI_COLOR;
        }
        if (cResult[5] === tmp4.divider) {
          let tmp12;
          if (cResult[6] === PREMIUM_TIER_2_TRI_COLOR) {
            tmp12 = cResult[7];
          }
          if (cResult[8] === position) {
            if (cResult[9] === tmp4.lock) {
              if (cResult[10] === tmp4.lockContainer) {
                if (cResult[11] === tmp4.lockGradient) {
                  let tmp17;
                  if (cResult[12] === useTier0UpsellContent) {
                    tmp17 = cResult[13];
                  }
                  if (cResult[14] === tmp4.container) {
                    if (cResult[15] === tmp8) {
                      if (cResult[16] === tmp12) {
                        let tmp24;
                        if (cResult[17] === tmp17) {
                          tmp24 = cResult[18];
                        }
                        return tmp24;
                      }
                    }
                  }
                  const obj3 = { style: tmp4.container, children: items };
                  items = [tmp8, tmp12, tmp17];
                  const tmp27 = metroImportDefault(React3, obj3);
                  cResult[14] = tmp4.container;
                  cResult[15] = tmp8;
                  cResult[16] = tmp12;
                  cResult[17] = tmp17;
                  cResult[18] = tmp27;
                  tmp24 = tmp27;
                }
              }
            }
          }
          let tmp20Result = position === obj.START;
          if (tmp20Result) {
            const obj4 = { style: tmp4.lockContainer, children: metroRequire(tmp23, obj5) };
            obj5 = {
              style: tmp4.lockGradient,
              start: ConstantsIOS.HorizontalGradient.START,
              end: ConstantsIOS.HorizontalGradient.END,
              colors: useTier0UpsellContent ? tmp10.PREMIUM_TIER_0 : tmp10.PREMIUM_TIER_2_TRI_COLOR,
              children: metroRequire(LockIcon, obj6),
            };
            tmp23 = LinearGradientDefault;
            obj6 = { color: nativeDefault.colors.WHITE, style: tmp4.lock };
            LockIcon = LockIcon2.LockIcon;
            tmp20Result = metroRequire(React3, obj4);
          }
          cResult[8] = position;
          cResult[9] = tmp4.lock;
          cResult[10] = tmp4.lockContainer;
          cResult[11] = tmp4.lockGradient;
          cResult[12] = useTier0UpsellContent;
          cResult[13] = tmp20Result;
          tmp17 = tmp20Result;
        }
        const obj7 = {
          style: tmp4.divider,
          start: ConstantsIOS.HorizontalGradient.START,
          end: ConstantsIOS.HorizontalGradient.END,
          colors: PREMIUM_TIER_2_TRI_COLOR,
        };
        const tmp15 = LinearGradientDefault;
        const tmp16 = metroRequire(tmp15, obj7);
        cResult[5] = tmp4.divider;
        cResult[6] = PREMIUM_TIER_2_TRI_COLOR;
        cResult[7] = tmp16;
        tmp12 = tmp16;
      }
      const obj8 = { style: tmp4.gradient, children: tmp5 };
      const tmp9 = metroRequire(React3, obj8);
      cResult[2] = tmp4.gradient;
      cResult[3] = tmp5;
      cResult[4] = tmp9;
      tmp8 = tmp9;
    }
  : (arg0) => {
      let LockIcon;
      let PREMIUM_TIER_2_TRI_COLOR;
      let items;
      let obj5;
      let obj6;
      let position;
      let tmp7Result;
      let tmp9;
      let useTier0UpsellContent;
      ({ useTier0UpsellContent, position } = arg0);
      const tmp = closure_8(position);
      obj = { style: tmp.container, children: items };
      items = [, ,];
      const obj2 = {
        style: tmp.gradient,
        children: metroRequire(PremiumUpsellGradientBackground.PremiumUpsellGradientBackground, {
          useTier0UpsellContent,
        }),
      };
      items[0] = metroRequire(React3, obj2);
      const obj3 = {
        style: tmp.divider,
        start: ConstantsIOS.HorizontalGradient.START,
        end: ConstantsIOS.HorizontalGradient.END,
        colors: PREMIUM_TIER_2_TRI_COLOR,
      };
      const tmp8 = LinearGradientDefault;
      if (true === useTier0UpsellContent) {
        PREMIUM_TIER_2_TRI_COLOR = Gradients.PREMIUM_TIER_0;
        tmp9 = Gradients;
      } else {
        tmp9 = Gradients;
        PREMIUM_TIER_2_TRI_COLOR = Gradients.PREMIUM_TIER_2_TRI_COLOR;
      }
      items[1] = metroRequire(tmp8, obj3);
      let tmp4Result = position === obj.START;
      if (tmp4Result) {
        const obj4 = { style: tmp.lockContainer, children: metroRequire(tmp7Result, obj5) };
        obj5 = {
          style: tmp.lockGradient,
          start: ConstantsIOS.HorizontalGradient.START,
          end: ConstantsIOS.HorizontalGradient.END,
          colors: useTier0UpsellContent ? tmp9.PREMIUM_TIER_0 : tmp9.PREMIUM_TIER_2_TRI_COLOR,
          children: metroRequire(LockIcon, obj6),
        };
        tmp7Result = LinearGradientDefault;
        obj6 = { color: nativeDefault.colors.WHITE, style: tmp.lock };
        LockIcon = LockIcon2.LockIcon;
        tmp4Result = metroRequire(React3, obj4);
      }
      items[2] = tmp4Result;
      return metroImportDefault(React3, obj);
    };
let size = size_mod;
const result = size.fileFinishedImporting("modules/premium/roadblocks/native/views/PremiumUpsellSectionDivider.tsx");

export default tmp5;
export const PREMIUM_UPSELL_SECTION_DIVIDER_HEIGHT = 28;
export const PREMIUM_UPSELL_SECTION_DIVIDER_MARGIN = 6;
export { PremiumUpsellSectionDividerPosition };
