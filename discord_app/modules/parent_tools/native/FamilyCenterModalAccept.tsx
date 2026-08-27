// === Module 14480: FamilyCenterModalAcceptScreen ===

// Module 14480 (FamilyCenterModalAcceptScreen)
import ThemesDefault from "Themes" /* 712 */;
import closure_3 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4445 */;

const require = arg1;
function FamilyCenterModalAcceptScreen(otherUser) {
  otherUser = otherUser.otherUser;
  let acceptLinkRequest;
  const tmp = callback3();
  const callback = React.useCallback(() => {
    let arr = acceptLinkRequest(4676);
    arr = arr.pop();
  }, []);
  const callback1 = React.useCallback(() => {
    const intl = otherUser(1236).intl;
    otherUser(4161).presentFailedToast(intl.string(otherUser(1236).t.R0RpRX));
  }, []);
  let obj = otherUser(11408);
  const familyCenterActions = obj.useFamilyCenterActions({ onSuccess: callback, onError: callback1 });
  acceptLinkRequest = familyCenterActions.acceptLinkRequest;
  const isAcceptLoading = familyCenterActions.isAcceptLoading;
  const items = [acceptLinkRequest, otherUser.id];
  const callback2 = React.useCallback(() => {
    acceptLinkRequest(otherUser.id);
  }, items);
  obj = { children: null };
  obj = { children: null };
  obj1 = { style: tmp.header, children: null };
  const obj2 = { otherUser, iconSrc: acceptLinkRequest(4389), iconStyles: tmp.icon };
  const items1 = [callback(acceptLinkRequest(14477), obj2), , ];
  const obj3 = { style: tmp.headerText, variant: "text-lg/bold", children: null };
  let intl = otherUser(1236).intl;
  obj3[2] = intl.string(acceptLinkRequest(2369).rlNJwZ);
  items1[1] = callback(otherUser(4441).Text, obj3);
  items1[2] = callback(acceptLinkRequest(14447), { user: otherUser });
  obj1[1] = items1;
  const items2 = [callback2(View, obj1), callback(acceptLinkRequest(11410), {}), ];
  const obj4 = { style: tmp.disclaimer, variant: "text-xs/normal", color: "text-default", children: null };
  const intl2 = otherUser(1236).intl;
  obj4[3] = intl2.format(acceptLinkRequest(2369).snlFqR, { username: otherUser.username });
  items2[2] = callback(otherUser(4441).Text, obj4);
  obj[0] = items2;
  const items3 = [callback2(otherUser(8624).ModalContent, obj), ];
  const obj6 = { children: null };
  const obj7 = { children: null };
  const obj8 = { variant: "primary", disabled: isAcceptLoading, loading: isAcceptLoading, text: null, onPress: null };
  const intl3 = otherUser(1236).intl;
  obj8[3] = intl3.string(acceptLinkRequest(2369)["wI/jo3"]);
  obj8[4] = callback2;
  const items4 = [callback(otherUser(4880).Button, obj8), ];
  const obj9 = { variant: "tertiary", text: null, onPress: null };
  const intl4 = otherUser(1236).intl;
  obj9[1] = intl4.string(otherUser(1236).t["ETE/oC"]);
  obj9[2] = acceptLinkRequest(4676).pop;
  items4[1] = callback(otherUser(4880).Button, obj9);
  obj7[0] = items4;
  obj6[0] = callback2(otherUser(5328).ButtonGroup, obj7);
  items3[1] = callback(otherUser(11418).ModalFooter, obj6);
  obj[0] = items3;
  return callback2(otherUser(8623).ModalScreen, obj);
}
({ jsx: c5, jsxs: closure_6 } = jsxProd);
createCacheKey = { header: null, headerText: null, icon: null, disclaimer: null };
createCacheKey = { display: "flex", alignItems: "center", justifyContent: "center", marginBottom: ThemesDefault.space.PX_16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { marginTop: ThemesDefault.space.PX_16, marginBottom: ThemesDefault.space.PX_4 };
let obj1 = { marginTop: ThemesDefault.space.PX_16, marginBottom: ThemesDefault.space.PX_4 };
let items = [{ rotate: "45deg" }];
createCacheKey[2] = { transform: items, tintColor: ThemesDefault.colors.INTERACTIVE_TEXT_DEFAULT };
let obj2 = { transform: items, tintColor: ThemesDefault.colors.INTERACTIVE_TEXT_DEFAULT };
createCacheKey[3] = { marginTop: ThemesDefault.space.PX_12 };
let closure_7 = createCacheKey.createStyles(createCacheKey);
let obj3 = { marginTop: ThemesDefault.space.PX_12 };
const result = require("set").fileFinishedImporting("modules/parent_tools/native/FamilyCenterModalAccept.tsx");

export default function FamilyCenterModalAccept(otherUser) {
  otherUser = otherUser.otherUser;
  const items = [otherUser];
  const memo = React.useMemo(() => {
    let obj = { ACCEPT: null };
    obj = {
      headerShown: true,
      headerLeft: otherUser(closure_1_2[20]).getHeaderCloseButton(closure_1_1(closure_1_2[5]).pop),
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
  let obj = { initialRouteName: "ACCEPT", screens: memo, headerBackTitle: null };
  const intl = otherUser(1236).intl;
  obj[2] = intl.string(otherUser(1236).t["13/7kX"]);
  return callback(otherUser(11420).Modal, obj);
};