// discord_app/modules/app_launcher/native/screens/home/FrecencySectionStore.tsx
import get_initializedDefault from "../../../../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../../../../Dispatcher.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

let obj = { APPS: "apps", COMMANDS: "commands" };
obj = { selection: null };
const PersistedStore = get_initializedDefault.PersistedStore;
class FrecencySectionStore extends PersistedStore {
  initialize(arg0) {}
  getState() {
    return obj;
  }
  getSelection() {
    let COMMANDS;
    if (null != obj.selection) {
      COMMANDS = obj.selection;
    } else {
      COMMANDS = obj.COMMANDS;
    }
    return COMMANDS;
  }
}
const prototype = FrecencySectionStore.prototype;
FrecencySectionStore.displayName = "FrecencySectionStore";
FrecencySectionStore.persistKey = "FrecencySectionStore";
const obj2 = {
  FRECENCY_SECTION_SET_SELECTION: function handleSetSelection(selection) {
    obj = { selection: selection.selection };
    const merged = Object.assign(obj);
  },
};
const frecencySectionStore = new FrecencySectionStore(DispatcherDefault, obj2);
const result = size.fileFinishedImporting("modules/app_launcher/native/screens/home/FrecencySectionStore.tsx");

export default frecencySectionStore;
export const FrecencySectionSelection = obj;
