// discord_app/modules/holidays/HolidayEventsConfig.tsx
import obj132 from "../../../_runtime/00002_obj132.js";
import getSystemLocale from "../../intl/index.native.tsx";
import DismissibleContent from "../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import Soundpacks from "../soundpacks/Constants.tsx";
import registerAssetDefault from "../../../_runtime/16594_registerAsset.js";
import registerAssetDefault2 from "../../../_runtime/16595_registerAsset.js";

const obj = { webmDark: registerAssetDefault, webmLight: registerAssetDefault2 };
obj[8] = obj;
obj[9] = DismissibleContent.DismissibleContent.HOLIDAY_COACHMARK_WINTER_2025;
const result = obj132.fileFinishedImporting("modules/holidays/HolidayEventsConfig.tsx");

export default obj;
export const HolidayEmojiAnimationType = { THROW_EMOJI: 0, [0]: "THROW_EMOJI", SNOW: 1, [1]: "SNOW" };