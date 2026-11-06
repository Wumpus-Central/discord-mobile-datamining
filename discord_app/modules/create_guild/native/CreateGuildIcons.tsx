// === Module 14485: CreateGuildIcons ===

// Module 14485 (CreateGuildIcons)
import _modDef14082 from "module_14082" /* 14082 */;
import _modDef14083 from "module_14083" /* 14083 */;
import _modDef14084 from "module_14084" /* 14084 */;
import _modDef14085 from "module_14085" /* 14085 */;
import _modDef14086 from "module_14086" /* 14086 */;
import _modDef14087 from "module_14087" /* 14087 */;
import _modDef14088 from "module_14088" /* 14088 */;
import PencilIllocon from "PencilIllocon" /* 14486 */;
import ControllerIllocon from "ControllerIllocon" /* 14489 */;
import HeartIllocon from "HeartIllocon" /* 14493 */;
import AppleIllocon from "AppleIllocon" /* 14497 */;
import BookIllocon from "BookIllocon" /* 14501 */;
import PaintIllocon from "PaintIllocon" /* 14505 */;
import LeafIllocon from "LeafIllocon" /* 14509 */;
import size from "module_2" /* 2 */;

const obj = { CREATE: _modDef14082, GAMING: _modDef14086, FRIENDS: _modDef14084, STUDY: _modDef14085, CLUBS: _modDef14087, CREATORS: _modDef14088, LOCAL_COMMUNITY: _modDef14083, SCHOOL_CLUB: _modDef14087 };
const result = size.fileFinishedImporting("modules/create_guild/native/CreateGuildIcons.tsx");

export const GUILD_TEMPLATE_ICONS = obj;
export const GUILD_TEMPLATE_ICON_COMPONENTS = { CREATE: PencilIllocon.PencilIllocon, GAMING: ControllerIllocon.ControllerIllocon, FRIENDS: HeartIllocon.HeartIllocon, STUDY: AppleIllocon.AppleIllocon, CLUBS: BookIllocon.BookIllocon, CREATORS: PaintIllocon.PaintIllocon, LOCAL_COMMUNITY: LeafIllocon.LeafIllocon, SCHOOL_CLUB: BookIllocon.BookIllocon };