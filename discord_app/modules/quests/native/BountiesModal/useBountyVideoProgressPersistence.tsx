// === Module 15108: useBountyVideoProgressPersistence ===

// Module 15108 (useBountyVideoProgressPersistence)
import BountyActionCreators from "BountyActionCreators" /* 11654 */;
import useBountiesModalTiming from "useBountiesModalTiming" /* 15106 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import BountyStore from "BountyStore" /* 7804 */;

require = fn;
let closure_5 = { timestampSec: 0, maxTimestampSec: 0, duration: 0 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/quests/native/BountiesModal/useBountyVideoProgressPersistence.tsx");

export const useBountyVideoProgressPersistence = function useBountyVideoProgressPersistence(bountyId) {
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
      const obj = { timestampSec: current3, maxTimestampSec: current, duration: current2 };
      const result = obj.setBountyVideoProgress(bountyId, obj);
    }
  }, items);
  const items1 = [bountyId];
  obj.flushProgress = noop.useCallback(() => {
    const obj = { timestampSec: ref2.current, maxTimestampSec: ref3.current, duration: ref4.current };
    const result = obj.setBountyVideoProgress(bountyId, obj);
  }, items1);
  return obj;
};