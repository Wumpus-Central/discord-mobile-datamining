// === Module 14997: FamilyCenterLinkWrapper ===

// Module 14997 (FamilyCenterLinkWrapper)
import nativeDefault from "native" /* 576 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 8242 */;
import noop from "module_19" /* 19 */;

const require = fn;
const jsx = fn(21).jsx;
fn(4605);
let createStyles = { container: null };
createStyles = { display: "flex", flexDirection: "row", alignItems: "center", paddingTop: 14, paddingBottom: nativeDefault.space.PX_12, paddingHorizontal: nativeDefault.space.PX_12 };
createStyles.container = createStyles;
let closure_4 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterLinkWrapper.tsx");

export default function FamilyCenterLinkRowWrapper(userId) {
  userId = userId.userId;
  let analyticsLocations;
  analyticsLocations = analyticsLocations(7214)().analyticsLocations;
  let tmp3 = null;
  if (undefined !== userId) {
    const obj = {
      style: tmp.container,
      onPress() {
          showUserProfileActionSheetDefault({ userId, disableCalls: true, disableMessage: true, sourceAnalyticsLocations: analyticsLocations });
        },
      children: userId.children
    };
    tmp3 = jsx(userId(5173).PressableOpacity, {
      style: tmp.container,
      onPress() {
          showUserProfileActionSheetDefault({ userId, disableCalls: true, disableMessage: true, sourceAnalyticsLocations: analyticsLocations });
        },
      children: userId.children
    });
  }
  return tmp3;
};