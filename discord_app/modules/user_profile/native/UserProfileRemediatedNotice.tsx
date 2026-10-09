// === Module 13346: UserProfileRemediatedNotice ===

// Module 13346 (UserProfileRemediatedNotice)
import nativeDefault from "native" /* 587 */;
import Text_Text from "Text/Text" /* 5087 */;
import RelationshipActionCreatorsDefault from "RelationshipActionCreators" /* 7011 */;
import UserProfileSharedStylesDefault from "UserProfileSharedStyles" /* 8351 */;
import noop from "module_19" /* 19 */;
import RelationshipStore from "RelationshipStore" /* 4719 */;

require = fn;
const View = fn(17).View;
const RelationshipTypes = fn(1085).RelationshipTypes;
const jsxProd = fn(21);
({ jsx: metroRequire, Fragment: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(5091);
let obj2 = { container: { padding: nativeDefault.space.PX_12, gap: nativeDefault.space.PX_8, flexDirection: "row", alignItems: "center" } };
let closure_9 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { padding: nativeDefault.space.PX_12, gap: nativeDefault.space.PX_8, flexDirection: "row", alignItems: "center" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileRemediatedNotice.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function RemediatedUserNotice(user) {
  const cResult = user(576).c(16);
  user = user.user;
  const style = user.style;
  const tmp4 = closure_9();
  const tmp5 = UserProfileSharedStylesDefault();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [RelationshipStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== user.id) {
    const fn = function p() {
      return { isPendingIncoming: RelationshipStore.getRelationshipType(user.id) === RelationshipTypes.PENDING_INCOMING, isBlocked: RelationshipStore.isBlocked(user.id), isIgnored: RelationshipStore.isIgnored(user.id) };
    };
    cResult[1] = user.id;
    cResult[2] = fn;
    let tmp8 = fn;
  } else {
    tmp8 = cResult[2];
  }
  const obj = user(576);
  const stateFromStoresObject = user(573).useStateFromStoresObject(first, tmp8);
  ({ isBlocked, isIgnored } = stateFromStoresObject);
  if (!isBlocked) {
    let tmp11 = null;
    if (isIgnored) {
      tmp11 = null;
    }
    return tmp11;
  }
  if (cResult[3] === tmp5.card) {
    if (cResult[4] === style) {
      if (cResult[5] === tmp4.container) {
        let tmp12 = cResult[6];
      }
      if (cResult[7] !== isBlocked) {
        let tmp14 = isBlocked;
        if (isBlocked) {
          const obj2 = { variant: "text-sm/semibold", color: "text-default", lineClamp: 1, children: null };
          const intl = tmp(1126).intl;
          obj2.children = intl.string(tmp(1126).t["oC/fU6"]);
          tmp14 = closure_6(tmp(5087).Text, obj2);
        }
        cResult[7] = isBlocked;
        cResult[8] = tmp14;
        let tmp13 = tmp14;
      } else {
        tmp13 = cResult[8];
      }
      if (cResult[9] === isIgnored) {
        if (cResult[10] === user.id) {
          let tmp16 = cResult[11];
        }
        if (cResult[12] === tmp12) {
          if (cResult[13] === tmp13) {
          }
        }
        const obj3 = { style: tmp12, children: null };
        const items1 = [tmp13, tmp16];
        obj3.children = items1;
        const tmp24 = closure_8(View, obj3);
        cResult[12] = tmp12;
        cResult[13] = tmp13;
        cResult[14] = tmp16;
        cResult[15] = tmp24;
      }
      let tmp17 = isIgnored;
      if (isIgnored) {
        const obj4 = { children: null };
        const obj5 = { variant: "text-sm/semibold", color: "text-default", lineClamp: 1, children: null };
        const intl2 = tmp(1126).intl;
        obj5.children = intl2.string(tmp(1126).t.HXz5An);
        const items2 = [closure_6(tmp(5087).Text, obj5), closure_6(tmp(5087).Text, { variant: "text-sm/semibold", color: "text-default", accessibilityElementsHidden: true, importantForAccessibility: "no", children: "\u2022" }), ];
        const intl3 = tmp(1126).intl;
        const obj6 = {
          unignoreHook(children) {
                  return timestampProducer(Text_Text.Text, {
                    role: "button",
                    variant: "heading-sm/medium",
                    color: "text-link",
                    onPress() {
                      return RelationshipActionCreatorsDefault.unignoreUser(id.id, "UserProfileRemediatedNotice");
                    },
                    children
                  });
                }
        };
        items2[2] = intl3.format(tmp(1126).t.PrtAqy, obj6);
        obj4.children = items2;
        tmp17 = closure_8(closure_7, obj4);
      }
      cResult[9] = isIgnored;
      cResult[10] = user.id;
      cResult[11] = tmp17;
      tmp16 = tmp17;
    }
  }
  const items3 = [tmp4.container, tmp5.card, style];
  cResult[3] = tmp5.card;
  cResult[4] = style;
  cResult[5] = tmp4.container;
  cResult[6] = items3;
  tmp12 = items3;
  const tmpResult = user(573);
}) : (function RemediatedUserNotice(user) {
  user = user.user;
  const tmp = closure_9();
  const tmp3 = UserProfileSharedStylesDefault();
  const items = [RelationshipStore];
  const stateFromStoresObject = user(573).useStateFromStoresObject(items, () => ({ isPendingIncoming: RelationshipStore.getRelationshipType(user.id) === RelationshipTypes.PENDING_INCOMING, isBlocked: RelationshipStore.isBlocked(user.id), isIgnored: RelationshipStore.isIgnored(user.id) }));
  ({ isBlocked, isIgnored } = stateFromStoresObject);
  if (isBlocked) {
    const obj2 = { style: null, children: null };
    const items1 = [tmp.container, tmp3.card, user.style];
    obj2.style = items1;
    if (isBlocked) {
      const obj3 = { variant: "text-sm/semibold", color: "text-default", lineClamp: 1, children: null };
      const intl = tmp4(1126).intl;
      obj3.children = intl.string(tmp4(1126).t["oC/fU6"]);
      isBlocked = closure_6(tmp4(5087).Text, obj3);
    }
    const items2 = [isBlocked, ];
    if (isIgnored) {
      const obj4 = { children: null };
      const obj5 = { variant: "text-sm/semibold", color: "text-default", lineClamp: 1, children: null };
      const intl2 = tmp4(1126).intl;
      obj5.children = intl2.string(tmp4(1126).t.HXz5An);
      const items3 = [closure_6(tmp4(5087).Text, obj5), closure_6(tmp4(5087).Text, { variant: "text-sm/semibold", color: "text-default", accessibilityElementsHidden: true, importantForAccessibility: "no", children: "\u2022" }), ];
      const intl3 = tmp4(1126).intl;
      const obj6 = {
        unignoreHook(children) {
              return timestampProducer(Text_Text.Text, {
                role: "button",
                variant: "heading-sm/medium",
                color: "text-link",
                onPress() {
                  return RelationshipActionCreatorsDefault.unignoreUser(id.id, "UserProfileRemediatedNotice");
                },
                children
              });
            }
      };
      items3[2] = intl3.format(tmp4(1126).t.PrtAqy, obj6);
      obj4.children = items3;
      isIgnored = closure_8(closure_7, obj4);
    }
    items2[1] = isIgnored;
    obj2.children = items2;
    let tmp8Result = closure_8(View, obj2);
  } else {
    tmp8Result = null;
    if (isIgnored) {
      tmp8Result = null;
    }
  }
  return tmp8Result;
});