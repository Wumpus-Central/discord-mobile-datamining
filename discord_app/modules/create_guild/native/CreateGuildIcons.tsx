// === Module 12862: CreateGuildIcons ===

// Module 12862 (CreateGuildIcons)
import native from "native" /* 5780 */;
import _modDef12478 from "module_12478" /* 12478 */;
import _modDef12479 from "module_12479" /* 12479 */;
import _modDef12480 from "module_12480" /* 12480 */;
import _modDef12481 from "module_12481" /* 12481 */;
import _modDef12482 from "module_12482" /* 12482 */;
import _modDef12483 from "module_12483" /* 12483 */;
import _modDef12484 from "module_12484" /* 12484 */;
import size from "module_2" /* 2 */;

const obj = { CREATE: _modDef12478, GAMING: _modDef12482, FRIENDS: _modDef12480, STUDY: _modDef12481, CLUBS: _modDef12483, CREATORS: _modDef12484, LOCAL_COMMUNITY: _modDef12479, SCHOOL_CLUB: _modDef12483 };
const result = size.fileFinishedImporting("modules/create_guild/native/CreateGuildIcons.tsx");

export const GUILD_TEMPLATE_ICONS = obj;
export const GUILD_TEMPLATE_ICON_COMPONENTS = { CREATE: native.PencilIllocon, GAMING: native.ControllerIllocon, FRIENDS: native.HeartIllocon, STUDY: native.AppleIllocon, CLUBS: native.BookIllocon, CREATORS: native.PaintIllocon, LOCAL_COMMUNITY: native.LeafIllocon, SCHOOL_CLUB: native.BookIllocon };