// discord_app/modules/conjure/chat/native/ConjureMentionSuggestions.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import _modDef3863 from "../../intl/ConjureUntranslated.messages.js";
import TableRowGroup from "../../../../design/components/TableRow/native/TableRowGroup.native.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
const jsxProd = fn(21);
({ jsx: c3, Fragment: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(5004);
let obj2 = { fileThumbnail: null };
let size = {
  width: nativeDefault.space.PX_24,
  height: nativeDefault.space.PX_24,
  borderRadius: nativeDefault.radii.xs,
};
obj2.fileThumbnail = size;
let closure_6 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/chat/native/ConjureMentionSuggestions.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function ConjureMentionSuggestions(projectId) {
      const cResult = projectId(576).c(12);
      projectId = projectId.projectId;
      ({ suggestions, onSelect } = projectId);
      const tmp4 = closure_6();
      dependencyMap = tmp4;
      if (cResult[0] === onSelect) {
        if (cResult[1] === projectId) {
          if (cResult[2] === tmp4) {
            if (cResult[3] === suggestions) {
              let tmp5 = cResult[4];
              let tmp6 = cResult[5];
              let tmp7 = cResult[6];
            }
            const _Symbol = Symbol;
            if (tmp7 !== Symbol.for("react.early_return_sentinel")) {
              return tmp7;
            } else {
              if (cResult[9] === tmp5) {
              }
              let obj2 = { children: null };
              const items = [tmp5, tmp6];
              obj2.children = items;
              const tmp22 = closure_5(closure_4, obj2);
              cResult[9] = tmp5;
              cResult[10] = tmp6;
              cResult[11] = tmp22;
            }
          }
        }
      }
      let obj = projectId(576);
      if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function j(kind) {
          return "user" === kind.kind;
        };
        cResult[7] = fn;
        let tmp9 = fn;
      } else {
        tmp9 = cResult[7];
      }
      const found = suggestions.filter(tmp9);
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        class I {
          constructor(arg0) {
            return "file" === projectId.kind;
          }
        }
        cResult[8] = I;
      } else {
        class I {
          constructor(arg0) {
            return "file" === projectId.kind;
          }
        }
      }
      const found1 = suggestions.filter(I);
      let tmp11 = null;
      let tmp12;
      let tmp13;
      if (0 !== suggestions.length) {
        class I {
          constructor(arg0) {
            return "file" === projectId.kind;
          }
        }
        if (found.length > 0) {
          class I {
            constructor(arg0) {
              return "file" === projectId.kind;
            }
          }
          const obj3 = { title: null, hasIcons: true, children: null };
          const intl = tmp(1125).intl;
          obj3.title = intl.string(onSelect(3863).Vb3sUg);
          obj3.children = found.map((user) => {
            closure_0 = user;
            const obj = {
              icon: closure_1_3(projectId(fileThumbnail[10]).Avatar, {
                user: user.user,
                size: projectId(fileThumbnail[10]).AvatarSizes.XSMALL,
                guildId: "r",
              }),
              label: null,
              subLabel: null,
              onPress: null,
            };
            const obj2 = { user: user.user, size: projectId(fileThumbnail[10]).AvatarSizes.XSMALL, guildId: "r" };
            obj.label = projectId(fileThumbnail[11]).getName(user.user);
            obj.subLabel = user.user.username;
            obj.onPress = function onPress() {
              return onSelect(closure_0);
            };
            return closure_1_3(projectId(fileThumbnail[9]).TableRow, obj, user.user.id);
          });
          const tmp15 = closure_3(tmp(7023).TableRowGroup, obj3);
        }
        let tmp16 = null;
        if (found1.length > 0) {
          class I {
            constructor(arg0) {
              return "file" === projectId.kind;
            }
          }
          const obj4 = { title: null, hasIcons: true, children: null };
          const intl2 = tmp(1125).intl;
          obj4.title = intl2.string(onSelect(3863).zA5KLM);
          obj4.children = found1.map((file) => {
            projectId = file;
            const obj = {
              icon: closure_1_3(onSelect(fileThumbnail[12]), {
                projectId,
                file: file.file,
                style: fileThumbnail.fileThumbnail,
              }),
              label: file.file.name,
              onPress() {
                return onSelect(closure_0);
              },
            };
            return closure_1_3(projectId(fileThumbnail[9]).TableRow, obj, file.file.id);
          });
          tmp16 = closure_3(tmp(7023).TableRowGroup, obj4);
        }
        tmp12 = tmp16;
        tmp11 = forResult;
        tmp13 = tmp15;
      }
      cResult[0] = onSelect;
      cResult[1] = projectId;
      cResult[2] = tmp4;
      cResult[3] = suggestions;
      cResult[4] = tmp13;
      cResult[5] = tmp12;
      cResult[6] = tmp11;
      tmp7 = tmp11;
      tmp6 = tmp12;
      tmp5 = tmp13;
      forResult = Symbol.for("react.early_return_sentinel");
    }
  : function ConjureMentionSuggestions(arg0) {
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
          obj.title = intl.string(_modDef3863.Vb3sUg);
          obj.children = found.map((user) => {
            closure_0 = user;
            const obj = {
              icon: closure_1_3(projectId(fileThumbnail[10]).Avatar, {
                user: user.user,
                size: projectId(fileThumbnail[10]).AvatarSizes.XSMALL,
                guildId: "r",
              }),
              label: null,
              subLabel: null,
              onPress: null,
            };
            const obj2 = { user: user.user, size: projectId(fileThumbnail[10]).AvatarSizes.XSMALL, guildId: "r" };
            obj.label = projectId(fileThumbnail[11]).getName(user.user);
            obj.subLabel = user.user.username;
            obj.onPress = function onPress() {
              return importDefault(closure_0);
            };
            return closure_1_3(projectId(fileThumbnail[9]).TableRow, obj, user.user.id);
          });
          tmp6 = closure_3(TableRowGroup.TableRowGroup, obj);
        }
        const items = [tmp6];
        let tmp7 = null;
        if (found1.length > 0) {
          let obj2 = { title: null, hasIcons: true, children: null };
          const intl2 = util.intl;
          obj2.title = intl2.string(_modDef3863.zA5KLM);
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
            return closure_1_3(projectId(fileThumbnail[9]).TableRow, obj, file.file.id);
          });
          tmp7 = closure_3(TableRowGroup.TableRowGroup, obj2);
        }
        const obj3 = { children: null };
        items[1] = tmp7;
        obj3.children = items;
        tmp = closure_5(closure_4, obj3);
      }
      return tmp;
    };
