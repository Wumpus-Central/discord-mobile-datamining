// discord_app/modules/devtools/native/components/DevToolsScreens.tsx
import DevToolsExperimentsScreen from "screens/DevToolsExperimentsScreen.tsx";
import DevToolsAnalyticsScreen from "screens/DevToolsAnalyticsScreen.tsx";
import DevToolsBuildOverrideScreen from "screens/DevToolsBuildOverrideScreen.tsx";
import DevToolsLoggingFlagsScreen from "screens/DevToolsLoggingFlagsScreen.tsx";
import DevToolsLocalMessageCache from "screens/DevToolsLocalMessageCache.tsx";
import DevToolsGeneratedTestUsersScreen from "screens/DevToolsGeneratedTestUsersScreen.tsx";
import DevToolsDataStorageScreen from "screens/DevToolsDataStorageScreen.tsx";
import UserSettingsDesignSystemsScreen from "../../../user_settings/design_system/native/UserSettingsDesignSystemsScreen.tsx";
import DevToolsDismissableContentsScreen from "screens/DevToolsDismissableContentsScreen.tsx";
import GameCommunityUpsellDevTools from "../../../game_community_upsell/native/GameCommunityUpsellDevTools.tsx";
import IntlTestingSettingsPage from "../../../intl/native/IntlTestingSettingsPage.tsx";
import DevToolsOTATestScreen from "screens/DevToolsOTATestScreen.tsx";
import DevToolsProfilingScreen from "screens/DevToolsProfilingScreen.tsx";
import DevToolsQuickActionsScreen from "screens/DevToolsQuickActionsScreen.tsx";
import DevToolsRevenuePlaygroundScreen from "screens/DevToolsRevenuePlaygroundScreen.tsx";
import UserSettingsSurveyChangelogOverride from "../../../user_settings/changelog/native/UserSettingsSurveyChangelogOverride.tsx";
import DevToolsTogglesScreen from "screens/DevToolsTogglesScreen.tsx";
import DevToolsAgeVerificationScreen from "screens/DevToolsAgeVerificationScreen.tsx";
import DevToolsComponentsTestingScreen from "screens/DevToolsComponentsTestingScreen.tsx";
import DevToolsShopScreen from "screens/DevToolsShopScreen.tsx";
import CollectiblesTool from "../../../collectibles/native/tooling/CollectiblesTool.tsx";
import SlayerStorefrontDevTools from "../../../slayer_storefront/native/devtools/SlayerStorefrontDevTools.tsx";
import DevToolsActionSheetsScreen from "screens/DevToolsActionSheetsScreen.tsx";
import DevToolsAccountLinkingScreen from "screens/DevToolsAccountLinkingScreen.tsx";
import DevToolsPerformanceTestingScreen from "screens/DevToolsPerformanceTestingScreen.tsx";
import DevToolsInAppNotificationTestingScreen from "screens/DevToolsInAppNotificationTestingScreen.tsx";
import DevToolsDisplayNameEffectsBenchmarkScreen from "screens/DevToolsDisplayNameEffectsBenchmarkScreen.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const obj = {
  analytics: {
    headerTitle: "Analytics",
    Icon: fn(5624).ClipboardListIcon,
    render() {
      return jsx(DevToolsAnalyticsScreen.default, {});
    },
  },
  buildOverride: null,
  experiments: null,
  loggingFlags: null,
  cacheStats: null,
  generatedTestUsers: null,
  dataStorage: null,
  designSystems: null,
  dismissibleContent: null,
  gameCommunityUpsell: null,
  i18n: null,
  otatest: null,
  profiling: null,
  quickActions: null,
  revenuePlayground: null,
  surveyOverride: null,
  toggles: null,
  ageVerification: null,
  components: null,
  shop: null,
  shopProductPreview: null,
  slayerStorefront: null,
  actionSheets: null,
  accountLinking: null,
  performanceTesting: null,
  inAppNotificationTesting: null,
};
const obj2 = {
  headerTitle: "Analytics",
  Icon: fn(5624).ClipboardListIcon,
  render() {
    return jsx(DevToolsAnalyticsScreen.default, {});
  },
};
obj.buildOverride = {
  headerTitle: "Build Override",
  Icon: fn(15265).RefreshIcon,
  render() {
    return jsx(DevToolsBuildOverrideScreen.default, {});
  },
};
const obj3 = {
  headerTitle: "Build Override",
  Icon: fn(15265).RefreshIcon,
  render() {
    return jsx(DevToolsBuildOverrideScreen.default, {});
  },
};
obj.experiments = {
  headerTitle: "Experiment Overrides",
  Icon: fn(15701).BeakerIcon,
  render() {
    return jsx(DevToolsExperimentsScreen.default, {});
  },
};
const obj4 = {
  headerTitle: "Experiment Overrides",
  Icon: fn(15701).BeakerIcon,
  render() {
    return jsx(DevToolsExperimentsScreen.default, {});
  },
};
obj.loggingFlags = {
  headerTitle: "Logging Flags",
  Icon: fn(8026).PaperIcon,
  render() {
    return jsx(DevToolsLoggingFlagsScreen.default, {});
  },
};
const obj5 = {
  headerTitle: "Logging Flags",
  Icon: fn(8026).PaperIcon,
  render() {
    return jsx(DevToolsLoggingFlagsScreen.default, {});
  },
};
obj.cacheStats = {
  headerTitle: "Cache Stats",
  Icon: fn(8026).PaperIcon,
  predicate() {
    return false;
  },
  render() {
    return jsx(DevToolsLocalMessageCache.default, {});
  },
};
const obj6 = {
  headerTitle: "Cache Stats",
  Icon: fn(8026).PaperIcon,
  predicate() {
    return false;
  },
  render() {
    return jsx(DevToolsLocalMessageCache.default, {});
  },
};
obj.generatedTestUsers = {
  headerTitle: "Generated Test Users",
  Icon: fn(11968).UserIcon,
  render() {
    return jsx(DevToolsGeneratedTestUsersScreen.default, {});
  },
};
const obj7 = {
  headerTitle: "Generated Test Users",
  Icon: fn(11968).UserIcon,
  render() {
    return jsx(DevToolsGeneratedTestUsersScreen.default, {});
  },
};
obj.dataStorage = {
  headerTitle: "Data Storage",
  Icon: fn(15653).FileUpIcon,
  render() {
    return jsx(DevToolsDataStorageScreen.default, {});
  },
};
const obj8 = {
  headerTitle: "Data Storage",
  Icon: fn(15653).FileUpIcon,
  render() {
    return jsx(DevToolsDataStorageScreen.default, {});
  },
};
obj.designSystems = {
  headerTitle: "Design Systems",
  Icon: fn(15372).PaintPaletteIcon,
  render() {
    return jsx(UserSettingsDesignSystemsScreen.default, {});
  },
};
const obj9 = {
  headerTitle: "Design Systems",
  Icon: fn(15372).PaintPaletteIcon,
  render() {
    return jsx(UserSettingsDesignSystemsScreen.default, {});
  },
};
obj.dismissibleContent = {
  headerTitle: "Dismissible Contents",
  Icon: fn(8026).PaperIcon,
  render() {
    return jsx(DevToolsDismissableContentsScreen.default, {});
  },
};
const obj10 = {
  headerTitle: "Dismissible Contents",
  Icon: fn(8026).PaperIcon,
  render() {
    return jsx(DevToolsDismissableContentsScreen.default, {});
  },
};
obj.gameCommunityUpsell = {
  headerTitle: "Game Community Upsell",
  Icon: fn(8026).PaperIcon,
  render() {
    return jsx(GameCommunityUpsellDevTools.default, {});
  },
};
const obj11 = {
  headerTitle: "Game Community Upsell",
  Icon: fn(8026).PaperIcon,
  render() {
    return jsx(GameCommunityUpsellDevTools.default, {});
  },
};
obj.i18n = {
  headerTitle: "Intl Testing",
  Icon: fn(15533).LanguageIcon,
  render() {
    return jsx(IntlTestingSettingsPage.default, {});
  },
};
const obj12 = {
  headerTitle: "Intl Testing",
  Icon: fn(15533).LanguageIcon,
  render() {
    return jsx(IntlTestingSettingsPage.default, {});
  },
};
obj.otatest = {
  headerTitle: "OTA Test",
  Icon: fn(4586).DownloadIcon,
  render() {
    return jsx(DevToolsOTATestScreen.default, {});
  },
};
const obj13 = {
  headerTitle: "OTA Test",
  Icon: fn(4586).DownloadIcon,
  render() {
    return jsx(DevToolsOTATestScreen.default, {});
  },
};
obj.profiling = {
  headerTitle: "Profiling",
  Icon: fn(11747).TimerIcon,
  render() {
    return jsx(DevToolsProfilingScreen.default, {});
  },
};
const obj14 = {
  headerTitle: "Profiling",
  Icon: fn(11747).TimerIcon,
  render() {
    return jsx(DevToolsProfilingScreen.default, {});
  },
};
obj.quickActions = {
  headerTitle: "Quick Actions",
  Icon: fn(10291).MagicWandIcon,
  render() {
    return jsx(DevToolsQuickActionsScreen.default, {});
  },
};
const obj15 = {
  headerTitle: "Quick Actions",
  Icon: fn(10291).MagicWandIcon,
  render() {
    return jsx(DevToolsQuickActionsScreen.default, {});
  },
};
obj.revenuePlayground = {
  headerTitle: "Revenue Playground",
  Icon: fn(12067).PiggyBankIcon,
  render() {
    return jsx(DevToolsRevenuePlaygroundScreen.default, {});
  },
};
const obj16 = {
  headerTitle: "Revenue Playground",
  Icon: fn(12067).PiggyBankIcon,
  render() {
    return jsx(DevToolsRevenuePlaygroundScreen.default, {});
  },
};
obj.surveyOverride = {
  headerTitle: "Survey & Changelog Override",
  Icon: fn(10389).PencilIcon,
  render() {
    return jsx(UserSettingsSurveyChangelogOverride.default, {});
  },
};
const obj17 = {
  headerTitle: "Survey & Changelog Override",
  Icon: fn(10389).PencilIcon,
  render() {
    return jsx(UserSettingsSurveyChangelogOverride.default, {});
  },
};
obj.toggles = {
  headerTitle: "Toggles (Design, Reporting, etc)",
  Icon: fn(15462).EyeDropperIcon,
  render() {
    return jsx(DevToolsTogglesScreen.default, {});
  },
};
const obj18 = {
  headerTitle: "Toggles (Design, Reporting, etc)",
  Icon: fn(15462).EyeDropperIcon,
  render() {
    return jsx(DevToolsTogglesScreen.default, {});
  },
};
obj.ageVerification = {
  headerTitle: "Age Verification",
  Icon: fn(9545).ShieldIcon,
  render() {
    return jsx(DevToolsAgeVerificationScreen.default, {});
  },
};
const obj19 = {
  headerTitle: "Age Verification",
  Icon: fn(9545).ShieldIcon,
  render() {
    return jsx(DevToolsAgeVerificationScreen.default, {});
  },
};
obj.components = {
  headerTitle: "Bot Components Testing",
  Icon: fn(9578).RobotIcon,
  render() {
    return jsx(DevToolsComponentsTestingScreen.default, {});
  },
};
const obj20 = {
  headerTitle: "Bot Components Testing",
  Icon: fn(9578).RobotIcon,
  render() {
    return jsx(DevToolsComponentsTestingScreen.default, {});
  },
};
obj.shop = {
  headerTitle: "Shop",
  Icon: fn(12280).ShopIcon,
  render() {
    return jsx(DevToolsShopScreen.default, {});
  },
};
const obj21 = {
  headerTitle: "Shop",
  Icon: fn(12280).ShopIcon,
  render() {
    return jsx(DevToolsShopScreen.default, {});
  },
};
obj.shopProductPreview = {
  headerTitle: "Collectibles Tool",
  Icon: fn(12280).ShopIcon,
  render() {
    return jsx(CollectiblesTool.default, {});
  },
};
const obj22 = {
  headerTitle: "Collectibles Tool",
  Icon: fn(12280).ShopIcon,
  render() {
    return jsx(CollectiblesTool.default, {});
  },
};
obj.slayerStorefront = {
  headerTitle: "Slayer Storefront",
  Icon: fn(12280).ShopIcon,
  render() {
    return jsx(SlayerStorefrontDevTools.default, {});
  },
};
const obj23 = {
  headerTitle: "Slayer Storefront",
  Icon: fn(12280).ShopIcon,
  render() {
    return jsx(SlayerStorefrontDevTools.default, {});
  },
};
obj.actionSheets = {
  headerTitle: "Action Sheets",
  Icon: fn(15711).CompassIcon,
  render() {
    return jsx(DevToolsActionSheetsScreen.default, {});
  },
};
const obj24 = {
  headerTitle: "Action Sheets",
  Icon: fn(15711).CompassIcon,
  render() {
    return jsx(DevToolsActionSheetsScreen.default, {});
  },
};
obj.accountLinking = {
  headerTitle: "Account Linking",
  Icon: fn(4580).LinkIcon,
  render() {
    return jsx(DevToolsAccountLinkingScreen.default, {});
  },
};
const obj25 = {
  headerTitle: "Account Linking",
  Icon: fn(4580).LinkIcon,
  render() {
    return jsx(DevToolsAccountLinkingScreen.default, {});
  },
};
obj.performanceTesting = {
  headerTitle: "Performance Testing",
  Icon: fn(10099).SpeedometerIcon,
  render() {
    return jsx(DevToolsPerformanceTestingScreen.default, {});
  },
};
const obj26 = {
  headerTitle: "Performance Testing",
  Icon: fn(10099).SpeedometerIcon,
  render() {
    return jsx(DevToolsPerformanceTestingScreen.default, {});
  },
};
obj.inAppNotificationTesting = {
  headerTitle: "In App Notification Testing",
  Icon: fn(10291).MagicWandIcon,
  render() {
    return jsx(DevToolsInAppNotificationTestingScreen.default, {});
  },
};
const obj28 = { displayNameEffectsBenchmark: null };
const obj27 = {
  headerTitle: "In App Notification Testing",
  Icon: fn(10291).MagicWandIcon,
  render() {
    return jsx(DevToolsInAppNotificationTestingScreen.default, {});
  },
};
obj28.displayNameEffectsBenchmark = {
  headerTitle: "Display Name Effects Benchmark",
  Icon: fn(15372).PaintPaletteIcon,
  render() {
    return jsx(DevToolsDisplayNameEffectsBenchmarkScreen.default, {});
  },
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/devtools/native/components/DevToolsScreens.tsx");

export const DevToolsScreens = obj;
export const PerformanceTestingScreens = obj28;
