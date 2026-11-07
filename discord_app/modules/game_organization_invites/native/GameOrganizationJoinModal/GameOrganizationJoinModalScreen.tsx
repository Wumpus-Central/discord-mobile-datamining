// === Module 13447: GameOrganizationJoinModalScreen ===

// Module 13447 (GameOrganizationJoinModalScreen)
import nativeDefault from "native" /* 575 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1627 */;
import NavigatorConstants from "NavigatorConstants" /* 5714 */;
import ModalScreen from "ModalScreen" /* 8041 */;
import ExpressiveGradient from "ExpressiveGradient" /* 8042 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(5140);
let closure_6 = createStyles.createStyles({ content: { flex: 1 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_organization_invites/native/GameOrganizationJoinModal/GameOrganizationJoinModalScreen.tsx");

export default function GameOrganizationJoinModalScreen(children) {
  const tmp = closure_6();
  const obj = { children: null };
  const tmp2 = useSafeAreaInsetsDefault();
  items = [React4(ExpressiveGradient.ExpressiveGradient, { color: "purple", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW }), ];
  const obj3 = { style: null, children: null };
  const items1 = [tmp.content, ];
  const obj2 = { color: "purple", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
  items1[1] = { paddingTop: NavigatorConstants.NAV_BAR_HEIGHT + tmp2.top };
  obj3.style = items1;
  obj3.children = children.children;
  items[1] = React4(View, obj3);
  obj.children = items;
  return hasOwnProperty(ModalScreen.ModalScreen, obj);
};