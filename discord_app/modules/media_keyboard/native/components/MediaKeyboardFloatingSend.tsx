// === Module 16274: ? ===

// Module 16274
import ThemesDefault from "Themes" /* 712 */;
import closure_3 from "_slicedToArray" /* 32 */;
import importAllResult from "noop" /* 19 */;
import { StyleSheet } from "get ActivityIndicator" /* 17 */;
import closure_5 from "map" /* 4819 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4446 */;

const require = arg1;
let c4 = importAllResult;
({ jsx: closure_6, jsxs: error } = jsxProd);
let obj = { sendContainer: null, gradient: null };
obj = {};
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj.top = undefined;
const merged1 = Object.assign(ThemesDefault.shadows.SHADOW_HIGH);
obj[0] = obj;
createCacheKey = {};
const merged2 = Object.assign(StyleSheet.absoluteFillObject);
createCacheKey.color = ThemesDefault.colors.BACKGROUND_SURFACE_HIGH;
obj[1] = createCacheKey;
let closure_8 = createCacheKey.createStyles(obj);
let closure_9 = { code: "function MediaKeyboardFloatingSendTsx1(){const{animatedIndex,INDEX_HEADER_CHANGE_THRESHOLD,hasUploads}=this.__closure;const isSheetOpen=animatedIndex.get()>INDEX_HEADER_CHANGE_THRESHOLD;return isSheetOpen&&hasUploads;}" };
let closure_10 = { code: "function MediaKeyboardFloatingSendTsx2(visible){const{isSendVisibleSharedValue}=this.__closure;isSendVisibleSharedValue.set(visible);}" };
let closure_11 = { code: "function MediaKeyboardFloatingSendTsx3(){const{insetFab,tokens,withSpring,sendVisibleSharedValue}=this.__closure;return{height:insetFab+tokens.space.PX_64+tokens.space.PX_32,opacity:withSpring(sendVisibleSharedValue.get()?1:0)};}" };
let closure_12 = { code: "function MediaKeyboardFloatingSendTsx4(){const{sendVisibleSharedValue}=this.__closure;return{pointerEvents:sendVisibleSharedValue.get()?'box-none':'none'};}" };
const memoResult = importAllResult.memo(importAllResult.forwardRef(function MediaKeyboardFloatingSendInner(onSend, ref) {
  ({ animatedIndex, channelId, draftType } = onSend);
  animatedIndex = undefined;
  channelId = undefined;
  draftType = undefined;
  let sharedValue;
  const tmp = callback3();
  animatedIndex = tmp;
  let obj = sharedValue;
  const tmp4 = channelId(draftType[9])();
  [bottom, channelId] = sharedValue(sharedValue.useState(null), 2);
  if (bottom == null) {
    bottom = tmp4.bottom;
  }
  draftType = bottom;
  sharedValue = undefined;
  sharedValue = undefined;
  obj1 = animatedIndex(tmp3[7]);
  let items = [closure_5];
  const items1 = [channelId, draftType];
  const stateFromStores = obj1.useStateFromStores(items, () => closure_1_5.getUploadCount(channelId, draftType) > 0, items1);
  sharedValue = stateFromStores;
  let obj2 = animatedIndex(tmp3[8]);
  sharedValue = obj2.useSharedValue(false);
  const tmp5 = sharedValue(sharedValue.useState(null), 2);
  const fn = function c() {
    return animatedIndex.get() > 0.7 && sharedValue;
  };
  fn.__closure = { animatedIndex, INDEX_HEADER_CHANGE_THRESHOLD: 0.7, hasUploads: stateFromStores };
  fn.__workletHash = 12206635621152;
  fn.__initData = closure_9;
  const fn2 = function l(arg0) {
    const result = sharedValue.set(arg0);
  };
  fn2.__closure = { isSendVisibleSharedValue: sharedValue };
  fn2.__workletHash = 10753585819648;
  fn2.__initData = closure_10;
  const animatedReaction = animatedIndex(draftType[8]).useAnimatedReaction(fn, fn2);
  const obj4 = animatedIndex(draftType[8]);
  const fn3 = function y() {
    const obj = { height: null, opacity: null };
    const sum = draftType + channelId(draftType[6]).space.PX_64;
    obj[0] = sum + channelId(draftType[6]).space.PX_32;
    let num = 0;
    if (sharedValue.get()) {
      num = 1;
    }
    obj[1] = animatedIndex(draftType[10]).withSpring(num);
    return obj;
  };
  obj = { insetFab: bottom, tokens: tmp2(tmp3[6]), withSpring: animatedIndex(tmp3[10]).withSpring, sendVisibleSharedValue: sharedValue };
  fn3.__closure = obj;
  fn3.__workletHash = 6402761213297;
  fn3.__initData = closure_11;
  const animatedStyle = animatedIndex(draftType[8]).useAnimatedStyle(fn3);
  const obj5 = animatedIndex(draftType[8]);
  const fn4 = function f() {
    let pointerEvents = "none";
    if (sharedValue.get()) {
      pointerEvents = "box-none";
    }
    return { pointerEvents };
  };
  fn4.__closure = { sendVisibleSharedValue: sharedValue };
  fn4.__workletHash = 1097586248797;
  fn4.__initData = closure_12;
  const items2 = [tmp.gradient.color];
  const animatedProps = animatedIndex(draftType[8]).useAnimatedProps(fn4);
  const memo = obj.useMemo(() => {
    const obj = { start: { x: 0, y: 0 }, end: { x: 0, y: 1 }, colors: null };
    const obj2 = channelId(draftType[11])(animatedIndex.gradient.color);
    const items = [channelId(draftType[11])(animatedIndex.gradient.color).alpha(0).hex(), ];
    const alphaResult = channelId(draftType[11])(animatedIndex.gradient.color).alpha(0);
    items[1] = channelId(draftType[11])(animatedIndex.gradient.color).hex();
    obj[2] = items;
    return obj;
  }, items2);
  const imperativeHandle = obj.useImperativeHandle(ref, () => ({ setInsetFab: channelId }));
  obj = { style: items3, animatedProps, children: null };
  items3 = [animatedStyle, tmp.sendContainer];
  obj1 = { style: tmp.gradient };
  const obj7 = animatedIndex(draftType[8]);
  const merged = Object.assign(memo);
  obj1.pointerEvents = "none";
  const items4 = [callback(channelId(draftType[12]), obj1), ];
  obj2 = { accessibilityLabel: null, icon: null, onPress: null, positionBottom: null };
  const intl = animatedIndex(tmp3[14]).intl;
  obj2[0] = intl.string(animatedIndex(draftType[14]).t.TXNS7S);
  obj2[1] = callback(animatedIndex(draftType[15]).SendMessageIcon, {});
  obj2[2] = onSend.onSend;
  obj2[3] = bottom;
  items4[1] = callback(animatedIndex(draftType[13]).FloatingActionButton, obj2);
  obj[2] = items4;
  return callback2(channelId(draftType[8]).View, obj);
}));
let result = require("set").fileFinishedImporting("modules/media_keyboard/native/components/MediaKeyboardFloatingSend.tsx");

export default memoResult;