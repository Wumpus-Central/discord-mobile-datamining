// discord_app/index.native.tsx
import module_1 from "createFastConnectSocket";
import createFastConnectSocket from "promise";
import toLocaleLowerCase from "toLocaleLowerCase";
import module_16 from "promise";
import SentryUtils.native from "utils/SentryUtils.native.tsx";
import { AppRegistry } from "promise";

let GenerateInvite = require;
let f17156 = dependencyMap;
const polyfillsEnd = require("App").default.imports.polyfillsEnd;
polyfillsEnd.record();
const sentryEnd = require("App").default.imports.sentryEnd;
sentryEnd.record();
if (require("isTTITest").isTTITest) {
  require("installSystrace").installSystrace();
}
AppRegistry.registerComponent("Discord", () => GenerateInvite(f17156[9]).default);
const runnable = AppRegistry.getRunnable("Discord");
AppRegistry.registerRunnable("Discord", () => {
  const GenerateInvite = [...arguments];
  return GenerateInvite(f17156[10]).default("Main", () => {
    outer1_2(...closure_0);
  });
});
AppRegistry.registerComponent("Share", () => GenerateInvite(f17156[11]).default);
const runnable2 = AppRegistry.getRunnable("Share");
AppRegistry.registerRunnable("Share", () => {
  const GenerateInvite = [...arguments];
  return GenerateInvite(f17156[10]).default("Share", () => outer1_3(...closure_0));
});
GenerateInvite = "BackgroundSync";
f17156 = () => GenerateInvite(f17156[13]);
AppRegistry.registerHeadlessTask("BackgroundSync", () => {
  let closure_0 = GenerateInvite(f17156[12]).default;
  return (arg0) => callback(callback, outer1_1, arg0);
});
GenerateInvite = "TTITestAction";
f17156 = () => GenerateInvite(f17156[14]);
AppRegistry.registerHeadlessTask("TTITestAction", () => {
  let closure_0 = GenerateInvite(f17156[12]).default;
  return (arg0) => callback(callback, outer1_1, arg0);
});
GenerateInvite = "Disconnect";
f17156 = () => GenerateInvite(f17156[15]);
AppRegistry.registerHeadlessTask("Disconnect", () => {
  let closure_0 = GenerateInvite(f17156[12]).default;
  return (arg0) => callback(callback, outer1_1, arg0);
});
GenerateInvite = "MarkAsRead";
f17156 = () => GenerateInvite(f17156[16]);
AppRegistry.registerHeadlessTask("MarkAsRead", () => {
  let closure_0 = GenerateInvite(f17156[12]).default;
  return (arg0) => callback(callback, outer1_1, arg0);
});
GenerateInvite = "MuteAction";
f17156 = () => GenerateInvite(f17156[17]);
AppRegistry.registerHeadlessTask("MuteAction", () => {
  let closure_0 = GenerateInvite(f17156[12]).default;
  return (arg0) => callback(callback, outer1_1, arg0);
});
GenerateInvite = "ToggleDeafen";
f17156 = () => GenerateInvite(f17156[18]);
AppRegistry.registerHeadlessTask("ToggleDeafen", () => {
  let closure_0 = GenerateInvite(f17156[12]).default;
  return (arg0) => callback(callback, outer1_1, arg0);
});
GenerateInvite = "ToggleSelfMute";
f17156 = () => GenerateInvite(f17156[19]);
AppRegistry.registerHeadlessTask("ToggleSelfMute", () => {
  let closure_0 = GenerateInvite(f17156[12]).default;
  return (arg0) => callback(callback, outer1_1, arg0);
});
GenerateInvite = "DismissCallAction";
f17156 = () => GenerateInvite(f17156[20]);
AppRegistry.registerHeadlessTask("DismissCallAction", () => {
  let closure_0 = GenerateInvite(f17156[12]).default;
  return (arg0) => callback(callback, outer1_1, arg0);
});
GenerateInvite = "DirectReply";
f17156 = () => GenerateInvite(f17156[21]);
AppRegistry.registerHeadlessTask("DirectReply", () => {
  let closure_0 = GenerateInvite(f17156[12]).default;
  return (arg0) => callback(callback, outer1_1, arg0);
});
GenerateInvite = "SelectVoiceChannel";
f17156 = () => GenerateInvite(f17156[22]);
AppRegistry.registerHeadlessTask("SelectVoiceChannel", () => {
  let closure_0 = GenerateInvite(f17156[12]).default;
  return (arg0) => callback(callback, outer1_1, arg0);
});
GenerateInvite = "GenerateInvite";
f17156 = () => GenerateInvite(f17156[23]);
AppRegistry.registerHeadlessTask("GenerateInvite", () => {
  let closure_0 = GenerateInvite(f17156[12]).default;
  return (arg0) => callback(callback, outer1_1, arg0);
});
const result = require("toLocaleLowerCase").fileFinishedImporting("index.native.tsx");