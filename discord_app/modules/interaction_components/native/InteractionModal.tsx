// discord_app/modules/interaction_components/native/InteractionModal.tsx
import "noop";
import get_ActivityIndicator from "Button";
import { InteractionModalState } from "getModalState";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c3;
let c4;
let closure_6;
let error;
const require = arg1;
function onClose() {
  return require("../../../actions/ModalActionCreators.tsx").popWithKey(interaction_modal);
}
class InteractionModal {
  constructor(arg0) {
    tmp = interaction_modal();
    tmp2 = closure_0;
    tmp3 = closure_2;
    obj = require("getData");
    modalState = obj.useModalState(global, onClose);
    error = modalState.error;
    ({ components, applicationIconURL, applicationName, submissionState, validators, validationErrors, setValidationErrors, onSubmit } = modalState);
    insets = require("useSafeAreaInsetsKeyboardAware")({ includeKeyboardHeight: true }).insets;
    tmp5 = jsxs;
    tmp6 = View;
    obj = { style: items, children: null };
    items = [, ];
    items[0] = tmp.modal;
    items[1] = { paddingTop: insets.top, paddingBottom: insets.bottom };
    obj1 = { style: tmp.header, children: null };
    tmp7 = jsx;
    obj2 = { style: tmp.icon, source: null, size: null };
    obj5 = require("getAvatarURL");
    obj2[1] = obj5.makeSource(applicationIconURL);
    obj2[2] = require("Button").AvatarSizes.SMALL;
    items1 = [, , ];
    items1[0] = jsx(require("Button").Avatar, obj2);
    obj3 = { style: tmp.titleView, children: jsx(require("Text").Text, { variant: "heading-xl/semibold", color: "mobile-text-heading-primary", children: global.title }) };
    items1[1] = jsx(View, obj3);
    obj4 = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, style: null, children: null };
    intl = require("getSystemLocale").intl;
    obj4[1] = intl.string(require("getSystemLocale").t.cpT0Cq);
    obj4[2] = onClose;
    obj4[3] = tmp.closeButton;
    obj5 = { color: tmp.closeIcon.color };
    obj4[4] = jsx(require("XSmallIcon").XSmallIcon, obj5);
    items1[2] = jsx(require("PressableBase").PressableOpacity, obj4);
    obj1[1] = items1;
    items2 = [, ];
    items2[0] = jsxs(View, obj1);
    obj6 = { style: tmp.scroll, contentContainerStyle: tmp.modalContent, keyboardShouldPersistTaps: "handled", children: null };
    tmp7Result = null;
    tmp8 = ScrollView;
    if (null != error) {
      str = "";
      tmp7Result = null;
      if ("" !== error) {
        obj7 = { style: null, children: null };
        obj7[0] = tmp.error;
        obj8 = { messageType: null, children: null };
        obj8[0] = require("Button").HelpMessageTypes.ERROR;
        obj8[1] = error;
        obj7[1] = tmp7(require("Button").HelpMessage, obj8);
        tmp7Result = tmp7(tmp6, obj7);
      }
    }
    obj9 = { children: null };
    items3 = [, ];
    items3[0] = tmp7Result;
    obj10 = { messageType: null, children: null };
    obj10[0] = require("Button").HelpMessageTypes.WARNING;
    intl2 = require("getSystemLocale").intl;
    obj10[1] = intl2.format(require("getSystemLocale").t["dSTy/w"], { applicationName });
    items3[1] = tmp7(require("Button").HelpMessage, obj10);
    obj9[0] = items3;
    items4 = [, , ];
    items4[0] = tmp5(tmp6, obj9);
    obj11 = { modal: global, validators, validationErrors, setValidationErrors, children: null };
    tmp2Result = require("renderComponents");
    obj11[4] = tmp2Result.renderComponents(components);
    items4[1] = tmp7(require("isInteractionComponent").ComponentStateContextProvider, obj11);
    obj12 = { style: tmp.footer, children: null };
    obj13 = { text: null, loading: null, size: "lg", onPress: null };
    intl3 = require("getSystemLocale").intl;
    obj13[0] = intl3.string(require("getSystemLocale").t.geKm7t);
    obj13[1] = submissionState === InteractionModalState.IN_FLIGHT;
    obj13[3] = onSubmit;
    obj12[1] = tmp7(require("Button").Button, obj13);
    items4[2] = tmp7(tmp6, obj12);
    obj6[3] = items4;
    items2[1] = tmp5(tmp8, obj6);
    obj[1] = items2;
    return tmp5(tmp6, obj);
  }
}
({ View: c3, ScrollView: c4 } = get_ActivityIndicator);
({ jsx: closure_6, jsxs: error } = jsxProd);
const interaction_modal = "interaction_modal";
createCacheKey = { modal: null, scroll: null, modalContent: null, header: null, titleView: null, icon: null, footer: null, closeButton: null, closeIcon: null, error: null };
createCacheKey = { backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW, flex: 1 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flex: 1 };
createCacheKey[2] = { flexGrow: 1, paddingHorizontal: require("Themes").space.PX_16, gap: require("Themes").space.PX_16 };
let obj1 = { flexGrow: 1, paddingHorizontal: require("Themes").space.PX_16, gap: require("Themes").space.PX_16 };
createCacheKey[3] = { flexDirection: "row", marginBottom: require("Themes").space.PX_16, paddingHorizontal: require("Themes").space.PX_16 };
createCacheKey[4] = { flex: 1 };
let obj2 = { flexDirection: "row", marginBottom: require("Themes").space.PX_16, paddingHorizontal: require("Themes").space.PX_16 };
createCacheKey[5] = { marginRight: require("Themes").space.PX_8 };
let obj3 = { marginRight: require("Themes").space.PX_8 };
createCacheKey[6] = { marginTop: "auto", marginBottom: require("Themes").space.PX_16 };
createCacheKey[7] = { marginLeft: "auto" };
let obj4 = { marginTop: "auto", marginBottom: require("Themes").space.PX_16 };
createCacheKey[8] = { color: require("Themes").colors.TEXT_MUTED };
let obj5 = { color: require("Themes").colors.TEXT_MUTED };
createCacheKey[9] = { marginBottom: require("Themes").space.PX_16 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj6 = { marginBottom: require("Themes").space.PX_16 };
const result = require("getModalState").fileFinishedImporting("modules/interaction_components/native/InteractionModal.tsx");

export default InteractionModal;
export const openInteractionModal = function openInteractionModal(closure_0) {
  let arr = require("../../../actions/ModalActionCreators.tsx");
  arr = arr.push(InteractionModal, closure_0, interaction_modal);
};