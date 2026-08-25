// === Module 11997: useChangelogRenderedAnalytics ===

// Module 11997 (useChangelogRenderedAnalytics)
import closure_3 from "noop" /* 19 */;
import closure_4 from "_getSystemLocale" /* 1996 */;
import closure_5 from "generateOldThreadCutoff" /* 4395 */;
import closure_6 from "handleUserSettingsProtoStoreChange" /* 4394 */;
import { AnalyticEvents } from "ME" /* 676 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/changelog/useChangelogRenderedAnalytics.tsx");

export default function useChangelogRenderedAnalytics(arg0) {
  const _require = arg0;
  const tmp2 = importDefault(stateFromStores[5])(arg0);
  importDefault = tmp2;
  const items = [closure_4];
  stateFromStores = _require(stateFromStores[6]).useStateFromStores(items, () => locale.locale);
  let obj = _require(stateFromStores[6]);
  let tmp = stateFromStores;
  const tmp3 = _require;
  const items1 = [stateFromStores2];
  const items2 = [tmp2, stateFromStores];
  const stateFromStores1 = _require(stateFromStores[6]).useStateFromStores(items1, () => {
    let str = closure_1;
    if (closure_1 == null) {
      str = "";
    }
    return stateFromStores2.getChangelog(str, stateFromStores);
  }, items2);
  const tmp6 = importDefault(stateFromStores[7])(arg0);
  closure_4 = tmp6;
  let timestamp = null;
  if (tmp6) {
    let _Date = Date;
    timestamp = Date.now();
  }
  closure_5 = stateFromStores1.useRef(timestamp);
  const obj2 = _require(stateFromStores[6]);
  const items3 = [closure_5];
  const items4 = [arg0];
  stateFromStores2 = tmp3(tmp[6]).useStateFromStores(items3, () => ref.getUnreadCount(closure_0), items4);
  closure_7 = obj3.useRef(stateFromStores2);
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
      tmp = null != callback;
    }
    if (tmp) {
      const changelog = callback(stateFromStores[8]).fetchChangelog(callback, stateFromStores, true);
      const obj = callback(stateFromStores[8]);
    }
  }, items6);
  const items7 = [tmp6, stateFromStores1];
  const effect3 = obj3.useEffect(() => {
    let tmp = closure_4;
    if (closure_4) {
      tmp = null != stateFromStores1;
    }
    if (tmp) {
      let obj = callback(stateFromStores[9]);
      obj = { change_log_id: null, unread_count: null };
      const _HermesInternal = HermesInternal;
      obj[0] = "" + stateFromStores1.date + ":" + stateFromStores1.revision;
      obj[1] = ref2.current;
      obj.track(ref2.CHANGE_LOG_OPENED, obj);
    }
  }, items7);
  const items8 = [tmp6, stateFromStores1];
  const effect4 = obj3.useEffect(() => {
    const current = ref.current;
    return () => {
      let tmp = closure_1_4;
      if (closure_1_4) {
        tmp = null != closure_1_3;
      }
      if (tmp) {
        tmp = null != current;
      }
      if (tmp) {
        let obj = callback(stateFromStores[9]);
        obj = { seconds_open: null, change_log_id: null, unread_count: null };
        const _Math = Math;
        const _Date = Date;
        obj[0] = Math.round((Date.now() - current) / 1000);
        const _HermesInternal = HermesInternal;
        obj[1] = "" + closure_1_3.date + ":" + closure_1_3.revision;
        obj[2] = closure_1_7.current;
        obj.track(constants.CHANGE_LOG_CLOSED, obj);
        closure_1_5.current = 0;
      }
    };
  }, items8);
};