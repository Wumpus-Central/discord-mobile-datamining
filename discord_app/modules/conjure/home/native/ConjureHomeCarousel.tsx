// === Module 12956: ConjureHomeCarousel ===

// Module 12956 (ConjureHomeCarousel)
import nativeDefault from "native" /* 575 */;
import AvatarUtils from "AvatarUtils" /* 1411 */;
import _mod1652 from "module_1652" /* 1652 */;
import _modDef3995 from "module_3995" /* 3995 */;
import Text_Text from "Text/Text" /* 5747 */;
import FastImageDefault from "FastImage" /* 5837 */;
import conjureHomeCarouselFan from "conjureHomeCarouselFan" /* 12959 */;
import SvgCss from "SvgCss" /* 12960 */;
import conjureHomeInspirationArtDefault from "conjureHomeInspirationArt" /* 13103 */;
import conjureHomeInspirationEntries from "conjureHomeInspirationEntries" /* 13111 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5142 */;
import AppStateStore from "AppStateStore" /* 2122 */;

const require = globalThis.__r;
const _modDef1652 = _mod1652;

require = fn;
const View = fn(17).View;
const AppStates = fn(1072).AppStates;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: closure_10 } = jsxProd);
let closure_11 = 240 + nativeDefault.space.PX_24;
const sum = 36 + 2 * nativeDefault.space.PX_6 + 2;
const sum1 = sum + nativeDefault.space.PX_12;
const PX_24 = nativeDefault.space.PX_24;
let obj = { games: fn(9859).GameControllerIcon, apps: fn(8802).AppsIcon, profile_widget: fn(12957).WidgetsIcon, overlay_widget: fn(9719).ScreenIcon, automod: fn(11418).ShieldIcon, chat_bot: fn(12241).RobotIcon };
const createStyles = fn(5141);
let obj2 = { carousel: { height: sum1 + 135 + 54 + PX_24, overflow: "hidden" }, item: null, promptRow: null, avatar: null, bubble: null, card: null, thumbnail: null, footer: null, categoryIcon: null, footerText: null };
const rect = { position: "absolute", top: 0, left: 0, width: 240, gap: nativeDefault.space.PX_12 };
obj2.item = rect;
obj2.promptRow = { flexDirection: "row", alignItems: "flex-start", gap: nativeDefault.space.PX_8 };
let size = { width: nativeDefault.space.PX_24, height: nativeDefault.space.PX_24, borderRadius: nativeDefault.radii.round };
obj2.avatar = size;
let obj4 = { height: sum1 + 135 + 54 + PX_24, overflow: "hidden" };
let obj5 = { flexDirection: "row", alignItems: "flex-start", gap: nativeDefault.space.PX_8 };
obj2.bubble = { flex: 1, height: sum, paddingVertical: nativeDefault.space.PX_6, paddingHorizontal: nativeDefault.space.PX_10, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, borderRadius: nativeDefault.radii.md, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
let obj6 = { flex: 1, height: sum, paddingVertical: nativeDefault.space.PX_6, paddingHorizontal: nativeDefault.space.PX_10, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, borderRadius: nativeDefault.radii.md, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
obj2.card = { overflow: "hidden", borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, borderRadius: nativeDefault.radii.md, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
let obj7 = { overflow: "hidden", borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, borderRadius: nativeDefault.radii.md, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
obj2.thumbnail = { height: 135, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG };
let obj8 = { height: 135, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG };
obj2.footer = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_10, padding: nativeDefault.space.PX_10 };
const size1 = { width: nativeDefault.space.PX_32, height: nativeDefault.space.PX_32, alignItems: "center", justifyContent: "center", borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL };
obj2.categoryIcon = size1;
obj2.footerText = { flex: 1 };
let closure_13 = createStyles.createStyles(obj2);
let closure_14 = { code: "(function ConjureHomeCarouselTsx1(){let[wrapConjureHomeCarouselDistance,index,STEP,offset,loop,conjureHomeCarouselFan,viewportWidth,CARD_WIDTH]=this.__closure;const distance=wrapConjureHomeCarouselDistance(index*STEP,offset.get(),loop);const{angleDeg:angleDeg,dropPx:dropPx}=conjureHomeCarouselFan(distance/STEP,STEP);return{transform:[{translateX:viewportWidth/2-CARD_WIDTH/2+distance},{translateY:dropPx},{rotate:angleDeg+\"deg\"}]};})" };
let closure_15 = noop.memo(function ConjureHomeCarouselItem(inspiration) {
  inspiration = inspiration.inspiration;
  ({ index, count, offset, viewportWidth } = inspiration);
  const tmp = closure_13();
  obj = _mod1652;
  items = [closure_14, conjureHomeCarouselFan.wrapConjureHomeCarouselDistance, index, closure_11, offset, closure_11 * count, conjureHomeCarouselFan.conjureHomeCarouselFan, viewportWidth, 240];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  c4 = undefined;
  c5 = undefined;
  c6 = undefined;
  c7 = undefined;
  [tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12] = items;
  class ConjureHomeCarouselTsx1 {
    constructor() {
      result = closure_1 * closure_2;
      tmp2 = closure_0(result, closure_3.get(), closure_4);
      tmp3 = closure_5(tmp2 / closure_2, closure_2);
      obj = { transform: null };
      obj1 = { translateX: closure_6 / 2 - closure_7 / 2 + tmp2 };
      items = [, , ];
      items[0] = obj1;
      items[1] = { translateY: tmp3.dropPx };
      obj4 = { rotate: "" + tmp3.angleDeg + "deg" };
      items[2] = obj4;
      obj.transform = items;
      return obj;
    }
  }
  const items1 = [tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12];
  ConjureHomeCarouselTsx1.__closure = items1;
  ConjureHomeCarouselTsx1.__workletHash = 12886890817383;
  ConjureHomeCarouselTsx1.__initData = tmp4;
  const animatedStyle = obj.useAnimatedStyle(ConjureHomeCarouselTsx1);
  const obj2 = { style: null, children: null };
  const items2 = [tmp.item, animatedStyle];
  obj2.style = items2;
  const obj3 = { style: tmp.promptRow, children: null };
  const obj4 = { style: tmp.avatar, source: null };
  const tmp14 = FastImageDefault;
  const tmp2Result = AvatarUtils;
  obj4.source = tmp2Result.makeSource(AvatarUtils.getDefaultAvatarURL(undefined, inspiration.authorAvatarSeed));
  const items3 = [React7(tmp14, obj4), ];
  const obj5 = { style: tmp.bubble, children: React7(Text_Text.Text, { variant: "text-sm/medium", color: "text-strong", lineClamp: 2, children: inspiration.shortPrompt }) };
  items3[1] = React7(View, obj5);
  obj3.children = items3;
  const items4 = [closure_1_10(View, obj3), ];
  const obj7 = { style: tmp.card, children: null };
  const obj8 = { style: tmp.thumbnail, children: null };
  const size = { asset: conjureHomeInspirationArtDefault[inspiration.id], width: "100%", height: "100%" };
  obj8.children = React7(SvgCss.LocalSvg, size);
  const items5 = [React7(View, obj8), ];
  const obj9 = { style: tmp.footer, children: null };
  const obj10 = { style: tmp.categoryIcon, children: null };
  const obj6 = { variant: "text-sm/medium", color: "text-strong", lineClamp: 2, children: inspiration.shortPrompt };
  const tmp2Result3 = AvatarUtils;
  obj10.children = React7(obj[inspiration.category], { size: "sm", color: nativeDefault.colors.ICON_STRONG });
  const items6 = [React7(View, obj10), ];
  const obj12 = { style: tmp.footerText, children: null };
  const items7 = [React7(Text_Text.Text, { variant: "text-md/semibold", color: "text-strong", lineClamp: 1, children: inspiration.name }), ];
  const obj14 = { variant: "text-sm/normal", color: "text-subtle", lineClamp: 1, children: null };
  const obj11 = { size: "sm", color: nativeDefault.colors.ICON_STRONG };
  const obj13 = { variant: "text-md/semibold", color: "text-strong", lineClamp: 1, children: inspiration.name };
  obj14.children = conjureHomeInspirationEntries.conjureHomeCategoryLabel(inspiration.category);
  items7[1] = React7(Text_Text.Text, obj14);
  obj12.children = items7;
  items6[1] = closure_1_10(View, obj12);
  obj9.children = items6;
  items5[1] = closure_1_10(View, obj9);
  obj7.children = items5;
  items4[1] = closure_1_10(View, obj7);
  obj2.children = items4;
  return closure_1_10(_modDef1652.View, obj2);
});
let closure_16 = { code: "(function ConjureHomeCarouselTsx2(frame){let[offset,CONJURE_HOME_CAROUSEL_SPEED_PX_PER_SECOND,loop]=this.__closure;var _frame$timeSincePrevi;const elapsed=(_frame$timeSincePrevi=frame.timeSincePreviousFrame)!==null&&_frame$timeSincePrevi!==void 0?_frame$timeSincePrevi:0;offset.set((offset.get()+CONJURE_HOME_CAROUSEL_SPEED_PX_PER_SECOND*elapsed/1000)%loop);})" };
let obj9 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_10, padding: nativeDefault.space.PX_10 };
size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/home/native/ConjureHomeCarousel.tsx");

export default noop.memo(function ConjureHomeCarousel(onScreen) {
  let sharedValue;
  let frameCallback;
  onScreen = undefined;
  const memo = frameCallback.useMemo(() => _undefined(_undefined2[22]).conjureHomeInspirationEntries(), []);
  _require = memo;
  obj = frameCallback;
  const tmp = closure_13();
  const tmp2 = _require;
  items = [AccessibilityStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const obj2 = require("initialize");
  const items1 = [AppStateStore];
  const stateFromStores1 = require("initialize").useStateFromStores(items1, () => state.getState() === constants.ACTIVE);
  const obj3 = require("initialize");
  const isFocused = require("Link").useIsFocused();
  const tmp7 = sharedValue(frameCallback.useState(0), 2);
  const first = tmp7[0];
  const obj4 = require("Link");
  sharedValue = require("module_1652").useSharedValue(0);
  let result = closure_11 * memo.length;
  const obj5 = require("module_1652");
  const items2 = [closure_16, sharedValue, require("conjureHomeCarouselFan").CONJURE_HOME_CAROUSEL_SPEED_PX_PER_SECOND, result];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  [tmp11, tmp12, tmp13, tmp14] = items2;
  class ConjureHomeCarouselTsx2 {
    constructor(arg0) {
      num = onScreen.timeSincePreviousFrame;
      if (num == null) {
        num = 0;
      }
      result = closure_0.set((closure_0.get() + closure_1 * num / 1000) % closure_2);
      return;
    }
  }
  const items3 = [tmp12, tmp13, tmp14];
  ConjureHomeCarouselTsx2.__closure = items3;
  ConjureHomeCarouselTsx2.__workletHash = 453717571992;
  ConjureHomeCarouselTsx2.__initData = tmp11;
  frameCallback = require("module_1652").useFrameCallback(ConjureHomeCarouselTsx2, false);
  onScreen = !stateFromStores;
  if (!stateFromStores) {
    onScreen = stateFromStores1;
  }
  if (onScreen) {
    onScreen = isFocused;
  }
  if (onScreen) {
    onScreen = onScreen.onScreen;
  }
  if (onScreen) {
    onScreen = first > 0;
  }
  const items4 = [frameCallback, onScreen];
  const effect = obj.useEffect(() => {
    frameCallback.setActive(onScreen);
  }, items4);
  const obj7 = { style: tmp.carousel, accessible: true, accessibilityLabel: null, onLayout: null, children: null };
  const intl = tmp2(1113).intl;
  obj7.accessibilityLabel = intl.string(_modDef3995.Qc4S39);
  obj7.onLayout = function onLayout(nativeEvent) {
    return _undefined2(nativeEvent.nativeEvent.layout.width);
  };
  let mapped = null;
  if (first > 0) {
    mapped = memo.map((inspiration, index) => React7(closure_15, { inspiration, index, count: _undefined.length, offset: sharedValue, viewportWidth }, inspiration.id));
  }
  obj7.children = mapped;
  return closure_9(onScreen, obj7);
});
export const CONJURE_HOME_CAROUSEL_ROOM_BELOW = PX_24;