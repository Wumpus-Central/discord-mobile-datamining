// === Module 7969: portraitThumbnailHelpers ===

// Module 7969 (portraitThumbnailHelpers)
import size from "module_2" /* 2 */;

function lerpVarWidthThumbnailScrollBounds(thumbnailScrollPositions, arg1) {
  if (0 === thumbnailScrollPositions.length) {
    return 0;
  } else {
    let length = arg1;
    if (arg1 < 0) {
      return 0;
    } else {
      if (length >= thumbnailScrollPositions.length) {
        length = thumbnailScrollPositions.length;
      }
      const _Math = Math;
      const rounded = Math.floor(length);
      if (rounded >= thumbnailScrollPositions.length) {
        return thumbnailScrollPositions[thumbnailScrollPositions.length - 1].scrollStart;
      } else {
        const scrollStart = thumbnailScrollPositions[rounded].scrollStart;
        let scrollStart2 = scrollStart;
        if (rounded < thumbnailScrollPositions.length - 1) {
          scrollStart2 = thumbnailScrollPositions[rounded + 1].scrollStart;
        }
        return scrollStart + tmp3 * (scrollStart2 - scrollStart);
      }
    }
  }
}
lerpVarWidthThumbnailScrollBounds.__closure = {};
lerpVarWidthThumbnailScrollBounds.__workletHash = 5256874583737;
lerpVarWidthThumbnailScrollBounds.__initData = { code: "function lerpVarWidthThumbnailScrollBounds_portraitThumbnailHelpersTsx1(positions,position){if(positions.length===0)return 0;if(position<0){return 0;}if(position>=positions.length){position=positions.length;}const index=Math.floor(position);const fraction=position-index;if(index>=positions.length){return positions[positions.length-1].scrollStart;}const startPos=positions[index].scrollStart;const endPos=index<positions.length-1?positions[index+1].scrollStart:startPos;return startPos+fraction*(endPos-startPos);}" };
const result = size.fileFinishedImporting("modules/media_viewer/native/portraitThumbnailHelpers.tsx");

export { lerpVarWidthThumbnailScrollBounds };