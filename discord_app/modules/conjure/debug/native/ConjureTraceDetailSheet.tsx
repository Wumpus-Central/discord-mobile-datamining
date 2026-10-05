// discord_app/modules/conjure/debug/native/ConjureTraceDetailSheet.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import intl30 from "../../../../intl/index.native.tsx";
import useSafeAreaInsetsDefault from "../../../safe_area/useSafeAreaInsets.native.tsx";
import _modDef3723 from "../../intl/ConjureUntranslated.messages.js";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import debug_ConjureTraceFormat from "../ConjureTraceFormat.tsx";
import react from "../../../../../_runtime/00019_react.js";
import ConjureProjectStore from "../../projects/ConjureProjectStore.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, projectId;

let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
const View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire, Fragment: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { content: obj2, head: obj3, headTitle: { flexShrink: 1 }, section: obj4, row: obj5, rich: obj6 };
obj2 = { gap: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
obj4 = { gap: nativeDefault.space.PX_8 };
obj5 = { gap: nativeDefault.space.PX_4 };
obj6 = {
  padding: nativeDefault.space.PX_8,
  borderRadius: nativeDefault.radii.sm,
  backgroundColor: nativeDefault.colors.BACKGROUND_CODE,
};
let closure_8 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_9 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let items;
      let label;
      let muted;
      let tmp6;
      let value;
      const obj = react2;
      const cResult = obj.c(9);
      ({ label, value, muted } = arg0);
      const tmp4 = undefined !== muted && muted;
      const tmp5 = closure_8();
      if (cResult[0] !== label) {
        const obj2 = { variant: "text-xs/medium", color: "text-muted", children: label };
        const tmp8 = hasOwnProperty(Text_Text.Text, obj2);
        cResult[0] = label;
        cResult[1] = tmp8;
        tmp6 = tmp8;
      } else {
        tmp6 = cResult[1];
      }
      let str = "text-default";
      if (tmp4) {
        str = "text-subtle";
      }
      if (cResult[2] === str) {
        let tmp9;
        if (cResult[3] === value) {
          tmp9 = cResult[4];
        }
        if (cResult[5] === tmp5.row) {
          if (cResult[6] === tmp6) {
            let tmp11;
            if (cResult[7] === tmp9) {
              tmp11 = cResult[8];
            }
            return tmp11;
          }
        }
        const obj3 = { style: tmp5.row, children: items };
        items = [tmp6, tmp9];
        const tmp14 = metroRequire(View, obj3);
        cResult[5] = tmp5.row;
        cResult[6] = tmp6;
        cResult[7] = tmp9;
        cResult[8] = tmp14;
        tmp11 = tmp14;
      }
      const tmp10 = hasOwnProperty(Text_Text.Text, {
        variant: "text-xs/normal",
        color: str,
        selectable: true,
        children: value,
      });
      cResult[2] = str;
      cResult[3] = value;
      cResult[4] = tmp10;
      tmp9 = tmp10;
    }
  : (muted) => {
      let items;
      let label;
      let value;
      let flag = muted.muted;
      ({ label, value } = muted);
      if (flag === undefined) {
        flag = false;
      }
      const obj = { style: closure_8().row, children: items };
      items = [hasOwnProperty(Text_Text.Text, { variant: "text-xs/medium", color: "text-muted", children: label })];
      let str = "text-default";
      const Text = Text_Text.Text;
      if (flag) {
        str = "text-subtle";
      }
      items[1] = hasOwnProperty(Text, { variant: "text-xs/normal", color: str, selectable: true, children: value });
      return metroRequire(View, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_10 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let children;
      let items;
      let title;
      let tmp5;
      const obj = react2;
      const cResult = obj.c(6);
      ({ title, children } = arg0);
      const tmp4 = closure_8();
      if (cResult[0] !== title) {
        const obj2 = { variant: "text-xs/semibold", color: "text-default", children: title };
        const tmp7 = hasOwnProperty(Text_Text.Text, obj2);
        cResult[0] = title;
        cResult[1] = tmp7;
        tmp5 = tmp7;
      } else {
        tmp5 = cResult[1];
      }
      if (cResult[2] === children) {
        if (cResult[3] === tmp4.section) {
          let tmp8;
          if (cResult[4] === tmp5) {
            tmp8 = cResult[5];
          }
          return tmp8;
        }
      }
      const obj3 = { style: tmp4.section, children: items };
      items = [tmp5, children];
      const tmp9 = metroRequire(View, obj3);
      cResult[2] = children;
      cResult[3] = tmp4.section;
      cResult[4] = tmp5;
      cResult[5] = tmp9;
      tmp8 = tmp9;
    }
  : (arg0) => {
      let children;
      let items;
      let title;
      ({ title, children } = arg0);
      const obj = { style: closure_8().section, children: items };
      items = [
        hasOwnProperty(Text_Text.Text, { variant: "text-xs/semibold", color: "text-default", children: title }),
        children,
      ];
      return metroRequire(View, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_11 = ReactCompilerGating.isReactCompilerEnabled()
  ? (field) => {
      let key;
      let omitted;
      const obj = react2;
      const cResult = obj.c(14);
      if (null != field.field.value) {
        if (cResult[0] === field.field.key) {
          let tmp16;
          if (cResult[1] === field.field.value) {
            tmp16 = cResult[2];
          }
          return tmp16;
        }
        const obj2 = { label: null, value: null };
        ({ key: obj7.label, value: obj7.value } = field.field);
        const tmp19 = hasOwnProperty(closure_9, obj2);
        cResult[0] = field.field.key;
        cResult[1] = field.field.value;
        cResult[2] = tmp19;
        tmp16 = tmp19;
      } else {
        let formatToPlainStringResult;
        if (cResult[3] === field.field.chars) {
          let tmp4;
          let tmp8;
          if (cResult[4] === field.field.items) {
            tmp4 = cResult[5];
          }
          ({ omitted, key } = field.field);
          if (omitted == null) {
            omitted = "content";
          }
          if (cResult[6] !== omitted) {
            const tmpResult = debug_ConjureTraceFormat;
            const omissionLabelResult = tmpResult.omissionLabel(omitted);
            cResult[6] = omitted;
            cResult[7] = omissionLabelResult;
            tmp8 = omissionLabelResult;
          } else {
            tmp8 = cResult[7];
          }
          if (cResult[8] === tmp4) {
            let obj5;
            if (cResult[9] === tmp8) {
              obj5 = cResult[10];
            }
            const joined = obj5.join(" \u00B7 ");
            if (cResult[11] === field.field.key) {
              let tmp12;
              if (cResult[12] === joined) {
                tmp12 = cResult[13];
              }
              return tmp12;
            }
            const obj3 = { label: key, value: joined, muted: true };
            const tmp15 = hasOwnProperty(closure_9, obj3);
            cResult[11] = field.field.key;
            cResult[12] = joined;
            cResult[13] = tmp15;
            tmp12 = tmp15;
          }
          const items = [tmp8, tmp4];
          const found = items.filter((item) => null != item);
          cResult[8] = tmp4;
          cResult[9] = tmp8;
          cResult[10] = found;
          obj5 = found;
        }
        if (null != field.field.chars) {
          const intl2 = intl30.intl;
          const obj4 = { count: field.field.chars };
          formatToPlainStringResult = intl2.formatToPlainString(_modDef3723.ib7All, obj4);
        } else {
          formatToPlainStringResult = null;
          if (null != field.field.items) {
            const intl = intl30.intl;
            const obj6 = { count: field.field.items };
            formatToPlainStringResult = intl.formatToPlainString(_modDef3723.cIqKbA, obj6);
          }
        }
        cResult[3] = field.field.chars;
        cResult[4] = field.field.items;
        cResult[5] = formatToPlainStringResult;
        tmp4 = formatToPlainStringResult;
      }
    }
  : (field) => {
      let found;
      if (null != field.field.value) {
        const obj2 = { label: null, value: null };
        ({ key: obj5.label, value: obj5.value } = field.field);
        return hasOwnProperty(closure_9, obj2);
      } else {
        let formatToPlainStringResult;
        if (null != field.field.chars) {
          const intl2 = intl30.intl;
          const obj3 = { count: field.field.chars };
          formatToPlainStringResult = intl2.formatToPlainString(_modDef3723.ib7All, obj3);
        } else {
          formatToPlainStringResult = null;
          if (null != field.field.items) {
            const intl = intl30.intl;
            const obj = { count: field.field.items };
            formatToPlainStringResult = intl.formatToPlainString(_modDef3723.cIqKbA, obj);
          }
        }
        let str = iter.omitted;
        const obj4 = { label: field.field.key, value: found.join(" \u00B7 "), muted: true };
        const omissionLabel = debug_ConjureTraceFormat.omissionLabel;
        debug_ConjureTraceFormat;
        if (str == null) {
          str = "content";
        }
        const items = [omissionLabel(str), formatToPlainStringResult];
        found = items.filter((item) => null != item);
        return hasOwnProperty(closure_9, obj4);
      }
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_12 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let intl;
      let items;
      let row;
      let obj = require("react");
      const cResult = obj.c(8);
      const entries = arg0.entries;
      const tmp4 = closure_8();
      _require = tmp4;
      if (0 === entries.length) {
        return null;
      } else {
        let first;
        let tmp10;
        const _Symbol = Symbol;
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          let obj2 = {
            variant: "text-xs/semibold",
            color: "text-feedback-warning",
            children: intl.string(_modDef3723.LRIpHQ),
          };
          let Text = tmp(4886).Text;
          intl = tmp(1126).intl;
          const tmp8 = closure_5(Text, obj2);
          cResult[0] = tmp8;
          first = tmp8;
        } else {
          first = cResult[0];
        }
        if (cResult[1] === entries) {
          let tmp9;
          let tmp12;
          if (cResult[2] === tmp4) {
            tmp9 = cResult[3];
          }
          if (cResult[6] !== tmp9) {
            let obj3 = { children: items };
            items = [first, tmp9];
            const tmp15 = closure_6(closure_7, obj3);
            cResult[6] = tmp9;
            cResult[7] = tmp15;
            tmp12 = tmp15;
          } else {
            tmp12 = cResult[7];
          }
          return tmp12;
        }
        if (cResult[4] !== tmp4) {
          const fn = function x(children) {
            let intl;
            let items;
            let obj4;
            const obj = { style: row.row, children: items };
            items = [, , ,];
            const obj2 = { variant: "text-xs/medium", color: "text-muted", children: children.key };
            items[0] = hasOwnProperty(Text_Text.Text, obj2);
            let tmp4Result = null;
            if (null != children.value) {
              const obj3 = { style: row.rich, children: hasOwnProperty(Text_Text.Text, obj4) };
              obj4 = { variant: "text-xs/normal", color: "text-default", selectable: true, children: children.value };
              tmp4Result = hasOwnProperty(View, obj3);
            }
            items[1] = tmp4Result;
            let tmp4Result3 = null;
            if (true === children.scrubbed) {
              const obj5 = {
                variant: "text-xs/normal",
                color: "text-feedback-warning",
                children: intl.string(_modDef3723["+kQ+K3"]),
              };
              const Text = Text_Text.Text;
              intl = intl30.intl;
              tmp4Result3 = hasOwnProperty(Text, obj5);
            }
            items[2] = tmp4Result3;
            let tmp4Result4 = null;
            if (true === children.truncated) {
              let stringResult;
              const Text2 = Text_Text.Text;
              if (null == children.chars) {
                const intl3 = intl30.intl;
                stringResult = intl3.string(_modDef3723.ijkkUh);
              } else {
                const intl2 = intl30.intl;
                const obj6 = { count: children.chars };
                stringResult = intl2.formatToPlainString(_modDef3723.PRt8I0, obj6);
              }
              const obj7 = { variant: "text-xs/normal", color: "text-subtle", children: stringResult };
              tmp4Result4 = hasOwnProperty(Text2, obj7);
            }
            items[3] = tmp4Result4;
            return metroRequire(View, obj, children.key);
          };
          cResult[4] = tmp4;
          cResult[5] = fn;
          tmp10 = fn;
        } else {
          tmp10 = cResult[5];
        }
        const mapped = entries.map(tmp10);
        cResult[1] = entries;
        cResult[2] = tmp4;
        cResult[3] = mapped;
        tmp9 = mapped;
      }
    }
  : (arg0) => {
      let intl;
      let items;
      let row;
      const entries = arg0.entries;
      _require = closure_8();
      let tmp = null;
      if (0 !== entries.length) {
        let obj = { children: items };
        let obj2 = {
          variant: "text-xs/semibold",
          color: "text-feedback-warning",
          children: intl.string(_modDef3723.LRIpHQ),
        };
        let Text = require("Text/Text").Text;
        intl = require("intl").intl;
        items = [
          closure_5(Text, obj2),
          entries.map((children) => {
            let intl;
            let items;
            let obj4;
            const obj = { style: row.row, children: items };
            items = [, , ,];
            const obj2 = { variant: "text-xs/medium", color: "text-muted", children: children.key };
            items[0] = hasOwnProperty(Text_Text.Text, obj2);
            let tmp4Result = null;
            if (null != children.value) {
              const obj3 = { style: row.rich, children: hasOwnProperty(Text_Text.Text, obj4) };
              obj4 = { variant: "text-xs/normal", color: "text-default", selectable: true, children: children.value };
              tmp4Result = hasOwnProperty(View, obj3);
            }
            items[1] = tmp4Result;
            let tmp4Result3 = null;
            if (true === children.scrubbed) {
              const obj5 = {
                variant: "text-xs/normal",
                color: "text-feedback-warning",
                children: intl.string(_modDef3723["+kQ+K3"]),
              };
              const Text = Text_Text.Text;
              intl = intl30.intl;
              tmp4Result3 = hasOwnProperty(Text, obj5);
            }
            items[2] = tmp4Result3;
            let tmp4Result4 = null;
            if (true === children.truncated) {
              let stringResult;
              const Text2 = Text_Text.Text;
              if (null == children.chars) {
                const intl3 = intl30.intl;
                stringResult = intl3.string(_modDef3723.ijkkUh);
              } else {
                const intl2 = intl30.intl;
                const obj6 = { count: children.chars };
                stringResult = intl2.formatToPlainString(_modDef3723.PRt8I0, obj6);
              }
              const obj7 = { variant: "text-xs/normal", color: "text-subtle", children: stringResult };
              tmp4Result4 = hasOwnProperty(Text2, obj7);
            }
            items[3] = tmp4Result4;
            return metroRequire(View, obj, children.key);
          }),
        ];
        tmp = closure_6(closure_7, obj);
      }
      return tmp;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (projectId) => {
      let BottomSheetScrollView;
      let Te7mPn;
      let VO3gdd;
      let cacheWriteTokens;
      let costUsd;
      let entryId;
      let first;
      let formatToPlainString;
      let formatToPlainString2;
      let formatToPlainString3;
      let formatToPlainString4;
      let formatTokens;
      let formatTokens2;
      let ib7All;
      let initialEntry;
      let intl10;
      let intl11;
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
      let intl24;
      let intl25;
      let intl26;
      let intl27;
      let intl29;
      let intl3;
      let intl4;
      let intl5;
      let intl7;
      let intl9;
      let items2;
      let items3;
      let items4;
      let items5;
      let items6;
      let items7;
      let items8;
      let num10;
      let num11;
      let num12;
      let num13;
      let obj18;
      let obj24;
      let obj26;
      let obj30;
      let obj37;
      let obj6;
      let obj7;
      let resultAdded;
      let resultRemoved;
      let stringResult;
      let tmp10;
      let tmp22;
      let tmp24;
      let tmp25Result29;
      let tmp9;
      let tmpResult23;
      let tmpResult25;
      let tmpResult26;
      let v6GQUgQ;
      const tmp = projectId;
      let obj = projectId(576);
      const cResult = obj.c(8);
      projectId = projectId.projectId;
      ({ entryId, initialEntry } = projectId);
      const tmp4 = closure_8();
      let obj2 = projectId(16761);
      const traceCategoryTextStyles = obj2.useTraceCategoryTextStyles();
      const bottom = useSafeAreaInsetsDefault().bottom;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ConjureProjectStore];
        cResult[0] = items;
        first = items;
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
        tmp10 = items1;
        tmp9 = fn;
      } else {
        tmp9 = cResult[2];
        tmp10 = cResult[3];
      }
      const tmpResult = tmp(504);
      const stateFromStoresArray = tmpResult.useStateFromStoresArray(first, tmp9, tmp10);
      const tmpResult15 = tmp(16763);
      let findTraceEntryResult = tmpResult15.findTraceEntry(stateFromStoresArray, entryId);
      if (findTraceEntryResult == null) {
        findTraceEntryResult = initialEntry;
      }
      let findTraceEntryResult1 = null;
      if ("tool" === findTraceEntryResult.kind) {
        let parentId = findTraceEntryResult.parentId;
        const findTraceEntry = tmp(16763).findTraceEntry;
        tmp(16763);
        if (parentId == null) {
          parentId = null;
        }
        findTraceEntryResult1 = findTraceEntry(stateFromStoresArray, parentId);
      }
      const tmpResult17 = tmp(16763);
      const length = tmpResult17.traceChildren(stateFromStoresArray, findTraceEntryResult.id).length;
      const obj3 = { childCount: length, hasParent: null != findTraceEntryResult1 };
      const tmpResult18 = tmp(16767);
      const traceDetailSectionsResult = tmpResult18.traceDetailSections(findTraceEntryResult, obj3);
      let detailId;
      const useConjureTraceDetail = tmp(16768).useConjureTraceDetail;
      tmp(16768);
      if ("tool" === findTraceEntryResult.kind) {
        detailId = findTraceEntryResult.detailId;
      }
      const conjureTraceDetail = useConjureTraceDetail(projectId, detailId);
      const tmp19 = "model" === findTraceEntryResult.kind ? findTraceEntryResult.model : findTraceEntryResult.tool;
      const tmpResult20 = tmp(16765);
      const formatClockTimeResult = tmpResult20.formatClockTime(findTraceEntryResult.startedAt, "millis");
      const tmpResult21 = tmp(16763);
      const traceCategoryResult = tmpResult21.traceCategory(findTraceEntryResult);
      if (cResult[4] !== conjureTraceDetail) {
        const tmpResult22 = tmp(16762);
        const traceRichStatusLabelResult = tmpResult22.traceRichStatusLabel(conjureTraceDetail);
        cResult[4] = conjureTraceDetail;
        cResult[5] = traceRichStatusLabelResult;
        tmp22 = traceRichStatusLabelResult;
      } else {
        tmp22 = cResult[5];
      }
      if (cResult[6] !== bottom) {
        const obj4 = { paddingBottom: bottom };
        cResult[6] = bottom;
        cResult[7] = obj4;
        tmp24 = obj4;
      } else {
        tmp24 = cResult[7];
      }
      const obj5 = {
        scrollable: true,
        header: closure_5(tmp(6644).BottomSheetTitleHeader, { title: tmp19 }),
        children: closure_5(BottomSheetScrollView, obj6),
      };
      const ActionSheet = tmp(6701).ActionSheet;
      obj6 = { contentContainerStyle: tmp24, children: closure_6(View, obj7) };
      obj7 = { style: tmp4.content, children: items3 };
      const obj8 = { style: tmp4.head, children: items2 };
      BottomSheetScrollView = tmp(6112).BottomSheetScrollView;
      items2 = [, ,];
      const obj9 = { status: findTraceEntryResult.status };
      items2[0] = closure_5(tmp(16761).TraceStatusDot, obj9);
      const obj10 = {
        variant: "text-xs/semibold",
        style: traceCategoryTextStyles[traceCategoryResult],
        children: tmpResult23.categoryLabel(traceCategoryResult),
      };
      const Text = tmp(4886).Text;
      tmpResult23 = tmp(16762);
      items2[1] = closure_5(Text, obj10);
      const obj11 = { variant: "text-xs/normal", color: "text-muted", style: tmp4.headTitle, children: stringResult };
      const Text2 = tmp(4886).Text;
      if (null == findTraceEntryResult.durationMs) {
        let intl = tmp(1126).intl;
        stringResult = intl.string(_modDef3723["2wyRDK"]);
      } else {
        const tmpResult24 = tmp(16762);
        stringResult = tmpResult24.formatDuration(findTraceEntryResult.durationMs);
      }
      items2[2] = closure_5(Text2, obj11);
      items3 = [closure_6(View, obj8), , , , , ,];
      let tmp25Result = null;
      if (null != findTraceEntryResult.error) {
        const obj12 = {
          variant: "text-xs/normal",
          color: "text-feedback-critical",
          selectable: true,
          children: findTraceEntryResult.error,
        };
        tmp25Result = closure_5(tmp(4886).Text, obj12);
      }
      items3[1] = tmp25Result;
      let tmp26Result = null;
      if (traceDetailSectionsResult.includes("arguments")) {
        tmp26Result = null;
        if ("tool" === findTraceEntryResult.kind) {
          const obj13 = { title: intl25.string(_modDef3723["G/4JST"]), children: items4 };
          intl25 = tmp(1126).intl;
          let fields = findTraceEntryResult.fields;
          if (fields == null) {
            fields = [];
          }
          items4 = [
            fields.map((field) => {
              const obj = { field };
              return closure_1_5(closure_1_11, obj, field.key);
            }),
            ,
          ];
          let status;
          if (conjureTraceDetail != null) {
            status = conjureTraceDetail.status;
          }
          let tmp25Result18 = null;
          if ("loaded" === status) {
            tmp25Result18 = null;
            if (null != conjureTraceDetail.rich.args) {
              const obj14 = { entries: conjureTraceDetail.rich.args };
              tmp25Result18 = closure_5(closure_12, obj14);
            }
          }
          items4[1] = tmp25Result18;
          let tmp25Result19 = null;
          if (null != tmp22) {
            const obj15 = { variant: "text-xs/normal", color: "text-subtle", children: tmp22 };
            tmp25Result19 = closure_5(tmp(4886).Text, obj15);
          }
          items4[2] = tmp25Result19;
          tmp26Result = closure_6(closure_10, obj13);
        }
      }
      items3[2] = tmp26Result;
      let tmp26Result5 = null;
      if (traceDetailSectionsResult.includes("result")) {
        tmp26Result5 = null;
        if ("tool" === findTraceEntryResult.kind) {
          const obj16 = { title: intl26.string(_modDef3723.Dgg25Y), children: items5 };
          intl26 = tmp(1126).intl;
          const obj17 = { label: intl27.string(_modDef3723["U+OQCo"]), value: formatToPlainString4(ib7All, obj18) };
          intl27 = tmp(1126).intl;
          const intl28 = tmp(1126).intl;
          formatToPlainString4 = intl28.formatToPlainString;
          let num9 = findTraceEntryResult.resultChars;
          ib7All = _modDef3723.ib7All;
          if (num9 == null) {
            num9 = 0;
          }
          obj18 = { count: num9 };
          items5 = [closure_5(closure_9, obj17), , ,];
          let tmp25Result20 = null;
          if (null != findTraceEntryResult.resultAdded) {
            const obj19 = {
              label: intl2.string(_modDef3723["MQYS+n"]),
              value: "+" + resultAdded + " \u2212" + resultRemoved,
            };
            intl2 = tmp(1126).intl;
            ({ resultRemoved, resultAdded } = findTraceEntryResult);
            if (resultRemoved == null) {
              resultRemoved = 0;
            }
            const _HermesInternal = HermesInternal;
            tmp25Result20 = closure_5(closure_9, obj19);
          }
          items5[1] = tmp25Result20;
          let tmp25Result21 = null;
          if (true === findTraceEntryResult.resultTruncated) {
            const obj20 = {
              label: intl3.string(_modDef3723.t7GJFc),
              value: intl4.string(_modDef3723.ijkkUh),
              muted: true,
            };
            intl3 = tmp(1126).intl;
            intl4 = tmp(1126).intl;
            tmp25Result21 = closure_5(closure_9, obj20);
          }
          items5[2] = tmp25Result21;
          let status1;
          if (conjureTraceDetail != null) {
            status1 = conjureTraceDetail.status;
          }
          let tmp25Result22 = null;
          if ("loaded" === status1) {
            tmp25Result22 = null;
            if (null != conjureTraceDetail.rich.result) {
              const obj21 = { entries: conjureTraceDetail.rich.result };
              tmp25Result22 = closure_5(closure_12, obj21);
            }
          }
          items5[3] = tmp25Result22;
          tmp26Result5 = closure_6(closure_10, obj16);
        }
      }
      items3[3] = tmp26Result5;
      let tmp26Result6 = null;
      if (traceDetailSectionsResult.includes("usage")) {
        tmp26Result6 = null;
        if ("model" === findTraceEntryResult.kind) {
          const obj22 = { title: intl29.string(_modDef3723.NXmRw1), children: items6 };
          intl29 = tmp(1126).intl;
          let tmp25Result23 = null;
          if (null != findTraceEntryResult.promptTokens) {
            const obj23 = { label: intl5.string(_modDef3723.iq3T1q), value: formatToPlainString(v6GQUgQ, obj24) };
            intl5 = tmp(1126).intl;
            const intl6 = tmp(1126).intl;
            formatToPlainString = intl6.formatToPlainString;
            obj24 = { tokens: tmpResult25.formatTokens(findTraceEntryResult.promptTokens) };
            v6GQUgQ = _modDef3723["6GQUgQ"];
            tmpResult25 = tmp(16762);
            tmp25Result23 = closure_5(closure_9, obj23);
          }
          items6 = [tmp25Result23, , , , , ,];
          let tmp25Result24 = null;
          if (null != findTraceEntryResult.systemTokens) {
            const obj25 = { label: intl7.string(_modDef3723.ZELAZn), value: formatToPlainString2(Te7mPn, obj26) };
            intl7 = tmp(1126).intl;
            const intl8 = tmp(1126).intl;
            formatToPlainString2 = intl8.formatToPlainString;
            obj26 = {
              system: tmpResult26.formatTokens(findTraceEntryResult.systemTokens),
              tools: formatTokens(num10),
              toolCount: num11,
              messages: formatTokens2(num12),
              messageCount: num13,
            };
            Te7mPn = _modDef3723.Te7mPn;
            num10 = findTraceEntryResult.toolsTokens;
            tmpResult26 = tmp(16762);
            formatTokens = tmp(16762).formatTokens;
            tmp(16762);
            if (num10 == null) {
              num10 = 0;
            }
            num11 = findTraceEntryResult.tools;
            if (num11 == null) {
              num11 = 0;
            }
            num12 = findTraceEntryResult.messagesTokens;
            formatTokens2 = tmp(16762).formatTokens;
            tmp(16762);
            if (num12 == null) {
              num12 = 0;
            }
            num13 = findTraceEntryResult.messages;
            if (num13 == null) {
              num13 = 0;
            }
            tmp25Result24 = closure_5(closure_9, obj25);
          }
          items6[1] = tmp25Result24;
          let tmp25Result25 = null;
          if (null != findTraceEntryResult.inputTokens) {
            const obj27 = {
              label: intl9.string(_modDef3723["LENc/T"]),
              value: String(findTraceEntryResult.inputTokens),
            };
            intl9 = tmp(1126).intl;
            const _String = String;
            tmp25Result25 = closure_5(closure_9, obj27);
          }
          items6[2] = tmp25Result25;
          let tmp25Result26 = null;
          if (null != findTraceEntryResult.outputTokens) {
            const obj28 = {
              label: intl10.string(_modDef3723.ewRHwx),
              value: String(findTraceEntryResult.outputTokens),
            };
            intl10 = tmp(1126).intl;
            const _String2 = String;
            tmp25Result26 = closure_5(closure_9, obj28);
          }
          items6[3] = tmp25Result26;
          let tmp25Result27 = null;
          if (null != findTraceEntryResult.cacheReadTokens) {
            const obj29 = { label: intl11.string(_modDef3723.heVFQD), value: formatToPlainString3(VO3gdd, obj30) };
            intl11 = tmp(1126).intl;
            const intl12 = tmp(1126).intl;
            formatToPlainString3 = intl12.formatToPlainString;
            obj30 = { read: null, write: cacheWriteTokens };
            ({ cacheReadTokens: obj38.read, cacheWriteTokens } = findTraceEntryResult);
            VO3gdd = _modDef3723.VO3gdd;
            if (cacheWriteTokens == null) {
              cacheWriteTokens = 0;
            }
            tmp25Result27 = closure_5(closure_9, obj29);
          }
          items6[4] = tmp25Result27;
          let tmp25Result28 = null;
          if (null != findTraceEntryResult.costUsd) {
            const obj31 = { label: intl13.string(_modDef3723.aBw2Vm), value: "$" + costUsd.toFixed(4) };
            intl13 = tmp(1126).intl;
            costUsd = findTraceEntryResult.costUsd;
            const _HermesInternal2 = HermesInternal;
            tmp25Result28 = closure_5(closure_9, obj31);
          }
          items6[5] = tmp25Result28;
          const obj32 = {
            variant: "text-xs/normal",
            color: "text-subtle",
            children: intl14.string(_modDef3723["foF/Bc"]),
          };
          const Text3 = tmp(4886).Text;
          intl14 = tmp(1126).intl;
          items6[6] = closure_5(Text3, obj32);
          tmp26Result6 = closure_6(closure_10, obj22);
        }
      }
      items3[4] = tmp26Result6;
      if (traceDetailSectionsResult.includes("arguments")) {
        const obj33 = { variant: "text-xs/normal", color: "text-subtle", children: intl15.string(_modDef3723.o24IFK) };
        const Text4 = tmp(4886).Text;
        intl15 = tmp(1126).intl;
        tmp25Result29 = closure_5(Text4, obj33);
      } else {
        tmp25Result29 = null;
      }
      items3[5] = tmp25Result29;
      let tmp26Result8 = null;
      if (traceDetailSectionsResult.includes("diagnostics")) {
        const obj34 = { title: intl16.string(_modDef3723["dix/W4"]), children: items7 };
        intl16 = tmp(1126).intl;
        let tmp25Result30 = null;
        if (null != findTraceEntryResult1) {
          const obj35 = {
            label: intl17.string(_modDef3723.soPsOJ),
            value: "model" === findTraceEntryResult1.kind ? findTraceEntryResult1.model : findTraceEntryResult1.tool,
          };
          intl17 = tmp(1126).intl;
          tmp25Result30 = closure_5(closure_9, obj35);
        }
        items7 = [tmp25Result30, , , , , ,];
        let tmp25Result31 = null;
        if (length > 0) {
          const obj36 = {
            label: intl18.string(_modDef3723.kNZBxr),
            value: intl19.formatToPlainString(_modDef3723["6LoCUh"], obj37),
          };
          intl18 = tmp(1126).intl;
          intl19 = tmp(1126).intl;
          obj37 = { count: length };
          tmp25Result31 = closure_5(closure_9, obj36);
        }
        items7[1] = tmp25Result31;
        let tmp25Result32 = null;
        if (null != findTraceEntryResult.turnId) {
          const obj39 = { label: intl20.string(_modDef3723.bL1r5J), value: findTraceEntryResult.turnId };
          intl20 = tmp(1126).intl;
          tmp25Result32 = closure_5(closure_9, obj39);
        }
        items7[2] = tmp25Result32;
        const obj40 = { label: intl21.string(_modDef3723.Ndwr7X), value: findTraceEntryResult.id };
        intl21 = tmp(1126).intl;
        items7[3] = closure_5(closure_9, obj40);
        let tmp25Result33 = null;
        if (null != formatClockTimeResult) {
          const obj41 = { label: intl22.string(_modDef3723.sO8ghW), value: formatClockTimeResult };
          intl22 = tmp(1126).intl;
          tmp25Result33 = closure_5(closure_9, obj41);
        }
        items7[4] = tmp25Result33;
        let tmp25Result34 = null;
        if ("model" === findTraceEntryResult.kind) {
          tmp25Result34 = null;
          if (null != findTraceEntryResult.stopReason) {
            const obj42 = { label: intl23.string(_modDef3723.VfYxPF), value: findTraceEntryResult.stopReason };
            intl23 = tmp(1126).intl;
            tmp25Result34 = closure_5(closure_9, obj42);
          }
        }
        items7[5] = tmp25Result34;
        let tmp26Result7 = null;
        if ("tool" === findTraceEntryResult.kind) {
          tmp26Result7 = null;
          if (null != findTraceEntryResult.schema) {
            tmp26Result7 = null;
            if (findTraceEntryResult.schema.length > 0) {
              const obj43 = { children: items8 };
              const obj44 = {
                variant: "text-xs/semibold",
                color: "text-muted",
                children: intl24.string(_modDef3723.mSm8iy),
              };
              const Text5 = tmp(4886).Text;
              intl24 = tmp(1126).intl;
              items8 = [closure_5(Text5, obj44)];
              const schema = findTraceEntryResult.schema;
              items8[1] = schema.map((label) => {
                let formatToPlainString;
                let obj2;
                let required;
                let tmp3;
                const obj = {
                  label: label.name,
                  value: formatToPlainString(required ? tmp3["6aSRPA"] : tmp3.q2B975, obj2),
                };
                const intl = projectId(dependencyMap[9]).intl;
                formatToPlainString = intl.formatToPlainString;
                required = label.required;
                tmp3 = _modDef3723;
                obj2 = { type: label.type };
                return closure_1_5(closure_1_9, obj, label.name);
              });
              tmp26Result7 = closure_6(closure_7, obj43);
            }
          }
        }
        items7[6] = tmp26Result7;
        tmp26Result8 = closure_6(closure_10, obj34);
      }
      items3[6] = tmp26Result8;
      return closure_5(ActionSheet, obj5);
    }
  : (projectId) => {
      let BottomSheetScrollView;
      let Te7mPn;
      let VO3gdd;
      let cacheWriteTokens;
      let costUsd;
      let entryId;
      let formatToPlainString;
      let formatToPlainString2;
      let formatToPlainString3;
      let formatToPlainString4;
      let formatTokens;
      let formatTokens2;
      let ib7All;
      let initialEntry;
      let intl10;
      let intl11;
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
      let intl24;
      let intl25;
      let intl26;
      let intl27;
      let intl29;
      let intl3;
      let intl4;
      let intl5;
      let intl7;
      let intl9;
      let items2;
      let items3;
      let items4;
      let items5;
      let items6;
      let items7;
      let items8;
      let num2;
      let num3;
      let num4;
      let num5;
      let obj18;
      let obj24;
      let obj26;
      let obj30;
      let obj38;
      let obj6;
      let obj7;
      let resultAdded;
      let resultRemoved;
      let stringResult;
      let tmp18Result29;
      let tmp2Result19;
      let tmp2Result21;
      let tmp2Result22;
      let v6GQUgQ;
      projectId = projectId.projectId;
      ({ entryId, initialEntry } = projectId);
      const tmp = closure_8();
      const tmp2 = projectId;
      let obj = projectId(16761);
      const traceCategoryTextStyles = obj.useTraceCategoryTextStyles();
      const bottom = useSafeAreaInsetsDefault().bottom;
      let obj2 = projectId(504);
      const items = [ConjureProjectStore];
      const items1 = [projectId];
      const stateFromStoresArray = obj2.useStateFromStoresArray(
        items,
        () => ConjureProjectStore.getTrace(projectId),
        items1,
      );
      const obj3 = projectId(16763);
      let findTraceEntryResult = obj3.findTraceEntry(stateFromStoresArray, entryId);
      if (findTraceEntryResult == null) {
        findTraceEntryResult = initialEntry;
      }
      let findTraceEntryResult1 = null;
      if ("tool" === findTraceEntryResult.kind) {
        let parentId = findTraceEntryResult.parentId;
        const findTraceEntry = tmp2(16763).findTraceEntry;
        tmp2(16763);
        if (parentId == null) {
          parentId = null;
        }
        findTraceEntryResult1 = findTraceEntry(stateFromStoresArray, parentId);
      }
      const tmp2Result13 = tmp2(16763);
      const length = tmp2Result13.traceChildren(stateFromStoresArray, findTraceEntryResult.id).length;
      const obj4 = { childCount: length, hasParent: null != findTraceEntryResult1 };
      const tmp2Result14 = tmp2(16767);
      const traceDetailSectionsResult = tmp2Result14.traceDetailSections(findTraceEntryResult, obj4);
      let detailId;
      const useConjureTraceDetail = tmp2(16768).useConjureTraceDetail;
      tmp2(16768);
      if ("tool" === findTraceEntryResult.kind) {
        detailId = findTraceEntryResult.detailId;
      }
      const conjureTraceDetail = useConjureTraceDetail(projectId, detailId);
      const tmp14 = "model" === findTraceEntryResult.kind ? findTraceEntryResult.model : findTraceEntryResult.tool;
      const tmp2Result16 = tmp2(16765);
      const formatClockTimeResult = tmp2Result16.formatClockTime(findTraceEntryResult.startedAt, "millis");
      const tmp2Result17 = tmp2(16763);
      const traceCategoryResult = tmp2Result17.traceCategory(findTraceEntryResult);
      const tmp2Result18 = tmp2(16762);
      const traceRichStatusLabelResult = tmp2Result18.traceRichStatusLabel(conjureTraceDetail);
      const obj5 = {
        scrollable: true,
        header: closure_5(tmp2(6644).BottomSheetTitleHeader, { title: tmp14 }),
        children: closure_5(BottomSheetScrollView, obj6),
      };
      const ActionSheet = tmp2(6701).ActionSheet;
      obj6 = { contentContainerStyle: { paddingBottom: bottom }, children: closure_6(View, obj7) };
      obj7 = { style: tmp.content, children: items3 };
      const obj8 = { style: tmp.head, children: items2 };
      BottomSheetScrollView = tmp2(6112).BottomSheetScrollView;
      items2 = [, ,];
      const obj9 = { status: findTraceEntryResult.status };
      items2[0] = closure_5(tmp2(16761).TraceStatusDot, obj9);
      const obj10 = {
        variant: "text-xs/semibold",
        style: traceCategoryTextStyles[traceCategoryResult],
        children: tmp2Result19.categoryLabel(traceCategoryResult),
      };
      const Text = tmp2(4886).Text;
      tmp2Result19 = tmp2(16762);
      items2[1] = closure_5(Text, obj10);
      const obj11 = { variant: "text-xs/normal", color: "text-muted", style: tmp.headTitle, children: stringResult };
      const Text2 = tmp2(4886).Text;
      if (null == findTraceEntryResult.durationMs) {
        let intl = tmp2(1126).intl;
        stringResult = intl.string(_modDef3723["2wyRDK"]);
      } else {
        const tmp2Result20 = tmp2(16762);
        stringResult = tmp2Result20.formatDuration(findTraceEntryResult.durationMs);
      }
      items2[2] = closure_5(Text2, obj11);
      items3 = [closure_6(View, obj8), , , , , ,];
      let tmp18Result = null;
      if (null != findTraceEntryResult.error) {
        const obj12 = {
          variant: "text-xs/normal",
          color: "text-feedback-critical",
          selectable: true,
          children: findTraceEntryResult.error,
        };
        tmp18Result = closure_5(tmp2(4886).Text, obj12);
      }
      items3[1] = tmp18Result;
      let tmp19Result = null;
      if (traceDetailSectionsResult.includes("arguments")) {
        tmp19Result = null;
        if ("tool" === findTraceEntryResult.kind) {
          const obj13 = { title: intl25.string(_modDef3723["G/4JST"]), children: items4 };
          intl25 = tmp2(1126).intl;
          let fields = findTraceEntryResult.fields;
          if (fields == null) {
            fields = [];
          }
          items4 = [
            fields.map((field) => {
              const obj = { field };
              return closure_1_5(closure_1_11, obj, field.key);
            }),
            ,
          ];
          let status;
          if (conjureTraceDetail != null) {
            status = conjureTraceDetail.status;
          }
          let tmp18Result18 = null;
          if ("loaded" === status) {
            tmp18Result18 = null;
            if (null != conjureTraceDetail.rich.args) {
              const obj14 = { entries: conjureTraceDetail.rich.args };
              tmp18Result18 = closure_5(closure_12, obj14);
            }
          }
          items4[1] = tmp18Result18;
          let tmp18Result19 = null;
          if (null != traceRichStatusLabelResult) {
            const obj15 = { variant: "text-xs/normal", color: "text-subtle", children: traceRichStatusLabelResult };
            tmp18Result19 = closure_5(tmp2(4886).Text, obj15);
          }
          items4[2] = tmp18Result19;
          tmp19Result = closure_6(closure_10, obj13);
        }
      }
      items3[2] = tmp19Result;
      let tmp19Result5 = null;
      if (traceDetailSectionsResult.includes("result")) {
        tmp19Result5 = null;
        if ("tool" === findTraceEntryResult.kind) {
          const obj16 = { title: intl26.string(_modDef3723.Dgg25Y), children: items5 };
          intl26 = tmp2(1126).intl;
          const obj17 = { label: intl27.string(_modDef3723["U+OQCo"]), value: formatToPlainString4(ib7All, obj18) };
          intl27 = tmp2(1126).intl;
          const intl28 = tmp2(1126).intl;
          formatToPlainString4 = intl28.formatToPlainString;
          let num = findTraceEntryResult.resultChars;
          ib7All = _modDef3723.ib7All;
          if (num == null) {
            num = 0;
          }
          obj18 = { count: num };
          items5 = [closure_5(closure_9, obj17), , ,];
          let tmp18Result20 = null;
          if (null != findTraceEntryResult.resultAdded) {
            const obj19 = {
              label: intl2.string(_modDef3723["MQYS+n"]),
              value: "+" + resultAdded + " \u2212" + resultRemoved,
            };
            intl2 = tmp2(1126).intl;
            ({ resultRemoved, resultAdded } = findTraceEntryResult);
            if (resultRemoved == null) {
              resultRemoved = 0;
            }
            const _HermesInternal = HermesInternal;
            tmp18Result20 = closure_5(closure_9, obj19);
          }
          items5[1] = tmp18Result20;
          let tmp18Result21 = null;
          if (true === findTraceEntryResult.resultTruncated) {
            const obj20 = {
              label: intl3.string(_modDef3723.t7GJFc),
              value: intl4.string(_modDef3723.ijkkUh),
              muted: true,
            };
            intl3 = tmp2(1126).intl;
            intl4 = tmp2(1126).intl;
            tmp18Result21 = closure_5(closure_9, obj20);
          }
          items5[2] = tmp18Result21;
          let status1;
          if (conjureTraceDetail != null) {
            status1 = conjureTraceDetail.status;
          }
          let tmp18Result22 = null;
          if ("loaded" === status1) {
            tmp18Result22 = null;
            if (null != conjureTraceDetail.rich.result) {
              const obj21 = { entries: conjureTraceDetail.rich.result };
              tmp18Result22 = closure_5(closure_12, obj21);
            }
          }
          items5[3] = tmp18Result22;
          tmp19Result5 = closure_6(closure_10, obj16);
        }
      }
      items3[3] = tmp19Result5;
      let tmp19Result6 = null;
      if (traceDetailSectionsResult.includes("usage")) {
        tmp19Result6 = null;
        if ("model" === findTraceEntryResult.kind) {
          const obj22 = { title: intl29.string(_modDef3723.NXmRw1), children: items6 };
          intl29 = tmp2(1126).intl;
          let tmp18Result23 = null;
          if (null != findTraceEntryResult.promptTokens) {
            const obj23 = { label: intl5.string(_modDef3723.iq3T1q), value: formatToPlainString(v6GQUgQ, obj24) };
            intl5 = tmp2(1126).intl;
            const intl6 = tmp2(1126).intl;
            formatToPlainString = intl6.formatToPlainString;
            obj24 = { tokens: tmp2Result21.formatTokens(findTraceEntryResult.promptTokens) };
            v6GQUgQ = _modDef3723["6GQUgQ"];
            tmp2Result21 = tmp2(16762);
            tmp18Result23 = closure_5(closure_9, obj23);
          }
          items6 = [tmp18Result23, , , , , ,];
          let tmp18Result24 = null;
          if (null != findTraceEntryResult.systemTokens) {
            const obj25 = { label: intl7.string(_modDef3723.ZELAZn), value: formatToPlainString2(Te7mPn, obj26) };
            intl7 = tmp2(1126).intl;
            const intl8 = tmp2(1126).intl;
            formatToPlainString2 = intl8.formatToPlainString;
            obj26 = {
              system: tmp2Result22.formatTokens(findTraceEntryResult.systemTokens),
              tools: formatTokens(num2),
              toolCount: num3,
              messages: formatTokens2(num4),
              messageCount: num5,
            };
            Te7mPn = _modDef3723.Te7mPn;
            num2 = findTraceEntryResult.toolsTokens;
            tmp2Result22 = tmp2(16762);
            formatTokens = tmp2(16762).formatTokens;
            tmp2(16762);
            if (num2 == null) {
              num2 = 0;
            }
            num3 = findTraceEntryResult.tools;
            if (num3 == null) {
              num3 = 0;
            }
            num4 = findTraceEntryResult.messagesTokens;
            formatTokens2 = tmp2(16762).formatTokens;
            tmp2(16762);
            if (num4 == null) {
              num4 = 0;
            }
            num5 = findTraceEntryResult.messages;
            if (num5 == null) {
              num5 = 0;
            }
            tmp18Result24 = closure_5(closure_9, obj25);
          }
          items6[1] = tmp18Result24;
          let tmp18Result25 = null;
          if (null != findTraceEntryResult.inputTokens) {
            const obj27 = {
              label: intl9.string(_modDef3723["LENc/T"]),
              value: String(findTraceEntryResult.inputTokens),
            };
            intl9 = tmp2(1126).intl;
            const _String = String;
            tmp18Result25 = closure_5(closure_9, obj27);
          }
          items6[2] = tmp18Result25;
          let tmp18Result26 = null;
          if (null != findTraceEntryResult.outputTokens) {
            const obj28 = {
              label: intl10.string(_modDef3723.ewRHwx),
              value: String(findTraceEntryResult.outputTokens),
            };
            intl10 = tmp2(1126).intl;
            const _String2 = String;
            tmp18Result26 = closure_5(closure_9, obj28);
          }
          items6[3] = tmp18Result26;
          let tmp18Result27 = null;
          if (null != findTraceEntryResult.cacheReadTokens) {
            const obj29 = { label: intl11.string(_modDef3723.heVFQD), value: formatToPlainString3(VO3gdd, obj30) };
            intl11 = tmp2(1126).intl;
            const intl12 = tmp2(1126).intl;
            formatToPlainString3 = intl12.formatToPlainString;
            obj30 = { read: null, write: cacheWriteTokens };
            ({ cacheReadTokens: obj36.read, cacheWriteTokens } = findTraceEntryResult);
            VO3gdd = _modDef3723.VO3gdd;
            if (cacheWriteTokens == null) {
              cacheWriteTokens = 0;
            }
            tmp18Result27 = closure_5(closure_9, obj29);
          }
          items6[4] = tmp18Result27;
          let tmp18Result28 = null;
          if (null != findTraceEntryResult.costUsd) {
            const obj31 = { label: intl13.string(_modDef3723.aBw2Vm), value: "$" + costUsd.toFixed(4) };
            intl13 = tmp2(1126).intl;
            costUsd = findTraceEntryResult.costUsd;
            const _HermesInternal2 = HermesInternal;
            tmp18Result28 = closure_5(closure_9, obj31);
          }
          items6[5] = tmp18Result28;
          const obj32 = {
            variant: "text-xs/normal",
            color: "text-subtle",
            children: intl14.string(_modDef3723["foF/Bc"]),
          };
          const Text3 = tmp2(4886).Text;
          intl14 = tmp2(1126).intl;
          items6[6] = closure_5(Text3, obj32);
          tmp19Result6 = closure_6(closure_10, obj22);
        }
      }
      items3[4] = tmp19Result6;
      if (traceDetailSectionsResult.includes("arguments")) {
        const obj33 = { variant: "text-xs/normal", color: "text-subtle", children: intl15.string(_modDef3723.o24IFK) };
        const Text4 = tmp2(4886).Text;
        intl15 = tmp2(1126).intl;
        tmp18Result29 = closure_5(Text4, obj33);
      } else {
        tmp18Result29 = null;
      }
      items3[5] = tmp18Result29;
      let tmp19Result8 = null;
      if (traceDetailSectionsResult.includes("diagnostics")) {
        const obj34 = { title: intl16.string(_modDef3723["dix/W4"]), children: items7 };
        intl16 = tmp2(1126).intl;
        let tmp18Result30 = null;
        if (null != findTraceEntryResult1) {
          const obj35 = {
            label: intl17.string(_modDef3723.soPsOJ),
            value: "model" === findTraceEntryResult1.kind ? findTraceEntryResult1.model : findTraceEntryResult1.tool,
          };
          intl17 = tmp2(1126).intl;
          tmp18Result30 = closure_5(closure_9, obj35);
        }
        items7 = [tmp18Result30, , , , , ,];
        let tmp18Result31 = null;
        if (length > 0) {
          const obj37 = {
            label: intl18.string(_modDef3723.kNZBxr),
            value: intl19.formatToPlainString(_modDef3723["6LoCUh"], obj38),
          };
          intl18 = tmp2(1126).intl;
          intl19 = tmp2(1126).intl;
          obj38 = { count: length };
          tmp18Result31 = closure_5(closure_9, obj37);
        }
        items7[1] = tmp18Result31;
        let tmp18Result32 = null;
        if (null != findTraceEntryResult.turnId) {
          const obj39 = { label: intl20.string(_modDef3723.bL1r5J), value: findTraceEntryResult.turnId };
          intl20 = tmp2(1126).intl;
          tmp18Result32 = closure_5(closure_9, obj39);
        }
        items7[2] = tmp18Result32;
        const obj40 = { label: intl21.string(_modDef3723.Ndwr7X), value: findTraceEntryResult.id };
        intl21 = tmp2(1126).intl;
        items7[3] = closure_5(closure_9, obj40);
        let tmp18Result33 = null;
        if (null != formatClockTimeResult) {
          const obj41 = { label: intl22.string(_modDef3723.sO8ghW), value: formatClockTimeResult };
          intl22 = tmp2(1126).intl;
          tmp18Result33 = closure_5(closure_9, obj41);
        }
        items7[4] = tmp18Result33;
        let tmp18Result34 = null;
        if ("model" === findTraceEntryResult.kind) {
          tmp18Result34 = null;
          if (null != findTraceEntryResult.stopReason) {
            const obj42 = { label: intl23.string(_modDef3723.VfYxPF), value: findTraceEntryResult.stopReason };
            intl23 = tmp2(1126).intl;
            tmp18Result34 = closure_5(closure_9, obj42);
          }
        }
        items7[5] = tmp18Result34;
        let tmp19Result7 = null;
        if ("tool" === findTraceEntryResult.kind) {
          tmp19Result7 = null;
          if (null != findTraceEntryResult.schema) {
            tmp19Result7 = null;
            if (findTraceEntryResult.schema.length > 0) {
              const obj43 = { children: items8 };
              const obj44 = {
                variant: "text-xs/semibold",
                color: "text-muted",
                children: intl24.string(_modDef3723.mSm8iy),
              };
              const Text5 = tmp2(4886).Text;
              intl24 = tmp2(1126).intl;
              items8 = [closure_5(Text5, obj44)];
              const schema = findTraceEntryResult.schema;
              items8[1] = schema.map((label) => {
                let formatToPlainString;
                let obj2;
                let required;
                let tmp3;
                const obj = {
                  label: label.name,
                  value: formatToPlainString(required ? tmp3["6aSRPA"] : tmp3.q2B975, obj2),
                };
                const intl = projectId(dependencyMap[9]).intl;
                formatToPlainString = intl.formatToPlainString;
                required = label.required;
                tmp3 = _modDef3723;
                obj2 = { type: label.type };
                return closure_1_5(closure_1_9, obj, label.name);
              });
              tmp19Result7 = closure_6(closure_7, obj43);
            }
          }
        }
        items7[6] = tmp19Result7;
        tmp19Result8 = closure_6(closure_10, obj34);
      }
      items3[6] = tmp19Result8;
      return closure_5(ActionSheet, obj5);
    };
const result = size.fileFinishedImporting("modules/conjure/debug/native/ConjureTraceDetailSheet.tsx");

export default tmp5;
export const CONJURE_TRACE_DETAIL_SHEET_KEY = "ConjureTraceDetailSheet";
