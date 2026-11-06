// _runtime/10781_stack.js
import _mod17 from "metro/00017__.js";
import _mod19 from "metro/00019__.js";
import _mod1652 from "metro/01652__.js";

const require = globalThis.__r;

function horizontalStackLayout(arg0) {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  items = [
    _undefined5,
    _undefined4,
    obj,
    getCommonVariables,
    getCommonStyles,
    _mod1652.interpolate,
    _mod1652.Extrapolation,
  ];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  c4 = undefined;
  c5 = undefined;
  [tmp, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7] = items;
  function pnpm_stackTs1(value) {
    const snapDirection = _undefined2.snapDirection;
    let str = "left";
    if (undefined !== snapDirection) {
      str = snapDirection;
    }
    let width = _undefined2.moveSize;
    if (undefined === width) {
      width = _undefined.width;
    }
    const stackInterval = _undefined2.stackInterval;
    let num = 18;
    if (undefined !== stackInterval) {
      num = stackInterval;
    }
    const scaleInterval = _undefined2.scaleInterval;
    let num2 = 0.04;
    if (undefined !== scaleInterval) {
      num2 = scaleInterval;
    }
    const opacityInterval = _undefined2.opacityInterval;
    let num3 = 0.1;
    if (undefined !== opacityInterval) {
      num3 = opacityInterval;
    }
    const rotateZDeg = _undefined2.rotateZDeg;
    let num4 = 30;
    if (undefined !== rotateZDeg) {
      num4 = rotateZDeg;
    }
    ({ validLength, value, inputRange } = _undefined3({
      showLength: _undefined2.showLength,
      value,
      snapDirection: str,
    }));
    const obj = { showLength: _undefined2.showLength, value, snapDirection: str };
    const tmp3 = _undefined3({ showLength: _undefined2.showLength, value, snapDirection: str });
    ({ zIndex, opacity } = _undefined4({ validLength, value, opacityInterval: num3, snapDirection: str }));
    if ("left" === str) {
      items = [-width, 0, validLength * num];
      let tmp10 = _undefined5(value, inputRange, items, _undefined6.CLAMP);
      const items1 = [1, 1, 1 - validLength * num2];
      let tmp14 = _undefined5(value, inputRange, items1, _undefined6.CLAMP);
      const items2 = [-num4, 0, 0];
      const _HermesInternal = HermesInternal;
      let combined = "" + _undefined5(value, inputRange, items2, _undefined6.CLAMP) + "deg";
    } else if ("right" === str) {
      const items3 = [-validLength * num, 0, width];
      tmp10 = _undefined5(value, inputRange, items3, _undefined6.CLAMP);
      const items4 = [1 - validLength * num2, 1, 1];
      tmp14 = _undefined5(value, inputRange, items4, _undefined6.CLAMP);
      const items5 = [0, 0, num4];
      const _HermesInternal2 = HermesInternal;
      combined = "" + _undefined5(value, inputRange, items5, _undefined6.CLAMP) + "deg";
    }
    const obj2 = { transform: null, zIndex, opacity };
    const items6 = [{ translateX: tmp10 }, { scale: tmp14 }, { rotateZ: combined }];
    obj2.transform = items6;
    return obj2;
  }
  let items1 = [tmp2, tmp3, tmp4, tmp5, tmp6, tmp7];
  pnpm_stackTs1.__closure = items1;
  pnpm_stackTs1.__workletHash = 5899900600701;
  pnpm_stackTs1.__initData = tmp;
  return pnpm_stackTs1;
}
const useMemo = _mod19.useMemo;
const Dimensions = _mod17.Dimensions;
let closure_3 = Dimensions.get("window");
let closure_4 = {
  code: '(function pnpm_stackTs1(_value){let[screen,modeConfig,getCommonVariables,getCommonStyles,interpolate,Extrapolation]=this.__closure;const{showLength:showLength,snapDirection="left",moveSize=screen.width,stackInterval=18,scaleInterval=0.04,opacityInterval=0.1,rotateZDeg=30}=modeConfig;const{validLength:validLength,value:value,inputRange:inputRange}=getCommonVariables({showLength:showLength,value:_value,snapDirection:snapDirection});const{zIndex:zIndex,opacity:opacity}=getCommonStyles({validLength:validLength,value:value,opacityInterval:opacityInterval,snapDirection:snapDirection});let translateX;let scale;let rotateZ;if(snapDirection==="left"){translateX=interpolate(value,inputRange,[-moveSize,0,validLength*stackInterval],Extrapolation.CLAMP);scale=interpolate(value,inputRange,[1,1,1-validLength*scaleInterval],Extrapolation.CLAMP);rotateZ=interpolate(value,inputRange,[-rotateZDeg,0,0],Extrapolation.CLAMP)+"deg";}else if(snapDirection==="right"){translateX=interpolate(value,inputRange,[-validLength*stackInterval,0,moveSize],Extrapolation.CLAMP);scale=interpolate(value,inputRange,[1-validLength*scaleInterval,1,1],Extrapolation.CLAMP);rotateZ=interpolate(value,inputRange,[0,0,rotateZDeg],Extrapolation.CLAMP)+"deg";}const transform=[{translateX:translateX},{scale:scale},{rotateZ:rotateZ}];const styles={transform:transform,zIndex:zIndex,opacity:opacity};return styles;})',
};
let closure_6 = {
  code: '(function pnpm_stackTs2(_value){let[screen,modeConfig,getCommonVariables,getCommonStyles,interpolate,Extrapolation]=this.__closure;const{showLength:showLength,snapDirection="left",moveSize=screen.width,stackInterval=18,scaleInterval=0.04,opacityInterval=0.1,rotateZDeg=30}=modeConfig;const{validLength:validLength,value:value,inputRange:inputRange}=getCommonVariables({showLength:showLength,value:_value,snapDirection:snapDirection});const{zIndex:zIndex,opacity:opacity}=getCommonStyles({validLength:validLength,value:value,opacityInterval:opacityInterval,snapDirection:snapDirection});let translateX;let scale;let rotateZ;let translateY;if(snapDirection==="left"){translateX=interpolate(value,inputRange,[-moveSize,0,0],Extrapolation.CLAMP);scale=interpolate(value,inputRange,[1,1,1-validLength*scaleInterval],Extrapolation.CLAMP);rotateZ=interpolate(value,inputRange,[-rotateZDeg,0,0],Extrapolation.CLAMP)+"deg";translateY=interpolate(value,inputRange,[0,0,validLength*stackInterval],Extrapolation.CLAMP);}else if(snapDirection==="right"){translateX=interpolate(value,inputRange,[0,0,moveSize],Extrapolation.CLAMP);scale=interpolate(value,inputRange,[1-validLength*scaleInterval,1,1],Extrapolation.CLAMP);rotateZ=interpolate(value,inputRange,[0,0,rotateZDeg],Extrapolation.CLAMP)+"deg";translateY=interpolate(value,inputRange,[validLength*stackInterval,0,0],Extrapolation.CLAMP);}const transform=[{translateX:translateX},{scale:scale},{rotateZ:rotateZ},{translateY:translateY}];const styles={transform:transform,zIndex:zIndex,opacity:opacity};return styles;})',
};
let items = [
  {
    code: '(function getCommonVariables_Pnpm_stackTs3(opts){const{showLength:showLength,value:_value,snapDirection:snapDirection}=opts;function easeInOutCubic(v){return v<0.5?4*v*v*v:1-(-2*v+2)**3/2;}const page=Math.floor(Math.abs(_value));const diff=Math.abs(_value)%1;const value=_value<0?-(page+easeInOutCubic(diff)):page+easeInOutCubic(diff);const validLength=showLength-1;let inputRange;if(snapDirection==="left")inputRange=[-1,0,validLength];else if(snapDirection==="right")inputRange=[-validLength,0,1];else throw new Error("snapDirection must be set to either left or right");return{inputRange:inputRange,validLength:validLength,value:value};})',
  },
];
[tmp2] = items;
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
      items = [-1, 0, diff];
      let items1 = items;
    } else if ("right" !== snapDirection) {
      const _Error = Error;
      const error = new Error("snapDirection must be set to either left or right");
      throw error;
    } else {
      items1 = [-diff, 0, 1];
    }
    const obj = { inputRange: items1, validLength: diff, value: sum };
    return obj;
  }
}
getCommonVariables.__workletHash = 16254543886864;
getCommonVariables.__initData = tmp2;
let items1 = [
  {
    code: '(function getCommonStyles_Pnpm_stackTs4(opts){let[interpolate]=this.__closure;const{snapDirection:snapDirection,validLength:validLength,value:value,opacityInterval:opacityInterval}=opts;let zIndex;let opacity;if(snapDirection==="left"){zIndex=Math.floor(interpolate(value,[-1.5,-1,-1+Number.MIN_VALUE,0,validLength],[Number.MIN_VALUE,validLength,validLength,validLength-1,-1])*10000)/100;opacity=interpolate(value,[-1,0,validLength-1,validLength],[0.25,1,1-(validLength-1)*opacityInterval,0.25]);}else if(snapDirection==="right"){zIndex=Math.floor(interpolate(value,[-validLength,0,1-Number.MIN_VALUE,1,1.5],[1,validLength-1,validLength,validLength,Number.MIN_VALUE])*10000)/100;opacity=interpolate(value,[-validLength,1-validLength,0,1],[0.25,1-(validLength-1)*opacityInterval,1,0.25]);}else{throw new Error("snapDirection must be set to either left or right");}return{zIndex:Math.round(zIndex),opacity:opacity};})',
  },
  _mod1652.interpolate,
];
let closure_129_0;
[tmp3, tmp4] = items1;
function getCommonStyles(arg0) {
  ({ snapDirection, validLength, value, opacityInterval } = arg0);
  if ("left" === snapDirection) {
    const _Math = Math;
    const _Number = Number;
    items = [-1.5, -1, -1 + Number.MIN_VALUE, 0, validLength];
    const _Number2 = Number;
    const items1 = [Number.MIN_VALUE, validLength, validLength, validLength - 1, -1];
    let result = Math.floor(10000 * require(value, items, items1)) / 100;
    const items2 = [-1, 0, validLength - 1, validLength];
    const items3 = [0.25, 1, 1 - (validLength - 1) * opacityInterval, 0.25];
    let tmp9 = require(value, items2, items3);
  } else if ("right" !== snapDirection) {
    const _Error = Error;
    const error = new Error("snapDirection must be set to either left or right");
    throw error;
  } else {
    const _Math2 = Math;
    const items4 = [-validLength, 0, , ,];
    const _Number3 = Number;
    items4[2] = 1 - Number.MIN_VALUE;
    items4[3] = 1;
    items4[4] = 1.5;
    const items5 = [1, validLength - 1, validLength, validLength];
    const _Number4 = Number;
    items5[4] = Number.MIN_VALUE;
    result = Math.floor(10000 * require(value, items4, items5)) / 100;
    const items6 = [-validLength, 1 - validLength, 0, 1];
    const items7 = [0.25, 1 - (validLength - 1) * opacityInterval, 1, 0.25];
    tmp9 = require(value, items6, items7);
  }
  return { zIndex: Math.round(result), opacity: tmp9 };
}
let items2 = [tmp4];
getCommonStyles.__closure = items2;
getCommonStyles.__workletHash = 12916536003300;
getCommonStyles.__initData = tmp3;

