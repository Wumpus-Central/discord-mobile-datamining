// discord_app/modules/guild_role_subscriptions/native/guild_settings/GuildSettingsRoleSubscriptionTierEdit.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../../design/void/native.tsx";
import useNavigation from "../../../../design/components/Navigator/native/useNavigation.native.tsx";
import dismissible_content from "../../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import ToastUtils from "../../../toast/native/ToastUtils.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import components_Button_Button from "../../../../design/components/Button/native/Button.native.tsx";
import common_SafeAreaView from "../../../../components_native/common/SafeAreaView.tsx";
import CreatorMonetizationRestrictionsHooks from "../../../creator_monetization_review/CreatorMonetizationRestrictionsHooks.tsx";
import FormHeaderDefault from "../../../guild_member_verification/native/components/form_fields/FormHeader.tsx";
import DismissibleActionSheet from "../../../dismissible_content/native/DismissibleActionSheet.tsx";
import ErrorBlockDefault from "../components/ErrorBlock.tsx";
import GuildRoleSubscriptionsHooks from "../../GuildRoleSubscriptionsHooks.tsx";
import RoleSubscriptionSettingsDisabledContext from "../../RoleSubscriptionSettingsDisabledContext.tsx";
import useArchiveOrDeleteDefault from "useArchiveOrDelete.tsx";
import EditStateContextProvider from "../../edit_state/EditStateContextProvider.tsx";
import GuildRoleSubscriptionTierBenefitsModal from "../components/GuildRoleSubscriptionTierBenefitsModal.tsx";
import GuildRoleSubscriptionTierDesignModal from "../components/GuildRoleSubscriptionTierDesignModal.tsx";
import GuildRoleSubscriptionTierDetailsModal from "../components/GuildRoleSubscriptionTierDetailsModal.tsx";
import _modDef17775 from "../../../../../_runtime/metro/17775__.js";
import ActionableNoticeDefault from "../components/ActionableNotice.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import GuildRoleSubscriptionsStore from "../../GuildRoleSubscriptionsStore.tsx";
import RoleTierEditStore from "../RoleTierEditStore.tsx";

