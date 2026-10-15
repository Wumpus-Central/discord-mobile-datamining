// === Module 13277: CreateGuildIcons ===

// Module 13277 (CreateGuildIcons)
import _modDef12868 from "module_12868" /* 12868 */;
import _modDef12869 from "module_12869" /* 12869 */;
import _modDef12870 from "module_12870" /* 12870 */;
import _modDef12871 from "module_12871" /* 12871 */;
import _modDef12872 from "module_12872" /* 12872 */;
import _modDef12873 from "module_12873" /* 12873 */;
import _modDef12874 from "module_12874" /* 12874 */;
import PencilIllocon from "PencilIllocon" /* 13278 */;
import ControllerIllocon from "ControllerIllocon" /* 13281 */;
import HeartIllocon from "HeartIllocon" /* 13285 */;
import AppleIllocon from "AppleIllocon" /* 13289 */;
import BookIllocon from "BookIllocon" /* 13293 */;
import PaintIllocon from "PaintIllocon" /* 13297 */;
import LeafIllocon from "LeafIllocon" /* 13301 */;
import size from "module_2" /* 2 */;

const obj = { CREATE: _modDef12868, GAMING: _modDef12872, FRIENDS: _modDef12870, STUDY: _modDef12871, CLUBS: _modDef12873, CREATORS: _modDef12874, LOCAL_COMMUNITY: _modDef12869, SCHOOL_CLUB: _modDef12873 };
const result = size.fileFinishedImporting("modules/create_guild/native/CreateGuildIcons.tsx");

export const GUILD_TEMPLATE_ICONS = obj;
export const GUILD_TEMPLATE_ICON_COMPONENTS = { CREATE: PencilIllocon.PencilIllocon, GAMING: ControllerIllocon.ControllerIllocon, FRIENDS: HeartIllocon.HeartIllocon, STUDY: AppleIllocon.AppleIllocon, CLUBS: BookIllocon.BookIllocon, CREATORS: PaintIllocon.PaintIllocon, LOCAL_COMMUNITY: LeafIllocon.LeafIllocon, SCHOOL_CLUB: BookIllocon.BookIllocon };