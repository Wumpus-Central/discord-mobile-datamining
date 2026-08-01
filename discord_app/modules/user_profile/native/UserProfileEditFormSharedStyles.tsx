// === Module 13722: styles ===

// Module 13722 (styles)
import ARBITRARY_LARGE_OFFSET from "ARBITRARY_LARGE_OFFSET";
import createCacheKey from "createCacheKey";

let ARBITRARY_LARGE_OFFSET;
let FLOATING_UPSELL_HEIGHT;
({ ARBITRARY_LARGE_OFFSET, FLOATING_UPSELL_HEIGHT } = ARBITRARY_LARGE_OFFSET);
let obj = { container: { flex: 1 }, bounceOffset: null, avatarContainer: null, formContainer: null, errorContainer: null, floatingUpsell: null };
obj = { position: "absolute", top: -ARBITRARY_LARGE_OFFSET, height: ARBITRARY_LARGE_OFFSET, right: 0, left: 0, backgroundColor: require("Themes").colors.BACKGROUND_SURFACE_HIGH };
obj[1] = obj;
obj[2] = { zIndex: 1 };
obj[3] = { marginTop: 16, padding: 16, borderRadius: require("Themes").radii.lg, rowGap: 20 };
obj[4] = { flex: 1, flexDirection: "row", justifyContent: "center" };
const obj1 = { marginTop: 16, padding: 16, borderRadius: require("Themes").radii.lg, rowGap: 20 };
obj[5] = { position: "absolute", marginBottom: require("Themes").space.PX_4, left: 0, right: 0, maxHeight: FLOATING_UPSELL_HEIGHT - 12 };
const styles = createCacheKey.createStyles(obj);
const obj2 = { position: "absolute", marginBottom: require("Themes").space.PX_4, left: 0, right: 0, maxHeight: FLOATING_UPSELL_HEIGHT - 12 };
const result = require("Themes").fileFinishedImporting("modules/user_profile/native/UserProfileEditFormSharedStyles.tsx");

export default styles;