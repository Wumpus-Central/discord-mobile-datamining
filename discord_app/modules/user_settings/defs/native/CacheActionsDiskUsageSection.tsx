// discord_app/modules/user_settings/defs/native/CacheActionsDiskUsageSection.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import PlatformUtils from "../../../../utils/PlatformUtils.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import Stack_Stack from "../../../../design/components/Stack/native/Stack.native.tsx";
import FileSizeUtils from "../../../../utils/FileSizeUtils.tsx";
import Card from "../../../../design/components/Card/native/Card.native.tsx";
import CacheActionsStorageDiagnosticsDefault from "CacheActionsStorageDiagnostics.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
function SizeRow(children) {
  ({ bytes, indented } = children);
  if (indented === undefined) {
    indented = false;
  }
  const iter = closure_9();
  const obj = { direction: "horizontal", justify: "space-between", spacing: nativeDefault.space.PX_16, children: null };
  const items = [
    timestampProducer(Text_Text.Text, {
      variant: "text-sm/normal",
      color: "text-subtle",
      style: indented ? iter.nestedLabel : iter.label,
      children: children.label,
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
function DiskUsageResults(metricKitSize) {
  ({ report, kvDatabaseUsage: require } = metricKitSize);
  let str;
  let obj = {
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
  const items = [closure_6(SizeRow, obj4), ,];
  obj2 = require("PlatformUtils");
  let isIOSResult = require("PlatformUtils").isIOS();
  if (isIOSResult) {
    const obj5 = { label: null, bytes: null };
    const intl21 = require("util").intl;
    obj5.label = intl21.string(require("util").t.VQKK5O);
    obj5.bytes = metricKitSize.metricKitSize;
    isIOSResult = closure_6(SizeRow, obj5);
  }
  items[1] = isIOSResult;
  const obj6 = { variant: "heading-sm/semibold", children: null };
  const intl22 = require("util").intl;
  obj6.children = intl22.string(require("util").t.CoudPr);
  let items1 = [closure_6(require("Text/Text").Heading, obj6), ,];
  const roots = report.roots;
  items1[1] = roots.map((bytes) => {
    const root = bytes.root;
    let tmp4 = obj[root];
    if (tmp4 == null) {
      tmp4 = root;
    }
    const children = [timestampProducer(SizeRow, { label: tmp4, bytes: bytes.bytes })];
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
      const items1 = [timestampProducer(SizeRow, obj)];
      const obj2 = { label: null, bytes: null, indented: true };
      const intl2 = util.intl;
      obj2.label = intl2.string(util.t.UD3OKX);
      let free;
      if (_require != null) {
        free = _require.free;
      }
      const obj3 = { children: null };
      obj2.bytes = free;
      items1[1] = timestampProducer(SizeRow, obj2);
      obj3.children = items1;
      tmpResult = React5(React6, obj3);
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
}
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7, Fragment: closure_8 } = jsxProd);
const createStyles = fn(5014);
let obj2 = {
  label: { flex: 1 },
  nestedLabel: { flex: 1, paddingLeft: nativeDefault.space.PX_16 },
  value: { flexShrink: 1 },
};
let closure_9 = createStyles.createStyles(obj2);
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
    tmp4Result4 = timestampProducer(DiskUsageResults, { report: null, metricKitSize: null, kvDatabaseUsage: null });
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
}
export function useDiskUsageMeasurement() {
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
        return { value: "HermesInternal", done: "HermesInternal" };
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
                const items = [tmp4(tmp51[6]).calculateSize()];
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
                  const obj5 = {
                    status: "success",
                    report: closure_128_4,
                    metricKitSize: closure_128_2.metricKitSize,
                    kvDatabaseUsage: null,
                  };
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
}
