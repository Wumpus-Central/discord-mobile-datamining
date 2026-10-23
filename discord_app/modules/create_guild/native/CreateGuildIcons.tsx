// === Module 13551: CreateGuildIcons ===

// Module 13551 (CreateGuildIcons)
import _modDef13145 from "module_13145" /* 13145 */;
import _modDef13146 from "module_13146" /* 13146 */;
import _modDef13147 from "module_13147" /* 13147 */;
import _modDef13148 from "module_13148" /* 13148 */;
import _modDef13149 from "module_13149" /* 13149 */;
import _modDef13150 from "module_13150" /* 13150 */;
import _modDef13151 from "module_13151" /* 13151 */;
import PencilIllocon from "PencilIllocon" /* 13552 */;
import ControllerIllocon from "ControllerIllocon" /* 13555 */;
import HeartIllocon from "HeartIllocon" /* 13559 */;
import AppleIllocon from "AppleIllocon" /* 13563 */;
import BookIllocon from "BookIllocon" /* 13567 */;
import PaintIllocon from "PaintIllocon" /* 13571 */;
import LeafIllocon from "LeafIllocon" /* 13575 */;
import size from "module_2" /* 2 */;

const obj = { CREATE: _modDef13145, GAMING: _modDef13149, FRIENDS: _modDef13147, STUDY: _modDef13148, CLUBS: _modDef13150, CREATORS: _modDef13151, LOCAL_COMMUNITY: _modDef13146, SCHOOL_CLUB: _modDef13150 };
const result = size.fileFinishedImporting("modules/create_guild/native/CreateGuildIcons.tsx");

export const GUILD_TEMPLATE_ICONS = obj;
export const GUILD_TEMPLATE_ICON_COMPONENTS = { CREATE: PencilIllocon.PencilIllocon, GAMING: ControllerIllocon.ControllerIllocon, FRIENDS: HeartIllocon.HeartIllocon, STUDY: AppleIllocon.AppleIllocon, CLUBS: BookIllocon.BookIllocon, CREATORS: PaintIllocon.PaintIllocon, LOCAL_COMMUNITY: LeafIllocon.LeafIllocon, SCHOOL_CLUB: BookIllocon.BookIllocon };