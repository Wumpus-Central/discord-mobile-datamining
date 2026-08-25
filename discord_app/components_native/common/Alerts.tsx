// === Module 16261: StyleSheet ===

// Module 16261 (StyleSheet)
import ThemesDefault from "Themes" /* 712 */;
import _modDef4745 from "module_4745" /* 4745 */;
import Dialog from "Dialog" /* 4798 */;
import _modDef5930 from "module_5930" /* 5930 */;
import getStoresDefault from "getStores" /* 16262 */;
import importAllResult from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import closure_8 from "maybeApplyNoTextColorForLightCustomTheme" /* 4372 */;
import importDefaultResult from "initialize" /* 13219 */;
import importDefaultResult1 from "handleUpdateVADPermission" /* 13865 */;
import importDefaultResult2 from "fetchSurveyIfNeeded" /* 4599 */;
import closure_12 from "getAlert" /* 11105 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4380 */;

require = arg1;
let c3 = importAllResult;
const StyleSheet = get_ActivityIndicator.StyleSheet;
({ Animated: c5, Easing: closure_6, TouchableWithoutFeedback: error } = get_ActivityIndicator);
let c9 = importDefaultResult;
({ jsx: map1, jsxs: closure_14 } = jsxProd);
let obj = {
  stores: items,
  center: true,
  isOpen() {
    return importDefaultResult.shouldShowWarning();
  },
  getComponent() {
    return require(16263) /* render */.default;
  }
};
items = [importDefaultResult];
let items1 = [obj, , ];
obj = {
  stores: items2,
  center: true,
  isOpen() {
    return importDefaultResult1.shouldShowWarning();
  },
  getComponent() {
    return require(16267) /* render */.default;
  }
};
items2 = [importDefaultResult1];
items1[1] = obj;
let items3 = [importDefaultResult2];
items1[2] = {
  stores: items3,
  center: true,
  isOpen() {
    return null != importDefaultResult2.getCurrentSurvey();
  },
  getComponent() {
    return require(16268) /* MobileSurvey */.default;
  }
};
let closure_15 = new getStoresDefault(items1);
let obj2 = { alertWrapper: null, alertContentWrapper: null };
const obj3 = {};
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj3.backgroundColor = ThemesDefault.colors.BACKGROUND_SCRIM;
obj3.justifyContent = "center";
obj3.alignItems = "center";
obj2[0] = obj3;
obj2[1] = { display: "flex", alignItems: "center", justifyContent: "center", height: "100%" };
let closure_16 = createCacheKey.createLegacyClassComponentStyles(obj2);
const PureComponent = importAllResult.PureComponent;
class AlertWrapper extends PureComponent {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    obj = { opacity: null, scale: null };
    value = new Animated.Value(0);
    obj[0] = value;
    num = 0;
    if (applyArgumentsResult.props.useReducedMotion) {
      num = 1;
    }
    value1 = new Animated.Value(num);
    obj[1] = value1;
    applyArgumentsResult.state = obj;
    applyArgumentsResult.componentDidAppear = function componentDidAppear() {
      const opacity = applyArgumentsResult.state.opacity;
      opacity.setValue(1);
      const scale = applyArgumentsResult.state.scale;
      scale.setValue(1);
    };
    applyArgumentsResult.componentWillEnter = function componentWillEnter(arg0) {
      let obj = closure_1_5;
      obj = { toValue: 1, easing: closure_1_6.linear, duration: 250, useNativeDriver: true };
      const items = [closure_1_5.timing(applyArgumentsResult.state.opacity, obj)];
      if (!applyArgumentsResult.props.useReducedMotion) {
        items.push(obj.spring(applyArgumentsResult.state.scale, { toValue: 1, useNativeDriver: true }));
      }
      obj.parallel(items).start(arg0);
    };
    applyArgumentsResult.componentWillLeave = function componentWillLeave(arg0) {
      let obj = closure_1_5;
      obj = { toValue: 0, easing: closure_1_6.linear, duration: 100, useNativeDriver: true };
      const items = [closure_1_5.timing(applyArgumentsResult.state.opacity, obj)];
      if (!applyArgumentsResult.props.useReducedMotion) {
        obj = { toValue: 0, easing: null, duration: 100, useNativeDriver: true };
        obj[1] = obj3.in(obj3.ease);
        items.push(obj.timing(applyArgumentsResult.state.scale, obj));
      }
      obj.parallel(items).start(arg0);
    };
    applyArgumentsResult.handleRequestClose = function handleRequestClose() {
      if (applyArgumentsResult.props.isDismissable) {
        closure_1_1(closure_1_2[15]).close();
        const obj = closure_1_1(closure_1_2[15]);
      }
    };
    return applyArgumentsResult;
  }
}
AlertWrapper.prototype["render"] = function render() {
  const self = this;
  const tmp = callback3(this.context);
  let str = this.props.renderKey;
  if (str == null) {
    str = "alerts-component";
  }
  const props = self.props;
  let obj = { onClose: _modDef4745.close };
  ({ opacity, scale } = self.state);
  obj = { dialogKey: str, onDismiss: self.handleRequestClose, children: null };
  obj = { style: items, children: null };
  items = [StyleSheet.absoluteFill, tmp.alertContentWrapper];
  obj1 = { accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", accessibilityRole: "none", accessible: false, onPress: self.handleRequestClose, children: null };
  const items1 = [tmp.alertWrapper, self.props.style, { opacity }];
  const renderAlertResult = props.renderAlert(obj);
  obj1[5] = callback(RN.View, { style: items1 });
  const items2 = [callback(closure_7, obj1), ];
  const items3 = [{ scale }];
  items2[1] = callback(RN.View, { style: { transform: items3 }, children: renderAlertResult });
  obj[1] = items2;
  obj[2] = callback2(_modDef5930, obj);
  return callback(Dialog.Dialog, obj);
};
AlertWrapper.contextType = require("ManaContext").ThemeContext;
let closure_18 = Object.freeze({ renderAlert: "Array", renderKey: "call", props: "Path" });
let obj1 = {
  stores: items3,
  center: true,
  isOpen() {
    return null != importDefaultResult2.getCurrentSurvey();
  },
  getComponent() {
    return require(16268) /* MobileSurvey */.default;
  }
};
const tmp7 = new getStoresDefault(items1);
const memoResult = importAllResult.memo(function Alerts() {
  const _require = renderAlert.useRef(closure_18);
  let obj = _require(stateFromStores[18]);
  const items = [closure_12, ...closure_15.getStores()];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    let obj = closure_1_12;
    const _alert = closure_1_12.getAlert();
    if (null != _alert) {
      obj = { renderAlert: null, renderKey: null, props: null };
      obj[0] = _alert;
      obj[1] = obj.getAlertKey();
      return obj;
    } else {
      const openModal = closure_1_15.getOpenModal();
      if (null != openModal) {
        const props = openModal.props;
        const _HermesInternal = HermesInternal;
        const combined = "alert-registery-" + openModal.key;
        if (combined === openModal.current.renderKey) {
          if (stateFromStoresObject(stateFromStores[19])(props, tmp4.current.props)) {
            let fn = tmp4.current.renderAlert;
          }
          obj = { renderAlert: null, renderKey: null, props: null };
          obj[0] = fn;
          obj[1] = combined;
          obj[2] = openModal.props;
          return obj;
        }
        fn = (arg0) => {
          const merged = Object.assign(arg0);
          const merged1 = Object.assign(props);
          return <openModal.component />;
        };
      } else {
        return { renderAlert: "Array", renderKey: "call", props: "Path" };
      }
    }
  });
  const effect = renderAlert.useEffect(() => {
    closure_0.current = stateFromStoresObject;
  });
  const items1 = [closure_12];
  stateFromStores = _require(stateFromStores[18]).useStateFromStores(items1, () => alertDismissable.isAlertDismissable());
  const obj2 = _require(stateFromStores[18]);
  const items2 = [closure_8];
  renderAlert = stateFromStoresObject.renderAlert;
  const renderKey = stateFromStoresObject.renderKey;
  const items3 = [renderAlert, stateFromStores];
  const stateFromStores1 = _require(stateFromStores[18]).useStateFromStores(items2, () => useReducedMotion.useReducedMotion);
  const callback = renderAlert.useCallback(() => {
    let tmp2 = tmp;
    if (null != renderAlert) {
      tmp2 = stateFromStores;
    }
    if (tmp2) {
      stateFromStoresObject(stateFromStores[15]).close();
      const obj = stateFromStoresObject(stateFromStores[15]);
    }
    return null != renderAlert;
  }, items3);
  stateFromStoresObject(stateFromStores[20])(callback);
  let tmp9;
  if (null != renderAlert) {
    obj = { isDismissable: null, renderAlert: null, renderKey: null, useReducedMotion: null };
    obj[0] = stateFromStores;
    obj[1] = renderAlert;
    obj[2] = renderKey;
    obj[3] = stateFromStores1;
    tmp9 = callback(AlertWrapper, obj, renderKey);
  }
  obj = { component: tmp(tmp2[22]).TransitionGroupOverlayView, style: StyleSheet.absoluteFill, children: tmp9 };
  return callback(_require(stateFromStores[21]).TransitionGroup, obj);
});
const result = require("set").fileFinishedImporting("components_native/common/Alerts.tsx");

export default memoResult;