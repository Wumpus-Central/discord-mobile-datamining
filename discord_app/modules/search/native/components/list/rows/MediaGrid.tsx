// discord_app/modules/search/native/components/list/rows/MediaGrid.tsx
import noop from "noop";
import { View } from "get ActivityIndicator";
import MessageEmbedTypes from "MessageEmbedTypes";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

let SEARCH_LIST_HORIZONTAL_PADDING;
let c5;
let closure_6;
const require = arg1;
({ SEARCH_LIST_HORIZONTAL_PADDING, MEDIA_NUM_COLUMNS: c5, MEDIA_ITEM_GAP_WIDTH: closure_6 } = MessageEmbedTypes);
createCacheKey = { paddingLeft: SEARCH_LIST_HORIZONTAL_PADDING - 2, paddingRight: SEARCH_LIST_HORIZONTAL_PADDING + 4 };
let closure_8 = createCacheKey.createStyles({ container: createCacheKey });
const result = require("MessageEmbedTypes").fileFinishedImporting("modules/search/native/components/list/rows/MediaGrid.tsx");

export default function MediaGrid(media) {
  media = media.media;
  const mediaSize = media.mediaSize;
  const onPress = media.onPress;
  const animate = media.animate;
  const items = [media.length, mediaSize, onPress, animate];
  let obj = { style: callback().container, children: null };
  callback = animate.useCallback((arg0) => {
    let index;
    let item;
    ({ item, index } = arg0);
    let obj = { animate, size: mediaSize, media: item, onPress, containerStyle: null };
    const tmp = mediaSize(onPress[5]);
    obj = { itemIndex: index, numItems: media.length, numColumns: outer1_5, spacing: outer1_6 };
    obj[4] = media(onPress[6]).getMediaGridItemStyles(obj);
    return outer1_7(tmp, obj);
  }, items);
  obj = { numColumns: closure_5, data: media, renderItem: callback, ItemSeparatorComponent: null, scrollEnabled: false };
  obj[3] = media(onPress[8]).MediaVerticalSeparator;
  obj[1] = jsx(media(onPress[7]).FlashList, { numColumns: closure_5, data: media, renderItem: callback, ItemSeparatorComponent: null, scrollEnabled: false });
  return <View numColumns={closure_5} data={media} renderItem={callback} ItemSeparatorComponent={null} scrollEnabled={false} />;
};