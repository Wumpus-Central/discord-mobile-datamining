// discord_app/modules/tiny_bronco/native/TinyBroncoLazy.tsx
import TinyBroncoNoticeVisibility from "../TinyBroncoNoticeVisibility.tsx";
import useShowTinyBroncoPromoSheet from "useShowTinyBroncoPromoSheet.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/tiny_bronco/native/TinyBroncoLazy.tsx");

export const useShouldShowAgeNotice = TinyBroncoNoticeVisibility.useShouldShowAgeNotice;
export const useIsTinyBroncoEligible = useShowTinyBroncoPromoSheet.useIsTinyBroncoEligible;
export const useShowTinyBroncoPromoSheet = useShowTinyBroncoPromoSheet.useShowTinyBroncoPromoSheet;
