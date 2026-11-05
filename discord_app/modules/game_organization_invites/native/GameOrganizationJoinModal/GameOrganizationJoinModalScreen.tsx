// discord_app/modules/game_organization_invites/native/GameOrganizationJoinModal/GameOrganizationJoinModalScreen.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import useSafeAreaInsetsDefault from "../../../safe_area/useSafeAreaInsets.native.tsx";
import NavigatorConstants from "../../../../design/components/Navigator/native/NavigatorConstants.native.tsx";
import ModalScreen from "../../../../design/components/Modal/native/ModalScreen.native.tsx";
import ExpressiveGradient from "../../../../design/components/ExpressiveGradient/native/ExpressiveGradient.native.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(5143);
let closure_6 = createStyles.createStyles({ content: { flex: 1 } });
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/game_organization_invites/native/GameOrganizationJoinModal/GameOrganizationJoinModalScreen.tsx",
);

export default function GameOrganizationJoinModalScreen(children) {
  const tmp = closure_6();
  const obj = { children: null };
  const tmp2 = useSafeAreaInsetsDefault();
  items = [
    React4(ExpressiveGradient.ExpressiveGradient, {
      color: "purple",
      backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
    }),
  ];
  const obj3 = { style: null, children: null };
  const items1 = [tmp.content];
  const obj2 = { color: "purple", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
  items1[1] = { paddingTop: NavigatorConstants.NAV_BAR_HEIGHT + tmp2.top };
  obj3.style = items1;
  obj3.children = children.children;
  items[1] = React4(View, obj3);
  obj.children = items;
  return hasOwnProperty(ModalScreen.ModalScreen, obj);
}
