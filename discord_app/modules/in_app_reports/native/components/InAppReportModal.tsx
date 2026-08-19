// discord_app/modules/in_app_reports/native/components/InAppReportModal.tsx
import getSystemLocale from "../../../../intl/index.native.tsx";
import NavigationStack from "../../../../design/components/Navigator/native/Navigator.native.tsx";
import _showReportModal from "../../showReportModal.native.tsx";
import getReportMenu from "../../ReportUtils.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__slicedToArray.js";
import noop from "../../../../../_runtime/00019_noop.js";
import { IN_APP_REPORTS_NODE } from "InAppReportsConstants.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";

require = fn;
let result = require("obj132").fileFinishedImporting("modules/in_app_reports/native/components/InAppReportModal.tsx");

export default function InAppReportModal(arg0) {
  ({ reportType: require, menu } = arg0);
  ({ afterSubmit: dependencyMap, isEligibleForFeedback: closure_3 } = arg0);
  let callback;
  let React;
  c6 = undefined;
  jsx = undefined;
  c10 = undefined;
  c11 = undefined;
  c12 = undefined;
  c13 = undefined;
  c14 = undefined;
  c15 = undefined;
  function addOnCloseCallback(arg0) {
    closure_0 = arg0;
    _undefined3((arg0) => {
      const items = [];
      items[HermesBuiltin.arraySpread(arg0, 0)] = closure_0;
      return items;
    });
  }
  function closeModal() {
    const result = getReportMenu.trackCloseReportModalAnalytics(closure_0, c12, first);
    _showReportModal.hideReportModal();
    const item = _undefined2.forEach((item, index) => item());
    if (closure_3) {
      const result1 = getReportMenu.showInAppReportsFeedbackModal(closure_0, first);
      const tmpResult = getReportMenu;
    }
  }
  ({ nodes: c4, root_node_id: c5, success_node_id: c6, fail_node_id: c7 } = menu);
  let tmp = callback(React.useState(undefined), 2);
  const first = tmp[0];
  closure_9 = tmp[1];
  [c10, c11] = callback(React.useState(undefined), 2);
  const tmp3 = callback(React.useState(undefined), 2);
  [c12, c13] = callback(React.useState([]), 2);
  const tmp4 = callback(React.useState([]), 2);
  [c14, c15] = callback(React.useState([]), 2);
  menu(4761)(() => {
    const orFetchLinkedUsers = callback(table[10]).getOrFetchLinkedUsers();
  });
  let items = [closeModal, first];
  const memo = React.useMemo(() => {
    function _onSubmit() {
      const self = this;
      const tmp = closure_2_3((arg0) => {
        closure_0 = arg0;
        closure_3 = 0;
        c4 = 0;
        return (function*(arg0) {
          if (table === 2) {
            table = 3;
            HermesBuiltin.throwTypeError();
          } else if (tmp4 === 3) {
            if (arg0 === 1) {
              throw arg1;
            } else if (arg0 === 2) {
              let obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              return { value: "HermesInternal", done: "HermesInternal" };
            }
          } else {
            try {
              table = 2;
              if (0 === c3) {
                if (arg0 === 1) {
                  table = 3;
                  throw arg1;
                } else if (arg0 === 2) {
                  table = 3;
                  obj = { value: null, done: true };
                  obj[0] = arg1;
                  return obj;
                } else {
                  let report_id = tmp5;
                  let body = tmp2;
                  body = undefined;
                  report_id = undefined;
                  c3 = undefined;
                  obj1 = lib(closure_2_2[11]);
                  c3 = 1;
                  table = 1;
                  obj1 = { value: null, done: false };
                  obj1[0] = obj1.submitReport(closure_1_1, lib, lib);
                  return obj1;
                }
              } else if (arg0 === 1) {
                table = 3;
                throw arg1;
              } else if (arg0 === 2) {
                table = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                body = arg1;
                report_id = undefined;
                if (body != null) {
                  body = body.body;
                  if (body != null) {
                    report_id = body.report_id;
                  }
                }
                if (null != report_id) {
                  closure_1_9(report_id);
                }
                const nodeRef = lib[lib.length - 1];
                closure_1_11(table[nodeRef.nodeRef].report_type);
                if (closure_1_2 != null) {
                  closure_1_2();
                }
                table = 3;
                return { value: "HermesInternal", done: "HermesInternal" };
              }
            } catch (tmp28) {
              table = tmp;
              throw tmp28;
            }
          }
        })();
      });
      closure_0 = tmp;
      const apply = tmp.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    }
    if (null == _undefined[closure_5]) {
      let obj = getReportMenu;
      const result = obj.trackCloseReportModalAnalytics(_onSubmit, c12, onSubmit);
      obj1 = _showReportModal;
      obj1.hideReportModal();
      const item = _undefined2.forEach((item, index) => item());
      if (closure_3) {
        const result1 = getReportMenu.showInAppReportsFeedbackModal(_onSubmit, onSubmit);
        const tmp3Result = getReportMenu;
      }
      return {};
    } else {
      obj = { name: null, params: null };
      obj[0] = c6;
      obj1 = { node: null, history: null };
      obj1[0] = tmp2;
      obj1[1] = [];
      obj[1] = obj1;
      let items = [obj];
      obj[0] = items;
      _onSubmit = tmp;
      closure_1 = _onSubmit;
      closure_2 = c10;
      closure_3 = closure_6;
      _undefined = closure_7;
      closure_5 = onSubmit;
      closure_6 = closeModal;
      closure_7 = addOnCloseCallback;
      onSubmit = function onSubmit(arg0) {
        const self = this;
        const apply = _onSubmit.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      };
      function onNavigate(arg0) {
        closure_0 = arg0;
        callback3((arg0) => {
          const items = [];
          items[HermesBuiltin.arraySpread(arg0, 0)] = closure_0;
          return items;
        });
      }
      const obj2 = {};
      const obj3 = { headerRight: null, headerTitle: null, fullscreen: true, render: null };
      obj3[0] = function headerRight() {
        const obj = { source: callback(8143), onPress: closure_6, accessibilityLabel: null };
        const intl = _onSubmit(1236).intl;
        obj[2] = intl.string(_onSubmit(1236).t.cpT0Cq);
        return callback2(_onSubmit(5432).HeaderActionButton, obj);
      };
      obj3[1] = function headerTitle() {
        return null;
      };
      obj3[3] = function render(arg0) {
        closure_0 = arg0;
        const obj = {};
        const merged = Object.assign(arg0);
        obj.nodeMap = closure_0;
        obj.reportType = callback;
        obj.reportSubType = dependencyMap;
        obj.successNodeId = closure_3;
        obj.failNodeId = closure_4;
        obj.onSubmit = function onSubmit(arg0) {
          const items = [];
          items[HermesBuiltin.arraySpread(history.history, 0)] = arg0;
          return onSubmit(items);
        };
        obj.closeModal = closure_6;
        obj.addOnCloseCallback = callback2;
        obj.reportId = closure_5;
        obj.onNavigate = onNavigate;
        return callback2(callback(8144), obj);
      };
      obj2[c6] = obj3;
      obj[1] = obj2;
      return obj;
    }
  }, items);
  ({ initialStack, screens } = memo);
  let tmp9 = null;
  if (null != initialStack) {
    tmp9 = null;
    if (null != screens) {
      let obj = { screens: null, initialRouteStack: null, headerBackTitle: null };
      obj[0] = screens;
      obj[1] = initialStack;
      let intl = getSystemLocale.intl;
      obj[2] = intl.string(getSystemLocale.t["13/7kX"]);
      tmp9 = jsx(NavigationStack.Navigator, { screens: null, initialRouteStack: null, headerBackTitle: null });
    }
  }
  return tmp9;
};