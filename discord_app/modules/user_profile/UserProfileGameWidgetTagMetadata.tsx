// === Module 8913: UserProfileGameWidgetTagMetadata ===

// Module 8913 (UserProfileGameWidgetTagMetadata)
import util from "util" /* 1114 */;
import WidgetGameTag from "WidgetGameTag" /* 7632 */;
import size from "module_2" /* 2 */;

let obj = { RIBBON: "ribbon", THUMBS_UP: "thumbsUp", THUMBS_DOWN: "thumbsDown", FRIENDS: "friends" };
obj = {
  getText() {
    const intl = util.intl;
    return intl.string(util.t.jbIRBE);
  },
  iconRole: obj.RIBBON
};
obj = {
  getText() {
    const intl = util.intl;
    return intl.string(util.t.xcFFv6);
  },
  iconRole: obj.RIBBON
};
let closure_2 = {
  [WidgetGameTag.WidgetGameTag.BETTER_THAN_YOU]: obj,
  [WidgetGameTag.WidgetGameTag.CASUAL]: obj,
  [WidgetGameTag.WidgetGameTag.INTERMEDIATE]: {
    getText() {
      const intl = util.intl;
      return intl.string(util.t["A/mIs/"]);
    },
    iconRole: obj.RIBBON
  },
  [WidgetGameTag.WidgetGameTag.EXPERT]: {
    getText() {
      const intl = util.intl;
      return intl.string(util.t.RIOFc2);
    },
    iconRole: obj.RIBBON
  },
  [WidgetGameTag.WidgetGameTag.OBSESSED]: {
    getText() {
      const intl = util.intl;
      return intl.string(util.t.isPJDu);
    },
    iconRole: obj.THUMBS_UP
  },
  [WidgetGameTag.WidgetGameTag.LOVE_IT]: {
    getText() {
      const intl = util.intl;
      return intl.string(util.t["1rN7BF"]);
    },
    iconRole: obj.THUMBS_UP
  },
  [WidgetGameTag.WidgetGameTag.KIND_OF_LOVE_IT]: {
    getText() {
      const intl = util.intl;
      return intl.string(util.t.bCBpVg);
    },
    iconRole: obj.THUMBS_UP
  },
  [WidgetGameTag.WidgetGameTag.KIND_OF_HATE_IT]: {
    getText() {
      const intl = util.intl;
      return intl.string(util.t["/WcmcP"]);
    },
    iconRole: obj.THUMBS_DOWN
  },
  [WidgetGameTag.WidgetGameTag.RAGE_QUITTING]: {
    getText() {
      const intl = util.intl;
      return intl.string(util.t["NXZ/MZ"]);
    },
    iconRole: obj.THUMBS_DOWN
  },
  [WidgetGameTag.WidgetGameTag.OPEN_TO_PLAY]: {
    getText() {
      const intl = util.intl;
      return intl.string(util.t.q30PoH);
    },
    iconRole: obj.FRIENDS
  },
  [WidgetGameTag.WidgetGameTag.LOOKING_FOR_GROUP]: {
    getText() {
      const intl = util.intl;
      return intl.string(util.t.DWWAAQ);
    },
    iconRole: obj.FRIENDS
  },
  [WidgetGameTag.WidgetGameTag.LOOKING_FOR_TIPS]: {
    getText() {
      const intl = util.intl;
      return intl.string(util.t.KQDVvH);
    },
    iconRole: obj.FRIENDS
  },
  [WidgetGameTag.WidgetGameTag.OPEN_TO_TEACH]: {
    getText() {
      const intl = util.intl;
      return intl.string(util.t["5HhQo+"]);
    },
    iconRole: obj.FRIENDS
  },
  [WidgetGameTag.WidgetGameTag.LOOKING_TO_DISCUSS]: {
    getText() {
      const intl = util.intl;
      return intl.string(util.t.GipOCq);
    },
    iconRole: obj.FRIENDS
  }
};
const result = size.fileFinishedImporting("modules/user_profile/UserProfileGameWidgetTagMetadata.tsx");

export const WidgetGameTagIconRole = obj;
export const buildWidgetGameTagMetadata = function buildWidgetGameTagMetadata(arg0) {
  let obj = {};
  const keys = Object.keys(closure_2);
  const iter = keys[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp5 = closure_2[nextResult];
    let tmp6 = tmp5;
    if (null != tmp5) {
      obj = { getText: null, icon: null };
      obj.getText = tmp6.getText;
      obj.icon = arg0[tmp6.iconRole];
      obj[tmp3] = obj;
    }
    continue;
  }
  return obj;
};