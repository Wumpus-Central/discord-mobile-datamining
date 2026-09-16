// discord_app/modules/search/native/components/list/rows/MediaGrid.tsx
import SearchPlatformUtils from "../../../SearchPlatformUtils.tsx";
import MediaGridItemDefault from "MediaGridItem.tsx";
import noop from "../../../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const SearchConstants = fn(7994);
({
  SEARCH_LIST_HORIZONTAL_PADDING,
  MEDIA_NUM_COLUMNS: hasOwnProperty,
  MEDIA_ITEM_GAP_WIDTH: metroRequire,
} = SearchConstants);
const jsx = fn(21).jsx;
const createStyles = fn(4638);
const obj2 = {
  container: { paddingLeft: SEARCH_LIST_HORIZONTAL_PADDING - 2, paddingRight: SEARCH_LIST_HORIZONTAL_PADDING + 4 },
};
let closure_8 = createStyles.createStyles(obj2);
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
    const obj = { animate, size: mediaSize, media: item, onPress, containerStyle: null };
    obj.containerStyle = SearchPlatformUtils.getMediaGridItemStyles({
      itemIndex: index,
      numItems: media.length,
      numColumns,
      spacing,
    });
    return <tmp animate={animate} size={mediaSize} media={item} onPress={onPress} containerStyle={null} />;
  }, items);
  let tmp = closure_8();
  obj.children = jsx(media(onPress[7]).FlashList, {
    numColumns,
    data: media,
    renderItem: callback,
    ItemSeparatorComponent: media(onPress[8]).MediaVerticalSeparator,
    scrollEnabled: false,
  });
  return <View style={closure_8().container}>{null}</View>;
}
