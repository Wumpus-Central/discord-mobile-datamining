// discord_app/modules/vibegrations/native/VibegrationsTraceDetailSheet.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import useSafeAreaInsetsDefault from "../../safe_area/useSafeAreaInsets.native.tsx";
import _modDef3593 from "../intl/VibegrationsUntranslated.messages.js";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import vibegrations_VibegrationsTraceFormat from "../lib/VibegrationsTraceFormat.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import VibegrationsProjectStore from "../stores/VibegrationsProjectStore.tsx";

require = fn;
function Row(muted) {
  let flag = muted.muted;
  ({ label, value } = muted);
  if (flag === undefined) {
    flag = false;
  }
  const obj = { style: closure_8().row, children: null };
  const items = [hasOwnProperty(Text_Text.Text, { variant: "text-xs/medium", color: "text-muted", children: label })];
  let str = "text-default";
  if (flag) {
    str = "text-subtle";
  }
  items[1] = hasOwnProperty(Text_Text.Text, {
    variant: "text-xs/normal",
    color: str,
    selectable: true,
    children: value,
  });
  obj.children = items;
  return timestampProducer(View, obj);
}
function Section(arg0) {
  ({ title, children } = arg0);
  const obj = { style: closure_8().section, children: null };
  const items = [
    hasOwnProperty(Text_Text.Text, { variant: "text-xs/semibold", color: "text-default", children: title }),
    children,
  ];
  obj.children = items;
  return timestampProducer(View, obj);
}
function FieldRow(field) {
  if (null != field.field.value) {
    ({ key: obj6.label, value: obj6.value } = iter);
    return hasOwnProperty(Row, { label: null, value: null });
  } else {
    if (null != iter.chars) {
      const intl2 = util.intl;
      const obj3 = { count: iter.chars };
      let formatToPlainStringResult = intl2.formatToPlainString(_modDef3593.DdXP0P, obj3);
    } else {
      formatToPlainStringResult = null;
      if (null != iter.items) {
        const intl = util.intl;
        const obj = { count: iter.items };
        formatToPlainStringResult = intl.formatToPlainString(_modDef3593.OB8Qvn, obj);
      }
    }
    const obj5 = { label: iter.key, value: null, muted: true };
    let str = iter.omitted;
    if (str == null) {
      str = "content";
    }
    const items = [vibegrations_VibegrationsTraceFormat.omissionLabel(str), formatToPlainStringResult];
    const found = items.filter((item) => null != item);
    obj5.value = found.join(" \u00B7 ");
    return hasOwnProperty(Row, obj5);
  }
}
function RichEntries(arg0) {
  const entries = arg0.entries;
  _require = closure_8();
  let tmp = null;
  if (0 !== entries.length) {
    let obj = { children: null };
    let obj2 = { variant: "text-xs/semibold", color: "text-feedback-warning", children: null };
    let intl = require("util").intl;
    obj2.children = intl.string(_modDef3593.fy9PRy);
    let items = [
      closure_5(require("Text/Text").Text, obj2),
      entries.map((children) => {
        const obj = { style: row.row, children: null };
        let intl = require;
        let obj7 = dependencyMap;
        const items = [
          hasOwnProperty(Text_Text.Text, { variant: "text-xs/medium", color: "text-muted", children: children.key }),
          ,
          ,
        ];
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
          obj5.children = intl2.string(_modDef3593.PkIUHD);
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
            let stringResult = intl.string(_modDef3593["1kBG9Z"]);
          } else {
            const intl3 = util.intl;
            const obj6 = { count: children.chars };
            stringResult = intl3.formatToPlainString(_modDef3593.VGSwo4, obj6);
          }
          obj7 = { variant: "text-xs/normal", color: "text-subtle", children: stringResult };
          hasOwnProperty(Text_Text.Text, obj7);
        }
        const obj2 = { variant: "text-xs/medium", color: "text-muted", children: children.key };
      }),
    ];
    obj.children = items;
    tmp = closure_6(closure_7, obj);
  }
  return tmp;
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire, Fragment: closure_7 } = jsxProd);
const createStyles = fn(4640);
let obj2 = {
  content: { gap: nativeDefault.space.PX_16 },
  head: null,
  headTitle: null,
  section: null,
  row: null,
  rich: null,
};
let obj3 = { gap: nativeDefault.space.PX_16 };
obj2.head = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
obj2.headTitle = { flexShrink: 1 };
let obj4 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
obj2.section = { gap: nativeDefault.space.PX_8 };
let obj5 = { gap: nativeDefault.space.PX_8 };
obj2.row = { gap: nativeDefault.space.PX_4 };
let obj6 = { gap: nativeDefault.space.PX_4 };
obj2.rich = {
  padding: nativeDefault.space.PX_8,
  borderRadius: nativeDefault.radii.sm,
  backgroundColor: nativeDefault.colors.BACKGROUND_CODE,
};
let closure_8 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsTraceDetailSheet.tsx");

