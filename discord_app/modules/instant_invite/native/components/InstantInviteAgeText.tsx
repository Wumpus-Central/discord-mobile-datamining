// discord_app/modules/instant_invite/native/components/InstantInviteAgeText.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import util from "../../../../intl/index.native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import Pressables from "../../../../design/void/Pressables/native/Pressables.tsx";
import ManaTypeConsolidationExperiment from "../../../design/ManaTypeConsolidationExperiment.tsx";
import instant_invite_InstantInviteUtils from "../InstantInviteUtils.tsx";
import InstantInviteUtils from "../../../../utils/InstantInviteUtils.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import CreateInviteModalStore from "../../../../stores/CreateInviteModalStore.tsx";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsxs: closure_4, jsx: hasOwnProperty } = jsxProd);
const createStyles = fn(4636);
let closure_6 = createStyles.createStyles({
  inviteAgeContainer: { flexDirection: "row", alignItems: "center", flexWrap: "wrap" },
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/instant_invite/native/components/InstantInviteAgeText.tsx");

export default function InstantInviteAgeText(style) {
  ({ channel: require, callbackActionSheet: dependencyMap, canEditInvite } = style);
  if (canEditInvite === undefined) {
    canEditInvite = true;
  }
  ({ onEdit: View, source: CreateInviteModalStore } = style);
  const tmp = closure_6();
  const manaTypeConsolidationExperiment =
    ManaTypeConsolidationExperiment.useManaTypeConsolidationExperiment("InstantInviteAgeText");
  const items = [CreateInviteModalStore];
  const stateFromStores = initialize.useStateFromStores(items, () => inviteSettings.getInviteSettings());
  let tmp7Result = null;
  if (null != stateFromStores) {
    const obj3 = { style: null, children: null };
    const items1 = [tmp.inviteAgeContainer, style.style];
    obj3.style = items1;
    let str = "text-xs/normal";
    let str2 = "text-xs/normal";
    if (manaTypeConsolidationExperiment) {
      str2 = "experimental/body-md/normal";
    }
    const obj4 = { variant: str2, children: null };
    const items2 = [InstantInviteUtils.maxAgeString(stateFromStores.maxAge, stateFromStores.maxUses), " "];
    obj4.children = items2;
    const items3 = [closure_4(Text_Text.Text, obj4)];
    if (canEditInvite) {
      const obj5 = {
        onPress() {
          instant_invite_InstantInviteUtils.handlePressSettings(closure_1_0, dependencyMap, inviteSettings);
          if (View != null) {
            View();
          }
        },
        accessibilityRole: "link",
        accessibilityLabel: null,
        hitSlop: null,
        children: null,
      };
      const intl = util.intl;
      obj5.accessibilityLabel = intl.string(util.t["VNe8P/"]);
      obj5.hitSlop = { top: 8, left: 8, bottom: 8, right: 8 };
      if (manaTypeConsolidationExperiment) {
        str = "experimental/body-md/medium";
      }
      const obj6 = { variant: str, color: "text-link", children: null };
      const intl2 = util.intl;
      obj6.children = intl2.string(util.t["VNe8P/"]);
      obj5.children = closure_5(Text_Text.Text, obj6);
      canEditInvite = closure_5(Pressables.PressableOpacity, obj5);
    }
    items3[1] = canEditInvite;
    obj3.children = items3;
    tmp7Result = closure_4(View, obj3);
    const tmp2Result = InstantInviteUtils;
  }
  return tmp7Result;
}
