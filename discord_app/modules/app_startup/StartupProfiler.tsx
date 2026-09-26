// === Module 11027: StartupProfiler ===

// Module 11027 (StartupProfiler)
import AppStartPerformanceDefault from "AppStartPerformance" /* 10 */;
import noop from "module_19" /* 19 */;

const jsx = fn(21).jsx;
const obj = { App: "App", AppContainer: "AppContainer", MainNavigator: "MainNavigator", StackNavigator: "StackNavigator", MainTabs: "MainTabs", MainDrawers: "MainDrawers", PrivateChannels: "PrivateChannels", Members: "Members", LeftPanel: "LeftPanel", Guilds: "Guilds", Channels: "Channels", RightPanel: "RightPanel", CenterPanel: "CenterPanel", Channel: "Channel", ChatView: "ChatView", Messages: "Messages" };
let obj2 = {};
function setLevels(obj, arg1) {
  for (const key10006 in arg0) {
    obj2[key10006] = arg1;
    let tmp4 = setLevels(arg0[key10006], arg1 + " ");
    continue;
  }
}
const obj3 = { [obj.App]: { [obj.AppContainer]: { [obj.MainNavigator]: { [obj.StackNavigator]: { [obj.MainTabs]: { [obj.MainDrawers]: { [obj.LeftPanel]: { [obj.Guilds]: {}, [obj.Channels]: {} }, [obj.RightPanel]: { [obj.Members]: {} }, [obj.CenterPanel]: { [obj.Channel]: { [obj.ChatView]: { [obj.Messages]: {} } } } } } } } } } };
for (const key10073 in obj3) {
  obj2[key10073] = "";
  let tmp6 = obj3[key10073];
  let keys = Object.keys();
  if (keys === undefined) {
    continue;
  } else {
    let tmp3 = keys[tmp];
    while (tmp3 !== undefined) {
      obj2[tmp3] = " ";
      let setLevelsResult = setLevels(tmp6[tmp3], "  ");
      continue;
    }
  }
  continue;
}
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_startup/StartupProfiler.tsx");

export default function StartupProfiler(children) {
  const profile = children.profile;
  profile(10).mark("\u{1F3A8}", "" + obj2[profile] + profile + " render");
  obj2 = {
    id: profile,
    onRender(arg0, arg1, arg2) {
      AppStartPerformanceDefault.mark("\u{1F3A8}", "" + obj2[profile] + profile + " " + arg1, arg2);
    },
    children: children.children
  };
  return <noop.Profiler id={profile} onRender={function onRender(arg0, arg1, arg2) {
    AppStartPerformanceDefault.mark("\u{1F3A8}", "" + obj2[profile] + profile + " " + arg1, arg2);
  }}>{children.children}</noop.Profiler>;
};
export const Profiles = obj;