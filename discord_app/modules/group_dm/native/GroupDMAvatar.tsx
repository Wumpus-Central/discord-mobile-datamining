// === Module 9916: FacepileGroupDMAvatar ===

// Module 9916 (FacepileGroupDMAvatar)
import closure_2 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_4 from "mergeGuildAvatar" /* 1922 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

const require = arg1;
class FacepileGroupDMAvatar {
  constructor(arg0) {
    ({ size, animate, users, sources, pileSizeOverride } = global);
    closure_0 = undefined;
    closure_1 = undefined;
    ({ style, status, accessible, accessibilityLabel } = global);
    tmp = closure_8();
    tmp2 = closure_0;
    tmp3 = closure_1;
    tmp4 = require("Button").AVATAR_SIZE_MAP[size];
    closure_0 = tmp4;
    obj = closure_2;
    items = [];
    items[0] = tmp4;
    memo = closure_2.useMemo(() => ({ width: closure_0, height: closure_0 }), items);
    if (pileSizeOverride == null) {
      tmp6 = closure_7;
      pileSizeOverride = closure_7[size];
    }
    tmp7 = require("Button").AVATAR_SIZE_MAP[pileSizeOverride];
    closure_1 = tmp7;
    items1 = [, ];
    items1[0] = tmp4;
    items1[1] = tmp7;
    obj = { style: items2, accessible, accessibilityLabel, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: null };
    items2 = [, ];
    items2[0] = memo;
    items2[1] = style;
    tmp11 = jsx;
    memo1 = obj.useMemo(() => {
      const result = table / 2;
      const sum = result + 3;
      const result1 = 2 * sum;
      const sqrtResult = Math.sqrt(2 * Math.pow(sum, 2));
      const diff = callback - result - table;
      const sqrtResult1 = Math.sqrt(2 * Math.pow(diff, 2));
      const sum1 = -sqrtResult - (sum - sqrtResult) - sqrtResult1 + (sqrtResult1 - diff);
      obj = { nativeCutouts: null };
      obj = { shape: callback(table[6]).CutoutShape.Circle, x: table - result1 - sum1, y: table - result1 - sum1, size: result1 };
      const items = [obj];
      obj[0] = items;
      return obj;
    }, items1);
    tmp9 = jsxs;
    tmp10 = View;
    obj1 = { style: tmp.firstFace, size: pileSizeOverride, guildId: "r", cutout: 0, animate: "absolute" };
    obj1[3] = memo1;
    obj1[4] = animate;
    if (null == users) {
      obj2 = { source: null };
      obj2[0] = sources[0];
      obj3 = obj2;
    } else {
      obj3 = { user: null };
      obj3[0] = users[0];
    }
    merged = Object.assign(obj3);
    items3 = [, ];
    items3[0] = tmp11(require("Button").Avatar, obj1);
    obj4 = { status, statusSizeOverride: require("Button").StatusSizes.REFRESH_MEDIUM_10, autoStatusCutout: true, style: tmp.secondFace, size: pileSizeOverride, guildId: "Array", animate: "heading-md/bold" };
    obj4[6] = animate;
    if (null == users) {
      obj5 = { source: null };
      obj5[0] = sources[1];
      obj6 = obj5;
    } else {
      obj6 = { user: null };
      obj6[0] = users[1];
    }
    merged1 = Object.assign(obj6);
    items3[1] = tmp11(require("Button").Avatar, obj4);
    obj[5] = items3;
    return tmp9(tmp10, obj);
  }
}
({ jsx: c5, jsxs: closure_6 } = jsxProd);
let obj = {};
obj[require("Button").AvatarSizes.LARGE_48] = require("Button").AvatarSizes.SMALL;
obj[require("Button").AvatarSizes.XLARGE] = require("Button").AvatarSizes.NORMAL;
obj[require("Button").AvatarSizes.XXLARGE] = require("Button").AvatarSizes.LARGE;
obj[require("Button").AvatarSizes.PROFILE] = require("Button").AvatarSizes.XXLARGE;
obj[require("Button").AvatarSizes.REFRESH_MEDIUM_32] = require("Button").AvatarSizes.XSMALL_20;
obj[require("Button").AvatarSizes.XSMALL] = require("Button").AvatarSizes.SIZE_16;
obj[require("Button").AvatarSizes.SIZE_16] = require("Button").AvatarSizes.XXSMALL_10;
obj[require("Button").AvatarSizes.NORMAL] = require("Button").AvatarSizes.XSMALL;
let closure_8 = createCacheKey.createStyles({ firstFace: { position: "absolute", top: 0, left: 0 }, secondFace: { position: "absolute", bottom: 0, right: 0 } });
let result = require("set").fileFinishedImporting("modules/group_dm/native/GroupDMAvatar.tsx");

export default function GroupDMAvatar(pileSizeOverride) {
  ({ style, channel } = pileSizeOverride);
  ({ size, animate, status, accessible, accessibilityLabel } = pileSizeOverride);
  obj = channel(589);
  const items = [closure_4];
  const stateFromStoresArray = obj.useStateFromStoresArray(items, () => {
    const recipients = channel.recipients;
    const mapped = recipients.map((arg0) => user.getUser(arg0));
    return mapped.filter(channel(closure_1_1[8]).isNotNullish);
  });
  if (null == channel.icon) {
    if (0 !== channel.recipients.length) {
      if (0 !== stateFromStoresArray.length) {
        if (1 === stateFromStoresArray.length) {
          obj = { autoStatusCutout: true, status: null, style: null, size: null, user: null, guildId: "a", animate: "md", accessible: "primary", accessibilityLabel: null };
          obj[1] = status;
          obj[2] = style;
          obj[3] = size;
          obj[4] = stateFromStoresArray[0];
          obj[6] = animate;
          obj[7] = accessible;
          obj[8] = accessibilityLabel;
          let tmp5 = callback(tmp(1297).Avatar, obj);
        } else {
          obj = { status: null, style: null, size: null, animate: null, users: null, pileSizeOverride: null, accessible: null, accessibilityLabel: null };
          obj[0] = status;
          obj[1] = style;
          obj[2] = size;
          obj[3] = animate;
          obj[4] = stateFromStoresArray;
          obj[5] = pileSizeOverride.pileSizeOverride;
          obj[6] = accessible;
          obj[7] = accessibilityLabel;
          tmp5 = callback(FacepileGroupDMAvatar, obj);
        }
      }
      return tmp5;
    }
  }
  tmp5 = callback(tmp(1297).Avatar, { autoStatusCutout: true, status, style, size, channel, animate, accessible, accessibilityLabel });
};
export { FacepileGroupDMAvatar };