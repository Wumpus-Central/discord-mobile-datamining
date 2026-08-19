// discord_app/modules/media_viewer/native/components/MediaViewerThumbnails.tsx
import obj132 from "../../../../utils/PlatformUtils.tsx";
import map from "../../../../design/tokens/native/useToken.tsx";
import _modDef4115 from "../../../reanimated/ReanimatedRexport.tsx";
import isBlurDisabledDefault from "../../../visual_effect_view/native/VisualEffectView.tsx";
import useMediaItemSpoilerState from "../useMediaItemSpoilerState.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__slicedToArray.js";
import importAllResult from "../../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import THUMBNAIL_MARGIN from "../Constants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

require = fn;
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
      const tmp7Result = isBlurDisabledDefault;
      let str = "light";
      if (tmpResult.isAndroid()) {
        str = "dark";
      }
      obj = { blurTheme: null, style: null, android_fallbackColor: null };
      obj[0] = str;
      obj[1] = absoluteFill.absoluteFill;
      obj[2] = tmp8;
      obj[1] = callback(tmp7Result, obj);
      tmp10Result = callback(_modDef4115.View, obj);
      tmpResult = obj132;
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
  const items1 = [tmp.thumbnailButtonPortrait, thumbnailStyle];
  { needsOffscreenAlphaCompositing: true, renderToHardwareTextureAndroid: true, accessibilityRole: "imagebutton", accessibilityLabel: "Thumbnail preview, " + index + 1 + " of " + numSources, accessibilityHint: "Double tap to focus", accessibilityState: { selected: selectedIndex === index }, onPress: callback, children: null };
  const obj = { style: tmp.thumbnailImagePortrait, source: null, enableAnimation: false };
  let thumbnail = first.thumbnail;
  if (thumbnail == null) {
    thumbnail = first;
  }
  obj[1] = thumbnail;
  const items2 = [callback(onSelect(5449), obj), callback(ObscuredView, { source: first, index })];
  obj[7] = items2;
  obj[1] = callback2(closure_5, obj);
  return callback(onSelect(4115).View, obj);
});
let closure_13 = { code: "function MediaViewerThumbnailsTsx1(){const{scrollEnabled}=this.__closure;return{scrollEnabled:scrollEnabled.get()};}" };
const result = require("obj132").fileFinishedImporting("modules/media_viewer/native/components/MediaViewerThumbnails.tsx");

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
        arr = push(num * onSelect);
      }
    }
    return items;
  }, items);
  let obj = sources(variableWidthThumbnailsEnabled[13]);
  const first = thumbnailScrollPositions(obj.useSelectedMediaSource(syncer), 1)[0];
  const items1 = [sources, first, onSelect, useThumbnailStyle];
  const items2 = [sources.length];
  const callback = headerBufferStyle.useCallback((arg0, index) => useThumbnailStyle(closure_1_12, { index, source: sources[index], numSources: sources.length, selectedIndex: first, onSelect, useThumbnailStyle }), items1);
  const memo1 = headerBufferStyle.useMemo(() => {
    const items = [sources.length];
    return items;
  }, items2);
  const tmp = callback2();
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