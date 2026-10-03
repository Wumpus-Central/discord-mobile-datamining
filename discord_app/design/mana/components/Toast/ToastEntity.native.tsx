// === Module 14261: ToastEntity ===

// Module 14261 (ToastEntity)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import FastImageDefault from "FastImage" /* 5974 */;
import noop from "module_19" /* 19 */;

const utils_StringUtils = Text(2019);
const Text_Text = Text(4886);
require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4890);
let obj2 = { entity: { flexShrink: 0, width: 24, height: 24, alignItems: "center", justifyContent: "center", overflow: "hidden" }, image: { width: 24, height: 24 }, glyph: { textAlign: "center" }, avatar: { borderRadius: nativeDefault.radii.round }, guild: null, guildAcronym: null };
let obj3 = { borderRadius: nativeDefault.radii.round };
obj2.guild = { borderRadius: nativeDefault.radii.sm };
let obj4 = { borderRadius: nativeDefault.radii.sm };
obj2.guildAcronym = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
let closure_5 = createStyles.createStyles(obj2);
fn(558);
let obj5 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
const ReactCompilerGating = fn(558);
let closure_6 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let Text = require;
  let tmp = dependencyMap;
  const cResult = c.c(35);
  ({ entity, styles } = arg0);
  const type = entity.type;
  if ("emoji" === type) {
    if ("unicode" in entity) {
      if (cResult[0] === entity.unicode) {
      }
      Text = Text_Text.Text;
      const obj2 = { variant: "text-lg/normal", color: "text-default", style: styles.glyph, lineClamp: 1, children: entity.unicode };
      tmp = <Text variant="text-lg/normal" color="text-default" style={styles.glyph} lineClamp={1}>{entity.unicode}</Text>;
      entity = entity.unicode;
      cResult[0] = entity;
      styles = styles.glyph;
      cResult[1] = styles;
      cResult[2] = tmp;
    } else {
      if (cResult[3] !== entity.src) {
        const obj3 = { uri: entity.src };
        cResult[3] = entity.src;
        cResult[4] = obj3;
        let tmp26 = obj3;
      } else {
        tmp26 = cResult[4];
      }
      if (cResult[5] === entity.alt) {
        if (cResult[6] === styles.image) {
          if (cResult[7] === tmp26) {
            let tmp27 = cResult[8];
          }
          return tmp27;
        }
      }
      const obj4 = { style: styles.image, source: tmp26, accessibilityLabel: entity.alt };
      const tmp30 = jsx(FastImageDefault, { style: styles.image, source: tmp26, accessibilityLabel: entity.alt });
      cResult[5] = entity.alt;
      cResult[6] = styles.image;
      cResult[7] = tmp26;
      cResult[8] = tmp30;
      tmp27 = tmp30;
    }
  } else if ("avatar" === type) {
    if (cResult[9] !== entity.src) {
      const obj5 = { uri: entity.src };
      cResult[9] = entity.src;
      cResult[10] = obj5;
      let tmp21 = obj5;
    } else {
      tmp21 = cResult[10];
    }
    if (cResult[11] === entity.alt) {
      if (cResult[12] === styles.image) {
        if (cResult[13] === tmp21) {
          let tmp22 = cResult[14];
        }
        return tmp22;
      }
    }
    const obj6 = { style: styles.image, source: tmp21, accessibilityLabel: entity.alt };
    const tmp25 = jsx(FastImageDefault, { style: styles.image, source: tmp21, accessibilityLabel: entity.alt });
    cResult[11] = entity.alt;
    cResult[12] = styles.image;
    cResult[13] = tmp21;
    cResult[14] = tmp25;
    tmp22 = tmp25;
  } else if ("guild" === type) {
    if (null == entity.src) {
      if (cResult[15] !== entity.name) {
        const acronym = utils_StringUtils.getAcronym(entity.name);
        const Text2 = Text_Text.Text;
        let str = "text-md/semibold";
        if (acronym.length > 2) {
          let str2 = "text-xs/semibold";
          if (acronym.length <= 4) {
            str2 = "text-sm/semibold";
          }
          str = str2;
        }
        cResult[15] = entity.name;
        cResult[16] = Text2;
        cResult[17] = acronym;
        cResult[18] = str;
        let tmp16 = str;
        let tmp15 = acronym;
        let tmp14 = Text2;
        const TextResult = utils_StringUtils;
      } else {
        tmp14 = cResult[16];
        tmp15 = cResult[17];
        tmp16 = cResult[18];
      }
      if (cResult[19] === tmp14) {
        if (cResult[20] === tmp15) {
        }
      }
      const obj7 = { variant: tmp16, color: "interactive-text-default", lineClamp: 1, children: tmp15 };
      const tmp19 = <tmp14 variant={tmp16} color="interactive-text-default" lineClamp={1}>{tmp15}</tmp14>;
      cResult[19] = tmp14;
      cResult[20] = tmp15;
      cResult[21] = tmp16;
      cResult[22] = tmp19;
    } else {
      if (cResult[23] !== entity.src) {
        const obj8 = { uri: entity.src };
        cResult[23] = entity.src;
        cResult[24] = obj8;
        let tmp9 = obj8;
      } else {
        tmp9 = cResult[24];
      }
      if (cResult[25] === entity.name) {
        if (cResult[26] === styles.image) {
          if (cResult[27] === tmp9) {
            let tmp10 = cResult[28];
          }
          return tmp10;
        }
      }
      const obj9 = { style: styles.image, source: tmp9, accessibilityLabel: entity.name };
      const tmp13 = jsx(FastImageDefault, { style: styles.image, source: tmp9, accessibilityLabel: entity.name });
      cResult[25] = entity.name;
      cResult[26] = styles.image;
      cResult[27] = tmp9;
      cResult[28] = tmp13;
      tmp10 = tmp13;
    }
  } else if ("image" === type) {
    if (cResult[29] !== entity.src) {
      const obj10 = { uri: entity.src };
      cResult[29] = entity.src;
      cResult[30] = obj10;
      let tmp3 = obj10;
    } else {
      tmp3 = cResult[30];
    }
    if (cResult[31] === entity.alt) {
      if (cResult[32] === styles.image) {
        if (cResult[33] === tmp3) {
          let tmp4 = cResult[34];
        }
        return tmp4;
      }
    }
    const obj11 = { style: styles.image, source: tmp3, resizeMode: "contain", accessibilityLabel: entity.alt };
    const tmp7 = jsx(FastImageDefault, { style: styles.image, source: tmp3, resizeMode: "contain", accessibilityLabel: entity.alt });
    cResult[31] = entity.alt;
    cResult[32] = styles.image;
    cResult[33] = tmp3;
    cResult[34] = tmp7;
    tmp4 = tmp7;
  }
}) : ((arg0) => {
  ({ entity, styles } = arg0);
  const type = entity.type;
  if ("emoji" === type) {
    if ("unicode" in entity) {
      const obj2 = { variant: "text-lg/normal", color: "text-default", style: styles.glyph, lineClamp: 1, children: entity.unicode };
      let tmp14Result = jsx(Text_Text.Text, { variant: "text-lg/normal", color: "text-default", style: styles.glyph, lineClamp: 1, children: entity.unicode });
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
    return jsx(FastImageDefault, { style: styles.image, source: null, resizeMode: "contain", accessibilityLabel: null });
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("design/mana/components/Toast/ToastEntity.native.tsx");

export const ToastEntity = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(11);
  ({ entity, style } = arg0);
  const tmp2 = closure_5();
  if ("avatar" === entity.type) {
    guild = tmp2.avatar;
  } else if ("guild" === entity.type) {
    guild = tmp2.guild;
  }
  let guildAcronym;
  if ("guild" === entity.type) {
    if (null == entity.src) {
      guildAcronym = tmp2.guildAcronym;
    }
  }
  if (cResult[0] === guildAcronym) {
    if (cResult[1] === guild) {
      if (cResult[2] === style) {
        if (cResult[3] === tmp2.entity) {
          let tmp5 = cResult[4];
        }
        if (cResult[5] === entity) {
          if (cResult[6] === tmp2) {
            let tmp6 = cResult[7];
          }
          if (cResult[8] === tmp5) {
            if (cResult[9] === tmp6) {
              let tmp10 = cResult[10];
            }
            return tmp10;
          }
          const obj2 = { style: tmp5, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: tmp6 };
          const tmp13 = <View style={tmp5} accessibilityElementsHidden importantForAccessibility="no-hide-descendants">{tmp6}</View>;
          cResult[8] = tmp5;
          cResult[9] = tmp6;
          cResult[10] = tmp13;
          tmp10 = tmp13;
        }
        const obj3 = { entity, styles: tmp2 };
        const tmp9 = <closure_6 entity={entity} styles={tmp2} />;
        cResult[5] = entity;
        cResult[6] = tmp2;
        cResult[7] = tmp9;
        tmp6 = tmp9;
      }
    }
  }
  const items = [tmp2.entity, guild, guildAcronym, style];
  cResult[0] = guildAcronym;
  cResult[1] = guild;
  cResult[2] = style;
  cResult[3] = tmp2.entity;
  cResult[4] = items;
  tmp5 = items;
}) : ((entity) => {
  entity = entity.entity;
  const tmp = closure_5();
  if ("avatar" === entity.type) {
    guild = tmp.avatar;
  } else if ("guild" === entity.type) {
    guild = tmp.guild;
  }
  let guildAcronym;
  if ("guild" === entity.type) {
    if (null == entity.src) {
      guildAcronym = tmp.guildAcronym;
    }
  }
  const obj = { style: null, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: <closure_6 entity={entity} styles={tmp} /> };
  const items = [tmp.entity, guild, guildAcronym, entity.style];
  obj.style = items;
  return <View style={null} accessibilityElementsHidden importantForAccessibility="no-hide-descendants"><closure_6 entity={entity} styles={tmp} /></View>;
});