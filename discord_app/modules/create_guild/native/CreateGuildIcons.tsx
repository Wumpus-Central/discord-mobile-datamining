// === Module 14518: CreateGuildIcons ===

// Module 14518 (CreateGuildIcons)
import _modDef14107 from "module_14107" /* 14107 */;
import _modDef14108 from "module_14108" /* 14108 */;
import _modDef14109 from "module_14109" /* 14109 */;
import _modDef14110 from "module_14110" /* 14110 */;
import _modDef14111 from "module_14111" /* 14111 */;
import _modDef14112 from "module_14112" /* 14112 */;
import _modDef14113 from "module_14113" /* 14113 */;
import PencilIllocon from "PencilIllocon" /* 14519 */;
import ControllerIllocon from "ControllerIllocon" /* 14522 */;
import HeartIllocon from "HeartIllocon" /* 14526 */;
import AppleIllocon from "AppleIllocon" /* 14530 */;
import BookIllocon from "BookIllocon" /* 14534 */;
import PaintIllocon from "PaintIllocon" /* 14538 */;
import LeafIllocon from "LeafIllocon" /* 14542 */;
import size from "module_2" /* 2 */;

const obj = { CREATE: _modDef14107, GAMING: _modDef14111, FRIENDS: _modDef14109, STUDY: _modDef14110, CLUBS: _modDef14112, CREATORS: _modDef14113, LOCAL_COMMUNITY: _modDef14108, SCHOOL_CLUB: _modDef14112 };
const result = size.fileFinishedImporting("modules/create_guild/native/CreateGuildIcons.tsx");

export const GUILD_TEMPLATE_ICONS = obj;
export const GUILD_TEMPLATE_ICON_COMPONENTS = { CREATE: PencilIllocon.PencilIllocon, GAMING: ControllerIllocon.ControllerIllocon, FRIENDS: HeartIllocon.HeartIllocon, STUDY: AppleIllocon.AppleIllocon, CLUBS: BookIllocon.BookIllocon, CREATORS: PaintIllocon.PaintIllocon, LOCAL_COMMUNITY: LeafIllocon.LeafIllocon, SCHOOL_CLUB: BookIllocon.BookIllocon };