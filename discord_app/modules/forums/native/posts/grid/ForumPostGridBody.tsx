// discord_app/modules/forums/native/posts/grid/ForumPostGridBody.tsx
import ThemesDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import Button from "../../../../../design/void/native.tsx";
import isDiscordFrontendDevelopment from "../../../../../utils/GlobalUtils.tsx";
import Text from "../../../../../design/components/Text/native/Text.tsx";
import registerAssetDefault from "../../../../../../_runtime/10341_registerAsset.js";
import registerAssetDefault2 from "../../../../../../_runtime/11595_registerAsset.js";
import registerAssetDefault3 from "../../../../../../_runtime/11596_registerAsset.js";
import closure_3 from "../../../../../../_runtime/metro/00032__slicedToArray.js";
import closure_4 from "../../../../../../_runtime/00019_noop.js";
import { View } from "../../../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
function GIFIcon() {
  const tmp = callback3();
  return callback(Button.Icon, { size: Button.Icon.Sizes.CUSTOM, source: registerAssetDefault2, disableColor: true, style: callback3().gifIcon });
}
function PlayIcon() {
  return callback(Button.Icon, { size: Button.Icon.Sizes.SMALL_20, source: registerAssetDefault3, disableColor: true });
}
function ExtraMediaIcon(extraMediaCount) {
  const tmp = callback3();
  let obj = { style: tmp.extraMediaCountContainer, children: null };
  obj = { source: registerAssetDefault, color: tmp.icon.color, size: Button.Icon.Sizes.REFRESH_SMALL_16 };
  items = [callback(Button.Icon, obj), ];
  obj = { style: tmp.extraMediaCount, lineClamp: 1, variant: "text-xs/normal", color: "text-default", children: "+" + extraMediaCount.extraMediaCount };
  items[1] = callback(Text.Text, obj);
  obj[1] = items;
  return callback2(View, obj);
}
function MediaGridColumn(arg0) {
  ({ column, thread: require } = arg0);
  closure_1 = undefined;
  const tmp = callback3();
  closure_1 = tmp;
  const found = column.filter(isDiscordFrontendDevelopment.isNotNullish);
  return callback(View, {
    style: tmp.column,
    children: found.map((media) => {
      let tmp2 = arg1 > 0;
      if (tmp2) {
        let obj = { style: null };
        obj[0] = rowSpacer.rowSpacer;
        tmp2 = closure_1_6(closure_1_5, obj);
      }
      obj = { children: null };
      items = [tmp2, ];
      obj = { channel: id, media: media.media, targetWidth: media.targetWidth, targetHeight: media.targetHeight };
      items[1] = closure_1_6(closure_1_0(closure_1_2[13]).ForumPostGridMedia, obj);
      obj[0] = items;
      return closure_1_7(closure_1_4.Fragment, obj, "" + id.id + "-" + arg1);
    })
  });
}
({ jsx: closure_6, jsxs: error } = jsxProd);
createCacheKey = { gifIcon: null, container: null, wideAspectRatioContainer: null, mediaIconContainer: null, headerLeftContainer: null, footerLeftContainer: null, footerRightContainer: null, extraMediaCountContainer: null, extraMediaCount: null, grid: null, wideAspectRatioGrid: null, column: null, columnSpacer: null, rowSpacer: null, icon: null };
createCacheKey = { height: 20, width: 33, backgroundColor: "black", borderRadius: ThemesDefault.radii.xs, resizeMode: "cover" };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { position: "relative", backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW, height: 225 };
createCacheKey[2] = { height: 192 };
createCacheKey[3] = { paddingLeft: 6 };
createCacheKey[4] = { flexDirection: "row", position: "absolute", top: 4, left: 4 };
createCacheKey[5] = { flexDirection: "row", position: "absolute", bottom: 4, left: 4, alignItems: "center", justifyContent: "flex-start" };
createCacheKey[6] = { position: "absolute", bottom: 4, right: 4, alignItems: "center", justifyContent: "flex-start" };
let obj1 = { position: "relative", backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW, height: 225 };
createCacheKey[7] = { flexDirection: "row", alignItems: "center", backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH, height: 24, paddingHorizontal: 8, borderRadius: 20 };
createCacheKey[8] = { marginLeft: 2 };
let obj2 = { flexDirection: "row", alignItems: "center", backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH, height: 24, paddingHorizontal: 8, borderRadius: 20 };
createCacheKey[9] = { height: 225, flexDirection: "row", borderRadius: ThemesDefault.radii.xs, overflow: "hidden" };
createCacheKey[10] = { height: 192 };
createCacheKey[11] = { flex: 1, flexDirection: "column" };
createCacheKey[12] = { flex: 0, width: 2, height: "100%" };
createCacheKey[13] = { flex: 0, height: 2, width: "100%" };
let obj3 = { height: 225, flexDirection: "row", borderRadius: ThemesDefault.radii.xs, overflow: "hidden" };
createCacheKey[14] = { color: ThemesDefault.colors.TEXT_SUBTLE };
let closure_8 = createCacheKey.createStyles(createCacheKey);
let items = [[0, 3], [1, 2]];
let obj4 = { color: ThemesDefault.colors.TEXT_SUBTLE };
let result = require("set").fileFinishedImporting("modules/forums/native/posts/grid/ForumPostGridBody.tsx");

