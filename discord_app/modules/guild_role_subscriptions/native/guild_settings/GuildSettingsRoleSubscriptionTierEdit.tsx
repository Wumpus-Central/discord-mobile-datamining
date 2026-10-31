// discord_app/modules/guild_role_subscriptions/native/guild_settings/GuildSettingsRoleSubscriptionTierEdit.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import useNavigation from "../../../../design/components/Navigator/native/useNavigation.native.tsx";
import dismissible_content from "../../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import components_Button_Button from "../../../../design/components/Button/native/Button.native.tsx";
import ToastUtils from "../../../toast/native/ToastUtils.tsx";
import TrashIcon from "../../../../design/components/Icon/native/redesign/generated/TrashIcon.tsx";
import TableRowGroup from "../../../../design/components/TableRow/native/TableRowGroup.native.tsx";
import common_SafeAreaView from "../../../../components_native/common/SafeAreaView.tsx";
import CreatorMonetizationRestrictionsHooks from "../../../creator_monetization_review/CreatorMonetizationRestrictionsHooks.tsx";
import DismissibleActionSheet from "../../../dismissible_content/native/DismissibleActionSheet.tsx";
import ErrorBlockDefault from "../components/ErrorBlock.tsx";
import GuildRoleSubscriptionsHooks from "../../GuildRoleSubscriptionsHooks.tsx";
import RoleSubscriptionSettingsDisabledContext from "../../RoleSubscriptionSettingsDisabledContext.tsx";
import useArchiveOrDeleteDefault from "useArchiveOrDelete.tsx";
import EditStateContextProvider from "../../edit_state/EditStateContextProvider.tsx";
import GuildRoleSubscriptionTierBenefitsModal from "../components/GuildRoleSubscriptionTierBenefitsModal.tsx";
import GuildRoleSubscriptionTierDesignModal from "../components/GuildRoleSubscriptionTierDesignModal.tsx";
import GuildRoleSubscriptionTierDetailsModal from "../components/GuildRoleSubscriptionTierDetailsModal.tsx";
import ActionableNoticeDefault from "../components/ActionableNotice.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import GuildRoleSubscriptionsStore from "../../GuildRoleSubscriptionsStore.tsx";
import RoleTierEditStore from "../RoleTierEditStore.tsx";

