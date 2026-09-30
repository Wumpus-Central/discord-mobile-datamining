// === Module 12409: CreateGuildIcons ===

// Module 12409 (CreateGuildIcons)
import _modDef12012 from "module_12012" /* 12012 */;
import _modDef12013 from "module_12013" /* 12013 */;
import _modDef12014 from "module_12014" /* 12014 */;
import _modDef12015 from "module_12015" /* 12015 */;
import _modDef12016 from "module_12016" /* 12016 */;
import _modDef12017 from "module_12017" /* 12017 */;
import _modDef12018 from "module_12018" /* 12018 */;
import PencilIllocon from "PencilIllocon" /* 12410 */;
import ControllerIllocon from "ControllerIllocon" /* 12411 */;
import HeartIllocon from "HeartIllocon" /* 12413 */;
import AppleIllocon from "AppleIllocon" /* 12415 */;
import BookIllocon from "BookIllocon" /* 12417 */;
import PaintIllocon from "PaintIllocon" /* 12419 */;
import LeafIllocon from "LeafIllocon" /* 12421 */;
import size from "module_2" /* 2 */;

const obj = { CREATE: _modDef12012, GAMING: _modDef12016, FRIENDS: _modDef12014, STUDY: _modDef12015, CLUBS: _modDef12017, CREATORS: _modDef12018, LOCAL_COMMUNITY: _modDef12013, SCHOOL_CLUB: _modDef12017 };
const result = size.fileFinishedImporting("modules/create_guild/native/CreateGuildIcons.tsx");

export const GUILD_TEMPLATE_ICONS = obj;
export const GUILD_TEMPLATE_ICON_COMPONENTS = { CREATE: PencilIllocon.PencilIllocon, GAMING: ControllerIllocon.ControllerIllocon, FRIENDS: HeartIllocon.HeartIllocon, STUDY: AppleIllocon.AppleIllocon, CLUBS: BookIllocon.BookIllocon, CREATORS: PaintIllocon.PaintIllocon, LOCAL_COMMUNITY: LeafIllocon.LeafIllocon, SCHOOL_CLUB: BookIllocon.BookIllocon };