// === Module 12854: CreateGuildIcons ===

// Module 12854 (CreateGuildIcons)
import native from "native" /* 5778 */;
import _modDef12469 from "module_12469" /* 12469 */;
import _modDef12470 from "module_12470" /* 12470 */;
import _modDef12471 from "module_12471" /* 12471 */;
import _modDef12472 from "module_12472" /* 12472 */;
import _modDef12473 from "module_12473" /* 12473 */;
import _modDef12474 from "module_12474" /* 12474 */;
import _modDef12475 from "module_12475" /* 12475 */;
import size from "module_2" /* 2 */;

const obj = { CREATE: _modDef12469, GAMING: _modDef12473, FRIENDS: _modDef12471, STUDY: _modDef12472, CLUBS: _modDef12474, CREATORS: _modDef12475, LOCAL_COMMUNITY: _modDef12470, SCHOOL_CLUB: _modDef12474 };
const result = size.fileFinishedImporting("modules/create_guild/native/CreateGuildIcons.tsx");

export const GUILD_TEMPLATE_ICONS = obj;
export const GUILD_TEMPLATE_ICON_COMPONENTS = { CREATE: native.PencilIllocon, GAMING: native.ControllerIllocon, FRIENDS: native.HeartIllocon, STUDY: native.AppleIllocon, CLUBS: native.BookIllocon, CREATORS: native.PaintIllocon, LOCAL_COMMUNITY: native.LeafIllocon, SCHOOL_CLUB: native.BookIllocon };