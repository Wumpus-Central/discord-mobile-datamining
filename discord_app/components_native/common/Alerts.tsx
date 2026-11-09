// === Module 19380: Alerts ===

// Module 19380 (Alerts)
import discord_common_shallowEqualDefault from "discord_common/shallowEqual" /* 558 */;
import nativeDefault from "native" /* 575 */;
import _modDef1652 from "module_1652" /* 1652 */;
import native from "native" /* 5199 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 6091 */;
import OverlayViewDefault from "OverlayView" /* 6097 */;
import useBackPressHandlerDefault from "useBackPressHandler" /* 6154 */;
import KeyboardAwareViewDefault from "KeyboardAwareView" /* 7016 */;
import ModalRegistryDefault from "ModalRegistry" /* 19381 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5141 */;
import PermissionSpeakStore from "PermissionSpeakStore" /* 15952 */;
import PermissionVADStore from "PermissionVADStore" /* 16541 */;
import SurveyStore from "SurveyStore" /* 7560 */;
import AlertStore from "AlertStore" /* 10256 */;

const require = globalThis.__r;

require = fn;
function AlertWrapper(item) {
  item = item.item;
  const isDismissable = item.isDismissable;
  _require = isDismissable;
  const transitionState = item.transitionState;
  importDefault = transitionState;
  dependencyMap = undefined;
  ({ renderAlert, renderKey } = item);
  let tmp = closure_15();
  items = [c7];
  const stateFromStores = require("initialize").useStateFromStores(items, () => _undefined7.useReducedMotion);
  let obj = require("initialize");
  let num = 0;
  if (transitionState === require("native").TransitionStates.MOUNTED) {
    num = 1;
  }
  const sharedValue = require("module_1652").useSharedValue(num);
  let items1 = [transitionState, sharedValue];
  const effect = noop.useEffect(() => {
    let num = 1;
    if (c1 === native.TransitionStates.YEETED) {
      num = 0;
    }
    const result = _undefined3.set(num);
  }, items1);
  let obj2 = require("module_1652");
  let obj3 = noop;
  const items2 = [closure_17, sharedValue, require("timing/timing").withTiming, require("module_1652").Easing, closure_16, transitionState, require("native").TransitionStates, require("module_1705").scheduleOnRN, item.cleanUp];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  noop = undefined;
  StyleSheet = undefined;
  c5 = undefined;
  c6 = undefined;
  c7 = undefined;
  [tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15] = items2;
  class AlertsTsx2 {
    constructor() {
      tmp = closure_0;
      value = closure_0.get();
      tmp3 = closure_1;
      value1 = closure_0.get();
      num = 100;
      if (1 === value) {
        num = 250;
      }
      obj = { duration: num, easing: closure_2.linear };
      items = [, , , , , ];
      items[0] = closure_3;
      items[1] = tmp;
      items[2] = closure_4;
      items[3] = closure_5;
      items[4] = closure_6;
      items[5] = closure_7;
      closure_0 = undefined;
      closure_1 = undefined;
      closure_2 = undefined;
      closure_3 = undefined;
      closure_4 = undefined;
      [tmp5, tmp6, tmp7, tmp8, tmp9, tmp10] = items;
      obj1 = { opacity: null };
      class AlertsTsx1 {
        constructor(arg0) {
          tmp = item;
          if (item) {
            tmp2 = closure_0;
            num = 0;
            tmp = 0 === closure_0.get();
          }
          if (tmp) {
            tmp3 = closure_1;
            tmp4 = closure_2;
            tmp = closure_1 === closure_2.YEETED;
          }
          if (tmp) {
            tmp5 = closure_3;
            tmp6 = closure_4;
            tmp7 = closure_3(closure_4);
          }
          return;
        }
      }
      items1 = [, , , , ];
      items1[0] = tmp6;
      items1[1] = tmp7;
      items1[2] = tmp8;
      items1[3] = tmp9;
      items1[4] = tmp10;
      AlertsTsx1.__closure = items1;
      AlertsTsx1.__workletHash = 9983200573389;
      AlertsTsx1.__initData = tmp5;
      obj1.opacity = tmp3(value1, obj, "animate-always", AlertsTsx1);
      return obj1;
    }
  }
  const items3 = [tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15];
  AlertsTsx2.__closure = items3;
  AlertsTsx2.__workletHash = 13015713816035;
  AlertsTsx2.__initData = tmp7;
  const animatedStyle = require("module_1652").useAnimatedStyle(AlertsTsx2);
  const tmp2Result = require("module_1652");
  const items4 = [closure_18, stateFromStores, sharedValue, require("spring/spring").withSpring, require("springPresets").SUBTLE_SPRING, require("timing/timing").withTiming, require("module_1652").Easing];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  noop = undefined;
  StyleSheet = undefined;
  c5 = undefined;
  [tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23] = items4;
  class AlertsTsx3 {
    constructor() {
      obj = { transform: null };
      if (closure_0) {
        items = [];
        items[0] = { scale: 1 };
        obj.transform = items;
        tmp7 = obj;
      } else {
        tmp = closure_1;
        num = 1;
        if (1 === closure_1.get()) {
          tmp5 = closure_2;
          tmp6 = closure_3;
          tmp4 = closure_2(1, closure_3);
        } else {
          tmp2 = closure_4;
          obj1 = { duration: 100, easing: null };
          tmp3 = closure_5;
          obj1.easing = closure_5.in(closure_5.ease);
          num2 = 0;
          tmp4 = closure_4(0, obj1);
        }
        obj4 = { scale: null };
        obj4.scale = tmp4;
        items1 = [];
        items1[0] = obj4;
        obj.transform = items1;
        tmp7 = obj;
      }
      return tmp7;
    }
  }
  const items5 = [tmp18, tmp19, tmp20, tmp21, tmp22, tmp23];
  AlertsTsx3.__closure = items5;
  AlertsTsx3.__workletHash = 14456934053891;
  AlertsTsx3.__initData = tmp17;
  const items6 = [isDismissable];
  const animatedStyle1 = require("module_1652").useAnimatedStyle(AlertsTsx3);
  const callback = obj3.useCallback(() => {
    if (c0) {
      actions_AlertActionCreatorsDefault.close();
    }
    return true;
  }, items6);
  useBackPressHandlerDefault(callback);
  const tmp2Result2 = require("module_1652");
  const obj4 = { onClose: actions_AlertActionCreatorsDefault.close };
  const obj5 = { dialogKey: renderKey, onDismiss: callback, children: null };
  const obj6 = { style: null, children: null };
  const items7 = [StyleSheet.absoluteFill, tmp.alertContentWrapper];
  obj6.style = items7;
  const obj7 = { accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", accessibilityRole: "none", accessible: false, onPress: callback, children: null };
  const renderAlertResult = renderAlert({ onClose: actions_AlertActionCreatorsDefault.close });
  const obj8 = { style: null };
  const items8 = [tmp.alertWrapper, animatedStyle];
  obj8.style = items8;
  obj7.children = closure_12(_modDef1652.View, obj8);
  const items9 = [closure_12(c5, obj7), closure_12(_modDef1652.View, { style: animatedStyle1, children: renderAlertResult })];
  obj6.children = items9;
  obj5.children = closure_13(KeyboardAwareViewDefault, obj6);
  return closure_12(require("Dialog").Dialog, obj5);
}
function getAlertItemKey(renderKey) {
  return renderKey.renderKey;
}
function wrapAlerts(children) {
  const obj = { style: StyleSheet.absoluteFill, children: application_id(timestampProducer, { style: StyleSheet.absoluteFill, children }) };
  return application_id(OverlayViewDefault, obj);
}
get_ActivityIndicator = fn(17);
let StyleSheet = get_ActivityIndicator.StyleSheet;
({ TouchableWithoutFeedback: hasOwnProperty, View: closure_6 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
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
const createStyles = fn(5140);
let obj4 = { alertWrapper: null, alertContentWrapper: null };
let obj6 = {};
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj6.backgroundColor = nativeDefault.colors.BACKGROUND_SCRIM;
obj6.justifyContent = "center";
obj6.alignItems = "center";
obj4.alertWrapper = obj6;
obj4.alertContentWrapper = { display: "flex", alignItems: "center", justifyContent: "center", height: "100%" };
let closure_15 = createStyles.createStyles(obj4);
let closure_16 = { code: "(function AlertsTsx1(finished){let[visible,transitionState,TransitionStates,scheduleOnRN,cleanUp]=this.__closure;if(finished&&visible.get()===0&&transitionState===TransitionStates.YEETED){scheduleOnRN(cleanUp);}})" };
let closure_17 = { code: "(function AlertsTsx2(){let[visible,withTiming,Easing,_worklet_9983200573389_init_data,transitionState,TransitionStates,scheduleOnRN,cleanUp]=this.__closure;const isVisible=visible.get()===1;return{opacity:withTiming(visible.get(),{duration:isVisible?250:100,easing:Easing.linear},'animate-always',function AlertsTsx1Factory([_worklet_9983200573389_init_data,visible,transitionState,TransitionStates,scheduleOnRN,cleanUp]){const AlertsTsx1=function(finished){if(finished&&visible.get()===0&&transitionState===TransitionStates.YEETED){scheduleOnRN(cleanUp);}};AlertsTsx1.__closure=[visible,transitionState,TransitionStates,scheduleOnRN,cleanUp];AlertsTsx1.__workletHash=9983200573389;AlertsTsx1.__initData=_worklet_9983200573389_init_data;return AlertsTsx1;}([_worklet_9983200573389_init_data,visible,transitionState,TransitionStates,scheduleOnRN,cleanUp]))};})" };
let closure_18 = { code: "(function AlertsTsx3(){let[useReducedMotion,visible,withSpring,SUBTLE_SPRING,withTiming,Easing]=this.__closure;if(useReducedMotion){return{transform:[{scale:1}]};}return{transform:[{scale:visible.get()===1?withSpring(1,SUBTLE_SPRING):withTiming(0,{duration:100,easing:Easing.in(Easing.ease)})}]};})" };
function renderAlertItem(arg0, item, transitionState, cleanUp) {
  return application_id(AlertWrapper, { item, transitionState, cleanUp }, arg0);
}
let closure_23 = Object.freeze({ renderAlert: "Array", renderKey: "channel", props: "find" });
let tmp7 = new ModalRegistryDefault(items1);
const size = fn(2);
let result = size.fileFinishedImporting("components_native/common/Alerts.tsx");

export default noop.memo(function Alerts() {
  _require = renderAlert.useRef(closure_23);
  items = [AlertStore, ...closure_14.getStores()];
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
        return { renderAlert: "Array", renderKey: "channel", props: "find" };
      }
    }
  });
  const effect = renderAlert.useEffect(() => {
    closure_0.current = stateFromStoresObject;
  });
  let obj = require("initialize");
  let items1 = [AlertStore];
  stateFromStores = require("initialize").useStateFromStores(items1, () => alertDismissable.isAlertDismissable());
  renderAlert = stateFromStoresObject.renderAlert;
  const renderKey = stateFromStoresObject.renderKey;
  const items2 = [renderAlert, renderKey, stateFromStores];
  const memo = renderAlert.useMemo(() => {
    if (null != renderAlert) {
      const obj = { renderAlert: tmp, renderKey, isDismissable: stateFromStores };
      items = [obj];
      let items1 = items;
    } else {
      items1 = [];
    }
    return items1;
  }, items2);
  return closure_12(require("native").TransitionGroup, { items: memo, renderItem: renderAlertItem, getItemKey: getAlertItemKey, wrapChildren: wrapAlerts });
});