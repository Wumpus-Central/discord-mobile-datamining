// discord_app/modules/conjure/home/native/ConjureHomeCarousel.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import AvatarUtils from "../../../../utils/AvatarUtils.tsx";
import _mod1652 from "../../../../../_runtime/metro/01652__.js";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import FastImageDefault from "../../../../components_native/common/FastImage.tsx";
import useMeasuredLayoutDefault from "../../../screen/native/useMeasuredLayout.tsx";
import conjureHomeCarouselFan from "../conjureHomeCarouselFan.tsx";
import SvgCss from "../../../../../_runtime/13052_SvgCss.js";
import conjureHomeInspirationArtDefault from "conjureHomeInspirationArt.tsx";
import conjureHomeInspirationEntries from "../conjureHomeInspirationEntries.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../../a11y/AccessibilityStore.tsx";
import AppStateStore from "../../../../stores/native/AppStateStore.tsx";

const require = globalThis.__r;
const _modDef1652 = _mod1652;

const _modDef4028 = tmp7(4028);
require = fn;
const View = fn(17).View;
const AppStates = fn(1072).AppStates;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
let closure_10 = 240 + nativeDefault.space.PX_24;
const sum = 36 + 2 * nativeDefault.space.PX_6 + 2;
const sum1 = sum + nativeDefault.space.PX_12;
const PX_24 = nativeDefault.space.PX_24;
let obj = {
  games: fn(9823).GameControllerIcon,
  apps: fn(8755).AppsIcon,
  profile_widget: fn(13049).WidgetsIcon,
  overlay_widget: fn(9681).ScreenIcon,
  automod: fn(11430).ShieldIcon,
  chat_bot: fn(12277).RobotIcon,
};
const createStyles = fn(5142);
let obj2 = {
  carousel: { height: sum1 + 135 + 54 + PX_24, overflow: "hidden" },
  item: null,
  promptRow: null,
  avatar: null,
  bubble: null,
  card: null,
  thumbnail: null,
  footer: null,
  categoryIcon: null,
  footerText: null,
};
const rect = { position: "absolute", top: 0, left: 0, width: 240, gap: nativeDefault.space.PX_12 };
obj2.item = rect;
obj2.promptRow = { flexDirection: "row", alignItems: "flex-start", gap: nativeDefault.space.PX_8 };
let size = {
  width: nativeDefault.space.PX_24,
  height: nativeDefault.space.PX_24,
  borderRadius: nativeDefault.radii.round,
};
obj2.avatar = size;
let obj4 = { height: sum1 + 135 + 54 + PX_24, overflow: "hidden" };
let obj5 = { flexDirection: "row", alignItems: "flex-start", gap: nativeDefault.space.PX_8 };
obj2.bubble = {
  flex: 1,
  height: sum,
  paddingVertical: nativeDefault.space.PX_6,
  paddingHorizontal: nativeDefault.space.PX_10,
  borderWidth: 1,
  borderColor: nativeDefault.colors.BORDER_SUBTLE,
  borderRadius: nativeDefault.radii.md,
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
};
let obj6 = {
  flex: 1,
  height: sum,
  paddingVertical: nativeDefault.space.PX_6,
  paddingHorizontal: nativeDefault.space.PX_10,
  borderWidth: 1,
  borderColor: nativeDefault.colors.BORDER_SUBTLE,
  borderRadius: nativeDefault.radii.md,
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
};
obj2.card = {
  overflow: "hidden",
  borderWidth: 1,
  borderColor: nativeDefault.colors.BORDER_SUBTLE,
  borderRadius: nativeDefault.radii.md,
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
};
let obj7 = {
  overflow: "hidden",
  borderWidth: 1,
  borderColor: nativeDefault.colors.BORDER_SUBTLE,
  borderRadius: nativeDefault.radii.md,
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
};
obj2.thumbnail = { height: 135, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG };
let obj8 = { height: 135, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG };
obj2.footer = {
  flexDirection: "row",
  alignItems: "center",
  gap: nativeDefault.space.PX_10,
  padding: nativeDefault.space.PX_10,
};
const size1 = {
  width: nativeDefault.space.PX_32,
  height: nativeDefault.space.PX_32,
  alignItems: "center",
  justifyContent: "center",
  borderRadius: nativeDefault.radii.sm,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL,
};
obj2.categoryIcon = size1;
obj2.footerText = { flex: 1 };
let closure_12 = createStyles.createStyles(obj2);
let closure_13 = {
  code: '(function ConjureHomeCarouselTsx1(){let[wrapConjureHomeCarouselDistance,index,STEP,offset,loop,conjureHomeCarouselFan,viewportWidth,CARD_WIDTH]=this.__closure;const distance=wrapConjureHomeCarouselDistance(index*STEP,offset.get(),loop);const{angleDeg:angleDeg,dropPx:dropPx}=conjureHomeCarouselFan(distance/STEP,STEP);return{transform:[{translateX:viewportWidth/2-CARD_WIDTH/2+distance},{translateY:dropPx},{rotate:angleDeg+"deg"}]};})',
};
let closure_14 = noop.memo(function ConjureHomeCarouselItem(inspiration) {
  inspiration = inspiration.inspiration;
  ({ index, count, offset, viewportWidth } = inspiration);
  const tmp = closure_12();
  obj = _mod1652;
  items = [
    closure_13,
    conjureHomeCarouselFan.wrapConjureHomeCarouselDistance,
    index,
    closure_10,
    offset,
    closure_10 * count,
    conjureHomeCarouselFan.conjureHomeCarouselFan,
    viewportWidth,
    240,
  ];
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
      items = [, ,];
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
  const items3 = [React5(tmp14, obj4)];
  const obj5 = {
    style: tmp.bubble,
    children: React5(Text_Text.Text, {
      variant: "body-sm/medium",
      color: "text-strong",
      lineClamp: 2,
      children: inspiration.shortPrompt,
    }),
  };
  items3[1] = React5(View, obj5);
  obj3.children = items3;
  const items4 = [React6(View, obj3)];
  const obj7 = { style: tmp.card, children: null };
  const obj8 = { style: tmp.thumbnail, children: null };
  const size = { asset: conjureHomeInspirationArtDefault[inspiration.id], width: "100%", height: "100%" };
  obj8.children = React5(SvgCss.LocalSvg, size);
  const items5 = [React5(View, obj8)];
  const obj9 = { style: tmp.footer, children: null };
  const obj10 = { style: tmp.categoryIcon, children: null };
  const obj6 = { variant: "body-sm/medium", color: "text-strong", lineClamp: 2, children: inspiration.shortPrompt };
  const tmp2Result3 = AvatarUtils;
  obj10.children = React5(obj[inspiration.category], { size: "sm", color: nativeDefault.colors.ICON_STRONG });
  const items6 = [React5(View, obj10)];
  const obj12 = { style: tmp.footerText, children: null };
  const items7 = [
    React5(Text_Text.Text, {
      variant: "body-md/semibold",
      color: "text-strong",
      lineClamp: 1,
      children: inspiration.name,
    }),
  ];
  const obj14 = { variant: "body-sm/normal", color: "text-subtle", lineClamp: 1, children: null };
  const obj11 = { size: "sm", color: nativeDefault.colors.ICON_STRONG };
  const obj13 = { variant: "body-md/semibold", color: "text-strong", lineClamp: 1, children: inspiration.name };
  obj14.children = conjureHomeInspirationEntries.conjureHomeCategoryLabel(inspiration.category);
  items7[1] = React5(Text_Text.Text, obj14);
  obj12.children = items7;
  items6[1] = React6(View, obj12);
  obj9.children = items6;
  items5[1] = React6(View, obj9);
  obj7.children = items5;
  items4[1] = React6(View, obj7);
  obj2.children = items4;
  return React6(_modDef1652.View, obj2);
});
let closure_15 = {
  code: "(function ConjureHomeCarouselTsx2(frame){let[offset,CONJURE_HOME_CAROUSEL_SPEED_PX_PER_SECOND,loop]=this.__closure;var _frame$timeSincePrevi;const elapsed=(_frame$timeSincePrevi=frame.timeSincePreviousFrame)!==null&&_frame$timeSincePrevi!==void 0?_frame$timeSincePrevi:0;offset.set((offset.get()+CONJURE_HOME_CAROUSEL_SPEED_PX_PER_SECOND*elapsed/1000)%loop);})",
};
let obj9 = {
  flexDirection: "row",
  alignItems: "center",
  gap: nativeDefault.space.PX_10,
  padding: nativeDefault.space.PX_10,
};
size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/home/native/ConjureHomeCarousel.tsx");

