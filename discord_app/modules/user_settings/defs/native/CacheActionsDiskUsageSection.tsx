// === Module 15412: CacheActionsDiskUsageSection ===

// Module 15412 (CacheActionsDiskUsageSection)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl24 from "intl" /* 1126 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import Text_Text from "Text/Text" /* 4892 */;
import FileSizeUtils from "FileSizeUtils" /* 5324 */;
import Stack_Stack from "Stack/Stack" /* 5600 */;
import Card_Card from "Card/Card" /* 6002 */;
import CacheActionsStorageDiagnosticsDefault from "CacheActionsStorageDiagnostics" /* 15415 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let c4, c5, closure_2;

let metroImportDefault;
let metroRequire;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let closure_8 = createStyles.createStyles({ label: { flex: 1 }, value: { flexShrink: 1 } });
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? (function SizeRow(arg0) {
  let bytes;
  let items;
  let label;
  const obj = react2;
  const cResult = obj.c(11);
  ({ label, bytes } = arg0);
  const iter = closure_8();
  if (cResult[0] === label) {
    let tmp4;
    let tmp6;
    if (cResult[1] === iter.label) {
      tmp4 = cResult[2];
    }
    if (cResult[3] !== bytes) {
      let formatKbSizeResult;
      if (null != bytes) {
        const tmpResult = FileSizeUtils;
        formatKbSizeResult = tmpResult.formatKbSize(bytes);
      } else {
        const intl = intl24.intl;
        formatKbSizeResult = intl.string(intl24.t.Yrz9rv);
      }
      cResult[3] = bytes;
      cResult[4] = formatKbSizeResult;
      tmp6 = formatKbSizeResult;
    } else {
      tmp6 = cResult[4];
    }
    if (cResult[5] === iter.value) {
      let tmp9;
      if (cResult[6] === tmp6) {
        tmp9 = cResult[7];
      }
      if (cResult[8] === tmp4) {
        let tmp12;
        if (cResult[9] === tmp9) {
          tmp12 = cResult[10];
        }
        return tmp12;
      }
      const obj2 = { direction: "horizontal", justify: "space-between", spacing: nativeDefault.space.PX_16, children: items };
      const Stack = Stack_Stack.Stack;
      items = [tmp4, tmp9];
      const tmp15 = metroImportDefault(Stack, obj2);
      cResult[8] = tmp4;
      cResult[9] = tmp9;
      cResult[10] = tmp15;
      tmp12 = tmp15;
    }
    const obj3 = { variant: "text-sm/semibold", tabularNumbers: true, style: iter.value, children: tmp6 };
    const tmp11 = metroRequire(Text_Text.Text, obj3);
    cResult[5] = iter.value;
    cResult[6] = tmp6;
    cResult[7] = tmp11;
    tmp9 = tmp11;
  }
  const obj4 = { variant: "text-sm/normal", color: "text-subtle", style: iter.label, children: label };
  const tmp5 = metroRequire(Text_Text.Text, obj4);
  cResult[0] = label;
  cResult[1] = iter.label;
  cResult[2] = tmp5;
  tmp4 = tmp5;
}) : (function SizeRow(bytes) {
  let formatKbSizeResult;
  let items;
  bytes = bytes.bytes;
  const label = bytes.label;
  const iter = closure_8();
  const obj = { direction: "horizontal", justify: "space-between", spacing: nativeDefault.space.PX_16, children: items };
  const Stack = Stack_Stack.Stack;
  items = [, ];
  const obj2 = { variant: "text-sm/normal", color: "text-subtle", style: iter.label, children: label };
  items[0] = metroRequire(Text_Text.Text, obj2);
  const obj3 = { variant: "text-sm/semibold", tabularNumbers: true, style: iter.value, children: formatKbSizeResult };
  const Text = Text_Text.Text;
  if (null != bytes) {
    const tmp2Result = FileSizeUtils;
    formatKbSizeResult = tmp2Result.formatKbSize(bytes);
  } else {
    const intl = intl24.intl;
    formatKbSizeResult = intl.string(intl24.t.Yrz9rv);
  }
  items[1] = metroRequire(Text, obj3);
  return metroImportDefault(Stack, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? (function DiskUsageResults(arg0) {
  let first;
  let intl;
  let intl10;
  let intl11;
  let intl12;
  let intl13;
  let intl14;
  let intl15;
  let intl16;
  let intl17;
  let intl18;
  let intl19;
  let intl2;
  let intl21;
  let intl22;
  let intl23;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let intl8;
  let intl9;
  let items;
  let items1;
  let metricKitSize;
  let obj10;
  let report;
  let tmp11;
  let tmp15;
  let tmp18;
  let tmp5;
  let tmp7;
  const tmp = first;
  const obj = first(576);
  const cResult = obj.c(21);
  ({ report, metricKitSize } = arg0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { caches: intl.string(tmp(1126).t["2CKnsF"]), files: intl2.string(tmp(1126).t["8Hvr3+"]), databases: intl3.string(tmp(1126).t["9paF2r"]), shared_preferences: intl4.string(tmp(1126).t["Y9/ijr"]), no_backup: intl5.string(tmp(1126).t["lZWCZ+"]), code_cache: intl6.string(tmp(1126).t.GN6kqM), external_files: intl7.string(tmp(1126).t["6Ej9W0"]), external_caches: intl8.string(tmp(1126).t.ZmaptE), documents: intl9.string(tmp(1126).t.aE3Wbw), tmp: intl10.string(tmp(1126).t.UQsNEK), application_support: intl11.string(tmp(1126).t.DGQvlY), webkit: intl12.string(tmp(1126).t.aIcsfw), library_other: intl13.string(tmp(1126).t.U2f1ef), container_other: intl14.string(tmp(1126).t.ZduI7f), app_group: intl15.string(tmp(1126).t.rManeQ), share_extension: intl16.string(tmp(1126).t.BEL9MJ), notification_service_extension: intl17.string(tmp(1126).t.V46Edz), broadcast_upload_extension: intl18.string(tmp(1126).t.BhYGtj), lockscreen_widget_extension: intl19.string(tmp(1126).t.toGFBn) };
    intl = tmp(1126).intl;
    intl2 = tmp(1126).intl;
    intl3 = tmp(1126).intl;
    intl4 = tmp(1126).intl;
    intl5 = tmp(1126).intl;
    intl6 = tmp(1126).intl;
    intl7 = tmp(1126).intl;
    intl8 = tmp(1126).intl;
    intl9 = tmp(1126).intl;
    intl10 = tmp(1126).intl;
    intl11 = tmp(1126).intl;
    intl12 = tmp(1126).intl;
    intl13 = tmp(1126).intl;
    intl14 = tmp(1126).intl;
    intl15 = tmp(1126).intl;
    intl16 = tmp(1126).intl;
    intl17 = tmp(1126).intl;
    intl18 = tmp(1126).intl;
    intl19 = tmp(1126).intl;
    cResult[0] = obj2;
    first = obj2;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const intl20 = tmp(1126).intl;
    const stringResult = intl20.string(tmp(1126).t.O20zQi);
    cResult[1] = stringResult;
    tmp5 = stringResult;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] !== report.totalMeasuredBytes) {
    const obj3 = { label: tmp5, bytes: report.totalMeasuredBytes };
    const tmp10 = closure_6(closure_9, obj3);
    cResult[2] = report.totalMeasuredBytes;
    cResult[3] = tmp10;
    tmp7 = tmp10;
  } else {
    tmp7 = cResult[3];
  }
  if (cResult[4] !== metricKitSize) {
    const tmpResult = tmp(1369);
    let isIOSResult = tmpResult.isIOS();
    if (isIOSResult) {
      const obj4 = { label: intl21.string(tmp(1126).t.VQKK5O), bytes: metricKitSize };
      intl21 = tmp(1126).intl;
      isIOSResult = closure_6(closure_9, obj4);
    }
    cResult[4] = metricKitSize;
    cResult[5] = isIOSResult;
    tmp11 = isIOSResult;
  } else {
    tmp11 = cResult[5];
  }
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const obj5 = { variant: "heading-sm/semibold", children: intl22.string(tmp(1126).t.CoudPr) };
    const Heading = tmp(4892).Heading;
    intl22 = tmp(1126).intl;
    const tmp17 = closure_6(Heading, obj5);
    cResult[6] = tmp17;
    tmp15 = tmp17;
  } else {
    tmp15 = cResult[6];
  }
  if (cResult[7] !== report.roots) {
    let tmp19;
    const _Symbol = Symbol;
    if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
      const fn = function y(root) {
        root = root.root;
        let label = first[root];
        const bytes = root.bytes;
        if (label == null) {
          label = root;
        }
        return metroRequire(closure_9, { label, bytes }, root);
      };
      cResult[9] = fn;
      tmp19 = fn;
    } else {
      tmp19 = cResult[9];
    }
    const roots = report.roots;
    const mapped = roots.map(tmp19);
    cResult[7] = report.roots;
    cResult[8] = mapped;
    tmp18 = mapped;
  } else {
    tmp18 = cResult[8];
  }
  if (cResult[10] === report.complete) {
    if (cResult[11] === report.errorCount) {
      let tmp21;
      if (cResult[12] === report.unmeasuredRootCount) {
        tmp21 = cResult[13];
      }
      if (cResult[14] === tmp18) {
        let tmp24;
        if (cResult[15] === tmp21) {
          tmp24 = cResult[16];
        }
        if (cResult[17] === tmp7) {
          if (cResult[18] === tmp11) {
            let tmp27;
            if (cResult[19] === tmp24) {
              tmp27 = cResult[20];
            }
            return tmp27;
          }
        }
        const obj6 = { spacing: nativeDefault.space.PX_16, children: items };
        const Stack = tmp(5600).Stack;
        items = [tmp7, tmp11, tmp24];
        const tmp30 = closure_7(Stack, obj6);
        cResult[17] = tmp7;
        cResult[18] = tmp11;
        cResult[19] = tmp24;
        cResult[20] = tmp30;
        tmp27 = tmp30;
      }
      const obj7 = { children: items1 };
      items1 = [tmp15, tmp18, tmp21];
      const tmp26 = closure_7(tmp(5600).Stack, obj7);
      cResult[14] = tmp18;
      cResult[15] = tmp21;
      cResult[16] = tmp26;
      tmp24 = tmp26;
    }
  }
  const complete = report.complete;
  let tmp22 = !complete;
  if (complete) {
    tmp22 = report.errorCount > 0;
  }
  if (!tmp22) {
    tmp22 = report.unmeasuredRootCount > 0;
  }
  if (tmp22) {
    const obj9 = { variant: "text-sm/normal", color: "text-feedback-warning", children: intl23.formatToPlainString(tmp(1126).t.kt7tAT, obj10) };
    const Text = tmp(4892).Text;
    intl23 = tmp(1126).intl;
    obj10 = { errors: null, unavailable: null };
    ({ errorCount: obj8.errors, unmeasuredRootCount: obj8.unavailable } = report);
    tmp22 = closure_6(Text, obj9);
  }
  cResult[10] = report.complete;
  cResult[11] = report.errorCount;
  cResult[12] = report.unmeasuredRootCount;
  cResult[13] = tmp22;
  tmp21 = tmp22;
}) : (function DiskUsageResults(report) {
  let intl;
  let intl10;
  let intl11;
  let intl12;
  let intl13;
  let intl14;
  let intl15;
  let intl16;
  let intl17;
  let intl18;
  let intl19;
  let intl2;
  let intl20;
  let intl21;
  let intl22;
  let intl23;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let intl8;
  let intl9;
  let items;
  let obj14;
  report = report.report;
  let obj;
  obj = { caches: intl.string(obj(1126).t["2CKnsF"]), files: intl2.string(obj(1126).t["8Hvr3+"]), databases: intl3.string(obj(1126).t["9paF2r"]), shared_preferences: intl4.string(obj(1126).t["Y9/ijr"]), no_backup: intl5.string(obj(1126).t["lZWCZ+"]), code_cache: intl6.string(obj(1126).t.GN6kqM), external_files: intl7.string(obj(1126).t["6Ej9W0"]), external_caches: intl8.string(obj(1126).t.ZmaptE), documents: intl9.string(obj(1126).t.aE3Wbw), tmp: intl10.string(obj(1126).t.UQsNEK), application_support: intl11.string(obj(1126).t.DGQvlY), webkit: intl12.string(obj(1126).t.aIcsfw), library_other: intl13.string(obj(1126).t.U2f1ef), container_other: intl14.string(obj(1126).t.ZduI7f), app_group: intl15.string(obj(1126).t.rManeQ), share_extension: intl16.string(obj(1126).t.BEL9MJ), notification_service_extension: intl17.string(obj(1126).t.V46Edz), broadcast_upload_extension: intl18.string(obj(1126).t.BhYGtj), lockscreen_widget_extension: intl19.string(obj(1126).t.toGFBn) };
  const metricKitSize = report.metricKitSize;
  intl = obj(1126).intl;
  intl2 = obj(1126).intl;
  intl3 = obj(1126).intl;
  intl4 = obj(1126).intl;
  intl5 = obj(1126).intl;
  intl6 = obj(1126).intl;
  intl7 = obj(1126).intl;
  intl8 = obj(1126).intl;
  intl9 = obj(1126).intl;
  intl10 = obj(1126).intl;
  intl11 = obj(1126).intl;
  intl12 = obj(1126).intl;
  intl13 = obj(1126).intl;
  intl14 = obj(1126).intl;
  intl15 = obj(1126).intl;
  intl16 = obj(1126).intl;
  intl17 = obj(1126).intl;
  intl18 = obj(1126).intl;
  intl19 = obj(1126).intl;
  const obj2 = { spacing: nativeDefault.space.PX_16, children: items };
  const Stack = obj(5600).Stack;
  const obj3 = { label: intl20.string(obj(1126).t.O20zQi), bytes: report.totalMeasuredBytes };
  intl20 = obj(1126).intl;
  items = [closure_6(closure_9, obj3), , ];
  const obj4 = obj(1369);
  let isIOSResult = obj4.isIOS();
  if (isIOSResult) {
    const obj5 = { label: intl21.string(obj(1126).t.VQKK5O), bytes: metricKitSize };
    intl21 = tmp(1126).intl;
    isIOSResult = closure_6(closure_9, obj5);
  }
  items[1] = isIOSResult;
  const Stack2 = tmp(5600).Stack;
  const obj6 = { variant: "heading-sm/semibold", children: intl22.string(obj(1126).t.CoudPr) };
  const Heading = tmp(4892).Heading;
  intl22 = tmp(1126).intl;
  const items1 = [closure_6(Heading, obj6), , ];
  const roots = report.roots;
  items1[1] = roots.map((root) => {
    root = root.root;
    let label = obj[root];
    const bytes = root.bytes;
    if (label == null) {
      label = root;
    }
    return metroRequire(closure_9, { label, bytes }, root);
  });
  const complete = report.complete;
  let tmp4Result = !complete;
  if (complete) {
    tmp4Result = report.errorCount > 0;
  }
  if (!tmp4Result) {
    tmp4Result = report.unmeasuredRootCount > 0;
  }
  if (tmp4Result) {
    const obj7 = { variant: "text-sm/normal", color: "text-feedback-warning", children: intl23.formatToPlainString(obj(1126).t.kt7tAT, obj14) };
    const Text = tmp(4892).Text;
    intl23 = tmp(1126).intl;
    obj14 = { errors: null, unavailable: null };
    ({ errorCount: obj8.errors, unmeasuredRootCount: obj8.unavailable } = report);
    tmp4Result = closure_6(Text, obj7);
  }
  items1[2] = tmp4Result;
  items[2] = closure_7(Stack2, { children: items1 });
  return closure_7(Stack, obj2);
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function CacheActionsDiskUsageSection(arg0) {
  let first;
  let intl;
  let intl2;
  let intl3;
  let items;
  let items1;
  let onDiagnosticsBusyChange;
  let state;
  let tmp10;
  let tmp7;
  const obj = react2;
  const cResult = obj.c(19);
  ({ state, onDiagnosticsBusyChange } = arg0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { variant: "heading-md/semibold", children: intl.string(intl24.t.m8BOpo) };
    const Heading = Text_Text.Heading;
    intl = intl24.intl;
    const tmp6 = metroRequire(Heading, obj2);
    cResult[0] = tmp6;
    first = tmp6;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== state.status) {
    let tmp8 = "loading" === state.status;
    if (tmp8) {
      const obj3 = { variant: "text-sm/normal", children: intl2.string(intl24.t.Ynmbie) };
      const Text = Text_Text.Text;
      intl2 = intl24.intl;
      tmp8 = metroRequire(Text, obj3);
    }
    cResult[1] = state.status;
    cResult[2] = tmp8;
    tmp7 = tmp8;
  } else {
    tmp7 = cResult[2];
  }
  if (cResult[3] !== state.status) {
    let tmp11 = "error" === state.status;
    if (tmp11) {
      const obj4 = { variant: "text-sm/normal", color: "text-feedback-critical", children: intl3.string(intl24.t["hj/3qI"]) };
      const Text2 = Text_Text.Text;
      intl3 = intl24.intl;
      tmp11 = metroRequire(Text2, obj4);
    }
    cResult[3] = state.status;
    cResult[4] = tmp11;
    tmp10 = tmp11;
  } else {
    tmp10 = cResult[4];
  }
  if (cResult[5] === state.metricKitSize) {
    if (cResult[6] === state.report) {
      let tmp13;
      if (cResult[7] === state.status) {
        tmp13 = cResult[8];
      }
      if (cResult[9] === tmp7) {
        if (cResult[10] === tmp10) {
          let tmp17;
          if (cResult[11] === tmp13) {
            tmp17 = cResult[12];
          }
          if (cResult[13] === onDiagnosticsBusyChange) {
            let tmp20;
            if (cResult[14] === state.status) {
              tmp20 = cResult[15];
            }
            if (cResult[16] === tmp17) {
              let tmp24;
              if (cResult[17] === tmp20) {
                tmp24 = cResult[18];
              }
              return tmp24;
            }
            const obj6 = { children: items };
            items = [first, tmp17, tmp20];
            const tmp26 = metroImportDefault(Stack_Stack.Stack, obj6);
            cResult[16] = tmp17;
            cResult[17] = tmp20;
            cResult[18] = tmp26;
            tmp24 = tmp26;
          }
          let isIOSResult = "success" === state.status;
          if (isIOSResult) {
            const tmpResult = PlatformUtils;
            isIOSResult = tmpResult.isIOS();
          }
          if (isIOSResult) {
            const obj7 = { onBusyChange: onDiagnosticsBusyChange };
            isIOSResult = metroRequire(CacheActionsStorageDiagnosticsDefault, obj7);
          }
          cResult[13] = onDiagnosticsBusyChange;
          cResult[14] = state.status;
          cResult[15] = isIOSResult;
          tmp20 = isIOSResult;
        }
      }
      const obj8 = { children: items1 };
      items1 = [tmp7, tmp10, tmp13];
      const tmp19 = metroImportDefault(Card_Card.Card, obj8);
      cResult[9] = tmp7;
      cResult[10] = tmp10;
      cResult[11] = tmp13;
      cResult[12] = tmp19;
      tmp17 = tmp19;
    }
  }
  let tmp14 = "success" === state.status;
  if (tmp14) {
    const obj9 = { report: null, metricKitSize: null };
    ({ report: obj5.report, metricKitSize: obj5.metricKitSize } = state);
    tmp14 = metroRequire(closure_10, obj9);
  }
  cResult[5] = state.metricKitSize;
  cResult[6] = state.report;
  cResult[7] = state.status;
  cResult[8] = tmp14;
  tmp13 = tmp14;
}) : (function CacheActionsDiskUsageSection(state) {
  let intl;
  let intl2;
  let intl3;
  state = state.state;
  const onDiagnosticsBusyChange = state.onDiagnosticsBusyChange;
  const Stack = Stack_Stack.Stack;
  const obj = { variant: "heading-md/semibold", children: intl.string(intl24.t.m8BOpo) };
  const Heading = Text_Text.Heading;
  intl = intl24.intl;
  const children = [metroRequire(Heading, obj), , ];
  let tmp4Result = "loading" === state.status;
  const Card = Card_Card.Card;
  if (tmp4Result) {
    const obj2 = { variant: "text-sm/normal", children: intl2.string(intl24.t.Ynmbie) };
    const Text = Text_Text.Text;
    intl2 = intl24.intl;
    tmp4Result = metroRequire(Text, obj2);
  }
  const items1 = [tmp4Result, , ];
  let tmp4Result3 = "error" === state.status;
  if (tmp4Result3) {
    const obj3 = { variant: "text-sm/normal", color: "text-feedback-critical", children: intl3.string(intl24.t["hj/3qI"]) };
    const Text2 = Text_Text.Text;
    intl3 = intl24.intl;
    tmp4Result3 = metroRequire(Text2, obj3);
  }
  items1[1] = tmp4Result3;
  let tmp4Result4 = "success" === state.status;
  if (tmp4Result4) {
    const obj5 = { report: null, metricKitSize: null };
    ({ report: obj4.report, metricKitSize: obj4.metricKitSize } = state);
    tmp4Result4 = metroRequire(closure_10, obj5);
  }
  items1[2] = tmp4Result4;
  children[1] = metroImportDefault(Card, { children: items1 });
  let isIOSResult = "success" === state.status;
  if (isIOSResult) {
    const tmp2Result = PlatformUtils;
    isIOSResult = tmp2Result.isIOS();
  }
  if (isIOSResult) {
    const obj6 = { onBusyChange: onDiagnosticsBusyChange };
    isIOSResult = metroRequire(CacheActionsStorageDiagnosticsDefault, obj6);
  }
  children[2] = isIOSResult;
  return metroImportDefault(Stack, { children });
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/CacheActionsDiskUsageSection.tsx");

export default tmp3;
export const useDiskUsageMeasurement = function useDiskUsageMeasurement() {
  let status;
  let tmp2;
  let obj = function _handleCalculateSize() {
    let ref;
    obj = _asyncToGenerator(async function() {
      let tmp30Result;
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        let c3;
        try {
          let closure_0;
          let report;
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              closure_0 = undefined;
              report = undefined;
              if (!ref.current) {
                const tmp30 = report;
                if (null != report(closure_2[5]).calculateSize) {
                  ref.current = true;
                  require({ status: "loading" });
                  c3 = 2;
                  c4 = 3;
                  c5 = 1;
                  const obj4 = { value: tmp30Result.calculateSize(), done: false };
                  tmp30Result = tmp30(closure_2[5]);
                  return obj4;
                }
              }
            }
          } else if (1 === c4) {
            c3 = 0;
            closure_129_1.current = false;
            throw closure_2;
          } else {
            if (2 === c4) {
              c3 = 1;
              closure_129_0({ status: "error" });
              const AccessibilityAnnouncer = closure_0(closure_2[6]).AccessibilityAnnouncer;
              const announce = AccessibilityAnnouncer.announce;
              const intl = closure_0(closure_2[7]).intl;
              announce(intl.string(closure_0(closure_2[7]).t["hj/3qI"]), "polite");
            } else if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              closure_129_1.current = false;
              c5 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              closure_0 = value;
              if (null == closure_0.report) {
                const _Error2 = Error;
                const self3 = this;
                const self4 = this;
                const error = new Error("Disk usage report was not returned");
                throw error;
              } else {
                const _JSON = JSON;
                report = JSON.parse(closure_0.report);
                let roots;
                const _Array = Array;
                if (report != null) {
                  roots = report.roots;
                }
                if (isArray(roots)) {
                  if (typeof report.totalMeasuredBytes === "number") {
                    const obj5 = { status: "success", report, metricKitSize: closure_0.metricKitSize };
                    closure_129_0(obj5);
                    const AccessibilityAnnouncer2 = closure_0(closure_2[6]).AccessibilityAnnouncer;
                    const announce2 = AccessibilityAnnouncer2.announce;
                    const intl2 = closure_0(closure_2[7]).intl;
                    announce2(intl2.string(closure_0(closure_2[7]).t["lzJM+Z"]), "polite");
                    c3 = 1;
                  }
                }
                const _Error = Error;
                const self = this;
                const self2 = this;
                const error1 = new Error("Unsupported disk usage report");
                throw error1;
              }
            }
            c3 = 0;
            closure_129_1.current = false;
          }
          c5 = 3;
          return { value: "IconComponent", done: null };
        } catch (tmp36) {
          closure_2 = tmp36;
          if (0 === c3) {
            c5 = 3;
            throw tmp36;
          } else if (1 === tmp38) {
            c4 = 1;
          } else {
            c4 = 2;
          }
        }
      }
    });
    return obj(...arguments);
  };
  const tmp = _slicedToArray(react.useState(null), 2);
  [tmp2, require] = tmp;
  let closure_1 = react.useRef(false);
  obj = {
    diskUsageState: tmp2,
    isCalculating: "loading" === status,
    handleCalculateSize() {
      return obj(...arguments);
    }
  };
  status = undefined;
  if (tmp2 != null) {
    status = tmp2.status;
  }
  return obj;
};