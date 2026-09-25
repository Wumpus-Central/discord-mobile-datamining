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
    obj1 = { style: null, children: null };
    items = [,];
    items[0] = tmp.modal;
    items[1] = { paddingTop: insets.top, paddingBottom: insets.bottom };
    obj1.style = items;
    obj18 = { style: tmp.header, children: null };
    tmp7 = jsx;
    obj19 = { style: tmp.icon, source: null, size: null };
    obj5 = closure_1(closure_2[10]);
    obj19.source = obj5.makeSource(applicationIconURL);
    obj19.size = closure_0(closure_2[9]).AvatarSizes.SMALL;
    items1 = [, ,];
    items1[0] = jsx(closure_0(closure_2[9]).Avatar, obj19);
    obj20 = {
      style: tmp.titleView,
      children: jsx(closure_0(closure_2[11]).Text, {
        variant: "heading-xl/semibold",
        color: "mobile-text-heading-primary",
        children: global.title,
      }),
    };
    items1[1] = jsx(View, obj20);
    obj21 = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, style: null, children: null };
    intl = closure_0(closure_2[13]).intl;
    obj21.accessibilityLabel = intl.string(closure_0(closure_2[13]).t.cpT0Cq);
    obj21.onPress = onClose;
    obj21.style = tmp.closeButton;
    obj22 = { color: tmp.closeIcon.color };
    obj21.children = jsx(closure_0(closure_2[14]).XSmallIcon, obj22);
    items1[2] = jsx(closure_0(closure_2[12]).PressableOpacity, obj21);
    obj18.children = items1;
    items2 = [,];
    items2[0] = jsxs(View, obj18);
    obj23 = {
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
        obj24 = { style: null, children: null };
        obj24.style = tmp.error;
        obj25 = { messageType: null, children: null };
        obj25.messageType = tmp2(tmp3[9]).HelpMessageTypes.ERROR;
        obj25.children = error;
        obj24.children = tmp7(tmp2(tmp3[9]).HelpMessage, obj25);
        tmp7Result = tmp7(tmp6, obj24);
      }
    }
    obj26 = { children: null };
    items3 = [,];
    items3[0] = tmp7Result;
    obj27 = { messageType: tmp2(tmp3[9]).HelpMessageTypes.WARNING, children: null };
    intl2 = tmp2(tmp3[13]).intl;
    obj27.children = intl2.format(tmp2(tmp3[13]).t["dSTy/w"], { applicationName });
    items3[1] = tmp7(tmp2(tmp3[9]).HelpMessage, obj27);
    obj26.children = items3;
    items4 = [, ,];
    items4[0] = tmp5(tmp6, obj26);
    obj28 = { modal: global, validators, validationErrors, setValidationErrors, children: null };
    tmp2Result = tmp2(tmp3[16]);
    obj28.children = tmp2Result.renderComponents(components);
    items4[1] = tmp7(tmp2(tmp3[15]).ComponentStateContextProvider, obj28);
    obj29 = { style: tmp.footer, children: null };
    obj30 = { text: null, loading: null, size: "lg", onPress: null };
    intl3 = tmp2(tmp3[13]).intl;
    obj30.text = intl3.string(tmp2(tmp3[13]).t.geKm7t);
    obj30.loading = submissionState === InteractionModalState.IN_FLIGHT;
    obj30.onPress = onSubmit;
    obj29.children = tmp7(tmp2(tmp3[17]).Button, obj30);
    items4[2] = tmp7(tmp6, obj29);
    obj23.children = items4;
    items2[1] = tmp5(tmp8, obj23);
    obj1.children = items2;
    return tmp5(tmp6, obj1);
  }
}
get_ActivityIndicator = fn(17);
({ View: c3, ScrollView: closure_4 } = get_ActivityIndicator);
const InteractionModalState = fn(13934).InteractionModalState;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const interaction_modal = "interaction_modal";
const createStyles = fn(4829);
let obj2 = {
  modal: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1 },
  scroll: { flex: 1 },
  modalContent: null,
  header: null,
  titleView: null,
  icon: null,
  footer: null,
  closeButton: null,
  closeIcon: null,
  error: null,
};
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1 };
obj2.modalContent = { flexGrow: 1, paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_16 };
let obj4 = { flexGrow: 1, paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_16 };
obj2.header = {
  flexDirection: "row",
  marginBottom: nativeDefault.space.PX_16,
  paddingHorizontal: nativeDefault.space.PX_16,
};
obj2.titleView = { flex: 1 };
let obj5 = {
  flexDirection: "row",
  marginBottom: nativeDefault.space.PX_16,
  paddingHorizontal: nativeDefault.space.PX_16,
};
obj2.icon = { marginRight: nativeDefault.space.PX_8 };
let obj6 = { marginRight: nativeDefault.space.PX_8 };
obj2.footer = { marginTop: "auto", marginBottom: nativeDefault.space.PX_16 };
obj2.closeButton = { marginLeft: "auto" };
let obj7 = { marginTop: "auto", marginBottom: nativeDefault.space.PX_16 };
obj2.closeIcon = { color: nativeDefault.colors.TEXT_MUTED };
let obj8 = { color: nativeDefault.colors.TEXT_MUTED };
obj2.error = { marginBottom: nativeDefault.space.PX_16 };
const React7 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/interaction_components/native/InteractionModal.tsx");

export default InteractionModal;
export const openInteractionModal = function openInteractionModal(arg0) {
  ModalActionCreatorsDefault.push(InteractionModal, arg0, interaction_modal);
};
