// discord_app/modules/activity_status/native/ActivityStatus.tsx
import noop from "../../../../_runtime/metro/00019__.js";
import PresenceStore from "../../../stores/PresenceStore.tsx";
import RelationshipStore from "../../../stores/RelationshipStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";

const require = fn;
const View = fn(17).View;
const DOT_UNICODE = fn(11227).DOT_UNICODE;
const ActivityTypes = fn(1074).ActivityTypes;
const jsxProd = fn(21);
({ jsx: c10, Fragment: closure_11, jsxs: closure_12 } = jsxProd);
const createStyles = fn(4829);
let closure_13 = createStyles.createStyles({
  container: { flexDirection: "row", alignItems: "center", gap: 4 },
  icon: { marginTop: 1 },
  emoji: { marginRight: 0 },
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/activity_status/native/ActivityStatus.tsx");

export default function ActivityStatus(guildId) {
  const userId = guildId.userId;
  ({ iconStyle, textStyle, emojiSize } = guildId);
  if (emojiSize === undefined) {
    emojiSize = 14;
  }
  ({ maxFontSizeMultiplier, animate } = guildId);
  if (animate === undefined) {
    animate = true;
  }
  let flag = guildId.hideEmoji;
  if (flag === undefined) {
    flag = false;
  }
  const tmp = closure_13();
  const items = [UserStore];
  const stateFromStores = userId(504).useStateFromStores(items, () => UserStore.getUser(userId));
  const obj = userId(504);
  const tmp2 = userId;
  const items1 = [PresenceStore];
  const stateFromStores1 = userId(504).useStateFromStores(items1, () => PresenceStore.getActivities(userId));
  const obj2 = userId(504);
  const voiceChannel = stateFromStores1(11229)({ userId, guildId: guildId.guildId }).voiceChannel;
  const items2 = [stateFromStores1];
  const memo = noop.useMemo(() => {
    let found;
    if (stateFromStores1 != null) {
      found = stateFromStores1.find((type) => type.type === constants.CUSTOM_STATUS);
    }
    if (null == found) {
      return null;
    } else {
      let trimmed;
      if (found.state != null) {
        trimmed = str.trim();
      }
      if (trimmed == null) {
        trimmed = null;
      }
      let tmp3 = null;
      if ("" !== trimmed) {
        tmp3 = trimmed;
      }
      if (null != tmp3) {
        let tmp4 = found;
      } else {
        tmp4 = null;
      }
      return tmp4;
    }
  }, items2);
  const tmp6 = stateFromStores1(11228)(userId);
  let state;
  if (memo != null) {
    state = memo.state;
  }
  const gameMentionsAsPlainText = userId(11230).useGameMentionsAsPlainText(state);
  const obj3 = userId(11230);
  const items3 = [RelationshipStore];
  if (tmp2Result.useStateFromStores(items3, () => RelationshipStore.isBlockedOrIgnored(userId))) {
    return null;
  } else {
    let bot;
    if (stateFromStores != null) {
      bot = stateFromStores.bot;
    }
    let state1;
    if (memo != null) {
      state1 = memo.state;
    }
    if (null != tmp6) {
      let found;
      if (stateFromStores1 != null) {
        found = stateFromStores1.find(tmp5(11236));
      }
      const obj4 = {
        game: found,
        iconStyle: null,
        textStyle: null,
        maxFontSizeMultiplier: null,
        hideIcon: null,
        hideText: null,
      };
      const items4 = [tmp.icon, iconStyle];
      obj4.iconStyle = items4;
      obj4.textStyle = textStyle;
      obj4.maxFontSizeMultiplier = maxFontSizeMultiplier;
      obj4.hideIcon = tmp12;
      obj4.hideText = tmp13;
      let tmp18Result = closure_10(tmp5(11231), obj4);
      const tmp5Result = tmp5(11231);
    } else {
      let found1;
      if (stateFromStores1 != null) {
        found1 = stateFromStores1.find((type) => {
          type = type.type;
          return type !== constants.CUSTOM_STATUS && type !== constants.HANG_STATUS;
        });
      }
      if (null != found1) {
        const obj5 = {
          activity: found1,
          iconStyle: null,
          textStyle: null,
          maxFontSizeMultiplier: null,
          hideIcon: null,
          hideText: null,
        };
        const items5 = [tmp.icon, iconStyle];
        obj5.iconStyle = items5;
        obj5.textStyle = textStyle;
        obj5.maxFontSizeMultiplier = maxFontSizeMultiplier;
        obj5.hideIcon = tmp12;
        obj5.hideText = tmp13;
        tmp18Result = closure_10(tmp5(11237), obj5);
      } else {
        tmp18Result = null;
        if (null != voiceChannel) {
          const obj6 = {
            channel: voiceChannel,
            iconStyle: null,
            textStyle: null,
            maxFontSizeMultiplier: null,
            hideIcon: null,
            hideText: null,
          };
          const items6 = [tmp.icon, iconStyle];
          obj6.iconStyle = items6;
          obj6.textStyle = textStyle;
          obj6.maxFontSizeMultiplier = maxFontSizeMultiplier;
          obj6.hideIcon = tmp12;
          obj6.hideText = tmp13;
          tmp18Result = closure_10(tmp5(11242), obj6);
        }
      }
    }
    let tmp21 = null;
    if (null != memo) {
      let tmp23Result = null;
      if (null != memo) {
        let tmp25 = null != memo.emoji;
        if (tmp25) {
          tmp25 = !flag;
        }
        if (tmp25) {
          const obj7 = { emoji: memo.emoji, size: emojiSize, animate, style: tmp.emoji };
          tmp25 = closure_10(tmp5(11244), obj7);
        }
        const items7 = [tmp25];
        let tmp27 = null != memo.state;
        if (tmp27) {
          const obj8 = {
            variant: "text-xs/normal",
            style: textStyle,
            maxFontSizeMultiplier,
            children: gameMentionsAsPlainText,
          };
          tmp27 = closure_10(tmp5(11235), obj8);
        }
        const obj9 = { children: null };
        items7[1] = tmp27;
        obj9.children = items7;
        tmp23Result = closure_12(closure_11, obj9);
      }
      tmp21 = tmp23Result;
    }
    const obj10 = { style: tmp.container, children: null };
    const items8 = [tmp18Result, ,];
    let tmp31 = null != tmp18Result;
    if (tmp31) {
      tmp31 = null != tmp21;
    }
    if (tmp31) {
      const obj11 = {
        variant: "text-xs/normal",
        style: textStyle,
        maxFontSizeMultiplier,
        accessibilityElementsHidden: true,
        importantForAccessibility: "no-hide-descendants",
        children: DOT_UNICODE,
      };
      tmp31 = closure_10(tmp5(11235), obj11);
    }
    items8[1] = tmp31;
    items8[2] = tmp21;
    obj10.children = items8;
    return closure_12(View, obj10);
  }
  tmp2Result = tmp2(504);
}
