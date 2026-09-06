// === Module 10910: GroupDMAvatar ===

// Module 10910 (GroupDMAvatar)
import GlobalUtils from "GlobalUtils" /* 1369 */;
import ClipView from "ClipView" /* 8813 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
class FacepileGroupDMAvatar {
  constructor(arg0) {
    ({ size, animate, users, sources, pileSizeOverride } = global);
    closure_0 = undefined;
    closure_1 = undefined;
    ({ style, status, accessible, accessibilityLabel } = global);
    tmp = closure_8();
    tmp2 = closure_0;
    tmp3 = closure_1;
    tmp4 = closure_0(closure_1[4]).AVATAR_SIZE_MAP[size];
    closure_0 = tmp4;
    obj = closure_2;
    items = [];
    items[0] = tmp4;
    memo = closure_2.useMemo(() => {
      const size = { width: height, height };
      return size;
    }, items);
    if (pileSizeOverride == null) {
      tmp6 = closure_7;
      pileSizeOverride = closure_7[size];
    }
    tmp7 = tmp2(tmp3[4]).AVATAR_SIZE_MAP[pileSizeOverride];
    closure_1 = tmp7;
    items1 = [, ];
    items1[0] = tmp4;
    items1[1] = tmp7;
    obj = { style: null, accessible, accessibilityLabel, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: null };
    items2 = [, ];
    items2[0] = memo;
    items2[1] = style;
    obj.style = items2;
    tmp11 = jsx;
    memo1 = obj.useMemo(() => {
      const result = closure_1 / 2;
      const sum = result + 3;
      const result1 = 2 * sum;
      const sqrtResult = Math.sqrt(2 * Math.pow(sum, 2));
      const diff = closure_0 - result - closure_1;
      const sqrtResult1 = Math.sqrt(2 * Math.pow(diff, 2));
      const sum1 = -sqrtResult - (sum - sqrtResult) - sqrtResult1 + (sqrtResult1 - diff);
      obj = { nativeCutouts: null };
      const point = { shape: ClipView.CutoutShape.Circle, x: closure_1 - result1 - sum1, y: closure_1 - result1 - sum1, size: result1 };
      const items = [point];
      obj.nativeCutouts = items;
      return obj;
    }, items1);
    tmp9 = jsxs;
    tmp10 = View;
    obj1 = { style: tmp.firstFace, size: pileSizeOverride, guildId: "r", cutout: 0, animate: "absolute" };
    obj1.cutout = memo1;
    obj1.animate = animate;
    if (null == users) {
      obj2 = { source: null };
      obj2.source = sources[0];
      obj3 = obj2;
    } else {
      obj3 = { user: null };
      obj3.user = users[0];
    }
    merged = Object.assign(obj3);
    items3 = [, ];
    items3[0] = tmp11(tmp2(tmp3[4]).Avatar, obj1);
    obj4 = { status, statusSizeOverride: tmp2(tmp3[4]).StatusSizes.REFRESH_MEDIUM_10, autoStatusCutout: true, style: tmp.secondFace, size: pileSizeOverride, guildId: "Array", animate: "Gift Message (Optional)" };
    obj4.animate = animate;
    if (null == users) {
      obj5 = { source: null };
      obj5.source = sources[1];
      obj6 = obj5;
    } else {
      obj6 = { user: null };
      obj6.user = users[1];
    }
    merged1 = Object.assign(obj6);
    items3[1] = tmp11(tmp2(tmp3[4]).Avatar, obj4);
    obj.children = items3;
    return tmp9(tmp10, obj);
  }
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
let obj = {};
obj[fn(1178).AvatarSizes.LARGE_48] = fn(1178).AvatarSizes.SMALL;
obj[fn(1178).AvatarSizes.XLARGE] = fn(1178).AvatarSizes.NORMAL;
obj[fn(1178).AvatarSizes.XXLARGE] = fn(1178).AvatarSizes.LARGE;
obj[fn(1178).AvatarSizes.PROFILE] = fn(1178).AvatarSizes.XXLARGE;
obj[fn(1178).AvatarSizes.REFRESH_MEDIUM_32] = fn(1178).AvatarSizes.XSMALL_20;
obj[fn(1178).AvatarSizes.XSMALL] = fn(1178).AvatarSizes.SIZE_16;
obj[fn(1178).AvatarSizes.SIZE_16] = fn(1178).AvatarSizes.XXSMALL_10;
obj[fn(1178).AvatarSizes.NORMAL] = fn(1178).AvatarSizes.XSMALL;
const createStyles = fn(4560);
const React6 = createStyles.createStyles({ firstFace: { position: "absolute", top: 0, left: 0 }, secondFace: { position: "absolute", bottom: 0, right: 0 } });
let size = fn(2);
let result = size.fileFinishedImporting("modules/group_dm/native/GroupDMAvatar.tsx");

export default function GroupDMAvatar(pileSizeOverride) {
  ({ style, channel } = pileSizeOverride);
  ({ size, animate, status, accessible, accessibilityLabel } = pileSizeOverride);
  obj = channel(504);
  const items = [UserStore];
  const stateFromStoresArray = obj.useStateFromStoresArray(items, () => {
    const recipients = channel.recipients;
    const mapped = recipients.map((item) => user.getUser(item));
    return mapped.filter(GlobalUtils.isNotNullish);
  });
  if (null == channel.icon) {
    if (0 !== channel.recipients.length) {
      if (0 !== stateFromStoresArray.length) {
        if (1 === stateFromStoresArray.length) {
          obj = { autoStatusCutout: true, status, style, size, user: stateFromStoresArray[0], guildId: "a", animate, accessible, accessibilityLabel };
          let tmp5 = closure_5(channel(1178).Avatar, obj);
        } else {
          obj = { status, style, size, animate, users: stateFromStoresArray, pileSizeOverride: pileSizeOverride.pileSizeOverride, accessible, accessibilityLabel };
          tmp5 = closure_5(FacepileGroupDMAvatar, obj);
        }
      }
      return tmp5;
    }
  }
  tmp5 = closure_5(channel(1178).Avatar, { autoStatusCutout: true, status, style, size, channel, animate, accessible, accessibilityLabel });
};
export { FacepileGroupDMAvatar };