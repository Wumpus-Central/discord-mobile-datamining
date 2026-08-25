// discord_app/modules/media_viewer/native/components/MediaViewerThumbnails.tsx
import set from "../../../../utils/PlatformUtils.tsx";
import map from "../../../../design/tokens/native/useToken.tsx";
import useMediaItemSpoilerState from "../useMediaItemSpoilerState.tsx";
import closure_3 from "../../../../../_runtime/metro/00032__slicedToArray.js";
import importAllResult from "../../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import THUMBNAIL_MARGIN from "../Constants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
function ObscuredView(source) {
  source = source.source;
  let obj = useMediaItemSpoilerState;
  [tmp4, tmp5] = callback(obj.useMediaItemSpoilerState(source.index), 2);
  map;
  let tmp10Result = null;
  if (tmp4) {
    if (source.spoiler) {
      obj = { style: null, children: null };
      const items = [absoluteFill.absoluteFill, tmp5];
      obj[0] = items;
      const tmp11 = absoluteFill;
      const tmp7Result = tmp7(4805);
      let str = "light";
      if (tmpResult.isAndroid()) {
        str = "dark";
      }
      obj = { blurTheme: null, style: null, android_fallbackColor: null };
      obj[0] = str;
      obj[1] = tmp11.absoluteFill;
      obj[2] = tmp8;
      obj[1] = closure_8(tmp7Result, obj);
      tmp10Result = tmp10(tmp7(4120).View, obj);
      tmpResult = set;
    } else {
      tmp10Result = null;
    }
  }
  return tmp10Result;
}
let c4 = importAllResult;
({ Pressable: c5, StyleSheet: closure_6 } = get_ActivityIndicator);
({ THUMBNAIL_WIDTH_MARGIN: error, THUMBNAIL_MARGIN, THUMBNAIL_HEIGHT } = THUMBNAIL_MARGIN);
({ jsx: closure_8, jsxs: c9 } = jsxProd);
let closure_11 = createCacheKey.createStyles({ containerPortrait: { height: 60 }, thumbnailButtonPortrait: { overflow: "hidden", marginHorizontal: THUMBNAIL_MARGIN, borderRadius: 2 }, thumbnailImagePortrait: { height: THUMBNAIL_HEIGHT, width: "100%" } });
let closure_12 = importAllResult.memo((onSelect) => {
  ({ source, index } = onSelect);
  onSelect = onSelect.onSelect;
  ({ numSources, selectedIndex, useThumbnailStyle } = onSelect);
  const tmp = callback2();
  let first = source;
  if (Array.isArray(source)) {
    first = source[0];
  }
  const items = [onSelect, index];
  const thumbnailStyle = useThumbnailStyle(first, index);
  const callback = importAllResult.useCallback(() => onSelect(index), items);
  let obj = { style: items1, children: null };
  items1 = [tmp.thumbnailButtonPortrait, thumbnailStyle];
  obj = { needsOffscreenAlphaCompositing: true, renderToHardwareTextureAndroid: true, accessibilityRole: "imagebutton", accessibilityLabel: "Thumbnail preview, " + index + 1 + " of " + numSources, accessibilityHint: "Double tap to focus", accessibilityState: { selected: selectedIndex === index }, onPress: callback, children: null };
  obj = { style: tmp.thumbnailImagePortrait, source: null, enableAnimation: false };
  let thumbnail = first.thumbnail;
  if (thumbnail == null) {
    thumbnail = first;
  }
  obj[1] = thumbnail;
  const items2 = [closure_8(onSelect(5374), obj), closure_8(ObscuredView, { source: first, index })];
  obj[7] = items2;
  obj[1] = closure_9(closure_5, obj);
  return closure_8(onSelect(4120).View, obj);
});
let closure_13 = { code: "function MediaViewerThumbnailsTsx1(){const{scrollEnabled}=this.__closure;return{scrollEnabled:scrollEnabled.get()};}" };
const result = require("set").fileFinishedImporting("modules/media_viewer/native/components/MediaViewerThumbnails.tsx");

