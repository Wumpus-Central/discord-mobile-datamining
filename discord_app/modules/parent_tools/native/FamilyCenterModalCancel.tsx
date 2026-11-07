// === Module 17140: FamilyCenterModalCancel ===

// Module 17140 (FamilyCenterModalCancel)
import nativeDefault from "native" /* 575 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6799 */;
import NavigatorHeader from "NavigatorHeader" /* 7064 */;
import noop from "module_19" /* 19 */;

require = fn;
function FamilyCenterModalCancelScreen(otherUser) {
  otherUser = otherUser.otherUser;
  let cancelLinkRequest;
  const tmp = closure_7();
  const callback = noop.useCallback(() => {
    cancelLinkRequest(6799).pop();
  }, []);
  const callback1 = noop.useCallback(() => {
    const intl = otherUser(1113).intl;
    otherUser(5836).presentFailedToast(intl.string(otherUser(1113).t.R0RpRX));
  }, []);
  const tmp2 = cancelLinkRequest(8441)();
  const familyCenterActions = otherUser(13590).useFamilyCenterActions({ onSuccess: callback, onError: callback1 });
  cancelLinkRequest = familyCenterActions.cancelLinkRequest;
  const isCancelLoading = familyCenterActions.isCancelLoading;
  items = [cancelLinkRequest, otherUser.id];
  const callback2 = noop.useCallback(() => {
    cancelLinkRequest(otherUser.id);
  }, items);
  cancelLinkRequest(38)(tmp2, "FamilyCenterCancelModal should only be rendered for parents.");
  const obj2 = { children: null };
  const obj3 = { children: null };
  const obj4 = { style: tmp.header, children: null };
  const obj5 = { otherUser, iconSrc: null };
  const obj = otherUser(13590);
  obj5.iconSrc = cancelLinkRequest(8429);
  const items1 = [closure_5(cancelLinkRequest(17135), obj5), , ];
  const obj6 = { style: tmp.headerText, variant: "body-lg/semibold", children: null };
  let intl = otherUser(1113).intl;
  obj6.children = intl.string(cancelLinkRequest(2664).HynllX);
  items1[1] = closure_5(otherUser(5751).Text, obj6);
  items1[2] = closure_5(cancelLinkRequest(17103), { user: otherUser });
  obj4.children = items1;
  obj3.children = closure_6(View, obj4);
  const items2 = [closure_5(otherUser(8043).ModalContent, obj3), ];
  const obj7 = { children: null };
  const obj8 = { children: null };
  const obj9 = { variant: "destructive", disabled: isCancelLoading, loading: isCancelLoading, text: null, onPress: null };
  const intl2 = otherUser(1113).intl;
  obj9.text = intl2.string(cancelLinkRequest(2664).mK40bk);
  obj9.onPress = callback2;
  const items3 = [closure_5(otherUser(5758).Button, obj9), ];
  const obj10 = { variant: "tertiary", text: null, onPress: null };
  const intl3 = otherUser(1113).intl;
  obj10.text = intl3.string(cancelLinkRequest(2664).czincX);
  obj10.onPress = cancelLinkRequest(6799).pop;
  items3[1] = closure_5(otherUser(5758).Button, obj10);
  obj8.children = items3;
  obj7.children = closure_6(otherUser(6822).ButtonGroup, obj8);
  items2[1] = closure_5(otherUser(13451).ModalFooter, obj7);
  obj2.children = items2;
  return closure_6(otherUser(8041).ModalScreen, obj2);
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: closure_6 } = jsxProd);
const createStyles = fn(5140);
let obj2 = { header: { display: "flex", alignItems: "center", justifyContent: "center", marginBottom: nativeDefault.space.PX_16 }, headerText: null };
let obj3 = { display: "flex", alignItems: "center", justifyContent: "center", marginBottom: nativeDefault.space.PX_16 };
obj2.headerText = { marginTop: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_4 };
let closure_7 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterModalCancel.tsx");

export default function FamilyCenterModalCancel(otherUser) {
  otherUser = otherUser.otherUser;
  items = [otherUser];
  const memo = noop.useMemo(() => {
    const obj = { CANCEL: null };
    const obj2 = {
      headerShown: true,
      headerLeft: NavigatorHeader.getHeaderCloseButton(ModalActionCreatorsDefault.pop),
      headerTitle() {
        return null;
      },
      render() {
        return closure_2_5(FamilyCenterModalCancelScreen, { otherUser });
      }
    };
    obj.CANCEL = obj2;
    return obj;
  }, items);
  let obj = { initialRouteName: "CANCEL", screens: memo, headerBackTitle: null };
  const intl = otherUser(1113).intl;
  obj.headerBackTitle = intl.string(otherUser(1113).t["13/7kX"]);
  return closure_5(otherUser(11627).Modal, obj);
};