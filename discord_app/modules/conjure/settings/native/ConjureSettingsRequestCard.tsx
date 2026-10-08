// === Module 17026: ConjureSettingsRequestCard ===

// Module 17026 (ConjureSettingsRequestCard)
import nativeDefault from "native" /* 587 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 5054 */;
import ConjureSettingsSheet from "ConjureSettingsSheet" /* 16870 */;
import noop from "module_19" /* 19 */;

const ConjureSettingsSheetDefault = ConjureSettingsSheet;

require = fn;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(5090);
let obj2 = { card: { marginTop: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_8 } };
let closure_6 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { marginTop: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_8 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/settings/native/ConjureSettingsRequestCard.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureSettingsRequestCard(projectId) {
  const cResult = projectId(576).c(16);
  projectId = projectId.projectId;
  let note = projectId.request;
  const tmp4 = closure_6();
  if (cResult[0] === projectId) {
    if (cResult[1] === note.keys) {
      if (cResult[2] === note.note) {
        let tmp5 = cResult[3];
      }
      const _Symbol = Symbol;
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        let obj2 = { variant: "text-xs/semibold", color: "text-muted", children: null };
        const intl = tmp(1126).intl;
        obj2.children = intl.string(note(3827)["jZjP+I"]);
        const tmp10 = closure_4(tmp(5086).Text, obj2);
        cResult[4] = tmp10;
        let tmp7 = tmp10;
      } else {
        tmp7 = cResult[4];
      }
      if (cResult[5] !== note.note) {
        if (null == note.note) {
          const intl2 = tmp(1126).intl;
          let note2 = intl2.string(note(3827).XuOf5s);
          note = note.note;
          cResult[5] = note;
          cResult[6] = note2;
        }
        note2 = note.note;
      } else {
        if (cResult[7] !== cResult[6]) {
          const obj3 = { variant: "text-sm/normal", color: "text-default", children: tmp11 };
          const tmp17 = closure_4(tmp(5086).Text, obj3);
          cResult[7] = tmp11;
          cResult[8] = tmp17;
          let tmp15 = tmp17;
        } else {
          tmp15 = cResult[8];
        }
        const _Symbol2 = Symbol;
        if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
          const intl3 = tmp(1126).intl;
          const stringResult = intl3.string(note(3827).d49riY);
          cResult[9] = stringResult;
          let tmp18 = stringResult;
        } else {
          tmp18 = cResult[9];
        }
        if (cResult[10] !== tmp5) {
          const obj4 = { variant: "secondary", size: "sm", onPress: tmp5, text: tmp18 };
          const tmp23 = closure_4(tmp(5375).Button, obj4);
          cResult[10] = tmp5;
          cResult[11] = tmp23;
          let tmp21 = tmp23;
        } else {
          tmp21 = cResult[11];
        }
        if (cResult[12] === tmp4.card) {
          if (cResult[13] === tmp15) {
            if (cResult[14] === tmp21) {
              let tmp24 = cResult[15];
            }
            return tmp24;
          }
        }
        const obj5 = { style: tmp4.card, children: null };
        const items = [tmp7, tmp15, tmp21];
        obj5.children = items;
        const tmp27 = closure_5(note(16948), obj5);
        cResult[12] = tmp4.card;
        cResult[13] = tmp15;
        cResult[14] = tmp21;
        cResult[15] = tmp27;
        tmp24 = tmp27;
      }
    }
  }
  const fn = function n() {
    const obj2 = { content: React4(ConjureSettingsSheetDefault, { projectId, scopeKeys: note.keys, note: note.note, notifyAgent: true, isPreview: true }), key: ConjureSettingsSheet.CONJURE_SETTINGS_SHEET_KEY };
    ActionSheetActionCreators.showActionSheet(obj2);
  };
  cResult[0] = projectId;
  cResult[1] = note.keys;
  cResult[2] = note.note;
  cResult[3] = fn;
  tmp5 = fn;
  const obj = projectId(576);
}) : (function ConjureSettingsRequestCard(projectId) {
  projectId = projectId.projectId;
  const request = projectId.request;
  const items = [projectId, request];
  const callback = noop.useCallback(() => {
    const obj2 = { content: React4(ConjureSettingsSheetDefault, { projectId, scopeKeys: request.keys, note: request.note, notifyAgent: true, isPreview: true }), key: ConjureSettingsSheet.CONJURE_SETTINGS_SHEET_KEY };
    ActionSheetActionCreators.showActionSheet(obj2);
  }, items);
  const obj = { style: closure_6().card, children: null };
  const tmp = closure_6();
  let obj2 = { variant: "text-xs/semibold", color: "text-muted", children: null };
  const intl = projectId(1126).intl;
  obj2.children = intl.string(request(3827)["jZjP+I"]);
  const items1 = [closure_4(projectId(5086).Text, obj2), , ];
  if (null != request.note) {
    if ("" !== request.note) {
      let note = request.note;
    }
    const obj3 = { variant: "text-sm/normal", color: "text-default", children: note };
    items1[1] = closure_4(tmp9, obj3);
    const obj4 = { variant: "secondary", size: "sm", onPress: callback, text: null };
    const intl3 = tmp8(1126).intl;
    obj4.text = intl3.string(tmp4(3827).d49riY);
    items1[2] = closure_4(tmp8(5375).Button, obj4);
    obj.children = items1;
    return closure_5(tmp6, obj);
  }
  const intl2 = tmp8(1126).intl;
  note = intl2.string(tmp4(3827).XuOf5s);
  tmp6 = request(16948);
});