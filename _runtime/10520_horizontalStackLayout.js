// === Module 10520: horizontalStackLayout ===

// Module 10520 (horizontalStackLayout)
import react_native from "react-native" /* 17 */;
import react from "react" /* 19 */;
import _mod1643 from "module_1643" /* 1643 */;

const useMemo = react.useMemo;
const Dimensions = react_native.Dimensions;
const screen = Dimensions.get("window");
const __initData = { code: "function pnpm_stackTs1(_value){const{screen,modeConfig,getCommonVariables,getCommonStyles,interpolate,Extrapolation}=this.__closure;const{showLength:showLength,snapDirection=\"left\",moveSize=screen.width,stackInterval=18,scaleInterval=0.04,opacityInterval=0.1,rotateZDeg=30}=modeConfig;const{validLength:validLength,value:value,inputRange:inputRange}=getCommonVariables({showLength:showLength,value:_value,snapDirection:snapDirection});const{zIndex:zIndex,opacity:opacity}=getCommonStyles({validLength:validLength,value:value,opacityInterval:opacityInterval,snapDirection:snapDirection});let translateX;let scale;let rotateZ;if(snapDirection===\"left\"){translateX=interpolate(value,inputRange,[-moveSize,0,validLength*stackInterval],Extrapolation.CLAMP);scale=interpolate(value,inputRange,[1,1,1-validLength*scaleInterval],Extrapolation.CLAMP);rotateZ=interpolate(value,inputRange,[-rotateZDeg,0,0],Extrapolation.CLAMP)+\"deg\";}else if(snapDirection===\"right\"){translateX=interpolate(value,inputRange,[-validLength*stackInterval,0,moveSize],Extrapolation.CLAMP);scale=interpolate(value,inputRange,[1-validLength*scaleInterval,1,1],Extrapolation.CLAMP);rotateZ=interpolate(value,inputRange,[0,0,rotateZDeg],Extrapolation.CLAMP)+\"deg\";}const transform=[{translateX:translateX},{scale:scale},{rotateZ:rotateZ}];const styles={transform:transform,zIndex:zIndex,opacity:opacity};return styles;}" };
const __initData2 = { code: "function pnpm_stackTs2(_value){const{screen,modeConfig,getCommonVariables,getCommonStyles,interpolate,Extrapolation}=this.__closure;const{showLength:showLength,snapDirection=\"left\",moveSize=screen.width,stackInterval=18,scaleInterval=0.04,opacityInterval=0.1,rotateZDeg=30}=modeConfig;const{validLength:validLength,value:value,inputRange:inputRange}=getCommonVariables({showLength:showLength,value:_value,snapDirection:snapDirection});const{zIndex:zIndex,opacity:opacity}=getCommonStyles({validLength:validLength,value:value,opacityInterval:opacityInterval,snapDirection:snapDirection});let translateX;let scale;let rotateZ;let translateY;if(snapDirection===\"left\"){translateX=interpolate(value,inputRange,[-moveSize,0,0],Extrapolation.CLAMP);scale=interpolate(value,inputRange,[1,1,1-validLength*scaleInterval],Extrapolation.CLAMP);rotateZ=interpolate(value,inputRange,[-rotateZDeg,0,0],Extrapolation.CLAMP)+\"deg\";translateY=interpolate(value,inputRange,[0,0,validLength*stackInterval],Extrapolation.CLAMP);}else if(snapDirection===\"right\"){translateX=interpolate(value,inputRange,[0,0,moveSize],Extrapolation.CLAMP);scale=interpolate(value,inputRange,[1-validLength*scaleInterval,1,1],Extrapolation.CLAMP);rotateZ=interpolate(value,inputRange,[0,0,rotateZDeg],Extrapolation.CLAMP)+\"deg\";translateY=interpolate(value,inputRange,[validLength*stackInterval,0,0],Extrapolation.CLAMP);}const transform=[{translateX:translateX},{scale:scale},{rotateZ:rotateZ},{translateY:translateY}];const styles={transform:transform,zIndex:zIndex,opacity:opacity};return styles;}" };
function getCommonVariables(showLength) {
  let inputRange;
  let snapDirection;
  let value;
  let value1;
  ({ value, snapDirection } = showLength);
  showLength = showLength.showLength;
  const rounded = Math.floor(Math.abs(value));
  const result = Math.abs(value) % 1;
  if (value < 0) {
    let result1;
    if (result < 0.5) {
      result1 = 4 * result * result * result;
    } else {
      result1 = 1 - (-2 * result + 2) ** 3 / 2;
    }
    value1 = -rounded + result1;
  } else {
    let result2;
    if (result < 0.5) {
      result2 = 4 * result * result * result;
    } else {
      result2 = 1 - (-2 * result + 2) ** 3 / 2;
    }
    value1 = rounded + result2;
  }
  const validLength = showLength - 1;
  if ("left" === snapDirection) {
    const items = [-1, 0, validLength];
    inputRange = items;
  } else if ("right" !== snapDirection) {
    const _Error = Error;
    const self = this;
    const self2 = this;
    const error = new Error("snapDirection must be set to either left or right");
    throw error;
  } else {
    inputRange = [-validLength, 0, 1];
  }
  return { inputRange, validLength, value: value1 };
}
getCommonVariables.__closure = {};
getCommonVariables.__workletHash = 9545327827217;
getCommonVariables.__initData = { code: "function getCommonVariables_Pnpm_stackTs3(opts){const{showLength:showLength,value:_value,snapDirection:snapDirection}=opts;function easeInOutCubic(v){return v<0.5?4*v*v*v:1-(-2*v+2)**3/2;}const page=Math.floor(Math.abs(_value));const diff=Math.abs(_value)%1;const value=_value<0?-(page+easeInOutCubic(diff)):page+easeInOutCubic(diff);const validLength=showLength-1;let inputRange;if(snapDirection===\"left\")inputRange=[-1,0,validLength];else if(snapDirection===\"right\")inputRange=[-validLength,0,1];else throw new Error(\"snapDirection must be set to either left or right\");return{inputRange:inputRange,validLength:validLength,value:value};}" };
function getCommonStyles(arg0) {
  let interpolateResult;
  let opacityInterval;
  let result;
  let snapDirection;
  let validLength;
  let value;
  ({ snapDirection, validLength, value, opacityInterval } = arg0);
  if ("left" === snapDirection) {
    const _Math = Math;
    const _Number = Number;
    const items = [-1.5, -1, -1 + Number.MIN_VALUE, 0, validLength];
    const _Number2 = Number;
    const items1 = [Number.MIN_VALUE, validLength, validLength, validLength - 1, -1];
    const obj = _mod1643;
    result = floor(10000 * obj.interpolate(value, items, items1)) / 100;
    const items2 = [-1, 0, validLength - 1, validLength];
    const items3 = [0.25, 1, 1 - (validLength - 1) * opacityInterval, 0.25];
    const obj2 = _mod1643;
    interpolateResult = obj2.interpolate(value, items2, items3);
  } else if ("right" !== snapDirection) {
    const _Error = Error;
    const self = this;
    const self2 = this;
    const error = new Error("snapDirection must be set to either left or right");
    throw error;
  } else {
    const _Math2 = Math;
    const floor2 = Math.floor;
    const items4 = [-validLength, 0, , , ];
    const _Number3 = Number;
    items4[2] = 1 - Number.MIN_VALUE;
    items4[3] = 1;
    items4[4] = 1.5;
    const items5 = [1, validLength - 1, validLength, validLength];
    const _Number4 = Number;
    items5[4] = Number.MIN_VALUE;
    const obj4 = _mod1643;
    result = floor2(10000 * obj4.interpolate(value, items4, items5)) / 100;
    const items6 = [-validLength, 1 - validLength, 0, 1];
    const items7 = [0.25, 1 - (validLength - 1) * opacityInterval, 1, 0.25];
    const obj5 = _mod1643;
    interpolateResult = obj5.interpolate(value, items6, items7);
  }
  const obj3 = { zIndex: Math.round(result), opacity: interpolateResult };
  return obj3;
}
let obj = { interpolate: _mod1643.interpolate };
getCommonStyles.__closure = obj;
getCommonStyles.__workletHash = 9067239849373;
getCommonStyles.__initData = { code: "function getCommonStyles_Pnpm_stackTs4(opts){const{interpolate}=this.__closure;const{snapDirection:snapDirection,validLength:validLength,value:value,opacityInterval:opacityInterval}=opts;let zIndex;let opacity;if(snapDirection===\"left\"){zIndex=Math.floor(interpolate(value,[-1.5,-1,-1+Number.MIN_VALUE,0,validLength],[Number.MIN_VALUE,validLength,validLength,validLength-1,-1])*10000)/100;opacity=interpolate(value,[-1,0,validLength-1,validLength],[0.25,1,1-(validLength-1)*opacityInterval,0.25]);}else if(snapDirection===\"right\"){zIndex=Math.floor(interpolate(value,[-validLength,0,1-Number.MIN_VALUE,1,1.5],[1,validLength-1,validLength,validLength,Number.MIN_VALUE])*10000)/100;opacity=interpolate(value,[-validLength,1-validLength,0,1],[0.25,1-(validLength-1)*opacityInterval,1,0.25]);}else{throw new Error(\"snapDirection must be set to either left or right\");}return{zIndex:Math.round(zIndex),opacity:opacity};}" };

