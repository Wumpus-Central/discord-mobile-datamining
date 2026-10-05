// === Module 12360: CreateGuildIcons ===

// Module 12360 (CreateGuildIcons)
import AssetRegistryDefault from "AssetRegistry" /* 11953 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 11954 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 11955 */;
import AssetRegistryDefault4 from "AssetRegistry" /* 11956 */;
import AssetRegistryDefault5 from "AssetRegistry" /* 11957 */;
import AssetRegistryDefault6 from "AssetRegistry" /* 11958 */;
import AssetRegistryDefault7 from "AssetRegistry" /* 11959 */;
import PencilIllocon from "PencilIllocon" /* 12361 */;
import ControllerIllocon from "ControllerIllocon" /* 12362 */;
import HeartIllocon from "HeartIllocon" /* 12364 */;
import AppleIllocon from "AppleIllocon" /* 12366 */;
import BookIllocon from "BookIllocon" /* 12368 */;
import PaintIllocon from "PaintIllocon" /* 12370 */;
import LeafIllocon from "LeafIllocon" /* 12372 */;
import size from "module_2" /* 2 */;

const obj = { CREATE: AssetRegistryDefault, GAMING: AssetRegistryDefault5, FRIENDS: AssetRegistryDefault3, STUDY: AssetRegistryDefault4, CLUBS: AssetRegistryDefault6, CREATORS: AssetRegistryDefault7, LOCAL_COMMUNITY: AssetRegistryDefault2, SCHOOL_CLUB: AssetRegistryDefault6 };
const obj2 = { CREATE: PencilIllocon.PencilIllocon, GAMING: ControllerIllocon.ControllerIllocon, FRIENDS: HeartIllocon.HeartIllocon, STUDY: AppleIllocon.AppleIllocon, CLUBS: BookIllocon.BookIllocon, CREATORS: PaintIllocon.PaintIllocon, LOCAL_COMMUNITY: LeafIllocon.LeafIllocon, SCHOOL_CLUB: BookIllocon.BookIllocon };
const result = size.fileFinishedImporting("modules/create_guild/native/CreateGuildIcons.tsx");

export const GUILD_TEMPLATE_ICONS = obj;
export const GUILD_TEMPLATE_ICON_COMPONENTS = obj2;