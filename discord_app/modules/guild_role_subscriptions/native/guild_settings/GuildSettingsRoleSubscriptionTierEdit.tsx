// === Module 18015: GuildSettingsRoleSubscriptionTierEdit ===

// Module 18015 (GuildSettingsRoleSubscriptionTierEdit)
import react2 from "react" /* 19 */;
import react3 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import intl4 from "intl" /* 1126 */;
import native from "native" /* 1188 */;
import useNavigation from "useNavigation" /* 1490 */;
import dismissible_content from "dismissible_content" /* 2036 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 2048 */;
import GuildRoleSubscriptionsStore2 from "GuildRoleSubscriptionsStore" /* 4508 */;
import ToastUtils from "ToastUtils" /* 4573 */;
import Text_Text from "Text/Text" /* 4892 */;
import components_Button_Button from "components/Button/Button" /* 5601 */;
import common_SafeAreaView from "common/SafeAreaView" /* 6626 */;
import CreatorMonetizationRestrictionsHooks from "CreatorMonetizationRestrictionsHooks" /* 6766 */;
import FormHeaderDefault from "FormHeader" /* 9490 */;
import DismissibleActionSheet from "DismissibleActionSheet" /* 10368 */;
import ErrorBlockDefault from "ErrorBlock" /* 11866 */;
import GuildRoleSubscriptionsConstants from "GuildRoleSubscriptionsConstants" /* 15038 */;
import GuildRoleSubscriptionsHooks from "GuildRoleSubscriptionsHooks" /* 15045 */;
import RoleSubscriptionSettingsDisabledContext from "RoleSubscriptionSettingsDisabledContext" /* 17967 */;
import useArchiveOrDeleteDefault from "useArchiveOrDelete" /* 17978 */;
import GuildRoleSubscriptionTierBenefitsModal from "GuildRoleSubscriptionTierBenefitsModal" /* 17984 */;
import EditStateContextProvider2 from "EditStateContextProvider" /* 17990 */;
import GuildRoleSubscriptionTierDesignModal from "GuildRoleSubscriptionTierDesignModal" /* 18008 */;
import GuildRoleSubscriptionTierDetailsModal from "GuildRoleSubscriptionTierDetailsModal" /* 18010 */;
import AssetRegistryDefault from "AssetRegistry" /* 18016 */;
import ActionableNoticeDefault from "ActionableNotice" /* 18017 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_native from "react-native" /* 17 */;
import RoleTierEditStore from "RoleTierEditStore" /* 17972 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const react = react2;
const GuildRoleSubscriptionsStore = GuildRoleSubscriptionsStore2;
let navigation;

let closure_14;
let closure_15;
let closure_16;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let _slicedToArray = _slicedToArray_mod;
const forwardRef = react2.forwardRef;
({ View: metroRequire, ScrollView: metroImportDefault } = react_native);
const FetchState = GuildRoleSubscriptionsStore2.FetchState;
const GuildRoleSubscriptionsTierScenes = GuildRoleSubscriptionsConstants.GuildRoleSubscriptionsTierScenes;
const GuildSettingsSections = Constants.GuildSettingsSections;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
({ jsx: closure_14, Fragment: closure_15, jsxs: closure_16 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { flex: 1 }, tabsContainer: obj2, tabsContainerWithDraft: { paddingBottom: 0 }, actionButton: { alignSelf: "stretch", margin: 16, marginTop: 0 }, tabContent: obj3, actionHeader: { marginTop: 24, paddingStart: 16 }, actionDescription: { marginBottom: 16, marginLeft: 16 } };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, padding: 16 };
createStyles = createStyles.createStyles;
obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
let closure_17 = createStyles(obj);
let items = [, , ];
({ DETAILS: arr[0], DESIGN: arr[1], BENEFITS: arr[2] } = GuildRoleSubscriptionsTierScenes);
let closure_19 = items.reduce((acc, item, index) => {
  acc[item] = index;
  return acc;
}, {});
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_20 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let archiving;
  let buttonText;
  let deleting;
  let descriptionText;
  let editStateId;
  let groupListingId;
  let handleArchiveOrDelete;
  const obj = react3;
  const cResult = obj.c(18);
  const tmp4 = closure_17();
  const obj2 = useNavigation;
  navigation = obj2.useNavigation();
  const obj3 = EditStateContextProvider2;
  const editStateContext = obj3.useEditStateContext();
  const guildId = editStateContext.guildId;
  ({ groupListingId, editStateId } = editStateContext);
  ({ buttonText, descriptionText, handleArchiveOrDelete, deleting, archiving } = useArchiveOrDeleteDefault(guildId, groupListingId, editStateId, navigation));
  useArchiveOrDeleteDefault(guildId, groupListingId, editStateId, navigation);
  const obj4 = CreatorMonetizationRestrictionsHooks;
  const allowSelfRemoveMonetization = obj4.useShouldRestrictUpdatingCreatorMonetizationSettings(guildId).allowSelfRemoveMonetization;
  if (cResult[0] === buttonText) {
    let tmp9;
    if (cResult[1] === tmp4.actionHeader) {
      tmp9 = cResult[2];
    }
    if (cResult[3] === descriptionText) {
      let tmp11;
      let tmp15;
      if (cResult[4] === tmp4.actionDescription) {
        tmp11 = cResult[5];
      }
      const _Symbol = Symbol;
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        const obj5 = { size: native.Icon.Sizes.SMALL, disableColor: true, source: AssetRegistryDefault };
        const Icon = native.Icon;
        const tmp17 = authStore2(Icon, obj5);
        cResult[6] = tmp17;
        tmp15 = tmp17;
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
          let tmp19;
          if (cResult[9] === tmp18) {
            tmp19 = cResult[10];
          }
          if (cResult[11] === tmp4.actionButton) {
            let tmp22;
            if (cResult[12] === tmp19) {
              tmp22 = cResult[13];
            }
            if (cResult[14] === tmp9) {
              if (cResult[15] === tmp11) {
                let tmp26;
                if (cResult[16] === tmp22) {
                  tmp26 = cResult[17];
                }
                return tmp26;
              }
            }
            const obj6 = { children: items };
            items = [tmp9, tmp11, tmp22];
            const tmp29 = authStore3(closure_15, obj6);
            cResult[14] = tmp9;
            cResult[15] = tmp11;
            cResult[16] = tmp22;
            cResult[17] = tmp29;
            tmp26 = tmp29;
          }
          const obj7 = { style: tmp4.actionButton, children: tmp19 };
          const tmp25 = authStore2(metroRequire, obj7);
          cResult[11] = tmp4.actionButton;
          cResult[12] = tmp19;
          cResult[13] = tmp25;
          tmp22 = tmp25;
        }
      }
      const obj8 = { variant: "destructive", grow: true, icon: tmp15, onPress: handleArchiveOrDelete, disabled: tmp18, text: buttonText };
      const tmp21 = authStore2(components_Button_Button.Button, obj8);
      cResult[7] = buttonText;
      cResult[8] = handleArchiveOrDelete;
      cResult[9] = tmp18;
      cResult[10] = tmp21;
      tmp19 = tmp21;
    }
    const obj9 = { style: tmp4.actionDescription, variant: "text-sm/medium", color: "text-default", children: descriptionText };
    const tmp13 = authStore2(Text_Text.Text, obj9);
    cResult[3] = descriptionText;
    cResult[4] = tmp4.actionDescription;
    cResult[5] = tmp13;
    tmp11 = tmp13;
  }
  const obj10 = { style: tmp4.actionHeader, children: buttonText };
  const tmp10 = authStore2(FormHeaderDefault, obj10);
  cResult[0] = buttonText;
  cResult[1] = tmp4.actionHeader;
  cResult[2] = tmp10;
  tmp9 = tmp10;
}) : (() => {
  let Button;
  let Icon;
  let archiving;
  let buttonText;
  let deleting;
  let descriptionText;
  let editStateId;
  let groupListingId;
  let handleArchiveOrDelete;
  let obj7;
  let obj8;
  let tmp9;
  const tmp = closure_17();
  const obj = useNavigation;
  navigation = obj.useNavigation();
  const obj2 = EditStateContextProvider2;
  const editStateContext = obj2.useEditStateContext();
  const guildId = editStateContext.guildId;
  ({ groupListingId, editStateId } = editStateContext);
  ({ buttonText, descriptionText, handleArchiveOrDelete, deleting, archiving } = useArchiveOrDeleteDefault(guildId, groupListingId, editStateId, navigation));
  useArchiveOrDeleteDefault(guildId, groupListingId, editStateId, navigation);
  const obj3 = CreatorMonetizationRestrictionsHooks;
  const allowSelfRemoveMonetization = obj3.useShouldRestrictUpdatingCreatorMonetizationSettings(guildId).allowSelfRemoveMonetization;
  items = [, , ];
  const obj4 = { style: tmp.actionHeader, children: buttonText };
  items[0] = authStore2(FormHeaderDefault, obj4);
  const obj5 = { style: tmp.actionDescription, variant: "text-sm/medium", color: "text-default", children: descriptionText };
  items[1] = authStore2(Text_Text.Text, obj5);
  const obj6 = { style: tmp.actionButton, children: authStore2(Button, obj7) };
  obj7 = { variant: "destructive", grow: true, icon: authStore2(Icon, obj8), onPress: handleArchiveOrDelete, disabled: tmp9, text: buttonText };
  Button = components_Button_Button.Button;
  obj8 = { size: native.Icon.Sizes.SMALL, disableColor: true, source: AssetRegistryDefault };
  Icon = native.Icon;
  tmp9 = !allowSelfRemoveMonetization;
  if (allowSelfRemoveMonetization) {
    tmp9 = deleting;
  }
  if (!tmp9) {
    tmp9 = archiving;
  }
  const obj9 = { children: items };
  items[2] = authStore2(metroRequire, obj6);
  return authStore3(closure_15, obj9);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_21 = ReactCompilerGating.isReactCompilerEnabled() ? (function(selectedTab) {
  const obj = react3;
  const cResult = obj.c(7);
  selectedTab = selectedTab.selectedTab;
  const tmp4 = closure_17();
  if (GuildRoleSubscriptionsTierScenes.DETAILS === selectedTab) {
    let first;
    let tmp27;
    const _Symbol3 = Symbol;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const obj2 = { bottom: true, children: items };
      const SafeAreaPaddingView2 = common_SafeAreaView.SafeAreaPaddingView;
      items = [authStore2(GuildRoleSubscriptionTierDetailsModal.GuildRoleSubscriptionTierDetailsTab, {}), authStore2(closure_20, {})];
      const tmp26 = authStore3(SafeAreaPaddingView2, obj2);
      cResult[0] = tmp26;
      first = tmp26;
    } else {
      first = cResult[0];
    }
    if (cResult[1] !== tmp4.tabContent) {
      const obj3 = { style: tmp4.tabContent, children: first };
      const tmp30 = authStore2(metroImportDefault, obj3);
      cResult[1] = tmp4.tabContent;
      cResult[2] = tmp30;
      tmp27 = tmp30;
    } else {
      tmp27 = cResult[2];
    }
    return tmp27;
  } else if (GuildRoleSubscriptionsTierScenes.DESIGN === selectedTab) {
    let tmp14;
    let tmp17;
    const _Symbol2 = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const obj4 = { bottom: true, children: authStore2(GuildRoleSubscriptionTierDesignModal.GuildRoleSubscriptionTierDesignTab, {}) };
      const SafeAreaPaddingView = common_SafeAreaView.SafeAreaPaddingView;
      const tmp16 = authStore2(SafeAreaPaddingView, obj4);
      cResult[3] = tmp16;
      tmp14 = tmp16;
    } else {
      tmp14 = cResult[3];
    }
    if (cResult[4] !== tmp4.tabContent) {
      const obj5 = { style: tmp4.tabContent, children: tmp14 };
      const tmp20 = authStore2(metroImportDefault, obj5);
      cResult[4] = tmp4.tabContent;
      cResult[5] = tmp20;
      tmp17 = tmp20;
    } else {
      tmp17 = cResult[5];
    }
    return tmp17;
  } else if (GuildRoleSubscriptionsTierScenes.BENEFITS === selectedTab) {
    let tmp10;
    const _Symbol = Symbol;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp12 = authStore2(GuildRoleSubscriptionTierBenefitsModal.GuildRoleSubscriptionTierBenefitsTab, {});
      cResult[6] = tmp12;
      tmp10 = tmp12;
    } else {
      tmp10 = cResult[6];
    }
    return tmp10;
  } else {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const self = this;
    const self2 = this;
    const error = new Error("Unsupported scene: " + selectedTab);
    throw error;
  }
}) : (function(selectedTab) {
  let SafeAreaPaddingView;
  let SafeAreaPaddingView2;
  let obj3;
  let obj4;
  selectedTab = selectedTab.selectedTab;
  const tmp = closure_17();
  if (GuildRoleSubscriptionsTierScenes.DETAILS === selectedTab) {
    const obj2 = { style: tmp.tabContent, children: authStore3(SafeAreaPaddingView2, obj3) };
    obj3 = { bottom: true, children: items };
    SafeAreaPaddingView2 = common_SafeAreaView.SafeAreaPaddingView;
    items = [authStore2(GuildRoleSubscriptionTierDetailsModal.GuildRoleSubscriptionTierDetailsTab, {}), authStore2(closure_20, {})];
    return authStore2(metroImportDefault, obj2);
  } else if (GuildRoleSubscriptionsTierScenes.DESIGN === selectedTab) {
    const obj = { style: tmp.tabContent, children: authStore2(SafeAreaPaddingView, obj4) };
    obj4 = { bottom: true, children: authStore2(GuildRoleSubscriptionTierDesignModal.GuildRoleSubscriptionTierDesignTab, {}) };
    SafeAreaPaddingView = common_SafeAreaView.SafeAreaPaddingView;
    return authStore2(metroImportDefault, obj);
  } else if (GuildRoleSubscriptionsTierScenes.BENEFITS === selectedTab) {
    return authStore2(GuildRoleSubscriptionTierBenefitsModal.GuildRoleSubscriptionTierBenefitsTab, {});
  } else {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const self = this;
    const self2 = this;
    const error = new Error("Unsupported scene: " + selectedTab);
    throw error;
  }
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_22 = forwardRef(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  let error;
  let publishSubscriptionListing;
  let submitting;
  let tmp8;
  let obj = react3;
  const cResult = obj.c(21);
  const obj2 = EditStateContextProvider2;
  const editStateContext = obj2.useEditStateContext();
  const guildId = editStateContext.guildId;
  const groupListingId = editStateContext.groupListingId;
  const editStateId = editStateContext.editStateId;
  const obj3 = GuildRoleSubscriptionsHooks;
  const publishSubscriptionListing1 = obj3.usePublishSubscriptionListing();
  ({ error, submitting, publishSubscriptionListing } = publishSubscriptionListing1);
  const clearError = publishSubscriptionListing1.clearError;
  const obj4 = GuildRoleSubscriptionsHooks;
  const subscriptionListing = obj4.useSubscriptionListing(editStateId);
  const obj5 = RoleSubscriptionSettingsDisabledContext;
  const roleSubscriptionSettingsDisabled = obj5.useRoleSubscriptionSettingsDisabled();
  if (cResult[0] !== clearError) {
    const fn = function o() {
      return { dismissError: clearError };
    };
    cResult[0] = clearError;
    cResult[1] = fn;
    tmp8 = fn;
  } else {
    tmp8 = cResult[1];
  }
  const imperativeHandle = react.useImperativeHandle(arg1, tmp8);
  if (null != groupListingId) {
    if (null != subscriptionListing) {
      if (!subscriptionListing.published) {
        if (cResult[2] === groupListingId) {
          if (cResult[3] === guildId) {
            if (cResult[4] === subscriptionListing) {
              let tmp10;
              let tmp15;
              if (cResult[5] === publishSubscriptionListing) {
                tmp10 = cResult[6];
              }
              if (null != error) {
                let tmp20;
                let tmp23;
                let tmp25;
                let tmp29;
                let tmp32;
                const _Symbol = Symbol;
                if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
                  const tmp22 = authStore2(native.Spacer, { size: 16 });
                  cResult[7] = tmp22;
                  tmp20 = tmp22;
                } else {
                  tmp20 = cResult[7];
                }
                if (cResult[8] !== error) {
                  const anyErrorMessage = error.getAnyErrorMessage();
                  cResult[8] = error;
                  cResult[9] = anyErrorMessage;
                  tmp23 = anyErrorMessage;
                } else {
                  tmp23 = cResult[9];
                }
                if (cResult[10] !== tmp23) {
                  const obj6 = { children: tmp23 };
                  const tmp28 = authStore2(ErrorBlockDefault, obj6);
                  cResult[10] = tmp23;
                  cResult[11] = tmp28;
                  tmp25 = tmp28;
                } else {
                  tmp25 = cResult[11];
                }
                const _Symbol2 = Symbol;
                if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
                  const tmp31 = authStore2(native.Spacer, { size: 16 });
                  cResult[12] = tmp31;
                  tmp29 = tmp31;
                } else {
                  tmp29 = cResult[12];
                }
                if (cResult[13] !== tmp25) {
                  const obj7 = { children: items };
                  items = [tmp20, tmp25, tmp29];
                  const tmp35 = authStore3(closure_15, obj7);
                  cResult[13] = tmp25;
                  cResult[14] = tmp35;
                  tmp32 = tmp35;
                } else {
                  tmp32 = cResult[14];
                }
                tmp15 = tmp32;
              } else {
                let tmp12;
                let tmp11;
                const _Symbol3 = Symbol;
                if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
                  const intl = intl4.intl;
                  const stringResult = intl.string(intl4.t.V5mSpz);
                  const intl2 = intl4.intl;
                  const stringResult1 = intl2.string(intl4.t.Lj6R5m);
                  cResult[15] = stringResult;
                  cResult[16] = stringResult1;
                  tmp12 = stringResult1;
                  tmp11 = stringResult;
                } else {
                  tmp11 = cResult[15];
                  tmp12 = cResult[16];
                }
                if (cResult[17] === tmp10) {
                  if (cResult[18] === roleSubscriptionSettingsDisabled) {
                    if (cResult[19] === submitting) {
                      tmp15 = cResult[20];
                    }
                  }
                }
                const obj8 = { message: tmp11, ctaMessage: tmp12, onClick: tmp10, submitting, disabled: roleSubscriptionSettingsDisabled };
                const tmp18 = authStore2(ActionableNoticeDefault, obj8);
                cResult[17] = tmp10;
                cResult[18] = roleSubscriptionSettingsDisabled;
                cResult[19] = submitting;
                cResult[20] = tmp18;
                tmp15 = tmp18;
              }
              return tmp15;
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
  let closure_129_0;
  let closure_129_2;
  let closure_129_3;
  let error;
  let groupListingId;
  let intl;
  let intl2;
  let submitting;
  let obj = EditStateContextProvider2;
  const editStateContext = obj.useEditStateContext();
  ({ guildId: closure_129_0, groupListingId } = editStateContext);
  const editStateId = editStateContext.editStateId;
  const obj2 = GuildRoleSubscriptionsHooks;
  const publishSubscriptionListing = obj2.usePublishSubscriptionListing();
  ({ error, publishSubscriptionListing: closure_129_2, clearError: closure_129_3, submitting } = publishSubscriptionListing);
  const obj3 = GuildRoleSubscriptionsHooks;
  const subscriptionListing = obj3.useSubscriptionListing(editStateId);
  const obj4 = RoleSubscriptionSettingsDisabledContext;
  const roleSubscriptionSettingsDisabled = obj4.useRoleSubscriptionSettingsDisabled();
  const imperativeHandle = react.useImperativeHandle(arg1, () => ({ dismissError }));
  let tmp8 = null;
  if (null != groupListingId) {
    tmp8 = null;
    if (null != subscriptionListing) {
      tmp8 = null;
      if (!subscriptionListing.published) {
        let tmp14;
        if (null != error) {
          const obj5 = { children: items };
          items = [authStore2(native.Spacer, { size: 16 }), , ];
          const obj6 = { children: error.getAnyErrorMessage() };
          const tmp13 = ErrorBlockDefault;
          items[1] = authStore2(tmp13, obj6);
          items[2] = authStore2(native.Spacer, { size: 16 });
          tmp14 = authStore3(closure_15, obj5);
        } else {
          const obj7 = {
            message: intl.string(intl4.t.V5mSpz),
            ctaMessage: intl2.string(intl4.t.Lj6R5m),
            onClick() {
                      if (null != groupListingId) {
                        if (null != subscriptionListing) {
                          const obj = { guildId, groupListingId: tmp, listingId: tmp2.id };
                          return closure_1_2(obj);
                        }
                      }
                    },
            submitting,
            disabled: roleSubscriptionSettingsDisabled
          };
          const tmp17 = ActionableNoticeDefault;
          intl = intl4.intl;
          intl2 = intl4.intl;
          tmp14 = authStore2(tmp17, obj7);
        }
        tmp8 = tmp14;
      }
    }
  }
  return tmp8;
}));
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/GuildSettingsRoleSubscriptionTierEdit.tsx");

export default function GuildSettingsRoleSubscriptionTierEdit(guildId) {
  let RoleSubscriptionSettingsDisabledContextProvider;
  let _undefined;
  let c14;
  let closure_4;
  let editStateId;
  let items4;
  let items7;
  let items9;
  let obj7;
  let obj8;
  let tmp17;
  const f132944 = (currentScene) => {
    let DETAILS = currentScene.currentScene;
    if (DETAILS == null) {
      DETAILS = handleCreateOrUpdateFromEditState.DETAILS;
    }
    items = [DETAILS, currentScene.setScene];
    return items;
  };
  guildId = guildId.guildId;
  const groupListingId = guildId.groupListingId;
  const onBeforeDispatchNewListing = guildId.onBeforeDispatchNewListing;
  editStateId = undefined;
  _slicedToArray = undefined;
  navigation = undefined;
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
  const initialEditStateId = guildId.initialEditStateId;
  const tmp = closure_17();
  let obj = navigation;
  [editStateId, _slicedToArray] = navigation.useState(initialEditStateId);
  const obj2 = guildId(editStateId[13]);
  navigation = obj2.useNavigation();
  const obj3 = guildId(editStateId[26]);
  const subscriptionListing = obj3.useSubscriptionListing(editStateId);
  const obj4 = onBeforeDispatchNewListing(editStateId[31]);
  const first1 = _slicedToArray(obj4.useName(editStateId), 1)[0];
  let flag;
  if (subscriptionListing != null) {
    flag = subscriptionListing.published;
  }
  if (flag == null) {
    flag = false;
  }
  const tmp9Result = onBeforeDispatchNewListing(editStateId[31]);
  removeEditStateId = tmp9Result.useEditStateIds(groupListingId, guildId).removeEditStateId;
  ref = obj.useRef(null);
  const tmp9Result3 = onBeforeDispatchNewListing(editStateId[31]);
  hasChanges = tmp9Result3.useHasChanges(editStateId);
  const tmp9Result4 = onBeforeDispatchNewListing(editStateId[31]);
  const createOrUpdateListingFromEditState = tmp9Result4.useCreateOrUpdateListingFromEditState();
  loading = createOrUpdateListingFromEditState.loading;
  handleCreateOrUpdateFromEditState = createOrUpdateListingFromEditState.handleCreateOrUpdateFromEditState;
  error = createOrUpdateListingFromEditState.error;
  items = [guildId, handleCreateOrUpdateFromEditState, editStateId, groupListingId, onBeforeDispatchNewListing, removeEditStateId];
  callback = obj.useCallback(() => {
    const obj = {
      guildId,
      editStateId,
      groupListingId,
      onBeforeDispatchNewListing,
      onAfterDispatchNewListing(id) {
        closure_1_4(id.id);
        removeEditStateId(editStateId);
      }
    };
    return handleCreateOrUpdateFromEditState(obj);
  }, items);
  const items1 = [error];
  const layoutEffect = obj.useLayoutEffect(() => {
    if (null != error) {
      const presentError = ToastUtils.presentError;
      ToastUtils;
      let anyErrorMessage = error.getAnyErrorMessage();
      if (anyErrorMessage == null) {
        const intl = intl4.intl;
        anyErrorMessage = intl.string(intl4.t.R0RpRX);
      }
      presentError(anyErrorMessage);
    }
  }, items1);
  [tmp17, c14] = _slicedToArray(loading.useRoleTierEditStore(f132944), 2);
  const items2 = [navigation, hasChanges, first1, loading, callback];
  _slicedToArray(loading.useRoleTierEditStore(f132944), 2);
  const layoutEffect1 = obj.useLayoutEffect(() => {
    let onPress;
    let title;
    let obj = {
      headerRight: loading ? (() => _undefined(guildId(editStateId[33]).HeaderSubmittingIndicator, {})) : (() => {
        let intl;
        const obj = { text: intl.string(guildId(first[29]).t["R3BPH+"]), onPress, disabled: !hasChanges };
        const HeaderActionButton = guildId(first[34]).HeaderActionButton;
        intl = guildId(first[29]).intl;
        return c14(HeaderActionButton, obj);
      }),
      headerTitle() {
        let intl;
        const obj = { title, subtitle: intl.string(guildId(first[29]).t.t94EHg) };
        const NavigatorHeader = guildId(first[33]).NavigatorHeader;
        intl = guildId(first[29]).intl;
        return c14(NavigatorHeader, obj);
      }
    };
    navigation.setOptions(obj);
  }, items2);
  const items3 = [navigation, editStateId, guildId];
  const layoutEffect2 = obj.useLayoutEffect(() => {
    if (null == first) {
      const routes = navigation.getState().routes;
      let name;
      const subscriptionGroupListingsForGuildFetchState = GuildRoleSubscriptionsStore.getSubscriptionGroupListingsForGuildFetchState(guildId);
      const FETCHING = FetchState.FETCHING;
      if (routes[routes.length - 1] != null) {
        name = tmp.name;
      }
      const tmp8 = name !== GuildSettingsSections.ROLE_SUBSCRIPTIONS_TIER_EDIT || subscriptionGroupListingsForGuildFetchState === FETCHING;
      if (!tmp8) {
        navigation.pop();
      }
    }
  }, items3);
  guildId(editStateId[35]);
  ({
    pageWidth: 0,
    defaultIndex: closure_19[tmp17],
    onSetActiveIndex(arg0) {
      if (null != items[arg0]) {
        _undefined(items[arg0]);
        const current = ref.current;
        if (current != null) {
          current.dismissError();
        }
      }
    },
    items: items4.map((id) => ({ id, label: id, page: null }))
  });
  let intl = tmp5(tmp6[29]).intl;
  items4 = [intl.string(guildId(editStateId[29]).t.f7rGug), , ];
  const intl2 = tmp5(tmp6[29]).intl;
  items4[1] = intl2.string(guildId(editStateId[29]).t.YCpDtS);
  const intl3 = tmp5(tmp6[29]).intl;
  items4[2] = intl3.string(guildId(editStateId[29]).t.MpDNxN);
  if (null == editStateId) {
    return null;
  } else {
    let items6;
    if (undefined === subscriptionListing) {
      const items5 = [guildId(editStateId[36]).DismissibleContent.GUILD_ROLE_SUBSCRIPTION_TIER_TEMPLATES];
      items6 = items5;
    } else {
      items6 = [];
    }
    const obj6 = { guildId, editStateId, groupListingId, children: c14(RoleSubscriptionSettingsDisabledContextProvider, obj7) };
    const EditStateContextProvider = tmp5(tmp6[14]).EditStateContextProvider;
    obj7 = { guildId, children: closure_16(first1, obj8) };
    obj8 = { style: tmp.container, children: items7 };
    RoleSubscriptionSettingsDisabledContextProvider = tmp5(tmp6[27]).RoleSubscriptionSettingsDisabledContextProvider;
    const obj9 = {
      contentTypes: items6,
      children(markAsDismissed) {
          markAsDismissed = markAsDismissed.markAsDismissed;
          let tmp3 = null;
          if (markAsDismissed.visibleContent === dismissible_content.DismissibleContent.GUILD_ROLE_SUBSCRIPTION_TIER_TEMPLATES) {
            const obj = {
              markAsDismissed() {
                  return markAsDismissed(constants.UNKNOWN);
                },
              actionSheetKey: "TierTemplateSelected",
              importer: GuildRoleSubscriptionsTierTemplateSelectedActionSheetImporter
            };
            tmp3 = authStore2(DismissibleActionSheet.DismissibleActionSheet, obj);
          }
          return tmp3;
        }
    };
    items7 = [c14(groupListingId(editStateId[39]), obj9), , ];
    const items8 = [tmp.tabsContainer, ];
    let prop = null;
    if (!flag) {
      prop = tmp.tabsContainerWithDraft;
    }
    const obj10 = { style: items8, children: items9 };
    items8[1] = prop;
    const obj11 = { state: tmp21 };
    items9 = [c14(guildId(editStateId[41]).SegmentedControl, obj11), ];
    const obj12 = { ref };
    items9[1] = c14(closure_22, obj12);
    items7[1] = closure_16(first1, obj10);
    const obj13 = { selectedTab: tmp17 };
    items7[2] = c14(closure_21, obj13);
    return c14(EditStateContextProvider, obj6);
  }
};