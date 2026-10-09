// discord_app/modules/search/native/components/list/rows/MediaGrid.tsx
import SearchPlatformUtils from "../../../SearchPlatformUtils.tsx";
import MediaGridItemDefault from "MediaGridItem.tsx";
import noop from "../../../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const SearchConstants = fn(9285);
({
  SEARCH_LIST_HORIZONTAL_PADDING,
  MEDIA_NUM_COLUMNS: hasOwnProperty,
  MEDIA_ITEM_GAP_WIDTH: metroRequire,
} = SearchConstants);
const jsx = fn(21).jsx;
const createStyles = fn(5091);
let obj2 = {
  container: { paddingLeft: SEARCH_LIST_HORIZONTAL_PADDING - 2, paddingRight: SEARCH_LIST_HORIZONTAL_PADDING + 4 },
};
let closure_8 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/search/native/components/list/rows/MediaGrid.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function MediaGrid(media) {
      const cResult = media(onPress[6]).c(11);
      media = media.media;
      const mediaSize = media.mediaSize;
      onPress = media.onPress;
      const animate = media.animate;
      const tmp4 = closure_8();
      if (cResult[0] === animate) {
        if (cResult[1] === media.length) {
          if (cResult[2] === mediaSize) {
            if (cResult[3] === onPress) {
              let tmp5 = cResult[4];
            }
            if (cResult[5] === media) {
              if (cResult[6] === tmp5) {
                let tmp6 = cResult[7];
              }
              if (cResult[8] === tmp4.container) {
                if (cResult[9] === tmp6) {
                  let tmp10 = cResult[10];
                }
                return tmp10;
              }
              const obj2 = { style: tmp4.container, children: tmp6 };
              const tmp13 = <View style={tmp4.container}>{tmp6}</View>;
              cResult[8] = tmp4.container;
              cResult[9] = tmp6;
              cResult[10] = tmp13;
              tmp10 = tmp13;
            }
            const obj3 = {
              numColumns,
              data: media,
              renderItem: tmp5,
              ItemSeparatorComponent: tmp(tmp2[10]).MediaVerticalSeparator,
              scrollEnabled: false,
            };
            const tmp9 = jsx(tmp(tmp2[9]).FlashList, {
              numColumns,
              data: media,
              renderItem: tmp5,
              ItemSeparatorComponent: tmp(tmp2[10]).MediaVerticalSeparator,
              scrollEnabled: false,
            });
            cResult[5] = media;
            cResult[6] = tmp5;
            cResult[7] = tmp9;
            tmp6 = tmp9;
          }
        }
      }
      const fn = function s(arg0) {
        ({ item, index } = arg0);
        const obj = { animate, size: mediaSize, media: item, onPress, containerStyle: null };
        obj.containerStyle = SearchPlatformUtils.getMediaGridItemStyles({
          itemIndex: index,
          numItems: media.length,
          numColumns,
          spacing,
        });
        return <tmp animate={animate} size={mediaSize} media={item} onPress={onPress} containerStyle={null} />;
      };
      cResult[0] = animate;
      cResult[1] = media.length;
      cResult[2] = mediaSize;
      cResult[3] = onPress;
      cResult[4] = fn;
      tmp5 = fn;
      let obj = media(onPress[6]);
    }
  : function MediaGrid(media) {
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
      obj.children = jsx(media(onPress[9]).FlashList, {
        numColumns,
        data: media,
        renderItem: callback,
        ItemSeparatorComponent: media(onPress[10]).MediaVerticalSeparator,
        scrollEnabled: false,
      });
      return <View style={closure_8().container}>{null}</View>;
    };
