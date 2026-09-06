// === Module 14603: UserProfileEditFormSharedStyles ===

// Module 14603 (UserProfileEditFormSharedStyles)
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 7208 */;
import createStyles from "createStyles" /* 4560 */;
import size from "module_2" /* 2 */;

({ ARBITRARY_LARGE_OFFSET, FLOATING_UPSELL_HEIGHT } = Constants);
let obj = { container: { flex: 1 }, bounceOffset: null, avatarContainer: null, formContainer: null, errorContainer: null, floatingUpsell: null };
const rect = { position: "absolute", top: -ARBITRARY_LARGE_OFFSET, height: ARBITRARY_LARGE_OFFSET, right: 0, left: 0, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
obj.bounceOffset = rect;
obj.avatarContainer = { zIndex: 1 };
obj = { marginTop: 16, padding: 16, borderRadius: nativeDefault.radii.lg, rowGap: 20 };
obj.formContainer = obj;
obj.errorContainer = { flex: 1, flexDirection: "row", justifyContent: "center" };
const rect1 = { position: "absolute", marginBottom: nativeDefault.space.PX_4, left: 0, right: 0, maxHeight: FLOATING_UPSELL_HEIGHT - 12 };
obj.floatingUpsell = rect1;
const styles = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileEditFormSharedStyles.tsx");

export default styles;