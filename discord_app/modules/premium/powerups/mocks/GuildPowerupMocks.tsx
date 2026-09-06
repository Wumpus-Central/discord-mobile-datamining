// discord_app/modules/premium/powerups/mocks/GuildPowerupMocks.tsx
import GuildPowerupsConstants from "../constants/GuildPowerupsConstants.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const GuildPowerupType = GuildPowerupsConstants.GuildPowerupType;
let obj = {
  type: GuildPowerupType.LEVEL,
  skuId: "1",
  title: "Lorem ipsum",
  cost: 1,
  dependencies: [],
  features: {
    additional_emoji_slots: 50,
    additional_sound_slots: 50,
    additional_sticker_slots: 50,
    total_emoji_slots: 50,
    total_sound_slots: 50,
    total_sticker_slots: 50,
    features: [],
  },
};
const items = [obj, ,];
obj = {
  type: GuildPowerupType.LEVEL,
  skuId: "2",
  title: "Lorem ipsum",
  cost: 1,
  dependencies: ["1"],
  features: {
    additional_emoji_slots: 50,
    additional_sound_slots: 50,
    additional_sticker_slots: 50,
    total_emoji_slots: 50,
    total_sound_slots: 50,
    total_sticker_slots: 50,
    features: [],
  },
};
items[1] = obj;
obj = {
  type: GuildPowerupType.LEVEL,
  skuId: "3",
  title: "Lorem ipsum",
  cost: 1,
  dependencies: ["2"],
  features: {
    additional_emoji_slots: 50,
    additional_sound_slots: 50,
    additional_sticker_slots: 50,
    total_emoji_slots: 50,
    total_sound_slots: 50,
    total_sticker_slots: 50,
    features: [],
  },
};
items[2] = obj;
const items1 = [
  {
    type: GuildPowerupType.PERK,
    skuId: "4",
    title: "Lorem ipsum",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat posuere lao",
    cost: 1,
    dependencies: [],
  },
  {
    type: GuildPowerupType.PERK,
    skuId: "5",
    title: "Lorem ipsum",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat posuere lao",
    cost: 1,
    dependencies: [],
  },
  {
    type: GuildPowerupType.PERK,
    skuId: "6",
    title: "Lorem ipsum",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat posuere lao",
    cost: 1,
    dependencies: [],
  },
  {
    type: GuildPowerupType.PERK,
    skuId: "7",
    title: "Lorem ipsum",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat posuere lao",
    cost: 1,
    dependencies: [],
  },
];
const result = size.fileFinishedImporting("modules/premium/powerups/mocks/GuildPowerupMocks.tsx");

export const MOCK_LEVELS = items;
export const MOCK_PERKS = items1;
