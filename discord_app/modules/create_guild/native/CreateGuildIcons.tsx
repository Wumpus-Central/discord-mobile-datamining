// discord_app/modules/create_guild/native/CreateGuildIcons.tsx
import set from "../../../../_runtime/00002_set.js";
import AccountAgeTier10LargeBadge from "../../../design/assets/native.tsx";
import registerAssetDefault from "../../../../_runtime/11829_registerAsset.js";
import registerAssetDefault2 from "../../../../_runtime/11830_registerAsset.js";
import registerAssetDefault3 from "../../../../_runtime/11831_registerAsset.js";
import registerAssetDefault4 from "../../../../_runtime/11832_registerAsset.js";
import registerAssetDefault5 from "../../../../_runtime/11833_registerAsset.js";
import registerAssetDefault6 from "../../../../_runtime/11834_registerAsset.js";
import registerAssetDefault7 from "../../../../_runtime/11835_registerAsset.js";

let obj = { CREATE: registerAssetDefault, GAMING: registerAssetDefault5, FRIENDS: registerAssetDefault3, STUDY: registerAssetDefault4, CLUBS: registerAssetDefault6, CREATORS: registerAssetDefault7, LOCAL_COMMUNITY: registerAssetDefault2, SCHOOL_CLUB: registerAssetDefault6 };
obj = { CREATE: AccountAgeTier10LargeBadge.PencilIllocon, GAMING: AccountAgeTier10LargeBadge.ControllerIllocon, FRIENDS: AccountAgeTier10LargeBadge.HeartIllocon, STUDY: AccountAgeTier10LargeBadge.AppleIllocon, CLUBS: AccountAgeTier10LargeBadge.BookIllocon, CREATORS: AccountAgeTier10LargeBadge.PaintIllocon, LOCAL_COMMUNITY: AccountAgeTier10LargeBadge.LeafIllocon, SCHOOL_CLUB: AccountAgeTier10LargeBadge.BookIllocon };
const result = set.fileFinishedImporting("modules/create_guild/native/CreateGuildIcons.tsx");

export const GUILD_TEMPLATE_ICONS = obj;
export const GUILD_TEMPLATE_ICON_COMPONENTS = obj;