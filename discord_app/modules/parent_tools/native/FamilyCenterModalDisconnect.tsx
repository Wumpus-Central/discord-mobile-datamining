// === Module 15179: FamilyCenterModalDisconnect ===

// Module 15179 (FamilyCenterModalDisconnect)
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import _modDef2568 from "module_2568" /* 2568 */;
import ToastUtils from "ToastUtils" /* 4808 */;
import UserUtilsDefault from "UserUtils" /* 4962 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5934 */;
import NavigatorHeader from "NavigatorHeader" /* 6200 */;
import _modDef7728 from "module_7728" /* 7728 */;
import FamilyCenterAvatarPairDefault from "FamilyCenterAvatarPair" /* 15180 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(5092);
let obj2 = { header: { display: "flex", alignItems: "center", justifyContent: "center", marginBottom: nativeDefault.space.PX_16 }, title: null, subtitle: null, warning: null, body: null };
let obj3 = { display: "flex", alignItems: "center", justifyContent: "center", marginBottom: nativeDefault.space.PX_16 };
obj2.title = { marginTop: nativeDefault.space.PX_24, textAlign: "center" };
let obj4 = { marginTop: nativeDefault.space.PX_24, textAlign: "center" };
obj2.subtitle = { marginTop: nativeDefault.space.PX_8, textAlign: "center" };
let obj5 = { marginTop: nativeDefault.space.PX_8, textAlign: "center" };
obj2.warning = { marginBottom: nativeDefault.space.PX_12 };
let obj6 = { marginBottom: nativeDefault.space.PX_12 };
obj2.body = { marginBottom: nativeDefault.space.PX_24 };
let closure_8 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? (function FamilyCenterModalDisconnectScreen(otherUser) {
  const cResult = otherUser(576).c(73);
  otherUser = otherUser.otherUser;
  const tmp4 = closure_8();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function h() {
      ModalActionCreatorsDefault.pop();
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  const obj = otherUser(576);
  const name = UserUtilsDefault.useName(otherUser);
  const requiresParentalConsent = otherUser(7738).useRequiresParentalConsent(otherUser.id);
  const tmpResult = otherUser(7738);
  [r10038, importDefault] = disconnectLinkRequest(isDisconnectLoading.useState(false), 2);
  const tmp9 = disconnectLinkRequest(isDisconnectLoading.useState(false), 2);
  [r10043, dependencyMap] = disconnectLinkRequest(isDisconnectLoading.useState(false), 2);
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function x() {
      const intl = util.intl;
      ToastUtils.presentFailedToast(intl.string(util.t.R0RpRX));
      importDefault(false);
      dependencyMap(false);
    };
    cResult[1] = fn2;
    let tmp11 = fn2;
  } else {
    tmp11 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { onSuccess: first, onError: tmp11 };
    cResult[2] = obj3;
    let tmp12 = obj3;
  } else {
    tmp12 = cResult[2];
  }
  const tmp10 = disconnectLinkRequest(isDisconnectLoading.useState(false), 2);
  const familyCenterActions = otherUser(11530).useFamilyCenterActions(tmp12);
  disconnectLinkRequest = familyCenterActions.disconnectLinkRequest;
  isDisconnectLoading = familyCenterActions.isDisconnectLoading;
  if (cResult[3] !== name) {
    let intl = tmp(1126).intl;
    const obj4 = { username: name };
    const formatResult = intl.format(_modDef2568.F2lccv, obj4);
    cResult[3] = name;
    cResult[4] = formatResult;
    let tmp14 = formatResult;
  } else {
    tmp14 = cResult[4];
  }
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const intl2 = tmp(1126).intl;
    const stringResult = intl2.string(_modDef2568["WH+Gba"]);
    cResult[5] = stringResult;
    let tmp16 = stringResult;
  } else {
    tmp16 = cResult[5];
  }
  const tmpResult7 = otherUser(11530);
  const ageSpecificText = otherUser(11533).useAgeSpecificText(tmp14, tmp16);
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const intl3 = tmp(1126).intl;
    const stringResult1 = intl3.string(_modDef2568.hOEHFn);
    cResult[6] = stringResult1;
    let tmp19 = stringResult1;
  } else {
    tmp19 = cResult[6];
  }
  if (cResult[7] !== name) {
    const intl4 = tmp(1126).intl;
    const obj5 = { username: name };
    const formatResult1 = intl4.format(_modDef2568.Or6hgl, obj5);
    cResult[7] = name;
    cResult[8] = formatResult1;
    let tmp21 = formatResult1;
  } else {
    tmp21 = cResult[8];
  }
  const tmpResult8 = otherUser(11533);
  const ageSpecificText1 = otherUser(11533).useAgeSpecificText(tmp19, tmp21);
  if (cResult[9] !== name) {
    const intl5 = tmp(1126).intl;
    const obj6 = { username: name };
    const formatResult2 = intl5.format(_modDef2568.XyRW4c, obj6);
    cResult[9] = name;
    cResult[10] = formatResult2;
    let tmp24 = formatResult2;
  } else {
    tmp24 = cResult[10];
  }
  if (cResult[11] !== name) {
    const intl6 = tmp(1126).intl;
    const obj7 = { username: name };
    const formatResult3 = intl6.format(_modDef2568.PlrZal, obj7);
    cResult[11] = name;
    cResult[12] = formatResult3;
    let tmp26 = formatResult3;
  } else {
    tmp26 = cResult[12];
  }
  const tmpResult9 = otherUser(11533);
  const ageSpecificText2 = otherUser(11533).useAgeSpecificText(tmp24, tmp26);
  if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
    const intl7 = tmp(1126).intl;
    const stringResult2 = intl7.string(_modDef2568.eiABQz);
    const intl8 = tmp(1126).intl;
    const stringResult3 = intl8.string(_modDef2568.PGQBnk);
    cResult[13] = stringResult2;
    cResult[14] = stringResult3;
    let tmp30 = stringResult3;
    let tmp29 = stringResult2;
  } else {
    tmp29 = cResult[13];
    tmp30 = cResult[14];
  }
  const tmpResult10 = otherUser(11533);
  const ageSpecificText3 = otherUser(11533).useAgeSpecificText(tmp29, tmp30);
  if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
    const intl9 = tmp(1126).intl;
    const stringResult4 = intl9.string(_modDef2568.sCbKs4);
    const intl10 = tmp(1126).intl;
    const stringResult5 = intl10.string(_modDef2568["0ki7+P"]);
    cResult[15] = stringResult4;
    cResult[16] = stringResult5;
    let tmp35 = stringResult5;
    let tmp34 = stringResult4;
  } else {
    tmp34 = cResult[15];
    tmp35 = cResult[16];
  }
  const tmpResult11 = otherUser(11533);
  const ageSpecificText4 = otherUser(11533).useAgeSpecificText(tmp34, tmp35);
  if (cResult[17] === disconnectLinkRequest) {
    if (cResult[20] !== isDisconnectLoading) {
      class V {
        constructor(arg0) {
          if (!isDisconnectLoading) {
            tmp = otherUser;
            tmp2 = closure_1;
            tmp3 = closure_1(otherUser);
          }
          return;
        }
      }
      cResult[20] = isDisconnectLoading;
      cResult[21] = V;
    } else {
      class V {
        constructor(arg0) {
          if (!isDisconnectLoading) {
            tmp = otherUser;
            tmp2 = closure_1;
            tmp3 = closure_1(otherUser);
          }
          return;
        }
      }
    }
    if (cResult[22] !== isDisconnectLoading) {
      class V {
        constructor(arg0) {
          if (!isDisconnectLoading) {
            tmp = otherUser;
            tmp2 = closure_1;
            tmp3 = closure_1(otherUser);
          }
          return;
        }
      }
      cResult[22] = isDisconnectLoading;
      cResult[23] = tmp42;
    } else {
      class V {
        constructor(arg0) {
          if (!isDisconnectLoading) {
            tmp = otherUser;
            tmp2 = closure_1;
            tmp3 = closure_1(otherUser);
          }
          return;
        }
      }
    }
    if (cResult[24] !== otherUser) {
      class V {
        constructor(arg0) {
          if (!isDisconnectLoading) {
            tmp = otherUser;
            tmp2 = closure_1;
            tmp3 = closure_1(otherUser);
          }
          return;
        }
      }
      const obj8 = { otherUser, iconSrc: _modDef7728 };
      const tmp45 = closure_6(FamilyCenterAvatarPairDefault, obj8);
      cResult[24] = otherUser;
      cResult[25] = tmp45;
      const tmp6Result = FamilyCenterAvatarPairDefault;
    } else {
      class V {
        constructor(arg0) {
          if (!isDisconnectLoading) {
            tmp = otherUser;
            tmp2 = closure_1;
            tmp3 = closure_1(otherUser);
          }
          return;
        }
      }
    }
    if (cResult[26] !== name) {
      class V {
        constructor(arg0) {
          if (!isDisconnectLoading) {
            tmp = otherUser;
            tmp2 = closure_1;
            tmp3 = closure_1(otherUser);
          }
          return;
        }
      }
      const obj9 = { username: name };
      const formatResult4 = obj16.format(_modDef2568.o0JXuK, obj9);
      cResult[26] = name;
      cResult[27] = formatResult4;
    } else {
      class V {
        constructor(arg0) {
          if (!isDisconnectLoading) {
            tmp = otherUser;
            tmp2 = closure_1;
            tmp3 = closure_1(otherUser);
          }
          return;
        }
      }
    }
    if (cResult[28] === tmp4.title) {
      class V {
        constructor(arg0) {
          if (!isDisconnectLoading) {
            tmp = otherUser;
            tmp2 = closure_1;
            tmp3 = closure_1(otherUser);
          }
          return;
        }
      }
      if (cResult[31] === tmp4.subtitle) {
        class V {
          constructor(arg0) {
            if (!isDisconnectLoading) {
              tmp = otherUser;
              tmp2 = closure_1;
              tmp3 = closure_1(otherUser);
            }
            return;
          }
        }
        if (cResult[34] === tmp4.header) {
          class V {
            constructor(arg0) {
              if (!isDisconnectLoading) {
                tmp = otherUser;
                tmp2 = closure_1;
                tmp3 = closure_1(otherUser);
              }
              return;
            }
          }
        }
        const obj10 = { style: tmp4.header, children: null };
        const items = [tmp43, tmp48, tmp51];
        obj10.children = items;
        const tmp57 = closure_7(View, obj10);
        cResult[34] = tmp4.header;
        cResult[35] = tmp43;
        cResult[36] = tmp48;
        cResult[37] = tmp51;
        cResult[38] = tmp57;
      }
      const obj11 = { style: tmp4.subtitle, variant: "text-sm/bold", color: "text-default", children: ageSpecificText };
      const tmp53 = closure_6(tmp(5088).Text, obj11);
      cResult[31] = tmp4.subtitle;
      cResult[32] = ageSpecificText;
      cResult[33] = tmp53;
    }
    const obj12 = { style: tmp4.title, variant: "text-lg/bold", children: tmp46 };
    const tmp50 = closure_6(tmp(5088).Text, obj12);
    cResult[28] = tmp4.title;
    cResult[29] = tmp46;
    cResult[30] = tmp50;
  }
  class J {
    constructor() {
      tmp = disconnectLinkRequest(otherUser.id);
      return;
    }
  }
  cResult[17] = disconnectLinkRequest;
  cResult[18] = otherUser.id;
  cResult[19] = J;
  const tmpResult12 = otherUser(11533);
}) : (function FamilyCenterModalDisconnectScreen(otherUser) {
  otherUser = otherUser.otherUser;
  importDefault = undefined;
  dependencyMap = undefined;
  let disconnectLinkRequest;
  let isDisconnectLoading;
  const tmp = closure_8();
  const callback = isDisconnectLoading.useCallback(() => {
    _undefined(_undefined2[8]).pop();
  }, []);
  const name = UserUtilsDefault.useName(otherUser);
  const requiresParentalConsent = otherUser(7738).useRequiresParentalConsent(otherUser.id);
  const obj2 = otherUser(7738);
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
  const familyCenterActions = otherUser(11530).useFamilyCenterActions({ onSuccess: callback, onError: callback1 });
  disconnectLinkRequest = familyCenterActions.disconnectLinkRequest;
  isDisconnectLoading = familyCenterActions.isDisconnectLoading;
  const obj3 = otherUser(11530);
  let intl = otherUser(1126).intl;
  const obj4 = otherUser(11533);
  const intl2 = otherUser(1126).intl;
  const ageSpecificText = obj4.useAgeSpecificText(intl.format(_modDef2568.F2lccv, { username: name }), intl2.string(_modDef2568["WH+Gba"]));
  const formatResult = intl.format(_modDef2568.F2lccv, { username: name });
  const intl3 = otherUser(1126).intl;
  const obj5 = otherUser(11533);
  const intl4 = otherUser(1126).intl;
  const ageSpecificText1 = obj5.useAgeSpecificText(intl3.string(_modDef2568.hOEHFn), intl4.format(_modDef2568.Or6hgl, { username: name }));
  const stringResult = intl3.string(_modDef2568.hOEHFn);
  const intl5 = otherUser(1126).intl;
  const obj6 = otherUser(11533);
  const intl6 = otherUser(1126).intl;
  const ageSpecificText2 = obj6.useAgeSpecificText(intl5.format(_modDef2568.XyRW4c, { username: name }), intl6.format(_modDef2568.PlrZal, { username: name }));
  const formatResult1 = intl5.format(_modDef2568.XyRW4c, { username: name });
  const intl7 = otherUser(1126).intl;
  const obj7 = otherUser(11533);
  const intl8 = otherUser(1126).intl;
  const ageSpecificText3 = obj7.useAgeSpecificText(intl7.string(_modDef2568.eiABQz), intl8.string(_modDef2568.PGQBnk));
  const stringResult1 = intl7.string(_modDef2568.eiABQz);
  const intl9 = otherUser(1126).intl;
  const obj8 = otherUser(11533);
  const intl10 = otherUser(1126).intl;
  const items = [disconnectLinkRequest, otherUser.id];
  const ageSpecificText4 = obj8.useAgeSpecificText(intl9.string(_modDef2568.sCbKs4), intl10.string(_modDef2568["0ki7+P"]));
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
  const stringResult2 = intl9.string(_modDef2568.sCbKs4);
  obj10.iconSrc = _modDef7728;
  const items3 = [closure_6(FamilyCenterAvatarPairDefault, obj10), , ];
  const obj11 = { style: tmp.title, variant: "text-lg/bold", children: null };
  const intl11 = otherUser(1126).intl;
  obj11.children = intl11.format(_modDef2568.o0JXuK, { username: name });
  items3[1] = closure_6(otherUser(5088).Text, obj11);
  items3[2] = closure_6(otherUser(5088).Text, { style: tmp.subtitle, variant: "text-sm/bold", color: "text-default", children: ageSpecificText });
  obj9.children = items3;
  const items4 = [closure_7(View, obj9), , , ];
  let tmp28Result = requiresParentalConsent;
  if (requiresParentalConsent) {
    const obj13 = { style: tmp.warning, text: ageSpecificText1 };
    tmp28Result = closure_6(tmp3(15130), obj13);
  }
  const obj14 = { children: null };
  items4[1] = tmp28Result;
  items4[2] = closure_6(otherUser(5088).Text, { style: tmp.body, variant: "text-md/normal", color: "text-default", children: ageSpecificText2 });
  const obj16 = { spacing: nativeDefault.space.PX_12, children: null };
  const items5 = [closure_6(otherUser(12901).Checkbox, { label: ageSpecificText3, checked: tmp9, onToggle: callback3 }), closure_6(otherUser(12901).Checkbox, { label: ageSpecificText4, checked: tmp11, onToggle: callback4 })];
  obj16.children = items5;
  items4[3] = closure_7(otherUser(5377).Stack, obj16);
  obj14.children = items4;
  const items6 = [closure_7(otherUser(7515).ModalContent, obj14), ];
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
  const intl12 = tmp6(1126).intl;
  obj20.text = intl12.string(_modDef2568["c5L+sl"]);
  obj20.onPress = callback2;
  const items7 = [closure_6(otherUser(5379).Button, obj20), ];
  const obj21 = { variant: "tertiary", text: null, onPress: null };
  const intl13 = tmp6(1126).intl;
  obj21.text = intl13.string(otherUser(1126).t["3ilveh"]);
  obj21.onPress = ModalActionCreatorsDefault.pop;
  items7[1] = closure_6(otherUser(5379).Button, obj21);
  obj19.children = items7;
  obj18.children = closure_7(otherUser(5958).ButtonGroup, obj19);
  items6[1] = closure_6(otherUser(11539).ModalFooter, obj18);
  obj17.children = items6;
  return closure_7(otherUser(7514).ModalScreen, obj17);
});
ReactCompilerGating = fn(558);
let obj7 = { marginBottom: nativeDefault.space.PX_24 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterModalDisconnect.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function FamilyCenterModalDisconnect(otherUser) {
  const cResult = otherUser(576).c(5);
  otherUser = otherUser.otherUser;
  if (cResult[0] !== otherUser) {
    const obj2 = { DISCONNECT: null };
    const obj3 = {
      headerShown: true,
      headerLeft: tmp(6200).getHeaderCloseButton(ModalActionCreatorsDefault.pop),
      headerTitle() {
          return null;
        },
      render() {
          return closure_2_6(closure_2_9, { otherUser });
        }
    };
    obj2.DISCONNECT = obj3;
    cResult[0] = otherUser;
    cResult[1] = obj2;
    let tmp4 = obj2;
    const tmpResult = tmp(6200);
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1126).intl;
    const stringResult = intl.string(tmp(1126).t["13/7kX"]);
    cResult[2] = stringResult;
    let tmp6 = stringResult;
  } else {
    tmp6 = cResult[2];
  }
  if (cResult[3] !== tmp4) {
    const obj4 = { initialRouteName: "DISCONNECT", screens: tmp4, headerBackTitle: tmp6 };
    const tmp10 = closure_6(tmp(10602).Modal, obj4);
    cResult[3] = tmp4;
    cResult[4] = tmp10;
    let tmp8 = tmp10;
  } else {
    tmp8 = cResult[4];
  }
  return tmp8;
}) : (function FamilyCenterModalDisconnect(otherUser) {
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
        return closure_2_6(closure_2_9, { otherUser });
      }
    };
    obj.DISCONNECT = obj2;
    return obj;
  }, items);
  let obj = { initialRouteName: "DISCONNECT", screens: memo, headerBackTitle: null };
  const intl = otherUser(1126).intl;
  obj.headerBackTitle = intl.string(otherUser(1126).t["13/7kX"]);
  return closure_6(otherUser(10602).Modal, obj);
});