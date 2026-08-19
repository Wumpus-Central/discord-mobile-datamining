// discord_app/modules/devtools/native/components/DevToolsScreens.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import UserExperimentDebugView from "screens/DevToolsExperimentsScreen.tsx";
import CommonProperty from "screens/DevToolsAnalyticsScreen.tsx";
import jsx2 from "screens/DevToolsBuildOverrideScreen.tsx";
import DevToolsLoggingFlagsScreen from "screens/DevToolsLoggingFlagsScreen.tsx";
import CacheLogEntry from "screens/DevToolsLocalMessageCache.tsx";
import PoolIdInput from "screens/DevToolsGeneratedTestUsersScreen.tsx";
import DevToolsPersistedStoresActionSheet from "screens/DevToolsDataStorageScreen.tsx";
import SettingsDesignSystemsScreen from "../../../user_settings/design_system/native/UserSettingsDesignSystemsScreen.tsx";
import DismissableContentsEmpty from "screens/DevToolsDismissableContentsScreen.tsx";
import MultiGuildDevTools from "../../../game_community_upsell/native/GameCommunityUpsellDevTools.tsx";
import TestLocaleSelector from "../../../intl/native/IntlTestingSettingsPage.tsx";
import OtaVerificationActionSheet from "screens/DevToolsOTATestScreen.tsx";
import DevToolsProfilingScreen from "screens/DevToolsProfilingScreen.tsx";
import handleNewUserOnboarding from "screens/DevToolsQuickActionsScreen.tsx";
import describeServerError from "screens/DevToolsRevenuePlaygroundScreen.tsx";
import SurveyOverrideInfoActionSheet from "../../../user_settings/changelog/native/UserSettingsSurveyChangelogOverride.tsx";
import fuzzySearchToggle from "screens/DevToolsTogglesScreen.tsx";
import showAgeVerificationTestModal from "screens/DevToolsAgeVerificationScreen.tsx";
import Select from "screens/DevToolsComponentsTestingScreen.tsx";
import DevToolsShopScreen from "screens/DevToolsShopScreen.tsx";
import FramePreviewOverrideSection from "../../../collectibles/native/tooling/CollectiblesTool.tsx";
import ActionSheetSelector from "screens/DevToolsActionSheetsScreen.tsx";
import DevToolsAccountLinkingScreen from "screens/DevToolsAccountLinkingScreen.tsx";
import _mod15178 from "screens/DevToolsPerformanceTestingScreen.tsx";
import getSelectedGuildChannel from "screens/DevToolsInAppNotificationTestingScreen.tsx";
import effectName from "screens/DevToolsDisplayNameEffectsBenchmarkScreen.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";

require = fn;
noopAll;
let obj = {
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
  headerTitle: "Action Sheets",
  Icon: require("CompassIcon").CompassIcon,
  render() {
    return jsx(ActionSheetSelector.default, {});
  }
};
const obj20 = {
  headerTitle: "Action Sheets",
  Icon: require("CompassIcon").CompassIcon,
  render() {
    return jsx(ActionSheetSelector.default, {});
  }
};
obj[22] = {
  headerTitle: "Account Linking",
  Icon: require("LinkIcon").LinkIcon,
  render() {
    return jsx(DevToolsAccountLinkingScreen.default, {});
  }
};
const obj21 = {
  headerTitle: "Account Linking",
  Icon: require("LinkIcon").LinkIcon,
  render() {
    return jsx(DevToolsAccountLinkingScreen.default, {});
  }
};
obj[23] = {
  headerTitle: "Performance Testing",
  Icon: require("SpeedometerIcon").SpeedometerIcon,
  render() {
    return jsx(_mod15178.default, {});
  }
};
const obj22 = {
  headerTitle: "Performance Testing",
  Icon: require("SpeedometerIcon").SpeedometerIcon,
  render() {
    return jsx(_mod15178.default, {});
  }
};
obj[24] = {
  headerTitle: "In App Notification Testing",
  Icon: require("MagicWandIcon").MagicWandIcon,
  render() {
    return jsx(getSelectedGuildChannel.default, {});
  }
};
const obj24 = { displayNameEffectsBenchmark: null };
const obj23 = {
  headerTitle: "In App Notification Testing",
  Icon: require("MagicWandIcon").MagicWandIcon,
  render() {
    return jsx(getSelectedGuildChannel.default, {});
  }
};
obj24[0] = {
  headerTitle: "Display Name Effects Benchmark",
  Icon: require("PaintPaletteIcon").PaintPaletteIcon,
  render() {
    return jsx(effectName.default, {});
  }
};
const obj25 = {
  headerTitle: "Display Name Effects Benchmark",
  Icon: require("PaintPaletteIcon").PaintPaletteIcon,
  render() {
    return jsx(effectName.default, {});
  }
};
const result = require("obj132").fileFinishedImporting("modules/devtools/native/components/DevToolsScreens.tsx");

export const DevToolsScreens = obj;
export const PerformanceTestingScreens = obj24;