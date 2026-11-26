// === Module 13706: CreateGuildIcons ===

// Module 13706 (CreateGuildIcons)
import _modDef13273 from "module_13273" /* 13273 */;
import _modDef13274 from "module_13274" /* 13274 */;
import _modDef13275 from "module_13275" /* 13275 */;
import _modDef13276 from "module_13276" /* 13276 */;
import _modDef13277 from "module_13277" /* 13277 */;
import _modDef13278 from "module_13278" /* 13278 */;
import _modDef13279 from "module_13279" /* 13279 */;
import PencilIllocon from "PencilIllocon" /* 13707 */;
import ControllerIllocon from "ControllerIllocon" /* 13710 */;
import HeartIllocon from "HeartIllocon" /* 13714 */;
import AppleIllocon from "AppleIllocon" /* 13718 */;
import BookIllocon from "BookIllocon" /* 13722 */;
import PaintIllocon from "PaintIllocon" /* 13726 */;
import LeafIllocon from "LeafIllocon" /* 13730 */;
import size from "module_2" /* 2 */;

const obj = { CREATE: _modDef13273, GAMING: _modDef13277, FRIENDS: _modDef13275, STUDY: _modDef13276, CLUBS: _modDef13278, CREATORS: _modDef13279, LOCAL_COMMUNITY: _modDef13274, SCHOOL_CLUB: _modDef13278 };
const result = size.fileFinishedImporting("modules/create_guild/native/CreateGuildIcons.tsx");

export const GUILD_TEMPLATE_ICONS = obj;
export const GUILD_TEMPLATE_ICON_COMPONENTS = { CREATE: PencilIllocon.PencilIllocon, GAMING: ControllerIllocon.ControllerIllocon, FRIENDS: HeartIllocon.HeartIllocon, STUDY: AppleIllocon.AppleIllocon, CLUBS: BookIllocon.BookIllocon, CREATORS: PaintIllocon.PaintIllocon, LOCAL_COMMUNITY: LeafIllocon.LeafIllocon, SCHOOL_CLUB: BookIllocon.BookIllocon };