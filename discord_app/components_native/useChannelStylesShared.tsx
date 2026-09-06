// discord_app/components_native/useChannelStylesShared.tsx
import nativeDefault from "../../discord_common/js/packages/tokens/native.tsx";
import createStyles from "../design/components/Styles/native/createStyles.tsx";
import size from "../../_runtime/metro/00002__.js";

let obj = { container: { flex: 1 }, background: null };
obj = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj.background = obj;
const styles = createStyles.createStyles(obj);
const obj1 = {
  flex: { flex: 1 },
  scene: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW },
  callPTTButton: { flexGrow: 0 },
  header: { shadowColor: "transparent" },
  forumChannelStyles: null,
  headerLeftContainer: null,
  headerTitleContainer: null,
  headerRightContainer: null,
};
const obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj1.forumChannelStyles = {
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  borderBottomColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
};
obj1.headerLeftContainer = { position: "relative" };
obj1.headerTitleContainer = { position: "relative", marginLeft: 0, marginRight: 0, left: 0, right: 0, flex: 1 };
obj1.headerRightContainer = { position: "relative", flexBasis: "auto", flexGrow: 0, flexShrink: 0 };
const styles1 = createStyles.createStyles(obj1);
const obj4 = {
  navbarLeft: { marginLeft: 4, marginRight: 4 },
  menuIcon: { marginHorizontal: 2 },
  mentionBadge: null,
  mentionBadgeAlternate: null,
};
const rect = { bottom: 5, right: 0, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj4.mentionBadge = rect;
const rect1 = { bottom: 5, right: 0, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
obj4.mentionBadgeAlternate = rect1;
const styles2 = createStyles.createStyles(obj4);
const result = size.fileFinishedImporting("components_native/useChannelStylesShared.tsx");

export const useChannelStylesShared = styles;
export const useChannelStyles = styles1;
export const useMenuButtonStyles = styles2;
