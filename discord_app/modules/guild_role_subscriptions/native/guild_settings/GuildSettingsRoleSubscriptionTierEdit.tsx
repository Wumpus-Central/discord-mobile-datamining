// === Module 18049: GuildSettingsRoleSubscriptionTierEdit ===

// Module 18049 (GuildSettingsRoleSubscriptionTierEdit)
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1177 */;
import useNavigation from "useNavigation" /* 1484 */;
import dismissible_content from "dismissible_content" /* 1944 */;
import ToastUtils from "ToastUtils" /* 4337 */;
import Text_Text from "Text/Text" /* 4636 */;
import components_Button_Button from "components/Button/Button" /* 5062 */;
import common_SafeAreaView from "common/SafeAreaView" /* 7237 */;
import CreatorMonetizationRestrictionsHooks from "CreatorMonetizationRestrictionsHooks" /* 7367 */;
import FormHeaderDefault from "FormHeader" /* 9967 */;
import DismissibleActionSheet from "DismissibleActionSheet" /* 10775 */;
import ErrorBlockDefault from "ErrorBlock" /* 12374 */;
import GuildRoleSubscriptionsHooks from "GuildRoleSubscriptionsHooks" /* 15327 */;
import RoleSubscriptionSettingsDisabledContext from "RoleSubscriptionSettingsDisabledContext" /* 17999 */;
import useArchiveOrDeleteDefault from "useArchiveOrDelete" /* 18012 */;
import EditStateContextProvider from "EditStateContextProvider" /* 18016 */;
import GuildRoleSubscriptionTierBenefitsModal from "GuildRoleSubscriptionTierBenefitsModal" /* 18019 */;
import GuildRoleSubscriptionTierDesignModal from "GuildRoleSubscriptionTierDesignModal" /* 18042 */;
import GuildRoleSubscriptionTierDetailsModal from "GuildRoleSubscriptionTierDetailsModal" /* 18044 */;
import _modDef18050 from "module_18050" /* 18050 */;
import ActionableNoticeDefault from "ActionableNotice" /* 18051 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GuildRoleSubscriptionsStore from "GuildRoleSubscriptionsStore" /* 4272 */;
import RoleTierEditStore from "RoleTierEditStore" /* 18004 */;

