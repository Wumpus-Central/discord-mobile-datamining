// === Module 14082: CreateGuildIcons ===

// Module 14082 (CreateGuildIcons)
import _modDef13676 from "module_13676" /* 13676 */;
import _modDef13677 from "module_13677" /* 13677 */;
import _modDef13678 from "module_13678" /* 13678 */;
import _modDef13679 from "module_13679" /* 13679 */;
import _modDef13680 from "module_13680" /* 13680 */;
import _modDef13681 from "module_13681" /* 13681 */;
import _modDef13682 from "module_13682" /* 13682 */;
import PencilIllocon from "PencilIllocon" /* 14083 */;
import ControllerIllocon from "ControllerIllocon" /* 14086 */;
import HeartIllocon from "HeartIllocon" /* 14090 */;
import AppleIllocon from "AppleIllocon" /* 14094 */;
import BookIllocon from "BookIllocon" /* 14098 */;
import PaintIllocon from "PaintIllocon" /* 14102 */;
import LeafIllocon from "LeafIllocon" /* 14106 */;
import size from "module_2" /* 2 */;

const obj = { CREATE: _modDef13676, GAMING: _modDef13680, FRIENDS: _modDef13678, STUDY: _modDef13679, CLUBS: _modDef13681, CREATORS: _modDef13682, LOCAL_COMMUNITY: _modDef13677, SCHOOL_CLUB: _modDef13681 };
const result = size.fileFinishedImporting("modules/create_guild/native/CreateGuildIcons.tsx");

export const GUILD_TEMPLATE_ICONS = obj;
export const GUILD_TEMPLATE_ICON_COMPONENTS = { CREATE: PencilIllocon.PencilIllocon, GAMING: ControllerIllocon.ControllerIllocon, FRIENDS: HeartIllocon.HeartIllocon, STUDY: AppleIllocon.AppleIllocon, CLUBS: BookIllocon.BookIllocon, CREATORS: PaintIllocon.PaintIllocon, LOCAL_COMMUNITY: LeafIllocon.LeafIllocon, SCHOOL_CLUB: BookIllocon.BookIllocon };