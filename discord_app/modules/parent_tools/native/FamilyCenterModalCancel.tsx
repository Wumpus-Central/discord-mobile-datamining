// discord_app/modules/parent_tools/native/FamilyCenterModalCancel.tsx
import ButtonGroup from "ButtonGroup";
import { View } from "FamilyCenterUsernameHeader";
import jsxProd from "HeaderBackImage";
import createCacheKey from "createCacheKey";

let c5;
let closure_6;
const require = arg1;
function FamilyCenterModalCancelScreen(otherUser) {
  otherUser = otherUser.otherUser;
  let cancelLinkRequest;
  const tmp = createCacheKey();
  const callback = React.useCallback(() => {
    let arr = cancelLinkRequest(4490);
    arr = arr.pop();
  }, []);
  const callback1 = React.useCallback(() => {
    const intl = otherUser(1236).intl;
    otherUser(3984).presentFailedToast(intl.string(otherUser(1236).t.R0RpRX));
  }, []);
  let obj = otherUser(11242);
  const familyCenterActions = obj.useFamilyCenterActions({ onSuccess: callback, onError: callback1 });
  cancelLinkRequest = familyCenterActions.cancelLinkRequest;
  const isCancelLoading = familyCenterActions.isCancelLoading;
  const items = [cancelLinkRequest, otherUser.id];
  const callback2 = React.useCallback(() => {
    cancelLinkRequest(otherUser.id);
  }, items);
  cancelLinkRequest(38)(cancelLinkRequest(7259)(), "FamilyCenterCancelModal should only be rendered for parents.");
  obj = { children: null };
  obj = { children: null };
  const obj1 = { style: tmp.header, children: null };
  const obj2 = { otherUser, iconSrc: null };
  const tmp2 = cancelLinkRequest(7259)();
  obj2[1] = cancelLinkRequest(7950);
  const items1 = [callback(cancelLinkRequest(14083), obj2), , ];
  const obj3 = { style: tmp.headerText, variant: "text-lg/bold", children: null };
  let intl = otherUser(1236).intl;
  obj3[2] = intl.string(cancelLinkRequest(2284).HynllX);
  items1[1] = callback(otherUser(4281).Text, obj3);
  items1[2] = callback(cancelLinkRequest(14053), { user: otherUser });
  obj1[1] = items1;
  obj[0] = callback2(View, obj1);
  const items2 = [callback(otherUser(7731).ModalContent, obj), ];
  const obj4 = { children: null };
  const obj5 = { children: null };
  const obj6 = { variant: "destructive", disabled: isCancelLoading, loading: isCancelLoading, text: null, onPress: null };
  const intl2 = otherUser(1236).intl;
  obj6[3] = intl2.string(cancelLinkRequest(2284).mK40bk);
  obj6[4] = callback2;
  const items3 = [callback(otherUser(4695).Button, obj6), ];
  const obj7 = { variant: "tertiary", text: null, onPress: null };
  const intl3 = otherUser(1236).intl;
  obj7[1] = intl3.string(cancelLinkRequest(2284).czincX);
  obj7[2] = cancelLinkRequest(4490).pop;
  items3[1] = callback(otherUser(4695).Button, obj7);
  obj5[0] = items3;
  obj4[0] = callback2(otherUser(5132).ButtonGroup, obj5);
  items2[1] = callback(otherUser(11252).ModalFooter, obj4);
  obj[0] = items2;
  return callback2(otherUser(7730).ModalScreen, obj);
}
({ jsx: c5, jsxs: closure_6 } = jsxProd);
createCacheKey = { header: null, headerText: null };
createCacheKey = { display: "flex", alignItems: "center", justifyContent: "center", marginBottom: require("Themes").space.PX_16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { marginTop: require("Themes").space.PX_16, marginBottom: require("Themes").space.PX_4 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj1 = { marginTop: require("Themes").space.PX_16, marginBottom: require("Themes").space.PX_4 };
const result = require("jsxProd").fileFinishedImporting("modules/parent_tools/native/FamilyCenterModalCancel.tsx");

export default function FamilyCenterModalCancel(otherUser) {
  otherUser = otherUser.otherUser;
  const items = [otherUser];
  const memo = React.useMemo(() => {
    let obj = { CANCEL: null };
    obj = { headerShown: true, headerLeft: null, headerTitle: null, render: null };
    obj[1] = otherUser(outer1_2[21]).getHeaderCloseButton(outer1_1(outer1_2[6]).pop);
    obj[2] = function headerTitle() {
      return null;
    };
    obj[3] = function render() {
      return outer1_5(outer1_8, { otherUser: closure_0 });
    };
    obj[0] = obj;
    return obj;
  }, items);
  let obj = { initialRouteName: "CANCEL", screens: memo, headerBackTitle: null };
  const intl = otherUser(1236).intl;
  obj[2] = intl.string(otherUser(1236).t["13/7kX"]);
  return callback(otherUser(11254).Modal, obj);
};