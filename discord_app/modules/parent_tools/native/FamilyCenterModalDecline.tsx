// discord_app/modules/parent_tools/native/FamilyCenterModalDecline.tsx
import ButtonGroup from "ButtonGroup";
import { View } from "FamilyCenterUsernameHeader";
import jsxProd from "HeaderBackImage";
import createCacheKey from "createCacheKey";

let c5;
let closure_6;
const require = arg1;
function FamilyCenterModalDeclineScreen(otherUser) {
  otherUser = otherUser.otherUser;
  let declineLinkRequest;
  const tmp = createCacheKey();
  const callback = React.useCallback(() => {
    let arr = declineLinkRequest(4509);
    arr = arr.pop();
  }, []);
  const callback1 = React.useCallback(() => {
    const intl = otherUser(1236).intl;
    otherUser(4001).presentFailedToast(intl.string(otherUser(1236).t.R0RpRX));
  }, []);
  let obj = otherUser(11324);
  const familyCenterActions = obj.useFamilyCenterActions({ onSuccess: callback, onError: callback1 });
  declineLinkRequest = familyCenterActions.declineLinkRequest;
  const isDeclineLoading = familyCenterActions.isDeclineLoading;
  const items = [declineLinkRequest, otherUser.id];
  const callback2 = React.useCallback(() => {
    declineLinkRequest(otherUser.id);
  }, items);
  declineLinkRequest(38)(!declineLinkRequest(7338)(), "FamilyCenterDeclineLinkModal should only be rendered for teens.");
  obj = { children: null };
  obj = { children: null };
  const obj1 = { style: tmp.header, children: null };
  const obj2 = { otherUser, iconSrc: null };
  const tmp2 = declineLinkRequest(7338)();
  obj2[1] = declineLinkRequest(8027);
  const items1 = [callback(declineLinkRequest(14169), obj2), , ];
  const obj3 = { style: tmp.headerText, variant: "text-lg/bold", children: null };
  let intl = otherUser(1236).intl;
  obj3[2] = intl.string(declineLinkRequest(2284).teIRCR);
  items1[1] = callback(otherUser(4299).Text, obj3);
  items1[2] = callback(declineLinkRequest(14139), { user: otherUser });
  obj1[1] = items1;
  const items2 = [callback2(View, obj1), ];
  const obj4 = { style: tmp.body, children: null };
  const obj5 = { style: tmp.noticeHeader, variant: "eyebrow", color: "mobile-text-heading-primary", children: null };
  const intl2 = otherUser(1236).intl;
  obj5[3] = intl2.string(declineLinkRequest(2284).cXgKMD);
  const items3 = [callback(otherUser(4299).Text, obj5), ];
  const obj6 = { variant: "text-sm/normal", color: "text-default", children: null };
  const intl3 = otherUser(1236).intl;
  obj6[2] = intl3.string(declineLinkRequest(2284).LcM8BS);
  items3[1] = callback(otherUser(4299).Text, obj6);
  obj4[1] = items3;
  items2[1] = callback2(View, obj4);
  obj[0] = items2;
  const items4 = [callback2(otherUser(7808).ModalContent, obj), ];
  const obj7 = { children: null };
  const obj8 = { children: null };
  const obj9 = { variant: "destructive", disabled: isDeclineLoading, loading: isDeclineLoading, text: null, onPress: null };
  const intl4 = otherUser(1236).intl;
  obj9[3] = intl4.string(declineLinkRequest(2284).dKxFcn);
  obj9[4] = callback2;
  const items5 = [callback(otherUser(4714).Button, obj9), ];
  const obj10 = { variant: "tertiary", text: null, onPress: null };
  const intl5 = otherUser(1236).intl;
  obj10[1] = intl5.string(otherUser(1236).t["ETE/oC"]);
  obj10[2] = declineLinkRequest(4509).pop;
  items5[1] = callback(otherUser(4714).Button, obj10);
  obj8[0] = items5;
  obj7[0] = callback2(otherUser(5150).ButtonGroup, obj8);
  items4[1] = callback(otherUser(11334).ModalFooter, obj7);
  obj[0] = items4;
  return callback2(otherUser(7807).ModalScreen, obj);
}
({ jsx: c5, jsxs: closure_6 } = jsxProd);
createCacheKey = { header: null, headerText: null, body: null, noticeHeader: null };
createCacheKey = { display: "flex", alignItems: "center", justifyContent: "center", marginBottom: require("Themes").space.PX_16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { marginTop: require("Themes").space.PX_16, marginBottom: require("Themes").space.PX_4 };
let obj1 = { marginTop: require("Themes").space.PX_16, marginBottom: require("Themes").space.PX_4 };
createCacheKey[2] = { padding: require("Themes").space.PX_24, borderRadius: require("Themes").radii.md, backgroundColor: require("Themes").colors.BACKGROUND_SURFACE_HIGH };
let obj2 = { padding: require("Themes").space.PX_24, borderRadius: require("Themes").radii.md, backgroundColor: require("Themes").colors.BACKGROUND_SURFACE_HIGH };
createCacheKey[3] = { marginBottom: require("Themes").space.PX_4 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj3 = { marginBottom: require("Themes").space.PX_4 };
const result = require("jsxProd").fileFinishedImporting("modules/parent_tools/native/FamilyCenterModalDecline.tsx");

export default function FamilyCenterModalDecline(otherUser) {
  otherUser = otherUser.otherUser;
  const items = [otherUser];
  const memo = React.useMemo(() => {
    let obj = { DECLINE: null };
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
  let obj = { initialRouteName: "DECLINE", screens: memo, headerBackTitle: null };
  const intl = otherUser(1236).intl;
  obj[2] = intl.string(otherUser(1236).t["13/7kX"]);
  return callback(otherUser(11336).Modal, obj);
};