// === Module 11352: initialize ===

// Module 11352 (initialize)
import { PersistedStore } from "initialize";

let obj = { APPS: "apps", COMMANDS: "commands" };
let closure_1 = { selection: null };
class FrecencySectionStore extends PersistedStore {
}
const prototype = FrecencySectionStore.prototype;
prototype["initialize"] = function initialize(arg0) {
  if (null != arg0) {
    let closure_1 = arg0;
  }
};
prototype["getState"] = function getState() {
  return closure_1;
};
prototype["getSelection"] = function getSelection() {
  if (null != closure_1.selection) {
    let COMMANDS = closure_1.selection;
  } else {
    COMMANDS = obj.COMMANDS;
  }
  return COMMANDS;
};
FrecencySectionStore.displayName = "FrecencySectionStore";
FrecencySectionStore.persistKey = "FrecencySectionStore";
obj = {
  FRECENCY_SECTION_SET_SELECTION: function handleSetSelection(selection) {
    const obj = {};
    const merged = Object.assign(obj);
    obj.selection = selection.selection;
  }
};
const frecencySectionStore = new FrecencySectionStore(require("dispatcher"), obj);
const result = require("set").fileFinishedImporting("modules/app_launcher/native/screens/home/FrecencySectionStore.tsx");

export default frecencySectionStore;
export const FrecencySectionSelection = obj;