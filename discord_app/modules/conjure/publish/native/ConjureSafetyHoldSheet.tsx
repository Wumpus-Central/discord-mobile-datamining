// === Module 12256: ConjureSafetyHoldSheet ===

// Module 12256 (ConjureSafetyHoldSheet)
import nativeDefault from "native" /* 575 */;
import _modDef4026 from "module_4026" /* 4026 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 5374 */;
import conjurePublishConnection from "conjurePublishConnection" /* 11083 */;
import useConjureSafetyRecheckDefault from "useConjureSafetyRecheck" /* 12257 */;
import noop from "module_19" /* 19 */;

const ActionSheetActionCreatorsDefault = ActionSheetActionCreators;

require = fn;
function ConjureSafetyHoldSheet(projectId) {
  projectId = projectId.projectId;
  const tmp4 = useConjureSafetyRecheckDefault(projectId);
  const tmp = closure_8();
  const conjureSafetyRecheckNotice = projectId(12257).getConjureSafetyRecheckNotice(tmp4);
  const obj = projectId(12257);
  const conjureSafetyHoldCopy = projectId(12257).getConjureSafetyHoldCopy(tmp4);
  let status;
  if (tmp4 != null) {
    status = tmp4.status;
  }
  const obj3 = { header: closure_4(projectId(7382).BottomSheetTitleHeader, { title: conjureSafetyHoldCopy.title }), children: null };
  const obj5 = { style: tmp.content, children: null };
  items = [closure_4(projectId(5751).Text, { variant: "body-md/normal", color: "text-muted", children: conjureSafetyHoldCopy.body }), , , ];
  let tmp9Result = null;
  if (null != conjureSafetyRecheckNotice) {
    const obj7 = { variant: "body-md/medium", color: closure_7[conjureSafetyRecheckNotice.type], accessibilityRole: null, accessibilityLiveRegion: "polite", children: null };
    let str2;
    if ("critical" === conjureSafetyRecheckNotice.type) {
      str2 = "alert";
    }
    obj7.accessibilityRole = str2;
    obj7.children = conjureSafetyRecheckNotice.message;
    tmp9Result = closure_4(tmp5(5751).Text, obj7);
  }
  items[1] = tmp9Result;
  let tmp9Result2 = null;
  if ("cleared" !== status) {
    const obj8 = { variant: "primary", text: null, loading: null, onPress: null };
    const intl = tmp5(1113).intl;
    obj8.text = intl.string(_modDef4026["nmwy0/"]);
    let status1;
    if (tmp4 != null) {
      status1 = tmp4.status;
    }
    obj8.loading = "pending" === status1;
    obj8.onPress = function onPress() {
      return conjurePublishConnection.requestConjureSafetyRecheck(projectId);
    };
    tmp9Result2 = closure_4(tmp5(5758).Button, obj8);
  }
  items[2] = tmp9Result2;
  let str4 = "secondary";
  if ("cleared" === status) {
    str4 = "primary";
  }
  const obj9 = { variant: str4, text: null, onPress: null };
  const intl2 = tmp5(1113).intl;
  obj9.text = intl2.string(projectId(1113).t.BddRzS);
  obj9.onPress = function close() {
    ActionSheetActionCreatorsDefault.hideActionSheet(ConjureSafetyHoldSheet);
  };
  items[3] = closure_4(projectId(5758).Button, obj9);
  obj5.children = items;
  obj3.children = closure_5(View, obj5);
  return closure_4(projectId(7426).ActionSheet, obj3);
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
ConjureSafetyHoldSheet = "ConjureSafetyHoldSheet";
let closure_7 = { critical: "text-feedback-critical", warning: "text-feedback-warning", info: "text-muted" };
const createStyles = fn(5140);
const obj2 = { content: { gap: nativeDefault.space.PX_16 } };
let closure_8 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/publish/native/ConjureSafetyHoldSheet.tsx");

export default function showConjureSafetyHoldSheet(projectId) {
  const result = conjurePublishConnection.forgetClearedSafetyRecheck(projectId);
  const obj3 = { key: ConjureSafetyHoldSheet, content: React4(ConjureSafetyHoldSheet, { projectId }) };
  ActionSheetActionCreators.showActionSheet(obj3);
};