// === Module 13303: CreateGuildIcons ===

// Module 13303 (CreateGuildIcons)
import _modDef12894 from "module_12894" /* 12894 */;
import _modDef12895 from "module_12895" /* 12895 */;
import _modDef12896 from "module_12896" /* 12896 */;
import _modDef12897 from "module_12897" /* 12897 */;
import _modDef12898 from "module_12898" /* 12898 */;
import _modDef12899 from "module_12899" /* 12899 */;
import _modDef12900 from "module_12900" /* 12900 */;
import PencilIllocon from "PencilIllocon" /* 13304 */;
import ControllerIllocon from "ControllerIllocon" /* 13307 */;
import HeartIllocon from "HeartIllocon" /* 13311 */;
import AppleIllocon from "AppleIllocon" /* 13315 */;
import BookIllocon from "BookIllocon" /* 13319 */;
import PaintIllocon from "PaintIllocon" /* 13323 */;
import LeafIllocon from "LeafIllocon" /* 13327 */;
import size from "module_2" /* 2 */;

const obj = { CREATE: _modDef12894, GAMING: _modDef12898, FRIENDS: _modDef12896, STUDY: _modDef12897, CLUBS: _modDef12899, CREATORS: _modDef12900, LOCAL_COMMUNITY: _modDef12895, SCHOOL_CLUB: _modDef12899 };
const result = size.fileFinishedImporting("modules/create_guild/native/CreateGuildIcons.tsx");

export const GUILD_TEMPLATE_ICONS = obj;
export const GUILD_TEMPLATE_ICON_COMPONENTS = { CREATE: PencilIllocon.PencilIllocon, GAMING: ControllerIllocon.ControllerIllocon, FRIENDS: HeartIllocon.HeartIllocon, STUDY: AppleIllocon.AppleIllocon, CLUBS: BookIllocon.BookIllocon, CREATORS: PaintIllocon.PaintIllocon, LOCAL_COMMUNITY: LeafIllocon.LeafIllocon, SCHOOL_CLUB: BookIllocon.BookIllocon };