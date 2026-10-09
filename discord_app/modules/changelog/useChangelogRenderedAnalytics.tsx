// === Module 12111: useChangelogRenderedAnalytics ===

// Module 12111 (useChangelogRenderedAnalytics)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1265 */;
import ChangeLogActionCreatorsDefault from "ChangeLogActionCreators" /* 8105 */;
import noop from "module_19" /* 19 */;
import LocaleStore from "LocaleStore" /* 2128 */;
import ReadStateStore from "ReadStateStore" /* 6042 */;
import ChangelogStore from "ChangelogStore" /* 7009 */;

const require = globalThis.__r;

const require = fn;
const AnalyticEvents = fn(1085).AnalyticEvents;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/changelog/useChangelogRenderedAnalytics.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useChangelogRenderedAnalytics(arg0) {
  _require = arg0;
  const cResult = require("c").c(33);
  const tmp5 = require("useChangelogIdFromChannel")(arg0);
  importDefault = tmp5;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [locale];
    const fn = function f() {
      return locale.locale;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp6 = items;
    tmp7 = fn;
  } else {
    [tmp6, tmp7] = cResult;
  }
  let obj = require("c");
  const tmp4 = importDefault;
  stateFromStores = require("initialize").useStateFromStores(tmp6, tmp7);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [stateFromStores2];
    cResult[2] = items1;
    let tmp10 = items1;
  } else {
    tmp10 = cResult[2];
  }
  if (cResult[3] === tmp5) {
    if (cResult[4] === stateFromStores) {
      let tmp12 = cResult[5];
      let tmp13 = cResult[6];
    }
    const stateFromStores1 = tmp(tmp2[8]).useStateFromStores(tmp10, tmp12, tmp13);
    if (cResult[7] !== arg0) {
      const tmp16 = tmp4(tmp2[9])(arg0);
      cResult[7] = arg0;
      cResult[8] = tmp16;
      let tmp15 = tmp16;
    } else {
      tmp15 = cResult[8];
    }
    locale = tmp15;
    if (cResult[9] !== tmp15) {
      let timestamp = null;
      if (tmp15) {
        let _Date = Date;
        timestamp = Date.now();
      }
      cResult[9] = tmp15;
      cResult[10] = timestamp;
      let tmp17 = timestamp;
    } else {
      tmp17 = cResult[10];
    }
    ReadStateStore = stateFromStores1.useRef(tmp17);
    const _Symbol = Symbol;
    if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
      const items2 = [ReadStateStore];
      cResult[11] = items2;
      let tmp19 = items2;
    } else {
      tmp19 = cResult[11];
    }
    if (cResult[12] !== arg0) {
      class R {
        constructor() {
          return closure_5.getUnreadCount(closure_0);
        }
      }
      const items3 = [arg0];
      cResult[12] = arg0;
      cResult[13] = R;
      cResult[14] = items3;
      let tmp22 = items3;
    } else {
      class R {
        constructor() {
          return closure_5.getUnreadCount(closure_0);
        }
      }
      tmp22 = cResult[14];
    }
    const tmpResult3 = tmp(tmp2[8]);
    stateFromStores2 = tmp(tmp2[8]).useStateFromStores(tmp19, R, tmp22);
    stateFromStores1.useRef(stateFromStores2);
    if (cResult[15] !== stateFromStores2) {
      class R {
        constructor() {
          return closure_5.getUnreadCount(closure_0);
        }
      }
      cResult[15] = stateFromStores2;
      cResult[16] = tmp25;
    } else {
      class R {
        constructor() {
          return closure_5.getUnreadCount(closure_0);
        }
      }
    }
    const effect = obj4.useEffect(tmp25);
    const _Symbol2 = Symbol;
    if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
      class R {
        constructor() {
          return closure_5.getUnreadCount(closure_0);
        }
      }
      cResult[17] = tmp28;
    } else {
      class R {
        constructor() {
          return closure_5.getUnreadCount(closure_0);
        }
      }
    }
    if (cResult[18] !== tmp15) {
      class R {
        constructor() {
          return closure_5.getUnreadCount(closure_0);
        }
      }
      tmp30[0] = tmp15;
      cResult[18] = tmp15;
      cResult[19] = tmp30;
    } else {
      class R {
        constructor() {
          return closure_5.getUnreadCount(closure_0);
        }
      }
    }
    class S {
      constructor() {
        str = closure_1;
        tmp = closure_6;
        if (closure_1 == null) {
          str = "";
        }
        return closure_6.getChangelog(str, closure_2);
      }
    }
    if (cResult[20] === tmp5) {
      class R {
        constructor() {
          return closure_5.getUnreadCount(closure_0);
        }
      }
    }
    class N {
      constructor() {
        tmp = closure_4;
        if (closure_4) {
          tmp2 = closure_1;
          tmp3 = null;
          tmp = null != closure_1;
        }
        if (tmp) {
          tmp4 = closure_1;
          tmp5 = closure_2;
          obj = closure_1(closure_2[10]);
          tmp6 = closure_1;
          tmp7 = closure_2;
          flag = true;
          changelog = obj.fetchChangelog(closure_1, closure_2, true);
        }
        return;
      }
    }
    const items4 = [tmp5, stateFromStores, tmp15];
    cResult[20] = tmp5;
    cResult[21] = tmp15;
    cResult[22] = stateFromStores;
    cResult[23] = N;
    cResult[24] = items4;
    const tmpResult4 = tmp(tmp2[8]);
  }
  class S {
    constructor() {
      str = closure_1;
      tmp = closure_6;
      if (closure_1 == null) {
        str = "";
      }
      return closure_6.getChangelog(str, closure_2);
    }
  }
  const items5 = [, stateFromStores];
  cResult[3] = tmp5;
  cResult[4] = stateFromStores;
  cResult[5] = S;
  cResult[6] = items5;
  tmp13 = items5;
  tmp12 = S;
  const tmpResult = require("initialize");
}) : (function useChangelogRenderedAnalytics(arg0) {
  _require = arg0;
  const tmp2 = require("useChangelogIdFromChannel")(arg0);
  importDefault = tmp2;
  const items = [locale];
  stateFromStores = require("initialize").useStateFromStores(items, () => locale.locale);
  let obj = require("initialize");
  let tmp = stateFromStores;
  const tmp3 = _require;
  const items1 = [stateFromStores2];
  const items2 = [tmp2, stateFromStores];
  const stateFromStores1 = require("initialize").useStateFromStores(items1, () => {
    let str = closure_1;
    if (closure_1 == null) {
      str = "";
    }
    return ChangelogStore.getChangelog(str, stateFromStores);
  }, items2);
  const tmp6 = require("isChangelogChannel")(arg0);
  locale = tmp6;
  let timestamp = null;
  if (tmp6) {
    let _Date = Date;
    timestamp = Date.now();
  }
  let obj2 = require("initialize");
  const ref = stateFromStores1.useRef(timestamp);
  const items3 = [ref];
  const items4 = [arg0];
  stateFromStores2 = tmp3(tmp[8]).useStateFromStores(items3, () => ReadStateStore.getUnreadCount(closure_0), items4);
  stateFromStores1.useRef(stateFromStores2);
  const effect = obj3.useEffect(() => {
    closure_7.current = stateFromStores2;
  });
  const items5 = [tmp6];
  const effect1 = obj3.useEffect(() => {
    closure_5.current = Date.now();
  }, items5);
  const items6 = [tmp2, stateFromStores, tmp6];
  const effect2 = obj3.useEffect(() => {
    let tmp = closure_4;
    if (closure_4) {
      tmp = null != closure_1;
    }
    if (tmp) {
      const changelog = ChangeLogActionCreatorsDefault.fetchChangelog(closure_1, stateFromStores, true);
    }
  }, items6);
  const items7 = [tmp6, stateFromStores1];
  const effect3 = obj3.useEffect(() => {
    let tmp = closure_4;
    if (closure_4) {
      tmp = null != stateFromStores1;
    }
    if (tmp) {
      const obj2 = { change_log_id: null, unread_count: null };
      const _HermesInternal = HermesInternal;
      obj2.change_log_id = "" + stateFromStores1.date + ":" + stateFromStores1.revision;
      obj2.unread_count = ref2.current;
      AnalyticsUtilsDefault.track(AnalyticEvents.CHANGE_LOG_OPENED, obj2);
    }
  }, items7);
  const items8 = [tmp6, stateFromStores1];
  const effect4 = obj3.useEffect(() => {
    const current = ref.current;
    return () => {
      let tmp = closure_4;
      if (closure_4) {
        tmp = null != stateFromStores1;
      }
      if (tmp) {
        tmp = null != current;
      }
      if (tmp) {
        const obj2 = { seconds_open: null, change_log_id: null, unread_count: null };
        const _Math = Math;
        const _Date = Date;
        obj2.seconds_open = Math.round((Date.now() - current) / 1000);
        const _HermesInternal = HermesInternal;
        obj2.change_log_id = "" + stateFromStores1.date + ":" + stateFromStores1.revision;
        obj2.unread_count = ref.current;
        AnalyticsUtilsDefault.track(AnalyticEvents.CHANGE_LOG_CLOSED, obj2);
        closure_5.current = 0;
      }
    };
  }, items8);
});