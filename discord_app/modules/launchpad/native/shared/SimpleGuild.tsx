// discord_app/modules/launchpad/native/shared/SimpleGuild.tsx
import noop from "noop";
import { View } from "module_16133";
import { getGuildIconSource } from "GuildNSFWContentLevel";
import updateGuildUnreadSentinel from "updateGuildUnreadSentinel";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import { ME } from "ME";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

const require = arg1;
let closure_10 = createCacheKey.createStyles({ dmsWrapper: { flex: 1, justifyContent: "center", alignItems: "center" } });
const result = require("GuildNSFWContentLevel").fileFinishedImporting("modules/launchpad/native/shared/SimpleGuild.tsx");

export default function SimpleGuild(guildId) {
  let animated;
  let backgroundColor;
  let badge;
  let borderRadius;
  let containerSizeStyle;
  let containerStyles;
  let guildIconRef;
  let iconBackground;
  let iconBackgroundBrand;
  let iconSize;
  let iconStroke;
  let onAccessibilityAction;
  let onLayout;
  let onLongPress;
  let onPress;
  let size;
  let style;
  let unread;
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
  const tmp3 = callback();
  ({ iconStroke, iconBackground, iconBackgroundBrand } = str(unread2[9])());
  let obj = guildId(unread2[10]);
  const items = [createGuildRecordFromRust];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_7.getGuild(guildId));
  str = undefined;
  if (stateFromStores != null) {
    str = stateFromStores.name;
  }
  if (str == null) {
    str = "";
  }
  let tmp7Result = tmp7(tmp5[10]);
  const items1 = [updateGuildUnreadSentinel];
  const items2 = [guildId];
  const stateFromStoresObject = tmp7Result.useStateFromStoresObject(items1, () => ({ unread: outer1_6.hasUnread(guildId), badge: outer1_6.getMentionCount(guildId) }), items2);
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
          const intl2 = guildId(unread2[13]).intl;
          let obj = { guildName: null };
          obj[0] = tmp;
          let formatToPlainStringResult = intl2.formatToPlainString(guildId(unread2[13]).t.lzqe42, obj);
        } else {
          const intl = guildId(unread2[13]).intl;
          obj = { guildName: null, mentions: null };
          obj[0] = tmp;
          obj[1] = tmp17;
          formatToPlainStringResult = intl.formatToPlainString(guildId(unread2[13]).t["/uzRss"], obj);
        }
      }
      const intl3 = guildId(unread2[13]).intl;
      obj = { guildName: null, mentions: null };
      obj[0] = tmp;
      obj[1] = badge2;
      formatToPlainStringResult = intl3.formatToPlainString(guildId(unread2[13]).t["/uzRss"], obj);
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
    const tmp17 = getGuildIconSource;
  }
  if (null !== tmp17Result) {
    if (typeof tmp17Result === "object") {
      if ("uri" in tmp17Result) {
        let tmp19 = null != tmp17Result.uri;
      }
      obj = { guildIconRef: null, guildId: null, style: null, backgroundColor: null, selected: null, size: null, borderRadius: null, onPress: null, onLongPress: null, unread: null, badge: null, onLayout: null, onAccessibilityAction: null, accessibilityLabel: null, usingCutout: null, activityIndicatorState: null, children: null };
      obj[0] = guildIconRef;
      let id;
      if (stateFromStores != null) {
        id = stateFromStores.id;
      }
      obj[1] = id;
      obj[2] = containerStyles;
      obj[3] = backgroundColor;
      obj[4] = flag2;
      obj[5] = size;
      obj[6] = borderRadius;
      obj[7] = onPress;
      obj[8] = onLongPress;
      if (unread == null) {
        unread = unread2;
      }
      obj[9] = unread;
      if (badge == null) {
        badge = badge2;
      }
      obj[10] = badge;
      obj[11] = onLayout;
      obj[12] = onAccessibilityAction;
      obj[13] = memo;
      obj[14] = tmp15;
      obj[15] = activityIndicatorState;
      if (guildId === ME) {
        obj = { style: null, children: null };
        obj[0] = tmp3.dmsWrapper;
        let colors = tmp4(tmp5[16]).colors;
        const obj1 = { color: null };
        obj1[0] = flag2 ? colors.WHITE : colors.MOBILE_GUILDBAR_ICON_DEFAULT;
        colors = tmp20(tmp7(tmp5[15]).ChatIcon, obj1);
        obj[1] = colors;
        let tmp20Result = tmp20(View, obj);
        const tmp27 = View;
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
          const obj2 = { cutoutBottomRightSize: null, cutoutBottomRightInsetX: 6, cutoutBottomRightInsetY: 7, cutoutTopRightSize: null, cutoutTopRightInsetX: 8, cutoutTopRightInsetY: 8, imageSize: null, imageSource: null, imageBorderRadius: null, imageBackgroundColor: null, clipOuterAmount: null, borderStroke: 1, borderStrokeColor: null };
          obj2[0] = num4;
          let num6 = 0;
          if (null != activityIndicatorState.source) {
            num6 = 13;
          }
          obj2[3] = num6;
          obj2[6] = containerSize;
          obj2[7] = tmp17Result;
          obj2[8] = borderRadius;
          obj2[9] = tmp19 ? iconBackground.color : iconBackgroundBrand.color;
          let num7 = 0;
          if (flag2) {
            num7 = 3;
          }
          obj2[10] = num7;
          obj2[12] = iconStroke.color;
          tmp20Result = tmp20(tmp4Result, obj2);
        } else {
          const obj3 = { guild: null, size: null, selected: null, animate: null, TABS_altDefaultBackground: null, style: null };
          obj3[0] = stateFromStores;
          obj3[1] = iconSize;
          obj3[2] = flag2;
          obj3[3] = flag2;
          obj3[4] = flag;
          let tmp24 = null;
          tmp4Result = tmp4(tmp5[8]);
          if (null != size) {
            tmp24 = containerSizeStyle;
          }
          obj3[5] = tmp24;
          tmp20Result = tmp20(tmp4Result, obj3);
        }
        obj[16] = tmp20Result;
        return tmp20(tmp11, obj);
      }
    }
  }
  tmp19 = null != tmp17Result;
};