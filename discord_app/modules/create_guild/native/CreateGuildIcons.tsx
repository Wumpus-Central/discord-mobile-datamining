// === Module 13713: CreateGuildIcons ===

// Module 13713 (CreateGuildIcons)
import _modDef13281 from "module_13281" /* 13281 */;
import _modDef13282 from "module_13282" /* 13282 */;
import _modDef13283 from "module_13283" /* 13283 */;
import _modDef13284 from "module_13284" /* 13284 */;
import _modDef13285 from "module_13285" /* 13285 */;
import _modDef13286 from "module_13286" /* 13286 */;
import _modDef13287 from "module_13287" /* 13287 */;
import PencilIllocon from "PencilIllocon" /* 13714 */;
import ControllerIllocon from "ControllerIllocon" /* 13717 */;
import HeartIllocon from "HeartIllocon" /* 13721 */;
import AppleIllocon from "AppleIllocon" /* 13725 */;
import BookIllocon from "BookIllocon" /* 13729 */;
import PaintIllocon from "PaintIllocon" /* 13733 */;
import LeafIllocon from "LeafIllocon" /* 13737 */;
import size from "module_2" /* 2 */;

const obj = { CREATE: _modDef13281, GAMING: _modDef13285, FRIENDS: _modDef13283, STUDY: _modDef13284, CLUBS: _modDef13286, CREATORS: _modDef13287, LOCAL_COMMUNITY: _modDef13282, SCHOOL_CLUB: _modDef13286 };
const result = size.fileFinishedImporting("modules/create_guild/native/CreateGuildIcons.tsx");

export const GUILD_TEMPLATE_ICONS = obj;
export const GUILD_TEMPLATE_ICON_COMPONENTS = { CREATE: PencilIllocon.PencilIllocon, GAMING: ControllerIllocon.ControllerIllocon, FRIENDS: HeartIllocon.HeartIllocon, STUDY: AppleIllocon.AppleIllocon, CLUBS: BookIllocon.BookIllocon, CREATORS: PaintIllocon.PaintIllocon, LOCAL_COMMUNITY: LeafIllocon.LeafIllocon, SCHOOL_CLUB: BookIllocon.BookIllocon };