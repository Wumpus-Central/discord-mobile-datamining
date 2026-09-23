// discord_app/modules/group_dm/native/GroupDMAvatar.tsx
import GlobalUtils from "../../../utils/GlobalUtils.tsx";
import ClipView from "../../../design/components/Icon/native/ClipView.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import UserStore from "../../../stores/UserStore.tsx";

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
    items1 = [,];
    items1[0] = tmp4;
    items1[1] = tmp7;
    obj1 = {
      style: null,
      accessible,
      accessibilityLabel,
      accessibilityElementsHidden: true,
      importantForAccessibility: "no-hide-descendants",
      children: null,
    };
    items2 = [,];
    items2[0] = memo;
    items2[1] = style;
    obj1.style = items2;
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
      const point = {
        shape: ClipView.CutoutShape.Circle,
        x: closure_1 - result1 - sum1,
        y: closure_1 - result1 - sum1,
        size: result1,
      };
      const items = [point];
      obj.nativeCutouts = items;
      return obj;
    }, items1);
    tmp9 = jsxs;
    tmp10 = View;
    obj9 = { style: tmp.firstFace, size: pileSizeOverride, guildId: "r", cutout: 0, animate: "absolute" };
    obj9.cutout = memo1;
    obj9.animate = animate;
    if (null == users) {
      obj10 = { source: null };
      obj10.source = sources[0];
      obj11 = obj10;
    } else {
      obj11 = { user: null };
      obj11.user = users[0];
    }
    merged = Object.assign(obj11);
    items3 = [,];
    items3[0] = tmp11(tmp2(tmp3[4]).Avatar, obj9);
    obj12 = {
      status,
      statusSizeOverride: tmp2(tmp3[4]).StatusSizes.REFRESH_MEDIUM_10,
      autoStatusCutout: true,
      style: tmp.secondFace,
      size: pileSizeOverride,
      guildId: "Array",
      animate: "Label",
    };
    obj12.animate = animate;
    if (null == users) {
      obj13 = { source: null };
      obj13.source = sources[1];
      obj14 = obj13;
    } else {
      obj14 = { user: null };
      obj14.user = users[1];
    }
    merged1 = Object.assign(obj14);
    items3[1] = tmp11(tmp2(tmp3[4]).Avatar, obj12);
    obj1.children = items3;
    return tmp9(tmp10, obj1);
  }
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
let obj = {};
obj[fn(1177).AvatarSizes.LARGE_48] = fn(1177).AvatarSizes.SMALL;
obj[fn(1177).AvatarSizes.XLARGE] = fn(1177).AvatarSizes.NORMAL;
obj[fn(1177).AvatarSizes.XXLARGE] = fn(1177).AvatarSizes.LARGE;
obj[fn(1177).AvatarSizes.PROFILE] = fn(1177).AvatarSizes.XXLARGE;
obj[fn(1177).AvatarSizes.REFRESH_MEDIUM_32] = fn(1177).AvatarSizes.XSMALL_20;
obj[fn(1177).AvatarSizes.XSMALL] = fn(1177).AvatarSizes.SIZE_16;
obj[fn(1177).AvatarSizes.SIZE_16] = fn(1177).AvatarSizes.XXSMALL_10;
obj[fn(1177).AvatarSizes.NORMAL] = fn(1177).AvatarSizes.XSMALL;
const createStyles = fn(4827);
const React6 = createStyles.createStyles({
  firstFace: { position: "absolute", top: 0, left: 0 },
  secondFace: { position: "absolute", bottom: 0, right: 0 },
});
let size = fn(2);
let result = size.fileFinishedImporting("modules/group_dm/native/GroupDMAvatar.tsx");

export default function GroupDMAvatar(pileSizeOverride) {
  ({ style, channel } = pileSizeOverride);
  ({ size, animate, status, accessible, accessibilityLabel } = pileSizeOverride);
  const items = [UserStore];
  const stateFromStoresArray = channel(504).useStateFromStoresArray(items, () => {
    const recipients = channel.recipients;
    const mapped = recipients.map((item) => user.getUser(item));
    return mapped.filter(GlobalUtils.isNotNullish);
  });
  if (null == channel.icon) {
    if (0 !== channel.recipients.length) {
      if (0 !== stateFromStoresArray.length) {
        if (1 === stateFromStoresArray.length) {
          const obj2 = {
            autoStatusCutout: true,
            status,
            style,
            size,
            user: stateFromStoresArray[0],
            guildId: "a",
            animate,
            accessible,
            accessibilityLabel,
          };
          let tmp5 = closure_5(channel(1177).Avatar, obj2);
        } else {
          const obj3 = {
            status,
            style,
            size,
            animate,
            users: stateFromStoresArray,
            pileSizeOverride: pileSizeOverride.pileSizeOverride,
            accessible,
            accessibilityLabel,
          };
          tmp5 = closure_5(FacepileGroupDMAvatar, obj3);
        }
      }
      return tmp5;
    }
  }
  tmp5 = closure_5(channel(1177).Avatar, {
    autoStatusCutout: true,
    status,
    style,
    size,
    channel,
    animate,
    accessible,
    accessibilityLabel,
  });
  obj = channel(504);
}
export { FacepileGroupDMAvatar };
