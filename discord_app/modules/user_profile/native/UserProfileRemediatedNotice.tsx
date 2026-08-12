// discord_app/modules/user_profile/native/UserProfileRemediatedNotice.tsx
import "noop";
import { View } from "get ActivityIndicator";
import markAllUserIdListsStale from "markAllUserIdListsStale";
import { RelationshipTypes } from "ME";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let closure_6;
let error;
let metroImportAll;
const require = arg1;
({ jsx: closure_6, Fragment: error, jsxs: metroImportAll } = jsxProd);
createCacheKey = { container: null };
createCacheKey = { padding: require("Themes").space.PX_12, gap: require("Themes").space.PX_8, flexDirection: "row", alignItems: "center" };
createCacheKey[0] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("markAllUserIdListsStale").fileFinishedImporting("modules/user_profile/native/UserProfileRemediatedNotice.tsx");

export default function RemediatedUserNotice(user) {
  let isBlocked;
  let isIgnored;
  user = user.user;
  const tmp = createCacheKey();
  let obj = user(647);
  const items = [markAllUserIdListsStale];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ isPendingIncoming: outer1_4.getRelationshipType(user.id) === outer1_5.PENDING_INCOMING, isBlocked: outer1_4.isBlocked(user.id), isIgnored: outer1_4.isIgnored(user.id) }));
  ({ isBlocked, isIgnored } = stateFromStoresObject);
  if (isBlocked) {
    obj = { style: null, children: null };
    const items1 = [tmp.container, tmp3.card, user.style];
    obj[0] = items1;
    if (isBlocked) {
      obj = { variant: "text-sm/semibold", color: "text-default", lineClamp: 1, children: null };
      const intl = tmp4(1236).intl;
      obj[3] = intl.string(tmp4(1236).t["oC/fU6"]);
      isBlocked = callback(tmp4(4340).Text, obj);
    }
    const items2 = [isBlocked, ];
    if (isIgnored) {
      const obj1 = { children: null };
      const obj2 = { variant: "text-sm/semibold", color: "text-default", lineClamp: 1, children: null };
      const intl2 = tmp4(1236).intl;
      obj2[3] = intl2.string(tmp4(1236).t.HXz5An);
      const items3 = [callback(tmp4(4340).Text, obj2), callback(tmp4(4340).Text, { variant: "text-sm/semibold", color: "text-default", accessibilityElementsHidden: true, importantForAccessibility: "no", children: "\u2022" }), ];
      const intl3 = tmp4(1236).intl;
      const obj3 = { unignoreHook: null };
      obj3[0] = function unignoreHook(children) {
        return outer1_6(user(outer1_2[9]).Text, {
          role: "button",
          variant: "heading-sm/medium",
          color: "text-link",
          onPress() {
            return outer1_1(outer1_2[11]).unignoreUser(id.id, "UserProfileRemediatedNotice");
          },
          children
        });
      };
      items3[2] = intl3.format(tmp4(1236).t.PrtAqy, obj3);
      obj1[0] = items3;
      isIgnored = tmp8(closure_7, obj1);
    }
    items2[1] = isIgnored;
    obj[1] = items2;
    let tmp8Result = tmp8(View, obj);
    const tmp9 = View;
  } else {
    tmp8Result = null;
    if (isIgnored) {
      tmp8Result = null;
    }
  }
  return tmp8Result;
};