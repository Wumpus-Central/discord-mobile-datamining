// discord_app/modules/nuf/native/components/RedesignDiscoverabilityModal.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../../Constants.tsx";
import ConstantsIOS from "../../../../ConstantsIOS.tsx";
import discord_common_AnalyticsUtils from "../../../../../discord_common/js/packages/analytics-utils/AnalyticsUtils.tsx";
import NavigatorConstants from "../../../../design/components/Navigator/native/NavigatorConstants.native.tsx";
import ContactSyncModalStore from "../../../contact_sync/native/ContactSyncModalStore.tsx";
import ContactSyncActionCreatorsDefault from "../../../contact_sync/native/ContactSyncActionCreators.tsx";
import NUFActionCreators from "../NUFActionCreators.tsx";
import react from "../../../../../_runtime/00019_react.js";
import UserStore from "../../../../stores/UserStore.tsx";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, navigation;

let obj2;
let obj3;
function headerLeft() {
  return null;
}
function headerTitle() {
  return null;
}
const headerTitle2 = function headerTitle() {
  return null;
};
const View = react_native.View;
const useContactSyncModalStore = ContactSyncModalStore.useContactSyncModalStore;
const ModalAnimation = Constants.ModalAnimation;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { header: obj2, container: obj3 };
obj2 = { borderBottomWidth: 0, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, shadowColor: "transparent" };
createStyles = createStyles.createStyles;
obj3 = {
  flex: 1,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  justifyContent: "center",
  paddingBottom: 44,
  paddingTop: NavigatorConstants.NAV_BAR_HEIGHT + 32,
};
let closure_8 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_9 = ReactCompilerGating.isReactCompilerEnabled()
  ? (onComplete) => {
      let allowEmail;
      let currentUser;
      let stateFromStores;
      let tmp5;
      let tmp6;
      let obj = onComplete(stateFromStores[10]);
      const cResult = obj.c(12);
      const tmp = onComplete;
      onComplete = onComplete.onComplete;
      let obj2 = onComplete(stateFromStores[11]);
      navigation = obj2.useNavigation();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [currentUser];
        const fn = function s() {
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
      const tmpResult = tmp(stateFromStores[12]);
      stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
      const tmp9 = allowEmail();
      const allowPhone = tmp9.allowPhone;
      const name = tmp9.name;
      allowEmail = tmp9.allowEmail;
      currentUser = tmp10;
      if (cResult[2] === allowEmail) {
        if (cResult[3] === allowPhone) {
          if (cResult[4] === (allowPhone || allowEmail)) {
            if (cResult[5] === name) {
              if (cResult[6] === navigation) {
                if (cResult[7] === onComplete) {
                  let tmp11;
                  let tmp12;
                  if (cResult[8] === stateFromStores) {
                    tmp11 = cResult[9];
                  }
                  if (cResult[10] !== tmp11) {
                    const tmp15 = jsx(navigation(stateFromStores[15]), { onNext: tmp11 });
                    cResult[10] = tmp11;
                    cResult[11] = tmp15;
                    tmp12 = tmp15;
                  } else {
                    tmp12 = cResult[11];
                  }
                  return tmp12;
                }
              }
            }
          }
        }
      }
      const fn2 = function v() {
        const obj = ContactSyncActionCreatorsDefault;
        const obj2 = { phone: allowPhone, email: allowEmail };
        const result = obj.updateDiscoverability(obj2);
        if (currentUser) {
          if (null != stateFromStores) {
            if (allowPhone) {
              if (null == name) {
                navigation.push(ConstantsIOS.DiscoverabilityScenes.NAME);
              }
            }
          }
        }
        onComplete();
      };
      cResult[2] = allowEmail;
      cResult[3] = allowPhone;
      cResult[4] = allowPhone || allowEmail;
      cResult[5] = name;
      cResult[6] = navigation;
      cResult[7] = onComplete;
      cResult[8] = stateFromStores;
      cResult[9] = fn2;
      tmp11 = fn2;
    }
  : (onComplete) => {
      onComplete = onComplete.onComplete;
      let stateFromStores;
      let allowEmail;
      let currentUser;
      let obj = onComplete(stateFromStores[11]);
      navigation = obj.useNavigation();
      let obj2 = onComplete(stateFromStores[12]);
      const items = [currentUser];
      const tmp = stateFromStores;
      stateFromStores = obj2.useStateFromStores(items, () => {
        currentUser = currentUser.getCurrentUser();
        let phone;
        if (currentUser != null) {
          phone = currentUser.phone;
        }
        return phone;
      });
      const tmp4 = allowEmail();
      const allowPhone = tmp4.allowPhone;
      const name = tmp4.name;
      allowEmail = tmp4.allowEmail;
      currentUser = tmp5;
      const items1 = [allowPhone, allowEmail, allowPhone || allowEmail, stateFromStores, name, navigation, onComplete];
      const onNext = allowPhone.useCallback(() => {
        const obj = ContactSyncActionCreatorsDefault;
        const obj2 = { phone: allowPhone, email: allowEmail };
        const result = obj.updateDiscoverability(obj2);
        if (currentUser) {
          if (null != stateFromStores) {
            if (allowPhone) {
              if (null == name) {
                navigation.push(ConstantsIOS.DiscoverabilityScenes.NAME);
              }
            }
          }
        }
        onComplete();
      }, items1);
      return jsx(navigation(tmp[15]), { onNext });
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_10 = ReactCompilerGating.isReactCompilerEnabled()
  ? (onComplete) => {
      let allowPhone;
      let name;
      let obj = onComplete(576);
      const cResult = obj.c(12);
      onComplete = onComplete.onComplete;
      const tmp3 = closure_8();
      ({ name, allowPhone } = useContactSyncModalStore());
      useContactSyncModalStore();
      if (cResult[0] === allowPhone) {
        let tmp5;
        let tmp6;
        let tmp9;
        if (cResult[1] === onComplete) {
          tmp5 = cResult[2];
          tmp6 = cResult[3];
        }
        const effect = react.useEffect(tmp5, tmp6);
        if (cResult[4] !== onComplete) {
          const fn2 = function h(arg0) {
            const obj = NUFActionCreators;
            const result = obj.startContactSyncForDiscoverability(arg0);
            onComplete();
          };
          cResult[4] = onComplete;
          cResult[5] = fn2;
          tmp9 = fn2;
        } else {
          tmp9 = cResult[5];
        }
        if (name == null) {
          name = "";
        }
        if (cResult[6] === tmp9) {
          let tmp11;
          if (cResult[7] === name) {
            tmp11 = cResult[8];
          }
          if (cResult[9] === tmp3.container) {
            let tmp15;
            if (cResult[10] === tmp11) {
              tmp15 = cResult[11];
            }
            return tmp15;
          }
          const tmp18 = <View style={tmp3.container}>{tmp11}</View>;
          cResult[9] = tmp3.container;
          cResult[10] = tmp11;
          cResult[11] = tmp18;
          tmp15 = tmp18;
        }
        const tmp14 = jsx(allowPhone(12346), { onNext: tmp9, loading: false, initialName: name });
        cResult[6] = tmp9;
        cResult[7] = name;
        cResult[8] = tmp14;
        tmp11 = tmp14;
      }
      const fn = function s() {
        if (!allowPhone) {
          onComplete();
        }
      };
      const items = [allowPhone, onComplete];
      cResult[0] = allowPhone;
      cResult[1] = onComplete;
      cResult[2] = fn;
      cResult[3] = items;
      tmp6 = items;
      tmp5 = fn;
    }
  : (onComplete) => {
      let allowPhone;
      let name;
      onComplete = onComplete.onComplete;
      allowPhone = undefined;
      const tmp = closure_8();
      ({ name, allowPhone } = useContactSyncModalStore());
      const items = [allowPhone, onComplete];
      const tmp2 = useContactSyncModalStore();
      const effect = react.useEffect(() => {
        if (!allowPhone) {
          onComplete();
        }
      }, items);
      const items1 = [onComplete];
      const callback = react.useCallback((arg0) => {
        const obj = NUFActionCreators;
        const result = obj.startContactSyncForDiscoverability(arg0);
        onComplete();
      }, items1);
      allowPhone(12346);
      if (name == null) {
        name = "";
      }
      return <View style={tmp.container}>{null}</View>;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (route) => {
      let closure_0;
      let tmp5;
      let tmp7;
      let tmp8;
      const obj = require("react");
      const cResult = obj.c(8);
      const onComplete = route.route.params.onComplete;
      const tmp4 = closure_8();
      const header = tmp4.header;
      if (cResult[0] !== onComplete) {
        let fn = onComplete;
        if (null == onComplete) {
          fn = () => {};
        }
        cResult[0] = onComplete;
        cResult[1] = fn;
        tmp5 = fn;
      } else {
        tmp5 = cResult[1];
      }
      if (cResult[2] !== tmp5) {
        _require = tmp5;
        const obj2 = {};
        const obj3 = {
          ignoreKeyboard: true,
          impressionName: require("discord_common/AnalyticsUtils").ImpressionNames.DISCOVERABILITY,
          fullscreen: true,
          headerLeft,
          headerTitle,
          headerRight(arg0) {
            const obj = {
              insideNavigator: true,
              onPress() {
                return onComplete(true);
              },
            };
            const tmp = closure_2_1(closure_2_2[19]);
            const merged = Object.assign(arg0);
            return closure_2_7(tmp, obj);
          },
          render() {
            const obj = { onComplete };
            return closure_2_7(closure_2_9, obj);
          },
        };
        const LANDING = tmp(1105).DiscoverabilityScenes.LANDING;
        obj2[LANDING] = obj3;
        const obj4 = {
          ignoreKeyboard: true,
          impressionName: require("discord_common/AnalyticsUtils").ImpressionNames.DISCOVERABILITY,
          fullscreen: true,
          headerTitle: headerTitle2,
          render() {
            const obj = { onComplete };
            return closure_2_7(closure_2_10, obj);
          },
        };
        const NAME = tmp(1105).DiscoverabilityScenes.NAME;
        obj2[NAME] = obj4;
        cResult[2] = tmp5;
        cResult[3] = obj2;
        tmp7 = obj2;
      } else {
        tmp7 = cResult[3];
      }
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = tmp(1126).intl;
        const stringResult = intl.string(require("intl").t["13/7kX"]);
        cResult[4] = stringResult;
        tmp8 = stringResult;
      } else {
        tmp8 = cResult[4];
      }
      if (cResult[5] === tmp4.header) {
        let tmp10;
        if (cResult[6] === tmp7) {
          tmp10 = cResult[7];
        }
        return tmp10;
      }
      const Navigator = tmp(6496).Navigator;
      const tmp11 = (
        <Navigator
          headerStyle={header}
          screens={tmp7}
          initialRouteName={require("ConstantsIOS").DiscoverabilityScenes.LANDING}
          headerBackTitle={tmp8}
        />
      );
      cResult[5] = tmp4.header;
      cResult[6] = tmp7;
      cResult[7] = tmp11;
      tmp10 = tmp11;
    }
  : (route) => {
      const onComplete = route.route.params.onComplete;
      let tmp = closure_8();
      const items = [onComplete];
      const Navigator = onComplete(6496).Navigator;
      const intl = onComplete(1126).intl;
      return (
        <Navigator
          headerStyle={tmp.header}
          screens={react.useMemo(() => {
            if (null == onComplete) {
              const fn = () => {};
            }
            let obj = {};
            const obj2 = {
              ignoreKeyboard: true,
              impressionName: discord_common_AnalyticsUtils.ImpressionNames.DISCOVERABILITY,
              fullscreen: true,
              headerLeft,
              headerTitle,
              headerRight(arg0) {
                const obj = {
                  insideNavigator: true,
                  onPress() {
                    return onComplete(true);
                  },
                };
                const tmp = closure_2_1(closure_2_2[19]);
                const merged = Object.assign(arg0);
                return closure_2_7(tmp, obj);
              },
              render() {
                const obj = { onComplete };
                return closure_2_7(closure_2_9, obj);
              },
            };
            const LANDING = ConstantsIOS.DiscoverabilityScenes.LANDING;
            obj[LANDING] = obj2;
            const obj3 = {
              ignoreKeyboard: true,
              impressionName: discord_common_AnalyticsUtils.ImpressionNames.DISCOVERABILITY,
              fullscreen: true,
              headerTitle: headerTitle2,
              render() {
                const obj = { onComplete };
                return closure_2_7(closure_2_10, obj);
              },
            };
            const NAME = ConstantsIOS.DiscoverabilityScenes.NAME;
            obj[NAME] = obj3;
            return obj;
          }, items)}
          initialRouteName={onComplete(1105).DiscoverabilityScenes.LANDING}
          headerBackTitle={intl.string(onComplete(1126).t["13/7kX"])}
        />
      );
    };
tmp3.modalConfig = { animation: ModalAnimation.SLIDE_IN_OUT };
let result = size.fileFinishedImporting("modules/nuf/native/components/RedesignDiscoverabilityModal.tsx");

export default tmp3;
