// === Module 8615: UserProfileGameWidgetTagMetadata ===

// Module 8615 (UserProfileGameWidgetTagMetadata)
import intl2 from "intl" /* 1126 */;
import WidgetGameTag from "WidgetGameTag" /* 8616 */;
import size from "module_2" /* 2 */;

let obj = { RIBBON: "ribbon", THUMBS_UP: "thumbsUp", THUMBS_DOWN: "thumbsDown", FRIENDS: "friends" };
let obj2 = {
  getText() {
    const intl = intl2.intl;
    return intl.string(intl2.t.jbIRBE);
  },
  iconRole: obj.RIBBON
};
const obj10 = {
  getText() {
    const intl = intl2.intl;
    return intl.string(intl2.t["NXZ/MZ"]);
  },
  iconRole: obj.THUMBS_DOWN
};
const obj11 = {
  getText() {
    const intl = intl2.intl;
    return intl.string(intl2.t.q30PoH);
  },
  iconRole: obj.FRIENDS
};
const obj12 = {
  getText() {
    const intl = intl2.intl;
    return intl.string(intl2.t.DWWAAQ);
  },
  iconRole: obj.FRIENDS
};
const obj13 = {
  getText() {
    const intl = intl2.intl;
    return intl.string(intl2.t.KQDVvH);
  },
  iconRole: obj.FRIENDS
};
const obj14 = {
  getText() {
    const intl = intl2.intl;
    return intl.string(intl2.t["5HhQo+"]);
  },
  iconRole: obj.FRIENDS
};
const obj15 = {
  getText() {
    const intl = intl2.intl;
    return intl.string(intl2.t.GipOCq);
  },
  iconRole: obj.FRIENDS
};
const obj3 = {
  getText() {
    const intl = intl2.intl;
    return intl.string(intl2.t.xcFFv6);
  },
  iconRole: obj.RIBBON
};
const obj4 = {
  getText() {
    const intl = intl2.intl;
    return intl.string(intl2.t["A/mIs/"]);
  },
  iconRole: obj.RIBBON
};
const obj5 = {
  getText() {
    const intl = intl2.intl;
    return intl.string(intl2.t.RIOFc2);
  },
  iconRole: obj.RIBBON
};
const obj6 = {
  getText() {
    const intl = intl2.intl;
    return intl.string(intl2.t.isPJDu);
  },
  iconRole: obj.THUMBS_UP
};
const obj7 = {
  getText() {
    const intl = intl2.intl;
    return intl.string(intl2.t["1rN7BF"]);
  },
  iconRole: obj.THUMBS_UP
};
const obj8 = {
  getText() {
    const intl = intl2.intl;
    return intl.string(intl2.t.bCBpVg);
  },
  iconRole: obj.THUMBS_UP
};
const obj9 = {
  getText() {
    const intl = intl2.intl;
    return intl.string(intl2.t["/WcmcP"]);
  },
  iconRole: obj.THUMBS_DOWN
};
let closure_2 = { [WidgetGameTag.WidgetGameTag.BETTER_THAN_YOU]: obj2, [WidgetGameTag.WidgetGameTag.CASUAL]: obj3, [WidgetGameTag.WidgetGameTag.INTERMEDIATE]: obj4, [WidgetGameTag.WidgetGameTag.EXPERT]: obj5, [WidgetGameTag.WidgetGameTag.OBSESSED]: obj6, [WidgetGameTag.WidgetGameTag.LOVE_IT]: obj7, [WidgetGameTag.WidgetGameTag.KIND_OF_LOVE_IT]: obj8, [WidgetGameTag.WidgetGameTag.KIND_OF_HATE_IT]: obj9, [WidgetGameTag.WidgetGameTag.RAGE_QUITTING]: obj10, [WidgetGameTag.WidgetGameTag.OPEN_TO_PLAY]: obj11, [WidgetGameTag.WidgetGameTag.LOOKING_FOR_GROUP]: obj12, [WidgetGameTag.WidgetGameTag.LOOKING_FOR_TIPS]: obj13, [WidgetGameTag.WidgetGameTag.OPEN_TO_TEACH]: obj14, [WidgetGameTag.WidgetGameTag.LOOKING_TO_DISCUSS]: obj15 };
const result = size.fileFinishedImporting("modules/user_profile/UserProfileGameWidgetTagMetadata.tsx");

export const WidgetGameTagIconRole = obj;
export const buildWidgetGameTagMetadata = function buildWidgetGameTagMetadata(arg0) {
  const obj = {};
  const keys = Object.keys(closure_2);
  const iter = keys[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp5 = closure_2[nextResult];
    let tmp6 = tmp5;
    if (null != tmp5) {
      let obj2 = { getText: tmp6.getText, icon: arg0[tmp6.iconRole] };
      obj[tmp3] = obj2;
    }
    continue;
  }
  return obj;
};