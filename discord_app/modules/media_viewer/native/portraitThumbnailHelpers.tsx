// === Module 8521: lerpVarWidthThumbnailScrollBounds ===

// Module 8521 (lerpVarWidthThumbnailScrollBounds)
import set from "set" /* 2 */;

function lerpVarWidthThumbnailScrollBounds(closure_1, arg1) {
  if (0 === closure_1.length) {
    return 0;
  } else {
    let length = arg1;
    if (arg1 < 0) {
      return 0;
    } else {
      if (length >= closure_1.length) {
        length = closure_1.length;
      }
      const _Math = Math;
      const rounded = Math.floor(length);
      if (rounded >= closure_1.length) {
        return closure_1[closure_1.length - 1].scrollStart;
      } else {
        const scrollStart = closure_1[rounded].scrollStart;
        let scrollStart2 = scrollStart;
        if (rounded < closure_1.length - 1) {
          scrollStart2 = closure_1[rounded + 1].scrollStart;
        }
        return scrollStart + tmp3 * (scrollStart2 - scrollStart);
      }
    }
  }
}
lerpVarWidthThumbnailScrollBounds.__closure = {};
lerpVarWidthThumbnailScrollBounds.__workletHash = 5256874583737;
lerpVarWidthThumbnailScrollBounds.__initData = { code: "function lerpVarWidthThumbnailScrollBounds_portraitThumbnailHelpersTsx1(positions,position){if(positions.length===0)return 0;if(position<0){return 0;}if(position>=positions.length){position=positions.length;}const index=Math.floor(position);const fraction=position-index;if(index>=positions.length){return positions[positions.length-1].scrollStart;}const startPos=positions[index].scrollStart;const endPos=index<positions.length-1?positions[index+1].scrollStart:startPos;return startPos+fraction*(endPos-startPos);}" };
const result = set.fileFinishedImporting("modules/media_viewer/native/portraitThumbnailHelpers.tsx");

export { lerpVarWidthThumbnailScrollBounds };