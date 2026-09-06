// discord_app/modules/parent_tools/native/FamilyCenterModalDecline.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import ModalActionCreatorsDefault from "../../../actions/ModalActionCreators.tsx";
import NavigatorHeader from "../../../design/components/Navigator/native/NavigatorHeader.native.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
function FamilyCenterModalDeclineScreen(otherUser) {
  otherUser = otherUser.otherUser;
  const tmp = closure_7();
  const callback = noop.useCallback(() => {
    let arr = declineLinkRequest(4763);
    arr = arr.pop();
  }, []);
  const callback1 = noop.useCallback(() => {
    const intl = otherUser(1114).intl;
    otherUser(4258).presentFailedToast(intl.string(otherUser(1114).t.R0RpRX));
  }, []);
  let obj = otherUser(11916);
  const familyCenterActions = obj.useFamilyCenterActions({ onSuccess: callback, onError: callback1 });
  const declineLinkRequest = familyCenterActions.declineLinkRequest;
  const isDeclineLoading = familyCenterActions.isDeclineLoading;
  const items = [declineLinkRequest, otherUser.id];
  const callback2 = noop.useCallback(() => {
    declineLinkRequest(otherUser.id);
  }, items);
  declineLinkRequest(38)(
    !declineLinkRequest(8646)(),
    "FamilyCenterDeclineLinkModal should only be rendered for teens.",
  );
  obj = { children: null };
  obj = { children: null };
  const obj1 = { style: tmp.header, children: null };
  const obj2 = { otherUser, iconSrc: null };
  const tmp2 = declineLinkRequest(8646)();
  obj2.iconSrc = declineLinkRequest(6992);
  const items1 = [closure_5(declineLinkRequest(14922), obj2), ,];
  const obj3 = { style: tmp.headerText, variant: "text-lg/bold", children: null };
  let intl = otherUser(1114).intl;
  obj3.children = intl.string(declineLinkRequest(2396).teIRCR);
  items1[1] = closure_5(otherUser(4556).Text, obj3);
  items1[2] = closure_5(declineLinkRequest(14892), { user: otherUser });
  obj1.children = items1;
  const items2 = [closure_6(View, obj1)];
  const obj4 = { style: tmp.body, children: null };
  const obj5 = { style: tmp.noticeHeader, variant: "eyebrow", color: "mobile-text-heading-primary", children: null };
  const intl2 = otherUser(1114).intl;
  obj5.children = intl2.string(declineLinkRequest(2396).cXgKMD);
  const items3 = [closure_5(otherUser(4556).Text, obj5)];
  const obj6 = { variant: "text-sm/normal", color: "text-default", children: null };
  const intl3 = otherUser(1114).intl;
  obj6.children = intl3.string(declineLinkRequest(2396).LcM8BS);
  items3[1] = closure_5(otherUser(4556).Text, obj6);
  obj4.children = items3;
  items2[1] = closure_6(View, obj4);
  obj.children = items2;
  const items4 = [closure_6(otherUser(8422).ModalContent, obj)];
  const obj7 = { children: null };
  const obj8 = { children: null };
  const obj9 = {
    variant: "destructive",
    disabled: isDeclineLoading,
    loading: isDeclineLoading,
    text: null,
    onPress: null,
  };
  const intl4 = otherUser(1114).intl;
  obj9.text = intl4.string(declineLinkRequest(2396).dKxFcn);
  obj9.onPress = callback2;
  const items5 = [closure_5(otherUser(4975).Button, obj9)];
  const obj10 = { variant: "tertiary", text: null, onPress: null };
  const intl5 = otherUser(1114).intl;
  obj10.text = intl5.string(otherUser(1114).t["ETE/oC"]);
  obj10.onPress = declineLinkRequest(4763).pop;
  items5[1] = closure_5(otherUser(4975).Button, obj10);
  obj8.children = items5;
  obj7.children = closure_6(otherUser(5433).ButtonGroup, obj8);
  items4[1] = closure_5(otherUser(11926).ModalFooter, obj7);
  obj.children = items4;
  return closure_6(otherUser(8421).ModalScreen, obj);
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
fn(4560);
let createStyles = { header: null, headerText: null, body: null, noticeHeader: null };
createStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: nativeDefault.space.PX_16,
};
createStyles.header = createStyles;
createStyles.headerText = { marginTop: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_4 };
let obj1 = { marginTop: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_4 };
createStyles.body = {
  padding: nativeDefault.space.PX_24,
  borderRadius: nativeDefault.radii.md,
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
};
let obj2 = {
  padding: nativeDefault.space.PX_24,
  borderRadius: nativeDefault.radii.md,
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
};
createStyles.noticeHeader = { marginBottom: nativeDefault.space.PX_4 };
let closure_7 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterModalDecline.tsx");

export default function FamilyCenterModalDecline(otherUser) {
  otherUser = otherUser.otherUser;
  const items = [otherUser];
  const memo = noop.useMemo(() => {
    let obj = { DECLINE: null };
    obj = {
      headerShown: true,
      headerLeft: NavigatorHeader.getHeaderCloseButton(ModalActionCreatorsDefault.pop),
      headerTitle() {
        return null;
      },
      render() {
        return closure_2_5(FamilyCenterModalDeclineScreen, { otherUser });
      },
    };
    obj.DECLINE = obj;
    return obj;
  }, items);
  let obj = { initialRouteName: "DECLINE", screens: memo, headerBackTitle: null };
  const intl = otherUser(1114).intl;
  obj.headerBackTitle = intl.string(otherUser(1114).t["13/7kX"]);
  return closure_5(otherUser(11928).Modal, obj);
}
