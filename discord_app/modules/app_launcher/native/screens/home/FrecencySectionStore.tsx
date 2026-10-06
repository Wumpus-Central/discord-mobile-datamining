// === Module 11681: FrecencySectionStore ===

// Module 11681 (FrecencySectionStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import size from "module_2" /* 2 */;

let obj = { APPS: "apps", COMMANDS: "commands" };
obj = { selection: null };
const PersistedStore = get_initializedDefault.PersistedStore;
class FrecencySectionStore extends PersistedStore {
  initialize(arg0) {

  }
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
  }
};
const frecencySectionStore = new FrecencySectionStore(DispatcherDefault, obj2);
const result = size.fileFinishedImporting("modules/app_launcher/native/screens/home/FrecencySectionStore.tsx");

export default frecencySectionStore;
export const FrecencySectionSelection = obj;