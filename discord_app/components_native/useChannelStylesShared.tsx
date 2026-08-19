// discord_app/components_native/useChannelStylesShared.tsx
import obj132 from "../../_runtime/00002_obj132.js";
import ThemesDefault from "../../discord_common/js/packages/tokens/native.tsx";
import createCacheKey from "../design/components/Styles/native/createStyles.tsx";

const obj = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW };
obj[1] = obj;
const styles = createCacheKey.createStyles(obj);
const obj1 = { flex: { flex: 1 }, scene: { flex: 1, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW }, callPTTButton: { flexGrow: 0 }, header: { shadowColor: "transparent" }, forumChannelStyles: null, headerLeftContainer: null, headerTitleContainer: null, headerRightContainer: null };
obj1[4] = { backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH, borderBottomColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH };
obj1[5] = { position: "relative" };
obj1[6] = { position: "relative", marginLeft: 0, marginRight: 0, left: 0, right: 0, flex: 1 };
obj1[7] = { position: "relative", flexBasis: "auto", flexGrow: 0, flexShrink: 0 };
const styles1 = createCacheKey.createStyles(obj1);
const obj4 = { navbarLeft: { marginLeft: 4, marginRight: 4 }, menuIcon: { marginHorizontal: 2 }, mentionBadge: null, mentionBadgeAlternate: null };
obj4[2] = { bottom: 5, right: 0, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW };
obj4[3] = { bottom: 5, right: 0, backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH };
const styles2 = createCacheKey.createStyles(obj4);
const result = obj132.fileFinishedImporting("components_native/useChannelStylesShared.tsx");

export const useChannelStylesShared = styles;
export const useChannelStyles = styles1;
export const useMenuButtonStyles = styles2;