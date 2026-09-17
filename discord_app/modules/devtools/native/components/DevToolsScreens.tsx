// === Module 15702: DevToolsScreens ===

// Module 15702 (DevToolsScreens)
import DevToolsExperimentsScreen from "DevToolsExperimentsScreen" /* 11964 */;
import DevToolsAnalyticsScreen from "DevToolsAnalyticsScreen" /* 15703 */;
import DevToolsBuildOverrideScreen from "DevToolsBuildOverrideScreen" /* 15704 */;
import DevToolsLoggingFlagsScreen from "DevToolsLoggingFlagsScreen" /* 15709 */;
import DevToolsLocalMessageCache from "DevToolsLocalMessageCache" /* 15710 */;
import DevToolsGeneratedTestUsersScreen from "DevToolsGeneratedTestUsersScreen" /* 15711 */;
import DevToolsDataStorageScreen from "DevToolsDataStorageScreen" /* 15737 */;
import UserSettingsDesignSystemsScreen from "UserSettingsDesignSystemsScreen" /* 15738 */;
import DevToolsDismissableContentsScreen from "DevToolsDismissableContentsScreen" /* 15739 */;
import GameCommunityUpsellDevTools from "GameCommunityUpsellDevTools" /* 15743 */;
import IntlTestingSettingsPage from "IntlTestingSettingsPage" /* 15746 */;
import DevToolsOTATestScreen from "DevToolsOTATestScreen" /* 15781 */;
import DevToolsProfilingScreen from "DevToolsProfilingScreen" /* 15784 */;
import DevToolsQuickActionsScreen from "DevToolsQuickActionsScreen" /* 15789 */;
import DevToolsRevenuePlaygroundScreen from "DevToolsRevenuePlaygroundScreen" /* 15823 */;
import UserSettingsSurveyChangelogOverride from "UserSettingsSurveyChangelogOverride" /* 15842 */;
import DevToolsTogglesScreen from "DevToolsTogglesScreen" /* 15843 */;
import DevToolsAgeVerificationScreen from "DevToolsAgeVerificationScreen" /* 15846 */;
import DevToolsComponentsTestingScreen from "DevToolsComponentsTestingScreen" /* 15847 */;
import DevToolsShopScreen from "DevToolsShopScreen" /* 15854 */;
import CollectiblesTool from "CollectiblesTool" /* 15855 */;
import SlayerStorefrontDevTools from "SlayerStorefrontDevTools" /* 15857 */;
import DevToolsActionSheetsScreen from "DevToolsActionSheetsScreen" /* 15858 */;
import DevToolsAccountLinkingScreen from "DevToolsAccountLinkingScreen" /* 15861 */;
import DevToolsPerformanceTestingScreen from "DevToolsPerformanceTestingScreen" /* 15862 */;
import DevToolsInAppNotificationTestingScreen from "DevToolsInAppNotificationTestingScreen" /* 15863 */;
import DevToolsDisplayNameEffectsBenchmarkScreen from "DevToolsDisplayNameEffectsBenchmarkScreen" /* 15864 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const obj = {
  analytics: {
    headerTitle: "Analytics",
    Icon: fn(5626).ClipboardListIcon,
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
  Icon: fn(5626).ClipboardListIcon,
  render() {
    return jsx(DevToolsAnalyticsScreen.default, {});
  }
};
obj.buildOverride = {
  headerTitle: "Build Override",
  Icon: fn(15270).RefreshIcon,
  render() {
    return jsx(DevToolsBuildOverrideScreen.default, {});
  }
};
const obj3 = {
  headerTitle: "Build Override",
  Icon: fn(15270).RefreshIcon,
  render() {
    return jsx(DevToolsBuildOverrideScreen.default, {});
  }
};
obj.experiments = {
  headerTitle: "Experiment Overrides",
  Icon: fn(15707).BeakerIcon,
  render() {
    return jsx(DevToolsExperimentsScreen.default, {});
  }
};
const obj4 = {
  headerTitle: "Experiment Overrides",
  Icon: fn(15707).BeakerIcon,
  render() {
    return jsx(DevToolsExperimentsScreen.default, {});
  }
};
obj.loggingFlags = {
  headerTitle: "Logging Flags",
  Icon: fn(8032).PaperIcon,
  render() {
    return jsx(DevToolsLoggingFlagsScreen.default, {});
  }
};
const obj5 = {
  headerTitle: "Logging Flags",
  Icon: fn(8032).PaperIcon,
  render() {
    return jsx(DevToolsLoggingFlagsScreen.default, {});
  }
};
obj.cacheStats = {
  headerTitle: "Cache Stats",
  Icon: fn(8032).PaperIcon,
  predicate() {
    return false;
  },
  render() {
    return jsx(DevToolsLocalMessageCache.default, {});
  }
};
const obj6 = {
  headerTitle: "Cache Stats",
  Icon: fn(8032).PaperIcon,
  predicate() {
    return false;
  },
  render() {
    return jsx(DevToolsLocalMessageCache.default, {});
  }
};
obj.generatedTestUsers = {
  headerTitle: "Generated Test Users",
  Icon: fn(11977).UserIcon,
  render() {
    return jsx(DevToolsGeneratedTestUsersScreen.default, {});
  }
};
const obj7 = {
  headerTitle: "Generated Test Users",
  Icon: fn(11977).UserIcon,
  render() {
    return jsx(DevToolsGeneratedTestUsersScreen.default, {});
  }
};
obj.dataStorage = {
  headerTitle: "Data Storage",
  Icon: fn(15659).FileUpIcon,
  render() {
    return jsx(DevToolsDataStorageScreen.default, {});
  }
};
const obj8 = {
  headerTitle: "Data Storage",
  Icon: fn(15659).FileUpIcon,
  render() {
    return jsx(DevToolsDataStorageScreen.default, {});
  }
};
obj.designSystems = {
  headerTitle: "Design Systems",
  Icon: fn(15377).PaintPaletteIcon,
  render() {
    return jsx(UserSettingsDesignSystemsScreen.default, {});
  }
};
const obj9 = {
  headerTitle: "Design Systems",
  Icon: fn(15377).PaintPaletteIcon,
  render() {
    return jsx(UserSettingsDesignSystemsScreen.default, {});
  }
};
obj.dismissibleContent = {
  headerTitle: "Dismissible Contents",
  Icon: fn(8032).PaperIcon,
  render() {
    return jsx(DevToolsDismissableContentsScreen.default, {});
  }
};
const obj10 = {
  headerTitle: "Dismissible Contents",
  Icon: fn(8032).PaperIcon,
  render() {
    return jsx(DevToolsDismissableContentsScreen.default, {});
  }
};
obj.gameCommunityUpsell = {
  headerTitle: "Game Community Upsell",
  Icon: fn(8032).PaperIcon,
  render() {
    return jsx(GameCommunityUpsellDevTools.default, {});
  }
};
const obj11 = {
  headerTitle: "Game Community Upsell",
  Icon: fn(8032).PaperIcon,
  render() {
    return jsx(GameCommunityUpsellDevTools.default, {});
  }
};
obj.i18n = {
  headerTitle: "Intl Testing",
  Icon: fn(15538).LanguageIcon,
  render() {
    return jsx(IntlTestingSettingsPage.default, {});
  }
};
const obj12 = {
  headerTitle: "Intl Testing",
  Icon: fn(15538).LanguageIcon,
  render() {
    return jsx(IntlTestingSettingsPage.default, {});
  }
};
obj.otatest = {
  headerTitle: "OTA Test",
  Icon: fn(4588).DownloadIcon,
  render() {
    return jsx(DevToolsOTATestScreen.default, {});
  }
};
const obj13 = {
  headerTitle: "OTA Test",
  Icon: fn(4588).DownloadIcon,
  render() {
    return jsx(DevToolsOTATestScreen.default, {});
  }
};
obj.profiling = {
  headerTitle: "Profiling",
  Icon: fn(11755).TimerIcon,
  render() {
    return jsx(DevToolsProfilingScreen.default, {});
  }
};
const obj14 = {
  headerTitle: "Profiling",
  Icon: fn(11755).TimerIcon,
  render() {
    return jsx(DevToolsProfilingScreen.default, {});
  }
};
obj.quickActions = {
  headerTitle: "Quick Actions",
  Icon: fn(10299).MagicWandIcon,
  render() {
    return jsx(DevToolsQuickActionsScreen.default, {});
  }
};
const obj15 = {
  headerTitle: "Quick Actions",
  Icon: fn(10299).MagicWandIcon,
  render() {
    return jsx(DevToolsQuickActionsScreen.default, {});
  }
};
obj.revenuePlayground = {
  headerTitle: "Revenue Playground",
  Icon: fn(12076).PiggyBankIcon,
  render() {
    return jsx(DevToolsRevenuePlaygroundScreen.default, {});
  }
};
const obj16 = {
  headerTitle: "Revenue Playground",
  Icon: fn(12076).PiggyBankIcon,
  render() {
    return jsx(DevToolsRevenuePlaygroundScreen.default, {});
  }
};
obj.surveyOverride = {
  headerTitle: "Survey & Changelog Override",
  Icon: fn(10397).PencilIcon,
  render() {
    return jsx(UserSettingsSurveyChangelogOverride.default, {});
  }
};
const obj17 = {
  headerTitle: "Survey & Changelog Override",
  Icon: fn(10397).PencilIcon,
  render() {
    return jsx(UserSettingsSurveyChangelogOverride.default, {});
  }
};
obj.toggles = {
  headerTitle: "Toggles (Design, Reporting, etc)",
  Icon: fn(15467).EyeDropperIcon,
  render() {
    return jsx(DevToolsTogglesScreen.default, {});
  }
};
const obj18 = {
  headerTitle: "Toggles (Design, Reporting, etc)",
  Icon: fn(15467).EyeDropperIcon,
  render() {
    return jsx(DevToolsTogglesScreen.default, {});
  }
};
obj.ageVerification = {
  headerTitle: "Age Verification",
  Icon: fn(9556).ShieldIcon,
  render() {
    return jsx(DevToolsAgeVerificationScreen.default, {});
  }
};
const obj19 = {
  headerTitle: "Age Verification",
  Icon: fn(9556).ShieldIcon,
  render() {
    return jsx(DevToolsAgeVerificationScreen.default, {});
  }
};
obj.components = {
  headerTitle: "Bot Components Testing",
  Icon: fn(9589).RobotIcon,
  render() {
    return jsx(DevToolsComponentsTestingScreen.default, {});
  }
};
const obj20 = {
  headerTitle: "Bot Components Testing",
  Icon: fn(9589).RobotIcon,
  render() {
    return jsx(DevToolsComponentsTestingScreen.default, {});
  }
};
obj.shop = {
  headerTitle: "Shop",
  Icon: fn(12289).ShopIcon,
  render() {
    return jsx(DevToolsShopScreen.default, {});
  }
};
const obj21 = {
  headerTitle: "Shop",
  Icon: fn(12289).ShopIcon,
  render() {
    return jsx(DevToolsShopScreen.default, {});
  }
};
obj.shopProductPreview = {
  headerTitle: "Collectibles Tool",
  Icon: fn(12289).ShopIcon,
  render() {
    return jsx(CollectiblesTool.default, {});
  }
};
const obj22 = {
  headerTitle: "Collectibles Tool",
  Icon: fn(12289).ShopIcon,
  render() {
    return jsx(CollectiblesTool.default, {});
  }
};
obj.slayerStorefront = {
  headerTitle: "Slayer Storefront",
  Icon: fn(12289).ShopIcon,
  render() {
    return jsx(SlayerStorefrontDevTools.default, {});
  }
};
const obj23 = {
  headerTitle: "Slayer Storefront",
  Icon: fn(12289).ShopIcon,
  render() {
    return jsx(SlayerStorefrontDevTools.default, {});
  }
};
obj.actionSheets = {
  headerTitle: "Action Sheets",
  Icon: fn(15717).CompassIcon,
  render() {
    return jsx(DevToolsActionSheetsScreen.default, {});
  }
};
const obj24 = {
  headerTitle: "Action Sheets",
  Icon: fn(15717).CompassIcon,
  render() {
    return jsx(DevToolsActionSheetsScreen.default, {});
  }
};
obj.accountLinking = {
  headerTitle: "Account Linking",
  Icon: fn(4582).LinkIcon,
  render() {
    return jsx(DevToolsAccountLinkingScreen.default, {});
  }
};
const obj25 = {
  headerTitle: "Account Linking",
  Icon: fn(4582).LinkIcon,
  render() {
    return jsx(DevToolsAccountLinkingScreen.default, {});
  }
};
obj.performanceTesting = {
  headerTitle: "Performance Testing",
  Icon: fn(10110).SpeedometerIcon,
  render() {
    return jsx(DevToolsPerformanceTestingScreen.default, {});
  }
};
const obj26 = {
  headerTitle: "Performance Testing",
  Icon: fn(10110).SpeedometerIcon,
  render() {
    return jsx(DevToolsPerformanceTestingScreen.default, {});
  }
};
obj.inAppNotificationTesting = {
  headerTitle: "In App Notification Testing",
  Icon: fn(10299).MagicWandIcon,
  render() {
    return jsx(DevToolsInAppNotificationTestingScreen.default, {});
  }
};
const obj28 = { displayNameEffectsBenchmark: null };
const obj27 = {
  headerTitle: "In App Notification Testing",
  Icon: fn(10299).MagicWandIcon,
  render() {
    return jsx(DevToolsInAppNotificationTestingScreen.default, {});
  }
};
obj28.displayNameEffectsBenchmark = {
  headerTitle: "Display Name Effects Benchmark",
  Icon: fn(15377).PaintPaletteIcon,
  render() {
    return jsx(DevToolsDisplayNameEffectsBenchmarkScreen.default, {});
  }
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/devtools/native/components/DevToolsScreens.tsx");

export const DevToolsScreens = obj;
export const PerformanceTestingScreens = obj28;