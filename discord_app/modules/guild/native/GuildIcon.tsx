// === Module 5971: GuildIcon ===

// Module 5971 (GuildIcon)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import ExpressionSourceRecord from "ExpressionSourceRecord" /* 5972 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import GuildRecord from "GuildRecord" /* 2070 */;
import createStyles_mod from "createStyles" /* 4890 */;
import size_mod from "module_2" /* 2 */;

let metroImportDefault;
let metroRequire;
let obj4;
let obj5;
let obj6;
let closure_5 = ExpressionSourceRecord.ExpressionSourceGuildRecord;
({ getGuildIconSource: metroRequire, getGuildAcronym: metroImportDefault } = GuildRecord);
const Fonts = Constants.Fonts;
const jsx = Fragment.jsx;
const GuildIconSizes = { XXXSMALL: "XXXSMALL", XXSMALL_12: "XXSMALL_12", XXSMALL: "XXSMALL", XSMALL_20: "XSMALL_20", XSMALL: "XSMALL", SMALL: "SMALL", SMALL_32: "SMALL_32", SMALL_36: "SMALL_36", NORMAL: "NORMAL", LARGE: "LARGE", XLARGE: "XLARGE", XXLARGE: "XXLARGE" };
let closure_10 = { [GuildIconSizes.XXXSMALL]: [6, 4, 4, 4, 2, 1], [GuildIconSizes.XXSMALL_12]: [8, 6, 6, 4, 4, 2], [GuildIconSizes.XXSMALL]: [10, 8, 8, 6, 6, 4], [GuildIconSizes.XSMALL_20]: [12, 10, 10, 8, 8, 6], [GuildIconSizes.XSMALL]: [16, 16, 16, 14, 14, 12], [GuildIconSizes.SMALL]: [16, 16, 16, 14, 14, 12], [GuildIconSizes.SMALL_32]: [16, 16, 16, 14, 14, 12], [GuildIconSizes.SMALL_36]: [16, 16, 16, 14, 14, 12], [GuildIconSizes.NORMAL]: [16, 16, 16, 14, 14, 12], [GuildIconSizes.LARGE]: [16, 16, 16, 14, 14, 12], [GuildIconSizes.XLARGE]: [16, 16, 16, 14, 14, 12], [GuildIconSizes.XXLARGE]: [16, 16, 16, 14, 14, 12] };
let obj2 = { [GuildIconSizes.XXXSMALL]: 10, [GuildIconSizes.XXSMALL_12]: 12, [GuildIconSizes.XXSMALL]: 16, [GuildIconSizes.XSMALL_20]: 20, [GuildIconSizes.XSMALL]: 24, [GuildIconSizes.SMALL]: 30, [GuildIconSizes.SMALL_32]: 32, [GuildIconSizes.SMALL_36]: 36, [GuildIconSizes.NORMAL]: 40, [GuildIconSizes.LARGE]: 48, [GuildIconSizes.XLARGE]: 64, [GuildIconSizes.XXLARGE]: 80 };
let createStyles = createStyles_mod;
let obj3 = { guildIcon: { justifyContent: "center", alignItems: "center", overflow: "hidden" }, guildTextContainer: obj4, guildTextContainerInactive: obj5, guildTextContainerInactiveNested: obj6, guildText: { color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT, fontFamily: Fonts.PRIMARY_SEMIBOLD }, guildTextActive: { fontFamily: Fonts.PRIMARY_SEMIBOLD, color: nativeDefault.colors.WHITE }, guildTextContainerInactiveAlt: { backgroundColor: "transparent" } };
obj3[GuildIconSizes.XXXSMALL] = { width: 10, height: 10, borderRadius: 3.3333333333333335 };
obj3[GuildIconSizes.XXSMALL_12] = { width: 12, height: 12, borderRadius: 4 };
obj3[GuildIconSizes.XXSMALL] = { width: 16, height: 16, borderRadius: 5.333333333333333 };
obj3[GuildIconSizes.XSMALL_20] = { width: 20, height: 20, borderRadius: 6.666666666666667 };
obj3[GuildIconSizes.XSMALL] = { width: 24, height: 24, borderRadius: 8 };
obj3[GuildIconSizes.SMALL] = { width: 30, height: 30, borderRadius: 10 };
obj3[GuildIconSizes.SMALL_32] = { width: 32, height: 32, borderRadius: 10.666666666666666 };
obj3[GuildIconSizes.SMALL_36] = { width: 36, height: 36, borderRadius: 12 };
obj3[GuildIconSizes.NORMAL] = { width: 40, height: 40, borderRadius: 13.333333333333334 };
obj3[GuildIconSizes.LARGE] = { width: 48, height: 48, borderRadius: 16 };
obj3[GuildIconSizes.XLARGE] = { width: 64, height: 64, borderRadius: 21.333333333333332 };
obj3[GuildIconSizes.XXLARGE] = { width: 80, height: 80, borderRadius: 26.666666666666668 };
obj4 = { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
createStyles = createStyles.createStyles;
obj5 = { backgroundColor: nativeDefault.colors.MOBILE_GUILDBAR_ICON_BACKGROUND_DEFAULT };
obj6 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
({ color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT, fontFamily: Fonts.PRIMARY_SEMIBOLD });
({ fontFamily: Fonts.PRIMARY_SEMIBOLD, color: nativeDefault.colors.WHITE });
let closure_12 = createStyles(obj3);
const memoResult = react.memo(function GuildIconInner(guild) {
  let loadingStyle;
  let obj5;
  let ref;
  let tmp4;
  let tmp43;
  guild = guild.guild;
  let icon = guild.icon;
  if (icon === undefined) {
    icon = null;
  }
  let flag = guild.animate;
  if (flag === undefined) {
    flag = false;
  }
  ({ loadingStyle, size } = guild);
  if (size === undefined) {
    const tmp2 = ref;
    size = ref.NORMAL;
  }
  const selected = guild.selected;
  let flag2 = guild.TABS_altDefaultBackground;
  if (flag2 === undefined) {
    flag2 = false;
  }
  let flag3 = guild.nested;
  if (flag3 === undefined) {
    flag3 = false;
  }
  const textStyle = guild.textStyle;
  const preloadAnimation = guild.preloadAnimation;
  let str = guild.value;
  if (str === undefined) {
    str = "";
  }
  const style = guild.style;
  ref = undefined;
  closure_10 = undefined;
  let closure_11;
  closure_12 = undefined;
  let closure_13;
  let closure_14;
  let closure_15;
  loadingStyle = undefined;
  let guildTextContainerInactiveNested;
  let fontSize;
  const tmp3 = closure_12();
  const guildIcon = tmp3;
  if (null != guild) {
    let tmp18;
    let tmp21;
    let acronym;
    let tmp41Result;
    if (null != guild.icon) {
      let iconSource;
      if (guild instanceof textStyle) {
        iconSource = guild.getIconSource(closure_11[size], flag);
      } else {
        const tmp6 = preloadAnimation;
        iconSource = preloadAnimation(guild, closure_11[size], flag);
      }
      tmp4 = iconSource;
    }
    obj2 = selected;
    ref = selected.useRef(tmp4);
    let tmp11 = size;
    closure_10 = size(selected.useState({}), 2)[1];
    const tmp12 = size(selected.useState(false), 2);
    closure_11 = tmp12[1];
    let first = tmp12[0];
    closure_12 = selected.useRef(true);
    let tmp16 = icon(flag[9])(ref);
    let _Array = Array;
    if (Array.isArray(tmp16)) {
      const first1 = tmp16[0];
      let uri1;
      if (first1 != null) {
        uri1 = first1.uri;
      }
      tmp18 = uri1;
    } else if (null != tmp16) {
      let uri = tmp16;
      if (typeof tmp16 !== "number") {
        uri = tmp16.uri;
      }
      tmp18 = uri;
    }
    const _Array2 = Array;
    if (Array.isArray(tmp4)) {
      const first2 = tmp4[0];
      let uri3;
      if (first2 != null) {
        uri3 = first2.uri;
      }
      tmp21 = uri3;
    } else if (null != tmp4) {
      let uri2 = tmp4;
      if (typeof tmp4 !== "number") {
        uri2 = tmp4.uri;
      }
      tmp21 = uri2;
    }
    closure_13 = tmp24;
    let tmp25 = !tmp24;
    if (tmp18 !== tmp21) {
      tmp25 = preloadAnimation && "string" === tmp21;
      const tmp26 = preloadAnimation && "string" === tmp21;
    }
    closure_14 = tmp27;
    const effect = obj2.useEffect(() => () => {
      closure_1_12.current = false;
    }, []);
    let items = [!tmp25, flag, tmp18 !== tmp21, guild, icon, preloadAnimation, size];
    const effect1 = obj2.useEffect(() => {
      let iconSource;
      let tmp4;
      if (null != iconSource) {
        let tmp11;
        if (null != iconSource.icon) {
          if (iconSource instanceof textStyle) {
            iconSource = obj.getIconSource(closure_11[size], flag);
          } else {
            iconSource = preloadAnimation(obj, closure_11[size], flag);
          }
          tmp4 = iconSource;
        }
        iconSource = tmp4;
        const _Array = Array;
        if (Array.isArray(tmp4)) {
          const first = tmp4[0];
          let uri1;
          if (first != null) {
            uri1 = first.uri;
          }
          tmp11 = uri1;
        } else if (null != tmp4) {
          let uri = tmp4;
          if (typeof tmp4 !== "number") {
            uri = tmp4.uri;
          }
          tmp11 = uri;
        }
        if (!closure_14) {
          if (closure_13) {
            if (preloadAnimation) {
              if (typeof tmp11 === "string") {
                obj2 = { uri: tmp11 };
                const obj3 = icon(flag[10]);
                const preloadResult = obj3.preload(obj2);
                preloadResult.then(() => {
                  let current;
                  const timerId = setTimeout(() => {
                    if (ref.current) {
                      closure_2_9.current = current;
                      closure_2_10({});
                    }
                  }, 0);
                });
              }
            }
          }
        }
        if (closure_13) {
          ref.current = tmp4;
        }
      }
      tmp4 = null;
      if (null != icon) {
        tmp4 = { uri: icon };
        const obj4 = { uri: icon };
      }
    }, items);
    if (!tmp25) {
      tmp16 = tmp4;
    }
    closure_15 = tmp30;
    let tmp31;
    if (null != tmp16) {
      if (!first) {
        if (null != loadingStyle) {
          tmp31 = loadingStyle;
        }
      }
    }
    loadingStyle = tmp31;
    let tmp32;
    if (null == tmp16) {
      if (false === selected) {
        if (flag3) {
          guildTextContainerInactiveNested = tmp3.guildTextContainerInactiveNested;
        } else {
          guildTextContainerInactiveNested = flag2 ? tmp3.guildTextContainerInactiveAlt : tmp3.guildTextContainerInactive;
        }
        tmp32 = guildTextContainerInactiveNested;
      }
    }
    guildTextContainerInactiveNested = tmp32;
    if (null != guild) {
      acronym = style(guild);
    } else {
      let obj3 = guild(tmp15[8]);
      acronym = obj3.getAcronym(str);
    }
    let tmp35;
    if (null == tmp16) {
      let tmp37;
      if (undefined !== acronym) {
        tmp37 = arr3[acronym.length];
      }
      if (tmp37 == null) {
        tmp37 = arr3[arr3.length - 1];
      }
      tmp35 = tmp37;
    }
    fontSize = tmp35;
    let items1 = [style, size, tmp3, tmp31, tmp32, tmp35, selected, textStyle, null == tmp16];
    const memo = obj2.useMemo(() => {
      let tmp8;
      const items = [guildIcon.guildIcon, guildIcon[size], style];
      if (null != loadingStyle) {
        items.push(tmp2);
      }
      if (closure_15) {
        items.unshift(guildIcon.guildTextContainer);
      }
      if (null != guildTextContainerInactiveNested) {
        items.push(tmp6);
      }
      const obj = {
        handleLoaded() {
          return closure_1_11(true);
        },
        wrapperStyle: items,
        textComponentStyle: tmp8
      };
      tmp8 = undefined;
      if (closure_15) {
        const items1 = [false === selected ? guildIcon.guildText : guildIcon.guildTextActive, , ];
        obj2 = { fontSize };
        items1[1] = obj2;
        items1[2] = textStyle;
        tmp8 = items1;
      }
      return obj;
    }, items1);
    const wrapperStyle = memo.wrapperStyle;
    if (null == tmp16) {
      let obj4 = { shouldRasterizeIOS: true, style: wrapperStyle, collapsable: false, children: guildIcon(guild(flag[13]).NativeText, obj5) };
      obj5 = { numberOfLines: 1, ellipsizeMode: "tail", accessible: false, accessibilityRole: "none", accessibilityElementsHidden: true, experimental_useNativeText: true, style: tmp40, children: acronym };
      const tmp14Result = icon(flag[12]);
      tmp41Result = tmp41(tmp14Result, obj4);
    } else {
      const obj6 = { style: wrapperStyle, source: tmp16, onLoadEnd: tmp43, progressiveRenderingEnabled: true, fade: false };
      tmp43 = undefined;
      const tmp14Result2 = icon(flag[11]);
      if (null != loadingStyle) {
        tmp43 = tmp39;
      }
      tmp41Result = tmp41(tmp14Result2, obj6);
    }
    return tmp41Result;
  }
  tmp4 = null;
  if (null != icon) {
    let obj = { uri: icon };
    tmp4 = obj;
  }
});
let size = size_mod;
const result = size.fileFinishedImporting("modules/guild/native/GuildIcon.tsx");

export default memoResult;
export { GuildIconSizes };
export const ImageSizes = obj2;