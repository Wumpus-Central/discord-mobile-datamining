// === Module 12080: useChangelogRenderedAnalytics ===

// Module 12080 (useChangelogRenderedAnalytics)
import Constants from "Constants" /* 1085 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import ChangeLogActionCreatorsDefault from "ChangeLogActionCreators" /* 7765 */;
import react from "react" /* 19 */;
import LocaleStore from "LocaleStore" /* 2116 */;
import ReadStateStore_mod from "ReadStateStore" /* 4905 */;
import ChangelogStore from "ChangelogStore" /* 4904 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, current, importDefault;

let ReadStateStore = ReadStateStore_mod;
const AnalyticEvents = Constants.AnalyticEvents;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let closure_1;
  let locale;
  let ref;
  let stateFromStores;
  let stateFromStores2;
  let tmp10;
  let tmp6;
  let tmp7;
  _require = arg0;
  let tmp = _require;
  let obj = require("react");
  const cResult = obj.c(33);
  const tmp5 = require("useChangelogIdFromChannel")(arg0);
  const tmp4 = importDefault;
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
  const tmpResult = tmp(stateFromStores[8]);
  stateFromStores = tmpResult.useStateFromStores(tmp6, tmp7);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [stateFromStores2];
    cResult[2] = items1;
    tmp10 = items1;
  } else {
    tmp10 = cResult[2];
  }
  if (cResult[3] === tmp5) {
    let tmp12;
    let tmp13;
    let tmp15;
    let tmp17;
    let tmp19;
    let tmp22;
    if (cResult[4] === stateFromStores) {
      tmp12 = cResult[5];
      tmp13 = cResult[6];
    }
    const tmpResult3 = tmp(stateFromStores[8]);
    const stateFromStores1 = tmpResult3.useStateFromStores(tmp10, tmp12, tmp13);
    if (cResult[7] !== arg0) {
      const tmp16 = tmp4(stateFromStores[9])(arg0);
      cResult[7] = arg0;
      cResult[8] = tmp16;
      tmp15 = tmp16;
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
      tmp17 = timestamp;
    } else {
      tmp17 = cResult[10];
    }
    ReadStateStore = stateFromStores1.useRef(tmp17);
    const _Symbol = Symbol;
    if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
      const items2 = [ReadStateStore];
      cResult[11] = items2;
      tmp19 = items2;
    } else {
      tmp19 = cResult[11];
    }
    if (cResult[12] !== arg0) {
      class F {
        constructor() {
          return ReadStateStore.getUnreadCount(closure_0);
        }
      }
      const items3 = [arg0];
      cResult[12] = arg0;
      cResult[13] = F;
      cResult[14] = items3;
      tmp22 = items3;
    } else {
      class F {
        constructor() {
          return ReadStateStore.getUnreadCount(closure_0);
        }
      }
      tmp22 = cResult[14];
    }
    const tmpResult4 = tmp(stateFromStores[8]);
    stateFromStores2 = tmpResult4.useStateFromStores(tmp19, F, tmp22);
    const ref2 = obj4.useRef(stateFromStores2);
    if (cResult[15] !== stateFromStores2) {
      class A {
        constructor() {
          ref2.current = stateFromStores2;
        }
      }
      cResult[15] = stateFromStores2;
      cResult[16] = A;
    } else {
      class A {
        constructor() {
          ref2.current = stateFromStores2;
        }
      }
    }
    const effect = obj4.useEffect(A);
    const _Symbol2 = Symbol;
    if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
      class L {
        constructor() {
          ref.current = Date.now();
        }
      }
      cResult[17] = L;
    } else {
      class L {
        constructor() {
          ref.current = Date.now();
        }
      }
    }
    if (cResult[18] !== tmp15) {
      class L {
        constructor() {
          ref.current = Date.now();
        }
      }
      tmp28[0] = tmp15;
      cResult[18] = tmp15;
      cResult[19] = tmp28;
    } else {
      class L {
        constructor() {
          ref.current = Date.now();
        }
      }
    }
    class S {
      constructor() {
        let str = closure_1;
        const getChangelog = ChangelogStore.getChangelog;
        if (closure_1 == null) {
          str = "";
        }
        return getChangelog(str, stateFromStores);
      }
    }
    if (cResult[20] === tmp5) {
      class L {
        constructor() {
          ref.current = Date.now();
        }
      }
    }
    class R {
      constructor() {
        const tmp = locale && null != closure_1;
        if (tmp) {
          const obj = ChangeLogActionCreatorsDefault;
          const changelog = obj.fetchChangelog(closure_1, stateFromStores, true);
        }
      }
    }
    const items4 = [tmp5, stateFromStores, tmp15];
    cResult[20] = tmp5;
    cResult[21] = tmp15;
    cResult[22] = stateFromStores;
    cResult[23] = R;
    cResult[24] = items4;
  }
  class S {
    constructor() {
      let str = closure_1;
      const getChangelog = ChangelogStore.getChangelog;
      if (closure_1 == null) {
        str = "";
      }
      return getChangelog(str, stateFromStores);
    }
  }
  const items5 = [, stateFromStores];
  cResult[3] = tmp5;
  cResult[4] = stateFromStores;
  cResult[5] = S;
  cResult[6] = items5;
  tmp13 = items5;
  tmp12 = S;
}) : ((arg0) => {
  let closure_0;
  let closure_1;
  let locale;
  let stateFromStores;
  let stateFromStores2;
  _require = arg0;
  let tmp = stateFromStores;
  const tmp2 = require("useChangelogIdFromChannel")(arg0);
  importDefault = tmp2;
  let obj = require("get initialized");
  const items = [locale];
  stateFromStores = obj.useStateFromStores(items, () => locale.locale);
  const items1 = [stateFromStores2];
  const items2 = [tmp2, stateFromStores];
  const obj2 = require("get initialized");
  const stateFromStores1 = obj2.useStateFromStores(items1, () => {
    let str = closure_1;
    const getChangelog = ChangelogStore.getChangelog;
    if (closure_1 == null) {
      str = "";
    }
    return getChangelog(str, stateFromStores);
  }, items2);
  const tmp6 = require("isChangelogChannel")(arg0);
  locale = tmp6;
  let timestamp = null;
  const useRef = stateFromStores1.useRef;
  const tmp3 = _require;
  if (tmp6) {
    const tmp8 = globalThis;
    let _Date = Date;
    timestamp = Date.now();
  }
  const ref = useRef(timestamp);
  const items3 = [ref];
  const items4 = [arg0];
  const tmp3Result = tmp3(tmp[8]);
  stateFromStores2 = tmp3Result.useStateFromStores(items3, () => ReadStateStore.getUnreadCount(closure_0), items4);
  const ref2 = obj3.useRef(stateFromStores2);
  const effect = obj3.useEffect(() => {
    ref2.current = stateFromStores2;
  });
  const items5 = [tmp6];
  const effect1 = obj3.useEffect(() => {
    ref.current = Date.now();
  }, items5);
  const items6 = [tmp2, stateFromStores, tmp6];
  const effect2 = obj3.useEffect(() => {
    const tmp = locale && null != closure_1;
    if (tmp) {
      const obj = ChangeLogActionCreatorsDefault;
      const changelog = obj.fetchChangelog(closure_1, stateFromStores, true);
    }
  }, items6);
  const items7 = [tmp6, stateFromStores1];
  const effect3 = obj3.useEffect(() => {
    const tmp = locale && null != stateFromStores1;
    if (tmp) {
      const _HermesInternal = HermesInternal;
      const obj = { change_log_id: "" + stateFromStores1.date + ":" + stateFromStores1.revision, unread_count: ref2.current };
      const track = AnalyticsUtilsDefault.track;
      const CHANGE_LOG_OPENED = AnalyticEvents.CHANGE_LOG_OPENED;
      AnalyticsUtilsDefault;
      track(CHANGE_LOG_OPENED, obj);
    }
  }, items7);
  const items8 = [tmp6, stateFromStores1];
  const effect4 = obj3.useEffect(() => {
    current = ref.current;
    return () => {
      const tmp = locale && null != stateFromStores1 && null != current;
      if (tmp) {
        const _Math = Math;
        const _Date = Date;
        const obj = { seconds_open: Math.round((Date.now() - current) / 1000), change_log_id: "" + stateFromStores1.date + ":" + stateFromStores1.revision, unread_count: ref.current };
        const track = AnalyticsUtilsDefault.track;
        const CHANGE_LOG_CLOSED = AnalyticEvents.CHANGE_LOG_CLOSED;
        AnalyticsUtilsDefault;
        const _HermesInternal = HermesInternal;
        track(CHANGE_LOG_CLOSED, obj);
        closure_5.current = 0;
      }
    };
  }, items8);
});
const result = size.fileFinishedImporting("modules/changelog/useChangelogRenderedAnalytics.tsx");

export default tmp2;