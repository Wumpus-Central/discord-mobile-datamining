// discord_app/modules/in_app_reports/native/components/InAppReportsDeleteMessageElement.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import Constants from "../../../../Constants.tsx";
import AppAnalyticsUtilsDefault from "../../../app_analytics/AppAnalyticsUtils.tsx";
import MessageActionCreatorsDefault from "../../../../actions/MessageActionCreators.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../../_runtime/00019_react.js";
import MessageStore from "../../../../stores/MessageStore.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let dependencyMap, message;

const AnalyticEvents = Constants.AnalyticEvents;
const jsx = Fragment.jsx;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (message) => {
      let first;
      let stateFromStores;
      let tmp11;
      let tmp12;
      let tmp5;
      let tmp8;
      let tmp9;
      let obj = message(576);
      const cResult = obj.c(17);
      message = message.message;
      const reportId = message.reportId;
      [tmp5, dependencyMap] = stateFromStores(react.useState(false), 2);
      stateFromStores(react.useState(false), 2);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [MessageStore];
        cResult[0] = items;
        first = items;
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
        tmp9 = items1;
        tmp8 = fn;
      } else {
        tmp8 = cResult[2];
        tmp9 = cResult[3];
      }
      const tmpResult = message(504);
      stateFromStores = tmpResult.useStateFromStores(first, tmp8, tmp9);
      if (cResult[4] !== stateFromStores) {
        const fn2 = function v() {
          dependencyMap(stateFromStores);
        };
        const items2 = [stateFromStores];
        cResult[4] = stateFromStores;
        cResult[5] = fn2;
        cResult[6] = items2;
        tmp12 = items2;
        tmp11 = fn2;
      } else {
        tmp11 = cResult[5];
        tmp12 = cResult[6];
      }
      const effect = react.useEffect(tmp11, tmp12);
      if (cResult[7] === message) {
        let tmp14;
        let tmp17;
        let tmp16;
        let tmp15;
        let tmp21;
        if (cResult[8] === reportId) {
          tmp14 = cResult[9];
        }
        const _Symbol = Symbol;
        if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = tmp(1126).intl;
          const stringResult = intl.string(message(1126).t.c9BHL9);
          const intl2 = tmp(1126).intl;
          const stringResult1 = intl2.string(message(1126).t.AT2KSd);
          const intl3 = tmp(1126).intl;
          const stringResult2 = intl3.string(message(1126).t.dK8S0w);
          cResult[10] = stringResult;
          cResult[11] = stringResult1;
          cResult[12] = stringResult2;
          tmp17 = stringResult2;
          tmp16 = stringResult1;
          tmp15 = stringResult;
        } else {
          tmp15 = cResult[10];
          tmp16 = cResult[11];
          tmp17 = cResult[12];
        }
        const _Symbol2 = Symbol;
        if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp23 = jsx(message(4847).TrashIcon, { color: "text-feedback-critical" });
          cResult[13] = tmp23;
          tmp21 = tmp23;
        } else {
          tmp21 = cResult[13];
        }
        if (cResult[14] === tmp14) {
          let tmp24;
          if (cResult[15] === tmp5) {
            tmp24 = cResult[16];
          }
          return tmp24;
        }
        const tmp27 = jsx(reportId(12713), {
          title: tmp15,
          disabledTitle: tmp16,
          description: tmp17,
          disabled: tmp5,
          variant: "danger",
          onPress: tmp14,
          icon: tmp21,
        });
        cResult[14] = tmp14;
        cResult[15] = tmp5;
        cResult[16] = tmp27;
        tmp24 = tmp27;
      }
      class M {
        constructor() {
          dependencyMap(true);
          const obj = AppAnalyticsUtilsDefault;
          const obj2 = { report_id: reportId };
          obj.trackWithMetadata(AnalyticEvents.IAR_DELETE_MESSAGE_BUTTON_CLICKED, obj2);
          const obj3 = MessageActionCreatorsDefault;
          obj3.deleteMessage(message.getChannelId(), message.id);
        }
      }
      cResult[7] = message;
      cResult[8] = reportId;
      cResult[9] = M;
      tmp14 = M;
    }
  : (message) => {
      let closure_2;
      message = message.message;
      const reportId = message.reportId;
      let stateFromStores;
      const tmp = stateFromStores(react.useState(false), 2);
      dependencyMap = tmp[1];
      const first = tmp[0];
      let obj = message(504);
      const items = [MessageStore];
      const items1 = [message];
      stateFromStores = obj.useStateFromStores(
        items,
        () => null == MessageStore.getMessage(message.getChannelId(), message.id),
        items1,
      );
      const items2 = [stateFromStores];
      const effect = react.useEffect(() => {
        closure_2(stateFromStores);
      }, items2);
      const items3 = [message, reportId];
      const callback = react.useCallback(() => {
        closure_2(true);
        const obj = AppAnalyticsUtilsDefault;
        const obj2 = { report_id: reportId };
        obj.trackWithMetadata(AnalyticEvents.IAR_DELETE_MESSAGE_BUTTON_CLICKED, obj2);
        const obj3 = MessageActionCreatorsDefault;
        obj3.deleteMessage(message.getChannelId(), message.id);
      }, items3);
      reportId(12713);
      const intl = message(1126).intl;
      const intl2 = message(1126).intl;
      const intl3 = message(1126).intl;
      return (
        <tmp6
          title={intl.string(message(1126).t.c9BHL9)}
          disabledTitle={intl2.string(message(1126).t.AT2KSd)}
          description={intl3.string(message(1126).t.dK8S0w)}
          disabled={first}
          variant="danger"
          onPress={callback}
          icon={null}
        />
      );
    };
const result = size.fileFinishedImporting(
  "modules/in_app_reports/native/components/InAppReportsDeleteMessageElement.tsx",
);

export default tmp2;
