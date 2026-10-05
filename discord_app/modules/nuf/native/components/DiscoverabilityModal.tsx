// === Module 12416: DiscoverabilityModal ===

// Module 12416 (DiscoverabilityModal)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import ConstantsIOS from "ConstantsIOS" /* 1105 */;
import intl2 from "intl" /* 1126 */;
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1260 */;
import NavigatorConstants from "NavigatorConstants" /* 6068 */;
import Navigator2 from "Navigator" /* 6496 */;
import ContactSyncModalStore from "ContactSyncModalStore" /* 12326 */;
import ContactSyncActionCreatorsDefault from "ContactSyncActionCreators" /* 12333 */;
import ContactSyncNameInputDefault from "ContactSyncNameInput" /* 12346 */;
import NUFActionCreators from "NUFActionCreators" /* 12353 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1377 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let currentUser, navigation;

let obj2;
function headerLeft() {
  return null;
}
function headerTitle() {
  return null;
}
function render() {
  return closure_1_7(closure_1_9, {});
}
const headerTitle2 = function headerTitle() {
  return null;
};
const render2 = function render() {
  return closure_1_7(closure_1_10, {});
};
const View = react_native.View;
const useContactSyncModalStore = ContactSyncModalStore.useContactSyncModalStore;
const ModalAnimation = Constants.ModalAnimation;
const jsx = Fragment.jsx;
let obj = { container: obj2 };
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, justifyContent: "center", paddingBottom: 44, paddingTop: NavigatorConstants.NAV_BAR_HEIGHT + 32 };
let closure_8 = createStyles.createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let allowPhone;
  let tmp5;
  let tmp6;
  let obj = navigation(allowPhone[10]);
  const cResult = obj.c(10);
  let obj2 = navigation(allowPhone[11]);
  const tmp = navigation;
  navigation = obj2.useNavigation();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    const fn = function o() {
      currentUser = currentUser.getCurrentUser();
      let phone;
      if (currentUser != null) {
        phone = currentUser.phone;
      }
      return phone;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const tmpResult = tmp(allowPhone[12]);
  const stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
  const tmp9 = useContactSyncModalStore();
  allowPhone = tmp9.allowPhone;
  const allowEmail = tmp9.allowEmail;
  let closure_4 = tmp10;
  if (cResult[2] === allowEmail) {
    if (cResult[3] === allowPhone) {
      if (cResult[4] === (allowPhone || allowEmail)) {
        if (cResult[5] === navigation) {
          let tmp11;
          let tmp12;
          if (cResult[6] === stateFromStores) {
            tmp11 = cResult[7];
          }
          if (cResult[8] !== tmp11) {
            const tmp15 = jsx(stateFromStores(allowPhone[16]), { onNext: tmp11 });
            cResult[8] = tmp11;
            cResult[9] = tmp15;
            tmp12 = tmp15;
          } else {
            tmp12 = cResult[9];
          }
          return tmp12;
        }
      }
    }
  }
  const fn2 = function v() {
    const obj = ContactSyncActionCreatorsDefault;
    const obj2 = { phone: allowPhone, email: allowEmail };
    const result = obj.updateDiscoverability(obj2);
    if (closure_4) {
      if (null != stateFromStores) {
        if (allowPhone) {
          navigation.push(ConstantsIOS.DiscoverabilityScenes.NAME);
        }
      }
    }
    const obj3 = NUFActionCreators;
    const result1 = obj3.closeDiscoverabilityModal(false);
  };
  cResult[2] = allowEmail;
  cResult[3] = allowPhone;
  cResult[4] = allowPhone || allowEmail;
  cResult[5] = navigation;
  cResult[6] = stateFromStores;
  cResult[7] = fn2;
  tmp11 = fn2;
}) : (() => {
  let allowPhone;
  let obj = navigation(allowPhone[11]);
  navigation = obj.useNavigation();
  let obj2 = navigation(allowPhone[12]);
  const items = [UserStore];
  const stateFromStores = obj2.useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    let phone;
    if (currentUser != null) {
      phone = currentUser.phone;
    }
    return phone;
  });
  const tmp4 = useContactSyncModalStore();
  const tmp = allowPhone;
  allowPhone = tmp4.allowPhone;
  const allowEmail = tmp4.allowEmail;
  let closure_4 = tmp5;
  const items1 = [navigation, stateFromStores, allowEmail, allowPhone, allowPhone || allowEmail];
  const onNext = allowEmail.useCallback(() => {
    const obj = ContactSyncActionCreatorsDefault;
    const obj2 = { phone: allowPhone, email: allowEmail };
    const result = obj.updateDiscoverability(obj2);
    if (closure_4) {
      if (null != stateFromStores) {
        if (allowPhone) {
          navigation.push(ConstantsIOS.DiscoverabilityScenes.NAME);
        }
      }
    }
    const obj3 = NUFActionCreators;
    const result1 = obj3.closeDiscoverabilityModal(false);
  }, items1);
  return jsx(stateFromStores(tmp[16]), { onNext });
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let allowPhone;
  let name;
  let tmp5;
  let tmp6;
  let tmp8;
  let tmp9;
  let obj = allowPhone(576);
  const cResult = obj.c(9);
  const tmp3 = closure_8();
  ({ name, allowPhone } = useContactSyncModalStore());
  useContactSyncModalStore();
  if (cResult[0] !== allowPhone) {
    const fn = function l() {
      if (!allowPhone) {
        const obj = NUFActionCreators;
        const result = obj.closeDiscoverabilityModal(false);
      }
    };
    const items = [allowPhone];
    cResult[0] = allowPhone;
    cResult[1] = fn;
    cResult[2] = items;
    tmp6 = items;
    tmp5 = fn;
  } else {
    tmp5 = cResult[1];
    tmp6 = cResult[2];
  }
  const effect = react.useEffect(tmp5, tmp6);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function v(arg0) {
      const obj = allowPhone(dependencyMap[15]);
      const result = obj.startContactSyncForDiscoverability(arg0);
      const obj2 = allowPhone(dependencyMap[15]);
      const result1 = obj2.closeDiscoverabilityModal(false);
    };
    cResult[3] = fn2;
    tmp8 = fn2;
  } else {
    tmp8 = cResult[3];
  }
  if (name == null) {
    name = "";
  }
  if (cResult[4] !== name) {
    const tmp12 = jsx(ContactSyncNameInputDefault, { onNext: tmp8, loading: false, initialName: name });
    cResult[4] = name;
    cResult[5] = tmp12;
    tmp9 = tmp12;
  } else {
    tmp9 = cResult[5];
  }
  if (cResult[6] === tmp3.container) {
    let tmp13;
    if (cResult[7] === tmp9) {
      tmp13 = cResult[8];
    }
    return tmp13;
  }
  const tmp14 = <View style={tmp3.container}>{tmp9}</View>;
  cResult[6] = tmp3.container;
  cResult[7] = tmp9;
  cResult[8] = tmp14;
  tmp13 = tmp14;
}) : (() => {
  let allowPhone;
  let name;
  const tmp = closure_8();
  ({ name, allowPhone } = useContactSyncModalStore());
  const items = [allowPhone];
  useContactSyncModalStore();
  const effect = react.useEffect(() => {
    if (!allowPhone) {
      const obj = NUFActionCreators;
      const result = obj.closeDiscoverabilityModal(false);
    }
  }, items);
  const callback = react.useCallback((arg0) => {
    const obj = allowPhone(dependencyMap[15]);
    const result = obj.startContactSyncForDiscoverability(arg0);
    const obj2 = allowPhone(dependencyMap[15]);
    const result1 = obj2.closeDiscoverabilityModal(false);
  }, []);
  let obj2 = { onNext: callback, loading: false, initialName: name };
  ContactSyncNameInputDefault;
  if (name == null) {
    name = "";
  }
  return <View style={tmp.container}>{null}</View>;
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let first;
  let tmp5;
  const obj = react2;
  const cResult = obj.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = {};
    const obj3 = { ignoreKeyboard: true, impressionName: discord_common_AnalyticsUtils.ImpressionNames.DISCOVERABILITY, fullscreen: true, headerLeft, headerTitle, render };
    const LANDING = ConstantsIOS.DiscoverabilityScenes.LANDING;
    obj2[LANDING] = obj3;
    const obj4 = { ignoreKeyboard: true, impressionName: discord_common_AnalyticsUtils.ImpressionNames.DISCOVERABILITY, fullscreen: true, headerTitle: headerTitle2, render: render2 };
    const NAME = ConstantsIOS.DiscoverabilityScenes.NAME;
    obj2[NAME] = obj4;
    cResult[0] = obj2;
    first = obj2;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const Navigator = Navigator2.Navigator;
    const intl = intl2.intl;
    const tmp7 = <Navigator screens={first} initialRouteName={ConstantsIOS.DiscoverabilityScenes.LANDING} headerBackTitle={intl.string(intl2.t["13/7kX"])} />;
    cResult[1] = tmp7;
    tmp5 = tmp7;
  } else {
    tmp5 = cResult[1];
  }
  return tmp5;
}) : (() => {
  const Navigator = Navigator2.Navigator;
  const intl = intl2.intl;
  return <Navigator screens={react.useMemo(() => {
    const obj = {};
    const obj2 = { ignoreKeyboard: true, impressionName: discord_common_AnalyticsUtils.ImpressionNames.DISCOVERABILITY, fullscreen: true, headerLeft, headerTitle, render };
    const LANDING = ConstantsIOS.DiscoverabilityScenes.LANDING;
    obj[LANDING] = obj2;
    const obj3 = { ignoreKeyboard: true, impressionName: discord_common_AnalyticsUtils.ImpressionNames.DISCOVERABILITY, fullscreen: true, headerTitle: headerTitle2, render: render2 };
    const NAME = ConstantsIOS.DiscoverabilityScenes.NAME;
    obj[NAME] = obj3;
    return obj;
  }, [])} initialRouteName={ConstantsIOS.DiscoverabilityScenes.LANDING} headerBackTitle={intl.string(intl2.t["13/7kX"])} />;
});
tmp2.modalConfig = { animation: ModalAnimation.SLIDE_IN_OUT };
let result = size.fileFinishedImporting("modules/nuf/native/components/DiscoverabilityModal.tsx");

export default tmp2;