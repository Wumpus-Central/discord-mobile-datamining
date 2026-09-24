// === Module 9519: AppIconTypes ===

// Module 9519 (AppIconTypes)
import size from "module_2" /* 2 */;

const obj = { DEFAULT: "AppIcon" };
const obj2 = { BRAND_DARK: "BrandDarkIcon", BRAND_INVERTED: "BrandInvertedIcon", MATTE_LIGHT: "MatteLightIcon", MATTE_DARK: "MatteDarkIcon", PASTEL: "PastelIcon", PIRATE: "PirateIcon", CAMO: "CamoIcon", SUNSET: "SunsetIcon", GALAXY: "GalaxyIcon", Y2K: "Y2KIcon", CHERRY_BLOSSOM: "CherryBlossomIcon", BEANIE: "BeanieIcon", GAMING: "GamingIcon", CIRCUIT: "CircuitIcon", HOLO_WAVES: "HoloWavesIcon", BLUSH: "BlushIcon", ANGRY: "AngryIcon", MANGA: "MangaIcon", CONTROLLER: "ControllerIcon", MUSHROOM: "MushroomIcon", BLURPLE_TWILIGHT: "BlurpleTwilightIcon", IN_RAINBOWS: "InRainbowsIcon", COLOR_WAVE: "ColorWaveIcon", MIDNIGHT_PRISM: "MidnightPrismIcon" };
const obj3 = { DRIP: "DripIcon", SLIMY: "SlimyIcon", ZOMBIE: "ZombieIcon", CLYDE_STEIN: "ClydeSteinIcon" };
const merged = Object.assign(obj);
const merged1 = Object.assign(obj2);
const merged2 = Object.assign(obj3);
const result = size.fileFinishedImporting("modules/app_icons/AppIconTypes.tsx");

export const FreemiumAppIconIds = obj;
export const PremiumAppIconIds = obj2;
export const LimitedTimeAppIconIds = obj3;
export const MasterAppIconIds = {};