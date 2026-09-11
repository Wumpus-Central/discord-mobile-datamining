// === Module 12804: CreateGuildIcons ===

// Module 12804 (CreateGuildIcons)
import native from "native" /* 5743 */;
import _modDef12419 from "module_12419" /* 12419 */;
import _modDef12420 from "module_12420" /* 12420 */;
import _modDef12421 from "module_12421" /* 12421 */;
import _modDef12422 from "module_12422" /* 12422 */;
import _modDef12423 from "module_12423" /* 12423 */;
import _modDef12424 from "module_12424" /* 12424 */;
import _modDef12425 from "module_12425" /* 12425 */;
import size from "module_2" /* 2 */;

let obj = { CREATE: _modDef12419, GAMING: _modDef12423, FRIENDS: _modDef12421, STUDY: _modDef12422, CLUBS: _modDef12424, CREATORS: _modDef12425, LOCAL_COMMUNITY: _modDef12420, SCHOOL_CLUB: _modDef12424 };
obj = { CREATE: native.PencilIllocon, GAMING: native.ControllerIllocon, FRIENDS: native.HeartIllocon, STUDY: native.AppleIllocon, CLUBS: native.BookIllocon, CREATORS: native.PaintIllocon, LOCAL_COMMUNITY: native.LeafIllocon, SCHOOL_CLUB: native.BookIllocon };
const result = size.fileFinishedImporting("modules/create_guild/native/CreateGuildIcons.tsx");

export const GUILD_TEMPLATE_ICONS = obj;
export const GUILD_TEMPLATE_ICON_COMPONENTS = obj;