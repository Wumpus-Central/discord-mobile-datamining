// discord_app/modules/vibegrations/native/VibegrationsDebugAnalytics.tsx
import util from "../../../intl/index.native.tsx";
import _modDef3591 from "../intl/VibegrationsUntranslated.messages.js";
import VibegrationsDebugFormat from "../lib/VibegrationsDebugFormat.tsx";
import VibegrationsDebugLabels from "../lib/VibegrationsDebugLabels.tsx";
import VibegrationsDebugPrimitives from "VibegrationsDebugPrimitives.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const jsxProd = fn(21);
({ jsx: c3, Fragment: closure_4, jsxs: hasOwnProperty } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsDebugAnalytics.tsx");

export const VibegrationsDebugAgentAnalyticsRows = function VibegrationsDebugAgentAnalyticsRows(analytics) {
  analytics = analytics.analytics;
  if ("ok" !== analytics.status) {
    const obj2 = { label: null, value: null, hint: null };
    const intl4 = util.intl;
    obj2.label = intl4.string(_modDef3591.H6PMwW);
    const intl5 = util.intl;
    obj2.value = intl5.string(_modDef3591.TLOZ8J);
    obj2.hint = VibegrationsDebugLabels.analyticsUnavailableReason(analytics);
    return React3(VibegrationsDebugPrimitives.DebugStatRow, obj2);
  } else {
    const objects = analytics.objects;
    let found;
    if (objects != null) {
      found = objects.find((role) => "agent" === role.role);
    }
    if (null == found) {
      const obj3 = { label: null, value: "\u2014", hint: null };
      const intl2 = util.intl;
      obj3.label = intl2.string(_modDef3591.H6PMwW);
      const intl3 = util.intl;
      obj3.hint = intl3.string(_modDef3591.uAzxdh);
      return React3(VibegrationsDebugPrimitives.DebugStatRow, obj3);
    } else {
      const analyticsMemoryValueResult = VibegrationsDebugLabels.analyticsMemoryValue(found);
      const obj4 = { label: null, value: null };
      const intl6 = util.intl;
      obj4.label = intl6.string(_modDef3591.awAqRi);
      obj4.value = VibegrationsDebugFormat.formatMs(found.cpu_ms);
      const items = [React3(VibegrationsDebugPrimitives.DebugStatRow, obj4)];
      let tmp17Result = null;
      if (null != analyticsMemoryValueResult) {
        const obj = { label: null, value: null };
        const intl = util.intl;
        obj.label = intl.string(_modDef3591.WdGviA);
        obj.value = analyticsMemoryValueResult;
        tmp17Result = React3(VibegrationsDebugPrimitives.DebugStatRow, obj);
      }
      const obj7 = { children: null };
      items[1] = tmp17Result;
      obj7.children = items;
      return hasOwnProperty(React4, obj7);
    }
  }
};
export const VibegrationsDebugWorkerAnalyticsSection = function VibegrationsDebugWorkerAnalyticsSection(analytics) {
  analytics = analytics.analytics;
  let intl = util.intl;
  const stringResult = intl.string(_modDef3591.Pgvj3h);
  if ("ok" !== analytics.status) {
    let obj2 = { title: stringResult, children: null };
    let obj3 = { children: VibegrationsDebugLabels.analyticsUnavailableReason(analytics) };
    obj2.children = React3(VibegrationsDebugPrimitives.DebugNote, obj3);
    return React3(VibegrationsDebugPrimitives.DebugSection, obj2);
  } else {
    let items = analytics.objects;
    if (items == null) {
      items = [];
    }
    const mapped = items.map((object) => {
      const obj = { object, label: VibegrationsDebugLabels.analyticsRoleLabel(object.role) };
      return obj;
    });
    const found = mapped.filter((label) => null != label.label);
    let obj = { title: stringResult, children: null };
    if (0 === found.length) {
      let obj4 = { children: null };
      const intl2 = util.intl;
      obj4.children = intl2.string(_modDef3591.uAzxdh);
      let mapped1 = React3(VibegrationsDebugPrimitives.DebugNote, obj4);
    } else {
      mapped1 = found.map((label) => {
        const object = label.object;
        const obj = { label: label.label, value: null, hint: null };
        const intl = util.intl;
        const obj2 = { cpu: VibegrationsDebugFormat.formatMs(object.cpu_ms) };
        obj.value = intl.formatToPlainString(_modDef3591.AnRynJ, obj2);
        obj.hint = VibegrationsDebugLabels.analyticsMemoryValue(object);
        return closure_1_3(VibegrationsDebugPrimitives.DebugStatRow, obj, object.role);
      });
    }
    obj.children = mapped1;
    return React3(VibegrationsDebugPrimitives.DebugSection, obj);
  }
};
