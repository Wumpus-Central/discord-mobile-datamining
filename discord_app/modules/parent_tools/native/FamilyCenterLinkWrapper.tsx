// discord_app/modules/parent_tools/native/FamilyCenterLinkWrapper.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import showUserProfileActionSheetDefault from "../../user_profile/native/showUserProfileActionSheet.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

const require = fn;
const jsx = fn(21).jsx;
fn(4560);
let createStyles = { container: null };
createStyles = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  paddingTop: 14,
  paddingBottom: nativeDefault.space.PX_12,
  paddingHorizontal: nativeDefault.space.PX_12,
};
createStyles.container = createStyles;
let closure_4 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterLinkWrapper.tsx");

export default function FamilyCenterLinkRowWrapper(userId) {
  userId = userId.userId;
  let analyticsLocations;
  analyticsLocations = analyticsLocations(7162)().analyticsLocations;
  let tmp3 = null;
  if (undefined !== userId) {
    const obj = {
      style: tmp.container,
      onPress() {
        showUserProfileActionSheetDefault({
          userId,
          disableCalls: true,
          disableMessage: true,
          sourceAnalyticsLocations: analyticsLocations,
        });
      },
      children: userId.children,
    };
    tmp3 = jsx(userId(5123).PressableOpacity, {
      style: tmp.container,
      onPress() {
        showUserProfileActionSheetDefault({
          userId,
          disableCalls: true,
          disableMessage: true,
          sourceAnalyticsLocations: analyticsLocations,
        });
      },
      children: userId.children,
    });
  }
  return tmp3;
}
