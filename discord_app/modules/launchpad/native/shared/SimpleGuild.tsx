// === Module 16970: SimpleGuild ===

// Module 16970 (SimpleGuild)
import util from "util" /* 1114 */;
import noop from "module_19" /* 19 */;
import GuildReadStateStore from "GuildReadStateStore" /* 7636 */;
import GuildStore from "GuildStore" /* 1979 */;

require = fn;
const View = fn(17).View;
const getGuildIconSource = fn(1975).getGuildIconSource;
const ME = fn(1074).ME;
const jsx = fn(21).jsx;
const createStyles = fn(4560);
let closure_10 = createStyles.createStyles({ dmsWrapper: { flex: 1, justifyContent: "center", alignItems: "center" } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/launchpad/native/shared/SimpleGuild.tsx");

export default function SimpleGuild(guildId) {
  guildId = guildId.guildId;
  ({ backgroundColor, animated } = guildId);
  ({ guildIconRef, style, onPress, onLongPress, onAccessibilityAction, onLayout } = guildId);
  if (animated === undefined) {
    animated = true;
  }
  let flag = guildId.altDefaultBackground;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = guildId.selected;
  if (flag2 === undefined) {
    flag2 = false;
  }
  ({ size, iconSize } = guildId);
  if (iconSize === undefined) {
    iconSize = guildId(unread2[8]).GuildIconSizes.LARGE;
  }
  ({ borderRadius, unread, badge } = guildId);
  let str;
  unread2 = undefined;
  let badge2;
  const tmp3 = closure_10();
  ({ iconStroke, iconBackground, iconBackgroundBrand } = str(unread2[9])());
  let obj = guildId(unread2[10]);
  const items = [GuildStore];
  const stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(guildId));
  str = undefined;
  if (stateFromStores != null) {
    str = stateFromStores.name;
  }
  if (str == null) {
    str = "";
  }
  let tmp7Result = tmp7(tmp5[10]);
  const items1 = [GuildReadStateStore];
  const items2 = [guildId];
  const stateFromStoresObject = tmp7Result.useStateFromStoresObject(items1, () => ({ unread: GuildReadStateStore.hasUnread(guildId), badge: GuildReadStateStore.getMentionCount(guildId) }), items2);
  unread2 = stateFromStoresObject.unread;
  badge2 = stateFromStoresObject.badge;
  tmp7Result = tmp7(tmp5[11]);
  const tmp12 = str(unread2[12])({ size, style });
  const containerSize = tmp12.containerSize;
  const items3 = [str, unread2, badge2];
  ({ containerSizeStyle, containerStyles } = tmp12);
  const memo = badge2.useMemo(() => {
    if ("" === str) {
      return tmp;
    } else {
      if (null == badge2) {
        if (true === unread2) {
          const intl2 = util.intl;
          let obj = { guildName: tmp };
          let formatToPlainStringResult = intl2.formatToPlainString(util.t.lzqe42, obj);
        } else {
          const intl = util.intl;
          obj = { guildName: tmp, mentions: tmp17 };
          formatToPlainStringResult = intl.formatToPlainString(util.t["/uzRss"], obj);
        }
      }
      const intl3 = util.intl;
      obj = { guildName: tmp, mentions: badge2 };
      formatToPlainStringResult = intl3.formatToPlainString(util.t["/uzRss"], obj);
    }
  }, items3);
  const tmp11 = animated ? tmp7Result.SimpleGuildContainerAnimated : tmp7Result.SimpleGuildContainer;
  const tmp6 = str(unread2[9])();
  const activityIndicatorState = guildId(unread2[14]).useActivityIndicatorState(guildId);
  let tmp15 = unread2;
  if (!unread2) {
    tmp15 = flag2;
  }
  if (!tmp15) {
    tmp15 = badge2 > 0;
  }
  if (!tmp15) {
    tmp15 = null != activityIndicatorState.source;
  }
  if (tmp15) {
    tmp15 = "transparent" === backgroundColor;
  }
  let tmp17Result;
  if (null != stateFromStores) {
    let tmp18 = flag2;
    if (flag2) {
      tmp18 = !tmp15;
    }
    tmp17Result = getGuildIconSource(stateFromStores, containerSize, tmp18);
  }
  if (null !== tmp17Result) {
    if (typeof tmp17Result === "object") {
      if ("uri" in tmp17Result) {
        let tmp19 = null != tmp17Result.uri;
      }
      obj = { guildIconRef, guildId: null, style: null, backgroundColor: null, selected: null, size: null, borderRadius: null, onPress: null, onLongPress: null, unread: null, badge: null, onLayout: null, onAccessibilityAction: null, accessibilityLabel: null, usingCutout: null, activityIndicatorState: null, children: null };
      let id;
      if (stateFromStores != null) {
        id = stateFromStores.id;
      }
      obj.guildId = id;
      obj.style = containerStyles;
      obj.backgroundColor = backgroundColor;
      obj.selected = flag2;
      obj.size = size;
      obj.borderRadius = borderRadius;
      obj.onPress = onPress;
      obj.onLongPress = onLongPress;
      if (unread == null) {
        unread = unread2;
      }
      obj.unread = unread;
      if (badge == null) {
        badge = badge2;
      }
      obj.badge = badge;
      obj.onLayout = onLayout;
      obj.onAccessibilityAction = onAccessibilityAction;
      obj.accessibilityLabel = memo;
      obj.usingCutout = tmp15;
      obj.activityIndicatorState = activityIndicatorState;
      if (guildId === ME) {
        obj = { style: tmp3.dmsWrapper, children: null };
        let colors = tmp4(tmp5[16]).colors;
        const obj1 = { color: flag2 ? colors.WHITE : colors.MOBILE_GUILDBAR_ICON_DEFAULT };
        colors = tmp20(tmp7(tmp5[15]).ChatIcon, obj1);
        obj.children = colors;
        let tmp20Result = tmp20(View, obj);
      } else {
        if (tmp15) {
          let num4 = 13;
          let tmp4Result = tmp4(tmp5[17]);
          if (badge2 <= 0) {
            let num5 = 0;
            if (unread2) {
              num5 = 11;
            }
            num4 = num5;
          }
          const obj2 = { cutoutBottomRightSize: num4, cutoutBottomRightInsetX: 6, cutoutBottomRightInsetY: 7, cutoutTopRightSize: null, cutoutTopRightInsetX: 8, cutoutTopRightInsetY: 8, imageSize: null, imageSource: null, imageBorderRadius: null, imageBackgroundColor: null, clipOuterAmount: null, borderStroke: 1, borderStrokeColor: null };
          let num6 = 0;
          if (null != activityIndicatorState.source) {
            num6 = 13;
          }
          obj2.cutoutTopRightSize = num6;
          obj2.imageSize = containerSize;
          obj2.imageSource = tmp17Result;
          obj2.imageBorderRadius = borderRadius;
          obj2.imageBackgroundColor = tmp19 ? iconBackground.color : iconBackgroundBrand.color;
          let num7 = 0;
          if (flag2) {
            num7 = 3;
          }
          obj2.clipOuterAmount = num7;
          obj2.borderStrokeColor = iconStroke.color;
          tmp20Result = tmp20(tmp4Result, obj2);
        } else {
          const obj3 = { guild: stateFromStores, size: iconSize, selected: flag2, animate: flag2, TABS_altDefaultBackground: flag, style: null };
          let tmp24 = null;
          tmp4Result = tmp4(tmp5[8]);
          if (null != size) {
            tmp24 = containerSizeStyle;
          }
          obj3.style = tmp24;
          tmp20Result = tmp20(tmp4Result, obj3);
        }
        obj.children = tmp20Result;
        return tmp20(tmp11, obj);
      }
    }
  }
  tmp19 = null != tmp17Result;
};