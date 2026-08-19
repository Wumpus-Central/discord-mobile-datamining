// discord_app/modules/activity_status/native/ActivityStatus.tsx
import noop from "../../../../_runtime/00019_noop.js";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import sortActivity from "../../../stores/PresenceStore.tsx";
import markAllUserIdListsStale from "../../../stores/RelationshipStore.tsx";
import mergeGuildAvatar from "../../../stores/UserStore.tsx";
import { DOT_UNICODE } from "../ActivityStatusConstants.tsx";
import { ActivityTypes } from "../../../Constants.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

const require = fn;
({ jsx: c10, Fragment: unpackModuleId, jsxs: closure_12 } = jsxProd);
let closure_13 = createCacheKey.createStyles({ container: { flexDirection: "row", alignItems: "center", gap: 4 }, icon: { marginTop: 1 }, emoji: { marginRight: 0 } });
const result = require("obj132").fileFinishedImporting("modules/activity_status/native/ActivityStatus.tsx");

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
  const tmp = callback2();
  let obj = userId(589);
  const items = [closure_7];
  const stateFromStores = obj.useStateFromStores(items, () => closure_1_7.getUser(userId));
  obj1 = userId(589);
  const items1 = [closure_5];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => closure_1_5.getActivities(userId));
  const voiceChannel = stateFromStores1(9896)({ userId, guildId: guildId.guildId }).voiceChannel;
  const items2 = [stateFromStores1];
  const memo = React.useMemo(() => {
    let found;
    if (stateFromStores1 != null) {
      found = stateFromStores1.find((item, index) => item.type === constants.CUSTOM_STATUS);
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
  let obj2 = userId(9287);
  let state;
  if (memo != null) {
    state = memo.state;
  }
  const gameMentionsAsPlainText = obj2.useGameMentionsAsPlainText(state);
  const tmp6 = stateFromStores1(9895)(userId);
  const items3 = [closure_6];
  if (tmp2Result.useStateFromStores(items3, () => closure_1_6.isBlockedOrIgnored(userId))) {
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
        found = stateFromStores1.find(tmp5(9902));
      }
      obj = { game: null, iconStyle: null, textStyle: null, maxFontSizeMultiplier: null, hideIcon: null, hideText: null };
      obj[0] = found;
      const items4 = [tmp.icon, iconStyle];
      obj[1] = items4;
      obj[2] = textStyle;
      obj[3] = maxFontSizeMultiplier;
      obj[4] = tmp12;
      obj[5] = tmp13;
      let tmp18Result = callback(tmp5(9897), obj);
      const tmp5Result = tmp5(9897);
    } else {
      let found1;
      if (stateFromStores1 != null) {
        found1 = stateFromStores1.find((item, index) => {
          const type = item.type;
          return type !== constants.CUSTOM_STATUS && type !== constants.HANG_STATUS;
        });
      }
      if (null != found1) {
        obj = { activity: null, iconStyle: null, textStyle: null, maxFontSizeMultiplier: null, hideIcon: null, hideText: null };
        obj[0] = found1;
        const items5 = [tmp.icon, iconStyle];
        obj[1] = items5;
        obj[2] = textStyle;
        obj[3] = maxFontSizeMultiplier;
        obj[4] = tmp12;
        obj[5] = tmp13;
        tmp18Result = callback(tmp5(9903), obj);
      } else {
        tmp18Result = null;
        if (null != voiceChannel) {
          obj1 = { channel: null, iconStyle: null, textStyle: null, maxFontSizeMultiplier: null, hideIcon: null, hideText: null };
          obj1[0] = voiceChannel;
          const items6 = [tmp.icon, iconStyle];
          obj1[1] = items6;
          obj1[2] = textStyle;
          obj1[3] = maxFontSizeMultiplier;
          obj1[4] = tmp12;
          obj1[5] = tmp13;
          tmp18Result = callback(tmp5(9909), obj1);
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
          obj2 = { emoji: null, size: null, animate: null, style: null };
          obj2[0] = memo.emoji;
          obj2[1] = emojiSize;
          obj2[2] = animate;
          obj2[3] = tmp.emoji;
          tmp25 = callback(tmp5(9541), obj2);
        }
        const items7 = [tmp25, ];
        let tmp27 = null != memo.state;
        if (tmp27) {
          const obj3 = { variant: "text-xs/normal", style: null, maxFontSizeMultiplier: null, children: null };
          obj3[1] = textStyle;
          obj3[2] = maxFontSizeMultiplier;
          obj3[3] = gameMentionsAsPlainText;
          tmp27 = callback(tmp5(9901), obj3);
        }
        const obj4 = { children: null };
        items7[1] = tmp27;
        obj4[0] = items7;
        tmp23Result = callback(closure_11, obj4);
      }
      tmp21 = tmp23Result;
    }
    const obj5 = { style: null, children: null };
    obj5[0] = tmp.container;
    const items8 = [tmp18Result, , ];
    let tmp31 = null != tmp18Result;
    if (tmp31) {
      tmp31 = null != tmp21;
    }
    if (tmp31) {
      const obj6 = { variant: "text-xs/normal", style: null, maxFontSizeMultiplier: null, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: null };
      obj6[1] = textStyle;
      obj6[2] = maxFontSizeMultiplier;
      obj6[5] = DOT_UNICODE;
      tmp31 = callback(tmp5(9901), obj6);
    }
    items8[1] = tmp31;
    items8[2] = tmp21;
    obj5[1] = items8;
    return callback(View, obj5);
  }
  tmp2Result = userId(589);
};