// === Module 11376: FrecencyCommandsSection ===

// Module 11376 (FrecencyCommandsSection)
import useFilterAndSortToOnlyFrecentCommandsDefault from "useFilterAndSortToOnlyFrecentCommands" /* 11377 */;
import closure_3 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { AnalyticEvents } from "ME" /* 676 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4668 */;

const require = arg1;
({ jsx: closure_6, jsxs: error } = jsxProd);
createCacheKey = { container: null, header: null };
createCacheKey = { marginBottom: require("PlaceholderCommandRow").BETWEEN_SECTIONS_MARGIN };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flexDirection: "row", alignItems: "center", gap: 4, marginBottom: 8 };
let closure_8 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/app_launcher/native/screens/application_view/app/FrecencyCommandsSection.tsx");

export default function FrecencyCommandsSection(commands) {
  const context = commands.context;
  ({ onPressCommand: importDefault, section: dependencyMap, onExecuteCommand: closure_3, installOnDemand: View, sectionName } = commands);
  let arr;
  const tmp = callback2();
  arr = useFilterAndSortToOnlyFrecentCommandsDefault({ context, commands: commands.allCommands, limit: 5 });
  const items = [arr.length, sectionName];
  const effect = React.useEffect(() => {
    if (0 !== arr.length) {
      let obj = context(closure_1_2[7]);
      obj = { num: null, section_name: null, location: null };
      obj[0] = arr.length;
      obj[1] = sectionName;
      obj[2] = context(closure_1_2[8]).AppLauncherLocations.APP_DETAIL;
      obj.trackWithMetadata(sectionName.APP_LAUNCHER_FRECENTS_SEEN, obj);
    }
  }, items);
  let tmp4 = null;
  if (0 !== arr.length) {
    let obj = { style: null, children: null };
    obj[0] = tmp.container;
    obj = { style: null, children: null };
    obj[0] = tmp.header;
    obj = { variant: "text-md/medium", color: "text-default", children: null };
    const intl = context(1236).intl;
    obj[2] = intl.string(context(1236).t.acSE0h);
    obj[1] = arr(context(4739).Heading, obj);
    const items1 = [arr(View, obj), arr.map((command) => arr(context(closure_1_2[5]).CommandRow, { command, onPressCommand: closure_1, isFirstRow: 0 === arg1, isLastRow: arg1 === arr.length - 1, context, onExecuteCommand: closure_3, installOnDemand: closure_4, section: closure_2, location: context(closure_1_2[11]).ApplicationCommandTriggerLocations.APP_LAUNCHER_APPLICATION_VIEW_FRECENCT, sectionName }, command.id))];
    obj[1] = items1;
    tmp4 = callback(View, obj);
  }
  return tmp4;
};