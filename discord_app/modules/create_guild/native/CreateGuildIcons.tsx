// === Module 14545: CreateGuildIcons ===

// Module 14545 (CreateGuildIcons)
import _modDef14134 from "module_14134" /* 14134 */;
import _modDef14135 from "module_14135" /* 14135 */;
import _modDef14136 from "module_14136" /* 14136 */;
import _modDef14137 from "module_14137" /* 14137 */;
import _modDef14138 from "module_14138" /* 14138 */;
import _modDef14139 from "module_14139" /* 14139 */;
import _modDef14140 from "module_14140" /* 14140 */;
import PencilIllocon from "PencilIllocon" /* 14546 */;
import ControllerIllocon from "ControllerIllocon" /* 14549 */;
import HeartIllocon from "HeartIllocon" /* 14553 */;
import AppleIllocon from "AppleIllocon" /* 14557 */;
import BookIllocon from "BookIllocon" /* 14561 */;
import PaintIllocon from "PaintIllocon" /* 14565 */;
import LeafIllocon from "LeafIllocon" /* 14569 */;
import size from "module_2" /* 2 */;

const obj = { CREATE: _modDef14134, GAMING: _modDef14138, FRIENDS: _modDef14136, STUDY: _modDef14137, CLUBS: _modDef14139, CREATORS: _modDef14140, LOCAL_COMMUNITY: _modDef14135, SCHOOL_CLUB: _modDef14139 };
const result = size.fileFinishedImporting("modules/create_guild/native/CreateGuildIcons.tsx");

export const GUILD_TEMPLATE_ICONS = obj;
export const GUILD_TEMPLATE_ICON_COMPONENTS = { CREATE: PencilIllocon.PencilIllocon, GAMING: ControllerIllocon.ControllerIllocon, FRIENDS: HeartIllocon.HeartIllocon, STUDY: AppleIllocon.AppleIllocon, CLUBS: BookIllocon.BookIllocon, CREATORS: PaintIllocon.PaintIllocon, LOCAL_COMMUNITY: LeafIllocon.LeafIllocon, SCHOOL_CLUB: BookIllocon.BookIllocon };