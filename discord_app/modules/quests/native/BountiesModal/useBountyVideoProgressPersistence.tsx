// === Module 14546: useBountyVideoProgressPersistence ===

// Module 14546 (useBountyVideoProgressPersistence)
import closure_2 from "_slicedToArray" /* 32 */;
import closure_3 from "noop" /* 19 */;
import closure_4 from "set" /* 7370 */;
import { QuestsExperimentLocations } from "QuestsExperimentLocations" /* 5334 */;

const require = arg1;
let closure_6 = { timestampSec: 0, maxTimestampSec: 0, duration: 0 };
let result = require("set").fileFinishedImporting("modules/quests/native/BountiesModal/useBountyVideoProgressPersistence.tsx");

export const useBountyVideoProgressPersistence = function useBountyVideoProgressPersistence(bountyId) {
  bountyId = bountyId.bountyId;
  const endMode = bountyId.endMode;
  let callback;
  let React;
  closure_4 = undefined;
  QuestsExperimentLocations = undefined;
  closure_6 = undefined;
  let obj = bountyId(endMode[4]);
  const bountiesExperience = obj.useBountiesExperience(QuestsExperimentLocations.VIDEO_MODAL_MOBILE);
  callback = tmp2;
  const first = callback(React.useState(() => {
    if (closure_2) {
      let bountyVideoProgress = ref2.getBountyVideoProgress(bountyId);
      if (null == bountyVideoProgress) {
        bountyVideoProgress = closure_6;
      } else if (endMode === bountyId(endMode[5]).BountyVideoEndMode.LOOP) {
        const duration = bountyVideoProgress.duration;
        let tmp10 = duration > 0;
        if (tmp10) {
          tmp10 = tmp9 >= duration - 1;
        }
      }
      return bountyVideoProgress;
    } else {
      return closure_6;
    }
  }), 1)[0];
  React = React.useRef(0);
  closure_4 = React.useRef(first.timestampSec);
  QuestsExperimentLocations = React.useRef(first.maxTimestampSec);
  closure_6 = React.useRef(first.duration);
  obj = {
    initialProgress: first,
    handleProgress: React.useCallback((current, current2, current3) => {
      closure_4.current = current3;
      closure_5.current = current;
      closure_6.current = current2;
      let tmp = closure_2;
      if (closure_2) {
        tmp = current3 >= ref.current;
      }
      if (tmp) {
        ref.current = current3 + 1;
        let obj = bountyId(endMode[6]);
        obj = { timestampSec: null, maxTimestampSec: null, duration: null };
        obj[0] = current3;
        obj[1] = current;
        obj[2] = current2;
        const result = obj.setBountyVideoProgress(bountyId, obj);
      }
    }, items),
    flushProgress: React.useCallback(() => {
      if (closure_2) {
        let obj = bountyId(endMode[6]);
        obj = { timestampSec: null, maxTimestampSec: null, duration: null };
        obj[0] = ref2.current;
        obj[1] = ref3.current;
        obj[2] = ref4.current;
        const result = obj.setBountyVideoProgress(bountyId, obj);
      }
    }, items1)
  };
  items = [bountiesExperience.ownedByVerticalScrollExperiment || bountiesExperience.stage1Enabled, bountyId];
  items1 = [bountiesExperience.ownedByVerticalScrollExperiment || bountiesExperience.stage1Enabled, bountyId];
  return obj;
};