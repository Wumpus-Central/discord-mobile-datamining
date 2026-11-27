// === Module 18572: ConjureShareSheet ===

// Module 18572 (ConjureShareSheet)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1112 */;
import _modDef4245 from "module_4245" /* 4245 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5257 */;
import components_Button_Button from "components/Button/Button" /* 5641 */;
import BottomSheetTitleHeader from "BottomSheetTitleHeader" /* 7507 */;
import ActionSheet from "ActionSheet" /* 7546 */;
import ConjureProjectIconDefault from "ConjureProjectIcon" /* 14294 */;
import useConjureSharingModeDefault from "useConjureSharingMode" /* 18483 */;
import ConjureShareAccessDefault from "ConjureShareAccess" /* 18573 */;
import noop from "module_19" /* 19 */;

require = fn;
function hideShareSheet() {
  ActionSheetActionCreatorsDefault.hideActionSheet(ConjureShareSheet);
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const ConjureShareSheet = "ConjureShareSheet";
const createStyles = fn(5043);
let obj2 = { header: { alignItems: "center", gap: nativeDefault.space.PX_12 }, body: null };
let obj3 = { alignItems: "center", gap: nativeDefault.space.PX_12 };
obj2.body = { gap: nativeDefault.space.PX_16 };
let closure_7 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/share/native/ConjureShareSheet.tsx");

export default function ConjureShareSheet(projectId) {
  const tmp = closure_7();
  const tmp4 = useConjureSharingModeDefault(projectId.projectId);
  const project = tmp4.project;
  const obj = { style: tmp.header, children: null };
  let tmp5Result = null;
  if (null != project) {
    const obj2 = { project, size: "dialog" };
    tmp5Result = React4(ConjureProjectIconDefault, obj2);
  }
  items = [tmp5Result, ];
  const intl = util.intl;
  let str;
  if (project != null) {
    str = project.name;
  }
  if (str == null) {
    str = "";
  }
  const obj3 = { header: null, children: null };
  const obj4 = { title: intl.formatToPlainString(_modDef4245.pgxjO4, { app: str }), subtitle: null };
  const intl2 = util.intl;
  obj4.subtitle = intl2.string(_modDef4245.mbybxl);
  items[1] = React4(BottomSheetTitleHeader.BottomSheetTitleHeader, obj4);
  obj.children = items;
  obj3.header = hasOwnProperty(View, obj);
  let tmp7Result = null;
  if (null != project) {
    const obj5 = { style: tmp.body, children: null };
    const obj6 = { project, sharing: tmp4 };
    const items1 = [React4(ConjureShareAccessDefault, obj6), ];
    const obj7 = { variant: "primary", text: null, onPress: null };
    const intl3 = util.intl;
    obj7.text = intl3.string(util.t.i4jeWR);
    obj7.onPress = hideShareSheet;
    items1[1] = React4(components_Button_Button.Button, obj7);
    obj5.children = items1;
    tmp7Result = hasOwnProperty(View, obj5);
  }
  obj3.children = tmp7Result;
  return React4(ActionSheet.ActionSheet, obj3);
};
export const CONJURE_SHARE_SHEET_KEY = "ConjureShareSheet";