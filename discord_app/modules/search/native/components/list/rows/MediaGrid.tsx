// === Module 16753: MediaGrid ===

// Module 16753 (MediaGrid)
import SearchPlatformUtils from "SearchPlatformUtils" /* 12431 */;
import MediaGridItemDefault from "MediaGridItem" /* 16749 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const SearchConstants = fn(7952);
({ SEARCH_LIST_HORIZONTAL_PADDING, MEDIA_NUM_COLUMNS: hasOwnProperty, MEDIA_ITEM_GAP_WIDTH: metroRequire } = SearchConstants);
const jsx = fn(21).jsx;
fn(4606);
let createStyles = { container: null };
createStyles = { paddingLeft: SEARCH_LIST_HORIZONTAL_PADDING - 2, paddingRight: SEARCH_LIST_HORIZONTAL_PADDING + 4 };
createStyles.container = createStyles;
let closure_8 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/search/native/components/list/rows/MediaGrid.tsx");

export default function MediaGrid(media) {
  media = media.media;
  const mediaSize = media.mediaSize;
  const onPress = media.onPress;
  const animate = media.animate;
  const items = [media.length, mediaSize, onPress, animate];
  let obj = { style: closure_8().container, children: null };
  const callback = animate.useCallback((arg0) => {
    ({ item, index } = arg0);
    let obj = { animate, size: mediaSize, media: item, onPress, containerStyle: null };
    obj = { itemIndex: index, numItems: media.length, numColumns, spacing };
    obj.containerStyle = SearchPlatformUtils.getMediaGridItemStyles(obj);
    return <tmp itemIndex={index} numItems={media.length} numColumns={numColumns} spacing={spacing} />;
  }, items);
  obj = { numColumns, data: media, renderItem: callback, ItemSeparatorComponent: media(onPress[8]).MediaVerticalSeparator, scrollEnabled: false };
  obj.children = jsx(media(onPress[7]).FlashList, { numColumns, data: media, renderItem: callback, ItemSeparatorComponent: media(onPress[8]).MediaVerticalSeparator, scrollEnabled: false });
  return <View numColumns={numColumns} data={media} renderItem={callback} ItemSeparatorComponent={media(onPress[8]).MediaVerticalSeparator} scrollEnabled={false} />;
};