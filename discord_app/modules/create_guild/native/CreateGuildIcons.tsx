// === Module 13416: CreateGuildIcons ===

// Module 13416 (CreateGuildIcons)
import _modDef13007 from "module_13007" /* 13007 */;
import _modDef13008 from "module_13008" /* 13008 */;
import _modDef13009 from "module_13009" /* 13009 */;
import _modDef13010 from "module_13010" /* 13010 */;
import _modDef13011 from "module_13011" /* 13011 */;
import _modDef13012 from "module_13012" /* 13012 */;
import _modDef13013 from "module_13013" /* 13013 */;
import PencilIllocon from "PencilIllocon" /* 13417 */;
import ControllerIllocon from "ControllerIllocon" /* 13420 */;
import HeartIllocon from "HeartIllocon" /* 13424 */;
import AppleIllocon from "AppleIllocon" /* 13428 */;
import BookIllocon from "BookIllocon" /* 13432 */;
import PaintIllocon from "PaintIllocon" /* 13436 */;
import LeafIllocon from "LeafIllocon" /* 13440 */;
import size from "module_2" /* 2 */;

const obj = { CREATE: _modDef13007, GAMING: _modDef13011, FRIENDS: _modDef13009, STUDY: _modDef13010, CLUBS: _modDef13012, CREATORS: _modDef13013, LOCAL_COMMUNITY: _modDef13008, SCHOOL_CLUB: _modDef13012 };
const result = size.fileFinishedImporting("modules/create_guild/native/CreateGuildIcons.tsx");

export const GUILD_TEMPLATE_ICONS = obj;
export const GUILD_TEMPLATE_ICON_COMPONENTS = { CREATE: PencilIllocon.PencilIllocon, GAMING: ControllerIllocon.ControllerIllocon, FRIENDS: HeartIllocon.HeartIllocon, STUDY: AppleIllocon.AppleIllocon, CLUBS: BookIllocon.BookIllocon, CREATORS: PaintIllocon.PaintIllocon, LOCAL_COMMUNITY: LeafIllocon.LeafIllocon, SCHOOL_CLUB: BookIllocon.BookIllocon };