// === Module 8913: WidgetGameTagIconRole ===

// Module 8913 (WidgetGameTagIconRole)
import set from "set" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1114 */;
import WidgetGameTag from "WidgetGameTag" /* 7632 */;

let obj = { RIBBON: "ribbon", THUMBS_UP: "thumbsUp", THUMBS_DOWN: "thumbsDown", FRIENDS: "friends" };
obj = {
  getText() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.jbIRBE);
  },
  iconRole: obj.RIBBON
};
obj = {
  getText() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.xcFFv6);
  },
  iconRole: obj.RIBBON
};
let closure_2 = {
  [WidgetGameTag.WidgetGameTag.BETTER_THAN_YOU]: obj,
  [WidgetGameTag.WidgetGameTag.CASUAL]: obj,
  [WidgetGameTag.WidgetGameTag.INTERMEDIATE]: {
    getText() {
      const intl = getSystemLocale.intl;
      return intl.string(getSystemLocale.t["A/mIs/"]);
    },
    iconRole: obj.RIBBON
  },
  [WidgetGameTag.WidgetGameTag.EXPERT]: {
    getText() {
      const intl = getSystemLocale.intl;
      return intl.string(getSystemLocale.t.RIOFc2);
    },
    iconRole: obj.RIBBON
  },
  [WidgetGameTag.WidgetGameTag.OBSESSED]: {
    getText() {
      const intl = getSystemLocale.intl;
      return intl.string(getSystemLocale.t.isPJDu);
    },
    iconRole: obj.THUMBS_UP
  },
  [WidgetGameTag.WidgetGameTag.LOVE_IT]: {
    getText() {
      const intl = getSystemLocale.intl;
      return intl.string(getSystemLocale.t["1rN7BF"]);
    },
    iconRole: obj.THUMBS_UP
  },
  [WidgetGameTag.WidgetGameTag.KIND_OF_LOVE_IT]: {
    getText() {
      const intl = getSystemLocale.intl;
      return intl.string(getSystemLocale.t.bCBpVg);
    },
    iconRole: obj.THUMBS_UP
  },
  [WidgetGameTag.WidgetGameTag.KIND_OF_HATE_IT]: {
    getText() {
      const intl = getSystemLocale.intl;
      return intl.string(getSystemLocale.t["/WcmcP"]);
    },
    iconRole: obj.THUMBS_DOWN
  },
  [WidgetGameTag.WidgetGameTag.RAGE_QUITTING]: {
    getText() {
      const intl = getSystemLocale.intl;
      return intl.string(getSystemLocale.t["NXZ/MZ"]);
    },
    iconRole: obj.THUMBS_DOWN
  },
  [WidgetGameTag.WidgetGameTag.OPEN_TO_PLAY]: {
    getText() {
      const intl = getSystemLocale.intl;
      return intl.string(getSystemLocale.t.q30PoH);
    },
    iconRole: obj.FRIENDS
  },
  [WidgetGameTag.WidgetGameTag.LOOKING_FOR_GROUP]: {
    getText() {
      const intl = getSystemLocale.intl;
      return intl.string(getSystemLocale.t.DWWAAQ);
    },
    iconRole: obj.FRIENDS
  },
  [WidgetGameTag.WidgetGameTag.LOOKING_FOR_TIPS]: {
    getText() {
      const intl = getSystemLocale.intl;
      return intl.string(getSystemLocale.t.KQDVvH);
    },
    iconRole: obj.FRIENDS
  },
  [WidgetGameTag.WidgetGameTag.OPEN_TO_TEACH]: {
    getText() {
      const intl = getSystemLocale.intl;
      return intl.string(getSystemLocale.t["5HhQo+"]);
    },
    iconRole: obj.FRIENDS
  },
  [WidgetGameTag.WidgetGameTag.LOOKING_TO_DISCUSS]: {
    getText() {
      const intl = getSystemLocale.intl;
      return intl.string(getSystemLocale.t.GipOCq);
    },
    iconRole: obj.FRIENDS
  }
};
const result = set.fileFinishedImporting("modules/user_profile/UserProfileGameWidgetTagMetadata.tsx");

export const WidgetGameTagIconRole = obj;
export const buildWidgetGameTagMetadata = function buildWidgetGameTagMetadata(arg0) {
  let obj = {};
  const keys = Object.keys(table);
  const iter = keys[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp4 = table;
    let tmp5 = table[nextResult];
    let tmp6 = tmp5;
    if (null != tmp5) {
      let tmp7 = nextResult;
      obj = { getText: null, icon: null };
      let tmp8 = tmp5;
      obj[0] = tmp6.getText;
      obj[1] = arg0[tmp6.iconRole];
      obj[tmp3] = obj;
    }
    continue;
  }
  return obj;
};