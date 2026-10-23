// === Module 12329: ConjureSettingsRequestCard ===

// Module 12329 (ConjureSettingsRequestCard)
import nativeDefault from "native" /* 587 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 5196 */;
import ConjureSettingsSheet from "ConjureSettingsSheet" /* 11754 */;
import noop from "module_19" /* 19 */;

const ConjureSettingsSheetDefault = ConjureSettingsSheet;

require = fn;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4969);
let obj2 = { card: { marginTop: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_8 } };
let closure_6 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { marginTop: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_8 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/settings/native/ConjureSettingsRequestCard.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureSettingsRequestCard(projectId) {
  const cResult = projectId(notifyAgent[5]).c(27);
  projectId = projectId.projectId;
  let note = projectId.request;
  notifyAgent = projectId.notifyAgent;
  let tmp4 = undefined === notifyAgent;
  if (!tmp4) {
    tmp4 = notifyAgent;
  }
  notifyAgent = tmp4;
  const tmp5 = closure_6();
  const obj = projectId(notifyAgent[5]);
  const conjureSettingsAsk = projectId(notifyAgent[6]).useConjureSettingsAsk(projectId, note, projectId.askId);
  ({ done, summary, markSaved } = conjureSettingsAsk);
  if (cResult[0] === markSaved) {
    if (cResult[1] === tmp4) {
      if (cResult[2] === projectId) {
        if (cResult[3] === note.keys) {
          if (cResult[4] === note.note) {
            let tmp8 = cResult[5];
          }
          if (tmp7) {
            if (!done) {
              const _Symbol = Symbol;
              if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
                let obj2 = { variant: "text-xs/semibold", color: "text-muted", children: null };
                const intl = tmp(tmp2[10]).intl;
                obj2.children = intl.string(note(tmp2[11])["+uXDk+"]);
                const tmp13 = closure_4(tmp(tmp2[9]).Text, obj2);
                cResult[6] = tmp13;
                let tmp10 = tmp13;
              } else {
                tmp10 = cResult[6];
              }
              if (cResult[7] !== tmp5.card) {
                const obj3 = { style: tmp5.card, children: tmp10 };
                const tmp17 = closure_4(note(tmp2[12]), obj3);
                cResult[7] = tmp5.card;
                cResult[8] = tmp17;
                let tmp14 = tmp17;
              } else {
                tmp14 = cResult[8];
              }
              return tmp14;
            }
          }
          if (done) {
            const _Symbol4 = Symbol;
            if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
              const obj4 = { variant: "text-xs/semibold", color: "text-feedback-positive", children: null };
              const intl5 = tmp(tmp2[10]).intl;
              obj4.children = intl5.string(note(tmp2[11]).AxBLLy);
              const tmp45 = closure_4(tmp(tmp2[9]).Text, obj4);
              cResult[9] = tmp45;
              let tmp42 = tmp45;
            } else {
              tmp42 = cResult[9];
            }
            if (cResult[10] !== summary) {
              let tmp47 = null;
              if (summary.length > 0) {
                const obj5 = { variant: "text-sm/normal", color: "text-default", children: summary.join(" \u00B7 ") };
                tmp47 = closure_4(tmp(tmp2[9]).Text, obj5);
              }
              cResult[10] = summary;
              cResult[11] = tmp47;
              let tmp46 = tmp47;
            } else {
              tmp46 = cResult[11];
            }
            if (cResult[12] === tmp5.card) {
              if (cResult[13] === tmp46) {
                let tmp49 = cResult[14];
              }
              return tmp49;
            }
            const obj6 = { style: tmp5.card, children: null };
            const items = [tmp42, tmp46];
            obj6.children = items;
            const tmp52 = closure_5(note(tmp2[12]), obj6);
            cResult[12] = tmp5.card;
            cResult[13] = tmp46;
            cResult[14] = tmp52;
            tmp49 = tmp52;
          } else {
            const _Symbol2 = Symbol;
            if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
              const obj7 = { variant: "text-xs/semibold", color: "text-muted", children: null };
              const intl2 = tmp(tmp2[10]).intl;
              obj7.children = intl2.string(note(tmp2[11])["jZjP+I"]);
              const tmp22 = closure_4(tmp(tmp2[9]).Text, obj7);
              cResult[15] = tmp22;
              let tmp19 = tmp22;
            } else {
              tmp19 = cResult[15];
            }
            if (cResult[16] !== note.note) {
              if (null == note.note) {
                const intl3 = tmp(tmp2[10]).intl;
                let note2 = intl3.string(note(tmp2[11]).XuOf5s);
                note = note.note;
                cResult[16] = note;
                cResult[17] = note2;
              }
              note2 = note.note;
            } else {
              if (cResult[18] !== cResult[17]) {
                const obj8 = { text: tmp23, variant: "text-sm/normal", color: "text-default" };
                const tmp30 = closure_4(note(tmp2[13]), obj8);
                cResult[18] = tmp23;
                cResult[19] = tmp30;
                let tmp27 = tmp30;
              } else {
                tmp27 = cResult[19];
              }
              const _Symbol3 = Symbol;
              if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
                const intl4 = tmp(tmp2[10]).intl;
                const stringResult = intl4.string(note(tmp2[11]).d49riY);
                cResult[20] = stringResult;
                let tmp31 = stringResult;
              } else {
                tmp31 = cResult[20];
              }
              if (cResult[21] !== tmp8) {
                const obj9 = { variant: "secondary", size: "sm", onPress: tmp8, text: tmp31 };
                const tmp36 = closure_4(tmp(tmp2[14]).Button, obj9);
                cResult[21] = tmp8;
                cResult[22] = tmp36;
                let tmp34 = tmp36;
              } else {
                tmp34 = cResult[22];
              }
              if (cResult[23] === tmp5.card) {
                if (cResult[24] === tmp27) {
                  if (cResult[25] === tmp34) {
                    let tmp37 = cResult[26];
                  }
                  return tmp37;
                }
              }
              const obj10 = { style: tmp5.card, children: null };
              const items1 = [tmp19, tmp27, tmp34];
              obj10.children = items1;
              const tmp40 = closure_5(note(tmp2[12]), obj10);
              cResult[23] = tmp5.card;
              cResult[24] = tmp27;
              cResult[25] = tmp34;
              cResult[26] = tmp40;
              tmp37 = tmp40;
            }
          }
        }
      }
    }
  }
  const fn = function n() {
    const obj2 = { content: React4(ConjureSettingsSheetDefault, { projectId, scopeKeys: note.keys, note: note.note, notifyAgent, onSaved: markSaved, isPreview: true }), key: ConjureSettingsSheet.CONJURE_SETTINGS_SHEET_KEY };
    ActionSheetActionCreators.showActionSheet(obj2);
  };
  cResult[0] = markSaved;
  cResult[1] = tmp4;
  cResult[2] = projectId;
  cResult[3] = note.keys;
  cResult[4] = note.note;
  cResult[5] = fn;
  tmp8 = fn;
  const tmpResult = projectId(notifyAgent[6]);
}) : (function ConjureSettingsRequestCard(projectId) {
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
  const conjureSettingsAsk = projectId(flag[6]).useConjureSettingsAsk(projectId, request, projectId.askId);
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
      const intl = Text(obj[10]).intl;
      obj4.children = intl.string(request(obj[11])["+uXDk+"]);
      obj3.children = closure_4(Text(obj[9]).Text, obj4);
      return closure_4(request(obj[12]), obj3);
    }
  }
  const obj5 = { style: tmp.card, children: null };
  let obj2 = projectId(flag[6]);
  let Text1 = Text(obj[9]).Text;
  if (done) {
    const obj6 = { variant: "text-xs/semibold", color: "text-feedback-positive", children: null };
    const intl5 = Text(obj[10]).intl;
    obj6.children = intl5.string(tmp8(obj[11]).AxBLLy);
    const items1 = [closure_4(Text1, obj6), ];
    Text1 = null;
    if (summary.length > 0) {
      Text = Text(obj[9]).Text;
      obj = { variant: "text-sm/normal", color: "text-default", children: summary.join(" \u00B7 ") };
      Text1 = closure_4(Text, obj);
    }
    items1[1] = Text1;
    obj5.children = items1;
    let tmp14 = obj5;
  } else {
    const obj7 = { variant: "text-xs/semibold", color: "text-muted", children: null };
    const intl2 = Text(obj[10]).intl;
    obj7.children = intl2.string(tmp8(obj[11])["jZjP+I"]);
    const items2 = [closure_4(Text1, obj7), , ];
    if (null != request.note) {
      if ("" !== request.note) {
        let note = request.note;
      }
      const obj8 = { text: note, variant: "text-sm/normal", color: "text-default" };
      items2[1] = closure_4(tmp12, obj8);
      const obj9 = { variant: "secondary", size: "sm", onPress: callback, text: null };
      const intl4 = Text(obj[10]).intl;
      obj9.text = intl4.string(tmp8(obj[11]).d49riY);
      items2[2] = closure_4(Text(obj[14]).Button, obj9);
      obj5.children = items2;
      tmp14 = obj5;
    }
    const intl3 = Text(obj[10]).intl;
    note = intl3.string(tmp8(obj[11]).XuOf5s);
  }
  closure_5(request(obj[12]), tmp14);
  const tmp9 = request(obj[12]);
});