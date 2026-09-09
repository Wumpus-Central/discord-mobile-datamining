// === Module 16267: FavoritesGuildCoachmarkMenuItem ===

// Module 16267 (FavoritesGuildCoachmarkMenuItem)
import util from "util" /* 1114 */;
import _modDef3236 from "module_3236" /* 3236 */;
import LayerScope from "LayerScope" /* 7170 */;
import FavoritesDismissibleContent from "FavoritesDismissibleContent" /* 10272 */;
import noop from "module_19" /* 19 */;
import FavoriteStore from "FavoriteStore" /* 1960 */;

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
    const obj = { visible: shouldShowPopover, position: "bottom", title: null, description: null, onDismiss: null, renderImgComponent: "r", buttonLabel: "M7 0v1h2V0H7Z", onButtonPress: "#000" };
    const intl = util.intl;
    const tmp4 = _modDef3236;
    if (stateFromStores) {
      let TWuDTt = tmp4.TWuDTt;
      let tmp6 = importDefault;
    } else {
      TWuDTt = tmp4["25YCHl"];
      tmp6 = importDefault;
    }
    obj.title = intl.string(TWuDTt);
    const intl2 = util.intl;
    obj.description = intl2.string(tmp6(3236).Ztl9ht);
    obj.onDismiss = onDismiss;
    const intl3 = util.intl;
    obj.buttonLabel = intl3.string(tmp6(3236)["+h9aza"]);
    obj.onButtonPress = callback1;
    return obj;
  }, items3);
  const obj2 = stateFromStores(markPopoverAsDismissed[5]);
  const coachmark = stateFromStores(markPopoverAsDismissed[10]).useCoachmark(targetRef, memo);
  return null;
}
const ContentDismissActionType = fn(1954).ContentDismissActionType;
const jsx = fn(21).jsx;
let items = [, , ];
({ GUILD_TEXT: arr[0], GUILD_ANNOUNCEMENT: arr[1], GUILD_FORUM: arr[2] } = fn(1074).ChannelTypes);
const set = new Set(items);
const size = fn(2);
const result = size.fileFinishedImporting("modules/favorites/native/onboarding/FavoritesGuildCoachmarkMenuItem.tsx");

export default function FavoritesGuildCoachmarkMenuItem(arg0) {
  let obj = FavoritesDismissibleContent;
  let tmp3 = null;
  if (obj.useShouldRenderFavoritesMenuItemPopover()) {
    obj = { zIndex: 1, children: null };
    obj = {};
    const merged = Object.assign(arg0);
    obj.children = <FavoritesGuildCoachmarkMenuItemContent />;
    tmp3 = jsx(LayerScope.LayerScope, {});
  }
  return tmp3;
};