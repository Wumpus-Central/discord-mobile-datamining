// === Module 15404: DevToolsScreens ===

// Module 15404 (DevToolsScreens)
import DevToolsExperimentsScreen from "DevToolsExperimentsScreen" /* 11422 */;
import DevToolsAnalyticsScreen from "DevToolsAnalyticsScreen" /* 15405 */;
import DevToolsBuildOverrideScreen from "DevToolsBuildOverrideScreen" /* 15406 */;
import DevToolsLoggingFlagsScreen from "DevToolsLoggingFlagsScreen" /* 15411 */;
import DevToolsLocalMessageCache from "DevToolsLocalMessageCache" /* 15412 */;
import DevToolsGeneratedTestUsersScreen from "DevToolsGeneratedTestUsersScreen" /* 15413 */;
import DevToolsDataStorageScreen from "DevToolsDataStorageScreen" /* 15439 */;
import UserSettingsDesignSystemsScreen from "UserSettingsDesignSystemsScreen" /* 15440 */;
import DevToolsDismissableContentsScreen from "DevToolsDismissableContentsScreen" /* 15441 */;
import GameCommunityUpsellDevTools from "GameCommunityUpsellDevTools" /* 15445 */;
import IntlTestingSettingsPage from "IntlTestingSettingsPage" /* 15448 */;
import DevToolsOTATestScreen from "DevToolsOTATestScreen" /* 15483 */;
import DevToolsProfilingScreen from "DevToolsProfilingScreen" /* 15486 */;
import DevToolsBountyQaScreen from "DevToolsBountyQaScreen" /* 15491 */;
import DevToolsQuickActionsScreen from "DevToolsQuickActionsScreen" /* 15492 */;
import DevToolsRevenuePlaygroundScreen from "DevToolsRevenuePlaygroundScreen" /* 15560 */;
import UserSettingsSurveyChangelogOverride from "UserSettingsSurveyChangelogOverride" /* 15581 */;
import DevToolsTogglesScreen from "DevToolsTogglesScreen" /* 15583 */;
import DevToolsAgeVerificationScreen from "DevToolsAgeVerificationScreen" /* 15585 */;
import DevToolsComponentsTestingScreen from "DevToolsComponentsTestingScreen" /* 15586 */;
import DevToolsShopScreen from "DevToolsShopScreen" /* 15593 */;
import CollectiblesTool from "CollectiblesTool" /* 15594 */;
import SlayerStorefrontDevTools from "SlayerStorefrontDevTools" /* 15596 */;
import DevToolsActionSheetsScreen from "DevToolsActionSheetsScreen" /* 15597 */;
import DevToolsAccountLinkingScreen from "DevToolsAccountLinkingScreen" /* 15602 */;
import DevToolsPerformanceTestingScreen from "DevToolsPerformanceTestingScreen" /* 15603 */;
import DevToolsInAppNotificationTestingScreen from "DevToolsInAppNotificationTestingScreen" /* 15604 */;
import DevToolsDisplayNameEffectsBenchmarkScreen from "DevToolsDisplayNameEffectsBenchmarkScreen" /* 15605 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const obj = {
  analytics: {
    headerTitle: "Analytics",
    Icon: fn(5928).ClipboardListIcon,
    render() {
      return jsx(DevToolsAnalyticsScreen.default, {});
    }
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
  bountyQa: null,
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
  inAppNotificationTesting: null
};
const obj2 = {
  headerTitle: "Analytics",
  Icon: fn(5928).ClipboardListIcon,
  render() {
    return jsx(DevToolsAnalyticsScreen.default, {});
  }
};
obj.buildOverride = {
  headerTitle: "Build Override",
  Icon: fn(14774).RefreshIcon,
  render() {
    return jsx(DevToolsBuildOverrideScreen.default, {});
  }
};
const obj3 = {
  headerTitle: "Build Override",
  Icon: fn(14774).RefreshIcon,
  render() {
    return jsx(DevToolsBuildOverrideScreen.default, {});
  }
};
obj.experiments = {
  headerTitle: "Experiment Overrides",
  Icon: fn(15409).BeakerIcon,
  render() {
    return jsx(DevToolsExperimentsScreen.default, {});
  }
};
const obj4 = {
  headerTitle: "Experiment Overrides",
  Icon: fn(15409).BeakerIcon,
  render() {
    return jsx(DevToolsExperimentsScreen.default, {});
  }
};
obj.loggingFlags = {
  headerTitle: "Logging Flags",
  Icon: fn(7553).PaperIcon,
  render() {
    return jsx(DevToolsLoggingFlagsScreen.default, {});
  }
};
const obj5 = {
  headerTitle: "Logging Flags",
  Icon: fn(7553).PaperIcon,
  render() {
    return jsx(DevToolsLoggingFlagsScreen.default, {});
  }
};
obj.cacheStats = {
  headerTitle: "Cache Stats",
  Icon: fn(7553).PaperIcon,
  predicate() {
    return false;
  },
  render() {
    return jsx(DevToolsLocalMessageCache.default, {});
  }
};
const obj6 = {
  headerTitle: "Cache Stats",
  Icon: fn(7553).PaperIcon,
  predicate() {
    return false;
  },
  render() {
    return jsx(DevToolsLocalMessageCache.default, {});
  }
};
obj.generatedTestUsers = {
  headerTitle: "Generated Test Users",
  Icon: fn(11435).UserIcon,
  render() {
    return jsx(DevToolsGeneratedTestUsersScreen.default, {});
  }
};
const obj7 = {
  headerTitle: "Generated Test Users",
  Icon: fn(11435).UserIcon,
  render() {
    return jsx(DevToolsGeneratedTestUsersScreen.default, {});
  }
};
obj.dataStorage = {
  headerTitle: "Data Storage",
  Icon: fn(15361).FileUpIcon,
  render() {
    return jsx(DevToolsDataStorageScreen.default, {});
  }
};
const obj8 = {
  headerTitle: "Data Storage",
  Icon: fn(15361).FileUpIcon,
  render() {
    return jsx(DevToolsDataStorageScreen.default, {});
  }
};
obj.designSystems = {
  headerTitle: "Design Systems",
  Icon: fn(15076).PaintPaletteIcon,
  render() {
    return jsx(UserSettingsDesignSystemsScreen.default, {});
  }
};
const obj9 = {
  headerTitle: "Design Systems",
  Icon: fn(15076).PaintPaletteIcon,
  render() {
    return jsx(UserSettingsDesignSystemsScreen.default, {});
  }
};
obj.dismissibleContent = {
  headerTitle: "Dismissible Contents",
  Icon: fn(7553).PaperIcon,
  render() {
    return jsx(DevToolsDismissableContentsScreen.default, {});
  }
};
const obj10 = {
  headerTitle: "Dismissible Contents",
  Icon: fn(7553).PaperIcon,
  render() {
    return jsx(DevToolsDismissableContentsScreen.default, {});
  }
};
obj.gameCommunityUpsell = {
  headerTitle: "Game Community Upsell",
  Icon: fn(7553).PaperIcon,
  render() {
    return jsx(GameCommunityUpsellDevTools.default, {});
  }
};
const obj11 = {
  headerTitle: "Game Community Upsell",
  Icon: fn(7553).PaperIcon,
  render() {
    return jsx(GameCommunityUpsellDevTools.default, {});
  }
};
obj.i18n = {
  headerTitle: "Intl Testing",
  Icon: fn(15239).LanguageIcon,
  render() {
    return jsx(IntlTestingSettingsPage.default, {});
  }
};
const obj12 = {
  headerTitle: "Intl Testing",
  Icon: fn(15239).LanguageIcon,
  render() {
    return jsx(IntlTestingSettingsPage.default, {});
  }
};
obj.otatest = {
  headerTitle: "OTA Test",
  Icon: fn(4845).DownloadIcon,
  render() {
    return jsx(DevToolsOTATestScreen.default, {});
  }
};
const obj13 = {
  headerTitle: "OTA Test",
  Icon: fn(4845).DownloadIcon,
  render() {
    return jsx(DevToolsOTATestScreen.default, {});
  }
};
obj.profiling = {
  headerTitle: "Profiling",
  Icon: fn(11227).TimerIcon,
  render() {
    return jsx(DevToolsProfilingScreen.default, {});
  }
};
const obj14 = {
  headerTitle: "Profiling",
  Icon: fn(11227).TimerIcon,
  render() {
    return jsx(DevToolsProfilingScreen.default, {});
  }
};
obj.bountyQa = {
  headerTitle: "Bounty QA",
  Icon: fn(8364).TrophyIcon,
  render() {
    return jsx(DevToolsBountyQaScreen.default, {});
  }
};
const obj15 = {
  headerTitle: "Bounty QA",
  Icon: fn(8364).TrophyIcon,
  render() {
    return jsx(DevToolsBountyQaScreen.default, {});
  }
};
obj.quickActions = {
  headerTitle: "Quick Actions",
  Icon: fn(12500).MagicWandIcon,
  render() {
    return jsx(DevToolsQuickActionsScreen.default, {});
  }
};
const obj16 = {
  headerTitle: "Quick Actions",
  Icon: fn(12500).MagicWandIcon,
  render() {
    return jsx(DevToolsQuickActionsScreen.default, {});
  }
};
obj.revenuePlayground = {
  headerTitle: "Revenue Playground",
  Icon: fn(11534).PiggyBankIcon,
  render() {
    return jsx(DevToolsRevenuePlaygroundScreen.default, {});
  }
};
const obj17 = {
  headerTitle: "Revenue Playground",
  Icon: fn(11534).PiggyBankIcon,
  render() {
    return jsx(DevToolsRevenuePlaygroundScreen.default, {});
  }
};
obj.surveyOverride = {
  headerTitle: "Survey & Changelog Override",
  Icon: fn(10058).PencilIcon,
  render() {
    return jsx(UserSettingsSurveyChangelogOverride.default, {});
  }
};
const obj18 = {
  headerTitle: "Survey & Changelog Override",
  Icon: fn(10058).PencilIcon,
  render() {
    return jsx(UserSettingsSurveyChangelogOverride.default, {});
  }
};
obj.toggles = {
  headerTitle: "Toggles (Design, Reporting, etc)",
  Icon: fn(15168).EyeDropperIcon,
  render() {
    return jsx(DevToolsTogglesScreen.default, {});
  }
};
const obj19 = {
  headerTitle: "Toggles (Design, Reporting, etc)",
  Icon: fn(15168).EyeDropperIcon,
  render() {
    return jsx(DevToolsTogglesScreen.default, {});
  }
};
obj.ageVerification = {
  headerTitle: "Age Verification",
  Icon: fn(8923).ShieldIcon,
  render() {
    return jsx(DevToolsAgeVerificationScreen.default, {});
  }
};
const obj20 = {
  headerTitle: "Age Verification",
  Icon: fn(8923).ShieldIcon,
  render() {
    return jsx(DevToolsAgeVerificationScreen.default, {});
  }
};
obj.components = {
  headerTitle: "Bot Components Testing",
  Icon: fn(8958).RobotIcon,
  render() {
    return jsx(DevToolsComponentsTestingScreen.default, {});
  }
};
const obj21 = {
  headerTitle: "Bot Components Testing",
  Icon: fn(8958).RobotIcon,
  render() {
    return jsx(DevToolsComponentsTestingScreen.default, {});
  }
};
obj.shop = {
  headerTitle: "Shop",
  Icon: fn(11762).ShopIcon,
  render() {
    return jsx(DevToolsShopScreen.default, {});
  }
};
const obj22 = {
  headerTitle: "Shop",
  Icon: fn(11762).ShopIcon,
  render() {
    return jsx(DevToolsShopScreen.default, {});
  }
};
obj.shopProductPreview = {
  headerTitle: "Collectibles Tool",
  Icon: fn(11762).ShopIcon,
  render() {
    return jsx(CollectiblesTool.default, {});
  }
};
const obj23 = {
  headerTitle: "Collectibles Tool",
  Icon: fn(11762).ShopIcon,
  render() {
    return jsx(CollectiblesTool.default, {});
  }
};
obj.slayerStorefront = {
  headerTitle: "Slayer Storefront",
  Icon: fn(11762).ShopIcon,
  render() {
    return jsx(SlayerStorefrontDevTools.default, {});
  }
};
const obj24 = {
  headerTitle: "Slayer Storefront",
  Icon: fn(11762).ShopIcon,
  render() {
    return jsx(SlayerStorefrontDevTools.default, {});
  }
};
obj.actionSheets = {
  headerTitle: "Action Sheets",
  Icon: fn(15419).CompassIcon,
  render() {
    return jsx(DevToolsActionSheetsScreen.default, {});
  }
};
const obj25 = {
  headerTitle: "Action Sheets",
  Icon: fn(15419).CompassIcon,
  render() {
    return jsx(DevToolsActionSheetsScreen.default, {});
  }
};
obj.accountLinking = {
  headerTitle: "Account Linking",
  Icon: fn(4839).LinkIcon,
  render() {
    return jsx(DevToolsAccountLinkingScreen.default, {});
  }
};
const obj26 = {
  headerTitle: "Account Linking",
  Icon: fn(4839).LinkIcon,
  render() {
    return jsx(DevToolsAccountLinkingScreen.default, {});
  }
};
obj.performanceTesting = {
  headerTitle: "Performance Testing",
  Icon: fn(9638).SpeedometerIcon,
  render() {
    return jsx(DevToolsPerformanceTestingScreen.default, {});
  }
};
const obj27 = {
  headerTitle: "Performance Testing",
  Icon: fn(9638).SpeedometerIcon,
  render() {
    return jsx(DevToolsPerformanceTestingScreen.default, {});
  }
};
obj.inAppNotificationTesting = {
  headerTitle: "In App Notification Testing",
  Icon: fn(12500).MagicWandIcon,
  render() {
    return jsx(DevToolsInAppNotificationTestingScreen.default, {});
  }
};
const obj29 = { displayNameEffectsBenchmark: null };
const obj28 = {
  headerTitle: "In App Notification Testing",
  Icon: fn(12500).MagicWandIcon,
  render() {
    return jsx(DevToolsInAppNotificationTestingScreen.default, {});
  }
};
obj29.displayNameEffectsBenchmark = {
  headerTitle: "Display Name Effects Benchmark",
  Icon: fn(15076).PaintPaletteIcon,
  render() {
    return jsx(DevToolsDisplayNameEffectsBenchmarkScreen.default, {});
  }
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/devtools/native/components/DevToolsScreens.tsx");

export const DevToolsScreens = obj;
export const PerformanceTestingScreens = obj29;