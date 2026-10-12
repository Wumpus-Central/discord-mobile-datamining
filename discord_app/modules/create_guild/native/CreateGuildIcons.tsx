// === Module 12436: CreateGuildIcons ===

// Module 12436 (CreateGuildIcons)
import _modDef12023 from "module_12023" /* 12023 */;
import _modDef12024 from "module_12024" /* 12024 */;
import _modDef12025 from "module_12025" /* 12025 */;
import _modDef12026 from "module_12026" /* 12026 */;
import _modDef12027 from "module_12027" /* 12027 */;
import _modDef12028 from "module_12028" /* 12028 */;
import _modDef12029 from "module_12029" /* 12029 */;
import PencilIllocon from "PencilIllocon" /* 12437 */;
import ControllerIllocon from "ControllerIllocon" /* 12440 */;
import HeartIllocon from "HeartIllocon" /* 12444 */;
import AppleIllocon from "AppleIllocon" /* 12448 */;
import BookIllocon from "BookIllocon" /* 12452 */;
import PaintIllocon from "PaintIllocon" /* 12456 */;
import LeafIllocon from "LeafIllocon" /* 12460 */;
import size from "module_2" /* 2 */;

const obj = { CREATE: _modDef12023, GAMING: _modDef12027, FRIENDS: _modDef12025, STUDY: _modDef12026, CLUBS: _modDef12028, CREATORS: _modDef12029, LOCAL_COMMUNITY: _modDef12024, SCHOOL_CLUB: _modDef12028 };
const result = size.fileFinishedImporting("modules/create_guild/native/CreateGuildIcons.tsx");

export const GUILD_TEMPLATE_ICONS = obj;
export const GUILD_TEMPLATE_ICON_COMPONENTS = { CREATE: PencilIllocon.PencilIllocon, GAMING: ControllerIllocon.ControllerIllocon, FRIENDS: HeartIllocon.HeartIllocon, STUDY: AppleIllocon.AppleIllocon, CLUBS: BookIllocon.BookIllocon, CREATORS: PaintIllocon.PaintIllocon, LOCAL_COMMUNITY: LeafIllocon.LeafIllocon, SCHOOL_CLUB: BookIllocon.BookIllocon };