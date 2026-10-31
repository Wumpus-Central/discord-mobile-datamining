// discord_app/modules/conjure/history/native/ConjureHistorySheet.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import asyncRequireImpl from "../../../../../_runtime/01994_asyncRequireImpl.js";
import _modDef3868 from "../../intl/ConjureUntranslated.messages.js";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import components_Button_Button from "../../../../design/components/Button/native/Button.native.tsx";
import Stack_Stack from "../../../../design/components/Stack/native/Stack.native.tsx";
import ActivityIndicator_ActivityIndicator from "../../../../design/components/ActivityIndicator/native/ActivityIndicator.native.tsx";
import TableRow from "../../../../design/components/TableRow/native/TableRow.native.tsx";
import Card from "../../../../design/components/Card/native/Card.native.tsx";
import TableRowGroup from "../../../../design/components/TableRow/native/TableRowGroup.native.tsx";
import IconButton from "../../../../design/components/Button/native/IconButton.native.tsx";
import _modDef9207 from "../../../../../_runtime/metro/09207__.js";
import ContextMenu from "../../../../design/components/ContextMenu/native/ContextMenu.native.tsx";
import conjureHistoryRequests from "../conjureHistoryRequests.tsx";
import ConjureHistoryFormat from "../ConjureHistoryFormat.tsx";
import ConjureVersionRestoreConfirm from "ConjureVersionRestoreConfirm.tsx";
import ConjureSaveBackupSheet from "ConjureSaveBackupSheet.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
function HistoryMessage(onRetry) {
  onRetry = onRetry.onRetry;
  ({ title, body } = onRetry);
  const tmp = closure_11(0);
  const obj = { style: tmp.state, accessibilityRole: null, children: null };
  let str;
  if (null != onRetry) {
    str = "alert";
  }
  obj.accessibilityRole = str;
  const items = [React5(Text_Text.Heading, { variant: "heading-md/semibold", style: tmp.centered, children: title }), React5(Text_Text.Text, { variant: "text-sm/normal", color: "text-muted", style: tmp.centered, children: body }), ];
  let tmp2Result = null;
  if (null != onRetry) {
    const obj4 = { style: tmp.centeredRow, children: null };
    const obj5 = { variant: "secondary", size: "sm", text: null, onPress: null };
    const intl = util.intl;
    obj5.text = intl.string(_modDef3868.HOuQ9H);
    obj5.onPress = onRetry;
    obj4.children = React5(components_Button_Button.Button, obj5);
    tmp2Result = React5(View, obj4);
  }
  items[2] = tmp2Result;
  obj.children = React6(Stack_Stack.Stack, { spacing: 8, children: items });
  return React5(View, obj);
}
function HistoryLoading() {
  const obj = { style: null, children: React5(ActivityIndicator_ActivityIndicator.ActivityIndicator, {}) };
  const items = [, ];
  ({ state: arr[0], centeredRow: arr[1] } = closure_11(0));
  obj.style = items;
  return React5(View, obj);
}
function HistoryDayGroups(renderItem) {
  renderItem = renderItem.renderItem;
  ({ items, getMs, nowMs } = renderItem);
  let obj = { spacing: 16, children: null };
  const obj2 = renderItem(12522);
  obj.children = renderItem(12522).groupHistoryByDay(items, getMs, nowMs).map((label) => {
    label = label.label;
    const obj = { title: label, hasIcons: false, children: null };
    const items = label.items;
    obj.children = items.map(renderItem);
    return React5(TableRowGroup.TableRowGroup, obj, label.key);
  });
  return closure_7(renderItem(6027).Stack, obj);
}
function VersionsPanel(onRetry) {
  ({ versions, previewBackups: require, restoreDisabled: importDefault, showsPublishState: dependencyMap, onRestore: asyncGeneratorStep } = onRetry);
  c5 = undefined;
  closure_6 = undefined;
  const meta = closure_11(0);
  if ("loading" === versions.status) {
    return closure_7(HistoryLoading, {});
  } else if ("failed" === versions.status) {
    let obj2 = { title: null, body: null, onRetry: null };
    let intl3 = util.intl;
    obj2.title = intl3.string(_modDef3868.Xduqn2);
    let intl4 = util.intl;
    obj2.body = intl4.string(_modDef3868.TOFCh3);
    obj2.onRetry = onRetry.onRetry;
    return closure_7(HistoryMessage, obj2);
  } else {
    ({ entries, publishedSha: c5 } = versions.data);
    closure_6 = ConjureHistoryFormat.historyPreviewSha(versions.data);
    if (0 === entries.length) {
      let obj3 = { title: null, body: null };
      let intl = util.intl;
      obj3.title = intl.string(_modDef3868.MczNnb);
      let intl2 = util.intl;
      obj3.body = intl2.string(_modDef3868["8L/U2T"]);
      let tmp3 = closure_7(HistoryMessage, obj3);
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
              let tmp6 = closure_2;
              let tmp7 = closure_2;
              if (closure_2) {
                tmp7 = tmp5;
              }
              const items = [];
              if (tmp7) {
                const obj3 = { id: "preview", label: null };
                const intl = require("util").intl;
                obj3.label = intl.string(disabled(3868).KVnLPd);
                items.push(obj3);
              }
              if (tmp6) {
                tmp6 = subject.sha === c5;
              }
              if (tmp6) {
                const obj4 = { id: "published", label: null };
                const intl2 = require("util").intl;
                obj4.label = intl2.string(disabled(3868).qulPhb);
                items.push(obj4);
              }
              const obj5 = { label: versionTitleResult.short, subLabel: null, trailing: null };
              const obj6 = { style: meta.meta, children: null };
              let tmp13Result = null;
              if (null != parseTimestampMsResult) {
                const obj7 = { variant: "text-sm/normal", color: "text-muted", children: require("ConjureHistoryFormat").formatHistoryTime(parseTimestampMsResult) };
                tmp13Result = closure_1_7(require("Text/Text").Text, obj7);
                const tmpResult = require("ConjureHistoryFormat");
              }
              const items1 = [tmp13Result, ];
              let tmp13Result3 = null;
              if (items.length > 0) {
                const obj8 = { label: null, items: null, size: "xs" };
                const intl3 = require("util").intl;
                obj8.label = intl3.string(disabled(3868).IxKJ5y);
                obj8.items = items;
                tmp13Result3 = closure_1_7(require("TagGroup").TagGroup, obj8);
              }
              items1[1] = tmp13Result3;
              obj6.children = items1;
              obj5.subLabel = closure_1_8(closure_6, obj6);
              let tmp13Result4 = null;
              if (subject.sha !== closure_6) {
                tmp13Result4 = null;
                if (false !== subject.restorable) {
                  const obj9 = { variant: "secondary", size: "sm", text: null, accessibilityLabel: null, disabled: null, onPress: null };
                  const intl4 = require("util").intl;
                  obj9.text = intl4.string(disabled(3868)["1NAPyC"]);
                  const intl5 = require("util").intl;
                  const obj10 = { title: versionTitleResult.short };
                  obj9.accessibilityLabel = intl5.formatToPlainString(disabled(3868)["2KgEnm"], obj10);
                  obj9.disabled = disabled;
                  obj9.onPress = function onPress() {
                    const obj2 = { matchingBackup: null, onConfirm: null };
                    const obj = ConjureVersionRestoreConfirm;
                    obj2.matchingBackup = ConjureHistoryFormat.matchingPreviewBackup(closure_0, _require);
                    obj2.onConfirm = function onConfirm(arg0) {
                      return closure_2_3(subject, arg0);
                    };
                    return obj.confirmRestoreVersion(obj2);
                  };
                  tmp13Result4 = closure_1_7(require("components/Button/Button").Button, obj9);
                }
              }
              obj5.trailing = tmp13Result4;
              return closure_1_7(require("TableRow").TableRow, obj5, subject.sha);
            }
      };
      tmp3 = closure_7(HistoryDayGroups, obj);
    }
    return tmp3;
  }
}
function DatabaseSection(sharedDatabase) {
  ({ database, versionTitles: require, busy } = sharedDatabase);
  ({ onRestoreBackup: dependencyMap, onRewindToTime: asyncGeneratorStep, onSaveBackup: _slicedToArray } = sharedDatabase);
  noop = undefined;
  c8 = undefined;
  const tmp = closure_11(0);
  [tmp3, c5] = noop.useState(false);
  const environment = database.environment;
  const backups = database.backups;
  const tmp2 = _slicedToArray(noop.useState(false), 2);
  const historyDatabaseTitleResult = ConjureHistoryFormat.historyDatabaseTitle(environment, sharedDatabase.sharedDatabase);
  const state = backups.state;
  let _window = null;
  if ("loaded" === state.status) {
    _window = state.data.window;
  }
  if ("loading" === state.status) {
    let tmp24Result = _window(HistoryLoading, {});
    let tmp13 = _window;
  } else if ("failed" === state.status) {
    let obj2 = { title: null, body: null, onRetry: null };
    let intl3 = util.intl;
    obj2.title = intl3.string(busy(3868).Xduqn2);
    const intl4 = util.intl;
    obj2.body = intl4.string(busy(3868)["VGh9H+"]);
    obj2.onRetry = backups.retry;
    tmp24Result = _window(HistoryMessage, obj2);
    tmp13 = _window;
  } else if (0 === state.data.points.length) {
    let obj3 = { hasIcons: false, children: null };
    let obj4 = { label: null, disabled: true };
    let intl2 = util.intl;
    obj4.label = intl2.string(busy(3868).G2DTWl);
    obj3.children = _window(TableRow.TableRow, obj4);
    tmp24Result = _window(TableRowGroup.TableRowGroup, obj3);
    tmp13 = _window;
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
            items[1] = intl.string(busy(3868).zPhIa9);
            const found = items.filter((item) => "" !== item);
            detail = found.join(" \u00B7 ");
          }
          obj2.subLabel = detail;
          obj2.disabled = null == restoreToMs;
          let tmp4Result;
          if (null != restoreToMs) {
            const obj3 = { variant: "secondary", size: "sm", text: null, accessibilityLabel: null, disabled: null, onPress: null };
            const intl2 = require("util").intl;
            obj3.text = intl2.string(busy(3868).K3Q49G);
            const intl3 = require("util").intl;
            const obj4 = { title: backupRowResult.title };
            obj3.accessibilityLabel = intl3.formatToPlainString(busy(3868)["hXP0m/"], obj4);
            obj3.disabled = restoreToMs;
            obj3.onPress = function onPress() {
              return dependencyMap(closure_0, restoreToMs);
            };
            tmp4Result = _window(require("components/Button/Button").Button, obj3);
          }
          obj2.trailing = tmp4Result;
          return _window(require("TableRow").TableRow, obj2, id.id);
        })
    };
    let items = [_window(TableRowGroup.TableRowGroup, obj5), ];
    if (!visibleBackupsResult.collapsible) {
      const obj6 = { children: null };
      items[1] = null;
      obj6.children = items;
      tmp24Result = tmp24(closure_9, obj6);
      tmp13 = tmp26;
    } else {
      const obj7 = { style: tmp.showAll, children: null };
      let intl = util.intl;
      let tmp26Result = busy(3868);
      const obj8 = {
        variant: "tertiary",
        size: "sm",
        text: intl.string(tmp3 ? tmp26Result.GgleNC : tmp26Result.qCWKAE),
        onPress() {
              return _undefined((arg0) => !arg0);
            }
      };
      tmp26Result = tmp26(components_Button_Button.Button, obj8);
      obj7.children = tmp26Result;
      tmp26(environment, obj7);
    }
    tmp24 = c8;
    let tmp4Result = ConjureHistoryFormat;
  }
  const intl5 = util.intl;
  const formatToPlainStringResult = intl5.formatToPlainString(busy(3868).tmSDLN, { database: historyDatabaseTitleResult });
  c8 = formatToPlainStringResult;
  const obj9 = { label: null, disabled: null, action: null };
  const intl6 = util.intl;
  obj9.label = intl6.string(busy(3868).uNd2Je);
  obj9.disabled = "failed" === state.status || busy;
  obj9.action = function action() {
    return _slicedToArray(environment);
  };
  const items1 = [obj9, ];
  const obj10 = { label: null, disabled: null, action: null };
  const intl7 = util.intl;
  obj10.label = intl7.string(busy(3868).Xi6pDt);
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
        return React5(IconButton.IconButton, { ref, icon: _modDef9207, size: "sm", variant: "secondary", accessibilityLabel, accessibilityActions, onAccessibilityAction, onPress });
      }
    })
  ];
  obj13.children = items2;
  const items3 = [c8(environment, obj13), tmp24Result];
  obj12.children = items3;
  obj11.children = c8(Stack_Stack.Stack, obj12);
  return tmp13(Card.Card, obj11);
}
function HistoryTabs(onChange) {
  const tmp = _slicedToArray(noop.useState(0), 2);
  _require = tmp[1];
  let items = [tmp[0], noop.useCallback((nativeEvent) => closure_0(nativeEvent.nativeEvent.layout.width), [])];
  [tmp3, tmp4] = items;
  const memo = noop.useMemo(() => {
    const obj = { id: "versions", label: null, page: null };
    const intl = closure_0(1113).intl;
    obj.label = intl.string(_modDef3868.aEg2bh);
    const items = [obj, , ];
    const obj2 = { id: "database", label: null, page: null };
    const intl2 = closure_0(1113).intl;
    obj2.label = intl2.string(_modDef3868["GSu/n6"]);
    items[1] = obj2;
    const obj3 = { id: "publishes", label: null, page: null };
    const intl3 = closure_0(1113).intl;
    obj3.label = intl3.string(_modDef3868["656Avb"]);
    items[2] = obj3;
    return items;
  }, []);
  const tmp2 = _slicedToArray(items, 2);
  let obj = require("SegmentedControlState");
  let obj3 = { onLayout: tmp4, accessibilityLabel: null, children: null };
  const segmentedControlState = obj.useSegmentedControlState({
    items: memo,
    pageWidth: tmp3,
    defaultIndex: closure_10.indexOf(onChange.tab),
    onSetActiveIndex(arg0) {
      if (null != closure_10[arg0]) {
        closure_0(tmp);
      }
    }
  });
  let intl = require("util").intl;
  obj3.accessibilityLabel = intl.string(_modDef3868["/2GnYy"]);
  obj3.children = closure_7(require("Tabs/Tabs").Tabs, { state: segmentedControlState });
  return closure_7(View, obj3);
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8, Fragment: closure_9 } = jsxProd);
let closure_10 = ["versions", "database", "publishes"];
const createStyles = fn(5014);
let closure_11 = createStyles.createStyles((paddingBottom) => {
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
  let onSaveBackup;
  const tmp3 = onSaveBackup(onRestoreVersion(1625)().bottom + onRestoreVersion(575).space.PX_16);
  [tmp5, tmp6] = versionTitles(conjureDatabaseBusy.useState("versions"), 2);
  const tmp7 = onRestoreVersion(12532)(projectId, projectId.installScope);
  ({ sharedDatabase: c2, versions, databases, refreshAllBackups } = tmp7);
  versionTitles = tmp7.versionTitles;
  ({ previewBackups, previewBackupsLoading } = tmp7);
  const tmp4 = versionTitles(conjureDatabaseBusy.useState("versions"), 2);
  conjureDatabaseBusy = require("conjureDatabaseLock").useConjureDatabaseBusy(projectId);
  let obj = require("conjureDatabaseLock");
  const tmp10 = onRestoreVersion(12472)(projectId);
  [tmp12, c6] = versionTitles(conjureDatabaseBusy.useState(false), 2);
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
        return { value: "HermesInternal", done: "HermesInternal" };
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
          return { value: "HermesInternal", done: "HermesInternal" };
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
    const historyRewindCopyResult = projectId(sharedDatabase[13]).historyRewindCopy(arg0, arg1);
    let obj = projectId(sharedDatabase[13]);
    let obj3 = { key: "ConjureHistoryRewind", title: historyRewindCopyResult.title, content: historyRewindCopyResult.body, confirmText: historyRewindCopyResult.confirmText, variant: null, onConfirm: null };
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
          return { value: "HermesInternal", done: "HermesInternal" };
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
              const obj6 = { value: tmp2(12523).runConjureDataRewind(tmp2, tmp2), done: false };
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
              const obj8 = { text: null };
              const intl2 = tmp2(1113).intl;
              obj8.text = intl2.string(tmp5(3868).yHchfE);
              tmp5(5712).open("CONJURE_HISTORY_REWIND_DONE", obj8);
              const obj2 = tmp5(5712);
            } else {
              const intl = tmp2(1113).intl;
              if ("unconfirmed" === closure_128_0.code) {
                let uyjFNZ = tmp5(3868).iqN7YA;
              } else if ("expired" === closure_128_0.code) {
                uyjFNZ = tmp5(3868).a5pfx4;
              } else {
                uyjFNZ = tmp5(3868).uyjFNZ;
              }
              tmp2(5711).presentError(intl.string(uyjFNZ));
              const obj = tmp2(5711);
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
    projectId(sharedDatabase[32]).showConfirmModal(obj3);
  }, items1);
  const items2 = [callback1, projectId];
  const onRestoreBackup = conjureDatabaseBusy.useCallback((environment, arg1) => callback1(environment.environment, arg1, () => conjureHistoryRequests.restoreDatabaseToPoint(environment, environment.id)), items2);
  const items3 = [callback1, projectId];
  const onRewindToTime = conjureDatabaseBusy.useCallback((arg0, arg1) => {
    projectId = arg1;
    const timestamp = Date.now();
    let obj = onRestoreVersion(sharedDatabase[27])(arg1);
    let items = [onRestoreVersion(sharedDatabase[27])(arg1).startOf("day").toDate(), ];
    const startOfResult = onRestoreVersion(sharedDatabase[27])(arg1).startOf("day");
    let obj3 = onRestoreVersion(sharedDatabase[27])(timestamp);
    items[1] = onRestoreVersion(sharedDatabase[27])(timestamp).endOf("day").toDate();
    const endOfResult = onRestoreVersion(sharedDatabase[27])(timestamp).endOf("day");
    let date = new Date(timestamp);
    const obj5 = onRestoreVersion(sharedDatabase[24]);
    const obj2 = { mode: "date", title: null, startDate: null, minimumDate: null, maximumDate: null, onSubmit: null };
    let intl = projectId(sharedDatabase[10]).intl;
    obj2.title = intl.string(onRestoreVersion(sharedDatabase[11]).L2iFYN);
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
        const obj = closure_1(paths[24]);
        const obj3 = { mode: "time", title: null, startDate: null, minimumDate: null, maximumDate: null, onSubmit: null };
        const intl = closure_0(paths[10]).intl;
        obj3.title = intl.string(closure_1(paths[11]).L2iFYN);
        obj3.startDate = toDateResult;
        [obj2.minimumDate, obj2.maximumDate] = items;
        obj3.onSubmit = (arg0) => {
          const bound = Math.min(closure_1_1, Math.max(closure_1_0, arg0.valueOf()));
          closure_1_8(bound, bound, /* F136868 */ function() { ... });
        };
        obj.openLazy(closure_0(paths[26])(paths[25], paths.paths), "ConjureHistoryRewindTime", obj3, "stack");
      }, 0);
    };
    obj5.openLazy(projectId(sharedDatabase[26])(sharedDatabase[25], sharedDatabase.paths), "ConjureHistoryRewindDate", obj2, "stack");
  }, items3);
  const items4 = [projectId, refreshAllBackups];
  onSaveBackup = conjureDatabaseBusy.useCallback((environment) => {
    const obj = ActionSheetActionCreatorsDefault;
    return obj.openLazy(asyncRequireImpl(12534, dependencyMap.paths), ConjureSaveBackupSheet.CONJURE_SAVE_BACKUP_SHEET_KEY, { projectId, environment, onSaved: refreshAllBackups }, "stack");
  }, items4);
  let obj2 = { scrollable: true, startExpanded: true, header: null, children: null };
  let obj3 = { children: null };
  let obj4 = { title: null };
  let intl = require("util").intl;
  obj4.title = intl.string(onRestoreVersion(3868)["3hIVou"]);
  const items5 = [refresh(require("BottomSheetTitleHeader").BottomSheetTitleHeader, obj4), refresh(HistoryTabs, { tab: tmp5, onChange: tmp6 })];
  obj3.children = items5;
  obj2.header = callback1(onRestoreBackup, obj3);
  let obj5 = { contentContainerStyle: tmp3.content, children: null };
  if ("versions" === tmp5) {
    let obj6 = { versions: versions.state, previewBackups, restoreDisabled: null, showsPublishState: null, onRetry: null, onRestore: null };
    if (!tmp12) {
      tmp12 = previewBackupsLoading;
    }
    if (!tmp12) {
      tmp12 = conjureDatabaseBusy;
    }
    obj6.restoreDisabled = tmp12;
    obj6.showsPublishState = !tmp10;
    obj6.onRetry = versions.retry;
    obj6.onRestore = callback;
    let tmp16Result = tmp15(VersionsPanel, obj6);
  } else if ("publishes" === tmp5) {
    let obj7 = { projectId };
    tmp16Result = tmp15(tmp(12535), obj7, projectId);
  } else {
    let obj8 = { children: null };
    const obj9 = { variant: "text-sm/normal", color: "text-muted", children: null };
    let intl2 = tmp8(1113).intl;
    const obj10 = { days: tmp8(12533).RESTORE_WINDOW_DAYS };
    obj9.children = intl2.formatToPlainString(tmp(3868).ptsHZu, obj10);
    const items6 = [tmp15(tmp8(5624).Text, obj9), databases.map((database) => React5(DatabaseSection, { database, sharedDatabase, versionTitles, busy: conjureDatabaseBusy, onRestoreBackup, onRewindToTime, onSaveBackup }, database.environment))];
    obj8.children = items6;
    tmp16Result = callback1(onRestoreBackup, obj8);
  }
  obj5.children = tmp16Result;
  obj2.children = refresh(require("BottomSheetModal").BottomSheetScrollView, obj5);
  return refresh(require("ActionSheet").ActionSheet, obj2);
};
export const CONJURE_HISTORY_SHEET_KEY = "ConjureHistorySheet";