// === Module 12375: CreateGuildIcons ===

// Module 12375 (CreateGuildIcons)
import _modDef11967 from "module_11967" /* 11967 */;
import _modDef11968 from "module_11968" /* 11968 */;
import _modDef11969 from "module_11969" /* 11969 */;
import _modDef11970 from "module_11970" /* 11970 */;
import _modDef11971 from "module_11971" /* 11971 */;
import _modDef11972 from "module_11972" /* 11972 */;
import _modDef11973 from "module_11973" /* 11973 */;
import PencilIllocon from "PencilIllocon" /* 12376 */;
import ControllerIllocon from "ControllerIllocon" /* 12377 */;
import HeartIllocon from "HeartIllocon" /* 12379 */;
import AppleIllocon from "AppleIllocon" /* 12381 */;
import BookIllocon from "BookIllocon" /* 12383 */;
import PaintIllocon from "PaintIllocon" /* 12385 */;
import LeafIllocon from "LeafIllocon" /* 12387 */;
import size from "module_2" /* 2 */;

const obj = { CREATE: _modDef11967, GAMING: _modDef11971, FRIENDS: _modDef11969, STUDY: _modDef11970, CLUBS: _modDef11972, CREATORS: _modDef11973, LOCAL_COMMUNITY: _modDef11968, SCHOOL_CLUB: _modDef11972 };
const result = size.fileFinishedImporting("modules/create_guild/native/CreateGuildIcons.tsx");

export const GUILD_TEMPLATE_ICONS = obj;
export const GUILD_TEMPLATE_ICON_COMPONENTS = { CREATE: PencilIllocon.PencilIllocon, GAMING: ControllerIllocon.ControllerIllocon, FRIENDS: HeartIllocon.HeartIllocon, STUDY: AppleIllocon.AppleIllocon, CLUBS: BookIllocon.BookIllocon, CREATORS: PaintIllocon.PaintIllocon, LOCAL_COMMUNITY: LeafIllocon.LeafIllocon, SCHOOL_CLUB: BookIllocon.BookIllocon };