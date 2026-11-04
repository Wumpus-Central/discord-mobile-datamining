// === Module 14495: CreateGuildIcons ===

// Module 14495 (CreateGuildIcons)
import _modDef14092 from "module_14092" /* 14092 */;
import _modDef14093 from "module_14093" /* 14093 */;
import _modDef14094 from "module_14094" /* 14094 */;
import _modDef14095 from "module_14095" /* 14095 */;
import _modDef14096 from "module_14096" /* 14096 */;
import _modDef14097 from "module_14097" /* 14097 */;
import _modDef14098 from "module_14098" /* 14098 */;
import PencilIllocon from "PencilIllocon" /* 14496 */;
import ControllerIllocon from "ControllerIllocon" /* 14499 */;
import HeartIllocon from "HeartIllocon" /* 14503 */;
import AppleIllocon from "AppleIllocon" /* 14507 */;
import BookIllocon from "BookIllocon" /* 14511 */;
import PaintIllocon from "PaintIllocon" /* 14515 */;
import LeafIllocon from "LeafIllocon" /* 14519 */;
import size from "module_2" /* 2 */;

const obj = { CREATE: _modDef14092, GAMING: _modDef14096, FRIENDS: _modDef14094, STUDY: _modDef14095, CLUBS: _modDef14097, CREATORS: _modDef14098, LOCAL_COMMUNITY: _modDef14093, SCHOOL_CLUB: _modDef14097 };
const result = size.fileFinishedImporting("modules/create_guild/native/CreateGuildIcons.tsx");

export const GUILD_TEMPLATE_ICONS = obj;
export const GUILD_TEMPLATE_ICON_COMPONENTS = { CREATE: PencilIllocon.PencilIllocon, GAMING: ControllerIllocon.ControllerIllocon, FRIENDS: HeartIllocon.HeartIllocon, STUDY: AppleIllocon.AppleIllocon, CLUBS: BookIllocon.BookIllocon, CREATORS: PaintIllocon.PaintIllocon, LOCAL_COMMUNITY: LeafIllocon.LeafIllocon, SCHOOL_CLUB: BookIllocon.BookIllocon };