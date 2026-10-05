// discord_app/modules/conjure/history/native/ConjureHistorySheet.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import intl6 from "../../../../intl/index.native.tsx";
import asyncRequire from "../../../../../_runtime/01987_asyncRequire.js";
import _modDef3723 from "../../intl/ConjureUntranslated.messages.js";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import Stack_Stack from "../../../../design/components/Stack/native/Stack.native.tsx";
import components_Button_Button from "../../../../design/components/Button/native/Button.native.tsx";
import ActivityIndicator_ActivityIndicator from "../../../../design/components/ActivityIndicator/native/ActivityIndicator.native.tsx";
import TableRowGroup2 from "../../../../design/components/TableRow/native/TableRowGroup.native.tsx";
import IconButton2 from "../../../../design/components/Button/native/IconButton.native.tsx";
import AssetRegistryDefault from "../../../../../_runtime/07578_AssetRegistry.js";
import ConjureHistoryFormat from "../ConjureHistoryFormat.tsx";
import ConjureVersionRestoreConfirm from "ConjureVersionRestoreConfirm.tsx";
import ConjureSaveBackupSheet from "ConjureSaveBackupSheet.tsx";
import _asyncToGenerator from "../../../../../_runtime/metro/00005__asyncToGenerator.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../../_runtime/00019_react.js";
import ConjureConnectionStore from "../../connection/ConjureConnectionStore.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let arr1,
  c2,
  c3,
  importDefault,
  meta,
  obj1,
  obj15,
  obj16,
  obj17,
  obj18,
  push2Result,
  restoreDisabled,
  tmp10Result1,
  tmp10Result2,
  tmp12;

