// discord_app/modules/conjure/debug/native/ConjureDebugAnalytics.tsx
import util from "../../../../intl/index.native.tsx";
import _modDef3868 from "../../intl/ConjureUntranslated.messages.js";
import ConjureDebugLabels from "../ConjureDebugLabels.tsx";
import ConjureDebugFormat from "../ConjureDebugFormat.tsx";
import ConjureDebugPrimitives from "ConjureDebugPrimitives.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const jsxProd = fn(21);
({ jsx: c3, Fragment: closure_4, jsxs: hasOwnProperty } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/debug/native/ConjureDebugAnalytics.tsx");

export function ConjureDebugAgentAnalyticsRows(analytics) {
  analytics = analytics.analytics;
  if ("ok" !== analytics.status) {
    const obj2 = { label: null, value: null, hint: null };
    const intl4 = util.intl;
    obj2.label = intl4.string(_modDef3868.SXP7pD);
    const intl5 = util.intl;
    obj2.value = intl5.string(_modDef3868.E5hKVi);
    obj2.hint = ConjureDebugLabels.analyticsUnavailableReason(analytics);
    return React3(ConjureDebugPrimitives.DebugStatRow, obj2);
  } else {
    const objects = analytics.objects;
    let found;
    if (objects != null) {
      found = objects.find((role) => "agent" === role.role);
    }
    if (null == found) {
      const obj3 = { label: null, value: "\u2014", hint: null };
      const intl2 = util.intl;
      obj3.label = intl2.string(_modDef3868.SXP7pD);
      const intl3 = util.intl;
      obj3.hint = intl3.string(_modDef3868.AGvoMJ);
      return React3(ConjureDebugPrimitives.DebugStatRow, obj3);
    } else {
      const analyticsMemoryValueResult = ConjureDebugLabels.analyticsMemoryValue(found);
      const obj4 = { label: null, value: null };
      const intl6 = util.intl;
      obj4.label = intl6.string(_modDef3868["H/X+FI"]);
      obj4.value = ConjureDebugFormat.formatMs(found.cpu_ms);
      const items = [React3(ConjureDebugPrimitives.DebugStatRow, obj4)];
      let tmp17Result = null;
      if (null != analyticsMemoryValueResult) {
        const obj = { label: null, value: null };
        const intl = util.intl;
        obj.label = intl.string(_modDef3868.lmFmMO);
        obj.value = analyticsMemoryValueResult;
        tmp17Result = React3(ConjureDebugPrimitives.DebugStatRow, obj);
      }
      const obj7 = { children: null };
      items[1] = tmp17Result;
      obj7.children = items;
      return hasOwnProperty(React4, obj7);
    }
  }
}
export function ConjureDebugWorkerAnalyticsSection(analytics) {
  analytics = analytics.analytics;
  let intl = util.intl;
  const stringResult = intl.string(_modDef3868.LoZwWn);
  if ("ok" !== analytics.status) {
    let obj2 = { title: stringResult, children: null };
    let obj3 = { children: ConjureDebugLabels.analyticsUnavailableReason(analytics) };
    obj2.children = React3(ConjureDebugPrimitives.DebugNote, obj3);
    return React3(ConjureDebugPrimitives.DebugSection, obj2);
  } else {
    let items = analytics.objects;
    if (items == null) {
      items = [];
    }
    const mapped = items.map((object) => {
      const obj = { object, label: ConjureDebugLabels.analyticsRoleLabel(object.role) };
      return obj;
    });
    const found = mapped.filter((label) => null != label.label);
    let obj = { title: stringResult, children: null };
    if (0 === found.length) {
      let obj4 = { children: null };
      const intl2 = util.intl;
      obj4.children = intl2.string(_modDef3868.AGvoMJ);
      let mapped1 = React3(ConjureDebugPrimitives.DebugNote, obj4);
    } else {
      mapped1 = found.map((label) => {
        const object = label.object;
        const obj = { label: label.label, value: null, hint: null };
        const intl = util.intl;
        const obj2 = { cpu: ConjureDebugFormat.formatMs(object.cpu_ms) };
        obj.value = intl.formatToPlainString(_modDef3868["w/2voO"], obj2);
        obj.hint = ConjureDebugLabels.analyticsMemoryValue(object);
        return closure_1_3(ConjureDebugPrimitives.DebugStatRow, obj, object.role);
      });
    }
    obj.children = mapped1;
    return React3(ConjureDebugPrimitives.DebugSection, obj);
  }
}
