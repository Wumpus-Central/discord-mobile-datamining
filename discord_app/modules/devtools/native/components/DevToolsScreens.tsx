// === Module 17154: DevToolsScreens ===

// Module 17154 (DevToolsScreens)
import DevToolsExperimentsScreen from "DevToolsExperimentsScreen" /* 12340 */;
import DevToolsAnalyticsScreen from "DevToolsAnalyticsScreen" /* 17155 */;
import openBuildOverridesSettings from "openBuildOverridesSettings" /* 17156 */;
import DevToolsLoggingFlagsScreen from "DevToolsLoggingFlagsScreen" /* 17159 */;
import DevToolsLocalMessageCache from "DevToolsLocalMessageCache" /* 17160 */;
import DevToolsGeneratedTestUsersScreen from "DevToolsGeneratedTestUsersScreen" /* 17161 */;
import DevToolsDataStorageScreen from "DevToolsDataStorageScreen" /* 17187 */;
import UserSettingsDesignSystemsScreen from "UserSettingsDesignSystemsScreen" /* 17188 */;
import DevToolsDismissableContentsScreen from "DevToolsDismissableContentsScreen" /* 17189 */;
import GameCommunityUpsellDevTools from "GameCommunityUpsellDevTools" /* 17193 */;
import IntlTestingSettingsPage from "IntlTestingSettingsPage" /* 17196 */;
import DevToolsOTATestScreen from "DevToolsOTATestScreen" /* 17231 */;
import DevToolsProfilingScreen from "DevToolsProfilingScreen" /* 17234 */;
import DevToolsBountyQaScreen from "DevToolsBountyQaScreen" /* 17239 */;
import DevToolsQuickActionsScreen from "DevToolsQuickActionsScreen" /* 17240 */;
import DevToolsRevenuePlaygroundScreen from "DevToolsRevenuePlaygroundScreen" /* 17267 */;
import DevToolsCampaignsScreen from "DevToolsCampaignsScreen" /* 17291 */;
import UserSettingsSurveyChangelogOverride from "UserSettingsSurveyChangelogOverride" /* 17297 */;
import DevToolsTogglesScreen from "DevToolsTogglesScreen" /* 17299 */;
import DevToolsComponentsTestingScreen from "DevToolsComponentsTestingScreen" /* 17301 */;
import DevToolsShopScreen from "DevToolsShopScreen" /* 17302 */;
import CollectiblesTool from "CollectiblesTool" /* 17303 */;
import SlayerStorefrontDevTools from "SlayerStorefrontDevTools" /* 17305 */;
import DevToolsActionSheetsScreen from "DevToolsActionSheetsScreen" /* 17306 */;
import DevToolsAccountLinkingScreen from "DevToolsAccountLinkingScreen" /* 17313 */;
import DevToolsPerformanceTestingScreen from "DevToolsPerformanceTestingScreen" /* 17314 */;
import DevToolsInAppNotificationTestingScreen from "DevToolsInAppNotificationTestingScreen" /* 17315 */;
import DevToolsDisplayNameEffectsBenchmarkScreen from "DevToolsDisplayNameEffectsBenchmarkScreen" /* 17316 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const obj = {
  analytics: {
    headerTitle: "Analytics",
    Icon: fn(6971).ClipboardListIcon,
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
  campaigns: null,
  surveyOverride: null,
  toggles: null,
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
  Icon: fn(6971).ClipboardListIcon,
  render() {
    return jsx(DevToolsAnalyticsScreen.default, {});
  }
};
obj.buildOverride = {
  headerTitle: "Build Overrides",
  Icon: fn(14025).RefreshIcon,
  onPress() {
    const result = openBuildOverridesSettings.openBuildOverridesSettings();
  }
};
const obj3 = {
  headerTitle: "Build Overrides",
  Icon: fn(14025).RefreshIcon,
  onPress() {
    const result = openBuildOverridesSettings.openBuildOverridesSettings();
  }
};
obj.experiments = {
  headerTitle: "Experiment Overrides",
  Icon: fn(17157).BeakerIcon,
  render() {
    return jsx(DevToolsExperimentsScreen.default, {});
  }
};
const obj4 = {
  headerTitle: "Experiment Overrides",
  Icon: fn(17157).BeakerIcon,
  render() {
    return jsx(DevToolsExperimentsScreen.default, {});
  }
};
obj.loggingFlags = {
  headerTitle: "Logging Flags",
  Icon: fn(9002).PaperIcon,
  render() {
    return jsx(DevToolsLoggingFlagsScreen.default, {});
  }
};
const obj5 = {
  headerTitle: "Logging Flags",
  Icon: fn(9002).PaperIcon,
  render() {
    return jsx(DevToolsLoggingFlagsScreen.default, {});
  }
};
obj.cacheStats = {
  headerTitle: "Cache Stats",
  Icon: fn(9002).PaperIcon,
  predicate() {
    return false;
  },
  render() {
    return jsx(DevToolsLocalMessageCache.default, {});
  }
};
const obj6 = {
  headerTitle: "Cache Stats",
  Icon: fn(9002).PaperIcon,
  predicate() {
    return false;
  },
  render() {
    return jsx(DevToolsLocalMessageCache.default, {});
  }
};
obj.generatedTestUsers = {
  headerTitle: "Generated Test Users",
  Icon: fn(12359).UserIcon,
  render() {
    return jsx(DevToolsGeneratedTestUsersScreen.default, {});
  }
};
const obj7 = {
  headerTitle: "Generated Test Users",
  Icon: fn(12359).UserIcon,
  render() {
    return jsx(DevToolsGeneratedTestUsersScreen.default, {});
  }
};
obj.dataStorage = {
  headerTitle: "Data Storage",
  Icon: fn(12377).FileUpIcon,
  render() {
    return jsx(DevToolsDataStorageScreen.default, {});
  }
};
const obj8 = {
  headerTitle: "Data Storage",
  Icon: fn(12377).FileUpIcon,
  render() {
    return jsx(DevToolsDataStorageScreen.default, {});
  }
};
obj.designSystems = {
  headerTitle: "Design Systems",
  Icon: fn(16822).PaintPaletteIcon,
  render() {
    return jsx(UserSettingsDesignSystemsScreen.default, {});
  }
};
const obj9 = {
  headerTitle: "Design Systems",
  Icon: fn(16822).PaintPaletteIcon,
  render() {
    return jsx(UserSettingsDesignSystemsScreen.default, {});
  }
};
obj.dismissibleContent = {
  headerTitle: "Dismissible Contents",
  Icon: fn(9002).PaperIcon,
  render() {
    return jsx(DevToolsDismissableContentsScreen.default, {});
  }
};
const obj10 = {
  headerTitle: "Dismissible Contents",
  Icon: fn(9002).PaperIcon,
  render() {
    return jsx(DevToolsDismissableContentsScreen.default, {});
  }
};
obj.gameCommunityUpsell = {
  headerTitle: "Game Community Upsell",
  Icon: fn(9002).PaperIcon,
  render() {
    return jsx(GameCommunityUpsellDevTools.default, {});
  }
};
const obj11 = {
  headerTitle: "Game Community Upsell",
  Icon: fn(9002).PaperIcon,
  render() {
    return jsx(GameCommunityUpsellDevTools.default, {});
  }
};
obj.i18n = {
  headerTitle: "Intl Testing",
  Icon: fn(14204).LanguageIcon,
  render() {
    return jsx(IntlTestingSettingsPage.default, {});
  }
};
const obj12 = {
  headerTitle: "Intl Testing",
  Icon: fn(14204).LanguageIcon,
  render() {
    return jsx(IntlTestingSettingsPage.default, {});
  }
};
obj.otatest = {
  headerTitle: "OTA Test",
  Icon: fn(5714).DownloadIcon,
  render() {
    return jsx(DevToolsOTATestScreen.default, {});
  }
};
const obj13 = {
  headerTitle: "OTA Test",
  Icon: fn(5714).DownloadIcon,
  render() {
    return jsx(DevToolsOTATestScreen.default, {});
  }
};
obj.profiling = {
  headerTitle: "Profiling",
  Icon: fn(12065).TimerIcon,
  render() {
    return jsx(DevToolsProfilingScreen.default, {});
  }
};
const obj14 = {
  headerTitle: "Profiling",
  Icon: fn(12065).TimerIcon,
  render() {
    return jsx(DevToolsProfilingScreen.default, {});
  }
};
obj.bountyQa = {
  headerTitle: "Bounty QA",
  Icon: fn(8757).TrophyIcon,
  render() {
    return jsx(DevToolsBountyQaScreen.default, {});
  }
};
const obj15 = {
  headerTitle: "Bounty QA",
  Icon: fn(8757).TrophyIcon,
  render() {
    return jsx(DevToolsBountyQaScreen.default, {});
  }
};
obj.quickActions = {
  headerTitle: "Quick Actions",
  Icon: fn(11438).MagicWandIcon,
  render() {
    return jsx(DevToolsQuickActionsScreen.default, {});
  }
};
const obj16 = {
  headerTitle: "Quick Actions",
  Icon: fn(11438).MagicWandIcon,
  render() {
    return jsx(DevToolsQuickActionsScreen.default, {});
  }
};
obj.revenuePlayground = {
  headerTitle: "Revenue Playground",
  Icon: fn(12548).PiggyBankIcon,
  render() {
    return jsx(DevToolsRevenuePlaygroundScreen.default, {});
  }
};
const obj17 = {
  headerTitle: "Revenue Playground",
  Icon: fn(12548).PiggyBankIcon,
  render() {
    return jsx(DevToolsRevenuePlaygroundScreen.default, {});
  }
};
obj.campaigns = {
  headerTitle: "Campaigns",
  Icon: fn(12548).PiggyBankIcon,
  render() {
    return jsx(DevToolsCampaignsScreen.default, {});
  }
};
const obj18 = {
  headerTitle: "Campaigns",
  Icon: fn(12548).PiggyBankIcon,
  render() {
    return jsx(DevToolsCampaignsScreen.default, {});
  }
};
obj.surveyOverride = {
  headerTitle: "Survey & Changelog Override",
  Icon: fn(9582).PencilIcon,
  render() {
    return jsx(UserSettingsSurveyChangelogOverride.default, {});
  }
};
const obj19 = {
  headerTitle: "Survey & Changelog Override",
  Icon: fn(9582).PencilIcon,
  render() {
    return jsx(UserSettingsSurveyChangelogOverride.default, {});
  }
};
obj.toggles = {
  headerTitle: "Toggles (Design, Reporting, etc)",
  Icon: fn(16912).EyeDropperIcon,
  render() {
    return jsx(DevToolsTogglesScreen.default, {});
  }
};
const obj20 = {
  headerTitle: "Toggles (Design, Reporting, etc)",
  Icon: fn(16912).EyeDropperIcon,
  render() {
    return jsx(DevToolsTogglesScreen.default, {});
  }
};
obj.components = {
  headerTitle: "Bot Components Testing",
  Icon: fn(12220).RobotIcon,
  render() {
    return jsx(DevToolsComponentsTestingScreen.default, {});
  }
};
const obj21 = {
  headerTitle: "Bot Components Testing",
  Icon: fn(12220).RobotIcon,
  render() {
    return jsx(DevToolsComponentsTestingScreen.default, {});
  }
};
obj.shop = {
  headerTitle: "Shop",
  Icon: fn(13050).ShopIcon,
  render() {
    return jsx(DevToolsShopScreen.default, {});
  }
};
const obj22 = {
  headerTitle: "Shop",
  Icon: fn(13050).ShopIcon,
  render() {
    return jsx(DevToolsShopScreen.default, {});
  }
};
obj.shopProductPreview = {
  headerTitle: "Collectibles Tool",
  Icon: fn(13050).ShopIcon,
  render() {
    return jsx(CollectiblesTool.default, {});
  }
};
const obj23 = {
  headerTitle: "Collectibles Tool",
  Icon: fn(13050).ShopIcon,
  render() {
    return jsx(CollectiblesTool.default, {});
  }
};
obj.slayerStorefront = {
  headerTitle: "Slayer Storefront",
  Icon: fn(13050).ShopIcon,
  render() {
    return jsx(SlayerStorefrontDevTools.default, {});
  }
};
const obj24 = {
  headerTitle: "Slayer Storefront",
  Icon: fn(13050).ShopIcon,
  render() {
    return jsx(SlayerStorefrontDevTools.default, {});
  }
};
obj.actionSheets = {
  headerTitle: "Action Sheets",
  Icon: fn(17167).CompassIcon,
  render() {
    return jsx(DevToolsActionSheetsScreen.default, {});
  }
};
const obj25 = {
  headerTitle: "Action Sheets",
  Icon: fn(17167).CompassIcon,
  render() {
    return jsx(DevToolsActionSheetsScreen.default, {});
  }
};
obj.accountLinking = {
  headerTitle: "Account Linking",
  Icon: fn(5708).LinkIcon,
  render() {
    return jsx(DevToolsAccountLinkingScreen.default, {});
  }
};
const obj26 = {
  headerTitle: "Account Linking",
  Icon: fn(5708).LinkIcon,
  render() {
    return jsx(DevToolsAccountLinkingScreen.default, {});
  }
};
obj.performanceTesting = {
  headerTitle: "Performance Testing",
  Icon: fn(10333).SpeedometerIcon,
  render() {
    return jsx(DevToolsPerformanceTestingScreen.default, {});
  }
};
const obj27 = {
  headerTitle: "Performance Testing",
  Icon: fn(10333).SpeedometerIcon,
  render() {
    return jsx(DevToolsPerformanceTestingScreen.default, {});
  }
};
obj.inAppNotificationTesting = {
  headerTitle: "In App Notification Testing",
  Icon: fn(11438).MagicWandIcon,
  render() {
    return jsx(DevToolsInAppNotificationTestingScreen.default, {});
  }
};
const obj29 = { displayNameEffectsBenchmark: null };
const obj28 = {
  headerTitle: "In App Notification Testing",
  Icon: fn(11438).MagicWandIcon,
  render() {
    return jsx(DevToolsInAppNotificationTestingScreen.default, {});
  }
};
obj29.displayNameEffectsBenchmark = {
  headerTitle: "Display Name Effects Benchmark",
  Icon: fn(16822).PaintPaletteIcon,
  render() {
    return jsx(DevToolsDisplayNameEffectsBenchmarkScreen.default, {});
  }
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/devtools/native/components/DevToolsScreens.tsx");

export const DevToolsScreens = obj;
export const PerformanceTestingScreens = obj29;