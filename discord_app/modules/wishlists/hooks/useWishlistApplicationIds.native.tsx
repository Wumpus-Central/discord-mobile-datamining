// discord_app/modules/wishlists/hooks/useWishlistApplicationIds.native.tsx
import noop from "noop";
import { COLLECTIBLES_APPLICATION_ID as closure_1 } from "ME";

const result = require("set").fileFinishedImporting("modules/wishlists/hooks/useWishlistApplicationIds.native.tsx");

export const useWishlistApplicationIds = function useWishlistApplicationIds(userId) {
  return React.useMemo(() => {
    const items = [closure_1];
    return items;
  }, []);
};