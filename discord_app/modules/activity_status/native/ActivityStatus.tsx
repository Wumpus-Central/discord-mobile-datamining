// discord_app/modules/activity_status/native/ActivityStatus.tsx
import noop from "../../../../_runtime/metro/00019__.js";
import PresenceStore from "../../../stores/PresenceStore.tsx";
import RelationshipStore from "../../../stores/RelationshipStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";

const require = fn;
const View = fn(17).View;
const DOT_UNICODE = fn(10877).DOT_UNICODE;
const ActivityTypes = fn(1074).ActivityTypes;
const jsxProd = fn(21);
({ jsx: c10, Fragment: closure_11, jsxs: closure_12 } = jsxProd);
const createStyles = fn(4560);
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
  let obj = userId(504);
  const items = [UserStore];
  const stateFromStores = obj.useStateFromStores(items, () => UserStore.getUser(userId));
  let obj1 = userId(504);
  const items1 = [PresenceStore];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => PresenceStore.getActivities(userId));
  const voiceChannel = stateFromStores1(10879)({ userId, guildId: guildId.guildId }).voiceChannel;
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
  let obj2 = userId(10880);
  let state;
  if (memo != null) {
    state = memo.state;
  }
  const gameMentionsAsPlainText = obj2.useGameMentionsAsPlainText(state);
  const tmp6 = stateFromStores1(10878)(userId);
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
        found = stateFromStores1.find(tmp5(10886));
      }
      obj = {
        game: found,
        iconStyle: null,
        textStyle: null,
        maxFontSizeMultiplier: null,
        hideIcon: null,
        hideText: null,
      };
      const items4 = [tmp.icon, iconStyle];
      obj.iconStyle = items4;
      obj.textStyle = textStyle;
      obj.maxFontSizeMultiplier = maxFontSizeMultiplier;
      obj.hideIcon = tmp12;
      obj.hideText = tmp13;
      let tmp18Result = closure_10(tmp5(10881), obj);
      const tmp5Result = tmp5(10881);
    } else {
      let found1;
      if (stateFromStores1 != null) {
        found1 = stateFromStores1.find((type) => {
          type = type.type;
          return type !== constants.CUSTOM_STATUS && type !== constants.HANG_STATUS;
        });
      }
      if (null != found1) {
        obj = {
          activity: found1,
          iconStyle: null,
          textStyle: null,
          maxFontSizeMultiplier: null,
          hideIcon: null,
          hideText: null,
        };
        const items5 = [tmp.icon, iconStyle];
        obj.iconStyle = items5;
        obj.textStyle = textStyle;
        obj.maxFontSizeMultiplier = maxFontSizeMultiplier;
        obj.hideIcon = tmp12;
        obj.hideText = tmp13;
        tmp18Result = closure_10(tmp5(10887), obj);
      } else {
        tmp18Result = null;
        if (null != voiceChannel) {
          obj1 = {
            channel: voiceChannel,
            iconStyle: null,
            textStyle: null,
            maxFontSizeMultiplier: null,
            hideIcon: null,
            hideText: null,
          };
          const items6 = [tmp.icon, iconStyle];
          obj1.iconStyle = items6;
          obj1.textStyle = textStyle;
          obj1.maxFontSizeMultiplier = maxFontSizeMultiplier;
          obj1.hideIcon = tmp12;
          obj1.hideText = tmp13;
          tmp18Result = closure_10(tmp5(10893), obj1);
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
          obj2 = { emoji: memo.emoji, size: emojiSize, animate, style: tmp.emoji };
          tmp25 = closure_10(tmp5(10895), obj2);
        }
        const items7 = [tmp25];
        let tmp27 = null != memo.state;
        if (tmp27) {
          const obj3 = {
            variant: "text-xs/normal",
            style: textStyle,
            maxFontSizeMultiplier,
            children: gameMentionsAsPlainText,
          };
          tmp27 = closure_10(tmp5(10885), obj3);
        }
        const obj4 = { children: null };
        items7[1] = tmp27;
        obj4.children = items7;
        tmp23Result = closure_12(closure_11, obj4);
      }
      tmp21 = tmp23Result;
    }
    const obj5 = { style: tmp.container, children: null };
    const items8 = [tmp18Result, ,];
    let tmp31 = null != tmp18Result;
    if (tmp31) {
      tmp31 = null != tmp21;
    }
    if (tmp31) {
      const obj6 = {
        variant: "text-xs/normal",
        style: textStyle,
        maxFontSizeMultiplier,
        accessibilityElementsHidden: true,
        importantForAccessibility: "no-hide-descendants",
        children: DOT_UNICODE,
      };
      tmp31 = closure_10(tmp5(10885), obj6);
    }
    items8[1] = tmp31;
    items8[2] = tmp21;
    obj5.children = items8;
    return closure_12(View, obj5);
  }
  tmp2Result = userId(504);
}
