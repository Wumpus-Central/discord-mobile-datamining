// === Module 14519: CreateGuildIcons ===

// Module 14519 (CreateGuildIcons)
import _modDef14108 from "module_14108" /* 14108 */;
import _modDef14109 from "module_14109" /* 14109 */;
import _modDef14110 from "module_14110" /* 14110 */;
import _modDef14111 from "module_14111" /* 14111 */;
import _modDef14112 from "module_14112" /* 14112 */;
import _modDef14113 from "module_14113" /* 14113 */;
import _modDef14114 from "module_14114" /* 14114 */;
import PencilIllocon from "PencilIllocon" /* 14520 */;
import ControllerIllocon from "ControllerIllocon" /* 14523 */;
import HeartIllocon from "HeartIllocon" /* 14527 */;
import AppleIllocon from "AppleIllocon" /* 14531 */;
import BookIllocon from "BookIllocon" /* 14535 */;
import PaintIllocon from "PaintIllocon" /* 14539 */;
import LeafIllocon from "LeafIllocon" /* 14543 */;
import size from "module_2" /* 2 */;

const obj = { CREATE: _modDef14108, GAMING: _modDef14112, FRIENDS: _modDef14110, STUDY: _modDef14111, CLUBS: _modDef14113, CREATORS: _modDef14114, LOCAL_COMMUNITY: _modDef14109, SCHOOL_CLUB: _modDef14113 };
const result = size.fileFinishedImporting("modules/create_guild/native/CreateGuildIcons.tsx");

export const GUILD_TEMPLATE_ICONS = obj;
export const GUILD_TEMPLATE_ICON_COMPONENTS = { CREATE: PencilIllocon.PencilIllocon, GAMING: ControllerIllocon.ControllerIllocon, FRIENDS: HeartIllocon.HeartIllocon, STUDY: AppleIllocon.AppleIllocon, CLUBS: BookIllocon.BookIllocon, CREATORS: PaintIllocon.PaintIllocon, LOCAL_COMMUNITY: LeafIllocon.LeafIllocon, SCHOOL_CLUB: BookIllocon.BookIllocon };