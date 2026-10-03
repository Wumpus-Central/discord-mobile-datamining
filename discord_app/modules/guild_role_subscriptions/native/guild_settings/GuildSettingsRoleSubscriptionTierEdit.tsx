// discord_app/modules/guild_role_subscriptions/native/guild_settings/GuildSettingsRoleSubscriptionTierEdit.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
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
import GuildRoleSubscriptionTierBenefitsModal from "../components/GuildRoleSubscriptionTierBenefitsModal.tsx";
import EditStateContextProvider from "../../edit_state/EditStateContextProvider.tsx";
import GuildRoleSubscriptionTierDesignModal from "../components/GuildRoleSubscriptionTierDesignModal.tsx";
import GuildRoleSubscriptionTierDetailsModal from "../components/GuildRoleSubscriptionTierDetailsModal.tsx";
import _modDef17948 from "../../../../../_runtime/metro/17948__.js";
import ActionableNoticeDefault from "../components/ActionableNotice.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import GuildRoleSubscriptionsStore from "../../GuildRoleSubscriptionsStore.tsx";
import RoleTierEditStore from "../RoleTierEditStore.tsx";

require = fn;
get_ActivityIndicator = fn(17);
({ View: metroRequire, ScrollView: closure_7 } = get_ActivityIndicator);
const FetchState = fn(4502).FetchState;
const GuildRoleSubscriptionsTierScenes = fn(15019).GuildRoleSubscriptionsTierScenes;
const GuildSettingsSections = fn(1085).GuildSettingsSections;
const ContentDismissActionType = fn(2048).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: closure_14, Fragment: closure_15, jsxs: closure_16 } = jsxProd);
const createStyles = fn(4890);
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
let ReactCompilerGating = fn(558);
let closure_20 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(18);
  const tmp4 = closure_17();
  const navigation = useNavigation.useNavigation();
  const editStateContext = EditStateContextProvider.useEditStateContext();
  const guildId = editStateContext.guildId;
  ({ groupListingId, editStateId } = editStateContext);
  ({ buttonText, descriptionText, handleArchiveOrDelete, deleting, archiving } = useArchiveOrDeleteDefault(guildId, groupListingId, editStateId, navigation));
  const tmp8 = useArchiveOrDeleteDefault(guildId, groupListingId, editStateId, navigation);
  const allowSelfRemoveMonetization = CreatorMonetizationRestrictionsHooks.useShouldRestrictUpdatingCreatorMonetizationSettings(guildId).allowSelfRemoveMonetization;
  if (cResult[0] === buttonText) {
    if (cResult[1] === tmp4.actionHeader) {
      let tmp9 = cResult[2];
    }
    if (cResult[3] === descriptionText) {
      if (cResult[4] === tmp4.actionDescription) {
        let tmp11 = cResult[5];
      }
      const _Symbol = Symbol;
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        const obj5 = { size: native.Icon.Sizes.SMALL, disableColor: true, source: _modDef17948 };
        const tmp17 = state(native.Icon, obj5);
        cResult[6] = tmp17;
        let tmp15 = tmp17;
      } else {
        tmp15 = cResult[6];
      }
      let tmp18 = !allowSelfRemoveMonetization;
      if (allowSelfRemoveMonetization) {
        tmp18 = deleting;
      }
      if (!tmp18) {
        tmp18 = archiving;
      }
      if (cResult[7] === buttonText) {
        if (cResult[8] === handleArchiveOrDelete) {
          if (cResult[9] === tmp18) {
            let tmp19 = cResult[10];
          }
          if (cResult[11] === tmp4.actionButton) {
            if (cResult[12] === tmp19) {
              let tmp22 = cResult[13];
            }
            if (cResult[14] === tmp9) {
              if (cResult[15] === tmp11) {
                if (cResult[16] === tmp22) {
                  let tmp26 = cResult[17];
                }
                return tmp26;
              }
            }
            const obj6 = { children: null };
            items = [tmp9, tmp11, tmp22];
            obj6.children = items;
            const tmp29 = value2(closure_1_15, obj6);
            cResult[14] = tmp9;
            cResult[15] = tmp11;
            cResult[16] = tmp22;
            cResult[17] = tmp29;
            tmp26 = tmp29;
          }
          const obj7 = { style: tmp4.actionButton, children: tmp19 };
          const tmp25 = state(timestampProducer, obj7);
          cResult[11] = tmp4.actionButton;
          cResult[12] = tmp19;
          cResult[13] = tmp25;
          tmp22 = tmp25;
        }
      }
      const obj8 = { variant: "destructive", grow: true, icon: tmp15, onPress: handleArchiveOrDelete, disabled: tmp18, text: buttonText };
      const tmp21 = state(components_Button_Button.Button, obj8);
      cResult[7] = buttonText;
      cResult[8] = handleArchiveOrDelete;
      cResult[9] = tmp18;
      cResult[10] = tmp21;
      tmp19 = tmp21;
    }
    const obj9 = { style: tmp4.actionDescription, variant: "text-sm/medium", color: "text-default", children: descriptionText };
    const tmp13 = state(Text_Text.Text, obj9);
    cResult[3] = descriptionText;
    cResult[4] = tmp4.actionDescription;
    cResult[5] = tmp13;
    tmp11 = tmp13;
  }
  const tmp10 = state(FormHeaderDefault, { style: tmp4.actionHeader, children: buttonText });
  cResult[0] = buttonText;
  cResult[1] = tmp4.actionHeader;
  cResult[2] = tmp10;
  tmp9 = tmp10;
  const obj10 = { style: tmp4.actionHeader, children: buttonText };
}) : (() => {
  const tmp = closure_17();
  const navigation = useNavigation.useNavigation();
  const editStateContext = EditStateContextProvider.useEditStateContext();
  const guildId = editStateContext.guildId;
  ({ groupListingId, editStateId } = editStateContext);
  ({ buttonText, descriptionText, handleArchiveOrDelete, deleting, archiving } = useArchiveOrDeleteDefault(guildId, groupListingId, editStateId, navigation));
  const tmp4 = useArchiveOrDeleteDefault(guildId, groupListingId, editStateId, navigation);
  const allowSelfRemoveMonetization = CreatorMonetizationRestrictionsHooks.useShouldRestrictUpdatingCreatorMonetizationSettings(guildId).allowSelfRemoveMonetization;
  items = [state(FormHeaderDefault, { style: tmp.actionHeader, children: buttonText }), state(Text_Text.Text, { style: tmp.actionDescription, variant: "text-sm/medium", color: "text-default", children: descriptionText }), ];
  const obj6 = { style: tmp.actionButton, children: null };
  const obj7 = { variant: "destructive", grow: true, icon: null, onPress: null, disabled: null, text: null };
  const obj4 = { style: tmp.actionHeader, children: buttonText };
  const obj5 = { style: tmp.actionDescription, variant: "text-sm/medium", color: "text-default", children: descriptionText };
  obj7.icon = state(native.Icon, { size: native.Icon.Sizes.SMALL, disableColor: true, source: _modDef17948 });
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
  obj6.children = state(components_Button_Button.Button, obj7);
  items[2] = state(timestampProducer, obj6);
  obj9.children = items;
  return value2(closure_1_15, obj9);
});
ReactCompilerGating = fn(558);
let closure_21 = ReactCompilerGating.isReactCompilerEnabled() ? ((selectedTab) => {
  const cResult = c.c(7);
  selectedTab = selectedTab.selectedTab;
  const tmp4 = closure_17();
  if (GuildRoleSubscriptionsTierScenes.DETAILS === selectedTab) {
    const _Symbol3 = Symbol;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const obj2 = { bottom: true, children: null };
      items = [state(GuildRoleSubscriptionTierDetailsModal.GuildRoleSubscriptionTierDetailsTab, {}), state(closure_20, {})];
      obj2.children = items;
      const tmp28 = value2(common_SafeAreaView.SafeAreaPaddingView, obj2);
      cResult[0] = tmp28;
      let first = tmp28;
    } else {
      first = cResult[0];
    }
    if (cResult[1] !== tmp4.tabContent) {
      const obj3 = { style: tmp4.tabContent, children: first };
      const tmp32 = state(React5, obj3);
      cResult[1] = tmp4.tabContent;
      cResult[2] = tmp32;
      let tmp29 = tmp32;
    } else {
      tmp29 = cResult[2];
    }
    return tmp29;
  } else if (GuildRoleSubscriptionsTierScenes.DESIGN === selectedTab) {
    const _Symbol2 = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const obj4 = { bottom: true, children: state(GuildRoleSubscriptionTierDesignModal.GuildRoleSubscriptionTierDesignTab, {}) };
      const tmp18 = state(common_SafeAreaView.SafeAreaPaddingView, obj4);
      cResult[3] = tmp18;
      let tmp16 = tmp18;
    } else {
      tmp16 = cResult[3];
    }
    if (cResult[4] !== tmp4.tabContent) {
      const obj5 = { style: tmp4.tabContent, children: tmp16 };
      const tmp22 = state(React5, obj5);
      cResult[4] = tmp4.tabContent;
      cResult[5] = tmp22;
      let tmp19 = tmp22;
    } else {
      tmp19 = cResult[5];
    }
    return tmp19;
  } else if (GuildRoleSubscriptionsTierScenes.BENEFITS === selectedTab) {
    const _Symbol = Symbol;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp14 = state(GuildRoleSubscriptionTierBenefitsModal.GuildRoleSubscriptionTierBenefitsTab, {});
      cResult[6] = tmp14;
      let tmp12 = tmp14;
    } else {
      tmp12 = cResult[6];
    }
    return tmp12;
  } else {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const error = new Error("Unsupported scene: " + selectedTab);
    throw error;
  }
}) : ((selectedTab) => {
  selectedTab = selectedTab.selectedTab;
  const tmp = closure_17();
  if (GuildRoleSubscriptionsTierScenes.DETAILS === selectedTab) {
    const obj2 = { style: tmp.tabContent, children: null };
    const obj3 = { bottom: true, children: null };
    items = [state(GuildRoleSubscriptionTierDetailsModal.GuildRoleSubscriptionTierDetailsTab, {}), state(closure_20, {})];
    obj3.children = items;
    obj2.children = value2(common_SafeAreaView.SafeAreaPaddingView, obj3);
    return state(React5, obj2);
  } else if (GuildRoleSubscriptionsTierScenes.DESIGN === selectedTab) {
    const obj = { style: tmp.tabContent, children: null };
    const obj4 = { bottom: true, children: state(GuildRoleSubscriptionTierDesignModal.GuildRoleSubscriptionTierDesignTab, {}) };
    obj.children = state(common_SafeAreaView.SafeAreaPaddingView, obj4);
    return state(React5, obj);
  } else if (GuildRoleSubscriptionsTierScenes.BENEFITS === selectedTab) {
    return state(GuildRoleSubscriptionTierBenefitsModal.GuildRoleSubscriptionTierBenefitsTab, {});
  } else {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const error = new Error("Unsupported scene: " + selectedTab);
    throw error;
  }
});
ReactCompilerGating = fn(558);
let closure_22 = fn(19).forwardRef(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  const cResult = c.c(21);
  const editStateContext = EditStateContextProvider.useEditStateContext();
  const guildId = editStateContext.guildId;
  const groupListingId = editStateContext.groupListingId;
  const publishSubscriptionListing1 = GuildRoleSubscriptionsHooks.usePublishSubscriptionListing();
  ({ error, submitting, publishSubscriptionListing } = publishSubscriptionListing1);
  const clearError = publishSubscriptionListing1.clearError;
  const subscriptionListing = GuildRoleSubscriptionsHooks.useSubscriptionListing(editStateContext.editStateId);
  const roleSubscriptionSettingsDisabled = RoleSubscriptionSettingsDisabledContext.useRoleSubscriptionSettingsDisabled();
  if (cResult[0] !== clearError) {
    const fn = function o() {
      return { dismissError: clearError };
    };
    cResult[0] = clearError;
    cResult[1] = fn;
    let tmp8 = fn;
  } else {
    tmp8 = cResult[1];
  }
  const imperativeHandle = noop.useImperativeHandle(arg1, tmp8);
  if (null != groupListingId) {
    if (null != subscriptionListing) {
      if (!subscriptionListing.published) {
        if (cResult[2] === groupListingId) {
          if (cResult[3] === guildId) {
            if (cResult[4] === subscriptionListing) {
              if (cResult[5] === publishSubscriptionListing) {
                let tmp10 = cResult[6];
              }
              if (null != error) {
                const _Symbol = Symbol;
                if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
                  const tmp22 = state(native.Spacer, { size: 16 });
                  cResult[7] = tmp22;
                  let tmp20 = tmp22;
                } else {
                  tmp20 = cResult[7];
                }
                if (cResult[8] !== error) {
                  const anyErrorMessage = error.getAnyErrorMessage();
                  cResult[8] = error;
                  cResult[9] = anyErrorMessage;
                  let tmp23 = anyErrorMessage;
                } else {
                  tmp23 = cResult[9];
                }
                if (cResult[10] !== tmp23) {
                  const obj6 = { children: tmp23 };
                  const tmp28 = state(ErrorBlockDefault, obj6);
                  cResult[10] = tmp23;
                  cResult[11] = tmp28;
                  let tmp25 = tmp28;
                } else {
                  tmp25 = cResult[11];
                }
                const _Symbol2 = Symbol;
                if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
                  const tmp31 = state(native.Spacer, { size: 16 });
                  cResult[12] = tmp31;
                  let tmp29 = tmp31;
                } else {
                  tmp29 = cResult[12];
                }
                if (cResult[13] !== tmp25) {
                  const obj7 = { children: null };
                  items = [tmp20, tmp25, tmp29];
                  obj7.children = items;
                  const tmp35 = value2(closure_1_15, obj7);
                  cResult[13] = tmp25;
                  cResult[14] = tmp35;
                }
              } else {
                const _Symbol3 = Symbol;
                if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
                  const intl = util.intl;
                  const stringResult = intl.string(util.t.V5mSpz);
                  const intl2 = util.intl;
                  const stringResult1 = intl2.string(util.t.Lj6R5m);
                  cResult[15] = stringResult;
                  cResult[16] = stringResult1;
                  let tmp12 = stringResult1;
                  let tmp11 = stringResult;
                } else {
                  tmp11 = cResult[15];
                  tmp12 = cResult[16];
                }
                if (cResult[17] === tmp10) {
                  if (cResult[18] === roleSubscriptionSettingsDisabled) {
                    if (cResult[19] === submitting) {
                      let tmp15 = cResult[20];
                    }
                    return tmp15;
                  }
                }
                const obj8 = { message: tmp11, ctaMessage: tmp12, onClick: tmp10, submitting, disabled: roleSubscriptionSettingsDisabled };
                const tmp18 = state(ActionableNoticeDefault, obj8);
                cResult[17] = tmp10;
                cResult[18] = roleSubscriptionSettingsDisabled;
                cResult[19] = submitting;
                cResult[20] = tmp18;
                tmp15 = tmp18;
              }
            }
          }
        }
        const fn2 = function l() {
          if (null != groupListingId) {
            if (null != subscriptionListing) {
              const obj = { guildId, groupListingId: tmp, listingId: tmp2.id };
              return publishSubscriptionListing(obj);
            }
          }
        };
        cResult[2] = groupListingId;
        cResult[3] = guildId;
        cResult[4] = subscriptionListing;
        cResult[5] = publishSubscriptionListing;
        cResult[6] = fn2;
        tmp10 = fn2;
      }
    }
  }
  return null;
}) : ((arg0, arg1) => {
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
          items = [state(native.Spacer, { size: 16 }), , ];
          const obj6 = { children: error.getAnyErrorMessage() };
          items[1] = state(ErrorBlockDefault, obj6);
          Spacer = native.Spacer;
          tmp = state(Spacer, { size: 16 });
          items[2] = tmp;
          obj5.children = items;
          let tmp13 = value2(closure_1_15, obj5);
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
          tmp13 = state(ActionableNoticeDefault, obj7);
        }
      }
    }
  }
  return tmp7;
}));
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
    return guildId(first[38])(first[37], first.paths);
  }
  const tmp = closure_17();
  [editStateId, _slicedToArray] = navigation.useState(guildId.initialEditStateId);
  navigation = guildId(editStateId[13]).useNavigation();
  let obj2 = guildId(editStateId[13]);
  const tmp2 = _slicedToArray;
  const subscriptionListing = guildId(editStateId[26]).useSubscriptionListing(editStateId);
  const obj3 = guildId(editStateId[26]);
  const first1 = _slicedToArray(onBeforeDispatchNewListing(editStateId[31]).useName(editStateId), 1)[0];
  let flag;
  if (subscriptionListing != null) {
    flag = subscriptionListing.published;
  }
  if (flag == null) {
    flag = false;
  }
  const obj4 = onBeforeDispatchNewListing(editStateId[31]);
  removeEditStateId = onBeforeDispatchNewListing(editStateId[31]).useEditStateIds(groupListingId, guildId).removeEditStateId;
  ref = obj.useRef(null);
  const tmp9Result = onBeforeDispatchNewListing(editStateId[31]);
  hasChanges = onBeforeDispatchNewListing(editStateId[31]).useHasChanges(editStateId);
  const tmp9Result3 = onBeforeDispatchNewListing(editStateId[31]);
  const createOrUpdateListingFromEditState = onBeforeDispatchNewListing(editStateId[31]).useCreateOrUpdateListingFromEditState();
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
  const tmp9Result4 = onBeforeDispatchNewListing(editStateId[31]);
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
      headerRight: loading ? (() => _undefined(guildId(editStateId[33]).HeaderSubmittingIndicator, {})) : (() => {
        const obj = { text: null, onPress: null, disabled: null };
        const intl = guildId(first[29]).intl;
        obj.text = intl.string(guildId(first[29]).t["R3BPH+"]);
        obj.onPress = onPress;
        obj.disabled = !hasChanges;
        return c14(guildId(first[34]).HeaderActionButton, obj);
      }),
      headerTitle() {
        const obj = { title, subtitle: null };
        const intl = guildId(first[29]).intl;
        obj.subtitle = intl.string(guildId(first[29]).t.t94EHg);
        return c14(guildId(first[33]).NavigatorHeader, obj);
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
  guildId(editStateId[35]);
  let intl = tmp5(tmp6[29]).intl;
  const items4 = [intl.string(guildId(editStateId[29]).t.f7rGug), , ];
  const intl2 = tmp5(tmp6[29]).intl;
  items4[1] = intl2.string(guildId(editStateId[29]).t.YCpDtS);
  const intl3 = tmp5(tmp6[29]).intl;
  items4[2] = intl3.string(guildId(editStateId[29]).t.MpDNxN);
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
      const items5 = [tmp5(tmp6[36]).DismissibleContent.GUILD_ROLE_SUBSCRIPTION_TIER_TEMPLATES];
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
            tmp3 = state(DismissibleActionSheet.DismissibleActionSheet, obj);
          }
          return tmp3;
        }
    };
    const items7 = [c14(groupListingId(tmp6[39]), obj9), , ];
    const items8 = [tmp.tabsContainer, ];
    let prop = null;
    if (!flag) {
      prop = tmp.tabsContainerWithDraft;
    }
    const obj10 = { style: null, children: null };
    items8[1] = prop;
    obj10.style = items8;
    const obj11 = { state: tmp21 };
    const items9 = [c14(tmp5(tmp6[41]).SegmentedControl, obj11), ];
    const obj12 = { ref };
    items9[1] = c14(closure_22, obj12);
    obj10.children = items9;
    items7[1] = closure_16(first1, obj10);
    const obj13 = { selectedTab: tmp17 };
    items7[2] = c14(closure_21, obj13);
    obj8.children = items7;
    obj7.children = closure_16(first1, obj8);
    obj6.children = c14(tmp5(tmp6[27]).RoleSubscriptionSettingsDisabledContextProvider, obj7);
    return c14(tmp5(tmp6[14]).EditStateContextProvider, obj6);
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