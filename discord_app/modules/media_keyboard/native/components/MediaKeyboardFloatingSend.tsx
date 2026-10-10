// === Module 17107: MediaKeyboardFloatingSend ===

// Module 17107 (MediaKeyboardFloatingSend)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import _modDef683 from "module_683" /* 683 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4850 */;
import spring from "spring" /* 5378 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import UploadAttachmentStore from "UploadAttachmentStore" /* 7907 */;

const require = globalThis.__r;

require = fn;
const StyleSheet = fn(17).StyleSheet;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
let c8 = 0.7;
const createStyles = fn(5092);
let obj = { sendContainer: null, gradient: null };
let obj3 = {};
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj3.top = undefined;
const merged1 = Object.assign(nativeDefault.shadows.SHADOW_HIGH);
obj.sendContainer = obj3;
let obj4 = {};
const merged2 = Object.assign(StyleSheet.absoluteFillObject);
obj4.color = nativeDefault.colors.BACKGROUND_SURFACE_HIGH;
obj.gradient = obj4;
let closure_9 = createStyles.createStyles(obj);
const __initData = { code: "function MediaKeyboardFloatingSendTsx1(){const{animatedIndex,INDEX_HEADER_CHANGE_THRESHOLD,hasUploads}=this.__closure;const isSheetOpen=animatedIndex.get()>INDEX_HEADER_CHANGE_THRESHOLD;return isSheetOpen&&hasUploads;}" };
const __initData2 = { code: "function MediaKeyboardFloatingSendTsx2(visible){const{isSendVisibleSharedValue}=this.__closure;isSendVisibleSharedValue.set(visible);}" };
const __initData3 = { code: "function MediaKeyboardFloatingSendTsx3(){const{animatedIndex,INDEX_HEADER_CHANGE_THRESHOLD,hasUploads}=this.__closure;const isSheetOpen=animatedIndex.get()>INDEX_HEADER_CHANGE_THRESHOLD;return isSheetOpen&&hasUploads;}" };
const __initData4 = { code: "function MediaKeyboardFloatingSendTsx4(visible){const{isSendVisibleSharedValue}=this.__closure;isSendVisibleSharedValue.set(visible);}" };
let ReactCompilerGating = fn(558);
let closure_14 = ReactCompilerGating.isReactCompilerEnabled() ? (function useSendVisibleSharedValue(animatedIndex) {
  const cResult = animatedIndex(draftType[8]).c(5);
  animatedIndex = animatedIndex.animatedIndex;
  const channelId = animatedIndex.channelId;
  draftType = animatedIndex.draftType;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UploadAttachmentStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === channelId) {
    if (cResult[2] === draftType) {
      let tmp6 = cResult[3];
      let tmp7 = cResult[4];
    }
    const stateFromStores = tmp(tmp2[9]).useStateFromStores(first, tmp6, tmp7);
    const tmpResult = tmp(tmp2[9]);
    const sharedValue = tmp(tmp2[10]).useSharedValue(false);
    const tmpResult3 = tmp(tmp2[10]);
    const fn2 = function x() {
      return animatedIndex.get() > c8 && stateFromStores;
    };
    const obj2 = { animatedIndex, INDEX_HEADER_CHANGE_THRESHOLD, hasUploads: stateFromStores };
    fn2.__closure = obj2;
    fn2.__workletHash = 12206635621152;
    fn2.__initData = __initData;
    class V {
      constructor(arg0) {
        result = closure_4.set(animatedIndex);
        return;
      }
    }
    const obj3 = { isSendVisibleSharedValue: sharedValue };
    V.__closure = obj3;
    V.__workletHash = 10753585819648;
    V.__initData = __initData2;
    const animatedReaction = tmp(tmp2[10]).useAnimatedReaction(fn2, V);
    return sharedValue;
  }
  const fn = function o() {
    return UploadAttachmentStore.getUploadCount(channelId, draftType) > 0;
  };
  tmp8[0] = channelId;
  tmp8[1] = draftType;
  cResult[1] = channelId;
  cResult[2] = draftType;
  cResult[3] = fn;
  cResult[4] = tmp8;
  tmp7 = tmp8;
  tmp6 = fn;
  const obj = animatedIndex(draftType[8]);
}) : (function useSendVisibleSharedValue(animatedIndex) {
  animatedIndex = animatedIndex.animatedIndex;
  const channelId = animatedIndex.channelId;
  const draftType = animatedIndex.draftType;
  const items = [UploadAttachmentStore];
  const items1 = [channelId, draftType];
  const stateFromStores = animatedIndex(draftType[9]).useStateFromStores(items, () => UploadAttachmentStore.getUploadCount(channelId, draftType) > 0, items1);
  const obj = animatedIndex(draftType[9]);
  const sharedValue = animatedIndex(draftType[10]).useSharedValue(false);
  const obj2 = animatedIndex(draftType[10]);
  const fn = function c() {
    return animatedIndex.get() > c8 && stateFromStores;
  };
  fn.__closure = { animatedIndex, INDEX_HEADER_CHANGE_THRESHOLD, hasUploads: stateFromStores };
  fn.__workletHash = 17017286047714;
  fn.__initData = __initData3;
  const fn2 = function l(arg0) {
    const result = sharedValue.set(arg0);
  };
  fn2.__closure = { isSendVisibleSharedValue: sharedValue };
  fn2.__workletHash = 130474191942;
  fn2.__initData = __initData4;
  const animatedReaction = animatedIndex(draftType[10]).useAnimatedReaction(fn, fn2);
  return sharedValue;
});
const __initData5 = { code: "function MediaKeyboardFloatingSendTsx5(){const{insetFab,tokens,withSpring,sendVisibleSharedValue}=this.__closure;return{height:insetFab+tokens.space.PX_64+tokens.space.PX_32,opacity:withSpring(sendVisibleSharedValue.get()?1:0)};}" };
const __initData6 = { code: "function MediaKeyboardFloatingSendTsx6(){const{sendVisibleSharedValue}=this.__closure;return{pointerEvents:sendVisibleSharedValue.get()?\"box-none\":\"none\"};}" };
const __initData7 = { code: "function MediaKeyboardFloatingSendTsx7(){const{insetFab,tokens,withSpring,sendVisibleSharedValue}=this.__closure;return{height:insetFab+tokens.space.PX_64+tokens.space.PX_32,opacity:withSpring(sendVisibleSharedValue.get()?1:0)};}" };
const __initData8 = { code: "function MediaKeyboardFloatingSendTsx8(){const{sendVisibleSharedValue}=this.__closure;return{pointerEvents:sendVisibleSharedValue.get()?'box-none':'none'};}" };
ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/media_keyboard/native/components/MediaKeyboardFloatingSend.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function MediaKeyboardFloatingSendInner(ref) {
  const cResult = c.c(30);
  ({ animatedIndex, channelId, draftType, onSend } = ref);
  const tmp4 = closure_9();
  const tmp6 = bottom(1631)();
  [bottom, require] = noop.useState(null);
  if (bottom == null) {
    bottom = tmp6.bottom;
  }
  if (cResult[0] === animatedIndex) {
    if (cResult[1] === channelId) {
      if (cResult[2] === draftType) {
        let tmp8 = cResult[3];
      }
      const tmp10 = closure_14(tmp8);
      dependencyMap = tmp10;
      class T {
        constructor() {
          obj = { height: null, opacity: null };
          sum = bottom + closure_1(closure_2[6]).space.PX_64;
          obj.height = sum + closure_1(closure_2[6]).space.PX_32;
          obj2 = closure_0(closure_2[12]);
          num = 0;
          if (closure_2.get()) {
            num = 1;
          }
          obj.opacity = obj2.withSpring(num);
          return obj;
        }
      }
      const obj3 = { insetFab: bottom, tokens: tmp5(587), withSpring: spring.withSpring, sendVisibleSharedValue: tmp10 };
      T.__closure = obj3;
      T.__workletHash = 16399716270519;
      T.__initData = __initData5;
      const animatedStyle = ReanimatedRexport.useAnimatedStyle(T);
      const tmpResult = ReanimatedRexport;
      const fn = function w() {
        let pointerEvents = "none";
        if (closure_2.get()) {
          pointerEvents = "box-none";
        }
        return { pointerEvents };
      };
      const obj4 = { sendVisibleSharedValue: tmp10 };
      fn.__closure = obj4;
      fn.__workletHash = 17338809179807;
      fn.__initData = __initData6;
      const animatedProps = ReanimatedRexport.useAnimatedProps(fn);
      const _Symbol = Symbol;
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const point = { x: 0, y: 0 };
        const point1 = { x: 0, y: 1 };
        cResult[4] = point;
        class T {
          constructor() {
            obj = { height: null, opacity: null };
            sum = bottom + closure_1(closure_2[6]).space.PX_64;
            obj.height = sum + closure_1(closure_2[6]).space.PX_32;
            obj2 = closure_0(closure_2[12]);
            num = 0;
            if (closure_2.get()) {
              num = 1;
            }
            obj.opacity = obj2.withSpring(num);
            return obj;
          }
        }
        let tmp17 = point1;
        let tmp16 = point;
      } else {
        tmp16 = cResult[4];
        tmp17 = cResult[5];
      }
      if (cResult[6] !== tmp4.gradient.color) {
        const obj10 = tmp5(683)(tmp4.gradient.color);
        const hexResult = tmp5(683)(tmp4.gradient.color).alpha(0).hex();
        class T {
          constructor() {
            obj = { height: null, opacity: null };
            sum = bottom + closure_1(closure_2[6]).space.PX_64;
            obj.height = sum + closure_1(closure_2[6]).space.PX_32;
            obj2 = closure_0(closure_2[12]);
            num = 0;
            if (closure_2.get()) {
              num = 1;
            }
            obj.opacity = obj2.withSpring(num);
            return obj;
          }
        }
        cResult[7] = hexResult;
        let tmp18 = hexResult;
        const alphaResult = tmp5(683)(tmp4.gradient.color).alpha(0);
      } else {
        tmp18 = cResult[7];
      }
      if (cResult[8] !== tmp4.gradient.color) {
        const obj12 = tmp5(683)(tmp4.gradient.color);
        cResult[8] = tmp4.gradient.color;
        class T {
          constructor() {
            obj = { height: null, opacity: null };
            sum = bottom + closure_1(closure_2[6]).space.PX_64;
            obj.height = sum + closure_1(closure_2[6]).space.PX_32;
            obj2 = closure_0(closure_2[12]);
            num = 0;
            if (closure_2.get()) {
              num = 1;
            }
            obj.opacity = obj2.withSpring(num);
            return obj;
          }
        }
        let tmp20 = tmp5(683)(tmp4.gradient.color).hex();
        const hexResult1 = tmp5(683)(tmp4.gradient.color).hex();
      } else {
        tmp20 = cResult[9];
      }
      if (cResult[10] === tmp18) {
        const _Symbol2 = Symbol;
        if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
          class K {
            constructor() {
              obj = { setInsetFab: closure_0 };
              return obj;
            }
          }
          cResult[13] = K;
        } else {
          class K {
            constructor() {
              obj = { setInsetFab: closure_0 };
              return obj;
            }
          }
        }
        const imperativeHandle = noop.useImperativeHandle(ref.ref, K);
        class T {
          constructor() {
            obj = { height: null, opacity: null };
            sum = bottom + closure_1(closure_2[6]).space.PX_64;
            obj.height = sum + closure_1(closure_2[6]).space.PX_32;
            obj2 = closure_0(closure_2[12]);
            num = 0;
            if (closure_2.get()) {
              num = 1;
            }
            obj.opacity = obj2.withSpring(num);
            return obj;
          }
        }
        const items = [animatedStyle, tmp4.sendContainer];
        cResult[14] = animatedStyle;
        cResult[15] = tmp4.sendContainer;
        cResult[16] = items;
      }
      const obj5 = { start: tmp16, end: tmp17, colors: null };
      const items1 = [tmp18, tmp20];
      obj5.colors = items1;
      cResult[10] = tmp18;
      cResult[11] = tmp20;
      cResult[12] = obj5;
      const tmpResult2 = ReanimatedRexport;
    }
  }
  const obj6 = { animatedIndex, channelId, draftType };
  cResult[0] = animatedIndex;
  cResult[1] = channelId;
  cResult[2] = draftType;
  cResult[3] = obj6;
  tmp8 = obj6;
  const tmp7 = _slicedToArray(noop.useState(null), 2);
}) : (function MediaKeyboardFloatingSendInner(arg0) {
  importDefault = undefined;
  bottom = undefined;
  _slicedToArray = undefined;
  ({ animatedIndex, channelId, draftType, onSend, ref } = arg0);
  const tmp = closure_9();
  const _require = tmp;
  const tmp4 = require("useSafeAreaInsets")();
  [bottom, c1] = noop.useState(null);
  if (bottom == null) {
    bottom = tmp4.bottom;
  }
  const tmp6 = closure_14({ animatedIndex, channelId, draftType });
  _slicedToArray = tmp6;
  const tmp5 = _slicedToArray(noop.useState(null), 2);
  const fn = function b() {
    const obj = { height: null, opacity: null };
    const sum = bottom + nativeDefault.space.PX_64;
    obj.height = sum + nativeDefault.space.PX_32;
    let num = 0;
    if (closure_3.get()) {
      num = 1;
    }
    obj.opacity = spring.withSpring(num);
    return obj;
  };
  let obj2 = require("ReanimatedRexport");
  fn.__closure = { insetFab: bottom, tokens: require("native"), withSpring: require("spring").withSpring, sendVisibleSharedValue: tmp6 };
  fn.__workletHash = 14820101088757;
  fn.__initData = __initData7;
  const animatedStyle = obj2.useAnimatedStyle(fn);
  const obj3 = { insetFab: bottom, tokens: require("native"), withSpring: require("spring").withSpring, sendVisibleSharedValue: tmp6 };
  const fn2 = function p() {
    let pointerEvents = "none";
    if (closure_3.get()) {
      pointerEvents = "box-none";
    }
    return { pointerEvents };
  };
  fn2.__closure = { sendVisibleSharedValue: tmp6 };
  fn2.__workletHash = 7153934955217;
  fn2.__initData = __initData8;
  let items = [tmp.gradient.color];
  const animatedProps = require("ReanimatedRexport").useAnimatedProps(fn2);
  const memo = noop.useMemo(() => {
    const obj = { start: { x: 0, y: 0 }, end: { x: 0, y: 1 }, colors: null };
    const obj2 = _modDef683(closure_0.gradient.color);
    const items = [_modDef683(closure_0.gradient.color).alpha(0).hex(), ];
    const alphaResult = _modDef683(closure_0.gradient.color).alpha(0);
    items[1] = _modDef683(closure_0.gradient.color).hex();
    obj.colors = items;
    return obj;
  }, items);
  const imperativeHandle = noop.useImperativeHandle(ref, () => ({ setInsetFab }));
  const obj5 = { style: null, animatedProps, children: null };
  const items1 = [animatedStyle, tmp.sendContainer];
  obj5.style = items1;
  const obj6 = { style: tmp.gradient };
  const obj4 = require("ReanimatedRexport");
  const merged = Object.assign(memo);
  obj6.pointerEvents = "none";
  const items2 = [closure_6(require("LinearGradient"), obj6), ];
  const obj7 = { accessibilityLabel: null, icon: null, onPress: null, positionBottom: null };
  const intl = require("util").intl;
  obj7.accessibilityLabel = intl.string(require("util").t.TXNS7S);
  obj7.icon = closure_6(require("SendMessageIcon").SendMessageIcon, {});
  obj7.onPress = onSend;
  obj7.positionBottom = bottom;
  items2[1] = closure_6(require("FloatingActionButton").FloatingActionButton, obj7);
  obj5.children = items2;
  return closure_7(require("ReanimatedRexport").View, obj5);
}));