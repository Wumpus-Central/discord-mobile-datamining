// discord_app/modules/search/native/components/list/rows/MediaGrid.tsx
import noop from "../../../../../../../_runtime/00019_noop.js";
import { View } from "../../../../../../../_runtime/00017_get_ActivityIndicator.js";
import MessageEmbedTypes from "../../../../SearchConstants.tsx";
import { jsx } from "../../../../../../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";

const require = fn;
({ SEARCH_LIST_HORIZONTAL_PADDING, MEDIA_NUM_COLUMNS: c5, MEDIA_ITEM_GAP_WIDTH: closure_6 } = MessageEmbedTypes);
const createCacheKey = { paddingLeft: SEARCH_LIST_HORIZONTAL_PADDING - 2, paddingRight: SEARCH_LIST_HORIZONTAL_PADDING + 4 };
let closure_8 = createCacheKey.createStyles({ container: createCacheKey });
const result = require("obj132").fileFinishedImporting("modules/search/native/components/list/rows/MediaGrid.tsx");

export default function MediaGrid(media) {
  media = media.media;
  const mediaSize = media.mediaSize;
  const onPress = media.onPress;
  const animate = media.animate;
  const items = [media.length, mediaSize, onPress, animate];
  { style: callback().container, children: null };
  callback = animate.useCallback((arg0) => {
    ({ item, index } = arg0);
    const tmp = mediaSize(onPress[5]);
    const obj = { itemIndex: index, numItems: media.length, numColumns: closure_1_5, spacing: closure_1_6 };
    obj[4] = media(onPress[6]).getMediaGridItemStyles(obj);
    return <tmp itemIndex={index} numItems={media.length} numColumns={closure_1_5} spacing={closure_1_6} />;
  }, items);
  let obj = { numColumns: closure_5, data: media, renderItem: callback, ItemSeparatorComponent: media(onPress[8]).MediaVerticalSeparator, scrollEnabled: false };
  obj[1] = jsx(media(onPress[7]).FlashList, { numColumns: closure_5, data: media, renderItem: callback, ItemSeparatorComponent: media(onPress[8]).MediaVerticalSeparator, scrollEnabled: false });
  return <View numColumns={closure_5} data={media} renderItem={callback} ItemSeparatorComponent={media(onPress[8]).MediaVerticalSeparator} scrollEnabled={false} />;
};