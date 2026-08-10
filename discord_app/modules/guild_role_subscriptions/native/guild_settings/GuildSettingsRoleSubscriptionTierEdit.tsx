// discord_app/modules/guild_role_subscriptions/native/guild_settings/GuildSettingsRoleSubscriptionTierEdit.tsx
import HeaderActionButton from "HeaderActionButton";
import registerAsset from "registerAsset";
import get_ActivityIndicator from "Button";
import makeGroupListingIndexSubscriptionListingTag from "makeGroupListingIndexSubscriptionListingTag";
import { FetchState } from "makeGroupListingIndexSubscriptionListingTag";
import usePriceTiers from "usePriceTiers";
import { GuildRoleSubscriptionsTierScenes } from "MAX_SUBSCRIPTION_TIERS";
import { GuildSettingsSections } from "ME";
import { ContentDismissActionType } from "ContentDismissActionType";
import jsxProd from "Content";
import createCacheKey from "createCacheKey";
import { registerAsset } from "../../../../../_runtime/16862_registerAsset.js";
import { SafeAreaPaddingView } from "../../../../components_native/common/SafeAreaView.tsx";
import { Button } from "../../../../design/components/Button/native/Button.native.tsx";
import { useNavigation } from "../../../../design/components/Navigator/native/useNavigation.native.tsx";
import { Text } from "../../../../design/components/Text/native/Text.tsx";
import { Button } from "../../../../design/void/native.tsx";
import { useShouldHideGuildPurchaseEntryPoints } from "../../../creator_monetization_review/CreatorMonetizationRestrictionsHooks.tsx";
import { FormHeader } from "../../../guild_member_verification/native/components/form_fields/FormHeader.tsx";
import { useEditStateContext } from "../../edit_state/EditStateContextProvider.tsx";
import { useFetchListingsForGuild } from "../../GuildRoleSubscriptionsHooks.tsx";
import { useRoleSubscriptionSettingsDisabled } from "../../RoleSubscriptionSettingsDisabledContext.tsx";
import { AddBenefitButton } from "../components/GuildRoleSubscriptionTierBenefitsModal.tsx";
import { MemberPreviews } from "../components/GuildRoleSubscriptionTierDesignModal.tsx";
import { Content } from "../components/GuildRoleSubscriptionTierDetailsModal.tsx";
import { useArchiveOrDelete } from "useArchiveOrDelete.tsx";

