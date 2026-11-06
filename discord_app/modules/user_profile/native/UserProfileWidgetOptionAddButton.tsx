// === Module 15146: UserProfileWidgetOptionAddButton ===

// Module 15146 (UserProfileWidgetOptionAddButton)
import nativeDefault from "native" /* 575 */;
import Text_Text from "Text/Text" /* 5781 */;
import FastImageDefault from "FastImage" /* 5872 */;
import CirclePlusIcon from "CirclePlusIcon" /* 11652 */;
import useGameNameAndCoverImageDefault from "useGameNameAndCoverImage" /* 15147 */;
import AddWidgetButtonConfig from "AddWidgetButtonConfig" /* 15148 */;
import noop from "module_19" /* 19 */;

require = fn;
function PlaceholderCover(arg0) {
  ({ gameId, style } = arg0);
  const tmp = closure_8();
  const coverImageUrl = useGameNameAndCoverImageDefault(gameId).coverImageUrl;
  const obj = { style: null, importantForAccessibility: "no-hide-descendants", accessibilityElementsHidden: true, children: null };
  items = [tmp.cover, style];
  obj.style = items;
  let tmp4Result = null != coverImageUrl;
  if (tmp4Result) {
    const obj2 = { source: null, style: null };
    const obj3 = { uri: coverImageUrl };
    obj2.source = obj3;
    obj2.style = tmp.coverImage;
    tmp4Result = hasOwnProperty(FastImageDefault, obj2);
  }
  obj.children = tmp4Result;
  return hasOwnProperty(React4, obj);
}
function PlaceholderCoverGrid(gameIds) {
  gameIds = gameIds.gameIds;
  closure_0 = tmp;
  let obj = { style: closure_8().coverRow, children: null };
  const substr = gameIds.slice(0, tmp);
  obj.children = substr.map((gameId, index) => {
    const obj = { gameId, style: { width: `${100 / (closure_0 + 0.1 * (closure_0 - 1))}%` } };
    return hasOwnProperty(PlaceholderCover, obj, index);
  });
  return closure_5(closure_4, obj);
}
function PlaceholderDetailsCard(gameId) {
  const variant = gameId.variant;
  const tmp = closure_8();
  const sum = tmp2 + 0.1 * (tmp2 - 1);
  let str = "50%";
  if ("compact" === variant) {
    str = "30%";
  }
  const obj = { style: tmp.detailsCard, children: null };
  const obj2 = { gameId: gameId.gameId, style: { width: `${100 / tmp3}%` } };
  items = [hasOwnProperty(PlaceholderCover, obj2), , ];
  const obj4 = { style: { width: `${15.000000000000002 / tmp3}%` } };
  items[1] = hasOwnProperty(React4, obj4);
  const obj6 = { style: tmp.textColumn, children: null };
  const obj7 = { style: null };
  const items1 = [tmp.textBar, { width: str }];
  obj7.style = items1;
  const items2 = [hasOwnProperty(React4, obj7), hasOwnProperty(React4, { style: tmp.textBar }), hasOwnProperty(React4, { style: tmp.textBar })];
  obj6.children = items2;
  items[2] = timestampProducer(React4, obj6);
  obj.children = items;
  return timestampProducer(React4, obj);
}
get_ActivityIndicator = fn(17);
({ Pressable: c3, StyleSheet, View: closure_4 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: closure_6 } = jsxProd);
const NUMBER_OF_COLUMNS_BY_VARIANT = { default: 4, compact: 3 };
const createStyles = fn(5170);
let obj3 = { button: { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_MUTED, borderRadius: nativeDefault.radii.md, overflow: "hidden", alignSelf: "stretch" }, coverRow: { flexDirection: "row", justifyContent: "space-between" }, cover: null, coverImage: null, detailsCard: null, textColumn: null, textBar: null, overlay: null };
let obj4 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_MUTED, borderRadius: nativeDefault.radii.md, overflow: "hidden", alignSelf: "stretch" };
obj3.cover = { aspectRatio: 0.75, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED, overflow: "hidden" };
let obj6 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj6.opacity = 0.2;
obj3.coverImage = obj6;
obj3.detailsCard = { flexDirection: "row", alignItems: "center" };
obj3.textColumn = { flex: 1, flexDirection: "column", justifyContent: "center", gap: nativeDefault.space.PX_8 };
let obj5 = { aspectRatio: 0.75, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED, overflow: "hidden" };
obj3.textBar = { height: 12, borderRadius: 6, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED };
let obj8 = {};
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
obj8.alignItems = "center";
obj8.justifyContent = "center";
obj8.gap = nativeDefault.space.PX_8;
obj3.overlay = obj8;
let closure_8 = createStyles.createStyles(obj3);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileWidgetOptionAddButton.tsx");

export default function UserProfileWidgetOptionAddButton(onPress) {
  ({ widget, variant } = onPress);
  if (variant === undefined) {
    variant = "default";
  }
  ({ width: require, padding } = onPress);
  if (padding === undefined) {
    padding = nativeDefault.space.PX_12;
  }
  const tmp3 = closure_8();
  const button = tmp3;
  const obj = {
    onPress: onPress.onPress,
    accessibilityRole: "button",
    accessibilityLabel: AddWidgetButtonConfig.getAddWidgetAriaLabel(widget),
    style(pressed) {
      pressed = pressed.pressed;
      items = [button.button, { padding }, , ];
      let tmp2 = null != require;
      if (tmp2) {
        const obj2 = { width: tmp };
        tmp2 = obj2;
      }
      items[2] = tmp2;
      if (pressed) {
        pressed = { opacity: 0.8 };
      }
      items[3] = pressed;
      return items;
    },
    children: null
  };
  const addWidgetPlaceholder = AddWidgetButtonConfig.getAddWidgetPlaceholder(widget);
  const variant2 = addWidgetPlaceholder.variant;
  if ("grid" === variant2) {
    const obj4 = { gameIds: addWidgetPlaceholder.applicationIds, variant };
    let tmp9 = hasOwnProperty(PlaceholderCoverGrid, obj4);
  } else {
    tmp9 = null;
    if ("details" === variant2) {
      const obj5 = { gameId: addWidgetPlaceholder.applicationId, variant };
      tmp9 = hasOwnProperty(PlaceholderDetailsCard, obj5);
    }
  }
  items = [tmp9, ];
  const obj6 = { style: tmp3.overlay, children: null };
  const items1 = [hasOwnProperty(CirclePlusIcon.CirclePlusIcon, { size: "md", color: nativeDefault.colors.TEXT_DEFAULT }), ];
  const obj8 = { variant: "body-md/medium", color: "text-strong", children: null };
  const obj7 = { size: "md", color: nativeDefault.colors.TEXT_DEFAULT };
  obj8.children = AddWidgetButtonConfig.getAddWidgetTitle(widget);
  items1[1] = hasOwnProperty(Text_Text.Text, obj8);
  obj6.children = items1;
  items[1] = timestampProducer(React4, obj6);
  obj.children = items;
  return timestampProducer(React3, obj);
};
export { NUMBER_OF_COLUMNS_BY_VARIANT };
export const GRID_GAP_TO_COVER_RATIO = 0.1;