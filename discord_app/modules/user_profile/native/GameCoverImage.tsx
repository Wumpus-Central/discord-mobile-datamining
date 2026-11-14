// === Module 12112: GameCoverImage ===

// Module 12112 (GameCoverImage)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import GameCoverArt from "GameCoverArt" /* 10321 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(5306);
let obj = { cover: null, coverArt: null };
const merged = Object.assign(nativeDefault.shadows.SHADOW_LOW);
obj.cover = { aspectRatio: fn(12104).GAME_COVER_ASPECT_RATIO, borderRadius: fn(12104).GAME_COVER_BORDER_RADIUS, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED };
obj.coverArt = { width: "100%", height: "100%" };
let closure_4 = createStyles.createStyles(obj);
const obj3 = { aspectRatio: fn(12104).GAME_COVER_ASPECT_RATIO, borderRadius: fn(12104).GAME_COVER_BORDER_RADIUS, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED };
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/GameCoverImage.tsx");

export default noop.memo(function GameCoverImage(ref) {
  ({ gameName, isLoading, accessible } = ref);
  ({ coverImageUrl, iconImageUrl, hasGameData, width } = ref);
  if (accessible === undefined) {
    accessible = true;
  }
  const tmp = closure_4();
  const obj = { ref: ref.ref, style: null, accessible, accessibilityRole: "image", accessibilityLabel: null, children: null };
  items = [tmp.cover, { width }];
  obj.style = items;
  let stringResult = gameName;
  if (isLoading) {
    const intl = util.intl;
    stringResult = intl.string(util.t.ZTNur7);
  }
  obj.accessibilityLabel = stringResult;
  let tmp2Result = !isLoading;
  if (!isLoading) {
    tmp2Result = hasGameData;
  }
  if (tmp2Result) {
    const obj2 = { coverUrl: coverImageUrl, iconUrl: iconImageUrl, gameName, size: GameCoverArt.GameCoverArtSize.COMPACT, style: tmp.coverArt, accessible: false };
    tmp2Result = jsx(GameCoverArt.GameCoverArtFromURLs, { coverUrl: coverImageUrl, iconUrl: iconImageUrl, gameName, size: GameCoverArt.GameCoverArtSize.COMPACT, style: tmp.coverArt, accessible: false });
  }
  obj.children = tmp2Result;
  return <View ref={ref.ref} style={null} accessible={accessible} accessibilityRole="image" accessibilityLabel={null}>{null}</View>;
});