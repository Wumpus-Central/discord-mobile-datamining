// discord_app/modules/guild_role_subscriptions/native/guild_settings/GuildSettingsRoleSubscriptionTierEdit.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../../intl/index.native.tsx";
import Button from "../../../../design/void/native.tsx";
import useNavigation from "../../../../design/components/Navigator/native/useNavigation.native.tsx";
import Text from "../../../../design/components/Text/native/Text.tsx";
import Button2 from "../../../../design/components/Button/native/Button.native.tsx";
import SafeAreaPaddingView from "../../../../components_native/common/SafeAreaView.tsx";
import useShouldHideGuildPurchaseEntryPoints from "../../../creator_monetization_review/CreatorMonetizationRestrictionsHooks.tsx";
import FormHeaderDefault from "../../../guild_member_verification/native/components/form_fields/FormHeader.tsx";
import useFetchListingsForGuild from "../../GuildRoleSubscriptionsHooks.tsx";
import useRoleSubscriptionSettingsDisabled from "../../RoleSubscriptionSettingsDisabledContext.tsx";
import useArchiveOrDeleteDefault from "useArchiveOrDelete.tsx";
import useEditStateContext from "../../edit_state/EditStateContextProvider.tsx";
import AddBenefitButton from "../components/GuildRoleSubscriptionTierBenefitsModal.tsx";
import MemberPreviews from "../components/GuildRoleSubscriptionTierDesignModal.tsx";
import Content from "../components/GuildRoleSubscriptionTierDetailsModal.tsx";
import registerAssetDefault from "../../../../../_runtime/16996_registerAsset.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__slicedToArray.js";
import noop from "../../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import makeGroupListingIndexSubscriptionListingTag from "../../GuildRoleSubscriptionsStore.tsx";
import { FetchState } from "../../GuildRoleSubscriptionsStore.tsx";
import usePriceTiers from "../RoleTierEditStore.tsx";
import { GuildRoleSubscriptionsTierScenes } from "../../GuildRoleSubscriptionsConstants.tsx";
import { GuildSettingsSections } from "../../../../Constants.tsx";
import { ContentDismissActionType } from "../../../dismissible_content/DismissibleContentConstants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";

