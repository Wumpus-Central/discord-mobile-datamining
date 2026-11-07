// === Module 9711: GameProfileFloatingNav ===

// Module 9711 (GameProfileFloatingNav)
import nativeDefault from "native" /* 575 */;
import _modDef671 from "module_671" /* 671 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1627 */;
import Text_Text from "Text/Text" /* 5751 */;
import native from "native" /* 9072 */;
import YouBannerDecorations from "YouBannerDecorations" /* 9712 */;
import YouScreenNavIconMeasurer from "YouScreenNavIconMeasurer" /* 14950 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
function NavItem(arg0) {
  ({ label, onLayout } = arg0);
  ({ IconComponent, selected, onPress, style, labelStyle } = arg0);
  const youScreenNavIconMeasurement = YouScreenNavIconMeasurer.useYouScreenNavIconMeasurement();
  items = [onLayout];
  ({ containerRef, width } = youScreenNavIconMeasurement);
  const callback = noop.useCallback((nativeEvent) => {
    const layout = nativeEvent.nativeEvent.layout;
    onLayout({ x: layout.x, width: layout.width });
  }, items);
  const obj2 = { ref: containerRef, style: null, accessibilityRole: "tab", accessibilityLabel: label, accessibilityState: { selected }, onPress, onLayout: callback, hitSlop: nativeDefault.space.PX_8, children: null };
  const items1 = [style, { width }];
  obj2.style = items1;
  const items2 = [metroImportDefault(IconComponent, { size: "md", color: nativeDefault.colors.ICON_STRONG }), metroImportDefault(Text_Text.Text, { style: labelStyle, variant: "body-xs/semibold", color: "text-strong", lineClamp: 1, maxFontSizeMultiplier: 2, children: label })];
  obj2.children = items2;
  return React5(native.PressableScale, obj2);
}
function FloatingNav(navigation) {
  navigation = navigation.navigation;
  noop = undefined;
  const selectedTab = navigation.selectedTab;
  _require = selectedTab;
  const tmp3 = closure_14(useSafeAreaInsetsDefault().bottom);
  const isGameProfileCommunitiesMobileEnabled = require("GameProfileCommunitiesMobileExperiment").useIsGameProfileCommunitiesMobileEnabled({ location: "GameProfileFloatingNav" });
  let obj = require("GameProfileCommunitiesMobileExperiment");
  const token = require("useToken").useToken(nativeDefault.colors.BACKGROUND_BASE_LOWEST);
  easing = token;
  items = [token];
  const memo = noop.useMemo(() => {
    const obj = _modDef671(c3);
    items = [_modDef671(c3).alpha(0).hex(), c3];
    return items;
  }, items);
  let obj2 = require("useToken");
  [tmp9, c4] = easing(noop.useState({}), 2);
  closure_5 = noop.useCallback((arg0, arg1) => {
    closure_0 = arg0;
    let x = arg1;
    _undefined2((arg0) => {
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
  require("module_1652");
  const items1 = [closure_16, tmp9[selectedTab], require("timing/timing").withTiming, 320, closure_13];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  easing = undefined;
  [tmp11, tmp12, tmp13, tmp14, tmp15] = items1;
  class GameProfileFloatingNavTsx1 {
    constructor() {
      tmp = closure_0;
      if (null == closure_0) {
        obj = { opacity: 0 };
      } else {
        obj = { opacity: 1, width: null, transform: null };
        tmp2 = closure_1;
        obj1 = { duration: null, easing: null };
        tmp3 = closure_2;
        obj1.duration = closure_2;
        tmp4 = closure_3;
        obj1.easing = closure_3;
        obj.width = closure_1(tmp.width, obj1);
        obj5 = { translateX: null };
        obj6 = { duration: null, easing: null };
        obj6.duration = closure_2;
        obj6.easing = closure_3;
        obj5.translateX = closure_1(tmp.x, obj6);
        items = [];
        items[0] = obj5;
        obj.transform = items;
      }
      return obj;
    }
  }
  const items2 = [tmp12, tmp13, tmp14, tmp15];
  GameProfileFloatingNavTsx1.__closure = items2;
  GameProfileFloatingNavTsx1.__workletHash = 15050593289877;
  GameProfileFloatingNavTsx1.__initData = tmp11;
  if (isGameProfileCommunitiesMobileEnabled) {
    let obj3 = { tab: tmp4(9446).GameProfileNavTab.OVERVIEW, IconComponent: tmp4(9817).GameControllerIcon, label: null };
    const intl = tmp4(1113).intl;
    obj3.label = intl.string(tmp4(1113).t.qHmbyh);
    const items3 = [obj3, ];
    let obj4 = { tab: tmp4(9446).GameProfileNavTab.COMMUNITIES, IconComponent: tmp4(8732).GroupIcon, label: null };
    const intl2 = tmp4(1113).intl;
    obj4.label = intl2.string(tmp4(1113).t["3xFZEo"]);
    items3[1] = obj4;
    const obj5 = { style: tmp3.wrap, pointerEvents: "box-none", onLayout: navigation.onLayout, children: null };
    const obj6 = { colors: memo, style: tmp3.scrim, pointerEvents: "none" };
    const items4 = [closure_7(tmp(5715), obj6), ];
    const obj7 = { style: tmp3.pill, accessibilityRole: "tablist", children: null };
    const obj8 = { style: tmp3.pillBlur, pointerEvents: "none", children: closure_7(tmp4(9072).BackgroundBlurFill, {}) };
    const items5 = [closure_7(closure_5, obj8), ];
    const obj9 = { style: tmp3.pillRow, children: null };
    const obj10 = { style: null, pointerEvents: "none" };
    const items6 = [tmp3.selection, tmp16];
    obj10.style = items6;
    const items7 = [closure_7(tmp(1652).View, obj10), ];
    const obj11 = {
      children: items3.map((IconComponent) => {
          const tab = IconComponent.tab;
          return closure_1_7(NavItem, {
            IconComponent: IconComponent.IconComponent,
            label: IconComponent.label,
            selected: tab === tab,
            onPress() {
              return c1(tab);
            },
            onLayout(arg0) {
              return closure_5(tab, arg0);
            },
            style: duration.item,
            labelStyle: duration.label
          }, tab);
        })
    };
    items7[1] = closure_7(tmp4(14950).YouScreenNavIconMeasurer, obj11);
    obj9.children = items7;
    items5[1] = closure_8(closure_5, obj9);
    obj7.children = items5;
    items4[1] = closure_8(closure_5, obj7);
    obj5.children = items4;
    return closure_8(closure_5, obj5);
  } else {
    return null;
  }
  const tmp8 = easing(noop.useState({}), 2);
}
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, StyleSheet: closure_6 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroImportDefault, jsxs: closure_8 } = jsxProd);
const PX_4 = nativeDefault.space.PX_4;
const PX_8 = nativeDefault.space.PX_8;
const PX_48 = nativeDefault.space.PX_48;
const PX_6 = nativeDefault.space.PX_6;
const Easing = fn(1652).Easing;
let closure_13 = Easing.inOut(fn(1652).Easing.cubic);
const createStyles = fn(5140);
let closure_14 = createStyles.createStyles((bottom) => {
  const obj = { wrap: null, scrim: null, pill: null, pillBlur: null, pillRow: null, selection: null, item: null, label: null };
  const obj2 = {};
  const merged = Object.assign(timestampProducer.absoluteFillObject);
  obj2.top = undefined;
  obj2.alignItems = "center";
  obj.wrap = obj2;
  const merged1 = Object.assign(timestampProducer.absoluteFillObject);
  obj.scrim = {};
  const obj4 = { marginBottom: YouBannerDecorations.getFloatingNavBottomMargin(bottom), padding: PX_4, borderRadius: nativeDefault.radii.lg, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG, borderColor: nativeDefault.colors.BORDER_MUTED, borderWidth: 1, flexDirection: "row", alignItems: "center" };
  const merged2 = Object.assign(nativeDefault.shadows.SHADOW_HIGH);
  obj.pill = obj4;
  const obj6 = {};
  const merged3 = Object.assign(timestampProducer.absoluteFillObject);
  obj6.borderRadius = nativeDefault.radii.lg;
  obj6.overflow = "hidden";
  obj.pillBlur = obj6;
  obj.pillRow = { flexDirection: "row", alignItems: "center", gap: PX_8 };
  const rect = { position: "absolute", top: 0, bottom: 0, insetInlineStart: 0, borderRadius: nativeDefault.radii.md, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
  obj.selection = rect;
  const obj3 = {};
  const obj7 = { flexDirection: "row", alignItems: "center", gap: PX_8 };
  obj.item = { borderRadius: nativeDefault.modules.button.BORDER_RADIUS, flexDirection: "column", alignItems: "center", justifyContent: "center", minWidth: PX_48, padding: PX_6 };
  const obj8 = { borderRadius: nativeDefault.modules.button.BORDER_RADIUS, flexDirection: "column", alignItems: "center", justifyContent: "center", minWidth: PX_48, padding: PX_6 };
  obj.label = { marginTop: nativeDefault.space.PX_4, textAlign: "center" };
  return obj;
});
let closure_16 = { code: "(function GameProfileFloatingNavTsx1(){let[selectedLayout,withTiming,SELECTION_MS,SELECTION_EASE]=this.__closure;if(selectedLayout==null){return{opacity:0};}return{opacity:1,width:withTiming(selectedLayout.width,{duration:SELECTION_MS,easing:SELECTION_EASE}),transform:[{translateX:withTiming(selectedLayout.x,{duration:SELECTION_MS,easing:SELECTION_EASE})}]};})" };
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
    tmp2 = metroImportDefault(FloatingNav, obj);
  }
  return tmp2;
};