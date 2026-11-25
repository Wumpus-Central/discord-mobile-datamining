// === Module 13654: CreateGuildIcons ===

// Module 13654 (CreateGuildIcons)
import _modDef13221 from "module_13221" /* 13221 */;
import _modDef13222 from "module_13222" /* 13222 */;
import _modDef13223 from "module_13223" /* 13223 */;
import _modDef13224 from "module_13224" /* 13224 */;
import _modDef13225 from "module_13225" /* 13225 */;
import _modDef13226 from "module_13226" /* 13226 */;
import _modDef13227 from "module_13227" /* 13227 */;
import PencilIllocon from "PencilIllocon" /* 13655 */;
import ControllerIllocon from "ControllerIllocon" /* 13658 */;
import HeartIllocon from "HeartIllocon" /* 13662 */;
import AppleIllocon from "AppleIllocon" /* 13666 */;
import BookIllocon from "BookIllocon" /* 13670 */;
import PaintIllocon from "PaintIllocon" /* 13674 */;
import LeafIllocon from "LeafIllocon" /* 13678 */;
import size from "module_2" /* 2 */;

const obj = { CREATE: _modDef13221, GAMING: _modDef13225, FRIENDS: _modDef13223, STUDY: _modDef13224, CLUBS: _modDef13226, CREATORS: _modDef13227, LOCAL_COMMUNITY: _modDef13222, SCHOOL_CLUB: _modDef13226 };
const result = size.fileFinishedImporting("modules/create_guild/native/CreateGuildIcons.tsx");

export const GUILD_TEMPLATE_ICONS = obj;
export const GUILD_TEMPLATE_ICON_COMPONENTS = { CREATE: PencilIllocon.PencilIllocon, GAMING: ControllerIllocon.ControllerIllocon, FRIENDS: HeartIllocon.HeartIllocon, STUDY: AppleIllocon.AppleIllocon, CLUBS: BookIllocon.BookIllocon, CREATORS: PaintIllocon.PaintIllocon, LOCAL_COMMUNITY: LeafIllocon.LeafIllocon, SCHOOL_CLUB: BookIllocon.BookIllocon };