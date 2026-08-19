// === Module 11270: RecommendationAppRow ===

// Module 11270 (RecommendationAppRow)
import noopAll from "noop" /* 19 */;
import getAvatarURLDefault from "getAvatarURL" /* 1435 */;
import AppRowLabel from "AppRowLabel" /* 11258 */;
import { jsx } from "jsxProd" /* 21 */;

require = fn;
noopAll;
const result = require("obj132").fileFinishedImporting("modules/app_launcher/native/base_components/RecommendationAppRow.tsx");

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
  return jsx(AppRowLabel.BaseAppRow, { application, iconSource, onPress: onPress.onPress, isFirstRow, isLastRow, showsPromoted });
};