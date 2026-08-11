// _runtime/01740_findDescendantWithExitingAnimation.js
import { isJest } from "01656_isJest.js";
import { addLogBoxLog } from "01657_addLogBoxLog.js";
import { t } from "01664_t.js";
import { weakMap } from "01739_weakMap.js";
const require = arg1;
let dependencyMap = arg6;
function findDescendantWithExitingAnimation(isDummy, appendChild) {
  let length;
  if (isDummy instanceof globalThis.HTMLElement) {
    isDummy = isDummy.isDummy;
    if (isDummy) {
      isDummy = undefined === isDummy.removedAfterAnimation;
    }
    if (isDummy) {
      const _require = isDummy;
      const dependencyMap = appendChild;
      const snapshots = _weakMap.snapshots;
      const value = snapshots.get(isDummy);
      if (value) {
        isDummy.removedAfterAnimation = true;
        appendChild.appendChild(isDummy);
        tmp2(1739).setElementPosition(isDummy, value);
        const onanimationend = isDummy.onanimationend;
        isDummy.onanimationend = function(arg0) {
          appendChild.removeChild(closure_0);
          if (onanimationend != null) {
            const self = this;
            const call = tmp2.call;
            if (typeof call === "unknown") {
              tmp2(arg0);
            } else {
              call(self, arg0);
            }
          }
        };
        const tmp2Result = tmp2(1739);
      } else {
        const logger = tmp2(1657).logger;
        logger.error("Failed to obtain snapshot.");
      }
    }
    const _Array = Array;
    const arr = Array.from(isDummy.children);
    let num3 = 0;
    if (0 < arr.length) {
      do {
        let tmp8 = findDescendantWithExitingAnimation;
        let tmp9 = findDescendantWithExitingAnimation(arr[num3], appendChild);
        num3 = num3 + 1;
        length = arr.length;
      } while (num3 < length);
    }
  }
}
const ReanimatedPredefinedWebAnimationsStyle = "ReanimatedPredefinedWebAnimationsStyle";
const ReanimatedCustomWebAnimationsStyle = "ReanimatedCustomWebAnimationsStyle";
const map = new Map();
let closure_5 = [];
let c6 = false;
arg5.configureWebLayoutAnimations = function configureWebLayoutAnimations() {
  if (obj.isWindowAvailable()) {
    const _document = document;
    if (null === document.getElementById(ReanimatedPredefinedWebAnimationsStyle)) {
      const _document2 = document;
      const element = <style />;
      element.id = tmp2;
      element.onload = () => {
        if (element.sheet) {
          for (const key10016 in tmp(tmp2[2]).Animations) {
            let tmp4 = key10016;
            let tmp5 = element;
            let sheet = element.sheet;
            let tmp6 = element;
            let tmp7 = outer1_1;
            let insertRuleResult = sheet.insertRule(element(outer1_1[2]).Animations[key10016].style);
            continue;
          }
        } else {
          const logger = tmp(tmp2[1]).logger;
          logger.error("Failed to create layout animations stylesheet.");
        }
      };
      const _document3 = document;
      const element1 = <style />;
      element1.id = ReanimatedCustomWebAnimationsStyle;
      const _document4 = document;
      head.appendChild(element);
      const _document5 = document;
      head2.appendChild(element1);
    }
    tmp2 = ReanimatedPredefinedWebAnimationsStyle;
  }
};
arg5.insertWebAnimation = function insertWebAnimation(name, result) {
  if (obj.isWindowAvailable()) {
    const _document = document;
    const element = document.getElementById(ReanimatedCustomWebAnimationsStyle);
    if (element.sheet) {
      const sheet = element.sheet;
      sheet.insertRule(result, 0);
      arr = arr.unshift(name);
      result = map.set(name, 0);
      let num3 = 1;
      if (1 < arr.length) {
        const value = map.get(arr[num3]);
        while (undefined !== value) {
          let result1 = map.set(arr[num3], value + 1);
          num3 = num3 + 1;
        }
        const reanimatedError = new t.ReanimatedError("Failed to obtain animation index.");
        throw reanimatedError;
      }
    } else {
      const logger = addLogBoxLog.logger;
      logger.error("Failed to create layout animations stylesheet.");
    }
  }
};
arg5.scheduleAnimationCleanup = function scheduleAnimationCleanup(animationName, arg1, arg2) {
  let closure_0 = animationName;
  let closure_1 = arg2;
  const timerId = setTimeout(() => {
    if (obj.isWindowAvailable()) {
      const _document = document;
      const element = document.getElementById(outer1_3);
      let sum = outer1_4.get(tmp);
      if (undefined === sum) {
        const reanimatedError = new animationName(1664).ReanimatedError("Failed to obtain animation index.");
        throw reanimatedError;
      } else {
        dependencyMap();
        const sheet = element.sheet;
        if (sheet != null) {
          sheet.deleteRule(sum);
        }
        outer1_5.splice(sum, 1);
        obj2.delete(tmp);
        if (sum < outer1_5.length) {
          const value = outer1_4.get(outer1_5[sum]);
          while (undefined !== value) {
            let result = outer1_4.set(arr[sum], value - 1);
            sum = sum + 1;
          }
          const reanimatedError1 = new animationName(1664).ReanimatedError("Failed to obtain animation index.");
          throw reanimatedError1;
        }
      }
      obj2 = outer1_4;
    }
  }, Math.max(5 * arg1 * 1000, arg1 + 160));
};
arg5.addHTMLMutationObserver = function addHTMLMutationObserver() {
  let isWindowAvailableResult = !c6;
  if (!c6) {
    isWindowAvailableResult = isJest.isWindowAvailable();
    const obj = isJest;
  }
  if (isWindowAvailableResult) {
    c6 = true;
    const mutationObserver = new globalThis.MutationObserver((arg0) => {
      let length;
      if (!(function checkIfScreenWasChanged(target) {
        let str = "__reactFiber";
        const keys = Object.keys(target);
        for (const item10012 of keys) {
          let tmp2 = item10012;
          if (item10012.startsWith("__reactFiber")) {
            str = item10012;
            let tmp3 = obj;
            obj.return();
            break;
          }
          let tmp4 = arg0[str];
          let tmp5 = null;
          let navigation;
          if (tmp4 != null) {
            let child = tmp4.child;
            if (child != null) {
              let memoizedProps = child.memoizedProps;
              if (memoizedProps != null) {
                navigation = memoizedProps.navigation;
              }
            }
          }
          return undefined !== navigation;
        }
      })(arg0[arg0.length - 1].target)) {
        let num = 0;
        if (0 < tmp.removedNodes.length) {
          do {
            let tmp2 = callback;
            let tmp3 = callback(tmp.removedNodes[num], tmp.target);
            num = num + 1;
            length = tmp.removedNodes.length;
          } while (num < length);
        }
      }
    });
    const _document = document;
    mutationObserver.observe(document.body, { childList: true, subtree: true });
  }
};
arg5.areDOMRectsEqual = function areDOMRectsEqual(size, arg1) {
  return size.x === arg1.x && size.y === arg1.y && size.width === arg1.width && size.height === arg1.height;
};