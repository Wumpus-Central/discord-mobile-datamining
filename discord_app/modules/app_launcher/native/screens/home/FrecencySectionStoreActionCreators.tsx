// discord_app/modules/app_launcher/native/screens/home/FrecencySectionStoreActionCreators.tsx
import { dispatcher } from "../../../../../Dispatcher.tsx";
const result = require("set").fileFinishedImporting("modules/app_launcher/native/screens/home/FrecencySectionStoreActionCreators.tsx");

export const setFrecencySectionSelection = function setFrecencySectionSelection(APPS) {
  let obj = dispatcher;
  obj = { type: "FRECENCY_SECTION_SET_SELECTION", selection: APPS };
  obj.dispatch(obj);
};