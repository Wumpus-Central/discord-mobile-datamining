// discord_app/modules/game_detection/RunningGameStore.native.tsx
import handleLoadMessages from "handleLoadMessages";
import gameFromServer from "gameFromServer";
import setLibraryApplications from "setLibraryApplications";
import { Store } from "initialize";
import { DevToolsFocusedPidsTrackMode } from "../overlay/OverlayTypes.tsx";

const require = arg1;
class RunningGameStore extends Store {
}
const prototype = RunningGameStore.prototype;
prototype["initialize"] = function initialize() {

};
prototype["getVisibleGame"] = function getVisibleGame() {
  return null;
};
prototype["getCurrentGameForAnalytics"] = function getCurrentGameForAnalytics() {
  return null;
};
prototype["getCurrentNonGameForAnalytics"] = function getCurrentNonGameForAnalytics() {
  return null;
};
prototype["getVisibleRunningGames"] = function getVisibleRunningGames() {
  return [];
};
prototype["getRunningGames"] = function getRunningGames() {
  return [];
};
prototype["getDebugRunningGame"] = function getDebugRunningGame() {
  return null;
};
prototype["getDetectionDebug"] = function getDetectionDebug() {
  return null;
};
prototype["getRunningNonGames"] = function getRunningNonGames() {
  return [];
};
prototype["getRunningDiscordApplicationIds"] = function getRunningDiscordApplicationIds() {
  return [];
};
prototype["getRunningVerifiedApplicationIds"] = function getRunningVerifiedApplicationIds() {
  return [];
};
prototype["getGameForPID"] = function getGameForPID(pid) {
  return null;
};
prototype["getGameForName"] = function getGameForName() {
  return null;
};
prototype["getGameOrTransformedSubgameForPID"] = function getGameOrTransformedSubgameForPID() {
  return null;
};
prototype["getLauncherForPID"] = function getLauncherForPID() {
  return null;
};
prototype["getOverlayOptionsForPID"] = function getOverlayOptionsForPID() {
  return null;
};
prototype["shouldElevateProcessForPID"] = function shouldElevateProcessForPID() {
  return false;
};
prototype["shouldContinueWithoutElevatedProcessForPID"] = function shouldContinueWithoutElevatedProcessForPID(closure_0) {
  return false;
};
prototype["canCollectExecutableFingerprintsForRunningGames"] = function canCollectExecutableFingerprintsForRunningGames() {
  return false;
};
prototype["getCandidateGames"] = function getCandidateGames() {
  return [];
};
prototype["isGamesSeenLoaded"] = function isGamesSeenLoaded() {
  return true;
};
prototype["isGameSeen"] = function isGameSeen() {
  return false;
};
prototype["getGamesSeen"] = function getGamesSeen(arg0, arg1) {
  return [];
};
prototype["getSeenGameByName"] = function getSeenGameByName() {
  return null;
};
prototype["isObservedAppRunning"] = function isObservedAppRunning(name) {
  return false;
};
prototype["getOverlayEnabledForGame"] = function getOverlayEnabledForGame() {
  return false;
};
prototype["getOverrides"] = function getOverrides() {
  return [];
};
prototype["getOverrideForGame"] = function getOverrideForGame(arg0) {
  return null;
};
prototype["getGameOverlayStatus"] = function getGameOverlayStatus() {
  return null;
};
prototype["getObservedAppNameForWindow"] = function getObservedAppNameForWindow(sourceId) {
  return null;
};
Object.defineProperty(prototype, "canShowAdminWarning", {
  get: function canShowAdminWarning() {
    return false;
  },
  set: undefined
});
prototype["isDetectionEnabled"] = function isDetectionEnabled() {
  return false;
};
prototype["addExecutableTrackedByAnalytics"] = function addExecutableTrackedByAnalytics() {

};
prototype["getSystemServiceStatus"] = function getSystemServiceStatus() {
  return { state: "unknown" };
};
prototype["isSystemServiceInitialized"] = function isSystemServiceInitialized() {
  return false;
};
RunningGameStore.displayName = "RunningGameStore";
const runningGameStore = new RunningGameStore(require("dispatcher"), {});
const result = require("setLibraryApplications").fileFinishedImporting("modules/game_detection/RunningGameStore.native.tsx");

export default runningGameStore;
export function gameKey() {
  return "";
}
export const getRawOverlayGameStatus = function getRawOverlayGameStatus() {
  if (arg1 === undefined) {
    const items = [gameFromServer, setLibraryApplications, handleLoadMessages];
  }
  return { source: DevToolsFocusedPidsTrackMode /* DevToolsFocusedPidsTrackMode */.OverlayGameStatusSource.UNKNOWN, enabledOOP: false, enabledLegacy: false, overlayMethod: DevToolsFocusedPidsTrackMode /* DevToolsFocusedPidsTrackMode */.OverlayMethod.Disabled, reason: "Dummy implementation" };
};
export function isDetectionEnabled() {
  return false;
}
export function maybeTransformSubgame(arg0) {
  return arg0;
}
export const transformForGameSettings = function transformForGameSettings(arg0) {
  const obj = {};
  const merged = Object.assign(arg0);
  obj.played = "";
  obj.overlay = false;
  obj.verified = false;
  obj.detectable = false;
  return obj;
};