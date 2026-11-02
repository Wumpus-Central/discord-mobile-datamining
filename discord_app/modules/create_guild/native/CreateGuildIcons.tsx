// === Module 14283: CreateGuildIcons ===

// Module 14283 (CreateGuildIcons)
import _modDef13874 from "module_13874" /* 13874 */;
import _modDef13875 from "module_13875" /* 13875 */;
import _modDef13876 from "module_13876" /* 13876 */;
import _modDef13877 from "module_13877" /* 13877 */;
import _modDef13878 from "module_13878" /* 13878 */;
import _modDef13879 from "module_13879" /* 13879 */;
import _modDef13880 from "module_13880" /* 13880 */;
import PencilIllocon from "PencilIllocon" /* 14284 */;
import ControllerIllocon from "ControllerIllocon" /* 14287 */;
import HeartIllocon from "HeartIllocon" /* 14291 */;
import AppleIllocon from "AppleIllocon" /* 14295 */;
import BookIllocon from "BookIllocon" /* 14299 */;
import PaintIllocon from "PaintIllocon" /* 14303 */;
import LeafIllocon from "LeafIllocon" /* 14307 */;
import size from "module_2" /* 2 */;

const obj = { CREATE: _modDef13874, GAMING: _modDef13878, FRIENDS: _modDef13876, STUDY: _modDef13877, CLUBS: _modDef13879, CREATORS: _modDef13880, LOCAL_COMMUNITY: _modDef13875, SCHOOL_CLUB: _modDef13879 };
const result = size.fileFinishedImporting("modules/create_guild/native/CreateGuildIcons.tsx");

export const GUILD_TEMPLATE_ICONS = obj;
export const GUILD_TEMPLATE_ICON_COMPONENTS = { CREATE: PencilIllocon.PencilIllocon, GAMING: ControllerIllocon.ControllerIllocon, FRIENDS: HeartIllocon.HeartIllocon, STUDY: AppleIllocon.AppleIllocon, CLUBS: BookIllocon.BookIllocon, CREATORS: PaintIllocon.PaintIllocon, LOCAL_COMMUNITY: LeafIllocon.LeafIllocon, SCHOOL_CLUB: BookIllocon.BookIllocon };