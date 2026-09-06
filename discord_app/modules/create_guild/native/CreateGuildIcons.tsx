// === Module 12711: CreateGuildIcons ===

// Module 12711 (CreateGuildIcons)
import native from "native" /* 5692 */;
import _modDef12326 from "module_12326" /* 12326 */;
import _modDef12327 from "module_12327" /* 12327 */;
import _modDef12328 from "module_12328" /* 12328 */;
import _modDef12329 from "module_12329" /* 12329 */;
import _modDef12330 from "module_12330" /* 12330 */;
import _modDef12331 from "module_12331" /* 12331 */;
import _modDef12332 from "module_12332" /* 12332 */;
import size from "module_2" /* 2 */;

let obj = { CREATE: _modDef12326, GAMING: _modDef12330, FRIENDS: _modDef12328, STUDY: _modDef12329, CLUBS: _modDef12331, CREATORS: _modDef12332, LOCAL_COMMUNITY: _modDef12327, SCHOOL_CLUB: _modDef12331 };
obj = { CREATE: native.PencilIllocon, GAMING: native.ControllerIllocon, FRIENDS: native.HeartIllocon, STUDY: native.AppleIllocon, CLUBS: native.BookIllocon, CREATORS: native.PaintIllocon, LOCAL_COMMUNITY: native.LeafIllocon, SCHOOL_CLUB: native.BookIllocon };
const result = size.fileFinishedImporting("modules/create_guild/native/CreateGuildIcons.tsx");

export const GUILD_TEMPLATE_ICONS = obj;
export const GUILD_TEMPLATE_ICON_COMPONENTS = obj;