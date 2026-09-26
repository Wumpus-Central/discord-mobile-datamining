// discord_app/modules/game_profile/native/components/GameProfileHeader.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import ReanimatedRexport from "../../../reanimated/ReanimatedRexport.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import LinearGradientDefault from "../../../../../_runtime/05293_LinearGradient.js";
import SKUUtils from "../../../../utils/SKUUtils.tsx";
import useGameProfileHeroBackgroundURLDefault from "../../hooks/useGameProfileHeroBackgroundURL.tsx";
import GameProfileRankPillDefault from "GameProfileRankPill.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const ReanimatedRexportDefault = ReanimatedRexport;

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, Image: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4836);
let obj2 = {
  container: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST },
  artHero: null,
  artHeroImage: null,
  artHeroGradient: null,
  headerContent: null,
  shadowContainer: null,
  coverContainer: null,
  iconContainer: null,
  image: null,
  titleContainer: null,
  textShadow: null,
};
const rect = { width: "100%", position: "absolute", top: 0, bottom: -nativeDefault.space.PX_80, left: 0, right: 0 };
obj2.artHero = rect;
obj2.artHeroImage = { height: "100%", width: "100%", resizeMode: "cover" };
obj2.artHeroGradient = { position: "absolute", top: 0, bottom: 0, left: 0, right: 0 };
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
obj2.headerContent = {
  paddingTop: nativeDefault.space.PX_32,
  paddingHorizontal: nativeDefault.space.PX_16,
  gap: nativeDefault.space.PX_12,
  flexDirection: "row",
  alignItems: "flex-end",
  maxWidth: fn(8167).MOBILE_GAME_PROFILE_MAX_WIDTH,
  alignSelf: "center",
  width: "100%",
};
let obj4 = {
  paddingTop: nativeDefault.space.PX_32,
  paddingHorizontal: nativeDefault.space.PX_16,
  gap: nativeDefault.space.PX_12,
  flexDirection: "row",
  alignItems: "flex-end",
  maxWidth: fn(8167).MOBILE_GAME_PROFILE_MAX_WIDTH,
  alignSelf: "center",
  width: "100%",
};
const merged = Object.assign(nativeDefault.shadows.SHADOW_LOW);
obj2.shadowContainer = { borderRadius: nativeDefault.radii.sm };
let size = {
  width: 85,
  height: 114,
  borderRadius: nativeDefault.radii.sm,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  overflow: "hidden",
};
obj2.coverContainer = size;
const size1 = {
  width: 85,
  height: 85,
  borderRadius: nativeDefault.radii.sm,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  overflow: "hidden",
};
obj2.iconContainer = size1;
obj2.image = { width: "100%", height: "100%" };
obj2.titleContainer = { flex: 1, flexDirection: "column", alignItems: "flex-start" };
let obj5 = { borderRadius: nativeDefault.radii.sm };
obj2.textShadow = {
  textShadowColor: nativeDefault.colors.BLACK,
  textShadowOffset: { width: 0, height: 0 },
  textShadowRadius: 1,
};
let closure_8 = createStyles.createStyles(obj2);
const __initData = {
  code: "function GameProfileHeaderTsx1(){const{effectiveScrollY}=this.__closure;return{top:-Math.max(0,-effectiveScrollY.get())};}",
};
size = fn(2);
const result = size.fileFinishedImporting("modules/game_profile/native/components/GameProfileHeader.tsx");

