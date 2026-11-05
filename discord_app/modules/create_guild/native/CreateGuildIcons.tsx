// === Module 14508: CreateGuildIcons ===

// Module 14508 (CreateGuildIcons)
import _modDef14105 from "module_14105" /* 14105 */;
import _modDef14106 from "module_14106" /* 14106 */;
import _modDef14107 from "module_14107" /* 14107 */;
import _modDef14108 from "module_14108" /* 14108 */;
import _modDef14109 from "module_14109" /* 14109 */;
import _modDef14110 from "module_14110" /* 14110 */;
import _modDef14111 from "module_14111" /* 14111 */;
import PencilIllocon from "PencilIllocon" /* 14509 */;
import ControllerIllocon from "ControllerIllocon" /* 14512 */;
import HeartIllocon from "HeartIllocon" /* 14516 */;
import AppleIllocon from "AppleIllocon" /* 14520 */;
import BookIllocon from "BookIllocon" /* 14524 */;
import PaintIllocon from "PaintIllocon" /* 14528 */;
import LeafIllocon from "LeafIllocon" /* 14532 */;
import size from "module_2" /* 2 */;

const obj = { CREATE: _modDef14105, GAMING: _modDef14109, FRIENDS: _modDef14107, STUDY: _modDef14108, CLUBS: _modDef14110, CREATORS: _modDef14111, LOCAL_COMMUNITY: _modDef14106, SCHOOL_CLUB: _modDef14110 };
const result = size.fileFinishedImporting("modules/create_guild/native/CreateGuildIcons.tsx");

export const GUILD_TEMPLATE_ICONS = obj;
export const GUILD_TEMPLATE_ICON_COMPONENTS = { CREATE: PencilIllocon.PencilIllocon, GAMING: ControllerIllocon.ControllerIllocon, FRIENDS: HeartIllocon.HeartIllocon, STUDY: AppleIllocon.AppleIllocon, CLUBS: BookIllocon.BookIllocon, CREATORS: PaintIllocon.PaintIllocon, LOCAL_COMMUNITY: LeafIllocon.LeafIllocon, SCHOOL_CLUB: BookIllocon.BookIllocon };