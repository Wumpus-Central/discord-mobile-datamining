// === Module 14496: styles ===

// Module 14496 (styles)
import set from "set" /* 2 */;
import ThemesDefault from "Themes" /* 709 */;
import ARBITRARY_LARGE_OFFSET from "ARBITRARY_LARGE_OFFSET" /* 6010 */;
import createCacheKey from "createCacheKey" /* 4478 */;

({ ARBITRARY_LARGE_OFFSET, FLOATING_UPSELL_HEIGHT } = ARBITRARY_LARGE_OFFSET);
let obj = { container: { flex: 1 }, bounceOffset: null, avatarContainer: null, formContainer: null, errorContainer: null, floatingUpsell: null };
obj = { position: "absolute", top: -ARBITRARY_LARGE_OFFSET, height: ARBITRARY_LARGE_OFFSET, right: 0, left: 0, backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH };
obj[1] = obj;
obj[2] = { zIndex: 1 };
obj[3] = { marginTop: 16, padding: 16, borderRadius: ThemesDefault.radii.lg, rowGap: 20 };
obj[4] = { flex: 1, flexDirection: "row", justifyContent: "center" };
const obj1 = { marginTop: 16, padding: 16, borderRadius: ThemesDefault.radii.lg, rowGap: 20 };
obj[5] = { position: "absolute", marginBottom: ThemesDefault.space.PX_4, left: 0, right: 0, maxHeight: FLOATING_UPSELL_HEIGHT - 12 };
const styles = createCacheKey.createStyles(obj);
const obj2 = { position: "absolute", marginBottom: ThemesDefault.space.PX_4, left: 0, right: 0, maxHeight: FLOATING_UPSELL_HEIGHT - 12 };
const result = set.fileFinishedImporting("modules/user_profile/native/UserProfileEditFormSharedStyles.tsx");

export default styles;