// === Module 12968: CreateGuildIcons ===

// Module 12968 (CreateGuildIcons)
import native from "native" /* 5911 */;
import _modDef12584 from "module_12584" /* 12584 */;
import _modDef12585 from "module_12585" /* 12585 */;
import _modDef12586 from "module_12586" /* 12586 */;
import _modDef12587 from "module_12587" /* 12587 */;
import _modDef12588 from "module_12588" /* 12588 */;
import _modDef12589 from "module_12589" /* 12589 */;
import _modDef12590 from "module_12590" /* 12590 */;
import size from "module_2" /* 2 */;

const obj = { CREATE: _modDef12584, GAMING: _modDef12588, FRIENDS: _modDef12586, STUDY: _modDef12587, CLUBS: _modDef12589, CREATORS: _modDef12590, LOCAL_COMMUNITY: _modDef12585, SCHOOL_CLUB: _modDef12589 };
const result = size.fileFinishedImporting("modules/create_guild/native/CreateGuildIcons.tsx");

export const GUILD_TEMPLATE_ICONS = obj;
export const GUILD_TEMPLATE_ICON_COMPONENTS = { CREATE: native.PencilIllocon, GAMING: native.ControllerIllocon, FRIENDS: native.HeartIllocon, STUDY: native.AppleIllocon, CLUBS: native.BookIllocon, CREATORS: native.PaintIllocon, LOCAL_COMMUNITY: native.LeafIllocon, SCHOOL_CLUB: native.BookIllocon };