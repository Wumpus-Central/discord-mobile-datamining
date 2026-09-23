// === Module 12426: RecommendationAppRow ===

// Module 12426 (RecommendationAppRow)
import AvatarUtilsDefault from "AvatarUtils" /* 1397 */;
import AppLauncherHomeScreen from "AppLauncherHomeScreen" /* 12416 */;
import noop from "module_19" /* 19 */;

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
  const iconSource = AvatarUtilsDefault.getApplicationIconSource({ id: application.id, icon: application.icon, bot: application.bot, botIconFirst: true });
  return jsx(AppLauncherHomeScreen.BaseAppRow, { application, iconSource, onPress: onPress.onPress, isFirstRow, isLastRow, showsPromoted });
};