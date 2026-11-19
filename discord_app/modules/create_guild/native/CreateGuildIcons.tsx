// === Module 13527: CreateGuildIcons ===

// Module 13527 (CreateGuildIcons)
import _modDef13090 from "module_13090" /* 13090 */;
import _modDef13091 from "module_13091" /* 13091 */;
import _modDef13092 from "module_13092" /* 13092 */;
import _modDef13093 from "module_13093" /* 13093 */;
import _modDef13094 from "module_13094" /* 13094 */;
import _modDef13095 from "module_13095" /* 13095 */;
import _modDef13096 from "module_13096" /* 13096 */;
import PencilIllocon from "PencilIllocon" /* 13528 */;
import ControllerIllocon from "ControllerIllocon" /* 13531 */;
import HeartIllocon from "HeartIllocon" /* 13535 */;
import AppleIllocon from "AppleIllocon" /* 13539 */;
import BookIllocon from "BookIllocon" /* 13543 */;
import PaintIllocon from "PaintIllocon" /* 13547 */;
import LeafIllocon from "LeafIllocon" /* 13551 */;
import size from "module_2" /* 2 */;

const obj = { CREATE: _modDef13090, GAMING: _modDef13094, FRIENDS: _modDef13092, STUDY: _modDef13093, CLUBS: _modDef13095, CREATORS: _modDef13096, LOCAL_COMMUNITY: _modDef13091, SCHOOL_CLUB: _modDef13095 };
const result = size.fileFinishedImporting("modules/create_guild/native/CreateGuildIcons.tsx");

export const GUILD_TEMPLATE_ICONS = obj;
export const GUILD_TEMPLATE_ICON_COMPONENTS = { CREATE: PencilIllocon.PencilIllocon, GAMING: ControllerIllocon.ControllerIllocon, FRIENDS: HeartIllocon.HeartIllocon, STUDY: AppleIllocon.AppleIllocon, CLUBS: BookIllocon.BookIllocon, CREATORS: PaintIllocon.PaintIllocon, LOCAL_COMMUNITY: LeafIllocon.LeafIllocon, SCHOOL_CLUB: BookIllocon.BookIllocon };