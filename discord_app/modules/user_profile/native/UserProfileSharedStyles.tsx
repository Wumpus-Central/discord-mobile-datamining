// discord_app/modules/user_profile/native/UserProfileSharedStyles.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import useIsMobileVisualRefreshExperimentEnabledDefault from "../../themes/experiments/MobileVisualRefreshExperiment.tsx";
import ARBITRARY_LARGE_OFFSET from "Constants.tsx";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

({ AVATAR_CONTAINER_SIZE: obj1, AVATAR_CUSTOM_STATUS_GAP: c3, AVATAR_PADDING: c4, CARD_PADDING: c5, PROFILE_CONTENT_BOTTOM_PADDING: closure_6, PROFILE_SIDE_PADDING: error, PROFILE_TOP_LAYER_Z_INDEX: closure_8 } = ARBITRARY_LARGE_OFFSET);
let closure_9 = createCacheKey.createStyles((arg0) => {
  const obj = { width: closure_2, height: closure_2, borderRadius: closure_2, padding: closure_4, zIndex: 0 };
  obj[12] = { paddingHorizontal: closure_7, marginBottom: ThemesDefault.space.PX_16 };
  obj[13] = { rowGap: 16 };
  const radii = ThemesDefault.radii;
  obj[14] = { borderRadius: arg0 ? radii.md : radii.lg, padding: closure_5, borderWidth: 1, borderColor: ThemesDefault.colors.BORDER_MUTED };
  return obj;
});
const result = obj132.fileFinishedImporting("modules/user_profile/native/UserProfileSharedStyles.tsx");

export default function useSharedStyles() {
  return callback(useIsMobileVisualRefreshExperimentEnabledDefault("UserProfileSharedStyles"));
};