export default function MediaViewerThumbnails(syncer) {
  syncer = syncer.syncer;
  let sources;
  let index;
  let variableWidthThumbnailsEnabled;
  let thumbnailScrollPositions;
  let headerBufferStyle;
  let footerBufferStyle;
  let scrollEnabled;
  let onSelect;
  let useThumbnailStyle;
  let first;
  sources = syncer.sources;
  index = syncer.index;
  variableWidthThumbnailsEnabled = syncer.variableWidthThumbnailsEnabled;
  thumbnailScrollPositions = syncer.thumbnailScrollPositions;
  ({ onEndReached, onEndReachedThreshold } = syncer);
  const thumbnailsProps = syncer.useThumbnailsProps(onSelect, sources.length - 1);
  headerBufferStyle = thumbnailsProps.headerBufferStyle;
  footerBufferStyle = thumbnailsProps.footerBufferStyle;
  scrollEnabled = thumbnailsProps.scrollEnabled;
  onSelect = thumbnailsProps.onSelect;
  useThumbnailStyle = thumbnailsProps.useThumbnailStyle;
  let items = [thumbnailScrollPositions, variableWidthThumbnailsEnabled];
  ({ ref, headerBufferSize, footerBufferSize, onScroll, screenWidth, itemSize } = thumbnailsProps);
  const memo = headerBufferStyle.useMemo(() => {
    const items = [];
    let num = 0;
    if (0 < thumbnailScrollPositions.length) {
      do {
        let tmp = variableWidthThumbnailsEnabled;
        let push = items.push;
        let tmp2 = num;
        if (variableWidthThumbnailsEnabled) {
          let tmp5 = thumbnailScrollPositions;
          let arr = push(thumbnailScrollPositions[num].scrollStart);
        } else {
          let tmp3 = onSelect;
          arr = push(num * onSelect);
        }
        num = num + 1;
        let tmp7 = thumbnailScrollPositions;
      } while (num < thumbnailScrollPositions.length);
    }
    return items;
  }, items);
  let obj = sources(variableWidthThumbnailsEnabled[13]);
  first = thumbnailScrollPositions(obj.useSelectedMediaSource(syncer), 1)[0];
  const items1 = [sources, first, onSelect, useThumbnailStyle];
  const items2 = [sources.length];
  const callback = headerBufferStyle.useCallback((arg0, index) => useThumbnailStyle(closure_1_12, { index, source: sources[index], numSources: sources.length, selectedIndex: first, onSelect, useThumbnailStyle }), items1);
  const memo1 = headerBufferStyle.useMemo(() => {
    const items = [sources.length];
    return items;
  }, items2);
  let tmp = callback2();
  const fn = function n() {
    return { scrollEnabled: scrollEnabled.get() };
  };
  fn.__closure = { scrollEnabled };
  fn.__workletHash = 13439565264141;
  fn.__initData = closure_13;
  const items3 = [headerBufferStyle];
  const animatedProps = sources(variableWidthThumbnailsEnabled[8]).useAnimatedProps(fn);
  const items4 = [footerBufferStyle];
  const callback1 = headerBufferStyle.useCallback(() => useThumbnailStyle(index(variableWidthThumbnailsEnabled[14]), { style: headerBufferStyle }), items3);
  const items5 = [index];
  callback2 = headerBufferStyle.useCallback(() => useThumbnailStyle(index(variableWidthThumbnailsEnabled[14]), { style: footerBufferStyle }), items4);
  const memo2 = headerBufferStyle.useMemo(() => index.get(), items5);
  obj = { ref, style: tmp.containerPortrait, sections: memo1, stickyHeaderFooter: true, disableContentWrappers: true, automaticallyAdjustContentInsets: false, showsVerticalScrollIndicator: false, showsHorizontalScrollIndicator: false, initialScrollOrientation: "center", initialScrollItem: memo2, itemSize, renderItem: callback, onScroll, horizontal: true, headerSize: headerBufferSize, footerSize: footerBufferSize, renderHeader: callback1, renderFooter: callback2, onEndReached, endReachedThreshold: onEndReachedThreshold, chunkBase: screenWidth, snapToOffsets: memo, animatedProps };
  return useThumbnailStyle(sources(variableWidthThumbnailsEnabled[15]).AnimatedFastList, obj);
};