export default noop.memo(function ConjureHomeCarousel(onScreen) {
  importDefault = undefined;
  dependencyMap = undefined;
  let frameCallback;
  onScreen = undefined;
  const memo = frameCallback.useMemo(() => _undefined(offset[21]).conjureHomeInspirationEntries(), []);
  _require = memo;
  obj = frameCallback;
  const tmp = closure_12();
  items = [AccessibilityStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const obj2 = require("initialize");
  const items1 = [AppStateStore];
  const stateFromStores1 = require("initialize").useStateFromStores(
    items1,
    () => state.getState() === constants.ACTIVE,
  );
  const obj3 = require("initialize");
  const isFocused = require("Link").useIsFocused();
  const tmp8 = useMeasuredLayoutDefault();
  const width = tmp8.width;
  let num = 0;
  ({ ref, onLayout } = tmp8);
  if (undefined !== width) {
    num = width;
  }
  importDefault = num;
  const obj4 = require("Link");
  const sharedValue = require("../../../../../_runtime/metro/01652__.js").useSharedValue(0);
  let result = closure_10 * memo.length;
  const tmp2Result = require("../../../../../_runtime/metro/01652__.js");
  const items2 = [
    closure_15,
    sharedValue,
    require("conjureHomeCarouselFan").CONJURE_HOME_CAROUSEL_SPEED_PX_PER_SECOND,
    result,
  ];
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
      result = closure_0.set((closure_0.get() + (closure_1 * num) / 1000) % closure_2);
      return;
    }
  }
  const items3 = [tmp12, tmp13, tmp14];
  ConjureHomeCarouselTsx2.__closure = items3;
  ConjureHomeCarouselTsx2.__workletHash = 453717571992;
  ConjureHomeCarouselTsx2.__initData = tmp11;
  frameCallback = require("../../../../../_runtime/metro/01652__.js").useFrameCallback(ConjureHomeCarouselTsx2, false);
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
    onScreen = num > 0;
  }
  const items4 = [frameCallback, onScreen];
  const effect = obj.useEffect(() => {
    frameCallback.setActive(onScreen);
  }, items4);
  const obj5 = {
    style: tmp.carousel,
    accessible: true,
    accessibilityLabel: null,
    ref: null,
    onLayout: null,
    children: null,
  };
  const intl = tmp2(1113).intl;
  obj5.accessibilityLabel = intl.string(_modDef4028.Qc4S39);
  obj5.ref = ref;
  obj5.onLayout = onLayout;
  let mapped = null;
  if (num > 0) {
    mapped = memo.map((inspiration, index) =>
      React5(closure_14, { inspiration, index, count: _undefined.length, offset, viewportWidth }, inspiration.id),
    );
  }
  obj5.children = mapped;
  return closure_8(onScreen, obj5);
});
export const CONJURE_HOME_CAROUSEL_ROOM_BELOW = PX_24;
