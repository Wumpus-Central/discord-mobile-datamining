// === Module 13497: CreateGuildIcons ===

// Module 13497 (CreateGuildIcons)
import _modDef13060 from "module_13060" /* 13060 */;
import _modDef13061 from "module_13061" /* 13061 */;
import _modDef13062 from "module_13062" /* 13062 */;
import _modDef13063 from "module_13063" /* 13063 */;
import _modDef13064 from "module_13064" /* 13064 */;
import _modDef13065 from "module_13065" /* 13065 */;
import _modDef13066 from "module_13066" /* 13066 */;
import PencilIllocon from "PencilIllocon" /* 13498 */;
import ControllerIllocon from "ControllerIllocon" /* 13501 */;
import HeartIllocon from "HeartIllocon" /* 13505 */;
import AppleIllocon from "AppleIllocon" /* 13509 */;
import BookIllocon from "BookIllocon" /* 13513 */;
import PaintIllocon from "PaintIllocon" /* 13517 */;
import LeafIllocon from "LeafIllocon" /* 13521 */;
import size from "module_2" /* 2 */;

const obj = { CREATE: _modDef13060, GAMING: _modDef13064, FRIENDS: _modDef13062, STUDY: _modDef13063, CLUBS: _modDef13065, CREATORS: _modDef13066, LOCAL_COMMUNITY: _modDef13061, SCHOOL_CLUB: _modDef13065 };
const result = size.fileFinishedImporting("modules/create_guild/native/CreateGuildIcons.tsx");

export const GUILD_TEMPLATE_ICONS = obj;
export const GUILD_TEMPLATE_ICON_COMPONENTS = { CREATE: PencilIllocon.PencilIllocon, GAMING: ControllerIllocon.ControllerIllocon, FRIENDS: HeartIllocon.HeartIllocon, STUDY: AppleIllocon.AppleIllocon, CLUBS: BookIllocon.BookIllocon, CREATORS: PaintIllocon.PaintIllocon, LOCAL_COMMUNITY: LeafIllocon.LeafIllocon, SCHOOL_CLUB: BookIllocon.BookIllocon };