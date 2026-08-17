// discord_app/index.native.tsx
import set from "set" /* 2 */;
import serialize from "serialize" /* 9 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import isTTITest from "isTTITest" /* 13766 */;
import installSystrace from "installSystrace" /* 13767 */;
import logAppStart from "modules/debug/logAppStart.tsx" /* 1 */;
import createFastConnectSocket from "createFastConnectSocket" /* 15 */;
import toLocaleLowerCase from "toLocaleLowerCase" /* 13572 */;
import checkEnv from "utils/checkEnv.tsx" /* 16 */;
import SentryUtils.native from "utils/SentryUtils.native.tsx" /* 1208 */;

let GenerateInvite = require;
let f17202 = dependencyMap;
const polyfillsEnd = serialize.default.imports.polyfillsEnd;
polyfillsEnd.record();
const sentryEnd = serialize.default.imports.sentryEnd;
sentryEnd.record();
if (isTTITest.isTTITest) {
  installSystrace.installSystrace();
}
const AppRegistry = get_ActivityIndicator.AppRegistry;
AppRegistry.registerComponent("Discord", () => GenerateInvite(f17202[9]).default);
const runnable = AppRegistry.getRunnable("Discord");
AppRegistry.registerRunnable("Discord", () => {
  GenerateInvite = [...arguments];
  return GenerateInvite(f17202[10]).default("Main", () => {
    closure_1_2(...closure_0);
  });
});
AppRegistry.registerComponent("Share", () => GenerateInvite(f17202[11]).default);
const runnable2 = AppRegistry.getRunnable("Share");
AppRegistry.registerRunnable("Share", () => {
  GenerateInvite = [...arguments];
  return GenerateInvite(f17202[10]).default("Share", () => closure_1_3(...closure_0));
});
GenerateInvite = "BackgroundSync";
f17202 = () => GenerateInvite(f17202[13]);
AppRegistry.registerHeadlessTask("BackgroundSync", () => {
  closure_0 = GenerateInvite(f17202[12]).default;
  return (arg0) => callback(callback, closure_1_1, arg0);
});
GenerateInvite = "TTITestAction";
f17202 = () => GenerateInvite(f17202[14]);
AppRegistry.registerHeadlessTask("TTITestAction", () => {
  closure_0 = GenerateInvite(f17202[12]).default;
  return (arg0) => callback(callback, closure_1_1, arg0);
});
GenerateInvite = "Disconnect";
f17202 = () => GenerateInvite(f17202[15]);
AppRegistry.registerHeadlessTask("Disconnect", () => {
  closure_0 = GenerateInvite(f17202[12]).default;
  return (arg0) => callback(callback, closure_1_1, arg0);
});
GenerateInvite = "MarkAsRead";
f17202 = () => GenerateInvite(f17202[16]);
AppRegistry.registerHeadlessTask("MarkAsRead", () => {
  closure_0 = GenerateInvite(f17202[12]).default;
  return (arg0) => callback(callback, closure_1_1, arg0);
});
GenerateInvite = "MuteAction";
f17202 = () => GenerateInvite(f17202[17]);
AppRegistry.registerHeadlessTask("MuteAction", () => {
  closure_0 = GenerateInvite(f17202[12]).default;
  return (arg0) => callback(callback, closure_1_1, arg0);
});
GenerateInvite = "ToggleDeafen";
f17202 = () => GenerateInvite(f17202[18]);
AppRegistry.registerHeadlessTask("ToggleDeafen", () => {
  closure_0 = GenerateInvite(f17202[12]).default;
  return (arg0) => callback(callback, closure_1_1, arg0);
});
GenerateInvite = "ToggleSelfMute";
f17202 = () => GenerateInvite(f17202[19]);
AppRegistry.registerHeadlessTask("ToggleSelfMute", () => {
  closure_0 = GenerateInvite(f17202[12]).default;
  return (arg0) => callback(callback, closure_1_1, arg0);
});
GenerateInvite = "DismissCallAction";
f17202 = () => GenerateInvite(f17202[20]);
AppRegistry.registerHeadlessTask("DismissCallAction", () => {
  closure_0 = GenerateInvite(f17202[12]).default;
  return (arg0) => callback(callback, closure_1_1, arg0);
});
GenerateInvite = "DirectReply";
f17202 = () => GenerateInvite(f17202[21]);
AppRegistry.registerHeadlessTask("DirectReply", () => {
  closure_0 = GenerateInvite(f17202[12]).default;
  return (arg0) => callback(callback, closure_1_1, arg0);
});
GenerateInvite = "SelectVoiceChannel";
f17202 = () => GenerateInvite(f17202[22]);
AppRegistry.registerHeadlessTask("SelectVoiceChannel", () => {
  closure_0 = GenerateInvite(f17202[12]).default;
  return (arg0) => callback(callback, closure_1_1, arg0);
});
GenerateInvite = "GenerateInvite";
f17202 = () => GenerateInvite(f17202[23]);
AppRegistry.registerHeadlessTask("GenerateInvite", () => {
  closure_0 = GenerateInvite(f17202[12]).default;
  return (arg0) => callback(callback, closure_1_1, arg0);
});
const result = set.fileFinishedImporting("index.native.tsx");