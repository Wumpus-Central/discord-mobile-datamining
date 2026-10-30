// discord_app/modules/conjure/home/native/ConjureHomeCarousel.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import conjureHomeCarouselFan from "../conjureHomeCarouselFan.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../../a11y/AccessibilityStore.tsx";
import AppStateStore from "../../../../stores/native/AppStateStore.tsx";

require = fn;
const View = fn(17).View;
const AppStates = fn(1072).AppStates;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const STEP = 240 + nativeDefault.space.PX_24;
const sum = 36 + 2 * nativeDefault.space.PX_6 + 2;
const sum1 = sum + nativeDefault.space.PX_12;
const PX_24 = nativeDefault.space.PX_24;
let obj = {
  games: fn(9707).GameControllerIcon,
  apps: fn(8670).AppsIcon,
  profile_widget: fn(12783).WidgetsIcon,
  automod: fn(11255).ShieldIcon,
  chat_bot: fn(12408).RobotIcon,
};
const createStyles = fn(5009);
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
let closure_13 = createStyles.createStyles(obj2);
const __initData = {
  code: 'function ConjureHomeCarouselTsx1(){const{wrapConjureHomeCarouselDistance,index,STEP,offset,loop,conjureHomeCarouselFan,viewportWidth,CARD_WIDTH}=this.__closure;const distance=wrapConjureHomeCarouselDistance(index*STEP,offset.get(),loop);const{angleDeg:angleDeg,dropPx:dropPx}=conjureHomeCarouselFan(distance/STEP,STEP);return{transform:[{translateX:viewportWidth/2-CARD_WIDTH/2+distance},{translateY:dropPx},{rotate:angleDeg+"deg"}]};}',
};
let closure_15 = noop.memo(function ConjureHomeCarouselItem(offset) {
  ({ inspiration, index } = offset);
  offset = offset.offset;
  const viewportWidth = offset.viewportWidth;
  const tmp = closure_13();
  let result = STEP * offset.count;
  c3 = result;
  obj = index(viewportWidth[14]);
  const fn = function u() {
    const result = index * closure_11;
    const result1 = conjureHomeCarouselFan.wrapConjureHomeCarouselDistance(result, offset.get(), c3);
    const result2 = conjureHomeCarouselFan.conjureHomeCarouselFan(result1 / closure_11, closure_11);
    const obj3 = { transform: null };
    const items = [{ translateX: viewportWidth / 2 - 120 + result1 }, { translateY: result2.dropPx }];
    const obj4 = { translateX: viewportWidth / 2 - 120 + result1 };
    items[2] = { rotate: "" + result2.angleDeg + "deg" };
    obj3.transform = items;
    return obj3;
  };
  fn.__closure = {
    wrapConjureHomeCarouselDistance: index(viewportWidth[15]).wrapConjureHomeCarouselDistance,
    index,
    STEP,
    offset,
    loop: result,
    conjureHomeCarouselFan: index(viewportWidth[15]).conjureHomeCarouselFan,
    viewportWidth,
    CARD_WIDTH: 240,
  };
  fn.__workletHash = 10891519667070;
  fn.__initData = __initData;
  const animatedStyle = obj.useAnimatedStyle(fn);
  let obj3 = { style: null, children: null };
  let items = [tmp.item, animatedStyle];
  obj3.style = items;
  let obj4 = { style: tmp.promptRow, children: null };
  const obj5 = { style: tmp.avatar, source: null };
  let obj2 = {
    wrapConjureHomeCarouselDistance: index(viewportWidth[15]).wrapConjureHomeCarouselDistance,
    index,
    STEP,
    offset,
    loop: result,
    conjureHomeCarouselFan: index(viewportWidth[15]).conjureHomeCarouselFan,
    viewportWidth,
    CARD_WIDTH: 240,
  };
  const tmp4 = offset(viewportWidth[16]);
  const obj6 = index(viewportWidth[17]);
  obj5.source = obj6.makeSource(index(viewportWidth[17]).getDefaultAvatarURL(undefined, inspiration.authorAvatarSeed));
  const items1 = [closure_9(tmp4, obj5)];
  const obj8 = {
    style: tmp.bubble,
    children: closure_9(index(viewportWidth[18]).Text, {
      variant: "text-sm/medium",
      color: "text-strong",
      lineClamp: 2,
      children: inspiration.shortPrompt,
    }),
  };
  items1[1] = closure_9(View, obj8);
  obj4.children = items1;
  const items2 = [closure_10(View, obj4)];
  const obj10 = { style: tmp.card, children: null };
  const obj11 = { style: tmp.thumbnail, children: null };
  const size = { asset: offset(viewportWidth[20])[inspiration.id], width: "100%", height: "100%" };
  obj11.children = closure_9(index(viewportWidth[19]).LocalSvg, size);
  const items3 = [closure_9(View, obj11)];
  const obj12 = { style: tmp.footer, children: null };
  const obj13 = { style: tmp.categoryIcon, children: null };
  const obj7 = index(viewportWidth[17]);
  const obj9 = { variant: "text-sm/medium", color: "text-strong", lineClamp: 2, children: inspiration.shortPrompt };
  obj13.children = closure_9(obj[inspiration.category], {
    size: "sm",
    color: offset(viewportWidth[7]).colors.ICON_STRONG,
  });
  const items4 = [closure_9(View, obj13)];
  const obj15 = { style: tmp.footerText, children: null };
  const items5 = [
    closure_9(index(viewportWidth[18]).Text, {
      variant: "text-md/semibold",
      color: "text-strong",
      lineClamp: 1,
      children: inspiration.name,
    }),
  ];
  const obj17 = { variant: "text-sm/normal", color: "text-subtle", lineClamp: 1, children: null };
  const obj14 = { size: "sm", color: offset(viewportWidth[7]).colors.ICON_STRONG };
  const obj16 = { variant: "text-md/semibold", color: "text-strong", lineClamp: 1, children: inspiration.name };
  obj17.children = index(viewportWidth[21]).conjureHomeCategoryLabel(inspiration.category);
  items5[1] = closure_9(index(viewportWidth[18]).Text, obj17);
  obj15.children = items5;
  items4[1] = closure_10(View, obj15);
  obj12.children = items4;
  items3[1] = closure_10(View, obj12);
  obj10.children = items3;
  items2[1] = closure_10(View, obj10);
  obj3.children = items2;
  return closure_10(offset(viewportWidth[14]).View, obj3);
});
const __initData2 = {
  code: "function ConjureHomeCarouselTsx2(frame){const{offset,CONJURE_HOME_CAROUSEL_SPEED_PX_PER_SECOND,loop}=this.__closure;var _frame$timeSincePrevi;const elapsed=(_frame$timeSincePrevi=frame.timeSincePreviousFrame)!==null&&_frame$timeSincePrevi!==void 0?_frame$timeSincePrevi:0;offset.set((offset.get()+CONJURE_HOME_CAROUSEL_SPEED_PX_PER_SECOND*elapsed/1000)%loop);}",
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
  let sharedValue;
  noop = undefined;
  let frameCallback;
  onScreen = undefined;
  const memo = noop.useMemo(() => memo(12937).conjureHomeInspirationEntries(), []);
  obj = noop;
  const tmp = closure_13();
  const tmp2 = memo;
  const items = [onScreen];
  const stateFromStores = memo(504).useStateFromStores(items, () => onScreen.useReducedMotion);
  const obj2 = memo(504);
  const items1 = [AppStateStore];
  const stateFromStores1 = memo(504).useStateFromStores(items1, () => state.getState() === constants.ACTIVE);
  const obj3 = memo(504);
  const isFocused = memo(1499).useIsFocused();
  const tmp7 = sharedValue(noop.useState(0), 2);
  const viewportWidth = tmp7[0];
  dependencyMap = tmp7[1];
  const obj4 = memo(1499);
  sharedValue = memo(5090).useSharedValue(0);
  let result = closure_11 * memo.length;
  noop = result;
  const obj5 = memo(5090);
  class C {
    constructor(arg0) {
      num = onScreen.timeSincePreviousFrame;
      if (num == null) {
        num = 0;
      }
      value = closure_3.get();
      result = closure_3.set(
        (value + (closure_0(closure_2[15]).CONJURE_HOME_CAROUSEL_SPEED_PX_PER_SECOND * num) / 1000) % closure_4,
      );
      return;
    }
  }
  const obj6 = memo(5090);
  C.__closure = {
    offset: sharedValue,
    CONJURE_HOME_CAROUSEL_SPEED_PX_PER_SECOND: memo(12785).CONJURE_HOME_CAROUSEL_SPEED_PX_PER_SECOND,
    loop: result,
  };
  C.__workletHash = 7470635772737;
  C.__initData = __initData2;
  frameCallback = obj6.useFrameCallback(C, false);
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
    onScreen = viewportWidth > 0;
  }
  const items2 = [frameCallback, onScreen];
  const effect = obj.useEffect(() => {
    frameCallback.setActive(onScreen);
  }, items2);
  const obj8 = { style: tmp.carousel, accessible: true, accessibilityLabel: null, onLayout: null, children: null };
  const intl = tmp2(1114).intl;
  obj8.accessibilityLabel = intl.string(viewportWidth(3865).Qc4S39);
  obj8.onLayout = function onLayout(nativeEvent) {
    return dependencyMap(nativeEvent.nativeEvent.layout.width);
  };
  let mapped = null;
  if (viewportWidth > 0) {
    mapped = memo.map((inspiration, index) =>
      React7(
        closure_15,
        { inspiration, index, count: memo.length, offset: sharedValue, viewportWidth },
        inspiration.id,
      ),
    );
  }
  obj8.children = mapped;
  return closure_9(frameCallback, obj8);
});
export const CONJURE_HOME_CAROUSEL_ROOM_BELOW = PX_24;
