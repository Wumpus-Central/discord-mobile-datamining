// === Module 14963: UserProfilePersonalWidgetCard ===

// Module 14963 (UserProfilePersonalWidgetCard)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import native from "native" /* 5080 */;
import Text_Text from "Text/Text" /* 5624 */;
import FastImageDefault from "FastImage" /* 5717 */;
import GifTagDefault from "GifTag" /* 8573 */;
import PersonalWidgetExpandCollapseContext from "PersonalWidgetExpandCollapseContext" /* 14964 */;
import PersonalWidgetMarkupUtils from "PersonalWidgetMarkupUtils" /* 14965 */;
import WidgetAssetUtils from "WidgetAssetUtils" /* 14966 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
function PersonalWidgetText(variant) {
  variant = variant.variant;
  const color = variant.color;
  const children = variant.children;
  const personalWidgetFieldClamp = variant(children[7]).usePersonalWidgetFieldClamp(variant.maxLines, children);
  const items = [children, variant, color];
  ({ lineClamp, onTextLayout } = personalWidgetFieldClamp);
  const children1 = noop.useMemo(() => PersonalWidgetMarkupUtils.parsePersonalWidgetReact(children, undefined, { textVariant: variant, linkVariant: variant, textColor: color }), items);
  return closure_9(variant(children[9]).Text, { variant, color, lineClamp, onTextLayout, children: children1 });
}
function PersonalWidgetShowMoreButton() {
  const personalWidgetExpandCollapse = PersonalWidgetExpandCollapseContext.usePersonalWidgetExpandCollapse();
  ({ isExpanded, setIsExpanded: require } = personalWidgetExpandCollapse);
  if (!personalWidgetExpandCollapse.isAnyFieldClipped) {
    if (!isExpanded) {
      return null;
    }
  }
  const obj2 = {
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
  t = React7(Text_Text.Text, { variant: "text-sm/medium", color: "text-subtle", children: intl.string(isExpanded ? t["6MwJo/"] : t.lBeKY2) });
  obj2.children = t;
  React7(hasOwnProperty, obj2);
  const obj3 = { variant: "text-sm/medium", color: "text-subtle", children: intl.string(isExpanded ? t["6MwJo/"] : t.lBeKY2) };
}
function useWidgetImage(userId, image, disableInteraction) {
  _require = userId;
  const GifAutoPlay = require("UserSettings").GifAutoPlay;
  const setting = GifAutoPlay.useSetting();
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
  const memo = noop.useMemo(() => {
    let tmp2 = null;
    if (null != image) {
      let isAnimated = image.isAnimated;
      if (isAnimated) {
        isAnimated = first;
      }
      const obj2 = { uri: null };
      const obj3 = { animated: isAnimated };
      obj2.uri = WidgetAssetUtils.getWidgetAssetURL(closure_0, image.fileId, obj3);
      tmp2 = obj2;
    }
    return tmp2;
  }, items);
  let obj2 = { source: memo, showGifTag: null, canToggleAnimation: null, toggleAnimation: null };
  let isAnimated = null != tmp4;
  const callback = noop.useCallback(() => closure_1((arg0) => !arg0), []);
  if (isAnimated) {
    isAnimated = tmp4.isAnimated;
  }
  if (isAnimated) {
    isAnimated = !first;
  }
  if (isAnimated) {
    isAnimated = !disableInteraction;
  }
  obj2.showGifTag = isAnimated;
  obj2.canToggleAnimation = null != tmp4 && tmp4.isAnimated && !setting && !disableInteraction;
  obj2.toggleAnimation = callback;
  return obj2;
}
function CoverSection(section) {
  section = section.section;
  ({ userId, disableInteraction } = section);
  const tmp = closure_14();
  const tmp2 = useWidgetImage(userId, section.image, disableInteraction);
  const source = tmp2.source;
  const items = [tmp.coverContent, ];
  let prop = null;
  ({ showGifTag, canToggleAnimation, toggleAnimation } = tmp2);
  if (null != source) {
    prop = tmp.coverContentWithImage;
  }
  const obj = { style: items, pointerEvents: "box-none", children: null };
  items[1] = prop;
  let tmp6 = null;
  if ("" !== section.title) {
    const obj2 = { variant: "heading-xl/semibold", color: "text-strong", maxLines: 2, children: section.title };
    tmp6 = React7(PersonalWidgetText, obj2);
  }
  const items1 = [tmp6, ];
  let tmp9 = null;
  if ("" !== section.subtitle) {
    const obj3 = { variant: "text-sm/medium", color: "text-default", maxLines: 3, children: section.subtitle };
    tmp9 = React7(PersonalWidgetText, obj3);
  }
  items1[1] = tmp9;
  obj.children = items1;
  const tmp3Result = closure_1_10(React5, obj);
  let tmp24Result6 = tmp3Result;
  if (null != source) {
    const obj4 = { theme: ThemeTypes.DARK, primaryColor: null, secondaryColor: null, children: null };
    const obj5 = { style: tmp.coverContainer, children: null };
    if (canToggleAnimation) {
      const obj6 = { style: timestampProducer.absoluteFill, onPress: toggleAnimation, accessibilityRole: "button", accessibilityLabel: null, children: null };
      const intl = util.intl;
      obj6.accessibilityLabel = intl.string(util.t.MxXgrL);
      const obj7 = { source, style: timestampProducer.absoluteFill, resizeMode: "cover" };
      obj6.children = React7(FastImageDefault, obj7);
      let tmp24Result = React7(hasOwnProperty, obj6);
      let tmp15 = timestampProducer;
      let tmp14 = importDefault;
    } else {
      tmp14 = importDefault;
      const obj8 = { source, style: null, resizeMode: "cover" };
      tmp15 = timestampProducer;
      obj8.style = timestampProducer.absoluteFill;
      tmp24Result = React7(FastImageDefault, obj8);
    }
    const items2 = [tmp24Result, , , ];
    let tmp24Result4 = null;
    if (null != source) {
      if ("" !== section.title) {
        const obj9 = { colors, locations, style: tmp15.absoluteFill, pointerEvents: "none" };
        tmp24Result4 = React7(tmp14(5587), obj9);
      } else {
        tmp24Result4 = null;
      }
    }
    items2[1] = tmp24Result4;
    items2[2] = tmp3Result;
    let tmp24Result5 = null;
    if (showGifTag) {
      const obj10 = { style: tmp.gifTag };
      tmp24Result5 = React7(tmp14(8573), obj10);
    }
    items2[3] = tmp24Result5;
    obj5.children = items2;
    obj4.children = closure_1_10(React5, obj5);
    tmp24Result6 = React7(native.ThemeContextProvider, obj4);
  }
  return tmp24Result6;
}
function FieldRow(field) {
  field = field.field;
  ({ userId, disableInteraction } = field);
  const tmp = closure_14();
  const tmp2 = useWidgetImage(userId, field.image, disableInteraction);
  const source = tmp2.source;
  let tmp3 = null;
  ({ showGifTag, canToggleAnimation, toggleAnimation } = tmp2);
  if (null != source) {
    const obj = { source, style: tmp.fieldImage, resizeMode: "cover" };
    tmp3 = React7(FastImageDefault, obj);
  }
  const obj2 = { style: tmp.fieldRow, children: null };
  let tmp7Result = tmp3;
  if (null != tmp3) {
    tmp7Result = tmp3;
    if (canToggleAnimation) {
      const obj3 = { onPress: toggleAnimation, accessibilityRole: "button", accessibilityLabel: null, children: null };
      const intl = util.intl;
      obj3.accessibilityLabel = intl.string(util.t.MxXgrL);
      const items = [tmp3, ];
      let tmp13 = null;
      if (showGifTag) {
        const obj4 = { style: tmp.gifTagSmall };
        tmp13 = React7(GifTagDefault, obj4);
      }
      items[1] = tmp13;
      obj3.children = items;
      tmp7Result = closure_1_10(hasOwnProperty, obj3);
    }
  }
  const items1 = [tmp7Result, ];
  const obj5 = { style: tmp.fieldContent, children: null };
  let tmp16 = null;
  if ("" !== field.title) {
    const obj6 = { variant: "text-sm/medium", color: "text-default", maxLines: 2, children: field.title };
    tmp16 = React7(PersonalWidgetText, obj6);
  }
  const items2 = [tmp16, ];
  let tmp19 = null;
  if ("" !== field.description) {
    const obj7 = { variant: "text-xs/medium", color: "text-subtle", maxLines: 4, children: field.description };
    tmp19 = React7(PersonalWidgetText, obj7);
  }
  items2[1] = tmp19;
  obj5.children = items2;
  items1[1] = closure_1_10(React5, obj5);
  obj2.children = items1;
  return closure_1_10(React5, obj2);
}
function FieldsSection(arg0) {
  ({ userId: require, section, disableInteraction: importDefault } = arg0);
  let tmp2 = null;
  if (0 !== section.fields.length) {
    const obj = { style: tmp.fieldsContainer, children: null };
    const fields = section.fields;
    obj.children = fields.map((field) => React7(FieldRow, { userId, field, disableInteraction }, field.key));
    tmp2 = closure_9(closure_7, obj);
  }
  return tmp2;
}
function UserProfilePersonalWidgetCardContent(style) {
  const userId = style.userId;
  ({ widget, disableInteraction } = style);
  if (disableInteraction === undefined) {
    disableInteraction = false;
  }
  let obj = { userId, widget, style: style.cardStyle, titleLeadingIcon: null, title: null, disableInteraction: null, children: null };
  const tmp = closure_14();
  obj.titleLeadingIcon = closure_9(userId(9528).NitroWheelIcon, { size: "xs", color: "icon-subtle" });
  obj.title = widget.header;
  obj.disableInteraction = disableInteraction;
  let obj2 = { style: tmp.sectionsContainer, children: null };
  const sections = widget.sections;
  const items = [
    sections.map(function renderSection(type, index) {
      type = type.type;
      if ("cover" === type) {
        const obj2 = { userId, section: type, disableInteraction };
        return React7(CoverSection, obj2, index);
      } else if ("fields" === type) {
        const obj = { userId, section: type, disableInteraction };
        return React7(FieldsSection, obj, index);
      } else {
        return null;
      }
    }),

  ];
  let tmp2Result = null;
  if (!disableInteraction) {
    tmp2Result = closure_9(PersonalWidgetShowMoreButton, {});
  }
  items[1] = tmp2Result;
  obj2.children = items;
  obj.children = closure_10(closure_7, obj2);
  return closure_9(disableInteraction(14956), obj);
}
get_ActivityIndicator = fn(17);
({ Pressable: hasOwnProperty, StyleSheet: metroRequire, View: closure_7 } = get_ActivityIndicator);
const ThemeTypes = fn(1072).ThemeTypes;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const colors = ["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.5)", "#000"];
const locations = [0, 0.4, 1];
const hitSlop = { top: 8, bottom: 8, left: 8, right: 8 };
const createStyles = fn(5014);
let obj2 = { coverContainer: { borderRadius: nativeDefault.radii.md, overflow: "hidden", justifyContent: "flex-end" }, coverContent: null, coverContentWithImage: null, sectionsContainer: null, fieldsContainer: null, fieldRow: null, fieldImage: null, fieldContent: null, gifTag: null, gifTagSmall: null };
let obj3 = { borderRadius: nativeDefault.radii.md, overflow: "hidden", justifyContent: "flex-end" };
obj2.coverContent = { gap: nativeDefault.space.PX_4 };
let obj4 = { gap: nativeDefault.space.PX_4 };
obj2.coverContentWithImage = { padding: nativeDefault.space.PX_16, marginTop: 56 };
let obj5 = { padding: nativeDefault.space.PX_16, marginTop: 56 };
obj2.sectionsContainer = { gap: nativeDefault.space.PX_12 };
let obj6 = { gap: nativeDefault.space.PX_12 };
obj2.fieldsContainer = { gap: nativeDefault.space.PX_12 };
let obj7 = { gap: nativeDefault.space.PX_12 };
obj2.fieldRow = { flexDirection: "row", alignItems: "flex-start", gap: nativeDefault.space.PX_12 };
let size = { width: nativeDefault.space.PX_48, height: nativeDefault.space.PX_48, borderRadius: nativeDefault.radii.sm };
obj2.fieldImage = size;
obj2.fieldContent = { flex: 1 };
const rect = { position: "absolute", top: nativeDefault.space.PX_8, left: nativeDefault.space.PX_8 };
obj2.gifTag = rect;
const rect1 = { position: "absolute", top: nativeDefault.space.PX_4, left: nativeDefault.space.PX_4 };
obj2.gifTagSmall = rect1;
let closure_14 = createStyles.createStyles(obj2);
size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfilePersonalWidgetCard.tsx");

export default function UserProfilePersonalWidgetCard(arg0) {
  const obj = { children: null };
  const merged = Object.assign(arg0);
  obj.children = React7(UserProfilePersonalWidgetCardContent, {});
  return React7(PersonalWidgetExpandCollapseContext.PersonalWidgetExpandCollapseProvider, obj);
};