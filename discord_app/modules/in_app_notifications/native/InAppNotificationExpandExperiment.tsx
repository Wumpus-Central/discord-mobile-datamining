// === Module 10430: useCanExpandInAppNotification ===

// Module 10430 (useCanExpandInAppNotification)
import ApexExperiment from "ApexExperiment";

const obj = { 1: null, 2: { canExpand: true, canReact: true } };
obj[2] = { canExpand: true, canReact: false };
let closure_0 = ApexExperiment.createApexExperiment({ name: "2026-05-in-app-notification-expand", kind: "user", defaultConfig: { canExpand: false, canReact: false }, variations: obj });
const result = require("set").fileFinishedImporting("modules/in_app_notifications/native/InAppNotificationExpandExperiment.tsx");

export const useCanExpandInAppNotification = function useCanExpandInAppNotification(InAppNotificationContainer) {
  return closure_0.useConfig({ location: InAppNotificationContainer });
};