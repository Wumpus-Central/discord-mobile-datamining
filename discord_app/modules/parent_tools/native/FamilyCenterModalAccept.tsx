// discord_app/modules/parent_tools/native/FamilyCenterModalAccept.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import ModalActionCreatorsDefault from "../../../actions/ModalActionCreators.tsx";
import NavigatorHeader from "../../../design/components/Navigator/native/NavigatorHeader.native.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
function FamilyCenterModalAcceptScreen(otherUser) {
  otherUser = otherUser.otherUser;
  const tmp = closure_7();
  const callback = noop.useCallback(() => {
    let arr = acceptLinkRequest(4763);
    arr = arr.pop();
  }, []);
  const callback1 = noop.useCallback(() => {
    const intl = otherUser(1114).intl;
    otherUser(4258).presentFailedToast(intl.string(otherUser(1114).t.R0RpRX));
  }, []);
  let obj = otherUser(11916);
  const familyCenterActions = obj.useFamilyCenterActions({ onSuccess: callback, onError: callback1 });
  const acceptLinkRequest = familyCenterActions.acceptLinkRequest;
  const isAcceptLoading = familyCenterActions.isAcceptLoading;
  const items = [acceptLinkRequest, otherUser.id];
  const callback2 = noop.useCallback(() => {
    acceptLinkRequest(otherUser.id);
  }, items);
  obj = { children: null };
  obj = { children: null };
  const obj1 = { style: tmp.header, children: null };
  const obj2 = { otherUser, iconSrc: acceptLinkRequest(4504), iconStyles: tmp.icon };
  const items1 = [closure_5(acceptLinkRequest(14922), obj2), ,];
  const obj3 = { style: tmp.headerText, variant: "text-lg/bold", children: null };
  let intl = otherUser(1114).intl;
  obj3.children = intl.string(acceptLinkRequest(2396).rlNJwZ);
  items1[1] = closure_5(otherUser(4556).Text, obj3);
  items1[2] = closure_5(acceptLinkRequest(14892), { user: otherUser });
  obj1.children = items1;
  const items2 = [closure_6(View, obj1), closure_5(acceptLinkRequest(11918), {})];
  const obj4 = { style: tmp.disclaimer, variant: "text-xs/normal", color: "text-default", children: null };
  const intl2 = otherUser(1114).intl;
  obj4.children = intl2.format(acceptLinkRequest(2396).snlFqR, { username: otherUser.username });
  items2[2] = closure_5(otherUser(4556).Text, obj4);
  obj.children = items2;
  const items3 = [closure_6(otherUser(8422).ModalContent, obj)];
  const obj6 = { children: null };
  const obj7 = { children: null };
  const obj8 = { variant: "primary", disabled: isAcceptLoading, loading: isAcceptLoading, text: null, onPress: null };
  const intl3 = otherUser(1114).intl;
  obj8.text = intl3.string(acceptLinkRequest(2396)["wI/jo3"]);
  obj8.onPress = callback2;
  const items4 = [closure_5(otherUser(4975).Button, obj8)];
  const obj9 = { variant: "tertiary", text: null, onPress: null };
  const intl4 = otherUser(1114).intl;
  obj9.text = intl4.string(otherUser(1114).t["ETE/oC"]);
  obj9.onPress = acceptLinkRequest(4763).pop;
  items4[1] = closure_5(otherUser(4975).Button, obj9);
  obj7.children = items4;
  obj6.children = closure_6(otherUser(5433).ButtonGroup, obj7);
  items3[1] = closure_5(otherUser(11926).ModalFooter, obj6);
  obj.children = items3;
  return closure_6(otherUser(8421).ModalScreen, obj);
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
fn(4560);
let createStyles = { header: null, headerText: null, icon: null, disclaimer: null };
createStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: nativeDefault.space.PX_16,
};
createStyles.header = createStyles;
createStyles.headerText = { marginTop: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_4 };
let obj2 = { transform: null, tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
let items = [{ rotate: "45deg" }];
obj2.transform = items;
createStyles.icon = obj2;
let obj1 = { marginTop: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_4 };
createStyles.disclaimer = { marginTop: nativeDefault.space.PX_12 };
let closure_7 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterModalAccept.tsx");

export default function FamilyCenterModalAccept(otherUser) {
  otherUser = otherUser.otherUser;
  const items = [otherUser];
  const memo = noop.useMemo(() => {
    let obj = { ACCEPT: null };
    obj = {
      headerShown: true,
      headerLeft: NavigatorHeader.getHeaderCloseButton(ModalActionCreatorsDefault.pop),
      headerTitle() {
        return null;
      },
      render() {
        return closure_2_5(FamilyCenterModalAcceptScreen, { otherUser });
      },
    };
    obj.ACCEPT = obj;
    return obj;
  }, items);
  let obj = { initialRouteName: "ACCEPT", screens: memo, headerBackTitle: null };
  const intl = otherUser(1114).intl;
  obj.headerBackTitle = intl.string(otherUser(1114).t["13/7kX"]);
  return closure_5(otherUser(11928).Modal, obj);
}
