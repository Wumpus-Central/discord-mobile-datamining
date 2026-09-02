// === Module 0: Discord ===

// Module 0 (Discord)
import set from "set" /* 2 */;
import serialize from "serialize" /* 9 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import isTTITest from "isTTITest" /* 14268 */;
import installSystrace from "installSystrace" /* 14269 */;
import module_1 from "module_1" /* 1 */;
import createFastConnectSocket from "createFastConnectSocket" /* 15 */;
import toLocaleLowerCase from "toLocaleLowerCase" /* 14074 */;
import module_16 from "module_16" /* 16 */;
import module_1205 from "module_1205" /* 1205 */;

let GenerateInvite = require;
let f17802 = dependencyMap;
const polyfillsEnd = serialize.default.imports.polyfillsEnd;
polyfillsEnd.record();
const sentryEnd = serialize.default.imports.sentryEnd;
sentryEnd.record();
if (isTTITest.isTTITest) {
  installSystrace.installSystrace();
}
const AppRegistry = get_ActivityIndicator.AppRegistry;
AppRegistry.registerComponent("Discord", () => GenerateInvite(f17802[9]).default);
const runnable = AppRegistry.getRunnable("Discord");
AppRegistry.registerRunnable("Discord", () => {
  GenerateInvite = [...arguments];
  return GenerateInvite(f17802[10]).default("Main", () => {
    closure_1_2(...closure_0);
  });
});
AppRegistry.registerComponent("Share", () => GenerateInvite(f17802[11]).default);
const runnable2 = AppRegistry.getRunnable("Share");
AppRegistry.registerRunnable("Share", () => {
  GenerateInvite = [...arguments];
  return GenerateInvite(f17802[10]).default("Share", () => closure_1_3(...closure_0));
});
GenerateInvite = "BackgroundSync";
f17802 = () => GenerateInvite(f17802[13]);
AppRegistry.registerHeadlessTask("BackgroundSync", () => {
  closure_0 = GenerateInvite(f17802[12]).default;
  return (arg0) => callback(callback, closure_1_1, arg0);
});
if (isTTITest.isTTITest) {
  GenerateInvite = "TTITestAction";
  f17802 = () => GenerateInvite(f17802[14]);
  AppRegistry.registerHeadlessTask("TTITestAction", () => {
    closure_0 = GenerateInvite(f17802[12]).default;
    return (arg0) => callback(callback, closure_1_1, arg0);
  });
}
GenerateInvite = "Disconnect";
f17802 = () => GenerateInvite(f17802[15]);
AppRegistry.registerHeadlessTask("Disconnect", () => {
  closure_0 = GenerateInvite(f17802[12]).default;
  return (arg0) => callback(callback, closure_1_1, arg0);
});
GenerateInvite = "MarkAsRead";
f17802 = () => GenerateInvite(f17802[16]);
AppRegistry.registerHeadlessTask("MarkAsRead", () => {
  closure_0 = GenerateInvite(f17802[12]).default;
  return (arg0) => callback(callback, closure_1_1, arg0);
});
GenerateInvite = "MuteAction";
f17802 = () => GenerateInvite(f17802[17]);
AppRegistry.registerHeadlessTask("MuteAction", () => {
  closure_0 = GenerateInvite(f17802[12]).default;
  return (arg0) => callback(callback, closure_1_1, arg0);
});
GenerateInvite = "ToggleDeafen";
f17802 = () => GenerateInvite(f17802[18]);
AppRegistry.registerHeadlessTask("ToggleDeafen", () => {
  closure_0 = GenerateInvite(f17802[12]).default;
  return (arg0) => callback(callback, closure_1_1, arg0);
});
GenerateInvite = "ToggleSelfMute";
f17802 = () => GenerateInvite(f17802[19]);
AppRegistry.registerHeadlessTask("ToggleSelfMute", () => {
  closure_0 = GenerateInvite(f17802[12]).default;
  return (arg0) => callback(callback, closure_1_1, arg0);
});
GenerateInvite = "DismissCallAction";
f17802 = () => GenerateInvite(f17802[20]);
AppRegistry.registerHeadlessTask("DismissCallAction", () => {
  closure_0 = GenerateInvite(f17802[12]).default;
  return (arg0) => callback(callback, closure_1_1, arg0);
});
GenerateInvite = "DirectReply";
f17802 = () => GenerateInvite(f17802[21]);
AppRegistry.registerHeadlessTask("DirectReply", () => {
  closure_0 = GenerateInvite(f17802[12]).default;
  return (arg0) => callback(callback, closure_1_1, arg0);
});
GenerateInvite = "SelectVoiceChannel";
f17802 = () => GenerateInvite(f17802[22]);
AppRegistry.registerHeadlessTask("SelectVoiceChannel", () => {
  closure_0 = GenerateInvite(f17802[12]).default;
  return (arg0) => callback(callback, closure_1_1, arg0);
});
GenerateInvite = "GenerateInvite";
f17802 = () => GenerateInvite(f17802[23]);
AppRegistry.registerHeadlessTask("GenerateInvite", () => {
  closure_0 = GenerateInvite(f17802[12]).default;
  return (arg0) => callback(callback, closure_1_1, arg0);
});
const result = set.fileFinishedImporting("index.native.tsx");