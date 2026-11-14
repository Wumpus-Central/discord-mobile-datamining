// discord_app/modules/orbs_arcade/native/OrbsArcadeGameGraphic.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import FastImageDefault from "../../../components_native/common/FastImage.tsx";
import AssetUtils from "../../quests/lib/AssetUtils.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../a11y/AccessibilityStore.tsx";

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(5306);
let obj2 = {
  graphic: {
    width: nativeDefault.modules.mobile.PROMO_SHEET_GRAPHIC_MAX_WIDTH,
    maxWidth: "100%",
    alignSelf: "center",
    aspectRatio: 1.7777777777777777,
    borderRadius: nativeDefault.radii.xs,
    overflow: "hidden",
    backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
  },
  graphicMedia: { width: "100%", height: "100%" },
};
let closure_8 = createStyles.createStyles(obj2);
let size = fn(2);
let result = size.fileFinishedImporting("modules/orbs_arcade/native/OrbsArcadeGameGraphic.tsx");

export default function OrbsArcadeGameGraphic(game) {
  sheetVideoAsset = undefined;
  const tmp = closure_8();
  ({ asset, sheetVideoAsset } = game.game);
  items = [AccessibilityStore];
  const stateFromStores = sheetVideoAsset(504).useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const tmp5 = _slicedToArray(noop.useState(null), 2);
  importDefault = tmp5[1];
  const items1 = [sheetVideoAsset];
  const memo = noop.useMemo(() => {
    let result = null;
    if (null != sheetVideoAsset) {
      const size = { width: null, height: null };
      ({ width: obj2.width, height: obj2.height } = sheetVideoAsset);
      result = AssetUtils.convertVideoToFirstFrameImageWithMediaProxy(sheetVideoAsset.url, size);
    }
    return result;
  }, items1);
  if (asset == null) {
    asset = memo;
  }
  const obj2 = { style: tmp.graphic, children: null };
  if (null != sheetVideoAsset) {
    if (!stateFromStores) {
      if (tmp5[0] !== sheetVideoAsset.url) {
        const obj3 = {
          style: tmp.graphicMedia,
          source: null,
          poster: null,
          posterResizeMode: "cover",
          resizeMode: "cover",
          onError: null,
          muted: true,
          disableFocus: true,
          preventsDisplaySleepDuringVideoPlayback: false,
          importantForAccessibility: "no-hide-descendants",
        };
        const obj4 = { uri: sheetVideoAsset.url };
        obj3.source = obj4;
        obj3.poster = memo;
        obj3.onError = function onError() {
          return closure_1(sheetVideoAsset.url);
        };
        let tmp7Result = jsx(tmp2(9730).VideoComponent, {
          style: tmp.graphicMedia,
          source: null,
          poster: null,
          posterResizeMode: "cover",
          resizeMode: "cover",
          onError: null,
          muted: true,
          disableFocus: true,
          preventsDisplaySleepDuringVideoPlayback: false,
          importantForAccessibility: "no-hide-descendants",
        });
      }
      obj2.children = tmp7Result;
      return <tmp8 {...obj2} />;
    }
  }
  let tmp7Result2 = null;
  if (null != asset) {
    const obj5 = { source: null, style: null, resizeMode: "cover", accessible: false };
    const obj6 = { uri: asset };
    obj5.source = obj6;
    obj5.style = tmp.graphicMedia;
    tmp7Result2 = jsx(FastImageDefault, { source: null, style: null, resizeMode: "cover", accessible: false });
  }
  tmp7Result = tmp7Result2;
  let obj = sheetVideoAsset(504);
  tmp2 = sheetVideoAsset;
}
export function hasOrbsArcadeGameGraphic(stateFromStores) {
  return null != stateFromStores.asset || null != stateFromStores.sheetVideoAsset;
}
