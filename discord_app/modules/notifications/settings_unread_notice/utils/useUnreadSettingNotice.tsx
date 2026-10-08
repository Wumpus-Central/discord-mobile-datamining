// === Module 10421: useUnreadSettingNotice ===

// Module 10421 (useUnreadSettingNotice)
import UnreadSettingNoticeStore2Default from "UnreadSettingNoticeStore2" /* 10423 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

const require = fn;
fn(2067).CHANNEL_ELIGIBLE_FOR_UNREAD_SETTING;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/notifications/settings_unread_notice/utils/useUnreadSettingNotice.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useUnreadSettingNotice(id) {
  const _require = id;
  const cResult = require("c").c(19);
  let obj = require("c");
  const tmp = _require;
  const shouldUseNewNotificationSystem = require("notifications/NotificationUtils").useShouldUseNewNotificationSystem("useShouldRenderBanner");
  [first, _slicedToArray] = noop.useState("");
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function c() {
      closure_3("");
    };
    cResult[0] = fn;
    let first1 = fn;
  } else {
    first1 = cResult[0];
  }
  if (cResult[1] !== id.id) {
    const items = [id.id];
    cResult[1] = id.id;
    cResult[2] = items;
    let tmp8 = items;
  } else {
    tmp8 = cResult[2];
  }
  const effect = noop.useEffect(first1, tmp8);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [shouldUseNewNotificationSystem(tmp2[6])];
    cResult[3] = items1;
    let tmp10 = items1;
  } else {
    tmp10 = cResult[3];
  }
  if (cResult[4] !== id.id) {
    const fn2 = function f() {
      return UnreadSettingNoticeStore2Default.getLastActionTime(id.id);
    };
    cResult[4] = id.id;
    cResult[5] = fn2;
    let tmp12 = fn2;
  } else {
    tmp12 = cResult[5];
  }
  const obj2 = require("notifications/NotificationUtils");
  const stateFromStores = tmp(first[7]).useStateFromStores(tmp10, tmp12);
  if (cResult[6] === id.id) {
    if (cResult[7] === id.type) {
      if (cResult[8] === shouldUseNewNotificationSystem) {
        if (cResult[9] === first) {
          let tmp14 = cResult[10];
        }
        if (cResult[11] === id) {
          if (cResult[12] === stateFromStores) {
            if (cResult[13] === shouldUseNewNotificationSystem) {
              if (cResult[14] === first) {
                let tmp15 = cResult[15];
              }
              const effect1 = noop.useEffect(tmp14, tmp15);
              const _Symbol = Symbol;
              if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
                const fn3 = function b() {
                  return closure_3("");
                };
                cResult[16] = fn3;
                let tmp17 = fn3;
              } else {
                tmp17 = cResult[16];
              }
              if (cResult[17] !== (first === id.id)) {
                const obj4 = { showUnreadsNotice: tmp18, clearUnreadsNotice: tmp17 };
                cResult[17] = tmp18;
                cResult[18] = obj4;
                let tmp19 = obj4;
              } else {
                tmp19 = cResult[18];
              }
              return tmp19;
            }
          }
        }
        const items2 = [first, shouldUseNewNotificationSystem, stateFromStores, id];
        cResult[11] = id;
        cResult[12] = stateFromStores;
        cResult[13] = shouldUseNewNotificationSystem;
        cResult[14] = first;
        cResult[15] = items2;
        tmp15 = items2;
      }
    }
  }
  class E {
    constructor() {
      tmp = closure_0;
      hasItem = closure_5.has(closure_0.type);
      if (hasItem) {
        tmp3 = closure_2;
        hasItem = closure_2 !== tmp.id;
      }
      if (hasItem) {
        hasItem = closure_1;
      }
      if (hasItem) {
        tmp4 = closure_1;
        tmp5 = closure_2;
        obj = closure_1(closure_2[6]);
        hasItem = obj.maybeAutoUpgradeChannel(tmp.id);
      }
      if (hasItem) {
        tmp6 = closure_3;
        tmp7 = closure_3(tmp.id);
      }
      return;
    }
  }
  cResult[6] = id.id;
  cResult[7] = id.type;
  cResult[8] = shouldUseNewNotificationSystem;
  cResult[9] = first;
  cResult[10] = E;
  tmp14 = E;
  const tmpResult = tmp(first[7]);
}) : (function useUnreadSettingNotice(id) {
  const _require = id;
  const shouldUseNewNotificationSystem = require("notifications/NotificationUtils").useShouldUseNewNotificationSystem("useShouldRenderBanner");
  [first, _slicedToArray] = noop.useState("");
  const items = [id.id];
  const effect = noop.useEffect(() => {
    closure_3("");
  }, items);
  let obj = require("notifications/NotificationUtils");
  const items1 = [shouldUseNewNotificationSystem(first[6])];
  const items2 = [first, shouldUseNewNotificationSystem, require("initialize").useStateFromStores(items1, () => UnreadSettingNoticeStore2Default.getLastActionTime(id.id)), id];
  const effect1 = noop.useEffect(() => {
    let hasItem = set.has(id.type);
    if (hasItem) {
      hasItem = first !== id.id;
    }
    if (hasItem) {
      hasItem = shouldUseNewNotificationSystem;
    }
    if (hasItem) {
      hasItem = UnreadSettingNoticeStore2Default.maybeAutoUpgradeChannel(id.id);
    }
    if (hasItem) {
      closure_3(id.id);
    }
  }, items2);
  const obj2 = require("initialize");
  return { showUnreadsNotice: first === id.id, clearUnreadsNotice: noop.useCallback(() => closure_3(""), []) };
});