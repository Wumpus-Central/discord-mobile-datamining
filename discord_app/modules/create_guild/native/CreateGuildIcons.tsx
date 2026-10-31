// === Module 14268: CreateGuildIcons ===

// Module 14268 (CreateGuildIcons)
import _modDef13859 from "module_13859" /* 13859 */;
import _modDef13860 from "module_13860" /* 13860 */;
import _modDef13861 from "module_13861" /* 13861 */;
import _modDef13862 from "module_13862" /* 13862 */;
import _modDef13863 from "module_13863" /* 13863 */;
import _modDef13864 from "module_13864" /* 13864 */;
import _modDef13865 from "module_13865" /* 13865 */;
import PencilIllocon from "PencilIllocon" /* 14269 */;
import ControllerIllocon from "ControllerIllocon" /* 14272 */;
import HeartIllocon from "HeartIllocon" /* 14276 */;
import AppleIllocon from "AppleIllocon" /* 14280 */;
import BookIllocon from "BookIllocon" /* 14284 */;
import PaintIllocon from "PaintIllocon" /* 14288 */;
import LeafIllocon from "LeafIllocon" /* 14292 */;
import size from "module_2" /* 2 */;

const obj = { CREATE: _modDef13859, GAMING: _modDef13863, FRIENDS: _modDef13861, STUDY: _modDef13862, CLUBS: _modDef13864, CREATORS: _modDef13865, LOCAL_COMMUNITY: _modDef13860, SCHOOL_CLUB: _modDef13864 };
const result = size.fileFinishedImporting("modules/create_guild/native/CreateGuildIcons.tsx");

export const GUILD_TEMPLATE_ICONS = obj;
export const GUILD_TEMPLATE_ICON_COMPONENTS = { CREATE: PencilIllocon.PencilIllocon, GAMING: ControllerIllocon.ControllerIllocon, FRIENDS: HeartIllocon.HeartIllocon, STUDY: AppleIllocon.AppleIllocon, CLUBS: BookIllocon.BookIllocon, CREATORS: PaintIllocon.PaintIllocon, LOCAL_COMMUNITY: LeafIllocon.LeafIllocon, SCHOOL_CLUB: BookIllocon.BookIllocon };