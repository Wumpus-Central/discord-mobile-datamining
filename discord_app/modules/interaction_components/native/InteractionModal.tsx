// discord_app/modules/interaction_components/native/InteractionModal.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import native from "../../../design/void/native.tsx";
import AvatarUtilsDefault from "../../../utils/AvatarUtils.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import ModalActionCreatorsDefault from "../../../actions/ModalActionCreators.tsx";
import components_Button_Button from "../../../design/components/Button/native/Button.native.tsx";
import Pressables from "../../../design/void/Pressables/native/Pressables.tsx";
import XSmallIcon from "../../../design/components/Icon/native/redesign/generated/XSmallIcon.tsx";
import useSafeAreaInsetsKeyboardAwareDefault from "../../safe_area/useSafeAreaInsetsKeyboardAware.native.tsx";
import ComponentStateContext from "../ComponentStateContext.tsx";
import InteractionModalUtils from "../InteractionModalUtils.tsx";
import renderComponents from "renderComponents.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
function onClose() {
  return ModalActionCreatorsDefault.popWithKey(interaction_modal);
}
class InteractionModal {
  constructor(arg0) {
    tmp = closure_9();
    tmp2 = closure_0;
    tmp3 = closure_2;
    obj = closure_0(closure_2[7]);
    modalState = obj.useModalState(global, onClose);
    error = modalState.error;
    ({
      components,
      applicationIconURL,
      applicationName,
      submissionState,
      validators,
      validationErrors,
      setValidationErrors,
      onSubmit,
    } = modalState);
    insets = closure_1(closure_2[8])({ includeKeyboardHeight: true }).insets;
    tmp5 = jsxs;
    tmp6 = View;
    obj = { style: null, children: null };
    items = [,];
    items[0] = tmp.modal;
    items[1] = { paddingTop: insets.top, paddingBottom: insets.bottom };
    obj.style = items;
    obj1 = { style: tmp.header, children: null };
    tmp7 = jsx;
    obj2 = { style: tmp.icon, source: null, size: null };
    obj5 = closure_1(closure_2[10]);
    obj2.source = obj5.makeSource(applicationIconURL);
    obj2.size = closure_0(closure_2[9]).AvatarSizes.SMALL;
    items1 = [, ,];
    items1[0] = jsx(closure_0(closure_2[9]).Avatar, obj2);
    obj3 = {
      style: tmp.titleView,
      children: jsx(closure_0(closure_2[11]).Text, {
        variant: "heading-xl/semibold",
        color: "mobile-text-heading-primary",
        children: global.title,
      }),
    };
    items1[1] = jsx(View, obj3);
    obj4 = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, style: null, children: null };
    intl = closure_0(closure_2[13]).intl;
    obj4.accessibilityLabel = intl.string(closure_0(closure_2[13]).t.cpT0Cq);
    obj4.onPress = onClose;
    obj4.style = tmp.closeButton;
    obj5 = { color: tmp.closeIcon.color };
    obj4.children = jsx(closure_0(closure_2[14]).XSmallIcon, obj5);
    items1[2] = jsx(closure_0(closure_2[12]).PressableOpacity, obj4);
    obj1.children = items1;
    items2 = [,];
    items2[0] = jsxs(View, obj1);
    obj6 = {
      style: tmp.scroll,
      contentContainerStyle: tmp.modalContent,
      keyboardShouldPersistTaps: "handled",
      children: null,
    };
    tmp7Result = null;
    tmp8 = ScrollView;
    if (null != error) {
      str = "";
      tmp7Result = null;
      if ("" !== error) {
        obj7 = { style: null, children: null };
        obj7.style = tmp.error;
        obj8 = { messageType: null, children: null };
        obj8.messageType = tmp2(tmp3[9]).HelpMessageTypes.ERROR;
        obj8.children = error;
        obj7.children = tmp7(tmp2(tmp3[9]).HelpMessage, obj8);
        tmp7Result = tmp7(tmp6, obj7);
      }
    }
    obj9 = { children: null };
    items3 = [,];
    items3[0] = tmp7Result;
    obj10 = { messageType: tmp2(tmp3[9]).HelpMessageTypes.WARNING, children: null };
    intl2 = tmp2(tmp3[13]).intl;
    obj10.children = intl2.format(tmp2(tmp3[13]).t["dSTy/w"], { applicationName });
    items3[1] = tmp7(tmp2(tmp3[9]).HelpMessage, obj10);
    obj9.children = items3;
    items4 = [, ,];
    items4[0] = tmp5(tmp6, obj9);
    obj11 = { modal: global, validators, validationErrors, setValidationErrors, children: null };
    tmp2Result = tmp2(tmp3[16]);
    obj11.children = tmp2Result.renderComponents(components);
    items4[1] = tmp7(tmp2(tmp3[15]).ComponentStateContextProvider, obj11);
    obj12 = { style: tmp.footer, children: null };
    obj13 = { text: null, loading: null, size: "lg", onPress: null };
    intl3 = tmp2(tmp3[13]).intl;
    obj13.text = intl3.string(tmp2(tmp3[13]).t.geKm7t);
    obj13.loading = submissionState === InteractionModalState.IN_FLIGHT;
    obj13.onPress = onSubmit;
    obj12.children = tmp7(tmp2(tmp3[17]).Button, obj13);
    items4[2] = tmp7(tmp6, obj12);
    obj6.children = items4;
    items2[1] = tmp5(tmp8, obj6);
    obj.children = items2;
    return tmp5(tmp6, obj);
  }
}
get_ActivityIndicator = fn(17);
({ View: c3, ScrollView: closure_4 } = get_ActivityIndicator);
const InteractionModalState = fn(14397).InteractionModalState;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const interaction_modal = "interaction_modal";
fn(4560);
let createStyles = {
  modal: null,
  scroll: null,
  modalContent: null,
  header: null,
  titleView: null,
  icon: null,
  footer: null,
  closeButton: null,
  closeIcon: null,
  error: null,
};
createStyles = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1 };
createStyles.modal = createStyles;
createStyles.scroll = { flex: 1 };
createStyles.modalContent = {
  flexGrow: 1,
  paddingHorizontal: nativeDefault.space.PX_16,
  gap: nativeDefault.space.PX_16,
};
let obj1 = { flexGrow: 1, paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_16 };
createStyles.header = {
  flexDirection: "row",
  marginBottom: nativeDefault.space.PX_16,
  paddingHorizontal: nativeDefault.space.PX_16,
};
createStyles.titleView = { flex: 1 };
let obj2 = {
  flexDirection: "row",
  marginBottom: nativeDefault.space.PX_16,
  paddingHorizontal: nativeDefault.space.PX_16,
};
createStyles.icon = { marginRight: nativeDefault.space.PX_8 };
let obj3 = { marginRight: nativeDefault.space.PX_8 };
createStyles.footer = { marginTop: "auto", marginBottom: nativeDefault.space.PX_16 };
createStyles.closeButton = { marginLeft: "auto" };
let obj4 = { marginTop: "auto", marginBottom: nativeDefault.space.PX_16 };
createStyles.closeIcon = { color: nativeDefault.colors.TEXT_MUTED };
let obj5 = { color: nativeDefault.colors.TEXT_MUTED };
createStyles.error = { marginBottom: nativeDefault.space.PX_16 };
const React7 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/interaction_components/native/InteractionModal.tsx");

export default InteractionModal;
export const openInteractionModal = function openInteractionModal(arg0) {
  let arr = ModalActionCreatorsDefault;
  arr = arr.push(InteractionModal, arg0, interaction_modal);
};