export { horizontalStackLayout };
export function useHorizontalStackLayout() {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  let obj2 = arg1;
  if (arg1 === undefined) {
    obj2 = {};
  }
  items = [obj, obj2];
  const obj3 = {
    layout: horizontalStackLayout(obj),
    config: useMemo(() => {
      let str = "positive";
      if ("right" === obj.snapDirection) {
        str = "negative";
      }
      obj = { type: str, viewCount: obj.showLength };
      const merged = Object.assign(obj2);
      return obj;
    }, items),
  };
  return obj3;
}
export function verticalStackLayout() {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  items = [
    closure_6,
    _undefined4,
    obj,
    getCommonVariables,
    getCommonStyles,
    _mod1652.interpolate,
    _mod1652.Extrapolation,
  ];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  c4 = undefined;
  c5 = undefined;
  [tmp, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7] = items;
  function pnpm_stackTs2(value) {
    const snapDirection = _undefined2.snapDirection;
    let str = "left";
    if (undefined !== snapDirection) {
      str = snapDirection;
    }
    let width = _undefined2.moveSize;
    if (undefined === width) {
      width = _undefined.width;
    }
    const stackInterval = _undefined2.stackInterval;
    let num = 18;
    if (undefined !== stackInterval) {
      num = stackInterval;
    }
    const scaleInterval = _undefined2.scaleInterval;
    let num2 = 0.04;
    if (undefined !== scaleInterval) {
      num2 = scaleInterval;
    }
    const opacityInterval = _undefined2.opacityInterval;
    let num3 = 0.1;
    if (undefined !== opacityInterval) {
      num3 = opacityInterval;
    }
    const rotateZDeg = _undefined2.rotateZDeg;
    let num4 = 30;
    if (undefined !== rotateZDeg) {
      num4 = rotateZDeg;
    }
    ({ validLength, value, inputRange } = _undefined3({
      showLength: _undefined2.showLength,
      value,
      snapDirection: str,
    }));
    const obj = { showLength: _undefined2.showLength, value, snapDirection: str };
    const tmp3 = _undefined3({ showLength: _undefined2.showLength, value, snapDirection: str });
    ({ zIndex, opacity } = _undefined4({ validLength, value, opacityInterval: num3, snapDirection: str }));
    if ("left" === str) {
      items = [-width, 0, 0];
      let tmp10 = _undefined5(value, inputRange, items, _undefined6.CLAMP);
      const items1 = [1, 1, 1 - validLength * num2];
      let tmp14 = _undefined5(value, inputRange, items1, _undefined6.CLAMP);
      const items2 = [-num4, 0, 0];
      const _HermesInternal = HermesInternal;
      let combined = "" + _undefined5(value, inputRange, items2, _undefined6.CLAMP) + "deg";
      const items3 = [0, 0, validLength * num];
      let tmp23 = _undefined5(value, inputRange, items3, _undefined6.CLAMP);
    } else if ("right" === str) {
      const items4 = [0, 0, width];
      tmp10 = _undefined5(value, inputRange, items4, _undefined6.CLAMP);
      const items5 = [1 - validLength * num2, 1, 1];
      tmp14 = _undefined5(value, inputRange, items5, _undefined6.CLAMP);
      const items6 = [0, 0, num4];
      const _HermesInternal2 = HermesInternal;
      combined = "" + _undefined5(value, inputRange, items6, _undefined6.CLAMP) + "deg";
      const items7 = [validLength * num, 0, 0];
      tmp23 = _undefined5(value, inputRange, items7, _undefined6.CLAMP);
    }
    const obj2 = { transform: null, zIndex, opacity };
    const items8 = [{ translateX: tmp10 }, { scale: tmp14 }, { rotateZ: combined }, { translateY: tmp23 }];
    obj2.transform = items8;
    return obj2;
  }
  let items1 = [tmp2, tmp3, tmp4, tmp5, tmp6, tmp7];
  pnpm_stackTs2.__closure = items1;
  pnpm_stackTs2.__workletHash = 17095480331642;
  pnpm_stackTs2.__initData = tmp;
  return pnpm_stackTs2;
}
