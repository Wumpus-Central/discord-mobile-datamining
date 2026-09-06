// === Module 16915: Alerts ===

// Module 16915 (Alerts)
import discord_common_shallowEqualDefault from "discord_common/shallowEqual" /* 558 */;
import nativeDefault from "native" /* 576 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 4905 */;
import Dialog from "Dialog" /* 4958 */;
import KeyboardAwareViewDefault from "KeyboardAwareView" /* 5578 */;
import ModalRegistryDefault from "ModalRegistry" /* 16916 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4552 */;
import PermissionSpeakStore from "PermissionSpeakStore" /* 13751 */;
import PermissionVADStore from "PermissionVADStore" /* 14396 */;
import SurveyStore from "SurveyStore" /* 4751 */;
import AlertStore from "AlertStore" /* 11545 */;

require = fn;
get_ActivityIndicator = fn(17);
const StyleSheet = get_ActivityIndicator.StyleSheet;
({ Animated: hasOwnProperty, Easing: metroRequire, TouchableWithoutFeedback: closure_7 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: map1, jsxs: closure_14 } = jsxProd);
let obj = {
  stores: null,
  center: true,
  isOpen() {
    return PermissionSpeakStore.shouldShowWarning();
  },
  getComponent() {
    return require("Suppressed").default;
  }
};
let items = [PermissionSpeakStore];
obj.stores = items;
let items1 = [obj, , ];
obj = {
  stores: null,
  center: true,
  isOpen() {
    return PermissionVADStore.shouldShowWarning();
  },
  getComponent() {
    return require("VADPermission").default;
  }
};
let items2 = [PermissionVADStore];
obj.stores = items2;
items1[1] = obj;
let obj1 = {
  stores: null,
  center: true,
  isOpen() {
    return null != SurveyStore.getCurrentSurvey();
  },
  getComponent() {
    return require("MobileSurvey").default;
  }
};
let items3 = [SurveyStore];
obj1.stores = items3;
items1[2] = obj1;
const stores = new ModalRegistryDefault(items1);
const createStyles = fn(4560);
let obj2 = { alertWrapper: null, alertContentWrapper: null };
let obj3 = {};
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj3.backgroundColor = nativeDefault.colors.BACKGROUND_SCRIM;
obj3.justifyContent = "center";
obj3.alignItems = "center";
obj2.alertWrapper = obj3;
obj2.alertContentWrapper = { display: "flex", alignItems: "center", justifyContent: "center", height: "100%" };
let closure_16 = createStyles.createLegacyClassComponentStyles(obj2);
const PureComponent = noop.PureComponent;
class AlertWrapper extends PureComponent {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    obj = { opacity: null, scale: null };
    value = new Animated.Value(0);
    obj.opacity = value;
    num = 0;
    if (applyArgumentsResult.props.useReducedMotion) {
      num = 1;
    }
    value1 = new Animated.Value(num);
    obj.scale = value1;
    applyArgumentsResult.state = obj;
    applyArgumentsResult.componentDidAppear = function componentDidAppear() {
      const opacity = applyArgumentsResult.state.opacity;
      opacity.setValue(1);
      const scale = applyArgumentsResult.state.scale;
      scale.setValue(1);
    };
    applyArgumentsResult.componentWillEnter = function componentWillEnter(arg0) {
      const obj = { toValue: 1, easing: timestampProducer.linear, duration: 250, useNativeDriver: true };
      const items = [RN.timing(applyArgumentsResult.state.opacity, obj)];
      if (!applyArgumentsResult.props.useReducedMotion) {
        items.push(obj.spring(applyArgumentsResult.state.scale, { toValue: 1, useNativeDriver: true }));
      }
      obj.parallel(items).start(arg0);
      const parallelResult = obj.parallel(items);
    };
    applyArgumentsResult.componentWillLeave = function componentWillLeave(arg0) {
      let obj = { toValue: 0, easing: timestampProducer.linear, duration: 100, useNativeDriver: true };
      const items = [RN.timing(applyArgumentsResult.state.opacity, obj)];
      if (!applyArgumentsResult.props.useReducedMotion) {
        obj = { toValue: 0, easing: timestampProducer.in(timestampProducer.ease), duration: 100, useNativeDriver: true };
        items.push(obj.timing(applyArgumentsResult.state.scale, obj));
      }
      obj.parallel(items).start(arg0);
      const parallelResult = obj.parallel(items);
    };
    applyArgumentsResult.handleRequestClose = function handleRequestClose() {
      if (applyArgumentsResult.props.isDismissable) {
        actions_AlertActionCreatorsDefault.close();
      }
    };
    return applyArgumentsResult;
  }
}
AlertWrapper.prototype["render"] = function render() {
  const self = this;
  const tmp = closure_16(this.context);
  let str = this.props.renderKey;
  if (str == null) {
    str = "alerts-component";
  }
  const props = self.props;
  let obj = { onClose: actions_AlertActionCreatorsDefault.close };
  ({ opacity, scale } = self.state);
  obj = { dialogKey: str, onDismiss: self.handleRequestClose, children: null };
  obj = { style: null, children: null };
  const items = [StyleSheet.absoluteFill, tmp.alertContentWrapper];
  obj.style = items;
  const obj1 = { accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", accessibilityRole: "none", accessible: false, onPress: self.handleRequestClose, children: null };
  const obj2 = { style: null };
  const items1 = [tmp.alertWrapper, self.props.style, { opacity }];
  obj2.style = items1;
  const renderAlertResult = props.renderAlert(obj);
  obj1.children = map1(RN.View, obj2);
  const items2 = [map1(React5, obj1), ];
  const obj3 = { style: null, children: renderAlertResult };
  const obj4 = { transform: null };
  const items3 = [{ scale }];
  obj4.transform = items3;
  obj3.style = obj4;
  items2[1] = map1(RN.View, obj3);
  obj.children = items2;
  obj.children = closure_1_14(KeyboardAwareViewDefault, obj);
  return map1(Dialog.Dialog, obj);
};
AlertWrapper.contextType = fn(4271).ThemeContext;
let closure_18 = Object.freeze({ renderAlert: "Array", renderKey: "call", props: "o" });
const tmp7 = new ModalRegistryDefault(items1);
const size = fn(2);
const result = size.fileFinishedImporting("components_native/common/Alerts.tsx");

export default noop.memo(function Alerts() {
  _require = renderAlert.useRef(closure_18);
  let obj = require("initialize");
  const items = [AlertStore, ...closure_15.getStores()];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    let obj = AlertStore;
    const _alert = AlertStore.getAlert();
    if (null != _alert) {
      obj = { renderAlert: _alert, renderKey: null, props: null };
      obj.renderKey = obj.getAlertKey();
      return obj;
    } else {
      openModal = openModal.getOpenModal();
      if (null != openModal) {
        const props = openModal.props;
        const _HermesInternal = HermesInternal;
        const combined = "alert-registery-" + openModal.key;
        if (combined === ref.current.renderKey) {
          if (discord_common_shallowEqualDefault(props, ref.current.props)) {
            let fn = ref.current.renderAlert;
          }
          obj = { renderAlert: fn, renderKey: combined, props: openModal.props };
          return obj;
        }
        fn = (arg0) => {
          const merged = Object.assign(arg0);
          const merged1 = Object.assign(props);
          return <openModal.component />;
        };
      } else {
        return { renderAlert: "Array", renderKey: "call", props: "o" };
      }
    }
  });
  const effect = renderAlert.useEffect(() => {
    closure_0.current = stateFromStoresObject;
  });
  const items1 = [AlertStore];
  stateFromStores = require("initialize").useStateFromStores(items1, () => alertDismissable.isAlertDismissable());
  const obj2 = require("initialize");
  const items2 = [AccessibilityStore];
  renderAlert = stateFromStoresObject.renderAlert;
  const renderKey = stateFromStoresObject.renderKey;
  const items3 = [renderAlert, stateFromStores];
  const stateFromStores1 = require("initialize").useStateFromStores(items2, () => useReducedMotion.useReducedMotion);
  const callback = renderAlert.useCallback(() => {
    let tmp2 = tmp;
    if (null != renderAlert) {
      tmp2 = stateFromStores;
    }
    if (tmp2) {
      actions_AlertActionCreatorsDefault.close();
    }
    return null != renderAlert;
  }, items3);
  stateFromStoresObject(stateFromStores[20])(callback);
  let tmp9;
  if (null != renderAlert) {
    obj = { isDismissable: stateFromStores, renderAlert, renderKey, useReducedMotion: stateFromStores1 };
    tmp9 = closure_13(AlertWrapper, obj, renderKey);
  }
  obj = { component: tmp(tmp2[22]).TransitionGroupOverlayView, style: StyleSheet.absoluteFill, children: tmp9 };
  return closure_13(require("TransitionGroup").TransitionGroup, obj);
});