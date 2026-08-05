// discord_app/modules/favorites/native/onboarding/FavoritesGuildCoachmarkMenuItem.tsx
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import initializeFromUserSettings from "initializeFromUserSettings";
import { ContentDismissActionType } from "ContentDismissActionType";
import { jsx } from "jsxProd";
import set from "initializeFromUserSettings";

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
  const items = [initializeFromUserSettings];
  stateFromStores = stateFromStores(markPopoverAsDismissed[7]).useStateFromStores(items, () => initializeFromUserSettings.hasStoredFavorites());
  let obj = stateFromStores(markPopoverAsDismissed[7]);
  const tmp = stateFromStores;
  const tmp2 = markPopoverAsDismissed;
  const isFavoritesGuildSelected = stateFromStores(markPopoverAsDismissed[8]).useIsFavoritesGuildSelected();
  let hasItem = shouldShowPopover(markPopoverAsDismissed[9])();
  const obj2 = stateFromStores(markPopoverAsDismissed[8]);
  if (hasItem) {
    hasItem = set.has(channelType);
  }
  if (hasItem) {
    hasItem = !isFavoritesGuildSelected;
  }
  const favoritesMenuItemPopoverDismissibleContent = stateFromStores(markPopoverAsDismissed[6]).useFavoritesMenuItemPopoverDismissibleContent(hasItem);
  shouldShowPopover = favoritesMenuItemPopoverDismissibleContent.shouldShowPopover;
  markPopoverAsDismissed = favoritesMenuItemPopoverDismissibleContent.markPopoverAsDismissed;
  const items1 = [markPopoverAsDismissed];
  callback = callback1.useCallback(() => {
    markPopoverAsDismissed(outer1_6.USER_DISMISS);
  }, items1);
  const items2 = [markPopoverAsDismissed];
  callback1 = callback1.useCallback(() => {
    markPopoverAsDismissed(outer1_6.TAKE_ACTION);
  }, items2);
  const items3 = [shouldShowPopover, stateFromStores, callback, callback1];
  const memo = callback1.useMemo(() => {
    const obj = { visible: shouldShowPopover, position: "bottom", title: null, description: null, onDismiss: null, renderImgComponent: null, buttonLabel: null, onButtonPress: null };
    const intl = stateFromStores(markPopoverAsDismissed[10]).intl;
    const tmp4 = shouldShowPopover(markPopoverAsDismissed[11]);
    if (stateFromStores) {
      let tmp5 = tmp3;
    } else {
      tmp5 = tmp3;
    }
    obj[2] = intl.string(_25YCHl);
    const intl2 = tmp(tmp2[10]).intl;
    obj[3] = intl2.string(tmp5(markPopoverAsDismissed[11]).Ztl9ht);
    obj[4] = callback;
    obj[5] = function renderImgComponent() {
      return callback2(callback(table[12]), {});
    };
    const intl3 = tmp(tmp2[10]).intl;
    obj[6] = intl3.string(tmp5(markPopoverAsDismissed[11])["+h9aza"]);
    obj[7] = callback1;
    return obj;
  }, items3);
  const obj3 = stateFromStores(markPopoverAsDismissed[6]);
  const coachmark = tmp(tmp2[13]).useCoachmark(targetRef, memo);
  return null;
}
let items = [, , ];
({ GUILD_TEXT: arr[0], GUILD_ANNOUNCEMENT: arr[1], GUILD_FORUM: arr[2] } = require("ME").ChannelTypes);
let set = new Set(items);
const result = set.fileFinishedImporting("modules/favorites/native/onboarding/FavoritesGuildCoachmarkMenuItem.tsx");

export default function FavoritesGuildCoachmarkMenuItem(arg0) {
  let obj = require(9635) /* items1 */;
  const isFavoritesMenuItemPopoverPending = obj.useIsFavoritesMenuItemPopoverPending();
  const tmp2 = callback(React.useState(isFavoritesMenuItemPopoverPending), 2);
  const first = tmp2[0];
  let tmp4 = isFavoritesMenuItemPopoverPending;
  if (isFavoritesMenuItemPopoverPending) {
    tmp4 = !first;
  }
  if (tmp4) {
    tmp2[1](true);
  }
  if (isFavoritesMenuItemPopoverPending) {
    obj = {};
    const merged = Object.assign(arg0);
    let tmp6 = <FavoritesGuildCoachmarkMenuItemContent />;
  } else {
    tmp6 = null;
  }
  return tmp6;
};