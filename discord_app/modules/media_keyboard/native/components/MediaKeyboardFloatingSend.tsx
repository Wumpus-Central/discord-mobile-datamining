// === Module 16762: MediaKeyboardFloatingSend ===

// Module 16762 (MediaKeyboardFloatingSend)
import nativeDefault from "native" /* 576 */;
import _modDef672 from "module_672" /* 672 */;
import spring from "spring" /* 4974 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import UploadAttachmentStore from "UploadAttachmentStore" /* 4900 */;

require = fn;
const StyleSheet = fn(17).StyleSheet;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
fn(4560);
let obj = { sendContainer: null, gradient: null };
obj = {};
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj.top = undefined;
const merged1 = Object.assign(nativeDefault.shadows.SHADOW_HIGH);
obj.sendContainer = obj;
const createStyles = {};
const merged2 = Object.assign(StyleSheet.absoluteFillObject);
createStyles.color = nativeDefault.colors.BACKGROUND_SURFACE_HIGH;
obj.gradient = createStyles;
let closure_8 = createStyles.createStyles(obj);
const __initData = { code: "function MediaKeyboardFloatingSendTsx1(){const{animatedIndex,INDEX_HEADER_CHANGE_THRESHOLD,hasUploads}=this.__closure;const isSheetOpen=animatedIndex.get()>INDEX_HEADER_CHANGE_THRESHOLD;return isSheetOpen&&hasUploads;}" };
const __initData2 = { code: "function MediaKeyboardFloatingSendTsx2(visible){const{isSendVisibleSharedValue}=this.__closure;isSendVisibleSharedValue.set(visible);}" };
const __initData3 = { code: "function MediaKeyboardFloatingSendTsx3(){const{insetFab,tokens,withSpring,sendVisibleSharedValue}=this.__closure;return{height:insetFab+tokens.space.PX_64+tokens.space.PX_32,opacity:withSpring(sendVisibleSharedValue.get()?1:0)};}" };
const __initData4 = { code: "function MediaKeyboardFloatingSendTsx4(){const{sendVisibleSharedValue}=this.__closure;return{pointerEvents:sendVisibleSharedValue.get()?'box-none':'none'};}" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/media_keyboard/native/components/MediaKeyboardFloatingSend.tsx");

export default noop.memo(noop.forwardRef(function MediaKeyboardFloatingSendInner(onSend, arg1) {
  ({ animatedIndex, channelId, draftType } = onSend);
  importDefault = undefined;
  bottom = undefined;
  let sharedValue;
  const tmp = closure_8();
  _require = tmp;
  let obj = noop;
  const tmp4 = require("useSafeAreaInsets")();
  [bottom, c1] = sharedValue(noop.useState(null), 2);
  if (bottom == null) {
    bottom = tmp4.bottom;
  }
  closure_129_0 = animatedIndex;
  closure_129_1 = channelId;
  closure_129_2 = draftType;
  let obj1 = require("initialize");
  let items = [UploadAttachmentStore];
  const items1 = [channelId, draftType];
  const stateFromStores = obj1.useStateFromStores(items, () => UploadAttachmentStore.getUploadCount(c1, bottom) > 0, items1);
  closure_129_3 = stateFromStores;
  let obj2 = require("ReanimatedRexport");
  sharedValue = obj2.useSharedValue(false);
  closure_129_4 = sharedValue;
  const tmp5 = sharedValue(noop.useState(null), 2);
  const fn = function c() {
    return closure_0.get() > 0.7 && sharedValue;
  };
  fn.__closure = { animatedIndex, INDEX_HEADER_CHANGE_THRESHOLD: 0.7, hasUploads: stateFromStores };
  fn.__workletHash = 12206635621152;
  fn.__initData = __initData;
  const fn2 = function l(arg0) {
    const result = noop.set(arg0);
  };
  fn2.__closure = { isSendVisibleSharedValue: sharedValue };
  fn2.__workletHash = 10753585819648;
  fn2.__initData = __initData2;
  const animatedReaction = require("ReanimatedRexport").useAnimatedReaction(fn, fn2);
  const obj4 = require("ReanimatedRexport");
  const fn3 = function y() {
    const obj = { height: null, opacity: null };
    const sum = bottom + nativeDefault.space.PX_64;
    obj.height = sum + nativeDefault.space.PX_32;
    let num = 0;
    if (sharedValue.get()) {
      num = 1;
    }
    obj.opacity = spring.withSpring(num);
    return obj;
  };
  obj = { insetFab: bottom, tokens: tmp2(tmp3[6]), withSpring: require("spring").withSpring, sendVisibleSharedValue: sharedValue };
  fn3.__closure = obj;
  fn3.__workletHash = 6402761213297;
  fn3.__initData = __initData3;
  const animatedStyle = require("ReanimatedRexport").useAnimatedStyle(fn3);
  const obj5 = require("ReanimatedRexport");
  const fn4 = function f() {
    let pointerEvents = "none";
    if (sharedValue.get()) {
      pointerEvents = "box-none";
    }
    return { pointerEvents };
  };
  fn4.__closure = { sendVisibleSharedValue: sharedValue };
  fn4.__workletHash = 1097586248797;
  fn4.__initData = __initData4;
  const items2 = [tmp.gradient.color];
  const animatedProps = require("ReanimatedRexport").useAnimatedProps(fn4);
  const memo = obj.useMemo(() => {
    const obj = { start: { x: 0, y: 0 }, end: { x: 0, y: 1 }, colors: null };
    const obj2 = _modDef672(closure_0.gradient.color);
    const items = [_modDef672(closure_0.gradient.color).alpha(0).hex(), ];
    const alphaResult = _modDef672(closure_0.gradient.color).alpha(0);
    items[1] = _modDef672(closure_0.gradient.color).hex();
    obj.colors = items;
    return obj;
  }, items2);
  const imperativeHandle = obj.useImperativeHandle(arg1, () => ({ setInsetFab }));
  obj = { style: null, animatedProps, children: null };
  const items3 = [animatedStyle, tmp.sendContainer];
  obj.style = items3;
  obj1 = { style: tmp.gradient };
  const obj7 = require("ReanimatedRexport");
  const merged = Object.assign(memo);
  obj1.pointerEvents = "none";
  const items4 = [closure_6(require("LinearGradient"), obj1), ];
  obj2 = { accessibilityLabel: null, icon: null, onPress: null, positionBottom: null };
  const intl = require("util").intl;
  obj2.accessibilityLabel = intl.string(require("util").t.TXNS7S);
  obj2.icon = closure_6(require("SendMessageIcon").SendMessageIcon, {});
  obj2.onPress = onSend.onSend;
  obj2.positionBottom = bottom;
  items4[1] = closure_6(require("FloatingActionButton").FloatingActionButton, obj2);
  obj.children = items4;
  return closure_7(require("ReanimatedRexport").View, obj);
}));