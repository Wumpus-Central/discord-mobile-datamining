// discord_app/modules/conjure/publish/native/ConjurePublishNoticeLine.tsx
import c from "../../../../../_runtime/00576_c.js";
import util from "../../../../intl/index.native.tsx";
import ActionSheetActionCreators from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import useConjurePublishedServerNameDefault from "../useConjurePublishedServerName.tsx";
import conjurePublishCard from "../conjurePublishCard.tsx";
import useConjurePublishedAppNameDefault from "../useConjurePublishedAppName.tsx";
import useConjureAutomodSettingsLink from "../useConjureAutomodSettingsLink.tsx";
import useConjurePatchNotesLink from "../useConjurePatchNotesLink.tsx";
import ConjurePublishNotesSheet from "ConjurePublishNotesSheet.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const useConjureAutomodSettingsLinkDefault = useConjureAutomodSettingsLink;
const useConjurePatchNotesLinkDefault = useConjurePatchNotesLink;
const ConjurePublishNotesSheetDefault = ConjurePublishNotesSheet;

const _modDef3864 = v35VEu5(3864);
require = fn;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4, Fragment: hasOwnProperty } = jsxProd);
fn(558);
const ReactCompilerGating = fn(558);
let closure_6 = ReactCompilerGating.isReactCompilerEnabled()
  ? function PatchNotesLink(projectId) {
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
          intl = intl(1125).intl;
          v35VEu5 = _modDef3864["35VEu5"];
          obj = {
            sentHook(children, arg1) {
              return React3(
                Text_Text.Text,
                {
                  variant: "text-md/normal",
                  color: "text-muted",
                  accessibilityRole: "link",
                  onPress() {
                    return projectId(dependencyMap[10]).openConjureSentPatchNotes(sent.sent);
                  },
                  children,
                },
                arg1,
              );
            },
          };
          let formatResult = intl.format(v35VEu5, obj);
        } else {
          const intl2 = intl(1125).intl;
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
            },
          };
          formatResult = intl2.format(_modDef3864["6/zJpD"], obj4);
        }
        cResult[0] = tmp3;
        cResult[1] = projectId;
        cResult[2] = formatResult;
      }
      let obj2 = projectId(576);
    }
  : function PatchNotesLink(projectId) {
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
          const intl2 = projectId(1125).intl;
          let obj2 = {
            sentHook(children, arg1) {
              return React3(
                Text_Text.Text,
                {
                  variant: "text-md/normal",
                  color: "text-muted",
                  accessibilityRole: "link",
                  onPress() {
                    return projectId(dependencyMap[10]).openConjureSentPatchNotes(sent.sent);
                  },
                  children,
                },
                arg1,
              );
            },
          };
          let formatResult = intl2.format(_modDef3864["35VEu5"], obj2);
        } else {
          const intl = projectId(1125).intl;
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
            },
          };
          formatResult = intl.format(_modDef3864["6/zJpD"], obj3);
        }
        obj = { children: null };
        items = [" ", formatResult];
        obj.children = items;
        closure_4(closure_5, obj);
      }
    };
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/publish/native/ConjurePublishNoticeLine.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function ConjurePublishNoticeLine(arg0) {
      const cResult = c.c(13);
      ({ projectId, notice } = arg0);
      const tmp4 = useConjurePublishedAppNameDefault(projectId);
      const tmp5 = useConjurePublishedServerNameDefault(projectId);
      guildId = useConjureAutomodSettingsLinkDefault(projectId);
      if (cResult[0] === guildId.automod) {
        if (cResult[1] === tmp4) {
          if (cResult[2] === notice) {
            if (cResult[3] === tmp5) {
              let tmp6 = cResult[4];
            }
            if (cResult[5] === guildId.automod) {
              if (cResult[6] === guildId.guildId) {
                if (cResult[7] === notice) {
                  if (cResult[8] === projectId) {
                    if (cResult[10] === tmp6) {
                      if (cResult[11] === tmp9) {
                        let tmp16 = cResult[12];
                      }
                      return tmp16;
                    }
                    const obj2 = { variant: "text-md/normal", color: "text-default", children: null };
                    const items = [tmp6, cResult[9]];
                    obj2.children = items;
                    const tmp18 = React4(Text_Text.Text, obj2);
                    cResult[10] = tmp6;
                    cResult[11] = cResult[9];
                    cResult[12] = tmp18;
                    tmp16 = tmp18;
                  }
                }
              }
            }
            if (null != guildId.guildId) {
              const obj3 = { guildId: guildId.guildId, update: notice.update };
              let tmp11 = React3(useConjureAutomodSettingsLink.ConjureAutomodSettingsLink, obj3);
            } else {
              tmp11 = null;
              if (!guildId.automod) {
                tmp11 = null;
                if (notice.update) {
                  tmp11 = null;
                  if (null != notice.published_revision) {
                    const obj4 = { projectId, notice };
                    tmp11 = React3(closure_6, obj4);
                  }
                }
              }
            }
            ({ automod: tmp3[5], guildId } = guildId);
            cResult[6] = guildId;
            cResult[7] = notice;
            cResult[8] = projectId;
            cResult[9] = tmp11;
          }
        }
      }
      const intl = util.intl;
      const obj5 = { name: tmp4, server: null };
      let str = tmp5;
      const tmpResult = conjurePublishCard;
      if (tmp5 == null) {
        str = "";
      }
      obj5.server = str;
      const formatResult = intl.format(conjurePublishCard.publishNoticeMessage(notice, tmp5, guildId.automod), obj5);
      cResult[0] = guildId.automod;
      cResult[1] = tmp4;
      cResult[2] = notice;
      cResult[3] = tmp5;
      cResult[4] = formatResult;
      tmp6 = formatResult;
      const publishNoticeMessageResult = conjurePublishCard.publishNoticeMessage(notice, tmp5, guildId.automod);
    }
  : function ConjurePublishNoticeLine(arg0) {
      ({ projectId, notice } = arg0);
      let str = useConjurePublishedServerNameDefault(projectId);
      const tmp3 = useConjureAutomodSettingsLinkDefault(projectId);
      const intl = util.intl;
      const tmp2 = useConjurePublishedAppNameDefault(projectId);
      const obj2 = { name: tmp2, server: null };
      if (str == null) {
        str = "";
      }
      obj2.server = str;
      const children = [intl.format(conjurePublishCard.publishNoticeMessage(notice, str, tmp3.automod), obj2)];
      if (null != tmp3.guildId) {
        const obj3 = { guildId: tmp3.guildId, update: notice.update };
        let tmp7 = React3(useConjureAutomodSettingsLink.ConjureAutomodSettingsLink, obj3);
      } else {
        tmp7 = null;
        if (!tmp3.automod) {
          tmp7 = null;
          if (notice.update) {
            tmp7 = null;
            if (null != notice.published_revision) {
              const obj4 = { projectId, notice };
              tmp7 = React3(closure_6, obj4);
            }
          }
        }
      }
      children[1] = tmp7;
      return React4(Text_Text.Text, { variant: "text-md/normal", color: "text-default", children });
    };
