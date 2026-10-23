// === Module 13574: CreateGuildIcons ===

// Module 13574 (CreateGuildIcons)
import _modDef13168 from "module_13168" /* 13168 */;
import _modDef13169 from "module_13169" /* 13169 */;
import _modDef13170 from "module_13170" /* 13170 */;
import _modDef13171 from "module_13171" /* 13171 */;
import _modDef13172 from "module_13172" /* 13172 */;
import _modDef13173 from "module_13173" /* 13173 */;
import _modDef13174 from "module_13174" /* 13174 */;
import PencilIllocon from "PencilIllocon" /* 13575 */;
import ControllerIllocon from "ControllerIllocon" /* 13578 */;
import HeartIllocon from "HeartIllocon" /* 13582 */;
import AppleIllocon from "AppleIllocon" /* 13586 */;
import BookIllocon from "BookIllocon" /* 13590 */;
import PaintIllocon from "PaintIllocon" /* 13594 */;
import LeafIllocon from "LeafIllocon" /* 13598 */;
import size from "module_2" /* 2 */;

const obj = { CREATE: _modDef13168, GAMING: _modDef13172, FRIENDS: _modDef13170, STUDY: _modDef13171, CLUBS: _modDef13173, CREATORS: _modDef13174, LOCAL_COMMUNITY: _modDef13169, SCHOOL_CLUB: _modDef13173 };
const result = size.fileFinishedImporting("modules/create_guild/native/CreateGuildIcons.tsx");

export const GUILD_TEMPLATE_ICONS = obj;
export const GUILD_TEMPLATE_ICON_COMPONENTS = { CREATE: PencilIllocon.PencilIllocon, GAMING: ControllerIllocon.ControllerIllocon, FRIENDS: HeartIllocon.HeartIllocon, STUDY: AppleIllocon.AppleIllocon, CLUBS: BookIllocon.BookIllocon, CREATORS: PaintIllocon.PaintIllocon, LOCAL_COMMUNITY: LeafIllocon.LeafIllocon, SCHOOL_CLUB: BookIllocon.BookIllocon };