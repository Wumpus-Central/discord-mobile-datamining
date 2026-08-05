// discord_app/modules/in_app_reports/native/components/InAppReportModal.tsx
import HeaderActionButton from "HeaderActionButton";
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import { IN_APP_REPORTS_NODE } from "IN_APP_REPORTS_NODE";
import { jsx } from "jsxProd";

const require = arg1;
let result = require("noop").fileFinishedImporting("modules/in_app_reports/native/components/InAppReportModal.tsx");

export default function InAppReportModal(arg0) {
  let c10;
  let c11;
  let c12;
  let c13;
  let c14;
  let c15;
  let c4;
  let c5;
  let c6;
  let c7;
  let HeaderActionButton;
  let dependencyMap;
  let initialStack;
  let menu;
  let require;
  let screens;
  ({ reportType: require, menu } = arg0);
  ({ afterSubmit: dependencyMap, isEligibleForFeedback: HeaderActionButton } = arg0);
  let callback;
  let React;
  c6 = undefined;
  let jsx;
  let first;
  let closure_9;
  c10 = undefined;
  c11 = undefined;
  c12 = undefined;
  c13 = undefined;
  c14 = undefined;
  c15 = undefined;
  function addOnCloseCallback(arg0) {
    let closure_0 = arg0;
    _undefined3((arg0) => {
      const items = [];
      items[HermesBuiltin.arraySpread(arg0, 0)] = closure_0;
      return items;
    });
  }
  function closeModal() {
    const result = outer1_0(outer1_2[11]).trackCloseReportModalAnalytics(closure_0, c12, first);
    const obj = outer1_0(outer1_2[11]);
    const tmp = outer1_0;
    const tmp2 = outer1_2;
    const tmp3 = closure_0;
    const tmp4 = first;
    outer1_0(outer1_2[12]).hideReportModal();
    const item = _undefined2.forEach((arg0) => arg0());
    if (HeaderActionButton) {
      const result1 = tmp(tmp2[11]).showInAppReportsFeedbackModal(tmp3, tmp4);
      const tmpResult = tmp(tmp2[11]);
    }
  }
  ({ nodes: c4, root_node_id: c5, success_node_id: c6, fail_node_id: c7 } = menu);
  let tmp = callback(React.useState(undefined), 2);
  first = tmp[0];
  closure_9 = tmp[1];
  [c10, c11] = callback(React.useState(undefined), 2);
  let tmp3 = callback(React.useState(undefined), 2);
  [c12, c13] = callback(React.useState([]), 2);
  let tmp4 = callback(React.useState([]), 2);
  [c14, c15] = callback(React.useState([]), 2);
  menu(4711)(() => {
    const orFetchLinkedUsers = callback(table[10]).getOrFetchLinkedUsers();
  });
  let items = [closeModal, first];
  const memo = React.useMemo(() => {
    function _onSubmit() {
      const self = this;
      const tmp = outer2_3((arg0) => {
        let closure_0 = arg0;
        let c3 = 0;
        let c4 = 0;
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
              return { value: "HermesInternal", done: null };
            }
          } else {
            try {
              table = 2;
              if (0 === nodeRef) {
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
                  nodeRef = undefined;
                  let obj1 = lib(outer2_2[11]);
                  nodeRef = 1;
                  table = 1;
                  obj1 = { value: null, done: false };
                  obj1[0] = obj1.submitReport(outer1_1, lib, lib);
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
                  outer1_9(report_id);
                }
                nodeRef = lib[lib.length - 1];
                outer1_11(table[nodeRef.nodeRef].report_type);
                if (outer1_2 != null) {
                  outer1_2();
                }
                table = 3;
                return { value: "HermesInternal", done: null };
              }
            } catch (tmp28) {
              table = tmp;
              throw tmp28;
            }
          }
        })();
      });
      const _onSubmit = tmp;
      const apply = tmp.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    }
    if (null == _undefined[noop]) {
      let obj = outer1_0(outer1_2[11]);
      const result = obj.trackCloseReportModalAnalytics(_onSubmit, c12, onSubmit);
      let obj1 = outer1_0(outer1_2[12]);
      obj1.hideReportModal();
      const item = _undefined2.forEach((arg0) => arg0());
      if (HeaderActionButton) {
        const result1 = outer1_0(outer1_2[11]).showInAppReportsFeedbackModal(_onSubmit, onSubmit);
        const tmp3Result = outer1_0(outer1_2[11]);
      }
      return {};
    } else {
      obj = { initialStack: null, screens: null };
      obj = { name: null, params: null };
      obj[0] = c6;
      obj1 = { node: null, history: null };
      obj1[0] = tmp2;
      obj1[1] = [];
      obj[1] = obj1;
      let items = [obj];
      obj[0] = items;
      _onSubmit = tmp;
      let closure_1 = _onSubmit;
      let closure_2 = c10;
      HeaderActionButton = closure_6;
      _undefined = closure_7;
      noop = onSubmit;
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
        let closure_0 = arg0;
        callback3((arg0) => {
          const items = [];
          items[HermesBuiltin.arraySpread(arg0, 0)] = closure_0;
          return items;
        });
      }
      const obj2 = {};
      const obj3 = { headerRight: null, headerTitle: null, fullscreen: true, render: null };
      obj3[0] = function headerRight() {
        const obj = { source: null, onPress: null, accessibilityLabel: null };
        obj[0] = callback(7837);
        obj[1] = closure_6;
        const intl = _onSubmit(1236).intl;
        obj[2] = intl.string(_onSubmit(1236).t.cpT0Cq);
        return callback2(_onSubmit(5917).HeaderActionButton, obj);
      };
      obj3[1] = function headerTitle() {
        return null;
      };
      obj3[3] = function render(arg0) {
        let closure_0 = arg0;
        const obj = {};
        const merged = Object.assign(arg0);
        obj.nodeMap = closure_0;
        obj.reportType = callback;
        obj.reportSubType = dependencyMap;
        obj.successNodeId = HeaderActionButton;
        obj.failNodeId = _slicedToArray;
        obj.onSubmit = function onSubmit(arg0) {
          const items = [];
          items[HermesBuiltin.arraySpread(history.history, 0)] = arg0;
          return outer1_8(items);
        };
        obj.closeModal = closure_6;
        obj.addOnCloseCallback = callback2;
        obj.reportId = noop;
        obj.onNavigate = onNavigate;
        return callback2(callback(7838), obj);
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
      let intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
      obj[2] = intl.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t["13/7kX"]);
      tmp9 = jsx(require("../../../../design/components/Navigator/native/Navigator.native.tsx") /* NavigationStack */.Navigator, { screens: null, initialRouteStack: null, headerBackTitle: null });
    }
  }
  return tmp9;
};