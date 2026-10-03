// === Module 12360: CreateGuildIcons ===

// Module 12360 (CreateGuildIcons)
import _modDef11953 from "module_11953" /* 11953 */;
import _modDef11954 from "module_11954" /* 11954 */;
import _modDef11955 from "module_11955" /* 11955 */;
import _modDef11956 from "module_11956" /* 11956 */;
import _modDef11957 from "module_11957" /* 11957 */;
import _modDef11958 from "module_11958" /* 11958 */;
import _modDef11959 from "module_11959" /* 11959 */;
import PencilIllocon from "PencilIllocon" /* 12361 */;
import ControllerIllocon from "ControllerIllocon" /* 12362 */;
import HeartIllocon from "HeartIllocon" /* 12364 */;
import AppleIllocon from "AppleIllocon" /* 12366 */;
import BookIllocon from "BookIllocon" /* 12368 */;
import PaintIllocon from "PaintIllocon" /* 12370 */;
import LeafIllocon from "LeafIllocon" /* 12372 */;
import size from "module_2" /* 2 */;

const obj = { CREATE: _modDef11953, GAMING: _modDef11957, FRIENDS: _modDef11955, STUDY: _modDef11956, CLUBS: _modDef11958, CREATORS: _modDef11959, LOCAL_COMMUNITY: _modDef11954, SCHOOL_CLUB: _modDef11958 };
const result = size.fileFinishedImporting("modules/create_guild/native/CreateGuildIcons.tsx");

export const GUILD_TEMPLATE_ICONS = obj;
export const GUILD_TEMPLATE_ICON_COMPONENTS = { CREATE: PencilIllocon.PencilIllocon, GAMING: ControllerIllocon.ControllerIllocon, FRIENDS: HeartIllocon.HeartIllocon, STUDY: AppleIllocon.AppleIllocon, CLUBS: BookIllocon.BookIllocon, CREATORS: PaintIllocon.PaintIllocon, LOCAL_COMMUNITY: LeafIllocon.LeafIllocon, SCHOOL_CLUB: BookIllocon.BookIllocon };