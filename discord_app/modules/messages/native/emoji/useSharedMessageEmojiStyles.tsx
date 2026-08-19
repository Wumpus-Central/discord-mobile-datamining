// discord_app/modules/messages/native/emoji/useSharedMessageEmojiStyles.tsx
import obj132 from "../../../../../_runtime/00002_obj132.js";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

const obj = { width: 40, height: 40, marginRight: 12, borderRadius: ThemesDefault.radii.sm, resizeMode: "contain" };
obj[3] = obj;
obj[4] = { marginTop: ThemesDefault.space.PX_16, marginBottom: ThemesDefault.space.PX_16, marginLeft: 0, backgroundColor: ThemesDefault.colors.BORDER_SUBTLE, height: 0.5 };
obj[5] = { marginTop: 16 };
const styles = createCacheKey.createStyles(obj);
const result = obj132.fileFinishedImporting("modules/messages/native/emoji/useSharedMessageEmojiStyles.tsx");

export const useSharedMessageEmojiStyles = styles;