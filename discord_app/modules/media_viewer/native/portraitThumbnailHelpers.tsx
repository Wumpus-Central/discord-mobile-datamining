// discord_app/modules/media_viewer/native/portraitThumbnailHelpers.tsx
import size from "../../../../_runtime/metro/00002__.js";

function lerpVarWidthThumbnailScrollBounds(items, arg1) {
  if (0 === items.length) {
    return 0;
  } else {
    let length = arg1;
    if (arg1 < 0) {
      return 0;
    } else {
      if (length >= items.length) {
        length = items.length;
      }
      const _Math = Math;
      const rounded = Math.floor(length);
      if (rounded >= items.length) {
        return items[items.length - 1].scrollStart;
      } else {
        const scrollStart = items[rounded].scrollStart;
        let scrollStart2 = scrollStart;
        if (rounded < items.length - 1) {
          scrollStart2 = items[rounded + 1].scrollStart;
        }
        return scrollStart + tmp3 * (scrollStart2 - scrollStart);
      }
    }
  }
}
lerpVarWidthThumbnailScrollBounds.__closure = {};
lerpVarWidthThumbnailScrollBounds.__workletHash = 5256874583737;
lerpVarWidthThumbnailScrollBounds.__initData = {
  code: "function lerpVarWidthThumbnailScrollBounds_portraitThumbnailHelpersTsx1(positions,position){if(positions.length===0)return 0;if(position<0){return 0;}if(position>=positions.length){position=positions.length;}const index=Math.floor(position);const fraction=position-index;if(index>=positions.length){return positions[positions.length-1].scrollStart;}const startPos=positions[index].scrollStart;const endPos=index<positions.length-1?positions[index+1].scrollStart:startPos;return startPos+fraction*(endPos-startPos);}",
};
const result = size.fileFinishedImporting("modules/media_viewer/native/portraitThumbnailHelpers.tsx");

export { lerpVarWidthThumbnailScrollBounds };
