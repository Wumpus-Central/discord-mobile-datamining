// === Module 8198: UserProfilePerformanceAnalyticsExperiment ===

// Module 8198 (UserProfilePerformanceAnalyticsExperiment)
import ApexExperiment from "ApexExperiment" /* 1433 */;
import size from "module_2" /* 2 */;

const config = ApexExperiment.createApexExperiment({ kind: "user", name: "2026-04-user-profile-performance-analytics", defaultConfig: { performanceAnalyticsEnabled: false }, variations: { 0: { performanceAnalyticsEnabled: false }, 1: { performanceAnalyticsEnabled: true } } });
const result = size.fileFinishedImporting("modules/user_profile/experiments/UserProfilePerformanceAnalyticsExperiment.tsx");

export const isUserProfilePerformanceAnalyticsEnabled = function isUserProfilePerformanceAnalyticsEnabled(UserProfileAnalyticsUtils) {
  return config.getConfig({ location: UserProfileAnalyticsUtils }).performanceAnalyticsEnabled;
};