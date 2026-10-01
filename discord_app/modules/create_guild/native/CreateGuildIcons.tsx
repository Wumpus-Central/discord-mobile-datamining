// === Module 12421: CreateGuildIcons ===

// Module 12421 (CreateGuildIcons)
import _modDef12019 from "module_12019" /* 12019 */;
import _modDef12020 from "module_12020" /* 12020 */;
import _modDef12021 from "module_12021" /* 12021 */;
import _modDef12022 from "module_12022" /* 12022 */;
import _modDef12023 from "module_12023" /* 12023 */;
import _modDef12024 from "module_12024" /* 12024 */;
import _modDef12025 from "module_12025" /* 12025 */;
import PencilIllocon from "PencilIllocon" /* 12422 */;
import ControllerIllocon from "ControllerIllocon" /* 12423 */;
import HeartIllocon from "HeartIllocon" /* 12425 */;
import AppleIllocon from "AppleIllocon" /* 12427 */;
import BookIllocon from "BookIllocon" /* 12429 */;
import PaintIllocon from "PaintIllocon" /* 12431 */;
import LeafIllocon from "LeafIllocon" /* 12433 */;
import size from "module_2" /* 2 */;

const obj = { CREATE: _modDef12019, GAMING: _modDef12023, FRIENDS: _modDef12021, STUDY: _modDef12022, CLUBS: _modDef12024, CREATORS: _modDef12025, LOCAL_COMMUNITY: _modDef12020, SCHOOL_CLUB: _modDef12024 };
const result = size.fileFinishedImporting("modules/create_guild/native/CreateGuildIcons.tsx");

export const GUILD_TEMPLATE_ICONS = obj;
export const GUILD_TEMPLATE_ICON_COMPONENTS = { CREATE: PencilIllocon.PencilIllocon, GAMING: ControllerIllocon.ControllerIllocon, FRIENDS: HeartIllocon.HeartIllocon, STUDY: AppleIllocon.AppleIllocon, CLUBS: BookIllocon.BookIllocon, CREATORS: PaintIllocon.PaintIllocon, LOCAL_COMMUNITY: LeafIllocon.LeafIllocon, SCHOOL_CLUB: BookIllocon.BookIllocon };