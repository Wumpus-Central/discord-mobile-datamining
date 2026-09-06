// === Module 1723: findDescendantWithExitingAnimation ===

// Module 1723 (findDescendantWithExitingAnimation)
import _mod1639 from "module_1639" /* 1639 */;
import _mod1640 from "module_1640" /* 1640 */;
import _mod1647 from "module_1647" /* 1647 */;
import TransitionType from "TransitionType" /* 1692 */;
import _mod1722 from "module_1722" /* 1722 */;

require = arg1;
const dependencyMap = arg6;
function findDescendantWithExitingAnimation(arr, appendChild) {
  let length;
  if (arr instanceof globalThis.HTMLElement) {
    let isDummy = arr.isDummy;
    if (isDummy) {
      isDummy = undefined === arr.removedAfterAnimation;
    }
    if (isDummy) {
      closure_0 = arr;
      const snapshots = _mod1722.snapshots;
      value = snapshots.get(arr);
      if (value) {
        arr.removedAfterAnimation = true;
        appendChild.appendChild(arr);
        _mod1722.setElementPosition(arr, value);
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
        const tmp2Result = _mod1722;
      } else {
        const logger = _mod1640.logger;
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

export const configureWebLayoutAnimations = function configureWebLayoutAnimations() {
  if (obj.isWindowAvailable()) {
    const _document = document;
    if (null === document.getElementById(ReanimatedPredefinedWebAnimationsStyle)) {
      const _document2 = document;
      const element = <style />;
      element.id = ReanimatedPredefinedWebAnimationsStyle;
      element.onload = () => {
        if (element.sheet) {
          for (const key10016 in tmp(1692).Animations) {
            let sheet = element.sheet;
            let insertRuleResult = sheet.insertRule(TransitionType.Animations[key10016].style);
            continue;
          }
        } else {
          const logger = _mod1640.logger;
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
  obj = element(1639);
};
export const insertWebAnimation = function insertWebAnimation(name, result1) {
  if (obj.isWindowAvailable()) {
    const _document = document;
    const element = document.getElementById(ReanimatedCustomWebAnimationsStyle);
    if (element.sheet) {
      const sheet = element.sheet;
      sheet.insertRule(result1, 0);
      let arr = closure_5.unshift(name);
      const result = map.set(name, 0);
      let num3 = 1;
      if (1 < closure_5.length) {
        arr = closure_5;
        value = map.get(closure_5[num3]);
        while (undefined !== value) {
          result1 = map.set(arr[num3], value + 1);
          num3 = num3 + 1;
        }
        const reanimatedError = new _mod1647.ReanimatedError("Failed to obtain animation index.");
        throw reanimatedError;
      }
    } else {
      const logger = _mod1640.logger;
      logger.error("Failed to create layout animations stylesheet.");
    }
  }
  obj = _mod1639;
};
export const scheduleAnimationCleanup = function scheduleAnimationCleanup(animationName, arg1, arg2) {
  closure_0 = animationName;
  closure_1 = arg2;
  const timerId = setTimeout(() => {
    if (obj.isWindowAvailable()) {
      const _document = document;
      const element = document.getElementById(ReanimatedCustomWebAnimationsStyle);
      let sum = map.get(closure_0);
      if (undefined === sum) {
        const reanimatedError = new _mod1647.ReanimatedError("Failed to obtain animation index.");
        throw reanimatedError;
      } else {
        closure_1();
        const sheet = element.sheet;
        if (sheet != null) {
          sheet.deleteRule(sum);
        }
        closure_5.splice(sum, 1);
        map.delete(closure_0);
        if (sum < closure_5.length) {
          value = map.get(closure_5[sum]);
          while (undefined !== value) {
            let result = map.set(closure_5[sum], value - 1);
            sum = sum + 1;
          }
          const reanimatedError1 = new _mod1647.ReanimatedError("Failed to obtain animation index.");
          throw reanimatedError1;
        }
      }
    }
    obj = _mod1639;
  }, Math.max(5 * arg1 * 1000, arg1 + 160));
};
export const addHTMLMutationObserver = function addHTMLMutationObserver() {
  let isWindowAvailableResult = !c6;
  if (!c6) {
    isWindowAvailableResult = _mod1639.isWindowAvailable();
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
            let tmp3 = findDescendantWithExitingAnimation(tmp.removedNodes[num], tmp.target);
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
export const areDOMRectsEqual = function areDOMRectsEqual(size, arg1) {
  return size.x === arg1.x && size.y === arg1.y && size.width === arg1.width && size.height === arg1.height;
};