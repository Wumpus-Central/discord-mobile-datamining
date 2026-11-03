// === Module 1850: rubberBandDecay ===

// Module 1850 (rubberBandDecay)
import _mod1848 from "module_1848" /* 1848 */;

const items = [{ code: "(function rubberBandDecay_Pnpm_rubberBandDecayTs1(animation,now,config){let[SLOPE_FACTOR,DERIVATIVE_EPS,VELOCITY_EPS]=this.__closure;const{lastTimestamp:lastTimestamp,startTimestamp:startTimestamp,current:current,velocity:velocity}=animation;const deltaTime=Math.min(Math.max(now-lastTimestamp,0),64);const clampIndex=Math.abs(current-config.clamp[0])<Math.abs(current-config.clamp[1])?0:1;let derivative=0;if(current<config.clamp[0]||current>config.clamp[1]){derivative=current-config.clamp[clampIndex];}const v=velocity*Math.exp(-(1-config.deceleration)*(now-startTimestamp)*SLOPE_FACTOR)-derivative*config.rubberBandFactor;if(Math.abs(derivative)>DERIVATIVE_EPS){animation.springActive=true;}else if(animation.springActive){animation.current=config.clamp[clampIndex];return true;}else if(Math.abs(v)<VELOCITY_EPS){return true;}animation.current=current+v*config.velocityFactor*deltaTime/1000;animation.velocity=v;animation.lastTimestamp=now;return false;})" }, _mod1848.SLOPE_FACTOR, 0.1, _mod1848.VELOCITY_EPS];
let c0;
let c1;
let c2;
[tmp2, tmp3, tmp4, tmp5] = items;
function rubberBandDecay(current, lastTimestamp, deceleration) {
  current = current.current;
  ({ startTimestamp, velocity } = current);
  const bound = Math.min(Math.max(lastTimestamp - current.lastTimestamp, 0), 64);
  const absolute = Math.abs(current - deceleration.clamp[0]);
  let num = 1;
  if (absolute < Math.abs(current - deceleration.clamp[1])) {
    num = 0;
  }
  let num2 = 0;
  if (tmp3) {
    num2 = current - deceleration.clamp[num];
  }
  const diff = velocity * Math.exp(-1 - deceleration.deceleration * (lastTimestamp - startTimestamp) * c0) - num2 * deceleration.rubberBandFactor;
  if (Math.abs(num2) > c1) {
    current.springActive = true;
  } else if (current.springActive) {
    current.current = deceleration.clamp[num];
    return true;
  } else {
    const _Math = Math;
    if (Math.abs(diff) < c2) {
      return true;
    }
  }
  current.current = current + diff * deceleration.velocityFactor * bound / 1000;
  current.velocity = diff;
  current.lastTimestamp = lastTimestamp;
  return false;
}
const items1 = [tmp3, tmp4, tmp5];
rubberBandDecay.__closure = items1;
rubberBandDecay.__workletHash = 11200745760217;
rubberBandDecay.__initData = tmp2;

export { rubberBandDecay };