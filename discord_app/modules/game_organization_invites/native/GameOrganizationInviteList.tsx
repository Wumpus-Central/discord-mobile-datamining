// === Module 13794: GameOrganizationInviteList ===

// Module 13794 (GameOrganizationInviteList)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 587 */;
import GameOrganizationInviteRowDefault from "GameOrganizationInviteRow" /* 13795 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let users;

function keyExtractor(id) {
  return id.id;
}
const jsx = Fragment.jsx;
let closure_5 = createStyles.createStyles((arg0) => {
  const obj = { content: { paddingBottom: arg0 + nativeDefault.space.PX_16 }, emptyState: { backgroundColor: "transparent" } };
  ({ paddingBottom: arg0 + nativeDefault.space.PX_16 });
  return obj;
});
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((users) => {
  let content;
  let emptyState;
  let first;
  let onInvite;
  const tmp = users;
  const obj = users(onInvite[5]);
  const cResult = obj.c(13);
  users = users.users;
  const getSendState = users.getSendState;
  onInvite = users.onInvite;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { isKeyboardAwareOnAndroid: false };
    cResult[0] = obj2;
    first = obj2;
  } else {
    first = cResult[0];
  }
  const tmp5 = closure_5(getSendState(onInvite[6])(first).insets.bottom);
  if (cResult[1] === getSendState) {
    if (cResult[2] === onInvite) {
      let tmp6;
      let tmp7;
      let tmp9;
      if (cResult[3] === users.length) {
        tmp6 = cResult[4];
      }
      const _Symbol = Symbol;
      ({ content, emptyState } = tmp5);
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = tmp(tmp2[8]).intl;
        const stringResult = intl.string(tmp(onInvite[8]).t.ojoWgX);
        cResult[5] = stringResult;
        tmp7 = stringResult;
      } else {
        tmp7 = cResult[5];
      }
      if (cResult[6] !== tmp5.emptyState) {
        const tmp11 = jsx(tmp(onInvite[9]).EmptyState, { style: emptyState, title: tmp7 });
        cResult[6] = tmp5.emptyState;
        cResult[7] = tmp11;
        tmp9 = tmp11;
      } else {
        tmp9 = cResult[7];
      }
      if (cResult[8] === tmp6) {
        if (cResult[9] === tmp5.content) {
          if (cResult[10] === tmp9) {
            let tmp12;
            if (cResult[11] === users) {
              tmp12 = cResult[12];
            }
            return tmp12;
          }
        }
      }
      const tmp15 = jsx(tmp(onInvite[10]).BottomSheetFlatList, { contentContainerStyle: content, bounces: false, data: users, renderItem: tmp6, keyExtractor, keyboardShouldPersistTaps: "always", ListEmptyComponent: tmp9 });
      cResult[8] = tmp6;
      cResult[9] = tmp5.content;
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
}) : ((users) => {
  let intl;
  users = users.users;
  const getSendState = users.getSendState;
  const onInvite = users.onInvite;
  const tmp = closure_5(getSendState(onInvite[6])({ isKeyboardAwareOnAndroid: false }).insets.bottom);
  const items = [users.length, getSendState, onInvite];
  const callback = react.useCallback((arg0) => {
    let index;
    let item;
    ({ item, index } = arg0);
    GameOrganizationInviteRowDefault;
    return <tmp user={item} start={0 === index} end={index === users.length - 1} sendState={getSendState(item.id)} onInvite={onInvite} />;
  }, items);
  const BottomSheetFlatList = users(onInvite[10]).BottomSheetFlatList;
  ({ style: tmp.emptyState, title: intl.string(users(onInvite[8]).t.ojoWgX) });
  const EmptyState = users(onInvite[9]).EmptyState;
  intl = users(onInvite[8]).intl;
  return <BottomSheetFlatList contentContainerStyle={tmp.content} bounces={false} data={users} renderItem={callback} keyExtractor={keyExtractor} keyboardShouldPersistTaps="always" ListEmptyComponent={null} />;
});
const result = size.fileFinishedImporting("modules/game_organization_invites/native/GameOrganizationInviteList.tsx");

export default tmp2;