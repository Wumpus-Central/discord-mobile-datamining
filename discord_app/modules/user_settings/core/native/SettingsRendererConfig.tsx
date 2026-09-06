// discord_app/modules/user_settings/core/native/SettingsRendererConfig.tsx
import SettingsConstants from "SettingsConstants.tsx";
import ChatGestureSettingsDefault from "../../defs/native/ChatGestureSettings.tsx";
import ProfileCustomizationSettingDefault from "../../defs/native/ProfileCustomizationSetting.tsx";
import AccountSettingDefault from "../../defs/native/AccountSetting.tsx";
import AccountUsernameSettingDefault from "../../defs/native/AccountUsernameSetting.tsx";
import AccountDisplayNameSettingDefault from "../../defs/native/AccountDisplayNameSetting.tsx";
import AccountEmailSettingDefault from "../../defs/native/AccountEmailSetting.tsx";
import AccountPhoneSettingDefault from "../../defs/native/AccountPhoneSetting.tsx";
import AccountAgeGroupSettingDefault from "../../defs/native/AccountAgeGroupSetting.tsx";
import AccountAgeGroupAdultSettingDefault from "../../defs/native/AccountAgeGroupAdultSetting.tsx";
import AccountAgeGroupAssignedAdultSettingDefault from "../../defs/native/AccountAgeGroupAssignedAdultSetting.tsx";
import AccountAgeGroupNonAdultSettingDefault from "../../defs/native/AccountAgeGroupNonAdultSetting.tsx";
import AgeGroupConfirmSettingDefault from "../../defs/native/AgeGroupConfirmSetting.tsx";
import AgeGroupResetSettingDefault from "../../defs/native/AgeGroupResetSetting.tsx";
import AgeGroupConfirmAccountStatusSettingDefault from "../../defs/native/AgeGroupConfirmAccountStatusSetting.tsx";
import AccountStandingSettingDefault from "../../defs/native/AccountStandingSetting.tsx";
import AccountChangePasswordSettingDefault from "../../defs/native/AccountChangePasswordSetting.tsx";
import AccountConfirmPasswordSettingDefault from "../../defs/native/AccountConfirmPasswordSetting.tsx";
import AccountEnable2faSettingDefault from "../../defs/native/AccountEnable2faSetting.tsx";
import AccountRemove2faSettingDefault from "../../defs/native/AccountRemove2faSetting.tsx";
import AccountViewBackupCodesSettingDefault from "../../defs/native/AccountViewBackupCodesSetting.tsx";
import AccountSmsBackupSettingDefault from "../../defs/native/AccountSmsBackupSetting.tsx";
import AccountWebAuthnViewSettingDefault from "../../defs/native/AccountWebAuthnViewSetting.tsx";
import AccountBlockedUsersSettingDefault from "../../defs/native/AccountBlockedUsersSetting.tsx";
import AccountIgnoredUsersSettingDefault from "../../defs/native/AccountIgnoredUsersSetting.tsx";
import AccountDeleteSettingDefault from "../../defs/native/AccountDeleteSetting.tsx";
import AccountDisableSettingDefault from "../../defs/native/AccountDisableSetting.tsx";
import SensitiveContentFilterSettingDefault from "../../defs/native/SensitiveContentFilterSetting.tsx";
import ExplicitMediaFiltersFriendsDMsSettingDefault from "../../defs/native/ExplicitMediaFiltersFriendsDMsSetting.tsx";
import ExplicitMediaFiltersNonFriendsDMsSettingDefault from "../../defs/native/ExplicitMediaFiltersNonFriendsDMsSetting.tsx";
import ExplicitMediaFiltersGuildsSettingDefault from "../../defs/native/ExplicitMediaFiltersGuildsSetting.tsx";
import GoreMediaFiltersFriendsDMsSettingDefault from "../../defs/native/GoreMediaFiltersFriendsDMsSetting.tsx";
import GoreMediaFiltersNonFriendsDMsSettingDefault from "../../defs/native/GoreMediaFiltersNonFriendsDMsSetting.tsx";
import GoreMediaFiltersGuildsSettingDefault from "../../defs/native/GoreMediaFiltersGuildsSetting.tsx";
import DirectMessageSafetyAlertsSettingDefault from "../../defs/native/DirectMessageSafetyAlertsSetting.tsx";
import DirectMessageSpamFilterSettingDefault from "../../defs/native/DirectMessageSpamFilterSetting.tsx";
import AndroidViewNsfwDmCommandsSettingDefault from "../../defs/native/AndroidViewNsfwDmCommandsSetting.tsx";
import StaffOnlyFindYourFriendsDeletionSettingDefault from "../../defs/native/StaffOnlyFindYourFriendsDeletionSetting.tsx";
import SyncContactsSettingDefault from "../../defs/native/SyncContactsSetting.tsx";
import SyncContactsNameSettingDefault from "../../defs/native/SyncContactsNameSetting.tsx";
import DiscoveryByPhoneSettingDefault from "../../defs/native/DiscoveryByPhoneSetting.tsx";
import DiscoveryByEmailSettingDefault from "../../defs/native/DiscoveryByEmailSetting.tsx";
import IOSConversationSuggestionsSettingDefault from "../../defs/native/IOSConversationSuggestionsSetting.tsx";
import ProfilePrivacySettingDefault from "../../defs/native/ProfilePrivacySetting.tsx";
import UseDataToImproveDiscordSettingDefault from "../../defs/native/UseDataToImproveDiscordSetting.tsx";
import UseDataToCustomizeDiscordSettingDefault from "../../defs/native/UseDataToCustomizeDiscordSetting.tsx";
import RequestYourDataSettingDefault from "../../defs/native/RequestYourDataSetting.tsx";
import FamilyCenterSettingDefault from "../../defs/native/FamilyCenterSetting.tsx";
import FamilyCenterSettingParentalControlsSettingDefault from "../../defs/native/FamilyCenterSettingParentalControlsSetting.tsx";
import FamilyCenterScheduleDowntimeSettingDefault from "../../defs/native/FamilyCenterScheduleDowntimeSetting.tsx";
import AuthorizedAppsSettingDefault from "../../defs/native/AuthorizedAppsSetting.tsx";
import AuthorizedAppSettingDefault from "../../defs/native/AuthorizedAppSetting.tsx";
import AuthorizedAppPermissionsSettingDefault from "../../defs/native/AuthorizedAppPermissionsSetting.tsx";
import DevicesSettingDefault from "../../defs/native/DevicesSetting.tsx";
import ConnectionsSettingDefault from "../../defs/native/ConnectionsSetting.tsx";
import ClipsSettingDefault from "../../defs/native/ClipsSetting.tsx";
import ClipsOptOutOfVoiceRecordingSettingDefault from "../../defs/native/ClipsOptOutOfVoiceRecordingSetting.tsx";
import FriendRequestsEveryoneSettingDefault from "../../defs/native/FriendRequestsEveryoneSetting.tsx";
import FriendRequestsMutualFriendsSettingDefault from "../../defs/native/FriendRequestsMutualFriendsSetting.tsx";
import FriendRequestsMutualGuildsSettingDefault from "../../defs/native/FriendRequestsMutualGuildsSetting.tsx";
import ScanQrCodeSettingDefault from "../../defs/native/ScanQrCodeSetting.tsx";
import PremiumSettingDefault from "../../defs/native/PremiumSetting.tsx";
import PremiumManagePlanSettingDefault from "../../defs/native/PremiumManagePlanSetting.tsx";
import PremiumManageSubscriptionsSettingDefault from "../../defs/native/PremiumManageSubscriptionsSetting.tsx";
import PremiumPlanSelectSettingDefault from "../../defs/native/PremiumPlanSelectSetting.tsx";
import PremiumGuildBoostingSettingDefault from "../../defs/native/PremiumGuildBoostingSetting.tsx";
import PremiumGiftingSettingDefault from "../../defs/native/PremiumGiftingSetting.tsx";
import defs_QuestHomeSettingDefault from "../../defs/native/QuestHomeSetting.tsx";
import QuestPreviewToolSettingDefault from "../../defs/native/QuestPreviewToolSetting.tsx";
import GuildRoleSubscriptionsSettingDefault from "../../defs/native/GuildRoleSubscriptionsSetting.tsx";
import GuildRoleSubscriptionsCancelSettingDefault from "../../defs/native/GuildRoleSubscriptionsCancelSetting.tsx";
import PremiumRestoreSubscriptionSettingDefault from "../../defs/native/PremiumRestoreSubscriptionSetting.tsx";
import VoiceSettingDefault from "../../defs/native/VoiceSetting.tsx";
import InputModeSettingDefault from "../../defs/native/InputModeSetting.tsx";
import AutoVoiceSensitivitySettingDefault from "../../defs/native/AutoVoiceSensitivitySetting.tsx";
import VoiceSensitivitySettingDefault from "../../defs/native/VoiceSensitivitySetting.tsx";
import OutputVolumeSettingDefault from "../../defs/native/OutputVolumeSetting.tsx";
import StreamOutputVolumeSettingDefault from "../../defs/native/StreamOutputVolumeSetting.tsx";
import SoundboardVolumeSettingDefault from "../../defs/native/SoundboardVolumeSetting.tsx";
import AndroidMobileOverlaySettingDefault from "../../defs/native/AndroidMobileOverlaySetting.tsx";
import NoiseSuppressionKrispSettingDefault from "../../defs/native/NoiseSuppressionKrispSetting.tsx";
import NoiseSuppressionSettingDefault from "../../defs/native/NoiseSuppressionSetting.tsx";
import EchoCancellationSettingDefault from "../../defs/native/EchoCancellationSetting.tsx";
import SidechainCompressionSettingDefault from "../../defs/native/SidechainCompressionSetting.tsx";
import AutomaticGainControlSettingDefault from "../../defs/native/AutomaticGainControlSetting.tsx";
import AdvancedVoiceActivitySettingDefault from "../../defs/native/AdvancedVoiceActivitySetting.tsx";
import AppearanceSettingDefault from "../../defs/native/AppearanceSetting.tsx";
import AppearanceThemePickerSettingDefault from "../../defs/native/AppearanceThemePickerSetting.tsx";
import SameAsDeviceThemeSettingDefault from "../../defs/native/SameAsDeviceThemeSetting.tsx";
import LightModeThemeSettingDefault from "../../defs/native/LightModeThemeSetting.tsx";
import DarkModeThemeSettingDefault from "../../defs/native/DarkModeThemeSetting.tsx";
import SyncThemeSettingDefault from "../../defs/native/SyncThemeSetting.tsx";
import DefaultGuildThemePreferenceSettingDefault from "../../defs/native/DefaultGuildThemePreferenceSetting.tsx";
import AndroidFontScaleSettingDefault from "../../defs/native/AndroidFontScaleSetting.tsx";
import AndroidClassicChatFontScaleSettingDefault from "../../defs/native/AndroidClassicChatFontScaleSetting.tsx";
import DmsMessagePreviewsSettingDefault from "../../defs/native/DmsMessagePreviewsSetting.tsx";
import DmsHappeningNowCardsSettingDefault from "../../defs/native/DmsHappeningNowCardsSetting.tsx";
import ExactSearchResultCountsSettingDefault from "../../defs/native/ExactSearchResultCountsSetting.tsx";
import GameMentionsAutocompleteSettingDefault from "../../defs/native/GameMentionsAutocompleteSetting.tsx";
import FavoritesGuildToggleSettingDefault from "../../defs/native/FavoritesGuildToggleSetting.tsx";
import AccessibilitySettingDefault from "../../defs/native/AccessibilitySetting.tsx";
import RoleColorsSettingDefault from "../../defs/native/RoleColorsSetting.tsx";
import OfficialMessageStyleSettingDefault from "../../defs/native/OfficialMessageStyleSetting.tsx";
import DisplayNameStylesRouteSettingDefault from "../../defs/native/DisplayNameStylesRouteSetting.tsx";
import TypingIndicatorSettingDefault from "../../defs/native/TypingIndicatorSetting.tsx";
import DisplayNameStylesAccessibilitySettingDefault from "../../defs/native/DisplayNameStylesAccessibilitySetting.tsx";
import YouBarNameplateAccessibilitySettingDefault from "../../defs/native/YouBarNameplateAccessibilitySetting.tsx";
import YouBarAvatarDecoAccessibilitySettingDefault from "../../defs/native/YouBarAvatarDecoAccessibilitySetting.tsx";
import ShowLinkDecorationsSettingDefault from "../../defs/native/ShowLinkDecorationsSetting.tsx";
import EnableSwitchIconsSettingDefault from "../../defs/native/EnableSwitchIconsSetting.tsx";
import ContrastModeSettingDefault from "../../defs/native/ContrastModeSetting.tsx";
import ReduceSaturationSettingDefault from "../../defs/native/ReduceSaturationSetting.tsx";
import SyncProfileColorsSettingDefault from "../../defs/native/SyncProfileColorsSetting.tsx";
import EnableReducedMotionSettingDefault from "../../defs/native/EnableReducedMotionSetting.tsx";
import SyncReducedMotionWithDeviceSettingDefault from "../../defs/native/SyncReducedMotionWithDeviceSetting.tsx";
import AutoplayGifSettingDefault from "../../defs/native/AutoplayGifSetting.tsx";
import AnimateEmojiSettingDefault from "../../defs/native/AnimateEmojiSetting.tsx";
import AnimateStickersSettingDefault from "../../defs/native/AnimateStickersSetting.tsx";
import LanguageSettingDefault from "../../defs/native/LanguageSetting.tsx";
import ChatSettingDefault from "../../defs/native/ChatSetting.tsx";
import DisplayMediaLinksSettingDefault from "../../defs/native/DisplayMediaLinksSetting.tsx";
import DisplayMediaUploadsSettingDefault from "../../defs/native/DisplayMediaUploadsSetting.tsx";
import ImageDescriptionsSettingDefault from "../../defs/native/ImageDescriptionsSetting.tsx";
import VideoUploadQualitySettingDefault from "../../defs/native/VideoUploadQualitySetting.tsx";
import DataSavingModeSettingDefault from "../../defs/native/DataSavingModeSetting.tsx";
import SaveCameraUploadsToDeviceSettingDefault from "../../defs/native/SaveCameraUploadsToDeviceSetting.tsx";
import EmbedAndLinkPreviewsSettingDefault from "../../defs/native/EmbedAndLinkPreviewsSetting.tsx";
import EmojiReactionsOnMessagesSettingDefault from "../../defs/native/EmojiReactionsOnMessagesSetting.tsx";
import ChatEmojiEmoticonsSettingDefault from "../../defs/native/ChatEmojiEmoticonsSetting.tsx";
import StickerAutocompleteSettingDefault from "../../defs/native/StickerAutocompleteSetting.tsx";
import TextAndMediaSyncSettingDefault from "../../defs/native/TextAndMediaSyncSetting.tsx";
import TimestampHourCycleSettingDefault from "../../defs/native/TimestampHourCycleSetting.tsx";
import SwipeRightToLeftSettingDefault from "../../defs/native/SwipeRightToLeftSetting.tsx";
import WebBrowserSettingDefault from "../../defs/native/WebBrowserSetting.tsx";
import SelectWebBrowserSettingDefault from "../../defs/native/SelectWebBrowserSetting.tsx";
import NotificationsSettingDefault from "../../defs/native/NotificationsSetting.tsx";
import InAppNotificationsSettingDefault from "../../defs/native/InAppNotificationsSetting.tsx";
import SystemNotificationsSettingDefault from "../../defs/native/SystemNotificationsSetting.tsx";
import ReactionNotificationsSettingsDefault from "../../defs/native/ReactionNotificationsSettings.tsx";
import CustomStatusNotificationSettingsDefault from "../../defs/native/CustomStatusNotificationSettings.tsx";
import IOSNativePhoneIntegrationSettingDefault from "../../defs/native/IOSNativePhoneIntegrationSetting.tsx";
import AndroidMessageNotificationsSettingDefault from "../../defs/native/AndroidMessageNotificationsSetting.tsx";
import AndroidNotificationLightsSettingDefault from "../../defs/native/AndroidNotificationLightsSetting.tsx";
import AndroidNotificationVibrationsSettingDefault from "../../defs/native/AndroidNotificationVibrationsSetting.tsx";
import AndroidNotificationSoundsSettingDefault from "../../defs/native/AndroidNotificationSoundsSetting.tsx";
import InAppMessageSoundsSettingDefault from "../../defs/native/InAppMessageSoundsSetting.tsx";
import FriendStreamNotificationsSettingDefault from "../../defs/native/FriendStreamNotificationsSetting.tsx";
import FriendAnniversaryNotificationSettingDefault from "../../defs/native/FriendAnniversaryNotificationSetting.tsx";
import VoiceActivityNotificationSettingDefault from "../../defs/native/VoiceActivityNotificationSetting.tsx";
import FriendOnlineNotificationSettingDefault from "../../defs/native/FriendOnlineNotificationSetting.tsx";
import FriendGamingActivityNotificationSettingDefault from "../../defs/native/FriendGamingActivityNotificationSetting.tsx";
import ProfileUpdatesNotificationSettingDefault from "../../defs/native/ProfileUpdatesNotificationSetting.tsx";
import ServerTrendingNotificationSettingDefault from "../../defs/native/ServerTrendingNotificationSetting.tsx";
import UpcomingServerEventNotificationSettingDefault from "../../defs/native/UpcomingServerEventNotificationSetting.tsx";
import SummaryReminderNotificationSettingDefault from "../../defs/native/SummaryReminderNotificationSetting.tsx";
import ScreenDowntimeReminderSettingDefault from "../../defs/native/ScreenDowntimeReminderSetting.tsx";
import ScreenDowntimeScheduleSettingDefault from "../../defs/native/ScreenDowntimeScheduleSetting.tsx";
import CommunityActivityAlertsSettingDefault from "../../defs/native/CommunityActivityAlertsSetting.tsx";
import HighlightNotificationsSettingDefault from "../../defs/native/HighlightNotificationsSetting.tsx";
import AppIconsSettingDefault from "../../defs/native/AppIconsSetting.tsx";
import AdvancedSettingDefault from "../../defs/native/AdvancedSetting.tsx";
import DeveloperModeSettingDefault from "../../defs/native/DeveloperModeSetting.tsx";
import LaunchpadSettingDefault from "../../defs/native/LaunchpadSetting.tsx";
import ChannelListLayoutSettingDefault from "../../defs/native/ChannelListLayoutSetting.tsx";
import IcymiTabSettingDefault from "../../defs/native/IcymiTabSetting.tsx";
import SupportSettingDefault from "../../defs/native/SupportSetting.tsx";
import UploadDebugLogsSettingDefault from "../../defs/native/UploadDebugLogsSetting.tsx";
import UploadIntlDataSettingDefault from "../../defs/native/UploadIntlDataSetting.tsx";
import AcknowledgementsSettingDefault from "../../defs/native/AcknowledgementsSetting.tsx";
import ChangeLogSettingDefault from "../../defs/native/ChangeLogSetting.tsx";
import LogoutSettingDefault from "../../defs/native/LogoutSetting.tsx";
import AppVersionSettingDefault from "../../defs/native/AppVersionSetting.tsx";
import CopyClientInfoSettingDefault from "../../defs/native/CopyClientInfoSetting.tsx";
import DeviceInfoSettingDefault from "../../defs/native/DeviceInfoSetting.tsx";
import ViewDebugLogsSettingDefault from "../../defs/native/ViewDebugLogsSetting.tsx";
import CacheActionsSettingDefault from "../../defs/native/CacheActionsSetting.tsx";
import ShowDevWidgetSettingDefault from "../../defs/native/ShowDevWidgetSetting.tsx";
import ShowDevToolsSettingDefault from "../../defs/native/ShowDevToolsSetting.tsx";
import BugReporterSettingDefault from "../../defs/native/BugReporterSetting.tsx";
import InternalBuildActiveSettingDefault from "../../defs/native/InternalBuildActiveSetting.tsx";
import InternalBuildUpdateSettingDefault from "../../defs/native/InternalBuildUpdateSetting.tsx";
import ExperimentOverrideActiveSettingDefault from "../../defs/native/ExperimentOverrideActiveSetting.tsx";
import BuildOverrideActiveSettingDefault from "../../defs/native/BuildOverrideActiveSetting.tsx";
import CreateBugReportSettingDefault from "../../defs/native/CreateBugReportSetting.tsx";
import DesignSystemsSettingDefault from "../../defs/native/DesignSystemsSetting.tsx";
import DesignSystemsTextSettingDefault from "../../defs/native/DesignSystemsTextSetting.tsx";
import DesignSystemsButtonSettingDefault from "../../defs/native/DesignSystemsButtonSetting.tsx";
import DesignSystemsLegacyButtonSettingDefault from "../../defs/native/DesignSystemsLegacyButtonSetting.tsx";
import DesignSystemsButtonGroupSettingDefault from "../../defs/native/DesignSystemsButtonGroupSetting.tsx";
import DesignSystemsRowButtonSettingDefault from "../../defs/native/DesignSystemsRowButtonSetting.tsx";
import DesignSystemsExperimentalButtonsSettingDefault from "../../defs/native/DesignSystemsExperimentalButtonsSetting.tsx";
import DesignSystemsTableRowSettingDefault from "../../defs/native/DesignSystemsTableRowSetting.tsx";
import DesignSystemsAlertModalSettingDefault from "../../defs/native/DesignSystemsAlertModalSetting.tsx";
import DesignSystemsBackgroundBlurViewSettingDefault from "../../defs/native/DesignSystemsBackgroundBlurViewSetting.tsx";
import DesignSystemsShadowsSettingDefault from "../../defs/native/DesignSystemsShadowsSetting.tsx";
import DesignSystemSegmentedControlSettingDefault from "../../defs/native/DesignSystemSegmentedControlSetting.tsx";
import DesignSystemsTabsSettingDefault from "../../defs/native/DesignSystemsTabsSetting.tsx";
import DesignSystemsContextMenuSettingDefault from "../../defs/native/DesignSystemsContextMenuSetting.tsx";
import DesignSystemsToastSettingDefault from "../../defs/native/DesignSystemsToastSetting.tsx";
import DesignSystemsTextInputSettingDefault from "../../defs/native/DesignSystemsTextInputSetting.tsx";
import DesignSystemsTooltipSettingDefault from "../../defs/native/DesignSystemsTooltipSetting.tsx";
import DesignSystemsCoachmarkSettingDefault from "../../defs/native/DesignSystemsCoachmarkSetting.tsx";
import DesignSystemStackSettingDefault from "../../defs/native/DesignSystemStackSetting.tsx";
import DesignSystemBackdropSettingDefault from "../../defs/native/DesignSystemBackdropSetting.tsx";
import DesignSystemsModalSettingDefault from "../../defs/native/DesignSystemsModalSetting.tsx";
import DesignSystemPileSettingDefault from "../../defs/native/DesignSystemPileSetting.tsx";
import DesignSystemSheetsSettingDefault from "../../defs/native/DesignSystemSheetsSetting.tsx";
import DesignSystemFormPrimitivesSettingDefault from "../../defs/native/DesignSystemFormPrimitivesSetting.tsx";
import DesignSystemHapticsSettingDefault from "../../defs/native/DesignSystemHapticsSetting.tsx";
import PremiumProfileCustomizationTryItOutSettingDefault from "../../defs/native/PremiumProfileCustomizationTryItOutSetting.tsx";
import CollectiblesShopSettingDefault from "../../defs/native/CollectiblesShopSetting.tsx";
import CollectiblesShopViewAllCategoryItemsSettingDefault from "../../defs/native/CollectiblesShopViewAllCategoryItemsSetting.tsx";
import EncryptionSettingDefault from "../../defs/native/EncryptionSetting.tsx";
import SecureFramesPersistentCodesSettingDefault from "../../defs/native/SecureFramesPersistentCodesSetting.tsx";
import SecureFramesVerifiedDevicesSettingDefault from "../../defs/native/SecureFramesVerifiedDevicesSetting.tsx";
import UseDataForQuestsSetting from "../../defs/native/UseDataForQuestsSetting.tsx";
import UseDataForQuests3PSetting from "../../defs/native/UseDataForQuests3PSetting.tsx";
import SponsoredContentPreferencesSettingDefault from "../../defs/native/SponsoredContentPreferencesSetting.tsx";
import ManageSponsoredContentSettingDefault from "../../defs/native/ManageSponsoredContentSetting.tsx";
import DisableStreamPreviewsSettingDefault from "../../defs/native/DisableStreamPreviewsSetting.tsx";
import DataAndPrivacySettingDefault from "../../defs/native/DataAndPrivacySetting.tsx";
import ContentAndSocialSettingDefault from "../../defs/native/ContentAndSocialSetting.tsx";
import SafetyGuildSettingGuildSelectDefault from "../../defs/native/SafetyGuildSettingGuildSelect.tsx";
import SafetyTermsOfServiceSettingDefault from "../../defs/native/SafetyTermsOfServiceSetting.tsx";
import SafetyPrivacyPolicySettingDefault from "../../defs/native/SafetyPrivacyPolicySetting.tsx";
import SafetyGuildSettingDirectMessagesDefault from "../../defs/native/SafetyGuildSettingDirectMessages.tsx";
import SafetyGuildSettingMessageRequestsDefault from "../../defs/native/SafetyGuildSettingMessageRequests.tsx";
import GuildSettingActivityStatusDefault from "../../defs/native/GuildSettingActivityStatus.tsx";
import GuildSettingActivityJoiningDefault from "../../defs/native/GuildSettingActivityJoining.tsx";
import ReactCompilerSettingDefault from "../../defs/native/ReactCompilerSetting.tsx";
import ContentAndSocialDiscordRouteSettingDefault from "../../defs/native/ContentAndSocialDiscordRouteSetting.tsx";
import ConnectedGamesRouteSettingDefault from "../../defs/native/ConnectedGamesRouteSetting.tsx";
import AllowGameFriendDMsSettingDefault from "../../defs/native/AllowGameFriendDMsSetting.tsx";
import InGameDMsSettingDefault from "../../defs/native/InGameDMsSetting.tsx";
import DoubleTapEmojiSettingDefault from "../../defs/native/DoubleTapEmojiSetting.tsx";
import DoubleTapToReactSettingDefault from "../../defs/native/DoubleTapToReactSetting.tsx";
import ParentalControlsSensitiveContentFilterSettingDefault from "../../defs/native/ParentalControlsSensitiveContentFilterSetting.tsx";
import ParentalControlsDirectMessagesDefault from "../../defs/native/ParentalControlsDirectMessages.tsx";
import ParentalControlsMessageRequestsDefault from "../../defs/native/ParentalControlsMessageRequests.tsx";
import ParentalControlsFriendRequestsEveryoneSettingDefault from "../../defs/native/ParentalControlsFriendRequestsEveryoneSetting.tsx";
import ParentalControlsFriendRequestsMutualFriendsSettingDefault from "../../defs/native/ParentalControlsFriendRequestsMutualFriendsSetting.tsx";
import ParentalControlsFriendRequestsMutualGuildsSettingDefault from "../../defs/native/ParentalControlsFriendRequestsMutualGuildsSetting.tsx";
import ParentalControlsExplicitMediaFiltersFriendsDMsSettingDefault from "../../defs/native/ParentalControlsExplicitMediaFiltersFriendsDMsSetting.tsx";
import ParentalControlsExplicitMediaFiltersNonFriendsDMsSettingDefault from "../../defs/native/ParentalControlsExplicitMediaFiltersNonFriendsDMsSetting.tsx";
import ParentalControlsGoreMediaFiltersFriendsDMsSettingDefault from "../../defs/native/ParentalControlsGoreMediaFiltersFriendsDMsSetting.tsx";
import ParentalControlsGoreMediaFiltersNonFriendsDMsSettingDefault from "../../defs/native/ParentalControlsGoreMediaFiltersNonFriendsDMsSetting.tsx";
import ParentalControlsUseDataToImproveDiscordSettingDefault from "../../defs/native/ParentalControlsUseDataToImproveDiscordSetting.tsx";
import ParentalControlsUseDataToCustomizeDiscordSettingDefault from "../../defs/native/ParentalControlsUseDataToCustomizeDiscordSetting.tsx";
import ParentalControlsUseDataForQuestsSettingDefault from "../../defs/native/ParentalControlsUseDataForQuestsSetting.tsx";
import ParentalControlsUseDataForQuests3PSettingDefault from "../../defs/native/ParentalControlsUseDataForQuests3PSetting.tsx";
import ActivityPrivacyShareMyActivitySettingDefault from "../../defs/native/ActivityPrivacyShareMyActivitySetting.tsx";
import ActivityPrivacyDefaultSharingSettingDefault from "../../defs/native/ActivityPrivacyDefaultSharingSetting.tsx";
import FriendRequestsNotesSettingDefault from "../../defs/native/FriendRequestsNotesSetting.tsx";
import NotifyFriendsOnComeOnlineSettingDefault from "../../defs/native/NotifyFriendsOnComeOnlineSetting.tsx";
import NotifyFriendsOnProfileUpdateSettingDefault from "../../defs/native/NotifyFriendsOnProfileUpdateSetting.tsx";
import MobileNotifSettingsRendererConfig from "../../notifications/native/codegen/MobileNotifSettingsRendererConfig.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const UseDataForQuestsSettingDefault = UseDataForQuestsSetting;
const UseDataForQuests3PSettingDefault = UseDataForQuests3PSetting;

