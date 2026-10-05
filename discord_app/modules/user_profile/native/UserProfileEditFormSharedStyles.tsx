// discord_app/modules/user_profile/native/UserProfileEditFormSharedStyles.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "Constants.tsx";
import createStyles_mod from "../../../design/components/Styles/native/createStyles.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let ARBITRARY_LARGE_OFFSET;
let FLOATING_UPSELL_HEIGHT;
let rect;
let rect1;
({ ARBITRARY_LARGE_OFFSET, FLOATING_UPSELL_HEIGHT } = Constants);
let createStyles = createStyles_mod;
const obj = {
  container: { flex: 1 },
  bounceOffset: rect,
  avatarContainer: { zIndex: 1 },
  formContainer: { marginTop: 16, padding: 16, borderRadius: nativeDefault.radii.lg, rowGap: 20 },
  errorContainer: { flex: 1, flexDirection: "row", justifyContent: "center" },
  floatingUpsell: rect1,
};
rect = {
  position: "absolute",
  top: -ARBITRARY_LARGE_OFFSET,
  height: ARBITRARY_LARGE_OFFSET,
  right: 0,
  left: 0,
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
};
createStyles = createStyles.createStyles;
({ marginTop: 16, padding: 16, borderRadius: nativeDefault.radii.lg, rowGap: 20 });
rect1 = {
  position: "absolute",
  marginBottom: nativeDefault.space.PX_4,
  left: 0,
  right: 0,
  maxHeight: FLOATING_UPSELL_HEIGHT - 12,
};
const styles = createStyles(obj);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileEditFormSharedStyles.tsx");

export default styles;
