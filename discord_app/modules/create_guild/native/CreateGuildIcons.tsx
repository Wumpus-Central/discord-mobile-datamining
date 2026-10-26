// === Module 13615: CreateGuildIcons ===

// Module 13615 (CreateGuildIcons)
import _modDef13209 from "module_13209" /* 13209 */;
import _modDef13210 from "module_13210" /* 13210 */;
import _modDef13211 from "module_13211" /* 13211 */;
import _modDef13212 from "module_13212" /* 13212 */;
import _modDef13213 from "module_13213" /* 13213 */;
import _modDef13214 from "module_13214" /* 13214 */;
import _modDef13215 from "module_13215" /* 13215 */;
import PencilIllocon from "PencilIllocon" /* 13616 */;
import ControllerIllocon from "ControllerIllocon" /* 13619 */;
import HeartIllocon from "HeartIllocon" /* 13623 */;
import AppleIllocon from "AppleIllocon" /* 13627 */;
import BookIllocon from "BookIllocon" /* 13631 */;
import PaintIllocon from "PaintIllocon" /* 13635 */;
import LeafIllocon from "LeafIllocon" /* 13639 */;
import size from "module_2" /* 2 */;

const obj = { CREATE: _modDef13209, GAMING: _modDef13213, FRIENDS: _modDef13211, STUDY: _modDef13212, CLUBS: _modDef13214, CREATORS: _modDef13215, LOCAL_COMMUNITY: _modDef13210, SCHOOL_CLUB: _modDef13214 };
const result = size.fileFinishedImporting("modules/create_guild/native/CreateGuildIcons.tsx");

export const GUILD_TEMPLATE_ICONS = obj;
export const GUILD_TEMPLATE_ICON_COMPONENTS = { CREATE: PencilIllocon.PencilIllocon, GAMING: ControllerIllocon.ControllerIllocon, FRIENDS: HeartIllocon.HeartIllocon, STUDY: AppleIllocon.AppleIllocon, CLUBS: BookIllocon.BookIllocon, CREATORS: PaintIllocon.PaintIllocon, LOCAL_COMMUNITY: LeafIllocon.LeafIllocon, SCHOOL_CLUB: BookIllocon.BookIllocon };