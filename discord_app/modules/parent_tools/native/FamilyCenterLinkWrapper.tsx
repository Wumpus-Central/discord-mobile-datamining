// === Module 17072: FamilyCenterLinkWrapper ===

// Module 17072 (FamilyCenterLinkWrapper)
import nativeDefault from "native" /* 575 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 8891 */;
import noop from "module_19" /* 19 */;

const require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(5141);
const obj2 = { container: { display: "flex", flexDirection: "row", alignItems: "center", paddingTop: 14, paddingBottom: nativeDefault.space.PX_12, paddingHorizontal: nativeDefault.space.PX_12 } };
let closure_4 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterLinkWrapper.tsx");

export default function FamilyCenterLinkRowWrapper(userId) {
  userId = userId.userId;
  let analyticsLocations;
  analyticsLocations = analyticsLocations(7462)().analyticsLocations;
  let tmp3 = null;
  if (undefined !== userId) {
    const obj = {
      style: tmp.container,
      onPress: function handlePress() {
          showUserProfileActionSheetDefault({ userId, disableCalls: true, disableMessage: true, sourceAnalyticsLocations: analyticsLocations });
        },
      children: userId.children
    };
    tmp3 = jsx(userId(7121).PressableOpacity, {
      style: tmp.container,
      onPress: function handlePress() {
          showUserProfileActionSheetDefault({ userId, disableCalls: true, disableMessage: true, sourceAnalyticsLocations: analyticsLocations });
        },
      children: userId.children
    });
  }
  return tmp3;
};