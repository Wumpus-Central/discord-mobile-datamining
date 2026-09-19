// === Module 12962: CreateGuildIcons ===

// Module 12962 (CreateGuildIcons)
import native from "native" /* 5904 */;
import _modDef12578 from "module_12578" /* 12578 */;
import _modDef12579 from "module_12579" /* 12579 */;
import _modDef12580 from "module_12580" /* 12580 */;
import _modDef12581 from "module_12581" /* 12581 */;
import _modDef12582 from "module_12582" /* 12582 */;
import _modDef12583 from "module_12583" /* 12583 */;
import _modDef12584 from "module_12584" /* 12584 */;
import size from "module_2" /* 2 */;

const obj = { CREATE: _modDef12578, GAMING: _modDef12582, FRIENDS: _modDef12580, STUDY: _modDef12581, CLUBS: _modDef12583, CREATORS: _modDef12584, LOCAL_COMMUNITY: _modDef12579, SCHOOL_CLUB: _modDef12583 };
const result = size.fileFinishedImporting("modules/create_guild/native/CreateGuildIcons.tsx");

export const GUILD_TEMPLATE_ICONS = obj;
export const GUILD_TEMPLATE_ICON_COMPONENTS = { CREATE: native.PencilIllocon, GAMING: native.ControllerIllocon, FRIENDS: native.HeartIllocon, STUDY: native.AppleIllocon, CLUBS: native.BookIllocon, CREATORS: native.PaintIllocon, LOCAL_COMMUNITY: native.LeafIllocon, SCHOOL_CLUB: native.BookIllocon };