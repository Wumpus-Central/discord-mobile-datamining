// === Module 13501: CreateGuildIcons ===

// Module 13501 (CreateGuildIcons)
import _modDef13093 from "module_13093" /* 13093 */;
import _modDef13094 from "module_13094" /* 13094 */;
import _modDef13095 from "module_13095" /* 13095 */;
import _modDef13096 from "module_13096" /* 13096 */;
import _modDef13097 from "module_13097" /* 13097 */;
import _modDef13098 from "module_13098" /* 13098 */;
import _modDef13099 from "module_13099" /* 13099 */;
import PencilIllocon from "PencilIllocon" /* 13502 */;
import ControllerIllocon from "ControllerIllocon" /* 13505 */;
import HeartIllocon from "HeartIllocon" /* 13509 */;
import AppleIllocon from "AppleIllocon" /* 13513 */;
import BookIllocon from "BookIllocon" /* 13517 */;
import PaintIllocon from "PaintIllocon" /* 13521 */;
import LeafIllocon from "LeafIllocon" /* 13525 */;
import size from "module_2" /* 2 */;

const obj = { CREATE: _modDef13093, GAMING: _modDef13097, FRIENDS: _modDef13095, STUDY: _modDef13096, CLUBS: _modDef13098, CREATORS: _modDef13099, LOCAL_COMMUNITY: _modDef13094, SCHOOL_CLUB: _modDef13098 };
const result = size.fileFinishedImporting("modules/create_guild/native/CreateGuildIcons.tsx");

export const GUILD_TEMPLATE_ICONS = obj;
export const GUILD_TEMPLATE_ICON_COMPONENTS = { CREATE: PencilIllocon.PencilIllocon, GAMING: ControllerIllocon.ControllerIllocon, FRIENDS: HeartIllocon.HeartIllocon, STUDY: AppleIllocon.AppleIllocon, CLUBS: BookIllocon.BookIllocon, CREATORS: PaintIllocon.PaintIllocon, LOCAL_COMMUNITY: LeafIllocon.LeafIllocon, SCHOOL_CLUB: BookIllocon.BookIllocon };