// discord_app/modules/main_tabs_v2/native/you_bar/YouBarAvatarDefault.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../../design/void/native.tsx";
import useToken from "../../../../design/tokens/native/useToken.tsx";
import ReactionIcon from "../../../../design/components/Icon/native/redesign/generated/ReactionIcon.tsx";
import ClipView from "../../../../design/components/Icon/native/ClipView.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const ClipViewDefault = ClipView;

require = fn;
function AvatarDefault() {
  const tmp = closure_14();
  let obj = useToken;
  const token = obj.useToken(nativeDefault.colors.MOBILE_FLOATINGBAR_BACKGROUND);
  let obj1 = native;
  let num = obj1.getStatusSize(hasOwnProperty);
  if (num == null) {
    num = 0;
  }
  const tmp7 = native.AVATAR_SIZE_MAP[hasOwnProperty];
  const result = num / 2;
  const sum = result + tmp2(1178).STATUS_PADDING;
  const diff = tmp7 - sum - (num / 4) * 2;
  const point = { shape: tmp2(8813).CutoutShape.Circle, x: diff, y: diff, size: 2 * sum };
  obj = { style: null, children: null };
  size = { height: tmp2(1178).AVATAR_SIZE_MAP[tmp6], width: tmp2(1178).AVATAR_SIZE_MAP[tmp6], position: "relative" };
  obj.style = size;
  obj = { cutouts: null, children: null };
  const items = [point];
  obj.cutouts = items;
  obj1 = { style: null, children: null };
  const items1 = [tmp.placeholderAvatar, { width: tmp7, height: tmp7, backgroundColor: token }];
  obj1.style = items1;
  const items2 = [
    closure_1_12(View, { style: tmp.placeholderAvatarBackground }),
    closure_1_12(ReactionIcon.ReactionIcon, {
      size: "custom",
      style: { width: tmp7, height: tmp7 },
      color: "background-mod-strong",
    }),
  ];
  obj1.children = items2;
  obj.children = map1(View, obj1);
  const items3 = [closure_1_12(ClipViewDefault, obj)];
  const obj4 = {
    size: num,
    status: StatusTypes.OFFLINE,
    isMobileOnline: false,
    isVROnline: false,
    streaming: false,
    style: null,
  };
  const rect = { position: "absolute", right: bottom, bottom };
  obj4.style = rect;
  items3[1] = closure_1_12(native.Status, obj4);
  obj.children = items3;
  return map1(View, obj);
}
function AvatarDefaultLarge() {
  const tmp = closure_14();
  let obj = useToken;
  const token = obj.useToken(nativeDefault.colors.MOBILE_FLOATINGBAR_BACKGROUND);
  const tmp3 = native.AVATAR_SIZE_MAP[React4];
  const result = size / 2;
  const sum = result + native.STATUS_PADDING;
  const diff = tmp3 - sum - (size / 4) * 2;
  const point = { shape: ClipView.CutoutShape.Circle, x: diff + closure_1_10, y: diff + closure_1_10, size: 2 * sum };
  obj = { style: null, children: null };
  size = {
    height: native.AVATAR_SIZE_MAP[hasOwnProperty],
    width: native.AVATAR_SIZE_MAP[hasOwnProperty],
    position: "relative",
  };
  obj.style = size;
  obj = { style: null, children: null };
  const items = [tmp.avatarShadow];
  const size1 = {
    position: "absolute",
    width: tmp3,
    height: tmp3,
    top: -React7 - (native.AVATAR_SIZE_MAP[React4] - React5) / 2,
    left: -React7,
  };
  items[1] = size1;
  obj.style = items;
  const obj1 = { cutouts: null, children: null };
  const items1 = [point];
  obj1.cutouts = items1;
  const obj2 = { style: null, children: null };
  const items2 = [tmp.placeholderAvatar, { width: tmp3, height: tmp3, backgroundColor: token }];
  obj2.style = items2;
  const items3 = [closure_1_12(View, { style: tmp.placeholderAvatarBackground })];
  const obj4 = { size: "custom", style: null, color: "background-mod-strong" };
  const size2 = { width: native.AVATAR_SIZE_MAP[hasOwnProperty], height: native.AVATAR_SIZE_MAP[hasOwnProperty] };
  obj4.style = size2;
  items3[1] = closure_1_12(ReactionIcon.ReactionIcon, obj4);
  obj2.children = items3;
  obj1.children = map1(View, obj2);
  const items4 = [closure_1_12(ClipViewDefault, obj1)];
  const obj5 = {
    size,
    status: StatusTypes.OFFLINE,
    isMobileOnline: false,
    isVROnline: false,
    streaming: false,
    style: null,
  };
  const rect = {
    position: "absolute",
    right: timestampProducer - closure_1_10,
    bottom: timestampProducer - closure_1_10,
  };
  obj5.style = rect;
  items4[1] = closure_1_12(native.Status, obj5);
  obj.children = items4;
  obj.children = map1(View, obj);
  return closure_1_12(View, obj);
}
const View = fn(17).View;
const YouBarConstants = fn(15098);
({
  YOU_BAR_AVATAR_LARGE_SIZE: closure_4,
  YOU_BAR_AVATAR_PLACEHOLDER_SIZE: hasOwnProperty,
  YOU_BAR_STATUS_INSET: metroRequire,
  YOU_BAR_HEIGHT: closure_7,
  YOU_BAR_LARGE_STATUS_SIZE: closure_8,
  YOU_BAR_PADDING: closure_9,
  YOU_BAR_STATUS_OFFSET: c10,
} = YouBarConstants);
const StatusTypes = fn(1074).StatusTypes;
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
fn(4560);
let obj = { placeholderAvatar: null, placeholderAvatarBackground: null, avatarShadow: null };
obj = {
  borderRadius: nativeDefault.radii.round,
  borderWidth: 1,
  borderColor: nativeDefault.colors.BORDER_SUBTLE,
  justifyContent: "center",
  alignItems: "center",
};
obj.placeholderAvatar = obj;
let rect = {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
  borderRadius: nativeDefault.radii.round,
};
obj.placeholderAvatarBackground = rect;
const createStyles = {};
const merged = Object.assign(nativeDefault.shadows.SHADOW_MEDIUM);
obj.avatarShadow = createStyles;
let closure_14 = createStyles.createStyles(obj);
let size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/you_bar/YouBarAvatarDefault.tsx");

export default noop.memo(function YouBarAvatarDefault(isLarge) {
  return closure_1_12(isLarge.isLarge ? AvatarDefaultLarge : AvatarDefault, {});
});
