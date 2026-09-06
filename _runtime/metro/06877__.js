// === Module 6877: ? ===

// Module 6877
import RecyclerViewManager from "RecyclerViewManager" /* 6878 */;
import _slicedToArray from "module_6857" /* 6857 */;

require = fn;
const noop = fn(19);
({ useEffect: c3, useMemo: closure_4, useState: hasOwnProperty } = noop);

export const useRecyclerViewManager = (data) => {
  let recyclerViewManager = velocityTracker(closure_5(() => {
    recyclerViewManager = new RecyclerViewManager.RecyclerViewManager(closure_0);
    return recyclerViewManager;
  }), 1)[0];
  velocityTracker = velocityTracker(closure_5(() => {
    velocityTracker = new data(recyclerViewManager[3]).VelocityTracker();
    return velocityTracker;
  }), 1)[0];
  const items = [data];
  closure_4(() => {
    recyclerViewManager.updateProps(closure_0);
  }, items);
  const items1 = [data.data];
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