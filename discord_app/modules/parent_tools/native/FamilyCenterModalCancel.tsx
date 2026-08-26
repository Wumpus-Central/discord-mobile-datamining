// discord_app/modules/parent_tools/native/FamilyCenterModalCancel.tsx
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import closure_3 from "../../../../_runtime/00019_noop.js";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
function FamilyCenterModalCancelScreen(otherUser) {
  otherUser = otherUser.otherUser;
  let cancelLinkRequest;
  const tmp = callback3();
  const callback = React.useCallback(() => {
    let arr = cancelLinkRequest(4675);
    arr = arr.pop();
  }, []);
  const callback1 = React.useCallback(() => {
    const intl = otherUser(1236).intl;
    otherUser(4161).presentFailedToast(intl.string(otherUser(1236).t.R0RpRX));
  }, []);
  let obj = otherUser(11557);
  const familyCenterActions = obj.useFamilyCenterActions({ onSuccess: callback, onError: callback1 });
  cancelLinkRequest = familyCenterActions.cancelLinkRequest;
  const isCancelLoading = familyCenterActions.isCancelLoading;
  const items = [cancelLinkRequest, otherUser.id];
  const callback2 = React.useCallback(() => {
    cancelLinkRequest(otherUser.id);
  }, items);
  cancelLinkRequest(38)(cancelLinkRequest(7547)(), "FamilyCenterCancelModal should only be rendered for parents.");
  obj = { children: null };
  obj = { children: null };
  obj1 = { style: tmp.header, children: null };
  const obj2 = { otherUser, iconSrc: null };
  const tmp2 = cancelLinkRequest(7547)();
  obj2[1] = cancelLinkRequest(8245);
  const items1 = [callback(cancelLinkRequest(14450), obj2), , ];
  const obj3 = { style: tmp.headerText, variant: "text-lg/bold", children: null };
  let intl = otherUser(1236).intl;
  obj3[2] = intl.string(cancelLinkRequest(2369).HynllX);
  items1[1] = callback(otherUser(4440).Text, obj3);
  items1[2] = callback(cancelLinkRequest(14420), { user: otherUser });
  obj1[1] = items1;
  obj[0] = callback2(View, obj1);
  const items2 = [callback(otherUser(8020).ModalContent, obj), ];
  const obj4 = { children: null };
  const obj5 = { children: null };
  const obj6 = { variant: "destructive", disabled: isCancelLoading, loading: isCancelLoading, text: null, onPress: null };
  const intl2 = otherUser(1236).intl;
  obj6[3] = intl2.string(cancelLinkRequest(2369).mK40bk);
  obj6[4] = callback2;
  const items3 = [callback(otherUser(4879).Button, obj6), ];
  const obj7 = { variant: "tertiary", text: null, onPress: null };
  const intl3 = otherUser(1236).intl;
  obj7[1] = intl3.string(cancelLinkRequest(2369).czincX);
  obj7[2] = cancelLinkRequest(4675).pop;
  items3[1] = callback(otherUser(4879).Button, obj7);
  obj5[0] = items3;
  obj4[0] = callback2(otherUser(5323).ButtonGroup, obj5);
  items2[1] = callback(otherUser(11567).ModalFooter, obj4);
  obj[0] = items2;
  return callback2(otherUser(8019).ModalScreen, obj);
}
({ jsx: c5, jsxs: closure_6 } = jsxProd);
createCacheKey = { header: null, headerText: null };
createCacheKey = { display: "flex", alignItems: "center", justifyContent: "center", marginBottom: ThemesDefault.space.PX_16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { marginTop: ThemesDefault.space.PX_16, marginBottom: ThemesDefault.space.PX_4 };
let closure_7 = createCacheKey.createStyles(createCacheKey);
let obj1 = { marginTop: ThemesDefault.space.PX_16, marginBottom: ThemesDefault.space.PX_4 };
const result = require("set").fileFinishedImporting("modules/parent_tools/native/FamilyCenterModalCancel.tsx");

export default function FamilyCenterModalCancel(otherUser) {
  otherUser = otherUser.otherUser;
  const items = [otherUser];
  const memo = React.useMemo(() => {
    let obj = { CANCEL: null };
    obj = {
      headerShown: true,
      headerLeft: otherUser(closure_1_2[21]).getHeaderCloseButton(closure_1_1(closure_1_2[6]).pop),
      headerTitle() {
        return null;
      },
      render() {
        return closure_1_5(closure_1_8, { otherUser: closure_0 });
      }
    };
    obj[0] = obj;
    return obj;
  }, items);
  let obj = { initialRouteName: "CANCEL", screens: memo, headerBackTitle: null };
  const intl = otherUser(1236).intl;
  obj[2] = intl.string(otherUser(1236).t["13/7kX"]);
  return callback(otherUser(11569).Modal, obj);
};