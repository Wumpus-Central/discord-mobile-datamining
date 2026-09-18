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
    acceptLinkRequest(4925).pop();
  }, []);
  const callback1 = noop.useCallback(() => {
    const intl = otherUser(1115).intl;
    otherUser(4419).presentFailedToast(intl.string(otherUser(1115).t.R0RpRX));
  }, []);
  const familyCenterActions = otherUser(12160).useFamilyCenterActions({ onSuccess: callback, onError: callback1 });
  const acceptLinkRequest = familyCenterActions.acceptLinkRequest;
  const isAcceptLoading = familyCenterActions.isAcceptLoading;
  const items = [acceptLinkRequest, otherUser.id];
  const callback2 = noop.useCallback(() => {
    acceptLinkRequest(otherUser.id);
  }, items);
  const obj2 = { children: null };
  const obj3 = { children: null };
  const obj4 = { style: tmp.header, children: null };
  const obj5 = { otherUser, iconSrc: null, iconStyles: null };
  const obj = otherUser(12160);
  obj5.iconSrc = acceptLinkRequest(4665);
  obj5.iconStyles = tmp.icon;
  const items1 = [closure_5(acceptLinkRequest(15140), obj5), ,];
  const obj6 = { style: tmp.headerText, variant: "text-lg/bold", children: null };
  let intl = otherUser(1115).intl;
  obj6.children = intl.string(acceptLinkRequest(2480).rlNJwZ);
  items1[1] = closure_5(otherUser(4718).Text, obj6);
  items1[2] = closure_5(acceptLinkRequest(15110), { user: otherUser });
  obj4.children = items1;
  const items2 = [closure_6(View, obj4), closure_5(acceptLinkRequest(12162), {})];
  const obj7 = { style: tmp.disclaimer, variant: "text-xs/normal", color: "text-default", children: null };
  const intl2 = otherUser(1115).intl;
  obj7.children = intl2.format(acceptLinkRequest(2480).snlFqR, { username: otherUser.username });
  items2[2] = closure_5(otherUser(4718).Text, obj7);
  obj3.children = items2;
  const items3 = [closure_6(otherUser(8655).ModalContent, obj3)];
  const obj9 = { children: null };
  const obj10 = { children: null };
  const obj11 = { variant: "primary", disabled: isAcceptLoading, loading: isAcceptLoading, text: null, onPress: null };
  const intl3 = otherUser(1115).intl;
  obj11.text = intl3.string(acceptLinkRequest(2480)["wI/jo3"]);
  obj11.onPress = callback2;
  const items4 = [closure_5(otherUser(5144).Button, obj11)];
  const obj12 = { variant: "tertiary", text: null, onPress: null };
  const intl4 = otherUser(1115).intl;
  obj12.text = intl4.string(otherUser(1115).t["ETE/oC"]);
  obj12.onPress = acceptLinkRequest(4925).pop;
  items4[1] = closure_5(otherUser(5144).Button, obj12);
  obj10.children = items4;
  obj9.children = closure_6(otherUser(5603).ButtonGroup, obj10);
  items3[1] = closure_5(otherUser(12170).ModalFooter, obj9);
  obj2.children = items3;
  return closure_6(otherUser(8654).ModalScreen, obj2);
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4722);
let obj2 = {
  header: { display: "flex", alignItems: "center", justifyContent: "center", marginBottom: nativeDefault.space.PX_16 },
  headerText: null,
  icon: null,
  disclaimer: null,
};
let obj3 = { display: "flex", alignItems: "center", justifyContent: "center", marginBottom: nativeDefault.space.PX_16 };
obj2.headerText = { marginTop: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_4 };
let obj5 = { transform: null, tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
let items = [{ rotate: "45deg" }];
obj5.transform = items;
obj2.icon = obj5;
let obj4 = { marginTop: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_4 };
obj2.disclaimer = { marginTop: nativeDefault.space.PX_12 };
let closure_7 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterModalAccept.tsx");

export default function FamilyCenterModalAccept(otherUser) {
  otherUser = otherUser.otherUser;
  const items = [otherUser];
  const memo = noop.useMemo(() => {
    const obj = { ACCEPT: null };
    const obj2 = {
      headerShown: true,
      headerLeft: NavigatorHeader.getHeaderCloseButton(ModalActionCreatorsDefault.pop),
      headerTitle() {
        return null;
      },
      render() {
        return closure_2_5(FamilyCenterModalAcceptScreen, { otherUser });
      },
    };
    obj.ACCEPT = obj2;
    return obj;
  }, items);
  let obj = { initialRouteName: "ACCEPT", screens: memo, headerBackTitle: null };
  const intl = otherUser(1115).intl;
  obj.headerBackTitle = intl.string(otherUser(1115).t["13/7kX"]);
  return closure_5(otherUser(11451).Modal, obj);
}
