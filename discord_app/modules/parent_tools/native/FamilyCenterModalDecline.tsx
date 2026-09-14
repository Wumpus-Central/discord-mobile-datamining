// === Module 15016: FamilyCenterModalDecline ===

// Module 15016 (FamilyCenterModalDecline)
import nativeDefault from "native" /* 576 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4839 */;
import NavigatorHeader from "NavigatorHeader" /* 5705 */;
import noop from "module_19" /* 19 */;

require = fn;
function FamilyCenterModalDeclineScreen(otherUser) {
  otherUser = otherUser.otherUser;
  let declineLinkRequest;
  const tmp = closure_7();
  const callback = noop.useCallback(() => {
    declineLinkRequest(4839).pop();
  }, []);
  const callback1 = noop.useCallback(() => {
    const intl = otherUser(1114).intl;
    otherUser(4334).presentFailedToast(intl.string(otherUser(1114).t.R0RpRX));
  }, []);
  const tmp2 = declineLinkRequest(8769)();
  const familyCenterActions = otherUser(12047).useFamilyCenterActions({ onSuccess: callback, onError: callback1 });
  declineLinkRequest = familyCenterActions.declineLinkRequest;
  const isDeclineLoading = familyCenterActions.isDeclineLoading;
  const items = [declineLinkRequest, otherUser.id];
  const callback2 = noop.useCallback(() => {
    declineLinkRequest(otherUser.id);
  }, items);
  declineLinkRequest(38)(!tmp2, "FamilyCenterDeclineLinkModal should only be rendered for teens.");
  const obj2 = { children: null };
  const obj3 = { children: null };
  const obj4 = { style: tmp.header, children: null };
  const obj5 = { otherUser, iconSrc: null };
  const obj = otherUser(12047);
  obj5.iconSrc = declineLinkRequest(7095);
  const items1 = [closure_5(declineLinkRequest(15012), obj5), , ];
  const obj6 = { style: tmp.headerText, variant: "text-lg/bold", children: null };
  let intl = otherUser(1114).intl;
  obj6.children = intl.string(declineLinkRequest(2396).teIRCR);
  items1[1] = closure_5(otherUser(4632).Text, obj6);
  items1[2] = closure_5(declineLinkRequest(14982), { user: otherUser });
  obj4.children = items1;
  const items2 = [closure_6(View, obj4), ];
  const obj7 = { style: tmp.body, children: null };
  const obj8 = { style: tmp.noticeHeader, variant: "eyebrow", color: "mobile-text-heading-primary", children: null };
  const intl2 = otherUser(1114).intl;
  obj8.children = intl2.string(declineLinkRequest(2396).cXgKMD);
  const items3 = [closure_5(otherUser(4632).Text, obj8), ];
  const obj9 = { variant: "text-sm/normal", color: "text-default", children: null };
  const intl3 = otherUser(1114).intl;
  obj9.children = intl3.string(declineLinkRequest(2396).LcM8BS);
  items3[1] = closure_5(otherUser(4632).Text, obj9);
  obj7.children = items3;
  items2[1] = closure_6(View, obj7);
  obj3.children = items2;
  const items4 = [closure_6(otherUser(8540).ModalContent, obj3), ];
  const obj10 = { children: null };
  const obj11 = { children: null };
  const obj12 = { variant: "destructive", disabled: isDeclineLoading, loading: isDeclineLoading, text: null, onPress: null };
  const intl4 = otherUser(1114).intl;
  obj12.text = intl4.string(declineLinkRequest(2396).dKxFcn);
  obj12.onPress = callback2;
  const items5 = [closure_5(otherUser(5056).Button, obj12), ];
  const obj13 = { variant: "tertiary", text: null, onPress: null };
  const intl5 = otherUser(1114).intl;
  obj13.text = intl5.string(otherUser(1114).t["ETE/oC"]);
  obj13.onPress = declineLinkRequest(4839).pop;
  items5[1] = closure_5(otherUser(5056).Button, obj13);
  obj11.children = items5;
  obj10.children = closure_6(otherUser(5514).ButtonGroup, obj11);
  items4[1] = closure_5(otherUser(12057).ModalFooter, obj10);
  obj2.children = items4;
  return closure_6(otherUser(8539).ModalScreen, obj2);
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4636);
let obj2 = { header: { display: "flex", alignItems: "center", justifyContent: "center", marginBottom: nativeDefault.space.PX_16 }, headerText: null, body: null, noticeHeader: null };
let obj3 = { display: "flex", alignItems: "center", justifyContent: "center", marginBottom: nativeDefault.space.PX_16 };
obj2.headerText = { marginTop: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_4 };
let obj4 = { marginTop: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_4 };
obj2.body = { padding: nativeDefault.space.PX_24, borderRadius: nativeDefault.radii.md, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
let obj5 = { padding: nativeDefault.space.PX_24, borderRadius: nativeDefault.radii.md, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
obj2.noticeHeader = { marginBottom: nativeDefault.space.PX_4 };
let closure_7 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterModalDecline.tsx");

export default function FamilyCenterModalDecline(otherUser) {
  otherUser = otherUser.otherUser;
  const items = [otherUser];
  const memo = noop.useMemo(() => {
    const obj = { DECLINE: null };
    const obj2 = {
      headerShown: true,
      headerLeft: NavigatorHeader.getHeaderCloseButton(ModalActionCreatorsDefault.pop),
      headerTitle() {
        return null;
      },
      render() {
        return closure_2_5(FamilyCenterModalDeclineScreen, { otherUser });
      }
    };
    obj.DECLINE = obj2;
    return obj;
  }, items);
  let obj = { initialRouteName: "DECLINE", screens: memo, headerBackTitle: null };
  const intl = otherUser(1114).intl;
  obj.headerBackTitle = intl.string(otherUser(1114).t["13/7kX"]);
  return closure_5(otherUser(12059).Modal, obj);
};