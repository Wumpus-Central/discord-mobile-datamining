// === Module 11785: FrecencyCommandsSection ===

// Module 11785 (FrecencyCommandsSection)
import react_native from "react-native" /* 17 */;
import Constants from "Constants" /* 1085 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 5076 */;
import ApplicationCommandTypes from "ApplicationCommandTypes" /* 7047 */;
import AppLauncherTypes from "AppLauncherTypes" /* 8961 */;
import AppDetailContent from "AppDetailContent" /* 11767 */;
import useFilterAndSortToOnlyFrecentCommandsDefault from "useFilterAndSortToOnlyFrecentCommands" /* 11786 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let context;

let metroImportDefault;
let metroRequire;
let obj2;
const View = react_native.View;
const AnalyticEvents = Constants.AnalyticEvents;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let obj = { container: obj2, header: { flexDirection: "row", alignItems: "center", gap: 4, marginBottom: 8 } };
obj2 = { marginBottom: AppDetailContent.BETWEEN_SECTIONS_MARGIN };
let closure_8 = createStyles.createStyles(obj);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((context) => {
  let allCommands;
  let items;
  let onPressCommand;
  let section;
  let obj = context(section[7]);
  const cResult = obj.c(30);
  context = context.context;
  ({ allCommands, onPressCommand } = context);
  const tmp = section;
  section = context.section;
  const onExecuteCommand = context.onExecuteCommand;
  const installOnDemand = context.installOnDemand;
  const sectionName = context.sectionName;
  const tmp3 = closure_8();
  if (cResult[0] === allCommands) {
    let tmp4;
    if (cResult[1] === context) {
      tmp4 = cResult[2];
    }
    const arr = onPressCommand(tmp[8])(tmp4);
    if (cResult[3] === arr.length) {
      let tmp6;
      let tmp7;
      if (cResult[4] === sectionName) {
        tmp6 = cResult[5];
        tmp7 = cResult[6];
      }
      const effect = onExecuteCommand.useEffect(tmp6, tmp7);
      if (0 === arr.length) {
        return null;
      } else {
        let tmp11;
        let tmp15;
        const _Symbol = Symbol;
        const container = tmp3.container;
        class R {
          constructor() {
            if (0 !== arr.length) {
              const obj = { num: arr.length, section_name: sectionName, location: AppLauncherTypes.AppLauncherLocations.APP_DETAIL };
              const trackWithMetadata = AppAnalyticsUtils.trackWithMetadata;
              const APP_LAUNCHER_FRECENTS_SEEN = AnalyticEvents.APP_LAUNCHER_FRECENTS_SEEN;
              AppAnalyticsUtils;
              trackWithMetadata(APP_LAUNCHER_FRECENTS_SEEN, obj);
            }
          }
        }
        if (cResult[8] !== tmp3.header) {
          class R {
            constructor() {
              if (0 !== arr.length) {
                const obj = { num: arr.length, section_name: sectionName, location: AppLauncherTypes.AppLauncherLocations.APP_DETAIL };
                const trackWithMetadata = AppAnalyticsUtils.trackWithMetadata;
                const APP_LAUNCHER_FRECENTS_SEEN = AnalyticEvents.APP_LAUNCHER_FRECENTS_SEEN;
                AppAnalyticsUtils;
                trackWithMetadata(APP_LAUNCHER_FRECENTS_SEEN, obj);
              }
            }
          }
          cResult[8] = tmp3.header;
          cResult[9] = tmp14;
          tmp11 = tmp14;
        } else {
          tmp11 = cResult[9];
        }
        if (cResult[10] === context) {
          if (cResult[11] === arr) {
            if (cResult[12] === installOnDemand) {
              if (cResult[13] === onExecuteCommand) {
                if (cResult[14] === onPressCommand) {
                  if (cResult[15] === section) {
                    if (cResult[16] === sectionName) {
                      tmp15 = cResult[17];
                    }
                    if (cResult[26] === tmp3.container) {
                      if (cResult[27] === tmp11) {
                        let tmp18;
                        if (cResult[28] === tmp15) {
                          tmp18 = cResult[29];
                        }
                        return tmp18;
                      }
                    }
                    const obj3 = { style: null, children: items };
                    class R {
                      constructor() {
                        if (0 !== arr.length) {
                          const obj = { num: arr.length, section_name: sectionName, location: AppLauncherTypes.AppLauncherLocations.APP_DETAIL };
                          const trackWithMetadata = AppAnalyticsUtils.trackWithMetadata;
                          const APP_LAUNCHER_FRECENTS_SEEN = AnalyticEvents.APP_LAUNCHER_FRECENTS_SEEN;
                          AppAnalyticsUtils;
                          trackWithMetadata(APP_LAUNCHER_FRECENTS_SEEN, obj);
                        }
                      }
                    }
                    items = [tmp11, tmp15];
                    const tmp21 = closure_7(installOnDemand, obj3);
                    cResult[26] = tmp3.container;
                    cResult[27] = tmp11;
                    cResult[28] = tmp15;
                    cResult[29] = tmp21;
                    tmp18 = tmp21;
                  }
                }
              }
            }
          }
        }
        if (cResult[18] === context) {
          if (cResult[19] === arr.length) {
            if (cResult[20] === installOnDemand) {
              if (cResult[21] === onExecuteCommand) {
                if (cResult[22] === onPressCommand) {
                  if (cResult[23] === section) {
                    let tmp16;
                    if (cResult[24] === sectionName) {
                      tmp16 = cResult[25];
                    }
                    const mapped = arr.map(tmp16);
                    cResult[10] = context;
                    class R {
                      constructor() {
                        if (0 !== arr.length) {
                          const obj = { num: arr.length, section_name: sectionName, location: AppLauncherTypes.AppLauncherLocations.APP_DETAIL };
                          const trackWithMetadata = AppAnalyticsUtils.trackWithMetadata;
                          const APP_LAUNCHER_FRECENTS_SEEN = AnalyticEvents.APP_LAUNCHER_FRECENTS_SEEN;
                          AppAnalyticsUtils;
                          trackWithMetadata(APP_LAUNCHER_FRECENTS_SEEN, obj);
                        }
                      }
                    }
                    cResult[12] = installOnDemand;
                    cResult[13] = onExecuteCommand;
                    cResult[14] = onPressCommand;
                    cResult[15] = section;
                    cResult[16] = sectionName;
                    cResult[17] = mapped;
                    tmp15 = mapped;
                  }
                }
              }
            }
          }
        }
        const fn = function w(command, arg1) {
          const obj = { command, onPressCommand, isFirstRow: 0 === arg1, isLastRow: arg1 === arr.length - 1, context, onExecuteCommand, installOnDemand, section, location: ApplicationCommandTypes.ApplicationCommandTriggerLocations.APP_LAUNCHER_APPLICATION_VIEW_FRECENCT, sectionName };
          const CommandRow = AppDetailContent.CommandRow;
          return metroRequire(CommandRow, obj, command.id);
        };
        cResult[18] = context;
        cResult[19] = arr.length;
        cResult[20] = installOnDemand;
        cResult[21] = onExecuteCommand;
        cResult[22] = onPressCommand;
        cResult[23] = section;
        cResult[24] = sectionName;
        cResult[25] = fn;
        tmp16 = fn;
      }
    }
    class R {
      constructor() {
        if (0 !== arr.length) {
          const obj = { num: arr.length, section_name: sectionName, location: AppLauncherTypes.AppLauncherLocations.APP_DETAIL };
          const trackWithMetadata = AppAnalyticsUtils.trackWithMetadata;
          const APP_LAUNCHER_FRECENTS_SEEN = AnalyticEvents.APP_LAUNCHER_FRECENTS_SEEN;
          AppAnalyticsUtils;
          trackWithMetadata(APP_LAUNCHER_FRECENTS_SEEN, obj);
        }
      }
    }
    const items1 = [arr.length, sectionName];
    cResult[3] = arr.length;
    cResult[4] = sectionName;
    cResult[5] = R;
    cResult[6] = items1;
    tmp7 = items1;
    tmp6 = R;
  }
  const obj4 = { context, commands: allCommands, limit: 5 };
  cResult[0] = allCommands;
  cResult[1] = context;
  cResult[2] = obj4;
  tmp4 = obj4;
}) : ((context) => {
  let Heading;
  let installOnDemand;
  let intl;
  let items1;
  let obj3;
  let onExecuteCommand;
  let onPressCommand;
  let section;
  let sectionName;
  context = context.context;
  ({ onPressCommand: importDefault, section: dependencyMap, onExecuteCommand: react, installOnDemand: View, sectionName } = context);
  const allCommands = context.allCommands;
  const tmp = closure_8();
  const arr = useFilterAndSortToOnlyFrecentCommandsDefault({ context, commands: allCommands, limit: 5 });
  const items = [arr.length, sectionName];
  const effect = react.useEffect(() => {
    if (0 !== arr.length) {
      const obj = { num: arr.length, section_name: sectionName, location: AppLauncherTypes.AppLauncherLocations.APP_DETAIL };
      const trackWithMetadata = AppAnalyticsUtils.trackWithMetadata;
      const APP_LAUNCHER_FRECENTS_SEEN = AnalyticEvents.APP_LAUNCHER_FRECENTS_SEEN;
      AppAnalyticsUtils;
      trackWithMetadata(APP_LAUNCHER_FRECENTS_SEEN, obj);
    }
  }, items);
  let tmp4 = null;
  if (0 !== arr.length) {
    let obj = { style: tmp.container, children: items1 };
    const obj2 = { style: tmp.header, children: arr(Heading, obj3) };
    obj3 = { variant: "text-md/medium", color: "text-default", children: intl.string(context(1126).t.acSE0h) };
    Heading = context(4892).Heading;
    intl = context(1126).intl;
    items1 = [
      arr(View, obj2),
      arr.map((command, index) => {
          const obj = { command, onPressCommand: importDefault, isFirstRow: 0 === index, isLastRow: index === arr.length - 1, context, onExecuteCommand: react, installOnDemand: View, section: dependencyMap, location: ApplicationCommandTypes.ApplicationCommandTriggerLocations.APP_LAUNCHER_APPLICATION_VIEW_FRECENCT, sectionName };
          const CommandRow = AppDetailContent.CommandRow;
          return metroRequire(CommandRow, obj, command.id);
        })
    ];
    tmp4 = closure_7(View, obj);
  }
  return tmp4;
});
const result = size.fileFinishedImporting("modules/app_launcher/native/screens/application_view/app/FrecencyCommandsSection.tsx");

export default tmp3;