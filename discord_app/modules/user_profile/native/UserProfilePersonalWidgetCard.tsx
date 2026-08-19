// === Module 12291: PersonalWidgetText ===

// Module 12291 (PersonalWidgetText)
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import ManaContext from "ManaContext" /* 4104 */;
import LinearGradientDefault from "LinearGradient" /* 4756 */;
import preloadDefault from "preload" /* 5449 */;
import GifTagDefault from "GifTag" /* 8989 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import noop from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import fetchFingerprint from "fetchFingerprint" /* 1218 */;
import { ThemeTypes } from "ME" /* 676 */;
import jsxProd from "jsxProd" /* 21 */;
import "createCacheKey";

require = fn;
function PersonalWidgetText(lineClamp) {
  const variant = lineClamp.variant;
  const color = lineClamp.color;
  let children = lineClamp.children;
  const items = [children, variant, color];
  children = React.useMemo(() => {
    variant(children[8]);
    const obj = { textVariant: variant, linkVariant: variant, textColor: color };
    return obj.parsePersonalWidgetReact(children, undefined, obj);
  }, items);
  return callback2(variant(children[9]).Text, { variant, color, lineClamp: lineClamp.lineClamp, children });
}
function useWidgetImage(userId, image, disableInteraction) {
  const _require = userId;
  const GifAutoPlay = _require(first[10]).GifAutoPlay;
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
  const items = [userId, tmp4, first];
  const memo = obj.useMemo(() => {
    let tmp2 = null;
    if (null != image) {
      let obj = userId(first[11]);
      let isAnimated = image.isAnimated;
      if (isAnimated) {
        isAnimated = first;
      }
      obj = { animated: null };
      obj[0] = isAnimated;
      obj[0] = obj.getWidgetAssetURL(userId, image.fileId, obj);
      tmp2 = obj;
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
  if (null != source) {
    obj = { colors: null, style: null, pointerEvents: "none" };
    obj[0] = closure_12;
    obj[1] = closure_6.absoluteFill;
    tmp6 = callback2(LinearGradientDefault, obj);
  }
  const items1 = [tmp6, , ];
  let tmp12 = null;
  if ("" !== section.title) {
    obj = { variant: "heading-xl/semibold", color: "text-strong", lineClamp: 1, children: null };
    obj[3] = section.title;
    tmp12 = callback2(PersonalWidgetText, obj);
  }
  items1[1] = tmp12;
  let tmp15 = null;
  if ("" !== section.subtitle) {
    obj1 = { variant: "text-sm/medium", color: "text-default", lineClamp: 3, children: null };
    obj1[3] = section.subtitle;
    tmp15 = callback2(PersonalWidgetText, obj1);
  }
  items1[2] = tmp15;
  obj[2] = items1;
  const tmp3Result = callback(closure_7, obj);
  let tmp27Result1 = tmp3Result;
  if (null != source) {
    const obj2 = { theme: null, primaryColor: null, secondaryColor: null, children: null };
    obj2[0] = ThemeTypes.DARK;
    const obj3 = { style: null, children: null };
    obj3[0] = tmp.coverContainer;
    if (canToggleAnimation) {
      const obj4 = { style: null, onPress: null, accessibilityRole: "button", accessibilityLabel: null, children: null };
      obj4[0] = closure_6.absoluteFill;
      obj4[1] = toggleAnimation;
      const intl = getSystemLocale.intl;
      obj4[3] = intl.string(getSystemLocale.t.MxXgrL);
      const obj5 = { source: null, style: null, resizeMode: "cover" };
      obj5[0] = source;
      obj5[1] = closure_6.absoluteFill;
      obj4[4] = callback2(preloadDefault, obj5);
      let tmp27Result = callback2(closure_5, obj4);
      let tmp20 = importDefault;
    } else {
      tmp20 = importDefault;
      const obj6 = { source: null, style: null, resizeMode: "cover" };
      obj6[0] = source;
      obj6[1] = closure_6.absoluteFill;
      tmp27Result = callback2(preloadDefault, obj6);
    }
    const items2 = [tmp27Result, tmp3Result, ];
    tmp27Result = null;
    if (showGifTag) {
      const obj7 = { style: null };
      obj7[0] = tmp.gifTag;
      tmp27Result = callback2(tmp20(8989), obj7);
    }
    items2[2] = tmp27Result;
    obj3[1] = items2;
    obj2[3] = callback(closure_7, obj3);
    tmp27Result1 = callback2(ManaContext.ThemeContextProvider, obj2);
  }
  return tmp27Result1;
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
      tmp7Result = callback(closure_5, obj);
    }
  }
  const items1 = [tmp7Result, ];
  const obj2 = { style: tmp.fieldContent, children: null };
  let tmp16 = null;
  if ("" !== field.title) {
    const obj3 = { variant: "text-sm/medium", color: "text-default", lineClamp: 1, children: null };
    obj3[3] = field.title;
    tmp16 = callback2(PersonalWidgetText, obj3);
  }
  const items2 = [tmp16, ];
  let tmp19 = null;
  if ("" !== field.description) {
    const obj4 = { variant: "text-xs/medium", color: "text-subtle", lineClamp: 1, children: null };
    obj4[3] = field.description;
    tmp19 = callback2(PersonalWidgetText, obj4);
  }
  items2[1] = tmp19;
  obj2[1] = items2;
  items1[1] = callback(closure_7, obj2);
  obj[1] = items1;
  return callback(closure_7, obj);
}
function FieldsSection(arg0) {
  ({ userId: require, section, disableInteraction: importDefault } = arg0);
  let tmp2 = null;
  if (0 !== section.fields.length) {
    const obj = { style: null, children: null };
    obj[0] = tmp.fieldsContainer;
    const fields = section.fields;
    obj[1] = fields.map((item, index) => closure_1_10(FieldRow, { userId: closure_0, field: item, disableInteraction: closure_1 }, item.key));
    tmp2 = callback2(closure_7, obj);
  }
  return tmp2;
}
({ Pressable: c5, StyleSheet: closure_6, View: error } = get_ActivityIndicator);
({ jsx: c10, jsxs: unpackModuleId } = jsxProd);
let closure_12 = ["rgba(7, 7, 9, 0)", "rgba(7, 7, 9, 0.8)"];
const createCacheKey = { borderRadius: ThemesDefault.radii.md, overflow: "hidden", justifyContent: "flex-end" };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { gap: ThemesDefault.space.PX_4 };
createCacheKey[2] = { padding: ThemesDefault.space.PX_16, marginTop: 56 };
createCacheKey[3] = { gap: ThemesDefault.space.PX_12 };
createCacheKey[4] = { gap: ThemesDefault.space.PX_12 };
createCacheKey[5] = { flexDirection: "row", alignItems: "center", gap: ThemesDefault.space.PX_12 };
createCacheKey[6] = { width: ThemesDefault.space.PX_48, height: ThemesDefault.space.PX_48, borderRadius: ThemesDefault.radii.sm };
createCacheKey[7] = { flex: 1 };
createCacheKey[8] = { position: "absolute", top: ThemesDefault.space.PX_8, left: ThemesDefault.space.PX_8 };
createCacheKey[9] = { position: "absolute", top: ThemesDefault.space.PX_4, left: ThemesDefault.space.PX_4 };
let closure_13 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/user_profile/native/UserProfilePersonalWidgetCard.tsx");

export default function UserProfilePersonalWidgetCard(style) {
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
  obj[1] = callback2(userId(7988).NitroWheelIcon, { size: "xs", color: "icon-subtle" });
  obj[2] = widget.header;
  let tmp4Result = !stateFromStores;
  if (!stateFromStores) {
    tmp4Result = !disableInteraction;
  }
  if (tmp4Result) {
    obj = { userId: null, widget: null };
    obj[0] = userId;
    obj[1] = widget;
    tmp4Result = callback2(tmp5(12186), obj);
  }
  obj[3] = tmp4Result;
  const tmp6 = disableInteraction(7185);
  const sections = widget.sections;
  obj[4] = callback2(closure_7, {
    style: tmp.sectionsContainer,
    children: sections.map((item, index) => {
      const type = item.type;
      if ("cover" === type) {
        let obj = { userId: null, section: null, disableInteraction: null };
        obj[0] = userId;
        obj[1] = item;
        obj[2] = disableInteraction;
        return closure_1_10(CoverSection, obj, index);
      } else if ("fields" === type) {
        obj = { userId: null, section: null, disableInteraction: null };
        obj[0] = userId;
        obj[1] = item;
        obj[2] = disableInteraction;
        return closure_1_10(FieldsSection, obj, index);
      } else {
        return null;
      }
    })
  });
  return callback2(tmp6, obj);
};