// === Module 16886: styles ===

// Module 16886 (styles)
import obj132 from "obj132" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import createCacheKey from "createCacheKey" /* 4661 */;

const Platform = get_ActivityIndicator.Platform;
const styles = createCacheKey.createStyles({ content: { alignItems: "center", paddingLeft: 16, paddingRight: 16, marginTop: 30 }, header: { marginTop: 12, textAlign: "center" }, description: { marginBottom: 16, marginTop: 8, textAlign: "center" }, formHint: { paddingHorizontal: 16 }, communityRequirementSatisfiedFormWrapper: { position: "relative" }, communityRequirementSatisfiedFormPressable: { position: "absolute", width: 80, top: 0, right: 0, height: "100%" } });
const result = obj132.fileFinishedImporting("modules/public_guilds/native/components/EnableCommunityModal/EnableCommunitySharedStyles.tsx");

export const useEnableCommunitySharedStyles = styles;