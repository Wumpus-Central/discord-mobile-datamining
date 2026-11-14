// === Module 13790: openConjureSharedProjectRemixSheet ===

// Module 13790 (openConjureSharedProjectRemixSheet)
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 5552 */;
import openConjureHomeScreenDefault from "openConjureHomeScreen" /* 10536 */;
import ConjureRemixSheet from "ConjureRemixSheet" /* 10978 */;
import noop from "module_19" /* 19 */;

const ConjureRemixSheetDefault = ConjureRemixSheet;

require = fn;
function openRemixed(arg0) {
  openConjureHomeScreenDefault(arg0, { entryPoint: "remix" });
}
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/share/native/openConjureSharedProjectRemixSheet.tsx");

export default function openConjureSharedProjectRemixSheet(project, currentGuildId, mode) {
  let tmp = arg3;
  if (arg3 === undefined) {
    tmp = null;
  }
  const obj2 = { key: ConjureRemixSheet.CONJURE_REMIX_SHEET_KEY, content: null };
  const obj3 = { project, mode, currentGuildId, onRemixed: openRemixed, shareTicket: null };
  const obj = ActionSheetActionCreators;
  obj3.shareTicket = tmp;
  obj2.content = jsx(ConjureRemixSheetDefault, { project, mode, currentGuildId, onRemixed: openRemixed, shareTicket: null });
  obj.showActionSheet(obj2);
};