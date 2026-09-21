// discord_app/modules/guild/native/GuildIcon.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

const require = fn;
let closure_5 = fn(5802).ExpressionSourceGuildRecord;
const GuildRecord = fn(2059);
({ getGuildIconSource: metroRequire, getGuildAcronym: closure_7 } = GuildRecord);
const Fonts = fn(1074).Fonts;
const jsx = fn(21).jsx;
const GuildIconSizes = {
  XXXSMALL: "XXXSMALL",
  XXSMALL_12: "XXSMALL_12",
  XXSMALL: "XXSMALL",
  XSMALL_20: "XSMALL_20",
  XSMALL: "XSMALL",
  SMALL: "SMALL",
  SMALL_32: "SMALL_32",
  SMALL_36: "SMALL_36",
  NORMAL: "NORMAL",
  LARGE: "LARGE",
  XLARGE: "XLARGE",
  XXLARGE: "XXLARGE",
};
let closure_10 = {
  [GuildIconSizes.XXXSMALL]: [6, 4, 4, 4, 2, 1],
  [GuildIconSizes.XXSMALL_12]: [8, 6, 6, 4, 4, 2],
  [GuildIconSizes.XXSMALL]: [10, 8, 8, 6, 6, 4],
  [GuildIconSizes.XSMALL_20]: [12, 10, 10, 8, 8, 6],
  [GuildIconSizes.XSMALL]: [16, 16, 16, 14, 14, 12],
  [GuildIconSizes.SMALL]: [16, 16, 16, 14, 14, 12],
  [GuildIconSizes.SMALL_32]: [16, 16, 16, 14, 14, 12],
  [GuildIconSizes.SMALL_36]: [16, 16, 16, 14, 14, 12],
  [GuildIconSizes.NORMAL]: [16, 16, 16, 14, 14, 12],
  [GuildIconSizes.LARGE]: [16, 16, 16, 14, 14, 12],
  [GuildIconSizes.XLARGE]: [16, 16, 16, 14, 14, 12],
  [GuildIconSizes.XXLARGE]: [16, 16, 16, 14, 14, 12],
};
let obj2 = {
  [GuildIconSizes.XXXSMALL]: 10,
  [GuildIconSizes.XXSMALL_12]: 12,
  [GuildIconSizes.XXSMALL]: 16,
  [GuildIconSizes.XSMALL_20]: 20,
  [GuildIconSizes.XSMALL]: 24,
  [GuildIconSizes.SMALL]: 30,
  [GuildIconSizes.SMALL_32]: 32,
  [GuildIconSizes.SMALL_36]: 36,
  [GuildIconSizes.NORMAL]: 40,
  [GuildIconSizes.LARGE]: 48,
  [GuildIconSizes.XLARGE]: 64,
  [GuildIconSizes.XXLARGE]: 80,
};
const createStyles = fn(4756);
let obj3 = { guildIcon: { justifyContent: "center", alignItems: "center", overflow: "hidden" } };
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
obj3.guildTextContainer = { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
let obj5 = { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
obj3.guildTextContainerInactive = { backgroundColor: nativeDefault.colors.MOBILE_GUILDBAR_ICON_BACKGROUND_DEFAULT };
let obj6 = { backgroundColor: nativeDefault.colors.MOBILE_GUILDBAR_ICON_BACKGROUND_DEFAULT };
obj3.guildTextContainerInactiveNested = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
const obj7 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj3.guildText = { color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT, fontFamily: Fonts.PRIMARY_SEMIBOLD };
const obj8 = { color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT, fontFamily: Fonts.PRIMARY_SEMIBOLD };
obj3.guildTextActive = { fontFamily: Fonts.PRIMARY_SEMIBOLD, color: nativeDefault.colors.WHITE };
obj3.guildTextContainerInactiveAlt = { backgroundColor: "transparent" };
let closure_12 = createStyles.createStyles(obj3);
const obj9 = { fontFamily: Fonts.PRIMARY_SEMIBOLD, color: nativeDefault.colors.WHITE };
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild/native/GuildIcon.tsx");

export default noop.memo(function GuildIconInner(guild) {
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
  obj2 = undefined;
  closure_12 = undefined;
  closure_13 = undefined;
  closure_14 = undefined;
  closure_15 = undefined;
  loadingStyle = undefined;
  c17 = undefined;
  let fontSize;
  const tmp3 = closure_12();
  const guildIcon = tmp3;
  if (null != guild) {
    if (null != guild.icon) {
      if (guild instanceof textStyle) {
        let iconSource = guild.getIconSource(obj2[size], flag);
      } else {
        iconSource = preloadAnimation(guild, obj2[size], flag);
      }
    }
  }
  let tmp4 = null;
  if (null != icon) {
    let obj = { uri: icon };
    tmp4 = obj;
  }
  ref = selected.useRef(tmp4);
  closure_10 = size(selected.useState({}), 2)[1];
  const tmp12 = size(selected.useState(false), 2);
  obj2 = tmp12[1];
  closure_12 = selected.useRef(true);
  let tmp15 = icon(flag[9])(ref);
  if (Array.isArray(tmp15)) {
    let first = tmp15[0];
    let uri1;
    if (first != null) {
      uri1 = first.uri;
    }
    let tmp16 = uri1;
  } else if (null != tmp15) {
    let uri = tmp15;
    if (typeof tmp15 !== "number") {
      uri = tmp15.uri;
    }
    tmp16 = uri;
  }
  if (Array.isArray(tmp4)) {
    const first1 = tmp4[0];
    let uri3;
    if (first1 != null) {
      uri3 = first1.uri;
    }
    let tmp19 = uri3;
  } else if (null != tmp4) {
    let uri2 = tmp4;
    if (typeof tmp4 !== "number") {
      uri2 = tmp4.uri;
    }
    tmp19 = uri2;
  }
  closure_13 = tmp22;
  let tmp23 = !tmp22;
  if (tmp16 !== tmp19) {
    let tmp24 = preloadAnimation;
    if (preloadAnimation) {
      tmp24 = "string" === tmp19;
    }
    tmp23 = tmp24;
  }
  closure_14 = tmp25;
  const effect = obj2.useEffect(
    () => () => {
      closure_1_12.current = false;
    },
    [],
  );
  let items = [!tmp23, flag, tmp16 !== tmp19, guild, icon, preloadAnimation, size];
  const effect1 = obj2.useEffect(() => {
    if (null != obj2) {
      if (null != obj.icon) {
        if (obj instanceof textStyle) {
          let iconSource = obj.getIconSource(dependencyMap[size], flag);
        } else {
          iconSource = preloadAnimation(obj, dependencyMap[size], flag);
        }
      }
    }
    let tmp4 = null;
    if (null != icon) {
      obj2 = { uri: icon };
      tmp4 = obj2;
    }
    obj2 = tmp4;
    if (Array.isArray(tmp4)) {
      const first = tmp4[0];
      let uri1;
      if (first != null) {
        uri1 = first.uri;
      }
      let tmp11 = uri1;
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
            const obj3 = icon(flag[10]);
            icon(flag[10])
              .preload(tmp11)
              .then(() => {
                const timerId = setTimeout(() => {
                  if (ref.current) {
                    closure_2_9.current = current;
                    closure_2_10({});
                  }
                }, 0);
              });
            const preloadResult = icon(flag[10]).preload(tmp11);
          }
        }
      }
    }
    if (closure_13) {
      ref.current = tmp4;
    }
  }, items);
  if (!tmp23) {
    tmp15 = tmp4;
  }
  closure_15 = tmp28;
  let tmp29;
  if (null != tmp15) {
    if (!tmp12[0]) {
      if (null != loadingStyle) {
        tmp29 = loadingStyle;
      }
    }
  }
  loadingStyle = tmp29;
  if (null == tmp15) {
    if (false === selected) {
      if (flag3) {
        let guildTextContainerInactiveNested = tmp3.guildTextContainerInactiveNested;
      } else {
        guildTextContainerInactiveNested = flag2 ? tmp3.guildTextContainerInactiveAlt : tmp3.guildTextContainerInactive;
      }
    }
  }
  c17 = tmp30;
  if (null != guild) {
    let acronym = style(guild);
  } else {
    acronym = guild(tmp14[8]).getAcronym(str);
    let obj3 = guild(tmp14[8]);
  }
  let tmp34;
  if (null == tmp15) {
    let tmp36;
    if (undefined !== acronym) {
      tmp36 = arr3[acronym.length];
    }
    if (tmp36 == null) {
      tmp36 = arr3[arr3.length - 1];
    }
    tmp34 = tmp36;
  }
  fontSize = tmp34;
  let items1 = [style, size, tmp3, tmp29, undefined, tmp34, selected, textStyle, null == tmp15];
  const memo = obj2.useMemo(() => {
    let items1 = guildIcon;
    const items = [guildIcon.guildIcon, guildIcon[size], style];
    if (null != loadingStyle) {
      items.push(tmp);
    }
    if (closure_15) {
      items.unshift(items1.guildTextContainer);
    }
    if (null != c17) {
      items.push(tmp5);
    }
    const obj = {
      handleLoaded() {
        return dependencyMap(true);
      },
      wrapperStyle: items,
      textComponentStyle: null,
    };
    if (!closure_15) {
      obj.textComponentStyle = undefined;
      return obj;
    } else {
      items1 = [, ,];
      items1[0] = false === selected ? items1.guildText : items1.guildTextActive;
      obj2 = { fontSize };
      items1[1] = obj2;
      items1[2] = textStyle;
      const tmp8 = false === selected ? items1.guildText : items1.guildTextActive;
    }
  }, items1);
  const wrapperStyle = memo.wrapperStyle;
  if (null == tmp15) {
    const obj4 = { shouldRasterizeIOS: true, style: wrapperStyle, collapsable: false, children: null };
    const obj5 = {
      numberOfLines: 1,
      ellipsizeMode: "tail",
      accessible: false,
      accessibilityRole: "none",
      accessibilityElementsHidden: true,
      experimental_useNativeText: true,
      style: tmp39,
      children: acronym,
    };
    obj4.children = tmp40(guild(tmp14[12]).NativeText, obj5);
    let tmp40Result = tmp40(tmp13(tmp14[11]), obj4);
    const tmp13Result = tmp13(tmp14[11]);
  } else {
    const obj6 = {
      style: wrapperStyle,
      source: tmp15,
      onLoadEnd: null,
      progressiveRenderingEnabled: true,
      fade: false,
    };
    let tmp42;
    if (null != loadingStyle) {
      tmp42 = tmp38;
    }
    obj6.onLoadEnd = tmp42;
    tmp40Result = tmp40(tmp13(tmp14[10]), obj6);
    const tmp13Result2 = tmp13(tmp14[10]);
  }
  return tmp40Result;
});
export { GuildIconSizes };
export const ImageSizes = obj2;
