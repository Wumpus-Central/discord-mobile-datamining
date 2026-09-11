// === Module 9982: InstantInviteAgeText ===

// Module 9982 (InstantInviteAgeText)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1114 */;
import Text_Text from "Text/Text" /* 4602 */;
import Pressables from "Pressables" /* 5174 */;
import ManaTypeConsolidationExperiment from "ManaTypeConsolidationExperiment" /* 7053 */;
import instant_invite_InstantInviteUtils from "instant_invite/InstantInviteUtils" /* 9911 */;
import InstantInviteUtils from "InstantInviteUtils" /* 9913 */;
import noop from "module_19" /* 19 */;
import CreateInviteModalStore from "CreateInviteModalStore" /* 9912 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsxs: closure_4, jsx: hasOwnProperty } = jsxProd);
const createStyles = fn(4606);
let closure_6 = createStyles.createStyles({ inviteAgeContainer: { flexDirection: "row", alignItems: "center", flexWrap: "wrap" } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/instant_invite/native/components/InstantInviteAgeText.tsx");

export default function InstantInviteAgeText(style) {
  ({ channel: require, callbackActionSheet: dependencyMap, canEditInvite } = style);
  if (canEditInvite === undefined) {
    canEditInvite = true;
  }
  ({ onEdit: View, source: CreateInviteModalStore } = style);
  let obj = ManaTypeConsolidationExperiment;
  const manaTypeConsolidationExperiment = obj.useManaTypeConsolidationExperiment("InstantInviteAgeText");
  let obj1 = initialize;
  const items = [CreateInviteModalStore];
  const stateFromStores = obj1.useStateFromStores(items, () => inviteSettings.getInviteSettings());
  let tmp7Result = null;
  if (null != stateFromStores) {
    obj = { style: null, children: null };
    const items1 = [tmp.inviteAgeContainer, style.style];
    obj.style = items1;
    let str = "text-xs/normal";
    let str2 = "text-xs/normal";
    if (manaTypeConsolidationExperiment) {
      str2 = "experimental/body-md/normal";
    }
    obj = { variant: str2, children: null };
    const items2 = [InstantInviteUtils.maxAgeString(stateFromStores.maxAge, stateFromStores.maxUses), " "];
    obj.children = items2;
    const items3 = [closure_4(Text_Text.Text, obj), ];
    if (canEditInvite) {
      obj1 = {
        onPress() {
              instant_invite_InstantInviteUtils.handlePressSettings(closure_1_0, dependencyMap, inviteSettings);
              if (View != null) {
                View();
              }
            },
        accessibilityRole: "link",
        accessibilityLabel: null,
        hitSlop: null,
        children: null
      };
      const intl = util.intl;
      obj1.accessibilityLabel = intl.string(util.t["VNe8P/"]);
      obj1.hitSlop = { top: 8, left: 8, bottom: 8, right: 8 };
      if (manaTypeConsolidationExperiment) {
        str = "experimental/body-md/medium";
      }
      const obj2 = { variant: str, color: "text-link", children: null };
      const intl2 = util.intl;
      obj2.children = intl2.string(util.t["VNe8P/"]);
      obj1.children = closure_5(Text_Text.Text, obj2);
      canEditInvite = closure_5(Pressables.PressableOpacity, obj1);
    }
    items3[1] = canEditInvite;
    obj.children = items3;
    tmp7Result = closure_4(View, obj);
    const tmp2Result = InstantInviteUtils;
  }
  return tmp7Result;
};