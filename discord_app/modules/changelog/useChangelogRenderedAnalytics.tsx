import noop from "noop";
import _getSystemLocale from "_getSystemLocale";
import generateOldThreadCutoff from "generateOldThreadCutoff";
import handleUserSettingsProtoStoreChange from "handleUserSettingsProtoStoreChange";
import { AnalyticEvents } from "ME";

const require = arg1;
const result = require("generateOldThreadCutoff").fileFinishedImporting("modules/changelog/useChangelogRenderedAnalytics.tsx");

export default function useChangelogRenderedAnalytics(arg0) {
  const _require = arg0;
  const tmp2 = importDefault(stateFromStores[5])(arg0);
  importDefault = tmp2;
  const items = [_getSystemLocale];
  stateFromStores = _require(stateFromStores[6]).useStateFromStores(items, () => tmp6.locale);
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
  _getSystemLocale = tmp6;
  let timestamp = null;
  if (tmp6) {
    let _Date = Date;
    timestamp = Date.now();
  }
  let generateOldThreadCutoff = stateFromStores1.useRef(timestamp);
  const obj2 = _require(stateFromStores[6]);
  const items3 = [generateOldThreadCutoff];
  const items4 = [arg0];
  stateFromStores2 = tmp3(tmp[6]).useStateFromStores(items3, () => ref.getUnreadCount(closure_0), items4);
  let closure_7 = obj3.useRef(stateFromStores2);
  const effect = obj3.useEffect(() => {
    closure_7.current = stateFromStores2;
  });
  const items5 = [tmp6];
  const effect1 = obj3.useEffect(() => {
    generateOldThreadCutoff.current = Date.now();
  }, items5);
  const items6 = [tmp2, stateFromStores, tmp6];
  const effect2 = obj3.useEffect(() => {
    let tmp = _getSystemLocale;
    if (_getSystemLocale) {
      tmp = null != tmp2;
    }
    if (tmp) {
      const changelog = tmp2(stateFromStores[8]).fetchChangelog(tmp2, stateFromStores, true);
      const obj = tmp2(stateFromStores[8]);
    }
  }, items6);
  const items7 = [tmp6, stateFromStores1];
  const effect3 = obj3.useEffect(() => {
    let tmp = _getSystemLocale;
    if (_getSystemLocale) {
      tmp = null != stateFromStores1;
    }
    if (tmp) {
      let obj = tmp2(stateFromStores[9]);
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
      let tmp = outer1_4;
      if (outer1_4) {
        tmp = null != outer1_3;
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
        obj[1] = "" + outer1_3.date + ":" + outer1_3.revision;
        obj[2] = outer1_7.current;
        obj.track(constants.CHANGE_LOG_CLOSED, obj);
        outer1_5.current = 0;
      }
    };
  }, items8);
};