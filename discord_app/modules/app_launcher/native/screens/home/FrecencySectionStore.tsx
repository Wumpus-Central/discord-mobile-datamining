// discord_app/modules/app_launcher/native/screens/home/FrecencySectionStore.tsx
import initializeDefault from "../../../../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../../../../Dispatcher.tsx";

let obj = { APPS: "apps", COMMANDS: "commands" };
obj = { selection: null };
const PersistedStore = initializeDefault.PersistedStore;
class FrecencySectionStore extends PersistedStore {}
const prototype = FrecencySectionStore.prototype;
prototype["initialize"] = function initialize(arg0) {};
prototype["getState"] = function getState() {
  return obj;
};
prototype["getSelection"] = function getSelection() {
  if (null != obj.selection) {
    let COMMANDS = obj.selection;
  } else {
    COMMANDS = obj.COMMANDS;
  }
  return COMMANDS;
};
FrecencySectionStore.displayName = "FrecencySectionStore";
FrecencySectionStore.persistKey = "FrecencySectionStore";
obj = {
  FRECENCY_SECTION_SET_SELECTION: function handleSetSelection(selection) {
    obj = {};
    const merged = Object.assign(obj);
    obj.selection = selection.selection;
  },
};
const frecencySectionStore = new FrecencySectionStore(DispatcherDefault, obj);
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_launcher/native/screens/home/FrecencySectionStore.tsx");

export default frecencySectionStore;
export const FrecencySectionSelection = obj;
