// discord_app/modules/app_launcher/native/base_components/RecommendationAppRow.tsx
import AvatarUtilsDefault from "../../../../utils/AvatarUtils.tsx";
import AppLauncherHomeScreen from "../screens/home/AppLauncherHomeScreen.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_launcher/native/base_components/RecommendationAppRow.tsx");

export default function RecommendationAppRow(onPress) {
  ({ application, isFirstRow } = onPress);
  if (isFirstRow === undefined) {
    isFirstRow = false;
  }
  let isLastRow = onPress.isLastRow;
  if (isLastRow === undefined) {
    isLastRow = false;
  }
  let showsPromoted = onPress.showsPromoted;
  if (showsPromoted === undefined) {
    showsPromoted = false;
  }
  const obj = { id: application.id, icon: application.icon, bot: application.bot, botIconFirst: true };
  const iconSource = obj.getApplicationIconSource(obj);
  return jsx(AppLauncherHomeScreen.BaseAppRow, {
    application,
    iconSource,
    onPress: onPress.onPress,
    isFirstRow,
    isLastRow,
    showsPromoted,
  });
}
