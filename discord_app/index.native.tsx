// discord_app/index.native.tsx
import set from "../_runtime/00002_set.js";
import serialize from "modules/tti_analytics/TTITracker.tsx";
import get_ActivityIndicator from "../_runtime/00017_get_ActivityIndicator.js";
import isTTITest from "modules/tti_analytics/isTTITest.tsx";
import installSystrace from "modules/systrace/native/installSystrace.tsx";
import logAppStart from "modules/debug/logAppStart.tsx";
import createFastConnectSocket from "modules/gateway/native/fast_connect.tsx";
import toLocaleLowerCase from "polyfills.android.tsx";
import checkEnv from "utils/checkEnv.tsx";
import SentryUtils.native from "utils/SentryUtils.native.tsx";

let GenerateInvite = require;
let f17826 = dependencyMap;
const polyfillsEnd = serialize.default.imports.polyfillsEnd;
polyfillsEnd.record();
const sentryEnd = serialize.default.imports.sentryEnd;
sentryEnd.record();
if (isTTITest.isTTITest) {
  installSystrace.installSystrace();
}
const AppRegistry = get_ActivityIndicator.AppRegistry;
AppRegistry.registerComponent("Discord", () => GenerateInvite(f17826[9]).default);
const runnable = AppRegistry.getRunnable("Discord");
AppRegistry.registerRunnable("Discord", () => {
  GenerateInvite = [...arguments];
  return GenerateInvite(f17826[10]).default("Main", () => {
    closure_1_2(...closure_0);
  });
});
AppRegistry.registerComponent("Share", () => GenerateInvite(f17826[11]).default);
const runnable2 = AppRegistry.getRunnable("Share");
AppRegistry.registerRunnable("Share", () => {
  GenerateInvite = [...arguments];
  return GenerateInvite(f17826[10]).default("Share", () => closure_1_3(...closure_0));
});
GenerateInvite = "BackgroundSync";
f17826 = () => GenerateInvite(f17826[13]);
AppRegistry.registerHeadlessTask("BackgroundSync", () => {
  closure_0 = GenerateInvite(f17826[12]).default;
  return (arg0) => callback(callback, closure_1_1, arg0);
});
if (isTTITest.isTTITest) {
  GenerateInvite = "TTITestAction";
  f17826 = () => GenerateInvite(f17826[14]);
  AppRegistry.registerHeadlessTask("TTITestAction", () => {
    closure_0 = GenerateInvite(f17826[12]).default;
    return (arg0) => callback(callback, closure_1_1, arg0);
  });
}
GenerateInvite = "Disconnect";
f17826 = () => GenerateInvite(f17826[15]);
AppRegistry.registerHeadlessTask("Disconnect", () => {
  closure_0 = GenerateInvite(f17826[12]).default;
  return (arg0) => callback(callback, closure_1_1, arg0);
});
GenerateInvite = "MarkAsRead";
f17826 = () => GenerateInvite(f17826[16]);
AppRegistry.registerHeadlessTask("MarkAsRead", () => {
  closure_0 = GenerateInvite(f17826[12]).default;
  return (arg0) => callback(callback, closure_1_1, arg0);
});
GenerateInvite = "MuteAction";
f17826 = () => GenerateInvite(f17826[17]);
AppRegistry.registerHeadlessTask("MuteAction", () => {
  closure_0 = GenerateInvite(f17826[12]).default;
  return (arg0) => callback(callback, closure_1_1, arg0);
});
GenerateInvite = "ToggleDeafen";
f17826 = () => GenerateInvite(f17826[18]);
AppRegistry.registerHeadlessTask("ToggleDeafen", () => {
  closure_0 = GenerateInvite(f17826[12]).default;
  return (arg0) => callback(callback, closure_1_1, arg0);
});
GenerateInvite = "ToggleSelfMute";
f17826 = () => GenerateInvite(f17826[19]);
AppRegistry.registerHeadlessTask("ToggleSelfMute", () => {
  closure_0 = GenerateInvite(f17826[12]).default;
  return (arg0) => callback(callback, closure_1_1, arg0);
});
GenerateInvite = "DismissCallAction";
f17826 = () => GenerateInvite(f17826[20]);
AppRegistry.registerHeadlessTask("DismissCallAction", () => {
  closure_0 = GenerateInvite(f17826[12]).default;
  return (arg0) => callback(callback, closure_1_1, arg0);
});
GenerateInvite = "DirectReply";
f17826 = () => GenerateInvite(f17826[21]);
AppRegistry.registerHeadlessTask("DirectReply", () => {
  closure_0 = GenerateInvite(f17826[12]).default;
  return (arg0) => callback(callback, closure_1_1, arg0);
});
GenerateInvite = "SelectVoiceChannel";
f17826 = () => GenerateInvite(f17826[22]);
AppRegistry.registerHeadlessTask("SelectVoiceChannel", () => {
  closure_0 = GenerateInvite(f17826[12]).default;
  return (arg0) => callback(callback, closure_1_1, arg0);
});
GenerateInvite = "GenerateInvite";
f17826 = () => GenerateInvite(f17826[23]);
AppRegistry.registerHeadlessTask("GenerateInvite", () => {
  closure_0 = GenerateInvite(f17826[12]).default;
  return (arg0) => callback(callback, closure_1_1, arg0);
});
const result = set.fileFinishedImporting("index.native.tsx");