// === Module 11132: setLevels ===

// Module 11132 (setLevels)
import closure_2 from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;

let obj = { App: "App", AppContainer: "AppContainer", MainNavigator: "MainNavigator", StackNavigator: "StackNavigator", MainTabs: "MainTabs", MainDrawers: "MainDrawers", PrivateChannels: "PrivateChannels", Members: "Members", LeftPanel: "LeftPanel", Guilds: "Guilds", Channels: "Channels", RightPanel: "RightPanel", CenterPanel: "CenterPanel", Channel: "Channel", ChatView: "ChatView", Messages: "Messages" };
obj = {};
function setLevels(obj, arg1) {
  for (const key10006 in arg0) {
    let tmp = key10006;
    let tmp2 = obj;
    obj[key10006] = arg1;
    let tmp3 = setLevels;
    let tmp4 = setLevels(arg0[key10006], arg1 + " ");
    continue;
  }
}
obj = { [obj.App]: { [obj.AppContainer]: { [obj.MainNavigator]: { [obj.StackNavigator]: { [obj.MainTabs]: { [obj.MainDrawers]: { [obj.LeftPanel]: { [obj.Guilds]: {}, [obj.Channels]: {} }, [obj.RightPanel]: { [obj.Members]: {} }, [obj.CenterPanel]: { [obj.Channel]: { [obj.ChatView]: { [obj.Messages]: {} } } } } } } } } } };
for (const key10073 in obj) {
  let tmp5 = key10073;
  obj[key10073] = "";
  let tmp6 = obj[key10073];
  let tmp7 = tmp6;
  let keys = Object.keys();
  if (keys === undefined) {
    continue;
  } else {
    let tmp3 = keys[tmp];
    while (tmp3 !== undefined) {
      let tmp9 = tmp3;
      obj[tmp3] = " ";
      let setLevelsResult = setLevels(tmp6[tmp3], "  ");
      continue;
    }
  }
  continue;
}
const result = require("set").fileFinishedImporting("modules/app_startup/StartupProfiler.tsx");

export default function StartupProfiler(children) {
  const profile = children.profile;
  obj = profile(10);
  obj.mark("\u{1F3A8}", "" + obj[profile] + profile + " render");
  obj = {
    id: profile,
    onRender(arg0, arg1, arg2) {
      profile(closure_1_1[2]).mark("\u{1F3A8}", "" + closure_1_4[profile] + profile + " " + arg1, arg2);
    },
    children: children.children
  };
  return <Profiler.Profiler id={profile} onRender={function onRender(arg0, arg1, arg2) {
    profile(closure_1_1[2]).mark("\u{1F3A8}", "" + closure_1_4[profile] + profile + " " + arg1, arg2);
  }}>{arg0.children}</Profiler.Profiler>;
};
export const Profiles = obj;