// discord_app/modules/game_organization_invites/native/GameOrganizationInviteList.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import GameOrganizationInviteRowDefault from "GameOrganizationInviteRow.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

const require = fn;
function keyExtractor(id) {
  return id.id;
}
const jsx = fn(21).jsx;
const createStyles = fn(5090);
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
      const cResult = users(onInvite[5]).c(13);
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
          ({ content, emptyState } = tmp5);
          if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
            const intl = tmp(tmp2[8]).intl;
            const stringResult = intl.string(tmp(tmp2[8]).t.ojoWgX);
            cResult[5] = stringResult;
            let tmp7 = stringResult;
          } else {
            tmp7 = cResult[5];
          }
          if (cResult[6] !== tmp5.emptyState) {
            const obj3 = { style: emptyState, title: tmp7 };
            const tmp11 = jsx(tmp(tmp2[9]).EmptyState, { style: emptyState, title: tmp7 });
            cResult[6] = tmp5.emptyState;
            cResult[7] = tmp11;
            let tmp9 = tmp11;
          } else {
            tmp9 = cResult[7];
          }
          if (cResult[8] === tmp6) {
            if (cResult[9] === tmp5.content) {
              if (cResult[10] === tmp9) {
                if (cResult[11] === users) {
                  let tmp12 = cResult[12];
                }
                return tmp12;
              }
            }
          }
          const obj4 = {
            contentContainerStyle: content,
            bounces: false,
            data: users,
            renderItem: tmp6,
            keyExtractor,
            keyboardShouldPersistTaps: "always",
            ListEmptyComponent: tmp9,
          };
          const tmp15 = jsx(tmp(tmp2[10]).BottomSheetFlatList, {
            contentContainerStyle: content,
            bounces: false,
            data: users,
            renderItem: tmp6,
            keyExtractor,
            keyboardShouldPersistTaps: "always",
            ListEmptyComponent: tmp9,
          });
          cResult[8] = tmp6;
          cResult[9] = tmp5.content;
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
          cResult[11] = users;
          cResult[12] = tmp15;
          tmp12 = tmp15;
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
      return jsx(users(onInvite[10]).BottomSheetFlatList, {
        contentContainerStyle: tmp.content,
        bounces: false,
        data: users,
        renderItem: callback,
        keyExtractor,
        keyboardShouldPersistTaps: "always",
        ListEmptyComponent: null,
      });
    };
