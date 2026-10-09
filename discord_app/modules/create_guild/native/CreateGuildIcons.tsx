// === Module 12390: CreateGuildIcons ===

// Module 12390 (CreateGuildIcons)
import _modDef11977 from "module_11977" /* 11977 */;
import _modDef11978 from "module_11978" /* 11978 */;
import _modDef11979 from "module_11979" /* 11979 */;
import _modDef11980 from "module_11980" /* 11980 */;
import _modDef11981 from "module_11981" /* 11981 */;
import _modDef11982 from "module_11982" /* 11982 */;
import _modDef11983 from "module_11983" /* 11983 */;
import PencilIllocon from "PencilIllocon" /* 12391 */;
import ControllerIllocon from "ControllerIllocon" /* 12394 */;
import HeartIllocon from "HeartIllocon" /* 12398 */;
import AppleIllocon from "AppleIllocon" /* 12402 */;
import BookIllocon from "BookIllocon" /* 12406 */;
import PaintIllocon from "PaintIllocon" /* 12410 */;
import LeafIllocon from "LeafIllocon" /* 12414 */;
import size from "module_2" /* 2 */;

const obj = { CREATE: _modDef11977, GAMING: _modDef11981, FRIENDS: _modDef11979, STUDY: _modDef11980, CLUBS: _modDef11982, CREATORS: _modDef11983, LOCAL_COMMUNITY: _modDef11978, SCHOOL_CLUB: _modDef11982 };
const result = size.fileFinishedImporting("modules/create_guild/native/CreateGuildIcons.tsx");

export const GUILD_TEMPLATE_ICONS = obj;
export const GUILD_TEMPLATE_ICON_COMPONENTS = { CREATE: PencilIllocon.PencilIllocon, GAMING: ControllerIllocon.ControllerIllocon, FRIENDS: HeartIllocon.HeartIllocon, STUDY: AppleIllocon.AppleIllocon, CLUBS: BookIllocon.BookIllocon, CREATORS: PaintIllocon.PaintIllocon, LOCAL_COMMUNITY: LeafIllocon.LeafIllocon, SCHOOL_CLUB: BookIllocon.BookIllocon };