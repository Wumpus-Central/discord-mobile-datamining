// discord_app/modules/user_settings/defs/native/CacheActionsDiskUsageSection.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import FileSizeUtils from "../../../../utils/FileSizeUtils.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import Stack_Stack from "../../../../design/components/Stack/native/Stack.native.tsx";
import Card from "../../../../design/components/Card/native/Card.native.tsx";
import DiskUsageManagerDefault from "../../../install/native/DiskUsageManager.android.tsx";
import CacheActionsStorageDiagnosticsDefault from "CacheActionsStorageDiagnostics.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
function SizeRow(bytes) {
  bytes = bytes.bytes;
  const iter = closure_8();
  const obj = { direction: "horizontal", justify: "space-between", spacing: nativeDefault.space.PX_16, children: null };
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
}
function DiskUsageResults(report) {
  report = report.report;
  const obj = {
    caches: null,
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
  const intl = obj(1115).intl;
  obj.caches = intl.string(obj(1115).t["2CKnsF"]);
  const intl2 = obj(1115).intl;
  obj.documents = intl2.string(obj(1115).t.aE3Wbw);
  const intl3 = obj(1115).intl;
  obj.tmp = intl3.string(obj(1115).t.UQsNEK);
  const intl4 = obj(1115).intl;
  obj.application_support = intl4.string(obj(1115).t.DGQvlY);
  const intl5 = obj(1115).intl;
  obj.webkit = intl5.string(obj(1115).t.aIcsfw);
  const intl6 = obj(1115).intl;
  obj.library_other = intl6.string(obj(1115).t.U2f1ef);
  const intl7 = obj(1115).intl;
  obj.container_other = intl7.string(obj(1115).t.ZduI7f);
  const intl8 = obj(1115).intl;
  obj.app_group = intl8.string(obj(1115).t.rManeQ);
  const intl9 = obj(1115).intl;
  obj.share_extension = intl9.string(obj(1115).t.BEL9MJ);
  const intl10 = obj(1115).intl;
  obj.notification_service_extension = intl10.string(obj(1115).t.V46Edz);
  const intl11 = obj(1115).intl;
  obj.broadcast_upload_extension = intl11.string(obj(1115).t.BhYGtj);
  const intl12 = obj(1115).intl;
  obj.lockscreen_widget_extension = intl12.string(obj(1115).t.toGFBn);
  const obj2 = { spacing: nativeDefault.space.PX_16, children: null };
  const obj3 = { label: null, bytes: null };
  const intl13 = obj(1115).intl;
  obj3.label = intl13.string(obj(1115).t.O20zQi);
  obj3.bytes = report.totalMeasuredBytes;
  const items = [closure_6(SizeRow, obj3), ,];
  const obj4 = { label: null, bytes: null };
  const intl14 = obj(1115).intl;
  obj4.label = intl14.string(obj(1115).t.VQKK5O);
  obj4.bytes = report.metricKitSize;
  items[1] = closure_6(SizeRow, obj4);
  const obj5 = { variant: "heading-sm/semibold", children: null };
  const intl15 = obj(1115).intl;
  obj5.children = intl15.string(obj(1115).t.CoudPr);
  const items1 = [closure_6(obj(4752).Heading, obj5), ,];
  const roots = report.roots;
  items1[1] = roots.map((bytes) => {
    const root = bytes.root;
    let label = obj[root];
    if (label == null) {
      label = root;
    }
    return timestampProducer(SizeRow, { label, bytes: bytes.bytes }, root);
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
    const obj6 = { variant: "text-sm/normal", color: "text-feedback-warning", children: null };
    const intl16 = tmp(1115).intl;
    ({ errorCount: obj7.errors, unmeasuredRootCount: obj7.unavailable } = report);
    obj6.children = intl16.formatToPlainString(tmp(1115).t.kt7tAT, { errors: null, unavailable: null });
    tmp4Result = closure_6(tmp(4752).Text, obj6);
    const obj13 = { errors: null, unavailable: null };
  }
  items1[2] = tmp4Result;
  items[2] = closure_7(obj(5184).Stack, { children: items1 });
  obj2.children = items;
  return closure_7(obj(5184).Stack, obj2);
}
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4756);
let closure_8 = createStyles.createStyles({ label: { flex: 1 }, value: { flexShrink: 1 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/CacheActionsDiskUsageSection.tsx");

export default function CacheActionsDiskUsageSection(state) {
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
  let tmp4Result4 = "error" === state.status;
  if (tmp4Result4) {
    const obj3 = { variant: "text-sm/normal", color: "text-feedback-critical", children: null };
    const intl3 = util.intl;
    obj3.children = intl3.string(util.t["hj/3qI"]);
    tmp4Result4 = timestampProducer(Text_Text.Text, obj3);
  }
  items1[1] = tmp4Result4;
  let tmp4Result5 = "success" === state.status;
  if (tmp4Result5) {
    ({ report: obj4.report, metricKitSize: obj4.metricKitSize } = state);
    tmp4Result5 = timestampProducer(DiskUsageResults, { report: null, metricKitSize: null });
    const obj5 = { report: null, metricKitSize: null };
  }
  items1[2] = tmp4Result5;
  children[1] = React5(Card.Card, { children: items1 });
  let tmp4Result6 = "success" === state.status;
  if (tmp4Result6) {
    tmp4Result6 = null != DiskUsageManagerDefault.uploadStorageDiagnostics;
  }
  if (tmp4Result6) {
    const obj9 = { onBusyChange: state.onDiagnosticsBusyChange };
    tmp4Result6 = timestampProducer(CacheActionsStorageDiagnosticsDefault, obj9);
  }
  children[2] = tmp4Result6;
  return React5(Stack_Stack.Stack, { children });
}
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
        return { value: "HermesInternal", done: null };
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
