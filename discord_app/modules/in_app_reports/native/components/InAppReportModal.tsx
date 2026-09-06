// discord_app/modules/in_app_reports/native/components/InAppReportModal.tsx
import util from "../../../../intl/index.native.tsx";
import Navigator from "../../../../design/components/Navigator/native/Navigator.native.tsx";
import HeaderActionButton2 from "../../../../design/components/Navigator/native/HeaderActionButton.native.tsx";
import FamilyCenterUtils from "../../../parent_tools/FamilyCenterUtils.tsx";
import showReportModal from "../../showReportModal.native.tsx";
import in_app_reports_ReportUtils from "../../ReportUtils.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const IN_APP_REPORTS_NODE = fn(8635).IN_APP_REPORTS_NODE;
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
  const tmp = _slicedToArray(noop.useState(undefined), 2);
  const first = tmp[0];
  closure_9 = tmp[1];
  [c10, c11] = _slicedToArray(noop.useState(undefined), 2);
  const tmp3 = _slicedToArray(noop.useState(undefined), 2);
  [c12, c13] = _slicedToArray(noop.useState([]), 2);
  const tmp4 = _slicedToArray(noop.useState([]), 2);
  [c14, c15] = _slicedToArray(noop.useState([]), 2);
  menu(4992)(() => {
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
          let obj = { value, done: true };
          return obj;
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
              obj = { value, done: true };
              return obj;
            } else {
              closure_1 = tmp2;
              closure_129_0 = closure_0;
              closure_129_1 = undefined;
              closure_129_2 = undefined;
              closure_129_3 = undefined;
              let obj1 = nodeMap(reportSubType[11]);
              c3 = 1;
              c4 = 1;
              obj1 = { value: null, done: false };
              obj1.value = obj1.submitReport(closure_1, closure_0, closure_0);
              return obj1;
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            obj = { value, done: true };
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
      let obj = in_app_reports_ReportUtils;
      const result = obj.trackCloseReportModalAnalytics(nodeMap, c12, onSubmit);
      let obj1 = showReportModal;
      obj1.hideReportModal();
      const item = _undefined2.forEach((fn) => fn());
      if (successNodeId) {
        const result1 = in_app_reports_ReportUtils.showInAppReportsFeedbackModal(nodeMap, onSubmit);
        const tmp3Result = in_app_reports_ReportUtils;
      }
      return {};
    } else {
      obj = { initialStack: null, screens: null };
      obj = { name, params: null };
      obj1 = { node: tmp2, history: [] };
      obj.params = obj1;
      let items = [obj];
      obj.initialStack = items;
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
      const obj2 = {};
      const obj3 = {
        headerRight() {
          const obj = { source: menu(6992), onPress, accessibilityLabel: null };
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
        },
      };
      obj2[name] = obj3;
      obj.screens = obj2;
      return obj;
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
}
