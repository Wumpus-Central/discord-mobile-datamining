// _runtime/01730_configureWebLayoutAnimations.js
import _mod1646 from "metro/01646__.js";
import react_native from "01647_react-native.js";
import ReanimatedError from "01654_ReanimatedError.js";
import TransitionType from "01699_TransitionType.js";
import _mod1729 from "metro/01729__.js";

let navigation;

function findDescendantWithExitingAnimation(arr, appendChild) {
  let length;
  if (arr instanceof globalThis.HTMLElement) {
    const isDummy = arr.isDummy && undefined === arr.removedAfterAnimation;
    if (isDummy) {
      let closure_0 = arr;
      let closure_1 = appendChild;
      const snapshots = _mod1729.snapshots;
      const value = snapshots.get(arr);
      if (value) {
        arr.removedAfterAnimation = true;
        appendChild.appendChild(arr);
        const tmp2Result = _mod1729;
        tmp2Result.setElementPosition(arr, value);
        const onanimationend = arr.onanimationend;
        arr.onanimationend = function (arg0) {
          closure_1.removeChild(closure_0);
          if (onanimationend != null) {
            onanimationend.call(this, arg0);
          }
        };
      } else {
        const logger = react_native.logger;
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
  let element;
  const obj = element(1646);
  if (obj.isWindowAvailable()) {
    const _document = document;
    if (null === document.getElementById(ReanimatedPredefinedWebAnimationsStyle)) {
      const _document2 = document;
      element = <style />;
      element.id = ReanimatedPredefinedWebAnimationsStyle;
      element.onload = () => {
        if (element.sheet) {
          for (const key10016 in TransitionType.Animations) {
            let sheet = element.sheet;
            let insertRuleResult = sheet.insertRule(TransitionType.Animations[key10016].style);
            continue;
          }
        } else {
          const logger = react_native.logger;
          logger.error("Failed to create layout animations stylesheet.");
        }
      };
      const _document3 = document;
      const element1 = <style />;
      element1.id = ReanimatedCustomWebAnimationsStyle;
      const _document4 = document;
      head.appendChild(element);
      const _document5 = document;
      const head2 = document.head;
      head2.appendChild(element1);
    }
  }
};
export const insertWebAnimation = function insertWebAnimation(name, result1) {
  const obj = _mod1646;
  if (obj.isWindowAvailable()) {
    const _document = document;
    const element = document.getElementById(ReanimatedCustomWebAnimationsStyle);
    if (element.sheet) {
      const sheet = element.sheet;
      sheet.insertRule(result1, 0);
      closure_5.unshift(name);
      const result = map.set(name, 0);
      let num3 = 1;
      if (1 < closure_5.length) {
        const value = map.get(closure_5[num3]);
        while (undefined !== value) {
          result1 = map.set(closure_5[num3], value + 1);
          num3 = num3 + 1;
        }
        const self = this;
        const self2 = this;
        const reanimatedError = new ReanimatedError.ReanimatedError("Failed to obtain animation index.");
        throw reanimatedError;
      }
    } else {
      const logger = react_native.logger;
      logger.error("Failed to create layout animations stylesheet.");
    }
  }
};
export const scheduleAnimationCleanup = function scheduleAnimationCleanup(animationName, arg1, arg2) {
  let closure_0 = animationName;
  let closure_1 = arg2;
  const timerId = setTimeout(
    function () {
      const obj = _mod1646;
      if (obj.isWindowAvailable()) {
        const _document = document;
        const element = document.getElementById(ReanimatedCustomWebAnimationsStyle);
        let sum = map.get(animationName);
        if (undefined === sum) {
          const self3 = this;
          const self4 = this;
          const reanimatedError = new ReanimatedError.ReanimatedError("Failed to obtain animation index.");
          throw reanimatedError;
        } else {
          closure_1();
          const sheet = element.sheet;
          if (sheet != null) {
            sheet.deleteRule(sum);
          }
          closure_5.splice(sum, 1);
          map.delete(animationName);
          if (sum < closure_5.length) {
            const value2 = map.get(closure_5[sum]);
            while (undefined !== value2) {
              let result = map.set(closure_5[sum], value2 - 1);
              sum = sum + 1;
            }
            const self = this;
            const self2 = this;
            const reanimatedError1 = new ReanimatedError.ReanimatedError("Failed to obtain animation index.");
            throw reanimatedError1;
          }
        }
      }
    },
    Math.max(5 * arg1 * 1000, arg1 + 160),
  );
};
export const addHTMLMutationObserver = function addHTMLMutationObserver() {
  let isWindowAvailableResult = !c6;
  if (isWindowAvailableResult) {
    const obj = _mod1646;
    isWindowAvailableResult = obj.isWindowAvailable();
  }
  if (isWindowAvailableResult) {
    c6 = true;
    let tmp4 = globalThis;
    const self = this;
    const self2 = this;
    const mutationObserver = new globalThis.MutationObserver((arg0) => {
      let length;
      function checkIfScreenWasChanged(target) {
        let str = "__reactFiber";
        const keys = Object.keys(target);
        for (const item10012 of keys) {
          if (item10012.startsWith("__reactFiber")) {
            str = item10012;
            obj.return();
            break;
          }
          let tmp4 = target[str];
          navigation = undefined;
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
      }
      if (!checkIfScreenWasChanged(arg0[arg0.length - 1].target)) {
        let num = 0;
        if (0 < arg0[arg0.length - 1].removedNodes.length) {
          do {
            let tmp3 = findDescendantWithExitingAnimation(tmp.removedNodes[num], tmp.target);
            num = num + 1;
            length = tmp.removedNodes.length;
          } while (num < length);
        }
      }
    });
    let tmp5 = mutationObserver;
    const _document = document;
    mutationObserver.observe(document.body, { childList: true, subtree: true });
  }
};
export const areDOMRectsEqual = function areDOMRectsEqual(size, arg1) {
  return size.x === arg1.x && size.y === arg1.y && size.width === arg1.width && size.height === arg1.height;
};
