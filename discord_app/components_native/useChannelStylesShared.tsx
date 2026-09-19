// === Module 11584: useChannelStylesShared ===

// Module 11584 (useChannelStylesShared)
import nativeDefault from "native" /* 576 */;
import createStyles_mod from "createStyles" /* 4756 */;
import size from "module_2" /* 2 */;

let createStyles = createStyles_mod;
const obj = { container: { flex: 1 }, background: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW } };
const styles = createStyles.createStyles(obj);
let createStyles = createStyles_mod;
const obj3 = { flex: { flex: 1 }, scene: null, callPTTButton: null, header: null, forumChannelStyles: null, headerLeftContainer: null, headerTitleContainer: null, headerRightContainer: null };
const obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj3.scene = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj3.callPTTButton = { flexGrow: 0 };
obj3.header = { shadowColor: "transparent" };
const obj4 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj3.forumChannelStyles = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderBottomColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
obj3.headerLeftContainer = { position: "relative" };
obj3.headerTitleContainer = { position: "relative", marginLeft: 0, marginRight: 0, left: 0, right: 0, flex: 1 };
obj3.headerRightContainer = { position: "relative", flexBasis: "auto", flexGrow: 0, flexShrink: 0 };
const styles1 = createStyles.createStyles(obj3);
let createStyles = createStyles_mod;
const obj6 = { navbarLeft: { marginLeft: 4, marginRight: 4 }, menuIcon: { marginHorizontal: 2 }, mentionBadge: null, mentionBadgeAlternate: null };
const rect = { bottom: 5, right: 0, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj6.mentionBadge = rect;
const rect1 = { bottom: 5, right: 0, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
obj6.mentionBadgeAlternate = rect1;
const styles2 = createStyles.createStyles(obj6);
const result = size.fileFinishedImporting("components_native/useChannelStylesShared.tsx");

export const useChannelStylesShared = styles;
export const useChannelStyles = styles1;
export const useMenuButtonStyles = styles2;