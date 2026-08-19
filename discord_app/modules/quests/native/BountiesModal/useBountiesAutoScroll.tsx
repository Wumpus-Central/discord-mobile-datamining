// === Module 14368: set ===

// Module 14368 (set)
import _slicedToArray from "_slicedToArray" /* 32 */;
import noop from "noop" /* 19 */;
import { AppState } from "get ActivityIndicator" /* 17 */;
import { QuestsExperimentLocations } from "QuestsExperimentLocations" /* 6716 */;

const require = fn;
const set = new Set();
let result = require("obj132").fileFinishedImporting("modules/quests/native/BountiesModal/useBountiesAutoScroll.tsx");

export const AUTO_SCROLL_PEEK_SCALE = 0.83;
export const AUTO_SCROLL_PEEK_TOP_OFFSET = 54;
export const clearDismissedScrollAffordanceBountyIds = function clearDismissedScrollAffordanceBountyIds() {
  set.clear();
};
export const useBountiesAutoScroll = function useBountiesAutoScroll(listRef) {
  listRef = listRef.listRef;
  const enabled = listRef.enabled;
  const mode = listRef.mode;
  const activeIndex = listRef.activeIndex;
  const activeBountyId = listRef.activeBountyId;
  const slotHeight = listRef.slotHeight;
  const onCountdownCancelled = listRef.onCountdownCancelled;
  c11 = undefined;
  c13 = undefined;
  c14 = undefined;
  let callback5;
  let callback6;
  let callback7;
  let callback8;
  let callback9;
  let callback10;
  let callback11;
  let callback12;
  const BountiesVerticalScrollExperiment = listRef(enabled[4]).BountiesVerticalScrollExperiment;
  let obj = { location: slotHeight.VIDEO_MODAL_MOBILE };
  const config = BountiesVerticalScrollExperiment.useConfig(obj);
  const ctaTimerMilliSeconds = config.ctaTimerMilliSeconds;
  let result = config.autoScrollLeadMs / 1000;
  c8 = result;
  const sum = result + config.autoScrollEndCardMs / 1000;
  c9 = sum;
  const first = mode(listRef(enabled[5]).useForceBountiesSwipeUpNux(), 1)[0];
  const obj2 = listRef(enabled[5]);
  [tmp6, c11] = mode(activeIndex.useState(false), 2);
  const tmp7 = mode(activeIndex.useState(false), 2);
  closure_12 = tmp7[1];
  let tmp5 = mode(activeIndex.useState(false), 2);
  [tmp9, c13] = mode(activeIndex.useState(0), 2);
  const tmp8 = mode(activeIndex.useState(0), 2);
  [tmp11, c14] = mode(activeIndex.useState(false), 2);
  closure_15 = activeIndex.useRef(false);
  closure_16 = activeIndex.useRef(false);
  closure_17 = activeIndex.useRef(false);
  closure_18 = activeIndex.useRef(false);
  closure_19 = activeIndex.useRef(null);
  closure_20 = activeIndex.useRef(null);
  closure_21 = activeIndex.useRef(0);
  closure_22 = activeIndex.useRef(null);
  closure_23 = activeIndex.useRef(false);
  closure_24 = activeIndex.useRef(false);
  const tmp10 = mode(activeIndex.useState(false), 2);
  const sharedValue = listRef(enabled[6]).useSharedValue(1);
  closure_26 = activeIndex.useRef(sum);
  const callback = activeIndex.useCallback(() => {
    if (null != ref.current) {
      const _clearInterval = clearInterval;
      clearInterval(ref.current);
      ref.current = null;
    }
    closure_22.current = null;
  }, []);
  const callback1 = activeIndex.useCallback(() => {
    if (null != ref2.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(ref2.current);
      ref2.current = null;
    }
  }, []);
  const items = [first];
  const callback2 = activeIndex.useCallback((arg0) => {
    let tmp = first;
    if (!first) {
      tmp = null == arg0;
    }
    if (!tmp) {
      onCountdownCancelled.add(arg0);
    }
  }, items);
  const items1 = [first];
  const callback3 = activeIndex.useCallback((arg0) => {
    let hasItem = !first;
    if (!first) {
      hasItem = null != arg0;
    }
    if (hasItem) {
      hasItem = onCountdownCancelled.has(arg0);
    }
    return hasItem;
  }, items1);
  const callback4 = activeIndex.useCallback(() => {
    _undefined(false);
    callback(false);
    _undefined2(0);
    _undefined3(false);
  }, []);
  const obj4 = listRef(enabled[6]);
  [tmp19, tmp20] = mode(activeIndex.useState(activeIndex), 2);
  const tmp21 = mode(activeIndex.useState(activeBountyId), 2);
  let tmp22 = tmp19 === activeIndex;
  if (tmp22) {
    tmp22 = tmp21[0] === activeBountyId;
  }
  if (!tmp22) {
    tmp20(activeIndex);
    tmp21[1](activeBountyId);
    callback4();
  }
  const items2 = [activeIndex, activeBountyId, callback, callback1, sharedValue, callback3];
  const effect = obj3.useEffect(() => {
    callback();
    callback1();
    closure_15.current = callback3(activeBountyId);
    closure_16.current = callback3(activeBountyId);
    closure_17.current = false;
    closure_18.current = false;
    closure_21.current = 0;
    closure_23.current = false;
    closure_24.current = false;
    const result = sharedValue.set(1);
  }, items2);
  const items3 = [callback, callback1];
  const effect1 = obj3.useEffect(() => () => {
    callback();
    callback2();
  }, items3);
  const items4 = [sum];
  const effect2 = obj3.useEffect(() => {
    closure_26.current = c9;
  }, items4);
  const items5 = [activeBountyId, callback1, callback2, sharedValue, callback3];
  callback5 = obj3.useCallback(() => {
    let num = arg0;
    if (arg0 === undefined) {
      num = 0;
    }
    let current = closure_16.current;
    if (!current) {
      current = closure_15.current;
    }
    if (!current) {
      current = callback3(activeBountyId);
    }
    let flag = !current;
    if (!current) {
      closure_16.current = true;
      callback2(activeBountyId);
      callback1();
      let _setTimeout = setTimeout;
      closure_20.current = setTimeout(() => {
        closure_20.current = null;
        let current = ref.current;
        if (!current) {
          current = ref2.current;
        }
        if (!current) {
          const result = closure_25.set(listRef(enabled[7]).withTiming(0.83, listRef(enabled[8]).timingSlow));
          callback(true);
          const _setTimeout = setTimeout;
          closure_20.current = setTimeout(() => {
            closure_20.current = null;
            let current = ref.current;
            if (!current) {
              current = ref2.current;
            }
            if (!current) {
              callback(true);
            }
          }, 500);
          const obj = listRef(enabled[7]);
        }
      }, num);
      flag = true;
    }
    return flag;
  }, items5);
  const items6 = [activeBountyId, activeIndex, callback, callback1, listRef, callback2, sharedValue, callback4, slotHeight];
  callback6 = obj3.useCallback(() => {
    let current = closure_18.current;
    if (!current) {
      current = closure_15.current;
    }
    if (!current) {
      closure_18.current = true;
      callback2(activeBountyId);
      callback();
      callback1();
      callback4();
      const result = sharedValue.set(1);
      const current2 = listRef.current;
      if (current2 != null) {
        const obj = { offset: null, animated: true };
        obj[0] = (activeIndex + 1) * slotHeight;
        current2.scrollToOffset(obj);
      }
    }
  }, items6);
  const items7 = [callback6];
  callback7 = obj3.useCallback(() => {
    if (!closure_15.current) {
      if (!closure_23.current) {
        const _Date = Date;
        const timestamp = Date.now();
        if (null != ref4.current) {
          ref3.current = ref3.current + (timestamp - ref4.current);
        }
        ref4.current = timestamp;
        const current = ref6.current;
        const result = ref3.current / 1000;
        if (result >= current) {
          callback6();
        } else {
          _undefined2(result / current);
        }
      }
    }
  }, items7);
  const items8 = [callback7];
  callback8 = obj3.useCallback(() => {
    let current = closure_17.current;
    if (!current) {
      current = null != ref.current;
    }
    if (!current) {
      current = closure_23.current;
    }
    if (!current) {
      closure_17.current = true;
      closure_21.current = 0;
      const _Date = Date;
      closure_22.current = Date.now();
      _undefined2(0);
      _undefined3(true);
      const _setInterval = setInterval;
      ref.current = setInterval(callback7, 50);
    }
  }, items8);
  const items9 = [callback];
  callback9 = obj3.useCallback(() => {
    if (closure_17.current) {
      if (!closure_23.current) {
        if (null != ref.current) {
          const _Date = Date;
          if (null != ref4.current) {
            ref3.current = ref3.current + (tmp5 - tmp6.current);
          }
          tmp.current = true;
          callback();
        }
      }
    }
  }, items9);
  const items10 = [callback7];
  callback10 = obj3.useCallback(() => {
    let current = closure_17.current;
    if (current) {
      current = closure_23.current;
    }
    if (current) {
      current = !closure_15.current;
    }
    if (current) {
      current = !closure_18.current;
    }
    if (current) {
      closure_23.current = false;
      const _Date = Date;
      closure_22.current = Date.now();
      const _setInterval = setInterval;
      closure_19.current = setInterval(callback7, 50);
    }
  }, items10);
  const items11 = [callback9];
  callback11 = obj3.useCallback(() => {
    if (!closure_23.current) {
      callback9();
      closure_24.current = true;
    }
  }, items11);
  const items12 = [callback10];
  callback12 = obj3.useCallback(() => {
    let current = ref5.current;
    if (current) {
      current = !listRef(enabled[9]).getIsInAppBrowserOpen();
      const obj = listRef(enabled[9]);
    }
    if (current) {
      ref5.current = false;
      callback10();
    }
  }, items12);
  const items13 = [callback11, callback12];
  const effect3 = obj3.useEffect(() => {
    closure_0 = activeBountyId.addEventListener("change", (event) => {
      if ("active" === event) {
        callback3();
      } else {
        callback2();
      }
    });
    closure_1 = listRef(enabled[9]).subscribeToIsInAppBrowserOpen((arg0) => {
      if (arg0) {
        callback2();
      } else {
        callback3();
      }
    });
    return () => {
      closure_0.remove();
      callback();
    };
  }, items13);
  const items14 = [activeBountyId, callback, callback1, callback2, mode, onCountdownCancelled, sharedValue, callback4];
  const items15 = [activeBountyId, callback, callback1, callback2, sharedValue, callback4];
  const callback13 = obj3.useCallback((arg0) => {
    const current = closure_16.current;
    let current2 = !current;
    if (current) {
      current2 = closure_15.current;
    }
    if (!current2) {
      current2 = closure_18.current;
    }
    if (!current2) {
      closure_15.current = true;
      callback2(activeBountyId);
      callback();
      _undefined(false);
      _undefined2(0);
      const result = sharedValue.set(listRef(enabled[7]).withTiming(1, listRef(enabled[8]).timingStandard));
      if ("countdown" === mode) {
        if (onCountdownCancelled != null) {
          tmp18(arg0);
        }
      }
      callback1();
      callback4();
      const obj = listRef(enabled[7]);
    }
  }, items14);
  const items16 = [callback1, callback4];
  const callback14 = obj3.useCallback(() => {
    if (closure_16.current) {
      closure_15.current = true;
      callback2(activeBountyId);
      callback();
      callback1();
      callback4();
      const result = sharedValue.set(1);
    }
  }, items15);
  const items17 = [result, ctaTimerMilliSeconds, enabled, mode, callback5, callback8];
  const callback15 = obj3.useCallback(() => {
    closure_18.current = false;
    callback1();
    callback4();
    return closure_18.current;
  }, items16);
  const items18 = [activeBountyId, enabled, mode, callback10, callback5, callback8, callback3];
  const callback16 = obj3.useCallback((arg0, arg1, arg2, arg3, arg4) => {
    let current = !enabled;
    if (enabled) {
      current = "countdown" !== mode;
    }
    if (!current) {
      current = closure_15.current;
    }
    if (!current) {
      current = closure_18.current;
    }
    if (!current) {
      current = arg1 <= 0;
    }
    if (!current) {
      const current2 = closure_16.current;
      let tmp5 = !current2;
      if (!current2) {
        let tmp6 = arg4;
        if (!arg4) {
          tmp6 = 1000 * arg3 > ctaTimerMilliSeconds;
        }
        tmp5 = tmp6;
      }
      if (tmp5) {
        callback5(5000);
      }
      let tmp11 = arg2;
      if (arg2) {
        tmp11 = !closure_17.current;
      }
      if (tmp11) {
        if (arg1 - arg0 <= c8) {
          callback8();
        }
      }
    }
  }, items17);
  obj = {
    visible: tmp6,
    peekActive: tmp7[0],
    progress: tmp9,
    showProgressRing: tmp11,
    peekScale: sharedValue,
    cancel: callback13,
    dismissOnClose: callback14,
    takeDidAutoScroll: callback15,
    onPlaybackTimeChange: callback16,
    onEndCardVisible: obj3.useCallback(() => {
      let current = !enabled;
      if (enabled) {
        current = closure_15.current;
      }
      if (!current) {
        current = callback3(activeBountyId);
      }
      if (!current) {
        if ("hint" !== mode) {
          if (!closure_16.current) {
            callback5();
          }
          if (closure_17.current) {
            if (closure_23.current) {
              callback10();
            }
          } else {
            callback8();
          }
        } else {
          callback5();
        }
      }
    }, items18),
    pauseCountdown: callback9,
    resumeCountdown: callback10
  };
  return obj;
};