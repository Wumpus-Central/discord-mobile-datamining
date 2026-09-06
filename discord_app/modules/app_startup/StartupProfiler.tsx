// discord_app/modules/app_startup/StartupProfiler.tsx
import AppStartPerformanceDefault from "../../../discord_common/js/packages/app-start-performance/AppStartPerformance.tsx";
import noop from "../../../_runtime/metro/00019__.js";

const jsx = fn(21).jsx;
let Profiles = {
  App: "App",
  AppContainer: "AppContainer",
  MainNavigator: "MainNavigator",
  StackNavigator: "StackNavigator",
  MainTabs: "MainTabs",
  MainDrawers: "MainDrawers",
  PrivateChannels: "PrivateChannels",
  Members: "Members",
  LeftPanel: "LeftPanel",
  Guilds: "Guilds",
  Channels: "Channels",
  RightPanel: "RightPanel",
  CenterPanel: "CenterPanel",
  Channel: "Channel",
  ChatView: "ChatView",
  Messages: "Messages",
};
Profiles = {};
function setLevels(obj, arg1) {
  for (const key10006 in arg0) {
    obj[key10006] = arg1;
    let tmp4 = setLevels(arg0[key10006], arg1 + " ");
    continue;
  }
}
Profiles = {
  [Profiles.App]: {
    [Profiles.AppContainer]: {
      [Profiles.MainNavigator]: {
        [Profiles.StackNavigator]: {
          [Profiles.MainTabs]: {
            [Profiles.MainDrawers]: {
              [Profiles.LeftPanel]: { [Profiles.Guilds]: {}, [Profiles.Channels]: {} },
              [Profiles.RightPanel]: { [Profiles.Members]: {} },
              [Profiles.CenterPanel]: { [Profiles.Channel]: { [Profiles.ChatView]: { [Profiles.Messages]: {} } } },
            },
          },
        },
      },
    },
  },
};
for (const key10073 in obj) {
  Profiles[key10073] = "";
  let tmp6 = Profiles[key10073];
  let keys = Object.keys();
  if (keys === undefined) {
    continue;
  } else {
    let tmp3 = keys[tmp];
    while (tmp3 !== undefined) {
      Profiles[tmp3] = " ";
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
  let obj = profile(10);
  obj.mark("\u{1F3A8}", "" + obj[profile] + profile + " render");
  obj = {
    id: profile,
    onRender(arg0, arg1, arg2) {
      const obj = AppStartPerformanceDefault;
      obj.mark("\u{1F3A8}", "" + obj[profile] + profile + " " + arg1, arg2);
    },
    children: children.children,
  };
  return (
    <noop.Profiler
      id={profile}
      onRender={function onRender(arg0, arg1, arg2) {
        const obj = AppStartPerformanceDefault;
        obj.mark("\u{1F3A8}", "" + obj[profile] + profile + " " + arg1, arg2);
      }}
    >
      {arg0.children}
    </noop.Profiler>
  );
}
export { Profiles };
