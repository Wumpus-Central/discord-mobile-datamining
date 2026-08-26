// === Module 17108: FinishingTouchesScreen ===

// Module 17108 (FinishingTouchesScreen)
import closure_4 from "_slicedToArray" /* 32 */;
import closure_5 from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import closure_8 from "handleFormInit" /* 9237 */;
import closure_9 from "createGuildRoleRecordFromRust" /* 1985 */;
import PUBLIC_SUCCESS_MODAL_SEEN_KEY from "PUBLIC_SUCCESS_MODAL_SEEN_KEY" /* 8362 */;
import ME from "ME" /* 676 */;
import jsxProd from "jsxProd" /* 21 */;

const require = arg1;
({ Image: closure_6, View: error } = get_ActivityIndicator);
({ CREATE_NEW_CHANNEL_VALUE: c10, MODERATOR_PERMISSIONS: unpackModuleId, MODERATOR_PERMISSIONS_FLAG: closure_12 } = PUBLIC_SUCCESS_MODAL_SEEN_KEY);
({ GuildFeatures: map1, HelpdeskArticles: closure_14, UserNotificationSettings: closure_15 } = ME);
({ jsx: closure_16, jsxs: closure_17 } = jsxProd);
const result = require("set").fileFinishedImporting("modules/public_guilds/native/components/EnableCommunityModal/FinishingTouchesScreen.tsx");