const util = Spacer(1115);
require = fn;
function ArchiveOrDeleteTierSection() {
  const tmp = closure_17();
  const navigation = useNavigation.useNavigation();
  const editStateContext = EditStateContextProvider.useEditStateContext();
  const guildId = editStateContext.guildId;
  ({ groupListingId, editStateId } = editStateContext);
  ({ buttonText, descriptionText, handleArchiveOrDelete, deleting, archiving } = useArchiveOrDeleteDefault(guildId, groupListingId, editStateId, navigation));
  const tmp4 = useArchiveOrDeleteDefault(guildId, groupListingId, editStateId, navigation);
  const allowSelfRemoveMonetization = CreatorMonetizationRestrictionsHooks.useShouldRestrictUpdatingCreatorMonetizationSettings(guildId).allowSelfRemoveMonetization;
  items = [closure_1_14(FormHeaderDefault, { style: tmp.actionHeader, children: buttonText }), closure_1_14(Text_Text.Text, { style: tmp.actionDescription, variant: "text-sm/medium", color: "text-default", children: descriptionText }), ];
  const obj6 = { style: tmp.actionButton, children: null };
  const obj7 = { variant: "destructive", grow: true, icon: null, onPress: null, disabled: null, text: null };
  const obj4 = { style: tmp.actionHeader, children: buttonText };
  const obj5 = { style: tmp.actionDescription, variant: "text-sm/medium", color: "text-default", children: descriptionText };
  obj7.icon = closure_1_14(native.Icon, { size: native.Icon.Sizes.SMALL, disableColor: true, source: _modDef18050 });
  obj7.onPress = handleArchiveOrDelete;
  let tmp9 = !allowSelfRemoveMonetization;
  if (allowSelfRemoveMonetization) {
    tmp9 = deleting;
  }
  if (!tmp9) {
    tmp9 = archiving;
  }
  const obj9 = { children: null };
  obj7.disabled = tmp9;
  obj7.text = buttonText;
  obj6.children = closure_1_14(components_Button_Button.Button, obj7);
  items[2] = closure_1_14(timestampProducer, obj6);
  obj9.children = items;
  return value2(__initData, obj9);
}
function TabContent(selectedTab) {
  selectedTab = selectedTab.selectedTab;
  const tmp = closure_17();
  if (GuildRoleSubscriptionsTierScenes.DETAILS === selectedTab) {
    const obj2 = { style: tmp.tabContent, children: null };
    const obj3 = { bottom: true, children: null };
    items = [closure_1_14(GuildRoleSubscriptionTierDetailsModal.GuildRoleSubscriptionTierDetailsTab, {}), closure_1_14(ArchiveOrDeleteTierSection, {})];
    obj3.children = items;
    obj2.children = value2(common_SafeAreaView.SafeAreaPaddingView, obj3);
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
get_ActivityIndicator = fn(17);
({ View: metroRequire, ScrollView: closure_7 } = get_ActivityIndicator);
const FetchState = fn(4272).FetchState;
const GuildRoleSubscriptionsTierScenes = fn(15320).GuildRoleSubscriptionsTierScenes;
const GuildSettingsSections = fn(1074).GuildSettingsSections;
const ContentDismissActionType = fn(1955).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: closure_14, Fragment: closure_15, jsxs: closure_16 } = jsxProd);
const createStyles = fn(4640);
let obj2 = { container: { flex: 1 }, tabsContainer: { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, padding: 16 }, tabsContainerWithDraft: { paddingBottom: 0 }, actionButton: { alignSelf: "stretch", margin: 16, marginTop: 0 }, tabContent: null, actionHeader: null, actionDescription: null };
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, padding: 16 };
obj2.tabContent = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj2.actionHeader = { marginTop: 24, paddingStart: 16 };
obj2.actionDescription = { marginBottom: 16, marginLeft: 16 };
let closure_17 = createStyles.createStyles(obj2);
let items = [, , ];
({ DETAILS: arr[0], DESIGN: arr[1], BENEFITS: arr[2] } = GuildRoleSubscriptionsTierScenes);
const dependencyMap = items.reduce((acc, item, index) => {
  acc[item] = index;
  return acc;
}, {});
let closure_22 = fn(19).forwardRef((arg0, arg1) => {
  let Spacer = require;
  let tmp = dependencyMap;
  const editStateContext = EditStateContextProvider.useEditStateContext();
  ({ guildId: require, groupListingId } = editStateContext);
  const publishSubscriptionListing = GuildRoleSubscriptionsHooks.usePublishSubscriptionListing();
  ({ error, publishSubscriptionListing: importAll, clearError: dependencyMap, submitting } = publishSubscriptionListing);
  const subscriptionListing = GuildRoleSubscriptionsHooks.useSubscriptionListing(editStateContext.editStateId);
  const roleSubscriptionSettingsDisabled = RoleSubscriptionSettingsDisabledContext.useRoleSubscriptionSettingsDisabled();
  const imperativeHandle = noop.useImperativeHandle(arg1, () => ({ dismissError }));
  let tmp7 = null;
  if (null != groupListingId) {
    tmp7 = null;
    if (null != subscriptionListing) {
      tmp7 = null;
      if (!subscriptionListing.published) {
        if (null != error) {
          const obj5 = { children: null };
          items = [closure_1_14(native.Spacer, { size: 16 }), , ];
          const obj6 = { children: error.getAnyErrorMessage() };
          items[1] = closure_1_14(ErrorBlockDefault, obj6);
          Spacer = native.Spacer;
          tmp = closure_1_14(Spacer, { size: 16 });
          items[2] = tmp;
          obj5.children = items;
          let tmp13 = value2(__initData, obj5);
        } else {
          const obj7 = { message: null, ctaMessage: null, onClick: null, submitting: null, disabled: null };
          const intl = util.intl;
          obj7.message = intl.string(util.t.V5mSpz);
          const intl2 = util.intl;
          obj7.ctaMessage = intl2.string(util.t.Lj6R5m);
          obj7.onClick = function onClick() {
            if (null != groupListingId) {
              if (null != subscriptionListing) {
                const obj = { guildId, groupListingId: tmp, listingId: tmp2.id };
                return importAll(obj);
              }
            }
          };
          obj7.submitting = submitting;
          obj7.disabled = roleSubscriptionSettingsDisabled;
          tmp13 = closure_1_14(ActionableNoticeDefault, obj7);
        }
      }
    }
  }
  return tmp7;
});
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
    return guildId(first[36])(first[35], first.paths);
  }
  const tmp = closure_17();
  [editStateId, _slicedToArray] = navigation.useState(guildId.initialEditStateId);
  navigation = guildId(editStateId[11]).useNavigation();
  let obj2 = guildId(editStateId[11]);
  const tmp2 = _slicedToArray;
  const subscriptionListing = guildId(editStateId[24]).useSubscriptionListing(editStateId);
  const obj3 = guildId(editStateId[24]);
  const first1 = _slicedToArray(onBeforeDispatchNewListing(editStateId[29]).useName(editStateId), 1)[0];
  let flag;
  if (subscriptionListing != null) {
    flag = subscriptionListing.published;
  }
  if (flag == null) {
    flag = false;
  }
  const obj4 = onBeforeDispatchNewListing(editStateId[29]);
  removeEditStateId = onBeforeDispatchNewListing(editStateId[29]).useEditStateIds(groupListingId, guildId).removeEditStateId;
  ref = obj.useRef(null);
  const tmp9Result = onBeforeDispatchNewListing(editStateId[29]);
  hasChanges = onBeforeDispatchNewListing(editStateId[29]).useHasChanges(editStateId);
  const tmp9Result3 = onBeforeDispatchNewListing(editStateId[29]);
  const createOrUpdateListingFromEditState = onBeforeDispatchNewListing(editStateId[29]).useCreateOrUpdateListingFromEditState();
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
  const tmp9Result4 = onBeforeDispatchNewListing(editStateId[29]);
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
      headerRight: loading ? (() => _undefined(guildId(editStateId[31]).HeaderSubmittingIndicator, {})) : (() => {
        const obj = { text: null, onPress: null, disabled: null };
        const intl = guildId(first[28]).intl;
        obj.text = intl.string(guildId(first[28]).t["R3BPH+"]);
        obj.onPress = onPress;
        obj.disabled = !hasChanges;
        return c14(guildId(first[32]).HeaderActionButton, obj);
      }),
      headerTitle() {
        const obj = { title, subtitle: null };
        const intl = guildId(first[28]).intl;
        obj.subtitle = intl.string(guildId(first[28]).t.t94EHg);
        return c14(guildId(first[31]).NavigatorHeader, obj);
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
  guildId(editStateId[33]);
  let intl = tmp5(tmp6[28]).intl;
  const items4 = [intl.string(guildId(editStateId[28]).t.f7rGug), , ];
  const intl2 = tmp5(tmp6[28]).intl;
  items4[1] = intl2.string(guildId(editStateId[28]).t.YCpDtS);
  const intl3 = tmp5(tmp6[28]).intl;
  items4[2] = intl3.string(guildId(editStateId[28]).t.MpDNxN);
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
      const items5 = [tmp5(tmp6[34]).DismissibleContent.GUILD_ROLE_SUBSCRIPTION_TIER_TEMPLATES];
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
    const items7 = [c14(groupListingId(tmp6[37]), obj9), , ];
    const items8 = [tmp.tabsContainer, ];
    let prop = null;
    if (!flag) {
      prop = tmp.tabsContainerWithDraft;
    }
    const obj10 = { style: null, children: null };
    items8[1] = prop;
    obj10.style = items8;
    const obj11 = { state: tmp21 };
    const items9 = [c14(tmp5(tmp6[39]).SegmentedControl, obj11), ];
    const obj12 = { ref };
    items9[1] = c14(closure_22, obj12);
    obj10.children = items9;
    items7[1] = closure_16(first1, obj10);
    const obj13 = { selectedTab: tmp17 };
    items7[2] = c14(TabContent, obj13);
    obj8.children = items7;
    obj7.children = closure_16(first1, obj8);
    obj6.children = c14(tmp5(tmp6[25]).RoleSubscriptionSettingsDisabledContextProvider, obj7);
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