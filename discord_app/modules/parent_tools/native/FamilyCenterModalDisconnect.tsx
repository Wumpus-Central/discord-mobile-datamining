// discord_app/modules/parent_tools/native/FamilyCenterModalDisconnect.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import _modDef2484 from "../FamilyCenter.messages.js";
import ToastUtils from "../../toast/native/ToastUtils.tsx";
import UserUtilsDefault from "../../../utils/UserUtils.tsx";
import ModalActionCreatorsDefault from "../../../actions/ModalActionCreators.tsx";
import NavigatorHeader from "../../../design/components/Navigator/native/NavigatorHeader.native.tsx";
import _modDef7323 from "../../../../_runtime/metro/07323__.js";
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
    _undefined(_undefined2[6]).pop();
  }, []);
  const name = UserUtilsDefault.useName(otherUser);
  const requiresParentalConsent = otherUser(8999).useRequiresParentalConsent(otherUser.id);
  const obj2 = otherUser(8999);
  [tmp9, c1] = disconnectLinkRequest(isDisconnectLoading.useState(false), 2);
  const tmp8 = disconnectLinkRequest(isDisconnectLoading.useState(false), 2);
  [tmp11, c2] = disconnectLinkRequest(isDisconnectLoading.useState(false), 2);
  const callback1 = isDisconnectLoading.useCallback(() => {
    const intl = util.intl;
    ToastUtils.presentFailedToast(intl.string(util.t.R0RpRX));
    _undefined(false);
    _undefined2(false);
  }, []);
  const tmp10 = disconnectLinkRequest(isDisconnectLoading.useState(false), 2);
  const familyCenterActions = otherUser(12252).useFamilyCenterActions({ onSuccess: callback, onError: callback1 });
  disconnectLinkRequest = familyCenterActions.disconnectLinkRequest;
  isDisconnectLoading = familyCenterActions.isDisconnectLoading;
  const obj3 = otherUser(12252);
  let intl = otherUser(1115).intl;
  const obj4 = otherUser(12255);
  const intl2 = otherUser(1115).intl;
  const ageSpecificText = obj4.useAgeSpecificText(
    intl.format(_modDef2484.F2lccv, { username: name }),
    intl2.string(_modDef2484["WH+Gba"]),
  );
  const formatResult = intl.format(_modDef2484.F2lccv, { username: name });
  const intl3 = otherUser(1115).intl;
  const obj5 = otherUser(12255);
  const intl4 = otherUser(1115).intl;
  const ageSpecificText1 = obj5.useAgeSpecificText(
    intl3.string(_modDef2484.hOEHFn),
    intl4.format(_modDef2484.Or6hgl, { username: name }),
  );
  const stringResult = intl3.string(_modDef2484.hOEHFn);
  const intl5 = otherUser(1115).intl;
  const obj6 = otherUser(12255);
  const intl6 = otherUser(1115).intl;
  const ageSpecificText2 = obj6.useAgeSpecificText(
    intl5.format(_modDef2484.XyRW4c, { username: name }),
    intl6.format(_modDef2484.PlrZal, { username: name }),
  );
  const formatResult1 = intl5.format(_modDef2484.XyRW4c, { username: name });
  const intl7 = otherUser(1115).intl;
  const obj7 = otherUser(12255);
  const intl8 = otherUser(1115).intl;
  const ageSpecificText3 = obj7.useAgeSpecificText(intl7.string(_modDef2484.eiABQz), intl8.string(_modDef2484.PGQBnk));
  const stringResult1 = intl7.string(_modDef2484.eiABQz);
  const intl9 = otherUser(1115).intl;
  const obj8 = otherUser(12255);
  const intl10 = otherUser(1115).intl;
  const items = [disconnectLinkRequest, otherUser.id];
  const ageSpecificText4 = obj8.useAgeSpecificText(
    intl9.string(_modDef2484.sCbKs4),
    intl10.string(_modDef2484["0ki7+P"]),
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
  const obj9 = { style: tmp.header, children: null };
  const obj10 = { otherUser, iconSrc: null };
  const stringResult2 = intl9.string(_modDef2484.sCbKs4);
  obj10.iconSrc = _modDef7323;
  const items3 = [closure_6(FamilyCenterAvatarPairDefault, obj10), ,];
  const obj11 = { style: tmp.title, variant: "text-lg/bold", children: null };
  const intl11 = otherUser(1115).intl;
  obj11.children = intl11.format(_modDef2484.o0JXuK, { username: name });
  items3[1] = closure_6(otherUser(4823).Text, obj11);
  items3[2] = closure_6(otherUser(4823).Text, {
    style: tmp.subtitle,
    variant: "text-sm/bold",
    color: "text-default",
    children: ageSpecificText,
  });
  obj9.children = items3;
  const items4 = [closure_7(View, obj9), , ,];
  let tmp28Result = requiresParentalConsent;
  if (requiresParentalConsent) {
    const obj13 = { style: tmp.warning, text: ageSpecificText1 };
    tmp28Result = closure_6(tmp3(15211), obj13);
  }
  const obj14 = { children: null };
  items4[1] = tmp28Result;
  items4[2] = closure_6(otherUser(4823).Text, {
    style: tmp.body,
    variant: "text-md/normal",
    color: "text-default",
    children: ageSpecificText2,
  });
  const obj16 = { spacing: nativeDefault.space.PX_12, children: null };
  const items5 = [
    closure_6(otherUser(9622).Checkbox, { label: ageSpecificText3, checked: tmp9, onToggle: callback3 }),
    closure_6(otherUser(9622).Checkbox, { label: ageSpecificText4, checked: tmp11, onToggle: callback4 }),
  ];
  obj16.children = items5;
  items4[3] = closure_7(otherUser(5269).Stack, obj16);
  obj14.children = items4;
  const items6 = [closure_7(otherUser(8769).ModalContent, obj14)];
  let tmp31 = !tmp9;
  if (tmp9) {
    tmp31 = !tmp11;
  }
  if (!tmp31) {
    tmp31 = isDisconnectLoading;
  }
  const obj17 = { children: null };
  const obj18 = { children: null };
  const obj19 = { children: null };
  const obj20 = { variant: "destructive", disabled: tmp31, loading: isDisconnectLoading, text: null, onPress: null };
  const intl12 = tmp6(1115).intl;
  obj20.text = intl12.string(_modDef2484["c5L+sl"]);
  obj20.onPress = callback2;
  const items7 = [closure_6(otherUser(5271).Button, obj20)];
  const obj21 = { variant: "tertiary", text: null, onPress: null };
  const intl13 = tmp6(1115).intl;
  obj21.text = intl13.string(otherUser(1115).t["3ilveh"]);
  obj21.onPress = ModalActionCreatorsDefault.pop;
  items7[1] = closure_6(otherUser(5271).Button, obj21);
  obj19.children = items7;
  obj18.children = closure_7(otherUser(5736).ButtonGroup, obj19);
  items6[1] = closure_6(otherUser(12262).ModalFooter, obj18);
  obj17.children = items6;
  return closure_7(otherUser(8768).ModalScreen, obj17);
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4827);
let obj2 = {
  header: { display: "flex", alignItems: "center", justifyContent: "center", marginBottom: nativeDefault.space.PX_16 },
  title: null,
  subtitle: null,
  warning: null,
  body: null,
};
let obj3 = { display: "flex", alignItems: "center", justifyContent: "center", marginBottom: nativeDefault.space.PX_16 };
obj2.title = { marginTop: nativeDefault.space.PX_24, textAlign: "center" };
let obj4 = { marginTop: nativeDefault.space.PX_24, textAlign: "center" };
obj2.subtitle = { marginTop: nativeDefault.space.PX_8, textAlign: "center" };
let obj5 = { marginTop: nativeDefault.space.PX_8, textAlign: "center" };
obj2.warning = { marginBottom: nativeDefault.space.PX_12 };
let obj6 = { marginBottom: nativeDefault.space.PX_12 };
obj2.body = { marginBottom: nativeDefault.space.PX_24 };
let closure_8 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterModalDisconnect.tsx");

export default function FamilyCenterModalDisconnect(otherUser) {
  otherUser = otherUser.otherUser;
  const items = [otherUser];
  const memo = noop.useMemo(() => {
    const obj = { DISCONNECT: null };
    const obj2 = {
      headerShown: true,
      headerLeft: NavigatorHeader.getHeaderCloseButton(ModalActionCreatorsDefault.pop),
      headerTitle() {
        return null;
      },
      render() {
        return closure_2_6(FamilyCenterModalDisconnectScreen, { otherUser });
      },
    };
    obj.DISCONNECT = obj2;
    return obj;
  }, items);
  let obj = { initialRouteName: "DISCONNECT", screens: memo, headerBackTitle: null };
  const intl = otherUser(1115).intl;
  obj.headerBackTitle = intl.string(otherUser(1115).t["13/7kX"]);
  return closure_6(otherUser(11545).Modal, obj);
}
