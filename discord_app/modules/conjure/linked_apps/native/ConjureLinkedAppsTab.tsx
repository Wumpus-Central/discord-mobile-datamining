// discord_app/modules/conjure/linked_apps/native/ConjureLinkedAppsTab.tsx
import util from "../../../../intl/index.native.tsx";
import _modDef4131 from "../../intl/ConjureUntranslated.messages.js";
import ActionSheetActionCreators from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import AlertModal from "../../../../design/components/AlertModal/native/AlertModal.native.tsx";
import ConjureLinkedAppBuildSheetDefault from "ConjureLinkedAppBuildSheet.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
function SettingRow(onBuildChange) {
  ({ name: require, setting } = onBuildChange);
  onBuildChange = onBuildChange.onBuildChange;
  const options = setting.options;
  const found = options.find((data) => data.data === setting.value);
  const obj = { label: setting.label, trailing: null, arrow: null, disabled: null, onPress: null };
  let tmp2Result;
  if (null != found) {
    let obj2 = { text: found.label };
    tmp2Result = closure_4(require("TableRow").TableRow.TrailingText, obj2);
  }
  obj.trailing = tmp2Result;
  obj.arrow = !setting.locked;
  obj.disabled = setting.locked;
  obj.onPress = function openChoices() {
    const obj2 = {
      content: React4(ConjureLinkedAppBuildSheetDefault, {
        sheetKey: ConjureLinkedAppSheet,
        title,
        setting,
        onPick(arg0) {
          if (arg0 !== value.value) {
            onBuildChange(value.buildFor(arg0));
          }
        },
      }),
      key: ConjureLinkedAppSheet,
      stackingBehavior: "stack",
    };
    ActionSheetActionCreators.showActionSheet(obj2);
  };
  return closure_4(require("TableRow").TableRow, obj);
}
const canPublishProject = fn(7017).canPublishProject;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const ConjureLinkedAppSheet = "ConjureLinkedAppSheet";
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/linked_apps/native/ConjureLinkedAppsTab.tsx");

