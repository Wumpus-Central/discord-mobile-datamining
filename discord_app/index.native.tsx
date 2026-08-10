// discord_app/index.native.tsx
import module_1 from "createFastConnectSocket";
import createFastConnectSocket from "promise";
import toLocaleLowerCase from "toLocaleLowerCase";
import module_16 from "promise";
import SentryUtils.native from "utils/SentryUtils.native.tsx";
import { AppRegistry } from "promise";

let GenerateInvite = require;
let f17068 = dependencyMap;
const polyfillsEnd = require("App").default.imports.polyfillsEnd;
polyfillsEnd.record();
const sentryEnd = require("App").default.imports.sentryEnd;
sentryEnd.record();
if (require("isTTITest").isTTITest) {
  require("installSystrace").installSystrace();
}
AppRegistry.registerComponent("Discord", () => GenerateInvite(f17068[9]).default);
const runnable = AppRegistry.getRunnable("Discord");
AppRegistry.registerRunnable("Discord", () => {
  const GenerateInvite = [...arguments];
  return GenerateInvite(f17068[10]).default("Main", () => {
    outer1_2(...closure_0);
  });
});
AppRegistry.registerComponent("Share", () => GenerateInvite(f17068[11]).default);
const runnable2 = AppRegistry.getRunnable("Share");
AppRegistry.registerRunnable("Share", () => {
  const GenerateInvite = [...arguments];
  return GenerateInvite(f17068[10]).default("Share", () => outer1_3(...closure_0));
});
GenerateInvite = "BackgroundSync";
f17068 = () => GenerateInvite(f17068[13]);
AppRegistry.registerHeadlessTask("BackgroundSync", () => {
  let closure_0 = GenerateInvite(f17068[12]).default;
  return (arg0) => callback(callback, outer1_1, arg0);
});
GenerateInvite = "TTITestAction";
f17068 = () => GenerateInvite(f17068[14]);
AppRegistry.registerHeadlessTask("TTITestAction", () => {
  let closure_0 = GenerateInvite(f17068[12]).default;
  return (arg0) => callback(callback, outer1_1, arg0);
});
GenerateInvite = "Disconnect";
f17068 = () => GenerateInvite(f17068[15]);
AppRegistry.registerHeadlessTask("Disconnect", () => {
  let closure_0 = GenerateInvite(f17068[12]).default;
  return (arg0) => callback(callback, outer1_1, arg0);
});
GenerateInvite = "MarkAsRead";
f17068 = () => GenerateInvite(f17068[16]);
AppRegistry.registerHeadlessTask("MarkAsRead", () => {
  let closure_0 = GenerateInvite(f17068[12]).default;
  return (arg0) => callback(callback, outer1_1, arg0);
});
GenerateInvite = "MuteAction";
f17068 = () => GenerateInvite(f17068[17]);
AppRegistry.registerHeadlessTask("MuteAction", () => {
  let closure_0 = GenerateInvite(f17068[12]).default;
  return (arg0) => callback(callback, outer1_1, arg0);
});
GenerateInvite = "ToggleDeafen";
f17068 = () => GenerateInvite(f17068[18]);
AppRegistry.registerHeadlessTask("ToggleDeafen", () => {
  let closure_0 = GenerateInvite(f17068[12]).default;
  return (arg0) => callback(callback, outer1_1, arg0);
});
GenerateInvite = "ToggleSelfMute";
f17068 = () => GenerateInvite(f17068[19]);
AppRegistry.registerHeadlessTask("ToggleSelfMute", () => {
  let closure_0 = GenerateInvite(f17068[12]).default;
  return (arg0) => callback(callback, outer1_1, arg0);
});
GenerateInvite = "DismissCallAction";
f17068 = () => GenerateInvite(f17068[20]);
AppRegistry.registerHeadlessTask("DismissCallAction", () => {
  let closure_0 = GenerateInvite(f17068[12]).default;
  return (arg0) => callback(callback, outer1_1, arg0);
});
GenerateInvite = "DirectReply";
f17068 = () => GenerateInvite(f17068[21]);
AppRegistry.registerHeadlessTask("DirectReply", () => {
  let closure_0 = GenerateInvite(f17068[12]).default;
  return (arg0) => callback(callback, outer1_1, arg0);
});
GenerateInvite = "SelectVoiceChannel";
f17068 = () => GenerateInvite(f17068[22]);
AppRegistry.registerHeadlessTask("SelectVoiceChannel", () => {
  let closure_0 = GenerateInvite(f17068[12]).default;
  return (arg0) => callback(callback, outer1_1, arg0);
});
GenerateInvite = "GenerateInvite";
f17068 = () => GenerateInvite(f17068[23]);
AppRegistry.registerHeadlessTask("GenerateInvite", () => {
  let closure_0 = GenerateInvite(f17068[12]).default;
  return (arg0) => callback(callback, outer1_1, arg0);
});
const result = require("toLocaleLowerCase").fileFinishedImporting("index.native.tsx");