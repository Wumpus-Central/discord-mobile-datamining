// === Module 1854: rigidDecay ===

// Module 1854 (rigidDecay)
import _mod1851 from "module_1851" /* 1851 */;

const items = [{ code: "(function rigidDecay_Pnpm_rigidDecayTs1(animation,now,config){let[SLOPE_FACTOR,VELOCITY_EPS]=this.__closure;const{lastTimestamp:lastTimestamp,startTimestamp:startTimestamp,initialVelocity:initialVelocity,current:current,velocity:velocity}=animation;const deltaTime=Math.min(Math.max(now-lastTimestamp,0),64);const v=velocity*Math.exp(-(1-config.deceleration)*(now-startTimestamp)*SLOPE_FACTOR);animation.current=current+v*config.velocityFactor*deltaTime/1000;animation.velocity=v;animation.lastTimestamp=now;if(config.clamp){if(initialVelocity<0&&animation.current<=config.clamp[0]){animation.current=config.clamp[0];return true;}else if(initialVelocity>0&&animation.current>=config.clamp[1]){animation.current=config.clamp[1];return true;}}return Math.abs(v)<VELOCITY_EPS;})" }, _mod1851.SLOPE_FACTOR, _mod1851.VELOCITY_EPS];
let c0;
let c1;
[tmp2, tmp3, tmp4] = items;
function rigidDecay(initialVelocity, lastTimestamp, deceleration) {
  initialVelocity = initialVelocity.initialVelocity;
  ({ startTimestamp, current, velocity } = initialVelocity);
  const bound = Math.min(Math.max(lastTimestamp - initialVelocity.lastTimestamp, 0), 64);
  const result = velocity * Math.exp(-1 - deceleration.deceleration * (lastTimestamp - startTimestamp) * c0);
  initialVelocity.current = current + result * deceleration.velocityFactor * bound / 1000;
  initialVelocity.velocity = result;
  initialVelocity.lastTimestamp = lastTimestamp;
  if (deceleration.clamp) {
    if (initialVelocity < 0) {
      if (initialVelocity.current <= deceleration.clamp[0]) {
        initialVelocity.current = deceleration.clamp[0];
        return true;
      }
    }
    if (initialVelocity > 0) {
      if (initialVelocity.current >= deceleration.clamp[1]) {
        initialVelocity.current = deceleration.clamp[1];
        return true;
      }
    }
  }
  return Math.abs(result) < c1;
}
const items1 = [tmp3, tmp4];
rigidDecay.__closure = items1;
rigidDecay.__workletHash = 10971882511426;
rigidDecay.__initData = tmp2;

export { rigidDecay };