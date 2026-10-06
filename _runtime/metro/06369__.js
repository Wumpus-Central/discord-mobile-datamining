// === Module 6369: ? ===

// Module 6369
import RecyclerViewManager from "RecyclerViewManager" /* 6370 */;
import _slicedToArray from "_slicedToArray" /* 6349 */;
import react from "react" /* 19 */;

let c3;
let closure_4;
let hasOwnProperty;
({ useEffect: c3, useMemo: closure_4, useState: hasOwnProperty } = react);

export const useRecyclerViewManager = (data) => {
  let velocityTracker;
  let recyclerViewManager = velocityTracker(closure_5(() => {
    recyclerViewManager = new RecyclerViewManager.RecyclerViewManager(data);
    return recyclerViewManager;
  }), 1)[0];
  velocityTracker = velocityTracker(closure_5(() => {
    velocityTracker = new data(recyclerViewManager[3]).VelocityTracker();
    return velocityTracker;
  }), 1)[0];
  const items = [data];
  data = data.data;
  closure_4(() => {
    recyclerViewManager.updateProps(data);
  }, items);
  const items1 = [data];
  closure_4(() => {
    recyclerViewManager.processDataUpdate();
  }, items1);
  closure_3(() => {
    recyclerViewManager.restoreIfNeeded();
    return () => {
      recyclerViewManager.dispose();
      velocityTracker.cleanUp();
    };
  }, []);
  return { recyclerViewManager, velocityTracker };
};