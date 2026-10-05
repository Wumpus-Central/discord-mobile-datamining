// discord_app/modules/conjure/history/native/ConjureHistorySheet.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import asyncRequireImpl from "../../../../../_runtime/01987_asyncRequireImpl.js";
import _modDef3723 from "../../intl/ConjureUntranslated.messages.js";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import Stack_Stack from "../../../../design/components/Stack/native/Stack.native.tsx";
import components_Button_Button from "../../../../design/components/Button/native/Button.native.tsx";
import ActivityIndicator_ActivityIndicator from "../../../../design/components/ActivityIndicator/native/ActivityIndicator.native.tsx";
import TableRowGroup from "../../../../design/components/TableRow/native/TableRowGroup.native.tsx";
import IconButton from "../../../../design/components/Button/native/IconButton.native.tsx";
import _modDef7578 from "../../../../../_runtime/metro/07578__.js";
import ConjureHistoryFormat from "../ConjureHistoryFormat.tsx";
import ConjureVersionRestoreConfirm from "ConjureVersionRestoreConfirm.tsx";
import ConjureSaveBackupSheet from "ConjureSaveBackupSheet.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const ConjureConnectionStore = fn(12904);
({ restoreDatabaseToPoint: closure_7, restoreDatabaseToTimestamp: closure_8 } = ConjureConnectionStore);
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10, Fragment: closure_11 } = jsxProd);
let closure_12 = ["versions", "database"];
const createStyles = fn(4890);
let closure_13 = createStyles.createStyles((paddingBottom) => {
  const obj = { content: { gap: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_16, paddingBottom }, state: null, centeredRow: null, centered: null, meta: null };
  const obj2 = { gap: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_16, paddingBottom };
  obj.state = { paddingVertical: nativeDefault.space.PX_32, paddingHorizontal: nativeDefault.space.PX_16 };
  obj.centeredRow = { alignItems: "center" };
  obj.centered = { textAlign: "center" };
  const obj3 = { paddingVertical: nativeDefault.space.PX_32, paddingHorizontal: nativeDefault.space.PX_16 };
  obj.meta = { flexDirection: "row", flexWrap: "wrap", alignItems: "center", gap: nativeDefault.space.PX_8, marginTop: nativeDefault.space.PX_4 };
  return obj;
});
let ReactCompilerGating = fn(558);
let closure_14 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
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
        const tmp17 = v65535(Stack_Stack.Stack, obj3);
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
        obj5.text = intl.string(_modDef3723.HOuQ9H);
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
}) : ((onRetry) => {
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
    obj5.text = intl.string(_modDef3723.HOuQ9H);
    obj5.onPress = onRetry;
    obj4.children = options(components_Button_Button.Button, obj5);
    tmp2Result = options(View, obj4);
  }
  items[2] = tmp2Result;
  obj.children = v65535(Stack_Stack.Stack, { spacing: 8, children: items });
  return options(View, obj);
});
ReactCompilerGating = fn(558);
let closure_15 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
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
}) : (() => {
  const obj = { style: null, children: options(ActivityIndicator_ActivityIndicator.ActivityIndicator, {}) };
  const items = [, ];
  ({ state: arr[0], centeredRow: arr[1] } = closure_13(0));
  obj.style = items;
  return options(View, obj);
});
ReactCompilerGating = fn(558);
let closure_16 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = renderItem(576).c(9);
  ({ items, getMs, nowMs, renderItem } = arg0);
  if (cResult[0] === getMs) {
    if (cResult[1] === items) {
      if (cResult[2] === nowMs) {
        if (cResult[3] === renderItem) {
          if (cResult[7] !== cResult[4]) {
            const obj2 = { spacing: 16, children: tmp4 };
            const tmp9 = closure_9(renderItem(5593).Stack, obj2);
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
      return options(TableRowGroup.TableRowGroup, obj, label.key);
    };
    cResult[5] = renderItem;
    cResult[6] = fn;
    let tmp5 = fn;
  } else {
    tmp5 = cResult[6];
  }
  let obj = renderItem(576);
  const tmpResult = renderItem(16621);
  const mapped = renderItem(16621).groupHistoryByDay(items, getMs, nowMs).map(tmp5);
  cResult[0] = getMs;
  cResult[1] = items;
  cResult[2] = nowMs;
  cResult[3] = renderItem;
  cResult[4] = mapped;
  const groupHistoryByDayResult = renderItem(16621).groupHistoryByDay(items, getMs, nowMs);
}) : ((renderItem) => {
  renderItem = renderItem.renderItem;
  ({ items, getMs, nowMs } = renderItem);
  let obj = { spacing: 16, children: null };
  const obj2 = renderItem(16621);
  obj.children = renderItem(16621).groupHistoryByDay(items, getMs, nowMs).map((label) => {
    label = label.label;
    const obj = { title: label, hasIcons: false, children: null };
    const items = label.items;
    obj.children = items.map(renderItem);
    return options(TableRowGroup.TableRowGroup, obj, label.key);
  });
  return closure_9(renderItem(5593).Stack, obj);
});
ReactCompilerGating = fn(558);
let closure_17 = ReactCompilerGating.isReactCompilerEnabled() ? ((restoreDisabled) => {
  const cResult = previewBackups(onRestore[9]).c(18);
  ({ versions, previewBackups } = restoreDisabled);
  restoreDisabled = restoreDisabled.restoreDisabled;
  ({ onRetry, onRestore } = restoreDisabled);
  const tmp4 = closure_13(0);
  asyncGeneratorStep = tmp4;
  if ("loading" === versions.status) {
    const _Symbol3 = Symbol;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp28 = closure_9(closure_15, {});
      cResult[0] = tmp28;
      let first = tmp28;
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
      let tmp16 = stringResult1;
      let tmp15 = stringResult;
    } else {
      tmp15 = cResult[1];
      tmp16 = cResult[2];
    }
    if (cResult[3] !== onRetry) {
      let obj2 = { title: tmp15, body: tmp16, onRetry };
      const tmp23 = closure_9(closure_14, obj2);
      cResult[3] = onRetry;
      cResult[4] = tmp23;
      let tmp20 = tmp23;
    } else {
      tmp20 = cResult[4];
    }
    return tmp20;
  } else {
    const data = versions.data;
    ({ entries, previewSha } = data);
    const publishedSha = data.publishedSha;
    if (0 === entries.length) {
      const _Symbol = Symbol;
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        let obj3 = { title: null, body: null };
        let intl = previewBackups(onRestore[12]).intl;
        obj3.title = intl.string(restoreDisabled(onRestore[13]).MczNnb);
        let intl2 = previewBackups(onRestore[12]).intl;
        obj3.body = intl2.string(restoreDisabled(onRestore[13])["8L/U2T"]);
        const tmp12 = closure_9(closure_14, obj3);
        cResult[5] = tmp12;
      }
    } else {
      const _Symbol4 = Symbol;
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        class C {
          constructor(arg0) {
            obj = previewBackups(onRestore[17]);
            return obj.parseTimestampMs(restoreDisabled.authoredAt);
          }
        }
        cResult[6] = C;
      } else {
        class C {
          constructor(arg0) {
            obj = previewBackups(onRestore[17]);
            return obj.parseTimestampMs(restoreDisabled.authoredAt);
          }
        }
      }
      if (cResult[7] === onRestore) {
        class C {
          constructor(arg0) {
            obj = previewBackups(onRestore[17]);
            return obj.parseTimestampMs(restoreDisabled.authoredAt);
          }
        }
      }
      class M {
        constructor(arg0) {
          closure_0 = restoreDisabled;
          tmp = previewBackups;
          tmp2 = onRestore;
          obj = previewBackups(onRestore[17]);
          versionTitleResult = obj.versionTitle(restoreDisabled.subject, true === restoreDisabled.restored);
          obj2 = previewBackups(onRestore[17]);
          parseTimestampMsResult = obj2.parseTimestampMs(restoreDisabled.authoredAt);
          tmp5 = restoreDisabled.sha === previewSha;
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
            obj17.text = intl4.string(restoreDisabled(tmp2[13]).K3Q49G);
            intl5 = tmp(tmp2[12]).intl;
            obj18 = { title: null };
            obj18.title = versionTitleResult.short;
            obj17.accessibilityLabel = intl5.formatToPlainString(restoreDisabled(tmp2[13])["hXP0m/"], obj18);
            tmp18 = restoreDisabled;
            obj17.disabled = restoreDisabled;
            obj17.onPress = function onPress() { ... };
            tmp10Result2 = tmp10(tmp(tmp2[11]).Button, obj17);
          }
          obj13.trailing = tmp10Result2;
          return tmp10(tmp(tmp2[18]).TableRow, obj13, restoreDisabled.sha);
        }
      }
      cResult[7] = onRestore;
      cResult[8] = previewBackups;
      cResult[9] = previewSha;
      cResult[10] = publishedSha;
      cResult[11] = restoreDisabled;
      cResult[12] = tmp4.meta;
      cResult[13] = M;
    }
  }
  let obj = previewBackups(onRestore[9]);
}) : ((onRetry) => {
  ({ versions, previewBackups: require, restoreDisabled: importDefault, onRestore: dependencyMap } = onRetry);
  c4 = undefined;
  c5 = undefined;
  const meta = closure_13(0);
  if ("loading" === versions.status) {
    return closure_9(closure_15, {});
  } else if ("failed" === versions.status) {
    let obj2 = { title: null, body: null, onRetry: null };
    let intl3 = util.intl;
    obj2.title = intl3.string(_modDef3723.Xduqn2);
    let intl4 = util.intl;
    obj2.body = intl4.string(_modDef3723.TOFCh3);
    obj2.onRetry = onRetry.onRetry;
    return closure_9(closure_14, obj2);
  } else {
    ({ entries, previewSha: c4, publishedSha: c5 } = versions.data);
    if (0 === entries.length) {
      let obj3 = { title: null, body: null };
      let intl = util.intl;
      obj3.title = intl.string(_modDef3723.MczNnb);
      let intl2 = util.intl;
      obj3.body = intl2.string(_modDef3723["8L/U2T"]);
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
              if (subject.sha === c4) {
                const obj3 = { id: "preview", label: null };
                const intl = require("util").intl;
                obj3.label = intl.string(disabled(3723).KVnLPd);
                items.push(obj3);
              }
              if (subject.sha === c5) {
                const obj4 = { id: "published", label: null };
                const intl2 = require("util").intl;
                obj4.label = intl2.string(disabled(3723).qulPhb);
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
                obj8.label = intl3.string(disabled(3723).IxKJ5y);
                obj8.items = items;
                tmp10Result3 = closure_1_9(require("TagGroup").TagGroup, obj8);
              }
              items1[1] = tmp10Result3;
              obj6.children = items1;
              obj5.subLabel = closure_1_10(View, obj6);
              let tmp10Result4 = null;
              if (subject.sha !== c4) {
                const obj9 = { variant: "secondary", size: "sm", text: null, accessibilityLabel: null, disabled: null, onPress: null };
                const intl4 = require("util").intl;
                obj9.text = intl4.string(disabled(3723).K3Q49G);
                const intl5 = require("util").intl;
                const obj10 = { title: versionTitleResult.short };
                obj9.accessibilityLabel = intl5.formatToPlainString(disabled(3723)["hXP0m/"], obj10);
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
let closure_18 = ReactCompilerGating.isReactCompilerEnabled() ? ((restoreDisabled) => {
  const cResult = versionTitles(onRestoreBackup[9]).c(15);
  ({ backups, versionTitles } = restoreDisabled);
  restoreDisabled = restoreDisabled.restoreDisabled;
  ({ onRetry, onRestoreBackup } = restoreDisabled);
  if ("loading" === backups.status) {
    const _Symbol3 = Symbol;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp32 = closure_9(closure_15, {});
      cResult[0] = tmp32;
      let first = tmp32;
    } else {
      first = cResult[0];
    }
  } else if ("failed" === backups.status) {
    const _Symbol2 = Symbol;
    if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
      let intl3 = versionTitles(onRestoreBackup[12]).intl;
      let stringResult = intl3.string(restoreDisabled(onRestoreBackup[13]).Xduqn2);
      let intl4 = versionTitles(onRestoreBackup[12]).intl;
      const stringResult1 = intl4.string(restoreDisabled(onRestoreBackup[13])["VGh9H+"]);
      cResult[1] = stringResult;
      cResult[2] = stringResult1;
      let tmp19 = stringResult1;
      let tmp18 = stringResult;
    } else {
      tmp18 = cResult[1];
      tmp19 = cResult[2];
    }
    if (cResult[3] !== onRetry) {
      const obj2 = { title: tmp18, body: tmp19, onRetry };
      const tmp26 = closure_9(closure_14, obj2);
      cResult[3] = onRetry;
      cResult[4] = tmp26;
    }
  } else if (0 === backups.data.points.length) {
    const _Symbol = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      let obj3 = { title: null, body: null };
      let intl = versionTitles(onRestoreBackup[12]).intl;
      obj3.title = intl.string(restoreDisabled(onRestoreBackup[13]).nvLRYG);
      let intl2 = versionTitles(onRestoreBackup[12]).intl;
      obj3.body = intl2.string(restoreDisabled(onRestoreBackup[13]).G2DTWl);
      const tmp15 = closure_9(closure_14, obj3);
      cResult[5] = tmp15;
    }
  } else {
    const _Symbol4 = Symbol;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      const fn = function u(createdAt) {
        return versionTitles(onRestoreBackup[17]).parseTimestampMs(createdAt.createdAt);
      };
      cResult[6] = fn;
      let tmp4 = fn;
    } else {
      tmp4 = cResult[6];
    }
    if (cResult[7] === onRestoreBackup) {
      if (cResult[8] === restoreDisabled) {
        if (cResult[9] === versionTitles) {
          let tmp5 = cResult[10];
        }
        if (cResult[11] === backups.data.points) {
          if (cResult[12] === backups.nowMs) {
            if (cResult[13] === tmp5) {
              let tmp6 = cResult[14];
            }
            return tmp6;
          }
        }
        let obj4 = { items: backups.data.points, getMs: tmp4, nowMs: backups.nowMs, renderItem: tmp5 };
        const tmp9 = closure_9(closure_16, obj4);
        cResult[11] = backups.data.points;
        cResult[12] = backups.nowMs;
        cResult[13] = tmp5;
        cResult[14] = tmp9;
        tmp6 = tmp9;
      }
    }
    const fn2 = function b(createdAt) {
      versionTitles = createdAt;
      const backupTitleResult = versionTitles(onRestoreBackup[17]).backupTitle(createdAt);
      const obj = versionTitles(onRestoreBackup[17]);
      const parseTimestampMsResult = versionTitles(onRestoreBackup[17]).parseTimestampMs(createdAt.createdAt);
      restoreDisabled = parseTimestampMsResult;
      value = undefined;
      if (null != createdAt.sourceSha) {
        value = versionTitles.get(createdAt.sourceSha);
      }
      const obj3 = { label: backupTitleResult, subLabel: null, disabled: null, trailing: null };
      let formatHistoryTimeResult = null;
      if (null != parseTimestampMsResult) {
        formatHistoryTimeResult = tmp(onRestoreBackup[17]).formatHistoryTime(parseTimestampMsResult);
        const tmpResult = tmp(onRestoreBackup[17]);
      }
      const items = [formatHistoryTimeResult, , ];
      let formatToPlainStringResult = null;
      if (null != value) {
        const intl = tmp(onRestoreBackup[12]).intl;
        const obj4 = { title: value };
        formatToPlainStringResult = intl.formatToPlainString(restoreDisabled(onRestoreBackup[13]).V7YNvf, obj4);
      }
      items[1] = formatToPlainStringResult;
      let stringResult = null;
      if (createdAt.expired || null == parseTimestampMsResult) {
        const intl2 = tmp(onRestoreBackup[12]).intl;
        stringResult = intl2.string(restoreDisabled(onRestoreBackup[13]).zPhIa9);
      }
      items[2] = stringResult;
      const found = items.filter((item) => null != item);
      obj3.subLabel = found.join(" \u00B7 ");
      obj3.disabled = createdAt.expired || null == parseTimestampMsResult;
      let tmp8Result;
      if (!(createdAt.expired || null == parseTimestampMsResult)) {
        const obj5 = { variant: "secondary", size: "sm", text: null, accessibilityLabel: null, disabled: null, onPress: null };
        const intl3 = tmp(onRestoreBackup[12]).intl;
        obj5.text = intl3.string(restoreDisabled(onRestoreBackup[13]).K3Q49G);
        const intl4 = tmp(onRestoreBackup[12]).intl;
        const obj6 = { title: backupTitleResult };
        obj5.accessibilityLabel = intl4.formatToPlainString(restoreDisabled(onRestoreBackup[13])["hXP0m/"], obj6);
        obj5.disabled = restoreDisabled;
        obj5.onPress = function onPress() {
          return onRestoreBackup(closure_0, parseTimestampMsResult);
        };
        tmp8Result = closure_1_9(tmp(onRestoreBackup[11]).Button, obj5);
      }
      obj3.trailing = tmp8Result;
      return closure_1_9(versionTitles(onRestoreBackup[18]).TableRow, obj3, createdAt.id);
    };
    cResult[7] = onRestoreBackup;
    cResult[8] = restoreDisabled;
    cResult[9] = versionTitles;
    cResult[10] = fn2;
    tmp5 = fn2;
  }
  let obj = versionTitles(onRestoreBackup[9]);
}) : ((arg0) => {
  ({ backups, versionTitles: require, restoreDisabled: importDefault, onRestoreBackup: dependencyMap } = arg0);
  if ("loading" === backups.status) {
    let tmp4 = closure_9(closure_15, {});
  } else if ("failed" === backups.status) {
    const obj2 = { title: null, body: null, onRetry: null };
    let intl3 = util.intl;
    obj2.title = intl3.string(_modDef3723.Xduqn2);
    let intl4 = util.intl;
    obj2.body = intl4.string(_modDef3723["VGh9H+"]);
    obj2.onRetry = tmp;
    tmp4 = closure_9(closure_14, obj2);
  } else if (0 === backups.data.points.length) {
    let obj3 = { title: null, body: null };
    let intl = util.intl;
    obj3.title = intl.string(_modDef3723.nvLRYG);
    let intl2 = util.intl;
    obj3.body = intl2.string(_modDef3723.G2DTWl);
    tmp4 = closure_9(closure_14, obj3);
  } else {
    let obj = {
      items: backups.data.points,
      getMs(createdAt) {
          return require("ConjureHistoryFormat").parseTimestampMs(createdAt.createdAt);
        },
      nowMs: backups.nowMs,
      renderItem(createdAt) {
          closure_0 = createdAt;
          const backupTitleResult = require("ConjureHistoryFormat").backupTitle(createdAt);
          const obj = require("ConjureHistoryFormat");
          const parseTimestampMsResult = require("ConjureHistoryFormat").parseTimestampMs(createdAt.createdAt);
          disabled = parseTimestampMsResult;
          value = undefined;
          if (null != createdAt.sourceSha) {
            value = closure_0.get(createdAt.sourceSha);
          }
          const obj3 = { label: backupTitleResult, subLabel: null, disabled: null, trailing: null };
          let formatHistoryTimeResult = null;
          if (null != parseTimestampMsResult) {
            formatHistoryTimeResult = require("ConjureHistoryFormat").formatHistoryTime(parseTimestampMsResult);
            const tmpResult = require("ConjureHistoryFormat");
          }
          const items = [formatHistoryTimeResult, , ];
          let formatToPlainStringResult = null;
          if (null != value) {
            const intl = require("util").intl;
            const obj4 = { title: value };
            formatToPlainStringResult = intl.formatToPlainString(disabled(3723).V7YNvf, obj4);
          }
          items[1] = formatToPlainStringResult;
          let stringResult = null;
          if (createdAt.expired || null == parseTimestampMsResult) {
            const intl2 = require("util").intl;
            stringResult = intl2.string(disabled(3723).zPhIa9);
          }
          items[2] = stringResult;
          const found = items.filter((item) => null != item);
          obj3.subLabel = found.join(" \u00B7 ");
          obj3.disabled = createdAt.expired || null == parseTimestampMsResult;
          let tmp8Result;
          if (!(createdAt.expired || null == parseTimestampMsResult)) {
            const obj5 = { variant: "secondary", size: "sm", text: null, accessibilityLabel: null, disabled: null, onPress: null };
            const intl3 = require("util").intl;
            obj5.text = intl3.string(disabled(3723).K3Q49G);
            const intl4 = require("util").intl;
            const obj6 = { title: backupTitleResult };
            obj5.accessibilityLabel = intl4.formatToPlainString(disabled(3723)["hXP0m/"], obj6);
            obj5.disabled = disabled;
            obj5.onPress = function onPress() {
              return dependencyMap(closure_0, parseTimestampMsResult);
            };
            tmp8Result = closure_1_9(require("components/Button/Button").Button, obj5);
          }
          obj3.trailing = tmp8Result;
          return closure_1_9(require("TableRow").TableRow, obj3, createdAt.id);
        }
    };
    tmp4 = closure_9(closure_16, obj);
  }
  return tmp4;
});
ReactCompilerGating = fn(558);
let closure_19 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
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
}) : (() => {
  const tmp = _slicedToArray(noop.useState(0), 2);
  closure_0 = tmp[1];
  const items = [tmp[0], noop.useCallback((nativeEvent) => closure_0(nativeEvent.nativeEvent.layout.width), [])];
  return items;
});
ReactCompilerGating = fn(558);
let closure_20 = ReactCompilerGating.isReactCompilerEnabled() ? ((environments) => {
  const cResult = environments(576).c(20);
  environments = environments.environments;
  ({ environment, onChange } = environments);
  let num = 2;
  let obj = environments(576);
  [tmp5, tmp6] = closure_19();
  if (cResult[0] !== environments) {
    const _Symbol = Symbol;
    if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
      const fn = function o(id) {
        const obj = { id, label: environments(dependencyMap[17]).historyEnvironmentLabel(id), page: null };
        return obj;
      };
      cResult[num] = fn;
      let tmp9 = fn;
    } else {
      tmp9 = cResult[2];
    }
    const mapped = environments.map(tmp9);
    cResult[0] = environments;
    num = 1;
    cResult[1] = mapped;
  } else {
    if (cResult[3] === environment) {
      if (cResult[4] === environments) {
        let tmp12 = cResult[5];
      }
      const _Math = Math;
      const bound = Math.max(0, tmp12);
      if (cResult[6] === environments) {
        if (cResult[7] === onChange) {
          let tmp16 = cResult[8];
        }
        if (cResult[9] === tmp7) {
          if (cResult[10] === tmp5) {
            if (cResult[11] === bound) {
              if (cResult[12] === tmp16) {
                let tmp17 = cResult[13];
              }
              const segmentedControlState = tmp(9282).useSegmentedControlState(tmp17);
              const _Symbol2 = Symbol;
              if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
                const intl = tmp(1126).intl;
                const stringResult = intl.string(onChange(3723).k8NBLj);
                cResult[14] = stringResult;
                let tmp19 = stringResult;
              } else {
                tmp19 = cResult[14];
              }
              if (cResult[15] !== segmentedControlState) {
                const obj2 = { state: segmentedControlState };
                const tmp24 = closure_9(tmp(9283).SegmentedControl, obj2);
                cResult[15] = segmentedControlState;
                cResult[16] = tmp24;
                let tmp22 = tmp24;
              } else {
                tmp22 = cResult[16];
              }
              if (cResult[17] === tmp6) {
                if (cResult[18] === tmp22) {
                  let tmp25 = cResult[19];
                }
                return tmp25;
              }
              const obj3 = { onLayout: tmp6, accessibilityLabel: tmp19, children: tmp22 };
              const tmp28 = closure_9(View, obj3);
              cResult[17] = tmp6;
              cResult[18] = tmp22;
              cResult[19] = tmp28;
              tmp25 = tmp28;
              const tmpResult = tmp(9282);
            }
          }
        }
        const obj4 = { items: tmp7, pageWidth: tmp5, defaultIndex: bound, onSetActiveIndex: tmp16 };
        cResult[9] = tmp7;
        cResult[10] = tmp5;
        cResult[11] = bound;
        cResult[12] = tmp16;
        cResult[13] = obj4;
        tmp17 = obj4;
      }
      const fn2 = function w(arg0) {
        if (null != environments[arg0]) {
          onChange(tmp);
        }
      };
      cResult[6] = environments;
      cResult[7] = onChange;
      cResult[8] = fn2;
      tmp16 = fn2;
    }
    const index = environments.indexOf(environment);
    cResult[3] = environment;
    cResult[4] = environments;
    cResult[5] = index;
    tmp12 = index;
  }
  const tmp4 = _slicedToArray(closure_19(), 2);
}) : ((environments) => {
  environments = environments.environments;
  const onChange = environments.onChange;
  const items = [environments];
  [tmp2, tmp3] = closure_19();
  const memo = noop.useMemo(() => environments.map((id) => {
    const obj = { id, label: environments(closure_1_2[17]).historyEnvironmentLabel(id), page: null };
    return obj;
  }), items);
  const tmp = _slicedToArray(closure_19(), 2);
  let obj = environments(9282);
  const obj3 = { onLayout: tmp3, accessibilityLabel: null, children: null };
  const segmentedControlState = obj.useSegmentedControlState({
    items: memo,
    pageWidth: tmp2,
    defaultIndex: Math.max(0, environments.indexOf(environments.environment)),
    onSetActiveIndex(arg0) {
      if (null != environments[arg0]) {
        onChange(tmp);
      }
    }
  });
  const intl = environments(1126).intl;
  obj3.accessibilityLabel = intl.string(onChange(3723).k8NBLj);
  obj3.children = closure_9(environments(9283).SegmentedControl, { state: segmentedControlState });
  return closure_9(View, obj3);
});
ReactCompilerGating = fn(558);
let closure_21 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = onChange(576).c(16);
  ({ tab, onChange } = arg0);
  const obj = onChange(576);
  [tmp5, r10017] = closure_19();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { id: "versions", label: null, page: null };
    const intl = onChange(1126).intl;
    obj2.label = intl.string(_modDef3723.aEg2bh);
    cResult[0] = obj2;
    let first = obj2;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [first, ];
    const obj3 = { id: "database", label: null, page: null };
    const intl2 = onChange(1126).intl;
    obj3.label = intl2.string(_modDef3723["GSu/n6"]);
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
    class R {
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
    cResult[5] = R;
  } else {
    class R {
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
    class R {
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
  cResult[8] = R;
  cResult[9] = { items: tmp8, pageWidth: tmp5, defaultIndex: tmp10, onSetActiveIndex: R };
  const obj4 = { items: tmp8, pageWidth: tmp5, defaultIndex: tmp10, onSetActiveIndex: R };
  const tmp4 = _slicedToArray(closure_19(), 2);
}) : ((onChange) => {
  onChange = onChange.onChange;
  [tmp2, tmp3] = closure_19();
  const memo = noop.useMemo(() => {
    const obj = { id: "versions", label: null, page: null };
    const intl = onChange(1126).intl;
    obj.label = intl.string(_modDef3723.aEg2bh);
    const items = [obj, ];
    const obj2 = { id: "database", label: null, page: null };
    const intl2 = onChange(1126).intl;
    obj2.label = intl2.string(_modDef3723["GSu/n6"]);
    items[1] = obj2;
    return items;
  }, []);
  const tmp = _slicedToArray(closure_19(), 2);
  let obj = onChange(9282);
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
  obj3.accessibilityLabel = intl.string(_modDef3723["/2GnYy"]);
  obj3.children = closure_9(onChange(12282).Tabs, { state: segmentedControlState });
  return closure_9(View, obj3);
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/history/native/ConjureHistorySheet.tsx");

export default function ConjureHistorySheet(projectId) {
  projectId = projectId.projectId;
  _require = projectId;
  const onRestoreVersion = projectId.onRestoreVersion;
  environment = undefined;
  restoreWindow = undefined;
  let refreshAllBackups;
  let conjureDatabaseBusy;
  c6 = undefined;
  const tmp3 = closure_13(onRestoreVersion(environment[28])().bottom + onRestoreVersion(environment[7]).space.PX_16);
  [tmp5, tmp6] = refreshAllBackups(conjureDatabaseBusy.useState("versions"), 2);
  const tmp7 = onRestoreVersion(environment[29])(projectId, projectId.installScope);
  ({ environments, environment } = tmp7);
  ({ versions, backups, restoreWindow } = tmp7);
  refreshAllBackups = tmp7.refreshAllBackups;
  ({ setEnvironment, previewBackups, previewBackupsLoading, versionTitles } = tmp7);
  const tmp4 = refreshAllBackups(conjureDatabaseBusy.useState("versions"), 2);
  conjureDatabaseBusy = require("conjureDatabaseLock").useConjureDatabaseBusy(projectId);
  let obj = require("conjureDatabaseLock");
  [tmp11, c6] = refreshAllBackups(conjureDatabaseBusy.useState(false), 2);
  const refresh = versions.refresh;
  _require = restoreWindow(function*(arg0, arg1) {
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
            closure_3 = tmp3;
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
          throw tmp32;
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
            tmp32();
          }
          v3 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp32) {
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
  const callback1 = conjureDatabaseBusy.useCallback((environment, arg1, arg2) => {
    projectId = arg2;
    let intl = projectId(environment[12]).intl;
    let obj = { environment: projectId(environment[17]).historyEnvironmentLabel(environment), time: null };
    let obj2 = projectId(environment[17]);
    obj.time = projectId(environment[17]).formatHistoryDateTime(arg1);
    const formatToPlainStringResult = intl.formatToPlainString(onRestoreVersion(environment[13]).KfgzUO, obj);
    let obj3 = projectId(environment[17]);
    const obj5 = { key: "VibegrationsHistoryRewind", title: null, content: null, confirmText: null, variant: "destructive", onConfirm: null };
    let intl2 = projectId(environment[12]).intl;
    obj5.title = intl2.string(onRestoreVersion(environment[13]).rR8rgj);
    let combined = formatToPlainStringResult;
    if ("stable" === environment) {
      const intl3 = tmp(environment[12]).intl;
      const _HermesInternal = HermesInternal;
      combined = "" + intl3.string(onRestoreVersion(environment[13]).vMfqqk) + " " + formatToPlainStringResult;
    }
    obj5.content = combined;
    const intl4 = tmp(environment[12]).intl;
    obj5.confirmText = intl4.string(onRestoreVersion(environment[13]).XfeFw5);
    closure_1 = restoreWindow(function*() {
      if (c3 === 2) {
        c3 = 3;
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
          c3 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              closure_128_0 = undefined;
              c2 = 1;
              c3 = 1;
              const obj6 = { value: tmp2(16622).runConjureDataRewind(tmp2, tmp2), done: false };
              return obj6;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj7 = { value, done: true };
            return obj7;
          } else {
            closure_128_0 = value;
            refreshAllBackups();
            if (closure_128_0.ok) {
              const obj8 = { key: "CONJURE_HISTORY_REWIND_DONE", content: null };
              const intl2 = tmp2(1126).intl;
              obj8.content = intl2.string(tmp5(3723).yHchfE);
              tmp5(4568).open(obj8);
              const obj2 = tmp5(4568);
            } else {
              const intl = tmp2(1126).intl;
              if ("unconfirmed" === closure_128_0.code) {
                let uyjFNZ = tmp5(3723).iqN7YA;
              } else if ("expired" === closure_128_0.code) {
                uyjFNZ = tmp5(3723).a5pfx4;
              } else {
                uyjFNZ = tmp5(3723).uyjFNZ;
              }
              tmp2(4567).presentError(intl.string(uyjFNZ));
              const obj = tmp2(4567);
            }
            c3 = 3;
          }
        } catch (tmp37) {
          c3 = tmp;
          throw tmp37;
        }
      }
    });
    obj5.onConfirm = function() {
      const self = this;
      const apply = closure_1.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    };
    projectId(environment[31]).showConfirmModal(obj5);
    let obj4 = projectId(environment[31]);
  }, items1);
  const items2 = [callback1, projectId];
  const items3 = [callback1, environment, projectId, restoreWindow];
  const callback2 = conjureDatabaseBusy.useCallback((environment, arg1) => callback1(environment.environment, arg1, () => React5(environment, environment.id)), items2);
  const callback3 = conjureDatabaseBusy.useCallback(() => {
    if (null != restoreWindow) {
      const earliestRestoreTimestampMs = restoreWindow.earliestRestoreTimestampMs;
      const _Date = Date;
      const timestamp = Date.now();
      let obj = onRestoreVersion(environment[27])(earliestRestoreTimestampMs);
      let items = [onRestoreVersion(environment[27])(earliestRestoreTimestampMs).startOf("day").toDate(), ];
      const startOfResult = onRestoreVersion(environment[27])(earliestRestoreTimestampMs).startOf("day");
      let obj3 = onRestoreVersion(environment[27])(timestamp);
      items[1] = onRestoreVersion(environment[27])(timestamp).endOf("day").toDate();
      const _Date2 = Date;
      let date = new Date(timestamp);
      const obj5 = onRestoreVersion(environment[24]);
      const tmp10 = projectId(environment[26])(environment[25], environment.paths);
      const obj2 = { mode: "date", title: null, startDate: null, minimumDate: null, maximumDate: null, onSubmit: null };
      let intl = projectId(environment[12]).intl;
      obj2.title = intl.string(onRestoreVersion(environment[13]).L2iFYN);
      obj2.startDate = date;
      [obj6.minimumDate, obj6.maximumDate] = items;
      obj2.onSubmit = (arg0) => {
        closure_0 = arg0;
        const timerId = setTimeout(() => {
          const toDateResult = closure_0.toDate();
          const items = [new Date(earliestRestoreTimestampMs), ];
          const date = new Date(earliestRestoreTimestampMs);
          items[1] = new Date(timestamp);
          const date1 = new Date(timestamp);
          const obj = ActionSheetActionCreatorsDefault;
          const obj3 = { mode: "time", title: null, startDate: null, minimumDate: null, maximumDate: null, onSubmit: null };
          const intl = util.intl;
          obj3.title = intl.string(_modDef3723.L2iFYN);
          obj3.startDate = toDateResult;
          [obj2.minimumDate, obj2.maximumDate] = items;
          obj3.onSubmit = (arg0) => {
            const bound = Math.min(closure_1_1, Math.max(closure_1_0, arg0.valueOf()));
            closure_2_8(closure_2_2, bound, () => { ... });
          };
          obj.openLazy(asyncRequireImpl(9194, dependencyMap.paths), "VibegrationsHistoryRewindTime", obj3, "stack");
        }, 0);
      };
      obj5.openLazy(tmp10, "VibegrationsHistoryRewindDate", obj2, "stack");
      const endOfResult = onRestoreVersion(environment[27])(timestamp).endOf("day");
    }
  }, items3);
  const items4 = [environment, projectId, refreshAllBackups];
  const callback4 = conjureDatabaseBusy.useCallback(() => {
    const obj = ActionSheetActionCreatorsDefault;
    obj.openLazy(asyncRequireImpl(16628, dependencyMap.paths), ConjureSaveBackupSheet.CONJURE_SAVE_BACKUP_SHEET_KEY, { projectId, environment, onSaved: refreshAllBackups }, "stack");
  }, items4);
  let intl = require("util").intl;
  const stringResult = intl.string(onRestoreVersion(environment[13]).ZoQDS5);
  c10 = stringResult;
  const items5 = [conjureDatabaseBusy, callback3, restoreWindow];
  const memo = conjureDatabaseBusy.useMemo(() => {
    const obj = { label: null, disabled: null, action: null };
    const intl = util.intl;
    obj.label = intl.string(_modDef3723.Xi6pDt);
    obj.disabled = null == restoreWindow || conjureDatabaseBusy;
    obj.action = callback3;
    const items = [obj];
    return items;
  }, items5);
  let obj2 = { scrollable: true, startExpanded: true, header: null, children: null };
  let obj3 = { children: null };
  let obj4 = { title: null };
  let intl2 = require("util").intl;
  obj4.title = intl2.string(onRestoreVersion(environment[13])["3hIVou"]);
  const items6 = [callback3(require("BottomSheetTitleHeader").BottomSheetTitleHeader, obj4), callback3(closure_21, { tab: tmp5, onChange: tmp6 })];
  obj3.children = items6;
  obj2.header = c10(closure_11, obj3);
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
    let tmp20Result = tmp19(closure_17, obj6);
  } else {
    let tmp19Result2 = null;
    if (environments.length > 1) {
      let obj7 = { environments, environment, onChange: setEnvironment };
      tmp19Result2 = tmp19(closure_20, obj7);
    }
    const items7 = [tmp19Result2, , , ];
    let obj8 = { variant: "text-sm/normal", color: "text-muted", children: null };
    let intl3 = tmp8(tmp2[12]).intl;
    const obj9 = { days: tmp8(tmp2[40]).RESTORE_WINDOW_DAYS };
    obj8.children = intl3.formatToPlainString(tmp(tmp2[13]).ptsHZu, obj9);
    items7[1] = tmp19(tmp8(tmp2[10]).Text, obj8);
    const obj10 = {
      items: memo,
      title: stringResult,
      align: "below",
      children(arg0) {
          ({ ref, onPress, accessibilityActions, onAccessibilityAction } = arg0);
          return options(IconButton.IconButton, { ref, icon: _modDef7578, size: "md", variant: "secondary", accessibilityLabel, accessibilityActions, onAccessibilityAction, onPress });
        }
    };
    const items8 = [tmp19(tmp8(tmp2[41]).ContextMenu, obj10), ];
    const obj11 = { grow: true, size: "md", variant: "primary", text: null, disabled: null, onPress: null };
    let intl4 = tmp8(tmp2[12]).intl;
    obj11.text = intl4.string(tmp(tmp2[13]).uNd2Je);
    const obj12 = { children: null };
    const obj13 = { direction: "horizontal", spacing: 8, align: "center", children: null };
    obj11.disabled = "failed" === backups.state.status || conjureDatabaseBusy;
    obj11.onPress = callback4;
    items8[1] = tmp19(tmp8(tmp2[11]).Button, obj11);
    obj13.children = items8;
    items7[2] = tmp20(tmp8(tmp2[14]).Stack, obj13);
    const obj14 = { backups: backups.state, versionTitles, restoreDisabled: conjureDatabaseBusy, onRetry: backups.retry, onRestoreBackup: callback2 };
    items7[3] = tmp19(closure_18, obj14);
    obj12.children = items7;
    tmp20Result = tmp20(closure_11, obj12);
    const tmp24 = "failed" === backups.state.status || conjureDatabaseBusy;
  }
  obj5.children = tmp20Result;
  obj2.children = callback3(require("BottomSheetModal").BottomSheetScrollView, obj5);
  return callback3(require("ActionSheet").ActionSheet, obj2);
};
export const CONJURE_HISTORY_SHEET_KEY = "ConjureHistorySheet";