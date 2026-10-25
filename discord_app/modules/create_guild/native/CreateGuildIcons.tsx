// === Module 13616: CreateGuildIcons ===

// Module 13616 (CreateGuildIcons)
import _modDef13210 from "module_13210" /* 13210 */;
import _modDef13211 from "module_13211" /* 13211 */;
import _modDef13212 from "module_13212" /* 13212 */;
import _modDef13213 from "module_13213" /* 13213 */;
import _modDef13214 from "module_13214" /* 13214 */;
import _modDef13215 from "module_13215" /* 13215 */;
import _modDef13216 from "module_13216" /* 13216 */;
import PencilIllocon from "PencilIllocon" /* 13617 */;
import ControllerIllocon from "ControllerIllocon" /* 13620 */;
import HeartIllocon from "HeartIllocon" /* 13624 */;
import AppleIllocon from "AppleIllocon" /* 13628 */;
import BookIllocon from "BookIllocon" /* 13632 */;
import PaintIllocon from "PaintIllocon" /* 13636 */;
import LeafIllocon from "LeafIllocon" /* 13640 */;
import size from "module_2" /* 2 */;

const obj = { CREATE: _modDef13210, GAMING: _modDef13214, FRIENDS: _modDef13212, STUDY: _modDef13213, CLUBS: _modDef13215, CREATORS: _modDef13216, LOCAL_COMMUNITY: _modDef13211, SCHOOL_CLUB: _modDef13215 };
const result = size.fileFinishedImporting("modules/create_guild/native/CreateGuildIcons.tsx");

export const GUILD_TEMPLATE_ICONS = obj;
export const GUILD_TEMPLATE_ICON_COMPONENTS = { CREATE: PencilIllocon.PencilIllocon, GAMING: ControllerIllocon.ControllerIllocon, FRIENDS: HeartIllocon.HeartIllocon, STUDY: AppleIllocon.AppleIllocon, CLUBS: BookIllocon.BookIllocon, CREATORS: PaintIllocon.PaintIllocon, LOCAL_COMMUNITY: LeafIllocon.LeafIllocon, SCHOOL_CLUB: BookIllocon.BookIllocon };