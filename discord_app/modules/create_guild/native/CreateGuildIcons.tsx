// === Module 13611: CreateGuildIcons ===

// Module 13611 (CreateGuildIcons)
import _modDef13205 from "module_13205" /* 13205 */;
import _modDef13206 from "module_13206" /* 13206 */;
import _modDef13207 from "module_13207" /* 13207 */;
import _modDef13208 from "module_13208" /* 13208 */;
import _modDef13209 from "module_13209" /* 13209 */;
import _modDef13210 from "module_13210" /* 13210 */;
import _modDef13211 from "module_13211" /* 13211 */;
import PencilIllocon from "PencilIllocon" /* 13612 */;
import ControllerIllocon from "ControllerIllocon" /* 13615 */;
import HeartIllocon from "HeartIllocon" /* 13619 */;
import AppleIllocon from "AppleIllocon" /* 13623 */;
import BookIllocon from "BookIllocon" /* 13627 */;
import PaintIllocon from "PaintIllocon" /* 13631 */;
import LeafIllocon from "LeafIllocon" /* 13635 */;
import size from "module_2" /* 2 */;

const obj = { CREATE: _modDef13205, GAMING: _modDef13209, FRIENDS: _modDef13207, STUDY: _modDef13208, CLUBS: _modDef13210, CREATORS: _modDef13211, LOCAL_COMMUNITY: _modDef13206, SCHOOL_CLUB: _modDef13210 };
const result = size.fileFinishedImporting("modules/create_guild/native/CreateGuildIcons.tsx");

export const GUILD_TEMPLATE_ICONS = obj;
export const GUILD_TEMPLATE_ICON_COMPONENTS = { CREATE: PencilIllocon.PencilIllocon, GAMING: ControllerIllocon.ControllerIllocon, FRIENDS: HeartIllocon.HeartIllocon, STUDY: AppleIllocon.AppleIllocon, CLUBS: BookIllocon.BookIllocon, CREATORS: PaintIllocon.PaintIllocon, LOCAL_COMMUNITY: LeafIllocon.LeafIllocon, SCHOOL_CLUB: BookIllocon.BookIllocon };