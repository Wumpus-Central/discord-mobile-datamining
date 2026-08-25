// discord_app/modules/user_profile/native/UserProfileRemediatedNotice.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_4 from "../../../stores/RelationshipStore.tsx";
import { RelationshipTypes } from "../../../Constants.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
noopAll;
({ jsx: closure_6, Fragment: error, jsxs: closure_8 } = jsxProd);
createCacheKey = { container: null };
createCacheKey = { padding: ThemesDefault.space.PX_12, gap: ThemesDefault.space.PX_8, flexDirection: "row", alignItems: "center" };
createCacheKey[0] = createCacheKey;
let closure_9 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/user_profile/native/UserProfileRemediatedNotice.tsx");

export default function RemediatedUserNotice(user) {
  user = user.user;
  const tmp = callback2();
  let obj = user(647);
  const items = [closure_4];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ isPendingIncoming: closure_1_4.getRelationshipType(user.id) === closure_1_5.PENDING_INCOMING, isBlocked: closure_1_4.isBlocked(user.id), isIgnored: closure_1_4.isIgnored(user.id) }));
  ({ isBlocked, isIgnored } = stateFromStoresObject);
  if (isBlocked) {
    obj = { style: null, children: null };
    const items1 = [tmp.container, tmp3.card, user.style];
    obj[0] = items1;
    if (isBlocked) {
      obj = { variant: "text-sm/semibold", color: "text-default", lineClamp: 1, children: null };
      const intl = tmp4(1236).intl;
      obj[3] = intl.string(tmp4(1236).t["oC/fU6"]);
      isBlocked = callback(tmp4(4376).Text, obj);
    }
    const items2 = [isBlocked, ];
    if (isIgnored) {
      obj1 = { children: null };
      const obj2 = { variant: "text-sm/semibold", color: "text-default", lineClamp: 1, children: null };
      const intl2 = tmp4(1236).intl;
      obj2[3] = intl2.string(tmp4(1236).t.HXz5An);
      const items3 = [callback(tmp4(4376).Text, obj2), callback(tmp4(4376).Text, { variant: "text-sm/semibold", color: "text-default", accessibilityElementsHidden: true, importantForAccessibility: "no", children: "\u2022" }), ];
      const intl3 = tmp4(1236).intl;
      const obj3 = { unignoreHook: null };
      obj3[0] = function unignoreHook(children) {
        return closure_1_6(user(closure_1_2[9]).Text, {
          role: "button",
          variant: "heading-sm/medium",
          color: "text-link",
          onPress() {
            return closure_1_1(closure_1_2[11]).unignoreUser(id.id, "UserProfileRemediatedNotice");
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