let closure_14;
let closure_15;
let closure_16;
let closure_6;
let error;
const require = arg1;
function ArchiveOrDeleteTierSection() {
  let archiving;
  let buttonText;
  let deleting;
  let descriptionText;
  let editStateId;
  let groupListingId;
  let handleArchiveOrDelete;
  const tmp = createCacheKey();
  let obj = useNavigation;
  const navigation = obj.useNavigation();
  let obj1 = useEditStateContext;
  const editStateContext = obj1.useEditStateContext();
  const guildId = editStateContext.guildId;
  ({ groupListingId, editStateId } = editStateContext);
  ({ buttonText, descriptionText, handleArchiveOrDelete, deleting, archiving } = useArchiveOrDelete(guildId, groupListingId, editStateId, navigation));
  let obj2 = useShouldHideGuildPurchaseEntryPoints;
  const allowSelfRemoveMonetization = obj2.useShouldRestrictUpdatingCreatorMonetizationSettings(guildId).allowSelfRemoveMonetization;
  obj = { style: tmp.actionHeader, children: buttonText };
  const items = [callback2(FormHeader, obj), , ];
  obj = { style: tmp.actionDescription, variant: "text-sm/medium", color: "text-default", children: descriptionText };
  items[1] = callback2(Text.Text, obj);
  obj1 = { style: tmp.actionButton, children: null };
  obj2 = { variant: "destructive", grow: true, icon: null, onPress: null, disabled: null, text: null };
  const obj3 = { size: null, disableColor: true, source: null };
  obj3[0] = Button.Icon.Sizes.SMALL;
  obj3[2] = registerAsset;
  obj2[2] = callback2(Button.Icon, obj3);
  obj2[3] = handleArchiveOrDelete;
  let tmp9 = !allowSelfRemoveMonetization;
  if (allowSelfRemoveMonetization) {
    tmp9 = deleting;
  }
  if (!tmp9) {
    tmp9 = archiving;
  }
  const obj4 = { children: null };
  obj2[4] = tmp9;
  obj2[5] = buttonText;
  obj1[1] = callback2(Button.Button, obj2);
  items[2] = callback2(closure_6, obj1);
  obj4[0] = items;
  return closure_16(closure_15, obj4);
}
function TabContent(selectedTab) {
  selectedTab = selectedTab.selectedTab;
  const tmp = createCacheKey();
  if (GuildRoleSubscriptionsTierScenes.DETAILS === selectedTab) {
    let obj = { style: null, children: null };
    obj[0] = tmp.tabContent;
    obj = { bottom: true, children: null };
    const items = [callback2(Content.GuildRoleSubscriptionTierDetailsTab, {}), callback2(ArchiveOrDeleteTierSection, {})];
    obj[1] = items;
    obj[1] = callback3(SafeAreaPaddingView.SafeAreaPaddingView, obj);
    return callback2(closure_7, obj);
  } else if (tmp2.DESIGN === selectedTab) {
    obj = { style: null, children: null };
    obj[0] = tmp.tabContent;
    const obj1 = { bottom: true, children: null };
    obj1[1] = callback2(MemberPreviews.GuildRoleSubscriptionTierDesignTab, {});
    obj[1] = callback2(SafeAreaPaddingView.SafeAreaPaddingView, obj1);
    return callback2(closure_7, obj);
  } else if (tmp2.BENEFITS === selectedTab) {
    return callback2(AddBenefitButton.GuildRoleSubscriptionTierBenefitsTab, {});
  } else {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const error = new Error("Unsupported scene: " + selectedTab);
    throw error;
  }
}
({ View: closure_6, ScrollView: error } = get_ActivityIndicator);
({ jsx: closure_14, Fragment: closure_15, jsxs: closure_16 } = jsxProd);
createCacheKey = { container: { flex: 1 }, tabsContainer: null, tabsContainerWithDraft: null, actionButton: null, tabContent: null, actionHeader: null, actionDescription: null };
createCacheKey = { backgroundColor: require("Themes").colors.BACKGROUND_SURFACE_HIGH, padding: 16 };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { paddingBottom: 0 };
createCacheKey[3] = { alignSelf: "stretch", margin: 16, marginTop: 0 };
createCacheKey[4] = { backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW };
createCacheKey[5] = { marginTop: 24, paddingStart: 16 };
createCacheKey[6] = { marginBottom: 16, marginLeft: 16 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let items = [, , ];
({ DETAILS: arr[0], DESIGN: arr[1], BENEFITS: arr[2] } = GuildRoleSubscriptionsTierScenes);
let closure_19 = items.reduce((arg0, arg1, arg2) => {
  arg0[arg1] = arg2;
  return arg0;
}, {});
let closure_22 = require("registerAsset").forwardRef((arg0, ref) => {
  let dependencyMap;
  let error;
  let groupListingId;
  let importAll;
  let require;
  let submitting;
  let Spacer = require;
  let tmp = dependencyMap;
  let obj = useEditStateContext;
  const editStateContext = obj.useEditStateContext();
  ({ guildId: require, groupListingId } = editStateContext);
  let obj1 = useFetchListingsForGuild;
  const publishSubscriptionListing = obj1.usePublishSubscriptionListing();
  ({ error, publishSubscriptionListing: importAll, clearError: dependencyMap, submitting } = publishSubscriptionListing);
  const subscriptionListing = useFetchListingsForGuild.useSubscriptionListing(editStateContext.editStateId);
  const obj3 = useFetchListingsForGuild;
  const roleSubscriptionSettingsDisabled = useRoleSubscriptionSettingsDisabled.useRoleSubscriptionSettingsDisabled();
  const imperativeHandle = React.useImperativeHandle(ref, () => ({ dismissError: closure_3 }));
  let tmp7 = null;
  if (null != groupListingId) {
    tmp7 = null;
    if (null != subscriptionListing) {
      tmp7 = null;
      if (!subscriptionListing.published) {
        if (null != error) {
          obj = { children: null };
          const items = [callback2(Spacer(1297).Spacer, { size: 16 }), , ];
          obj = { children: null };
          obj[0] = error.getAnyErrorMessage();
          items[1] = callback2(groupListingId(11594), obj);
          Spacer = Spacer(1297).Spacer;
          tmp = callback2(Spacer, { size: 16 });
          items[2] = tmp;
          obj[0] = items;
          let tmp13 = callback3(closure_15, obj);
          const tmp12 = groupListingId(11594);
        } else {
          obj1 = { message: null, ctaMessage: null, onClick: null, submitting: null, disabled: null };
          const intl = Spacer(1236).intl;
          obj1[0] = intl.string(Spacer(1236).t.V5mSpz);
          const intl2 = Spacer(1236).intl;
          obj1[1] = intl2.string(Spacer(1236).t.Lj6R5m);
          obj1[2] = function onClick() {
            if (null != groupListingId) {
              if (null != subscriptionListing) {
                const obj = { guildId: null, groupListingId: null, listingId: null };
                obj[0] = closure_0;
                obj[1] = tmp;
                obj[2] = tmp2.id;
                return callback(obj);
              }
            }
          };
          obj1[3] = submitting;
          obj1[4] = roleSubscriptionSettingsDisabled;
          tmp13 = callback2(groupListingId(16863), obj1);
          const tmp17 = groupListingId(16863);
        }
      }
    }
  }
  return tmp7;
});
let obj1 = { backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW };
const result = require("get ActivityIndicator").fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/GuildSettingsRoleSubscriptionTierEdit.tsx");

export default function GuildSettingsRoleSubscriptionTierEdit(guildId) {
  let c14;
  let tmp17;
  guildId = guildId.guildId;
  const groupListingId = guildId.groupListingId;
  const onBeforeDispatchNewListing = guildId.onBeforeDispatchNewListing;
  let first;
  let callback;
  let navigation;
  let first1;
  let removeEditStateId;
  let ref;
  let hasChanges;
  let loading;
  let handleCreateOrUpdateFromEditState;
  let error;
  callback = undefined;
  let callback2;
  function GuildRoleSubscriptionsTierTemplateSelectedActionSheetImporter() {
    return guildId(first[36])(first[35], first.paths);
  }
  const tmp = createCacheKey();
  let obj = navigation;
  let tmp3 = callback(navigation.useState(guildId.initialEditStateId), 2);
  first = tmp3[0];
  callback = tmp3[1];
  let obj1 = guildId(first[11]);
  navigation = obj1.useNavigation();
  let obj2 = guildId(first[24]);
  const subscriptionListing = obj2.useSubscriptionListing(first);
  let obj3 = onBeforeDispatchNewListing(first[29]);
  first1 = callback(obj3.useName(first), 1)[0];
  let flag;
  if (subscriptionListing != null) {
    flag = subscriptionListing.published;
  }
  if (flag == null) {
    flag = false;
  }
  let tmp9Result = tmp9(tmp6[29]);
  removeEditStateId = tmp9Result.useEditStateIds(groupListingId, guildId).removeEditStateId;
  ref = obj.useRef(null);
  tmp9Result = tmp9(tmp6[29]);
  hasChanges = tmp9Result.useHasChanges(first);
  const createOrUpdateListingFromEditState = onBeforeDispatchNewListing(first[29]).useCreateOrUpdateListingFromEditState();
  loading = createOrUpdateListingFromEditState.loading;
  handleCreateOrUpdateFromEditState = createOrUpdateListingFromEditState.handleCreateOrUpdateFromEditState;
  error = createOrUpdateListingFromEditState.error;
  let items = [guildId, handleCreateOrUpdateFromEditState, first, groupListingId, onBeforeDispatchNewListing, removeEditStateId];
  callback = obj.useCallback(() => handleCreateOrUpdateFromEditState({
    guildId,
    editStateId: first,
    groupListingId,
    onBeforeDispatchNewListing,
    onAfterDispatchNewListing(id) {
      callback(id.id);
      callback2(closure_3);
    }
  }), items);
  const items1 = [error];
  const layoutEffect = obj.useLayoutEffect(() => {
    if (null != error) {
      let anyErrorMessage = error.getAnyErrorMessage();
      if (anyErrorMessage == null) {
        const intl = tmp(tmp2[28]).intl;
        anyErrorMessage = intl.string(tmp(tmp2[28]).t.R0RpRX);
      }
      guildId(first[30]).presentError(anyErrorMessage);
      const obj2 = guildId(first[30]);
    }
  }, items1);
  const tmp2 = callback;
  const tmp9Result1 = onBeforeDispatchNewListing(first[29]);
  [tmp17, c14] = callback(loading.useRoleTierEditStore((currentScene) => {
    let DETAILS = currentScene.currentScene;
    if (DETAILS == null) {
      DETAILS = handleCreateOrUpdateFromEditState.DETAILS;
    }
    const items = [DETAILS, currentScene.setScene];
    return items;
  }), 2);
  const items2 = [navigation, hasChanges, first1, loading, callback];
  const layoutEffect1 = obj.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: loading ? (() => callback2(callback(table[31]).HeaderSubmittingIndicator, {})) : (() => {
        const obj = { text: null, onPress: null, disabled: null };
        const intl = outer1_0(outer1_3[28]).intl;
        obj[0] = intl.string(outer1_0(outer1_3[28]).t["R3BPH+"]);
        obj[1] = closure_13;
        obj[2] = !closure_9;
        return outer1_14(outer1_0(outer1_3[32]).HeaderActionButton, obj);
      }),
      headerTitle() {
        const obj = { title: closure_6, subtitle: null };
        const intl = outer1_0(outer1_3[28]).intl;
        obj[1] = intl.string(outer1_0(outer1_3[28]).t.t94EHg);
        return outer1_14(outer1_0(outer1_3[31]).NavigatorHeader, obj);
      }
    });
  }, items2);
  const items3 = [navigation, first, guildId];
  const layoutEffect2 = obj.useLayoutEffect(() => {
    if (null == first) {
      let arr = navigation;
      const routes = navigation.getState().routes;
      let name;
      const subscriptionGroupListingsForGuildFetchState = ref.getSubscriptionGroupListingsForGuildFetchState(guildId);
      if (routes[routes.length - 1] != null) {
        name = tmp.name;
      }
      if (!tmp8) {
        arr = arr.pop();
      }
      tmp8 = name !== error.ROLE_SUBSCRIPTIONS_TIER_EDIT || subscriptionGroupListingsForGuildFetchState === hasChanges.FETCHING;
    }
  }, items3);
  guildId(first[33]);
  obj = {
    pageWidth: 0,
    defaultIndex: table[tmp17],
    onSetActiveIndex(arg0) {
      if (null != outer1_18[arg0]) {
        _undefined(tmp);
        const current = ref.current;
        if (current != null) {
          current.dismissError();
        }
      }
    },
    items: null
  };
  let intl = tmp5(tmp6[28]).intl;
  const items4 = [intl.string(guildId(first[28]).t.f7rGug), , ];
  const intl2 = tmp5(tmp6[28]).intl;
  items4[1] = intl2.string(guildId(first[28]).t.YCpDtS);
  const intl3 = tmp5(tmp6[28]).intl;
  items4[2] = intl3.string(guildId(first[28]).t.MpDNxN);
  obj[3] = items4.map((id) => ({ id, label: id, page: null }));
  if (null == first) {
    return null;
  } else {
    if (undefined === subscriptionListing) {
      const items5 = [tmp5(tmp6[34]).DismissibleContent.GUILD_ROLE_SUBSCRIPTION_TIER_TEMPLATES];
      let items6 = items5;
    } else {
      items6 = [];
    }
    obj = { guildId: null, editStateId: null, groupListingId: null, children: null };
    obj[0] = guildId;
    obj[1] = first;
    obj[2] = groupListingId;
    obj1 = { guildId: null, children: null };
    obj1[0] = guildId;
    obj2 = { style: null, children: null };
    obj2[0] = tmp.container;
    obj3 = { contentTypes: null, children: null };
    obj3[0] = items6;
    obj3[1] = function children(markAsDismissed) {
      markAsDismissed = markAsDismissed.markAsDismissed;
      let tmp3 = null;
      if (markAsDismissed.visibleContent === guildId(first[34]).DismissibleContent.GUILD_ROLE_SUBSCRIPTION_TIER_TEMPLATES) {
        const obj = { markAsDismissed: null, actionSheetKey: "TierTemplateSelected", importer: null };
        obj[0] = function markAsDismissed() {
          return markAsDismissed(outer1_13.UNKNOWN);
        };
        obj[2] = GuildRoleSubscriptionsTierTemplateSelectedActionSheetImporter;
        tmp3 = _undefined(guildId(first[38]).DismissibleActionSheet, obj);
      }
      return tmp3;
    };
    const items7 = [callback2(groupListingId(tmp6[37]), obj3), , ];
    const items8 = [tmp.tabsContainer, ];
    let prop = null;
    if (!flag) {
      prop = tmp.tabsContainerWithDraft;
    }
    const obj4 = { style: null, children: null };
    items8[1] = prop;
    obj4[0] = items8;
    const obj5 = { state: null };
    obj5[0] = tmp21;
    const items9 = [callback2(tmp5(tmp6[39]).SegmentedControl, obj5), ];
    const obj6 = { ref: null };
    obj6[0] = ref;
    items9[1] = callback2(closure_22, obj6);
    obj4[1] = items9;
    items7[1] = closure_16(first1, obj4);
    const obj7 = { selectedTab: null };
    obj7[0] = tmp17;
    items7[2] = callback2(TabContent, obj7);
    obj2[1] = items7;
    obj1[1] = closure_16(first1, obj2);
    obj[3] = callback2(tmp5(tmp6[25]).RoleSubscriptionSettingsDisabledContextProvider, obj1);
    return callback2(tmp5(tmp6[12]).EditStateContextProvider, obj);
  }
  const tmp2Result = callback(loading.useRoleTierEditStore((currentScene) => {
    let DETAILS = currentScene.currentScene;
    if (DETAILS == null) {
      DETAILS = handleCreateOrUpdateFromEditState.DETAILS;
    }
    const items = [DETAILS, currentScene.setScene];
    return items;
  }), 2);
};