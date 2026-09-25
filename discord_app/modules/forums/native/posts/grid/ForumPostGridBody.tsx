// discord_app/modules/forums/native/posts/grid/ForumPostGridBody.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../../../design/void/native.tsx";
import GlobalUtils from "../../../../../utils/GlobalUtils.tsx";
import Text_Text from "../../../../../design/components/Text/native/Text.tsx";
import ForumPostMediaUtils from "../../../ForumPostMediaUtils.tsx";
import _modDef10802 from "../../../../../../_runtime/metro/10802__.js";
import _modDef11475 from "../../../../../../_runtime/metro/11475__.js";
import _modDef11476 from "../../../../../../_runtime/metro/11476__.js";
import ForumPostMedia from "../ForumPostMedia.tsx";
import _slicedToArray from "../../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
function GIFIcon() {
  const tmp = closure_8();
  return timestampProducer(native.Icon, {
    size: native.Icon.Sizes.CUSTOM,
    source: _modDef11475,
    disableColor: true,
    style: closure_8().gifIcon,
  });
}
function PlayIcon() {
  return timestampProducer(native.Icon, { size: native.Icon.Sizes.SMALL_20, source: _modDef11476, disableColor: true });
}
function ExtraMediaIcon(extraMediaCount) {
  const tmp = closure_8();
  const obj = { style: tmp.extraMediaCountContainer, children: null };
  items = [
    timestampProducer(native.Icon, {
      source: _modDef10802,
      color: tmp.icon.color,
      size: native.Icon.Sizes.REFRESH_SMALL_16,
    }),
  ];
  const obj2 = { source: _modDef10802, color: tmp.icon.color, size: native.Icon.Sizes.REFRESH_SMALL_16 };
  items[1] = timestampProducer(Text_Text.Text, {
    style: tmp.extraMediaCount,
    lineClamp: 1,
    variant: "text-xs/normal",
    color: "text-default",
    children: "+" + extraMediaCount.extraMediaCount,
  });
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
        const obj = { style: rowSpacer.rowSpacer };
        tmp2 = timestampProducer(View, obj);
      }
      const obj2 = { children: null };
      items = [
        tmp2,
        timestampProducer(ForumPostMedia.ForumPostGridMedia, {
          channel,
          media: media.media,
          targetWidth: media.targetWidth,
          targetHeight: media.targetHeight,
        }),
      ];
      obj2.children = items;
      return React5(noop.Fragment, obj2, "" + channel.id + "-" + index);
    }),
  });
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4829);
let obj2 = {
  gifIcon: null,
  container: null,
  wideAspectRatioContainer: null,
  mediaIconContainer: null,
  headerLeftContainer: null,
  footerLeftContainer: null,
  footerRightContainer: null,
  extraMediaCountContainer: null,
  extraMediaCount: null,
  grid: null,
  wideAspectRatioGrid: null,
  column: null,
  columnSpacer: null,
  rowSpacer: null,
  icon: null,
};
let size = {
  height: 20,
  width: 33,
  backgroundColor: "black",
  borderRadius: nativeDefault.radii.xs,
  resizeMode: "cover",
};
obj2.gifIcon = size;
obj2.container = { position: "relative", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, height: 225 };
obj2.wideAspectRatioContainer = { height: 192 };
obj2.mediaIconContainer = { paddingLeft: 6 };
obj2.headerLeftContainer = { flexDirection: "row", position: "absolute", top: 4, left: 4 };
obj2.footerLeftContainer = {
  flexDirection: "row",
  position: "absolute",
  bottom: 4,
  left: 4,
  alignItems: "center",
  justifyContent: "flex-start",
};
obj2.footerRightContainer = {
  position: "absolute",
  bottom: 4,
  right: 4,
  alignItems: "center",
  justifyContent: "flex-start",
};
const obj3 = { position: "relative", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, height: 225 };
obj2.extraMediaCountContainer = {
  flexDirection: "row",
  alignItems: "center",
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  height: 24,
  paddingHorizontal: 8,
  borderRadius: 20,
};
obj2.extraMediaCount = { marginLeft: 2 };
let obj4 = {
  flexDirection: "row",
  alignItems: "center",
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  height: 24,
  paddingHorizontal: 8,
  borderRadius: 20,
};
obj2.grid = { height: 225, flexDirection: "row", borderRadius: nativeDefault.radii.xs, overflow: "hidden" };
obj2.wideAspectRatioGrid = { height: 192 };
obj2.column = { flex: 1, flexDirection: "column" };
obj2.columnSpacer = { flex: 0, width: 2, height: "100%" };
obj2.rowSpacer = { flex: 0, height: 2, width: "100%" };
let obj5 = { height: 225, flexDirection: "row", borderRadius: nativeDefault.radii.xs, overflow: "hidden" };
obj2.icon = { color: nativeDefault.colors.TEXT_SUBTLE };
let closure_8 = createStyles.createStyles(obj2);
let items = [
  [0, 3],
  [1, 2],
];
size = fn(2);
let result = size.fileFinishedImporting("modules/forums/native/posts/grid/ForumPostGridBody.tsx");

