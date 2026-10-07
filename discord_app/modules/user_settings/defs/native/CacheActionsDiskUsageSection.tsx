// discord_app/modules/user_settings/defs/native/CacheActionsDiskUsageSection.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import PlatformUtils from "../../../../utils/PlatformUtils.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import FileSizeUtils from "../../../../utils/FileSizeUtils.tsx";
import Stack_Stack from "../../../../design/components/Stack/native/Stack.native.tsx";
import Card from "../../../../design/components/Card/native/Card.native.tsx";
import CacheActionsStorageDiagnosticsDefault from "CacheActionsStorageDiagnostics.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4896);
let closure_8 = createStyles.createStyles({ label: { flex: 1 }, value: { flexShrink: 1 } });
let ReactCompilerGating = fn(558);
let closure_9 = ReactCompilerGating.isReactCompilerEnabled()
  ? function SizeRow(arg0) {
      const cResult = c.c(11);
      ({ label, bytes } = arg0);
      const iter = closure_8();
      if (cResult[0] === label) {
        if (cResult[1] === iter.label) {
          let tmp4 = cResult[2];
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
            if (cResult[6] === tmp6) {
              let tmp10 = cResult[7];
            }
            if (cResult[8] === tmp4) {
              if (cResult[9] === tmp10) {
                let tmp13 = cResult[10];
              }
              return tmp13;
            }
            const obj2 = {
              direction: "horizontal",
              justify: "space-between",
              spacing: nativeDefault.space.PX_16,
              children: null,
            };
            const items = [tmp4, tmp10];
            obj2.children = items;
            const tmp16 = React5(Stack_Stack.Stack, obj2);
            cResult[8] = tmp4;
            cResult[9] = tmp10;
            cResult[10] = tmp16;
            tmp13 = tmp16;
          }
          const obj3 = { variant: "text-sm/semibold", tabularNumbers: true, style: iter.value, children: cResult[4] };
          const tmp12 = timestampProducer(Text_Text.Text, obj3);
          cResult[5] = iter.value;
          cResult[6] = cResult[4];
          cResult[7] = tmp12;
          tmp10 = tmp12;
        }
      }
      const tmp5 = timestampProducer(Text_Text.Text, {
        variant: "text-sm/normal",
        color: "text-subtle",
        style: iter.label,
        children: label,
      });
      cResult[0] = label;
      cResult[1] = iter.label;
      cResult[2] = tmp5;
      tmp4 = tmp5;
      const obj4 = { variant: "text-sm/normal", color: "text-subtle", style: iter.label, children: label };
    }
  : function SizeRow(bytes) {
      bytes = bytes.bytes;
      const iter = closure_8();
      const obj = {
        direction: "horizontal",
        justify: "space-between",
        spacing: nativeDefault.space.PX_16,
        children: null,
      };
      const items = [
        timestampProducer(Text_Text.Text, {
          variant: "text-sm/normal",
          color: "text-subtle",
          style: iter.label,
          children: bytes.label,
        }),
      ];
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
    };
