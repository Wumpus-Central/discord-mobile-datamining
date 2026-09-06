// discord_app/modules/parent_tools/native/FamilyCenterModalDisconnect.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import _modDef2396 from "../FamilyCenter.messages.js";
import ToastUtils from "../../toast/native/ToastUtils.tsx";
import UserUtilsDefault from "../../../utils/UserUtils.tsx";
import ModalActionCreatorsDefault from "../../../actions/ModalActionCreators.tsx";
import NavigatorHeader from "../../../design/components/Navigator/native/NavigatorHeader.native.tsx";
import _modDef6992 from "../../../../_runtime/metro/06992__.js";
import FamilyCenterAvatarPairDefault from "FamilyCenterAvatarPair.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
function FamilyCenterModalDisconnectScreen(otherUser) {
  otherUser = otherUser.otherUser;
  importDefault = undefined;
  dependencyMap = undefined;
  let disconnectLinkRequest;
  let isDisconnectLoading;
  const tmp = closure_8();
  const callback = isDisconnectLoading.useCallback(() => {
    let arr = _undefined(_undefined2[6]);
    arr = arr.pop();
  }, []);
  let obj = UserUtilsDefault;
  const name = obj.useName(otherUser);
  let obj1 = otherUser(8645);
  const requiresParentalConsent = obj1.useRequiresParentalConsent(otherUser.id);
  [tmp9, c1] = disconnectLinkRequest(isDisconnectLoading.useState(false), 2);
  const tmp8 = disconnectLinkRequest(isDisconnectLoading.useState(false), 2);
  [tmp11, c2] = disconnectLinkRequest(isDisconnectLoading.useState(false), 2);
  const callback1 = isDisconnectLoading.useCallback(() => {
    const intl = util.intl;
    ToastUtils.presentFailedToast(intl.string(util.t.R0RpRX));
    _undefined(false);
    _undefined2(false);
  }, []);
  let obj2 = otherUser(11916);
  const familyCenterActions = obj2.useFamilyCenterActions({ onSuccess: callback, onError: callback1 });
  disconnectLinkRequest = familyCenterActions.disconnectLinkRequest;
  isDisconnectLoading = familyCenterActions.isDisconnectLoading;
  let obj3 = otherUser(11919);
  let intl = otherUser(1114).intl;
  const tmp10 = disconnectLinkRequest(isDisconnectLoading.useState(false), 2);
  const intl2 = otherUser(1114).intl;
  const ageSpecificText = obj3.useAgeSpecificText(
    intl.format(_modDef2396.F2lccv, { username: name }),
    intl2.string(_modDef2396["WH+Gba"]),
  );
  let obj4 = otherUser(11919);
  const intl3 = otherUser(1114).intl;
  const formatResult = intl.format(_modDef2396.F2lccv, { username: name });
  const intl4 = otherUser(1114).intl;
  const ageSpecificText1 = obj4.useAgeSpecificText(
    intl3.string(_modDef2396.hOEHFn),
    intl4.format(_modDef2396.Or6hgl, { username: name }),
  );
  let obj5 = otherUser(11919);
  const intl5 = otherUser(1114).intl;
  const stringResult = intl3.string(_modDef2396.hOEHFn);
  const intl6 = otherUser(1114).intl;
  const ageSpecificText2 = obj5.useAgeSpecificText(
    intl5.format(_modDef2396.XyRW4c, { username: name }),
    intl6.format(_modDef2396.PlrZal, { username: name }),
  );
  let obj6 = otherUser(11919);
  const intl7 = otherUser(1114).intl;
  const formatResult1 = intl5.format(_modDef2396.XyRW4c, { username: name });
  const intl8 = otherUser(1114).intl;
  const ageSpecificText3 = obj6.useAgeSpecificText(intl7.string(_modDef2396.eiABQz), intl8.string(_modDef2396.PGQBnk));
  let obj7 = otherUser(11919);
  const intl9 = otherUser(1114).intl;
  const stringResult1 = intl7.string(_modDef2396.eiABQz);
  const intl10 = otherUser(1114).intl;
  const items = [disconnectLinkRequest, otherUser.id];
  const ageSpecificText4 = obj7.useAgeSpecificText(
    intl9.string(_modDef2396.sCbKs4),
    intl10.string(_modDef2396["0ki7+P"]),
  );
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
  const stringResult2 = intl9.string(_modDef2396.sCbKs4);
  obj.iconSrc = _modDef6992;
  const items3 = [closure_6(FamilyCenterAvatarPairDefault, obj), ,];
  obj1 = { style: tmp.title, variant: "text-lg/bold", children: null };
  const intl11 = otherUser(1114).intl;
  obj1.children = intl11.format(_modDef2396.o0JXuK, { username: name });
  items3[1] = closure_6(otherUser(4556).Text, obj1);
  obj2 = { style: tmp.subtitle, variant: "text-sm/bold", color: "text-default", children: ageSpecificText };
  items3[2] = closure_6(otherUser(4556).Text, obj2);
  obj.children = items3;
  const items4 = [closure_7(View, obj), , ,];
  let tmp28Result = requiresParentalConsent;
  if (requiresParentalConsent) {
    obj3 = { style: tmp.warning, text: ageSpecificText1 };
    tmp28Result = closure_6(tmp3(14874), obj3);
  }
  obj4 = { children: null };
  items4[1] = tmp28Result;
  obj5 = { style: tmp.body, variant: "text-md/normal", color: "text-default", children: ageSpecificText2 };
  items4[2] = closure_6(otherUser(4556).Text, obj5);
  obj6 = { spacing: tmp3(576).space.PX_12, children: null };
  const items5 = [
    closure_6(otherUser(9429).Checkbox, { label: ageSpecificText3, checked: tmp9, onToggle: callback3 }),
    closure_6(otherUser(9429).Checkbox, { label: ageSpecificText4, checked: tmp11, onToggle: callback4 }),
  ];
  obj6.children = items5;
  items4[3] = closure_7(otherUser(4973).Stack, obj6);
  obj4.children = items4;
  const items6 = [closure_7(otherUser(8422).ModalContent, obj4)];
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
  const intl12 = tmp6(1114).intl;
  obj10.text = intl12.string(_modDef2396["c5L+sl"]);
  obj10.onPress = callback2;
  const items7 = [closure_6(otherUser(4975).Button, obj10)];
  const obj11 = { variant: "tertiary", text: null, onPress: null };
  const intl13 = tmp6(1114).intl;
  obj11.text = intl13.string(otherUser(1114).t["3ilveh"]);
  obj11.onPress = ModalActionCreatorsDefault.pop;
  items7[1] = closure_6(otherUser(4975).Button, obj11);
  obj9.children = items7;
  obj8.children = closure_7(otherUser(5433).ButtonGroup, obj9);
  items6[1] = closure_6(otherUser(11926).ModalFooter, obj8);
  obj7.children = items6;
  return closure_7(otherUser(8421).ModalScreen, obj7);
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
fn(4560);
let createStyles = { header: null, title: null, subtitle: null, warning: null, body: null };
createStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: nativeDefault.space.PX_16,
};
createStyles.header = createStyles;
createStyles.title = { marginTop: nativeDefault.space.PX_24, textAlign: "center" };
let obj1 = { marginTop: nativeDefault.space.PX_24, textAlign: "center" };
createStyles.subtitle = { marginTop: nativeDefault.space.PX_8, textAlign: "center" };
let obj2 = { marginTop: nativeDefault.space.PX_8, textAlign: "center" };
createStyles.warning = { marginBottom: nativeDefault.space.PX_12 };
let obj3 = { marginBottom: nativeDefault.space.PX_12 };
createStyles.body = { marginBottom: nativeDefault.space.PX_24 };
let closure_8 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterModalDisconnect.tsx");

export default function FamilyCenterModalDisconnect(otherUser) {
  otherUser = otherUser.otherUser;
  const items = [otherUser];
  const memo = noop.useMemo(() => {
    let obj = { DISCONNECT: null };
    obj = {
      headerShown: true,
      headerLeft: NavigatorHeader.getHeaderCloseButton(ModalActionCreatorsDefault.pop),
      headerTitle() {
        return null;
      },
      render() {
        return closure_2_6(FamilyCenterModalDisconnectScreen, { otherUser });
      },
    };
    obj.DISCONNECT = obj;
    return obj;
  }, items);
  let obj = { initialRouteName: "DISCONNECT", screens: memo, headerBackTitle: null };
  const intl = otherUser(1114).intl;
  obj.headerBackTitle = intl.string(otherUser(1114).t["13/7kX"]);
  return closure_6(otherUser(11928).Modal, obj);
}
