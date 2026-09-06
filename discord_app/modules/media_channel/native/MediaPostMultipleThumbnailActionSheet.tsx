// discord_app/modules/media_channel/native/MediaPostMultipleThumbnailActionSheet.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import useSafeAreaInsetsDefault from "../../safe_area/useSafeAreaInsets.native.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

const require = fn;
const View = fn(17).View;
const ContentDismissActionType = fn(1954).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
fn(4560);
let createStyles = {
  container: null,
  topContainer: null,
  setAsThumbnailContainer: null,
  contentContainer: null,
  title: null,
  description: null,
};
createStyles = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, padding: 24 };
createStyles.container = createStyles;
createStyles.topContainer = {
  flex: 1,
  width: "100%",
  paddingVertical: 40,
  paddingHorizontal: 12,
  backgroundColor: nativeDefault.colors.TEXT_FEEDBACK_WARNING,
  borderRadius: nativeDefault.radii.sm,
};
let obj1 = {
  flex: 1,
  width: "100%",
  paddingVertical: 40,
  paddingHorizontal: 12,
  backgroundColor: nativeDefault.colors.TEXT_FEEDBACK_WARNING,
  borderRadius: nativeDefault.radii.sm,
};
createStyles.setAsThumbnailContainer = {
  flex: 1,
  flexDirection: "row",
  padding: 12,
  width: "100%",
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL,
  borderRadius: nativeDefault.radii.sm,
  alignItems: "center",
  justifyContent: "space-between",
};
createStyles.contentContainer = { alignItems: "center", flex: 1 };
createStyles.title = { marginTop: 24 };
createStyles.description = { textAlign: "center" };
let closure_7 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/media_channel/native/MediaPostMultipleThumbnailActionSheet.tsx");

export default function MediaPostThumbnailActionSheet(markAsDismissed) {
  markAsDismissed = markAsDismissed.markAsDismissed;
  const tmp = closure_7();
  let obj = {
    backdropOpacity: 0.8,
    onDismiss() {
      return markAsDismissed(ContentDismissActionType.UNKNOWN);
    },
    children: null,
  };
  obj = { style: tmp.container, children: null };
  obj = { contentContainerStyle: null, children: null };
  const items = [tmp.contentContainer, { paddingBottom: useSafeAreaInsetsDefault().bottom }];
  obj.contentContainerStyle = items;
  const obj1 = { style: tmp.topContainer, children: null };
  const obj2 = { style: tmp.setAsThumbnailContainer, children: null };
  const obj3 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: null };
  const intl = markAsDismissed(1114).intl;
  obj3.children = intl.string(markAsDismissed(1114).t.ews2pj);
  const items1 = [
    closure_5(markAsDismissed(4556).Text, obj3),
    closure_5(markAsDismissed(1178).Checkbox, { selected: true }),
  ];
  obj2.children = items1;
  obj1.children = closure_6(View, obj2);
  const items2 = [closure_5(View, obj1), , , , ,];
  const obj4 = {
    variant: "heading-lg/semibold",
    color: "mobile-text-heading-primary",
    style: tmp.title,
    children: null,
  };
  const intl2 = markAsDismissed(1114).intl;
  obj4.children = intl2.string(markAsDismissed(1114).t.WJisip);
  items2[1] = closure_5(markAsDismissed(4556).Text, obj4);
  items2[2] = closure_5(markAsDismissed(1178).Spacer, { size: 12 });
  const obj5 = { variant: "text-md/normal", color: "text-default", style: tmp.description, children: null };
  const intl3 = markAsDismissed(1114).intl;
  obj5.children = intl3.string(markAsDismissed(1114).t.X6ZH6d);
  items2[3] = closure_5(markAsDismissed(4556).Text, obj5);
  items2[4] = closure_5(markAsDismissed(1178).Spacer, { size: 48 });
  const obj6 = { text: null, grow: true, onPress: null };
  const intl4 = markAsDismissed(1114).intl;
  obj6.text = intl4.string(markAsDismissed(1114).t["NX+WJN"]);
  obj6.onPress = function onPress() {
    return markAsDismissed(ContentDismissActionType.UNKNOWN);
  };
  items2[5] = closure_5(markAsDismissed(4975).Button, obj6);
  obj.children = items2;
  obj.children = closure_6(markAsDismissed(6627).BottomSheetScrollView, obj);
  obj.children = closure_5(View, obj);
  return closure_5(markAsDismissed(7150).BottomSheet, obj);
}
