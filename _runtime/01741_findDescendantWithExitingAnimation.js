// === Module 1741: findDescendantWithExitingAnimation ===

// Module 1741 (findDescendantWithExitingAnimation)
import isJest from "isJest" /* 1657 */;
import addLogBoxLog from "addLogBoxLog" /* 1658 */;
import t from "t" /* 1665 */;

require = arg1;
let dependencyMap = arg6;
function findDescendantWithExitingAnimation(arr, appendChild) {
  let length;
  if (arr instanceof globalThis.HTMLElement) {
    let isDummy = arr.isDummy;
    if (isDummy) {
      isDummy = undefined === arr.removedAfterAnimation;
    }
    if (isDummy) {
      const _require = arr;
      dependencyMap = appendChild;
      const snapshots = _require(1740).snapshots;
      const value = snapshots.get(arr);
      if (value) {
        arr.removedAfterAnimation = true;
        appendChild.appendChild(arr);
        tmp2(1740).setElementPosition(arr, value);
        const onanimationend = arr.onanimationend;
        arr.onanimationend = function(arg0) {
          appendChild.removeChild(closure_0);
          if (onanimationend != null) {
            const self = this;
            const call = onanimationend.call;
            if (typeof call === "unknown") {
              onanimationend(arg0);
            } else {
              call(self, arg0);
            }
          }
        };
        const tmp2Result = tmp2(1740);
      } else {
        const logger = tmp2(1658).logger;
        logger.error("Failed to obtain snapshot.");
      }
    }
    const _Array = Array;
    arr = Array.from(arr.children);
    let num3 = 0;
    if (0 < arr.length) {
      do {
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
      element.id = ReanimatedPredefinedWebAnimationsStyle;
      element.onload = () => {
        if (element.sheet) {
          for (const key10016 in tmp(tmp2[2]).Animations) {
            let sheet = element.sheet;
            let insertRuleResult = sheet.insertRule(element(dependencyMap[2]).Animations[key10016].style);
            continue;
          }
        } else {
          const logger = element(dependencyMap[1]).logger;
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
  }
  obj = element(1657);
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
  obj = isJest;
};
arg5.scheduleAnimationCleanup = function scheduleAnimationCleanup(animationName, arg1, arg2) {
  closure_0 = animationName;
  closure_1 = arg2;
  const timerId = setTimeout(() => {
    if (obj.isWindowAvailable()) {
      const _document = document;
      const element = document.getElementById(ReanimatedCustomWebAnimationsStyle);
      let sum = map.get(animationName);
      if (undefined === sum) {
        const reanimatedError = new animationName(1665).ReanimatedError("Failed to obtain animation index.");
        throw reanimatedError;
      } else {
        dependencyMap();
        const sheet = element.sheet;
        if (sheet != null) {
          sheet.deleteRule(sum);
        }
        closure_1_5.splice(sum, 1);
        map.delete(animationName);
        if (sum < closure_1_5.length) {
          const value = map.get(closure_1_5[sum]);
          while (undefined !== value) {
            let result = map.set(closure_1_5[sum], value - 1);
            sum = sum + 1;
          }
          const reanimatedError1 = new animationName(1665).ReanimatedError("Failed to obtain animation index.");
          throw reanimatedError1;
        }
      }
    }
    obj = animationName(1657);
  }, Math.max(5 * arg1 * 1000, arg1 + 160));
};
arg5.addHTMLMutationObserver = function addHTMLMutationObserver() {
  let isWindowAvailableResult = !c6;
  if (!c6) {
    isWindowAvailableResult = isJest.isWindowAvailable();
  }
  if (isWindowAvailableResult) {
    c6 = true;
    const mutationObserver = new globalThis.MutationObserver((arg0) => {
      let length;
      if (!(function checkIfScreenWasChanged(target) {
        let str = "__reactFiber";
        const keys = Object.keys(target);
        for (const item10012 of keys) {
          if (item10012.startsWith("__reactFiber")) {
            str = item10012;
            obj.return();
            break;
          }
          let tmp4 = arg0[str];
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