// discord_app/modules/user_profile/UserProfileGameWidgetTagMetadata.tsx
let obj = { RIBBON: "ribbon", THUMBS_UP: "thumbsUp", THUMBS_DOWN: "thumbsDown", FRIENDS: "friends" };
obj = {
  getText() {
    const intl = require("../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../intl/index.native.tsx") /* getSystemLocale */.t.jbIRBE);
  },
  iconRole: obj.RIBBON
};
obj = {
  getText() {
    const intl = require("../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../intl/index.native.tsx") /* getSystemLocale */.t.xcFFv6);
  },
  iconRole: obj.RIBBON
};
let closure_2 = {
  [require("../../../discord_common/js/shared/shared-constants/WidgetGameTag.tsx").WidgetGameTag.BETTER_THAN_YOU]: obj,
  [require("../../../discord_common/js/shared/shared-constants/WidgetGameTag.tsx").WidgetGameTag.CASUAL]: obj,
  [require("../../../discord_common/js/shared/shared-constants/WidgetGameTag.tsx").WidgetGameTag.INTERMEDIATE]: {
    getText() {
      const intl = require("../../intl/index.native.tsx") /* getSystemLocale */.intl;
      return intl.string(require("../../intl/index.native.tsx") /* getSystemLocale */.t["A/mIs/"]);
    },
    iconRole: obj.RIBBON
  },
  [require("../../../discord_common/js/shared/shared-constants/WidgetGameTag.tsx").WidgetGameTag.EXPERT]: {
    getText() {
      const intl = require("../../intl/index.native.tsx") /* getSystemLocale */.intl;
      return intl.string(require("../../intl/index.native.tsx") /* getSystemLocale */.t.RIOFc2);
    },
    iconRole: obj.RIBBON
  },
  [require("../../../discord_common/js/shared/shared-constants/WidgetGameTag.tsx").WidgetGameTag.OBSESSED]: {
    getText() {
      const intl = require("../../intl/index.native.tsx") /* getSystemLocale */.intl;
      return intl.string(require("../../intl/index.native.tsx") /* getSystemLocale */.t.isPJDu);
    },
    iconRole: obj.THUMBS_UP
  },
  [require("../../../discord_common/js/shared/shared-constants/WidgetGameTag.tsx").WidgetGameTag.LOVE_IT]: {
    getText() {
      const intl = require("../../intl/index.native.tsx") /* getSystemLocale */.intl;
      return intl.string(require("../../intl/index.native.tsx") /* getSystemLocale */.t["1rN7BF"]);
    },
    iconRole: obj.THUMBS_UP
  },
  [require("../../../discord_common/js/shared/shared-constants/WidgetGameTag.tsx").WidgetGameTag.KIND_OF_LOVE_IT]: {
    getText() {
      const intl = require("../../intl/index.native.tsx") /* getSystemLocale */.intl;
      return intl.string(require("../../intl/index.native.tsx") /* getSystemLocale */.t.bCBpVg);
    },
    iconRole: obj.THUMBS_UP
  },
  [require("../../../discord_common/js/shared/shared-constants/WidgetGameTag.tsx").WidgetGameTag.KIND_OF_HATE_IT]: {
    getText() {
      const intl = require("../../intl/index.native.tsx") /* getSystemLocale */.intl;
      return intl.string(require("../../intl/index.native.tsx") /* getSystemLocale */.t["/WcmcP"]);
    },
    iconRole: obj.THUMBS_DOWN
  },
  [require("../../../discord_common/js/shared/shared-constants/WidgetGameTag.tsx").WidgetGameTag.RAGE_QUITTING]: {
    getText() {
      const intl = require("../../intl/index.native.tsx") /* getSystemLocale */.intl;
      return intl.string(require("../../intl/index.native.tsx") /* getSystemLocale */.t["NXZ/MZ"]);
    },
    iconRole: obj.THUMBS_DOWN
  },
  [require("../../../discord_common/js/shared/shared-constants/WidgetGameTag.tsx").WidgetGameTag.OPEN_TO_PLAY]: {
    getText() {
      const intl = require("../../intl/index.native.tsx") /* getSystemLocale */.intl;
      return intl.string(require("../../intl/index.native.tsx") /* getSystemLocale */.t.q30PoH);
    },
    iconRole: obj.FRIENDS
  },
  [require("../../../discord_common/js/shared/shared-constants/WidgetGameTag.tsx").WidgetGameTag.LOOKING_FOR_GROUP]: {
    getText() {
      const intl = require("../../intl/index.native.tsx") /* getSystemLocale */.intl;
      return intl.string(require("../../intl/index.native.tsx") /* getSystemLocale */.t.DWWAAQ);
    },
    iconRole: obj.FRIENDS
  },
  [require("../../../discord_common/js/shared/shared-constants/WidgetGameTag.tsx").WidgetGameTag.LOOKING_FOR_TIPS]: {
    getText() {
      const intl = require("../../intl/index.native.tsx") /* getSystemLocale */.intl;
      return intl.string(require("../../intl/index.native.tsx") /* getSystemLocale */.t.KQDVvH);
    },
    iconRole: obj.FRIENDS
  },
  [require("../../../discord_common/js/shared/shared-constants/WidgetGameTag.tsx").WidgetGameTag.OPEN_TO_TEACH]: {
    getText() {
      const intl = require("../../intl/index.native.tsx") /* getSystemLocale */.intl;
      return intl.string(require("../../intl/index.native.tsx") /* getSystemLocale */.t["5HhQo+"]);
    },
    iconRole: obj.FRIENDS
  },
  [require("../../../discord_common/js/shared/shared-constants/WidgetGameTag.tsx").WidgetGameTag.LOOKING_TO_DISCUSS]: {
    getText() {
      const intl = require("../../intl/index.native.tsx") /* getSystemLocale */.intl;
      return intl.string(require("../../intl/index.native.tsx") /* getSystemLocale */.t.GipOCq);
    },
    iconRole: obj.FRIENDS
  }
};
const result = require("set").fileFinishedImporting("modules/user_profile/UserProfileGameWidgetTagMetadata.tsx");

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