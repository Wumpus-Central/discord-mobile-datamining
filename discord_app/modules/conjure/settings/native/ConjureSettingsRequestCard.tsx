// === Module 12233: ConjureSettingsRequestCard ===

// Module 12233 (ConjureSettingsRequestCard)
import nativeDefault from "native" /* 587 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 5171 */;
import ConjureSettingsSheet from "ConjureSettingsSheet" /* 11680 */;
import noop from "module_19" /* 19 */;

const ConjureSettingsSheetDefault = ConjureSettingsSheet;

require = fn;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4945);
let obj2 = { card: { marginTop: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_8 } };
let closure_6 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { marginTop: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_8 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/settings/native/ConjureSettingsRequestCard.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureSettingsRequestCard(projectId) {
  const cResult = projectId(576).c(17);
  projectId = projectId.projectId;
  let note = projectId.request;
  const notifyAgent = projectId.notifyAgent;
  dependencyMap = tmp4;
  const tmp5 = closure_6();
  if (cResult[0] === (undefined === notifyAgent || notifyAgent)) {
    if (cResult[1] === projectId) {
      if (cResult[2] === note.keys) {
        if (cResult[3] === note.note) {
          let tmp6 = cResult[4];
        }
        const _Symbol = Symbol;
        if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
          let obj2 = { variant: "text-xs/semibold", color: "text-muted", children: null };
          const intl = tmp(1128).intl;
          obj2.children = intl.string(note(3820)["jZjP+I"]);
          const tmp11 = closure_4(tmp(5195).Text, obj2);
          cResult[5] = tmp11;
          let tmp8 = tmp11;
        } else {
          tmp8 = cResult[5];
        }
        if (cResult[6] !== note.note) {
          if (null == note.note) {
            const intl2 = tmp(1128).intl;
            let note2 = intl2.string(note(3820).XuOf5s);
            note = note.note;
            cResult[6] = note;
            cResult[7] = note2;
          }
          note2 = note.note;
        } else {
          if (cResult[8] !== cResult[7]) {
            const obj3 = { variant: "text-sm/normal", color: "text-default", children: tmp12 };
            const tmp18 = closure_4(tmp(5195).Text, obj3);
            cResult[8] = tmp12;
            cResult[9] = tmp18;
            let tmp16 = tmp18;
          } else {
            tmp16 = cResult[9];
          }
          const _Symbol2 = Symbol;
          if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
            const intl3 = tmp(1128).intl;
            const stringResult = intl3.string(note(3820).d49riY);
            cResult[10] = stringResult;
            let tmp19 = stringResult;
          } else {
            tmp19 = cResult[10];
          }
          if (cResult[11] !== tmp6) {
            const obj4 = { variant: "secondary", size: "sm", onPress: tmp6, text: tmp19 };
            const tmp24 = closure_4(tmp(5205).Button, obj4);
            cResult[11] = tmp6;
            cResult[12] = tmp24;
            let tmp22 = tmp24;
          } else {
            tmp22 = cResult[12];
          }
          if (cResult[13] === tmp5.card) {
            if (cResult[14] === tmp16) {
              if (cResult[15] === tmp22) {
                let tmp25 = cResult[16];
              }
              return tmp25;
            }
          }
          const obj5 = { style: tmp5.card, children: null };
          const items = [tmp8, tmp16, tmp22];
          obj5.children = items;
          const tmp28 = closure_5(note(11696), obj5);
          cResult[13] = tmp5.card;
          cResult[14] = tmp16;
          cResult[15] = tmp22;
          cResult[16] = tmp28;
          tmp25 = tmp28;
        }
      }
    }
  }
  const fn = function n() {
    const obj2 = { content: React4(ConjureSettingsSheetDefault, { projectId, scopeKeys: note.keys, note: note.note, notifyAgent, isPreview: true }), key: ConjureSettingsSheet.CONJURE_SETTINGS_SHEET_KEY };
    ActionSheetActionCreators.showActionSheet(obj2);
  };
  cResult[0] = undefined === notifyAgent || notifyAgent;
  cResult[1] = projectId;
  cResult[2] = note.keys;
  cResult[3] = note.note;
  cResult[4] = fn;
  tmp6 = fn;
  const obj = projectId(576);
}) : (function ConjureSettingsRequestCard(projectId) {
  projectId = projectId.projectId;
  const request = projectId.request;
  let flag = projectId.notifyAgent;
  if (flag === undefined) {
    flag = true;
  }
  const items = [flag, projectId, request];
  const callback = noop.useCallback(() => {
    const obj2 = { content: React4(ConjureSettingsSheetDefault, { projectId, scopeKeys: request.keys, note: request.note, notifyAgent: flag, isPreview: true }), key: ConjureSettingsSheet.CONJURE_SETTINGS_SHEET_KEY };
    ActionSheetActionCreators.showActionSheet(obj2);
  }, items);
  const obj = { style: closure_6().card, children: null };
  const tmp = closure_6();
  let obj2 = { variant: "text-xs/semibold", color: "text-muted", children: null };
  const intl = projectId(flag[9]).intl;
  obj2.children = intl.string(request(flag[10])["jZjP+I"]);
  const items1 = [closure_4(projectId(flag[8]).Text, obj2), , ];
  if (null != request.note) {
    if ("" !== request.note) {
      let note = request.note;
    }
    const obj3 = { variant: "text-sm/normal", color: "text-default", children: note };
    items1[1] = closure_4(tmp9, obj3);
    const obj4 = { variant: "secondary", size: "sm", onPress: callback, text: null };
    const intl3 = tmp8(tmp5[9]).intl;
    obj4.text = intl3.string(tmp4(tmp5[10]).d49riY);
    items1[2] = closure_4(tmp8(tmp5[11]).Button, obj4);
    obj.children = items1;
    return closure_5(tmp6, obj);
  }
  const intl2 = tmp8(tmp5[9]).intl;
  note = intl2.string(tmp4(tmp5[10]).XuOf5s);
  tmp6 = request(flag[12]);
});