require = fn;
function ArchiveOrDeleteTierSection() {
  const tmp = callback4();
  let obj = useNavigation;
  const navigation = obj.useNavigation();
  obj1 = useEditStateContext;
  const editStateContext = obj1.useEditStateContext();
  const guildId = editStateContext.guildId;
  ({ groupListingId, editStateId } = editStateContext);
  ({ buttonText, descriptionText, handleArchiveOrDelete, deleting, archiving } = useArchiveOrDeleteDefault(guildId, groupListingId, editStateId, navigation));
  let obj2 = useShouldHideGuildPurchaseEntryPoints;
  const allowSelfRemoveMonetization = obj2.useShouldRestrictUpdatingCreatorMonetizationSettings(guildId).allowSelfRemoveMonetization;
  obj = { style: tmp.actionHeader, children: buttonText };
  items = [callback2(FormHeaderDefault, obj), , ];
  obj = { style: tmp.actionDescription, variant: "text-sm/medium", color: "text-default", children: descriptionText };
  items[1] = callback2(Text.Text, obj);
  obj1 = { style: tmp.actionButton, children: null };
  obj2 = { variant: "destructive", grow: true, icon: null, onPress: null, disabled: null, text: null };
  const tmp4 = useArchiveOrDeleteDefault(guildId, groupListingId, editStateId, navigation);
  obj2[2] = callback2(Button.Icon, { size: Button.Icon.Sizes.SMALL, disableColor: true, source: registerAssetDefault });
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
  obj1[1] = callback2(Button2.Button, obj2);
  items[2] = callback2(closure_6, obj1);
  obj4[0] = items;
  return callback(closure_15, obj4);
}
function TabContent(selectedTab) {
  selectedTab = selectedTab.selectedTab;
  const tmp = callback4();
  if (GuildRoleSubscriptionsTierScenes.DETAILS === selectedTab) {
    let obj = { style: null, children: null };
    obj[0] = tmp.tabContent;
    obj = { bottom: true, children: null };
    items = [callback2(Content.GuildRoleSubscriptionTierDetailsTab, {}), callback2(ArchiveOrDeleteTierSection, {})];
    obj[1] = items;
    obj[1] = callback3(SafeAreaPaddingView.SafeAreaPaddingView, obj);
    return callback2(closure_7, obj);
  } else if (GuildRoleSubscriptionsTierScenes.DESIGN === selectedTab) {
    obj = { style: null, children: null };
    obj[0] = tmp.tabContent;
    obj1 = { bottom: true, children: null };
    obj1[1] = callback2(MemberPreviews.GuildRoleSubscriptionTierDesignTab, {});
    obj[1] = callback2(SafeAreaPaddingView.SafeAreaPaddingView, obj1);
    return callback2(closure_7, obj);
  } else if (GuildRoleSubscriptionsTierScenes.BENEFITS === selectedTab) {
    return callback2(AddBenefitButton.GuildRoleSubscriptionTierBenefitsTab, {});
  } else {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    error = new Error("Unsupported scene: " + selectedTab);
    throw error;
  }
}
({ View: closure_6, ScrollView: error } = get_ActivityIndicator);
({ jsx: closure_14, Fragment: closure_15, jsxs: closure_16 } = jsxProd);
const createCacheKey = { backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH, padding: 16 };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { paddingBottom: 0 };
createCacheKey[3] = { alignSelf: "stretch", margin: 16, marginTop: 0 };
createCacheKey[4] = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW };
createCacheKey[5] = { marginTop: 24, paddingStart: 16 };
createCacheKey[6] = { marginBottom: 16, marginLeft: 16 };
let closure_17 = createCacheKey.createStyles(createCacheKey);
let items = [, , ];
({ DETAILS: arr[0], DESIGN: arr[1], BENEFITS: arr[2] } = GuildRoleSubscriptionsTierScenes);
let closure_19 = items.reduce((acc, item, index) => {
  acc[item] = index;
  return acc;
}, {});
let closure_22 = require("noop").forwardRef((arg0, ref) => {
  let Spacer = require;
  let tmp = dependencyMap;
  let obj = useEditStateContext;
  const editStateContext = obj.useEditStateContext();
  ({ guildId: require, groupListingId } = editStateContext);
  obj1 = useFetchListingsForGuild;
  const publishSubscriptionListing = obj1.usePublishSubscriptionListing();
  ({ error, publishSubscriptionListing: importAll, clearError: dependencyMap, submitting } = publishSubscriptionListing);
  const subscriptionListing = useFetchListingsForGuild.useSubscriptionListing(editStateContext.editStateId);
  const roleSubscriptionSettingsDisabled = useRoleSubscriptionSettingsDisabled.useRoleSubscriptionSettingsDisabled();
  const imperativeHandle = React.useImperativeHandle(ref, () => ({ dismissError: closure_3 }));
  let tmp7 = null;
  if (null != groupListingId) {
    tmp7 = null;
    if (null != subscriptionListing) {
      tmp7 = null;
      if (!subscriptionListing.published) {
        if (null != error) {
          items = [callback2(Button.Spacer, { size: 16 }), , ];
          obj = { children: null };
          obj[0] = error.getAnyErrorMessage();
          items[1] = callback2(groupListingId(11384), obj);
          Spacer = Button.Spacer;
          tmp = callback2(Spacer, { size: 16 });
          items[2] = tmp;
          obj[0] = items;
          let tmp13 = callback3(closure_15, obj);
          const tmp12 = groupListingId(11384);
        } else {
          obj1 = { message: null, ctaMessage: null, onClick: null, submitting: null, disabled: null };
          const intl = getSystemLocale.intl;
          obj1[0] = intl.string(getSystemLocale.t.V5mSpz);
          const intl2 = getSystemLocale.intl;
          obj1[1] = intl2.string(getSystemLocale.t.Lj6R5m);
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
          tmp13 = callback2(groupListingId(16997), obj1);
          const tmp17 = groupListingId(16997);
        }
      }
    }
  }
  return tmp7;
});
const result = require("obj132").fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/GuildSettingsRoleSubscriptionTierEdit.tsx");

