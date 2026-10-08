// === Module 11797: RecommendationAppRow ===

// Module 11797 (RecommendationAppRow)
import c from "c" /* 576 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1414 */;
import AppLauncherHomeScreen from "AppLauncherHomeScreen" /* 11773 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_launcher/native/base_components/RecommendationAppRow.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function RecommendationAppRow(arg0) {
  const cResult = c.c(11);
  ({ application, onPress, isFirstRow, isLastRow, showsPromoted } = arg0);
  if (cResult[0] === application.bot) {
    if (cResult[1] === application.icon) {
      if (cResult[2] === application.id) {
        let tmp7 = cResult[3];
      }
      if (cResult[4] === application) {
        if (cResult[5] === tmp7) {
          if (cResult[6] === tmp4) {
            if (cResult[7] === tmp5) {
              if (cResult[8] === onPress) {
                if (cResult[9] === tmp6) {
                  let tmp9 = cResult[10];
                }
                return tmp9;
              }
            }
          }
        }
      }
      const obj3 = { application, iconSource: tmp7, onPress, isFirstRow: tmp4, isLastRow: tmp5, showsPromoted: tmp6 };
      const tmp11 = jsx(AppLauncherHomeScreen.BaseAppRow, { application, iconSource: tmp7, onPress, isFirstRow: tmp4, isLastRow: tmp5, showsPromoted: tmp6 });
      cResult[4] = application;
      cResult[5] = tmp7;
      cResult[6] = tmp4;
      cResult[7] = tmp5;
      cResult[8] = onPress;
      cResult[9] = tmp6;
      cResult[10] = tmp11;
      tmp9 = tmp11;
    }
  }
  const applicationIconSource = AvatarUtilsDefault.getApplicationIconSource({ id: application.id, icon: application.icon, bot: application.bot, botIconFirst: true });
  cResult[0] = application.bot;
  cResult[1] = application.icon;
  cResult[2] = application.id;
  cResult[3] = applicationIconSource;
  tmp7 = applicationIconSource;
  const obj4 = { id: application.id, icon: application.icon, bot: application.bot, botIconFirst: true };
}) : (function RecommendationAppRow(onPress) {
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
});