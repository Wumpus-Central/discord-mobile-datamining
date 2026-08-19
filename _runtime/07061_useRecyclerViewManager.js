// === Module 7061: useRecyclerViewManager ===

// Module 7061 (useRecyclerViewManager)
import _slicedToArray from "_slicedToArray" /* 7041 */;
import noop from "noop" /* 19 */;

const require = fn;
({ useEffect: c3, useMemo: c4, useState: c5 } = noop);

export const useRecyclerViewManager = (data) => {
  closure_0 = data;
  let recyclerViewManager = velocityTracker(callback3(() => {
    recyclerViewManager = new data(recyclerViewManager[2]).RecyclerViewManager(data);
    return recyclerViewManager;
  }), 1)[0];
  velocityTracker = velocityTracker(callback3(() => {
    velocityTracker = new data(recyclerViewManager[3]).VelocityTracker();
    return velocityTracker;
  }), 1)[0];
  const items = [data];
  callback2(() => {
    recyclerViewManager.updateProps(closure_0);
  }, items);
  const items1 = [data.data];
  callback2(() => {
    recyclerViewManager.processDataUpdate();
  }, items1);
  callback(() => {
    recyclerViewManager.restoreIfNeeded();
    return () => {
      closure_1.dispose();
      closure_2.cleanUp();
    };
  }, []);
  return { recyclerViewManager, velocityTracker };
};