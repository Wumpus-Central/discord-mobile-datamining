// === Module 12820: conjureHomeCarouselFan ===

// Module 12820 (conjureHomeCarouselFan)
import size from "module_2" /* 2 */;

function conjureHomeCarouselFan(arg0, arg1) {
  const bound = Math.max(-12, Math.min(12, 4 * arg0));
  const obj = { angleDeg: bound, dropPx: null };
  const result = arg1 / (4 * Math.PI / 180);
  obj.dropPx = result * (1 - Math.cos(bound * Math.PI / 180));
  return obj;
}
conjureHomeCarouselFan.__closure = { MAX_DEG: 12, CONJURE_HOME_CAROUSEL_STEP_DEG: 4 };
conjureHomeCarouselFan.__workletHash = 1735946127962;
conjureHomeCarouselFan.__initData = { code: "function conjureHomeCarouselFan_conjureHomeCarouselFanTsx1(steps,stepPx){const{MAX_DEG,CONJURE_HOME_CAROUSEL_STEP_DEG}=this.__closure;const angleDeg=Math.max(-MAX_DEG,Math.min(MAX_DEG,steps*CONJURE_HOME_CAROUSEL_STEP_DEG));const radius=stepPx/(CONJURE_HOME_CAROUSEL_STEP_DEG*Math.PI/180);const dropPx=radius*(1-Math.cos(angleDeg*Math.PI/180));return{angleDeg:angleDeg,dropPx:dropPx};}" };
function wrapConjureHomeCarouselDistance(result, offset, c3) {
  return ((result - offset + c3 / 2) % c3 + c3) % c3 - c3 / 2;
}
wrapConjureHomeCarouselDistance.__closure = {};
wrapConjureHomeCarouselDistance.__workletHash = 6606166991805;
wrapConjureHomeCarouselDistance.__initData = { code: "function wrapConjureHomeCarouselDistance_conjureHomeCarouselFanTsx2(distance,offset,loopPx){const moved=distance-offset+loopPx/2;return(moved%loopPx+loopPx)%loopPx-loopPx/2;}" };
let result = size.fileFinishedImporting("modules/conjure/home/conjureHomeCarouselFan.tsx");

export const CONJURE_HOME_CAROUSEL_SPEED_PX_PER_SECOND = 30;
export { conjureHomeCarouselFan };
export { wrapConjureHomeCarouselDistance };