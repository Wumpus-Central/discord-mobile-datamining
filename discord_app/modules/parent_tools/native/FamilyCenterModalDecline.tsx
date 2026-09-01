// discord_app/modules/parent_tools/native/FamilyCenterModalDecline.tsx
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import closure_3 from "../../../../_runtime/00019_noop.js";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
function FamilyCenterModalDeclineScreen(otherUser) {
  otherUser = otherUser.otherUser;
  let declineLinkRequest;
  const tmp = callback3();
  const callback = React.useCallback(() => {
    let arr = declineLinkRequest(4723);
    arr = arr.pop();
  }, []);
  const callback1 = React.useCallback(() => {
    const intl = otherUser(1236).intl;
    otherUser(4193).presentFailedToast(intl.string(otherUser(1236).t.R0RpRX));
  }, []);
  let obj = otherUser(11489);
  const familyCenterActions = obj.useFamilyCenterActions({ onSuccess: callback, onError: callback1 });
  declineLinkRequest = familyCenterActions.declineLinkRequest;
  const isDeclineLoading = familyCenterActions.isDeclineLoading;
  const items = [declineLinkRequest, otherUser.id];
  const callback2 = React.useCallback(() => {
    declineLinkRequest(otherUser.id);
  }, items);
  declineLinkRequest(38)(
    !declineLinkRequest(8773)(),
    "FamilyCenterDeclineLinkModal should only be rendered for teens.",
  );
  obj = { children: null };
  obj = { children: null };
  obj1 = { style: tmp.header, children: null };
  const obj2 = { otherUser, iconSrc: null };
  const tmp2 = declineLinkRequest(8773)();
  obj2[1] = declineLinkRequest(7764);
  const items1 = [callback(declineLinkRequest(14528), obj2), ,];
  const obj3 = { style: tmp.headerText, variant: "text-lg/bold", children: null };
  let intl = otherUser(1236).intl;
  obj3[2] = intl.string(declineLinkRequest(2369).teIRCR);
  items1[1] = callback(otherUser(4474).Text, obj3);
  items1[2] = callback(declineLinkRequest(14498), { user: otherUser });
  obj1[1] = items1;
  const items2 = [callback2(View, obj1)];
  const obj4 = { style: tmp.body, children: null };
  const obj5 = { style: tmp.noticeHeader, variant: "eyebrow", color: "mobile-text-heading-primary", children: null };
  const intl2 = otherUser(1236).intl;
  obj5[3] = intl2.string(declineLinkRequest(2369).cXgKMD);
  const items3 = [callback(otherUser(4474).Text, obj5)];
  const obj6 = { variant: "text-sm/normal", color: "text-default", children: null };
  const intl3 = otherUser(1236).intl;
  obj6[2] = intl3.string(declineLinkRequest(2369).LcM8BS);
  items3[1] = callback(otherUser(4474).Text, obj6);
  obj4[1] = items3;
  items2[1] = callback2(View, obj4);
  obj[0] = items2;
  const items4 = [callback2(otherUser(8693).ModalContent, obj)];
  const obj7 = { children: null };
  const obj8 = { children: null };
  const obj9 = {
    variant: "destructive",
    disabled: isDeclineLoading,
    loading: isDeclineLoading,
    text: null,
    onPress: null,
  };
  const intl4 = otherUser(1236).intl;
  obj9[3] = intl4.string(declineLinkRequest(2369).dKxFcn);
  obj9[4] = callback2;
  const items5 = [callback(otherUser(4928).Button, obj9)];
  const obj10 = { variant: "tertiary", text: null, onPress: null };
  const intl5 = otherUser(1236).intl;
  obj10[1] = intl5.string(otherUser(1236).t["ETE/oC"]);
  obj10[2] = declineLinkRequest(4723).pop;
  items5[1] = callback(otherUser(4928).Button, obj10);
  obj8[0] = items5;
  obj7[0] = callback2(otherUser(5376).ButtonGroup, obj8);
  items4[1] = callback(otherUser(11499).ModalFooter, obj7);
  obj[0] = items4;
  return callback2(otherUser(8692).ModalScreen, obj);
}
({ jsx: c5, jsxs: closure_6 } = jsxProd);
createCacheKey = { header: null, headerText: null, body: null, noticeHeader: null };
createCacheKey = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: ThemesDefault.space.PX_16,
};
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { marginTop: ThemesDefault.space.PX_16, marginBottom: ThemesDefault.space.PX_4 };
let obj1 = { marginTop: ThemesDefault.space.PX_16, marginBottom: ThemesDefault.space.PX_4 };
createCacheKey[2] = {
  padding: ThemesDefault.space.PX_24,
  borderRadius: ThemesDefault.radii.md,
  backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH,
};
let obj2 = {
  padding: ThemesDefault.space.PX_24,
  borderRadius: ThemesDefault.radii.md,
  backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH,
};
createCacheKey[3] = { marginBottom: ThemesDefault.space.PX_4 };
let closure_7 = createCacheKey.createStyles(createCacheKey);
let obj3 = { marginBottom: ThemesDefault.space.PX_4 };
const result = require("set").fileFinishedImporting("modules/parent_tools/native/FamilyCenterModalDecline.tsx");

export default function FamilyCenterModalDecline(otherUser) {
  otherUser = otherUser.otherUser;
  const items = [otherUser];
  const memo = React.useMemo(() => {
    let obj = { DECLINE: null };
    obj = {
      headerShown: true,
      headerLeft: otherUser(closure_1_2[21]).getHeaderCloseButton(closure_1_1(closure_1_2[6]).pop),
      headerTitle() {
        return null;
      },
      render() {
        return closure_1_5(closure_1_8, { otherUser: closure_0 });
      },
    };
    obj[0] = obj;
    return obj;
  }, items);
  let obj = { initialRouteName: "DECLINE", screens: memo, headerBackTitle: null };
  const intl = otherUser(1236).intl;
  obj[2] = intl.string(otherUser(1236).t["13/7kX"]);
  return callback(otherUser(11501).Modal, obj);
}
