// === Module 5518: StageBoostingActionSheet ===

// Module 5518 (StageBoostingActionSheet)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import StageChannelPermissions from "StageChannelPermissions" /* 1966 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4607 */;
import actions_BoostingActionCreators from "actions/BoostingActionCreators" /* 5522 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4632 */;
import GuildStore from "GuildStore" /* 1980 */;
import PermissionStore from "PermissionStore" /* 4278 */;

require = fn;
const STAGE_BOOSTING_SHEET_KEY = fn(5502).STAGE_BOOSTING_SHEET_KEY;
const Constants = fn(1074);
({ AnalyticEvents: closure_7, BoostedGuildTiers: closure_8, GuildFeatures: closure_9, MAX_STAGE_VIDEO_USER_LIMIT_TIER2: c10, MAX_STAGE_VIDEO_USER_LIMIT_UNCAPPED: closure_11 } = Constants);
const PremiumConstants = fn(1374);
({ BoostingUpsellAction: closure_12, PremiumUpsellTypes: map1 } = PremiumConstants);
const jsxProd = fn(21);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("modules/stage_channels/native/sheets/StageBoostingActionSheet.tsx");

export default function StageBoostingActionSheet(channel) {
  channel = channel.channel;
  let stateFromStores2;
  dependencyMap = undefined;
  let useReducedMotion;
  const items = [GuildStore];
  const items1 = [channel.guild_id];
  const stateFromStores = channel(504).useStateFromStores(items, () => GuildStore.getGuild(channel.guild_id), items1);
  let obj = channel(504);
  const items2 = [useReducedMotion];
  let num;
  const stateFromStores1 = channel(504).useStateFromStores(items2, () => useReducedMotion.useReducedMotion);
  if (stateFromStores != null) {
    num = stateFromStores.maxStageVideoChannelUsers;
  }
  if (num == null) {
    num = 0;
  }
  let hasItem = null != stateFromStores;
  if (hasItem) {
    const features = stateFromStores.features;
    hasItem = features.has(constants2.COMMUNITY);
  }
  if (hasItem) {
    let tmp9 = num < closure_11;
  } else {
    let premiumTier;
    if (stateFromStores != null) {
      premiumTier = stateFromStores.premiumTier;
    }
    tmp9 = premiumTier !== closure_8.TIER_3;
    if (tmp9) {
      tmp9 = num <= closure_10;
    }
  }
  let obj2 = channel(504);
  const items3 = [PermissionStore];
  const items4 = [channel];
  stateFromStores2 = channel(504).useStateFromStores(items3, () => PermissionStore.can(StageChannelPermissions.MODERATE_STAGE_CHANNEL_PERMISSIONS, channel), items4);
  if (hasItem) {
    let premiumTier1;
    if (stateFromStores != null) {
      premiumTier1 = stateFromStores.premiumTier;
    }
    if (premiumTier1 === closure_8.TIER_3) {
      const intl2 = tmp(1115).intl;
      const string2 = intl2.string;
      let tJmOuw = tmp(1115).t;
      if (tmp9) {
        tJmOuw = tJmOuw.tJmOuw;
        let string2Result = string2(tJmOuw);
      } else {
        string2Result = string2(tJmOuw["7FHbPG"]);
      }
    }
  }
  const intl = tmp(1115).intl;
  const string = intl.string;
  const t = tmp(1115).t;
  if (tmp9) {
    let stringResult = string(t["8/uDSF"]);
  } else {
    stringResult = string(t["7FHbPG"]);
  }
  const intl3 = tmp(1115).intl;
  const string3 = intl3.string;
  let t1 = tmp(1115).t;
  if (stateFromStores2) {
    if (tmp9) {
      t1 = t1["T+zF9M"];
      let string3Result = string3(t1);
    } else {
      string3Result = string3(t1.XVL8LJ);
    }
  } else {
    function handleClose() {
      ActionSheetActionCreatorsDefault.hideActionSheet(STAGE_BOOSTING_SHEET_KEY);
      AnalyticsUtilsDefault.track(constants.BOOSTING_UPSELL_CLICKED, { guild_id: channel.guild_id, type: constants4.VIDEO_STAGE_LIMIT, is_moderator: stateFromStores2, action: constants3.DISMISS });
    }
    const string3Result1 = string3(t1.pqPQL0);
    dependencyMap = tmp(5519).useActualStageSpeakerCount(channel.id);
    const tmpResult3 = tmp(5519);
    useReducedMotion = tmp(5519).useStageParticipantsCount(channel.id, tmp(5513).StageChannelParticipantNamedIndex.AUDIENCE);
    stateFromStores2(5079)(() => {
      AnalyticsUtilsDefault.track(constants.BOOSTING_UPSELL_VIEWED, { guild_id: channel.guild_id, type: constants4.VIDEO_STAGE_LIMIT, is_moderator: stateFromStores2, listener_count: closure_2 + closure_3 });
    });
    if (tmp9) {
      let obj3 = { size: "lg", children: null };
      let obj4 = { variant: "experimental_premium-primary", size: "lg", shiny: !stateFromStores1, text: null, onPress: null };
      const intl6 = tmp(1115).intl;
      obj4.text = intl6.string(tmp(1115).t.Uj0md3);
      obj4.onPress = function onPress() {
        ActionSheetActionCreatorsDefault.hideActionSheet(STAGE_BOOSTING_SHEET_KEY);
        AnalyticsUtilsDefault.track(constants.BOOSTING_UPSELL_CLICKED, { guild_id: channel.guild_id, type: constants4.VIDEO_STAGE_LIMIT, is_moderator: stateFromStores2, action: constants3.DISMISS });
        const obj3 = { guild_id: channel.guild_id, type: constants4.VIDEO_STAGE_LIMIT, is_moderator: stateFromStores2, action: constants3.DISMISS };
        actions_BoostingActionCreators.openApplyBoostModal(channel.guild_id);
        AnalyticsUtilsDefault.track(constants.BOOSTING_UPSELL_CLICKED, { guild_id: channel.guild_id, type: constants4.VIDEO_STAGE_LIMIT, is_moderator: stateFromStores2, action: constants3.BOOST });
      };
      const items5 = [closure_14(tmp(5062).Button, obj4), ];
      const obj5 = { variant: "secondary", size: "lg", text: null, onPress: null };
      const intl7 = tmp(1115).intl;
      obj5.text = intl7.string(tmp(1115).t.f3Pet9);
      obj5.onPress = handleClose;
      items5[1] = closure_14(tmp(5062).Button, obj5);
      obj3.children = items5;
      let tmp24Result = closure_15(tmp(5521).ButtonGroup, obj3);
      let tmp24 = closure_14;
    } else {
      tmp24 = closure_14;
      if (stateFromStores2) {
        const obj6 = { variant: "secondary", size: "lg", text: null, onPress: null };
        const intl5 = tmp(1115).intl;
        obj6.text = intl5.string(tmp(1115).t.WAI6xu);
        obj6.onPress = handleClose;
        let obj7 = obj6;
      } else {
        obj7 = { variant: "primary", size: "lg", text: null, onPress: null };
        const intl4 = tmp(1115).intl;
        obj7.text = intl4.string(tmp(1115).t["NX+WJN"]);
        obj7.onPress = handleClose;
      }
      tmp24Result = tmp24(tmp(5062).Button, obj7);
    }
    const obj8 = { title: string3Result1, description: stringResult, illustration: null, actions: null };
    if (tmp9) {
      let tmp24Result2 = tmp24(tmp(5780).HoldingGemSpotIllustration, { accessible: false });
    } else {
      const obj9 = { source: tmp22(8747) };
      tmp24Result2 = tmp24(tmp22(5675), obj9);
      const tmp22Result = tmp22(5675);
    }
    obj8.illustration = tmp24Result2;
    obj8.actions = tmp24Result;
    return tmp24(tmp(10377).PromoSheet, obj8);
  }
  const tmpResult = channel(504);
};