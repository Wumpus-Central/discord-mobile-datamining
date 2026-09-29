// === Module 12379: CreateGuildIcons ===

// Module 12379 (CreateGuildIcons)
import _modDef11978 from "module_11978" /* 11978 */;
import _modDef11979 from "module_11979" /* 11979 */;
import _modDef11980 from "module_11980" /* 11980 */;
import _modDef11981 from "module_11981" /* 11981 */;
import _modDef11982 from "module_11982" /* 11982 */;
import _modDef11983 from "module_11983" /* 11983 */;
import _modDef11984 from "module_11984" /* 11984 */;
import PencilIllocon from "PencilIllocon" /* 12380 */;
import ControllerIllocon from "ControllerIllocon" /* 12381 */;
import HeartIllocon from "HeartIllocon" /* 12383 */;
import AppleIllocon from "AppleIllocon" /* 12385 */;
import BookIllocon from "BookIllocon" /* 12387 */;
import PaintIllocon from "PaintIllocon" /* 12389 */;
import LeafIllocon from "LeafIllocon" /* 12391 */;
import size from "module_2" /* 2 */;

const obj = { CREATE: _modDef11978, GAMING: _modDef11982, FRIENDS: _modDef11980, STUDY: _modDef11981, CLUBS: _modDef11983, CREATORS: _modDef11984, LOCAL_COMMUNITY: _modDef11979, SCHOOL_CLUB: _modDef11983 };
const result = size.fileFinishedImporting("modules/create_guild/native/CreateGuildIcons.tsx");

export const GUILD_TEMPLATE_ICONS = obj;
export const GUILD_TEMPLATE_ICON_COMPONENTS = { CREATE: PencilIllocon.PencilIllocon, GAMING: ControllerIllocon.ControllerIllocon, FRIENDS: HeartIllocon.HeartIllocon, STUDY: AppleIllocon.AppleIllocon, CLUBS: BookIllocon.BookIllocon, CREATORS: PaintIllocon.PaintIllocon, LOCAL_COMMUNITY: LeafIllocon.LeafIllocon, SCHOOL_CLUB: BookIllocon.BookIllocon };