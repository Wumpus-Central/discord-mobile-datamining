// discord_app/modules/instant_invite/native/components/InstantInviteAgeText.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import ManaTypeConsolidationExperiment from "../../../design/ManaTypeConsolidationExperiment.tsx";
import instant_invite_InstantInviteUtils from "../InstantInviteUtils.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import CreateInviteModalStore from "../../../../stores/CreateInviteModalStore.tsx";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsxs: closure_4, jsx: hasOwnProperty } = jsxProd);
const createStyles = fn(4560);
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
    const items2 = [tmp2(9822).maxAgeString(stateFromStores.maxAge, stateFromStores.maxUses), " "];
    obj.children = items2;
    const items3 = [closure_4(tmp2(4556).Text, obj)];
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
        children: null,
      };
      const intl = tmp2(1114).intl;
      obj1.accessibilityLabel = intl.string(tmp2(1114).t["VNe8P/"]);
      obj1.hitSlop = { top: 8, left: 8, bottom: 8, right: 8 };
      if (manaTypeConsolidationExperiment) {
        str = "experimental/body-md/medium";
      }
      const obj2 = { variant: str, color: "text-link", children: null };
      const intl2 = tmp2(1114).intl;
      obj2.children = intl2.string(tmp2(1114).t["VNe8P/"]);
      obj1.children = closure_5(tmp2(4556).Text, obj2);
      canEditInvite = tmp9(tmp2(5123).PressableOpacity, obj1);
    }
    items3[1] = canEditInvite;
    obj.children = items3;
    tmp7Result = tmp7(View, obj);
    const tmp2Result = tmp2(9822);
  }
  return tmp7Result;
}
