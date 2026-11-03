// discord_app/modules/age_assurance/age_notice/native/AgeNoticeLazy.tsx
import AgeNoticeVisibility from "../AgeNoticeVisibility.tsx";
import useShowAgeNoticePromoSheet from "useShowAgeNoticePromoSheet.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/age_assurance/age_notice/native/AgeNoticeLazy.tsx");

export const useShouldShowAgeNotice = AgeNoticeVisibility.useShouldShowAgeNotice;
export const useIsTinyBroncoEligible = useShowAgeNoticePromoSheet.useIsTinyBroncoEligible;
export const useShowTinyBroncoPromoSheet = useShowAgeNoticePromoSheet.useShowTinyBroncoPromoSheet;
