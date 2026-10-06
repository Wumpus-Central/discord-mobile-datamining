// === Module 9861: useUnreadSettingNotice ===

// Module 9861 (useUnreadSettingNotice)
import ChannelRecord from "ChannelRecord" /* 2055 */;
import UnreadSettingNoticeStore2Default from "UnreadSettingNoticeStore2" /* 9863 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const set = ChannelRecord.CHANNEL_ELIGIBLE_FOR_UNREAD_SETTING;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((id) => {
  let closure_3;
  let first;
  let first1;
  let tmp10;
  let tmp12;
  let tmp8;
  const _require = id;
  let obj = require("react");
  const cResult = obj.c(19);
  const obj2 = require("notifications/NotificationUtils");
  const shouldUseNewNotificationSystem = obj2.useShouldUseNewNotificationSystem("useShouldRenderBanner");
  [first, _slicedToArray] = react.useState("");
  const tmp = _require;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function c() {
      closure_3("");
    };
    cResult[0] = fn;
    first1 = fn;
  } else {
    first1 = cResult[0];
  }
  if (cResult[1] !== id.id) {
    const items = [id.id];
    cResult[1] = id.id;
    cResult[2] = items;
    tmp8 = items;
  } else {
    tmp8 = cResult[2];
  }
  const effect = react.useEffect(first1, tmp8);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [shouldUseNewNotificationSystem(first[6])];
    cResult[3] = items1;
    tmp10 = items1;
  } else {
    tmp10 = cResult[3];
  }
  if (cResult[4] !== id.id) {
    const fn2 = function f() {
      const obj = UnreadSettingNoticeStore2Default;
      return obj.getLastActionTime(id.id);
    };
    cResult[4] = id.id;
    cResult[5] = fn2;
    tmp12 = fn2;
  } else {
    tmp12 = cResult[5];
  }
  const tmpResult = tmp(first[7]);
  const stateFromStores = tmpResult.useStateFromStores(tmp10, tmp12);
  if (cResult[6] === id.id) {
    if (cResult[7] === id.type) {
      if (cResult[8] === shouldUseNewNotificationSystem) {
        let tmp14;
        if (cResult[9] === first) {
          tmp14 = cResult[10];
        }
        if (cResult[11] === id) {
          if (cResult[12] === stateFromStores) {
            if (cResult[13] === shouldUseNewNotificationSystem) {
              let tmp15;
              let tmp17;
              let tmp19;
              if (cResult[14] === first) {
                tmp15 = cResult[15];
              }
              const effect1 = react.useEffect(tmp14, tmp15);
              const _Symbol = Symbol;
              if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
                const fn3 = function b() {
                  return closure_3("");
                };
                cResult[16] = fn3;
                tmp17 = fn3;
              } else {
                tmp17 = cResult[16];
              }
              if (cResult[17] !== (first === id.id)) {
                const obj4 = { showUnreadsNotice: first === id.id, clearUnreadsNotice: tmp17 };
                cResult[17] = first === id.id;
                cResult[18] = obj4;
                tmp19 = obj4;
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
  class U {
    constructor() {
      let hasItem = set.has(id.type) && first !== id.id && shouldUseNewNotificationSystem;
      if (hasItem) {
        const obj = UnreadSettingNoticeStore2Default;
        hasItem = obj.maybeAutoUpgradeChannel(id.id);
      }
      if (hasItem) {
        closure_3(id.id);
      }
    }
  }
  cResult[6] = id.id;
  cResult[7] = id.type;
  cResult[8] = shouldUseNewNotificationSystem;
  cResult[9] = first;
  cResult[10] = U;
  tmp14 = U;
}) : ((id) => {
  let closure_3;
  let first;
  const _require = id;
  let obj = require("notifications/NotificationUtils");
  const shouldUseNewNotificationSystem = obj.useShouldUseNewNotificationSystem("useShouldRenderBanner");
  [first, _slicedToArray] = react.useState("");
  const items = [id.id];
  const effect = react.useEffect(() => {
    closure_3("");
  }, items);
  const useStateFromStores = require("get initialized").useStateFromStores;
  const items1 = [];
  require("get initialized");
  items1[0] = shouldUseNewNotificationSystem(first[6]);
  const items2 = [
    first,
    shouldUseNewNotificationSystem,
    useStateFromStores(items1, () => {
      const obj = UnreadSettingNoticeStore2Default;
      return obj.getLastActionTime(id.id);
    }),
    id
  ];
  const effect1 = react.useEffect(() => {
    let hasItem = set.has(id.type) && first !== id.id && shouldUseNewNotificationSystem;
    if (hasItem) {
      const obj = UnreadSettingNoticeStore2Default;
      hasItem = obj.maybeAutoUpgradeChannel(id.id);
    }
    if (hasItem) {
      closure_3(id.id);
    }
  }, items2);
  const obj2 = { showUnreadsNotice: first === id.id, clearUnreadsNotice: react.useCallback(() => closure_3(""), []) };
  return obj2;
});
const result = size.fileFinishedImporting("modules/notifications/settings_unread_notice/utils/useUnreadSettingNotice.tsx");

export default tmp2;