// === Module 14919: CreateGuildIcons ===

// Module 14919 (CreateGuildIcons)
import _modDef14614 from "module_14614" /* 14614 */;
import _modDef14615 from "module_14615" /* 14615 */;
import _modDef14616 from "module_14616" /* 14616 */;
import _modDef14617 from "module_14617" /* 14617 */;
import _modDef14618 from "module_14618" /* 14618 */;
import _modDef14619 from "module_14619" /* 14619 */;
import _modDef14620 from "module_14620" /* 14620 */;
import PencilIllocon from "PencilIllocon" /* 14920 */;
import ControllerIllocon from "ControllerIllocon" /* 14923 */;
import HeartIllocon from "HeartIllocon" /* 14927 */;
import AppleIllocon from "AppleIllocon" /* 14931 */;
import BookIllocon from "BookIllocon" /* 14935 */;
import PaintIllocon from "PaintIllocon" /* 14939 */;
import LeafIllocon from "LeafIllocon" /* 14943 */;
import size from "module_2" /* 2 */;

const obj = { CREATE: _modDef14614, GAMING: _modDef14618, FRIENDS: _modDef14616, STUDY: _modDef14617, CLUBS: _modDef14619, CREATORS: _modDef14620, LOCAL_COMMUNITY: _modDef14615, SCHOOL_CLUB: _modDef14619 };
const result = size.fileFinishedImporting("modules/create_guild/native/CreateGuildIcons.tsx");

export const GUILD_TEMPLATE_ICONS = obj;
export const GUILD_TEMPLATE_ICON_COMPONENTS = { CREATE: PencilIllocon.PencilIllocon, GAMING: ControllerIllocon.ControllerIllocon, FRIENDS: HeartIllocon.HeartIllocon, STUDY: AppleIllocon.AppleIllocon, CLUBS: BookIllocon.BookIllocon, CREATORS: PaintIllocon.PaintIllocon, LOCAL_COMMUNITY: LeafIllocon.LeafIllocon, SCHOOL_CLUB: BookIllocon.BookIllocon };