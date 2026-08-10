// discord_app/modules/parent_tools/native/FamilyCenterModalDisconnect.tsx
import _slicedToArray from "_slicedToArray";
import FamilyCenterInlineWarningNotice from "FamilyCenterInlineWarningNotice";
import { View } from "registerAsset";
import jsxProd from "Checkbox";
import createCacheKey from "createCacheKey";
import { registerAsset } from "../../../../_runtime/08027_registerAsset.js";
import { Themes } from "../../../../discord_common/js/packages/tokens/native.tsx";
import { ModalActionCreators } from "../../../actions/ModalActionCreators.tsx";
import { nameFromUser } from "../../../utils/UserUtils.tsx";
import { messagesProxy } from "../FamilyCenter.messages.js";
import { FamilyCenterAvatarPair } from "FamilyCenterAvatarPair.tsx";

let closure_6;
let error;
const require = arg1;
function FamilyCenterModalDisconnectScreen(otherUser) {
  let c1;
  let c2;
  let tmp11;
  let tmp9;
  otherUser = otherUser.otherUser;
  let importDefault;
  let dependencyMap;
  let disconnectLinkRequest;
  let isDisconnectLoading;
  const tmp = createCacheKey();
  const callback = isDisconnectLoading.useCallback(() => {
    let arr = _undefined(_undefined2[6]);
    arr = arr.pop();
  }, []);
  let obj = nameFromUser;
  const name = obj.useName(otherUser);
  let obj1 = otherUser(7337);
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
  let obj2 = otherUser(11324);
  const familyCenterActions = obj2.useFamilyCenterActions({ onSuccess: callback, onError: callback1 });
  disconnectLinkRequest = familyCenterActions.disconnectLinkRequest;
  isDisconnectLoading = familyCenterActions.isDisconnectLoading;
  let obj3 = otherUser(11327);
  let intl = otherUser(1236).intl;
  const tmp10 = disconnectLinkRequest(isDisconnectLoading.useState(false), 2);
  const intl2 = otherUser(1236).intl;
  const ageSpecificText = obj3.useAgeSpecificText(intl.format(messagesProxy.F2lccv, { username: name }), intl2.string(messagesProxy["WH+Gba"]));
  let obj4 = otherUser(11327);
  const intl3 = otherUser(1236).intl;
  const formatResult = intl.format(messagesProxy.F2lccv, { username: name });
  const intl4 = otherUser(1236).intl;
  const ageSpecificText1 = obj4.useAgeSpecificText(intl3.string(messagesProxy.hOEHFn), intl4.format(messagesProxy.Or6hgl, { username: name }));
  let obj5 = otherUser(11327);
  const intl5 = otherUser(1236).intl;
  const stringResult = intl3.string(messagesProxy.hOEHFn);
  const intl6 = otherUser(1236).intl;
  const ageSpecificText2 = obj5.useAgeSpecificText(intl5.format(messagesProxy.XyRW4c, { username: name }), intl6.format(messagesProxy.PlrZal, { username: name }));
  let obj6 = otherUser(11327);
  const intl7 = otherUser(1236).intl;
  const formatResult1 = intl5.format(messagesProxy.XyRW4c, { username: name });
  const intl8 = otherUser(1236).intl;
  const ageSpecificText3 = obj6.useAgeSpecificText(intl7.string(messagesProxy.eiABQz), intl8.string(messagesProxy.PGQBnk));
  let obj7 = otherUser(11327);
  const intl9 = otherUser(1236).intl;
  const stringResult1 = intl7.string(messagesProxy.eiABQz);
  const intl10 = otherUser(1236).intl;
  const items = [disconnectLinkRequest, otherUser.id];
  const ageSpecificText4 = obj7.useAgeSpecificText(intl9.string(messagesProxy.sCbKs4), intl10.string(messagesProxy["0ki7+P"]));
  const items1 = [isDisconnectLoading];
  const callback2 = isDisconnectLoading.useCallback(() => {
    disconnectLinkRequest(otherUser.id);
  }, items);
  const items2 = [isDisconnectLoading];
  const callback3 = isDisconnectLoading.useCallback((arg0) => {
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
  const stringResult2 = intl9.string(messagesProxy.sCbKs4);
  obj[1] = registerAsset;
  const items3 = [callback(FamilyCenterAvatarPair, obj), , ];
  obj1 = { style: tmp.title, variant: "text-lg/bold", children: null };
  const intl11 = otherUser(1236).intl;
  obj1[2] = intl11.format(messagesProxy.o0JXuK, { username: name });
  items3[1] = callback(otherUser(4299).Text, obj1);
  obj2 = { style: tmp.subtitle, variant: "text-sm/bold", color: "text-default", children: ageSpecificText };
  items3[2] = callback(otherUser(4299).Text, obj2);
  obj[1] = items3;
  const items4 = [callback2(View, obj), , , ];
  let tmp28Result = requiresParentalConsent;
  if (requiresParentalConsent) {
    obj3 = { style: null, text: null };
    obj3[0] = tmp.warning;
    obj3[1] = ageSpecificText1;
    tmp28Result = tmp28(tmp3(14121), obj3);
  }
  obj4 = { children: null };
  items4[1] = tmp28Result;
  obj5 = { style: tmp.body, variant: "text-md/normal", color: "text-default", children: ageSpecificText2 };
  items4[2] = callback(otherUser(4299).Text, obj5);
  obj6 = { spacing: null, children: null };
  obj6[0] = Themes.space.PX_12;
  const items5 = [callback(otherUser(10534).Checkbox, { label: ageSpecificText3, checked: tmp9, onToggle: callback3 }), callback(otherUser(10534).Checkbox, { label: ageSpecificText4, checked: tmp11, onToggle: callback4 })];
  obj6[1] = items5;
  items4[3] = callback2(otherUser(4712).Stack, obj6);
  obj4[0] = items4;
  const items6 = [callback2(otherUser(7808).ModalContent, obj4), ];
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
  obj10[3] = intl12.string(messagesProxy["c5L+sl"]);
  obj10[4] = callback2;
  const items7 = [callback(otherUser(4714).Button, obj10), ];
  const obj11 = { variant: "tertiary", text: null, onPress: null };
  const intl13 = tmp6(1236).intl;
  obj11[1] = intl13.string(otherUser(1236).t["3ilveh"]);
  obj11[2] = ModalActionCreators.pop;
  items7[1] = callback(otherUser(4714).Button, obj11);
  obj9[0] = items7;
  obj8[0] = callback2(otherUser(5150).ButtonGroup, obj9);
  items6[1] = callback(otherUser(11334).ModalFooter, obj8);
  obj7[0] = items6;
  return callback2(otherUser(7807).ModalScreen, obj7);
}
({ jsx: closure_6, jsxs: error } = jsxProd);
createCacheKey = { header: null, title: null, subtitle: null, warning: null, body: null };
createCacheKey = { display: "flex", alignItems: "center", justifyContent: "center", marginBottom: require("Themes").space.PX_16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { marginTop: require("Themes").space.PX_24, textAlign: "center" };
let obj1 = { marginTop: require("Themes").space.PX_24, textAlign: "center" };
createCacheKey[2] = { marginTop: require("Themes").space.PX_8, textAlign: "center" };
let obj2 = { marginTop: require("Themes").space.PX_8, textAlign: "center" };
createCacheKey[3] = { marginBottom: require("Themes").space.PX_12 };
let obj3 = { marginBottom: require("Themes").space.PX_12 };
createCacheKey[4] = { marginBottom: require("Themes").space.PX_24 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj4 = { marginBottom: require("Themes").space.PX_24 };
const result = require("get ActivityIndicator").fileFinishedImporting("modules/parent_tools/native/FamilyCenterModalDisconnect.tsx");

export default function FamilyCenterModalDisconnect(otherUser) {
  otherUser = otherUser.otherUser;
  const items = [otherUser];
  const memo = React.useMemo(() => {
    let obj = { DISCONNECT: null };
    obj = { headerShown: true, headerLeft: null, headerTitle: null, render: null };
    obj[1] = otherUser(outer1_2[25]).getHeaderCloseButton(outer1_1(outer1_2[6]).pop);
    obj[2] = function headerTitle() {
      return null;
    };
    obj[3] = function render() {
      return outer1_6(outer1_9, { otherUser: closure_0 });
    };
    obj[0] = obj;
    return obj;
  }, items);
  let obj = { initialRouteName: "DISCONNECT", screens: memo, headerBackTitle: null };
  const intl = otherUser(1236).intl;
  obj[2] = intl.string(otherUser(1236).t["13/7kX"]);
  return callback(otherUser(11336).Modal, obj);
};