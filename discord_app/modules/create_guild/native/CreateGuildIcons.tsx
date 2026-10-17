// === Module 13377: CreateGuildIcons ===

// Module 13377 (CreateGuildIcons)
import _modDef12967 from "module_12967" /* 12967 */;
import _modDef12968 from "module_12968" /* 12968 */;
import _modDef12969 from "module_12969" /* 12969 */;
import _modDef12970 from "module_12970" /* 12970 */;
import _modDef12971 from "module_12971" /* 12971 */;
import _modDef12972 from "module_12972" /* 12972 */;
import _modDef12973 from "module_12973" /* 12973 */;
import PencilIllocon from "PencilIllocon" /* 13378 */;
import ControllerIllocon from "ControllerIllocon" /* 13381 */;
import HeartIllocon from "HeartIllocon" /* 13385 */;
import AppleIllocon from "AppleIllocon" /* 13389 */;
import BookIllocon from "BookIllocon" /* 13393 */;
import PaintIllocon from "PaintIllocon" /* 13397 */;
import LeafIllocon from "LeafIllocon" /* 13401 */;
import size from "module_2" /* 2 */;

const obj = { CREATE: _modDef12967, GAMING: _modDef12971, FRIENDS: _modDef12969, STUDY: _modDef12970, CLUBS: _modDef12972, CREATORS: _modDef12973, LOCAL_COMMUNITY: _modDef12968, SCHOOL_CLUB: _modDef12972 };
const result = size.fileFinishedImporting("modules/create_guild/native/CreateGuildIcons.tsx");

export const GUILD_TEMPLATE_ICONS = obj;
export const GUILD_TEMPLATE_ICON_COMPONENTS = { CREATE: PencilIllocon.PencilIllocon, GAMING: ControllerIllocon.ControllerIllocon, FRIENDS: HeartIllocon.HeartIllocon, STUDY: AppleIllocon.AppleIllocon, CLUBS: BookIllocon.BookIllocon, CREATORS: PaintIllocon.PaintIllocon, LOCAL_COMMUNITY: LeafIllocon.LeafIllocon, SCHOOL_CLUB: BookIllocon.BookIllocon };