export default function ForumPostGridBody(thread) {
  thread = thread.thread;
  const media = thread.media;
  const tmp = closure_8();
  dependencyMap = tmp;
  const tmp4 = _slicedToArray(thread(6688).useSomeAppliedTags(thread, 2), 2);
  const first = tmp4[0];
  let tmp13Result = first.length > 0;
  items = [media];
  const memo = noop.useMemo(() => media.slice(0, 4), items);
  const bound = Math.max(0, media.length - 4);
  const isMediaPostResult = thread.isMediaPost();
  closure_129_0 = memo;
  closure_129_1 = isMediaPostResult;
  const width = media(1478)().width;
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
        const diff = (closure_2 - 48) / length - (2 * (length - 1)) / length;
        const obj = { media, targetWidth: diff, targetHeight: null };
        if (media) {
          if (length < 2) {
            let result = diff / 1.7777777777777777;
          }
          obj.targetHeight = result;
          return obj;
        }
        result = num / length - (2 * (length - 1)) / length;
      });
    });
  }, items2);
  const items3 = [media];
  const memo3 = noop.useMemo(() => ForumPostMediaUtils.messageContainsGifOrVideo(media), items3);
  ({ containsVideo, containsGif } = memo3);
  const items4 = [tmp.container];
  let wideAspectRatioContainer = isMediaPostResult;
  if (isMediaPostResult) {
    wideAspectRatioContainer = tmp.wideAspectRatioContainer;
  }
  let obj2 = { style: items4, children: null };
  items4[1] = wideAspectRatioContainer;
  const items5 = [tmp.grid];
  let wideAspectRatioGrid = isMediaPostResult;
  if (isMediaPostResult) {
    wideAspectRatioGrid = tmp.wideAspectRatioGrid;
  }
  let obj = thread(6688);
  let tmp2 = thread;
  items5[1] = wideAspectRatioGrid;
  const items6 = [
    closure_6(View, {
      style: items5,
      children: memo2.map((column, index) => {
        let tmp2 = index > 0;
        if (tmp2) {
          const obj = { style: columnSpacer.columnSpacer };
          tmp2 = timestampProducer(View, obj);
        }
        const obj2 = { children: null };
        items = [tmp2, timestampProducer(MediaGridColumn, { column, thread })];
        obj2.children = items;
        return React5(noop.Fragment, obj2, "" + column + "-" + index);
      }),
    }),
    ,
    ,
  ];
  if (tmp13Result) {
    const obj4 = { style: tmp.footerLeftContainer, children: null };
    const obj5 = { appliedTags: first, additionalTagsCount: tmp4[1], hasUnreads: thread.hasUnreads };
    obj4.children = closure_6(tmp2(11481).ForumPostAppliedTagPills, obj5);
    tmp13Result = closure_6(View, obj4);
  }
  items6[1] = tmp13Result;
  let tmp11Result = containsGif;
  if (!containsGif) {
    tmp11Result = containsVideo;
  }
  if (tmp11Result) {
    const obj6 = { style: tmp.headerLeftContainer, children: null };
    if (containsGif) {
      const obj7 = { style: tmp.mediaIconContainer, children: closure_6(GIFIcon, {}) };
      containsGif = closure_6(View, obj7);
    }
    const items7 = [containsGif];
    if (containsVideo) {
      const obj8 = { style: tmp.mediaIconContainer, children: closure_6(PlayIcon, {}) };
      containsVideo = closure_6(View, obj8);
    }
    items7[1] = containsVideo;
    obj6.children = items7;
    tmp11Result = closure_7(View, obj6);
  }
  items6[2] = tmp11Result;
  let tmp13Result2 = 0 !== bound;
  if (tmp13Result2) {
    const obj9 = { style: tmp.footerRightContainer, children: null };
    const obj10 = { extraMediaCount: bound };
    obj9.children = closure_6(ExtraMediaIcon, obj10);
    tmp13Result2 = closure_6(View, obj9);
  }
  items6[3] = tmp13Result2;
  obj2.children = items6;
  return closure_7(View, obj2);
}
export const GRID_HORIZONTAL_PADDING = 48;
