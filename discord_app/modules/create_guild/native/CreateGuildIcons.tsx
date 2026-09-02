// === Module 12473: GUILD_TEMPLATE_ICONS ===

// Module 12473 (GUILD_TEMPLATE_ICONS)
import set from "set" /* 2 */;
import AccountAgeTier10LargeBadge from "AccountAgeTier10LargeBadge" /* 6265 */;
import registerAssetDefault from "registerAsset" /* 12116 */;
import registerAssetDefault2 from "registerAsset" /* 12117 */;
import registerAssetDefault3 from "registerAsset" /* 12118 */;
import registerAssetDefault4 from "registerAsset" /* 12119 */;
import registerAssetDefault5 from "registerAsset" /* 12120 */;
import registerAssetDefault6 from "registerAsset" /* 12121 */;
import registerAssetDefault7 from "registerAsset" /* 12122 */;

let obj = { CREATE: registerAssetDefault, GAMING: registerAssetDefault5, FRIENDS: registerAssetDefault3, STUDY: registerAssetDefault4, CLUBS: registerAssetDefault6, CREATORS: registerAssetDefault7, LOCAL_COMMUNITY: registerAssetDefault2, SCHOOL_CLUB: registerAssetDefault6 };
obj = { CREATE: AccountAgeTier10LargeBadge.PencilIllocon, GAMING: AccountAgeTier10LargeBadge.ControllerIllocon, FRIENDS: AccountAgeTier10LargeBadge.HeartIllocon, STUDY: AccountAgeTier10LargeBadge.AppleIllocon, CLUBS: AccountAgeTier10LargeBadge.BookIllocon, CREATORS: AccountAgeTier10LargeBadge.PaintIllocon, LOCAL_COMMUNITY: AccountAgeTier10LargeBadge.LeafIllocon, SCHOOL_CLUB: AccountAgeTier10LargeBadge.BookIllocon };
const result = set.fileFinishedImporting("modules/create_guild/native/CreateGuildIcons.tsx");

export const GUILD_TEMPLATE_ICONS = obj;
export const GUILD_TEMPLATE_ICON_COMPONENTS = obj;