// discord_app/modules/instant_invite/native/components/InstantInviteAgeText.tsx
import "noop";
import { View } from "get ActivityIndicator";
import updateWithLatestInvite from "updateWithLatestInvite";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c4;
let c5;
const require = arg1;
({ jsxs: c4, jsx: c5 } = jsxProd);
let closure_6 = createCacheKey.createStyles({ inviteAgeContainer: { flexDirection: "row", alignItems: "center", flexWrap: "wrap" } });
const result = require("updateWithLatestInvite").fileFinishedImporting("modules/instant_invite/native/components/InstantInviteAgeText.tsx");

export default function InstantInviteAgeText(style) {
  let View;
  let canEditInvite;
  let updateWithLatestInvite;
  let dependencyMap;
  let require;
  ({ channel: require, callbackActionSheet: dependencyMap, canEditInvite } = style);
  if (canEditInvite === undefined) {
    canEditInvite = true;
  }
  ({ onEdit: View, source: updateWithLatestInvite } = style);
  let obj = require("../../../../../discord_common/js/packages/flux/index.tsx") /* initialize */;
  const items = [updateWithLatestInvite];
  const stateFromStores = obj.useStateFromStores(items, () => inviteSettings.getInviteSettings());
  let tmp6Result = null;
  if (null != stateFromStores) {
    obj = { style: null, children: null };
    const items1 = [tmp.inviteAgeContainer, style.style];
    obj[0] = items1;
    obj = { variant: "text-xs/normal", children: null };
    const items2 = [tmp2(8989).maxAgeString(stateFromStores.maxAge, stateFromStores.maxUses), " "];
    obj[1] = items2;
    const items3 = [callback(tmp2(4281).Text, obj), ];
    if (canEditInvite) {
      const obj1 = { onPress: null, accessibilityRole: "link", accessibilityLabel: null, hitSlop: null, children: null };
      obj1[0] = function onPress() {
        outer1_0(outer1_1[9]).handlePressSettings(closure_0, closure_1, updateWithLatestInvite);
        if (callback != null) {
          callback();
        }
      };
      const intl = tmp2(1236).intl;
      obj1[2] = intl.string(tmp2(1236).t["VNe8P/"]);
      obj1[3] = { top: 8, left: 8, bottom: 8, right: 8 };
      const obj2 = { variant: "text-xs/normal", color: "text-link", children: null };
      const intl2 = tmp2(1236).intl;
      obj2[2] = intl2.string(tmp2(1236).t["VNe8P/"]);
      obj1[4] = callback2(tmp2(4281).Text, obj2);
      canEditInvite = callback2(tmp2(4812).PressableOpacity, obj1);
    }
    items3[1] = canEditInvite;
    obj[1] = items3;
    tmp6Result = callback(View, obj);
    const tmp2Result = tmp2(8989);
    const tmp6 = callback;
    const tmp7 = View;
  }
  return tmp6Result;
};