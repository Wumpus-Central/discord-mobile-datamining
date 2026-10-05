// === Module 14263: ToastEntity ===

// Module 14263 (ToastEntity)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import utils_StringUtils from "utils/StringUtils" /* 2019 */;
import Text_Text from "Text/Text" /* 4886 */;
import FastImageDefault from "FastImage" /* 5974 */;
import react from "react" /* 19 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let obj2;
let obj3;
let obj4;
const View = react_native.View;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { entity: { flexShrink: 0, width: 24, height: 24, alignItems: "center", justifyContent: "center", overflow: "hidden" }, image: { width: 24, height: 24 }, glyph: { textAlign: "center" }, avatar: obj2, guild: obj3, guildAcronym: obj4 };
createStyles = createStyles.createStyles;
obj2 = { borderRadius: nativeDefault.radii.round };
obj3 = { borderRadius: nativeDefault.radii.sm };
obj4 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
let closure_5 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let entity;
  let guild;
  let style;
  const obj = react2;
  const cResult = obj.c(11);
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
        let tmp5;
        if (cResult[3] === tmp2.entity) {
          tmp5 = cResult[4];
        }
        if (cResult[5] === entity) {
          let tmp6;
          if (cResult[6] === tmp2) {
            tmp6 = cResult[7];
          }
          if (cResult[8] === tmp5) {
            let tmp10;
            if (cResult[9] === tmp6) {
              tmp10 = cResult[10];
            }
            return tmp10;
          }
          const tmp13 = <View style={tmp5} accessibilityElementsHidden importantForAccessibility="no-hide-descendants">{tmp6}</View>;
          cResult[8] = tmp5;
          cResult[9] = tmp6;
          cResult[10] = tmp13;
          tmp10 = tmp13;
        }
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
  let guild;
  entity = entity.entity;
  const style = entity.style;
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
  const items = [tmp.entity, guild, guildAcronym, style];
  return <View style={items} accessibilityElementsHidden importantForAccessibility="no-hide-descendants"><closure_6 entity={entity} styles={tmp} /></View>;
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_6 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let entity;
  let styles;
  const obj = react2;
  const cResult = obj.c(35);
  ({ entity, styles } = arg0);
  const type = entity.type;
  if ("emoji" === type) {
    let tmp27;
    if ("unicode" in entity) {
      if (cResult[0] === entity.unicode) {
        let tmp31;
        if (cResult[1] === styles.glyph) {
          tmp31 = cResult[2];
        }
        tmp27 = tmp31;
      }
      const tmp33 = jsx(Text_Text.Text, { variant: "text-lg/normal", color: "text-default", style: styles.glyph, lineClamp: 1, children: entity.unicode });
      cResult[0] = entity.unicode;
      cResult[1] = styles.glyph;
      cResult[2] = tmp33;
      tmp31 = tmp33;
    } else {
      let tmp26;
      if (cResult[3] !== entity.src) {
        const obj3 = { uri: entity.src };
        cResult[3] = entity.src;
        cResult[4] = obj3;
        tmp26 = obj3;
      } else {
        tmp26 = cResult[4];
      }
      if (cResult[5] === entity.alt) {
        if (cResult[6] === styles.image) {
          if (cResult[7] === tmp26) {
            tmp27 = cResult[8];
          }
        }
      }
      const tmp30 = jsx(FastImageDefault, { style: styles.image, source: tmp26, accessibilityLabel: entity.alt });
      cResult[5] = entity.alt;
      cResult[6] = styles.image;
      cResult[7] = tmp26;
      cResult[8] = tmp30;
      tmp27 = tmp30;
    }
    return tmp27;
  } else if ("avatar" === type) {
    let tmp21;
    if (cResult[9] !== entity.src) {
      const obj5 = { uri: entity.src };
      cResult[9] = entity.src;
      cResult[10] = obj5;
      tmp21 = obj5;
    } else {
      tmp21 = cResult[10];
    }
    if (cResult[11] === entity.alt) {
      if (cResult[12] === styles.image) {
        let tmp22;
        if (cResult[13] === tmp21) {
          tmp22 = cResult[14];
        }
        return tmp22;
      }
    }
    const tmp25 = jsx(FastImageDefault, { style: styles.image, source: tmp21, accessibilityLabel: entity.alt });
    cResult[11] = entity.alt;
    cResult[12] = styles.image;
    cResult[13] = tmp21;
    cResult[14] = tmp25;
    tmp22 = tmp25;
  } else if ("guild" === type) {
    let tmp11;
    if (null == entity.src) {
      let tmp17;
      let tmp16;
      let tmp15;
      if (cResult[15] !== entity.name) {
        const tmpResult = utils_StringUtils;
        const acronym = tmpResult.getAcronym(entity.name);
        const Text = Text_Text.Text;
        let str = "text-md/semibold";
        if (acronym.length > 2) {
          let str2 = "text-xs/semibold";
          if (acronym.length <= 4) {
            str2 = "text-sm/semibold";
          }
          str = str2;
        }
        cResult[15] = entity.name;
        cResult[16] = Text;
        cResult[17] = acronym;
        cResult[18] = str;
        tmp17 = str;
        tmp16 = acronym;
        tmp15 = Text;
      } else {
        tmp15 = cResult[16];
        tmp16 = cResult[17];
        tmp17 = cResult[18];
      }
      if (cResult[19] === tmp15) {
        if (cResult[20] === tmp16) {
          let tmp18;
          if (cResult[21] === tmp17) {
            tmp18 = cResult[22];
          }
          tmp11 = tmp18;
        }
      }
      const tmp20 = <tmp15 variant={tmp17} color="interactive-text-default" lineClamp={1}>{tmp16}</tmp15>;
      cResult[19] = tmp15;
      cResult[20] = tmp16;
      cResult[21] = tmp17;
      cResult[22] = tmp20;
      tmp18 = tmp20;
    } else {
      let tmp10;
      if (cResult[23] !== entity.src) {
        const obj8 = { uri: entity.src };
        cResult[23] = entity.src;
        cResult[24] = obj8;
        tmp10 = obj8;
      } else {
        tmp10 = cResult[24];
      }
      if (cResult[25] === entity.name) {
        if (cResult[26] === styles.image) {
          if (cResult[27] === tmp10) {
            tmp11 = cResult[28];
          }
        }
      }
      const tmp14 = jsx(FastImageDefault, { style: styles.image, source: tmp10, accessibilityLabel: entity.name });
      cResult[25] = entity.name;
      cResult[26] = styles.image;
      cResult[27] = tmp10;
      cResult[28] = tmp14;
      tmp11 = tmp14;
    }
    return tmp11;
  } else if ("image" === type) {
    let tmp4;
    if (cResult[29] !== entity.src) {
      const obj10 = { uri: entity.src };
      cResult[29] = entity.src;
      cResult[30] = obj10;
      tmp4 = obj10;
    } else {
      tmp4 = cResult[30];
    }
    if (cResult[31] === entity.alt) {
      if (cResult[32] === styles.image) {
        let tmp5;
        if (cResult[33] === tmp4) {
          tmp5 = cResult[34];
        }
        return tmp5;
      }
    }
    const tmp8 = jsx(FastImageDefault, { style: styles.image, source: tmp4, resizeMode: "contain", accessibilityLabel: entity.alt });
    cResult[31] = entity.alt;
    cResult[32] = styles.image;
    cResult[33] = tmp4;
    cResult[34] = tmp8;
    tmp5 = tmp8;
  }
}) : ((arg0) => {
  let entity;
  let styles;
  ({ entity, styles } = arg0);
  const type = entity.type;
  if ("emoji" === type) {
    let tmp14Result;
    if ("unicode" in entity) {
      tmp14Result = jsx(Text_Text.Text, { variant: "text-lg/normal", color: "text-default", style: styles.glyph, lineClamp: 1, children: entity.unicode });
    } else {
      const obj4 = { uri: entity.src };
      tmp14Result = jsx(FastImageDefault, { style: styles.image, source: obj4, accessibilityLabel: entity.alt });
    }
    return tmp14Result;
  } else if ("avatar" === type) {
    const obj7 = { uri: entity.src };
    return jsx(FastImageDefault, { style: styles.image, source: obj7, accessibilityLabel: entity.alt });
  } else if ("guild" === type) {
    if (null == entity.src) {
      const obj5 = utils_StringUtils;
      const acronym = obj5.getAcronym(entity.name);
      let str2 = "text-md/semibold";
      const Text = Text_Text.Text;
      if (acronym.length > 2) {
        let str3 = "text-xs/semibold";
        if (acronym.length <= 4) {
          str3 = "text-sm/semibold";
        }
        str2 = str3;
      }
      return <Text variant={str2} color="interactive-text-default" lineClamp={1}>{acronym}</Text>;
    } else {
      const obj10 = { uri: entity.src };
      return jsx(FastImageDefault, { style: styles.image, source: obj10, accessibilityLabel: entity.name });
    }
  } else if ("image" === type) {
    const obj11 = { uri: entity.src };
    return jsx(FastImageDefault, { style: styles.image, source: obj11, resizeMode: "contain", accessibilityLabel: entity.alt });
  }
});
const result = size.fileFinishedImporting("design/mana/components/Toast/ToastEntity.native.tsx");

export const ToastEntity = tmp4;