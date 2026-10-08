// === Module 16923: ConjureHistorySheet ===

// Module 16923 (ConjureHistorySheet)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1999 */;
import _modDef3827 from "module_3827" /* 3827 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5054 */;
import Text_Text from "Text/Text" /* 5086 */;
import Stack_Stack from "Stack/Stack" /* 5373 */;
import components_Button_Button from "components/Button/Button" /* 5375 */;
import ActivityIndicator_ActivityIndicator from "ActivityIndicator/ActivityIndicator" /* 6158 */;
import TableRow from "TableRow" /* 6184 */;
import Card from "Card" /* 6186 */;
import TableRowGroup2 from "TableRowGroup" /* 6267 */;
import IconButton from "IconButton" /* 8106 */;
import _modDef8746 from "module_8746" /* 8746 */;
import ContextMenu from "ContextMenu" /* 9297 */;
import ConjureHistoryFormat from "ConjureHistoryFormat" /* 16920 */;
import ConjureVersionRestoreConfirm from "ConjureVersionRestoreConfirm" /* 16924 */;
import ConjureSaveBackupSheet from "ConjureSaveBackupSheet" /* 16927 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const ConjureConnectionStore = fn(13072);
({ restoreDatabaseToPoint: closure_7, restoreDatabaseToTimestamp: closure_8 } = ConjureConnectionStore);
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10, Fragment: closure_11 } = jsxProd);
let closure_12 = ["versions", "database"];
const createStyles = fn(5090);
let closure_13 = createStyles.createStyles((paddingBottom) => {
  const obj = { content: { gap: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_16, paddingBottom }, state: null, centeredRow: null, centered: null, sectionHeader: null, showAll: null, meta: null };
  const obj2 = { gap: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_16, paddingBottom };
  obj.state = { paddingVertical: nativeDefault.space.PX_32, paddingHorizontal: nativeDefault.space.PX_16 };
  obj.centeredRow = { alignItems: "center" };
  obj.centered = { textAlign: "center" };
  const obj3 = { paddingVertical: nativeDefault.space.PX_32, paddingHorizontal: nativeDefault.space.PX_16 };
  obj.sectionHeader = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: nativeDefault.space.PX_12 };
  obj.showAll = { alignItems: "flex-start" };
  const obj4 = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: nativeDefault.space.PX_12 };
  obj.meta = { flexDirection: "row", flexWrap: "wrap", alignItems: "center", gap: nativeDefault.space.PX_8, marginTop: nativeDefault.space.PX_4 };
  return obj;
});
let ReactCompilerGating = fn(558);
let closure_14 = ReactCompilerGating.isReactCompilerEnabled() ? (function HistoryMessage(arg0) {
  const cResult = c.c(17);
  ({ title, body, onRetry } = arg0);
  const tmp4 = closure_13(0);
  if (cResult[0] === tmp4.centered) {
    if (cResult[1] === title) {
      let tmp5 = cResult[2];
    }
    if (cResult[3] === body) {
      if (cResult[4] === tmp4.centered) {
        let tmp7 = cResult[5];
      }
      if (cResult[6] === onRetry) {
        if (cResult[7] === tmp4.centeredRow) {
          let tmp10 = cResult[8];
        }
        if (cResult[9] === tmp5) {
          if (cResult[10] === tmp7) {
            if (cResult[11] === tmp10) {
              let tmp15 = cResult[12];
            }
            if (cResult[13] === tmp4.state) {
              if (cResult[14] === str) {
                if (cResult[15] === tmp15) {
                  let tmp18 = cResult[16];
                }
                return tmp18;
              }
            }
            const obj2 = { style: tmp4.state, accessibilityRole: str, children: tmp15 };
            const tmp21 = options(View, obj2);
            cResult[13] = tmp4.state;
            cResult[14] = str;
            cResult[15] = tmp15;
            cResult[16] = tmp21;
            tmp18 = tmp21;
          }
        }
        const obj3 = { spacing: 8, children: null };
        const items = [tmp5, tmp7, tmp10];
        obj3.children = items;
        const tmp17 = collapsed(Stack_Stack.Stack, obj3);
        cResult[9] = tmp5;
        cResult[10] = tmp7;
        cResult[11] = tmp10;
        cResult[12] = tmp17;
        tmp15 = tmp17;
      }
      let tmp11 = null;
      if (null != onRetry) {
        const obj4 = { style: tmp4.centeredRow, children: null };
        const obj5 = { variant: "secondary", size: "sm", text: null, onPress: null };
        const intl = util.intl;
        obj5.text = intl.string(_modDef3827.HOuQ9H);
        obj5.onPress = onRetry;
        obj4.children = options(components_Button_Button.Button, obj5);
        tmp11 = options(View, obj4);
      }
      cResult[6] = onRetry;
      cResult[7] = tmp4.centeredRow;
      cResult[8] = tmp11;
      tmp10 = tmp11;
    }
    const obj6 = { variant: "text-sm/normal", color: "text-muted", style: tmp4.centered, children: body };
    const tmp9 = options(Text_Text.Text, obj6);
    cResult[3] = body;
    cResult[4] = tmp4.centered;
    cResult[5] = tmp9;
    tmp7 = tmp9;
  }
  const tmp6 = options(Text_Text.Heading, { variant: "heading-md/semibold", style: tmp4.centered, children: title });
  cResult[0] = tmp4.centered;
  cResult[1] = title;
  cResult[2] = tmp6;
  tmp5 = tmp6;
  const obj7 = { variant: "heading-md/semibold", style: tmp4.centered, children: title };
}) : (function HistoryMessage(onRetry) {
  onRetry = onRetry.onRetry;
  ({ title, body } = onRetry);
  const tmp = closure_13(0);
  const obj = { style: tmp.state, accessibilityRole: null, children: null };
  let str;
  if (null != onRetry) {
    str = "alert";
  }
  obj.accessibilityRole = str;
  const items = [options(Text_Text.Heading, { variant: "heading-md/semibold", style: tmp.centered, children: title }), options(Text_Text.Text, { variant: "text-sm/normal", color: "text-muted", style: tmp.centered, children: body }), ];
  let tmp2Result = null;
  if (null != onRetry) {
    const obj4 = { style: tmp.centeredRow, children: null };
    const obj5 = { variant: "secondary", size: "sm", text: null, onPress: null };
    const intl = util.intl;
    obj5.text = intl.string(_modDef3827.HOuQ9H);
    obj5.onPress = onRetry;
    obj4.children = options(components_Button_Button.Button, obj5);
    tmp2Result = options(View, obj4);
  }
  items[2] = tmp2Result;
  obj.children = collapsed(Stack_Stack.Stack, { spacing: 8, children: items });
  return options(View, obj);
});
ReactCompilerGating = fn(558);
let closure_15 = ReactCompilerGating.isReactCompilerEnabled() ? (function HistoryLoading() {
  const cResult = c.c(6);
  const tmp4 = closure_13(0);
  if (cResult[0] === tmp4.centeredRow) {
    if (cResult[1] === tmp4.state) {
      let tmp5 = cResult[2];
    }
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp9 = options(ActivityIndicator_ActivityIndicator.ActivityIndicator, {});
      cResult[3] = tmp9;
      let tmp7 = tmp9;
    } else {
      tmp7 = cResult[3];
    }
    if (cResult[4] !== tmp5) {
      const obj2 = { style: tmp5, children: tmp7 };
      const tmp13 = options(View, obj2);
      cResult[4] = tmp5;
      cResult[5] = tmp13;
      let tmp10 = tmp13;
    } else {
      tmp10 = cResult[5];
    }
    return tmp10;
  }
  const items = [, ];
  ({ state: arr[0], centeredRow: arr[1], centeredRow: tmp3[0] } = tmp4);
  cResult[1] = tmp4.state;
  cResult[2] = items;
  tmp5 = items;
}) : (function HistoryLoading() {
  const obj = { style: null, children: options(ActivityIndicator_ActivityIndicator.ActivityIndicator, {}) };
  const items = [, ];
  ({ state: arr[0], centeredRow: arr[1] } = closure_13(0));
  obj.style = items;
  return options(View, obj);
});
ReactCompilerGating = fn(558);
let closure_16 = ReactCompilerGating.isReactCompilerEnabled() ? (function HistoryDayGroups(arg0) {
  const cResult = renderItem(576).c(9);
  ({ items, getMs, nowMs, renderItem } = arg0);
  if (cResult[0] === getMs) {
    if (cResult[1] === items) {
      if (cResult[2] === nowMs) {
        if (cResult[3] === renderItem) {
          if (cResult[7] !== cResult[4]) {
            const obj2 = { spacing: 16, children: tmp4 };
            const tmp9 = closure_9(renderItem(5373).Stack, obj2);
            cResult[7] = tmp4;
            cResult[8] = tmp9;
            let tmp7 = tmp9;
          } else {
            tmp7 = cResult[8];
          }
          return tmp7;
        }
      }
    }
  }
  if (cResult[5] !== renderItem) {
    const fn = function s(label) {
      label = label.label;
      const obj = { title: label, hasIcons: false, children: null };
      const items = label.items;
      obj.children = items.map(renderItem);
      return options(TableRowGroup2.TableRowGroup, obj, label.key);
    };
    cResult[5] = renderItem;
    cResult[6] = fn;
    let tmp5 = fn;
  } else {
    tmp5 = cResult[6];
  }
  let obj = renderItem(576);
  const tmpResult = renderItem(16920);
  const mapped = renderItem(16920).groupHistoryByDay(items, getMs, nowMs).map(tmp5);
  cResult[0] = getMs;
  cResult[1] = items;
  cResult[2] = nowMs;
  cResult[3] = renderItem;
  cResult[4] = mapped;
  const groupHistoryByDayResult = renderItem(16920).groupHistoryByDay(items, getMs, nowMs);
}) : (function HistoryDayGroups(renderItem) {
  renderItem = renderItem.renderItem;
  ({ items, getMs, nowMs } = renderItem);
  let obj = { spacing: 16, children: null };
  const obj2 = renderItem(16920);
  obj.children = renderItem(16920).groupHistoryByDay(items, getMs, nowMs).map((label) => {
    label = label.label;
    const obj = { title: label, hasIcons: false, children: null };
    const items = label.items;
    obj.children = items.map(renderItem);
    return options(TableRowGroup2.TableRowGroup, obj, label.key);
  });
  return closure_9(renderItem(5373).Stack, obj);
});
ReactCompilerGating = fn(558);
let closure_17 = ReactCompilerGating.isReactCompilerEnabled() ? (function VersionsPanel(restoreDisabled) {
  const cResult = previewBackups(onRestore[9]).c(20);
  ({ versions, previewBackups } = restoreDisabled);
  restoreDisabled = restoreDisabled.restoreDisabled;
  ({ onRetry, onRestore } = restoreDisabled);
  const tmp4 = closure_13(0);
  asyncGeneratorStep = tmp4;
  if ("loading" === versions.status) {
    const _Symbol3 = Symbol;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp30 = closure_9(closure_15, {});
      cResult[0] = tmp30;
      let first = tmp30;
    } else {
      first = cResult[0];
    }
    return first;
  } else if ("failed" === versions.status) {
    const _Symbol2 = Symbol;
    if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
      let intl3 = previewBackups(onRestore[12]).intl;
      const stringResult = intl3.string(restoreDisabled(onRestore[13]).Xduqn2);
      let intl4 = previewBackups(onRestore[12]).intl;
      const stringResult1 = intl4.string(restoreDisabled(onRestore[13]).TOFCh3);
      cResult[1] = stringResult;
      cResult[2] = stringResult1;
      let tmp18 = stringResult1;
      let tmp17 = stringResult;
    } else {
      tmp17 = cResult[1];
      tmp18 = cResult[2];
    }
    if (cResult[3] !== onRetry) {
      let obj2 = { title: tmp17, body: tmp18, onRetry };
      const tmp25 = closure_9(closure_14, obj2);
      cResult[3] = onRetry;
      cResult[4] = tmp25;
      let tmp22 = tmp25;
    } else {
      tmp22 = cResult[4];
    }
    return tmp22;
  } else {
    ({ entries, publishedSha } = versions.data);
    if (cResult[5] !== versions.data) {
      const historyPreviewShaResult = previewBackups(onRestore[17]).historyPreviewSha(versions.data);
      cResult[5] = versions.data;
      cResult[6] = historyPreviewShaResult;
      let tmp5 = historyPreviewShaResult;
      let tmpResult = previewBackups(onRestore[17]);
    } else {
      tmp5 = cResult[6];
    }
    closure_5 = tmp5;
    if (0 === entries.length) {
      const _Symbol = Symbol;
      if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
        let obj3 = { title: null, body: null };
        let intl = previewBackups(onRestore[12]).intl;
        obj3.title = intl.string(restoreDisabled(onRestore[13]).MczNnb);
        let intl2 = previewBackups(onRestore[12]).intl;
        obj3.body = intl2.string(restoreDisabled(onRestore[13])["8L/U2T"]);
        const tmp14 = closure_9(closure_14, obj3);
        cResult[7] = tmp14;
      }
    } else {
      const _Symbol4 = Symbol;
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        class A {
          constructor(arg0) {
            obj = previewBackups(onRestore[17]);
            return obj.parseTimestampMs(restoreDisabled.authoredAt);
          }
        }
        cResult[8] = A;
      } else {
        class A {
          constructor(arg0) {
            obj = previewBackups(onRestore[17]);
            return obj.parseTimestampMs(restoreDisabled.authoredAt);
          }
        }
      }
      if (cResult[9] === onRestore) {
        class A {
          constructor(arg0) {
            obj = previewBackups(onRestore[17]);
            return obj.parseTimestampMs(restoreDisabled.authoredAt);
          }
        }
      }
      class B {
        constructor(arg0) {
          closure_0 = restoreDisabled;
          tmp = previewBackups;
          tmp2 = onRestore;
          obj = previewBackups(onRestore[17]);
          versionTitleResult = obj.versionTitle(restoreDisabled.subject, true === restoreDisabled.restored);
          obj2 = previewBackups(onRestore[17]);
          parseTimestampMsResult = obj2.parseTimestampMs(restoreDisabled.authoredAt);
          tmp5 = restoreDisabled.sha === closure_5;
          items = [];
          if (tmp5) {
            obj1 = { id: "preview", label: null };
            intl = tmp(tmp2[12]).intl;
            tmp6 = restoreDisabled;
            obj1.label = intl.string(restoreDisabled(tmp2[13]).KVnLPd);
            arr1 = items.push(obj1);
          }
          if (restoreDisabled.sha === publishedSha) {
            obj12 = { id: "published", label: null };
            intl2 = tmp(tmp2[12]).intl;
            tmp8 = restoreDisabled;
            obj12.label = intl2.string(restoreDisabled(tmp2[13]).qulPhb);
            arr3 = items.push(obj12);
          }
          tmp10 = closure_1_9;
          obj13 = { label: versionTitleResult.short, subLabel: null, trailing: null };
          obj14 = { style: closure_3.meta, children: null };
          tmp10Result = null;
          tmp11 = closure_1_10;
          tmp12 = closure_1_6;
          if (null != parseTimestampMsResult) {
            obj15 = { variant: "text-sm/normal", color: "text-muted", children: null };
            tmpResult = tmp(tmp2[17]);
            obj15.children = tmpResult.formatHistoryTime(parseTimestampMsResult);
            tmp10Result = tmp10(tmp(tmp2[10]).Text, obj15);
          }
          items1 = [, ];
          items1[0] = tmp10Result;
          tmp10Result1 = null;
          if (items.length > 0) {
            obj16 = { label: null, items: null, size: "xs" };
            intl3 = tmp(tmp2[12]).intl;
            tmp15 = restoreDisabled;
            obj16.label = intl3.string(restoreDisabled(tmp2[13]).IxKJ5y);
            obj16.items = items;
            tmp10Result1 = tmp10(tmp(tmp2[19]).TagGroup, obj16);
          }
          items1[1] = tmp10Result1;
          obj14.children = items1;
          obj13.subLabel = tmp11(tmp12, obj14);
          tmp10Result2 = null;
          if (!tmp5) {
            obj17 = { variant: "secondary", size: "sm", text: null, accessibilityLabel: null, disabled: null, onPress: null };
            intl4 = tmp(tmp2[12]).intl;
            tmp17 = restoreDisabled;
            obj17.text = intl4.string(restoreDisabled(tmp2[13])["1NAPyC"]);
            intl5 = tmp(tmp2[12]).intl;
            obj18 = { title: null };
            obj18.title = versionTitleResult.short;
            obj17.accessibilityLabel = intl5.formatToPlainString(restoreDisabled(tmp2[13])["2KgEnm"], obj18);
            tmp18 = restoreDisabled;
            obj17.disabled = restoreDisabled;
            obj17.onPress = function onPress() { ... };
            tmp10Result2 = tmp10(tmp(tmp2[11]).Button, obj17);
          }
          obj13.trailing = tmp10Result2;
          return tmp10(tmp(tmp2[18]).TableRow, obj13, restoreDisabled.sha);
        }
      }
      cResult[9] = onRestore;
      cResult[10] = previewBackups;
      cResult[11] = tmp5;
      cResult[12] = publishedSha;
      cResult[13] = restoreDisabled;
      cResult[14] = tmp4.meta;
      cResult[15] = B;
    }
  }
  let obj = previewBackups(onRestore[9]);
}) : (function VersionsPanel(onRetry) {
  ({ versions, previewBackups: require, restoreDisabled: importDefault, onRestore: dependencyMap } = onRetry);
  c4 = undefined;
  closure_5 = undefined;
  const meta = closure_13(0);
  if ("loading" === versions.status) {
    return closure_9(closure_15, {});
  } else if ("failed" === versions.status) {
    let obj2 = { title: null, body: null, onRetry: null };
    let intl3 = util.intl;
    obj2.title = intl3.string(_modDef3827.Xduqn2);
    let intl4 = util.intl;
    obj2.body = intl4.string(_modDef3827.TOFCh3);
    obj2.onRetry = onRetry.onRetry;
    return closure_9(closure_14, obj2);
  } else {
    ({ entries, publishedSha: c4 } = versions.data);
    closure_5 = ConjureHistoryFormat.historyPreviewSha(versions.data);
    if (0 === entries.length) {
      let obj3 = { title: null, body: null };
      let intl = util.intl;
      obj3.title = intl.string(_modDef3827.MczNnb);
      let intl2 = util.intl;
      obj3.body = intl2.string(_modDef3827["8L/U2T"]);
      let tmp3 = closure_9(closure_14, obj3);
    } else {
      let obj = {
        items: entries,
        getMs(authoredAt) {
              return require("ConjureHistoryFormat").parseTimestampMs(authoredAt.authoredAt);
            },
        nowMs: versions.nowMs,
        renderItem(subject) {
              closure_0 = subject;
              const versionTitleResult = require("ConjureHistoryFormat").versionTitle(subject.subject, true === subject.restored);
              let obj = require("ConjureHistoryFormat");
              const parseTimestampMsResult = require("ConjureHistoryFormat").parseTimestampMs(subject.authoredAt);
              const items = [];
              if (subject.sha === closure_5) {
                const obj3 = { id: "preview", label: null };
                const intl = require("util").intl;
                obj3.label = intl.string(disabled(3827).KVnLPd);
                items.push(obj3);
              }
              if (subject.sha === c4) {
                const obj4 = { id: "published", label: null };
                const intl2 = require("util").intl;
                obj4.label = intl2.string(disabled(3827).qulPhb);
                items.push(obj4);
              }
              const obj5 = { label: versionTitleResult.short, subLabel: null, trailing: null };
              const obj6 = { style: meta.meta, children: null };
              let tmp10Result = null;
              if (null != parseTimestampMsResult) {
                const obj7 = { variant: "text-sm/normal", color: "text-muted", children: require("ConjureHistoryFormat").formatHistoryTime(parseTimestampMsResult) };
                tmp10Result = closure_1_9(require("Text/Text").Text, obj7);
                const tmpResult = require("ConjureHistoryFormat");
              }
              const items1 = [tmp10Result, ];
              let tmp10Result3 = null;
              if (items.length > 0) {
                const obj8 = { label: null, items: null, size: "xs" };
                const intl3 = require("util").intl;
                obj8.label = intl3.string(disabled(3827).IxKJ5y);
                obj8.items = items;
                tmp10Result3 = closure_1_9(require("TagGroup").TagGroup, obj8);
              }
              items1[1] = tmp10Result3;
              obj6.children = items1;
              obj5.subLabel = closure_1_10(View, obj6);
              let tmp10Result4 = null;
              if (subject.sha !== closure_5) {
                const obj9 = { variant: "secondary", size: "sm", text: null, accessibilityLabel: null, disabled: null, onPress: null };
                const intl4 = require("util").intl;
                obj9.text = intl4.string(disabled(3827)["1NAPyC"]);
                const intl5 = require("util").intl;
                const obj10 = { title: versionTitleResult.short };
                obj9.accessibilityLabel = intl5.formatToPlainString(disabled(3827)["2KgEnm"], obj10);
                obj9.disabled = disabled;
                obj9.onPress = function onPress() {
                  const obj2 = { matchingBackup: null, onConfirm: null };
                  const obj = ConjureVersionRestoreConfirm;
                  obj2.matchingBackup = ConjureHistoryFormat.matchingPreviewBackup(closure_0, _require);
                  obj2.onConfirm = function onConfirm(arg0) {
                    return dependencyMap(subject, arg0);
                  };
                  return obj.confirmRestoreVersion(obj2);
                };
                tmp10Result4 = closure_1_9(require("components/Button/Button").Button, obj9);
              }
              obj5.trailing = tmp10Result4;
              return closure_1_9(require("TableRow").TableRow, obj5, subject.sha);
            }
      };
      tmp3 = closure_9(closure_16, obj);
    }
    return tmp3;
  }
});
ReactCompilerGating = fn(558);
let closure_18 = ReactCompilerGating.isReactCompilerEnabled() ? (function DatabaseSection(busy) {
  const cResult = _window(busy[9]).c(77);
  ({ database, sharedDatabase, versionTitles } = busy);
  busy = busy.busy;
  const onRestoreBackup = busy.onRestoreBackup;
  const onRewindToTime = busy.onRewindToTime;
  const onSaveBackup = busy.onSaveBackup;
  let num = 0;
  const tmp4 = closure_13(0);
  let num2 = 2;
  const obj = _window(busy[9]);
  [tmp6, View] = onRewindToTime(onSaveBackup.useState(false), 2);
  const environment = database.environment;
  state = database.backups;
  if (cResult[0] === state.retry) {
    if (cResult[1] === state.state) {
      if (cResult[2] === busy) {
        if (cResult[3] === environment) {
          if (cResult[4] === tmp6) {
            if (cResult[5] === onRestoreBackup) {
              if (cResult[6] === sharedDatabase) {
                if (cResult[7] === tmp4.showAll) {
                  if (cResult[8] === versionTitles) {
                    _window = tmp8;
                    const accessibilityLabel = tmp9;
                    const _Symbol4 = Symbol;
                    if (cResult[44] === Symbol.for("react.memo_cache_sentinel")) {
                      const intl4 = tmp(tmp2[12]).intl;
                      const stringResult = intl4.string(versionTitles(tmp2[13]).uNd2Je);
                      cResult[44] = stringResult;
                      let tmp68 = stringResult;
                    } else {
                      tmp68 = cResult[44];
                    }
                    if (cResult[45] === environment) {
                      if (cResult[46] === onSaveBackup) {
                        let tmp72 = cResult[47];
                      }
                      if (cResult[48] === tmp71) {
                        if (cResult[49] === tmp72) {
                          let tmp73 = cResult[50];
                        }
                        const _Symbol5 = Symbol;
                        if (cResult[51] === Symbol.for("react.memo_cache_sentinel")) {
                          const intl5 = tmp(tmp2[12]).intl;
                          const stringResult1 = intl5.string(versionTitles(tmp2[13]).Xi6pDt);
                          cResult[51] = stringResult1;
                          let tmp74 = stringResult1;
                        } else {
                          tmp74 = cResult[51];
                        }
                        if (cResult[52] === environment) {
                          if (cResult[53] === onRewindToTime) {
                            if (cResult[54] === tmp8) {
                              let tmp79 = cResult[55];
                            }
                            if (cResult[56] === tmp78) {
                              if (cResult[57] === tmp79) {
                                let tmp80 = cResult[58];
                              }
                              if (cResult[59] === tmp73) {
                                if (cResult[60] === tmp80) {
                                  let tmp81 = cResult[61];
                                }
                                if (cResult[62] !== tmp10) {
                                  let obj2 = { variant: "heading-lg/semibold", children: tmp10 };
                                  const tmp84 = closure_9(tmp(tmp2[10]).Heading, obj2);
                                  cResult[62] = tmp10;
                                  cResult[63] = tmp84;
                                  let tmp82 = tmp84;
                                } else {
                                  tmp82 = cResult[63];
                                }
                                if (cResult[64] !== tmp9) {
                                  function ce(arg0) {
                                    ({ ref, onPress, accessibilityActions, onAccessibilityAction } = arg0);
                                    return options(IconButton.IconButton, { ref, icon: _modDef8746, size: "sm", variant: "secondary", accessibilityLabel, accessibilityActions, onAccessibilityAction, onPress });
                                  }
                                  cResult[64] = tmp9;
                                  cResult[65] = ce;
                                  let tmp85 = ce;
                                } else {
                                  tmp85 = cResult[65];
                                }
                                if (cResult[66] === tmp81) {
                                  if (cResult[67] === tmp9) {
                                    if (cResult[68] === tmp85) {
                                      let tmp86 = cResult[69];
                                    }
                                    if (cResult[70] === tmp4.sectionHeader) {
                                      if (cResult[71] === tmp82) {
                                        if (cResult[72] === tmp86) {
                                          let tmp89 = cResult[73];
                                        }
                                        if (cResult[74] === tmp7) {
                                          if (cResult[75] === tmp89) {
                                            let tmp93 = cResult[76];
                                          }
                                          return tmp93;
                                        }
                                        let obj3 = { start: true, end: true, variant: "secondary", border: "subtle", children: null };
                                        let obj4 = { spacing: 12, children: null };
                                        let items = [tmp89, tmp7];
                                        obj4.children = items;
                                        obj3.children = closure_10(tmp(tmp2[14]).Stack, obj4);
                                        const tmp96 = closure_9(tmp(tmp2[24]).Card, obj3);
                                        cResult[74] = tmp7;
                                        cResult[75] = tmp89;
                                        cResult[76] = tmp96;
                                        tmp93 = tmp96;
                                      }
                                    }
                                    const obj5 = { style: tmp4.sectionHeader, children: null };
                                    const items1 = [tmp82, tmp86];
                                    obj5.children = items1;
                                    const tmp92 = closure_10(View, obj5);
                                    cResult[70] = tmp4.sectionHeader;
                                    cResult[71] = tmp82;
                                    cResult[72] = tmp86;
                                    cResult[73] = tmp92;
                                    tmp89 = tmp92;
                                  }
                                }
                                const obj6 = { items: tmp81, title: tmp9, align: "below", children: tmp85 };
                                const tmp88 = closure_9(tmp(tmp2[23]).ContextMenu, obj6);
                                cResult[66] = tmp81;
                                cResult[67] = tmp9;
                                cResult[68] = tmp85;
                                cResult[69] = tmp88;
                                tmp86 = tmp88;
                              }
                              const items2 = [tmp73, tmp80];
                              cResult[59] = tmp73;
                              cResult[60] = tmp80;
                              cResult[61] = items2;
                              tmp81 = items2;
                            }
                            const obj7 = { label: tmp74, disabled: tmp78, action: tmp79 };
                            cResult[56] = tmp78;
                            cResult[57] = tmp79;
                            cResult[58] = obj7;
                            tmp80 = obj7;
                          }
                        }
                        function ae() {
                          if (null != _window) {
                            onRewindToTime(environment, tmp.earliestRestoreTimestampMs);
                          }
                        }
                        cResult[52] = environment;
                        cResult[53] = onRewindToTime;
                        cResult[54] = tmp8;
                        cResult[55] = ae;
                        tmp79 = ae;
                      }
                      const obj8 = { label: tmp68, disabled: tmp71, action: tmp72 };
                      cResult[48] = tmp71;
                      cResult[49] = tmp72;
                      cResult[50] = obj8;
                      tmp73 = obj8;
                    }
                    function ee() {
                      return onSaveBackup(environment);
                    }
                    cResult[45] = environment;
                    cResult[46] = onSaveBackup;
                    cResult[47] = ee;
                    tmp72 = ee;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  const tmp5 = onRewindToTime(onSaveBackup.useState(false), 2);
  const historyDatabaseTitleResult = _window(busy[17]).historyDatabaseTitle(environment, sharedDatabase);
  const state2 = state.state;
  _window = null;
  if ("loaded" === state2.status) {
    _window = state2.data.window;
  }
  if ("loading" === state2.status) {
    const _Symbol3 = Symbol;
    if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp58 = closure_9(closure_15, {});
      cResult[14] = tmp58;
    }
  } else {
    if ("failed" === state2.status) {
      const _Symbol2 = Symbol;
      if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
        let intl = tmp(tmp2[12]).intl;
        const stringResult2 = intl.string(versionTitles(tmp2[13]).Xduqn2);
        let intl2 = tmp(tmp2[12]).intl;
        const stringResult3 = intl2.string(versionTitles(tmp2[13])["VGh9H+"]);
        cResult[15] = stringResult2;
        cResult[16] = stringResult3;
        let tmp46 = stringResult3;
        let tmp45 = stringResult2;
      } else {
        tmp45 = cResult[15];
        tmp46 = cResult[16];
      }
      if (cResult[17] !== state.retry) {
        const obj9 = { title: tmp45, body: tmp46, onRetry: state.retry };
        const tmp53 = closure_9(closure_14, obj9);
        cResult[17] = state.retry;
        cResult[18] = tmp53;
        let tmp50 = tmp53;
      } else {
        tmp50 = cResult[18];
      }
      let tmp34 = tmp50;
      let intl3 = tmp(tmp2[12]).intl;
      const obj10 = { database: historyDatabaseTitleResult };
      const formatToPlainStringResult = intl3.formatToPlainString(versionTitles(tmp2[13]).tmSDLN, obj10);
      ({ retry: tmp3[num], state } = state);
      num = 1;
      cResult[1] = state;
      cResult[num2] = busy;
      cResult[3] = environment;
      cResult[4] = tmp6;
      cResult[5] = onRestoreBackup;
      cResult[6] = sharedDatabase;
      sharedDatabase = tmp4.showAll;
      cResult[7] = sharedDatabase;
      cResult[8] = versionTitles;
      cResult[9] = tmp34;
      cResult[10] = _window;
      cResult[11] = state2;
      cResult[12] = formatToPlainStringResult;
      num2 = 13;
      cResult[13] = historyDatabaseTitleResult;
    } else if (num !== state2.data.points.length) {
      if (cResult[20] === busy) {
        if (cResult[21] === tmp6) {
          if (cResult[22] === onRestoreBackup) {
            if (cResult[23] === state2.data.points) {
              if (cResult[24] === versionTitles) {
                if (cResult[33] === cResult[25]) {
                  if (cResult[34] === tmp15) {
                    if (cResult[35] === tmp16) {
                      let tmp23 = cResult[36];
                    }
                    if (cResult[37] === tmp14) {
                      if (cResult[38] === tmp6) {
                        if (cResult[39] === tmp4.showAll) {
                          let tmp26 = cResult[40];
                        }
                        if (cResult[41] === tmp23) {
                          if (cResult[42] === tmp26) {
                            tmp34 = cResult[43];
                          }
                        }
                        const obj11 = { children: null };
                        const items3 = [tmp23, ];
                        class F {
                          constructor(arg0) {
                            closure_0 = busy;
                            tmp = window;
                            tmp2 = busy;
                            obj = window(busy[17]);
                            backupRowResult = obj.backupRow(busy, restoreToMs);
                            restoreToMs = backupRowResult.restoreToMs;
                            tmp4 = closure_1_9;
                            obj1 = { label: backupRowResult.title, subLabel: null, disabled: null, trailing: null };
                            if (null != restoreToMs) {
                              detail = backupRowResult.detail;
                            } else {
                              items = [, ];
                              items[0] = backupRowResult.detail;
                              intl = tmp(tmp2[12]).intl;
                              tmp5 = versionTitles;
                              items[1] = intl.string(versionTitles(tmp2[13]).zPhIa9);
                              found = items.filter((item) => "" !== item);
                              str = " \u00B7 ";
                              detail = found.join(" \u00B7 ");
                            }
                            obj1.subLabel = detail;
                            obj1.disabled = null == restoreToMs;
                            tmp4Result = undefined;
                            if (null != restoreToMs) {
                              obj6 = { variant: "secondary", size: "sm", text: null, accessibilityLabel: null, disabled: null, onPress: null };
                              intl2 = tmp(tmp2[12]).intl;
                              tmp7 = versionTitles;
                              obj6.text = intl2.string(versionTitles(tmp2[13]).K3Q49G);
                              intl3 = tmp(tmp2[12]).intl;
                              obj7 = { title: null };
                              obj7.title = backupRowResult.title;
                              obj6.accessibilityLabel = intl3.formatToPlainString(versionTitles(tmp2[13])["hXP0m/"], obj7);
                              tmp8 = busy;
                              obj6.disabled = busy;
                              obj6.onPress = function onPress() {
                                return onRestoreBackup(closure_0, restoreToMs);
                              };
                              tmp4Result = tmp4(tmp(tmp2[11]).Button, obj6);
                            }
                            obj1.trailing = tmp4Result;
                            return tmp4(window(busy[18]).TableRow, obj1, busy.id);
                          }
                        }
                        obj11.children = items3;
                        const tmp37 = closure_10(closure_11, obj11);
                        cResult[41] = tmp23;
                        cResult[42] = tmp26;
                        cResult[43] = tmp37;
                        tmp34 = tmp37;
                      }
                    }
                    if (!tmp14) {
                      cResult[37] = tmp14;
                      cResult[38] = tmp6;
                      cResult[39] = tmp4.showAll;
                      class F {
                        constructor(arg0) {
                          closure_0 = busy;
                          tmp = window;
                          tmp2 = busy;
                          obj = window(busy[17]);
                          backupRowResult = obj.backupRow(busy, restoreToMs);
                          restoreToMs = backupRowResult.restoreToMs;
                          tmp4 = closure_1_9;
                          obj1 = { label: backupRowResult.title, subLabel: null, disabled: null, trailing: null };
                          if (null != restoreToMs) {
                            detail = backupRowResult.detail;
                          } else {
                            items = [, ];
                            items[0] = backupRowResult.detail;
                            intl = tmp(tmp2[12]).intl;
                            tmp5 = versionTitles;
                            items[1] = intl.string(versionTitles(tmp2[13]).zPhIa9);
                            found = items.filter((item) => "" !== item);
                            str = " \u00B7 ";
                            detail = found.join(" \u00B7 ");
                          }
                          obj1.subLabel = detail;
                          obj1.disabled = null == restoreToMs;
                          tmp4Result = undefined;
                          if (null != restoreToMs) {
                            obj6 = { variant: "secondary", size: "sm", text: null, accessibilityLabel: null, disabled: null, onPress: null };
                            intl2 = tmp(tmp2[12]).intl;
                            tmp7 = versionTitles;
                            obj6.text = intl2.string(versionTitles(tmp2[13]).K3Q49G);
                            intl3 = tmp(tmp2[12]).intl;
                            obj7 = { title: null };
                            obj7.title = backupRowResult.title;
                            obj6.accessibilityLabel = intl3.formatToPlainString(versionTitles(tmp2[13])["hXP0m/"], obj7);
                            tmp8 = busy;
                            obj6.disabled = busy;
                            obj6.onPress = function onPress() {
                              return onRestoreBackup(closure_0, restoreToMs);
                            };
                            tmp4Result = tmp4(tmp(tmp2[11]).Button, obj6);
                          }
                          obj1.trailing = tmp4Result;
                          return tmp4(window(busy[18]).TableRow, obj1, busy.id);
                        }
                      }
                      tmp26 = null;
                    } else {
                      const obj12 = { style: tmp4.showAll, children: null };
                      class F {
                        constructor(arg0) {
                          closure_0 = busy;
                          tmp = window;
                          tmp2 = busy;
                          obj = window(busy[17]);
                          backupRowResult = obj.backupRow(busy, restoreToMs);
                          restoreToMs = backupRowResult.restoreToMs;
                          tmp4 = closure_1_9;
                          obj1 = { label: backupRowResult.title, subLabel: null, disabled: null, trailing: null };
                          if (null != restoreToMs) {
                            detail = backupRowResult.detail;
                          } else {
                            items = [, ];
                            items[0] = backupRowResult.detail;
                            intl = tmp(tmp2[12]).intl;
                            tmp5 = versionTitles;
                            items[1] = intl.string(versionTitles(tmp2[13]).zPhIa9);
                            found = items.filter((item) => "" !== item);
                            str = " \u00B7 ";
                            detail = found.join(" \u00B7 ");
                          }
                          obj1.subLabel = detail;
                          obj1.disabled = null == restoreToMs;
                          tmp4Result = undefined;
                          if (null != restoreToMs) {
                            obj6 = { variant: "secondary", size: "sm", text: null, accessibilityLabel: null, disabled: null, onPress: null };
                            intl2 = tmp(tmp2[12]).intl;
                            tmp7 = versionTitles;
                            obj6.text = intl2.string(versionTitles(tmp2[13]).K3Q49G);
                            intl3 = tmp(tmp2[12]).intl;
                            obj7 = { title: null };
                            obj7.title = backupRowResult.title;
                            obj6.accessibilityLabel = intl3.formatToPlainString(versionTitles(tmp2[13])["hXP0m/"], obj7);
                            tmp8 = busy;
                            obj6.disabled = busy;
                            obj6.onPress = function onPress() {
                              return onRestoreBackup(closure_0, restoreToMs);
                            };
                            tmp4Result = tmp4(tmp(tmp2[11]).Button, obj6);
                          }
                          obj1.trailing = tmp4Result;
                          return tmp4(window(busy[18]).TableRow, obj1, busy.id);
                        }
                      }
                      let tmp28Result = versionTitles(tmp2[13]);
                      const obj13 = {
                        variant: "tertiary",
                        size: "sm",
                        text: tmp30(tmp6 ? tmp28Result.GgleNC : tmp28Result.qCWKAE),
                        onPress() {
                                              return View((arg0) => !arg0);
                                            }
                      };
                      tmp28Result = closure_9(tmp(tmp2[11]).Button, obj13);
                      obj12.children = tmp28Result;
                      closure_9(View, obj12);
                    }
                  }
                }
                const obj14 = { hasIcons: null, children: null };
                class F {
                  constructor(arg0) {
                    closure_0 = busy;
                    tmp = window;
                    tmp2 = busy;
                    obj = window(busy[17]);
                    backupRowResult = obj.backupRow(busy, restoreToMs);
                    restoreToMs = backupRowResult.restoreToMs;
                    tmp4 = closure_1_9;
                    obj1 = { label: backupRowResult.title, subLabel: null, disabled: null, trailing: null };
                    if (null != restoreToMs) {
                      detail = backupRowResult.detail;
                    } else {
                      items = [, ];
                      items[0] = backupRowResult.detail;
                      intl = tmp(tmp2[12]).intl;
                      tmp5 = versionTitles;
                      items[1] = intl.string(versionTitles(tmp2[13]).zPhIa9);
                      found = items.filter((item) => "" !== item);
                      str = " \u00B7 ";
                      detail = found.join(" \u00B7 ");
                    }
                    obj1.subLabel = detail;
                    obj1.disabled = null == restoreToMs;
                    tmp4Result = undefined;
                    if (null != restoreToMs) {
                      obj6 = { variant: "secondary", size: "sm", text: null, accessibilityLabel: null, disabled: null, onPress: null };
                      intl2 = tmp(tmp2[12]).intl;
                      tmp7 = versionTitles;
                      obj6.text = intl2.string(versionTitles(tmp2[13]).K3Q49G);
                      intl3 = tmp(tmp2[12]).intl;
                      obj7 = { title: null };
                      obj7.title = backupRowResult.title;
                      obj6.accessibilityLabel = intl3.formatToPlainString(versionTitles(tmp2[13])["hXP0m/"], obj7);
                      tmp8 = busy;
                      obj6.disabled = busy;
                      obj6.onPress = function onPress() {
                        return onRestoreBackup(closure_0, restoreToMs);
                      };
                      tmp4Result = tmp4(tmp(tmp2[11]).Button, obj6);
                    }
                    obj1.trailing = tmp4Result;
                    return tmp4(window(busy[18]).TableRow, obj1, busy.id);
                  }
                }
                obj14.children = cResult[28];
                const tmp25 = closure_9(cResult[25], obj14);
                cResult[33] = cResult[25];
                cResult[34] = cResult[27];
                cResult[35] = cResult[28];
                cResult[36] = tmp25;
                tmp23 = tmp25;
              }
            }
          }
        }
      }
      const tmpResult2 = tmp(tmp2[17]);
      ({ shown, collapsible } = tmp(tmp2[17]).visibleBackups(state2.data.points, tmp6));
      const TableRowGroup = tmp(tmp2[16]).TableRowGroup;
      if (cResult[29] === busy) {
        if (cResult[30] === onRestoreBackup) {
          if (cResult[31] === versionTitles) {
            let tmp18 = cResult[32];
          }
          const mapped = shown.map(tmp18);
          cResult[20] = busy;
          cResult[21] = tmp6;
          class F {
            constructor(arg0) {
              closure_0 = busy;
              tmp = window;
              tmp2 = busy;
              obj = window(busy[17]);
              backupRowResult = obj.backupRow(busy, restoreToMs);
              restoreToMs = backupRowResult.restoreToMs;
              tmp4 = closure_1_9;
              obj1 = { label: backupRowResult.title, subLabel: null, disabled: null, trailing: null };
              if (null != restoreToMs) {
                detail = backupRowResult.detail;
              } else {
                items = [, ];
                items[0] = backupRowResult.detail;
                intl = tmp(tmp2[12]).intl;
                tmp5 = versionTitles;
                items[1] = intl.string(versionTitles(tmp2[13]).zPhIa9);
                found = items.filter((item) => "" !== item);
                str = " \u00B7 ";
                detail = found.join(" \u00B7 ");
              }
              obj1.subLabel = detail;
              obj1.disabled = null == restoreToMs;
              tmp4Result = undefined;
              if (null != restoreToMs) {
                obj6 = { variant: "secondary", size: "sm", text: null, accessibilityLabel: null, disabled: null, onPress: null };
                intl2 = tmp(tmp2[12]).intl;
                tmp7 = versionTitles;
                obj6.text = intl2.string(versionTitles(tmp2[13]).K3Q49G);
                intl3 = tmp(tmp2[12]).intl;
                obj7 = { title: null };
                obj7.title = backupRowResult.title;
                obj6.accessibilityLabel = intl3.formatToPlainString(versionTitles(tmp2[13])["hXP0m/"], obj7);
                tmp8 = busy;
                obj6.disabled = busy;
                obj6.onPress = function onPress() {
                  return onRestoreBackup(closure_0, restoreToMs);
                };
                tmp4Result = tmp4(tmp(tmp2[11]).Button, obj6);
              }
              obj1.trailing = tmp4Result;
              return tmp4(window(busy[18]).TableRow, obj1, busy.id);
            }
          }
          cResult[23] = state2.data.points;
          cResult[24] = versionTitles;
          cResult[25] = TableRowGroup;
          cResult[26] = collapsible;
          cResult[27] = false;
          cResult[28] = mapped;
        }
      }
      class F {
        constructor(arg0) {
          closure_0 = busy;
          tmp = window;
          tmp2 = busy;
          obj = window(busy[17]);
          backupRowResult = obj.backupRow(busy, restoreToMs);
          restoreToMs = backupRowResult.restoreToMs;
          tmp4 = closure_1_9;
          obj1 = { label: backupRowResult.title, subLabel: null, disabled: null, trailing: null };
          if (null != restoreToMs) {
            detail = backupRowResult.detail;
          } else {
            items = [, ];
            items[0] = backupRowResult.detail;
            intl = tmp(tmp2[12]).intl;
            tmp5 = versionTitles;
            items[1] = intl.string(versionTitles(tmp2[13]).zPhIa9);
            found = items.filter((item) => "" !== item);
            str = " \u00B7 ";
            detail = found.join(" \u00B7 ");
          }
          obj1.subLabel = detail;
          obj1.disabled = null == restoreToMs;
          tmp4Result = undefined;
          if (null != restoreToMs) {
            obj6 = { variant: "secondary", size: "sm", text: null, accessibilityLabel: null, disabled: null, onPress: null };
            intl2 = tmp(tmp2[12]).intl;
            tmp7 = versionTitles;
            obj6.text = intl2.string(versionTitles(tmp2[13]).K3Q49G);
            intl3 = tmp(tmp2[12]).intl;
            obj7 = { title: null };
            obj7.title = backupRowResult.title;
            obj6.accessibilityLabel = intl3.formatToPlainString(versionTitles(tmp2[13])["hXP0m/"], obj7);
            tmp8 = busy;
            obj6.disabled = busy;
            obj6.onPress = function onPress() {
              return onRestoreBackup(closure_0, restoreToMs);
            };
            tmp4Result = tmp4(tmp(tmp2[11]).Button, obj6);
          }
          obj1.trailing = tmp4Result;
          return tmp4(window(busy[18]).TableRow, obj1, busy.id);
        }
      }
      cResult[29] = busy;
      cResult[30] = onRestoreBackup;
      cResult[31] = versionTitles;
      cResult[32] = F;
      tmp18 = F;
      const visibleBackupsResult = tmp(tmp2[17]).visibleBackups(state2.data.points, tmp6);
    }
    const _Symbol = Symbol;
    if (cResult[19] === Symbol.for("react.memo_cache_sentinel")) {
      const obj15 = { hasIcons: false, children: null };
      const obj16 = { label: null, disabled: true };
      class F {
        constructor(arg0) {
          closure_0 = busy;
          tmp = window;
          tmp2 = busy;
          obj = window(busy[17]);
          backupRowResult = obj.backupRow(busy, restoreToMs);
          restoreToMs = backupRowResult.restoreToMs;
          tmp4 = closure_1_9;
          obj1 = { label: backupRowResult.title, subLabel: null, disabled: null, trailing: null };
          if (null != restoreToMs) {
            detail = backupRowResult.detail;
          } else {
            items = [, ];
            items[0] = backupRowResult.detail;
            intl = tmp(tmp2[12]).intl;
            tmp5 = versionTitles;
            items[1] = intl.string(versionTitles(tmp2[13]).zPhIa9);
            found = items.filter((item) => "" !== item);
            str = " \u00B7 ";
            detail = found.join(" \u00B7 ");
          }
          obj1.subLabel = detail;
          obj1.disabled = null == restoreToMs;
          tmp4Result = undefined;
          if (null != restoreToMs) {
            obj6 = { variant: "secondary", size: "sm", text: null, accessibilityLabel: null, disabled: null, onPress: null };
            intl2 = tmp(tmp2[12]).intl;
            tmp7 = versionTitles;
            obj6.text = intl2.string(versionTitles(tmp2[13]).K3Q49G);
            intl3 = tmp(tmp2[12]).intl;
            obj7 = { title: null };
            obj7.title = backupRowResult.title;
            obj6.accessibilityLabel = intl3.formatToPlainString(versionTitles(tmp2[13])["hXP0m/"], obj7);
            tmp8 = busy;
            obj6.disabled = busy;
            obj6.onPress = function onPress() {
              return onRestoreBackup(closure_0, restoreToMs);
            };
            tmp4Result = tmp4(tmp(tmp2[11]).Button, obj6);
          }
          obj1.trailing = tmp4Result;
          return tmp4(window(busy[18]).TableRow, obj1, busy.id);
        }
      }
      obj16.label = tmp41(versionTitles(tmp2[13]).G2DTWl);
      obj15.children = closure_9(tmp(tmp2[18]).TableRow, obj16);
      const tmp43 = closure_9(tmp(tmp2[16]).TableRowGroup, obj15);
      cResult[19] = tmp43;
    }
  }
  const tmpResult = _window(busy[17]);
}) : (function DatabaseSection(sharedDatabase) {
  ({ database, versionTitles: require, busy } = sharedDatabase);
  ({ onRestoreBackup: dependencyMap, onRewindToTime: asyncGeneratorStep, onSaveBackup: _slicedToArray } = sharedDatabase);
  noop = undefined;
  c8 = undefined;
  const tmp = closure_13(0);
  [tmp3, c5] = noop.useState(false);
  const environment = database.environment;
  const backups = database.backups;
  const tmp2 = _slicedToArray(noop.useState(false), 2);
  const historyDatabaseTitleResult = ConjureHistoryFormat.historyDatabaseTitle(environment, sharedDatabase.sharedDatabase);
  state = backups.state;
  let _window = null;
  if ("loaded" === state.status) {
    _window = state.data.window;
  }
  if ("loading" === state.status) {
    let tmp24Result = closure_9(closure_15, {});
    let tmp13 = closure_9;
  } else if ("failed" === state.status) {
    let obj2 = { title: null, body: null, onRetry: null };
    let intl3 = util.intl;
    obj2.title = intl3.string(busy(3827).Xduqn2);
    const intl4 = util.intl;
    obj2.body = intl4.string(busy(3827)["VGh9H+"]);
    obj2.onRetry = backups.retry;
    tmp24Result = closure_9(closure_14, obj2);
    tmp13 = closure_9;
  } else if (0 === state.data.points.length) {
    let obj3 = { hasIcons: false, children: null };
    let obj4 = { label: null, disabled: true };
    let intl2 = util.intl;
    obj4.label = intl2.string(busy(3827).G2DTWl);
    obj3.children = closure_9(TableRow.TableRow, obj4);
    tmp24Result = closure_9(TableRowGroup2.TableRowGroup, obj3);
    tmp13 = closure_9;
  } else {
    const visibleBackupsResult = ConjureHistoryFormat.visibleBackups(state.data.points, tmp3);
    const shown = visibleBackupsResult.shown;
    const obj5 = {
      hasIcons: false,
      children: shown.map((id) => {
          closure_0 = id;
          const backupRowResult = require("ConjureHistoryFormat").backupRow(id, closure_0);
          const restoreToMs = backupRowResult.restoreToMs;
          const obj2 = { label: backupRowResult.title, subLabel: null, disabled: null, trailing: null };
          if (null != restoreToMs) {
            let detail = backupRowResult.detail;
          } else {
            const items = [backupRowResult.detail, ];
            const intl = require("util").intl;
            items[1] = intl.string(busy(3827).zPhIa9);
            const found = items.filter((item) => "" !== item);
            detail = found.join(" \u00B7 ");
          }
          obj2.subLabel = detail;
          obj2.disabled = null == restoreToMs;
          let tmp4Result;
          if (null != restoreToMs) {
            const obj3 = { variant: "secondary", size: "sm", text: null, accessibilityLabel: null, disabled: null, onPress: null };
            const intl2 = require("util").intl;
            obj3.text = intl2.string(busy(3827).K3Q49G);
            const intl3 = require("util").intl;
            const obj4 = { title: backupRowResult.title };
            obj3.accessibilityLabel = intl3.formatToPlainString(busy(3827)["hXP0m/"], obj4);
            obj3.disabled = restoreToMs;
            obj3.onPress = function onPress() {
              return dependencyMap(closure_0, restoreToMs);
            };
            tmp4Result = closure_1_9(require("components/Button/Button").Button, obj3);
          }
          obj2.trailing = tmp4Result;
          return closure_1_9(require("TableRow").TableRow, obj2, id.id);
        })
    };
    let items = [closure_9(TableRowGroup2.TableRowGroup, obj5), ];
    if (!visibleBackupsResult.collapsible) {
      const obj6 = { children: null };
      items[1] = null;
      obj6.children = items;
      tmp24Result = closure_10(closure_11, obj6);
      tmp13 = closure_9;
    } else {
      const obj7 = { style: tmp.showAll, children: null };
      let intl = util.intl;
      let tmp26Result = busy(3827);
      const obj8 = {
        variant: "tertiary",
        size: "sm",
        text: intl.string(tmp3 ? tmp26Result.GgleNC : tmp26Result.qCWKAE),
        onPress() {
              return _undefined((arg0) => !arg0);
            }
      };
      tmp26Result = closure_9(components_Button_Button.Button, obj8);
      obj7.children = tmp26Result;
      closure_9(environment, obj7);
    }
    let tmp4Result = ConjureHistoryFormat;
  }
  const intl5 = util.intl;
  const formatToPlainStringResult = intl5.formatToPlainString(busy(3827).tmSDLN, { database: historyDatabaseTitleResult });
  c8 = formatToPlainStringResult;
  const obj9 = { label: null, disabled: null, action: null };
  const intl6 = util.intl;
  obj9.label = intl6.string(busy(3827).uNd2Je);
  obj9.disabled = "failed" === state.status || busy;
  obj9.action = function action() {
    return _slicedToArray(environment);
  };
  const items1 = [obj9, ];
  const obj10 = { label: null, disabled: null, action: null };
  const intl7 = util.intl;
  obj10.label = intl7.string(busy(3827).Xi6pDt);
  obj10.disabled = null == _window || busy;
  obj10.action = function action() {
    if (null != _window) {
      asyncGeneratorStep(environment, tmp.earliestRestoreTimestampMs);
    }
  };
  items1[1] = obj10;
  const obj11 = { start: true, end: true, variant: "secondary", border: "subtle", children: null };
  const obj12 = { spacing: 12, children: null };
  const obj13 = { style: tmp.sectionHeader, children: null };
  const items2 = [
    tmp13(Text_Text.Heading, { variant: "heading-lg/semibold", children: historyDatabaseTitleResult }),
    tmp13(ContextMenu.ContextMenu, {
      items: items1,
      title: formatToPlainStringResult,
      align: "below",
      children(arg0) {
        ({ ref, onPress, accessibilityActions, onAccessibilityAction } = arg0);
        return options(IconButton.IconButton, { ref, icon: _modDef8746, size: "sm", variant: "secondary", accessibilityLabel, accessibilityActions, onAccessibilityAction, onPress });
      }
    })
  ];
  obj13.children = items2;
  const items3 = [closure_10(environment, obj13), tmp24Result];
  obj12.children = items3;
  obj11.children = closure_10(Stack_Stack.Stack, obj12);
  return tmp13(Card.Card, obj11);
});
ReactCompilerGating = fn(558);
let closure_19 = ReactCompilerGating.isReactCompilerEnabled() ? (function useMeasuredWidth() {
  const cResult = c.c(3);
  [tmp3, require] = noop.useState(0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function t(nativeEvent) {
      return _require(nativeEvent.nativeEvent.layout.width);
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp3) {
    const items = [tmp3, first];
    cResult[1] = tmp3;
    cResult[2] = items;
    let tmp5 = items;
  } else {
    tmp5 = cResult[2];
  }
  return tmp5;
}) : (function useMeasuredWidth() {
  const tmp = _slicedToArray(noop.useState(0), 2);
  closure_0 = tmp[1];
  const items = [tmp[0], noop.useCallback((nativeEvent) => closure_0(nativeEvent.nativeEvent.layout.width), [])];
  return items;
});
ReactCompilerGating = fn(558);
let closure_20 = ReactCompilerGating.isReactCompilerEnabled() ? (function HistoryTabs(arg0) {
  const cResult = onChange(576).c(16);
  ({ tab, onChange } = arg0);
  const obj = onChange(576);
  [tmp5, r10017] = closure_19();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { id: "versions", label: null, page: null };
    const intl = onChange(1126).intl;
    obj2.label = intl.string(_modDef3827.aEg2bh);
    cResult[0] = obj2;
    let first = obj2;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [first, ];
    const obj3 = { id: "database", label: null, page: null };
    const intl2 = onChange(1126).intl;
    obj3.label = intl2.string(_modDef3827["GSu/n6"]);
    items[1] = obj3;
    cResult[1] = items;
    let tmp8 = items;
  } else {
    tmp8 = cResult[1];
  }
  if (cResult[2] !== tab) {
    const index = closure_12.indexOf(tab);
    cResult[2] = tab;
    cResult[3] = index;
    let tmp10 = index;
  } else {
    tmp10 = cResult[3];
  }
  if (cResult[4] !== onChange) {
    class S {
      constructor(arg0) {
        tmp = closure_12[arg0];
        if (null != tmp) {
          tmp2 = onChange;
          tmp3 = onChange(tmp);
        }
        return;
      }
    }
    cResult[4] = onChange;
    cResult[5] = S;
  } else {
    class S {
      constructor(arg0) {
        tmp = closure_12[arg0];
        if (null != tmp) {
          tmp2 = onChange;
          tmp3 = onChange(tmp);
        }
        return;
      }
    }
  }
  if (cResult[6] === tmp5) {
    class S {
      constructor(arg0) {
        tmp = closure_12[arg0];
        if (null != tmp) {
          tmp2 = onChange;
          tmp3 = onChange(tmp);
        }
        return;
      }
    }
  }
  cResult[6] = tmp5;
  cResult[7] = tmp10;
  cResult[8] = S;
  cResult[9] = { items: tmp8, pageWidth: tmp5, defaultIndex: tmp10, onSetActiveIndex: S };
  const obj4 = { items: tmp8, pageWidth: tmp5, defaultIndex: tmp10, onSetActiveIndex: S };
  const tmp4 = _slicedToArray(closure_19(), 2);
}) : (function HistoryTabs(onChange) {
  onChange = onChange.onChange;
  [tmp2, tmp3] = closure_19();
  const memo = noop.useMemo(() => {
    const obj = { id: "versions", label: null, page: null };
    const intl = onChange(1126).intl;
    obj.label = intl.string(_modDef3827.aEg2bh);
    const items = [obj, ];
    const obj2 = { id: "database", label: null, page: null };
    const intl2 = onChange(1126).intl;
    obj2.label = intl2.string(_modDef3827["GSu/n6"]);
    items[1] = obj2;
    return items;
  }, []);
  const tmp = _slicedToArray(closure_19(), 2);
  let obj = onChange(8505);
  const obj3 = { onLayout: tmp3, accessibilityLabel: null, children: null };
  const segmentedControlState = obj.useSegmentedControlState({
    items: memo,
    pageWidth: tmp2,
    defaultIndex: closure_12.indexOf(onChange.tab),
    onSetActiveIndex(arg0) {
      if (null != closure_12[arg0]) {
        onChange(tmp);
      }
    }
  });
  let intl = onChange(1126).intl;
  obj3.accessibilityLabel = intl.string(_modDef3827["/2GnYy"]);
  obj3.children = closure_9(onChange(12395).Tabs, { state: segmentedControlState });
  return closure_9(View, obj3);
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/history/native/ConjureHistorySheet.tsx");

export default function ConjureHistorySheet(projectId) {
  projectId = projectId.projectId;
  _require = projectId;
  const onRestoreVersion = projectId.onRestoreVersion;
  dependencyMap = undefined;
  refreshAllBackups = undefined;
  let versionTitles;
  let conjureDatabaseBusy;
  c6 = undefined;
  const tmp = onRestoreVersion;
  const tmp3 = closure_13(onRestoreVersion(1630)().bottom + onRestoreVersion(587).space.PX_16);
  [tmp5, tmp6] = versionTitles(conjureDatabaseBusy.useState("versions"), 2);
  const tmp7 = onRestoreVersion(16925)(projectId, projectId.installScope);
  ({ sharedDatabase: c2, versions, databases, refreshAllBackups } = tmp7);
  versionTitles = tmp7.versionTitles;
  ({ previewBackups, previewBackupsLoading } = tmp7);
  const tmp4 = versionTitles(conjureDatabaseBusy.useState("versions"), 2);
  conjureDatabaseBusy = require("conjureDatabaseLock").useConjureDatabaseBusy(projectId);
  let obj = require("conjureDatabaseLock");
  [tmp11, c6] = versionTitles(conjureDatabaseBusy.useState(false), 2);
  const refresh = versions.refresh;
  _require = refreshAllBackups(function*(arg0, arg1) {
    if (v3 === 2) {
      v3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
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
        v3 = 2;
        if (0 === v2) {
          if (arg0 === 1) {
            v3 = 3;
            throw value;
          } else if (arg0 === 2) {
            v3 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_2 = tmp7;
            closure_130_0 = onRestoreVersion;
            v2(true);
            c5 = 1;
            v2 = 2;
            v3 = 1;
            const obj4 = { value: onRestoreVersion(closure_0, onRestoreVersion), done: false };
            return obj4;
          }
        } else if (1 === tmp7) {
          c5 = 0;
          v2(false);
          throw closure_4;
        } else if (arg0 === 1) {
          v3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 0;
          v2(false);
          v3 = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          c5 = 0;
          v2(false);
          v3();
          if (null != closure_130_0) {
            tmp3();
          }
          v3 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp32) {
        closure_4 = tmp32;
        if (tmp4 === c5) {
          v3 = tmp2;
          throw tmp32;
        } else {
          v2 = tmp;
        }
      }
    }
  });
  let items = [onRestoreVersion, refreshAllBackups, refresh];
  const items1 = [projectId, refreshAllBackups];
  const callback = conjureDatabaseBusy.useCallback(function() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }, items);
  const callback1 = conjureDatabaseBusy.useCallback((arg0, arg1, arg2) => {
    projectId = arg2;
    const historyRewindCopyResult = projectId(sharedDatabase[17]).historyRewindCopy(arg0, arg1);
    let obj = projectId(sharedDatabase[17]);
    let obj3 = { key: "VibegrationsHistoryRewind", title: historyRewindCopyResult.title, content: historyRewindCopyResult.body, confirmText: historyRewindCopyResult.confirmText, variant: null, onConfirm: null };
    let str = "primary";
    if (historyRewindCopyResult.critical) {
      str = "destructive";
    }
    obj3.variant = str;
    closure_1 = refreshAllBackups(function*() {
      if (v3 === 2) {
        v3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj3 = { value, done: true };
          return obj3;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          v3 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              v3 = 3;
              throw value;
            } else if (arg0 === 2) {
              v3 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              closure_128_0 = undefined;
              c2 = 1;
              v3 = 1;
              const obj6 = { value: tmp2(16921).runConjureDataRewind(tmp2, tmp2), done: false };
              return obj6;
            }
          } else if (arg0 === 1) {
            v3 = 3;
            throw value;
          } else if (arg0 === 2) {
            v3 = 3;
            const obj7 = { value, done: true };
            return obj7;
          } else {
            closure_128_0 = value;
            v3();
            if (closure_128_0.ok) {
              const obj8 = { key: "CONJURE_HISTORY_REWIND_DONE", content: null };
              const intl2 = tmp2(1126).intl;
              obj8.content = intl2.string(tmp5(3827).yHchfE);
              tmp5(4766).open(obj8);
              const obj2 = tmp5(4766);
            } else {
              const intl = tmp2(1126).intl;
              if ("unconfirmed" === closure_128_0.code) {
                let uyjFNZ = tmp5(3827).iqN7YA;
              } else if ("expired" === closure_128_0.code) {
                uyjFNZ = tmp5(3827).a5pfx4;
              } else {
                uyjFNZ = tmp5(3827).uyjFNZ;
              }
              tmp2(4765).presentError(intl.string(uyjFNZ));
              const obj = tmp2(4765);
            }
            v3 = 3;
          }
        } catch (tmp37) {
          v3 = tmp;
          throw tmp37;
        }
      }
    });
    obj3.onConfirm = function onConfirm() {
      const self = this;
      const apply = closure_1.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    };
    projectId(sharedDatabase[34]).showConfirmModal(obj3);
  }, items1);
  const items2 = [callback1, projectId];
  const onRestoreBackup = conjureDatabaseBusy.useCallback((environment, arg1) => callback1(environment.environment, arg1, () => React5(environment, environment.id)), items2);
  const items3 = [callback1, projectId];
  const onRewindToTime = conjureDatabaseBusy.useCallback((arg0, arg1) => {
    projectId = arg1;
    const timestamp = Date.now();
    let obj = onRestoreVersion(sharedDatabase[30])(arg1);
    let items = [onRestoreVersion(sharedDatabase[30])(arg1).startOf("day").toDate(), ];
    const startOfResult = onRestoreVersion(sharedDatabase[30])(arg1).startOf("day");
    let obj3 = onRestoreVersion(sharedDatabase[30])(timestamp);
    items[1] = onRestoreVersion(sharedDatabase[30])(timestamp).endOf("day").toDate();
    const endOfResult = onRestoreVersion(sharedDatabase[30])(timestamp).endOf("day");
    let date = new Date(timestamp);
    const obj5 = onRestoreVersion(sharedDatabase[27]);
    const obj2 = { mode: "date", title: null, startDate: null, minimumDate: null, maximumDate: null, onSubmit: null };
    let intl = projectId(sharedDatabase[12]).intl;
    obj2.title = intl.string(onRestoreVersion(sharedDatabase[13]).L2iFYN);
    obj2.startDate = date;
    [obj6.minimumDate, obj6.maximumDate] = items;
    obj2.onSubmit = (arg0) => {
      closure_0 = arg0;
      const timerId = setTimeout(() => {
        const toDateResult = closure_0.toDate();
        const items = [new Date(closure_0), ];
        const date = new Date(closure_0);
        items[1] = new Date(timestamp);
        const date1 = new Date(timestamp);
        const obj = closure_1(paths[27]);
        const obj3 = { mode: "time", title: null, startDate: null, minimumDate: null, maximumDate: null, onSubmit: null };
        const intl = closure_0(paths[12]).intl;
        obj3.title = intl.string(closure_1(paths[13]).L2iFYN);
        obj3.startDate = toDateResult;
        [obj2.minimumDate, obj2.maximumDate] = items;
        obj3.onSubmit = (arg0) => {
          const bound = Math.min(closure_1_1, Math.max(closure_1_0, arg0.valueOf()));
          closure_1_8(closure_0, bound, () => { ... });
        };
        obj.openLazy(closure_0(paths[29])(paths[28], paths.paths), "VibegrationsHistoryRewindTime", obj3, "stack");
      }, 0);
    };
    obj5.openLazy(projectId(sharedDatabase[29])(sharedDatabase[28], sharedDatabase.paths), "VibegrationsHistoryRewindDate", obj2, "stack");
  }, items3);
  const items4 = [projectId, refreshAllBackups];
  const onSaveBackup = conjureDatabaseBusy.useCallback((environment) => {
    const obj = ActionSheetActionCreatorsDefault;
    return obj.openLazy(asyncRequireImpl(16927, dependencyMap.paths), ConjureSaveBackupSheet.CONJURE_SAVE_BACKUP_SHEET_KEY, { projectId, environment, onSaved: refreshAllBackups }, "stack");
  }, items4);
  let obj2 = { scrollable: true, startExpanded: true, header: null, children: null };
  let obj3 = { children: null };
  let obj4 = { title: null };
  let intl = require("util").intl;
  obj4.title = intl.string(onRestoreVersion(3827)["3hIVou"]);
  const items5 = [onRestoreBackup(require("BottomSheetTitleHeader").BottomSheetTitleHeader, obj4), onRestoreBackup(closure_20, { tab: tmp5, onChange: tmp6 })];
  obj3.children = items5;
  obj2.header = onRewindToTime(onSaveBackup, obj3);
  let obj5 = { contentContainerStyle: tmp3.content, children: null };
  if ("versions" === tmp5) {
    let obj6 = { versions: versions.state, previewBackups, restoreDisabled: null, onRetry: null, onRestore: null };
    if (!tmp11) {
      tmp11 = previewBackupsLoading;
    }
    if (!tmp11) {
      tmp11 = conjureDatabaseBusy;
    }
    obj6.restoreDisabled = tmp11;
    obj6.onRetry = versions.retry;
    obj6.onRestore = callback;
    let tmp15Result = tmp14(closure_17, obj6);
  } else {
    let obj7 = { children: null };
    let obj8 = { variant: "text-sm/normal", color: "text-muted", children: null };
    let intl2 = tmp8(1126).intl;
    const obj9 = { days: tmp8(16926).RESTORE_WINDOW_DAYS };
    obj8.children = intl2.formatToPlainString(tmp(3827).ptsHZu, obj9);
    const items6 = [tmp14(tmp8(5086).Text, obj8), databases.map((database) => options(closure_18, { database, sharedDatabase, versionTitles, busy: conjureDatabaseBusy, onRestoreBackup, onRewindToTime, onSaveBackup }, database.environment))];
    obj7.children = items6;
    tmp15Result = onRewindToTime(onSaveBackup, obj7);
  }
  obj5.children = tmp15Result;
  obj2.children = onRestoreBackup(require("BottomSheetModal").BottomSheetScrollView, obj5);
  return onRestoreBackup(require("ActionSheet").ActionSheet, obj2);
};
export const CONJURE_HISTORY_SHEET_KEY = "ConjureHistorySheet";