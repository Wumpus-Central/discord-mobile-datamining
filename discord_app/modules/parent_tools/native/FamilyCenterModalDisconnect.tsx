// discord_app/modules/parent_tools/native/FamilyCenterModalDisconnect.tsx
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import messagesProxyDefault from "../FamilyCenter.messages.js";
import nameFromUserDefault from "../../../utils/UserUtils.tsx";
import _modDef5265 from "../../../actions/ModalActionCreators.tsx";
import registerAssetDefault from "../../../../_runtime/08182_registerAsset.js";
import FamilyCenterAvatarPairDefault from "FamilyCenterAvatarPair.tsx";
import closure_3 from "../../../../_runtime/metro/00032__slicedToArray.js";
import closure_4 from "../../../../_runtime/00019_noop.js";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
function FamilyCenterModalDisconnectScreen(otherUser) {
  otherUser = otherUser.otherUser;
  importDefault = undefined;
  dependencyMap = undefined;
  let disconnectLinkRequest;
  let isDisconnectLoading;
  const tmp = callback3();
  const callback = isDisconnectLoading.useCallback(() => {
    let arr = _undefined(_undefined2[6]);
    arr = arr.pop();
  }, []);
  let obj = nameFromUserDefault;
  const name = obj.useName(otherUser);
  obj1 = otherUser(7659);
  const requiresParentalConsent = obj1.useRequiresParentalConsent(otherUser.id);
  [tmp9, c1] = disconnectLinkRequest(isDisconnectLoading.useState(false), 2);
  const tmp8 = disconnectLinkRequest(isDisconnectLoading.useState(false), 2);
  [tmp11, c2] = disconnectLinkRequest(isDisconnectLoading.useState(false), 2);
  const callback1 = isDisconnectLoading.useCallback(() => {
    const intl = otherUser(_undefined2[10]).intl;
    otherUser(_undefined2[9]).presentFailedToast(intl.string(otherUser(_undefined2[10]).t.R0RpRX));
    _undefined(false);
    _undefined2(false);
  }, []);
  let obj2 = otherUser(11143);
  const familyCenterActions = obj2.useFamilyCenterActions({ onSuccess: callback, onError: callback1 });
  disconnectLinkRequest = familyCenterActions.disconnectLinkRequest;
  isDisconnectLoading = familyCenterActions.isDisconnectLoading;
  let obj3 = otherUser(11146);
  let intl = otherUser(1236).intl;
  const tmp10 = disconnectLinkRequest(isDisconnectLoading.useState(false), 2);
  const intl2 = otherUser(1236).intl;
  const ageSpecificText = obj3.useAgeSpecificText(intl.format(messagesProxyDefault.F2lccv, { username: name }), intl2.string(messagesProxyDefault["WH+Gba"]));
  let obj4 = otherUser(11146);
  const intl3 = otherUser(1236).intl;
  const formatResult = intl.format(messagesProxyDefault.F2lccv, { username: name });
  const intl4 = otherUser(1236).intl;
  const ageSpecificText1 = obj4.useAgeSpecificText(intl3.string(messagesProxyDefault.hOEHFn), intl4.format(messagesProxyDefault.Or6hgl, { username: name }));
  let obj5 = otherUser(11146);
  const intl5 = otherUser(1236).intl;
  const stringResult = intl3.string(messagesProxyDefault.hOEHFn);
  const intl6 = otherUser(1236).intl;
  const ageSpecificText2 = obj5.useAgeSpecificText(intl5.format(messagesProxyDefault.XyRW4c, { username: name }), intl6.format(messagesProxyDefault.PlrZal, { username: name }));
  let obj6 = otherUser(11146);
  const intl7 = otherUser(1236).intl;
  const formatResult1 = intl5.format(messagesProxyDefault.XyRW4c, { username: name });
  const intl8 = otherUser(1236).intl;
  const ageSpecificText3 = obj6.useAgeSpecificText(intl7.string(messagesProxyDefault.eiABQz), intl8.string(messagesProxyDefault.PGQBnk));
  let obj7 = otherUser(11146);
  const intl9 = otherUser(1236).intl;
  const stringResult1 = intl7.string(messagesProxyDefault.eiABQz);
  const intl10 = otherUser(1236).intl;
  const items = [disconnectLinkRequest, otherUser.id];
  const ageSpecificText4 = obj7.useAgeSpecificText(intl9.string(messagesProxyDefault.sCbKs4), intl10.string(messagesProxyDefault["0ki7+P"]));
  const items1 = [isDisconnectLoading];
  const callback2 = isDisconnectLoading.useCallback(() => {
    disconnectLinkRequest(otherUser.id);
  }, items);
  const items2 = [isDisconnectLoading];
  callback3 = isDisconnectLoading.useCallback((arg0) => {
    if (!isDisconnectLoading) {
      _undefined(arg0);
    }
  }, items1);
  const callback4 = isDisconnectLoading.useCallback((arg0) => {
    if (!isDisconnectLoading) {
      _undefined2(arg0);
    }
  }, items2);
  obj = { style: tmp.header, children: null };
  obj = { otherUser, iconSrc: null };
  const stringResult2 = intl9.string(messagesProxyDefault.sCbKs4);
  obj[1] = registerAssetDefault;
  const items3 = [callback(FamilyCenterAvatarPairDefault, obj), , ];
  obj1 = { style: tmp.title, variant: "text-lg/bold", children: null };
  const intl11 = otherUser(1236).intl;
  obj1[2] = intl11.format(messagesProxyDefault.o0JXuK, { username: name });
  items3[1] = callback(otherUser(4739).Text, obj1);
  obj2 = { style: tmp.subtitle, variant: "text-sm/bold", color: "text-default", children: ageSpecificText };
  items3[2] = callback(otherUser(4739).Text, obj2);
  obj[1] = items3;
  const items4 = [callback2(View, obj), , , ];
  let tmp28Result = requiresParentalConsent;
  if (requiresParentalConsent) {
    obj3 = { style: null, text: null };
    obj3[0] = tmp.warning;
    obj3[1] = ageSpecificText1;
    tmp28Result = tmp28(tmp3(14299), obj3);
  }
  obj4 = { children: null };
  items4[1] = tmp28Result;
  obj5 = { style: tmp.body, variant: "text-md/normal", color: "text-default", children: ageSpecificText2 };
  items4[2] = callback(otherUser(4739).Text, obj5);
  obj6 = { spacing: tmp3(712).space.PX_12, children: null };
  const items5 = [callback(otherUser(9863).Checkbox, { label: ageSpecificText3, checked: tmp9, onToggle: callback3 }), callback(otherUser(9863).Checkbox, { label: ageSpecificText4, checked: tmp11, onToggle: callback4 })];
  obj6[1] = items5;
  items4[3] = callback2(otherUser(4738).Stack, obj6);
  obj4[0] = items4;
  const items6 = [callback2(otherUser(5450).ModalContent, obj4), ];
  let tmp31 = !tmp9;
  if (tmp9) {
    tmp31 = !tmp11;
  }
  if (!tmp31) {
    tmp31 = isDisconnectLoading;
  }
  obj7 = { children: null };
  const obj8 = { children: null };
  const obj9 = { children: null };
  const obj10 = { variant: "destructive", disabled: tmp31, loading: isDisconnectLoading, text: null, onPress: null };
  const intl12 = tmp6(1236).intl;
  obj10[3] = intl12.string(messagesProxyDefault["c5L+sl"]);
  obj10[4] = callback2;
  const items7 = [callback(otherUser(4750).Button, obj10), ];
  const obj11 = { variant: "tertiary", text: null, onPress: null };
  const intl13 = tmp6(1236).intl;
  obj11[1] = intl13.string(otherUser(1236).t["3ilveh"]);
  obj11[2] = _modDef5265.pop;
  items7[1] = callback(otherUser(4750).Button, obj11);
  obj9[0] = items7;
  obj8[0] = callback2(otherUser(6723).ButtonGroup, obj9);
  items6[1] = callback(otherUser(11153).ModalFooter, obj8);
  obj7[0] = items6;
  return callback2(otherUser(5445).ModalScreen, obj7);
}
({ jsx: closure_6, jsxs: error } = jsxProd);
createCacheKey = { header: null, title: null, subtitle: null, warning: null, body: null };
createCacheKey = { display: "flex", alignItems: "center", justifyContent: "center", marginBottom: ThemesDefault.space.PX_16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { marginTop: ThemesDefault.space.PX_24, textAlign: "center" };
let obj1 = { marginTop: ThemesDefault.space.PX_24, textAlign: "center" };
createCacheKey[2] = { marginTop: ThemesDefault.space.PX_8, textAlign: "center" };
let obj2 = { marginTop: ThemesDefault.space.PX_8, textAlign: "center" };
createCacheKey[3] = { marginBottom: ThemesDefault.space.PX_12 };
let obj3 = { marginBottom: ThemesDefault.space.PX_12 };
createCacheKey[4] = { marginBottom: ThemesDefault.space.PX_24 };
let closure_8 = createCacheKey.createStyles(createCacheKey);
let obj4 = { marginBottom: ThemesDefault.space.PX_24 };
const result = require("set").fileFinishedImporting("modules/parent_tools/native/FamilyCenterModalDisconnect.tsx");

export default function FamilyCenterModalDisconnect(otherUser) {
  otherUser = otherUser.otherUser;
  const items = [otherUser];
  const memo = React.useMemo(() => {
    let obj = { DISCONNECT: null };
    obj = {
      headerShown: true,
      headerLeft: otherUser(closure_1_2[25]).getHeaderCloseButton(closure_1_1(closure_1_2[6]).pop),
      headerTitle() {
        return null;
      },
      render() {
        return closure_1_6(closure_1_9, { otherUser: closure_0 });
      }
    };
    obj[0] = obj;
    return obj;
  }, items);
  let obj = { initialRouteName: "DISCONNECT", screens: memo, headerBackTitle: null };
  const intl = otherUser(1236).intl;
  obj[2] = intl.string(otherUser(1236).t["13/7kX"]);
  return callback(otherUser(11154).Modal, obj);
};