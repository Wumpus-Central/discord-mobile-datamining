// discord_app/modules/launchpad/native/shared/SimpleGuild.tsx
import util from "../../../../intl/index.native.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import GuildReadStateStore from "../../../../stores/GuildReadStateStore.tsx";
import GuildStore from "../../../../stores/GuildStore.tsx";

require = fn;
const View = fn(17).View;
const getGuildIconSource = fn(1975).getGuildIconSource;
const ME = fn(1074).ME;
const jsx = fn(21).jsx;
const createStyles = fn(4636);
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
  const tmp6 = str(unread2[9])();
  const items = [GuildStore];
  const stateFromStores = guildId(unread2[10]).useStateFromStores(items, () => GuildStore.getGuild(guildId));
  str = undefined;
  if (stateFromStores != null) {
    str = stateFromStores.name;
  }
  if (str == null) {
    str = "";
  }
  let obj = guildId(unread2[10]);
  const items1 = [GuildReadStateStore];
  const items2 = [guildId];
  const stateFromStoresObject = guildId(unread2[10]).useStateFromStoresObject(
    items1,
    () => ({ unread: GuildReadStateStore.hasUnread(guildId), badge: GuildReadStateStore.getMentionCount(guildId) }),
    items2,
  );
  unread2 = stateFromStoresObject.unread;
  badge2 = stateFromStoresObject.badge;
  const tmp7Result3 = guildId(unread2[11]);
  const tmp12 = str(unread2[12])({ size, style });
  const containerSize = tmp12.containerSize;
  const items3 = [str, unread2, badge2];
  ({ containerSizeStyle, containerStyles } = tmp12);
  const memo = badge2.useMemo(() => {
    if ("" === str) {
      return str;
    } else {
      if (null == badge2) {
        if (true === unread2) {
          const intl2 = util.intl;
          const obj2 = { guildName: str };
          let formatToPlainStringResult = intl2.formatToPlainString(util.t.lzqe42, obj2);
        } else {
          const intl = util.intl;
          const obj = { guildName: str, mentions: badge2 };
          formatToPlainStringResult = intl.formatToPlainString(util.t["/uzRss"], obj);
        }
      }
      const intl3 = util.intl;
      const obj3 = { guildName: str, mentions: badge2 };
      formatToPlainStringResult = intl3.formatToPlainString(util.t["/uzRss"], obj3);
    }
  }, items3);
  const tmp11 = animated ? tmp7Result3.SimpleGuildContainerAnimated : tmp7Result3.SimpleGuildContainer;
  const tmp7Result = guildId(unread2[10]);
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
      let obj2 = {
        guildIconRef,
        guildId: null,
        style: null,
        backgroundColor: null,
        selected: null,
        size: null,
        borderRadius: null,
        onPress: null,
        onLongPress: null,
        unread: null,
        badge: null,
        onLayout: null,
        onAccessibilityAction: null,
        accessibilityLabel: null,
        usingCutout: null,
        activityIndicatorState: null,
        children: null,
      };
      let id;
      if (stateFromStores != null) {
        id = stateFromStores.id;
      }
      obj2.guildId = id;
      obj2.style = containerStyles;
      obj2.backgroundColor = backgroundColor;
      obj2.selected = flag2;
      obj2.size = size;
      obj2.borderRadius = borderRadius;
      obj2.onPress = onPress;
      obj2.onLongPress = onLongPress;
      if (unread == null) {
        unread = unread2;
      }
      obj2.unread = unread;
      if (badge == null) {
        badge = badge2;
      }
      obj2.badge = badge;
      obj2.onLayout = onLayout;
      obj2.onAccessibilityAction = onAccessibilityAction;
      obj2.accessibilityLabel = memo;
      obj2.usingCutout = tmp15;
      obj2.activityIndicatorState = activityIndicatorState;
      if (guildId === ME) {
        let obj3 = { style: tmp3.dmsWrapper, children: null };
        let colors = tmp4(tmp5[16]).colors;
        const obj4 = { color: flag2 ? colors.WHITE : colors.MOBILE_GUILDBAR_ICON_DEFAULT };
        colors = jsx(tmp7(tmp5[15]).ChatIcon, { color: flag2 ? colors.WHITE : colors.MOBILE_GUILDBAR_ICON_DEFAULT });
        obj3.children = colors;
        <View style={tmp3.dmsWrapper}>{null}</View>;
      } else {
        if (tmp15) {
          let num4 = 13;
          if (badge2 <= 0) {
            let num5 = 0;
            if (unread2) {
              num5 = 11;
            }
            num4 = num5;
          }
          const obj5 = {
            cutoutBottomRightSize: num4,
            cutoutBottomRightInsetX: 6,
            cutoutBottomRightInsetY: 7,
            cutoutTopRightSize: null,
            cutoutTopRightInsetX: 8,
            cutoutTopRightInsetY: 8,
            imageSize: null,
            imageSource: null,
            imageBorderRadius: null,
            imageBackgroundColor: null,
            clipOuterAmount: null,
            borderStroke: 1,
            borderStrokeColor: null,
          };
          let num6 = 0;
          if (null != activityIndicatorState.source) {
            num6 = 13;
          }
          obj5.cutoutTopRightSize = num6;
          obj5.imageSize = containerSize;
          obj5.imageSource = tmp17Result;
          obj5.imageBorderRadius = borderRadius;
          obj5.imageBackgroundColor = tmp19 ? iconBackground.color : iconBackgroundBrand.color;
          let num7 = 0;
          if (flag2) {
            num7 = 3;
          }
          obj5.clipOuterAmount = num7;
          obj5.borderStrokeColor = iconStroke.color;
          let tmp20Result2 = jsx(tmp4(tmp5[17]), {
            cutoutBottomRightSize: num4,
            cutoutBottomRightInsetX: 6,
            cutoutBottomRightInsetY: 7,
            cutoutTopRightSize: null,
            cutoutTopRightInsetX: 8,
            cutoutTopRightInsetY: 8,
            imageSize: null,
            imageSource: null,
            imageBorderRadius: null,
            imageBackgroundColor: null,
            clipOuterAmount: null,
            borderStroke: 1,
            borderStrokeColor: null,
          });
          const tmp4Result = tmp4(tmp5[17]);
        } else {
          const obj6 = {
            guild: stateFromStores,
            size: iconSize,
            selected: flag2,
            animate: flag2,
            TABS_altDefaultBackground: flag,
            style: null,
          };
          let tmp24 = null;
          if (null != size) {
            tmp24 = containerSizeStyle;
          }
          obj6.style = tmp24;
          tmp20Result2 = jsx(tmp4(tmp5[8]), {
            guild: stateFromStores,
            size: iconSize,
            selected: flag2,
            animate: flag2,
            TABS_altDefaultBackground: flag,
            style: null,
          });
          const tmp4Result2 = tmp4(tmp5[8]);
        }
        obj2.children = tmp20Result2;
        return <tmp11 {...obj2} />;
      }
    }
  }
  tmp19 = null != tmp17Result;
  const tmp7Result4 = guildId(unread2[14]);
}
