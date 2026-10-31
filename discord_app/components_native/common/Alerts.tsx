// === Module 19003: Alerts ===

// Module 19003 (Alerts)
import discord_common_shallowEqualDefault from "discord_common/shallowEqual" /* 558 */;
import nativeDefault from "native" /* 575 */;
import native from "native" /* 5080 */;
import ReanimatedRexport from "ReanimatedRexport" /* 5095 */;
import timing from "timing" /* 5254 */;
import spring from "spring" /* 5637 */;
import springPresets from "springPresets" /* 5638 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5959 */;
import OverlayViewDefault from "OverlayView" /* 5965 */;
import ModalRegistryDefault from "ModalRegistry" /* 19004 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5015 */;
import PermissionSpeakStore from "PermissionSpeakStore" /* 15638 */;
import PermissionVADStore from "PermissionVADStore" /* 16224 */;
import SurveyStore from "SurveyStore" /* 7929 */;
import AlertStore from "AlertStore" /* 10135 */;

const require = globalThis.__r;

require = fn;
function AlertWrapper(item) {
  item = item.item;
  const isDismissable = item.isDismissable;
  const transitionState = item.transitionState;
  const cleanUp = item.cleanUp;
  let sharedValue;
  ({ renderAlert, renderKey } = item);
  let tmp = closure_15();
  let items = [AccessibilityStore];
  const stateFromStores = isDismissable(cleanUp[14]).useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  let obj = isDismissable(cleanUp[14]);
  let num = 0;
  if (transitionState === isDismissable(cleanUp[16]).TransitionStates.MOUNTED) {
    num = 1;
  }
  sharedValue = isDismissable(cleanUp[15]).useSharedValue(num);
  let items1 = [transitionState, sharedValue];
  const effect = stateFromStores.useEffect(() => {
    let num = 1;
    if (transitionState === native.TransitionStates.YEETED) {
      num = 0;
    }
    const result = sharedValue.set(num);
  }, items1);
  let obj2 = isDismissable(cleanUp[15]);
  class A {
    constructor() {
      tmp = closure_4;
      tmp3 = closure_0;
      tmp4 = closure_2;
      value = closure_4.get();
      obj = closure_0(closure_2[17]);
      value1 = closure_4.get();
      num = 100;
      if (1 === value) {
        num = 250;
      }
      obj1 = { opacity: null };
      obj5 = { duration: num, easing: tmp3(tmp4[15]).Easing.linear };
      fn = function t(arg0) {
        let tmp = arg0;
        if (arg0) {
          tmp = 0 === sharedValue.get();
        }
        if (tmp) {
          tmp = transitionState === isDismissable(cleanUp[16]).TransitionStates.YEETED;
        }
        if (tmp) {
          isDismissable(cleanUp[15]).runOnJS(closure_1_2)();
          const obj = isDismissable(cleanUp[15]);
        }
      };
      obj6 = { visible: tmp, transitionState, TransitionStates: tmp3(tmp4[16]).TransitionStates, runOnJS: tmp3(tmp4[15]).runOnJS, cleanUp };
      fn.__closure = obj6;
      fn.__workletHash = 9063471386550;
      fn.__initData = closure_17;
      obj1.opacity = obj.withTiming(value1, obj5, "animate-always", fn);
      return obj1;
    }
  }
  const tmp2Result = isDismissable(cleanUp[15]);
  A.__closure = { visible: sharedValue, withTiming: isDismissable(cleanUp[17]).withTiming, Easing: isDismissable(cleanUp[15]).Easing, transitionState, TransitionStates: isDismissable(cleanUp[16]).TransitionStates, runOnJS: isDismissable(cleanUp[15]).runOnJS, cleanUp };
  A.__workletHash = 7547148666034;
  A.__initData = __initData;
  const animatedStyle = tmp2Result.useAnimatedStyle(A);
  let obj3 = { visible: sharedValue, withTiming: isDismissable(cleanUp[17]).withTiming, Easing: isDismissable(cleanUp[15]).Easing, transitionState, TransitionStates: isDismissable(cleanUp[16]).TransitionStates, runOnJS: isDismissable(cleanUp[15]).runOnJS, cleanUp };
  class O {
    constructor() {
      obj = { transform: null };
      if (closure_3) {
        items = [];
        items[0] = { scale: 1 };
        obj.transform = items;
        tmp13 = obj;
      } else {
        tmp = closure_4;
        num = 1;
        if (1 === closure_4.get()) {
          tmp9 = closure_0;
          tmp10 = closure_2;
          obj4 = closure_0(closure_2[18]);
          tmp11 = closure_0;
          tmp12 = closure_2;
          withSpringResult = obj4.withSpring(1, closure_0(closure_2[19]).SUBTLE_SPRING);
        } else {
          tmp2 = closure_0;
          tmp3 = closure_2;
          obj2 = closure_0(closure_2[17]);
          obj1 = { duration: 100, easing: null };
          tmp4 = closure_0;
          tmp5 = closure_2;
          Easing = closure_0(closure_2[15]).Easing;
          tmp6 = closure_0;
          tmp7 = closure_2;
          obj1.easing = Easing.in(closure_0(closure_2[15]).Easing.ease);
          num2 = 0;
          withSpringResult = obj2.withTiming(0, obj1);
        }
        obj6 = { scale: null };
        obj6.scale = withSpringResult;
        items1 = [];
        items1[0] = obj6;
        obj.transform = items1;
        tmp13 = obj;
      }
      return tmp13;
    }
  }
  const tmp2Result2 = isDismissable(cleanUp[15]);
  O.__closure = { useReducedMotion: stateFromStores, visible: sharedValue, withSpring: isDismissable(cleanUp[18]).withSpring, SUBTLE_SPRING: isDismissable(cleanUp[19]).SUBTLE_SPRING, withTiming: isDismissable(cleanUp[17]).withTiming, Easing: isDismissable(cleanUp[15]).Easing };
  O.__workletHash = 7591026156474;
  O.__initData = __initData3;
  const items2 = [isDismissable];
  const animatedStyle1 = tmp2Result2.useAnimatedStyle(O);
  const callback = stateFromStores.useCallback(() => {
    if (isDismissable) {
      actions_AlertActionCreatorsDefault.close();
    }
    return true;
  }, items2);
  transitionState(cleanUp[21])(callback);
  let obj4 = { useReducedMotion: stateFromStores, visible: sharedValue, withSpring: isDismissable(cleanUp[18]).withSpring, SUBTLE_SPRING: isDismissable(cleanUp[19]).SUBTLE_SPRING, withTiming: isDismissable(cleanUp[17]).withTiming, Easing: isDismissable(cleanUp[15]).Easing };
  let obj5 = { onClose: transitionState(cleanUp[20]).close };
  const obj6 = { dialogKey: renderKey, onDismiss: callback, children: null };
  const obj7 = { style: null, children: null };
  const items3 = [sharedValue.absoluteFill, tmp.alertContentWrapper];
  obj7.style = items3;
  const obj8 = { accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", accessibilityRole: "none", accessible: false, onPress: callback, children: null };
  const renderAlertResult = renderAlert({ onClose: transitionState(cleanUp[20]).close });
  const obj9 = { style: null };
  const items4 = [tmp.alertWrapper, animatedStyle];
  obj9.style = items4;
  obj8.children = closure_12(transitionState(cleanUp[15]).View, obj9);
  const items5 = [closure_12(closure_5, obj8), closure_12(transitionState(cleanUp[15]).View, { style: animatedStyle1, children: renderAlertResult })];
  obj7.children = items5;
  obj6.children = closure_13(transitionState(cleanUp[23]), obj7);
  return closure_12(isDismissable(cleanUp[22]).Dialog, obj6);
}
function getAlertItemKey(renderKey) {
  return renderKey.renderKey;
}
function wrapAlerts(children) {
  const obj = { style: StyleSheet.absoluteFill, children: closure_1_12(timestampProducer, { style: StyleSheet.absoluteFill, children }) };
  return closure_1_12(OverlayViewDefault, obj);
}
get_ActivityIndicator = fn(17);
const StyleSheet = get_ActivityIndicator.StyleSheet;
({ TouchableWithoutFeedback: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
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
const createStyles = fn(5014);
let obj4 = { alertWrapper: null, alertContentWrapper: null };
let obj6 = {};
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj6.backgroundColor = nativeDefault.colors.BACKGROUND_SCRIM;
obj6.justifyContent = "center";
obj6.alignItems = "center";
obj4.alertWrapper = obj6;
obj4.alertContentWrapper = { display: "flex", alignItems: "center", justifyContent: "center", height: "100%" };
let closure_15 = createStyles.createStyles(obj4);
const __initData = { code: "function AlertsTsx1(){const{visible,withTiming,Easing,transitionState,TransitionStates,runOnJS,cleanUp}=this.__closure;const isVisible=visible.get()===1;return{opacity:withTiming(visible.get(),{duration:isVisible?250:100,easing:Easing.linear},'animate-always',function(finished){if(finished&&visible.get()===0&&transitionState===TransitionStates.YEETED){runOnJS(cleanUp)();}})};}" };
const __initData2 = { code: "function AlertsTsx2(finished){const{visible,transitionState,TransitionStates,runOnJS,cleanUp}=this.__closure;if(finished&&visible.get()===0&&transitionState===TransitionStates.YEETED){runOnJS(cleanUp)();}}" };
const __initData3 = { code: "function AlertsTsx3(){const{useReducedMotion,visible,withSpring,SUBTLE_SPRING,withTiming,Easing}=this.__closure;if(useReducedMotion){return{transform:[{scale:1}]};}return{transform:[{scale:visible.get()===1?withSpring(1,SUBTLE_SPRING):withTiming(0,{duration:100,easing:Easing.in(Easing.ease)})}]};}" };
function renderAlertItem(arg0, item, transitionState, cleanUp) {
  return closure_1_12(AlertWrapper, { item, transitionState, cleanUp }, arg0);
}
let closure_23 = Object.freeze({ renderAlert: "dispatch", renderKey: "isArray", props: "isArray" });
const tmp7 = new ModalRegistryDefault(items1);
const size = fn(2);
let result = size.fileFinishedImporting("components_native/common/Alerts.tsx");

export default noop.memo(function Alerts() {
  _require = renderAlert.useRef(closure_23);
  let items = [AlertStore, ...closure_14.getStores()];
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
        return { renderAlert: "dispatch", renderKey: "isArray", props: "isArray" };
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
      const items = [obj];
      let items1 = items;
    } else {
      items1 = [];
    }
    return items1;
  }, items2);
  return closure_12(require("native").TransitionGroup, { items: memo, renderItem: renderAlertItem, getItemKey: getAlertItemKey, wrapChildren: wrapAlerts });
});