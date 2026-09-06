// === Module 8658: UserProfilePersonalWidgetCard ===

// Module 8658 (UserProfilePersonalWidgetCard)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import native from "native" /* 4271 */;
import Text_Text from "Text/Text" /* 4556 */;
import FastImageDefault from "FastImage" /* 5587 */;
import GifTagDefault from "GifTag" /* 8255 */;
import PersonalWidgetExpandCollapseContext from "PersonalWidgetExpandCollapseContext" /* 8659 */;
import PersonalWidgetMarkupUtils from "PersonalWidgetMarkupUtils" /* 8660 */;
import WidgetAssetUtils from "WidgetAssetUtils" /* 8661 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;

require = fn;
function PersonalWidgetText(variant) {
  variant = variant.variant;
  const color = variant.color;
  let children = variant.children;
  const personalWidgetFieldClamp = variant(children[8]).usePersonalWidgetFieldClamp(variant.maxLines, children);
  const items = [children, variant, color];
  ({ lineClamp, onTextLayout } = personalWidgetFieldClamp);
  children = noop.useMemo(() => {
    const obj = { textVariant: variant, linkVariant: variant, textColor: color };
    return obj.parsePersonalWidgetReact(children, undefined, obj);
  }, items);
  return closure_10(variant(children[10]).Text, { variant, color, lineClamp, onTextLayout, children });
}
function PersonalWidgetShowMoreButton() {
  let obj = PersonalWidgetExpandCollapseContext;
  const personalWidgetExpandCollapse = obj.usePersonalWidgetExpandCollapse();
  ({ isExpanded, setIsExpanded: require } = personalWidgetExpandCollapse);
  if (!personalWidgetExpandCollapse.isAnyFieldClipped) {
    if (!isExpanded) {
      return null;
    }
  }
  obj = {
    hitSlop,
    onPress() {
      return _require((arg0) => !arg0);
    },
    accessibilityRole: "button",
    accessibilityState: { expanded: isExpanded },
    children: null
  };
  const intl = util.intl;
  let t = util.t;
  obj = { variant: "text-sm/medium", color: "text-subtle", children: intl.string(isExpanded ? t["6MwJo/"] : t.lBeKY2) };
  t = closure_1_10(Text_Text.Text, obj);
  obj.children = t;
  closure_1_10(hasOwnProperty, obj);
}
function useWidgetImage(userId, image, disableInteraction) {
  _require = userId;
  const GifAutoPlay = require("UserSettings").GifAutoPlay;
  const setting = GifAutoPlay.useSetting();
  let obj = noop;
  let tmp2 = _slicedToArray(noop.useState(false), 2);
  closure_1 = tmp2[1];
  first = setting;
  if (!setting) {
    first = tmp2[0];
  }
  let tmp4 = null;
  if (null != image) {
    tmp4 = null;
    if ("fileId" in image) {
      tmp4 = image;
    }
  }
  _slicedToArray = tmp4;
  const items = [userId, tmp4, first];
  const memo = obj.useMemo(() => {
    let tmp2 = null;
    if (null != image) {
      let obj = WidgetAssetUtils;
      let isAnimated = image.isAnimated;
      if (isAnimated) {
        isAnimated = first;
      }
      obj = { uri: null };
      obj = { animated: isAnimated };
      obj.uri = obj.getWidgetAssetURL(closure_0, image.fileId, obj);
      tmp2 = obj;
    }
    return tmp2;
  }, items);
  obj = { source: memo, showGifTag: null, canToggleAnimation: null, toggleAnimation: null };
  let isAnimated = null != tmp4;
  const callback = obj.useCallback(() => closure_1((arg0) => !arg0), []);
  if (isAnimated) {
    isAnimated = tmp4.isAnimated;
  }
  if (isAnimated) {
    isAnimated = !first;
  }
  if (isAnimated) {
    isAnimated = !disableInteraction;
  }
  obj.showGifTag = isAnimated;
  obj.canToggleAnimation = null != tmp4 && tmp4.isAnimated && !setting && !disableInteraction;
  obj.toggleAnimation = callback;
  return obj;
}
function CoverSection(section) {
  section = section.section;
  ({ userId, disableInteraction } = section);
  const tmp = closure_15();
  const tmp2 = useWidgetImage(userId, section.image, disableInteraction);
  const source = tmp2.source;
  const items = [tmp.coverContent, ];
  let prop = null;
  ({ showGifTag, canToggleAnimation, toggleAnimation } = tmp2);
  if (null != source) {
    prop = tmp.coverContentWithImage;
  }
  let obj = { style: items, pointerEvents: "box-none", children: null };
  items[1] = prop;
  let tmp6 = null;
  if ("" !== section.title) {
    obj = { variant: "heading-xl/semibold", color: "text-strong", maxLines: 2, children: section.title };
    tmp6 = closure_1_10(PersonalWidgetText, obj);
  }
  const items1 = [tmp6, ];
  let tmp9 = null;
  if ("" !== section.subtitle) {
    obj = { variant: "text-sm/medium", color: "text-default", maxLines: 3, children: section.subtitle };
    tmp9 = closure_1_10(PersonalWidgetText, obj);
  }
  items1[1] = tmp9;
  obj.children = items1;
  const tmp3Result = closure_1_11(React5, obj);
  let tmp24Result2 = tmp3Result;
  if (null != source) {
    const obj1 = { theme: ThemeTypes.DARK, primaryColor: null, secondaryColor: null, children: null };
    const obj2 = { style: tmp.coverContainer, children: null };
    if (canToggleAnimation) {
      const obj3 = { style: timestampProducer.absoluteFill, onPress: toggleAnimation, accessibilityRole: "button", accessibilityLabel: null, children: null };
      const intl = util.intl;
      obj3.accessibilityLabel = intl.string(util.t.MxXgrL);
      const obj4 = { source, style: timestampProducer.absoluteFill, resizeMode: "cover" };
      obj3.children = closure_1_10(FastImageDefault, obj4);
      let tmp24Result = closure_1_10(hasOwnProperty, obj3);
      let tmp15 = timestampProducer;
      let tmp14 = importDefault;
    } else {
      tmp14 = importDefault;
      const obj5 = { source, style: null, resizeMode: "cover" };
      tmp15 = timestampProducer;
      obj5.style = timestampProducer.absoluteFill;
      tmp24Result = closure_1_10(FastImageDefault, obj5);
    }
    const items2 = [tmp24Result, , , ];
    tmp24Result = null;
    if (null != source) {
      if ("" !== section.title) {
        const obj6 = { colors, locations, style: tmp15.absoluteFill, pointerEvents: "none" };
        tmp24Result = closure_1_10(tmp14(4987), obj6);
      } else {
        tmp24Result = null;
      }
    }
    items2[1] = tmp24Result;
    items2[2] = tmp3Result;
    let tmp24Result1 = null;
    if (showGifTag) {
      const obj7 = { style: tmp.gifTag };
      tmp24Result1 = closure_1_10(tmp14(8255), obj7);
    }
    items2[3] = tmp24Result1;
    obj2.children = items2;
    obj1.children = closure_1_11(React5, obj2);
    tmp24Result2 = closure_1_10(native.ThemeContextProvider, obj1);
  }
  return tmp24Result2;
}
function FieldRow(field) {
  field = field.field;
  ({ userId, disableInteraction } = field);
  const tmp = closure_15();
  const tmp2 = useWidgetImage(userId, field.image, disableInteraction);
  const source = tmp2.source;
  let tmp3 = null;
  ({ showGifTag, canToggleAnimation, toggleAnimation } = tmp2);
  if (null != source) {
    let obj = { source, style: tmp.fieldImage, resizeMode: "cover" };
    tmp3 = closure_1_10(FastImageDefault, obj);
  }
  obj = { style: tmp.fieldRow, children: null };
  let tmp7Result = tmp3;
  if (null != tmp3) {
    tmp7Result = tmp3;
    if (canToggleAnimation) {
      obj = { onPress: toggleAnimation, accessibilityRole: "button", accessibilityLabel: null, children: null };
      const intl = util.intl;
      obj.accessibilityLabel = intl.string(util.t.MxXgrL);
      const items = [tmp3, ];
      let tmp13 = null;
      if (showGifTag) {
        const obj1 = { style: tmp.gifTagSmall };
        tmp13 = closure_1_10(GifTagDefault, obj1);
      }
      items[1] = tmp13;
      obj.children = items;
      tmp7Result = closure_1_11(hasOwnProperty, obj);
    }
  }
  const items1 = [tmp7Result, ];
  const obj2 = { style: tmp.fieldContent, children: null };
  let tmp16 = null;
  if ("" !== field.title) {
    const obj3 = { variant: "text-sm/medium", color: "text-default", maxLines: 2, children: field.title };
    tmp16 = closure_1_10(PersonalWidgetText, obj3);
  }
  const items2 = [tmp16, ];
  let tmp19 = null;
  if ("" !== field.description) {
    const obj4 = { variant: "text-xs/medium", color: "text-subtle", maxLines: 4, children: field.description };
    tmp19 = closure_1_10(PersonalWidgetText, obj4);
  }
  items2[1] = tmp19;
  obj2.children = items2;
  items1[1] = closure_1_11(React5, obj2);
  obj.children = items1;
  return closure_1_11(React5, obj);
}
function FieldsSection(arg0) {
  ({ userId: require, section, disableInteraction: importDefault } = arg0);
  let tmp2 = null;
  if (0 !== section.fields.length) {
    const obj = { style: tmp.fieldsContainer, children: null };
    const fields = section.fields;
    obj.children = fields.map((field) => closure_2_10(FieldRow, { userId, field, disableInteraction }, field.key));
    tmp2 = closure_10(closure_7, obj);
  }
  return tmp2;
}
function UserProfilePersonalWidgetCardContent(style) {
  const userId = style.userId;
  ({ widget, disableInteraction } = style);
  if (disableInteraction === undefined) {
    disableInteraction = false;
  }
  let obj = userId(504);
  const items = [AuthenticationStore];
  const stateFromStores = obj.useStateFromStores(items, () => AuthenticationStore.getId() === userId);
  obj = { style: style.cardStyle, titleLeadingIcon: null, title: null, trailingAction: null, children: null };
  const tmp = closure_15();
  const tmp5 = disableInteraction;
  obj.titleLeadingIcon = closure_10(userId(8662).NitroWheelIcon, { size: "xs", color: "icon-subtle" });
  obj.title = widget.header;
  let tmp4Result = !stateFromStores;
  if (!stateFromStores) {
    tmp4Result = !disableInteraction;
  }
  if (tmp4Result) {
    obj = { userId, widget };
    tmp4Result = closure_10(tmp5(8663), obj);
  }
  obj.trailingAction = tmp4Result;
  const obj1 = { style: tmp.sectionsContainer, children: null };
  const sections = widget.sections;
  const items1 = [
    sections.map((type, index) => {
      type = type.type;
      if ("cover" === type) {
        let obj = { userId, section: type, disableInteraction };
        return closure_2_10(CoverSection, obj, index);
      } else if ("fields" === type) {
        obj = { userId, section: type, disableInteraction };
        return closure_2_10(FieldsSection, obj, index);
      } else {
        return null;
      }
    }),

  ];
  tmp4Result = null;
  if (!disableInteraction) {
    tmp4Result = closure_10(PersonalWidgetShowMoreButton, {});
  }
  items1[1] = tmp4Result;
  obj1.children = items1;
  obj.children = closure_11(closure_7, obj1);
  return closure_10(disableInteraction(7207), obj);
}
get_ActivityIndicator = fn(17);
({ Pressable: hasOwnProperty, StyleSheet: metroRequire, View: closure_7 } = get_ActivityIndicator);
const ThemeTypes = fn(1074).ThemeTypes;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const colors = ["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.5)", "#000"];
const locations = [0, 0.4, 1];
const hitSlop = { top: 8, bottom: 8, left: 8, right: 8 };
fn(4560);
let createStyles = { coverContainer: null, coverContent: null, coverContentWithImage: null, sectionsContainer: null, fieldsContainer: null, fieldRow: null, fieldImage: null, fieldContent: null, gifTag: null, gifTagSmall: null };
createStyles = { borderRadius: nativeDefault.radii.md, overflow: "hidden", justifyContent: "flex-end" };
createStyles.coverContainer = createStyles;
createStyles.coverContent = { gap: nativeDefault.space.PX_4 };
let obj1 = { gap: nativeDefault.space.PX_4 };
createStyles.coverContentWithImage = { padding: nativeDefault.space.PX_16, marginTop: 56 };
let obj2 = { padding: nativeDefault.space.PX_16, marginTop: 56 };
createStyles.sectionsContainer = { gap: nativeDefault.space.PX_12 };
let obj3 = { gap: nativeDefault.space.PX_12 };
createStyles.fieldsContainer = { gap: nativeDefault.space.PX_12 };
let obj4 = { gap: nativeDefault.space.PX_12 };
createStyles.fieldRow = { flexDirection: "row", alignItems: "flex-start", gap: nativeDefault.space.PX_12 };
let size = { width: nativeDefault.space.PX_48, height: nativeDefault.space.PX_48, borderRadius: nativeDefault.radii.sm };
createStyles.fieldImage = size;
createStyles.fieldContent = { flex: 1 };
const rect = { position: "absolute", top: nativeDefault.space.PX_8, left: nativeDefault.space.PX_8 };
createStyles.gifTag = rect;
const rect1 = { position: "absolute", top: nativeDefault.space.PX_4, left: nativeDefault.space.PX_4 };
createStyles.gifTagSmall = rect1;
let closure_15 = createStyles.createStyles(createStyles);
size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfilePersonalWidgetCard.tsx");

export default function UserProfilePersonalWidgetCard(arg0) {
  let obj = { children: null };
  obj = {};
  const merged = Object.assign(arg0);
  obj.children = closure_1_10(UserProfilePersonalWidgetCardContent, obj);
  return closure_1_10(PersonalWidgetExpandCollapseContext.PersonalWidgetExpandCollapseProvider, obj);
};