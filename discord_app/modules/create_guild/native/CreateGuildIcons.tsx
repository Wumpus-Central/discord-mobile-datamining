// === Module 15029: CreateGuildIcons ===

// Module 15029 (CreateGuildIcons)
import _modDef14723 from "module_14723" /* 14723 */;
import _modDef14724 from "module_14724" /* 14724 */;
import _modDef14725 from "module_14725" /* 14725 */;
import _modDef14726 from "module_14726" /* 14726 */;
import _modDef14727 from "module_14727" /* 14727 */;
import _modDef14728 from "module_14728" /* 14728 */;
import _modDef14729 from "module_14729" /* 14729 */;
import PencilIllocon from "PencilIllocon" /* 15030 */;
import ControllerIllocon from "ControllerIllocon" /* 15033 */;
import HeartIllocon from "HeartIllocon" /* 15037 */;
import AppleIllocon from "AppleIllocon" /* 15041 */;
import BookIllocon from "BookIllocon" /* 15045 */;
import PaintIllocon from "PaintIllocon" /* 15049 */;
import LeafIllocon from "LeafIllocon" /* 15053 */;
import size from "module_2" /* 2 */;

const obj = { CREATE: _modDef14723, GAMING: _modDef14727, FRIENDS: _modDef14725, STUDY: _modDef14726, CLUBS: _modDef14728, CREATORS: _modDef14729, LOCAL_COMMUNITY: _modDef14724, SCHOOL_CLUB: _modDef14728 };
const result = size.fileFinishedImporting("modules/create_guild/native/CreateGuildIcons.tsx");

export const GUILD_TEMPLATE_ICONS = obj;
export const GUILD_TEMPLATE_ICON_COMPONENTS = { CREATE: PencilIllocon.PencilIllocon, GAMING: ControllerIllocon.ControllerIllocon, FRIENDS: HeartIllocon.HeartIllocon, STUDY: AppleIllocon.AppleIllocon, CLUBS: BookIllocon.BookIllocon, CREATORS: PaintIllocon.PaintIllocon, LOCAL_COMMUNITY: LeafIllocon.LeafIllocon, SCHOOL_CLUB: BookIllocon.BookIllocon };