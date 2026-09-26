// === Module 12208: CreateGuildIcons ===

// Module 12208 (CreateGuildIcons)
import _modDef11809 from "module_11809" /* 11809 */;
import _modDef11810 from "module_11810" /* 11810 */;
import _modDef11811 from "module_11811" /* 11811 */;
import _modDef11812 from "module_11812" /* 11812 */;
import _modDef11813 from "module_11813" /* 11813 */;
import _modDef11814 from "module_11814" /* 11814 */;
import _modDef11815 from "module_11815" /* 11815 */;
import PencilIllocon from "PencilIllocon" /* 12209 */;
import ControllerIllocon from "ControllerIllocon" /* 12210 */;
import HeartIllocon from "HeartIllocon" /* 12212 */;
import AppleIllocon from "AppleIllocon" /* 12214 */;
import BookIllocon from "BookIllocon" /* 12216 */;
import PaintIllocon from "PaintIllocon" /* 12218 */;
import LeafIllocon from "LeafIllocon" /* 12220 */;
import size from "module_2" /* 2 */;

const obj = { CREATE: _modDef11809, GAMING: _modDef11813, FRIENDS: _modDef11811, STUDY: _modDef11812, CLUBS: _modDef11814, CREATORS: _modDef11815, LOCAL_COMMUNITY: _modDef11810, SCHOOL_CLUB: _modDef11814 };
const result = size.fileFinishedImporting("modules/create_guild/native/CreateGuildIcons.tsx");

export const GUILD_TEMPLATE_ICONS = obj;
export const GUILD_TEMPLATE_ICON_COMPONENTS = { CREATE: PencilIllocon.PencilIllocon, GAMING: ControllerIllocon.ControllerIllocon, FRIENDS: HeartIllocon.HeartIllocon, STUDY: AppleIllocon.AppleIllocon, CLUBS: BookIllocon.BookIllocon, CREATORS: PaintIllocon.PaintIllocon, LOCAL_COMMUNITY: LeafIllocon.LeafIllocon, SCHOOL_CLUB: BookIllocon.BookIllocon };