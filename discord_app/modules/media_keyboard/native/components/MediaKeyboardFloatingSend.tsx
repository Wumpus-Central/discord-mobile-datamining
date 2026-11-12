// === Module 13457: MediaKeyboardFloatingSend ===

// Module 13457 (MediaKeyboardFloatingSend)
import nativeDefault from "native" /* 575 */;
import _modDef671 from "module_671" /* 671 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1627 */;
import _modDef1652 from "module_1652" /* 1652 */;
import LinearGradientDefault from "LinearGradient" /* 5830 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import UploadAttachmentStore from "UploadAttachmentStore" /* 8805 */;

const require = globalThis.__r;

const require = fn;
const StyleSheet = fn(17).StyleSheet;
const jsxProd = fn(21);
({ jsx: closure_6, jsxs: metroImportDefault } = jsxProd);
const createStyles = fn(5243);
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
let closure_8 = createStyles.createStyles(obj);
let closure_9 = { code: "(function MediaKeyboardFloatingSendTsx1(){let[animatedIndex,INDEX_HEADER_CHANGE_THRESHOLD,hasUploads]=this.__closure;const isSheetOpen=animatedIndex.get()>INDEX_HEADER_CHANGE_THRESHOLD;return isSheetOpen&&hasUploads;})" };
let closure_10 = { code: "(function MediaKeyboardFloatingSendTsx2(visible){let[isSendVisibleSharedValue]=this.__closure;isSendVisibleSharedValue.set(visible);})" };
let closure_11 = { code: "(function MediaKeyboardFloatingSendTsx3(){let[insetFab,tokens,withSpring,sendVisibleSharedValue,Reanimated3DefaultSpringConfig]=this.__closure;return{height:insetFab+tokens.space.PX_64+tokens.space.PX_32,opacity:withSpring(sendVisibleSharedValue.get()?1:0,Reanimated3DefaultSpringConfig)};})" };
let closure_12 = { code: "(function MediaKeyboardFloatingSendTsx4(){let[sendVisibleSharedValue]=this.__closure;return{pointerEvents:sendVisibleSharedValue.get()?'box-none':'none'};})" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/media_keyboard/native/components/MediaKeyboardFloatingSend.tsx");

export default noop.memo(function MediaKeyboardFloatingSendInner(arg0) {
  ({ channelId, draftType } = arg0);
  importDefault = undefined;
  ({ animatedIndex, onSend, ref } = arg0);
  const tmp = closure_8();
  _require = tmp;
  const tmp4 = useSafeAreaInsetsDefault();
  [bottom, c1] = noop.useState(null);
  if (bottom == null) {
    bottom = tmp4.bottom;
  }
  closure_129_0 = channelId;
  closure_129_1 = draftType;
  const tmp5 = _slicedToArray(noop.useState(null), 2);
  items = [UploadAttachmentStore];
  const items1 = [channelId, draftType];
  const stateFromStores = require("initialize").useStateFromStores(items, () => UploadAttachmentStore.getUploadCount(c0, c1) > 0, items1);
  let obj2 = require("initialize");
  const sharedValue = require("module_1652").useSharedValue(false);
  const obj3 = require("module_1652");
  const items2 = [closure_9, animatedIndex, 0.7, stateFromStores];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  [tmp9, tmp10, tmp11, tmp12] = items2;
  class MediaKeyboardFloatingSendTsx1 {
    constructor() {
      tmp = closure_0.get() > closure_1 && closure_2;
      return tmp;
    }
  }
  const items3 = [tmp10, tmp11, tmp12];
  MediaKeyboardFloatingSendTsx1.__closure = items3;
  MediaKeyboardFloatingSendTsx1.__workletHash = 14002102514905;
  MediaKeyboardFloatingSendTsx1.__initData = tmp9;
  const items4 = [closure_10, sharedValue];
  _require = undefined;
  [tmp13, tmp14] = items4;
  class MediaKeyboardFloatingSendTsx2 {
    constructor(arg0) {
      result = closure_0.set(arg0);
      return;
    }
  }
  const items5 = [tmp14];
  MediaKeyboardFloatingSendTsx2.__closure = items5;
  MediaKeyboardFloatingSendTsx2.__workletHash = 6688752148537;
  MediaKeyboardFloatingSendTsx2.__initData = tmp13;
  const animatedReaction = require("module_1652").useAnimatedReaction(MediaKeyboardFloatingSendTsx1, MediaKeyboardFloatingSendTsx2);
  const obj4 = require("module_1652");
  const items6 = [closure_11, bottom, nativeDefault, require("spring/spring").withSpring, sharedValue, require("springPresets").Reanimated3DefaultSpringConfig];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  _slicedToArray = undefined;
  noop = undefined;
  [tmp16, tmp17, tmp18, tmp19, tmp20, tmp21] = items6;
  class MediaKeyboardFloatingSendTsx3 {
    constructor() {
      obj = { height: closure_0 + closure_1.space.PX_64 + closure_1.space.PX_32, opacity: null };
      tmp = closure_2;
      num = 0;
      if (closure_3.get()) {
        num = 1;
      }
      obj.opacity = tmp(num, closure_4);
      return obj;
    }
  }
  const items7 = [tmp17, tmp18, tmp19, tmp20, tmp21];
  MediaKeyboardFloatingSendTsx3.__closure = items7;
  MediaKeyboardFloatingSendTsx3.__workletHash = 13845638317384;
  MediaKeyboardFloatingSendTsx3.__initData = tmp16;
  const animatedStyle = require("module_1652").useAnimatedStyle(MediaKeyboardFloatingSendTsx3);
  const tmp6Result = require("module_1652");
  const items8 = [closure_12, sharedValue];
  _require = undefined;
  [tmp23, tmp24] = items8;
  class MediaKeyboardFloatingSendTsx4 {
    constructor() {
      pointerEvents = "none";
      if (closure_0.get()) {
        pointerEvents = "box-none";
      }
      return { pointerEvents };
    }
  }
  const items9 = [tmp24];
  MediaKeyboardFloatingSendTsx4.__closure = items9;
  MediaKeyboardFloatingSendTsx4.__workletHash = 6914604421188;
  MediaKeyboardFloatingSendTsx4.__initData = tmp23;
  const items10 = [tmp.gradient.color];
  const animatedProps = require("module_1652").useAnimatedProps(MediaKeyboardFloatingSendTsx4);
  const memo = obj.useMemo(() => {
    const obj = { start: { x: 0, y: 0 }, end: { x: 0, y: 1 }, colors: null };
    const obj2 = _modDef671(_undefined.gradient.color);
    items = [_modDef671(_undefined.gradient.color).alpha(0).hex(), ];
    const alphaResult = _modDef671(_undefined.gradient.color).alpha(0);
    items[1] = _modDef671(_undefined.gradient.color).hex();
    obj.colors = items;
    return obj;
  }, items10);
  const imperativeHandle = obj.useImperativeHandle(ref, () => ({ setInsetFab }));
  const obj5 = { style: null, animatedProps, children: null };
  const items11 = [animatedStyle, tmp.sendContainer];
  obj5.style = items11;
  const obj6 = { style: tmp.gradient };
  const tmp6Result2 = require("module_1652");
  const merged = Object.assign(memo);
  obj6.pointerEvents = "none";
  const items12 = [closure_6(LinearGradientDefault, obj6), ];
  const obj7 = { accessibilityLabel: null, icon: null, onPress: null, positionBottom: null };
  const intl = tmp6(1113).intl;
  obj7.accessibilityLabel = intl.string(require("util").t.TXNS7S);
  obj7.icon = closure_6(require("SendMessageIcon").SendMessageIcon, {});
  obj7.onPress = onSend;
  obj7.positionBottom = bottom;
  items12[1] = closure_6(require("FloatingActionButton").FloatingActionButton, obj7);
  obj5.children = items12;
  return closure_7(_modDef1652.View, obj5);
});