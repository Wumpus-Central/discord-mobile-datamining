// === Module 11892: InstantInviteAgeText ===

// Module 11892 (InstantInviteAgeText)
import noopAll from "noop" /* 19 */;
import initialize from "initialize" /* 589 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import Text from "Text" /* 4734 */;
import PressableBase from "PressableBase" /* 5433 */;
import apexExperiment from "apexExperiment" /* 8307 */;
import showInstantInviteActionSheet from "showInstantInviteActionSheet" /* 8918 */;
import isGuildMember from "isGuildMember" /* 8920 */;
import { View } from "get ActivityIndicator" /* 17 */;
import updateWithLatestInvite from "updateWithLatestInvite" /* 8919 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

require = fn;
noopAll;
({ jsxs: c4, jsx: c5 } = jsxProd);
let closure_6 = createCacheKey.createStyles({ inviteAgeContainer: { flexDirection: "row", alignItems: "center", flexWrap: "wrap" } });
const result = require("obj132").fileFinishedImporting("modules/instant_invite/native/components/InstantInviteAgeText.tsx");

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
    const items2 = [isGuildMember.maxAgeString(stateFromStores.maxAge, stateFromStores.maxUses), " "];
    obj[1] = items2;
    const items3 = [callback(Text.Text, obj), ];
    if (canEditInvite) {
      obj1 = { onPress: null, accessibilityRole: "link", accessibilityLabel: null, hitSlop: null, children: null };
      obj1[0] = function onPress() {
        showInstantInviteActionSheet.handlePressSettings(closure_0, closure_1, closure_3);
        if (callback != null) {
          callback();
        }
      };
      const intl = getSystemLocale.intl;
      obj1[2] = intl.string(getSystemLocale.t["VNe8P/"]);
      obj1[3] = { top: 8, left: 8, bottom: 8, right: 8 };
      if (manaTypeConsolidationExperiment) {
        str = "experimental/body-md/medium";
      }
      const obj2 = { variant: null, color: "text-link", children: null };
      obj2[0] = str;
      const intl2 = getSystemLocale.intl;
      obj2[2] = intl2.string(getSystemLocale.t["VNe8P/"]);
      obj1[4] = callback2(Text.Text, obj2);
      canEditInvite = callback2(PressableBase.PressableOpacity, obj1);
    }
    items3[1] = canEditInvite;
    obj[1] = items3;
    tmp7Result = callback(View, obj);
    const tmp2Result = isGuildMember;
  }
  return tmp7Result;
};