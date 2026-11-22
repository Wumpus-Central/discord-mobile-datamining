// === Module 13617: CreateGuildIcons ===

// Module 13617 (CreateGuildIcons)
import _modDef13180 from "module_13180" /* 13180 */;
import _modDef13181 from "module_13181" /* 13181 */;
import _modDef13182 from "module_13182" /* 13182 */;
import _modDef13183 from "module_13183" /* 13183 */;
import _modDef13184 from "module_13184" /* 13184 */;
import _modDef13185 from "module_13185" /* 13185 */;
import _modDef13186 from "module_13186" /* 13186 */;
import PencilIllocon from "PencilIllocon" /* 13618 */;
import ControllerIllocon from "ControllerIllocon" /* 13621 */;
import HeartIllocon from "HeartIllocon" /* 13625 */;
import AppleIllocon from "AppleIllocon" /* 13629 */;
import BookIllocon from "BookIllocon" /* 13633 */;
import PaintIllocon from "PaintIllocon" /* 13637 */;
import LeafIllocon from "LeafIllocon" /* 13641 */;
import size from "module_2" /* 2 */;

const obj = { CREATE: _modDef13180, GAMING: _modDef13184, FRIENDS: _modDef13182, STUDY: _modDef13183, CLUBS: _modDef13185, CREATORS: _modDef13186, LOCAL_COMMUNITY: _modDef13181, SCHOOL_CLUB: _modDef13185 };
const result = size.fileFinishedImporting("modules/create_guild/native/CreateGuildIcons.tsx");

export const GUILD_TEMPLATE_ICONS = obj;
export const GUILD_TEMPLATE_ICON_COMPONENTS = { CREATE: PencilIllocon.PencilIllocon, GAMING: ControllerIllocon.ControllerIllocon, FRIENDS: HeartIllocon.HeartIllocon, STUDY: AppleIllocon.AppleIllocon, CLUBS: BookIllocon.BookIllocon, CREATORS: PaintIllocon.PaintIllocon, LOCAL_COMMUNITY: LeafIllocon.LeafIllocon, SCHOOL_CLUB: BookIllocon.BookIllocon };