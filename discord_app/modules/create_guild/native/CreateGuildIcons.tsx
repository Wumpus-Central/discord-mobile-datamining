// === Module 12981: CreateGuildIcons ===

// Module 12981 (CreateGuildIcons)
import _modDef12575 from "module_12575" /* 12575 */;
import _modDef12576 from "module_12576" /* 12576 */;
import _modDef12577 from "module_12577" /* 12577 */;
import _modDef12578 from "module_12578" /* 12578 */;
import _modDef12579 from "module_12579" /* 12579 */;
import _modDef12580 from "module_12580" /* 12580 */;
import _modDef12581 from "module_12581" /* 12581 */;
import PencilIllocon from "PencilIllocon" /* 12982 */;
import ControllerIllocon from "ControllerIllocon" /* 12985 */;
import HeartIllocon from "HeartIllocon" /* 12989 */;
import AppleIllocon from "AppleIllocon" /* 12993 */;
import BookIllocon from "BookIllocon" /* 12997 */;
import PaintIllocon from "PaintIllocon" /* 13001 */;
import LeafIllocon from "LeafIllocon" /* 13005 */;
import size from "module_2" /* 2 */;

const obj = { CREATE: _modDef12575, GAMING: _modDef12579, FRIENDS: _modDef12577, STUDY: _modDef12578, CLUBS: _modDef12580, CREATORS: _modDef12581, LOCAL_COMMUNITY: _modDef12576, SCHOOL_CLUB: _modDef12580 };
const result = size.fileFinishedImporting("modules/create_guild/native/CreateGuildIcons.tsx");

export const GUILD_TEMPLATE_ICONS = obj;
export const GUILD_TEMPLATE_ICON_COMPONENTS = { CREATE: PencilIllocon.PencilIllocon, GAMING: ControllerIllocon.ControllerIllocon, FRIENDS: HeartIllocon.HeartIllocon, STUDY: AppleIllocon.AppleIllocon, CLUBS: BookIllocon.BookIllocon, CREATORS: PaintIllocon.PaintIllocon, LOCAL_COMMUNITY: LeafIllocon.LeafIllocon, SCHOOL_CLUB: BookIllocon.BookIllocon };