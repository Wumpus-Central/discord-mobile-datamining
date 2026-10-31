// discord_app/modules/conjure/debug/perf_trace/native/ConjurePerfTraceTab.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import v1 from "../../../../../../_runtime/01266_v1.js";
import asyncRequireImpl from "../../../../../../_runtime/01994_asyncRequireImpl.js";
import Text_Text from "../../../../../design/components/Text/native/Text.tsx";
import ModalActionCreatorsDefault from "../../../../../actions/ModalActionCreators.tsx";
import Card from "../../../../../design/components/Card/native/Card.native.tsx";
import FileManagerUtils from "../../../../../utils/FileManagerUtils.native.tsx";
import ConjurePerfTraceLayout from "../ConjurePerfTraceLayout.tsx";
import ConjurePerfTraceFormat from "../ConjurePerfTraceFormat.tsx";
import ConjurePerfTraceStats from "../ConjurePerfTraceStats.tsx";
import ConjurePerfTraceList from "../ConjurePerfTraceList.tsx";
import _slicedToArray from "../../../../../../_runtime/metro/00032__.js";
import asyncGeneratorStep from "../../../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../../../_runtime/metro/00019__.js";
import ConjureDebugStore from "../../ConjureDebugStore.tsx";

require = fn;
function PerfTraceRow(arg0) {
  ({ projectId: require, trace } = arg0);
  const tmp = closure_10();
  const spans = trace.spans;
  const found = spans.find((error) => null != error.error);
  let error;
  if (found != null) {
    error = found.error;
  }
  const obj = { style: tmp.rowSlot, children: null };
  const obj2 = {
    variant: "primary",
    onPress() {
      ModalActionCreatorsDefault.pushLazy(
        asyncRequireImpl(13001, dependencyMap.paths),
        { projectId, traceId: trace.id },
        "CONJURE_PERF_TRACE_MODAL",
      );
    },
    accessibilityLabel: trace.name,
    children: null,
  };
  const obj3 = { style: tmp.rowBody, children: null };
  const obj4 = { style: tmp.rowTop, children: null };
  const obj5 = { status: null };
  const tmp9 = trace(13007);
  obj5.status = ConjurePerfTraceLayout.perfTraceStatus(trace);
  const items = [
    closure_8(tmp9, obj5),
    closure_8(Text_Text.Text, {
      variant: "text-sm/semibold",
      color: "text-default",
      style: tmp.rowName,
      lineClamp: 1,
      children: trace.name,
    }),
  ];
  const obj8 = { variant: "text-xs/normal", color: "text-subtle", children: null };
  const obj7 = {
    variant: "text-sm/semibold",
    color: "text-default",
    style: tmp.rowName,
    lineClamp: 1,
    children: trace.name,
  };
  obj8.children = ConjurePerfTraceFormat.perfTraceDuration(trace);
  items[2] = closure_8(Text_Text.Text, obj8);
  obj4.children = items;
  const items1 = [closure_9(View, obj4), ,];
  const obj10 = { variant: "text-xs/normal", color: "text-muted", lineClamp: 2, children: null };
  obj10.children = ConjurePerfTraceFormat.perfTraceSummary(trace);
  items1[1] = closure_8(Text_Text.Text, obj10);
  let tmp4Result = null;
  if (null != error) {
    const obj12 = { variant: "text-xs/normal", color: "text-feedback-critical", lineClamp: 2, children: error };
    tmp4Result = closure_8(Text_Text.Text, obj12);
  }
  items1[2] = tmp4Result;
  obj3.children = items1;
  obj2.children = closure_9(View, obj3);
  obj.children = closure_8(Card.Card, obj2);
  return closure_8(View, obj);
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(5014);
let obj2 = {
  list: { paddingHorizontal: nativeDefault.space.PX_16 },
  placeholder: null,
  header: null,
  tools: null,
  search: null,
  rowSlot: null,
  rowBody: null,
  rowTop: null,
  rowName: null,
};
let obj3 = { paddingHorizontal: nativeDefault.space.PX_16 };
obj2.placeholder = { padding: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_8 };
let obj4 = { padding: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_8 };
obj2.header = {
  gap: nativeDefault.space.PX_12,
  paddingTop: nativeDefault.space.PX_8,
  paddingBottom: nativeDefault.space.PX_12,
};
let obj5 = {
  gap: nativeDefault.space.PX_12,
  paddingTop: nativeDefault.space.PX_8,
  paddingBottom: nativeDefault.space.PX_12,
};
obj2.tools = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
obj2.search = { flex: 1 };
let obj6 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
obj2.rowSlot = { paddingBottom: nativeDefault.space.PX_8 };
let obj7 = { paddingBottom: nativeDefault.space.PX_8 };
obj2.rowBody = { gap: nativeDefault.space.PX_4 };
let obj8 = { gap: nativeDefault.space.PX_4 };
obj2.rowTop = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
obj2.rowName = { flex: 1 };
let closure_10 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/debug/perf_trace/native/ConjurePerfTraceTab.tsx");

export default function ConjurePerfTraceTab(projectId) {
  projectId = projectId.projectId;
  let first;
  let memo;
  const tmp = closure_10();
  let items = [ConjureDebugStore];
  const items1 = [projectId];
  const stateFromStoresArray = projectId(first[21]).useStateFromStoresArray(
    items,
    () => ConjureDebugStore.getTimingTraces(projectId),
    items1,
  );
  const tmp5 = memo(noop.useState(""), 2);
  first = tmp5[0];
  const items2 = [stateFromStoresArray, first];
  memo = noop.useMemo(() => ConjurePerfTraceList.filterPerfTraces(stateFromStoresArray, first), items2);
  const items3 = [memo];
  const memo1 = noop.useMemo(() => {
    const items = [...memo];
    return items.reverse();
  }, items3);
  const items4 = [memo];
  const items5 = [projectId, memo];
  const memo2 = noop.useMemo(() => ConjurePerfTraceStats.sumPerfTraceStats(memo), items4);
  [][0] = projectId;
  const callback = noop.useCallback(() => {
    let combined = "conjure-traces-" + projectId + ".json";
    const combined1 = "conjure-traces-" + v1.v4();
    const combined2 = "" + combined1 + "/" + combined;
    let obj2 = FileManagerUtils;
    let obj3 = ConjurePerfTraceList;
    const date = new Date();
    const writeFileResult = obj2.writeFile(
      "cache",
      combined2,
      obj3.perfTraceExport(projectId, memo, new Date().toISOString()),
      "utf8",
    );
    const nextPromise = obj2
      .writeFile("cache", combined2, obj3.perfTraceExport(projectId, memo, new Date().toISOString()), "utf8")
      .then((result) => {
        if (null == result) {
          const _Error = Error;
          const error = new Error("trace file was not written");
          throw error;
        } else {
          const _encodeURI = encodeURI;
          const _HermesInternal = HermesInternal;
          combined = "file://" + encodeURI(result.replace(/^file:\/*/, "/"));
          const obj2 = { sourceUris: null, fileName: null, mimeType: "application/json", copy: true };
          const items = [combined];
          obj2.sourceUris = items;
          obj2.fileName = combined;
          return projectId(first[19]).saveDocuments(obj2);
        }
      });
    obj2
      .writeFile("cache", combined2, obj3.perfTraceExport(projectId, memo, new Date().toISOString()), "utf8")
      .then((result) => {
        if (null == result) {
          const _Error = Error;
          const error = new Error("trace file was not written");
          throw error;
        } else {
          const _encodeURI = encodeURI;
          const _HermesInternal = HermesInternal;
          combined = "file://" + encodeURI(result.replace(/^file:\/*/, "/"));
          const obj2 = { sourceUris: null, fileName: null, mimeType: "application/json", copy: true };
          const items = [combined];
          obj2.sourceUris = items;
          obj2.fileName = combined;
          return projectId(first[19]).saveDocuments(obj2);
        }
      })
      .finally(
        asyncGeneratorStep(async () => {
          if (dependencyMap === 2) {
            dependencyMap = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp3 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              const obj3 = { value, done: true };
              return obj3;
            } else {
              return { value: "HermesInternal", done: "HermesInternal" };
            }
          } else {
            try {
              dependencyMap = 2;
              if (0 === c1) {
                if (arg0 === 1) {
                  dependencyMap = 3;
                  throw value;
                } else if (arg0 === 2) {
                  dependencyMap = 3;
                  const obj4 = { value, done: true };
                  return obj4;
                } else {
                  combined = tmp4;
                  c1 = 1;
                  dependencyMap = 1;
                  const obj6 = { value: combined(8778).clearFolder("cache", combined1), done: false };
                  return obj6;
                }
              } else if (1 === tmp4) {
                if (arg0 === 1) {
                  dependencyMap = 3;
                  throw value;
                } else if (arg0 === 2) {
                  dependencyMap = 3;
                  const obj7 = { value, done: true };
                  return obj7;
                } else {
                  c1 = 2;
                  dependencyMap = 1;
                  const obj8 = { value: combined(8778).removeFile("cache", closure_128_1), done: false };
                  return obj8;
                }
              } else if (arg0 === 1) {
                dependencyMap = 3;
                throw value;
              } else if (arg0 === 2) {
                dependencyMap = 3;
                const obj = { value, done: true };
                return obj;
              } else {
                dependencyMap = 3;
                return { value: "HermesInternal", done: "HermesInternal" };
              }
            } catch (tmp12) {
              dependencyMap = tmp;
              throw tmp12;
            }
          }
        }),
      )
      .catch((error) => {
        const obj = combined(first[19]);
        if (isErrorWithCodeResult) {
          const code = error.code;
          const OPERATION_CANCELED = combined(first[19]).errorCodes.OPERATION_CANCELED;
        }
        isErrorWithCodeResult = combined(first[19]).isErrorWithCode(error);
      });
  }, items5);
  if (0 === stateFromStoresArray.length) {
    let obj2 = { style: tmp.placeholder, children: null };
    const items6 = [
      closure_8(tmp4(tmp3[14]).Text, { variant: "text-sm/medium", color: "text-default", children: "No traces yet" }),
      closure_8(tmp4(tmp3[14]).Text, {
        variant: "text-sm/normal",
        color: "text-muted",
        children:
          "Turns and project operations over 100ms show up here as they run. Periodic checks and live preview requests show up only when they take a second or fail.",
      }),
    ];
    obj2.children = items6;
    let tmp16Result2 = closure_9(View, obj2);
  } else {
    let obj3 = {
      data: memo1,
      keyExtractor(id) {
        return id.id;
      },
      renderItem: tmp10,
      ListHeaderComponent: null,
      contentContainerStyle: null,
    };
    let obj4 = { style: tmp.header, children: null };
    const obj5 = { style: tmp.tools, children: null };
    let obj6 = { style: tmp.search, children: null };
    let obj7 = { accessibilityLabel: "Search traces", placeholder: "Search traces", size: "sm", onChange: tmp5[1] };
    obj6.children = closure_8(tmp4(tmp3[24]).SearchBar, obj7);
    const items7 = [closure_8(View, obj6)];
    let obj8 = { IconComponent: tmp4(tmp3[26]).DownloadIcon, onPress: callback, accessibilityLabel: "Export as JSON" };
    items7[1] = closure_8(tmp2(tmp3[25]), obj8);
    obj5.children = items7;
    const items8 = [closure_9(View, obj5), ,];
    const obj9 = { stats: memo2 };
    items8[1] = closure_8(tmp2(tmp3[27]), obj9);
    let tmp16Result = null;
    if (0 === memo1.length) {
      tmp16Result = closure_8(tmp4(tmp3[14]).Text, {
        variant: "text-sm/normal",
        color: "text-muted",
        children: "No traces match this search.",
      });
    }
    items8[2] = tmp16Result;
    obj4.children = items8;
    obj3.ListHeaderComponent = closure_9(View, obj4);
    const items9 = [tmp.list];
    const obj10 = { paddingBottom: tmp2(tmp3[7]).space.PX_16 + stateFromStoresArray(first[20])().bottom };
    items9[1] = obj10;
    obj3.contentContainerStyle = items9;
    tmp16Result2 = closure_8(tmp4(tmp3[23]).FlashList, obj3);
    const tmp2Result = tmp2(tmp3[25]);
  }
  return tmp16Result2;
}
export function openPerfTrace(projectId, traceId) {
  ModalActionCreatorsDefault.pushLazy(
    asyncRequireImpl(13001, dependencyMap.paths),
    { projectId, traceId },
    "CONJURE_PERF_TRACE_MODAL",
  );
}