ReactCompilerGating = fn(558);
let closure_10 = ReactCompilerGating.isReactCompilerEnabled()
  ? function DiskUsageResults(arg0) {
      const tmp = first;
      const cResult = first(576).c(21);
      ({ report, metricKitSize } = arg0);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = {
          caches: null,
          files: null,
          databases: null,
          shared_preferences: null,
          no_backup: null,
          code_cache: null,
          external_files: null,
          external_caches: null,
          documents: null,
          tmp: null,
          application_support: null,
          webkit: null,
          library_other: null,
          container_other: null,
          app_group: null,
          share_extension: null,
          notification_service_extension: null,
          broadcast_upload_extension: null,
          lockscreen_widget_extension: null,
        };
        const intl = tmp(1126).intl;
        obj2.caches = intl.string(tmp(1126).t["2CKnsF"]);
        const intl2 = tmp(1126).intl;
        obj2.files = intl2.string(tmp(1126).t["8Hvr3+"]);
        const intl3 = tmp(1126).intl;
        obj2.databases = intl3.string(tmp(1126).t["9paF2r"]);
        const intl4 = tmp(1126).intl;
        obj2.shared_preferences = intl4.string(tmp(1126).t["Y9/ijr"]);
        const intl5 = tmp(1126).intl;
        obj2.no_backup = intl5.string(tmp(1126).t["lZWCZ+"]);
        const intl6 = tmp(1126).intl;
        obj2.code_cache = intl6.string(tmp(1126).t.GN6kqM);
        const intl7 = tmp(1126).intl;
        obj2.external_files = intl7.string(tmp(1126).t["6Ej9W0"]);
        const intl8 = tmp(1126).intl;
        obj2.external_caches = intl8.string(tmp(1126).t.ZmaptE);
        const intl9 = tmp(1126).intl;
        obj2.documents = intl9.string(tmp(1126).t.aE3Wbw);
        const intl10 = tmp(1126).intl;
        obj2.tmp = intl10.string(tmp(1126).t.UQsNEK);
        const intl11 = tmp(1126).intl;
        obj2.application_support = intl11.string(tmp(1126).t.DGQvlY);
        const intl12 = tmp(1126).intl;
        obj2.webkit = intl12.string(tmp(1126).t.aIcsfw);
        const intl13 = tmp(1126).intl;
        obj2.library_other = intl13.string(tmp(1126).t.U2f1ef);
        const intl14 = tmp(1126).intl;
        obj2.container_other = intl14.string(tmp(1126).t.ZduI7f);
        const intl15 = tmp(1126).intl;
        obj2.app_group = intl15.string(tmp(1126).t.rManeQ);
        const intl16 = tmp(1126).intl;
        obj2.share_extension = intl16.string(tmp(1126).t.BEL9MJ);
        const intl17 = tmp(1126).intl;
        obj2.notification_service_extension = intl17.string(tmp(1126).t.V46Edz);
        const intl18 = tmp(1126).intl;
        obj2.broadcast_upload_extension = intl18.string(tmp(1126).t.BhYGtj);
        const intl19 = tmp(1126).intl;
        obj2.lockscreen_widget_extension = intl19.string(tmp(1126).t.toGFBn);
        cResult[0] = obj2;
        first = obj2;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const intl20 = tmp(1126).intl;
        const stringResult = intl20.string(tmp(1126).t.O20zQi);
        cResult[1] = stringResult;
        let tmp5 = stringResult;
      } else {
        tmp5 = cResult[1];
      }
      if (cResult[2] !== report.totalMeasuredBytes) {
        const obj3 = { label: tmp5, bytes: report.totalMeasuredBytes };
        const tmp10 = closure_6(closure_9, obj3);
        cResult[2] = report.totalMeasuredBytes;
        cResult[3] = tmp10;
        let tmp7 = tmp10;
      } else {
        tmp7 = cResult[3];
      }
      if (cResult[4] !== metricKitSize) {
        let isIOSResult = tmp(1369).isIOS();
        if (isIOSResult) {
          const obj4 = { label: null, bytes: null };
          const intl21 = tmp(1126).intl;
          obj4.label = intl21.string(tmp(1126).t.VQKK5O);
          obj4.bytes = metricKitSize;
          isIOSResult = closure_6(closure_9, obj4);
        }
        cResult[4] = metricKitSize;
        cResult[5] = isIOSResult;
        let tmp11 = isIOSResult;
        const tmpResult = tmp(1369);
      } else {
        tmp11 = cResult[5];
      }
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        const obj5 = { variant: "heading-sm/semibold", children: null };
        const intl22 = tmp(1126).intl;
        obj5.children = intl22.string(tmp(1126).t.CoudPr);
        const tmp17 = closure_6(tmp(4892).Heading, obj5);
        cResult[6] = tmp17;
        let tmp15 = tmp17;
      } else {
        tmp15 = cResult[6];
      }
      if (cResult[7] !== report.roots) {
        const _Symbol = Symbol;
        if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
          const fn = function y(bytes) {
            const root = bytes.root;
            let label = first[root];
            if (label == null) {
              label = root;
            }
            return timestampProducer(closure_9, { label, bytes: bytes.bytes }, root);
          };
          cResult[9] = fn;
          let tmp19 = fn;
        } else {
          tmp19 = cResult[9];
        }
        const roots = report.roots;
        const mapped = roots.map(tmp19);
        cResult[7] = report.roots;
        cResult[8] = mapped;
      } else {
        if (cResult[10] === report.complete) {
          if (cResult[11] === report.errorCount) {
            if (cResult[12] === report.unmeasuredRootCount) {
              let tmp22 = cResult[13];
            }
            if (cResult[14] === tmp18) {
              if (cResult[15] === tmp22) {
                let tmp25 = cResult[16];
              }
              if (cResult[17] === tmp7) {
                if (cResult[18] === tmp11) {
                  if (cResult[19] === tmp25) {
                    let tmp28 = cResult[20];
                  }
                  return tmp28;
                }
              }
              const obj6 = { spacing: nativeDefault.space.PX_16, children: null };
              const items = [tmp7, tmp11, tmp25];
              obj6.children = items;
              const tmp31 = closure_7(tmp(5600).Stack, obj6);
              cResult[17] = tmp7;
              cResult[18] = tmp11;
              cResult[19] = tmp25;
              cResult[20] = tmp31;
              tmp28 = tmp31;
            }
            const obj7 = { children: null };
            const items1 = [tmp15, tmp18, tmp22];
            obj7.children = items1;
            const tmp27 = closure_7(tmp(5600).Stack, obj7);
            cResult[14] = tmp18;
            cResult[15] = tmp22;
            cResult[16] = tmp27;
            tmp25 = tmp27;
          }
        }
        const complete = report.complete;
        let tmp23 = !complete;
        if (complete) {
          tmp23 = report.errorCount > 0;
        }
        if (!tmp23) {
          tmp23 = report.unmeasuredRootCount > 0;
        }
        if (tmp23) {
          const obj9 = { variant: "text-sm/normal", color: "text-feedback-warning", children: null };
          const intl23 = tmp(1126).intl;
          ({ errorCount: obj8.errors, unmeasuredRootCount: obj8.unavailable } = report);
          obj9.children = intl23.formatToPlainString(tmp(1126).t.kt7tAT, { errors: null, unavailable: null });
          tmp23 = closure_6(tmp(4892).Text, obj9);
          const obj10 = { errors: null, unavailable: null };
        }
        cResult[10] = report.complete;
        cResult[11] = report.errorCount;
        cResult[12] = report.unmeasuredRootCount;
        cResult[13] = tmp23;
        tmp22 = tmp23;
      }
      const obj = first(576);
    }
  : function DiskUsageResults(report) {
      report = report.report;
      const obj = {
        caches: null,
        files: null,
        databases: null,
        shared_preferences: null,
        no_backup: null,
        code_cache: null,
        external_files: null,
        external_caches: null,
        documents: null,
        tmp: null,
        application_support: null,
        webkit: null,
        library_other: null,
        container_other: null,
        app_group: null,
        share_extension: null,
        notification_service_extension: null,
        broadcast_upload_extension: null,
        lockscreen_widget_extension: null,
      };
      const intl = obj(1126).intl;
      obj.caches = intl.string(obj(1126).t["2CKnsF"]);
      const intl2 = obj(1126).intl;
      obj.files = intl2.string(obj(1126).t["8Hvr3+"]);
      const intl3 = obj(1126).intl;
      obj.databases = intl3.string(obj(1126).t["9paF2r"]);
      const intl4 = obj(1126).intl;
      obj.shared_preferences = intl4.string(obj(1126).t["Y9/ijr"]);
      const intl5 = obj(1126).intl;
      obj.no_backup = intl5.string(obj(1126).t["lZWCZ+"]);
      const intl6 = obj(1126).intl;
      obj.code_cache = intl6.string(obj(1126).t.GN6kqM);
      const intl7 = obj(1126).intl;
      obj.external_files = intl7.string(obj(1126).t["6Ej9W0"]);
      const intl8 = obj(1126).intl;
      obj.external_caches = intl8.string(obj(1126).t.ZmaptE);
      const intl9 = obj(1126).intl;
      obj.documents = intl9.string(obj(1126).t.aE3Wbw);
      const intl10 = obj(1126).intl;
      obj.tmp = intl10.string(obj(1126).t.UQsNEK);
      const intl11 = obj(1126).intl;
      obj.application_support = intl11.string(obj(1126).t.DGQvlY);
      const intl12 = obj(1126).intl;
      obj.webkit = intl12.string(obj(1126).t.aIcsfw);
      const intl13 = obj(1126).intl;
      obj.library_other = intl13.string(obj(1126).t.U2f1ef);
      const intl14 = obj(1126).intl;
      obj.container_other = intl14.string(obj(1126).t.ZduI7f);
      const intl15 = obj(1126).intl;
      obj.app_group = intl15.string(obj(1126).t.rManeQ);
      const intl16 = obj(1126).intl;
      obj.share_extension = intl16.string(obj(1126).t.BEL9MJ);
      const intl17 = obj(1126).intl;
      obj.notification_service_extension = intl17.string(obj(1126).t.V46Edz);
      const intl18 = obj(1126).intl;
      obj.broadcast_upload_extension = intl18.string(obj(1126).t.BhYGtj);
      const intl19 = obj(1126).intl;
      obj.lockscreen_widget_extension = intl19.string(obj(1126).t.toGFBn);
      const obj2 = { spacing: nativeDefault.space.PX_16, children: null };
      const obj3 = { label: null, bytes: null };
      const intl20 = obj(1126).intl;
      obj3.label = intl20.string(obj(1126).t.O20zQi);
      obj3.bytes = report.totalMeasuredBytes;
      const items = [closure_6(closure_9, obj3), ,];
      let isIOSResult = obj(1369).isIOS();
      if (isIOSResult) {
        const obj5 = { label: null, bytes: null };
        const intl21 = tmp(1126).intl;
        obj5.label = intl21.string(tmp(1126).t.VQKK5O);
        obj5.bytes = report.metricKitSize;
        isIOSResult = closure_6(closure_9, obj5);
      }
      items[1] = isIOSResult;
      const obj6 = { variant: "heading-sm/semibold", children: null };
      const intl22 = tmp(1126).intl;
      obj6.children = intl22.string(obj(1126).t.CoudPr);
      const items1 = [closure_6(obj(4892).Heading, obj6), ,];
      const roots = report.roots;
      items1[1] = roots.map((bytes) => {
        const root = bytes.root;
        let label = obj[root];
        if (label == null) {
          label = root;
        }
        return timestampProducer(closure_9, { label, bytes: bytes.bytes }, root);
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
        const intl23 = tmp(1126).intl;
        ({ errorCount: obj8.errors, unmeasuredRootCount: obj8.unavailable } = report);
        obj7.children = intl23.formatToPlainString(tmp(1126).t.kt7tAT, { errors: null, unavailable: null });
        tmp4Result = closure_6(tmp(4892).Text, obj7);
        const obj14 = { errors: null, unavailable: null };
      }
      items1[2] = tmp4Result;
      items[2] = closure_7(obj(5600).Stack, { children: items1 });
      obj2.children = items;
      return closure_7(obj(5600).Stack, obj2);
    };
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/CacheActionsDiskUsageSection.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function CacheActionsDiskUsageSection(arg0) {
      const cResult = c.c(19);
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
      if (cResult[5] === state.metricKitSize) {
        if (cResult[6] === state.report) {
          if (cResult[7] === state.status) {
            let tmp13 = cResult[8];
          }
          if (cResult[9] === tmp7) {
            if (cResult[10] === tmp10) {
              if (cResult[11] === tmp13) {
                let tmp17 = cResult[12];
              }
              if (cResult[13] === onDiagnosticsBusyChange) {
                if (cResult[14] === state.status) {
                  let tmp20 = cResult[15];
                }
                if (cResult[16] === tmp17) {
                  if (cResult[17] === tmp20) {
                    let tmp24 = cResult[18];
                  }
                  return tmp24;
                }
                const obj6 = { children: null };
                const items = [first, tmp17, tmp20];
                obj6.children = items;
                const tmp26 = React5(Stack_Stack.Stack, obj6);
                cResult[16] = tmp17;
                cResult[17] = tmp20;
                cResult[18] = tmp26;
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
              cResult[13] = onDiagnosticsBusyChange;
              cResult[14] = state.status;
              cResult[15] = isIOSResult;
              tmp20 = isIOSResult;
            }
          }
          const obj8 = { children: null };
          const items1 = [tmp7, tmp10, tmp13];
          obj8.children = items1;
          const tmp19 = React5(Card.Card, obj8);
          cResult[9] = tmp7;
          cResult[10] = tmp10;
          cResult[11] = tmp13;
          cResult[12] = tmp19;
          tmp17 = tmp19;
        }
      }
      let tmp14 = "success" === state.status;
      if (tmp14) {
        ({ report: obj5.report, metricKitSize: obj5.metricKitSize } = state);
        tmp14 = timestampProducer(closure_10, { report: null, metricKitSize: null });
        const obj9 = { report: null, metricKitSize: null };
      }
      cResult[5] = state.metricKitSize;
      cResult[6] = state.report;
      cResult[7] = state.status;
      cResult[8] = tmp14;
      tmp13 = tmp14;
    }
  : function CacheActionsDiskUsageSection(state) {
      state = state.state;
      const obj = { variant: "heading-md/semibold", children: null };
      const intl = util.intl;
      obj.children = intl.string(util.t.m8BOpo);
      const children = [timestampProducer(Text_Text.Heading, obj), ,];
      let tmp4Result = "loading" === state.status;
      if (tmp4Result) {
        const obj2 = { variant: "text-sm/normal", children: null };
        const intl2 = util.intl;
        obj2.children = intl2.string(util.t.Ynmbie);
        tmp4Result = timestampProducer(Text_Text.Text, obj2);
      }
      const items1 = [tmp4Result, ,];
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
        ({ report: obj4.report, metricKitSize: obj4.metricKitSize } = state);
        tmp4Result4 = timestampProducer(closure_10, { report: null, metricKitSize: null });
        const obj5 = { report: null, metricKitSize: null };
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
    };
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
        if (0 === c4) {
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
            if (!ref.current) {
              if (null != tmp4(tmp44[5]).calculateSize) {
                ref.current = true;
                _require({ status: "loading" });
                c3 = 2;
                c4 = 3;
                c5 = 1;
                const obj4 = { value: tmp4(tmp44[5]).calculateSize(), done: false };
                return obj4;
              }
            }
            c5 = 3;
          }
        } else if (1 !== tmp8) {
          if (2 === tmp8) {
            c3 = 1;
            closure_129_0({ status: "error" });
            const AccessibilityAnnouncer = closure_0(tmp44[6]).AccessibilityAnnouncer;
            const intl = closure_0(tmp44[7]).intl;
            AccessibilityAnnouncer.announce(intl.string(closure_0(tmp44[7]).t["hj/3qI"]), "polite");
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
            if (null == closure_128_0.report) {
              const _Error2 = Error;
              const error = new Error("Disk usage report was not returned");
              throw error;
            } else {
              const _JSON = JSON;
              closure_128_1 = JSON.parse(closure_128_0.report);
              let roots;
              if (closure_128_1 != null) {
                roots = closure_128_1.roots;
              }
              if (Array.isArray(roots)) {
                if (typeof closure_128_1.totalMeasuredBytes === "number") {
                  const obj5 = { status: "success", report: closure_128_1, metricKitSize: closure_128_0.metricKitSize };
                  closure_129_0(obj5);
                  const AccessibilityAnnouncer2 = closure_0(tmp44[6]).AccessibilityAnnouncer;
                  const intl2 = closure_0(tmp44[7]).intl;
                  AccessibilityAnnouncer2.announce(intl2.string(closure_0(tmp44[7]).t["lzJM+Z"]), "polite");
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
        throw tmp44;
      } catch (tmp44) {
        if (tmp5 === c3) {
          c5 = tmp3;
          throw tmp44;
        } else if (tmp2 === tmp46) {
          c4 = tmp2;
        } else {
          c4 = tmp;
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
