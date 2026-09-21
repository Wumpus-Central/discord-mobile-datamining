// === Module 12964: CreateGuildIcons ===

// Module 12964 (CreateGuildIcons)
import native from "native" /* 5909 */;
import _modDef12580 from "module_12580" /* 12580 */;
import _modDef12581 from "module_12581" /* 12581 */;
import _modDef12582 from "module_12582" /* 12582 */;
import _modDef12583 from "module_12583" /* 12583 */;
import _modDef12584 from "module_12584" /* 12584 */;
import _modDef12585 from "module_12585" /* 12585 */;
import _modDef12586 from "module_12586" /* 12586 */;
import size from "module_2" /* 2 */;

const obj = { CREATE: _modDef12580, GAMING: _modDef12584, FRIENDS: _modDef12582, STUDY: _modDef12583, CLUBS: _modDef12585, CREATORS: _modDef12586, LOCAL_COMMUNITY: _modDef12581, SCHOOL_CLUB: _modDef12585 };
const result = size.fileFinishedImporting("modules/create_guild/native/CreateGuildIcons.tsx");

export const GUILD_TEMPLATE_ICONS = obj;
export const GUILD_TEMPLATE_ICON_COMPONENTS = { CREATE: native.PencilIllocon, GAMING: native.ControllerIllocon, FRIENDS: native.HeartIllocon, STUDY: native.AppleIllocon, CLUBS: native.BookIllocon, CREATORS: native.PaintIllocon, LOCAL_COMMUNITY: native.LeafIllocon, SCHOOL_CLUB: native.BookIllocon };