export const horizontalStackLayout = function horizontalStackLayout() {
  let modeConfig;
  if (modeConfig === undefined) {
    modeConfig = {};
  }
  const fn = function l(value) {
    let combined;
    let inputRange;
    let interpolateResult;
    let interpolateResult1;
    let items6;
    let obj;
    let opacity;
    let validLength;
    let zIndex;
    const snapDirection = obj.snapDirection;
    let str = "left";
    const showLength = obj.showLength;
    if (undefined !== snapDirection) {
      str = snapDirection;
    }
    let width = tmp.moveSize;
    if (undefined === width) {
      width = styles.width;
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
    obj = { showLength, value, snapDirection: str };
    ({ validLength, value, inputRange } = getCommonVariables(obj));
    getCommonVariables(obj);
    ({ zIndex, opacity } = getCommonStyles({ validLength, value, opacityInterval: num3, snapDirection: str }));
    getCommonStyles({ validLength, value, opacityInterval: num3, snapDirection: str });
    if ("left" === str) {
      const items = [-width, 0, validLength * num];
      const obj2 = _mod1643;
      interpolateResult = obj2.interpolate(value, inputRange, items, _mod1643.Extrapolation.CLAMP);
      const items1 = [1, 1, 1 - validLength * num2];
      const obj3 = _mod1643;
      interpolateResult1 = obj3.interpolate(value, inputRange, items1, _mod1643.Extrapolation.CLAMP);
      const items2 = [-num4, 0, 0];
      const _HermesInternal = HermesInternal;
      const obj4 = _mod1643;
      combined = "" + obj4.interpolate(value, inputRange, items2, _mod1643.Extrapolation.CLAMP) + "deg";
    } else if ("right" === str) {
      const items3 = [-validLength * num, 0, width];
      const obj6 = _mod1643;
      interpolateResult = obj6.interpolate(value, inputRange, items3, _mod1643.Extrapolation.CLAMP);
      const items4 = [1 - validLength * num2, 1, 1];
      const obj7 = _mod1643;
      interpolateResult1 = obj7.interpolate(value, inputRange, items4, _mod1643.Extrapolation.CLAMP);
      const items5 = [0, 0, num4];
      const _HermesInternal2 = HermesInternal;
      const obj8 = _mod1643;
      combined = "" + obj8.interpolate(value, inputRange, items5, _mod1643.Extrapolation.CLAMP) + "deg";
    }
    const obj5 = { transform: items6, zIndex, opacity };
    items6 = [{ translateX: interpolateResult }, { scale: interpolateResult1 }, { rotateZ: combined }];
    return obj5;
  };
  fn.__closure = { screen, modeConfig, getCommonVariables, getCommonStyles, interpolate: modeConfig(1643).interpolate, Extrapolation: modeConfig(1643).Extrapolation };
  fn.__workletHash = 13118376883684;
  fn.__initData = __initData;
  ({ screen, modeConfig, getCommonVariables, getCommonStyles, interpolate: modeConfig(1643).interpolate, Extrapolation: modeConfig(1643).Extrapolation });
  return fn;
};
export const useHorizontalStackLayout = function useHorizontalStackLayout() {
  let fn;
  let modeConfig;
  let styles;
  if (modeConfig === undefined) {
    modeConfig = {};
  }
  let obj2 = arg1;
  if (arg1 === undefined) {
    obj2 = {};
  }
  let items = [modeConfig, obj2];
  modeConfig = undefined;
  let tmp = useMemo(() => {
    let str = "positive";
    const tmp = obj;
    if ("right" === obj.snapDirection) {
      str = "negative";
    }
    obj = { type: str, viewCount: tmp.showLength };
    const merged = Object.assign(obj2);
    return obj;
  }, items);
  if (modeConfig === undefined) {
    modeConfig = {};
  }
  let obj3 = { layout: fn, config: tmp };
  fn = function l(value) {
    let combined;
    let inputRange;
    let interpolateResult;
    let interpolateResult1;
    let items6;
    let obj;
    let opacity;
    let validLength;
    let zIndex;
    const snapDirection = obj.snapDirection;
    let str = "left";
    const showLength = obj.showLength;
    if (undefined !== snapDirection) {
      str = snapDirection;
    }
    let width = tmp.moveSize;
    if (undefined === width) {
      width = styles.width;
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
    obj = { showLength, value, snapDirection: str };
    ({ validLength, value, inputRange } = getCommonVariables(obj));
    getCommonVariables(obj);
    ({ zIndex, opacity } = getCommonStyles({ validLength, value, opacityInterval: num3, snapDirection: str }));
    getCommonStyles({ validLength, value, opacityInterval: num3, snapDirection: str });
    if ("left" === str) {
      const items = [-width, 0, validLength * num];
      const obj2 = _mod1643;
      interpolateResult = obj2.interpolate(value, inputRange, items, _mod1643.Extrapolation.CLAMP);
      const items1 = [1, 1, 1 - validLength * num2];
      const obj3 = _mod1643;
      interpolateResult1 = obj3.interpolate(value, inputRange, items1, _mod1643.Extrapolation.CLAMP);
      const items2 = [-num4, 0, 0];
      const _HermesInternal = HermesInternal;
      const obj4 = _mod1643;
      combined = "" + obj4.interpolate(value, inputRange, items2, _mod1643.Extrapolation.CLAMP) + "deg";
    } else if ("right" === str) {
      const items3 = [-validLength * num, 0, width];
      const obj6 = _mod1643;
      interpolateResult = obj6.interpolate(value, inputRange, items3, _mod1643.Extrapolation.CLAMP);
      const items4 = [1 - validLength * num2, 1, 1];
      const obj7 = _mod1643;
      interpolateResult1 = obj7.interpolate(value, inputRange, items4, _mod1643.Extrapolation.CLAMP);
      const items5 = [0, 0, num4];
      const _HermesInternal2 = HermesInternal;
      const obj8 = _mod1643;
      combined = "" + obj8.interpolate(value, inputRange, items5, _mod1643.Extrapolation.CLAMP) + "deg";
    }
    const obj5 = { transform: items6, zIndex, opacity };
    items6 = [{ translateX: interpolateResult }, { scale: interpolateResult1 }, { rotateZ: combined }];
    return obj5;
  };
  let obj4 = { screen, modeConfig, getCommonVariables, getCommonStyles, interpolate: modeConfig(1643).interpolate, Extrapolation: modeConfig(1643).Extrapolation };
  fn.__closure = obj4;
  fn.__workletHash = 13118376883684;
  fn.__initData = __initData;
  return obj3;
};
export const verticalStackLayout = function verticalStackLayout() {
  let modeConfig;
  let styles;
  if (modeConfig === undefined) {
    modeConfig = {};
  }
  const fn = function o(value) {
    let combined;
    let inputRange;
    let interpolateResult;
    let interpolateResult1;
    let interpolateResult2;
    let items8;
    let obj;
    let opacity;
    let validLength;
    let zIndex;
    const snapDirection = obj.snapDirection;
    let str = "left";
    const showLength = obj.showLength;
    if (undefined !== snapDirection) {
      str = snapDirection;
    }
    let width = tmp.moveSize;
    if (undefined === width) {
      width = styles.width;
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
    obj = { showLength, value, snapDirection: str };
    ({ validLength, value, inputRange } = getCommonVariables(obj));
    getCommonVariables(obj);
    ({ zIndex, opacity } = getCommonStyles({ validLength, value, opacityInterval: num3, snapDirection: str }));
    getCommonStyles({ validLength, value, opacityInterval: num3, snapDirection: str });
    if ("left" === str) {
      const items = [-width, 0, 0];
      const obj2 = _mod1643;
      interpolateResult = obj2.interpolate(value, inputRange, items, _mod1643.Extrapolation.CLAMP);
      const items1 = [1, 1, 1 - validLength * num2];
      const obj3 = _mod1643;
      interpolateResult1 = obj3.interpolate(value, inputRange, items1, _mod1643.Extrapolation.CLAMP);
      const items2 = [-num4, 0, 0];
      const _HermesInternal = HermesInternal;
      const obj4 = _mod1643;
      combined = "" + obj4.interpolate(value, inputRange, items2, _mod1643.Extrapolation.CLAMP) + "deg";
      const items3 = [0, 0, validLength * num];
      const obj5 = _mod1643;
      interpolateResult2 = obj5.interpolate(value, inputRange, items3, _mod1643.Extrapolation.CLAMP);
    } else if ("right" === str) {
      const items4 = [0, 0, width];
      const obj7 = _mod1643;
      interpolateResult = obj7.interpolate(value, inputRange, items4, _mod1643.Extrapolation.CLAMP);
      const items5 = [1 - validLength * num2, 1, 1];
      const obj8 = _mod1643;
      interpolateResult1 = obj8.interpolate(value, inputRange, items5, _mod1643.Extrapolation.CLAMP);
      const items6 = [0, 0, num4];
      const _HermesInternal2 = HermesInternal;
      const obj9 = _mod1643;
      combined = "" + obj9.interpolate(value, inputRange, items6, _mod1643.Extrapolation.CLAMP) + "deg";
      const items7 = [validLength * num, 0, 0];
      const obj10 = _mod1643;
      interpolateResult2 = obj10.interpolate(value, inputRange, items7, _mod1643.Extrapolation.CLAMP);
    }
    const obj6 = { transform: items8, zIndex, opacity };
    items8 = [{ translateX: interpolateResult }, { scale: interpolateResult1 }, { rotateZ: combined }, { translateY: interpolateResult2 }];
    return obj6;
  };
  let obj2 = { screen, modeConfig, getCommonVariables, getCommonStyles, interpolate: modeConfig(1643).interpolate, Extrapolation: modeConfig(1643).Extrapolation };
  fn.__closure = obj2;
  fn.__workletHash = 9752649608963;
  fn.__initData = __initData2;
  return fn;
};