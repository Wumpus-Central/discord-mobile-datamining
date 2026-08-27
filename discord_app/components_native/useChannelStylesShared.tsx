// === Module 10880: styles ===

// Module 10880 (styles)
import set from "set" /* 2 */;
import ThemesDefault from "Themes" /* 712 */;
import createCacheKey from "createCacheKey" /* 4445 */;

let obj = { container: { flex: 1 }, background: null };
obj = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW };
obj[1] = obj;
const styles = createCacheKey.createStyles(obj);
const obj1 = { flex: { flex: 1 }, scene: { flex: 1, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW }, callPTTButton: { flexGrow: 0 }, header: { shadowColor: "transparent" }, forumChannelStyles: null, headerLeftContainer: null, headerTitleContainer: null, headerRightContainer: null };
const obj2 = { flex: 1, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW };
obj1[4] = { backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH, borderBottomColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH };
obj1[5] = { position: "relative" };
obj1[6] = { position: "relative", marginLeft: 0, marginRight: 0, left: 0, right: 0, flex: 1 };
obj1[7] = { position: "relative", flexBasis: "auto", flexGrow: 0, flexShrink: 0 };
const styles1 = createCacheKey.createStyles(obj1);
const obj4 = { navbarLeft: { marginLeft: 4, marginRight: 4 }, menuIcon: { marginHorizontal: 2 }, mentionBadge: null, mentionBadgeAlternate: null };
const obj3 = { backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH, borderBottomColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH };
obj4[2] = { bottom: 5, right: 0, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW };
const obj5 = { bottom: 5, right: 0, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW };
obj4[3] = { bottom: 5, right: 0, backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH };
const styles2 = createCacheKey.createStyles(obj4);
const obj6 = { bottom: 5, right: 0, backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH };
const result = set.fileFinishedImporting("components_native/useChannelStylesShared.tsx");

export const useChannelStylesShared = styles;
export const useChannelStyles = styles1;
export const useMenuButtonStyles = styles2;