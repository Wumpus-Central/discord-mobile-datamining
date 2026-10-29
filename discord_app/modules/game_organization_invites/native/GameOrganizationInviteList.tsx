// discord_app/modules/game_organization_invites/native/GameOrganizationInviteList.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import GameOrganizationInviteRowDefault from "GameOrganizationInviteRow.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

const require = fn;
function keyExtractor(id) {
  return id.id;
}
const jsx = fn(21).jsx;
const createStyles = fn(5005);
let closure_5 = createStyles.createStyles((arg0) => {
  const obj = {
    content: { paddingBottom: arg0 + nativeDefault.space.PX_16 },
    emptyState: { backgroundColor: "transparent" },
  };
  return obj;
});
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_organization_invites/native/GameOrganizationInviteList.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function GameOrganizationInviteList(users) {
      const cResult = users(onInvite[5]).c(14);
      users = users.users;
      const getSendState = users.getSendState;
      onInvite = users.onInvite;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { isKeyboardAwareOnAndroid: false };
        cResult[0] = obj2;
        let first = obj2;
      } else {
        first = cResult[0];
      }
      const tmp5 = closure_5(getSendState(onInvite[6])(first).insets.bottom);
      if (cResult[1] === getSendState) {
        if (cResult[2] === onInvite) {
          if (cResult[3] === users.length) {
            let tmp6 = cResult[4];
          }
          const _Symbol = Symbol;
          if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
            const obj3 = { disabled: true };
            cResult[5] = obj3;
            let tmp7 = obj3;
          } else {
            tmp7 = cResult[5];
          }
          const _Symbol2 = Symbol;
          ({ content, emptyState } = tmp5);
          if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
            const intl = tmp(tmp2[8]).intl;
            const stringResult = intl.string(tmp(tmp2[8]).t.ojoWgX);
            cResult[6] = stringResult;
            let tmp8 = stringResult;
          } else {
            tmp8 = cResult[6];
          }
          if (cResult[7] !== tmp5.emptyState) {
            const obj4 = { style: emptyState, title: tmp8 };
            const tmp12 = jsx(tmp(tmp2[9]).EmptyState, { style: emptyState, title: tmp8 });
            cResult[7] = tmp5.emptyState;
            cResult[8] = tmp12;
            let tmp10 = tmp12;
          } else {
            tmp10 = cResult[8];
          }
          if (cResult[9] === tmp6) {
            if (cResult[10] === tmp5.content) {
              if (cResult[11] === tmp10) {
                if (cResult[12] === users) {
                  let tmp13 = cResult[13];
                }
                return tmp13;
              }
            }
          }
          const obj5 = {
            maintainVisibleContentPosition: tmp7,
            contentContainerStyle: content,
            bounces: false,
            data: users,
            renderItem: tmp6,
            keyExtractor,
            keyboardShouldPersistTaps: "always",
            ListEmptyComponent: tmp10,
          };
          const tmp16 = jsx(tmp(tmp2[10]).BottomSheetFlashList, {
            maintainVisibleContentPosition: tmp7,
            contentContainerStyle: content,
            bounces: false,
            data: users,
            renderItem: tmp6,
            keyExtractor,
            keyboardShouldPersistTaps: "always",
            ListEmptyComponent: tmp10,
          });
          class S {
            constructor(arg0) {
              ({ item, index } = users);
              obj = {
                user: item,
                start: 0 === index,
                end: index === users.length - 1,
                sendState: null,
                onInvite: null,
              };
              tmp = closure_1(closure_2[7]);
              obj.sendState = getSendState(item.id);
              obj.onInvite = onInvite;
              return jsx(tmp, obj);
            }
          }
          cResult[10] = tmp5.content;
          cResult[11] = tmp10;
          cResult[12] = users;
          cResult[13] = tmp16;
          tmp13 = tmp16;
        }
      }
      class S {
        constructor(arg0) {
          ({ item, index } = users);
          obj = { user: item, start: 0 === index, end: index === users.length - 1, sendState: null, onInvite: null };
          tmp = closure_1(closure_2[7]);
          obj.sendState = getSendState(item.id);
          obj.onInvite = onInvite;
          return jsx(tmp, obj);
        }
      }
      cResult[1] = getSendState;
      cResult[2] = onInvite;
      cResult[3] = users.length;
      cResult[4] = S;
      tmp6 = S;
      let obj = users(onInvite[5]);
    }
  : function GameOrganizationInviteList(users) {
      users = users.users;
      const getSendState = users.getSendState;
      const onInvite = users.onInvite;
      const tmp = closure_5(getSendState(onInvite[6])({ isKeyboardAwareOnAndroid: false }).insets.bottom);
      const items = [users.length, getSendState, onInvite];
      const callback = noop.useCallback((arg0) => {
        ({ item, index } = arg0);
        const obj = {
          user: item,
          start: 0 === index,
          end: index === users.length - 1,
          sendState: getSendState(item.id),
          onInvite,
        };
        return jsx(GameOrganizationInviteRowDefault, {
          user: item,
          start: 0 === index,
          end: index === users.length - 1,
          sendState: getSendState(item.id),
          onInvite,
        });
      }, items);
      let obj = {
        maintainVisibleContentPosition: { disabled: true },
        contentContainerStyle: tmp.content,
        bounces: false,
        data: users,
        renderItem: callback,
        keyExtractor,
        keyboardShouldPersistTaps: "always",
        ListEmptyComponent: null,
      };
      const obj2 = { style: tmp.emptyState, title: null };
      const intl = users(onInvite[8]).intl;
      obj2.title = intl.string(users(onInvite[8]).t.ojoWgX);
      obj.ListEmptyComponent = jsx(users(onInvite[9]).EmptyState, { style: tmp.emptyState, title: null });
      return jsx(users(onInvite[10]).BottomSheetFlashList, {
        maintainVisibleContentPosition: { disabled: true },
        contentContainerStyle: tmp.content,
        bounces: false,
        data: users,
        renderItem: callback,
        keyExtractor,
        keyboardShouldPersistTaps: "always",
        ListEmptyComponent: null,
      });
    };
