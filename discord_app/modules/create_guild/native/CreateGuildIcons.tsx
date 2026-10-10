// === Module 12434: CreateGuildIcons ===

// Module 12434 (CreateGuildIcons)
import _modDef12021 from "module_12021" /* 12021 */;
import _modDef12022 from "module_12022" /* 12022 */;
import _modDef12023 from "module_12023" /* 12023 */;
import _modDef12024 from "module_12024" /* 12024 */;
import _modDef12025 from "module_12025" /* 12025 */;
import _modDef12026 from "module_12026" /* 12026 */;
import _modDef12027 from "module_12027" /* 12027 */;
import PencilIllocon from "PencilIllocon" /* 12435 */;
import ControllerIllocon from "ControllerIllocon" /* 12438 */;
import HeartIllocon from "HeartIllocon" /* 12442 */;
import AppleIllocon from "AppleIllocon" /* 12446 */;
import BookIllocon from "BookIllocon" /* 12450 */;
import PaintIllocon from "PaintIllocon" /* 12454 */;
import LeafIllocon from "LeafIllocon" /* 12458 */;
import size from "module_2" /* 2 */;

const obj = { CREATE: _modDef12021, GAMING: _modDef12025, FRIENDS: _modDef12023, STUDY: _modDef12024, CLUBS: _modDef12026, CREATORS: _modDef12027, LOCAL_COMMUNITY: _modDef12022, SCHOOL_CLUB: _modDef12026 };
const result = size.fileFinishedImporting("modules/create_guild/native/CreateGuildIcons.tsx");

export const GUILD_TEMPLATE_ICONS = obj;
export const GUILD_TEMPLATE_ICON_COMPONENTS = { CREATE: PencilIllocon.PencilIllocon, GAMING: ControllerIllocon.ControllerIllocon, FRIENDS: HeartIllocon.HeartIllocon, STUDY: AppleIllocon.AppleIllocon, CLUBS: BookIllocon.BookIllocon, CREATORS: PaintIllocon.PaintIllocon, LOCAL_COMMUNITY: LeafIllocon.LeafIllocon, SCHOOL_CLUB: BookIllocon.BookIllocon };