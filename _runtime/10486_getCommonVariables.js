// === Module 10486: getCommonVariables ===

// Module 10486 (getCommonVariables)
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import noop from "noop" /* 19 */;
import cancelAnimation from "cancelAnimation" /* 1654 */;

const useMemo = noop.useMemo;
const Dimensions = get_ActivityIndicator.Dimensions;
let closure_3 = Dimensions.get("window");
let closure_4 = { code: "function pnpm_stackTs1(_value){const{screen,modeConfig,getCommonVariables,getCommonStyles,interpolate,Extrapolation}=this.__closure;const{showLength:showLength,snapDirection=\"left\",moveSize=screen.width,stackInterval=18,scaleInterval=0.04,opacityInterval=0.1,rotateZDeg=30}=modeConfig;const{validLength:validLength,value:value,inputRange:inputRange}=getCommonVariables({showLength:showLength,value:_value,snapDirection:snapDirection});const{zIndex:zIndex,opacity:opacity}=getCommonStyles({validLength:validLength,value:value,opacityInterval:opacityInterval,snapDirection:snapDirection});let translateX;let scale;let rotateZ;if(snapDirection===\"left\"){translateX=interpolate(value,inputRange,[-moveSize,0,validLength*stackInterval],Extrapolation.CLAMP);scale=interpolate(value,inputRange,[1,1,1-validLength*scaleInterval],Extrapolation.CLAMP);rotateZ=interpolate(value,inputRange,[-rotateZDeg,0,0],Extrapolation.CLAMP)+\"deg\";}else if(snapDirection===\"right\"){translateX=interpolate(value,inputRange,[-validLength*stackInterval,0,moveSize],Extrapolation.CLAMP);scale=interpolate(value,inputRange,[1-validLength*scaleInterval,1,1],Extrapolation.CLAMP);rotateZ=interpolate(value,inputRange,[0,0,rotateZDeg],Extrapolation.CLAMP)+\"deg\";}const transform=[{translateX:translateX},{scale:scale},{rotateZ:rotateZ}];const styles={transform:transform,zIndex:zIndex,opacity:opacity};return styles;}" };
let closure_5 = { code: "function pnpm_stackTs2(_value){const{screen,modeConfig,getCommonVariables,getCommonStyles,interpolate,Extrapolation}=this.__closure;const{showLength:showLength,snapDirection=\"left\",moveSize=screen.width,stackInterval=18,scaleInterval=0.04,opacityInterval=0.1,rotateZDeg=30}=modeConfig;const{validLength:validLength,value:value,inputRange:inputRange}=getCommonVariables({showLength:showLength,value:_value,snapDirection:snapDirection});const{zIndex:zIndex,opacity:opacity}=getCommonStyles({validLength:validLength,value:value,opacityInterval:opacityInterval,snapDirection:snapDirection});let translateX;let scale;let rotateZ;let translateY;if(snapDirection===\"left\"){translateX=interpolate(value,inputRange,[-moveSize,0,0],Extrapolation.CLAMP);scale=interpolate(value,inputRange,[1,1,1-validLength*scaleInterval],Extrapolation.CLAMP);rotateZ=interpolate(value,inputRange,[-rotateZDeg,0,0],Extrapolation.CLAMP)+\"deg\";translateY=interpolate(value,inputRange,[0,0,validLength*stackInterval],Extrapolation.CLAMP);}else if(snapDirection===\"right\"){translateX=interpolate(value,inputRange,[0,0,moveSize],Extrapolation.CLAMP);scale=interpolate(value,inputRange,[1-validLength*scaleInterval,1,1],Extrapolation.CLAMP);rotateZ=interpolate(value,inputRange,[0,0,rotateZDeg],Extrapolation.CLAMP)+\"deg\";translateY=interpolate(value,inputRange,[validLength*stackInterval,0,0],Extrapolation.CLAMP);}const transform=[{translateX:translateX},{scale:scale},{rotateZ:rotateZ},{translateY:translateY}];const styles={transform:transform,zIndex:zIndex,opacity:opacity};return styles;}" };
function getCommonVariables(showLength) {
  ({ value, snapDirection } = showLength);
  let rounded = Math.floor(Math.abs(value));
  const result = Math.abs(value) % 1;
  if (value < 0) {
    if (result < 0.5) {
      let result1 = 4 * result * result * result;
    } else {
      result1 = 1 - (-2 * result + 2) ** 3 / 2;
    }
    rounded = rounded + result1;
  } else {
    if (result < 0.5) {
      let result2 = 4 * result * result * result;
    } else {
      result2 = 1 - (-2 * result + 2) ** 3 / 2;
    }
    const diff = showLength.showLength - 1;
    const sum = rounded + result2;
    if ("left" === snapDirection) {
      const items = [-1, 0, diff];
      let items1 = items;
    } else if ("right" !== snapDirection) {
      const _Error = Error;
      error = new Error("snapDirection must be set to either left or right");
      throw error;
    } else {
      items1 = [-diff, 0, 1];
    }
    const obj = { inputRange: null, validLength: null, value: null };
    obj[0] = items1;
    obj[1] = diff;
    obj[2] = sum;
    return obj;
  }
}
getCommonVariables.__closure = {};
getCommonVariables.__workletHash = 9545327827217;
getCommonVariables.__initData = { code: "function getCommonVariables_Pnpm_stackTs3(opts){const{showLength:showLength,value:_value,snapDirection:snapDirection}=opts;function easeInOutCubic(v){return v<0.5?4*v*v*v:1-(-2*v+2)**3/2;}const page=Math.floor(Math.abs(_value));const diff=Math.abs(_value)%1;const value=_value<0?-(page+easeInOutCubic(diff)):page+easeInOutCubic(diff);const validLength=showLength-1;let inputRange;if(snapDirection===\"left\")inputRange=[-1,0,validLength];else if(snapDirection===\"right\")inputRange=[-validLength,0,1];else throw new Error(\"snapDirection must be set to either left or right\");return{inputRange:inputRange,validLength:validLength,value:value};}" };
function getCommonStyles(arg0) {
  ({ snapDirection, validLength, value, opacityInterval } = arg0);
  if ("left" === snapDirection) {
    const _Math = Math;
    let obj = cancelAnimation;
    const _Number = Number;
    const items = [-1.5, -1, -1 + Number.MIN_VALUE, 0, validLength];
    const _Number2 = Number;
    const items1 = [Number.MIN_VALUE, validLength, validLength, validLength - 1, -1];
    let result = Math.floor(10000 * obj.interpolate(value, items, items1)) / 100;
    const items2 = [-1, 0, validLength - 1, validLength];
    const items3 = [0.25, 1, 1 - (validLength - 1) * opacityInterval, 0.25];
    let interpolateResult = cancelAnimation.interpolate(value, items2, items3);
    const obj2 = cancelAnimation;
  } else if ("right" !== snapDirection) {
    const _Error = Error;
    error = new Error("snapDirection must be set to either left or right");
    throw error;
  } else {
    const _Math2 = Math;
    const items4 = [-validLength, 0, , , ];
    const _Number3 = Number;
    items4[2] = 1 - Number.MIN_VALUE;
    items4[3] = 1;
    items4[4] = 1.5;
    const items5 = [1, validLength - 1, validLength, validLength];
    const _Number4 = Number;
    items5[4] = Number.MIN_VALUE;
    result = Math.floor(10000 * cancelAnimation.interpolate(value, items4, items5)) / 100;
    const obj4 = cancelAnimation;
    const items6 = [-validLength, 1 - validLength, 0, 1];
    const items7 = [0.25, 1 - (validLength - 1) * opacityInterval, 1, 0.25];
    interpolateResult = cancelAnimation.interpolate(value, items6, items7);
    const obj5 = cancelAnimation;
  }
  obj = { zIndex: Math.round(result), opacity: interpolateResult };
  return obj;
}
getCommonStyles.__closure = { interpolate: cancelAnimation.interpolate };
getCommonStyles.__workletHash = 9067239849373;
getCommonStyles.__initData = { code: "function getCommonStyles_Pnpm_stackTs4(opts){const{interpolate}=this.__closure;const{snapDirection:snapDirection,validLength:validLength,value:value,opacityInterval:opacityInterval}=opts;let zIndex;let opacity;if(snapDirection===\"left\"){zIndex=Math.floor(interpolate(value,[-1.5,-1,-1+Number.MIN_VALUE,0,validLength],[Number.MIN_VALUE,validLength,validLength,validLength-1,-1])*10000)/100;opacity=interpolate(value,[-1,0,validLength-1,validLength],[0.25,1,1-(validLength-1)*opacityInterval,0.25]);}else if(snapDirection===\"right\"){zIndex=Math.floor(interpolate(value,[-validLength,0,1-Number.MIN_VALUE,1,1.5],[1,validLength-1,validLength,validLength,Number.MIN_VALUE])*10000)/100;opacity=interpolate(value,[-validLength,1-validLength,0,1],[0.25,1-(validLength-1)*opacityInterval,1,0.25]);}else{throw new Error(\"snapDirection must be set to either left or right\");}return{zIndex:Math.round(zIndex),opacity:opacity};}" };

