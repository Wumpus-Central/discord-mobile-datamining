// === Module 12844: useTrackUserProfileActivityView ===

// Module 12844 (useTrackUserProfileActivityView)
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ContentInventoryOutboxStore from "ContentInventoryOutboxStore" /* 8447 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let userId;

let c3;
let closure_4;
let _slicedToArray = _slicedToArray_mod;
({ useEffect: c3, useState: closure_4 } = react);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((userId) => {
  let closure_2;
  let first;
  let onAction;
  let tmp6;
  const obj = userId(onAction[4]);
  const cResult = obj.c(7);
  const tmp = userId;
  userId = userId.userId;
  const tmp2 = onAction;
  onAction = userId.onAction;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ContentInventoryOutboxStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== userId) {
    const fn = function f() {
      return ContentInventoryOutboxStore.isFetchingUserOutbox(userId);
    };
    cResult[1] = userId;
    cResult[2] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const tmpResult = tmp(tmp2[5]);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp6);
  const tmp8 = _slicedToArray(closure_4(false), 2);
  _slicedToArray = tmp8[1];
  let closure_3 = tmp9;
  if (cResult[3] === onAction) {
    let tmp10;
    let tmp11;
    if (cResult[4] === (!stateFromStores && !tmp8[0])) {
      tmp10 = cResult[5];
      tmp11 = cResult[6];
    }
    closure_3(tmp10, tmp11);
  }
  const fn2 = function v() {
    if (closure_3) {
      onAction({ action: "VIEW_ACTIVITY_CARD" });
      closure_2(true);
    }
  };
  const items1 = [!stateFromStores && !tmp8[0], onAction];
  cResult[3] = onAction;
  cResult[4] = !stateFromStores && !tmp8[0];
  cResult[5] = fn2;
  cResult[6] = items1;
  tmp11 = items1;
  tmp10 = fn2;
}) : ((arg0) => {
  let closure_2;
  let onAction;
  ({ userId: require, onAction } = arg0);
  _slicedToArray = undefined;
  const items = [ContentInventoryOutboxStore];
  const obj = require("get initialized");
  const stateFromStores = obj.useStateFromStores(items, () => ContentInventoryOutboxStore.isFetchingUserOutbox(require));
  const tmp2 = _slicedToArray(closure_4(false), 2);
  _slicedToArray = tmp2[1];
  let closure_3 = tmp3;
  const items1 = [tmp3, onAction];
  closure_3(() => {
    if (closure_3) {
      onAction({ action: "VIEW_ACTIVITY_CARD" });
      closure_2(true);
    }
  }, items1);
});
const result = size.fileFinishedImporting("modules/user_profile/hooks/native/useTrackUserProfileActivityView.tsx");

export default tmp3;