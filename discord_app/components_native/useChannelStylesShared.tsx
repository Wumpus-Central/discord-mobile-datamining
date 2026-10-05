// discord_app/components_native/useChannelStylesShared.tsx
import nativeDefault from "../../discord_common/js/packages/tokens/native.tsx";
import createStyles_mod from "../design/components/Styles/native/createStyles.tsx";
import size from "../../_runtime/metro/00002__.js";

let rect;
let rect1;
let createStyles = createStyles_mod;
const obj = { container: { flex: 1 }, background: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW } };
({ backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW });
const styles = createStyles.createStyles(obj);
createStyles = createStyles_mod;
createStyles = createStyles.createStyles;
const obj3 = {
  flex: { flex: 1 },
  scene: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW },
  callPTTButton: { flexGrow: 0 },
  header: { shadowColor: "transparent" },
  forumChannelStyles: {
    backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
    borderBottomColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  },
  headerLeftContainer: { position: "relative" },
  headerTitleContainer: { position: "relative", marginLeft: 0, marginRight: 0, left: 0, right: 0, flex: 1 },
  headerRightContainer: { position: "relative", flexBasis: "auto", flexGrow: 0, flexShrink: 0 },
};
({ flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW });
({
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  borderBottomColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
});
const styles1 = createStyles(obj3);
createStyles = createStyles_mod;
const obj6 = {
  navbarLeft: { marginLeft: 4, marginRight: 4 },
  menuIcon: { marginHorizontal: 2 },
  mentionBadge: rect,
  mentionBadgeAlternate: rect1,
};
rect = { bottom: 5, right: 0, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
const createStyles2 = createStyles.createStyles;
rect1 = { bottom: 5, right: 0, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
const styles2 = createStyles2(obj6);
const result = size.fileFinishedImporting("components_native/useChannelStylesShared.tsx");

export const useChannelStylesShared = styles;
export const useChannelStyles = styles1;
export const useMenuButtonStyles = styles2;
