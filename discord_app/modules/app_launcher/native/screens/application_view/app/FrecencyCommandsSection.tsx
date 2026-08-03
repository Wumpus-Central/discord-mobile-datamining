import noop from "noop";
import { View } from "get ActivityIndicator";
import { AnalyticEvents } from "ME";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let closure_6;
let error;
const require = arg1;
({ jsx: closure_6, jsxs: error } = jsxProd);
createCacheKey = { container: null, header: null };
createCacheKey = { marginBottom: require("PlaceholderCommandRow").BETWEEN_SECTIONS_MARGIN };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flexDirection: "row", alignItems: "center", gap: 4, marginBottom: 8 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("ME").fileFinishedImporting("modules/app_launcher/native/screens/application_view/app/FrecencyCommandsSection.tsx");

export default function FrecencyCommandsSection(commands) {
  let View;
  let noop;
  let dependencyMap;
  let importDefault;
  let sectionName;
  const context = commands.context;
  ({ onPressCommand: importDefault, section: dependencyMap, onExecuteCommand: noop, installOnDemand: View, sectionName } = commands);
  let arr;
  const tmp = createCacheKey();
  arr = importDefault(11339)({ context, commands: commands.allCommands, limit: 5 });
  const items = [arr.length, sectionName];
  const effect = React.useEffect(() => {
    if (0 !== arr.length) {
      let obj = context(outer1_2[7]);
      obj = { num: null, section_name: null, location: null };
      obj[0] = arr.length;
      obj[1] = sectionName;
      obj[2] = context(outer1_2[8]).AppLauncherLocations.APP_DETAIL;
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
    obj[1] = arr(context(4189).Heading, obj);
    const items1 = [
      arr(View, obj),
      arr.map((command) => {
          const obj = { command, onPressCommand: closure_1, isFirstRow: 0 === arg1, isLastRow: arg1 === arr.length - 1, context, onExecuteCommand: noop, installOnDemand: closure_4, section: closure_2, location: null, sectionName: null };
          obj[8] = context(outer1_2[11]).ApplicationCommandTriggerLocations.APP_LAUNCHER_APPLICATION_VIEW_FRECENCT;
          obj[9] = sectionName;
          return arr(context(outer1_2[5]).CommandRow, obj, command.id);
        })
    ];
    obj[1] = items1;
    tmp4 = callback(View, obj);
  }
  return tmp4;
};