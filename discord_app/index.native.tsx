// === Module 0: Discord ===

// Module 0 (Discord)
import set from "set" /* 2 */;
import serialize from "serialize" /* 9 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import isTTITest from "isTTITest" /* 13959 */;
import installSystrace from "installSystrace" /* 13960 */;
import module_1 from "module_1" /* 1 */;
import createFastConnectSocket from "createFastConnectSocket" /* 15 */;
import toLocaleLowerCase from "toLocaleLowerCase" /* 13765 */;
import module_16 from "module_16" /* 16 */;
import module_1208 from "module_1208" /* 1208 */;

let GenerateInvite = require;
let f17479 = dependencyMap;
const polyfillsEnd = serialize.default.imports.polyfillsEnd;
polyfillsEnd.record();
const sentryEnd = serialize.default.imports.sentryEnd;
sentryEnd.record();
if (isTTITest.isTTITest) {
  installSystrace.installSystrace();
}
const AppRegistry = get_ActivityIndicator.AppRegistry;
AppRegistry.registerComponent("Discord", () => GenerateInvite(f17479[9]).default);
const runnable = AppRegistry.getRunnable("Discord");
AppRegistry.registerRunnable("Discord", () => {
  GenerateInvite = [...arguments];
  return GenerateInvite(f17479[10]).default("Main", () => {
    closure_1_2(...closure_0);
  });
});
AppRegistry.registerComponent("Share", () => GenerateInvite(f17479[11]).default);
const runnable2 = AppRegistry.getRunnable("Share");
AppRegistry.registerRunnable("Share", () => {
  GenerateInvite = [...arguments];
  return GenerateInvite(f17479[10]).default("Share", () => closure_1_3(...closure_0));
});
GenerateInvite = "BackgroundSync";
f17479 = () => GenerateInvite(f17479[13]);
AppRegistry.registerHeadlessTask("BackgroundSync", () => {
  closure_0 = GenerateInvite(f17479[12]).default;
  return (arg0) => callback(callback, closure_1_1, arg0);
});
GenerateInvite = "TTITestAction";
f17479 = () => GenerateInvite(f17479[14]);
AppRegistry.registerHeadlessTask("TTITestAction", () => {
  closure_0 = GenerateInvite(f17479[12]).default;
  return (arg0) => callback(callback, closure_1_1, arg0);
});
GenerateInvite = "Disconnect";
f17479 = () => GenerateInvite(f17479[15]);
AppRegistry.registerHeadlessTask("Disconnect", () => {
  closure_0 = GenerateInvite(f17479[12]).default;
  return (arg0) => callback(callback, closure_1_1, arg0);
});
GenerateInvite = "MarkAsRead";
f17479 = () => GenerateInvite(f17479[16]);
AppRegistry.registerHeadlessTask("MarkAsRead", () => {
  closure_0 = GenerateInvite(f17479[12]).default;
  return (arg0) => callback(callback, closure_1_1, arg0);
});
GenerateInvite = "MuteAction";
f17479 = () => GenerateInvite(f17479[17]);
AppRegistry.registerHeadlessTask("MuteAction", () => {
  closure_0 = GenerateInvite(f17479[12]).default;
  return (arg0) => callback(callback, closure_1_1, arg0);
});
GenerateInvite = "ToggleDeafen";
f17479 = () => GenerateInvite(f17479[18]);
AppRegistry.registerHeadlessTask("ToggleDeafen", () => {
  closure_0 = GenerateInvite(f17479[12]).default;
  return (arg0) => callback(callback, closure_1_1, arg0);
});
GenerateInvite = "ToggleSelfMute";
f17479 = () => GenerateInvite(f17479[19]);
AppRegistry.registerHeadlessTask("ToggleSelfMute", () => {
  closure_0 = GenerateInvite(f17479[12]).default;
  return (arg0) => callback(callback, closure_1_1, arg0);
});
GenerateInvite = "DismissCallAction";
f17479 = () => GenerateInvite(f17479[20]);
AppRegistry.registerHeadlessTask("DismissCallAction", () => {
  closure_0 = GenerateInvite(f17479[12]).default;
  return (arg0) => callback(callback, closure_1_1, arg0);
});
GenerateInvite = "DirectReply";
f17479 = () => GenerateInvite(f17479[21]);
AppRegistry.registerHeadlessTask("DirectReply", () => {
  closure_0 = GenerateInvite(f17479[12]).default;
  return (arg0) => callback(callback, closure_1_1, arg0);
});
GenerateInvite = "SelectVoiceChannel";
f17479 = () => GenerateInvite(f17479[22]);
AppRegistry.registerHeadlessTask("SelectVoiceChannel", () => {
  closure_0 = GenerateInvite(f17479[12]).default;
  return (arg0) => callback(callback, closure_1_1, arg0);
});
GenerateInvite = "GenerateInvite";
f17479 = () => GenerateInvite(f17479[23]);
AppRegistry.registerHeadlessTask("GenerateInvite", () => {
  closure_0 = GenerateInvite(f17479[12]).default;
  return (arg0) => callback(callback, closure_1_1, arg0);
});
const result = set.fileFinishedImporting("index.native.tsx");