export default function FinishingTouchesScreen() {
  let obj = React;
  const ref = React.useRef(null);
  obj1 = guild(4165);
  const token = obj1.useToken(first(712).modules.mobile.TABLE_ROW_PADDING);
  let obj2 = guild(589);
  let items = [closure_8];
  guild = obj2.useStateFromStoresObject(items, () => props.getProps()).guild;
  let prop;
  if (guild != null) {
    prop = guild.defaultMessageNotifications;
  }
  first = callback(React.useState(prop), 1)[0];
  const tmp9 = callback(obj.useState(false), 2);
  const first1 = tmp9[0];
  [tmp12, tmp13] = callback(obj.useState(!closure_11.some((VIEW_CHANNEL) => closure_1_2(closure_1_3[11]).canEveryone(VIEW_CHANNEL, guild))), 2);
  const first2 = callback(obj.useState(tmp12), 1)[0];
  let prop1;
  if (guild != null) {
    prop1 = guild.defaultMessageNotifications;
  }
  const items1 = [prop1, first];
  callback = obj.useCallback((arg0) => {
    let tmp = arg0;
    if (arg0) {
      let prop;
      if (guild != null) {
        prop = guild.defaultMessageNotifications;
      }
      if (prop !== closure_1_15.ONLY_MENTIONS) {
        let obj = { defaultMessageNotifications: null };
        obj[0] = tmp4.ONLY_MENTIONS;
        first(closure_1_3[12]).updateGuild(obj);
        const obj3 = first(closure_1_3[12]);
      }
    }
    if (!tmp) {
      tmp = null == first;
    }
    if (!tmp) {
      obj = first(closure_1_3[12]);
      obj = { defaultMessageNotifications: null };
      obj[0] = first;
      obj.updateGuild(obj);
    }
  }, items1);
  const callback1 = obj.useCallback((features) => {
    let everyoneRole;
    if (null != features) {
      everyoneRole = everyoneRole.getEveryoneRole(features);
    }
    if (null != everyoneRole) {
      const _Set = Set;
      const set = new Set(features.features);
      set.add(constants.COMMUNITY);
      const removeResult = callback(506).remove(everyoneRole.permissions, closure_12);
      let obj = {};
      const merged = Object.assign(everyoneRole);
      obj.permissions = removeResult;
      const obj3 = callback(506);
      obj = { features: null, rulesChannelId: null, safetyAlertsChannelId: null, verificationLevel: null, explicitContentFilter: null, publicUpdatesChannelId: null, defaultMessageNotifications: null };
      obj[0] = set;
      let rulesChannelId = features.rulesChannelId;
      if (rulesChannelId == null) {
        rulesChannelId = closure_10;
      }
      obj[1] = rulesChannelId;
      ({ safetyAlertsChannelId: obj6[2], verificationLevel: obj6[3], explicitContentFilter: obj6[4], publicUpdatesChannelId } = features);
      if (publicUpdatesChannelId == null) {
        publicUpdatesChannelId = closure_10;
      }
      obj[5] = publicUpdatesChannelId;
      obj[6] = features.defaultMessageNotifications;
      first(9236).saveGuild(features.id, obj);
      if (removeResult !== everyoneRole.permissions) {
        obj = guild(17055);
        const items = [obj];
        obj.saveRoleSettings(features.id, items);
      }
      const obj5 = first(9236);
    }
  }, []);
  const tmp11 = callback(obj.useState(!closure_11.some((VIEW_CHANNEL) => closure_1_2(closure_1_3[11]).canEveryone(VIEW_CHANNEL, guild))), 2);
  const tmp8 = constants2;
  const tmp19 = first(17097)();
  const enableCommunitySharedStyles = guild(17096).useEnableCommunitySharedStyles();
  obj = { headerRef: ref, currentStep: tmp2(17094).EnableCommunityModalSteps.STEP_3, onSuccess: callback1, disableNextStep: !first1, buttonText: null, children: null };
  const intl = tmp2(1236).intl;
  obj[4] = intl.string(guild(1236).t.XGl4ba);
  obj = { style: enableCommunitySharedStyles.content, children: null };
  obj1 = { ref, accessibilityRole: "header", variant: "text-md/semibold", color: "text-subtle", children: null };
  const intl2 = tmp2(1236).intl;
  obj1[4] = intl2.formatToPlainString(guild(1236).t.tInpJj, { number: 3, total: 3 });
  const items2 = [callback2(guild(4440).Text, obj1), , , ];
  obj2 = { resizeMode: "contain", source: tmp19.finishingTouches };
  items2[1] = callback2(closure_6, obj2);
  let obj3 = { style: enableCommunitySharedStyles.header, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
  const intl3 = tmp2(1236).intl;
  obj3[3] = intl3.string(guild(1236).t["Pj/s/a"]);
  items2[2] = callback2(guild(4440).Heading, obj3);
  const obj4 = { style: enableCommunitySharedStyles.description, variant: "text-md/medium", color: "text-subtle", children: null };
  const intl4 = tmp2(1236).intl;
  obj4[3] = intl4.string(guild(1236).t["IL7/no"]);
  items2[3] = callback2(guild(4440).Text, obj4);
  obj[1] = items2;
  const items3 = [callback3(closure_7, obj), , ];
  let obj5 = { spacing: 24, style: { paddingHorizontal: token }, children: null };
  const obj6 = { formSwitchDisabled: first === constants2.ONLY_MENTIONS, children: null };
  let tmp4Result = tmp4(17106);
  const obj7 = { label: null, value: null, disabled: null, onValueChange: null };
  const intl5 = tmp2(1236).intl;
  obj7[0] = intl5.format(guild(1236).t.K8Eg4P, {
    infoHook() {
      return null;
    }
  });
  let prop2;
  if (guild != null) {
    prop2 = guild.defaultMessageNotifications;
  }
  const obj9 = { hasIcons: false, children: null };
  obj7[1] = prop2 === tmp8.ONLY_MENTIONS;
  obj7[2] = first === constants2.ONLY_MENTIONS;
  obj7[3] = callback;
  obj6[1] = callback2(guild(5940).TableSwitchRow, obj7);
  const items4 = [callback2(tmp4Result, obj6), ];
  const obj10 = { formSwitchDisabled: first2, children: null };
  tmp4Result = tmp4(17106);
  const obj11 = { label: null, value: null, disabled: null, onValueChange: null };
  const intl6 = tmp2(1236).intl;
  obj11[0] = intl6.format(guild(1236).t.v8qCoG, {
    infoHook() {
      return null;
    }
  });
  obj11[1] = tmp12;
  obj11[2] = first2;
  obj11[3] = tmp13;
  obj10[1] = callback2(guild(5940).TableSwitchRow, obj11);
  items4[1] = callback2(tmp4Result, obj10);
  obj9[1] = items4;
  const items5 = [callback3(guild(5939).TableRowGroup, obj9), ];
  const obj13 = { title: null, hasIcons: false, children: null };
  const intl7 = tmp2(1236).intl;
  obj13[0] = intl7.string(guild(1236).t["k+b2Cf"]);
  const obj14 = { label: null, value: null, onValueChange: null };
  const intl8 = tmp2(1236).intl;
  obj14[0] = intl8.string(guild(1236).t["9AG3wI"]);
  obj14[1] = first1;
  obj14[2] = tmp9[1];
  obj13[2] = callback2(guild(5940).TableSwitchRow, obj14);
  items5[1] = callback2(guild(5939).TableRowGroup, obj13);
  obj5[2] = items5;
  items3[1] = callback3(guild(4877).Stack, obj5);
  const obj15 = { style: enableCommunitySharedStyles.formHint, variant: "text-xs/medium", color: "text-subtle", children: null };
  const intl9 = tmp2(1236).intl;
  const obj16 = { communityGuidelines: null, typesOfGuilds: null };
  const obj12 = {
    infoHook() {
      return null;
    }
  };
  const obj8 = {
    infoHook() {
      return null;
    }
  };
  const tmp2Result = guild(17096);
  obj16[0] = first(1995).getArticleURL(constants.PUBLIC_GUILD_GUILDLINES);
  const tmp4Result1 = first(1995);
  obj16[1] = first(1995).getArticleURL(constants.FRIEND_COMMUNITY_DISCOVERABLE_GUILD_TYPES);
  obj15[3] = intl9.format(guild(1236).t["BwbW/Q"], obj16);
  items3[2] = callback2(guild(4440).Text, obj15);
  obj[5] = items3;
  return callback3(guild(17094).EnableCommunityModalScreen, obj);
};