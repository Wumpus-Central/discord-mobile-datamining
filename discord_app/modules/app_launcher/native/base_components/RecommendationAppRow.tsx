// === Module 11731: RecommendationAppRow ===

// Module 11731 (RecommendationAppRow)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1402 */;
import AppLauncherHomeScreen from "AppLauncherHomeScreen" /* 11708 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let application;
  let isFirstRow;
  let isLastRow;
  let onPress;
  let showsPromoted;
  const obj = react2;
  const cResult = obj.c(11);
  ({ application, onPress, isFirstRow, isLastRow, showsPromoted } = arg0);
  if (cResult[0] === application.bot) {
    if (cResult[1] === application.icon) {
      let tmp7;
      if (cResult[2] === application.id) {
        tmp7 = cResult[3];
      }
      if (cResult[4] === application) {
        if (cResult[5] === tmp7) {
          if (cResult[6] === (undefined !== isFirstRow && isFirstRow)) {
            if (cResult[7] === (undefined !== isLastRow && isLastRow)) {
              if (cResult[8] === onPress) {
                let tmp9;
                if (cResult[9] === (undefined !== showsPromoted && showsPromoted)) {
                  tmp9 = cResult[10];
                }
                return tmp9;
              }
            }
          }
        }
      }
      const tmp11 = jsx(AppLauncherHomeScreen.BaseAppRow, { application, iconSource: tmp7, onPress, isFirstRow: undefined !== isFirstRow && isFirstRow, isLastRow: undefined !== isLastRow && isLastRow, showsPromoted: undefined !== showsPromoted && showsPromoted });
      cResult[4] = application;
      cResult[5] = tmp7;
      cResult[6] = undefined !== isFirstRow && isFirstRow;
      cResult[7] = undefined !== isLastRow && isLastRow;
      cResult[8] = onPress;
      cResult[9] = undefined !== showsPromoted && showsPromoted;
      cResult[10] = tmp11;
      tmp9 = tmp11;
    }
  }
  const obj2 = AvatarUtilsDefault;
  const obj4 = { id: application.id, icon: application.icon, bot: application.bot, botIconFirst: true };
  const applicationIconSource = obj2.getApplicationIconSource(obj4);
  cResult[0] = application.bot;
  cResult[1] = application.icon;
  cResult[2] = application.id;
  cResult[3] = applicationIconSource;
  tmp7 = applicationIconSource;
}) : ((onPress) => {
  let application;
  let isFirstRow;
  ({ application, isFirstRow } = onPress);
  onPress = onPress.onPress;
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
  const obj = AvatarUtilsDefault;
  const obj2 = { id: application.id, icon: application.icon, bot: application.bot, botIconFirst: true };
  const iconSource = obj.getApplicationIconSource(obj2);
  return jsx(AppLauncherHomeScreen.BaseAppRow, { application, iconSource, onPress, isFirstRow, isLastRow, showsPromoted });
});
const result = size.fileFinishedImporting("modules/app_launcher/native/base_components/RecommendationAppRow.tsx");

export default tmp3;