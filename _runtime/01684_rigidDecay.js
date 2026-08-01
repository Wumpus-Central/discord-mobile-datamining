// === Module 1684: rigidDecay ===

// Module 1684 (rigidDecay)
const require = arg1;
const dependencyMap = arg6;
function rigidDecay(initialVelocity, lastTimestamp, deceleration) {
  let current;
  let startTimestamp;
  let velocity;
  initialVelocity = initialVelocity.initialVelocity;
  ({ startTimestamp, current, velocity } = initialVelocity);
  const bound = Math.min(Math.max(lastTimestamp - initialVelocity.lastTimestamp, 0), 64);
  const result = -1 - deceleration.deceleration * (lastTimestamp - startTimestamp);
  const result1 = velocity * Math.exp(result * require(1682) /* isValidRubberBandConfig */.SLOPE_FACTOR);
  initialVelocity.current = current + result1 * deceleration.velocityFactor * bound / 1000;
  initialVelocity.velocity = result1;
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
  const absolute = Math.abs(result1);
  return absolute < require(1682) /* isValidRubberBandConfig */.VELOCITY_EPS;
}
rigidDecay.__closure = { SLOPE_FACTOR: require("isValidRubberBandConfig").SLOPE_FACTOR, VELOCITY_EPS: require("isValidRubberBandConfig").VELOCITY_EPS };
rigidDecay.__workletHash = 6356485112123;
rigidDecay.__initData = { code: "function rigidDecay_Pnpm_rigidDecayTs1(animation,now,config){const{SLOPE_FACTOR,VELOCITY_EPS}=this.__closure;const{lastTimestamp:lastTimestamp,startTimestamp:startTimestamp,initialVelocity:initialVelocity,current:current,velocity:velocity}=animation;const deltaTime=Math.min(Math.max(now-lastTimestamp,0),64);const v=velocity*Math.exp(-(1-config.deceleration)*(now-startTimestamp)*SLOPE_FACTOR);animation.current=current+v*config.velocityFactor*deltaTime/1000;animation.velocity=v;animation.lastTimestamp=now;if(config.clamp){if(initialVelocity<0&&animation.current<=config.clamp[0]){animation.current=config.clamp[0];return true;}else if(initialVelocity>0&&animation.current>=config.clamp[1]){animation.current=config.clamp[1];return true;}}return Math.abs(v)<VELOCITY_EPS;}" };
arg5.rigidDecay = rigidDecay;