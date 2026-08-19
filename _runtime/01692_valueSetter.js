// === Module 1692: valueSetter ===

// Module 1692 (valueSetter)
const global = arg0;
function valueSetter(iter, closure_1, flag) {
  const _global = iter;
  if (flag === undefined) {
    flag = false;
  }
  let obj;
  let step;
  const _animation = iter._animation;
  if (_animation) {
    _animation.cancelled = true;
    iter._animation = null;
  }
  if (typeof lib === "function") {
    obj = lib;
    if (typeof lib === "function") {
      obj = lib();
    }
    if (iter._value === obj.current) {
      if (!obj.isHigherOrder) {
        if (!flag) {
          if (obj.callback) {
            obj.callback(true);
          }
        }
      }
    }
    let timestamp = _global.__frameTimestamp || _global._getAnimationTimestamp();
    obj.onStart(obj, iter.value, timestamp, _animation);
    step = function step(arg0) {
      let timestamp = arg0;
      if (arg0 < tmp) {
        timestamp = obj.timestamp;
      }
      if (obj.cancelled) {
        if (obj.callback) {
          obj.callback(false);
        }
      } else {
        obj.finished = true;
        obj.timestamp = timestamp;
        closure_0._value = obj.current;
        if (obj.onFrame(obj, timestamp)) {
          if (obj.callback) {
            obj.callback(true);
          }
        } else {
          const _requestAnimationFrame = requestAnimationFrame;
          const animationFrame = requestAnimationFrame(step);
        }
      }
      tmp = obj.timestamp || 0;
    };
    iter._animation = obj;
    if (timestamp < tmp8) {
      timestamp = obj.timestamp;
    }
    if (obj.cancelled) {
      if (obj.callback) {
        obj.callback(false);
      }
    } else {
      obj.finished = true;
      obj.timestamp = timestamp;
      iter._value = obj.current;
      if (obj.onFrame(obj, timestamp)) {
        if (obj.callback) {
          obj.callback(true);
        }
      } else {
        let _requestAnimationFrame = requestAnimationFrame;
        let animationFrame = requestAnimationFrame(step);
      }
    }
    tmp8 = obj.timestamp || 0;
  } else {
    iter._value = lib;
  }
}
valueSetter.__closure = {};
valueSetter.__workletHash = 13584629644803;
valueSetter.__initData = { code: "function valueSetter_Pnpm_valueSetterTs1(mutable,value,forceUpdate=false){const previousAnimation=mutable._animation;if(previousAnimation){previousAnimation.cancelled=true;mutable._animation=null;}if(typeof value==='function'||value!==null&&typeof value==='object'&&value.onFrame!==undefined){const animation=typeof value==='function'?value():value;if(mutable._value===animation.current&&!animation.isHigherOrder&&!forceUpdate){animation.callback&&animation.callback(true);return;}const initializeAnimation=function(timestamp){animation.onStart(animation,mutable.value,timestamp,previousAnimation);};const currentTimestamp=global.__frameTimestamp||global._getAnimationTimestamp();initializeAnimation(currentTimestamp);const step=function(newTimestamp){const timestamp=newTimestamp<(animation.timestamp||0)?animation.timestamp:newTimestamp;if(animation.cancelled){animation.callback&&animation.callback(false);return;}const finished=animation.onFrame(animation,timestamp);animation.finished=true;animation.timestamp=timestamp;mutable._value=animation.current;if(finished){animation.callback&&animation.callback(true);}else{requestAnimationFrame(step);}};mutable._animation=animation;step(currentTimestamp);}else{if(mutable._value===value&&!forceUpdate){return;}mutable._value=value;}}" };
arg5.valueSetter = valueSetter;