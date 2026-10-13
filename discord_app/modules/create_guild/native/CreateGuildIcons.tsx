// === Module 12946: CreateGuildIcons ===

// Module 12946 (CreateGuildIcons)
import _modDef12539 from "module_12539" /* 12539 */;
import _modDef12540 from "module_12540" /* 12540 */;
import _modDef12541 from "module_12541" /* 12541 */;
import _modDef12542 from "module_12542" /* 12542 */;
import _modDef12543 from "module_12543" /* 12543 */;
import _modDef12544 from "module_12544" /* 12544 */;
import _modDef12545 from "module_12545" /* 12545 */;
import PencilIllocon from "PencilIllocon" /* 12947 */;
import ControllerIllocon from "ControllerIllocon" /* 12950 */;
import HeartIllocon from "HeartIllocon" /* 12954 */;
import AppleIllocon from "AppleIllocon" /* 12958 */;
import BookIllocon from "BookIllocon" /* 12962 */;
import PaintIllocon from "PaintIllocon" /* 12966 */;
import LeafIllocon from "LeafIllocon" /* 12970 */;
import size from "module_2" /* 2 */;

const obj = { CREATE: _modDef12539, GAMING: _modDef12543, FRIENDS: _modDef12541, STUDY: _modDef12542, CLUBS: _modDef12544, CREATORS: _modDef12545, LOCAL_COMMUNITY: _modDef12540, SCHOOL_CLUB: _modDef12544 };
const result = size.fileFinishedImporting("modules/create_guild/native/CreateGuildIcons.tsx");

export const GUILD_TEMPLATE_ICONS = obj;
export const GUILD_TEMPLATE_ICON_COMPONENTS = { CREATE: PencilIllocon.PencilIllocon, GAMING: ControllerIllocon.ControllerIllocon, FRIENDS: HeartIllocon.HeartIllocon, STUDY: AppleIllocon.AppleIllocon, CLUBS: BookIllocon.BookIllocon, CREATORS: PaintIllocon.PaintIllocon, LOCAL_COMMUNITY: LeafIllocon.LeafIllocon, SCHOOL_CLUB: BookIllocon.BookIllocon };