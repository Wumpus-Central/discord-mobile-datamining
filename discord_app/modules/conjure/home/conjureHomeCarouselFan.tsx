// === Module 13051: conjureHomeCarouselFan ===

// Module 13051 (conjureHomeCarouselFan)
import size from "module_2" /* 2 */;

const items = [{ code: "(function conjureHomeCarouselFan_conjureHomeCarouselFanTsx1(steps,stepPx){let[MAX_DEG,CONJURE_HOME_CAROUSEL_STEP_DEG]=this.__closure;const angleDeg=Math.max(-MAX_DEG,Math.min(MAX_DEG,steps*CONJURE_HOME_CAROUSEL_STEP_DEG));const radius=stepPx/(CONJURE_HOME_CAROUSEL_STEP_DEG*Math.PI/180);const dropPx=radius*(1-Math.cos(angleDeg*Math.PI/180));return{angleDeg:angleDeg,dropPx:dropPx};})" }, 12, 4];
let c0;
let c1;
[tmp2, tmp3, tmp4] = items;
function conjureHomeCarouselFan(arg0, arg1) {
  const bound = Math.max(-c0, Math.min(c0, arg0 * c1));
  const obj = { angleDeg: bound, dropPx: null };
  const result = arg1 / (c1 * Math.PI / 180);
  obj.dropPx = result * (1 - Math.cos(bound * Math.PI / 180));
  return obj;
}
const items1 = [tmp3, tmp4];
conjureHomeCarouselFan.__closure = items1;
conjureHomeCarouselFan.__workletHash = 12578708621987;
conjureHomeCarouselFan.__initData = tmp2;
const items2 = [{ code: "(function wrapConjureHomeCarouselDistance_conjureHomeCarouselFanTsx2(distance,offset,loopPx){const moved=distance-offset+loopPx/2;return(moved%loopPx+loopPx)%loopPx-loopPx/2;})" }];
[tmp5] = items2;
function wrapConjureHomeCarouselDistance(arg0, arg1, arg2) {
  return ((arg0 - arg1 + arg2 / 2) % arg2 + arg2) % arg2 - arg2 / 2;
}
wrapConjureHomeCarouselDistance.__workletHash = 7303099380188;
wrapConjureHomeCarouselDistance.__initData = tmp5;
let result = size.fileFinishedImporting("modules/conjure/home/conjureHomeCarouselFan.tsx");

export const CONJURE_HOME_CAROUSEL_SPEED_PX_PER_SECOND = 30;
export { conjureHomeCarouselFan };
export { wrapConjureHomeCarouselDistance };