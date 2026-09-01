// discord_app/modules/messages/native/emoji/useSharedMessageEmojiStyles.tsx
import set from "../../../../../_runtime/00002_set.js";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

let obj = {
  emojiContainer: { flexDirection: "row", alignItems: "center" },
  emojiDescriptionWrapper: { flexDirection: "column", flex: 1 },
  emojiWrapper: { marginLeft: -8, marginRight: 8 },
  emojiIcon: null,
  divider: null,
  ctaButton: null,
};
obj = { width: 40, height: 40, marginRight: 12, borderRadius: ThemesDefault.radii.sm, resizeMode: "contain" };
obj[3] = obj;
obj[4] = {
  marginTop: ThemesDefault.space.PX_16,
  marginBottom: ThemesDefault.space.PX_16,
  marginLeft: 0,
  backgroundColor: ThemesDefault.colors.BORDER_SUBTLE,
  height: 0.5,
};
obj[5] = { marginTop: 16 };
const styles = createCacheKey.createStyles(obj);
const obj1 = {
  marginTop: ThemesDefault.space.PX_16,
  marginBottom: ThemesDefault.space.PX_16,
  marginLeft: 0,
  backgroundColor: ThemesDefault.colors.BORDER_SUBTLE,
  height: 0.5,
};
const result = set.fileFinishedImporting("modules/messages/native/emoji/useSharedMessageEmojiStyles.tsx");

export const useSharedMessageEmojiStyles = styles;
