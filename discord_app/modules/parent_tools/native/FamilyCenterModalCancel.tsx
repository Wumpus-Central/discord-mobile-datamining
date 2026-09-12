// === Module 15016: FamilyCenterModalCancel ===

// Module 15016 (FamilyCenterModalCancel)
import nativeDefault from "native" /* 576 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4839 */;
import NavigatorHeader from "NavigatorHeader" /* 5705 */;
import noop from "module_19" /* 19 */;

require = fn;
function FamilyCenterModalCancelScreen(otherUser) {
  otherUser = otherUser.otherUser;
  const tmp = closure_7();
  const callback = noop.useCallback(() => {
    let arr = cancelLinkRequest(4839);
    arr = arr.pop();
  }, []);
  const callback1 = noop.useCallback(() => {
    const intl = otherUser(1114).intl;
    otherUser(4334).presentFailedToast(intl.string(otherUser(1114).t.R0RpRX));
  }, []);
  let obj = otherUser(12046);
  const familyCenterActions = obj.useFamilyCenterActions({ onSuccess: callback, onError: callback1 });
  const cancelLinkRequest = familyCenterActions.cancelLinkRequest;
  const isCancelLoading = familyCenterActions.isCancelLoading;
  const items = [cancelLinkRequest, otherUser.id];
  const callback2 = noop.useCallback(() => {
    cancelLinkRequest(otherUser.id);
  }, items);
  cancelLinkRequest(38)(cancelLinkRequest(8769)(), "FamilyCenterCancelModal should only be rendered for parents.");
  obj = { children: null };
  obj = { children: null };
  const obj1 = { style: tmp.header, children: null };
  const obj2 = { otherUser, iconSrc: null };
  const tmp2 = cancelLinkRequest(8769)();
  obj2.iconSrc = cancelLinkRequest(7095);
  const items1 = [closure_5(cancelLinkRequest(15011), obj2), , ];
  const obj3 = { style: tmp.headerText, variant: "text-lg/bold", children: null };
  let intl = otherUser(1114).intl;
  obj3.children = intl.string(cancelLinkRequest(2396).HynllX);
  items1[1] = closure_5(otherUser(4632).Text, obj3);
  items1[2] = closure_5(cancelLinkRequest(14981), { user: otherUser });
  obj1.children = items1;
  obj.children = closure_6(View, obj1);
  const items2 = [closure_5(otherUser(8540).ModalContent, obj), ];
  const obj4 = { children: null };
  const obj5 = { children: null };
  const obj6 = { variant: "destructive", disabled: isCancelLoading, loading: isCancelLoading, text: null, onPress: null };
  const intl2 = otherUser(1114).intl;
  obj6.text = intl2.string(cancelLinkRequest(2396).mK40bk);
  obj6.onPress = callback2;
  const items3 = [closure_5(otherUser(5056).Button, obj6), ];
  const obj7 = { variant: "tertiary", text: null, onPress: null };
  const intl3 = otherUser(1114).intl;
  obj7.text = intl3.string(cancelLinkRequest(2396).czincX);
  obj7.onPress = cancelLinkRequest(4839).pop;
  items3[1] = closure_5(otherUser(5056).Button, obj7);
  obj5.children = items3;
  obj4.children = closure_6(otherUser(5514).ButtonGroup, obj5);
  items2[1] = closure_5(otherUser(12056).ModalFooter, obj4);
  obj.children = items2;
  return closure_6(otherUser(8539).ModalScreen, obj);
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
fn(4636);
let createStyles = { header: null, headerText: null };
createStyles = { display: "flex", alignItems: "center", justifyContent: "center", marginBottom: nativeDefault.space.PX_16 };
createStyles.header = createStyles;
createStyles.headerText = { marginTop: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_4 };
let closure_7 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterModalCancel.tsx");

export default function FamilyCenterModalCancel(otherUser) {
  otherUser = otherUser.otherUser;
  const items = [otherUser];
  const memo = noop.useMemo(() => {
    let obj = { CANCEL: null };
    obj = {
      headerShown: true,
      headerLeft: NavigatorHeader.getHeaderCloseButton(ModalActionCreatorsDefault.pop),
      headerTitle() {
        return null;
      },
      render() {
        return closure_2_5(FamilyCenterModalCancelScreen, { otherUser });
      }
    };
    obj.CANCEL = obj;
    return obj;
  }, items);
  let obj = { initialRouteName: "CANCEL", screens: memo, headerBackTitle: null };
  const intl = otherUser(1114).intl;
  obj.headerBackTitle = intl.string(otherUser(1114).t["13/7kX"]);
  return closure_5(otherUser(12058).Modal, obj);
};