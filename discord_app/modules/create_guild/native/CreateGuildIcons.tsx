// === Module 13434: CreateGuildIcons ===

// Module 13434 (CreateGuildIcons)
import _modDef13025 from "module_13025" /* 13025 */;
import _modDef13026 from "module_13026" /* 13026 */;
import _modDef13027 from "module_13027" /* 13027 */;
import _modDef13028 from "module_13028" /* 13028 */;
import _modDef13029 from "module_13029" /* 13029 */;
import _modDef13030 from "module_13030" /* 13030 */;
import _modDef13031 from "module_13031" /* 13031 */;
import PencilIllocon from "PencilIllocon" /* 13435 */;
import ControllerIllocon from "ControllerIllocon" /* 13438 */;
import HeartIllocon from "HeartIllocon" /* 13442 */;
import AppleIllocon from "AppleIllocon" /* 13446 */;
import BookIllocon from "BookIllocon" /* 13450 */;
import PaintIllocon from "PaintIllocon" /* 13454 */;
import LeafIllocon from "LeafIllocon" /* 13458 */;
import size from "module_2" /* 2 */;

const obj = { CREATE: _modDef13025, GAMING: _modDef13029, FRIENDS: _modDef13027, STUDY: _modDef13028, CLUBS: _modDef13030, CREATORS: _modDef13031, LOCAL_COMMUNITY: _modDef13026, SCHOOL_CLUB: _modDef13030 };
const result = size.fileFinishedImporting("modules/create_guild/native/CreateGuildIcons.tsx");

export const GUILD_TEMPLATE_ICONS = obj;
export const GUILD_TEMPLATE_ICON_COMPONENTS = { CREATE: PencilIllocon.PencilIllocon, GAMING: ControllerIllocon.ControllerIllocon, FRIENDS: HeartIllocon.HeartIllocon, STUDY: AppleIllocon.AppleIllocon, CLUBS: BookIllocon.BookIllocon, CREATORS: PaintIllocon.PaintIllocon, LOCAL_COMMUNITY: LeafIllocon.LeafIllocon, SCHOOL_CLUB: BookIllocon.BookIllocon };