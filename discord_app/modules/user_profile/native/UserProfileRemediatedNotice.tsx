// === Module 13123: UserProfileRemediatedNotice ===

// Module 13123 (UserProfileRemediatedNotice)
import nativeDefault from "native" /* 576 */;
import Text_Text from "Text/Text" /* 4556 */;
import RelationshipActionCreatorsDefault from "RelationshipActionCreators" /* 9042 */;
import noop from "module_19" /* 19 */;
import RelationshipStore from "RelationshipStore" /* 4209 */;

require = fn;
const View = fn(17).View;
const RelationshipTypes = fn(1074).RelationshipTypes;
const jsxProd = fn(21);
({ jsx: metroRequire, Fragment: closure_7, jsxs: closure_8 } = jsxProd);
fn(4560);
let createStyles = { container: null };
createStyles = { padding: nativeDefault.space.PX_12, gap: nativeDefault.space.PX_8, flexDirection: "row", alignItems: "center" };
createStyles.container = createStyles;
let closure_9 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileRemediatedNotice.tsx");

export default function RemediatedUserNotice(user) {
  user = user.user;
  const tmp = closure_9();
  let obj = user(563);
  const items = [RelationshipStore];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ isPendingIncoming: RelationshipStore.getRelationshipType(user.id) === RelationshipTypes.PENDING_INCOMING, isBlocked: RelationshipStore.isBlocked(user.id), isIgnored: RelationshipStore.isIgnored(user.id) }));
  ({ isBlocked, isIgnored } = stateFromStoresObject);
  if (isBlocked) {
    obj = { style: null, children: null };
    const items1 = [tmp.container, tmp3.card, user.style];
    obj.style = items1;
    if (isBlocked) {
      obj = { variant: "text-sm/semibold", color: "text-default", lineClamp: 1, children: null };
      const intl = tmp4(1114).intl;
      obj.children = intl.string(tmp4(1114).t["oC/fU6"]);
      isBlocked = closure_6(tmp4(4556).Text, obj);
    }
    const items2 = [isBlocked, ];
    if (isIgnored) {
      const obj1 = { children: null };
      const obj2 = { variant: "text-sm/semibold", color: "text-default", lineClamp: 1, children: null };
      const intl2 = tmp4(1114).intl;
      obj2.children = intl2.string(tmp4(1114).t.HXz5An);
      const items3 = [closure_6(tmp4(4556).Text, obj2), closure_6(tmp4(4556).Text, { variant: "text-sm/semibold", color: "text-default", accessibilityElementsHidden: true, importantForAccessibility: "no", children: "\u2022" }), ];
      const intl3 = tmp4(1114).intl;
      const obj3 = {
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
      items3[2] = intl3.format(tmp4(1114).t.PrtAqy, obj3);
      obj1.children = items3;
      isIgnored = tmp8(closure_7, obj1);
    }
    items2[1] = isIgnored;
    obj.children = items2;
    let tmp8Result = tmp8(View, obj);
  } else {
    tmp8Result = null;
    if (isIgnored) {
      tmp8Result = null;
    }
  }
  return tmp8Result;
};