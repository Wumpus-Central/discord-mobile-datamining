// === Module 15161: UserProfileGameWidgetTagMetadata ===

// Module 15161 (UserProfileGameWidgetTagMetadata)
import util from "util" /* 1113 */;
import WidgetGameTag from "WidgetGameTag" /* 12567 */;
import size from "module_2" /* 2 */;

let obj = { RIBBON: "ribbon", THUMBS_UP: "thumbsUp", THUMBS_DOWN: "thumbsDown", FRIENDS: "friends" };
let closure_2 = {
  [WidgetGameTag.WidgetGameTag.BETTER_THAN_YOU]: {
    getText() {
      const intl = util.intl;
      return intl.string(util.t.jbIRBE);
    },
    iconRole: obj.RIBBON
  },
  [WidgetGameTag.WidgetGameTag.CASUAL]: {
    getText() {
      const intl = util.intl;
      return intl.string(util.t.xcFFv6);
    },
    iconRole: obj.RIBBON
  },
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
const obj16 = { LOOKING_FOR: "looking_for", SKILL_LEVEL: "skill_level", RATING: "rating" };
const obj17 = { RADIO: "radio", CHECKBOX: "checkbox" };
const obj18 = {};
const obj19 = {
  getLabel() {
    const intl = util.intl;
    return intl.string(util.t.MKqADM);
  },
  type: obj17.RADIO,
  tags: null
};
let items = [WidgetGameTag.WidgetGameTag.CASUAL, WidgetGameTag.WidgetGameTag.INTERMEDIATE, WidgetGameTag.WidgetGameTag.EXPERT, WidgetGameTag.WidgetGameTag.BETTER_THAN_YOU];
obj19.tags = items;
obj18[obj16.SKILL_LEVEL] = obj19;
const obj20 = {
  getLabel() {
    const intl = util.intl;
    return intl.string(util.t["7/umul"]);
  },
  type: obj17.CHECKBOX,
  tags: null
};
const items1 = [WidgetGameTag.WidgetGameTag.OBSESSED, WidgetGameTag.WidgetGameTag.LOVE_IT, WidgetGameTag.WidgetGameTag.KIND_OF_LOVE_IT, WidgetGameTag.WidgetGameTag.KIND_OF_HATE_IT, WidgetGameTag.WidgetGameTag.RAGE_QUITTING];
obj20.tags = items1;
obj18[obj16.RATING] = obj20;
const obj21 = {
  getLabel() {
    const intl = util.intl;
    return intl.string(util.t["5Dez17"]);
  },
  type: obj17.CHECKBOX,
  tags: null
};
const items2 = [WidgetGameTag.WidgetGameTag.LOOKING_FOR_GROUP, WidgetGameTag.WidgetGameTag.OPEN_TO_PLAY, WidgetGameTag.WidgetGameTag.LOOKING_FOR_TIPS, WidgetGameTag.WidgetGameTag.OPEN_TO_TEACH, WidgetGameTag.WidgetGameTag.LOOKING_TO_DISCUSS];
obj21.tags = items2;
obj18[obj16.LOOKING_FOR] = obj21;
const result = size.fileFinishedImporting("modules/user_profile/UserProfileGameWidgetTagMetadata.tsx");

export const WidgetGameTagIconRole = obj;
export function buildWidgetGameTagMetadata(arg0) {
  const obj = {};
  const keys = Object.keys(closure_2);
  const iter = keys[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp5 = closure_2[nextResult];
    let tmp6 = tmp5;
    if (null != tmp5) {
      let obj2 = { getText: null, icon: null };
      obj2.getText = tmp6.getText;
      obj2.icon = arg0[tmp6.iconRole];
      obj[tmp3] = obj2;
    }
    continue;
  }
  return obj;
}
export const WidgetGameTagSection = obj16;
export const WidgetGameTagSectionType = obj17;
export const WIDGET_GAME_TAG_SECTION_METADATA = obj18;
export function toggleWidgetGameTag(arr, arg1) {
  closure_0 = arg1;
  const values = Object.values(obj18);
  const found = values.find((tags) => {
    tags = tags.tags;
    return tags.includes(closure_0);
  });
  let type;
  if (found != null) {
    type = found.type;
  }
  if (type === obj17.RADIO) {
    items = [];
    items[HermesBuiltin.arraySpread(arr.filter((item) => {
      const tags = found.tags;
      return !tags.includes(item);
    }), 0)] = arg1;
    let found1 = items;
  } else if (arr.includes(arg1)) {
    found1 = arr.filter((item) => item !== closure_0);
  } else {
    found1 = [];
    found1[HermesBuiltin.arraySpread(arr, 0)] = arg1;
  }
  return found1;
}
export function clearWidgetGameTagSection(arr, tags) {
  return arr.filter((item) => !tags.includes(item));
}