// === Module 8917: InAppReportModal ===

// Module 8917 (InAppReportModal)
import util from "util" /* 1115 */;
import Navigator from "Navigator" /* 7247 */;
import HeaderActionButton2 from "HeaderActionButton" /* 7622 */;
import FamilyCenterUtils from "FamilyCenterUtils" /* 7837 */;
import showReportModal from "showReportModal" /* 8914 */;
import in_app_reports_ReportUtils from "in_app_reports/ReportUtils" /* 8916 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const IN_APP_REPORTS_NODE = fn(8918).IN_APP_REPORTS_NODE;
let jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/in_app_reports/native/components/InAppReportModal.tsx");

export default function InAppReportModal(arg0) {
  ({ reportType: require, menu } = arg0);
  ({ afterSubmit: dependencyMap, isEligibleForFeedback: asyncGeneratorStep } = arg0);
  _slicedToArray = undefined;
  noop = undefined;
  c6 = undefined;
  jsx = undefined;
  first = undefined;
  closure_9 = undefined;
  c10 = undefined;
  c11 = undefined;
  c12 = undefined;
  c13 = undefined;
  c14 = undefined;
  c15 = undefined;
  function addOnCloseCallback(HeaderActionButton) {
    closure_0 = HeaderActionButton;
    _undefined3((arg0) => {
      const items = [];
      items[HermesBuiltin.arraySpread(arg0, 0)] = closure_0;
      return items;
    });
  }
  function closeModal() {
    const result = in_app_reports_ReportUtils.trackCloseReportModalAnalytics(closure_1_0, c12, first);
    showReportModal.hideReportModal();
    const item = _undefined2.forEach((fn) => fn());
    if (asyncGeneratorStep) {
      const result1 = in_app_reports_ReportUtils.showInAppReportsFeedbackModal(closure_1_0, first);
      const tmpResult = in_app_reports_ReportUtils;
    }
  }
  ({ nodes: c4, root_node_id: c5, success_node_id: c6, fail_node_id: c7 } = menu);
  [first, closure_9] = noop.useState(undefined);
  [c10, c11] = noop.useState(undefined);
  const tmp3 = _slicedToArray(noop.useState(undefined), 2);
  [c12, c13] = noop.useState([]);
  const tmp4 = _slicedToArray(noop.useState([]), 2);
  [c14, c15] = noop.useState([]);
  menu(5204)(() => {
    const orFetchLinkedUsers = FamilyCenterUtils.getOrFetchLinkedUsers();
  });
  let items = [closeModal, first];
  const memo = noop.useMemo(() => {
    let nodeMap = async function _onSubmit(arg0) {
      if (c4 === 2) {
        c4 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj3 = { value, done: true };
          return obj3;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c4 = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              closure_1 = tmp2;
              closure_129_0 = closure_0;
              closure_129_1 = undefined;
              closure_129_2 = undefined;
              closure_129_3 = undefined;
              c3 = 1;
              c4 = 1;
              const obj5 = { value: nodeMap(reportSubType[11]).submitReport(closure_1, closure_0, closure_0), done: false };
              return obj5;
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            closure_129_1 = value;
            let report_id;
            if (closure_129_1 != null) {
              const body = closure_129_1.body;
              if (body != null) {
                report_id = body.report_id;
              }
            }
            closure_129_2 = report_id;
            if (null != closure_129_2) {
              onNavigate(closure_129_2);
            }
            closure_129_3 = closure_129_0[closure_129_0.length - 1];
            closure_1_11(c4[closure_129_3.nodeRef].report_type);
            if (tmp5 != null) {
              tmp5();
            }
            c4 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp28) {
          c4 = tmp;
          throw tmp28;
        }
      }
    };
    if (null == _undefined[reportId]) {
      const result = in_app_reports_ReportUtils.trackCloseReportModalAnalytics(nodeMap, c12, onSubmit);
      const tmp5 = nodeMap;
      const tmp7 = onSubmit;
      showReportModal.hideReportModal();
      const item = _undefined2.forEach((fn) => fn());
      if (successNodeId) {
        const result1 = in_app_reports_ReportUtils.showInAppReportsFeedbackModal(tmp5, tmp7);
        const tmp3Result = in_app_reports_ReportUtils;
      }
      return {};
    } else {
      let obj3 = { initialStack: null, screens: null };
      let obj4 = { name, params: null };
      let obj5 = { node: tmp2, history: [] };
      obj4.params = obj5;
      let items = [obj4];
      obj3.initialStack = items;
      nodeMap = tmp;
      const reportType = nodeMap;
      const reportSubType = c10;
      successNodeId = closure_6;
      _undefined = addOnCloseCallback;
      reportId = onSubmit;
      closure_6 = closeModal;
      onSubmit = function onSubmit(arg0) {
        const self = this;
        const apply = closure_0.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      };
      function onNavigate(arg0) {
        closure_0 = arg0;
        closure_1_13((arg0) => {
          const items = [];
          items[HermesBuiltin.arraySpread(arg0, 0)] = closure_0;
          return items;
        });
      }
      const obj6 = {};
      const obj7 = {
        headerRight() {
            const obj = { source: menu(7239), onPress, accessibilityLabel: null };
            const intl = util.intl;
            obj.accessibilityLabel = intl.string(util.t.cpT0Cq);
            return addOnCloseCallback(HeaderActionButton2.HeaderActionButton, obj);
          },
        headerTitle() {
            return null;
          },
        fullscreen: true,
        render(arg0) {
            nodeMap = arg0;
            const obj = {};
            const merged = Object.assign(arg0);
            obj.nodeMap = nodeMap;
            obj.reportType = reportType;
            obj.reportSubType = reportSubType;
            obj.successNodeId = successNodeId;
            obj.failNodeId = failNodeId;
            obj.onSubmit = function onSubmit(arg0) {
              const items = [];
              items[HermesBuiltin.arraySpread(history.history, 0)] = arg0;
              return onSubmit(items);
            };
            obj.closeModal = closeModal;
            obj.addOnCloseCallback = addOnCloseCallback;
            obj.reportId = reportId;
            obj.onNavigate = onNavigate;
            return addOnCloseCallback(reportType(reportSubType[8]), obj);
          }
      };
      obj6[name] = obj7;
      obj3.screens = obj6;
      return obj3;
    }
  }, items);
  ({ initialStack, screens } = memo);
  let tmp9 = null;
  if (null != initialStack) {
    tmp9 = null;
    if (null != screens) {
      let obj = { screens, initialRouteStack: initialStack, headerBackTitle: null };
      let intl = util.intl;
      obj.headerBackTitle = intl.string(util.t["13/7kX"]);
      tmp9 = jsx(Navigator.Navigator, { screens, initialRouteStack: initialStack, headerBackTitle: null });
    }
  }
  return tmp9;
};