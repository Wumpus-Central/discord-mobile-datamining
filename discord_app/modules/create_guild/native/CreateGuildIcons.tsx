// === Module 14230: CreateGuildIcons ===

// Module 14230 (CreateGuildIcons)
import _modDef13824 from "module_13824" /* 13824 */;
import _modDef13825 from "module_13825" /* 13825 */;
import _modDef13826 from "module_13826" /* 13826 */;
import _modDef13827 from "module_13827" /* 13827 */;
import _modDef13828 from "module_13828" /* 13828 */;
import _modDef13829 from "module_13829" /* 13829 */;
import _modDef13830 from "module_13830" /* 13830 */;
import PencilIllocon from "PencilIllocon" /* 14231 */;
import ControllerIllocon from "ControllerIllocon" /* 14234 */;
import HeartIllocon from "HeartIllocon" /* 14238 */;
import AppleIllocon from "AppleIllocon" /* 14242 */;
import BookIllocon from "BookIllocon" /* 14246 */;
import PaintIllocon from "PaintIllocon" /* 14250 */;
import LeafIllocon from "LeafIllocon" /* 14254 */;
import size from "module_2" /* 2 */;

const obj = { CREATE: _modDef13824, GAMING: _modDef13828, FRIENDS: _modDef13826, STUDY: _modDef13827, CLUBS: _modDef13829, CREATORS: _modDef13830, LOCAL_COMMUNITY: _modDef13825, SCHOOL_CLUB: _modDef13829 };
const result = size.fileFinishedImporting("modules/create_guild/native/CreateGuildIcons.tsx");

export const GUILD_TEMPLATE_ICONS = obj;
export const GUILD_TEMPLATE_ICON_COMPONENTS = { CREATE: PencilIllocon.PencilIllocon, GAMING: ControllerIllocon.ControllerIllocon, FRIENDS: HeartIllocon.HeartIllocon, STUDY: AppleIllocon.AppleIllocon, CLUBS: BookIllocon.BookIllocon, CREATORS: PaintIllocon.PaintIllocon, LOCAL_COMMUNITY: LeafIllocon.LeafIllocon, SCHOOL_CLUB: BookIllocon.BookIllocon };