export default function GameProfileHeader(game) {
  game = game.game;
  ({ scrollY, onHeightMeasured } = game);
  scrollY = undefined;
  const tmp = closure_8();
  if (scrollY == null) {
    scrollY = obj.useSharedValue(0);
  }
  obj = ReanimatedRexport;
  const fn = function _() {
    return { top: -Math.max(0, -scrollY.get()) };
  };
  fn.__closure = { effectiveScrollY: scrollY };
  fn.__workletHash = 1177397229282;
  fn.__initData = __initData;
  const genres = game.genres;
  const animatedStyle = ReanimatedRexport.useAnimatedStyle(fn);
  const mapped = genres.map(SKUUtils.getGenreText);
  const joined = mapped.join(", ");
  const l30Rank = game.l30Rank;
  const tmp7 = useGameProfileHeroBackgroundURLDefault(game, 1024);
  const items = [game];
  const memo = noop.useMemo(() => game.getCoverURL(114), items);
  const items1 = [game];
  const memo1 = noop.useMemo(() => game.getIconURL(114), items1);
  const items2 = [onHeightMeasured];
  const obj2 = {
    style: tmp.container,
    onLayout: noop.useCallback((nativeEvent) => {
      if (onHeightMeasured != null) {
        tmp(nativeEvent.nativeEvent.layout.height);
      }
    }, items2),
    children: null,
  };
  const obj3 = { style: null, children: null };
  const items3 = [tmp.artHero, animatedStyle];
  obj3.style = items3;
  let tmp12 = null != tmp7;
  if (tmp12) {
    const obj4 = { source: null, style: null };
    const obj5 = { uri: tmp7 };
    obj4.source = obj5;
    obj4.style = tmp.artHeroImage;
    tmp12 = timestampProducer(hasOwnProperty, obj4);
  }
  const items4 = [tmp12];
  const obj6 = { colors: null, style: tmp.artHeroGradient };
  const items5 = ["rgba(0,0,0,0.3)", tmp.container.backgroundColor];
  obj6.colors = items5;
  items4[1] = timestampProducer(LinearGradientDefault, obj6);
  obj3.children = items4;
  const items6 = [React5(ReanimatedRexportDefault.View, obj3)];
  const obj7 = { style: tmp.headerContent, children: null };
  const obj8 = { style: tmp.shadowContainer, children: null };
  if (null != memo) {
    const obj9 = { style: tmp.coverContainer, children: null };
    const obj10 = { source: null, style: null };
    const obj11 = { uri: memo };
    obj10.source = obj11;
    obj10.style = tmp.image;
    obj9.children = timestampProducer(hasOwnProperty, obj10);
    let obj12 = obj9;
  } else {
    obj12 = { style: tmp.iconContainer, children: null };
    let tmp15Result = null != memo1;
    if (tmp15Result) {
      const obj13 = { source: null, style: null };
      const obj14 = { uri: memo1 };
      obj13.source = obj14;
      obj13.style = tmp.image;
      tmp15Result = timestampProducer(hasOwnProperty, obj13);
    }
    obj12.children = tmp15Result;
  }
  obj8.children = timestampProducer(React4, obj12);
  const items7 = [timestampProducer(React4, obj8)];
  const obj15 = { style: tmp.titleContainer, children: null };
  let tmp15Result3 = null != l30Rank;
  if (tmp15Result3) {
    const obj16 = { rank: l30Rank };
    tmp15Result3 = timestampProducer(GameProfileRankPillDefault, obj16);
  }
  const items8 = [
    tmp15Result3,
    timestampProducer(Text_Text.Text, {
      variant: "heading-xxl/semibold",
      color: "text-overlay-light",
      lineClamp: 2,
      style: tmp.textShadow,
      children: game.name,
    }),
  ];
  let tmp15Result4 = null;
  if (null != joined) {
    tmp15Result4 = null;
    if ("" !== joined) {
      const obj18 = {
        variant: "text-md/normal",
        color: "text-overlay-light",
        lineClamp: 2,
        style: tmp.textShadow,
        children: joined,
      };
      tmp15Result4 = timestampProducer(Text_Text.Text, obj18);
    }
  }
  items8[2] = tmp15Result4;
  obj15.children = items8;
  items7[1] = React5(React4, obj15);
  obj7.children = items7;
  items6[1] = React5(React4, obj7);
  obj2.children = items6;
  return React5(React4, obj2);
}
