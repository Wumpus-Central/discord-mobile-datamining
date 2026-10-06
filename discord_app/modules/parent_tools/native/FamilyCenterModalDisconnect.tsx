// === Module 14745: FamilyCenterModalDisconnect ===

// Module 14745 (FamilyCenterModalDisconnect)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import intl14 from "intl" /* 1126 */;
import _modDef2521 from "module_2521" /* 2521 */;
import ToastUtils from "ToastUtils" /* 4573 */;
import UserUtilsDefault from "UserUtils" /* 4728 */;
import AssetRegistryDefault from "AssetRegistry" /* 4815 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5099 */;
import NavigatorHeader from "NavigatorHeader" /* 6017 */;
import FamilyCenterAvatarPairDefault from "FamilyCenterAvatarPair" /* 14746 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let dependencyMap, importDefault, otherUser;

let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
function headerTitle() {
  return null;
}
const View = react_native.View;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { header: obj2, title: obj3, subtitle: obj4, warning: obj5, body: obj6 };
obj2 = { display: "flex", alignItems: "center", justifyContent: "center", marginBottom: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { marginTop: nativeDefault.space.PX_24, textAlign: "center" };
obj4 = { marginTop: nativeDefault.space.PX_8, textAlign: "center" };
obj5 = { marginBottom: nativeDefault.space.PX_12 };
obj6 = { marginBottom: nativeDefault.space.PX_24 };
let closure_8 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? ((otherUser) => {
  let disconnectLinkRequest;
  let first;
  let isDisconnectLoading;
  let items;
  let tmp11;
  let tmp12;
  let tmp14;
  let tmp16;
  let tmp19;
  let tmp21;
  let tmp24;
  let tmp26;
  let tmp29;
  let tmp30;
  let tmp34;
  let tmp35;
  const tmp = otherUser;
  const obj = otherUser(576);
  const cResult = obj.c(73);
  otherUser = otherUser.otherUser;
  const tmp4 = closure_8();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function h() {
      const arr = ModalActionCreatorsDefault;
      arr.pop();
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  const obj2 = UserUtilsDefault;
  const name = obj2.useName(otherUser);
  const tmpResult = tmp(8328);
  const requiresParentalConsent = tmpResult.useRequiresParentalConsent(otherUser.id);
  [r10038, importDefault] = disconnectLinkRequest(isDisconnectLoading.useState(false), 2);
  disconnectLinkRequest(isDisconnectLoading.useState(false), 2);
  [r10043, dependencyMap] = disconnectLinkRequest(isDisconnectLoading.useState(false), 2);
  disconnectLinkRequest(isDisconnectLoading.useState(false), 2);
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function x() {
      const presentFailedToast = ToastUtils.presentFailedToast;
      ToastUtils;
      const intl = intl14.intl;
      presentFailedToast(intl.string(intl14.t.R0RpRX));
      importDefault(false);
      dependencyMap(false);
    };
    cResult[1] = fn2;
    tmp11 = fn2;
  } else {
    tmp11 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { onSuccess: first, onError: tmp11 };
    cResult[2] = obj3;
    tmp12 = obj3;
  } else {
    tmp12 = cResult[2];
  }
  const tmpResult7 = tmp(11541);
  const familyCenterActions = tmpResult7.useFamilyCenterActions(tmp12);
  disconnectLinkRequest = familyCenterActions.disconnectLinkRequest;
  isDisconnectLoading = familyCenterActions.isDisconnectLoading;
  if (cResult[3] !== name) {
    let intl = tmp(1126).intl;
    const obj4 = { username: name };
    const formatResult = intl.format(_modDef2521.F2lccv, obj4);
    cResult[3] = name;
    cResult[4] = formatResult;
    tmp14 = formatResult;
  } else {
    tmp14 = cResult[4];
  }
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const intl2 = tmp(1126).intl;
    const stringResult = intl2.string(_modDef2521["WH+Gba"]);
    cResult[5] = stringResult;
    tmp16 = stringResult;
  } else {
    tmp16 = cResult[5];
  }
  const tmpResult8 = tmp(11544);
  const ageSpecificText = tmpResult8.useAgeSpecificText(tmp14, tmp16);
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const intl3 = tmp(1126).intl;
    const stringResult1 = intl3.string(_modDef2521.hOEHFn);
    cResult[6] = stringResult1;
    tmp19 = stringResult1;
  } else {
    tmp19 = cResult[6];
  }
  if (cResult[7] !== name) {
    const intl4 = tmp(1126).intl;
    const obj5 = { username: name };
    const formatResult1 = intl4.format(_modDef2521.Or6hgl, obj5);
    cResult[7] = name;
    cResult[8] = formatResult1;
    tmp21 = formatResult1;
  } else {
    tmp21 = cResult[8];
  }
  const tmpResult9 = tmp(11544);
  const ageSpecificText1 = tmpResult9.useAgeSpecificText(tmp19, tmp21);
  if (cResult[9] !== name) {
    const intl5 = tmp(1126).intl;
    const obj6 = { username: name };
    const formatResult2 = intl5.format(_modDef2521.XyRW4c, obj6);
    cResult[9] = name;
    cResult[10] = formatResult2;
    tmp24 = formatResult2;
  } else {
    tmp24 = cResult[10];
  }
  if (cResult[11] !== name) {
    const intl6 = tmp(1126).intl;
    const obj7 = { username: name };
    const formatResult3 = intl6.format(_modDef2521.PlrZal, obj7);
    cResult[11] = name;
    cResult[12] = formatResult3;
    tmp26 = formatResult3;
  } else {
    tmp26 = cResult[12];
  }
  const tmpResult10 = tmp(11544);
  const ageSpecificText2 = tmpResult10.useAgeSpecificText(tmp24, tmp26);
  if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
    const intl7 = tmp(1126).intl;
    const stringResult2 = intl7.string(_modDef2521.eiABQz);
    const intl8 = tmp(1126).intl;
    const stringResult3 = intl8.string(_modDef2521.PGQBnk);
    cResult[13] = stringResult2;
    cResult[14] = stringResult3;
    tmp30 = stringResult3;
    tmp29 = stringResult2;
  } else {
    tmp29 = cResult[13];
    tmp30 = cResult[14];
  }
  const tmpResult11 = tmp(11544);
  const ageSpecificText3 = tmpResult11.useAgeSpecificText(tmp29, tmp30);
  if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
    const intl9 = tmp(1126).intl;
    const stringResult4 = intl9.string(_modDef2521.sCbKs4);
    const intl10 = tmp(1126).intl;
    const stringResult5 = intl10.string(_modDef2521["0ki7+P"]);
    cResult[15] = stringResult4;
    cResult[16] = stringResult5;
    tmp35 = stringResult5;
    tmp34 = stringResult4;
  } else {
    tmp34 = cResult[15];
    tmp35 = cResult[16];
  }
  const tmpResult12 = tmp(11544);
  const ageSpecificText4 = tmpResult12.useAgeSpecificText(tmp34, tmp35);
  if (cResult[17] === disconnectLinkRequest) {
    if (cResult[20] !== isDisconnectLoading) {
      class V {
        constructor(arg0) {
          if (!isDisconnectLoading) {
            importDefault(arg0);
          }
        }
      }
      cResult[20] = isDisconnectLoading;
      cResult[21] = V;
    } else {
      class V {
        constructor(arg0) {
          if (!isDisconnectLoading) {
            importDefault(arg0);
          }
        }
      }
    }
    if (cResult[22] !== isDisconnectLoading) {
      class V {
        constructor(arg0) {
          if (!isDisconnectLoading) {
            importDefault(arg0);
          }
        }
      }
      cResult[22] = isDisconnectLoading;
      cResult[23] = tmp42;
    } else {
      class V {
        constructor(arg0) {
          if (!isDisconnectLoading) {
            importDefault(arg0);
          }
        }
      }
    }
    const header = tmp4.header;
    if (cResult[24] !== otherUser) {
      class V {
        constructor(arg0) {
          if (!isDisconnectLoading) {
            importDefault(arg0);
          }
        }
      }
      const obj8 = { otherUser, iconSrc: AssetRegistryDefault };
      const tmp6Result = FamilyCenterAvatarPairDefault;
      cResult[24] = otherUser;
      cResult[25] = closure_6(tmp6Result, obj8);
      const tmp45 = closure_6(tmp6Result, obj8);
    } else {
      class V {
        constructor(arg0) {
          if (!isDisconnectLoading) {
            importDefault(arg0);
          }
        }
      }
    }
    const title = tmp4.title;
    if (cResult[26] !== name) {
      class V {
        constructor(arg0) {
          if (!isDisconnectLoading) {
            importDefault(arg0);
          }
        }
      }
      const obj9 = { username: name };
      cResult[26] = name;
      cResult[27] = obj16.format(_modDef2521.o0JXuK, obj9);
      const formatResult4 = obj16.format(_modDef2521.o0JXuK, obj9);
    } else {
      class V {
        constructor(arg0) {
          if (!isDisconnectLoading) {
            importDefault(arg0);
          }
        }
      }
    }
    if (cResult[28] === tmp4.title) {
      class V {
        constructor(arg0) {
          if (!isDisconnectLoading) {
            importDefault(arg0);
          }
        }
      }
      if (cResult[31] === tmp4.subtitle) {
        class V {
          constructor(arg0) {
            if (!isDisconnectLoading) {
              importDefault(arg0);
            }
          }
        }
        if (cResult[34] === tmp4.header) {
          class V {
            constructor(arg0) {
              if (!isDisconnectLoading) {
                importDefault(arg0);
              }
            }
          }
        }
        const obj10 = { style: header, children: items };
        items = [tmp43, tmp48, tmp51];
        cResult[34] = tmp4.header;
        cResult[35] = tmp43;
        cResult[36] = tmp48;
        cResult[37] = tmp51;
        cResult[38] = closure_7(View, obj10);
        const tmp57 = closure_7(View, obj10);
      }
      const obj11 = { style: tmp4.subtitle, variant: "text-sm/bold", color: "text-default", children: ageSpecificText };
      cResult[31] = tmp4.subtitle;
      cResult[32] = ageSpecificText;
      cResult[33] = closure_6(tmp(4892).Text, obj11);
      const tmp53 = closure_6(tmp(4892).Text, obj11);
    }
    const obj12 = { style: title, variant: "text-lg/bold", children: tmp46 };
    cResult[28] = tmp4.title;
    cResult[29] = tmp46;
    cResult[30] = closure_6(tmp(4892).Text, obj12);
    const tmp50 = closure_6(tmp(4892).Text, obj12);
  }
  class J {
    constructor() {
      disconnectLinkRequest(otherUser.id);
    }
  }
  cResult[17] = disconnectLinkRequest;
  cResult[18] = otherUser.id;
  cResult[19] = J;
}) : ((otherUser) => {
  let _undefined;
  let _undefined2;
  let c1;
  let c2;
  let intl11;
  let intl12;
  let intl13;
  let items3;
  let items5;
  let items7;
  let obj14;
  let tmp11;
  let tmp9;
  otherUser = otherUser.otherUser;
  importDefault = undefined;
  dependencyMap = undefined;
  let disconnectLinkRequest;
  let isDisconnectLoading;
  const tmp = closure_8();
  const callback = isDisconnectLoading.useCallback(() => {
    const arr = _undefined(c2[8]);
    arr.pop();
  }, []);
  const obj = UserUtilsDefault;
  const name = obj.useName(otherUser);
  const obj2 = otherUser(8328);
  const requiresParentalConsent = obj2.useRequiresParentalConsent(otherUser.id);
  [tmp9, c1] = disconnectLinkRequest(isDisconnectLoading.useState(false), 2);
  disconnectLinkRequest(isDisconnectLoading.useState(false), 2);
  [tmp11, c2] = disconnectLinkRequest(isDisconnectLoading.useState(false), 2);
  disconnectLinkRequest(isDisconnectLoading.useState(false), 2);
  const callback1 = isDisconnectLoading.useCallback(() => {
    const presentFailedToast = ToastUtils.presentFailedToast;
    ToastUtils;
    const intl = intl14.intl;
    presentFailedToast(intl.string(intl14.t.R0RpRX));
    _undefined(false);
    c2(false);
  }, []);
  const obj3 = otherUser(11541);
  const familyCenterActions = obj3.useFamilyCenterActions({ onSuccess: callback, onError: callback1 });
  disconnectLinkRequest = familyCenterActions.disconnectLinkRequest;
  isDisconnectLoading = familyCenterActions.isDisconnectLoading;
  const useAgeSpecificText = otherUser(11544).useAgeSpecificText;
  otherUser(11544);
  let intl = otherUser(1126).intl;
  const formatResult = intl.format(_modDef2521.F2lccv, { username: name });
  const intl2 = otherUser(1126).intl;
  const ageSpecificText = useAgeSpecificText(formatResult, intl2.string(_modDef2521["WH+Gba"]));
  const useAgeSpecificText2 = otherUser(11544).useAgeSpecificText;
  otherUser(11544);
  const intl3 = otherUser(1126).intl;
  const stringResult = intl3.string(_modDef2521.hOEHFn);
  const intl4 = otherUser(1126).intl;
  const ageSpecificText2 = useAgeSpecificText2(stringResult, intl4.format(_modDef2521.Or6hgl, { username: name }));
  const useAgeSpecificText3 = otherUser(11544).useAgeSpecificText;
  otherUser(11544);
  const intl5 = otherUser(1126).intl;
  const formatResult1 = intl5.format(_modDef2521.XyRW4c, { username: name });
  const intl6 = otherUser(1126).intl;
  const ageSpecificText3 = useAgeSpecificText3(formatResult1, intl6.format(_modDef2521.PlrZal, { username: name }));
  const useAgeSpecificText4 = otherUser(11544).useAgeSpecificText;
  otherUser(11544);
  const intl7 = otherUser(1126).intl;
  const stringResult1 = intl7.string(_modDef2521.eiABQz);
  const intl8 = otherUser(1126).intl;
  const ageSpecificText4 = useAgeSpecificText4(stringResult1, intl8.string(_modDef2521.PGQBnk));
  const useAgeSpecificText5 = otherUser(11544).useAgeSpecificText;
  otherUser(11544);
  const intl9 = otherUser(1126).intl;
  const stringResult2 = intl9.string(_modDef2521.sCbKs4);
  const intl10 = otherUser(1126).intl;
  const items = [disconnectLinkRequest, otherUser.id];
  const ageSpecificText5 = useAgeSpecificText5(stringResult2, intl10.string(_modDef2521["0ki7+P"]));
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
      c2(arg0);
    }
  }, items2);
  const ModalScreen = otherUser(8128).ModalScreen;
  const obj4 = { style: tmp.header, children: items3 };
  const ModalContent = otherUser(8129).ModalContent;
  const obj5 = { otherUser, iconSrc: AssetRegistryDefault };
  const tmp34 = FamilyCenterAvatarPairDefault;
  items3 = [closure_6(tmp34, obj5), , ];
  const obj6 = { style: tmp.title, variant: "text-lg/bold", children: intl11.format(_modDef2521.o0JXuK, { username: name }) };
  const Text = otherUser(4892).Text;
  intl11 = otherUser(1126).intl;
  items3[1] = closure_6(Text, obj6);
  const obj7 = { style: tmp.subtitle, variant: "text-sm/bold", color: "text-default", children: ageSpecificText };
  items3[2] = closure_6(otherUser(4892).Text, obj7);
  const items4 = [closure_7(View, obj4), , , ];
  let tmp33Result = requiresParentalConsent;
  if (tmp33Result) {
    const obj8 = { style: tmp.warning, text: ageSpecificText2 };
    tmp33Result = closure_6(tmp3(14698), obj8);
  }
  const obj9 = { children: items4 };
  items4[1] = tmp33Result;
  const obj10 = { style: tmp.body, variant: "text-md/normal", color: "text-default", children: ageSpecificText3 };
  items4[2] = closure_6(otherUser(4892).Text, obj10);
  const obj11 = { spacing: nativeDefault.space.PX_12, children: items5 };
  const Stack = tmp6(5600).Stack;
  items5 = [closure_6(otherUser(8981).Checkbox, { label: ageSpecificText4, checked: tmp9, onToggle: callback3 }), closure_6(otherUser(8981).Checkbox, { label: ageSpecificText5, checked: tmp11, onToggle: callback4 })];
  items4[3] = closure_7(Stack, obj11);
  const items6 = [closure_7(ModalContent, obj9), ];
  const ModalFooter = tmp6(11549).ModalFooter;
  const ButtonGroup = tmp6(5599).ButtonGroup;
  let tmp36 = !tmp9;
  const Button = tmp6(5601).Button;
  if (tmp9) {
    tmp36 = !tmp11;
  }
  if (!tmp36) {
    tmp36 = isDisconnectLoading;
  }
  const obj12 = { children: items6 };
  const obj13 = { children: closure_7(ButtonGroup, obj14) };
  obj14 = { children: items7 };
  const obj15 = { variant: "destructive", disabled: tmp36, loading: isDisconnectLoading, text: intl12.string(_modDef2521["c5L+sl"]), onPress: callback2 };
  intl12 = tmp6(1126).intl;
  items7 = [closure_6(Button, obj15), ];
  const obj16 = { variant: "tertiary", text: intl13.string(otherUser(1126).t["3ilveh"]), onPress: ModalActionCreatorsDefault.pop };
  const Button2 = tmp6(5601).Button;
  intl13 = tmp6(1126).intl;
  items7[1] = closure_6(Button2, obj16);
  items6[1] = closure_6(ModalFooter, obj13);
  return closure_7(ModalScreen, obj12);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((otherUser) => {
  let obj3;
  let tmp4;
  let tmp6;
  let tmp8;
  let tmpResult;
  const obj = otherUser(576);
  const cResult = obj.c(5);
  otherUser = otherUser.otherUser;
  if (cResult[0] !== otherUser) {
    const obj2 = { DISCONNECT: obj3 };
    obj3 = {
      headerShown: true,
      headerLeft: tmpResult.getHeaderCloseButton(ModalActionCreatorsDefault.pop),
      headerTitle,
      render() {
          const obj = { otherUser };
          return closure_2_6(closure_2_9, obj);
        }
    };
    cResult[0] = otherUser;
    cResult[1] = obj2;
    tmp4 = obj2;
    tmpResult = otherUser(6017);
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1126).intl;
    const stringResult = intl.string(otherUser(1126).t["13/7kX"]);
    cResult[2] = stringResult;
    tmp6 = stringResult;
  } else {
    tmp6 = cResult[2];
  }
  if (cResult[3] !== tmp4) {
    const obj4 = { initialRouteName: "DISCONNECT", screens: tmp4, headerBackTitle: tmp6 };
    const tmp10 = closure_6(otherUser(10989).Modal, obj4);
    cResult[3] = tmp4;
    cResult[4] = tmp10;
    tmp8 = tmp10;
  } else {
    tmp8 = cResult[4];
  }
  return tmp8;
}) : ((otherUser) => {
  let intl;
  otherUser = otherUser.otherUser;
  const items = [otherUser];
  const memo = react.useMemo(() => {
    let obj2;
    let obj3;
    let closure_0 = otherUser;
    let obj = { DISCONNECT: obj2 };
    obj2 = {
      headerShown: true,
      headerLeft: obj3.getHeaderCloseButton(ModalActionCreatorsDefault.pop),
      headerTitle,
      render() {
        const obj = { otherUser };
        return closure_2_6(closure_2_9, obj);
      }
    };
    obj3 = NavigatorHeader;
    return obj;
  }, items);
  let obj = { initialRouteName: "DISCONNECT", screens: memo, headerBackTitle: intl.string(otherUser(1126).t["13/7kX"]) };
  const Modal = otherUser(10989).Modal;
  intl = otherUser(1126).intl;
  return closure_6(Modal, obj);
});
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterModalDisconnect.tsx");

export default tmp4;