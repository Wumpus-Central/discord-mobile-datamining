// === Module 13531: CreateGuildIcons ===

// Module 13531 (CreateGuildIcons)
import _modDef13098 from "module_13098" /* 13098 */;
import _modDef13099 from "module_13099" /* 13099 */;
import _modDef13100 from "module_13100" /* 13100 */;
import _modDef13101 from "module_13101" /* 13101 */;
import _modDef13102 from "module_13102" /* 13102 */;
import _modDef13103 from "module_13103" /* 13103 */;
import _modDef13104 from "module_13104" /* 13104 */;
import PencilIllocon from "PencilIllocon" /* 13532 */;
import ControllerIllocon from "ControllerIllocon" /* 13535 */;
import HeartIllocon from "HeartIllocon" /* 13539 */;
import AppleIllocon from "AppleIllocon" /* 13543 */;
import BookIllocon from "BookIllocon" /* 13547 */;
import PaintIllocon from "PaintIllocon" /* 13551 */;
import LeafIllocon from "LeafIllocon" /* 13555 */;
import size from "module_2" /* 2 */;

const obj = { CREATE: _modDef13098, GAMING: _modDef13102, FRIENDS: _modDef13100, STUDY: _modDef13101, CLUBS: _modDef13103, CREATORS: _modDef13104, LOCAL_COMMUNITY: _modDef13099, SCHOOL_CLUB: _modDef13103 };
const result = size.fileFinishedImporting("modules/create_guild/native/CreateGuildIcons.tsx");

export const GUILD_TEMPLATE_ICONS = obj;
export const GUILD_TEMPLATE_ICON_COMPONENTS = { CREATE: PencilIllocon.PencilIllocon, GAMING: ControllerIllocon.ControllerIllocon, FRIENDS: HeartIllocon.HeartIllocon, STUDY: AppleIllocon.AppleIllocon, CLUBS: BookIllocon.BookIllocon, CREATORS: PaintIllocon.PaintIllocon, LOCAL_COMMUNITY: LeafIllocon.LeafIllocon, SCHOOL_CLUB: BookIllocon.BookIllocon };