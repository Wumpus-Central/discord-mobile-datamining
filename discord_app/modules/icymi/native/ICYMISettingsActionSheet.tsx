// === Module 18909: ICYMISettingsActionSheet ===

// Module 18909 (ICYMISettingsActionSheet)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import TableRow from "TableRow" /* 7041 */;
import TableRowGroup from "TableRowGroup" /* 7129 */;
import ActionSheet from "ActionSheet" /* 7429 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(5142);
let obj2 = { padding: { bottomPadding: nativeDefault.space.PX_16, width: "100%" } };
let closure_6 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/icymi/native/ICYMISettingsActionSheet.tsx");

export default function ICYMISettingsActionSheet() {
  let obj = { showGradient: true, startExpanded: true, children: null };
  let obj2 = { title: null, hasIcons: false, children: null };
  const intl = util.intl;
  obj2.title = intl.string(util.t["7Si8Ul"]);
  let obj3 = { label: null, onPress: null };
  const intl2 = util.intl;
  obj3.label = intl2.string(util.t.Eorjmy);
  obj3.onPress = function onPress() {
    require("ICYMIActionCreators").itemInteracted("icymi_settings_action_sheet", "icymi_settings_action_sheet", "custom_scoring_button");
    const obj = require("ICYMIActionCreators");
    require("ICYMIActionCreators").feedPageActioned({ actionParameters: { actionGestureType: "press", actionTargetElement: "tune_settings_button", actionIntentType: "open", actionDestinationType: null } });
    const obj2 = require("ICYMIActionCreators");
    const obj3 = require("ModalActionCreators");
    obj3.pushLazy(require("asyncRequireImpl")(paths[11], paths.paths), {}, require("ICYMICustomScoreTypes").ICYMI_CUSTOM_SCORES_MODAL_KEY, { presentation: "modal" });
    const tmp3 = require("asyncRequireImpl")(paths[11], paths.paths);
    require("ActionSheetActionCreators").hideActionSheet();
  };
  obj2.children = React4(TableRow.TableRow, obj3);
  items = [React4(TableRowGroup.TableRowGroup, obj2), ];
  const tmp = closure_6();
  items[1] = React4(View, { style: closure_6().padding });
  obj.children = items;
  return hasOwnProperty(ActionSheet.ActionSheet, obj);
};