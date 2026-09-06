// discord_app/errors/index.tsx
import BillingErrorDefault from "BillingError.tsx";
import errors_V6OrEarlierAPIErrorDefault from "V6OrEarlierAPIError.tsx";
import APIErrorDefault from "APIError.tsx";
import StripeErrorDefault from "StripeError.tsx";
import NativeDispatchErrorDefault from "NativeDispatchError.tsx";
import AppliedGuildBoostErrorDefault from "AppliedGuildBoostError.tsx";
import ClientOutdatedAcceptGiftErrorDefault from "ClientOutdatedAcceptGiftError.tsx";
import UploadVoiceDebugLogsError from "UploadVoiceDebugLogsError.tsx";
import size from "../../_runtime/metro/00002__.js";

const UploadVoiceDebugLogsErrorDefault = UploadVoiceDebugLogsError;

const result = size.fileFinishedImporting("errors/index.tsx");

export const V6OrEarlierAPIError = errors_V6OrEarlierAPIErrorDefault;
export const APIError = APIErrorDefault;
export const BillingError = BillingErrorDefault;
export const StripeError = StripeErrorDefault;
export const NativeDispatchError = NativeDispatchErrorDefault;
export const AppliedGuildBoostError = AppliedGuildBoostErrorDefault;
export const ClientOutdatedAcceptGiftError = ClientOutdatedAcceptGiftErrorDefault;
export const UploadVoiceDebugLogsError = UploadVoiceDebugLogsErrorDefault;
export const UploadErrorCodes = UploadVoiceDebugLogsError.UploadErrorCodes;
