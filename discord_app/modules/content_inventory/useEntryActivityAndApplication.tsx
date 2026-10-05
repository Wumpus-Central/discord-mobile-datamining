// === Module 12819: useEntryActivityAndApplication ===

// Module 12819 (useEntryActivityAndApplication)
import _slicedToArray from "_slicedToArray" /* 32 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2050 */;
import ContentInventoryActivityStore from "ContentInventoryActivityStore" /* 12820 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((extra) => {
  let first;
  let first1;
  let tmp6;
  _require = extra;
  const obj = require("react");
  const cResult = obj.c(16);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ContentInventoryActivityStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== extra) {
    const fn = function l() {
      return ContentInventoryActivityStore.getMatchingActivity(extra);
    };
    cResult[1] = extra;
    cResult[2] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const tmpResult = require("get initialized");
  const stateFromStores = tmpResult.useStateFromStores(first, tmp6);
  let application_id;
  if (stateFromStores != null) {
    application_id = stateFromStores.application_id;
  }
  let application_id1;
  if ("application_id" in extra.extra) {
    application_id1 = extra.extra.application_id;
  }
  if (cResult[3] === application_id) {
    let tmp10;
    let tmp16;
    if (cResult[4] === application_id1) {
      tmp10 = cResult[5];
    }
    const tmp13 = _slicedToArray(first1(6663)(tmp10), 2);
    first1 = tmp13[0];
    const _Symbol = Symbol;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      const items1 = [EmbeddedActivitiesStore];
      cResult[6] = items1;
      tmp16 = items1;
    } else {
      tmp16 = cResult[6];
    }
    let id;
    const tmp18 = cResult[7];
    if (first1 != null) {
      id = first1.id;
    }
    if (tmp18 === id) {
      let tmp20;
      if (cResult[8] === extra.author_id) {
        tmp20 = cResult[9];
      }
      const tmpResult2 = require("get initialized");
      const stateFromStores1 = tmpResult2.useStateFromStores(tmp16, tmp20);
      let tmp23 = first1;
      if (first1 == null) {
        tmp23 = tmp15;
      }
      if (cResult[10] === stateFromStores) {
        if (cResult[11] === first1) {
          if (cResult[12] === tmp23) {
            if (cResult[13] === stateFromStores1) {
              let tmp24;
              if (cResult[14] === tmp13[1]) {
                tmp24 = cResult[15];
              }
              return tmp24;
            }
          }
        }
      }
      const obj2 = { activity: stateFromStores, embeddedActivity: stateFromStores1, anyMatchingApplication: tmp23, activityApplication: first1, fallbackApplication: tmp13[1] };
      cResult[10] = stateFromStores;
      cResult[11] = first1;
      cResult[12] = tmp23;
      cResult[13] = stateFromStores1;
      cResult[14] = tmp13[1];
      cResult[15] = obj2;
      tmp24 = obj2;
    }
    let id1;
    if (first1 != null) {
      id1 = first1.id;
    }
    const fn2 = function h() {
      let id;
      const getEmbeddedActivityForUserId = EmbeddedActivitiesStore.getEmbeddedActivityForUserId;
      const author_id = extra.author_id;
      if (first1 != null) {
        id = first1.id;
      }
      return getEmbeddedActivityForUserId(author_id, id);
    };
    cResult[7] = id1;
    cResult[8] = extra.author_id;
    cResult[9] = fn2;
    tmp20 = fn2;
  }
  const items2 = [application_id, application_id1];
  cResult[3] = application_id;
  cResult[4] = application_id1;
  cResult[5] = items2;
  tmp10 = items2;
}) : ((extra) => {
  let activityApplication;
  let items2;
  let tmp10;
  let tmpResult;
  _require = extra;
  const items = [ContentInventoryActivityStore];
  const obj = require("get initialized");
  const stateFromStores = obj.useStateFromStores(items, () => ContentInventoryActivityStore.getMatchingActivity(extra));
  let application_id;
  const tmp = _require;
  const tmp4 = activityApplication(6663);
  if (stateFromStores != null) {
    application_id = stateFromStores.application_id;
  }
  const items1 = [application_id, ];
  let application_id1;
  if ("application_id" in extra.extra) {
    application_id1 = extra.extra.application_id;
  }
  items1[1] = application_id1;
  const tmp7 = _slicedToArray(tmp4(items1), 2);
  activityApplication = tmp7[0];
  const obj2 = {
    activity: stateFromStores,
    embeddedActivity: tmpResult.useStateFromStores(items2, () => {
      let id;
      const getEmbeddedActivityForUserId = EmbeddedActivitiesStore.getEmbeddedActivityForUserId;
      const author_id = extra.author_id;
      if (first != null) {
        id = first.id;
      }
      return getEmbeddedActivityForUserId(author_id, id);
    }),
    anyMatchingApplication: tmp10,
    activityApplication,
    fallbackApplication: tmp7[1]
  };
  items2 = [EmbeddedActivitiesStore];
  tmp10 = activityApplication;
  tmpResult = tmp(504);
  if (activityApplication == null) {
    tmp10 = tmp9;
  }
  return obj2;
});
const result = size.fileFinishedImporting("modules/content_inventory/useEntryActivityAndApplication.tsx");

export default tmp2;