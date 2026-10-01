// === Module 8356: GameProfileHeader ===

// Module 8356 (GameProfileHeader)
import nativeDefault from "native" /* 576 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4595 */;
import Text_Text from "Text/Text" /* 4841 */;
import LinearGradientDefault from "LinearGradient" /* 5477 */;
import SKUUtils from "SKUUtils" /* 8357 */;
import useGameProfileHeroBackgroundURLDefault from "useGameProfileHeroBackgroundURL" /* 8358 */;
import GameProfileRankPillDefault from "GameProfileRankPill" /* 8359 */;
import _modDef8361 from "module_8361" /* 8361 */;
import noop from "module_19" /* 19 */;

const ReanimatedRexportDefault = ReanimatedRexport;

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, Image: hasOwnProperty } = get_ActivityIndicator);
const GameProfileConstants = fn(8354);
({ DISCORD_APP_GAME_ID: metroRequire, MOBILE_GAME_PROFILE_MAX_WIDTH } = GameProfileConstants);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4845);
let obj2 = { container: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST }, artHero: null, artHeroImage: null, artHeroGradient: null, headerContent: null, shadowContainer: null, coverContainer: null, iconContainer: null, image: null, titleContainer: null, titleRow: null, title: null, wavingWumpus: null, textShadow: null };
const rect = { width: "100%", position: "absolute", top: 0, bottom: -nativeDefault.space.PX_80, left: 0, right: 0 };
obj2.artHero = rect;
obj2.artHeroImage = { height: "100%", width: "100%", resizeMode: "cover" };
obj2.artHeroGradient = { position: "absolute", top: 0, bottom: 0, left: 0, right: 0 };
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
obj2.headerContent = { paddingTop: nativeDefault.space.PX_32, paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_12, flexDirection: "row", alignItems: "flex-end", maxWidth: MOBILE_GAME_PROFILE_MAX_WIDTH, alignSelf: "center", width: "100%" };
let obj4 = { paddingTop: nativeDefault.space.PX_32, paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_12, flexDirection: "row", alignItems: "flex-end", maxWidth: MOBILE_GAME_PROFILE_MAX_WIDTH, alignSelf: "center", width: "100%" };
const merged = Object.assign(nativeDefault.shadows.SHADOW_LOW);
obj2.shadowContainer = { borderRadius: nativeDefault.radii.sm };
let size = { width: 85, height: 114, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, overflow: "hidden" };
obj2.coverContainer = size;
const size1 = { width: 85, height: 85, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, overflow: "hidden" };
obj2.iconContainer = size1;
obj2.image = { width: "100%", height: "100%" };
obj2.titleContainer = { flex: 1, flexDirection: "column", alignItems: "flex-start" };
let obj5 = { borderRadius: nativeDefault.radii.sm };
obj2.titleRow = { flexDirection: "row", alignItems: "flex-end", alignSelf: "stretch", gap: nativeDefault.space.PX_8 };
obj2.title = { flexShrink: 1 };
obj2.wavingWumpus = { width: 43, height: 40, flexShrink: 0, resizeMode: "contain" };
let obj6 = { flexDirection: "row", alignItems: "flex-end", alignSelf: "stretch", gap: nativeDefault.space.PX_8 };
obj2.textShadow = { textShadowColor: nativeDefault.colors.BLACK, textShadowOffset: { width: 0, height: 0 }, textShadowRadius: 1 };
let closure_9 = createStyles.createStyles(obj2);
const __initData = { code: "function GameProfileHeaderTsx1(){const{effectiveScrollY}=this.__closure;return{top:-Math.max(0,-effectiveScrollY.get())};}" };
size = fn(2);
const result = size.fileFinishedImporting("modules/game_profile/native/components/GameProfileHeader.tsx");

export default function GameProfileHeader(game) {
  game = game.game;
  ({ scrollY, onHeightMeasured } = game);
  scrollY = undefined;
  const tmp = closure_9();
  if (scrollY == null) {
    scrollY = obj.useSharedValue(0);
  }
  obj = ReanimatedRexport;
  const fn = function h() {
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
    children: null
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
    tmp12 = React5(hasOwnProperty, obj4);
  }
  const items4 = [tmp12, ];
  const obj6 = { colors: null, style: tmp.artHeroGradient };
  const items5 = ["rgba(0,0,0,0.3)", tmp.container.backgroundColor];
  obj6.colors = items5;
  items4[1] = React5(LinearGradientDefault, obj6);
  obj3.children = items4;
  const items6 = [React6(ReanimatedRexportDefault.View, obj3), ];
  const obj7 = { style: tmp.headerContent, children: null };
  const obj8 = { style: tmp.shadowContainer, children: null };
  if (null != memo) {
    const obj9 = { style: tmp.coverContainer, children: null };
    const obj10 = { source: null, style: null };
    const obj11 = { uri: memo };
    obj10.source = obj11;
    obj10.style = tmp.image;
    obj9.children = React5(hasOwnProperty, obj10);
    let obj12 = obj9;
  } else {
    obj12 = { style: tmp.iconContainer, children: null };
    let tmp15Result = null != memo1;
    if (tmp15Result) {
      const obj13 = { source: null, style: null };
      const obj14 = { uri: memo1 };
      obj13.source = obj14;
      obj13.style = tmp.image;
      tmp15Result = React5(hasOwnProperty, obj13);
    }
    obj12.children = tmp15Result;
  }
  obj8.children = React5(React4, obj12);
  const items7 = [React5(React4, obj8), ];
  const obj15 = { style: tmp.titleContainer, children: null };
  let tmp15Result4 = null != l30Rank;
  if (tmp15Result4) {
    const obj16 = { rank: l30Rank };
    tmp15Result4 = React5(GameProfileRankPillDefault, obj16);
  }
  const items8 = [tmp15Result4, , ];
  const obj17 = { style: tmp.titleRow, children: null };
  const obj18 = { variant: "heading-xxl/semibold", color: "text-overlay-light", lineClamp: 2, style: null, children: game.name };
  const items9 = [, ];
  ({ textShadow: arr11[0], title: arr11[1] } = tmp);
  obj18.style = items9;
  const items10 = [React5(Text_Text.Text, obj18), ];
  let tmp15Result5 = game.id === timestampProducer;
  if (tmp15Result5) {
    const obj19 = { source: _modDef8361, style: tmp.wavingWumpus, accessible: false, importantForAccessibility: "no" };
    tmp15Result5 = React5(hasOwnProperty, obj19);
  }
  items10[1] = tmp15Result5;
  obj17.children = items10;
  items8[1] = React6(React4, obj17);
  let tmp15Result6 = null;
  if (null != joined) {
    tmp15Result6 = null;
    if ("" !== joined) {
      const obj20 = { variant: "text-md/normal", color: "text-overlay-light", lineClamp: 2, style: tmp.textShadow, children: joined };
      tmp15Result6 = React5(Text_Text.Text, obj20);
    }
  }
  items8[2] = tmp15Result6;
  obj15.children = items8;
  items7[1] = React6(React4, obj15);
  obj7.children = items7;
  items6[1] = React6(React4, obj7);
  obj2.children = items6;
  return React6(React4, obj2);
};