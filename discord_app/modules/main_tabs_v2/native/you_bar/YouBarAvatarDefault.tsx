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
  const token = useToken.useToken(nativeDefault.colors.MOBILE_FLOATINGBAR_BACKGROUND);
  let num = native.getStatusSize(hasOwnProperty);
  if (num == null) {
    num = 0;
  }
  const tmp7 = native.AVATAR_SIZE_MAP[hasOwnProperty];
  const result = num / 2;
  const sum = result + native.STATUS_PADDING;
  const diff = tmp7 - sum - (num / 4) * 2;
  const point = { shape: ClipView.CutoutShape.Circle, x: diff, y: diff, size: 2 * sum };
  const obj3 = { style: null, children: null };
  size = {
    height: native.AVATAR_SIZE_MAP[hasOwnProperty],
    width: native.AVATAR_SIZE_MAP[hasOwnProperty],
    position: "relative",
  };
  obj3.style = size;
  const obj4 = { cutouts: null, children: null };
  const items = [point];
  obj4.cutouts = items;
  const obj5 = { style: null, children: null };
  const items1 = [tmp.placeholderAvatar, { width: tmp7, height: tmp7, backgroundColor: token }];
  obj5.style = items1;
  const obj6 = { style: tmp.placeholderAvatarBackground };
  const items2 = [
    closure_1_12(View, obj6),
    closure_1_12(ReactionIcon.ReactionIcon, {
      size: "custom",
      style: { width: tmp7, height: tmp7 },
      color: "background-mod-strong",
    }),
  ];
  obj5.children = items2;
  obj4.children = map1(View, obj5);
  const items3 = [closure_1_12(ClipViewDefault, obj4)];
  const obj8 = {
    size: num,
    status: StatusTypes.OFFLINE,
    isMobileOnline: false,
    isVROnline: false,
    streaming: false,
    style: null,
  };
  const rect = { position: "absolute", right: bottom, bottom };
  obj8.style = rect;
  items3[1] = closure_1_12(native.Status, obj8);
  obj3.children = items3;
  return map1(View, obj3);
}
function AvatarDefaultLarge() {
  const tmp = closure_14();
  const token = useToken.useToken(nativeDefault.colors.MOBILE_FLOATINGBAR_BACKGROUND);
  const tmp3 = native.AVATAR_SIZE_MAP[React4];
  const result = size / 2;
  const sum = result + native.STATUS_PADDING;
  const diff = tmp3 - sum - (size / 4) * 2;
  const point = { shape: ClipView.CutoutShape.Circle, x: diff + closure_1_10, y: diff + closure_1_10, size: 2 * sum };
  const obj2 = { style: null, children: null };
  size = {
    height: native.AVATAR_SIZE_MAP[hasOwnProperty],
    width: native.AVATAR_SIZE_MAP[hasOwnProperty],
    position: "relative",
  };
  obj2.style = size;
  const obj3 = { style: null, children: null };
  const items = [tmp.avatarShadow];
  const size1 = {
    position: "absolute",
    width: tmp3,
    height: tmp3,
    top: -React7 - (native.AVATAR_SIZE_MAP[React4] - React5) / 2,
    left: -React7,
  };
  items[1] = size1;
  obj3.style = items;
  const obj4 = { cutouts: null, children: null };
  const items1 = [point];
  obj4.cutouts = items1;
  const obj5 = { style: null, children: null };
  const items2 = [tmp.placeholderAvatar, { width: tmp3, height: tmp3, backgroundColor: token }];
  obj5.style = items2;
  const obj6 = { style: tmp.placeholderAvatarBackground };
  const tmp7 = -React7;
  const items3 = [closure_1_12(View, obj6)];
  const obj7 = { size: "custom", style: null, color: "background-mod-strong" };
  const size2 = { width: native.AVATAR_SIZE_MAP[hasOwnProperty], height: native.AVATAR_SIZE_MAP[hasOwnProperty] };
  obj7.style = size2;
  items3[1] = closure_1_12(ReactionIcon.ReactionIcon, obj7);
  obj5.children = items3;
  obj4.children = map1(View, obj5);
  const items4 = [closure_1_12(ClipViewDefault, obj4)];
  const obj8 = {
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
  obj8.style = rect;
  items4[1] = closure_1_12(native.Status, obj8);
  obj3.children = items4;
  obj2.children = map1(View, obj3);
  return closure_1_12(View, obj2);
}
const View = fn(17).View;
const YouBarConstants = fn(15189);
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
const createStyles = fn(4639);
let obj = {
  placeholderAvatar: {
    borderRadius: nativeDefault.radii.round,
    borderWidth: 1,
    borderColor: nativeDefault.colors.BORDER_SUBTLE,
    justifyContent: "center",
    alignItems: "center",
  },
  placeholderAvatarBackground: null,
  avatarShadow: null,
};
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
const merged = Object.assign(nativeDefault.shadows.SHADOW_MEDIUM);
obj.avatarShadow = {};
let closure_14 = createStyles.createStyles(obj);
let obj3 = {
  borderRadius: nativeDefault.radii.round,
  borderWidth: 1,
  borderColor: nativeDefault.colors.BORDER_SUBTLE,
  justifyContent: "center",
  alignItems: "center",
};
let obj4 = {};
let size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/you_bar/YouBarAvatarDefault.tsx");

export default noop.memo(function YouBarAvatarDefault(isLarge) {
  return closure_1_12(isLarge.isLarge ? AvatarDefaultLarge : AvatarDefault, {});
});
