// === Module 16636: FavoritesGuildCoachmarkMenuItem ===

// Module 16636 (FavoritesGuildCoachmarkMenuItem)
import util from "util" /* 1115 */;
import _modDef3358 from "module_3358" /* 3358 */;
import LayerScope from "LayerScope" /* 7487 */;
import noop from "module_19" /* 19 */;
import FavoriteStore from "FavoriteStore" /* 2045 */;

require = fn;
function FavoritesGuildCoachmarkMenuItemContent(arg0) {
  let stateFromStores;
  let markPopoverAsDismissed;
  let onDismiss;
  let callback1;
  ({ targetRef, channelType } = arg0);
  const items = [callback1];
  stateFromStores = stateFromStores(markPopoverAsDismissed[7]).useStateFromStores(items, () => callback1.hasStoredFavorites());
  let obj = stateFromStores(markPopoverAsDismissed[7]);
  const favoritesMenuItemPopoverDismissibleContent = stateFromStores(markPopoverAsDismissed[5]).useFavoritesMenuItemPopoverDismissibleContent(set.has(channelType));
  const shouldShowPopover = favoritesMenuItemPopoverDismissibleContent.shouldShowPopover;
  markPopoverAsDismissed = favoritesMenuItemPopoverDismissibleContent.markPopoverAsDismissed;
  const items1 = [markPopoverAsDismissed];
  onDismiss = onDismiss.useCallback(() => {
    markPopoverAsDismissed(ContentDismissActionType.USER_DISMISS);
  }, items1);
  const items2 = [markPopoverAsDismissed];
  callback1 = onDismiss.useCallback(() => {
    markPopoverAsDismissed(ContentDismissActionType.TAKE_ACTION);
  }, items2);
  const items3 = [shouldShowPopover, stateFromStores, onDismiss, callback1];
  const memo = onDismiss.useMemo(() => {
    const obj = { visible: shouldShowPopover, position: "bottom", title: null, description: null, onDismiss: null, renderImgComponent: "r", buttonLabel: "M15 6H8v1h7V6ZM10 1H9v1h1V1ZM14 1h-1v1h1V1ZM13 2h-1v1h1V2ZM12 3h-1v1h1V3ZM11 4h-1v1h1V4ZM10 5H9v1h1V5ZM15 9h-2v1h2V9ZM12 11h-2v1h2v-1ZM13 10h-1v1h1v-1ZM9 13H7v1h2v-1ZM10 12H9v1h1v-1ZM6 15H3v1h3v-1ZM8 9H1v1h7V9ZM7 14H6v1h1v-1ZM3 14H2v1h1v-1ZM4 13H3v1h1v-1ZM5 12H4v1h1v-1ZM6 11H5v1h1v-1ZM7 10H6v1h1v-1Z", onButtonPress: "#000" };
    const intl = util.intl;
    const tmp4 = _modDef3358;
    if (stateFromStores) {
      let TWuDTt = tmp4.TWuDTt;
      let tmp6 = importDefault;
    } else {
      TWuDTt = tmp4["25YCHl"];
      tmp6 = importDefault;
    }
    obj.title = intl.string(TWuDTt);
    const intl2 = util.intl;
    obj.description = intl2.string(tmp6(3358).Ztl9ht);
    obj.onDismiss = onDismiss;
    const intl3 = util.intl;
    obj.buttonLabel = intl3.string(tmp6(3358)["+h9aza"]);
    obj.onButtonPress = callback1;
    return obj;
  }, items3);
  const obj2 = stateFromStores(markPopoverAsDismissed[5]);
  const coachmark = stateFromStores(markPopoverAsDismissed[10]).useCoachmark(targetRef, memo);
  return null;
}
const ContentDismissActionType = fn(2039).ContentDismissActionType;
const jsx = fn(21).jsx;
let items = [, , ];
({ GUILD_TEXT: arr[0], GUILD_ANNOUNCEMENT: arr[1], GUILD_FORUM: arr[2] } = fn(1074).ChannelTypes);
const set = new Set(items);
const size = fn(2);
const result = size.fileFinishedImporting("modules/favorites/native/onboarding/FavoritesGuildCoachmarkMenuItem.tsx");

export default function FavoritesGuildCoachmarkMenuItem(arg0) {
  let tmp3 = null;
  if (obj.useShouldRenderFavoritesMenuItemPopover()) {
    const obj2 = { zIndex: 1, children: null };
    const obj3 = {};
    const merged = Object.assign(arg0);
    obj2.children = <FavoritesGuildCoachmarkMenuItemContent />;
    tmp3 = jsx(LayerScope.LayerScope, { zIndex: 1, children: null });
  }
  return tmp3;
};