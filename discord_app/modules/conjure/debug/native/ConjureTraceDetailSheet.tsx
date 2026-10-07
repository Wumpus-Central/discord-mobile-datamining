// === Module 16787: ConjureTraceDetailSheet ===

// Module 16787 (ConjureTraceDetailSheet)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1618 */;
import _modDef3753 from "module_3753" /* 3753 */;
import Text_Text from "Text/Text" /* 4892 */;
import debug_ConjureTraceFormat from "debug/ConjureTraceFormat" /* 16783 */;
import noop from "module_19" /* 19 */;
import ConjureProjectStore from "ConjureProjectStore" /* 8734 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire, Fragment: closure_7 } = jsxProd);
const createStyles = fn(4896);
let obj2 = { content: { gap: nativeDefault.space.PX_16 }, head: null, headTitle: null, section: null, row: null, rich: null };
let obj3 = { gap: nativeDefault.space.PX_16 };
obj2.head = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
obj2.headTitle = { flexShrink: 1 };
let obj4 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
obj2.section = { gap: nativeDefault.space.PX_8 };
let obj5 = { gap: nativeDefault.space.PX_8 };
obj2.row = { gap: nativeDefault.space.PX_4 };
let obj6 = { gap: nativeDefault.space.PX_4 };
obj2.rich = { padding: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_CODE };
let closure_8 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(9);
  ({ label, value, muted } = arg0);
  const tmp5 = closure_8();
  if (cResult[0] !== label) {
    const obj2 = { variant: "text-xs/medium", color: "text-muted", children: label };
    const tmp8 = hasOwnProperty(Text_Text.Text, obj2);
    cResult[0] = label;
    cResult[1] = tmp8;
    let tmp6 = tmp8;
  } else {
    tmp6 = cResult[1];
  }
  let str = "text-default";
  if (tmp4) {
    str = "text-subtle";
  }
  if (cResult[2] === str) {
    if (cResult[3] === value) {
      let tmp9 = cResult[4];
    }
    if (cResult[5] === tmp5.row) {
      if (cResult[6] === tmp6) {
        if (cResult[7] === tmp9) {
          let tmp11 = cResult[8];
        }
        return tmp11;
      }
    }
    const obj3 = { style: tmp5.row, children: null };
    const items = [tmp6, tmp9];
    obj3.children = items;
    const tmp14 = timestampProducer(View, obj3);
    cResult[5] = tmp5.row;
    cResult[6] = tmp6;
    cResult[7] = tmp9;
    cResult[8] = tmp14;
    tmp11 = tmp14;
  }
  const tmp10 = hasOwnProperty(Text_Text.Text, { variant: "text-xs/normal", color: str, selectable: true, children: value });
  cResult[2] = str;
  cResult[3] = value;
  cResult[4] = tmp10;
  tmp9 = tmp10;
  tmp4 = undefined !== muted && muted;
}) : ((muted) => {
  let flag = muted.muted;
  ({ label, value } = muted);
  if (flag === undefined) {
    flag = false;
  }
  const obj = { style: closure_8().row, children: null };
  const items = [hasOwnProperty(Text_Text.Text, { variant: "text-xs/medium", color: "text-muted", children: label }), ];
  let str = "text-default";
  if (flag) {
    str = "text-subtle";
  }
  items[1] = hasOwnProperty(Text_Text.Text, { variant: "text-xs/normal", color: str, selectable: true, children: value });
  obj.children = items;
  return timestampProducer(View, obj);
});
ReactCompilerGating = fn(558);
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(6);
  ({ title, children } = arg0);
  const tmp4 = closure_8();
  if (cResult[0] !== title) {
    const obj2 = { variant: "text-xs/semibold", color: "text-default", children: title };
    const tmp7 = hasOwnProperty(Text_Text.Text, obj2);
    cResult[0] = title;
    cResult[1] = tmp7;
    let tmp5 = tmp7;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === children) {
    if (cResult[3] === tmp4.section) {
      if (cResult[4] === tmp5) {
        let tmp8 = cResult[5];
      }
      return tmp8;
    }
  }
  const obj3 = { style: tmp4.section, children: null };
  const items = [tmp5, children];
  obj3.children = items;
  const tmp9 = timestampProducer(View, obj3);
  cResult[2] = children;
  cResult[3] = tmp4.section;
  cResult[4] = tmp5;
  cResult[5] = tmp9;
  tmp8 = tmp9;
}) : ((arg0) => {
  ({ title, children } = arg0);
  const obj = { style: closure_8().section, children: null };
  const items = [hasOwnProperty(Text_Text.Text, { variant: "text-xs/semibold", color: "text-default", children: title }), children];
  obj.children = items;
  return timestampProducer(View, obj);
});
ReactCompilerGating = fn(558);
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? ((field) => {
  const cResult = c.c(14);
  if (null != field.field.value) {
    if (cResult[0] === iter.key) {
      if (cResult[1] === iter.value) {
        let tmp17 = cResult[2];
      }
      return tmp17;
    }
    ({ key: obj7.label, value: obj7.value } = iter);
    const tmp20 = hasOwnProperty(closure_9, { label: null, value: null });
    cResult[0] = iter.key;
    cResult[1] = iter.value;
    cResult[2] = tmp20;
    tmp17 = tmp20;
    const obj2 = { label: null, value: null };
  } else {
    if (cResult[3] === iter.chars) {
      if (cResult[4] === iter.items) {
        ({ omitted, key } = iter);
        if (omitted == null) {
          omitted = "content";
        }
        if (cResult[6] !== omitted) {
          const omissionLabelResult = debug_ConjureTraceFormat.omissionLabel(omitted);
          cResult[6] = omitted;
          cResult[7] = omissionLabelResult;
          let tmp9 = omissionLabelResult;
          const tmpResult = debug_ConjureTraceFormat;
        } else {
          tmp9 = cResult[7];
        }
        if (cResult[8] === cResult[5]) {
          if (cResult[9] === tmp9) {
            let obj5 = cResult[10];
          }
          const joined = obj5.join(" \u00B7 ");
          if (cResult[11] === iter.key) {
            if (cResult[12] === joined) {
              let tmp13 = cResult[13];
            }
            return tmp13;
          }
          const obj3 = { label: key, value: joined, muted: true };
          const tmp16 = hasOwnProperty(closure_9, obj3);
          cResult[11] = iter.key;
          cResult[12] = joined;
          cResult[13] = tmp16;
          tmp13 = tmp16;
        }
        const items = [tmp9, cResult[5]];
        const found = items.filter((item) => null != item);
        cResult[8] = cResult[5];
        cResult[9] = tmp9;
        cResult[10] = found;
        obj5 = found;
      }
    }
    if (null != iter.chars) {
      const intl2 = util.intl;
      const obj4 = { count: iter.chars };
      let formatToPlainStringResult = intl2.formatToPlainString(_modDef3753.ib7All, obj4);
    } else {
      formatToPlainStringResult = null;
      if (null != iter.items) {
        const intl = util.intl;
        const obj6 = { count: iter.items };
        formatToPlainStringResult = intl.formatToPlainString(_modDef3753.cIqKbA, obj6);
      }
    }
    cResult[3] = iter.chars;
    cResult[4] = iter.items;
    cResult[5] = formatToPlainStringResult;
  }
}) : ((field) => {
  if (null != field.field.value) {
    ({ key: obj6.label, value: obj6.value } = iter);
    return hasOwnProperty(closure_9, { label: null, value: null });
  } else {
    if (null != iter.chars) {
      const intl2 = util.intl;
      const obj3 = { count: iter.chars };
      let formatToPlainStringResult = intl2.formatToPlainString(_modDef3753.ib7All, obj3);
    } else {
      formatToPlainStringResult = null;
      if (null != iter.items) {
        const intl = util.intl;
        const obj = { count: iter.items };
        formatToPlainStringResult = intl.formatToPlainString(_modDef3753.cIqKbA, obj);
      }
    }
    const obj5 = { label: iter.key, value: null, muted: true };
    let str = iter.omitted;
    if (str == null) {
      str = "content";
    }
    const items = [debug_ConjureTraceFormat.omissionLabel(str), formatToPlainStringResult];
    const found = items.filter((item) => null != item);
    obj5.value = found.join(" \u00B7 ");
    return hasOwnProperty(closure_9, obj5);
  }
});
ReactCompilerGating = fn(558);
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = require("c").c(8);
  const entries = arg0.entries;
  const tmp4 = closure_8();
  _require = tmp4;
  if (0 === entries.length) {
    return null;
  } else {
    const _Symbol = Symbol;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      let obj2 = { variant: "text-xs/semibold", color: "text-feedback-warning", children: null };
      let intl = tmp(1126).intl;
      obj2.children = intl.string(_modDef3753.LRIpHQ);
      const tmp8 = closure_5(tmp(4892).Text, obj2);
      cResult[0] = tmp8;
      let first = tmp8;
    } else {
      first = cResult[0];
    }
    if (cResult[1] === entries) {
      if (cResult[2] === tmp4) {
        if (cResult[6] !== cResult[3]) {
          let obj3 = { children: null };
          let items = [first, tmp9];
          obj3.children = items;
          const tmp16 = closure_6(closure_7, obj3);
          cResult[6] = tmp9;
          cResult[7] = tmp16;
          let tmp13 = tmp16;
        } else {
          tmp13 = cResult[7];
        }
        return tmp13;
      }
    }
    if (cResult[4] !== tmp4) {
      const fn = function x(children) {
        const obj = { style: row.row, children: null };
        let intl = require;
        let obj7 = dependencyMap;
        const items = [hasOwnProperty(Text_Text.Text, { variant: "text-xs/medium", color: "text-muted", children: children.key }), , , ];
        let tmp4Result = null;
        if (null != children.value) {
          const obj3 = { style: row.rich, children: null };
          const obj4 = { variant: "text-xs/normal", color: "text-default", selectable: true, children: children.value };
          obj3.children = hasOwnProperty(Text_Text.Text, obj4);
          tmp4Result = hasOwnProperty(View, obj3);
        }
        items[1] = tmp4Result;
        let tmp4Result3 = null;
        if (true === children.scrubbed) {
          const obj5 = { variant: "text-xs/normal", color: "text-feedback-warning", children: null };
          const intl2 = util.intl;
          obj5.children = intl2.string(_modDef3753["+kQ+K3"]);
          tmp4Result3 = hasOwnProperty(Text_Text.Text, obj5);
        }
        items[2] = tmp4Result3;
        if (true !== children.truncated) {
          items[3] = null;
          obj.children = items;
          return timestampProducer(View, obj, children.key);
        } else {
          if (null == children.chars) {
            intl = util.intl;
            let stringResult = intl.string(_modDef3753.ijkkUh);
          } else {
            const intl3 = util.intl;
            const obj6 = { count: children.chars };
            stringResult = intl3.formatToPlainString(_modDef3753.PRt8I0, obj6);
          }
          obj7 = { variant: "text-xs/normal", color: "text-subtle", children: stringResult };
          hasOwnProperty(Text_Text.Text, obj7);
        }
        const obj2 = { variant: "text-xs/medium", color: "text-muted", children: children.key };
      };
      cResult[4] = tmp4;
      cResult[5] = fn;
      let tmp10 = fn;
    } else {
      tmp10 = cResult[5];
    }
    const mapped = entries.map(tmp10);
    cResult[1] = entries;
    cResult[2] = tmp4;
    cResult[3] = mapped;
  }
  let obj = require("c");
}) : ((arg0) => {
  const entries = arg0.entries;
  _require = closure_8();
  let tmp = null;
  if (0 !== entries.length) {
    let obj = { children: null };
    let obj2 = { variant: "text-xs/semibold", color: "text-feedback-warning", children: null };
    let intl = require("util").intl;
    obj2.children = intl.string(_modDef3753.LRIpHQ);
    let items = [
      closure_5(require("Text/Text").Text, obj2),
      entries.map((children) => {
          const obj = { style: row.row, children: null };
          let intl = require;
          let obj7 = dependencyMap;
          const items = [hasOwnProperty(Text_Text.Text, { variant: "text-xs/medium", color: "text-muted", children: children.key }), , , ];
          let tmp4Result = null;
          if (null != children.value) {
            const obj3 = { style: row.rich, children: null };
            const obj4 = { variant: "text-xs/normal", color: "text-default", selectable: true, children: children.value };
            obj3.children = hasOwnProperty(Text_Text.Text, obj4);
            tmp4Result = hasOwnProperty(View, obj3);
          }
          items[1] = tmp4Result;
          let tmp4Result3 = null;
          if (true === children.scrubbed) {
            const obj5 = { variant: "text-xs/normal", color: "text-feedback-warning", children: null };
            const intl2 = util.intl;
            obj5.children = intl2.string(_modDef3753["+kQ+K3"]);
            tmp4Result3 = hasOwnProperty(Text_Text.Text, obj5);
          }
          items[2] = tmp4Result3;
          if (true !== children.truncated) {
            items[3] = null;
            obj.children = items;
            return timestampProducer(View, obj, children.key);
          } else {
            if (null == children.chars) {
              intl = util.intl;
              let stringResult = intl.string(_modDef3753.ijkkUh);
            } else {
              const intl3 = util.intl;
              const obj6 = { count: children.chars };
              stringResult = intl3.formatToPlainString(_modDef3753.PRt8I0, obj6);
            }
            obj7 = { variant: "text-xs/normal", color: "text-subtle", children: stringResult };
            hasOwnProperty(Text_Text.Text, obj7);
          }
          const obj2 = { variant: "text-xs/medium", color: "text-muted", children: children.key };
        })
    ];
    obj.children = items;
    tmp = closure_6(closure_7, obj);
  }
  return tmp;
});
ReactCompilerGating = fn(558);
let obj7 = { padding: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_CODE };
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/debug/native/ConjureTraceDetailSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((projectId) => {
  const tmp = projectId;
  const cResult = projectId(576).c(8);
  projectId = projectId.projectId;
  ({ entryId, initialEntry } = projectId);
  const tmp4 = closure_8();
  let obj = projectId(576);
  const traceCategoryTextStyles = projectId(16782).useTraceCategoryTextStyles();
  const bottom = useSafeAreaInsetsDefault().bottom;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ConjureProjectStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== projectId) {
    const fn = function k() {
      return ConjureProjectStore.getTrace(projectId);
    };
    const items1 = [projectId];
    cResult[1] = projectId;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp10 = items1;
    let tmp9 = fn;
  } else {
    tmp9 = cResult[2];
    tmp10 = cResult[3];
  }
  const obj2 = projectId(16782);
  const stateFromStoresArray = tmp(504).useStateFromStoresArray(first, tmp9, tmp10);
  const tmpResult = tmp(504);
  let findTraceEntryResult = tmp(16784).findTraceEntry(stateFromStoresArray, entryId);
  if (findTraceEntryResult == null) {
    findTraceEntryResult = initialEntry;
  }
  let findTraceEntryResult1 = null;
  if ("tool" === findTraceEntryResult.kind) {
    let parentId = findTraceEntryResult.parentId;
    if (parentId == null) {
      parentId = null;
    }
    findTraceEntryResult1 = tmp(16784).findTraceEntry(stateFromStoresArray, parentId);
    const tmpResult16 = tmp(16784);
  }
  const tmpResult15 = tmp(16784);
  const length = tmp(16784).traceChildren(stateFromStoresArray, findTraceEntryResult.id).length;
  const tmpResult17 = tmp(16784);
  const traceDetailSectionsResult = tmp(16788).traceDetailSections(findTraceEntryResult, { childCount: length, hasParent: null != findTraceEntryResult1 });
  const obj3 = { childCount: length, hasParent: null != findTraceEntryResult1 };
  const tmpResult18 = tmp(16788);
  let detailId;
  if ("tool" === findTraceEntryResult.kind) {
    detailId = findTraceEntryResult.detailId;
  }
  const conjureTraceDetail = tmp(16789).useConjureTraceDetail(projectId, detailId);
  const tmp17 = "model" === findTraceEntryResult.kind ? findTraceEntryResult.model : findTraceEntryResult.tool;
  const tmpResult19 = tmp(16789);
  const formatClockTimeResult = tmp(16786).formatClockTime(findTraceEntryResult.startedAt, "millis");
  const tmpResult20 = tmp(16786);
  const traceCategoryResult = tmp(16784).traceCategory(findTraceEntryResult);
  if (cResult[4] !== conjureTraceDetail) {
    const traceRichStatusLabelResult = tmp(16783).traceRichStatusLabel(conjureTraceDetail);
    cResult[4] = conjureTraceDetail;
    cResult[5] = traceRichStatusLabelResult;
    let tmp20 = traceRichStatusLabelResult;
    const tmpResult22 = tmp(16783);
  } else {
    tmp20 = cResult[5];
  }
  if (cResult[6] !== bottom) {
    const obj4 = { paddingBottom: bottom };
    cResult[6] = bottom;
    cResult[7] = obj4;
    let tmp22 = obj4;
  } else {
    tmp22 = cResult[7];
  }
  const obj5 = { scrollable: true, header: closure_5(tmp(6651).BottomSheetTitleHeader, { title: tmp17 }), children: null };
  const obj6 = { contentContainerStyle: tmp22, children: null };
  const obj7 = { style: tmp4.content, children: null };
  const obj8 = { style: tmp4.head, children: null };
  const items2 = [closure_5(tmp(16782).TraceStatusDot, { status: findTraceEntryResult.status }), , ];
  const obj10 = { variant: "text-xs/semibold", style: traceCategoryTextStyles[traceCategoryResult], children: null };
  const obj9 = { status: findTraceEntryResult.status };
  const tmpResult21 = tmp(16784);
  obj10.children = tmp(16783).categoryLabel(traceCategoryResult);
  items2[1] = closure_5(tmp(4892).Text, obj10);
  const obj11 = { variant: "text-xs/normal", color: "text-muted", style: tmp4.headTitle, children: null };
  if (null == findTraceEntryResult.durationMs) {
    let intl = tmp(1126).intl;
    let stringResult = intl.string(_modDef3753["2wyRDK"]);
  } else {
    stringResult = tmp(16783).formatDuration(findTraceEntryResult.durationMs);
    const tmpResult24 = tmp(16783);
  }
  obj11.children = stringResult;
  items2[2] = closure_5(tmp(4892).Text, obj11);
  obj8.children = items2;
  const items3 = [closure_6(View, obj8), , , , , , ];
  let tmp23Result = null;
  if (null != findTraceEntryResult.error) {
    const obj12 = { variant: "text-xs/normal", color: "text-feedback-critical", selectable: true, children: findTraceEntryResult.error };
    tmp23Result = closure_5(tmp(4892).Text, obj12);
  }
  items3[1] = tmp23Result;
  let tmp24Result = null;
  if (traceDetailSectionsResult.includes("arguments")) {
    tmp24Result = null;
    if ("tool" === findTraceEntryResult.kind) {
      const obj13 = { title: null, children: null };
      const intl25 = tmp(1126).intl;
      obj13.title = intl25.string(_modDef3753["G/4JST"]);
      let fields = findTraceEntryResult.fields;
      if (fields == null) {
        fields = [];
      }
      const items4 = [fields.map((field) => closure_1_5(closure_1_11, { field }, field.key)), , ];
      let status;
      if (conjureTraceDetail != null) {
        status = conjureTraceDetail.status;
      }
      let tmp23Result18 = null;
      if ("loaded" === status) {
        tmp23Result18 = null;
        if (null != conjureTraceDetail.rich.args) {
          const obj14 = { entries: conjureTraceDetail.rich.args };
          tmp23Result18 = closure_5(closure_12, obj14);
        }
      }
      items4[1] = tmp23Result18;
      let tmp23Result19 = null;
      if (null != tmp20) {
        const obj15 = { variant: "text-xs/normal", color: "text-subtle", children: tmp20 };
        tmp23Result19 = closure_5(tmp(4892).Text, obj15);
      }
      items4[2] = tmp23Result19;
      obj13.children = items4;
      tmp24Result = closure_6(closure_10, obj13);
    }
  }
  items3[2] = tmp24Result;
  let tmp24Result5 = null;
  if (traceDetailSectionsResult.includes("result")) {
    tmp24Result5 = null;
    if ("tool" === findTraceEntryResult.kind) {
      const obj16 = { title: null, children: null };
      const intl26 = tmp(1126).intl;
      obj16.title = intl26.string(_modDef3753.Dgg25Y);
      const obj17 = { label: null, value: null };
      const intl27 = tmp(1126).intl;
      obj17.label = intl27.string(_modDef3753["U+OQCo"]);
      const intl28 = tmp(1126).intl;
      let num9 = findTraceEntryResult.resultChars;
      if (num9 == null) {
        num9 = 0;
      }
      const obj18 = { count: num9 };
      obj17.value = intl28.formatToPlainString(_modDef3753.ib7All, obj18);
      const items5 = [closure_5(closure_9, obj17), , , ];
      let tmp23Result20 = null;
      if (null != findTraceEntryResult.resultAdded) {
        const obj19 = { label: null, value: null };
        const intl2 = tmp(1126).intl;
        obj19.label = intl2.string(_modDef3753["MQYS+n"]);
        ({ resultRemoved, resultAdded } = findTraceEntryResult);
        if (resultRemoved == null) {
          resultRemoved = 0;
        }
        const _HermesInternal = HermesInternal;
        obj19.value = "+" + resultAdded + " \u2212" + resultRemoved;
        tmp23Result20 = closure_5(closure_9, obj19);
      }
      items5[1] = tmp23Result20;
      let tmp23Result21 = null;
      if (true === findTraceEntryResult.resultTruncated) {
        const obj20 = { label: null, value: null, muted: true };
        const intl3 = tmp(1126).intl;
        obj20.label = intl3.string(_modDef3753.t7GJFc);
        const intl4 = tmp(1126).intl;
        obj20.value = intl4.string(_modDef3753.ijkkUh);
        tmp23Result21 = closure_5(closure_9, obj20);
      }
      items5[2] = tmp23Result21;
      let status1;
      if (conjureTraceDetail != null) {
        status1 = conjureTraceDetail.status;
      }
      let tmp23Result22 = null;
      if ("loaded" === status1) {
        tmp23Result22 = null;
        if (null != conjureTraceDetail.rich.result) {
          const obj21 = { entries: conjureTraceDetail.rich.result };
          tmp23Result22 = closure_5(closure_12, obj21);
        }
      }
      items5[3] = tmp23Result22;
      obj16.children = items5;
      tmp24Result5 = closure_6(closure_10, obj16);
    }
  }
  items3[3] = tmp24Result5;
  let tmp24Result6 = null;
  if (traceDetailSectionsResult.includes("usage")) {
    tmp24Result6 = null;
    if ("model" === findTraceEntryResult.kind) {
      const obj22 = { title: null, children: null };
      const intl29 = tmp(1126).intl;
      obj22.title = intl29.string(_modDef3753.NXmRw1);
      let tmp23Result23 = null;
      if (null != findTraceEntryResult.promptTokens) {
        const obj23 = { label: null, value: null };
        const intl5 = tmp(1126).intl;
        obj23.label = intl5.string(_modDef3753.iq3T1q);
        const intl6 = tmp(1126).intl;
        const obj24 = { tokens: tmp(16783).formatTokens(findTraceEntryResult.promptTokens) };
        obj23.value = intl6.formatToPlainString(_modDef3753["6GQUgQ"], obj24);
        tmp23Result23 = closure_5(closure_9, obj23);
        const tmpResult25 = tmp(16783);
      }
      const items6 = [tmp23Result23, , , , , , ];
      let tmp23Result24 = null;
      if (null != findTraceEntryResult.systemTokens) {
        const obj25 = { label: null, value: null };
        const intl7 = tmp(1126).intl;
        obj25.label = intl7.string(_modDef3753.ZELAZn);
        const intl8 = tmp(1126).intl;
        const obj26 = { system: tmp(16783).formatTokens(findTraceEntryResult.systemTokens), tools: null, toolCount: null, messages: null, messageCount: null };
        const tmpResult26 = tmp(16783);
        let num10 = findTraceEntryResult.toolsTokens;
        if (num10 == null) {
          num10 = 0;
        }
        obj26.tools = tmp(16783).formatTokens(num10);
        let num11 = findTraceEntryResult.tools;
        if (num11 == null) {
          num11 = 0;
        }
        obj26.toolCount = num11;
        const tmpResult27 = tmp(16783);
        let num12 = findTraceEntryResult.messagesTokens;
        if (num12 == null) {
          num12 = 0;
        }
        obj26.messages = tmp(16783).formatTokens(num12);
        let num13 = findTraceEntryResult.messages;
        if (num13 == null) {
          num13 = 0;
        }
        obj26.messageCount = num13;
        obj25.value = intl8.formatToPlainString(_modDef3753.Te7mPn, obj26);
        tmp23Result24 = closure_5(closure_9, obj25);
        const tmpResult28 = tmp(16783);
      }
      items6[1] = tmp23Result24;
      let tmp23Result25 = null;
      if (null != findTraceEntryResult.inputTokens) {
        const obj27 = { label: null, value: null };
        const intl9 = tmp(1126).intl;
        obj27.label = intl9.string(_modDef3753["LENc/T"]);
        const _String = String;
        obj27.value = String(findTraceEntryResult.inputTokens);
        tmp23Result25 = closure_5(closure_9, obj27);
      }
      items6[2] = tmp23Result25;
      let tmp23Result26 = null;
      if (null != findTraceEntryResult.outputTokens) {
        const obj28 = { label: null, value: null };
        const intl10 = tmp(1126).intl;
        obj28.label = intl10.string(_modDef3753.ewRHwx);
        const _String2 = String;
        obj28.value = String(findTraceEntryResult.outputTokens);
        tmp23Result26 = closure_5(closure_9, obj28);
      }
      items6[3] = tmp23Result26;
      let tmp23Result27 = null;
      if (null != findTraceEntryResult.cacheReadTokens) {
        const obj29 = { label: null, value: null };
        const intl11 = tmp(1126).intl;
        obj29.label = intl11.string(_modDef3753.heVFQD);
        const intl12 = tmp(1126).intl;
        const obj30 = { read: null, write: null };
        ({ cacheReadTokens: obj42.read, cacheWriteTokens } = findTraceEntryResult);
        if (cacheWriteTokens == null) {
          cacheWriteTokens = 0;
        }
        obj30.write = cacheWriteTokens;
        obj29.value = intl12.formatToPlainString(_modDef3753.VO3gdd, obj30);
        tmp23Result27 = closure_5(closure_9, obj29);
      }
      items6[4] = tmp23Result27;
      let tmp23Result28 = null;
      if (null != findTraceEntryResult.costUsd) {
        const obj31 = { label: null, value: null };
        const intl13 = tmp(1126).intl;
        obj31.label = intl13.string(_modDef3753.aBw2Vm);
        const costUsd = findTraceEntryResult.costUsd;
        const _HermesInternal2 = HermesInternal;
        obj31.value = "$" + costUsd.toFixed(4);
        tmp23Result28 = closure_5(closure_9, obj31);
      }
      items6[5] = tmp23Result28;
      const obj32 = { variant: "text-xs/normal", color: "text-subtle", children: null };
      const intl14 = tmp(1126).intl;
      obj32.children = intl14.string(_modDef3753["foF/Bc"]);
      items6[6] = closure_5(tmp(4892).Text, obj32);
      obj22.children = items6;
      tmp24Result6 = closure_6(closure_10, obj22);
    }
  }
  items3[4] = tmp24Result6;
  if (traceDetailSectionsResult.includes("arguments")) {
    const obj33 = { variant: "text-xs/normal", color: "text-subtle", children: null };
    const intl15 = tmp(1126).intl;
    obj33.children = intl15.string(_modDef3753.o24IFK);
    let tmp23Result29 = closure_5(tmp(4892).Text, obj33);
  } else {
    tmp23Result29 = null;
  }
  items3[5] = tmp23Result29;
  let tmp24Result8 = null;
  if (traceDetailSectionsResult.includes("diagnostics")) {
    const obj34 = { title: null, children: null };
    const intl16 = tmp(1126).intl;
    obj34.title = intl16.string(_modDef3753["dix/W4"]);
    if (null == findTraceEntryResult1) {
      const items7 = [null, , , , , , ];
      let tmp23Result30 = null;
      if (length > 0) {
        const obj35 = { label: null, value: null };
        const intl18 = tmp(1126).intl;
        obj35.label = intl18.string(_modDef3753.kNZBxr);
        const intl19 = tmp(1126).intl;
        const obj36 = { count: length };
        obj35.value = intl19.formatToPlainString(_modDef3753["6LoCUh"], obj36);
        tmp23Result30 = closure_5(closure_9, obj35);
      }
      items7[1] = tmp23Result30;
      let tmp23Result31 = null;
      if (null != findTraceEntryResult.turnId) {
        const obj37 = { label: null, value: null };
        const intl20 = tmp(1126).intl;
        obj37.label = intl20.string(_modDef3753.bL1r5J);
        obj37.value = findTraceEntryResult.turnId;
        tmp23Result31 = closure_5(closure_9, obj37);
      }
      items7[2] = tmp23Result31;
      const obj38 = { label: null, value: null };
      const intl21 = tmp(1126).intl;
      obj38.label = intl21.string(_modDef3753.Ndwr7X);
      obj38.value = findTraceEntryResult.id;
      items7[3] = closure_5(closure_9, obj38);
      let tmp23Result32 = null;
      if (null != formatClockTimeResult) {
        const obj39 = { label: null, value: null };
        const intl22 = tmp(1126).intl;
        obj39.label = intl22.string(_modDef3753.sO8ghW);
        obj39.value = formatClockTimeResult;
        tmp23Result32 = closure_5(closure_9, obj39);
      }
      items7[4] = tmp23Result32;
      let tmp23Result33 = null;
      if ("model" === findTraceEntryResult.kind) {
        tmp23Result33 = null;
        if (null != findTraceEntryResult.stopReason) {
          const obj40 = { label: null, value: null };
          const intl23 = tmp(1126).intl;
          obj40.label = intl23.string(_modDef3753.VfYxPF);
          obj40.value = findTraceEntryResult.stopReason;
          tmp23Result33 = closure_5(closure_9, obj40);
        }
      }
      items7[5] = tmp23Result33;
      let tmp24Result7 = null;
      if ("tool" === findTraceEntryResult.kind) {
        tmp24Result7 = null;
        if (null != findTraceEntryResult.schema) {
          tmp24Result7 = null;
          if (findTraceEntryResult.schema.length > 0) {
            const obj41 = { children: null };
            const obj43 = { variant: "text-xs/semibold", color: "text-muted", children: null };
            const intl24 = tmp(1126).intl;
            obj43.children = intl24.string(_modDef3753.mSm8iy);
            const items8 = [closure_5(tmp(4892).Text, obj43), ];
            const schema = findTraceEntryResult.schema;
            items8[1] = schema.map((label) => {
              const obj = { label: label.name, value: null };
              const intl = projectId(1126).intl;
              const tmp3 = _modDef3753;
              obj.value = intl.formatToPlainString(label.required ? tmp3["6aSRPA"] : tmp3.q2B975, { type: label.type });
              return closure_1_5(closure_1_9, obj, label.name);
            });
            obj41.children = items8;
            tmp24Result7 = closure_6(closure_7, obj41);
          }
        }
      }
      items7[6] = tmp24Result7;
      obj34.children = items7;
      tmp24Result8 = closure_6(closure_10, obj34);
    } else {
      const obj44 = { label: null, value: null };
      const intl17 = tmp(1126).intl;
      obj44.label = intl17.string(_modDef3753.soPsOJ);
      obj44.value = "model" === findTraceEntryResult1.kind ? findTraceEntryResult1.model : findTraceEntryResult1.tool;
      closure_5(closure_9, obj44);
    }
  }
  items3[6] = tmp24Result8;
  obj7.children = items3;
  obj6.children = closure_6(View, obj7);
  obj5.children = closure_5(tmp(6119).BottomSheetScrollView, obj6);
  return closure_5(tmp(6708).ActionSheet, obj5);
}) : ((projectId) => {
  projectId = projectId.projectId;
  ({ entryId, initialEntry } = projectId);
  const tmp = closure_8();
  const tmp2 = projectId;
  const traceCategoryTextStyles = projectId(16782).useTraceCategoryTextStyles();
  let obj = projectId(16782);
  const items = [ConjureProjectStore];
  const items1 = [projectId];
  const stateFromStoresArray = projectId(504).useStateFromStoresArray(items, () => ConjureProjectStore.getTrace(projectId), items1);
  const obj2 = projectId(504);
  let findTraceEntryResult = projectId(16784).findTraceEntry(stateFromStoresArray, entryId);
  if (findTraceEntryResult == null) {
    findTraceEntryResult = initialEntry;
  }
  let findTraceEntryResult1 = null;
  if ("tool" === findTraceEntryResult.kind) {
    let parentId = findTraceEntryResult.parentId;
    if (parentId == null) {
      parentId = null;
    }
    findTraceEntryResult1 = tmp2(16784).findTraceEntry(stateFromStoresArray, parentId);
    const tmp2Result = tmp2(16784);
  }
  const obj3 = projectId(16784);
  const length = tmp2(16784).traceChildren(stateFromStoresArray, findTraceEntryResult.id).length;
  const tmp2Result13 = tmp2(16784);
  const traceDetailSectionsResult = tmp2(16788).traceDetailSections(findTraceEntryResult, { childCount: length, hasParent: null != findTraceEntryResult1 });
  const obj4 = { childCount: length, hasParent: null != findTraceEntryResult1 };
  const tmp2Result14 = tmp2(16788);
  let detailId;
  if ("tool" === findTraceEntryResult.kind) {
    detailId = findTraceEntryResult.detailId;
  }
  const conjureTraceDetail = tmp2(16789).useConjureTraceDetail(projectId, detailId);
  const tmp12 = "model" === findTraceEntryResult.kind ? findTraceEntryResult.model : findTraceEntryResult.tool;
  const tmp2Result15 = tmp2(16789);
  const formatClockTimeResult = tmp2(16786).formatClockTime(findTraceEntryResult.startedAt, "millis");
  const tmp2Result16 = tmp2(16786);
  const traceCategoryResult = tmp2(16784).traceCategory(findTraceEntryResult);
  const tmp2Result17 = tmp2(16784);
  const traceRichStatusLabelResult = tmp2(16783).traceRichStatusLabel(conjureTraceDetail);
  const obj5 = { scrollable: true, header: closure_5(tmp2(6651).BottomSheetTitleHeader, { title: tmp12 }), children: null };
  const obj6 = { contentContainerStyle: { paddingBottom: useSafeAreaInsetsDefault().bottom }, children: null };
  const obj7 = { style: tmp.content, children: null };
  const obj8 = { style: tmp.head, children: null };
  const items2 = [closure_5(tmp2(16782).TraceStatusDot, { status: findTraceEntryResult.status }), , ];
  const obj10 = { variant: "text-xs/semibold", style: traceCategoryTextStyles[traceCategoryResult], children: null };
  const obj9 = { status: findTraceEntryResult.status };
  const tmp2Result18 = tmp2(16783);
  obj10.children = tmp2(16783).categoryLabel(traceCategoryResult);
  items2[1] = closure_5(tmp2(4892).Text, obj10);
  const obj11 = { variant: "text-xs/normal", color: "text-muted", style: tmp.headTitle, children: null };
  if (null == findTraceEntryResult.durationMs) {
    let intl = tmp2(1126).intl;
    let stringResult = intl.string(_modDef3753["2wyRDK"]);
  } else {
    stringResult = tmp2(16783).formatDuration(findTraceEntryResult.durationMs);
    const tmp2Result20 = tmp2(16783);
  }
  obj11.children = stringResult;
  items2[2] = closure_5(tmp2(4892).Text, obj11);
  obj8.children = items2;
  const items3 = [closure_6(View, obj8), , , , , , ];
  let tmp16Result = null;
  if (null != findTraceEntryResult.error) {
    const obj12 = { variant: "text-xs/normal", color: "text-feedback-critical", selectable: true, children: findTraceEntryResult.error };
    tmp16Result = closure_5(tmp2(4892).Text, obj12);
  }
  items3[1] = tmp16Result;
  let tmp17Result = null;
  if (traceDetailSectionsResult.includes("arguments")) {
    tmp17Result = null;
    if ("tool" === findTraceEntryResult.kind) {
      const obj13 = { title: null, children: null };
      const intl25 = tmp2(1126).intl;
      obj13.title = intl25.string(_modDef3753["G/4JST"]);
      let fields = findTraceEntryResult.fields;
      if (fields == null) {
        fields = [];
      }
      const items4 = [fields.map((field) => closure_1_5(closure_1_11, { field }, field.key)), , ];
      let status;
      if (conjureTraceDetail != null) {
        status = conjureTraceDetail.status;
      }
      let tmp16Result18 = null;
      if ("loaded" === status) {
        tmp16Result18 = null;
        if (null != conjureTraceDetail.rich.args) {
          const obj14 = { entries: conjureTraceDetail.rich.args };
          tmp16Result18 = closure_5(closure_12, obj14);
        }
      }
      items4[1] = tmp16Result18;
      let tmp16Result19 = null;
      if (null != traceRichStatusLabelResult) {
        const obj15 = { variant: "text-xs/normal", color: "text-subtle", children: traceRichStatusLabelResult };
        tmp16Result19 = closure_5(tmp2(4892).Text, obj15);
      }
      items4[2] = tmp16Result19;
      obj13.children = items4;
      tmp17Result = closure_6(closure_10, obj13);
    }
  }
  items3[2] = tmp17Result;
  let tmp17Result5 = null;
  if (traceDetailSectionsResult.includes("result")) {
    tmp17Result5 = null;
    if ("tool" === findTraceEntryResult.kind) {
      const obj16 = { title: null, children: null };
      const intl26 = tmp2(1126).intl;
      obj16.title = intl26.string(_modDef3753.Dgg25Y);
      const obj17 = { label: null, value: null };
      const intl27 = tmp2(1126).intl;
      obj17.label = intl27.string(_modDef3753["U+OQCo"]);
      const intl28 = tmp2(1126).intl;
      let num = findTraceEntryResult.resultChars;
      if (num == null) {
        num = 0;
      }
      const obj18 = { count: num };
      obj17.value = intl28.formatToPlainString(_modDef3753.ib7All, obj18);
      const items5 = [closure_5(closure_9, obj17), , , ];
      let tmp16Result20 = null;
      if (null != findTraceEntryResult.resultAdded) {
        const obj19 = { label: null, value: null };
        const intl2 = tmp2(1126).intl;
        obj19.label = intl2.string(_modDef3753["MQYS+n"]);
        ({ resultRemoved, resultAdded } = findTraceEntryResult);
        if (resultRemoved == null) {
          resultRemoved = 0;
        }
        const _HermesInternal = HermesInternal;
        obj19.value = "+" + resultAdded + " \u2212" + resultRemoved;
        tmp16Result20 = closure_5(closure_9, obj19);
      }
      items5[1] = tmp16Result20;
      let tmp16Result21 = null;
      if (true === findTraceEntryResult.resultTruncated) {
        const obj20 = { label: null, value: null, muted: true };
        const intl3 = tmp2(1126).intl;
        obj20.label = intl3.string(_modDef3753.t7GJFc);
        const intl4 = tmp2(1126).intl;
        obj20.value = intl4.string(_modDef3753.ijkkUh);
        tmp16Result21 = closure_5(closure_9, obj20);
      }
      items5[2] = tmp16Result21;
      let status1;
      if (conjureTraceDetail != null) {
        status1 = conjureTraceDetail.status;
      }
      let tmp16Result22 = null;
      if ("loaded" === status1) {
        tmp16Result22 = null;
        if (null != conjureTraceDetail.rich.result) {
          const obj21 = { entries: conjureTraceDetail.rich.result };
          tmp16Result22 = closure_5(closure_12, obj21);
        }
      }
      items5[3] = tmp16Result22;
      obj16.children = items5;
      tmp17Result5 = closure_6(closure_10, obj16);
    }
  }
  items3[3] = tmp17Result5;
  let tmp17Result6 = null;
  if (traceDetailSectionsResult.includes("usage")) {
    tmp17Result6 = null;
    if ("model" === findTraceEntryResult.kind) {
      const obj22 = { title: null, children: null };
      const intl29 = tmp2(1126).intl;
      obj22.title = intl29.string(_modDef3753.NXmRw1);
      let tmp16Result23 = null;
      if (null != findTraceEntryResult.promptTokens) {
        const obj23 = { label: null, value: null };
        const intl5 = tmp2(1126).intl;
        obj23.label = intl5.string(_modDef3753.iq3T1q);
        const intl6 = tmp2(1126).intl;
        const obj24 = { tokens: tmp2(16783).formatTokens(findTraceEntryResult.promptTokens) };
        obj23.value = intl6.formatToPlainString(_modDef3753["6GQUgQ"], obj24);
        tmp16Result23 = closure_5(closure_9, obj23);
        const tmp2Result21 = tmp2(16783);
      }
      const items6 = [tmp16Result23, , , , , , ];
      let tmp16Result24 = null;
      if (null != findTraceEntryResult.systemTokens) {
        const obj25 = { label: null, value: null };
        const intl7 = tmp2(1126).intl;
        obj25.label = intl7.string(_modDef3753.ZELAZn);
        const intl8 = tmp2(1126).intl;
        const obj26 = { system: tmp2(16783).formatTokens(findTraceEntryResult.systemTokens), tools: null, toolCount: null, messages: null, messageCount: null };
        const tmp2Result22 = tmp2(16783);
        let num2 = findTraceEntryResult.toolsTokens;
        if (num2 == null) {
          num2 = 0;
        }
        obj26.tools = tmp2(16783).formatTokens(num2);
        let num3 = findTraceEntryResult.tools;
        if (num3 == null) {
          num3 = 0;
        }
        obj26.toolCount = num3;
        const tmp2Result23 = tmp2(16783);
        let num4 = findTraceEntryResult.messagesTokens;
        if (num4 == null) {
          num4 = 0;
        }
        obj26.messages = tmp2(16783).formatTokens(num4);
        let num5 = findTraceEntryResult.messages;
        if (num5 == null) {
          num5 = 0;
        }
        obj26.messageCount = num5;
        obj25.value = intl8.formatToPlainString(_modDef3753.Te7mPn, obj26);
        tmp16Result24 = closure_5(closure_9, obj25);
        const tmp2Result24 = tmp2(16783);
      }
      items6[1] = tmp16Result24;
      let tmp16Result25 = null;
      if (null != findTraceEntryResult.inputTokens) {
        const obj27 = { label: null, value: null };
        const intl9 = tmp2(1126).intl;
        obj27.label = intl9.string(_modDef3753["LENc/T"]);
        const _String = String;
        obj27.value = String(findTraceEntryResult.inputTokens);
        tmp16Result25 = closure_5(closure_9, obj27);
      }
      items6[2] = tmp16Result25;
      let tmp16Result26 = null;
      if (null != findTraceEntryResult.outputTokens) {
        const obj28 = { label: null, value: null };
        const intl10 = tmp2(1126).intl;
        obj28.label = intl10.string(_modDef3753.ewRHwx);
        const _String2 = String;
        obj28.value = String(findTraceEntryResult.outputTokens);
        tmp16Result26 = closure_5(closure_9, obj28);
      }
      items6[3] = tmp16Result26;
      let tmp16Result27 = null;
      if (null != findTraceEntryResult.cacheReadTokens) {
        const obj29 = { label: null, value: null };
        const intl11 = tmp2(1126).intl;
        obj29.label = intl11.string(_modDef3753.heVFQD);
        const intl12 = tmp2(1126).intl;
        const obj30 = { read: null, write: null };
        ({ cacheReadTokens: obj40.read, cacheWriteTokens } = findTraceEntryResult);
        if (cacheWriteTokens == null) {
          cacheWriteTokens = 0;
        }
        obj30.write = cacheWriteTokens;
        obj29.value = intl12.formatToPlainString(_modDef3753.VO3gdd, obj30);
        tmp16Result27 = closure_5(closure_9, obj29);
      }
      items6[4] = tmp16Result27;
      let tmp16Result28 = null;
      if (null != findTraceEntryResult.costUsd) {
        const obj31 = { label: null, value: null };
        const intl13 = tmp2(1126).intl;
        obj31.label = intl13.string(_modDef3753.aBw2Vm);
        const costUsd = findTraceEntryResult.costUsd;
        const _HermesInternal2 = HermesInternal;
        obj31.value = "$" + costUsd.toFixed(4);
        tmp16Result28 = closure_5(closure_9, obj31);
      }
      items6[5] = tmp16Result28;
      const obj32 = { variant: "text-xs/normal", color: "text-subtle", children: null };
      const intl14 = tmp2(1126).intl;
      obj32.children = intl14.string(_modDef3753["foF/Bc"]);
      items6[6] = closure_5(tmp2(4892).Text, obj32);
      obj22.children = items6;
      tmp17Result6 = closure_6(closure_10, obj22);
    }
  }
  items3[4] = tmp17Result6;
  if (traceDetailSectionsResult.includes("arguments")) {
    const obj33 = { variant: "text-xs/normal", color: "text-subtle", children: null };
    const intl15 = tmp2(1126).intl;
    obj33.children = intl15.string(_modDef3753.o24IFK);
    let tmp16Result29 = closure_5(tmp2(4892).Text, obj33);
  } else {
    tmp16Result29 = null;
  }
  items3[5] = tmp16Result29;
  let tmp17Result8 = null;
  if (traceDetailSectionsResult.includes("diagnostics")) {
    const obj34 = { title: null, children: null };
    const intl16 = tmp2(1126).intl;
    obj34.title = intl16.string(_modDef3753["dix/W4"]);
    if (null == findTraceEntryResult1) {
      const items7 = [null, , , , , , ];
      let tmp16Result30 = null;
      if (length > 0) {
        const obj35 = { label: null, value: null };
        const intl18 = tmp2(1126).intl;
        obj35.label = intl18.string(_modDef3753.kNZBxr);
        const intl19 = tmp2(1126).intl;
        const obj36 = { count: length };
        obj35.value = intl19.formatToPlainString(_modDef3753["6LoCUh"], obj36);
        tmp16Result30 = closure_5(closure_9, obj35);
      }
      items7[1] = tmp16Result30;
      let tmp16Result31 = null;
      if (null != findTraceEntryResult.turnId) {
        const obj37 = { label: null, value: null };
        const intl20 = tmp2(1126).intl;
        obj37.label = intl20.string(_modDef3753.bL1r5J);
        obj37.value = findTraceEntryResult.turnId;
        tmp16Result31 = closure_5(closure_9, obj37);
      }
      items7[2] = tmp16Result31;
      const obj38 = { label: null, value: null };
      const intl21 = tmp2(1126).intl;
      obj38.label = intl21.string(_modDef3753.Ndwr7X);
      obj38.value = findTraceEntryResult.id;
      items7[3] = closure_5(closure_9, obj38);
      let tmp16Result32 = null;
      if (null != formatClockTimeResult) {
        const obj39 = { label: null, value: null };
        const intl22 = tmp2(1126).intl;
        obj39.label = intl22.string(_modDef3753.sO8ghW);
        obj39.value = formatClockTimeResult;
        tmp16Result32 = closure_5(closure_9, obj39);
      }
      items7[4] = tmp16Result32;
      let tmp16Result33 = null;
      if ("model" === findTraceEntryResult.kind) {
        tmp16Result33 = null;
        if (null != findTraceEntryResult.stopReason) {
          const obj41 = { label: null, value: null };
          const intl23 = tmp2(1126).intl;
          obj41.label = intl23.string(_modDef3753.VfYxPF);
          obj41.value = findTraceEntryResult.stopReason;
          tmp16Result33 = closure_5(closure_9, obj41);
        }
      }
      items7[5] = tmp16Result33;
      let tmp17Result7 = null;
      if ("tool" === findTraceEntryResult.kind) {
        tmp17Result7 = null;
        if (null != findTraceEntryResult.schema) {
          tmp17Result7 = null;
          if (findTraceEntryResult.schema.length > 0) {
            const obj42 = { children: null };
            const obj43 = { variant: "text-xs/semibold", color: "text-muted", children: null };
            const intl24 = tmp2(1126).intl;
            obj43.children = intl24.string(_modDef3753.mSm8iy);
            const items8 = [closure_5(tmp2(4892).Text, obj43), ];
            const schema = findTraceEntryResult.schema;
            items8[1] = schema.map((label) => {
              const obj = { label: label.name, value: null };
              const intl = projectId(1126).intl;
              const tmp3 = _modDef3753;
              obj.value = intl.formatToPlainString(label.required ? tmp3["6aSRPA"] : tmp3.q2B975, { type: label.type });
              return closure_1_5(closure_1_9, obj, label.name);
            });
            obj42.children = items8;
            tmp17Result7 = closure_6(closure_7, obj42);
          }
        }
      }
      items7[6] = tmp17Result7;
      obj34.children = items7;
      tmp17Result8 = closure_6(closure_10, obj34);
    } else {
      const obj44 = { label: null, value: null };
      const intl17 = tmp2(1126).intl;
      obj44.label = intl17.string(_modDef3753.soPsOJ);
      obj44.value = "model" === findTraceEntryResult1.kind ? findTraceEntryResult1.model : findTraceEntryResult1.tool;
      closure_5(closure_9, obj44);
    }
  }
  items3[6] = tmp17Result8;
  obj7.children = items3;
  obj6.children = closure_6(View, obj7);
  obj5.children = closure_5(tmp2(6119).BottomSheetScrollView, obj6);
  return closure_5(tmp2(6708).ActionSheet, obj5);
});
export const CONJURE_TRACE_DETAIL_SHEET_KEY = "ConjureTraceDetailSheet";