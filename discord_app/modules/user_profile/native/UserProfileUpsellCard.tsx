// === Module 14446: UserProfileUpsellCard ===

// Module 14446 (UserProfileUpsellCard)
import nativeDefault from "native" /* 587 */;
import ConstantsIOS from "ConstantsIOS" /* 1105 */;
import LinearGradientDefault from "LinearGradient" /* 5605 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ View: c3, ScrollView: closure_4 } = get_ActivityIndicator);
const Gradients = fn(6938).Gradients;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4890);
let obj2 = { upsellButton: { marginTop: 8, flexShrink: 0, borderRadius: nativeDefault.radii.round, gap: 4 }, titleContainer: { flexDirection: "row", alignItems: "center", gap: 4, marginBottom: 4 }, linearGradient: { width: "100%", height: "100%", position: "absolute", overflow: "hidden" }, outer: null, scroll: null, inner: null };
let obj3 = { marginTop: 8, flexShrink: 0, borderRadius: nativeDefault.radii.round, gap: 4 };
obj2.outer = { marginHorizontal: fn(6707).PROFILE_SIDE_PADDING - 1 };
let obj4 = { marginHorizontal: fn(6707).PROFILE_SIDE_PADDING - 1 };
obj2.scroll = { borderRadius: nativeDefault.radii.lg, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
obj2.inner = { paddingVertical: 12, paddingHorizontal: 14 };
let closure_8 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj5 = { borderRadius: nativeDefault.radii.lg, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileUpsellCard.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = require("c").c(34);
  ({ style, children, ctaText, headerText, showLinearGradient, cardStyle, contentStyle, ctaStyle, disabled, onPress } = arg0);
  const tmp4 = closure_8();
  _require = tmp4;
  if (cResult[0] === style) {
    if (cResult[3] === cardStyle) {
      if (cResult[6] === contentStyle) {
        if (cResult[9] === headerText) {
          if (cResult[12] === ctaStyle) {
            if (cResult[13] === tmp4.upsellButton) {
              let tmp13 = cResult[14];
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
              const obj2 = { style: tmp13, disabled, onPress, text: ctaText, color: tmp(1188).ButtonColors.GREEN, renderIcon: G, renderLinearGradient: tmp16 };
              const tmp20 = closure_6(tmp(1188).ShinyButton, obj2);
              cResult[19] = ctaText;
              cResult[20] = disabled;
              cResult[21] = onPress;
              cResult[22] = tmp13;
              cResult[23] = tmp16;
              cResult[24] = tmp20;
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
          const obj3 = { style: tmp4.titleContainer, children: null };
          const obj4 = { color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, size: "xs" };
          const items1 = [closure_6(tmp(8313).NitroWheelIcon, obj4), ];
          const obj5 = { variant: "heading-sm/bold", children: headerText };
          items1[1] = closure_6(tmp(4886).Text, obj5);
          obj3.children = items1;
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
  let obj = require("c");
}) : ((headerText) => {
  headerText = headerText.headerText;
  ({ style, children, ctaText, showLinearGradient, cardStyle, contentStyle, ctaStyle, disabled, onPress } = headerText);
  const tmp = closure_8();
  _require = tmp;
  let obj = { borderWidth: 1, style: null, direction: require("native").GradientBorder.Direction.HORIZONTAL, colors: Gradients.PREMIUM_TIER_2, borderRadius: nativeDefault.radii.lg, children: null };
  let items = [tmp.outer, style];
  obj.style = items;
  const obj2 = { bounces: false, style: null, contentContainerStyle: null, children: null };
  const items1 = [tmp.scroll, cardStyle];
  obj2.style = items1;
  const items2 = [tmp.inner, contentStyle];
  obj2.contentContainerStyle = items2;
  let tmp6Result = null;
  if (null != headerText) {
    const obj3 = { style: tmp.titleContainer, children: null };
    const obj4 = { color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, size: "xs" };
    const items3 = [closure_6(tmp3(8313).NitroWheelIcon, obj4), ];
    const obj5 = { variant: "heading-sm/bold", children: headerText };
    items3[1] = closure_6(tmp3(4886).Text, obj5);
    obj3.children = items3;
    tmp6Result = closure_7(closure_3, obj3);
  }
  const items4 = [tmp6Result, children, ];
  const obj6 = {
    style: null,
    disabled,
    onPress,
    text: ctaText,
    color: require("native").ButtonColors.GREEN,
    renderIcon() {
      return closure_1_6(closure_0(dependencyMap[9]).NitroWheelIcon, { color: "white", size: "xs" });
    },
    renderLinearGradient: null
  };
  const items5 = [tmp.upsellButton, ctaStyle];
  obj6.style = items5;
  let fn;
  if (showLinearGradient) {
    fn = () => {
      const obj = { style: null, start: ConstantsIOS.HorizontalGradient.START, end: ConstantsIOS.HorizontalGradient.END, colors: Gradients.PREMIUM_TIER_2_TRI_COLOR };
      const items = [closure_0.linearGradient];
      obj.style = items;
      return timestampProducer(LinearGradientDefault, obj);
    };
  }
  obj6.renderLinearGradient = fn;
  items4[2] = closure_6(require("native").ShinyButton, obj6);
  obj2.children = items4;
  obj.children = closure_7(closure_4, obj2);
  return closure_6(require("native").GradientBorder, obj);
});