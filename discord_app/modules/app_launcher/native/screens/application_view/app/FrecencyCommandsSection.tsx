// === Module 12177: FrecencyCommandsSection ===

// Module 12177 (FrecencyCommandsSection)
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 4754 */;
import ApplicationCommandTypes from "ApplicationCommandTypes" /* 7537 */;
import AppLauncherTypes from "AppLauncherTypes" /* 9441 */;
import AppDetailContent from "AppDetailContent" /* 12159 */;
import useFilterAndSortToOnlyFrecentCommandsDefault from "useFilterAndSortToOnlyFrecentCommands" /* 12178 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const AnalyticEvents = fn(1074).AnalyticEvents;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
fn(4574);
let createStyles = { container: null, header: null };
createStyles = { marginBottom: fn(12159).BETWEEN_SECTIONS_MARGIN };
createStyles.container = createStyles;
createStyles.header = { flexDirection: "row", alignItems: "center", gap: 4, marginBottom: 8 };
let closure_8 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_launcher/native/screens/application_view/app/FrecencyCommandsSection.tsx");

export default function FrecencyCommandsSection(commands) {
  const context = commands.context;
  ({ onPressCommand: importDefault, section: dependencyMap, onExecuteCommand: noop, installOnDemand: View, sectionName } = commands);
  const tmp = closure_8();
  const arr = useFilterAndSortToOnlyFrecentCommandsDefault({ context, commands: commands.allCommands, limit: 5 });
  const items = [arr.length, sectionName];
  const effect = noop.useEffect(() => {
    if (0 !== arr.length) {
      const obj = { num: arr.length, section_name: sectionName, location: AppLauncherTypes.AppLauncherLocations.APP_DETAIL };
      obj.trackWithMetadata(AnalyticEvents.APP_LAUNCHER_FRECENTS_SEEN, obj);
    }
  }, items);
  let tmp4 = null;
  if (0 !== arr.length) {
    let obj = { style: tmp.container, children: null };
    obj = { style: tmp.header, children: null };
    obj = { variant: "text-md/medium", color: "text-default", children: null };
    const intl = context(1114).intl;
    obj.children = intl.string(context(1114).t.acSE0h);
    obj.children = arr(context(4570).Heading, obj);
    const items1 = [arr(View, obj), arr.map((command, index) => timestampProducer(AppDetailContent.CommandRow, { command, onPressCommand, isFirstRow: 0 === index, isLastRow: index === arr.length - 1, context, onExecuteCommand, installOnDemand, section, location: ApplicationCommandTypes.ApplicationCommandTriggerLocations.APP_LAUNCHER_APPLICATION_VIEW_FRECENCT, sectionName }, command.id))];
    obj.children = items1;
    tmp4 = closure_7(View, obj);
  }
  return tmp4;
};