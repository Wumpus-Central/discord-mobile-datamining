// === Module 15494: FavoritesGuildCoachmarkMenuItemContent ===

// Module 15494 (FavoritesGuildCoachmarkMenuItemContent)
import Layer from "Layer" /* 7126 */;
import items12 from "items1" /* 9990 */;
import noop from "noop" /* 19 */;
import initializeFromUserSettings from "initializeFromUserSettings" /* 1394 */;
import { ContentDismissActionType } from "ContentDismissActionType" /* 1388 */;
import { jsx } from "jsxProd" /* 21 */;

require = fn;
function FavoritesGuildCoachmarkMenuItemContent(arg0) {
  let stateFromStores;
  let markPopoverAsDismissed;
  let callback;
  let callback1;
  ({ targetRef, channelType } = arg0);
  const items = [callback1];
  stateFromStores = stateFromStores(markPopoverAsDismissed[7]).useStateFromStores(items, () => callback1.hasStoredFavorites());
  let obj = stateFromStores(markPopoverAsDismissed[7]);
  const favoritesMenuItemPopoverDismissibleContent = stateFromStores(markPopoverAsDismissed[5]).useFavoritesMenuItemPopoverDismissibleContent(set.has(channelType));
  const shouldShowPopover = favoritesMenuItemPopoverDismissibleContent.shouldShowPopover;
  markPopoverAsDismissed = favoritesMenuItemPopoverDismissibleContent.markPopoverAsDismissed;
  const items1 = [markPopoverAsDismissed];
  callback = callback.useCallback(() => {
    markPopoverAsDismissed(ContentDismissActionType.USER_DISMISS);
  }, items1);
  const items2 = [markPopoverAsDismissed];
  callback1 = callback.useCallback(() => {
    markPopoverAsDismissed(ContentDismissActionType.TAKE_ACTION);
  }, items2);
  const items3 = [shouldShowPopover, stateFromStores, callback, callback1];
  const memo = callback.useMemo(() => {
    const obj = { visible: shouldShowPopover, position: "bottom", title: null, description: null, onDismiss: null, renderImgComponent: "r", buttonLabel: "tokenize must be called with bankDetails or bankLogin.", onButtonPress: "M16 6h-1v6h1V6Z" };
    const intl = stateFromStores(markPopoverAsDismissed[8]).intl;
    const tmp4 = shouldShowPopover(markPopoverAsDismissed[9]);
    if (stateFromStores) {
      let TWuDTt = tmp4.TWuDTt;
      let tmp6 = shouldShowPopover;
    } else {
      TWuDTt = tmp4["25YCHl"];
      tmp6 = shouldShowPopover;
    }
    obj[2] = intl.string(TWuDTt);
    const intl2 = stateFromStores(markPopoverAsDismissed[8]).intl;
    obj[3] = intl2.string(tmp6(markPopoverAsDismissed[9]).Ztl9ht);
    obj[4] = callback;
    const intl3 = stateFromStores(markPopoverAsDismissed[8]).intl;
    obj[6] = intl3.string(tmp6(markPopoverAsDismissed[9])["+h9aza"]);
    obj[7] = callback1;
    return obj;
  }, items3);
  const obj2 = stateFromStores(markPopoverAsDismissed[5]);
  const coachmark = stateFromStores(markPopoverAsDismissed[10]).useCoachmark(targetRef, memo);
  return null;
}
let items = [, , ];
({ GUILD_TEXT: arr[0], GUILD_ANNOUNCEMENT: arr[1], GUILD_FORUM: arr[2] } = require("ME").ChannelTypes);
const set = new Set(items);
const result = require("obj132").fileFinishedImporting("modules/favorites/native/onboarding/FavoritesGuildCoachmarkMenuItem.tsx");

export default function FavoritesGuildCoachmarkMenuItem(arg0) {
  let obj = items12;
  let tmp3 = null;
  if (obj.useShouldRenderFavoritesMenuItemPopover()) {
    obj = {};
    const merged = Object.assign(arg0);
    obj[1] = <FavoritesGuildCoachmarkMenuItemContent />;
    tmp3 = jsx(Layer.LayerScope, {});
  }
  return tmp3;
};