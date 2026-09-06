// discord_app/modules/home_drawer/native/subtitles/useSubtitleStyles.tsx
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const styles = createStyles.createStyles({
  subtitleRow: { flexDirection: "row", alignItems: "center" },
  subtitleText: { flexShrink: 1 },
  channelIcon: { marginRight: 2 },
  unreadChannelIcon: { marginLeft: 2, marginRight: 2 },
});
const result = size.fileFinishedImporting("modules/home_drawer/native/subtitles/useSubtitleStyles.tsx");

export const useSubtitleStyles = styles;
