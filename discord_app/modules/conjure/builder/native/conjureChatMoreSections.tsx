// === Module 12299: conjureChatMoreSections ===

// Module 12299 (conjureChatMoreSections)
import conjureProjectMute from "conjureProjectMute" /* 10760 */;
import conjureProjectActions from "conjureProjectActions" /* 12304 */;
import openConjureRemoveAppAlertDefault from "openConjureRemoveAppAlert" /* 12318 */;
import openConjureUnpublishUserAppAlertDefault from "openConjureUnpublishUserAppAlert" /* 12322 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6808 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

({ canRemixProject: c3, isProjectOwner: closure_4 } = ConjureProjectStore);
const result = size.fileFinishedImporting("modules/conjure/builder/native/conjureChatMoreSections.tsx");

export const conjureChatMoreSections = function conjureChatMoreSections(project) {
  project = project.project;
  ({ guildId: importDefault, removeTarget } = project);
  ({ annotate, onRefresh, onDebug, onConnectTool, preview } = project);
  ({ muted, onOpenSettings, onRemix, onHistory } = project);
  const tmp = closure_4(project);
  let obj = { kind: "action", key: "settings", label: null, IconComponent: null, onPress: null };
  const intl = project(removeTarget[1]).intl;
  obj.label = intl.string(require("module_3863").I2XSKe);
  obj.IconComponent = project(removeTarget[3]).SettingsIcon;
  obj.onPress = onOpenSettings;
  const items = [obj];
  if (preview(project)) {
    const obj2 = { kind: "action", key: "remix", label: null, IconComponent: null, onPress: null };
    const intl2 = tmp2(removeTarget[1]).intl;
    obj2.label = intl2.string(require("module_3863").XWgAfc);
    obj2.IconComponent = tmp2(removeTarget[4]).RemixIcon;
    obj2.onPress = onRemix;
    items.push(obj2);
  }
  if (null != annotate) {
    const entry = { kind: "switch", key: "annotate", label: null, IconComponent: null, value: null, disabled: null, subLabel: null, closesOnEnable: true, onValueChange: null };
    const intl16 = tmp2(removeTarget[1]).intl;
    entry.label = intl16.string(require("module_3863")["6GOFLB"]);
    entry.IconComponent = tmp2(removeTarget[5]).ExperimentalDirectSelectIcon;
    ({ active: obj17.value, busy: obj17.disabled } = annotate);
    let stringResult;
    if (annotate.busy) {
      const intl3 = tmp2(removeTarget[1]).intl;
      stringResult = intl3.string(require("module_3863").bcdhe6);
    }
    entry.subLabel = stringResult;
    entry.onValueChange = annotate.onToggle;
    items.push(entry);
  }
  if (null != onRefresh) {
    const obj3 = { kind: "action", key: "refresh", label: null, IconComponent: null, onPress: null };
    const intl4 = tmp2(removeTarget[1]).intl;
    obj3.label = intl4.string(require("module_3863")["p4B/7M"]);
    obj3.IconComponent = tmp2(removeTarget[6]).RefreshIcon;
    obj3.onPress = onRefresh;
    items.push(obj3);
  }
  const entry1 = { kind: "switch", key: "notifications", label: null, IconComponent: null, value: null, onValueChange: null };
  const intl5 = tmp2(removeTarget[1]).intl;
  entry1.label = intl5.string(project(removeTarget[1]).t.HcoRu0);
  entry1.IconComponent = project(removeTarget[7]).BellIcon;
  entry1.value = !muted;
  entry1.onValueChange = function onValueChange(arg0) {
    return conjureProjectMute.setConjureProjectMuted(project.id, !arg0);
  };
  const obj4 = { kind: "action", key: "history", label: null, IconComponent: null, onPress: null };
  const intl6 = tmp2(removeTarget[1]).intl;
  obj4.label = intl6.string(require("module_3863")["3hIVou"]);
  obj4.IconComponent = project(removeTarget[9]).ClockIcon;
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
    const obj = { kind: "action", key: "preview-" + kind.kind + "-" + index, label: kind.label, IconComponent: null, onPress: null };
    if ("refresh" === kind.kind) {
      let KeyIcon = project(removeTarget[10]).RetryIcon;
    } else {
      KeyIcon = project(removeTarget[11]).KeyIcon;
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
  const intl7 = tmp2(removeTarget[1]).intl;
  obj5.label = intl7.string(project(removeTarget[1]).t.WqhZss);
  obj5.IconComponent = project(removeTarget[12]).LinkIcon;
  obj5.onPress = function onPress() {
    return conjureProjectActions.copyConjureProjectLink(project, importDefault);
  };
  const items2 = [obj5, ];
  const obj6 = { kind: "action", key: "export", label: null, IconComponent: null, onPress: null };
  const intl8 = tmp2(removeTarget[1]).intl;
  obj6.label = intl8.string(require("module_3863").WsEEP7);
  obj6.IconComponent = project(removeTarget[14]).DownloadIcon;
  obj6.onPress = function onPress() {
    return conjureProjectActions.exportConjureProject(project);
  };
  items2[1] = obj6;
  if (tmp) {
    const obj7 = { kind: "action", key: "import", label: null, IconComponent: null, onPress: null };
    const intl9 = tmp2(removeTarget[1]).intl;
    obj7.label = intl9.string(require("module_3863").rWGY3e);
    obj7.IconComponent = tmp2(removeTarget[15]).FileUpIcon;
    obj7.onPress = function onPress() {
      return conjureProjectActions.importConjureProject(project);
    };
    items2.push(obj7);
  }
  const items3 = [];
  if (null != onDebug) {
    const obj8 = { kind: "action", key: "debug", label: null, IconComponent: null, onPress: null };
    const intl10 = tmp2(removeTarget[1]).intl;
    obj8.label = intl10.string(require("module_3863")["Q4FN+H"]);
    obj8.IconComponent = tmp2(removeTarget[16]).BugIcon;
    obj8.onPress = onDebug;
    items3.push(obj8);
  }
  if (null != onConnectTool) {
    const obj9 = { kind: "action", key: "connect-tool", label: null, IconComponent: null, onPress: null };
    const intl11 = tmp2(removeTarget[1]).intl;
    obj9.label = intl11.string(require("module_3863").yOIql5);
    obj9.IconComponent = tmp2(removeTarget[17]).LinkPlusIcon;
    obj9.onPress = onConnectTool;
    items3.push(obj9);
  }
  const obj10 = { kind: "action", key: "copy-project-id", label: null, IconComponent: null, onPress: null };
  const intl12 = tmp2(removeTarget[1]).intl;
  obj10.label = intl12.string(require("module_3863")["nm/zuU"]);
  obj10.IconComponent = project(removeTarget[18]).IdIcon;
  obj10.onPress = function onPress() {
    return conjureProjectActions.copyConjureProjectId(project);
  };
  items3.push(obj10);
  let canRemoveBot;
  if (removeTarget != null) {
    canRemoveBot = removeTarget.canRemoveBot;
  }
  if (true === canRemoveBot) {
    const obj11 = { kind: "action", key: "remove-from-server", label: null, IconComponent: null, destructive: true, onPress: null };
    const intl13 = tmp2(removeTarget[1]).intl;
    const obj12 = { server: removeTarget.guildName };
    obj11.label = intl13.formatToPlainString(require("module_3863")["3gKG2j"], obj12);
    obj11.IconComponent = tmp2(removeTarget[19]).DoorExitIcon;
    obj11.onPress = function onPress() {
      return openConjureRemoveAppAlertDefault({ project, target: removeTarget, action: "remove" });
    };
    items3.push(obj11);
  }
  if (tmp2Result.canUnpublishConjureUserApp(project)) {
    const obj13 = { kind: "action", key: "unpublish", label: null, IconComponent: null, destructive: true, onPress: null };
    const intl14 = tmp2(removeTarget[1]).intl;
    obj13.label = intl14.string(require("module_3863").jYAR58);
    obj13.IconComponent = tmp2(removeTarget[21]).EyeSlashIcon;
    obj13.onPress = function onPress() {
      return openConjureUnpublishUserAppAlertDefault(project);
    };
    items3.push(obj13);
  }
  if (tmp) {
    const obj14 = { kind: "action", key: "delete", label: null, IconComponent: null, destructive: true, onPress: null };
    const intl15 = tmp2(removeTarget[1]).intl;
    obj14.label = intl15.string(tmp2(removeTarget[1]).t.oyYWHE);
    obj14.IconComponent = tmp2(removeTarget[23]).TrashIcon;
    obj14.onPress = function onPress() {
      return conjureProjectActions.deleteConjureProject(project, removeTarget);
    };
    items3.push(obj14);
  }
  const items4 = [items, mapped, items2, items3];
  return items4.filter((item) => item.length > 0);
};