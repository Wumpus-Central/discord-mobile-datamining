// === Module 13273: UserProfileRemediatedNotice ===

// Module 13273 (UserProfileRemediatedNotice)
import nativeDefault from "native" /* 576 */;
import Text_Text from "Text/Text" /* 4634 */;
import UserProfileSharedStylesDefault from "UserProfileSharedStyles" /* 8369 */;
import RelationshipActionCreatorsDefault from "RelationshipActionCreators" /* 9185 */;
import noop from "module_19" /* 19 */;
import RelationshipStore from "RelationshipStore" /* 4286 */;

require = fn;
const View = fn(17).View;
const RelationshipTypes = fn(1074).RelationshipTypes;
const jsxProd = fn(21);
({ jsx: metroRequire, Fragment: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4638);
let obj2 = { container: { padding: nativeDefault.space.PX_12, gap: nativeDefault.space.PX_8, flexDirection: "row", alignItems: "center" } };
let closure_9 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileRemediatedNotice.tsx");

export default function RemediatedUserNotice(user) {
  user = user.user;
  const tmp = closure_9();
  const tmp3 = UserProfileSharedStylesDefault();
  const items = [RelationshipStore];
  const stateFromStoresObject = user(563).useStateFromStoresObject(items, () => ({ isPendingIncoming: RelationshipStore.getRelationshipType(user.id) === RelationshipTypes.PENDING_INCOMING, isBlocked: RelationshipStore.isBlocked(user.id), isIgnored: RelationshipStore.isIgnored(user.id) }));
  ({ isBlocked, isIgnored } = stateFromStoresObject);
  if (isBlocked) {
    const obj2 = { style: null, children: null };
    const items1 = [tmp.container, tmp3.card, user.style];
    obj2.style = items1;
    if (isBlocked) {
      const obj3 = { variant: "text-sm/semibold", color: "text-default", lineClamp: 1, children: null };
      const intl = tmp4(1115).intl;
      obj3.children = intl.string(tmp4(1115).t["oC/fU6"]);
      isBlocked = closure_6(tmp4(4634).Text, obj3);
    }
    const items2 = [isBlocked, ];
    if (isIgnored) {
      const obj4 = { children: null };
      const obj5 = { variant: "text-sm/semibold", color: "text-default", lineClamp: 1, children: null };
      const intl2 = tmp4(1115).intl;
      obj5.children = intl2.string(tmp4(1115).t.HXz5An);
      const items3 = [closure_6(tmp4(4634).Text, obj5), closure_6(tmp4(4634).Text, { variant: "text-sm/semibold", color: "text-default", accessibilityElementsHidden: true, importantForAccessibility: "no", children: "\u2022" }), ];
      const intl3 = tmp4(1115).intl;
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
      items3[2] = intl3.format(tmp4(1115).t.PrtAqy, obj6);
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
};