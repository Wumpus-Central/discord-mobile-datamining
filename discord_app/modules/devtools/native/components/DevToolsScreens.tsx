// === Module 15660: DevToolsScreens ===

// Module 15660 (DevToolsScreens)
import DevToolsExperimentsScreen from "DevToolsExperimentsScreen" /* 11883 */;
import DevToolsAnalyticsScreen from "DevToolsAnalyticsScreen" /* 15661 */;
import DevToolsBuildOverrideScreen from "DevToolsBuildOverrideScreen" /* 15662 */;
import DevToolsLoggingFlagsScreen from "DevToolsLoggingFlagsScreen" /* 15667 */;
import DevToolsLocalMessageCache from "DevToolsLocalMessageCache" /* 15668 */;
import DevToolsGeneratedTestUsersScreen from "DevToolsGeneratedTestUsersScreen" /* 15669 */;
import DevToolsDataStorageScreen from "DevToolsDataStorageScreen" /* 15695 */;
import UserSettingsDesignSystemsScreen from "UserSettingsDesignSystemsScreen" /* 15696 */;
import DevToolsDismissableContentsScreen from "DevToolsDismissableContentsScreen" /* 15697 */;
import GameCommunityUpsellDevTools from "GameCommunityUpsellDevTools" /* 15701 */;
import IntlTestingSettingsPage from "IntlTestingSettingsPage" /* 15704 */;
import DevToolsOTATestScreen from "DevToolsOTATestScreen" /* 15739 */;
import DevToolsProfilingScreen from "DevToolsProfilingScreen" /* 15742 */;
import DevToolsQuickActionsScreen from "DevToolsQuickActionsScreen" /* 15745 */;
import DevToolsRevenuePlaygroundScreen from "DevToolsRevenuePlaygroundScreen" /* 15768 */;
import UserSettingsSurveyChangelogOverride from "UserSettingsSurveyChangelogOverride" /* 15787 */;
import DevToolsTogglesScreen from "DevToolsTogglesScreen" /* 15788 */;
import DevToolsAgeVerificationScreen from "DevToolsAgeVerificationScreen" /* 15791 */;
import DevToolsComponentsTestingScreen from "DevToolsComponentsTestingScreen" /* 15792 */;
import DevToolsShopScreen from "DevToolsShopScreen" /* 15799 */;
import CollectiblesTool from "CollectiblesTool" /* 15800 */;
import SlayerStorefrontDevTools from "SlayerStorefrontDevTools" /* 15802 */;
import DevToolsActionSheetsScreen from "DevToolsActionSheetsScreen" /* 15803 */;
import DevToolsAccountLinkingScreen from "DevToolsAccountLinkingScreen" /* 15806 */;
import DevToolsPerformanceTestingScreen from "DevToolsPerformanceTestingScreen" /* 15807 */;
import DevToolsInAppNotificationTestingScreen from "DevToolsInAppNotificationTestingScreen" /* 15808 */;
import DevToolsDisplayNameEffectsBenchmarkScreen from "DevToolsDisplayNameEffectsBenchmarkScreen" /* 15809 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { analytics: null, buildOverride: null, experiments: null, loggingFlags: null, cacheStats: null, generatedTestUsers: null, dataStorage: null, designSystems: null, dismissibleContent: null, gameCommunityUpsell: null, i18n: null, otatest: null, profiling: null, quickActions: null, revenuePlayground: null, surveyOverride: null, toggles: null, ageVerification: null, components: null, shop: null, shopProductPreview: null, slayerStorefront: null, actionSheets: null, accountLinking: null, performanceTesting: null, inAppNotificationTesting: null };
obj = {
  headerTitle: "Analytics",
  Icon: fn(5588).ClipboardListIcon,
  render() {
    return jsx(DevToolsAnalyticsScreen.default, {});
  }
};
obj.analytics = obj;
obj = {
  headerTitle: "Build Override",
  Icon: fn(15237).RefreshIcon,
  render() {
    return jsx(DevToolsBuildOverrideScreen.default, {});
  }
};
obj.buildOverride = obj;
obj.experiments = {
  headerTitle: "Experiment Overrides",
  Icon: fn(15665).BeakerIcon,
  render() {
    return jsx(DevToolsExperimentsScreen.default, {});
  }
};
const obj1 = {
  headerTitle: "Experiment Overrides",
  Icon: fn(15665).BeakerIcon,
  render() {
    return jsx(DevToolsExperimentsScreen.default, {});
  }
};
obj.loggingFlags = {
  headerTitle: "Logging Flags",
  Icon: fn(7962).PaperIcon,
  render() {
    return jsx(DevToolsLoggingFlagsScreen.default, {});
  }
};
const obj2 = {
  headerTitle: "Logging Flags",
  Icon: fn(7962).PaperIcon,
  render() {
    return jsx(DevToolsLoggingFlagsScreen.default, {});
  }
};
obj.cacheStats = {
  headerTitle: "Cache Stats",
  Icon: fn(7962).PaperIcon,
  predicate() {
    return false;
  },
  render() {
    return jsx(DevToolsLocalMessageCache.default, {});
  }
};
const obj3 = {
  headerTitle: "Cache Stats",
  Icon: fn(7962).PaperIcon,
  predicate() {
    return false;
  },
  render() {
    return jsx(DevToolsLocalMessageCache.default, {});
  }
};
obj.generatedTestUsers = {
  headerTitle: "Generated Test Users",
  Icon: fn(11896).UserIcon,
  render() {
    return jsx(DevToolsGeneratedTestUsersScreen.default, {});
  }
};
const obj4 = {
  headerTitle: "Generated Test Users",
  Icon: fn(11896).UserIcon,
  render() {
    return jsx(DevToolsGeneratedTestUsersScreen.default, {});
  }
};
obj.dataStorage = {
  headerTitle: "Data Storage",
  Icon: fn(15620).FileUpIcon,
  render() {
    return jsx(DevToolsDataStorageScreen.default, {});
  }
};
const obj5 = {
  headerTitle: "Data Storage",
  Icon: fn(15620).FileUpIcon,
  render() {
    return jsx(DevToolsDataStorageScreen.default, {});
  }
};
obj.designSystems = {
  headerTitle: "Design Systems",
  Icon: fn(13454).PaintPaletteIcon,
  render() {
    return jsx(UserSettingsDesignSystemsScreen.default, {});
  }
};
const obj6 = {
  headerTitle: "Design Systems",
  Icon: fn(13454).PaintPaletteIcon,
  render() {
    return jsx(UserSettingsDesignSystemsScreen.default, {});
  }
};
obj.dismissibleContent = {
  headerTitle: "Dismissible Contents",
  Icon: fn(7962).PaperIcon,
  render() {
    return jsx(DevToolsDismissableContentsScreen.default, {});
  }
};
const obj7 = {
  headerTitle: "Dismissible Contents",
  Icon: fn(7962).PaperIcon,
  render() {
    return jsx(DevToolsDismissableContentsScreen.default, {});
  }
};
obj.gameCommunityUpsell = {
  headerTitle: "Game Community Upsell",
  Icon: fn(7962).PaperIcon,
  render() {
    return jsx(GameCommunityUpsellDevTools.default, {});
  }
};
const obj8 = {
  headerTitle: "Game Community Upsell",
  Icon: fn(7962).PaperIcon,
  render() {
    return jsx(GameCommunityUpsellDevTools.default, {});
  }
};
obj.i18n = {
  headerTitle: "Intl Testing",
  Icon: fn(15502).LanguageIcon,
  render() {
    return jsx(IntlTestingSettingsPage.default, {});
  }
};
const obj9 = {
  headerTitle: "Intl Testing",
  Icon: fn(15502).LanguageIcon,
  render() {
    return jsx(IntlTestingSettingsPage.default, {});
  }
};
obj.otatest = {
  headerTitle: "OTA Test",
  Icon: fn(4554).DownloadIcon,
  render() {
    return jsx(DevToolsOTATestScreen.default, {});
  }
};
const obj10 = {
  headerTitle: "OTA Test",
  Icon: fn(4554).DownloadIcon,
  render() {
    return jsx(DevToolsOTATestScreen.default, {});
  }
};
obj.profiling = {
  headerTitle: "Profiling",
  Icon: fn(11676).TimerIcon,
  render() {
    return jsx(DevToolsProfilingScreen.default, {});
  }
};
const obj11 = {
  headerTitle: "Profiling",
  Icon: fn(11676).TimerIcon,
  render() {
    return jsx(DevToolsProfilingScreen.default, {});
  }
};
obj.quickActions = {
  headerTitle: "Quick Actions",
  Icon: fn(10223).MagicWandIcon,
  render() {
    return jsx(DevToolsQuickActionsScreen.default, {});
  }
};
const obj12 = {
  headerTitle: "Quick Actions",
  Icon: fn(10223).MagicWandIcon,
  render() {
    return jsx(DevToolsQuickActionsScreen.default, {});
  }
};
obj.revenuePlayground = {
  headerTitle: "Revenue Playground",
  Icon: fn(11995).PiggyBankIcon,
  render() {
    return jsx(DevToolsRevenuePlaygroundScreen.default, {});
  }
};
const obj13 = {
  headerTitle: "Revenue Playground",
  Icon: fn(11995).PiggyBankIcon,
  render() {
    return jsx(DevToolsRevenuePlaygroundScreen.default, {});
  }
};
obj.surveyOverride = {
  headerTitle: "Survey & Changelog Override",
  Icon: fn(10320).PencilIcon,
  render() {
    return jsx(UserSettingsSurveyChangelogOverride.default, {});
  }
};
const obj14 = {
  headerTitle: "Survey & Changelog Override",
  Icon: fn(10320).PencilIcon,
  render() {
    return jsx(UserSettingsSurveyChangelogOverride.default, {});
  }
};
obj.toggles = {
  headerTitle: "Toggles (Design, Reporting, etc)",
  Icon: fn(15431).EyeDropperIcon,
  render() {
    return jsx(DevToolsTogglesScreen.default, {});
  }
};
const obj15 = {
  headerTitle: "Toggles (Design, Reporting, etc)",
  Icon: fn(15431).EyeDropperIcon,
  render() {
    return jsx(DevToolsTogglesScreen.default, {});
  }
};
obj.ageVerification = {
  headerTitle: "Age Verification",
  Icon: fn(9472).ShieldIcon,
  render() {
    return jsx(DevToolsAgeVerificationScreen.default, {});
  }
};
const obj16 = {
  headerTitle: "Age Verification",
  Icon: fn(9472).ShieldIcon,
  render() {
    return jsx(DevToolsAgeVerificationScreen.default, {});
  }
};
obj.components = {
  headerTitle: "Bot Components Testing",
  Icon: fn(9505).RobotIcon,
  render() {
    return jsx(DevToolsComponentsTestingScreen.default, {});
  }
};
const obj17 = {
  headerTitle: "Bot Components Testing",
  Icon: fn(9505).RobotIcon,
  render() {
    return jsx(DevToolsComponentsTestingScreen.default, {});
  }
};
obj.shop = {
  headerTitle: "Shop",
  Icon: fn(12208).ShopIcon,
  render() {
    return jsx(DevToolsShopScreen.default, {});
  }
};
const obj18 = {
  headerTitle: "Shop",
  Icon: fn(12208).ShopIcon,
  render() {
    return jsx(DevToolsShopScreen.default, {});
  }
};
obj.shopProductPreview = {
  headerTitle: "Collectibles Tool",
  Icon: fn(12208).ShopIcon,
  render() {
    return jsx(CollectiblesTool.default, {});
  }
};
const obj19 = {
  headerTitle: "Collectibles Tool",
  Icon: fn(12208).ShopIcon,
  render() {
    return jsx(CollectiblesTool.default, {});
  }
};
obj.slayerStorefront = {
  headerTitle: "Slayer Storefront",
  Icon: fn(12208).ShopIcon,
  render() {
    return jsx(SlayerStorefrontDevTools.default, {});
  }
};
const obj20 = {
  headerTitle: "Slayer Storefront",
  Icon: fn(12208).ShopIcon,
  render() {
    return jsx(SlayerStorefrontDevTools.default, {});
  }
};
obj.actionSheets = {
  headerTitle: "Action Sheets",
  Icon: fn(15675).CompassIcon,
  render() {
    return jsx(DevToolsActionSheetsScreen.default, {});
  }
};
const obj21 = {
  headerTitle: "Action Sheets",
  Icon: fn(15675).CompassIcon,
  render() {
    return jsx(DevToolsActionSheetsScreen.default, {});
  }
};
obj.accountLinking = {
  headerTitle: "Account Linking",
  Icon: fn(4548).LinkIcon,
  render() {
    return jsx(DevToolsAccountLinkingScreen.default, {});
  }
};
const obj22 = {
  headerTitle: "Account Linking",
  Icon: fn(4548).LinkIcon,
  render() {
    return jsx(DevToolsAccountLinkingScreen.default, {});
  }
};
obj.performanceTesting = {
  headerTitle: "Performance Testing",
  Icon: fn(10029).SpeedometerIcon,
  render() {
    return jsx(DevToolsPerformanceTestingScreen.default, {});
  }
};
const obj23 = {
  headerTitle: "Performance Testing",
  Icon: fn(10029).SpeedometerIcon,
  render() {
    return jsx(DevToolsPerformanceTestingScreen.default, {});
  }
};
obj.inAppNotificationTesting = {
  headerTitle: "In App Notification Testing",
  Icon: fn(10223).MagicWandIcon,
  render() {
    return jsx(DevToolsInAppNotificationTestingScreen.default, {});
  }
};
const obj25 = { displayNameEffectsBenchmark: null };
const obj24 = {
  headerTitle: "In App Notification Testing",
  Icon: fn(10223).MagicWandIcon,
  render() {
    return jsx(DevToolsInAppNotificationTestingScreen.default, {});
  }
};
obj25.displayNameEffectsBenchmark = {
  headerTitle: "Display Name Effects Benchmark",
  Icon: fn(13454).PaintPaletteIcon,
  render() {
    return jsx(DevToolsDisplayNameEffectsBenchmarkScreen.default, {});
  }
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/devtools/native/components/DevToolsScreens.tsx");

export const DevToolsScreens = obj;
export const PerformanceTestingScreens = obj25;