export default function ForumPostGridBody(thread) {
  thread = thread.thread;
  let memo = thread;
  let media = thread.media;
  let width;
  const tmp = callback3();
  width = tmp;
  let obj = memo(width[14]);
  const tmp4 = memo1(obj.useSomeAppliedTags(thread, 2), 2);
  const first = tmp4[0];
  let tmp13Result = first.length > 0;
  items = [media];
  memo = React.useMemo(() => media.slice(0, 4), items);
  const bound = Math.max(0, media.length - 4);
  const isMediaPostResult = thread.isMediaPost();
  media = isMediaPostResult;
  width = undefined;
  memo1 = undefined;
  width = media(width[11])().width;
  const items1 = [memo];
  memo1 = React.useMemo(() => {
    const substr = closure_1_12.slice(0, Math.min(memo.length, 2));
    let mapped = substr.map((arr) => {
      const mapped = arr.map((arg0) => table[arg0]);
      return mapped.filter(closure_1_0(closure_1_2[12]).isNotNullish);
    });
    return mapped.filter((arg0) => arg0.length > 0);
  }, items1);
  const items2 = [width, memo1, isMediaPostResult];
  const memo2 = React.useMemo(() => {
    let num = 225;
    if (media) {
      num = 192;
    }
    return memo1.map((arr) => {
      arr.filter(memo(width[12]).isNotNullish).length;
      return arr.map((media) => {
        const diff = (closure_2_2 - 48) / length - 2 * (length - 1) / length;
        const obj = { media, targetWidth: diff, targetHeight: null };
        if (closure_2_1) {
          if (length < 2) {
            let result = diff / 1.7777777777777777;
          }
          obj[2] = result;
          return obj;
        }
        result = length / length - 2 * (length - 1) / length;
      });
    });
  }, items2);
  const items3 = [media];
  const memo3 = React.useMemo(() => memo(width[15]).messageContainsGifOrVideo(media), items3);
  ({ containsVideo, containsGif } = memo3);
  const items4 = [tmp.container, ];
  let wideAspectRatioContainer = isMediaPostResult;
  if (isMediaPostResult) {
    wideAspectRatioContainer = tmp.wideAspectRatioContainer;
  }
  obj = { style: items4, children: null };
  items4[1] = wideAspectRatioContainer;
  const items5 = [tmp.grid, ];
  let wideAspectRatioGrid = isMediaPostResult;
  if (isMediaPostResult) {
    wideAspectRatioGrid = tmp.wideAspectRatioGrid;
  }
  obj = {
    style: items5,
    children: memo2.map((column) => {
      let tmp2 = arg1 > 0;
      if (tmp2) {
        let obj = { style: null };
        obj[0] = width.columnSpacer;
        tmp2 = closure_1_6(closure_1_5, obj);
      }
      obj = { children: null };
      items = [tmp2, ];
      obj = { column, thread: memo };
      items[1] = closure_1_6(closure_1_13, obj);
      obj[0] = items;
      return closure_1_7(closure_1_4.Fragment, obj, "" + column + "-" + arg1);
    })
  };
  items5[1] = wideAspectRatioGrid;
  const items6 = [closure_6(View, obj), , , ];
  if (tmp13Result) {
    obj1 = { style: null, children: null };
    obj1[0] = tmp.footerLeftContainer;
    const obj2 = { appliedTags: null, additionalTagsCount: null, hasUnreads: null };
    obj2[0] = first;
    obj2[1] = tmp4[1];
    obj2[2] = thread.hasUnreads;
    obj1[1] = tmp13(memo(width[16]).ForumPostAppliedTagPills, obj2);
    tmp13Result = tmp13(tmp12, obj1);
  }
  items6[1] = tmp13Result;
  let tmp11Result = containsGif;
  if (!containsGif) {
    tmp11Result = containsVideo;
  }
  if (tmp11Result) {
    const obj3 = { style: null, children: null };
    obj3[0] = tmp.headerLeftContainer;
    if (containsGif) {
      const obj4 = { style: null, children: null };
      obj4[0] = tmp.mediaIconContainer;
      obj4[1] = tmp13(GIFIcon, {});
      containsGif = tmp13(tmp12, obj4);
    }
    const items7 = [containsGif, ];
    if (containsVideo) {
      const obj5 = { style: null, children: null };
      obj5[0] = tmp.mediaIconContainer;
      obj5[1] = tmp13(PlayIcon, {});
      containsVideo = tmp13(tmp12, obj5);
    }
    items7[1] = containsVideo;
    obj3[1] = items7;
    tmp11Result = tmp11(tmp12, obj3);
  }
  items6[2] = tmp11Result;
  tmp13Result = 0 !== bound;
  if (tmp13Result) {
    const obj6 = { style: null, children: null };
    obj6[0] = tmp.footerRightContainer;
    const obj7 = { extraMediaCount: null };
    obj7[0] = bound;
    obj6[1] = tmp13(ExtraMediaIcon, obj7);
    tmp13Result = tmp13(tmp12, obj6);
  }
  items6[3] = tmp13Result;
  obj[1] = items6;
  return closure_7(View, obj);
};
export const GRID_HORIZONTAL_PADDING = 48;