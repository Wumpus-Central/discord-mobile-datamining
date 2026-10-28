// === Module 13849: CreateGuildIcons ===

// Module 13849 (CreateGuildIcons)
import _modDef13443 from "module_13443" /* 13443 */;
import _modDef13444 from "module_13444" /* 13444 */;
import _modDef13445 from "module_13445" /* 13445 */;
import _modDef13446 from "module_13446" /* 13446 */;
import _modDef13447 from "module_13447" /* 13447 */;
import _modDef13448 from "module_13448" /* 13448 */;
import _modDef13449 from "module_13449" /* 13449 */;
import PencilIllocon from "PencilIllocon" /* 13850 */;
import ControllerIllocon from "ControllerIllocon" /* 13853 */;
import HeartIllocon from "HeartIllocon" /* 13857 */;
import AppleIllocon from "AppleIllocon" /* 13861 */;
import BookIllocon from "BookIllocon" /* 13865 */;
import PaintIllocon from "PaintIllocon" /* 13869 */;
import LeafIllocon from "LeafIllocon" /* 13873 */;
import size from "module_2" /* 2 */;

const obj = { CREATE: _modDef13443, GAMING: _modDef13447, FRIENDS: _modDef13445, STUDY: _modDef13446, CLUBS: _modDef13448, CREATORS: _modDef13449, LOCAL_COMMUNITY: _modDef13444, SCHOOL_CLUB: _modDef13448 };
const result = size.fileFinishedImporting("modules/create_guild/native/CreateGuildIcons.tsx");

export const GUILD_TEMPLATE_ICONS = obj;
export const GUILD_TEMPLATE_ICON_COMPONENTS = { CREATE: PencilIllocon.PencilIllocon, GAMING: ControllerIllocon.ControllerIllocon, FRIENDS: HeartIllocon.HeartIllocon, STUDY: AppleIllocon.AppleIllocon, CLUBS: BookIllocon.BookIllocon, CREATORS: PaintIllocon.PaintIllocon, LOCAL_COMMUNITY: LeafIllocon.LeafIllocon, SCHOOL_CLUB: BookIllocon.BookIllocon };