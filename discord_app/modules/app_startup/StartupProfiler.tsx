// === Module 10725: setLevels ===

// Module 10725 (setLevels)
import noop from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;
import obj132 from "obj132" /* 2 */;

let obj = {};
function setLevels(obj, arg1) {
  for (const key10006 in arg0) {
    obj[key10006] = arg1;
    let tmp4 = setLevels(arg0[key10006], arg1 + " ");
    continue;
  }
}
obj = { [obj.App]: { [obj.AppContainer]: { [obj.MainNavigator]: { [obj.StackNavigator]: { [obj.MainTabs]: { [obj.MainDrawers]: { [obj.LeftPanel]: { [obj.Guilds]: {}, [obj.Channels]: {} }, [obj.RightPanel]: { [obj.Members]: {} }, [obj.CenterPanel]: { [obj.Channel]: { [obj.ChatView]: { [obj.Messages]: {} } } } } } } } } } };
for (const key10073 in obj) {
  obj[key10073] = "";
  let tmp6 = obj[key10073];
  let keys = Object.keys();
  if (keys === undefined) {
    continue;
  } else {
    let tmp3 = keys[tmp];
    while (tmp3 !== undefined) {
      obj[tmp3] = " ";
      let setLevelsResult = setLevels(tmp6[tmp3], "  ");
      continue;
    }
  }
  continue;
}
const result = require("obj132").fileFinishedImporting("modules/app_startup/StartupProfiler.tsx");

export default function StartupProfiler(children) {
  const profile = children.profile;
  obj = profile(10);
  obj.mark("\u{1F3A8}", "" + obj[profile] + profile + " render");
  obj = {
    id: profile,
    onRender(arg0, arg1, arg2) {
      profile(dependencyMap[2]).mark("\u{1F3A8}", "" + closure_1_4[profile] + profile + " " + arg1, arg2);
    },
    children: children.children
  };
  return <Profiler.Profiler id={profile} onRender={function onRender(arg0, arg1, arg2) {
    profile(dependencyMap[2]).mark("\u{1F3A8}", "" + closure_1_4[profile] + profile + " " + arg1, arg2);
  }}>{children.children}</Profiler.Profiler>;
};
export const Profiles = obj;