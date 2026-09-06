// === Module 12006: ForumPostGridBody ===

// Module 12006 (ForumPostGridBody)
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1178 */;
import GlobalUtils from "GlobalUtils" /* 1369 */;
import Text_Text from "Text/Text" /* 4556 */;
import ForumPostMediaUtils from "ForumPostMediaUtils" /* 7897 */;
import _modDef11245 from "module_11245" /* 11245 */;
import _modDef12007 from "module_12007" /* 12007 */;
import _modDef12008 from "module_12008" /* 12008 */;
import ForumPostMedia from "ForumPostMedia" /* 12009 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
function GIFIcon() {
  const tmp = closure_8();
  return timestampProducer(native.Icon, { size: native.Icon.Sizes.CUSTOM, source: _modDef12007, disableColor: true, style: closure_8().gifIcon });
}
function PlayIcon() {
  return timestampProducer(native.Icon, { size: native.Icon.Sizes.SMALL_20, source: _modDef12008, disableColor: true });
}
function ExtraMediaIcon(extraMediaCount) {
  const tmp = closure_8();
  let obj = { style: tmp.extraMediaCountContainer, children: null };
  obj = { source: _modDef11245, color: tmp.icon.color, size: native.Icon.Sizes.REFRESH_SMALL_16 };
  items = [timestampProducer(native.Icon, obj), ];
  obj = { style: tmp.extraMediaCount, lineClamp: 1, variant: "text-xs/normal", color: "text-default", children: "+" + extraMediaCount.extraMediaCount };
  items[1] = timestampProducer(Text_Text.Text, obj);
  obj.children = items;
  return React5(View, obj);
}
function MediaGridColumn(arg0) {
  ({ column, thread: require } = arg0);
  const tmp = closure_8();
  const rowSpacer = tmp;
  const found = column.filter(GlobalUtils.isNotNullish);
  return closure_6(View, {
    style: tmp.column,
    children: found.map((media, index) => {
      let tmp2 = index > 0;
      if (tmp2) {
        let obj = { style: rowSpacer.rowSpacer };
        tmp2 = timestampProducer(View, obj);
      }
      obj = { children: null };
      items = [tmp2, ];
      obj = { channel, media: media.media, targetWidth: media.targetWidth, targetHeight: media.targetHeight };
      items[1] = timestampProducer(ForumPostMedia.ForumPostGridMedia, obj);
      obj.children = items;
      return React5(noop.Fragment, obj, "" + channel.id + "-" + index);
    })
  });
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
fn(4560);
let createStyles = { gifIcon: null, container: null, wideAspectRatioContainer: null, mediaIconContainer: null, headerLeftContainer: null, footerLeftContainer: null, footerRightContainer: null, extraMediaCountContainer: null, extraMediaCount: null, grid: null, wideAspectRatioGrid: null, column: null, columnSpacer: null, rowSpacer: null, icon: null };
let size = { height: 20, width: 33, backgroundColor: "black", borderRadius: nativeDefault.radii.xs, resizeMode: "cover" };
createStyles.gifIcon = size;
createStyles = { position: "relative", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, height: 225 };
createStyles.container = createStyles;
createStyles.wideAspectRatioContainer = { height: 192 };
createStyles.mediaIconContainer = { paddingLeft: 6 };
createStyles.headerLeftContainer = { flexDirection: "row", position: "absolute", top: 4, left: 4 };
createStyles.footerLeftContainer = { flexDirection: "row", position: "absolute", bottom: 4, left: 4, alignItems: "center", justifyContent: "flex-start" };
createStyles.footerRightContainer = { position: "absolute", bottom: 4, right: 4, alignItems: "center", justifyContent: "flex-start" };
createStyles.extraMediaCountContainer = { flexDirection: "row", alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, height: 24, paddingHorizontal: 8, borderRadius: 20 };
createStyles.extraMediaCount = { marginLeft: 2 };
let obj1 = { flexDirection: "row", alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, height: 24, paddingHorizontal: 8, borderRadius: 20 };
createStyles.grid = { height: 225, flexDirection: "row", borderRadius: nativeDefault.radii.xs, overflow: "hidden" };
createStyles.wideAspectRatioGrid = { height: 192 };
createStyles.column = { flex: 1, flexDirection: "column" };
createStyles.columnSpacer = { flex: 0, width: 2, height: "100%" };
createStyles.rowSpacer = { flex: 0, height: 2, width: "100%" };
let obj2 = { height: 225, flexDirection: "row", borderRadius: nativeDefault.radii.xs, overflow: "hidden" };
createStyles.icon = { color: nativeDefault.colors.TEXT_SUBTLE };
let closure_8 = createStyles.createStyles(createStyles);
let items = [[0, 3], [1, 2]];
size = fn(2);
let result = size.fileFinishedImporting("modules/forums/native/posts/grid/ForumPostGridBody.tsx");

export default function ForumPostGridBody(thread) {
  thread = thread.thread;
  const media = thread.media;
  const tmp = closure_8();
  dependencyMap = tmp;
  let obj = thread(7275);
  const tmp4 = _slicedToArray(obj.useSomeAppliedTags(thread, 2), 2);
  const first = tmp4[0];
  let tmp13Result = first.length > 0;
  items = [media];
  const memo = noop.useMemo(() => media.slice(0, 4), items);
  const bound = Math.max(0, media.length - 4);
  const isMediaPostResult = thread.isMediaPost();
  closure_129_0 = memo;
  closure_129_1 = isMediaPostResult;
  const width = media(1477)().width;
  closure_129_2 = width;
  const items1 = [memo];
  const memo1 = noop.useMemo(() => {
    const substr = items.slice(0, Math.min(thread.length, 2));
    let mapped = substr.map((arr) => {
      const mapped = arr.map((item) => closure_1_0[item]);
      return mapped.filter(thread(closure_2[12]).isNotNullish);
    });
    return mapped.filter((item) => item.length > 0);
  }, items1);
  closure_129_3 = memo1;
  const items2 = [width, memo1, isMediaPostResult];
  const memo2 = noop.useMemo(() => {
    return length.map((arr) => {
      length = arr.filter(thread(closure_2[12]).isNotNullish).length;
      length = length.length;
      return arr.map((media) => {
        const diff = (closure_2 - 48) / length - 2 * (length - 1) / length;
        const obj = { media, targetWidth: diff, targetHeight: null };
        if (media) {
          if (length < 2) {
            let result = diff / 1.7777777777777777;
          }
          obj.targetHeight = result;
          return obj;
        }
        result = num / length - 2 * (length - 1) / length;
      });
    });
  }, items2);
  const items3 = [media];
  const memo3 = noop.useMemo(() => ForumPostMediaUtils.messageContainsGifOrVideo(media), items3);
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
    children: memo2.map((column, index) => {
      let tmp2 = index > 0;
      if (tmp2) {
        let obj = { style: columnSpacer.columnSpacer };
        tmp2 = timestampProducer(View, obj);
      }
      obj = { children: null };
      items = [tmp2, ];
      obj = { column, thread };
      items[1] = timestampProducer(MediaGridColumn, obj);
      obj.children = items;
      return React5(noop.Fragment, obj, "" + column + "-" + index);
    })
  };
  items5[1] = wideAspectRatioGrid;
  const items6 = [closure_6(View, obj), , , ];
  if (tmp13Result) {
    const obj1 = { style: tmp.footerLeftContainer, children: null };
    const obj2 = { appliedTags: first, additionalTagsCount: tmp4[1], hasUnreads: thread.hasUnreads };
    obj1.children = closure_6(thread(12013).ForumPostAppliedTagPills, obj2);
    tmp13Result = closure_6(View, obj1);
  }
  items6[1] = tmp13Result;
  let tmp11Result = containsGif;
  if (!containsGif) {
    tmp11Result = containsVideo;
  }
  if (tmp11Result) {
    const obj3 = { style: tmp.headerLeftContainer, children: null };
    if (containsGif) {
      const obj4 = { style: tmp.mediaIconContainer, children: closure_6(GIFIcon, {}) };
      containsGif = closure_6(View, obj4);
    }
    const items7 = [containsGif, ];
    if (containsVideo) {
      const obj5 = { style: tmp.mediaIconContainer, children: closure_6(PlayIcon, {}) };
      containsVideo = closure_6(View, obj5);
    }
    items7[1] = containsVideo;
    obj3.children = items7;
    tmp11Result = closure_7(View, obj3);
  }
  items6[2] = tmp11Result;
  tmp13Result = 0 !== bound;
  if (tmp13Result) {
    const obj6 = { style: tmp.footerRightContainer, children: null };
    const obj7 = { extraMediaCount: bound };
    obj6.children = closure_6(ExtraMediaIcon, obj7);
    tmp13Result = closure_6(View, obj6);
  }
  items6[3] = tmp13Result;
  obj.children = items6;
  return closure_7(View, obj);
};
export const GRID_HORIZONTAL_PADDING = 48;