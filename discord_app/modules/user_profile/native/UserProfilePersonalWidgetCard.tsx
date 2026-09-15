// discord_app/modules/user_profile/native/UserProfilePersonalWidgetCard.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import native from "../../../../discord_common/js/packages/design/native.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import FastImageDefault from "../../../components_native/common/FastImage.tsx";
import GifTagDefault from "GifTag.tsx";
import PersonalWidgetExpandCollapseContext from "PersonalWidgetExpandCollapseContext.tsx";
import PersonalWidgetMarkupUtils from "../../markup/PersonalWidgetMarkupUtils.native.tsx";
import WidgetAssetUtils from "../WidgetAssetUtils.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import AuthenticationStore from "../../../stores/AuthenticationStore.tsx";

require = fn;
function PersonalWidgetText(variant) {
  variant = variant.variant;
  const color = variant.color;
  const children = variant.children;
  const personalWidgetFieldClamp = variant(children[8]).usePersonalWidgetFieldClamp(variant.maxLines, children);
  const items = [children, variant, color];
  ({ lineClamp, onTextLayout } = personalWidgetFieldClamp);
  const children1 = noop.useMemo(
    () =>
      PersonalWidgetMarkupUtils.parsePersonalWidgetReact(children, undefined, {
        textVariant: variant,
        linkVariant: variant,
        textColor: color,
      }),
    items,
  );
  return closure_10(variant(children[10]).Text, { variant, color, lineClamp, onTextLayout, children: children1 });
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
    children: null,
  };
  const intl = util.intl;
  let t = util.t;
  t = closure_1_10(Text_Text.Text, {
    variant: "text-sm/medium",
    color: "text-subtle",
    children: intl.string(isExpanded ? t["6MwJo/"] : t.lBeKY2),
  });
  obj2.children = t;
  closure_1_10(hasOwnProperty, obj2);
  const obj3 = {
    variant: "text-sm/medium",
    color: "text-subtle",
    children: intl.string(isExpanded ? t["6MwJo/"] : t.lBeKY2),
  };
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
  const tmp = closure_15();
  const tmp2 = useWidgetImage(userId, section.image, disableInteraction);
  const source = tmp2.source;
  const items = [tmp.coverContent];
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
    tmp6 = closure_1_10(PersonalWidgetText, obj2);
  }
  const items1 = [tmp6];
  let tmp9 = null;
  if ("" !== section.subtitle) {
    const obj3 = { variant: "text-sm/medium", color: "text-default", maxLines: 3, children: section.subtitle };
    tmp9 = closure_1_10(PersonalWidgetText, obj3);
  }
  items1[1] = tmp9;
  obj.children = items1;
  const tmp3Result = closure_1_11(React5, obj);
  let tmp24Result6 = tmp3Result;
  if (null != source) {
    const obj4 = { theme: ThemeTypes.DARK, primaryColor: null, secondaryColor: null, children: null };
    const obj5 = { style: tmp.coverContainer, children: null };
    if (canToggleAnimation) {
      const obj6 = {
        style: timestampProducer.absoluteFill,
        onPress: toggleAnimation,
        accessibilityRole: "button",
        accessibilityLabel: null,
        children: null,
      };
      const intl = util.intl;
      obj6.accessibilityLabel = intl.string(util.t.MxXgrL);
      const obj7 = { source, style: timestampProducer.absoluteFill, resizeMode: "cover" };
      obj6.children = closure_1_10(FastImageDefault, obj7);
      let tmp24Result = closure_1_10(hasOwnProperty, obj6);
      let tmp15 = timestampProducer;
      let tmp14 = importDefault;
    } else {
      tmp14 = importDefault;
      const obj8 = { source, style: null, resizeMode: "cover" };
      tmp15 = timestampProducer;
      obj8.style = timestampProducer.absoluteFill;
      tmp24Result = closure_1_10(FastImageDefault, obj8);
    }
    const items2 = [tmp24Result, , ,];
    let tmp24Result4 = null;
    if (null != source) {
      if ("" !== section.title) {
        const obj9 = { colors, locations, style: tmp15.absoluteFill, pointerEvents: "none" };
        tmp24Result4 = closure_1_10(tmp14(5071), obj9);
      } else {
        tmp24Result4 = null;
      }
    }
    items2[1] = tmp24Result4;
    items2[2] = tmp3Result;
    let tmp24Result5 = null;
    if (showGifTag) {
      const obj10 = { style: tmp.gifTag };
      tmp24Result5 = closure_1_10(tmp14(8374), obj10);
    }
    items2[3] = tmp24Result5;
    obj5.children = items2;
    obj4.children = closure_1_11(React5, obj5);
    tmp24Result6 = closure_1_10(native.ThemeContextProvider, obj4);
  }
  return tmp24Result6;
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
    const obj = { source, style: tmp.fieldImage, resizeMode: "cover" };
    tmp3 = closure_1_10(FastImageDefault, obj);
  }
  const obj2 = { style: tmp.fieldRow, children: null };
  let tmp7Result = tmp3;
  if (null != tmp3) {
    tmp7Result = tmp3;
    if (canToggleAnimation) {
      const obj3 = { onPress: toggleAnimation, accessibilityRole: "button", accessibilityLabel: null, children: null };
      const intl = util.intl;
      obj3.accessibilityLabel = intl.string(util.t.MxXgrL);
      const items = [tmp3];
      let tmp13 = null;
      if (showGifTag) {
        const obj4 = { style: tmp.gifTagSmall };
        tmp13 = closure_1_10(GifTagDefault, obj4);
      }
      items[1] = tmp13;
      obj3.children = items;
      tmp7Result = closure_1_11(hasOwnProperty, obj3);
    }
  }
  const items1 = [tmp7Result];
  const obj5 = { style: tmp.fieldContent, children: null };
  let tmp16 = null;
  if ("" !== field.title) {
    const obj6 = { variant: "text-sm/medium", color: "text-default", maxLines: 2, children: field.title };
    tmp16 = closure_1_10(PersonalWidgetText, obj6);
  }
  const items2 = [tmp16];
  let tmp19 = null;
  if ("" !== field.description) {
    const obj7 = { variant: "text-xs/medium", color: "text-subtle", maxLines: 4, children: field.description };
    tmp19 = closure_1_10(PersonalWidgetText, obj7);
  }
  items2[1] = tmp19;
  obj5.children = items2;
  items1[1] = closure_1_11(React5, obj5);
  obj2.children = items1;
  return closure_1_11(React5, obj2);
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
  const tmp = closure_15();
  const items = [AuthenticationStore];
  const stateFromStores = userId(504).useStateFromStores(items, () => AuthenticationStore.getId() === userId);
  let obj2 = { style: style.cardStyle, titleLeadingIcon: null, title: null, trailingAction: null, children: null };
  let obj = userId(504);
  const tmp5 = disableInteraction;
  obj2.titleLeadingIcon = closure_10(userId(8788).NitroWheelIcon, { size: "xs", color: "icon-subtle" });
  obj2.title = widget.header;
  let tmp4Result = !stateFromStores;
  if (!stateFromStores) {
    tmp4Result = !disableInteraction;
  }
  if (tmp4Result) {
    const obj3 = { userId, widget };
    tmp4Result = closure_10(tmp5(8789), obj3);
  }
  obj2.trailingAction = tmp4Result;
  const obj4 = { style: tmp.sectionsContainer, children: null };
  const sections = widget.sections;
  const items1 = [
    sections.map((type, index) => {
      type = type.type;
      if ("cover" === type) {
        const obj2 = { userId, section: type, disableInteraction };
        return closure_2_10(CoverSection, obj2, index);
      } else if ("fields" === type) {
        const obj = { userId, section: type, disableInteraction };
        return closure_2_10(FieldsSection, obj, index);
      } else {
        return null;
      }
    }),
  ];
  let tmp4Result2 = null;
  if (!disableInteraction) {
    tmp4Result2 = closure_10(PersonalWidgetShowMoreButton, {});
  }
  items1[1] = tmp4Result2;
  obj4.children = items1;
  obj2.children = closure_11(closure_7, obj4);
  return closure_10(disableInteraction(7314), obj2);
}
get_ActivityIndicator = fn(17);
({ Pressable: hasOwnProperty, StyleSheet: metroRequire, View: closure_7 } = get_ActivityIndicator);
const ThemeTypes = fn(1074).ThemeTypes;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const colors = ["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.5)", "#000"];
const locations = [0, 0.4, 1];
const hitSlop = { top: 8, bottom: 8, left: 8, right: 8 };
const createStyles = fn(4639);
let obj2 = {
  coverContainer: { borderRadius: nativeDefault.radii.md, overflow: "hidden", justifyContent: "flex-end" },
  coverContent: null,
  coverContentWithImage: null,
  sectionsContainer: null,
  fieldsContainer: null,
  fieldRow: null,
  fieldImage: null,
  fieldContent: null,
  gifTag: null,
  gifTagSmall: null,
};
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
let size = {
  width: nativeDefault.space.PX_48,
  height: nativeDefault.space.PX_48,
  borderRadius: nativeDefault.radii.sm,
};
obj2.fieldImage = size;
obj2.fieldContent = { flex: 1 };
const rect = { position: "absolute", top: nativeDefault.space.PX_8, left: nativeDefault.space.PX_8 };
obj2.gifTag = rect;
const rect1 = { position: "absolute", top: nativeDefault.space.PX_4, left: nativeDefault.space.PX_4 };
obj2.gifTagSmall = rect1;
let closure_15 = createStyles.createStyles(obj2);
size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfilePersonalWidgetCard.tsx");

export default function UserProfilePersonalWidgetCard(arg0) {
  const obj = { children: null };
  const merged = Object.assign(arg0);
  obj.children = closure_1_10(UserProfilePersonalWidgetCardContent, {});
  return closure_1_10(PersonalWidgetExpandCollapseContext.PersonalWidgetExpandCollapseProvider, obj);
}
