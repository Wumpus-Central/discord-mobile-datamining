// discord_app/modules/age_assurance/native/AgeVerificationMethodsContainer.tsx
import openIncodeAgeVerificationModal from "openIncodeAgeVerificationModal";
import { VerificationMethod } from "set";
import { SafetyHubLinks } from "SafetyHubView";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let closure_6;
let error;
const require = arg1;
({ jsx: closure_6, jsxs: error } = jsxProd);
createCacheKey = { content: null, errorContainer: null, noMethodsText: null, buttonGroup: null };
createCacheKey = { marginTop: require("Themes").space.PX_8 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { marginTop: require("Themes").space.PX_24, marginBottom: require("Themes").space.PX_24 };
let obj1 = { marginTop: require("Themes").space.PX_24, marginBottom: require("Themes").space.PX_24 };
createCacheKey[2] = { paddingHorizontal: require("Themes").space.PX_40, textAlign: "center" };
createCacheKey[3] = { paddingVertical: 0 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj2 = { paddingHorizontal: require("Themes").space.PX_40, textAlign: "center" };
const result = require("SafetyHubView").fileFinishedImporting("modules/age_assurance/native/AgeVerificationMethodsContainer.tsx");

export const AgeVerificationMethodsContainer = function AgeVerificationMethodsContainer(ageVerificationMethods) {
  const prop = ageVerificationMethods.ageVerificationMethods;
  const modalSessionId = ageVerificationMethods.modalSessionId;
  const tmp = createCacheKey();
  let obj = prop(7727);
  const isSuspendedUser = obj.useIsSuspendedUser();
  const items = [prop];
  const effect = React.useEffect(() => {
    let obj = prop;
    let someResult;
    if (prop != null) {
      someResult = obj.some((id) => id.id === constants.GOOGLE_WALLET);
    }
    if (someResult) {
      obj = { name: null };
      obj[0] = prop(outer1_2[8]).MetricEvents.GOOGLE_WALLET_METHOD_IMPRESSION;
      modalSessionId(outer1_2[7]).increment(obj);
      const obj2 = modalSessionId(outer1_2[7]);
    }
  }, items);
  obj = { spacing: 16, style: tmp.content, children: null };
  obj = { messageType: null, textColor: "text-feedback-info", textVariant: "text-sm/medium", children: null };
  obj[0] = prop(1297).HelpMessageTypes.INFO;
  const intl = prop(1236).intl;
  obj[3] = intl.string(prop(1236).t.El4aXl);
  const items1 = [callback(prop(1297).HelpMessage, obj), ];
  if (null != prop) {
    if (0 !== prop.length) {
      let mapped = prop.map((label) => {
        let closure_0 = label;
        return outer1_6(prop(outer1_2[18]).TableRow, {
          label: label.title,
          subLabel: label.description,
          onPress() {
            return label.onClick(outer1_1);
          },
          arrow: true
        }, label.id);
      });
    }
    const obj1 = { hasIcons: false, children: null };
    obj1[1] = mapped;
    items1[1] = tmp7(tmp8, obj1);
    obj[2] = items1;
    const items2 = [tmp6(prop(4693).Stack, obj), ];
    let tmp7Result = isSuspendedUser;
    if (isSuspendedUser) {
      let obj2 = { variant: "text-xs/medium", children: null };
      const intl4 = tmp2(1236).intl;
      const obj3 = { handleOnHelpUrlHook: null };
      obj3[0] = function handleOnHelpUrlHook() {
        modalSessionId(table[19]).openUrl(constants.LEARN_MORE_UU_APPEAL_LINK);
      };
      obj2[1] = intl4.format(modalSessionId(2802).htWh1G, obj3);
      tmp7Result = tmp7(tmp2(4281).Text, obj2);
    }
    const obj4 = { spacing: 8, align: "center", children: null };
    items2[1] = tmp7Result;
    obj4[2] = items2;
    return tmp6(prop(4693).Stack, obj4);
  }
  const obj5 = { direction: "vertical", align: "center", spacing: 16, style: tmp.errorContainer, children: null };
  const obj6 = { variant: "text-sm/medium", color: "text-subtle", style: tmp.noMethodsText, children: null };
  const intl2 = tmp2(1236).intl;
  obj6[3] = intl2.string(modalSessionId(2802).cR6336);
  const items3 = [callback(prop(4281).Text, obj6), ];
  const obj7 = { style: tmp.buttonGroup, children: null };
  const obj8 = { variant: "primary", size: "lg", text: null, onPress: null };
  const intl3 = tmp2(1236).intl;
  obj8[2] = intl3.string(modalSessionId(2802).hDvmYP);
  obj8[3] = prop(7726).getAgeVerificationMethods;
  obj7[1] = callback(prop(4695).Button, obj8);
  items3[1] = callback(prop(5132).ButtonGroup, obj7);
  obj5[4] = items3;
  mapped = tmp6(tmp2(4693).Stack, obj5);
};