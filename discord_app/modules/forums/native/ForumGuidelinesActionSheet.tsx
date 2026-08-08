// discord_app/modules/forums/native/ForumGuidelinesActionSheet.tsx
import _slicedToArray from "_slicedToArray";
import Background from "Background";
import { View } from "ME";
import { FORUM_GUIDELINES_ACTION_SHEET as closure_6 } from "FORUM_GUIDELINES_ACTION_SHEET";
import jsxProd from "PressableBase";
import createCacheKey from "createCacheKey";
import { asyncRequireImpl } from "../../../../_runtime/01988_asyncRequireImpl.js";
import { ACTION_SHEET_HEIGHT_HALF } from "../../action_sheet/native/ActionSheetActionCreators.tsx";

let c9;
let error;
let metroImportAll;
const require = arg1;
({ jsx: error, jsxs: metroImportAll, Fragment: c9 } = jsxProd);
createCacheKey = { scrollContainer: { paddingHorizontal: 16 }, header: { alignItems: "center", paddingTop: 20, paddingBottom: 24 }, headerTitle: { marginTop: 8 }, guidelinesContainer: null, footer: null, buttonWrapper: null, buttonPill: null, floatingButtonContainer: null, editButton: null, editText: null, editIcon: null };
createCacheKey = { padding: 16, backgroundColor: require("Themes").colors.BACKGROUND_SURFACE_HIGH, borderRadius: require("Themes").radii.sm };
createCacheKey[3] = createCacheKey;
createCacheKey[4] = { paddingBottom: 16 };
createCacheKey[5] = { marginHorizontal: 16 };
createCacheKey[6] = { borderRadius: require("Themes").radii.sm };
let obj1 = { borderRadius: require("Themes").radii.sm };
createCacheKey[7] = { marginTop: 16, position: "absolute", left: 16, right: 16, shadowColor: require("Themes").colors.BLACK, shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.25, shadowRadius: 4, borderRadius: require("Themes").radii.sm };
createCacheKey[8] = { display: "flex", flexDirection: "row", alignItems: "center", position: "absolute", top: 12, right: 0 };
createCacheKey[9] = { marginRight: 4 };
let obj2 = { marginTop: 16, position: "absolute", left: 16, right: 16, shadowColor: require("Themes").colors.BLACK, shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.25, shadowRadius: 4, borderRadius: require("Themes").radii.sm };
createCacheKey[10] = { color: require("Themes").colors.TEXT_BRAND };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj3 = { color: require("Themes").colors.TEXT_BRAND };
const result = require("get ActivityIndicator").fileFinishedImporting("modules/forums/native/ForumGuidelinesActionSheet.tsx");

