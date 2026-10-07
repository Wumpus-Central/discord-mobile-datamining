// === Module 11785: FrecencyCommandsSection ===

// Module 11785 (FrecencyCommandsSection)
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 5076 */;
import ApplicationCommandTypes from "ApplicationCommandTypes" /* 7047 */;
import AppLauncherTypes from "AppLauncherTypes" /* 8961 */;
import AppDetailContent from "AppDetailContent" /* 11767 */;
import useFilterAndSortToOnlyFrecentCommandsDefault from "useFilterAndSortToOnlyFrecentCommands" /* 11786 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const AnalyticEvents = fn(1085).AnalyticEvents;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4896);
let obj2 = { container: { marginBottom: fn(11767).BETWEEN_SECTIONS_MARGIN }, header: { flexDirection: "row", alignItems: "center", gap: 4, marginBottom: 8 } };
let closure_8 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { marginBottom: fn(11767).BETWEEN_SECTIONS_MARGIN };
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_launcher/native/screens/application_view/app/FrecencyCommandsSection.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((context) => {
  const cResult = context(section[7]).c(30);
  context = context.context;
  ({ allCommands, onPressCommand } = context);
  section = context.section;
  const onExecuteCommand = context.onExecuteCommand;
  const installOnDemand = context.installOnDemand;
  const sectionName = context.sectionName;
  const tmp3 = closure_8();
  if (cResult[0] === allCommands) {
    if (cResult[1] === context) {
      let tmp4 = cResult[2];
    }
    const arr = onPressCommand(tmp[8])(tmp4);
    if (cResult[3] === arr.length) {
      if (cResult[4] === sectionName) {
        let tmp6 = cResult[5];
        let tmp7 = cResult[6];
      }
      const effect = onExecuteCommand.useEffect(tmp6, tmp7);
      if (0 === arr.length) {
        return null;
      } else {
        const _Symbol = Symbol;
        const container = tmp3.container;
        class R {
          constructor() {
            if (0 !== closure_6.length) {
              tmp = closure_0;
              tmp2 = closure_2;
              obj = closure_0(closure_2[9]);
              tmp3 = AnalyticEvents;
              obj1 = { num: null, section_name: null, location: null };
              obj1.num = arr.length;
              tmp4 = sectionName;
              obj1.section_name = sectionName;
              obj1.location = closure_0(closure_2[10]).AppLauncherLocations.APP_DETAIL;
              trackWithMetadataResult = obj.trackWithMetadata(AnalyticEvents.APP_LAUNCHER_FRECENTS_SEEN, obj1);
            }
            return;
          }
        }
        if (cResult[8] !== tmp3.header) {
          let obj2 = { style: tmp3.header, children: tmp10 };
          class R {
            constructor() {
              if (0 !== closure_6.length) {
                tmp = closure_0;
                tmp2 = closure_2;
                obj = closure_0(closure_2[9]);
                tmp3 = AnalyticEvents;
                obj1 = { num: null, section_name: null, location: null };
                obj1.num = arr.length;
                tmp4 = sectionName;
                obj1.section_name = sectionName;
                obj1.location = closure_0(closure_2[10]).AppLauncherLocations.APP_DETAIL;
                trackWithMetadataResult = obj.trackWithMetadata(AnalyticEvents.APP_LAUNCHER_FRECENTS_SEEN, obj1);
              }
              return;
            }
          }
          cResult[8] = tmp3.header;
          cResult[9] = tmp14;
          let tmp11 = tmp14;
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
                      if (cResult[26] === tmp3.container) {
                        if (cResult[27] === tmp11) {
                          if (cResult[28] === tmp15) {
                            let tmp19 = cResult[29];
                          }
                          return tmp19;
                        }
                      }
                      const obj3 = { style: null, children: null };
                      class R {
                        constructor() {
                          if (0 !== closure_6.length) {
                            tmp = closure_0;
                            tmp2 = closure_2;
                            obj = closure_0(closure_2[9]);
                            tmp3 = AnalyticEvents;
                            obj1 = { num: null, section_name: null, location: null };
                            obj1.num = arr.length;
                            tmp4 = sectionName;
                            obj1.section_name = sectionName;
                            obj1.location = closure_0(closure_2[10]).AppLauncherLocations.APP_DETAIL;
                            trackWithMetadataResult = obj.trackWithMetadata(AnalyticEvents.APP_LAUNCHER_FRECENTS_SEEN, obj1);
                          }
                          return;
                        }
                      }
                      const items = [tmp11, cResult[17]];
                      obj3.children = items;
                      const tmp22 = closure_7(installOnDemand, obj3);
                      cResult[26] = tmp3.container;
                      cResult[27] = tmp11;
                      cResult[28] = cResult[17];
                      cResult[29] = tmp22;
                      tmp19 = tmp22;
                    }
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
                    if (cResult[24] === sectionName) {
                      let tmp16 = cResult[25];
                    }
                    const mapped = arr.map(tmp16);
                    cResult[10] = context;
                    class R {
                      constructor() {
                        if (0 !== closure_6.length) {
                          tmp = closure_0;
                          tmp2 = closure_2;
                          obj = closure_0(closure_2[9]);
                          tmp3 = AnalyticEvents;
                          obj1 = { num: null, section_name: null, location: null };
                          obj1.num = arr.length;
                          tmp4 = sectionName;
                          obj1.section_name = sectionName;
                          obj1.location = closure_0(closure_2[10]).AppLauncherLocations.APP_DETAIL;
                          trackWithMetadataResult = obj.trackWithMetadata(AnalyticEvents.APP_LAUNCHER_FRECENTS_SEEN, obj1);
                        }
                        return;
                      }
                    }
                    cResult[12] = installOnDemand;
                    cResult[13] = onExecuteCommand;
                    cResult[14] = onPressCommand;
                    cResult[15] = section;
                    cResult[16] = sectionName;
                    cResult[17] = mapped;
                  }
                }
              }
            }
          }
        }
        const fn = function w(command, arg1) {
          return timestampProducer(AppDetailContent.CommandRow, { command, onPressCommand, isFirstRow: 0 === arg1, isLastRow: arg1 === arr.length - 1, context, onExecuteCommand, installOnDemand, section, location: ApplicationCommandTypes.ApplicationCommandTriggerLocations.APP_LAUNCHER_APPLICATION_VIEW_FRECENCT, sectionName }, command.id);
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
        if (0 !== closure_6.length) {
          tmp = closure_0;
          tmp2 = closure_2;
          obj = closure_0(closure_2[9]);
          tmp3 = AnalyticEvents;
          obj1 = { num: null, section_name: null, location: null };
          obj1.num = arr.length;
          tmp4 = sectionName;
          obj1.section_name = sectionName;
          obj1.location = closure_0(closure_2[10]).AppLauncherLocations.APP_DETAIL;
          trackWithMetadataResult = obj.trackWithMetadata(AnalyticEvents.APP_LAUNCHER_FRECENTS_SEEN, obj1);
        }
        return;
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
  let obj = context(section[7]);
  tmp = section;
}) : ((commands) => {
  const context = commands.context;
  ({ onPressCommand: importDefault, section: dependencyMap, onExecuteCommand: noop, installOnDemand: View, sectionName } = commands);
  const tmp = closure_8();
  const arr = useFilterAndSortToOnlyFrecentCommandsDefault({ context, commands: commands.allCommands, limit: 5 });
  const items = [arr.length, sectionName];
  const effect = noop.useEffect(() => {
    if (0 !== arr.length) {
      const obj2 = { num: arr.length, section_name: sectionName, location: AppLauncherTypes.AppLauncherLocations.APP_DETAIL };
      AppAnalyticsUtils.trackWithMetadata(AnalyticEvents.APP_LAUNCHER_FRECENTS_SEEN, obj2);
    }
  }, items);
  let tmp4 = null;
  if (0 !== arr.length) {
    let obj = { style: tmp.container, children: null };
    let obj2 = { style: tmp.header, children: null };
    const obj3 = { variant: "text-md/medium", color: "text-default", children: null };
    const intl = context(1126).intl;
    obj3.children = intl.string(context(1126).t.acSE0h);
    obj2.children = arr(context(4892).Heading, obj3);
    const items1 = [arr(View, obj2), arr.map((command, index) => timestampProducer(AppDetailContent.CommandRow, { command, onPressCommand, isFirstRow: 0 === index, isLastRow: index === arr.length - 1, context, onExecuteCommand, installOnDemand, section, location: ApplicationCommandTypes.ApplicationCommandTriggerLocations.APP_LAUNCHER_APPLICATION_VIEW_FRECENCT, sectionName }, command.id))];
    obj.children = items1;
    tmp4 = closure_7(View, obj);
  }
  return tmp4;
});