// discord_app/modules/game_profile/native/profile_sections/GameProfileFloatingNav.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import _modDef671 from "../../../../../_runtime/metro/00671__.js";
import timing from "../../../../design/animation/reanimated/timing/timing.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import native from "../../../../design/components/experimental/native.tsx";
import YouBannerDecorations from "../../../main_tabs_v2/native/tabs/you/YouBannerDecorations.tsx";
import YouScreenNavIconMeasurer from "../../../main_tabs_v2/native/tabs/you/YouScreenNavIconMeasurer.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
function NavItem(arg0) {
  ({ label, onLayout } = arg0);
  ({ IconComponent, selected, onPress, style, labelStyle } = arg0);
  const youScreenNavIconMeasurement = YouScreenNavIconMeasurer.useYouScreenNavIconMeasurement();
  const items = [onLayout];
  ({ containerRef, width } = youScreenNavIconMeasurement);
  const callback = noop.useCallback((nativeEvent) => {
    const layout = nativeEvent.nativeEvent.layout;
    onLayout({ x: layout.x, width: layout.width });
  }, items);
  const obj2 = {
    ref: containerRef,
    style: null,
    accessibilityRole: "tab",
    accessibilityLabel: label,
    accessibilityState: { selected },
    onPress,
    onLayout: callback,
    hitSlop: nativeDefault.space.PX_8,
    children: null,
  };
  const items1 = [style, { width }];
  obj2.style = items1;
  const items2 = [
    React5(IconComponent, { size: "md", color: nativeDefault.colors.ICON_STRONG }),
    React5(Text_Text.Text, {
      style: labelStyle,
      variant: "text-xs/semibold",
      color: "text-strong",
      lineClamp: 1,
      maxFontSizeMultiplier: 2,
      children: label,
    }),
  ];
  obj2.children = items2;
  return React6(native.PressableScale, obj2);
}
function FloatingNav(navigation) {
  navigation = navigation.navigation;
  noop = undefined;
  const selectedTab = navigation.selectedTab;
  const selectTab = navigation.selectTab;
  const tmp3 = closure_14(selectTab(1626)().bottom);
  dependencyMap = tmp3;
  const isGameProfileCommunitiesMobileEnabled = selectedTab(14680).useIsGameProfileCommunitiesMobileEnabled({
    location: "GameProfileFloatingNav",
  });
  let obj = selectedTab(14680);
  const token = selectedTab(5591).useToken(selectTab(575).colors.BACKGROUND_BASE_LOWEST);
  let items = [token];
  const memo = noop.useMemo(() => {
    const obj = _modDef671(token);
    const items = [_modDef671(token).alpha(0).hex(), token];
    return items;
  }, items);
  let obj2 = selectedTab(5591);
  [tmp9, c4] = token(noop.useState({}), 2);
  closure_5 = noop.useCallback((arg0, arg1) => {
    closure_0 = arg0;
    let x = arg1;
    _undefined((arg0) => {
      let x;
      if (arg0[closure_0] != null) {
        x = tmp2.x;
      }
      if (x !== x.x) {
        const obj = {};
        const merged = Object.assign(arg0);
        obj[closure_0] = x;
        let tmp6 = obj;
      } else {
        let width;
        if (tmp2 != null) {
          width = tmp2.width;
        }
        tmp6 = arg0;
      }
      return tmp6;
    });
  }, []);
  const styles = tmp10;
  selectedTab(5090);
  const fn = function c() {
    if (null == styles) {
      let obj = { opacity: 0 };
    } else {
      obj = { opacity: 1, width: null, transform: null };
      const obj3 = { duration: 320, easing };
      obj.width = timing.withTiming(styles.width, obj3);
      const obj4 = { translateX: null };
      const obj6 = { duration: 320, easing };
      obj4.translateX = timing.withTiming(styles.x, obj6);
      const items = [obj4];
      obj.transform = items;
    }
    return obj;
  };
  const tmp8 = token(noop.useState({}), 2);
  fn.__closure = {
    selectedLayout: tmp9[selectedTab],
    withTiming: selectedTab(5249).withTiming,
    SELECTION_MS: 320,
    SELECTION_EASE,
  };
  fn.__workletHash = 14859052305644;
  fn.__initData = __initData;
  if (isGameProfileCommunitiesMobileEnabled) {
    let obj4 = {
      tab: tmp4(9345).GameProfileNavTab.OVERVIEW,
      IconComponent: tmp4(9707).GameControllerIcon,
      label: null,
    };
    const intl = tmp4(1114).intl;
    obj4.label = intl.string(tmp4(1114).t.qHmbyh);
    const items1 = [obj4];
    let obj5 = { tab: tmp4(9345).GameProfileNavTab.COMMUNITIES, IconComponent: tmp4(8653).GroupIcon, label: null };
    const intl2 = tmp4(1114).intl;
    obj5.label = intl2.string(tmp4(1114).t["3xFZEo"]);
    items1[1] = obj5;
    let obj6 = { style: tmp3.wrap, pointerEvents: "box-none", onLayout: navigation.onLayout, children: null };
    const obj7 = { colors: memo, style: tmp3.scrim, pointerEvents: "none" };
    const items2 = [closure_7(tmp(5582), obj7)];
    const obj8 = { style: tmp3.pill, accessibilityRole: "tablist", children: null };
    const obj9 = {
      style: tmp3.pillBlur,
      pointerEvents: "none",
      children: closure_7(tmp4(8983).BackgroundBlurFill, {}),
    };
    const items3 = [closure_7(closure_5, obj9)];
    const obj10 = { style: tmp3.pillRow, children: null };
    const obj11 = { style: null, pointerEvents: "none" };
    const items4 = [tmp3.selection, tmp12];
    obj11.style = items4;
    const items5 = [closure_7(tmp(5090).View, obj11)];
    const obj12 = {
      children: items1.map((IconComponent) => {
        const tab = IconComponent.tab;
        return closure_1_7(
          NavItem,
          {
            IconComponent: IconComponent.IconComponent,
            label: IconComponent.label,
            selected: tab === tab,
            onPress() {
              return selectTab(tab);
            },
            onLayout(arg0) {
              return closure_5(tab, arg0);
            },
            style: closure_2.item,
            labelStyle: closure_2.label,
          },
          tab,
        );
      }),
    };
    items5[1] = closure_7(tmp4(14666).YouScreenNavIconMeasurer, obj12);
    obj10.children = items5;
    items3[1] = closure_8(closure_5, obj10);
    obj8.children = items3;
    items2[1] = closure_8(closure_5, obj8);
    obj6.children = items2;
    return closure_8(closure_5, obj6);
  } else {
    return null;
  }
  let obj3 = {
    selectedLayout: tmp9[selectedTab],
    withTiming: selectedTab(5249).withTiming,
    SELECTION_MS: 320,
    SELECTION_EASE,
  };
}
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, StyleSheet: metroRequire } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const PX_4 = nativeDefault.space.PX_4;
const PX_8 = nativeDefault.space.PX_8;
const PX_48 = nativeDefault.space.PX_48;
const PX_6 = nativeDefault.space.PX_6;
const Easing = fn(5090).Easing;
const SELECTION_EASE = Easing.inOut(fn(5090).Easing.cubic);
const createStyles = fn(5009);
let closure_14 = createStyles.createStyles((bottom) => {
  const obj = {
    wrap: null,
    scrim: null,
    pill: null,
    pillBlur: null,
    pillRow: null,
    selection: null,
    item: null,
    label: null,
  };
  const obj2 = {};
  const merged = Object.assign(timestampProducer.absoluteFillObject);
  obj2.top = undefined;
  obj2.alignItems = "center";
  obj.wrap = obj2;
  const merged1 = Object.assign(timestampProducer.absoluteFillObject);
  obj.scrim = {};
  const obj4 = {
    marginBottom: YouBannerDecorations.getFloatingNavBottomMargin(bottom),
    padding: PX_4,
    borderRadius: nativeDefault.radii.lg,
    backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG,
    borderColor: nativeDefault.colors.BORDER_MUTED,
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
  };
  const merged2 = Object.assign(nativeDefault.shadows.SHADOW_HIGH);
  obj.pill = obj4;
  const obj6 = {};
  const merged3 = Object.assign(timestampProducer.absoluteFillObject);
  obj6.borderRadius = nativeDefault.radii.lg;
  obj6.overflow = "hidden";
  obj.pillBlur = obj6;
  obj.pillRow = { flexDirection: "row", alignItems: "center", gap: PX_8 };
  const rect = {
    position: "absolute",
    top: 0,
    bottom: 0,
    insetInlineStart: 0,
    borderRadius: nativeDefault.radii.md,
    backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
  };
  obj.selection = rect;
  const obj3 = {};
  const obj7 = { flexDirection: "row", alignItems: "center", gap: PX_8 };
  obj.item = {
    borderRadius: nativeDefault.modules.button.BORDER_RADIUS,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minWidth: PX_48,
    padding: PX_6,
  };
  const obj8 = {
    borderRadius: nativeDefault.modules.button.BORDER_RADIUS,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minWidth: PX_48,
    padding: PX_6,
  };
  obj.label = { marginTop: nativeDefault.space.PX_4, textAlign: "center" };
  return obj;
});
const __initData = {
  code: "function GameProfileFloatingNavTsx1(){const{selectedLayout,withTiming,SELECTION_MS,SELECTION_EASE}=this.__closure;if(selectedLayout==null){return{opacity:0};}return{opacity:1,width:withTiming(selectedLayout.width,{duration:SELECTION_MS,easing:SELECTION_EASE}),transform:[{translateX:withTiming(selectedLayout.x,{duration:SELECTION_MS,easing:SELECTION_EASE})}]};}",
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_profile/native/profile_sections/GameProfileFloatingNav.tsx");

export default function GameProfileFloatingNav(game) {
  const merged = Object.assign(game, Object.assign({ game: 0 }));
  const communityGuildIds = game.game.communityGuildIds;
  let num;
  if (communityGuildIds != null) {
    num = communityGuildIds.length;
  }
  if (num == null) {
    num = 0;
  }
  let tmp2 = null;
  if (num >= 3) {
    const obj = {};
    const merged1 = Object.assign(merged);
    tmp2 = React5(FloatingNav, obj);
  }
  return tmp2;
}
