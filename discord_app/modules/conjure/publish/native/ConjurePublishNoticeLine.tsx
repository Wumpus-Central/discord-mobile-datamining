// discord_app/modules/conjure/publish/native/ConjurePublishNoticeLine.tsx
import ActionSheetActionCreators from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import transitionToGuild from "../../../routing/transitionToGuild.native.tsx";
import useConjurePublishedAppNameDefault from "../useConjurePublishedAppName.tsx";
import useConjurePublishedServerNameDefault from "../useConjurePublishedServerName.tsx";
import useConjureAutomodSettingsLinkDefault from "../useConjureAutomodSettingsLink.tsx";
import useConjurePatchNotesLink from "../useConjurePatchNotesLink.tsx";
import ConjurePublishNotesSheet from "ConjurePublishNotesSheet.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;
const useConjurePatchNotesLinkDefault = useConjurePatchNotesLink;
const ConjurePublishNotesSheetDefault = ConjurePublishNotesSheet;

const _modDef3868 = items(3868);
require = fn;
function PatchNotesLink(projectId) {
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
      const intl2 = projectId(1113).intl;
      let obj2 = {
        sentHook(children, arg1) {
          return React3(
            Text_Text.Text,
            {
              variant: "text-md/normal",
              color: "text-muted",
              accessibilityRole: "link",
              onPress() {
                return projectId(dependencyMap[9]).openConjureSentPatchNotes(sent.sent);
              },
              children,
            },
            arg1,
          );
        },
      };
      let formatResult = intl2.format(_modDef3868["35VEu5"], obj2);
    } else {
      const intl = projectId(1113).intl;
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
      formatResult = intl.format(_modDef3868["6/zJpD"], obj3);
    }
    obj = { children: null };
    items = [" ", formatResult];
    obj.children = items;
    closure_4(closure_5, obj);
  }
}
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4, Fragment: hasOwnProperty } = jsxProd);
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/publish/native/ConjurePublishNoticeLine.tsx");

export default function ConjurePublishNoticeLine(arg0) {
  ({ projectId, notice } = arg0);
  const tmp3 = useConjurePublishedServerNameDefault(projectId);
  _require = tmp3;
  const tmp4 = useConjureAutomodSettingsLinkDefault(projectId);
  const intl = require("util").intl;
  const tmp2 = useConjurePublishedAppNameDefault(projectId);
  const tmp6 = _require;
  let name;
  if (tmp3 != null) {
    name = tmp3.name;
  }
  if (name == null) {
    name = null;
  }
  const obj2 = { name: tmp2, server: null, onOpenServer: null };
  let str;
  let obj = require("conjurePublishCard");
  if (tmp3 != null) {
    str = tmp3.name;
  }
  if (str == null) {
    str = "";
  }
  obj2.server = str;
  obj2.onOpenServer = function onOpenServer() {
    if (null != closure_0) {
      transitionToGuild.transitionToGuild(tmp.guildId);
    }
  };
  const children = [intl.format(require("conjurePublishCard").publishNoticeMessage(notice, name, tmp4.automod), obj2)];
  if (null != tmp4.guildId) {
    const obj3 = { guildId: tmp4.guildId, update: notice.update };
    let tmp9 = closure_3(tmp6(12658).ConjureAutomodSettingsLink, obj3);
  } else {
    tmp9 = null;
    if (!tmp4.automod) {
      tmp9 = null;
      if (notice.update) {
        tmp9 = null;
        if (null != notice.published_revision) {
          const obj4 = { projectId, notice };
          tmp9 = closure_3(PatchNotesLink, obj4);
        }
      }
    }
  }
  children[1] = tmp9;
  return closure_4(require("Text/Text").Text, { variant: "text-md/normal", color: "text-default", children });
}
