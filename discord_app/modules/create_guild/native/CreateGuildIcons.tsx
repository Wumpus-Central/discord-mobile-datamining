// === Module 12190: CreateGuildIcons ===

// Module 12190 (CreateGuildIcons)
import _modDef11795 from "module_11795" /* 11795 */;
import _modDef11796 from "module_11796" /* 11796 */;
import _modDef11797 from "module_11797" /* 11797 */;
import _modDef11798 from "module_11798" /* 11798 */;
import _modDef11799 from "module_11799" /* 11799 */;
import _modDef11800 from "module_11800" /* 11800 */;
import _modDef11801 from "module_11801" /* 11801 */;
import PencilIllocon from "PencilIllocon" /* 12191 */;
import ControllerIllocon from "ControllerIllocon" /* 12192 */;
import HeartIllocon from "HeartIllocon" /* 12194 */;
import AppleIllocon from "AppleIllocon" /* 12196 */;
import BookIllocon from "BookIllocon" /* 12198 */;
import PaintIllocon from "PaintIllocon" /* 12200 */;
import LeafIllocon from "LeafIllocon" /* 12202 */;
import size from "module_2" /* 2 */;

const obj = { CREATE: _modDef11795, GAMING: _modDef11799, FRIENDS: _modDef11797, STUDY: _modDef11798, CLUBS: _modDef11800, CREATORS: _modDef11801, LOCAL_COMMUNITY: _modDef11796, SCHOOL_CLUB: _modDef11800 };
const result = size.fileFinishedImporting("modules/create_guild/native/CreateGuildIcons.tsx");

export const GUILD_TEMPLATE_ICONS = obj;
export const GUILD_TEMPLATE_ICON_COMPONENTS = { CREATE: PencilIllocon.PencilIllocon, GAMING: ControllerIllocon.ControllerIllocon, FRIENDS: HeartIllocon.HeartIllocon, STUDY: AppleIllocon.AppleIllocon, CLUBS: BookIllocon.BookIllocon, CREATORS: PaintIllocon.PaintIllocon, LOCAL_COMMUNITY: LeafIllocon.LeafIllocon, SCHOOL_CLUB: BookIllocon.BookIllocon };