// === Module 15674: CacheActionsDiskUsageSection ===

// Module 15674 (CacheActionsDiskUsageSection)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import PlatformUtils from "PlatformUtils" /* 1381 */;
import Text_Text from "Text/Text" /* 5086 */;
import Stack_Stack from "Stack/Stack" /* 5373 */;
import FileSizeUtils from "FileSizeUtils" /* 5636 */;
import Card from "Card" /* 6186 */;
import CacheActionsStorageDiagnosticsDefault from "CacheActionsStorageDiagnostics" /* 15677 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7, Fragment: closure_8 } = jsxProd);
const createStyles = fn(5090);
let obj2 = { label: { flex: 1 }, nestedLabel: { flex: 1, paddingLeft: nativeDefault.space.PX_16 }, value: { flexShrink: 1 } };
let closure_9 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? (function SizeRow(arg0) {
  const cResult = c.c(11);
  ({ label, bytes, indented } = arg0);
  const iter = closure_9();
  const tmp5 = undefined !== indented && indented ? iter.nestedLabel : iter.label;
  if (cResult[0] === label) {
    if (cResult[1] === tmp5) {
      let tmp6 = cResult[2];
    }
    if (cResult[3] !== bytes) {
      if (null != bytes) {
        let formatKbSizeResult = FileSizeUtils.formatKbSize(bytes);
        const tmpResult = FileSizeUtils;
      } else {
        const intl = util.intl;
        formatKbSizeResult = intl.string(util.t.Yrz9rv);
      }
      cResult[3] = bytes;
      cResult[4] = formatKbSizeResult;
    } else {
      if (cResult[5] === iter.value) {
        if (cResult[6] === tmp8) {
          let tmp12 = cResult[7];
        }
        if (cResult[8] === tmp6) {
          if (cResult[9] === tmp12) {
            let tmp15 = cResult[10];
          }
          return tmp15;
        }
        const obj2 = { direction: "horizontal", justify: "space-between", spacing: nativeDefault.space.PX_16, children: null };
        const items = [tmp6, tmp12];
        obj2.children = items;
        const tmp18 = React5(Stack_Stack.Stack, obj2);
        cResult[8] = tmp6;
        cResult[9] = tmp12;
        cResult[10] = tmp18;
        tmp15 = tmp18;
      }
      const obj3 = { variant: "text-sm/semibold", tabularNumbers: true, style: iter.value, children: cResult[4] };
      const tmp14 = timestampProducer(Text_Text.Text, obj3);
      cResult[5] = iter.value;
      cResult[6] = cResult[4];
      cResult[7] = tmp14;
      tmp12 = tmp14;
    }
  }
  const tmp7 = timestampProducer(Text_Text.Text, { variant: "text-sm/normal", color: "text-subtle", style: tmp5, children: label });
  cResult[0] = label;
  cResult[1] = tmp5;
  cResult[2] = tmp7;
  tmp6 = tmp7;
  const tmp4 = undefined !== indented && indented;
}) : (function SizeRow(children) {
  ({ bytes, indented } = children);
  if (indented === undefined) {
    indented = false;
  }
  const iter = closure_9();
  const obj = { direction: "horizontal", justify: "space-between", spacing: nativeDefault.space.PX_16, children: null };
  const items = [timestampProducer(Text_Text.Text, { variant: "text-sm/normal", color: "text-subtle", style: indented ? iter.nestedLabel : iter.label, children: children.label }), ];
  const obj3 = { variant: "text-sm/semibold", tabularNumbers: true, style: iter.value, children: null };
  if (null != bytes) {
    let formatKbSizeResult = FileSizeUtils.formatKbSize(bytes);
    const tmp2Result = FileSizeUtils;
  } else {
    const intl = util.intl;
    formatKbSizeResult = intl.string(util.t.Yrz9rv);
  }
  obj3.children = formatKbSizeResult;
  items[1] = timestampProducer(Text_Text.Text, obj3);
  obj.children = items;
  return React5(Stack_Stack.Stack, obj);
});
ReactCompilerGating = fn(558);
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? (function DiskUsageResults(arg0) {
  const tmp2 = str;
  const cResult = kvDatabaseUsage(str[11]).c(25);
  ({ report, metricKitSize, kvDatabaseUsage } = arg0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let obj2 = { caches: null, files: null, databases: null, shared_preferences: null, no_backup: null, code_cache: null, external_files: null, external_caches: null, documents: null, tmp: null, application_support: null, webkit: null, library_other: null, container_other: null, app_group: null, share_extension: null, notification_service_extension: null, broadcast_upload_extension: null, lockscreen_widget_extension: null };
    let intl = kvDatabaseUsage(tmp2[9]).intl;
    obj2.caches = intl.string(kvDatabaseUsage(tmp2[9]).t["2CKnsF"]);
    let intl2 = kvDatabaseUsage(tmp2[9]).intl;
    obj2.files = intl2.string(kvDatabaseUsage(tmp2[9]).t["8Hvr3+"]);
    const intl3 = kvDatabaseUsage(tmp2[9]).intl;
    obj2.databases = intl3.string(kvDatabaseUsage(tmp2[9]).t["9paF2r"]);
    const intl4 = kvDatabaseUsage(tmp2[9]).intl;
    obj2.shared_preferences = intl4.string(kvDatabaseUsage(tmp2[9]).t["Y9/ijr"]);
    const intl5 = kvDatabaseUsage(tmp2[9]).intl;
    obj2.no_backup = intl5.string(kvDatabaseUsage(tmp2[9]).t["lZWCZ+"]);
    const intl6 = kvDatabaseUsage(tmp2[9]).intl;
    obj2.code_cache = intl6.string(kvDatabaseUsage(tmp2[9]).t.GN6kqM);
    const intl7 = kvDatabaseUsage(tmp2[9]).intl;
    obj2.external_files = intl7.string(kvDatabaseUsage(tmp2[9]).t["6Ej9W0"]);
    const intl8 = kvDatabaseUsage(tmp2[9]).intl;
    obj2.external_caches = intl8.string(kvDatabaseUsage(tmp2[9]).t.ZmaptE);
    const intl9 = kvDatabaseUsage(tmp2[9]).intl;
    obj2.documents = intl9.string(kvDatabaseUsage(tmp2[9]).t.aE3Wbw);
    const intl10 = kvDatabaseUsage(tmp2[9]).intl;
    obj2.tmp = intl10.string(kvDatabaseUsage(tmp2[9]).t.UQsNEK);
    const intl11 = kvDatabaseUsage(tmp2[9]).intl;
    obj2.application_support = intl11.string(kvDatabaseUsage(tmp2[9]).t.DGQvlY);
    const intl12 = kvDatabaseUsage(tmp2[9]).intl;
    obj2.webkit = intl12.string(kvDatabaseUsage(tmp2[9]).t.aIcsfw);
    const intl13 = kvDatabaseUsage(tmp2[9]).intl;
    obj2.library_other = intl13.string(kvDatabaseUsage(tmp2[9]).t.U2f1ef);
    const intl14 = kvDatabaseUsage(tmp2[9]).intl;
    obj2.container_other = intl14.string(kvDatabaseUsage(tmp2[9]).t.ZduI7f);
    const intl15 = kvDatabaseUsage(tmp2[9]).intl;
    obj2.app_group = intl15.string(kvDatabaseUsage(tmp2[9]).t.rManeQ);
    const intl16 = kvDatabaseUsage(tmp2[9]).intl;
    obj2.share_extension = intl16.string(kvDatabaseUsage(tmp2[9]).t.BEL9MJ);
    const intl17 = kvDatabaseUsage(tmp2[9]).intl;
    obj2.notification_service_extension = intl17.string(kvDatabaseUsage(tmp2[9]).t.V46Edz);
    const intl18 = kvDatabaseUsage(tmp2[9]).intl;
    obj2.broadcast_upload_extension = intl18.string(kvDatabaseUsage(tmp2[9]).t.BhYGtj);
    const intl19 = kvDatabaseUsage(tmp2[9]).intl;
    obj2.lockscreen_widget_extension = intl19.string(kvDatabaseUsage(tmp2[9]).t.toGFBn);
    cResult[0] = obj2;
    let first = obj2;
  } else {
    first = cResult[0];
  }
  let obj = kvDatabaseUsage(str[11]);
  str = "files";
  if (tmpResult.isIOS()) {
    str = "caches";
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const intl20 = kvDatabaseUsage(tmp2[9]).intl;
    const stringResult = intl20.string(kvDatabaseUsage(tmp2[9]).t.O20zQi);
    cResult[1] = stringResult;
    let tmp5 = stringResult;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] !== report.totalMeasuredBytes) {
    let obj3 = { label: tmp5, bytes: report.totalMeasuredBytes };
    const tmp10 = closure_6(closure_10, obj3);
    cResult[2] = report.totalMeasuredBytes;
    cResult[3] = tmp10;
    let tmp7 = tmp10;
  } else {
    tmp7 = cResult[3];
  }
  if (cResult[4] !== metricKitSize) {
    let isIOSResult = kvDatabaseUsage(tmp2[15]).isIOS();
    if (isIOSResult) {
      const obj4 = { label: null, bytes: null };
      const intl21 = kvDatabaseUsage(tmp2[9]).intl;
      obj4.label = intl21.string(kvDatabaseUsage(tmp2[9]).t.VQKK5O);
      obj4.bytes = metricKitSize;
      isIOSResult = closure_6(closure_10, obj4);
    }
    cResult[4] = metricKitSize;
    cResult[5] = isIOSResult;
    let tmp11 = isIOSResult;
    const tmpResult2 = kvDatabaseUsage(tmp2[15]);
  } else {
    tmp11 = cResult[5];
  }
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const obj5 = { variant: "heading-sm/semibold", children: null };
    const intl22 = kvDatabaseUsage(tmp2[9]).intl;
    obj5.children = intl22.string(kvDatabaseUsage(tmp2[9]).t.CoudPr);
    const tmp17 = closure_6(kvDatabaseUsage(tmp2[12]).Heading, obj5);
    cResult[6] = tmp17;
    let tmp15 = tmp17;
  } else {
    tmp15 = cResult[6];
  }
  let free;
  if (kvDatabaseUsage != null) {
    free = kvDatabaseUsage.free;
  }
  if (cResult[7] === free) {
    let total;
    if (kvDatabaseUsage != null) {
      total = kvDatabaseUsage.total;
    }
    if (cResult[8] === total) {
      if (cResult[9] === report.roots) {
        let tmp20 = cResult[10];
      }
      if (cResult[14] === report.complete) {
        if (cResult[15] === report.errorCount) {
          if (cResult[16] === report.unmeasuredRootCount) {
            let tmp29 = cResult[17];
          }
          if (cResult[18] === tmp20) {
            if (cResult[19] === tmp29) {
              let tmp32 = cResult[20];
            }
            if (cResult[21] === tmp7) {
              if (cResult[22] === tmp11) {
                if (cResult[23] === tmp32) {
                  let tmp35 = cResult[24];
                }
                return tmp35;
              }
            }
            const obj6 = { spacing: first(tmp2[5]).space.PX_16, children: null };
            const items = [tmp7, tmp11, tmp32];
            obj6.children = items;
            const tmp38 = closure_7(kvDatabaseUsage(tmp2[14]).Stack, obj6);
            cResult[21] = tmp7;
            cResult[22] = tmp11;
            cResult[23] = tmp32;
            cResult[24] = tmp38;
            tmp35 = tmp38;
          }
          const obj7 = { children: null };
          let items1 = [tmp15, tmp20, tmp29];
          obj7.children = items1;
          const tmp34 = closure_7(kvDatabaseUsage(tmp2[14]).Stack, obj7);
          cResult[18] = tmp20;
          cResult[19] = tmp29;
          cResult[20] = tmp34;
          tmp32 = tmp34;
        }
      }
      const complete = report.complete;
      let tmp30 = !complete;
      if (complete) {
        tmp30 = report.errorCount > 0;
      }
      if (!tmp30) {
        tmp30 = report.unmeasuredRootCount > 0;
      }
      if (tmp30) {
        const obj8 = { variant: "text-sm/normal", color: "text-feedback-warning", children: null };
        const intl23 = kvDatabaseUsage(tmp2[9]).intl;
        ({ errorCount: obj9.errors, unmeasuredRootCount: obj9.unavailable } = report);
        obj8.children = intl23.formatToPlainString(kvDatabaseUsage(tmp2[9]).t.kt7tAT, { errors: null, unavailable: null });
        tmp30 = closure_6(kvDatabaseUsage(tmp2[12]).Text, obj8);
        const obj10 = { errors: null, unavailable: null };
      }
      cResult[14] = report.complete;
      cResult[15] = report.errorCount;
      cResult[16] = report.unmeasuredRootCount;
      cResult[17] = tmp30;
      tmp29 = tmp30;
    }
  }
  let free1;
  if (kvDatabaseUsage != null) {
    free1 = kvDatabaseUsage.free;
  }
  if (cResult[11] === free1) {
    let total1;
    if (kvDatabaseUsage != null) {
      total1 = kvDatabaseUsage.total;
    }
    if (cResult[12] === total1) {
      let tmp23 = cResult[13];
    }
    const roots = report.roots;
    const mapped = roots.map(tmp23);
    let free2;
    if (kvDatabaseUsage != null) {
      free2 = kvDatabaseUsage.free;
    }
    cResult[7] = free2;
    let total2;
    if (kvDatabaseUsage != null) {
      total2 = kvDatabaseUsage.total;
    }
    cResult[8] = total2;
    cResult[9] = report.roots;
    cResult[10] = mapped;
    tmp20 = mapped;
  }
  let free3;
  if (kvDatabaseUsage != null) {
    free3 = kvDatabaseUsage.free;
  }
  cResult[11] = free3;
  let total3;
  if (kvDatabaseUsage != null) {
    total3 = kvDatabaseUsage.total;
  }
  const fn = function k(bytes) {
    const root = bytes.root;
    let tmp4 = first[root];
    if (tmp4 == null) {
      tmp4 = root;
    }
    const children = [timestampProducer(closure_10, { label: tmp4, bytes: bytes.bytes }), ];
    let tmpResult = root === str;
    if (tmpResult) {
      const obj = { label: null, bytes: null, indented: true };
      const intl = util.intl;
      obj.label = intl.string(util.t["He+1tx"]);
      let total;
      if (kvDatabaseUsage != null) {
        total = kvDatabaseUsage.total;
      }
      obj.bytes = total;
      const items1 = [timestampProducer(closure_10, obj), ];
      const obj2 = { label: null, bytes: null, indented: true };
      const intl2 = util.intl;
      obj2.label = intl2.string(util.t.UD3OKX);
      let free;
      if (kvDatabaseUsage != null) {
        free = kvDatabaseUsage.free;
      }
      const obj3 = { children: null };
      obj2.bytes = free;
      items1[1] = timestampProducer(closure_10, obj2);
      obj3.children = items1;
      tmpResult = React5(closure_2_8, obj3);
    }
    children[1] = tmpResult;
    return React5(noop.Fragment, { children }, root);
  };
  cResult[12] = total3;
  cResult[13] = fn;
  tmp23 = fn;
  tmpResult = kvDatabaseUsage(tmp2[15]);
}) : (function DiskUsageResults(metricKitSize) {
  ({ report, kvDatabaseUsage: require } = metricKitSize);
  let str;
  let obj = { caches: null, files: null, databases: null, shared_preferences: null, no_backup: null, code_cache: null, external_files: null, external_caches: null, documents: null, tmp: null, application_support: null, webkit: null, library_other: null, container_other: null, app_group: null, share_extension: null, notification_service_extension: null, broadcast_upload_extension: null, lockscreen_widget_extension: null };
  let intl = require("util").intl;
  obj.caches = intl.string(require("util").t["2CKnsF"]);
  let intl2 = require("util").intl;
  obj.files = intl2.string(require("util").t["8Hvr3+"]);
  const intl3 = require("util").intl;
  obj.databases = intl3.string(require("util").t["9paF2r"]);
  const intl4 = require("util").intl;
  obj.shared_preferences = intl4.string(require("util").t["Y9/ijr"]);
  const intl5 = require("util").intl;
  obj.no_backup = intl5.string(require("util").t["lZWCZ+"]);
  const intl6 = require("util").intl;
  obj.code_cache = intl6.string(require("util").t.GN6kqM);
  const intl7 = require("util").intl;
  obj.external_files = intl7.string(require("util").t["6Ej9W0"]);
  const intl8 = require("util").intl;
  obj.external_caches = intl8.string(require("util").t.ZmaptE);
  const intl9 = require("util").intl;
  obj.documents = intl9.string(require("util").t.aE3Wbw);
  const intl10 = require("util").intl;
  obj.tmp = intl10.string(require("util").t.UQsNEK);
  const intl11 = require("util").intl;
  obj.application_support = intl11.string(require("util").t.DGQvlY);
  const intl12 = require("util").intl;
  obj.webkit = intl12.string(require("util").t.aIcsfw);
  const intl13 = require("util").intl;
  obj.library_other = intl13.string(require("util").t.U2f1ef);
  const intl14 = require("util").intl;
  obj.container_other = intl14.string(require("util").t.ZduI7f);
  const intl15 = require("util").intl;
  obj.app_group = intl15.string(require("util").t.rManeQ);
  const intl16 = require("util").intl;
  obj.share_extension = intl16.string(require("util").t.BEL9MJ);
  const intl17 = require("util").intl;
  obj.notification_service_extension = intl17.string(require("util").t.V46Edz);
  const intl18 = require("util").intl;
  obj.broadcast_upload_extension = intl18.string(require("util").t.BhYGtj);
  const intl19 = require("util").intl;
  obj.lockscreen_widget_extension = intl19.string(require("util").t.toGFBn);
  str = "files";
  if (obj2.isIOS()) {
    str = "caches";
  }
  let obj3 = { spacing: obj(str[5]).space.PX_16, children: null };
  const obj4 = { label: null, bytes: null };
  const intl20 = require("util").intl;
  obj4.label = intl20.string(require("util").t.O20zQi);
  obj4.bytes = report.totalMeasuredBytes;
  const items = [closure_6(closure_10, obj4), , ];
  obj2 = require("PlatformUtils");
  let isIOSResult = require("PlatformUtils").isIOS();
  if (isIOSResult) {
    const obj5 = { label: null, bytes: null };
    const intl21 = require("util").intl;
    obj5.label = intl21.string(require("util").t.VQKK5O);
    obj5.bytes = metricKitSize.metricKitSize;
    isIOSResult = closure_6(closure_10, obj5);
  }
  items[1] = isIOSResult;
  const obj6 = { variant: "heading-sm/semibold", children: null };
  const intl22 = require("util").intl;
  obj6.children = intl22.string(require("util").t.CoudPr);
  let items1 = [closure_6(require("Text/Text").Heading, obj6), , ];
  const roots = report.roots;
  items1[1] = roots.map((bytes) => {
    const root = bytes.root;
    let tmp4 = obj[root];
    if (tmp4 == null) {
      tmp4 = root;
    }
    const children = [timestampProducer(closure_10, { label: tmp4, bytes: bytes.bytes }), ];
    let tmpResult = root === str;
    if (tmpResult) {
      obj = { label: null, bytes: null, indented: true };
      const intl = util.intl;
      obj.label = intl.string(util.t["He+1tx"]);
      let total;
      if (_require != null) {
        total = _require.total;
      }
      obj.bytes = total;
      const items1 = [timestampProducer(closure_10, obj), ];
      const obj2 = { label: null, bytes: null, indented: true };
      const intl2 = util.intl;
      obj2.label = intl2.string(util.t.UD3OKX);
      let free;
      if (_require != null) {
        free = _require.free;
      }
      const obj3 = { children: null };
      obj2.bytes = free;
      items1[1] = timestampProducer(closure_10, obj2);
      obj3.children = items1;
      tmpResult = React5(closure_2_8, obj3);
    }
    children[1] = tmpResult;
    return React5(noop.Fragment, { children }, root);
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
    const obj7 = { variant: "text-sm/normal", color: "text-feedback-warning", children: null };
    const intl23 = require("util").intl;
    ({ errorCount: obj9.errors, unmeasuredRootCount: obj9.unavailable } = report);
    obj7.children = intl23.formatToPlainString(require("util").t.kt7tAT, { errors: null, unavailable: null });
    tmp4Result = closure_6(require("Text/Text").Text, obj7);
    const obj8 = { errors: null, unavailable: null };
  }
  items1[2] = tmp4Result;
  items[2] = closure_7(require("Stack/Stack").Stack, { children: items1 });
  obj3.children = items;
  return closure_7(require("Stack/Stack").Stack, obj3);
});
ReactCompilerGating = fn(558);
let obj3 = { flex: 1, paddingLeft: nativeDefault.space.PX_16 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/CacheActionsDiskUsageSection.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function CacheActionsDiskUsageSection(arg0) {
  const cResult = c.c(20);
  ({ state, onDiagnosticsBusyChange } = arg0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { variant: "heading-md/semibold", children: null };
    const intl = util.intl;
    obj2.children = intl.string(util.t.m8BOpo);
    const tmp6 = timestampProducer(Text_Text.Heading, obj2);
    cResult[0] = tmp6;
    let first = tmp6;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== state.status) {
    let tmp8 = "loading" === state.status;
    if (tmp8) {
      const obj3 = { variant: "text-sm/normal", children: null };
      const intl2 = util.intl;
      obj3.children = intl2.string(util.t.Ynmbie);
      tmp8 = timestampProducer(Text_Text.Text, obj3);
    }
    cResult[1] = state.status;
    cResult[2] = tmp8;
    let tmp7 = tmp8;
  } else {
    tmp7 = cResult[2];
  }
  if (cResult[3] !== state.status) {
    let tmp11 = "error" === state.status;
    if (tmp11) {
      const obj4 = { variant: "text-sm/normal", color: "text-feedback-critical", children: null };
      const intl3 = util.intl;
      obj4.children = intl3.string(util.t["hj/3qI"]);
      tmp11 = timestampProducer(Text_Text.Text, obj4);
    }
    cResult[3] = state.status;
    cResult[4] = tmp11;
    let tmp10 = tmp11;
  } else {
    tmp10 = cResult[4];
  }
  if (cResult[5] === state.kvDatabaseUsage) {
    if (cResult[6] === state.metricKitSize) {
      if (cResult[7] === state.report) {
        if (cResult[8] === state.status) {
          let tmp13 = cResult[9];
        }
        if (cResult[10] === tmp7) {
          if (cResult[11] === tmp10) {
            if (cResult[12] === tmp13) {
              let tmp17 = cResult[13];
            }
            if (cResult[14] === onDiagnosticsBusyChange) {
              if (cResult[15] === state.status) {
                let tmp20 = cResult[16];
              }
              if (cResult[17] === tmp17) {
                if (cResult[18] === tmp20) {
                  let tmp24 = cResult[19];
                }
                return tmp24;
              }
              const obj6 = { children: null };
              const items = [first, tmp17, tmp20];
              obj6.children = items;
              const tmp26 = React5(Stack_Stack.Stack, obj6);
              cResult[17] = tmp17;
              cResult[18] = tmp20;
              cResult[19] = tmp26;
              tmp24 = tmp26;
            }
            let isIOSResult = "success" === state.status;
            if (isIOSResult) {
              isIOSResult = PlatformUtils.isIOS();
              const tmpResult = PlatformUtils;
            }
            if (isIOSResult) {
              const obj7 = { onBusyChange: onDiagnosticsBusyChange };
              isIOSResult = timestampProducer(CacheActionsStorageDiagnosticsDefault, obj7);
            }
            cResult[14] = onDiagnosticsBusyChange;
            cResult[15] = state.status;
            cResult[16] = isIOSResult;
            tmp20 = isIOSResult;
          }
        }
        const obj8 = { children: null };
        const items1 = [tmp7, tmp10, tmp13];
        obj8.children = items1;
        const tmp19 = React5(Card.Card, obj8);
        cResult[10] = tmp7;
        cResult[11] = tmp10;
        cResult[12] = tmp13;
        cResult[13] = tmp19;
        tmp17 = tmp19;
      }
    }
  }
  let tmp14 = "success" === state.status;
  if (tmp14) {
    ({ report: obj5.report, metricKitSize: obj5.metricKitSize, kvDatabaseUsage: obj5.kvDatabaseUsage } = state);
    tmp14 = timestampProducer(closure_11, { report: null, metricKitSize: null, kvDatabaseUsage: null });
    const obj9 = { report: null, metricKitSize: null, kvDatabaseUsage: null };
  }
  cResult[5] = state.kvDatabaseUsage;
  cResult[6] = state.metricKitSize;
  cResult[7] = state.report;
  cResult[8] = state.status;
  cResult[9] = tmp14;
  tmp13 = tmp14;
}) : (function CacheActionsDiskUsageSection(state) {
  state = state.state;
  const obj = { variant: "heading-md/semibold", children: null };
  const intl = util.intl;
  obj.children = intl.string(util.t.m8BOpo);
  const children = [timestampProducer(Text_Text.Heading, obj), , ];
  let tmp4Result = "loading" === state.status;
  if (tmp4Result) {
    const obj2 = { variant: "text-sm/normal", children: null };
    const intl2 = util.intl;
    obj2.children = intl2.string(util.t.Ynmbie);
    tmp4Result = timestampProducer(Text_Text.Text, obj2);
  }
  const items1 = [tmp4Result, , ];
  let tmp4Result3 = "error" === state.status;
  if (tmp4Result3) {
    const obj3 = { variant: "text-sm/normal", color: "text-feedback-critical", children: null };
    const intl3 = util.intl;
    obj3.children = intl3.string(util.t["hj/3qI"]);
    tmp4Result3 = timestampProducer(Text_Text.Text, obj3);
  }
  items1[1] = tmp4Result3;
  let tmp4Result4 = "success" === state.status;
  if (tmp4Result4) {
    ({ report: obj4.report, metricKitSize: obj4.metricKitSize, kvDatabaseUsage: obj4.kvDatabaseUsage } = state);
    tmp4Result4 = timestampProducer(closure_11, { report: null, metricKitSize: null, kvDatabaseUsage: null });
    const obj5 = { report: null, metricKitSize: null, kvDatabaseUsage: null };
  }
  items1[2] = tmp4Result4;
  children[1] = React5(Card.Card, { children: items1 });
  let isIOSResult = "success" === state.status;
  if (isIOSResult) {
    isIOSResult = PlatformUtils.isIOS();
    const tmp2Result = PlatformUtils;
  }
  if (isIOSResult) {
    const obj6 = { onBusyChange: state.onDiagnosticsBusyChange };
    isIOSResult = timestampProducer(CacheActionsStorageDiagnosticsDefault, obj6);
  }
  children[2] = isIOSResult;
  return React5(Stack_Stack.Stack, { children });
});
export const useDiskUsageMeasurement = function useDiskUsageMeasurement() {
  closure_2 = async function _handleCalculateSize() {
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp7 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        c5 = 2;
        if (0 === v3) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_0 = tmp8;
            closure_128_0 = undefined;
            closure_128_1 = undefined;
            closure_128_2 = undefined;
            closure_128_3 = undefined;
            closure_128_4 = undefined;
            if (!ref.current) {
              if (null != tmp4(tmp51[6]).calculateSize) {
                ref.current = true;
                _require({ status: "loading" });
                c3 = 2;
                const items = [tmp4(tmp51[6]).calculateSize(), ];
                const tmp48Result = tmp4(tmp51[6]);
                const databaseResult = tmp4(tmp51[7]).database();
                let catchPromise;
                if (databaseResult != null) {
                  catchPromise = databaseResult.fsInfo().catch(() => null);
                  const fsInfoResult = databaseResult.fsInfo();
                }
                items[1] = catchPromise;
                v3 = 3;
                c5 = 1;
                const obj4 = { value: Promise.all(items), done: false };
                return obj4;
              }
            }
            c5 = 3;
          }
        } else if (1 !== tmp8) {
          if (2 === tmp8) {
            c3 = 1;
            closure_129_0({ status: "error" });
            const AccessibilityAnnouncer2 = closure_0(tmp51[8]).AccessibilityAnnouncer;
            const intl2 = closure_0(tmp51[9]).intl;
            AccessibilityAnnouncer2.announce(intl2.string(closure_0(tmp51[9]).t["hj/3qI"]), "polite");
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            closure_129_1.current = false;
            c5 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            closure_128_0 = value;
            closure_128_1 = v3(closure_128_0, 2);
            closure_128_2 = closure_128_1[0];
            closure_128_3 = closure_128_1[1];
            if (null == closure_128_2.report) {
              const _Error2 = Error;
              const error = new Error("Disk usage report was not returned");
              throw error;
            } else {
              const _JSON = JSON;
              closure_128_4 = JSON.parse(closure_128_2.report);
              let roots;
              if (closure_128_4 != null) {
                roots = closure_128_4.roots;
              }
              if (Array.isArray(roots)) {
                if (typeof closure_128_4.totalMeasuredBytes === "number") {
                  const obj5 = { status: "success", report: closure_128_4, metricKitSize: closure_128_2.metricKitSize, kvDatabaseUsage: null };
                  let database;
                  if (closure_128_3 != null) {
                    database = closure_128_3.database;
                  }
                  obj5.kvDatabaseUsage = database;
                  closure_129_0(obj5);
                  const AccessibilityAnnouncer = closure_0(tmp51[8]).AccessibilityAnnouncer;
                  const intl = closure_0(tmp51[9]).intl;
                  AccessibilityAnnouncer.announce(intl.string(closure_0(tmp51[9]).t["lzJM+Z"]), "polite");
                  c3 = 1;
                }
              }
              const _Error = Error;
              const error1 = new Error("Unsupported disk usage report");
              throw error1;
            }
          }
          c3 = 0;
          closure_129_1.current = false;
        }
        c3 = 0;
        closure_129_1.current = false;
        throw tmp51;
      } catch (tmp51) {
        if (tmp5 === c3) {
          c5 = tmp3;
          throw tmp51;
        } else if (tmp2 === tmp53) {
          v3 = tmp2;
        } else {
          v3 = tmp;
        }
      }
    }
  };
  [tmp2, require] = noop.useState(null);
  closure_1 = noop.useRef(false);
  let obj = { diskUsageState: tmp2, isCalculating: null, handleCalculateSize: null };
  let status;
  if (tmp2 != null) {
    status = tmp2.status;
  }
  obj.isCalculating = "loading" === status;
  obj.handleCalculateSize = function handleCalculateSize() {
    const self = this;
    const apply = closure_2.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  };
  return obj;
};