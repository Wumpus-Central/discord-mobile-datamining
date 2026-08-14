// discord_app/modules/favorites/native/onboarding/FavoritesGuildCoachmarkMenuItem.tsx
import noop from "noop";
import initializeFromUserSettings from "initializeFromUserSettings";
import { ContentDismissActionType } from "ContentDismissActionType";
import { jsx } from "jsxProd";
import set from "ME";
import { Layer } from "../../../../design/components/Layers/native/LayerScope.native.tsx";
import { items1 } from "../../FavoritesDismissibleContent.tsx";

const require = arg1;
function FavoritesGuildCoachmarkMenuItemContent(arg0) {
  let channelType;
  let targetRef;
  let stateFromStores;
  let shouldShowPopover;
  let markPopoverAsDismissed;
  let callback;
  let callback1;
  ({ targetRef, channelType } = arg0);
  const items = [callback1];
  stateFromStores = stateFromStores(markPopoverAsDismissed[7]).useStateFromStores(items, () => callback1.hasStoredFavorites());
  let obj = stateFromStores(markPopoverAsDismissed[7]);
  const favoritesMenuItemPopoverDismissibleContent = stateFromStores(markPopoverAsDismissed[5]).useFavoritesMenuItemPopoverDismissibleContent(set.has(channelType));
  shouldShowPopover = favoritesMenuItemPopoverDismissibleContent.shouldShowPopover;
  markPopoverAsDismissed = favoritesMenuItemPopoverDismissibleContent.markPopoverAsDismissed;
  const items1 = [markPopoverAsDismissed];
  callback = callback.useCallback(() => {
    markPopoverAsDismissed(outer1_5.USER_DISMISS);
  }, items1);
  const items2 = [markPopoverAsDismissed];
  callback1 = callback.useCallback(() => {
    markPopoverAsDismissed(outer1_5.TAKE_ACTION);
  }, items2);
  const items3 = [shouldShowPopover, stateFromStores, callback, callback1];
  const memo = callback.useMemo(() => {
    const obj = { visible: shouldShowPopover, position: "bottom", title: null, description: null, onDismiss: null, renderImgComponent: "r", buttonLabel: "tokenize must be called with bankDetails or bankLogin, not both.", onButtonPress: "M14 0h-3v1h3V0ZM4 15H1v1h3v-1ZM6 14H4v1h2v-1ZM3 2H1v1h2V2ZM4 4v1h1v1h1V4H4ZM4 7H3v2h1V7ZM3 9H2v2h1V9ZM2 11H1v2h1v-2ZM1 13H0v2h1v-2ZM10 11H8v1h2v-1ZM10 0H1v1h9V0Z" };
    const intl = stateFromStores(markPopoverAsDismissed[8]).intl;
    const tmp4 = shouldShowPopover(markPopoverAsDismissed[9]);
    if (stateFromStores) {
      let tmp5 = tmp3;
    } else {
      tmp5 = tmp3;
    }
    obj[2] = intl.string(_25YCHl);
    const intl2 = tmp(tmp2[8]).intl;
    obj[3] = intl2.string(tmp5(markPopoverAsDismissed[9]).Ztl9ht);
    obj[4] = callback;
    const intl3 = tmp(tmp2[8]).intl;
    obj[6] = intl3.string(tmp5(markPopoverAsDismissed[9])["+h9aza"]);
    obj[7] = callback1;
    return obj;
  }, items3);
  const obj2 = stateFromStores(markPopoverAsDismissed[5]);
  const coachmark = stateFromStores(markPopoverAsDismissed[10]).useCoachmark(targetRef, memo);
  return null;
}
let items = [, , ];
({ GUILD_TEXT: arr[0], GUILD_ANNOUNCEMENT: arr[1], GUILD_FORUM: arr[2] } = require("ME").ChannelTypes);
let set = new Set(items);
const result = set.fileFinishedImporting("modules/favorites/native/onboarding/FavoritesGuildCoachmarkMenuItem.tsx");

export default function FavoritesGuildCoachmarkMenuItem(arg0) {
  let obj = items1;
  let tmp3 = null;
  if (obj.useShouldRenderFavoritesMenuItemPopover()) {
    obj = { zIndex: 1, children: null };
    obj = {};
    const merged = Object.assign(arg0);
    obj[1] = <FavoritesGuildCoachmarkMenuItemContent />;
    tmp3 = jsx(Layer.LayerScope, {});
  }
  return tmp3;
};