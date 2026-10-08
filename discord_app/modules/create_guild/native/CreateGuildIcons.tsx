// === Module 12471: CreateGuildIcons ===

// Module 12471 (CreateGuildIcons)
import _modDef12040 from "module_12040" /* 12040 */;
import _modDef12041 from "module_12041" /* 12041 */;
import _modDef12042 from "module_12042" /* 12042 */;
import _modDef12043 from "module_12043" /* 12043 */;
import _modDef12044 from "module_12044" /* 12044 */;
import _modDef12045 from "module_12045" /* 12045 */;
import _modDef12046 from "module_12046" /* 12046 */;
import PencilIllocon from "PencilIllocon" /* 12472 */;
import ControllerIllocon from "ControllerIllocon" /* 12473 */;
import HeartIllocon from "HeartIllocon" /* 12475 */;
import AppleIllocon from "AppleIllocon" /* 12477 */;
import BookIllocon from "BookIllocon" /* 12479 */;
import PaintIllocon from "PaintIllocon" /* 12481 */;
import LeafIllocon from "LeafIllocon" /* 12483 */;
import size from "module_2" /* 2 */;

const obj = { CREATE: _modDef12040, GAMING: _modDef12044, FRIENDS: _modDef12042, STUDY: _modDef12043, CLUBS: _modDef12045, CREATORS: _modDef12046, LOCAL_COMMUNITY: _modDef12041, SCHOOL_CLUB: _modDef12045 };
const result = size.fileFinishedImporting("modules/create_guild/native/CreateGuildIcons.tsx");

export const GUILD_TEMPLATE_ICONS = obj;
export const GUILD_TEMPLATE_ICON_COMPONENTS = { CREATE: PencilIllocon.PencilIllocon, GAMING: ControllerIllocon.ControllerIllocon, FRIENDS: HeartIllocon.HeartIllocon, STUDY: AppleIllocon.AppleIllocon, CLUBS: BookIllocon.BookIllocon, CREATORS: PaintIllocon.PaintIllocon, LOCAL_COMMUNITY: LeafIllocon.LeafIllocon, SCHOOL_CLUB: BookIllocon.BookIllocon };