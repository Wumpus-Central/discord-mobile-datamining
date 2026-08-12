// discord_app/index.native.tsx
import module_1 from "createFastConnectSocket";
import createFastConnectSocket from "promise";
import toLocaleLowerCase from "toLocaleLowerCase";
import module_16 from "promise";
import SentryUtils.native from "utils/SentryUtils.native.tsx";
import { AppRegistry } from "promise";

let GenerateInvite = require;
let f17138 = dependencyMap;
const polyfillsEnd = require("App").default.imports.polyfillsEnd;
polyfillsEnd.record();
const sentryEnd = require("App").default.imports.sentryEnd;
sentryEnd.record();
if (require("isTTITest").isTTITest) {
  require("installSystrace").installSystrace();
}
AppRegistry.registerComponent("Discord", () => GenerateInvite(f17138[9]).default);
const runnable = AppRegistry.getRunnable("Discord");
AppRegistry.registerRunnable("Discord", () => {
  const GenerateInvite = [...arguments];
  return GenerateInvite(f17138[10]).default("Main", () => {
    outer1_2(...closure_0);
  });
});
AppRegistry.registerComponent("Share", () => GenerateInvite(f17138[11]).default);
const runnable2 = AppRegistry.getRunnable("Share");
AppRegistry.registerRunnable("Share", () => {
  const GenerateInvite = [...arguments];
  return GenerateInvite(f17138[10]).default("Share", () => outer1_3(...closure_0));
});
GenerateInvite = "BackgroundSync";
f17138 = () => GenerateInvite(f17138[13]);
AppRegistry.registerHeadlessTask("BackgroundSync", () => {
  let closure_0 = GenerateInvite(f17138[12]).default;
  return (arg0) => callback(callback, outer1_1, arg0);
});
GenerateInvite = "TTITestAction";
f17138 = () => GenerateInvite(f17138[14]);
AppRegistry.registerHeadlessTask("TTITestAction", () => {
  let closure_0 = GenerateInvite(f17138[12]).default;
  return (arg0) => callback(callback, outer1_1, arg0);
});
GenerateInvite = "Disconnect";
f17138 = () => GenerateInvite(f17138[15]);
AppRegistry.registerHeadlessTask("Disconnect", () => {
  let closure_0 = GenerateInvite(f17138[12]).default;
  return (arg0) => callback(callback, outer1_1, arg0);
});
GenerateInvite = "MarkAsRead";
f17138 = () => GenerateInvite(f17138[16]);
AppRegistry.registerHeadlessTask("MarkAsRead", () => {
  let closure_0 = GenerateInvite(f17138[12]).default;
  return (arg0) => callback(callback, outer1_1, arg0);
});
GenerateInvite = "MuteAction";
f17138 = () => GenerateInvite(f17138[17]);
AppRegistry.registerHeadlessTask("MuteAction", () => {
  let closure_0 = GenerateInvite(f17138[12]).default;
  return (arg0) => callback(callback, outer1_1, arg0);
});
GenerateInvite = "ToggleDeafen";
f17138 = () => GenerateInvite(f17138[18]);
AppRegistry.registerHeadlessTask("ToggleDeafen", () => {
  let closure_0 = GenerateInvite(f17138[12]).default;
  return (arg0) => callback(callback, outer1_1, arg0);
});
GenerateInvite = "ToggleSelfMute";
f17138 = () => GenerateInvite(f17138[19]);
AppRegistry.registerHeadlessTask("ToggleSelfMute", () => {
  let closure_0 = GenerateInvite(f17138[12]).default;
  return (arg0) => callback(callback, outer1_1, arg0);
});
GenerateInvite = "DismissCallAction";
f17138 = () => GenerateInvite(f17138[20]);
AppRegistry.registerHeadlessTask("DismissCallAction", () => {
  let closure_0 = GenerateInvite(f17138[12]).default;
  return (arg0) => callback(callback, outer1_1, arg0);
});
GenerateInvite = "DirectReply";
f17138 = () => GenerateInvite(f17138[21]);
AppRegistry.registerHeadlessTask("DirectReply", () => {
  let closure_0 = GenerateInvite(f17138[12]).default;
  return (arg0) => callback(callback, outer1_1, arg0);
});
GenerateInvite = "SelectVoiceChannel";
f17138 = () => GenerateInvite(f17138[22]);
AppRegistry.registerHeadlessTask("SelectVoiceChannel", () => {
  let closure_0 = GenerateInvite(f17138[12]).default;
  return (arg0) => callback(callback, outer1_1, arg0);
});
GenerateInvite = "GenerateInvite";
f17138 = () => GenerateInvite(f17138[23]);
AppRegistry.registerHeadlessTask("GenerateInvite", () => {
  let closure_0 = GenerateInvite(f17138[12]).default;
  return (arg0) => callback(callback, outer1_1, arg0);
});
const result = require("toLocaleLowerCase").fileFinishedImporting("index.native.tsx");