require = fn;
function ArchiveOrDeleteTierSection() {
  const tmp = closure_16();
  const navigation = useNavigation.useNavigation();
  const editStateContext = EditStateContextProvider.useEditStateContext();
  const guildId = editStateContext.guildId;
  ({ groupListingId, editStateId } = editStateContext);
  ({ buttonText, descriptionText, handleArchiveOrDelete, deleting, archiving } = useArchiveOrDeleteDefault(guildId, groupListingId, editStateId, navigation));
  const tmp4 = useArchiveOrDeleteDefault(guildId, groupListingId, editStateId, navigation);
  const allowSelfRemoveMonetization = CreatorMonetizationRestrictionsHooks.useShouldRestrictUpdatingCreatorMonetizationSettings(guildId).allowSelfRemoveMonetization;
  const obj4 = { style: tmp.actionSection, children: null };
  const obj5 = { children: null };
  items = [closure_1_14(TableRowGroup.TableRowGroupTitle, { title: buttonText }), closure_1_14(Text_Text.Text, { variant: "text-sm/medium", color: "text-default", children: descriptionText })];
  obj5.children = items;
  const items1 = [__initData(timestampProducer, obj5), ];
  const obj6 = { variant: "destructive", grow: true, icon: null, onPress: null, disabled: null, text: null };
  obj6.icon = closure_1_14(TrashIcon.TrashIcon, { size: "xs", color: nativeDefault.colors.CONTROL_CRITICAL_PRIMARY_TEXT_DEFAULT });
  obj6.onPress = handleArchiveOrDelete;
  let tmp8 = !allowSelfRemoveMonetization;
  if (allowSelfRemoveMonetization) {
    tmp8 = deleting;
  }
  if (!tmp8) {
    tmp8 = archiving;
  }
  obj6.disabled = tmp8;
  obj6.text = buttonText;
  items1[1] = closure_1_14(components_Button_Button.Button, obj6);
  obj4.children = items1;
  return __initData(timestampProducer, obj4);
}
function TabContent(selectedTab) {
  selectedTab = selectedTab.selectedTab;
  const tmp = closure_16();
  if (GuildRoleSubscriptionsTierScenes.DETAILS === selectedTab) {
    const obj2 = { style: tmp.tabContent, children: null };
    const obj3 = { bottom: true, children: null };
    items = [closure_1_14(GuildRoleSubscriptionTierDetailsModal.GuildRoleSubscriptionTierDetailsTab, {}), closure_1_14(ArchiveOrDeleteTierSection, {})];
    obj3.children = items;
    obj2.children = __initData(common_SafeAreaView.SafeAreaPaddingView, obj3);
    return closure_1_14(React5, obj2);
  } else if (GuildRoleSubscriptionsTierScenes.DESIGN === selectedTab) {
    const obj = { style: tmp.tabContent, children: null };
    const obj4 = { bottom: true, children: closure_1_14(GuildRoleSubscriptionTierDesignModal.GuildRoleSubscriptionTierDesignTab, {}) };
    obj.children = closure_1_14(common_SafeAreaView.SafeAreaPaddingView, obj4);
    return closure_1_14(React5, obj);
  } else if (GuildRoleSubscriptionsTierScenes.BENEFITS === selectedTab) {
    return closure_1_14(GuildRoleSubscriptionTierBenefitsModal.GuildRoleSubscriptionTierBenefitsTab, {});
  } else {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const error = new Error("Unsupported scene: " + selectedTab);
    throw error;
  }
}
function DraftPublishPrompt(ref) {
  const merged = Object.assign(ref, Object.assign({ ref: 0 }));
  c0 = undefined;
  groupListingId = undefined;
  c2 = undefined;
  c3 = undefined;
  let anyErrorMessage = closure_16();
  let tmp4 = dependencyMap;
  const editStateContext = EditStateContextProvider.useEditStateContext();
  ({ guildId: c0, groupListingId } = editStateContext);
  const publishSubscriptionListing = GuildRoleSubscriptionsHooks.usePublishSubscriptionListing();
  ({ error, publishSubscriptionListing: c2, clearError: c3, submitting } = publishSubscriptionListing);
  const subscriptionListing = GuildRoleSubscriptionsHooks.useSubscriptionListing(editStateContext.editStateId);
  const roleSubscriptionSettingsDisabled = RoleSubscriptionSettingsDisabledContext.useRoleSubscriptionSettingsDisabled();
  const imperativeHandle = noop.useImperativeHandle(ref.ref, () => ({ dismissError }));
  let tmp10 = null;
  if (null != groupListingId) {
    tmp10 = null;
    if (null != subscriptionListing) {
      tmp10 = null;
      if (!subscriptionListing.published) {
        if (null != error) {
          const obj5 = { style: anyErrorMessage.publishError, children: null };
          const obj6 = { children: null };
          anyErrorMessage = error.getAnyErrorMessage();
          obj6.children = anyErrorMessage;
          tmp4 = closure_1_14(ErrorBlockDefault, obj6);
          obj5.children = tmp4;
          let tmp15 = closure_1_14(timestampProducer, obj5);
        } else {
          const obj7 = { message: null, ctaMessage: null, onClick: null, submitting: null, disabled: null };
          const intl = util.intl;
          obj7.message = intl.string(util.t.V5mSpz);
          const intl2 = util.intl;
          obj7.ctaMessage = intl2.string(util.t.Lj6R5m);
          obj7.onClick = function handlePublish() {
            if (null != groupListingId) {
              if (null != subscriptionListing) {
                const obj = { guildId, groupListingId: tmp, listingId: tmp2.id };
                return _undefined(obj);
              }
            }
          };
          obj7.submitting = submitting;
          obj7.disabled = roleSubscriptionSettingsDisabled;
          tmp15 = closure_1_14(ActionableNoticeDefault, obj7);
        }
      }
    }
  }
  return tmp10;
}
get_ActivityIndicator = fn(17);
({ View: metroRequire, ScrollView: closure_7 } = get_ActivityIndicator);
const FetchState = fn(4939).FetchState;
const GuildRoleSubscriptionsTierScenes = fn(17183).GuildRoleSubscriptionsTierScenes;
const GuildSettingsSections = fn(1072).GuildSettingsSections;
const ContentDismissActionType = fn(4860).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
const createStyles = fn(5014);
let obj2 = { container: { flex: 1 }, tabsContainer: { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, padding: nativeDefault.space.PX_16 }, tabsContainerWithDraft: { paddingBottom: 0 }, tabContent: null, publishError: null, actionSection: null };
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, padding: nativeDefault.space.PX_16 };
obj2.tabContent = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
let obj4 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj2.publishError = { paddingVertical: nativeDefault.space.PX_16 };
let obj5 = { paddingVertical: nativeDefault.space.PX_16 };
obj2.actionSection = { padding: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_24, gap: nativeDefault.space.PX_16 };
let closure_16 = createStyles.createStyles(obj2);
let items = [, , ];
({ DETAILS: arr[0], DESIGN: arr[1], BENEFITS: arr[2] } = GuildRoleSubscriptionsTierScenes);
const dependencyMap = items.reduce((acc, item, index) => {
  acc[item] = index;
  return acc;
}, {});
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/GuildSettingsRoleSubscriptionTierEdit.tsx");

