// discord_app/modules/home_drawer/native/subtitles/useSubtitleStyles.tsx
import set from "../../../../../_runtime/00002_set.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

const styles = createCacheKey.createStyles({
  subtitleRow: { flexDirection: "row", alignItems: "center" },
  subtitleText: { flexShrink: 1 },
  channelIcon: { marginRight: 2 },
  unreadChannelIcon: { marginLeft: 2, marginRight: 2 },
});
const result = set.fileFinishedImporting("modules/home_drawer/native/subtitles/useSubtitleStyles.tsx");

export const useSubtitleStyles = styles;
