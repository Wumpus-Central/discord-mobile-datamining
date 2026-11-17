// === Module 14241: CreateGuildIcons ===

// Module 14241 (CreateGuildIcons)
import _modDef13801 from "module_13801" /* 13801 */;
import _modDef13802 from "module_13802" /* 13802 */;
import _modDef13803 from "module_13803" /* 13803 */;
import _modDef13804 from "module_13804" /* 13804 */;
import _modDef13805 from "module_13805" /* 13805 */;
import _modDef13806 from "module_13806" /* 13806 */;
import _modDef13807 from "module_13807" /* 13807 */;
import PencilIllocon from "PencilIllocon" /* 14242 */;
import ControllerIllocon from "ControllerIllocon" /* 14245 */;
import HeartIllocon from "HeartIllocon" /* 14249 */;
import AppleIllocon from "AppleIllocon" /* 14253 */;
import BookIllocon from "BookIllocon" /* 14257 */;
import PaintIllocon from "PaintIllocon" /* 14261 */;
import LeafIllocon from "LeafIllocon" /* 14265 */;
import size from "module_2" /* 2 */;

const obj = { CREATE: _modDef13801, GAMING: _modDef13805, FRIENDS: _modDef13803, STUDY: _modDef13804, CLUBS: _modDef13806, CREATORS: _modDef13807, LOCAL_COMMUNITY: _modDef13802, SCHOOL_CLUB: _modDef13806 };
const result = size.fileFinishedImporting("modules/create_guild/native/CreateGuildIcons.tsx");

export const GUILD_TEMPLATE_ICONS = obj;
export const GUILD_TEMPLATE_ICON_COMPONENTS = { CREATE: PencilIllocon.PencilIllocon, GAMING: ControllerIllocon.ControllerIllocon, FRIENDS: HeartIllocon.HeartIllocon, STUDY: AppleIllocon.AppleIllocon, CLUBS: BookIllocon.BookIllocon, CREATORS: PaintIllocon.PaintIllocon, LOCAL_COMMUNITY: LeafIllocon.LeafIllocon, SCHOOL_CLUB: BookIllocon.BookIllocon };