// discord_app/modules/app_launcher/native/base_components/RecommendationAppRow.tsx
import "noop";
import { jsx } from "jsxProd";
import { getAvatarURL } from "../../../../utils/AvatarUtils.tsx";
import { AppRowLabel } from "../screens/home/AppLauncherHomeScreen.tsx";

const require = arg1;
const result = require("getAvatarURL").fileFinishedImporting("modules/app_launcher/native/base_components/RecommendationAppRow.tsx");

export default function RecommendationAppRow(onPress) {
  let application;
  let isFirstRow;
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
  let obj = getAvatarURL;
  obj = { id: application.id, icon: application.icon, bot: application.bot, botIconFirst: true };
  const iconSource = obj.getApplicationIconSource(obj);
  return jsx(AppRowLabel /* AppRowLabel */.BaseAppRow, { application, iconSource, onPress: onPress.onPress, isFirstRow, isLastRow, showsPromoted });
};