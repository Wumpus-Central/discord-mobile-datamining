// === Module 12926: MediaViewerThumbnails ===

// Module 12926 (MediaViewerThumbnails)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import PlatformUtils from "PlatformUtils" /* 1381 */;
import useToken from "useToken" /* 4778 */;
import REAWorkaroundViewDefault from "REAWorkaroundView" /* 4811 */;
import FastImageDefault from "FastImage" /* 6164 */;
import useMediaItemSpoilerState from "useMediaItemSpoilerState" /* 12927 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const ReanimatedRexportDefault = View(4810);
const VisualEffectViewDefault = View(5363);
require = fn;
get_ActivityIndicator = fn(17);
({ Pressable: hasOwnProperty, StyleSheet: metroRequire } = get_ActivityIndicator);
const Constants = fn(8394);
({ THUMBNAIL_WIDTH_MARGIN: closure_7, THUMBNAIL_MARGIN, THUMBNAIL_HEIGHT } = Constants);
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const ReactCompilerGating = fn(558);
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? (function ObscuredView(arg0) {
  let tmp2 = dependencyMap;
  const cResult = c.c(7);
  ({ source, index } = arg0);
  [tmp5, tmp6] = useMediaItemSpoilerState.useMediaItemSpoilerState(index);
  const tmp4 = _slicedToArray(useMediaItemSpoilerState.useMediaItemSpoilerState(index), 2);
  let View = importDefault;
  const token = useToken.useToken(nativeDefault.colors.SPOILER_HIDDEN_BACKGROUND);
  let tmp8 = null;
  if (tmp5) {
    if (!source.spoiler) {
      tmp8 = null;
    }
    if (cResult[0] !== tmp6) {
      const items = [timestampProducer.absoluteFill, tmp6];
      cResult[0] = tmp6;
      cResult[1] = items;
      let tmp9 = items;
    } else {
      tmp9 = cResult[1];
    }
    if (cResult[2] !== token) {
      const ViewResult = VisualEffectViewDefault;
      let str = "light";
      if (tmpResult.isAndroid()) {
        str = "dark";
      }
      const obj4 = { blurTheme: str, style: timestampProducer.absoluteFill, android_fallbackColor: token };
      const tmp12Result = closure_1_8(ViewResult, obj4);
      cResult[2] = token;
      cResult[3] = tmp12Result;
      let tmp11 = tmp12Result;
      tmpResult = PlatformUtils;
    } else {
      tmp11 = cResult[3];
    }
    if (cResult[4] === tmp9) {
    }
    View = ReanimatedRexportDefault.View;
    const obj5 = { style: tmp9, children: tmp11 };
    tmp2 = closure_1_8(View, obj5);
    cResult[4] = tmp9;
    cResult[5] = tmp11;
    cResult[6] = tmp2;
  }
  return tmp8;
}) : (function ObscuredView(source) {
  source = source.source;
  [tmp4, tmp5] = useMediaItemSpoilerState.useMediaItemSpoilerState(source.index);
  useToken;
  let tmp10Result = null;
  if (tmp4) {
    if (source.spoiler) {
      const obj2 = { style: null, children: null };
      const items = [timestampProducer.absoluteFill, tmp5];
      obj2.style = items;
      const tmp7Result = VisualEffectViewDefault;
      let str = "light";
      if (tmpResult.isAndroid()) {
        str = "dark";
      }
      const obj3 = { blurTheme: str, style: timestampProducer.absoluteFill, android_fallbackColor: tmp8 };
      obj2.children = closure_1_8(tmp7Result, obj3);
      tmp10Result = closure_1_8(ReanimatedRexportDefault.View, obj2);
      tmpResult = PlatformUtils;
    } else {
      tmp10Result = null;
    }
  }
  return tmp10Result;
});
const createStyles = fn(5090);
let closure_11 = createStyles.createStyles({ containerPortrait: { height: 60 }, thumbnailButtonPortrait: { overflow: "hidden", marginHorizontal: THUMBNAIL_MARGIN, borderRadius: 2 }, thumbnailImagePortrait: { height: THUMBNAIL_HEIGHT, width: "100%" } });
let closure_12 = noop.memo(function MediaThumbnail(source) {
  source = source.source;
  const index = source.index;
  const onSelect = source.onSelect;
  ({ numSources, selectedIndex, useThumbnailStyle } = source);
  const tmp = closure_11();
  if (Array.isArray(source)) {
    source = source[0];
  }
  const items = [source];
  const memo = noop.useMemo(() => {
    let thumbnail = first.thumbnail;
    if (thumbnail == null) {
      thumbnail = first;
    }
    return { uri: thumbnail.uri };
  }, items);
  const items1 = [onSelect, index];
  const thumbnailStyle = useThumbnailStyle(source, index);
  const callback = noop.useCallback(() => onSelect(index), items1);
  const obj = { style: null, children: null };
  const items2 = [tmp.thumbnailButtonPortrait, thumbnailStyle];
  obj.style = items2;
  const obj2 = { needsOffscreenAlphaCompositing: true, renderToHardwareTextureAndroid: true, accessibilityRole: "imagebutton", accessibilityLabel: "Thumbnail preview, " + index + 1 + " of " + numSources, accessibilityHint: "Double tap to focus", accessibilityState: { selected: selectedIndex === index }, onPress: callback, children: null };
  const items3 = [closure_1_8(FastImageDefault, { style: tmp.thumbnailImagePortrait, source: memo, enableAnimation: false }), closure_1_8(closure_10, { source, index })];
  obj2.children = items3;
  obj.children = options(hasOwnProperty, obj2);
  return closure_1_8(ReanimatedRexportDefault.View, obj);
});
const __initData = { code: "function MediaViewerThumbnailsTsx1(){const{scrollEnabled}=this.__closure;return{scrollEnabled:scrollEnabled.get()};}" };
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
    for (let num = 0; num < thumbnailScrollPositions.length; num = num + 1) {
      let push = items.push;
      if (variableWidthThumbnailsEnabled) {
        let arr = push(thumbnailScrollPositions[num].scrollStart);
      } else {
        let arr3 = push(num * React5);
      }
    }
    return items;
  }, items);
  const tmp = closure_11();
  const selectedIndex = thumbnailScrollPositions(sources(variableWidthThumbnailsEnabled[15]).useSelectedMediaSource(syncer), 1)[0];
  const items1 = [sources, selectedIndex, onSelect, useThumbnailStyle];
  const items2 = [sources.length];
  const callback = headerBufferStyle.useCallback((arg0, index) => closure_2_8(closure_12, { index, source: sources[index], numSources: sources.length, selectedIndex, onSelect, useThumbnailStyle }), items1);
  const memo1 = headerBufferStyle.useMemo(() => {
    const items = [sources.length];
    return items;
  }, items2);
  const obj = sources(variableWidthThumbnailsEnabled[15]);
  const fn = function o() {
    return { scrollEnabled: scrollEnabled.get() };
  };
  fn.__closure = { scrollEnabled };
  fn.__workletHash = 13439565264141;
  fn.__initData = __initData;
  const items3 = [headerBufferStyle];
  const animatedProps = sources(variableWidthThumbnailsEnabled[12]).useAnimatedProps(fn);
  const items4 = [footerBufferStyle];
  const callback1 = headerBufferStyle.useCallback(() => closure_2_8(REAWorkaroundViewDefault, { style: headerBufferStyle }), items3);
  const items5 = [index];
  const callback2 = headerBufferStyle.useCallback(() => closure_2_8(REAWorkaroundViewDefault, { style: footerBufferStyle }), items4);
  const memo2 = headerBufferStyle.useMemo(() => index.get(), items5);
  return useThumbnailStyle(sources(variableWidthThumbnailsEnabled[17]).AnimatedFastList, { ref, style: tmp.containerPortrait, sections: memo1, stickyHeaderFooter: true, disableContentWrappers: true, automaticallyAdjustContentInsets: false, showsVerticalScrollIndicator: false, showsHorizontalScrollIndicator: false, initialScrollOrientation: "center", initialScrollItem: memo2, itemSize, renderItem: callback, onScroll, horizontal: true, headerSize: headerBufferSize, footerSize: footerBufferSize, renderHeader: callback1, renderFooter: callback2, onEndReached, endReachedThreshold: onEndReachedThreshold, chunkBase: screenWidth, snapToOffsets: memo, animatedProps });
};