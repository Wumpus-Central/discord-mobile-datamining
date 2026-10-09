// discord_app/modules/reactions/native/BurstReactionToggle.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import timing from "../../../design/animation/reanimated/timing/timing.tsx";
import spring from "../../../design/animation/reanimated/spring/spring.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../a11y/AccessibilityStore.tsx";

const require = globalThis.__r;

require = fn;
const Pressable = fn(17).Pressable;
const ContentDismissActionType = fn(2061).ContentDismissActionType;
const jsx = fn(21).jsx;
let obj = { duration: 100, easing: null };
const Easing = fn(4811).Easing;
obj.easing = Easing.out(fn(4811).Easing.quad);
let closure_9 = { stiffness: 750, mass: 2.5, damping: 70 };
const __initData = {
  code: 'function BurstReactionToggleTsx1(){const{reducedMotion,targetBackgroundColor,backgroundColor,rotation}=this.__closure;const _backgroundColor=reducedMotion?targetBackgroundColor:backgroundColor.get();const _rotation=reducedMotion?0:rotation.get();return{backgroundColor:_backgroundColor,transform:[{rotate:_rotation+"deg"}]};}',
};
const __initData2 = {
  code: 'function BurstReactionToggleTsx2(){const{reducedMotion,targetBackgroundColor,backgroundColor,rotation}=this.__closure;const _backgroundColor=reducedMotion?targetBackgroundColor:backgroundColor.get();const _rotation=reducedMotion?0:rotation.get();return{backgroundColor:_backgroundColor,transform:[{rotate:_rotation+"deg"}]};}',
};
let ReactCompilerGating = fn(558);
let closure_12 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useBurstToggleStyles(arg0) {
      const cResult = stateFromStores(num3[7]).c(10);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let items = [AccessibilityStore];
        const fn = function c() {
          return useReducedMotion.useReducedMotion;
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp4 = items;
        tmp5 = fn;
      } else {
        [tmp4, tmp5] = cResult;
      }
      obj = stateFromStores(num3[7]);
      stateFromStores = stateFromStores(num3[8]).useStateFromStores(tmp4, tmp5);
      const tmpResult = stateFromStores(num3[8]);
      const colors = str(tmp2[10]).colors;
      str = stateFromStores(num3[9]).useToken(arg0 ? colors.BACKGROUND_BRAND : colors.INPUT_BACKGROUND_DEFAULT);
      if (str == null) {
        str = "";
      }
      num3 = 0;
      if (arg0) {
        num3 = 360;
      }
      const tmpResult5 = stateFromStores(num3[9]);
      const sharedValue = stateFromStores(num3[5]).useSharedValue(str);
      const tmpResult6 = stateFromStores(num3[5]);
      const sharedValue1 = stateFromStores(num3[5]).useSharedValue(num3);
      const tmpResult7 = stateFromStores(num3[5]);
      class T {
        constructor() {
          tmp = closure_0;
          if (closure_0) {
            value = c1;
          } else {
            tmp2 = closure_3;
            value = closure_3.get();
          }
          obj = { backgroundColor: value, transform: null };
          num = 0;
          if (!tmp) {
            tmp4 = closure_4;
            num = closure_4.get();
          }
          obj1 = { rotate: "" + num + "deg" };
          items = [];
          items[0] = obj1;
          obj.transform = items;
          return obj;
        }
      }
      T.__closure = {
        reducedMotion: stateFromStores,
        targetBackgroundColor: str,
        backgroundColor: sharedValue,
        rotation: sharedValue1,
      };
      T.__workletHash = 1525758595013;
      T.__initData = __initData;
      const animatedStyle = stateFromStores(num3[5]).useAnimatedStyle(T);
      if (cResult[2] === sharedValue) {
        if (cResult[3] === sharedValue1) {
          if (cResult[4] === str) {
            if (cResult[5] === num3) {
              let tmp11 = cResult[6];
              let tmp12 = cResult[7];
            }
            const effect = sharedValue.useEffect(tmp11, tmp12);
            if (cResult[8] !== animatedStyle) {
              const obj2 = { containerStyle: animatedStyle };
              cResult[8] = animatedStyle;
              cResult[9] = obj2;
              let tmp15 = obj2;
            } else {
              tmp15 = cResult[9];
            }
            return tmp15;
          }
        }
      }
      const fn2 = function f() {
        obj = timing;
        const result = sharedValue.set(obj.withTiming(str, obj));
        const result1 = sharedValue1.set(spring.withSpring(num3, closure_9));
      };
      const items1 = [sharedValue, str, sharedValue1, num3];
      cResult[2] = sharedValue;
      cResult[3] = sharedValue1;
      cResult[4] = str;
      cResult[5] = num3;
      cResult[6] = fn2;
      cResult[7] = items1;
      tmp12 = items1;
      tmp11 = fn2;
      const tmpResult8 = stateFromStores(num3[5]);
    }
  : function useBurstToggleStyles(arg0) {
      let items = [AccessibilityStore];
      stateFromStores = stateFromStores(num[8]).useStateFromStores(items, () => useReducedMotion.useReducedMotion);
      obj = stateFromStores(num[8]);
      const colors = str(num[10]).colors;
      str = stateFromStores(num[9]).useToken(arg0 ? colors.BACKGROUND_BRAND : colors.INPUT_BACKGROUND_DEFAULT);
      if (str == null) {
        str = "";
      }
      num = 0;
      if (arg0) {
        num = 360;
      }
      const obj2 = stateFromStores(num[9]);
      const sharedValue = stateFromStores(num[5]).useSharedValue(str);
      const tmpResult = stateFromStores(num[5]);
      const sharedValue1 = stateFromStores(num[5]).useSharedValue(num);
      const tmpResult3 = stateFromStores(num[5]);
      const fn = function s() {
        if (stateFromStores) {
          value = str;
        } else {
          value = sharedValue.get();
        }
        obj = { backgroundColor: value, transform: null };
        num = 0;
        if (!stateFromStores) {
          num = sharedValue1.get();
        }
        const items = [{ rotate: "" + num + "deg" }];
        obj.transform = items;
        return obj;
      };
      fn.__closure = {
        reducedMotion: stateFromStores,
        targetBackgroundColor: str,
        backgroundColor: sharedValue,
        rotation: sharedValue1,
      };
      fn.__workletHash = 5208702098150;
      fn.__initData = __initData2;
      const items1 = [sharedValue, str, sharedValue1, num];
      const containerStyle = stateFromStores(num[5]).useAnimatedStyle(fn);
      const effect = sharedValue.useEffect(() => {
        obj = timing;
        const result = sharedValue.set(obj.withTiming(str, obj));
        const result1 = sharedValue1.set(spring.withSpring(num, closure_9));
      }, items1);
      return { containerStyle };
    };
