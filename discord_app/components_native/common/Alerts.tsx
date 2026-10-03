// === Module 17072: Alerts ===

// Module 17072 (Alerts)
import discord_common_shallowEqualDefault from "discord_common/shallowEqual" /* 568 */;
import nativeDefault from "native" /* 587 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5708 */;
import Dialog from "Dialog" /* 5766 */;
import KeyboardAwareViewDefault from "KeyboardAwareView" /* 6537 */;
import ModalRegistryDefault from "ModalRegistry" /* 17073 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4879 */;
import PermissionSpeakStore from "PermissionSpeakStore" /* 13560 */;
import PermissionVADStore from "PermissionVADStore" /* 14159 */;
import SurveyStore from "SurveyStore" /* 5081 */;
import AlertStore from "AlertStore" /* 11162 */;

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
const createStyles = fn(4890);
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
  obj4.children = __initData2(RN.View, obj5);
  const items2 = [__initData2(React5, obj4), ];
  const obj6 = { style: null, children: renderAlertResult };
  const obj7 = { transform: null };
  const items3 = [{ scale }];
  obj7.transform = items3;
  obj6.style = obj7;
  items2[1] = __initData2(RN.View, obj6);
  obj3.children = items2;
  obj2.children = state(KeyboardAwareViewDefault, obj3);
  return __initData2(Dialog.Dialog, obj2);
};
AlertWrapper.contextType = fn(4589).ThemeContext;
let closure_18 = Object.freeze({ renderAlert: "done", renderKey: "toCharArray$esjava$1", props: "toCharArray$esjava$1" });
const ReactCompilerGating = fn(558);
const tmp7 = new ModalRegistryDefault(items1);
const size = fn(2);
const result = size.fileFinishedImporting("components_native/common/Alerts.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = require("c").c(18);
  _require = renderAlert.useRef(closure_18);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AlertStore];
    HermesBuiltin.arraySpread(openModal.getStores(), 1);
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
          return { renderAlert: "done", renderKey: "toCharArray$esjava$1", props: "toCharArray$esjava$1" };
        }
      }
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  let obj = require("c");
  let obj2 = renderAlert;
  const stateFromStoresObject = require("initialize").useStateFromStoresObject(tmp4, tmp5);
  if (cResult[2] !== stateFromStoresObject) {
    const fn2 = function p() {
      closure_0.current = stateFromStoresObject;
    };
    cResult[2] = stateFromStoresObject;
    cResult[3] = fn2;
    let tmp11 = fn2;
  } else {
    tmp11 = cResult[3];
  }
  const effect = obj2.useEffect(tmp11);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [AlertStore];
    const fn3 = function h() {
      return alertDismissable.isAlertDismissable();
    };
    cResult[4] = items1;
    cResult[5] = fn3;
    let tmp14 = fn3;
    let tmp13 = items1;
  } else {
    tmp13 = cResult[4];
    tmp14 = cResult[5];
  }
  const tmpResult = require("initialize");
  stateFromStores = require("initialize").useStateFromStores(tmp13, tmp14);
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [AccessibilityStore];
    class C {
      constructor() {
        return closure_1_8.useReducedMotion;
      }
    }
    cResult[6] = items2;
    cResult[7] = C;
    let tmp18 = C;
    let tmp17 = items2;
  } else {
    tmp17 = cResult[6];
    tmp18 = cResult[7];
  }
  const tmpResult3 = require("initialize");
  const stateFromStores1 = require("initialize").useStateFromStores(tmp17, tmp18);
  renderAlert = stateFromStoresObject.renderAlert;
  const renderKey = stateFromStoresObject.renderKey;
  if (cResult[8] === stateFromStores) {
    if (cResult[9] === renderAlert) {
      let tmp21 = cResult[10];
    }
    stateFromStoresObject(tmp2[22])(tmp21);
    class C {
      constructor() {
        return closure_1_8.useReducedMotion;
      }
    }
    if (null == renderAlert) {
      if (cResult[16] !== undefined) {
        let obj3 = { component: null, style: null, children: null };
        class C {
          constructor() {
            return closure_1_8.useReducedMotion;
          }
        }
        obj3.style = StyleSheet.absoluteFill;
        obj3.children = undefined;
        const tmp33 = closure_13(tmp(tmp2[23]).TransitionGroup, obj3);
        cResult[16] = undefined;
        cResult[17] = tmp33;
        let tmp30 = tmp33;
      } else {
        tmp30 = cResult[17];
      }
      return tmp30;
    } else {
      if (cResult[11] === stateFromStores) {
        if (cResult[12] === renderAlert) {
          if (cResult[13] === renderKey) {
          }
        }
      }
      class C {
        constructor() {
          return closure_1_8.useReducedMotion;
        }
      }
      tmp27[0] = stateFromStores;
      tmp27[1] = renderAlert;
      tmp27[2] = renderKey;
      tmp27[3] = stateFromStores1;
      const tmp28 = closure_13(AlertWrapper, tmp27, renderKey);
      cResult[11] = stateFromStores;
      cResult[12] = renderAlert;
      cResult[13] = renderKey;
      cResult[14] = stateFromStores1;
      cResult[15] = tmp28;
    }
  }
  class F {
    constructor() {
      tmp = null != renderAlert;
      tmp2 = tmp;
      if (tmp) {
        tmp2 = closure_2;
      }
      if (tmp2) {
        tmp3 = closure_1;
        tmp4 = closure_2;
        obj = closure_1(closure_2[15]);
        closeResult = obj.close();
      }
      return tmp;
    }
  }
  cResult[8] = stateFromStores;
  cResult[9] = renderAlert;
  cResult[10] = F;
  tmp21 = F;
  const tmpResult4 = require("initialize");
}) : (() => {
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
        return { renderAlert: "done", renderKey: "toCharArray$esjava$1", props: "toCharArray$esjava$1" };
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
  stateFromStoresObject(stateFromStores[22])(callback);
  let tmp9;
  if (null != renderAlert) {
    const obj4 = { isDismissable: stateFromStores, renderAlert, renderKey, useReducedMotion: stateFromStores1 };
    tmp9 = closure_13(AlertWrapper, obj4, renderKey);
  }
  let obj3 = require("initialize");
  return closure_13(require("TransitionGroup").TransitionGroup, { component: require("native").TransitionGroupOverlayView, style: StyleSheet.absoluteFill, children: tmp9 });
}));