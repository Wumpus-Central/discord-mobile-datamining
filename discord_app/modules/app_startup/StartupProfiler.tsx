// === Module 11629: StartupProfiler ===

// Module 11629 (StartupProfiler)
import AppStartPerformanceDefault from "AppStartPerformance" /* 10 */;
import noop from "module_19" /* 19 */;

const require = fn;
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
  let tmp7 = obj3[key10073];
  let keys = Object.keys();
  if (keys === undefined) {
    continue;
  } else {
    let tmp3 = keys[tmp];
    while (tmp3 !== undefined) {
      obj2[tmp3] = " ";
      let setLevelsResult = setLevels(tmp7[tmp3], "  ");
      continue;
    }
  }
  continue;
}
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_startup/StartupProfiler.tsx");
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function StartupProfiler(arg0) {
  const cResult = profile(576).c(6);
  ({ children, profile } = arg0);
  obj2 = AppStartPerformanceDefault;
  obj2.mark("\u{1F3A8}", "" + obj2[profile] + profile + " render");
  if (cResult[0] !== profile) {
    const fn = function o(arg0, arg1, arg2) {
      AppStartPerformanceDefault.mark("\u{1F3A8}", "" + obj2[profile] + profile + " " + arg1, arg2);
    };
    cResult[0] = profile;
    cResult[1] = fn;
    let tmp3 = fn;
  } else {
    tmp3 = cResult[1];
  }
  if (cResult[2] === children) {
    if (cResult[3] === profile) {
      if (cResult[4] === tmp3) {
        let tmp4 = cResult[5];
      }
      return tmp4;
    }
  }
  const tmp5 = <noop.Profiler id={profile} onRender={tmp3}>{children}</noop.Profiler>;
  cResult[2] = children;
  cResult[3] = profile;
  cResult[4] = tmp3;
  cResult[5] = tmp5;
  tmp4 = tmp5;
}) : (function StartupProfiler(children) {
  const profile = children.profile;
  AppStartPerformanceDefault.mark("\u{1F3A8}", "" + obj2[profile] + profile + " render");
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
});

export default ReactCompilerGating.isReactCompilerEnabled() ? (function StartupProfiler(arg0) {
  const cResult = profile(576).c(6);
  ({ children, profile } = arg0);
  obj2 = AppStartPerformanceDefault;
  obj2.mark("\u{1F3A8}", "" + obj2[profile] + profile + " render");
  if (cResult[0] !== profile) {
    const fn = function o(arg0, arg1, arg2) {
      AppStartPerformanceDefault.mark("\u{1F3A8}", "" + obj2[profile] + profile + " " + arg1, arg2);
    };
    cResult[0] = profile;
    cResult[1] = fn;
    let tmp3 = fn;
  } else {
    tmp3 = cResult[1];
  }
  if (cResult[2] === children) {
    if (cResult[3] === profile) {
      if (cResult[4] === tmp3) {
        let tmp4 = cResult[5];
      }
      return tmp4;
    }
  }
  const tmp5 = <noop.Profiler id={profile} onRender={tmp3}>{children}</noop.Profiler>;
  cResult[2] = children;
  cResult[3] = profile;
  cResult[4] = tmp3;
  cResult[5] = tmp5;
  tmp4 = tmp5;
}) : (function StartupProfiler(children) {
  const profile = children.profile;
  AppStartPerformanceDefault.mark("\u{1F3A8}", "" + obj2[profile] + profile + " render");
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
});
export const Profiles = obj;