export default function ForumGuidelinesActionSheet(channel) {
  channel = channel.channel;
  const onPress = channel.onPress;
  let bottom;
  let first;
  let React;
  let c5;
  let pathname;
  let callback;
  const tmp = createCacheKey();
  let obj = channel(bottom[7]);
  const canManageChannel = obj.useCanManageChannel(channel);
  bottom = onPress(bottom[8])().bottom;
  let obj1 = React;
  const tmp6 = first(React.useState(), 2);
  first = tmp6[0];
  React = tmp6[1];
  const items = [bottom, first];
  const memo = React.useMemo(() => {
    let sum;
    if (null != first) {
      let num = 0;
      if (obj.isAndroid()) {
        num = bottom;
      }
      sum = 72 + num + tmp + bottom;
      obj = channel(bottom[10]);
    }
    return sum;
  }, items);
  let num = memo;
  if (memo == null) {
    num = 0;
  }
  let tmp21Result = onPress(bottom[9])() < num;
  c5 = tmp21Result;
  let tmp11;
  if (!tmp21Result) {
    tmp11 = memo;
  }
  function handlePress() {
    if (onPress != null) {
      tmp();
    }
    onPress(bottom[12]).hideActionSheet(pathname);
  }
  const items1 = [first];
  const items2 = [channel.id];
  callback = obj1.useCallback((arg0, arg1) => {
    if (arg1 !== first) {
      callback(arg1);
    }
  }, items1);
  const effect = obj1.useEffect(() => {
    onPress(bottom[11]).markAsSeen(channel.id);
  }, items2);
  let tmp14 = !tmp21Result;
  if (!tmp21Result) {
    obj = { bottom: true, style: null, children: null };
    obj[1] = tmp.footer;
    obj = { grow: true, text: null, onPress: null, style: null, pillStyle: null };
    const intl = tmp2(tmp3[15]).intl;
    obj[1] = intl.string(tmp2(tmp3[15]).t["NX+WJN"]);
    obj[2] = handlePress;
    ({ buttonWrapper: obj4[3], buttonPill: obj4[4] } = tmp);
    obj[2] = callback(tmp2(tmp3[14]).BaseTextButton, obj);
    tmp14 = callback(tmp2(tmp3[13]).SafeAreaPaddingView, obj);
  }
  const items3 = [bottom, tmp21Result];
  const memo1 = obj1.useMemo(() => {
    let num = 0;
    if (c5) {
      num = bottom + 40 + 32;
    }
    return num;
  }, items3);
  const tmp8 = onPress(bottom[9])();
  pathname = channel(bottom[16]).useLocation().pathname;
  callback = obj1.useRef(true);
  const items4 = [pathname, channel.id];
  const effect1 = obj1.useEffect(() => {
    const tryParseChannelPathResult = channel(bottom[17]).tryParseChannelPath(pathname);
    if (!ref.current) {
      if (null != tryParseChannelPathResult) {
        if (tryParseChannelPathResult.channelId !== channel.id) {
          onPress(bottom[12]).hideActionSheet(pathname);
          const obj2 = onPress(bottom[12]);
        }
      }
    }
    ref.current = false;
  }, items4);
  const items5 = [channel.id];
  const callback1 = obj1.useCallback(() => {
    onPress(bottom[12]).hideActionSheet(pathname);
    const obj = onPress(bottom[12]);
    onPress(bottom[18]).open(channel.id);
  }, items5);
  obj1 = { scrollable: true, contentHeight: tmp11, footer: tmp14, onDismiss: channel.onClose, children: null };
  let obj2 = { style: tmp.scrollContainer, scrollIndicatorInsets: { bottom }, contentContainerStyle: { paddingBottom: memo1 }, onContentSizeChange: callback, children: null };
  const obj3 = { style: tmp.header, children: null };
  let tmp19Result = canManageChannel;
  if (canManageChannel) {
    const obj4 = { accessibilityLabel: null, accessibilityRole: "button", style: null, onPress: null, children: null };
    const intl2 = tmp2(tmp3[15]).intl;
    obj4[0] = intl2.string(tmp2(tmp3[15]).t.bt75uw);
    obj4[2] = tmp.editButton;
    obj4[3] = callback1;
    const obj5 = { style: null, variant: "text-sm/medium", color: "text-brand", children: null };
    obj5[0] = tmp.editText;
    const intl3 = tmp2(tmp3[15]).intl;
    obj5[3] = intl3.string(tmp2(tmp3[15]).t.bt75uw);
    const items6 = [tmp21(tmp2(tmp3[22]).Text, obj5), ];
    const obj6 = { color: null, size: "xs" };
    obj6[0] = tmp.editIcon.color;
    items6[1] = tmp21(tmp2(tmp3[23]).PencilIcon, obj6);
    obj4[4] = items6;
    tmp19Result = tmp19(tmp2(tmp3[21]).PressableOpacity, obj4);
  }
  const items7 = [tmp19Result, , ];
  const obj7 = { IconComponent: null };
  let tmp5Result = tmp5(tmp3[24]);
  obj7[0] = channel(bottom[25]).BookCheckIcon;
  items7[1] = callback(tmp5Result, obj7);
  const obj8 = { style: tmp.headerTitle, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
  const intl4 = tmp2(tmp3[15]).intl;
  obj8[3] = intl4.string(channel(bottom[15]).t["4d4T4l"]);
  items7[2] = callback(channel(bottom[22]).Text, obj8);
  obj3[1] = items7;
  const items8 = [closure_8(c5, obj3), ];
  const obj9 = { style: tmp.guidelinesContainer, children: null };
  const obj10 = { variant: "text-md/medium", color: "text-default", children: null };
  tmp5Result = tmp5(tmp3[26]);
  obj10[2] = tmp5Result.parseForumPostGuidelines(channel.topic, true, { channelId: channel.id, allowHeading: true, allowList: true, allowLinks: true });
  obj9[1] = callback(channel(bottom[22]).Text, obj10);
  items8[1] = callback(c5, obj9);
  obj2[4] = items8;
  obj1[4] = closure_8(channel(bottom[20]).BottomSheetScrollView, obj2);
  const children = [callback(channel(bottom[19]).BottomSheet, obj1), ];
  if (tmp21Result) {
    const obj12 = { grow: true, style: null, pillStyle: null, text: null, onPress: null };
    const items10 = [tmp.floatingButtonContainer, ];
    const obj13 = { bottom: null };
    obj13[0] = bottom + 16;
    items10[1] = obj13;
    obj12[1] = items10;
    obj12[2] = tmp.buttonPill;
    const intl5 = tmp2(tmp3[15]).intl;
    obj12[3] = intl5.string(tmp2(tmp3[15]).t["NX+WJN"]);
    obj12[4] = handlePress;
    tmp21Result = tmp21(tmp2(tmp3[14]).BaseTextButton, obj12);
  }
  children[1] = tmp21Result;
  return closure_8(closure_9, { children });
};
export const openForumGuidelinesActionSheet = function openForumGuidelinesActionSheet(arg0) {
  let obj = ACTION_SHEET_HEIGHT_HALF;
  obj = {};
  const merged = Object.assign(arg0);
  obj.openLazy(asyncRequireImpl(9920, dependencyMap.paths), closure_6, obj);
};