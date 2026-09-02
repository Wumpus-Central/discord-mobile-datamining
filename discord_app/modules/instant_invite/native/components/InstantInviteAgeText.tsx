// === Module 10004: InstantInviteAgeText ===

// Module 10004 (InstantInviteAgeText)
import noopAll from "noop" /* 19 */;
import initialize from "initialize" /* 586 */;
import apexExperiment from "apexExperiment" /* 8013 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_3 from "updateWithLatestInvite" /* 9932 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

require = arg1;
noopAll;
({ jsxs: c4, jsx: c5 } = jsxProd);
let closure_6 = createCacheKey.createStyles({ inviteAgeContainer: { flexDirection: "row", alignItems: "center", flexWrap: "wrap" } });
const result = require("set").fileFinishedImporting("modules/instant_invite/native/components/InstantInviteAgeText.tsx");

export default function InstantInviteAgeText(style) {
  ({ channel: require, callbackActionSheet: dependencyMap, canEditInvite } = style);
  if (canEditInvite === undefined) {
    canEditInvite = true;
  }
  ({ onEdit: View, source: closure_3 } = style);
  let obj = apexExperiment;
  const manaTypeConsolidationExperiment = obj.useManaTypeConsolidationExperiment("InstantInviteAgeText");
  obj1 = initialize;
  const items = [closure_3];
  const stateFromStores = obj1.useStateFromStores(items, () => inviteSettings.getInviteSettings());
  let tmp7Result = null;
  if (null != stateFromStores) {
    obj = { style: null, children: null };
    const items1 = [tmp.inviteAgeContainer, style.style];
    obj[0] = items1;
    let str = "text-xs/normal";
    let str2 = "text-xs/normal";
    if (manaTypeConsolidationExperiment) {
      str2 = "experimental/body-md/normal";
    }
    obj = { variant: null, children: null };
    obj[0] = str2;
    const items2 = [tmp2(9933).maxAgeString(stateFromStores.maxAge, stateFromStores.maxUses), " "];
    obj[1] = items2;
    const items3 = [closure_4(tmp2(4474).Text, obj), ];
    if (canEditInvite) {
      obj1 = { onPress: null, accessibilityRole: "link", accessibilityLabel: null, hitSlop: null, children: null };
      obj1[0] = function onPress() {
        closure_1_0(closure_1_1[10]).handlePressSettings(closure_0, closure_1, closure_3);
        if (callback != null) {
          callback();
        }
      };
      const intl = tmp2(1233).intl;
      obj1[2] = intl.string(tmp2(1233).t["VNe8P/"]);
      obj1[3] = { top: 8, left: 8, bottom: 8, right: 8 };
      if (manaTypeConsolidationExperiment) {
        str = "experimental/body-md/medium";
      }
      const obj2 = { variant: null, color: "text-link", children: null };
      obj2[0] = str;
      const intl2 = tmp2(1233).intl;
      obj2[2] = intl2.string(tmp2(1233).t["VNe8P/"]);
      obj1[4] = closure_5(tmp2(4474).Text, obj2);
      canEditInvite = tmp9(tmp2(5076).PressableOpacity, obj1);
    }
    items3[1] = canEditInvite;
    obj[1] = items3;
    tmp7Result = tmp7(View, obj);
    const tmp2Result = tmp2(9933);
    const tmp8 = View;
  }
  return tmp7Result;
};