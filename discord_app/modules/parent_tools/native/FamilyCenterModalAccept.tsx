// discord_app/modules/parent_tools/native/FamilyCenterModalAccept.tsx
import Button from "Button";
import { View } from "ModalFooter";
import jsxProd from "Modal";
import createCacheKey from "createCacheKey";

let c5;
let closure_6;
const require = arg1;
function FamilyCenterModalAcceptScreen(otherUser) {
  otherUser = otherUser.otherUser;
  let acceptLinkRequest;
  const tmp = createCacheKey();
  const callback = React.useCallback(() => {
    let arr = acceptLinkRequest(4550);
    arr = arr.pop();
  }, []);
  const callback1 = React.useCallback(() => {
    const intl = otherUser(1236).intl;
    otherUser(4061).presentFailedToast(intl.string(otherUser(1236).t.R0RpRX));
  }, []);
  let obj = otherUser(11374);
  const familyCenterActions = obj.useFamilyCenterActions({ onSuccess: callback, onError: callback1 });
  acceptLinkRequest = familyCenterActions.acceptLinkRequest;
  const isAcceptLoading = familyCenterActions.isAcceptLoading;
  const items = [acceptLinkRequest, otherUser.id];
  const callback2 = React.useCallback(() => {
    acceptLinkRequest(otherUser.id);
  }, items);
  obj = { children: null };
  obj = { children: null };
  const obj1 = { style: tmp.header, children: null };
  const obj2 = { otherUser, iconSrc: null, iconStyles: null };
  obj2[1] = acceptLinkRequest(4287);
  obj2[2] = tmp.icon;
  const items1 = [callback(acceptLinkRequest(14243), obj2), , ];
  const obj3 = { style: tmp.headerText, variant: "text-lg/bold", children: null };
  let intl = otherUser(1236).intl;
  obj3[2] = intl.string(acceptLinkRequest(2303).rlNJwZ);
  items1[1] = callback(otherUser(4338).Text, obj3);
  items1[2] = callback(acceptLinkRequest(14213), { user: otherUser });
  obj1[1] = items1;
  const items2 = [callback2(View, obj1), callback(acceptLinkRequest(11376), {}), ];
  const obj4 = { style: tmp.disclaimer, variant: "text-xs/normal", color: "text-default", children: null };
  const intl2 = otherUser(1236).intl;
  obj4[3] = intl2.format(acceptLinkRequest(2303).snlFqR, { username: otherUser.username });
  items2[2] = callback(otherUser(4338).Text, obj4);
  obj[0] = items2;
  const items3 = [callback2(otherUser(7853).ModalContent, obj), ];
  const obj6 = { children: null };
  const obj7 = { children: null };
  const obj8 = { variant: "primary", disabled: isAcceptLoading, loading: isAcceptLoading, text: null, onPress: null };
  const intl3 = otherUser(1236).intl;
  obj8[3] = intl3.string(acceptLinkRequest(2303)["wI/jo3"]);
  obj8[4] = callback2;
  const items4 = [callback(otherUser(4755).Button, obj8), ];
  const obj9 = { variant: "tertiary", text: null, onPress: null };
  const intl4 = otherUser(1236).intl;
  obj9[1] = intl4.string(otherUser(1236).t["ETE/oC"]);
  obj9[2] = acceptLinkRequest(4550).pop;
  items4[1] = callback(otherUser(4755).Button, obj9);
  obj7[0] = items4;
  obj6[0] = callback2(otherUser(5191).ButtonGroup, obj7);
  items3[1] = callback(otherUser(11384).ModalFooter, obj6);
  obj[0] = items3;
  return callback2(otherUser(7852).ModalScreen, obj);
}
({ jsx: c5, jsxs: closure_6 } = jsxProd);
createCacheKey = { header: null, headerText: null, icon: null, disclaimer: null };
createCacheKey = { display: "flex", alignItems: "center", justifyContent: "center", marginBottom: require("Themes").space.PX_16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { marginTop: require("Themes").space.PX_16, marginBottom: require("Themes").space.PX_4 };
let obj1 = { marginTop: require("Themes").space.PX_16, marginBottom: require("Themes").space.PX_4 };
let items = [{ rotate: "45deg" }];
createCacheKey[2] = { transform: items, tintColor: require("Themes").colors.INTERACTIVE_TEXT_DEFAULT };
let obj2 = { transform: items, tintColor: require("Themes").colors.INTERACTIVE_TEXT_DEFAULT };
createCacheKey[3] = { marginTop: require("Themes").space.PX_12 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj3 = { marginTop: require("Themes").space.PX_12 };
const result = require("jsxProd").fileFinishedImporting("modules/parent_tools/native/FamilyCenterModalAccept.tsx");

export default function FamilyCenterModalAccept(otherUser) {
  otherUser = otherUser.otherUser;
  const items = [otherUser];
  const memo = React.useMemo(() => {
    let obj = { ACCEPT: null };
    obj = { headerShown: true, headerLeft: null, headerTitle: null, render: null };
    obj[1] = otherUser(outer1_2[20]).getHeaderCloseButton(outer1_1(outer1_2[5]).pop);
    obj[2] = function headerTitle() {
      return null;
    };
    obj[3] = function render() {
      return outer1_5(outer1_8, { otherUser: closure_0 });
    };
    obj[0] = obj;
    return obj;
  }, items);
  let obj = { initialRouteName: "ACCEPT", screens: memo, headerBackTitle: null };
  const intl = otherUser(1236).intl;
  obj[2] = intl.string(otherUser(1236).t["13/7kX"]);
  return callback(otherUser(11386).Modal, obj);
};