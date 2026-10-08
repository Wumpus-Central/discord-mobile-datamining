// === Module 13401: InAppReportsDeleteMessageElement ===

// Module 13401 (InAppReportsDeleteMessageElement)
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 5105 */;
import MessageActionCreatorsDefault from "MessageActionCreators" /* 7167 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import MessageStore from "MessageStore" /* 5428 */;

const require = fn;
const AnalyticEvents = fn(1085).AnalyticEvents;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/in_app_reports/native/components/InAppReportsDeleteMessageElement.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function DeleteMessageElement(message) {
  const cResult = message(576).c(17);
  message = message.message;
  const reportId = message.reportId;
  let obj = message(576);
  [tmp5, dependencyMap] = stateFromStores(noop.useState(false), 2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [MessageStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== message) {
    const fn = function u() {
      return null == MessageStore.getMessage(message.getChannelId(), message.id);
    };
    const items1 = [message];
    cResult[1] = message;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp9 = items1;
    let tmp8 = fn;
  } else {
    tmp8 = cResult[2];
    tmp9 = cResult[3];
  }
  const tmp4 = stateFromStores(noop.useState(false), 2);
  stateFromStores = message(504).useStateFromStores(first, tmp8, tmp9);
  if (cResult[4] !== stateFromStores) {
    class T {
      constructor() {
        tmp = closure_2(closure_3);
        return;
      }
    }
    const items2 = [stateFromStores];
    cResult[4] = stateFromStores;
    cResult[5] = T;
    cResult[6] = items2;
    let tmp12 = items2;
  } else {
    class T {
      constructor() {
        tmp = closure_2(closure_3);
        return;
      }
    }
    tmp12 = cResult[6];
  }
  const effect = noop.useEffect(T, tmp12);
  if (cResult[7] === message) {
    class T {
      constructor() {
        tmp = closure_2(closure_3);
        return;
      }
    }
    const _Symbol = Symbol;
    if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
      class T {
        constructor() {
          tmp = closure_2(closure_3);
          return;
        }
      }
      const stringResult = obj4.string(tmp(1126).t.c9BHL9);
      const intl = tmp(1126).intl;
      const stringResult1 = intl.string(tmp(1126).t.AT2KSd);
      const intl2 = tmp(1126).intl;
      const stringResult2 = intl2.string(tmp(1126).t.dK8S0w);
      cResult[10] = stringResult;
      cResult[11] = stringResult1;
      cResult[12] = stringResult2;
      let tmp17 = stringResult2;
      let tmp16 = stringResult1;
      const tmp15 = stringResult;
    } else {
      class T {
        constructor() {
          tmp = closure_2(closure_3);
          return;
        }
      }
      tmp16 = cResult[11];
      tmp17 = cResult[12];
    }
    const _Symbol2 = Symbol;
    if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
      class T {
        constructor() {
          tmp = closure_2(closure_3);
          return;
        }
      }
      const tmp22 = jsx(tmp(5047).TrashIcon, { color: "text-feedback-critical" });
      cResult[13] = tmp22;
      const tmp21 = tmp22;
    } else {
      class T {
        constructor() {
          tmp = closure_2(closure_3);
          return;
        }
      }
    }
    if (cResult[14] === C) {
      class T {
        constructor() {
          tmp = closure_2(closure_3);
          return;
        }
      }
      return tmp23;
    }
    const obj3 = { title: tmp15, disabledTitle: tmp16, description: tmp17, disabled: tmp5, variant: "danger", onPress: C, icon: tmp21 };
    const tmp26 = jsx(reportId(13397), { title: tmp15, disabledTitle: tmp16, description: tmp17, disabled: tmp5, variant: "danger", onPress: C, icon: tmp21 });
    cResult[14] = C;
    cResult[15] = tmp5;
    cResult[16] = tmp26;
    tmp23 = tmp26;
  }
  class C {
    constructor() {
      tmp = closure_2(true);
      obj = closure_1(closure_2[8]);
      obj1 = { report_id: reportId };
      trackWithMetadataResult = obj.trackWithMetadata(AnalyticEvents.IAR_DELETE_MESSAGE_BUTTON_CLICKED, obj1);
      obj3 = closure_1(closure_2[9]);
      deleteMessageResult = obj3.deleteMessage(message.getChannelId(), message.id);
      return;
    }
  }
  cResult[7] = message;
  cResult[8] = reportId;
  cResult[9] = C;
  const tmpResult = message(504);
}) : (function DeleteMessageElement(message) {
  message = message.message;
  const reportId = message.reportId;
  let stateFromStores;
  const tmp = stateFromStores(noop.useState(false), 2);
  dependencyMap = tmp[1];
  const items = [MessageStore];
  const items1 = [message];
  stateFromStores = message(504).useStateFromStores(items, () => null == MessageStore.getMessage(message.getChannelId(), message.id), items1);
  const items2 = [stateFromStores];
  const effect = noop.useEffect(() => {
    closure_2(stateFromStores);
  }, items2);
  const items3 = [message, reportId];
  const callback = noop.useCallback(() => {
    closure_2(true);
    AppAnalyticsUtilsDefault.trackWithMetadata(AnalyticEvents.IAR_DELETE_MESSAGE_BUTTON_CLICKED, { report_id: reportId });
    const obj2 = { report_id: reportId };
    MessageActionCreatorsDefault.deleteMessage(message.getChannelId(), message.id);
  }, items3);
  let obj2 = { title: null, disabledTitle: null, description: null, disabled: null, variant: "danger", onPress: null, icon: null };
  let obj = message(504);
  const intl = message(1126).intl;
  obj2.title = intl.string(message(1126).t.c9BHL9);
  const intl2 = message(1126).intl;
  obj2.disabledTitle = intl2.string(message(1126).t.AT2KSd);
  const intl3 = message(1126).intl;
  obj2.description = intl3.string(message(1126).t.dK8S0w);
  obj2.disabled = tmp[0];
  obj2.onPress = callback;
  obj2.icon = jsx(message(5047).TrashIcon, { color: "text-feedback-critical" });
  return jsx(reportId(13397), { title: null, disabledTitle: null, description: null, disabled: null, variant: "danger", onPress: null, icon: null });
});