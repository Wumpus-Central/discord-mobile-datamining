// discord_app/modules/instant_invite/native/components/InstantInviteAgeText.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import util from "../../../../intl/index.native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import Pressables from "../../../../design/void/Pressables/native/Pressables.tsx";
import instant_invite_InstantInviteUtils from "../InstantInviteUtils.tsx";
import InstantInviteUtils from "../../../../utils/InstantInviteUtils.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import CreateInviteModalStore from "../../../../stores/CreateInviteModalStore.tsx";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsxs: closure_4, jsx: hasOwnProperty } = jsxProd);
const createStyles = fn(5170);
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
  items = [CreateInviteModalStore];
  const stateFromStores = initialize.useStateFromStores(items, () => inviteSettings.getInviteSettings());
  let tmp6Result = null;
  if (null != stateFromStores) {
    const obj2 = { style: null, children: null };
    const items1 = [tmp.inviteAgeContainer, style.style];
    obj2.style = items1;
    const obj3 = { variant: "body-md/normal", children: null };
    const items2 = [InstantInviteUtils.maxAgeString(stateFromStores.maxAge, stateFromStores.maxUses), " "];
    obj3.children = items2;
    const items3 = [closure_4(Text_Text.Text, obj3)];
    if (canEditInvite) {
      const obj4 = {
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
      obj4.accessibilityLabel = intl.string(util.t["VNe8P/"]);
      obj4.hitSlop = { top: 8, left: 8, bottom: 8, right: 8 };
      const obj5 = { variant: "body-md/medium", color: "text-link", children: null };
      const intl2 = util.intl;
      obj5.children = intl2.string(util.t["VNe8P/"]);
      obj4.children = closure_5(Text_Text.Text, obj5);
      canEditInvite = closure_5(Pressables.PressableOpacity, obj4);
    }
    items3[1] = canEditInvite;
    obj2.children = items3;
    tmp6Result = closure_4(View, obj2);
    const tmp2Result = InstantInviteUtils;
  }
  return tmp6Result;
}
