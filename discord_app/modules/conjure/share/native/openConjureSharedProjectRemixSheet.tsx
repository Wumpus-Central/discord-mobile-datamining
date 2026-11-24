// discord_app/modules/conjure/share/native/openConjureSharedProjectRemixSheet.tsx
import ActionSheetActionCreators from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import ConjureRemixSheet from "../../remix/native/ConjureRemixSheet.tsx";
import openConjureHomeScreenDefault from "../../home/native/openConjureHomeScreen.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const ConjureRemixSheetDefault = ConjureRemixSheet;

require = fn;
function openRemixed(arg0) {
  openConjureHomeScreenDefault(arg0, { entryPoint: "remix" });
}
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/share/native/openConjureSharedProjectRemixSheet.tsx");

export default function openConjureSharedProjectRemixSheet(project, currentGuildId) {
  let tmp = arg2;
  if (arg2 === undefined) {
    tmp = null;
  }
  const obj2 = { key: ConjureRemixSheet.CONJURE_REMIX_SHEET_KEY, content: null };
  const obj3 = { project, currentGuildId, onRemixed: openRemixed, shareTicket: null };
  const obj = ActionSheetActionCreators;
  obj3.shareTicket = tmp;
  obj2.content = jsx(ConjureRemixSheetDefault, { project, currentGuildId, onRemixed: openRemixed, shareTicket: null });
  obj.showActionSheet(obj2);
}
