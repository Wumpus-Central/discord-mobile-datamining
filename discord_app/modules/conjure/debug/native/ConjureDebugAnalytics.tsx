// === Module 16770: ConjureDebugAnalytics ===

// Module 16770 (ConjureDebugAnalytics)
import react2 from "react" /* 576 */;
import intl7 from "intl" /* 1126 */;
import _modDef3723 from "module_3723" /* 3723 */;
import ConjureDebugFormat from "ConjureDebugFormat" /* 16756 */;
import ConjureDebugLabels from "ConjureDebugLabels" /* 16757 */;
import ConjureDebugPrimitives from "ConjureDebugPrimitives" /* 16759 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let analytics;

let c3;
let closure_4;
let hasOwnProperty;
({ jsx: c3, Fragment: closure_4, jsxs: hasOwnProperty } = Fragment);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((analytics) => {
  let intl2;
  let intl4;
  let items;
  let tmp41;
  let tmp42;
  const obj = react2;
  const cResult = obj.c(24);
  analytics = analytics.analytics;
  if ("ok" !== analytics.status) {
    let tmp46;
    let tmp48;
    const _Symbol5 = Symbol;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const intl5 = intl7.intl;
      const stringResult = intl5.string(_modDef3723.SXP7pD);
      const intl6 = intl7.intl;
      const stringResult1 = intl6.string(_modDef3723.E5hKVi);
      cResult[0] = stringResult;
      cResult[1] = stringResult1;
      tmp41 = stringResult;
      tmp42 = stringResult1;
    } else {
      [tmp41, tmp42] = cResult;
    }
    if (cResult[2] !== analytics) {
      const tmpResult = ConjureDebugLabels;
      const result = tmpResult.analyticsUnavailableReason(analytics);
      cResult[2] = analytics;
      cResult[3] = result;
      tmp46 = result;
    } else {
      tmp46 = cResult[3];
    }
    if (cResult[4] !== tmp46) {
      const obj2 = { label: tmp41, value: tmp42, hint: tmp46 };
      const tmp50 = _false(ConjureDebugPrimitives.DebugStatRow, obj2);
      cResult[4] = tmp46;
      cResult[5] = tmp50;
      tmp48 = tmp50;
    } else {
      tmp48 = cResult[5];
    }
    return tmp48;
  } else {
    let tmp8;
    let tmp7;
    let tmp6;
    let tmp5;
    let tmp4;
    if (cResult[6] !== analytics.objects) {
      let formatMsResult;
      let tmp16;
      const _Symbol = Symbol;
      const objects = analytics.objects;
      let found;
      const forResult = Symbol.for("react.early_return_sentinel");
      if (objects != null) {
        found = objects.find((role) => "agent" === role.role);
      }
      if (null != found) {
        const _Symbol3 = Symbol;
        const tmpResult3 = ConjureDebugLabels;
        tmpResult3.analyticsMemoryValue(found);
        const DebugStatRow2 = ConjureDebugPrimitives.DebugStatRow;
        if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
          const intl3 = intl7.intl;
          const stringResult2 = intl3.string(_modDef3723["H/X+FI"]);
          cResult[14] = stringResult2;
        }
        const tmpResult4 = ConjureDebugFormat;
        formatMsResult = tmpResult4.formatMs(found.cpu_ms);
        tmp16 = forResult;
      } else {
        let tmp13;
        const _Symbol6 = Symbol;
        if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = intl7.intl;
          const stringResult3 = intl.string(_modDef3723.SXP7pD);
          cResult[12] = stringResult3;
          tmp13 = stringResult3;
        } else {
          tmp13 = cResult[12];
        }
        const _Symbol2 = Symbol;
        if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
          const obj3 = { label: tmp13, value: "\u2014", hint: intl2.string(_modDef3723.AGvoMJ) };
          const DebugStatRow = ConjureDebugPrimitives.DebugStatRow;
          intl2 = intl7.intl;
          const tmp19 = _false(DebugStatRow, obj3);
          cResult[13] = tmp19;
          tmp16 = tmp19;
        } else {
          tmp16 = cResult[13];
        }
      }
      cResult[6] = analytics.objects;
      cResult[7] = tmp23;
      cResult[8] = tmp22;
      cResult[9] = tmp21;
      cResult[10] = formatMsResult;
      cResult[11] = tmp16;
      tmp8 = tmp16;
      tmp7 = formatMsResult;
      tmp6 = tmp21;
      tmp5 = tmp22;
      tmp4 = tmp23;
    } else {
      tmp4 = cResult[7];
      tmp5 = cResult[8];
      tmp6 = cResult[9];
      tmp7 = cResult[10];
      tmp8 = cResult[11];
    }
    const _Symbol4 = Symbol;
    if (tmp8 === Symbol.for("react.early_return_sentinel")) {
      if (cResult[15] === tmp4) {
        if (cResult[16] === tmp6) {
          let tmp29;
          let tmp32;
          if (cResult[17] === tmp7) {
            tmp29 = cResult[18];
          }
          if (cResult[19] !== tmp5) {
            let tmp33 = null;
            if (null != tmp5) {
              const obj4 = { label: intl4.string(_modDef3723.lmFmMO), value: tmp5 };
              const DebugStatRow3 = ConjureDebugPrimitives.DebugStatRow;
              intl4 = intl7.intl;
              tmp33 = _false(DebugStatRow3, obj4);
            }
            cResult[19] = tmp5;
            cResult[20] = tmp33;
            tmp32 = tmp33;
          } else {
            tmp32 = cResult[20];
          }
          if (cResult[21] === tmp29) {
            let tmp36;
            if (cResult[22] === tmp32) {
              tmp36 = cResult[23];
            }
            tmp8 = tmp36;
          }
          const obj5 = { children: items };
          items = [tmp29, tmp32];
          const tmp39 = hasOwnProperty(React3, obj5);
          cResult[21] = tmp29;
          cResult[22] = tmp32;
          cResult[23] = tmp39;
          tmp36 = tmp39;
        }
      }
      const obj6 = { label: tmp6, value: tmp7 };
      const tmp31 = _false(tmp4, obj6);
      cResult[15] = tmp4;
      cResult[16] = tmp6;
      cResult[17] = tmp7;
      cResult[18] = tmp31;
      tmp29 = tmp31;
    }
    return tmp8;
  }
}) : ((analytics) => {
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let obj5;
  let obj8;
  analytics = analytics.analytics;
  if ("ok" !== analytics.status) {
    const obj2 = { label: intl4.string(_modDef3723.SXP7pD), value: intl5.string(_modDef3723.E5hKVi), hint: obj5.analyticsUnavailableReason(analytics) };
    const DebugStatRow3 = ConjureDebugPrimitives.DebugStatRow;
    intl4 = intl7.intl;
    intl5 = intl7.intl;
    obj5 = ConjureDebugLabels;
    return _false(DebugStatRow3, obj2);
  } else {
    const objects = analytics.objects;
    let found;
    if (objects != null) {
      found = objects.find((role) => "agent" === role.role);
    }
    if (null == found) {
      const obj3 = { label: intl2.string(_modDef3723.SXP7pD), value: "\u2014", hint: intl3.string(_modDef3723.AGvoMJ) };
      const DebugStatRow2 = ConjureDebugPrimitives.DebugStatRow;
      intl2 = intl7.intl;
      intl3 = intl7.intl;
      return _false(DebugStatRow2, obj3);
    } else {
      const obj6 = ConjureDebugLabels;
      const analyticsMemoryValueResult = obj6.analyticsMemoryValue(found);
      const obj4 = { label: intl6.string(_modDef3723["H/X+FI"]), value: obj8.formatMs(found.cpu_ms) };
      const DebugStatRow4 = ConjureDebugPrimitives.DebugStatRow;
      intl6 = intl7.intl;
      obj8 = ConjureDebugFormat;
      const items = [_false(DebugStatRow4, obj4), ];
      let tmp17Result = null;
      if (null != analyticsMemoryValueResult) {
        const obj = { label: intl.string(_modDef3723.lmFmMO), value: analyticsMemoryValueResult };
        const DebugStatRow = ConjureDebugPrimitives.DebugStatRow;
        intl = intl7.intl;
        tmp17Result = _false(DebugStatRow, obj);
      }
      const obj7 = { children: items };
      items[1] = tmp17Result;
      return hasOwnProperty(React3, obj7);
    }
  }
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((analytics) => {
  let first;
  let intl2;
  let obj3;
  let obj = react2;
  const cResult = obj.c(15);
  analytics = analytics.analytics;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let intl = intl7.intl;
    const stringResult = intl.string(_modDef3723.LoZwWn);
    cResult[0] = stringResult;
    first = stringResult;
  } else {
    first = cResult[0];
  }
  if ("ok" !== analytics.status) {
    let tmp19;
    let tmp21;
    if (cResult[1] !== analytics) {
      const tmpResult = ConjureDebugLabels;
      const result = tmpResult.analyticsUnavailableReason(analytics);
      cResult[1] = analytics;
      cResult[2] = result;
      tmp19 = result;
    } else {
      tmp19 = cResult[2];
    }
    if (cResult[3] !== tmp19) {
      let obj2 = { title: first, children: _false(ConjureDebugPrimitives.DebugNote, obj3) };
      const DebugSection2 = ConjureDebugPrimitives.DebugSection;
      obj3 = { children: tmp19 };
      const tmp23 = _false(DebugSection2, obj2);
      cResult[3] = tmp19;
      cResult[4] = tmp23;
      tmp21 = tmp23;
    } else {
      tmp21 = cResult[4];
    }
    return tmp21;
  } else {
    let tmp9;
    let tmp8;
    let tmp7;
    if (cResult[5] !== analytics.objects) {
      let tmp10;
      let tmp11;
      let mapped1;
      const _Symbol = Symbol;
      if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function h(object) {
          let obj2;
          const obj = { object, label: obj2.analyticsRoleLabel(object.role) };
          obj2 = ConjureDebugLabels;
          return obj;
        };
        cResult[9] = fn;
        tmp10 = fn;
      } else {
        tmp10 = cResult[9];
      }
      const _Symbol2 = Symbol;
      if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
        const fn2 = function _(label) {
          return null != label.label;
        };
        cResult[10] = fn2;
        tmp11 = fn2;
      } else {
        tmp11 = cResult[10];
      }
      let items = analytics.objects;
      if (items == null) {
        items = [];
      }
      const mapped = items.map(tmp10);
      const found = mapped.filter(tmp11);
      const DebugSection = ConjureDebugPrimitives.DebugSection;
      if (0 === found.length) {
        let obj4 = { children: intl2.string(_modDef3723.AGvoMJ) };
        const DebugNote = ConjureDebugPrimitives.DebugNote;
        intl2 = intl7.intl;
        mapped1 = _false(DebugNote, obj4);
      } else {
        mapped1 = found.map((label) => {
          let formatToPlainString;
          let obj2;
          let obj3;
          let obj4;
          let prop;
          const object = label.object;
          const obj = { label: label.label, value: formatToPlainString(prop, obj2), hint: obj4.analyticsMemoryValue(object) };
          const DebugStatRow = ConjureDebugPrimitives.DebugStatRow;
          const intl = intl7.intl;
          formatToPlainString = intl.formatToPlainString;
          obj2 = { cpu: obj3.formatMs(object.cpu_ms) };
          prop = _modDef3723["w/2voO"];
          obj3 = ConjureDebugFormat;
          obj4 = ConjureDebugLabels;
          obj4.analyticsMemoryValue(object);
          return closure_1_3(DebugStatRow, obj, object.role);
        });
      }
      cResult[5] = analytics.objects;
      cResult[6] = DebugSection;
      cResult[7] = first;
      cResult[8] = mapped1;
      tmp9 = mapped1;
      tmp8 = first;
      tmp7 = DebugSection;
    } else {
      tmp7 = cResult[6];
      tmp8 = cResult[7];
      tmp9 = cResult[8];
    }
    if (cResult[11] === tmp7) {
      if (cResult[12] === tmp8) {
        let tmp16;
        if (cResult[13] === tmp9) {
          tmp16 = cResult[14];
        }
        return tmp16;
      }
    }
    const obj5 = { title: tmp8, children: tmp9 };
    const tmp18 = _false(tmp7, obj5);
    cResult[11] = tmp7;
    cResult[12] = tmp8;
    cResult[13] = tmp9;
    cResult[14] = tmp18;
    tmp16 = tmp18;
  }
}) : ((analytics) => {
  let DebugNote2;
  let intl2;
  let mapped1;
  let obj3;
  let tmpResult;
  analytics = analytics.analytics;
  let intl = intl7.intl;
  const stringResult = intl.string(_modDef3723.LoZwWn);
  if ("ok" !== analytics.status) {
    let obj2 = { title: stringResult, children: _false(DebugNote2, obj3) };
    const DebugSection2 = ConjureDebugPrimitives.DebugSection;
    obj3 = { children: tmpResult.analyticsUnavailableReason(analytics) };
    DebugNote2 = ConjureDebugPrimitives.DebugNote;
    tmpResult = ConjureDebugLabels;
    return _false(DebugSection2, obj2);
  } else {
    let items = analytics.objects;
    if (items == null) {
      items = [];
    }
    const mapped = items.map((object) => {
      let obj2;
      const obj = { object, label: obj2.analyticsRoleLabel(object.role) };
      obj2 = ConjureDebugLabels;
      return obj;
    });
    const found = mapped.filter((label) => null != label.label);
    let obj = { title: stringResult, children: mapped1 };
    const DebugSection = ConjureDebugPrimitives.DebugSection;
    if (0 === found.length) {
      let obj4 = { children: intl2.string(_modDef3723.AGvoMJ) };
      const DebugNote = ConjureDebugPrimitives.DebugNote;
      intl2 = intl7.intl;
      mapped1 = _false(DebugNote, obj4);
    } else {
      mapped1 = found.map((label) => {
        let formatToPlainString;
        let obj2;
        let obj3;
        let obj4;
        let prop;
        const object = label.object;
        const obj = { label: label.label, value: formatToPlainString(prop, obj2), hint: obj4.analyticsMemoryValue(object) };
        const DebugStatRow = ConjureDebugPrimitives.DebugStatRow;
        const intl = intl7.intl;
        formatToPlainString = intl.formatToPlainString;
        obj2 = { cpu: obj3.formatMs(object.cpu_ms) };
        prop = _modDef3723["w/2voO"];
        obj3 = ConjureDebugFormat;
        obj4 = ConjureDebugLabels;
        obj4.analyticsMemoryValue(object);
        return closure_1_3(DebugStatRow, obj, object.role);
      });
    }
    return _false(DebugSection, obj);
  }
});
let result = size.fileFinishedImporting("modules/conjure/debug/native/ConjureDebugAnalytics.tsx");

export const ConjureDebugAgentAnalyticsRows = tmp4;
export const ConjureDebugWorkerAnalyticsSection = tmp5;