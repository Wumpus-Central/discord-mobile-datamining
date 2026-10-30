// === Module 9355: GameCoverArt ===

// Module 9355 (GameCoverArt)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1114 */;
import Text_Text from "Text/Text" /* 5619 */;
import FastImageDefault from "FastImage" /* 5712 */;
import useGameArtworkDefault from "useGameArtwork" /* 9356 */;
import noop from "module_19" /* 19 */;

require = fn;
class GameCoverArtFromURLs {
  constructor(arg0) {
    ({ gameName, size, style, accessible } = global);
    ({ coverUrl, iconUrl, firstReleaseDate } = global);
    if (accessible === undefined) {
      accessible = true;
    }
    loadingPlaceholder = global.loadingPlaceholder;
    tmp = closure_8();
    tmp2 = closure_1;
    tmp3 = closure_2;
    tmp4 = closure_1(closure_2[5])(coverUrl, iconUrl);
    ({ imageUrl, isCover, isLoading } = tmp4);
    if (null == imageUrl) {
      tmp15 = jsx;
      tmp16 = GameCoverArtFallback;
      obj1 = { gameName: null, firstReleaseDate: null, size: null, style: null, accessible: null };
      obj1.gameName = gameName;
      obj1.firstReleaseDate = firstReleaseDate;
      obj1.size = size;
      obj1.style = style;
      obj1.accessible = accessible;
      return jsx(GameCoverArtFallback, obj1);
    } else {
      tmp17 = closure_6;
      formatToPlainStringResult = gameName;
      if (size !== closure_6.COMPACT) {
        tmp7 = closure_0;
        intl = closure_0(tmp3[6]).intl;
        obj = { game: null };
        obj.game = gameName;
        formatToPlainStringResult = intl.formatToPlainString(closure_0(tmp3[6]).t["3ev90U"], obj);
      }
      tmp10 = View;
      items = [, , ];
      items[0] = tmp.container;
      iconContainer = !isCover;
      tmp9 = jsxs;
      if (!isCover) {
        iconContainer = tmp.iconContainer;
      }
      obj10 = { style: null, accessible: null, accessibilityRole: "image", accessibilityLabel: null, children: null };
      items[1] = iconContainer;
      items[2] = style;
      obj10.style = items;
      obj10.accessible = accessible;
      obj10.accessibilityLabel = formatToPlainStringResult;
      tmp11 = !isCover;
      if (!isCover) {
        tmp12 = jsx;
        obj11 = { style: null, pointerEvents: "none", children: null };
        obj11.style = tmp.backdropContainer;
        obj12 = { source: null, style: null, resizeMode: "cover", blurRadius: 24, accessible: false, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants" };
        obj13 = { uri: null };
        obj13.uri = imageUrl;
        obj12.source = obj13;
        obj12.style = tmp.backdrop;
        obj11.children = jsx(tmp2(tmp3[7]), obj12);
        tmp11 = jsx(tmp10, obj11);
      }
      items1 = [, , ];
      items1[0] = tmp11;
      tmp13 = jsx;
      obj14 = { source: null, accessible: false, style: null, resizeMode: null, onError: null, onLoad: null };
      obj15 = { uri: null };
      obj15.uri = imageUrl;
      obj14.source = obj15;
      obj14.style = isCover ? tmp.image : tmp.icon;
      str = "cover";
      tmp2Result = tmp2(tmp3[7]);
      if (isCover) {
        str = "stretch";
      }
      obj14.resizeMode = str;
      obj14.onError = tmp6;
      obj14.onLoad = tmp5;
      items1[1] = tmp13(tmp2Result, obj14, imageUrl);
      if (isLoading) {
        isLoading = null != loadingPlaceholder;
      }
      if (isLoading) {
        obj16 = { style: null, children: null };
        obj16.style = tmp.placeholder;
        obj16.children = loadingPlaceholder;
        isLoading = tmp13(tmp10, obj16);
      }
      items1[2] = isLoading;
      obj10.children = items1;
      return tmp9(tmp10, obj10);
    }
  }
}
function GameCoverArtFallback(arg0) {
  ({ gameName, firstReleaseDate, size, style, accessible } = arg0);
  const tmp = closure_8();
  if (size === obj.COMPACT) {
    const obj2 = { style: null, accessible: null, accessibilityRole: "image", accessibilityLabel: null, children: null };
    const items = [tmp.container, style, tmp.compactFallback];
    obj2.style = items;
    obj2.accessible = accessible;
    obj2.accessibilityLabel = gameName;
    const obj3 = { variant: "text-xxs/medium", lineClamp: 3, style: tmp.fallbackText, accessible: false, children: gameName };
    obj2.children = React4(Text_Text.Text, obj3);
    return React4(React3, obj2);
  } else {
    let date = null;
    ({ nameVariant, nameLineClamp, releaseYearVariant } = closure_7[size]);
    if (null != firstReleaseDate) {
      const _Date = Date;
      date = new Date(firstReleaseDate);
    }
    let combined = null;
    if (null != date) {
      const _HermesInternal = HermesInternal;
      combined = "(" + date.getFullYear() + ")";
    }
    obj = { style: null, accessible: null, accessibilityRole: "image", accessibilityLabel: null, children: null };
    const items1 = [tmp.container, style, tmp.fallback];
    obj.style = items1;
    obj.accessible = accessible;
    let combined1 = gameName;
    if (null != combined) {
      const _HermesInternal2 = HermesInternal;
      combined1 = "" + gameName + " " + combined;
    }
    obj.accessibilityLabel = combined1;
    const obj4 = { style: tmp.spacer };
    const items2 = [React4(React3, obj4), , , ];
    const obj5 = { variant: nameVariant, color: "text-default", lineClamp: nameLineClamp, style: tmp.fallbackText, accessible: false, children: gameName };
    items2[1] = React4(Text_Text.Text, obj5);
    const obj6 = { style: tmp.spacer };
    items2[2] = React4(React3, obj6);
    const obj7 = { variant: releaseYearVariant, color: "text-default", accessible: false, children: combined };
    items2[3] = React4(Text_Text.Text, obj7);
    obj.children = items2;
    return hasOwnProperty(React3, obj);
  }
}
get_ActivityIndicator = fn(17);
({ StyleSheet, View: c3 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const GameCoverArtSize = { SMALL: 0, [0]: "SMALL", LARGE: 1, [1]: "LARGE", COMPACT: 2, [2]: "COMPACT" };
let closure_7 = { [GameCoverArtSize.SMALL]: { nameVariant: "text-xs/medium", nameLineClamp: 3, releaseYearVariant: "text-xxs/normal" }, [GameCoverArtSize.LARGE]: { nameVariant: "text-md/medium", nameLineClamp: 4, releaseYearVariant: "text-sm/normal" } };
const createStyles = fn(5009);
let obj3 = { container: { borderRadius: nativeDefault.radii.sm }, image: null, iconContainer: null, backdropContainer: null, backdrop: null, icon: null, fallback: null, compactFallback: null, fallbackText: null, spacer: null, placeholder: null };
let size = { width: "100%", height: "100%", borderRadius: nativeDefault.radii.sm };
obj3.image = size;
let obj4 = { borderRadius: nativeDefault.radii.sm };
obj3.iconContainer = { justifyContent: "center", alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
let obj6 = {};
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj6.borderRadius = nativeDefault.radii.sm;
obj6.overflow = "hidden";
obj3.backdropContainer = obj6;
let obj7 = {};
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
let items = [{ scale: 1.2 }];
obj7.transform = items;
obj3.backdrop = obj7;
let obj5 = { justifyContent: "center", alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj3.icon = { width: "85%", aspectRatio: 1, borderRadius: nativeDefault.radii.sm };
let obj8 = { width: "85%", aspectRatio: 1, borderRadius: nativeDefault.radii.sm };
obj3.fallback = { alignItems: "center", padding: nativeDefault.space.PX_12, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
let obj9 = { alignItems: "center", padding: nativeDefault.space.PX_12, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj3.compactFallback = { justifyContent: "center", alignItems: "center", padding: nativeDefault.space.PX_4, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED };
obj3.fallbackText = { textAlign: "center" };
obj3.spacer = { flex: 1 };
const merged2 = Object.assign(StyleSheet.absoluteFillObject);
obj3.placeholder = {};
const React6 = createStyles.createStyles(obj3);
size = fn(2);
const result = size.fileFinishedImporting("modules/game_profile/native/components/GameCoverArt.tsx");

export default function GameCoverArt(arg0) {
  ({ game, imageSize } = arg0);
  const obj = {};
  const merged = Object.assign(Object.assign(arg0, Object.assign({ game: 0, imageSize: 0 })));
  obj.coverUrl = game.getCoverURL(imageSize);
  if (imageSize == null) {
    imageSize = 256;
  }
  obj.iconUrl = game.getIconURL(imageSize);
  ({ name: obj.gameName, firstReleaseDate: obj.firstReleaseDate } = game);
  return React4(GameCoverArtFromURLs, obj);
};
export { GameCoverArtSize };
export { GameCoverArtFromURLs };