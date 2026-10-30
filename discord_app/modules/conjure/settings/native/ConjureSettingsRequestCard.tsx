// === Module 12618: ConjureSettingsRequestCard ===

// Module 12618 (ConjureSettingsRequestCard)
import nativeDefault from "native" /* 575 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 5253 */;
import ConjureSettingsSheet from "ConjureSettingsSheet" /* 12433 */;
import noop from "module_19" /* 19 */;

const ConjureSettingsSheetDefault = ConjureSettingsSheet;

require = fn;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(5009);
let obj2 = { card: { marginTop: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_8 } };
let closure_6 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/settings/native/ConjureSettingsRequestCard.tsx");

export default function ConjureSettingsRequestCard(projectId) {
  projectId = projectId.projectId;
  const request = projectId.request;
  let flag = projectId.notifyAgent;
  if (flag === undefined) {
    flag = true;
  }
  markSaved = undefined;
  const tmp = closure_6();
  let Text = projectId;
  let obj = flag;
  const conjureSettingsAsk = projectId(flag[4]).useConjureSettingsAsk(projectId, request, projectId.askId);
  ({ done, summary, markSaved } = conjureSettingsAsk);
  const items = [markSaved, flag, projectId, request];
  const callback = markSaved.useCallback(() => {
    const obj2 = { content: React4(ConjureSettingsSheetDefault, { projectId, scopeKeys: request.keys, note: request.note, notifyAgent: flag, onSaved: markSaved, isPreview: true }), key: ConjureSettingsSheet.CONJURE_SETTINGS_SHEET_KEY };
    ActionSheetActionCreators.showActionSheet(obj2);
  }, items);
  if (conjureSettingsAsk.superseded) {
    if (!done) {
      const obj3 = { style: tmp.card, children: null };
      const obj4 = { variant: "text-xs/semibold", color: "text-muted", children: null };
      const intl = Text(obj[9]).intl;
      obj4.children = intl.string(request(obj[10])["+uXDk+"]);
      obj3.children = closure_4(Text(obj[8]).Text, obj4);
      return closure_4(request(obj[7]), obj3);
    }
  }
  const obj5 = { style: tmp.card, children: null };
  let obj2 = projectId(flag[4]);
  let Text1 = Text(obj[8]).Text;
  if (done) {
    const obj6 = { variant: "text-xs/semibold", color: "text-feedback-positive", children: null };
    const intl5 = Text(obj[9]).intl;
    obj6.children = intl5.string(tmp8(obj[10]).AxBLLy);
    const items1 = [closure_4(Text1, obj6), ];
    Text1 = null;
    if (summary.length > 0) {
      Text = Text(obj[8]).Text;
      obj = { variant: "text-sm/normal", color: "text-default", children: summary.join(" \u00B7 ") };
      Text1 = closure_4(Text, obj);
    }
    items1[1] = Text1;
    obj5.children = items1;
    let tmp14 = obj5;
  } else {
    const obj7 = { variant: "text-xs/semibold", color: "text-muted", children: null };
    const intl2 = Text(obj[9]).intl;
    obj7.children = intl2.string(tmp8(obj[10])["jZjP+I"]);
    const items2 = [closure_4(Text1, obj7), , ];
    if (null != request.note) {
      if ("" !== request.note) {
        let note = request.note;
      }
      const obj8 = { text: note, variant: "text-sm/normal", color: "text-default" };
      items2[1] = closure_4(tmp12, obj8);
      const obj9 = { variant: "secondary", size: "sm", onPress: callback, text: null };
      const intl4 = Text(obj[9]).intl;
      obj9.text = intl4.string(tmp8(obj[10]).d49riY);
      items2[2] = closure_4(Text(obj[12]).Button, obj9);
      obj5.children = items2;
      tmp14 = obj5;
    }
    const intl3 = Text(obj[9]).intl;
    note = intl3.string(tmp8(obj[10]).XuOf5s);
  }
  closure_5(request(obj[7]), tmp14);
  const tmp9 = request(obj[7]);
};