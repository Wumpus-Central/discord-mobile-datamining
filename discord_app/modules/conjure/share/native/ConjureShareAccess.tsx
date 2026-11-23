// === Module 18348: ConjureShareAccess ===

// Module 18348 (ConjureShareAccess)
import nativeDefault from "native" /* 575 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5127 */;
import ToastUtils from "ToastUtils" /* 5594 */;
import ClipboardUtils from "ClipboardUtils" /* 7545 */;
import ConjureSharingModeSheet from "ConjureSharingModeSheet" /* 18291 */;
import buildConjureProjectLinkDefault from "buildConjureProjectLink" /* 18352 */;
import noop from "module_19" /* 19 */;

require = fn;
function ShareLinkRow(project) {
  project = project.project;
  const tmp = buildConjureProjectLinkDefault(project.application_id, project.name);
  _require = tmp;
  items = [tmp];
  const callback = noop.useCallback(() => {
    ClipboardUtils.copy(closure_0);
    ToastUtils.presentLinkCopied();
  }, items);
  let obj = { icon: closure_5(require("TableRowIcon").TableRowIcon, { IconComponent: require("LinkIcon").LinkIcon }), label: null, subLabel: null, subLabelLineClamp: 1, disabled: null, onPress: null };
  const intl = require("util").intl;
  obj.label = intl.string(require("util").t.WqhZss);
  obj.subLabel = tmp;
  obj.disabled = project.disabled;
  obj.onPress = callback;
  return closure_5(require("TableRow").TableRow, obj);
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: closure_6 } = jsxProd);
const createStyles = fn(4913);
let obj2 = { body: { gap: nativeDefault.space.PX_16 }, notice: null, noticeText: null, sharingMode: null };
let obj3 = { gap: nativeDefault.space.PX_16 };
obj2.notice = { paddingHorizontal: nativeDefault.space.PX_16 };
obj2.noticeText = { flex: 1 };
let obj4 = { paddingHorizontal: nativeDefault.space.PX_16 };
obj2.sharingMode = { marginBottom: nativeDefault.space.PX_16 };
let closure_7 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/share/native/ConjureShareAccess.tsx");

export default function ConjureShareAccess(arg0) {
  ({ project, sharing } = arg0);
  mode = undefined;
  changeMode = undefined;
  noop = undefined;
  const tmp = closure_7();
  ({ isOwner, mode } = sharing);
  const options = sharing.options;
  ({ changing, changeMode } = sharing);
  const found = options.find((value) => value.value === mode);
  noop = noop.useRef(changeMode);
  items = [changeMode];
  const effect = noop.useEffect(() => {
    closure_3.current = changeMode;
  }, items);
  const items1 = [options, mode];
  let obj = { style: tmp.body, children: null };
  let tmp7 = null;
  const callback = noop.useCallback(() => {
    const obj = ActionSheetActionCreatorsDefault;
    obj.openLazy(asyncRequireImpl(18291, dependencyMap.paths), ConjureSharingModeSheet.CONJURE_SHARING_MODE_SHEET_KEY, {
      options,
      value: mode,
      onChange(AUTO_DISMISS) {
        return ref.current(AUTO_DISMISS);
      }
    }, "stack");
  }, items1);
  if ("public" === mode) {
    const obj2 = { hasIcons: true, children: null };
    const obj3 = { project, disabled: changing };
    obj2.children = closure_5(ShareLinkRow, obj3);
    tmp7 = closure_5(mode(changeMode[9]).TableRowGroup, obj2);
  }
  const items2 = [tmp7, , , , ];
  let tmp12 = null;
  if ("link" === mode) {
    const obj4 = { project, isOwner, disabled: changing };
    tmp12 = closure_5(options(changeMode[10]), obj4);
  }
  items2[1] = tmp12;
  const obj5 = { style: tmp.sharingMode, children: null };
  const obj7 = { label: null, subLabel: null, trailing: null, arrow: null, disabled: null, onPress: null };
  const intl = mode(changeMode[12]).intl;
  obj7.label = intl.string(options(changeMode[13]).jDBYrs);
  let stringResult;
  if (!isOwner) {
    const intl2 = tmp17(tmp18[12]).intl;
    stringResult = intl2.string(tmp19(tmp18[13]).WLBlI4);
  }
  obj7.subLabel = stringResult;
  let tmp16Result;
  if (null != found) {
    const obj8 = { text: found.label };
    tmp16Result = closure_5(tmp17(tmp18[11]).TableRow.TrailingText, obj8);
  }
  obj7.trailing = tmp16Result;
  ({ canChange: obj6.arrow, canChange } = sharing);
  let tmp22 = !canChange;
  if (canChange) {
    tmp22 = changing;
  }
  obj7.disabled = tmp22;
  obj7.onPress = callback;
  obj5.children = closure_5(mode(changeMode[9]).TableRowGroup, { hasIcons: false, children: closure_5(mode(changeMode[11]).TableRow, obj7) });
  items2[2] = closure_5(View, obj5);
  let tmp5Result = null;
  if (sharing.loadFailed) {
    tmp5Result = null;
    if (!changing) {
      tmp5Result = null;
      if ("public" !== mode) {
        const obj10 = { direction: "horizontal", spacing: tmp19(tmp18[4]).space.PX_8, align: "center", style: tmp.notice, children: null };
        const obj11 = { style: tmp.noticeText, children: null };
        const obj12 = { variant: "body-sm/normal", color: "text-feedback-critical", children: null };
        const intl4 = tmp17(tmp18[12]).intl;
        obj12.children = intl4.string(tmp19(tmp18[13])["0e9nOP"]);
        obj11.children = closure_5(tmp17(tmp18[15]).Text, obj12);
        const items3 = [closure_5(View, obj11), ];
        const obj13 = { variant: "secondary", size: "sm", text: null, onPress: null };
        const intl5 = tmp17(tmp18[12]).intl;
        obj13.text = intl5.string(tmp17(tmp18[12]).t["5911Lb"]);
        obj13.onPress = sharing.reload;
        items3[1] = closure_5(tmp17(tmp18[16]).Button, obj13);
        obj10.children = items3;
        tmp5Result = closure_6(tmp17(tmp18[14]).Stack, obj10);
      }
    }
  }
  items2[3] = tmp5Result;
  let tmp16Result2 = null;
  if (sharing.saveFailed) {
    const obj14 = { style: tmp.notice, children: null };
    const obj27 = { variant: "body-sm/normal", color: "text-feedback-critical", children: null };
    const intl3 = tmp17(tmp18[12]).intl;
    obj27.children = intl3.string(tmp19(tmp18[13]).wzqQPR);
    obj14.children = closure_5(tmp17(tmp18[15]).Text, obj27);
    tmp16Result2 = closure_5(View, obj14);
  }
  items2[4] = tmp16Result2;
  obj.children = items2;
  return closure_6(View, obj);
};