// discord_app/modules/media_viewer/native/components/MediaViewerThumbnails.tsx
import PlatformUtils from "../../../../utils/PlatformUtils.tsx";
import useToken from "../../../../design/tokens/native/useToken.tsx";
import ReanimatedRexportDefault from "../../../reanimated/ReanimatedRexport.tsx";
import REAWorkaroundViewDefault from "../../../reanimated/native/REAWorkaroundView.tsx";
import FastImageDefault from "../../../../components_native/common/FastImage.tsx";
import useMediaItemSpoilerState from "../useMediaItemSpoilerState.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
function ObscuredView(source) {
  source = source.source;
  let obj = useMediaItemSpoilerState;
  [tmp4, tmp5] = _slicedToArray(obj.useMediaItemSpoilerState(source.index), 2);
  useToken;
  let tmp10Result = null;
  if (tmp4) {
    if (source.spoiler) {
      obj = { style: null, children: null };
      const items = [absoluteFill.absoluteFill, tmp5];
      obj.style = items;
      const tmp11 = absoluteFill;
      const tmp7Result = tmp7(4965);
      let str = "light";
      if (tmpResult.isAndroid()) {
        str = "dark";
      }
      obj = { blurTheme: str, style: tmp11.absoluteFill, android_fallbackColor: tmp8 };
      obj.children = React6(tmp7Result, obj);
      tmp10Result = tmp10(tmp7(4296).View, obj);
      tmpResult = PlatformUtils;
    } else {
      tmp10Result = null;
    }
  }
  return tmp10Result;
}
get_ActivityIndicator = fn(17);
({ Pressable: hasOwnProperty, StyleSheet: metroRequire } = get_ActivityIndicator);
const Constants = fn(8292);
({ THUMBNAIL_WIDTH_MARGIN: closure_7, THUMBNAIL_MARGIN, THUMBNAIL_HEIGHT } = Constants);
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(4560);
let closure_11 = createStyles.createStyles({
  containerPortrait: { height: 60 },
  thumbnailButtonPortrait: { overflow: "hidden", marginHorizontal: THUMBNAIL_MARGIN, borderRadius: 2 },
  thumbnailImagePortrait: { height: THUMBNAIL_HEIGHT, width: "100%" },
});
let closure_12 = noop.memo((onSelect) => {
  ({ source, index } = onSelect);
  onSelect = onSelect.onSelect;
  ({ numSources, selectedIndex, useThumbnailStyle } = onSelect);
  const tmp = closure_11();
  let first = source;
  if (Array.isArray(source)) {
    first = source[0];
  }
  const items = [onSelect, index];
  const thumbnailStyle = useThumbnailStyle(first, index);
  const callback = noop.useCallback(() => onSelect(index), items);
  let obj = { style: null, children: null };
  const items1 = [tmp.thumbnailButtonPortrait, thumbnailStyle];
  obj.style = items1;
  obj = {
    needsOffscreenAlphaCompositing: true,
    renderToHardwareTextureAndroid: true,
    accessibilityRole: "imagebutton",
    accessibilityLabel: "Thumbnail preview, " + index + 1 + " of " + numSources,
    accessibilityHint: "Double tap to focus",
    accessibilityState: { selected: selectedIndex === index },
    onPress: callback,
    children: null,
  };
  obj = { style: tmp.thumbnailImagePortrait, source: null, enableAnimation: false };
  let thumbnail = first.thumbnail;
  if (thumbnail == null) {
    thumbnail = first;
  }
  obj.source = thumbnail;
  const items2 = [React6(FastImageDefault, obj), React6(ObscuredView, { source: first, index })];
  obj.children = items2;
  obj.children = React7(hasOwnProperty, obj);
  return React6(ReanimatedRexportDefault.View, obj);
});
const __initData = {
  code: "function MediaViewerThumbnailsTsx1(){const{scrollEnabled}=this.__closure;return{scrollEnabled:scrollEnabled.get()};}",
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/media_viewer/native/components/MediaViewerThumbnails.tsx");

export default function MediaViewerThumbnails(syncer) {
  syncer = syncer.syncer;
  let onSelect;
  const sources = syncer.sources;
  const index = syncer.index;
  const variableWidthThumbnailsEnabled = syncer.variableWidthThumbnailsEnabled;
  const thumbnailScrollPositions = syncer.thumbnailScrollPositions;
  ({ onEndReached, onEndReachedThreshold } = syncer);
  const thumbnailsProps = syncer.useThumbnailsProps(onSelect, sources.length - 1);
  const headerBufferStyle = thumbnailsProps.headerBufferStyle;
  const footerBufferStyle = thumbnailsProps.footerBufferStyle;
  const scrollEnabled = thumbnailsProps.scrollEnabled;
  onSelect = thumbnailsProps.onSelect;
  const useThumbnailStyle = thumbnailsProps.useThumbnailStyle;
  let items = [thumbnailScrollPositions, variableWidthThumbnailsEnabled];
  ({ ref, headerBufferSize, footerBufferSize, onScroll, screenWidth, itemSize } = thumbnailsProps);
  const memo = headerBufferStyle.useMemo(() => {
    const items = [];
    let num = 0;
    if (0 < thumbnailScrollPositions.length) {
      do {
        let push = items.push;
        if (variableWidthThumbnailsEnabled) {
          let arr = push(thumbnailScrollPositions[num].scrollStart);
        } else {
          arr = push(num * React5);
        }
        num = num + 1;
      } while (num < thumbnailScrollPositions.length);
    }
    return items;
  }, items);
  let obj = sources(variableWidthThumbnailsEnabled[13]);
  const selectedIndex = thumbnailScrollPositions(obj.useSelectedMediaSource(syncer), 1)[0];
  const items1 = [sources, selectedIndex, onSelect, useThumbnailStyle];
  const items2 = [sources.length];
  const callback = headerBufferStyle.useCallback(
    (arg0, index) =>
      React6(closure_12, {
        index,
        source: sources[index],
        numSources: sources.length,
        selectedIndex,
        onSelect,
        useThumbnailStyle,
      }),
    items1,
  );
  const memo1 = headerBufferStyle.useMemo(() => {
    const items = [sources.length];
    return items;
  }, items2);
  let tmp = closure_11();
  const fn = function n() {
    return { scrollEnabled: scrollEnabled.get() };
  };
  fn.__closure = { scrollEnabled };
  fn.__workletHash = 13439565264141;
  fn.__initData = __initData;
  const items3 = [headerBufferStyle];
  const animatedProps = sources(variableWidthThumbnailsEnabled[8]).useAnimatedProps(fn);
  const items4 = [footerBufferStyle];
  const callback1 = headerBufferStyle.useCallback(
    () => React6(REAWorkaroundViewDefault, { style: headerBufferStyle }),
    items3,
  );
  const items5 = [index];
  const callback2 = headerBufferStyle.useCallback(
    () => React6(REAWorkaroundViewDefault, { style: footerBufferStyle }),
    items4,
  );
  const memo2 = headerBufferStyle.useMemo(() => index.get(), items5);
  obj = {
    ref,
    style: tmp.containerPortrait,
    sections: memo1,
    stickyHeaderFooter: true,
    disableContentWrappers: true,
    automaticallyAdjustContentInsets: false,
    showsVerticalScrollIndicator: false,
    showsHorizontalScrollIndicator: false,
    initialScrollOrientation: "center",
    initialScrollItem: memo2,
    itemSize,
    renderItem: callback,
    onScroll,
    horizontal: true,
    headerSize: headerBufferSize,
    footerSize: footerBufferSize,
    renderHeader: callback1,
    renderFooter: callback2,
    onEndReached,
    endReachedThreshold: onEndReachedThreshold,
    chunkBase: screenWidth,
    snapToOffsets: memo,
    animatedProps,
  };
  return useThumbnailStyle(sources(variableWidthThumbnailsEnabled[15]).AnimatedFastList, obj);
}
