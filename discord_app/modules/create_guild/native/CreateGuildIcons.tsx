// === Module 12781: CreateGuildIcons ===

// Module 12781 (CreateGuildIcons)
import native from "native" /* 5742 */;
import _modDef12396 from "module_12396" /* 12396 */;
import _modDef12397 from "module_12397" /* 12397 */;
import _modDef12398 from "module_12398" /* 12398 */;
import _modDef12399 from "module_12399" /* 12399 */;
import _modDef12400 from "module_12400" /* 12400 */;
import _modDef12401 from "module_12401" /* 12401 */;
import _modDef12402 from "module_12402" /* 12402 */;
import size from "module_2" /* 2 */;

let obj = { CREATE: _modDef12396, GAMING: _modDef12400, FRIENDS: _modDef12398, STUDY: _modDef12399, CLUBS: _modDef12401, CREATORS: _modDef12402, LOCAL_COMMUNITY: _modDef12397, SCHOOL_CLUB: _modDef12401 };
obj = { CREATE: native.PencilIllocon, GAMING: native.ControllerIllocon, FRIENDS: native.HeartIllocon, STUDY: native.AppleIllocon, CLUBS: native.BookIllocon, CREATORS: native.PaintIllocon, LOCAL_COMMUNITY: native.LeafIllocon, SCHOOL_CLUB: native.BookIllocon };
const result = size.fileFinishedImporting("modules/create_guild/native/CreateGuildIcons.tsx");

export const GUILD_TEMPLATE_ICONS = obj;
export const GUILD_TEMPLATE_ICON_COMPONENTS = obj;