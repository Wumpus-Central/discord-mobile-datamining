// discord_app/modules/conjure/builder/native/conjureChatMoreSections.tsx
import _modDef4089 from "../../intl/ConjureUntranslated.messages.js";
import conjureProjectMute from "../../projects/conjureProjectMute.tsx";
import conjureProjectActions from "../../projects/native/conjureProjectActions.tsx";
import openConjureUnpublishUserAppAlertDefault from "../../projects/native/openConjureUnpublishUserAppAlert.tsx";
import ConjureProjectStore from "../../projects/ConjureProjectStore.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

({ canRemixProject: c3, isProjectOwner: closure_4 } = ConjureProjectStore);
const result = size.fileFinishedImporting("modules/conjure/builder/native/conjureChatMoreSections.tsx");

export function conjureChatMoreSections(project) {
  project = project.project;
  ({
    guildId: importDefault,
    removeTarget: dependencyMap,
    annotate,
    onRefresh,
    onDebug,
    onConnectTool,
    preview,
  } = project);
  ({ muted, onOpenSettings, onRemix, onHistory } = project);
  const tmp = closure_4(project);
  let obj = { kind: "action", key: "settings", label: null, IconComponent: null, onPress: null };
  const intl = project(1113).intl;
  obj.label = intl.string(_modDef4089.I2XSKe);
  obj.IconComponent = project(10309).SettingsIcon;
  obj.onPress = onOpenSettings;
  items = [obj];
  if (preview(project)) {
    const obj2 = { kind: "action", key: "remix", label: null, IconComponent: null, onPress: null };
    const intl2 = tmp2(1113).intl;
    obj2.label = intl2.string(_modDef4089["276ll6"]);
    obj2.IconComponent = tmp2(13775).PaperPlusIcon;
    obj2.onPress = onRemix;
    items.push(obj2);
  }
  if (null != annotate) {
    const entry = {
      kind: "switch",
      key: "annotate",
      label: null,
      IconComponent: null,
      value: null,
      disabled: null,
      subLabel: null,
      closesOnEnable: true,
      onValueChange: null,
    };
    const intl15 = tmp2(1113).intl;
    entry.label = intl15.string(_modDef4089["6GOFLB"]);
    entry.IconComponent = tmp2(18415).ExperimentalDirectSelectIcon;
    ({ active: obj15.value, busy: obj15.disabled } = annotate);
    let stringResult;
    if (annotate.busy) {
      const intl3 = tmp2(1113).intl;
      stringResult = intl3.string(_modDef4089.bcdhe6);
    }
    entry.subLabel = stringResult;
    entry.onValueChange = annotate.onToggle;
    items.push(entry);
  }
  if (null != onRefresh) {
    const obj3 = { kind: "action", key: "refresh", label: null, IconComponent: null, onPress: null };
    const intl4 = tmp2(1113).intl;
    obj3.label = intl4.string(_modDef4089["p4B/7M"]);
    obj3.IconComponent = tmp2(14278).RefreshIcon;
    obj3.onPress = onRefresh;
    items.push(obj3);
  }
  const entry1 = {
    kind: "switch",
    key: "notifications",
    label: null,
    IconComponent: null,
    value: null,
    onValueChange: null,
  };
  const intl5 = tmp2(1113).intl;
  entry1.label = intl5.string(project(1113).t.HcoRu0);
  entry1.IconComponent = project(11177).BellIcon;
  entry1.value = !muted;
  entry1.onValueChange = function onValueChange(arg0) {
    return conjureProjectMute.setConjureProjectMuted(project.id, !arg0);
  };
  const obj4 = { kind: "action", key: "history", label: null, IconComponent: null, onPress: null };
  const intl6 = tmp2(1113).intl;
  obj4.label = intl6.string(_modDef4089["3hIVou"]);
  obj4.IconComponent = project(5501).ClockIcon;
  obj4.onPress = onHistory;
  items.push(entry1, obj4);
  let items1;
  if (preview != null) {
    items1 = preview.items;
  }
  if (items1 == null) {
    items1 = [];
  }
  const obj5 = { kind: "action", key: "copy-link", label: null, IconComponent: null, onPress: null };
  const mapped = items1.map((kind, index) => {
    closure_0 = kind;
    const obj = {
      kind: "action",
      key: "preview-" + kind.kind + "-" + index,
      label: kind.label,
      IconComponent: null,
      onPress: null,
    };
    if ("refresh" === kind.kind) {
      let KeyIcon = project(10283).RetryIcon;
    } else {
      KeyIcon = project(7267).KeyIcon;
    }
    obj.IconComponent = KeyIcon;
    obj.onPress = function onPress() {
      let onPressResult;
      if (preview != null) {
        onPressResult = preview.onPress(closure_0);
      }
      return onPressResult;
    };
    return obj;
  });
  const intl7 = tmp2(1113).intl;
  obj5.label = intl7.string(project(1113).t.WqhZss);
  obj5.IconComponent = project(5488).LinkIcon;
  obj5.onPress = function onPress() {
    return conjureProjectActions.copyConjureProjectLink(project, importDefault);
  };
  const items2 = [obj5];
  const obj6 = { kind: "action", key: "export", label: null, IconComponent: null, onPress: null };
  const intl8 = tmp2(1113).intl;
  obj6.label = intl8.string(_modDef4089.WsEEP7);
  obj6.IconComponent = project(5494).DownloadIcon;
  obj6.onPress = function onPress() {
    return conjureProjectActions.exportConjureProject(project);
  };
  items2[1] = obj6;
  if (tmp) {
    const obj7 = { kind: "action", key: "import", label: null, IconComponent: null, onPress: null };
    const intl9 = tmp2(1113).intl;
    obj7.label = intl9.string(_modDef4089.rWGY3e);
    obj7.IconComponent = tmp2(17010).FileUpIcon;
    obj7.onPress = function onPress() {
      return conjureProjectActions.importConjureProject(project);
    };
    items2.push(obj7);
  }
  const items3 = [];
  if (null != onDebug) {
    const obj8 = { kind: "action", key: "debug", label: null, IconComponent: null, onPress: null };
    const intl10 = tmp2(1113).intl;
    obj8.label = intl10.string(_modDef4089["Q4FN+H"]);
    obj8.IconComponent = tmp2(17236).BugIcon;
    obj8.onPress = onDebug;
    items3.push(obj8);
  }
  if (null != onConnectTool) {
    const obj9 = { kind: "action", key: "connect-tool", label: null, IconComponent: null, onPress: null };
    const intl11 = tmp2(1113).intl;
    obj9.label = intl11.string(_modDef4089.yOIql5);
    obj9.IconComponent = tmp2(18421).LinkPlusIcon;
    obj9.onPress = onConnectTool;
    items3.push(obj9);
  }
  const obj10 = { kind: "action", key: "copy-project-id", label: null, IconComponent: null, onPress: null };
  const intl12 = tmp2(1113).intl;
  obj10.label = intl12.string(_modDef4089["nm/zuU"]);
  obj10.IconComponent = project(10316).IdIcon;
  obj10.onPress = function onPress() {
    return conjureProjectActions.copyConjureProjectId(project);
  };
  items3.push(obj10);
  if (tmp2Result.canUnpublishConjureUserApp(project)) {
    const obj11 = {
      kind: "action",
      key: "unpublish",
      label: null,
      IconComponent: null,
      destructive: true,
      onPress: null,
    };
    const intl13 = tmp2(1113).intl;
    obj11.label = intl13.string(_modDef4089.jYAR58);
    obj11.IconComponent = tmp2(7116).EyeSlashIcon;
    obj11.onPress = function onPress() {
      return openConjureUnpublishUserAppAlertDefault(project);
    };
    items3.push(obj11);
  }
  if (tmp) {
    const obj12 = { kind: "action", key: "delete", label: null, IconComponent: null, destructive: true, onPress: null };
    const intl14 = tmp2(1113).intl;
    obj12.label = intl14.string(tmp2(1113).t.oyYWHE);
    obj12.IconComponent = tmp2(5499).TrashIcon;
    obj12.onPress = function onPress() {
      return conjureProjectActions.deleteConjureProject(project, dependencyMap);
    };
    items3.push(obj12);
  }
  const items4 = [items, mapped, items2, items3];
  return items4.filter((item) => item.length > 0);
}
