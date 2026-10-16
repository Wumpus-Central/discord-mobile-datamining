// discord_app/modules/conjure/chat/native/ConjureMentionSuggestions.tsx
import util from "../../../../intl/index.native.tsx";
import native from "../../../../design/void/native.tsx";
import _modDef3865 from "../../intl/ConjureUntranslated.messages.js";
import UserUtils from "../../../../utils/UserUtils.tsx";
import TableRow from "../../../../design/components/TableRow/native/TableRow.native.tsx";
import TableRowGroup from "../../../../design/components/TableRow/native/TableRowGroup.native.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/chat/native/ConjureMentionSuggestions.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function ConjureMentionSuggestions(arg0) {
      const cResult = onSelect(576).c(8);
      ({ users, onSelect } = arg0);
      if (0 === users.length) {
        return null;
      } else {
        const _Symbol = Symbol;
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = onSelect(1128).intl;
          const stringResult = intl.string(_modDef3865.Vb3sUg);
          cResult[0] = stringResult;
          let first = stringResult;
        } else {
          first = cResult[0];
        }
        if (cResult[1] === onSelect) {
          if (cResult[2] === users) {
            if (cResult[6] !== cResult[3]) {
              let obj2 = { title: first, hasIcons: true, children: tmp7 };
              const tmp13 = jsx(onSelect(6487).TableRowGroup, { title: first, hasIcons: true, children: tmp7 });
              cResult[6] = tmp7;
              cResult[7] = tmp13;
              let tmp11 = tmp13;
            } else {
              tmp11 = cResult[7];
            }
            return tmp11;
          }
        }
        if (cResult[4] !== onSelect) {
          const fn = function l(user) {
            closure_0 = user;
            const obj = {
              icon: jsx(onSelect(1202).Avatar, { user, size: onSelect(1202).AvatarSizes.XSMALL, guildId: "r" }),
              label: null,
              subLabel: null,
              onPress: null,
            };
            const obj2 = { user, size: onSelect(1202).AvatarSizes.XSMALL, guildId: "r" };
            obj.label = onSelect(5021).getName(user);
            obj.subLabel = user.username;
            obj.onPress = function onPress() {
              return onSelect(closure_0);
            };
            return jsx(
              onSelect(6402).TableRow,
              {
                icon: jsx(onSelect(1202).Avatar, { user, size: onSelect(1202).AvatarSizes.XSMALL, guildId: "r" }),
                label: null,
                subLabel: null,
                onPress: null,
              },
              user.id,
            );
          };
          cResult[4] = onSelect;
          cResult[5] = fn;
          let tmp8 = fn;
        } else {
          tmp8 = cResult[5];
        }
        const mapped = users.map(tmp8);
        cResult[1] = onSelect;
        cResult[2] = users;
        cResult[3] = mapped;
      }
      let obj = onSelect(576);
    }
  : function ConjureMentionSuggestions(arg0) {
      ({ users, onSelect: require } = arg0);
      let tmp = null;
      if (0 !== users.length) {
        let obj = { title: null, hasIcons: true, children: null };
        const intl = util.intl;
        obj.title = intl.string(_modDef3865.Vb3sUg);
        obj.children = users.map((user) => {
          closure_0 = user;
          const obj = {
            icon: jsx(native.Avatar, { user, size: native.AvatarSizes.XSMALL, guildId: "r" }),
            label: null,
            subLabel: null,
            onPress: null,
          };
          const obj2 = { user, size: native.AvatarSizes.XSMALL, guildId: "r" };
          obj.label = UserUtils.getName(user);
          obj.subLabel = user.username;
          obj.onPress = function onPress() {
            return require(closure_0);
          };
          return jsx(
            TableRow.TableRow,
            {
              icon: jsx(native.Avatar, { user, size: native.AvatarSizes.XSMALL, guildId: "r" }),
              label: null,
              subLabel: null,
              onPress: null,
            },
            user.id,
          );
        });
        tmp = jsx(TableRowGroup.TableRowGroup, { title: null, hasIcons: true, children: null });
      }
      return tmp;
    };
