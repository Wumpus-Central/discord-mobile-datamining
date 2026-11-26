// discord_app/modules/conjure/builder/native/conjureChatMoreSections.tsx
import ConjureProjectStore from "../../projects/ConjureProjectStore.tsx";
import conjureProjectMute from "../../projects/conjureProjectMute.tsx";
import openConjureUnpublishUserAppAlertDefault from "../../projects/native/openConjureUnpublishUserAppAlert.tsx";
import conjureProjectActions from "../../projects/native/conjureProjectActions.tsx";
import openConjureRemoveAppAlertDefault from "../../projects/native/openConjureRemoveAppAlert.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;

const isProjectOwner = ConjureProjectStore.isProjectOwner;
let result = size.fileFinishedImporting("modules/conjure/builder/native/conjureChatMoreSections.tsx");

export function conjureChatMoreSections(project) {
  project = project.project;
  ({ guildId: importDefault, removeTarget } = project);
  ({ annotate, onOpenSettings, onShare, onRefresh, onDebug, onConnectTool, onPlaceViews, preview } = project);
  c4 = undefined;
  ({ muted, onHistory } = project);
  const tmp = preview(project);
  items = [];
  if (null != onOpenSettings) {
    let obj = { kind: "action", key: "settings", label: null, IconComponent: null, onPress: null };
    const intl = project(removeTarget[1]).intl;
    obj.label = intl.string(require("../../intl/ConjureUntranslated.messages.js").I2XSKe);
    obj.IconComponent = project(removeTarget[3]).SettingsIcon;
    obj.onPress = onOpenSettings;
    items.push(obj);
  }
  if (null != onShare) {
    const obj2 = { kind: "action", key: "share", label: null, IconComponent: null, onPress: null };
    const intl2 = project(removeTarget[1]).intl;
    obj2.label = intl2.string(project(removeTarget[1]).t.RDE0Sc);
    obj2.IconComponent = project(removeTarget[4]).ShareIcon;
    obj2.onPress = onShare;
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
    const intl17 = project(removeTarget[1]).intl;
    entry.label = intl17.string(require("../../intl/ConjureUntranslated.messages.js")["6GOFLB"]);
    entry.IconComponent = project(removeTarget[5]).ExperimentalDirectSelectIcon;
    ({ active: obj18.value, busy: obj18.disabled } = annotate);
    let stringResult;
    if (annotate.busy) {
      const intl3 = tmp29(removeTarget[1]).intl;
      stringResult = intl3.string(require("../../intl/ConjureUntranslated.messages.js").bcdhe6);
    }
    entry.subLabel = stringResult;
    entry.onValueChange = annotate.onToggle;
    items.push(entry);
    tmp29 = project;
  }
  if (null != onRefresh) {
    const obj3 = { kind: "action", key: "refresh", label: null, IconComponent: null, onPress: null };
    const intl4 = project(removeTarget[1]).intl;
    obj3.label = intl4.string(require("../../intl/ConjureUntranslated.messages.js")["p4B/7M"]);
    obj3.IconComponent = project(removeTarget[6]).RefreshIcon;
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
  const intl5 = project(removeTarget[1]).intl;
  entry1.label = intl5.string(project(removeTarget[1]).t.HcoRu0);
  entry1.IconComponent = project(removeTarget[7]).BellIcon;
  entry1.value = !muted;
  entry1.onValueChange = function onValueChange(arg0) {
    return conjureProjectMute.setConjureProjectMuted(project.id, !arg0);
  };
  const obj4 = { kind: "action", key: "history", label: null, IconComponent: null, onPress: null };
  const intl6 = project(removeTarget[1]).intl;
  obj4.label = intl6.string(require("../../intl/ConjureUntranslated.messages.js")["3hIVou"]);
  obj4.IconComponent = project(removeTarget[9]).ClockIcon;
  obj4.onPress = onHistory;
  items.push(entry1, obj4);
  if (null != onPlaceViews) {
    const obj5 = { kind: "action", key: "place-views", label: null, IconComponent: null, onPress: null };
    const intl7 = tmp15(removeTarget[1]).intl;
    obj5.label = intl7.string(require("../../intl/ConjureUntranslated.messages.js").e4jp1l);
    obj5.IconComponent = tmp15(removeTarget[10]).AppsIcon;
    obj5.onPress = onPlaceViews;
    items.push(obj5);
  }
  let items1;
  if (preview != null) {
    items1 = preview.items;
  }
  if (items1 == null) {
    items1 = [];
  }
  const obj6 = { kind: "action", key: "copy-link", label: null, IconComponent: null, onPress: null };
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
      let KeyIcon = project(removeTarget[11]).RetryIcon;
    } else {
      KeyIcon = project(removeTarget[12]).KeyIcon;
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
  const intl8 = tmp15(removeTarget[1]).intl;
  obj6.label = intl8.string(project(removeTarget[1]).t.WqhZss);
  obj6.IconComponent = project(removeTarget[13]).LinkIcon;
  obj6.onPress = function onPress() {
    return conjureProjectActions.copyConjureProjectLink(project, importDefault);
  };
  const items2 = [obj6];
  const obj7 = { kind: "action", key: "export", label: null, IconComponent: null, onPress: null };
  const intl9 = tmp15(removeTarget[1]).intl;
  obj7.label = intl9.string(require("../../intl/ConjureUntranslated.messages.js").WsEEP7);
  obj7.IconComponent = project(removeTarget[15]).DownloadIcon;
  obj7.onPress = function onPress() {
    return conjureProjectActions.exportConjureProject(project);
  };
  items2[1] = obj7;
  if (tmp) {
    const obj8 = { kind: "action", key: "import", label: null, IconComponent: null, onPress: null };
    const intl10 = tmp15(removeTarget[1]).intl;
    obj8.label = intl10.string(require("../../intl/ConjureUntranslated.messages.js").rWGY3e);
    obj8.IconComponent = tmp15(removeTarget[16]).FileUpIcon;
    obj8.onPress = function onPress() {
      return conjureProjectActions.importConjureProject(project);
    };
    items2.push(obj8);
  }
  const items3 = [];
  if (null != onDebug) {
    const obj9 = { kind: "action", key: "debug", label: null, IconComponent: null, onPress: null };
    const intl11 = tmp15(removeTarget[1]).intl;
    obj9.label = intl11.string(require("../../intl/ConjureUntranslated.messages.js")["Q4FN+H"]);
    obj9.IconComponent = tmp15(removeTarget[17]).BugIcon;
    obj9.onPress = onDebug;
    items3.push(obj9);
  }
  if (null != onConnectTool) {
    const obj10 = { kind: "action", key: "connect-tool", label: null, IconComponent: null, onPress: null };
    const intl12 = tmp15(removeTarget[1]).intl;
    obj10.label = intl12.string(require("../../intl/ConjureUntranslated.messages.js").yOIql5);
    obj10.IconComponent = tmp15(removeTarget[18]).LinkPlusIcon;
    obj10.onPress = onConnectTool;
    items3.push(obj10);
  }
  const obj11 = { kind: "action", key: "copy-project-id", label: null, IconComponent: null, onPress: null };
  const intl13 = tmp15(removeTarget[1]).intl;
  obj11.label = intl13.string(require("../../intl/ConjureUntranslated.messages.js")["nm/zuU"]);
  obj11.IconComponent = project(removeTarget[19]).IdIcon;
  obj11.onPress = function onPress() {
    return conjureProjectActions.copyConjureProjectId(project);
  };
  items3.push(obj11);
  if (tmp15Result.canUnpublishConjureUserApp(project)) {
    const obj12 = {
      kind: "action",
      key: "unpublish",
      label: null,
      IconComponent: null,
      destructive: true,
      onPress: null,
    };
    const intl14 = tmp15(removeTarget[1]).intl;
    obj12.label = intl14.string(require("../../intl/ConjureUntranslated.messages.js").jYAR58);
    obj12.IconComponent = tmp15(removeTarget[20]).EyeSlashIcon;
    obj12.onPress = function onPress() {
      return openConjureUnpublishUserAppAlertDefault(project);
    };
    items3.push(obj12);
  }
  tmp15Result = project(removeTarget[14]);
  const result = project(removeTarget[22]).conjureAdminUnpublishTarget(project, removeTarget);
  c4 = result;
  if (null != result) {
    const obj13 = {
      kind: "action",
      key: "unpublish-from-server",
      label: null,
      IconComponent: null,
      destructive: true,
      onPress: null,
    };
    const intl15 = tmp15(removeTarget[1]).intl;
    obj13.label = intl15.string(require("../../intl/ConjureUntranslated.messages.js").mS61Dm);
    obj13.IconComponent = tmp15(removeTarget[20]).EyeSlashIcon;
    obj13.onPress = function onPress() {
      return openConjureRemoveAppAlertDefault({ project, target, action: "remove" });
    };
    items3.push(obj13);
  }
  if (tmp) {
    const obj14 = { kind: "action", key: "delete", label: null, IconComponent: null, destructive: true, onPress: null };
    const intl16 = tmp15(removeTarget[1]).intl;
    obj14.label = intl16.string(tmp15(removeTarget[1]).t.oyYWHE);
    obj14.IconComponent = tmp15(removeTarget[24]).TrashIcon;
    obj14.onPress = function onPress() {
      return conjureProjectActions.deleteConjureProject(project, removeTarget);
    };
    items3.push(obj14);
  }
  const items4 = [items, mapped, items2, items3];
  return items4.filter((item) => item.length > 0);
}
