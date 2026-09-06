// discord_app/modules/age_assurance/native/AgeVerificationMethodsContainer.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import MonitoringAgentDefault from "../../monitoring/MonitoringAgent.tsx";
import MetricEvents from "../../../../discord_common/js/shared/shared-constants/MetricEvents.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const VerificationMethod = fn(8412).VerificationMethod;
const SafetyHubLinks = fn(8419).SafetyHubLinks;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
fn(4560);
let createStyles = { content: null, errorContainer: null, noMethodsText: null, buttonGroup: null };
createStyles = { marginTop: nativeDefault.space.PX_8 };
createStyles.content = createStyles;
createStyles.errorContainer = { marginTop: nativeDefault.space.PX_24, marginBottom: nativeDefault.space.PX_24 };
let obj1 = { marginTop: nativeDefault.space.PX_24, marginBottom: nativeDefault.space.PX_24 };
createStyles.noMethodsText = { paddingHorizontal: nativeDefault.space.PX_40, textAlign: "center" };
createStyles.buttonGroup = { paddingVertical: 0 };
let closure_8 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/age_assurance/native/AgeVerificationMethodsContainer.tsx");

export const AgeVerificationMethodsContainer = function AgeVerificationMethodsContainer(ageVerificationMethods) {
  const prop = ageVerificationMethods.ageVerificationMethods;
  const modalSessionId = ageVerificationMethods.modalSessionId;
  const tmp = closure_8();
  let obj = prop(8418);
  const isSuspendedUser = obj.useIsSuspendedUser();
  const items = [prop];
  const effect = noop.useEffect(() => {
    let obj = prop;
    let someResult;
    if (prop != null) {
      someResult = obj.some((id) => id.id === constants.GOOGLE_WALLET);
    }
    if (someResult) {
      obj = { name: MetricEvents.MetricEvents.GOOGLE_WALLET_METHOD_IMPRESSION };
      MonitoringAgentDefault.increment(obj);
    }
  }, items);
  obj = { spacing: 16, style: tmp.content, children: null };
  obj = {
    messageType: prop(1178).HelpMessageTypes.INFO,
    textColor: "text-feedback-info",
    textVariant: "text-sm/medium",
    children: null,
  };
  const intl = prop(1114).intl;
  obj.children = intl.string(prop(1114).t.El4aXl);
  const items1 = [closure_6(prop(1178).HelpMessage, obj)];
  if (null != prop) {
    if (0 !== prop.length) {
      let mapped = prop.map((label) =>
        closure_1_6(
          prop(5605).TableRow,
          {
            label: label.title,
            subLabel: label.description,
            onPress() {
              return label.onClick(modalSessionId);
            },
            arrow: true,
          },
          label.id,
        ),
      );
    }
    const obj1 = { hasIcons: false, children: mapped };
    items1[1] = tmp7(tmp8, obj1);
    obj.children = items1;
    const items2 = [tmp6(prop(4973).Stack, obj)];
    let tmp7Result = isSuspendedUser;
    if (isSuspendedUser) {
      let obj2 = { variant: "text-xs/medium", children: null };
      const intl4 = tmp2(1114).intl;
      const obj3 = {
        handleOnHelpUrlHook() {
          modalSessionId(8411).openUrl(constants.LEARN_MORE_UU_APPEAL_LINK);
        },
      };
      obj2.children = intl4.format(modalSessionId(2946).htWh1G, obj3);
      tmp7Result = tmp7(tmp2(4556).Text, obj2);
    }
    const obj4 = { spacing: 8, align: "center", children: null };
    items2[1] = tmp7Result;
    obj4.children = items2;
    return tmp6(prop(4973).Stack, obj4);
  }
  const obj5 = { direction: "vertical", align: "center", spacing: 16, style: tmp.errorContainer, children: null };
  const obj6 = { variant: "text-sm/medium", color: "text-subtle", style: tmp.noMethodsText, children: null };
  const intl2 = tmp2(1114).intl;
  obj6.children = intl2.string(modalSessionId(2946).cR6336);
  const items3 = [closure_6(prop(4556).Text, obj6)];
  const obj7 = { style: tmp.buttonGroup, children: null };
  const obj8 = { variant: "primary", size: "lg", text: null, onPress: null };
  const intl3 = tmp2(1114).intl;
  obj8.text = intl3.string(modalSessionId(2946).hDvmYP);
  obj8.onPress = prop(8417).getAgeVerificationMethods;
  obj7.children = closure_6(prop(4975).Button, obj8);
  items3[1] = closure_6(prop(5433).ButtonGroup, obj7);
  obj5.children = items3;
  mapped = tmp6(tmp2(4973).Stack, obj5);
};
