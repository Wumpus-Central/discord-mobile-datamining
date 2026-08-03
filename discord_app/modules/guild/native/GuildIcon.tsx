// === Module 5570: GuildIconSizes ===

// Module 5570 (GuildIconSizes)
import _slicedToArray from "_slicedToArray";
import importAllResult from "noop";
import { ExpressionSourceGuildRecord as closure_5 } from "getEmojiSourceData";
import GuildNSFWContentLevel from "GuildNSFWContentLevel";
import { Fonts } from "ME";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

let closure_6;
let error;
const require = arg1;
let c4 = importAllResult;
({ getGuildIconSource: closure_6, getGuildAcronym: error } = GuildNSFWContentLevel);
let obj = { XXXSMALL: "XXXSMALL", XXSMALL_12: "XXSMALL_12", XXSMALL: "XXSMALL", XSMALL_20: "XSMALL_20", XSMALL: "XSMALL", SMALL: "SMALL", SMALL_32: "SMALL_32", SMALL_36: "SMALL_36", NORMAL: "NORMAL", LARGE: "LARGE", XLARGE: "XLARGE", XXLARGE: "XXLARGE" };
let closure_10 = { [obj.XXXSMALL]: [6, 4, 4, 4, 2, 1], [obj.XXSMALL_12]: [8, 6, 6, 4, 4, 2], [obj.XXSMALL]: [10, 8, 8, 6, 6, 4], [obj.XSMALL_20]: [12, 10, 10, 8, 8, 6], [obj.XSMALL]: [16, 16, 16, 14, 14, 12], [obj.SMALL]: [16, 16, 16, 14, 14, 12], [obj.SMALL_32]: [16, 16, 16, 14, 14, 12], [obj.SMALL_36]: [16, 16, 16, 14, 14, 12], [obj.NORMAL]: [16, 16, 16, 14, 14, 12], [obj.LARGE]: [16, 16, 16, 14, 14, 12], [obj.XLARGE]: [16, 16, 16, 14, 14, 12], [obj.XXLARGE]: [16, 16, 16, 14, 14, 12] };
obj = { [obj.XXXSMALL]: 10, [obj.XXSMALL_12]: 12, [obj.XXSMALL]: 16, [obj.XSMALL_20]: 20, [obj.XSMALL]: 24, [obj.SMALL]: 30, [obj.SMALL_32]: 32, [obj.SMALL_36]: 36, [obj.NORMAL]: 40, [obj.LARGE]: 48, [obj.XLARGE]: 64, [obj.XXLARGE]: 80 };
let obj1 = { guildIcon: { justifyContent: "center", alignItems: "center", overflow: "hidden" } };
obj1[obj.XXXSMALL] = { width: 10, height: 10, borderRadius: 3.3333333333333335 };
obj1[obj.XXSMALL_12] = { width: 12, height: 12, borderRadius: 4 };
obj1[obj.XXSMALL] = { width: 16, height: 16, borderRadius: 5.333333333333333 };
obj1[obj.XSMALL_20] = { width: 20, height: 20, borderRadius: 6.666666666666667 };
obj1[obj.XSMALL] = { width: 24, height: 24, borderRadius: 8 };
obj1[obj.SMALL] = { width: 30, height: 30, borderRadius: 10 };
obj1[obj.SMALL_32] = { width: 32, height: 32, borderRadius: 10.666666666666666 };
obj1[obj.SMALL_36] = { width: 36, height: 36, borderRadius: 12 };
obj1[obj.NORMAL] = { width: 40, height: 40, borderRadius: 13.333333333333334 };
obj1[obj.LARGE] = { width: 48, height: 48, borderRadius: 16 };
obj1[obj.XLARGE] = { width: 64, height: 64, borderRadius: 21.333333333333332 };
obj1[obj.XXLARGE] = { width: 80, height: 80, borderRadius: 26.666666666666668 };
obj1.guildTextContainer = { backgroundColor: require("Themes").colors.BACKGROUND_BRAND };
createCacheKey = { backgroundColor: require("Themes").colors.MOBILE_GUILDBAR_ICON_BACKGROUND_DEFAULT };
obj1.guildTextContainerInactive = createCacheKey;
const obj2 = { backgroundColor: require("Themes").colors.BACKGROUND_BRAND };
obj1.guildTextContainerInactiveNested = { backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW };
const obj4 = { backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW };
obj1.guildText = { color: require("Themes").colors.INTERACTIVE_TEXT_DEFAULT, fontFamily: Fonts.PRIMARY_SEMIBOLD };
const obj5 = { color: require("Themes").colors.INTERACTIVE_TEXT_DEFAULT, fontFamily: Fonts.PRIMARY_SEMIBOLD };
obj1.guildTextActive = { fontFamily: Fonts.PRIMARY_SEMIBOLD, color: require("Themes").colors.WHITE };
obj1.guildTextContainerInactiveAlt = { backgroundColor: "transparent" };
let closure_12 = createCacheKey.createStyles(obj1);
const obj6 = { fontFamily: Fonts.PRIMARY_SEMIBOLD, color: require("Themes").colors.WHITE };
const memoResult = importAllResult.memo(function GuildIconInner(guild) {
  let loadingStyle;
  let size;
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
  let c8;
  ref = undefined;
  let table;
  let obj;
  let callback;
  let c13;
  let c14;
  let c15;
  let c16;
  let c17;
  let c18;
  const tmp3 = callback();
  c8 = tmp3;
  if (null != guild) {
    if (null != guild.icon) {
      if (guild instanceof textStyle) {
        let iconSource = guild.getIconSource(obj[size], flag);
      } else {
        iconSource = preloadAnimation(guild, obj[size], flag);
      }
    }
  }
  let tmp4 = null;
  if (null != icon) {
    obj = { uri: null };
    obj[0] = icon;
    tmp4 = obj;
  }
  let obj1 = selected;
  ref = selected.useRef(tmp4);
  table = size(selected.useState({}), 2)[1];
  const tmp12 = size(selected.useState(false), 2);
  obj = tmp12[1];
  callback = selected.useRef(true);
  let tmp15 = icon(flag[9])(ref);
  if (Array.isArray(tmp15)) {
    let first = tmp15[0];
    let uri;
    if (first != null) {
      uri = first.uri;
    }
    let tmp16 = uri;
  } else if (null != tmp15) {
    uri = tmp15;
    if (typeof tmp15 !== "Object") {
      uri = tmp15.uri;
    }
    tmp16 = uri;
  }
  if (Array.isArray(tmp4)) {
    const first1 = tmp4[0];
    let uri1;
    if (first1 != null) {
      uri1 = first1.uri;
    }
    let tmp19 = uri1;
  } else if (null != tmp4) {
    let uri2 = tmp4;
    if (typeof tmp4 !== "Object") {
      uri2 = tmp4.uri;
    }
    tmp19 = uri2;
  }
  c13 = tmp22;
  let tmp23 = !tmp22;
  if (tmp16 !== tmp19) {
    let tmp24 = preloadAnimation;
    if (preloadAnimation) {
      tmp24 = "string" === tmp19;
    }
    tmp23 = tmp24;
  }
  c14 = tmp25;
  const effect = obj1.useEffect(() => () => {
    closure_12.current = false;
  }, []);
  let items = [!tmp23, flag, tmp16 !== tmp19, guild, icon, preloadAnimation, size];
  const effect1 = obj1.useEffect(() => {
    let obj = guild;
    if (null != guild) {
      if (null != obj.icon) {
        if (obj instanceof textStyle) {
          let iconSource = obj.getIconSource(dependencyMap[tmp], tmp2);
        } else {
          iconSource = preloadAnimation(obj, dependencyMap[tmp], tmp2);
        }
      }
    }
    let tmp4 = null;
    if (null != icon) {
      obj = { uri: null };
      obj[0] = tmp3;
      tmp4 = obj;
    }
    guild = tmp4;
    if (Array.isArray(tmp4)) {
      const first = tmp4[0];
      let uri;
      if (first != null) {
        uri = first.uri;
      }
      let tmp11 = uri;
    } else if (null != tmp4) {
      uri = tmp4;
      if (typeof tmp4 !== "Object") {
        uri = tmp4.uri;
      }
      tmp11 = uri;
    }
    if (!c14) {
      if (c13) {
        if (preloadAnimation) {
          if (typeof tmp11 !== "__FORMATJS_LISTFORMAT_DATA__") {
            const obj3 = icon(flag[10]);
            icon(flag[10]).preload(tmp11).then(() => {
              const timerId = setTimeout(() => {
                if (outer1_12.current) {
                  outer1_9.current = closure_0;
                  outer1_10({});
                }
              }, 0);
            });
            const preloadResult = icon(flag[10]).preload(tmp11);
          }
        }
      }
    }
    if (c13) {
      ref.current = tmp4;
    }
  }, items);
  if (!tmp23) {
    tmp15 = tmp4;
  }
  c15 = tmp28;
  let tmp29;
  if (null != tmp15) {
    if (!tmp12[0]) {
      if (null != loadingStyle) {
        tmp29 = loadingStyle;
      }
    }
  }
  c16 = tmp29;
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
  c18 = tmp34;
  let items1 = [style, size, tmp3, tmp29, undefined, tmp34, selected, textStyle, null == tmp15];
  const memo = obj1.useMemo(() => {
    let items1 = _undefined;
    const items = [_undefined.guildIcon, _undefined[size], style];
    if (null != c16) {
      items.push(tmp);
    }
    if (c15) {
      items.unshift(items1.guildTextContainer);
    }
    if (null != c17) {
      items.push(tmp5);
    }
    let obj = {
      handleLoaded() {
        return callback(true);
      },
      wrapperStyle: items,
      textComponentStyle: null
    };
    if (!c15) {
      obj[2] = undefined;
      return obj;
    } else {
      items1 = [, , ];
      items1[0] = false === selected ? items1.guildText : items1.guildTextActive;
      obj = { fontSize: null };
      obj[0] = c18;
      items1[1] = obj;
      items1[2] = textStyle;
      const tmp8 = false === selected ? items1.guildText : items1.guildTextActive;
    }
  }, items1);
  const wrapperStyle = memo.wrapperStyle;
  if (null == tmp15) {
    obj = { shouldRasterizeIOS: true, style: null, collapsable: false, children: null };
    obj[1] = wrapperStyle;
    let tmp13Result = tmp13(tmp14[11]);
    obj = { numberOfLines: 1, ellipsizeMode: "tail", accessible: false, accessibilityRole: "none", accessibilityElementsHidden: true, experimental_useNativeText: true, style: null, children: null };
    obj[6] = tmp39;
    obj[7] = acronym;
    obj[3] = tmp40(guild(tmp14[12]).NativeText, obj);
    let tmp40Result = tmp40(tmp13Result, obj);
  } else {
    obj1 = { style: null, source: null, onLoadEnd: null, progressiveRenderingEnabled: true, fade: false };
    obj1[0] = wrapperStyle;
    obj1[1] = tmp15;
    let tmp42;
    tmp13Result = tmp13(tmp14[10]);
    if (null != loadingStyle) {
      tmp42 = tmp38;
    }
    obj1[2] = tmp42;
    tmp40Result = tmp40(tmp13Result, obj1);
  }
  return tmp40Result;
});
const result = require("getEmojiSourceData").fileFinishedImporting("modules/guild/native/GuildIcon.tsx");

export default memoResult;
export const GuildIconSizes = obj;
export const ImageSizes = obj;