let c10;
let c9;
let metroImportAll;
let metroImportDefault;
let tmp;
let unpackModuleId;
const TableRow2 = tmp(5993);
const TagGroup2 = tmp(14252);
const View = react_native.View;
({ restoreDatabaseToPoint: metroImportDefault, restoreDatabaseToTimestamp: metroImportAll } = ConjureConnectionStore);
({ jsx: c9, jsxs: c10, Fragment: unpackModuleId } = Fragment);
let closure_12 = ["versions", "database"];
let closure_13 = createStyles.createStyles((paddingBottom) => {
  const obj = {
    content: { gap: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_16, paddingBottom },
    state: { paddingVertical: nativeDefault.space.PX_32, paddingHorizontal: nativeDefault.space.PX_16 },
    centeredRow: { alignItems: "center" },
    centered: { textAlign: "center" },
    meta: {
      flexDirection: "row",
      flexWrap: "wrap",
      alignItems: "center",
      gap: nativeDefault.space.PX_8,
      marginTop: nativeDefault.space.PX_4,
    },
  };
  ({ gap: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_16, paddingBottom });
  ({ paddingVertical: nativeDefault.space.PX_32, paddingHorizontal: nativeDefault.space.PX_16 });
  ({
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    gap: nativeDefault.space.PX_8,
    marginTop: nativeDefault.space.PX_4,
  });
  return obj;
});
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_14 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let Button;
      let body;
      let intl;
      let items;
      let obj5;
      let onRetry;
      let title;
      const obj = react2;
      const cResult = obj.c(17);
      ({ title, body, onRetry } = arg0);
      const tmp4 = closure_13(0);
      if (cResult[0] === tmp4.centered) {
        let tmp5;
        if (cResult[1] === title) {
          tmp5 = cResult[2];
        }
        if (cResult[3] === body) {
          let tmp7;
          if (cResult[4] === tmp4.centered) {
            tmp7 = cResult[5];
          }
          if (cResult[6] === onRetry) {
            let tmp10;
            if (cResult[7] === tmp4.centeredRow) {
              tmp10 = cResult[8];
            }
            if (cResult[9] === tmp5) {
              if (cResult[10] === tmp7) {
                let tmp15;
                if (cResult[11] === tmp10) {
                  tmp15 = cResult[12];
                }
                if (cResult[13] === tmp4.state) {
                  if (cResult[14] === str) {
                    let tmp18;
                    if (cResult[15] === tmp15) {
                      tmp18 = cResult[16];
                    }
                    return tmp18;
                  }
                }
                const obj2 = { style: tmp4.state, accessibilityRole: str, children: tmp15 };
                const tmp21 = React4(View, obj2);
                cResult[13] = tmp4.state;
                cResult[14] = str;
                cResult[15] = tmp15;
                cResult[16] = tmp21;
                tmp18 = tmp21;
              }
            }
            const obj3 = { spacing: 8, children: items };
            items = [tmp5, tmp7, tmp10];
            const tmp17 = authStore(Stack_Stack.Stack, obj3);
            cResult[9] = tmp5;
            cResult[10] = tmp7;
            cResult[11] = tmp10;
            cResult[12] = tmp17;
            tmp15 = tmp17;
          }
          let tmp11 = null;
          if (null != onRetry) {
            const obj4 = { style: tmp4.centeredRow, children: React4(Button, obj5) };
            obj5 = { variant: "secondary", size: "sm", text: intl.string(_modDef3723.HOuQ9H), onPress: onRetry };
            Button = components_Button_Button.Button;
            intl = intl6.intl;
            tmp11 = React4(View, obj4);
          }
          cResult[6] = onRetry;
          cResult[7] = tmp4.centeredRow;
          cResult[8] = tmp11;
          tmp10 = tmp11;
        }
        const obj6 = { variant: "text-sm/normal", color: "text-muted", style: tmp4.centered, children: body };
        const tmp9 = React4(Text_Text.Text, obj6);
        cResult[3] = body;
        cResult[4] = tmp4.centered;
        cResult[5] = tmp9;
        tmp7 = tmp9;
      }
      const obj7 = { variant: "heading-md/semibold", style: tmp4.centered, children: title };
      const tmp6 = React4(Text_Text.Heading, obj7);
      cResult[0] = tmp4.centered;
      cResult[1] = title;
      cResult[2] = tmp6;
      tmp5 = tmp6;
    }
  : (onRetry) => {
      let Button;
      let Stack;
      let body;
      let intl;
      let items;
      let obj5;
      let str;
      let title;
      onRetry = onRetry.onRetry;
      ({ title, body } = onRetry);
      const tmp = closure_13(0);
      const obj = {
        style: tmp.state,
        accessibilityRole: str,
        children: authStore(Stack, { spacing: 8, children: items }),
      };
      str = undefined;
      if (null != onRetry) {
        str = "alert";
      }
      Stack = Stack_Stack.Stack;
      items = [, ,];
      const obj2 = { variant: "heading-md/semibold", style: tmp.centered, children: title };
      items[0] = React4(Text_Text.Heading, obj2);
      const obj3 = { variant: "text-sm/normal", color: "text-muted", style: tmp.centered, children: body };
      items[1] = React4(Text_Text.Text, obj3);
      let tmp2Result = null;
      if (null != onRetry) {
        const obj4 = { style: tmp.centeredRow, children: React4(Button, obj5) };
        obj5 = { variant: "secondary", size: "sm", text: intl.string(_modDef3723.HOuQ9H), onPress: onRetry };
        Button = components_Button_Button.Button;
        intl = intl6.intl;
        tmp2Result = React4(View, obj4);
      }
      items[2] = tmp2Result;
      return React4(View, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_15 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const obj = react2;
      const cResult = obj.c(6);
      const tmp4 = closure_13(0);
      if (cResult[0] === tmp4.centeredRow) {
        let tmp5;
        let tmp7;
        let tmp10;
        if (cResult[1] === tmp4.state) {
          tmp5 = cResult[2];
        }
        const _Symbol = Symbol;
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp9 = React4(ActivityIndicator_ActivityIndicator.ActivityIndicator, {});
          cResult[3] = tmp9;
          tmp7 = tmp9;
        } else {
          tmp7 = cResult[3];
        }
        if (cResult[4] !== tmp5) {
          const obj2 = { style: tmp5, children: tmp7 };
          const tmp13 = React4(View, obj2);
          cResult[4] = tmp5;
          cResult[5] = tmp13;
          tmp10 = tmp13;
        } else {
          tmp10 = cResult[5];
        }
        return tmp10;
      }
      const items = [,];
      ({ state: arr[0], centeredRow: arr[1], centeredRow: tmp3[0] } = tmp4);
      cResult[1] = tmp4.state;
      cResult[2] = items;
      tmp5 = items;
    }
  : () => {
      let items;
      const tmp = closure_13(0);
      const obj = { style: items, children: React4(ActivityIndicator_ActivityIndicator.ActivityIndicator, {}) };
      items = [,];
      ({ state: arr[0], centeredRow: arr[1] } = tmp);
      return React4(View, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_16 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let getMs;
      let items;
      let nowMs;
      let renderItem;
      let tmp5;
      let obj = renderItem(576);
      const cResult = obj.c(9);
      ({ items, getMs, nowMs, renderItem } = arg0);
      if (cResult[0] === getMs) {
        if (cResult[1] === items) {
          if (cResult[2] === nowMs) {
            let tmp4;
            let tmp7;
            if (cResult[3] === renderItem) {
              tmp4 = cResult[4];
            }
            if (cResult[7] !== tmp4) {
              const obj2 = { spacing: 16, children: tmp4 };
              const tmp9 = closure_9(renderItem(5593).Stack, obj2);
              cResult[7] = tmp4;
              cResult[8] = tmp9;
              tmp7 = tmp9;
            } else {
              tmp7 = cResult[8];
            }
            return tmp7;
          }
        }
      }
      if (cResult[5] !== renderItem) {
        const fn = function s(label) {
          let items;
          label = label.label;
          const TableRowGroup = TableRowGroup2.TableRowGroup;
          const obj = { title: label, hasIcons: false, children: items.map(renderItem) };
          items = label.items;
          return React4(TableRowGroup, obj, label.key);
        };
        cResult[5] = renderItem;
        cResult[6] = fn;
        tmp5 = fn;
      } else {
        tmp5 = cResult[6];
      }
      const tmpResult = renderItem(16621);
      const groupHistoryByDayResult = tmpResult.groupHistoryByDay(items, getMs, nowMs);
      const mapped = groupHistoryByDayResult.map(tmp5);
      cResult[0] = getMs;
      cResult[1] = items;
      cResult[2] = nowMs;
      cResult[3] = renderItem;
      cResult[4] = mapped;
      tmp4 = mapped;
    }
  : (renderItem) => {
      let getMs;
      let groupHistoryByDayResult;
      let items;
      let nowMs;
      renderItem = renderItem.renderItem;
      ({ items, getMs, nowMs } = renderItem);
      let obj = {
        spacing: 16,
        children: groupHistoryByDayResult.map((label) => {
          let items;
          label = label.label;
          const TableRowGroup = TableRowGroup2.TableRowGroup;
          const obj = { title: label, hasIcons: false, children: items.map(renderItem) };
          items = label.items;
          return React4(TableRowGroup, obj, label.key);
        }),
      };
      const Stack = renderItem(5593).Stack;
      const obj2 = renderItem(16621);
      groupHistoryByDayResult = obj2.groupHistoryByDay(items, getMs, nowMs);
      return closure_9(Stack, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_17 = ReactCompilerGating.isReactCompilerEnabled()
  ? (restoreDisabled) => {
      let entries;
      let intl;
      let intl2;
      let onRestore;
      let onRetry;
      let previewBackups;
      let previewSha;
      let versions;
      let obj = previewBackups(onRestore[9]);
      const cResult = obj.c(18);
      ({ versions, previewBackups } = restoreDisabled);
      restoreDisabled = restoreDisabled.restoreDisabled;
      ({ onRetry, onRestore } = restoreDisabled);
      const tmp4 = closure_13(0);
      meta = tmp4;
      if ("loading" === versions.status) {
        let first;
        const _Symbol3 = Symbol;
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp28 = closure_9(closure_15, {});
          cResult[0] = tmp28;
          first = tmp28;
        } else {
          first = cResult[0];
        }
        return first;
      } else if ("failed" === versions.status) {
        let tmp16;
        let tmp15;
        let tmp20;
        const _Symbol2 = Symbol;
        if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
          let intl3 = previewBackups(onRestore[12]).intl;
          const stringResult = intl3.string(restoreDisabled(onRestore[13]).Xduqn2);
          let intl4 = previewBackups(onRestore[12]).intl;
          const stringResult1 = intl4.string(restoreDisabled(onRestore[13]).TOFCh3);
          cResult[1] = stringResult;
          cResult[2] = stringResult1;
          tmp16 = stringResult1;
          tmp15 = stringResult;
        } else {
          tmp15 = cResult[1];
          tmp16 = cResult[2];
        }
        if (cResult[3] !== onRetry) {
          let obj2 = { title: tmp15, body: tmp16, onRetry };
          const tmp23 = closure_9(closure_14, obj2);
          cResult[3] = onRetry;
          cResult[4] = tmp23;
          tmp20 = tmp23;
        } else {
          tmp20 = cResult[4];
        }
        return tmp20;
      } else {
        let tmp7;
        const data = versions.data;
        ({ entries, previewSha } = data);
        const publishedSha = data.publishedSha;
        if (0 === entries.length) {
          let tmp9;
          const _Symbol = Symbol;
          if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
            let obj3 = {
              title: intl.string(restoreDisabled(onRestore[13]).MczNnb),
              body: intl2.string(restoreDisabled(onRestore[13])["8L/U2T"]),
            };
            intl = previewBackups(onRestore[12]).intl;
            intl2 = previewBackups(onRestore[12]).intl;
            const tmp13 = closure_9(closure_14, obj3);
            cResult[5] = tmp13;
            tmp9 = tmp13;
          } else {
            tmp9 = cResult[5];
          }
          tmp7 = tmp9;
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
                push = items.push;
                intl = tmp(tmp2[12]).intl;
                tmp6 = restoreDisabled;
                obj1.label = intl.string(restoreDisabled(tmp2[13]).KVnLPd);
                arr1 = push(obj1);
              }
              if (restoreDisabled.sha === publishedSha) {
                obj12 = { id: "published", label: null };
                push2 = items.push;
                intl2 = tmp(tmp2[12]).intl;
                tmp8 = restoreDisabled;
                obj12.label = intl2.string(restoreDisabled(tmp2[13]).qulPhb);
                push2Result = push2(obj12);
              }
              tmp10 = closure_1_9;
              obj13 = { label: versionTitleResult.short, subLabel: null, trailing: null };
              obj14 = { style: closure_3.meta, children: null };
              tmp10Result = null;
              TableRow = tmp(tmp2[18]).TableRow;
              tmp11 = closure_1_10;
              tmp12 = closure_1_6;
              if (null != parseTimestampMsResult) {
                obj15 = { variant: "text-sm/normal", color: "text-muted", children: null };
                Text = tmp(tmp2[10]).Text;
                tmpResult = tmp(tmp2[17]);
                obj15.children = tmpResult.formatHistoryTime(parseTimestampMsResult);
                tmp10Result = tmp10(Text, obj15);
              }
              items1 = [,];
              items1[0] = tmp10Result;
              tmp10Result1 = null;
              if (items.length > 0) {
                obj16 = { label: null, items: null, size: "xs" };
                TagGroup = tmp(tmp2[19]).TagGroup;
                intl3 = tmp(tmp2[12]).intl;
                tmp15 = restoreDisabled;
                obj16.label = intl3.string(restoreDisabled(tmp2[13]).IxKJ5y);
                obj16.items = items;
                tmp10Result1 = tmp10(TagGroup, obj16);
              }
              items1[1] = tmp10Result1;
              obj14.children = items1;
              obj13.subLabel = tmp11(tmp12, obj14);
              tmp10Result2 = null;
              if (!tmp5) {
                obj17 = {
                  variant: "secondary",
                  size: "sm",
                  text: null,
                  accessibilityLabel: null,
                  disabled: null,
                  onPress: null,
                };
                Button = tmp(tmp2[11]).Button;
                intl4 = tmp(tmp2[12]).intl;
                tmp17 = restoreDisabled;
                obj17.text = intl4.string(restoreDisabled(tmp2[13]).K3Q49G);
                intl5 = tmp(tmp2[12]).intl;
                obj18 = { title: null };
                obj18.title = versionTitleResult.short;
                obj17.accessibilityLabel = intl5.formatToPlainString(restoreDisabled(tmp2[13])["hXP0m/"], obj18);
                tmp18 = restoreDisabled;
                obj17.disabled = restoreDisabled;
                obj17.onPress = function onPress() {
                  /* body not rendered: F146312 */
                };
                tmp10Result2 = tmp10(Button, obj17);
              }
              obj13.trailing = tmp10Result2;
              return tmp10(TableRow, obj13, restoreDisabled.sha);
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
        return tmp7;
      }
    }
  : (onRetry) => {
      let c4;
      let c5;
      let disabled;
      let entries;
      let intl;
      let intl2;
      let intl3;
      let intl4;
      let versions;
      ({ versions, previewBackups: require, restoreDisabled: importDefault, onRestore: dependencyMap } = onRetry);
      c4 = undefined;
      c5 = undefined;
      onRetry = onRetry.onRetry;
      meta = closure_13(0);
      if ("loading" === versions.status) {
        return closure_9(closure_15, {});
      } else if ("failed" === versions.status) {
        let obj2 = { title: intl3.string(_modDef3723.Xduqn2), body: intl4.string(_modDef3723.TOFCh3), onRetry };
        intl3 = intl6.intl;
        intl4 = intl6.intl;
        return closure_9(closure_14, obj2);
      } else {
        let tmp3;
        ({ entries, previewSha: c4, publishedSha: c5 } = versions.data);
        if (0 === entries.length) {
          let obj3 = { title: intl.string(_modDef3723.MczNnb), body: intl2.string(_modDef3723["8L/U2T"]) };
          intl = intl6.intl;
          intl2 = intl6.intl;
          tmp3 = closure_9(closure_14, obj3);
        } else {
          let obj = {
            items: entries,
            getMs(authoredAt) {
              const obj = ConjureHistoryFormat;
              return obj.parseTimestampMs(authoredAt.authoredAt);
            },
            nowMs: versions.nowMs,
            renderItem(subject) {
              let intl;
              let intl2;
              let intl3;
              let intl4;
              let intl5;
              let items1;
              let obj10;
              let obj6;
              let tmp10Result4;
              let tmpResult;
              require = subject;
              let obj = ConjureHistoryFormat;
              const versionTitleResult = obj.versionTitle(subject.subject, true === subject.restored);
              let obj2 = ConjureHistoryFormat;
              const parseTimestampMsResult = obj2.parseTimestampMs(subject.authoredAt);
              const items = [];
              if (subject.sha === c4) {
                const push = items.push;
                const obj3 = { id: "preview", label: intl.string(_modDef3723.KVnLPd) };
                intl = intl6.intl;
                push(obj3);
              }
              if (subject.sha === c5) {
                const push2 = items.push;
                const obj4 = { id: "published", label: intl2.string(_modDef3723.qulPhb) };
                intl2 = intl6.intl;
                push2(obj4);
              }
              const obj5 = {
                label: versionTitleResult.short,
                subLabel: closure_1_10(View, obj6),
                trailing: tmp10Result4,
              };
              let tmp10Result = null;
              obj6 = { style: meta.meta, children: items1 };
              const TableRow = TableRow2.TableRow;
              if (null != parseTimestampMsResult) {
                const obj7 = {
                  variant: "text-sm/normal",
                  color: "text-muted",
                  children: tmpResult.formatHistoryTime(parseTimestampMsResult),
                };
                const Text = Text_Text.Text;
                tmpResult = ConjureHistoryFormat;
                tmp10Result = closure_1_9(Text, obj7);
              }
              items1 = [tmp10Result];
              let tmp10Result3 = null;
              if (items.length > 0) {
                const obj8 = { label: intl3.string(_modDef3723.IxKJ5y), items, size: "xs" };
                const TagGroup = TagGroup2.TagGroup;
                intl3 = intl6.intl;
                tmp10Result3 = closure_1_9(TagGroup, obj8);
              }
              items1[1] = tmp10Result3;
              tmp10Result4 = null;
              if (subject.sha !== c4) {
                const obj9 = {
                  variant: "secondary",
                  size: "sm",
                  text: intl4.string(_modDef3723.K3Q49G),
                  accessibilityLabel: intl5.formatToPlainString(_modDef3723["hXP0m/"], obj10),
                  disabled: importDefault,
                  onPress() {
                    let obj2;
                    const obj = {
                      matchingBackup: obj2.matchingPreviewBackup(subject, require),
                      onConfirm(arg0) {
                        return closure_2_2(subject, arg0);
                      },
                    };
                    const confirmRestoreVersion = ConjureVersionRestoreConfirm.confirmRestoreVersion;
                    ConjureVersionRestoreConfirm;
                    obj2 = ConjureHistoryFormat;
                    return confirmRestoreVersion(obj);
                  },
                };
                const Button = components_Button_Button.Button;
                intl4 = intl6.intl;
                intl5 = intl6.intl;
                obj10 = { title: versionTitleResult.short };
                tmp10Result4 = closure_1_9(Button, obj9);
              }
              return closure_1_9(TableRow, obj5, subject.sha);
            },
          };
          tmp3 = closure_9(closure_16, obj);
        }
        return tmp3;
      }
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_18 = ReactCompilerGating.isReactCompilerEnabled()
  ? (restoreDisabled) => {
      let backups;
      let intl;
      let intl2;
      let onRestoreBackup;
      let onRetry;
      let tmp6;
      let versionTitles;
      let obj = versionTitles(onRestoreBackup[9]);
      const cResult = obj.c(15);
      ({ backups, versionTitles } = restoreDisabled);
      restoreDisabled = restoreDisabled.restoreDisabled;
      ({ onRetry, onRestoreBackup } = restoreDisabled);
      if ("loading" === backups.status) {
        let first;
        const _Symbol3 = Symbol;
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp30 = closure_9(closure_15, {});
          cResult[0] = tmp30;
          first = tmp30;
        } else {
          first = cResult[0];
        }
        tmp6 = first;
      } else if ("failed" === backups.status) {
        let tmp18;
        let tmp17;
        let tmp22;
        const _Symbol2 = Symbol;
        if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
          let intl3 = versionTitles(onRestoreBackup[12]).intl;
          let stringResult = intl3.string(restoreDisabled(onRestoreBackup[13]).Xduqn2);
          let intl4 = versionTitles(onRestoreBackup[12]).intl;
          const stringResult1 = intl4.string(restoreDisabled(onRestoreBackup[13])["VGh9H+"]);
          cResult[1] = stringResult;
          cResult[2] = stringResult1;
          tmp18 = stringResult1;
          tmp17 = stringResult;
        } else {
          tmp17 = cResult[1];
          tmp18 = cResult[2];
        }
        if (cResult[3] !== onRetry) {
          let obj2 = { title: tmp17, body: tmp18, onRetry };
          const tmp25 = closure_9(closure_14, obj2);
          cResult[3] = onRetry;
          cResult[4] = tmp25;
          tmp22 = tmp25;
        } else {
          tmp22 = cResult[4];
        }
        tmp6 = tmp22;
      } else if (0 === backups.data.points.length) {
        let tmp11;
        const _Symbol = Symbol;
        if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
          let obj3 = {
            title: intl.string(restoreDisabled(onRestoreBackup[13]).nvLRYG),
            body: intl2.string(restoreDisabled(onRestoreBackup[13]).G2DTWl),
          };
          intl = versionTitles(onRestoreBackup[12]).intl;
          intl2 = versionTitles(onRestoreBackup[12]).intl;
          const tmp15 = closure_9(closure_14, obj3);
          cResult[5] = tmp15;
          tmp11 = tmp15;
        } else {
          tmp11 = cResult[5];
        }
        tmp6 = tmp11;
      } else {
        let tmp4;
        const _Symbol4 = Symbol;
        if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
          const fn = function u(createdAt) {
            const obj = versionTitles(onRestoreBackup[17]);
            return obj.parseTimestampMs(createdAt.createdAt);
          };
          cResult[6] = fn;
          tmp4 = fn;
        } else {
          tmp4 = cResult[6];
        }
        if (cResult[7] === onRestoreBackup) {
          if (cResult[8] === restoreDisabled) {
            let tmp5;
            if (cResult[9] === versionTitles) {
              tmp5 = cResult[10];
            }
            if (cResult[11] === backups.data.points) {
              if (cResult[12] === backups.nowMs) {
                if (cResult[13] === tmp5) {
                  tmp6 = cResult[14];
                }
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
          let found;
          let intl3;
          let intl4;
          let obj6;
          let tmp8Result;
          versionTitles = createdAt;
          const obj = versionTitles(onRestoreBackup[17]);
          const backupTitleResult = obj.backupTitle(createdAt);
          const obj2 = versionTitles(onRestoreBackup[17]);
          const parseTimestampMsResult = obj2.parseTimestampMs(createdAt.createdAt);
          restoreDisabled = parseTimestampMsResult;
          let value;
          if (null != createdAt.sourceSha) {
            value = versionTitles.get(createdAt.sourceSha);
          }
          let formatHistoryTimeResult = null;
          const obj3 = {
            label: backupTitleResult,
            subLabel: found.join(" \u00B7 "),
            disabled: createdAt.expired || null == parseTimestampMsResult,
            trailing: tmp8Result,
          };
          const TableRow = tmp(onRestoreBackup[18]).TableRow;
          if (null != parseTimestampMsResult) {
            const tmpResult = versionTitles(onRestoreBackup[17]);
            formatHistoryTimeResult = tmpResult.formatHistoryTime(parseTimestampMsResult);
          }
          const items = [formatHistoryTimeResult, ,];
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
          found = items.filter((item) => null != item);
          tmp8Result = undefined;
          if (!(createdAt.expired || null == parseTimestampMsResult)) {
            const obj5 = {
              variant: "secondary",
              size: "sm",
              text: intl3.string(restoreDisabled(onRestoreBackup[13]).K3Q49G),
              accessibilityLabel: intl4.formatToPlainString(restoreDisabled(onRestoreBackup[13])["hXP0m/"], obj6),
              disabled: restoreDisabled,
              onPress() {
                return onRestoreBackup(createdAt, restoreDisabled);
              },
            };
            const Button = tmp(onRestoreBackup[11]).Button;
            intl3 = tmp(onRestoreBackup[12]).intl;
            intl4 = tmp(onRestoreBackup[12]).intl;
            obj6 = { title: backupTitleResult };
            tmp8Result = closure_1_9(Button, obj5);
          }
          return closure_1_9(TableRow, obj3, createdAt.id);
        };
        cResult[7] = onRestoreBackup;
        cResult[8] = restoreDisabled;
        cResult[9] = versionTitles;
        cResult[10] = fn2;
        tmp5 = fn2;
      }
      return tmp6;
    }
  : (arg0) => {
      let backups;
      let disabled;
      let intl;
      let intl2;
      let intl3;
      let intl4;
      let tmp4;
      ({ backups, versionTitles: require, restoreDisabled: importDefault, onRestoreBackup: dependencyMap } = arg0);
      if ("loading" === backups.status) {
        tmp4 = closure_9(closure_15, {});
      } else if ("failed" === backups.status) {
        let obj2 = { title: intl3.string(_modDef3723.Xduqn2), body: intl4.string(_modDef3723["VGh9H+"]), onRetry: tmp };
        intl3 = intl6.intl;
        intl4 = intl6.intl;
        tmp4 = closure_9(closure_14, obj2);
      } else if (0 === backups.data.points.length) {
        let obj3 = { title: intl.string(_modDef3723.nvLRYG), body: intl2.string(_modDef3723.G2DTWl) };
        intl = intl6.intl;
        intl2 = intl6.intl;
        tmp4 = closure_9(closure_14, obj3);
      } else {
        let obj = {
          items: backups.data.points,
          getMs(createdAt) {
            const obj = ConjureHistoryFormat;
            return obj.parseTimestampMs(createdAt.createdAt);
          },
          nowMs: backups.nowMs,
          renderItem(createdAt) {
            let found;
            let intl3;
            let intl4;
            let obj6;
            let tmp8Result;
            require = createdAt;
            const obj = ConjureHistoryFormat;
            const backupTitleResult = obj.backupTitle(createdAt);
            const obj2 = ConjureHistoryFormat;
            const parseTimestampMsResult = obj2.parseTimestampMs(createdAt.createdAt);
            importDefault = parseTimestampMsResult;
            let value;
            if (null != createdAt.sourceSha) {
              value = require.get(createdAt.sourceSha);
            }
            let formatHistoryTimeResult = null;
            const obj3 = {
              label: backupTitleResult,
              subLabel: found.join(" \u00B7 "),
              disabled: createdAt.expired || null == parseTimestampMsResult,
              trailing: tmp8Result,
            };
            const TableRow = tmp(dependencyMap[18]).TableRow;
            if (null != parseTimestampMsResult) {
              const tmpResult = ConjureHistoryFormat;
              formatHistoryTimeResult = tmpResult.formatHistoryTime(parseTimestampMsResult);
            }
            const items = [formatHistoryTimeResult, ,];
            let formatToPlainStringResult = null;
            if (null != value) {
              const intl = tmp(dependencyMap[12]).intl;
              const obj4 = { title: value };
              formatToPlainStringResult = intl.formatToPlainString(_modDef3723.V7YNvf, obj4);
            }
            items[1] = formatToPlainStringResult;
            let stringResult = null;
            if (createdAt.expired || null == parseTimestampMsResult) {
              const intl2 = tmp(dependencyMap[12]).intl;
              stringResult = intl2.string(_modDef3723.zPhIa9);
            }
            items[2] = stringResult;
            found = items.filter((item) => null != item);
            tmp8Result = undefined;
            if (!(createdAt.expired || null == parseTimestampMsResult)) {
              const obj5 = {
                variant: "secondary",
                size: "sm",
                text: intl3.string(_modDef3723.K3Q49G),
                accessibilityLabel: intl4.formatToPlainString(_modDef3723["hXP0m/"], obj6),
                disabled: importDefault,
                onPress() {
                  return dependencyMap(createdAt, parseTimestampMsResult);
                },
              };
              const Button = tmp(dependencyMap[11]).Button;
              intl3 = tmp(dependencyMap[12]).intl;
              intl4 = tmp(dependencyMap[12]).intl;
              obj6 = { title: backupTitleResult };
              tmp8Result = closure_1_9(Button, obj5);
            }
            return closure_1_9(TableRow, obj3, createdAt.id);
          },
        };
        tmp4 = closure_9(closure_16, obj);
      }
      return tmp4;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_19 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let closure_129_0;
      let first;
      let tmp3;
      let tmp5;
      const obj = react2;
      const cResult = obj.c(3);
      [tmp3, closure_129_0] = react.useState(0);
      _slicedToArray(react.useState(0), 2);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function t(nativeEvent) {
          return closure_1_0(nativeEvent.nativeEvent.layout.width);
        };
        cResult[0] = fn;
        first = fn;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== tmp3) {
        const items = [tmp3, first];
        cResult[1] = tmp3;
        cResult[2] = items;
        tmp5 = items;
      } else {
        tmp5 = cResult[2];
      }
      return tmp5;
    }
  : () => {
      const tmp = _slicedToArray(react.useState(0), 2);
      let closure_0 = tmp[1];
      const items = [tmp[0], react.useCallback((nativeEvent) => closure_0(nativeEvent.nativeEvent.layout.width), [])];
      return items;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_20 = ReactCompilerGating.isReactCompilerEnabled()
  ? (environments) => {
      let environment;
      let onChange;
      let tmp5;
      let tmp6;
      let tmp7;
      let obj = environments(576);
      const cResult = obj.c(20);
      environments = environments.environments;
      ({ environment, onChange } = environments);
      [tmp5, tmp6] = closure_19();
      _slicedToArray(closure_19(), 2);
      if (cResult[0] !== environments) {
        let tmp9;
        const _Symbol = Symbol;
        if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
          const fn = function o(id) {
            let obj2;
            const obj = { id, label: obj2.historyEnvironmentLabel(id), page: null };
            obj2 = environments(dependencyMap[17]);
            return obj;
          };
          cResult[2] = fn;
          tmp9 = fn;
        } else {
          tmp9 = cResult[2];
        }
        const mapped = environments.map(tmp9);
        cResult[0] = environments;
        cResult[1] = mapped;
        tmp7 = mapped;
      } else {
        tmp7 = cResult[1];
      }
      if (cResult[3] === environment) {
        let tmp11;
        if (cResult[4] === environments) {
          tmp11 = cResult[5];
        }
        const _Math = Math;
        const bound = Math.max(0, tmp11);
        if (cResult[6] === environments) {
          let tmp15;
          if (cResult[7] === onChange) {
            tmp15 = cResult[8];
          }
          if (cResult[9] === tmp7) {
            if (cResult[10] === tmp5) {
              if (cResult[11] === bound) {
                let tmp16;
                let tmp18;
                let tmp21;
                if (cResult[12] === tmp15) {
                  tmp16 = cResult[13];
                }
                const tmpResult = environments(9282);
                const segmentedControlState = tmpResult.useSegmentedControlState(tmp16);
                const _Symbol2 = Symbol;
                if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
                  const intl = tmp(1126).intl;
                  const stringResult = intl.string(onChange(3723).k8NBLj);
                  cResult[14] = stringResult;
                  tmp18 = stringResult;
                } else {
                  tmp18 = cResult[14];
                }
                if (cResult[15] !== segmentedControlState) {
                  let obj2 = { state: segmentedControlState };
                  const tmp23 = closure_9(environments(9283).SegmentedControl, obj2);
                  cResult[15] = segmentedControlState;
                  cResult[16] = tmp23;
                  tmp21 = tmp23;
                } else {
                  tmp21 = cResult[16];
                }
                if (cResult[17] === tmp6) {
                  let tmp24;
                  if (cResult[18] === tmp21) {
                    tmp24 = cResult[19];
                  }
                  return tmp24;
                }
                const obj3 = { onLayout: tmp6, accessibilityLabel: tmp18, children: tmp21 };
                const tmp27 = closure_9(View, obj3);
                cResult[17] = tmp6;
                cResult[18] = tmp21;
                cResult[19] = tmp27;
                tmp24 = tmp27;
              }
            }
          }
          const obj4 = { items: tmp7, pageWidth: tmp5, defaultIndex: bound, onSetActiveIndex: tmp15 };
          cResult[9] = tmp7;
          cResult[10] = tmp5;
          cResult[11] = bound;
          cResult[12] = tmp15;
          cResult[13] = obj4;
          tmp16 = obj4;
        }
        const fn2 = function w(arg0) {
          if (null != environments[arg0]) {
            onChange(environments[arg0]);
          }
        };
        cResult[6] = environments;
        cResult[7] = onChange;
        cResult[8] = fn2;
        tmp15 = fn2;
      }
      const index = environments.indexOf(environment);
      cResult[3] = environment;
      cResult[4] = environments;
      cResult[5] = index;
      tmp11 = index;
    }
  : (environments) => {
      let intl;
      let segmentedControlState;
      let tmp2;
      let tmp3;
      environments = environments.environments;
      const onChange = environments.onChange;
      const environment = environments.environment;
      const items = [environments];
      [tmp2, tmp3] = _slicedToArray(closure_19(), 2);
      const tmp = _slicedToArray(closure_19(), 2);
      const memo = react.useMemo(
        () =>
          environments.map((id) => {
            let obj2;
            const obj = { id, label: obj2.historyEnvironmentLabel(id), page: null };
            obj2 = environments(closure_1_2[17]);
            return obj;
          }),
        items,
      );
      const tmp5 = environments(9282);
      let obj = {
        items: memo,
        pageWidth: tmp2,
        defaultIndex: Math.max(0, environments.indexOf(environment)),
        onSetActiveIndex(arg0) {
          if (null != environments[arg0]) {
            onChange(environments[arg0]);
          }
        },
      };
      const useSegmentedControlState = tmp5.useSegmentedControlState;
      let obj2 = {
        onLayout: tmp3,
        accessibilityLabel: intl.string(onChange(3723).k8NBLj),
        children: closure_9(environments(9283).SegmentedControl, { state: segmentedControlState }),
      };
      segmentedControlState = useSegmentedControlState(obj);
      intl = environments(1126).intl;
      return closure_9(View, obj2);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_21 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let first;
      let intl;
      let intl2;
      let onChange;
      let tab;
      let tmp10;
      let tmp5;
      let tmp8;
      const obj = onChange(576);
      const cResult = obj.c(16);
      ({ tab, onChange } = arg0);
      [tmp5, r10017] = closure_19();
      _slicedToArray(closure_19(), 2);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { id: "versions", label: intl.string(_modDef3723.aEg2bh), page: null };
        intl = onChange(1126).intl;
        cResult[0] = obj2;
        first = obj2;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [first];
        const obj3 = { id: "database", label: intl2.string(_modDef3723["GSu/n6"]), page: null };
        intl2 = onChange(1126).intl;
        items[1] = obj3;
        cResult[1] = items;
        tmp8 = items;
      } else {
        tmp8 = cResult[1];
      }
      if (cResult[2] !== tab) {
        const index = closure_12.indexOf(tab);
        cResult[2] = tab;
        cResult[3] = index;
        tmp10 = index;
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
      const obj4 = { items: tmp8, pageWidth: tmp5, defaultIndex: tmp10, onSetActiveIndex: R };
      cResult[6] = tmp5;
      cResult[7] = tmp10;
      cResult[8] = R;
      cResult[9] = obj4;
    }
  : (onChange) => {
      let intl;
      let segmentedControlState;
      let tmp2;
      let tmp3;
      onChange = onChange.onChange;
      const tab = onChange.tab;
      [tmp2, tmp3] = _slicedToArray(closure_19(), 2);
      const tmp = _slicedToArray(closure_19(), 2);
      const memo = react.useMemo(() => {
        let intl;
        let intl2;
        const obj = { id: "versions", label: intl.string(_modDef3723.aEg2bh), page: null };
        intl = onChange(dependencyMap[12]).intl;
        const items = [obj];
        const obj2 = { id: "database", label: intl2.string(_modDef3723["GSu/n6"]), page: null };
        intl2 = onChange(dependencyMap[12]).intl;
        items[1] = obj2;
        return items;
      }, []);
      let obj = onChange(9282);
      let obj2 = {
        items: memo,
        pageWidth: tmp2,
        defaultIndex: closure_12.indexOf(tab),
        onSetActiveIndex(arg0) {
          if (null != closure_12[arg0]) {
            onChange(closure_12[arg0]);
          }
        },
      };
      const obj3 = {
        onLayout: tmp3,
        accessibilityLabel: intl.string(_modDef3723["/2GnYy"]),
        children: closure_9(onChange(12282).Tabs, { state: segmentedControlState }),
      };
      segmentedControlState = obj.useSegmentedControlState(obj2);
      intl = onChange(1126).intl;
      return closure_9(View, obj3);
    };
