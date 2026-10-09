// === Module 7694: AgeVerificationMethodsContainer ===

// Module 7694 (AgeVerificationMethodsContainer)
import nativeDefault from "native" /* 587 */;
import MonitoringAgentDefault from "MonitoringAgent" /* 5726 */;
import MetricEvents from "MetricEvents" /* 5731 */;
import noop from "module_19" /* 19 */;

require = fn;
const VerificationMethod = fn(5915).VerificationMethod;
const SafetyHubLinks = fn(5922).SafetyHubLinks;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(5091);
let obj2 = { content: { marginTop: nativeDefault.space.PX_8 }, errorContainer: null, noMethodsText: null, buttonGroup: null };
let obj3 = { marginTop: nativeDefault.space.PX_8 };
obj2.errorContainer = { marginTop: nativeDefault.space.PX_24, marginBottom: nativeDefault.space.PX_24 };
let obj4 = { marginTop: nativeDefault.space.PX_24, marginBottom: nativeDefault.space.PX_24 };
obj2.noMethodsText = { paddingHorizontal: nativeDefault.space.PX_40, textAlign: "center" };
obj2.buttonGroup = { paddingVertical: 0 };
let closure_8 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj5 = { paddingHorizontal: nativeDefault.space.PX_40, textAlign: "center" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/age_assurance/native/AgeVerificationMethodsContainer.tsx");

export const AgeVerificationMethodsContainer = ReactCompilerGating.isReactCompilerEnabled() ? (function AgeVerificationMethodsContainer(ageVerificationMethods) {
  const cResult = prop(576).c(20);
  prop = ageVerificationMethods.ageVerificationMethods;
  noMethodsText = ageVerificationMethods.modalSessionId;
  const tmp4 = closure_8();
  const obj = prop(576);
  const isSuspendedUser = prop(5928).useIsSuspendedUser();
  if (cResult[0] !== prop) {
    const fn = function p() {
      let someResult;
      if (prop != null) {
        someResult = prop.some((id) => id.id === constants.GOOGLE_WALLET);
      }
      if (someResult) {
        const obj3 = { name: MetricEvents.MetricEvents.GOOGLE_WALLET_METHOD_IMPRESSION };
        MonitoringAgentDefault.increment(obj3);
      }
    };
    const items = [prop];
    cResult[0] = prop;
    cResult[1] = fn;
    cResult[2] = items;
    let tmp7 = items;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[1];
    tmp7 = cResult[2];
  }
  const effect = noop.useEffect(tmp6, tmp7);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    let obj3 = { messageType: tmp(1200).HelpMessageTypes.INFO, textColor: "text-feedback-info", textVariant: "text-sm/medium", children: null };
    const intl = tmp(1126).intl;
    obj3.children = intl.string(tmp(1126).t.El4aXl);
    const tmp11 = closure_6(tmp(1200).HelpMessage, obj3);
    cResult[3] = tmp11;
    let tmp9 = tmp11;
  } else {
    tmp9 = cResult[3];
  }
  if (cResult[4] === prop) {
    if (cResult[5] === noMethodsText) {
      if (cResult[6] === tmp4.buttonGroup) {
        if (cResult[7] === tmp4.errorContainer) {
          if (cResult[8] === tmp4.noMethodsText) {
            if (cResult[10] !== cResult[9]) {
              const obj4 = { hasIcons: false, children: tmp12 };
              const tmp17 = closure_6(tmp(6269).TableRowGroup, obj4);
              cResult[10] = tmp12;
              cResult[11] = tmp17;
              let tmp15 = tmp17;
            } else {
              tmp15 = cResult[11];
            }
            if (cResult[12] === tmp4.content) {
              if (cResult[13] === tmp15) {
                let tmp18 = cResult[14];
              }
              if (cResult[15] !== isSuspendedUser) {
                let tmp22 = isSuspendedUser;
                if (isSuspendedUser) {
                  const obj5 = { variant: "text-xs/medium", children: null };
                  const intl4 = tmp(1126).intl;
                  const obj6 = {
                    handleOnHelpUrlHook() {
                                      noMethodsText(7497).openUrl(constants.LEARN_MORE_UU_APPEAL_LINK);
                                    }
                  };
                  obj5.children = intl4.format(noMethodsText(3117).htWh1G, obj6);
                  tmp22 = closure_6(tmp(5087).Text, obj5);
                }
                cResult[15] = isSuspendedUser;
                cResult[16] = tmp22;
                let tmp21 = tmp22;
              } else {
                tmp21 = cResult[16];
              }
              if (cResult[17] === tmp18) {
                if (cResult[18] === tmp21) {
                  let tmp25 = cResult[19];
                }
                return tmp25;
              }
              const obj7 = { spacing: 8, align: "center", children: null };
              const items1 = [tmp18, tmp21];
              obj7.children = items1;
              const tmp27 = closure_7(tmp(5374).Stack, obj7);
              cResult[17] = tmp18;
              cResult[18] = tmp21;
              cResult[19] = tmp27;
              tmp25 = tmp27;
            }
            const obj8 = { spacing: 16, style: tmp4.content, children: null };
            const items2 = [tmp9, tmp15];
            obj8.children = items2;
            const tmp20 = closure_7(tmp(5374).Stack, obj8);
            cResult[12] = tmp4.content;
            cResult[13] = tmp15;
            cResult[14] = tmp20;
            tmp18 = tmp20;
          }
        }
      }
    }
  }
  if (null != prop) {
    if (0 !== prop.length) {
      let mapped = prop.map((label) => closure_1_6(prop(6186).TableRow, {
        label: label.title,
        subLabel: label.description,
        onPress() {
          return label.onClick(noMethodsText);
        },
        arrow: true
      }, label.id));
    }
    cResult[4] = prop;
    cResult[5] = noMethodsText;
    cResult[6] = tmp4.buttonGroup;
    ({ errorContainer: tmp3[7], noMethodsText } = tmp4);
    cResult[8] = noMethodsText;
    cResult[9] = mapped;
  }
  const obj9 = { direction: "vertical", align: "center", spacing: 16, style: tmp4.errorContainer, children: null };
  const obj10 = { variant: "text-sm/medium", color: "text-subtle", style: tmp4.noMethodsText, children: null };
  const intl2 = tmp(1126).intl;
  obj10.children = intl2.string(noMethodsText(3117).cR6336);
  const items3 = [closure_6(prop(5087).Text, obj10), ];
  const obj11 = { style: tmp4.buttonGroup, children: null };
  const obj12 = { variant: "primary", size: "lg", text: null, onPress: null };
  const intl3 = tmp(1126).intl;
  obj12.text = intl3.string(noMethodsText(3117).hDvmYP);
  obj12.onPress = prop(7510).getAgeVerificationMethods;
  obj11.children = closure_6(prop(5376).Button, obj12);
  items3[1] = closure_6(prop(5965).ButtonGroup, obj11);
  obj9.children = items3;
  mapped = closure_7(tmp(5374).Stack, obj9);
  let obj2 = prop(5928);
}) : (function AgeVerificationMethodsContainer(ageVerificationMethods) {
  const prop = ageVerificationMethods.ageVerificationMethods;
  const modalSessionId = ageVerificationMethods.modalSessionId;
  const tmp = closure_8();
  const isSuspendedUser = prop(5928).useIsSuspendedUser();
  const items = [prop];
  const effect = noop.useEffect(() => {
    let someResult;
    if (prop != null) {
      someResult = prop.some((id) => id.id === constants.GOOGLE_WALLET);
    }
    if (someResult) {
      const obj3 = { name: MetricEvents.MetricEvents.GOOGLE_WALLET_METHOD_IMPRESSION };
      MonitoringAgentDefault.increment(obj3);
    }
  }, items);
  let obj2 = { spacing: 16, style: tmp.content, children: null };
  let obj3 = { messageType: prop(1200).HelpMessageTypes.INFO, textColor: "text-feedback-info", textVariant: "text-sm/medium", children: null };
  const intl = prop(1126).intl;
  obj3.children = intl.string(prop(1126).t.El4aXl);
  const items1 = [closure_6(prop(1200).HelpMessage, obj3), ];
  if (null != prop) {
    if (0 !== prop.length) {
      let mapped = prop.map((label) => closure_1_6(prop(6186).TableRow, {
        label: label.title,
        subLabel: label.description,
        onPress() {
          return label.onClick(modalSessionId);
        },
        arrow: true
      }, label.id));
    }
    const obj4 = { hasIcons: false, children: mapped };
    items1[1] = closure_6(tmp8, obj4);
    obj2.children = items1;
    const items2 = [closure_7(prop(5374).Stack, obj2), ];
    let tmp7Result = isSuspendedUser;
    if (isSuspendedUser) {
      const obj5 = { variant: "text-xs/medium", children: null };
      const intl4 = tmp2(1126).intl;
      const obj6 = {
        handleOnHelpUrlHook() {
              modalSessionId(7497).openUrl(constants.LEARN_MORE_UU_APPEAL_LINK);
            }
      };
      obj5.children = intl4.format(modalSessionId(3117).htWh1G, obj6);
      tmp7Result = closure_6(tmp2(5087).Text, obj5);
    }
    const obj7 = { spacing: 8, align: "center", children: null };
    items2[1] = tmp7Result;
    obj7.children = items2;
    return closure_7(prop(5374).Stack, obj7);
  }
  const obj8 = { direction: "vertical", align: "center", spacing: 16, style: tmp.errorContainer, children: null };
  const obj9 = { variant: "text-sm/medium", color: "text-subtle", style: tmp.noMethodsText, children: null };
  const intl2 = tmp2(1126).intl;
  obj9.children = intl2.string(modalSessionId(3117).cR6336);
  const items3 = [closure_6(prop(5087).Text, obj9), ];
  const obj10 = { style: tmp.buttonGroup, children: null };
  const obj11 = { variant: "primary", size: "lg", text: null, onPress: null };
  const intl3 = tmp2(1126).intl;
  obj11.text = intl3.string(modalSessionId(3117).hDvmYP);
  obj11.onPress = prop(7510).getAgeVerificationMethods;
  obj10.children = closure_6(prop(5376).Button, obj11);
  items3[1] = closure_6(prop(5965).ButtonGroup, obj10);
  obj8.children = items3;
  mapped = closure_7(tmp2(5374).Stack, obj8);
  const obj = prop(5928);
});