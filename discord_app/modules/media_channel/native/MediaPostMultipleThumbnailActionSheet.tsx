// discord_app/modules/media_channel/native/MediaPostMultipleThumbnailActionSheet.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import useSafeAreaInsetsDefault from "../../safe_area/useSafeAreaInsets.native.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

const require = fn;
const View = fn(17).View;
const ContentDismissActionType = fn(2041).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4829);
let obj2 = {
  container: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, padding: 24 },
  topContainer: null,
  setAsThumbnailContainer: null,
  contentContainer: null,
  title: null,
  description: null,
};
let obj3 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, padding: 24 };
obj2.topContainer = {
  flex: 1,
  width: "100%",
  paddingVertical: 40,
  paddingHorizontal: 12,
  backgroundColor: nativeDefault.colors.TEXT_FEEDBACK_WARNING,
  borderRadius: nativeDefault.radii.sm,
};
let obj4 = {
  flex: 1,
  width: "100%",
  paddingVertical: 40,
  paddingHorizontal: 12,
  backgroundColor: nativeDefault.colors.TEXT_FEEDBACK_WARNING,
  borderRadius: nativeDefault.radii.sm,
};
obj2.setAsThumbnailContainer = {
  flex: 1,
  flexDirection: "row",
  padding: 12,
  width: "100%",
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL,
  borderRadius: nativeDefault.radii.sm,
  alignItems: "center",
  justifyContent: "space-between",
};
obj2.contentContainer = { alignItems: "center", flex: 1 };
obj2.title = { marginTop: 24 };
obj2.description = { textAlign: "center" };
let closure_7 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/media_channel/native/MediaPostMultipleThumbnailActionSheet.tsx");

export default function MediaPostThumbnailActionSheet(markAsDismissed) {
  markAsDismissed = markAsDismissed.markAsDismissed;
  const tmp = closure_7();
  const obj = {
    backdropOpacity: 0.8,
    onDismiss() {
      return markAsDismissed(ContentDismissActionType.UNKNOWN);
    },
    children: null,
  };
  const obj2 = { style: tmp.container, children: null };
  const obj3 = { contentContainerStyle: null, children: null };
  const items = [tmp.contentContainer, { paddingBottom: useSafeAreaInsetsDefault().bottom }];
  obj3.contentContainerStyle = items;
  const obj4 = { style: tmp.topContainer, children: null };
  const obj5 = { style: tmp.setAsThumbnailContainer, children: null };
  const obj6 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: null };
  const intl = markAsDismissed(1115).intl;
  obj6.children = intl.string(markAsDismissed(1115).t.ews2pj);
  const items1 = [
    closure_5(markAsDismissed(4825).Text, obj6),
    closure_5(markAsDismissed(1177).Checkbox, { selected: true }),
  ];
  obj5.children = items1;
  obj4.children = closure_6(View, obj5);
  const items2 = [closure_5(View, obj4), , , , ,];
  const obj7 = {
    variant: "heading-lg/semibold",
    color: "mobile-text-heading-primary",
    style: tmp.title,
    children: null,
  };
  const intl2 = markAsDismissed(1115).intl;
  obj7.children = intl2.string(markAsDismissed(1115).t.WJisip);
  items2[1] = closure_5(markAsDismissed(4825).Text, obj7);
  items2[2] = closure_5(markAsDismissed(1177).Spacer, { size: 12 });
  const obj8 = { variant: "text-md/normal", color: "text-default", style: tmp.description, children: null };
  const intl3 = markAsDismissed(1115).intl;
  obj8.children = intl3.string(markAsDismissed(1115).t.X6ZH6d);
  items2[3] = closure_5(markAsDismissed(4825).Text, obj8);
  items2[4] = closure_5(markAsDismissed(1177).Spacer, { size: 48 });
  const obj9 = { text: null, grow: true, onPress: null };
  const intl4 = markAsDismissed(1115).intl;
  obj9.text = intl4.string(markAsDismissed(1115).t["NX+WJN"]);
  obj9.onPress = function onPress() {
    return markAsDismissed(ContentDismissActionType.UNKNOWN);
  };
  items2[5] = closure_5(markAsDismissed(5273).Button, obj9);
  obj3.children = items2;
  obj2.children = closure_6(markAsDismissed(6957).BottomSheetScrollView, obj3);
  obj.children = closure_5(View, obj2);
  return closure_5(markAsDismissed(7483).BottomSheet, obj);
}
