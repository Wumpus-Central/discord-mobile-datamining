// === Module 12715: CreateGuildIcons ===

// Module 12715 (CreateGuildIcons)
import native from "native" /* 5692 */;
import _modDef12330 from "module_12330" /* 12330 */;
import _modDef12331 from "module_12331" /* 12331 */;
import _modDef12332 from "module_12332" /* 12332 */;
import _modDef12333 from "module_12333" /* 12333 */;
import _modDef12334 from "module_12334" /* 12334 */;
import _modDef12335 from "module_12335" /* 12335 */;
import _modDef12336 from "module_12336" /* 12336 */;
import size from "module_2" /* 2 */;

let obj = { CREATE: _modDef12330, GAMING: _modDef12334, FRIENDS: _modDef12332, STUDY: _modDef12333, CLUBS: _modDef12335, CREATORS: _modDef12336, LOCAL_COMMUNITY: _modDef12331, SCHOOL_CLUB: _modDef12335 };
obj = { CREATE: native.PencilIllocon, GAMING: native.ControllerIllocon, FRIENDS: native.HeartIllocon, STUDY: native.AppleIllocon, CLUBS: native.BookIllocon, CREATORS: native.PaintIllocon, LOCAL_COMMUNITY: native.LeafIllocon, SCHOOL_CLUB: native.BookIllocon };
const result = size.fileFinishedImporting("modules/create_guild/native/CreateGuildIcons.tsx");

export const GUILD_TEMPLATE_ICONS = obj;
export const GUILD_TEMPLATE_ICON_COMPONENTS = obj;