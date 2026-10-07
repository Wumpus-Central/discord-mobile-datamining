// === Module 14846: useBountyVideoProgressPersistence ===

// Module 14846 (useBountyVideoProgressPersistence)
import BountyActionCreators from "BountyActionCreators" /* 10962 */;
import useBountiesModalTiming from "useBountiesModalTiming" /* 14843 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import BountyStore from "BountyStore" /* 7199 */;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/quests/native/BountiesModal/useBountyVideoProgressPersistence.tsx");

export const useBountyVideoProgressPersistence = ReactCompilerGating.isReactCompilerEnabled() ? ((bountyId) => {
  const cResult = bountyId(endMode[4]).c(11);
  bountyId = bountyId.bountyId;
  endMode = bountyId.endMode;
  if (cResult[0] === bountyId) {
    if (cResult[1] === endMode) {
      let tmp2 = cResult[2];
    }
    const first = _slicedToArray(noop.useState(tmp2), 1)[0];
    _slicedToArray = noop.useRef(0);
    noop = noop.useRef(first.timestampSec);
    BountyStore = noop.useRef(first.maxTimestampSec);
    noop.useRef(first.duration);
    if (cResult[3] !== bountyId) {
      const fn2 = function p(current, current2, current3) {
        closure_3.current = current3;
        closure_4.current = current;
        closure_5.current = current2;
        if (current3 >= ref.current) {
          tmp.current = current3 + 1;
          const obj2 = { timestampSec: current3, maxTimestampSec: current, duration: current2 };
          const result = BountyActionCreators.setBountyVideoProgress(bountyId, obj2);
        }
      };
      cResult[3] = bountyId;
      cResult[4] = fn2;
      let tmp6 = fn2;
    } else {
      tmp6 = cResult[4];
    }
    if (cResult[5] !== bountyId) {
      class R {
        constructor() {
          obj = closure_0(closure_1[6]);
          obj1 = { timestampSec: closure_3.current, maxTimestampSec: closure_4.current, duration: closure_5.current };
          result = obj.setBountyVideoProgress(bountyId, obj1);
          return;
        }
      }
      cResult[5] = bountyId;
      cResult[6] = R;
    } else {
      class R {
        constructor() {
          obj = closure_0(closure_1[6]);
          obj1 = { timestampSec: closure_3.current, maxTimestampSec: closure_4.current, duration: closure_5.current };
          result = obj.setBountyVideoProgress(bountyId, obj1);
          return;
        }
      }
    }
    if (cResult[7] === R) {
      class R {
        constructor() {
          obj = closure_0(closure_1[6]);
          obj1 = { timestampSec: closure_3.current, maxTimestampSec: closure_4.current, duration: closure_5.current };
          result = obj.setBountyVideoProgress(bountyId, obj1);
          return;
        }
      }
    }
    let obj2 = { initialProgress: first, handleProgress: tmp6, flushProgress: R };
    cResult[7] = R;
    cResult[8] = tmp6;
    cResult[9] = first;
    cResult[10] = obj2;
  }
  const fn = function c() {
    let bountyVideoProgress = BountyStore.getBountyVideoProgress(bountyId);
    if (null != bountyVideoProgress) {
      if (endMode === useBountiesModalTiming.BountyVideoEndMode.LOOP) {
        const duration = bountyVideoProgress.duration;
        let tmp6 = duration > 0;
        if (tmp6) {
          tmp6 = tmp5 >= duration - 1;
        }
        return bountyVideoProgress;
      }
    }
    bountyVideoProgress = closure_5;
  };
  cResult[0] = bountyId;
  cResult[1] = endMode;
  cResult[2] = fn;
  tmp2 = fn;
  let obj = bountyId(endMode[4]);
}) : ((bountyId) => {
  bountyId = bountyId.bountyId;
  const endMode = bountyId.endMode;
  _slicedToArray = undefined;
  noop = undefined;
  const first = _slicedToArray(noop.useState(() => {
    let bountyVideoProgress = BountyStore.getBountyVideoProgress(bountyId);
    if (null != bountyVideoProgress) {
      if (endMode === useBountiesModalTiming.BountyVideoEndMode.LOOP) {
        const duration = bountyVideoProgress.duration;
        let tmp6 = duration > 0;
        if (tmp6) {
          tmp6 = tmp5 >= duration - 1;
        }
        return bountyVideoProgress;
      }
    }
    bountyVideoProgress = closure_5;
  }), 1)[0];
  _slicedToArray = noop.useRef(0);
  noop = noop.useRef(first.timestampSec);
  noop.useRef(first.maxTimestampSec);
  noop.useRef(first.duration);
  let obj = { initialProgress: first, handleProgress: null, flushProgress: null };
  const items = [bountyId];
  obj.handleProgress = noop.useCallback((current, current2, current3) => {
    closure_3.current = current3;
    closure_4.current = current;
    closure_5.current = current2;
    if (current3 >= ref.current) {
      tmp.current = current3 + 1;
      const obj2 = { timestampSec: current3, maxTimestampSec: current, duration: current2 };
      const result = BountyActionCreators.setBountyVideoProgress(bountyId, obj2);
    }
  }, items);
  const items1 = [bountyId];
  obj.flushProgress = noop.useCallback(() => {
    const result = BountyActionCreators.setBountyVideoProgress(bountyId, { timestampSec: ref2.current, maxTimestampSec: ref3.current, duration: ref4.current });
  }, items1);
  return obj;
});