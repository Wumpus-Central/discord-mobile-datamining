// === Module 14494: CreateGuildIcons ===

// Module 14494 (CreateGuildIcons)
import _modDef14091 from "module_14091" /* 14091 */;
import _modDef14092 from "module_14092" /* 14092 */;
import _modDef14093 from "module_14093" /* 14093 */;
import _modDef14094 from "module_14094" /* 14094 */;
import _modDef14095 from "module_14095" /* 14095 */;
import _modDef14096 from "module_14096" /* 14096 */;
import _modDef14097 from "module_14097" /* 14097 */;
import PencilIllocon from "PencilIllocon" /* 14495 */;
import ControllerIllocon from "ControllerIllocon" /* 14498 */;
import HeartIllocon from "HeartIllocon" /* 14502 */;
import AppleIllocon from "AppleIllocon" /* 14506 */;
import BookIllocon from "BookIllocon" /* 14510 */;
import PaintIllocon from "PaintIllocon" /* 14514 */;
import LeafIllocon from "LeafIllocon" /* 14518 */;
import size from "module_2" /* 2 */;

const obj = { CREATE: _modDef14091, GAMING: _modDef14095, FRIENDS: _modDef14093, STUDY: _modDef14094, CLUBS: _modDef14096, CREATORS: _modDef14097, LOCAL_COMMUNITY: _modDef14092, SCHOOL_CLUB: _modDef14096 };
const result = size.fileFinishedImporting("modules/create_guild/native/CreateGuildIcons.tsx");

export const GUILD_TEMPLATE_ICONS = obj;
export const GUILD_TEMPLATE_ICON_COMPONENTS = { CREATE: PencilIllocon.PencilIllocon, GAMING: ControllerIllocon.ControllerIllocon, FRIENDS: HeartIllocon.HeartIllocon, STUDY: AppleIllocon.AppleIllocon, CLUBS: BookIllocon.BookIllocon, CREATORS: PaintIllocon.PaintIllocon, LOCAL_COMMUNITY: LeafIllocon.LeafIllocon, SCHOOL_CLUB: BookIllocon.BookIllocon };