// discord_app/modules/stage_channels/native/sheets/StageBoostingActionSheet.tsx
import AnalyticsUtilsDefault from "../../../../utils/AnalyticsUtils.tsx";
import StageChannelPermissions from "../../StageChannelPermissions.tsx";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import actions_BoostingActionCreators from "../../../../actions/native/BoostingActionCreators.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../../a11y/AccessibilityStore.tsx";
import GuildStore from "../../../../stores/GuildStore.tsx";
import PermissionStore from "../../../../stores/PermissionStore.tsx";

require = fn;
const STAGE_BOOSTING_SHEET_KEY = fn(5414).STAGE_BOOSTING_SHEET_KEY;
const Constants = fn(1074);
({
  AnalyticEvents: closure_7,
  BoostedGuildTiers: closure_8,
  GuildFeatures: closure_9,
  MAX_STAGE_VIDEO_USER_LIMIT_TIER2: c10,
  MAX_STAGE_VIDEO_USER_LIMIT_UNCAPPED: closure_11,
} = Constants);
const PremiumConstants = fn(1373);
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
  let obj = channel(504);
  const items = [GuildStore];
  const items1 = [channel.guild_id];
  const stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(channel.guild_id), items1);
  let obj1 = channel(504);
  const items2 = [useReducedMotion];
  let num;
  const stateFromStores1 = obj1.useStateFromStores(items2, () => useReducedMotion.useReducedMotion);
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
  let tmpResult = tmp(504);
  const items3 = [PermissionStore];
  const items4 = [channel];
  stateFromStores2 = tmpResult.useStateFromStores(
    items3,
    () => PermissionStore.can(StageChannelPermissions.MODERATE_STAGE_CHANNEL_PERMISSIONS, channel),
    items4,
  );
  if (hasItem) {
    let premiumTier1;
    if (stateFromStores != null) {
      premiumTier1 = stateFromStores.premiumTier;
    }
    if (premiumTier1 === closure_8.TIER_3) {
      const intl2 = tmp(1114).intl;
      const string2 = intl2.string;
      let tJmOuw = tmp(1114).t;
      if (tmp9) {
        tJmOuw = tJmOuw.tJmOuw;
        let string2Result = string2(tJmOuw);
      } else {
        string2Result = string2(tJmOuw["7FHbPG"]);
      }
    }
  }
  const intl = tmp(1114).intl;
  const string = intl.string;
  let t = tmp(1114).t;
  if (tmp9) {
    let stringResult = string(t["8/uDSF"]);
  } else {
    stringResult = string(t["7FHbPG"]);
  }
  const intl3 = tmp(1114).intl;
  const string3 = intl3.string;
  t = tmp(1114).t;
  if (stateFromStores2) {
    if (tmp9) {
      t = t["T+zF9M"];
      let string3Result = string3(t);
    } else {
      string3Result = string3(t.XVL8LJ);
    }
  } else {
    function handleClose() {
      let obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet(STAGE_BOOSTING_SHEET_KEY);
      obj = {
        guild_id: channel.guild_id,
        type: constants4.VIDEO_STAGE_LIMIT,
        is_moderator: stateFromStores2,
        action: constants3.DISMISS,
      };
      AnalyticsUtilsDefault.track(constants.BOOSTING_UPSELL_CLICKED, obj);
    }
    tmpResult = tmp(5431);
    dependencyMap = tmpResult.useActualStageSpeakerCount(channel.id);
    const string3Result1 = string3(t.pqPQL0);
    useReducedMotion = tmp(5431).useStageParticipantsCount(
      channel.id,
      tmp(5425).StageChannelParticipantNamedIndex.AUDIENCE,
    );
    stateFromStores2(4992)(() => {
      const obj = {
        guild_id: channel.guild_id,
        type: constants4.VIDEO_STAGE_LIMIT,
        is_moderator: stateFromStores2,
        listener_count: closure_2 + closure_3,
      };
      obj.track(constants.BOOSTING_UPSELL_VIEWED, obj);
    });
    if (tmp9) {
      obj = { size: "lg", children: null };
      obj = {
        variant: "experimental_premium-primary",
        size: "lg",
        shiny: !stateFromStores1,
        text: null,
        onPress: null,
      };
      const intl6 = tmp(1114).intl;
      obj.text = intl6.string(tmp(1114).t.Uj0md3);
      obj.onPress = function onPress() {
        let obj = ActionSheetActionCreatorsDefault;
        obj.hideActionSheet(STAGE_BOOSTING_SHEET_KEY);
        obj = {
          guild_id: channel.guild_id,
          type: constants4.VIDEO_STAGE_LIMIT,
          is_moderator: stateFromStores2,
          action: constants3.DISMISS,
        };
        AnalyticsUtilsDefault.track(constants.BOOSTING_UPSELL_CLICKED, obj);
        actions_BoostingActionCreators.openApplyBoostModal(channel.guild_id);
        obj = {
          guild_id: channel.guild_id,
          type: constants4.VIDEO_STAGE_LIMIT,
          is_moderator: stateFromStores2,
          action: constants3.BOOST,
        };
        AnalyticsUtilsDefault.track(constants.BOOSTING_UPSELL_CLICKED, obj);
      };
      const items5 = [closure_14(tmp(4975).Button, obj)];
      obj1 = { variant: "secondary", size: "lg", text: null, onPress: null };
      const intl7 = tmp(1114).intl;
      obj1.text = intl7.string(tmp(1114).t.f3Pet9);
      obj1.onPress = handleClose;
      items5[1] = closure_14(tmp(4975).Button, obj1);
      obj.children = items5;
      let tmp24Result = closure_15(tmp(5433).ButtonGroup, obj);
      let tmp24 = closure_14;
    } else {
      tmp24 = closure_14;
      if (stateFromStores2) {
        let obj2 = { variant: "secondary", size: "lg", text: null, onPress: null };
        const intl5 = tmp(1114).intl;
        obj2.text = intl5.string(tmp(1114).t.WAI6xu);
        obj2.onPress = handleClose;
        let obj3 = obj2;
      } else {
        obj3 = { variant: "primary", size: "lg", text: null, onPress: null };
        const intl4 = tmp(1114).intl;
        obj3.text = intl4.string(tmp(1114).t["NX+WJN"]);
        obj3.onPress = handleClose;
      }
      tmp24Result = tmp24(tmp(4975).Button, obj3);
    }
    let obj4 = { title: string3Result1, description: stringResult, illustration: null, actions: null };
    if (tmp9) {
      tmp24Result = tmp24(tmp(5692).HoldingGemSpotIllustration, { accessible: false });
    } else {
      const obj5 = { source: tmp22(8592) };
      tmp24Result = tmp24(tmp22(5587), obj5);
      const tmp22Result = tmp22(5587);
    }
    obj4.illustration = tmp24Result;
    obj4.actions = tmp24Result;
    return tmp24(tmp(10230).PromoSheet, obj4);
  }
}
