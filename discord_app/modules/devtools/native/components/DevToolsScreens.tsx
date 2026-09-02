// === Module 15406: DevToolsScreens ===

// Module 15406 (DevToolsScreens)
import noopAll from "noop" /* 19 */;
import UserExperimentDebugView from "UserExperimentDebugView" /* 11608 */;
import CommonProperty from "CommonProperty" /* 15407 */;
import jsx2 from "jsx" /* 15408 */;
import DevToolsLoggingFlagsScreen from "DevToolsLoggingFlagsScreen" /* 15413 */;
import CacheLogEntry from "CacheLogEntry" /* 15414 */;
import PoolIdInput from "PoolIdInput" /* 15415 */;
import DevToolsPersistedStoresActionSheet from "DevToolsPersistedStoresActionSheet" /* 15441 */;
import SettingsDesignSystemsScreen from "SettingsDesignSystemsScreen" /* 15442 */;
import DismissableContentsEmpty from "DismissableContentsEmpty" /* 15443 */;
import MultiGuildDevTools from "MultiGuildDevTools" /* 15447 */;
import TestLocaleSelector from "TestLocaleSelector" /* 15450 */;
import OtaVerificationActionSheet from "OtaVerificationActionSheet" /* 15485 */;
import DevToolsProfilingScreen from "DevToolsProfilingScreen" /* 15488 */;
import handleNewUserOnboarding from "handleNewUserOnboarding" /* 15491 */;
import describeServerError from "describeServerError" /* 15514 */;
import SurveyOverrideInfoActionSheet from "SurveyOverrideInfoActionSheet" /* 15533 */;
import fuzzySearchToggle from "fuzzySearchToggle" /* 15534 */;
import showAgeVerificationTestModal from "showAgeVerificationTestModal" /* 15537 */;
import Select from "Select" /* 15538 */;
import DevToolsShopScreen from "DevToolsShopScreen" /* 15545 */;
import FramePreviewOverrideSection from "FramePreviewOverrideSection" /* 15546 */;
import SlayerStorefrontDevTools from "SlayerStorefrontDevTools" /* 15548 */;
import ActionSheetSelector from "ActionSheetSelector" /* 15549 */;
import DevToolsAccountLinkingScreen from "DevToolsAccountLinkingScreen" /* 15552 */;
import _mod15553 from "module_15553" /* 15553 */;
import getSelectedGuildChannel from "getSelectedGuildChannel" /* 15554 */;
import effectName from "effectName" /* 15555 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
let obj = { analytics: null, buildOverride: null, experiments: null, loggingFlags: null, cacheStats: null, generatedTestUsers: null, dataStorage: null, designSystems: null, dismissibleContent: null, gameCommunityUpsell: null, i18n: null, otatest: null, profiling: null, quickActions: null, revenuePlayground: null, surveyOverride: null, toggles: null, ageVerification: null, components: null, shop: null, shopProductPreview: null, slayerStorefront: null, actionSheets: null, accountLinking: null, performanceTesting: null, inAppNotificationTesting: null };
obj = {
  headerTitle: "Analytics",
  Icon: require("ClipboardListIcon").ClipboardListIcon,
  render() {
    return jsx(CommonProperty.default, {});
  }
};
obj[0] = obj;
obj = {
  headerTitle: "Build Override",
  Icon: require("RefreshIcon").RefreshIcon,
  render() {
    return jsx(jsx2.default, {});
  }
};
obj[1] = obj;
obj[2] = {
  headerTitle: "Experiment Overrides",
  Icon: require("BeakerIcon").BeakerIcon,
  render() {
    return jsx(UserExperimentDebugView.default, {});
  }
};
const obj1 = {
  headerTitle: "Experiment Overrides",
  Icon: require("BeakerIcon").BeakerIcon,
  render() {
    return jsx(UserExperimentDebugView.default, {});
  }
};
obj[3] = {
  headerTitle: "Logging Flags",
  Icon: require("PaperIcon").PaperIcon,
  render() {
    return jsx(DevToolsLoggingFlagsScreen.default, {});
  }
};
const obj2 = {
  headerTitle: "Logging Flags",
  Icon: require("PaperIcon").PaperIcon,
  render() {
    return jsx(DevToolsLoggingFlagsScreen.default, {});
  }
};
obj[4] = {
  headerTitle: "Cache Stats",
  Icon: require("PaperIcon").PaperIcon,
  predicate() {
    return false;
  },
  render() {
    return jsx(CacheLogEntry.default, {});
  }
};
const obj3 = {
  headerTitle: "Cache Stats",
  Icon: require("PaperIcon").PaperIcon,
  predicate() {
    return false;
  },
  render() {
    return jsx(CacheLogEntry.default, {});
  }
};
obj[5] = {
  headerTitle: "Generated Test Users",
  Icon: require("UserIcon").UserIcon,
  render() {
    return jsx(PoolIdInput.default, {});
  }
};
const obj4 = {
  headerTitle: "Generated Test Users",
  Icon: require("UserIcon").UserIcon,
  render() {
    return jsx(PoolIdInput.default, {});
  }
};
obj[6] = {
  headerTitle: "Data Storage",
  Icon: require("FileUpIcon").FileUpIcon,
  render() {
    return jsx(DevToolsPersistedStoresActionSheet.default, {});
  }
};
const obj5 = {
  headerTitle: "Data Storage",
  Icon: require("FileUpIcon").FileUpIcon,
  render() {
    return jsx(DevToolsPersistedStoresActionSheet.default, {});
  }
};
obj[7] = {
  headerTitle: "Design Systems",
  Icon: require("PaintPaletteIcon").PaintPaletteIcon,
  render() {
    return jsx(SettingsDesignSystemsScreen.default, {});
  }
};
const obj6 = {
  headerTitle: "Design Systems",
  Icon: require("PaintPaletteIcon").PaintPaletteIcon,
  render() {
    return jsx(SettingsDesignSystemsScreen.default, {});
  }
};
obj[8] = {
  headerTitle: "Dismissible Contents",
  Icon: require("PaperIcon").PaperIcon,
  render() {
    return jsx(DismissableContentsEmpty.default, {});
  }
};
const obj7 = {
  headerTitle: "Dismissible Contents",
  Icon: require("PaperIcon").PaperIcon,
  render() {
    return jsx(DismissableContentsEmpty.default, {});
  }
};
obj[9] = {
  headerTitle: "Game Community Upsell",
  Icon: require("PaperIcon").PaperIcon,
  render() {
    return jsx(MultiGuildDevTools.default, {});
  }
};
const obj8 = {
  headerTitle: "Game Community Upsell",
  Icon: require("PaperIcon").PaperIcon,
  render() {
    return jsx(MultiGuildDevTools.default, {});
  }
};
obj[10] = {
  headerTitle: "Intl Testing",
  Icon: require("LanguageIcon").LanguageIcon,
  render() {
    return jsx(TestLocaleSelector.default, {});
  }
};
const obj9 = {
  headerTitle: "Intl Testing",
  Icon: require("LanguageIcon").LanguageIcon,
  render() {
    return jsx(TestLocaleSelector.default, {});
  }
};
obj[11] = {
  headerTitle: "OTA Test",
  Icon: require("DownloadIcon").DownloadIcon,
  render() {
    return jsx(OtaVerificationActionSheet.default, {});
  }
};
const obj10 = {
  headerTitle: "OTA Test",
  Icon: require("DownloadIcon").DownloadIcon,
  render() {
    return jsx(OtaVerificationActionSheet.default, {});
  }
};
obj[12] = {
  headerTitle: "Profiling",
  Icon: require("TimerIcon").TimerIcon,
  render() {
    return jsx(DevToolsProfilingScreen.default, {});
  }
};
const obj11 = {
  headerTitle: "Profiling",
  Icon: require("TimerIcon").TimerIcon,
  render() {
    return jsx(DevToolsProfilingScreen.default, {});
  }
};
obj[13] = {
  headerTitle: "Quick Actions",
  Icon: require("MagicWandIcon").MagicWandIcon,
  render() {
    return jsx(handleNewUserOnboarding.default, {});
  }
};
const obj12 = {
  headerTitle: "Quick Actions",
  Icon: require("MagicWandIcon").MagicWandIcon,
  render() {
    return jsx(handleNewUserOnboarding.default, {});
  }
};
obj[14] = {
  headerTitle: "Revenue Playground",
  Icon: require("PiggyBankIcon").PiggyBankIcon,
  render() {
    return jsx(describeServerError.default, {});
  }
};
const obj13 = {
  headerTitle: "Revenue Playground",
  Icon: require("PiggyBankIcon").PiggyBankIcon,
  render() {
    return jsx(describeServerError.default, {});
  }
};
obj[15] = {
  headerTitle: "Survey & Changelog Override",
  Icon: require("PencilIcon").PencilIcon,
  render() {
    return jsx(SurveyOverrideInfoActionSheet.default, {});
  }
};
const obj14 = {
  headerTitle: "Survey & Changelog Override",
  Icon: require("PencilIcon").PencilIcon,
  render() {
    return jsx(SurveyOverrideInfoActionSheet.default, {});
  }
};
obj[16] = {
  headerTitle: "Toggles (Design, Reporting, etc)",
  Icon: require("EyeDropperIcon").EyeDropperIcon,
  render() {
    return jsx(fuzzySearchToggle.default, {});
  }
};
const obj15 = {
  headerTitle: "Toggles (Design, Reporting, etc)",
  Icon: require("EyeDropperIcon").EyeDropperIcon,
  render() {
    return jsx(fuzzySearchToggle.default, {});
  }
};
obj[17] = {
  headerTitle: "Age Verification",
  Icon: require("ShieldIcon").ShieldIcon,
  render() {
    return jsx(showAgeVerificationTestModal.default, {});
  }
};
const obj16 = {
  headerTitle: "Age Verification",
  Icon: require("ShieldIcon").ShieldIcon,
  render() {
    return jsx(showAgeVerificationTestModal.default, {});
  }
};
obj[18] = {
  headerTitle: "Bot Components Testing",
  Icon: require("RobotIcon").RobotIcon,
  render() {
    return jsx(Select.default, {});
  }
};
const obj17 = {
  headerTitle: "Bot Components Testing",
  Icon: require("RobotIcon").RobotIcon,
  render() {
    return jsx(Select.default, {});
  }
};
obj[19] = {
  headerTitle: "Shop",
  Icon: require("ShopIcon").ShopIcon,
  render() {
    return jsx(DevToolsShopScreen.default, {});
  }
};
const obj18 = {
  headerTitle: "Shop",
  Icon: require("ShopIcon").ShopIcon,
  render() {
    return jsx(DevToolsShopScreen.default, {});
  }
};
obj[20] = {
  headerTitle: "Collectibles Tool",
  Icon: require("ShopIcon").ShopIcon,
  render() {
    return jsx(FramePreviewOverrideSection.default, {});
  }
};
const obj19 = {
  headerTitle: "Collectibles Tool",
  Icon: require("ShopIcon").ShopIcon,
  render() {
    return jsx(FramePreviewOverrideSection.default, {});
  }
};
obj[21] = {
  headerTitle: "Slayer Storefront",
  Icon: require("ShopIcon").ShopIcon,
  render() {
    return jsx(SlayerStorefrontDevTools.default, {});
  }
};
const obj20 = {
  headerTitle: "Slayer Storefront",
  Icon: require("ShopIcon").ShopIcon,
  render() {
    return jsx(SlayerStorefrontDevTools.default, {});
  }
};
obj[22] = {
  headerTitle: "Action Sheets",
  Icon: require("CompassIcon").CompassIcon,
  render() {
    return jsx(ActionSheetSelector.default, {});
  }
};
const obj21 = {
  headerTitle: "Action Sheets",
  Icon: require("CompassIcon").CompassIcon,
  render() {
    return jsx(ActionSheetSelector.default, {});
  }
};
obj[23] = {
  headerTitle: "Account Linking",
  Icon: require("LinkIcon").LinkIcon,
  render() {
    return jsx(DevToolsAccountLinkingScreen.default, {});
  }
};
const obj22 = {
  headerTitle: "Account Linking",
  Icon: require("LinkIcon").LinkIcon,
  render() {
    return jsx(DevToolsAccountLinkingScreen.default, {});
  }
};
obj[24] = {
  headerTitle: "Performance Testing",
  Icon: require("SpeedometerIcon").SpeedometerIcon,
  render() {
    return jsx(_mod15553.default, {});
  }
};
const obj23 = {
  headerTitle: "Performance Testing",
  Icon: require("SpeedometerIcon").SpeedometerIcon,
  render() {
    return jsx(_mod15553.default, {});
  }
};
obj[25] = {
  headerTitle: "In App Notification Testing",
  Icon: require("MagicWandIcon").MagicWandIcon,
  render() {
    return jsx(getSelectedGuildChannel.default, {});
  }
};
const obj25 = { displayNameEffectsBenchmark: null };
const obj24 = {
  headerTitle: "In App Notification Testing",
  Icon: require("MagicWandIcon").MagicWandIcon,
  render() {
    return jsx(getSelectedGuildChannel.default, {});
  }
};
obj25[0] = {
  headerTitle: "Display Name Effects Benchmark",
  Icon: require("PaintPaletteIcon").PaintPaletteIcon,
  render() {
    return jsx(effectName.default, {});
  }
};
const obj26 = {
  headerTitle: "Display Name Effects Benchmark",
  Icon: require("PaintPaletteIcon").PaintPaletteIcon,
  render() {
    return jsx(effectName.default, {});
  }
};
const result = require("set").fileFinishedImporting("modules/devtools/native/components/DevToolsScreens.tsx");

export const DevToolsScreens = obj;
export const PerformanceTestingScreens = obj25;