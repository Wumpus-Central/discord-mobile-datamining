// discord_app/design/mana/components/Toast/ToastEntity.native.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import utils_StringUtils from "../../../../../discord_common/js/shared/utils/StringUtils.tsx";
import Text_Text from "../../../components/Text/native/Text.tsx";
import FastImageDefault from "../../../../components_native/common/FastImage.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
function ToastEntityContent(arg0) {
  ({ entity, styles } = arg0);
  const type = entity.type;
  if ("emoji" === type) {
    if ("unicode" in entity) {
      const obj2 = {
        variant: "text-lg/normal",
        color: "text-default",
        style: styles.glyph,
        lineClamp: 1,
        children: entity.unicode,
      };
      let tmp14Result = jsx(Text_Text.Text, {
        variant: "text-lg/normal",
        color: "text-default",
        style: styles.glyph,
        lineClamp: 1,
        children: entity.unicode,
      });
    } else {
      const obj3 = { style: styles.image, source: null, accessibilityLabel: null };
      const obj4 = { uri: entity.src };
      obj3.source = obj4;
      obj3.accessibilityLabel = entity.alt;
      tmp14Result = jsx(FastImageDefault, { style: styles.image, source: null, accessibilityLabel: null });
    }
    return tmp14Result;
  } else if ("avatar" === type) {
    const obj6 = { style: styles.image, source: null, accessibilityLabel: null };
    const obj7 = { uri: entity.src };
    obj6.source = obj7;
    obj6.accessibilityLabel = entity.alt;
    return jsx(FastImageDefault, { style: styles.image, source: null, accessibilityLabel: null });
  } else if ("guild" === type) {
    if (null == entity.src) {
      const acronym = utils_StringUtils.getAcronym(entity.name);
      let str2 = "text-md/semibold";
      if (acronym.length > 2) {
        let str3 = "text-xs/semibold";
        if (acronym.length <= 4) {
          str3 = "text-sm/semibold";
        }
        str2 = str3;
      }
      const obj8 = { variant: str2, color: "interactive-text-default", lineClamp: 1, children: acronym };
      return jsx(Text_Text.Text, { variant: str2, color: "interactive-text-default", lineClamp: 1, children: acronym });
    } else {
      const obj9 = { style: styles.image, source: null, accessibilityLabel: null };
      const obj10 = { uri: entity.src };
      obj9.source = obj10;
      obj9.accessibilityLabel = entity.name;
      return jsx(FastImageDefault, { style: styles.image, source: null, accessibilityLabel: null });
    }
  } else if ("image" === type) {
    const obj = { style: styles.image, source: null, resizeMode: "contain", accessibilityLabel: null };
    const obj11 = { uri: entity.src };
    obj.source = obj11;
    obj.accessibilityLabel = entity.alt;
    return jsx(FastImageDefault, {
      style: styles.image,
      source: null,
      resizeMode: "contain",
      accessibilityLabel: null,
    });
  }
}
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(5009);
let obj2 = {
  entity: { flexShrink: 0, width: 24, height: 24, alignItems: "center", justifyContent: "center", overflow: "hidden" },
  image: { width: 24, height: 24 },
  glyph: { textAlign: "center" },
  avatar: { borderRadius: nativeDefault.radii.round },
  guild: null,
  guildAcronym: null,
};
let obj3 = { borderRadius: nativeDefault.radii.round };
obj2.guild = { borderRadius: nativeDefault.radii.sm };
let obj4 = { borderRadius: nativeDefault.radii.sm };
obj2.guildAcronym = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
let closure_5 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("design/mana/components/Toast/ToastEntity.native.tsx");

export function ToastEntity(entity) {
  entity = entity.entity;
  const tmp = closure_5();
  if ("avatar" === entity.type) {
    let guild = tmp.avatar;
  } else if ("guild" === entity.type) {
    guild = tmp.guild;
  }
  let guildAcronym;
  if ("guild" === entity.type) {
    if (null == entity.src) {
      guildAcronym = tmp.guildAcronym;
    }
  }
  const obj = {
    style: null,
    accessibilityElementsHidden: true,
    importantForAccessibility: "no-hide-descendants",
    children: <ToastEntityContent entity={entity} styles={tmp} />,
  };
  const items = [tmp.entity, guild, guildAcronym, entity.style];
  obj.style = items;
  return (
    <View style={null} accessibilityElementsHidden importantForAccessibility="no-hide-descendants">
      <ToastEntityContent entity={entity} styles={tmp} />
    </View>
  );
}
