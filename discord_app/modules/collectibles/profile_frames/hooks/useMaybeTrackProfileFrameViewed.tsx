// === Module 8958: useMaybeTrackProfileFrameViewed ===

// Module 8958 (useMaybeTrackProfileFrameViewed)
import set from "set" /* 2 */;
import noop from "noop" /* 19 */;
import closure_4 from "updateCategoriesAndProducts" /* 5301 */;

({ useEffect: obj1, useRef: c3 } = noop);
let result = set.fileFinishedImporting("modules/collectibles/profile_frames/hooks/useMaybeTrackProfileFrameViewed.tsx");

export default function useMaybeTrackProfileFrameViewed(skuId) {
  skuId = skuId.skuId;
  const openedAt = skuId.openedAt;
  ({ context: closure_2, analyticsLocations: closure_3 } = skuId);
  let stateFromStores;
  closure_5 = undefined;
  closure_6 = undefined;
  closure_7 = undefined;
  closure_8 = undefined;
  const items = [stateFromStores];
  stateFromStores = skuId(openedAt[2]).useStateFromStores(items, () => stateFromStores.getProductFetch(skuId));
  closure_5 = callback2(undefined);
  closure_6 = callback2(undefined);
  closure_7 = callback2(undefined);
  closure_8 = callback2(false);
  const items1 = [skuId, openedAt, stateFromStores];
  callback(() => {
    if (null != skuId) {
      if (null != openedAt) {
        let tmp3 = ref2.current === tmp;
        if (tmp3) {
          tmp3 = ref3.current === tmp22;
        }
        if (!tmp3) {
          tmp23.current = tmp;
          ref3.current = tmp22;
          ref4.current = false;
          ref.current = undefined;
        }
        const _Date = Date;
        const timestamp = Date.now();
        if (ref.current == null) {
          tmp9.current = timestamp - tmp22;
        }
        let state;
        if (stateFromStores != null) {
          state = tmp10.state;
        }
        let current = "success" !== state;
        if (!current) {
          current = ref4.current;
        }
        if (!current) {
          ref4.current = true;
          let obj = skuId(openedAt[3]);
          obj = { profileUi: "PROFILE_FRAME", timeToInteractiveMs: null, timeToLoadMs: null, timeToFetchMs: null, viewStartedAt: null, fetchStartedAt: null, analyticsLocations: null };
          obj[1] = tmp9.current;
          obj[2] = timestamp - tmp22;
          let diff;
          if (null != tmp10.startedAt) {
            if (null != tmp10.endedAt) {
              diff = tmp10.endedAt - tmp10.startedAt;
            }
          }
          obj[3] = diff;
          obj[4] = tmp22;
          obj[5] = tmp10.startedAt;
          obj[6] = closure_3;
          const merged = Object.assign(closure_2);
          const result = obj.maybeTrackUserProfileUiViewed(obj);
        }
        tmp23 = ref2;
      }
    }
  }, items1);
};