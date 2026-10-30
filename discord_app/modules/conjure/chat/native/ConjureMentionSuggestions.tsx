// discord_app/modules/conjure/chat/native/ConjureMentionSuggestions.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import _modDef3865 from "../../intl/ConjureUntranslated.messages.js";
import TableRowGroup from "../../../../design/components/TableRow/native/TableRowGroup.native.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
const jsxProd = fn(21);
({ jsx: c3, Fragment: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(5009);
let obj2 = { fileThumbnail: null };
let size = {
  width: nativeDefault.space.PX_24,
  height: nativeDefault.space.PX_24,
  borderRadius: nativeDefault.radii.xs,
};
obj2.fileThumbnail = size;
let closure_6 = createStyles.createStyles(obj2);
size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/chat/native/ConjureMentionSuggestions.tsx");

export default function ConjureMentionSuggestions(arg0) {
  ({ projectId: require, suggestions, onSelect: importDefault } = arg0);
  dependencyMap = closure_6();
  const found = suggestions.filter((kind) => "user" === kind.kind);
  const found1 = suggestions.filter((kind) => "file" === kind.kind);
  let tmp = null;
  if (0 !== suggestions.length) {
    let tmp6 = null;
    if (found.length > 0) {
      let obj = { title: null, hasIcons: true, children: null };
      const intl = util.intl;
      obj.title = intl.string(_modDef3865.Vb3sUg);
      obj.children = found.map((user) => {
        closure_0 = user;
        const obj = {
          icon: closure_1_3(projectId(fileThumbnail[8]).Avatar, {
            user: user.user,
            size: projectId(fileThumbnail[8]).AvatarSizes.XSMALL,
            guildId: "r",
          }),
          label: null,
          subLabel: null,
          onPress: null,
        };
        const obj2 = { user: user.user, size: projectId(fileThumbnail[8]).AvatarSizes.XSMALL, guildId: "r" };
        obj.label = projectId(fileThumbnail[9]).getName(user.user);
        obj.subLabel = user.user.username;
        obj.onPress = function onPress() {
          return importDefault(closure_0);
        };
        return closure_1_3(projectId(fileThumbnail[7]).TableRow, obj, user.user.id);
      });
      tmp6 = closure_3(TableRowGroup.TableRowGroup, obj);
    }
    const items = [tmp6];
    let tmp7 = null;
    if (found1.length > 0) {
      let obj2 = { title: null, hasIcons: true, children: null };
      const intl2 = util.intl;
      obj2.title = intl2.string(_modDef3865.zA5KLM);
      obj2.children = found1.map((file) => {
        projectId = file;
        const obj = {
          icon: closure_1_3(require("ConjureFileThumbnail"), {
            projectId,
            file: file.file,
            style: fileThumbnail.fileThumbnail,
          }),
          label: file.file.name,
          onPress() {
            return importDefault(closure_0);
          },
        };
        return closure_1_3(projectId(fileThumbnail[7]).TableRow, obj, file.file.id);
      });
      tmp7 = closure_3(TableRowGroup.TableRowGroup, obj2);
    }
    const obj3 = { children: null };
    items[1] = tmp7;
    obj3.children = items;
    tmp = closure_5(closure_4, obj3);
  }
  return tmp;
}