export default function VibegrationsTraceDetailSheet(projectId) {
  projectId = projectId.projectId;
  ({ entryId, initialEntry } = projectId);
  const tmp = closure_8();
  const tmp2 = projectId;
  const traceCategoryTextStyles = projectId(16841).useTraceCategoryTextStyles();
  let obj = projectId(16841);
  const items = [VibegrationsProjectStore];
  const items1 = [projectId];
  const stateFromStoresArray = projectId(504).useStateFromStoresArray(
    items,
    () => VibegrationsProjectStore.getTrace(projectId),
    items1,
  );
  const obj2 = projectId(504);
  let findTraceEntryResult = projectId(16843).findTraceEntry(stateFromStoresArray, entryId);
  if (findTraceEntryResult == null) {
    findTraceEntryResult = initialEntry;
  }
  let findTraceEntryResult1 = null;
  if ("tool" === findTraceEntryResult.kind) {
    let parentId = findTraceEntryResult.parentId;
    if (parentId == null) {
      parentId = null;
    }
    findTraceEntryResult1 = tmp2(16843).findTraceEntry(stateFromStoresArray, parentId);
    const tmp2Result = tmp2(16843);
  }
  const obj3 = projectId(16843);
  const length = tmp2(16843).traceChildren(stateFromStoresArray, findTraceEntryResult.id).length;
  const tmp2Result13 = tmp2(16843);
  const traceDetailSectionsResult = tmp2(16847).traceDetailSections(findTraceEntryResult, {
    childCount: length,
    hasParent: null != findTraceEntryResult1,
  });
  const obj4 = { childCount: length, hasParent: null != findTraceEntryResult1 };
  const tmp2Result14 = tmp2(16847);
  let detailId;
  if ("tool" === findTraceEntryResult.kind) {
    detailId = findTraceEntryResult.detailId;
  }
  const vibegrationsTraceDetail = tmp2(16848).useVibegrationsTraceDetail(projectId, detailId);
  const tmp12 = "model" === findTraceEntryResult.kind ? findTraceEntryResult.model : findTraceEntryResult.tool;
  const tmp2Result15 = tmp2(16848);
  const formatClockTimeResult = tmp2(16845).formatClockTime(findTraceEntryResult.startedAt, "millis");
  const tmp2Result16 = tmp2(16845);
  const traceCategoryResult = tmp2(16843).traceCategory(findTraceEntryResult);
  const tmp2Result17 = tmp2(16843);
  const traceRichStatusLabelResult = tmp2(16842).traceRichStatusLabel(vibegrationsTraceDetail);
  const obj5 = {
    scrollable: true,
    header: closure_5(tmp2(7263).BottomSheetTitleHeader, { title: tmp12 }),
    children: null,
  };
  const obj6 = { contentContainerStyle: { paddingBottom: useSafeAreaInsetsDefault().bottom }, children: null };
  const obj7 = { style: tmp.content, children: null };
  const obj8 = { style: tmp.head, children: null };
  const items2 = [closure_5(tmp2(16841).TraceStatusDot, { status: findTraceEntryResult.status }), ,];
  const obj10 = { variant: "text-xs/semibold", style: traceCategoryTextStyles[traceCategoryResult], children: null };
  const obj9 = { status: findTraceEntryResult.status };
  const tmp2Result18 = tmp2(16842);
  obj10.children = tmp2(16842).categoryLabel(traceCategoryResult);
  items2[1] = closure_5(tmp2(4636).Text, obj10);
  const obj11 = { variant: "text-xs/normal", color: "text-muted", style: tmp.headTitle, children: null };
  if (null == findTraceEntryResult.durationMs) {
    let intl = tmp2(1115).intl;
    let stringResult = intl.string(_modDef3593.HpKDyl);
  } else {
    stringResult = tmp2(16842).formatDuration(findTraceEntryResult.durationMs);
    const tmp2Result20 = tmp2(16842);
  }
  obj11.children = stringResult;
  items2[2] = closure_5(tmp2(4636).Text, obj11);
  obj8.children = items2;
  const items3 = [closure_6(View, obj8), , , , , ,];
  let tmp16Result = null;
  if (null != findTraceEntryResult.error) {
    const obj12 = {
      variant: "text-xs/normal",
      color: "text-feedback-critical",
      selectable: true,
      children: findTraceEntryResult.error,
    };
    tmp16Result = closure_5(tmp2(4636).Text, obj12);
  }
  items3[1] = tmp16Result;
  let tmp17Result = null;
  if (traceDetailSectionsResult.includes("arguments")) {
    tmp17Result = null;
    if ("tool" === findTraceEntryResult.kind) {
      const obj13 = { title: null, children: null };
      const intl25 = tmp2(1115).intl;
      obj13.title = intl25.string(_modDef3593.jXY3mm);
      let fields = findTraceEntryResult.fields;
      if (fields == null) {
        fields = [];
      }
      const items4 = [fields.map((field) => closure_1_5(FieldRow, { field }, field.key)), ,];
      let status;
      if (vibegrationsTraceDetail != null) {
        status = vibegrationsTraceDetail.status;
      }
      let tmp16Result18 = null;
      if ("loaded" === status) {
        tmp16Result18 = null;
        if (null != vibegrationsTraceDetail.rich.args) {
          const obj14 = { entries: vibegrationsTraceDetail.rich.args };
          tmp16Result18 = closure_5(RichEntries, obj14);
        }
      }
      items4[1] = tmp16Result18;
      let tmp16Result19 = null;
      if (null != traceRichStatusLabelResult) {
        const obj15 = { variant: "text-xs/normal", color: "text-subtle", children: traceRichStatusLabelResult };
        tmp16Result19 = closure_5(tmp2(4636).Text, obj15);
      }
      items4[2] = tmp16Result19;
      obj13.children = items4;
      tmp17Result = closure_6(Section, obj13);
    }
  }
  items3[2] = tmp17Result;
  let tmp17Result5 = null;
  if (traceDetailSectionsResult.includes("result")) {
    tmp17Result5 = null;
    if ("tool" === findTraceEntryResult.kind) {
      const obj16 = { title: null, children: null };
      const intl26 = tmp2(1115).intl;
      obj16.title = intl26.string(_modDef3593.KXrf5F);
      const obj17 = { label: null, value: null };
      const intl27 = tmp2(1115).intl;
      obj17.label = intl27.string(_modDef3593["2Aii2k"]);
      const intl28 = tmp2(1115).intl;
      let num = findTraceEntryResult.resultChars;
      if (num == null) {
        num = 0;
      }
      const obj18 = { count: num };
      obj17.value = intl28.formatToPlainString(_modDef3593.DdXP0P, obj18);
      const items5 = [closure_5(Row, obj17), , ,];
      let tmp16Result20 = null;
      if (null != findTraceEntryResult.resultAdded) {
        const obj19 = { label: null, value: null };
        const intl2 = tmp2(1115).intl;
        obj19.label = intl2.string(_modDef3593.hpGFzS);
        ({ resultRemoved, resultAdded } = findTraceEntryResult);
        if (resultRemoved == null) {
          resultRemoved = 0;
        }
        const _HermesInternal = HermesInternal;
        obj19.value = "+" + resultAdded + " \u2212" + resultRemoved;
        tmp16Result20 = closure_5(Row, obj19);
      }
      items5[1] = tmp16Result20;
      let tmp16Result21 = null;
      if (true === findTraceEntryResult.resultTruncated) {
        const obj20 = { label: null, value: null, muted: true };
        const intl3 = tmp2(1115).intl;
        obj20.label = intl3.string(_modDef3593["UV2R1/"]);
        const intl4 = tmp2(1115).intl;
        obj20.value = intl4.string(_modDef3593["1kBG9Z"]);
        tmp16Result21 = closure_5(Row, obj20);
      }
      items5[2] = tmp16Result21;
      let status1;
      if (vibegrationsTraceDetail != null) {
        status1 = vibegrationsTraceDetail.status;
      }
      let tmp16Result22 = null;
      if ("loaded" === status1) {
        tmp16Result22 = null;
        if (null != vibegrationsTraceDetail.rich.result) {
          const obj21 = { entries: vibegrationsTraceDetail.rich.result };
          tmp16Result22 = closure_5(RichEntries, obj21);
        }
      }
      items5[3] = tmp16Result22;
      obj16.children = items5;
      tmp17Result5 = closure_6(Section, obj16);
    }
  }
  items3[3] = tmp17Result5;
  let tmp17Result6 = null;
  if (traceDetailSectionsResult.includes("usage")) {
    tmp17Result6 = null;
    if ("model" === findTraceEntryResult.kind) {
      const obj22 = { title: null, children: null };
      const intl29 = tmp2(1115).intl;
      obj22.title = intl29.string(_modDef3593["W+4BVk"]);
      let tmp16Result23 = null;
      if (null != findTraceEntryResult.promptTokens) {
        const obj23 = { label: null, value: null };
        const intl5 = tmp2(1115).intl;
        obj23.label = intl5.string(_modDef3593.Ran4BY);
        const intl6 = tmp2(1115).intl;
        const obj24 = { tokens: tmp2(16842).formatTokens(findTraceEntryResult.promptTokens) };
        obj23.value = intl6.formatToPlainString(_modDef3593["PYO+Jv"], obj24);
        tmp16Result23 = closure_5(Row, obj23);
        const tmp2Result21 = tmp2(16842);
      }
      const items6 = [tmp16Result23, , , , , ,];
      let tmp16Result24 = null;
      if (null != findTraceEntryResult.systemTokens) {
        const obj25 = { label: null, value: null };
        const intl7 = tmp2(1115).intl;
        obj25.label = intl7.string(_modDef3593.vPIcyv);
        const intl8 = tmp2(1115).intl;
        const obj26 = {
          system: tmp2(16842).formatTokens(findTraceEntryResult.systemTokens),
          tools: null,
          toolCount: null,
          messages: null,
          messageCount: null,
        };
        const tmp2Result22 = tmp2(16842);
        let num2 = findTraceEntryResult.toolsTokens;
        if (num2 == null) {
          num2 = 0;
        }
        obj26.tools = tmp2(16842).formatTokens(num2);
        let num3 = findTraceEntryResult.tools;
        if (num3 == null) {
          num3 = 0;
        }
        obj26.toolCount = num3;
        const tmp2Result23 = tmp2(16842);
        let num4 = findTraceEntryResult.messagesTokens;
        if (num4 == null) {
          num4 = 0;
        }
        obj26.messages = tmp2(16842).formatTokens(num4);
        let num5 = findTraceEntryResult.messages;
        if (num5 == null) {
          num5 = 0;
        }
        obj26.messageCount = num5;
        obj25.value = intl8.formatToPlainString(_modDef3593.Qy2iTq, obj26);
        tmp16Result24 = closure_5(Row, obj25);
        const tmp2Result24 = tmp2(16842);
      }
      items6[1] = tmp16Result24;
      let tmp16Result25 = null;
      if (null != findTraceEntryResult.inputTokens) {
        const obj27 = { label: null, value: null };
        const intl9 = tmp2(1115).intl;
        obj27.label = intl9.string(_modDef3593["/703Yk"]);
        const _String = String;
        obj27.value = String(findTraceEntryResult.inputTokens);
        tmp16Result25 = closure_5(Row, obj27);
      }
      items6[2] = tmp16Result25;
      let tmp16Result26 = null;
      if (null != findTraceEntryResult.outputTokens) {
        const obj28 = { label: null, value: null };
        const intl10 = tmp2(1115).intl;
        obj28.label = intl10.string(_modDef3593["6+W0dJ"]);
        const _String2 = String;
        obj28.value = String(findTraceEntryResult.outputTokens);
        tmp16Result26 = closure_5(Row, obj28);
      }
      items6[3] = tmp16Result26;
      let tmp16Result27 = null;
      if (null != findTraceEntryResult.cacheReadTokens) {
        const obj29 = { label: null, value: null };
        const intl11 = tmp2(1115).intl;
        obj29.label = intl11.string(_modDef3593.VyAl6j);
        const intl12 = tmp2(1115).intl;
        const obj30 = { read: null, write: null };
        ({ cacheReadTokens: obj40.read, cacheWriteTokens } = findTraceEntryResult);
        if (cacheWriteTokens == null) {
          cacheWriteTokens = 0;
        }
        obj30.write = cacheWriteTokens;
        obj29.value = intl12.formatToPlainString(_modDef3593.lkMc23, obj30);
        tmp16Result27 = closure_5(Row, obj29);
      }
      items6[4] = tmp16Result27;
      let tmp16Result28 = null;
      if (null != findTraceEntryResult.costUsd) {
        const obj31 = { label: null, value: null };
        const intl13 = tmp2(1115).intl;
        obj31.label = intl13.string(_modDef3593.l9YFEQ);
        const costUsd = findTraceEntryResult.costUsd;
        const _HermesInternal2 = HermesInternal;
        obj31.value = "$" + costUsd.toFixed(4);
        tmp16Result28 = closure_5(Row, obj31);
      }
      items6[5] = tmp16Result28;
      const obj32 = { variant: "text-xs/normal", color: "text-subtle", children: null };
      const intl14 = tmp2(1115).intl;
      obj32.children = intl14.string(_modDef3593.F9jaUF);
      items6[6] = closure_5(tmp2(4636).Text, obj32);
      obj22.children = items6;
      tmp17Result6 = closure_6(Section, obj22);
    }
  }
  items3[4] = tmp17Result6;
  if (traceDetailSectionsResult.includes("arguments")) {
    const obj33 = { variant: "text-xs/normal", color: "text-subtle", children: null };
    const intl15 = tmp2(1115).intl;
    obj33.children = intl15.string(_modDef3593["ppv+97"]);
    let tmp16Result29 = closure_5(tmp2(4636).Text, obj33);
  } else {
    tmp16Result29 = null;
  }
  items3[5] = tmp16Result29;
  let tmp17Result8 = null;
  if (traceDetailSectionsResult.includes("diagnostics")) {
    const obj34 = { title: null, children: null };
    const intl16 = tmp2(1115).intl;
    obj34.title = intl16.string(_modDef3593.T7SFyZ);
    if (null == findTraceEntryResult1) {
      const items7 = [null, , , , , ,];
      let tmp16Result30 = null;
      if (length > 0) {
        const obj35 = { label: null, value: null };
        const intl18 = tmp2(1115).intl;
        obj35.label = intl18.string(_modDef3593.fI6mzD);
        const intl19 = tmp2(1115).intl;
        const obj36 = { count: length };
        obj35.value = intl19.formatToPlainString(_modDef3593.hO8FYp, obj36);
        tmp16Result30 = closure_5(Row, obj35);
      }
      items7[1] = tmp16Result30;
      let tmp16Result31 = null;
      if (null != findTraceEntryResult.turnId) {
        const obj37 = { label: null, value: null };
        const intl20 = tmp2(1115).intl;
        obj37.label = intl20.string(_modDef3593.I7cJP0);
        obj37.value = findTraceEntryResult.turnId;
        tmp16Result31 = closure_5(Row, obj37);
      }
      items7[2] = tmp16Result31;
      const obj38 = { label: null, value: null };
      const intl21 = tmp2(1115).intl;
      obj38.label = intl21.string(_modDef3593["XVTP/S"]);
      obj38.value = findTraceEntryResult.id;
      items7[3] = closure_5(Row, obj38);
      let tmp16Result32 = null;
      if (null != formatClockTimeResult) {
        const obj39 = { label: null, value: null };
        const intl22 = tmp2(1115).intl;
        obj39.label = intl22.string(_modDef3593.rD7bm0);
        obj39.value = formatClockTimeResult;
        tmp16Result32 = closure_5(Row, obj39);
      }
      items7[4] = tmp16Result32;
      let tmp16Result33 = null;
      if ("model" === findTraceEntryResult.kind) {
        tmp16Result33 = null;
        if (null != findTraceEntryResult.stopReason) {
          const obj41 = { label: null, value: null };
          const intl23 = tmp2(1115).intl;
          obj41.label = intl23.string(_modDef3593.rxmzYT);
          obj41.value = findTraceEntryResult.stopReason;
          tmp16Result33 = closure_5(Row, obj41);
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
            const intl24 = tmp2(1115).intl;
            obj43.children = intl24.string(_modDef3593["6oILKx"]);
            const items8 = [closure_5(tmp2(4636).Text, obj43)];
            const schema = findTraceEntryResult.schema;
            items8[1] = schema.map((label) => {
              const obj = { label: label.name, value: null };
              const intl = projectId(1115).intl;
              const tmp3 = _modDef3593;
              obj.value = intl.formatToPlainString(label.required ? tmp3["6QoPmP"] : tmp3["/L6GFe"], {
                type: label.type,
              });
              return closure_1_5(Row, obj, label.name);
            });
            obj42.children = items8;
            tmp17Result7 = closure_6(closure_7, obj42);
          }
        }
      }
      items7[6] = tmp17Result7;
      obj34.children = items7;
      tmp17Result8 = closure_6(Section, obj34);
    } else {
      const obj44 = { label: null, value: null };
      const intl17 = tmp2(1115).intl;
      obj44.label = intl17.string(_modDef3593.NnBqcd);
      obj44.value = "model" === findTraceEntryResult1.kind ? findTraceEntryResult1.model : findTraceEntryResult1.tool;
      closure_5(Row, obj44);
    }
  }
  items3[6] = tmp17Result8;
  obj7.children = items3;
  obj6.children = closure_6(View, obj7);
  obj5.children = closure_5(tmp2(6738).BottomSheetScrollView, obj6);
  return closure_5(tmp2(7311).ActionSheet, obj5);
}
export const VIBEGRATIONS_TRACE_DETAIL_SHEET_KEY = "VibegrationsTraceDetailSheet";
