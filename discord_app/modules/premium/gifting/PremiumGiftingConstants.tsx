// === Module 10699: GIFT_STYLE_DESCRIPTIONS ===

// Module 10699 (GIFT_STYLE_DESCRIPTIONS)
import set from "set" /* 2 */;
import GuildFeatures from "GuildFeatures" /* 1925 */;
import messagesProxyDefault from "messagesProxy" /* 2434 */;

({ SNOWGLOBE, BOX, CUP, STANDARD_BOX, CAKE, CHEST, COFFEE, SEASONAL_STANDARD_BOX, SEASONAL_CAKE, SEASONAL_CHEST, SEASONAL_COFFEE, NITROWEEN_STANDARD } = GuildFeatures.PremiumGiftStyles);
const obj = { [SNOWGLOBE]: messagesProxyDefault.M6cPwB, [BOX]: messagesProxyDefault.B9XqQk, [CUP]: messagesProxyDefault["6dCq/u"], [STANDARD_BOX]: messagesProxyDefault.GzPel1, [CAKE]: messagesProxyDefault.AJ4iir, [CHEST]: messagesProxyDefault.P5keo3, [COFFEE]: messagesProxyDefault.w84vET, [SEASONAL_STANDARD_BOX]: messagesProxyDefault["vd1fu/"], [SEASONAL_CAKE]: messagesProxyDefault.aubYGR, [SEASONAL_CHEST]: messagesProxyDefault.vjxYqU, [SEASONAL_COFFEE]: messagesProxyDefault.bHuJLa, [NITROWEEN_STANDARD]: messagesProxyDefault["+HMF8k"] };
const result = set.fileFinishedImporting("modules/premium/gifting/PremiumGiftingConstants.tsx");

export const GIFT_STYLE_DESCRIPTIONS = obj;