export default function ConjureLinkedAppsTab(linkedApps) {
  linkedApps = linkedApps.linkedApps;
  const onOpenSettings = linkedApps.onOpenSettings;
  dependencyMap = undefined;
  c3 = undefined;
  c4 = undefined;
  c5 = undefined;
  ({ callers, targets, projects: c2, names: c3, failed, setBuild: c4, remove: c5 } = linkedApps);
  let obj = { spacing: onOpenSettings(575).space.PX_24, children: null };
  let tmpResult = null;
  if (callers.length > 0) {
    let obj2 = { spacing: tmp4(575).space.PX_16, children: null };
    let obj3 = { variant: "body-xs/semibold", color: "text-muted", accessibilityRole: "header", children: null };
    let intl = tmp2(1113).intl;
    let obj4 = { name: linkedApps.name };
    obj3.children = intl.formatToPlainString(tmp4(4131).uLPdNT, obj4);
    items = [
      c4(tmp2(5929).Text, obj3),
      callers.map((project_id) => {
        project_id = project_id.project_id;
        const name = tmp;
        const obj = linkedApps(_undefined[12]);
        const linkedAppSettingsResult = obj.linkedAppSettings(
          linkedApps(_undefined[12]).linkedAppCallerSides(project_id, project_id),
          project_id.build,
        );
        let obj2 = linkedApps(_undefined[12]);
        const linkedAppPurposeResult = linkedApps(_undefined[12]).linkedAppPurpose(project_id.purpose);
        const obj4 = { spacing: onOpenSettings(_undefined[10]).space.PX_8, children: null };
        const obj5 = {
          caller: _undefined2[project_id],
          target: project_id.name,
          callerProject: _undefined[project_id],
          targetProject: project_id.project,
          flow: null,
        };
        let flow = project_id.flow;
        const obj3 = linkedApps(_undefined[12]);
        if (flow == null) {
          flow = null;
        }
        obj5.flow = flow;
        items = [_undefined(onOpenSettings(_undefined[13]), obj5), , ,];
        let tmp8Result = null;
        if (null != linkedAppPurposeResult) {
          const obj6 = {
            variant: "body-sm/normal",
            color: "text-default",
            lineClamp: 1,
            children: linkedAppPurposeResult,
          };
          tmp8Result = _undefined(linkedApps(_undefined[11]).Text, obj6);
        }
        items[1] = tmp8Result;
        let preview;
        if (linkedAppSettingsResult != null) {
          preview = linkedAppSettingsResult.preview;
        }
        function onBuildChange(arg0) {
          return c4(project_id, arg0);
        }
        let tmp8Result4 = null;
        if (null != preview) {
          const obj7 = { name: tmp, setting: linkedAppSettingsResult.preview, onBuildChange };
          tmp8Result4 = _undefined(SettingRow, obj7);
        }
        const items1 = [tmp8Result4, ,];
        let tmp8Result5 = null;
        if (null != linkedAppSettingsResult) {
          const obj8 = { name: tmp, setting: linkedAppSettingsResult.live, onBuildChange };
          tmp8Result5 = _undefined(SettingRow, obj8);
        }
        const obj9 = { hasIcons: false, children: null };
        items1[1] = tmp8Result5;
        const obj10 = { label: null, variant: "danger", onPress: null };
        let intl = linkedApps(_undefined[7]).intl;
        obj10.label = intl.string(onOpenSettings(_undefined[8]).bN1S9T);
        obj10.onPress = function onPress() {
          closure_0 = project_id;
          const obj2 = {
            key: "ConjureRemoveLinkedApp-" + project_id,
            title: null,
            content: null,
            confirmText: null,
            variant: "destructive",
            onConfirm: null,
          };
          const intl = util.intl;
          obj2.title = intl.formatToPlainString(_modDef4131.zSfIvv, { name });
          const intl2 = util.intl;
          obj2.content = intl2.formatToPlainString(_modDef4131["7TX+mR"], { name });
          const intl3 = util.intl;
          obj2.confirmText = intl3.string(_modDef4131.vDZEGQ);
          obj2.onConfirm = function onConfirm() {
            return _undefined2(closure_0);
          };
          AlertModal.showConfirmModal(obj2);
        };
        items1[2] = _undefined(linkedApps(_undefined[3]).TableRow, obj10);
        obj9.children = items1;
        items[2] = _undefined2(linkedApps(_undefined[14]).TableRowGroup, obj9);
        let note;
        if (linkedAppSettingsResult != null) {
          note = linkedAppSettingsResult.note;
        }
        let tmp8Result6 = null;
        if (null != note) {
          const obj11 = { variant: "body-sm/normal", color: "text-muted", children: linkedAppSettingsResult.note };
          tmp8Result6 = _undefined(linkedApps(_undefined[11]).Text, obj11);
        }
        items[3] = tmp8Result6;
        obj4.children = items;
        return _undefined2(linkedApps(_undefined[9]).Stack, obj4, project_id);
      }),
    ];
    obj2.children = items;
    tmpResult = tmp(tmp2(6337).Stack, obj2);
  }
  let items1 = [tmpResult, ,];
  let tmpResult2 = null;
  if (targets.length > 0) {
    let obj5 = { spacing: tmp4(575).space.PX_16, children: null };
    let obj6 = { variant: "body-xs/semibold", color: "text-muted", accessibilityRole: "header", children: null };
    let intl2 = tmp2(1113).intl;
    let obj7 = { name: linkedApps.name };
    obj6.children = intl2.formatToPlainString(tmp4(4131).L3Bf1s, obj7);
    const items2 = [
      c4(tmp2(5929).Text, obj6),
      targets.map((project_id) => {
        project_id = project_id.project_id;
        const linkedAppTargetSidesResult = linkedApps(_undefined[12]).linkedAppTargetSides(project_id, project_id);
        const obj = linkedApps(_undefined[12]);
        const linkedAppPurposeResult = linkedApps(_undefined[12]).linkedAppPurpose(project_id.purpose);
        const obj2 = linkedApps(_undefined[12]);
        const linkedAppDataSummaryResult = linkedApps(_undefined[12]).linkedAppDataSummary(
          linkedAppTargetSidesResult,
          project_id.build,
        );
        const obj4 = { spacing: onOpenSettings(_undefined[10]).space.PX_8, children: null };
        const obj5 = {
          caller: linkedAppTargetSidesResult.caller,
          target: linkedAppTargetSidesResult.target,
          callerProject: project_id.project,
          targetProject: _undefined[project_id],
          flow: null,
        };
        let flow = project_id.flow;
        const obj3 = linkedApps(_undefined[12]);
        if (flow == null) {
          flow = null;
        }
        obj5.flow = flow;
        items = [_undefined(onOpenSettings(_undefined[13]), obj5), , ,];
        let tmp9Result = null;
        if (null != linkedAppPurposeResult) {
          const obj6 = {
            variant: "body-sm/normal",
            color: "text-default",
            lineClamp: 1,
            children: linkedAppPurposeResult,
          };
          tmp9Result = _undefined(linkedApps(_undefined[11]).Text, obj6);
        }
        items[1] = tmp9Result;
        let tmp9Result3 = null;
        if (null != linkedAppDataSummaryResult) {
          const obj7 = { variant: "body-sm/normal", color: "text-subtle", children: linkedAppDataSummaryResult };
          tmp9Result3 = _undefined(linkedApps(_undefined[11]).Text, obj7);
        }
        items[2] = tmp9Result3;
        let tmp9Result4 = null;
        if (null != _undefined[project_id]) {
          tmp9Result4 = null;
          if (_undefined2(tmp)) {
            const obj8 = { hasIcons: false, children: null };
            const obj9 = { label: null, arrow: true, onPress: null };
            const intl = linkedApps(_undefined[7]).intl;
            const obj10 = { target: linkedAppTargetSidesResult.target };
            obj9.label = intl.formatToPlainString(onOpenSettings(_undefined[8]).DfBXSF, obj10);
            obj9.onPress = function onPress() {
              return onOpenSettings(project_id);
            };
            obj8.children = _undefined(linkedApps(_undefined[3]).TableRow, obj9);
            tmp9Result4 = _undefined(linkedApps(_undefined[14]).TableRowGroup, obj8);
          }
        }
        items[3] = tmp9Result4;
        obj4.children = items;
        return _undefined2(linkedApps(_undefined[9]).Stack, obj4, project_id);
      }),
    ];
    obj5.children = items2;
    tmpResult2 = tmp(tmp2(6337).Stack, obj5);
  }
  items1[1] = tmpResult2;
  if (!failed) {
    if (!linkedApps.saved) {
      items1[2] = null;
      obj.children = items1;
      return tmp(linkedApps(6337).Stack, obj);
    }
  }
  let str = "text-muted";
  if (failed) {
    str = "text-feedback-critical";
  }
  let obj8 = {
    variant: "body-sm/normal",
    color: str,
    accessibilityRole: null,
    accessibilityLiveRegion: null,
    children: null,
  };
  let str2;
  if (failed) {
    str2 = "alert";
  }
  obj8.accessibilityRole = str2;
  let str3 = "polite";
  if (failed) {
    str3 = "assertive";
  }
  obj8.accessibilityLiveRegion = str3;
  let intl3 = tmp2(1113).intl;
  const tmp4Result = onOpenSettings(4131);
  obj8.children = intl3.string(failed ? tmp4Result.dIEOrl : tmp4Result["/d6saK"]);
  c4(linkedApps(5929).Text, obj8);
}
