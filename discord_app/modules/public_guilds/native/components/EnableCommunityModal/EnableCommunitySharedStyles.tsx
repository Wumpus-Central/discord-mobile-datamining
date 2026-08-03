// === Module 16594: styles ===

// Module 16594 (styles)
import { Platform } from "get ActivityIndicator";
import createCacheKey from "createCacheKey";

const styles = createCacheKey.createStyles({ content: { alignItems: "center", paddingLeft: 16, paddingRight: 16, marginTop: 30 }, header: { marginTop: 12, textAlign: "center" }, description: { marginBottom: 16, marginTop: 8, textAlign: "center" }, formHint: { paddingHorizontal: 16 }, communityRequirementSatisfiedFormWrapper: { position: "relative" }, communityRequirementSatisfiedFormPressable: { position: "absolute", width: 80, top: 0, right: 0, height: "100%" } });
const result = require("set").fileFinishedImporting("modules/public_guilds/native/components/EnableCommunityModal/EnableCommunitySharedStyles.tsx");

export const useEnableCommunitySharedStyles = styles;