export const horizontalStackLayout = function horizontalStackLayout() {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const fn = function l(value) {
    const snapDirection = obj.snapDirection;
    let str = "left";
    if (undefined !== snapDirection) {
      str = snapDirection;
    }
    let width = tmp.moveSize;
    if (undefined === width) {
      width = closure_1_3.width;
    }
    const stackInterval = tmp.stackInterval;
    let num = 18;
    if (undefined !== stackInterval) {
      num = stackInterval;
    }
    const scaleInterval = tmp.scaleInterval;
    let num2 = 0.04;
    if (undefined !== scaleInterval) {
      num2 = scaleInterval;
    }
    const opacityInterval = tmp.opacityInterval;
    let num3 = 0.1;
    if (undefined !== opacityInterval) {
      num3 = opacityInterval;
    }
    const rotateZDeg = tmp.rotateZDeg;
    let num4 = 30;
    if (undefined !== rotateZDeg) {
      num4 = rotateZDeg;
    }
    obj = { showLength: obj.showLength, value, snapDirection: str };
    ({ validLength, value, inputRange } = closure_1_6(obj));
    const tmp3 = closure_1_6(obj);
    ({ zIndex, opacity } = closure_1_7({ validLength, value, opacityInterval: num3, snapDirection: str }));
    if ("left" === str) {
      const obj2 = obj(obj[2]);
      const items = [-width, 0, validLength * num];
      let interpolateResult = obj2.interpolate(value, inputRange, items, obj(obj[2]).Extrapolation.CLAMP);
      const obj3 = obj(obj[2]);
      const items1 = [1, 1, 1 - validLength * num2];
      let interpolateResult1 = obj3.interpolate(value, inputRange, items1, obj(obj[2]).Extrapolation.CLAMP);
      const obj4 = obj(obj[2]);
      const items2 = [-num4, 0, 0];
      const _HermesInternal = HermesInternal;
      let combined = "" + obj4.interpolate(value, inputRange, items2, obj(obj[2]).Extrapolation.CLAMP) + "deg";
    } else if ("right" === str) {
      const obj5 = obj(obj[2]);
      const items3 = [-validLength * num, 0, width];
      interpolateResult = obj5.interpolate(value, inputRange, items3, obj(obj[2]).Extrapolation.CLAMP);
      const obj6 = obj(obj[2]);
      const items4 = [1 - validLength * num2, 1, 1];
      interpolateResult1 = obj6.interpolate(value, inputRange, items4, obj(obj[2]).Extrapolation.CLAMP);
      const obj7 = obj(obj[2]);
      const items5 = [0, 0, num4];
      const _HermesInternal2 = HermesInternal;
      combined = "" + obj7.interpolate(value, inputRange, items5, obj(obj[2]).Extrapolation.CLAMP) + "deg";
    }
    const transform = [{ translateX: interpolateResult }, { scale: interpolateResult1 }, { rotateZ: combined }];
    return { transform, zIndex, opacity };
  };
  obj = { screen: closure_3, modeConfig: obj, getCommonVariables, getCommonStyles, interpolate: obj(1654).interpolate, Extrapolation: obj(1654).Extrapolation };
  fn.__closure = obj;
  fn.__workletHash = 13118376883684;
  fn.__initData = closure_4;
  return fn;
};
export const useHorizontalStackLayout = function useHorizontalStackLayout() {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  let items = [obj, obj];
  obj = undefined;
  if (obj === undefined) {
    obj = {};
  }
  obj = { layout: null, config: null };
  const fn = function l(value) {
    const snapDirection = obj.snapDirection;
    let str = "left";
    if (undefined !== snapDirection) {
      str = snapDirection;
    }
    let width = tmp.moveSize;
    if (undefined === width) {
      width = closure_1_3.width;
    }
    const stackInterval = tmp.stackInterval;
    let num = 18;
    if (undefined !== stackInterval) {
      num = stackInterval;
    }
    const scaleInterval = tmp.scaleInterval;
    let num2 = 0.04;
    if (undefined !== scaleInterval) {
      num2 = scaleInterval;
    }
    const opacityInterval = tmp.opacityInterval;
    let num3 = 0.1;
    if (undefined !== opacityInterval) {
      num3 = opacityInterval;
    }
    const rotateZDeg = tmp.rotateZDeg;
    let num4 = 30;
    if (undefined !== rotateZDeg) {
      num4 = rotateZDeg;
    }
    obj = { showLength: obj.showLength, value, snapDirection: str };
    ({ validLength, value, inputRange } = closure_1_6(obj));
    const tmp3 = closure_1_6(obj);
    ({ zIndex, opacity } = closure_1_7({ validLength, value, opacityInterval: num3, snapDirection: str }));
    if ("left" === str) {
      const obj2 = obj(obj[2]);
      const items = [-width, 0, validLength * num];
      let interpolateResult = obj2.interpolate(value, inputRange, items, obj(obj[2]).Extrapolation.CLAMP);
      const obj3 = obj(obj[2]);
      const items1 = [1, 1, 1 - validLength * num2];
      let interpolateResult1 = obj3.interpolate(value, inputRange, items1, obj(obj[2]).Extrapolation.CLAMP);
      const obj4 = obj(obj[2]);
      const items2 = [-num4, 0, 0];
      const _HermesInternal = HermesInternal;
      let combined = "" + obj4.interpolate(value, inputRange, items2, obj(obj[2]).Extrapolation.CLAMP) + "deg";
    } else if ("right" === str) {
      const obj5 = obj(obj[2]);
      const items3 = [-validLength * num, 0, width];
      interpolateResult = obj5.interpolate(value, inputRange, items3, obj(obj[2]).Extrapolation.CLAMP);
      const obj6 = obj(obj[2]);
      const items4 = [1 - validLength * num2, 1, 1];
      interpolateResult1 = obj6.interpolate(value, inputRange, items4, obj(obj[2]).Extrapolation.CLAMP);
      const obj7 = obj(obj[2]);
      const items5 = [0, 0, num4];
      const _HermesInternal2 = HermesInternal;
      combined = "" + obj7.interpolate(value, inputRange, items5, obj(obj[2]).Extrapolation.CLAMP) + "deg";
    }
    const transform = [{ translateX: interpolateResult }, { scale: interpolateResult1 }, { rotateZ: combined }];
    return { transform, zIndex, opacity };
  };
  const tmp = useMemo(() => {
    let str = "positive";
    if ("right" === obj.snapDirection) {
      str = "negative";
    }
    obj = { type: str, viewCount: obj.showLength };
    const merged = Object.assign(obj);
    return obj;
  }, items);
  fn.__closure = { screen: closure_3, modeConfig: obj, getCommonVariables, getCommonStyles, interpolate: obj(obj[2]).interpolate, Extrapolation: obj(obj[2]).Extrapolation };
  fn.__workletHash = 13118376883684;
  fn.__initData = closure_4;
  obj[0] = fn;
  obj[1] = tmp;
  return obj;
};
export const verticalStackLayout = function verticalStackLayout() {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const fn = function o(value) {
    const snapDirection = obj.snapDirection;
    let str = "left";
    if (undefined !== snapDirection) {
      str = snapDirection;
    }
    let width = tmp.moveSize;
    if (undefined === width) {
      width = closure_1_3.width;
    }
    const stackInterval = tmp.stackInterval;
    let num = 18;
    if (undefined !== stackInterval) {
      num = stackInterval;
    }
    const scaleInterval = tmp.scaleInterval;
    let num2 = 0.04;
    if (undefined !== scaleInterval) {
      num2 = scaleInterval;
    }
    const opacityInterval = tmp.opacityInterval;
    let num3 = 0.1;
    if (undefined !== opacityInterval) {
      num3 = opacityInterval;
    }
    const rotateZDeg = tmp.rotateZDeg;
    let num4 = 30;
    if (undefined !== rotateZDeg) {
      num4 = rotateZDeg;
    }
    obj = { showLength: obj.showLength, value, snapDirection: str };
    ({ validLength, value, inputRange } = closure_1_6(obj));
    const tmp3 = closure_1_6(obj);
    ({ zIndex, opacity } = closure_1_7({ validLength, value, opacityInterval: num3, snapDirection: str }));
    if ("left" === str) {
      const obj2 = obj(closure_1_1[2]);
      const items = [-width, 0, 0];
      let interpolateResult = obj2.interpolate(value, inputRange, items, obj(closure_1_1[2]).Extrapolation.CLAMP);
      const obj3 = obj(closure_1_1[2]);
      const items1 = [1, 1, 1 - validLength * num2];
      let interpolateResult1 = obj3.interpolate(value, inputRange, items1, obj(closure_1_1[2]).Extrapolation.CLAMP);
      const obj4 = obj(closure_1_1[2]);
      const items2 = [-num4, 0, 0];
      const _HermesInternal = HermesInternal;
      let combined = "" + obj4.interpolate(value, inputRange, items2, obj(closure_1_1[2]).Extrapolation.CLAMP) + "deg";
      const obj5 = obj(closure_1_1[2]);
      const items3 = [0, 0, validLength * num];
      let interpolateResult2 = obj5.interpolate(value, inputRange, items3, obj(closure_1_1[2]).Extrapolation.CLAMP);
    } else if ("right" === str) {
      const obj6 = obj(closure_1_1[2]);
      const items4 = [0, 0, width];
      interpolateResult = obj6.interpolate(value, inputRange, items4, obj(closure_1_1[2]).Extrapolation.CLAMP);
      const obj7 = obj(closure_1_1[2]);
      const items5 = [1 - validLength * num2, 1, 1];
      interpolateResult1 = obj7.interpolate(value, inputRange, items5, obj(closure_1_1[2]).Extrapolation.CLAMP);
      const obj8 = obj(closure_1_1[2]);
      const items6 = [0, 0, num4];
      const _HermesInternal2 = HermesInternal;
      combined = "" + obj8.interpolate(value, inputRange, items6, obj(closure_1_1[2]).Extrapolation.CLAMP) + "deg";
      const obj9 = obj(closure_1_1[2]);
      const items7 = [validLength * num, 0, 0];
      interpolateResult2 = obj9.interpolate(value, inputRange, items7, obj(closure_1_1[2]).Extrapolation.CLAMP);
    }
    const transform = [{ translateX: interpolateResult }, { scale: interpolateResult1 }, { rotateZ: combined }, { translateY: interpolateResult2 }];
    return { transform, zIndex, opacity };
  };
  obj = { screen: closure_3, modeConfig: obj, getCommonVariables, getCommonStyles, interpolate: obj(1654).interpolate, Extrapolation: obj(1654).Extrapolation };
  fn.__closure = obj;
  fn.__workletHash = 9752649608963;
  fn.__initData = closure_5;
  return fn;
};