const util = Spacer(1114);
require = fn;
function ArchiveOrDeleteTierSection() {
  const tmp = closure_17();
  let obj = useNavigation;
  const navigation = obj.useNavigation();
  let obj1 = EditStateContextProvider;
  const editStateContext = obj1.useEditStateContext();
  const guildId = editStateContext.guildId;
  ({ groupListingId, editStateId } = editStateContext);
  ({ buttonText, descriptionText, handleArchiveOrDelete, deleting, archiving } = useArchiveOrDeleteDefault(
    guildId,
    groupListingId,
    editStateId,
    navigation,
  ));
  let obj2 = CreatorMonetizationRestrictionsHooks;
  const allowSelfRemoveMonetization =
    obj2.useShouldRestrictUpdatingCreatorMonetizationSettings(guildId).allowSelfRemoveMonetization;
  obj = { style: tmp.actionHeader, children: buttonText };
  items = [closure_1_14(FormHeaderDefault, obj), ,];
  obj = { style: tmp.actionDescription, variant: "text-sm/medium", color: "text-default", children: descriptionText };
  items[1] = closure_1_14(Text_Text.Text, obj);
  obj1 = { style: tmp.actionButton, children: null };
  obj2 = { variant: "destructive", grow: true, icon: null, onPress: null, disabled: null, text: null };
  const tmp4 = useArchiveOrDeleteDefault(guildId, groupListingId, editStateId, navigation);
  obj2.icon = closure_1_14(native.Icon, { size: native.Icon.Sizes.SMALL, disableColor: true, source: _modDef17775 });
  obj2.onPress = handleArchiveOrDelete;
  let tmp9 = !allowSelfRemoveMonetization;
  if (allowSelfRemoveMonetization) {
    tmp9 = deleting;
  }
  if (!tmp9) {
    tmp9 = archiving;
  }
  const obj4 = { children: null };
  obj2.disabled = tmp9;
  obj2.text = buttonText;
  obj1.children = closure_1_14(components_Button_Button.Button, obj2);
  items[2] = closure_1_14(timestampProducer, obj1);
  obj4.children = items;
  return value2(__initData, obj4);
}
function TabContent(selectedTab) {
  selectedTab = selectedTab.selectedTab;
  const tmp = closure_17();
  if (GuildRoleSubscriptionsTierScenes.DETAILS === selectedTab) {
    let obj = { style: tmp.tabContent, children: null };
    obj = { bottom: true, children: null };
    items = [
      closure_1_14(GuildRoleSubscriptionTierDetailsModal.GuildRoleSubscriptionTierDetailsTab, {}),
      closure_1_14(ArchiveOrDeleteTierSection, {}),
    ];
    obj.children = items;
    obj.children = value2(common_SafeAreaView.SafeAreaPaddingView, obj);
    return closure_1_14(React5, obj);
  } else if (GuildRoleSubscriptionsTierScenes.DESIGN === selectedTab) {
    obj = { style: tmp.tabContent, children: null };
    const obj1 = {
      bottom: true,
      children: closure_1_14(GuildRoleSubscriptionTierDesignModal.GuildRoleSubscriptionTierDesignTab, {}),
    };
    obj.children = closure_1_14(common_SafeAreaView.SafeAreaPaddingView, obj1);
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
const FetchState = fn(4193).FetchState;
const GuildRoleSubscriptionsTierScenes = fn(15205).GuildRoleSubscriptionsTierScenes;
const GuildSettingsSections = fn(1074).GuildSettingsSections;
const ContentDismissActionType = fn(1954).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: closure_14, Fragment: closure_15, jsxs: closure_16 } = jsxProd);
fn(4560);
let createStyles = {
  container: { flex: 1 },
  tabsContainer: null,
  tabsContainerWithDraft: null,
  actionButton: null,
  tabContent: null,
  actionHeader: null,
  actionDescription: null,
};
createStyles = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, padding: 16 };
createStyles.tabsContainer = createStyles;
createStyles.tabsContainerWithDraft = { paddingBottom: 0 };
createStyles.actionButton = { alignSelf: "stretch", margin: 16, marginTop: 0 };
createStyles.tabContent = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles.actionHeader = { marginTop: 24, paddingStart: 16 };
createStyles.actionDescription = { marginBottom: 16, marginLeft: 16 };
let closure_17 = createStyles.createStyles(createStyles);
let items = [, ,];
({ DETAILS: arr[0], DESIGN: arr[1], BENEFITS: arr[2] } = GuildRoleSubscriptionsTierScenes);
let closure_19 = items.reduce((acc, item, index) => {
  acc[item] = index;
  return acc;
}, {});
let closure_22 = fn(19).forwardRef((arg0, arg1) => {
  let Spacer = require;
  let tmp = dependencyMap;
  let obj = EditStateContextProvider;
  const editStateContext = obj.useEditStateContext();
  ({ guildId: require, groupListingId } = editStateContext);
  let obj1 = GuildRoleSubscriptionsHooks;
  const publishSubscriptionListing = obj1.usePublishSubscriptionListing();
  ({
    error,
    publishSubscriptionListing: importAll,
    clearError: dependencyMap,
    submitting,
  } = publishSubscriptionListing);
  const subscriptionListing = GuildRoleSubscriptionsHooks.useSubscriptionListing(editStateContext.editStateId);
  const roleSubscriptionSettingsDisabled =
    RoleSubscriptionSettingsDisabledContext.useRoleSubscriptionSettingsDisabled();
  const imperativeHandle = noop.useImperativeHandle(arg1, () => ({ dismissError }));
  let tmp7 = null;
  if (null != groupListingId) {
    tmp7 = null;
    if (null != subscriptionListing) {
      tmp7 = null;
      if (!subscriptionListing.published) {
        if (null != error) {
          obj = { children: null };
          items = [closure_1_14(native.Spacer, { size: 16 }), ,];
          obj = { children: error.getAnyErrorMessage() };
          items[1] = closure_1_14(ErrorBlockDefault, obj);
          Spacer = native.Spacer;
          tmp = closure_1_14(Spacer, { size: 16 });
          items[2] = tmp;
          obj.children = items;
          let tmp13 = value2(__initData, obj);
        } else {
          obj1 = { message: null, ctaMessage: null, onClick: null, submitting: null, disabled: null };
          const intl = util.intl;
          obj1.message = intl.string(util.t.V5mSpz);
          const intl2 = util.intl;
          obj1.ctaMessage = intl2.string(util.t.Lj6R5m);
          obj1.onClick = function onClick() {
            if (null != groupListingId) {
              if (null != subscriptionListing) {
                const obj = { guildId, groupListingId: tmp, listingId: tmp2.id };
                return importAll(obj);
              }
            }
          };
          obj1.submitting = submitting;
          obj1.disabled = roleSubscriptionSettingsDisabled;
          tmp13 = closure_1_14(ActionableNoticeDefault, obj1);
        }
      }
    }
  }
  return tmp7;
});
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/guild_role_subscriptions/native/guild_settings/GuildSettingsRoleSubscriptionTierEdit.tsx",
);

