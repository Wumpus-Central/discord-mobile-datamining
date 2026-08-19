// discord_app/modules/forums/native/posts/grid/ForumPostGridBody.tsx
import ThemesDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import Button from "../../../../../design/void/native.tsx";
import isDiscordFrontendDevelopment from "../../../../../utils/GlobalUtils.tsx";
import Text from "../../../../../design/components/Text/native/Text.tsx";
import registerAssetDefault from "../../../../../../_runtime/10447_registerAsset.js";
import registerAssetDefault2 from "../../../../../../_runtime/11183_registerAsset.js";
import registerAssetDefault3 from "../../../../../../_runtime/11184_registerAsset.js";
import ForumPostMediaAndroid from "../ForumPostMedia.tsx";
import _slicedToArray from "../../../../../../_runtime/metro/00032__slicedToArray.js";
import noop from "../../../../../../_runtime/00019_noop.js";
import { View } from "../../../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";

require = fn;
function GIFIcon() {
  const tmp = callback3();
  return callback(Button.Icon, { size: Button.Icon.Sizes.CUSTOM, source: registerAssetDefault2, disableColor: true, style: callback3().gifIcon });
}
function PlayIcon() {
  return callback(Button.Icon, { size: Button.Icon.Sizes.SMALL_20, source: registerAssetDefault3, disableColor: true });
}
function ExtraMediaIcon(extraMediaCount) {
  const tmp = callback3();
  let obj = { source: registerAssetDefault, color: tmp.icon.color, size: Button.Icon.Sizes.REFRESH_SMALL_16 };
  items = [callback(Button.Icon, obj), ];
  obj = { style: tmp.extraMediaCount, lineClamp: 1, variant: "text-xs/normal", color: "text-default", children: "+" + extraMediaCount.extraMediaCount };
  items[1] = callback(Text.Text, obj);
  obj[1] = items;
  return callback2(View, obj);
}
function MediaGridColumn(arg0) {
  ({ column, thread: require } = arg0);
  const tmp = callback3();
  closure_1 = tmp;
  const found = column.filter(isDiscordFrontendDevelopment.isNotNullish);
  return callback(View, {
    style: tmp.column,
    children: found.map((item, index) => {
      let tmp2 = index > 0;
      if (tmp2) {
        let obj = { style: null };
        obj[0] = rowSpacer.rowSpacer;
        tmp2 = closure_1_6(View, obj);
      }
      items = [tmp2, ];
      obj = { channel: id, media: item.media, targetWidth: item.targetWidth, targetHeight: item.targetHeight };
      items[1] = closure_1_6(ForumPostMediaAndroid.ForumPostGridMedia, obj);
      obj[0] = items;
      return closure_1_7(closure_1_4.Fragment, obj, "" + id.id + "-" + index);
    })
  });
}
({ jsx: closure_6, jsxs: error } = jsxProd);
const createCacheKey = { height: 20, width: 33, backgroundColor: "black", borderRadius: ThemesDefault.radii.xs, resizeMode: "cover" };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { position: "relative", backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW, height: 225 };
createCacheKey[2] = { height: 192 };
createCacheKey[3] = { paddingLeft: 6 };
createCacheKey[4] = { flexDirection: "row", position: "absolute", top: 4, left: 4 };
createCacheKey[5] = { flexDirection: "row", position: "absolute", bottom: 4, left: 4, alignItems: "center", justifyContent: "flex-start" };
createCacheKey[6] = { position: "absolute", bottom: 4, right: 4, alignItems: "center", justifyContent: "flex-start" };
createCacheKey[7] = { flexDirection: "row", alignItems: "center", backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH, height: 24, paddingHorizontal: 8, borderRadius: 20 };
createCacheKey[8] = { marginLeft: 2 };
createCacheKey[9] = { height: 225, flexDirection: "row", borderRadius: ThemesDefault.radii.xs, overflow: "hidden" };
createCacheKey[10] = { height: 192 };
createCacheKey[11] = { flex: 1, flexDirection: "column" };
createCacheKey[12] = { flex: 0, width: 2, height: "100%" };
createCacheKey[13] = { flex: 0, height: 2, width: "100%" };
createCacheKey[14] = { color: ThemesDefault.colors.TEXT_SUBTLE };
let closure_8 = createCacheKey.createStyles(createCacheKey);
let items = [[0, 3], [1, 2]];
let result = require("obj132").fileFinishedImporting("modules/forums/native/posts/grid/ForumPostGridBody.tsx");

export default function ForumPostGridBody(thread) {
  thread = thread.thread;
  let memo = thread;
  let media = thread.media;
  const tmp = callback3();
  let width = tmp;
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
  width = media(width[11])().width;
  const items1 = [memo];
  memo1 = React.useMemo(() => {
    const substr = items.slice(0, Math.min(memo.length, 2));
    let mapped = substr.map((item, index) => {
      const mapped = item.map((item, index) => table[item]);
      return mapped.filter(memo(width[12]).isNotNullish);
    });
    return mapped.filter((item, index) => item.length > 0);
  }, items1);
  const items2 = [width, memo1, isMediaPostResult];
  const memo2 = React.useMemo(() => {
    return memo1.map((item, index) => {
      item.filter(memo(width[12]).isNotNullish).length;
      return item.map((item, index) => {
        const diff = (width - 48) / length - 2 * (length - 1) / length;
        const obj = { media: item, targetWidth: diff, targetHeight: null };
        if (media) {
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
    children: memo2.map((item, index) => {
      let tmp2 = index > 0;
      if (tmp2) {
        let obj = { style: null };
        obj[0] = width.columnSpacer;
        tmp2 = closure_1_6(View, obj);
      }
      items = [tmp2, ];
      obj = { column: item, thread: memo };
      items[1] = closure_1_6(MediaGridColumn, obj);
      obj[0] = items;
      return closure_1_7(closure_1_4.Fragment, obj, "" + item + "-" + index);
    })
  };
  items5[1] = wideAspectRatioGrid;
  const items6 = [callback(View, obj), , , ];
  if (tmp13Result) {
    obj1 = { style: null, children: null };
    obj1[0] = tmp.footerLeftContainer;
    const obj2 = { appliedTags: null, additionalTagsCount: null, hasUnreads: null };
    obj2[0] = first;
    obj2[1] = tmp4[1];
    obj2[2] = thread.hasUnreads;
    obj1[1] = callback(memo(width[16]).ForumPostAppliedTagPills, obj2);
    tmp13Result = callback(View, obj1);
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
      obj4[1] = callback(GIFIcon, {});
      containsGif = callback(View, obj4);
    }
    const items7 = [containsGif, ];
    if (containsVideo) {
      const obj5 = { style: null, children: null };
      obj5[0] = tmp.mediaIconContainer;
      obj5[1] = callback(PlayIcon, {});
      containsVideo = callback(View, obj5);
    }
    items7[1] = containsVideo;
    obj3[1] = items7;
    tmp11Result = callback2(View, obj3);
  }
  items6[2] = tmp11Result;
  tmp13Result = 0 !== bound;
  if (tmp13Result) {
    const obj6 = { style: null, children: null };
    obj6[0] = tmp.footerRightContainer;
    const obj7 = { extraMediaCount: null };
    obj7[0] = bound;
    obj6[1] = callback(ExtraMediaIcon, obj7);
    tmp13Result = callback(View, obj6);
  }
  items6[3] = tmp13Result;
  obj[1] = items6;
  return callback2(View, obj);
};
export const GRID_HORIZONTAL_PADDING = 48;