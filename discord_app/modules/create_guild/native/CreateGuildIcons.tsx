// === Module 13545: CreateGuildIcons ===

// Module 13545 (CreateGuildIcons)
import _modDef13108 from "module_13108" /* 13108 */;
import _modDef13109 from "module_13109" /* 13109 */;
import _modDef13110 from "module_13110" /* 13110 */;
import _modDef13111 from "module_13111" /* 13111 */;
import _modDef13112 from "module_13112" /* 13112 */;
import _modDef13113 from "module_13113" /* 13113 */;
import _modDef13114 from "module_13114" /* 13114 */;
import PencilIllocon from "PencilIllocon" /* 13546 */;
import ControllerIllocon from "ControllerIllocon" /* 13549 */;
import HeartIllocon from "HeartIllocon" /* 13553 */;
import AppleIllocon from "AppleIllocon" /* 13557 */;
import BookIllocon from "BookIllocon" /* 13561 */;
import PaintIllocon from "PaintIllocon" /* 13565 */;
import LeafIllocon from "LeafIllocon" /* 13569 */;
import size from "module_2" /* 2 */;

const obj = { CREATE: _modDef13108, GAMING: _modDef13112, FRIENDS: _modDef13110, STUDY: _modDef13111, CLUBS: _modDef13113, CREATORS: _modDef13114, LOCAL_COMMUNITY: _modDef13109, SCHOOL_CLUB: _modDef13113 };
const result = size.fileFinishedImporting("modules/create_guild/native/CreateGuildIcons.tsx");

export const GUILD_TEMPLATE_ICONS = obj;
export const GUILD_TEMPLATE_ICON_COMPONENTS = { CREATE: PencilIllocon.PencilIllocon, GAMING: ControllerIllocon.ControllerIllocon, FRIENDS: HeartIllocon.HeartIllocon, STUDY: AppleIllocon.AppleIllocon, CLUBS: BookIllocon.BookIllocon, CREATORS: PaintIllocon.PaintIllocon, LOCAL_COMMUNITY: LeafIllocon.LeafIllocon, SCHOOL_CLUB: BookIllocon.BookIllocon };