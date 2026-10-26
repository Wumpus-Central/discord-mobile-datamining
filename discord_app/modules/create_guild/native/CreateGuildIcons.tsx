// === Module 13617: CreateGuildIcons ===

// Module 13617 (CreateGuildIcons)
import _modDef13212 from "module_13212" /* 13212 */;
import _modDef13213 from "module_13213" /* 13213 */;
import _modDef13214 from "module_13214" /* 13214 */;
import _modDef13215 from "module_13215" /* 13215 */;
import _modDef13216 from "module_13216" /* 13216 */;
import _modDef13217 from "module_13217" /* 13217 */;
import _modDef13218 from "module_13218" /* 13218 */;
import PencilIllocon from "PencilIllocon" /* 13618 */;
import ControllerIllocon from "ControllerIllocon" /* 13621 */;
import HeartIllocon from "HeartIllocon" /* 13625 */;
import AppleIllocon from "AppleIllocon" /* 13629 */;
import BookIllocon from "BookIllocon" /* 13633 */;
import PaintIllocon from "PaintIllocon" /* 13637 */;
import LeafIllocon from "LeafIllocon" /* 13641 */;
import size from "module_2" /* 2 */;

const obj = { CREATE: _modDef13212, GAMING: _modDef13216, FRIENDS: _modDef13214, STUDY: _modDef13215, CLUBS: _modDef13217, CREATORS: _modDef13218, LOCAL_COMMUNITY: _modDef13213, SCHOOL_CLUB: _modDef13217 };
const result = size.fileFinishedImporting("modules/create_guild/native/CreateGuildIcons.tsx");

export const GUILD_TEMPLATE_ICONS = obj;
export const GUILD_TEMPLATE_ICON_COMPONENTS = { CREATE: PencilIllocon.PencilIllocon, GAMING: ControllerIllocon.ControllerIllocon, FRIENDS: HeartIllocon.HeartIllocon, STUDY: AppleIllocon.AppleIllocon, CLUBS: BookIllocon.BookIllocon, CREATORS: PaintIllocon.PaintIllocon, LOCAL_COMMUNITY: LeafIllocon.LeafIllocon, SCHOOL_CLUB: BookIllocon.BookIllocon };