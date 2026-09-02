// === Module 16484: MediaGrid ===

// Module 16484 (MediaGrid)
import closure_3 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import MessageEmbedTypes from "MessageEmbedTypes" /* 7632 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

const require = arg1;
({ SEARCH_LIST_HORIZONTAL_PADDING, MEDIA_NUM_COLUMNS: c5, MEDIA_ITEM_GAP_WIDTH: closure_6 } = MessageEmbedTypes);
createCacheKey = { paddingLeft: SEARCH_LIST_HORIZONTAL_PADDING - 2, paddingRight: SEARCH_LIST_HORIZONTAL_PADDING + 4 };
let closure_8 = createCacheKey.createStyles({ container: createCacheKey });
const result = require("set").fileFinishedImporting("modules/search/native/components/list/rows/MediaGrid.tsx");

export default function MediaGrid(media) {
  media = media.media;
  const mediaSize = media.mediaSize;
  const onPress = media.onPress;
  const animate = media.animate;
  const items = [media.length, mediaSize, onPress, animate];
  let obj = { style: callback().container, children: null };
  callback = animate.useCallback((arg0) => {
    ({ item, index } = arg0);
    let obj = { animate, size: mediaSize, media: item, onPress, containerStyle: null };
    const tmp = mediaSize(onPress[5]);
    obj = { itemIndex: index, numItems: media.length, numColumns: closure_1_5, spacing: closure_1_6 };
    obj[4] = media(onPress[6]).getMediaGridItemStyles(obj);
    return closure_1_7(tmp, obj);
  }, items);
  obj = { numColumns: closure_5, data: media, renderItem: callback, ItemSeparatorComponent: media(onPress[8]).MediaVerticalSeparator, scrollEnabled: false };
  obj[1] = jsx(media(onPress[7]).FlashList, { numColumns: closure_5, data: media, renderItem: callback, ItemSeparatorComponent: media(onPress[8]).MediaVerticalSeparator, scrollEnabled: false });
  return <View numColumns={closure_5} data={media} renderItem={callback} ItemSeparatorComponent={media(onPress[8]).MediaVerticalSeparator} scrollEnabled={false} />;
};