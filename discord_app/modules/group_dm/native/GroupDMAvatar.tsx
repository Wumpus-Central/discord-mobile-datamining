// === Module 9274: FacepileGroupDMAvatar ===

// Module 9274 (FacepileGroupDMAvatar)
import noop from "noop";
import { View } from "get ActivityIndicator";
import mergeGuildAvatar from "mergeGuildAvatar";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c5;
let closure_6;
const require = arg1;
class FacepileGroupDMAvatar {
  constructor(arg0) {
    ({ size, animate, users, sources, pileSizeOverride } = global);
    c0 = undefined;
    c1 = undefined;
    ({ style, status, accessible, accessibilityLabel } = global);
    tmp = jsxs();
    tmp2 = c0;
    tmp3 = c1;
    tmp4 = require("Button").AVATAR_SIZE_MAP[size];
    c0 = tmp4;
    obj = noop;
    items = [];
    items[0] = tmp4;
    memo = noop.useMemo(() => ({ width: c0, height: c0 }), items);
    if (pileSizeOverride == null) {
      tmp6 = jsxs;
      pileSizeOverride = jsxs[size];
    }
    tmp7 = require("Button").AVATAR_SIZE_MAP[pileSizeOverride];
    c1 = tmp7;
    items1 = [, ];
    items1[0] = tmp4;
    items1[1] = tmp7;
    obj = { style: items2, accessible, accessibilityLabel, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: null };
    items2 = [, ];
    items2[0] = memo;
    items2[1] = style;
    tmp11 = jsx;
    memo1 = obj.useMemo(() => {
      const result = _undefined2 / 2;
      const sum = result + 3;
      const result1 = 2 * sum;
      const sqrtResult = Math.sqrt(2 * Math.pow(sum, 2));
      const diff = _undefined - result - _undefined2;
      const sqrtResult1 = Math.sqrt(2 * Math.pow(diff, 2));
      const sum1 = -sqrtResult - (sum - sqrtResult) - sqrtResult1 + (sqrtResult1 - diff);
      let obj = { nativeCutouts: null };
      obj = { shape: _undefined(_undefined2[6]).CutoutShape.Circle, x: _undefined2 - result1 - sum1, y: _undefined2 - result1 - sum1, size: result1 };
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
    obj4 = { status, statusSizeOverride: null, autoStatusCutout: true, style: null, size: null, guildId: "Array", animate: "button" };
    obj4[1] = require("Button").StatusSizes.REFRESH_MEDIUM_10;
    obj4[3] = tmp.secondFace;
    obj4[4] = pileSizeOverride;
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
let result = require("mergeGuildAvatar").fileFinishedImporting("modules/group_dm/native/GroupDMAvatar.tsx");

export default function GroupDMAvatar(pileSizeOverride) {
  let accessibilityLabel;
  let accessible;
  let animate;
  let channel;
  let size;
  let status;
  let style;
  ({ style, channel } = pileSizeOverride);
  ({ size, animate, status, accessible, accessibilityLabel } = pileSizeOverride);
  let obj = channel(589);
  const items = [mergeGuildAvatar];
  const stateFromStoresArray = obj.useStateFromStoresArray(items, () => {
    const recipients = channel.recipients;
    const mapped = recipients.map((arg0) => user.getUser(arg0));
    return mapped.filter(channel(outer1_1[8]).isNotNullish);
  });
  if (null == channel.icon) {
    if (0 !== channel.recipients.length) {
      if (0 !== stateFromStoresArray.length) {
        if (1 === stateFromStoresArray.length) {
          obj = { autoStatusCutout: true, status: null, style: null, size: null, user: null, guildId: "a", animate: "onloadstart", accessible: null, accessibilityLabel: null };
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