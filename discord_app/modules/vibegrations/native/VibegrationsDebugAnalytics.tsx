// === Module 16751: VibegrationsDebugAnalytics ===

// Module 16751 (VibegrationsDebugAnalytics)
import c from "c" /* 576 */;
import util from "util" /* 1126 */;
import _modDef3723 from "module_3723" /* 3723 */;
import VibegrationsDebugFormat from "VibegrationsDebugFormat" /* 16737 */;
import VibegrationsDebugLabels from "VibegrationsDebugLabels" /* 16738 */;
import VibegrationsDebugPrimitives from "VibegrationsDebugPrimitives" /* 16740 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const jsxProd = fn(21);
({ jsx: c3, Fragment: closure_4, jsxs: hasOwnProperty } = jsxProd);
fn(558);
const ReactCompilerGating = fn(558);
const tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((analytics) => {
  const cResult = c.c(24);
  analytics = analytics.analytics;
  if ("ok" !== analytics.status) {
    const _Symbol5 = Symbol;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const intl5 = util.intl;
      const stringResult = intl5.string(_modDef3723.H6PMwW);
      const intl6 = util.intl;
      const stringResult1 = intl6.string(_modDef3723.TLOZ8J);
      cResult[0] = stringResult;
      cResult[1] = stringResult1;
      tmp43 = stringResult;
      tmp44 = stringResult1;
    } else {
      [tmp43, tmp44] = cResult;
    }
    if (cResult[2] !== analytics) {
      const result = VibegrationsDebugLabels.analyticsUnavailableReason(analytics);
      cResult[2] = analytics;
      cResult[3] = result;
      let tmp48 = result;
      const tmpResult = VibegrationsDebugLabels;
    } else {
      tmp48 = cResult[3];
    }
    if (cResult[4] !== tmp48) {
      const obj2 = { label: tmp43, value: tmp44, hint: tmp48 };
      const tmp52 = React3(VibegrationsDebugPrimitives.DebugStatRow, obj2);
      cResult[4] = tmp48;
      cResult[5] = tmp52;
      let tmp50 = tmp52;
    } else {
      tmp50 = cResult[5];
    }
    return tmp50;
  } else if (cResult[6] !== analytics.objects) {
    const _Symbol = Symbol;
    const objects = analytics.objects;
    let found;
    if (objects != null) {
      found = objects.find((role) => "agent" === role.role);
    }
    if (null == found) {
      const _Symbol6 = Symbol;
      if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = util.intl;
        const stringResult2 = intl.string(_modDef3723.H6PMwW);
        cResult[12] = stringResult2;
        let tmp13 = stringResult2;
      } else {
        tmp13 = cResult[12];
      }
      const _Symbol2 = Symbol;
      if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
        const obj3 = { label: tmp13, value: "\u2014", hint: null };
        const intl2 = util.intl;
        obj3.hint = intl2.string(_modDef3723.uAzxdh);
        const tmp19 = React3(VibegrationsDebugPrimitives.DebugStatRow, obj3);
        cResult[13] = tmp19;
        let tmp16 = tmp19;
      } else {
        tmp16 = cResult[13];
      }
      cResult[6] = analytics.objects;
      cResult[7] = undefined;
      cResult[8] = undefined;
      cResult[9] = undefined;
      cResult[10] = undefined;
      cResult[11] = tmp16;
    }
    const forResult = Symbol.for("react.early_return_sentinel");
    const tmpResult3 = VibegrationsDebugLabels;
    const _Symbol3 = Symbol;
    if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
      const intl3 = util.intl;
      const stringResult3 = intl3.string(_modDef3723.awAqRi);
      cResult[14] = stringResult3;
    }
    const analyticsMemoryValueResult = VibegrationsDebugLabels.analyticsMemoryValue(found);
    found = found.cpu_ms;
    VibegrationsDebugFormat.formatMs(found);
    const DebugStatRow = VibegrationsDebugPrimitives.DebugStatRow;
    const tmpResult4 = VibegrationsDebugFormat;
  } else {
    const _Symbol4 = Symbol;
    if (cResult[11] !== Symbol.for("react.early_return_sentinel")) {
      return tmp8;
    } else {
      if (cResult[15] === tmp4) {
        if (cResult[16] === tmp6) {
          if (cResult[17] === tmp7) {
            let tmp30 = cResult[18];
          }
          if (cResult[19] !== tmp5) {
            let tmp34 = null;
            if (null != tmp5) {
              const obj4 = { label: null, value: null };
              const intl4 = util.intl;
              obj4.label = intl4.string(_modDef3723.WdGviA);
              obj4.value = tmp5;
              tmp34 = React3(VibegrationsDebugPrimitives.DebugStatRow, obj4);
            }
            cResult[19] = tmp5;
            cResult[20] = tmp34;
            let tmp33 = tmp34;
          } else {
            tmp33 = cResult[20];
          }
          if (cResult[21] === tmp30) {
          }
          const obj5 = { children: null };
          const items = [tmp30, tmp33];
          obj5.children = items;
          const tmp40 = hasOwnProperty(React4, obj5);
          cResult[21] = tmp30;
          cResult[22] = tmp33;
          cResult[23] = tmp40;
        }
      }
      const obj6 = { label: tmp6, value: tmp7 };
      const tmp32 = React3(tmp4, obj6);
      cResult[15] = tmp4;
      cResult[16] = tmp6;
      cResult[17] = tmp7;
      cResult[18] = tmp32;
      tmp30 = tmp32;
    }
  }
}) : ((analytics) => {
  analytics = analytics.analytics;
  if ("ok" !== analytics.status) {
    const obj2 = { label: null, value: null, hint: null };
    const intl4 = util.intl;
    obj2.label = intl4.string(_modDef3723.H6PMwW);
    const intl5 = util.intl;
    obj2.value = intl5.string(_modDef3723.TLOZ8J);
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
      obj3.label = intl2.string(_modDef3723.H6PMwW);
      const intl3 = util.intl;
      obj3.hint = intl3.string(_modDef3723.uAzxdh);
      return React3(VibegrationsDebugPrimitives.DebugStatRow, obj3);
    } else {
      const analyticsMemoryValueResult = VibegrationsDebugLabels.analyticsMemoryValue(found);
      const obj4 = { label: null, value: null };
      const intl6 = util.intl;
      obj4.label = intl6.string(_modDef3723.awAqRi);
      obj4.value = VibegrationsDebugFormat.formatMs(found.cpu_ms);
      const items = [React3(VibegrationsDebugPrimitives.DebugStatRow, obj4), ];
      let tmp17Result = null;
      if (null != analyticsMemoryValueResult) {
        const obj = { label: null, value: null };
        const intl = util.intl;
        obj.label = intl.string(_modDef3723.WdGviA);
        obj.value = analyticsMemoryValueResult;
        tmp17Result = React3(VibegrationsDebugPrimitives.DebugStatRow, obj);
      }
      const obj7 = { children: null };
      items[1] = tmp17Result;
      obj7.children = items;
      return hasOwnProperty(React4, obj7);
    }
  }
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsDebugAnalytics.tsx");

export const VibegrationsDebugAgentAnalyticsRows = tmp4;
export const VibegrationsDebugWorkerAnalyticsSection = ReactCompilerGating.isReactCompilerEnabled() ? ((analytics) => {
  const cResult = c.c(15);
  analytics = analytics.analytics;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let intl = util.intl;
    const stringResult = intl.string(_modDef3723.Pgvj3h);
    cResult[0] = stringResult;
    let first = stringResult;
  } else {
    first = cResult[0];
  }
  if ("ok" !== analytics.status) {
    if (cResult[1] !== analytics) {
      const result = VibegrationsDebugLabels.analyticsUnavailableReason(analytics);
      cResult[1] = analytics;
      cResult[2] = result;
      let tmp22 = result;
      const tmpResult = VibegrationsDebugLabels;
    } else {
      tmp22 = cResult[2];
    }
    if (cResult[3] !== tmp22) {
      let obj2 = { title: first, children: null };
      let obj3 = { children: tmp22 };
      obj2.children = React3(VibegrationsDebugPrimitives.DebugNote, obj3);
      const tmp26 = React3(VibegrationsDebugPrimitives.DebugSection, obj2);
      cResult[3] = tmp22;
      cResult[4] = tmp26;
      let tmp24 = tmp26;
    } else {
      tmp24 = cResult[4];
    }
    return tmp24;
  } else if (cResult[5] !== analytics.objects) {
    const _Symbol = Symbol;
    if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
      class S {
        constructor(arg0) {
          obj = { object: analytics, label: null };
          obj2 = closure_1_0(closure_1_2[6]);
          obj.label = obj2.analyticsRoleLabel(analytics.role);
          return obj;
        }
      }
      cResult[9] = S;
    } else {
      class S {
        constructor(arg0) {
          obj = { object: analytics, label: null };
          obj2 = closure_1_0(closure_1_2[6]);
          obj.label = obj2.analyticsRoleLabel(analytics.role);
          return obj;
        }
      }
    }
    const _Symbol2 = Symbol;
    if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
      class S {
        constructor(arg0) {
          obj = { object: analytics, label: null };
          obj2 = closure_1_0(closure_1_2[6]);
          obj.label = obj2.analyticsRoleLabel(analytics.role);
          return obj;
        }
      }
      cResult[10] = tmp12;
    } else {
      class S {
        constructor(arg0) {
          obj = { object: analytics, label: null };
          obj2 = closure_1_0(closure_1_2[6]);
          obj.label = obj2.analyticsRoleLabel(analytics.role);
          return obj;
        }
      }
    }
    const objects = analytics.objects;
    if (objects == null) {
      class S {
        constructor(arg0) {
          obj = { object: analytics, label: null };
          obj2 = closure_1_0(closure_1_2[6]);
          obj.label = obj2.analyticsRoleLabel(analytics.role);
          return obj;
        }
      }
    }
    const mapped = objects.map(S);
    const found = mapped.filter(tmp12);
    const DebugSection = VibegrationsDebugPrimitives.DebugSection;
    if (0 === found.length) {
      class S {
        constructor(arg0) {
          obj = { object: analytics, label: null };
          obj2 = closure_1_0(closure_1_2[6]);
          obj.label = obj2.analyticsRoleLabel(analytics.role);
          return obj;
        }
      }
      let obj4 = { children: null };
      const intl2 = util.intl;
      obj4.children = intl2.string(_modDef3723.uAzxdh);
      const tmp14 = React3(VibegrationsDebugPrimitives.DebugNote, obj4);
    } else {
      class S {
        constructor(arg0) {
          obj = { object: analytics, label: null };
          obj2 = closure_1_0(closure_1_2[6]);
          obj.label = obj2.analyticsRoleLabel(analytics.role);
          return obj;
        }
      }
    }
    cResult[5] = analytics.objects;
    cResult[6] = DebugSection;
    cResult[7] = first;
    cResult[8] = tmp14;
  } else {
    class S {
      constructor(arg0) {
        obj = { object: analytics, label: null };
        obj2 = closure_1_0(closure_1_2[6]);
        obj.label = obj2.analyticsRoleLabel(analytics.role);
        return obj;
      }
    }
    if (cResult[11] === tmp7) {
      class S {
        constructor(arg0) {
          obj = { object: analytics, label: null };
          obj2 = closure_1_0(closure_1_2[6]);
          obj.label = obj2.analyticsRoleLabel(analytics.role);
          return obj;
        }
      }
    }
    const obj5 = { title: cResult[7], children: cResult[8] };
    const tmp21 = React3(tmp7, obj5);
    cResult[11] = tmp7;
    cResult[12] = cResult[7];
    cResult[13] = cResult[8];
    cResult[14] = tmp21;
  }
}) : ((analytics) => {
  analytics = analytics.analytics;
  let intl = util.intl;
  const stringResult = intl.string(_modDef3723.Pgvj3h);
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
      const obj = { object, label: require("VibegrationsDebugLabels").analyticsRoleLabel(object.role) };
      return obj;
    });
    const found = mapped.filter((label) => null != label.label);
    let obj = { title: stringResult, children: null };
    if (0 === found.length) {
      let obj4 = { children: null };
      const intl2 = util.intl;
      obj4.children = intl2.string(_modDef3723.uAzxdh);
      let mapped1 = React3(VibegrationsDebugPrimitives.DebugNote, obj4);
    } else {
      mapped1 = found.map((label) => {
        const object = label.object;
        const obj = { label: label.label, value: null, hint: null };
        const intl = require("util").intl;
        const obj2 = { cpu: require("VibegrationsDebugFormat").formatMs(object.cpu_ms) };
        obj.value = intl.formatToPlainString(_modDef3723.AnRynJ, obj2);
        const obj3 = require("VibegrationsDebugFormat");
        const obj4 = require("VibegrationsDebugLabels");
        obj.hint = require("VibegrationsDebugLabels").analyticsMemoryValue(object);
        return closure_1_3(require("VibegrationsDebugPrimitives").DebugStatRow, obj, object.role);
      });
    }
    obj.children = mapped1;
    return React3(VibegrationsDebugPrimitives.DebugSection, obj);
  }
});