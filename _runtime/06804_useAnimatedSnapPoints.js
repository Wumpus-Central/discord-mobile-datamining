// === Module 6804: useAnimatedSnapPoints ===

// Module 6804 (useAnimatedSnapPoints)
const require = arg1;
let dependencyMap = arg6;
let closure_2 = { code: "function pnpm_useAnimatedSnapPointsTs1(){const{containerHeight,INITIAL_CONTAINER_HEIGHT,INITIAL_SNAP_POINT,snapPoints,normalizeSnapPoint,enableDynamicSizing,handleHeight,INITIAL_HANDLE_HEIGHT,contentHeight,maxDynamicContentSize,dynamicSnapPointIndex}=this.__closure;const isContainerLayoutReady=containerHeight.value!==INITIAL_CONTAINER_HEIGHT;if(!isContainerLayoutReady){return[INITIAL_SNAP_POINT];}const _snapPoints=snapPoints?'value'in snapPoints?snapPoints.value:snapPoints:[];let _normalizedSnapPoints=_snapPoints.map(function(snapPoint){return normalizeSnapPoint(snapPoint,containerHeight.value);});if(!enableDynamicSizing){return _normalizedSnapPoints;}if(handleHeight.value===INITIAL_HANDLE_HEIGHT){return[INITIAL_SNAP_POINT];}if(contentHeight.value===INITIAL_CONTAINER_HEIGHT){return[INITIAL_SNAP_POINT];}const dynamicSnapPoint=containerHeight.value-Math.min(contentHeight.value+handleHeight.value,maxDynamicContentSize!==undefined?maxDynamicContentSize:containerHeight.value);if(!_normalizedSnapPoints.includes(dynamicSnapPoint)){_normalizedSnapPoints.push(dynamicSnapPoint);}_normalizedSnapPoints=_normalizedSnapPoints.sort(function(a,b){return b-a;});dynamicSnapPointIndex.value=_normalizedSnapPoints.indexOf(dynamicSnapPoint);return _normalizedSnapPoints;}" };
let closure_3 = { code: "function pnpm_useAnimatedSnapPointsTs2(){const{enableDynamicSizing,snapPoints}=this.__closure;if(enableDynamicSizing){return true;}const _snapPoints=snapPoints?'value'in snapPoints?snapPoints.value:snapPoints:[];if(_snapPoints.length&&_snapPoints.find(function(snapPoint){return typeof snapPoint==='string';})){return true;}return false;}" };
arg5.useAnimatedSnapPoints = (snapPoints, containerHeight, contentHeight, handleHeight, arg4, enableDynamicSizing, maxDynamicContentSize) => {
  const _require = snapPoints;
  dependencyMap = containerHeight;
  closure_2 = contentHeight;
  closure_3 = handleHeight;
  closure_4 = enableDynamicSizing;
  closure_5 = maxDynamicContentSize;
  let obj = _require(1636);
  const sharedValue = obj.useSharedValue(-1);
  class P {
    constructor() {
      iter = closure_1;
      tmp = closure_0;
      tmp2 = closure_1;
      if (closure_1.value === closure_0(closure_1[1]).INITIAL_CONTAINER_HEIGHT) {
        items = [];
        items[0] = tmp(tmp2[1]).INITIAL_SNAP_POINT;
        return items;
      } else {
        iter3 = closure_0;
        if (closure_0) {
          str = "value";
          value = iter3;
          if ("value" in iter3) {
            value = iter3.value;
          }
          items1 = value;
        } else {
          items1 = [];
        }
        mapped = items1.map(() => { ... });
        tmp3 = closure_4;
        if (closure_4) {
          iter2 = closure_3;
          if (closure_3.value === tmp(tmp2[1]).INITIAL_HANDLE_HEIGHT) {
            items2 = [];
            items2[0] = tmp(tmp2[1]).INITIAL_SNAP_POINT;
            return items2;
          } else {
            iter4 = closure_2;
            if (closure_2.value === tmp(tmp2[1]).INITIAL_CONTAINER_HEIGHT) {
              items3 = [];
              items3[0] = tmp(tmp2[1]).INITIAL_SNAP_POINT;
              return items3;
            } else {
              tmp4 = globalThis;
              value = closure_5;
              sum = iter4.value + iter2.value;
              if (undefined === closure_5) {
                value = iter.value;
              }
              diff = iter.value - Math.min(sum, value);
              if (!mapped.includes(diff)) {
                arr = mapped.push(diff);
              }
              sorted = mapped.sort(() => { ... });
              tmp8 = closure_6;
              closure_6.value = sorted.indexOf(diff);
              return sorted;
            }
          }
        } else {
          return mapped;
        }
      }
    }
  }
  obj = { containerHeight, INITIAL_CONTAINER_HEIGHT: _require(6631).INITIAL_CONTAINER_HEIGHT, INITIAL_SNAP_POINT: _require(6631).INITIAL_SNAP_POINT, snapPoints, normalizeSnapPoint: _require(6644).normalizeSnapPoint, enableDynamicSizing, handleHeight, INITIAL_HANDLE_HEIGHT: _require(6631).INITIAL_HANDLE_HEIGHT, contentHeight, maxDynamicContentSize, dynamicSnapPointIndex: sharedValue };
  P.__closure = obj;
  P.__workletHash = 15015207820492;
  P.__initData = closure_2;
  let items = [snapPoints, containerHeight, handleHeight, contentHeight, arg4, enableDynamicSizing, maxDynamicContentSize, sharedValue];
  const derivedValue = _require(1636).useDerivedValue(P, items);
  const obj2 = _require(1636);
  class N {
    constructor() {
      if (closure_4) {
        flag = true;
        return true;
      } else {
        iter = closure_0;
        if (closure_0) {
          str = "value";
          value = iter;
          if ("value" in iter) {
            value = iter.value;
          }
          items = value;
        } else {
          items = [];
        }
        length = items.length;
        tmp = !length;
        if (length) {
          tmp = !items.find(/* F110792 */ function() { ... });
        }
        return !tmp;
      }
    }
  }
  N.__closure = { enableDynamicSizing, snapPoints };
  N.__workletHash = 4816362093278;
  N.__initData = closure_3;
  let items1 = [derivedValue, sharedValue, _require(1636).useDerivedValue(N)];
  return items1;
};