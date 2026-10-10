// === Module 18497: GuildRoleSubscriptionTierEditStep ===

// Module 18497 (GuildRoleSubscriptionTierEditStep)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import useNavigation from "useNavigation" /* 1503 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1631 */;
import Text_Text from "Text/Text" /* 5088 */;
import components_Button_Button from "components/Button/Button" /* 5379 */;
import common_SafeAreaView from "common/SafeAreaView" /* 6813 */;
import FormSeparatorDefault from "FormSeparator" /* 15487 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_3 = ["scrollable"];
get_ActivityIndicator = fn(17);
({ View: metroRequire, ScrollView: closure_7 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(5092);
let obj2 = { container: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, height: "100%" }, scrollContainer: { flexGrow: 1 }, headerContainer: { position: "relative", paddingTop: 48, paddingBottom: 8, paddingHorizontal: 16, alignItems: "center" }, title: { marginTop: 12, textAlign: "center" }, subtitle: { marginTop: 8, textAlign: "center" }, separator: { marginTop: 24 }, footerContainer: { width: "100%", padding: 16 } };
let closure_10 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? (function Header(arg0) {
  const cResult = c.c(13);
  ({ description, title } = arg0);
  const tmp4 = closure_10();
  if (cResult[0] === tmp4.title) {
    if (cResult[1] === title) {
      let tmp5 = cResult[2];
    }
    if (cResult[3] === description) {
      if (cResult[4] === tmp4.subtitle) {
        let tmp7 = cResult[5];
      }
      if (cResult[6] !== tmp4.separator) {
        const obj2 = { style: tmp4.separator };
        const tmp13 = closure_1_8(FormSeparatorDefault, obj2);
        cResult[6] = tmp4.separator;
        cResult[7] = tmp13;
        let tmp10 = tmp13;
      } else {
        tmp10 = cResult[7];
      }
      if (cResult[8] === tmp4.headerContainer) {
        if (cResult[9] === tmp5) {
          if (cResult[10] === tmp7) {
            if (cResult[11] === tmp10) {
              let tmp14 = cResult[12];
            }
            return tmp14;
          }
        }
      }
      const obj3 = { top: true, style: tmp4.headerContainer, children: null };
      const items = [tmp5, tmp7, tmp10];
      obj3.children = items;
      const tmp16 = options(common_SafeAreaView.SafeAreaPaddingView, obj3);
      cResult[8] = tmp4.headerContainer;
      cResult[9] = tmp5;
      cResult[10] = tmp7;
      cResult[11] = tmp10;
      cResult[12] = tmp16;
      tmp14 = tmp16;
    }
    const obj4 = { style: tmp4.subtitle, variant: "text-sm/medium", color: "text-default", children: description };
    const tmp9 = closure_1_8(Text_Text.Text, obj4);
    cResult[3] = description;
    cResult[4] = tmp4.subtitle;
    cResult[5] = tmp9;
    tmp7 = tmp9;
  }
  const tmp6 = closure_1_8(Text_Text.Text, { style: tmp4.title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: title });
  cResult[0] = tmp4.title;
  cResult[1] = title;
  cResult[2] = tmp6;
  tmp5 = tmp6;
  const obj5 = { style: tmp4.title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: title };
}) : (function Header(arg0) {
  ({ description, title } = arg0);
  const tmp = closure_10();
  const obj = { top: true, style: tmp.headerContainer, children: null };
  const items = [closure_1_8(Text_Text.Text, { style: tmp.title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: title }), closure_1_8(Text_Text.Text, { style: tmp.subtitle, variant: "text-sm/medium", color: "text-default", children: description }), closure_1_8(FormSeparatorDefault, { style: tmp.separator })];
  obj.children = items;
  return options(common_SafeAreaView.SafeAreaPaddingView, obj);
});
ReactCompilerGating = fn(558);
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? (function Footer(canProceedToNextStep) {
  const cResult = c.c(15);
  ({ nextStep, onProceed, submitting } = canProceedToNextStep);
  const tmp4 = closure_10();
  if (cResult[0] !== nextStep) {
    if (null == nextStep) {
      const intl2 = util.intl;
      let stringResult = intl2.string(util.t["4cAsqe"]);
    } else {
      const intl = util.intl;
      stringResult = intl.string(util.t["bm6P5/"]);
    }
    cResult[0] = nextStep;
    cResult[1] = stringResult;
  } else {
    const bottom = useSafeAreaInsetsDefault().bottom;
    if (cResult[2] !== bottom) {
      const obj2 = { paddingBottom: bottom };
      cResult[2] = bottom;
      cResult[3] = obj2;
      let tmp10 = obj2;
    } else {
      tmp10 = cResult[3];
    }
    if (cResult[4] === tmp4.footerContainer) {
      if (cResult[5] === tmp10) {
        let tmp11 = cResult[6];
      }
      if (cResult[7] === tmp5) {
        if (cResult[8] === onProceed) {
          if (cResult[9] === submitting) {
            if (cResult[10] === tmp12) {
              let tmp13 = cResult[11];
            }
            if (cResult[12] === tmp11) {
              if (cResult[13] === tmp13) {
                let tmp16 = cResult[14];
              }
              return tmp16;
            }
            const obj3 = { style: tmp11, children: tmp13 };
            const tmp19 = closure_1_8(timestampProducer, obj3);
            cResult[12] = tmp11;
            cResult[13] = tmp13;
            cResult[14] = tmp19;
            tmp16 = tmp19;
          }
        }
      }
      const obj4 = { loading: submitting, disabled: !canProceedToNextStep.canProceedToNextStep, text: tmp5, onPress: onProceed };
      const tmp15 = closure_1_8(components_Button_Button.Button, obj4);
      cResult[7] = tmp5;
      cResult[8] = onProceed;
      cResult[9] = submitting;
      cResult[10] = !canProceedToNextStep.canProceedToNextStep;
      cResult[11] = tmp15;
      tmp13 = tmp15;
    }
    const items = [tmp4.footerContainer, tmp10];
    cResult[4] = tmp4.footerContainer;
    cResult[5] = tmp10;
    cResult[6] = items;
    tmp11 = items;
  }
}) : (function Footer(arg0) {
  ({ canProceedToNextStep, nextStep, onProceed, submitting } = arg0);
  if (null == nextStep) {
    const intl2 = util.intl;
    let stringResult = intl2.string(util.t["4cAsqe"]);
    let tmp5 = require;
  } else {
    const intl = util.intl;
    stringResult = intl.string(util.t["bm6P5/"]);
    tmp5 = require;
  }
  const obj = { style: null, children: null };
  const items = [closure_10().footerContainer, ];
  const tmp = closure_10();
  items[1] = { paddingBottom: useSafeAreaInsetsDefault().bottom };
  obj.style = items;
  obj.children = closure_1_8(tmp5(5379).Button, { loading: submitting, disabled: !canProceedToNextStep, text: stringResult, onPress: onProceed });
  return closure_1_8(timestampProducer, obj);
});
ReactCompilerGating = fn(558);
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, height: "100%" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionTierEditStep.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function GuildRoleSubscriptionTierEditStep(scrollable) {
  const cResult = c.c(30);
  if (cResult[0] !== scrollable) {
    scrollable = scrollable.scrollable;
    const tmp8 = _objectWithoutProperties(scrollable, closure_3);
    cResult[0] = scrollable;
    cResult[1] = tmp8;
    cResult[2] = scrollable;
    let tmp5 = scrollable;
    let tmp4 = tmp8;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
  }
  let container = closure_10();
  const navigation = useNavigation.useNavigation();
  const nextStep = tmp4.nextStep;
  const onProceed = tmp4.onProceed;
  if (cResult[3] === navigation) {
    if (cResult[4] === nextStep) {
      if (cResult[5] === onProceed) {
        let tmp10 = cResult[6];
      }
      if (false !== tmp5) {
        if (cResult[7] !== tmp4) {
          const obj2 = {};
          const merged = Object.assign(tmp4);
          const tmp35 = closure_1_8(closure_11, obj2);
          cResult[7] = tmp4;
          cResult[8] = tmp35;
          let tmp29 = tmp35;
        } else {
          tmp29 = cResult[8];
        }
        if (cResult[9] === tmp4.children) {
          if (cResult[10] === container.scrollContainer) {
            let tmp36 = cResult[11];
          }
          if (cResult[12] === tmp10) {
            if (cResult[13] === tmp4) {
              let tmp40 = cResult[14];
            }
            if (cResult[15] === container.container) {
              if (cResult[16] === tmp29) {
                if (cResult[17] === tmp36) {
                }
              }
            }
            const obj3 = { style: container.container, children: null };
            const items = [tmp29, tmp36, tmp40];
            obj3.children = items;
            const tmp50 = options(timestampProducer, obj3);
            container = container.container;
            cResult[15] = container;
            cResult[16] = tmp29;
            class S {
              constructor() {
                if (null != onProceed) {
                  tmpResult = tmp();
                } else if (null != nextStep) {
                  tmp3 = closure_0;
                  arr = closure_0.push(tmp2);
                }
                return;
              }
            }
            cResult[18] = tmp40;
            cResult[19] = tmp50;
          }
          const obj4 = {};
          const merged1 = Object.assign(tmp4);
          obj4.onProceed = tmp10;
          const tmp46 = closure_1_8(closure_12, obj4);
          cResult[12] = tmp10;
          cResult[13] = tmp4;
          cResult[14] = tmp46;
          tmp40 = tmp46;
        }
        const obj5 = { keyboardShouldPersistTaps: "handled", showsVerticalScrollIndicator: false, alwaysBounceVertical: false, contentContainerStyle: container.scrollContainer, children: tmp4.children };
        const tmp39 = closure_1_8(React5, obj5);
        cResult[9] = tmp4.children;
        cResult[10] = container.scrollContainer;
        cResult[11] = tmp39;
        tmp36 = tmp39;
      } else {
        if (cResult[20] !== tmp4) {
          const obj6 = {};
          const merged2 = Object.assign(tmp4);
          const tmp17 = closure_1_8(closure_11, obj6);
          cResult[20] = tmp4;
          cResult[21] = tmp17;
          let tmp11 = tmp17;
        } else {
          tmp11 = cResult[21];
        }
        if (cResult[22] === tmp10) {
          if (cResult[23] === tmp4) {
            let tmp18 = cResult[24];
          }
          if (cResult[25] === tmp4.children) {
            if (cResult[26] === container.container) {
              if (cResult[27] === tmp11) {
                if (cResult[28] === tmp18) {
                  let tmp25 = cResult[29];
                }
                return tmp25;
              }
            }
          }
          const obj7 = { style: container.container, children: null };
          const items1 = [tmp11, tmp4.children, tmp18];
          obj7.children = items1;
          const tmp28 = options(timestampProducer, obj7);
          cResult[25] = tmp4.children;
          cResult[26] = container.container;
          cResult[27] = tmp11;
          class S {
            constructor() {
              if (null != onProceed) {
                tmpResult = tmp();
              } else if (null != nextStep) {
                tmp3 = closure_0;
                arr = closure_0.push(tmp2);
              }
              return;
            }
          }
          cResult[28] = tmp18;
          cResult[29] = tmp28;
          tmp25 = tmp28;
        }
        const obj8 = {};
        const merged3 = Object.assign(tmp4);
        obj8.onProceed = tmp10;
        const tmp24 = closure_1_8(closure_12, obj8);
        cResult[22] = tmp10;
        cResult[23] = tmp4;
        cResult[24] = tmp24;
        tmp18 = tmp24;
      }
    }
  }
  class S {
    constructor() {
      if (null != onProceed) {
        tmpResult = tmp();
      } else if (null != nextStep) {
        tmp3 = closure_0;
        arr = closure_0.push(tmp2);
      }
      return;
    }
  }
  cResult[3] = navigation;
  cResult[4] = nextStep;
  cResult[5] = onProceed;
  cResult[6] = S;
  tmp10 = S;
  const tmpResult = useNavigation;
}) : (function GuildRoleSubscriptionTierEditStep(scrollable) {
  const merged = Object.assign(scrollable, Object.assign({ scrollable: 0 }));
  const tmp2 = closure_10();
  const navigation = useNavigation.useNavigation();
  const nextStep = merged.nextStep;
  const onProceed = merged.onProceed;
  const items = [navigation, nextStep, onProceed];
  const callback = noop.useCallback(() => {
    if (null != onProceed) {
      tmp();
    } else if (null != nextStep) {
      navigation.push(tmp2);
    }
  }, items);
  if (false !== scrollable.scrollable) {
    const obj2 = { style: tmp2.container, children: null };
    const obj3 = {};
    const merged1 = Object.assign(merged);
    const items1 = [closure_1_8(closure_11, obj3), , ];
    const obj4 = { keyboardShouldPersistTaps: "handled", showsVerticalScrollIndicator: false, alwaysBounceVertical: false, contentContainerStyle: tmp2.scrollContainer, children: merged.children };
    items1[1] = closure_1_8(React5, obj4);
    const obj5 = {};
    const merged2 = Object.assign(merged);
    obj5.onProceed = callback;
    items1[2] = closure_1_8(closure_12, obj5);
    obj2.children = items1;
    let obj6 = obj2;
  } else {
    obj6 = { style: tmp2.container, children: null };
    const obj7 = {};
    const merged3 = Object.assign(merged);
    const items2 = [closure_1_8(closure_11, obj7), merged.children, ];
    const obj8 = {};
    const merged4 = Object.assign(merged);
    obj8.onProceed = callback;
    items2[2] = closure_1_8(closure_12, obj8);
    obj6.children = items2;
  }
  return options(timestampProducer, obj6);
});