export default function GuildSettingsRoleSubscriptionTierEdit(guildId) {
  guildId = guildId.guildId;
  const groupListingId = guildId.groupListingId;
  const onBeforeDispatchNewListing = guildId.onBeforeDispatchNewListing;
  let navigation;
  let removeEditStateId;
  let ref;
  let hasChanges;
  let loading;
  let handleCreateOrUpdateFromEditState;
  error = undefined;
  let callback;
  let callback2;
  function GuildRoleSubscriptionsTierTemplateSelectedActionSheetImporter() {
    return guildId(first[36])(first[35], first.paths);
  }
  const tmp = callback4();
  let obj = navigation;
  let tmp3 = callback(navigation.useState(guildId.initialEditStateId), 2);
  const first = tmp3[0];
  callback = tmp3[1];
  obj1 = guildId(first[11]);
  navigation = obj1.useNavigation();
  let obj2 = guildId(first[24]);
  const subscriptionListing = obj2.useSubscriptionListing(first);
  let obj3 = onBeforeDispatchNewListing(first[29]);
  const first1 = callback(obj3.useName(first), 1)[0];
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
  items = [guildId, handleCreateOrUpdateFromEditState, first, groupListingId, onBeforeDispatchNewListing, removeEditStateId];
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
        const intl = guildId(first[28]).intl;
        anyErrorMessage = intl.string(guildId(first[28]).t.R0RpRX);
      }
      guildId(first[30]).presentError(anyErrorMessage);
      const obj2 = guildId(first[30]);
    }
  }, items1);
  const tmp9Result1 = onBeforeDispatchNewListing(first[29]);
  [tmp17, c14] = callback(loading.useRoleTierEditStore((currentScene) => {
    let DETAILS = currentScene.currentScene;
    if (DETAILS == null) {
      DETAILS = handleCreateOrUpdateFromEditState.DETAILS;
    }
    items = [DETAILS, currentScene.setScene];
    return items;
  }), 2);
  const items2 = [navigation, hasChanges, first1, loading, callback];
  const layoutEffect1 = obj.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: loading ? (() => callback2(callback(table[31]).HeaderSubmittingIndicator, {})) : (() => {
        const obj = { text: null, onPress: null, disabled: null };
        const intl = guildId(first[28]).intl;
        obj[0] = intl.string(guildId(first[28]).t["R3BPH+"]);
        obj[1] = closure_13;
        obj[2] = !closure_9;
        return closure_1_14(guildId(first[32]).HeaderActionButton, obj);
      }),
      headerTitle() {
        const obj = { title: closure_6, subtitle: null };
        const intl = guildId(first[28]).intl;
        obj[1] = intl.string(guildId(first[28]).t.t94EHg);
        return closure_1_14(guildId(first[31]).NavigatorHeader, obj);
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
      if (null != items[arg0]) {
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
  obj[3] = items4.map((item, index) => ({ id: item, label: item, page: null }));
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
          return markAsDismissed(callback.UNKNOWN);
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
    items7[1] = callback(first1, obj4);
    const obj7 = { selectedTab: null };
    obj7[0] = tmp17;
    items7[2] = callback2(TabContent, obj7);
    obj2[1] = items7;
    obj1[1] = callback(first1, obj2);
    obj[3] = callback2(tmp5(tmp6[25]).RoleSubscriptionSettingsDisabledContextProvider, obj1);
    return callback2(tmp5(tmp6[12]).EditStateContextProvider, obj);
  }
  const tmp2Result = callback(loading.useRoleTierEditStore((currentScene) => {
    let DETAILS = currentScene.currentScene;
    if (DETAILS == null) {
      DETAILS = handleCreateOrUpdateFromEditState.DETAILS;
    }
    items = [DETAILS, currentScene.setScene];
    return items;
  }), 2);
};