export default function GuildSettingsRoleSubscriptionTierEdit(guildId) {
  guildId = guildId.guildId;
  const groupListingId = guildId.groupListingId;
  const onBeforeDispatchNewListing = guildId.onBeforeDispatchNewListing;
  editStateId = undefined;
  _slicedToArray = undefined;
  let navigation;
  let removeEditStateId;
  let ref;
  let hasChanges;
  let loading;
  let handleCreateOrUpdateFromEditState;
  let error;
  let callback;
  c14 = undefined;
  function GuildRoleSubscriptionsTierTemplateSelectedActionSheetImporter() {
    return guildId(first[35])(first[34], first.paths);
  }
  const tmp = closure_16();
  [editStateId, _slicedToArray] = navigation.useState(guildId.initialEditStateId);
  navigation = guildId(editStateId[11]).useNavigation();
  let obj2 = guildId(editStateId[11]);
  const tmp2 = _slicedToArray;
  const subscriptionListing = guildId(editStateId[23]).useSubscriptionListing(editStateId);
  const obj3 = guildId(editStateId[23]);
  const first1 = _slicedToArray(onBeforeDispatchNewListing(editStateId[28]).useName(editStateId), 1)[0];
  let flag;
  if (subscriptionListing != null) {
    flag = subscriptionListing.published;
  }
  if (flag == null) {
    flag = false;
  }
  const obj4 = onBeforeDispatchNewListing(editStateId[28]);
  removeEditStateId = onBeforeDispatchNewListing(editStateId[28]).useEditStateIds(groupListingId, guildId).removeEditStateId;
  ref = obj.useRef(null);
  const tmp9Result = onBeforeDispatchNewListing(editStateId[28]);
  hasChanges = onBeforeDispatchNewListing(editStateId[28]).useHasChanges(editStateId);
  const tmp9Result3 = onBeforeDispatchNewListing(editStateId[28]);
  const createOrUpdateListingFromEditState = onBeforeDispatchNewListing(editStateId[28]).useCreateOrUpdateListingFromEditState();
  loading = createOrUpdateListingFromEditState.loading;
  handleCreateOrUpdateFromEditState = createOrUpdateListingFromEditState.handleCreateOrUpdateFromEditState;
  error = createOrUpdateListingFromEditState.error;
  items = [guildId, handleCreateOrUpdateFromEditState, editStateId, groupListingId, onBeforeDispatchNewListing, removeEditStateId];
  callback = obj.useCallback(() => handleCreateOrUpdateFromEditState({
    guildId,
    editStateId,
    groupListingId,
    onBeforeDispatchNewListing,
    onAfterDispatchNewListing(id) {
      closure_1_4(id.id);
      removeEditStateId(editStateId);
    }
  }), items);
  const items1 = [error];
  const layoutEffect = obj.useLayoutEffect(() => {
    if (null != error) {
      let anyErrorMessage = error.getAnyErrorMessage();
      if (anyErrorMessage == null) {
        const intl = util.intl;
        anyErrorMessage = intl.string(util.t.R0RpRX);
      }
      ToastUtils.presentError(anyErrorMessage);
    }
  }, items1);
  const tmp9Result4 = onBeforeDispatchNewListing(editStateId[28]);
  [tmp17, c14] = tmp2(loading.useRoleTierEditStore((currentScene) => {
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
      headerRight: loading ? (() => _undefined(guildId(editStateId[30]).HeaderSubmittingIndicator, {})) : (() => {
        const obj = { text: null, onPress: null, disabled: null };
        const intl = guildId(first[27]).intl;
        obj.text = intl.string(guildId(first[27]).t["R3BPH+"]);
        obj.onPress = onPress;
        obj.disabled = !hasChanges;
        return c14(guildId(first[31]).HeaderActionButton, obj);
      }),
      headerTitle() {
        const obj = { title, subtitle: null };
        const intl = guildId(first[27]).intl;
        obj.subtitle = intl.string(guildId(first[27]).t.t94EHg);
        return c14(guildId(first[30]).NavigatorHeader, obj);
      }
    });
  }, items2);
  const items3 = [navigation, editStateId, guildId];
  const layoutEffect2 = obj.useLayoutEffect(() => {
    if (null == first) {
      const routes = navigation.getState().routes;
      let name;
      const subscriptionGroupListingsForGuildFetchState = GuildRoleSubscriptionsStore.getSubscriptionGroupListingsForGuildFetchState(guildId);
      if (routes[routes.length - 1] != null) {
        name = tmp.name;
      }
      if (!tmp8) {
        navigation.pop();
      }
      tmp8 = name !== GuildSettingsSections.ROLE_SUBSCRIPTIONS_TIER_EDIT || subscriptionGroupListingsForGuildFetchState === FetchState.FETCHING;
    }
  }, items3);
  guildId(editStateId[32]);
  let intl = tmp5(tmp6[27]).intl;
  const items4 = [intl.string(guildId(editStateId[27]).t.f7rGug), , ];
  const intl2 = tmp5(tmp6[27]).intl;
  items4[1] = intl2.string(guildId(editStateId[27]).t.YCpDtS);
  const intl3 = tmp5(tmp6[27]).intl;
  items4[2] = intl3.string(guildId(editStateId[27]).t.MpDNxN);
  {
    pageWidth: 0,
    defaultIndex: dependencyMap[tmp17],
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
  }.items = items4.map((id) => ({ id, label: id, page: null }));
  if (null == editStateId) {
    return null;
  } else {
    if (undefined === subscriptionListing) {
      const items5 = [tmp5(tmp6[33]).DismissibleContent.GUILD_ROLE_SUBSCRIPTION_TIER_TEMPLATES];
      let items6 = items5;
    } else {
      items6 = [];
    }
    const obj6 = { guildId, editStateId, groupListingId, children: null };
    const obj7 = { guildId, children: null };
    const obj8 = { style: tmp.container, children: null };
    const obj9 = {
      contentTypes: items6,
      children(markAsDismissed) {
          markAsDismissed = markAsDismissed.markAsDismissed;
          let tmp3 = null;
          if (markAsDismissed.visibleContent === dismissible_content.DismissibleContent.GUILD_ROLE_SUBSCRIPTION_TIER_TEMPLATES) {
            const obj = {
              markAsDismissed() {
                  return markAsDismissed(callback.UNKNOWN);
                },
              actionSheetKey: "TierTemplateSelected",
              importer: GuildRoleSubscriptionsTierTemplateSelectedActionSheetImporter
            };
            tmp3 = closure_2_14(DismissibleActionSheet.DismissibleActionSheet, obj);
          }
          return tmp3;
        }
    };
    const items7 = [c14(groupListingId(tmp6[36]), obj9), , ];
    const items8 = [tmp.tabsContainer, ];
    let prop = null;
    if (!flag) {
      prop = tmp.tabsContainerWithDraft;
    }
    const obj10 = { style: null, children: null };
    items8[1] = prop;
    obj10.style = items8;
    const obj11 = { state: tmp21 };
    const items9 = [c14(tmp5(tmp6[38]).SegmentedControl, obj11), ];
    const obj12 = { ref };
    items9[1] = c14(DraftPublishPrompt, obj12);
    obj10.children = items9;
    items7[1] = GuildRoleSubscriptionsTierTemplateSelectedActionSheetImporter(first1, obj10);
    const obj13 = { selectedTab: tmp17 };
    items7[2] = c14(TabContent, obj13);
    obj8.children = items7;
    obj7.children = GuildRoleSubscriptionsTierTemplateSelectedActionSheetImporter(first1, obj8);
    obj6.children = c14(tmp5(tmp6[24]).RoleSubscriptionSettingsDisabledContextProvider, obj7);
    return c14(tmp5(tmp6[12]).EditStateContextProvider, obj6);
  }
  const obj5 = {
    pageWidth: 0,
    defaultIndex: dependencyMap[tmp17],
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
  const tmp2Result = tmp2(loading.useRoleTierEditStore((currentScene) => {
    let DETAILS = currentScene.currentScene;
    if (DETAILS == null) {
      DETAILS = handleCreateOrUpdateFromEditState.DETAILS;
    }
    items = [DETAILS, currentScene.setScene];
    return items;
  }), 2);
};