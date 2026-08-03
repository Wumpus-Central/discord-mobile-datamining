// === Module 12001: GIFT_STYLE_DESCRIPTIONS ===

// Module 12001 (GIFT_STYLE_DESCRIPTIONS)
let BOX;
let CAKE;
let CHEST;
let COFFEE;
let CUP;
let NITROWEEN_STANDARD;
let SEASONAL_CAKE;
let SEASONAL_CHEST;
let SEASONAL_COFFEE;
let SEASONAL_STANDARD_BOX;
let SNOWGLOBE;
let STANDARD_BOX;
({ SNOWGLOBE, BOX, CUP, STANDARD_BOX, CAKE, CHEST, COFFEE, SEASONAL_STANDARD_BOX, SEASONAL_CAKE, SEASONAL_CHEST, SEASONAL_COFFEE, NITROWEEN_STANDARD } = require("GuildFeatures").PremiumGiftStyles);
const obj = { [SNOWGLOBE]: require("messagesProxy").M6cPwB, [BOX]: require("messagesProxy").B9XqQk, [CUP]: require("messagesProxy")["6dCq/u"], [STANDARD_BOX]: require("messagesProxy").GzPel1, [CAKE]: require("messagesProxy").AJ4iir, [CHEST]: require("messagesProxy").P5keo3, [COFFEE]: require("messagesProxy").w84vET, [SEASONAL_STANDARD_BOX]: require("messagesProxy")["vd1fu/"], [SEASONAL_CAKE]: require("messagesProxy").aubYGR, [SEASONAL_CHEST]: require("messagesProxy").vjxYqU, [SEASONAL_COFFEE]: require("messagesProxy").bHuJLa, [NITROWEEN_STANDARD]: require("messagesProxy")["+HMF8k"] };
const result = require("set").fileFinishedImporting("modules/premium/gifting/PremiumGiftingConstants.tsx");

export const GIFT_STYLE_DESCRIPTIONS = obj;