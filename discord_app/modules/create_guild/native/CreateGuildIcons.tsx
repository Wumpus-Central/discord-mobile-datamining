// === Module 14414: CreateGuildIcons ===

// Module 14414 (CreateGuildIcons)
import _modDef14005 from "module_14005" /* 14005 */;
import _modDef14006 from "module_14006" /* 14006 */;
import _modDef14007 from "module_14007" /* 14007 */;
import _modDef14008 from "module_14008" /* 14008 */;
import _modDef14009 from "module_14009" /* 14009 */;
import _modDef14010 from "module_14010" /* 14010 */;
import _modDef14011 from "module_14011" /* 14011 */;
import PencilIllocon from "PencilIllocon" /* 14415 */;
import ControllerIllocon from "ControllerIllocon" /* 14418 */;
import HeartIllocon from "HeartIllocon" /* 14422 */;
import AppleIllocon from "AppleIllocon" /* 14426 */;
import BookIllocon from "BookIllocon" /* 14430 */;
import PaintIllocon from "PaintIllocon" /* 14434 */;
import LeafIllocon from "LeafIllocon" /* 14438 */;
import size from "module_2" /* 2 */;

const obj = { CREATE: _modDef14005, GAMING: _modDef14009, FRIENDS: _modDef14007, STUDY: _modDef14008, CLUBS: _modDef14010, CREATORS: _modDef14011, LOCAL_COMMUNITY: _modDef14006, SCHOOL_CLUB: _modDef14010 };
const result = size.fileFinishedImporting("modules/create_guild/native/CreateGuildIcons.tsx");

export const GUILD_TEMPLATE_ICONS = obj;
export const GUILD_TEMPLATE_ICON_COMPONENTS = { CREATE: PencilIllocon.PencilIllocon, GAMING: ControllerIllocon.ControllerIllocon, FRIENDS: HeartIllocon.HeartIllocon, STUDY: AppleIllocon.AppleIllocon, CLUBS: BookIllocon.BookIllocon, CREATORS: PaintIllocon.PaintIllocon, LOCAL_COMMUNITY: LeafIllocon.LeafIllocon, SCHOOL_CLUB: BookIllocon.BookIllocon };