// === Module 13311: CreateGuildIcons ===

// Module 13311 (CreateGuildIcons)
import _modDef12902 from "module_12902" /* 12902 */;
import _modDef12903 from "module_12903" /* 12903 */;
import _modDef12904 from "module_12904" /* 12904 */;
import _modDef12905 from "module_12905" /* 12905 */;
import _modDef12906 from "module_12906" /* 12906 */;
import _modDef12907 from "module_12907" /* 12907 */;
import _modDef12908 from "module_12908" /* 12908 */;
import PencilIllocon from "PencilIllocon" /* 13312 */;
import ControllerIllocon from "ControllerIllocon" /* 13315 */;
import HeartIllocon from "HeartIllocon" /* 13319 */;
import AppleIllocon from "AppleIllocon" /* 13323 */;
import BookIllocon from "BookIllocon" /* 13327 */;
import PaintIllocon from "PaintIllocon" /* 13331 */;
import LeafIllocon from "LeafIllocon" /* 13335 */;
import size from "module_2" /* 2 */;

const obj = { CREATE: _modDef12902, GAMING: _modDef12906, FRIENDS: _modDef12904, STUDY: _modDef12905, CLUBS: _modDef12907, CREATORS: _modDef12908, LOCAL_COMMUNITY: _modDef12903, SCHOOL_CLUB: _modDef12907 };
const result = size.fileFinishedImporting("modules/create_guild/native/CreateGuildIcons.tsx");

export const GUILD_TEMPLATE_ICONS = obj;
export const GUILD_TEMPLATE_ICON_COMPONENTS = { CREATE: PencilIllocon.PencilIllocon, GAMING: ControllerIllocon.ControllerIllocon, FRIENDS: HeartIllocon.HeartIllocon, STUDY: AppleIllocon.AppleIllocon, CLUBS: BookIllocon.BookIllocon, CREATORS: PaintIllocon.PaintIllocon, LOCAL_COMMUNITY: LeafIllocon.LeafIllocon, SCHOOL_CLUB: BookIllocon.BookIllocon };