// === Module 12332: ConjurePublishNoticeLine ===

// Module 12332 (ConjurePublishNoticeLine)
import c from "c" /* 576 */;
import util from "util" /* 1128 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 5196 */;
import Text_Text from "Text/Text" /* 5220 */;
import conjurePublishCard from "conjurePublishCard" /* 12259 */;
import useConjurePublishedAppNameDefault from "useConjurePublishedAppName" /* 12326 */;
import useConjurePublishedServerNameDefault from "useConjurePublishedServerName" /* 12333 */;
import useConjurePatchNotesLink from "useConjurePatchNotesLink" /* 12334 */;
import ConjurePublishNotesSheet from "ConjurePublishNotesSheet" /* 12335 */;
import noop from "module_19" /* 19 */;

const useConjurePatchNotesLinkDefault = useConjurePatchNotesLink;
const ConjurePublishNotesSheetDefault = ConjurePublishNotesSheet;

const _modDef3830 = v35VEu5(3830);
require = fn;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4, Fragment: hasOwnProperty } = jsxProd);
fn(558);
const ReactCompilerGating = fn(558);
let closure_6 = ReactCompilerGating.isReactCompilerEnabled() ? (function PatchNotesLink(projectId) {
  let intl = projectId;
  let obj = dependencyMap;
  const cResult = projectId(576).c(5);
  projectId = projectId.projectId;
  let v35VEu5 = importDefault;
  const tmp3 = useConjurePatchNotesLinkDefault(projectId, projectId.notice);
  importDefault = tmp3;
  if (null == tmp3) {
    return null;
  } else {
    if (cResult[0] === tmp3) {
      if (cResult[1] === projectId) {
        if (cResult[3] !== cResult[2]) {
          let obj3 = { children: null };
          const items = [" ", tmp4];
          obj3.children = items;
          const tmp10 = closure_4(closure_5, obj3);
          cResult[3] = tmp4;
          cResult[4] = tmp10;
        }
      }
    }
    if ("sent" === tmp3.state) {
      intl = intl(1128).intl;
      v35VEu5 = _modDef3830["35VEu5"];
      obj = {
        sentHook(children, arg1) {
              return React3(Text_Text.Text, {
                variant: "text-md/normal",
                color: "text-muted",
                accessibilityRole: "link",
                onPress() {
                  return projectId(dependencyMap[9]).openConjureSentPatchNotes(sent.sent);
                },
                children
              }, arg1);
            }
      };
      let formatResult = intl.format(v35VEu5, obj);
    } else {
      const intl2 = intl(1128).intl;
      const obj4 = {
        onSend() {
              const result = useConjurePatchNotesLink.conjurePatchNotesEditorProps(projectId, closure_1);
              if (null != result) {
                const obj2 = { content: null, key: null };
                const obj3 = {};
                const tmpResult = ActionSheetActionCreators;
                const merged = Object.assign(result);
                obj2.content = React3(ConjurePublishNotesSheetDefault, obj3);
                obj2.key = ConjurePublishNotesSheet.CONJURE_PUBLISH_NOTES_SHEET_KEY;
                tmpResult.showActionSheet(obj2);
              }
            }
      };
      formatResult = intl2.format(_modDef3830["6/zJpD"], obj4);
    }
    cResult[0] = tmp3;
    cResult[1] = projectId;
    cResult[2] = formatResult;
  }
  let obj2 = projectId(576);
}) : (function PatchNotesLink(projectId) {
  projectId = projectId.projectId;
  importDefault = undefined;
  let items = importDefault;
  let obj = dependencyMap;
  const tmp = useConjurePatchNotesLinkDefault(projectId, projectId.notice);
  importDefault = tmp;
  if (null == tmp) {
    return null;
  } else {
    if ("sent" === tmp.state) {
      const intl2 = projectId(1128).intl;
      let obj2 = {
        sentHook(children, arg1) {
              return React3(Text_Text.Text, {
                variant: "text-md/normal",
                color: "text-muted",
                accessibilityRole: "link",
                onPress() {
                  return projectId(dependencyMap[9]).openConjureSentPatchNotes(sent.sent);
                },
                children
              }, arg1);
            }
      };
      let formatResult = intl2.format(_modDef3830["35VEu5"], obj2);
    } else {
      const intl = projectId(1128).intl;
      let obj3 = {
        onSend() {
              const result = useConjurePatchNotesLink.conjurePatchNotesEditorProps(projectId, closure_1);
              if (null != result) {
                const obj2 = { content: null, key: null };
                const obj3 = {};
                const tmpResult = ActionSheetActionCreators;
                const merged = Object.assign(result);
                obj2.content = React3(ConjurePublishNotesSheetDefault, obj3);
                obj2.key = ConjurePublishNotesSheet.CONJURE_PUBLISH_NOTES_SHEET_KEY;
                tmpResult.showActionSheet(obj2);
              }
            }
      };
      formatResult = intl.format(_modDef3830["6/zJpD"], obj3);
    }
    obj = { children: null };
    items = [" ", formatResult];
    obj.children = items;
    closure_4(closure_5, obj);
  }
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/publish/native/ConjurePublishNoticeLine.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ConjurePublishNoticeLine(arg0) {
  const cResult = c.c(10);
  ({ projectId, notice } = arg0);
  const tmp4 = useConjurePublishedAppNameDefault(projectId);
  const tmp5 = useConjurePublishedServerNameDefault(projectId);
  if (cResult[0] === tmp4) {
    if (cResult[1] === notice) {
      if (cResult[2] === tmp5) {
        let tmp6 = cResult[3];
      }
      if (cResult[4] === notice) {
        if (cResult[5] === projectId) {
          let tmp9 = cResult[6];
        }
        if (cResult[7] === tmp6) {
          if (cResult[8] === tmp9) {
            let tmp14 = cResult[9];
          }
          return tmp14;
        }
        const obj2 = { variant: "text-md/normal", color: "text-default", children: null };
        const items = [tmp6, tmp9];
        obj2.children = items;
        const tmp16 = React4(Text_Text.Text, obj2);
        cResult[7] = tmp6;
        cResult[8] = tmp9;
        cResult[9] = tmp16;
        tmp14 = tmp16;
      }
      let tmp11 = null;
      if (notice.update) {
        tmp11 = null;
        if (null != notice.published_revision) {
          const obj3 = { projectId, notice };
          tmp11 = React3(closure_6, obj3);
        }
      }
      cResult[4] = notice;
      cResult[5] = projectId;
      cResult[6] = tmp11;
      tmp9 = tmp11;
    }
  }
  const intl = util.intl;
  const obj4 = { name: tmp4, server: null };
  let str = tmp5;
  const tmpResult = conjurePublishCard;
  if (tmp5 == null) {
    str = "";
  }
  obj4.server = str;
  const formatResult = intl.format(conjurePublishCard.publishNoticeMessage(notice, tmp5), obj4);
  cResult[0] = tmp4;
  cResult[1] = notice;
  cResult[2] = tmp5;
  cResult[3] = formatResult;
  tmp6 = formatResult;
  const publishNoticeMessageResult = conjurePublishCard.publishNoticeMessage(notice, tmp5);
}) : (function ConjurePublishNoticeLine(arg0) {
  ({ projectId, notice } = arg0);
  let str = useConjurePublishedServerNameDefault(projectId);
  const intl = util.intl;
  const tmp = useConjurePublishedAppNameDefault(projectId);
  const obj2 = { name: tmp, server: null };
  if (str == null) {
    str = "";
  }
  obj2.server = str;
  const children = [intl.format(conjurePublishCard.publishNoticeMessage(notice, str), obj2), ];
  let tmp4 = null;
  if (notice.update) {
    tmp4 = null;
    if (null != notice.published_revision) {
      const obj3 = { projectId, notice };
      tmp4 = React3(closure_6, obj3);
    }
  }
  children[1] = tmp4;
  return React4(Text_Text.Text, { variant: "text-md/normal", color: "text-default", children });
});