export default function GuildSettingsRoleSubscriptionTierEdit(guildId) {
  guildId = guildId.guildId;
  const groupListingId = guildId.groupListingId;
  const onBeforeDispatchNewListing = guildId.onBeforeDispatchNewListing;
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
  let obj = navigation;
  let tmp3 = _slicedToArray(navigation.useState(guildId.initialEditStateId), 2);
  const editStateId = tmp3[0];
  _slicedToArray = tmp3[1];
  let obj1 = guildId(editStateId[11]);
  navigation = obj1.useNavigation();
  let obj2 = guildId(editStateId[24]);
  const subscriptionListing = obj2.useSubscriptionListing(editStateId);
  let obj3 = onBeforeDispatchNewListing(editStateId[29]);
  const first1 = _slicedToArray(obj3.useName(editStateId), 1)[0];
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
  hasChanges = tmp9Result.useHasChanges(editStateId);
  const createOrUpdateListingFromEditState = onBeforeDispatchNewListing(
    editStateId[29],
  ).useCreateOrUpdateListingFromEditState();
  loading = createOrUpdateListingFromEditState.loading;
  handleCreateOrUpdateFromEditState = createOrUpdateListingFromEditState.handleCreateOrUpdateFromEditState;
  error = createOrUpdateListingFromEditState.error;
  items = [
    guildId,
    handleCreateOrUpdateFromEditState,
    editStateId,
    groupListingId,
    onBeforeDispatchNewListing,
    removeEditStateId,
  ];
  callback = obj.useCallback(
    () =>
      handleCreateOrUpdateFromEditState({
        guildId,
        editStateId,
        groupListingId,
        onBeforeDispatchNewListing,
        onAfterDispatchNewListing(id) {
          closure_1_4(id.id);
          removeEditStateId(editStateId);
        },
      }),
    items,
  );
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
  const tmp9Result1 = onBeforeDispatchNewListing(editStateId[29]);
  [tmp17, c14] = _slicedToArray(
    loading.useRoleTierEditStore((currentScene) => {
      let DETAILS = currentScene.currentScene;
      if (DETAILS == null) {
        DETAILS = handleCreateOrUpdateFromEditState.DETAILS;
      }
      items = [DETAILS, currentScene.setScene];
      return items;
    }),
    2,
  );
  const items2 = [navigation, hasChanges, first1, loading, callback];
  const layoutEffect1 = obj.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: loading
        ? () => _undefined(guildId(editStateId[31]).HeaderSubmittingIndicator, {})
        : () => {
            const obj = { text: null, onPress: null, disabled: null };
            const intl = guildId(first[28]).intl;
            obj.text = intl.string(guildId(first[28]).t["R3BPH+"]);
            obj.onPress = onPress;
            obj.disabled = !hasChanges;
            return c14(guildId(first[32]).HeaderActionButton, obj);
          },
      headerTitle() {
        const obj = { title, subtitle: null };
        const intl = guildId(first[28]).intl;
        obj.subtitle = intl.string(guildId(first[28]).t.t94EHg);
        return c14(guildId(first[31]).NavigatorHeader, obj);
      },
    });
  }, items2);
  const items3 = [navigation, editStateId, guildId];
  const layoutEffect2 = obj.useLayoutEffect(() => {
    if (null == first) {
      let arr = navigation;
      const routes = navigation.getState().routes;
      let name;
      const subscriptionGroupListingsForGuildFetchState =
        GuildRoleSubscriptionsStore.getSubscriptionGroupListingsForGuildFetchState(guildId);
      if (routes[routes.length - 1] != null) {
        name = tmp.name;
      }
      if (!tmp8) {
        arr = arr.pop();
      }
      tmp8 =
        name !== GuildSettingsSections.ROLE_SUBSCRIPTIONS_TIER_EDIT ||
        subscriptionGroupListingsForGuildFetchState === FetchState.FETCHING;
    }
  }, items3);
  guildId(editStateId[33]);
  obj = {
    pageWidth: 0,
    defaultIndex: closure_19[tmp17],
    onSetActiveIndex(arg0) {
      if (null != items[arg0]) {
        _undefined(tmp);
        const current = ref.current;
        if (current != null) {
          current.dismissError();
        }
      }
    },
    items: null,
  };
  let intl = tmp5(tmp6[28]).intl;
  const items4 = [intl.string(guildId(editStateId[28]).t.f7rGug), ,];
  const intl2 = tmp5(tmp6[28]).intl;
  items4[1] = intl2.string(guildId(editStateId[28]).t.YCpDtS);
  const intl3 = tmp5(tmp6[28]).intl;
  items4[2] = intl3.string(guildId(editStateId[28]).t.MpDNxN);
  obj.items = items4.map((id) => ({ id, label: id, page: null }));
  if (null == editStateId) {
    return null;
  } else {
    if (undefined === subscriptionListing) {
      const items5 = [tmp5(tmp6[34]).DismissibleContent.GUILD_ROLE_SUBSCRIPTION_TIER_TEMPLATES];
      let items6 = items5;
    } else {
      items6 = [];
    }
    obj = { guildId, editStateId, groupListingId, children: null };
    obj1 = { guildId, children: null };
    obj2 = { style: tmp.container, children: null };
    obj3 = {
      contentTypes: items6,
      children(markAsDismissed) {
        markAsDismissed = markAsDismissed.markAsDismissed;
        let tmp3 = null;
        if (
          markAsDismissed.visibleContent ===
          dismissible_content.DismissibleContent.GUILD_ROLE_SUBSCRIPTION_TIER_TEMPLATES
        ) {
          const obj = {
            markAsDismissed() {
              return markAsDismissed(callback.UNKNOWN);
            },
            actionSheetKey: "TierTemplateSelected",
            importer: GuildRoleSubscriptionsTierTemplateSelectedActionSheetImporter,
          };
          tmp3 = closure_2_14(DismissibleActionSheet.DismissibleActionSheet, obj);
        }
        return tmp3;
      },
    };
    const items7 = [c14(groupListingId(tmp6[37]), obj3), ,];
    const items8 = [tmp.tabsContainer];
    let prop = null;
    if (!flag) {
      prop = tmp.tabsContainerWithDraft;
    }
    const obj4 = { style: null, children: null };
    items8[1] = prop;
    obj4.style = items8;
    const obj5 = { state: tmp21 };
    const items9 = [c14(tmp5(tmp6[39]).SegmentedControl, obj5)];
    const obj6 = { ref };
    items9[1] = c14(closure_22, obj6);
    obj4.children = items9;
    items7[1] = closure_16(first1, obj4);
    const obj7 = { selectedTab: tmp17 };
    items7[2] = c14(TabContent, obj7);
    obj2.children = items7;
    obj1.children = closure_16(first1, obj2);
    obj.children = c14(tmp5(tmp6[25]).RoleSubscriptionSettingsDisabledContextProvider, obj1);
    return c14(tmp5(tmp6[12]).EditStateContextProvider, obj);
  }
  const tmp2Result = _slicedToArray(
    loading.useRoleTierEditStore((currentScene) => {
      let DETAILS = currentScene.currentScene;
      if (DETAILS == null) {
        DETAILS = handleCreateOrUpdateFromEditState.DETAILS;
      }
      items = [DETAILS, currentScene.setScene];
      return items;
    }),
    2,
  );
}
