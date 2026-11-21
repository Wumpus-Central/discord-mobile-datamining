// === Module 13619: CreateGuildIcons ===

// Module 13619 (CreateGuildIcons)
import _modDef13182 from "module_13182" /* 13182 */;
import _modDef13183 from "module_13183" /* 13183 */;
import _modDef13184 from "module_13184" /* 13184 */;
import _modDef13185 from "module_13185" /* 13185 */;
import _modDef13186 from "module_13186" /* 13186 */;
import _modDef13187 from "module_13187" /* 13187 */;
import _modDef13188 from "module_13188" /* 13188 */;
import PencilIllocon from "PencilIllocon" /* 13620 */;
import ControllerIllocon from "ControllerIllocon" /* 13623 */;
import HeartIllocon from "HeartIllocon" /* 13627 */;
import AppleIllocon from "AppleIllocon" /* 13631 */;
import BookIllocon from "BookIllocon" /* 13635 */;
import PaintIllocon from "PaintIllocon" /* 13639 */;
import LeafIllocon from "LeafIllocon" /* 13643 */;
import size from "module_2" /* 2 */;

const obj = { CREATE: _modDef13182, GAMING: _modDef13186, FRIENDS: _modDef13184, STUDY: _modDef13185, CLUBS: _modDef13187, CREATORS: _modDef13188, LOCAL_COMMUNITY: _modDef13183, SCHOOL_CLUB: _modDef13187 };
const result = size.fileFinishedImporting("modules/create_guild/native/CreateGuildIcons.tsx");

export const GUILD_TEMPLATE_ICONS = obj;
export const GUILD_TEMPLATE_ICON_COMPONENTS = { CREATE: PencilIllocon.PencilIllocon, GAMING: ControllerIllocon.ControllerIllocon, FRIENDS: HeartIllocon.HeartIllocon, STUDY: AppleIllocon.AppleIllocon, CLUBS: BookIllocon.BookIllocon, CREATORS: PaintIllocon.PaintIllocon, LOCAL_COMMUNITY: LeafIllocon.LeafIllocon, SCHOOL_CLUB: BookIllocon.BookIllocon };