const createStyles = fn(5091);
let obj4 = { container: null };
let size = {
  borderRadius: nativeDefault.modules.button.BORDER_RADIUS,
  padding: 8,
  marginLeft: 8,
  width: 40,
  height: 40,
};
obj4.container = size;
let closure_13 = createStyles.createStyles(obj4);
ReactCompilerGating = fn(558);
size = fn(2);
let result = size.fileFinishedImporting("modules/reactions/native/BurstReactionToggle.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function BurstReactionToggle(onPress) {
      const cResult = onPress(576).c(20);
      onPress = onPress.onPress;
      const isActive = onPress.isActive;
      const tmp4 = closure_13();
      const colors = nativeDefault.colors;
      if (isActive) {
        let INTERACTIVE_TEXT_DEFAULT = colors.WHITE;
        let tmp6 = tmp5;
      } else {
        INTERACTIVE_TEXT_DEFAULT = colors.INTERACTIVE_TEXT_DEFAULT;
        tmp6 = tmp5;
      }
      const ref = noop.useRef(null);
      const tmp8 = tmp6(9412)(ref);
      importDefault = tmp8;
      if (cResult[0] === tmp8) {
        if (cResult[1] === onPress) {
          let tmp9 = cResult[2];
        }
        const containerStyle = closure_12(isActive).containerStyle;
        if (cResult[3] !== isActive) {
          const intl = tmp(1126).intl;
          const string = intl.string;
          let t = tmp(1126).t;
          if (isActive) {
            t = t["5cRA/b"];
            let stringResult = string(t);
          } else {
            stringResult = string(t.buV4av);
          }
          cResult[3] = isActive;
          cResult[4] = stringResult;
        } else {
          if (cResult[5] !== isActive) {
            const obj2 = { checked: isActive };
            cResult[5] = isActive;
            cResult[6] = obj2;
            let tmp15 = obj2;
          } else {
            tmp15 = cResult[6];
          }
          if (cResult[7] === containerStyle) {
            if (cResult[8] === tmp4.container) {
              let tmp16 = cResult[9];
            }
            if (cResult[10] !== INTERACTIVE_TEXT_DEFAULT) {
              const obj3 = { color: INTERACTIVE_TEXT_DEFAULT };
              const tmp19 = jsx(tmp(9380).SuperReactionIcon, { color: INTERACTIVE_TEXT_DEFAULT });
              cResult[10] = INTERACTIVE_TEXT_DEFAULT;
              cResult[11] = tmp19;
              let tmp17 = tmp19;
            } else {
              tmp17 = cResult[11];
            }
            if (cResult[12] === tmp16) {
              if (cResult[13] === tmp17) {
                let tmp20 = cResult[14];
              }
              if (cResult[15] === tmp9) {
                if (cResult[16] === tmp11) {
                  if (cResult[17] === tmp15) {
                    if (cResult[18] === tmp20) {
                      let tmp23 = cResult[19];
                    }
                    return tmp23;
                  }
                }
              }
              const obj4 = {
                onPress: tmp9,
                accessible: true,
                accessibilityLabel: tmp11,
                accessibilityRole: "switch",
                accessibilityState: tmp15,
                children: tmp20,
              };
              const tmp26 = (
                <Pressable
                  onPress={tmp9}
                  accessible
                  accessibilityLabel={tmp11}
                  accessibilityRole="switch"
                  accessibilityState={tmp15}
                >
                  {tmp20}
                </Pressable>
              );
              cResult[15] = tmp9;
              cResult[16] = tmp11;
              cResult[17] = tmp15;
              cResult[18] = tmp20;
              cResult[19] = tmp26;
              tmp23 = tmp26;
            }
            const obj5 = { style: tmp16, ref, children: tmp17 };
            const tmp22 = jsx(tmp6(4811).View, { style: tmp16, ref, children: tmp17 });
            cResult[12] = tmp16;
            cResult[13] = tmp17;
            cResult[14] = tmp22;
            tmp20 = tmp22;
          }
          const items = [tmp4.container, containerStyle];
          cResult[7] = containerStyle;
          cResult[8] = tmp4.container;
          cResult[9] = items;
          tmp16 = items;
        }
      }
      function handleOnPress() {
        closure_1(ContentDismissActionType.AUTO);
        onPress();
      }
      cResult[0] = tmp8;
      cResult[1] = onPress;
      cResult[2] = handleOnPress;
      tmp9 = handleOnPress;
      obj = onPress(576);
    }
  : function BurstReactionToggle(arg0) {
      ({ onPress: require, isActive } = arg0);
      importDefault = undefined;
      const colors = nativeDefault.colors;
      if (isActive) {
        let INTERACTIVE_TEXT_DEFAULT = colors.WHITE;
        let tmp5 = tmp2;
      } else {
        INTERACTIVE_TEXT_DEFAULT = colors.INTERACTIVE_TEXT_DEFAULT;
        tmp5 = tmp2;
      }
      const ref = noop.useRef(null);
      importDefault = tmp5(9412)(ref);
      obj = {
        onPress: function handleOnPress() {
          closure_1(ContentDismissActionType.AUTO);
          require();
        },
        accessible: true,
        accessibilityLabel: null,
        accessibilityRole: "switch",
        accessibilityState: null,
        children: null,
      };
      const intl = util.intl;
      const string = intl.string;
      const t = util.t;
      if (isActive) {
        let stringResult = string(t["5cRA/b"]);
        let tmp11 = require;
      } else {
        stringResult = string(t.buV4av);
        tmp11 = require;
      }
      obj.accessibilityLabel = stringResult;
      obj.accessibilityState = { checked: isActive };
      const obj2 = { style: null, ref, children: null };
      const items = [closure_13().container, closure_12(isActive).containerStyle];
      obj2.style = items;
      obj2.children = jsx(tmp11(9380).SuperReactionIcon, { color: INTERACTIVE_TEXT_DEFAULT });
      obj.children = jsx(tmp5(4811).View, { style: null, ref, children: null });
      return (
        <Pressable
          onPress={function handleOnPress() {
            closure_1(ContentDismissActionType.AUTO);
            require();
          }}
          accessible
          accessibilityLabel={null}
          accessibilityRole="switch"
          accessibilityState={null}
        >
          {null}
        </Pressable>
      );
    };
