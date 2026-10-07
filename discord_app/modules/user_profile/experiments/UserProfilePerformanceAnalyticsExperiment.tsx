// discord_app/modules/user_profile/experiments/UserProfilePerformanceAnalyticsExperiment.tsx
import ApexExperiment from "../../experiments/apex/index.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const config = ApexExperiment.createApexExperiment({
  kind: "user",
  name: "2026-04-user-profile-performance-analytics",
  defaultConfig: { performanceAnalyticsEnabled: false },
  variations: { 0: { performanceAnalyticsEnabled: false }, 1: { performanceAnalyticsEnabled: true } },
});
const result = size.fileFinishedImporting(
  "modules/user_profile/experiments/UserProfilePerformanceAnalyticsExperiment.tsx",
);

export const isUserProfilePerformanceAnalyticsEnabled = function isUserProfilePerformanceAnalyticsEnabled(
  UserProfileAnalyticsUtils,
) {
  return config.getConfig({ location: UserProfileAnalyticsUtils }).performanceAnalyticsEnabled;
};
