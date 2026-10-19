// === Module 13382: CreateGuildIcons ===

// Module 13382 (CreateGuildIcons)
import _modDef12975 from "module_12975" /* 12975 */;
import _modDef12976 from "module_12976" /* 12976 */;
import _modDef12977 from "module_12977" /* 12977 */;
import _modDef12978 from "module_12978" /* 12978 */;
import _modDef12979 from "module_12979" /* 12979 */;
import _modDef12980 from "module_12980" /* 12980 */;
import _modDef12981 from "module_12981" /* 12981 */;
import PencilIllocon from "PencilIllocon" /* 13383 */;
import ControllerIllocon from "ControllerIllocon" /* 13386 */;
import HeartIllocon from "HeartIllocon" /* 13390 */;
import AppleIllocon from "AppleIllocon" /* 13394 */;
import BookIllocon from "BookIllocon" /* 13398 */;
import PaintIllocon from "PaintIllocon" /* 13402 */;
import LeafIllocon from "LeafIllocon" /* 13406 */;
import size from "module_2" /* 2 */;

const obj = { CREATE: _modDef12975, GAMING: _modDef12979, FRIENDS: _modDef12977, STUDY: _modDef12978, CLUBS: _modDef12980, CREATORS: _modDef12981, LOCAL_COMMUNITY: _modDef12976, SCHOOL_CLUB: _modDef12980 };
const result = size.fileFinishedImporting("modules/create_guild/native/CreateGuildIcons.tsx");

export const GUILD_TEMPLATE_ICONS = obj;
export const GUILD_TEMPLATE_ICON_COMPONENTS = { CREATE: PencilIllocon.PencilIllocon, GAMING: ControllerIllocon.ControllerIllocon, FRIENDS: HeartIllocon.HeartIllocon, STUDY: AppleIllocon.AppleIllocon, CLUBS: BookIllocon.BookIllocon, CREATORS: PaintIllocon.PaintIllocon, LOCAL_COMMUNITY: LeafIllocon.LeafIllocon, SCHOOL_CLUB: BookIllocon.BookIllocon };