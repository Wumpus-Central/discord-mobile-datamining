// === Module 18147: RedesignDiscoverabilityLanding ===

// Module 18147 (RedesignDiscoverabilityLanding)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1631 */;
import Text_Text from "Text/Text" /* 5088 */;
import components_Button_Button from "components/Button/Button" /* 5379 */;
import NavigatorConstants from "NavigatorConstants" /* 6258 */;
import ContactSyncUtils from "ContactSyncUtils" /* 12402 */;
import LanternSpotIllustration from "LanternSpotIllustration" /* 18148 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: c3, ScrollView: closure_4 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(5092);
let obj2 = { container: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW }, topContainer: null, growContainer: null, illustration: null, title: null, subtitle: null, info: null };
let obj3 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj2.topContainer = { paddingTop: nativeDefault.space.PX_16 };
obj2.growContainer = { flexGrow: 2 };
let obj4 = { paddingTop: nativeDefault.space.PX_16 };
obj2.illustration = { alignItems: "center", marginBottom: nativeDefault.space.PX_32 };
let obj5 = { alignItems: "center", marginBottom: nativeDefault.space.PX_32 };
obj2.title = { textAlign: "center", marginBottom: nativeDefault.space.PX_16 };
let obj6 = { textAlign: "center", marginBottom: nativeDefault.space.PX_16 };
obj2.subtitle = { textAlign: "center", marginBottom: nativeDefault.space.PX_32 };
obj2.info = { paddingHorizontal: 16, marginTop: 8, marginBottom: 24, textAlign: "center" };
let closure_7 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj7 = { textAlign: "center", marginBottom: nativeDefault.space.PX_32 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/nuf/native/components/RedesignDiscoverabilityLanding.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function RedesignDiscoverabilityLanding(onNext) {
  const cResult = c.c(32);
  const tmp4 = closure_7();
  onNext = onNext.onNext;
  const sum = useSafeAreaInsetsDefault().bottom + 16;
  if (cResult[0] !== sum) {
    const obj2 = { flexGrow: 2, paddingTop: NavigatorConstants.NAV_BAR_HEIGHT + 32, paddingBottom: sum, paddingHorizontal: nativeDefault.space.PX_16 };
    cResult[0] = sum;
    cResult[1] = obj2;
    let tmp7 = obj2;
  } else {
    tmp7 = cResult[1];
  }
  if (cResult[2] !== tmp4.topContainer) {
    const obj3 = { style: tmp4.topContainer };
    const tmp11 = hasOwnProperty(React3, obj3);
    cResult[2] = tmp4.topContainer;
    cResult[3] = tmp11;
    let tmp8 = tmp11;
  } else {
    tmp8 = cResult[3];
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = util.intl;
    const stringResult = intl.string(util.t.n8nw6j);
    cResult[4] = stringResult;
    let tmp12 = stringResult;
  } else {
    tmp12 = cResult[4];
  }
  if (cResult[5] !== tmp4.title) {
    const obj4 = { style: tmp4.title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: tmp12 };
    const tmp16 = hasOwnProperty(Text_Text.Text, obj4);
    cResult[5] = tmp4.title;
    cResult[6] = tmp16;
    let tmp14 = tmp16;
  } else {
    tmp14 = cResult[6];
  }
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    const intl2 = util.intl;
    const stringResult1 = intl2.string(util.t.KMW0kP);
    cResult[7] = stringResult1;
    let tmp17 = stringResult1;
  } else {
    tmp17 = cResult[7];
  }
  if (cResult[8] !== tmp4.subtitle) {
    const obj5 = { variant: "text-sm/medium", color: "text-default", style: tmp4.subtitle, children: tmp17 };
    const tmp21 = hasOwnProperty(Text_Text.Text, obj5);
    cResult[8] = tmp4.subtitle;
    cResult[9] = tmp21;
    let tmp19 = tmp21;
  } else {
    tmp19 = cResult[9];
  }
  if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp24 = hasOwnProperty(LanternSpotIllustration.LanternSpotIllustration, { accessible: false });
    cResult[10] = tmp24;
    let tmp22 = tmp24;
  } else {
    tmp22 = cResult[10];
  }
  if (cResult[11] !== tmp4.illustration) {
    const obj6 = { style: tmp4.illustration, children: tmp22 };
    const tmp28 = hasOwnProperty(React3, obj6);
    cResult[11] = tmp4.illustration;
    cResult[12] = tmp28;
    let tmp25 = tmp28;
  } else {
    tmp25 = cResult[12];
  }
  if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
    const intl3 = util.intl;
    const stringResult2 = intl3.string(util.t.ci12MJ);
    cResult[13] = stringResult2;
    let tmp29 = stringResult2;
  } else {
    tmp29 = cResult[13];
  }
  if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
    const intl4 = util.intl;
    const obj7 = {
      learnMoreHook: function LearnMore(children, arg1) {
          return closure_1_5(Text_Text.Text, { onPress: ContactSyncUtils.handleOpenLearnMoreLink, variant: "text-sm/medium", color: "text-link", children }, arg1);
        }
    };
    const formatResult = intl4.format(util.t.VcSQ4n, obj7);
    cResult[14] = formatResult;
    let tmp31 = formatResult;
  } else {
    tmp31 = cResult[14];
  }
  if (cResult[15] !== tmp4.info) {
    const obj8 = { style: tmp4.info, variant: "text-sm/medium", color: "text-default", children: null };
    const items = [tmp29, " ", tmp31];
    obj8.children = items;
    const tmp35 = timestampProducer(Text_Text.Text, obj8);
    cResult[15] = tmp4.info;
    cResult[16] = tmp35;
    let tmp33 = tmp35;
  } else {
    tmp33 = cResult[16];
  }
  if (cResult[17] !== tmp4.growContainer) {
    const obj9 = { style: tmp4.growContainer };
    const tmp39 = hasOwnProperty(React3, obj9);
    cResult[17] = tmp4.growContainer;
    cResult[18] = tmp39;
    let tmp36 = tmp39;
  } else {
    tmp36 = cResult[18];
  }
  if (cResult[19] === Symbol.for("react.memo_cache_sentinel")) {
    const intl5 = util.intl;
    const stringResult3 = intl5.string(util.t.gHPk3I);
    cResult[19] = stringResult3;
    let tmp40 = stringResult3;
  } else {
    tmp40 = cResult[19];
  }
  if (cResult[20] !== onNext) {
    const obj10 = { variant: "primary", size: "lg", text: tmp40, onPress: onNext };
    const tmp44 = hasOwnProperty(components_Button_Button.Button, obj10);
    cResult[20] = onNext;
    cResult[21] = tmp44;
    let tmp42 = tmp44;
  } else {
    tmp42 = cResult[21];
  }
  if (cResult[22] === tmp4.container) {
    if (cResult[23] === tmp25) {
      if (cResult[24] === tmp33) {
        if (cResult[25] === tmp36) {
          if (cResult[26] === tmp42) {
            if (cResult[27] === tmp7) {
              if (cResult[28] === tmp8) {
                if (cResult[29] === tmp14) {
                  if (cResult[30] === tmp19) {
                    let tmp45 = cResult[31];
                  }
                  return tmp45;
                }
              }
            }
          }
        }
      }
    }
  }
  const obj11 = { style: tmp4.container, alwaysBounceVertical: false, contentContainerStyle: tmp7, children: null };
  const items1 = [tmp8, tmp14, tmp19, tmp25, tmp33, tmp36, tmp42];
  obj11.children = items1;
  const tmp46 = timestampProducer(React4, obj11);
  cResult[22] = tmp4.container;
  cResult[23] = tmp25;
  cResult[24] = tmp33;
  cResult[25] = tmp36;
  cResult[26] = tmp42;
  cResult[27] = tmp7;
  cResult[28] = tmp8;
  cResult[29] = tmp14;
  cResult[30] = tmp19;
  cResult[31] = tmp46;
  tmp45 = tmp46;
}) : (function RedesignDiscoverabilityLanding(onNext) {
  const tmp = closure_7();
  const obj = { style: tmp.container, alwaysBounceVertical: false, contentContainerStyle: { flexGrow: 2, paddingTop: NavigatorConstants.NAV_BAR_HEIGHT + 32, paddingBottom: useSafeAreaInsetsDefault().bottom + 16, paddingHorizontal: nativeDefault.space.PX_16 }, children: null };
  const items = [hasOwnProperty(React3, { style: tmp.topContainer }), , , , , , ];
  const obj4 = { style: tmp.title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
  const intl = util.intl;
  obj4.children = intl.string(util.t.n8nw6j);
  items[1] = hasOwnProperty(Text_Text.Text, obj4);
  const obj5 = { variant: "text-sm/medium", color: "text-default", style: tmp.subtitle, children: null };
  const intl2 = util.intl;
  obj5.children = intl2.string(util.t.KMW0kP);
  items[2] = hasOwnProperty(Text_Text.Text, obj5);
  const obj2 = { flexGrow: 2, paddingTop: NavigatorConstants.NAV_BAR_HEIGHT + 32, paddingBottom: useSafeAreaInsetsDefault().bottom + 16, paddingHorizontal: nativeDefault.space.PX_16 };
  const obj3 = { style: tmp.topContainer };
  items[3] = hasOwnProperty(React3, { style: tmp.illustration, children: hasOwnProperty(LanternSpotIllustration.LanternSpotIllustration, { accessible: false }) });
  const obj7 = { style: tmp.info, variant: "text-sm/medium", color: "text-default", children: null };
  const intl3 = util.intl;
  const items1 = [intl3.string(util.t.ci12MJ), " ", ];
  const intl4 = util.intl;
  items1[2] = intl4.format(util.t.VcSQ4n, {
    learnMoreHook: function LearnMore(children, arg1) {
      return closure_1_5(Text_Text.Text, { onPress: ContactSyncUtils.handleOpenLearnMoreLink, variant: "text-sm/medium", color: "text-link", children }, arg1);
    }
  });
  obj7.children = items1;
  items[4] = timestampProducer(Text_Text.Text, obj7);
  items[5] = hasOwnProperty(React3, { style: tmp.growContainer });
  const obj10 = { variant: "primary", size: "lg", text: null, onPress: null };
  const intl5 = util.intl;
  obj10.text = intl5.string(util.t.gHPk3I);
  obj10.onPress = onNext.onNext;
  items[6] = hasOwnProperty(components_Button_Button.Button, obj10);
  obj.children = items;
  return timestampProducer(React4, obj);
});