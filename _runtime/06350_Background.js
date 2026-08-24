// _runtime/06350_Background.js
import registerAssetDefault from "06351_registerAsset.js";
import registerAssetDefault2 from "06352_registerAsset.js";
import registerAssetDefault3 from "06353_registerAsset.js";
import registerAssetDefault4 from "06354_registerAsset.js";
import registerAssetDefault5 from "06355_registerAsset.js";

const items = [registerAssetDefault, registerAssetDefault2, registerAssetDefault3, registerAssetDefault4, registerAssetDefault5];
for (const key10025 in require("metro/06356__.js")) {
  let tmp2 = key10025;
  arg5[key10025] = require("metro/06356__.js")[key10025];
  continue;
}

export const Background = require("Background").Background;
export const Badge = require("StyleSheet").Badge;
export const Button = require("ButtonLink").Button;
export const getDefaultSidebarWidth = require("getDefaultSidebarWidth").getDefaultSidebarWidth;
export const getDefaultHeaderHeight = require("getDefaultHeaderHeight").getDefaultHeaderHeight;
export const getHeaderTitle = require("getHeaderTitle").getHeaderTitle;
export const Header = require("StyleSheet").Header;
export const HeaderBackButton = require("HeaderBackButton").HeaderBackButton;
export const HeaderBackContext = require("HeaderBackContext").HeaderBackContext;
export const HeaderBackground = require("HeaderBackground").HeaderBackground;
export const HeaderButton = require("HeaderButton").HeaderButton;
export const HeaderHeightContext = require("HeaderHeightContext").HeaderHeightContext;
export const HeaderShownContext = require("HeaderShownContext").HeaderShownContext;
export const HeaderTitle = require("HeaderTitle").HeaderTitle;
export const useHeaderHeight = require("useHeaderHeight").useHeaderHeight;
export const getLabel = require("getLabel").getLabel;
export const Label = require("Label").Label;
export const Lazy = require("Lazy").Lazy;
export const MissingIcon = require("MissingIcon").MissingIcon;
export const PlatformPressable = require("Animated").PlatformPressable;
export const ResourceSavingView = require("ResourceSavingView").ResourceSavingView;
export const SafeAreaProviderCompat = require("initialWindowMetrics").SafeAreaProviderCompat;
export const Screen = require("Screen").Screen;
export const Text = require("Text").Text;
export const useFrameSize = require("useFrameSize").useFrameSize;
export const Assets = items;