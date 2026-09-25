// === Module 16705: Alerts ===

// Module 16705 (Alerts)
import discord_common_shallowEqualDefault from "discord_common/shallowEqual" /* 558 */;
import nativeDefault from "native" /* 576 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5197 */;
import Dialog from "Dialog" /* 5255 */;
import KeyboardAwareViewDefault from "KeyboardAwareView" /* 5885 */;
import ModalRegistryDefault from "ModalRegistry" /* 16706 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4821 */;
import PermissionSpeakStore from "PermissionSpeakStore" /* 13279 */;
import PermissionVADStore from "PermissionVADStore" /* 13933 */;
import SurveyStore from "SurveyStore" /* 5020 */;
import AlertStore from "AlertStore" /* 11026 */;

const require = globalThis.__r;

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
let obj2 = {
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
obj2.stores = items2;
items1[1] = obj2;
let obj3 = {
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
obj3.stores = items3;
items1[2] = obj3;
const stores = new ModalRegistryDefault(items1);
const createStyles = fn(4829);
let obj4 = { alertWrapper: null, alertContentWrapper: null };
let obj6 = {};
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj6.backgroundColor = nativeDefault.colors.BACKGROUND_SCRIM;
obj6.justifyContent = "center";
obj6.alignItems = "center";
obj4.alertWrapper = obj6;
obj4.alertContentWrapper = { display: "flex", alignItems: "center", justifyContent: "center", height: "100%" };
let closure_16 = createStyles.createLegacyClassComponentStyles(obj4);
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
      const items = [RN.timing(applyArgumentsResult.state.opacity, { toValue: 1, easing: timestampProducer.linear, duration: 250, useNativeDriver: true })];
      if (!applyArgumentsResult.props.useReducedMotion) {
        items.push(RN.spring(applyArgumentsResult.state.scale, { toValue: 1, useNativeDriver: true }));
      }
      RN.parallel(items).start(arg0);
      const obj2 = { toValue: 1, easing: timestampProducer.linear, duration: 250, useNativeDriver: true };
      const parallelResult = RN.parallel(items);
    };
    applyArgumentsResult.componentWillLeave = function componentWillLeave(arg0) {
      const items = [RN.timing(applyArgumentsResult.state.opacity, { toValue: 0, easing: timestampProducer.linear, duration: 100, useNativeDriver: true })];
      if (!applyArgumentsResult.props.useReducedMotion) {
        const obj4 = { toValue: 0, easing: timestampProducer.in(timestampProducer.ease), duration: 100, useNativeDriver: true };
        items.push(RN.timing(applyArgumentsResult.state.scale, obj4));
      }
      RN.parallel(items).start(arg0);
      const obj2 = { toValue: 0, easing: timestampProducer.linear, duration: 100, useNativeDriver: true };
      const parallelResult = RN.parallel(items);
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
  const obj = { onClose: actions_AlertActionCreatorsDefault.close };
  ({ opacity, scale } = self.state);
  const obj2 = { dialogKey: str, onDismiss: self.handleRequestClose, children: null };
  const obj3 = { style: null, children: null };
  const items = [StyleSheet.absoluteFill, tmp.alertContentWrapper];
  obj3.style = items;
  const obj4 = { accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", accessibilityRole: "none", accessible: false, onPress: self.handleRequestClose, children: null };
  const obj5 = { style: null };
  const items1 = [tmp.alertWrapper, self.props.style, { opacity }];
  obj5.style = items1;
  const renderAlertResult = props.renderAlert({ onClose: actions_AlertActionCreatorsDefault.close });
  obj4.children = map1(RN.View, obj5);
  const items2 = [map1(React5, obj4), ];
  const obj6 = { style: null, children: renderAlertResult };
  const obj7 = { transform: null };
  const items3 = [{ scale }];
  obj7.transform = items3;
  obj6.style = obj7;
  items2[1] = map1(RN.View, obj6);
  obj3.children = items2;
  obj2.children = closure_1_14(KeyboardAwareViewDefault, obj3);
  return map1(Dialog.Dialog, obj2);
};
AlertWrapper.contextType = fn(4537).ThemeContext;
let closure_18 = Object.freeze({ renderAlert: "Array", renderKey: "channel", props: "unicodeVersion" });
const tmp7 = new ModalRegistryDefault(items1);
const size = fn(2);
const result = size.fileFinishedImporting("components_native/common/Alerts.tsx");

export default noop.memo(function Alerts() {
  _require = renderAlert.useRef(closure_18);
  const items = [AlertStore, ...closure_15.getStores()];
  const stateFromStoresObject = require("initialize").useStateFromStoresObject(items, () => {
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
          if (discord_common_shallowEqualDefault(props, ref.current.props)) {
            let fn = ref.current.renderAlert;
          }
          const obj3 = { renderAlert: fn, renderKey: combined, props: openModal.props };
          return obj3;
        }
        fn = (arg0) => {
          const merged = Object.assign(arg0);
          const merged1 = Object.assign(props);
          return <openModal.component />;
        };
      } else {
        return { renderAlert: "Array", renderKey: "channel", props: "unicodeVersion" };
      }
    }
  });
  const effect = renderAlert.useEffect(() => {
    closure_0.current = stateFromStoresObject;
  });
  let obj = require("initialize");
  const items1 = [AlertStore];
  stateFromStores = require("initialize").useStateFromStores(items1, () => alertDismissable.isAlertDismissable());
  let obj2 = require("initialize");
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
    const obj4 = { isDismissable: stateFromStores, renderAlert, renderKey, useReducedMotion: stateFromStores1 };
    tmp9 = closure_13(AlertWrapper, obj4, renderKey);
  }
  let obj3 = require("initialize");
  return closure_13(require("TransitionGroup").TransitionGroup, { component: require("native").TransitionGroupOverlayView, style: StyleSheet.absoluteFill, children: tmp9 });
});