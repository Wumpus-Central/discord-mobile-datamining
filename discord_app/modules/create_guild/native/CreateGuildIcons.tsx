// === Module 13631: CreateGuildIcons ===

// Module 13631 (CreateGuildIcons)
import _modDef13226 from "module_13226" /* 13226 */;
import _modDef13227 from "module_13227" /* 13227 */;
import _modDef13228 from "module_13228" /* 13228 */;
import _modDef13229 from "module_13229" /* 13229 */;
import _modDef13230 from "module_13230" /* 13230 */;
import _modDef13231 from "module_13231" /* 13231 */;
import _modDef13232 from "module_13232" /* 13232 */;
import PencilIllocon from "PencilIllocon" /* 13632 */;
import ControllerIllocon from "ControllerIllocon" /* 13635 */;
import HeartIllocon from "HeartIllocon" /* 13639 */;
import AppleIllocon from "AppleIllocon" /* 13643 */;
import BookIllocon from "BookIllocon" /* 13647 */;
import PaintIllocon from "PaintIllocon" /* 13651 */;
import LeafIllocon from "LeafIllocon" /* 13655 */;
import size from "module_2" /* 2 */;

const obj = { CREATE: _modDef13226, GAMING: _modDef13230, FRIENDS: _modDef13228, STUDY: _modDef13229, CLUBS: _modDef13231, CREATORS: _modDef13232, LOCAL_COMMUNITY: _modDef13227, SCHOOL_CLUB: _modDef13231 };
const result = size.fileFinishedImporting("modules/create_guild/native/CreateGuildIcons.tsx");

export const GUILD_TEMPLATE_ICONS = obj;
export const GUILD_TEMPLATE_ICON_COMPONENTS = { CREATE: PencilIllocon.PencilIllocon, GAMING: ControllerIllocon.ControllerIllocon, FRIENDS: HeartIllocon.HeartIllocon, STUDY: AppleIllocon.AppleIllocon, CLUBS: BookIllocon.BookIllocon, CREATORS: PaintIllocon.PaintIllocon, LOCAL_COMMUNITY: LeafIllocon.LeafIllocon, SCHOOL_CLUB: BookIllocon.BookIllocon };