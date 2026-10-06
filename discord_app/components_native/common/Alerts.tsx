// discord_app/components_native/common/Alerts.tsx
import shallowEqualDefault from "../../../discord_common/js/packages/shallow-equal/shallowEqual.tsx";
import nativeDefault from "../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../discord_common/js/packages/design/native.tsx";
import actions_AlertActionCreatorsDefault from "../../actions/native/AlertActionCreators.tsx";
import Dialog2 from "../../design/components/Dialog/native/Dialog.native.tsx";
import KeyboardAwareViewDefault from "../../modules/keyboard/native/KeyboardAwareView.tsx";
import ModalRegistryDefault from "../../lib/ModalRegistry.tsx";
import react from "../../../_runtime/00019_react.js";
import react_native from "../../../_runtime/00017_react-native.js";
import AccessibilityStore from "../../modules/a11y/AccessibilityStore.tsx";
import PermissionSpeakStore from "../../stores/PermissionSpeakStore.tsx";
import PermissionVADStore from "../../stores/PermissionVADStore.tsx";
import SurveyStore from "../../stores/SurveyStore.tsx";
import AlertStore from "../../stores/native/AlertStore.tsx";
import Fragment from "../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../modules/react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

let _require;

let closure_14;
let hasOwnProperty;
let items;
let items2;
let items3;
let map1;
let metroImportDefault;
let metroRequire;
let obj5;
const StyleSheet = react_native.StyleSheet;
({ Animated: hasOwnProperty, Easing: metroRequire, TouchableWithoutFeedback: metroImportDefault } = react_native);
({ jsx: map1, jsxs: closure_14 } = Fragment);
let obj = {
  stores: items,
  center: true,
  isOpen() {
    return PermissionSpeakStore.shouldShowWarning();
  },
  getComponent() {
    return require("Suppressed").default;
  },
};
items = [PermissionSpeakStore];
let items1 = [obj, ,];
let obj2 = {
  stores: items2,
  center: true,
  isOpen() {
    return PermissionVADStore.shouldShowWarning();
  },
  getComponent() {
    return require("VADPermission").default;
  },
};
items2 = [PermissionVADStore];
items1[1] = obj2;
let obj3 = {
  stores: items3,
  center: true,
  isOpen() {
    return null != SurveyStore.getCurrentSurvey();
  },
  getComponent() {
    return require("MobileSurvey").default;
  },
};
items3 = [SurveyStore];
items1[2] = obj3;
const stores = new ModalRegistryDefault(items1);
const tmp7 = new ModalRegistryDefault(items1);
let obj4 = {
  alertWrapper: obj5,
  alertContentWrapper: { display: "flex", alignItems: "center", justifyContent: "center", height: "100%" },
};
obj5 = { backgroundColor: nativeDefault.colors.BACKGROUND_SCRIM, justifyContent: "center", alignItems: "center" };
const createLegacyClassComponentStyles = createStyles.createLegacyClassComponentStyles;
let merged = Object.assign(StyleSheet.absoluteFillObject);
const authStore3 = createLegacyClassComponentStyles(obj4);
const PureComponent = react.PureComponent;
class AlertWrapper extends PureComponent {
  constructor() {
    let value;
    let value2;
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    const require = applyArgumentsResult;
    let obj = { opacity: value, scale: value2 };
    value = new RN.Value(0);
    let num = 0;
    const Value = RN.Value;
    if (applyArgumentsResult.props.useReducedMotion) {
      num = 1;
    }
    value2 = new Value(num);
    applyArgumentsResult.state = obj;
    applyArgumentsResult.componentDidAppear = function componentDidAppear() {
      const opacity = require.state.opacity;
      opacity.setValue(1);
      const scale = require.state.scale;
      scale.setValue(1);
    };
    applyArgumentsResult.componentWillEnter = function componentWillEnter(arg0) {
      const items = [];
      const obj2 = { toValue: 1, easing: metroRequire.linear, duration: 250, useNativeDriver: true };
      items[0] = hasOwnProperty.timing(require.state.opacity, obj2);
      if (!require.props.useReducedMotion) {
        items.push(hasOwnProperty.spring(require.state.scale, { toValue: 1, useNativeDriver: true }));
      }
      const parallelResult = hasOwnProperty.parallel(items);
      parallelResult.start(arg0);
    };
    applyArgumentsResult.componentWillLeave = function componentWillLeave(arg0) {
      const items = [];
      const obj2 = { toValue: 0, easing: metroRequire.linear, duration: 100, useNativeDriver: true };
      items[0] = hasOwnProperty.timing(require.state.opacity, obj2);
      if (!require.props.useReducedMotion) {
        const push = items.push;
        const timing = hasOwnProperty.timing;
        const scale = require.state.scale;
        const obj4 = { toValue: 0, easing: metroRequire.in(metroRequire.ease), duration: 100, useNativeDriver: true };
        push(timing(scale, obj4));
      }
      const parallelResult = hasOwnProperty.parallel(items);
      parallelResult.start(arg0);
    };
    applyArgumentsResult.handleRequestClose = function handleRequestClose() {
      if (require.props.isDismissable) {
        const obj = actions_AlertActionCreatorsDefault;
        obj.close();
      }
    };
    return applyArgumentsResult;
  }
  render() {
    let items;
    let items1;
    let items2;
    let items3;
    let obj3;
    let obj5;
    let obj7;
    let opacity;
    let scale;
    let tmp3;
    const self = this;
    const tmp = closure_16(this.context);
    let str = this.props.renderKey;
    if (str == null) {
      str = "alerts-component";
    }
    const props = self.props;
    const state = self.state;
    ({ opacity, scale } = state);
    const obj = { onClose: actions_AlertActionCreatorsDefault.close };
    const obj2 = { dialogKey: str, onDismiss: self.handleRequestClose, children: authStore2(tmp3, obj3) };
    const renderAlertResult = props.renderAlert(obj);
    const Dialog = Dialog2.Dialog;
    obj3 = { style: items, children: items2 };
    items = [StyleSheet.absoluteFill, tmp.alertContentWrapper];
    const obj4 = {
      accessibilityElementsHidden: true,
      importantForAccessibility: "no-hide-descendants",
      accessibilityRole: "none",
      accessible: false,
      onPress: self.handleRequestClose,
      children: map1(hasOwnProperty.View, obj5),
    };
    obj5 = { style: items1 };
    items1 = [tmp.alertWrapper, self.props.style, { opacity }];
    tmp3 = KeyboardAwareViewDefault;
    items2 = [map1(metroImportDefault, obj4)];
    const obj6 = { style: obj7, children: renderAlertResult };
    obj7 = { transform: items3 };
    items3 = [{ scale }];
    items2[1] = map1(hasOwnProperty.View, obj6);
    return map1(Dialog, obj2);
  }
}
const prototype = AlertWrapper.prototype;
AlertWrapper.contextType = native.ThemeContext;
let closure_18 = Object.freeze({
  renderAlert: "duration",
  renderKey: "toCharArray$esjava$1",
  props: "toCharArray$esjava$1",
});
const memoResult = react.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? () => {
        let alertDismissable;
        let openModal;
        let ref;
        let renderAlert;
        let stateFromStores;
        let tmp12;
        let tmp14;
        let tmp15;
        let tmp18;
        let tmp19;
        let tmp5;
        let tmp6;
        let useReducedMotion;
        let tmp2 = _require;
        let obj = require("react");
        const cResult = obj.c(18);
        let obj2 = renderAlert;
        _require = renderAlert.useRef(closure_18);
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const items = [AlertStore];
          HermesBuiltin.arraySpread(items, openModal.getStores(), 1);
          let fn = function o() {
            const _alert = AlertStore.getAlert();
            if (null != _alert) {
              const obj2 = { renderAlert: _alert, renderKey: AlertStore.getAlertKey(), props: null };
              return obj2;
            } else {
              openModal = openModal.getOpenModal();
              if (null != openModal) {
                const props = openModal.props;
                const _HermesInternal = HermesInternal;
                const combined = "alert-registery-" + openModal.key;
                if (combined === ref.current.renderKey) {
                  let fn;
                  if (shallowEqualDefault(props, ref.current.props)) {
                    fn = ref.current.renderAlert;
                  }
                  return { renderAlert: fn, renderKey: combined, props: openModal.props };
                }
                fn = (arg0) => {
                  const createElement = React.createElement;
                  const component = openModal.component;
                  const merged = Object.assign(arg0);
                  const merged1 = Object.assign(props);
                  return <component />;
                };
              } else {
                return { renderAlert: "duration", renderKey: "toCharArray$esjava$1", props: "toCharArray$esjava$1" };
              }
            }
          };
          cResult[0] = items;
          cResult[1] = fn;
          tmp5 = items;
          tmp6 = fn;
        } else {
          [tmp5, tmp6] = cResult;
        }
        const tmp2Result = tmp2(stateFromStores[21]);
        const stateFromStoresObject = tmp2Result.useStateFromStoresObject(tmp5, tmp6);
        if (cResult[2] !== stateFromStoresObject) {
          const fn2 = function p() {
            ref.current = stateFromStoresObject;
          };
          cResult[2] = stateFromStoresObject;
          cResult[3] = fn2;
          tmp12 = fn2;
        } else {
          tmp12 = cResult[3];
        }
        const effect = obj2.useEffect(tmp12);
        if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
          const items1 = [AlertStore];
          const fn3 = function h() {
            return alertDismissable.isAlertDismissable();
          };
          cResult[4] = items1;
          cResult[5] = fn3;
          tmp15 = fn3;
          tmp14 = items1;
        } else {
          tmp14 = cResult[4];
          tmp15 = cResult[5];
        }
        const tmp2Result3 = tmp2(stateFromStores[21]);
        stateFromStores = tmp2Result3.useStateFromStores(tmp14, tmp15);
        if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
          const items2 = [AccessibilityStore];
          class C {
            constructor() {
              return useReducedMotion.useReducedMotion;
            }
          }
          cResult[6] = items2;
          cResult[7] = C;
          tmp19 = C;
          tmp18 = items2;
        } else {
          tmp18 = cResult[6];
          tmp19 = cResult[7];
        }
        const tmp2Result4 = tmp2(stateFromStores[21]);
        const stateFromStores1 = tmp2Result4.useStateFromStores(tmp18, tmp19);
        renderAlert = stateFromStoresObject.renderAlert;
        const renderKey = stateFromStoresObject.renderKey;
        if (cResult[8] === stateFromStores) {
          let tmp22;
          let tmp31;
          if (cResult[9] === renderAlert) {
            tmp22 = cResult[10];
          }
          stateFromStoresObject(stateFromStores[22])(tmp22);
          class C {
            constructor() {
              return useReducedMotion.useReducedMotion;
            }
          }
          let tmp25;
          if (null != renderAlert) {
            if (cResult[11] === stateFromStores) {
              if (cResult[12] === renderAlert) {
                if (cResult[13] === renderKey) {
                  let tmp26;
                  if (cResult[14] === stateFromStores1) {
                    tmp26 = cResult[15];
                  }
                  tmp25 = tmp26;
                }
              }
            }
            class C {
              constructor() {
                return useReducedMotion.useReducedMotion;
              }
            }
            tmp29[0] = stateFromStores;
            tmp29[1] = renderAlert;
            tmp29[2] = renderKey;
            tmp29[3] = stateFromStores1;
            const tmp30 = closure_13(AlertWrapper, tmp29, renderKey);
            cResult[11] = stateFromStores;
            cResult[12] = renderAlert;
            cResult[13] = renderKey;
            cResult[14] = stateFromStores1;
            cResult[15] = tmp30;
            tmp26 = tmp30;
          }
          if (cResult[16] !== tmp25) {
            const obj3 = { component: null, style: StyleSheet.absoluteFill, children: tmp25 };
            const TransitionGroup = tmp2(tmp3[23]).TransitionGroup;
            class C {
              constructor() {
                return useReducedMotion.useReducedMotion;
              }
            }
            const tmp34 = closure_13(TransitionGroup, obj3);
            cResult[16] = tmp25;
            cResult[17] = tmp34;
            tmp31 = tmp34;
          } else {
            tmp31 = cResult[17];
          }
          return tmp31;
        }
        class F {
          constructor() {
            const tmp2 = null != renderAlert && stateFromStores;
            if (tmp2) {
              const obj = actions_AlertActionCreatorsDefault;
              obj.close();
            }
            return null != renderAlert;
          }
        }
        cResult[8] = stateFromStores;
        cResult[9] = renderAlert;
        cResult[10] = F;
        tmp22 = F;
      }
    : () => {
        let alertDismissable;
        let ref;
        let renderAlert;
        let stateFromStores;
        let useReducedMotion;
        _require = renderAlert.useRef(closure_18);
        let tmp2 = stateFromStores;
        let obj = require("get initialized");
        const items = [AlertStore, ...closure_15.getStores()];
        const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
          const _alert = AlertStore.getAlert();
          if (null != _alert) {
            const obj2 = { renderAlert: _alert, renderKey: AlertStore.getAlertKey(), props: null };
            return obj2;
          } else {
            openModal = openModal.getOpenModal();
            if (null != openModal) {
              const props = openModal.props;
              const _HermesInternal = HermesInternal;
              const combined = "alert-registery-" + openModal.key;
              if (combined === ref.current.renderKey) {
                let fn;
                if (shallowEqualDefault(props, ref.current.props)) {
                  fn = ref.current.renderAlert;
                }
                return { renderAlert: fn, renderKey: combined, props: openModal.props };
              }
              fn = (arg0) => {
                const createElement = React.createElement;
                const component = openModal.component;
                const merged = Object.assign(arg0);
                const merged1 = Object.assign(props);
                return <component />;
              };
            } else {
              return { renderAlert: "duration", renderKey: "toCharArray$esjava$1", props: "toCharArray$esjava$1" };
            }
          }
        });
        const effect = renderAlert.useEffect(() => {
          ref.current = stateFromStoresObject;
        });
        let obj2 = require("get initialized");
        const items1 = [AlertStore];
        stateFromStores = obj2.useStateFromStores(items1, () => alertDismissable.isAlertDismissable());
        const obj3 = require("get initialized");
        const items2 = [AccessibilityStore];
        renderAlert = stateFromStoresObject.renderAlert;
        const renderKey = stateFromStoresObject.renderKey;
        const items3 = [renderAlert, stateFromStores];
        const stateFromStores1 = obj3.useStateFromStores(items2, () => useReducedMotion.useReducedMotion);
        const callback = renderAlert.useCallback(() => {
          const tmp2 = null != renderAlert && stateFromStores;
          if (tmp2) {
            const obj = actions_AlertActionCreatorsDefault;
            obj.close();
          }
          return null != renderAlert;
        }, items3);
        stateFromStoresObject(stateFromStores[22])(callback);
        let tmp9;
        if (null != renderAlert) {
          const obj4 = { isDismissable: stateFromStores, renderAlert, renderKey, useReducedMotion: stateFromStores1 };
          tmp9 = closure_13(AlertWrapper, obj4, renderKey);
        }
        const obj5 = {
          component: require("native").TransitionGroupOverlayView,
          style: StyleSheet.absoluteFill,
          children: tmp9,
        };
        const TransitionGroup = tmp(tmp2[23]).TransitionGroup;
        return closure_13(TransitionGroup, obj5);
      },
);
const result = size.fileFinishedImporting("components_native/common/Alerts.tsx");

export default memoResult;