const result = size.fileFinishedImporting("modules/conjure/history/native/ConjureHistorySheet.tsx");

export default function ConjureHistorySheet(projectId) {
  let BottomSheetScrollView;
  let accessibilityLabel;
  let backups;
  let c6;
  let environment;
  let environments;
  let formatToPlainString;
  let intl2;
  let intl4;
  let items6;
  let obj3;
  let obj5;
  let obj9;
  let previewBackups;
  let previewBackupsLoading;
  let ptsHZu;
  let restoreWindow;
  let setEnvironment;
  let tmp11;
  let tmp20Result;
  let tmp24;
  let tmp5;
  let tmp6;
  let versionTitles;
  let versions;
  projectId = projectId.projectId;
  const onRestoreVersion = projectId.onRestoreVersion;
  environment = undefined;
  restoreWindow = undefined;
  let refreshAllBackups;
  let conjureDatabaseBusy;
  c6 = undefined;
  let tmp = onRestoreVersion;
  let tmp2 = environment;
  const installScope = projectId.installScope;
  const tmp3 = closure_13(onRestoreVersion(environment[28])().bottom + onRestoreVersion(environment[7]).space.PX_16);
  const tmp4 = refreshAllBackups(conjureDatabaseBusy.useState("versions"), 2);
  [tmp5, tmp6] = tmp4;
  let tmp7 = onRestoreVersion(environment[29])(projectId, installScope);
  ({ environments, environment } = tmp7);
  ({ versions, backups, restoreWindow } = tmp7);
  refreshAllBackups = tmp7.refreshAllBackups;
  ({ setEnvironment, previewBackups, previewBackupsLoading, versionTitles } = tmp7);
  let obj = projectId(environment[30]);
  conjureDatabaseBusy = obj.useConjureDatabaseBusy(projectId);
  [tmp11, c6] = refreshAllBackups(conjureDatabaseBusy.useState(false), 2);
  const refresh = versions.refresh;
  const tmp10 = refreshAllBackups(conjureDatabaseBusy.useState(false), 2);
  const useCallback = conjureDatabaseBusy.useCallback;
  let closure_0 = restoreWindow(function* (arg0, arg1) {
    let closure_4;
    let v1;
    let v3;
    closure_0 = arg0;
    let closure_1 = arg1;
    if (v3 === 2) {
      v3 = 3;
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
      let c5;
      try {
        v3 = 2;
        if (0 === v1) {
          if (arg0 === 1) {
            v3 = 3;
            throw value;
          } else if (arg0 === 2) {
            v3 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_3 = tmp;
            let closure_2 = tmp4;
            closure_0 = closure_1;
            v1(true);
            c5 = 1;
            v1 = 2;
            v3 = 1;
            const obj4 = { value: closure_1(closure_0, closure_1), done: false };
            return obj4;
          }
        } else if (1 === v1) {
          c5 = 0;
          v1(false);
          throw tmp29;
        } else if (arg0 === 1) {
          v3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 0;
          v1(false);
          v3 = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          c5 = 0;
          v1(false);
          v3();
          if (null != closure_0) {
            tmp29();
          }
          v3 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp29) {
        if (0 === c5) {
          v3 = 3;
          throw tmp29;
        } else {
          v1 = 1;
        }
      }
    }
  });
  let items = [onRestoreVersion, refreshAllBackups, refresh];
  const items1 = [projectId, refreshAllBackups];
  const callback = useCallback(function () {
    return closure_0(...arguments);
  }, items);
  const callback1 = conjureDatabaseBusy.useCallback((environment, arg1, arg2) => {
    let combined;
    let intl2;
    let intl4;
    let obj2;
    let obj3;
    let closure_0 = arg2;
    let intl = projectId(environment[12]).intl;
    const formatToPlainString = intl.formatToPlainString;
    let obj = { environment: obj2.historyEnvironmentLabel(environment), time: obj3.formatHistoryDateTime(arg1) };
    const KfgzUO = onRestoreVersion(environment[13]).KfgzUO;
    obj2 = projectId(environment[17]);
    obj3 = projectId(environment[17]);
    const formatToPlainStringResult = formatToPlainString(KfgzUO, obj);
    const tmp5 = projectId(environment[31]);
    let obj4 = {
      key: "VibegrationsHistoryRewind",
      title: intl2.string(onRestoreVersion(environment[13]).rR8rgj),
      content: combined,
      confirmText: intl4.string(onRestoreVersion(environment[13]).XfeFw5),
      variant: "destructive",
      onConfirm: function () {
        return closure_1(...arguments);
      },
    };
    const showConfirmModal = tmp5.showConfirmModal;
    intl2 = projectId(environment[12]).intl;
    combined = formatToPlainStringResult;
    if ("stable" === environment) {
      const intl3 = projectId(environment[12]).intl;
      const _HermesInternal = HermesInternal;
      combined = "" + intl3.string(onRestoreVersion(environment[13]).vMfqqk) + " " + formatToPlainStringResult;
    }
    intl4 = projectId(environment[12]).intl;
    let closure_1 = restoreWindow(function* () {
      let intl2;
      let obj3;
      if (c3 === 2) {
        c3 = 3;
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
        try {
          let tmp;
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
              tmp = undefined;
              c2 = 1;
              c3 = 1;
              const obj5 = { value: obj3.runConjureDataRewind(tmp, tmp), done: false };
              obj3 = tmp(environment[32]);
              return obj5;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else {
            tmp = value;
            refreshAllBackups();
            if (tmp.ok) {
              const obj = { key: "CONJURE_HISTORY_REWIND_DONE", content: intl2.string(tmp4(environment[13]).yHchfE) };
              const open = tmp4(environment[33]).open;
              const tmp28 = tmp4(environment[33]);
              intl2 = tmp(environment[12]).intl;
              open(obj);
            } else {
              let uyjFNZ;
              const presentError = tmp(environment[34]).presentError;
              const tmp9 = tmp(environment[34]);
              const intl = tmp(environment[12]).intl;
              const string = intl.string;
              if ("unconfirmed" === tmp.code) {
                uyjFNZ = tmp4(environment[13]).iqN7YA;
              } else if ("expired" === tmp.code) {
                uyjFNZ = tmp4(environment[13]).a5pfx4;
              } else {
                uyjFNZ = tmp4(environment[13]).uyjFNZ;
              }
              presentError(string(uyjFNZ));
            }
            c3 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp38) {
          c3 = 3;
          throw tmp38;
        }
      }
    });
    showConfirmModal(obj4);
  }, items1);
  const items2 = [callback1, projectId];
  const items3 = [callback1, environment, projectId, restoreWindow];
  const callback2 = conjureDatabaseBusy.useCallback(
    (environment, arg1) =>
      callback1(environment.environment, arg1, () => metroImportDefault(projectId, environment.id)),
    items2,
  );
  const callback3 = conjureDatabaseBusy.useCallback(function () {
    let intl;
    if (null != restoreWindow) {
      const earliestRestoreTimestampMs = restoreWindow.earliestRestoreTimestampMs;
      const _Date = Date;
      const timestamp = Date.now();
      let obj = onRestoreVersion(environment[27])(earliestRestoreTimestampMs);
      let items = [,];
      const startOfResult = obj.startOf("day");
      items[0] = startOfResult.toDate();
      const obj3 = onRestoreVersion(environment[27])(timestamp);
      const endOfResult = obj3.endOf("day");
      items[1] = endOfResult.toDate();
      const _Date2 = Date;
      const self = this;
      const self2 = this;
      let tmp5 = timestamp;
      const date = new Date(timestamp);
      let openLazy = onRestoreVersion(environment[24]).openLazy;
      const tmp7 = onRestoreVersion(environment[24]);
      const tmp9 = projectId(environment[26])(environment[25], environment.paths);
      const obj2 = {
        mode: "date",
        title: intl.string(onRestoreVersion(environment[13]).L2iFYN),
        startDate: date,
        minimumDate: null,
        maximumDate: null,
        onSubmit: (arg0) => {
          let closure_0 = arg0;
          const timerId = setTimeout(() => {
            let intl;
            const toDateResult = closure_0.toDate();
            const items = [new Date(earliestRestoreTimestampMs)];
            new Date(earliestRestoreTimestampMs);
            items[1] = new Date(timestamp);
            new Date(timestamp);
            const openLazy = ActionSheetActionCreatorsDefault.openLazy;
            ActionSheetActionCreatorsDefault;
            const obj = {
              mode: "time",
              title: intl.string(_modDef3723.L2iFYN),
              startDate: toDateResult,
              minimumDate: null,
              maximumDate: null,
              onSubmit: (arg0) => {
                const bound = Math.min(closure_1_1, Math.max(closure_1_0, arg0.valueOf()));
                closure_2_8(closure_2_2, bound, () => closure_3_8(closure_2_0, closure_2_2, bound));
              },
            };
            const tmp5 = asyncRequire(9194, dependencyMap.paths);
            intl = intl6.intl;
            [obj.minimumDate, obj.maximumDate] = items;
            openLazy(tmp5, "VibegrationsHistoryRewindTime", obj, "stack");
          }, 0);
        },
      };
      intl = projectId(environment[12]).intl;
      [obj5.minimumDate, obj5.maximumDate] = items;
      openLazy(tmp9, "VibegrationsHistoryRewindDate", obj2, "stack");
    }
  }, items3);
  const items4 = [environment, projectId, refreshAllBackups];
  const callback4 = conjureDatabaseBusy.useCallback(() => {
    const openLazy = ActionSheetActionCreatorsDefault.openLazy;
    ActionSheetActionCreatorsDefault;
    const obj = { projectId, environment, onSaved: refreshAllBackups };
    const tmp2 = asyncRequire(16628, dependencyMap.paths);
    openLazy(tmp2, ConjureSaveBackupSheet.CONJURE_SAVE_BACKUP_SHEET_KEY, obj, "stack");
  }, items4);
  let intl = projectId(environment[12]).intl;
  const stringResult = intl.string(onRestoreVersion(environment[13]).ZoQDS5);
  let c10 = stringResult;
  const items5 = [conjureDatabaseBusy, callback3, restoreWindow];
  const memo = conjureDatabaseBusy.useMemo(() => {
    let intl;
    const obj = {
      label: intl.string(_modDef3723.Xi6pDt),
      disabled: null == restoreWindow || conjureDatabaseBusy,
      action: callback3,
    };
    intl = intl6.intl;
    const items = [obj];
    return items;
  }, items5);
  let obj2 = {
    scrollable: true,
    startExpanded: true,
    header: c10(closure_11, obj3),
    children: tmp19(BottomSheetScrollView, obj5),
  };
  obj3 = { children: items6 };
  const ActionSheet = projectId(environment[37]).ActionSheet;
  let obj4 = { title: intl2.string(onRestoreVersion(environment[13])["3hIVou"]) };
  const BottomSheetTitleHeader = projectId(environment[38]).BottomSheetTitleHeader;
  intl2 = projectId(environment[12]).intl;
  items6 = [callback3(BottomSheetTitleHeader, obj4), callback3(closure_21, { tab: tmp5, onChange: tmp6 })];
  obj5 = { contentContainerStyle: tmp3.content, children: tmp20Result };
  BottomSheetScrollView = projectId(environment[39]).BottomSheetScrollView;
  if ("versions" === tmp5) {
    let obj6 = {
      versions: versions.state,
      previewBackups,
      restoreDisabled: tmp11,
      onRetry: versions.retry,
      onRestore: callback,
    };
    if (!tmp11) {
      tmp11 = previewBackupsLoading;
    }
    if (!tmp11) {
      tmp11 = conjureDatabaseBusy;
    }
    tmp20Result = tmp19(closure_17, obj6);
  } else {
    let tmp19Result2 = null;
    if (environments.length > 1) {
      const obj7 = { environments, environment, onChange: setEnvironment };
      tmp19Result2 = tmp19(closure_20, obj7);
    }
    const items7 = [tmp19Result2, , ,];
    const obj8 = { variant: "text-sm/normal", color: "text-muted", children: formatToPlainString(ptsHZu, obj9) };
    const Text = tmp8(tmp2[10]).Text;
    let intl3 = tmp8(tmp2[12]).intl;
    formatToPlainString = intl3.formatToPlainString;
    obj9 = { days: projectId(tmp2[40]).RESTORE_WINDOW_DAYS };
    ptsHZu = tmp(tmp2[13]).ptsHZu;
    items7[1] = callback3(Text, obj8);
    const Stack = tmp8(tmp2[14]).Stack;
    const obj10 = {
      items: memo,
      title: stringResult,
      align: "below",
      children(arg0) {
        let accessibilityActions;
        let onAccessibilityAction;
        let onPress;
        let ref;
        ({ ref, onPress, accessibilityActions, onAccessibilityAction } = arg0);
        const obj = {
          ref,
          icon: AssetRegistryDefault,
          size: "md",
          variant: "secondary",
          accessibilityLabel,
          accessibilityActions,
          onAccessibilityAction,
          onPress,
        };
        const IconButton = IconButton2.IconButton;
        return React4(IconButton, obj);
      },
    };
    const items8 = [tmp19(tmp8(tmp2[41]).ContextMenu, obj10)];
    const obj11 = {
      grow: true,
      size: "md",
      variant: "primary",
      text: intl4.string(tmp(tmp2[13]).uNd2Je),
      disabled: tmp24,
      onPress: callback4,
    };
    const Button = tmp8(tmp2[11]).Button;
    intl4 = tmp8(tmp2[12]).intl;
    const str = "failed";
    const obj12 = { children: items7 };
    const obj13 = { direction: "horizontal", spacing: 8, align: "center", children: items8 };
    tmp24 = "failed" === backups.state.status || conjureDatabaseBusy;
    items8[1] = callback3(Button, obj11);
    items7[2] = c10(Stack, obj13);
    const obj14 = {
      backups: backups.state,
      versionTitles,
      restoreDisabled: conjureDatabaseBusy,
      onRetry: backups.retry,
      onRestoreBackup: callback2,
    };
    items7[3] = callback3(closure_18, obj14);
    tmp20Result = tmp20(closure_11, obj12);
  }
  return callback3(ActionSheet, obj2);
}
export const CONJURE_HISTORY_SHEET_KEY = "ConjureHistorySheet";
