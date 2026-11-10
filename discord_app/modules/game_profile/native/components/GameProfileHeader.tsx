// === Module 9459: GameProfileHeader ===

// Module 9459 (GameProfileHeader)
import nativeDefault from "native" /* 575 */;
import _mod1652 from "module_1652" /* 1652 */;
import LinearGradientDefault from "LinearGradient" /* 5717 */;
import Text_Text from "Text/Text" /* 5753 */;
import FastImageDefault from "FastImage" /* 5844 */;
import SKUUtils from "SKUUtils" /* 9460 */;
import useGameProfileHeroBackgroundURLDefault from "useGameProfileHeroBackgroundURL" /* 9461 */;
import GameCoverArt from "GameCoverArt" /* 9462 */;
import GameProfileRankPillDefault from "GameProfileRankPill" /* 9464 */;
import _modDef9466 from "module_9466" /* 9466 */;
import noop from "module_19" /* 19 */;

const _modDef1652 = _mod1652;
const GameCoverArtDefault = GameCoverArt;

require = fn;
const View = fn(17).View;
const GameProfileConstants = fn(9457);
({ DISCORD_APP_GAME_ID: hasOwnProperty, MOBILE_GAME_PROFILE_MAX_WIDTH } = GameProfileConstants);
const jsxProd = fn(21);
({ jsx: closure_6, jsxs: metroImportDefault } = jsxProd);
const createStyles = fn(5142);
let obj2 = { container: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST }, artHero: null, artHeroImage: null, artHeroGradient: null, headerContent: null, shadowContainer: null, coverContainer: null, titleContainer: null, titleRow: null, title: null, wavingWumpus: null, textShadow: null };
const rect = { width: "100%", position: "absolute", top: 0, bottom: -nativeDefault.space.PX_80, left: 0, right: 0 };
obj2.artHero = rect;
obj2.artHeroImage = { height: "100%", width: "100%", resizeMode: "cover" };
obj2.artHeroGradient = { position: "absolute", top: 0, bottom: 0, left: 0, right: 0 };
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
obj2.headerContent = { paddingTop: nativeDefault.space.PX_32, paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_12, flexDirection: "row", alignItems: "flex-end", maxWidth: MOBILE_GAME_PROFILE_MAX_WIDTH, alignSelf: "center", width: "100%" };
let obj4 = { paddingTop: nativeDefault.space.PX_32, paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_12, flexDirection: "row", alignItems: "flex-end", maxWidth: MOBILE_GAME_PROFILE_MAX_WIDTH, alignSelf: "center", width: "100%" };
const merged = Object.assign(nativeDefault.shadows.SHADOW_LOW);
obj2.shadowContainer = { borderRadius: nativeDefault.radii.sm };
let obj5 = { borderRadius: nativeDefault.radii.sm };
obj2.coverContainer = { aspectRatio: 0.75, height: 114, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, overflow: "hidden" };
obj2.titleContainer = { flex: 1, flexDirection: "column", alignItems: "flex-start" };
let obj6 = { aspectRatio: 0.75, height: 114, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, overflow: "hidden" };
obj2.titleRow = { flexDirection: "row", alignItems: "flex-end", alignSelf: "stretch", gap: nativeDefault.space.PX_8 };
obj2.title = { flexShrink: 1 };
obj2.wavingWumpus = { width: 43, height: 40, flexShrink: 0, resizeMode: "contain" };
let obj7 = { flexDirection: "row", alignItems: "flex-end", alignSelf: "stretch", gap: nativeDefault.space.PX_8 };
obj2.textShadow = { textShadowColor: nativeDefault.colors.BLACK, textShadowOffset: { width: 0, height: 0 }, textShadowRadius: 1 };
let closure_8 = createStyles.createStyles(obj2);
let closure_9 = { code: "(function GameProfileHeaderTsx1(){let[effectiveScrollY]=this.__closure;return{top:-Math.max(0,-effectiveScrollY.get())};})" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_profile/native/components/GameProfileHeader.tsx");

export default function GameProfileHeader(arg0) {
  ({ game, scrollY, onHeightMeasured } = arg0);
  const tmp = closure_8();
  const sharedValue = _mod1652.useSharedValue(0);
  items = [closure_9, ];
  if (scrollY == null) {
    scrollY = sharedValue;
  }
  items[1] = scrollY;
  [tmp5, tmp6] = items;
  class GameProfileHeaderTsx1 {
    constructor() {
      obj = { top: -Math.max(0, -closure_0.get()) };
      return obj;
    }
  }
  const items1 = [tmp6];
  GameProfileHeaderTsx1.__closure = items1;
  GameProfileHeaderTsx1.__workletHash = 14790445044571;
  GameProfileHeaderTsx1.__initData = tmp5;
  const genres = game.genres;
  const animatedStyle = _mod1652.useAnimatedStyle(GameProfileHeaderTsx1);
  const mapped = genres.map(SKUUtils.getGenreText);
  const joined = mapped.join(", ");
  const l30Rank = game.l30Rank;
  const tmp10 = useGameProfileHeroBackgroundURLDefault(game, 1024);
  const items2 = [onHeightMeasured];
  const obj3 = {
    style: tmp.container,
    onLayout: noop.useCallback((nativeEvent) => {
      if (onHeightMeasured != null) {
        tmp(nativeEvent.nativeEvent.layout.height);
      }
    }, items2),
    children: null
  };
  const obj4 = { style: null, children: null };
  const items3 = [tmp.artHero, animatedStyle];
  obj4.style = items3;
  let tmp13 = null != tmp10;
  if (tmp13) {
    const obj5 = { source: null, style: null };
    const obj6 = { uri: tmp10 };
    obj5.source = obj6;
    obj5.style = tmp.artHeroImage;
    tmp13 = timestampProducer(FastImageDefault, obj5);
  }
  const items4 = [tmp13, ];
  const obj7 = { colors: null, style: tmp.artHeroGradient };
  const items5 = ["rgba(0,0,0,0.3)", tmp.container.backgroundColor];
  obj7.colors = items5;
  items4[1] = timestampProducer(LinearGradientDefault, obj7);
  obj4.children = items4;
  const items6 = [metroImportDefault(_modDef1652.View, obj4), ];
  const obj8 = { style: tmp.headerContent, children: null };
  const obj9 = { style: tmp.shadowContainer, children: null };
  const obj10 = { game, imageSize: 114, size: null, style: null };
  obj10.size = GameCoverArt.GameCoverArtSize.LARGE;
  obj10.style = tmp.coverContainer;
  obj9.children = timestampProducer(GameCoverArtDefault, obj10);
  const items7 = [timestampProducer(View, obj9), ];
  const obj11 = { style: tmp.titleContainer, children: null };
  let tmp15Result = null != l30Rank;
  if (tmp15Result) {
    const obj12 = { rank: l30Rank };
    tmp15Result = timestampProducer(GameProfileRankPillDefault, obj12);
  }
  const items8 = [tmp15Result, , ];
  const obj13 = { style: tmp.titleRow, children: null };
  const obj14 = { variant: "heading-xxl/semibold", color: "text-overlay-light", lineClamp: 2, style: null, children: game.name };
  const items9 = [, ];
  ({ textShadow: arr11[0], title: arr11[1] } = tmp);
  obj14.style = items9;
  const items10 = [timestampProducer(Text_Text.Text, obj14), ];
  let tmp15Result3 = game.id === hasOwnProperty;
  if (tmp15Result3) {
    const obj15 = { source: _modDef9466, style: tmp.wavingWumpus, accessible: false, importantForAccessibility: "no" };
    tmp15Result3 = timestampProducer(FastImageDefault, obj15);
    const tmp9Result2 = FastImageDefault;
  }
  items10[1] = tmp15Result3;
  obj13.children = items10;
  items8[1] = metroImportDefault(View, obj13);
  let tmp15Result4 = null;
  if (null != joined) {
    tmp15Result4 = null;
    if ("" !== joined) {
      const obj16 = { variant: "body-md/normal", color: "text-overlay-light", lineClamp: 2, style: tmp.textShadow, children: joined };
      tmp15Result4 = timestampProducer(Text_Text.Text, obj16);
    }
  }
  items8[2] = tmp15Result4;
  obj11.children = items8;
  items7[1] = metroImportDefault(View, obj11);
  obj8.children = items7;
  items6[1] = metroImportDefault(View, obj8);
  obj3.children = items6;
  return metroImportDefault(View, obj3);
};