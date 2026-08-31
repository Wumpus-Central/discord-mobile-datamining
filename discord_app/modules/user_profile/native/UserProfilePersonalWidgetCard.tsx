// === Module 8748: PersonalWidgetText ===

// Module 8748 (PersonalWidgetText)
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import ManaContext from "ManaContext" /* 4174 */;
import preloadDefault from "preload" /* 5461 */;
import GifTagDefault from "GifTag" /* 8522 */;
import PersonalWidgetExpandCollapseProvider from "PersonalWidgetExpandCollapseProvider" /* 8749 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import closure_8 from "fetchFingerprint" /* 1218 */;
import { ThemeTypes } from "ME" /* 676 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4448 */;

require = arg1;
function PersonalWidgetText(variant) {
  variant = variant.variant;
  const color = variant.color;
  let children = variant.children;
  const personalWidgetFieldClamp = variant(children[8]).usePersonalWidgetFieldClamp(variant.maxLines, children);
  const items = [children, variant, color];
  ({ lineClamp, onTextLayout } = personalWidgetFieldClamp);
  children = React.useMemo(() => {
    let obj = variant(children[9]);
    obj = { textVariant: variant, linkVariant: variant, textColor: color };
    return obj.parsePersonalWidgetReact(children, undefined, obj);
  }, items);
  return callback2(variant(children[10]).Text, { variant, color, lineClamp, onTextLayout, children });
}
function PersonalWidgetShowMoreButton() {
  let obj = PersonalWidgetExpandCollapseProvider;
  const personalWidgetExpandCollapse = obj.usePersonalWidgetExpandCollapse();
  ({ isExpanded, setIsExpanded: require } = personalWidgetExpandCollapse);
  if (!personalWidgetExpandCollapse.isAnyFieldClipped) {
    if (!isExpanded) {
      return null;
    }
  }
  obj = {
    hitSlop: closure_14,
    onPress() {
      return callback((arg0) => !arg0);
    },
    accessibilityRole: "button",
    accessibilityState: { expanded: isExpanded },
    children: null
  };
  const intl = tmp(1236).intl;
  let t = tmp(1236).t;
  obj = { variant: "text-sm/medium", color: "text-subtle", children: intl.string(isExpanded ? t["6MwJo/"] : t.lBeKY2) };
  t = tmp5(tmp(4444).Text, obj);
  obj[4] = t;
  closure_10(closure_5, obj);
}
function useWidgetImage(userId, image, disableInteraction) {
  const _require = userId;
  const GifAutoPlay = _require(first[12]).GifAutoPlay;
  const setting = GifAutoPlay.useSetting();
  let obj = React;
  let tmp2 = callback(React.useState(false), 2);
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
  callback = tmp4;
  const items = [userId, tmp4, first];
  const memo = obj.useMemo(() => {
    let tmp2 = null;
    if (null != closure_3) {
      let obj = userId(first[13]);
      let isAnimated = tmp.isAnimated;
      if (isAnimated) {
        isAnimated = first;
      }
      obj = { uri: null };
      obj = { animated: null };
      obj[0] = isAnimated;
      obj[0] = obj.getWidgetAssetURL(userId, tmp.fileId, obj);
      tmp2 = obj;
      const tmp5 = userId;
    }
    return tmp2;
  }, items);
  obj = { source: memo, showGifTag: null, canToggleAnimation: null, toggleAnimation: null };
  let isAnimated = null != tmp4;
  callback = obj.useCallback(() => callback((arg0) => !arg0), []);
  if (isAnimated) {
    isAnimated = tmp4.isAnimated;
  }
  if (isAnimated) {
    isAnimated = !first;
  }
  if (isAnimated) {
    isAnimated = !disableInteraction;
  }
  obj[1] = isAnimated;
  obj[2] = null != tmp4 && tmp4.isAnimated && !setting && !disableInteraction;
  obj[3] = callback;
  return obj;
}
function CoverSection(section) {
  section = section.section;
  ({ userId, disableInteraction } = section);
  const tmp = callback3();
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
    obj = { variant: "heading-xl/semibold", color: "text-strong", maxLines: 2, children: null };
    obj[3] = section.title;
    tmp6 = callback2(PersonalWidgetText, obj);
  }
  const items1 = [tmp6, ];
  let tmp9 = null;
  if ("" !== section.subtitle) {
    obj = { variant: "text-sm/medium", color: "text-default", maxLines: 3, children: null };
    obj[3] = section.subtitle;
    tmp9 = callback2(PersonalWidgetText, obj);
  }
  items1[1] = tmp9;
  obj[2] = items1;
  const tmp3Result = closure_11(closure_7, obj);
  let tmp24Result2 = tmp3Result;
  if (null != source) {
    obj1 = { theme: null, primaryColor: null, secondaryColor: null, children: null };
    obj1[0] = ThemeTypes.DARK;
    const obj2 = { style: null, children: null };
    obj2[0] = tmp.coverContainer;
    if (canToggleAnimation) {
      const obj3 = { style: null, onPress: null, accessibilityRole: "button", accessibilityLabel: null, children: null };
      obj3[0] = closure_6.absoluteFill;
      obj3[1] = toggleAnimation;
      const intl = tmp25(1236).intl;
      obj3[3] = intl.string(tmp25(1236).t.MxXgrL);
      const obj4 = { source: null, style: null, resizeMode: "cover" };
      obj4[0] = source;
      obj4[1] = closure_6.absoluteFill;
      obj3[4] = tmp24(preloadDefault, obj4);
      let tmp24Result = tmp24(closure_5, obj3);
      let tmp15 = closure_6;
      let tmp14 = importDefault;
    } else {
      tmp14 = importDefault;
      const obj5 = { source: null, style: null, resizeMode: "cover" };
      obj5[0] = source;
      tmp15 = closure_6;
      obj5[1] = closure_6.absoluteFill;
      tmp24Result = tmp24(preloadDefault, obj5);
    }
    const items2 = [tmp24Result, , , ];
    tmp24Result = null;
    if (null != source) {
      if ("" !== section.title) {
        const obj6 = { colors: null, locations: null, style: null, pointerEvents: "none" };
        obj6[0] = closure_12;
        obj6[1] = closure_13;
        obj6[2] = tmp15.absoluteFill;
        tmp24Result = tmp24(tmp14(4908), obj6);
      } else {
        tmp24Result = null;
      }
    }
    items2[1] = tmp24Result;
    items2[2] = tmp3Result;
    let tmp24Result1 = null;
    if (showGifTag) {
      const obj7 = { style: null };
      obj7[0] = tmp.gifTag;
      tmp24Result1 = tmp24(tmp14(8522), obj7);
    }
    items2[3] = tmp24Result1;
    obj2[1] = items2;
    obj1[3] = tmp3(tmp4, obj2);
    tmp24Result2 = tmp24(ManaContext.ThemeContextProvider, obj1);
  }
  return tmp24Result2;
}
function FieldRow(field) {
  field = field.field;
  ({ userId, disableInteraction } = field);
  const tmp = callback3();
  const tmp2 = useWidgetImage(userId, field.image, disableInteraction);
  const source = tmp2.source;
  let tmp3 = null;
  ({ showGifTag, canToggleAnimation, toggleAnimation } = tmp2);
  if (null != source) {
    let obj = { source: null, style: null, resizeMode: "cover" };
    obj[0] = source;
    obj[1] = tmp.fieldImage;
    tmp3 = callback2(preloadDefault, obj);
  }
  obj = { style: tmp.fieldRow, children: null };
  let tmp7Result = tmp3;
  if (null != tmp3) {
    tmp7Result = tmp3;
    if (canToggleAnimation) {
      obj = { onPress: null, accessibilityRole: "button", accessibilityLabel: null, children: null };
      obj[0] = toggleAnimation;
      const intl = getSystemLocale.intl;
      obj[2] = intl.string(getSystemLocale.t.MxXgrL);
      const items = [tmp3, ];
      let tmp13 = null;
      if (showGifTag) {
        obj1 = { style: null };
        obj1[0] = tmp.gifTagSmall;
        tmp13 = callback2(GifTagDefault, obj1);
      }
      items[1] = tmp13;
      obj[3] = items;
      tmp7Result = tmp7(closure_5, obj);
      const tmp10 = closure_5;
    }
  }
  const items1 = [tmp7Result, ];
  const obj2 = { style: tmp.fieldContent, children: null };
  let tmp16 = null;
  if ("" !== field.title) {
    const obj3 = { variant: "text-sm/medium", color: "text-default", maxLines: 2, children: null };
    obj3[3] = field.title;
    tmp16 = callback2(PersonalWidgetText, obj3);
  }
  const items2 = [tmp16, ];
  let tmp19 = null;
  if ("" !== field.description) {
    const obj4 = { variant: "text-xs/medium", color: "text-subtle", maxLines: 4, children: null };
    obj4[3] = field.description;
    tmp19 = callback2(PersonalWidgetText, obj4);
  }
  items2[1] = tmp19;
  obj2[1] = items2;
  items1[1] = closure_11(closure_7, obj2);
  obj[1] = items1;
  return closure_11(closure_7, obj);
}
function FieldsSection(arg0) {
  ({ userId: require, section, disableInteraction: importDefault } = arg0);
  let tmp2 = null;
  if (0 !== section.fields.length) {
    const obj = { style: null, children: null };
    obj[0] = tmp.fieldsContainer;
    const fields = section.fields;
    obj[1] = fields.map((field) => closure_1_10(closure_1_20, { userId: closure_0, field, disableInteraction: closure_1 }, field.key));
    tmp2 = callback2(closure_7, obj);
  }
  return tmp2;
}
function UserProfilePersonalWidgetCardContent(style) {
  const userId = style.userId;
  ({ widget, disableInteraction } = style);
  if (disableInteraction === undefined) {
    disableInteraction = false;
  }
  let obj = userId(589);
  const items = [closure_8];
  const stateFromStores = obj.useStateFromStores(items, () => closure_1_8.getId() === userId);
  obj = { style: style.cardStyle, titleLeadingIcon: null, title: null, trailingAction: null, children: null };
  const tmp = callback3();
  const tmp5 = disableInteraction;
  obj[1] = callback2(userId(8064).NitroWheelIcon, { size: "xs", color: "icon-subtle" });
  obj[2] = widget.header;
  let tmp4Result = !stateFromStores;
  if (!stateFromStores) {
    tmp4Result = !disableInteraction;
  }
  if (tmp4Result) {
    obj = { userId: null, widget: null };
    obj[0] = userId;
    obj[1] = widget;
    tmp4Result = tmp4(tmp5(8752), obj);
  }
  obj[3] = tmp4Result;
  obj1 = { style: tmp.sectionsContainer, children: null };
  const sections = widget.sections;
  const items1 = [
    sections.map((type) => {
      type = type.type;
      if ("cover" === type) {
        let obj = { userId: null, section: null, disableInteraction: null };
        obj[0] = userId;
        obj[1] = type;
        obj[2] = disableInteraction;
        return closure_1_10(closure_1_19, obj, arg1);
      } else if ("fields" === type) {
        obj = { userId: null, section: null, disableInteraction: null };
        obj[0] = userId;
        obj[1] = type;
        obj[2] = disableInteraction;
        return closure_1_10(closure_1_21, obj, arg1);
      } else {
        return null;
      }
    }),

  ];
  tmp4Result = null;
  if (!disableInteraction) {
    tmp4Result = tmp4(PersonalWidgetShowMoreButton, {});
  }
  items1[1] = tmp4Result;
  obj1[1] = items1;
  obj[4] = closure_11(closure_7, obj1);
  return callback2(disableInteraction(5968), obj);
}
({ Pressable: c5, StyleSheet: closure_6, View: error } = get_ActivityIndicator);
({ jsx: c10, jsxs: unpackModuleId } = jsxProd);
let closure_12 = ["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.5)", "#000"];
let closure_13 = [0, 0.4, 1];
let closure_14 = { top: 8, bottom: 8, left: 8, right: 8 };
createCacheKey = { coverContainer: null, coverContent: null, coverContentWithImage: null, sectionsContainer: null, fieldsContainer: null, fieldRow: null, fieldImage: null, fieldContent: null, gifTag: null, gifTagSmall: null };
createCacheKey = { borderRadius: ThemesDefault.radii.md, overflow: "hidden", justifyContent: "flex-end" };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { gap: ThemesDefault.space.PX_4 };
let obj1 = { gap: ThemesDefault.space.PX_4 };
createCacheKey[2] = { padding: ThemesDefault.space.PX_16, marginTop: 56 };
let obj2 = { padding: ThemesDefault.space.PX_16, marginTop: 56 };
createCacheKey[3] = { gap: ThemesDefault.space.PX_12 };
let obj3 = { gap: ThemesDefault.space.PX_12 };
createCacheKey[4] = { gap: ThemesDefault.space.PX_12 };
let obj4 = { gap: ThemesDefault.space.PX_12 };
createCacheKey[5] = { flexDirection: "row", alignItems: "flex-start", gap: ThemesDefault.space.PX_12 };
let obj5 = { flexDirection: "row", alignItems: "flex-start", gap: ThemesDefault.space.PX_12 };
createCacheKey[6] = { width: ThemesDefault.space.PX_48, height: ThemesDefault.space.PX_48, borderRadius: ThemesDefault.radii.sm };
createCacheKey[7] = { flex: 1 };
let obj6 = { width: ThemesDefault.space.PX_48, height: ThemesDefault.space.PX_48, borderRadius: ThemesDefault.radii.sm };
createCacheKey[8] = { position: "absolute", top: ThemesDefault.space.PX_8, left: ThemesDefault.space.PX_8 };
let obj7 = { position: "absolute", top: ThemesDefault.space.PX_8, left: ThemesDefault.space.PX_8 };
createCacheKey[9] = { position: "absolute", top: ThemesDefault.space.PX_4, left: ThemesDefault.space.PX_4 };
let closure_15 = createCacheKey.createStyles(createCacheKey);
const obj8 = { position: "absolute", top: ThemesDefault.space.PX_4, left: ThemesDefault.space.PX_4 };
const result = require("set").fileFinishedImporting("modules/user_profile/native/UserProfilePersonalWidgetCard.tsx");

export default function UserProfilePersonalWidgetCard(arg0) {
  let obj = { children: null };
  obj = {};
  const merged = Object.assign(arg0);
  obj[0] = callback2(UserProfilePersonalWidgetCardContent, obj);
  return callback2(PersonalWidgetExpandCollapseProvider.PersonalWidgetExpandCollapseProvider, obj);
};