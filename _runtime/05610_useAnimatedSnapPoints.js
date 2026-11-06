// _runtime/05610_useAnimatedSnapPoints.js
import _mod1652 from "metro/01652__.js";
import DEFAULT_HANDLE_HEIGHT from "05426_DEFAULT_HANDLE_HEIGHT.js";
import _mod5439 from "metro/05439__.js";

require = arg1;
const dependencyMap = arg6;
let closure_2 = { code: "(function pnpm_useAnimatedSnapPointsTs1(){let[containerHeight,INITIAL_CONTAINER_HEIGHT,INITIAL_SNAP_POINT,snapPoints,normalizeSnapPoint,enableDynamicSizing,handleHeight,INITIAL_HANDLE_HEIGHT,contentHeight,maxDynamicContentSize,dynamicSnapPointIndex]=this.__closure;const isContainerLayoutReady=containerHeight.value!==INITIAL_CONTAINER_HEIGHT;if(!isContainerLayoutReady){return[INITIAL_SNAP_POINT];}const _snapPoints=snapPoints?'value'in snapPoints?snapPoints.value:snapPoints:[];let _normalizedSnapPoints=_snapPoints.map(function(snapPoint){return normalizeSnapPoint(snapPoint,containerHeight.value);});if(!enableDynamicSizing){return _normalizedSnapPoints;}if(handleHeight.value===INITIAL_HANDLE_HEIGHT){return[INITIAL_SNAP_POINT];}if(contentHeight.value===INITIAL_CONTAINER_HEIGHT){return[INITIAL_SNAP_POINT];}const dynamicSnapPoint=containerHeight.value-Math.min(contentHeight.value+handleHeight.value,maxDynamicContentSize!==undefined?maxDynamicContentSize:containerHeight.value);if(!_normalizedSnapPoints.includes(dynamicSnapPoint)){_normalizedSnapPoints.push(dynamicSnapPoint);}_normalizedSnapPoints=_normalizedSnapPoints.sort(function(a,b){return b-a;});dynamicSnapPointIndex.value=_normalizedSnapPoints.indexOf(dynamicSnapPoint);return _normalizedSnapPoints;})" };
let closure_3 = { code: "(function pnpm_useAnimatedSnapPointsTs2(){let[enableDynamicSizing,snapPoints]=this.__closure;if(enableDynamicSizing){return true;}const _snapPoints=snapPoints?'value'in snapPoints?snapPoints.value:snapPoints:[];if(_snapPoints.length&&_snapPoints.find(function(snapPoint){return typeof snapPoint==='string';})){return true;}return false;})" };

export (snapPoints, derivedValue, sharedValue1, reactiveSharedValue2, sharedValue, DEFAULT_DYNAMIC_SIZING, maxDynamicContentSize) => {
  sharedValue = _mod1652.useSharedValue(-1);
  items = [closure_2, derivedValue, DEFAULT_HANDLE_HEIGHT.INITIAL_CONTAINER_HEIGHT, DEFAULT_HANDLE_HEIGHT.INITIAL_SNAP_POINT, snapPoints, _mod5439.normalizeSnapPoint, DEFAULT_DYNAMIC_SIZING, reactiveSharedValue2, DEFAULT_HANDLE_HEIGHT.INITIAL_HANDLE_HEIGHT, sharedValue1, maxDynamicContentSize, sharedValue];
  c2 = undefined;
  c3 = undefined;
  c4 = undefined;
  c5 = undefined;
  c6 = undefined;
  c7 = undefined;
  c8 = undefined;
  c9 = undefined;
  c10 = undefined;
  [tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15] = items;
  function pnpm_useAnimatedSnapPointsTs1() {
    if (_undefined.value !== c1) {
      if (_undefined2) {
        value = _undefined2;
        if ("value" in _undefined2) {
          value = _undefined2.value;
        }
        items = value;
      } else {
        items = [];
      }
      const mapped = items.map((item) => closure_1_4(item, value.value));
      if (c5) {
        if (_undefined2.value === c7) {
          const items1 = [c2];
          return items1;
        } else if (_undefined3.value === tmp) {
          const items2 = [c2];
          return items2;
        } else {
          value2 = c9;
          const sum = iter4.value + iter3.value;
          if (undefined === c9) {
            value2 = _undefined.value;
          }
          const diff = _undefined.value - Math.min(sum, value2);
          if (!mapped.includes(diff)) {
            mapped.push(diff);
          }
          const sorted = mapped.sort((arg0, arg1) => arg1 - arg0);
          c10.value = sorted.indexOf(diff);
          return sorted;
        }
      } else {
        return mapped;
      }
    } else {
      const items3 = [c2];
      return items3;
    }
  }
  let items1 = [tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15];
  pnpm_useAnimatedSnapPointsTs1.__closure = items1;
  pnpm_useAnimatedSnapPointsTs1.__workletHash = 232924243029;
  pnpm_useAnimatedSnapPointsTs1.__initData = tmp4;
  let items2 = [snapPoints, derivedValue, reactiveSharedValue2, sharedValue1, sharedValue, DEFAULT_DYNAMIC_SIZING, maxDynamicContentSize, sharedValue];
  derivedValue = _mod1652.useDerivedValue(pnpm_useAnimatedSnapPointsTs1, items2);
  let items3 = [_undefined2, DEFAULT_DYNAMIC_SIZING, snapPoints];
  c0 = undefined;
  c1 = undefined;
  [tmp17, tmp18, tmp19] = items3;
  function pnpm_useAnimatedSnapPointsTs2() {
    if (c0) {
      return true;
    } else {
      if (_undefined) {
        value = _undefined;
        if ("value" in _undefined) {
          value = _undefined.value;
        }
        items = value;
      } else {
        items = [];
      }
      let tmp = !length;
      if (items.length) {
        tmp = !items.find((item) => typeof item === "string");
      }
      return !tmp;
    }
  }
  const items4 = [tmp18, tmp19];
  pnpm_useAnimatedSnapPointsTs2.__closure = items4;
  pnpm_useAnimatedSnapPointsTs2.__workletHash = 7724666336615;
  pnpm_useAnimatedSnapPointsTs2.__initData = tmp17;
  const items5 = [derivedValue, sharedValue, _mod1652.useDerivedValue(pnpm_useAnimatedSnapPointsTs2)];
  return items5;
}