({
  PROFILE_CUSTOMIZATION,
  ACCOUNT,
  ACCOUNT_USERNAME,
  ACCOUNT_DISPLAY_NAME,
  ACCOUNT_EMAIL,
  ACCOUNT_PHONE,
  ACCOUNT_AGE_GROUP,
  ACCOUNT_AGE_GROUP_ADULT,
  ACCOUNT_AGE_GROUP_ASSIGNED_ADULT,
  ACCOUNT_AGE_GROUP_NON_ADULT,
  AGE_GROUP_CONFIRM,
  AGE_GROUP_RESET,
  AGE_GROUP_CONFIRM_ACCOUNT_STATUS,
  ACCOUNT_STANDING,
  ACCOUNT_CHANGE_PASSWORD,
  ACCOUNT_CONFIRM_PASSWORD,
  ACCOUNT_ENABLE_2FA,
  ACCOUNT_REMOVE_2FA,
  ACCOUNT_VIEW_BACKUP_CODES,
  ACCOUNT_SMS_BACKUP,
  ACCOUNT_WEB_AUTHN_VIEW,
  ACCOUNT_BLOCKED_USERS_V2,
  ACCOUNT_IGNORED_USERS,
  ACCOUNT_DELETE,
  ACCOUNT_DISABLE,
  SENSITIVE_CONTENT_FILTERS,
  EXPLICIT_MEDIA_FILTERS_FRIENDS_DMS,
  EXPLICIT_MEDIA_FILTERS_NON_FRIENDS_DMS,
  EXPLICIT_MEDIA_FILTERS_GUILDS,
  GORE_MEDIA_FILTERS_FRIENDS_DMS,
  GORE_MEDIA_FILTERS_NON_FRIENDS_DMS,
  GORE_MEDIA_FILTERS_GUILDS,
  DIRECT_MESSAGE_SAFETY_ALERTS,
  DIRECT_MESSAGE_SPAM_FILTER,
  ANDROID_VIEW_NSFW_DM_COMMANDS_V2,
  STAFF_ONLY_FIND_YOUR_FRIENDS_DELETION,
  SYNC_CONTACTS,
  SYNC_CONTACTS_NAME,
  DISCOVERY_BY_PHONE,
  DISCOVERY_BY_EMAIL,
  IOS_CONVERSATION_SUGGESTIONS,
  PROFILE_PRIVACY,
  USE_DATA_TO_IMPROVE_DISCORD,
  USE_DATA_TO_CUSTOMIZE_DISCORD,
  REQUEST_YOUR_DATA,
  FAMILY_CENTER,
  FAMILY_CENTER_PARENTAL_CONTROLS_SETTINGS,
  FAMILY_CENTER_SCHEDULE_DOWNTIME,
  AUTHORIZED_APPS,
  AUTHORIZED_APP,
  AUTHORIZED_APP_PERMISSIONS,
  DEVICES,
  CONNECTIONS,
  CLIPS,
  CLIPS_OPT_OUT_OF_VOICE_RECORDING,
  SEND_FRIEND_REQUESTS,
  SAFETY_SEND_FRIEND_REQUESTS_EVERYONE,
  SAFETY_SEND_FRIEND_REQUESTS_MUTUAL_FRIENDS,
  SAFETY_SEND_FRIEND_REQUESTS_MUTUAL_GUILDS,
  SCAN_QR_CODE,
  PREMIUM,
  PREMIUM_MANAGE_PLAN,
  PREMIUM_MANAGE_SUBSCRIPTIONS,
  PREMIUM_PLAN_SELECT,
  PREMIUM_GUILD_BOOSTING,
  PREMIUM_GIFTING,
  QUEST_HOME,
  QUEST_PREVIEW_TOOL,
  GUILD_ROLE_SUBSCRIPTIONS,
  GUILD_ROLE_SUBSCRIPTIONS_CANCEL,
  PREMIUM_RESTORE_SUBSCRIPTION,
  VOICE,
  INPUT_MODE,
  AUTO_VOICE_SENSITIVITY,
  VOICE_SENSITIVITY,
  OUTPUT_VOLUME,
  STREAM_OUTPUT_VOLUME,
  SOUNDBOARD_VOLUME,
  ANDROID_MOBILE_OVERLAY,
  NOISE_SUPPRESSION_KRISP,
  NOISE_SUPPRESSION,
  ECHO_CANCELLATION,
  SIDECHAIN_COMPRESSION,
  AUTOMATIC_GAIN_CONTROL,
  ADVANCED_VOICE_ACTIVITY,
  APPEARANCE,
  APPEARANCE_THEME_PICKER,
  SAME_AS_DEVICE_THEME,
  LIGHT_MODE_THEME_PICKER,
  DARK_MODE_THEME_PICKER,
  SYNC_THEME,
  DEFAULT_GUILD_THEME_PREFERENCE,
  ANDROID_FONT_SCALE,
  ANDROID_CLASSIC_CHAT_FONT_SCALE,
  DMS_MESSAGE_PREVIEWS,
  DMS_HAPPENING_NOW_CARDS,
  EXACT_SEARCH_RESULT_COUNTS,
  GAME_MENTIONS_AUTOCOMPLETE,
  FAVORITES_GUILD_TOGGLE,
  ACCESSIBILITY,
  ROLE_COLORS,
  OFFICIAL_MESSAGE_STYLE,
  DISPLAY_NAME_STYLES_ROUTE,
  TYPING_INDICATOR,
  DISPLAY_NAME_STYLES_ACCESSIBILITY,
  YOU_BAR_NAMEPLATE_ACCESSIBILITY,
  YOU_BAR_AVATAR_DECO_ACCESSSIBILITY,
  SHOW_LINK_DECORATIONS,
  SHOW_ON_OFF_INDICATORS,
  CONTRAST_MODE,
  REDUCE_SATURATION,
  SYNC_PROFILE_COLORS,
  ENABLE_REDUCED_MOTION,
  SYNC_REDUCED_MOTION_WITH_DEVICE,
  AUTOPLAY_GIF,
  ANIMATE_EMOJI,
  ANIMATE_STICKERS,
  LANGUAGE,
  CHAT,
  DISPLAY_MEDIA_LINKS,
  DISPLAY_MEDIA_UPLOADS,
  IMAGE_DESCRIPTIONS,
  VIDEO_UPLOAD_QUALITY,
  DATA_SAVING_MODE,
  SAVE_CAMERA_UPLOADS_TO_DEVICE,
  EMBED_AND_LINK_PREVIEWS,
  EMOJI_REACTIONS_ON_MESSAGES,
  CHAT_EMOJI_EMOTICONS,
  STICKER_AUTOCOMPLETE,
  TEXT_AND_MEDIA_SYNC,
  TIMESTAMP_HOUR_CYCLE,
  SWIPE_RIGHT_TO_LEFT,
  CHAT_GESTURES,
  WEB_BROWSER,
  SELECT_WEB_BROWSER,
  NOTIFICATIONS,
  IN_APP_NOTIFICATIONS,
  SYSTEM_NOTIFICATIONS,
  REACTION_NOTIFICATIONS,
  CUSTOM_STATUS_NOTIFICATIONS,
  IOS_NATIVE_PHONE_INTEGRATION,
  ANDROID_MESSAGE_NOTIFICATIONS,
  ANDROID_NOTIFICATION_LIGHTS,
  ANDROID_NOTIFICATION_VIBRATIONS,
  ANDROID_NOTIFICATION_SOUNDS,
  IN_APP_MESSAGE_SOUNDS,
  FRIEND_STREAM_NOTIFICATIONS,
  FRIEND_ANNIVERSARY_NOTIFICATIONS,
  VOICE_ACTIVITY_NOTIFICATIONS,
  FRIEND_ONLINE_NOTIFICATIONS,
  FRIEND_GAMING_ACTIVITY_NOTIFICATIONS,
  PROFILE_UPDATES_NOTIFICATIONS,
  SERVER_TRENDING_NOTIFICATIONS,
  UPCOMING_SERVER_EVENT_NOTIFICATIONS,
  SUMMARY_REMINDER_NOTIFICATIONS,
  SCREEN_DOWNTIME_REMINDER_NOTIFICATIONS,
  SCREEN_DOWNTIME_SCHEDULE_NOTIFICATIONS,
  COMMUNITY_ACTIVITY_ALERTS,
  HIGHLIGHT_NOTIFICATIONS,
  APP_ICONS,
  ADVANCED,
  DEVELOPER_MODE,
  LAUNCHPAD,
  CHANNEL_LIST_LAYOUT,
  ICYMI_TAB,
  SUPPORT,
  UPLOAD_DEBUG_LOGS,
  UPLOAD_INTL_DATA,
  ACKNOWLEDGEMENTS,
  CHANGE_LOG,
  LOGOUT,
  APP_VERSION,
  DEVICE_INFO,
  VIEW_DEBUG_LOGS,
  COPY_CLIENT_INFO,
  CACHE_ACTIONS,
  SHOW_DEV_WIDGET,
  SHOW_DEV_TOOLS,
  BUG_REPORTER,
  INTERNAL_BUILD_ACTIVE,
  INTERNAL_BUILD_UPDATE,
  EXPERIMENT_OVERRIDE_ACTIVE,
  BUILD_OVERRIDE_ACTIVE,
  CREATE_BUG_REPORT,
  DESIGN_SYSTEMS,
  DESIGN_SYSTEMS_TEXT,
  DESIGN_SYSTEMS_BUTTON,
  DESIGN_SYSTEMS_LEGACY_BUTTON,
  DESIGN_SYSTEMS_BUTTON_GROUP,
  DESIGN_SYSTEMS_ROW_BUTTON,
  DESIGN_SYSTEMS_EXPERIMENTAL_BUTTONS,
  DESIGN_SYSTEMS_TABLE_ROW,
  DESIGN_SYSTEMS_ALERT_MODAL,
  DESIGN_SYSTEMS_BACKGROUND_BLUR_VIEW,
  DESIGN_SYSTEMS_SHADOWS,
  DESIGN_SYSTEM_SEGMENTED_CONTROL,
  DESIGN_SYSTEMS_TABS,
  DESIGN_SYSTEMS_CONTEXT_MENU,
  DESIGN_SYSTEMS_TOAST,
  DESIGN_SYSTEMS_TEXT_INPUT,
  DESIGN_SYSTEMS_TOOLTIP,
  DESIGN_SYSTEMS_COACHMARK,
  DESIGN_SYSTEM_STACK,
  DESIGN_SYSTEM_BACKDROP,
  DESIGN_SYSTEMS_MODAL,
  DESIGN_SYSTEM_PILE,
  DESIGN_SYSTEM_SHEETS,
  DESIGN_SYSTEM_FORM_PRIMITIVES,
  DESIGN_SYSTEM_HAPTICS,
  PREMIUM_PROFILE_CUSTOMIZATION_TRY_IT_OUT,
  COLLECTIBLES_SHOP,
  COLLECTIBLES_SHOP_VIEW_ALL_CATEGORY_ITEMS,
  ENCRYPTION_VERIFIED_DEVICES,
  DATA_AND_PRIVACY_SECURE_FRAMES_PERSISTENT_CODES,
  SECURE_FRAMES_VERIFIED_DEVICES,
  USE_DATA_FOR_QUESTS,
  USE_DATA_FOR_QUESTS_3P,
  USE_DATA_FOR_QUESTS_SPONSORED_CONTENT,
  USE_DATA_FOR_QUESTS_3P_SPONSORED_CONTENT,
  SPONSORED_CONTENT_PREFERENCES,
  MANAGE_SPONSORED_CONTENT,
  DISABLE_STREAM_PREVIEWS,
  DATA_AND_PRIVACY,
  CONTENT_AND_SOCIAL,
  SAFETY_TERMS_OF_SERVICE,
  SAFETY_PRIVACY_POLICY,
  SAFETY_GUILD_SETTING_GUILD_SELECT,
  SAFETY_GUILD_SETTING_DIRECT_MESSAGES,
  SAFETY_GUILD_SETTING_MESSAGE_REQUESTS,
  GUILD_SETTING_ACTIVITY_STATUS,
  GUILD_SETTING_ACTIVITY_JOINING,
  REACT_COMPILER,
  CONTENT_AND_SOCIAL_DISCORD,
  CONNECTED_GAMES,
  ALLOW_GAME_FRIEND_DMS,
  IN_GAME_DMS,
  DOUBLE_TAP_EMOJI,
  DOUBLE_TAP_TO_REACT_ENABLED,
  PARENTAL_CONTROLS_SENSITIVE_CONTENT_FILTERS,
  PARENTAL_CONTROLS_DIRECT_MESSAGES,
  PARENTAL_CONTROLS_MESSAGE_REQUESTS,
  PARENTAL_CONTROLS_FRIEND_REQUESTS_EVERYONE,
  PARENTAL_CONTROLS_FRIEND_REQUESTS_MUTUAL_FRIENDS,
  PARENTAL_CONTROLS_FRIEND_REQUESTS_MUTUAL_GUILDS,
  PARENTAL_CONTROLS_EXPLICIT_MEDIA_FILTERS_FRIENDS_DMS,
  PARENTAL_CONTROLS_EXPLICIT_MEDIA_FILTERS_NON_FRIENDS_DMS,
  PARENTAL_CONTROLS_GORE_MEDIA_FILTERS_FRIENDS_DMS,
  PARENTAL_CONTROLS_GORE_MEDIA_FILTERS_NON_FRIENDS_DMS,
  PARENTAL_CONTROLS_DATA_USAGE_STATISTICS,
  PARENTAL_CONTROLS_DATA_USAGE_PERSONALIZATION,
  PARENTAL_CONTROLS_DATA_USAGE_QUESTS,
  PARENTAL_CONTROLS_DATA_USAGE_QUESTS_3P,
  ACTIVITY_PRIVACY_SHARE_MY_ACTIVITY,
  ACTIVITY_PRIVACY_DEFAULT_SHARING,
  FRIEND_REQUEST_NOTES,
  NOTIFY_FRIENDS_ON_COME_ONLINE,
  NOTIFY_FRIENDS_ON_PROFILE_UPDATE,
} = SettingsConstants.MobileUserSettings);
const merged = Object.assign(MobileNotifSettingsRendererConfig.MOBILE_NOTIF_SETTINGS_RENDERER_CONFIG);
const frozen = Object.freeze({
  [PROFILE_CUSTOMIZATION]: ProfileCustomizationSettingDefault,
  [ACCOUNT]: AccountSettingDefault,
  [ACCOUNT_USERNAME]: AccountUsernameSettingDefault,
  [ACCOUNT_DISPLAY_NAME]: AccountDisplayNameSettingDefault,
  [ACCOUNT_EMAIL]: AccountEmailSettingDefault,
  [ACCOUNT_PHONE]: AccountPhoneSettingDefault,
  [ACCOUNT_AGE_GROUP]: AccountAgeGroupSettingDefault,
  [ACCOUNT_AGE_GROUP_ADULT]: AccountAgeGroupAdultSettingDefault,
  [ACCOUNT_AGE_GROUP_ASSIGNED_ADULT]: AccountAgeGroupAssignedAdultSettingDefault,
  [ACCOUNT_AGE_GROUP_NON_ADULT]: AccountAgeGroupNonAdultSettingDefault,
  [AGE_GROUP_CONFIRM]: AgeGroupConfirmSettingDefault,
  [AGE_GROUP_RESET]: AgeGroupResetSettingDefault,
  [AGE_GROUP_CONFIRM_ACCOUNT_STATUS]: AgeGroupConfirmAccountStatusSettingDefault,
  [ACCOUNT_STANDING]: AccountStandingSettingDefault,
  [ACCOUNT_CHANGE_PASSWORD]: AccountChangePasswordSettingDefault,
  [ACCOUNT_CONFIRM_PASSWORD]: AccountConfirmPasswordSettingDefault,
  [ACCOUNT_ENABLE_2FA]: AccountEnable2faSettingDefault,
  [ACCOUNT_REMOVE_2FA]: AccountRemove2faSettingDefault,
  [ACCOUNT_VIEW_BACKUP_CODES]: AccountViewBackupCodesSettingDefault,
  [ACCOUNT_SMS_BACKUP]: AccountSmsBackupSettingDefault,
  [ACCOUNT_WEB_AUTHN_VIEW]: AccountWebAuthnViewSettingDefault,
  [ACCOUNT_BLOCKED_USERS_V2]: AccountBlockedUsersSettingDefault,
  [ACCOUNT_IGNORED_USERS]: AccountIgnoredUsersSettingDefault,
  [ACCOUNT_DELETE]: AccountDeleteSettingDefault,
  [ACCOUNT_DISABLE]: AccountDisableSettingDefault,
  [SENSITIVE_CONTENT_FILTERS]: SensitiveContentFilterSettingDefault,
  [EXPLICIT_MEDIA_FILTERS_FRIENDS_DMS]: ExplicitMediaFiltersFriendsDMsSettingDefault,
  [EXPLICIT_MEDIA_FILTERS_NON_FRIENDS_DMS]: ExplicitMediaFiltersNonFriendsDMsSettingDefault,
  [EXPLICIT_MEDIA_FILTERS_GUILDS]: ExplicitMediaFiltersGuildsSettingDefault,
  [GORE_MEDIA_FILTERS_FRIENDS_DMS]: GoreMediaFiltersFriendsDMsSettingDefault,
  [GORE_MEDIA_FILTERS_NON_FRIENDS_DMS]: GoreMediaFiltersNonFriendsDMsSettingDefault,
  [GORE_MEDIA_FILTERS_GUILDS]: GoreMediaFiltersGuildsSettingDefault,
  [DIRECT_MESSAGE_SAFETY_ALERTS]: DirectMessageSafetyAlertsSettingDefault,
  [DIRECT_MESSAGE_SPAM_FILTER]: DirectMessageSpamFilterSettingDefault,
  [ANDROID_VIEW_NSFW_DM_COMMANDS_V2]: AndroidViewNsfwDmCommandsSettingDefault,
  [STAFF_ONLY_FIND_YOUR_FRIENDS_DELETION]: StaffOnlyFindYourFriendsDeletionSettingDefault,
  [SYNC_CONTACTS]: SyncContactsSettingDefault,
  [SYNC_CONTACTS_NAME]: SyncContactsNameSettingDefault,
  [DISCOVERY_BY_PHONE]: DiscoveryByPhoneSettingDefault,
  [DISCOVERY_BY_EMAIL]: DiscoveryByEmailSettingDefault,
  [IOS_CONVERSATION_SUGGESTIONS]: IOSConversationSuggestionsSettingDefault,
  [PROFILE_PRIVACY]: ProfilePrivacySettingDefault,
  [USE_DATA_TO_IMPROVE_DISCORD]: UseDataToImproveDiscordSettingDefault,
  [USE_DATA_TO_CUSTOMIZE_DISCORD]: UseDataToCustomizeDiscordSettingDefault,
  [REQUEST_YOUR_DATA]: RequestYourDataSettingDefault,
  [FAMILY_CENTER]: FamilyCenterSettingDefault,
  [FAMILY_CENTER_PARENTAL_CONTROLS_SETTINGS]: FamilyCenterSettingParentalControlsSettingDefault,
  [FAMILY_CENTER_SCHEDULE_DOWNTIME]: FamilyCenterScheduleDowntimeSettingDefault,
  [AUTHORIZED_APPS]: AuthorizedAppsSettingDefault,
  [AUTHORIZED_APP]: AuthorizedAppSettingDefault,
  [AUTHORIZED_APP_PERMISSIONS]: AuthorizedAppPermissionsSettingDefault,
  [DEVICES]: DevicesSettingDefault,
  [CONNECTIONS]: ConnectionsSettingDefault,
  [CLIPS]: ClipsSettingDefault,
  [CLIPS_OPT_OUT_OF_VOICE_RECORDING]: ClipsOptOutOfVoiceRecordingSettingDefault,
  [SEND_FRIEND_REQUESTS]: FriendRequestsEveryoneSettingDefault,
  [SAFETY_SEND_FRIEND_REQUESTS_EVERYONE]: FriendRequestsEveryoneSettingDefault,
  [SAFETY_SEND_FRIEND_REQUESTS_MUTUAL_FRIENDS]: FriendRequestsMutualFriendsSettingDefault,
  [SAFETY_SEND_FRIEND_REQUESTS_MUTUAL_GUILDS]: FriendRequestsMutualGuildsSettingDefault,
  [SCAN_QR_CODE]: ScanQrCodeSettingDefault,
  [PREMIUM]: PremiumSettingDefault,
  [PREMIUM_MANAGE_PLAN]: PremiumManagePlanSettingDefault,
  [PREMIUM_MANAGE_SUBSCRIPTIONS]: PremiumManageSubscriptionsSettingDefault,
  [PREMIUM_PLAN_SELECT]: PremiumPlanSelectSettingDefault,
  [PREMIUM_GUILD_BOOSTING]: PremiumGuildBoostingSettingDefault,
  [PREMIUM_GIFTING]: PremiumGiftingSettingDefault,
  [QUEST_HOME]: defs_QuestHomeSettingDefault,
  [QUEST_PREVIEW_TOOL]: QuestPreviewToolSettingDefault,
  [GUILD_ROLE_SUBSCRIPTIONS]: GuildRoleSubscriptionsSettingDefault,
  [GUILD_ROLE_SUBSCRIPTIONS_CANCEL]: GuildRoleSubscriptionsCancelSettingDefault,
  [PREMIUM_RESTORE_SUBSCRIPTION]: PremiumRestoreSubscriptionSettingDefault,
  [VOICE]: VoiceSettingDefault,
  [INPUT_MODE]: InputModeSettingDefault,
  [AUTO_VOICE_SENSITIVITY]: AutoVoiceSensitivitySettingDefault,
  [VOICE_SENSITIVITY]: VoiceSensitivitySettingDefault,
  [OUTPUT_VOLUME]: OutputVolumeSettingDefault,
  [STREAM_OUTPUT_VOLUME]: StreamOutputVolumeSettingDefault,
  [SOUNDBOARD_VOLUME]: SoundboardVolumeSettingDefault,
  [ANDROID_MOBILE_OVERLAY]: AndroidMobileOverlaySettingDefault,
  [NOISE_SUPPRESSION_KRISP]: NoiseSuppressionKrispSettingDefault,
  [NOISE_SUPPRESSION]: NoiseSuppressionSettingDefault,
  [ECHO_CANCELLATION]: EchoCancellationSettingDefault,
  [SIDECHAIN_COMPRESSION]: SidechainCompressionSettingDefault,
  [AUTOMATIC_GAIN_CONTROL]: AutomaticGainControlSettingDefault,
  [ADVANCED_VOICE_ACTIVITY]: AdvancedVoiceActivitySettingDefault,
  [APPEARANCE]: AppearanceSettingDefault,
  [APPEARANCE_THEME_PICKER]: AppearanceThemePickerSettingDefault,
  [SAME_AS_DEVICE_THEME]: SameAsDeviceThemeSettingDefault,
  [LIGHT_MODE_THEME_PICKER]: LightModeThemeSettingDefault,
  [DARK_MODE_THEME_PICKER]: DarkModeThemeSettingDefault,
  [SYNC_THEME]: SyncThemeSettingDefault,
  [DEFAULT_GUILD_THEME_PREFERENCE]: DefaultGuildThemePreferenceSettingDefault,
  [ANDROID_FONT_SCALE]: AndroidFontScaleSettingDefault,
  [ANDROID_CLASSIC_CHAT_FONT_SCALE]: AndroidClassicChatFontScaleSettingDefault,
  [DMS_MESSAGE_PREVIEWS]: DmsMessagePreviewsSettingDefault,
  [DMS_HAPPENING_NOW_CARDS]: DmsHappeningNowCardsSettingDefault,
  [EXACT_SEARCH_RESULT_COUNTS]: ExactSearchResultCountsSettingDefault,
  [GAME_MENTIONS_AUTOCOMPLETE]: GameMentionsAutocompleteSettingDefault,
  [FAVORITES_GUILD_TOGGLE]: FavoritesGuildToggleSettingDefault,
  [ACCESSIBILITY]: AccessibilitySettingDefault,
  [ROLE_COLORS]: RoleColorsSettingDefault,
  [OFFICIAL_MESSAGE_STYLE]: OfficialMessageStyleSettingDefault,
  [DISPLAY_NAME_STYLES_ROUTE]: DisplayNameStylesRouteSettingDefault,
  [TYPING_INDICATOR]: TypingIndicatorSettingDefault,
  [DISPLAY_NAME_STYLES_ACCESSIBILITY]: DisplayNameStylesAccessibilitySettingDefault,
  [YOU_BAR_NAMEPLATE_ACCESSIBILITY]: YouBarNameplateAccessibilitySettingDefault,
  [YOU_BAR_AVATAR_DECO_ACCESSSIBILITY]: YouBarAvatarDecoAccessibilitySettingDefault,
  [SHOW_LINK_DECORATIONS]: ShowLinkDecorationsSettingDefault,
  [SHOW_ON_OFF_INDICATORS]: EnableSwitchIconsSettingDefault,
  [CONTRAST_MODE]: ContrastModeSettingDefault,
  [REDUCE_SATURATION]: ReduceSaturationSettingDefault,
  [SYNC_PROFILE_COLORS]: SyncProfileColorsSettingDefault,
  [ENABLE_REDUCED_MOTION]: EnableReducedMotionSettingDefault,
  [SYNC_REDUCED_MOTION_WITH_DEVICE]: SyncReducedMotionWithDeviceSettingDefault,
  [AUTOPLAY_GIF]: AutoplayGifSettingDefault,
  [ANIMATE_EMOJI]: AnimateEmojiSettingDefault,
  [ANIMATE_STICKERS]: AnimateStickersSettingDefault,
  [LANGUAGE]: LanguageSettingDefault,
  [CHAT]: ChatSettingDefault,
  [DISPLAY_MEDIA_LINKS]: DisplayMediaLinksSettingDefault,
  [DISPLAY_MEDIA_UPLOADS]: DisplayMediaUploadsSettingDefault,
  [IMAGE_DESCRIPTIONS]: ImageDescriptionsSettingDefault,
  [VIDEO_UPLOAD_QUALITY]: VideoUploadQualitySettingDefault,
  [DATA_SAVING_MODE]: DataSavingModeSettingDefault,
  [SAVE_CAMERA_UPLOADS_TO_DEVICE]: SaveCameraUploadsToDeviceSettingDefault,
  [EMBED_AND_LINK_PREVIEWS]: EmbedAndLinkPreviewsSettingDefault,
  [EMOJI_REACTIONS_ON_MESSAGES]: EmojiReactionsOnMessagesSettingDefault,
  [CHAT_EMOJI_EMOTICONS]: ChatEmojiEmoticonsSettingDefault,
  [STICKER_AUTOCOMPLETE]: StickerAutocompleteSettingDefault,
  [TEXT_AND_MEDIA_SYNC]: TextAndMediaSyncSettingDefault,
  [TIMESTAMP_HOUR_CYCLE]: TimestampHourCycleSettingDefault,
  [SWIPE_RIGHT_TO_LEFT]: SwipeRightToLeftSettingDefault,
  [CHAT_GESTURES]: ChatGestureSettingsDefault,
  [WEB_BROWSER]: WebBrowserSettingDefault,
  [SELECT_WEB_BROWSER]: SelectWebBrowserSettingDefault,
  [NOTIFICATIONS]: NotificationsSettingDefault,
  [IN_APP_NOTIFICATIONS]: InAppNotificationsSettingDefault,
  [SYSTEM_NOTIFICATIONS]: SystemNotificationsSettingDefault,
  [REACTION_NOTIFICATIONS]: ReactionNotificationsSettingsDefault,
  [CUSTOM_STATUS_NOTIFICATIONS]: CustomStatusNotificationSettingsDefault,
  [IOS_NATIVE_PHONE_INTEGRATION]: IOSNativePhoneIntegrationSettingDefault,
  [ANDROID_MESSAGE_NOTIFICATIONS]: AndroidMessageNotificationsSettingDefault,
  [ANDROID_NOTIFICATION_LIGHTS]: AndroidNotificationLightsSettingDefault,
  [ANDROID_NOTIFICATION_VIBRATIONS]: AndroidNotificationVibrationsSettingDefault,
  [ANDROID_NOTIFICATION_SOUNDS]: AndroidNotificationSoundsSettingDefault,
  [IN_APP_MESSAGE_SOUNDS]: InAppMessageSoundsSettingDefault,
  [FRIEND_STREAM_NOTIFICATIONS]: FriendStreamNotificationsSettingDefault,
  [FRIEND_ANNIVERSARY_NOTIFICATIONS]: FriendAnniversaryNotificationSettingDefault,
  [VOICE_ACTIVITY_NOTIFICATIONS]: VoiceActivityNotificationSettingDefault,
  [FRIEND_ONLINE_NOTIFICATIONS]: FriendOnlineNotificationSettingDefault,
  [FRIEND_GAMING_ACTIVITY_NOTIFICATIONS]: FriendGamingActivityNotificationSettingDefault,
  [PROFILE_UPDATES_NOTIFICATIONS]: ProfileUpdatesNotificationSettingDefault,
  [SERVER_TRENDING_NOTIFICATIONS]: ServerTrendingNotificationSettingDefault,
  [UPCOMING_SERVER_EVENT_NOTIFICATIONS]: UpcomingServerEventNotificationSettingDefault,
  [SUMMARY_REMINDER_NOTIFICATIONS]: SummaryReminderNotificationSettingDefault,
  [SCREEN_DOWNTIME_REMINDER_NOTIFICATIONS]: ScreenDowntimeReminderSettingDefault,
  [SCREEN_DOWNTIME_SCHEDULE_NOTIFICATIONS]: ScreenDowntimeScheduleSettingDefault,
  [COMMUNITY_ACTIVITY_ALERTS]: CommunityActivityAlertsSettingDefault,
  [HIGHLIGHT_NOTIFICATIONS]: HighlightNotificationsSettingDefault,
  [APP_ICONS]: AppIconsSettingDefault,
  [ADVANCED]: AdvancedSettingDefault,
  [DEVELOPER_MODE]: DeveloperModeSettingDefault,
  [LAUNCHPAD]: LaunchpadSettingDefault,
  [CHANNEL_LIST_LAYOUT]: ChannelListLayoutSettingDefault,
  [ICYMI_TAB]: IcymiTabSettingDefault,
  [SUPPORT]: SupportSettingDefault,
  [UPLOAD_DEBUG_LOGS]: UploadDebugLogsSettingDefault,
  [UPLOAD_INTL_DATA]: UploadIntlDataSettingDefault,
  [ACKNOWLEDGEMENTS]: AcknowledgementsSettingDefault,
  [CHANGE_LOG]: ChangeLogSettingDefault,
  [LOGOUT]: LogoutSettingDefault,
  [APP_VERSION]: AppVersionSettingDefault,
  [DEVICE_INFO]: DeviceInfoSettingDefault,
  [VIEW_DEBUG_LOGS]: ViewDebugLogsSettingDefault,
  [COPY_CLIENT_INFO]: CopyClientInfoSettingDefault,
  [CACHE_ACTIONS]: CacheActionsSettingDefault,
  [SHOW_DEV_WIDGET]: ShowDevWidgetSettingDefault,
  [SHOW_DEV_TOOLS]: ShowDevToolsSettingDefault,
  [BUG_REPORTER]: BugReporterSettingDefault,
  [INTERNAL_BUILD_ACTIVE]: InternalBuildActiveSettingDefault,
  [INTERNAL_BUILD_UPDATE]: InternalBuildUpdateSettingDefault,
  [EXPERIMENT_OVERRIDE_ACTIVE]: ExperimentOverrideActiveSettingDefault,
  [BUILD_OVERRIDE_ACTIVE]: BuildOverrideActiveSettingDefault,
  [CREATE_BUG_REPORT]: CreateBugReportSettingDefault,
  [DESIGN_SYSTEMS]: DesignSystemsSettingDefault,
  [DESIGN_SYSTEMS_TEXT]: DesignSystemsTextSettingDefault,
  [DESIGN_SYSTEMS_BUTTON]: DesignSystemsButtonSettingDefault,
  [DESIGN_SYSTEMS_LEGACY_BUTTON]: DesignSystemsLegacyButtonSettingDefault,
  [DESIGN_SYSTEMS_BUTTON_GROUP]: DesignSystemsButtonGroupSettingDefault,
  [DESIGN_SYSTEMS_ROW_BUTTON]: DesignSystemsRowButtonSettingDefault,
  [DESIGN_SYSTEMS_EXPERIMENTAL_BUTTONS]: DesignSystemsExperimentalButtonsSettingDefault,
  [DESIGN_SYSTEMS_TABLE_ROW]: DesignSystemsTableRowSettingDefault,
  [DESIGN_SYSTEMS_ALERT_MODAL]: DesignSystemsAlertModalSettingDefault,
  [DESIGN_SYSTEMS_BACKGROUND_BLUR_VIEW]: DesignSystemsBackgroundBlurViewSettingDefault,
  [DESIGN_SYSTEMS_SHADOWS]: DesignSystemsShadowsSettingDefault,
  [DESIGN_SYSTEM_SEGMENTED_CONTROL]: DesignSystemSegmentedControlSettingDefault,
  [DESIGN_SYSTEMS_TABS]: DesignSystemsTabsSettingDefault,
  [DESIGN_SYSTEMS_CONTEXT_MENU]: DesignSystemsContextMenuSettingDefault,
  [DESIGN_SYSTEMS_TOAST]: DesignSystemsToastSettingDefault,
  [DESIGN_SYSTEMS_TEXT_INPUT]: DesignSystemsTextInputSettingDefault,
  [DESIGN_SYSTEMS_TOOLTIP]: DesignSystemsTooltipSettingDefault,
  [DESIGN_SYSTEMS_COACHMARK]: DesignSystemsCoachmarkSettingDefault,
  [DESIGN_SYSTEM_STACK]: DesignSystemStackSettingDefault,
  [DESIGN_SYSTEM_BACKDROP]: DesignSystemBackdropSettingDefault,
  [DESIGN_SYSTEMS_MODAL]: DesignSystemsModalSettingDefault,
  [DESIGN_SYSTEM_PILE]: DesignSystemPileSettingDefault,
  [DESIGN_SYSTEM_SHEETS]: DesignSystemSheetsSettingDefault,
  [DESIGN_SYSTEM_FORM_PRIMITIVES]: DesignSystemFormPrimitivesSettingDefault,
  [DESIGN_SYSTEM_HAPTICS]: DesignSystemHapticsSettingDefault,
  [PREMIUM_PROFILE_CUSTOMIZATION_TRY_IT_OUT]: PremiumProfileCustomizationTryItOutSettingDefault,
  [COLLECTIBLES_SHOP]: CollectiblesShopSettingDefault,
  [COLLECTIBLES_SHOP_VIEW_ALL_CATEGORY_ITEMS]: CollectiblesShopViewAllCategoryItemsSettingDefault,
  [ENCRYPTION_VERIFIED_DEVICES]: EncryptionSettingDefault,
  [DATA_AND_PRIVACY_SECURE_FRAMES_PERSISTENT_CODES]: SecureFramesPersistentCodesSettingDefault,
  [SECURE_FRAMES_VERIFIED_DEVICES]: SecureFramesVerifiedDevicesSettingDefault,
  [USE_DATA_FOR_QUESTS]: UseDataForQuestsSettingDefault,
  [USE_DATA_FOR_QUESTS_3P]: UseDataForQuests3PSettingDefault,
  [USE_DATA_FOR_QUESTS_SPONSORED_CONTENT]: UseDataForQuestsSetting.UseDataForQuestsSponsoredContentSetting,
  [USE_DATA_FOR_QUESTS_3P_SPONSORED_CONTENT]: UseDataForQuests3PSetting.UseDataForQuests3PSponsoredContentSetting,
  [SPONSORED_CONTENT_PREFERENCES]: SponsoredContentPreferencesSettingDefault,
  [MANAGE_SPONSORED_CONTENT]: ManageSponsoredContentSettingDefault,
  [DISABLE_STREAM_PREVIEWS]: DisableStreamPreviewsSettingDefault,
  [DATA_AND_PRIVACY]: DataAndPrivacySettingDefault,
  [CONTENT_AND_SOCIAL]: ContentAndSocialSettingDefault,
  [SAFETY_TERMS_OF_SERVICE]: SafetyTermsOfServiceSettingDefault,
  [SAFETY_PRIVACY_POLICY]: SafetyPrivacyPolicySettingDefault,
  [SAFETY_GUILD_SETTING_GUILD_SELECT]: SafetyGuildSettingGuildSelectDefault,
  [SAFETY_GUILD_SETTING_DIRECT_MESSAGES]: SafetyGuildSettingDirectMessagesDefault,
  [SAFETY_GUILD_SETTING_MESSAGE_REQUESTS]: SafetyGuildSettingMessageRequestsDefault,
  [GUILD_SETTING_ACTIVITY_STATUS]: GuildSettingActivityStatusDefault,
  [GUILD_SETTING_ACTIVITY_JOINING]: GuildSettingActivityJoiningDefault,
  [REACT_COMPILER]: ReactCompilerSettingDefault,
  [CONTENT_AND_SOCIAL_DISCORD]: ContentAndSocialDiscordRouteSettingDefault,
  [CONNECTED_GAMES]: ConnectedGamesRouteSettingDefault,
  [ALLOW_GAME_FRIEND_DMS]: AllowGameFriendDMsSettingDefault,
  [IN_GAME_DMS]: InGameDMsSettingDefault,
  [DOUBLE_TAP_EMOJI]: DoubleTapEmojiSettingDefault,
  [DOUBLE_TAP_TO_REACT_ENABLED]: DoubleTapToReactSettingDefault,
  [PARENTAL_CONTROLS_SENSITIVE_CONTENT_FILTERS]: ParentalControlsSensitiveContentFilterSettingDefault,
  [PARENTAL_CONTROLS_DIRECT_MESSAGES]: ParentalControlsDirectMessagesDefault,
  [PARENTAL_CONTROLS_MESSAGE_REQUESTS]: ParentalControlsMessageRequestsDefault,
  [PARENTAL_CONTROLS_FRIEND_REQUESTS_EVERYONE]: ParentalControlsFriendRequestsEveryoneSettingDefault,
  [PARENTAL_CONTROLS_FRIEND_REQUESTS_MUTUAL_FRIENDS]: ParentalControlsFriendRequestsMutualFriendsSettingDefault,
  [PARENTAL_CONTROLS_FRIEND_REQUESTS_MUTUAL_GUILDS]: ParentalControlsFriendRequestsMutualGuildsSettingDefault,
  [PARENTAL_CONTROLS_EXPLICIT_MEDIA_FILTERS_FRIENDS_DMS]: ParentalControlsExplicitMediaFiltersFriendsDMsSettingDefault,
  [PARENTAL_CONTROLS_EXPLICIT_MEDIA_FILTERS_NON_FRIENDS_DMS]:
    ParentalControlsExplicitMediaFiltersNonFriendsDMsSettingDefault,
  [PARENTAL_CONTROLS_GORE_MEDIA_FILTERS_FRIENDS_DMS]: ParentalControlsGoreMediaFiltersFriendsDMsSettingDefault,
  [PARENTAL_CONTROLS_GORE_MEDIA_FILTERS_NON_FRIENDS_DMS]: ParentalControlsGoreMediaFiltersNonFriendsDMsSettingDefault,
  [PARENTAL_CONTROLS_DATA_USAGE_STATISTICS]: ParentalControlsUseDataToImproveDiscordSettingDefault,
  [PARENTAL_CONTROLS_DATA_USAGE_PERSONALIZATION]: ParentalControlsUseDataToCustomizeDiscordSettingDefault,
  [PARENTAL_CONTROLS_DATA_USAGE_QUESTS]: ParentalControlsUseDataForQuestsSettingDefault,
  [PARENTAL_CONTROLS_DATA_USAGE_QUESTS_3P]: ParentalControlsUseDataForQuests3PSettingDefault,
  [ACTIVITY_PRIVACY_SHARE_MY_ACTIVITY]: ActivityPrivacyShareMyActivitySettingDefault,
  [ACTIVITY_PRIVACY_DEFAULT_SHARING]: ActivityPrivacyDefaultSharingSettingDefault,
  [FRIEND_REQUEST_NOTES]: FriendRequestsNotesSettingDefault,
  [NOTIFY_FRIENDS_ON_COME_ONLINE]: NotifyFriendsOnComeOnlineSettingDefault,
  [NOTIFY_FRIENDS_ON_PROFILE_UPDATE]: NotifyFriendsOnProfileUpdateSettingDefault,
});
const result = size.fileFinishedImporting("modules/user_settings/core/native/SettingsRendererConfig.tsx");

export const SETTING_RENDERER_CONFIG = frozen;
