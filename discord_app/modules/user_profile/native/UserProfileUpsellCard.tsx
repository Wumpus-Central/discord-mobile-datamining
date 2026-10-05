// discord_app/modules/user_profile/native/UserProfileUpsellCard.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import ConstantsIOS from "../../../ConstantsIOS.tsx";
import LinearGradientDefault from "../../../../_runtime/05605_LinearGradient.js";
import Constants from "Constants.tsx";
import ColorConstants from "../../colors/native/ColorConstants.tsx";
import react from "../../../../_runtime/00019_react.js";
import react_native from "../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require;

let c3;
let closure_4;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
({ View: c3, ScrollView: closure_4 } = react_native);
const PROFILE_SIDE_PADDING = Constants.PROFILE_SIDE_PADDING;
const Gradients = ColorConstants.Gradients;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = {
  upsellButton: obj2,
  titleContainer: { flexDirection: "row", alignItems: "center", gap: 4, marginBottom: 4 },
  linearGradient: { width: "100%", height: "100%", position: "absolute", overflow: "hidden" },
  outer: obj3,
  scroll: obj4,
  inner: { paddingVertical: 12, paddingHorizontal: 14 },
};
obj2 = { marginTop: 8, flexShrink: 0, borderRadius: nativeDefault.radii.round, gap: 4 };
createStyles = createStyles.createStyles;
obj3 = { marginHorizontal: PROFILE_SIDE_PADDING - 1 };
obj4 = { borderRadius: nativeDefault.radii.lg, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
let closure_8 = createStyles(obj);
const tmp6 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let cardStyle;
      let children;
      let closure_0;
      let contentStyle;
      let ctaStyle;
      let ctaText;
      let disabled;
      let headerText;
      let items1;
      let onPress;
      let showLinearGradient;
      let style;
      let tmp = _require;
      let obj = require("react");
      const cResult = obj.c(34);
      ({
        style,
        children,
        ctaText,
        headerText,
        showLinearGradient,
        cardStyle,
        contentStyle,
        ctaStyle,
        disabled,
        onPress,
      } = arg0);
      const tmp4 = closure_8();
      _require = tmp4;
      if (cResult[0] === style) {
        if (cResult[3] === cardStyle) {
          if (cResult[6] === contentStyle) {
            if (cResult[9] === headerText) {
              if (cResult[12] === ctaStyle) {
                let tmp13;
                if (cResult[13] === tmp4.upsellButton) {
                  tmp13 = cResult[14];
                }
                const _Symbol = Symbol;
                if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
                  class G {
                    constructor() {
                      return closure_1_6(closure_0(closure_1_2[9]).NitroWheelIcon, { color: "white", size: "xs" });
                    }
                  }
                  cResult[15] = G;
                } else {
                  class G {
                    constructor() {
                      return closure_1_6(closure_0(closure_1_2[9]).NitroWheelIcon, { color: "white", size: "xs" });
                    }
                  }
                }
                if (cResult[16] === showLinearGradient) {
                  class G {
                    constructor() {
                      return closure_1_6(closure_0(closure_1_2[9]).NitroWheelIcon, { color: "white", size: "xs" });
                    }
                  }
                  if (cResult[19] === ctaText) {
                    class G {
                      constructor() {
                        return closure_1_6(closure_0(closure_1_2[9]).NitroWheelIcon, { color: "white", size: "xs" });
                      }
                    }
                  }
                  const obj2 = {
                    style: tmp13,
                    disabled,
                    onPress,
                    text: ctaText,
                    color: tmp(1188).ButtonColors.GREEN,
                    renderIcon: G,
                    renderLinearGradient: tmp16,
                  };
                  const ShinyButton = tmp(1188).ShinyButton;
                  cResult[19] = ctaText;
                  cResult[20] = disabled;
                  cResult[21] = onPress;
                  cResult[22] = tmp13;
                  cResult[23] = tmp16;
                  cResult[24] = closure_6(ShinyButton, obj2);
                  const tmp20 = closure_6(ShinyButton, obj2);
                }
                if (showLinearGradient) {
                  class G {
                    constructor() {
                      return closure_1_6(closure_0(closure_1_2[9]).NitroWheelIcon, { color: "white", size: "xs" });
                    }
                  }
                }
                cResult[16] = showLinearGradient;
                cResult[17] = tmp4.linearGradient;
                cResult[18] = undefined;
              }
              let items = [tmp4.upsellButton, ctaStyle];
              cResult[12] = ctaStyle;
              cResult[13] = tmp4.upsellButton;
              cResult[14] = items;
              tmp13 = items;
            }
            let tmp9 = null;
            if (null != headerText) {
              class G {
                constructor() {
                  return closure_1_6(closure_0(closure_1_2[9]).NitroWheelIcon, { color: "white", size: "xs" });
                }
              }
              const obj3 = { style: tmp4.titleContainer, children: items1 };
              const obj4 = { color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, size: "xs" };
              const NitroWheelIcon = tmp(8313).NitroWheelIcon;
              items1 = [closure_6(NitroWheelIcon, obj4)];
              const obj5 = { variant: "heading-sm/bold", children: headerText };
              items1[1] = closure_6(tmp(4886).Text, obj5);
              tmp9 = closure_7(closure_3, obj3);
            }
            cResult[9] = headerText;
            cResult[10] = tmp4.titleContainer;
            cResult[11] = tmp9;
          }
          const items2 = [tmp4.inner, contentStyle];
          cResult[6] = contentStyle;
          cResult[7] = tmp4.inner;
          cResult[8] = items2;
        }
        const items3 = [tmp4.scroll, cardStyle];
        cResult[3] = cardStyle;
        cResult[4] = tmp4.scroll;
        cResult[5] = items3;
      }
      const items4 = [tmp4.outer, style];
      cResult[0] = style;
      cResult[1] = tmp4.outer;
      cResult[2] = items4;
    }
  : (headerText) => {
      let cardStyle;
      let children;
      let closure_0;
      let contentStyle;
      let ctaStyle;
      let ctaText;
      let disabled;
      let fn;
      let items;
      let items1;
      let items2;
      let items3;
      let items4;
      let items5;
      let obj2;
      let onPress;
      let showLinearGradient;
      let style;
      headerText = headerText.headerText;
      ({ style, children, ctaText, showLinearGradient, cardStyle, contentStyle, ctaStyle, disabled, onPress } =
        headerText);
      let tmp = closure_8();
      _require = tmp;
      let obj = {
        borderWidth: 1,
        style: items,
        direction: require("native").GradientBorder.Direction.HORIZONTAL,
        colors: Gradients.PREMIUM_TIER_2,
        borderRadius: nativeDefault.radii.lg,
        children: closure_7(closure_4, obj2),
      };
      items = [tmp.outer, style];
      const GradientBorder = require("native").GradientBorder;
      obj2 = { bounces: false, style: items1, contentContainerStyle: items2, children: items4 };
      items1 = [tmp.scroll, cardStyle];
      items2 = [tmp.inner, contentStyle];
      let tmp6Result = null;
      if (null != headerText) {
        const obj3 = { style: tmp.titleContainer, children: items3 };
        const obj4 = { color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, size: "xs" };
        const NitroWheelIcon = tmp3(8313).NitroWheelIcon;
        items3 = [closure_6(NitroWheelIcon, obj4)];
        const obj5 = { variant: "heading-sm/bold", children: headerText };
        items3[1] = closure_6(require("Text/Text").Text, obj5);
        tmp6Result = closure_7(closure_3, obj3);
      }
      items4 = [tmp6Result, children];
      const obj6 = {
        style: items5,
        disabled,
        onPress,
        text: ctaText,
        color: require("native").ButtonColors.GREEN,
        renderIcon() {
          return closure_1_6(closure_0(dependencyMap[9]).NitroWheelIcon, { color: "white", size: "xs" });
        },
        renderLinearGradient: fn,
      };
      items5 = [tmp.upsellButton, ctaStyle];
      const ShinyButton = tmp3(1188).ShinyButton;
      fn = undefined;
      if (showLinearGradient) {
        fn = () => {
          let items;
          const obj = {
            style: items,
            start: ConstantsIOS.HorizontalGradient.START,
            end: ConstantsIOS.HorizontalGradient.END,
            colors: Gradients.PREMIUM_TIER_2_TRI_COLOR,
          };
          items = [closure_0.linearGradient];
          const tmp = LinearGradientDefault;
          return metroRequire(tmp, obj);
        };
      }
      items4[2] = closure_6(ShinyButton, obj6);
      return closure_6(GradientBorder, obj);
    };
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileUpsellCard.tsx");

export default tmp6;
