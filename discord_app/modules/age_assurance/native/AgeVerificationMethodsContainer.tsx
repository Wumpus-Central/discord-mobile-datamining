// === Module 8333: AgeVerificationMethodsContainer ===

// Module 8333 (AgeVerificationMethodsContainer)
import nativeDefault from "native" /* 575 */;
import MonitoringAgentDefault from "MonitoringAgent" /* 6708 */;
import MetricEvents from "MetricEvents" /* 6713 */;
import noop from "module_19" /* 19 */;

require = fn;
const VerificationMethod = fn(6769).VerificationMethod;
const SafetyHubLinks = fn(8140).SafetyHubLinks;
const jsxProd = fn(21);
({ jsx: closure_6, jsxs: metroImportDefault } = jsxProd);
const createStyles = fn(5243);
let obj2 = { content: { marginTop: nativeDefault.space.PX_8 }, errorContainer: null, noMethodsText: null, buttonGroup: null };
let obj3 = { marginTop: nativeDefault.space.PX_8 };
obj2.errorContainer = { marginTop: nativeDefault.space.PX_24, marginBottom: nativeDefault.space.PX_24 };
let obj4 = { marginTop: nativeDefault.space.PX_24, marginBottom: nativeDefault.space.PX_24 };
obj2.noMethodsText = { paddingHorizontal: nativeDefault.space.PX_40, textAlign: "center" };
obj2.buttonGroup = { paddingVertical: 0 };
let closure_8 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/age_assurance/native/AgeVerificationMethodsContainer.tsx");

export function AgeVerificationMethodsContainer(ageVerificationMethods) {
  const prop = ageVerificationMethods.ageVerificationMethods;
  const modalSessionId = ageVerificationMethods.modalSessionId;
  const tmp = closure_8();
  const isSuspendedUser = prop(8139).useIsSuspendedUser();
  items = [prop];
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
  let obj3 = { type: "info", message: null, role: "none" };
  const intl = prop(1113).intl;
  obj3.message = intl.string(prop(1113).t.El4aXl);
  const items1 = [closure_6(prop(8094).InlineNotice, obj3), ];
  if (null != prop) {
    if (0 !== prop.length) {
      let mapped = prop.map((label) => closure_1_6(prop(7379).TableRow, {
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
    const items2 = [closure_7(prop(6274).Stack, obj2), ];
    let tmp7Result = isSuspendedUser;
    if (isSuspendedUser) {
      const obj5 = { variant: "body-xs/medium", children: null };
      const intl4 = tmp2(1113).intl;
      const obj6 = {
        handleOnHelpUrlHook() {
              modalSessionId(8124).openUrl(constants.LEARN_MORE_UU_APPEAL_LINK);
            }
      };
      obj5.children = intl4.format(modalSessionId(3273).htWh1G, obj6);
      tmp7Result = closure_6(tmp2(5866).Text, obj5);
    }
    const obj7 = { spacing: 8, align: "center", children: null };
    items2[1] = tmp7Result;
    obj7.children = items2;
    return closure_7(prop(6274).Stack, obj7);
  }
  const obj8 = { direction: "vertical", align: "center", spacing: 16, style: tmp.errorContainer, children: null };
  const obj9 = { variant: "body-sm/medium", color: "text-subtle", style: tmp.noMethodsText, children: null };
  const intl2 = tmp2(1113).intl;
  obj9.children = intl2.string(modalSessionId(3273).cR6336);
  const items3 = [closure_6(prop(5866).Text, obj9), ];
  const obj10 = { style: tmp.buttonGroup, children: null };
  const obj11 = { variant: "primary", size: "lg", text: null, onPress: null };
  const intl3 = tmp2(1113).intl;
  obj11.text = intl3.string(modalSessionId(3273).hDvmYP);
  obj11.onPress = prop(8138).getAgeVerificationMethods;
  obj10.children = closure_6(prop(5873).Button, obj11);
  items3[1] = closure_6(prop(6888).ButtonGroup, obj10);
  obj8.children = items3;
  mapped = closure_7(tmp2(6274).Stack, obj8);
  const obj = prop(8139);
}