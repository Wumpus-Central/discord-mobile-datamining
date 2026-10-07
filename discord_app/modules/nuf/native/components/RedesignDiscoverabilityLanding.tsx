// === Module 17637: RedesignDiscoverabilityLanding ===

// Module 17637 (RedesignDiscoverabilityLanding)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1618 */;
import Text_Text from "Text/Text" /* 4892 */;
import components_Button_Button from "components/Button/Button" /* 5601 */;
import FastImageDefault from "FastImage" /* 5981 */;
import NavigatorConstants from "NavigatorConstants" /* 6075 */;
import ContactSyncUtils from "ContactSyncUtils" /* 12344 */;
import _modDef12434 from "module_12434" /* 12434 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: c3, ScrollView: closure_4 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4896);
let obj2 = { container: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW }, topContainer: null, growContainer: null, image: null, title: null, subtitle: null, info: null };
let obj3 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj2.topContainer = { paddingTop: nativeDefault.space.PX_16 };
obj2.growContainer = { flexGrow: 2 };
let obj4 = { paddingTop: nativeDefault.space.PX_16 };
obj2.image = { width: "100%", marginBottom: nativeDefault.space.PX_32 };
let obj5 = { width: "100%", marginBottom: nativeDefault.space.PX_32 };
obj2.title = { textAlign: "center", marginBottom: nativeDefault.space.PX_16 };
let obj6 = { textAlign: "center", marginBottom: nativeDefault.space.PX_16 };
obj2.subtitle = { textAlign: "center", marginBottom: nativeDefault.space.PX_32 };
obj2.info = { paddingHorizontal: 16, marginTop: 8, marginBottom: 24, textAlign: "center" };
let closure_7 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj7 = { textAlign: "center", marginBottom: nativeDefault.space.PX_32 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/nuf/native/components/RedesignDiscoverabilityLanding.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((onNext) => {
  const cResult = c.c(31);
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
  if (cResult[10] !== tmp4.image) {
    const obj6 = { resizeMode: "contain", style: tmp4.image, source: _modDef12434 };
    const tmp25 = hasOwnProperty(FastImageDefault, obj6);
    cResult[10] = tmp4.image;
    cResult[11] = tmp25;
    let tmp22 = tmp25;
    const tmp5Result = FastImageDefault;
  } else {
    tmp22 = cResult[11];
  }
  if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
    const intl3 = util.intl;
    const stringResult2 = intl3.string(util.t.ci12MJ);
    cResult[12] = stringResult2;
    let tmp26 = stringResult2;
  } else {
    tmp26 = cResult[12];
  }
  if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
    const intl4 = util.intl;
    const obj7 = {
      learnMoreHook(children, arg1) {
          return closure_1_5(Text_Text.Text, { onPress: ContactSyncUtils.handleOpenLearnMoreLink, variant: "text-sm/medium", color: "text-link", children }, arg1);
        }
    };
    const formatResult = intl4.format(util.t.VcSQ4n, obj7);
    cResult[13] = formatResult;
    let tmp28 = formatResult;
  } else {
    tmp28 = cResult[13];
  }
  if (cResult[14] !== tmp4.info) {
    const obj8 = { style: tmp4.info, variant: "text-sm/medium", color: "text-default", children: null };
    const items = [tmp26, " ", tmp28];
    obj8.children = items;
    const tmp32 = timestampProducer(Text_Text.Text, obj8);
    cResult[14] = tmp4.info;
    cResult[15] = tmp32;
    let tmp30 = tmp32;
  } else {
    tmp30 = cResult[15];
  }
  if (cResult[16] !== tmp4.growContainer) {
    const obj9 = { style: tmp4.growContainer };
    const tmp36 = hasOwnProperty(React3, obj9);
    cResult[16] = tmp4.growContainer;
    cResult[17] = tmp36;
    let tmp33 = tmp36;
  } else {
    tmp33 = cResult[17];
  }
  if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
    const intl5 = util.intl;
    const stringResult3 = intl5.string(util.t.gHPk3I);
    cResult[18] = stringResult3;
    let tmp37 = stringResult3;
  } else {
    tmp37 = cResult[18];
  }
  if (cResult[19] !== onNext) {
    const obj10 = { variant: "primary", size: "lg", text: tmp37, onPress: onNext };
    const tmp41 = hasOwnProperty(components_Button_Button.Button, obj10);
    cResult[19] = onNext;
    cResult[20] = tmp41;
    let tmp39 = tmp41;
  } else {
    tmp39 = cResult[20];
  }
  if (cResult[21] === tmp4.container) {
    if (cResult[22] === tmp22) {
      if (cResult[23] === tmp30) {
        if (cResult[24] === tmp33) {
          if (cResult[25] === tmp39) {
            if (cResult[26] === tmp7) {
              if (cResult[27] === tmp8) {
                if (cResult[28] === tmp14) {
                  if (cResult[29] === tmp19) {
                    let tmp42 = cResult[30];
                  }
                  return tmp42;
                }
              }
            }
          }
        }
      }
    }
  }
  const obj11 = { style: tmp4.container, alwaysBounceVertical: false, contentContainerStyle: tmp7, children: null };
  const items1 = [tmp8, tmp14, tmp19, tmp22, tmp30, tmp33, tmp39];
  obj11.children = items1;
  const tmp43 = timestampProducer(React4, obj11);
  cResult[21] = tmp4.container;
  cResult[22] = tmp22;
  cResult[23] = tmp30;
  cResult[24] = tmp33;
  cResult[25] = tmp39;
  cResult[26] = tmp7;
  cResult[27] = tmp8;
  cResult[28] = tmp14;
  cResult[29] = tmp19;
  cResult[30] = tmp43;
  tmp42 = tmp43;
}) : ((onNext) => {
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
  const obj6 = { resizeMode: "contain", style: tmp.image, source: null };
  const obj2 = { flexGrow: 2, paddingTop: NavigatorConstants.NAV_BAR_HEIGHT + 32, paddingBottom: useSafeAreaInsetsDefault().bottom + 16, paddingHorizontal: nativeDefault.space.PX_16 };
  const obj3 = { style: tmp.topContainer };
  obj6.source = _modDef12434;
  items[3] = hasOwnProperty(FastImageDefault, obj6);
  const obj7 = { style: tmp.info, variant: "text-sm/medium", color: "text-default", children: null };
  const intl3 = util.intl;
  const items1 = [intl3.string(util.t.ci12MJ), " ", ];
  const intl4 = util.intl;
  items1[2] = intl4.format(util.t.VcSQ4n, {
    learnMoreHook(children, arg1) {
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