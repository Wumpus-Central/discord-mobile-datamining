// === Module 13537: CreateGuildIcons ===

// Module 13537 (CreateGuildIcons)
import _modDef13129 from "module_13129" /* 13129 */;
import _modDef13130 from "module_13130" /* 13130 */;
import _modDef13131 from "module_13131" /* 13131 */;
import _modDef13132 from "module_13132" /* 13132 */;
import _modDef13133 from "module_13133" /* 13133 */;
import _modDef13134 from "module_13134" /* 13134 */;
import _modDef13135 from "module_13135" /* 13135 */;
import PencilIllocon from "PencilIllocon" /* 13538 */;
import ControllerIllocon from "ControllerIllocon" /* 13541 */;
import HeartIllocon from "HeartIllocon" /* 13545 */;
import AppleIllocon from "AppleIllocon" /* 13549 */;
import BookIllocon from "BookIllocon" /* 13553 */;
import PaintIllocon from "PaintIllocon" /* 13557 */;
import LeafIllocon from "LeafIllocon" /* 13561 */;
import size from "module_2" /* 2 */;

const obj = { CREATE: _modDef13129, GAMING: _modDef13133, FRIENDS: _modDef13131, STUDY: _modDef13132, CLUBS: _modDef13134, CREATORS: _modDef13135, LOCAL_COMMUNITY: _modDef13130, SCHOOL_CLUB: _modDef13134 };
const result = size.fileFinishedImporting("modules/create_guild/native/CreateGuildIcons.tsx");

export const GUILD_TEMPLATE_ICONS = obj;
export const GUILD_TEMPLATE_ICON_COMPONENTS = { CREATE: PencilIllocon.PencilIllocon, GAMING: ControllerIllocon.ControllerIllocon, FRIENDS: HeartIllocon.HeartIllocon, STUDY: AppleIllocon.AppleIllocon, CLUBS: BookIllocon.BookIllocon, CREATORS: PaintIllocon.PaintIllocon, LOCAL_COMMUNITY: LeafIllocon.LeafIllocon, SCHOOL_CLUB: BookIllocon.BookIllocon };