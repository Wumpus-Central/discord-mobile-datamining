// discord_app/modules/in_app_reports/native/components/InAppReportModal.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import intl2 from "../../../../intl/index.native.tsx";
import Navigator2 from "../../../../design/components/Navigator/native/Navigator.native.tsx";
import showReportModal from "../../showReportModal.native.tsx";
import in_app_reports_ReportUtils from "../../ReportUtils.tsx";
import InAppReportsConstants from "InAppReportsConstants.tsx";
import FamilyCenterUtils from "../../../parent_tools/FamilyCenterUtils.tsx";
import _asyncToGenerator from "../../../../../_runtime/metro/00005__asyncToGenerator.js";
import _slicedToArray_mod from "../../../../../_runtime/metro/00032__slicedToArray.js";
import react_mod from "../../../../../_runtime/00019_react.js";
import size from "../../../../../_runtime/metro/00002__.js";

let body, closure_2, closure_3, dependencyMap, nodeMap, nodeRef;

let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
const IN_APP_REPORTS_NODE = InAppReportsConstants.IN_APP_REPORTS_NODE;
let jsx = Fragment.jsx;
let result = size.fileFinishedImporting("modules/in_app_reports/native/components/InAppReportModal.tsx");

export default function InAppReportModal(arg0) {
  let _undefined;
  let _undefined2;
  let _undefined3;
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
  let closure_9;
  let first;
  let initialStack;
  let menu;
  let name;
  let screens;
  const f138769 = (fn) => fn();
  ({ reportType: require, menu } = arg0);
  ({ afterSubmit: dependencyMap, isEligibleForFeedback: _asyncToGenerator } = arg0);
  _slicedToArray = undefined;
  react = undefined;
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
  function addOnCloseCallback(arg0) {
    let closure_0 = arg0;
    _undefined3((arg0) => {
      const items = [];
      items[HermesBuiltin.arraySpread(items, arg0, 0)] = closure_0;
      return items;
    });
  }
  function closeModal() {
    const obj = in_app_reports_ReportUtils;
    const result = obj.trackCloseReportModalAnalytics(require, c12, first);
    const obj2 = showReportModal;
    obj2.hideReportModal();
    const item = _undefined2.forEach(f138769);
    if (_asyncToGenerator) {
      const tmpResult = in_app_reports_ReportUtils;
      const result1 = tmpResult.showInAppReportsFeedbackModal(require, first);
    }
  }
  ({ nodes: c4, root_node_id: c5, success_node_id: c6, fail_node_id: c7 } = menu);
  [first, closure_9] = react.useState(undefined);
  let tmp3 = _slicedToArray(react.useState(undefined), 2);
  [c10, c11] = tmp3;
  let tmp4 = _slicedToArray(react.useState([]), 2);
  [c12, c13] = tmp4;
  let tmp5 = _slicedToArray(react.useState([]), 2);
  [c14, c15] = tmp5;
  menu(5590)(() => {
    const obj = FamilyCenterUtils;
    const orFetchLinkedUsers = obj.getOrFetchLinkedUsers();
  });
  let items = [closeModal, first];
  const memo = react.useMemo(() => {
    let items;
    let obj5;
    let obj6;
    let tmp;
    let obj = function _onSubmit() {
      obj = _asyncToGenerator(async (arg0) => {
        const length = arg0;
        let c3 = 0;
        let c4 = 0;
        return (async (arg0) => {
          let obj2;
          if (c4 === 2) {
            c4 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp3 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              return { value, done: true };
            } else {
              return { value: "IconComponent", done: null };
            }
          } else {
            try {
              let report_id;
              c4 = 2;
              if (0 === c3) {
                if (arg0 === 1) {
                  c4 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c4 = 3;
                  return { value, done: true };
                } else {
                  closure_2 = tmp4;
                  body = undefined;
                  report_id = undefined;
                  nodeRef = undefined;
                  c3 = 1;
                  c4 = 1;
                  const obj5 = { value: obj2.submitReport(body, length, length), done: false };
                  obj2 = obj(closure_2_2[11]);
                  return obj5;
                }
              } else if (arg0 === 1) {
                c4 = 3;
                throw value;
              } else if (arg0 === 2) {
                c4 = 3;
                return { value, done: true };
              } else {
                body = value;
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
                nodeRef = length[length.length - 1];
                closure_1_11(c4[nodeRef.nodeRef].report_type);
                if (null != closure_2) {
                  closure_1_16(closure_2);
                }
                c4 = 3;
                return { value: "IconComponent", done: null };
              }
            } catch (tmp31) {
              c4 = 3;
              throw tmp31;
            }
          }
        })();
      });
      return obj(...arguments);
    };
    if (null == _undefined[c5]) {
      const tmp3 = require;
      const tmp4 = dependencyMap;
      obj = in_app_reports_ReportUtils;
      const result = obj.trackCloseReportModalAnalytics(obj, c12, first);
      let obj2 = showReportModal;
      obj2.hideReportModal();
      const item = _undefined2.forEach(f138769);
      const tmp12 = closure_3;
      const tmp5 = obj;
      if (tmp12) {
        const tmp3Result = tmp3(tmp4[11]);
        const result1 = tmp3Result.showInAppReportsFeedbackModal(tmp5, first);
      }
      return {};
    } else {
      const obj3 = { initialStack: items, screens: obj6 };
      const obj4 = { name, params: obj5 };
      obj5 = { node: _undefined[c5], history: [] };
      items = [obj4];
      require = tmp;
      let closure_1 = obj;
      dependencyMap = c10;
      closure_3 = name;
      let closure_4 = c7;
      let closure_5 = first;
      let closure_6 = closeModal;
      let closure_7 = addOnCloseCallback;
      function onSubmit(arg0) {
        return nodeMap(...arguments);
      }
      function onNavigate(arg0) {
        let closure_0 = arg0;
        closure_1_13((arg0) => {
          const items = [];
          items[HermesBuiltin.arraySpread(items, arg0, 0)] = closure_0;
          return items;
        });
      }
      obj6 = {};
      const obj7 = {
        headerRight() {
          let intl;
          obj = {
            source: menu(closure_2_2[6]),
            onPress,
            accessibilityLabel: intl.string(obj(closure_2_2[7]).t.cpT0Cq),
          };
          const HeaderActionButton = obj(closure_2_2[5]).HeaderActionButton;
          intl = obj(closure_2_2[7]).intl;
          return closure_2_7(HeaderActionButton, obj);
        },
        headerTitle() {
          return null;
        },
        fullscreen: true,
        render(arg0) {
          let history;
          nodeMap = arg0;
          obj = {
            nodeMap,
            reportType,
            reportSubType,
            successNodeId,
            failNodeId,
            onSubmit(arg0) {
              const items = [];
              items[HermesBuiltin.arraySpread(items, history.history, 0)] = arg0;
              return onSubmit(items);
            },
            closeModal,
            addOnCloseCallback,
            reportId,
            onNavigate,
          };
          const tmp = reportType(reportSubType[8]);
          const merged = Object.assign(arg0);
          return addOnCloseCallback(tmp, obj);
        },
      };
      obj6[name] = obj7;
      return obj3;
    }
  }, items);
  ({ initialStack, screens } = memo);
  let tmp9 = null;
  if (null != initialStack) {
    tmp9 = null;
    if (null != screens) {
      const Navigator = Navigator2.Navigator;
      let intl = intl2.intl;
      tmp9 = (
        <Navigator
          screens={screens}
          initialRouteStack={initialStack}
          headerBackTitle={intl.string(intl2.t["13/7kX"])}
        />
      );
    }
  }
  return tmp9;
}
