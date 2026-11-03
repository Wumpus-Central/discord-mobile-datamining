// === Module 14904: MediaViewerThumbnails ===

// Module 14904 (MediaViewerThumbnails)
import PlatformUtils from "PlatformUtils" /* 1377 */;
import _modDef1652 from "module_1652" /* 1652 */;
import useToken from "useToken" /* 5719 */;
import VisualEffectViewDefault from "VisualEffectView" /* 5723 */;
import FastImageDefault from "FastImage" /* 5837 */;
import useMediaItemSpoilerState from "useMediaItemSpoilerState" /* 14905 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
function ObscuredView(source) {
  source = source.source;
  [tmp4, tmp5] = useMediaItemSpoilerState.useMediaItemSpoilerState(source.index);
  useToken;
  let tmp10Result = null;
  if (tmp4) {
    if (source.spoiler) {
      const obj2 = { style: null, children: null };
      items = [absoluteFill.absoluteFill, tmp5];
      obj2.style = items;
      const tmp7Result = VisualEffectViewDefault;
      let str = "light";
      if (tmpResult.isAndroid()) {
        str = "dark";
      }
      const obj3 = { blurTheme: str, style: absoluteFill.absoluteFill, android_fallbackColor: tmp8 };
      obj2.children = React6(tmp7Result, obj3);
      tmp10Result = React6(_modDef1652.View, obj2);
      tmpResult = PlatformUtils;
    } else {
      tmp10Result = null;
    }
  }
  return tmp10Result;
}
get_ActivityIndicator = fn(17);
({ Pressable: hasOwnProperty, StyleSheet: metroRequire } = get_ActivityIndicator);
const Constants = fn(8990);
({ THUMBNAIL_WIDTH_MARGIN: closure_7, THUMBNAIL_MARGIN, THUMBNAIL_HEIGHT } = Constants);
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(5141);
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
  items = [source];
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
  const items3 = [React6(FastImageDefault, { style: tmp.thumbnailImagePortrait, source: memo, enableAnimation: false }), React6(ObscuredView, { source, index })];
  obj2.children = items3;
  obj.children = React7(hasOwnProperty, obj2);
  return React6(_modDef1652.View, obj);
});
let closure_13 = { code: "(function MediaViewerThumbnailsTsx1(){let[scrollEnabled]=this.__closure;return{scrollEnabled:scrollEnabled.get()};})" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/media_viewer/native/components/MediaViewerThumbnails.tsx");

export default function MediaViewerThumbnails(syncer) {
  syncer = syncer.syncer;
  let useThumbnailStyle;
  const sources = syncer.sources;
  _require = sources;
  const index = syncer.index;
  const variableWidthThumbnailsEnabled = syncer.variableWidthThumbnailsEnabled;
  const thumbnailScrollPositions = syncer.thumbnailScrollPositions;
  ({ onEndReached, onEndReachedThreshold } = syncer);
  const thumbnailsProps = syncer.useThumbnailsProps(useThumbnailStyle, sources.length - 1);
  const headerBufferStyle = thumbnailsProps.headerBufferStyle;
  const footerBufferStyle = thumbnailsProps.footerBufferStyle;
  const onSelect = thumbnailsProps.onSelect;
  useThumbnailStyle = thumbnailsProps.useThumbnailStyle;
  items = [thumbnailScrollPositions, variableWidthThumbnailsEnabled];
  ({ ref, headerBufferSize, footerBufferSize, scrollEnabled, onScroll, screenWidth, itemSize } = thumbnailsProps);
  const memo = headerBufferStyle.useMemo(() => {
    items = [];
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
  const tmp4 = _require;
  const tmp5 = variableWidthThumbnailsEnabled;
  const selectedIndex = thumbnailScrollPositions(require("MediaSourceUtil").useSelectedMediaSource(syncer), 1)[0];
  const items1 = [sources, selectedIndex, onSelect, useThumbnailStyle];
  const items2 = [sources.length];
  const callback = headerBufferStyle.useCallback((arg0, index) => React6(closure_12, { index, source: _undefined[index], numSources: _undefined.length, selectedIndex, onSelect, useThumbnailStyle }), items1);
  const memo1 = headerBufferStyle.useMemo(() => {
    items = [_undefined.length];
    return items;
  }, items2);
  const obj2 = require("MediaSourceUtil");
  const items3 = [closure_13, scrollEnabled];
  _require = undefined;
  [tmp9, tmp10] = items3;
  class MediaViewerThumbnailsTsx1 {
    constructor() {
      obj = { scrollEnabled: closure_0.get() };
      return obj;
    }
  }
  const items4 = [tmp10];
  MediaViewerThumbnailsTsx1.__closure = items4;
  MediaViewerThumbnailsTsx1.__workletHash = 12189184507540;
  MediaViewerThumbnailsTsx1.__initData = tmp9;
  const items5 = [headerBufferStyle];
  const animatedProps = require("module_1652").useAnimatedProps(MediaViewerThumbnailsTsx1);
  const items6 = [footerBufferStyle];
  const callback1 = obj.useCallback(() => React6(_modDef1652.View, { style: headerBufferStyle }), items5);
  const items7 = [index];
  const callback2 = obj.useCallback(() => React6(_modDef1652.View, { style: footerBufferStyle }), items6);
  const memo2 = obj.useMemo(() => index.get(), items7);
  return selectedIndex(tmp4(tmp5[14]).AnimatedFastList, { ref, style: tmp.containerPortrait, sections: memo1, stickyHeaderFooter: true, disableContentWrappers: true, automaticallyAdjustContentInsets: false, showsVerticalScrollIndicator: false, showsHorizontalScrollIndicator: false, initialScrollOrientation: "center", initialScrollItem: memo2, itemSize, renderItem: callback, onScroll, horizontal: true, headerSize: headerBufferSize, footerSize: footerBufferSize, renderHeader: callback1, renderFooter: callback2, onEndReached, endReachedThreshold: onEndReachedThreshold, chunkBase: screenWidth, snapToOffsets: memo, animatedProps });
};