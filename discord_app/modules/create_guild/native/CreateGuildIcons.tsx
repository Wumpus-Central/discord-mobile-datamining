// === Module 12840: CreateGuildIcons ===

// Module 12840 (CreateGuildIcons)
import native from "native" /* 5773 */;
import _modDef12455 from "module_12455" /* 12455 */;
import _modDef12456 from "module_12456" /* 12456 */;
import _modDef12457 from "module_12457" /* 12457 */;
import _modDef12458 from "module_12458" /* 12458 */;
import _modDef12459 from "module_12459" /* 12459 */;
import _modDef12460 from "module_12460" /* 12460 */;
import _modDef12461 from "module_12461" /* 12461 */;
import size from "module_2" /* 2 */;

let obj = { CREATE: _modDef12455, GAMING: _modDef12459, FRIENDS: _modDef12457, STUDY: _modDef12458, CLUBS: _modDef12460, CREATORS: _modDef12461, LOCAL_COMMUNITY: _modDef12456, SCHOOL_CLUB: _modDef12460 };
obj = { CREATE: native.PencilIllocon, GAMING: native.ControllerIllocon, FRIENDS: native.HeartIllocon, STUDY: native.AppleIllocon, CLUBS: native.BookIllocon, CREATORS: native.PaintIllocon, LOCAL_COMMUNITY: native.LeafIllocon, SCHOOL_CLUB: native.BookIllocon };
const result = size.fileFinishedImporting("modules/create_guild/native/CreateGuildIcons.tsx");

export const GUILD_TEMPLATE_ICONS = obj;
export const GUILD_TEMPLATE_ICON_COMPONENTS = obj;