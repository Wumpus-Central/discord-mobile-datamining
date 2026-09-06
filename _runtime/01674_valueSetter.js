// _runtime/01674_valueSetter.js
const global = arg0;
function valueSetter(iter, value) {
  closure_0 = iter;
  if (flag === undefined) {
    flag = false;
  }
  let step;
  let _animation = iter._animation;
  if (_animation) {
    _animation.cancelled = true;
    iter._animation = null;
  }
  if (typeof value === "function") {
    _animation = value;
    if (typeof value === "function") {
      _animation = value();
    }
    if (iter._value === _animation.current) {
      if (!_animation.isHigherOrder) {
        if (!flag) {
          if (_animation.callback) {
            _animation.callback(true);
          }
        }
      }
    }
    let timestamp = global.__frameTimestamp || global._getAnimationTimestamp();
    _animation.onStart(_animation, iter.value, timestamp, _animation);
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
    iter._animation = _animation;
    if (timestamp < tmp8) {
      timestamp = _animation.timestamp;
    }
    if (_animation.cancelled) {
      if (_animation.callback) {
        _animation.callback(false);
      }
    } else {
      _animation.finished = true;
      _animation.timestamp = timestamp;
      iter._value = _animation.current;
      if (_animation.onFrame(_animation, timestamp)) {
        if (_animation.callback) {
          _animation.callback(true);
        }
      } else {
        let _requestAnimationFrame = requestAnimationFrame;
        let animationFrame = requestAnimationFrame(step);
      }
    }
    tmp8 = _animation.timestamp || 0;
  } else {
    iter._value = value;
  }
}
valueSetter.__closure = {};
valueSetter.__workletHash = 13584629644803;
valueSetter.__initData = {
  code: "function valueSetter_Pnpm_valueSetterTs1(mutable,value,forceUpdate=false){const previousAnimation=mutable._animation;if(previousAnimation){previousAnimation.cancelled=true;mutable._animation=null;}if(typeof value==='function'||value!==null&&typeof value==='object'&&value.onFrame!==undefined){const animation=typeof value==='function'?value():value;if(mutable._value===animation.current&&!animation.isHigherOrder&&!forceUpdate){animation.callback&&animation.callback(true);return;}const initializeAnimation=function(timestamp){animation.onStart(animation,mutable.value,timestamp,previousAnimation);};const currentTimestamp=global.__frameTimestamp||global._getAnimationTimestamp();initializeAnimation(currentTimestamp);const step=function(newTimestamp){const timestamp=newTimestamp<(animation.timestamp||0)?animation.timestamp:newTimestamp;if(animation.cancelled){animation.callback&&animation.callback(false);return;}const finished=animation.onFrame(animation,timestamp);animation.finished=true;animation.timestamp=timestamp;mutable._value=animation.current;if(finished){animation.callback&&animation.callback(true);}else{requestAnimationFrame(step);}};mutable._animation=animation;step(currentTimestamp);}else{if(mutable._value===value&&!forceUpdate){return;}mutable._value=value;}}",
};

export { valueSetter };
