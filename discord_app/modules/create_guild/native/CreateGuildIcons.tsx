// === Module 13050: CreateGuildIcons ===

// Module 13050 (CreateGuildIcons)
import native from "native" /* 5995 */;
import _modDef12660 from "module_12660" /* 12660 */;
import _modDef12661 from "module_12661" /* 12661 */;
import _modDef12662 from "module_12662" /* 12662 */;
import _modDef12663 from "module_12663" /* 12663 */;
import _modDef12664 from "module_12664" /* 12664 */;
import _modDef12665 from "module_12665" /* 12665 */;
import _modDef12666 from "module_12666" /* 12666 */;
import size from "module_2" /* 2 */;

const obj = { CREATE: _modDef12660, GAMING: _modDef12664, FRIENDS: _modDef12662, STUDY: _modDef12663, CLUBS: _modDef12665, CREATORS: _modDef12666, LOCAL_COMMUNITY: _modDef12661, SCHOOL_CLUB: _modDef12665 };
const result = size.fileFinishedImporting("modules/create_guild/native/CreateGuildIcons.tsx");

export const GUILD_TEMPLATE_ICONS = obj;
export const GUILD_TEMPLATE_ICON_COMPONENTS = { CREATE: native.PencilIllocon, GAMING: native.ControllerIllocon, FRIENDS: native.HeartIllocon, STUDY: native.AppleIllocon, CLUBS: native.BookIllocon, CREATORS: native.PaintIllocon, LOCAL_COMMUNITY: native.LeafIllocon, SCHOOL_CLUB: native.BookIllocon };