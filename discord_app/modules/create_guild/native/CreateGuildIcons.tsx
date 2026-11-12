// === Module 14915: CreateGuildIcons ===

// Module 14915 (CreateGuildIcons)
import _modDef14610 from "module_14610" /* 14610 */;
import _modDef14611 from "module_14611" /* 14611 */;
import _modDef14612 from "module_14612" /* 14612 */;
import _modDef14613 from "module_14613" /* 14613 */;
import _modDef14614 from "module_14614" /* 14614 */;
import _modDef14615 from "module_14615" /* 14615 */;
import _modDef14616 from "module_14616" /* 14616 */;
import PencilIllocon from "PencilIllocon" /* 14916 */;
import ControllerIllocon from "ControllerIllocon" /* 14919 */;
import HeartIllocon from "HeartIllocon" /* 14923 */;
import AppleIllocon from "AppleIllocon" /* 14927 */;
import BookIllocon from "BookIllocon" /* 14931 */;
import PaintIllocon from "PaintIllocon" /* 14935 */;
import LeafIllocon from "LeafIllocon" /* 14939 */;
import size from "module_2" /* 2 */;

const obj = { CREATE: _modDef14610, GAMING: _modDef14614, FRIENDS: _modDef14612, STUDY: _modDef14613, CLUBS: _modDef14615, CREATORS: _modDef14616, LOCAL_COMMUNITY: _modDef14611, SCHOOL_CLUB: _modDef14615 };
const result = size.fileFinishedImporting("modules/create_guild/native/CreateGuildIcons.tsx");

export const GUILD_TEMPLATE_ICONS = obj;
export const GUILD_TEMPLATE_ICON_COMPONENTS = { CREATE: PencilIllocon.PencilIllocon, GAMING: ControllerIllocon.ControllerIllocon, FRIENDS: HeartIllocon.HeartIllocon, STUDY: AppleIllocon.AppleIllocon, CLUBS: BookIllocon.BookIllocon, CREATORS: PaintIllocon.PaintIllocon, LOCAL_COMMUNITY: LeafIllocon.LeafIllocon, SCHOOL_CLUB: BookIllocon.BookIllocon };