// discord_app/modules/changelog/useChangelogRenderedAnalytics.tsx
import AnalyticsUtilsDefault from "../../utils/AnalyticsUtils.tsx";
import ChangeLogActionCreatorsDefault from "../../actions/ChangeLogActionCreators.tsx";
import noop from "../../../_runtime/metro/00019__.js";
import LocaleStore from "../user_settings/LocaleStore.tsx";
import ReadStateStore from "../../stores/ReadStateStore.tsx";
import ChangelogStore from "ChangelogStore.tsx";

const require = fn;
const AnalyticEvents = fn(1074).AnalyticEvents;
const size = fn(2);
const result = size.fileFinishedImporting("modules/changelog/useChangelogRenderedAnalytics.tsx");

export default function useChangelogRenderedAnalytics(arg0) {
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
  const stateFromStores1 = require("initialize").useStateFromStores(
    items1,
    () => {
      let str = closure_1;
      if (closure_1 == null) {
        str = "";
      }
      return ChangelogStore.getChangelog(str, stateFromStores);
    },
    items2,
  );
  const tmp6 = require("isChangelogChannel")(arg0);
  locale = tmp6;
  let timestamp = null;
  if (tmp6) {
    let _Date = Date;
    timestamp = Date.now();
  }
  const obj2 = require("initialize");
  const ref = stateFromStores1.useRef(timestamp);
  const items3 = [ref];
  const items4 = [arg0];
  stateFromStores2 = tmp3(tmp[6]).useStateFromStores(items3, () => ReadStateStore.getUnreadCount(closure_0), items4);
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
      const obj = { change_log_id: null, unread_count: null };
      const _HermesInternal = HermesInternal;
      obj.change_log_id = "" + stateFromStores1.date + ":" + stateFromStores1.revision;
      obj.unread_count = ref2.current;
      obj.track(AnalyticEvents.CHANGE_LOG_OPENED, obj);
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
        const obj = { seconds_open: null, change_log_id: null, unread_count: null };
        const _Math = Math;
        const _Date = Date;
        obj.seconds_open = Math.round((Date.now() - current) / 1000);
        const _HermesInternal = HermesInternal;
        obj.change_log_id = "" + stateFromStores1.date + ":" + stateFromStores1.revision;
        obj.unread_count = ref.current;
        obj.track(AnalyticEvents.CHANGE_LOG_CLOSED, obj);
        closure_5.current = 0;
      }
    };
  }, items8);
}
