// _runtime/01730_rubberBandDecay.js
import { isValidRubberBandConfig } from "01729_isValidRubberBandConfig.js";
const require = arg1;
const dependencyMap = arg6;
function rubberBandDecay(current, lastTimestamp, deceleration) {
  let startTimestamp;
  let velocity;
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
  const result = -1 - deceleration.deceleration * (lastTimestamp - startTimestamp);
  const diff = velocity * Math.exp(result * isValidRubberBandConfig.SLOPE_FACTOR) - num2 * deceleration.rubberBandFactor;
  if (Math.abs(num2) > 0.1) {
    current.springActive = true;
  } else if (current.springActive) {
    current.current = deceleration.clamp[num];
    return true;
  } else {
    const _Math = Math;
    const absolute1 = Math.abs(diff);
    if (absolute1 < isValidRubberBandConfig.VELOCITY_EPS) {
      return true;
    }
  }
  current.current = current + diff * deceleration.velocityFactor * bound / 1000;
  current.velocity = diff;
  current.lastTimestamp = lastTimestamp;
  return false;
}
rubberBandDecay.__closure = { SLOPE_FACTOR: require("isValidRubberBandConfig").SLOPE_FACTOR, DERIVATIVE_EPS: 0.1, VELOCITY_EPS: require("isValidRubberBandConfig").VELOCITY_EPS };
rubberBandDecay.__workletHash = 1153024330944;
rubberBandDecay.__initData = { code: "function rubberBandDecay_Pnpm_rubberBandDecayTs1(animation,now,config){const{SLOPE_FACTOR,DERIVATIVE_EPS,VELOCITY_EPS}=this.__closure;const{lastTimestamp:lastTimestamp,startTimestamp:startTimestamp,current:current,velocity:velocity}=animation;const deltaTime=Math.min(Math.max(now-lastTimestamp,0),64);const clampIndex=Math.abs(current-config.clamp[0])<Math.abs(current-config.clamp[1])?0:1;let derivative=0;if(current<config.clamp[0]||current>config.clamp[1]){derivative=current-config.clamp[clampIndex];}const v=velocity*Math.exp(-(1-config.deceleration)*(now-startTimestamp)*SLOPE_FACTOR)-derivative*config.rubberBandFactor;if(Math.abs(derivative)>DERIVATIVE_EPS){animation.springActive=true;}else if(animation.springActive){animation.current=config.clamp[clampIndex];return true;}else if(Math.abs(v)<VELOCITY_EPS){return true;}animation.current=current+v*config.velocityFactor*deltaTime/1000;animation.velocity=v;animation.lastTimestamp=now;return false;}" };
arg5.rubberBandDecay = rubberBandDecay;