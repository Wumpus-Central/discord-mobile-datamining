// === Module 13141: useTrackUserProfileActivityView ===

// Module 13141 (useTrackUserProfileActivityView)
import _slicedToArray from "module_32" /* 32 */;
import ContentInventoryOutboxStore from "ContentInventoryOutboxStore" /* 8996 */;

const require = globalThis.__r;

const require = fn;
const noop = fn(19);
({ useEffect: c3, useState: closure_4 } = noop);
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/hooks/native/useTrackUserProfileActivityView.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useTrackUserProfileActivityView(userId) {
  const cResult = userId(onAction[4]).c(7);
  userId = userId.userId;
  onAction = userId.onAction;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ContentInventoryOutboxStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== userId) {
    const fn = function f() {
      return ContentInventoryOutboxStore.isFetchingUserOutbox(userId);
    };
    cResult[1] = userId;
    cResult[2] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const obj = userId(onAction[4]);
  const stateFromStores = userId(onAction[5]).useStateFromStores(first, tmp6);
  const tmp8 = _slicedToArray(closure_4(false), 2);
  _slicedToArray = tmp8[1];
  let tmp9 = !stateFromStores;
  if (!stateFromStores) {
    tmp9 = !tmp8[0];
  }
  closure_3 = tmp9;
  if (cResult[3] === onAction) {
    if (cResult[4] === tmp9) {
      let tmp10 = cResult[5];
      let tmp11 = cResult[6];
    }
    closure_3(tmp10, tmp11);
  }
  class A {
    constructor() {
      if (closure_3) {
        tmp = onAction;
        tmp2 = onAction({ action: "VIEW_ACTIVITY_CARD" });
        tmp3 = closure_2;
        flag = true;
        tmp4 = closure_2(true);
      }
      return;
    }
  }
  const items1 = [tmp9, onAction];
  cResult[3] = onAction;
  cResult[4] = tmp9;
  cResult[5] = A;
  cResult[6] = items1;
  tmp11 = items1;
  tmp10 = A;
  const tmpResult = userId(onAction[5]);
}) : (function useTrackUserProfileActivityView(arg0) {
  ({ userId: require, onAction } = arg0);
  _slicedToArray = undefined;
  closure_3 = undefined;
  const items = [ContentInventoryOutboxStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => ContentInventoryOutboxStore.isFetchingUserOutbox(require));
  const tmp2 = _slicedToArray(closure_4(false), 2);
  _slicedToArray = tmp2[1];
  let tmp3 = !stateFromStores;
  if (!stateFromStores) {
    tmp3 = !tmp2[0];
  }
  closure_3 = tmp3;
  const items1 = [tmp3, onAction];
  closure_3(() => {
    if (closure_3) {
      onAction({ action: "VIEW_ACTIVITY_CARD" });
      closure_2(true);
    }
  }, items1);
});