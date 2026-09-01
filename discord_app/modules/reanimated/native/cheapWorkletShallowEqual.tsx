// === Module 9209: cheapWorkletShallowEqual ===

// Module 9209 (cheapWorkletShallowEqual)
import set from "set" /* 2 */;

function cheapWorkletShallowEqual(safeAreaState, current) {
  if (safeAreaState === current) {
    return true;
  } else {
    if (null != safeAreaState) {
      if (null != current) {
        for (const key10005 in arg0) {
          let tmp3 = key10005;
          if (arg0[key10005] === arg1[key10005]) {
            continue;
          } else {
            let flag = false;
            return false;
          }
        }
        return true;
      }
    }
    return false;
  }
}
cheapWorkletShallowEqual.__closure = {};
cheapWorkletShallowEqual.__workletHash = 760221372005;
cheapWorkletShallowEqual.__initData = { code: "function cheapWorkletShallowEqual_cheapWorkletShallowEqualTsx1(a,b){if(a===b)return true;if(a==null||b==null)return false;for(const key in a){if(a[key]!==b[key])return false;}return true;}" };
function cheapWorkletArrayShallowEqual(activeIndex, arg1) {
  if (activeIndex === arg1) {
    return true;
  } else {
    if (null != activeIndex) {
      if (null != arg1) {
        if (activeIndex.length !== arg1.length) {
          return false;
        } else {
          let num = 0;
          if (0 < activeIndex.length) {
            while (activeIndex[num] === arg1[num]) {
              num = num + 1;
            }
            return false;
          }
          return true;
        }
      }
    }
    return false;
  }
}
cheapWorkletArrayShallowEqual.__closure = {};
cheapWorkletArrayShallowEqual.__workletHash = 3679738010781;
cheapWorkletArrayShallowEqual.__initData = { code: "function cheapWorkletArrayShallowEqual_cheapWorkletShallowEqualTsx2(a,b){if(a===b)return true;if(a==null||b==null)return false;if(a.length!==b.length)return false;for(let i=0;i<a.length;i++){if(a[i]!==b[i])return false;}return true;}" };
const result = set.fileFinishedImporting("modules/reanimated/native/cheapWorkletShallowEqual.tsx");

export { cheapWorkletShallowEqual };
export { cheapWorkletArrayShallowEqual };