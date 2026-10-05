// === Module 16842: MediaGrid ===

// Module 16842 (MediaGrid)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import SearchPlatformUtils from "SearchPlatformUtils" /* 11966 */;
import MediaGridItemDefault from "MediaGridItem" /* 16838 */;
import react from "react" /* 19 */;
import SearchConstants from "SearchConstants" /* 7513 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let media;

let SEARCH_LIST_HORIZONTAL_PADDING;
let hasOwnProperty;
let metroRequire;
let obj2;
const View = react_native.View;
({ SEARCH_LIST_HORIZONTAL_PADDING, MEDIA_NUM_COLUMNS: hasOwnProperty, MEDIA_ITEM_GAP_WIDTH: metroRequire } = SearchConstants);
const jsx = Fragment.jsx;
let obj = { container: obj2 };
obj2 = { paddingLeft: SEARCH_LIST_HORIZONTAL_PADDING - 2, paddingRight: SEARCH_LIST_HORIZONTAL_PADDING + 4 };
let closure_8 = createStyles.createStyles(obj);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((media) => {
  let onPress;
  const tmp = media;
  const obj = media(onPress[6]);
  const cResult = obj.c(11);
  media = media.media;
  const mediaSize = media.mediaSize;
  onPress = media.onPress;
  const animate = media.animate;
  const tmp4 = closure_8();
  if (cResult[0] === animate) {
    if (cResult[1] === media.length) {
      if (cResult[2] === mediaSize) {
        let tmp5;
        if (cResult[3] === onPress) {
          tmp5 = cResult[4];
        }
        if (cResult[5] === media) {
          let tmp6;
          if (cResult[6] === tmp5) {
            tmp6 = cResult[7];
          }
          if (cResult[8] === tmp4.container) {
            let tmp10;
            if (cResult[9] === tmp6) {
              tmp10 = cResult[10];
            }
            return tmp10;
          }
          const tmp13 = <View style={tmp4.container}>{tmp6}</View>;
          cResult[8] = tmp4.container;
          cResult[9] = tmp6;
          cResult[10] = tmp13;
          tmp10 = tmp13;
        }
        const FlashList = tmp(tmp2[9]).FlashList;
        const tmp9 = <FlashList numColumns={numColumns} data={media} renderItem={tmp5} ItemSeparatorComponent={tmp(onPress[10]).MediaVerticalSeparator} scrollEnabled={false} />;
        cResult[5] = media;
        cResult[6] = tmp5;
        cResult[7] = tmp9;
        tmp6 = tmp9;
      }
    }
  }
  const fn = function s(arg0) {
    let index;
    let item;
    ({ item, index } = arg0);
    MediaGridItemDefault;
    const obj2 = SearchPlatformUtils;
    const obj3 = { itemIndex: index, numItems: media.length, numColumns: hasOwnProperty, spacing: metroRequire };
    return <tmp animate={animate} size={mediaSize} media={item} onPress={onPress} containerStyle={obj2.getMediaGridItemStyles(obj3)} />;
  };
  cResult[0] = animate;
  cResult[1] = media.length;
  cResult[2] = mediaSize;
  cResult[3] = onPress;
  cResult[4] = fn;
  tmp5 = fn;
}) : ((media) => {
  media = media.media;
  const mediaSize = media.mediaSize;
  const onPress = media.onPress;
  const animate = media.animate;
  const items = [media.length, mediaSize, onPress, animate];
  const tmp = closure_8();
  const callback = animate.useCallback((arg0) => {
    let index;
    let item;
    ({ item, index } = arg0);
    MediaGridItemDefault;
    const obj2 = SearchPlatformUtils;
    const obj3 = { itemIndex: index, numItems: media.length, numColumns: hasOwnProperty, spacing: metroRequire };
    return <tmp animate={animate} size={mediaSize} media={item} onPress={onPress} containerStyle={obj2.getMediaGridItemStyles(obj3)} />;
  }, items);
  let obj2 = { numColumns, data: media, renderItem: callback, ItemSeparatorComponent: media(onPress[10]).MediaVerticalSeparator, scrollEnabled: false };
  const FlashList = media(onPress[9]).FlashList;
  return <View style={tmp.container}>{null}</View>;
});
const result = size.fileFinishedImporting("modules/search/native/components/list/rows/MediaGrid.tsx");

export default tmp3;