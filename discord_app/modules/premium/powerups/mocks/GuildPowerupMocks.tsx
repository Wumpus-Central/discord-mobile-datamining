// === Module 11968: items ===

// Module 11968 (items)
import set from "set" /* 2 */;
import BoostedGuildTiers from "BoostedGuildTiers" /* 4332 */;

const GuildPowerupType = BoostedGuildTiers.GuildPowerupType;
let obj = { type: GuildPowerupType.LEVEL, skuId: "1", title: "Lorem ipsum", cost: 1, dependencies: [], features: { additional_emoji_slots: 50, additional_sound_slots: 50, additional_sticker_slots: 50, total_emoji_slots: 50, total_sound_slots: 50, total_sticker_slots: 50, features: [] } };
const items = [obj, { type: GuildPowerupType.LEVEL, skuId: "2", title: "Lorem ipsum", cost: 1, dependencies: ["1"], features: { additional_emoji_slots: 50, additional_sound_slots: 50, additional_sticker_slots: 50, total_emoji_slots: 50, total_sound_slots: 50, total_sticker_slots: 50, features: [] } }, { type: GuildPowerupType.LEVEL, skuId: "3", title: "Lorem ipsum", cost: 1, dependencies: ["2"], features: { additional_emoji_slots: 50, additional_sound_slots: 50, additional_sticker_slots: 50, total_emoji_slots: 50, total_sound_slots: 50, total_sticker_slots: 50, features: [] } }];
obj = { type: GuildPowerupType.PERK, skuId: "4", title: "Lorem ipsum", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat posuere lao", cost: 1, dependencies: [] };
const items1 = [obj, { type: GuildPowerupType.PERK, skuId: "5", title: "Lorem ipsum", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat posuere lao", cost: 1, dependencies: [] }, { type: GuildPowerupType.PERK, skuId: "6", title: "Lorem ipsum", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat posuere lao", cost: 1, dependencies: [] }, { type: GuildPowerupType.PERK, skuId: "7", title: "Lorem ipsum", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat posuere lao", cost: 1, dependencies: [] }];
const result = set.fileFinishedImporting("modules/premium/powerups/mocks/GuildPowerupMocks.tsx");

export const MOCK_LEVELS = items;
export const MOCK_PERKS = items1;