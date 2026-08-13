// discord_app/modules/user_profile/native/UserProfilePersonalWidgetCard.tsx
import noop from "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import fetchFingerprint from "fetchFingerprint";
import { ThemeTypes } from "ME";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import { Divider } from "UserProfileCard.tsx";

let c10;
let c4;
let c5;
let c9;
let closure_6;
const require = arg1;
function PersonalWidgetText(lineClamp) {
  const variant = lineClamp.variant;
  const color = lineClamp.color;
  let children = lineClamp.children;
  const items = [children, variant, color];
  children = React.useMemo(() => {
    let obj = variant(children[7]);
    obj = { textVariant: variant, linkVariant: variant, textColor: color };
    return obj.parsePersonalWidgetReact(children, undefined, obj);
  }, items);
  return callback(variant(children[8]).Text, { variant, color, lineClamp: lineClamp.lineClamp, children });
}
function CoverSection(arg0) {
  let section;
  let userId;
  ({ userId, section } = arg0);
  const tmp = createCacheKey();
  const image = section.image;
  const items = [userId, image];
  const memo = React.useMemo(() => {
    let tmp2 = null;
    if (null != image) {
      let tmp3 = null;
      if ("fileId" in tmp) {
        const obj = { uri: null };
        obj[0] = userId(outer1_2[9]).getWidgetAssetURL(userId, tmp.fileId);
        tmp3 = obj;
        const obj2 = userId(outer1_2[9]);
      }
      tmp2 = tmp3;
    }
    return tmp2;
  }, items);
  const items1 = [tmp.coverContent, ];
  let prop = null;
  if (null != memo) {
    prop = tmp.coverContentWithImage;
  }
  let obj = { style: items1, children: null };
  items1[1] = prop;
  let tmp6 = null;
  if (null != memo) {
    obj = { colors: null, style: null };
    obj[0] = closure_11;
    obj[1] = closure_5.absoluteFill;
    tmp6 = callback(image(4766), obj);
  }
  const items2 = [tmp6, , ];
  let tmp12 = null;
  if ("" !== section.title) {
    obj = { variant: "heading-xl/semibold", color: "text-strong", lineClamp: 1, children: null };
    obj[3] = section.title;
    tmp12 = callback(PersonalWidgetText, obj);
  }
  items2[1] = tmp12;
  let tmp15 = null;
  if ("" !== section.subtitle) {
    const obj1 = { variant: "text-sm/medium", color: "text-default", lineClamp: 3, children: null };
    obj1[3] = section.subtitle;
    tmp15 = callback(PersonalWidgetText, obj1);
  }
  items2[2] = tmp15;
  obj[1] = items2;
  const tmp3Result = closure_10(closure_6, obj);
  let tmp19 = tmp3Result;
  if (null != memo) {
    const obj2 = { theme: null, primaryColor: null, secondaryColor: null, children: null };
    obj2[0] = ThemeTypes.DARK;
    const obj3 = { style: null, children: null };
    obj3[0] = tmp.coverContainer;
    const obj4 = { source: null, style: null, resizeMode: "cover" };
    obj4[0] = memo;
    obj4[1] = closure_5.absoluteFill;
    const items3 = [callback(closure_4, obj4), tmp3Result];
    obj3[1] = items3;
    obj2[3] = tmp3(tmp4, obj3);
    tmp19 = callback(userId(4072).ThemeContextProvider, obj2);
  }
  return tmp19;
}
function FieldRow(arg0) {
  let field;
  let userId;
  ({ userId, field } = arg0);
  const tmp = createCacheKey();
  const image = field.image;
  const items = [userId, image];
  const memo = React.useMemo(() => {
    let tmp2 = null;
    if (null != image) {
      let tmp3 = null;
      if ("fileId" in tmp) {
        const obj = { uri: null };
        obj[0] = userId(outer1_2[9]).getWidgetAssetURL(userId, tmp.fileId);
        tmp3 = obj;
        const obj2 = userId(outer1_2[9]);
      }
      tmp2 = tmp3;
    }
    return tmp2;
  }, items);
  let obj = { style: tmp.fieldRow, children: null };
  let tmp5 = null;
  if (null != memo) {
    obj = { source: null, style: null, resizeMode: "cover" };
    obj[0] = memo;
    obj[1] = tmp.fieldImage;
    tmp5 = callback(closure_4, obj);
  }
  const items1 = [tmp5, ];
  obj = { style: tmp.fieldContent, children: null };
  let tmp8 = null;
  if ("" !== field.title) {
    const obj1 = { variant: "text-sm/medium", color: "text-default", lineClamp: 1, children: null };
    obj1[3] = field.title;
    tmp8 = callback(PersonalWidgetText, obj1);
  }
  const items2 = [tmp8, ];
  let tmp11 = null;
  if ("" !== field.description) {
    let obj2 = { variant: "text-xs/medium", color: "text-subtle", lineClamp: 1, children: null };
    obj2[3] = field.description;
    tmp11 = callback(PersonalWidgetText, obj2);
  }
  items2[1] = tmp11;
  obj[1] = items2;
  items1[1] = closure_10(closure_6, obj);
  obj[1] = items1;
  return closure_10(closure_6, obj);
}
function FieldsSection(arg0) {
  let require;
  let section;
  ({ userId: require, section } = arg0);
  let tmp2 = null;
  if (0 !== section.fields.length) {
    const obj = { style: null, children: null };
    obj[0] = tmp.fieldsContainer;
    const fields = section.fields;
    obj[1] = fields.map((field) => outer1_9(outer1_15, { userId: closure_0, field }, field.key));
    tmp2 = callback(closure_6, obj);
  }
  return tmp2;
}
({ Image: c4, StyleSheet: c5, View: closure_6 } = get_ActivityIndicator);
({ jsx: c9, jsxs: c10 } = jsxProd);
let closure_11 = ["rgba(7, 7, 9, 0)", "rgba(7, 7, 9, 0.8)"];
createCacheKey = { coverContainer: null, coverContent: null, coverContentWithImage: null, sectionsContainer: null, fieldsContainer: null, fieldRow: null, fieldImage: null, fieldContent: null };
createCacheKey = { borderRadius: require("Themes").radii.md, overflow: "hidden", justifyContent: "flex-end" };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { gap: require("Themes").space.PX_4 };
let obj1 = { gap: require("Themes").space.PX_4 };
createCacheKey[2] = { padding: require("Themes").space.PX_16, marginTop: 56 };
let obj2 = { padding: require("Themes").space.PX_16, marginTop: 56 };
createCacheKey[3] = { gap: require("Themes").space.PX_12 };
let obj3 = { gap: require("Themes").space.PX_12 };
createCacheKey[4] = { gap: require("Themes").space.PX_12 };
let obj4 = { gap: require("Themes").space.PX_12 };
createCacheKey[5] = { flexDirection: "row", alignItems: "center", gap: require("Themes").space.PX_12 };
const obj5 = { flexDirection: "row", alignItems: "center", gap: require("Themes").space.PX_12 };
createCacheKey[6] = { width: require("Themes").space.PX_48, height: require("Themes").space.PX_48, borderRadius: require("Themes").radii.sm };
createCacheKey[7] = { flex: 1 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const obj6 = { width: require("Themes").space.PX_48, height: require("Themes").space.PX_48, borderRadius: require("Themes").radii.sm };
const result = require("fetchFingerprint").fileFinishedImporting("modules/user_profile/native/UserProfilePersonalWidgetCard.tsx");

export default function UserProfilePersonalWidgetCard(userId) {
  let cardStyle;
  let disableInteraction;
  userId = userId.userId;
  const widget = userId.widget;
  ({ cardStyle, disableInteraction } = userId);
  let obj = userId(589);
  const items = [fetchFingerprint];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_7.getId() === userId);
  obj = { style: cardStyle, titleLeadingIcon: null, title: null, trailingAction: null, children: null };
  const tmp = createCacheKey();
  const tmp5 = importDefault;
  obj[1] = callback(userId(7749).NitroWheelIcon, { size: "xs", color: "icon-subtle" });
  obj[2] = widget.header;
  let tmp4Result = !stateFromStores;
  if (!stateFromStores) {
    tmp4Result = !disableInteraction;
  }
  if (tmp4Result) {
    obj = { userId: null, widget: null };
    obj[0] = userId;
    obj[1] = widget;
    tmp4Result = tmp4(tmp5(12416), obj);
  }
  obj[3] = tmp4Result;
  const tmp6 = Divider;
  const sections = widget.sections;
  obj[4] = callback(closure_6, {
    style: tmp.sectionsContainer,
    children: sections.map((type) => {
      type = type.type;
      if ("cover" === type) {
        let obj = { userId: null, section: null };
        obj[0] = userId;
        obj[1] = type;
        return outer1_9(outer1_14, obj, arg1);
      } else if ("fields" === type) {
        obj = { userId: null, section: null };
        obj[0] = userId;
        obj[1] = type;
        return outer1_9(outer1_16, obj, arg1);
      } else {
        return null;
      }
    })
  });
  return callback(tmp6, obj);
};