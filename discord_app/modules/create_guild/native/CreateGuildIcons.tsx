// === Module 13059: CreateGuildIcons ===

// Module 13059 (CreateGuildIcons)
import native from "native" /* 5997 */;
import _modDef12669 from "module_12669" /* 12669 */;
import _modDef12670 from "module_12670" /* 12670 */;
import _modDef12671 from "module_12671" /* 12671 */;
import _modDef12672 from "module_12672" /* 12672 */;
import _modDef12673 from "module_12673" /* 12673 */;
import _modDef12674 from "module_12674" /* 12674 */;
import _modDef12675 from "module_12675" /* 12675 */;
import size from "module_2" /* 2 */;

const obj = { CREATE: _modDef12669, GAMING: _modDef12673, FRIENDS: _modDef12671, STUDY: _modDef12672, CLUBS: _modDef12674, CREATORS: _modDef12675, LOCAL_COMMUNITY: _modDef12670, SCHOOL_CLUB: _modDef12674 };
const result = size.fileFinishedImporting("modules/create_guild/native/CreateGuildIcons.tsx");

export const GUILD_TEMPLATE_ICONS = obj;
export const GUILD_TEMPLATE_ICON_COMPONENTS = { CREATE: native.PencilIllocon, GAMING: native.ControllerIllocon, FRIENDS: native.HeartIllocon, STUDY: native.AppleIllocon, CLUBS: native.BookIllocon, CREATORS: native.PaintIllocon, LOCAL_COMMUNITY: native.LeafIllocon, SCHOOL_CLUB: native.BookIllocon };