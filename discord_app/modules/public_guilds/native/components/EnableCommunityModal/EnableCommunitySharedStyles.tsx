// discord_app/modules/public_guilds/native/components/EnableCommunityModal/EnableCommunitySharedStyles.tsx
import _mod17 from "../../../../../../_runtime/metro/00017__.js";
import createStyles from "../../../../../design/components/Styles/native/createStyles.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

const Platform = _mod17.Platform;
const styles = createStyles.createStyles({
  content: { alignItems: "center", paddingLeft: 16, paddingRight: 16, marginTop: 30 },
  header: { marginTop: 12, textAlign: "center" },
  description: { marginBottom: 16, marginTop: 8, textAlign: "center" },
  formHint: { paddingHorizontal: 16 },
  communityRequirementSatisfiedFormWrapper: { position: "relative" },
  communityRequirementSatisfiedFormPressable: { position: "absolute", width: 80, top: 0, right: 0, height: "100%" },
});
const result = size.fileFinishedImporting(
  "modules/public_guilds/native/components/EnableCommunityModal/EnableCommunitySharedStyles.tsx",
);

export const useEnableCommunitySharedStyles = styles;
